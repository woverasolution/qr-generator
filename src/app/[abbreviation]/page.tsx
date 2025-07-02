"use client";

import React, { useRef, useCallback } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { toPng } from "html-to-image";
import { productList } from "@/lib/data";
import QrCodeDisplay from "@/components/QrCodeDisplay";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const QrCodePage = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  console.log(params);

  const abbreviation = params.abbreviation as string;
  const data = searchParams.get("d");

  const qrCodeRef = useRef<HTMLDivElement>(null);

  const productInfo = productList.find(
    (p) => p.abbreviation.toLowerCase() === abbreviation.toLowerCase()
  );

  const handleDownload = useCallback(() => {
    if (qrCodeRef.current === null) {
      return;
    }

    toPng(qrCodeRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${productInfo?.company}-${productInfo?.product}-qr.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [qrCodeRef, productInfo]);

  if (!productInfo) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-red-100 p-5">
        <h1 className="text-2xl font-bold text-red-700">
          Error: Product not found
        </h1>
        <p className="text-red-600">
          The product abbreviation &quot;{abbreviation}&quot; does not exist.
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-red-100 p-5">
        <h1 className="text-2xl font-bold text-red-700">Error: Data missing</h1>
        <p className="text-red-600">
          Please provide data in the URL, e.g., /{abbreviation}?d=your-data
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-5">
      <div ref={qrCodeRef}>
        <QrCodeDisplay data={data} qrData={productInfo} />
      </div>
      <Button
        onClick={handleDownload}
        className="mt-6 cursor-pointer border-none py-6 px-9 rounded-full text-base text-white transition-colors hover:bg-blue-700"
      >
        <Download className="mr-2 h-4 w-4" />
        Download QR Code
      </Button>
    </div>
  );
};

export default QrCodePage;
