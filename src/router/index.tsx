import { useRoutes } from "react-router-dom";
import DashboardOverview1 from "../pages/DashboardOverview1";
import DashboardOverview2 from "../pages/DashboardOverview2";
import DashboardOverview3 from "../pages/DashboardOverview3";
import DashboardOverview4 from "../pages/DashboardOverview4";
import Categories from "../pages/Categories";
import AddProduct from "../pages/AddProduct";
import ProductList from "../pages/ProductList";
import ProductGrid from "../pages/ProductGrid";
import TransactionList from "../pages/TransactionList";
import TransactionDetail from "../pages/TransactionDetail";
import SellerList from "../pages/SellerList";
import SellerDetail from "../pages/SellerDetail";
import Reviews from "../pages/Reviews";
import Inbox from "../pages/Inbox";
import FileManager from "../pages/FileManager";
import PointOfSale from "../pages/PointOfSale";
import Chat from "../pages/Chat";
import Post from "../pages/Post";
import Calendar from "../pages/Calendar";
import CrudDataList from "../pages/CrudDataList";
import CrudForm from "../pages/CrudForm";
import UsersLayout1 from "../pages/UsersLayout1";
import UsersLayout2 from "../pages/UsersLayout2";
import UsersLayout3 from "../pages/UsersLayout3";
import ProfileOverview1 from "../pages/ProfileOverview1";
import ProfileOverview2 from "../pages/ProfileOverview2";
import ProfileOverview3 from "../pages/ProfileOverview3";
import WizardLayout1 from "../pages/WizardLayout1";
import WizardLayout2 from "../pages/WizardLayout2";
import WizardLayout3 from "../pages/WizardLayout3";
import BlogLayout1 from "../pages/BlogLayout1";
import BlogLayout2 from "../pages/BlogLayout2";
import BlogLayout3 from "../pages/BlogLayout3";
import PricingLayout1 from "../pages/PricingLayout1";
import PricingLayout2 from "../pages/PricingLayout2";
import InvoiceLayout1 from "../pages/InvoiceLayout1";
import InvoiceLayout2 from "../pages/InvoiceLayout2";
import FaqLayout1 from "../pages/FaqLayout1";
import FaqLayout2 from "../pages/FaqLayout2";
import FaqLayout3 from "../pages/FaqLayout3";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile";
import ChangePassword from "../pages/ChangePassword";
import RegularTable from "../pages/RegularTable";
import Tabulator from "../pages/Tabulator";
import PlotList from "../pages/PlotList";
import ShowOnMap from "../pages/ShowOnMap";
import AddNewPlot from "../pages/AddNewPlot";
import Modal from "../pages/Modal";
import Slideover from "../pages/Slideover";
import Notification from "../pages/Notification";
import Tab from "../pages/Tab";
import Accordion from "../pages/Accordion";
import Button from "../pages/Button";
import Alert from "../pages/Alert";
import ProgressBar from "../pages/ProgressBar";
import Tooltip from "../pages/Tooltip";
import Dropdown from "../pages/Dropdown";
import Typography from "../pages/Typography";
import Icon from "../pages/Icon";
import LoadingIcon from "../pages/LoadingIcon";
import RegularForm from "../pages/RegularForm";
import Datepicker from "../pages/Datepicker";
import TomSelect from "../pages/TomSelect";
import FileUpload from "../pages/FileUpload";
import WysiwygEditor from "../pages/WysiwygEditor";
import Validation from "../pages/Validation";
import Chart from "../pages/Chart";
import Slider from "../pages/Slider";
import ImageZoom from "../pages/ImageZoom";

import Layout from "../themes";
import LandDashboard from "@/pages/LandDashboard";
import LitigationDashboard from "@/pages/LitigationDashboard";
import LitigationCaseList from "@/pages/LitigationCaselist";
import LitigationCaseRegistration from "@/pages/Project_add";
import Survey_Section from "@/pages/Survey_Section";
import ThreeDimensionMap from "@/pages/ShowOnMap/threeDimensionMap";

import CaseTypeList from "../pages/CaseTypeList";
import CourtTypes from "@/pages/CourtType";
import Departments from "@/pages/Departments";
import DocumentTypes from "@/pages/DocumentType";
import PlotTypes from "@/pages/PlotTypes";
import States from "@/pages/States";
import Districts from "@/pages/Districts";
import Tehasils from "@/pages/Tehasil";
import RL from "@/pages/RI";
import Villages from "@/pages/Villages";
import Projects_list_section from "@/pages/Projects_List";
import ProjectAdd from "@/pages/Project_add";
import Project_Escalation_List from "@/pages/ProjectEscalation";
import Project_chategory_section from "@/pages/ProjectChategory";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <DashboardOverview1 />,
        },
        {
          path: "/Project-categories",
          element: <Project_chategory_section />,
        },
        {
          path: "/Project-categories/projects-list",
          element: <Projects_list_section />,
        },
        {
          path: "/Project-categories/project-add",
          element: <ProjectAdd />,
        },
        {
          path: "/Project-categories/project-escalation",
          element: <Project_Escalation_List />,
        },
        {
          path: "dashboard-overview-2",
          element: <DashboardOverview2 />,
        },
        {
          path: "dashboard-overview-3",
          element: <DashboardOverview3 />,
        },
        {
          path: "dashboard-overview-4",
          element: <DashboardOverview4 />,
        },
        {
          path: "land",
          element: <LandDashboard />,
        },
        {
          path: "land/plot-list",
          element: <PlotList />,
        },
        {
          path: "land/add-new-plot",
          element: <AddNewPlot />,
        },
        {
          path: "master-data-case-type",
          element: <CaseTypeList />,
        },
        {
          path: "master-data-case-type/court-types",
          element: <CourtTypes />,
        },
        {
          path: "master-data-case-type/departments",
          element: <Departments />,
        },
        {
          path: "master-data-case-type/document-types",
          element: <DocumentTypes />,
        },
        {
          path: "master-data-case-type/plot-types",
          element: <PlotTypes />,
        },
        {
          path: "master-data-case-type/States",
          element: <States />,
        },
        {
          path: "master-data-case-type/districts",
          element: <Districts />,
        },
        {
          path: "master-data-case-type/tehasils",
          element: <Tehasils />,
        },
        {
          path: "master-data-case-type/rl",
          element: <RL />,
        },
        {
          path: "master-data-case-type/villages",
          element: <Villages />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        {
          path: "product-list",
          element: <ProductList />,
        },
        {
          path: "product-grid",
          element: <ProductGrid />,
        },
        {
          path: "transaction-list",
          element: <TransactionList />,
        },
        {
          path: "transaction-detail",
          element: <TransactionDetail />,
        },
        {
          path: "seller-list",
          element: <SellerList />,
        },
        {
          path: "seller-detail",
          element: <SellerDetail />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        },
        {
          path: "/litigation",
          element: <LitigationDashboard />,
        },
        {
          path: "/litigation/case-list",
          element: <LitigationCaseList />,
        },
        {
          path: "/litigation/add-case",
          element: <LitigationCaseRegistration />,
        },
        {
          path: "/survey-list",
          element: <Survey_Section />,
        },
        {
          path: "inbox",
          element: <Inbox />,
        },
        {
          path: "file-manager",
          element: <FileManager />,
        },
        {
          path: "point-of-sale",
          element: <PointOfSale />,
        },
        {
          path: "chat",
          element: <Chat />,
        },
        {
          path: "post",
          element: <Post />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "crud-data-list",
          element: <CrudDataList />,
        },
        {
          path: "crud-form",
          element: <CrudForm />,
        },
        {
          path: "users-layout-1",
          element: <UsersLayout1 />,
        },
        {
          path: "users-layout-2",
          element: <UsersLayout2 />,
        },
        {
          path: "users-layout-3",
          element: <UsersLayout3 />,
        },
        {
          path: "profile-overview-1",
          element: <ProfileOverview1 />,
        },
        {
          path: "profile-overview-2",
          element: <ProfileOverview2 />,
        },
        {
          path: "profile-overview-3",
          element: <ProfileOverview3 />,
        },
        {
          path: "wizard-layout-1",
          element: <WizardLayout1 />,
        },
        {
          path: "wizard-layout-2",
          element: <WizardLayout2 />,
        },
        {
          path: "wizard-layout-3",
          element: <WizardLayout3 />,
        },
        {
          path: "blog-layout-1",
          element: <BlogLayout1 />,
        },
        {
          path: "blog-layout-2",
          element: <BlogLayout2 />,
        },
        {
          path: "blog-layout-3",
          element: <BlogLayout3 />,
        },
        {
          path: "pricing-layout-1",
          element: <PricingLayout1 />,
        },
        {
          path: "pricing-layout-2",
          element: <PricingLayout2 />,
        },
        {
          path: "invoice-layout-1",
          element: <InvoiceLayout1 />,
        },
        {
          path: "invoice-layout-2",
          element: <InvoiceLayout2 />,
        },
        {
          path: "faq-layout-1",
          element: <FaqLayout1 />,
        },
        {
          path: "faq-layout-2",
          element: <FaqLayout2 />,
        },
        {
          path: "faq-layout-3",
          element: <FaqLayout3 />,
        },
        {
          path: "update-profile",
          element: <UpdateProfile />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
        },
        {
          path: "regular-table",
          element: <RegularTable />,
        },
        {
          path: "tabulator",
          element: <Tabulator />,
        },
        {
          path: "modal",
          element: <Modal />,
        },
        {
          path: "slideover",
          element: <Slideover />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "tab",
          element: <Tab />,
        },
        {
          path: "accordion",
          element: <Accordion />,
        },
        {
          path: "button",
          element: <Button />,
        },
        {
          path: "alert",
          element: <Alert />,
        },
        {
          path: "progress-bar",
          element: <ProgressBar />,
        },
        {
          path: "tooltip",
          element: <Tooltip />,
        },
        {
          path: "dropdown",
          element: <Dropdown />,
        },
        {
          path: "typography",
          element: <Typography />,
        },
        {
          path: "icon",
          element: <Icon />,
        },
        {
          path: "loading-icon",
          element: <LoadingIcon />,
        },
        {
          path: "regular-form",
          element: <RegularForm />,
        },
        {
          path: "datepicker",
          element: <Datepicker />,
        },
        {
          path: "tom-select",
          element: <TomSelect />,
        },
        {
          path: "file-upload",
          element: <FileUpload />,
        },
        {
          path: "wysiwyg-editor",
          element: <WysiwygEditor />,
        },
        {
          path: "validation",
          element: <Validation />,
        },
        {
          path: "chart",
          element: <Chart />,
        },
        {
          path: "slider",
          element: <Slider />,
        },
        {
          path: "image-zoom",
          element: <ImageZoom />,
        },
      ],
    },
    {
      path: "/show-on-map",
      element: <ShowOnMap />,
    },
    {
      path: "land/map",
      element: <ThreeDimensionMap />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
