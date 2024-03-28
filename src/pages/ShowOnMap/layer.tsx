import Button from "@/components/Base/Button";
import { Disclosure } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import { useLazyLoadMapDataQuery } from "@/stores/map/mapApiSlice";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Layer = ({ makeDisplay }) => {
  const [branchStatus, setBranchStatus] = useState([false, false, false]);
  const [isVisible, setIsVisible] = useState(true);
  const [loadMapData] = useLazyLoadMapDataQuery();

  useEffect(() => {
    if (makeDisplay) {
      setIsVisible(makeDisplay);
    }
  }, [makeDisplay]);

  const toggleBranch = (index: number) => {
    const newBranchStatus = [...branchStatus];
    newBranchStatus[index] = !newBranchStatus[index];
    setBranchStatus(newBranchStatus);
  };

  const getIcon = (index: number) => {
    return branchStatus[index] ? "MinusCircle" : "PlusCircle";
  };

  const handleClearClick = () => {
    setIsVisible(false);
  };

  const handleLoadMap = async (plotId: Number) => {
    const res = await loadMapData(plotId);
    console.log(res);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-white absolute shadow-md rounded-lg p-3 right-[2%] top-[15%]">
      <div>
        <Disclosure.Group>
          <Disclosure>
            <Disclosure.Button className="flex items-center justify-center">
              <h4>Choose Layers</h4>
              <span className="ml-3 text-red-500" onClick={handleClearClick}>
                Clear
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500 border-t-4 border-black-500 overflow-auto">
              <ul className="overflow-auto max-h-[400px]">
                <li className="p-1 mb-1 bg-[#f3f4f7] leading-[2em] text-[#17171b] rounded-[5px] border-solid border-[#ebecf1]">
                  <button
                    className="flex items-center w-full focus:outline-none"
                    onClick={() => toggleBranch(0)}
                  >
                    <Lucide
                      icon={getIcon(0)}
                      color="#705ec8"
                      className="mr-3"
                    />
                    DGPS Survey
                  </button>
                  <ul
                    id={`leaf-0`}
                    className="pl-4"
                    style={{ display: branchStatus[0] ? "block" : "none" }}
                  >
                    <li className="flex items-center bg-white rounded-[5px] border-solid border-[#ebecf1] gap-1 my-2">
                      <Lucide icon="Cog" className="mx-2" color="#705ec8" />{" "}
                      GARGAGATE
                      <Button
                        size="sm"
                        className="m-2 bg-[#5b7fff] text-white"
                        onClick={() => handleLoadMap(93)}
                      >
                        Load Map
                      </Button>
                    </li>
                    <li className="flex items-center bg-white rounded-[5px] border-solid border-[#ebecf1] gap-1 my-2">
                      <Lucide icon="Cog" className="mx-2" color="#705ec8" />{" "}
                      RAIL BRIDGE
                      <Button size="sm" className="m-2 bg-[#5b7fff] text-white">
                        Load Map
                      </Button>
                    </li>
                  </ul>
                </li>
                <li className="p-1 mb-1 bg-[#f3f4f7] leading-[2em] text-[#17171b] rounded-[5px] border-solid border-[#ebecf1]">
                  <button
                    className="flex items-center w-full focus:outline-none"
                    onClick={() => toggleBranch(1)}
                  >
                    <Lucide
                      icon={getIcon(1)}
                      color="#705ec8"
                      className="mr-3"
                    />
                    Tiara
                  </button>
                  <ul
                    id={`leaf-1`}
                    className="pl-4"
                    style={{ display: branchStatus[1] ? "block" : "none" }}
                  >
                    <li className="flex items-center bg-white rounded-[5px] border-solid border-[#ebecf1] gap-1 my-2">
                      <Lucide icon="Cog" className="mx-2" color="#705ec8" />
                      GARGAGATE
                      <Button size="sm" className="m-2 bg-[#5b7fff] text-white">
                        Load Map
                      </Button>
                    </li>
                    <li className="flex items-center bg-white rounded-[5px] border-solid border-[#ebecf1] gap-1 my-2">
                      <Lucide icon="Cog" className="mx-2" color="#705ec8" />{" "}
                      RAIL BRIDGE
                      <Button size="sm" className="m-2 bg-[#5b7fff] text-white">
                        Load Map
                      </Button>
                    </li>
                  </ul>
                </li>
                <li className="p-1 mb-1 bg-[#f3f4f7] leading-[2em] text-[#17171b] rounded-[5px] border-solid border-[#ebecf1]">
                  <button
                    className="flex items-center w-full focus:outline-none"
                    onClick={() => toggleBranch(2)}
                  >
                    <Lucide
                      icon={getIcon(2)}
                      color="#705ec8"
                      className="mr-3"
                    />
                    Udalbani
                  </button>
                  <ul
                    id={`leaf-2`}
                    className="pl-4"
                    style={{ display: branchStatus[2] ? "block" : "none" }}
                  >
                    <li className="flex items-center bg-white rounded-[5px] border-solid border-[#ebecf1] gap-1 my-2">
                      <Lucide icon="Cog" className="mx-2" color="#705ec8" />{" "}
                      GARGAGATE
                      <Button size="sm" className="m-2 bg-[#5b7fff] text-white">
                        Load Map
                      </Button>
                    </li>
                    <li className="flex items-center bg-white rounded-[5px] border-solid border-[#ebecf1] gap-1 my-2">
                      <Lucide icon="Cog" className="mx-2" color="#705ec8" />{" "}
                      RAIL BRIDGE
                      <Button size="sm" className="m-2 bg-[#5b7fff] text-white">
                        Load Map
                      </Button>
                    </li>
                  </ul>
                </li>
              </ul>
            </Disclosure.Panel>
          </Disclosure>
        </Disclosure.Group>
      </div>
    </div>
  );
};

export default Layer;
