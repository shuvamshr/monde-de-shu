"use client";

import Button from "../../components/button";
import Card from "../../components/card";
import Image from "next/image";

import { useEffect } from "react";

import CreativityImg from "./assets/creativity.png";
import GroupworkImg from "./assets/groupwork.png";
import ProcessImg from "./assets/process.png";
import GrowImg from "./assets/grow.png";

import UTSLogo from "./assets/uts.svg";
import AppleLogo from "./assets/apple.svg";
import DolbyLogo from "./assets/dolby.svg";
import LeedsLogo from "./assets/leeds.svg";
import OliverLogo from "./assets/oliver-white.svg";

export default function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-fluid bg-red-100 pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h6 className="font-sans font-medium text-base lg:text-lg text-gray-800 lg:leading-none leading-snug">
                  NEW UX BUNDLE ADDED
                </h6>
                <h1 className="font-sans font-semibold text-3xl lg:text-4xl text-gray-800 lg:leading-normal leading-relaxed">
                  Crafting Experiences <br className="lg:block hidden" />
                  to Captivate.{" "}
                  <span className="text-red-900 font-bold italic">No Cap.</span>
                </h1>
                <p className="font-serif font-regular text-base lg:text-lg text-gray-700 lg:leading-normal leading-relaxed">
                  Embark on a digital journey where captivation knows no bounds.
                  At Oliver Sinclair, we&apos;re devoted to crafting experiences
                  that transcend expectations.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                  <Button title="Who’s Oliver?" display="block" />
                  <Button
                    title="View Service Bundles"
                    type="secondary"
                    display="block"
                  />
                </div>
                <p className="font-sans font-medium text-xs lg:text-sm text-gray-700 leading-normal">
                  View all our services, or figure out who Oliver is
                </p>
              </div>
            </div>
            <div className="col-span-12 pt-10 lg:pt-0 lg:col-span-5 lg:col-start-8 ">
              <Image src={CreativityImg} alt="Creativity Image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-gray-900 py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-white lg:leading-normal leading-relaxed">
                  Certified expertise from over{" "}
                  <span className="text-red-900 font-bold italic">10+</span>{" "}
                  industries,
                  <br className="lg:block hidden" /> universities and events
                </h1>
                <p className="font-serif font-regular text-sm lg:text-base lg:text-center text-gray-300 lg:leading-normal leading-relaxed">
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills and knowledge acquired through
                  certified expertise from various industries, renowned
                  universities, and impactful events
                </p>
              </div>
              <div className="lg:flex lg:flex-wrap lg:justify-between lg:overflow-hidden flex flex-row overflow-x-auto snap-x gap-16">
                <Image src={UTSLogo} className="snap-center" alt="" />
                <Image src={AppleLogo} className="snap-center" alt="" />
                <Image src={DolbyLogo} className="snap-center" alt="" />
                <Image src={LeedsLogo} className="snap-center" alt="" />
                <Image src={OliverLogo} className="snap-center" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-red-200 py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 pb-10 lg:pb-0 lg:col-span-5">
              <Image src={GroupworkImg} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col lg:items-start gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl  text-gray-800 lg:leading-normal leading-relaxed">
                  Who is..{" "}
                  <span className="text-red-900 font-bold italic">
                    Oliver Sinclair?
                  </span>
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  we inspire businesses to conceive and craft the digital realms
                  of the future. Success is a collective voyage with oliver, and
                  you’re just one click away from getting your way. our team of
                  dedicated professionals comprises individuals with a diverse
                  array of skills. <br />
                  <br />
                  knowledge acquired through certified expertise from various
                  industries, renowned universities, and impactful events
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                <Button
                  title="Find an Oliver For You"
                  size="large"
                  display="fit"
                />
                <Button
                  title="View Services"
                  type="secondary"
                  size="large"
                  display="fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:items-center flex flex-col gap-10">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col">
              <Image src={ProcessImg} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-gray-800 lg:leading-normal leading-relaxed">
                  All your design needs bundled.{" "}
                  <span className="text-red-900 font-bold italic">
                    Take your pick.
                  </span>
                </h1>
                <p className="font-serif font-regular text-base lg:text-center text-gray-700 lg:leading-normal leading-relaxed">
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills and knowledge acquired through
                  certified expertise from various industries, renowned
                  universities, and impactful events
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col lg:flex-row gap-3 lg:gap-5">
              <Button title="Who’s Oliver?" display="block" />
              <Button
                title="View Service Bundles"
                type="secondary"
                display="block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="user-experience.svg"
                title="User Experience Research"
                description="A comprehensive exploration of your target audience's needs and requirements utilizing advanced human-centered methodologies"
                feature={[
                  "Extensive User Profile of Target Audience",
                  "User Behavior Analysis Report",
                  "Documentation of Usability Testing",
                ]}
                buttonText="Learn more"
              />
            </div>

            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="digital-product.svg"
                title="Digital Product Design"
                description="Crafting meaninful and intuitive digital experiences that align seamlessly with user expectations and business goals"
                feature={[
                  "Competitive Analysis and UX Report",
                  "Workshop Session and Ideation Notes",
                  "Development Ready Prototype",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="branding.svg"
                title="Precise Branding Guidelines"
                description="Cohesive brand identity with clear guidelines that reflect your values and resonate with your audience"
                feature={[
                  "Brand Research Report & Documents",
                  "Comprehensive Digital Brand Book",
                  "Asset and Resources Folder",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="design-system.svg"
                title="Dynamic Design System"
                description="Establish a design system that serves as the foundation for consistent, scalable, and efficient design across your organization"
                feature={[
                  "Digital Product Audit Report",
                  "Figma Design Component Libraries",
                  "Usage Consultation Session",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="react-component.svg"
                title="React Component Libraries"
                description="React component libraries that enhance the development process, providing a library of consistent and reusable components"
                feature={[
                  "Dynamic React Component Library",
                  "Figma Component Guide",
                  "Usage Consultation Session",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="development.svg"
                title="Frontend Web Development"
                description="Bring designs to life with expert frontend web development, ensuring a responsive, high-performance, and user-friendly products"
                feature={[
                  "Competitive Analysis & Figma Prototype",
                  "Dynamic Web Development & Hosting",
                  "Headless CMS Integration",
                ]}
                buttonText="Learn more"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-blue-100 py-14 lg:py-16 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 flex flex-col items-center gap-10">
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl  text-gray-800 leading-normal">
                  Got something a bit more custom?
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills and knowledge acquired through
                  certified expertise from various industries, renowned
                  universities, and impactful events
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex flex-col w-full">
              <Button
                title="View Service Bundles"
                type="secondary"
                display="block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:items-center flex flex-col gap-10">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-gray-800 lg:leading-normal leading-relaxed">
                  Proven Track Record of{" "}
                  <span className="text-red-900 font-bold italic">
                    Ambitious Projects
                  </span>
                </h1>
                <p className="font-serif font-regular text-base lg:text-center text-gray-700 lg:leading-normal leading-relaxed">
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills and knowledge acquired through
                  certified expertise from various industries, renowned
                  universities, and impactful events
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                thumbnail="default"
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                category={["CMS Platform", "Case Study"]}
                buttonText="Continue Reading"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                thumbnail="default"
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                category={["CMS Platform", "Case Study"]}
                buttonText="Continue Reading"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                thumbnail="default"
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                category={["CMS Platform", "Case Study"]}
                buttonText="Continue Reading"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-red-200 py-14 lg:py-16 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl  text-gray-800 lg:leading-normal leading-relaxed">
                  Grow better with Oliver today
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                <Button title="Who’s Oliver?" display="block" />
                <Button
                  title="View Service Bundles"
                  type="secondary"
                  display="block"
                />
              </div>
            </div>
            <div className="col-span-12 pt-10 lg:pt-0 lg:col-span-5 lg:col-start-8 ">
              <Image src={GrowImg} alt="" className="mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
