import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

export default function Term() {
    return (
        <div className="relative w-full min-h-screen bg-[#FAF7F7]">
            <Header />

            <div className="mx-auto max-w-7xl text-justify my-20">
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-balance">Terms of Use</p>

                <p className="mb-4">These Terms of Use govern the use of the website and services offered by Crafy, a platform that connects digital influencers with companies interested in partnerships. By accessing or using our website, you agree to the terms described below. If you do not agree, we recommend that you do not use our services.</p>

                {/* <hr className="my-6"> */}

                <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>

                <p className="mb-2"><strong>1.1.</strong> By creating an account, browsing, or using Crafy&apos;s services, you accept and agree to comply with these Terms of Use, as well as our Privacy Policy.</p>

                <p className="mb-2"><strong>1.2.</strong> Crafy reserves the right to modify these Terms at any time. Any changes will be notified on the website, and continued use of the platform after updates constitutes acceptance of the modifications.</p>

                {/* <hr className="my-6"> */}

                <h2 className="text-2xl font-semibold mb-2">2. Services Offered</h2>

                <p className="mb-2"><strong>2.1.</strong> Crafy provides a platform that connects digital influencers with companies interested in partnerships and commercial collaborations.</p>

                <p className="mb-2"><strong>2.2.</strong> Crafy is not responsible for the fulfillment of contracts or agreements established between influencers and companies.</p>

                {/* <hr className="my-6"> */}

                <h2 className="text-2xl font-semibold mb-2">3. Registration and User Responsibilities</h2>

                <p className="mb-2"><strong>3.1.</strong> To use our services, you must create an account by providing accurate, complete, and up-to-date information.</p>

                <p className="mb-2"><strong>3.2.</strong> You are responsible for maintaining the confidentiality of your access credentials. Any activity carried out on your account is your sole responsibility.</p>

                <p className="mb-2"><strong>3.3.</strong> Users commit to using the platform ethically, without violating laws, regulations, or the rights of third parties.</p>

                {/* <hr className="my-6"> */}

                <h2 className="text-2xl font-semibold mb-2">4. Usage Restrictions</h2>

                <p className="mb-2"><strong>4.1.</strong> It is prohibited to use the platform to:</p>

                <ul className="list-disc pl-6 mb-4">
                    <li>Send offensive, discriminatory, or illegal content;</li>
                    <li>Engage in fraudulent activities;</li>
                    <li>Compromise the security of the website, including hacking attempts or malware distribution.</li>
                </ul>

                <p className="mb-2"><strong>4.2.</strong> Crafy reserves the right to suspend or terminate accounts that violate these Terms.</p>

                {/* <hr className="my-6"> */}

                <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>

                <p className="mb-2"><strong>5.1.</strong> Crafy is not responsible for:</p>

                <ul className="list-disc pl-6 mb-4">
                    <li>Direct, indirect, or incidental damages related to the use of the platform;</li>
                    <li>Content or behavior of registered influencers and companies.</li>
                </ul>

                <p className="mb-2"><strong>5.2.</strong> The platform is provided as is, without guarantees of uninterrupted or error-free operation.</p>

                {/* <hr className="my-6"> */}

                <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>

                <p className="mb-4"><strong>6.1.</strong> All content, including texts, logos, images, and source code, is the property of Crafy or its licensors. Reproduction without authorization is prohibited.</p>

                {/* <hr className="my-6"> */}

                <h2 className="text-2xl font-semibold mb-2">7. General Provisions</h2>

                <p className="mb-2"><strong>7.1.</strong> These Terms will be governed by Brazilian law.</p>

                <p className="mb-2"><strong>7.2.</strong> Any disputes will be resolved in the jurisdiction of the courts of São Paulo, unless otherwise provided by law.</p>

                <p className="mb-2"><strong>7.3.</strong> If any clause of these Terms is deemed invalid, the remaining provisions remain in full force.</p>

                {/* <hr className="my-6"> */}

                <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>

                <p className="mb-4">For questions or requests, please contact us at <a href="mailto:suporte@crafy.com" className="text-blue-500">suporte@crafy.com</a>.</p>

                <p className="italic">Last updated: 06/01/2025</p>
            </div>

            <Footer />
        </div>

    );
}