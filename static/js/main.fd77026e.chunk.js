(this.webpackJsonpglassix_or=this.webpackJsonpglassix_or||[]).push([[0],{58:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(19),s=n.n(c),r=n(21),o=n(8),i=n.n(o),d=n(20),l=n(4),u=n(9),b=n.n(u),j=n(10),h=n.n(j),p=n(60),x=n(0);function f(t){var e=t.addTodo,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1];return Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s&&(e(s),r(""))},className:"form-inline",children:[Object(x.jsx)("input",{type:"text",className:"form-control",value:s,style:{marginLeft:"2px",width:"86%"},placeholder:"Add new Todo",onChange:function(t){return r(t.target.value)}}),Object(x.jsx)("button",{type:"submit",className:"btn btn-light",style:{marginLeft:"10px"},children:"Add"})]})}function m(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(200),o=Object(l.a)(s,2),u=o[0],j=o[1],m=Object(a.useState)(),O=Object(l.a)(m,2),g=O[0],v=O[1];Object(a.useEffect)((function(){function t(){return(t=Object(d.a)(i.a.mark((function t(){var e,n,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=h.a.get("userId")){t.next=7;break}e=Object(p.a)(),h.a.set("userId",e),v(e),t.next=17;break;case 7:return v(e),t.next=10,b.a.get("https://kvdb.io/RqyRuHjZX8Z87JhBMhZZu6/".concat(e));case 10:return n=t.sent,t.next=13,n.data;case 13:a=t.sent,s=a.todos,j(n.status),c(s);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);return 200===u?Object(x.jsxs)("div",{style:{backgroundColor:"#f4f3ef",height:"100vh",fontFamily:"Helvetica Neue"},children:[Object(x.jsx)("br",{}),Object(x.jsxs)("div",{style:{width:"75%",backgroundColor:"white",minHeight:"75vh",margin:"auto",borderRadius:"5px",border:"1px solid black"},children:[Object(x.jsx)("h1",{style:{padding:"3vh",textAlign:"center"},children:"Glassix Assignment - Or Fayne"}),Object(x.jsx)("div",{className:"card",style:{width:"50%",margin:"auto",backgroundColor:"#74b9ff"},children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h4",{style:{fontWeight:"bold",color:"whitesmoke"},children:"My Todo list"}),n.map((function(t,e){return Object(x.jsx)("input",{className:"form-control",id:"disabledInput",placeholder:t,disabled:!0,style:{marginRight:"10px",marginBottom:"10px",color:"black"},type:"text"},e)})),Object(x.jsx)(f,{addTodo:function(t){var e=[].concat(Object(r.a)(n),[t]);c(e),b.a.post("https://kvdb.io/RqyRuHjZX8Z87JhBMhZZu6/".concat(g),{todos:e})}})]})})]})]}):Object(x.jsx)("h1",{children:"An Server error was accord"})}n(57);s.a.render(Object(x.jsx)(m,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.fd77026e.chunk.js.map