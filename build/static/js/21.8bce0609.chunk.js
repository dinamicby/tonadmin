(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[21],{164:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},174:function(e,t,n){var r=n(164);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},188:function(e,t,n){var r=n(189),a=n(190),s=n(174),c=n(191);e.exports=function(e,t){return r(e)||a(e,t)||s(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},189:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},190:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,s=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){a=!0,s=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},191:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},204:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return h}));var r=n(2),a=n(0),s=n.n(a),c=n(213),o=n(5),i=function(e){var t=e.defaultValues,n=e.resolver,a=e.children,i=e.onSubmit,l=e.formClass,u=Object(c.d)({defaultValues:t,resolver:n}),d=u.handleSubmit,b=u.register,p=u.control,j=u.formState.errors;return Object(o.jsx)("form",{onSubmit:d(i),className:l,noValidate:!0,children:Array.isArray(a)?a.map((function(e){return e.props&&e.props.name?s.a.createElement(e.type,Object(r.a)({},Object(r.a)(Object(r.a)({},e.props),{},{register:b,key:e.props.name,errors:j,control:p}))):e})):a})},l=n(33),u=n(48),d=n(761),b=n(772),p=n(46),j=n.n(p),f=["label","type","name","placeholder","register","errors","className","labelClassName","containerClass","refCallback","children"],m=function(e){var t=e.name,n=e.placeholder,s=e.refCallback,c=e.errors,i=e.register,l=e.className,p=Object(a.useState)(!1),f=Object(u.a)(p,2),m=f[0],h=f[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d.a,{className:"mb-0",children:[Object(o.jsx)(b.a.Control,Object(r.a)(Object(r.a)({type:m?"text":"password",placeholder:n,name:t,id:t,as:"input",ref:function(e){s&&s(e)},className:l,isInvalid:!(!c||!c[t])},i?i(t):{}),{},{autoComplete:t})),Object(o.jsx)("div",{className:j()("input-group-text","input-group-password",{"show-password":m}),"data-password":m?"true":"false",children:Object(o.jsx)("span",{className:"password-eye",onClick:function(){h(!m)}})})]})})},h=function(e){var t=e.label,n=e.type,a=e.name,s=e.placeholder,c=e.register,i=e.errors,u=e.className,d=e.labelClassName,p=e.containerClass,j=e.refCallback,h=e.children,O=Object(l.a)(e,f),x="textarea"===n?"textarea":"select"===n?"select":"input";return Object(o.jsx)(o.Fragment,{children:"hidden"===n?Object(o.jsx)("input",Object(r.a)(Object(r.a)({type:n,name:a},c?c(a):{}),O)):Object(o.jsx)(o.Fragment,{children:"password"===n?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(b.a.Group,{className:p,children:[t?Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)(b.a.Label,{className:d,children:t})," ",h," "]}):null,Object(o.jsx)(m,{name:a,placeholder:s,refCallback:j,errors:i,register:c,className:u}),i&&i[a]?Object(o.jsx)(b.a.Control.Feedback,{type:"invalid",className:"d-block",children:i[a].message}):null]})}):Object(o.jsx)(o.Fragment,{children:"checkbox"===n||"radio"===n?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(b.a.Group,{className:p,children:[Object(o.jsx)(b.a.Check,Object(r.a)(Object(r.a)({type:n,label:t,name:a,id:a,ref:function(e){j&&j(e)},className:u,isInvalid:!(!i||!i[a])},c?c(a):{}),O)),i&&i[a]?Object(o.jsx)(b.a.Control.Feedback,{type:"invalid",children:i[a].message}):null]})}):Object(o.jsxs)(b.a.Group,{className:p,children:[t?Object(o.jsx)(b.a.Label,{className:d,children:t}):null,Object(o.jsx)(b.a.Control,Object(r.a)(Object(r.a)(Object(r.a)({type:n,placeholder:s,name:a,id:a,as:x,ref:function(e){j&&j(e)},className:u,isInvalid:!(!i||!i[a])},c?c(a):{}),O),{},{autoComplete:a,children:h||null})),i&&i[a]?Object(o.jsx)(b.a.Control.Feedback,{type:"invalid",children:i[a].message}):null]})})})})}},205:function(e,t,n){"use strict";var r=n(0),a=n(125),s=n(340),c=n(268),o=n(451),i=n(28),l=n(428),u=(n.p,n(5));t.a=function(e){e.bottomLinks;var t=e.children;Object(l.a)().t;return Object(r.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"account-pages pt-2 pt-sm-5 pb-4 pb-sm-5",children:Object(u.jsx)(a.a,{children:Object(u.jsx)(s.a,{className:"justify-content-center",children:Object(u.jsx)(c.a,{md:8,lg:6,xl:5,xxl:4,children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(o.a.Header,{className:"pt-4 pb-4 text-center bg-primary",children:Object(u.jsx)(i.b,{to:"/",children:Object(u.jsxs)("div",{className:"logo-text",children:[Object(u.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"M31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16Z",stroke:"#fff",strokeWidth:"1.5"}),Object(u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.70711 12.2929C8.09763 11.9024 8.7308 11.9024 9.12132 12.2929L11.6971 14.8686C12.0931 15.2646 12.2911 15.4627 12.3653 15.691C12.4305 15.8918 12.4305 16.1082 12.3653 16.309C12.2911 16.5373 12.0931 16.7354 11.6971 17.1314L9.12132 19.7071C9.12132 19.7071 9.12132 19.7071 9.12132 19.7071C8.7308 20.0976 8.09763 20.0976 7.70711 19.7071C7.70711 19.7071 7.70711 19.7071 7.70711 19.7071V19.7071C7.70711 19.7071 7.70711 19.7071 7.70711 19.7071C7.31658 19.3166 7.31658 18.6834 7.70711 18.2929C7.70711 18.2929 7.70711 18.2929 7.70711 18.2929L9.43431 16.5657C9.63232 16.3677 9.73133 16.2687 9.76842 16.1545C9.80105 16.0541 9.80105 15.9459 9.76842 15.8455C9.73133 15.7313 9.63232 15.6323 9.43431 15.4343L7.70711 13.7071C7.31658 13.3166 7.31658 12.6834 7.70711 12.2929V12.2929Z",fill:"#2B3461"}),Object(u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.5 19C13.5 18.4477 13.9477 18 14.5 18H17.5C18.0523 18 18.5 18.4477 18.5 19V19C18.5 19.5523 18.0523 20 17.5 20H14.5C13.9477 20 13.5 19.5523 13.5 19V19Z",fill:"#2B3461"}),Object(u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.2929 12.2929C23.9024 11.9024 23.2692 11.9024 22.8787 12.2929L20.3029 14.8686C19.9069 15.2646 19.7089 15.4627 19.6347 15.691C19.5695 15.8918 19.5695 16.1082 19.6347 16.309C19.7089 16.5373 19.9069 16.7354 20.3029 17.1314L22.8787 19.7071C22.8787 19.7071 22.8787 19.7071 22.8787 19.7071C23.2692 20.0976 23.9024 20.0976 24.2929 19.7071C24.2929 19.7071 24.2929 19.7071 24.2929 19.7071V19.7071C24.2929 19.7071 24.2929 19.7071 24.2929 19.7071C24.6834 19.3166 24.6834 18.6834 24.2929 18.2929C24.2929 18.2929 24.2929 18.2929 24.2929 18.2929L22.5657 16.5657C22.3677 16.3677 22.2687 16.2687 22.2316 16.1545C22.1989 16.0541 22.1989 15.9459 22.2316 15.8455C22.2687 15.7313 22.3677 15.6323 22.5657 15.4343L24.2929 13.7071C24.6834 13.3166 24.6834 12.6834 24.2929 12.2929V12.2929Z",fill:"#2B3461"})]}),Object(u.jsx)("span",{className:"logo-text ",style:{color:"#fff"},children:"TON Admin"})]})})}),Object(u.jsx)(o.a.Body,{className:"p-4",children:t})]})})})})})})}},428:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(188),a=n.n(r),s=n(53),c=n.n(s),o=n(0),i=n(124);function l(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var u={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),l.apply(void 0,t))}function b(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],a=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!c(r,e)||a&&!c(s,e))))}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(o.useContext)(i.a)||{},s=r.i18n,c=r.defaultNS,l=n||s||Object(i.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new i.b),!l){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},j=[u,{},!1];return j.t=u,j.i18n={},j.ready=!1,j}l.options.react&&void 0!==l.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=f(f(f({},Object(i.c)()),l.options.react),t),h=m.useSuspense,O=e||c||l.options&&l.options.defaultNS;O="string"===typeof O?[O]:O||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(O);var x=(l.isInitialized||l.initializedStoreOnce)&&O.every((function(e){return p(e,l,m)}));function g(){return l.getFixedT(null,"fallback"===m.nsMode?O:O[0])}var y=Object(o.useState)(g),v=a()(y,2),C=v[0],w=v[1],N=Object(o.useRef)(!0);Object(o.useEffect)((function(){var e=m.bindI18n,t=m.bindI18nStore;function n(){N.current&&w(g)}return N.current=!0,x||h||b(l,O,(function(){N.current&&w(g)})),e&&l&&l.on(e,n),t&&l&&l.store.on(t,n),function(){N.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,n)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,n)}))}}),[l,O.join()]);var k=Object(o.useRef)(!0);Object(o.useEffect)((function(){N.current&&!k.current&&w(g),k.current=!1}),[l]);var S=[C,l,x];if(S.t=C,S.i18n=l,S.ready=x,x)return S;if(!x&&!h)return S;throw new Promise((function(e){b(l,O,(function(){e()}))}))}},765:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(24),s=n(28),c=n(12),o=n(340),i=n(268),l=n(764),u=n(522),d=n(428),b=n(420),p=n(429),j=n(30),f=n(204),m=n(205),h=n(5),O=function(){var e=Object(d.a)().t;return Object(h.jsx)(o.a,{className:"mt-3",children:Object(h.jsx)(i.a,{className:"text-center",children:Object(h.jsxs)("p",{className:"text-muted",children:[e("Already have account?")," ",Object(h.jsx)(s.b,{to:"/account/login",className:"text-muted ms-1",children:Object(h.jsx)("b",{children:e("Log In")})})]})})})};t.default=function(){var e=Object(d.a)().t,t=Object(a.b)(),n=Object(a.c)((function(e){return{loading:e.Auth.loading,error:e.Auth.error,userSignUp:e.Auth.userSignUp}})),s=n.loading,o=n.userSignUp,i=n.error;Object(r.useEffect)((function(){t(Object(j.f)())}),[t]);var x=Object(p.a)(b.a().shape({fullname:b.b().required(e("Please enter Fullname")),email:b.b().required("Please enter Email").email("Please enter valid Email"),password:b.b().required(e("Please enter Password"))}));return Object(h.jsxs)(h.Fragment,{children:[o?Object(h.jsx)(c.a,{to:"/account/confirm"}):null,Object(h.jsxs)(m.a,{bottomLinks:Object(h.jsx)(O,{}),children:[Object(h.jsxs)("div",{className:"text-center w-75 m-auto",children:[Object(h.jsx)("h4",{className:"text-dark-50 text-center mt-0 fw-bold",children:e("Free Sign Up")}),Object(h.jsx)("p",{className:"text-muted mb-4",children:e("Don't have an account? Create your account, it takes less than a minute.")})]}),i&&Object(h.jsx)(l.a,{variant:"danger",className:"my-2",children:i}),Object(h.jsxs)(f.b,{onSubmit:function(e){t(Object(j.g)(e.fullname,e.email,e.password))},resolver:x,defaultValues:{},children:[Object(h.jsx)(f.a,{label:e("Full Name"),type:"text",name:"fullname",placeholder:e("Enter your name"),containerClass:"mb-3"}),Object(h.jsx)(f.a,{label:e("Email address"),type:"email",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),Object(h.jsx)(f.a,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),Object(h.jsx)(f.a,{label:e("I accept Terms and Conditions"),type:"checkbox",name:"checkboxsignup",containerClass:"mb-3 text-muted"}),Object(h.jsx)("div",{className:"mb-3 mb-0 text-center",children:Object(h.jsx)(u.a,{variant:"primary",type:"submit",disabled:s,children:e("Sign Up")})})]})]})]})}}}]);
//# sourceMappingURL=21.8bce0609.chunk.js.map