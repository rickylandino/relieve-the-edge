

const resources = [
    {
        name: 'Substance Abuse Recovery Services',
        links: [
            { name: <>SAMHSA's National Helpline - <a className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer" href='tel:8006624357'>800-662-HELP (4357)</a></>, href: 'https://www.samhsa.gov/find-help/national-helpline' },
            { name: 'Mountainside', href: 'https://mountainside.com/contact/?phone=8555636182&utm_source=google&utm_medium=cpc&utm_campaign=MTS%20Branded%20-%20Nov23&gad_source=1&gclid=CjwKCAjw26KxBhBDEiwAu6KXt4iiABEjoapxLKCYcn_L7YfPOYxhsOwzBsYRpMCCeIhNYVio4vNZ5xoCcnIQAvD_BwE' },
            { name: 'Aware Recovery Care', href: 'https://www.awarerecoverycare.com/lp/connecticut-substance-abuse-treatment/?utm_source=Google%20Ad&utm_medium=Search&utm_campaign=Connecticut%20Substance%20Abuse&gclid=CjwKCAjw26KxBhBDEiwAu6KXt2syUIyrML7wqPspCqwm9m8iq-qHjcnGquupMB610CbfgjhhHhp3kxoCl20QAvD_BwE' },
            { name: 'Farrell Treatment Center', href: 'https://farrell-tc.com/' },
            { name: 'Coram Deo, Inc.', href: 'https://coramdeorecovery.org/' },
            { name: 'Connecticut Counseling Centers, Inc.', href: 'https://www.ctcounseling.org/' },
            { name: 'Rushford', href: 'https://rushford.org/' },
            { name: 'Root - Center for Advanced Recovery', href: 'https://www.rootcenter.org/' },
            { name: 'Jessica Niek Recovery Counseling, LLC', href: 'https://www.psychologytoday.com/us/therapists/jessica-niek-bristol-ct/1044425?fbclid=IwZXh0bgNhZW0CMTAAAR0GJ4oOTByTkPvCCah55hPg3_YtGyHPY0RPBGrBmbaKN4ad0Nh8COkLuD8_aem_AfkAHP16-hYr0uzsQhkzrqAIkNIdWRBgm_WhTGHBvIhPG3H7lTRSbIbfIytd1WsUBEADpMboFzsVDVi_9UgGN_sZ' },
            { name: 'PursueCare', href: 'https://www.pursuecare.com/' },
            { name: 'Southern Connecticut Behavioral Health ', href: 'https://soconnbehavioralhealth.net/' }
        ]
    },
    {
        name: 'Intensive Outpatient Programs (Adults)',
        links: [
            { name: null, href: 'https://www.highfocuscenters.com/' },
            { name: null, href: 'https://www.wheelerclinic.org/services/wheeler-services/adult-outpatient-services' },
            { name: null, href: 'https://health.uconn.edu/psychiatry/areas-of-care/adult/intensive-outpatient-programs/' },
            { name: null, href: 'https://silverhillhospital.org/' },
            { name: null, href: 'https://progressive-institute.com/' }
        ]
    }
]

export default function Resources() {
    return (
        <div className="bg-white py-16">
            <div className="mx-auto grid max-w-7xl">
                <p className="mt-2 text-pretty text-4xl font-semibold font-mont tracking-tight text-[#186EA5] sm:text-5xl lg:text-balance text-center mb-10">
                    Resources For You
                </p>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Crisis Services</dt>
                            <dd className="mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                                <ul>
                                    <li className="mt-1">For Youth/children under age 18, call 2-1-1.</li>
                                    <li>Crisis Services for Adults who are 18 years of age or older call 988 Suicide and Crisis Lifeline available 24/7. <a className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer" href='tel:8004673135'>1-800-HOPE-135 (1-800-467-3135)</a></li>
                                    <li>Access Line: Call the Access Line at <a className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer" href='tel:8005634086'>1-800-563-4086</a> for 24/7 access to substance use treatment, including detox and transportation.</li>
                                    <li>
                                        <a className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer" href='https://www.iasp.info/'>International Association for Suicide Prevention</a>
                                    </li>
                                    <li>
                                        Veterans Crisis Line:
                                        <ul>
                                            <li className="ms-5">
                                                <a className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer" href='https://www.veteranscrisisline.net/'>https://www.veteranscrisisline.net</a>
                                            </li>
                                            <li className="ms-5">1-800-273-8255 press 1 for veterans</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer" href='https://portal.ct.gov/crisisservices'>Connect crisis services link</a>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                        {resources.map((resource, idx) => (
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={idx}>
                                <dt className="font-medium text-gray-900">{resource.name}</dt>
                                <dd className="mt-1  text-gray-700 sm:col-span-2 sm:mt-0">
                                    <ul>
                                        {resource.links.map((link) => (
                                            <li key={link.href} className="mt-1">
                                                <a className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer" href={link.href}>{link.name || link.href}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div>
                    <div className="mt-6 mb-6 border-t border-gray-100" />
                    <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900 mb-3">How to Safely Dispose of Unused or Old Medications in Connecticut</h3>
                    <p className="mb-3">Properly disposing of unused or unwanted medications is crucial for protecting both the environment and your community. Below are safe and easy options for medication disposal:</p>
                    <ol>
                        <li className="ms-5 mt-2 mb-3">
                            <strong>Drop-Off Boxes</strong>
                            <p>
                                Many police stations have drug drop-off boxes in their lobbies where you can safely dispose of medications. You can drop off:
                            </p>
                            <ul className="ms-10">
                                <li>Over-the-counter medications</li>
                                <li>Prescription medications</li>
                                <li>Medication samples</li>
                                <li>Medications for household pets</li>
                                <li>Medicated lotions or ointments</li>
                            </ul>
                        </li>
                        <li className="ms-5 mt-2 mb-3">
                            <strong>Medicine Disposal Envelopes</strong>
                            <p>
                                You can purchase medicine disposal envelopes from chain pharmacies such as CVS, Walgreens, or Rite Aid. These envelopes allow you to safely send medications for proper disposal.
                            </p>
                        </li>
                        <li className="ms-5 mt-2 mb-3">
                            <strong>One-Day Medicine Collections</strong>
                            <p>
                                Occasionally, organizations or government agencies sponsor one-day medicine collections. These events are typically:
                            </p>
                            <ul className="ms-10">
                                <li>Not regularly scheduled</li>
                                <li>Open only to residents of the sponsoring town</li>
                                <li>Keep an eye out for local announcements to participate.</li>
                            </ul>
                        </li>
                        <li className="ms-5 mt-2 mb-3">
                            <strong>Flushing Medications</strong>
                            <p>
                                You can flush medications down the toilet only if:
                            </p>
                            <ul className="ms-10">
                                <li>The medication label instructs you to do so</li>
                                <li>The medication is listed on the FDA&rsquo;s &ldquo;flush list.&rdquo;</li>
                            </ul>
                            <p>To check if a medication is on the FDA&apos;s flush list, visit the FDA website.</p>
                        </li>
                        <li className="ms-5 mt-2 mb-3">
                            <strong>Disposing of Medications in the Trash</strong>
                            <p>
                                You can dispose of medications in the trash if no other options are available. To ensure safety:
                            </p>
                            <ul className="ms-10">
                                <li>Tape the medication container lid shut</li>
                                <li>Place the container inside a non-transparent bag or container to conceal it</li>
                            </ul>
                            <p>Important: Do NOT place medications in your recycling bin. Most garbage in Connecticut is burned at high temperatures, which destroys the medication.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
