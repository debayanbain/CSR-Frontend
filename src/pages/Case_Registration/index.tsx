import _ from "lodash";
import { useState } from "react";
import Lucide from "@/components/Base/Lucide";
import Litepicker from "@/components/Base/Litepicker";
import {
    FormSelect,
    FormInput,
    FormLabel,
    FormTextarea
} from "@/components/Base/Form";
import Button from "@/components/Base/Button";

function LitigationCaseRegistration() {
    const [date, setDate] = useState("");

    return (
        <>
            <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
                <h2 className="text-lg font-medium mr-auto"> Add New Case Details </h2>
            </div>
            <div className="row">
                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                    <div className="card">
                        <form id="plot_add_form" action="#">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <fieldset className="details px-[15px] py-2.5 border-2 border-solid border-[#58ebbb] bg-transparent">
                                            <legend className="w-auto text-[15px] font-bold text-[#58ebbb] px-[5px] py-0 rounded-[10px] bg-white">Case Basic Information</legend>

                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Court Complex</FormLabel>
                                                <FormInput
                                                    id="regular-form-1"
                                                    type="text"
                                                    placeholder="Enter Court Complex"
                                                />
                                            </div>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Court Type</FormLabel>
                                                <FormSelect
                                                    formSelectSize="md"
                                                    className="sm:mt-0 sm:mr-0"
                                                    aria-label=".form-select-lg example"
                                                >
                                                    <option value="1" className="text-slate-300">Select Court Type</option>
                                                    <option value="2">Court Type 1</option>
                                                    <option value="3">Court Type 2</option>
                                                    <option value="4">Court Type 3</option>
                                                </FormSelect>
                                            </div>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Case Type</FormLabel>
                                                <FormSelect
                                                    formSelectSize="md"
                                                    className="sm:mt-0 sm:mr-0"
                                                    aria-label=".form-select-lg example"
                                                >
                                                    <option value="1" className="text-slate-300">Select Case Type</option>
                                                    <option value="2">Case Type 1</option>
                                                    <option value="3">Case Type 2</option>
                                                    <option value="4">Case Type 3</option>
                                                </FormSelect>
                                            </div>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Filling Number</FormLabel>
                                                <FormInput
                                                    id="regular-form-1"
                                                    type="text"
                                                    placeholder="Enter Filling Number"
                                                />
                                            </div>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Filling Date</FormLabel>
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
                                                <FormLabel htmlFor="regular-form-4">Registration Number
                                                </FormLabel>
                                                <FormInput
                                                    id="regular-form-1"
                                                    type="text"
                                                    placeholder="Enter Registration Number
"
                                                />
                                            </div>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Registration Date</FormLabel>
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
                                                <FormLabel htmlFor="regular-form-4">CNR Number</FormLabel>
                                                <FormInput
                                                    id="regular-form-1"
                                                    type="text"
                                                    placeholder="Enter CNR Number"
                                                />
                                            </div>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">First Hearing Date</FormLabel>
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
                                                <FormLabel htmlFor="regular-form-4">Next Hearing Date</FormLabel>
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
                                                <FormLabel htmlFor="regular-form-4">Case Stage</FormLabel>
                                                <FormSelect
                                                    formSelectSize="md"
                                                    className="sm:mt-0 sm:mr-0"
                                                    aria-label=".form-select-lg example"
                                                >
                                                    <option value="1" className="text-slate-300">Select Case Stage</option>
                                                    <option value="2">Case Type 1</option>
                                                    <option value="3">Case Type 2</option>
                                                    <option value="4">Case Type 3</option>
                                                </FormSelect>
                                            </div>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Court Number And Judge</FormLabel>
                                                <FormInput
                                                    id="regular-form-1"
                                                    type="text"
                                                    placeholder="Enter Court Number And Judge"
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                    {/* end of form fieldset */}
                                    <div className="col-md-6 mt-5">
                                        <fieldset className="form-fieldset px-[15px] py-2.5 border-2 border-solid border-[#7700ff] bg-transparent">
                                            <legend className="text-[15px] font-bold text-[#705ec8] px-[5px] py-0 rounded-[10px] bg-white">Petitioner Information</legend>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Petitioner Name</FormLabel>
                                                <FormInput
                                                    id="regular-form-1"
                                                    type="text"
                                                    placeholder="Enter Petitioner Name"
                                                />
                                            </div>
                                        </fieldset>
                                        <br />
                                        <fieldset className="form-fieldset px-[15px] py-2.5 border-2 border-solid border-[#b38300] bg-transparent">
                                            <legend className="text-[15px] font-bold text-[#b38300] px-[5px] py-0 rounded-[10px] bg-white">Responder Information</legend>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Responder Name</FormLabel>
                                                <FormInput
                                                    id="regular-form-1"
                                                    type="text"
                                                    placeholder="Enter Responder Name"
                                                />
                                            </div>
                                        </fieldset>
                                        <br />
                                        <fieldset className="form-fieldset px-[15px] py-2.5 border-2 border-solid border-[#1eff00] bg-transparent">
                                            <legend className="text-[15px] font-bold text-[#1eff00] px-[5px] py-0 rounded-[10px] bg-white">Advocate Information</legend>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Under Act</FormLabel>
                                                <FormInput
                                                    id="regular-form-1"
                                                    type="text"
                                                    placeholder="Enter Under Act"
                                                />
                                            </div>
                                            <div className="row p-1">
                                                <FormLabel htmlFor="regular-form-4">Under Section</FormLabel>
                                                <FormInput
                                                    id="regular-form-1"
                                                    type="text"
                                                    placeholder="Enter Under Section"
                                                />
                                            </div>
                                        </fieldset>

                                        <div className="row float-right pt-5">
                                            <Button variant="primary" className="w-24 mb-2 mr-1">
                                                Submit
                                            </Button>

                                            <Button variant="secondary" className="w-24 mb-2 mr-1">
                                                Close
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LitigationCaseRegistration;
