import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
// import OriginalsImage from "@/images/originals.jpg";
import TicketsImage from "@/images/weekend.jpg";
import SeasonalImage from "@/images/seasonal.jpg";
import { CategoryBox } from "@/ui/category-box";
// import { ProductList } from "@/ui/products/product-list";
import { YnsLink } from "@/ui/yns-link";
// import * as Commerce from "commerce-kit";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	// const products = await Commerce.productBrowse({ first: 6 });
	const t = await getTranslations("/");

	return (
		<main>
			<section className="rounded bg-teal-900 pt-8">
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<Image
						alt="Tournament poster"
						loading="eager"
						priority={true}
						className="rounded"
						height={1450}
						width={1450}
						src="https://res.cloudinary.com/kyleslie2/image/upload/v1758752679/Maple_Melee_Logo_lripoy.png"
						style={{
							objectFit: "cover",
							paddingBottom: "2rem",
						}}
						sizes="(max-width: 1200px) 90vw, 950px"
					/>
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
				</div>
			</section>

			{/* <ProductList products={products} /> */}

			<section className="w-full py-8">
				<div className="grid max-w-none grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2">
					<div className="flex justify-center w-full">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4691689397177!2d-75.59922762366243!3d45.42004293638374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0fb291d59f99%3A0x8a6aaa7a261c3775!2s1700%20Blair%20Rd%2C%20Ottawa%2C%20ON%20K1B%204E6!5e0!3m2!1sen!2sca!4v1758408386653!5m2!1sen!2sca"
							className="w-full h-64 sm:h-96 rounded"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Google Map"
						/>
					</div>
					<div className="w-full">
						<div className="flex flex-col items-center justify-center text-center h-full w-full">
							<h3 className="text-4xl font-semibold mb-4">January 17-18, 2026</h3>
							<h4 className="text-3xl font-semibold mb-4">1700 Blair Rd, Gloucester, ON K1B 4E6</h4>
							<p>We’re excited to announce our inaugural Maple Melee warmachine event happening Saturday Jan 17th through Sunday January 18th 2026! Saturday will consist of 100 point Steamroller pods that will cut to a Top 8 on Sunday. Sunday will host the Finals as well as a separate steamroller and alternative event for those not playing in the Finals. We will cap at 32 players.</p>
							<h5 className="text-2xl font-semibold mb-4">More info</h5>
							<p>
								For more details please see our tournament pack via the google link below:
							</p>
							<a href="https://docs.google.com/document/d/14-EdaHux7ab67XI4FUG5o9JGW0SaZ3p_vs2PXmKvTf4/edit?usp=sharing">Google doc</a>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{[
						// { categorySlug: "originals", src: OriginalsImage },
						{ categorySlug: "tickets", src: TicketsImage },
						{ categorySlug: "seasonal", src: SeasonalImage },
					].map(({ categorySlug, src }) => (
						<CategoryBox key={categorySlug} categorySlug={categorySlug} src={src} />
					))}
				</div>
			</section>
		</main>
	);
}
