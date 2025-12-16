"use client";

import { useState } from "react";
import { Search, Loader2, CheckCircle2, XCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {
        const query = searchTerm.trim().includes("GUMZ") ? `content=${searchTerm.trim()}` : `id=${searchTerm.trim()}`;
        const res = await fetch(`/api/check-transaction?${query}`);
        const data = await res.json();
        
        // This API currently only returns { success: true/false }. 
        // For a full history lookup, we might need a dedicated API that returns details.
        // But for now, let's just confirm if it exists/success.
        if (data.success) {
            setResult({
                status: "success",
                message: "Giao dịch đã được ghi nhận thành công.",
                code: searchTerm
            });
        } else {
            setError("Không tìm thấy giao dịch hoặc giao dịch chưa thành công.");
        }
    } catch (err) {
        setError("Có lỗi xảy ra khi tra cứu.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-20 px-4">
        <div className="max-w-xl mx-auto space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-slate-900">Tra Cứu Giao Dịch</h1>
                <p className="text-slate-500">Nhập Mã đơn hàng (GUMZ...) hoặc ID giao dịch để kiểm tra trạng thái.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Nhập mã đơn hàng..."
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-mono"
                    />
                    <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <button 
                        type="submit"
                        disabled={loading || !searchTerm}
                        className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Kiểm tra"}
                    </button>
                </form>
            </div>

            {/* Results */}
            {result && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center gap-4"
                >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-green-800">Giao dịch thành công</h3>
                        <p className="text-green-700 text-sm">{result.message}</p>
                        <p className="text-green-600/80 text-xs font-mono mt-1">Ref: {result.code}</p>
                    </div>
                </motion.div>
            )}

            {error && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-center gap-4"
                >
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                         <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-red-800">Không tìm thấy</h3>
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                </motion.div>
            )}
            
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>Dữ liệu được cập nhật theo thời gian thực</span>
            </div>
        </div>
    </div>
  );
}
