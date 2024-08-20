import { SKILLS } from '@/data/skills'
import { SkillsCard } from '../skills-card'

export function Skills() {
  return (
    <section>
      <header className="mb-10 flex flex-col items-center lg:mb-14">
        <span className="text-xs text-slate-400 dark:text-slate-300 lg:text-sm">
          Minhas habilidades
        </span>
        <h2 className="text-xl font-semibold text-slate-500 lg:text-2xl">
          Minha Experiência
        </h2>
      </header>

      <div className="mx-auto grid items-center gap-5 sm:max-w-md lg:max-w-max lg:grid-cols-skills lg:items-stretch lg:gap-10">
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
