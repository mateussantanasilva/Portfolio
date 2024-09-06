import { scrollToSection } from '@/utils/scroll-to-section'
import {
  BookUser,
  Briefcase,
  House,
  MessageSquareText,
  User,
} from 'lucide-react'

export function Navigation() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-10 w-9/10 max-w-80 -translate-x-1/2 rounded-4xl bg-nav-light px-9 py-4 backdrop-blur-md dark:bg-nav">
      <ul className="flex items-center justify-between">
        <button onClick={() => scrollToSection('hero')}>
          <li className="group p-1.5">
            <House className="size-5 text-slate-400 group-hover:contrast-200 dark:text-slate-200 group-hover:dark:text-slate-500" />
          </li>
        </button>

        <button onClick={() => scrollToSection('about')}>
          <li className="group p-1.5">
            <User className="size-5 text-slate-400 group-hover:contrast-200 dark:text-slate-200 group-hover:dark:text-slate-500" />
          </li>
        </button>

        <button onClick={() => scrollToSection('skills')}>
          <li className="group p-1.5">
            <BookUser className="size-5 text-slate-400 group-hover:contrast-200 dark:text-slate-200 group-hover:dark:text-slate-500" />
          </li>
        </button>

        <button onClick={() => scrollToSection('works')}>
          <li className="group p-1.5">
            <Briefcase className="size-5 text-slate-400 group-hover:contrast-200 dark:text-slate-200 group-hover:dark:text-slate-500" />
          </li>
        </button>

        <button onClick={() => scrollToSection('contact')}>
          <li className="group p-1.5">
            <MessageSquareText className="size-5 text-slate-400 group-hover:contrast-200 dark:text-slate-200 group-hover:dark:text-slate-500" />
          </li>
        </button>
      </ul>
    </nav>
  )
}
