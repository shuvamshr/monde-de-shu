import { client } from "@/app/api/contentful/client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import RichText from "@/app/components/post/RichText";
import PreFooter from "@/app/global/sections/prefooter";

export default async function ({ params }: { params: { slug: string } }) {
  console.log("==========");
  const data = (await getData(params.slug)).props?.posts.fields;
  console.log(data.date);
  console.log("==========");
  console.log(data.content.content[0].nodeType);

  const originalDateString = data.date;
  const originalDate = new Date(originalDateString);

  // Format date using date-fns
  const formattedDate = format(originalDate, "MMMM dd, yyyy");

  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-40 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-col prose">
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2 mb-2">
                {data.tag.map((value: any, index: any) => (
                  <p
                    key={index}
                    className="font-sans font-medium text-xs text-red-900 bg-red-300 px-3 h-8 rounded-full flex items-center"
                  >
                    {value}
                  </p>
                ))}
              </div>
              <h1 className="font-serif font-semibold text-3xl lg:text-4xl text-gray-800 lg:leading-snug leading-normal">
                {data.title}
              </h1>
              <h6 className="font-sans font-medium text-base lg:text-xl text-gray-700 leading-snug">
                {data.excerpt}
              </h6>
            </div>

            <div className="flex flex-col gap-4 my-10">
              <div className="aspect-video relative">
                <Image
                  src={"https:" + data.coverImage.fields.file.url}
                  className="rounded-lg m-0"
                  alt="Card Thumbnail"
                  fill={true}
                />
              </div>
              <div className="font-serif text-base text-gray-700 ">
                Photo Credit:{" "}
                <a href={data.coverLink} className="text-gray-700">
                  Image Attribute
                </a>
              </div>
            </div>

            <div className="font-sans font-base text-sm text-gray-700 bg-gray-200 px-4 py-3 my-1 rounded-lg border-2 border-gray-300 leading-relaxed">
              <strong className="text-gray-800">Disclaimer</strong>: This blog
              post was generated for testing purposes only using OpenAI&apos;s
              GPT-3.5. Readers are advised to verify information independently,
              as the content may not reflect real-world expertise, and it is not
              intended as professional advice. This disclaimer was also
              generated via ChatGPT.
            </div>
            <div className="font-sans text-gray-800 mt-2">
              <RichText content={data.content} />
            </div>
            <div className="font-sans text-sm text-gray-700 bg-gray-200 px-4 py-3 my-4 rounded-lg border-2 border-gray-300 leading-relaxed">
              <strong className="text-gray-800">Like what you read?</strong>{" "}
              Follow{" "}
              <Link
                href="https://www.linkedin.com/company/oliversinclair/"
                className="underline text-gray-700"
              >
                Oliver Sinclair on LinkedIn
              </Link>{" "}
              to keep yourself updated with the latest blogs!
            </div>
          </div>
        </div>
      </div>
      <PreFooter />
    </>
  );
}

async function getData(params: any) {
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": params,
  });

  if (!response.items?.length) {
    return {
      redirect: {
        destination: "/blogs",
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts: response?.items?.[0],
    },
  };
}
