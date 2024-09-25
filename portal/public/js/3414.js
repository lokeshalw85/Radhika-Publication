"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3414],{97618:(t,e,r)=>{r.d(e,{Z:()=>s});const s=(0,r(51900).Z)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50"}},[r("g",{attrs:{id:"Icon",transform:"translate(13 344)"}},[r("g",{attrs:{id:"circle",transform:"translate(-29 -361.14)"}},[r("circle",{attrs:{id:"bg_circle",cx:"25",cy:"25",r:"25",transform:"translate(16 17.14)",fill:"#25c16f"}}),t._v(" "),r("path",{attrs:{id:"white_ring",d:"M20,0A19.969,19.969,0,0,1,37.151,30.248c-.712,1.229-2.946,1.654-4.181,2.926-1.2,1.235-1.426,3.291-3.258,4.338A20.011,20.011,0,1,1,20,0Z",transform:"translate(21 22.14)",fill:"#fff"}}),t._v(" "),r("circle",{attrs:{id:"green_ring",cx:"15",cy:"15",r:"15",transform:"translate(26 27.14)",fill:"#25c16f"}})]),t._v(" "),r("g",{attrs:{id:"cursor",transform:"matrix(1, -0.017, 0.017, 1, 10.797, -319.593)"}},[r("path",{attrs:{id:"right",d:"M10.286,23.465a.687.687,0,0,1-.63-.413L.057.962a.687.687,0,0,1,.9-.9l22.09,9.6a.687.687,0,0,1-.073,1.288L16.249,13A4.885,4.885,0,0,0,13,16.249l-2.058,6.73a.687.687,0,0,1-.619.485Z",transform:"translate(0 0)",fill:"#fff"}}),t._v(" "),r("path",{attrs:{id:"left",d:"M27.244,9.657,5.154.058A.688.688,0,0,0,4.394.2h0L18.412,14.221A4.887,4.887,0,0,1,20.441,13l6.73-2.058a.687.687,0,0,0,.073-1.288Z",transform:"translate(-4.192 -0.001)",fill:"#fff"}})])])])}),[],!1,null,null,null).exports},60651:(t,e,r)=>{r.d(e,{Z:()=>i});const s={data:function(){return{show:!0}},computed:{style:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.bannerStyle)||"success"},message:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.banner)||""}}};const i=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show&&t.message?r("div",{class:{"bg-indigo-500":"success"==t.style,"bg-red-700":"danger"==t.style}},[r("div",{staticClass:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},[r("div",{staticClass:"flex items-center justify-between flex-wrap"},[r("div",{staticClass:"w-0 flex-1 flex items-center min-w-0"},[r("span",{staticClass:"flex p-2 rounded-md",class:{"bg-indigo-600":"success"==t.style,"bg-red-600":"danger"==t.style}},["success"==t.style?r("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),"danger"==t.style?r("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})]):t._e()]),t._v(" "),r("p",{staticClass:"ml-3 font-medium text-white truncate"},[t._v("\n                        "+t._s(t.message)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"flex-shrink-0 sm:ml-3"},[r("button",{staticClass:"-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150",class:{"hover:bg-indigo-600 focus:bg-indigo-600":"success"==t.style,"hover:bg-red-600 focus:bg-red-600":"danger"==t.style},attrs:{type:"button","aria-label":"Dismiss"},on:{click:function(e){e.preventDefault(),t.show=!1}}},[r("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])])]):t._e()])}),[],!1,null,null,null).exports},6260:(t,e,r)=>{r.d(e,{Z:()=>i});const s={name:"AdminTestStatCard",props:{title:String,hint:String,count:String|Number}};const i=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ease-linear transition-all duration-150 w-full flex items-center justify-center py-12 group hover:bg-green-800 border-b border-r border-gray-200"},[r("div",{staticClass:"flex flex-col items-center"},[r("p",{staticClass:"focus:outline-none text-sm font-medium leading-none text-center group-hover:text-white text-gray-800"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"focus:outline-none text-base sm:text-lg md:text-xl font-bold leading-normal text-center group-hover:text-white text-green-800 mt-3"},[t._v(t._s(t.count))])])])}),[],!1,null,null,null).exports},16446:(t,e,r)=>{r.d(e,{Z:()=>i});const s={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"rtl:origin-top-left rtl:left-0 ltr:origin-top-right ltr:right-0":"origin-top"}}};const i=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),r("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 shadow rounded",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[r("div",{staticClass:"rounded-sm ring-1 ring-black ring-opacity-5",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports},93210:(t,e,r)=>{r.d(e,{Z:()=>i});const s={props:["href","as"]};const i=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["button"===t.as?r("button",{staticClass:"block text-sm w-full px-4 py-2 leading-5 text-gray-700 ltr:text-left rtl:text-right hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._t("default")],2):r("inertia-link",{staticClass:"text-sm block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 ltr:text-left rtl:text-right focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},57850:(t,e,r)=>{r.d(e,{Z:()=>i});const s={props:["href","active"],computed:{classes:function(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}}};const i=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null).exports},37760:(t,e,r)=>{r.d(e,{Z:()=>i});const s={props:["active","href","as"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}}};const i=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["button"==t.as?r("button",{staticClass:"w-full text-left",class:t.classes},[t._t("default")],2):r("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},89258:(t,e,r)=>{r.d(e,{Z:()=>w});var s=r(97618),i=r(60651),a=r(16446),o=r(93210),n=r(57850),l=r(37760),c=r(71003),p=r(50298),u=r(15366);const d={name:"SidebarDropdown",props:{title:String,items:Array},data:function(){return{open:!1}},methods:{isActive:function(t){return window.location.href===t},isOpen:function(){return this.urls.includes(window.location.href)}},computed:{urls:function(){var t=[];return this.items.forEach((function(e){return t.push(e.url)})),t}},created:function(){this.open=this.isOpen()}};var g=r(51900);const m=(0,g.Z)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.open},attrs:{role:"button"},on:{click:function(e){t.open=!t.open}}},[r("div",{staticClass:"flex items-center"},[t._t("icon"),t._v(" "),r("span",[t._v(t._s(t.__(t.title)))])],2),t._v(" "),r("svg",{staticClass:"flex-shrink-0 w-4 h-4 ml-2 transition transform",class:{"rotate-90":t.open},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"mb-4"},t._l(t.items,(function(e){return r("div",{key:e.url,staticClass:"block"},[e.active?r("inertia-link",{staticClass:"flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.isActive(e.url)},attrs:{href:e.url}},[t._v("\n                "+t._s(t.__(e.label))+"\n            ")]):t._e()],1)})),0)])}),[],!1,null,null,null).exports;const h={name:"SidebarLink",props:{title:String,url:String},computed:{active:function(){return window.location.href===this.url}}};const v=(0,g.Z)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("inertia-link",{staticClass:"flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.active},attrs:{href:t.url}},[t._t("icon"),t._v(" "),r("span",[t._v(t._s(t.__(t.title)))])],2)}),[],!1,null,null,null).exports;var _=r(44943),f=r(78465);const x={components:{ArcApplicationMark:s.Z,ArcBanner:i.Z,ArcDropdown:a.Z,ArcDropdownLink:o.Z,ArcNavLink:n.Z,ArcResponsiveNavLink:l.Z,ConfirmDialog:c.default,Message:u.default,Toast:p.default,SidebarDropdown:m,SidebarLink:v,PerfectScrollbar:_.PerfectScrollbar,InputSwitch:f.default},data:function(){return{sideBar:!1,darkMode:!1,scrollbarOptions:{suppressScrollX:!0},successMessage:String,errorMessage:String,items:[{label:"Home Dashboard",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',url:route("admin_dashboard"),active:"admin"===this.$page.props.user.role_id},{label:"Home Dashboard",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',url:route("instructor_dashboard"),active:"instructor"===this.$page.props.user.role_id},{label:"File Manager",item_type:"link",url:route("file-manager"),icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>',active:"admin"===this.$page.props.user.role_id},{item_type:"divider",label:"Engage"},{label:"Manage Tests",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Quizzes",url:route("quizzes.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Exams",url:route("exams.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Quiz Types",url:route("quiz-types.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Exam Types",url:route("exam-types.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]},{label:"Manage Learning",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Practice Sets",url:route("practice-sets.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Lessons",url:route("practice.configure_lessons"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Videos",url:route("practice.configure_videos"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]},{item_type:"divider",label:"Library"},{label:"Question Bank",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Questions",url:route("questions.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Import Questions",url:route("initiate_import_questions"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Comprehensions",url:route("comprehensions.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Question Types",url:route("question-types.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]},{label:"Lesson Bank",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,url:route("lessons.index")},{label:"Video Bank",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,url:route("videos.index")},{item_type:"divider",label:"Configuration"},{label:"Monetization",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/></svg>',active:"admin"===this.$page.props.user.role_id,items:[{label:"Plans",url:route("plans.index"),active:"admin"===this.$page.props.user.role_id},{label:"Subscriptions",url:route("subscriptions.index"),active:"admin"===this.$page.props.user.role_id},{label:"Payments",url:route("payments.index"),active:"admin"===this.$page.props.user.role_id}]},{label:"Manage Users",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id,items:[{label:"Users",url:route("users.index"),active:"admin"===this.$page.props.user.role_id},{label:"User Groups",url:route("user-groups.index"),active:"admin"===this.$page.props.user.role_id},{label:"Import Users",url:route("initiate_import_users"),active:"admin"===this.$page.props.user.role_id}]},{label:"Manage Categories",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>',active:"admin"===this.$page.props.user.role_id,items:[{label:"Categories",url:route("categories.index"),active:"admin"===this.$page.props.user.role_id},{label:"Sub Categories",url:route("sub-categories.index"),active:"admin"===this.$page.props.user.role_id},{label:"Tags",url:route("tags.index"),active:"admin"===this.$page.props.user.role_id}]},{label:"Manage Subjects",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Series",url:route("sections.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Books",url:route("skills.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Lessons",url:route("topics.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]},{label:"Settings",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id,items:[{label:"General Settings",url:route("general_settings"),active:"admin"===this.$page.props.user.role_id},{label:"Localization Settings",url:route("localization_settings"),active:"admin"===this.$page.props.user.role_id},{label:"Home Page Settings",url:route("home_page_settings"),active:"admin"===this.$page.props.user.role_id},{label:"Email Settings",url:route("email_settings"),active:"admin"===this.$page.props.user.role_id},{label:"Payment Settings",url:route("payment_settings"),active:"admin"===this.$page.props.user.role_id},{label:"Billing & Tax Settings",url:route("billing_tax_settings"),active:"admin"===this.$page.props.user.role_id},{label:"Theme Settings",url:route("theme_settings"),active:"admin"===this.$page.props.user.role_id},{label:"Maintenance Settings",url:route("maintenance_settings"),active:"admin"===this.$page.props.user.role_id}]}]}},methods:{switchToTeam:function(t){this.$inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},changeMode:function(){this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},logout:function(){this.$inertia.post(route("logout"))}}};const w=(0,g.Z)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60"},[r("arc-banner")],1),t._v(" "),r("div",{staticClass:"min-h-screen"},[r("nav",{staticClass:"fixed top-0 ltr:left-0 rtl:right-0 z-20 h-full pb-10 overflow-hidden transition origin-left transform bg-gray-900 w-60 md:ltr:translate-x-0 md:rtl:-translate-x-0",class:{"ltr:-translate-x-full rtl:translate-x-full":!t.sideBar,"translate-x-0":t.sideBar},on:{click:function(e){t.sideBar=!1}}},[r("inertia-link",{staticClass:"flex items-center px-4 py-5",attrs:{href:t.route("home")}},[r("img",{staticClass:"h-8 w-auto",attrs:{src:t.$page.props.assetUrl+t.$page.props.general.logo_path,alt:t.$page.props.general.app_name}})]),t._v(" "),r("perfect-scrollbar",{ref:"scroll",staticClass:"h-full overflow-hidden",attrs:{options:t.scrollbarOptions}},[r("nav",{staticClass:"text-sm font-medium pb-16 text-gray-400",attrs:{"aria-label":"Main Navigation"}},[t._l(t.items,(function(e){return[e.active&&"dropdown"===e.item_type?r("sidebar-dropdown",{attrs:{title:e.label,items:e.items},scopedSlots:t._u([{key:"icon",fn:function(){return[r("span",{domProps:{innerHTML:t._s(e.icon)}})]},proxy:!0}],null,!0)}):t._e(),t._v(" "),!0===e.active&&"link"===e.item_type?r("sidebar-link",{attrs:{title:e.label,url:e.url},scopedSlots:t._u([{key:"icon",fn:function(){return[r("span",{domProps:{innerHTML:t._s(e.icon)}})]},proxy:!0}],null,!0)}):t._e(),t._v(" "),"divider"===e.item_type?r("div",{staticClass:"my-4 mx-4 uppercase font-semibold text-green-500 text-xs"},[t._v("\n                            "+t._s(e.label)+"\n                        ")]):t._e()]}))],2)])],1),t._v(" "),r("div",{staticClass:"ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60"},[r("header",{staticClass:"bg-white shadow flex items-center justify-between w-full md:mx-auto md:sticky md:z-30 md:top-0 px-4 h-14"},[r("button",{staticClass:"block btn btn-light-secondary md:hidden",on:{click:function(e){t.sideBar=!0}}},[r("span",{staticClass:"sr-only"},[t._v(t._s(t.__("Menu")))]),t._v(" "),r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])]),t._v(" "),r("div",{staticClass:"hidden -ml-3 form-icon md:block w-96"},[r("inertia-link",{staticClass:"text-sm font-semibold px-4 py-5 capitalize",attrs:{href:t.route("home")}},[t._v("\n                        "+t._s(t.__(t.$page.props.user.role_id))+" "+t._s(t.__("Dashboard"))+"\n                    ")])],1),t._v(" "),r("div",{staticClass:"flex items-center"},[r("a",{staticClass:"flex text-gray-500",attrs:{href:"#"}},[r("svg",{staticClass:"flex-shrink-0 w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}})])]),t._v(" "),r("div",{staticClass:"ltr:ml-4 rtl:mr-4 relative"},[r("arc-dropdown",{attrs:{align:"right",width:"48"},scopedSlots:t._u([{key:"trigger",fn:function(){return[t.$page.props.jetstream.managesProfilePhotos?r("button",{staticClass:"flex border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},[r("img",{staticClass:"h-8 w-8 rounded-full object-cover",attrs:{src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name}})]):r("span",{staticClass:"inline-flex rounded-md"},[r("button",{staticClass:"inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",attrs:{type:"button"}},[t._v("\n                                            "+t._s(t.$page.props.user.name)+"\n\n                                            "),r("svg",{staticClass:"ml-2 -mr-0.5 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]},proxy:!0},{key:"content",fn:function(){return[r("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                    "+t._s(t.__("Manage Account"))+"\n                                ")]),t._v(" "),r("arc-dropdown-link",{attrs:{href:t.route("profile.show")}},[t._v("\n                                    "+t._s(t.__("Profile"))+"\n                                ")]),t._v(" "),t.$page.props.jetstream.hasApiFeatures?r("arc-dropdown-link",{attrs:{href:t.route("api-tokens.index")}},[t._v("\n                                    "+t._s(t.__("Api Tokens"))+"\n                                ")]):t._e(),t._v(" "),r("div",{staticClass:"border-t border-gray-100"}),t._v(" "),r("form",{attrs:{method:"post",action:t.route("logout")}},[r("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.$page.props.csrf_token}}),t._v(" "),r("arc-dropdown-link",{attrs:{as:"button"}},[t._v("\n                                        "+t._s(t.__("Logout"))+"\n                                    ")])],1)]},proxy:!0}])})],1)])]),t._v(" "),r("section",[r("div",{staticClass:"container mx-auto pt-4 px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-between"},[r("div",[t._t("header")],2),t._v(" "),r("div",{staticClass:"mb-6 sm:mb-0 sm:mt-0"},[t._t("actions")],2)])])]),t._v(" "),r("main",[r("div",{staticClass:"container mx-auto px-4 sm:px-6 lg:px-8"},[t.$page.props.successMessage?r("Message",{attrs:{severity:"success",closable:!1}},[t._v(t._s(t.$page.props.successMessage))]):t._e(),t._v(" "),t.$page.props.errorMessage?r("Message",{attrs:{severity:"error",closable:!1}},[t._v(t._s(t.$page.props.errorMessage))]):t._e()],1),t._v(" "),t._t("default")],2),t._v(" "),r("portal-target",{attrs:{name:"modal",multiple:""}}),t._v(" "),r("ConfirmDialog"),t._v(" "),r("Toast",{attrs:{position:t.$page.props.rtl?"bottom-left":"bottom-right"}}),t._v(" "),r("Toast",{attrs:{position:t.$page.props.rtl?"top-left":"top-right",group:"lm"}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.sideBar,expression:"sideBar"}],staticClass:"fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden",on:{click:function(e){t.sideBar=!1}}})])])}),[],!1,null,null,null).exports},13414:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});var s=r(89258),i=r(6260);const a={components:{AdminLayout:s.Z,AdminTestStatCard:i.Z},props:{practiceSet:Object,stats:Object},data:function(){return{loading:!1}},metaInfo:function(){return{title:this.title}},computed:{title:function(){return this.practiceSet.title+" "+this.__("Overall Report")+" - "+this.$page.props.general.app_name}}};const o=(0,r(51900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("admin-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[r("h4",{staticClass:"page-heading"},[t._v(t._s(t.practiceSet.title)+" - "+t._s(t.__("Overall Report")))])]},proxy:!0},{key:"actions",fn:function(){return[r("inertia-link",{staticClass:"qt-btn qt-btn-success",attrs:{href:t.route("practice-sets.detailed_report",{practice_set:t.practiceSet.id})}},[t._v("\n            "+t._s(t.__("Detailed Report"))+"\n        ")])]},proxy:!0}])},[t._v(" "),t._v(" "),r("div",{staticClass:"py-8"},[r("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"bg-white shadow rounded-lg w-full overflow-hidden"},[r("div",{staticClass:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},[r("admin-test-stat-card",{attrs:{title:t.__("Total Attempts"),count:t.stats.total_attempts}}),t._v(" "),r("admin-test-stat-card",{attrs:{title:t.__("Unique Attempt"),count:t.stats.unique_test_takers}}),t._v(" "),r("admin-test-stat-card",{attrs:{title:t.__("Avg. Time Spent"),count:t.stats.avg_time.detailed_readable}}),t._v(" "),r("admin-test-stat-card",{attrs:{title:t.__("Avg. Score"),count:t.stats.avg_score}}),t._v(" "),r("admin-test-stat-card",{attrs:{title:t.__("High Score"),count:t.stats.high_score}}),t._v(" "),r("admin-test-stat-card",{attrs:{title:t.__("Low Score"),count:t.stats.low_score}}),t._v(" "),r("admin-test-stat-card",{attrs:{title:t.__("Avg. Accuracy"),count:t.stats.avg_accuracy}}),t._v(" "),r("admin-test-stat-card",{attrs:{title:t.__("Avg. Speed"),count:t.stats.avg_speed}})],1)])])])])}),[],!1,null,null,null).exports}}]);