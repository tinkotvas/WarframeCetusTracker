(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(43)},33:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),l=n.n(r),s=(n(33),n(15)),c=n(16),o=n(26),u=n(17),m=n(25),d=n(8),y=n(18),h=(n(35),n(37),n(3)),f=n(19),b=n(45),v=n(46),p=n(47),w=n(48),E=n(20);function g(){var e=Object(y.a)(["\n  list-style: none;\n  padding: 0;\n  font-size: 0.9rem;\n  color: #bbbbbb;\n"]);return g=function(){return e},e}var C=new Audio("./MM_ClockTower_Bell.wav"),j=E.a.ul(g()),O=function(e){function t(e){var n;return Object(s.a)(this,t),n=Object(o.a)(this,Object(u.a)(t).call(this,e)),Object(h.f)(Object(d.a)(Object(d.a)(n)),{cycleStats:{},timeLeft:0,dayOrNight:"",soundEnabled:!0,bounties:[],bellPlayed:!1,solarisBounties:[]}),n.timeInterval=null,n.updateCetusCycle(),setInterval(function(){0===n.bounties.length&&n.updateCetusCycle()},6e4),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.cycleStats&&i.a.createElement("div",null,i.a.createElement("div",{className:"cycle-stats"},i.a.createElement("p",null,"Currently it is: ",this.dayOrNight),i.a.createElement("p",null,"Time left:"," ",0!==this.timeLeft?function(e){var t=(e=(e-e%1e3)/1e3)%60,n=(e=(e-t)/60)%60;return(e-n)/60+":"+(n<10?"0"+n:n)+":"+(t<10?"0"+t:t)}(this.timeLeft):"awaiting update..."),i.a.createElement(b.a,{type:"switch",id:"soundToggle",name:"soundToggle",label:"Enable sound on nightfall",defaultChecked:!0,onChange:function(t){e.soundEnabled=t.currentTarget.checked}})),i.a.createElement("div",null,i.a.createElement(v.a,{className:"text-center"},i.a.createElement("h4",{className:"mt-5 mb-2"},"Cetus Bounties"),i.a.createElement(p.a,{className:"mt-4"},this.bounties&&Array.isArray(this.bounties.jobs)&&this.bounties.jobs.map(function(e,t){return i.a.createElement(w.a,{key:t},i.a.createElement("h5",null,e.type),Array.isArray(e.rewardPool)&&i.a.createElement(j,null,e.rewardPool.map(function(e,t){return i.a.createElement("li",{key:t},e)})))}))),i.a.createElement(v.a,{className:"text-center"},i.a.createElement("h4",{className:"mt-5 mb-2"},"Fortuna Bounties"),i.a.createElement(p.a,{className:"mt-4"},this.solarisBounties&&Array.isArray(this.solarisBounties.jobs)&&this.solarisBounties.jobs.map(function(e,t){return i.a.createElement(w.a,{key:t},i.a.createElement("h5",null,e.type),Array.isArray(e.rewardPool)&&i.a.createElement(j,null,e.rewardPool.map(function(e,t){return i.a.createElement("li",{key:t},e)})))})))))}},{key:"updateCetusCycle",value:function(){var e=this;fetch("https://api.warframestat.us/pc").then(function(e){return e.json()}).then(function(t){var n=t.cetusCycle;e.cycleStats=n,e.bellPlayed=!1,e.cycleStats&&(e.dayOrNight=e.cycleStats.isDay?"day":"night"),console.log(e.cycleStats,new Date),e.updateTimeLeft(),e.timeInterval&&clearInterval(e.timeInterval),e.timeLeft<0?(clearInterval(e.timeInterval),e.timeLeft=0,e.timeInterval=setInterval(function(){e.updateCetusCycle()},2e4)):e.timeInterval=setInterval(function(){e.updateTimeLeft(),e.timeLeft<0&&(clearInterval(e.timeInterval),e.updateCetusCycle())},250);try{var a=t.syndicateMissions.find(function(e){return"Ostrons"===e.syndicate});e.bounties=a,console.log(t.syndicateMissions);var i=t.syndicateMissions.find(function(e){return"Solaris United"===e.syndicate});e.solarisBounties=i}catch(r){console.warn("Bounties not found")}}).catch(function(){setTimeout(function(){e.updateCetusCycle()},3e4)})}},{key:"updateTimeLeft",value:function(){this.timeLeft=new Date(this.cycleStats.expiry).getTime()-Date.now(),this.cycleStats&&"day"===this.dayOrNight&&this.soundEnabled&&this.timeLeft<5e3&&this.timeLeft>0&&!this.bellPlayed&&(C.play(),this.bellPlayed=!0)}}]),t}(a.Component);var k=Object(f.a)(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.8d28cf69.chunk.js.map