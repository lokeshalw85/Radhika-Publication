"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1512],{373:(t,e,r)=>{r.d(e,{Z:()=>n});const s={name:"ActionsDropdown",data:function(){return{open:!1}}};const n=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative inline-block ltr:text-left rtl:text-right"},[r("div",[r("button",{staticClass:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none",attrs:{type:"button",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},on:{click:function(e){t.open=!t.open}}},[t._v("\n            "+t._s(t.__("Actions"))+"\n            "),t._v(" "),r("svg",{staticClass:"ltr:-mr-1 ltr:ml-2 rtl:mr-2 rtl:-ml-1 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"z-40 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"},on:{click:function(e){t.open=!t.open}}},[r("div",{staticClass:"py-1",attrs:{role:"none"}},[t._t("actions")],2)])])}),[],!1,null,"1e6be95d",null).exports},97618:(t,e,r)=>{r.d(e,{Z:()=>s});const s=(0,r(51900).Z)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50"}},[r("g",{attrs:{id:"Icon",transform:"translate(13 344)"}},[r("g",{attrs:{id:"circle",transform:"translate(-29 -361.14)"}},[r("circle",{attrs:{id:"bg_circle",cx:"25",cy:"25",r:"25",transform:"translate(16 17.14)",fill:"#25c16f"}}),t._v(" "),r("path",{attrs:{id:"white_ring",d:"M20,0A19.969,19.969,0,0,1,37.151,30.248c-.712,1.229-2.946,1.654-4.181,2.926-1.2,1.235-1.426,3.291-3.258,4.338A20.011,20.011,0,1,1,20,0Z",transform:"translate(21 22.14)",fill:"#fff"}}),t._v(" "),r("circle",{attrs:{id:"green_ring",cx:"15",cy:"15",r:"15",transform:"translate(26 27.14)",fill:"#25c16f"}})]),t._v(" "),r("g",{attrs:{id:"cursor",transform:"matrix(1, -0.017, 0.017, 1, 10.797, -319.593)"}},[r("path",{attrs:{id:"right",d:"M10.286,23.465a.687.687,0,0,1-.63-.413L.057.962a.687.687,0,0,1,.9-.9l22.09,9.6a.687.687,0,0,1-.073,1.288L16.249,13A4.885,4.885,0,0,0,13,16.249l-2.058,6.73a.687.687,0,0,1-.619.485Z",transform:"translate(0 0)",fill:"#fff"}}),t._v(" "),r("path",{attrs:{id:"left",d:"M27.244,9.657,5.154.058A.688.688,0,0,0,4.394.2h0L18.412,14.221A4.887,4.887,0,0,1,20.441,13l6.73-2.058a.687.687,0,0,0,.073-1.288Z",transform:"translate(-4.192 -0.001)",fill:"#fff"}})])])])}),[],!1,null,null,null).exports},60651:(t,e,r)=>{r.d(e,{Z:()=>n});const s={data:function(){return{show:!0}},computed:{style:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.bannerStyle)||"success"},message:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.banner)||""}}};const n=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show&&t.message?r("div",{class:{"bg-indigo-500":"success"==t.style,"bg-red-700":"danger"==t.style}},[r("div",{staticClass:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},[r("div",{staticClass:"flex items-center justify-between flex-wrap"},[r("div",{staticClass:"w-0 flex-1 flex items-center min-w-0"},[r("span",{staticClass:"flex p-2 rounded-md",class:{"bg-indigo-600":"success"==t.style,"bg-red-600":"danger"==t.style}},["success"==t.style?r("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),"danger"==t.style?r("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})]):t._e()]),t._v(" "),r("p",{staticClass:"ml-3 font-medium text-white truncate"},[t._v("\n                        "+t._s(t.message)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"flex-shrink-0 sm:ml-3"},[r("button",{staticClass:"-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150",class:{"hover:bg-indigo-600 focus:bg-indigo-600":"success"==t.style,"hover:bg-red-600 focus:bg-red-600":"danger"==t.style},attrs:{type:"button","aria-label":"Dismiss"},on:{click:function(e){e.preventDefault(),t.show=!1}}},[r("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])])]):t._e()])}),[],!1,null,null,null).exports},16446:(t,e,r)=>{r.d(e,{Z:()=>n});const s={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"rtl:origin-top-left rtl:left-0 ltr:origin-top-right ltr:right-0":"origin-top"}}};const n=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),r("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 shadow rounded",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[r("div",{staticClass:"rounded-sm ring-1 ring-black ring-opacity-5",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports},93210:(t,e,r)=>{r.d(e,{Z:()=>n});const s={props:["href","as"]};const n=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["button"===t.as?r("button",{staticClass:"block text-sm w-full px-4 py-2 leading-5 text-gray-700 ltr:text-left rtl:text-right hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._t("default")],2):r("inertia-link",{staticClass:"text-sm block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 ltr:text-left rtl:text-right focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},57850:(t,e,r)=>{r.d(e,{Z:()=>n});const s={props:["href","active"],computed:{classes:function(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}}};const n=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null).exports},79333:(t,e,r)=>{r.d(e,{Z:()=>n});const s={name:"NoDataTable",props:{title:{type:String,default:"No Records Found"}}};const n=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"max-w-lg px-4 py-12 mx-auto"},[r("h2",{staticClass:"mt-2 text-sm font-medium text-center text-gray-800"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"flex flex-col items-center justify-center mt-4 space-y-1 md:flex-row md:space-y-0 md:space-x-1"},[t._t("action")],2)])}),[],!1,null,null,null).exports},37760:(t,e,r)=>{r.d(e,{Z:()=>n});const s={props:["active","href","as"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}}};const n=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["button"==t.as?r("button",{staticClass:"w-full text-left",class:t.classes},[t._t("default")],2):r("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},91026:(t,e,r)=>{r.d(e,{Z:()=>n});const s={name:"FormInputShimmer",components:{Skeleton:r(80247).default}};const n=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-6"},[r("Skeleton",{staticClass:"mb-2",attrs:{width:"10rem"}}),t._v(" "),r("Skeleton",{attrs:{height:"2rem"}})],1)}),[],!1,null,null,null).exports},21880:(t,e,r)=>{r.d(e,{Z:()=>n});const s={name:"FormSwitchShimmer",components:{Skeleton:r(80247).default}};const n=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-6"},[r("div",{staticClass:"flex gap-4 items-center justify-between"},[r("div",{staticClass:"w-9/12"},[r("Skeleton",{staticClass:"mb-2",attrs:{width:"10rem"}}),t._v(" "),r("Skeleton",{attrs:{height:"2rem"}})],1),t._v(" "),r("div",{},[r("Skeleton",{attrs:{width:"5rem",height:"2rem"}})],1)])])}),[],!1,null,null,null).exports},93843:(t,e,r)=>{r.d(e,{Z:()=>i});var s=r(68067);const n={components:{ckeditor:r.n(s)().component},props:["value"],data:function(){return{editorData:"",editorUrl:window.CKEditorURL,editorConfig:{extraPlugins:["mathjax"]}}},methods:{focus:function(){this.$refs.editor.focus()},reRender:function(){window.MathJax&&(console.log("rendering mathjax"),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub],(function(){return console.log("done")})))}},watch:{editorData:function(){var t=this;console.log("data changed"),this.$nextTick().then((function(){t.reRender()}))}},mounted:function(){this.reRender()}};const i=(0,r(51900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ckeditor",{ref:"editor",attrs:{"editor-url":t.editorUrl,value:t.value,config:t.editorConfig}})}),[],!1,null,null,null).exports},139:(t,e,r)=>{r.d(e,{Z:()=>w});var s=r(97618),n=r(60651),i=r(16446),o=r(93210),a=r(57850),l=r(37760),c=r(71003),u=r(50298),d=r(15366);const p={name:"SidebarDropdown",props:{title:String,items:Array},data:function(){return{open:!1}},methods:{isActive:function(t){return window.location.href===t},isOpen:function(){return this.urls.includes(window.location.href)}},computed:{urls:function(){var t=[];return this.items.forEach((function(e){return t.push(e.url)})),t}},created:function(){this.open=this.isOpen()}};var m=r(51900);const f=(0,m.Z)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.open},attrs:{role:"button"},on:{click:function(e){t.open=!t.open}}},[r("div",{staticClass:"flex items-center"},[t._t("icon"),t._v(" "),r("span",[t._v(t._s(t.__(t.title)))])],2),t._v(" "),r("svg",{staticClass:"flex-shrink-0 w-4 h-4 ml-2 transition transform",class:{"rotate-90":t.open},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"mb-4"},t._l(t.items,(function(e){return r("div",{key:e.url,staticClass:"block"},[e.active?r("inertia-link",{staticClass:"flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.isActive(e.url)},attrs:{href:e.url}},[t._v("\n                "+t._s(t.__(e.label))+"\n            ")]):t._e()],1)})),0)])}),[],!1,null,null,null).exports;const h={name:"SidebarLink",props:{title:String,url:String},computed:{active:function(){return window.location.href===this.url}}};const v=(0,m.Z)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("inertia-link",{staticClass:"flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.active},attrs:{href:t.url}},[t._t("icon"),t._v(" "),r("span",[t._v(t._s(t.__(t.title)))])],2)}),[],!1,null,null,null).exports;var g=r(44943),_=r(78465);const x={components:{ArcApplicationMark:s.Z,ArcBanner:n.Z,ArcDropdown:i.Z,ArcDropdownLink:o.Z,ArcNavLink:a.Z,ArcResponsiveNavLink:l.Z,ConfirmDialog:c.default,Message:d.default,Toast:u.default,SidebarDropdown:f,SidebarLink:v,PerfectScrollbar:g.PerfectScrollbar,InputSwitch:_.default},data:function(){return{sideBar:!1,darkMode:!1,scrollbarOptions:{suppressScrollX:!0},successMessage:String,errorMessage:String,items:[{label:"Home Dashboard",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',url:route("admin_dashboard"),active:"admin"===this.$page.props.user.role_id},{label:"Home Dashboard",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',url:route("instructor_dashboard"),active:"instructor"===this.$page.props.user.role_id},{item_type:"divider",label:"Engage"},{item_type:"divider",label:"Library"},{label:"Question Bank",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Questions",url:route("questions.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Import Questions",url:route("initiate_import_questions"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Comprehensions",url:route("comprehensions.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Question Types",url:route("question-types.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]},{label:"Lesson Bank",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,url:route("lessons.index")},{item_type:"divider",label:"Configuration"},{label:"Manage Users",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id,items:[{label:"Users",url:route("users.index"),active:"admin"===this.$page.props.user.role_id}]},{label:"Books Manager",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Series",url:route("sections.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Books",url:route("skills.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Lessons",url:route("topics.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]}]}},methods:{switchToTeam:function(t){this.$inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},changeMode:function(){this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},logout:function(){this.$inertia.post(route("logout"))}}};const w=(0,m.Z)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60"},[r("arc-banner")],1),t._v(" "),r("div",{staticClass:"min-h-screen"},[r("nav",{staticClass:"fixed top-0 ltr:left-0 rtl:right-0 z-20 h-full pb-10 overflow-hidden transition origin-left transform bg-gray-900 w-60 md:ltr:translate-x-0 md:rtl:-translate-x-0",class:{"ltr:-translate-x-full rtl:translate-x-full":!t.sideBar,"translate-x-0":t.sideBar},on:{click:function(e){t.sideBar=!1}}},[r("inertia-link",{staticClass:"flex items-center px-4 py-5",attrs:{href:t.route("home")}},[r("img",{staticClass:"h-8 w-auto",attrs:{src:t.$page.props.assetUrl+t.$page.props.general.logo_path,alt:t.$page.props.general.app_name}})]),t._v(" "),r("perfect-scrollbar",{ref:"scroll",staticClass:"h-full overflow-hidden",attrs:{options:t.scrollbarOptions}},[r("nav",{staticClass:"text-sm font-medium pb-16 text-gray-400",attrs:{"aria-label":"Main Navigation"}},[t._l(t.items,(function(e){return[e.active&&"dropdown"===e.item_type?r("sidebar-dropdown",{attrs:{title:e.label,items:e.items},scopedSlots:t._u([{key:"icon",fn:function(){return[r("span",{domProps:{innerHTML:t._s(e.icon)}})]},proxy:!0}],null,!0)}):t._e(),t._v(" "),!0===e.active&&"link"===e.item_type?r("sidebar-link",{attrs:{title:e.label,url:e.url},scopedSlots:t._u([{key:"icon",fn:function(){return[r("span",{domProps:{innerHTML:t._s(e.icon)}})]},proxy:!0}],null,!0)}):t._e(),t._v(" "),"divider"===e.item_type?r("div",{staticClass:"my-4 mx-4 uppercase font-semibold text-green-500 text-xs"},[t._v("\n                            "+t._s(e.label)+"\n                        ")]):t._e()]}))],2)])],1),t._v(" "),r("div",{staticClass:"ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60"},[r("header",{staticClass:"bg-white shadow flex items-center justify-between w-full md:mx-auto md:sticky md:z-30 md:top-0 px-4 h-14"},[r("button",{staticClass:"block btn btn-light-secondary md:hidden",on:{click:function(e){t.sideBar=!0}}},[r("span",{staticClass:"sr-only"},[t._v(t._s(t.__("Menu")))]),t._v(" "),r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])]),t._v(" "),r("div",{staticClass:"hidden -ml-3 form-icon md:block w-96"},[r("inertia-link",{staticClass:"text-sm font-semibold px-4 py-5 capitalize",attrs:{href:t.route("home")}},[t._v("\n                        "+t._s(t.__(t.$page.props.user.role_id))+" "+t._s(t.__("Dashboard"))+"\n                    ")])],1),t._v(" "),r("div",{staticClass:"flex items-center"},[r("a",{staticClass:"flex text-gray-500",attrs:{href:"#"}},[r("svg",{staticClass:"flex-shrink-0 w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}})])]),t._v(" "),r("div",{staticClass:"ltr:ml-4 rtl:mr-4 relative"},[r("arc-dropdown",{attrs:{align:"right",width:"48"},scopedSlots:t._u([{key:"trigger",fn:function(){return[t.$page.props.jetstream.managesProfilePhotos?r("button",{staticClass:"flex border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},[r("img",{staticClass:"h-8 w-8 rounded-full object-cover",attrs:{src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name}})]):r("span",{staticClass:"inline-flex rounded-md"},[r("button",{staticClass:"inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",attrs:{type:"button"}},[t._v("\n                                            "+t._s(t.$page.props.user.name)+"\n\n                                            "),r("svg",{staticClass:"ml-2 -mr-0.5 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]},proxy:!0},{key:"content",fn:function(){return[r("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                    "+t._s(t.__("Manage Account"))+"\n                                ")]),t._v(" "),r("arc-dropdown-link",{attrs:{href:t.route("profile.show")}},[t._v("\n                                    "+t._s(t.__("Profile"))+"\n                                ")]),t._v(" "),t.$page.props.jetstream.hasApiFeatures?r("arc-dropdown-link",{attrs:{href:t.route("api-tokens.index")}},[t._v("\n                                    "+t._s(t.__("Api Tokens"))+"\n                                ")]):t._e(),t._v(" "),r("div",{staticClass:"border-t border-gray-100"}),t._v(" "),r("form",{attrs:{method:"post",action:t.route("logout")}},[r("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.$page.props.csrf_token}}),t._v(" "),r("arc-dropdown-link",{attrs:{as:"button"}},[t._v("\n                                        "+t._s(t.__("Logout"))+"\n                                    ")])],1)]},proxy:!0}])})],1)])]),t._v(" "),r("section",[r("div",{staticClass:"container mx-auto pt-4 px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-between"},[r("div",[t._t("header")],2),t._v(" "),r("div",{staticClass:"mb-6 sm:mb-0 sm:mt-0"},[t._t("actions")],2)])])]),t._v(" "),r("main",[r("div",{staticClass:"container mx-auto px-4 sm:px-6 lg:px-8"},[t.$page.props.successMessage?r("Message",{attrs:{severity:"success",closable:!1}},[t._v(t._s(t.$page.props.successMessage))]):t._e(),t._v(" "),t.$page.props.errorMessage?r("Message",{attrs:{severity:"error",closable:!1}},[t._v(t._s(t.$page.props.errorMessage))]):t._e()],1),t._v(" "),t._t("default")],2),t._v(" "),r("portal-target",{attrs:{name:"modal",multiple:""}}),t._v(" "),r("ConfirmDialog"),t._v(" "),r("Toast",{attrs:{position:t.$page.props.rtl?"bottom-left":"bottom-right"}}),t._v(" "),r("Toast",{attrs:{position:t.$page.props.rtl?"top-left":"top-right",group:"lm"}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.sideBar,expression:"sideBar"}],staticClass:"fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden",on:{click:function(e){t.sideBar=!1}}})])])}),[],!1,null,null,null).exports},71512:(t,e,r)=>{r.r(e),r.d(e,{default:()=>k});var s=r(139),n=r(28801),i=r(14974),o=r(78558),a=r(72263),l=r(19745),c=r(78465),u=r(48407),d=r(93843),p=r(91026),m=r(21880);const f={name:"SectionForm",components:{InputText:i.default,Button:a.default,InputSwitch:c.default,Textarea:u.default,TextEditor:d.Z,FormInputShimmer:p.Z,FormSwitchShimmer:m.Z},props:{editFlag:Boolean,sectionId:Number,formErrors:Object,title:""},data:function(){return{errors:Object,form:{name:"",icon_path:"",short_description:"",is_active:!0},formValidated:!1,loading:!1}},watch:{formErrors:function(t){this.errors=t}},methods:{submitForm:function(){this.editFlag?this.update():this.create()},create:function(){var t=this;this.formValidated=!0,this.$inertia.post(route("sections.store"),this.form,{onSuccess:function(){0===Object.keys(t.errors).length&&t.$emit("close",!0)}})},update:function(){var t=this;this.formValidated=!0,this.$inertia.patch(route("sections.update",{id:this.sectionId}),this.form,{onSuccess:function(){0===Object.keys(t.errors).length&&t.$emit("close",!0)}})},fetch:function(){if(this.editFlag){var t=this;t.loading=!0,axios.get(route("sections.edit",{id:this.sectionId})).then((function(e){var r=e.data;t.form.name=r.name,t.form.short_description=r.short_description,t.form.icon_path=r.icon_path,t.form.is_active=r.is_active})).catch((function(e){t.loading=!1})).then((function(){t.loading=!1}))}}},mounted:function(){!0===this.editFlag&&this.fetch()}};var h=r(51900);const v=(0,h.Z)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-y-auto h-screen px-2"},[r("div",{staticClass:"bg-gray-100 py-4 lg:py-4 rounded"},[r("div",{staticClass:"container px-6 mx-auto flex ltr:flex-row rtl:flex-row-reverse"},[r("div",[r("h4",{staticClass:"text-base font-semibold leading-tight text-gray-800"},[t._v("\n                    "+t._s(t.title)+"\n                ")])])])]),t._v(" "),t.loading?r("div",{staticClass:"my-6 w-11/12 mx-auto xl:w-full xl:mx-0"},[r("form-input-shimmer"),t._v(" "),r("form-input-shimmer"),t._v(" "),r("form-input-shimmer"),t._v(" "),r("form-switch-shimmer")],1):r("form",{staticClass:"my-6 w-11/12 mx-auto xl:w-full xl:mx-0",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("div",{staticClass:"w-full flex flex-col mb-6"},[r("label",{staticClass:"pb-2 font-semibold text-gray-800",attrs:{for:"name"}},[t._v(t._s(t.__("Section"))+" "+t._s(t.__("Name")))]),t._v(" "),r("InputText",{class:[t.errors.name?"p-invalid":""],attrs:{type:"text",id:"name","aria-describedby":"name-help"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),t.errors.name?r("small",{staticClass:"p-invalid",attrs:{id:"name-help"}},[t._v(t._s(t.errors.name))]):t._e()],1),t._v(" "),r("div",{staticClass:"w-full flex flex-col mb-6"},[r("label",{staticClass:"pb-2 font-semibold text-gray-800",attrs:{for:"short_description"}},[t._v(t._s(t.__("Short Description")))]),t._v(" "),r("Textarea",{class:[t.errors.short_description?"p-invalid":""],attrs:{id:"short_description"},model:{value:t.form.short_description,callback:function(e){t.$set(t.form,"short_description",e)},expression:"form.short_description"}}),t._v(" "),t.errors.short_description?r("small",{staticClass:"p-invalid",attrs:{id:"short_description-help"}},[t._v(t._s(t.errors.short_description))]):t._e()],1),t._v(" "),r("div",{staticClass:"w-full"},[r("div",{staticClass:"flex justify-between items-center mb-8"},[r("div",{staticClass:"w-9/12"},[r("label",{staticClass:"font-semibold text-gray-800 pb-1",attrs:{for:"is_active"},domProps:{innerHTML:t._s(t.form.is_active?t.__("Active"):t.__("In-active"))}}),t._v(" "),r("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(t.__("Active"))+" ("+t._s(t.__("Shown Everywhere"))+"). "+t._s(t.__("In-active"))+" ("+t._s(t.__("Hidden Everywhere"))+").")])]),t._v(" "),r("div",{staticClass:"cursor-pointer rounded-full relative shadow-sm"},[r("InputSwitch",{attrs:{id:"is_active"},model:{value:t.form.is_active,callback:function(e){t.$set(t.form,"is_active",e)},expression:"form.is_active"}})],1)])]),t._v(" "),r("div",{staticClass:"w-full flex"},[r("Button",{attrs:{type:"submit",label:t.editFlag?t.__("Update"):"Create"}})],1)])])}),[],!1,null,null,null).exports;var g=r(80728),_=r(17531),x=r(79333),w=r(373);function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var s,n,i=[],o=!0,a=!1;try{for(r=r.call(t);!(o=(s=r.next()).done)&&(i.push(s.value),!e||i.length!==e);o=!0);}catch(t){a=!0,n=t}finally{try{o||null==r.return||r.return()}finally{if(a)throw n}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}const C={components:{SectionForm:v,AdminLayout:s.Z,Column:n.default,InputText:i.default,Toolbar:o.default,Button:a.default,Sidebar:l.default,Chip:g.default,Tag:_.default,NoDataTable:x.Z,ActionsDropdown:w.Z},props:{sections:Object,errors:Object},data:function(){return{createForm:!1,editForm:!1,currentId:null,columns:[{label:this.__("Code"),field:"code",filterOptions:{enabled:!0,placeholder:this.__("Search")+" "+this.__("Code"),filterValue:null,trigger:"enter"},sortable:!1,width:"11rem"},{label:this.__("Name"),field:"name",filterOptions:{enabled:!0,placeholder:this.__("Search")+" "+this.__("Name"),filterValue:null,trigger:"enter"},sortable:!1},{label:this.__("Status"),field:"status",sortable:!1,filterOptions:{enabled:!0,placeholder:this.__("Search")+" "+this.__("Status"),filterValue:null,filterDropdownItems:[{value:1,text:this.__("Active")},{value:0,text:this.__("In-active")}]}},{label:this.__("Actions"),field:"actions",sortable:!1}],options:{enabled:!0,mode:"pages",perPage:this.sections.meta.pagination.per_page,setCurrentPage:this.sections.meta.pagination.current_page,perPageDropdown:[10,20,50,100],dropdownAllowAll:!1},serverParams:{columnFilters:{},sort:{field:"",type:""},page:1,perPage:10},loading:!1}},metaInfo:function(){return{title:this.title}},computed:{title:function(){return this.__("Sections")+" - "+this.$page.props.general.app_name}},methods:{updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){this.updateParams({page:t.currentPage}),this.loadItems()},onPerPageChange:function(t){this.updateParams({perPage:t.currentPerPage}),this.loadItems()},onSortChange:function(t){this.updateParams({sort:[{type:t.sortType,field:this.columns[t.columnIndex].field}]}),this.loadItems()},onColumnFilter:function(t){this.updateParams(t),this.loadItems()},getQueryParams:function(){for(var t={page:this.serverParams.page,perPage:this.serverParams.perPage},e=0,r=Object.entries(this.serverParams.columnFilters);e<r.length;e++){var s=b(r[e],2),n=s[0],i=s[1];i&&(t[n]=i)}return t},loadItems:function(){this.$inertia.get(route(route().current()),this.getQueryParams(),{replace:!1,preserveState:!0,preserveScroll:!0})},deleteSection:function(t){var e=this;this.$confirm.require({header:this.__("Confirm Delete"),message:this.__("Do you want to delete this record?"),icon:"pi pi-info-circle",acceptClass:"p-button-danger",rejectLabel:this.__("Cancel"),acceptLabel:this.__("Delete"),accept:function(){e.$inertia.delete(route("sections.destroy",{id:t}),{},{onSuccess:function(){e.$toast.add({severity:"info",summary:e.__("Confirmed"),detail:e.__("Record deleted"),life:3e3})}})},reject:function(){}})},handleCopyStatus:function(t){t&&this.$toast.add({severity:"success",summary:this.__("Copied"),detail:this.__("Copied Successfully!"),life:2e3})}}};const k=(0,h.Z)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("admin-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[r("h4",{staticClass:"page-heading"},[t._v(t._s(t.__("Sections")))])]},proxy:!0},{key:"actions",fn:function(){return[r("button",{staticClass:"qt-btn qt-btn-success",on:{click:function(e){t.createForm=!0}}},[t._v("\n            "+t._s(t.__("New"))+" "+t._s(t.__("Section"))+"\n        ")])]},proxy:!0}])},[t._v(" "),t._v(" "),r("div",{staticClass:"container mx-auto py-8 px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("vue-good-table",{attrs:{mode:"remote","pagination-options":t.options,columns:t.columns,totalRows:t.sections.meta.pagination.total,rows:t.sections.data,rtl:t.$page.props.rtl},on:{"on-page-change":t.onPageChange,"on-column-filter":t.onColumnFilter,"on-per-page-change":t.onPerPageChange},scopedSlots:t._u([{key:"table-row",fn:function(e){return["code"===e.column.field?r("div",[r("Tag",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.row.code,expression:"props.row.code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.handleCopyStatus,expression:"handleCopyStatus",arg:"success"}],staticClass:"w-full p-mr-2 text-sm cursor-pointer",attrs:{value:e.row.code,icon:"pi pi-copy"}})],1):"status"===e.column.field?r("div",[r("span",{class:[e.row.status?"badge-success":"badge-danger","badge"]},[t._v(t._s(e.row.status?t.__("Active"):t.__("In-active")))])]):"actions"===e.column.field?r("div",[r("actions-dropdown",{scopedSlots:t._u([{key:"actions",fn:function(){return[r("button",{staticClass:"action-item",on:{click:function(r){t.editForm=!0,t.currentId=e.row.id}}},[t._v(t._s(t.__("Edit")))]),t._v(" "),r("button",{staticClass:"action-item",on:{click:function(r){return t.deleteSection(e.row.id)}}},[t._v(t._s(t.__("Delete")))])]},proxy:!0}],null,!0)})],1):r("span",[t._v("\n                          "+t._s(e.formattedRow[e.column.field])+"\n                        ")])]}}])},[t._v(" "),r("div",{attrs:{slot:"emptystate"},slot:"emptystate"},[r("no-data-table",[r("template",{slot:"action"},[r("button",{staticClass:"qt-btn-sm qt-btn-primary",attrs:{type:"button"},on:{click:function(e){t.createForm=!0}}},[t._v("\n                                    "+t._s(t.__("New"))+" "+t._s(t.__("Section"))+"\n                                ")])])],2)],1)]),t._v(" "),r("Sidebar",{staticClass:"p-sidebar-md",attrs:{position:"right",visible:t.createForm},on:{"update:visible":function(e){t.createForm=e}}},[r("SectionForm",{attrs:{"form-errors":t.errors,title:t.__("New")+" "+t.__("Section")},on:{close:function(e){t.createForm=!1}}})],1),t._v(" "),r("Sidebar",{staticClass:"p-sidebar-md",attrs:{position:"right",visible:t.editForm},on:{"update:visible":function(e){t.editForm=e}}},[r("SectionForm",{attrs:{"edit-flag":t.editForm,"section-id":t.currentId,"form-errors":t.errors,title:t.__("Edit")+" "+t.__("Section")},on:{"update:editFlag":function(e){t.editForm=e},"update:edit-flag":function(e){t.editForm=e},close:function(e){t.editForm=!1}}})],1)],1)])])])}),[],!1,null,null,null).exports}}]);