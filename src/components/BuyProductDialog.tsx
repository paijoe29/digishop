import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

interface BuyProductDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
  whatsappNumber: string; // Nomor WhatsApp tujuan (misal: "6281234567890")
}

const BuyProductDialog: React.FC<BuyProductDialogProps> = ({
  isOpen,
  onOpenChange,
  product,
  whatsappNumber,
}) => {
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    // Reset nama ketika dialog dibuka untuk produk baru atau ditutup
    if (isOpen) {
      setCustomerName('');
    }
  }, [isOpen]);

  const handleWhatsAppRedirect = () => {
    if (!product || !customerName.trim()) {
      // Tambahkan validasi atau feedback jika nama kosong
      alert("Mohon masukkan nama Anda.");
      return;
    }

    const message = `Halo, saya tertarik untuk memesan produk:
Nama Produk: ${product.name}
Nama Saya: ${customerName.trim()}

Mohon informasinya lebih lanjut. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onOpenChange(false); // Tutup dialog setelah redirect
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-slate-900">
        <DialogHeader>
          <DialogTitle className="text-slate-900 dark:text-white">Pesan Produk: {product.name}</DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-slate-400">
            Silakan masukkan nama Anda untuk melanjutkan pemesanan melalui WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-slate-700 dark:text-slate-300">
              Nama
            </Label>
            <Input
              id="name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="col-span-3 bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-50"
              placeholder="Nama Lengkap Anda"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800">Batal</Button>
          </DialogClose>
          <Button 
            onClick={handleWhatsAppRedirect} 
            className="bg-green-500 hover:bg-green-600 text-white"
            disabled={!customerName.trim()}
          >
            Lanjut ke WhatsApp
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BuyProductDialog;