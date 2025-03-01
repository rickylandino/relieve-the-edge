import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Deliver high-quality, evidence-based medical care with a focus on prevention, early intervention, and effective treatment.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Foster a supportive and respectful environment where patients feel heard, valued, and empowered to actively participate in healthcare decisions.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Continuously advance medical knowledge and skills through ongoing education and professional development to ensure the best possible outcomes for patients.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Advocate for equitable access to healthcare for all members of the community, regardless of their background or circumstances.',
    href: '#',
    icon: LockClosedIcon,
  }
]

export default function MissionStatement() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-2 text-pretty text-4xl font-semibold font-mont tracking-tight text-[#186EA5] sm:text-5xl lg:text-balance">
            Mission Statement
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          As a dedicated medical professional, the commitment is to provide compassionate, patient-centered care that prioritizes the health and well-being of each individual.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
