import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'
import AuthLink from '@/components/authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Dquotes </div>
      <div className={styles.links}>
        <ThemeToggle></ThemeToggle>
        <Link href='/' className={styles.link}>Homepage</Link>
        <Link href='/blog' className={styles.link}>Blog</Link>
        <Link href='/about' className={styles.link}>About</Link>
        <Link href='/contact' className={styles.link}>Contact</Link>
        <AuthLink></AuthLink>
      </div>
    </div>
  )
}

export default Navbar