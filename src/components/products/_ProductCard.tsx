import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import BlurFade from '../ui/blur-fade';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    desc: string;
    img: string;
    more: {
      text: string;
      data: {
        יצרן?: string;
        גובה?: number;
        רוחב?: number;
        עומק?: number;
        משקל?: number;
        'חיבור חשמל'?: string;
        תכולה?: string;
      };
    };
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card dir="rtl" className="w-[350px] p-5">
      <CardHeader>
        <BlurFade delay={0.25}>
          <img src={product.img} className="w-full h-[350px] object-contain" />
        </BlurFade>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{product.desc}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link to={'/קטלוג-מכונות/' + product.id}>
          <Button variant="outline">קרא עוד</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
