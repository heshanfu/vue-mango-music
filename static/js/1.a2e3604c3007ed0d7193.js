webpackJsonp([1],{"5zde":function(e,n,t){t("zQR9"),t("qyJz"),e.exports=t("FeBl").Array.from},"Sgn/":function(e,n,t){"use strict";n.b=function(e,n){var t=a()({},r.c,{g_tk:5381,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,channel:"singer",page:"list",key:n,pagenum:e,pagesize:100});return Object(s.a)(r.d.singerList,t,r.b)},n.a=function(e){var n=a()({},r.c,{g_tk:5381,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,singermid:e,order:"listen",begin:0,num:100,songstatus:1});return Object(s.a)(r.d.singerInfo,n,r.b)};var i=t("woOf"),a=t.n(i),s=t("WlK5"),r=t("T452")},"c/Tr":function(e,n,t){e.exports={default:t("5zde"),__esModule:!0}},fBQ2:function(e,n,t){"use strict";var i=t("evD5"),a=t("X8DO");e.exports=function(e,n,t){n in e?i.f(e,n,a(0,t)):e[n]=t}},kBRo:function(e,n){},qyJz:function(e,n,t){"use strict";var i=t("+ZMJ"),a=t("kM2E"),s=t("sB3e"),r=t("msXi"),o=t("Mhyx"),l=t("QRG4"),c=t("fBQ2"),m=t("3fs2");a(a.S+a.F*!t("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var n,t,a,y,d=s(e),g="function"==typeof this?this:Array,u=arguments.length,k=u>1?arguments[1]:void 0,f=void 0!==k,h=0,v=m(d);if(f&&(k=i(k,u>2?arguments[2]:void 0,2)),void 0==v||g==Array&&o(v))for(t=new g(n=l(d.length));n>h;h++)c(t,h,f?k(d[h],h):d[h]);else for(y=v.call(d),t=new g;!(a=y.next()).done;h++)c(t,h,f?r(y,k,[a.value,h],!0):a.value);return t.length=h,t}})},rNLI:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("c/Tr"),a=t.n(i),s=t("hGVa"),r=t("H868"),o=t("Sgn/"),l=t("T452"),c=t("W7Ek"),m={name:"singers",data:function(){return{loading:!0,typeKey:"all_all",indexKey:"all",singers:[],loadingImg:t("8vlb"),errorImg:t("8vlb")}},methods:{_initNavScrollWidth:function(){var e=this.$refs.tag,n=e.querySelectorAll("a"),t=0;a()(n).forEach(function(e){t+=e.offsetWidth}),e.style.width=t+"px";var i=this.$refs.index,s=i.querySelectorAll("a"),r=0;a()(s).forEach(function(e){r+=e.offsetWidth}),i.style.width=r+"px"},getSingers:function(){var e=this;Object(o.b)(1,this.typeKey+"_"+this.indexKey).then(function(n){if(n&&n.code===l.a){var t=[];n.data.list.forEach(function(e){var n=new c.a(e.Fsinger_id,e.Fsinger_mid,e.Fsinger_name,"https://y.gtimg.cn/music/photo_new/T001R150x150M000"+e.Fsinger_mid+".jpg?max_age=2592000");t.push(n)}),e.singers=t,e.loading=!1}})},handleTypeClick:function(e){this.loading=!0,this.typeKey=e,this.indexKey="all",this.singers=[],this.getSingers()},handleIndexClick:function(e){this.loading=!0,this.indexKey=e,this.singers=[],this.getSingers()},toDetail:function(e){this.$router.push(this.$route.path+"/"+e)}},created:function(){this.types=[{key:"all_all",name:"全部"},{key:"cn_man",name:"华语男"},{key:"cn_woman",name:"华语女"},{key:"cn_team",name:"华语组合"},{key:"k_man",name:"韩国男"},{key:"k_woman",name:"韩国女"},{key:"k_team",name:"韩国组合"},{key:"j_man",name:"日本男"},{key:"j_woman",name:"日本女"},{key:"j_team",name:"日本组合"},{key:"eu_man",name:"欧美男"},{key:"eu_woman",name:"欧美女"},{key:"eu_team",name:"欧美组合"},{key:"other_other",name:"其它"}],this.indexs=[{key:"all",name:"热门"},{key:"A",name:"A"},{key:"B",name:"B"},{key:"C",name:"C"},{key:"D",name:"D"},{key:"E",name:"E"},{key:"F",name:"F"},{key:"G",name:"G"},{key:"H",name:"H"},{key:"I",name:"I"},{key:"J",name:"J"},{key:"K",name:"K"},{key:"L",name:"L"},{key:"M",name:"M"},{key:"N",name:"N"},{key:"O",name:"O"},{key:"P",name:"P"},{key:"Q",name:"Q"},{key:"R",name:"R"},{key:"S",name:"S"},{key:"T",name:"T"},{key:"U",name:"U"},{key:"V",name:"V"},{key:"W",name:"W"},{key:"X",name:"X"},{key:"Y",name:"Y"},{key:"Z",name:"Z"}],this.getSingers()},mounted:function(){this._initNavScrollWidth()},components:{Loading:s.a,Scroll:r.a}},y={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"music-singers skin-music-singers"},[t("div",{staticClass:"nav"},[t("scroll",{attrs:{direction:"horizontal"}},[t("div",{ref:"tag",staticClass:"tag"},e._l(e.types,function(n){return t("a",{key:n.key,class:{choose:n.key===e.typeKey},on:{click:function(t){e.handleTypeClick(n.key)}}},[e._v("\n          "+e._s(n.name)+"\n        ")])}))]),e._v(" "),t("scroll",{attrs:{direction:"horizontal"}},[t("div",{ref:"index",staticClass:"index"},e._l(e.indexs,function(n){return t("a",{key:n.key,class:{choose:n.key===e.indexKey},on:{click:function(t){e.handleIndexClick(n.key)}}},[e._v("\n          "+e._s(n.name)+"\n        ")])}))])],1),e._v(" "),t("div",{staticClass:"singer-list"},[t("scroll",[t("div",{staticClass:"singer-container"},e._l(e.singers,function(n){return t("div",{key:n.id,staticClass:"singer-wrapper",on:{click:function(t){e.toDetail(n.mId)}}},[t("div",{staticClass:"singer-img"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:n.img,loading:e.loadingImg,error:e.errorImg},expression:"{src: singer.img, loading: loadingImg, error: errorImg}"}],attrs:{width:"100%",height:"100%",alt:n.name}})]),e._v(" "),t("div",{staticClass:"singer-name"},[e._v("\n            "+e._s(n.name)+"\n          ")])])}))])],1),e._v(" "),t("loading",{attrs:{title:"正在加载...",show:e.loading}}),e._v(" "),t("transition",{attrs:{name:"translate"}},[t("router-view")],1)],1)},staticRenderFns:[]};var d=t("VU/8")(m,y,!1,function(e){t("kBRo")},"data-v-1cdefd4c",null);n.default=d.exports}});
//# sourceMappingURL=1.a2e3604c3007ed0d7193.js.map