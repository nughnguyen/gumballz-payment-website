"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Star, ChevronRight, Gamepad2, Gift, Crown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Kích hoạt tức thì",
      description: "Hệ thống tự động xử lý key ngay sau khi thanh toán thành công."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: "Bảo mật tuyệt đối",
      description: "Mã hóa Device ID đảm bảo key của bạn chỉ dành riêng cho bạn."
    },
    {
      icon: <Star className="w-6 h-6 text-purple-400" />,
      title: "Premium Features",
      description: "Mở khóa toàn bộ tính năng mod menu chuyên nghiệp nhất."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-cyan-400 text-sm font-medium mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            GumballZ System v3.0 Is Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase italic"
          >
            GumballZ <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              HUB MENU
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed"
          >
            Hệ thống quản lý key chuyên biệt. Trải nghiệm tốc độ, bảo mật và tính năng vượt trội với GumballZ Mod Menu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            <Link
              href="/keys"
              className="group relative px-10 py-5 rounded-2xl bg-cyan-500 text-black font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-6 h-6" />
                TRỰC TIẾP LẤY KEY
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Options Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            whileHover={{ y: -10 }}
            className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/20 to-transparent shadow-2xl"
          >
            <div className="h-full p-8 md:p-12 rounded-[2.3rem] bg-[#111827]/80 backdrop-blur-xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <Gift className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 italic uppercase tracking-tighter">Key Miễn Phí</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Trải nghiệm thử các tính năng cơ bản của GumballZ. Key được reset hàng ngày.
                </p>
              </div>
              <ul className="space-y-4 mb-10 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Reset mỗi ngày lúc 00:00 VN
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Yêu cầu vượt link Yeulink
                </li>
              </ul>
              <Link
                href="/keys"
                className="w-full py-4 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold hover:bg-emerald-500 hover:text-white transition-all text-center uppercase tracking-widest"
              >
                Nhận Key Ngay
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-purple-500/20 to-transparent shadow-2xl"
          >
            <div className="h-full p-8 md:p-12 rounded-[2.3rem] bg-[#111827]/80 backdrop-blur-xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <Crown className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 italic uppercase tracking-tighter">Key Premium</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Mở khóa toàn bộ sức mạnh tối thượng, không quảng cáo, hỗ trợ ưu tiên.
                </p>
              </div>
              <ul className="space-y-4 mb-10 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Full tính năng VIP & No Ads
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Thời hạn linh hoạt theo giờ mua
                </li>
              </ul>
              <Link
                href="/keys"
                className="group w-full py-4 rounded-xl bg-purple-500 text-white font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all text-center uppercase tracking-widest flex items-center justify-center gap-2"
              >
                Mua Key VIP
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-[#111827]/50 backdrop-blur-md py-12">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="text-xl font-black italic tracking-widest text-slate-100 uppercase">GumballZ System</div>
          <div className="text-slate-500 text-sm">© 2024 GumballZ Project. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
