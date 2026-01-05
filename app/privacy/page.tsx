import { ShieldCheck, Lock, Database, Eye } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      <div className="container mx-auto px-6 pt-28 pb-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-100 border-[3px] border-slate-900 rounded-full shadow-[3px_3px_0px_0px_#1E293B] font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-cyan-600" />
            <span className="text-slate-900">Privacy Policy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Chính Sách <span className="text-cyan-500">Bảo Mật</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Cam kết bảo vệ thông tin cá nhân của bạn
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: Thu thập thông tin */}
          <div className="clay-card p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-100 border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]">
                <Database className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Thu thập thông tin</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Để thực hiện giao dịch, chúng tôi chỉ thu thập và lưu trữ các thông tin cần thiết tối thiểu:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 bg-cyan-500 border-2 border-slate-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <strong className="text-slate-900">Discord ID:</strong> Để xác định tài khoản nhận Coiz.
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 bg-cyan-500 border-2 border-slate-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <strong className="text-slate-900">Mã giao dịch:</strong> Để đối soát và xử lý nạp tiền tự động.
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 bg-cyan-500 border-2 border-slate-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <strong className="text-slate-900">Lịch sử nạp:</strong> Thời gian và số tiền để tra cứu.
                </div>
              </li>
            </ul>
          </div>

          {/* Card 2: Sử dụng thông tin */}
          <div className="clay-card p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Sử dụng thông tin</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Thông tin của bạn chỉ được sử dụng cho mục đích duy nhất là xử lý giao dịch nạp Coiz vào hệ thống Bot Discord.
            </p>
            <div className="p-5 bg-red-50 border-[3px] border-red-300 rounded-2xl">
              <p className="text-red-800 font-bold text-sm leading-relaxed">
                ⚠️ Chúng tôi <span className="underline">tuyệt đối không</span> chia sẻ, bán hoặc trao đổi thông tin cá nhân với bất kỳ bên thứ ba nào.
              </p>
            </div>
          </div>

          {/* Card 3: Bảo mật dữ liệu */}
          <div className="clay-card p-8 space-y-4 bg-gradient-to-br from-cyan-50 to-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500 border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Bảo mật dữ liệu</h2>
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">
              Mọi dữ liệu giao dịch đều được <strong>mã hóa</strong> và lưu trữ an toàn trên hệ thống cơ sở dữ liệu của Supabase. Chúng tôi áp dụng các biện pháp kỹ thuật để ngăn chặn truy cập trái phép.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-white border-[3px] border-slate-900 rounded-xl shadow-[2px_2px_0px_0px_#1E293B]">
                <div className="text-3xl font-black text-cyan-500">256-bit</div>
                <div className="text-sm text-slate-600 font-bold mt-1">Mã hóa SSL</div>
              </div>
              <div className="text-center p-4 bg-white border-[3px] border-slate-900 rounded-xl shadow-[2px_2px_0px_0px_#1E293B]">
                <div className="text-3xl font-black text-cyan-500">24/7</div>
                <div className="text-sm text-slate-600 font-bold mt-1">Giám sát bảo mật</div>
              </div>
            </div>
          </div>

          {/* Card 4: Quyền của người dùng */}
          <div className="clay-card p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 border-[3px] border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E293B]">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Quyền của bạn</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Bạn có quyền yêu cầu chúng tôi cung cấp thông tin về lịch sử giao dịch hoặc yêu cầu xóa dữ liệu cá nhân bằng cách liên hệ với quản trị viên.
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border-2 border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-700 font-medium text-sm">Truy cập dữ liệu của bạn</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border-2 border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-700 font-medium text-sm">Sửa đổi thông tin</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border-2 border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-700 font-medium text-sm">Yêu cầu xóa dữ liệu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="clay-card inline-block px-8 py-4">
            <p className="text-slate-500 text-sm font-bold">
              📅 Hiệu lực từ: <span className="text-slate-900">15/12/2025</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
