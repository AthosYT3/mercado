import { Droplets, CheckCircle2, Globe, Leaf, User, Tag, Wind } from "lucide-react"

export function ProductHighlights() {
  return (
    <section className="bg-card px-4 py-5">
      <h2 className="mb-4 text-lg font-semibold text-card-foreground">
        O que você precisa saber sobre este produto
      </h2>
      <ul className="flex flex-col gap-3" role="list">
        <li className="flex items-start gap-3 text-sm text-card-foreground">
          <span className="mt-0.5 text-muted-foreground">{"•"}</span>
          Volume da unidade: 105 mL
        </li>
        <li className="flex items-start gap-3 text-sm text-card-foreground">
          <span className="mt-0.5 text-muted-foreground">{"•"}</span>
          Perfume livre de crueldade animal.
        </li>
        <li className="flex items-start gap-3 text-sm text-card-foreground">
          <span className="mt-0.5 text-muted-foreground">{"•"}</span>
          {"País de origem: Emirados Árabes Unidos."}
        </li>
      </ul>
    </section>
  )
}

export function ProductCharacteristics() {
  const characteristics = [
    { icon: Droplets, label: "Tipo", value: "Eau de toilette" },
    { icon: CheckCircle2, label: "Volume da unidade", value: "105 mL" },
    { icon: Globe, label: "País de origem", value: "Emirados Árabes Unidos" },
    { icon: Leaf, label: "É vegano", value: "Não" },
    { icon: User, label: "Gênero", value: "Masculino" },
    { icon: Tag, label: "Marca", value: "Armaf" },
    { icon: Wind, label: "Tipo de aroma", value: "Amadeirado especiado" },
  ]

  return (
    <section className="bg-card px-4 py-5">
      <h2 className="mb-4 text-lg font-semibold text-card-foreground">
        Características do produto
      </h2>
      <ul className="flex flex-col gap-4" role="list">
        {characteristics.map((item) => (
          <li key={item.label} className="flex items-center gap-3">
            <item.icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
            <div className="text-sm text-card-foreground">
              <span className="text-muted-foreground">{item.label}: </span>
              <span className="font-semibold">{item.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function ProductDescription() {
  return (
    <section className="bg-card px-4 py-5">
      <h2 className="mb-4 text-xl font-semibold text-card-foreground">
        Descrição
      </h2>
      <div className="flex flex-col gap-4 text-sm leading-relaxed text-card-foreground">
        <p className="font-semibold">
          {"Armaf Club de Nuit Intense Man Eau de Toilette 105ml \u2013 Perfume Masculino Original"}
        </p>
        <p>
          {"Club de Nuit Intense Man da Armaf é uma fragrância envolvente, que combina notas frutadas e amadeiradas com um toque esfumaçado marcante. Ideal para homens que querem transmitir confiança, elegância e personalidade por onde passam."}
        </p>
        <p>
          {"Sua evolução na pele é surpreendente: começa com um frescor frutado vibrante e se transforma em uma essência sofisticada, intensa e duradoura."}
        </p>
        <p>
          {"Um verdadeiro classico moderno para quem valoriza presenca e estilo."}
        </p>
        <p>
          {"Lançado em 2015, esse perfume se consolidou como um dos maiores sucessos da Armaf, sendo comparado a fragrâncias de alto luxo por sua performance impressionante."}
        </p>
        <div className="border-t border-border pt-4">
          <p className="font-semibold">{"Pirâmide Olfativa:"}</p>
          <p className="mt-1">
            {"Notas de topo: Abacaxi, Limão, Bergamota, Maçã e Groselha Preta"}
          </p>
          <p className="mt-1">
            {"Notas de coração: Jasmim, Rosa e Bétula"}
          </p>
          <p className="mt-1">
            {"Notas de base: Patchouli, Baunilha, Âmbar e Almíscar"}
          </p>
        </div>
      </div>
    </section>
  )
}

export function PaymentMethods() {
  const methods = [
    { name: "Mercado Pago", src: "/images/mercadopago.svg" },
    { name: "Hipercard", src: "/images/hipercard.svg" },
    { name: "American Express", src: "/images/amex.svg" },
    { name: "Elo", src: "/images/elo.svg" },
    { name: "Visa", src: "/images/visa.png" },
    { name: "Pix", src: "/images/pix.svg" },
    { name: "Boleto", src: "/images/boleto.svg" },
  ]

  return (
    <section className="bg-card px-4 py-5">
      <h2 className="mb-4 text-lg font-semibold text-card-foreground">
        Meios de pagamento
      </h2>
      <div className="flex flex-wrap gap-2">
        {methods.map((method) => (
          <div
            key={method.name}
            className="flex h-9 w-14 items-center justify-center rounded border border-border bg-card"
            aria-label={method.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={method.src}
              alt={method.name}
              className="h-8 w-auto max-w-[48px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
