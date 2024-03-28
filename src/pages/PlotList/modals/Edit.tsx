import Button from "@/components/Base/Button";
import { Dialog } from "@/components/Base/Headless";
import React from "react";
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormTextarea,
} from "@/components/Base/Form";
import Dropzone from "@/components/Base/Dropzone";
import AlertComponent from "@/components/Base/Alert";

const Edit = ({ isOpen, onClose }) => {
  const sendButtonRef = React.useRef(null);
  const dropzoneSingleRef = React.useRef(null);
  return (
    <>
      {/* BEGIN: Modal Content */}
      <Dialog
        open={isOpen}
        onClose={onClose}
        initialFocus={sendButtonRef}
        size="xl"
        className="mt-5"
      >
        <Dialog.Panel>
          <Dialog.Description className="grid grid-cols-12 gap-4">
            <div className="intro-y col-span-12">
              <FormLabel>Khasara No</FormLabel>
              <FormInput
                id="khasra-no"
                type="text"
                placeholder="Input text"
                value="8"
                disabled={true}
              />
            </div>
            <div className="intro-y col-span-12">
              <FormLabel>Plot Type</FormLabel>
              <FormSelect aria-label="Default select example">
                <option>Select Plot Type</option>
                <option>Chris Evans</option>
                <option>Liam Neeson</option>
                <option>Daniel Craig</option>
              </FormSelect>
            </div>
            <div className="intro-y col-span-12 lg:col-span-6">
              <fieldset
                className="border-2 border-solid border-[#58ebbb] p-2.5 rounded-[10px]"
                style={{ background: "#d0f7ea" }}
              >
                <legend
                  className="w-auto text-[15px] font-bold text-[#58ebbb] px-[5px] py-0 rounded-[10px]"
                  style={{ background: "#fff" }}
                >
                  Plot Details:
                </legend>
                <div>
                  <FormLabel>Area (In Acre)</FormLabel>
                  <FormInput name="area" type="text" value="0.43" />
                </div>
                <div className="mt-3">
                  <FormLabel>Purchase Area (In Acre)</FormLabel>
                  <FormInput name="p_area" type="text" value="0.43" />
                </div>
                <div className="mt-3">
                  <FormLabel>Total Purchase Area (In Acre)</FormLabel>
                  <FormInput name="t_p_area" type="text" value="0.43" />
                </div>
                <div className="mt-3">
                  <FormLabel>Owner Name</FormLabel>
                  <FormInput
                    name="owner_name"
                    type="text"
                    value="Electrosteel Casting Limited."
                  />
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
                  <FormInput name="khata_no" type="text" value="35" />
                </div>
                <div className="mt-3">
                  <FormLabel>Invidual Share</FormLabel>
                  <FormInput name="invidual_share" type="text" value="35" />
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
                  <FormInput
                    name="plot_wise_pur_area"
                    type="text"
                    value="0.43"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel>Actual Possession Taken</FormLabel>
                  <FormInput
                    name="actual_possession_taken"
                    type="text"
                    value="0.43"
                  />
                </div>
              </fieldset>
            </div>
            <div className="intro-y col-span-12 lg:col-span-6">
              <fieldset
                className="border-2 border-solid border-[#58ebbb] p-2.5 rounded-[10px]"
                style={{ background: "#d0f7ea" }}
              >
                <legend
                  className="w-auto text-[15px] font-bold text-[#58ebbb] px-[5px] py-0 rounded-[10px]"
                  style={{ background: "#fff" }}
                >
                  Plot Details:
                </legend>
                <div>
                  <FormLabel>Deed No</FormLabel>
                  <FormInput type="text" disabled={true} value="7985/7609" />
                </div>
                <div className="mt-3">
                  <FormLabel>Not Possesion</FormLabel>
                  <FormInput name="not_possesion" type="text" value="" />
                </div>
                <div className="mt-3">
                  <FormLabel>Mortgage Non Mortgage</FormLabel>
                  <FormInput
                    name="mortgage_non_mortgage"
                    type="text"
                    value="0.43"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel>Mort Area Plot Wise</FormLabel>
                  <FormInput
                    name="mort_area_plot_wise"
                    type="text"
                    value="0.43"
                  />
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
                  <FormSelect aria-label="Default select example">
                    <option value="1" selected={true}>
                      Active
                    </option>
                    <option value="0">In-Active</option>
                  </FormSelect>
                </div>
              </fieldset>
            </div>
            <div className="intro-y col-span-12 lg:col-span-6">
              <fieldset
                className="border-2 border-solid border-[#705ec8] p-2.5 rounded-[10px]"
                style={{ background: "#d1c7ff" }}
              >
                <legend
                  className="w-auto text-[15px] font-bold text-[#705ec8] px-[5px] py-0 rounded-[10px]"
                  style={{ background: "#fff" }}
                >
                  Plot Address:
                </legend>
                <div>
                  <FormLabel>District</FormLabel>
                  <FormSelect disabled={true}>
                    <option value="" selected={true}>
                      Select District
                    </option>
                    <option value="1">Kabirdham</option>
                    <option value="2">Kanker</option>
                    <option value="3">Kondagaon</option>
                    <option value="4">Korba</option>
                  </FormSelect>
                </div>
                <div className="mt-3">
                  <FormLabel>Tehsil</FormLabel>
                  <FormSelect disabled={true}>
                    <option value="" selected={true}>
                      Select Tehsil
                    </option>
                    <option value="1">Ajgarbahar</option>
                    <option value="2">Katghora</option>
                    <option value="3">Kartala</option>
                    <option value="4">Korba</option>
                  </FormSelect>
                </div>
                <div className="mt-3">
                  <FormLabel>RI</FormLabel>
                  <FormSelect disabled={true}>
                    <option value="" selected={true}>
                      Select RI
                    </option>
                    <option value="1">Ajgarbahar</option>
                    <option value="2">Katghora</option>
                    <option value="3">Kartala</option>
                    <option value="4">Korba</option>
                  </FormSelect>
                </div>
                <div className="mt-3">
                  <FormLabel>Village</FormLabel>
                  <FormSelect>
                    <option value="" selected={true}>
                      Select Village
                    </option>
                    <option value="1">Ajgarbahar</option>
                    <option value="2">Katghora</option>
                    <option value="3">Kartala</option>
                    <option value="4">Korba</option>
                  </FormSelect>
                </div>
              </fieldset>
            </div>
            <div className="intro-y col-span-12 lg:col-span-6">
              <fieldset
                className="border-2 border-solid border-[#b58e02] p-2.5 rounded-[10px]"
                style={{ background: "#f7df89" }}
              >
                <legend
                  className="w-auto text-[15px] font-bold text-[#b58e02] px-[5px] py-0 rounded-[10px]"
                  style={{ background: "#fff" }}
                >
                  Remarks:
                </legend>
                <div>
                  <FormTextarea formTextareaSize={"lg"} />
                </div>
              </fieldset>
              <fieldset className="border-2 border-solid border-[#705ec8] p-2.5 rounded-[10px] mt-5">
                <legend
                  className="w-auto text-[15px] font-bold text-[#705ec8] px-[5px] py-0 rounded-[10px]"
                  style={{ background: "#fff" }}
                >
                  Upload Supporting Document:
                </legend>
                <div>
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
                      Drop files here or click to upload.
                    </div>
                  </Dropzone>
                </div>
              </fieldset>
            </div>
            <div className="intro-y col-span-12 lg:col-span-12">
              <AlertComponent variant={"outline-warning"} className="text-dark">
                To Update khasra, You need to upload a Supporting Document or
                Add a Note
              </AlertComponent>
            </div>
            <div className="intro-y col-span-12 lg:col-span-12">
              <fieldset
                className="border-2 border-solid border-[#b58e02] p-2.5 rounded-[10px]"
                style={{ background: "#f7df89" }}
              >
                <legend
                  className="w-auto text-[15px] font-bold text-[#b58e02] px-[5px] py-0 rounded-[10px]"
                  style={{ background: "#fff" }}
                >
                  Update Support notes:
                </legend>
                <div>
                  <FormTextarea formTextareaSize={"lg"} />
                </div>
              </fieldset>
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <Button
              variant="primary"
              type="button"
              className="w-20 mr-3"
              ref={sendButtonRef}
            >
              Update
            </Button>
            <Button
              type="button"
              variant="outline-secondary"
              onClick={() => {
                onClose(true);
              }}
              className="w-20"
            >
              Cancel
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* END: Modal Content */}
    </>
  );
};

export default Edit;
