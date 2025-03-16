import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({
  title,
  description,
  imageURL,
  className,
  article,
  ...props
}: {
  className: string;
  title: string;
  description: string;
  imageURL: string;
  article?: Article;
}) {
  return (
    <div
      className={[
        "bru-card flex flex-col justify-between gap-5 h-full",
        className,
      ].join(" ")}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <div className="w-full h-[300px] flex flex-col justify-center items-center bg-custom-secondary border-2 border-solid rounded-md relative">
          <Image alt="test" src={imageURL} fill objectFit="cover" />
        </div>
        <div className="flex flex-col justify-between items-start gap-2 ">
          <h3 className="font-bold text-xl pr-4">{title}</h3>
          <p className="text-lg short-par">{description}</p>
        </div>
      </div>
      <a className="self-end" href={`/article/${article?.id}`}>
        <button className="w-36 bru-btn bg-white">Detail</button>
      </a>
    </div>
  );
}
