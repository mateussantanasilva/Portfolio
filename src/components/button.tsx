import { ComponentProps, ElementType } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg font-medium text-sm flex justify-center gap-1 items-center transition-all group',

  variants: {
    variant: {
      primary:
        'bg-slate-500 dark:text-slate-900 text-slate-50 hover:brightness-110',
      outline:
        'bg-transparent border-2 border-slate-500 text-slate-500 hover:bg-slate-500 hover:dark:text-slate-900 hover:text-white',
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
  extends ComponentProps<'a'>,
    VariantProps<typeof buttonVariants> {
  title: string
  icon?: ElementType
}

export function Button({
  title,
  icon: Icon,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <a className={buttonVariants({ variant, size })} {...props}>
      {Icon && (
        <Icon
          className={`size-3.5 ${variant === 'outline' ? 'text-slate-500 group-hover:text-white group-hover:dark:text-slate-900' : 'text-slate-50 dark:text-slate-900'}`}
        />
      )}
      {title}
    </a>
  )
}
