"use client";

import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";
import { QrCodeData } from "@/lib/data";
import Link from "next/link";

interface QrCodeDisplayProps {
  data: string;
  qrData: QrCodeData;
}

const QrCodeDisplay = ({ data, qrData }: QrCodeDisplayProps) => {
  return (
    <div className="relative">
      {/* Animated background elements */}
      <div className="absolute -inset-4 opacity-30">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-400 to-emerald-700 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-600 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Main card */}
      <div className="relative w-[420px] bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl overflow-hidden">
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header with company info */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-6 py-1 border-2 border-white/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {qrData.company}
              </h1>
            </div>
            <p className="mt-1 text-sm text-gray-600 font-medium">
              {qrData.description}
            </p>
          </div>

          {/* QR Code with creative frame */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              {/* Animated ring around QR */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-green-600 to-teal-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition-opacity animate-pulse"></div>

              {/* QR Container */}
              <div className="relative bg-white rounded-lg p-6 shadow-xl border-2 border-white/50">
                <QRCodeCanvas
                  value={data}
                  size={240}
                  bgColor="#ffffff"
                  fgColor="#127858"
                  level="H"
                  imageSettings={{
                    src: qrData.qrIcon,
                    x: undefined,
                    y: undefined,
                    height: 40,
                    width: 40,
                    excavate: true,
                  }}
                />

                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-emerald-500 rounded-tl-lg"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-green-600 rounded-tr-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-teal-500 rounded-bl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-emerald-600 rounded-br-lg"></div>
              </div>
            </div>
          </div>

          {/* Logo section with creative layout */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full p-3 border border-white/50 px-6">
                <Image
                  src={qrData.companyLogo}
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div className="flex items-center gap-1">
                  <div className="w-0.5 h-6 rounded-full bg-gradient-to-b from-emerald-500 to-green-600 animate-pulse delay-200"></div>
                </div>
                <Image
                  src={qrData.productLogo}
                  alt="Product Logo"
                  width={80}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Product name with style
          <div className="text-center mb-6">
            <div className="inline-block">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent mb-2">
                {qrData.product}
              </h2>
              <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-green-600 to-teal-500 rounded-full"></div>
            </div>
          </div> */}

          {/* Footer with elegant branding */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full px-4 py-2 border border-gray-200/50 shadow-sm">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-600">
                Powered by
              </span>
              <Link
                href="https://www.woverasolutions.com"
                className="text-xs font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent hover:from-green-700 hover:to-teal-600 transition-all duration-300"
              >
                Wovera Solutions PLC
              </Link>
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-2 w-1 h-8 bg-gradient-to-b from-emerald-400 to-transparent rounded-full opacity-50"></div>
        <div className="absolute top-3/4 right-2 w-1 h-6 bg-gradient-to-b from-green-500 to-transparent rounded-full opacity-50"></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default QrCodeDisplay;
