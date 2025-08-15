import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand-600 text-white shadow-lg hover:bg-brand-700 hover:shadow-xl active:scale-95',
        primary: 'bg-accent-500 text-white shadow-lg hover:bg-accent-600 hover:shadow-xl active:scale-95',
        secondary: 'bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200 active:scale-95',
        outline: 'border-2 border-brand-500 bg-transparent text-brand-500 hover:bg-brand-500 hover:text-white',
        ghost: 'bg-transparent text-brand-500 hover:bg-brand-50',
        destructive: 'bg-danger-500 text-white shadow-lg hover:bg-danger-600 hover:shadow-xl active:scale-95',
      },
      size: {
        default: 'h-12 px-6 py-3 text-base',
        sm: 'h-9 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
