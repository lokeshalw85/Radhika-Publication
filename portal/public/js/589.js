"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[589],{58142:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:{name:{type:String,default:"Exit"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-10 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded border border-yellow-300 cursor-pointer"},[s("span",{staticClass:"hidden sm:block"},[t._v(t._s(t.name))]),t._v(" "),s("svg",{staticClass:"w-5 h-5 rtl:flip",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})])])}),[],!1,null,null,null).exports},50730:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:{name:{type:String,default:"Next"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-10 focus:outline-none flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-800 text-xs sm:text-sm rounded cursor-pointer hover:bg-gray-700"},[s("span",[t._v(t._s(t.name))]),t._v(" "),s("svg",{staticClass:"w-4 h-4 rtl:flip",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"}})])])}),[],!1,null,null,null).exports},807:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:{name:{type:String,default:"Previous"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-10 focus:outline-none flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-800 text-xs sm:text-sm rounded cursor-pointer hover:bg-gray-700"},[s("svg",{staticClass:"w-4 h-4 rtl:flip",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})]),t._v(" "),s("span",[t._v(t._s(t.name))])])}),[],!1,null,null,null).exports},94223:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:{name:{type:String,default:"Submit"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-10 flex items-center justify-center gap-2 px-4 py-2 bg-green-400 hover:bg-green-600 shadow-inner text-sm text-white rounded border border-green-300 cursor-pointer"},[s("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})]),t._v(" "),s("span",[t._v(t._s(t.name))])])}),[],!1,null,null,null).exports},60385:(t,e,s)=>{s.d(e,{Z:()=>o});const n={name:"ContentLocked",props:{title:{type:String,default:"Subscribe to Access"},message:{type:String,default:"You don't have an active plan to see this content. Please subscribe."},buttonText:{type:String,default:"See Pricing"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("svg",{staticClass:"mx-auto h-12 w-12 text-gray-400",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"}})]),t._v(" "),s("h3",{staticClass:"mt-2 text-lg font-medium text-gray-900"},[t._v(t._s(t.__(t.title)))]),t._v(" "),s("p",{staticClass:"mt-1 text-gray-500"},[t._v("\n        "+t._s(t.__(t.message))+"\n    ")]),t._v(" "),s("div",{staticClass:"mt-6"},[s("a",{staticClass:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current",attrs:{href:t.route("pricing")}},[t._v("\n            "+t._s(t.__(t.buttonText))+"\n        ")])])])}),[],!1,null,null,null).exports},26778:(t,e,s)=>{s.d(e,{Z:()=>o});const n={name:"PracticeSolutionCard",components:{VideoAttachment:s(60118).Z},props:{question:Object},created:function(){this.$nextTick((function(){window.renderMathInElement(this.$el)}))}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-data rounded bg-yellow-50 border border-yellow-200 p-6"},[s("h4",{staticClass:"font-semibold text-gray-600 mb-4 uppercase"},[t._v(t._s(t.__("Solution")))]),t._v(" "),t.question.solution_video?s("div",[s("video-attachment",{attrs:{reference:"player_"+t.question.code,options:t.question.solution_video,"show-message":!1}})],1):t._e(),t._v(" "),s("div",{domProps:{innerHTML:t._s(t.question.solution)}})])}),[],!1,null,null,null).exports},60118:(t,e,s)=>{s.d(e,{Z:()=>o});const n={name:"VideoAttachment",components:{VuePlyr:s(15859).Z},props:{reference:String,options:Object,showMessage:{type:Boolean,default:!0}},data:function(){return{plyrOptions:{controls:["play-large","play","progress","current-time","mute","volume","captions","settings","airplay","fullscreen"],speed:{selected:1,options:[.5,1,1.25]}}}},computed:{getVideoLink:function(){return"youtube"===this.options.video_type?"https://www.youtube.com/embed/"+this.options.link+"?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1":"vimeo"===this.options.video_type?"https://player.vimeo.com/video/"+this.options.link+"?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media":""}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"audio-options"},[t.showMessage?s("div",{staticClass:"font-mono px-2 py-1 inline-block text-gray-600 rounded text-sm mb-2"},[t._v("\n        Watch the video and answer the question\n    ")]):t._e(),t._v(" "),"mp4"===t.options.video_type?s("div",[s("vue-plyr",{ref:t.reference,attrs:{options:t.plyrOptions}},[s("video",{attrs:{src:t.options.link}},[s("source",{attrs:{src:t.options.link,type:"video/mp4"}})])])],1):t._e(),t._v(" "),"youtube"===t.options.video_type?s("div",[s("vue-plyr",{ref:t.reference,attrs:{options:t.plyrOptions}},[s("div",{staticClass:"plyr__video-embed"},[s("iframe",{attrs:{src:t.getVideoLink,allowfullscreen:"",allowtransparency:"",allow:"autoplay"}})])])],1):t._e(),t._v(" "),"vimeo"===t.options.video_type?s("div",[s("vue-plyr",{ref:t.reference},[s("div",{staticClass:"plyr__video-embed"},[s("iframe",{attrs:{src:t.getVideoLink}})])])],1):t._e()])}),[],!1,null,null,null).exports},78589:(t,e,s)=>{s.d(e,{Z:()=>o});const n={name:"RewardBadge",props:{points:{type:[Number,String],default:0},textColor:{type:String,default:"text-gray-400"},iconSize:{type:String,default:"w-7 h-7"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex group gap-2 items-center"},[s("svg",{staticClass:"transition duration-300 ease-in-out transform group-hover:scale-110",class:t.iconSize,attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300","enable-background":"new 0 0 300 300","xml:space":"preserve"}},[s("g",[s("ellipse",{attrs:{fill:"#FFC843",cx:"149.833",cy:"149.501",rx:"147.833",ry:"146.166"}}),s("ellipse",{attrs:{fill:"#D38700",cx:"150",cy:"150.168",rx:"113.667",ry:"113.833"}}),t._v(" "),s("polygon",{attrs:{fill:"#FFC843",points:"192.716,211.945 151.021,190.203 109.476,212.222 117.27,165.852 83.489,133.142 129.999,126.226\n                                        150.667,83.991 171.618,126.086 218.172,132.693 184.611,165.626"}})])]),t._v(" "),s("span",{staticClass:"font-semibold ",class:t.textColor},[t._v(t._s(t.points)+" XP")])])}),[],!1,null,null,null).exports},89808:(t,e,s)=>{s.d(e,{Z:()=>o});const n={name:"NavigationQuestionCardShimmer",components:{Skeleton:s(80247).default}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full overflow-hidden dark_question_card rounded cursor-pointer"},[s("div",{staticClass:"hover:bg-gray-600 text-gray-400 hover:text-gray-200 rounded p-4"},[s("div",{staticClass:"flex items-start gap-4 opacity-25"},[s("Skeleton",{staticClass:"bg-gray-700",attrs:{width:"1rem",height:"10px"}}),t._v(" "),s("div",{staticClass:"w-full"},[s("Skeleton",{staticClass:"w-full mb-2",attrs:{height:"10px"}}),t._v(" "),s("Skeleton",{staticClass:"w-full mb-2",attrs:{height:"10px"}}),t._v(" "),s("Skeleton",{staticClass:"w-full",attrs:{height:"10px"}})],1)],1)])])}),[],!1,null,null,null).exports},75004:(t,e,s)=>{s.d(e,{Z:()=>o});const n={name:"PracticeQuestionShimmer",components:{Skeleton:s(80247).default}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-6"},[s("Skeleton",{staticClass:"mb-2",attrs:{width:"10rem"}}),t._v(" "),s("Skeleton",{attrs:{height:"2rem"}})],1)}),[],!1,null,null,null).exports},60147:(t,e,s)=>{s.d(e,{Z:()=>o});const n={name:"PracticeLayout",components:{PerfectScrollbar:s(44943).PerfectScrollbar},data:function(){return{moved:!0,scrollbarOptions:{maxScrollbarLength:1,suppressScrollX:!0},online:!0}},methods:{detectOffline:function(t){this.online=t},sidebarHandler:function(){var t=this.$refs.mobileNav;this.moved?(t.style.transform="translateX(0px)",this.moved=!1):(t.style.transform=this.$page.props.rtl?"translateX(320px)":"translateX(-320px)",this.moved=!0)}},mounted:function(){this.$refs.mobileNav.style.transform=this.$page.props.rtl?"translateX(320px)":"translateX(-320px)"}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-screen max-h-screen overflow-hidden flex flex-no-wrap bg-white select-none"},[s("div",{staticClass:"w-96 overflow-hidden absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex sm:flex-col"},[s("div",{staticClass:"z-30 h-16 w-full mx-auto absolute top-0 left-0 bg-gray-700 flex items-center px-4"},[t._t("title")],2),t._v(" "),t.$slots.actions?s("div",{staticClass:"z-30 h-16 w-full mx-auto absolute top-16 left-0 bg-gray-800 flex justify-between items-center px-4"},[t._t("actions")],2):t._e(),t._v(" "),s("perfect-scrollbar",{ref:"scroll",staticClass:"h-screen max-h-screen px-4 pb-16",class:[t.$slots.actions?"pt-32":"pt-16"],attrs:{options:t.scrollbarOptions}},[t._t("questions")],2),t._v(" "),s("div",{staticClass:"w-96 w-full absolute left-0 bottom-0 px-4 border-t border-gray-700"},[t._t("footer")],2)],1),t._v(" "),s("div",{ref:"mobileNav",staticClass:"w-80 h-full z-40 fixed bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"},[t.moved?s("div",{staticClass:"h-10 w-10 text-white bg-gray-800 absolute ltr:right-0 rtl:left-0 mt-3 ltr:-mr-10 rtl:-ml-10 flex items-center shadow ltr:rounded-tr ltr:rounded-br rtl:rounded-tl rtl:rounded-bl justify-center cursor-pointer",attrs:{id:"openSideBar"},on:{click:function(e){return t.sidebarHandler(!0)}}},[s("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),s("path",{attrs:{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}})])]):t._e(),t._v(" "),t.moved?t._e():s("div",{staticClass:"h-10 w-10 text-white bg-gray-800 absolute ltr:right-0 rtl:left-0 mt-3 z-50 ltr:mr-4 rtl:ml-4 flex items-center shadow rounded justify-center cursor-pointer",attrs:{id:"closeSideBar"},on:{click:function(e){return t.sidebarHandler(!0)}}},[s("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]),t._v(" "),s("div",{staticClass:"z-30 h-16 w-full mx-auto absolute top-0 left-0 bg-gray-700 flex items-center px-4"},[t._t("title")],2),t._v(" "),t.$slots.actions?s("div",{staticClass:"z-30 h-16 w-full mx-auto absolute top-16 left-0 bg-gray-800 flex justify-between items-center px-4"},[t._t("actions")],2):t._e(),t._v(" "),s("perfect-scrollbar",{ref:"scroll",staticClass:"h-screen max-h-screen overflow-hidden px-4 pb-16",class:[t.$slots.actions?"pt-32":"pt-16"],attrs:{options:t.scrollbarOptions}},[t._t("questions")],2),t._v(" "),s("div",{staticClass:"w-full absolute bottom-0 px-8 border-t border-gray-700"},[s("ul",{staticClass:"w-full flex items-center justify-between bg-gray-800"},[t._t("footer")],2)])],1),t._v(" "),s("div",{staticClass:"relative h-full container mx-auto md:w-4/5 w-full"},[s("v-offline",{on:{"detected-condition":t.detectOffline}},[t.online?t._e():s("div",{staticClass:"flex items-center z-50 p-2 bg-red-700 text-sm rounded shadow-md absolute top-5 right-5 text-white"},[s("svg",{staticClass:"w-6 h-6 mr-2",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"}})]),t._v(" "),s("span",[t._v(t._s(t.__("You are offline. Responses will not save.")))])])]),t._v(" "),t._t("default")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.moved,expression:"!moved"}],staticClass:"fixed inset-0 z-30 w-screen h-screen bg-black bg-opacity-25 md:hidden",on:{click:function(e){return t.sidebarHandler(!1)}}})])}),[],!1,null,null,null).exports},60589:(t,e,s)=>{s.r(e),s.d(e,{default:()=>w});var n=s(60147),o=s(89808),r=s(75004),l=s(807),i=s(50730),a=s(94223),c=s(58142),u=s(26778),d=s(78589),p=s(44943),m=s(71003);const f={name:"LessonBodyCard",components:{ContentLocked:s(60385).Z},props:{lesson:Object,subscription:{type:Boolean,default:!1}},created:function(){this.$nextTick((function(){window.renderMathInElement(this.$el)}))}};var h=s(51900);const v=(0,h.Z)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card flex flex-col"},[t.lesson.paid&&!t.subscription?s("div",{staticClass:"card-body w-full bg-gray-50 flex flex-col justify-center items-center"},[s("content-locked",{staticClass:"py-12 sm:py-24"})],1):s("div",{staticClass:"card-body w-full flex flex-col justify-start items-start"},[s("h4",{staticClass:"text-lg font-semibold mb-4"},[t._v(t._s(t.lesson.title))]),t._v(" "),s("div",{staticClass:"max-w-full prose",domProps:{innerHTML:t._s(t.lesson.body)}})])])}),[],!1,null,null,null).exports;const g={name:"DarkLessonCard",props:{lesson:Object,sno:Number,active:Boolean},created:function(){this.$nextTick((function(){window.renderMathInElement(this.$el)}))}};const x=(0,h.Z)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full overflow-hidden dark_question_card rounded cursor-pointer mb-1"},[s("div",{staticClass:"hover:bg-gray-900 hover:text-gray-200 rounded p-4",class:[t.active?"bg-gray-900 text-gray-200":"text-gray-400"]},[s("div",{staticClass:"flex items-start gap-4"},[s("div",{staticClass:"w-8 h-8 rounded-sm bg-gray-700 text-sm flex justify-center items-center"},[t._v(t._s(t.sno))]),t._v(" "),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"leading-tight text-sm mb-1"},[t._v(t._s(t.lesson.title))]),t._v(" "),s("p",{staticClass:"inline-flex text-xs leading-5 font-semibold items-center"},[s("svg",{staticClass:"w-3 h-3 ltr:mr-1 rtl:ml-1",attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"}},[s("g",[s("rect",{attrs:{fill:"none",height:"24",width:"24"}})]),s("g",[s("g",[s("g",[s("path",{attrs:{d:"M15,1H9v2h6V1z M11,14h2V8h-2V14z M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42 C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9s4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7 s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z"}})])])])]),t._v(" "),s("span",[t._v(t._s(t.lesson.read_time)+" "+t._s(t.__("Min Read")))])])])])])])}),[],!1,null,null,null).exports,_={components:{PracticeLayout:n.Z,NavigationQuestionCardShimmer:o.Z,PracticeQuestionShimmer:r.Z,PrevButton:l.Z,NextButton:i.Z,SubmitButton:a.Z,ExitButton:c.Z,PracticeSolutionCard:u.Z,PerfectScrollbar:p.PerfectScrollbar,RewardsBadge:d.Z,ConfirmDialog:m.default,LessonBodyCard:v,DarkLessonCard:x},props:{category:Object,section:Object,skill:Object,currentPage:Number,lessonIndex:Number,subscription:{type:Boolean,default:!1}},data:function(){return{lessons:[],pagination:null,read:0,loading:!0,submitting:!1,current_lesson:this.lessonIndex,scrollbarOptions:{suppressScrollX:!0}}},methods:{exitLessons:function(){window.history.back()},prevLesson:function(){0!==this.current_lesson?this.current_lesson--:this.prevPage()},nextLesson:function(){this.current_lesson<this.lessons.length-1?this.current_lesson++:this.current_lesson<this.lesson.total_lessons-1&&this.nextPage()},jumpToLesson:function(t){this.current_lesson=t},prevPage:function(){1!==this.pagination.current_page&&(this.current_lesson=0,this.fetchLessons(this.pagination.current_page-1))},nextPage:function(){this.pagination.current_page<this.pagination.total_pages&&(this.current_lesson=0,this.fetchLessons(this.pagination.current_page+1))},fetchLessons:function(t){var e=this;e.loading=!0,axios.get(route("fetch_practice_lessons",{category:this.category.slug,section:this.section.slug,skill:this.skill.slug,page:t,withBody:!0})).then((function(t){var s=t.data;e.lessons=s.lessons,e.pagination=s.pagination})).catch((function(t){e.loading=!1})).then((function(){e.loading=!1}))},getLessonNo:function(t){return t+1+this.pagination.per_page*(this.pagination.current_page-1)}},metaInfo:function(){return{title:this.title}},computed:{title:function(){return this.skill.name+" "+this.__("Lessons")+" - "+this.$page.props.general.app_name},appUrl:function(){return this.$page.props.appUrl},lessonTitle:function(){return this.lessons.length>0?this.__("Lesson")+" "+this.getLessonNo(this.current_lesson)+": "+this.lessons[this.current_lesson].title:""}},mounted:function(){document.addEventListener("contextmenu",(function(t){return t.preventDefault()})),this.fetchLessons(this.currentPage)}};const w=(0,h.Z)(_,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("practice-layout",{scopedSlots:t._u([{key:"title",fn:function(){return[s("h4",{staticClass:"font-semibold text-white"},[t._v(t._s(t.skill.name)+" "+t._s(t.__("Lessons"))+" "),s("br"),s("span",{staticClass:"text-xs font-normal"},[t._v(t._s(t.category.name)+" "+t._s(t.section.name))])])]},proxy:!0},{key:"questions",fn:function(){return[t.loading?s("ul",[s("li",[s("NavigationQuestionCardShimmer")],1),t._v(" "),s("li",[s("NavigationQuestionCardShimmer")],1),t._v(" "),s("li",[s("NavigationQuestionCardShimmer")],1),t._v(" "),s("li",[s("NavigationQuestionCardShimmer")],1)]):s("ul",{staticClass:"my-4"},t._l(t.lessons,(function(e,n){return s("li",{key:e.code,on:{click:function(e){return t.jumpToLesson(n)}}},[s("dark-lesson-card",{attrs:{lesson:e,sno:t.getLessonNo(n),active:t.current_lesson===n}})],1)})),0)]},proxy:!0},{key:"footer",fn:function(){return[t.loading?t._e():s("ul",{staticClass:"w-full h-16 flex items-center justify-between bg-gray-800"},[s("li",{staticClass:"text-gray-400 hover:text-white cursor-pointer",on:{click:t.prevPage}},[s("svg",{staticClass:"w-8 h-8",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}})])]),t._v(" "),s("li",[s("span",{staticClass:" text-white"},[t._v(t._s(t.__("Page"))+" "+t._s(t.pagination.current_page)+"/"+t._s(t.pagination.total_pages))])]),t._v(" "),s("li",{staticClass:"text-gray-400 hover:text-white cursor-pointer",on:{click:t.nextPage}},[s("svg",{staticClass:"w-8 h-8",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])])])]},proxy:!0}])},[t._v(" "),t._v(" "),t._v(" "),s("div",{staticClass:"w-full border-b border-gray-200 h-16 fixed sm:absolute z-30 top-0 right-0 mx-auto bg-white"},[s("div",{staticClass:"w-full sm:max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8"},[t.loading?t._e():s("div",{staticClass:"h-full flex flex-col justify-center items-center"},[s("div",{staticClass:"w-full sm:w-2/3 flex ltr:flex-row rtl:flex-row-reverse items-center ltr:justify-end rtl:justify-start gap-4 sm:gap-0 sm:ltr:justify-between sm:rtl:justify-between"},[s("h4",{staticClass:"page-heading ml-8 sm:ml-0"},[t._v(t._s(t.lessonTitle))]),t._v(" "),s("button",{staticClass:"focus:outline-none",on:{click:t.exitLessons}},[s("exit-button",{attrs:{name:t.__("Exit")}})],1)])])])]),t._v(" "),s("perfect-scrollbar",{ref:"lessonScroll",staticClass:"bg-gray-100 h-screen max-h-screen pt-16 pb-16",attrs:{options:t.scrollbarOptions}},[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[s("div",{staticClass:"flex flex-col justify-center items-center"},[t.loading?s("div",{staticClass:"w-full py-4 sm:w-2/3"},[s("div",{staticClass:"card card-body"},[s("PracticeQuestionShimmer",{staticClass:"w-full"})],1)]):s("div",{staticClass:"w-full py-4 sm:w-2/3"},t._l(t.lessons,(function(e,n){return s("div",{key:e.code},[s("lesson-body-card",{directives:[{name:"show",rawName:"v-show",value:t.current_lesson===n,expression:"current_lesson === index"}],attrs:{lesson:e,subscription:t.subscription}})],1)})),0)])])]),t._v(" "),s("div",{staticClass:"w-full border-t border-gray-200 h-16 fixed sm:absolute z-30 bottom-0 right-0 mx-auto bg-white"},[s("div",{staticClass:"w-full sm:max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8"},[t.loading?t._e():s("div",{staticClass:"h-full flex flex-col justify-center items-center"},[s("div",{staticClass:"w-full sm:w-2/3 flex items-center justify-between"},[s("button",{staticClass:"focus:outline-none",on:{click:t.prevLesson}},[s("prev-button",{attrs:{name:t.__("Previous")}})],1),t._v(" "),s("button",{staticClass:"focus:outline-none",on:{click:t.nextLesson}},[s("next-button",{attrs:{name:t.__("Next")}})],1)])])])]),t._v(" "),s("ConfirmDialog")],1)}),[],!1,null,null,null).exports}}]);