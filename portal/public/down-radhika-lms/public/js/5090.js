"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5090],{97618:(t,e,s)=>{s.d(e,{Z:()=>r});const r=(0,s(51900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50"}},[s("g",{attrs:{id:"Icon",transform:"translate(13 344)"}},[s("g",{attrs:{id:"circle",transform:"translate(-29 -361.14)"}},[s("circle",{attrs:{id:"bg_circle",cx:"25",cy:"25",r:"25",transform:"translate(16 17.14)",fill:"#25c16f"}}),t._v(" "),s("path",{attrs:{id:"white_ring",d:"M20,0A19.969,19.969,0,0,1,37.151,30.248c-.712,1.229-2.946,1.654-4.181,2.926-1.2,1.235-1.426,3.291-3.258,4.338A20.011,20.011,0,1,1,20,0Z",transform:"translate(21 22.14)",fill:"#fff"}}),t._v(" "),s("circle",{attrs:{id:"green_ring",cx:"15",cy:"15",r:"15",transform:"translate(26 27.14)",fill:"#25c16f"}})]),t._v(" "),s("g",{attrs:{id:"cursor",transform:"matrix(1, -0.017, 0.017, 1, 10.797, -319.593)"}},[s("path",{attrs:{id:"right",d:"M10.286,23.465a.687.687,0,0,1-.63-.413L.057.962a.687.687,0,0,1,.9-.9l22.09,9.6a.687.687,0,0,1-.073,1.288L16.249,13A4.885,4.885,0,0,0,13,16.249l-2.058,6.73a.687.687,0,0,1-.619.485Z",transform:"translate(0 0)",fill:"#fff"}}),t._v(" "),s("path",{attrs:{id:"left",d:"M27.244,9.657,5.154.058A.688.688,0,0,0,4.394.2h0L18.412,14.221A4.887,4.887,0,0,1,20.441,13l6.73-2.058a.687.687,0,0,0,.073-1.288Z",transform:"translate(-4.192 -0.001)",fill:"#fff"}})])])])}),[],!1,null,null,null).exports},60651:(t,e,s)=>{s.d(e,{Z:()=>a});const r={data:function(){return{show:!0}},computed:{style:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.bannerStyle)||"success"},message:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.banner)||""}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.show&&t.message?s("div",{class:{"bg-indigo-500":"success"==t.style,"bg-red-700":"danger"==t.style}},[s("div",{staticClass:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},[s("div",{staticClass:"flex items-center justify-between flex-wrap"},[s("div",{staticClass:"w-0 flex-1 flex items-center min-w-0"},[s("span",{staticClass:"flex p-2 rounded-md",class:{"bg-indigo-600":"success"==t.style,"bg-red-600":"danger"==t.style}},["success"==t.style?s("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),"danger"==t.style?s("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})]):t._e()]),t._v(" "),s("p",{staticClass:"ml-3 font-medium text-white truncate"},[t._v("\n                        "+t._s(t.message)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"flex-shrink-0 sm:ml-3"},[s("button",{staticClass:"-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150",class:{"hover:bg-indigo-600 focus:bg-indigo-600":"success"==t.style,"hover:bg-red-600 focus:bg-red-600":"danger"==t.style},attrs:{type:"button","aria-label":"Dismiss"},on:{click:function(e){e.preventDefault(),t.show=!1}}},[s("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])])]):t._e()])}),[],!1,null,null,null).exports},16446:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"rtl:origin-top-left rtl:left-0 ltr:origin-top-right ltr:right-0":"origin-top"}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),s("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 shadow rounded",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[s("div",{staticClass:"rounded-sm ring-1 ring-black ring-opacity-5",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports},93210:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:["href","as"]};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"===t.as?s("button",{staticClass:"block text-sm w-full px-4 py-2 leading-5 text-gray-700 ltr:text-left rtl:text-right hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._t("default")],2):s("inertia-link",{staticClass:"text-sm block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 ltr:text-left rtl:text-right focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},57850:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:["href","active"],computed:{classes:function(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null).exports},37760:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:["active","href","as"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"==t.as?s("button",{staticClass:"w-full text-left",class:t.classes},[t._t("default")],2):s("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},94260:(t,e,s)=>{s.d(e,{Z:()=>a});const r={computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.hasErrors?s("div",[s("ul",{staticClass:"mt-3 list-disc list-inside text-red-600 text-sm"},t._l(t.errors,(function(e,r){return s("li",{key:r},[t._v(t._s(e))])})),0)]):t._e()}),[],!1,null,null,null).exports},139:(t,e,s)=>{s.d(e,{Z:()=>w});var r=s(97618),a=s(60651),i=s(16446),o=s(93210),n=s(57850),l=s(37760),c=s(71003),d=s(50298),u=s(15366);const p={name:"SidebarDropdown",props:{title:String,items:Array},data:function(){return{open:!1}},methods:{isActive:function(t){return window.location.href===t},isOpen:function(){return this.urls.includes(window.location.href)}},computed:{urls:function(){var t=[];return this.items.forEach((function(e){return t.push(e.url)})),t}},created:function(){this.open=this.isOpen()}};var m=s(51900);const v=(0,m.Z)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.open},attrs:{role:"button"},on:{click:function(e){t.open=!t.open}}},[s("div",{staticClass:"flex items-center"},[t._t("icon"),t._v(" "),s("span",[t._v(t._s(t.__(t.title)))])],2),t._v(" "),s("svg",{staticClass:"flex-shrink-0 w-4 h-4 ml-2 transition transform",class:{"rotate-90":t.open},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"mb-4"},t._l(t.items,(function(e){return s("div",{key:e.url,staticClass:"block"},[e.active?s("inertia-link",{staticClass:"flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.isActive(e.url)},attrs:{href:e.url}},[t._v("\n                "+t._s(t.__(e.label))+"\n            ")]):t._e()],1)})),0)])}),[],!1,null,null,null).exports;const h={name:"SidebarLink",props:{title:String,url:String},computed:{active:function(){return window.location.href===this.url}}};const f=(0,m.Z)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("inertia-link",{staticClass:"flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",class:{"text-green-400":t.active},attrs:{href:t.url}},[t._t("icon"),t._v(" "),s("span",[t._v(t._s(t.__(t.title)))])],2)}),[],!1,null,null,null).exports;var g=s(44943),_=s(78465);const x={components:{ArcApplicationMark:r.Z,ArcBanner:a.Z,ArcDropdown:i.Z,ArcDropdownLink:o.Z,ArcNavLink:n.Z,ArcResponsiveNavLink:l.Z,ConfirmDialog:c.default,Message:u.default,Toast:d.default,SidebarDropdown:v,SidebarLink:f,PerfectScrollbar:g.PerfectScrollbar,InputSwitch:_.default},data:function(){return{sideBar:!1,darkMode:!1,scrollbarOptions:{suppressScrollX:!0},successMessage:String,errorMessage:String,items:[{label:"Home Dashboard",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',url:route("admin_dashboard"),active:"admin"===this.$page.props.user.role_id},{label:"Home Dashboard",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',url:route("instructor_dashboard"),active:"instructor"===this.$page.props.user.role_id},{item_type:"divider",label:"Engage"},{item_type:"divider",label:"Library"},{label:"Question Bank",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Questions",url:route("questions.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Import Questions",url:route("initiate_import_questions"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Comprehensions",url:route("comprehensions.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Question Types",url:route("question-types.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]},{label:"Lesson Bank",item_type:"link",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,url:route("lessons.index")},{item_type:"divider",label:"Configuration"},{label:"Manage Users",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',active:"admin"===this.$page.props.user.role_id,items:[{label:"Users",url:route("users.index"),active:"admin"===this.$page.props.user.role_id}]},{label:"Books Manager",item_type:"dropdown",icon:'<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id,items:[{label:"Series",url:route("sections.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Books",url:route("skills.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id},{label:"Lessons",url:route("topics.index"),active:"admin"===this.$page.props.user.role_id||"instructor"===this.$page.props.user.role_id}]}]}},methods:{switchToTeam:function(t){this.$inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},changeMode:function(){this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},logout:function(){this.$inertia.post(route("logout"))}}};const w=(0,m.Z)(x,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60"},[s("arc-banner")],1),t._v(" "),s("div",{staticClass:"min-h-screen"},[s("nav",{staticClass:"fixed top-0 ltr:left-0 rtl:right-0 z-20 h-full pb-10 overflow-hidden transition origin-left transform bg-gray-900 w-60 md:ltr:translate-x-0 md:rtl:-translate-x-0",class:{"ltr:-translate-x-full rtl:translate-x-full":!t.sideBar,"translate-x-0":t.sideBar},on:{click:function(e){t.sideBar=!1}}},[s("inertia-link",{staticClass:"flex items-center px-4 py-5",attrs:{href:t.route("home")}},[s("img",{staticClass:"h-8 w-auto",attrs:{src:t.$page.props.assetUrl+t.$page.props.general.logo_path,alt:t.$page.props.general.app_name}})]),t._v(" "),s("perfect-scrollbar",{ref:"scroll",staticClass:"h-full overflow-hidden",attrs:{options:t.scrollbarOptions}},[s("nav",{staticClass:"text-sm font-medium pb-16 text-gray-400",attrs:{"aria-label":"Main Navigation"}},[t._l(t.items,(function(e){return[e.active&&"dropdown"===e.item_type?s("sidebar-dropdown",{attrs:{title:e.label,items:e.items},scopedSlots:t._u([{key:"icon",fn:function(){return[s("span",{domProps:{innerHTML:t._s(e.icon)}})]},proxy:!0}],null,!0)}):t._e(),t._v(" "),!0===e.active&&"link"===e.item_type?s("sidebar-link",{attrs:{title:e.label,url:e.url},scopedSlots:t._u([{key:"icon",fn:function(){return[s("span",{domProps:{innerHTML:t._s(e.icon)}})]},proxy:!0}],null,!0)}):t._e(),t._v(" "),"divider"===e.item_type?s("div",{staticClass:"my-4 mx-4 uppercase font-semibold text-green-500 text-xs"},[t._v("\n                            "+t._s(e.label)+"\n                        ")]):t._e()]}))],2)])],1),t._v(" "),s("div",{staticClass:"ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60"},[s("header",{staticClass:"bg-white shadow flex items-center justify-between w-full md:mx-auto md:sticky md:z-30 md:top-0 px-4 h-14"},[s("button",{staticClass:"block btn btn-light-secondary md:hidden",on:{click:function(e){t.sideBar=!0}}},[s("span",{staticClass:"sr-only"},[t._v(t._s(t.__("Menu")))]),t._v(" "),s("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])]),t._v(" "),s("div",{staticClass:"hidden -ml-3 form-icon md:block w-96"},[s("inertia-link",{staticClass:"text-sm font-semibold px-4 py-5 capitalize",attrs:{href:t.route("home")}},[t._v("\n                        "+t._s(t.__(t.$page.props.user.role_id))+" "+t._s(t.__("Dashboard"))+"\n                    ")])],1),t._v(" "),s("div",{staticClass:"flex items-center"},[s("a",{staticClass:"flex text-gray-500",attrs:{href:"#"}},[s("svg",{staticClass:"flex-shrink-0 w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}})])]),t._v(" "),s("div",{staticClass:"ltr:ml-4 rtl:mr-4 relative"},[s("arc-dropdown",{attrs:{align:"right",width:"48"},scopedSlots:t._u([{key:"trigger",fn:function(){return[t.$page.props.jetstream.managesProfilePhotos?s("button",{staticClass:"flex border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},[s("img",{staticClass:"h-8 w-8 rounded-full object-cover",attrs:{src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name}})]):s("span",{staticClass:"inline-flex rounded-md"},[s("button",{staticClass:"inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",attrs:{type:"button"}},[t._v("\n                                            "+t._s(t.$page.props.user.name)+"\n\n                                            "),s("svg",{staticClass:"ml-2 -mr-0.5 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                    "+t._s(t.__("Manage Account"))+"\n                                ")]),t._v(" "),s("arc-dropdown-link",{attrs:{href:t.route("profile.show")}},[t._v("\n                                    "+t._s(t.__("Profile"))+"\n                                ")]),t._v(" "),t.$page.props.jetstream.hasApiFeatures?s("arc-dropdown-link",{attrs:{href:t.route("api-tokens.index")}},[t._v("\n                                    "+t._s(t.__("Api Tokens"))+"\n                                ")]):t._e(),t._v(" "),s("div",{staticClass:"border-t border-gray-100"}),t._v(" "),s("form",{attrs:{method:"post",action:t.route("logout")}},[s("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.$page.props.csrf_token}}),t._v(" "),s("arc-dropdown-link",{attrs:{as:"button"}},[t._v("\n                                        "+t._s(t.__("Logout"))+"\n                                    ")])],1)]},proxy:!0}])})],1)])]),t._v(" "),s("section",[s("div",{staticClass:"container mx-auto pt-4 px-4 sm:px-6 lg:px-8"},[s("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-between"},[s("div",[t._t("header")],2),t._v(" "),s("div",{staticClass:"mb-6 sm:mb-0 sm:mt-0"},[t._t("actions")],2)])])]),t._v(" "),s("main",[s("div",{staticClass:"container mx-auto px-4 sm:px-6 lg:px-8"},[t.$page.props.successMessage?s("Message",{attrs:{severity:"success",closable:!1}},[t._v(t._s(t.$page.props.successMessage))]):t._e(),t._v(" "),t.$page.props.errorMessage?s("Message",{attrs:{severity:"error",closable:!1}},[t._v(t._s(t.$page.props.errorMessage))]):t._e()],1),t._v(" "),t._t("default")],2),t._v(" "),s("portal-target",{attrs:{name:"modal",multiple:""}}),t._v(" "),s("ConfirmDialog"),t._v(" "),s("Toast",{attrs:{position:t.$page.props.rtl?"bottom-left":"bottom-right"}}),t._v(" "),s("Toast",{attrs:{position:t.$page.props.rtl?"top-left":"top-right",group:"lm"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sideBar,expression:"sideBar"}],staticClass:"fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden",on:{click:function(e){t.sideBar=!1}}})])])}),[],!1,null,null,null).exports},85090:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var r=s(139),a=s(94260),i=s(17531);const o={components:{AdminLayout:r.Z,ArcValidationErrors:a.Z,Tag:i.default},props:{sampleFileUrl:String,errors:Object,userRoles:Array},data:function(){return{debounce:null,file:null,formValidated:!1}},methods:{submit:function(){var t=this;if(this.formValidated=!0,null!==this.file){var e=new FormData;e.append("file",this.file),this.$inertia.post(route("import_users"),e,{onSuccess:function(){0===Object.keys(t.errors).length&&t.$emit("close",!0)}})}else this.$toast.add({severity:"error",summary:"Caution",detail:this.__("Please choose a file"),life:3e3})},handleFileUpload:function(){this.file=this.$refs.file.files[0]},handleCopyStatus:function(t){t&&this.$toast.add({severity:"success",summary:this.__("Copied"),detail:this.__("Copied Successfully!"),life:2e3})}},metaInfo:function(){return{title:this.title}},computed:{title:function(){return this.__("Import Users")+" - "+this.$page.props.general.app_name},hasErrors:function(){return Object.keys(this.errors).length>0}}};const n=(0,s(51900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("admin-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"page-heading"},[t._v(t._s(t.__("Import Users")))])]},proxy:!0}])},[t._v(" "),s("div",{staticClass:"py-12"},[s("div",{staticClass:"w-full mx-auto md:w-10/12 lg:w-8/12 xl:w-6/12 md:pb-0 md:px-6"},[t.hasErrors?s("div",{staticClass:"bg-red-200 shadow rounded-md md:flex justify-between items-center top-0 mt-12 mb-8 pb-4 px-4"},[s("arc-validation-errors")],1):t._e(),t._v(" "),s("div",{staticClass:"bg-white rounded shadow"},[s("div",{staticClass:"flex justify-end w-full p-2 border-b border-gray-200"},[s("a",{staticClass:"flex bg-white hover:bg-green-50 py-2 px-4 items-center rounded mb-2 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 cursor-pointer",attrs:{href:t.sampleFileUrl}},[s("svg",{attrs:{height:"27",viewBox:"0 0 48 54.2",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{id:"xlsx",transform:"translate(-24.36 5)"}},[s("path",{attrs:{d:"M76.323,19.387h-1.3v-6.28a1.041,1.041,0,0,0-.011-.119,1.043,1.043,0,0,0-.253-.688L64.307.363S64.3.359,64.3.356a1.046,1.046,0,0,0-.212-.178c-.023-.015-.046-.028-.069-.041a1.116,1.116,0,0,0-.21-.088c-.02-.005-.037-.013-.057-.018A1.056,1.056,0,0,0,63.507,0H37.825A2.128,2.128,0,0,0,35.7,2.126V19.387H34.4a3.038,3.038,0,0,0-3.038,3.038v15.8A3.039,3.039,0,0,0,34.4,41.26h1.3V52.075A2.127,2.127,0,0,0,37.825,54.2H72.9a2.128,2.128,0,0,0,2.125-2.125V41.26h1.3a3.038,3.038,0,0,0,3.038-3.038v-15.8A3.037,3.037,0,0,0,76.323,19.387ZM37.825,2.126h24.62V13a1.063,1.063,0,0,0,1.063,1.063H72.9v5.324H37.825Zm21.532,28.98c-2.088-.727-3.451-1.883-3.451-3.711,0-2.145,1.79-3.786,4.756-3.786a7.693,7.693,0,0,1,3.207.634l-.634,2.293a5.982,5.982,0,0,0-2.629-.6c-1.231,0-1.828.56-1.828,1.213,0,.8.709,1.156,2.331,1.772,2.219.821,3.263,1.977,3.263,3.749,0,2.108-1.623,3.9-5.073,3.9a8.217,8.217,0,0,1-3.562-.765l.578-2.35a7.261,7.261,0,0,0,3.152.784c1.307,0,2-.541,2-1.362C61.464,32.094,60.867,31.646,59.357,31.105ZM54.547,34v2.388H46.694V23.812h2.855V34ZM37.576,36.384H34.331l3.637-6.361-3.507-6.211h3.264l1.1,2.294c.373.765.653,1.379.952,2.089h.036c.3-.8.541-1.362.858-2.089l1.063-2.294h3.245l-3.544,6.135,3.731,6.436H41.883l-1.138-2.276c-.465-.875-.764-1.529-1.119-2.256h-.037c-.261.727-.578,1.381-.97,2.256ZM72.9,51.5H37.825V41.26H72.9V51.5Zm.019-15.116-1.138-2.276c-.466-.876-.764-1.529-1.119-2.256h-.036c-.262.728-.579,1.38-.971,2.256l-1.043,2.276H65.361L69,30.022l-3.506-6.211h3.264l1.1,2.294c.373.765.652,1.379.951,2.089h.037c.3-.8.54-1.362.857-2.089l1.063-2.294h3.246l-3.544,6.135,3.73,6.436H72.915Z","data-name":"main",fill:"#1d6f42",id:"main",transform:"translate(-7 -5)"}})])]),t._v(" "),s("span",{staticClass:"ltr:pl-2 rtl:pr-2 text-sm font-bold text-gray-600"},[t._v(t._s(t.__("Download Sample Excel")))])])]),t._v(" "),s("div",{staticClass:"p-6"},[s("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"flex flex-col w-full mb-6"},[s("input",{ref:"file",staticClass:"text-sm",attrs:{accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",id:"file",type:"file"},on:{change:function(e){return t.handleFileUpload()}}}),t._v(" "),s("div",{staticClass:"form-control-errors"},[t.errors.file?s("p",{staticClass:"pt-2 text-xs text-red-500",attrs:{role:"alert"}},[t._v("\n                                    "+t._s(t.errors.file)+"\n                                ")]):t._e()])]),t._v(" "),s("div",{staticClass:"flex justify-end w-full"},[s("button",{staticClass:"qt-btn qt-btn-success",attrs:{type:"submit"}},[t._v("\n                                "+t._s(t.__("Upload File"))+"\n                            ")])])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"w-full p-6"},[s("h4",{staticClass:"pb-6 text-sm font-semibold text-gray-800"},[t._v("\n                        "+t._s(t.__("Instructions"))+"\n                    ")]),t._v(" "),s("ul",{staticClass:"list-disc text-md list-inside"},[s("li",[t._v(t._s(t.__("Password must be 8 characters.")))]),t._v(" "),s("li",[t._v(t._s(t.__("Accepted values for Email Verified are "))+"\n                            "),s("Tag",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:"yes",expression:"'yes'",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.handleCopyStatus,expression:"handleCopyStatus",arg:"success"}],staticClass:"text-sm cursor-pointer w-28 p-mr-2",attrs:{value:"yes",icon:"pi pi-copy"}}),t._v(" "),s("Tag",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:"no",expression:"'no'",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.handleCopyStatus,expression:"handleCopyStatus",arg:"success"}],staticClass:"text-sm cursor-pointer w-28 p-mr-2",attrs:{value:"no",icon:"pi pi-copy"}})],1)])]),t._v(" "),s("div",{staticClass:"w-full p-6"},[s("h4",{staticClass:"pb-6 text-sm font-semibold text-gray-800"},[t._v("\n                        "+t._s(t.__("User Roles"))+"\n                    ")]),t._v(" "),s("table",{staticClass:"w-full table-auto"},[s("thead",[s("tr",[s("th",{staticClass:"border border-emerald-500 px-4 py-2text-emerald-600 text-sm"},[t._v("\n                                "+t._s(t.__("Name"))+"\n                            ")]),t._v(" "),s("th",{staticClass:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium text-sm text-center"},[t._v("\n                                "+t._s(t.__("Acceptable Code"))+"\n                            ")])])]),t._v(" "),s("tbody",t._l(t.userRoles,(function(e){return s("tr",[s("td",{staticClass:"border border-emerald-500 px-4 py-2 text-emerald-600 text-sm"},[t._v("\n                                "+t._s(e.name)+"\n                            ")]),t._v(" "),s("td",{staticClass:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium text-sm text-center"},[s("Tag",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.code,expression:"userRole.code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.handleCopyStatus,expression:"handleCopyStatus",arg:"success"}],staticClass:"text-sm cursor-pointer w-28 p-mr-2",attrs:{value:e.code,icon:"pi pi-copy"}})],1)])})),0)])])])])])])}),[],!1,null,null,null).exports}}]);