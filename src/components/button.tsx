import { ComponentProps, ElementType } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg font-medium text-sm flex justify-center gap-1 items-center',

  variants: {
    variant: {
      primary: 'bg-slate-500 dark:text-slate-900 text-slate-50',
      outline: 'bg-transparent border-2 border-slate-500 text-slate-500',
    },

    size: {
      sm: 'px-3 py-1.5 min-w-24',
      md: 'px-4 py-3 lg:text-base',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  title: string
  icon?: ElementType
}

export function Button({
  title,
  icon: Icon,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {Icon && (
        <Icon
          className={`size-3.5 ${variant === 'outline' ? 'text-slate-500' : 'text-slate-50 dark:text-slate-900'}`}
        />
      )}
      {title}
    </button>
  )
}
