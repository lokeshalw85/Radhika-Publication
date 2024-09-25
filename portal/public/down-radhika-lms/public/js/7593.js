"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7593],{97618:(t,e,s)=>{s.d(e,{Z:()=>i});const i=(0,s(51900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50"}},[s("g",{attrs:{id:"Icon",transform:"translate(13 344)"}},[s("g",{attrs:{id:"circle",transform:"translate(-29 -361.14)"}},[s("circle",{attrs:{id:"bg_circle",cx:"25",cy:"25",r:"25",transform:"translate(16 17.14)",fill:"#25c16f"}}),t._v(" "),s("path",{attrs:{id:"white_ring",d:"M20,0A19.969,19.969,0,0,1,37.151,30.248c-.712,1.229-2.946,1.654-4.181,2.926-1.2,1.235-1.426,3.291-3.258,4.338A20.011,20.011,0,1,1,20,0Z",transform:"translate(21 22.14)",fill:"#fff"}}),t._v(" "),s("circle",{attrs:{id:"green_ring",cx:"15",cy:"15",r:"15",transform:"translate(26 27.14)",fill:"#25c16f"}})]),t._v(" "),s("g",{attrs:{id:"cursor",transform:"matrix(1, -0.017, 0.017, 1, 10.797, -319.593)"}},[s("path",{attrs:{id:"right",d:"M10.286,23.465a.687.687,0,0,1-.63-.413L.057.962a.687.687,0,0,1,.9-.9l22.09,9.6a.687.687,0,0,1-.073,1.288L16.249,13A4.885,4.885,0,0,0,13,16.249l-2.058,6.73a.687.687,0,0,1-.619.485Z",transform:"translate(0 0)",fill:"#fff"}}),t._v(" "),s("path",{attrs:{id:"left",d:"M27.244,9.657,5.154.058A.688.688,0,0,0,4.394.2h0L18.412,14.221A4.887,4.887,0,0,1,20.441,13l6.73-2.058a.687.687,0,0,0,.073-1.288Z",transform:"translate(-4.192 -0.001)",fill:"#fff"}})])])])}),[],!1,null,null,null).exports},60651:(t,e,s)=>{s.d(e,{Z:()=>r});const i={data:function(){return{show:!0}},computed:{style:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.bannerStyle)||"success"},message:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.banner)||""}}};const r=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.show&&t.message?s("div",{class:{"bg-indigo-500":"success"==t.style,"bg-red-700":"danger"==t.style}},[s("div",{staticClass:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},[s("div",{staticClass:"flex items-center justify-between flex-wrap"},[s("div",{staticClass:"w-0 flex-1 flex items-center min-w-0"},[s("span",{staticClass:"flex p-2 rounded-md",class:{"bg-indigo-600":"success"==t.style,"bg-red-600":"danger"==t.style}},["success"==t.style?s("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),"danger"==t.style?s("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})]):t._e()]),t._v(" "),s("p",{staticClass:"ml-3 font-medium text-white truncate"},[t._v("\n                        "+t._s(t.message)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"flex-shrink-0 sm:ml-3"},[s("button",{staticClass:"-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150",class:{"hover:bg-indigo-600 focus:bg-indigo-600":"success"==t.style,"hover:bg-red-600 focus:bg-red-600":"danger"==t.style},attrs:{type:"button","aria-label":"Dismiss"},on:{click:function(e){e.preventDefault(),t.show=!1}}},[s("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])])]):t._e()])}),[],!1,null,null,null).exports},16446:(t,e,s)=>{s.d(e,{Z:()=>r});const i={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"rtl:origin-top-left rtl:left-0 ltr:origin-top-right ltr:right-0":"origin-top"}}};const r=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),s("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 shadow rounded",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[s("div",{staticClass:"rounded-sm ring-1 ring-black ring-opacity-5",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports},93210:(t,e,s)=>{s.d(e,{Z:()=>r});const i={props:["href","as"]};const r=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"===t.as?s("button",{staticClass:"block text-sm w-full px-4 py-2 leading-5 text-gray-700 ltr:text-left rtl:text-right hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._t("default")],2):s("inertia-link",{staticClass:"text-sm block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 ltr:text-left rtl:text-right focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},57850:(t,e,s)=>{s.d(e,{Z:()=>r});const i={props:["href","active"],computed:{classes:function(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}}};const r=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null).exports},37760:(t,e,s)=>{s.d(e,{Z:()=>r});const i={props:["active","href","as"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}}};const r=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"==t.as?s("button",{staticClass:"w-full text-left",class:t.classes},[t._t("default")],2):s("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},80817:(t,e,s)=>{s.d(e,{Z:()=>r});const i={name:"AdminQuestionShimmer",components:{Skeleton:s(80247).default}};const r=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-6"},[s("Skeleton",{staticClass:"mb-2",attrs:{width:"10rem"}}),t._v(" "),s("Skeleton",{attrs:{height:"2rem"}})],1)}),[],!1,null,null,null).exports},9126:(t,e,s)=>{s.d(e,{Z:()=>r});const i={name:"HorizontalStepper",props:{steps:Array,editFlag:{type:Boolean,default:!1}},data:function(){return{open:!1}},methods:{showAlert:function(){this.$toast.add({severity:"info",summary:"Info",detail:"Please save the current details to proceed!",life:2e3})}}};const r=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full"},[s("div",{staticClass:"sm:hidden relative w-full mx-auto rounded"},[s("div",{staticClass:"w-full flex items-start relative",on:{click:function(e){t.open=!t.open}}},[s("button",{staticClass:"w-full bg-green-600 text-white flex items-center justify-center shadow rounded text-xs focus:outline-none"},[s("span",{staticClass:"p-3"},[t._v("Go To")]),t._v(" "),s("span",{staticClass:"py-3 rounded-r px-2"},[s("svg",{attrs:{id:"downIcon2",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z"}}),t._v(" "),s("polyline",{attrs:{points:"6 9 12 15 18 9"}})]),t._v(" "),s("svg",{staticClass:"hidden icon icon-tabler icon-tabler-chevron-up",attrs:{id:"upIcon2",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z"}}),t._v(" "),s("polyline",{attrs:{points:"6 15 12 9 18 15"}})])])]),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"bg-white shadow rounded py-1 absolute right-0 left-0 top-0 mt-12 dropdown-content"},t._l(t.steps,(function(e,i){return s("li",{key:e.key,staticClass:"cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"},[!0!==e.enable?s("inertia-link",{staticClass:"block",attrs:{href:e.url}},[t._v("\n                        "+t._s(e.title)+"\n                    ")]):s("span",[t._v(t._s(e.title))])],1)})),0)])]),t._v(" "),s("div",{staticClass:"xl:w-full xl:mx-0 h-12 hidden sm:block bg-white"},[s("ul",{staticClass:"flex justify-end gap-8"},t._l(t.steps,(function(e,i){return s("li",{key:e.key,staticClass:"group hover:border-primary hover:shadow ease-linear transition-all duration-150 text-sm flex flex-col justify-between border pt-3 rounded-t font-normal cursor-pointer",class:"active"===e.status?"border-primary":"border-gray-400"},[t.editFlag?s("inertia-link",{staticClass:"block",attrs:{href:e.url}},[s("div",{staticClass:"flex items-center px-8 mb-2"},[s("div",{staticClass:"w-6 h-6 group-hover:bg-primary rounded-full flex items-center justify-center",class:"active"===e.status?"bg-primary":"bg-gray-400"},[s("p",{staticClass:"focus:outline-none text-xs text-white"},[t._v(t._s(e.step))])]),t._v(" "),s("span",{staticClass:"ltr:ml-2 rtl:mr-2 group-hover:text-primary",class:"active"===e.status?"text-primary":"text-gray-600"},[t._v(t._s(e.title))])])]):s("div",{staticClass:"flex items-center px-8 mb-2",on:{click:t.showAlert}},[s("div",{staticClass:"w-6 h-6 group-hover:bg-primary rounded-full flex items-center justify-center",class:"active"===e.status?"bg-primary":"bg-gray-300"},[s("p",{staticClass:"focus:outline-none text-xs text-white"},[t._v(t._s(e.step))])]),t._v(" "),s("span",{staticClass:"ltr:ml-2 rtl:mr-2 group-hover:text-primary",class:"active"===e.status?"text-primary":"text-gray-600"},[t._v(t._s(e.title))])]),t._v(" "),s("div",{staticClass:"w-full h-1 group-hover:bg-primary rounded-t-md",class:"active"===e.status?"bg-primary":"bg-gray-300"})],1)})),0)])])}),[],!1,null,null,null).exports},139:(t,e,s)=>{s.d(e,{Z:()=>b});var i=s(97618),r=s(60651),a=s(16446),o=s(93210),n=s(57850),l=s(37760),c=s(71003),d=s(50298),u=s(15366);const p={name:"SidebarDropdown",props:{title:String,items:Array},data:function(){return{open:!1}},methods:{isActive:function(t){return window.location.href===t},isOpen:function(){return this.urls.includes(window.location.href)}},computed:{urls:function(){var t=[];return this.items.forEach((function(e){return t.push(e.url)})),t}},created:function(){this.open=this.isOpen()}};var v=s(51900);const f=(0,v.Z)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.open},attrs:{role:"button"},on:{click:function(e){t.open=!t.open}}},[s("div",{staticClass:"flex items-center"},[t._t("icon"),t._v(" "),s("span",[t._v(t._s(t.__(t.title)))])],2),t._v(" "),s("svg",{staticClass:"flex-shrink-0 w-4 h-4 ml-2 transition transform",class:{"rotate-90":t.open},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"mb-4"},t._l(t.items,(function(e){return s("div",{key:e.url,staticClass:"block"},[e.active?s("inertia-link",{staticClass:"flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.isActive(e.url)},attrs:{href:e.url}},[t._v("\n                "+t._s(t.__(e.label))+"\n            ")]):t._e()],1)})),0)])}),[],!1,null,null,null).exports;const m={name:"SidebarLink",props:{title:String,url:String},computed:{active:function(){return window.location.href===this.url}}};const h=(0,v.Z)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("inertia-link",{staticClass:"flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.active},attrs:{href:t.url}},[t._t("icon"),t._v(" "),s("span",[t._v(t._s(t.__(t.title)))])],2)}),[],!1,null,null,null).exports;var g=s(44943),_=s(78465);const x={components:{ArcApplicationMark:i.Z,ArcBanner:r.Z,ArcDropdown:a.Z,ArcDropdownLink:o.Z,ArcNavLink:n.Z,ArcResponsiveNavLink:l.Z,ConfirmDialog:c.default,Message:u.default,Toast:d.default,SidebarDropdown:f,SidebarLink:h,PerfectScrollbar:g.PerfectScrollbar,InputSwitch:_.default},data:function(){return{sideBar:!1,darkMode:!1,scrollbarOptions:{suppressScrollX:!0},successMessage:String,errorMessage:String,items:[{label:"Home Dashboard",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',url:route("admin_dashboard"),active:"admin"===this.$page.props.user.role_id},{label:"Home Dashboard",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',url:route("instructor_dashboard"),active:"instructor"===this.$page.props.user.role_id},{item_type:"divider",label:"Engage"},{item_type:"divider",label:"Library"},{label:"Question Bank",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Questions",url:route("questions.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Import Questions",url:route("initiate_import_questions"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Comprehensions",url:route("comprehensions.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Question Types",url:route("question-types.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]},{label:"Lesson Bank",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,url:route("lessons.index")},{item_type:"divider",label:"Configuration"},{label:"Manage Users",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id,items:[{label:"Users",url:route("users.index"),active:"admin"===this.$page.props.user.role_id}]},{label:"Books Manager",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Series",url:route("sections.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Books",url:route("skills.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Lessons",url:route("topics.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]}]}},methods:{switchToTeam:function(t){this.$inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},changeMode:function(){this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},logout:function(){this.$inertia.post(route("logout"))}}};const b=(0,v.Z)(x,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60"},[s("arc-banner")],1),t._v(" "),s("div",{staticClass:"min-h-screen"},[s("nav",{staticClass:"fixed top-0 ltr:left-0 rtl:right-0 z-20 h-full pb-10 overflow-hidden transition origin-left transform bg-gray-900 w-60 md:ltr:translate-x-0 md:rtl:-translate-x-0",class:{"ltr:-translate-x-full rtl:translate-x-full":!t.sideBar,"translate-x-0":t.sideBar},on:{click:function(e){t.sideBar=!1}}},[s("inertia-link",{staticClass:"flex items-center px-4 py-5",attrs:{href:t.route("home")}},[s("img",{staticClass:"h-8 w-auto",attrs:{src:t.$page.props.assetUrl+t.$page.props.general.logo_path,alt:t.$page.props.general.app_name}})]),t._v(" "),s("perfect-scrollbar",{ref:"scroll",staticClass:"h-full overflow-hidden",attrs:{options:t.scrollbarOptions}},[s("nav",{staticClass:"text-sm font-medium pb-16 text-gray-400",attrs:{"aria-label":"Main Navigation"}},[t._l(t.items,(function(e){return[e.active&&"dropdown"===e.item_type?s("sidebar-dropdown",{attrs:{title:e.label,items:e.items},scopedSlots:t._u([{key:"icon",fn:function(){return[s("span",{domProps:{innerHTML:t._s(e.icon)}})]},proxy:!0}],null,!0)}):t._e(),t._v(" "),!0===e.active&&"link"===e.item_type?s("sidebar-link",{attrs:{title:e.label,url:e.url},scopedSlots:t._u([{key:"icon",fn:function(){return[s("span",{domProps:{innerHTML:t._s(e.icon)}})]},proxy:!0}],null,!0)}):t._e(),t._v(" "),"divider"===e.item_type?s("div",{staticClass:"my-4 mx-4 uppercase font-semibold text-green-500 text-xs"},[t._v("\n                            "+t._s(e.label)+"\n                        ")]):t._e()]}))],2)])],1),t._v(" "),s("div",{staticClass:"ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60"},[s("header",{staticClass:"bg-white shadow flex items-center justify-between w-full md:mx-auto md:sticky md:z-30 md:top-0 px-4 h-14"},[s("button",{staticClass:"block btn btn-light-secondary md:hidden",on:{click:function(e){t.sideBar=!0}}},[s("span",{staticClass:"sr-only"},[t._v(t._s(t.__("Menu")))]),t._v(" "),s("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])]),t._v(" "),s("div",{staticClass:"hidden -ml-3 form-icon md:block w-96"},[s("inertia-link",{staticClass:"text-sm font-semibold px-4 py-5 capitalize",attrs:{href:t.route("home")}},[t._v("\n                        "+t._s(t.__(t.$page.props.user.role_id))+" "+t._s(t.__("Dashboard"))+"\n                    ")])],1),t._v(" "),s("div",{staticClass:"flex items-center"},[s("a",{staticClass:"flex text-gray-500",attrs:{href:"#"}},[s("svg",{staticClass:"flex-shrink-0 w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}})])]),t._v(" "),s("div",{staticClass:"ltr:ml-4 rtl:mr-4 relative"},[s("arc-dropdown",{attrs:{align:"right",width:"48"},scopedSlots:t._u([{key:"trigger",fn:function(){return[t.$page.props.jetstream.managesProfilePhotos?s("button",{staticClass:"flex border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},[s("img",{staticClass:"h-8 w-8 rounded-full object-cover",attrs:{src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name}})]):s("span",{staticClass:"inline-flex rounded-md"},[s("button",{staticClass:"inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",attrs:{type:"button"}},[t._v("\n                                            "+t._s(t.$page.props.user.name)+"\n\n                                            "),s("svg",{staticClass:"ml-2 -mr-0.5 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                    "+t._s(t.__("Manage Account"))+"\n                                ")]),t._v(" "),s("arc-dropdown-link",{attrs:{href:t.route("profile.show")}},[t._v("\n                                    "+t._s(t.__("Profile"))+"\n                                ")]),t._v(" "),t.$page.props.jetstream.hasApiFeatures?s("arc-dropdown-link",{attrs:{href:t.route("api-tokens.index")}},[t._v("\n                                    "+t._s(t.__("Api Tokens"))+"\n                                ")]):t._e(),t._v(" "),s("div",{staticClass:"border-t border-gray-100"}),t._v(" "),s("form",{attrs:{method:"post",action:t.route("logout")}},[s("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.$page.props.csrf_token}}),t._v(" "),s("arc-dropdown-link",{attrs:{as:"button"}},[t._v("\n                                        "+t._s(t.__("Logout"))+"\n                                    ")])],1)]},proxy:!0}])})],1)])]),t._v(" "),s("section",[s("div",{staticClass:"container mx-auto pt-4 px-4 sm:px-6 lg:px-8"},[s("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-between"},[s("div",[t._t("header")],2),t._v(" "),s("div",{staticClass:"mb-6 sm:mb-0 sm:mt-0"},[t._t("actions")],2)])])]),t._v(" "),s("main",[s("div",{staticClass:"container mx-auto px-4 sm:px-6 lg:px-8"},[t.$page.props.successMessage?s("Message",{attrs:{severity:"success",closable:!1}},[t._v(t._s(t.$page.props.successMessage))]):t._e(),t._v(" "),t.$page.props.errorMessage?s("Message",{attrs:{severity:"error",closable:!1}},[t._v(t._s(t.$page.props.errorMessage))]):t._e()],1),t._v(" "),t._t("default")],2),t._v(" "),s("portal-target",{attrs:{name:"modal",multiple:""}}),t._v(" "),s("ConfirmDialog"),t._v(" "),s("Toast",{attrs:{position:t.$page.props.rtl?"bottom-left":"bottom-right"}}),t._v(" "),s("Toast",{attrs:{position:t.$page.props.rtl?"top-left":"top-right",group:"lm"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sideBar,expression:"sideBar"}],staticClass:"fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden",on:{click:function(e){t.sideBar=!1}}})])])}),[],!1,null,null,null).exports},27593:(t,e,s)=>{s.r(e),s.d(e,{default:()=>f});var i=s(139),r=s(80817),a=s(15693),o=s(72263),n=s(14974),l=s(9126);const c={name:"AdminPracticeVideoCard",props:{video:Object}};var d=s(51900);const u=(0,d.Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white shadow px-4 py-5 border-b-4 border-gray-800 mb-6"},[s("h5",{staticClass:"inline-block bg-green-100 rounded-sm px-2 py-1 mb-4 text-xs leading-3 text-green-700"},[t._v(t._s(t.video.skill))]),t._v(" "),s("div",{staticClass:"q-data mb-4"},[s("h4",{staticClass:"text-base font-semibold mb-2"},[t._v(t._s(t.video.title))])]),t._v(" "),s("ul",{staticClass:"mt-5"},[s("li",{staticClass:"text-gray-600 flex items-center text-sm mb-4"},[s("span",{staticClass:"font-semibold"},[t._v(t._s(t.__("Watch Time"))+":")]),t._v(" "),s("span",{staticClass:"ltr:ml-2 rtl:mr-2"},[t._v(t._s(t.video.duration)+" Minutes")])]),t._v(" "),s("li",{staticClass:"text-gray-600 flex items-center text-sm mb-4"},[s("span",{staticClass:"font-semibold"},[t._v(t._s(t.__("Difficulty Level"))+":")]),t._v(" "),s("span",{staticClass:"ltr:ml-2 rtl:mr-2"},[t._v(t._s(t.video.difficulty))])])]),t._v(" "),s("div",{staticClass:"mt-4 flex justify-between items-center"},[s("h5",{staticClass:"inline-block bg-gray-100 rounded-sm px-2 py-1 text-xs leading-3 text-gray-700"},[t._v(t._s(t.video.code))]),t._v(" "),t._t("action")],2)])}),[],!1,null,null,null).exports;var p=s(50298);const v={name:"PracticeVideos",components:{AdminPracticeVideoCard:u,AdminLayout:i.Z,AdminQuestionShimmer:r.Z,Checkbox:a.default,Button:o.default,Toast:p.default,InputText:n.default,HorizontalStepper:l.Z},props:{subCategory:Object,skill:Object,difficultyLevels:Array,steps:Array},data:function(){return{qEditFlag:!1,videos:[],difficultyFilter:[],codeFilter:"",topicFilter:"",tagArray:[],tags:[],pagination:{},loading:!1,debounce:null,processing:!1}},metaInfo:function(){return{title:this.title}},computed:{title:function(){return this.__("Configure Videos")+" - "+this.$page.props.general.app_name},tagFilter:function(){var t=[];return this.tagArray.forEach((function(e){return t.push(e.id)})),t}},methods:{viewVideos:function(){this.qEditFlag=!1,this.resetFilters()},editVideos:function(){this.qEditFlag=!0,this.resetFilters()},resetFilters:function(){this.codeFilter="",this.topicFilter="",this.difficultyFilter=[],this.tagArray=[],this.filterVideos()},filterVideos:function(){this.qEditFlag?this.fetchAvailableVideos():this.fetchVideos()},loadMoreVideos:function(){var t=this;axios.get(this.pagination.links.next,{params:{difficulty_levels:this.difficultyFilter,code:this.codeFilter,topic:this.topicFilter,tags:this.tagFilter}}).then((function(e){var s=e.data.videos.data;t.pagination=e.data.videos.meta.pagination,s.forEach((function(e){return t.videos.push(e)})),t.loading=!1})).catch((function(e){t.loading=!1}))},fetchVideos:function(){var t=this;t.loading=!0,this.videos=[],axios.get(route("practice.fetch_videos",{category:this.subCategory.id,skill:this.skill.id,difficulty_levels:this.difficultyFilter,code:this.codeFilter,topic:this.topicFilter,tags:this.tagFilter})).then((function(e){var s=e.data.videos.data;t.pagination=e.data.videos.meta.pagination,s.forEach((function(e){return t.videos.push(e)})),t.loading=!1})).catch((function(e){t.loading=!1}))},fetchAvailableVideos:function(){var t=this;t.loading=!0,this.videos=[],axios.get(route("practice.fetch_available_videos",{category:this.subCategory.id,skill:this.skill.id,difficulty_levels:this.difficultyFilter,code:this.codeFilter,topic:this.topicFilter,tags:this.tagFilter})).then((function(e){var s=e.data.videos.data;t.pagination=e.data.videos.meta.pagination,s.forEach((function(e){return t.videos.push(e)})),t.loading=!1})).catch((function(e){t.loading=!1}))},addVideo:function(t,e){var s=this;s.processing=!0,axios.post(route("practice.add_video",{category:this.subCategory.id,skill:this.skill.id}),{video_id:t}).then((function(t){s.videos[e].disabled=!0,s.showToast("Added","Video added successfully"),s.processing=!1})).catch((function(t){s.processing=!1}))},removeVideo:function(t,e){var s=this,i=this;i.processing=!0,this.$confirm.require({header:this.__("Confirm"),message:this.__("Do you want to remove this video?"),icon:"pi pi-info-circle",acceptClass:"p-button-danger",rejectLabel:this.__("Cancel"),acceptLabel:this.__("Remove"),accept:function(){axios.post(route("practice.remove_video",{category:s.subCategory.id,skill:s.skill.id}),{video_id:t}).then((function(t){i.videos[e].disabled=!0,i.showToast("Removed","Video removed successfully"),i.processing=!1})).catch((function(t){i.processing=!1}))},reject:function(){}})},searchTags:function(t,e){if(""!==t){var s=this;e(!0),clearTimeout(this.debounce),this.tags=[],this.debounce=setTimeout((function(){axios.get(route("search_tags",{query:t})).then((function(t){s.tags=t.data.tags,e(!1)})).catch((function(t){e(!1)}))}),600)}},showToast:function(t,e){this.$toast.add({severity:"info",summary:this.__(t),detail:this.__(e),life:3e3})}},mounted:function(){this.fetchVideos()}};const f=(0,d.Z)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("admin-layout",[s("div",{staticClass:"container mx-auto pt-4 px-4 sm:px-6 lg:px-8"},[s("div",{staticClass:"w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow rounded-t"},[s("div",{staticClass:"mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2"},[s("h2",{staticClass:"text-gray-800 dark:text-gray-100 text-lg font-bold"},[t._v(t._s(t.__("Configure Videos")))]),t._v(" "),s("p",{staticClass:"font-normal text-sm text-gray-600 dark:text-gray-100 mt-1"},[t._v(t._s(t.subCategory.name)+" "+t._s(t.skill.name)+" "+t._s(t.__("Videos")))])]),t._v(" "),s("horizontal-stepper",{attrs:{steps:t.steps,"edit-flag":!0}})],1)]),t._v(" "),s("div",{staticClass:"container mx-auto py-8 px-4 sm:px-6 lg:px-8"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"flex justify-center flex-wrap"},[s("div",{staticClass:"sm:w-4/12 w-full p-4"},[s("div",[s("h4",{staticClass:"py-2 text-sm font-semibold flex items-center gap-2 text-gray-800 border-b"},[s("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"}})]),t._v("\n                                "+t._s(t.__("Filters"))+"\n                            ")]),t._v(" "),s("div",{staticClass:"w-full flex flex-col mt-6"},[s("label",{staticClass:"pb-2 text-sm font-semibold text-gray-800",attrs:{for:"code"}},[t._v(t._s(t.__("Code")))]),t._v(" "),s("InputText",{attrs:{type:"text",id:"code",placeholder:t.__("Code"),"aria-describedby":"code-help"},model:{value:t.codeFilter,callback:function(e){t.codeFilter=e},expression:"codeFilter"}})],1),t._v(" "),s("div",{staticClass:"w-full flex flex-col mt-6"},[s("label",{staticClass:"mb-3 text-sm font-semibold text-gray-800",attrs:{for:"topic"}},[t._v(t._s(t.__("Topic")))]),t._v(" "),s("InputText",{attrs:{type:"text",id:"topic",placeholder:t.__("Topic"),"aria-describedby":"topic-help"},model:{value:t.topicFilter,callback:function(e){t.topicFilter=e},expression:"topicFilter"}})],1),t._v(" "),s("div",{staticClass:"w-full flex flex-col mt-6"},[s("label",{staticClass:"pb-2 text-sm font-semibold text-gray-800",attrs:{for:"tag"}},[t._v("By Tag")]),t._v(" "),s("v-select",{attrs:{multiple:"",id:"tag",options:t.tags,label:"name",dir:t.$page.props.rtl?"rtl":"ltr"},on:{search:t.searchTags},scopedSlots:t._u([{key:"no-options",fn:function(e){e.search;return[e.searching?[t._v(t._s(t.__("No results were found for this search"))+".")]:s("em",{staticClass:"opacity-50"},[t._v(t._s(t.__("Start typing to search"))+".")])]}}]),model:{value:t.tagArray,callback:function(e){t.tagArray=e},expression:"tagArray"}})],1),t._v(" "),s("div",{staticClass:"w-full flex flex-col mt-6"},[s("label",{staticClass:"mb-3 text-sm font-semibold text-gray-800"},[t._v(t._s(t.__("Difficulty Level")))]),t._v(" "),s("div",{staticClass:"flex flex-col gap-2"},t._l(t.difficultyLevels,(function(e){return s("div",{staticClass:"p-field-radiobutton"},[s("Checkbox",{attrs:{id:"difficulty"+e.id,name:"difficulty",value:e.id},model:{value:t.difficultyFilter,callback:function(e){t.difficultyFilter=e},expression:"difficultyFilter"}}),t._v(" "),s("label",{staticClass:"text-sm text-gray-800",attrs:{for:"difficulty"+e.id}},[t._v(t._s(e.name))])],1)})),0)]),t._v(" "),s("div",{staticClass:"w-full flex items-center gap-2 my-8"},[s("button",{staticClass:"w-full qt-btn qt-btn-primary",attrs:{type:"button"},on:{click:t.resetFilters}},[t._v(t._s(t.__("Reset")))]),t._v(" "),s("button",{staticClass:"w-full qt-btn qt-btn-success",attrs:{type:"button"},on:{click:t.filterVideos}},[t._v(t._s(t.__("Search")))])])])]),t._v(" "),s("div",{staticClass:"sm:w-8/12 w-full my-4"},[s("div",{staticClass:"my-2 p-4 border border-green-100 shadow-sm rounded-sm bg-green-50"},[s("div",{staticClass:"mb-2 font-semibold"},[t._v(t._s(t.__("Currently"))+" "+t._s(t.qEditFlag?t.__("Adding"):t.__("Viewing"))+" "+t._s(t.__("Videos")))]),t._v(" "),s("div",{staticClass:"flex flex-col sm:flex-row gap-2"},[s("div",[s("a",{staticClass:"text-sm qt-link-success",attrs:{href:"#"},on:{click:function(e){return t.viewVideos()}}},[t._v(t._s(t.__("View"))+" "+t._s(t.__("Videos")))])]),t._v(" "),s("div",{staticClass:"hidden sm:inline-block"},[t._v("|")]),t._v(" "),s("div",[s("a",{staticClass:"text-sm qt-link-success",attrs:{href:"#"},on:{click:function(e){return t.editVideos()}}},[t._v(t._s(t.__("Add"))+" "+t._s(t.__("Videos")))])])])]),t._v(" "),s("div",{staticClass:"bg-gray-100 rounded p-6"},[t.loading?s("div",{staticClass:"grid grid-cols-1 gap-4 flex-wrap"},[s("admin-question-shimmer"),t._v(" "),s("admin-question-shimmer"),t._v(" "),s("admin-question-shimmer"),t._v(" "),s("admin-question-shimmer")],1):s("div",[s("div",{staticClass:"text-sm mb-4"},[s("span",{staticClass:"text-gray-500 font-normal"},[t._v(t._s(t.pagination.total)+" "+t._s(t.__("items_found_message"))+".")])]),t._v(" "),s("div",{staticClass:"grid grid-cols-1 gap-4 flex-wrap"},[t._l(t.videos,(function(e,i){return[s("AdminPracticeVideoCard",{key:e.code,attrs:{video:e},scopedSlots:t._u([{key:"action",fn:function(){return[s("button",{staticClass:"qt-btn-sm",class:[t.qEditFlag?"qt-btn-success":"qt-btn-danger",e.disabled||t.processing?"opacity-25":""],attrs:{disabled:e.disabled},domProps:{innerHTML:t._s(t.qEditFlag?t.__("Add"):t.__("Remove"))},on:{click:function(s){t.qEditFlag?t.addVideo(e.id,i):t.removeVideo(e.id,i)}}})]},proxy:!0}],null,!0)})]})),t._v(" "),0===t.videos.length?s("div",{staticClass:"flex justify-center items-center"},[s("h4",{staticClass:"text-sm p-4 font-semibold"},[t._v(t._s(t.__("No Videos")))])]):t.pagination&&t.videos.length!==t.pagination.total?s("div",{staticClass:"flex justify-center items-center"},[s("button",{staticClass:"qt-btn-success",on:{click:t.loadMoreVideos}},[t._v(t._s(t.__("Load More")))])]):s("div",{staticClass:"flex text-sm justify-center items-center py-4"},[t._v("\n                                        "+t._s(t.__("no_more_data_message"))+"\n                                    ")])],2)])])])])])])])])}),[],!1,null,null,null).exports}}]);