"use client"

import { ThumbsUp, MoreVertical, Filter } from "lucide-react"

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "lg" ? "h-6 w-6" : size === "md" ? "h-4 w-4" : "h-3.5 w-3.5"

  return (
    <div className="flex" aria-label={`${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClass} ${star <= rating ? "fill-primary text-primary" : "fill-border text-border"}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.18l-4.51 2.31.86-5.03L2.7 6.9l4.91-.06L10 1z" />
        </svg>
      ))}
    </div>
  )
}

function HalfStarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" }) {
  const sizeClass = size === "md" ? "h-5 w-5" : "h-3.5 w-3.5"
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.3

  return (
    <div className="flex" aria-label={`${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClass}`}
          viewBox="0 0 20 20"
        >
          {star <= fullStars ? (
            <path
              className="fill-primary text-primary"
              d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.18l-4.51 2.31.86-5.03L2.7 6.9l4.91-.06L10 1z"
            />
          ) : star === fullStars + 1 && hasHalf ? (
            <>
              <defs>
                <clipPath id={`half-${star}-${size}`}>
                  <rect x="0" y="0" width="10" height="20" />
                </clipPath>
              </defs>
              <path
                className="fill-border text-border"
                d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.18l-4.51 2.31.86-5.03L2.7 6.9l4.91-.06L10 1z"
              />
              <path
                className="fill-primary text-primary"
                clipPath={`url(#half-${star}-${size})`}
                d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.18l-4.51 2.31.86-5.03L2.7 6.9l4.91-.06L10 1z"
              />
            </>
          ) : (
            <path
              className="fill-border text-border"
              d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.18l-4.51 2.31.86-5.03L2.7 6.9l4.91-.06L10 1z"
            />
          )}
        </svg>
      ))}
    </div>
  )
}

export function ProductRatingOverview() {
  const ratingBars = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 8 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ]

  return (
    <section className="bg-card px-4 py-5">
      <h2 className="mb-4 text-lg font-semibold text-card-foreground">
        {"Opiniões do produto"}
      </h2>

      <div className="flex gap-6">
        {/* Rating Number */}
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold text-card-foreground">4.8</span>
          <StarRating rating={5} size="md" />
          <span className="mt-1 text-xs text-muted-foreground">
            {"3.216 avaliações"}
          </span>
        </div>

        {/* Rating Bars */}
        <div className="flex flex-1 flex-col justify-center gap-1.5">
          {ratingBars.map((bar) => (
            <div key={bar.stars} className="flex items-center gap-2">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${bar.percentage}%` }}
                />
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-xs text-muted-foreground">{bar.stars}</span>
                <svg className="h-2.5 w-2.5 fill-muted-foreground" viewBox="0 0 20 20">
                  <path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.18l-4.51 2.31.86-5.03L2.7 6.9l4.91-.06L10 1z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Ratings */}
      <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{"Duração do aroma"}</span>
          <HalfStarRating rating={4.5} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{"Intensidade do aroma"}</span>
          <HalfStarRating rating={4.5} />
        </div>
      </div>
    </section>
  )
}

export function ProductReviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      date: "03 jul. 2025",
      text: "A fragrância é perfeita. Comprei sem saber se ia gostar, realmente me surpreendeu. Uma borrifada apenas para testar e o cheiro ficou por muitas horas, ótima fixação. Na hora que borrifa ele exala um cheiro forte, depois de alguns minutos ele vai se adaptando até ficar no aroma perfeito, é amadeirado, mas não é daqueles que são muito fortes. É surreal. Com certeza vou comprar mais. Detalhe: é original, comprem sem medo.",
      helpful: 89,
      hasImages: true,
      images: [
        "/images/review1-1.webp",
        "/images/review1-2.webp",
        "/images/review1-3.webp",
      ],
    },
    {
      id: 2,
      rating: 5,
      date: "09 ago. 2025",
      text: "Produto 100% original, fiz todos os testes, o da válvula que é a principal tirando a tampa e o bico não sendo reto, é com certeza original e o cheiro é muito bom falam muito da saída mas até que não achei ruim na saída não mas depois de uns minutos de fato fica muito bom, podem comprar sem medo, e o produto foi enviado com cuidado enrolado no plástico bolha e ainda colocou algum cheirinho bom, aprovado!.",
      helpful: 39,
      hasImages: true,
      images: [
        "/images/review2-1.webp",
        "/images/review2-2.webp",
      ],
    },
    {
      id: 3,
      rating: 5,
      date: "21 abr. 2025",
      text: "O perfume é simplesmente maravilhoso, em relação ao Creed Aventus, 9.4 é a minha nota, super recomendo.",
      helpful: 25,
      hasImages: true,
      images: [
        "/images/review3-1.webp",
      ],
    },
  ]

  return (
    <section className="bg-card px-4 py-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-card-foreground">
            {"Opiniões em destaque"}
          </h2>
          <p className="text-xs text-muted-foreground">{"1.618 comentários"}</p>
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-primary">
          <Filter className="h-4 w-4" />
          Filtrar
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {reviews.map((review) => (
          <article key={review.id} className="flex flex-col gap-2">
            {/* Review Header */}
            <div className="flex items-center justify-between">
              <StarRating rating={review.rating} />
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>

            {/* Review Images */}
            {review.hasImages && (
              <div className="flex gap-2">
                {review.images ? (
                  review.images.map((src: string, idx: number) => (
                    <div
                      key={idx}
                      className="h-16 w-16 overflow-hidden rounded bg-muted"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`Foto da avaliacao ${review.id} - imagem ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))
                ) : (
                  [1, 2, 3].slice(0, review.id === 3 ? 1 : review.id === 1 ? 3 : 2).map((img) => (
                    <div
                      key={img}
                      className="h-16 w-16 overflow-hidden rounded bg-muted"
                    >
                      <div className="h-full w-full bg-gradient-to-br from-muted to-border" />
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Review Text */}
            <p className="text-sm leading-relaxed text-card-foreground">
              {review.text}
            </p>

            {/* Review Actions */}
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted transition-colors">
                {"É útil"}
                <ThumbsUp className="h-3 w-3" />
                {review.helpful}
              </button>
              <button className="text-muted-foreground" aria-label="Mais opções">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            {/* Divider */}
            {review.id < reviews.length && (
              <div className="mt-2 border-b border-border" />
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
