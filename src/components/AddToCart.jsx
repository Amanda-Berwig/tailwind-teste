import React from "react";
import { ShoppingBagIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

function AddToCart() {
  return (
    <button
      type="button"
      className="relative border-indigo-600 group-hover:scale-110  group-hover:border-indigo-400 border rounded-3xl p-3 flex items-center justify-center group"
    >
      {/* Ícone da sacola */}
      <ShoppingBagIcon
        aria-hidden="true"
        className="size-4 text-indigo-600  group-hover:text-indigo-400 transition-colors"
      />

      {/* Ícone do + */}
      <PlusCircleIcon className="size-3  group-hover:text-indigo-400 text-indigo-600 absolute  top-2 right-2 rounded-full" />
    </button>
  );
}

export default AddToCart;
