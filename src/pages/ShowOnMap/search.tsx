import Button from "@/components/Base/Button";
import { FormInput, FormLabel } from "@/components/Base/Form";
import { Disclosure } from "@/components/Base/Headless";
import React, { useEffect, useState } from "react";

const Search = ({ makeDisplay }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClearClick = () => {
    console.log(isVisible);

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
    <div className="bg-white absolute shadow-md rounded-lg p-3 left-[20%] top-[15%] w-1/6">
      <div>
        <Disclosure.Group>
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-center">
              <h4>Search Plot</h4>
              <span className="ml-3 text-red-500" onClick={handleClearClick}>
                Clear
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500 border-t-4 border-black-500 overflow-auto">
              <div>
                <FormInput type="text" placeholder="Plot #ID" />
                <Button variant="primary" className="mt-5">
                  Search
                </Button>
              </div>
            </Disclosure.Panel>
          </Disclosure>
        </Disclosure.Group>
      </div>
    </div>
  );
};

export default Search;
