// @ts-nocheck

import "@/assets/css/vendors/tabulator.css";
import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import Button from "@/components/Base/Button";
import { FormInput, FormSelect } from "@/components/Base/Form";
import * as xlsx from "xlsx";
import { useEffect, useRef, createRef, useState } from "react";
import { createIcons, icons } from "lucide";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import { createColumnsAndRows, stringToHTML } from "@/utils/helper";
import ViewEscalationModal from './View/View';
import Accordion from "@/components/AdvanceSearch_Accordion";
import ManageEscalation from "./ManageEscalation/index";

function Project_Escalation_List() {
  const [viewModalPreview, setViewModalPreview] = useState(false);
  const [manage, setManage] = useState(false);

  const tableRef = createRef<HTMLDivElement>();
  const tabulator = useRef<Tabulator>();
  const [filter, setFilter] = useState({
    field: "name",
    type: "like",
    value: "",
  });

  const columns = [
    "ID",
    "Thematic area",
    "Start Date",
    "End Date",
    "villages",
    "Status",
  ];
  const apiData = [
    {
      Project_Id: "OXBOW08042024",
      Thematic_area: "0.43 Acre",
      Start_date: "07-02-2024",
      End_date: "07-03-2024",
      villages: "Noida",
      Status: "Active",
    },
  ];
  const columnAndRows = createColumnsAndRows(apiData);

  const imageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/fakers/*.{jpg,jpeg,png,svg}", { eager: true });
  const initTabulator = () => {
    if (tableRef.current) {
      tabulator.current = new Tabulator(tableRef.current, {
        data: apiData,
        // ajaxURL:
        //   "https://esl.highlandenergynig.com/esl-lrms/land/plot-list-ajax",
        paginationMode: "remote",
        filterMode: "remote",
        sortMode: "local",
        printAsHtml: true,
        printStyled: true,
        pagination: true,
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 30, 40],
        renderHorizontal: "virtual",
        layout: "fitColumns",
        placeholder: "No matching records found",
        columns: [
          ...columnAndRows,
          {
            title: "Action",
            minWidth: 200,
            field: "actions",
            headerSort:false,
            responsive: 1,
            hozAlign: "left",
            layout: "fitColumns",
            headerHozAlign: "left",
            verticalAlign: "left",
            print: false,
            download: false,
            visible: true,
            formatter() {
              const buttonsDiv =
                stringToHTML(`<div class="flex lg:justify-left items-left">
                    <button class="view-button bg-yellow-400 py-1 px-2 mx-1 rounded">
                      View
                    </button>
                    <button class="edit-button bg-lime-400 py-1 px-2 mx-1 rounded">
                      Manage Case
                    </button>
                  </div>`);
              buttonsDiv.addEventListener("click", function (event) {
                const targetButton = (event.target as Element)?.closest("button");
                if (!targetButton) return;
                const buttonClass = targetButton.classList[0];

                switch (buttonClass) {
                  case "view-button":
                    setViewModalPreview(true);
                    break;
                  case "edit-button":
                    setManage(true);
                    break;
                  case "history-button":
                    console.log("History button clicked");
                    break;
                  case "map-button":
                    console.log("Show On Map button clicked");
                    break;
                  default:
                    break;
                }
              });

              return buttonsDiv;
            },
          },
        ],
      });
    }

    tabulator.current?.on("renderComplete", () => {
      createIcons({
        icons,
        attrs: {
          "stroke-width": 1.5,
        },
        nameAttr: "data-lucide",
      });
    });
  };

  // Redraw table onresize
  const reInitOnResizeWindow = () => {
    window.addEventListener("resize", () => {
      if (tabulator.current) {
        tabulator.current.redraw();
        createIcons({
          icons,
          attrs: {
            "stroke-width": 1.5,
          },
          nameAttr: "data-lucide",
        });
      }
    });
  };

  // Filter function
  const onFilter = () => {
    if (tabulator.current) {
      tabulator.current.setFilter(filter.field, filter.type, filter.value);
    }
  };

  // On reset filter
  const onResetFilter = () => {
    setFilter({
      ...filter,
      field: "name",
      type: "like",
      value: "",
    });
    onFilter();
  };

  // Export
  const onExportCsv = () => {
    if (tabulator.current) {
      tabulator.current.download("csv", "data.csv");
    }
  };

  const onExportJson = () => {
    if (tabulator.current) {
      tabulator.current.download("json", "data.json");
    }
  };

  const onExportXlsx = () => {
    if (tabulator.current) {
      (window as any).XLSX = xlsx;
      tabulator.current.download("xlsx", "data.xlsx", {
        sheetName: "Products",
      });
    }
  };

  const onExportHtml = () => {
    if (tabulator.current) {
      tabulator.current.download("html", "data.html", {
        style: true,
      });
    }
  };

  // Print
  const onPrint = () => {
    if (tabulator.current) {
      tabulator.current.print();
    }
  };

  useEffect(() => {
    initTabulator();
    reInitOnResizeWindow();
  }, []);

  return (
    <>
      <ViewEscalationModal
        isOpens={viewModalPreview}
        onCloses={() => setViewModalPreview(false)}/>

      <ManageEscalation isOpens={manage}
        onCloses={() => setManage(false)}/>

      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Projects Escalation List</h2>
      </div>
      {/* BEGIN: HTML Table Data */}
      <div className="p-5 mt-5 intro-y box">
        <Accordion />
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start">
          <form
            id="tabulator-html-filter-form"
            className="xl:flex sm:mr-auto"
            onSubmit={(e) => {
              e.preventDefault();
              onFilter();
            }}
          >
            <div className="items-center mt-2 sm:flex sm:mr-4 xl:mt-0">
              <label className="flex-none w-12 mr-2 xl:w-auto xl:flex-initial">
              Keyword
              </label>
              <FormInput
                id="tabulator-html-filter-value"
                value={filter.value}
                onChange={(e) => {
                  setFilter({
                    ...filter,
                    value: e.target.value,
                  });
                }}
                type="text"
                className="mt-2 sm:w-40 2xl:w-full sm:mt-0"
                placeholder="Search..."
              />
            </div>

            <div className="mt-2 xl:mt-0">
              <Button
                id="tabulator-html-filter-go"
                variant="primary"
                type="button"
                className="w-full sm:w-16"
                onClick={onFilter}
              >
                Go
              </Button>
              <Button
                id="tabulator-html-filter-reset"
                variant="secondary"
                type="button"
                className="w-full mt-2 sm:w-16 sm:mt-0 sm:ml-1"
                onClick={onResetFilter}
              >
                Reset
              </Button>
            </div>
          </form>

          <div className="flex mt-5 sm:mt-0">
            <Button
              id="tabulator-print"
              variant="outline-secondary"
              className="w-1/2 mr-2 sm:w-auto"
              onClick={onPrint}
            >
              <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
            </Button>
            <Menu className="w-1/2 sm:w-auto">
              <Menu.Button
                as={Button}
                variant="outline-secondary"
                className="w-full sm:w-auto"
              >
                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                <Lucide
                  icon="ChevronDown"
                  className="w-4 h-4 ml-auto sm:ml-2"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item onClick={onExportCsv}>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export CSV
                </Menu.Item>
                <Menu.Item onClick={onExportJson}>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                  JSON
                </Menu.Item>
                <Menu.Item onClick={onExportXlsx}>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                  XLSX
                </Menu.Item>
                <Menu.Item onClick={onExportHtml}>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                  HTML
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div id="plot-list" ref={tableRef} className="mt-5"></div>
        </div>
      </div>
      {/* END: HTML Table Data */}
    </>
  );
}

export default Project_Escalation_List;

