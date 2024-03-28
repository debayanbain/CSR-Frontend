import { Dialog } from "@/components/Base/Headless";
import { DropzoneElement } from "@/components/Base/Dropzone";
import fakerData from "@/utils/faker";
import { useRef, useState, useEffect } from "react";

const CheckDetails = ({ isOpens, onCloses }: { isOpens: boolean, onCloses: () => void }) => {
    const [date, setDate] = useState("");
    const dropzoneMultipleRef = useRef<DropzoneElement>();
    const sendButtonRef = useRef(null);

    useEffect(() => {
        const elDropzoneMultipleRef = dropzoneMultipleRef.current;
        if (elDropzoneMultipleRef) {
            elDropzoneMultipleRef.dropzone.on("success", () => {
                alert("Added file.");
            });
            elDropzoneMultipleRef.dropzone.on("error", () => {
                alert("No more files please!")
            });
        }
    }, []);

    return (
        <>
            {/* BEGIN: Modal Content */}
            <Dialog
                open={isOpens}
                onClose={onCloses}
                initialFocus={sendButtonRef}
                size="xl"
                className="mt-5"
            >
                <Dialog.Panel>
                    <Dialog.Description className="grid gap-6 gap-y-3">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Survey Title</div>
                                        <div className="text-xs text-blue-500 font-semibold ml-auto">
                                            13 test
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Survey Status</div>
                                        <div className="text-xs text-slate-500 ml-auto">
                                            <span className="bg-red-600 text-white px-2 py-1 rounded-[13px]">Notification Not Seen Super Admin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Current Survey Status</div>
                                        <div className="text-xs text-slate-500 ml-auto">
                                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-[13px]">RUNNING</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">
                                            Last Updated At
                                        </div>
                                        <div className="text-xs text-slate-500 ml-auto">
                                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-[13px]">13/03/24 14:25 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Survey Title</div>
                                        <div className="text-xs text-black font-semibold ml-auto">13 test</div>
                                    </div>
                                </div>
                            </div>

                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Surveyor Name</div>
                                        <div className="text-xs text-slate-500 ml-auto">
                                            <div className="text-xs text-black font-semibold ml-auto">
                                                <span className="bg-green-500 text-white px-2 py-1 rounded-[13px]">Super Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Created At</div>
                                        <div className="text-xs text-slate-500 font-semibold ml-auto">
                                            <span className="bg-green-500 text-white px-2 py-1 rounded-[13px]">13/03/24 14:25 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Survey Village</div>
                                        <div className="text-xs text-slate-500 font-medium ml-auto">
                                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-[13px]">Tiara</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Surveyor Area</div>
                                        <div className="text-xs text-slate-500 ml-auto">
                                            <span className="bg-red-500 text-white px-2 py-1 rounded-[13px]">No Area Specified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Surveyor Khasra</div>
                                        <div className="text-xs text-slate-500 ml-auto">
                                            <span className="bg-green-500 text-white px-2 py-1 rounded-[13px]">1722</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="intro-y box col-span-12 lg:col-span-6">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Surveyor Visits</div>
                                        <div className="text-xs text-slate-500 ml-auto">
                                            <span className="bg-green-500 text-white px-2 py-1 rounded-[13px]">1 Visit(s)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="flex items-center">
                                        <div className="font-medium">Survey Details</div>
                                        <div className="text-xs text-black font-semibold ml-auto">OK</div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12">
                                <div className="box px-5 py-3 flex-1">
                                    <div className="grid grid-cols-12 gap-5 mt-5">
                                        <a href="javascript:;" data-tw-toggle="modal" data-tw-target="#add-item-modal" className="intro-y block col-span-12 sm:col-span-4 2xl:col-span-3 relative overflow-hidden hover:scale-105">
                                            <div className="flex-none relative before:w-full before:pt-[100%]">
                                                <img className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110" src={fakerData[0].images[0]} alt=""  />
                                            </div>
                                            <div className="block font-medium text-center truncate mt-3">23-06-2023 06:42 AM</div>
                                        </a>
                                        <a href="javascript:;" data-tw-toggle="modal" data-tw-target="#add-item-modal" className="intro-y block col-span-12 sm:col-span-4 2xl:col-span-3 relative overflow-hidden hover:scale-105">
                                            <div className="flex-none relative before:w-full before:pt-[100%]">
                                                <img  className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110" src={fakerData[0].images[1]} alt="" />
                                            </div>
                                            <div className="block font-medium text-center truncate mt-3">23-06-2023 06:42 AM</div>
                                        </a>
                                        <a href="javascript:;" data-tw-toggle="modal" data-tw-target="#add-item-modal" className="intro-y block col-span-12 sm:col-span-4 2xl:col-span-3 relative overflow-hidden hover:scale-105 ">
                                            <div className="flex-none relative before:w-full before:pt-[100%]">
                                                <img className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110" src={fakerData[0].images[2]} alt="" />
                                            </div>
                                            <div className="block font-medium text-center truncate mt-3">23-06-2023 06:42 AM</div>
                                        </a>
                                        <a href="javascript:;" data-tw-toggle="modal" data-tw-target="#add-item-modal" className="intro-y block col-span-12 sm:col-span-4 2xl:col-span-3 relative overflow-hidden hover:scale-105">
                                            <div className="flex-none relative before:w-full before:pt-[100%]">
                                                <img className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110" src={fakerData[0].images[4]} alt="" />
                                            </div>
                                            <div className="block font-medium text-center truncate mt-3">23-06-2023 06:42 AM</div>
                                        </a>
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

export default CheckDetails;
