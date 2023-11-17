'use client';
import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai"

const Navbar = () => {

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/' }
  ]

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/"><AiFillBug /></Link>
      <ul className="flex space-x-6">
        {links.map((link, index)=> (
          <li key={link.href}><Link href="/" className="text-zinc-500 hover:text-zinc-800">{link.label}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar