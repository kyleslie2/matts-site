import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
// import OriginalsImage from "@/images/originals.jpg";
import PrintsImage from "@/images/prints.jpg";
import SeasonalImage from "@/images/seasonal.jpg";
import { CategoryBox } from "@/ui/category-box";
import { ProductList } from "@/ui/products/product-list";
import { YnsLink } from "@/ui/yns-link";
import * as Commerce from "commerce-kit";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });
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
						src="https://res.cloudinary.com/kyleslie2/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1757985839/warmachine-placeholder_swcq2f.webp"
						style={{
							objectFit: "cover",
						}}
						sizes="(max-width: 1200px) 90vw, 950px"
					/>
				</div>
			</section>

			<ProductList products={products} />

			<section className="w-full py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{[
						// { categorySlug: "originals", src: OriginalsImage },
						{ categorySlug: "prints", src: PrintsImage },
						{ categorySlug: "seasonal", src: SeasonalImage },
					].map(({ categorySlug, src }) => (
						<CategoryBox key={categorySlug} categorySlug={categorySlug} src={src} />
					))}
				</div>
			</section>
		</main>
	);
}
