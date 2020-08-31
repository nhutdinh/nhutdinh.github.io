(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{44:function(e,t,n){e.exports=n(73)},49:function(e,t,n){},50:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(21),o=n.n(i),u=(n(49),n(50),n(11)),l=n(12),s=n(5);!function(e){e.SEARCH_USERS="@UserSearch/SEARCH_USERS",e.GET_USER="@UserSearch/GET_USER",e.SEARCH_USERS_OK="@UserSearch/SEARCH_USERS_OK",e.SEARCH_USERS_ERROR="@UserSearch/SEARCH_USERS_ERROR"}(a||(a={}));var E,d={searchStr:"",results:[],loading:!0,error:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SEARCH_USERS:return Object(s.a)(Object(s.a)({},e),{},{searchStr:t.payload,results:[],loading:!0});case a.SEARCH_USERS_OK:return Object(s.a)(Object(s.a)({},e),{},{results:t.payload,loading:!1});case a.SEARCH_USERS_ERROR:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:t.payload});default:return e}};!function(e){e.GET_USER_OVERVIEW="@UserOverview/GET_USER_OVERVIEW",e.GET_USER_OVERVIEW_OK="@UserOverview/GET_USER_OVERVIEW_OK",e.GET_USER_OVERVIEW_ERROR="@UserOverview/GET_USER_OVERVIEW_ERROR"}(E||(E={}));var p,O={userName:"",loading:!0,error:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.GET_USER_OVERVIEW:return Object(s.a)(Object(s.a)({},e),{},{userName:t.payload,loading:!0});case E.GET_USER_OVERVIEW_OK:return Object(s.a)(Object(s.a)({},e),{},{user:t.payload,loading:!1});case E.GET_USER_OVERVIEW_ERROR:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:t.payload});default:return e}},R=n(18);!function(e){e.GET_USER_REPOSITORIES="@UserRepositories/GET_USER_REPOSITORIES",e.RESET_USER_REPOSITORIES="@UserRepositories/RESET_USER_REPOSITORIES",e.GET_MORE_USER_REPOSITORIES="@UserRepositories/GET_MORE_USER_REPOSITORIES",e.GET_USER_REPOSITORIES_OK="@UserRepositories/GET_USER_REPOSITORIES_OK",e.GET_MORE_USER_REPOSITORIES_OK="@UserRepositories/GET_MORE_USER_REPOSITORIES_OK",e.GET_USER_REPOSITORIES_ERROR="@UserRepositories/GET_USER_REPOSITORIES_ERROR"}(p||(p={}));var f,v={repos:[],loading:!0,error:"",page:1,lastPage:0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.GET_USER_REPOSITORIES:case p.GET_MORE_USER_REPOSITORIES:return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case p.GET_MORE_USER_REPOSITORIES_OK:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,page:e.page+1,repos:[].concat(Object(R.a)(e.repos),Object(R.a)(t.payload))});case p.GET_USER_REPOSITORIES_OK:return Object(s.a)(Object(s.a)({},e),{},{repos:t.payload.repos,loading:!1,lastPage:t.payload.lastPage});case p.GET_USER_REPOSITORIES_ERROR:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:t.payload});case p.RESET_USER_REPOSITORIES:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:"",page:0});default:return e}};!function(e){e.GET_USER_ORGANIZATIONS="@UserOrganizations/GET_USER_ORGANIZATIONS",e.RESET_USER_ORGANIZATIONS="@UserOrganizations/RESET_USER_ORGANIZATIONS",e.GET_MORE_USER_ORGANIZATIONS="@UserOrganizations/GET_MORE_USER_ORGANIZATIONS",e.GET_USER_ORGANIZATIONS_OK="@UserOrganizations/GET_USER_ORGANIZATIONS_OK",e.GET_MORE_USER_ORGANIZATIONS_OK="@UserOrganizations/GET_MORE_USER_ORGANIZATIONS_OK",e.GET_USER_ORGANIZATIONS_ERROR="@UserOrganizations/GET_USER_ORGANIZATIONS_ERROR"}(f||(f={}));var h={orgs:[],loading:!0,error:"",page:1,lastPage:0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.GET_USER_ORGANIZATIONS:case f.GET_MORE_USER_ORGANIZATIONS:return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case f.GET_MORE_USER_ORGANIZATIONS_OK:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,page:e.page+1,orgs:[].concat(Object(R.a)(e.orgs),Object(R.a)(t.payload))});case f.GET_USER_ORGANIZATIONS_OK:return Object(s.a)(Object(s.a)({},e),{},{orgs:t.payload.orgs,loading:!1,lastPage:t.payload.lastPage});case f.GET_USER_ORGANIZATIONS_ERROR:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:t.payload});case f.RESET_USER_ORGANIZATIONS:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:"",page:0});default:return e}},b=Object(l.combineReducers)({overview:g,repoData:_,orgsData:S}),y=Object(l.combineReducers)({userSearch:m,user:b}),x=n(43),T=n(38),I=n(7),j=n.n(I),w=n(8),U=n(15),G=n(13),N=n.n(G),A=function(e){return{type:a.SEARCH_USERS_OK,payload:e}},k=j.a.mark(P),M=j.a.mark(z),C=function(){var e=Object(U.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("https://api.github.com/search/users?q=".concat(t," in:login&per_page=10")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function P(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.payload){n.next=4;break}return n.next=3,Object(w.c)(A([]));case 3:return n.abrupt("return");case 4:return n.prev=4,n.next=7,Object(w.b)(C,e.payload);case 7:return t=n.sent,n.next=10,Object(w.c)(A(t.data.items));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(4),n.next=16,Object(w.c)((r=n.t0,{type:a.SEARCH_USERS_ERROR,payload:r}));case 16:case"end":return n.stop()}var r}),k,null,[[4,12]])}function z(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.e)(a.SEARCH_USERS,P);case 2:case"end":return e.stop()}}),M)}var V=j.a.mark(L),Z=j.a.mark(W),K=function(){var e=Object(U.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("https://api.github.com/users/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function L(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.b)(K,e.payload);case 3:return t=n.sent,n.next=6,Object(w.c)((r=t.data,{type:E.GET_USER_OVERVIEW_OK,payload:r}));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(w.c)((a=n.t0,{type:E.GET_USER_OVERVIEW_ERROR,payload:a}));case 12:case"end":return n.stop()}var a,r}),V,null,[[0,8]])}function W(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)(E.GET_USER_OVERVIEW,L);case 2:case"end":return e.stop()}}),Z)}var D=function(e){return{type:p.GET_USER_REPOSITORIES_ERROR,payload:e}},H=function(e){if(!e.headers.link)return 0;var t=e.headers.link.split(","),n=t[t.length-1].match(/[&]page=(\d+).*; rel="last"$/);return n&&n[1]?+n[1]:0},B=j.a.mark($),X=j.a.mark(q),F=j.a.mark(Y),J=function(){var e=Object(U.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("https://api.github.com/users/".concat(t.username,"/repos?per_page=20&page=").concat(t.page)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function $(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.b)(J,e.payload);case 3:return t=n.sent,n.next=6,Object(w.c)((a=t.data,r=H(t),{type:p.GET_USER_REPOSITORIES_OK,payload:{repos:a,lastPage:r}}));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(w.c)(D("error"));case 12:case"end":return n.stop()}var a,r}),B,null,[[0,8]])}function q(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.b)(J,e.payload);case 3:return t=n.sent,n.next=6,Object(w.c)((a=t.data,{type:p.GET_MORE_USER_REPOSITORIES_OK,payload:a}));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(w.c)(D("error"));case 12:case"end":return n.stop()}var a}),X,null,[[0,8]])}function Y(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)(p.GET_USER_REPOSITORIES,$);case 2:return e.next=4,Object(w.d)(p.GET_MORE_USER_REPOSITORIES,q);case 4:case"end":return e.stop()}}),F)}var Q=function(e){return{type:f.GET_USER_ORGANIZATIONS_ERROR,payload:e}},ee=j.a.mark(re),te=j.a.mark(ce),ne=j.a.mark(ie),ae=function(){var e=Object(U.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("https://api.github.com/users/".concat(t.username,"/orgs?per_page=20&page=").concat(t.page)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function re(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.b)(ae,e.payload);case 3:return t=n.sent,n.next=6,Object(w.c)((a=t.data,r=H(t),{type:f.GET_USER_ORGANIZATIONS_OK,payload:{orgs:a,lastPage:r}}));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(w.c)(Q("error"));case 12:case"end":return n.stop()}var a,r}),ee,null,[[0,8]])}function ce(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.b)(ae,e.payload);case 3:return t=n.sent,n.next=6,Object(w.c)((a=t.data,{type:f.GET_MORE_USER_ORGANIZATIONS_OK,payload:a}));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(w.c)(Q("error"));case 12:case"end":return n.stop()}var a}),te,null,[[0,8]])}function ie(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)(f.GET_USER_ORGANIZATIONS,re);case 2:return e.next=4,Object(w.d)(f.GET_MORE_USER_ORGANIZATIONS,ce);case 4:case"end":return e.stop()}}),ne)}var oe=j.a.mark(ue);function ue(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([z(),W(),Y(),ie()]);case 2:case"end":return e.stop()}}),oe)}var le=n(19),se=n(3),Ee=n(4);function de(){var e=Object(se.a)(["\n  background-color: ",";\n  div {\n    padding: 0.5rem 2.5rem;\n  }\n"]);return de=function(){return e},e}function me(){var e=Object(se.a)(["\n  position: absolute;\n  box-sizing: border-box;\n  list-style: none;\n  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);\n  width: 100%;\n  border-radius: 1.375rem;\n  top: 0;\n  padding-inline-start: 0;\n  margin-block-start: 0;\n  padding: 2.5rem 0 0.5rem;\n  background-color: white;\n"]);return me=function(){return e},e}function pe(){var e=Object(se.a)(["\n  width: 500px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  svg {\n    position: absolute;\n    left: 0.75rem;\n    z-index: 2;\n  }\n  input {\n    box-sizing: border-box;\n    box-shadow: ",";\n    height: 2.5rem;\n    border: none;\n    border-radius: 1.375rem;\n    outline: none;\n    padding: 0 2.5rem;\n    width: 100%;\n    position: relative;\n    z-index: 1;\n    font-size: 1rem;\n  }\n"]);return pe=function(){return e},e}var Oe=Ee.a.div(pe(),(function(e){return e.showSugesstions?"none":"0 1px 6px 0 rgba(32, 33, 36, 0.28)"})),ge=Ee.a.ul(me()),Re=Ee.a.li(de(),(function(e){return e.isActive?"rgba(32, 33, 36, 0.28)":"none"})),fe=function(){return c.a.createElement("svg",{"data-testid":"search-svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#5F6368"},c.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))},ve=n(42),_e=n.n(ve),he=function(e){var t=c.a.useRef(null),n=c.a.useRef({originInputValue:""}),a=c.a.useState(""),r=Object(le.a)(a,2),i=r[0],o=r[1],u=c.a.useState(0),l=Object(le.a)(u,2),s=l[0],E=l[1],d=c.a.useState(!1),m=Object(le.a)(d,2),p=m[0],O=m[1],g=c.a.useCallback(_e()(e.onSearch,200),[e.onSearch]),R=function(e){o(e),setTimeout((function(){t&&t.current&&t.current.setSelectionRange(e.length,e.length)}),0)};return c.a.useEffect((function(){O(e.searchResult.length>0)}),[e.searchResult.length]),c.a.createElement(Oe,{showSugesstions:p},c.a.createElement(fe,null),c.a.createElement("input",{placeholder:"Search user...",ref:t,value:i,onChange:function(e){g(e.target.value),E(0),o(e.target.value),n&&n.current&&(n.current.originInputValue=e.target.value)},onKeyDown:function(t){if("Enter"===t.key&&(e.onSelectItem(t.currentTarget.value),O(!1)),"Escape"===t.key&&(O(!1),o(n.current.originInputValue)),p){if("ArrowUp"===t.key){var a=0===s?e.searchResult.length-1:s-1;E(a),R(e.searchResult[a||0].value)}if("ArrowDown"===t.key){var r=s===e.searchResult.length-1?0:s+1;E(r),R(e.searchResult[r].value)}}},"data-testid":"search-input__input"}),p&&c.a.createElement(ge,{"data-testid":"search-input__suggestions"},e.searchResult.map((function(t,n){return c.a.createElement(Re,{"data-testid":"search-input__suggestions__item",isActive:n===s,key:t.id,onClick:function(){!function(t){var n=e.searchResult[t];o(n.value),e.onSelectItem(n.value),O(!1)}(n)}},c.a.createElement("div",null,t.value))}))))},Se=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.userSearch.results.map((function(e){return{id:e.id,value:e.login}}))}));return c.a.createElement("div",{"data-testid":"user-search"},c.a.createElement(he,{searchResult:t,onSearch:function(t){var n;e((n=t,{type:a.SEARCH_USERS,payload:n}))},onSelectItem:function(t){var n;e((n=t,{type:E.GET_USER_OVERVIEW,payload:n}))}}))};function be(){var e=Object(se.a)(["\n  padding: 0.5rem 1rem;\n  border-bottom: ",";\n  :hover {\n    cursor: pointer;\n  }\n"]);return be=function(){return e},e}function ye(){var e=Object(se.a)(["\n  display: flex;\n"]);return ye=function(){return e},e}var xe=Ee.a.div(ye()),Te=Ee.a.div(be(),(function(e){return e.active?"2px solid red":""})),Ie=function(e){var t=c.a.useState(0),n=Object(le.a)(t,2),a=n[0],r=n[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(xe,null,e.tabs.map((function(e,t){return c.a.createElement(Te,{active:a===t,key:t,onClick:function(){return r(t)}},e.title)}))),c.a.createElement("div",null,e.tabs[a].content))},je=function(){return c.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 512.001 512.001"},c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M490.748,146.253c-16.294-27.433-39.185-53.528-54.641-67.218c-33.74-29.893-61.885-29.165-75.662-26.069 c-5.788,1.301-11.103,3.446-15.782,6.307C320.624,41.434,291.38,32.695,256,32.695s-64.625,8.739-88.663,26.579 c-4.68-2.861-9.994-5.007-15.782-6.307c-13.773-3.095-41.922-3.824-75.66,26.068c-15.457,13.691-38.347,39.786-54.643,67.219 C-0.81,183.395-5.724,213.44,6.646,235.557C21.75,262.56,44.66,269.47,63.155,271.174c-4.546,17.655-7.353,36.542-7.353,60.075 c0,31.193,7.1,58.029,21.105,79.763c12.311,19.108,30.035,34.409,52.679,45.478c41.838,20.451,92.185,22.816,126.415,22.816 s84.578-2.365,126.415-22.816c22.643-11.069,40.368-26.37,52.679-45.478c14.004-21.735,21.105-48.571,21.105-79.763 c0-23.532-2.807-42.419-7.353-60.075c18.495-1.705,41.406-8.616,56.509-35.618C517.724,213.441,512.809,183.395,490.748,146.253z M72.878,240.307c-16.368-0.43-29.678-3.599-38.879-20.048c-6.242-11.161-1.067-32.301,14.2-58.002 c14.489-24.393,35.286-48.079,48.478-59.766c21.786-19.304,38.118-20.367,45.802-19.338 c-22.867,27.876-36.883,64.104-48.604,99.327c-4.854,14.586-9.532,27.039-14.058,39.084 C77.397,228.008,75.069,234.206,72.878,240.307z M235.555,343.057c-8.107-8.103-12.35-16.609-12.35-20.823 c0-3.763,0.645-4.033,3.042-5.042c6.833-2.875,20.253-3.207,29.753-3.207s22.92,0.332,29.753,3.207 c2.397,1.008,3.042,1.28,3.042,5.042c0,4.214-4.242,12.719-12.35,20.823c-7.973,7.968-16.484,12.267-20.446,12.267 S243.528,351.025,235.555,343.057z M368.653,428.335c-24.051,11.755-55.889,18.131-96.983,19.394v-64.194 c12.304-4.748,22.324-13.708,26.93-18.311c6.475-6.471,21.535-23.615,21.535-42.989c0-15.849-7.894-27.899-22.228-33.929 c-9.554-4.02-21.696-5.66-41.906-5.66s-32.352,1.64-41.907,5.66c-14.333,6.03-22.228,18.079-22.228,33.929 c0,19.374,15.061,36.517,21.535,42.989c4.606,4.604,14.627,13.564,26.93,18.311v64.194c-41.094-1.262-72.932-7.637-96.983-19.394 c-37.822-18.488-56.208-50.245-56.208-97.086c0-40.072,9.234-64.649,22.013-98.664c4.413-11.745,9.413-25.057,14.456-40.21 C151.309,109.139,180.611,64.034,256,64.034S360.691,109.14,388.39,192.375c5.042,15.154,10.044,28.465,14.456,40.21 c12.779,34.015,22.013,58.591,22.013,98.664C424.86,378.09,406.474,409.847,368.653,428.335z M478.003,220.259 c-9.202,16.451-22.512,19.617-38.88,20.048c-2.192-6.102-4.518-12.299-6.938-18.743c-4.525-12.044-9.203-24.498-14.058-39.084 c-11.721-35.223-25.737-71.451-48.604-99.327c7.684-1.027,24.017,0.034,45.804,19.339c13.192,11.685,33.988,35.37,48.477,59.763 C479.07,187.958,484.245,209.099,478.003,220.259z"}),c.a.createElement("path",{d:"M203.851,199.256c-11.337,0-20.564,9.321-20.564,20.83c0,11.508,9.226,20.837,20.564,20.837 c11.352,0,20.577-9.33,20.577-20.837C224.428,208.577,215.203,199.256,203.851,199.256z"}),c.a.createElement("path",{d:"M307.995,199.093c-11.447,0-20.733,9.399-20.733,20.993c0,11.594,9.286,20.993,20.733,20.993 c11.434,0,20.719-9.399,20.719-20.993C328.715,208.492,319.429,199.093,307.995,199.093z"})))))};function we(){var e=Object(se.a)(["\n  margin-top: 1.5rem;\n"]);return we=function(){return e},e}function Ue(){var e=Object(se.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.875rem;\n  span {\n    margin-left: 0.25rem;\n  }\n"]);return Ue=function(){return e},e}function Ge(){var e=Object(se.a)(["\n  flex: 80%;\n  padding: 0 1.5rem;\n"]);return Ge=function(){return e},e}function Ne(){var e=Object(se.a)(["\n  flex: 20%;\n  padding: 0 1.5rem;\n  img {\n    width: 100%;\n    border-radius: 50%;\n  }\n  h3 {\n    color: #666;\n    margin-block-start: 0;\n  }\n  h2 {\n    margin-block-end: 0;\n  }\n  h4 {\n    font-weight: normal;\n  }\n"]);return Ne=function(){return e},e}function Ae(){var e=Object(se.a)(["\n  display: flex;\n"]);return Ae=function(){return e},e}var ke=Ee.a.div(Ae()),Me=Ee.a.div(Ne()),Ce=Ee.a.div(Ge()),Pe=Ee.a.div(Ue()),ze=Ee.a.div(we());function Ve(){var e=Object(se.a)(["\n  border-bottom: 1px solid #e1e4e8;\n  padding: 0.5rem 0 1.5rem 0;\n"]);return Ve=function(){return e},e}function Ze(){var e=Object(se.a)(["\n  flex: 80%;\n  padding: 0 1.5rem;\n"]);return Ze=function(){return e},e}function Ke(){var e=Object(se.a)(["\n  flex: 20%;\n  padding: 0 1.5rem;\n  img {\n    width: 100%;\n    border-radius: 50%;\n  }\n"]);return Ke=function(){return e},e}function Le(){var e=Object(se.a)(["\n  list-style: none;\n"]);return Le=function(){return e},e}var We=Ee.a.div(Le()),De=(Ee.a.div(Ke()),Ee.a.div(Ze()),Ee.a.div(Ve()));function He(){var e=Object(se.a)(["\n  a {\n    text-decoration: none;\n  }\n"]);return He=function(){return e},e}function Be(){var e=Object(se.a)(["\n  display: flex;\n  div {\n    margin-right: 1.5rem;\n  }\n  a {\n    text-decoration: none;\n  }\n"]);return Be=function(){return e},e}var Xe=Ee.a.div(Be()),Fe=Ee.a.div(He()),Je=function(){return c.a.createElement("svg",{className:"octicon octicon-star",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img"},c.a.createElement("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"}))},$e=function(){return c.a.createElement("svg",{className:"octicon octicon-repo-forked",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img"},c.a.createElement("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"}))},qe=function(e){return c.a.createElement(Fe,null,c.a.createElement("h3",null,c.a.createElement("a",{href:e.repo.html_url},e.repo.name)),c.a.createElement("p",null,e.repo.description),c.a.createElement(Xe,null,c.a.createElement("div",null,e.repo.language),c.a.createElement("div",null,c.a.createElement(Je,null)," ",e.repo.stargazers_count),c.a.createElement("div",null,c.a.createElement($e,null)," ",e.repo.forks)))};function Ye(){var e=Object(se.a)(["\n  text-align: center;\n  padding: 1.5rem 0;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return Ye=function(){return e},e}var Qe=Ee.a.div(Ye());function et(){var e=Object(se.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    height: 4.125rem;\n    width: auto;\n  }\n"]);return et=function(){return e},e}var tt=Ee.a.div(et()),nt=function(){return c.a.createElement("svg",{width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},c.a.createElement("g",{transform:"rotate(0 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(30 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(60 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(90 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(120 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(150 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(180 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(210 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(240 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(270 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(300 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}))),c.a.createElement("g",{transform:"rotate(330 50 50)"},c.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1c4595"},c.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}))))},at=function(e){return c.a.createElement(c.a.Fragment,null,e.loading&&c.a.createElement(tt,null,c.a.createElement(nt,null),"Loading..."))},rt=function(e){return e.isLastPage?c.a.createElement(c.a.Fragment,null):c.a.createElement("div",null,c.a.createElement(at,{loading:e.loading}),!e.loading&&c.a.createElement(Qe,{onClick:e.loadMore},"Load More"))},ct=function(){return c.a.createElement("svg",{className:"octicon octicon-repo UnderlineNav-octicon hide-sm",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","aria-hidden":"true"},c.a.createElement("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"}))};function it(){var e=Object(se.a)(["\n  text-align: center;\n  svg {\n    width: 3rem;\n  }\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);\n  padding: 1.5rem;\n"]);return it=function(){return e},e}var ot=Ee.a.div(it()),ut=function(e){return c.a.createElement(ot,null,e.children)};function lt(){var e=Object(se.a)(["\n  // position: relative;\n  // text-align: center;\n  svg {\n    text-align: center;\n  }\n  // border-radius: 0.75rem;\n  // box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);\n  // padding: 1.5rem;\n"]);return lt=function(){return e},e}var st=Ee.a.div(lt()),Et=function(e){return c.a.createElement(st,null,e.children,c.a.createElement(at,{loading:e.loading}))},dt=function(e){var t=Object(u.b)();c.a.useEffect((function(){var n;t((n={username:e.userName,page:0},{type:p.GET_USER_REPOSITORIES,payload:n}))}),[e.userName]),c.a.useEffect((function(){return function(){t({type:p.RESET_USER_REPOSITORIES})}}),[]);var n=Object(u.c)((function(e){return e.user.repoData}));return c.a.createElement(We,null,c.a.createElement(Et,{loading:n.loading&&1===n.page},n.repos.map((function(e){return c.a.createElement(De,{key:e.id},c.a.createElement(qe,{repo:e}))})),0===n.repos.length&&!n.loading&&c.a.createElement(ut,null,c.a.createElement("div",null,c.a.createElement(ct,null),c.a.createElement("h2",null,e.userName," hasn't created any repositories yet."))),c.a.createElement(rt,{loading:n.loading,loadMore:function(){var a;t((a={username:e.userName,page:n.page+1},{type:p.GET_MORE_USER_REPOSITORIES,payload:a}))},isLastPage:n.lastPage===n.page||0===n.lastPage})))};function mt(){var e=Object(se.a)(["\n  margin: 1rem 0;\n"]);return mt=function(){return e},e}function pt(){var e=Object(se.a)([""]);return pt=function(){return e},e}var Ot=Ee.a.div(pt()),gt=Ee.a.div(mt());function Rt(){var e=Object(se.a)(["\n  margin-left: 1rem;\n"]);return Rt=function(){return e},e}function ft(){var e=Object(se.a)(["\n  a {\n    text-decoration: none;\n  }\n  img {\n    border-radius: 50%;\n    width: 100px;\n    height: 100px;\n  }\n  border-radius: 12px;\n  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);\n  padding: 1.5rem;\n  display: flex;\n"]);return ft=function(){return e},e}var vt=Ee.a.div(ft()),_t=Ee.a.div(Rt()),ht=function(e){return c.a.createElement(vt,null,c.a.createElement("img",{src:e.org.avatar_url,alt:"organization logo"}),c.a.createElement(_t,null,c.a.createElement("h3",null,c.a.createElement("a",{href:e.org.url},e.org.login)),c.a.createElement("p",null,e.org.description)))},St=function(){return c.a.createElement("svg",{id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 399.83 399.83"},c.a.createElement("g",{id:"XMLID_23_"},c.a.createElement("path",{id:"XMLID_474_",d:"M244.649,354.788c-14.007,4.934-29.06,7.627-44.733,7.627c-15.655,0-30.693-2.688-44.687-7.611   c-5.56,9.071-12.557,17.174-20.762,24.061c20.077,8.71,42.206,13.55,65.448,13.55c23.236,0,45.361-4.838,65.435-13.544   C257.064,371.891,250.128,363.731,244.649,354.788z"}),c.a.createElement("path",{id:"XMLID_475_",d:"M112.006,125.046c-5.013-9.215-8.619-19.303-10.528-29.97C65.91,121.601,41.36,162.107,36.021,208.38   c10.009-3.621,20.555-5.64,31.22-5.933C73.007,171.734,89.204,144.655,112.006,125.046z"}),c.a.createElement("path",{id:"XMLID_476_",d:"M332.592,202.447c10.663,0.292,21.209,2.311,31.22,5.933c-5.34-46.272-29.889-86.779-65.457-113.304   c-1.909,10.667-5.515,20.755-10.528,29.97C310.628,144.655,326.825,171.733,332.592,202.447z"}),c.a.createElement("circle",{id:"XMLID_477_",cx:"199.916",cy:"77.415",r:"70"}),c.a.createElement("path",{id:"XMLID_478_",d:"M35.012,241.792C1.531,261.122-9.94,303.934,9.39,337.414c12.966,22.457,36.495,35.012,60.688,35.012   c11.874,0,23.911-3.025,34.934-9.39c33.48-19.33,44.952-62.143,25.622-95.622c-12.966-22.458-36.494-35.013-60.688-35.012   C58.072,232.402,46.034,235.428,35.012,241.792z"}),c.a.createElement("path",{id:"XMLID_479_",d:"M269.196,267.415c-19.329,33.48-7.858,76.291,25.622,95.621c11.025,6.365,23.059,9.391,34.935,9.391   c24.191,0,47.722-12.556,60.687-35.012c19.329-33.48,7.859-76.293-25.622-95.623c-11.024-6.365-23.057-9.391-34.934-9.39   C305.693,232.403,282.161,244.959,269.196,267.415z"})))},bt=function(e){var t=Object(u.b)();c.a.useEffect((function(){var n;t((n={username:e.userName,page:0},{type:f.GET_USER_ORGANIZATIONS,payload:n}))}),[e.userName]),c.a.useEffect((function(){return function(){t({type:f.RESET_USER_ORGANIZATIONS})}}),[]);var n=Object(u.c)((function(e){return e.user.orgsData}));return c.a.createElement(Et,{loading:n.loading},c.a.createElement(Ot,null,n.orgs.map((function(e){return c.a.createElement(gt,{key:e.id},c.a.createElement(ht,{org:e}))})),0===n.orgs.length&&!n.loading&&c.a.createElement(ut,null,c.a.createElement("div",null,c.a.createElement(St,null),c.a.createElement("h2",null,e.userName," hasn't joined any organizations yet."))),c.a.createElement(rt,{loading:n.loading,loadMore:function(){var a;t((a={username:e.userName,page:n.page+1},{type:f.GET_MORE_USER_ORGANIZATIONS,payload:a}))},isLastPage:n.lastPage===n.page||0===n.lastPage})))};function yt(){var e=Object(se.a)(["\n  text-align: center;\n"]);return yt=function(){return e},e}var xt=Ee.a.div(yt()),Tt=function(e){return c.a.createElement(c.a.Fragment,null,e.error?c.a.createElement(xt,null,e.error):e.children)},It=function(e){var t=Object(u.c)((function(e){return e.user.overview}));return c.a.createElement(Tt,{error:t.error},t.user&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ke,{key:t.user.id,"data-testid":"user-overview"},c.a.createElement(Me,{"data-testid":"user-overview__user-info"},c.a.createElement("img",{src:t.user.avatar_url,alt:"User avatar"}),c.a.createElement("h2",null,t.user.name),c.a.createElement("h3",null,t.user.login),c.a.createElement("h4",null,t.user.bio),c.a.createElement(Pe,{"data-testid":"user-overview__social-info"},c.a.createElement("div",null,c.a.createElement(je,null)),c.a.createElement("div",null,c.a.createElement("span",null,t.user.followers)," followers"),c.a.createElement("span",null,"\xb7"),c.a.createElement("div",null,c.a.createElement("span",null,t.user.following)," following"))),c.a.createElement(Ce,null,c.a.createElement(Ie,{tabs:[{title:c.a.createElement("span",null,"Repositories (",t.user.public_repos,")"),content:c.a.createElement(ze,{"data-testid":"user-overview__user-repositories"},c.a.createElement(dt,{userName:t.user.login}))},{title:c.a.createElement("span",null,"Organizations"),content:c.a.createElement(ze,{"data-testid":"user-overview__user-organizations"},c.a.createElement(bt,{userName:t.user.login}))}]})))))};function jt(){var e=Object(se.a)([""]);return jt=function(){return e},e}function wt(){var e=Object(se.a)(["\n  //   display: flex;\n"]);return wt=function(){return e},e}var Ut=Ee.a.div(wt()),Gt=Ee.a.div(jt());function Nt(){var e=Object(se.a)([""]);return Nt=function(){return e},e}function At(){var e=Object(se.a)([""]);return At=function(){return e},e}function kt(){var e=Object(se.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem;\n  svg {\n    width: 3rem;\n  }\n"]);return kt=function(){return e},e}var Mt=Ee.a.div(kt()),Ct=Ee.a.div(At()),Pt=Ee.a.div(Nt()),zt=function(e){return c.a.createElement(Pt,null,c.a.createElement(Mt,null,c.a.createElement("div",null,c.a.createElement(je,null)),c.a.createElement("div",null,e.children.header)),c.a.createElement(Ct,null,e.children.content))},Vt=function(){return c.a.createElement(zt,null,{header:c.a.createElement(Gt,null,c.a.createElement(Se,null)),content:c.a.createElement(Ut,null,c.a.createElement(It,null))})};N.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e.response?e.response.message:"Something went wrong")}));var Zt=Object(x.a)(),Kt=Object(T.composeWithDevTools)(Object(l.applyMiddleware)(Zt)),Lt=Object(l.createStore)(y,Kt);Zt.run(ue);var Wt=function(){return c.a.createElement(u.a,{store:Lt},c.a.createElement(Vt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Wt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.129e6ca6.chunk.js.map