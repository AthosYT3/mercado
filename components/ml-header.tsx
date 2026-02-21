"use client"

import { Search, Menu, ShoppingCart, MapPin } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function MLHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-ml-yellow">
      <div className="mx-auto max-w-5xl px-4 py-2">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Mercado Livre"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          {/* Search Bar */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Estou buscando"
              className="w-full rounded-sm bg-card py-2 pl-3 pr-10 text-sm text-card-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Buscar produtos"
            />
            <button
              className="absolute right-0 top-0 flex h-full items-center border-l border-border px-3 text-muted-foreground"
              aria-label="Buscar"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Right Icons */}
          <button className="text-card-foreground" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
          <button className="text-card-foreground" aria-label="Carrinho de compras">
            <ShoppingCart className="h-6 w-6" />
          </button>
        </div>

        {/* Location Bar */}
        <div className="mt-1 flex items-center gap-1 text-xs text-card-foreground/80">
          <MapPin className="h-3 w-3" />
          <span>Informe seu CEP</span>
          <span className="ml-1 text-card-foreground/60">{">"}</span>
        </div>
      </div>
    </header>
  )
}
