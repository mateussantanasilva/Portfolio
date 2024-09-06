export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)

  if (!section) return

  const targetSection =
    section?.getBoundingClientRect().top + window.scrollY - 105

  window.scrollTo({
    top: targetSection,
    behavior: 'smooth',
  })
}
