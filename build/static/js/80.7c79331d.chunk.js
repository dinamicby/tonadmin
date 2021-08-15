(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[80],{116:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var r=t(3),c=t(35),n=t(47),s=t.n(n),i=/-(.)/g;var o=t(0),l=t(48),d=t(1),b=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(i,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function j(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,n=void 0===t?u(e):t,i=a.Component,j=a.defaultProps,f=o.forwardRef((function(a,t){var n=a.className,o=a.bsPrefix,u=a.as,j=void 0===u?i||"div":u,f=Object(c.a)(a,b),m=Object(l.a)(o,e);return Object(d.jsx)(j,Object(r.a)({ref:t,className:s()(n,m)},f))}));return f.defaultProps=j,f.displayName=n,f}},118:function(e,a,t){"use strict";var r=t(3),c=t(35),n=t(0),s=t(123),i=t(1),o=["as","disabled","onKeyDown"];function l(e){return!e||"#"===e.trim()}var d=n.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,d=e.disabled,b=e.onKeyDown,u=Object(c.a)(e,o),j=function(e){var a=u.href,t=u.onClick;(d||l(a))&&e.preventDefault(),d?e.stopPropagation():null==t||t(e)};return l(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),d&&(u.tabIndex=-1,u["aria-disabled"]=!0),Object(i.jsx)(n,Object(r.a)(Object(r.a)({ref:a},u),{},{onClick:j,onKeyDown:Object(s.a)((function(e){" "===e.key&&(e.preventDefault(),j(e))}),b)}))}));d.displayName="SafeAnchor",a.a=d},119:function(e,a,t){"use strict";t(0);var r=t(127),c=t(134),n=t(136),s=t(1);a.a=function(e){return Object(s.jsx)(r.a,{children:Object(s.jsx)(c.a,{children:Object(s.jsxs)("div",{className:"page-title-box",children:[Object(s.jsx)("div",{className:"page-title-right",children:Object(s.jsxs)(n.a,{className:"m-0",children:[Object(s.jsx)(n.a.Item,{href:"/",children:"Hyper"}),e.breadCrumbItems.map((function(e,a){return e.active?Object(s.jsx)(n.a.Item,{active:!0,children:e.label},a):Object(s.jsx)(n.a.Item,{href:e.path,children:e.label},a)}))]})}),Object(s.jsx)("h4",{className:"page-title",children:e.title})]})})})}},121:function(e,a,t){"use strict";var r=t(3),c=t(0),n=t(47),s=t.n(n),i=t(1);a.a=function(e){return c.forwardRef((function(a,t){return Object(i.jsx)("div",Object(r.a)(Object(r.a)({},a),{},{ref:t,className:s()(a.className,e)}))}))}},122:function(e,a,t){"use strict";var r=t(0),c=r.createContext(null);c.displayName="CardHeaderContext",a.a=c},123:function(e,a,t){"use strict";a.a=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];e.apply(this,r),a.apply(this,r)}}),null)}},127:function(e,a,t){"use strict";var r=t(3),c=t(35),n=t(47),s=t.n(n),i=t(0),o=t(48),l=t(1),d=["bsPrefix","className","noGutters","as"],b=["xxl","xl","lg","md","sm","xs"],u=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.noGutters,u=e.as,j=void 0===u?"div":u,f=Object(c.a)(e,d),m=Object(o.a)(t,"row"),p="".concat(m,"-cols"),O=[];return b.forEach((function(e){var a,t=f[e];delete f[e],a=null!=t&&"object"===typeof t?t.cols:t;var r="xs"!==e?"-".concat(e):"";null!=a&&O.push("".concat(p).concat(r,"-").concat(a))})),Object(l.jsx)(j,Object(r.a)(Object(r.a)({ref:a},f),{},{className:s.a.apply(void 0,[n,m,i&&"no-gutters"].concat(O))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},134:function(e,a,t){"use strict";var r=t(3),c=t(35),n=t(47),s=t.n(n),i=t(0),o=t(48),l=t(1),d=["bsPrefix","className","as"],b=["xxl","xl","lg","md","sm","xs"],u=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.as,u=void 0===i?"div":i,j=Object(c.a)(e,d),f=Object(o.a)(t,"col"),m=[],p=[];return b.forEach((function(e){var a,t,r,c=j[e];if(delete j[e],"object"===typeof c&&null!=c){var n=c.span;a=void 0===n||n,t=c.offset,r=c.order}else a=c;var s="xs"!==e?"-".concat(e):"";a&&m.push(!0===a?"".concat(f).concat(s):"".concat(f).concat(s,"-").concat(a)),null!=r&&p.push("order".concat(s,"-").concat(r)),null!=t&&p.push("offset".concat(s,"-").concat(t))})),m.length||m.push(f),Object(l.jsx)(u,Object(r.a)(Object(r.a)({},j),{},{ref:a,className:s.a.apply(void 0,[n].concat(m,p))}))}));u.displayName="Col",a.a=u},136:function(e,a,t){"use strict";var r=t(3),c=t(35),n=t(47),s=t.n(n),i=t(0),o=t(48),l=t(118),d=t(1),b=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,i=e.children,u=e.className,j=e.as,f=void 0===j?"li":j,m=e.linkAs,p=void 0===m?l.a:m,O=e.linkProps,h=e.href,x=e.title,v=e.target,N=Object(c.a)(e,b),g=Object(o.a)(t,"breadcrumb-item");return Object(d.jsx)(f,Object(r.a)(Object(r.a)({ref:a},N),{},{className:s()(g,u,{active:n}),"aria-current":n?"page":void 0,children:n?i:Object(d.jsx)(p,Object(r.a)(Object(r.a)({},O),{},{href:h,title:x,target:v,children:i}))}))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var j=u,f=["bsPrefix","className","listProps","children","label","as"],m=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.listProps,l=e.children,b=e.label,u=e.as,j=void 0===u?"nav":u,m=Object(c.a)(e,f),p=Object(o.a)(t,"breadcrumb");return Object(d.jsx)(j,Object(r.a)(Object(r.a)({"aria-label":b,className:n,ref:a},m),{},{children:Object(d.jsx)("ol",Object(r.a)(Object(r.a)({},i),{},{className:s()(p,null==i?void 0:i.className),children:l}))}))}));m.displayName="Breadcrumb",m.defaultProps={label:"breadcrumb",listProps:{}};a.a=Object.assign(m,{Item:j})},143:function(e,a,t){"use strict";var r=t(3),c=t(35),n=t(47),s=t.n(n),i=t(0),o=t(48),l=t(116),d=t(121),b=t(1),u=["bsPrefix","className","variant","as"],j=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.variant,l=e.as,d=void 0===l?"img":l,j=Object(c.a)(e,u),f=Object(o.a)(t,"card-img");return Object(b.jsx)(d,Object(r.a)({ref:a,className:s()(i?"".concat(f,"-").concat(i):f,n)},j))}));j.displayName="CardImg";var f=j,m=t(122),p=["bsPrefix","className","as"],O=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.as,d=void 0===l?"div":l,u=Object(c.a)(e,p),j=Object(o.a)(t,"card-header"),f=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:j}}),[j]);return Object(b.jsx)(m.a.Provider,{value:f,children:Object(b.jsx)(d,Object(r.a)(Object(r.a)({ref:a},u),{},{className:s()(n,j)}))})}));O.displayName="CardHeader";var h=O,x=["bsPrefix","className","bg","text","border","body","children","as"],v=Object(d.a)("h5"),N=Object(d.a)("h6"),g=Object(l.a)("card-body"),y=Object(l.a)("card-title",{Component:v}),P=Object(l.a)("card-subtitle",{Component:N}),w=Object(l.a)("card-link",{Component:"a"}),C=Object(l.a)("card-text",{Component:"p"}),R=Object(l.a)("card-footer"),k=Object(l.a)("card-img-overlay"),B=i.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.bg,l=e.text,d=e.border,u=e.body,j=e.children,f=e.as,m=void 0===f?"div":f,p=Object(c.a)(e,x),O=Object(o.a)(t,"card");return Object(b.jsx)(m,Object(r.a)(Object(r.a)({ref:a},p),{},{className:s()(n,O,i&&"bg-".concat(i),l&&"text-".concat(l),d&&"border-".concat(d)),children:u?Object(b.jsx)(g,{children:j}):j}))}));B.displayName="Card",B.defaultProps={body:!1};a.a=Object.assign(B,{Img:f,Title:y,Subtitle:P,Body:g,Link:w,Text:C,Header:h,Footer:R,ImgOverlay:k})},799:function(e,a,t){"use strict";t(0);var r=t(127),c=t(134),n=t(143),s=t(47),i=t.n(s),o=t(1);a.a=function(e){var a=e.plans,t=e.containerClass;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(r.a,{className:t,children:a.map((function(e,a){return Object(o.jsx)(c.a,{md:4,children:Object(o.jsx)(n.a,{className:i()("card-pricing",{"card-pricing-recommended":e.isRecommended}),children:Object(o.jsxs)(n.a.Body,{className:"text-center",children:[e.isRecommended&&Object(o.jsx)("div",{className:"card-pricing-plan-tag",children:"Recommended"}),Object(o.jsx)("p",{className:"card-pricing-plan-name fw-bold text-uppercase",children:e.name}),Object(o.jsx)("i",{className:i()("card-pricing-icon",e.icon,"text-primary")}),Object(o.jsxs)("h2",{className:"card-pricing-price",children:[e.price," ",Object(o.jsxs)("span",{children:["/ ",e.duration]})]}),Object(o.jsx)("ul",{className:"card-pricing-features",children:e.features.map((function(e,a){return Object(o.jsx)("li",{children:e},a)}))}),Object(o.jsx)("button",{className:"btn btn-primary mt-4 mb-2 btn-rounded",children:"Choose Plan"})]})})},a)}))})})}},993:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(127),s=t(134),i=t(119),o=t(799),l=t(1);a.default=function(){return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)(i.a,{breadCrumbItems:[{label:"Pages",path:"/pages/pricing"},{label:"Pricing",path:"/pages/pricing",active:!0}],title:"Pricing"}),Object(l.jsx)(n.a,{className:"justify-content-center",children:Object(l.jsxs)(s.a,{xl:10,children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("h3",{className:"mb-2",children:"Our Plans and Pricing"}),Object(l.jsx)("p",{className:"text-muted w-50 m-auto",children:"We have plans and prices that fit your business perfectly. Make your client site a success with our products."})]}),Object(l.jsx)(o.a,{plans:[{id:1,name:"Professional Pack",icon:"dripicons-user",price:"$19",duration:"Month",features:["10 GB Storage","500 GB Bandwidth","No Domain","1 User","Email Support","24x7 Support"],isRecommended:!1},{id:2,name:"Business Pack",icon:"dripicons-briefcase",price:"$29",duration:"Month",features:["50 GB Storage","900 GB Bandwidth","2 Domain","10 User","Email Support","24x7 Support"],isRecommended:!0},{id:3,name:"Enterprise Pack",icon:"dripicons-store",price:"$39",duration:"Month",features:["100 GB Storage","Unlimited Bandwidth","10 Domain","Unlimited Users","Email Support","24x7 Support"],isRecommended:!1}],containerClass:"mt-sm-5 mt-3 mb-3"})]})})]})}}}]);
//# sourceMappingURL=80.7c79331d.chunk.js.map