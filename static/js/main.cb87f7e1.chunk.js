(window.webpackJsonpsls=window.webpackJsonpsls||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/available.000429b6.png"},33:function(e,t,a){e.exports=a.p+"static/media/unavailable.d34a13c1.png"},41:function(e,t,a){e.exports=a(73)},46:function(e,t,a){},48:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),o=a.n(c),s=(a(46),a(47),a(87)),i=(a(48),a(14)),l=a.n(i),u=a(26),m=a(27),p=a(7),d=a(28),h=a(29),f=a(37),v=a(30),b=a.n(v),g="https://us-central1-rcsls-2018.cloudfunctions.net/getWasherStatus";var E=function(e){return function(t){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={data:{}},t}return Object(f.a)(a,t),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(g);case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(e,Object.assign({data:this.state.data.data},this.props))}}]),a}(r.a.Component)},w=a(31),y=a(86),j=a(85),O=a(32),k=a.n(O),N=a(33),x=a.n(N),C=Object(j.a)(function(e){return{root:{padding:e.spacing(3,2)}}}),W=function(e){var t=e.status,a=C();return 1===t?r.a.createElement(y.a,{className:a.root},r.a.createElement("img",{src:k.a,alt:"Washer"})):r.a.createElement(y.a,{className:a.root},r.a.createElement("img",{src:x.a,alt:"Washer"}))},S=function(e){return Object(w.map)(e,function(e,t){return r.a.createElement(W,{key:t,status:e})})};var A=E(function(e){var t=e.data;return console.log(t),r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{className:"App-header"},r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:"RCTECH-logo_chubby.png",alt:"RCTECH-logo_chubby"})),r.a.createElement("div",{className:"header-text"},"Smart Laundry System")),S(t),r.a.createElement(s.a,{className:"App-body"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.cb87f7e1.chunk.js.map