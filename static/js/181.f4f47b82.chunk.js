"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[181],{515:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(689),a=n(439),u=n(179),c=n(791),i=n(184),o=function(){var t=function(t){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),r=n[0],i=n[1];return(0,c.useEffect)((function(){u.zv(t).then((function(t){return i(t)}))}),[t]),{movieCredits:r}}((0,r.UO)().movieId),e=t.movieCredits;return(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{width:100,src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2/".concat(t.profile_path),alt:t.name}),(0,i.jsx)("p",{children:t.name}),(0,i.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}},179:function(t,e,n){n.d(e,{Hg:function(){return o},TP:function(){return p},q5:function(){return d},z1:function(){return s},zv:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="59f1336664fef9f174e58fbaa28590e8",o=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=181.f4f47b82.chunk.js.map