import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'px-4 py-3 rounded-lg font-medium text-sm',

  variants: {
    variant: {
      primary: 'bg-slate-500 text-slate-900',
      outline: 'bg-transparent border-2 border-slate-500 text-slate-500',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  title: string
}

export function Button({ title, variant, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant })} {...props}>
      {title}
    </button>
  )
}
