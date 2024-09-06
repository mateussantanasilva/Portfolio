import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface RevealProps {
  children: ReactNode
}

export function Reveal({ children }: RevealProps) {
  const ref = useRef(null)

  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: -20 }}
      animate={isInView && { opacity: 1, translateY: 0 }}
      transition={{ damping: 100, stiffness: 100, delay: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
