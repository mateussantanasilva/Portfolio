import { SERVICES } from '@/data/services'
import { ServicesCard } from '../services-card'

export function Services() {
  return (
    <section>
      <header className="mb-10 flex flex-col items-center">
        <span className="text-xs text-slate-300">Meus serviços</span>
        <h2 className="text-xl font-semibold text-slate-500">O Que Ofereço</h2>
      </header>

      <div className="mx-4 flex flex-col items-center gap-5">
        {SERVICES.map((category) => (
          <ServicesCard
            key={category.title}
            title={category.title}
            description={category.description}
            services={category.services}
          />
        ))}
      </div>
    </section>
  )
}
