(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-start",attrs:{padding:""}},[s("div",{staticClass:"full-width q-pa-none"},[s("q-pull-to-refresh",{ref:"pagePullToRefresh",on:{refresh:t.onPullRefresh}},[s("q-infinite-scroll",{ref:"pageInfiniteScroll",attrs:{disable:t.disableInfiniteScroll},on:{load:t.onPageLoad},scopedSlots:t._u([{key:"loading",fn:function(){return[s("div",{staticClass:"row justify-center q-my-md"},[s("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)]},proxy:!0}])},[t.headCard?s("div",{staticClass:"row q-mb-sm"},[s("div",{staticClass:"col-8"},[s("HomeCard",{key:t.headCard.hash_id,attrs:{item:t.headCard}})],1),s("div",{staticClass:"col"},[s("Album",{staticClass:"q-ml-xs",attrs:{images:t.headAlbumImgs}})],1)]):t._e(),s("div",{staticClass:"row q-col-gutter-sm"},t._l(t.colsCards,(function(e,a){return s("div",{key:a,staticClass:"col"},[s("div",{staticClass:"q-gutter-sm",attrs:{"cards-col":a}},[t._l(e,(function(t){return s("HomeCard",{key:t.hash_id,attrs:{item:t}})})),s("q-resize-observer",{on:{resize:function(e){return t.fixColHeight(a,e)}}})],2)])})),0),t.noDataToShow?s("div",{staticClass:"row q-my-sm"},[s("div",{staticClass:"col flex flex-center",staticStyle:{"min-height":"80vh"}},[s("div",{staticClass:"text-h6",staticStyle:{opacity:".4"}},[t._v("\n              "+t._s(t.$t("No data to show"))+"\n            ")])])]):t._e()])],1)],1),s("q-page-sticky",{staticStyle:{"z-index":"1000",opacity:".85"},attrs:{position:"bottom-right",offset:[18,18]}},[s("div",{staticClass:"column items-center q-gutter-y-md"},[s("q-fab",{attrs:{color:"red-3",icon:"menu",direction:"up",padding:"8px",persistent:""},model:{value:t.showFabActions,callback:function(e){t.showFabActions=e},expression:"showFabActions"}},[s("q-fab-action",{attrs:{color:"red-3",icon:"keyboard_arrow_up",padding:"8px"},on:{click:t.gotoPageTop}}),s("q-fab-action",{attrs:{color:"deep-orange-3",icon:"photo_library",padding:"8px"},on:{click:t.gotoAlbum}})],1)],1)])],1)},i=[],o=(s("e6cf"),s("ddb0"),s("f405")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"card-box overflow-hidden",on:{click:function(e){return t.viewDetail(t.storedItem.hash_id)}}},[t.isVipItem?s("q-badge",{staticClass:"absolute-top-right card-badge-radius",attrs:{color:"orange-6",floating:"",transparent:""}},[t._v("\n    VIP\n  ")]):t._e(),s("q-img",{attrs:{ratio:t.cardImgRatio,src:t.cardImgUrl},scopedSlots:t._u([{key:"loading",fn:function(){return[s("q-spinner-puff",{attrs:{thickness:1,size:"2rem",color:"primary"}})]},proxy:!0}])},[t.storedItem.$isPortrait?s("q-card-section",{staticClass:"card-info absolute-bottom",class:t.imgSectionClassObj,style:t.imgSectionStyleObj,attrs:{tag:"p"}},[s("div",{staticClass:"tags ellipsis-2-lines"},[t._v(t._s(t.storedItem.$joinedTags))]),s("div",{staticClass:"title ellipsis-2-lines"},[t._v(t._s(t.storedItem.title))]),s("div",{staticClass:"icons"},[s("q-chip",{staticClass:"transparent q-pl-none",attrs:{dense:"",color:"primary","text-color":"white",icon:"comment"}},[t._v(t._s(t.storedItem.comment_cnt+t.storedItem.barrage_cnt))]),s("q-chip",{staticClass:"transparent",attrs:{dense:"",color:"primary","text-color":"white",icon:"photo_library"}},[t._v(t._s(t.videoMeta.pic_num))]),s("q-chip",{staticClass:"transparent",attrs:{dense:"",color:"primary","text-color":"white",icon:"vpn_key"}},[t._v(t._s(t.storedItem.coin))])],1)]):t._e()],1),t.storedItem.$isPortrait?t._e():s("q-card-section",{staticClass:"card-info",class:t.imgSectionClassObj,style:t.imgSectionStyleObj,attrs:{tag:"p"}},[s("div",{staticClass:"tags ellipsis-2-lines"},[t._v(t._s(t.storedItem.$joinedTags))]),s("div",{staticClass:"title ellipsis-2-lines"},[t._v(t._s(t.storedItem.title))]),s("div",{staticClass:"icons"},[s("q-chip",{staticClass:"transparent q-pl-none",attrs:{dense:"",color:"primary","text-color":"white",icon:"comment"}},[t._v(t._s(t.storedItem.comment_cnt+t.storedItem.barrage_cnt))]),s("q-chip",{staticClass:"transparent",attrs:{dense:"",color:"primary","text-color":"white",icon:"photo_library"}},[t._v(t._s(t.videoMeta.pic_num))]),s("q-chip",{staticClass:"transparent",attrs:{dense:"",color:"primary","text-color":"white",icon:"vpn_key"}},[t._v(t._s(t.storedItem.coin))])],1)])],1)},l=[],n={name:"HomeCard",props:{item:{type:Object,required:!0}},data(){return{cardImgRatio:void 0,cardImgUrl:void 0}},computed:{username(){const t=this.$store.state.api.userAccount||{};return t.username||this.$t("Guest")},storedItem(){return this.$store.state.api.pageItemList[this.item.hash_id]||{}},isVipItem(){return!!this.storedItem.vip_only},videoMeta(){return this.storedItem.meta||{}},imgSectionClassObj(){return{"q-pa-xs":this.$q.platform.is.mobile,"q-pa-md":!this.$q.platform.is.mobile,portrait:this.storedItem.$isPortrait,landscape:!this.storedItem.$isPortrait}},imgSectionStyleObj(){const t=this.videoMeta.bgcolor;return t?{"background-color":t}:{}}},mounted(){this.cardImgRatio=this.storedItem.$imageRatio,this.cardImgUrl=this.storedItem.$coverFullUrl},methods:{viewDetail(t){this.$gtag.event("view_detail",{event_category:"click",event_label:this.username+":"+this.storedItem.title}),this.$router.push({name:"detail",params:{itemId:t}}).catch((t=>{console.log(t)}))}}},c=n,h=(s("b6e0"),s("2877")),d=s("f09f"),m=s("58a81"),p=s("068f"),u=s("a370"),g=s("b047"),f=s("06d5"),b=s("eebe"),_=s.n(b),v=Object(h["a"])(c,r,l,!1,null,"17e9ceb3",null),C=v.exports;_()(v,"components",{QCard:d["a"],QBadge:m["a"],QImg:p["a"],QCardSection:u["a"],QChip:g["a"],QSpinnerPuff:f["a"]});var y=s("0831");const{getScrollTarget:I,setScrollPosition:w}=y["a"];var $={name:"Index",components:{Album:o["a"],HomeCard:C},data(){return{disableInfiniteScroll:!1,showFabActions:!0,pageNum:0,pageItems:[],itemsCnt:0,noMorePages:!1,loadPageErr:!1,pageCols:this.$q.platform.is.mobile?2:3,colsHeights:[],colsCards:[],headAlbumImgs:[],headCard:null}},computed:{noDataToShow(){const t=this.itemsCnt<1&&(this.noMorePages||this.loadPageErr);return t},username(){const t=this.$store.state.api.userAccount||{};return t.username||this.$t("Guest")},previousFilterTag:{get(){return this.$store.state.home.previousFilterTag},set(t){this.$store.commit("home/updatePreviousFilterTag",t)}},currentFilterTag:{get(){return this.$store.state.home.currentFilterTag},set(t){this.$store.commit("home/updateCurrentFilterTag",t)}}},watch:{$route(t,e){e.params.tag&&(this.previousFilterTag=e.params.tag),t.params.tag&&(this.currentFilterTag=t.params.tag);const s="login"===e.name||this.previousFilterTag!==this.currentFilterTag;s&&this.refreshPage();const a="home"!==t.name&&"tag"!==t.name;this.disableInfiniteScroll=!!a}},mounted(){this.$gtag.event("enter_home",{event_category:"enter_page",event_label:this.username}),this.showDisclaimer()},methods:{async processLoadPage(t,e){this.pageNum=t;let s=null;const a={limit:20,page:this.pageNum};switch(this.$route.params.tag){case"filter_latest":a.filter_latest=1,s=await this.$apc.api("video_item/list",a);break;case"filter_hottest":a.filter_hottest=1,s=await this.$apc.api("video_item/list",a);break;case"filter_favorite":s=await this.$apc.authApi("video_favorite/list",a);break;default:this.$route.params.tag&&(a.filter_tag=this.$route.params.tag),s=await this.$apc.api("video_item/list",a);break}return this.colsHeights.length<=0&&(this.colsHeights=Array(this.pageCols>0?this.pageCols:1).fill(0)),this.pageItems=s.list.data,this.pageItems.forEach(((t,e)=>{if(this.itemsCnt++,this.$store.commit("api/pushPageItemList",{hashId:t.hash_id,item:t}),this.headCard){const e=this.colsHeights.indexOf(Math.min(...this.colsHeights));this.colsCards[e]||this.$set(this.colsCards,e,[]),this.colsCards[e].push(t),this.colsHeights[e]+=t.meta.height||0}else this.headCard=t,this.headAlbumImgs=t.meta.pic_full_urls})),this.noMorePages=!s.list.next_page_url,"function"===typeof e&&e(this.noMorePages),this.loadPageErr=!1,this.pageItems},fixColHeight(t,e){this.colsHeights[t]=e.height||0},resetData(){Object.assign(this.$data,this.$options.data.apply(this))},loadPage(t,e){this.noMorePages?"function"===typeof e&&e(!0):this.processLoadPage(t,e).catch((t=>{this.loadPageErr=!0;const s=JSON.stringify(t);console.log(`Process failed: ${s}`),"function"===typeof e&&e(!0)}))},refreshPage(t){this.resetData(),this.$refs.pageInfiniteScroll.stop(),this.processLoadPage(1,t).then((t=>{this.$refs.pageInfiniteScroll.setIndex(1),this.$refs.pageInfiniteScroll.resume()})).catch((e=>{this.loadPageErr=!0;const s=JSON.stringify(e);console.log(`Process failed: ${s}`),"function"===typeof t&&t(!0)}))},onPullRefresh(t){this.refreshPage(t)},onPageLoad(t,e){this.loadPage(t,e)},gotoPageTop(){this.showFabActions=!0,this.scrollToElement()},gotoPreview(){this.showFabActions=!0,this.$router.push({name:"preview"}).catch((t=>{console.log(t)}))},gotoAlbum(){this.showFabActions=!0,this.$router.push({name:"album"}).catch((t=>{console.log(t)}))},scrollToElement(t){const e=t||document.getElementById("q-app");if(!e)return;const s=I(e),a=e.offsetTop,i=300;w(s,a,i)},showDisclaimer(){this.$apc.disclaimerAccepted()}}},x=$,q=s("9989"),P=s("59d7"),S=s("ef35"),T=s("3980"),k=s("8380"),A=s("de5e"),F=s("c294"),O=s("72db"),j=Object(h["a"])(x,a,i,!1,null,null,null);e["default"]=j.exports;_()(j,"components",{QPage:q["a"],QPullToRefresh:P["a"],QInfiniteScroll:S["a"],QResizeObserver:T["a"],QSpinnerDots:k["a"],QPageSticky:A["a"],QFab:F["a"],QFabAction:O["a"]})},9905:function(t,e,s){},b6e0:function(t,e,s){"use strict";s("9905")},f405:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-scroll-area",{class:t.scrollClass,attrs:{horizontal:t.horizontal,"thumb-style":t.scrollBarThumbStyleObj}},[s("div",{class:t.contentClass},t._l(t.images,(function(e,a){return s("div",{key:a,class:t.imageContainerClass,attrs:{"data-fancybox":"album",href:e}},[s("img",{staticClass:"column",style:t.imageStyleObj,attrs:{src:t.toThumbImgSrc(e),alt:"thumbnail"}})])})),0)])},i=[],o={name:"Album",props:{horizontal:{type:Boolean,default:!1},images:{type:Array,default(){return[]}}},computed:{scrollBarThumbStyleObj(){const t=this.$q.platform.is.mobile;return this.horizontal?{opacity:t?"0.2":"0.7",height:t?"3px":"8px",borderRadius:t?"3px":"8px"}:{opacity:"0.2",width:t?"3px":"8px",borderRadius:t?"3px":"8px"}},scrollClass(){return this.horizontal?"full-width shadow-2 rounded-scrollarea":"full-height shadow-2 rounded-scrollarea"},contentClass(){return this.horizontal?"album full-height q-gutter-x-xs row no-wrap":"album full-width q-gutter-y-xs"},imageContainerClass(){return this.horizontal?"full-height":"full-width"},imageStyleObj(){return this.horizontal?{"min-width":"50px",width:"auto",height:"100%"}:{"min-height":"50px",width:"100%",height:"auto"}}},methods:{toThumbImgSrc(t){const e=this.$apc.utils.dirname(t),s=this.$apc.utils.basename(t);return e+"/thumbnails/"+s}}},r=o,l=s("2877"),n=s("4983"),c=s("eebe"),h=s.n(c),d=Object(l["a"])(r,a,i,!1,null,null,null);e["a"]=d.exports;h()(d,"components",{QScrollArea:n["a"]})}}]);