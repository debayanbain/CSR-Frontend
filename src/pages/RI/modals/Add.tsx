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

const Add = ({ isOpen, onClose }) => {
  const sendButtonRef = React.useRef(null);
  const dropzoneSingleRef = React.useRef(null);
  return (
    <>
      {/* BEGIN: Modal Content */}
      <Dialog
        open={isOpen}
        onClose={onClose}
        initialFocus={sendButtonRef}
        size="md"
        className="mt-5"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              Add RI (ESL)
            </h2>
          </Dialog.Title>
          <Dialog.Description className="grid grid-cols-12 gap-4">
            <div className="intro-y col-span-12">
              <FormLabel>RI Name</FormLabel>
              <FormInput id="khasra-no" type="text" placeholder="Input text" />
            </div>
            <div className="intro-y col-span-12">
              <FormLabel>State</FormLabel>
              <FormSelect aria-label="Default select example">
                <option>Choose one</option>
                <option>Jharkhand</option>
                <option>Chhattisgarh</option>
              </FormSelect>
            </div>
            <div className="intro-y col-span-12">
              <FormLabel>District</FormLabel>
              <FormSelect aria-label="Default select example">
                <option>Selcet District</option>
                <option>Balod</option>
                <option>Bastar</option>
              </FormSelect>
            </div>
            <div className="intro-y col-span-12">
              <FormLabel>Tehsil</FormLabel>
              <FormSelect aria-label="Default select example">
                <option>Selcet Tehsil</option>
                <option>Dhanbad</option>
                <option>Dumka</option>
                <option>Jamtara</option>
              </FormSelect>
            </div>
            <div className="intro-y col-span-12">
              <FormLabel>Status</FormLabel>
              <FormSelect aria-label="Default select example">
                <option>Choose one</option>
                <option>Active</option>
                <option>In active</option>
              </FormSelect>
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <Button
              variant="primary"
              type="button"
              className="w-20 mr-3"
              ref={sendButtonRef}
            >
              Submit
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

export default Add;
