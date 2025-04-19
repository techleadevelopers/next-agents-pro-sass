'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

const icon = { src: '/conversa.png' }

export default function SlideSap() {
  return (
    <div className="relative w-[40em] h-[40em] flex items-center justify-center bg-transparent">
      {/* Imagem principal (bot) */}
      <div className="relative left-[15em] bottom-[20em] w-[300px] h-[300px]">
        <Image
          src="/logo.png"
          alt="Bot principal"
          fill
          className="object-contain"
          priority
        />
      </div>
      </div>
  )
}
