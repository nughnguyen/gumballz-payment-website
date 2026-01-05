import { FileText, AlertCircle, ShieldCheck, Clock } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 pt-28 pb-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-100 border-[3px] border-slate-900 rounded-full shadow-[3px_3px_0px_0px_#1E293B] font-bold text-sm">
            <FileText className="w-4 h-4 text-orange-600" />
            <span className="text-slate-900">Terms of Service</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Điều Khoản <span className="text-cyan-500">Sử Dụng</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Vui lòng đọc kỹ trước khi sử dụng dịch vụ
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: Giới thiệu */}
          <div className="clay-card p-8 space-y-4 bg-gradient-to-br from-cyan-50 to-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500 border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Giới thiệu</h2>
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">
              Chào mừng bạn đến với <strong className="text-cyan-600">GumballZ Hub</strong>. Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản được quy định dưới đây.
            </p>
            <div className="p-4 bg-cyan-100 border-[3px] border-cyan-300 rounded-xl">
              <p className="text-cyan-800 font-bold text-sm">
                🎮 Hệ thống được xây dựng nhằm mục đích giải trí trong cộng đồng Discord
              </p>
            </div>
          </div>

          {/* Card 2: Quy định nạp Coiz */}
          <div className="clay-card p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-100 border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Quy định nạp Coiz</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 bg-yellow-400 border-2 border-slate-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-slate-900 text-xs font-bold">1</span>
                </div>
                <div className="font-medium">
                  Coiz là đơn vị tiền tệ ảo chỉ có giá trị sử dụng trong hệ thống bot Discord GumballZ.
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 bg-yellow-400 border-2 border-slate-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-slate-900 text-xs font-bold">2</span>
                </div>
                <div className="font-medium">
                  Coiz <strong className="text-red-600">không</strong> có giá trị quy đổi ngược lại thành tiền mặt.
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 bg-yellow-400 border-2 border-slate-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-slate-900 text-xs font-bold">3</span>
                </div>
                <div className="font-medium">
                  Mọi giao dịch nạp Coiz là tự nguyện và <strong className="text-red-600">không thể hoàn tiền</strong>.
                </div>
              </li>
            </ul>
          </div>

          {/* Card 3: Trách nhiệm người dùng */}
          <div className="clay-card p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]">
                <ShieldCheck className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Trách nhiệm của bạn</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Bạn chịu trách nhiệm bảo mật thông tin tài khoản Discord của mình.
            </p>
            <div className="p-5 bg-red-50 border-[3px] border-red-300 rounded-2xl">
              <p className="text-red-800 font-bold text-sm leading-relaxed">
                ⚠️ Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất nào do việc bạn để lộ thông tin hoặc nhập sai ID người nhận khi thực hiện giao dịch.
              </p>
            </div>
          </div>

          {/* Card 4: Xử lý sự cố */}
          <div className="clay-card p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Xử lý sự cố</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Trong trường hợp chuyển khoản nhưng không nhận được Coiz sau <strong className="text-blue-600">15 phút</strong>, vui lòng liên hệ với đội ngũ hỗ trợ.
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border-2 border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 font-medium text-sm">Cung cấp mã giao dịch</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border-2 border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 font-medium text-sm">Gửi bằng chứng thanh toán</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border-2 border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 font-medium text-sm">Liên hệ qua Discord</span>
              </div>
            </div>
          </div>

          {/* Card 5: Thay đổi điều khoản - Full width */}
          <div className="lg:col-span-2 clay-card p-8 space-y-4 bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-slate-200 border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]">
                <FileText className="w-6 h-6 text-slate-700" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Thay đổi điều khoản</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium text-center max-w-3xl mx-auto">
              Chúng tôi có quyền thay đổi, cập nhật các điều khoản này bất cứ lúc nào mà không cần báo trước. Việc bạn tiếp tục sử dụng dịch vụ đồng nghĩa với việc chấp thuận các thay đổi đó.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="clay-card inline-block px-8 py-4">
            <p className="text-slate-500 text-sm font-bold">
              📅 Cập nhật lần cuối: <span className="text-slate-900">15/12/2025</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
