'use client'

import { FC } from 'react'
import SectionTitle from '../../packages/ui/src/SectionTitle'
import CardVideo from '../../packages/ui/src/CardVideo'

// Dados simulados
const videos = [
  {
    title: 'Configurando a IA do Zero',
    thumbnail: 'https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg',
    onClick: () => alert('Abrir vídeo: Configurando a IA'),
  },
  {
    title: 'Utilizando Templates Inteligentes',
    thumbnail: 'https://img.youtube.com/vi/sBws8MSXN7A/maxresdefault.jpg',
    onClick: () => alert('Abrir vídeo: Templates'),
  },
  {
    title: 'Métricas e Performance de Atendimento',
    thumbnail: 'https://img.youtube.com/vi/hTWKbfoikeg/maxresdefault.jpg',
    onClick: () => alert('Abrir vídeo: Métricas'),
  },
]

const VideoTutoriais: FC = () => {
  return (
    <div className="space-y-6">
      <SectionTitle title="Tutoriais em Vídeo" subtitle="Veja como usar o NextAgent-Pro de forma estratégica" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <CardVideo
            key={index}
            title={video.title}
            thumbnail={video.thumbnail}
            onClick={video.onClick}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoTutoriais
