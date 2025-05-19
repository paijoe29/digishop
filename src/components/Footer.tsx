import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Copy, Twitter, Instagram, Dribbble, Linkedin, Heart, HandMetal } from 'lucide-react';
import { showSuccess } from '@/utils/toast'; // Asumsi utilitas toast sudah ada

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/namasitus" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/namasitus" },
  { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com/namasitus" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/namasitus" },
];

const Footer: React.FC = () => {
  const email = "support@namasitus.com"; // Ganti dengan email Anda

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        showSuccess("Email disalin ke clipboard!");
      })
      .catch(err => {
        console.error("Gagal menyalin email: ", err);
        // showError("Gagal menyalin email."); // Opsional
      });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
        {/* Konten Utama Footer */}
        <div className="grid md:grid-cols-12 gap-8 items-start mb-10 md:mb-12">
          {/* Kiri: Teks dan Tombol Email */}
          <div className="md:col-span-8 lg:col-span-9">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
              Jangan ragu untuk menghubungi kami! <HandMetal size={28} className="ml-2 text-yellow-500 transform rotate-12" />
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl">
              Punya pertanyaan atau masukan? Kirimkan email atau hubungi kami melalui media sosial. Kami siap membantu!
            </p>
            <Button
              variant="default" // Menggunakan variant default agar bisa di-override sepenuhnya
              className="bg-slate-900 hover:bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300 font-medium py-2.5 px-5 rounded-lg group text-base inline-flex items-center transition-colors duration-200"
              onClick={handleCopyEmail}
            >
              {email}
              <Copy size={16} className="ml-2.5 text-slate-400 dark:text-slate-500 group-hover:text-slate-300 dark:group-hover:text-slate-600 transition-colors" />
            </Button>
          </div>

          {/* Kanan: Ikon Media Sosial */}
          <div className="md:col-span-4 lg:col-span-3 flex space-x-5 md:justify-end items-start mt-4 md:mt-1">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                aria-label={link.name}
              >
                <link.icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <Separator className="bg-slate-200 dark:bg-slate-700" />

        {/* Sub-Footer */}
        <div className="text-sm text-slate-500 dark:text-slate-400 pt-8 sm:flex sm:justify-between text-center sm:text-left">
          <p className="mb-2 sm:mb-0 flex items-center justify-center sm:justify-start">
            Dibuat dengan <Heart size={14} className="mx-1.5 text-red-500 fill-current" /> oleh Tim NamaSitus
          </p>
          <p>
            &copy; {new Date().getFullYear()} NamaSitus. Semua Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;