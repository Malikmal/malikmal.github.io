_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/a9y":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),l=n("7W2i"),o=n("a1gu"),i=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=i(e);if(t){var r=i(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}var u=n("TqRt");t.__esModule=!0,t.default=void 0;var c=u(n("q1tI")),d=u(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function g(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var f=function(e){l(n,e);var t=s(n);function n(){return a(this,n),t.apply(this,arguments)}return r(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:p.error},c.default.createElement(d.default,null,c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:p.h1},e):null,c.default.createElement("div",{style:p.desc},c.default.createElement("h2",{style:p.h2},t,"."))))}}]),n}(c.default.Component);t.default=f,f.displayName="ErrorPage",f.getInitialProps=g,f.origGetInitialProps=g;var p={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"1VCc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("3slx")}])},"20a2":function(e,t,n){e.exports=n("nOHt")},"3slx":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return q})),n.d(t,"default",(function(){return J}));var a=n("q1tI"),r=n.n(a),l=n("20a2"),o=n("eomm"),i=n.n(o),s=n("vUxr"),u=n("6nx/"),c=n.n(u),d=r.a.createElement;function m(e){var t=e.content;return d("div",{className:"max-w-2xl mx-auto"},d("div",{className:c.a.content,dangerouslySetInnerHTML:{__html:t}}))}var g=n("03Ju"),f=n("YFqc"),p=n.n(f),v=r.a.createElement;function h(){return v("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8"},v(p.a,{href:"/"},v("a",{className:"hover:underline"},"Blog")),".")}var x=n("i2FJ"),y=n("65Hy"),b=n("zK7a"),N=r.a.createElement;function _(e){var t=e.children;return N("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",dangerouslySetInnerHTML:{__html:t}})}var E=r.a.createElement;function w(e){var t=e.categories;return E("span",{className:"ml-1"},"under",t.edges.length>0?t.edges.map((function(e,t){return E("span",{key:t,className:"ml-1"},e.node.name)})):E("span",{className:"ml-1"},t.edges.node.name))}var k=r.a.createElement;function I(e){var t=e.title,n=e.coverImage,a=e.date,l=e.author,o=e.categories;return k(r.a.Fragment,null,k(_,null,t),k("div",{className:"hidden md:block md:mb-12"},k(x.a,{author:l})),k("div",{className:"mb-8 md:mb-16 sm:mx-0"},k(b.a,{title:t,coverImage:n})),k("div",{className:"max-w-2xl mx-auto"},k("div",{className:"block md:hidden mb-6"},k(x.a,{author:l})),k("div",{className:"mb-6 text-lg"},"Posted ",k(y.a,{dateString:a}),k(w,{categories:o}))))}var S=r.a.createElement;function C(){return S("hr",{className:"border-accent-2 mt-28 mb-24"})}var R=n("CafY"),F=n("g4pe"),H=n.n(F),T=n("YSmr"),A=r.a.createElement;function M(e){var t=e.tags;return A("div",{className:"max-w-2xl mx-auto"},A("p",{className:"mt-8 text-lg font-bold"},"Tagged",t.edges.map((function(e,t){return A("span",{key:t,className:"ml-4 font-normal"},e.node.name)}))))}var P=r.a.createElement,q=!0;function J(e){var t,n,a,o,u=e.post,c=e.posts,d=e.preview,f=Object(l.useRouter)(),p=null===c||void 0===c?void 0:c.edges;return f.isFallback||null!==u&&void 0!==u&&u.slug?P(R.a,{preview:d},P(s.a,null,P(h,null),f.isFallback?P(_,null,"Loading\u2026"):P(r.a.Fragment,null,P("article",null,P(H.a,null,P("title",null,u.title," | Next.js Blog Example with ",T.a),P("meta",{property:"og:image",content:null===(t=u.featuredImage)||void 0===t||null===(n=t.node)||void 0===n?void 0:n.sourceUrl})),P(I,{title:u.title,coverImage:null===(a=u.featuredImage)||void 0===a?void 0:a.node,date:u.date,author:null===(o=u.author)||void 0===o?void 0:o.node,categories:u.categories}),P(m,{content:u.content}),P("footer",null,u.tags.edges.length>0&&P(M,{tags:u.tags}))),P(C,null),p.length>0&&P(g.a,{posts:p})))):P(i.a,{statusCode:404})}},"6nx/":function(e,t,n){e.exports={content:"post-body_content__Ky8yr"}},eomm:function(e,t,n){e.exports=n("/a9y")}},[["1VCc",0,1,2,3]]]);