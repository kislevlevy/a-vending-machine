import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Particles from '@/components/ui/particles';

import Footer from './Footer';
import Header from './Header';
import RootFallback from './RootFallback';

export default function Root() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <Suspense fallback={<RootFallback />}>
          <div className="relative w-screen p-5 overflow-hidden max-w-5xl mx-auto">
            <Outlet />
          </div>
        </Suspense>
        <Footer />
      </div>
      <Particles
        className="fixed size-full inset-0 -z-10"
        quantity={200}
        ease={100}
        color="#000000"
        refresh
      />
    </>
  );
}
