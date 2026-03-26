'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './nav-buttons.module.css'

const navItems = [
  { href: '/', label: 'About Me' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
]

export default function NavButtons() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`${styles.button} ${pathname === href ? styles.active : ''}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
