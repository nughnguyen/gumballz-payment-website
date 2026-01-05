"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Gamepad2,
  Bot,
  Star,
  Sparkles,
  Target,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Crown,
  Gem,
  Zap,
  Rocket,
  Trophy,
  Clock
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HubPage() {

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-200 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-200 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full blur-[120px] opacity-40" />
      </div>

      <main className="relative z-10">
        {/* Hero Section - Cream/Beige Background */}
        <section className="bg-[#FFF9F5] px-6 py-12 pt-28">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-100 border-[3px] border-slate-900 rounded-full shadow-[3px_3px_0px_0px_#1E293B] font-bold text-sm"
                >
                  <Bot className="w-4 h-4 text-cyan-600" />
                  <span className="text-slate-900">Discord Bot với 10+ Minigames</span>
                </motion.div>

                {/* Headline */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-black leading-tight"
                >
                  Nền Tảng <br />
                  <span className="text-cyan-500">Cộng Đồng</span><br />
                  <span className="text-slate-900">Toàn Diện</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-slate-600 leading-relaxed max-w-xl"
                >
                  Hệ thống tích hợp Discord Bot, thanh toán tự động và quản lý dịch vụ. 
                  Mang đến trải nghiệm hoàn hảo cho cộng đồng của bạn.
                </motion.p>

                {/* Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/keys"
                    className="clay-button inline-flex items-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Dùng Thử Miễn Phí
                  </Link>
                  <Link
                    href="#features"
                    className="clay-button-secondary"
                  >
                    Tìm Hiểu Thêm
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-6 pt-4"
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-slate-900">10+</div>
                    <div className="text-sm text-slate-600 font-medium">Minigames</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-slate-900">24/7</div>
                    <div className="text-sm text-slate-600 font-medium">Tự Động Hóa</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-slate-900">100%</div>
                    <div className="text-sm text-slate-600 font-medium">Miễn Phí</div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Floating Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="clay-card p-8 relative">
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-pink-300 border-[3px] border-slate-900 rounded-2xl shadow-[4px_4px_0px_0px_#1E293B] flex items-center justify-center float-animation">
                    <Target className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-300 border-[3px] border-slate-900 rounded-full shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center pulse-animation">
                    <Star className="w-6 h-6 text-slate-900 fill-slate-900" />
                  </div>
                  <div className="absolute top-1/2 -right-8 w-14 h-14 bg-purple-300 border-[3px] border-slate-900 rounded-2xl shadow-[4px_4px_0px_0px_#1E293B] flex items-center justify-center float-animation" style={{ animationDelay: '1s' }}>
                    <BookOpen className="w-7 h-7 text-slate-900" />
                  </div>

                  {/* Card Content */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-cyan-500 border-[3px] border-slate-900 rounded-full flex items-center justify-center">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Hack Map Pro</h3>
                      <p className="text-sm text-slate-600">12 tính năng • 4h 30m sử dụng</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-900">Tiến trình</span>
                      <span className="text-sm font-bold text-cyan-500">65%</span>
                    </div>
                    <div className="clay-progress">
                      <div className="clay-progress-fill" style={{ width: '65%' }} />
                    </div>
                  </div>

                  <Link
                    href="/store"
                    className="w-full py-3 bg-cyan-500 text-white font-bold rounded-2xl border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_#1E293B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1E293B] transition-all text-center block"
                  >
                    Tiếp Tục Chơi
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Popular Features Section - White Background */}
        <section className="bg-white px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4" id="features">
                Tính Năng <span className="text-cyan-500">Nổi Bật</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Khám phá các tính năng Discord Bot và hệ thống tự động hóa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature Card 1 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="clay-card p-6 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-300 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center">
                      <Gamepad2 className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Minigames Hub</h3>
                      <p className="text-sm text-slate-600">10+ trò chơi đa dạng</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-green-200 border-2 border-slate-900 rounded-full">
                    <Sparkles className="w-4 h-4 text-slate-900" />
                    <span className="text-sm font-bold text-slate-900">HOT</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium">
                  Câu cá, nối từ, bầu cua và nhiều minigame thú vị khác. Chơi cùng bạn bè, nhận phần thưởng.
                </p>
                <Link
                  href="/keys"
                  className="w-full py-2.5 bg-cyan-500 text-white font-bold rounded-xl border-[3px] border-slate-900 shadow-[3px_3px_0px_0px_#1E293B] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#1E293B] transition-all text-center block text-sm"
                >
                  Chơi Ngay
                </Link>
              </motion.div>

              {/* Feature Card 2 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="clay-card p-6 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-300 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center">
                      <Gem className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Hệ Thống Coiz</h3>
                      <p className="text-sm text-slate-600">Tiền ảo & phần thưởng</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-yellow-200 border-2 border-slate-900 rounded-full">
                    <Trophy className="w-4 h-4 text-slate-900 fill-slate-900" />
                    <span className="text-sm font-bold text-slate-900">NEW</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium">
                  Kiếm tiền ảo Coiz khi chơi game, đổi key VIP, và mua dịch vụ premium.
                </p>
                <Link
                  href="/store"
                  className="w-full py-2.5 bg-cyan-500 text-white font-bold rounded-xl border-[3px] border-slate-900 shadow-[3px_3px_0px_0px_#1E293B] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#1E293B] transition-all text-center block text-sm"
                >
                  Nạp Coiz
                </Link>
              </motion.div>

              {/* Feature Card 3 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="clay-card p-6 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-yellow-300 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center">
                      <Zap className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Auto Payment</h3>
                      <p className="text-sm text-slate-600">Thanh toán tự động QR</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-cyan-200 border-2 border-slate-900 rounded-full">
                    <Rocket className="w-4 h-4 text-slate-900" />
                    <span className="text-sm font-bold text-slate-900">FAST</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium">
                  Quét QR, chuyển khoản và nhận key tự động trong vài giây. An toàn, tiện lợi.
                </p>
                <Link
                  href="/history"
                  className="w-full py-2.5 bg-cyan-500 text-white font-bold rounded-xl border-[3px] border-slate-900 shadow-[3px_3px_0px_0px_#1E293B] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#1E293B] transition-all text-center block text-sm"
                >
                  Tra Cứu
                </Link>
              </motion.div>

              {/* Additional Feature Cards */}
              {/* Feature Card 4 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="clay-card p-6 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-cyan-200 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center">
                      <Users className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Cộng Đồng</h3>
                      <p className="text-sm text-slate-600">Discord Server hoạt động</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-purple-200 border-2 border-slate-900 rounded-full">
                    <Users className="w-4 h-4 text-slate-900" />
                    <span className="text-sm font-bold text-slate-900">ACTIVE</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium">
                  Tham gia cộng đồng sôi động, kết bạn, chơi game và nhận hỗ trợ từ admin 24/7.
                </p>
                <Link
                  href="https://discord.gg/gumballz"
                  target="_blank"
                  className="w-full py-2.5 bg-cyan-500 text-white font-bold rounded-xl border-[3px] border-slate-900 shadow-[3px_3px_0px_0px_#1E293B] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#1E293B] transition-all text-center block text-sm"
                >
                  Tham Gia
                </Link>
              </motion.div>

              {/* Feature Card 5 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="clay-card p-6 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-300 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center">
                      <ShieldCheck className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Hỗ Trợ 24/7</h3>
                      <p className="text-sm text-slate-600">Luôn sẵn sàng giúp đỡ</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-cyan-200 border-2 border-slate-900 rounded-full">
                    <Clock className="w-4 h-4 text-slate-900" />
                    <span className="text-sm font-bold text-slate-900">24/7</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium">
                  Đội ngũ hỗ trợ luôn sẵn sàng giải đáp thắc mắc và xử lý sự cố nhanh chóng.
                </p>
                <Link
                  href="https://discord.gg/gumballz"
                  target="_blank"
                  className="w-full py-2.5 bg-cyan-500 text-white font-bold rounded-xl border-[3px] border-slate-900 shadow-[3px_3px_0px_0px_#1E293B] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#1E293B] transition-all text-center block text-sm"
                >
                  Liên Hệ
                </Link>
              </motion.div>

              {/* Feature Card 6 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="clay-card p-6 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-orange-300 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Tài Liệu</h3>
                      <p className="text-sm text-slate-600">Hướng dẫn chi tiết</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-green-200 border-2 border-slate-900 rounded-full">
                    <BookOpen className="w-4 h-4 text-slate-900" />
                    <span className="text-sm font-bold text-slate-900">DOCS</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium">
                  Tài liệu hướng dẫn đầy đủ, dễ hiểu và cập nhật liên tục cho tất cả tính năng.
                </p>
                <Link
                  href="/downloads"
                  className="w-full py-2.5 bg-cyan-500 text-white font-bold rounded-xl border-[3px] border-slate-900 shadow-[3px_3px_0px_0px_#1E293B] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#1E293B] transition-all text-center block text-sm"
                >
                  Xem Docs
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us Section - Cream/Beige Background */}
        <section className="bg-[#FFF9F5] px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Tại Sao Chọn <span className="text-cyan-500">GumballZ Hub?</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Hàng ngàn game thủ đã tin tưởng và sử dụng GumballZ Hub
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="clay-card p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-cyan-200 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-10 h-10 text-slate-900" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Anti-Ban 100%</h3>
                <p className="text-slate-600">
                  Công nghệ bảo mật tiên tiến đảm bảo tài khoản của bạn luôn an toàn. 
                  Chúng tôi cam kết bảo vệ game thủ với tỷ lệ thành công 100%.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="clay-card p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-purple-200 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center mx-auto">
                  <Zap className="w-10 h-10 text-slate-900" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Cập Nhật Liên Tục</h3>
                <p className="text-slate-600">
                  Luôn cập nhật các tính năng mới nhất và vá lỗi thường xuyên. 
                  Đội ngũ phát triển làm việc 24/7 để mang đến trải nghiệm tốt nhất.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="clay-card p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-pink-200 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center mx-auto">
                  <Users className="w-10 h-10 text-slate-900" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Hỗ Trợ 24/7</h3>
                <p className="text-slate-600">
                  Đội ngũ hỗ trợ chuyên nghiệp luôn sẵn sàng giải đáp mọi thắc mắc. 
                  Phản hồi nhanh chóng qua Discord, Email và Live Chat.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="clay-card p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-yellow-200 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center mx-auto">
                  <Trophy className="w-10 h-10 text-slate-900" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Hiệu Suất Cao</h3>
                <p className="text-slate-600">
                  Tối ưu hóa hiệu suất để không ảnh hưởng đến FPS khi chơi game. 
                  Mod menu hoạt động mượt mà trên mọi thiết bị.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="clay-card p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-green-200 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center mx-auto">
                  <Award className="w-10 h-10 text-slate-900" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Dễ Sử Dụng</h3>
                <p className="text-slate-600">
                  Giao diện thân thiện, dễ dàng cài đặt chỉ trong 3 bước đơn giản. 
                  Không cần kiến thức kỹ thuật, ai cũng có thể sử dụng.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="clay-card p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-orange-200 border-[3px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#1E293B] flex items-center justify-center mx-auto">
                  <Rocket className="w-10 h-10 text-slate-900" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Giá Cả Hợp Lý</h3>
                <p className="text-slate-600">
                  Gói dịch vụ linh hoạt phù hợp với mọi túi tiền. 
                  Cam kết hoàn tiền 100% nếu không hài lòng.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Final CTA - Light Cyan/Blue Background */}
        <section className="bg-cyan-50 px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto"
          >
            <div className="clay-card p-12 md:p-16 text-center bg-gradient-to-br from-cyan-100 to-cyan-200 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-300/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/30 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 border-2 border-slate-900 rounded-full font-bold text-white text-sm mb-8 shadow-[3px_3px_0px_0px_#1E293B]">
                  <Crown className="w-4 h-4" />
                  Ưu Đãi Đặc Biệt
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                  Sẵn Sàng Bắt Đầu Chưa?
                </h2>
                <p className="text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-medium">
                  Tham gia cùng 2 triệu+ game thủ đang sử dụng GumballZ Hub. 
                  Trải nghiệm miễn phí ngay hôm nay!
                </p>
                <div className="flex flex-wrap gap-4 justify-center mb-12">
                  <Link
                    href="/store"
                    className="px-10 py-4 bg-cyan-500 text-white font-black rounded-2xl border-[3px] border-slate-900 shadow-[5px_5px_0px_0px_#1E293B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#1E293B] transition-all text-lg inline-flex items-center gap-2"
                  >
                    <Sparkles className="w-6 h-6" />
                    Bắt Đầu Miễn Phí
                  </Link>
                  <Link
                    href="/contact"
                    className="px-10 py-4 bg-white text-slate-900 font-black rounded-2xl border-[3px] border-slate-900 shadow-[5px_5px_0px_0px_#1E293B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#1E293B] transition-all text-lg"
                  >
                    Liên Hệ Hỗ Trợ
                  </Link>
                </div>
                
                {/* Features List */}
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="flex items-center gap-3 text-slate-900 justify-center">
                    <div className="w-10 h-10 bg-cyan-500 border-2 border-slate-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_#1E293B]">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold">Anti-Ban 100%</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-900 justify-center">
                    <div className="w-10 h-10 bg-cyan-500 border-2 border-slate-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_#1E293B]">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold">Cập Nhật Liên Tục</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-900 justify-center">
                    <div className="w-10 h-10 bg-cyan-500 border-2 border-slate-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_#1E293B]">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold">Hỗ Trợ 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}
