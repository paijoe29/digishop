import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'; // Menambahkan ikon yang relevan

const CallToActionSection: React.FC = () => {
  return (
    <section id="cta" className="bg-slate-900 text-white py-20 scroll-mt-20">
      <div className="container mx-auto max-w-3xl text-center px-4 sm:px-6">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Masih Ragu? <span className="text-yellow-400">Investasi Cerdas</span> untuk Proyek Impian Anda Ada di Sini!
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Jangan biarkan kesempatan emas terlewat. Produk digital kami dirancang untuk memberi Anda <strong className="font-semibold text-yellow-400">keunggulan kompetitif</strong>, <strong className="font-semibold text-yellow-400">menghemat waktu berharga</strong>, dan <strong className="font-semibold text-yellow-400">meningkatkan kualitas hasil akhir</strong> proyek Anda secara signifikan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
          <div className="flex items-start p-4 bg-slate-800 rounded-lg">
            <CheckCircle size={24} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Kualitas Terjamin & Teruji</h3>
              <p className="text-sm text-slate-400">Solusi profesional yang telah membantu banyak pengguna.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-slate-800 rounded-lg">
            <Zap size={24} className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Implementasi Cepat & Mudah</h3>
              <p className="text-sm text-slate-400">Langsung pakai dan lihat hasilnya dalam waktu singkat.</p>
            </div>
          </div>
        </div>
        
        <Button 
          className="bg-yellow-500 text-slate-900 hover:bg-yellow-600 font-bold transition-all duration-300 transform hover:scale-105 group rounded-lg w-full py-3 px-6 text-base md:w-auto md:py-4 md:px-10 md:text-lg"
        >
          Lihat Semua Produk & Penawaran
          <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
        
        <p className="mt-8 text-sm text-slate-400">
          Kepuasan Anda adalah prioritas kami. Ribuan pelanggan telah membuktikannya!
        </p>

      </div>
    </section>
  );
};

export default CallToActionSection;