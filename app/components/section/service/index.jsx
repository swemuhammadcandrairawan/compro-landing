import Image from "next/image";
import React from "react";
import ServiceCard from "@/app/components/section/service/card";
import { useTranslations } from "next-intl";

export default function Service() {
  const t = useTranslations("HomePage.Service");
  // const services = [
  //   {
  //     src: "/th-1-service-icon-1.svg",
  //     title: "UI/UX Design",
  //     description:
  //       "Focusing on user interface (UI) and user experience (UX) design to enhance the usability and accessibility of digital products & app.",
  //   },
  //   {
  //     src: "/th-1-service-icon-2.svg",
  //     title: "Graphic Design",
  //     description:
  //       "Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
  //   },
  //   {
  //     src: "/th-1-service-icon-3.svg",
  //     title: "Web Design",
  //     description:
  //       "Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
  //   },
  //   {
  //     src: "/th-1-service-icon-4.svg",
  //     title: "Motion Graphics",
  //     description:
  //       "Creating animated graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
  //   },
  // ];

  const services = Array.from({length:4}, (_, i)=>{
    const numberValue = i+1;
    return{
      src:`/th-1-service-icon-${numberValue}.svg`,
      title: t(`content.item_${numberValue}.title`),
      description: t(`content.item_${numberValue}.description`),
    }
  })
  return (
    <section className="section-service">
      <div className="section-space">
        <div className="container">
          <div className="mx-auto max-w-[650px] xl:max-w-[950px] text-center xl:mb-20 mb-10 md:mb-16 lg:mb-20">
            <h2>
              {t.rich("title", {
                  wrapper: (chunks) => (
                    <span className="inline-flex items-center gap-5">
                      {chunks}
                      <Image
                  className="relative inline-block w-8 md:w-10 lg:w-14"
                  src="/shape-light-lime-5-arms-star.svg"
                  width={74}
                  height={70}
                  alt="icon shape text"
                />
                    </span>
                  ),
                })}
            </h2>
     
          </div>
          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((item) => (
              <li key={item.src}>
                <ServiceCard {...item} />
              </li>
            ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
