import React from 'react';
import {
  ChatBubbleBottomCenterTextIcon,
  CloudArrowUpIcon,
  CommandLineIcon,
  LockClosedIcon,
  MagnifyingGlassCircleIcon,
  UserGroupIcon
} from "@heroicons/react/20/solid";
import Image from 'next/image';

const primaryFeatures = {
  creator: {
    title: "Land deals with major brands.",
    subtitle: "Crafy connects you with brands that recognize your talent and aim for real, results-driven collaborations.",
    features: [
      {
        name: 'Sell more.',
        description: 'Receive job requests from leading brands and secure the best deals...',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'Smart matching powered by AI.',
        description: 'By analyzing data like audience demographics, content style, and brand values, Crafy can accurately suggest you to right campaing.',
        icon: CommandLineIcon,
      },
      {
        name: 'Fast and straightforward.',
        description: 'Get discovered by the right brands and receive offers that match your style.',
        icon: ChatBubbleBottomCenterTextIcon,
      },
      {
        name: 'We guarantee your payment.',
        description: ' On Crafy, you only work with advertisers who are truly committed. Get paid before starting any campaign, with the confidence that your work is valued and your partnerships are secure.',
        icon: LockClosedIcon,
      },
    ]
  },
  brand: {
    title: "Partner with top creators.",
    subtitle: "Crafy helps you find creators who match your brand’s values and deliver real, results-driven collaborations.",
    features: [
      {
        name: 'Boost your reach.',
        description: 'Connect with top creators who align with your brand and launch campaigns without the hassle.',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'Smart matching powered by AI.',
        description: 'Crafy analyzes audience data, content style, and brand values to recommend the ideal creators for your campaigns.',
        icon: CommandLineIcon,
      },
      {
        name: 'Fast and straightforward.',
        description: "Easily find the right creators based on your brand's values, identity, and goals.",
        icon: MagnifyingGlassCircleIcon,
      },
      {
        name: 'Collab with top creators.',
        description: 'Let engagement data guide you to your target audience',
        icon: UserGroupIcon,
      },
    ]
  }
};

const Features = ({ mode }: { mode?: keyof typeof primaryFeatures } = { mode: 'brand' }) => {
  const currentFeature = primaryFeatures[mode ?? "brand"];

  return (
    <section className="p-2 sm:p-24 m-0">

      <div className="relative isolate overflow-hidden bg-[#242222]/85 py-12 px-6 rounded-3xl  sm:px-10 sm:py-6 lg:py-6 xl:px-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
          <div className="lg:row-start-2 lg:max-w-md">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {currentFeature.title}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">{currentFeature.subtitle}</p>
          </div>
          <Image
            src="/images/feature.png"
            alt="Product screenshot"
            className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-secondary/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none max-h-[50rem]"
            width="2432"
            height="1442"
          />
          <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-secondary/10 lg:pt-10">
            <dl className="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
              {currentFeature.features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.name} className="relative">
                    <dt className="ml-9 inline-block font-semibold text-secondary">
                      <IconComponent
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    {' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
        <div
          className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#cb2c30] to-[#ed393d] opacity-25"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </section>

  );
};

export default Features;