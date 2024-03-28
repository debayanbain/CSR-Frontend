import {
  PreviewComponent,
  Preview,
} from "@/components/Base/PreviewComponent";
import {
  FormSelect,
  FormInput,
  FormLabel,
} from "@/components/Base/Form";
import Lucide from "@/components/Base/Lucide";
import Litepicker from "@/components/Base/Litepicker";
import Button from "@/components/Base/Button";
import { useState } from "react";

function AdvanceSearchForm() {
  const [date, setDate] = useState("");
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* BEGIN: Input */}
        <PreviewComponent>
          <Preview className="grid grid-cols-6 gap-4">
            <div className="col-span-4">
              <FormLabel htmlFor="regular-form-1">CNR Number</FormLabel>
              <FormInput
                id="regular-form-1"
                type="text"
                placeholder="Enter CNR Number"
              />
            </div>

            <div className="col-span-4">
              <FormLabel htmlFor="regular-form-2">Registration Number</FormLabel>
              <FormInput
                id="regular-form-2"
                type="text"
                placeholder="Enter Registration Number"
              />
            </div>

            <div className="col-span-4">
              <FormLabel htmlFor="regular-form-3">Case Type</FormLabel>
              <FormSelect
                formSelectSize="md"
                className="sm:mt-0 sm:mr-0"
                aria-label=".form-select-lg example"
              >
                <option value="1" className="text-slate-300">Select Case Type</option>
                <option value="2">Chris Evans</option>
                <option value="3">Liam Neeson</option>
                <option value="4">Daniel Craig</option>
              </FormSelect>
            </div>

            <div className="col-span-4 flex flex-col content-start justify-between">
              <label className="col-md-3 form-label">Filling Date</label>
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

            <div className="col-span-4">
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

            <div className="col-span-4">
              <FormLabel htmlFor="regular-form-4">Limit</FormLabel>
              <FormSelect
                formSelectSize="md"
                className="sm:mt-0 sm:mr-0"
                aria-label=".form-select-lg example"
              >
                <option value="1" className="text-slate-300">Select Limit</option>
                <option value="2">10</option>
                <option value="3">50</option>
                <option value="4">100</option>
                <option value="4">All</option>
              </FormSelect>
            </div>

            <div className="flex gap-3 items-center">
              <Button variant="primary" className="w-24 mb-2 mr-1">
                Search
              </Button>

              <Button variant="secondary" className="w-24 mb-2 mr-1">
                Clear
              </Button>
            </div>
          </Preview>
        </PreviewComponent>

        {/* END: Input */}
      </div>
    </>
  );
}

export default AdvanceSearchForm;
