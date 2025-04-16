import { useState } from 'react'

export const useTabControl = (defaultTab: '7d' | '30d' | '90d' = '7d') => {
  const [tab, setTab] = useState<'7d' | '30d' | '90d'>(defaultTab)

  const changeTab = (newTab: '7d' | '30d' | '90d') => {
    setTab(newTab)
  }

  return { tab, changeTab }
}
