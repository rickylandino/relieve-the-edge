const features = [
    { name: 'Anxiety including generalized anxiety disorder', description: 'desc' },
    { name: 'Social Anxiety', description: 'desc' },
    { name: 'Panic Disorder', description: 'desc' },
    { name: 'Mood Disorders', description: 'desc' },
    { name: 'Depression', description: 'desc' },
    { name: 'ADHD', description: 'desc' },
    { name: 'Sleep Difficulties', description: 'desc' },
    { name: 'OCD', description: 'desc' },
    { name: 'PTSD', description: 'desc' },
  ]
  
  export default function Services() {
    return (
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <img
            alt=""
            src="/lake_sunset.jpeg"
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
  
        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <p className="mt-2 text-pretty text-4xl font-semibold font-mont tracking-tight text-[#186EA5] sm:text-5xl lg:text-balance">
            Our Services
          </p>
          </div>
  
          <div className="overflow-hidden rounded-md bg-white shadow mt-20">
            <ul role="list" className="divide-y divide-gray-200">
                {features.map((item, idx) => (
                <li key={idx} className="px-6 py-4">
                    <span>{item.name}</span>
                </li>
                ))}
            </ul>
            </div>
        </div>
      </div>
    )
  }
  