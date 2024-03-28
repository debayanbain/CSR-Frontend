import Button from "@/components/Base/Button";
import { FormInput, FormLabel } from "@/components/Base/Form";
import { Disclosure } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import React, { useEffect, useState } from "react";

const Survey = ({ makeDisplay }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClearClick = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (makeDisplay) {
      setIsVisible(makeDisplay);
    }
  }, [makeDisplay]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-white absolute shadow-md rounded-lg p-3 left-[20%] top-[15%] w-1/5">
      <div>
        <Disclosure.Group>
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-center">
              <h4>Survey</h4>
              <span className="ml-3 text-red-500" onClick={handleClearClick}>
                Clear
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500 border-t-4 border-black-500">
              <div>
                <FormLabel htmlFor="Search Month Wise">
                  Search Month Wise
                </FormLabel>
                <FormInput type="month" />
              </div>
              <div>
                <ul>
                  <li className="flex items-center bg-white rounded-[5px] border-solid border-[#ebecf1] gap-1 my-2">
                    <Lucide icon="Cog" className="mx-2" color="#705ec8" />{" "}
                    GARGAGATE
                    <Button size="sm" className="m-2 bg-[#5b7fff] text-white">
                      Load Map
                    </Button>
                  </li>
                  <li className="flex items-center bg-white rounded-[5px] border-solid border-[#ebecf1] gap-1 my-2">
                    <Lucide icon="Cog" className="mx-2" color="#705ec8" /> RAIL
                    BRIDGE
                    <Button size="sm" className="m-2 bg-[#5b7fff] text-white">
                      Load Map
                    </Button>
                  </li>
                </ul>
              </div>
            </Disclosure.Panel>
          </Disclosure>
        </Disclosure.Group>
      </div>
    </div>
  );
};

export default Survey;
