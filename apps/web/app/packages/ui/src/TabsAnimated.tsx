'use client'

import { useState } from 'react'

interface TabsAnimatedProps {
  tabs: { label: string; value: string }[]
  defaultTab: string
  onTabChange?: (tab: string) => void
}

const TabsAnimated = ({ tabs, defaultTab, onTabChange }: TabsAnimatedProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    onTabChange?.(tab)
  }

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleTabClick(tab.value)}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeTab === tab.value
              ? 'bg-primary text-white'
              : 'bg-muted text-foreground/60'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default TabsAnimated
