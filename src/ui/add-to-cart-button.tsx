"use client";
import { addToCartAction } from "@/actions/cart-actions";
import { useTranslations } from "@/i18n/client";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/shadcn/button";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const AddToCartButton = ({
	productId,
	disabled,
	className,
	// inquire
}: {
	productId: string;
	disabled?: boolean;
	className?: string;
	// inquire?: boolean;
}) => {
	const t = useTranslations("Global.addToCart");
	const router = useRouter();
	const [pending, startTransition] = useTransition();
	const isDisabled = disabled || pending;

	return (
		<Button
			id="button-add-to-cart"
			size="lg"
			type="button"
			className={cn("rounded-full text-lg relative", className)}
			onClick={() => {
				if (isDisabled) {
					return;
				}

				const formData = new FormData();
				formData.append("productId", productId);

				startTransition(async () => {
					await addToCartAction(formData);
					router.push("/cart-overlay");
				});
			}}
			aria-disabled={isDisabled}
		>
			<span className={cn("transition-opacity ease-in", pending ? "opacity-0" : "opacity-100")}>
				{disabled ? t("disabled") : t("actionButton")}
			</span>
			<span
				className={cn(
					"ease-out transition-opacity pointer-events-none absolute z-10",
					pending ? "opacity-100" : "opacity-0",
				)}
			>
				<Loader2Icon className="h-4 w-4 animate-spin" />
			</span>
		</Button>
	);
};
