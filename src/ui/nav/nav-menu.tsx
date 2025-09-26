import { NavMobileMenu } from "@/ui/nav/nav-mobile-menu.client";
import Link from "next/link";

const links = [
	// {
	// 	label: "Home",
	// 	href: "/",
	// },
	// {
	// 	label: "Originals",
	// 	href: "/category/originals",
	// },
	{
		label: "Register",
		href: "https://warmachine.longshanks.org/event/28908/",
	},
	{
		label: "Tickets",
		href: "/product/weekend-pass",
	},
	{
		label: "Contact",
		href: "/contact",
	},
	{
		label: "More info",
		href: "/info",
	},
];

{
	/* <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer> */
}

export const NavMenu = () => {
	return (
		<>
			<div className="sm:block hidden">
				<ul className="flex flex-row items-center justify-center gap-x-1">
					{links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-teal-700 hover:text-amber-100 focus:bg-teal-700 focus:text-amber-100 focus:outline-none"
								// className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
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
									className="group inline-flex h-9 w-full items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
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
