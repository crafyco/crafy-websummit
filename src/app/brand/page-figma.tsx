'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useAnalytics } from '@/lib/analytics'

export default function BrandPageFigma() {
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.page(window.location.pathname, 'Brand Page Figma - Crafy')
  }, [analytics])

  return (
    <div className="relative w-full min-h-screen bg-[#FAF7F7]">
      <Header />
      
      {/* Main Container - 1578px width, 7410px height */}
      <div className="relative w-full max-w-[1578px] mx-auto min-h-[7410px]">
        
        {/* Toggle Buttons */}
        <div className="absolute left-[43.79%] right-[44.82%] top-[5.09%] isolate inline-flex rounded-md shadow-sm bg-white/[0.01]">
          <button className="relative inline-flex items-center rounded-l-md px-3 py-2 text-xl font-semibold ring-1 ring-inset focus:z-10 bg-[#CB2C30] text-white h-11">
            <span className="font-raleway font-semibold text-[20px] leading-[28px]">Brand</span>
          </button>
          <button className="relative inline-flex items-center rounded-r-md px-3 py-2 text-xl font-semibold ring-1 ring-inset focus:z-10 bg-white text-[#111827] ring-[#D1D5DB] hover:bg-gray-50 h-11">
            <span className="font-raleway font-semibold text-[20px] leading-[28px]">Creator</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="absolute left-[15.93%] right-[39.83%] top-[7.35%]">
          {/* Powered by AI Badge */}
          <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 w-fit">
            <span className="font-raleway font-semibold text-[14px] leading-[24px] text-[#4F46E5]">Powered by AI</span>
            <div className="h-4 w-px bg-gray-900/10"></div>
            <span className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">Boost your brand</span>
          </div>
          
          {/* Main Title */}
          <h1 className="font-raleway font-semibold text-[48px] leading-[48px] tracking-[-1.2px] text-[#111827] mt-16">
            Your creative arm, without a team or agency
          </h1>
          
          {/* Description */}
          <div className="mt-8 space-y-6">
            <p className="font-raleway font-medium text-[20px] leading-[32px] text-[#6B7280]">
              Crafy connects you to content creators who think and communicate as part of your team, taking your message to the right audience.
            </p>
            <p className="font-raleway font-bold text-[20px] leading-[32px] text-[#6B7280]">
              No monthly fees, no long contracts: you just pay when you use, and we take care of the creativity, strategy and growth.
            </p>
          </div>
          
          {/* CTA Button */}
          <button className="mt-8 block w-full rounded-md bg-[#CB2C30] px-7 py-4 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#CB2C30]/90 h-[60px]">
            <span className="font-raleway font-semibold text-[20px] leading-[28px]">Want to know more</span>
          </button>
        </div>

        {/* Phone Images */}
        <div className="absolute w-[276px] h-[546px] left-[1013px] top-[449px] rounded-[19px] bg-gray-200"></div>
        <div className="absolute w-[279px] h-[76px] left-[251px] top-[191px] bg-gray-200"></div>

        {/* Clara Section */}
        <div className="absolute left-[38.02%] right-[17.17%] top-[calc(50%-145px/2-2413.5px)]">
          <h2 className="font-raleway font-extrabold text-[36px] leading-[40px] text-[#111827]">Meet "Clara"</h2>
          <p className="font-raleway text-[18px] leading-[28px] text-[#4B5563] mt-4">
            Clara is our AI agent, an expert on creators, here to help you craft campaigns effortlessly and fast.
          </p>
        </div>

        <div className="absolute w-[352px] h-[352px] left-[429px] top-[1810px] bg-gray-200 rounded-lg"></div>

        {/* Features Grid */}
        <div className="absolute left-[19.2%] right-[18.25%] top-[1400px] grid grid-cols-3 gap-6 h-[237px]">
          
          {/* Matchmaking Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="w-[35px] h-[31px] mx-auto mb-4 bg-[#CB2C30] rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded"></div>
            </div>
            <h3 className="font-raleway font-semibold text-[18px] leading-[25px] text-[#111827] mb-4">Matchmaking</h3>
            <p className="font-raleway text-[14px] leading-[23px] text-[#4B5563]">
              Our Clara understands your brand, product, and audience—recommending only the creators and audiences that truly align with you.
            </p>
          </div>

          {/* Time-saver Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="w-[35px] h-[31px] mx-auto mb-4 bg-[#CB2C30] rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded"></div>
            </div>
            <h3 className="font-raleway font-semibold text-[18px] leading-[25px] text-[#111827] mb-4">Time-saver</h3>
            <p className="font-raleway text-[14px] leading-[23px] text-[#4B5563]">
              Ditch the spreadsheets and manual follow-ups, let Clara help you. Manage campaigns without the headache.
            </p>
          </div>

          {/* Effective Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="w-[35px] h-[31px] mx-auto mb-4 bg-[#CB2C30] rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded"></div>
            </div>
            <h3 className="font-raleway font-semibold text-[18px] leading-[25px] text-[#111827] mb-4">Effective</h3>
            <p className="font-raleway text-[14px] leading-[23px] text-[#4B5563]">
              Get big-brand results without the big-brand budget. Creator marketing is one of the most cost-effective ways to grow.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="absolute left-[10.33%] right-[11.37%] top-[2701px] h-[732.8px]">
          <div className="text-center mb-16">
            <p className="font-raleway font-semibold text-[16px] leading-[28px] text-[#CB2C30] mb-4">TESTIMONIALS</p>
            <h2 className="font-raleway font-semibold text-[48px] leading-[48px] tracking-[-1.2px] text-[#111827]">
              We work with thousands of amazing people.
            </h2>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-4 gap-8 mt-16">
            {/* Main Testimonial */}
            <div className="col-span-2 bg-[#FAF7F7] rounded-2xl p-6 shadow-lg ring-1 ring-gray-900/5">
              <p className="font-raleway font-semibold text-[20px] leading-[32px] tracking-[-0.5px] text-[#111827] mb-8">
                "Clara understood our brand in minutes and found the perfect creators. We were live in less than a week!!"
              </p>
              <div className="flex items-center gap-x-4 border-t border-gray-900/10 pt-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-raleway font-semibold text-[14px] leading-[24px] text-[#111827]">Corona Cigar Co.</p>
                  <p className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">@coronacigardowntowno</p>
                </div>
              </div>
            </div>

            {/* Side Testimonials */}
            <div className="bg-[#FAF7F7] rounded-2xl p-6 shadow-lg ring-1 ring-gray-900/5">
              <p className="font-raleway text-[14px] leading-[24px] text-[#111827] mb-4">
                "Fast, precise, and only the right influencers. Crafy made campaign creation effortless."
              </p>
              <div>
                <p className="font-raleway font-semibold text-[14px] leading-[24px] text-[#111827]">Deeply Cafe</p>
                <p className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">@deeplycoffee</p>
              </div>
            </div>

            <div className="bg-[#FAF7F7] rounded-2xl p-6 shadow-lg ring-1 ring-gray-900/5">
              <p className="font-raleway text-[14px] leading-[24px] text-[#111827] mb-4">
                "One day, perfect creators, ready-to-launch campaigns. Couldn't be simpler."
              </p>
              <div>
                <p className="font-raleway font-semibold text-[14px] leading-[24px] text-[#111827]">Orlando Farmers Market</p>
                <p className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">@orlandofarmersmarket</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section with Benefits */}
        <div className="absolute left-[11.85%] right-[11.91%] top-[3717px] h-[792px] bg-[rgba(36,34,34,0.85)] rounded-3xl">
          <div className="p-12 text-white">
            <h2 className="font-raleway font-semibold text-[36px] leading-[40px] tracking-[-0.9px] mb-6">
              Partner with top creators.
            </h2>
            <p className="font-raleway text-[18px] leading-[32px] text-[#FAF7F7] mb-12">
              Crafy helps you find creators who match your brand's values and deliver real, results-driven collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 bg-[#CB2C30] rounded mt-1 flex-shrink-0"></div>
                <p className="font-raleway text-[16px] leading-[28px] text-[#FAF7F7]">
                  Boost your reach. Connect with top creators who align with your brand and launch campaigns without the hassle.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 bg-[#CB2C30] rounded mt-1 flex-shrink-0"></div>
                <p className="font-raleway text-[16px] leading-[28px] text-[#FAF7F7]">
                  Customizable. Set your own preferences and let Clara suggest only the most relevant connections.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 bg-[#CB2C30] rounded mt-1 flex-shrink-0"></div>
                <p className="font-raleway text-[16px] leading-[28px] text-[#FAF7F7]">
                  Understand the results. Access performance metrics to make the best decision for your campaigns.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 bg-[#CB2C30] rounded mt-1 flex-shrink-0"></div>
                <p className="font-raleway text-[16px] leading-[28px] text-[#FAF7F7]">
                  Worry-Free Collaboration. With secure payments and clear agreements, you can finally stop worrying and start creating.
                </p>
              </div>
            </div>
          </div>
          
          {/* Feature Image */}
          <div className="absolute w-[755px] h-[668px] right-12 top-16 bg-gray-300 rounded-[31px] shadow-lg"></div>
        </div>

        {/* Pricing Section */}
        <div className="absolute left-[10.84%] right-[10.86%] top-[5368px] h-[989.6px]">
          <div className="text-center mb-16">
            <p className="font-raleway font-semibold text-[16px] leading-[28px] text-[#ED393D] mb-4">Pricing</p>
            <h2 className="font-raleway font-semibold text-[60px] leading-[60px] tracking-[-1.5px] text-[#CB2C30] mb-8">
              Choose the right plan for you
            </h2>
            <p className="font-raleway font-medium text-[20px] leading-[32px] text-[#9CA3AF] max-w-2xl mx-auto">
              Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-3xl p-10 shadow-xl ring-1 ring-gray-900/10">
              <div className="mb-8">
                <p className="font-raleway font-semibold text-[16px] leading-[28px] text-[#CB2C30] mb-4">Free</p>
                <div className="flex items-baseline gap-x-2">
                  <span className="font-raleway font-semibold text-[48px] leading-[48px] tracking-[-1.2px] text-[#111827]">$0.00</span>
                  <span className="font-raleway font-semibold text-[16px] leading-[28px] text-[#4B5563]">/month</span>
                </div>
                <p className="font-raleway text-[16px] leading-[28px] text-[#4B5563] mt-4">
                  Perfect to start exploring creators and understand the platform.
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#CB2C30] rounded flex-shrink-0"></div>
                  <span className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">Unlimited creator selection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#CB2C30] rounded flex-shrink-0"></div>
                  <span className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">Creator profiles</span>
                </li>
              </ul>
              
              <button className="w-full bg-[#CB2C30] rounded-md px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#CB2C30]/90 h-10">
                <span className="font-raleway font-semibold text-[14px] leading-[24px]">Get started today</span>
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-3xl p-10 shadow-xl ring-1 ring-gray-900/10">
              <div className="mb-8">
                <p className="font-raleway font-semibold text-[16px] leading-[28px] text-[#CB2C30] mb-4">Pro</p>
                <div className="flex items-baseline gap-x-2">
                  <span className="font-raleway font-semibold text-[48px] leading-[48px] tracking-[-1.2px] text-[#111827]">$38.00</span>
                  <span className="font-raleway font-semibold text-[16px] leading-[28px] text-[#4B5563]">/month</span>
                </div>
                <p className="font-raleway text-[16px] leading-[28px] text-[#4B5563] mt-4">
                  Advanced tools and AI to scale your campaigns. Billed annually ($198.00).
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#CB2C30] rounded flex-shrink-0"></div>
                  <span className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">Unlimited creator selection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#CB2C30] rounded flex-shrink-0"></div>
                  <span className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">Creator profiles</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#CB2C30] rounded flex-shrink-0"></div>
                  <span className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">Engagement and collab metrics</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#CB2C30] rounded flex-shrink-0"></div>
                  <span className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">Favorite list</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#CB2C30] rounded flex-shrink-0"></div>
                  <span className="font-raleway text-[14px] leading-[24px] text-[#4B5563]">AI-powered creator matchmaking</span>
                </li>
              </ul>
              
              <button className="w-full bg-[#CB2C30] rounded-md px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#CB2C30]/90 h-10">
                <span className="font-raleway font-semibold text-[14px] leading-[24px]">Get started today</span>
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="absolute left-[12.74%] right-[10.2%] top-[4788px] h-[464px] bg-[#FAF7F7] border border-[#E5E7EB] rounded-3xl shadow-2xl">
          <div className="p-24 text-center">
            <h2 className="font-raleway font-semibold text-[48px] leading-[48px] tracking-[-1.2px] text-black mb-6">
              Subscribe to our Newsletter!
            </h2>
            <p className="font-raleway text-[18px] leading-[28px] text-black mb-8 max-w-2xl mx-auto">
              Stay updated with the latest news! Sign up with your email to receive exclusive updates directly in your inbox.
            </p>
            
            <div className="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-2 text-sm text-[#6B7280] shadow-sm h-10"
              />
              <button className="bg-[#CB2C30] text-white rounded-md px-6 py-2 text-sm font-semibold shadow-sm hover:bg-[#CB2C30]/90 h-10">
                <span className="font-raleway font-semibold text-[14px] leading-[20px]">subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-8 pt-[800px]">
          {/* Card 1 */}
          <div className="relative w-[1001px] h-[700px] bg-white/95 border border-[#E5E7EB] rounded-2xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] mx-auto">
            <div className="p-8 flex items-center">
              <div className="flex-1">
                <h2 className="font-raleway font-semibold text-[60px] leading-[48px] tracking-[-1.2px] text-[#111827] mb-8">
                  Tap into new audiences, instantly
                </h2>
                <div className="border-t border-[#ABADAF] my-8"></div>
                <p className="font-raleway text-[25px] leading-[23px] text-[#6B7280]">
                  Getting noticed is hard when you're starting from scratch. How do you reach new customers if you don't have a following? Don't build an audience from zero. Borrow one from creators who are already trusted by your ideal customers. Get your message heard, loud and clear.
                </p>
              </div>
              <div className="w-[268px] h-[268px] bg-gray-200 rounded-full ml-8"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-[931px] h-[651px] bg-white/95 border border-[#E5E7EB] rounded-2xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] mx-auto">
            <div className="p-8 flex items-center">
              <div className="flex-1">
                <h2 className="font-raleway font-semibold text-[60px] leading-[48px] tracking-[-1.2px] text-[#111827] mb-8">
                  Find your perfect match in minutes.
                </h2>
                <div className="border-t border-[#ABADAF] my-8"></div>
                <p className="font-raleway text-[25px] leading-[23px] text-[#6B7280]">
                  You know creator marketing works, but where do you even find the right people? No more endless scrolling and awkward DMs. Our curated marketplace connects you with vetted creators who are ready to work with brands like yours.
                </p>
              </div>
              <div className="w-[268px] h-[268px] bg-gray-200 rounded-full ml-8"></div>
            </div>
          </div>

          {/* Additional Cards */}
          <div className="relative w-[1001px] h-[700px] bg-white border border-[#E5E7EB] rounded-2xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] mx-auto">
            <div className="p-8 flex items-center">
              <div className="flex-1">
                <h2 className="font-raleway font-semibold text-[60px] leading-[48px] tracking-[-1.2px] text-[#111827] mb-8">
                  No need to be a marketing guru
                </h2>
                <div className="border-t border-[#ABADAF] my-8"></div>
                <p className="font-raleway text-[25px] leading-[23px] text-[#6B7280]">
                  You know you should be creating campaigns, but you don't have the time, the team, or honestly, the first clue where to start? Think of us as your outsourced marketing team, without the agency fees or the headache.
                </p>
              </div>
              <div className="w-[268px] h-[268px] bg-gray-200 rounded-full ml-8"></div>
            </div>
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#CB2C30] rounded-md px-7 py-4 text-center font-semibold text-white shadow-sm hover:bg-[#CB2C30]/90 w-[440px] h-[60px]">
              <span className="font-raleway font-semibold text-[20px] leading-[28px]">Want to know more</span>
            </button>
          </div>

          <div className="relative w-[1001px] h-[700px] bg-white/95 border border-[#E5E7EB] rounded-2xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] mx-auto">
            <div className="p-8 flex items-center">
              <div className="flex-1">
                <h2 className="font-raleway font-semibold text-[60px] leading-[48px] tracking-[-1.2px] text-[#111827] mb-8">
                  Manage everything in one place
                </h2>
                <div className="border-t border-[#ABADAF] my-8"></div>
                <p className="font-raleway text-[25px] leading-[23px] text-[#6B7280]">
                  Ditch the spreadsheets and manual follow. From first chat to final payment, it all happens on Crafy. Our platform gives you a simple workflow for approvals, secure contracts, and peace of mind,
                </p>
              </div>
              <div className="w-[268px] h-[268px] bg-gray-200 rounded-full ml-8"></div>
            </div>
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#CB2C30] rounded-md px-7 py-4 text-center font-semibold text-white shadow-sm hover:bg-[#CB2C30]/90 w-[440px] h-[60px]">
              <span className="font-raleway font-semibold text-[20px] leading-[28px]">Want to know more</span>
            </button>
          </div>

          <div className="relative w-[1001px] h-[700px] bg-white/95 border border-[#E5E7EB] rounded-2xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] mx-auto">
            <div className="p-8 flex items-center">
              <div className="flex-1">
                <h2 className="font-raleway font-semibold text-[60px] leading-[48px] tracking-[-1.2px] text-[#111827] mb-8">
                  Turn authentic content into real sales.
                </h2>
                <div className="border-t border-[#ABADAF] my-8"></div>
                <p className="font-raleway font-bold text-[25px] leading-[23px] text-[#6B7280]">
                  People trust people, not ads. Let creators tell your story. They drive more engagement and sales than traditional media, giving you a powerful new channel for customer acquisition.
                </p>
              </div>
              <div className="w-[268px] h-[268px] bg-gray-200 rounded-full ml-8"></div>
            </div>
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#CB2C30] rounded-md px-7 py-4 text-center font-semibold text-white shadow-sm hover:bg-[#CB2C30]/90 w-[440px] h-[60px]">
              <span className="font-raleway font-semibold text-[20px] leading-[28px]">Want to know more</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}