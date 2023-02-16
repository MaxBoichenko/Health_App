"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{9833:function(e,a,t){t.d(a,{Z:function(){return l}});var r={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},n=t(184),l=function(e){var a=e.text,t=void 0===a?"+":a,l=e.type,i=void 0===l?"submit":l,d=e.btnClass,o=void 0===d?"btnPlus":d,s=e.handleClick;return(0,n.jsx)("button",{className:r[o],onClick:s,type:i,children:t})}},6146:function(e,a,t){t.d(a,{Z:function(){return o}});var r="TextField_label__kp4Pv",n="TextField_input__JDykO",l="TextField_span__qcPmc",i=t(184),d=function(e){var a=e.type,t=e.name,d=e.value,o=e.handleChange,s=e.placeholder,u=e.required,c=e.pattern,m=e.title;return(0,i.jsxs)("label",{className:r,children:[(0,i.jsx)("input",{className:n,type:a,name:t,value:d,onChange:o,required:u,pattern:c,title:m}),(0,i.jsx)("span",{className:l,children:s})]})},o=d;d.defaultProps={type:"text",required:!1}},8704:function(e,a,t){t.d(a,{E:function(){return r}});var r={name:{name:"name",type:"text",placeholder:"Name*",title:"The name must consist of at least 3 characters!",required:!0},email:{name:"email",type:"text",placeholder:"Email*",required:!0},password:{name:"password",type:"password",placeholder:"Password (from 8 characters)*",required:!0,title:"The password must be at least 8 characters long"},height:{name:"height",type:"text",placeholder:"Height (100-250)*",required:!0,title:"Enter a valid integer between 100 and 250."},age:{name:"age",type:"text",placeholder:"Age (18-100)*",required:!0,title:"Enter a valid number between 18 and 100."},weight:{name:"weight",type:"text",placeholder:"Current weight (20-250)*",required:!0,title:"Enter a valid integer between 20 and 250."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"Desired weight (20-500)*",required:!0,title:"Enter a valid integer between 20 and 500."},bloodType:{name:"bloodtype",type:"text",placeholder:"Blood type*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"Filter by name"}}},2566:function(e,a,t){t.d(a,{Z:function(){return i}});var r="TextFieldDefault_input__TN7oB",n=t(184),l=function(e){var a=e.type,t=e.name,l=e.value,i=e.handleChange,d=e.placeholder,o=e.required,s=e.pattern,u=e.title,c=e.disabled;return(0,n.jsx)("label",{children:(0,n.jsx)("input",{className:r,type:a,name:t,value:l,onChange:i,placeholder:d,required:o,pattern:s,title:u,disabled:c})})},i=l;l.defaultProps={type:"text",required:!1}},7858:function(e,a,t){t.d(a,{Z:function(){return f}});var r=t(1413),n=t(9439),l=t(9434),i=t(2791),d=t(6382),o={container_sidebar:"SideBar_container_sidebar__YEww0",sum:"SideBar_sum__Jv1xj",title_sidebar:"SideBar_title_sidebar__7GDyI",list_sidebar:"SideBar_list_sidebar__NYb3c",item_sidebar:"SideBar_item_sidebar__lDXgx",data:"SideBar_data__JNg-9",text_sidebar_food:"SideBar_text_sidebar_food__Pg58D",food:"SideBar_food__eIk0d",menuGroupList:"SideBar_menuGroupList__Xvf-8",menuGroupItems:"SideBar_menuGroupItems__PYGmW"},s=t(2566),u=t(8704),c=t(6730),m=t(9869),h=t(3071),_=function(e){return e.dairyCalendar.date},v=t(184),f=function(){var e=(0,l.v9)(_),a=(0,l.v9)(m.U6),t=(0,l.v9)(c.M7),f=(0,l.v9)(c.SP),p=(0,l.v9)(c.vO),b=(0,l.v9)(c.TW),x=(0,l.v9)(c.jj),g=(0,l.v9)(c.Wm),y=(0,l.v9)(c.oj),j=(0,l.v9)(c.EI),N=(0,l.I0)(),C=(0,i.useState)([]),w=(0,n.Z)(C,2),k=w[0],P=w[1];(0,i.useEffect)((function(){e&&N((0,h.Wd)({date:e}))}),[N,e,a]),(0,i.useEffect)((function(){a&&P(a)}),[a]);return(0,v.jsxs)("div",{className:o.container_sidebar,children:[(0,v.jsxs)("div",{className:o.sum,children:[(0,v.jsxs)("h3",{className:o.title_sidebar,children:[" Summary for",e]}),(0,v.jsxs)("ul",{className:o.list_sidebar,children:[(0,v.jsxs)("li",{className:o.item_sidebar,children:[(0,v.jsx)("p",{className:o.text_sidebar_sum,children:"Left"}),(0,v.jsx)("span",{className:o.data,children:t?Math.floor(t)+" kcal":x?Math.floor(x)+" kcal":"0 kcal"})]}),(0,v.jsxs)("li",{className:o.item_sidebar,children:[(0,v.jsx)("p",{className:o.text_sidebar,children:"Consumed"}),(0,v.jsx)("span",{className:o.data,children:f?Math.floor(f)+" kcal":g?Math.floor(g)+" kcal":"0 kcal"})]}),(0,v.jsxs)("li",{className:o.item_sidebar,children:[(0,v.jsx)("p",{className:o.text_sidebar,children:"Daily rate"}),(0,v.jsx)("span",{className:o.data,children:p?Math.floor(p)+" kcal":y?Math.floor(y)+" kcal":"0 kcal"})]}),(0,v.jsxs)("li",{className:o.item_sidebar,children:[(0,v.jsx)("p",{className:o.text_sidebar,children:"% of normal"}),(0,v.jsx)("span",{className:o.data,children:b?Math.floor(b)+" %":j?Math.floor(j)+" %":"0 %"})]})]})]}),(0,v.jsxs)("div",{className:o.food,children:[(0,v.jsx)("h3",{className:o.title_sidebar,children:"Food not recommended"}),(null===a||void 0===a?void 0:a.length)>0&&(0,v.jsx)(s.Z,(0,r.Z)({handleChange:function(e){var t=a.filter((function(a){return a.includes(e.target.value)}));P(t)}},u.E.filter)),(null===a||void 0===a?void 0:a.length)>0&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ol",{className:o.menuGroupList,children:k.map((function(e){return(0,v.jsx)("li",{className:o.menuGroupItems,children:e},(0,d.x0)())}))})}),0===(null===a||void 0===a?void 0:a.length)&&(0,v.jsx)("p",{className:o.text_sidebar_food,children:"Your diet will be displayed here"})]})]})}},2708:function(e,a,t){t.r(a),t.d(a,{default:function(){return B}});var r=t(3433),n=t(1413),l=t(9439),i=t(2791),d=t(9434),o=t(1134),s=t(7689),u="CalcForm_form__auYmB",c="CalcForm_formParts__cJV9U",m="CalcForm_formPart__w+07K",h="CalcForm_label__FwCyU",_="CalcForm_title__IwwVP",v="CalcForm_checkbox__wsNPz",f="CalcForm_fake__rbJZx",p="CalcForm_text__Y99wK",b="CalcForm_radioBlock__My9n5",x="CalcForm_listRadio__3UyqE",g="CalcForm_buttonPosition__HIUoH",y="CalcForm_wrapper__RgN5g",j=t(7858),N=t(6146),C=t(8704),w=t(9833),k=t(2566),P=t(7271),Z=t(9869),S=t(184),F=function(){var e=(0,i.useState)(""),a=(0,l.Z)(e,2),t=a[0],F=a[1],B=(0,s.s0)(),D=(0,d.v9)(Z.Vg),T=(0,d.I0)(),E=(0,o.cI)({defaultValues:{weight:"",height:"",age:"",desiredWeight:"",bloodType:""}}),q=E.control,I=E.register,W=E.handleSubmit,M=E.reset;return(0,S.jsxs)("div",{className:y,children:[(0,S.jsxs)("form",{onSubmit:W((function(e,a){var t={weight:Number(e.weight),height:Number(e.height),age:Number(e.age),desiredWeight:Number(e.desiredWeight),bloodType:Number(e.bloodType)};a.preventDefault(),T((0,P.w)((0,n.Z)({id:D},t))),M(),B("/dairy")})),className:u,children:[(0,S.jsx)("h1",{className:_,children:"Calculate your daily calorie intake right now"}),(0,S.jsxs)("div",{className:c,children:[(0,S.jsxs)("div",{className:m,children:[(0,S.jsx)(o.Qr,{control:q,name:"height",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(N.Z,(0,n.Z)({value:r,name:"height",control:q,handleChange:t},C.E.height))}}),(0,S.jsx)(o.Qr,{control:q,name:"age",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(N.Z,(0,n.Z)({value:r,name:"age",control:q,handleChange:t},C.E.age))}}),(0,S.jsx)(o.Qr,{control:q,name:"weight",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(N.Z,(0,n.Z)({value:r,name:"weight",control:q,handleChange:t},C.E.weight))}})]}),(0,S.jsxs)("div",{className:m,children:[(0,S.jsx)(o.Qr,{control:q,name:"desiredWeight",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(N.Z,(0,n.Z)({value:r,name:"desiredWeight",control:q,handleChange:t},C.E.desiredWeight))}}),(0,S.jsx)(o.Qr,{control:q,name:"bloodType",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(k.Z,(0,n.Z)({value:r,control:q,handleChange:t},C.E.bloodType))}}),(0,S.jsx)("div",{className:b,children:(0,r.Z)(Array(4)).map((function(e,a){return(0,S.jsx)("div",{className:x,children:(0,S.jsxs)("label",{className:h,children:[(0,S.jsx)("input",(0,n.Z)((0,n.Z)({},I("bloodType",{required:!0})),{},{className:v,type:"radio",name:"bloodType",checked:a===t,onClick:function(){return F(a)},value:a+1,placeholder:"Blood type"})),(0,S.jsx)("span",{className:f}),(0,S.jsx)("span",{className:p,children:a+1})]})},a)}))})]})]}),(0,S.jsx)("div",{className:g,children:(0,S.jsx)(w.Z,{text:"Start losing weight",type:"submit",btnClass:"btn"})})]}),(0,S.jsx)(j.Z,{})]})},B=function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(F,{})})}},6730:function(e,a,t){t.d(a,{Cp:function(){return n},EI:function(){return m},M7:function(){return l},Ni:function(){return r},SP:function(){return i},TW:function(){return o},Wm:function(){return u},jj:function(){return s},oj:function(){return c},vO:function(){return d}});var r=function(e){return e.dayProduct.eatenProducts},n=function(e){return e.dayProduct.loading},l=function(e){var a,t,r=e.dayProduct;return null===r||void 0===r||null===(a=r.aboutDay)||void 0===a||null===(t=a.daySummary)||void 0===t?void 0:t.kcalLeft},i=function(e){var a,t,r=e.dayProduct;return null===r||void 0===r||null===(a=r.aboutDay)||void 0===a||null===(t=a.daySummary)||void 0===t?void 0:t.kcalConsumed},d=function(e){var a,t,r=e.dayProduct;return null===r||void 0===r||null===(a=r.aboutDay)||void 0===a||null===(t=a.daySummary)||void 0===t?void 0:t.dailyRate},o=function(e){var a,t,r=e.dayProduct;return null===r||void 0===r||null===(a=r.aboutDay)||void 0===a||null===(t=a.daySummary)||void 0===t?void 0:t.percentsOfDailyRate},s=function(e){var a,t=e.dayProduct;return null===t||void 0===t||null===(a=t.aboutDay)||void 0===a?void 0:a.kcalLeft},u=function(e){var a,t=e.dayProduct;return null===t||void 0===t||null===(a=t.aboutDay)||void 0===a?void 0:a.kcalConsumed},c=function(e){var a,t=e.dayProduct;return null===t||void 0===t||null===(a=t.aboutDay)||void 0===a?void 0:a.dailyRate},m=function(e){var a,t=e.dayProduct;return null===t||void 0===t||null===(a=t.aboutDay)||void 0===a?void 0:a.percentsOfDailyRate}}}]);
//# sourceMappingURL=708.02d23775.chunk.js.map