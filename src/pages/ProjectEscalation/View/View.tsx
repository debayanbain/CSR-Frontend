import { Dialog } from "@/components/Base/Headless";
import { useRef } from "react";

const ViewEscalationModal = ({ isOpens, onCloses }: { isOpens: boolean, onCloses: () => void }) => {
    const sendButtonRef = useRef(null);
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
                            <span className="inline-block text-white mx-[5px] my-0 px-2.5 py-[3px] rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">PROJECT-ID-OXBOW08042024 </span>
                        </h2>

                    </Dialog.Title>
                    <Dialog.Description className="p-3 grid gap-4 gap-y-3">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="row">
                                    <ul className="list-group">
                                        <li className="p-2 list-group-item justify-content-between rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">
                                            <span className="text-black">
                                                <span className="font-weight-semibold">Current Status</span> : </span>
                                            <span className="badge text-[white]">IN REVIEW</span>
                                            <span className="float-right"> <b>Updated At 03/04/23 05:59</b> </span>
                                        </li>
                                    </ul>

                                    <div className="col-xs-12 col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Escalation Title : </span>
                                                <span className="font-weight-semibold">Case Title New Test</span>
                                            </li>

                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Created At : </span>
                                                <span className="font-weight-semibold">03-04-2023</span>
                                            </li>

                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Created By : </span>
                                                <span className="font-weight-semibold">User Name</span>
                                            </li>

                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Approved By : </span>
                                                <span className="font-weight-semibold">Super Admin</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-2">
                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="row">
                                    <ul className="list-group">
                                        <li className="p-2 list-group-item justify-content-between rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">
                                            <span className="badge text-[white]"> Escalation Details </span>
                                        </li>
                                    </ul>

                                    <div className="col-xs-12 col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Petitioner Name : </span>
                                                <span className="font-weight-semibold">Test Petitioner Name</span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Petitioner Address : </span>
                                                <span className="font-weight-semibold">Baragadia, Duburi</span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Petitioner Contact : </span>
                                                <span className="font-weight-semibold">34534553</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-12 gap-2">
                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="row">
                                    <ul className="list-group">
                                        <li className="p-[6px] list-group-item justify-content-between rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">
                                            <span className="badge text-[white]"> Responder Details </span>
                                        </li>
                                    </ul>

                                    <div className="col-xs-12 col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Responder Name : </span>
                                                <span className="font-weight-semibold">1test Petitioner Name</span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Responder Address : </span>
                                                <span className="font-weight-semibold">Baragadia, Duburi</span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Responder Contact : </span>
                                                <span className="font-weight-semibold">34534553</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-12 gap-2">
                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="row">
                                    <ul className="list-group">
                                        <li className="p-[6px] list-group-item justify-content-between rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">
                                            <span className="badge text-[black]"> Case received on 03-04-23 11:24 </span>
                                        </li>
                                    </ul>

                                    <div className="col-xs-12 col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Case updated on 03-04-23 11:24 by Survey vapt</span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Status Details </span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">401</span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Case Documents</span>
                                            </li>
                                            <li className="flex justify-between list-group-item p-2">
                                                <span className="text-primary">4.png</span>
                                                <span className="font-weight-semibold">
                                                    <span className="p-1 text-white rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">
                                                        <button>Download</button>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-12 gap-2">
                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="row">
                                    <ul className="list-group">
                                        <li className="p-[6px] list-group-item justify-content-between rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">
                                            <span className="badge text-[black]"> Judgement Received on 04-04-23 11:29 </span>
                                        </li>
                                    </ul>

                                    <div className="col-xs-12 col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Case updated on 03-04-23 11:24 by Survey vapt</span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Status Details </span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">401</span>
                                            </li>
                                            <li className="list-group-item justify-content-between p-2">
                                                <span className="text-primary">Case Documents</span>
                                            </li>
                                            <li className="flex justify-between list-group-item p-2">
                                                <span className="text-primary">4.png</span>
                                                <span className="font-weight-semibold">
                                                    <span className="p-1 text-white rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">
                                                        <button>Download</button>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
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

export default ViewEscalationModal;
