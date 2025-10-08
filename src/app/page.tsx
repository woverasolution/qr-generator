"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { productList } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const router = useRouter();
  const [selectedGym, setSelectedGym] = useState("");
  const [memberCode, setMemberCode] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!selectedGym || !memberCode) {
      alert("Please select a gym and enter a member code");
      return;
    }

    const selectedProduct = productList.find(
      (p) => p.abbreviation === selectedGym
    );

    if (selectedProduct) {
      const encodedData = `${selectedProduct.product}-${memberCode}`;
      router.push(`/${selectedGym}?d=${encodedData}`);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-5">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            QR Code Generator
          </h1>
          <p className="mt-2 text-gray-600">Generate member QR codes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="gym">Gym</Label>
            <Select value={selectedGym} onValueChange={setSelectedGym} required>
              <SelectTrigger id="gym" className="w-full">
                <SelectValue placeholder="Select a gym" />
              </SelectTrigger>
              <SelectContent>
                {productList.map((product) => (
                  <SelectItem
                    key={product.abbreviation}
                    value={product.abbreviation}
                  >
                    {product.company} - {product.product}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="memberCode">Member Code</Label>
            <Input
              type="text"
              id="memberCode"
              value={memberCode}
              onChange={(e) => setMemberCode(e.target.value)}
              placeholder="e.g., 345"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full py-6 text-base font-medium transition-colors"
          >
            Generate QR Code
          </Button>
        </form>
      </div>
    </div>
  );
}
