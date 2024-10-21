import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from '@/shared/react-query-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Alugue Chácaras',
  description:
    'O mais novo site de aluguel por temporada dos Estados de São Paulo e Minas Gerais, alugue chácaras, ranchos, pousadas, salão de festa e sítios direto com o proprietário, aproveitem!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
