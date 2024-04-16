import _ from "lodash";
import clsx from "clsx";
import { useRef, useState, useEffect } from "react";
import fakerData from "@/utils/faker";
import Button from "@/components/Base/Button";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect, FormLabel } from "@/components/Base/Form";
import Lucide from "@/components/Base/Lucide";
import Tippy from "@/components/Base/Tippy";
import { Dialog, Menu } from "@/components/Base/Headless";
import Table from "@/components/Base/Table";

function Project_Category() {
    const [showingEntries, setshowingEntries] = useState({
        showing: 0,
        to: 0,
        total: 0,
    });
    const [deleteConfirmationModal, setDeleteConfirmationModal] = useState<boolean>(false);
    const [OpenEditModal, setOpenEditModal] = useState<boolean>(false);
    const [OpenAddModal, setOpenAddModal] = useState<boolean>(false);
    const addButtonRef = useRef(null);
    const editButtonRef = useRef(null);
    const deleteButtonRef = useRef(null);

    useEffect(() => {
        fakerData.forEach((faker, index) => {
            setshowingEntries((prev) => {
                return {
                    ...prev,
                    showing: index + 1,
                    to: index + 1,
                    total: index + 1,
                };
            })

        })
    }, [fakerData]);

    return (
        <>
            <h2 className="mt-10 text-lg font-medium intro-y">Project Category List</h2>
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
                    <Button variant="primary" className="mr-2 shadow-md" onClick={() => setOpenAddModal(true)}>
                        Add Product Category
                    </Button>
                    <Menu>
                        <Menu.Button as={Button} className="px-2 !box">
                            <span className="flex items-center justify-center w-5 h-5">
                                <Lucide icon="Plus" className="w-4 h-4" />
                            </span>
                        </Menu.Button>
                        <Menu.Items className="w-40">
                            <Menu.Item>
                                <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
                            </Menu.Item>
                            <Menu.Item>
                                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                                Excel
                            </Menu.Item>
                            <Menu.Item>
                                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                                PDF
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                    <div className="hidden mx-auto md:block text-slate-500">
                        {`Showing 1 to ${showingEntries.to} of ${showingEntries.total} entries`}
                    </div>
                    <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                        <div className="relative w-56 text-slate-500">
                            <FormInput
                                type="text"
                                className="w-56 pr-10 !box"
                                placeholder="Search..."
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <Lucide
                                icon="Search"
                                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                            />
                        </div>
                    </div>
                </div>
                {/* BEGIN: Data List */}
                <div className="col-span-12 overflow-auto intro-y lg:overflow-visible">
                    <Table className="border-spacing-y-[10px] border-separate -mt-2">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th className="border-b-0 whitespace-nowrap">
                                    ID
                                </Table.Th>
                                <Table.Th className="border-b-0 whitespace-nowrap">
                                    NAME
                                </Table.Th>
                                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                    SEQUENCE
                                </Table.Th>
                                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                    STATUS
                                </Table.Th>
                                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                    ADDED BY
                                </Table.Th>
                                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                    UPDATED BY
                                </Table.Th>
                                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                    CREATED AT
                                </Table.Th>
                                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                    UPDATED AT
                                </Table.Th>
                                <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                    ACTIONS
                                </Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {_.take(fakerData, 50).map((faker, fakerKey) => (
                                <Table.Tr key={fakerKey} className="intro-x">
                                    <Table.Td className="box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                        {fakerKey + 1}
                                    </Table.Td>
                                    <Table.Td className="box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                        <Tippy content="Click to redirect">
                                            <a href="" className="font-medium whitespace-nowrap">
                                                {faker.CsrCategories[0].name}
                                            </a>
                                        </Tippy>
                                    </Table.Td>
                                    <Table.Td className="box rounded-l-none rounded-r-none border-x-0 text-center shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                        {faker.CsrCategories[0].sequence}
                                    </Table.Td>
                                    <Table.Td className="box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                        <div
                                            className={clsx([
                                                "flex items-center justify-center",
                                                { "text-success": faker.CsrCategories[0].status[0] },
                                                { "text-danger": !faker.CsrCategories[0].status[0] },
                                            ])}
                                        >
                                            <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                                            {faker.CsrCategories[0].status[0] ? "Active" : "Inactive"}
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                        <div className="font-medium whitespace-nowrap">
                                            {faker.CsrCategories[0].added_by}
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                        <div className="font-medium whitespace-nowrap">
                                            {faker.CsrCategories[0].updated_by}
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                        <div className="font-medium whitespace-nowrap">
                                            {faker.CsrCategories[0].created_at}
                                        </div>
                                    </Table.Td>
                                    <Table.Td className="box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                        <div className="font-medium whitespace-nowrap">
                                            {faker.CsrCategories[0].updated_at}
                                        </div>
                                    </Table.Td>
                                    <Table.Td
                                        className={clsx([
                                            "box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600",
                                            "before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400",
                                        ])}
                                    >
                                        <div className="flex items-center justify-center">
                                            <Tippy
                                                content="Edit This Data"
                                            >
                                                <div className="flex items-center mr-3 cursor-pointer hover:text-green-600"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setOpenEditModal(true);
                                                    }
                                                    }>
                                                    <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />
                                                    Edit
                                                </div>
                                            </Tippy>

                                            <Tippy content="Delete This Data">
                                                <div
                                                    className="flex items-center text-danger cursor-pointer"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setDeleteConfirmationModal(true);
                                                    }}>
                                                    <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                                                </div>
                                            </Tippy>
                                        </div>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </div>
                {/* END: Data List */}
                {/* BEGIN: Pagination */}
                <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
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
                {/* END: Pagination */}
            </div>

            {/* BEGIN: Add Category Modal */}
            <Dialog
                size="lg"
                open={OpenAddModal}
                onClose={() => {
                    setOpenAddModal(false);
                }}
                initialFocus={addButtonRef}
            >
                <Dialog.Panel>
                    <div className="p-5 text-center">
                        <p className="text-xl font-bold">Add New Product Category</p>
                    </div>
                    <div className="p-5">
                        <FormLabel htmlFor="regular-form-1">Project Category Name</FormLabel>
                        <FormInput
                            id="regular-form-1"
                            type="text"
                            name="project_Category_name"
                            placeholder="Enter Project Category Name"
                        />
                    </div>

                    <div className="p-5">
                        <FormLabel htmlFor="regular-form-1">Sequence</FormLabel>
                        <FormInput
                            id="regular-form-1"
                            type="number"
                            name="sequence"
                            placeholder="Enter Number of Sequence"
                        />
                    </div>
                    <div className="p-5">
                        <FormLabel htmlFor="regular-form-4">Update Status</FormLabel>
                        <FormSelect
                            formSelectSize="md"
                            className="sm:mt-0 sm:mr-0"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </FormSelect>
                    </div>
                    <div className="flex justify-between px-5 pb-8 text-center">
                        <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={() => {
                                setOpenAddModal(false);
                            }}
                            className="w-24 mr-1"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            type="button"
                            className="w-24"
                            ref={deleteButtonRef}
                        >
                            Add
                        </Button>
                    </div>
                </Dialog.Panel>
            </Dialog>

            {/* END: Add Category Modal */}

            {/* BEGIN: EDIT Confirmation Modal */}
            <Dialog
                size="lg"
                open={OpenEditModal}
                onClose={() => {
                    setOpenEditModal(false);
                }}
                initialFocus={editButtonRef}
            >
                <Dialog.Panel>
                    <div className="p-5 text-center">
                        <p className="text-xl font-bold">Are you sure you want to edit this data?</p>
                    </div>
                    <div className="p-5">
                        <FormLabel htmlFor="regular-form-1">Project Category Name</FormLabel>
                        <FormInput
                            id="regular-form-1"
                            type="text"
                            name="project_Category_name"
                            placeholder="Enter Project Category Name"
                        />
                    </div>

                    <div className="p-5">
                        <FormLabel htmlFor="regular-form-1">Sequence</FormLabel>
                        <FormInput
                            id="regular-form-1"
                            type="number"
                            name="sequence"
                            placeholder="Enter Number of Sequence"
                        />
                    </div>
                    <div className="p-5">
                        <FormLabel htmlFor="regular-form-4">Update Status</FormLabel>
                        <FormSelect
                            formSelectSize="md"
                            className="sm:mt-0 sm:mr-0"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </FormSelect>
                    </div>
                    <div className="flex justify-between px-5 pb-8 text-center">
                        <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={() => {
                                setOpenEditModal(false);
                            }}
                            className="w-24 mr-1"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            type="button"
                            className="w-24"
                            ref={deleteButtonRef}
                        >
                            Update
                        </Button>
                    </div>
                </Dialog.Panel>
            </Dialog>

            {/* END: EDIT Confirmation Modal */}
            {/* BEGIN: Delete Confirmation Modal */}
            <Dialog
                open={deleteConfirmationModal}
                onClose={() => {
                    setDeleteConfirmationModal(false);
                }}
                initialFocus={deleteButtonRef}
            >
                <Dialog.Panel>
                    <div className="p-5 text-center">
                        <Lucide
                            icon="XCircle"
                            className="w-16 h-16 mx-auto mt-3 text-danger"
                        />
                        <div className="mt-5 text-3xl">Are you sure?</div>
                        <div className="mt-2 text-slate-500">
                            Do you really want to delete these records? <br />
                            This process cannot be undone.
                        </div>
                    </div>
                    <div className="flex justify-around px-5 pb-8 text-center">
                        <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={() => {
                                setDeleteConfirmationModal(false);
                            }}
                            className="w-24 mr-1"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="danger"
                            type="button"
                            className="w-24"
                            ref={deleteButtonRef}
                        >
                            Delete
                        </Button>
                    </div>
                </Dialog.Panel>
            </Dialog>
            {/* END: Delete Confirmation Modal */}
        </>
    );
}

export default Project_Category;
