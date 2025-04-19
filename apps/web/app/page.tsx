'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTypewriter } from 'react-simple-typewriter'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Brain, Settings, Network, Sparkles } from "lucide-react"
import {
  FaRobot,
  FaChartBar,
  FaFileAlt,
  FaHeadset,
  FaWhatsapp,
  FaCogs,
  FaRocket,
  FaFolderOpen,
  FaDatabase,
  FaDesktop,
  FaPlug,
  FaCode,
  FaStore,
  FaMapMarkerAlt,     // <-- novo
  FaChartLine,        // <-- novo
  FaProjectDiagram,   // <-- novo
  FaCreditCard        // <-- novo
} from "react-icons/fa"
import IconWhatsapp from "./components/IconWhatsapp";
import Image from 'next/image'

const MotionDiv = motion.div
const MotionH1 = motion.h1
const MotionP = motion.p

const HeroSection = () => {
  const [subTitleText] = useTypewriter({
    words: [
      'Automate your WhatsApp business communications with AI agents.',
      'Reduce manual responses by 70%.',
      'Provide 24/7 customer support with ease.'
    ],
    typeSpeed: 40,
    deleteSpeed: 0,
    delaySpeed: 2000,
    loop: true,
  })

  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen mt-[-5em] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">

      {/* Geometric Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-8">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-slate-200/90 backdrop-blur-sm" />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 lg:pt-32">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full border border-cyan-100 bg-white/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-600" />
             
            </div>
          </MotionDiv>

          <MotionH1
  initial={{ opacity: 0, y: 30, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.1, ease: "easeOut" }}
>
  <div
    className="text-4xl md:text-6xl lg:text-7xl 
               font-bold 
               bg-clip-text 
               text-transparent 
               bg-gradient-to-r 
               from-cyan-200 
               via-cyan-600 
               to-cyan-400 
               mb-6 leading-tight 
               drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] 
               transition-all duration-700 ease-out"
  >
    NextAgentAI-Pro
    <br />
    AI-Powered Automation
  </div>
</MotionH1>


          <MotionP initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              {subTitleText}
            </p>
          </MotionP>

          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">

              {/* Start Free Trial */}
              <div className="relative group rounded-1 animate-border-glint overflow-hidden">
                <Button
                  size="lg"
                  className="h-12 px-6 text-base font-semibold border-cyan-900 text-cyan-900 bg-gradient-to-r from-cyan-700/10  to-cyan-600/20  hover:from-cyan-600/60 hover:to-cyan-900/30 relative z-10"
                >
                  Start Free Trial
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="absolute top-[-50%] left-[-120%] w-[200%] h-[200%]
                  bg-[linear-gradient(125deg,rgba(255,255,255,0)_30%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0)_52%)]
                  animate-glint pointer-events-none z-20 mix-blend-screen" />
              </div>

              {/* Schedule Demo */}
              <div className="relative group rounded-1 text-cyan animate-border-glint overflow-hidden">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 text-base font-semibold border-cyan-600 text-cyan-600 bg-white leading-tight 
               drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]  hover:bg-blue-50 relative z-10"
                >
                  Schedule Demo
                </Button>
                <div className="absolute top-[-50%] left-[-120%] w-[200%] h-[200%]
                  bg-[linear-gradient(125deg,rgba(255,255,255,0)_30%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0)_52%)]
                  animate-glint pointer-events-none z-20 mix-blend-screen" />
              </div>

            </div>
          </MotionDiv>
        </div>

        {/* Enterprise Cards */}

        <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
  <div className="grid grid-cols-1 md:grid-cols-3 h-[26em] w-[70em] gap-8 max-w-6xl mb-[7em] mx-auto relative">

    {/* Badge do mais popular */}
    <div className="hidden md:block absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
      <div className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm shadow-md">
        Mais Popular
      </div>
    </div>

    {/* Planos Reestruturados */}
    {[
      {
        title: "Starter IA",
        price: "R$ 147/mês",
        icon: <Brain className="h-3 w-3" />,
        items: [
          { label: "1 Agente IA - Whatsapp Bussines", icon: <FaRobot className="text-cyan-600" /> },
          { label: "Fluxo padrão de atendimento", icon: <FaFileAlt className="text-cyan-600" /> },
          { label: "Dashboard simples", icon: <FaChartBar className="text-cyan-600" /> },
          { label: "WhatsApp SDK incluso", icon: <FaWhatsapp className="text-cyan-700" /> },
          { label: "Setup em 30 minutos", icon: <FaRocket className="text-cyan-600" /> },
        ]
      },
      {
        title: "Performance",
        price: "R$ 697/mês",
        icon: <Settings className="h-3 w-3" />,
        items: [
          { label: "10 Agentes IA", icon: <FaRobot className="text-cyan-500" /> },
          { label: "Relatórios avançados", icon: <FaChartBar className="text-cyan-500" /> },
          { label: "Fluxos inteligentes", icon: <FaRocket className="text-cyan-500" /> },
          { label: "Painel Sci-Fi com branding parcial", icon: <FaDesktop className="text-cyan-500" /> },
          { label: "Integrações essenciais", icon: <FaPlug className="text-cyan-500" /> },
          { label: "WhatsApp Pro com múltiplas sessões", icon: <FaWhatsapp className="text-cyan-500" /> },
          { label: "Distribuição de mensagens", icon: <FaMapMarkerAlt className="text-cyan-500" /> },
          { label: "Gateways de pagamento ", icon: <FaCreditCard className="text-cyan-500" /> },
        ]
      },
      {
        title: "White-label Pro",
        price: "R$ 1.997/mês",
        icon: <Network className="h-3 w-3" />,
        items: [
          { label: "Marca própria completa ", icon: <FaCogs className="text-cyan-500" /> },
          { label: "Painel multi-cliente 10 empresas", icon: <FaFolderOpen className="text-cyan-500" /> },
          { label: "API personalizada", icon: <FaCode className="text-cyan-500" /> },
          { label: "Loja de templates IA", icon: <FaStore className="text-cyan-500" /> },
          { label: "WhatsApp Pro com múltiplas sessões", icon: <FaWhatsapp className="text-cyan-500" /> },
          { label: "Distribuição de mensagens", icon: <FaMapMarkerAlt className="text-cyan-500" /> },
          { label: "Gateways de pagamento ", icon: <FaCreditCard className="text-cyan-500" /> },
          { label: "Módulo Analytics IA ", icon: <FaChartLine className="text-cyan-600" /> },
  
          
        ]
      }
    ].map(({ title, price, icon, items }, index) => (
      <Card
        key={index}
        className="
        group relative 
        overflow-hidden 
        animate-border-glint 
        hover:shadow-xl 
        transition-all 
        duration-200 
        border border-white/10 
        bg-gradient-to-br bg-gradient-to-br from-white via-cyan-700/10 to-cyan-700/20  leading-tight 
        drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] backdrop-blur-md"
      >
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 group-hover:bg-blue-100 transition-colors">
              {icon}
            </div>
            <span>{title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            <div className="text-3xl font-bold text-cyan-600">{price}</div>
            <ul className="space-y-2 text-slate-700">
              {items.map((item, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span>{item.label}</span>
                  {item.icon}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        {/* Glint Effect */}
        <div className="absolute top-[-50%] left-[-120%] w-[200%] h-[200%] bg-[linear-gradient(125deg,rgba(255,255,255,0)_30%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_52%)] animate-glint pointer-events-none z-0" />
      </Card>
    ))}
  </div>
</MotionDiv>

      
      </div>

      {showImage && (
        <img
          src="/wa.png"
          alt="Bot Illustration"
          className="absolute bottom-4 right-6 w-40 h-auto z-30 pointer-events-none select-none opacity-0 animate-fade-in"
        />
      )}
     {/* Imagem principal (bot) flutuando à direita sem impactar o layout */}
<div className="absolute bottom-0 right-0 translate-y-1/3 w-[500px] h-[500px]  pointer-events-none select-none z-10">
  <Image
    src="/bot2.png"
    alt="Bot Next"
    fill
    className="object-contain"
    priority
  />
</div>
      
    </div>
    
    
  )
}

export default HeroSection
