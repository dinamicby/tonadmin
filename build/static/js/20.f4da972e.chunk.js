(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[20],{164:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},174:function(e,t,r){var n=r(164);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},188:function(e,t,r){var n=r(189),a=r(190),s=r(174),c=r(191);e.exports=function(e,t){return n(e)||a(e,t)||s(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},189:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},190:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,s=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(i){a=!0,s=i}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return r}},e.exports.default=e.exports,e.exports.__esModule=!0},191:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},204:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return h}));var n=r(2),a=r(0),s=r.n(a),c=r(213),o=r(5),i=function(e){var t=e.defaultValues,r=e.resolver,a=e.children,i=e.onSubmit,l=e.formClass,u=Object(c.d)({defaultValues:t,resolver:r}),d=u.handleSubmit,b=u.register,j=u.control,p=u.formState.errors;return Object(o.jsx)("form",{onSubmit:d(i),className:l,noValidate:!0,children:Array.isArray(a)?a.map((function(e){return e.props&&e.props.name?s.a.createElement(e.type,Object(n.a)({},Object(n.a)(Object(n.a)({},e.props),{},{register:b,key:e.props.name,errors:p,control:j}))):e})):a})},l=r(33),u=r(48),d=r(761),b=r(772),j=r(46),p=r.n(j),f=["label","type","name","placeholder","register","errors","className","labelClassName","containerClass","refCallback","children"],m=function(e){var t=e.name,r=e.placeholder,s=e.refCallback,c=e.errors,i=e.register,l=e.className,j=Object(a.useState)(!1),f=Object(u.a)(j,2),m=f[0],h=f[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d.a,{className:"mb-0",children:[Object(o.jsx)(b.a.Control,Object(n.a)(Object(n.a)({type:m?"text":"password",placeholder:r,name:t,id:t,as:"input",ref:function(e){s&&s(e)},className:l,isInvalid:!(!c||!c[t])},i?i(t):{}),{},{autoComplete:t})),Object(o.jsx)("div",{className:p()("input-group-text","input-group-password",{"show-password":m}),"data-password":m?"true":"false",children:Object(o.jsx)("span",{className:"password-eye",onClick:function(){h(!m)}})})]})})},h=function(e){var t=e.label,r=e.type,a=e.name,s=e.placeholder,c=e.register,i=e.errors,u=e.className,d=e.labelClassName,j=e.containerClass,p=e.refCallback,h=e.children,O=Object(l.a)(e,f),x="textarea"===r?"textarea":"select"===r?"select":"input";return Object(o.jsx)(o.Fragment,{children:"hidden"===r?Object(o.jsx)("input",Object(n.a)(Object(n.a)({type:r,name:a},c?c(a):{}),O)):Object(o.jsx)(o.Fragment,{children:"password"===r?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(b.a.Group,{className:j,children:[t?Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)(b.a.Label,{className:d,children:t})," ",h," "]}):null,Object(o.jsx)(m,{name:a,placeholder:s,refCallback:p,errors:i,register:c,className:u}),i&&i[a]?Object(o.jsx)(b.a.Control.Feedback,{type:"invalid",className:"d-block",children:i[a].message}):null]})}):Object(o.jsx)(o.Fragment,{children:"checkbox"===r||"radio"===r?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(b.a.Group,{className:j,children:[Object(o.jsx)(b.a.Check,Object(n.a)(Object(n.a)({type:r,label:t,name:a,id:a,ref:function(e){p&&p(e)},className:u,isInvalid:!(!i||!i[a])},c?c(a):{}),O)),i&&i[a]?Object(o.jsx)(b.a.Control.Feedback,{type:"invalid",children:i[a].message}):null]})}):Object(o.jsxs)(b.a.Group,{className:j,children:[t?Object(o.jsx)(b.a.Label,{className:d,children:t}):null,Object(o.jsx)(b.a.Control,Object(n.a)(Object(n.a)(Object(n.a)({type:r,placeholder:s,name:a,id:a,as:x,ref:function(e){p&&p(e)},className:u,isInvalid:!(!i||!i[a])},c?c(a):{}),O),{},{autoComplete:a,children:h||null})),i&&i[a]?Object(o.jsx)(b.a.Control.Feedback,{type:"invalid",children:i[a].message}):null]})})})})}},205:function(e,t,r){"use strict";var n=r(0),a=r(125),s=r(340),c=r(268),o=r(451),i=r(28),l=r(428),u=(r.p,r(5));t.a=function(e){e.bottomLinks;var t=e.children;Object(l.a)().t;return Object(n.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"account-pages pt-2 pt-sm-5 pb-4 pb-sm-5",children:Object(u.jsx)(a.a,{children:Object(u.jsx)(s.a,{className:"justify-content-center",children:Object(u.jsx)(c.a,{md:8,lg:6,xl:5,xxl:4,children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(o.a.Header,{className:"pt-4 pb-4 text-center bg-primary",children:Object(u.jsx)(i.b,{to:"/",children:Object(u.jsxs)("div",{className:"logo-text",children:[Object(u.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"M31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16Z",stroke:"#fff",strokeWidth:"1.5"}),Object(u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.70711 12.2929C8.09763 11.9024 8.7308 11.9024 9.12132 12.2929L11.6971 14.8686C12.0931 15.2646 12.2911 15.4627 12.3653 15.691C12.4305 15.8918 12.4305 16.1082 12.3653 16.309C12.2911 16.5373 12.0931 16.7354 11.6971 17.1314L9.12132 19.7071C9.12132 19.7071 9.12132 19.7071 9.12132 19.7071C8.7308 20.0976 8.09763 20.0976 7.70711 19.7071C7.70711 19.7071 7.70711 19.7071 7.70711 19.7071V19.7071C7.70711 19.7071 7.70711 19.7071 7.70711 19.7071C7.31658 19.3166 7.31658 18.6834 7.70711 18.2929C7.70711 18.2929 7.70711 18.2929 7.70711 18.2929L9.43431 16.5657C9.63232 16.3677 9.73133 16.2687 9.76842 16.1545C9.80105 16.0541 9.80105 15.9459 9.76842 15.8455C9.73133 15.7313 9.63232 15.6323 9.43431 15.4343L7.70711 13.7071C7.31658 13.3166 7.31658 12.6834 7.70711 12.2929V12.2929Z",fill:"#2B3461"}),Object(u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.5 19C13.5 18.4477 13.9477 18 14.5 18H17.5C18.0523 18 18.5 18.4477 18.5 19V19C18.5 19.5523 18.0523 20 17.5 20H14.5C13.9477 20 13.5 19.5523 13.5 19V19Z",fill:"#2B3461"}),Object(u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.2929 12.2929C23.9024 11.9024 23.2692 11.9024 22.8787 12.2929L20.3029 14.8686C19.9069 15.2646 19.7089 15.4627 19.6347 15.691C19.5695 15.8918 19.5695 16.1082 19.6347 16.309C19.7089 16.5373 19.9069 16.7354 20.3029 17.1314L22.8787 19.7071C22.8787 19.7071 22.8787 19.7071 22.8787 19.7071C23.2692 20.0976 23.9024 20.0976 24.2929 19.7071C24.2929 19.7071 24.2929 19.7071 24.2929 19.7071V19.7071C24.2929 19.7071 24.2929 19.7071 24.2929 19.7071C24.6834 19.3166 24.6834 18.6834 24.2929 18.2929C24.2929 18.2929 24.2929 18.2929 24.2929 18.2929L22.5657 16.5657C22.3677 16.3677 22.2687 16.2687 22.2316 16.1545C22.1989 16.0541 22.1989 15.9459 22.2316 15.8455C22.2687 15.7313 22.3677 15.6323 22.5657 15.4343L24.2929 13.7071C24.6834 13.3166 24.6834 12.6834 24.2929 12.2929V12.2929Z",fill:"#2B3461"})]}),Object(u.jsx)("span",{className:"logo-text ",style:{color:"#fff"},children:"TON Admin"})]})})}),Object(u.jsx)(o.a.Body,{className:"p-4",children:t})]})})})})})})}},428:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(188),a=r.n(n),s=r(53),c=r.n(s),o=r(0),i=r(124);function l(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var u={};function d(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),l.apply(void 0,t))}function b(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function j(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var n=t.languages[0],a=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var c=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!t.services.backendConnector.backend||!(!c(n,e)||a&&!c(s,e))))}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,n=Object(o.useContext)(i.a)||{},s=n.i18n,c=n.defaultNS,l=r||s||Object(i.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new i.b),!l){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[u,{},!1];return p.t=u,p.i18n={},p.ready=!1,p}l.options.react&&void 0!==l.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=f(f(f({},Object(i.c)()),l.options.react),t),h=m.useSuspense,O=e||c||l.options&&l.options.defaultNS;O="string"===typeof O?[O]:O||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(O);var x=(l.isInitialized||l.initializedStoreOnce)&&O.every((function(e){return j(e,l,m)}));function g(){return l.getFixedT(null,"fallback"===m.nsMode?O:O[0])}var y=Object(o.useState)(g),v=a()(y,2),C=v[0],w=v[1],N=Object(o.useRef)(!0);Object(o.useEffect)((function(){var e=m.bindI18n,t=m.bindI18nStore;function r(){N.current&&w(g)}return N.current=!0,x||h||b(l,O,(function(){N.current&&w(g)})),e&&l&&l.on(e,r),t&&l&&l.store.on(t,r),function(){N.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,r)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,r)}))}}),[l,O.join()]);var k=Object(o.useRef)(!0);Object(o.useEffect)((function(){N.current&&!k.current&&w(g),k.current=!1}),[l]);var S=[C,l,x];if(S.t=C,S.i18n=l,S.ready=x,x)return S;if(!x&&!h)return S;throw new Promise((function(e){b(l,O,(function(){e()}))}))}},766:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(340),s=r(268),c=r(764),o=r(522),i=r(28),l=r(420),u=r(429),d=r(428),b=r(24),j=r(30),p=r(204),f=r(205),m=r(5),h=function(){var e=Object(d.a)().t;return Object(m.jsx)(a.a,{className:"mt-3",children:Object(m.jsx)(s.a,{className:"text-center",children:Object(m.jsxs)("p",{className:"text-muted",children:[e("Back to")," ",Object(m.jsx)(i.b,{to:"/account/login",className:"text-muted ms-1",children:Object(m.jsx)("b",{children:e("Log In")})})]})})})};t.default=function(){var e=Object(b.b)(),t=Object(d.a)().t;Object(n.useEffect)((function(){e(Object(j.f)())}),[e]);var r=Object(b.c)((function(e){return{loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,passwordReset:e.Auth.passwordReset,resetPasswordSuccess:e.Auth.resetPasswordSuccess}})),a=r.loading,s=r.passwordReset,i=r.resetPasswordSuccess,O=r.error,x=Object(u.a)(l.a().shape({username:l.b().required(t("Please enter Username"))}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(f.a,{bottomLinks:Object(m.jsx)(h,{}),children:[Object(m.jsxs)("div",{className:"text-center m-auto",children:[Object(m.jsx)("h4",{className:"text-dark-50 text-center mt-0 font-weight-bold",children:t("Reset Password")}),Object(m.jsx)("p",{className:"text-muted mb-4",children:t("Enter your email address and we'll send you an email with instructions to reset your password")})]}),i&&Object(m.jsx)(c.a,{variant:"success",children:i.message}),O&&Object(m.jsx)(c.a,{variant:"danger",className:"my-2",children:O}),!s&&Object(m.jsxs)(p.b,{onSubmit:function(t){e(Object(j.c)(t.username))},resolver:x,children:[Object(m.jsx)(p.a,{label:t("Username"),type:"text",name:"username",placeholder:t("Enter your Username"),containerClass:"mb-3"}),Object(m.jsx)("div",{className:"mb-3 mb-0 text-center",children:Object(m.jsx)(o.a,{variant:"primary",type:"submit",disabled:a,children:t("Submit")})})]})]})})}}}]);
//# sourceMappingURL=20.f4da972e.chunk.js.map