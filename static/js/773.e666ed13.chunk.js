"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[773],{5399:function(e,t,r){r.d(t,{Z:function(){return d}});var a="ErrorMessage_errorMessageBlock__6NGFY",n="ErrorMessage_errorMessageTitle__gIqHi",i="ErrorMessage_errorMessageText__TKpdd",l=r(4668),s=r(184),o=function(e){var t=e.status;return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("div",{className:l.Z.boo,children:(0,s.jsx)("div",{className:l.Z.face,id:"face"})}),(0,s.jsx)("p",{className:n,children:"Something went wrong..."}),(0,s.jsx)("p",{className:i,children:t})]})},d=o;o.defaultProps={status:{}}},3713:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(2791),n={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},i=r(184),l=function(e){var t=e.setModalOpen,r=e.overlayClass,l=void 0===r?"overlay":r,s=e.modalClass,o=void 0===s?"modal":s,d=e.children;function c(){document.querySelector("body").classList.remove("no-scroll")}(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&(c(),t(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var u=function(){c(),t(!1)};return(0,i.jsx)("div",{className:n[l],onClick:function(e){e.target===e.currentTarget&&(c(),t(!1))},children:(0,i.jsxs)("div",{className:n[o],children:[(0,i.jsx)("div",{className:n.mobileClose,children:(0,i.jsx)("span",{onClick:u,className:n.closeM})}),(0,i.jsx)("span",{onClick:u,className:n.closeOther}),d]})})}},9833:function(e,t,r){r.d(t,{Z:function(){return i}});var a={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},n=r(184),i=function(e){var t=e.text,r=void 0===t?"+":t,i=e.type,l=void 0===i?"submit":i,s=e.btnClass,o=void 0===s?"btnPlus":s,d=e.handleClick;return(0,n.jsx)("button",{className:a[o],onClick:d,type:l,children:r})}},4834:function(e,t,r){r.d(t,{Z:function(){return a.Z}});var a=r(9833)},8704:function(e,t,r){r.d(t,{E:function(){return a}});var a={name:{name:"name",type:"text",placeholder:"Name*",title:"The name must consist of at least 3 characters!",required:!0},email:{name:"email",type:"text",placeholder:"Email*",required:!0},password:{name:"password",type:"password",placeholder:"Password (from 8 characters)*",required:!0,title:"The password must be at least 8 characters long"},height:{name:"height",type:"text",placeholder:"Height (100-250)*",required:!0,title:"Enter a valid integer between 100 and 250."},age:{name:"age",type:"text",placeholder:"Age (18-100)*",required:!0,title:"Enter a valid number between 18 and 100."},weight:{name:"weight",type:"text",placeholder:"Current weight (20-250)*",required:!0,title:"Enter a valid integer between 20 and 250."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"Desired weight (20-500)*",required:!0,title:"Enter a valid integer between 20 and 500."},bloodType:{name:"bloodtype",type:"text",placeholder:"Blood type*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"Filter by name"}}},2566:function(e,t,r){r.d(t,{Z:function(){return l}});var a="TextFieldDefault_input__TN7oB",n=r(184),i=function(e){var t=e.type,r=e.name,i=e.value,l=e.handleChange,s=e.placeholder,o=e.required,d=e.pattern,c=e.title,u=e.disabled;return(0,n.jsx)("label",{children:(0,n.jsx)("input",{className:a,type:t,name:r,value:i,onChange:l,placeholder:s,required:o,pattern:d,title:c,disabled:u})})},l=i;i.defaultProps={type:"text",required:!1}},7858:function(e,t,r){r.d(t,{Z:function(){return f}});var a=r(1413),n=r(9439),i=r(9434),l=r(2791),s=r(6382),o={container_sidebar:"SideBar_container_sidebar__YEww0",sum:"SideBar_sum__Jv1xj",title_sidebar:"SideBar_title_sidebar__7GDyI",list_sidebar:"SideBar_list_sidebar__NYb3c",item_sidebar:"SideBar_item_sidebar__lDXgx",data:"SideBar_data__JNg-9",text_sidebar_food:"SideBar_text_sidebar_food__Pg58D",food:"SideBar_food__eIk0d",menuGroupList:"SideBar_menuGroupList__Xvf-8",menuGroupItems:"SideBar_menuGroupItems__PYGmW"},d=r(2566),c=r(8704),u=r(6730),m=r(9869),_=r(3071),h=function(e){return e.dairyCalendar.date},v=r(184),f=function(){var e=(0,i.v9)(h),t=(0,i.v9)(m.U6),r=(0,i.v9)(u.M7),f=(0,i.v9)(u.SP),y=(0,i.v9)(u.vO),p=(0,i.v9)(u.TW),x=(0,i.v9)(u.jj),j=(0,i.v9)(u.Wm),b=(0,i.v9)(u.oj),g=(0,i.v9)(u.EI),N=(0,i.I0)(),w=(0,l.useState)([]),D=(0,n.Z)(w,2),P=D[0],M=D[1];(0,l.useEffect)((function(){e&&N((0,_.Wd)({date:e}))}),[N,e,t]),(0,l.useEffect)((function(){t&&M(t)}),[t]);return(0,v.jsxs)("div",{className:o.container_sidebar,children:[(0,v.jsxs)("div",{className:o.sum,children:[(0,v.jsxs)("h3",{className:o.title_sidebar,children:[" Summary for",e]}),(0,v.jsxs)("ul",{className:o.list_sidebar,children:[(0,v.jsxs)("li",{className:o.item_sidebar,children:[(0,v.jsx)("p",{className:o.text_sidebar_sum,children:"Left"}),(0,v.jsx)("span",{className:o.data,children:r?Math.floor(r)+" kcal":x?Math.floor(x)+" kcal":"0 kcal"})]}),(0,v.jsxs)("li",{className:o.item_sidebar,children:[(0,v.jsx)("p",{className:o.text_sidebar,children:"Consumed"}),(0,v.jsx)("span",{className:o.data,children:f?Math.floor(f)+" kcal":j?Math.floor(j)+" kcal":"0 kcal"})]}),(0,v.jsxs)("li",{className:o.item_sidebar,children:[(0,v.jsx)("p",{className:o.text_sidebar,children:"Daily rate"}),(0,v.jsx)("span",{className:o.data,children:y?Math.floor(y)+" kcal":b?Math.floor(b)+" kcal":"0 kcal"})]}),(0,v.jsxs)("li",{className:o.item_sidebar,children:[(0,v.jsx)("p",{className:o.text_sidebar,children:"% of normal"}),(0,v.jsx)("span",{className:o.data,children:p?Math.floor(p)+" %":g?Math.floor(g)+" %":"0 %"})]})]})]}),(0,v.jsxs)("div",{className:o.food,children:[(0,v.jsx)("h3",{className:o.title_sidebar,children:"Food not recommended"}),(null===t||void 0===t?void 0:t.length)>0&&(0,v.jsx)(d.Z,(0,a.Z)({handleChange:function(e){var r=t.filter((function(t){return t.includes(e.target.value)}));M(r)}},c.E.filter)),(null===t||void 0===t?void 0:t.length)>0&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ol",{className:o.menuGroupList,children:P.map((function(e){return(0,v.jsx)("li",{className:o.menuGroupItems,children:e},(0,s.x0)())}))})}),0===(null===t||void 0===t?void 0:t.length)&&(0,v.jsx)("p",{className:o.text_sidebar_food,children:"Your diet will be displayed here"})]})]})}},7043:function(e,t,r){r.r(t),r.d(t,{default:function(){return Se}});var a,n,i,l=r(9439),s=r(4805),o=r(2791),d=r(9434),c="DairyPage_wrapper__INA+u",u="DairyPage_overlay__EsMgn",m="DairyPage_btn__LEm1h",_=r(7858),h=r(4834),v=r(1134),f=r(5970),y="DiaryAddProductForm_form__72n0e",p="DiaryAddProductForm_btn__Z0Nm7",x="DiaryAddProductForm_overlayLabel__2pr0E",j="DiaryAddProductForm_errorOverlay__oJw8d",b="DiaryAddProductForm_errorMessage__qgNon",g=r(9833),N=r(3713),w=r(5399),D=r(1413),P="DiaryChooseProductList_overlay__5XlnC",M="DiaryChooseProductList_headTitle__LPGci",C="DiaryChooseProductList_list__ccqab",k="DiaryChooseProductList_item__IKqKE",S="DiaryChooseProductList_wrapper__FUGQF",O="DiaryChooseProductList_title__Fgj-Y",E="DiaryChooseProductList_weight__h+CuP",F="DiaryChooseProductList_kcal__eIhYW",L=r(643),I="LoaderMini_loader__7crKR",Z=r(184),q=function(){return(0,Z.jsx)("div",{className:I,children:(0,Z.jsx)(L.iT,{height:"50",width:"50",color:"#fc842d",secondaryColor:"transparent"})})},W=function(e){return e.product.items},B=function(e){return e.product.loading},G=function(e){return e.product.error},A=r(3071);function T(e){var t=e.handleClickClose,r=e.setModalOpen,a=(0,d.I0)(),n=(0,s.useMediaQuery)({maxWidth:767}),i=(0,o.useState)(!1),c=(0,l.Z)(i,2),u=c[0],m=c[1],_=(0,d.v9)(W),h=(0,d.v9)((function(e){return e.dairyCalendar})),v=(0,d.v9)(B);return(0,Z.jsx)(Z.Fragment,{children:!0===v?(0,Z.jsx)(q,{}):(0,Z.jsx)(Z.Fragment,{children:!u&&(0,Z.jsxs)("div",{className:P,children:[(0,Z.jsx)("h2",{className:M,children:"Select a product:"}),(0,Z.jsx)("ul",{className:C,children:_.map((function(e){var i=e._id,l=e.title,s=e.calories,o=e.weight;return(0,Z.jsxs)("li",{className:k,onClick:function(){return e=i,a((0,A.sL)((0,D.Z)((0,D.Z)({},h),{},{productId:e}))),m(!1),t(!1),void(n&&(r(!1),document.querySelector("body").classList.remove("no-scroll")));var e},children:[(0,Z.jsxs)("p",{className:O,children:[" ",l.ua]}),(0,Z.jsxs)("div",{className:S,children:[(0,Z.jsxs)("p",{className:E,children:[o," g"]}),(0,Z.jsxs)("p",{className:F,children:[s," kcal"]})]})]},i)}))})]})})})}var R=["title","titleId"];function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Q.apply(this,arguments)}function X(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Y(e,t){var r=e.title,l=e.titleId,s=X(e,R);return o.createElement("svg",Q({width:12,height:12,fill:"#f84147",id:"icon-warning",viewBox:"0 0 32 32",ref:t,"aria-labelledby":l},s),r?o.createElement("title",{id:l},r):null,a||(a=o.createElement("path",{d:"M16 2.899l13.409 26.726h-26.819l13.409-26.726zM16 0c-0.69 0-1.379 0.465-1.903 1.395l-13.659 27.222c-1.046 1.86-0.156 3.383 1.978 3.383h27.166c2.134 0 3.025-1.522 1.978-3.383h0l-13.659-27.222c-0.523-0.93-1.213-1.395-1.903-1.395v0z"})),n||(n=o.createElement("path",{d:"M18 26c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"})),i||(i=o.createElement("path",{d:"M16 22c-1.105 0-2-0.895-2-2v-6c0-1.105 0.895-2 2-2s2 0.895 2 2v6c0 1.105-0.895 2-2 2z"})))}var z,J=o.forwardRef(Y),K=(r.p,r(2566)),V=r(3410),U=r(1284),H=function(e){var t=e.setModalOpen,r=(0,d.I0)(),a=(0,o.useState)(!1),n=(0,l.Z)(a,2),i=n[0],c=n[1],u=(0,s.useMediaQuery)({maxWidth:767}),m=(0,s.useMediaQuery)({minWidth:768}),_=(0,d.v9)(G),h=(0,v.cI)({defaultValues:{query:"",weight:""}}),D=h.control,P=h.handleSubmit,M=h.reset,C=h.formState.errors;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("form",{className:y,onSubmit:P((function(e,t){if(t.preventDefault(),r((0,V.A)(e.query)),r((0,U.nr)(Number(e.weight))),!0===i)return c(!1),c(!0),void M();c(!i),M()})),children:[(0,Z.jsxs)("div",{className:x,children:[(0,Z.jsx)(v.Qr,{control:D,name:"query",render:function(e){var t=e.field,r=t.onChange,a=t.value;return(0,Z.jsx)(K.Z,{value:a,placeholder:"Product name (Rice)",name:"query",control:D,handleChange:r})},rules:{required:"Enter product name"}}),(0,Z.jsx)(f.B,{errors:C,name:"query",render:function(e){var t=e.message;return(0,Z.jsxs)("div",{className:j,children:[(0,Z.jsx)(J,{}),(0,Z.jsx)("p",{className:b,children:t})]})}})]}),(0,Z.jsxs)("div",{className:x,children:[(0,Z.jsx)(v.Qr,{control:D,name:"weight",render:function(e){var t=e.field,r=t.onChange,a=t.value;return(0,Z.jsx)(K.Z,{value:a,placeholder:"Weight (g)",name:"weight",pattern:"[0-9]+",control:D,handleChange:r})},rules:{required:"Enter the product weight"}}),(0,Z.jsx)(f.B,{errors:C,name:"weight",render:function(e){var t=e.message;return(0,Z.jsxs)("div",{className:j,children:[(0,Z.jsx)(J,{}),(0,Z.jsx)("p",{className:b,children:t})]})}})]}),(0,Z.jsxs)("div",{className:p,children:[u&&(0,Z.jsx)(g.Z,{text:"Add",btnClass:"btn"}),m&&(0,Z.jsx)(g.Z,{text:"+",btnClass:"btnPlus"})]})]}),i&&_&&(0,Z.jsx)(N.Z,{setModalOpen:c,children:(0,Z.jsx)(w.Z,{status:_.data.message})}),i&&(0,Z.jsx)(T,{setModalOpen:t,handleClickClose:function(e){c(e)}})]})},$=r(9513),ee=r.n($),te=r(2426),re=r.n(te),ae=r(5952),ne=(r(8639),"DiaryDate\u0421alendar_btnInput__d0154"),ie="DiaryDate\u0421alendar_dateOverlay__0WzDh",le=function(){var e=(0,d.I0)(),t=(0,d.v9)((function(e){return e.dairyCalendar.date})),r=(0,o.useState)(!1),a=(0,l.Z)(r,2),n=a[0],i=a[1],s=(0,o.useState)(new Date),c=(0,l.Z)(s,2),u=c[0],m=c[1];(0,o.useEffect)((function(){e(t?(0,U.As)(t):(0,U.As)(re()(new Date).format("yyyy-MM-DD")))}),[]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("button",{className:ne,onClick:function(e){e.preventDefault(),i(!n)},children:re()(t).format("DD-MM-yyyy")}),n&&(0,Z.jsx)("div",{className:ie,children:(0,Z.jsx)(ee(),{selected:u,onChange:function(t){m(t),i(!n),e((0,U.As)(re()(t).format("yyyy-MM-DD"))),e((0,A.Wd)({date:re()(t).format("yyyy-MM-DD")}))},locale:ae.Z,maxDate:new Date,inline:!0})})]})},se={list:"DiaryProductsList_list__Jc0Rv"},oe="DiaryProductsListItem_item__9H0W0",de="DiaryProductsListItem_wrapper__yx7FO",ce="DiaryProductsListItem_title__4RWxm",ue="DiaryProductsListItem_weight__PWfjZ",me="DiaryProductsListItem_kcal__L0c3T",_e="DiaryProductsListItem_btnRemove__ZDqSi",he=["title","titleId"];function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ve.apply(this,arguments)}function fe(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ye(e,t){var r=e.title,a=e.titleId,n=fe(e,he);return o.createElement("svg",ve({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?o.createElement("title",{id:a},r):null,z||(z=o.createElement("path",{d:"m1 1 12 12M1 13 13 1",stroke:"#9B9FAA",strokeWidth:2})))}var pe=o.forwardRef(ye),xe=(r.p,r(6730)),je=function(){var e=(0,d.I0)(),t=(0,d.v9)(xe.Ni);return(0,Z.jsx)(Z.Fragment,{children:t&&t.map((function(t){var r=t.id,a=t.title,n=t.weight,i=t.kcal;return(0,Z.jsxs)("li",{className:oe,children:[(0,Z.jsx)("p",{className:ce,children:a}),(0,Z.jsxs)("div",{className:de,children:[(0,Z.jsxs)("p",{className:ue,children:[n," \u0433\u0440"]}),(0,Z.jsxs)("p",{className:me,children:[Math.round(i)," \u043a\u043a\u0430\u043b"]})]}),(0,Z.jsx)("button",{className:_e,type:"button",onClick:function(){return function(t){e((0,A.gr)(t))}(r)},children:(0,Z.jsx)(pe,{})})]},r)}))})},be=function(){var e=(0,d.v9)(xe.Cp);if(!0!==(0,d.v9)(B))return(0,Z.jsx)(Z.Fragment,{children:!0===e?(0,Z.jsx)(q,{}):(0,Z.jsx)("div",{className:se.overlay,children:(0,Z.jsx)("ul",{className:se.list,children:(0,Z.jsx)(je,{})})})})},ge=r(1087),Ne="GreetingForm_wrapper__JQQab",we="GreetingForm_title__Kdygm",De="GreetingForm_text__xa0dR",Pe="GreetingForm_btn__IDzco",Me="GreetingForm_btnGreeting__D3Zes",Ce=r(9869);function ke(){var e=(0,d.v9)(Ce.vW);return(0,Z.jsxs)("div",{className:Ne,children:[(0,Z.jsxs)("h1",{className:we,children:["Good day, ",e]}),(0,Z.jsx)("p",{className:De,children:"Our application allows you to follow a diet and calculate calories. Go to the calculator section and calculate the diet."}),(0,Z.jsx)("div",{className:Pe,children:(0,Z.jsx)(ge.rU,{to:"/calculator-calories",className:Me,children:"Calculate the diet"})})]})}var Se=function(){var e=(0,s.useMediaQuery)({maxWidth:767}),t=(0,d.v9)(Ce.U6),r=0===(null===t||void 0===t?void 0:t.length),a=(0,s.useMediaQuery)({minWidth:767}),n=(0,o.useState)(!1),i=(0,l.Z)(n,2),v=i[0],f=i[1];return(0,Z.jsxs)("main",{className:c,children:[r&&(0,Z.jsx)(ke,{}),!r&&(0,Z.jsxs)("div",{className:u,children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)(le,{}),a&&(0,Z.jsx)(H,{}),(0,Z.jsx)(be,{})]}),e&&(0,Z.jsx)("div",{className:m,children:(0,Z.jsx)(h.Z,{text:"+",btnClass:"btnPlus",type:"button",handleClick:function(){document.querySelector("body").classList.add("no-scroll"),f(!0)}})}),v&&(0,Z.jsx)(N.Z,{setModalOpen:f,overlayClass:"overlayDairyPage",modalClass:"modalDairyPage",children:(0,Z.jsx)(H,{setModalOpen:f})})]}),(0,Z.jsx)(_.Z,{})]})}},6730:function(e,t,r){r.d(t,{Cp:function(){return n},EI:function(){return m},M7:function(){return i},Ni:function(){return a},SP:function(){return l},TW:function(){return o},Wm:function(){return c},jj:function(){return d},oj:function(){return u},vO:function(){return s}});var a=function(e){return e.dayProduct.eatenProducts},n=function(e){return e.dayProduct.loading},i=function(e){var t,r,a=e.dayProduct;return null===a||void 0===a||null===(t=a.aboutDay)||void 0===t||null===(r=t.daySummary)||void 0===r?void 0:r.kcalLeft},l=function(e){var t,r,a=e.dayProduct;return null===a||void 0===a||null===(t=a.aboutDay)||void 0===t||null===(r=t.daySummary)||void 0===r?void 0:r.kcalConsumed},s=function(e){var t,r,a=e.dayProduct;return null===a||void 0===a||null===(t=a.aboutDay)||void 0===t||null===(r=t.daySummary)||void 0===r?void 0:r.dailyRate},o=function(e){var t,r,a=e.dayProduct;return null===a||void 0===a||null===(t=a.aboutDay)||void 0===t||null===(r=t.daySummary)||void 0===r?void 0:r.percentsOfDailyRate},d=function(e){var t,r=e.dayProduct;return null===r||void 0===r||null===(t=r.aboutDay)||void 0===t?void 0:t.kcalLeft},c=function(e){var t,r=e.dayProduct;return null===r||void 0===r||null===(t=r.aboutDay)||void 0===t?void 0:t.kcalConsumed},u=function(e){var t,r=e.dayProduct;return null===r||void 0===r||null===(t=r.aboutDay)||void 0===t?void 0:t.dailyRate},m=function(e){var t,r=e.dayProduct;return null===r||void 0===r||null===(t=r.aboutDay)||void 0===t?void 0:t.percentsOfDailyRate}},4668:function(e,t){t.Z={container:"NotFound_container__KNX4B",title:"NotFound_title__f917b",txt:"NotFound_txt__VshUQ",booWrapper:"NotFound_booWrapper__2b5FM",boo:"NotFound_boo__bQlpM",floating:"NotFound_floating__P8jYD",face:"NotFound_face__jV+a5",shadow:"NotFound_shadow__wSXLX",floatingShadow:"NotFound_floatingShadow__fkJav"}}}]);
//# sourceMappingURL=773.e666ed13.chunk.js.map