(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var s,c=n(7),o=n.n(c),a=n(6),r=n(11),i=n(1),u=n.n(i),l=n(4),b=n.n(l),j=n(0),O=function(e){var t=e.goods;return Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{"data-cy":"Good",children:e},e)}))})},h=n(8),N=n(9),d=n(12),f=n(10),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.className,s=e.onClick;return Object(j.jsx)("button",{type:"button",className:n,onClick:s,children:t})}}]),n}(u.a.PureComponent),p=(n(18),n(19),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]);!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var g=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(s.NONE),u=Object(a.a)(o,2),l=u[0],h=u[1],N=function(e){h(e)},d=l!==s.NONE||n,f=function(e,t){var n=t.sortType,c=t.isReversed,o=Object(r.a)(e);return o.sort((function(e,t){switch(n){case s.ALPHABET:return e.localeCompare(t);case s.LENGTH:return e.length-t.length;default:return 0}})),c&&o.reverse(),o}(p,{isReversed:n,sortType:l});return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)(m,{name:"Sort alphabetically",className:b()("button is-info",{"is-light":l!==s.ALPHABET}),onClick:function(){N(s.ALPHABET)}}),Object(j.jsx)(m,{name:"Sort by length",className:b()("button is-success",{"is-light":l!==s.LENGTH}),onClick:function(){N(s.LENGTH)}}),Object(j.jsx)(m,{name:"Reverse",className:b()("button is-warning",{"is-light":!n}),onClick:function(){c((function(e){return!e}))}}),d&&Object(j.jsx)(m,{name:"Reset",className:"button is-danger is-light",onClick:function(){c(!1),h(s.NONE)}})]}),Object(j.jsx)(O,{goods:f})]})};o.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9a59a33a.chunk.js.map