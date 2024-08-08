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
    <div className="w-full space-y-6 rounded-xl bg-slate-700 p-6">
      <h3 className="min-h-12 text-center font-semibold text-slate-500">
        {title}
      </h3>

      <ul className="grid grid-cols-2 items-stretch justify-between gap-x-10 gap-y-4">
        {skills.map((skill) => (
          <li key={skill.tech} className="flex items-start gap-2">
            <BadgeCheck className="size-4 shrink-0 text-slate-500" />

            <div className="space-y-1.5">
              <strong className="block text-sm font-medium">
                {skill.tech}
              </strong>
              <span className="text-xs text-slate-200">{skill.level}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
