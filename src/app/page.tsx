import { EstateSummary } from '@/modules/site/components/estate-summary';
import { Filter } from '@/modules/site/components/filter';
import { Footer } from '@/modules/site/components/footer';
import { Header } from '@/modules/site/components/header';
import { Carousel } from '@/modules/site/components/slider';

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Header />
      <Carousel />
      <div className="container  mx-auto ">
        <Filter />
      </div>
      <div className="container  mx-auto ">
        <div className="grid grid-cols-4 gap-2 mb-4">
          <EstateSummary />
          <EstateSummary />
          <EstateSummary />
          <EstateSummary />
          <EstateSummary />
          <EstateSummary />
          <EstateSummary />
          <EstateSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
}
