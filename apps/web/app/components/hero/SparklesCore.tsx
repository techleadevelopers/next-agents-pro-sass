// SparklesCore.tsx
import React from 'react'

interface SparklesCoreProps {
  className?: string
}

const SparklesCore: React.FC<SparklesCoreProps> = ({ className }) => {
  return <div className={className}>✨</div>
}

export default SparklesCore
