import BlurFade from '@/components/ui/blur-fade';
import BoxReveal from '@/components/ui/box-reveal';
import config from '@/utils/config';

export default function About() {
  return (
    <>
      <BlurFade delay={0.25}>
        <img src={config.about.banner} className="rounded-lg" />
      </BlurFade>
      {config.about.text.map((ele, i) => (
        <div
          dir="rtl"
          key={'home-text-' + i}
          className="mt-5 bg-blue-50/90 p-5 rounded-lg"
        >
          <BoxReveal boxColor={'#4db6fb'} duration={0.5}>
            <p className="text-5xl font-semibold">{ele.title}</p>
          </BoxReveal>
          <BoxReveal boxColor={'#4db6fb'} duration={0.5}>
            <p className="text-xl mt-2">{ele.content}</p>
          </BoxReveal>
        </div>
      ))}
    </>
  );
}
