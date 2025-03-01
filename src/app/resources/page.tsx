

const resources = [
    {
        name: 'Crisis Services',
        links: [
            { name: '[Name of Service]', href: 'https://www.google.com' },
            { name: '[Name of Service]', href: 'https://www.google.com' },
        ]
    },
    {
        name: 'Individual counseling/Therapy',
        links: [
            { name: '[Name of Service]', href: 'https://www.google.com' },
            { name: '[Name of Service]', href: 'https://www.google.com' },
        ]
    },
    {
        name: 'Medicare Participating Counseling/Therapy',
        links: [
            { name: '[Name of Service]', href: 'https://www.google.com' },
            { name: '[Name of Service]', href: 'https://www.google.com' },
        ]
    },
    {
        name: 'Substance Abuse Recovery Services ',
        links: [
            { name: '[Name of Service]', href: 'https://www.google.com' },
            { name: '[Name of Service]', href: 'https://www.google.com' },
        ]
    },
    {
        name: 'Perinatal Care',
        links: [
            { name: '[Name of Service]', href: 'https://www.google.com' },
            { name: '[Name of Service]', href: 'https://www.google.com' },
        ]
    },
    {
        name: 'LGBTQ+',
        links: [
            { name: '[Name of Service]', href: 'https://www.google.com' },
            { name: '[Name of Service]', href: 'https://www.google.com' },
        ]
    }
]

export default function Resources() {
    return (
        <div className="bg-white py-24 md:py-32">
            <div className="mx-auto grid max-w-7xl">
            <p className="mt-2 text-pretty text-4xl font-semibold font-mont tracking-tight text-[#186EA5] sm:text-5xl lg:text-balance text-center mb-10">
            Resources For You
          </p>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        {resources.map((resource, idx) => (
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={idx}>
                                <dt className="text-sm/6 font-medium text-gray-900">{resource.name}</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <ul>
                                        {resource.links.map((link) => (
                                            <li key={link.name} className="mt-1">
                                                <a className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer" href={link.href}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
