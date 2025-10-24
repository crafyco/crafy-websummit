import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

export default function Privacy() {
    return (
        <div className="relative w-full min-h-screen bg-[#FAF7F7]">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
                <h1 className="my-2 text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-balance">
                    Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-6">Last updated: February 6, 2025</p>

                <section className="space-y-4">
                    <p>
                         Crafy&apos;s   mission is to help build connections between people and make the world more open and inclusive.
                        In other words, to build a world where everyone can feel at home, anywhere.
                    </p>
                    <p>
                        We are a community built on trust. To earn that trust, it&apos;s essential that we clearly demonstrate how
                        we use your information and protect your human right to privacy.
                    </p>
                    <p>
                        This Privacy Policy describes how Crafy, Inc. and its affiliates (&lsquo;we,&rsquo; &lsquo;us,&rsquo; or &lsquo;Crafy&rsquo;)
                        process personal data in connection with your use of the Crafy Platform. Depending on where you
                        live and what you do on the Crafy Platform, the supplemental privacy pages listed below may apply
                        to you.
                    </p>

                    <p>
                        Click on the links and review the supplemental information describing how we process personal data
                        for those regions and services.
                    </p>

                    <ul className="list-decimal list-inside space-y-1">
                        <li>Who Controls My Personal Data</li>
                        <li>Personal Data We Collect</li>
                        <li>How We Use the Information We Collect</li>
                        <li>Sharing and Disclosure</li>
                        <li>Integrations and Third Party Partners</li>
                        <li>Changing Your Country or State of Residence</li>
                        <li>Your Rights</li>
                        <li>Retention</li>
                        <li>Security</li>
                        <li>Changes to This Privacy Policy</li>
                        <li>Crafy Contact Information and Responsible Entities</li>
                        <li>Definitions</li>
                    </ul>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">1. WHO CONTROLS MY PERSONAL DATA</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold">1.1 Controller</h4>
                            <p>
                                When this Policy mentions <strong>Crafy</strong>, <strong>we</strong>, <strong>us</strong> or
                                <strong>our</strong>, it refers to the Crafy company that is responsible for your information
                                under this Privacy Policy (the <strong>Controller</strong>). The Designated Controller is set
                                out in Annex 1.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">1.2 Payment Controller</h4>
                            <p>
                                This Privacy Policy also applies to the Payment Services provided to you by Crafy Payments,
                                pursuant to the Payments Terms of Service (<strong>Payments Terms</strong>). When you use the
                                Payment Services, you will also provide your personal data to one or more Crafy Payments entities
                                (the <strong>Payments Controller</strong> as described in Annex 1), which will be responsible for
                                your data in connection with the Payment Services, generally depending on your country of
                                residence.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">1.3 Insurance Controller</h4>
                            <p>
                                As defined in the applicable document referred to in the Insurance Supplement.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">2. PERSONAL DATA WE COLLECT</h3>
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">2.1 Information Required to Use the Crafy Platform</h4>
                            <p>
                                We collect personal data about you when you use the Crafy Platform. Without this data, we may not
                                be able to provide all the services you request. This data includes:
                            </p>
                            <ul className="list-inside space-y-3">
                                <li>
                                    <strong>2.1.1 Contact, Account and Profile Information.</strong>
                                    Such as first name, last name, phone number, postal address, email address, date of birth, and
                                    profile picture, depending on the features you use.
                                </li>
                                <li>
                                    <strong>2.1.2 Identity Information.</strong>
                                    When appropriate, we may ask you to submit an image of your government-issued ID, passport,
                                    national ID card, CPF (Brazilian Social Security number), or driver&apos;s license, as well as other
                                    verification information such as date of birth, address, email address, or phone number. We may
                                    also request a selfie to verify your ID.
                                </li>
                                <li>
                                    <strong>2.1.3 Payment Transaction Information.</strong>
                                    Includes payment account, credit card or bank details, payment instrument used, date, amount,
                                    expiration date, billing zip code, PayPal email, IBAN, address and other transaction details.
                                </li>
                                <li>
                                    <strong>2.1.4 Insurance Information.</strong>
                                    When you express interest in Travel Insurance, Booking Insurance or Stay Protection, we require
                                    data such as name, accommodation address, date of birth, trip start/end dates, cost, currency and
                                    booking number.
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">2.2 Information You Choose to Provide to Us</h4>
                            <p>
                                You may choose to provide us with additional personal data, including:
                            </p>
                            <ul className="list-inside space-y-3">
                                <li><strong>2.2.1 Additional Profile Information.</strong> Gender, preferred language, city, personal
                                    description, etc.</li>
                                <li><strong>2.2.2 Information about Other People.</strong> Payment instrument or contact information for
                                    another person or fellow traveler. You confirm you have their permission to share this data.</li>
                                <li><strong>2.2.3 Biometric Data.</strong> Facial recognition data derived from photos or IDs you submit,
                                    with your consent where required by law.</li>
                                <li><strong>2.2.4 Communication Information.</strong> Emails, calls, messages, SMS, transcripts, call
                                    recordings, phone numbers, routing data, etc.</li>
                                <li><strong>2.2.5 User Generated Content.</strong> Photos, videos, and any content you upload.</li>
                                <li><strong>2.2.6 Supporting Information.</strong> Call recordings, chat history, message logs collected for
                                    customer service and quality improvement.</li>
                                <li><strong>2.2.7 Other Information.</strong> Data from forms, questionnaires, surveys, promotions, contact
                                    imports, location data, or health information you voluntarily share.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">2.3 Information Collected Automatically</h4>
                            <p>
                                When you use the Crafy Platform and Payment Services, we automatically collect certain data:
                            </p>
                            <ul className="list-inside space-y-3">
                                <li><strong>2.3.1 Geolocation Information.</strong> Precise or approximate location from IP, GPS, or device
                                    settings, even when not using the app if enabled.</li>
                                <li><strong>2.3.2 Usage Information.</strong> Search history, reservations, services purchased, access
                                    dates/times, pages viewed, links clicked, and other interactions.</li>
                                <li><strong>2.3.3 Device Information.</strong> IP address, device type, OS version, crash data, unique
                                    identifiers, and read receipts.</li>
                                <li><strong>2.3.4 Cookies and Similar Technologies.</strong> As described in our Cookie Policy.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">2.4 Information We Collect from Third Parties</h4>
                            <ul className="list-inside space-y-3">
                                <li><strong>2.4.1 Third Party Applications.</strong> Data from services you link to Crafy (Google, Facebook,
                                    WeChat), including profile info, friends list, device registrations.</li>
                                <li><strong>2.4.2 Background Information Providers.</strong> Background checks, sex offender records,
                                    criminal history where permitted by law.</li>
                                <li><strong>2.4.3 Corporate Product Invitations and Account Management.</strong> Organizations may share
                                    user data to manage enterprise accounts.</li>
                                <li><strong>2.4.4 Referrals and Travel Companions.</strong> Personal data provided by another user who
                                    invites you to the platform.</li>
                                <li><strong>2.4.5 Complaints.</strong> Data related to complaints filed by hosts, guests, or third parties.
                                </li>
                                <li><strong>2.4.6 Financial Institutions.</strong> Bank account details, balance info when paying directly
                                    from your bank.</li>
                                <li><strong>2.4.7 Flexible Payment Plans and Financing Providers.</strong> Payment schedule and amounts for
                                    installment plans.</li>
                                <li><strong>2.4.8 Other Sources.</strong> Fraud prevention data, demographic data, publicly available info
                                    (e.g., social media posts), health data (including communicable disease information), and data shared by
                                    authorities or partners.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">3. HOW WE USE THE INFORMATION WE COLLECT</h3>
                    <div className="space-y-4">
                        <div>
                            <p>
                                We use personal data as described in this Privacy Policy. If you reside outside the United States, Brazil,
                                or China, click here to learn more about our legal bases for collecting and processing personal data.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">3.1 Provision of the Crafy Platform</h4>
                            <p>
                                We may process this information to: allow you to access the <strong>Crafy Platform</strong> and make and
                                receive payments; allow you to communicate and interact with other people; process and respond to your
                                request; provide service to you; send you messages, updates, security alerts, and account notifications;
                                determine your country or state of residence based on automated analysis of your account information and
                                your interactions with the <strong>Crafy Platform</strong>, as described in Changing Your Country or
                                State of Residence; and allow your use of our corporate products and accommodation services.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">3.2 Improvement and Development of the Crafy Platform</h4>
                            <p>
                                We may process this information to: carry out analysis, debugging and research; improve and develop our
                                products and services; and provide training to customer service staff.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">3.3 Customization of the Crafy Platform</h4>
                            <p>
                                We may process this information to: personalize your experience based on your interactions on the
                                <strong>Crafy Platform</strong>, your search and booking history, your profile information and
                                preferences, and other information you choose to provide to us; and personalize your Crafy experience.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">3.4 Protecting the Crafy Platform and Community</h4>
                            <p>
                                We may process this information to: study and combat discrimination in accordance with our
                                <strong>Non-Discrimination Policy</strong>; detect, prevent, assess and address fraud and security risks;
                                protect our community from illegal activities or other behaviors as set forth in the <strong>Safety
                                    Policies page</strong> and the <strong>Illegal and Prohibited Activities Policy</strong>, verify or
                                authenticate the information you provide, including identity information, as described in the <strong>
                                Information Required to Use the Crafy Platform </strong> section; perform checks on databases and other sources of
                                information, including background checks; comply with our legal obligations, protect the health and
                                well-being of our Guests, Hosts, Host employees and members of the public; resolve disputes with our
                                Members, including sharing information with Co-Hosts or Additional Guests about disputes related to your
                                role as a Co-Host or Additional Guest; enforce our contracts with third parties; determine eligibility for
                                certain types of reservations, such as Instant Book; comply with the law, respond to legal requests,
                                prevent harm, and protect our rights (see  Comply with the law, respond to legal requests, prevent harm,
                                and protect our rights ); enforce our <strong>Terms of Service (Terms)</strong> and other policies,
                                such as our <strong>Non-Discrimination Policy</strong>; and evaluate your interactions with the
                                <strong>Crafy Platform</strong> and information obtained from third parties. In certain cases, automated
                                processes that analyze your account and activities on the Crafy platform, as well as information related
                                to activities on and off the Crafy platform that may be associated with you, may restrict or suspend your
                                access to the <strong>Crafy Platform</strong> if they detect activity that may pose security or other
                                risks to Crafy, our community, or third parties. Learn more about how our system determines whether
                                certain reservations may have a higher risk of incidents here . If you wish to dispute decisions based on
                                automated processes, please contact us through the Contact Information section.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">3.5 Provide, Personalize, Measure, and Improve Our Advertising and
                                Marketing</h4>
                            <p>
                                We may process this information to: send promotional and marketing messages and other information;
                                display, personalize, measure, and improve our advertising on advertising platforms; administer referral
                                programs, rewards, surveys, sweepstakes, contests, or other promotional activities or events sponsored or
                                managed by Crafy or our third-party business partners; analyze characteristics and preferences to send you
                                promotional messages, marketing, advertising and other information that we believe may be of interest to
                                you; and invite you to relevant events and opportunities.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">3.6 Analysis of Your Communications</h4>
                            <div>
                                <h4 className="text-lg font-semibold">3.6.1 Objective</h4>
                                <p>
                                    We may evaluate, review, or analyze your communications on the <strong>Crafy Platform</strong> for the
                                    purposes disclosed in this Privacy Policy, including security, service, product improvement, and as
                                    described in Why We Analyze Messages on Crafy . For example, as part of our fraud prevention efforts, we
                                    may review and analyze messages that attempt to mask contact information and references to other
                                    websites. Subject to applicable law, we may review and analyze all images uploaded by users to the
                                    <strong>Crafy Platform</strong> in message threads, profiles, listings, and experiences to identify
                                    certain illegal or inappropriate activities, such as evidence of child exploitation, with the aim of
                                    identifying and reporting content violations to the appropriate authorities.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">3.6.2 Methods</h4>
                                <p>
                                    We use automated methods whenever reasonably possible. Occasionally, we may need to manually review
                                    communications, such as for investigations or customer service purposes.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">3.6.3 Absence of Sale</h4>
                                <p>
                                    We will not sell ratings or reviews of these communications.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">3.7 Provision of Payment Services</h4>
                            <p>
                                Personal data is used to enable or authorize third parties to use the Payment Services (as defined in the
                                <strong>Payment Terms</strong>), for example to: process payments; perform the contract with you; verify
                                your identity; detect and prevent money laundering, fraud, abuse and security incidents; conduct security
                                investigations and risk assessments; comply with legal and compliance obligations, such as anti-money
                                laundering regulations and sanctions enforcement; enforce the terms of the <strong>Payment Terms</strong>
                                and other payment policies; and provide and improve the Payment Services. If you&apos;re not an Crafy user, we
                                may receive payment information related to you, such as when an Crafy user provides their payment card to
                                complete a booking. See our Help Center article on How to pay and receive payments on someone else&apos;s
                                behalf .
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">3.8 Facilitation of Insurance Sales</h4>
                            <p>
                                Personal data is used and shared to: offer Insurance for you; assess your eligibility to purchase
                                insurance, based on your trip information; facilitate the provision and administration of your Insurance,
                                such as requests for coverage and benefits.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">4. SHARING AND DISCLOSURE</h3>
                    <div className="space-y-4">
                        <div>
                            <p>
                                If you reside outside of the United States, Brazil, and China, learn more about the safeguards we rely on
                                to transfer personal data to recipients outside certain locations here . If you reside in Brazil, you can
                                learn more about the safeguards we rely on to transfer personal data to recipients outside certain
                                locations here .
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.1 Sharing with Your Consent or at Your Direction</h4>
                            <p>
                                When you provide consent or direct us to share your data, we share your data as described at the time of
                                consent or choice, such as when you authorize a third-party app or website to access your <strong>Crafy
                                    account</strong>, process an insurance claim, apply for flexible payment and financing products, or
                                participate in promotional activities from Crafy partners or third parties.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2 Who We Share With</h4>
                            <p>
                                We may share your information with:
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.1 Other Members</h4>
                            <p>
                                To facilitate reservations, connections, or other interactions between Members (who may be located in, or
                                use service providers located in, locations with different levels of data protection), we may share
                                information in certain situations, as described in Sharing and Disclosure of Information with Other
                                Members .
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.2. Member Service Providers</h4>
                            <p>
                                Hosts may use third-party services to help them manage or provide their services, such as cleaning
                                services or locksmiths. Hosts may use features on the <strong>Crafy Platform</strong> to share Guest
                                information with these third-party service providers. Other Members may use services other than Crafy to
                                process your data, including email or reservation management software. These services are outside of
                                Crafy&apos;s control and will be subject to applicable law.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.3 Condominium Administration</h4>
                            <p>
                                We may share personal data of Hosts and Guests with the owner(s) of an Accommodation, a homeowners&apos;
                                association, and/or their agent, such as a property manager or property management company
                                (<strong>Condominium Management</strong>), including reservation information and information related to
                                compliance with applicable laws, in order to facilitate programs involving the Condominium Management. The
                                Guest&apos;s reservation and personal data, including contact information, may be shared with the Condominium
                                Management of the building, complex, or community where the Host lives and/or where the listing is
                                located, to facilitate hosting services, compliance with applicable laws, security, billing, and other
                                services.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.4 Crafy for Work Partners</h4>
                            <p>
                                If a reservation designated as business or work-related is made by a Guest affiliated with a Business
                                enrolled in <strong>Crafy for Work</strong>, we may share information related to the reservation with the
                                Business to the extent necessary for the proper performance of Crafy&apos;s contract with the Business and the
                                provision of the services. At the request of the Business or Guest, we may also share this information
                                with third parties contracted by the Business to provide support services.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.5. Service Providers</h4>
                            <p>
                                We share personal data with affiliated and unaffiliated service providers (including your service
                                providers) to facilitate the administration of our business and for your compliance, including those who
                                help us: (i) verify your identity or authenticate your identification documents; (ii) check information
                                against public databases; (iii) conduct background checks, fraud prevention, security investigations, and
                                risk assessments; (iv) perform product development, maintenance, and debugging; (v) enable the provision
                                of the <strong>Crafy Services</strong> through third-party platforms and software tools; (vi) provide
                                customer support, advertising, or payments services; (vii) offer additional services that you select;
                                (viii) process, handle, or evaluate insurance or similar claims; (ix) review, examine, and analyze
                                communications on the <strong>Crafy Platform</strong> for certain purposes, such as evidence of child
                                exploitation (see the Analysis and Sharing of Your Communications section for additional information);
                                or (x) offer flexible payment plans and financing provided by a third-party credit provider. These
                                providers are contractually obligated to protect your personal data, have access to it to perform these
                                tasks, and may also disclose your data when required by law.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.6 Corporate Affiliates</h4>
                            <p>
                                To help us provide, integrate, promote, and improve the <strong>Crafy Platform</strong>, Payment Services,
                                and our affiliates&apos; services, we may share personal data within our corporate group of companies,
                                including:
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.6(i) Crafy, Inc.</h4>
                            <p>
                                Even if your country of residence is not the United States, your information will be shared with Crafy,
                                Inc., which provides the technical infrastructure for the <strong>Crafy Platform</strong>.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.6(ii) Crafy Payments</h4>
                            <p>
                                To facilitate payments on the <strong>Crafy Platform</strong>, some information will be shared with the
                                relevant <strong>Payment Controller</strong>, as described in the Supplement for Users Outside the
                                United States, the Privacy Supplement for Users from China, and the Supplement for Users from
                                Brazil.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.6(iii) Crafy Insurance Agent Affiliates</h4>
                            <p>
                                To facilitate the offering of Insurance on or through the <strong>Crafy Platform</strong>, some data, as
                                described in the <strong>Insurance Supplement</strong> , will be shared with the relevant
                                <strong>Insurance Controller</strong>.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.6(iv) Crafy Ireland UC</h4>
                            <p>
                                Even if your country of residence is outside the EEA, your data may be shared with Crafy Ireland UC, which
                                provides customer support and other business operations services to other Crafy entities, and may be
                                shared in accordance with the Comply with the law, respond to legal requests, prevent harm, and protect
                                our rights section.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.6(v) Crafy GSL</h4>
                            <p>
                                Even if your country of residence is not Japan, your data may be shared with Crafy GSL, which provides
                                customer support and other business operation services to other Crafy entities.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.2.6(vi) Crafy Singapore e Crafy China</h4>
                            <p>
                                If you live or reside in China, your data will be collected, stored, and processed by Crafy Singapore, and
                                a copy of your account data will be transferred to, stored, and processed by Crafy China. Like other
                                accommodation and vacation rental companies operating in China, Crafy Singapore and Crafy China may share
                                your information with Chinese government agencies without prior notice. Your information may be shared
                                with service providers (including those in China) to help us operate our business. Our service providers
                                may also share your information when required by law.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.3 Why We May Share Your Information</h4>
                            <p>
                                We may share your information to:
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.3.1 Building Your Public Profile</h4>
                            <p>
                                Information you share publicly on the <strong>Crafy Platform</strong> may be indexed by third-party search
                                engines. In some cases, you can opt out of this sharing in your account settings. We may make certain
                                information publicly visible, such as: your profile and account information, and information derived from
                                it, as described here , listing pages, which include information such as an approximate or precise
                                description of the Accommodation or Experience location, calendar availability, profile picture,
                                aggregated demand information, and any additional information you choose to share, comments, reviews and
                                other public feedback, and content in a community or discussion forum, blog post or social media, and
                                content you make publicly available, including Listing details on third-party websites, platforms and
                                applications.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.3.2 Comply with the Law, Respond to Legal Requests, Prevent Harm, and
                                Protect Our Rights</h4>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.3.2(i) Disclosure</h4>
                            <p>
                                As we deem appropriate, we may disclose your information to courts, law enforcement, government or public
                                authorities, tax authorities, authorized third parties, or other Members if and for as long as we are
                                required or authorized to do so by law or where disclosure is necessary to: (i) comply with our legal
                                obligations; (ii) comply with a valid legal request, such as a subpoena or court order, or respond to
                                complaints made against Crafy; (iii) respond to a valid legal request related to a criminal investigation,
                                to address reported or suspected illegal activity, or to respond to or address any other activity that may
                                expose Crafy, you, or any other of our users to legal or regulatory liability (more information about
                                Crafy’s Law Enforcement Guidelines here ); (iv) enforce and administer our agreements with Members,
                                including our <strong>Terms</strong> , <strong>Additional Legal Terms</strong> , and
                                <strong>Policies</strong> ; (v) investigate potential violations of applicable law, including emergency
                                situations that may involve a risk of death or serious bodily injury; (vi) respond to requests for or in
                                connection with current or future legal actions or legal proceedings concerning Crafy and/or third
                                parties, in accordance with applicable law; or (vi) protect the rights, property, or personal safety of
                                Crafy, its employees, its Members, or members of the public.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.3.2(i)(a) For Tax Authorities</h4>
                            <p>
                                Where legally required or permitted under applicable law, we may disclose Host and/or Guest data to the
                                relevant tax authorities or other government entities, depending on your location, for purposes of
                                determining proper compliance with applicable tax obligations. To learn more, visit our Help Center .
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.3.2(i)(b) To Government Authorities for Registrations, Notifications,
                                Permits or Applications or License Numbers</h4>
                            <p>
                                In locations where Crafy facilitates or requires a host&apos;s registration, notification, permission, or
                                license with a government authority, we may share participating Hosts&apos; information, including registration
                                numbers and Host contact information, with the relevant authority during the application process, when the
                                Listing is published, and periodically thereafter.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.3.2(ii) Notification</h4>
                            <p>
                                When appropriate and/or legally required, we may notify Members of legal requests unless: (i) notification
                                is prohibited by the legal process itself, by a court order we receive, or by applicable law; or (ii) we
                                believe that notification would be futile, ineffective, create a risk of injury or physical harm to an
                                individual or group, create or increase a risk of fraud or harm to Crafy or our Members, or expose Crafy
                                to a claim of obstruction of justice.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">4.3.3 Making Business Transfers</h4>
                            <p>
                                If Crafy undergoes or is involved in any merger, acquisition, restructuring, sale of assets, bankruptcy,
                                or insolvency proceedings, we may sell, transfer, or share some or all of our assets, including your
                                information related to or contemplated by such transactions, as part of due diligence. In this case, you
                                will receive notice before your personal data is transferred and becomes subject to a different privacy
                                policy.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">5. INTEGRATIONS AND THIRD PARTY PARTNERS</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold">5.1 Linking to Third Party Services</h4>
                            <p>
                                You can link your <strong>Crafy account</strong> to certain third-party services, such as social networks.
                                When sharing data through this link: some of the information you provide to us through account linking may
                                be published on your public profile; the information you provide to us when linking your accounts may be
                                stored, processed and transmitted for the purposes of fraud prevention, security investigations and risk
                                assessment; we share information about your booking with third-party travel partners and rewards programs;
                                and the publication and display of information you provide to the <strong>Crafy Platform</strong> through
                                such linking will be subject to your settings and authorizations on the <strong>Crafy Platform</strong>
                                and the third party service.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">5.2 Third Party Terms of Service</h4>
                            <p>
                                Parts of Crafy may link to third-party services. Crafy does not own or control these third parties. When
                                you interact with these third parties and choose to use their service, you are providing them with your
                                information. Your use of these services is subject to the privacy policies of these providers, such as the
                                <strong>Google Maps/Earth Additional Terms of Use</strong> , the <strong>Google Privacy Policy</strong>
                                (click here to learn more about how Google uses your information), the <strong>PayPal Privacy
                                    Statement</strong> , the <strong>Klarna Privacy Policy</strong> , and the <strong>Stripe Privacy
                                        Policy</strong> .
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">6. CHANGE OF YOUR COUNTRY OR STATE OF RESIDENCE</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold">6.1 Applicable Controller</h4>
                            <p>
                                If you change your country (or state, for users in the United States) of residence, the
                                <strong>Controller</strong>, <strong>Payments Controller</strong>, and/or <strong>Insurance
                                    Controller</strong> will be determined based on your new country or state of residence as of the date
                                your country or state of residence changes.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">6.2 Transfer Between Controllers</h4>
                            <p>
                                The <strong>Controller</strong>, <strong>Payments Controller</strong>, and/or <strong>Insurance
                                    Controller</strong> that originally collected your personal data will need to transfer that personal
                                data to the new applicable <strong>Controller</strong>, <strong>Payments Controller</strong>, and/or
                                <strong>Insurance Controller</strong>. The new <strong>Controller</strong>, <strong>Payments
                                    Controller</strong>, and/or <strong>Insurance Controller</strong> will continue to process your personal
                                data as described in this Privacy Policy, where applicable.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">6.3 Applicable Rights</h4>
                            <p>
                                Under applicable law, your country or state of residence may affect the rights available to you.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">7. YOUR RIGHTS</h3>
                    <div className="space-y-4">
                        <div>
                            <p>
                                You may exercise any of the rights described in this section in accordance with applicable law. Click here
                                to learn more about data subject rights requests and how to submit a request.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">7.1 EU Residents</h4>
                            <p>
                                Learn more about your rights under the <strong>General Data Protection Regulation (GDPR)</strong> here
                                .
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">7.2 Residents of Brazil</h4>
                            <p>
                                Learn more about your rights under <strong>Brazil&apos;s General Personal Data Protection Law (LGPD)</strong> here .
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">7.3 US Residents</h4>
                            <p>
                                Learn more about the rights you may have under applicable state law here .
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">7.4 Residents of China</h4>
                            <p>
                                Learn more about your rights here .
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">7.5 Managing Your Information</h4>
                            <p>
                                You can access and update some of your personal data through your Account settings. You are responsible
                                for keeping your personal data up to date.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">8. RETENTION</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold">8.1 Retention Periods</h4>
                            <p>
                                We retain personal data for as long as necessary or permitted based on the purposes for which it was
                                obtained and in accordance with applicable law. The criteria used to determine our retention periods
                                include: the period during which we have an ongoing relationship with you and provide <strong>Crafy
                                    Platform</strong> services to you, whether you are a Guest or a Host (for example, for as long as you
                                have an account with us or continue to use Crafy) and the period thereafter during which we may have a
                                legitimate need to retain your personal data, such as to manage and protect our business, troubleshoot
                                problems, or defend against claims that may arise; the existence of a legal, tax, reporting or audit
                                obligation to which we are subject, such as anti-money laundering requirements that require us to keep
                                records of your transactions for a certain period before we can delete them; and whether retention is
                                advisable in light of our legal position or to protect the safety of individuals, which includes retention
                                that is necessary or prudent under applicable statutes of limitations, litigation, or regulatory
                                investigations.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">8.2 Shared Data</h4>
                            <p>
                                Data you&apos;ve shared with other Members, such as <strong>Reviews</strong> and forum posts, may remain
                                publicly visible on <strong>Crafy</strong> even after your <strong>Crafy Account</strong> is canceled.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">8.3 Residual Copies</h4>
                            <p>
                                We take measures to prevent accidental or malicious data loss and destruction, so residual copies of your
                                personal data may remain in our backup systems for a limited period.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">9. SECURITY</h3>
                    <div className="space-y-4">
                        <div>
                            <p>
                                While no organization can guarantee perfect security, we implement and continually update administrative,
                                technical, and physical security measures to help protect your data from unlawful or unauthorized access,
                                loss, destruction, or alteration.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">10. CHANGES TO THIS PRIVACY POLICY</h3>
                    <div className="space-y-4">
                        <div>
                            <p>
                                We reserve the right to modify this <strong>Privacy Policy</strong> at any time in accordance with
                                applicable law. If we do so, we will post the revised <strong>Privacy Policy</strong> and update the <strong>Last
                                Updated</strong> date at the top. In the event of significant changes, we will also provide you with notice of the
                                changes by email at least thirty (30) days before they are scheduled to take effect. If you do not agree
                                to the revised <strong>Privacy Policy</strong>, you may cancel your Account. If you do not cancel your
                                <strong>Account</strong> before the effective date of the revised <strong>Privacy Policy</strong>, your
                                continued access to and/or use of the <strong>Crafy Platform</strong> will be subject to the revised
                                <strong>Privacy Policy</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">11. Crafy CONTACT INFORMATION AND RESPONSIBLE ENTITIES</h3>
                    <div className="space-y-4">
                        <div>
                            <p>
                                For questions or complaints regarding this <strong>Privacy Policy</strong> or Crafy’s processing of
                                personal data: (i) if you reside in the United States, please contact Crafy, Inc. by writing to Legal
                                Privacy, 888 Brannan Street, San Francisco, CA 94103 USA, email dpo@Crafy.com, or call toll-free at (844)
                                234-2500; (ii) for payment-related questions, please use the contact information provided in the
                                <strong>Payments Terms</strong> ; (iii) if you reside outside the United States, but not in China or
                                Brazil, please contact us by emailing dpo@Crafy.com; (iv) if you reside in Brazil, please use the contact
                                information for your controller provided on the <strong>Brazil Supplement page</strong> ; and (v) if you
                                reside in China, please use the contact information for your controller provided on the <strong>Privacy
                                    Supplement for China Users page</strong> .
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="my-8" />

                <section className="space-y-6">
                    <h3 className="text-xl font-semibold">12. DEFINITIONS</h3>
                    <div className="space-y-4">
                        <div>
                            <p>
                                Terms not defined in this <strong>Privacy Policy</strong> have the same definition as in our
                                <strong>Terms</strong>.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </div>

    );
}