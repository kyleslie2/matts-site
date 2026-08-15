import { NavMobileMenu } from "@/ui/nav/nav-mobile-menu.client";
import Link from "next/link";
import getSiteContent from "@/lib/site-content";

const content = getSiteContent;

const links = content.navigation.menuItems.map((item) => ({
	label: item.title.value,
	href: item.href.value,
}));

export const NavMenu = () => {
	return (
		<>
			<div className="sm:block hidden">
				<ul className="flex flex-row items-center justify-center gap-x-1">
					{links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors ${content.theme.header.navHover.value} ${content.theme.header.navText.value} ${content.theme.header.navFocus.value}`}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="sm:hidden flex items-center">
				<NavMobileMenu>
					<ul className="flex pb-8 flex-col items-stretch justify-center gap-x-1">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="group inline-flex h-9 w-full items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-red-700 hover:text-amber-100 focus:bg-red-700 focus:text-amber-100 focus:outline-none"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</NavMobileMenu>
			</div>
		</>
	);
};
