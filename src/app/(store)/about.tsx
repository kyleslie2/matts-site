import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
// import OriginalsImage from "@/images/originals.jpg";
import { YnsLink } from "@/ui/yns-link";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const t = await getTranslations("/");

	return (
		<main>
			<section className="rounded bg-teal-900 pt-8">
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<div className="max-w-md space-y-4">
						<h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl text-amber-100">{t("hero.title")}</h2>
						<p className="text-pretty text-amber-100">{t("hero.description")}</p>
						<YnsLink
							className="inline-flex h-10 items-center justify-center rounded-full bg-amber-300 px-6 font-medium text-teal-900 transition-colors hover:bg-amber-500/90 focus:outline-none focus:ring-1 focus:ring-amber-650"
							href={t("hero.link")}
						>
							{t("hero.action")}
						</YnsLink>
					</div>
					<Image
						alt="Alicia Hofland at the Itsy Bitsy Art Show"
						loading="eager"
						priority={true}
						className="rounded"
						height={1450}
						width={1450}
						// src="https://res.cloudinary.com/kyleslie2/image/upload/v1731949515/signal-2024-11-16-092821_vxlpz7_c_crop_w_1240_h_930_ar_4_3_ygi3ta.webp"
						src="https://res.cloudinary.com/kyleslie2/image/upload/v1733446167/alicia-teal_h6qza2.png"
						style={{
							objectFit: "cover",
						}}
						sizes="(max-width: 1200px) 90vw, 950px"
					/>
				</div>
			</section>
		</main>
	);
}
