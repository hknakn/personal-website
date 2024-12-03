import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative will-change-transform",
  {
    variants: {
      variant: {
        default:
          "bg-primary/90 text-primary-foreground hover:bg-primary transition-colors",
        destructive:
          "bg-[#FF3B30] text-white hover:bg-[#FF3B30]/90 dark:bg-[#FF453A] dark:hover:bg-[#FF453A]/90 transition-colors",
        outline:
          "border border-border bg-background/50 backdrop-blur-xl hover:bg-accent/10 hover:text-accent-foreground transition-colors",
        secondary:
          "bg-[#F2F2F7] text-secondary-foreground hover:bg-[#E5E5EA] dark:bg-[#2C2C2E] dark:hover:bg-[#3A3A3C] transition-colors",
        ghost: "hover:bg-[#F2F2F7] hover:text-accent-foreground dark:hover:bg-[#2C2C2E] transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
