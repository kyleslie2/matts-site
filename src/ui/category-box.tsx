// import { getTranslations } from "@/i18n/server";
// import { deslugify } from "@/lib/utils";
import { YnsLink } from "@/ui/yns-link";
import Image, { type ImageProps } from "next/image";

export async function CategoryBox({
	displayName,
	categorySlug,
	src,
}: {
	displayName: string;
	categorySlug: string;
	src: ImageProps["src"];
}) {
	// const t = await getTranslations("Global.actions");

	return (
		<YnsLink href={`${categorySlug}`} className="group relative w-full h-60 flex flex-col justify-between items-stretch">
			<div className="relative overflow-hidden rounded-lg w-full h-60">
				<Image
				alt="Cover image"
				className="w-full h-full object-cover scale-105 transition-all group-hover:scale-100 group-hover:opacity-75"
				sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 620px"
				src={src}
				fill
				/>
			</div>
          	<div className="justify-end gap-2 py-2 text-grey-900">
                <h3 className="text-lg font-bold tracking-tight">{displayName}</h3>
                {/* <p>{t("shopNow")}</p> */}
            </div>
			</YnsLink>
	);
}
