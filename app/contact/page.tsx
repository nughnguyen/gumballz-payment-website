"use client";

import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-20 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
           <h1 className="text-3xl font-bold text-slate-900">Liên Hệ Hỗ Trợ</h1>
           <p className="text-slate-500">Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">Discord Support</h3>
                    <p className="text-sm text-slate-500 mt-1">Tham gia server Discord của chúng tôi để được hỗ trợ trực tiếp từ đội ngũ Admin.</p>
                </div>
                <a href="#" className="inline-block text-blue-600 font-medium hover:underline text-sm">Tham gia ngay &rarr;</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                    <Mail className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">Email</h3>
                    <p className="text-sm text-slate-500 mt-1">Gửi email cho chúng tôi nếu bạn có vấn đề về thanh toán hoặc hợp tác.</p>
                </div>
                <a href="mailto:hungn@example.com" className="inline-block text-indigo-600 font-medium hover:underline text-sm">nugh@gmail.com</a>
            </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center space-y-4">
             <div className="inline-flex w-12 h-12 bg-slate-100 rounded-full items-center justify-center text-slate-600">
                 <MapPin className="w-6 h-6" />
             </div>
             <h3 className="font-bold text-slate-800">Thông tin bổ sung</h3>
             <p className="text-slate-500 text-sm max-w-lg mx-auto">
                 GumballZ Payment Gateway là một dự án phi lợi nhuận phục vụ cộng đồng. Mọi khoản đóng góp đều được sử dụng để duy trì Server và phát triển Bot.
             </p>
        </div>
      </div>
    </div>
  );
}
