import Button from "@/components/Base/Button";
import { Dialog } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import React from "react";
import { Disclosure } from "@/components/Base/Headless";

const View = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const sendButtonRef = React.useRef(null);
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
            <h2 className="mr-auto text-base font-medium">Details Plot # 8</h2>
            <Menu className="sm:hidden">
              <Menu.Button className="block w-5 h-5" href="#">
                <Lucide
                  icon="MoreHorizontal"
                  className="w-5 h-5 text-slate-500"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="File" className="w-4 h-4 mr-2" />
                  Download Docs
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </Dialog.Title>
          <Dialog.Description className="grid gap-4 gap-y-3">
            <div className="grid grid-cols-12 gap-2">
              <div className="intro-y box col-span-12">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Address</div>
                    <div className="text-xs text-slate-500 ml-auto">
                      Devgram, Chandankiyari, Bokaro
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-y box col-span-12 lg:col-span-12">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Name of Land Seller</div>
                    <div className="text-xs text-slate-500 ml-auto">
                      Electrosteel Casting Limited.
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-y box col-span-12 lg:col-span-12">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Fathers Name</div>
                    <div className="text-xs text-slate-500 ml-auto"></div>
                  </div>
                </div>
              </div>
              <div className="intro-y box col-span-12 lg:col-span-12">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">
                      Purchased From Deed/Khatiyan
                    </div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Is Land Sale To Raiyat?</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Deed No</div>
                    <div className="text-xs text-slate-500 ml-auto">
                      <a href="public/uploads/deed/93/7609 No. Deed.pdf">
                        <span
                          // style="cursor:no-drop;"
                          className="btn btn-sm btn-danger w-24 h-5 mr-1"
                        >
                          7985/7609
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Invidual Share</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Deed Date</div>
                    <div className="text-xs text-slate-500 ml-auto">
                      2007-12-17
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Plot Wise Purchase Area</div>
                    <div className="text-xs text-slate-500 ml-auto">0.43</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Total No Seller</div>
                    <div className="text-xs text-slate-500 ml-auto">
                      Electrosteel Casting Limited
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Actual Possession Taken</div>
                    <div className="text-xs text-slate-500 ml-auto">0.43</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Mutated Area</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Not Possesion</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Un-Mutated Area</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Mortgage Non Mortgage</div>
                    <div className="text-xs text-slate-500 ml-auto">0.43</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Total Area</div>
                    <div className="text-xs text-slate-500 ml-auto">
                      0.43{" "}
                      <span
                        // style="cursor:pointer;"
                        className="btn btn-sm btn-success w-10 h-5 mr-1"
                      >
                        Acre
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">No Use</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Purchase Area</div>
                    <div className="text-xs text-slate-500 ml-auto">
                      0.43{" "}
                      <span
                        // style="cursor:pointer;"
                        className="btn btn-sm btn-success w-10 h-5 mr-1"
                      >
                        Acre
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Road</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Total Purchase Area</div>
                    <div className="text-xs text-slate-500 ml-auto">
                      0.43{" "}
                      <span
                        // style="cursor:pointer;"
                        className="btn btn-sm btn-success w-10 h-5 mr-1"
                      >
                        Acre
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Pipe Line</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Jam No</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>
              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Plant</div>
                    <div className="text-xs text-slate-500 ml-auto">NA</div>
                  </div>
                </div>
              </div>
              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="box px-5 py-3 flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">Khata No</div>
                    <div className="text-xs text-slate-500 ml-auto">35</div>
                  </div>
                </div>
              </div>

              <div className="intro-y box col-span-12 lg:col-span-12">
                <div className="box px-5 py-3 flex-1">
                  <div className=" items-center">
                    <Disclosure.Group>
                      <Disclosure>
                        <Disclosure.Button>
                          Plot No #8 Attached to deed no #7985/7609
                        </Disclosure.Button>
                        <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                          <div className="intro-y box col-span-12 lg:col-span-6 mb-2">
                            <div className="box px-5 py-3 flex-1">
                              <div className="flex items-center">
                                <div className="font-medium">
                                  Name of Land Seller
                                </div>
                                <div className="text-xs text-slate-500 ml-auto">
                                  Electrosteel Casting Limited.
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="intro-y box col-span-12 lg:col-span-12 mb-2">
                            <div className="box px-5 py-3 flex-1">
                              <div className="flex items-center">
                                <div className="font-medium">Fathers Name</div>
                                <div className="text-xs text-slate-500 ml-auto">
                                  NA
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="intro-y box col-span-12 lg:col-span-12 mb-2">
                            <div className="box px-5 py-3 flex-1">
                              <div className="flex items-center">
                                <div className="font-medium">Total Area</div>
                                <div className="text-xs text-slate-500 ml-auto">
                                  0.43{" "}
                                  <span
                                    // style="cursor:pointer;"
                                    className="btn btn-sm btn-success w-10 h-5 mr-1"
                                  >
                                    Acre
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </Disclosure.Group>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
      {/* END: Modal Content */}
    </>
  );
};

export default View;
