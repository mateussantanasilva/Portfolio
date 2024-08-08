import { SKILLS } from '@/data/skills'
import { SkillsCard } from '../skills-card'

export function Skills() {
  return (
    <section>
      <header className="mb-10 flex flex-col items-center">
        <span className="text-xs text-slate-300">Minhas habilidades</span>
        <h2 className="text-xl font-semibold text-slate-500">
          Minha Experiência
        </h2>
      </header>

      <div className="flex flex-col items-center gap-5">
        {SKILLS.map((category) => (
          <SkillsCard
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  )
}
