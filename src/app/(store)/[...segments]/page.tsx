import { MDXRemote } from "next-mdx-remote/rsc";
import Link, { type LinkProps } from "next/link";
import { notFound } from "next/navigation";

const pages: Record<string, { content: string }> = {
	"/about": {
		content: `
# About

This is the About page.

Pending
`,
	},
	"/contact": {
		content: `
# Contact
<div>
  <ul className="space-y-2 text-red-900 list-none pl-0">
	<li>
	  <a
		href="mailto:mhoule99@gmail.com"
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center gap-2 underline underline-offset-4 hover:text-amber-600"
		>
		<span aria-hidden="true">
			<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 640"
			width="50"
			height="50"
			style={{ display: "inline-block", verticalAlign: "middle" }}
			>
			<path fill="#174e97" d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/>
			</svg></span>
		Ask a question
	  </a>
	</li>
	<li>
	  <a
		href="https://www.facebook.com/groups/OGwarmachineclub"
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center gap-2 underline underline-offset-4 hover:text-amber-600"
		>
	<span aria-hidden="true">
				<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 640"
				width="50"
				height="50"
				style={{ display: "inline-block", verticalAlign: "middle" }}
				>
				<path fill="#174e97" d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/>
				</svg></span>
		OGwarmachineclub's Facebook group
	  </a>
	</li>
	<li>
		<a
			href="https://discord.gg/Eec9cGgEfg"
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center gap-2 underline underline-offset-4 hover:text-amber-600"
		>
			<span aria-hidden="true">
				<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 640"
				width="50"
				height="50"
				style={{ display: "inline-block", verticalAlign: "middle" }}
				>
				<path fill="#174e97" d="M524.5 133.8C524.3 133.5 524.1 133.2 523.7 133.1C485.6 115.6 445.3 103.1 404 96C403.6 95.9 403.2 96 402.9 96.1C402.6 96.2 402.3 96.5 402.1 96.9C396.6 106.8 391.6 117.1 387.2 127.5C342.6 120.7 297.3 120.7 252.8 127.5C248.3 117 243.3 106.8 237.7 96.9C237.5 96.6 237.2 96.3 236.9 96.1C236.6 95.9 236.2 95.9 235.8 95.9C194.5 103 154.2 115.5 116.1 133C115.8 133.1 115.5 133.4 115.3 133.7C39.1 247.5 18.2 358.6 28.4 468.2C28.4 468.5 28.5 468.7 28.6 469C28.7 469.3 28.9 469.4 29.1 469.6C73.5 502.5 123.1 527.6 175.9 543.8C176.3 543.9 176.7 543.9 177 543.8C177.3 543.7 177.7 543.4 177.9 543.1C189.2 527.7 199.3 511.3 207.9 494.3C208 494.1 208.1 493.8 208.1 493.5C208.1 493.2 208.1 493 208 492.7C207.9 492.4 207.8 492.2 207.6 492.1C207.4 492 207.2 491.8 206.9 491.7C191.1 485.6 175.7 478.3 161 469.8C160.7 469.6 160.5 469.4 160.3 469.2C160.1 469 160 468.6 160 468.3C160 468 160 467.7 160.2 467.4C160.4 467.1 160.5 466.9 160.8 466.7C163.9 464.4 167 462 169.9 459.6C170.2 459.4 170.5 459.2 170.8 459.2C171.1 459.2 171.5 459.2 171.8 459.3C268 503.2 372.2 503.2 467.3 459.3C467.6 459.2 468 459.1 468.3 459.1C468.6 459.1 469 459.3 469.2 459.5C472.1 461.9 475.2 464.4 478.3 466.7C478.5 466.9 478.7 467.1 478.9 467.4C479.1 467.7 479.1 468 479.1 468.3C479.1 468.6 479 468.9 478.8 469.2C478.6 469.5 478.4 469.7 478.2 469.8C463.5 478.4 448.2 485.7 432.3 491.6C432.1 491.7 431.8 491.8 431.6 492C431.4 492.2 431.3 492.4 431.2 492.7C431.1 493 431.1 493.2 431.1 493.5C431.1 493.8 431.2 494 431.3 494.3C440.1 511.3 450.1 527.6 461.3 543.1C461.5 543.4 461.9 543.7 462.2 543.8C462.5 543.9 463 543.9 463.3 543.8C516.2 527.6 565.9 502.5 610.4 469.6C610.6 469.4 610.8 469.2 610.9 469C611 468.8 611.1 468.5 611.1 468.2C623.4 341.4 590.6 231.3 524.2 133.7zM222.5 401.5C193.5 401.5 169.7 374.9 169.7 342.3C169.7 309.7 193.1 283.1 222.5 283.1C252.2 283.1 275.8 309.9 275.3 342.3C275.3 375 251.9 401.5 222.5 401.5zM417.9 401.5C388.9 401.5 365.1 374.9 365.1 342.3C365.1 309.7 388.5 283.1 417.9 283.1C447.6 283.1 471.2 309.9 470.7 342.3C470.7 375 447.5 401.5 417.9 401.5z"/>
				</svg></span>
			OGwarmachineclub's Discord
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
"/info": {
    content: `
# Information

<a
href="https://docs.google.com/document/d/14-EdaHux7ab67XI4FUG5o9JGW0SaZ3p_vs2PXmKvTf4/edit?usp=sharing&embedded=true"
className="group inline-flex h-8 w-max items-center justify-center rounded-md bg-transparent px-4 py-4 text-md font-medium transition-colors border-2 border-blue-700 hover:bg-blue-800 hover:text-amber-100 focus:bg-blue-700 focus:text-amber-100 focus:outline-none mb-4 no-underline"
>
External link to Google Doc
</a>

<div className="w-full h-screen bg-white rounded-lg shadow-sm p-4">
  <iframe
    src="https://docs.google.com/document/d/14-EdaHux7ab67XI4FUG5o9JGW0SaZ3p_vs2PXmKvTf4/edit?usp=sharing&embedded=true"
    className="w-full h-full border-none rounded"
    allowFullScreen
    title="More Info"
  >
    Loading…
  </iframe>
</div>
`
},
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
		<div className="pb-8 pt-4 w-full">
			<div className="w-full">
				<MDXRemote
					source={page.content}
					components={{
						h1: (props) => <h1 className="text-4xl font-bold mb-6" {...props} />,
						a: (props) => <Link {...(props as LinkProps)} />,
					}}
				/>
			</div>
		</div>
	);
}
