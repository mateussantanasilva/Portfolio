import { ArrowRight, Check, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

interface ServicesCardProps {
  title: string
  description: string
  services: string[]
}

export function ServicesCard({
  title,
  description,
  services,
}: ServicesCardProps) {
  return (
    <div className="w-full space-y-10 rounded-xl bg-slate-700 p-6 pt-12">
      <h3 className="max-w-48 font-semibold">{title}</h3>

      <Dialog.Root>
        <Dialog.Trigger className="flex items-center gap-1 text-sm text-slate-500">
          Ver mais
          <ArrowRight className="size-4 shrink-0" />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="bg-overlay fixed inset-0 h-screen w-screen" />

          <Dialog.Content className="fixed top-1/2 mx-4 -translate-y-1/2 rounded-3xl bg-slate-900 px-5 pb-10 pt-16">
            <Dialog.Close className="absolute right-6 top-6">
              <X className="size-6 text-slate-500" />
            </Dialog.Close>

            <Dialog.Title className="mb-4 text-center font-semibold text-slate-500">
              {title}
            </Dialog.Title>

            <Dialog.Description className="mb-8 text-center text-sm text-slate-200">
              {description}
            </Dialog.Description>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-2">
                  <Check className="size-5 shrink-0 text-slate-500" />
                  <span className="text-sm text-slate-200">{service}</span>
                </li>
              ))}
            </ul>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
