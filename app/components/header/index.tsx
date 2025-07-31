"use client"

import Image from "next/image"
import { useState } from "react"

export default function HeaderComponent() {
  const [isDark, setIsDark] = useState(true)

  const handleClick = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <header className="flex justify-between items-center pt-6 pb-10">
      <h1 className="text-3xl font-bold uppercase tracking-[.3em]">Todo</h1>
      <button className="cursor-pointer" onClick={handleClick}>
        {isDark ? (
          <Image src="/images/icon-sun.svg" width={20} height={20} alt="" />
        ) : (
          <Image src="/images/icon-moon.svg" width={20} height={20} alt="" />
        )}
      </button>
    </header>
  )
}
