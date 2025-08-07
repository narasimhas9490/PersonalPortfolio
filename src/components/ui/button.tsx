import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    
    const variants = {
      default: "bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400",
      destructive: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-400",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400",
      link: "text-black underline-offset-4 hover:underline focus:ring-2 focus:ring-gray-400",
    }

    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 px-3 py-2 text-sm",
      lg: "h-11 px-8 py-3 text-base",
      icon: "h-10 w-10",
    }

    if (asChild) {
      return (
        <div
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus:outline-none focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            sizes[size],
            className
          )}
          {...(props as any)}
        >
          {props.children}
        </div>
      )
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus:outline-none focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }