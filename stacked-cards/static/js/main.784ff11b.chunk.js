(this["webpackJsonpstacked-cards"]=this["webpackJsonpstacked-cards"]||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=(n(19),n(7)),d=n(4),s=n(8);function l(){var e=Object(s.a)(["\n  position: absolute;\n  transition: all 300ms ease-in-out;\n  ","\n"]);return l=function(){return e},e}var u=n(9).a.div(l(),(function(e){return p(e)})),p=function(e){for(var t="",n=0;n<e.nCards;n++)t+=":nth-child(".concat(n+1,"){\n      top: ").concat(-n*e.gapY,"px;\n      left: 0;\n      right: 0;\n      width: ").concat(100-(e.nCards-1-n)*e.gapX,"%;\n      margin: 0 auto;\n      border: 1px solid red;\n      background-color: gray;\n    }"),t+="\n";return console.log(t),t};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=function(e){var t=e.cardsToShow,n=void 0===t?3:t,r=e.items,a=e.delay,c=void 0===a?400:a,s=e.gapX,l=void 0===s?1:s,p=e.gapY,f=void 0===p?4:p,v=e.cardRemovedClassName,g=void 0===v?"stacked-card-remove-active":v;n>r.length&&(n=r.length);var h=o.a.useState(r.slice(r.length-n)),b=Object(d.a)(h,2),y=b[0],O=b[1],w=o.a.useState(-1),j=Object(d.a)(w,2),k=j[0],E=j[1],P=function(){var e=y.slice(),t=e.pop();setTimeout((function(){if(t){var o=r.indexOf(t),a=r[o-n];a&&e.unshift(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a)),O(e)}}),c),t&&E(t.id)},C=y.map((function(t,n){return o.a.createElement(u,{gapX:l,gapY:f,nCards:y.length,"data-testid":"stacked-card-".concat(t.id),onClick:P,key:t.id,className:"".concat(t.id===k?g:""," stacked-card")},t.id,o.a.createElement("div",null,!!e.itemRenderFn&&e.itemRenderFn(t)))}));return o.a.useMemo((function(){return o.a.createElement("div",{style:{position:"relative"}},C)}),[y,k])};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement("div",{style:{marginTop:"100px"}},o.a.createElement(f,{cardRemovedClassName:"transformThis",items:[{id:1,color:"red"},{id:2,color:"green"},{id:3,color:"blue"},{id:4,color:"yellow"},{id:5,color:"red"},{id:6,color:"green"},{id:7,color:"blue"},{id:8,color:"yellow"}],itemRenderFn:function(e){return o.a.createElement("div",null,e.color)},cardsToShow:4})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.784ff11b.chunk.js.map