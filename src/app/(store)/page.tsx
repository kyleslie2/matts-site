import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
import TicketsImage from "@/images/weekend.jpg";
import RegistrationImage from "@/images/longshanks.png";
import content, { siteTheme } from "@/lib/site-content";
import { CategoryBox } from "@/ui/category-box";
import { YnsLink } from "@/ui/yns-link";
import Image from "next/image";
import type { Metadata } from "next/types";
import Link from "next/link";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const t = await getTranslations("/");

	return (
		<main>
			<section className={`rounded ${siteTheme.hero.background.value} pt-8`}>
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-4 sm:px-8 md:grid-cols-1">
					<Image
						alt="Tournament poster"
						loading="eager"
						priority={true}
						className="rounded"
						height={1450}
						width={1450}
						src={content.heroImage.url}
						style={{
							objectFit: "cover",
							paddingBottom: "0",
						}}
						sizes="(max-width: 1200px) 90vw, 950px"
					/>
					<div className="flex flex-row gap-6 w-full justify-center pb-6 pt-0">
						<YnsLink
							className={`inline-flex h-10 items-center justify-center rounded-full ${siteTheme.hero.buttonBackground.value} px-6 font-medium ${siteTheme.hero.buttonText.value} transition-colors ${siteTheme.hero.buttonHover.value} focus:outline-none focus:ring-1`}
							href={t("hero.link")}
						>
							{t("hero.action")}
						</YnsLink>
						<YnsLink
							className={`inline-flex h-10 items-center justify-center rounded-full ${siteTheme.hero.buttonBackground.value} px-6 font-medium ${siteTheme.hero.buttonText.value} transition-colors ${siteTheme.hero.buttonHover.value} focus:outline-none focus:ring-1`}
							href={t("hero.link2")}
						>
							{t("hero.action2")}
						</YnsLink>
					</div>
				</div>
			</section>

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
							<h2 className="text-4xl font-semibold mb-4">Maple Melee</h2>
							<p>We’re excited to announce our second annual Maple Melee Warmachine event happening Saturday Februay 20th - Sunday February 21st! Expect 6 rounds of the finest Waramchine to be found anywhere in the National Capital Region. This will be an IGQ event that cuts to a top 8 on the Sunday.</p>
							<h3 className="text-2xl font-semibold mb-4 pt-6">Address</h3>
							<p>1700 Blair Rd, Gloucester, ON K1B 4E6</p>
							<h3 className="text-2xl font-semibold mb-4 pt-6">More information</h3>
							<Link
								href="/info"
								className={`group inline-flex h-8 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors border-2 ${siteTheme.hero.accent.value} ${siteTheme.hero.accentHover.value}`}
							>
								{"For more details please see our tournament pack"}
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{[
						{ displayName: "Maple Melee Weekend Pass 2027", categorySlug: "/product/weekend-pass", src: TicketsImage },
						{ displayName: "Register", categorySlug: "https://warmachine.longshanks.org/event/37266/", src: RegistrationImage },
					].map(({ displayName, categorySlug, src }) => (
						<CategoryBox displayName={displayName} categorySlug={categorySlug} src={src} />
					))}
				</div>
			</section>
		</main>
	);
}
