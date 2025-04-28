import { CheckIcon } from '@heroicons/react/20/solid'

export default function Services() {
    return (
        <div className="bg-white py-16">
        <p className="mt-2 text-pretty text-4xl font-semibold font-mont tracking-tight text-[#186EA5] sm:text-5xl lg:text-balance text-center mb-10">
            Services
        </p>
            <div className="mx-auto grid max-w-7xl">
                <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                        <div className="relative pl-9">
                            <dt className="font-semibold text-gray-900">
                                <CheckIcon aria-hidden="true" className="absolute left-0 top-1 size-5 text-indigo-500" />
                                Anxiety (including generalized anxiety disorder, social anxiety, and panic disorder)
                            </dt>
                        </div>
                        <div className="relative pl-9">
                            <dt className="font-semibold text-gray-900">
                                <CheckIcon aria-hidden="true" className="absolute left-0 top-1 size-5 text-indigo-500" />
                                Mood disorders
                            </dt>
                        </div>
                        <div className="relative pl-9">
                            <dt className="font-semibold text-gray-900">
                                <CheckIcon aria-hidden="true" className="absolute left-0 top-1 size-5 text-indigo-500" />
                                Depression
                            </dt>
                        </div>
                        <div className="relative pl-9">
                            <dt className="font-semibold text-gray-900">
                                <CheckIcon aria-hidden="true" className="absolute left-0 top-1 size-5 text-indigo-500" />
                                Bipolar disorder
                            </dt>
                        </div>
                        <div className="relative pl-9">
                            <dt className="font-semibold text-gray-900">
                                <CheckIcon aria-hidden="true" className="absolute left-0 top-1 size-5 text-indigo-500" />
                                ADHD
                            </dt>
                        </div>
                        <div className="relative pl-9">
                            <dt className="font-semibold text-gray-900">
                                <CheckIcon aria-hidden="true" className="absolute left-0 top-1 size-5 text-indigo-500" />
                                Sleep difficulties
                            </dt>
                        </div>
                        <div className="relative pl-9">
                            <dt className="font-semibold text-gray-900">
                                <CheckIcon aria-hidden="true" className="absolute left-0 top-1 size-5 text-indigo-500" />
                                OCD
                            </dt>
                        </div>
                        <div className="relative pl-9">
                            <dt className="font-semibold text-gray-900">
                                <CheckIcon aria-hidden="true" className="absolute left-0 top-1 size-5 text-indigo-500" />
                                PTSD
                            </dt>
                        </div>
                    </dl>
            </div>
        </div>
    )
}
