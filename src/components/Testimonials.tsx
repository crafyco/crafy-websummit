'use client'

const featuredTestimonial = {
    body: "Clara understood our brand in minutes and found the perfect creators. We were live in less than a week!!",
    author: {
        name: 'Corona Cigar Co.',
        handle: 'coronacigardowntowno',
        imageUrl: '/images/testimonials/coronacigardowntowno.jpg',
    },
}

const testimonials = [
    [
        [
            {
                body: "Fast, precise, and only the right influencers. Crafy made campaign creation effortless.",
                author: {
                    name: 'Deeply Cafe',
                    handle: 'deeplycoffee',
                    imageUrl: '/images/testimonials/deeplycoffee.jpg',
                },
            },
        ],
        [
            {
                body: "One day, perfect creators, ready-to-launch campaigns. Couldn't be simpler.",
                author: {
                    name: 'Orlando Farmers Market',
                    handle: 'orlandofarmersmarket',
                    imageUrl: '/images/testimonials/orlandofarmersmarket.jpg',
                },
            },
        ],
    ],
    [
        [
            {
                body: "Weeks of research saved. Above-average engagement from month one.",
                author: {
                    name: 'The Tea Room',
                    handle: 'thetearoomexperience',
                    imageUrl: '/images/testimonials/thetearoomexperience.jpg',
                },
            },
        ],
        [
            {
                body: "I'm not a marketer, but Clara made it easy. Perfect creators and campaign in minutes!",
                author: {
                    name: 'AC Hotel',
                    handle: 'ac_orlando_downtown',
                    imageUrl: '/images/testimonials/ac_orlando_downtown.jpg',
                },
            },
        ],
    ],
]

export default function Testimonials() {
    return (
        <section className="relative py-16 sm:py-24 lg:py-32">
            {/* Background gradients */}
            <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
                <div
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end" aria-hidden="true">
                <div
                    className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#cb2c30] to-[#ed393d] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
                    <p className="font-raleway font-semibold text-base text-[#CB2C30] mb-2">
                        TESTIMONIALS
                    </p>
                    <h2 className="font-raleway font-semibold text-4xl sm:text-5xl tracking-tight text-[#111827]">
                        We work with thousands of amazing people.
                    </h2>
                </div>
                {/* Testimonials Grid */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {/* Featured large testimonial */}
                    <figure className="col-span-2 rounded-2xl bg-[#FAF7F7] p-6 sm:p-8 shadow-lg ring-1 ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                        <blockquote className="font-raleway font-semibold text-lg sm:text-xl leading-8 tracking-tight text-[#111827] mb-8">
                            <p>&ldquo;{featuredTestimonial.body}&rdquo;</p>
                        </blockquote>
                        <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 pt-6">
                            <div className="h-10 w-10 rounded-full bg-gray-50 overflow-hidden flex-none">
                                <div className="w-full h-full bg-gradient-to-br from-[#CB2C30] to-[#ED393D]" />
                            </div>
                            <div className="flex-auto">
                                <div className="font-raleway font-semibold text-sm text-[#111827]">{featuredTestimonial.author.name}</div>
                                <div className="font-raleway text-sm text-[#4B5563]">@{featuredTestimonial.author.handle}</div>
                            </div>
                        </figcaption>
                    </figure>
                    {/* Other testimonials */}
                    {testimonials.map((columnGroup, columnGroupIdx) => (
                        <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                            {columnGroup.map((column, columnIdx) => (
                                <div
                                    key={columnIdx}
                                    className={`${
                                        (columnGroupIdx === 0 && columnIdx === 0) ||
                                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                            ? 'xl:row-span-2'
                                            : 'xl:row-start-1'
                                    } space-y-8`}
                                >
                                    {column.map((testimonial) => (
                                        <figure key={testimonial.author.handle} className="rounded-2xl bg-[#FAF7F7] p-6 shadow-lg ring-1 ring-gray-900/5">
                                            <blockquote className="font-raleway text-sm leading-6 text-[#111827] mb-6">
                                                <p>&ldquo;{testimonial.body}&rdquo;</p>
                                            </blockquote>
                                            <figcaption className="flex items-center gap-x-4">
                                                <div className="h-10 w-10 rounded-full bg-gray-50 overflow-hidden flex-none">
                                                    <div className="w-full h-full bg-gradient-to-br from-[#4F46E5] to-[#9089FC]" />
                                                </div>
                                                <div className="flex-auto">
                                                    <div className="font-raleway font-semibold text-sm text-[#111827]">{testimonial.author.name}</div>
                                                    <div className="font-raleway text-sm text-[#4B5563]">@{testimonial.author.handle}</div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
