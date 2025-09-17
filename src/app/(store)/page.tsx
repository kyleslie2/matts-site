import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
// import OriginalsImage from "@/images/originals.jpg";
import PrintsImage from "@/images/prints.jpg";
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
						alt="Tournament poster"
						loading="eager"
						priority={true}
						className="rounded"
						height={1450}
						width={1450}
						src="https://res.cloudinary.com/kyleslie2/image/upload/v1758053778/5844cb275752fcb7489c824c9c1ea8c9_zodvuc.jpg"
						style={{
							objectFit: "cover",
							paddingBottom: "2rem",
						}}
						sizes="(max-width: 1200px) 90vw, 950px"
					/>
				</div>
			</section>

			{/* <ProductList products={products} /> */}

			<section className="w-full py-8">
				<div className="grid max-w-none grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2">
					<div className="flex justify-center w-full">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.3455983818976!2d-76.14730812367571!3d45.139595155038286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x664c69590f7779ad%3A0xb66c7196d6e7752b!2sGT%20Games!5e0!3m2!1sen!2sca!4v1758063365616!5m2!1sen!2sca"
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
							<h3 className="text-4xl font-semibold mb-4">Date of the event</h3>
							<h4 className="text-3xl font-semibold mb-4">Event address</h4>
							<p>Address info</p>
							<h5 className="text-2xl font-semibold mb-4">Other info</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam ac mauris vitae urna fermentum tincidunt.
							</p>
						</div>
					</div>
				</div>
			</section>

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
