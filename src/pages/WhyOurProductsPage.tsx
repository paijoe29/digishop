import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Users, ShieldCheck, Lightbulb, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturePoint: React.FC<{ icon: React.ElementType; title: string; children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.015] border border-transparent hover:border-yellow-500/30 cursor-pointer">
    <div className="p-4 bg-yellow-400 dark:bg-yellow-500 rounded-full mb-5 shadow-sm">
      <Icon size={32} className="text-slate-900 dark:text-white" />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{children}</p>
  </div>
);

const WhyOurProductsPage: React.FC = () => {
  return (
    // Latar belakang utama halaman sedikit disesuaikan untuk harmoni
    <div className="bg-gradient-to-b from-slate-100 to-yellow-100 dark:from-slate-900 dark:to-slate-800 py-12 md:py-16 px-0 md:px-4">
      <div className="container mx-auto max-w-screen-xl">
        {/* Header Section dengan gradient dan styling baru */}
        <header 
          className="text-center mb-16 md:mb-20 p-8 md:p-12 
                     bg-gradient-to-br from-white via-yellow-50 to-amber-100 
                     dark:from-slate-800 dark:via-slate-800/90 dark:to-yellow-900/40 
                     rounded-2xl shadow-lg"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Bukan Sekadar Produk Digital, Ini <span className="text-yellow-500">Transformasi Bisnis & Kreativitas</span> Anda.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 text-left md:text-center md:max-w-3xl md:mx-auto leading-relaxed">
            Di era digital yang dinamis, memiliki alat yang tepat adalah kunci. Kami tidak hanya menawarkan produk; kami mempersembahkan solusi yang dirancang untuk mengangkat karya, efisiensi, dan kesuksesan Anda ke level berikutnya.
          </p>
        </header>

        {/* Core Benefits Section */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Mengapa Memilih Solusi Digital dari <span className="text-yellow-500">NamaSitus</span>?
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturePoint icon={Award} title="Kualitas Tanpa Kompromi">
              Setiap detail, mulai dari kode hingga desain, kami kerjakan dengan presisi dan standar tertinggi. Hasilnya? Produk digital yang tidak hanya fungsional, tapi juga elegan, intuitif, dan memberikan dampak nyata bagi Anda.
            </FeaturePoint>
            <FeaturePoint icon={Lightbulb} title="Inovasi yang Memberdayakan">
              Kami terus berinovasi, mengintegrasikan teknologi terkini dan tren desain modern. Produk kami dirancang untuk masa depan, memastikan Anda selalu selangkah lebih maju dan siap menghadapi tantangan apa pun.
            </FeaturePoint>
            <FeaturePoint icon={Zap} title="Efisiensi & Produktivitas Maksimal">
              Waktu Anda berharga. Solusi kami dirancang untuk menyederhanakan proses kerja, mengotomatiskan tugas rutin, dan memungkinkan Anda fokus pada hal yang paling penting: mengembangkan ide dan mencapai tujuan besar Anda.
            </FeaturePoint>
            <FeaturePoint icon={Users} title="Dukungan Ahli yang Peduli">
              Anda tidak sendirian. Tim kami siap mendampingi, memberikan panduan, dan solusi cepat saat Anda membutuhkannya. Kami percaya pada kemitraan, bukan sekadar transaksi. Kesuksesan Anda adalah prioritas kami.
            </FeaturePoint>
            <FeaturePoint icon={ShieldCheck} title="Kepercayaan & Keamanan Terjamin">
              Kami membangun produk dengan integritas. Keamanan data dan keandalan platform adalah fondasi utama kami, sehingga Anda dapat berkarya dengan tenang dan percaya diri.
            </FeaturePoint>
            <FeaturePoint icon={CheckCircle} title="Investasi Cerdas, Hasil Nyata">
              Lebih dari sekadar biaya, produk kami adalah investasi untuk pertumbuhan jangka panjang. Dengan harga kompetitif, Anda mendapatkan nilai luar biasa yang akan terus memberikan manfaat berkelanjutan.
            </FeaturePoint>
          </div>
        </section>

        {/* Deeper Dive / Narrative Section */}
        <section className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 md:p-12 rounded-xl shadow-xl mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 text-center">Kami Mengerti Perjalanan Anda...</h2>
          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-loose text-left">
            <p>
              Mungkin Anda seorang <strong className="text-yellow-600 dark:text-yellow-400">profesional</strong> yang ingin meningkatkan produktivitas. Atau seorang <strong className="text-yellow-600 dark:text-yellow-400">kreator</strong> yang mencari alat untuk mewujudkan visi unik Anda. Bisa jadi Anda <strong className="text-yellow-600 dark:text-yellow-400">pemilik bisnis</strong> yang berambisi untuk menjangkau pasar lebih luas dan mengoptimalkan operasi. Siapapun Anda, kami tahu bahwa tantangan di dunia digital itu nyata: persaingan ketat, ekspektasi tinggi, dan kebutuhan untuk terus beradaptasi.
            </p>
            <p>
              Itulah mengapa <strong className="text-yellow-600 dark:text-yellow-400">NamaSitus</strong> hadir. Kami tidak hanya menciptakan produk berdasarkan fitur, tapi berdasarkan <strong className="text-yellow-600 dark:text-yellow-400">kebutuhan nyata</strong> dan <strong className="text-yellow-600 dark:text-yellow-400">aspirasi</strong> seperti Anda. Kami percaya bahwa teknologi seharusnya memberdayakan, bukan membebani. Produk kami adalah jembatan antara ide brilian Anda dan realisasi yang mengesankan.
            </p>
            <p>
              Bayangkan memiliki alur kerja yang lebih lancar, presentasi yang memukau, atau platform online yang bekerja tanpa henti untuk Anda. Itulah yang kami tawarkan – bukan hanya alat, tapi <strong className="text-yellow-600 dark:text-yellow-400">partner digital</strong> yang bisa Anda andalkan.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Siap Mengambil Langkah Berikutnya?</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Jangan biarkan potensi Anda terbatasi. Temukan bagaimana produk digital kami dapat membantu Anda mencapai lebih, lebih cepat, dan lebih efektif.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-yellow-500 text-slate-900 hover:bg-yellow-600 font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              <Link to="/#products">Jelajahi Produk Unggulan Kami</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-700 hover:bg-slate-200 dark:border-slate-300 dark:text-slate-300 dark:hover:bg-slate-700 font-semibold w-full sm:w-auto">
              <Link to="/#cta">Lihat Penawaran Spesial</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyOurProductsPage;