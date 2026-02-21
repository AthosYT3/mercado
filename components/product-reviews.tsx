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
        {"Opinioes do produto"}
      </h2>

      <div className="flex gap-6">
        {/* Rating Number */}
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold text-card-foreground">4.8</span>
          <StarRating rating={5} size="md" />
          <span className="mt-1 text-xs text-muted-foreground">
            {"3.216 avaliacoes"}
          </span>
        </div>

        {/* Rating Bars */}
        <div className="flex flex-1 flex-col justify-center gap-1.5">
          {ratingBars.map((bar) => (
            <div key={bar.stars} className="flex items-center gap-2">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-border"
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
          <span className="text-sm text-muted-foreground">{"Duracao do aroma"}</span>
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
      text: "A fragrancia e perfeita. Comprei sem saber se ia gostar, realmente me surpreendeu. Uma borrifada apenas para testar e o cheiro ficou por muitas horas, otima fixacao. Na hora que borrifa ele exala um cheiro forte, depois de alguns minutos ele vai se adaptando ate ficar no aroma perfeito, e amadeirado, mas nao e daqueles que sao muito fortes. E surreal. Com certeza vou comprar mais. Detalhe: e original, comprem sem medo.",
      helpful: 89,
      hasImages: true,
    },
    {
      id: 2,
      rating: 5,
      date: "09 ago. 2025",
      text: "Produto 100% original, fiz todos os testes, o da valvula que a principal tirando a tampa e o bico nao sendo reto, e com certeza original e o cheiro e muito bom falam muito da saida mas ate que nao achei ruim na saida nao mas depois de uns minutos de fato fica muito bom, podem comprar sem medo, e o produto foi enviado com cuidado enrolado no plastico bolha e ainda colocou algum cheirinho bom, aprovado!.",
      helpful: 39,
      hasImages: true,
    },
    {
      id: 3,
      rating: 5,
      date: "21 abr. 2025",
      text: "O perfume e simplesmente maravilhoso, em relacao ao creedy aventury, 9. 4 e a minha nota super recomendo.",
      helpful: 25,
      hasImages: true,
    },
  ]

  return (
    <section className="bg-card px-4 py-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-card-foreground">
            {"Opinioes em destaque"}
          </h2>
          <p className="text-xs text-muted-foreground">{"1.618 comentarios"}</p>
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

            {/* Review Images Placeholder */}
            {review.hasImages && (
              <div className="flex gap-2">
                {[1, 2, 3].slice(0, review.id === 3 ? 1 : review.id === 1 ? 3 : 2).map((img) => (
                  <div
                    key={img}
                    className="h-16 w-16 overflow-hidden rounded bg-muted"
                  >
                    <div className="h-full w-full bg-gradient-to-br from-muted to-border" />
                  </div>
                ))}
              </div>
            )}

            {/* Review Text */}
            <p className="text-sm leading-relaxed text-card-foreground">
              {review.text}
            </p>

            {/* Review Actions */}
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted transition-colors">
                {"E util"}
                <ThumbsUp className="h-3 w-3" />
                {review.helpful}
              </button>
              <button className="text-muted-foreground" aria-label="Mais opcoes">
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
