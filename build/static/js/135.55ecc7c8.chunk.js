(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[135],{1060:function(e,a,l){"use strict";l.r(a);var r=l(0),s=l.n(r),t=l(3),i=l(32),n=l(21),c=l(31),u=l(13),o=l(47),p=l.n(o),b=l(645),d=l(1),y=function e(a){var l=a.item,t=a.tag,i=a.linkClassName,u=a.className,o=a.subMenuClassNames,b=a.activeMenuItems,y=a.toggleMenu,m=t,g=Object(r.useState)(b.includes(l.key)),h=Object(n.a)(g,2),j=h[0],v=h[1];Object(r.useEffect)((function(){v(b.includes(l.key))}),[b,l]);return Object(d.jsxs)(m,{className:p()("dropdown",u,b.includes(l.key)?"active":""),children:[Object(d.jsxs)(c.b,{to:"/#",onClick:function(e){e.preventDefault();var a=!j;return v(a),y&&y(l,a),!1},"data-menu-key":l.key,className:p()("dropdown-toggle","arrow-none",i,{active:b.includes(l.key)}),id:l.key,role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":j,children:[l.icon&&Object(d.jsx)("i",{className:l.icon}),Object(d.jsxs)("span",{children:[" ",l.label," "]}),Object(d.jsx)("div",{className:"arrow-down"})]}),l.children?Object(d.jsx)("div",{className:p()(o,{show:j}),"aria-labelledby":l.key,children:l.children.map((function(a,l){return Object(d.jsx)(s.a.Fragment,{children:a.children?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(e,{item:a,tag:"div",linkClassName:p()("dropdown-item",b.includes(a.key)?"active":""),activeMenuItems:b,className:"",subMenuClassNames:"dropdown-menu",toggleMenu:y})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(k,{item:a,className:p()("dropdown-item",{active:b.includes(a.key)})})})},l)}))}):null]})},m=function(e){var a=e.item,l=e.className,r=e.linkClassName;return Object(d.jsx)("li",{className:p()("nav-item",l),children:Object(d.jsx)(k,{item:a,className:r})})},k=function(e){var a=e.item,l=e.className;return Object(d.jsxs)(c.b,{to:a.url,target:a.target,className:p()(l),"data-menu-key":a.key,children:[a.icon&&Object(d.jsx)("i",{className:a.icon}),Object(d.jsxs)("span",{children:[" ",a.label," "]})]})},g=Object(u.h)((function(e){var a=e.menuItems,l=e.location,c=Object(r.useRef)(null),u=Object(r.useState)([]),o=Object(n.a)(u,2),p=o[0],k=o[1],g=Object(r.useState)([]),h=Object(n.a)(g,2),j=h[0],v=h[1],f=function(e,a){a&&v([e.key].concat(Object(i.a)(Object(b.a)(p,e))))},K=Object(r.useCallback)((function(){var e=document.getElementById("main-side-menu"),a=null;if(e){for(var r=e.getElementsByTagName("a"),s=0;s<r.length;++s)if(l.pathname===r[s].pathname){a=r[s];break}if(a){var t=a.getAttribute("data-menu-key"),n=Object(b.b)(p,t);n&&v([n.key].concat(Object(i.a)(Object(b.a)(p,n))))}}}),[l.pathname,p]);return Object(r.useEffect)((function(){var e=a?a.filter((function(e){return e.isTitle?null:e})):[],l=window.screen.width>1366?7:5;if(e.length>l){var r=e.slice(0,l),s=e.slice(l,a.length).map((function(e){return Object(t.a)(Object(t.a)({},e),{},{parentKey:"more"})})),n={id:e.length+1,path:"/",label:"More",icon:"uil-ellipsis-h",key:"more",children:s};e=[].concat(Object(i.a)(r),[n]),k(e)}}),[a]),Object(r.useEffect)((function(){p&&p.length>0&&K()}),[K,p]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:"navbar-nav",ref:c,id:"main-side-menu",children:(p||[]).map((function(e,a){return Object(d.jsx)(s.a.Fragment,{children:e.children?Object(d.jsx)(y,{item:e,tag:"li",className:"nav-item",subMenuClassNames:"dropdown-menu",activeMenuItems:j,linkClassName:"nav-link",toggleMenu:f}):Object(d.jsx)(m,{item:e,linkClassName:"nav-link dropdown-toggle arrow-none",className:{active:j.includes(e.key)}})},a)}))})})})),h=l(574);a.default=function(e){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsx)("div",{className:"topnav",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("nav",{className:p()("navbar","navbar-expand-lg","topnav-menu","navbar-dark"),children:Object(d.jsx)(h.a,{in:e.isMenuOpened,className:"navbar-collapse",id:"topnav-menu-content",children:Object(d.jsx)("div",{children:Object(d.jsx)(g,{menuItems:Object(b.c)()})})})})})})})}},645:function(e,a,l){"use strict";l.d(a,"c",(function(){return t})),l.d(a,"a",(function(){return i})),l.d(a,"b",(function(){return n}));var r=l(32),s=[{key:"navigation",label:"Navigation",isTitle:!0},{key:"dashboards",label:"Dashboards",isTitle:!1,icon:"uil-home-alt",badge:{variant:"success",text:"4"},children:[{key:"ds-analytics",label:"Analytics",url:"/dashboard/analytics",parentKey:"dashboards"},{key:"ds-crm",label:"CRM",url:"/dashboard/crm",parentKey:"dashboards"},{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"},{key:"ds-project",label:"Projects",url:"/dashboard/project",parentKey:"dashboards"}]},{key:"apps",label:"Apps",isTitle:!0},{key:"apps-calendar",label:"Calendar",isTitle:!1,icon:"uil-calender",url:"/apps/calendar"},{key:"apps-chat",label:"Chat",isTitle:!1,icon:"uil-comments-alt",url:"/apps/chat"},{key:"apps-ecommerce",label:"Ecommerce",isTitle:!1,icon:"uil-store",children:[{key:"ecommerce-products",label:"Products",url:"/apps/ecommerce/products",parentKey:"apps-ecommerce"},{key:"ecommerce-details",label:"Products Details",url:"/apps/ecommerce/details",parentKey:"apps-ecommerce"},{key:"ecommerce-orders",label:"Orders",url:"/apps/ecommerce/orders",parentKey:"apps-ecommerce"},{key:"ecommerce-order-details",label:"Order Details",url:"/apps/ecommerce/order/details",parentKey:"apps-ecommerce"},{key:"ecommerce-customers",label:"Customers",url:"/apps/ecommerce/customers",parentKey:"apps-ecommerce"},{key:"ecommerce-shopping-cart",label:"Shopping Cart",url:"/apps/ecommerce/shopping-cart",parentKey:"apps-ecommerce"},{key:"ecommerce-checkout",label:"Checkout",url:"/apps/ecommerce/checkout",parentKey:"apps-ecommerce"},{key:"ecommerce-sellers",label:"Sellers",url:"/apps/ecommerce/sellers",parentKey:"apps-ecommerce"}]},{key:"apps-email",label:"Email",isTitle:!1,icon:"uil-envelope",children:[{key:"email-inbox",label:"Inbox",url:"/apps/email/inbox",parentKey:"apps-email"},{key:"email-read-email",label:"Read Email",url:"/apps/email/details",parentKey:"apps-email"}]},{key:"apps-projects",label:"Projects",isTitle:!1,icon:"uil-briefcase",children:[{key:"project-list",label:"List",url:"/apps/projects/list",parentKey:"apps-projects"},{key:"project-details",label:"Details",url:"/apps/projects/:id/details",parentKey:"apps-projects"},{key:"project-gantt",label:"Gantt",url:"/apps/projects/gantt",badge:{variant:"light-lighten",text:"New"},parentKey:"apps-projects"},{key:"project-create-project",label:"Create Project",url:"/apps/projects/new",badge:{variant:"success-lighten",text:"New"},parentKey:"apps-projects"}]},{key:"apps-social",label:"Social Feed",isTitle:!1,icon:"uil-rss",url:"/apps/social"},{key:"apps-tasks",label:"Tasks",isTitle:!1,icon:"uil-clipboard-alt",children:[{key:"task-list",label:"List",url:"/apps/tasks/list",parentKey:"apps-tasks"},{key:"task-details",label:"Details",url:"/apps/tasks/details",parentKey:"apps-tasks"},{key:"task-kanban",label:"Kanban Board",url:"/apps/tasks/kanban",parentKey:"apps-tasks"}]},{key:"apps-file-manager",label:"File Manager",isTitle:!1,icon:"uil-folder-plus",url:"/apps/file"},{key:"custom",label:"Custom",isTitle:!0},{key:"pages",label:"Pages",isTitle:!1,icon:"uil-copy-alt",children:[{key:"page-profile",label:"Profile",url:"/pages/profile",parentKey:"pages"},{key:"page-profile2",label:"Profile 2",url:"/pages/profile2",parentKey:"pages"},{key:"page-invoice",label:"Invoice",url:"/pages/invoice",parentKey:"pages"},{key:"page-faq",label:"FAQ",url:"/pages/faq",parentKey:"pages"},{key:"page-pricing",label:"Pricing",url:"/pages/pricing",parentKey:"pages"},{key:"page-maintenance",label:"Maintenance",url:"/maintenance",target:"_blank",parentKey:"pages"},{key:"page-error-404",label:"Error - 404",url:"/error-404",parentKey:"pages"},{key:"page-error-404-alt",label:"Error - 404-alt",url:"/pages/error-404-alt",parentKey:"pages"},{key:"page-error-500",label:"Error - 500",url:"/error-500",parentKey:"pages"},{key:"page-starter",label:"Starter Page",url:"/pages/starter",parentKey:"pages"},{key:"page-preloader",label:"With Preloader",url:"/pages/preloader",parentKey:"pages"},{key:"page-timeline",label:"Timeline",url:"/pages/timeline",parentKey:"pages"}]},{key:"landing",label:"Landing",isTitle:!1,icon:"uil-globe",url:"/landing",target:"_blank",badge:{variant:"light-lighten",text:"New"}},{key:"components",label:"Components",isTitle:!0},{key:"base-ui",label:"Base UI",isTitle:!1,icon:"uil-box",children:[{key:"base-ui-accordions",label:"Accordions",url:"/ui/accordions",parentKey:"base-ui"},{key:"base-ui-alerts",label:"Alerts",url:"/ui/alerts",parentKey:"base-ui"},{key:"base-ui-avatars",label:"Avatars",url:"/ui/avatars",parentKey:"base-ui"},{key:"base-ui-badges",label:"Badges",url:"/ui/badges",parentKey:"base-ui"},{key:"base-ui-breadcrumb",label:"Breadcrumb",url:"/ui/breadcrumb",parentKey:"base-ui"},{key:"base-ui-buttons",label:"Buttons",url:"/ui/buttons",parentKey:"base-ui"},{key:"base-ui-cards",label:"Cards",url:"/ui/cards",parentKey:"base-ui"},{key:"base-ui-carousel",label:"Carousel",url:"/ui/carousel",parentKey:"base-ui"},{key:"base-ui-dropdown",label:"Dropdowns",url:"/ui/dropdowns",parentKey:"base-ui"},{key:"base-ui-embedvideo",label:"Embed Video",url:"/ui/embedvideo",parentKey:"base-ui"},{key:"base-ui-grid",label:"Grid",url:"/ui/grid",parentKey:"base-ui"},{key:"base-ui-listgroups",label:"List Groups",url:"/ui/listgroups",parentKey:"base-ui"},{key:"base-ui-modals",label:"Modals",url:"/ui/modals",parentKey:"base-ui"},{key:"base-ui-notifications",label:"Notifications",url:"/ui/notifications",parentKey:"base-ui"},{key:"base-ui-offcanvas",label:"Offcanvas",url:"/ui/offcanvas",parentKey:"base-ui"},{key:"base-ui-paginations",label:"Paginations",url:"/ui/paginations",parentKey:"base-ui"},{key:"base-ui-popovers",label:"Popovers",url:"/ui/popovers",parentKey:"base-ui"},{key:"base-ui-progress",label:"Progress",url:"/ui/progress",parentKey:"base-ui"},{key:"base-ui-ribbons",label:"Ribbons",url:"/ui/ribbons",parentKey:"base-ui"},{key:"base-ui-spinners",label:"Spinners",url:"/ui/spinners",parentKey:"base-ui"},{key:"base-ui-tabs",label:"Tabs",url:"/ui/tabs",parentKey:"base-ui"},{key:"base-ui-tooltips",label:"Tooltips",url:"/ui/tooltips",parentKey:"base-ui"},{key:"base-ui-typography",label:"Typography",url:"/ui/typography",parentKey:"base-ui"}]},{key:"extended-ui",label:"Extended UI",isTitle:!1,icon:"uil-package",children:[{key:"extended-ui-dragdrop",label:"Drag and Drop",url:"/ui/dragdrop",parentKey:"extended-ui"},{key:"extended-ui-rangesliders",label:"Range Sliders",url:"/ui/rangesliders",parentKey:"extended-ui"},{key:"extended-ui-ratings",label:"Ratings",url:"/ui/ratings",parentKey:"extended-ui"}]},{key:"widgets",label:"Widgets",isTitle:!1,icon:"uil-layer-group",url:"/ui/widgets"},{key:"icons",label:"Icons",isTitle:!1,icon:"uil-streering",children:[{key:"icon-dripicons",label:"Dripicons",url:"/ui/icons/dripicons",parentKey:"icons"},{key:"icon-mdiicons",label:"Material Design",url:"/ui/icons/mdi",parentKey:"icons"},{key:"icon-unicons",label:"Unicons",url:"/ui/icons/unicons",parentKey:"icons"}]},{key:"forms",label:"Forms",isTitle:!1,icon:"uil-document-layout-center",children:[{key:"form-basic",label:"Basic Elements",url:"/ui/forms/basic",parentKey:"forms"},{key:"form-advanced",label:"Form Advanced",url:"/ui/forms/advanced",parentKey:"forms"},{key:"form-validation",label:"Validation",url:"/ui/forms/validation",parentKey:"forms"},{key:"form-wizard",label:"Wizard",url:"/ui/forms/wizard",parentKey:"forms"},{key:"form-upload",label:"File Upload",url:"/ui/forms/upload",parentKey:"forms"},{key:"form-editors",label:"Editors",url:"/ui/forms/editors   ",parentKey:"forms"}]},{key:"charts",label:"Charts",isTitle:!1,icon:"uil-chart",children:[{key:"chart-apex",label:"Apex Charts",url:"/ui/charts/apex",parentKey:"charts"},{key:"chart-brite",label:"Brite Charts",url:"/ui/charts/brite",parentKey:"charts"},{key:"chart-chartjs",label:"Chartjs",url:"/ui/charts/chartjs",parentKey:"charts"}]},{key:"tables",label:"Tables",isTitle:!1,icon:"uil-table",children:[{key:"table-basic",label:"Basic Tables",url:"/ui/tables/basic",parentKey:"tables"},{key:"table-advanced",label:"Advanced Tables",url:"/ui/tables/advanced",parentKey:"tables"}]},{key:"maps",label:"Maps",isTitle:!1,icon:"uil-location-point",children:[{key:"maps-googlemaps",label:"Google Maps",url:"/ui/googlemaps",parentKey:"maps"},{key:"maps-vectormaps",label:"Vector Maps",url:"/ui/vectormaps",parentKey:"maps"}]},{key:"menu-levels",label:"Menu Levels",isTitle:!1,icon:"uil-folder-plus",children:[{key:"menu-levels-1-1",label:"Level 1.1",url:"/",parentKey:"menu-levels",children:[{key:"menu-levels-2-1",label:"Level 2.1",url:"/",parentKey:"menu-levels-1-1",children:[{key:"menu-levels-3-1",label:"Level 3.1",url:"/",parentKey:"menu-levels-2-1"},{key:"menu-levels-3-2",label:"Level 3.2",url:"/",parentKey:"menu-levels-2-1"}]},{key:"menu-levels-2-2",label:"Level 2.2",url:"/",parentKey:"menu-levels-1-1"}]},{key:"menu-levels-1-2",label:"Level 1.2",url:"/",parentKey:"menu-levels"}]}],t=function(){return s},i=function e(a,l){var s=[],t=n(a,l.parentKey);return t&&(s.push(t.key),t.parentKey&&(s=[].concat(Object(r.a)(s),Object(r.a)(e(a,t))))),s},n=function e(a,l){if(a&&l)for(var r=0;r<a.length;r++){if(a[r].key===l)return a[r];var s=e(a[r].children,l);if(s)return s}return null}}}]);
//# sourceMappingURL=135.55ecc7c8.chunk.js.map