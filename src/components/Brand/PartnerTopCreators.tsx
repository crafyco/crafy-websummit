import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function PartnerTopCreators() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-crafy-gray-900">
              Partner with top creators
            </h2>
            <p className="mt-4 text-crafy-gray-600 text-base sm:text-lg max-w-xl">
              Build authentic collaborations powered by data. Find creators your audience already trusts and scale campaigns with confidence.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'AI-powered matching to find the right voices',
                'Audience and performance insights before you invest',
                'Contracts and payments handled securely',
                'One place to brief, approve and track results',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-crafy-red mt-0.5" />
                  <span className="text-crafy-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-crafy-red/10 blur-3xl" />
            <div className="rounded-2xl border border-crafy-gray-200 bg-[#fbf7f7] p-6 shadow-sm">
              <Image src="/images/feature.png" width={640} height={420} alt="Partner with top creators" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
