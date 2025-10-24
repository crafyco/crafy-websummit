import Image from 'next/image'

import {
  CloudArrowUpIcon,
  PencilSquareIcon,
  ClipboardDocumentListIcon,
  SparklesIcon
} from "@heroicons/react/20/solid";


export default function PartnerTopCreators() {

  const features = [
    {
      title: 'Boost your reach',
      description: 'Connect with top creators who align with your brand and launch campaigns without the hassle.',
      icon: CloudArrowUpIcon
    },
    {
      title: 'Custom AI matching',
      description: 'Set your own preferences and let Clara suggest only the most relevant connections.',
      icon: PencilSquareIcon
    },
    {
      title: 'Understand the results',
      description: 'Access performance metrics to make the best decision for your campaigns.',
      icon: ClipboardDocumentListIcon
    },
    {
      title: 'Worry-Free Collaboration',
      description: 'With secure payments and clear agreements, you can finally stop worrying and start creating.',
      icon: SparklesIcon
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-crafy-gray-900">
              Partner with top creators
            </h2>
            <p className="mt-4 text-crafy-gray-600 text-base sm:text-lg max-w-xl">
              Crafy helps you find creators who match your brand’s values and deliver real, results-driven collaborations.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.title} className="flex items-start gap-3">
                    <IconComponent className="h-5 w-5 text-crafy-red mt-0.5" />
                    <span className="flex flex-col">
                      <span className="text-crafy-gray-700 font-bold">{item.title}</span>
                      <span className="text-crafy-gray-700 ">{item.description}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-crafy-gray-200 shadow-sm overflow-hidden">
              <Image 
                src="/images/feature.png" 
                width={640} 
                height={420} 
                alt="Partner with top creators" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
