!function(){"use strict";var e,t,n,r,a,o={},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var n=d[e]={exports:{}};return o[e].call(n.exports,n,n.exports,f),n.exports}f.m=o,e=[],f.O=function(t,n,r,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var d=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(f.O).every((function(e){return f.O[e](n[c])}))?n.splice(c--,1):(d=!1,a<o&&(o=a));if(d){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return"assets/js/"+({88:"v-3706649a",229:"v-44426a34",1001:"v-2b9d3ce6",1685:"v-14ac19b5",2509:"v-8daa1a0e",2632:"v-6a008fd2",3327:"v-621628ba",3631:"v-5c167f62",3737:"v-2d0ad528",5006:"v-778bf293",5152:"v-35dfb0b8",5616:"v-8bdd8074",5682:"v-1ea0fb46",5840:"v-9776bd9c",5862:"v-952a5aea",6090:"v-00a16884",6103:"v-35e09821",6155:"v-62e6430f",7475:"v-4d96d015",7926:"v-43288db3",8195:"v-1fdc817c",8516:"v-44d0342c",8840:"v-5a5505fa",8928:"v-4ee9c1d5",9275:"v-0de0ac79",9349:"v-42a9baa6",9807:"v-fffb8e28",9892:"v-47357bdb"}[e]||e)+"."+{21:"6a820886",88:"d9eb2dbb",229:"5578566d",306:"2d0bc379",326:"0a1a1113",717:"a4ef0edc",1001:"4f5b52e2",1227:"540694d0",1500:"11595f6c",1685:"45755d55",1891:"cd936a26",2509:"d39f61bc",2632:"d9de635d",2762:"6645cd38",3293:"465226de",3327:"9ff378d2",3631:"2af76d88",3676:"842650af",3737:"34d88345",4038:"3d0c3d71",4871:"35146e2c",4876:"50e24040",5006:"8f808cbf",5152:"a0d0ae9b",5515:"a9e4e977",5519:"93d041a0",5616:"49bbbba3",5682:"c39500da",5840:"287e3cc6",5862:"3f01415b",6090:"5abfbc42",6103:"6a983255",6110:"73909144",6155:"feedd60c",7230:"a8e45fd6",7475:"b4d5ca6e",7682:"83f89391",7926:"38f88098",8195:"ae3fa48c",8491:"07787d62",8516:"902f91c9",8840:"9e5a520e",8928:"9478b2b7",9056:"52ec41dd",9197:"087d97eb",9275:"a02d9273",9349:"bfcd104b",9807:"872e6d95",9892:"1b09afed"}[e]+".js"},f.miniCssF=function(e){return"assets/css/"+e+".styles."+{306:"2d0bc379",1227:"540694d0",1500:"11595f6c",1891:"cd936a26",3676:"842650af",4871:"35146e2c",5515:"a9e4e977",6110:"73909144",7230:"a8e45fd6",7682:"83f89391"}[e]+".css"},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="documents:",f.l=function(e,r,a,o){if(t[e])t[e].push(r);else{var d,c;if(void 0!==a)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var s=i[u];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+a){d=s;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",n+a),d.src=e),t[e]=[r];var l=function(n,r){d.onerror=d.onload=null,clearTimeout(v);var a=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((function(e){return e(r)})),n)return n(r)},v=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),c&&document.head.appendChild(d)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/Different-UI/",r=function(e){return new Promise((function(t,n){var r=f.miniCssF(e),a=f.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(d=n[r]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(a===e||a===t))return d}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var d;if((a=(d=o[r]).getAttribute("data-href"))===e||a===t)return d}}(r,a))return t();!function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var d=o&&("load"===o.type?"missing":o.type),f=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=d,c.request=f,a.parentNode.removeChild(a),r(c)}},a.href=t,document.head.appendChild(a)}(e,a,t,n)}))},a={523:0},f.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{306:1,1227:1,1500:1,1891:1,3676:1,4871:1,5515:1,6110:1,7230:1,7682:1}[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={523:0,2512:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(1(227|500|891)|2512|306|3676|4871|523|5515|6110|7230|7682)$/.test(t))e[t]=0;else{var a=new Promise((function(n,a){r=e[t]=[n,a]}));n.push(r[2]=a);var o=f.p+f.u(t),d=new Error;f.l(o,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,r[1](d)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],d=n[1],c=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(r in d)f.o(d,r)&&(f.m[r]=d[r]);if(c)var u=c(f)}for(t&&t(n);i<o.length;i++)a=o[i],f.o(e,a)&&e[a]&&e[a][0](),e[o[i]]=0;return f.O(u)},n=self.webpackChunkdocuments=self.webpackChunkdocuments||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();