(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(2),r=n.n(c),l=(n(17),n(6)),o=n(7),u=n(10),s=n(8),m=n(11),f=n(3),y=(n(19),n(1)),d=n(9),h=new Audio("./MM_ClockTower_Bell.wav"),v=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(u.a)(this,Object(s.a)(t).call(this,e)),Object(y.f)(Object(f.a)(Object(f.a)(n)),{cycleStats:{},timeLeft:0,dayOrNight:""}),n.timeInterval=null,n.updateCetusCycle(),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.cycleStats&&i.a.createElement("div",{className:"cycle-stats"},i.a.createElement("p",null,"Currently it is: ",this.dayOrNight),i.a.createElement("p",null,"Time left:"," ",0!==this.timeLeft?function(e){var t=(e=(e-e%1e3)/1e3)%60,n=(e=(e-t)/60)%60;return(e-n)/60+":"+(n<10?"0"+n:n)+":"+(t<10?"0"+t:t)}(this.timeLeft):"awaiting update..."))}},{key:"updateCetusCycle",value:function(){var e=this;fetch("https://api.warframestat.us/pc/cetusCycle").then(function(e){return e.json()}).then(function(t){e.cycleStats=t,t&&!1===t.isDay&&"day"===e.dayOrNight&&h.play(),e.cycleStats&&(e.dayOrNight=e.cycleStats.isDay?"day":"night"),console.log(e.cycleStats,new Date),e.updateTimeLeft(),e.timeInterval&&clearInterval(e.timeInterval),e.timeLeft<0?(clearInterval(e.timeInterval),e.timeLeft=0,e.timeInterval=setInterval(function(){e.updateCetusCycle()},2e4)):e.timeInterval=setInterval(function(){e.updateTimeLeft(),e.timeLeft<0&&(clearInterval(e.timeInterval),e.updateCetusCycle())},250)}).catch(function(){setTimeout(function(){e.updateCetusCycle()},3e4)})}},{key:"updateTimeLeft",value:function(){this.timeLeft=new Date(this.cycleStats.expiry).getTime()-Date.now()}}]),t}(a.Component);var p=Object(d.a)(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.fd3a1361.chunk.js.map