'use client'
import React from "react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const languangelist = [
    {
      src: "/english.png",
      label: "ENG",
      value: "en",
    },
    {
      src: "/indonesia.png",
      label: "IDN",
      value: "id",
    },
  ];

  const langSelected = languangelist.find((lang) => lang.value === locale);

  function onSelect(lang){
    router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: lang}
      );
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Image
              src={langSelected?.src}
              width={24}
              height={24}
              alt={`flat-${langSelected?.value}`}
            />
            {langSelected?.label}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {languangelist.map((item) => (
            <DropdownMenuItem key={`item-${item.value}`} onClick={() => onSelect(item.value)}>
              <Image
                src={item.src}
                width={24}
                height={24}
                alt={`flat-${item.value}`}
              />
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
     
    </>
  );
}
