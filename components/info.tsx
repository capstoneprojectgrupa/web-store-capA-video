"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { MessageCircleIcon } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const [url, setUrl] = useState("");
  const telp = process.env.NEXT_PUBLIC_TELP;
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}/product/${data.id}`);
    }
  }, [data.id]);

  const pesan = `Halo saya ingin membeli ${data.name} - ${data.price} dengan link ${url}`;
  const link = `https://wa.me/${telp}?text=${encodeURIComponent(pesan)}`;

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-3xl text-gray-900">
          <Currency value={parseFloat(data.price)} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={() => window.open(link, "_blank")} className="flex items-center gap-x-2">
          Chat Penjual
          <MessageCircleIcon size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
