(function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},n={app:0},i=[];function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"07d1":function(e,t,a){},"2a1b":function(e,t,a){"use strict";a("b344")},"462c":function(e,t,a){"use strict";a("5156")},5156:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Header"},["home"!==e.$route.name?a("router-link",{staticClass:"backIcon",attrs:{to:"/"}},[e._v("Voltar")]):e._e(),a("h1",{class:"home"!==e.$route.name?"":"home-spacing"},[e._v("David Silva")]),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"linkedinIcon",attrs:{href:"https://www.linkedin.com/in/srdavidsilva/",target:"_blank"}},[o("img",{attrs:{src:a("dd32"),alt:"logo linkedin",title:"Perfil LinkedIn"}})])}],c={name:"Header"},l=c,u=(a("8baf"),a("2877")),d=Object(u["a"])(l,r,s,!1,null,null,null),m=d.exports,p={name:"App",components:{Header:m}},f=p,v=(a("034f"),Object(u["a"])(f,n,i,!1,null,null,null)),h=v.exports,g=a("2f62"),b=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Home"},[e._m(0),a("hr"),a("div",{staticClass:"tabs"},[a("div",{staticClass:"tab-header"},e._l(e.tabs,(function(t,o){return a("button",{key:o,staticClass:"btn",class:e.activeTab==o?"checked":"",on:{click:function(t){e.activeTab=o}}},[e._v(" "+e._s(t.title)+" ")])})),0),a("div",{staticClass:"tab-body"},[0==e.activeTab?a("div",{staticClass:"tab"},[a("TimeLine",{attrs:{moments:e.moments}})],1):e._e(),1==e.activeTab?a("div",{staticClass:"tab"},[a("TimeLine",{attrs:{moments:e.notes}})],1):e._e()])])])},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"welcome"},[a("p",[e._v("Seja bem-vindo!")]),a("p",[e._v(" Tenho estudando e trabalhando com tecnologia há pouco mais de dez anos. ")]),a("p",[e._v(" Sempre tive vontade de contar minha tragetória de uma forma simples, talvez ainda não seja o ideal mas aqui está uma linha do tempo (em desenvolvimento) com alguns detalhes. ")]),a("p",[e._v(" Espero que de alguma forma isso motivar você em sua jornada, o caminho não é fácil, tão pouco rápido mas certamente vale a pena! ")])])}],y=(a("d3b7"),a("96cf"),a("1da1")),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"TimeLine"},e._l(e.moments,(function(t,o){return a("vue-timeline-update",{key:o,attrs:{date:new Date(t.date),title:t.title,description:t.description,thumbnail:t.thumbnail,category:t.category,icon:t.icon,color:t.color,animation:""}},[t.link?a("div",{staticClass:"link"},[a("a",{attrs:{href:t.link,target:"_blank"}},[e._v(" Acessar conteúdo ")])]):e._e(),a("div",{staticClass:"tag-wrapper"},e._l(t.tags,(function(t,o){return a("span",{key:o,staticClass:"tag",on:{click:function(a){return e.tagClicked(t)}}},[e._v(" "+e._s(t)+" ")])})),0)])})),1)},w=[],O=(a("99af"),a("d81d"),{props:{moments:{type:Array,default:function(){return[]}}},name:"TimeLine",methods:{tagClicked:function(e){var t=0;this.moments.map((function(a){a.tags.map((function(a){a===e&&t++}))})),alert("".concat(e," aparece em ").concat(t," três momentos"))}}}),x=O,C=(a("f154"),Object(u["a"])(x,j,w,!1,null,null,null)),L=C.exports,T={name:"Home",components:{TimeLine:L},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="https://gist.githubusercontent.com/sr2ds",t.next=3,fetch("".concat(a,"/38a37d62dc162829438a8c6fb803ebd8/raw/life.json"));case 3:return o=t.sent,t.next=6,o.json();case 6:e.moments=t.sent;case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{tabs:[{title:"Timeline Profissional"},{title:"Notas e Artigos"}],activeTab:0,moments:[],notes:[{icon:"link",category:"GitHub",color:"blue",title:"WebAssembly vai dominar o mundo?",description:"Dei um brincada com WASM e Rust, nos meus testes as execuções são muito mais performáticas em Web Assembly do que em JS puro, vejo com bons olhos. E com Rust não é tão complicado o start, qualquer hora vou criar oportunidades para me desenvolver neste aspecto. Se você quiser acompanhar o que fiz, segue o repo:",link:"https://github.com/sr2ds/hello-world-rust-webassembly",date:"2021-03"},{icon:"link",category:"GitHub",color:"blue",description:"Quando eu comecei a estudar PHP, aprendi com a mão na massa, tentando e lendo na medida que precisava, o mesmo aconteceu com JavaScript. O dia-a-dia me deu alguns poderes e só fui ler de verdade a documentação ou fazer algum curso bem depois, quando já usava no dia-a-dia e tinha alguma experiência. Agora eu resolvi fazer diferente com Rust, comecei lendo a documentação e um livro, praticando com pequenos passos e sem pressa, até retomei a base de algorítimos para reforçar o que eu já sei. A experiência foi e tem sido legal, eu documentei toda a leitura de um livro no meu github, confere lá! ",title:"Comecei a documentar meus estudos de Rust Lang",date:"2021-02",thumbnail:"https://raw.githubusercontent.com/sr2ds/learning-rust/master/assets/rust-language-logo.jpg",link:"https://github.com/sr2ds/learning-rust"},{icon:"link",category:"Blog",color:"white",title:"Bloquear Tráfego Por IP - X-Forwarded-For Apache 2.4",date:"2020-05",link:"https://dev.to/sr2ds/bloquear-trafego-por-ip-x-forwarded-for-apache-2-4-4kc"},{icon:"link",category:"Blog",color:"white",title:"Opções do Comando Docker Run",date:"2020-05",link:"https://dev.to/sr2ds/opcoes-do-comando-docker-run-g87"},{icon:"link",category:"Blog",color:"white",title:"GrayLog parou após disco cheio?",date:"2020-04",link:"https://dev.to/sr2ds/graylog-parando-por-problema-no-elasticsearch-ofg"},{icon:"link",category:"Blog",color:"white",title:"Apagando o cache do Redis",date:"2020-04",link:"https://dev.to/sr2ds/apagando-o-cache-do-redis-37b7"},{icon:"link",category:"Blog",color:"white",title:"Instalando Docker no Oracle Linux",date:"2020-04",link:"https://dev.to/sr2ds/instalando-docker-no-oracle-linux-nd6"},{icon:"link",category:"Blog",color:"white",title:"Publicando Imagens no OCIR - Registry Oracle Cloud",date:"2020-04",link:"https://dev.to/sr2ds/publicando-imagens-no-ocir-registry-oracle-cloud-2od1"},{icon:"link",category:"Blog",color:"white",title:"Integrando Jenkins e Gitlab",date:"2020-04",link:"https://dev.to/sr2ds/integrando-jenkins-e-gitlab-48o9"},{icon:"link",category:"Blog",color:"white",date:"2020-05",title:"Docker#01 Instalação e Primeiros Passos - Parte 1",link:"https://dev.to/sr2ds/docker-01-instalacao-e-primeiros-passos-parte-1-262n"},{icon:"link",category:"Blog",color:"white",date:"2020-04",title:"Docker#00 Introdução Concentual",link:"https://dev.to/sr2ds/docker-00-introducao-concentual-47gf"}]}}},q=T,P=(a("89f1"),Object(u["a"])(q,_,k,!1,null,null,null)),U=P.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Trajectory"},[a("h1",[e._v("Tragetória")]),a("p",[e._v("Sempre tive vontade de expor minha tragetória de uma forma amigável, talvez ainda não seja o ideal mas aqui está uma linha do tempo com alguns detalhes do que vivi profissionalmente em cada época.")]),a("vue-timeline-update",{attrs:{date:new Date("2017-02-26"),title:"v2.2.0 - Initial D",description:"Today I am thrilled to announce the release of Vue.js 2.2.0.",thumbnail:"/images/vuetimeline/initial_d.jpg",category:"announcement",icon:"code",color:"red"}}),a("vue-timeline-update",{attrs:{date:new Date("2016-11-22"),title:"v2.1.0 - Hunter X Hunter",description:"Today I am thrilled to announce the release of Vue.js 2.1.0.",thumbnail:"/images/vuetimeline/hunter_x_hunter.jpg",category:"announcement",icon:"code",color:"turquoise"}}),a("vue-timeline-update",{attrs:{date:new Date("2016-09-30"),title:"v2.0.0 - Ghost in the Shell",description:"Today I am thrilled to announce the release of Vue.js 2.0.0",thumbnail:"/images/vuetimeline/ghost_in_the_shell.jpg",category:"announcement",icon:"code",color:"white","is-last":""}}),a("div",[a("ul",e._l(e.years,(function(t,o){return a("li",{key:o,on:{click:function(a){e.activeYear=t}}},[e._v(e._s(t))])})),0),a("div",[e._v(e._s(e.contents[e.activeYear].text))]),a("div",[e._v(e._s(e.contents[e.activeYear].images))])])],1)},I=[],A={name:"Trajectory",components:{},data:function(){return{activeYear:2020,years:[2020,2019,2018,2017,2016,2015,2014],contents:{2020:{text:"O que estou fazendo em 2020",images:[]},2019:{text:"O que fiz em 2019",images:[]}}}}},$=A,D=(a("462c"),Object(u["a"])($,S,I,!1,null,null,null)),E=D.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"UpdatesPage"},[a("h1",[e._v("Updates")]),a("p",[e._v("No tempo livre eu faço algumas coisas para me divertir e contribuir de alguma forma, seja através de um artigo, vídeo ou até mesmo um projeto como este que você está vendo.")]),a("UpdatesList",{staticClass:"list",attrs:{limit:30}})],1)},B=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"UpdateList"},[a("ul",e._l(e.getUpdateList.slice(-e.limit),(function(t,o){return a("li",{key:o},[e._v(" "+e._s(t.date)+" - "),a("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(t.title))]),e._v(" #"+e._s(t.type)+" ")])})),0)])},z=[],G=(a("a9e3"),a("5530")),J={props:{limit:{type:Number,default:5}},name:"UpdatesList",methods:Object(G["a"])({},Object(g["b"])(["loadUpdateList"])),computed:Object(G["a"])({},Object(g["c"])(["getUpdateList"])),mounted:function(){this.getUpdateList.length||this.loadUpdateList()}},M=J,V=(a("2a1b"),Object(u["a"])(M,R,z,!1,null,null,null)),Y=V.exports,N={name:"Updates",components:{UpdatesList:Y}},W=N,F=(a("fb4d"),Object(u["a"])(W,H,B,!1,null,null,null)),X=F.exports;o["a"].use(b["a"]);var Q=[{path:"/",component:U,name:"home"},{path:"/trajectory",component:E,name:"trajectory"},{path:"/updates",component:X,name:"updates"}],K=new b["a"]({mode:"history",routes:Q}),Z=K;o["a"].use(g["a"]);var ee=new g["a"].Store({state:{updatesList:[]},getters:{getUpdateList:function(e){return e.updatesList}},mutations:{loadUpdateList:function(e,t){e.updatesList=t}},actions:{loadUpdateList:function(e){var t=e.commit;t("loadUpdateList",[{date:"01/05/2020",title:"Artigo sobre bla bla",link:"http://meulink.com.br",type:"artigo"}])}}}),te=ee,ae=a("7cf2");o["a"].use(ae["a"]),o["a"].use(g["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(h)},router:Z,store:te}).$mount("#app")},6860:function(e,t,a){},"85ec":function(e,t,a){},"89f1":function(e,t,a){"use strict";a("fca2")},"8baf":function(e,t,a){"use strict";a("6860")},b344:function(e,t,a){},c3f6:function(e,t,a){},dd32:function(e,t,a){e.exports=a.p+"img/linkedin.30c453b7.png"},f154:function(e,t,a){"use strict";a("07d1")},fb4d:function(e,t,a){"use strict";a("c3f6")},fca2:function(e,t,a){}});
//# sourceMappingURL=app.21bf1ddd.js.map