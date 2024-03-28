import React, { useState } from "react";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import { Dialog, Menu } from "@/components/Base/Headless";
import exp from "constants";

const History = ({ isOpen, onClose }) => {
  const sendButtonRef = React.useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

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
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              Khasra Update History
            </h2>
          </Dialog.Title>
          <Dialog.Description className="grid grid-cols-12 gap-4">
            <div className="intro-y col-span-12">
              <div className="overflow-x-auto">
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="whitespace-nowrap">ID</Table.Th>
                      <Table.Th className="whitespace-nowrap">
                        Updated By
                      </Table.Th>
                      <Table.Th className="whitespace-nowrap">Type</Table.Th>
                      <Table.Th className="whitespace-nowrap">
                        Updated At
                      </Table.Th>
                      <Table.Th className="whitespace-nowrap">Details</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td className="whitespace-nowrap">1</Table.Td>
                      <Table.Td className="whitespace-nowrap">
                        Super Admin
                      </Table.Td>
                      <Table.Td className="whitespace-nowrap">
                        Text Update
                      </Table.Td>
                      <Table.Td className="whitespace-nowrap">
                        02 February 2024, 09:58:01 PM
                      </Table.Td>
                      <Table.Td className="whitespace-nowrap">
                        <Button variant="primary" onClick={handleOpen}>
                          Details
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                    {isVisible && (
                      <Table.Tr>
                        <Table.Td colSpan={5}>
                          <div className="grid grid-cols-12 gap-2">
                            <div className="intro-y col-span-12 lg:col-span-12">
                              <h5>
                                Data Update Comparing on Old Vs New
                                <span
                                  onClick={handleClose}
                                  className="badge badge-danger mt-2 close-history float-right cursor-pointer"
                                >
                                  <i
                                    className="ion-close-round"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=" "
                                    data-original-=""
                                  ></i>
                                  Close
                                </span>
                              </h5>
                              <h6 className="text-[#705ec8]">
                                <span>
                                  [Updated By Super Admin On 02 February 2024,
                                  09:58:01 PM]<span></span>
                                </span>
                              </h6>
                            </div>
                            <div className="intro-y col-span-12 lg:col-span-4">
                              <div className="overflow-x-auto">
                                <Table>
                                  <Table.Thead className="bg-warning text-white">
                                    <Table.Tr>
                                      <Table.Th>Title</Table.Th>
                                    </Table.Tr>
                                  </Table.Thead>
                                  <Table.Tbody>
                                    <Table.Tr>
                                      <Table.Td>Khasara No</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Plot Type</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Area (In Acre)</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Area In (In Hec)</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Owner Name</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Letter Date</Table.Td>
                                    </Table.Tr>
                                  </Table.Tbody>
                                </Table>
                              </div>
                            </div>
                            <div className="intro-y col-span-12 lg:col-span-4">
                              <div className="overflow-x-auto">
                                <Table>
                                  <Table.Thead className="bg-danger text-white">
                                    <Table.Tr>
                                      <Table.Th>Old Data</Table.Th>
                                    </Table.Tr>
                                  </Table.Thead>
                                  <Table.Tbody>
                                    <Table.Tr>
                                      <Table.Td>8</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Raiyati</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>0.43</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>No Data Found</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>
                                        Electrosteel Casting Limited
                                      </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>No Data Found</Table.Td>
                                    </Table.Tr>
                                  </Table.Tbody>
                                </Table>
                              </div>
                            </div>
                            <div className="intro-y col-span-12 lg:col-span-4">
                              <div className="overflow-x-auto">
                                <Table>
                                  <Table.Thead className="bg-success text-white">
                                    <Table.Tr>
                                      <Table.Th>New Data</Table.Th>
                                    </Table.Tr>
                                  </Table.Thead>
                                  <Table.Tbody>
                                    <Table.Tr>
                                      <Table.Td>8</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Raiyati</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>0.43</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>No Data Found</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>
                                        Electrosteel Casting Limited
                                      </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>No Data Found</Table.Td>
                                    </Table.Tr>
                                  </Table.Tbody>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </Table.Td>
                      </Table.Tr>
                    )}
                    <Table.Tr>
                      <Table.Td className="whitespace-nowrap">2</Table.Td>
                      <Table.Td className="whitespace-nowrap">
                        Super Admin
                      </Table.Td>
                      <Table.Td className="whitespace-nowrap">
                        Text Update
                      </Table.Td>
                      <Table.Td className="whitespace-nowrap">
                        03 February 2024, 04:47:25 AM
                      </Table.Td>
                      <Table.Td className="whitespace-nowrap">
                        <Button variant="primary" elevated>
                          Details
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </div>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
      {/* END: Modal Content */}
    </>
  );
};

export default History;
