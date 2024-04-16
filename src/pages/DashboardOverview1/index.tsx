import _ from "lodash";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import fakerData from "@/utils/faker";
import Button from "@/components/Base/Button";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect } from "@/components/Base/Form";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
import Lucide from "@/components/Base/Lucide";
import Tippy from "@/components/Base/Tippy";
import Litepicker from "@/components/Base/Litepicker";
import ReportDonutChart from "@/components/ReportDonutChart";
import BudgetHeadChart from "@/components/BudgetHeadChart";
import ReportBarChart1 from "@/components/ReportBarChart1";
import ReportPieChart from "@/components/ReportPieChart";
import ExpenseHeadChart from "@/components/ExpenseHeadChart";
import SimpleLineChart1 from "@/components/SimpleLineChart1";
import ThematicAreaChart from "@/components/ThematicAreaChart";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import ActivityChart from "@/components/ActivityChart";
import ExpenditureAnanlysisChart from "@/components/ExpenditureAnanlysisChart";
import PerformanceAnanlysisChart from "@/components/PerformanceAnanlysisChart";
import ProjectHorizontalChart from "@/components/ProjectHorizontalChart";
import LeafletMap from "@/components/LeafletMap";
import { Menu } from "@/components/Base/Headless";
import Table from "@/components/Base/Table";
import { debounce } from "lodash";

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
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            {/* Budget */}
            <div className="col-span-12 xl:col-span-6">
              <div className="bg-primary text-white py-2 text-center text-base">
                Budget
              </div>
              <div className="grid grid-cols-12 gap-2 mt-3 text-center">
                <div className="col-span-12 md:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
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
                <div className="col-span-12 md:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
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
                <div className="col-span-12 md:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
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
                <div className="col-span-12 md:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
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
              <div className="grid grid-cols-12 gap-2 mt-3 text-center">
                <div className="col-span-12 intro-y">
                  <div className="p-5 mt-2 intro-y box border-b-2 border-gray-500 h-full">
                    <h2 className="text-lg font-medium truncate text-center mb-3">
                      Budget Heads
                    </h2>
                    <div className="flex justify-center items-center">
                      <div>
                        <BudgetHeadChart width={350} height={300} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Expense */}
            <div className="col-span-12 xl:col-span-6">
              <div className="bg-primary text-white py-2 text-center text-base">
                Expense
              </div>
              <div className="grid grid-cols-12 gap-2 mt-3 text-center">
                <div className="col-span-12 md:col-span-4 lg:col-span-6 xl:col-span-6 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
                    ])}
                  >
                    <div className="p-2 box flex divide-x-2">
                      <div className="flex-grow flex flex-col justify-center items-center">
                        <div className="text-base font-medium leading-8">
                          Disbursed
                        </div>
                        <div className="text-xl font-bold leading-8">
                          5.65 Cr
                        </div>
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
                <div className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
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
                <div className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
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
              <div className="grid grid-cols-12 gap-2 mt-3 text-center">
                <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-12">
                  <div className="p-5 mt-2 intro-y box border-b-2 border-gray-500 h-full">
                    <h2 className="text-lg font-medium truncate text-center mb-3">
                      Expense Heads
                    </h2>
                    <div className="flex justify-center items-center">
                        <ExpenseHeadChart width={350} height={300}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Targets */}
            <div className="col-span-12">
              <div className="bg-primary text-white py-2 text-center text-base">
                Targets
              </div>
              <div className="grid grid-cols-12 gap-2 mt-3 text-center">
                <div className="col-span-12 md:col-span-6 lg:col-span-6 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-[''] mb-2",
                    ])}
                  >
                    <div className="p-2 box border border-gray-500">
                      <div className="flex justify-center">
                        <div className="text-base font-medium leading-8">
                          Total Villages
                        </div>
                      </div>
                      <div className="mt-1 text-xl font-bold leading-8">
                        105
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
                    ])}
                  >
                    <div className="p-2 box border border-gray-500">
                      <div className="flex justify-center">
                        <div className="text-base font-medium leading-8">
                          Total Beneficiaries
                        </div>
                      </div>
                      <div className="mt-1 text-xl font-bold leading-8">
                        105
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activities */}
                <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-6">
                  <div className="p-5 intro-y box border-b-2 border-gray-500 h-full">
                    <h2 className="text-lg font-medium truncate text-center mb-3">
                      Activities
                    </h2>
                    <div className="flex justify-center items-center">
                        <ActivityChart height={300} width={350}/>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-6">
                  <div className="p-5 intro-y box border-b-2 border-gray-500 h-full">
                    <h2 className="text-lg font-medium truncate text-center mb-3">
                      Expanditure Analysis
                    </h2>
                    <div className="flex justify-center items-center">
                      <div>
                        <ExpenditureAnanlysisChart height={300} width={450} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Projects */}
            <div className="col-span-12 lg:col-span-12 xl:col-span-12">
              <div className="bg-primary text-white py-2 text-center text-base">
                Projects
              </div>
              <div className="grid grid-cols-12 gap-2 mt-3 text-center">
                <div className="col-span-12 md:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-[''] mb-2",
                    ])}
                  >
                    <div className="p-5 box border border-gray-500">
                      <div className="flex justify-center">
                        <div className="text-base font-medium leading-8">
                          Total Projects
                        </div>
                      </div>
                      <div className="mt-1 text-xl font-bold leading-8">
                        132
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
                    ])}
                  >
                    <div className="p-5 box border border-gray-500">
                      <div className="flex justify-center">
                        <div className="text-base font-medium leading-8">
                          Completed
                        </div>
                      </div>
                      <div className="mt-1 text-xl font-bold leading-8">12</div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-[''] mb-2",
                    ])}
                  >
                    <div className="p-5 box border border-gray-500">
                      <div className="flex justify-center">
                        <div className="text-base font-medium leading-8">
                          Pending
                        </div>
                      </div>
                      <div className="mt-1 text-xl font-bold leading-8">12</div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 xl:col-span-3 intro-y">
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:box before:absolute before:inset-x-3  before:h-full before:bg-slate-50 before:content-['']",
                    ])}
                  >
                    <div className="p-5 box border border-gray-500">
                      <div className="flex justify-center">
                        <div className="text-base font-medium leading-8">
                          Critical
                        </div>
                      </div>
                      <div className="mt-1 text-xl font-bold leading-8">10</div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 intro-y">
                  <div className="px-5 py-2 intro-y box border-b-2 border-gray-500 h-full">
                    <h2 className="text-lg font-medium truncate text-center mb-1">
                      Projects
                    </h2>
                    <div className="flex justify-center items-center">
                      <div>
                        <ProjectHorizontalChart width={337} height={145} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 intro-y">
                  <div className="px-5 py-2 intro-y box border-b-2 border-gray-500 h-full">
                    <h2 className="text-lg font-medium truncate text-center mb-1">
                      Program/Thematic Area
                    </h2>
                    <div className="flex justify-center items-center">
                      <div>
                        <PerformanceAnanlysisChart height={150} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 intro-y">
                  <div className="px-5 py-2 intro-y box border-b-2 border-gray-500 h-full">
                    <h2 className="text-lg font-medium truncate text-center mb-1">
                      Performance Analysis
                    </h2>
                    <div className="flex justify-center items-center">
                      <div>
                        <PerformanceAnanlysisChart height={150} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-span-12 mt-2 xl:col-span-3">
              <div className="p-5 intro-y box shadow-2xl">
                <h2 className="text-lg font-medium truncate text-center mb-3">
                  PMO Locations
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
