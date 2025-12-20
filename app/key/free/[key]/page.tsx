"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Key, CheckCircle2, Copy, Download, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FreeKeyClaimPage() {
  const params = useParams();
  const keyParam = params?.key as string;
  const [key, setKey] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (keyParam) {
      // Decode the key from URL
      const decodedKey = decodeURIComponent(keyParam);
      setKey(decodedKey);
    } else {
      setError("Không tìm thấy key trong URL");
    }
  }, [keyParam]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadAsText = () => {
    const blob = new Blob([key], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gumballz-free-key.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        {error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Lỗi</h1>
            <p className="text-red-200 mb-6">{error}</p>
            <Link 
              href="/keys"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Quay lại
            </Link>
          </div>
        ) : (
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-xl">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-black text-white text-center mb-3">
              🎉 Key Miễn Phí Của Bạn
            </h1>
            <p className="text-slate-400 text-center mb-8">
              Chúc mừng! Bạn đã nhận được key miễn phí. Sao chép key bên dưới để sử dụng.
            </p>

            {/* Key Display */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Key className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                  Free Key (Today Only)
                </span>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <code className="text-sm md:text-base font-mono text-emerald-300 break-all leading-relaxed">
                  {key}
                </code>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={copyToClipboard}
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Đã sao chép!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Sao chép Key
                    </>
                  )}
                </button>
                <button
                  onClick={downloadAsText}
                  className="py-3 px-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Tải xuống
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <Key className="w-5 h-5 text-emerald-400" />
                Hướng dẫn sử dụng
              </h3>
              <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
                <li>Mở game và khởi động Mod Menu</li>
                <li>Nhập key vừa sao chép vào form login</li>
                <li>Tận hưởng các tính năng mod menu</li>
              </ol>
            </div>

            {/* Warning */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
              <p className="text-xs text-yellow-200/80 leading-relaxed">
                ⚠️ <strong>Quan trọng:</strong> Key miễn phí chỉ có hiệu lực trong ngày hôm nay (đến 23:59:59). Vào ngày mai, bạn cần lấy key mới.
              </p>
            </div>

            {/* Back to Keys Page */}
            <div className="flex gap-3">
              <Link
                href="/keys"
                className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-colors text-center flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Quay lại
              </Link>
              <Link
                href="/"
                className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-colors text-center"
              >
                Về trang chủ
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
