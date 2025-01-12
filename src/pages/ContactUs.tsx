import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import config from '@/utils/config';
import { LucideMail, LucideMessageCircle, LucidePhone } from 'lucide-react';

const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: 'שם מלא חייב להיות לפחות 2 תווים.',
  }),
  email: z.string().email({
    message: 'כתובת דוא"ל חייבת להיות תקפה.',
  }),
  subject: z.string().min(2, {
    message: 'נושא חייב להיות לפחות 2 תווים.',
  }),
  body: z.string().min(10, {
    message: 'התוכן חייב להיות לפחות 10 תווים.',
  }),
});

export default function ContactUs() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      body: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-20" dir="rtl">
      <div className="col-span-1 md:col-span-5">
        <Card>
          <CardHeader>
            <CardTitle>צור קשר</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex p-2 bg-gray-100 gap-x-2 m-2 rounded-lg">
              <LucideMail />
              <a
                className="text-blue-500 hover:text-blue-700 w-full text-left"
                href={'mailto:' + config.email}
              >
                {config.email}
              </a>
            </div>
            <div className="flex p-2 bg-gray-100 gap-x-2 m-2 rounded-lg">
              <LucidePhone />
              <a
                className="text-blue-500 hover:text-blue-700 w-full text-left"
                href={'tel:' + config.phone}
              >
                {config.phone}
              </a>
            </div>
            <div className="flex p-2 bg-gray-100 gap-x-2 m-2 rounded-lg">
              <LucideMessageCircle />
              <a
                className="text-blue-500 hover:text-blue-700 w-full text-left"
                href={'https://api.whatsapp.com/send?phone=972' + config.phone}
              >
                {config.phone}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 col-span-1 md:col-span-7"
          dir="rtl"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>שם מלא</FormLabel>
                <FormControl>
                  <Input placeholder="הזן כאן את השם המלא שלך" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>דוא"ל</FormLabel>
                <FormControl>
                  <Input placeholder={'הזן כאן את הדוא"ל שלך'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>נושא</FormLabel>
                <FormControl>
                  <Input placeholder="הזן כאן את נושא הפנייה שלך" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>פירוט הפנייה</FormLabel>
                <FormControl>
                  <Textarea placeholder="פרט כאן על הפנייה שלך" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="outline">
            שלח
          </Button>
        </form>
      </Form>
    </div>
  );
}
