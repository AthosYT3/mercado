"use client"

import { useState } from "react"
import { Truck, MapPin, Package, Heart, Share2, ChevronRight, Zap } from "lucide-react"

export function PurchaseSection() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="bg-card">
      {/* Price Section */}
      <div className="px-4 pt-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-light text-card-foreground">R$</span>
          <span className="text-3xl font-light text-card-foreground">279</span>
          <span className="text-base font-light text-card-foreground align-top">90</span>
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">
          12x R$ 27<sup>38</sup>
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {"Preco por litro: R$ 2.665,71"}
        </p>
        <a href="#" className="mt-1 block text-sm text-primary hover:underline">
          Ver os meios de pagamento
        </a>
      </div>

      {/* Shipping Section */}
      <div className="mt-4 border-t border-border px-4 pt-4">
        {/* Free Shipping Badge */}
        <div className="mb-3 inline-block rounded-sm bg-ml-green-light px-2 py-0.5">
          <span className="text-xs font-semibold text-ml-green">
            {"FRETE GRATIS ACIMA DE R$ 19"}
          </span>
        </div>

        {/* Delivery Option 1 */}
        <div className="flex gap-3">
          <Truck className="mt-0.5 h-5 w-5 flex-shrink-0 text-ml-green" />
          <div>
            <p className="text-sm text-card-foreground">
              {"Chegara "}
              <span className="font-semibold text-ml-green">{"gratis "}</span>
              <span className="font-semibold text-card-foreground">{"amanha domingo"}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              {"Comprando dentro das proximas "}
              <span className="font-semibold text-card-foreground">{"8 h 45 min"}</span>
            </p>
            <a href="#" className="text-xs text-primary hover:underline">
              Mais detalhes e formas de entrega
            </a>
          </div>
        </div>

        {/* Pickup Option */}
        <div className="mt-3 flex gap-3">
          <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-ml-green" />
          <div>
            <p className="text-sm text-card-foreground">
              {"Retire "}
              <span className="font-semibold text-ml-green">{"gratis "}</span>
              {"a partir de segunda-feira em uma agencia Mercado Livre"}
            </p>
            <p className="text-xs text-muted-foreground">
              {"Comprando dentro das proximas "}
              <span className="font-semibold text-card-foreground">{"10 h"}</span>
            </p>
            <a href="#" className="text-xs text-primary hover:underline">
              Ver no mapa
            </a>
          </div>
        </div>

        {/* Stock Info */}
        <div className="mt-4 flex items-center gap-2">
          <Package className="h-4 w-4 text-card-foreground" />
          <div>
            <p className="text-sm font-medium text-card-foreground">
              Estoque disponivel
            </p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              Armazenado e enviado pelo
              <span className="flex items-center gap-0.5 font-semibold text-ml-green">
                <Zap className="h-3 w-3 fill-ml-green text-ml-green" />
                FULL
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="mt-4 border-t border-border px-4 pt-4">
        <button className="flex w-full items-center justify-between rounded-lg border border-border px-4 py-3">
          <div className="flex items-baseline gap-1">
            <span className="text-sm text-muted-foreground">Quantidade:</span>
            <span className="text-sm font-semibold text-card-foreground">{quantity}</span>
            <span className="text-xs text-muted-foreground">(+50 disponiveis)</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>
        <p className="mt-2 text-xs text-muted-foreground">
          {"Voce pode comprar ate 2 unidades"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-col gap-2 px-4 pb-4">
        <button className="w-full rounded-md bg-primary py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
          Comprar agora
        </button>
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary/10 py-4 text-base font-semibold text-primary hover:bg-primary/15 transition-colors">
          <ShoppingCartIcon className="h-5 w-5" />
          Adicionar ao carrinho
        </button>
      </div>

      {/* Seller Info */}
      <div className="border-t border-border px-4 py-3">
        <p className="text-sm text-muted-foreground">
          {"Vendido por "}
          <span className="font-semibold text-primary">MAMS ECOMMERCE</span>
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded bg-ml-green-light px-1.5 py-0.5 text-xs font-semibold text-ml-green">
            MercadoLider
          </span>
          <span className="text-border">|</span>
          <span>+10mil vendas</span>
        </div>
      </div>

      {/* Favorite / Share */}
      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <button className="flex items-center gap-1 text-sm text-primary hover:underline">
          <Heart className="h-4 w-4" />
          Adicionar aos favoritos
        </button>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-card-foreground">
          <Share2 className="h-4 w-4" />
          Compartilhar
        </button>
      </div>
    </div>
  )
}

function ShoppingCartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
