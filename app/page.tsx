import { MLHeader } from "@/components/ml-header"
import { ProductGallery } from "@/components/product-gallery"
import { PurchaseSection } from "@/components/purchase-section"
import {
  ProductHighlights,
  ProductCharacteristics,
  ProductDescription,
  PaymentMethods,
} from "@/components/product-info"
import {
  ProductRatingOverview,
  ProductReviews,
} from "@/components/product-reviews"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <MLHeader />

      <main className="mx-auto max-w-5xl">
        {/* Desktop: Two Column Layout */}
        <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-2 lg:px-4 lg:py-4">
          {/* Left Column */}
          <div className="flex flex-col gap-2">
            <ProductGallery />
            <div className="hidden lg:block">
              <ProductHighlights />
            </div>
            <div className="hidden lg:block">
              <ProductCharacteristics />
            </div>
            <div className="hidden lg:block">
              <ProductDescription />
            </div>
          </div>

          {/* Right Column (Sticky on desktop) */}
          <div className="lg:sticky lg:top-4 lg:self-start">
            <PurchaseSection />
          </div>
        </div>

        {/* Mobile: Linear Layout for remaining sections */}
        <div className="flex flex-col gap-2 lg:px-4">
          <div className="lg:hidden">
            <ProductHighlights />
          </div>
          <div className="lg:hidden">
            <ProductCharacteristics />
          </div>
          <div className="lg:hidden">
            <ProductDescription />
          </div>
          <PaymentMethods />
          <ProductRatingOverview />
          <ProductReviews />
        </div>
      </main>

      {/* Footer spacer */}
      <div className="h-8 bg-background" />
    </div>
  )
}
