import type { VariantProps } from "tailwind-variants"
import type {
	modalCloseVariants,
	modalContentVariants,
	modalDescriptionVariants,
	modalFooterVariants,
	modalHeaderVariants,
	modalOverlayVariants,
	modalTitleVariants,
} from "./modal.variants"

export interface ModalProps {
	/**
	 * Controls the open state of the modal
	 */
	open?: boolean

	/**
	 * Callback when the modal's open state changes
	 */
	onOpenChange?: (open: boolean) => void

	/**
	 * Default open state for uncontrolled usage
	 * @default false
	 */
	defaultOpen?: boolean

	/**
	 * Modal content
	 */
	children?: React.ReactNode
}

export interface ModalTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ModalOverlayProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof modalOverlayVariants> {
	/**
	 * Callback when overlay is clicked
	 */
	onClose?: () => void
}

export interface ModalContentProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof modalContentVariants> {
	/**
	 * Whether to show the overlay
	 * @default true
	 */
	showOverlay?: boolean

	/**
	 * Whether to show the close button
	 * @default true
	 */
	showClose?: boolean

	/**
	 * Whether clicking the overlay closes the modal
	 * @default true
	 */
	closeOnOverlayClick?: boolean

	/**
	 * Whether pressing ESC closes the modal
	 * @default true
	 */
	closeOnEsc?: boolean

	/**
	 * Callback when close is requested
	 */
	onClose?: () => void
}

export interface ModalHeaderProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof modalHeaderVariants> {}

export interface ModalFooterProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof modalFooterVariants> {}

export interface ModalTitleProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof modalTitleVariants> {}

export interface ModalDescriptionProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof modalDescriptionVariants> {}

export interface ModalCloseProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof modalCloseVariants> {
	/**
	 * Whether this is used as the default close button (absolute positioned)
	 * or a custom close button in footer/content (relative positioned)
	 * @default "absolute"
	 */
	asChild?: boolean
}
