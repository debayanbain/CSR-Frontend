import { type Menu } from "@/stores/menuSlice";
// NOTE: To achive an active CSS class of every menu item, please add '/' begain the path name of the menu item.

const menu: Array<Menu | "divider"> = [
  { // For Dashboard......
    icon: "Home",
    title: "Dashboard",
    pathname: "/"
  },


  { // For Projects Section...
    icon: "FolderKanban",
    title: "Projects",
    subMenu: [
      {
        icon: "List",
        pathname: "/projects-list",
        title: "Projects List",
      },
      {
        icon: "FolderPlus",
        pathname: "/projects-list/project-add",
        title: "Projects Add",
      },
      {
        icon: "FolderKanban",
        pathname: "/projects-list/project-escalation",
        title: "Projects Escalation",
      },
    ],
  },

  { // For Audits Section....
    icon: "NotebookPen",
    title: "Audits",
    subMenu: [
      {
        icon: "ListChecks",
        pathname: "#",
        title: "Audit List",
      }
    ],
  },

  {// For Map Details Section...
    icon: "Map",
    pathname: "#",
    title: "Map Details",
  },

  { // For Audits Section....
    icon: "Cog",
    title: "MIS",
    subMenu: [
      {
        icon: "ListChecks",
        title: "Investment & Budgeting",
        subMenu: [
          {
            icon: "FolderKanban",
            pathname: "#",
            title: "Budget V/s Spend",
          },
          {
            icon: "FolderKanban",
            pathname: "#",
            title: "GL Analysis",
          },
          {
            icon: "FolderKanban",
            pathname: "#",
            title: "Provision",
          },
        ]
      },
      {
        icon: "ListChecks",
        title: "CSR Policy & compliance",
        subMenu: [
          {
            icon: "FolderKanban",
            pathname: "#",
            title: "CSR Policy",
          },
          {
            icon: "FolderKanban",
            pathname: "#",
            title: "SOP & DOA",
          },
          {
            icon: "FolderKanban",
            pathname: "#",
            title: "Due diligence",
          },
          {
            icon: "FolderKanban",
            pathname: "#",
            title: "CSR Acts & Rules",
          },
        ]
      },
      {
        icon: "ListChecks",
        pathname: "#",
        title: "Payment & accounting",
        subMenu : [
            {
              icon: "FolderKanban",
              pathname: "#",
              title: "Invoices",
            },
        ]
      },
      {
        icon: "ListChecks",
        pathname: "#",
        title: "Satckholder engagement",
      },
      {
        icon: "ListChecks",
        pathname: "#",
        title: "Performance evaluation (MOMs)",
      },
      {
        icon: "ListChecks",
        pathname: "#",
        title: "Awards",
      },
      {
        icon: "ListChecks",
        pathname: "#",
        title: "Baseline/ Need assessment",
      },
      {
        icon: "ListChecks",
        pathname: "#",
        title: "Convergence/ Leverage",
      },
      {
        icon: "ListChecks",
        pathname: "#",
        title: "CSR reports",
      },
    ],
  },

  {
    icon: "Anvil",
    pathname: "#",
    title: "Master Data",
  },

  // {
  //   icon: "HardDrive",
  //   pathname: "/file-manager",
  //   title: "File Manager",
  // },
  // {
  //   icon: "CreditCard",
  //   pathname: "/point-of-sale",
  //   title: "Point of Sale",
  // },
  // {
  //   icon: "MessageSquare",
  //   pathname: "/chat",
  //   title: "Chat",
  // },
  // {
  //   icon: "FileText",
  //   pathname: "/post",
  //   title: "Post",
  // },
  // {
  //   icon: "Calendar",
  //   pathname: "/calendar",
  //   title: "Calendar",
  // },
  // "divider",
  // {
  //   icon: "FilePenLine",
  //   title: "Crud",
  //   subMenu: [
  //     {
  //       icon: "Activity",
  //       pathname: "/crud-data-list",
  //       title: "Data List",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/crud-form",
  //       title: "Form",
  //     },
  //   ],
  // },
  // {
  //   icon: "Users",
  //   title: "Users",
  //   subMenu: [
  //     {
  //       icon: "Activity",
  //       pathname: "/users-layout-1",
  //       title: "Layout 1",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/users-layout-2",
  //       title: "Layout 2",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/users-layout-3",
  //       title: "Layout 3",
  //     },
  //   ],
  // },
  // {
  //   icon: "Trello",
  //   title: "Profile",
  //   subMenu: [
  //     {
  //       icon: "Activity",
  //       pathname: "/profile-overview-1",
  //       title: "Overview 1",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/profile-overview-2",
  //       title: "Overview 2",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/profile-overview-3",
  //       title: "Overview 3",
  //     },
  //   ],
  // },
  // {
  //   icon: "PanelsTopLeft",
  //   title: "Pages",
  //   subMenu: [
  //     {
  //       icon: "Activity",
  //       title: "Wizards",
  //       subMenu: [
  //         {
  //           icon: "Zap",
  //           pathname: "/wizard-layout-1",
  //           title: "Layout 1",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/wizard-layout-2",
  //           title: "Layout 2",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/wizard-layout-3",
  //           title: "Layout 3",
  //         },
  //       ],
  //     },
  //     {
  //       icon: "Activity",
  //       title: "Blog",
  //       subMenu: [
  //         {
  //           icon: "Zap",
  //           pathname: "/blog-layout-1",
  //           title: "Layout 1",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/blog-layout-2",
  //           title: "Layout 2",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/blog-layout-3",
  //           title: "Layout 3",
  //         },
  //       ],
  //     },
  //     {
  //       icon: "Activity",
  //       title: "Pricing",
  //       subMenu: [
  //         {
  //           icon: "Zap",
  //           pathname: "/pricing-layout-1",
  //           title: "Layout 1",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/pricing-layout-2",
  //           title: "Layout 2",
  //         },
  //       ],
  //     },
  //     {
  //       icon: "Activity",
  //       title: "Invoice",
  //       subMenu: [
  //         {
  //           icon: "Zap",
  //           pathname: "/invoice-layout-1",
  //           title: "Layout 1",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/invoice-layout-2",
  //           title: "Layout 2",
  //         },
  //       ],
  //     },
  //     {
  //       icon: "Activity",
  //       title: "FAQ",
  //       subMenu: [
  //         {
  //           icon: "Zap",
  //           pathname: "/faq-layout-1",
  //           title: "Layout 1",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/faq-layout-2",
  //           title: "Layout 2",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/faq-layout-3",
  //           title: "Layout 3",
  //         },
  //       ],
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "login",
  //       title: "Login",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "register",
  //       title: "Register",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "error-page",
  //       title: "Error Page",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/update-profile",
  //       title: "Update profile",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/change-password",
  //       title: "Change Password",
  //     },
  //   ],
  // },
  // "divider",
  // {
  //   icon: "Inbox",
  //   title: "Components",
  //   subMenu: [
  //     {
  //       icon: "Activity",
  //       title: "Table",
  //       subMenu: [
  //         {
  //           icon: "Zap",
  //           pathname: "/regular-table",
  //           title: "Regular Table",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/tabulator",
  //           title: "Tabulator",
  //         },
  //       ],
  //     },
  //     {
  //       icon: "Activity",
  //       title: "Overlay",
  //       subMenu: [
  //         {
  //           icon: "Zap",
  //           pathname: "/modal",
  //           title: "Modal",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/slideover",
  //           title: "Slide Over",
  //         },
  //         {
  //           icon: "Zap",
  //           pathname: "/notification",
  //           title: "Notification",
  //         },
  //       ],
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/tab",
  //       title: "Tab",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/accordion",
  //       title: "Accordion",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/button",
  //       title: "Button",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/alert",
  //       title: "Alert",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/progress-bar",
  //       title: "Progress Bar",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/tooltip",
  //       title: "Tooltip",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/dropdown",
  //       title: "Dropdown",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/typography",
  //       title: "Typography",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/icon",
  //       title: "Icon",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/loading-icon",
  //       title: "Loading Icon",
  //     },
  //   ],
  // },
  // {
  //   icon: "PanelLeft",
  //   title: "Forms",
  //   subMenu: [
  //     {
  //       icon: "Activity",
  //       pathname: "/regular-form",
  //       title: "Regular Form",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/datepicker",
  //       title: "Datepicker",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/tom-select",
  //       title: "Tom Select",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/file-upload",
  //       title: "File Upload",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/wysiwyg-editor",
  //       title: "Wysiwyg Editor",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/validation",
  //       title: "Validation",
  //     },
  //   ],
  // },
  // {
  //   icon: "HardDrive",
  //   title: "Widgets",
  //   subMenu: [
  //     {
  //       icon: "Activity",
  //       pathname: "/chart",
  //       title: "Chart",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/slider",
  //       title: "Slider",
  //     },
  //     {
  //       icon: "Activity",
  //       pathname: "/image-zoom",
  //       title: "Image Zoom",
  //     },
  //   ],
  // },
];

export default menu;
