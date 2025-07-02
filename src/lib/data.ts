export interface QrCodeData {
  company: string;
  product: string;
  companyLogo: string;
  productLogo: string;
  abbreviation: string;
  description: string;
  qrIcon: string;
  
}

export const productList: QrCodeData[] = [
  {
    company: "Alamzye Gym",
    product: "Abal",
    companyLogo: "/images/almazye_logo.png",
    productLogo: "/logos/abal.svg",
    abbreviation: "AB",
    description: "Member pass QR",
    qrIcon: "/logos/abal-icon.svg",
  },
  // Add other products here
];
