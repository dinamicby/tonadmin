(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[105],{118:function(e,t,s){"use strict";var a=s(3),n=s(35),i=s(0),r=s(123),c=s(1),o=["as","disabled","onKeyDown"];function l(e){return!e||"#"===e.trim()}var u=i.forwardRef((function(e,t){var s=e.as,i=void 0===s?"a":s,u=e.disabled,m=e.onKeyDown,d=Object(n.a)(e,o),b=function(e){var t=d.href,s=d.onClick;(u||l(t))&&e.preventDefault(),u?e.stopPropagation():null==s||s(e)};return l(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),u&&(d.tabIndex=-1,d["aria-disabled"]=!0),Object(c.jsx)(i,Object(a.a)(Object(a.a)({ref:t},d),{},{onClick:b,onKeyDown:Object(r.a)((function(e){" "===e.key&&(e.preventDefault(),b(e))}),m)}))}));u.displayName="SafeAnchor",t.a=u},119:function(e,t,s){"use strict";s(0);var a=s(127),n=s(134),i=s(136),r=s(1);t.a=function(e){return Object(r.jsx)(a.a,{children:Object(r.jsx)(n.a,{children:Object(r.jsxs)("div",{className:"page-title-box",children:[Object(r.jsx)("div",{className:"page-title-right",children:Object(r.jsxs)(i.a,{className:"m-0",children:[Object(r.jsx)(i.a.Item,{href:"/",children:"Hyper"}),e.breadCrumbItems.map((function(e,t){return e.active?Object(r.jsx)(i.a.Item,{active:!0,children:e.label},t):Object(r.jsx)(i.a.Item,{href:e.path,children:e.label},t)}))]})}),Object(r.jsx)("h4",{className:"page-title",children:e.title})]})})})}},123:function(e,t,s){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];e.apply(this,a),t.apply(this,a)}}),null)}},127:function(e,t,s){"use strict";var a=s(3),n=s(35),i=s(47),r=s.n(i),c=s(0),o=s(48),l=s(1),u=["bsPrefix","className","noGutters","as"],m=["xxl","xl","lg","md","sm","xs"],d=c.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,c=e.noGutters,d=e.as,b=void 0===d?"div":d,p=Object(n.a)(e,u),j=Object(o.a)(s,"row"),f="".concat(j,"-cols"),h=[];return m.forEach((function(e){var t,s=p[e];delete p[e],t=null!=s&&"object"===typeof s?s.cols:s;var a="xs"!==e?"-".concat(e):"";null!=t&&h.push("".concat(f).concat(a,"-").concat(t))})),Object(l.jsx)(b,Object(a.a)(Object(a.a)({ref:t},p),{},{className:r.a.apply(void 0,[i,j,c&&"no-gutters"].concat(h))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},134:function(e,t,s){"use strict";var a=s(3),n=s(35),i=s(47),r=s.n(i),c=s(0),o=s(48),l=s(1),u=["bsPrefix","className","as"],m=["xxl","xl","lg","md","sm","xs"],d=c.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,c=e.as,d=void 0===c?"div":c,b=Object(n.a)(e,u),p=Object(o.a)(s,"col"),j=[],f=[];return m.forEach((function(e){var t,s,a,n=b[e];if(delete b[e],"object"===typeof n&&null!=n){var i=n.span;t=void 0===i||i,s=n.offset,a=n.order}else t=n;var r="xs"!==e?"-".concat(e):"";t&&j.push(!0===t?"".concat(p).concat(r):"".concat(p).concat(r,"-").concat(t)),null!=a&&f.push("order".concat(r,"-").concat(a)),null!=s&&f.push("offset".concat(r,"-").concat(s))})),j.length||j.push(p),Object(l.jsx)(d,Object(a.a)(Object(a.a)({},b),{},{ref:t,className:r.a.apply(void 0,[i].concat(j,f))}))}));d.displayName="Col",t.a=d},136:function(e,t,s){"use strict";var a=s(3),n=s(35),i=s(47),r=s.n(i),c=s(0),o=s(48),l=s(118),u=s(1),m=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],d=c.forwardRef((function(e,t){var s=e.bsPrefix,i=e.active,c=e.children,d=e.className,b=e.as,p=void 0===b?"li":b,j=e.linkAs,f=void 0===j?l.a:j,h=e.linkProps,x=e.href,v=e.title,y=e.target,O=Object(n.a)(e,m),g=Object(o.a)(s,"breadcrumb-item");return Object(u.jsx)(p,Object(a.a)(Object(a.a)({ref:t},O),{},{className:r()(g,d,{active:i}),"aria-current":i?"page":void 0,children:i?c:Object(u.jsx)(f,Object(a.a)(Object(a.a)({},h),{},{href:x,title:v,target:y,children:c}))}))}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var b=d,p=["bsPrefix","className","listProps","children","label","as"],j=c.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,c=e.listProps,l=e.children,m=e.label,d=e.as,b=void 0===d?"nav":d,j=Object(n.a)(e,p),f=Object(o.a)(s,"breadcrumb");return Object(u.jsx)(b,Object(a.a)(Object(a.a)({"aria-label":m,className:i,ref:t},j),{},{children:Object(u.jsx)("ol",Object(a.a)(Object(a.a)({},c),{},{className:r()(f,null==c?void 0:c.className),children:l}))}))}));j.displayName="Breadcrumb",j.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(j,{Item:b})},798:function(e,t,s){"use strict";var a=s(0),n=s.n(a),i=s(127),r=s(134),c=s(47),o=s.n(c),l=s(1);t.a=function(e){return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)(i.a,{className:"pt-5",children:e.rawFaqs.map((function(e,t){return e.id%2!==0?Object(l.jsx)(r.a,{lg:5,className:"offset-lg-1",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"faq-question-q-box",children:"Q."}),Object(l.jsx)("h4",{className:o()("faq-question",e.titleClass),children:e.question}),Object(l.jsx)("p",{className:o()("faq-answer mb-4",e.textClass),children:e.answer})]})},t):Object(l.jsx)(r.a,{lg:5,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"faq-question-q-box",children:"Q."}),Object(l.jsx)("h4",{className:o()("faq-question",e.titleClass),children:e.question}),Object(l.jsx)("p",{className:o()("faq-answer mb-4",e.textClass),children:e.answer})]})},t)}))})})}},992:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(127),r=s(134),c=s(119),o=s(798),l=s(1);t.default=function(){return Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(c.a,{breadCrumbItems:[{label:"Pages",path:"/pages/faq"},{label:"FAQ",path:"/pages/faq",active:!0}],title:"FAQ"}),Object(l.jsx)(i.a,{children:Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("h3",{className:"",children:"Frequently Asked Questions"}),Object(l.jsxs)("p",{className:"text-muted mt-3",children:[" ","Nisi praesentium similique totam odio obcaecati, reprehenderit, dignissimos rem temporibus ea inventore alias!",Object(l.jsx)("br",{})," Beatae animi nemo ea tempora, temporibus laborum facilis ut!"]}),Object(l.jsxs)("button",{type:"button",className:"btn btn-success btn-sm mt-2",children:[Object(l.jsx)("i",{className:"mdi mdi-email-outline mr-1"})," Email us your question"]}),Object(l.jsxs)("button",{type:"button",className:"btn btn-info btn-sm mt-2 ms-1",children:[Object(l.jsx)("i",{className:"mdi mdi-twitter mr-1"})," Send us a tweet"]})]})})}),Object(l.jsx)(o.a,{rawFaqs:[{id:1,question:"What is Lorem Ipsum?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},{id:2,question:"Is safe use Lorem Ipsum?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},{id:3,question:"Why use Lorem Ipsum?",answer:"Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis suavitate disputando nam. Mutat convenirete."},{id:4,question:"When can be used?",answer:"Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis suavitate disputando nam. Mutat convenirete."},{id:5,question:"How many variations exist?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},{id:6,question:"License & Copyright",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},{id:7,question:"What is Lorem Ipsum?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},{id:8,question:"Is safe use Lorem Ipsum?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}]})]})}}}]);
//# sourceMappingURL=105.ea2abb64.chunk.js.map