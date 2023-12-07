"use client";

import Button from "../button";
import Image from "next/image";
import Link from "next/link";

import ThumbnailPlaceholderImg from "./assets/thumbnail-placeholder.jpg";

// const cardStyle: Record<string, string> = {
//   // Add Style If Required
// };

interface CardProps {
  slug?: string;
  thumbnail?: "default" | string;
  tags?: string[];
  title?: string;
  excerpt?: string;
  category?: string;
}

export default function PostCard({
  slug,
  thumbnail,
  tags,
  title = "untitled",
  excerpt = "No description provided",
  category,
}: CardProps) {
  // const cardClass = ``;
  return (
    <>
      <div className="flex flex-col lg:w-[32%] rounded-lg shadow-md w-full h-full hover:shadow-xl transition ease-in-out duration-300">
        {thumbnail && (
          <div className="h-[280px] relative">
            <Image
              src={
                thumbnail == "default"
                  ? ThumbnailPlaceholderImg
                  : "https:" + thumbnail
              }
              className="rounded-t-lg"
              alt="Card Thumbnail"
              fill={true}
            />
          </div>
        )}
        <div className="flex flex-col gap-8 lg:px-8 lg:py-10 px-6 py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {tags && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((value, index) => (
                    <p
                      key={index}
                      className="font-sans font-medium text-xs text-red-900 bg-red-300 px-3 h-8 rounded-full flex items-center"
                    >
                      {value}
                    </p>
                  ))}
                </div>
              )}
              <Link
                href={`/${category}/${slug}`}
                aria-label={title}
                className="font-sans font-semibold text-lg text-gray-800 leading-normal hover:text-red-700 transition ease-in-out duration-200"
              >
                {title}
              </Link>
            </div>

            <p className="font-serif font-regular text-base  text-gray-700 leading-normal">
              {excerpt}
            </p>
          </div>

          <Link href={`/${category}/${slug}`} aria-label={title}>
            <Button title="Continue reading" size="medium" display="block" />
          </Link>
        </div>
      </div>
    </>
  );
}
