"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Key, 
  Clock, 
  Copy, 
  CheckCircle2, 
  Gift, 
  Crown,
  Calendar,
  Shield,
  ArrowRight,
  Sparkles,
  Download
} from "lucide-react";
import Link from "next/link";

// Key packages with pricing
const KEY_PACKAGES = [
  { days: 1, price: 10000, label: "1 Ngày", popular: false },
  { days: 7, price: 50000, label: "7 Ngày", popular: true },
  { days: 30, price: 150000, label: "30 Ngày", popular: true },
  { days: 90, price: 350000, label: "90 Ngày", popular: false },
];

export default function KeysPage() {
  const [freeKeyLink, setFreeKeyLink] = useState<string>("");
  const [freeKeyExpiry, setFreeKeyExpiry] = useState<string>("");
  const [loadingFree, setLoadingFree] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [loadingPremium, setLoadingPremium] = useState(false);

  const fetchFreeKey = async () => {
    setLoadingFree(true);
    try {
      const res = await fetch("/api/keys/generate-free", {
        method: "POST",
      });
      const data = await res.json();
      
      if (data.success) {
        setFreeKeyLink(data.shortLink);
        setFreeKeyExpiry(data.expiresAt);
      }
    } catch (error) {
      console.error("Error fetching free key:", error);
    } finally {
      setLoadingFree(false);
    }
  };

  const handlePurchaseKey = async () => {
    if (!selectedPackage) {
      alert("Vui lòng chọn gói key");
      return;
    }

    const pkg = KEY_PACKAGES.find(p => p.days === selectedPackage);
    if (!pkg) return;

    setLoadingPremium(true);
    try {
      const res = await fetch("/api/keys/generate-premium", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          days: pkg.days,
          amount: pkg.price
        })
      });

      const data = await res.json();
      
      if (data.success) {
        // Redirect to short link
        alert(`Key đã được tạo!\n\nVui lòng truy cập link sau để nhận key:\n${data.shortLink}`);
        // In production, you might want to open in new tab
        // window.open(data.shortLink, '_blank');
      }
    } catch (error) {
      console.error("Error creating premium key:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoadingPremium(false);
    }
  };

  const formatExpiry = (isoDate: string) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    return date.toLocaleString('vi-VN', { 
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Shield className="w-6 h-6 text-blue-500" />
            <span>GumballZ</span>
          </Link>
          <Link 
            href="/" 
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
          >
            Nạp Coiz
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
          >
            <Key className="w-4 h-4" />
            Key Mod Menu
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Lấy Key <span className="text-blue-500">Mod Menu</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Key miễn phí mỗi ngày hoặc mua key premium với nhiều ưu đãi
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* FREE KEY Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-emerald-500/10 to-green-500/5 border border-emerald-500/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Key Miễn Phí</h2>
                  <p className="text-sm text-slate-400">Reset mỗi ngày lúc 00:00</p>
                </div>
              </div>

              {loadingFree ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500/20 border-t-emerald-500"></div>
                </div>
              ) : freeKeyLink ? (
                <div className="space-y-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                    <p className="text-sm text-emerald-200 mb-3">
                      ✓ Link lấy key đã sẵn sàng! Bấm nút bên dưới để vượt link và nhận key miễn phí.
                    </p>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>Hết hạn: {formatExpiry(freeKeyExpiry)}</span>
                    </div>
                  </div>

                  <a
                    href={freeKeyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <Download className="w-5 h-5" />
                    Vượt Link & Nhận Key
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                    <p className="text-xs text-yellow-200/80 leading-relaxed">
                      ⚠️ <strong>Lưu ý:</strong> Sau khi vượt link, bạn sẽ nhận được key miễn phí. Key chỉ có hiệu lực trong ngày hôm nay.
                    </p>
                  </div>

                  <button
                    onClick={() => setFreeKeyLink("")}
                    className="w-full py-3 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    Tạo link mới
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <button
                    onClick={fetchFreeKey}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 mx-auto"
                  >
                    <Gift className="w-6 h-6" />
                    Lấy Key Miễn Phí
                  </button>
                  <p className="text-slate-400 text-sm mt-4">Bấm nút để tạo link lấy key miễn phí</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* PREMIUM KEY Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Key Premium</h2>
                  <p className="text-sm text-slate-400">Không giới hạn thời gian sử dụng</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-sm text-slate-300">Chọn gói key:</p>
                <div className="grid grid-cols-2 gap-3">
                  {KEY_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.days}
                      onClick={() => setSelectedPackage(pkg.days)}
                      className={`relative cursor-pointer group rounded-xl border-2 p-4 transition-all ${
                        selectedPackage === pkg.days
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-slate-700/50 bg-slate-800/30 hover:border-slate-600"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          PHỔ BIẾN
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="font-bold">{pkg.label}</span>
                      </div>
                      <p className="text-lg font-black text-blue-400">
                        {(pkg.price).toLocaleString('vi-VN')}đ
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePurchaseKey}
                disabled={!selectedPackage || loadingPremium}
                className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all ${
                  selectedPackage && !loadingPremium
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-700/50 text-slate-400 cursor-not-allowed"
                }`}
              >
                {loadingPremium ? (
                  <>Đang xử lý...</>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Mua Key Premium
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-xs text-blue-200/80 leading-relaxed">
                  💎 <strong>Ưu đãi:</strong> Key premium không bị giới hạn số lần sử dụng và có thời hạn dài hơn.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* How to Use Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Key className="w-6 h-6 text-blue-500" />
            Cách sử dụng Key
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Lấy Key</h4>
                <p className="text-sm text-slate-400">Lấy key miễn phí hoặc mua key premium theo nhu cầu</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Mở Mod Menu</h4>
                <p className="text-sm text-slate-400">Khởi động game và mở Mod Menu trong game</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Nhập Key</h4>
                <p className="text-sm text-slate-400">Nhập key vào form login để sử dụng các tính năng</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
