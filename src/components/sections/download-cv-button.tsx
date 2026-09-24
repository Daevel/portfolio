"use client";

import { Download } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import { cn } from "@/lib/utils";

type DownloadCvButtonProps = {
  className?: string;
};

export function DownloadCvButton({ className }: DownloadCvButtonProps) {
  const { t } = useTranslation();

  return (
    <a
      className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        "h-auto min-h-14 border-4 border-primary bg-white px-6 py-3 text-[clamp(1.25rem,4vw,1.75rem)] leading-none tracking-tighter text-primary hover:bg-primary hover:text-white hover:underline hover:underline-offset-5",
        className,
      )}
      download
      href={siteConfig.cvUrl}
    >
      {t.cta.downloadCv.toUpperCase()}
      <Download aria-hidden="true" className="size-[1em]" strokeWidth={2} />
    </a>
  );
}
