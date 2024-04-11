import _ from "lodash";
import clsx from "clsx";
import { useRef, useState } from "react";
import fakerData from "@/utils/faker";
import Button from "@/components/Base/Button";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect } from "@/components/Base/Form";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
import Lucide from "@/components/Base/Lucide";
import Tippy from "@/components/Base/Tippy";
import Litepicker from "@/components/Base/Litepicker";
import ReportDonutChart from "@/components/ReportDonutChart";
import ReportLineChart from "@/components/ReportLineChart";
import ReportBarChart1 from "@/components/ReportBarChart1";
import ReportPieChart from "@/components/ReportPieChart";
import ReportDonutChart1 from "@/components/ReportDonutChart1";
import SimpleLineChart1 from "@/components/SimpleLineChart1";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import VerticalBarChart from "@/components/VerticalBarChart";
import LeafletMap from "@/components/LeafletMap";
import { Menu } from "@/components/Base/Headless";
import Table from "@/components/Base/Table";

function Main() {
  const [salesReportFilter, setSalesReportFilter] = useState<string>();
  const importantNotesRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("next");
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="grid grid-cols-12 gap-6">
          {/* Budget */}
          <div className="col-span-12">
            <div className="bg-primary text-white py-2 text-center text-base">
              Budget
            </div>
            <div className="grid grid-cols-12 gap-2 mt-3 text-center">
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-2 box">
                    <div className="flex justify-center">
                      <div className="text-base font-medium leading-8">
                        CSR Obligation
                      </div>
                    </div>
                    <div className="mt-1 text-xl font-bold leading-8">
                      24.99 Cr
                    </div>
                    <div className="flex justify-end">
                      <Lucide
                        fill="blue"
                        icon="PlusCircle"
                        className="w-[28px] h-[28px] text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-2 box">
                    <div className="flex justify-center">
                      <div className="text-base font-medium leading-8">
                        Project Budget
                      </div>
                    </div>
                    <div className="mt-1 text-xl font-bold leading-8">
                      22.99 Cr
                    </div>
                    <div className="flex justify-end">
                      <Lucide
                        fill="blue"
                        icon="PlusCircle"
                        className="w-[28px] h-[28px] text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-2 box">
                    <div className="flex justify-center">
                      <div className="text-base font-medium leading-8">
                        Admin Overheads
                      </div>
                    </div>
                    <div className="mt-1 text-xl font-bold leading-8">
                      2.24 Cr
                    </div>
                    <div className="flex justify-end">
                      <Lucide
                        fill="blue"
                        icon="PlusCircle"
                        className="w-[28px] h-[28px] text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-2 box">
                    <div className="flex justify-center">
                      <div className="text-base font-medium leading-8">
                        Impact Assesment
                      </div>
                    </div>
                    <div className="mt-1 text-xl font-bold leading-8">
                      4.04 Lac
                    </div>
                    <div className="flex justify-end">
                      <Lucide
                        fill="blue"
                        icon="PlusCircle"
                        className="w-[28px] h-[28px] text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Expense */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-7">
            <div className="bg-primary text-white py-2 text-center text-base">
              Expense
            </div>
            <div className="grid grid-cols-12 gap-2 mt-3 text-center">
              <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-5 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-2 box flex divide-x-2">
                    <div className="flex-grow flex flex-col justify-center items-center">
                      <div className="text-base font-medium leading-8">
                        Disbursed
                      </div>
                      <div className="text-xl font-bold leading-8">5.65 Cr</div>
                    </div>
                    <div className="flex flex-col divide-y-2 px-5">
                      <div className="h-full">
                        <div className="text-base font-normal leading-8">
                          Spent
                        </div>
                        <div className="text-base font-bold leading-8">
                          9.95 Lac
                        </div>
                      </div>
                      <div className=" h-full">
                        <div className="text-base font-normal leading-8">
                          Unspent
                        </div>
                        <div className="text-base font-bold leading-8">
                          5.55 Cr
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-4 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-2 box">
                    <div className="flex justify-center">
                      <div className="text-base font-medium leading-8">
                        To be Disbursed
                      </div>
                    </div>
                    <div className="mt-1 text-xl font-bold leading-8">
                      24.99 Cr
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-2 box">
                    <div className="flex justify-center">
                      <div className="text-base font-medium leading-8">
                        Remaining Fund
                      </div>
                    </div>
                    <div className="mt-1 text-xl font-bold leading-8">
                      17.34 Cr
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Targets */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-5">
            <div className="bg-black text-white py-2 text-center text-base">
              Targets
            </div>
            <div className="grid grid-cols-12 gap-2 mt-3 text-center">
              <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-2 box">
                    <div className="flex justify-center">
                      <div className="text-base font-medium leading-8">
                        Total Villages
                      </div>
                    </div>
                    <div className="mt-1 text-xl font-bold leading-8">105</div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-2 box">
                    <div className="flex justify-center">
                      <div className="text-base font-medium leading-8">
                        Total Beneficiaries
                      </div>
                    </div>
                    <div className="mt-1 text-xl font-bold leading-8">105</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-2 sm:col-span-6 lg:col-span-3">
            <div className="p-5 mt-2 intro-y box border-b-2 border-gray-500 h-full">
              <h2 className="text-lg font-medium truncate text-center mb-3">
                Thematic Area
              </h2>
              <div>
                <ReportPieChart height={150} />
              </div>
              <div className="mx-auto mt-2 w-52 sm:w-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-1 rounded-full bg-primary"></div>
                  <span className="truncate">Healthcare</span>
                  <span className="ml-auto font-medium">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-1 rounded-full bg-pending"></div>
                  <span className="truncate">Livelihoods</span>
                  <span className="ml-auto font-medium">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-1 rounded-full bg-warning"></div>
                  <span className="truncate">Sports & Culture</span>
                  <span className="ml-auto font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-2 sm:col-span-6 lg:col-span-3">
            <div className="p-5 mt-2 intro-y box border-b-2 border-gray-500">
              <h2 className="text-lg font-medium truncate text-center mb-3">
                Projects
              </h2>
              <div>
                <ReportDonutChart height={150} />
              </div>
              <div className="mx-auto mt-2 w-52 sm:w-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-1 rounded-full bg-primary"></div>
                  <span className="truncate">Girls Scholarship</span>
                  <span className="ml-auto font-medium">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-1 rounded-full bg-pending"></div>
                  <span className="truncate">Health Development</span>
                  <span className="ml-auto font-medium">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-1 rounded-full bg-warning"></div>
                  <span className="truncate">School Renovation</span>
                  <span className="ml-auto font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-2 sm:col-span-6 lg:col-span-3">
            <div className="p-5 mt-2 intro-y box border-b-2 border-gray-500">
              <h2 className="text-lg font-medium truncate text-center mb-3">
                Partners
              </h2>
              <div>
                <ReportPieChart height={150} />
              </div>
              <div className="mx-auto mt-2 w-52 sm:w-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-1 rounded-full bg-primary"></div>
                  <span className="truncate">TATA Foundation</span>
                  <span className="ml-auto font-medium">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-1 rounded-full bg-pending"></div>
                  <span className="truncate">Arya NGO</span>
                  <span className="ml-auto font-medium">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-1 rounded-full bg-warning"></div>
                  <span className="truncate">Fr Angel Institute</span>
                  <span className="ml-auto font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-2 sm:col-span-6 lg:col-span-3">
            <div className="p-5 mt-2 intro-y box border-b-2 border-gray-500">
              <h2 className="text-lg font-medium truncate text-center mb-3">
                Beneficiaries
              </h2>
              <div>
                <ReportBarChart1 height={150} />
              </div>
              <div className="mx-auto mt-2 w-52 sm:w-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-1 rounded-full bg-primary"></div>
                  <span className="truncate">Girls Scholarship</span>
                  <span className="ml-auto font-medium">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-1 rounded-full bg-pending"></div>
                  <span className="truncate">Health Development</span>
                  <span className="ml-auto font-medium">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-1 rounded-full bg-warning"></div>
                  <span className="truncate">School Renovation</span>
                  <span className="ml-auto font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>

          {/* END: Weekly Top Seller */}
          {/* BEGIN: Official Store */}
          <div className="col-span-12 mt-2 xl:col-span-3">
            <div className="p-5 intro-y box shadow-2xl">
              <h2 className="text-lg font-medium truncate text-center mb-3">
                Project Locations
              </h2>
              <div className="mt-2">
                <div className="intro-y">
                  <div className="flex items-center py-2 mb-3 box zoom-in">
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Mumbai</div>
                    </div>
                  </div>
                  <div className="flex items-center py-2 mb-3 box zoom-in">
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Bandra</div>
                    </div>
                  </div>
                  <div className="flex items-center py-2 mb-3 box zoom-in">
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Delhi</div>
                    </div>
                  </div>
                  <div className="flex items-center py-2 mb-3 box zoom-in">
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Jharkhand</div>
                    </div>
                  </div>
                  <div className="flex items-center py-2 mb-3 box zoom-in">
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">West Bengal</div>
                    </div>
                  </div>
                  <div className="flex items-center py-2 mb-3 box zoom-in">
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">Orissa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-2 xl:col-span-9">
            <div className="p-5 intro-y box">
              <div className="h-[350px] rounded-md bg-slate-200">
                <LeafletMap className="h-[350px] rounded-md bg-slate-200" />
              </div>
            </div>
          </div>
          {/* END: Official Store */}
          {/* BEGIN: General Report */}
          {/* <div className="grid grid-cols-12 col-span-12 gap-6 mt-8">
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="p-5 box zoom-in">
                <div className="flex items-center">
                  <div className="flex-none w-2/4">
                    <div className="text-lg font-medium truncate">
                      Target Sales
                    </div>
                    <div className="mt-1 text-slate-500">300 Sales</div>
                  </div>
                  <div className="relative flex-none ml-auto">
                    <ReportDonutChart1 width={90} height={90} />
                    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full font-medium">
                      20%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="p-5 box zoom-in">
                <div className="flex">
                  <div className="mr-3 text-lg font-medium truncate">
                    Social Media
                  </div>
                  <div className="flex items-center px-2 py-1 ml-auto text-xs truncate rounded-full cursor-pointer bg-slate-100 dark:bg-darkmode-400 text-slate-500">
                    320 Followers
                  </div>
                </div>
                <div className="mt-1">
                  <SimpleLineChart1 height={58} className="-ml-1" />
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="p-5 box zoom-in">
                <div className="flex items-center">
                  <div className="flex-none w-2/4">
                    <div className="text-lg font-medium truncate">
                      New Products
                    </div>
                    <div className="mt-1 text-slate-500">1450 Products</div>
                  </div>
                  <div className="relative flex-none ml-auto">
                    <ReportDonutChart1 width={90} height={90} />
                    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full font-medium">
                      45%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="p-5 box zoom-in">
                <div className="flex">
                  <div className="mr-3 text-lg font-medium truncate">
                    Posted Ads
                  </div>
                  <div className="flex items-center px-2 py-1 ml-auto text-xs truncate rounded-full cursor-pointer bg-slate-100 dark:bg-darkmode-400 text-slate-500">
                    180 Campaign
                  </div>
                </div>
                <div className="mt-1">
                  <SimpleLineChart1 height={58} className="-ml-1" />
                </div>
              </div>
            </div>
          </div> */}
          {/* END: General Report */}
          {/* BEGIN: Weekly Top Products */}
          {/* <div className="col-span-12 mt-6">
            <div className="items-center block h-10 intro-y sm:flex">
              <h2 className="mr-5 text-lg font-medium truncate">
                Weekly Top Products
              </h2>
              <div className="flex items-center mt-3 sm:ml-auto sm:mt-0">
                <Button className="flex items-center !box text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden w-4 h-4 mr-2 sm:block"
                  />
                  Export to Excel
                </Button>
                <Button className="flex items-center ml-3 !box text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden w-4 h-4 mr-2 sm:block"
                  />
                  Export to PDF
                </Button>
              </div>
            </div>
            <div className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0">
              <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th className="border-b-0 whitespace-nowrap">
                      IMAGES
                    </Table.Th>
                    <Table.Th className="border-b-0 whitespace-nowrap">
                      PRODUCT NAME
                    </Table.Th>
                    <Table.Th className="text-center border-b-0 whitespace-nowrap">
                      STOCK
                    </Table.Th>
                    <Table.Th className="text-center border-b-0 whitespace-nowrap">
                      STATUS
                    </Table.Th>
                    <Table.Th className="text-center border-b-0 whitespace-nowrap">
                      ACTIONS
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {_.take(fakerData, 4).map((faker, fakerKey) => (
                    <Table.Tr key={fakerKey} className="intro-x">
                      <Table.Td className="box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                        <div className="flex">
                          <div className="w-10 h-10 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                              src={faker.images[0]}
                              content={`Uploaded at ${faker.dates[0]}`}
                            />
                          </div>
                          <div className="w-10 h-10 -ml-5 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                              src={faker.images[1]}
                              content={`Uploaded at ${faker.dates[1]}`}
                            />
                          </div>
                          <div className="w-10 h-10 -ml-5 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                              src={faker.images[2]}
                              content={`Uploaded at ${faker.dates[2]}`}
                            />
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                        <a href="" className="font-medium whitespace-nowrap">
                          {faker.products[0].name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.products[0].category}
                        </div>
                      </Table.Td>
                      <Table.Td className="box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                        {faker.stocks[0]}
                      </Table.Td>
                      <Table.Td className="box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                        <div
                          className={clsx([
                            "flex items-center justify-center",
                            { "text-success": faker.trueFalse[0] },
                            { "text-danger": !faker.trueFalse[0] },
                          ])}
                        >
                          <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                          {faker.trueFalse[0] ? "Active" : "Inactive"}
                        </div>
                      </Table.Td>
                      <Table.Td
                        className={clsx([
                          "box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600",
                          "before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400",
                        ])}
                      >
                        <div className="flex items-center justify-center">
                          <a className="flex items-center mr-3" href="">
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-1"
                            />
                            Edit
                          </a>
                          <a className="flex items-center text-danger" href="">
                            <Lucide icon="Trash2" className="w-4 h-4 mr-1" />{" "}
                            Delete
                          </a>
                        </div>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
            <div className="flex flex-wrap items-center mt-3 intro-y sm:flex-row sm:flex-nowrap">
              <Pagination className="w-full sm:w-auto sm:mr-auto">
                <Pagination.Link>
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>1</Pagination.Link>
                <Pagination.Link active>2</Pagination.Link>
                <Pagination.Link>3</Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </Pagination.Link>
              </Pagination>
              <FormSelect className="w-20 mt-3 !box sm:mt-0">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </FormSelect>
            </div>
          </div> */}
          {/* END: Weekly Top Products */}
        </div>
      </div>
    </div>
  );
}

export default Main;
