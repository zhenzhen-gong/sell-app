webpackJsonp([0],{0:function(t,s){},"1kqg":function(t,s){},"34KM":function(t,s){},"72jI":function(t,s){},DAfh:function(t,s){},KMvT:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("/ocq"),n=e("8+8L"),r={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t,e){return s("span",{key:e,staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var l=e("VU/8")(r,o,!1,function(t){e("DAfh")},null,null).exports,c={name:"myheader",props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},components:{star:l}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\r\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\r\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var d={data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/seller").then(function(s){0===(s=s.body).errno&&(t.seller=s.data)})},components:{myheader:e("VU/8")(c,v,!1,function(t){e("pjb5")},null,null).exports}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("myheader",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评价")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("div",{staticClass:"content"},[e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)],1)},staticRenderFns:[]};var p=e("VU/8")(d,u,!1,function(t){e("1kqg")},null,null).exports,h=e("43Vb"),f=e.n(h),_={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("cartadd",t.target))},decreaseCart:function(){event._constructed&&(this.food.count?this.food.count--:i.a.set(this.food,"count",1))}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},staticRenderFns:[]};var m=e("VU/8")(_,C,!1,function(t){e("ylwe")},null,null).exports,g={props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new f.a(t.$refs.listContent,{click:!0})}),s}},methods:{drop:function(t){console.log(t);for(var s=0;s<this.balls.lenght;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.lenght;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0, "+n+"px, 0)",t.style.Transform="translate3d(0, "+n+"px, 0)";var r=t.getElementsByClassName("inner-hook")[0];r.style.webkitTransform="translate3d("+a+"px, 0, 0)",r.style.Transform="translate3d("+a+"px, 0, 0)"}}},enter:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0, 0, 0)",t.style.transform="translate3d(0, 0, 0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0, 0, 0)",e.style.transform="translate3d(0, 0, 0)",t.addEventListener("transitionend",s)})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}},components:{cartcontrol:m}},w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v(t._s(t.payDesc))])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,i){return e("div",{key:i},[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s,i){return e("li",{key:i,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}),0)])])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]};var y=e("VU/8")(g,w,!1,function(t){e("VNUw")},null,null).exports;function x(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:k(a))}return s}function k(t){return("00"+t).substr(t.length)}var b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var T=e("VU/8")({},b,!1,function(t){e("bfaN")},null,null).exports,$={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t,s){s._constructed&&this.$emit("ratingtype-select",t)},toggleContent:function(t){t._constructed&&this.$emit("content-toggle",this.onlyContent)}}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){return t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){return t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){return t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var S=e("VU/8")($,P,!1,function(t){e("72jI")},null,null).exports,N={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new f.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&(this.$emit("cartadd",t.target),i.a.set(this.food,"count",1),console.log(this.food.count))},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},ratingtypeSelect:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},contentToggle:function(t){var s=this;this.onlyContent=!t,this.$nextTick(function(){s.scroll.refresh()})}},filters:{formatDate:function(t){return x(new Date(t),"yyyy-MM-dd hh:mm")}},components:{cartcontrol:m,split:T,ratingselect:S}},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("transition",{attrs:{name:"move"}},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{"ratingtype-select":t.ratingtypeSelect,"content-toggle":t.contentToggle}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],key:i,staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n                ")])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])],1)},staticRenderFns:[]};var E=e("VU/8")(N,F,!1,function(t){e("R+u6")},null,null).exports,M={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.$http.get("/goods").then(function(s){0===(s=s.body).errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))}),this.classMap=["decrease","discount","special","invoice","guarantee"]},methods:{cartadd:function(t){this._drop(t)},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300)}},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},_initScroll:function(){var t=this;this.menuScroll=new f.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new f.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},components:{shopcart:y,cartcontrol:m,food:E}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){return t.selectMenu(i,s)}}},[e("span",{staticClass:"text  border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\r\n                    ")])])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,i){return e("li",{key:i,staticClass:"food-item border-1px",on:{click:function(e){return t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57px",height:"57px"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{cartadd:t.cartadd}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var D=e("VU/8")(M,R,!1,function(t){e("KMvT")},null,null).exports,H={props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},methods:{needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},ratingtypeSelect:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},contentToggle:function(t){var s=this;this.onlyContent=!t,this.$nextTick(function(){s.scroll.refresh()})}},created:function(){var t=this;this.$http.get("/ratings").then(function(s){0===(s=s.body).errno&&(t.ratings=s.data,t.$nextTick(function(){t.scroll=new f.a(t.$refs.ratings,{click:!0})}))})},filters:{formatDate:function(t){return x(new Date(t),"yyyy-MM-dd hh:mm")}},components:{star:l,split:T,ratingselect:S}},V={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"rating-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-rigth"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{"ratingtype-select":t.ratingtypeSelect,"content-toggle":t.contentToggle}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],key:i,staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s,i){return e("span",{key:i,staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}),0)])],1)])},staticRenderFns:[]};var U=e("VU/8")(H,V,!1,function(t){e("PdGv")},null,null).exports,j={props:{seller:{type:Object}},data:function(){return{favorite:!1}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},watch:{seller:function(){this._initScroll(),this._initPics()}},mounted:function(){this._initScroll(),this._initPics()},methods:{toggleFavorite:function(t){t._constructed&&(this.favorite=!this.favorite)},_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new f.a(this.$refs.seller,{click:!0})},_initPics:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new f.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}}},components:{star:l,split:T}},B={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("（"+t._s(t.seller.ratingCount)+"）")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\r\n            ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\r\n            ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.ddeliveryTime))]),t._v("分钟\r\n            ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])}),0):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}),0)])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"info-item border-1px"},[t._v(t._s(s))])}),0)])],1)])},staticRenderFns:[]};var W=e("VU/8")(j,B,!1,function(t){e("QR6n")},null,null).exports;i.a.use(a.a);var L=[{path:"/",component:D},{path:"/goods",component:D},{path:"/ratings",component:U},{path:"/seller",component:W}],O=new a.a({mode:"history",routes:L,linkActiveClass:"active"});e("34KM");i.a.use(a.a),i.a.use(n.a),new i.a({render:function(t){return t(p)},router:O}).$mount("#app")},PdGv:function(t,s){},QR6n:function(t,s){},"R+u6":function(t,s){},VNUw:function(t,s){},bfaN:function(t,s){},pjb5:function(t,s){},ylwe:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.2d190dd520e2b7eff8a1.js.map