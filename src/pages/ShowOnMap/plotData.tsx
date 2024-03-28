import { Disclosure } from "@/components/Base/Headless";
import Table from "@/components/Base/Table";
import { useEffect, useState } from "react";

const PlotData = ({ makeDisplay }) => {
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-lg p-3 w-1/2">
      <span className="ml-3 text-red-500 float-end" onClick={handleClearClick}>
        Clear
      </span>
      <h3 className="text-lg font-semibold mb-2">Plot Data</h3>
      <Disclosure.Group variant="boxed">
        <Disclosure>
          <Disclosure.Button>Basic Plot Details</Disclosure.Button>
          <Disclosure.Panel className="leading-relaxed">
            <div className="intro-y box col-span-12 lg:col-span-6 mb-2">
              <div className="box px-5 py-3 flex-1">
                <div className="flex items-center">
                  <div className="font-medium">Address</div>
                  <div className="text-md ml-auto">
                    Sabra, Chandankiyari, Bokaro
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-y box col-span-12 lg:col-span-6 mb-2">
              <div className="box px-5 py-3 flex-1">
                <div className="flex items-center">
                  <div className="font-medium">Plot Wise Purchase</div>
                  <div className="text-md ml-auto">
                    0.325 acre. of 1.34 acre.
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button>Khata Details</Disclosure.Button>
          <Disclosure.Panel className="leading-relaxed">
            <div className="overflow-auto h-20">
              <h6 className="mb-1">#1 Khata Plots (from all deeds)</h6>
              <div className="intro-y box col-span-12 lg:col-span-6 mb-2">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">
                      #1841 Total 2 time(s) Purchased
                    </div>
                    <div className="text-md ml-auto">0.05 acre</div>
                  </div>
                </div>
              </div>
              <div className="intro-y box col-span-12 lg:col-span-6 mb-2">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">
                      #1901 Total 2 time(s) Purchased
                    </div>
                    <div className="text-md ml-auto">0.325 acre.</div>
                  </div>
                </div>
              </div>
              <div className="intro-y box col-span-12 lg:col-span-6 mb-2">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">
                      #1902 Total 2 time(s) Purchased
                    </div>
                    <div className="text-md ml-auto">0.329 acre.</div>
                  </div>
                </div>
              </div>
              <div className="intro-y box col-span-12 lg:col-span-6 mb-2 ">
                <div className="box px-5 py-3 flex-1 bg-gray-500">
                  <div className="flex items-center text-white">
                    <div className="font-medium">Total Khata Area</div>
                    <div className="text-md ml-auto">0.605 acre.</div>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button>Purchase Plot (#1901) Details</Disclosure.Button>
          <Disclosure.Panel className="leading-relaxed">
            <div className="intro-y box col-span-12 lg:col-span-6 mb-2">
              <div className="overflow-x-auto">
                <Table>
                  <Table.Thead
                    variant="default"
                    className="bg-danger text-white"
                  >
                    <Table.Tr>
                      <Table.Th className="whitespace-nowrap">
                        PLOT ID#
                      </Table.Th>
                      <Table.Th className="whitespace-nowrap">
                        DEED NO#
                      </Table.Th>
                      <Table.Th className="whitespace-nowrap">
                        KHATA NO#
                      </Table.Th>
                      <Table.Th className="whitespace-nowrap">
                        AREA (ACRE.)
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>1901</Table.Td>
                      <Table.Td>6826/6329</Table.Td>
                      <Table.Td>1</Table.Td>
                      <Table.Td>0.1225</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
                <Table>
                  <Table.Thead
                    variant="default"
                    className="bg-success text-white"
                  >
                    <Table.Tr>
                      <Table.Th
                        className="whitespace-nowrap text-center"
                        colSpan={4}
                      >
                        Individual Plot Details
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>ACTUAL POSSESSION TAKEN</Table.Td>
                      <Table.Td>0.1225</Table.Td>
                      <Table.Td>NOT POSSESION</Table.Td>
                      <Table.Td>NA</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>MORT. AREA</Table.Td>
                      <Table.Td>0.1225</Table.Td>
                      <Table.Td>NOT MORT. AREA</Table.Td>
                      <Table.Td>NA</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>PLANT</Table.Td>
                      <Table.Td>NA</Table.Td>
                      <Table.Td>PIPELINE</Table.Td>
                      <Table.Td>NA</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </div>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </Disclosure.Group>
    </div>
  );
};

export default PlotData;
