// import { getTranslations } from "@/i18n/server";
// import { Newsletter } from "@/ui/footer/newsletter.client";
import { YnsLink } from "@/ui/yns-link";
import { siteTheme } from "@/lib/site-content";
import content from "@/lib/site-content";

const footerSections = [
	{
		header: content.footer.importantLinksTitle.value,
		links: content.footer.links.slice(0, 3).map((link) => ({
			label: link.title.value,
			href: link.href.value,
		})),
	},
	{
		header: content.footer.connectTitle.value,
		links: content.footer.links.slice(3).map((link) => ({
			label: link.title.value,
			href: link.href.value,
		})),
	},
];

export async function Footer() {
	return (
		<footer className={`w-full ${siteTheme.footer.background.value} p-6 text-neutral-800 md:py-12`}>
			<div className={`text-teal-900 container mx-auto max-w-7xl flex flex-col items-center gap-16 text-sm`}>
				<nav className="grid grid-cols-2 gap-16 w-full max-w-4xl">
					{footerSections.map((section) => (
						<section key={section.header} className="text-right">
							<h3 className={`mb-2 font-semibold ${siteTheme.footer.headingText.value}`}>{section.header}</h3>
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
					<p>© 2025 Matt Houle</p>
					<p>Site built by Kyle Leslie</p>
				</div>
			</div>
		</footer>
	);
}
