import React, { useRef, useState } from "react";
import Button from "@/components/Base/Button";
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormTextarea,
} from "@/components/Base/Form";
import Dropzone from "@/components/Base/Dropzone";

function Main() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const deleteButtonRef = useRef(null);
  const dropzoneSingleRef = React.useRef(null);

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">
        Add New Plot Details
      </h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-4">
          <div className="intro-y box">
            <div className="p-5">
              <FormLabel>Khasra No</FormLabel>
              <FormInput name="area" type="text" />
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-4">
          <div className="intro-y box">
            <div className="p-5">
              <FormLabel>Plot Type</FormLabel>
              <FormSelect aria-label="Default select example">
                <option>Select Plot Type</option>
                <option>Chris Evans</option>
                <option>Liam Neeson</option>
                <option>Daniel Craig</option>
              </FormSelect>
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-4">
          <div className="intro-y box">
            <div className="p-5">
              <FormLabel>Area (In Acre)</FormLabel>
              <FormInput name="area" type="text" />
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-4">
          <div className="intro-y box">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">Plot Details</h2>
            </div>
            <div className="p-5">
              <div>
                <FormLabel>Area (In Acre)</FormLabel>
                <FormInput name="area" type="text" value="0.43" />
              </div>

              <div className="mt-3">
                <FormLabel>Purchase Area (In Acre)</FormLabel>
                <FormInput name="p_area" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Total Purchase Area (In Acre)</FormLabel>
                <FormInput name="t_p_area" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Owner Name</FormLabel>
                <FormInput name="owner_name" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Father Name</FormLabel>
                <FormInput name="fathers_name" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Land Sale To Raiyat</FormLabel>
                <FormInput name="land_sale_to_raiyat" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Khata No</FormLabel>
                <FormInput name="khata_no" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Invidual Share</FormLabel>
                <FormInput name="invidual_share" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Purchased From Deed Khatiyan</FormLabel>
                <FormInput
                  name="purchased_from_deed_khatiyan"
                  type="text"
                  value=""
                />
              </div>
              <div className="mt-3">
                <FormLabel>Plot Wise Pur Area</FormLabel>
                <FormInput name="plot_wise_pur_area" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Actual Possession Taken</FormLabel>
                <FormInput
                  name="actual_possession_taken"
                  type="text"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-4">
          <div className="intro-y box">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">Plot Details</h2>
            </div>
            <div className="p-5">
              <div>
                <FormLabel>Deed No</FormLabel>
                <FormInput name="deed_no" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Not Possesion</FormLabel>
                <FormInput name="not_possesion" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Mortgage Non Mortgage</FormLabel>
                <FormInput name="mortgage_non_mortgage" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Mort Area Plot Wise</FormLabel>
                <FormInput name="mort_area_plot_wise" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Not Mort Area</FormLabel>
                <FormInput name="not_mort_area" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Status Of Plant</FormLabel>
                <FormInput name="status_of_plant" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Plant</FormLabel>
                <FormInput name="plant" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Pipe Line</FormLabel>
                <FormInput name="pipe_line" type="text" value="" />
              </div>

              <div className="mt-3">
                <FormLabel>Road</FormLabel>
                <FormInput name="road" type="text" value="" />
              </div>
              <div className="mt-3">
                <FormLabel>No Use</FormLabel>
                <FormInput name="no_use" type="text" value="" />
              </div>
              <div className="mt-3">
                <FormLabel>Status</FormLabel>
                <FormSelect name="status">
                  <option value="1">Active</option>
                  <option value="0">In-Active</option>
                </FormSelect>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-4">
          <div className="intro-y box">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">Plot Address</h2>
            </div>
            <div className="p-5">
              <div>
                <FormLabel>State</FormLabel>
                <FormSelect>
                  <option value="" selected={true}>
                    Select State
                  </option>
                  <option value="1">Jharkhand</option>
                  <option value="2">Chhattisgarh</option>
                </FormSelect>
              </div>
              <div className="mt-3">
                <FormLabel>District</FormLabel>
                <FormSelect id="district_id">
                  <option value="" selected={true}>
                    Select District
                  </option>
                </FormSelect>
              </div>
              <div className="mt-3">
                <FormLabel>Tehsil</FormLabel>
                <FormSelect name="tehsil" id="tehasil_id">
                  <option value="" selected={true}>
                    Select District
                  </option>
                </FormSelect>
              </div>
              <div className="mt-3">
                <FormLabel>RI</FormLabel>
                <FormSelect name="tehsil" id="ri_id">
                  <option value="" selected={true}>
                    Select RI
                  </option>
                </FormSelect>
              </div>
              <div className="mt-3">
                <FormLabel>Village</FormLabel>
                <FormSelect name="village_id" id="village_id">
                  <option value="" selected={true}>
                    Select Village
                  </option>
                </FormSelect>
              </div>

              <div className="mt-3">
                <FormLabel>Remarks</FormLabel>
                <FormTextarea name="remarks" formTextareaSize={"lg"} />
              </div>

              <div className="mt-3">
                <FormLabel>Upload Supporting Document</FormLabel>

                <Dropzone
                  getRef={(el) => {
                    dropzoneSingleRef.current = el;
                  }}
                  options={{
                    url: "https://httpbin.org/post",
                    thumbnailWidth: 150,
                    maxFilesize: 0.5,
                    maxFiles: 1,
                    headers: { "My-Awesome-Header": "header value" },
                  }}
                  className="dropzone h-[167px]"
                >
                  <div className="font-medium">
                    Drag and drop a file here or click
                  </div>
                </Dropzone>
              </div>

              <div className="mt-3">
                <FormLabel>Update Support notes</FormLabel>
                <FormTextarea name="notes" formTextareaSize={"lg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <Button variant="primary" type="button" className="w-20 mr-3">
          Submit
        </Button>
        <Button type="button" variant="outline-secondary" className="w-20 mr-3">
          Clear
        </Button>
      </div>
    </>
  );
}

export default Main;
