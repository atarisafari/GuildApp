(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(48)},35:function(e,t,n){},38:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),s=(n(35),n(16)),u=n(5),i=n.n(u),l=n(10),p=n(21),m=n(22),d=n(28),h=n(23),f=n(29),v=(n(38),function(){var e=Object(l.a)(i.a.mark(function e(t,n){var a,r,o=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2&&void 0!==o[2]?o[2]:"",o.length>3&&void 0!==o[3]?o[3]:"",e.prev=2,e.next=5,fetch("http://157.230.66.35/php/signup.php",{mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t,password:n,display_name:a})});case 5:return r=e.sent,e.abrupt("return",r.text().then(function(e){return console.log(e),e?JSON.parse(e):{}}));case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t,n){return e.apply(this,arguments)}}()),g=function(){var e=Object(l.a)(i.a.mark(function e(t,n){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://157.230.66.35/php/login.php",{mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 3:return a=e.sent,e.abrupt("return",a.text().then(function(e){return console.log(e),e?JSON.parse(e):{}}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}(),E=function(e){return r.a.createElement("button",{onClick:function(){return e.history.push(e.path)}},e.children)},w=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={loggedIn:"False",username:"",password:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.username,a=t.password,o=function(){var t=Object(l.a)(i.a.mark(function t(){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n,a);case 2:r=t.sent,console.log("Result",r),""===r.error?(console.log("Login was successful"),localStorage.setItem("token",r.token),e.props.history.push("/home")):alert(r.error);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{id:"sign_in_header",className:"App-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"logo_header"},r.a.createElement("p",null,"LOGO")),r.a.createElement("div",{id:"login"},r.a.createElement("div",{id:"username_login"},"Username:",r.a.createElement("input",{placeholder:"Username",value:n,onChange:function(t){return e.setState(Object(s.a)({},e.state,{username:t.target.value}))}})),r.a.createElement("div",{id:"password_login"},"Password:",r.a.createElement("input",{placeholder:"Password",type:"password",value:a,onChange:function(t){return e.setState(Object(s.a)({},e.state,{password:t.target.value}))}})),r.a.createElement("button",{onClick:function(){return o()}}," LOGIN "),r.a.createElement(E,Object.assign({path:"/signUp"},this.props),"SIGN UP")))))}}]),t}(a.Component),b=n(25),O=n(12),j=n(11),y=function(e){console.log("props: ",e);var t=Object(a.useState)(""),n=Object(j.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(""),u=Object(j.a)(s,2),p=u[0],m=u[1],d=Object(a.useState)(""),h=Object(j.a)(d,2),f=h[0],g=h[1],w=Object(a.useState)(""),b=Object(j.a)(w,2),O=b[0],y=b[1],S=Object(a.useState)(""),k=Object(j.a)(S,2),x=k[0],U=(k[1],function(){var t=Object(l.a)(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(p===f){t.next=4;break}alert("Your passwords don't match, please try again."),t.next=9;break;case 4:return t.next=6,v(o,p,O,x);case 6:n=t.sent,console.log("Result",n),""===n.error?(console.log("Sign up was successful"),e.history.push("/")):alert(n.error);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}());return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," SignUp "),r.a.createElement("div",{id:"signUp"},r.a.createElement("div",{id:"display_name_signUp"},"Display Name:",r.a.createElement("input",{onBlur:function(e){return t=e.target.value,void y(t);var t}})),r.a.createElement("div",{id:"username_signUp"},"Username:",r.a.createElement("input",{onBlur:function(e){return t=e.target.value,void c(t);var t}})),r.a.createElement("div",{id:"password_signUp"},"Password:",r.a.createElement("input",{type:"password",onBlur:function(e){return t=e.target.value,void m(t);var t}})),r.a.createElement("div",{id:"confirm_password_signUp"},"Retype Password:",r.a.createElement("input",{type:"password",onBlur:function(e){return t=e.target.value,void g(t);var t}})),r.a.createElement("button",{onClick:function(){return U()}}," SIGN UP "),r.a.createElement(E,Object.assign({path:"/"},e),"BACK")))},S=n(50),k=n(51),x=n(52),U=n(53),C=n(54),N=n(55),_=n(56),P=function(e){return r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement(k.a,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",alt:"Card image cap"}),r.a.createElement(x.a,null,r.a.createElement(U.a,null," ",e.name),r.a.createElement(C.a,null,e.username),r.a.createElement(N.a,null,"Place Holder for latest post"),r.a.createElement(_.a,null,"Button"))))},B=function(e){var t=localStorage.getItem("token"),n=Object(a.useState)(""),o=Object(j.a)(n,2);o[0],o[1];Object(a.useEffect)(function(){null===t&&(alert("Please Login to verify your identity\nYou will now be redirected to the Login page."),c())},[t]),Object(a.useEffect)(function(){},[]),Object(a.useEffect)(function(){return function(){console.log("Component did unMount")}},[]);var c=function(){var t=Object(l.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.clear(),e.history.push("/");case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Home Page "),[{name:"user1",username:"Username1"},{name:"user2",username:"Username2"}].map(function(e,t){return r.a.createElement(P,{key:t,name:e.name,username:e.username})}),r.a.createElement("button",{onClick:function(){return c()}}," LOG OUT "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(47);c.a.render(r.a.createElement(function(){return r.a.createElement(b.a,null,r.a.createElement(O.a,{exact:!0,path:"/",component:w}),r.a.createElement(O.a,{path:"/signUp",component:y}),r.a.createElement(O.a,{path:"/home",component:B}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.0ee81bdb.chunk.js.map