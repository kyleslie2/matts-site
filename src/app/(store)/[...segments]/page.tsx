import { MDXRemote } from "next-mdx-remote/rsc";
import Link, { type LinkProps } from "next/link";
import { notFound } from "next/navigation";

const pages: Record<string, { content: string }> = {
	"/about": {
		content: `
# About

This is the About page.

is this *markdown*?
asdfafd
sdfasfd
asdfasdf
`,
	},
	"/contact": {
		content: `
# Contact
<div>
  <ul className="space-y-2 text-teal-900 list-none pl-0">
	<li>
	  <a
		href="mailto:mhoule99@gmail.com"
		className="underline underline-offset-4 hover:text-amber-600"
	  >
		Ask a question
	  </a>
	</li>
	<li>
	  <a
		href="https://www.facebook.com/groups/OGwarmachineclub"
		target="_blank"
		rel="noopener noreferrer"
		className="underline underline-offset-4 hover:text-amber-600"
	  >
		OGwarmachineclub Facebook group
	  </a>
	</li>
  </ul>
</div>
`,
	},
	"/hotels": {
		content: `
# Hotels
Hotel info .....
`},
};

export default async function Page(props: { params: Promise<{ segments?: string[] }> }) {
	const params = await props.params;
	if (!params.segments) {
		return notFound();
	}

	const path = `/${params.segments.join("/")}`;
	const page = pages[path];

	if (!page) {
		return notFound();
	}

	return (
		<div className="prose pb-8 pt-4 lg:prose-lg xl:prose-xl">
			<MDXRemote
				source={page.content}
				components={{
					a: (props) => <Link {...(props as LinkProps)} />,
				}}
			/>
		</div>
	);
}
