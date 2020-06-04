(this.webpackJsonpsls=this.webpackJsonpsls||[]).push([[0],{111:function(e,t,a){e.exports=a(171)},118:function(e,t,a){},120:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(59),r=a(0),o=a.n(r),l=a(47),i=a.n(l),c=a(48),s=a(39),u=a(23),p=a(18),m=a(182),d=a(184),h=a(105),f=Object(d.a)(Object(h.a)({palette:{primary:{main:"#3AB6CC"},secondary:{main:"#25727F"}}})),y=(a(118),a(89)),g=(a(34),a(183)),b=(a(119),a(120),a(49)),v=a(176),E=a(50),w=a.n(E),x=a(51),j=a.n(x),O=a(52),S=a.n(O),C=Object(v.a)((function(e){return{root:{padding:e.spacing(.5,2)}}})),k=function(e){var t=e.status,a=C();return 1===t?o.a.createElement("div",{className:a.root},o.a.createElement("img",{src:w.a,alt:"Washer"})):-1===t?o.a.createElement("div",{className:a.root},o.a.createElement("img",{src:S.a,alt:"Washer"})):o.a.createElement("div",{className:a.root},o.a.createElement("img",{src:j.a,alt:"Washer"}))},B=a(11),W=a(12),A=a(14),N=a(13),R=a(181),T={container:{margin:"5px auto",padding:"5px",border:"1px solid #eee",borderRadius:"5px",display:"inline-flex",width:"100%"},image:{height:"calc(105px + 3vmin)",margin:"auto 5px"},text:{margin:"auto",justifyContent:"center",fontSize:"1em"}},z=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:T.container},o.a.createElement("img",{src:this.props.image,alt:"washer status",style:T.image}),o.a.createElement("p",{style:T.text},this.props.description))}}]),a}(o.a.Component),L="This washing machine is not being used, feel free to pick your laundry bag up and go ahead!",H="Oops, someone is using this washing machine. Be patient, and re-visit this website later.",P="This doesn't really mean anything. It tells you that the browser is busy loading the webpage.",q={iconsStyle:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"},titleStyle:{fontSize:"1em"}},D=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:q.iconsStyle},o.a.createElement("h1",{style:q.titleStyle},"Washer Status"),o.a.createElement(z,{image:w.a,description:L}),o.a.createElement(z,{image:j.a,description:H}),o.a.createElement(z,{image:S.a,description:P}))}}]),a}(o.a.Component),F=a(185),U=a(178),_=a(179),I=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){var e=this.props,t=e.collapse,a=e.collapseStyles,n=e.textBodyStyles;return o.a.createElement(F.a,{isOpen:t,style:a},o.a.createElement(U.a,null,o.a.createElement(_.a,{style:n},o.a.createElement(D,null))))}}]),a}(o.a.Component),J=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){var e=this.props,t=e.collapse,a=e.collapseStyles,n=e.textBodyStyles;return o.a.createElement(F.a,{isOpen:t,style:a},o.a.createElement(U.a,null,o.a.createElement(_.a,{style:n},"To report any problems with SLS, please"," ",o.a.createElement("a",{href:"mailto:contact@rctech.club?subject=SLS%20Problem"},"contact us by email"),".")))}}]),a}(o.a.Component),G={container:{display:"grid",gridTemplateColumns:"30% 70%",width:"100%",margin:"20px auto",padding:"10px",border:"1px solid #eee",borderRadius:"5px"},image:{borderRadius:"50%",maxHeight:"calc(105px + 3vmin)",maxWidth:"100%",margin:"auto"},text:{textAlign:"left",fontSize:"1em",display:"block",justifyContent:"center",margin:"auto 10px"},name:{fontWeight:"800"}},Q=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){var e=this.props.data;return o.a.createElement("div",{style:G.container},o.a.createElement("img",{src:e.image,alt:"member",style:G.image}),o.a.createElement("div",{style:G.text},o.a.createElement("div",{style:G.name},e.name),o.a.createElement("div",null,e.role)))}}]),a}(o.a.Component),$=a(91),K=a.n($),M=a(92),V=a.n(M),X=a(93),Y=a.n(X),Z=a(94),ee=a.n(Z),te=a(95),ae=a.n(te),ne=a(96),re=a.n(ne),oe={container:{width:"100%",margin:"auto"},titleStyle:{fontSize:"1.5em"}},le={utkarsh:{name:"Utkarsh Goel",image:ee.a,role:"Electronics engineer & Full-stack developer"},sean:{name:"Sean Chok",image:V.a,role:"Hardware engineer & Front-end developer"},welvin:{name:"Welvin Bun",image:re.a,role:"Front-end developer"},gela:{name:"Angela Park",image:K.a,role:"Designer"},sid:{name:"Siddhant Bagri",image:Y.a,role:"Designer"},waqas:{name:"Waqas Ali",image:ae.a,role:"External contributor"}},ie=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:oe.container},o.a.createElement("h1",{style:oe.titleStyle},"Our Team"),(e=le,Object(b.map)(e,(function(e,t){return o.a.createElement(Q,{key:t,data:e})}))));var e}}]),a}(o.a.Component),ce=o.a.createElement("div",null,o.a.createElement("p",null,"The Smart Laundry System aims to help R.C. Lee hall residents by tracking the availability of laundry machines. Quite often when we are about to do our laundry, we find all of the machines are being used. So, RC Tech Club has come out with a simple solution to tackle this issue. We have integrated light sensors that would detect the status of each washer, and connected them to this website. Now everyone can easily find out if there's an available washer when they want to do laundry."," "),o.a.createElement("p",null,"As our product development team always seeks for improvement, you are welcomed to leave any comments or suggestions by sending us an email in the 'Report' section. For those who are interested in building a similar system, checkout our ",o.a.createElement("a",{href:"https://github.com/rcltech/sls"},"github project"),".")),se={container:{width:"100%",margin:"auto",marginBottom:"20px"},titleStyle:{fontSize:"1.5em"},descriptionStyle:{padding:"10px",border:"1px solid #eee",borderRadius:"5px",fontSize:"1em"}},ue=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:se.container},o.a.createElement("h1",{style:se.titleStyle},"Product Description"),o.a.createElement("div",{style:se.descriptionStyle},o.a.createElement("div",null,ce)))}}]),a}(o.a.Component),pe=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){var e=this.props,t=e.collapse,a=e.collapseStyles,n=e.textBodyStyles;return o.a.createElement(F.a,{isOpen:t,style:a},o.a.createElement(U.a,null,o.a.createElement(_.a,{style:n},o.a.createElement(ue,null),o.a.createElement(ie,null))))}}]),a}(o.a.Component),me={container:{margin:"1vh auto"},buttonContainer:{maxWidth:"350px",margin:"auto",marginBottom:"15px",display:"flex",flexWrap:"nowrap",justifyContent:"space-around"},button:{fontSize:"1em"},collapseStyles:{margin:"10px auto"},textBody:{fontSize:"0.8em"}},de=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={helpCollapse:!1,contactCollapse:!1,aboutCollapse:!1},e.toggleHelp=function(){e.setState((function(e){return{helpCollapse:!e.helpCollapse,contactCollapse:!1,aboutCollapse:!1}}))},e.toggleContact=function(){e.setState((function(e){return{helpCollapse:!1,contactCollapse:!e.contactCollapse,aboutCollapse:!1}}))},e.toggleAbout=function(){e.setState((function(e){return{helpCollapse:!1,contactCollapse:!1,aboutCollapse:!e.aboutCollapse}}))},e}return Object(W.a)(a,[{key:"render",value:function(){var e=this.state,t=e.helpCollapse,a=e.contactCollapse,n=e.aboutCollapse;return o.a.createElement(g.a,{style:me.container},o.a.createElement("div",{style:me.buttonContainer},o.a.createElement(R.a,{color:"info",style:me.button,onClick:this.toggleHelp},"Help"),o.a.createElement(R.a,{color:"warning",style:me.button,onClick:this.toggleContact},"Report"),o.a.createElement(R.a,{color:"success",style:me.button,onClick:this.toggleAbout},"About")),o.a.createElement(I,{collapse:t,collapseStyles:me.collapseStyles,textBodyStyles:me.textBody}),o.a.createElement(J,{collapse:a,collapseStyles:me.collapseStyles,textBodyStyles:me.textBody}),o.a.createElement(pe,{collapse:n,collapseStyles:me.collapseStyles,textBodyStyles:me.textBody}))}}]),a}(o.a.Component),he=a(97),fe=a.n(he),ye=a(69),ge=a(68);function be(){var e=Object(y.a)(["\n  query {\n    washers {\n      id\n      in_use\n    }\n  }\n"]);return be=function(){return e},e}var ve=Object(ye.a)(be());var Ee=function(){var e=Object(r.useState)({1:-1,2:-1,3:-1,4:-1}),t=Object(n.a)(e,2),a=t[0],l=t[1],i=Object(ge.a)(ve,{fetchPolicy:"network-only"}),c=i.data,s=i.error;return s&&console.log(s),Object(r.useEffect)((function(){if(c&&c.washers){var e={};c.washers.forEach((function(t){return e[t.id]=t.in_use?1:0})),l(e)}}),[c]),o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{className:"App-header"},o.a.createElement("div",null,o.a.createElement("a",{href:"http://rctech.club",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"logo",src:fe.a,alt:"RCTECH"}))),o.a.createElement("div",{className:"header-text"},"Smart Laundry System")),o.a.createElement(g.a,{className:"App-body"},o.a.createElement("div",{className:"container"},function(e){return Object(b.map)(e,(function(e,t){return o.a.createElement("div",{key:t,className:"item"},o.a.createElement(k,{status:e}))}))}(a)),o.a.createElement(de,null)))},we=a(102),xe=a.n(we),je=(a(150),a(103)),Oe=a.n(je),Se=a(104),Ce=a.n(Se),ke=Oe()({loading:{position:"fixed",top:"50%",left:"50%",margin:"-".concat(40,"px 0px 0px -").concat(40,"px")}}),Be=function(){var e=ke(),t=Ce()();return o.a.createElement(xe.a,{className:e.loading,type:"Circles",color:t.palette.primary.main,height:80,width:80})},We=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ne=function(){var e=Object(r.useState)(void 0),t=Object(n.a)(e,2),a=t[0],l=t[1];return Object(r.useEffect)((function(){var e=new c.a({uri:"https://phoenix.rctech.club/graphql"}),t=new s.a;t.writeData({data:{}});var a=new u.a({cache:t,link:e});l(a)}),[]),a?o.a.createElement(p.a,{client:a},o.a.createElement(Ee,null)):o.a.createElement(Be,null)},Re=function(){return o.a.createElement(m.a,{theme:f},o.a.createElement(Ne,null))};i.a.render(o.a.createElement(Re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");We?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()},50:function(e,t,a){e.exports=a.p+"static/media/available.000429b6.png"},51:function(e,t,a){e.exports=a.p+"static/media/unavailable.d34a13c1.png"},52:function(e,t,a){e.exports=a.p+"static/media/base.14e814f6.png"},91:function(e,t,a){e.exports=a.p+"static/media/gela.89e9a600.png"},92:function(e,t,a){e.exports=a.p+"static/media/sean.a5035cfd.jpg"},93:function(e,t,a){e.exports=a.p+"static/media/sid.c4231d8c.png"},94:function(e,t,a){e.exports=a.p+"static/media/utkarsh.96b40aec.png"},95:function(e,t,a){e.exports=a.p+"static/media/waqas.4eda934a.png"},96:function(e,t,a){e.exports=a.p+"static/media/welvin.6cc6bc96.png"},97:function(e,t,a){e.exports=a.p+"static/media/logo.83c07097.png"}},[[111,1,2]]]);
//# sourceMappingURL=main.bec02239.chunk.js.map