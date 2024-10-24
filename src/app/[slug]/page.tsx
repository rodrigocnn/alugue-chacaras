import { Footer } from '@/modules/site/components/footer';
import { Header } from '@/modules/site/components/header';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-slate-200">
      <Header />

      <div className="container  mx-auto ">
        <div className="grid grid-cols-4 gap-2 mb-4">{params.slug}</div>
      </div>
      <Footer />
    </div>
  );
}
