// import { getTranslations } from "@/i18n/server";
// import { Newsletter } from "@/ui/footer/newsletter.client";
import { YnsLink } from "@/ui/yns-link";
// import type { SVGAttributes } from "react";

const sections = [
	{
		header: "Art you can buy",
		links: [
			// {
			// 	label: "Originals",
			// 	href: "/category/originals",
			// },
			{
				label: "Prints",
				href: "/category/prints",
			},
			{
				label: "Seasonal",
				href: "/category/seasonal",
			},
		],
	},
	{
		header: "Connect with us",
		links: [
			{
				label: "More Information",
				href: "https://docs.google.com/document/d/14-EdaHux7ab67XI4FUG5o9JGW0SaZ3p_vs2PXmKvTf4/edit?usp=sharing",
			},
			{
				label: "Facebook",
				href: "https://www.facebook.com/groups/OGwarmachineclub",
			},
			{
				label: "Email",
				href: "mailto:mhoule99@gmail.com",
			},
		],
	},
];

export async function Footer() {
	// const t = await getTranslations("Global.footer");

	return (
		<footer className="w-full bg-amber-50 p-6 text-neutral-800 md:py-12">
			{/* <div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-sm sm:justify-between"> */}
			<div className="text-teal-900 container mx-auto max-w-7xl flex flex-col items-center gap-16 text-sm">
				{/* <div className="" id="newsletter">
					<div className="flex w-full max-w-sm flex-col gap-2">
					<h3 className="font-semibold">{t("newsletterTitle")}</h3>
						<Newsletter />
					</div>
				</div> */}

				{/* <nav className="grid grid-cols-2 gap-16"> */}
				<nav className="grid grid-cols-2 gap-16 w-full max-w-4xl">
					{sections.map((section) => (
						// <section key={section.header}>
						// 	<h3 className="mb-2 font-semibold">{section.header}</h3>
						// 	<ul role="list" className="grid gap-1">
						<section key={section.header} className="text-right">
  							<h3 className="mb-2 font-semibold">{section.header}</h3>
  							<ul role="list" className="grid gap-1 justify-items-left">
								{section.links.map((link) => (
									<li key={link.label}>
										<YnsLink className="underline-offset-4 hover:underline" href={link.href}>
											{link.label}
										</YnsLink>
									</li>
								))}
							</ul>
						</section>
					))}
				</nav>
			</div>
			<div className="container mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
				<div>
					<p>© 2024 Matt Houle</p>
					<p>Site built by Kyle Leslie</p>
				</div>
				<div className="flex items-center gap-4">
					{/* <YnsLink
						className="inline-flex items-center gap-1 transition-colors hover:text-neutral-700"
						href="https://instagram.com/aliciahofland.art"
					>
						<TwitterIcon className="h-4 w-4" /> @aliciahofland.art
						<span className="sr-only">Instagram</span>
					</YnsLink>
					<YnsLink
						className="inline-flex items-center gap-1 transition-colors hover:text-neutral-700"
						href="https://facebook.com/aliciahofland.art"
					>
						<TwitterIcon className="h-4 w-4" /> Facebook
						<span className="sr-only">Facebook</span>
					</YnsLink> */}
				</div>
			</div>
		</footer>
	);
}

// function TwitterIcon(props: SVGAttributes<SVGSVGElement>) {
// 	return (
// 		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 596" fill="none">
// 			<path
// 				fill="#fff"
// 				d="m1 19 230 307L0 577h52l203-219 164 219h177L353 252 568 19h-52L329 221 179 19H1Zm77 38h82l359 481h-81L78 57Z"
// 			/>
// 		</svg>
// 	);
// }
