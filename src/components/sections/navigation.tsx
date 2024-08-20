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
        <li className="p-1.5">
          <House className="size-5 text-slate-400 dark:text-slate-200" />
        </li>
        <li className="p-1.5">
          <User className="size-5 text-slate-400 dark:text-slate-200" />
        </li>
        <li className="p-1.5">
          <BookUser className="size-5 text-slate-400 dark:text-slate-200" />
        </li>
        <li className="p-1.5">
          <Briefcase className="size-5 text-slate-400 dark:text-slate-200" />
        </li>
        <li className="p-1.5">
          <MessageSquareText className="size-5 text-slate-400 dark:text-slate-200" />
        </li>
      </ul>
    </nav>
  )
}
