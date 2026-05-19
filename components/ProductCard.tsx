"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, slug: product.slug });
    toast.success(`${product.name} agregado`, {
      duration: 2000,
      icon: "✦",
      style: { background: "#0a0a0f", color: "#c9a84c", border: "1px solid #c9a84c30" },
    });
    setIsAdding(false);
  };

  return (
    <div
      className="group bg-white overflow-hidden flex flex-col"
      style={{
        animationDelay: `${delay}ms`,
        animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
        opacity: 0,
        borderRadius: "4px",
        boxShadow: "0 2px 16px rgba(10,10,15,0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link href={`/productos/${product.slug}`} className="block relative overflow-hidden bg-[#f5f0eb]" style={{ aspectRatio: "4/5" }}>
        {!imgError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-7xl opacity-20">👕</div>
        )}

        {/* Gold border top on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-full bg-[#0a0a0f] text-[#f5f0eb] py-3.5 text-[10px] font-semibold tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0a0a0f] transition-colors duration-200 disabled:opacity-70"
          >
            {isAdding ? "Agregando..." : "Agregar a la bolsa"}
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/productos/${product.slug}`}>
          <h3 className="font-display text-lg text-[#0a0a0f] mb-1 leading-tight group-hover:text-[#c9a84c] transition-colors">
            {product.name}
          </h3>
          <p className="text-[#0a0a0f]/50 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">
            {product.description}
          </p>
        </Link>
        <div className="flex items-center justify-between mt-auto">
          <p className="font-accent text-xl text-[#0a0a0f] tracking-wide">
            S/ {product.price.toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="sm:hidden bg-[#0a0a0f] text-[#f5f0eb] px-4 py-2 text-[9px] font-semibold tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0a0a0f] transition-colors disabled:opacity-70"
            style={{ borderRadius: "2px" }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}