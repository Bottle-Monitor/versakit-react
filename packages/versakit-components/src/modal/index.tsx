import { cn } from "@versakit/shared"
import { X } from "lucide-react"
import {
	createContext,
	forwardRef,
	type MouseEvent,
	useContext,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from "react"
import { createPortal } from "react-dom"
import type {
	ModalCloseProps,
	ModalContentProps,
	ModalDescriptionProps,
	ModalFooterProps,
	ModalHeaderProps,
	ModalOverlayProps,
	ModalProps,
	ModalTitleProps,
	ModalTriggerProps,
} from "./modal.types"
import {
	modalCloseVariants,
	modalContentVariants,
	modalDescriptionVariants,
	modalFooterVariants,
	modalHeaderVariants,
	modalOverlayVariants,
	modalTitleVariants,
} from "./modal.variants"

// Context for modal state management
interface ModalContextValue {
	open: boolean
	onOpenChange: (open: boolean) => void
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined)

const useModalContext = () => {
	const context = useContext(ModalContext)
	if (!context) {
		throw new Error("Modal components must be used within a Modal")
	}
	return context
}

// Main Modal component
const Modal = ({ open: controlledOpen, onOpenChange, defaultOpen = false, children }: ModalProps) => {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)

	const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
	const setOpen = onOpenChange || setUncontrolledOpen

	const value = useMemo(
		() => ({
			open,
			onOpenChange: setOpen,
		}),
		[open, setOpen],
	)

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

// Trigger component
const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(({ className, onClick, ...props }, ref) => {
	const { onOpenChange } = useModalContext()

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		onOpenChange(true)
		onClick?.(e)
	}

	return <button ref={ref} type="button" className={className} onClick={handleClick} {...props} />
})
ModalTrigger.displayName = "ModalTrigger"

// Overlay component
const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(({ className, onClose, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(modalOverlayVariants({ className }))}
		onPointerDown={onClose}
		aria-hidden="true"
		{...props}
	/>
))
ModalOverlay.displayName = "ModalOverlay"

// Content component
const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
	(
		{
			className,
			size,
			showOverlay = true,
			showClose = true,
			closeOnOverlayClick = true,
			closeOnEsc = true,
			onClose,
			children,
			...props
		},
		ref,
	) => {
		const { open, onOpenChange } = useModalContext()
		const contentRef = useRef<HTMLDivElement>(null)
		const [mounted, setMounted] = useState(false)
		const [animationState, setAnimationState] = useState<"closed" | "open">("closed")

		// Merge refs
		useImperativeHandle(ref, () => contentRef.current as HTMLDivElement)

		// Mount/unmount handling
		useEffect(() => {
			setMounted(true)
			return () => setMounted(false)
		}, [])

		// Trigger animation after mount
		useEffect(() => {
			if (open && mounted) {
				// 使用 requestAnimationFrame 确保动画触发
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						setAnimationState("open")
					})
				})
			} else {
				setAnimationState("closed")
			}
		}, [open, mounted])

		// Handle ESC key
		useEffect(() => {
			if (!open || !closeOnEsc) return

			const handleKeyDown = (e: KeyboardEvent) => {
				if (e.key === "Escape") {
					e.preventDefault()
					onClose?.()
					onOpenChange(false)
				}
			}

			document.addEventListener("keydown", handleKeyDown)
			return () => document.removeEventListener("keydown", handleKeyDown)
		}, [open, closeOnEsc, onClose, onOpenChange])

		// Lock body scroll
		useEffect(() => {
			if (!open) return

			const originalStyle = window.getComputedStyle(document.body).overflow
			document.body.style.overflow = "hidden"

			return () => {
				document.body.style.overflow = originalStyle
			}
		}, [open])

		// Focus trap
		useEffect(() => {
			if (!open || !contentRef.current) return

			const focusableElements = contentRef.current.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			)

			const firstElement = focusableElements[0]
			const lastElement = focusableElements[focusableElements.length - 1]

			firstElement?.focus()

			const handleTabKey = (e: KeyboardEvent) => {
				if (e.key !== "Tab") return

				if (e.shiftKey) {
					if (document.activeElement === firstElement) {
						e.preventDefault()
						lastElement?.focus()
					}
				} else {
					if (document.activeElement === lastElement) {
						e.preventDefault()
						firstElement?.focus()
					}
				}
			}

			document.addEventListener("keydown", handleTabKey)
			return () => document.removeEventListener("keydown", handleTabKey)
		}, [open])

		const handleOverlayClick = () => {
			if (closeOnOverlayClick) {
				onClose?.()
				onOpenChange(false)
			}
		}

		const handleContentClick = (e: MouseEvent) => {
			e.stopPropagation()
		}

		if (!open || !mounted) return null

		return createPortal(
			<>
				{showOverlay && <ModalOverlay onClose={handleOverlayClick} data-state={animationState} />}
				<div
					ref={contentRef}
					role="dialog"
					aria-modal="true"
					data-state={animationState}
					className={cn(modalContentVariants({ size, className }))}
					onPointerDown={handleContentClick}
					{...props}
				>
					{children}
					{showClose && <ModalClose />}
				</div>
			</>,
			document.body,
		)
	},
)
ModalContent.displayName = "ModalContent"

// Header component
const ModalHeader = ({ className, ...props }: ModalHeaderProps) => (
	<div className={cn(modalHeaderVariants({ className }))} {...props} />
)
ModalHeader.displayName = "ModalHeader"

// Footer component
const ModalFooter = ({ className, ...props }: ModalFooterProps) => (
	<div className={cn(modalFooterVariants({ className }))} {...props} />
)
ModalFooter.displayName = "ModalFooter"

// Title component
const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(({ className, ...props }, ref) => (
	<h2 ref={ref} className={cn(modalTitleVariants({ className }))} {...props} />
))
ModalTitle.displayName = "ModalTitle"

// Description component
const ModalDescription = forwardRef<HTMLParagraphElement, ModalDescriptionProps>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn(modalDescriptionVariants({ className }))} {...props} />
))
ModalDescription.displayName = "ModalDescription"

// Close component
const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(
	({ className, children, onClick, asChild = false, ...props }, ref) => {
		const { onOpenChange } = useModalContext()

		const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
			onOpenChange(false)
			onClick?.(e)
		}

		// 如果 asChild 为 true 或有自定义 children，使用 relative 定位
		// 否则使用 absolute 定位（默认的右上角关闭按钮）
		const position = asChild || (children && children !== undefined) ? "relative" : "absolute"

		return (
			<button
				ref={ref}
				type="button"
				className={cn(modalCloseVariants({ position, className }))}
				onClick={handleClick}
				aria-label="Close"
				{...props}
			>
				{children || <X className="h-4 w-4" />}
			</button>
		)
	},
)
ModalClose.displayName = "ModalClose"

export {
	Modal,
	ModalClose,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	ModalTitle,
	ModalTrigger,
}
export type {
	ModalCloseProps,
	ModalContentProps,
	ModalDescriptionProps,
	ModalFooterProps,
	ModalHeaderProps,
	ModalOverlayProps,
	ModalProps,
	ModalTitleProps,
	ModalTriggerProps,
}
export {
	modalCloseVariants,
	modalContentVariants,
	modalDescriptionVariants,
	modalFooterVariants,
	modalHeaderVariants,
	modalOverlayVariants,
	modalTitleVariants,
}
