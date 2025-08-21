"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { YnsLink } from "./yns-link";

export const Banner = () => {
	const [isOpen, setIsOpen] = useState(true);

	if (!isOpen) return null;

	return (
		<div className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 px-4 py-3 text-amber-100">
			<div className="flex items-center justify-between gap-x-4">
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-x-4">
					<div className="flex items-center gap-x-4">
						<p className="text-center text-sm font-medium">
							🎉 Welcome to the launch of aliciahofland.art! 🎉
						</p>
						<YnsLink
							href="/category/seasonal"
							className="lg:flex-none md:flex-none sm:flex-auto sm:text-pretty rounded-full bg-amber-300 px-3 py-1 text-sm font-semibold text-teal-900 shadow-sm hover:bg-amber-500 text-center"
							// className="flex-none rounded-full bg-indigo-500 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600"
						>
							Check out my Holiday Items
						</YnsLink>
					</div>
				</div>
				<button
					onClick={() => setIsOpen(false)}
					className="flex-none rounded-full justify-self-end bg-amber-300 p-1 text-teal-900 shadow-sm hover:bg-amber-500"
					aria-label="Close banner"
				>
					<X size={12} />
				</button>
			</div>
		</div>
	);
};
