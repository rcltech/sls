(window.webpackJsonpsls=window.webpackJsonpsls||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/available.000429b6.png"},21:function(e,t,n){e.exports=n.p+"static/media/unavailable.d34a13c1.png"},22:function(e,t,n){e.exports=n.p+"static/media/base.14e814f6.png"},48:function(e,t,n){e.exports=n.p+"static/media/LED_on.af419840.png"},49:function(e,t,n){e.exports=n.p+"static/media/LED_off.86e1d2b6.png"},50:function(e,t,n){e.exports=n.p+"static/media/LED_off_pressed.a2cc5574.png"},51:function(e,t,n){e.exports=n.p+"static/media/LED_on_pressed.9c135189.png"},54:function(e,t,n){e.exports=n.p+"static/media/logo.83c07097.png"},57:function(e,t,n){e.exports=n(95)},62:function(e,t,n){},64:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(19),r=n.n(o),s=(n(62),n(18),n(110)),c=(n(63),n(64),n(26)),l=n.n(c),u=n(44),p=n(6),m=n(4),h=n(7),d=n(8),f=n(9),g=n(45),y=n.n(g),b="https://us-central1-rcsls-2018.cloudfunctions.net/getWasherStatus";var v=function(e){return function(t){function n(e){var t;return Object(p.a)(this,n),(t=Object(h.a)(this,Object(d.a)(n).call(this,e))).state={data:{data:{1:-1,2:-1,3:-1,4:-1}}},t}return Object(f.a)(n,t),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(b);case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement(e,Object.assign({data:this.state.data.data},this.props))}}]),n}(i.a.Component)},E=n(46),w=n(106),j=n(20),O=n.n(j),x=n(21),S=n.n(x),C=n(22),k=n.n(C),W=Object(w.a)(function(e){return{root:{padding:e.spacing(.5,2)}}}),N=function(e){var t=e.status,n=W();return 1===t?i.a.createElement("div",{className:n.root},i.a.createElement("img",{src:O.a,alt:"Washer"})):-1===t?i.a.createElement("div",{className:n.root},i.a.createElement("img",{src:k.a,alt:"Washer"})):i.a.createElement("div",{className:n.root},i.a.createElement("img",{src:S.a,alt:"Washer"}))},B=n(109),L={container:{margin:"5px auto",padding:"5px",border:"1px solid #eee",borderRadius:"5px",display:"inline-flex",width:"100%"},image:{height:"calc(105px + 3vmin)",margin:"auto 5px"},text:{margin:"auto",justifyContent:"center",fontSize:"1em"}},A=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:L.container},i.a.createElement("img",{src:this.props.image,alt:"washer status",style:L.image}),i.a.createElement("p",{style:L.text},this.props.description))}}]),t}(i.a.Component),R="This means the washing machine is not being used, feel free to pick your laundry bag up and do the business!",T="Oops, someone is using the washing machine, be patient and always re-visit this website to check the washers' status",D="This doesn't really mean anything. It tells you that the browser is busy loading the webpage!",z={iconsStyle:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"},titleStyle:{fontSize:"1em"}},_=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:z.iconsStyle},i.a.createElement("h1",{style:z.titleStyle},"1. Washer Status"),i.a.createElement(A,{image:O.a,description:R}),i.a.createElement(A,{image:S.a,description:T}),i.a.createElement(A,{image:k.a,description:D}))}}]),t}(i.a.Component),H={container:{margin:"5px auto",padding:"5px",border:"1px solid #eee",borderRadius:"5px",display:"inline-flex",width:"100%"},image:{borderRadius:"4px",height:"calc(105px + 3vmin)",margin:"auto 5px"},text:{margin:"auto",justifyContent:"center",fontSize:"1em"}},I=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.description;return i.a.createElement("div",{style:H.container},i.a.createElement("img",{src:t,alt:"instruction",style:H.image}),i.a.createElement("p",{style:H.text},n))}}]),t}(i.a.Component),U=n(48),P=n.n(U),J=n(49),F=n.n(J),G=n(50),M=n.n(G),$=n(51),q=n.n($),K="Firstly, the green light you see on the picture indicates the availability of the washing machine. Light on means nobody is using it, hence it should be empty.",Q="Right after pressing the start button on the washing machine, don't forget to press the little black button as well. This will update the washer's status on the website",V="Immediately after you press the button, you should see the green light is now off. This tells you that there is an on-going washing cycle.",X="When you are about to pick your clothes up, don't forget to click on the button again. It again changes the washer's status so its availablity can be seen on the website",Y={container:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"},title:{marginTop:"10px",fontSize:"1em"}},Z=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:Y.container},i.a.createElement("h1",{style:Y.title},"2. User Guide"),i.a.createElement(I,{image:P.a,description:K}),i.a.createElement(I,{image:q.a,description:Q}),i.a.createElement(I,{image:F.a,description:V}),i.a.createElement(I,{image:M.a,description:X}))}}]),t}(i.a.Component),ee=n(111),te=n(107),ne=n(108),ae=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.collapse,n=e.collapseStyles,a=e.textBodyStyles;return i.a.createElement(ee.a,{isOpen:t,style:n},i.a.createElement(te.a,null,i.a.createElement(ne.a,{style:a},i.a.createElement(_,null),i.a.createElement(Z,null))))}}]),t}(i.a.Component),ie=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.collapse,n=e.collapseStyles,a=e.textBodyStyles;return i.a.createElement(ee.a,{isOpen:t,style:n},i.a.createElement(te.a,null,i.a.createElement(ne.a,{style:a},"To report any problems with SLS, please"," ",i.a.createElement("a",{href:"mailto:contact@rctech.club?subject=SLS%20Problem"},"contact us by email"))))}}]),t}(i.a.Component),oe={container:{margin:"1vh auto"},buttonContainer:{marginBottom:"15px"},button:{fontSize:"1em",margin:"0 10px"},collapseStyles:{margin:"10px auto"},textBody:{fontSize:"0.8em"}},re=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={helpCollapse:!1,contactCollapse:!1},n.toggleHelp=function(){n.setState(function(e){return{helpCollapse:!e.helpCollapse,contactCollapse:!1}})},n.toggleContact=function(){n.setState(function(e){return{contactCollapse:!e.contactCollapse,helpCollapse:!1}})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.helpCollapse,n=e.contactCollapse;return i.a.createElement(s.a,{style:oe.container},i.a.createElement("div",{style:oe.buttonContainer},i.a.createElement(B.a,{color:"info",style:oe.button,onClick:this.toggleHelp},"Help"),i.a.createElement(B.a,{color:"warning",style:oe.button,onClick:this.toggleContact},"Report")),i.a.createElement(ae,{collapse:t,collapseStyles:oe.collapseStyles,textBodyStyles:oe.textBody}),i.a.createElement(ie,{collapse:n,collapseStyles:oe.collapseStyles,textBodyStyles:oe.textBody}))}}]),t}(i.a.Component),se=n(54),ce=n.n(se),le=function(e){return Object(E.map)(e,function(e,t){return i.a.createElement("div",{className:"item"},i.a.createElement(N,{key:t,status:e}))})};var ue=v(function(e){var t=e.data;return i.a.createElement("div",{className:"App"},i.a.createElement(s.a,{className:"App-header"},i.a.createElement("div",null,i.a.createElement("img",{className:"logo",src:ce.a,alt:"RCTECH"})),i.a.createElement("div",{className:"header-text"},"Smart Laundry System")),i.a.createElement(s.a,{className:"App-body"},i.a.createElement("div",{className:"container"},le(t)),i.a.createElement(re,null)))}),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(ue,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sls",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/sls","/service-worker.js");pe?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):me(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):me(t,e)})}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.d2425380.chunk.js.map