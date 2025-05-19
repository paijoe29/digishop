import React from 'react';
import { Award, Zap, Users, Settings2 } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface BenefitPoint {
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const benefits: BenefitPoint[] = [
    {
      icon: Award,
      title: "Kualitas Premium, Hasil Maksimal",
      description: "Setiap produk dirancang dengan standar tertinggi untuk memberikan Anda keunggulan kompetitif dan hasil yang nyata."
    },
    {
      icon: Zap,
      title: "Desain Modern & Intuitif",
      description: "Tampilan yang tidak hanya memukau secara visual tetapi juga fungsional, memastikan pengalaman pengguna yang luar biasa."
    },
    {
      icon: Users,
      title: "Dukungan Ahli, Kapan Saja Anda Butuh",
      description: "Tim kami siap membantu Anda di setiap langkah, memastikan Anda mendapatkan solusi terbaik dengan cepat."
    },
    {
      icon: Settings2,
      title: "Fleksibel & Mudah Disesuaikan",
      description: "Solusi kami siap pakai namun tetap memberikan keleluasaan untuk kustomisasi sesuai kebutuhan unik Anda."
    },
  ];

  return (
    <section 
      id="why-choose-us" 
      ref={ref} 
      className={cn(
        "py-16 text-foreground scroll-mt-20", // px-4 dihapus dari sini
        inView && "animate-in fade-in slide-in-from-bottom duration-700 ease-out"
    )}>
      <div className="container mx-auto max-w-screen-xl px-4 text-left"> {/* px-4 ditambahkan di sini */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center sm:text-left">
          Lebih Dari Sekadar Produk Digital
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 text-center sm:text-left">
          Kami adalah partner pertumbuhan Anda. Temukan mengapa ribuan pelanggan mempercayakan kami untuk solusi digital mereka.
        </p>
        
        <div className="space-y-8 md:space-y-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row items-start p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <benefit.icon className="text-green-600 dark:text-green-400" size={28} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;