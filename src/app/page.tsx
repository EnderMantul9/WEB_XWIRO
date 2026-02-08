
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { IndicatorCarousel } from '@/components/IndicatorCarousel';
import { LatestInfoTabs } from '@/components/LatestInfoTabs';
import { StatsCharts } from '@/components/StatsCharts';
import { NewsGrid } from '@/components/NewsGrid';
import { SubjectStatistics } from '@/components/SubjectStatistics';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <IndicatorCarousel />
      <LatestInfoTabs />
      <StatsCharts />
      <NewsGrid />
      <SubjectStatistics />
      <Footer />
    </main>
  );
}
