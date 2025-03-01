const people = [
    {
      name: '[Your Name]',
      role: '[Your Title]',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.'
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
          <div className="max-w-2xl xl:col-span-2">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#186EA5] sm:text-5xl font-mont">
              About our team
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
            At Relieve The Edge, our team of dedicated medical professionals is committed to providing exceptional, patient-centered care. Our physicians bring a wealth of knowledge, experience, and compassion to every patient interaction, ensuring comprehensive and personalized medical treatment.
            </p>
          </div>
          <ul role="list" className="divide-y divide-gray-200 xl:col-span-3">
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row">
                <img alt="" src={person.imageUrl} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" />
                <div className="max-w-xl flex-auto">
                  <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base/7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base/7 text-gray-600">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  