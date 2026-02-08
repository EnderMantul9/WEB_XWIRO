
"use client";

import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { STRATEGIC_INDICATORS } from "@/lib/mock-data";

export function IndicatorCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Indikator Strategis</h2>
              <p className="text-sm text-muted-foreground">Data statistik terkini dari berbagai sektor</p>
            </div>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {STRATEGIC_INDICATORS.map((indicator) => (
              <CarouselItem key={indicator.id} className="pl-4 md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
                <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-slate-50">
                  <CardContent className="p-6">
                    <div className="text-xs font-bold text-muted-foreground uppercase mb-3 line-clamp-2 h-8">
                      {indicator.title}
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-black text-primary">{indicator.value}</span>
                      <span className="text-sm font-medium text-muted-foreground">{indicator.unit}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[10px] font-semibold text-muted-foreground bg-white px-2 py-1 rounded-md border">
                        {indicator.period}
                      </span>
                      <div className={cn(
                        "flex items-center text-xs font-bold",
                        indicator.trend === "up" ? "text-emerald-600" : "text-rose-600"
                      )}>
                        {indicator.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        {indicator.trend === "up" ? "Meningkat" : "Menurun"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
