<<<<<<< HEAD
<<<<<<< HEAD
"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[3196],{34547:(t,e,r)=>{r.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},a=[],o=r(47389);const s={components:{BAvatar:o.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=s;var l=r(1001),c=(0,l.Z)(i,n,a,!1,null,"22d964ca",null);const u=c.exports},51748:(t,e,r)=>{r.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},a=[],o=r(67347);const s={components:{BLink:o.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},i=s;var l=r(1001),c=(0,l.Z)(i,n,a,!1,null,null,null);const u=c.exports},43196:(t,e,r)=>{r.r(e),r.d(e,{default:()=>Z});var n=function(){var t=this,e=t._self._c;return e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"fluxnode-table",attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn,"show-empty":"","empty-text":"No FluxNodes in DOS state"},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(show_details)",fn:function(r){return[e("a",{on:{click:r.toggleDetails}},[r.detailsShowing?t._e():e("v-icon",{attrs:{name:"chevron-down"}}),r.detailsShowing?e("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(r){return[e("b-card",{staticClass:"mx-2"},[r.item.collateral?e("list-entry",{attrs:{title:"Collateral",data:r.item.collateral}}):t._e()],1)]}}])})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),e("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.totalRows))])],1)],1)],1)},a=[],o=(r(70560),r(23215)),s=r(21843),i=r(26253),l=r(50725),c=r(61081),u=r(54240),d=r(41011),f=r(4060),p=r(22183),g=r(22418),m=r(15193),h=r(34547),b=r(51748),v=r(27616);const y=r(63005),x={components:{BCard:o._,BTable:s.h,BRow:i.T,BCol:l.l,BPagination:c.c,BFormGroup:u.x,BFormSelect:d.K,BInputGroup:f.w,BFormInput:p.e,BInputGroupAppend:g.B,BButton:m.T,ListEntry:b.Z,ToastificationContent:h.Z},data(){return{timeoptions:y,callResponse:{status:"",data:""},perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"show_details",label:""},{key:"payment_address",label:"Address",sortable:!0},{key:"added_height",label:"Added Height",sortable:!0},{key:"eligible_in",label:"Eligible In Blocks",sortable:!0}],totalRows:1,currentPage:1}},computed:{sortOptions(){return this.fields.filter((t=>t.sortable)).map((t=>({text:t.label,value:t.key})))}},mounted(){this.daemonGetDOSList()},methods:{async daemonGetDOSList(){const t=await v.Z.getDOSList();if("error"===t.data.status)this.$toast({component:h.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}});else{const e=this;t.data.data.forEach((t=>{e.items.push(t)})),this.totalRows=this.items.length,this.currentPage=1}},onFiltered(t){this.totalRows=t.length,this.currentPage=1}}},w=x;var k=r(1001),C=(0,k.Z)(w,n,a,!1,null,null,null);const Z=C.exports},63005:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});const n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},a={year:"numeric",month:"short",day:"numeric"},o={shortDate:n,date:a}},27616:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(80914);const a={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockCount(){return(0,n.Z)().get("/daemon/getBlockCount")},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}},84328:(t,e,r)=>{var n=r(65290),a=r(27578),o=r(6310),s=function(t){return function(e,r,s){var i,l=n(e),c=o(l),u=a(s,c);if(t&&r!==r){while(c>u)if(i=l[u++],i!==i)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},5649:(t,e,r)=>{var n=r(67697),a=r(92297),o=TypeError,s=Object.getOwnPropertyDescriptor,i=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=i?function(t,e){if(a(t)&&!s(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8758:(t,e,r)=>{var n=r(36812),a=r(19152),o=r(82474),s=r(72560);t.exports=function(t,e,r){for(var i=a(e),l=s.f,c=o.f,u=0;u<i.length;u++){var d=i[u];n(t,d)||r&&n(r,d)||l(t,d,c(e,d))}}},55565:t=>{var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},72739:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79989:(t,e,r)=>{var n=r(19037),a=r(82474).f,o=r(75773),s=r(11880),i=r(95014),l=r(8758),c=r(35266);t.exports=function(t,e){var r,u,d,f,p,g,m=t.target,h=t.global,b=t.stat;if(u=h?n:b?n[m]||i(m,{}):(n[m]||{}).prototype,u)for(d in e){if(p=e[d],t.dontCallGetSet?(g=a(u,d),f=g&&g.value):f=u[d],r=c(h?d:m+(b?".":"#")+d,t.forced),!r&&void 0!==f){if(typeof p==typeof f)continue;l(p,f)}(t.sham||f&&f.sham)&&o(p,"sham",!0),s(u,d,p,t)}}},94413:(t,e,r)=>{var n=r(68844),a=r(3689),o=r(6648),s=Object,i=n("".split);t.exports=a((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?i(t,""):s(t)}:s},92297:(t,e,r)=>{var n=r(6648);t.exports=Array.isArray||function(t){return"Array"===n(t)}},35266:(t,e,r)=>{var n=r(3689),a=r(69985),o=/#|\.prototype\./,s=function(t,e){var r=l[i(t)];return r===u||r!==c&&(a(e)?n(e):!!e)},i=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},l=s.data={},c=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},6310:(t,e,r)=>{var n=r(43126);t.exports=function(t){return n(t.length)}},58828:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},82474:(t,e,r)=>{var n=r(67697),a=r(22615),o=r(49556),s=r(75684),i=r(65290),l=r(18360),c=r(36812),u=r(68506),d=Object.getOwnPropertyDescriptor;e.f=n?d:function(t,e){if(t=i(t),e=l(e),u)try{return d(t,e)}catch(r){}if(c(t,e))return s(!a(o.f,t,e),t[e])}},72741:(t,e,r)=>{var n=r(54948),a=r(72739),o=a.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},7518:(t,e)=>{e.f=Object.getOwnPropertySymbols},54948:(t,e,r)=>{var n=r(68844),a=r(36812),o=r(65290),s=r(84328).indexOf,i=r(57248),l=n([].push);t.exports=function(t,e){var r,n=o(t),c=0,u=[];for(r in n)!a(i,r)&&a(n,r)&&l(u,r);while(e.length>c)a(n,r=e[c++])&&(~s(u,r)||l(u,r));return u}},49556:(t,e)=>{var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!r.call({1:2},1);e.f=a?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},19152:(t,e,r)=>{var n=r(76058),a=r(68844),o=r(72741),s=r(7518),i=r(85027),l=a([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(i(t)),r=s.f;return r?l(e,r(t)):e}},27578:(t,e,r)=>{var n=r(68700),a=Math.max,o=Math.min;t.exports=function(t,e){var r=n(t);return r<0?a(r+e,0):o(r,e)}},65290:(t,e,r)=>{var n=r(94413),a=r(74684);t.exports=function(t){return n(a(t))}},68700:(t,e,r)=>{var n=r(58828);t.exports=function(t){var e=+t;return e!==e||0===e?0:n(e)}},43126:(t,e,r)=>{var n=r(68700),a=Math.min;t.exports=function(t){return t>0?a(n(t),9007199254740991):0}},70560:(t,e,r)=>{var n=r(79989),a=r(90690),o=r(6310),s=r(5649),i=r(55565),l=r(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=c||!u();n({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=a(this),r=o(e),n=arguments.length;i(r+n);for(var l=0;l<n;l++)e[r]=arguments[l],r++;return s(e,r),r}})}}]);
=======
"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[3196],{34547:(t,e,r)=>{r.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},a=[],o=r(47389);const s={components:{BAvatar:o.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=s;var l=r(1001),c=(0,l.Z)(i,n,a,!1,null,"22d964ca",null);const u=c.exports},51748:(t,e,r)=>{r.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},a=[],o=r(67347);const s={components:{BLink:o.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},i=s;var l=r(1001),c=(0,l.Z)(i,n,a,!1,null,null,null);const u=c.exports},43196:(t,e,r)=>{r.r(e),r.d(e,{default:()=>_});var n=function(){var t=this,e=t._self._c;return e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"fluxnode-table",attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn,"show-empty":"","empty-text":"No FluxNodes in DOS state"},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(show_details)",fn:function(r){return[e("a",{on:{click:r.toggleDetails}},[r.detailsShowing?t._e():e("v-icon",{attrs:{name:"chevron-down"}}),r.detailsShowing?e("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(r){return[e("b-card",{staticClass:"mx-2"},[r.item.collateral?e("list-entry",{attrs:{title:"Collateral",data:r.item.collateral}}):t._e()],1)]}}])})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),e("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.totalRows))])],1)],1)],1)},a=[],o=(r(70560),r(23215)),s=r(21843),i=r(26253),l=r(50725),c=r(61081),u=r(54240),d=r(41011),f=r(4060),p=r(22183),g=r(22418),m=r(15193),h=r(34547),b=r(51748),v=r(27616);const y=r(63005),x={components:{BCard:o._,BTable:s.h,BRow:i.T,BCol:l.l,BPagination:c.c,BFormGroup:u.x,BFormSelect:d.K,BInputGroup:f.w,BFormInput:p.e,BInputGroupAppend:g.B,BButton:m.T,ListEntry:b.Z,ToastificationContent:h.Z},data(){return{timeoptions:y,callResponse:{status:"",data:""},perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"show_details",label:""},{key:"payment_address",label:"Address",sortable:!0},{key:"added_height",label:"Added Height",sortable:!0},{key:"eligible_in",label:"Eligible In Blocks",sortable:!0}],totalRows:1,currentPage:1}},computed:{sortOptions(){return this.fields.filter((t=>t.sortable)).map((t=>({text:t.label,value:t.key})))}},mounted(){this.daemonGetDOSList()},methods:{async daemonGetDOSList(){const t=await v.Z.getDOSList();if("error"===t.data.status)this.$toast({component:h.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}});else{const e=this;t.data.data.forEach((t=>{e.items.push(t)})),this.totalRows=this.items.length,this.currentPage=1}},onFiltered(t){this.totalRows=t.length,this.currentPage=1}}},w=x;var k=r(1001),C=(0,k.Z)(w,n,a,!1,null,null,null);const _=C.exports},63005:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});const n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},a={year:"numeric",month:"short",day:"numeric"},o={shortDate:n,date:a}},27616:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(80914);const a={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}},84328:(t,e,r)=>{var n=r(65290),a=r(27578),o=r(6310),s=function(t){return function(e,r,s){var i,l=n(e),c=o(l),u=a(s,c);if(t&&r!==r){while(c>u)if(i=l[u++],i!==i)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},5649:(t,e,r)=>{var n=r(67697),a=r(92297),o=TypeError,s=Object.getOwnPropertyDescriptor,i=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=i?function(t,e){if(a(t)&&!s(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8758:(t,e,r)=>{var n=r(36812),a=r(19152),o=r(82474),s=r(72560);t.exports=function(t,e,r){for(var i=a(e),l=s.f,c=o.f,u=0;u<i.length;u++){var d=i[u];n(t,d)||r&&n(r,d)||l(t,d,c(e,d))}}},55565:t=>{var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},72739:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79989:(t,e,r)=>{var n=r(19037),a=r(82474).f,o=r(75773),s=r(11880),i=r(95014),l=r(8758),c=r(35266);t.exports=function(t,e){var r,u,d,f,p,g,m=t.target,h=t.global,b=t.stat;if(u=h?n:b?n[m]||i(m,{}):n[m]&&n[m].prototype,u)for(d in e){if(p=e[d],t.dontCallGetSet?(g=a(u,d),f=g&&g.value):f=u[d],r=c(h?d:m+(b?".":"#")+d,t.forced),!r&&void 0!==f){if(typeof p==typeof f)continue;l(p,f)}(t.sham||f&&f.sham)&&o(p,"sham",!0),s(u,d,p,t)}}},94413:(t,e,r)=>{var n=r(68844),a=r(3689),o=r(6648),s=Object,i=n("".split);t.exports=a((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?i(t,""):s(t)}:s},92297:(t,e,r)=>{var n=r(6648);t.exports=Array.isArray||function(t){return"Array"===n(t)}},35266:(t,e,r)=>{var n=r(3689),a=r(69985),o=/#|\.prototype\./,s=function(t,e){var r=l[i(t)];return r===u||r!==c&&(a(e)?n(e):!!e)},i=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},l=s.data={},c=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},6310:(t,e,r)=>{var n=r(43126);t.exports=function(t){return n(t.length)}},58828:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},82474:(t,e,r)=>{var n=r(67697),a=r(22615),o=r(49556),s=r(75684),i=r(65290),l=r(18360),c=r(36812),u=r(68506),d=Object.getOwnPropertyDescriptor;e.f=n?d:function(t,e){if(t=i(t),e=l(e),u)try{return d(t,e)}catch(r){}if(c(t,e))return s(!a(o.f,t,e),t[e])}},72741:(t,e,r)=>{var n=r(54948),a=r(72739),o=a.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},7518:(t,e)=>{e.f=Object.getOwnPropertySymbols},54948:(t,e,r)=>{var n=r(68844),a=r(36812),o=r(65290),s=r(84328).indexOf,i=r(57248),l=n([].push);t.exports=function(t,e){var r,n=o(t),c=0,u=[];for(r in n)!a(i,r)&&a(n,r)&&l(u,r);while(e.length>c)a(n,r=e[c++])&&(~s(u,r)||l(u,r));return u}},49556:(t,e)=>{var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!r.call({1:2},1);e.f=a?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},19152:(t,e,r)=>{var n=r(76058),a=r(68844),o=r(72741),s=r(7518),i=r(85027),l=a([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(i(t)),r=s.f;return r?l(e,r(t)):e}},27578:(t,e,r)=>{var n=r(68700),a=Math.max,o=Math.min;t.exports=function(t,e){var r=n(t);return r<0?a(r+e,0):o(r,e)}},65290:(t,e,r)=>{var n=r(94413),a=r(74684);t.exports=function(t){return n(a(t))}},68700:(t,e,r)=>{var n=r(58828);t.exports=function(t){var e=+t;return e!==e||0===e?0:n(e)}},43126:(t,e,r)=>{var n=r(68700),a=Math.min;t.exports=function(t){var e=n(t);return e>0?a(e,9007199254740991):0}},70560:(t,e,r)=>{var n=r(79989),a=r(90690),o=r(6310),s=r(5649),i=r(55565),l=r(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=c||!u();n({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=a(this),r=o(e),n=arguments.length;i(r+n);for(var l=0;l<n;l++)e[r]=arguments[l],r++;return s(e,r),r}})}}]);
>>>>>>> 67c1c785 (Build UI)
=======
"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[3196],{34547:(t,e,r)=>{r.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},a=[],o=r(47389);const s={components:{BAvatar:o.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=s;var l=r(1001),c=(0,l.Z)(i,n,a,!1,null,"22d964ca",null);const u=c.exports},51748:(t,e,r)=>{r.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},a=[],o=r(67347);const s={components:{BLink:o.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},i=s;var l=r(1001),c=(0,l.Z)(i,n,a,!1,null,null,null);const u=c.exports},43196:(t,e,r)=>{r.r(e),r.d(e,{default:()=>_});var n=function(){var t=this,e=t._self._c;return e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"fluxnode-table",attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn,"show-empty":"","empty-text":"No FluxNodes in DOS state"},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(show_details)",fn:function(r){return[e("a",{on:{click:r.toggleDetails}},[r.detailsShowing?t._e():e("v-icon",{attrs:{name:"chevron-down"}}),r.detailsShowing?e("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(r){return[e("b-card",{staticClass:"mx-2"},[r.item.collateral?e("list-entry",{attrs:{title:"Collateral",data:r.item.collateral}}):t._e()],1)]}}])})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),e("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.totalRows))])],1)],1)],1)},a=[],o=(r(70560),r(23215)),s=r(43510),i=r(26253),l=r(50725),c=r(61081),u=r(56449),d=r(95026),f=r(4060),p=r(22183),g=r(22418),m=r(15193),h=r(34547),b=r(51748),v=r(27616);const y=r(63005),x={components:{BCard:o._,BTable:s.h,BRow:i.T,BCol:l.l,BPagination:c.c,BFormGroup:u.x,BFormSelect:d.K,BInputGroup:f.w,BFormInput:p.e,BInputGroupAppend:g.B,BButton:m.T,ListEntry:b.Z,ToastificationContent:h.Z},data(){return{timeoptions:y,callResponse:{status:"",data:""},perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"show_details",label:""},{key:"payment_address",label:"Address",sortable:!0},{key:"added_height",label:"Added Height",sortable:!0},{key:"eligible_in",label:"Eligible In Blocks",sortable:!0}],totalRows:1,currentPage:1}},computed:{sortOptions(){return this.fields.filter((t=>t.sortable)).map((t=>({text:t.label,value:t.key})))}},mounted(){this.daemonGetDOSList()},methods:{async daemonGetDOSList(){const t=await v.Z.getDOSList();if("error"===t.data.status)this.$toast({component:h.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}});else{const e=this;t.data.data.forEach((t=>{e.items.push(t)})),this.totalRows=this.items.length,this.currentPage=1}},onFiltered(t){this.totalRows=t.length,this.currentPage=1}}},w=x;var k=r(1001),C=(0,k.Z)(w,n,a,!1,null,null,null);const _=C.exports},63005:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});const n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},a={year:"numeric",month:"short",day:"numeric"},o={shortDate:n,date:a}},27616:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(80914);const a={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}},84328:(t,e,r)=>{var n=r(65290),a=r(27578),o=r(6310),s=function(t){return function(e,r,s){var i,l=n(e),c=o(l),u=a(s,c);if(t&&r!==r){while(c>u)if(i=l[u++],i!==i)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},5649:(t,e,r)=>{var n=r(67697),a=r(92297),o=TypeError,s=Object.getOwnPropertyDescriptor,i=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=i?function(t,e){if(a(t)&&!s(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8758:(t,e,r)=>{var n=r(36812),a=r(19152),o=r(82474),s=r(72560);t.exports=function(t,e,r){for(var i=a(e),l=s.f,c=o.f,u=0;u<i.length;u++){var d=i[u];n(t,d)||r&&n(r,d)||l(t,d,c(e,d))}}},55565:t=>{var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},72739:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79989:(t,e,r)=>{var n=r(19037),a=r(82474).f,o=r(75773),s=r(11880),i=r(95014),l=r(8758),c=r(35266);t.exports=function(t,e){var r,u,d,f,p,g,m=t.target,h=t.global,b=t.stat;if(u=h?n:b?n[m]||i(m,{}):n[m]&&n[m].prototype,u)for(d in e){if(p=e[d],t.dontCallGetSet?(g=a(u,d),f=g&&g.value):f=u[d],r=c(h?d:m+(b?".":"#")+d,t.forced),!r&&void 0!==f){if(typeof p==typeof f)continue;l(p,f)}(t.sham||f&&f.sham)&&o(p,"sham",!0),s(u,d,p,t)}}},94413:(t,e,r)=>{var n=r(68844),a=r(3689),o=r(6648),s=Object,i=n("".split);t.exports=a((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?i(t,""):s(t)}:s},92297:(t,e,r)=>{var n=r(6648);t.exports=Array.isArray||function(t){return"Array"===n(t)}},35266:(t,e,r)=>{var n=r(3689),a=r(69985),o=/#|\.prototype\./,s=function(t,e){var r=l[i(t)];return r===u||r!==c&&(a(e)?n(e):!!e)},i=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},l=s.data={},c=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},6310:(t,e,r)=>{var n=r(43126);t.exports=function(t){return n(t.length)}},58828:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},82474:(t,e,r)=>{var n=r(67697),a=r(22615),o=r(49556),s=r(75684),i=r(65290),l=r(18360),c=r(36812),u=r(68506),d=Object.getOwnPropertyDescriptor;e.f=n?d:function(t,e){if(t=i(t),e=l(e),u)try{return d(t,e)}catch(r){}if(c(t,e))return s(!a(o.f,t,e),t[e])}},72741:(t,e,r)=>{var n=r(54948),a=r(72739),o=a.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},7518:(t,e)=>{e.f=Object.getOwnPropertySymbols},54948:(t,e,r)=>{var n=r(68844),a=r(36812),o=r(65290),s=r(84328).indexOf,i=r(57248),l=n([].push);t.exports=function(t,e){var r,n=o(t),c=0,u=[];for(r in n)!a(i,r)&&a(n,r)&&l(u,r);while(e.length>c)a(n,r=e[c++])&&(~s(u,r)||l(u,r));return u}},49556:(t,e)=>{var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!r.call({1:2},1);e.f=a?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},19152:(t,e,r)=>{var n=r(76058),a=r(68844),o=r(72741),s=r(7518),i=r(85027),l=a([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(i(t)),r=s.f;return r?l(e,r(t)):e}},27578:(t,e,r)=>{var n=r(68700),a=Math.max,o=Math.min;t.exports=function(t,e){var r=n(t);return r<0?a(r+e,0):o(r,e)}},65290:(t,e,r)=>{var n=r(94413),a=r(74684);t.exports=function(t){return n(a(t))}},68700:(t,e,r)=>{var n=r(58828);t.exports=function(t){var e=+t;return e!==e||0===e?0:n(e)}},43126:(t,e,r)=>{var n=r(68700),a=Math.min;t.exports=function(t){var e=n(t);return e>0?a(e,9007199254740991):0}},70560:(t,e,r)=>{var n=r(79989),a=r(90690),o=r(6310),s=r(5649),i=r(55565),l=r(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=c||!u();n({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=a(this),r=o(e),n=arguments.length;i(r+n);for(var l=0;l<n;l++)e[r]=arguments[l],r++;return s(e,r),r}})}}]);
>>>>>>> ed93877f (Build UI)
