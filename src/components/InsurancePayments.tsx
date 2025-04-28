const stats = [
    { name: 'Total Subscribers', stat: 'Credit/Debit Cards' },
    { name: 'Avg. Open Rate', stat: 'Cash' },
    { name: 'Avg. Click Rate', stat: 'HSA' },
]

export default function InsurancePayments() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative my-20">
                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-3 text-base font-semibold text-gray-900">Insurance Accepted</span>
                    </div>
                </div>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        alt="Aetna"
                        src="insurance/aetna.svg"
                        width={158}
                        height={48}
                        className="col-span-2 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Anthem"
                        src="insurance/anthem.png"
                        width={158}
                        height={48}
                        className="col-span-2 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Carelon"
                        src="insurance/carelon.png"
                        height={150}
                        className="col-span-2 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Cigna"
                        src="insurance/cigna.svg"
                        width={158}
                        className="col-span-2 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="ConnectiCare"
                        src="insurance/connecticare.svg"
                        width={158}
                        className="col-span-2 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Humana"
                        src="insurance/humana.svg"
                        width={158}
                        className="col-span-2 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Optum"
                        src="insurance/optum.svg"
                        width={158}
                        className="col-span-2 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Medicaid"
                        src="insurance/medicaid.jpg"
                        width={158}
                        className="col-span-2 w-full object-contain lg:col-span-1"
                    />
                </div>

                <div className="relative my-20">
                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-3 text-base font-semibold text-gray-900">Fees For Services</span>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center grid-cols-1">
                                <div className="bg-gray-400/5 p-8">
                                    <p><i>If the Patient is uninsured, we offer cash price:</i></p>
                                    <p>Initial Appointment: <strong>$250</strong></p>
                                    <p>Follow-up care is based on complexity/time: <strong>$100-150</strong></p>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
