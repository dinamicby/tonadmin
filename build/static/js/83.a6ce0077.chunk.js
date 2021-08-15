(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[83],{116:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var c=t(3),r=t(35),n=t(47),s=t.n(n),l=/-(.)/g;var i=t(0),o=t(48),d=t(1),b=["className","bsPrefix","as"],j=function(e){return e[0].toUpperCase()+(a=e,a.replace(l,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,n=void 0===t?j(e):t,l=a.Component,u=a.defaultProps,m=i.forwardRef((function(a,t){var n=a.className,i=a.bsPrefix,j=a.as,u=void 0===j?l||"div":j,m=Object(r.a)(a,b),h=Object(o.a)(i,e);return Object(d.jsx)(u,Object(c.a)({ref:t,className:s()(n,h)},m))}));return m.defaultProps=u,m.displayName=n,m}},118:function(e,a,t){"use strict";var c=t(3),r=t(35),n=t(0),s=t(123),l=t(1),i=["as","disabled","onKeyDown"];function o(e){return!e||"#"===e.trim()}var d=n.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,d=e.disabled,b=e.onKeyDown,j=Object(r.a)(e,i),u=function(e){var a=j.href,t=j.onClick;(d||o(a))&&e.preventDefault(),d?e.stopPropagation():null==t||t(e)};return o(j.href)&&(j.role=j.role||"button",j.href=j.href||"#"),d&&(j.tabIndex=-1,j["aria-disabled"]=!0),Object(l.jsx)(n,Object(c.a)(Object(c.a)({ref:a},j),{},{onClick:u,onKeyDown:Object(s.a)((function(e){" "===e.key&&(e.preventDefault(),u(e))}),b)}))}));d.displayName="SafeAnchor",a.a=d},119:function(e,a,t){"use strict";t(0);var c=t(127),r=t(134),n=t(136),s=t(1);a.a=function(e){return Object(s.jsx)(c.a,{children:Object(s.jsx)(r.a,{children:Object(s.jsxs)("div",{className:"page-title-box",children:[Object(s.jsx)("div",{className:"page-title-right",children:Object(s.jsxs)(n.a,{className:"m-0",children:[Object(s.jsx)(n.a.Item,{href:"/",children:"Hyper"}),e.breadCrumbItems.map((function(e,a){return e.active?Object(s.jsx)(n.a.Item,{active:!0,children:e.label},a):Object(s.jsx)(n.a.Item,{href:e.path,children:e.label},a)}))]})}),Object(s.jsx)("h4",{className:"page-title",children:e.title})]})})})}},121:function(e,a,t){"use strict";var c=t(3),r=t(0),n=t(47),s=t.n(n),l=t(1);a.a=function(e){return r.forwardRef((function(a,t){return Object(l.jsx)("div",Object(c.a)(Object(c.a)({},a),{},{ref:t,className:s()(a.className,e)}))}))}},122:function(e,a,t){"use strict";var c=t(0),r=c.createContext(null);r.displayName="CardHeaderContext",a.a=r},123:function(e,a,t){"use strict";a.a=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];e.apply(this,c),a.apply(this,c)}}),null)}},127:function(e,a,t){"use strict";var c=t(3),r=t(35),n=t(47),s=t.n(n),l=t(0),i=t(48),o=t(1),d=["bsPrefix","className","noGutters","as"],b=["xxl","xl","lg","md","sm","xs"],j=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.noGutters,j=e.as,u=void 0===j?"div":j,m=Object(r.a)(e,d),h=Object(i.a)(t,"row"),f="".concat(h,"-cols"),x=[];return b.forEach((function(e){var a,t=m[e];delete m[e],a=null!=t&&"object"===typeof t?t.cols:t;var c="xs"!==e?"-".concat(e):"";null!=a&&x.push("".concat(f).concat(c,"-").concat(a))})),Object(o.jsx)(u,Object(c.a)(Object(c.a)({ref:a},m),{},{className:s.a.apply(void 0,[n,h,l&&"no-gutters"].concat(x))}))}));j.displayName="Row",j.defaultProps={noGutters:!1},a.a=j},134:function(e,a,t){"use strict";var c=t(3),r=t(35),n=t(47),s=t.n(n),l=t(0),i=t(48),o=t(1),d=["bsPrefix","className","as"],b=["xxl","xl","lg","md","sm","xs"],j=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.as,j=void 0===l?"div":l,u=Object(r.a)(e,d),m=Object(i.a)(t,"col"),h=[],f=[];return b.forEach((function(e){var a,t,c,r=u[e];if(delete u[e],"object"===typeof r&&null!=r){var n=r.span;a=void 0===n||n,t=r.offset,c=r.order}else a=r;var s="xs"!==e?"-".concat(e):"";a&&h.push(!0===a?"".concat(m).concat(s):"".concat(m).concat(s,"-").concat(a)),null!=c&&f.push("order".concat(s,"-").concat(c)),null!=t&&f.push("offset".concat(s,"-").concat(t))})),h.length||h.push(m),Object(o.jsx)(j,Object(c.a)(Object(c.a)({},u),{},{ref:a,className:s.a.apply(void 0,[n].concat(h,f))}))}));j.displayName="Col",a.a=j},136:function(e,a,t){"use strict";var c=t(3),r=t(35),n=t(47),s=t.n(n),l=t(0),i=t(48),o=t(118),d=t(1),b=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],j=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,l=e.children,j=e.className,u=e.as,m=void 0===u?"li":u,h=e.linkAs,f=void 0===h?o.a:h,x=e.linkProps,O=e.href,g=e.title,p=e.target,v=Object(r.a)(e,b),N=Object(i.a)(t,"breadcrumb-item");return Object(d.jsx)(m,Object(c.a)(Object(c.a)({ref:a},v),{},{className:s()(N,j,{active:n}),"aria-current":n?"page":void 0,children:n?l:Object(d.jsx)(f,Object(c.a)(Object(c.a)({},x),{},{href:O,title:g,target:p,children:l}))}))}));j.displayName="BreadcrumbItem",j.defaultProps={active:!1,linkProps:{}};var u=j,m=["bsPrefix","className","listProps","children","label","as"],h=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.listProps,o=e.children,b=e.label,j=e.as,u=void 0===j?"nav":j,h=Object(r.a)(e,m),f=Object(i.a)(t,"breadcrumb");return Object(d.jsx)(u,Object(c.a)(Object(c.a)({"aria-label":b,className:n,ref:a},h),{},{children:Object(d.jsx)("ol",Object(c.a)(Object(c.a)({},l),{},{className:s()(f,null==l?void 0:l.className),children:o}))}))}));h.displayName="Breadcrumb",h.defaultProps={label:"breadcrumb",listProps:{}};a.a=Object.assign(h,{Item:u})},143:function(e,a,t){"use strict";var c=t(3),r=t(35),n=t(47),s=t.n(n),l=t(0),i=t(48),o=t(116),d=t(121),b=t(1),j=["bsPrefix","className","variant","as"],u=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.variant,o=e.as,d=void 0===o?"img":o,u=Object(r.a)(e,j),m=Object(i.a)(t,"card-img");return Object(b.jsx)(d,Object(c.a)({ref:a,className:s()(l?"".concat(m,"-").concat(l):m,n)},u))}));u.displayName="CardImg";var m=u,h=t(122),f=["bsPrefix","className","as"],x=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,j=Object(r.a)(e,f),u=Object(i.a)(t,"card-header"),m=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return Object(b.jsx)(h.a.Provider,{value:m,children:Object(b.jsx)(d,Object(c.a)(Object(c.a)({ref:a},j),{},{className:s()(n,u)}))})}));x.displayName="CardHeader";var O=x,g=["bsPrefix","className","bg","text","border","body","children","as"],p=Object(d.a)("h5"),v=Object(d.a)("h6"),N=Object(o.a)("card-body"),y=Object(o.a)("card-title",{Component:p}),P=Object(o.a)("card-subtitle",{Component:v}),w=Object(o.a)("card-link",{Component:"a"}),k=Object(o.a)("card-text",{Component:"p"}),C=Object(o.a)("card-footer"),B=Object(o.a)("card-img-overlay"),I=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.bg,o=e.text,d=e.border,j=e.body,u=e.children,m=e.as,h=void 0===m?"div":m,f=Object(r.a)(e,g),x=Object(i.a)(t,"card");return Object(b.jsx)(h,Object(c.a)(Object(c.a)({ref:a},f),{},{className:s()(n,x,l&&"bg-".concat(l),o&&"text-".concat(o),d&&"border-".concat(d)),children:j?Object(b.jsx)(N,{children:u}):u}))}));I.displayName="Card",I.defaultProps={body:!1};a.a=Object.assign(I,{Img:m,Title:y,Subtitle:P,Body:N,Link:w,Text:k,Header:O,Footer:C,ImgOverlay:B})},826:function(e,a,t){"use strict";var c=t(3),r=t(35),n=t(47),s=t.n(n),l=t(0),i=t(48),o=t(1),d=["bsPrefix","bg","pill","text","className","as"],b=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bg,l=e.pill,b=e.text,j=e.className,u=e.as,m=void 0===u?"span":u,h=Object(r.a)(e,d),f=Object(i.a)(t,"badge");return Object(o.jsx)(m,Object(c.a)(Object(c.a)({ref:a},h),{},{className:s()(j,f,l&&"rounded-pill",b&&"text-".concat(b),n&&"bg-".concat(n))}))}));b.displayName="Badge",b.defaultProps={pill:!1},a.a=b},998:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(143),s=t(826),l=t(127),i=t(134),o=t(47),d=t.n(o),b=t(119),j=t(1),u=[{name:"Primary",color:"primary"},{name:"Secondary",color:"secondary"},{name:"Success",color:"success"},{name:"Danger",color:"danger"},{name:"Warning",color:"warning"},{name:"Info",color:"info"},{name:"Light",color:"light"},{name:"Dark",color:"dark"}],m=function(){return Object(j.jsx)(n.a,{children:Object(j.jsxs)(n.a.Body,{children:[Object(j.jsx)("h4",{className:"header-title",children:"Default"}),Object(j.jsxs)("p",{className:"text-muted font-14 mb-3",children:["A simple labeling component. Badges scale to match the size of the immediate parent element by using relative font sizing and ",Object(j.jsx)("code",{children:"em"})," units."]}),Object(j.jsxs)("h1",{children:["h1.Example heading ",Object(j.jsx)("span",{className:"badge bg-secondary text-light",children:"New"})]}),Object(j.jsxs)("h2",{children:["h2.Example heading ",Object(j.jsx)("span",{className:"badge badge-success-lighten",children:"New"})]}),Object(j.jsxs)("h3",{children:["h3.Example heading"," ",Object(j.jsxs)("button",{type:"button",className:"btn btn-sm btn-primary",children:["Notifications ",Object(j.jsx)("span",{className:"badge bg-light text-dark",children:"4"})]})]}),Object(j.jsxs)("h4",{children:["h4.Example heading"," ",Object(j.jsx)("a",{href:"/",className:"badge badge-info-lighten",children:"Info Link"})]}),Object(j.jsxs)("h5",{children:["h5.Example heading ",Object(j.jsx)("span",{className:"badge badge-outline-warning",children:"New"})]}),Object(j.jsxs)("h6",{children:["h6.Example heading ",Object(j.jsx)("span",{className:"badge bg-danger",children:"New"})]})]})})},h=function(){return Object(j.jsx)(n.a,{children:Object(j.jsxs)(n.a.Body,{children:[Object(j.jsx)("h4",{className:"header-title",children:"Contexual variations"}),Object(j.jsxs)("p",{className:"text-muted font-14 mb-3",children:["Add any of the below mentioned modifier classes to change the appearance of a badge. Badge can be more contextual as well. Just use regular convention e.g. ",Object(j.jsx)("code",{children:"badge-*color"}),",",Object(j.jsx)("code",{children:"bg-primary"})," to have badge with different background."]}),u.map((function(e,a){return Object(j.jsx)(s.a,{className:d()("me-1","badge bg-"+e.color,"light"===e.color?"text-dark":null),children:e.name},a)})),Object(j.jsx)("h5",{className:"mt-4",children:"Lighten Badges"}),Object(j.jsxs)("p",{className:"text-muted font-14 mb-3",children:["Using the ",Object(j.jsx)("code",{children:".badge-*-lighten"})," modifier class, you can have more soften variation."]}),u.map((function(e,a){return Object(j.jsx)(s.a,{className:d()("me-1","badge badge-"+e.color+"-lighten"),children:e.name},a)})),Object(j.jsx)("h5",{className:"mt-4",children:"Outline Badges"}),Object(j.jsxs)("p",{className:"text-muted font-14 mb-3",children:["Using the ",Object(j.jsx)("code",{children:".badge-outline-*"})," to quickly create a bordered badges."]}),u.map((function(e,a){return Object(j.jsx)(s.a,{color:"",className:d()("me-1","badge badge-outline-"+e.color),children:e.name},a)}))]})})},f=function(){return Object(j.jsx)(n.a,{children:Object(j.jsxs)(n.a.Body,{children:[Object(j.jsx)("h4",{className:"header-title",children:"Pill Badges"}),Object(j.jsxs)("p",{className:"text-muted font-14 mb-3",children:["Use the ",Object(j.jsx)("code",{children:".rounded-pill"})," modifier class to make badges more rounded."]}),u.map((function(e,a){return Object(j.jsx)(s.a,{pill:!0,className:d()("me-1","badge bg-"+e.color,"light"===e.color?"text-dark":null),children:e.name},a)})),Object(j.jsx)("h5",{className:"mt-4",children:"Lighten Badges with Pill"}),Object(j.jsxs)("p",{className:"text-muted font-14 mb-3",children:["Use the ",Object(j.jsx)("code",{children:".badge-*-lighten"})," modifier class to make badges lighten."]}),u.map((function(e,a){return Object(j.jsx)(s.a,{pill:!0,className:d()("me-1","badge badge-"+e.color+"-lighten"),children:e.name},a)})),Object(j.jsx)("h5",{className:"mt-4",children:"Outline Badges"}),Object(j.jsxs)("p",{className:"text-muted font-14 mb-3",children:["Using the ",Object(j.jsx)("code",{children:".badge-outline-*"})," to quickly create a bordered badges."]}),u.map((function(e,a){return Object(j.jsx)(s.a,{color:"",pill:!0,className:d()("me-1","badge badge-outline-"+e.color),children:e.name},a)}))]})})};a.default=function(){return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(b.a,{breadCrumbItems:[{label:"Base UI",path:"/ui/badges"},{label:"Badges",path:"/ui/badges",active:!0}],title:"Badges"}),Object(j.jsxs)(l.a,{children:[Object(j.jsxs)(i.a,{lg:6,children:[Object(j.jsx)(m,{}),Object(j.jsx)(f,{})]}),Object(j.jsx)(i.a,{lg:6,children:Object(j.jsx)(h,{})})]})]})}}}]);
//# sourceMappingURL=83.a6ce0077.chunk.js.map