(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"07d1":function(e,t,n){},"2a1b":function(e,t,n){"use strict";var a=n("b344"),o=n.n(a);o.a},"462c":function(e,t,n){"use strict";var a=n("5156"),o=n.n(a);o.a},5156:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Header"},["home"!==e.$route.name?n("router-link",{staticClass:"backIcon",attrs:{to:"/"}},[e._v("Voltar")]):e._e(),n("h1",{class:"home"!==e.$route.name?"":"home-spacing"},[e._v("David Silva")]),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"linkedinIcon",attrs:{href:"https://www.linkedin.com/in/srdavidsilva/",target:"_blank"}},[a("img",{attrs:{src:n("dd32"),alt:"logo linkedin",title:"Perfil LinkedIn"}})])}],c={},u=c,l=(n("8baf"),n("2877")),d=Object(l["a"])(u,i,s,!1,null,null,null),m=d.exports,p={name:"App",components:{Header:m}},f=p,v=(n("034f"),Object(l["a"])(f,o,r,!1,null,null,null)),h=v.exports,g=n("2f62"),b=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Home"},[e._m(0),n("hr"),n("TimeLine",{attrs:{moments:e.moments}})],1)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome"},[n("p",[e._v("Seja bem-vindo!")]),n("p",[e._v(" Tenho estudando e trabalhando com tecnologia há pouco mais de dez anos. ")]),n("p",[e._v(" Sempre tive vontade de contar minha tragetória de uma forma simples, talvez ainda não seja o ideal mas aqui está uma linha do tempo (em desenvolvimento) com alguns detalhes. ")]),n("p",[e._v(" Espero que de alguma forma isso motivar você em sua jornada, o caminho não é fácil, tão pouco rápido mas certamente vale a pena! ")])])}],j=(n("d3b7"),n("96cf"),n("1da1")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TimeLine"},e._l(e.moments,(function(t,a){return n("vue-timeline-update",{key:a,attrs:{date:new Date(t.date),title:t.title,description:t.description,thumbnail:t.thumbnail,category:t.category,icon:t.icon,color:t.color,animation:""}},[n("div",{staticClass:"tag-wrapper"},e._l(t.tags,(function(t,a){return n("span",{key:a,staticClass:"tag",on:{click:function(n){return e.tagClicked(t)}}},[e._v(" "+e._s(t)+" ")])})),0)])})),1)},O=[],k=(n("99af"),n("d81d"),{props:{moments:{type:Array,default:function(){return[]}}},name:"TimeLine",methods:{tagClicked:function(e){var t=0;this.moments.map((function(n){n.tags.map((function(n){n===e&&t++}))})),console.log("".concat(e," aparece em ").concat(t," anos"))}}}),x=k,L=(n("f154"),Object(l["a"])(x,w,O,!1,null,null,null)),U=L.exports,C={name:"Home",components:{TimeLine:U},mounted:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gist.githubusercontent.com/sr2ds/38a37d62dc162829438a8c6fb803ebd8/raw/4c8355007f2a39c4b9cfff7dbb32892c14166ca7/life.json");case 2:return n=t.sent,t.next=5,n.json();case 5:e.moments=t.sent;case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{moments:[]}}},T=C,$=(n("89f1"),Object(l["a"])(T,_,y,!1,null,null,null)),S=$.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Trajectory"},[n("h1",[e._v("Tragetória")]),n("p",[e._v("Sempre tive vontade de expor minha tragetória de uma forma amigável, talvez ainda não seja o ideal mas aqui está uma linha do tempo com alguns detalhes do que vivi profissionalmente em cada época.")]),n("vue-timeline-update",{attrs:{date:new Date("2017-02-26"),title:"v2.2.0 - Initial D",description:"Today I am thrilled to announce the release of Vue.js 2.2.0.",thumbnail:"/images/vuetimeline/initial_d.jpg",category:"announcement",icon:"code",color:"red"}}),n("vue-timeline-update",{attrs:{date:new Date("2016-11-22"),title:"v2.1.0 - Hunter X Hunter",description:"Today I am thrilled to announce the release of Vue.js 2.1.0.",thumbnail:"/images/vuetimeline/hunter_x_hunter.jpg",category:"announcement",icon:"code",color:"turquoise"}}),n("vue-timeline-update",{attrs:{date:new Date("2016-09-30"),title:"v2.0.0 - Ghost in the Shell",description:"Today I am thrilled to announce the release of Vue.js 2.0.0",thumbnail:"/images/vuetimeline/ghost_in_the_shell.jpg",category:"announcement",icon:"code",color:"white","is-last":""}}),n("div",[n("ul",e._l(e.years,(function(t,a){return n("li",{key:a,on:{click:function(n){e.activeYear=t}}},[e._v(e._s(t))])})),0),n("div",[e._v(e._s(e.contents[e.activeYear].text))]),n("div",[e._v(e._s(e.contents[e.activeYear].images))])])],1)},P=[],q={name:"Trajectory",components:{},data:function(){return{activeYear:2020,years:[2020,2019,2018,2017,2016,2015,2014],contents:{2020:{text:"O que estou fazendo em 2020",images:[]},2019:{text:"O que fiz em 2019",images:[]}}}}},H=q,I=(n("462c"),Object(l["a"])(H,E,P,!1,null,null,null)),D=I.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"UpdatesPage"},[n("h1",[e._v("Updates")]),n("p",[e._v("No tempo livre eu faço algumas coisas para me divertir e contribuir de alguma forma, seja através de um artigo, vídeo ou até mesmo um projeto como este que você está vendo.")]),n("UpdatesList",{staticClass:"list",attrs:{limit:30}})],1)},M=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"UpdateList"},[n("ul",e._l(e.getUpdateList.slice(-e.limit),(function(t,a){return n("li",{key:a},[e._v(" "+e._s(t.date)+" - "),n("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(t.title))]),e._v(" #"+e._s(t.type)+" ")])})),0)])},Y=[],A=(n("a9e3"),n("5530")),J={props:{limit:{type:Number,default:5}},name:"UpdatesList",methods:Object(A["a"])({},Object(g["b"])(["loadUpdateList"])),computed:Object(A["a"])({},Object(g["c"])(["getUpdateList"])),mounted:function(){this.getUpdateList.length||this.loadUpdateList()}},N=J,R=(n("2a1b"),Object(l["a"])(N,V,Y,!1,null,null,null)),G=R.exports,X={name:"Updates",components:{UpdatesList:G}},B=X,F=(n("fb4d"),Object(l["a"])(B,z,M,!1,null,null,null)),K=F.exports;a["a"].use(b["a"]);var Q=[{path:"/",component:S,name:"home"},{path:"/trajectory",component:D,name:"trajectory"},{path:"/updates",component:K,name:"updates"}],W=new b["a"]({mode:"history",routes:Q}),Z=W;a["a"].use(g["a"]);var ee=new g["a"].Store({state:{updatesList:[]},getters:{getUpdateList:function(e){return e.updatesList}},mutations:{loadUpdateList:function(e,t){e.updatesList=t}},actions:{loadUpdateList:function(e){var t=e.commit;t("loadUpdateList",[{date:"01/05/2020",title:"Artigo sobre bla bla",link:"http://meulink.com.br",type:"artigo"}])}}}),te=ee,ne=n("7cf2");a["a"].use(ne["a"]),a["a"].use(g["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(h)},router:Z,store:te}).$mount("#app")},6860:function(e,t,n){},"85ec":function(e,t,n){},"89f1":function(e,t,n){"use strict";var a=n("fca2"),o=n.n(a);o.a},"8baf":function(e,t,n){"use strict";var a=n("6860"),o=n.n(a);o.a},b344:function(e,t,n){},c3f6:function(e,t,n){},dd32:function(e,t,n){e.exports=n.p+"img/linkedin.30c453b7.png"},f154:function(e,t,n){"use strict";var a=n("07d1"),o=n.n(a);o.a},fb4d:function(e,t,n){"use strict";var a=n("c3f6"),o=n.n(a);o.a},fca2:function(e,t,n){}});
//# sourceMappingURL=app.0c279e2d.js.map