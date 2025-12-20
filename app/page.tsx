"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Coins, 
  Key, 
  ChevronRight, 
  Wallet, 
  Shield, 
  Star,
  Gamepad2,
  Gift,
  Crown
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'coiz' | 'keys'>('coiz');

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 selection:bg-blue-500/30 font-sans">
      {/* Soft Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[30%] h-[30%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[15%] w-[30%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 container mx-auto px-6 py-12 lg:py-20 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Hệ thống GumballZ v3.0
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Giải pháp Game <span className="text-blue-500">Toàn diện</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Nạp Coiz nhanh chóng cho Discord Bot hoặc nhận Key trải nghiệm Mod Menu đỉnh cao. Tất cả đều tự động 24/7.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/5 flex gap-2">
            <button
              onClick={() => setActiveTab('coiz')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'coiz' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Coins className="w-5 h-5" /> Nạp Coiz
            </button>
            <button
              onClick={() => setActiveTab('keys')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'keys' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Key className="w-5 h-5" /> Hệ thống Key
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'coiz' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Nạp tiền vào tài khoản</h2>
                <p className="text-slate-400 leading-relaxed">
                  Sử dụng Coiz để mua vật phẩm, tham gia các hoạt động trong Discord Bot. 
                  Hệ thống hỗ trợ nạp qua MB Bank tự động xác nhận trong 1-3 phút.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: <Zap className="w-5 h-5 text-yellow-500" />, text: "Ưu đãi +20% giá trị nạp lần đầu" },
                    { icon: <Shield className="w-5 h-5 text-blue-500" />, text: "Giao dịch an toàn, bảo mật 100%" },
                    { icon: <Star className="w-5 h-5 text-purple-500" />, text: "Tích điểm đổi quà VIP" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5 shadow-sm">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/20 transition-all flex items-center gap-2 group">
                  Đến trang nạp tiền <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="bg-slate-800/40 rounded-[2.5rem] border border-white/10 p-10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <div className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Mô phỏng nạp</div>
                  <div className="space-y-4">
                    <div className="h-12 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 text-slate-500">Nhập ID Discord của bạn...</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-12 bg-white/5 rounded-xl border border-blue-500/50 flex items-center justify-center font-bold text-blue-400">10,000đ</div>
                      <div className="h-12 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center font-bold">20,000đ</div>
                    </div>
                    <div className="h-14 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 font-bold">Tiến hành nạp Coiz</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {/* Option 1 */}
              <div className="bg-slate-800/40 rounded-3xl border border-white/10 p-8 flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                  <Gift className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Key Miễn Phí</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Reset mỗi ngày 00:00 VN hằng ngày. Vượt link Yeulink để nhận.</p>
                </div>
                <Link href="/keys" className="w-full py-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold rounded-xl hover:bg-emerald-500 hover:text-white transition-all capitalize">Nhận key free</Link>
              </div>
              
              {/* Option 2 */}
              <div className="bg-slate-800/40 rounded-3xl border border-blue-500/30 p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden shadow-2xl shadow-blue-500/5">
                <div className="absolute top-4 right-4 bg-blue-500 text-[10px] font-black px-2 py-0.5 rounded-full text-white uppercase tracking-tighter">Popular</div>
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                  <Crown className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Key Premium</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Không quảng cáo, không vượt link. Thời hạn tính theo giờ mua.</p>
                </div>
                <Link href="/keys" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all capitalize">Mua key Premium</Link>
              </div>

              {/* Option 3 */}
              <div className="bg-slate-800/40 rounded-3xl border border-white/10 p-8 flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                  <Gamepad2 className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tải Mod Menu</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Tải xuống phiên bản Mod Menu mới nhất, tương thích mọi máy.</p>
                </div>
                <button className="w-full py-4 bg-purple-500/10 border border-purple-500/20 text-purple-500 font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all capitalize">Download APK</button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Basic Footer */}
      <footer className="border-t border-white/5 py-10 mt-20 opacity-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="font-bold tracking-widest italic uppercase">GumballZ System</div>
          <div>© 2024 Project GumballZ. Phát triển bởi VN Modder.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-blue-400">Điều khoản</Link>
            <Link href="#" className="hover:text-blue-400">Liên hệ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
