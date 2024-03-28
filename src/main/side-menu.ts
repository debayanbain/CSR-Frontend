import { type Menu } from "@/stores/menuSlice";
// NOTE: To achive an active CSS class of every menu item, please add '/' begain the path name of the menu item.

const menu: Array<Menu | "divider"> = [
  { // For Dashboard......
    icon: "Home",
    title: "Dashboard",
    subMenu: [
      {
        icon: "Activity",
        pathname: "/",
        title: "Overview 1",
      },
      {
        icon: "Activity",
        pathname: "/dashboard-overview-2",
        title: "Overview 2",
      },
      {
        icon: "Activity",
        pathname: "/dashboard-overview-3",
        title: "Overview 3",
      },
      {
        icon: "Activity",
        pathname: "/dashboard-overview-4",
        title: "Overview 4",
      },
    ],
  },


  { // For Land Section
    icon: "MapPin",
    title: "Land Section",
    subMenu: [
      {
        icon: "Monitor",
        pathname: "/land",
        title: "Land Dashboard",
      },
      {
        icon: "List",
        pathname: "/land/plot-list",
        title: "Plot Lists",
      },
      {
        icon: "List",
        pathname: "/land/add-new-plot",
        title: "Add New Plot",
      },
    ],
  },

  { // For Litigation Section....
    icon: "Briefcase",
    title: "Litigation Section",
    subMenu: [
      {
        icon: "Monitor",
        pathname: "/litigation",
        title: "Litigation Dashboard",
      },
      {
        icon: "List",
        pathname: "/litigation/case-list",
        title: "Case Lists",
      },
      {
        icon: "FolderPlus",
        pathname: "/litigation/add-case",
        title: "Case Registration",
      },
    ],
  },

  {// For Survey Section
    icon: "Navigation",
    title: "Survey Section",
    subMenu: [
      {
        icon: "List",
        pathname: "/survey-list",
        title: " Survey Lists",
      }
    ]
  },

  { // For Master Data Section
    icon: "Layers",
    title: "Master Data",
    subMenu: [
      {
        icon: "Monitor",
        pathname: "/master-data-case-type",
        title: "Case Types",
      },
      {
        icon: "Award",
        pathname: "/master-data-case-type/court-types",
        title: "Court Types",
      },
      {
        icon: "Clipboard",
        pathname: "/master-data-case-type/departments",
        title: "Departments",
      },
      {
        icon: "FileText",
        pathname: "/master-data-case-type/document-types",
        title: "Document Types",
      },
      {
        icon: "Flag",
        pathname: "/master-data-case-type/plot-types",
        title: "Plot Types",
      },
      {
        icon: "Landmark",
        pathname: "/master-data-case-type/States",
        title: "States",
      },
      {
        icon: "MapPinned",
        pathname: "/master-data-case-type/districts",
        title: "Districts",
      },
      {
        icon: "ScrollText",
        pathname: "/master-data-case-type/tehasils",
        title: "Tehasils",
      },
      {
        icon: "TrafficCone",
        pathname: "/master-data-case-type/rl",
        title: "RL",
      },
      {
        icon: "Store",
        pathname: "/master-data-case-type/villages",
        title: "Villages",
      }
    ],
  },

  {
    icon: "Inbox",
    pathname: "/inbox",
    title: "Inbox",
  },
  {
    icon: "HardDrive",
    pathname: "/file-manager",
    title: "File Manager",
  },
  {
    icon: "CreditCard",
    pathname: "/point-of-sale",
    title: "Point of Sale",
  },
  {
    icon: "MessageSquare",
    pathname: "/chat",
    title: "Chat",
  },
  {
    icon: "FileText",
    pathname: "/post",
    title: "Post",
  },
  {
    icon: "Calendar",
    pathname: "/calendar",
    title: "Calendar",
  },
  "divider",
  {
    icon: "FilePenLine",
    title: "Crud",
    subMenu: [
      {
        icon: "Activity",
        pathname: "/crud-data-list",
        title: "Data List",
      },
      {
        icon: "Activity",
        pathname: "/crud-form",
        title: "Form",
      },
    ],
  },
  {
    icon: "Users",
    title: "Users",
    subMenu: [
      {
        icon: "Activity",
        pathname: "/users-layout-1",
        title: "Layout 1",
      },
      {
        icon: "Activity",
        pathname: "/users-layout-2",
        title: "Layout 2",
      },
      {
        icon: "Activity",
        pathname: "/users-layout-3",
        title: "Layout 3",
      },
    ],
  },
  {
    icon: "Trello",
    title: "Profile",
    subMenu: [
      {
        icon: "Activity",
        pathname: "/profile-overview-1",
        title: "Overview 1",
      },
      {
        icon: "Activity",
        pathname: "/profile-overview-2",
        title: "Overview 2",
      },
      {
        icon: "Activity",
        pathname: "/profile-overview-3",
        title: "Overview 3",
      },
    ],
  },
  {
    icon: "PanelsTopLeft",
    title: "Pages",
    subMenu: [
      {
        icon: "Activity",
        title: "Wizards",
        subMenu: [
          {
            icon: "Zap",
            pathname: "/wizard-layout-1",
            title: "Layout 1",
          },
          {
            icon: "Zap",
            pathname: "/wizard-layout-2",
            title: "Layout 2",
          },
          {
            icon: "Zap",
            pathname: "/wizard-layout-3",
            title: "Layout 3",
          },
        ],
      },
      {
        icon: "Activity",
        title: "Blog",
        subMenu: [
          {
            icon: "Zap",
            pathname: "/blog-layout-1",
            title: "Layout 1",
          },
          {
            icon: "Zap",
            pathname: "/blog-layout-2",
            title: "Layout 2",
          },
          {
            icon: "Zap",
            pathname: "/blog-layout-3",
            title: "Layout 3",
          },
        ],
      },
      {
        icon: "Activity",
        title: "Pricing",
        subMenu: [
          {
            icon: "Zap",
            pathname: "/pricing-layout-1",
            title: "Layout 1",
          },
          {
            icon: "Zap",
            pathname: "/pricing-layout-2",
            title: "Layout 2",
          },
        ],
      },
      {
        icon: "Activity",
        title: "Invoice",
        subMenu: [
          {
            icon: "Zap",
            pathname: "/invoice-layout-1",
            title: "Layout 1",
          },
          {
            icon: "Zap",
            pathname: "/invoice-layout-2",
            title: "Layout 2",
          },
        ],
      },
      {
        icon: "Activity",
        title: "FAQ",
        subMenu: [
          {
            icon: "Zap",
            pathname: "/faq-layout-1",
            title: "Layout 1",
          },
          {
            icon: "Zap",
            pathname: "/faq-layout-2",
            title: "Layout 2",
          },
          {
            icon: "Zap",
            pathname: "/faq-layout-3",
            title: "Layout 3",
          },
        ],
      },
      {
        icon: "Activity",
        pathname: "login",
        title: "Login",
      },
      {
        icon: "Activity",
        pathname: "register",
        title: "Register",
      },
      {
        icon: "Activity",
        pathname: "error-page",
        title: "Error Page",
      },
      {
        icon: "Activity",
        pathname: "/update-profile",
        title: "Update profile",
      },
      {
        icon: "Activity",
        pathname: "/change-password",
        title: "Change Password",
      },
    ],
  },
  "divider",
  {
    icon: "Inbox",
    title: "Components",
    subMenu: [
      {
        icon: "Activity",
        title: "Table",
        subMenu: [
          {
            icon: "Zap",
            pathname: "/regular-table",
            title: "Regular Table",
          },
          {
            icon: "Zap",
            pathname: "/tabulator",
            title: "Tabulator",
          },
        ],
      },
      {
        icon: "Activity",
        title: "Overlay",
        subMenu: [
          {
            icon: "Zap",
            pathname: "/modal",
            title: "Modal",
          },
          {
            icon: "Zap",
            pathname: "/slideover",
            title: "Slide Over",
          },
          {
            icon: "Zap",
            pathname: "/notification",
            title: "Notification",
          },
        ],
      },
      {
        icon: "Activity",
        pathname: "/tab",
        title: "Tab",
      },
      {
        icon: "Activity",
        pathname: "/accordion",
        title: "Accordion",
      },
      {
        icon: "Activity",
        pathname: "/button",
        title: "Button",
      },
      {
        icon: "Activity",
        pathname: "/alert",
        title: "Alert",
      },
      {
        icon: "Activity",
        pathname: "/progress-bar",
        title: "Progress Bar",
      },
      {
        icon: "Activity",
        pathname: "/tooltip",
        title: "Tooltip",
      },
      {
        icon: "Activity",
        pathname: "/dropdown",
        title: "Dropdown",
      },
      {
        icon: "Activity",
        pathname: "/typography",
        title: "Typography",
      },
      {
        icon: "Activity",
        pathname: "/icon",
        title: "Icon",
      },
      {
        icon: "Activity",
        pathname: "/loading-icon",
        title: "Loading Icon",
      },
    ],
  },
  {
    icon: "PanelLeft",
    title: "Forms",
    subMenu: [
      {
        icon: "Activity",
        pathname: "/regular-form",
        title: "Regular Form",
      },
      {
        icon: "Activity",
        pathname: "/datepicker",
        title: "Datepicker",
      },
      {
        icon: "Activity",
        pathname: "/tom-select",
        title: "Tom Select",
      },
      {
        icon: "Activity",
        pathname: "/file-upload",
        title: "File Upload",
      },
      {
        icon: "Activity",
        pathname: "/wysiwyg-editor",
        title: "Wysiwyg Editor",
      },
      {
        icon: "Activity",
        pathname: "/validation",
        title: "Validation",
      },
    ],
  },
  {
    icon: "HardDrive",
    title: "Widgets",
    subMenu: [
      {
        icon: "Activity",
        pathname: "/chart",
        title: "Chart",
      },
      {
        icon: "Activity",
        pathname: "/slider",
        title: "Slider",
      },
      {
        icon: "Activity",
        pathname: "/image-zoom",
        title: "Image Zoom",
      },
    ],
  },
];

export default menu;
