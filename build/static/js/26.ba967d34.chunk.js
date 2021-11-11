(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[26],{294:function(e,t,a){"use strict";var s=a(35),c=a(2),n=a(33),r=a(48),l=a(0),i=a.n(l),o=a(418),d=a(46),b=a.n(d),u=a(5),j=function(e){var t=e.tableProps,a=e.sizePerPageList;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[Object(u.jsx)("label",{className:"me-1",children:"Display :"}),Object(u.jsx)("select",{value:t.state.pageSize,onChange:function(e){t.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:a.map((function(e,t){return Object(u.jsx)("option",{value:e.value,children:e.text},t)}))}),Object(u.jsxs)("span",{className:"mx-3",children:["Page"," ",Object(u.jsxs)("strong",{children:[t.state.pageIndex+1," of ",t.pageOptions.length]})," "]}),Object(u.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[Object(u.jsx)("label",{children:"Go to page : "}),Object(u.jsx)("input",{type:"number",defaultValue:t.state.pageIndex+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;t.gotoPage(a)},className:"form-control w-25 ms-1 d-inline-block"})]}),Object(u.jsxs)("div",{className:"pagination pagination-rounded d-inline-flex ms-auto",children:[Object(u.jsx)("button",{onClick:function(){return t.gotoPage(0)},className:"page-link",disabled:!t.canPreviousPage,children:"<<"})," ",Object(u.jsx)("button",{onClick:function(){return t.previousPage()},className:"page-link",disabled:!t.canPreviousPage,children:"<"})," ",Object(u.jsx)("button",{onClick:function(){return t.nextPage()},className:"page-link",disabled:!t.canNextPage,children:">"})," ",Object(u.jsx)("button",{onClick:function(){return t.gotoPage(t.pageCount-1)},className:"page-link",disabled:!t.canNextPage,children:">>"})," "]})]})})},O=["indeterminate"],g=function(e){var t=e.preGlobalFilteredRows,a=e.globalFilter,s=e.setGlobalFilter,c=e.searchBoxClass,n=t.length,l=i.a.useState(a),d=Object(r.a)(l,2),j=d[0],O=d[1],g=Object(o.useAsyncDebounce)((function(e){s(e||void 0)}),200);return Object(u.jsx)("div",{className:b()(c),children:Object(u.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",Object(u.jsx)("input",{value:j||"",onChange:function(e){O(e.target.value),g(e.target.value)},placeholder:"".concat(n," records..."),className:"form-control w-auto ms-1"})]})})},p=Object(l.forwardRef)((function(e,t){var a=e.indeterminate,s=Object(n.a)(e,O),r=Object(l.useRef)(),i=t||r;return Object(l.useEffect)((function(){i.current.indeterminate=a}),[i,a]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("input",Object(c.a)({type:"checkbox",className:"form-check-input",ref:i},s)),Object(u.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})}));t.a=function(e){var t=e.isSearchable||!1,a=e.isSortable||!1,n=e.pagination||!1,r=e.isSelectable||!1,l=e.isExpandable||!1,i=Object(o.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},t&&o.useGlobalFilter,a&&o.useSortBy,l&&o.useExpanded,n&&o.usePagination,r&&o.useRowSelect,(function(e){r&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllPageRowsSelectedProps;return Object(u.jsx)("div",{children:Object(u.jsx)(p,Object(c.a)({},t()))})},Cell:function(e){var t=e.row;return Object(u.jsx)("div",{children:Object(u.jsx)(p,Object(c.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(s.a)(e))})),l&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var t=e.getToggleAllRowsExpandedProps,a=e.isAllRowsExpanded;return Object(u.jsx)("span",Object(c.a)(Object(c.a)({},t()),{},{children:a?"-":"+"}))},Cell:function(e){var t=e.row;return t.canExpand?Object(u.jsx)("span",Object(c.a)(Object(c.a)({},t.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*t.depth,"rem")}})),{},{children:t.isExpanded?"-":"+"})):null}}].concat(Object(s.a)(e))}))})),d=n?i.page:i.rows;return Object(u.jsxs)(u.Fragment,{children:[t&&Object(u.jsx)(g,{preGlobalFilteredRows:i.preGlobalFilteredRows,globalFilter:i.state.globalFilter,setGlobalFilter:i.setGlobalFilter,searchBoxClass:e.searchBoxClass}),Object(u.jsx)("div",{className:"table-responsive",children:Object(u.jsxs)("table",Object(c.a)(Object(c.a)({},i.getTableProps()),{},{className:b()("table table-centered react-table",e.tableClass),children:[Object(u.jsx)("thead",{className:e.theadClass,children:i.headerGroups.map((function(e){return Object(u.jsx)("tr",Object(c.a)(Object(c.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(u.jsx)("th",Object(c.a)(Object(c.a)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:b()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),Object(u.jsx)("tbody",Object(c.a)(Object(c.a)({},i.getTableBodyProps()),{},{children:(d||[]).map((function(e,t){return i.prepareRow(e),Object(u.jsx)("tr",Object(c.a)(Object(c.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(u.jsx)("td",Object(c.a)(Object(c.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),n&&Object(u.jsx)(j,{tableProps:i,sizePerPageList:e.sizePerPageList})]})}},768:function(e,t,a){"use strict";a.r(t);var s=a(4),c=a.n(s),n=a(138),r=a(48),l=a(0),i=a(340),o=a(268),d=a(451),b=a(207),u=a.n(b),j=(a(46),a(294)),O=a(18),g=a(5),p=new O.a,h=[{Header:"Wallet / ADNL",accessor:"adnlAddr",sort:!0,Cell:function(e){var t=e.value,a="https://ton.sh/address/"+t;return t.length<=48?Object(g.jsx)("a",{target:"_blank",href:a,children:t}):t}},{Header:"Status",accessor:"online",sort:!0,Cell:function(e){switch(e.value){case!0:return Object(g.jsx)("span",{className:"badge badge-success-lighten",children:"ONLINE"});default:return Object(g.jsx)("span",{className:"badge badge-danger-lighten",children:"OFFLINE"})}}},{Header:"Weight",accessor:"weight",sort:!0},{Header:"Efficiency",accessor:"efficiency",sort:!0,Cell:function(e){var t=e.value;switch(!0){case parseFloat(t)>90:return Object(g.jsxs)("span",{className:"text-success",children:[t,"%"]});case parseFloat(t)>50:return Object(g.jsxs)("span",{className:"text-warning",children:[t,"%"]});default:return Object(g.jsxs)("span",{className:"text-danger",children:[t,"%"]})}}}],x=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25}];t.default=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],b=Object(l.useState)(!0),O=Object(r.a)(b,2),f=(O[0],O[1]),m=Object(l.useState)(!1),v=Object(r.a)(m,2),P=(v[0],v[1]),N=Object(l.useState)(!1),w=Object(r.a)(N,2),S=(w[0],w[1],Object(l.useState)(!1)),k=Object(r.a)(S,2),C=(k[0],k[1],Object(l.useState)(0)),y=Object(r.a)(C,2);y[0],y[1];Object(l.useEffect)(Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F();case 1:case"end":return e.stop()}}),e)}))),[]);var F=function(){var e=Object(n.a)(c.a.mark((function e(){var t,a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,p.sendJRPC("/","vl");case 3:(t=e.sent)&&!t.error&&t.data&&"empty"!==t.data.result?(a=t.data.result,n=[],r=0,Object.keys(a).forEach((function(e){r+=a[e].weight})),Object.keys(a).forEach((function(e){n.push({adnlAddr:a[e].walletAddr?a[e].walletAddr:a[e].adnlAddr,status:a[e].status,efficiency:a[e].efficiency,weight:(a[e].weight/r*100).toFixed(1)+"%",online:a[e].online})})),s(n)):(s([]),P(!0)),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(o.a,{children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(d.a.Body,{children:[Object(g.jsx)("h4",{className:"header-title",children:"TON Validators list"}),a.length>0?Object(g.jsx)(j.a,{columns:h,data:a,sizePerPageList:x,isSortable:!0,pagination:!1}):Object(g.jsx)(u.a,{count:7})]})})})})})}}}]);
//# sourceMappingURL=26.ba967d34.chunk.js.map