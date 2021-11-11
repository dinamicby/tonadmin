(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[24],{344:function(e,t,s){"use strict";var c=s(0),a=s(345),n=s.n(a),l=s(46),i=s.n(l),r=s(5),j=Object(c.forwardRef)((function(e,t){return Object(r.jsx)("input",{type:"text",className:"form-control date",onClick:e.onClick,value:e.value,onChange:function(){console.log("date value changed")},ref:t})})),d=Object(c.forwardRef)((function(e,t){return Object(r.jsxs)("div",{className:"input-group",ref:t,children:[Object(r.jsx)("input",{type:"text",className:"form-control form-control-light",onClick:e.onClick,value:e.value,readOnly:!0}),Object(r.jsx)("div",{className:"input-group-append",children:Object(r.jsx)("span",{className:"input-group-text bg-primary border-primary text-white",children:Object(r.jsx)("i",{className:"mdi mdi-calendar-range font-13"})})})]})}));t.a=function(e){var t=!0===(e.hideAddon||!1)?Object(r.jsx)(j,{}):Object(r.jsx)(d,{});return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(n.a,{customInput:t,timeIntervals:e.tI,className:i()("form-control",e.inputClass),selected:e.value,onChange:function(t){return e.onChange(t)},showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat||"MM/dd/yyyy",minDate:e.minDate,maxDate:e.maxDate,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})}},397:function(e,t,s){"use strict";s(0);var c=s(451),a=s(46),n=s.n(a),l=s(5);t.a=function(e){var t=e.textClass||"text-muted";return Object(l.jsx)(c.a,{className:n()("widget-flat",e.bgclassName),children:Object(l.jsxs)(c.a.Body,{children:[e.icon&&Object(l.jsx)("div",{className:"float-end",children:Object(l.jsx)("i",{className:n()(e.icon,"widget-icon")})}),Object(l.jsx)("h5",{className:n()("fw-normal","mt-0",t),title:e.description,children:e.title}),Object(l.jsx)("h3",{className:n()("mt-3","mb-3",e.textClass?e.textClass:null),children:e.stats}),e.trend&&Object(l.jsxs)("p",{className:n()("mb-0",t),children:[Object(l.jsxs)("span",{className:n()(e.trend.textClass,"me-2"),children:[Object(l.jsx)("i",{className:n()(e.trend.icon)})," ",e.trend.value]}),Object(l.jsx)("span",{className:"text-nowrap",children:e.trend.time})]})]})})}},770:function(e,t,s){"use strict";s.r(t);var c=s(48),a=s(0),n=s.n(a),l=s(340),i=s(268),r=s(344),j=s(397),d=s(5),m=function(){return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsxs)(l.a,{children:[Object(d.jsx)(i.a,{lg:6,children:Object(d.jsx)(j.a,{icon:"mdi mdi-account-multiple",description:"Number of Customers",title:"Customers",stats:"36,254",trend:{textClass:"text-success",icon:"mdi mdi-arrow-up-bold",value:"5.27%",time:"Since last month"}})}),Object(d.jsx)(i.a,{lg:6,children:Object(d.jsx)(j.a,{icon:"mdi mdi-cart-plus",description:"Number of Orders",title:"Orders",stats:"5,543",trend:{textClass:"text-danger",icon:"mdi mdi-arrow-down-bold",value:"1.08%",time:"Since last month"}})})]}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(i.a,{lg:6,children:Object(d.jsx)(j.a,{icon:"mdi mdi-currency-usd",description:"Revenue",title:"Revenue",stats:"$6,254",trend:{textClass:"text-danger",icon:"mdi mdi-arrow-down-bold",value:"7.00%",time:"Since last month"}})}),Object(d.jsx)(i.a,{lg:6,children:Object(d.jsx)(j.a,{icon:"mdi mdi-pulse",description:"Growth",title:"Growth",stats:"+ 30.56%",trend:{textClass:"text-success",icon:"mdi mdi-arrow-up-bold",value:"4.87%",time:"Since last month"}})})]})]})},o=s(198),b=s.n(o),h=s(451),x=s(755),O=function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsxs)(x.a,{className:"float-end",align:"end",children:[Object(d.jsx)(x.a.Toggle,{variant:"link",className:"arrow-none card-drop p-0 shadow-none",children:Object(d.jsx)("i",{className:"mdi mdi-dots-vertical"})}),Object(d.jsxs)(x.a.Menu,{children:[Object(d.jsx)(x.a.Item,{children:"Sales Report"}),Object(d.jsx)(x.a.Item,{children:"Export Report"}),Object(d.jsx)(x.a.Item,{children:"Profit"}),Object(d.jsx)(x.a.Item,{children:"Action"})]})]}),Object(d.jsx)("h4",{className:"header-title mb-3",children:"Projections Vs Actuals"}),Object(d.jsx)(b.a,{options:{grid:{padding:{left:0,right:0}},chart:{height:260,type:"bar",stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},zoom:{enabled:!1},legend:{show:!1},colors:["#727cf5","#e3eaef"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{labels:{formatter:function(e){return e+"k"}}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$"+e+"k"}}}},series:[{name:"Actual",data:[65,59,80,81,56,89,40,32,65,59,80,81]},{name:"Projection",data:[89,40,32,65,59,80,81,56,89,40,65,59]}],type:"bar",className:"apex-charts",height:260})]})})},p=function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsxs)(x.a,{className:"float-end",align:"end",children:[Object(d.jsx)(x.a.Toggle,{variant:"link",className:"arrow-none card-drop p-0 shadow-none",children:Object(d.jsx)("i",{className:"mdi mdi-dots-vertical"})}),Object(d.jsxs)(x.a.Menu,{children:[Object(d.jsx)(x.a.Item,{children:"Sales Report"}),Object(d.jsx)(x.a.Item,{children:"Export Report"}),Object(d.jsx)(x.a.Item,{children:"Profit"}),Object(d.jsx)(x.a.Item,{children:"Action"})]})]}),Object(d.jsx)("h4",{className:"header-title mb-3",children:"Revenue"}),Object(d.jsx)("div",{className:"chart-content-bg",children:Object(d.jsxs)(l.a,{className:"text-center",children:[Object(d.jsxs)(i.a,{md:6,children:[Object(d.jsx)("p",{className:"text-muted mb-0 mt-3",children:"Current Week"}),Object(d.jsxs)("h2",{className:"fw-normal mb-3",children:[Object(d.jsx)("small",{className:"mdi mdi-checkbox-blank-circle text-primary align-middle me-1"}),Object(d.jsx)("span",{children:"$58,254"})]})]}),Object(d.jsxs)(i.a,{md:6,children:[Object(d.jsx)("p",{className:"text-muted mb-0 mt-3",children:"Previous Week"}),Object(d.jsxs)("h2",{className:"fw-normal mb-3",children:[Object(d.jsx)("small",{className:"mdi mdi-checkbox-blank-circle text-success align-middle me-1"}),Object(d.jsx)("span",{children:"$69,524"})]})]})]})}),Object(d.jsxs)("div",{className:"dash-item-overlay d-none d-md-block",children:[Object(d.jsx)("h5",{children:"Today's Earning: $2,562.30"}),Object(d.jsx)("p",{className:"text-muted font-13 mb-3 mt-2",children:"Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus..."}),Object(d.jsxs)("a",{href:"/",className:"btn btn-outline-primary",children:["View Statements",Object(d.jsx)("i",{className:"mdi mdi-arrow-right ms-2"})]})]}),Object(d.jsx)(b.a,{options:{chart:{height:364,type:"line",dropShadow:{enabled:!0,opacity:.1,blur:7,left:-7,top:7},toolbar:{show:!1},parentHeightOffset:0},grid:{padding:{left:0,right:0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},zoom:{enabled:!1},legend:{show:!1},colors:["#727cf5","#0acf97","#fa5c7c","#ffbc00"],xaxis:{type:"string",categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tooltip:{enabled:!1},axisBorder:{show:!1}},yaxis:{labels:{formatter:function(e){return e+"k"}}}},series:[{name:"Current Week",data:[10,20,15,25,20,30,20]},{name:"Previous Week",data:[0,15,10,30,15,35,25]}],type:"line",className:"apex-charts mt-3",height:364})]})})},f=s(779),u=(s(273),s(734),s(2)),N=function(e){var t=e.width,s=e.height,n=e.options,l=e.type,i=l+(new Date).getTime(),r=Object(a.useState)(),j=Object(c.a)(r,2),m=j[0],o=j[1];return Object(a.useEffect)((function(){if(!m){var e=new window.jsVectorMap(Object(u.a)({selector:"#"+i,map:l},n));o(e)}}),[i,m,n,l]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{id:i,style:{width:t,height:s}})})},g=function(e){var t=e.width,s=e.height,c=e.options;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(N,{width:t,height:s,options:c,type:"world"})})},w=(s(735),s(736),s(737),s(738),s(739),s(740),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(h.a,{children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsxs)(x.a,{className:"float-end",align:"end",children:[Object(d.jsx)(x.a.Toggle,{variant:"link",className:"arrow-none card-drop p-0 shadow-none",children:Object(d.jsx)("i",{className:"mdi mdi-dots-vertical"})}),Object(d.jsxs)(x.a.Menu,{children:[Object(d.jsx)(x.a.Item,{children:"Sales Report"}),Object(d.jsx)(x.a.Item,{children:"Export Report"}),Object(d.jsx)(x.a.Item,{children:"Profit"}),Object(d.jsx)(x.a.Item,{children:"Action"})]})]}),Object(d.jsx)("h4",{className:"header-title mb-3",children:"Revenue By Location"}),Object(d.jsx)("div",{className:"mb-4 mt-4",children:Object(d.jsx)(g,{height:"224px",width:"100%",options:{zoomOnScroll:!1,markers:[{name:"New York",coords:[40.71,-74]},{name:"San Francisco",coords:[37.77,-122.41]},{name:"Sydney",coords:[-33.86,151.2]},{name:"Singapore",coords:[1.3,103.8]}],markerStyle:{initial:{r:9,fill:"#727cf5","fill-opacity":.9,stroke:"#fff","stroke-width":7,"stroke-opacity":.4},hover:{fill:"#727cf5",stroke:"#fff","fill-opacity":1,"stroke-width":1.5}},regionStyle:{initial:{fill:"#e3eaef"}}}})}),Object(d.jsx)("h5",{className:"mb-1 mt-0 fw-normal",children:"New York"}),Object(d.jsxs)("div",{className:"progress-w-percent",children:[Object(d.jsx)("span",{className:"progress-value fw-bold",children:"72k"}),Object(d.jsx)(f.a,{now:72,className:"progress-sm"})]}),Object(d.jsx)("h5",{className:"mb-1 mt-0 fw-normal",children:"San Francisco"}),Object(d.jsxs)("div",{className:"progress-w-percent",children:[Object(d.jsx)("span",{className:"progress-value fw-bold",children:"39k"}),Object(d.jsx)(f.a,{now:39,className:"progress-sm"})]}),Object(d.jsx)("h5",{className:"mb-1 mt-0 fw-normal",children:"Sydney"}),Object(d.jsxs)("div",{className:"progress-w-percent",children:[Object(d.jsx)("span",{className:"progress-value fw-bold",children:"25k"}),Object(d.jsx)(f.a,{now:25,className:"progress-sm"})]}),Object(d.jsx)("h5",{className:"mb-1 mt-0 fw-normal",children:"Singapore"}),Object(d.jsxs)("div",{className:"progress-w-percent mb-0",children:[Object(d.jsx)("span",{className:"progress-value fw-bold",children:"61k"}),Object(d.jsx)(f.a,{now:61,className:"progress-sm"})]})]})})})}),y=function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsxs)(x.a,{className:"float-end",align:"end",children:[Object(d.jsx)(x.a.Toggle,{variant:"link",className:"arrow-none card-drop p-0 shadow-none",children:Object(d.jsx)("i",{className:"mdi mdi-dots-vertical"})}),Object(d.jsxs)(x.a.Menu,{children:[Object(d.jsx)(x.a.Item,{children:"Sales Report"}),Object(d.jsx)(x.a.Item,{children:"Export Report"}),Object(d.jsx)(x.a.Item,{children:"Profit"}),Object(d.jsx)(x.a.Item,{children:"Action"})]})]}),Object(d.jsx)("h4",{className:"header-title",children:"Total Sales"}),Object(d.jsx)(b.a,{options:{chart:{height:340,type:"donut"},colors:["#727cf5","#0acf97","#fa5c7c","#ffbc00"],legend:{show:!1},responsive:[{breakpoint:376,options:{chart:{width:250,height:250},legend:{position:"bottom"}}}]},series:[44,55,41,17],type:"donut",height:236,className:"apex-charts mb-4 mt-4"}),Object(d.jsxs)("div",{className:"chart-widget-list",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"mdi mdi-square text-primary"})," Direct",Object(d.jsx)("span",{className:"float-end",children:"$300.56"})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"mdi mdi-square text-danger"})," Affilliate",Object(d.jsx)("span",{className:"float-end",children:"$135.18"})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"mdi mdi-square text-success"})," Sponsored",Object(d.jsx)("span",{className:"float-end",children:"$48.96"})]}),Object(d.jsxs)("p",{className:"mb-0",children:[Object(d.jsx)("i",{className:"mdi mdi-square text-warning"})," E-mail",Object(d.jsx)("span",{className:"float-end",children:"$154.02"})]})]})]})})},v=s(452),k=s(46),S=s.n(k),A=function(e){var t=e.children||null,s=e.tag;return Object(d.jsx)(s,Object(u.a)(Object(u.a)({className:S()("timeline-alt","pb-0",e.className)},e),{},{children:t}))};A.defaultProps={tag:"div"};var C=A,I=function(e){var t=e.children||null,s=e.tag;return Object(d.jsx)(s,Object(u.a)(Object(u.a)({className:S()("timeline-item",e.className)},e),{},{children:t}))};I.defaultProps={tag:"div"};var P=I,R=function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsxs)(x.a,{className:"float-end",align:"end",children:[Object(d.jsx)(x.a.Toggle,{variant:"link",className:"arrow-none card-drop p-0 shadow-none",children:Object(d.jsx)("i",{className:"mdi mdi-dots-vertical"})}),Object(d.jsxs)(x.a.Menu,{children:[Object(d.jsx)(x.a.Item,{children:"Sales Report"}),Object(d.jsx)(x.a.Item,{children:"Export Report"}),Object(d.jsx)(x.a.Item,{children:"Profit"}),Object(d.jsx)(x.a.Item,{children:"Action"})]})]}),Object(d.jsx)("h4",{className:"header-title mb-2",children:"Recent Activity"}),Object(d.jsx)(v.a,{style:{maxHeight:"419px",width:"100%"},children:Object(d.jsxs)(C,{children:[Object(d.jsxs)(P,{children:[Object(d.jsx)("i",{className:"mdi mdi-upload bg-info-lighten text-info timeline-icon"}),Object(d.jsxs)("div",{className:"timeline-item-info",children:[Object(d.jsx)("a",{href:"/",className:"text-info fw-bold mb-1 d-block",children:"You sold an item"}),Object(d.jsx)("small",{children:"Paul Burgess just purchased \u201cHyper - Admin Dashboard\u201d!"}),Object(d.jsx)("p",{className:"mb-0 pb-2",children:Object(d.jsx)("small",{className:"text-muted",children:"5 minutes ago"})})]})]}),Object(d.jsxs)(P,{children:[Object(d.jsx)("i",{className:"mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"}),Object(d.jsxs)("div",{className:"timeline-item-info",children:[Object(d.jsx)("a",{href:"/",className:"text-primary fw-bold mb-1 d-block",children:"Product on the Bootstrap Market"}),Object(d.jsxs)("small",{children:["Dave Gamache added ",Object(d.jsx)("span",{className:"fw-bold",children:"Admin Dashboard"})]}),Object(d.jsx)("p",{className:"mb-0 pb-2",children:Object(d.jsx)("small",{className:"text-muted",children:"30 minutes ago"})})]})]}),Object(d.jsxs)(P,{children:[Object(d.jsx)("i",{className:"mdi mdi-microphone bg-info-lighten text-info timeline-icon"}),Object(d.jsxs)("div",{className:"timeline-item-info",children:[Object(d.jsx)("a",{href:"/",className:"text-info fw-bold mb-1 d-block",children:"Robert Delaney"}),Object(d.jsxs)("small",{children:["Send you message",Object(d.jsx)("span",{className:"fw-bold",children:'"Are you there?"'})]}),Object(d.jsx)("p",{className:"mb-0 pb-2",children:Object(d.jsx)("small",{className:"text-muted",children:"2 hours ago"})})]})]}),Object(d.jsxs)(P,{children:[Object(d.jsx)("i",{className:"mdi mdi-upload bg-primary-lighten text-primary timeline-icon"}),Object(d.jsxs)("div",{className:"timeline-item-info",children:[Object(d.jsx)("a",{href:"/",className:"text-primary fw-bold mb-1 d-block",children:"Audrey Tobey"}),Object(d.jsxs)("small",{children:["Uploaded a photo ",Object(d.jsx)("span",{className:"fw-bold",children:'"Error.jpg"'})," "]}),Object(d.jsx)("p",{className:"mb-0 pb-2",children:Object(d.jsx)("small",{className:"text-muted",children:"14 hours ago"})})]})]}),Object(d.jsxs)(P,{children:[Object(d.jsx)("i",{className:"mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"}),Object(d.jsxs)("div",{className:"timeline-item-info",children:[Object(d.jsx)("a",{href:"/",className:"text-primary fw-bold mb-1 d-block",children:"Product on the Bootstrap Market"}),Object(d.jsxs)("small",{children:["Dave Gamache added ",Object(d.jsx)("span",{className:"fw-bold",children:"Admin Dashboard"})]}),Object(d.jsx)("p",{className:"mb-0 pb-2",children:Object(d.jsx)("small",{className:"text-muted",children:"30 minutes ago"})})]})]}),Object(d.jsxs)(P,{children:[Object(d.jsx)("i",{className:"mdi mdi-microphone bg-info-lighten text-info timeline-icon"}),Object(d.jsxs)("div",{className:"timeline-item-info",children:[Object(d.jsx)("a",{href:"/",className:"text-info fw-bold mb-1 d-block",children:"Robert Delaney"}),Object(d.jsxs)("small",{children:["Send you message",Object(d.jsx)("span",{className:"fw-bold",children:'"Are you there?"'})]}),Object(d.jsx)("p",{className:"mb-0 pb-2",children:Object(d.jsx)("small",{className:"text-muted",children:"2 hours ago"})})]})]}),Object(d.jsxs)(P,{children:[Object(d.jsx)("i",{className:"mdi mdi-upload bg-primary-lighten text-primary timeline-icon"}),Object(d.jsxs)("div",{className:"timeline-item-info",children:[Object(d.jsx)("a",{href:"/",className:"text-primary fw-bold mb-1 d-block",children:"Audrey Tobey"}),Object(d.jsxs)("small",{children:["Uploaded a photo ",Object(d.jsx)("span",{className:"fw-bold",children:'"Error.jpg"'})," "]}),Object(d.jsx)("p",{className:"mb-0 pb-2",children:Object(d.jsx)("small",{className:"text-muted",children:"14 hours ago"})})]})]})]})})]})})},M=s(522),$=s(742),T=function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsxs)(M.a,{variant:"link",className:"float-end",children:["Export ",Object(d.jsx)("i",{className:"mdi mdi-download ms-1"})]}),Object(d.jsx)("h4",{className:"header-title mt-2 mb-3",children:"Top Selling Products"}),Object(d.jsx)($.a,{hover:!0,responsive:!0,className:"mb-0",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"ASOS Ridley High Waist"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"07 April 2018"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$79.49"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Price"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"82"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Quantity"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$6,518.18"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Amount"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"Marco Lightweight Shirt"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"25 March 2018"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$128.50"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Price"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"37"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Quantity"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$4,754.50"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Amount"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"Half Sleeve Shirt"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"17 March 2018"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$39.99"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Price"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"64"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Quantity"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$2,559.36"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Amount"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"Lightweight Jacket"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"12 March 2018"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$20.00"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Price"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"184"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Quantity"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$3,680.00"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Amount"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"Marco Shoes"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"05 March 2018"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$28.49"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Price"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"69"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Quantity"})]}),Object(d.jsxs)("td",{children:[Object(d.jsx)("h5",{className:"font-14 my-1 fw-normal",children:"$1,965.81"}),Object(d.jsx)("span",{className:"text-muted font-13",children:"Amount"})]})]})]})})]})})};t.default=function(){var e=Object(a.useState)(new Date),t=Object(c.a)(e,2),s=t[0],n=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{children:Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"page-title-box",children:[Object(d.jsx)("div",{className:"page-title-right",children:Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("div",{className:"input-group",children:Object(d.jsx)(r.a,{value:s,inputClass:"form-control-light",onChange:function(e){!function(e){e&&n(e)}(e)}})}),Object(d.jsx)("button",{className:"btn btn-primary ms-2",children:Object(d.jsx)("i",{className:"mdi mdi-autorenew"})}),Object(d.jsx)("button",{className:"btn btn-primary ms-1",children:Object(d.jsx)("i",{className:"mdi mdi-filter-variant"})})]})}),Object(d.jsx)("h4",{className:"page-title",children:"Dashboard"})]})})}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(i.a,{xl:5,children:Object(d.jsx)(m,{})}),Object(d.jsx)(i.a,{xl:7,children:Object(d.jsx)(O,{})})]}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(i.a,{xl:8,children:Object(d.jsx)(p,{})}),Object(d.jsx)(i.a,{xl:4,children:Object(d.jsx)(w,{})})]}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(i.a,{xl:{span:6,order:1},lg:{order:2},children:Object(d.jsx)(T,{})}),Object(d.jsx)(i.a,{xl:3,lg:{span:6,order:1},children:Object(d.jsx)(y,{})}),Object(d.jsx)(i.a,{xl:3,lg:{span:6,order:1},children:Object(d.jsx)(R,{})})]})]})}}}]);
//# sourceMappingURL=24.48f6a28a.chunk.js.map