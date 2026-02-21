"use client"

import { useState } from "react"
import { Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const productImages = [
  "/images/perfume.jpg",
]

export function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <div className="bg-card">
      {/* Brand Link */}
      <div className="px-4 pt-3">
        <a href="#" className="text-sm text-primary hover:underline">
          Conferir mais produtos da marca Armaf
        </a>
      </div>

      {/* Product Meta */}
      <div className="flex flex-wrap items-center gap-2 px-4 pt-2 text-xs text-muted-foreground">
        <span>Novo</span>
        <span className="text-border">|</span>
        <span>+10mil vendidos</span>
        <div className="flex items-center gap-1">
          <span className="text-primary">4.8</span>
          <div className="flex" aria-label="Avaliacao 4.8 de 5 estrelas">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="h-3 w-3 fill-primary"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.18l-4.51 2.31.86-5.03L2.7 6.9l4.91-.06L10 1z" />
              </svg>
            ))}
          </div>
          <span className="text-muted-foreground">(3216)</span>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 px-4 pt-1.5">
        <span className="rounded-sm bg-[#ff7733] px-2 py-0.5 text-xs font-semibold text-card">
          MAIS VENDIDO
        </span>
        <span className="text-xs text-primary">
          {"2\u00BA em Perfumes Armaf"}
        </span>
      </div>

      {/* Product Title */}
      <h1 className="px-4 pt-2 text-xl font-normal leading-tight text-card-foreground text-balance">
        Perfume Club De Nuit Intense Da Armaf Edt 105ml Masculino
      </h1>

      {/* Image Gallery */}
      <div className="relative mt-3">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={productImages[currentImage]}
            alt="Perfume Club De Nuit Intense Da Armaf Edt 105ml"
            fill
            className="object-contain p-6"
            priority
          />

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-card shadow-md"
            aria-label={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <Heart
              className={`h-5 w-5 ${isFavorited ? "fill-destructive text-destructive" : "text-muted-foreground"}`}
            />
          </button>

          {/* 100% Original Badge */}
          <div className="absolute right-4 top-16">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ml-green bg-ml-green-light">
              <span className="text-center text-[8px] font-bold leading-tight text-ml-green">
                100%
                <br />
                ORIGINAL
              </span>
            </div>
          </div>

          {/* Share Button */}
          <button
            className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-card shadow-md"
            aria-label="Compartilhar"
          >
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </button>

          {/* Image Counter */}
          <span className="absolute left-4 top-4 text-sm text-muted-foreground">
            {currentImage + 1} / {productImages.length}
          </span>
        </div>

        {/* Navigation Arrows (for multi-image) */}
        {productImages.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0 ? productImages.length - 1 : prev - 1
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card p-1 shadow-md"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === productImages.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card p-1 shadow-md"
              aria-label="Proxima imagem"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 pb-3 pt-2">
          {productImages.length > 1
            ? productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentImage ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))
            : (
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex h-2 w-2 items-center justify-center rounded-full bg-card-foreground">
                  <div className="h-0 w-0 border-l-[3px] border-t-[2px] border-b-[2px] border-l-card border-t-transparent border-b-transparent ml-[1px]" />
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-border" />
                <div className="h-1.5 w-1.5 rounded-full bg-border" />
                <div className="h-1.5 w-1.5 rounded-full bg-border" />
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
