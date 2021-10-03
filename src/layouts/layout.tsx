import Head from 'next/head';
import { ReactNode } from 'react';
import Sidemenu from '../components/common/sidemenu';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { Category } from '../types/category';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  categories: Category[];
}

const Layout = ({ children, title, description, categories }: Props) => {

  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="grid grid-cols-4 gap-12 w-8/12 mx-auto my-10">
          {/* main content */}
          <div className="col-span-3">
            {children}
          </div>

          {/* side menu */}
          <div className="col-span-1">
            <Sidemenu categories={categories} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

