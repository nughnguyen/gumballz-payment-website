"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gift, 
  Crown, 
  ShieldCheck, 
  Clock, 
  Zap, 
  ChevronRight, 
  Link as LinkIcon, 
  ExternalLink, 
  AlertTriangle,
  Loader2,
  Copy,
  Check
} from "lucide-react";
import Link from "next/link";

export default function KeysPage() {
  const [loadingFree, setLoadingFree] = useState(false);
  const [freeKeyLink, setFreeKeyLink] = useState("");
  const [freeKeyExpiry, setFreeKeyExpiry] = useState("");
  const [copied, setCopied] = useState(false);

  const fetchFreeKey = async () => {
    setLoadingFree(true);
    try {
      const res = await fetch("/api/keys/generate-free", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setFreeKeyLink(data.shortLink);
        setFreeKeyExpiry(data.expiresAt);
      } else {
        alert(data.error || "Không thể lấy key");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Lỗi kết nối server");
    } finally {
      setLoadingFree(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(freeKeyLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-cyan-500/30 pb-20">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-12">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6 group">
            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Về trang chủ
          </Link>
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
            HỆ THỐNG <span className="text-cyan-500">QUẢN LÝ KEY</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* FREE KEY SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-emerald-500/10">
                  <Gift className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  Dành cho trải nghiệm
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 italic">KEY MIỄN PHÍ</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Key miễn phí cung cấp các tính năng cơ bản của Mod Menu. Hết hạn vào cuối ngày và yêu cầu vượt link quảng cáo để ủng hộ DEV.
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span>Reset lúc 00:00 VN hằng ngày</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <span>Cần vượt 1 link Yeulink</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Mã hóa thiết bị theo máy</span>
                </div>
              </div>

              <div className="mt-auto">
                <AnimatePresence mode="wait">
                  {!freeKeyLink ? (
                    <motion.button
                      key="fetch-btn"
                      onClick={fetchFreeKey}
                      disabled={loadingFree}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 rounded-2xl bg-emerald-500 text-slate-900 font-black text-xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all disabled:opacity-50"
                    >
                      {loadingFree ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        <>
                          <Zap className="w-6 h-6" /> LẤY KEY MIỄN PHÍ
                        </>
                      )}
                    </motion.button>
                  ) : (
                    <motion.div
                      key="link-ready"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                          <Check className="w-4 h-4" /> Link đã sẵn sàng!
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-black/40 px-3 py-2 rounded-lg flex-grow font-mono text-xs overflow-hidden text-ellipsis whitespace-nowrap text-slate-300 border border-white/5">
                            {freeKeyLink}
                          </div>
                          <button 
                            onClick={copyToClipboard}
                            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                          </button>
                        </div>
                      </div>

                      <a
                        href={freeKeyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-5 rounded-2xl bg-white text-black font-black text-xl flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all uppercase tracking-tight"
                      >
                        Vượt Link & Nhận Key <ExternalLink className="w-6 h-6" />
                      </a>

                      <button 
                        onClick={() => setFreeKeyLink("")}
                        className="w-full text-slate-500 text-sm font-medium hover:text-slate-300 transition-colors uppercase tracking-widest"
                      >
                        Tạo link khác
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-yellow-500/80 leading-relaxed">
                    Key chỉ hết hạn vào cuối ngày hôm nay. Nếu link không chạy, hãy thử tạo lại link mới.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PREMIUM KEY SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-purple-500/10">
                  <Crown className="w-8 h-8 text-purple-400" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
                  Trải nghiệm tốt nhất
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 italic text-purple-100">KEY PREMIUM</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Tận hưởng toàn bộ sức mạnh của MOD VIP. Không quảng cáo, thời hạn linh hoạt và được cập nhật sớm nhất.
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Full tính năng VIP - No Ads - No Link</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Thời gian tính tròn từ lúc mua</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Hỗ trợ lỗi 1-1 nhanh chóng</span>
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <button
                  onClick={() => alert("Chức năng mua trực tiếp đang phát triển")}
                  className="w-full py-5 rounded-2xl bg-purple-600 text-white font-black text-xl flex items-center justify-center gap-3 hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all uppercase"
                >
                  Mua Key VIP <Crown className="w-6 h-6" />
                </button>
                <div className="text-center text-slate-500 text-sm">
                  Chỉ từ <span className="text-purple-400 font-bold">5.000đ</span> / ngày
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
