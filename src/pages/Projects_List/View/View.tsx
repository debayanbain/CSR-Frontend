import { Dialog } from "@/components/Base/Headless";
import { Disclosure } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import React from "react";

const ViewModal = ({ isOpens, onCloses }: { isOpens: boolean, onCloses: () => void }) => {
    const sendButtonRef = React.useRef(null);
    return (
        <>
            {/* BEGIN: Modal Content */}
            <Dialog
                open={isOpens}
                onClose={onCloses}
                initialFocus={sendButtonRef}
                size="lg"
                className="mt-5"
            >
                <Dialog.Panel>
                    <Dialog.Title>
                        <h2 className="mr-auto text-base font-medium">
                            <span className="inline-block text-white mx-[5px] my-0 px-2.5 py-[3px] rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">PROJECT-Aarogya</span>
                        </h2>

                    </Dialog.Title>
                    <Dialog.Description className="p-3 grid gap-4 gap-y-3">

                        <div className="intro-y box col-span-12 lg:col-span-12">
                            <div className="box py-3 flex-1">
                                <div className=" items-center">
                                    <Disclosure.Group>
                                        <Disclosure>
                                            <Disclosure.Button className="flex justify-between items-center rounded-[10px] dark:bg-slate-700">
                                                General statement of work

                                                <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                                <div className="intro-y box col-span-12 lg:col-span-12 mb-2">
                                                    <ul className="list-disc mx-7 my-2">
                                                        <li>The Bio-Medical Waste Management Rules, 2016.</li>
                                                        <li>The Human Immunodeficiency Virus and Acquired Immune Deficiency Syndrome (prevention
                                                            and control) Rule, 2018
                                                        </li>
                                                        <li>The Orissa Registration of Births and Deaths Rules, 2001.</li>
                                                        <li>The Pre-conception and Pre-natal Diagnostic Techniques (Prohibition of Sex Selection) Rules,
                                                            1996.
                                                        </li>
                                                        <li>Odisha Clinical Establishments (Control and Regulation) Rules, 2018.</li>
                                                        <li>The Atomic Energy (Radiation Protection) Rules, 2004</li>
                                                        <li>The Protection of Women from Domestic Violence Act, 2005</li>
                                                        <li>The Atomic Energy Act, 1962.</li>
                                                        <li>The Environment (Protection) Act, 1986</li>
                                                        <li>Odisha Clinical Establishments (Control and Regulation) Act, 1991.</li>
                                                        <li>The Protection of Civil Rights Act, 1955.</li>
                                                        <li>The Protection of Civil Rights Rules, 1977.</li>
                                                        <li>The Registration of Births and Deaths Act, 1969.</li>
                                                    </ul>
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>

                                        <Disclosure>
                                            <Disclosure.Button className="flex justify-between items-center rounded-[10px] dark:bg-slate-700">
                                                Vendor responsibilities

                                                <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                                <div className="intro-y box col-span-12 lg:col-span-12 mb-2">
                                                    <ul className="list-decimal mx-7 my-2">
                                                        <li>
                                                            The vendor must ensure all the License/Certificates/approvals for Hospital, MHU running like:
                                                            Vedanta Hospital Registration.
                                                            Ultrasound Machine Registration.
                                                            X-Ray Equipment Registration for Dental.
                                                            X-Ray Permission Certificate.
                                                            State Pollution Registration.
                                                            ISO Certificate.
                                                            RSO Certificate.
                                                            Fire NOC.
                                                            MHU Registration.
                                                            MHU Vehicle RC, PUCC, Fitness certificate.
                                                        </li>
                                                        <li>The volume of Bio-medical waste treatment needs to be ensured the sufficient capacity to handle the
                                                            entire volume of Bio-medical waste generated by Vedanta Hospital.
                                                        </li>
                                                        <li>The method of treating waste types is strictly according to the License for Bio-medical waste
                                                            management with that The Bio-Medical Waste Management Rules, 2016.</li>
                                                        <li>Provide documents related to transportation and waste treatment (waste delivery log sheet; Biomedical waste bills - in case of hazardous waste transportation).
                                                        </li>
                                                        <li>It is the contractor's responsibility to provide specialized waste bines, poly bags, weighing machine etc located on site to collect waste and arrange workers to collect of waste into vehicles.</li>
                                                        <li>Follow the safety regulations and other regulations of VALL when carrying out the transport process
                                                            on site.</li>
                                                    </ul>
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>

                                        <Disclosure>
                                            <Disclosure.Button className="flex justify-between items-center rounded-[10px] dark:bg-slate-700">
                                                Vall Responsibilities

                                                <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                                <div className="intro-y box col-span-12 lg:col-span-12 mb-2">
                                                    <ul className="list-decimal mx-7 my-2">
                                                        <li>Biomedical waste pits</li>
                                                        <li>Chemical for disposal like lime and Bleaching powder.</li>
                                                        <li>Inform at least a day advance collection schedule for vendors.</li>
                                                    </ul>
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>

                                        <Disclosure>
                                            <Disclosure.Button className="flex justify-between items-center rounded-[10px] dark:bg-slate-700">
                                                Measurement of performance or acceptance criteria

                                                <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                                <div className="intro-y box col-span-12 lg:col-span-12 mb-2">
                                                    <ul className="list-decimal mx-7 my-2">
                                                        <li>Collecting, transporting and treating wastes according to current law provisions.</li>
                                                        <li>Demonstrate completion of handling evidence from bio-medical waste (for Bio-medical waste).</li>
                                                        <li>The unit using to calculate in the service is “gm” of waste.</li>
                                                    </ul>
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>

                                        <Disclosure>
                                            <Disclosure.Button className="flex justify-between items-center rounded-[10px] dark:bg-slate-700">
                                                Reporting requirements

                                                <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                                <div className="intro-y box col-span-12 lg:col-span-12 mb-2">
                                                    <ul className="list-decimal mx-7 my-2">
                                                        <li>Monthly reporting or as when required.</li>
                                                    </ul>
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>

                                        <Disclosure>
                                            <Disclosure.Button className="flex justify-between items-center rounded-[10px] dark:bg-slate-700">
                                                Health, safety, environment and community

                                                <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                                <div className="intro-y box col-span-12 lg:col-span-12 mb-2">
                                                    <ul className="list-decimal mx-7 my-2">
                                                        <li>Participate VALL's safety/environment training as required before performing work.</li>
                                                        <li>Comply with safety and environmental requirement when performing work.</li>
                                                    </ul>
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>

                                        <Disclosure>
                                            <Disclosure.Button className="flex justify-between items-center rounded-[10px] dark:bg-slate-700">
                                               Other information as relevant

                                                <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                                <div className="intro-y box col-span-12 lg:col-span-12 mb-2">
                                                    <ul className="list-decimal mx-7 my-2">
                                                        <li>Bio-medical waste handler should be immunized with Hepatitis B and Tetanus.</li>
                                                    </ul>
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </Disclosure.Group>
                                </div>
                            </div>
                        </div>

                    </Dialog.Description>
                </Dialog.Panel>
            </Dialog>
            {/* END: Modal Content */}
        </>
    );
};

export default ViewModal;
