import { BadgeCheck } from 'lucide-react'

interface SkillsCardProps {
  title: string
  skills: {
    tech: string
    level: string
  }[]
}

export function SkillsCard({ title, skills }: SkillsCardProps) {
  return (
    <div className="w-full space-y-6 rounded-xl bg-white px-4 py-6 shadow-md dark:bg-slate-700 dark:shadow-none xs:px-6 sm:px-16 sm:py-8">
      <h3 className="min-h-12 text-center font-semibold text-slate-500">
        {title}
      </h3>

      <ul className="mx-auto grid grid-cols-2 items-stretch gap-x-4 gap-y-4 xs:gap-x-10">
        {skills.map((skill) => (
          <li key={skill.tech} className="flex items-start gap-2">
            <BadgeCheck className="size-4 shrink-0 text-slate-500" />

            <div className="space-y-1.5">
              <strong className="block text-sm font-medium">
                {skill.tech}
              </strong>
              <span className="text-xs text-slate-400 dark:text-slate-200">
                {skill.level}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
