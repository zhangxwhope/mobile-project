webpackJsonp([3],{"7tA/":function(t,e){},Fs5J:function(t,e){},GC8E:function(t,e){},HDKb:function(t,e){},KEsT:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},r,!1,function(t){i("7tA/")},null,null).exports,a=i("//Fk"),o=i.n(a),u=i("/ocq"),l=i("mvHQ"),c=i.n(l),d=function(t){var e=window?window.localStorage.getItem(t):"";try{e=JSON.parse(e)}catch(t){console.error(t)}return e},h=function(t,e){try{e=c()(e)}catch(t){console.error(t)}window&&window.localStorage.setItem(t,e)};n.a.use(u.a);var f=new u.a({mode:"history",routes:[{path:"/",name:"Home",component:function(t){return i.e(0).then(function(){return t(i("FP3a"))}.bind(null,i)).catch(i.oe)}},{path:"/hello",name:"Hello",component:function(t){return i.e(1).then(function(){return t(i("gORT"))}.bind(null,i)).catch(i.oe)}}]});f.beforeEach(function(t,e,i){var n=d("userInfo");if(!n||!n.id)return o.a.reject("用户信息不存在");i()});var p=f,m=i("R4Sj"),v=i("Xxa5"),g=i.n(v),b=i("exGp"),w=i.n(b),x=i("aozt"),_=i.n(x).a.create({baseUrl:"/",timeout:15e3,headers:{}});_.interceptors.request.use(function(t){return"post"===t.method&&(t.headers["Content-Type"]="application/json"),t},function(t){return o.a.reject(t)}),_.interceptors.response.use(function(t){return 0===t.data.ret?t.data:o.a.reject("服务器错误")},function(t){return o.a.reject(t)});var y=function(){return _.get("/user/info")},S={namespaced:!0,state:{user:{}},getters:{},actions:{userGet:function(t){var e=this;return w()(g.a.mark(function i(){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return n=e.sent,t.commit("userUpdate",n),h("userInfo",n.data),e.abrupt("return",n);case 6:case"end":return e.stop()}},i,e)}))()}},mutations:{userUpdate:function(t,e){t.user=e.data}}},C=function(){return _.get("/home/swiper")},k=function(){return _.get("/home/nav")},$=function(){return _.get("/home/products")},B={namespaced:!0,state:{list:[],nav:[],products:[]},getters:{},actions:{swiperGet:function(t){var e=this;return w()(g.a.mark(function i(){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return n=e.sent,t.commit("swiperUpdate",n),e.abrupt("return",n);case 5:case"end":return e.stop()}},i,e)}))()},navGet:function(t){var e=this;return w()(g.a.mark(function i(){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return n=e.sent,t.commit("navUpdate",n),e.abrupt("return",n);case 5:case"end":return e.stop()}},i,e)}))()},productsGet:function(t){var e=this;return w()(g.a.mark(function i(){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:return n=e.sent,t.commit("productsUpdate",n),e.abrupt("return",n);case 5:case"end":return e.stop()}},i,e)}))()}},mutations:{swiperUpdate:function(t,e){t.list=e.data},navUpdate:function(t,e){t.nav=e.data},productsUpdate:function(t,e){t.products=e.data}}},F=function(){return _.get("/tab")},N={namespaced:!0,state:{tab:[]},getters:{},actions:{userGet:function(t){var e=this;return w()(g.a.mark(function i(){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return n=e.sent,t.commit("tabUpdate",n),e.abrupt("return",n);case 5:case"end":return e.stop()}},i,e)}))()}},mutations:{tabUpdate:function(t,e){t.tab=e.data}}};n.a.use(m.a);var T=new m.a.Store({modules:{user:S,home:B,tab:N},strict:!1}),I=(i("muQq"),{render:function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"vux-divider"},[this._t("default")],2)},staticRenderFns:[]});var V=i("VU/8")({name:"divider"},I,!1,function(t){i("qZk5")},null,null).exports,L=(Number,Number,Boolean,Boolean,{name:"grid",methods:{countColumn:function(){this.childrenSize=this.$children.length,this.$children.forEach(function(t,e){return t.index=e})}},props:{rows:{type:Number,validator:function(){return!0}},cols:{type:Number},showLrBorders:{type:Boolean,default:!0},showVerticalDividers:{type:Boolean,default:!0}},computed:{column:function(){return this.cols||this.childrenSize}},data:function(){return{childrenSize:3}}}),R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-grids",class:{"vux-grid-no-lr-borders":!this.showLrBorders}},[this._t("default")],2)},staticRenderFns:[]};var W=i("VU/8")(L,R,!1,function(t){i("HDKb")},null,null).exports,X=i("7+S+"),j={name:"grid-item",props:["icon","label","link"],created:function(){this.$parent.countColumn()},mounted:function(){this.$slots.icon&&(this.hasIconSlot=!0),this.$slots.label&&(this.hasLabelSlot=!0)},destroyed:function(){this.$parent.countColumn()},computed:{isLast:function(){return!((this.index+1)%this.$parent.column)},style:function(){var t=this.$parent.column;if(t&&3!==t){var e={};return e.width=100/t+"%",e}}},methods:{onClick:function(){this.$emit("on-item-click"),Object(X.a)(this.link,this.$router)}},data:function(){return{index:0,hasIconSlot:!1,hasLabelSlot:!1}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"weui-grid",class:{"vux-grid-item-no-border":t.isLast&&!t.$parent.showLrBorders||!t.isLast&&!t.$parent.showVerticalDividers},style:t.style,attrs:{href:"javascript:;"},on:{click:t.onClick}},[t.hasIconSlot||t.icon?i("div",{staticClass:"weui-grid__icon"},[t._t("icon",[i("img",{attrs:{src:t.icon,alt:""}})])],2):t._e(),t._v(" "),t.hasLabelSlot||t.label?i("p",{staticClass:"weui-grid__label"},[t._t("label",[i("span",{domProps:{innerHTML:t._s(t.label)}})])],2):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var U=i("VU/8")(j,E,!1,function(t){i("iS7e")},null,null).exports,q=i("fqpJ"),D=(q.a,Boolean,String,String,String,Array,Boolean,String,String,Boolean,{name:"search",mixins:[q.a],props:{required:{type:Boolean,default:!1},placeholder:String,cancelText:String,value:{type:String,default:""},results:{type:Array,default:function(){return[]}},autoFixed:{type:Boolean,default:!0},top:{type:String,default:"0px"},position:{type:String,default:"fixed"},autoScrollToTop:Boolean},created:function(){this.value&&(this.currentValue=this.value)},computed:{fixPosition:function(){return this.isFixed?"absolute"===this.position?"absolute":"fixed":"static"}},methods:{emitEvent:function(){var t=this;this.$nextTick(function(){t.$emit("input",t.currentValue),t.$emit("on-change",t.currentValue)})},onComposition:function(t,e){"start"===e&&(this.onInput=!0),"end"===e&&(this.onInput=!1,this.emitEvent()),"input"===e&&(this.onInput||this.emitEvent())},clear:function(){this.currentValue="",this.emitEvent(),this.isFocus=!0,this.setFocus(),this.autoFixed&&!this.isFixed&&(this.isFixed=!0),this.$emit("on-clear")},cancel:function(){this.isCancel=!0,this.currentValue="",this.emitEvent(),this.isFixed=!1,this.$emit("on-cancel")},handleResultClick:function(t){this.$emit("result-click",t),this.$emit("on-result-click",t),this.isCancel=!0,this.isFixed=!1},touch:function(){this.isCancel=!1,this.autoFixed&&(this.isFixed=!0),this.$emit("on-touch")},setFocus:function(){this.$refs.input.focus()},setBlur:function(){this.$refs.input.blur()},onFocus:function(){this.isFocus=!0,this.$emit("on-focus"),this.touch()},onBlur:function(){this.isFocus=!1,this.$emit("on-blur")}},data:function(){return{onInput:!1,currentValue:"",isCancel:!0,isFocus:!1,isFixed:!1}},watch:{isFixed:function(t){!0===t&&(this.setFocus(),this.isFocus=!0,this.autoScrollToTop&&setTimeout(function(){window.scrollTo(0,0)},150))},value:function(t){this.currentValue=t}}}),O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-search-box",class:{"vux-search-fixed":t.isFixed},style:{top:t.isFixed?t.top:"",position:t.fixPosition}},[i("div",{staticClass:"weui-search-bar",class:{"weui-search-bar_focusing":!t.isCancel||t.currentValue}},[t._t("left"),t._v(" "),i("form",{staticClass:"weui-search-bar__form",attrs:{action:"."},on:{submit:function(e){return e.preventDefault(),t.$emit("on-submit",t.value)}}},[i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFixed&&t.autoFixed,expression:"!isFixed && autoFixed"}],staticClass:"vux-search-mask",attrs:{for:"search_input_"+t.uuid},on:{click:t.touch}}),t._v(" "),i("div",{staticClass:"weui-search-bar__box"},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-search-bar__input",attrs:{type:"search",autocomplete:"off",id:"search_input_"+t.uuid,placeholder:t.placeholder,required:t.required},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,compositionstart:function(e){return t.onComposition(e,"start")},compositionend:function(e){return t.onComposition(e,"end")},input:[function(e){e.target.composing||(t.currentValue=e.target.value)},function(e){return t.onComposition(e,"input")}]}}),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-icon-clear",attrs:{href:"javascript:"},on:{click:t.clear}})]),t._v(" "),i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFocus&&!t.value,expression:"!isFocus && !value"}],staticClass:"weui-search-bar__label",attrs:{for:"search_input_"+t.uuid}},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("span",[t._v(t._s(t.placeholder||"搜索"))])])]),t._v(" "),i("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:"},on:{click:t.cancel}},[t._v(t._s(t.cancelText||"取消")+"\n    ")]),t._v(" "),t._t("right")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFixed,expression:"isFixed"}],staticClass:"weui-cells vux-search_show"},[t._t("default"),t._v(" "),t._l(t.results,function(e){return i("div",{staticClass:"weui-cell weui-cell_access",on:{click:function(i){return t.handleResultClick(e)}}},[i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[t._v(t._s(e.title))])])])})],2)])},staticRenderFns:[]};var A=i("VU/8")(D,O,!1,function(t){i("WLDt")},null,null).exports,P=i("gGtE"),z=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(X.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(c()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new P.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,e){c()(t)!==c()(e)&&this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}),0)])},staticRenderFns:[]};var G=i("VU/8")(z,H,!1,function(t){i("Fs5J")},null,null).exports,M=i("mdno"),J=(Number,String,String,String,String,String,{name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){var t={"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction};return t}}}),Z={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===this.orient,"vux-flex-row":"horizontal"===this.orient},style:this.styles},[this._t("default")],2)},staticRenderFns:[]};var K=i("VU/8")(J,Z,!1,function(t){i("eJRX")},null,null).exports,Q=(Number,String,Number,String,["-moz-box-","-webkit-box-",""]),Y={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var i=0;i<Q.length;i++)t[Q[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}},tt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox-item",style:this.style},[this._t("default")],2)},staticRenderFns:[]},et=i("VU/8")(Y,tt,!1,null,null,null).exports,it=i("DV+v"),nt=(it.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,String,{name:"tab",mixins:[it.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4},barPosition:{type:String,default:"bottom",validator:function(t){return-1!==["bottom","top"].indexOf(t)}}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0;window.requestAnimationFrame(function n(){var r=t.$refs.nav;r.scrollLeft+=(e.offsetLeft-(r.offsetWidth-e.offsetWidth)/2-r.scrollLeft)/15,++i<15&&window.requestAnimationFrame(n)})}}}}),rt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-wrap",class:"top"===t.barPosition?"vux-tab-bar-top":""},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},staticRenderFns:[]};var st=i("VU/8")(nt,rt,!1,function(t){i("GC8E")},null,null).exports,at=(it.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[it.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),ot={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]},ut=i("VU/8")(at,ot,!1,null,null,null).exports;n.a.component("divider",V),n.a.component("grid",W),n.a.component("grid-item",U),n.a.component("search",A),n.a.component("swiper",G),n.a.component("flexbox",K),n.a.component("flexbox-item",et),n.a.component("tab",st),n.a.component("tab-item",ut),n.a.use(M.a),i("txPn"),n.a.config.productionTip=!1,new n.a({el:"#app",router:p,store:T,components:{App:s},template:"<App/>"})},WLDt:function(t,e){},eJRX:function(t,e){},iS7e:function(t,e){},mqrw:function(t,e,i){"use strict";var n=i("uc2b"),r=(n.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[n.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var a=i("VU/8")(r,s,!1,function(t){i("KEsT")},null,null).exports,o=(Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")},"on-show":function(e){return t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var l=i("VU/8")(o,u,!1,function(t){i("q9qN")},null,null);e.a=l.exports},muQq:function(t,e){},q9qN:function(t,e){},qZk5:function(t,e){},txPn:function(t,e,i){var n=i("cLQA");n.mock("/home/swiper",function(t,e){return{ret:0,flag:!0,data:[{img:"https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg"},{img:"https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg"},{img:"//gw.alicdn.com/imgextra/i3/36/O1CN01aOwDgG1C8Wlisf0vl_!!36-0-lubanu.jpg"}]}}),n.mock("/user/info",function(t,e){return{ret:0,flag:!0,data:{id:1,name:"zzz"}}}),n.mock("/home/nav",function(t,e){return{ret:0,flag:!0,data:[[{icon:"icon-folder-add",label:"天猫"},{icon:"icon-folder-open",label:"聚划算"},{icon:"icon-folder",label:"天猫国际"},{icon:"icon-rocket",label:"外卖"},{icon:"icon-lock",label:"天猫超市"}],[{icon:"icon-unlock",label:"充值中心"},{icon:"icon-unlike",label:"飞猪旅行"},{icon:"icon-like",label:"领金币"},{icon:"icon-mobile",label:"拍卖"},{icon:"icon-linechart",label:"分类"}]]}}),n.mock("/home/products",function(t,e){return{ret:0,flag:!0,data:[[[{title:"淘抢购",img:"icon-user"},{title:"",img:"icon-adduser"}],[{title:"有好货",img:"icon-check-square"},{title:"",img:"icon-up-square"}]],[[{title:"哇哦视频",img:"icon-left-square"},{title:"",img:"icon-down-square"}],[{title:"必买清单",img:"icon-appstore"},{title:"",img:"icon-save"}]]]}}),n.mock("/tab",function(t,e){return{ret:0,flag:!0,data:[{title:"主页",icon:""},{title:"我的",icon:""}]}})}},["NHnr"]);
//# sourceMappingURL=app.2cb426a32167a778dc43.js.map