(this.webpackJsonpprova=this.webpackJsonpprova||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=(a(69),a(11)),i=a(17),s=a(63),m=a(62),u=a(56);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={profile:{genre:void 0,name:void 0,order:void 0},data:[],loading:!1,error:!1};var f=a(28),y=a.n(f),b=a(25),g=a(57),O=a.n(g),v=function(e){return O.a.get("http://www.boredapi.com/api/activity",e).then((function(e){return e.data}))},j=y.a.mark(T),h=y.a.mark(x);function T(e){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,console.log("teste"),a.next=4,Object(b.b)(v,e.filter);case 4:return t=a.sent,console.log(t),a.next=8,Object(b.c)({type:"SUCCESS_ACTIVITY_FETCH",payload:{activity:t}});case 8:a.next=15;break;case 10:return a.prev=10,a.t0=a.catch(0),console.error(a.t0),a.next=15,Object(b.c)({type:"FAILURE_ACTIVITY_FETCH"});case 15:case"end":return a.stop()}}),j,null,[[0,10]])}function x(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.d)("REQUEST_ACTIVITY_FETCH",T)]);case 2:case"end":return e.stop()}}),h)}var S=a(50),w=a(19),C=a(15),k=Object(C.a)(),I=Object(s.a)(),_=[I,Object(S.a)(k)],N=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),A=Object(i.e)(Object(i.c)({sw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ACTIVITY_FETCH":return p({},e,{loading:!0});case"SUCCESS_ACTIVITY_FETCH":return p({},e,{data:[].concat(Object(m.a)(e.data),[t.payload.activity]),loading:!1,error:!1});case"FAILURE_ACTIVITY_FETCH":return p({},e,{data:[],loading:!1,error:!0});case"REMOVE_ACTIVITY":return p({},e,{data:e.data.filter((function(e){return e.key!==t.payload.key}))});case"SET_MAIN":return p({},e,{profile:{genre:t.payload.genre,name:t.payload.name}});case"SET_ORDER":return p({},e,{profile:p({},e.profile,{order:t.payload.order})});case"REST_PROFILE":return p({},e,{profile:E.profile});default:return e}},router:Object(w.b)(k)}),N,i.a.apply(void 0,_));A.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}({sw:A.getState().sw})})),I.run(x);var R=A,V=a(34),P=a(20),F=a(103),D=a(104),Y=a(105),H=a(106),M=a(107),U=a(108),J=a(109),B=function(e,t){return{type:"SET_MAIN",payload:{name:e,genre:t}}},L=a(10),q=a(24),Q=a(22),W=a.n(Q),$=a(23),z=a.n($),G=function(){var e=Object(n.useState)(null),t=Object(P.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(P.a)(l,2),s=i[0],m=i[1],u=Object(o.e)((function(e){return e.sw.profile})),d=Object(o.d)();Object(n.useEffect)((function(){u.name&&u.genre&&d(Object(L.d)("/order"))}),[u]);return r.a.createElement(F.a,{className:"step-1"},r.a.createElement(D.a,{body:!0},r.a.createElement(Y.a,{className:"form",onSubmit:function(e){e.preventDefault(),d(B(s,a))}},r.a.createElement(H.a,null,r.a.createElement(M.a,{row:!0},r.a.createElement(H.a,{xs:6,className:"text-center"},r.a.createElement("label",null,r.a.createElement(U.a,{id:"female-genre",type:"radio",name:"genre",label:"Feminino",className:"radio-svg",onChange:function(){return c("female")},checked:"female"===a,required:!0}),r.a.createElement(q.a,{src:W.a}))),r.a.createElement(H.a,{xs:6,className:"text-center"},r.a.createElement("label",null,r.a.createElement(U.a,{id:"male-genre",type:"radio",name:"genre",label:"Masculino",className:"radio-svg",onChange:function(){return c("male")},checked:"male"===a,required:!0}),r.a.createElement(q.a,{src:z.a}))))),r.a.createElement(H.a,null,r.a.createElement(M.a,null,r.a.createElement(U.a,{type:"text",name:"nome",required:!0,placeholder:"Seu nome",onChange:function(e){return m(e.target.value)}}))),r.a.createElement(H.a,{className:"text-center"},r.a.createElement(J.a,{type:"submit",color:"primary"},"Pr\xf3ximo")))))},K=a(32),X=a.n(K),Z=a(33),ee=a.n(Z),te=function(){var e=Object(o.e)((function(e){return e.sw.profile})),t=Object(n.useState)(null),a=Object(P.a)(t,2),c=a[0],l=a[1],i=Object(o.d)();Object(n.useEffect)((function(){console.log("teste"),console.log(e),e.name&&e.genre?e.order&&(console.log("Vai"),i(Object(L.d)("/missions"))):i(Object(L.d)("/"))}),[e]);return r.a.createElement(F.a,{className:"step-1"},r.a.createElement(D.a,{body:!0},r.a.createElement(Y.a,{className:"form",onSubmit:function(e){e.preventDefault(),c&&i({type:"SET_ORDER",payload:{order:c}})}},r.a.createElement(M.a,{row:!0},r.a.createElement(H.a,{xs:6,className:"text-center"},r.a.createElement("label",null,r.a.createElement(U.a,{id:"jedi-order",type:"radio",name:"order",label:"Jedi",className:"radio-svg",onChange:function(){return l("jedi")},checked:"jedi"===c}),r.a.createElement(q.a,{src:"male"===e.genre?z.a:W.a}))),r.a.createElement(H.a,{xs:6,className:"text-center"},r.a.createElement("label",null,r.a.createElement(U.a,{id:"sith-genre",type:"radio",name:"genre",label:"Sith",className:"radio-svg",onChange:function(){return l("sith")},checked:"sith"===c}),r.a.createElement(q.a,{src:"male"===e.genre?ee.a:X.a})))),r.a.createElement(M.a,{row:!0},r.a.createElement(H.a,{className:"text-center",xs:6},r.a.createElement(J.a,{color:"danger",onClick:function(){return i(B(void 0,void 0))}},"Voltar")),r.a.createElement(H.a,{className:"text-center",xs:6},r.a.createElement(J.a,{type:"submit",color:"primary"},"Pr\xf3ximo"))))))},ae=a(110),ne=a(111),re=a(112),ce=a(113),le=a(114),oe=a(115),ie=a(117),se=a(116),me=a(18),ue={education:"Education",recreational:"Recreational",social:"Social",diy:"Do It Yourself",charity:"Charity",cooking:"Cooking",relaxation:"Relaxation",music:"Music",busywork:"Busywork"},de={accessibility:0,type:0,participants:1},pe=function(){var e=Object(o.e)((function(e){return e.sw})),t=e.profile,a=e.data,c=e.loading,l=Object(o.d)();Object(n.useEffect)((function(){t.name&&t.genre?t.order||l(Object(L.d)("/order")):l(Object(L.d)("/"))}),[L.d,t]);var i,s,m=Object(n.useState)(de),u=Object(P.a)(m,2),d=u[0],p=u[1],E=function(e){var t=d;t[e.target.name]=e.target.value,p(t)};return r.a.createElement(F.a,{fluid:!0,className:"mt-5"},r.a.createElement(ae.a,null,r.a.createElement(H.a,{xs:12,md:4},r.a.createElement(D.a,{body:!0},r.a.createElement("img",{src:(i=t.genre,s=t.order,"male"===i?"jedi"===s?z.a:ee.a:"jedi"===s?W.a:X.a),className:"img-fluid rounded-circle mb-2"}),r.a.createElement("h6",null,"Bem vindo, ",r.a.createElement("strong",null,t.name),"!"),r.a.createElement("p",null,"Sexo:"," ","male"===t.genre?r.a.createElement("span",null,r.a.createElement(me.c,{style:{color:"cyan"}})," Masculino"):r.a.createElement("span",null,r.a.createElement(me.a,{style:{color:"red"}}),"Feminino")),r.a.createElement("p",null,"Ordem:"," ","jedi"===t.order?r.a.createElement("span",null,r.a.createElement(me.b,{style:{color:"blue"}}),"Jedi"):r.a.createElement("span",null,r.a.createElement(me.d,{style:{color:"red"}}),"Sith")),r.a.createElement("p",null,"Numero de atividades: ",a.length),r.a.createElement(J.a,{onClick:function(){return l({type:"RESET_PROFILE"})}},"Editar Personagem"))),r.a.createElement(H.a,{xs:12,md:8},r.a.createElement(D.a,{body:!0},r.a.createElement(Y.a,{onSubmit:function(e){e.preventDefault(),l({type:"REQUEST_ACTIVITY_FETCH",payload:{filter:d}})}},r.a.createElement(M.a,null,r.a.createElement(ne.a,{for:"accessibility"},"Accessibility:"),r.a.createElement(re.a,{type:"range",id:"accessibility",name:"accessibility",defaultValue:d.accessibility,onChange:E})),r.a.createElement(M.a,null,r.a.createElement(ne.a,{for:"type"},"Type:"),r.a.createElement(U.a,{id:"type",name:"type",type:"select",defaultValue:d.type,onChange:E},Object.keys(ue).map((function(e){return r.a.createElement("option",{value:e,key:e},ue[e])})))),r.a.createElement(M.a,null,r.a.createElement(ne.a,{for:"participants"},"Participants:"),r.a.createElement(U.a,{name:"participants",id:"participants",type:"number",min:0,defaultValue:d.participants,onChange:E})),r.a.createElement(J.a,{type:"submit",color:"primary",disabled:c},c?r.a.createElement(me.e,{className:"icon-spin"}):"Add Activity"))),r.a.createElement(D.a,{body:!0},r.a.createElement(ce.a,null,a.map((function(e){return r.a.createElement(le.a,{key:e.key},r.a.createElement(oe.a,{id:"toggler-".concat(e.key)},r.a.createElement(J.a,{color:"danger",onClick:function(){return l({type:"REMOVE_ACTIVITY",payload:{key:e.key}})}},r.a.createElement(me.f,null)),r.a.createElement(J.a,{color:"link"},e.activity)),r.a.createElement(ie.a,{toggler:"#toggler-".concat(e.key)},r.a.createElement(se.a,null,r.a.createElement("p",null,"Accessibility: ",(100*e.accessibility).toFixed(1),"%"),r.a.createElement("p",null,"Participants: ",e.participants),r.a.createElement("p",null,"Type: ",ue[e.type]))))})))))))},Ee=function(){return r.a.createElement(w.a,{history:k},r.a.createElement(V.c,null,r.a.createElement(V.a,{exact:!0,path:"/",component:G}),r.a.createElement(V.a,{path:"/order",component:te}),r.a.createElement(V.a,{path:"/missions",component:pe})))};var fe=function(){return r.a.createElement(o.a,{store:R},r.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},22:function(e,t,a){e.exports=a.p+"static/media/jedi_female.a8c9f782.svg"},23:function(e,t,a){e.exports=a.p+"static/media/jedi_male.8655a845.svg"},32:function(e,t,a){e.exports=a.p+"static/media/sith_female.5dd0d2a8.svg"},33:function(e,t,a){e.exports=a.p+"static/media/sith_male.e2b17dd4.svg"},64:function(e,t,a){e.exports=a(101)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.265b396f.chunk.js.map