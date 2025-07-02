"use client";

import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";
import { QrCodeData } from "@/lib/data";
import { Separator } from "./ui/separator";
import Link from "next/link";

interface QrCodeDisplayProps {
  data: string;
  qrData: QrCodeData;
}

const QrCodeDisplay = ({ data, qrData }: QrCodeDisplayProps) => {
  return (
    <div className="w-96 rounded-lg bg-gradient-to-br from-white to-gray-50 p-8 text-center font-sans shadow-2xl">
      <div className=" pb-2">
        <p className="text-2xl font-semibold">{qrData.company}</p>
        <p className=" text-sm text-gray-500">{qrData.description}</p>
      </div>
      <div className="mb-6 inline-block rounded-2xl border border-gray-200 p-4">
        <QRCodeCanvas
          value={data}
          size={256}
          imageSettings={{
            src: qrData.companyLogo,
            x: undefined,
            y: undefined,
            height: 48,
            width: 48,
            excavate: true,
          }}
        />
      </div>
      <div className="mb-6 flex items-center justify-center space-x-4">
        <Image
          src={qrData.companyLogo}
          alt="Company Logo"
          width={64}
          height={64}
          className="object-contain"
        />
        <Separator orientation="vertical" className="h-full" />
        <Image
          src={qrData.productLogo}
          alt="Product Logo"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-sm font-bold text-gray-800">
          Powered By{" "}
          <Link href="https://www.woverasolutions.com" className="text-blue-500">
            Wovera solutions PLC
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default QrCodeDisplay;
