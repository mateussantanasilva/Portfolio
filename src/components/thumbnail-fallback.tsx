'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

import DefaultImg from '@/assets/default-front-cover.webp'

export function ThumbnailFallback({ src, alt, ...props }: ImageProps) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <Image
        src={DefaultImg}
        alt="Capa de projeto em desenvolvimento"
        {...props}
      />
    )
  }

  return (
    <Image src={src} alt={alt} onError={() => setImgError(true)} {...props} />
  )
}
