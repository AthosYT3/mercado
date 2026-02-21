"use client"

import { Search, Menu, ShoppingCart, MapPin } from "lucide-react"
import { useState } from "react"

export function MLHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-ml-yellow">
      <div className="mx-auto max-w-5xl px-4 py-2">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <svg
              viewBox="0 0 40 40"
              className="h-8 w-8"
              fill="none"
              aria-label="Mercado Livre"
            >
              <circle cx="20" cy="20" r="20" fill="#FFE600" />
              <path
                d="M20 8C13.37 8 8 13.37 8 20s5.37 12 12 12 12-5.37 12-12S26.63 8 20 8zm0 2c2.76 0 5.26 1.12 7.07 2.93L20 20l-7.07-7.07A9.95 9.95 0 0120 10z"
                fill="#2D3277"
              />
              <path
                d="M13 17c0-1.1.9-2 2-2h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v3h3v-2c0-.55.45-1 1-1s1 .45 1 1v2h3v-3h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H15c-1.1 0-2-.9-2-2v-5z"
                fill="#2D3277"
              />
            </svg>
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
