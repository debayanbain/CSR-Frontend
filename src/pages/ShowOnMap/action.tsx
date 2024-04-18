import React, { useState } from "react";
import Lucide from "@/components/Base/Lucide";
import { Disclosure } from "@/components/Base/Headless";
import Tippy from "@/components/Base/Tippy";
import Layer from "./layer";
import Search from "./search";
import Survey from "./survey";

const ActionSection = () => {
  const [layersOpened, setLayersOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);
  const [surveyOpened, setSurveyOpened] = useState(false);

  const toggleLayers = () => {
    setLayersOpened((prevLayersOpened) => !prevLayersOpened);
  };

  const toggleSearch = () => {
    setSearchOpened((prevSearchOpened) => !prevSearchOpened);
  };

  const toggleSurvey = () => {
    setSurveyOpened((prevSurveyOpened) => !prevSurveyOpened);
  };

  return (
    <>
      <div className="absolute z-[9] p-4 left-[2%] top-[15%] bg-white rounded-lg">
        <Disclosure.Group>
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-center">
              {/* <img
                alt="ESL Logo"
                className="h-10 max-w-full"
                src="https://esl.highlandenergynig.com/public/theams/assets/images/logo/esl-logo-main.png"
              /> */}
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500 border-t-4 border-black-500">
              <div className="grid grid-cols-2 gap-4">
                <div className="transition ease-in-out delay-100 hover:-translate-y-1">
                  <Tippy content="Layers">
                    <Lucide
                      icon="Layers"
                      onClick={toggleLayers}
                      className="w-10 h-10 p-2 rounded-full bg-gray-200"
                    />
                  </Tippy>
                </div>
                <div className="transition ease-in-out delay-100 hover:-translate-y-1">
                  <Tippy content="Search">
                    <Lucide
                      icon="Search"
                      onClick={toggleSearch}
                      className="w-10 h-10 p-2 rounded-full bg-gray-200"
                    />
                  </Tippy>
                </div>
                <div className="transition ease-in-out delay-100 hover:-translate-y-1">
                  <Tippy content="Share">
                    <Lucide
                      icon="Share2"
                      className="w-10 h-10 p-2 rounded-full bg-gray-200"
                    />
                  </Tippy>
                </div>
                <div className="transition ease-in-out delay-100 hover:-translate-y-1">
                  <Tippy content="Survey">
                    <Lucide
                      icon="BookOpenText"
                      onClick={toggleSurvey}
                      className="w-10 h-10 p-2 rounded-full bg-gray-200"
                    />
                  </Tippy>
                </div>
                <div className="transition ease-in-out delay-100 hover:-translate-y-1">
                  <Tippy content="Refresh">
                    <Lucide
                      icon="RefreshCw"
                      className="w-10 h-10 p-2 rounded-full bg-gray-200"
                    />
                  </Tippy>
                </div>
                <div className="transition ease-in-out delay-100 hover:-translate-y-1">
                  <Tippy content="View 3D">
                    <Lucide
                      icon="Box"
                      className="w-10 h-10 p-2 rounded-full bg-gray-200"
                    />
                  </Tippy>
                </div>
              </div>
            </Disclosure.Panel>
          </Disclosure>
        </Disclosure.Group>
      </div>
      <div className={`${layersOpened ? "block" : "hidden"}`}>
        <Layer makeDisplay={`${layersOpened ? true : false}`} />
      </div>
      <div className={`${searchOpened ? "block" : "hidden"}`}>
        <Search makeDisplay={`${searchOpened ? true : false}`} />
      </div>
      <div className={`${surveyOpened ? "block" : "hidden"}`}>
        <Survey makeDisplay={`${surveyOpened ? true : false}`} />
      </div>
    </>
  );
};

export default ActionSection;
