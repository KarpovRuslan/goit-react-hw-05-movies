"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[304],{7047:function(n,e,t){t.d(e,{e:function(){return x}});var r,a,c,u,i=t(7689),s=t(168),o=t(6444),p=t(1087),f=o.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  gap: 5px;\n  padding: 0;\n"]))),d=o.ZP.li(a||(a=(0,s.Z)(["\n  display: inline-block;\n  width: 100%;\n"]))),l=(0,o.ZP)(p.OL)(c||(c=(0,s.Z)(["\n  display: inline-block;\n  padding: 3px 16px;\n  color: black;\n  text-decoration: none;\n  :hover,\n  :focus {\n    color: #00008b;\n  }\n"]))),v=o.ZP.span(u||(u=(0,s.Z)(["\n  color: #808080;\n"]))),h=t(184),x=function(n){var e=n.movies,t=(0,i.TH)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(f,{children:e.map((function(n){return(0,h.jsx)(d,{children:(0,h.jsxs)(l,{to:"/movies/".concat(n.id),state:{from:t},children:[n.title,(0,h.jsxs)(v,{children:[" (",Number.parseInt(n.release_date),")"]})]})},n.id)}))})})}},304:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,a=t(5861),c=t(9439),u=t(7757),i=t.n(u),s=t(2791),o=t(7579),p=t(7047),f=t(3521),d=t(168),l=t(6444).ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),v=t(184),h=function(){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],u=(0,s.useState)(!1),d=(0,c.Z)(u,2),h=d[0],x=d[1];return(0,s.useEffect)((function(){function n(){return(n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,o.Wf)();case 4:e=n.sent,r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(Error);case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,v.jsxs)("main",{children:[(0,v.jsx)("h1",{children:"Trending today"}),h?(0,v.jsx)(l,{children:(0,v.jsx)(f.a,{})}):(0,v.jsx)(p.e,{movies:t})]})}},7579:function(n,e,t){t.d(e,{Wf:function(){return s},Yc:function(){return d},fC:function(){return p},r:function(){return o},zo:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="95775b42e188d6443a0bfb132dcec5e1",s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.fd9bb077.chunk.js.map