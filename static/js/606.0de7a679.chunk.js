"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[606],{854:function(e,n,t){t.d(n,{a:function(){return a}});var r=t(8402),i=t(184),a=function(){return(0,i.jsx)(r.Nx,{width:"200",color:"#3f51b5",visible:!0})}},2606:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r,i,a,s,c,o=t(5861),u=t(9439),l=t(7757),d=t.n(l),p=t(7689),f=t(2791),v=t(168),h=t(8617),x=t(1087),j=t(6444),m=t(184),g=(0,j.ZP)(x.rU)(r||(r=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #00008b;\n  }\n"]))),w=function(e){var n=e.to,t=e.children;return(0,m.jsxs)(g,{to:n,children:[(0,m.jsx)(h.jTe,{size:"24"}),t]})},Z=t(7579),_=t(854),b=j.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),y=(j.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),j.ZP.div(s||(s=(0,v.Z)(["\n  display: flex;\n  justify-content: start;\n"])))),k=j.ZP.div(c||(c=(0,v.Z)(["\n  margin-left: 15px;\n"]))),U=function(e){var n=e.title,t=e.vote_average,r=e.overview,i=e.poster_path,a=e.genres,s=e.release_date;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(y,{children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(i),alt:n}),(0,m.jsxs)(k,{children:[(0,m.jsxs)("h2",{children:[n,(0,m.jsxs)("span",{children:[" (",Number.parseInt(s),")"]})]}),(0,m.jsxs)("p",{children:["User Score:",Math.round(10*t),"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:r}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("div",{children:a.map((function(e){return e.name})).join(", ")})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsx)("li",{children:(0,m.jsx)(x.rU,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(x.rU,{to:"reviews",children:"Reviews"})})]}),(0,m.jsx)(p.j3,{})]})},P=function(){var e,n,t=(0,f.useState)(null),r=(0,u.Z)(t,2),i=r[0],a=r[1],s=(0,f.useState)(!1),c=(0,u.Z)(s,2),l=c[0],v=c[1],h=null!==(e=null===(n=(0,p.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",x=(0,p.UO)().movieId;return(0,f.useEffect)((function(){function e(){return(e=(0,o.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,(0,Z.r)(x);case 4:n=e.sent,a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(Error);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]),(0,m.jsxs)("main",{children:[(0,m.jsx)(w,{to:h,children:"Go back"}),l&&(0,m.jsx)(b,{children:(0,m.jsx)(_.a,{})}),i&&(0,m.jsx)(U,{title:i.title,vote_average:i.vote_average,overview:i.overview,poster_path:i.poster_path,genres:i.genres,release_date:i.release_date})]})}},7579:function(e,n,t){t.d(n,{Wf:function(){return o},fC:function(){return l},r:function(){return u}});var r=t(5861),i=t(7757),a=t.n(i),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="95775b42e188d6443a0bfb132dcec5e1",o=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"?api_key=").concat(c));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(c,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=606.0de7a679.chunk.js.map