import { Dialog } from "@/components/Base/Headless";
import {
    FormSelect,
    FormInput,
    FormLabel,
    FormTextarea
} from "@/components/Base/Form";
import Lucide from "@/components/Base/Lucide";
import Litepicker from "@/components/Base/Litepicker";
import Dropzone, { DropzoneElement } from "@/components/Base/Dropzone";
import Button from "@/components/Base/Button";
import { useRef, useState, useEffect } from "react";

const EditProjectCategory = ({ isOpens, onCloses }: { isOpens: boolean, onCloses: () => void }) => {
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
                alert("No more files please!");
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
                size="lg"
                className="mt-5"
            >
                <Dialog.Panel>
                    <Dialog.Title>
                        <h2 className="mr-auto text-base font-medium">
                            <span className="inline-block text-white mx-[5px] my-0 px-2.5 py-[3px] rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">PROJECT-OXBOW11042024</span>
                        </h2>
                    </Dialog.Title>

                    <Dialog.Description className="p-3 grid gap-4 gap-y-3">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-1">PROJECT NAME</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        name="project_name"
                                        placeholder="Enter Case ID"
                                    />
                                </div>

                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-1">Sequence</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="number"
                                        name="sequence"
                                    />
                                </div>

                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Status</FormLabel>
                                    <FormSelect
                                        formSelectSize="md"
                                        className="sm:mt-0 sm:mr-0"
                                        aria-label=".form-select-lg example"
                                        disabled
                                    >
                                        <option value="1" className="text-slate-300">Select Court Type</option>
                                        <option value="2">Court Type 1</option>
                                        <option value="3">Court Type 2</option>
                                        <option value="4">Court Type 3</option>
                                    </FormSelect>
                                    <span className="text-red-500">You can't Change the first Assigned User</span>
                                </div>

                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Case Status</FormLabel>
                                    <FormSelect
                                        formSelectSize="md"
                                        className="sm:mt-0 sm:mr-0"
                                        aria-label=".form-select-lg example"
                                        disabled
                                    >
                                        <option value="1" className="text-slate-300">Select Court Type</option>
                                        <option value="2">Court Type 1</option>
                                        <option value="3">Court Type 2</option>
                                        <option value="4">Court Type 3</option>
                                    </FormSelect>
                                </div>

                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Village</FormLabel>
                                    <FormSelect
                                        formSelectSize="md"
                                        className="sm:mt-0 sm:mr-0"
                                        aria-label=".form-select-lg example"
                                    >
                                        <option value="1" className="text-slate-300">Select Village</option>
                                        <option value="2">Court Type 1</option>
                                        <option value="3">Court Type 2</option>
                                        <option value="4">Court Type 3</option>
                                    </FormSelect>
                                </div>

                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Petitioner Name</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Enter Petitioner Name"
                                    />
                                </div>
                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Petitioner Address</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Enter Petitioner Address"
                                    />
                                </div>
                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Petitioner Contact</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Enter Petitioner Contact"
                                    />
                                </div>
                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Responder Name</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Enter Responder Name"
                                    />
                                </div>
                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Responder Address</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Enter Responder Address"
                                    />
                                </div>
                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Responder Contact</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Enter Responder Contact"
                                    />
                                </div>
                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Advocate Name</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Enter Advocate Name"
                                    />
                                </div>
                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Advocate Address</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Enter Advocate Address"
                                    />
                                </div>
                                <div className="row p-1">
                                    <FormLabel htmlFor="regular-form-4">Advocate Contact</FormLabel>
                                    <FormInput
                                        id="regular-form-1"
                                        type="text"
                                        placeholder="Enter Advocate Contact"
                                    />
                                </div>
                            </div>


                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="row p-1">
                                    <ul className="list-group">
                                        <li className="p-2 list-group-item justify-content-between rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">
                                            <span className="badge text-[white]">Case Recived </span>
                                            <span className="float-right"> <b>03-04-23 11:24</b> </span>
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


                            <div className="intro-y box col-span-12 lg:col-span-12">
                                <div className="row p-1">
                                    <ul className="list-group">
                                        <li className="p-2 list-group-item justify-content-between rounded-[5px] bg-gradient-to-r from-[#0063a8] to-[#74bf44]">
                                            <span className="badge text-[white]">Judgement Received </span>
                                            <span className="float-right"> <b>04-04-23 11:29</b> </span>
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

                            <div className="intro-y box col-span-12 lg:col-span-12 px-[9px] py-1.5">
                                <fieldset className="notes px-[9px] py-2.5 rounded-[5px] border-2 border-solid border-[#b58e02]">
                                    <legend className="px-1.5">Update Case Status</legend>

                                    <div className="row p-1">
                                        <FormLabel htmlFor="regular-form-4">Village</FormLabel>
                                        <FormSelect
                                            formSelectSize="md"
                                            className="sm:mt-0 sm:mr-0"
                                            aria-label=".form-select-lg example"
                                        >
                                            <option value="1" className="text-slate-300">Select Village</option>
                                            <option value="2">Court Type 1</option>
                                            <option value="3">Court Type 2</option>
                                            <option value="4">Court Type 3</option>
                                        </FormSelect>
                                    </div>

                                    <div className="row p-1">
                                        <FormLabel htmlFor="regular-form-4">Action Date</FormLabel>
                                        <div className="flex items-center justify-start w-auto ">
                                            <div className="flex items-center justify-center w-10 h-[2.3rem] border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                                                <Lucide icon="Calendar" className="w-4 h-4" />
                                            </div>
                                            <Litepicker
                                                value={date}
                                                onChange={setDate}
                                                options={{
                                                    autoApply: true,
                                                    showWeekNumbers: true,
                                                    dropdowns: {
                                                        minYear: 1990,
                                                        maxYear: null,
                                                        months: true,
                                                        years: true,
                                                    },
                                                }}
                                                className="pl-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <FormLabel htmlFor="regular-form-4">Assign To</FormLabel>
                                        <FormSelect
                                            formSelectSize="md"
                                            className="sm:mt-0 sm:mr-0"
                                            aria-label=".form-select-lg example"
                                        >
                                            <option value="1" className="text-slate-300">Select case Assign To User</option>
                                            <option value="2">Court Type 1</option>
                                            <option value="3">Court Type 2</option>
                                            <option value="4">Court Type 3</option>
                                        </FormSelect>
                                    </div>

                                    <div className="row p-1">
                                        <FormLabel htmlFor="regular-form-4">Court Name</FormLabel>
                                        <FormSelect
                                            formSelectSize="md"
                                            className="sm:mt-0 sm:mr-0"
                                            aria-label=".form-select-lg example"
                                        >
                                            <option value="1" className="text-slate-300">Select Court Name</option>
                                            <option value="2">Court Type 1</option>
                                            <option value="3">Court Type 2</option>
                                            <option value="4">Court Type 3</option>
                                        </FormSelect>
                                    </div>

                                    <div className="row p-1">
                                        <FormLabel
                                            htmlFor="validation-form-6"
                                            className="flex flex-col w-full sm:flex-row">
                                            Details / Khasra Number
                                        </FormLabel>
                                        <FormTextarea
                                            id="validation-form-6"
                                            name="comment"
                                            placeholder="Type your comments"
                                        ></FormTextarea>
                                    </div>

                                    <div className="row p-1">
                                        <FormLabel htmlFor="regular-form-4">Upoad Documents</FormLabel>
                                        <Dropzone
                                            getRef={(el) => {
                                                dropzoneMultipleRef.current = el;
                                            }}
                                            options={{
                                                url: "https://httpbin.org/post",
                                                thumbnailWidth: 150,
                                                maxFilesize: 0.5,
                                                headers: { "My-Awesome-Header": "header value" },
                                            }}
                                            className="dropzone"
                                        >
                                            <div className="text-lg font-medium">
                                                Drop files here or click to upload.
                                            </div>
                                            <div className="text-gray-600">
                                                This is just a demo dropzone. Selected files are
                                                <span className="font-medium">not</span> actually
                                                uploaded.
                                            </div>
                                        </Dropzone>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Button variant="primary" className="w-24 mb-2 mr-1">
                                    Upload
                                </Button>

                                <Button variant="secondary" className="w-24 mb-2 mr-1">
                                    Close
                                </Button>
                            </div>
                        </div>

                    </Dialog.Description>
                </Dialog.Panel>
            </Dialog>
            {/* END: Modal Content */}
        </>
    );
};

export default EditProjectCategory;
