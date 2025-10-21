import React from 'react';
import Image from 'next/image';

import logo from "@images/logo-simbolo-vermelho.png";
// import deeplycoffeeLogo from "@images/testimonials/deeplycoffee.jpg";
// import orlandofarmersmarketLogo from "@images/testimonials/orlandofarmersmarket.jpg";
// import thetearoomexperienceLogo from "@images/testimonials/thetearoomexperience.jpg";
// import ac_orlando_downtownLogo from "@images/testimonials/ac_orlando_downtown.jpg";
// import coronacigardowntownoLogo from "@images/testimonials/coronacigardowntowno.jpg";

const featuredTestimonial = {
    body: "Clara understood our brand in minutes and found the perfect creators. We were live in less than a week!!",
    author: {
        name: 'Corona Cigar Co.',
        handle: 'coronacigardowntowno',
        imageUrl: '/images/testimonials/coronacigardowntowno.jpg',
    },
};

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
                body: "One day, perfect creators, ready-to-launch campaigns. Couldn’t be simpler.",
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
                body: "I’m not a marketer, but Clara made it easy. Perfect creators and campaign in minutes!",
                author: {
                    name: 'AC Hotel',
                    handle: 'ac_orlando_downtown',
                    imageUrl: '/images/testimonials/ac_orlando_downtown.jpg',
                },
            },
        ],
    ],
];

const Testimonials = () => {
    return (
        <div className="relative">
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
            <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base/7 font-semibold text-primary">TESTIMONIALS</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
                        We work with thousands of amazing people.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure className="col-span-2 hidden sm:block sm:rounded-2xl bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                        <blockquote className="p-12 text-xl/8 font-semibold tracking-tight text-gray-900">
                            <p>{`“${featuredTestimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                            <Image width={112} height={112} className="h-10 w-10 flex-none rounded-full bg-gray-50" src={featuredTestimonial.author.imageUrl} alt="" />
                            <div className="flex-auto">
                                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                            </div>
                            <Image width={112} height={112} className="h-10 w-auto flex-none" src="/images/logo-simbolo-vermelho.png" alt="" />
                        </figcaption>
                    </figure>
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
                                        <figure key={testimonial.author.handle} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                                            <blockquote className="text-gray-900">
                                                <p>{`“${testimonial.body}”`}</p>
                                            </blockquote>
                                            <figcaption className="mt-6 flex items-center gap-x-4">
                                                <Image width={112} height={112} className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                                                <div>
                                                    <div className="font-semibold">{testimonial.author.name}</div>
                                                    <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
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
        </div>
    );
};

export default Testimonials;