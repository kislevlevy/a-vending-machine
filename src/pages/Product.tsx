import { useNavigate, useParams } from 'react-router-dom';
import { LucideX } from 'lucide-react';

import BlurFade from '@/components/ui/blur-fade';
import config from '@/utils/config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatter = function (key: string, val: any) {
  if (['גובה', 'רוחב', 'עומק'].includes(key)) return `${val / 100} מטר`;
  if (key === 'משקל') return `${val} ק"ג`;
  else return val;
};

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = config.catalog.products.find((ele) => ele.id === id);

  return (
    <div className="container mx-auto p-4" dir="rtl">
      <div
        onClick={() => navigate(-1)}
        className="cursor-pointer text-black/70 hover:text-black"
      >
        <LucideX />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-4 p-4">
          <BlurFade delay={0.25}>
            <img src={product?.img} className="max-h-[500px] mx-auto" />
          </BlurFade>
        </div>
        <div className="w-full col-span-1 md:col-span-8 p-4 flex flex-col items-center">
          <p>{product?.more.text}</p>
          <div className="w-full mt-5 space-y-2">
            {product &&
              Object.entries(product.more.data).map(([key, val], i) =>
                val ? (
                  <div
                    className="w-full flex justify-between p-2 bg-gray-100 text-sm rounded-lg hover:bg-gray-200"
                    key={'product-info-' + i}
                  >
                    <span className="font-bold">{key}:</span>
                    <span>{formatter(key, val)}</span>
                  </div>
                ) : (
                  ''
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
