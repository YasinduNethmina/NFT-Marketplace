(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{7392:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resell-nft",function(){return c(5910)}])},5910:function(a,b,c){"use strict";c.r(b);var d=c(4051),e=c.n(d),f=c(5893),g=c(7294),h=c(1163),i=c(9669),j=c.n(i),k=c(8904),l=c(9214);function m(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function n(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){m(f,d,e,g,h,"next",a)}function h(a){m(f,d,e,g,h,"throw",a)}g(void 0)})}}b.default=function(){var a,b=(0,g.useContext)(k.h),c=b.createSale,d=b.isLoadingNFT,i=(0,h.useRouter)(),m=i.query,o=m.tokenId,p=m.tokenURI,q=(0,g.useState)(""),r=q[0],s=q[1],t=(0,g.useState)(""),u=t[0],v=t[1],w=(a=n(e().mark(function a(){var b;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(p){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,j().get(p);case 4:s((b=a.sent.data).price),v(b.image);case 7:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});(0,g.useEffect)(function(){p&&w()},[p]);var x,y=(x=n(e().mark(function a(){return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c(p,r,!0,o);case 2:i.push("/");case 3:case"end":return a.stop()}},a)})),function(){return x.apply(this,arguments)});return d?(0,f.jsx)("div",{className:"flexStart min-h-screen",children:(0,f.jsx)(l.aN,{})}):(0,f.jsx)("div",{className:"flex justify-center p-12 sm:px-4",children:(0,f.jsxs)("div",{className:"w-3/5 md:w-full",children:[(0,f.jsx)("h1",{className:"font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white",children:"Resell NFT"}),(0,f.jsx)(l.II,{inputType:"number",title:"Price",placeholder:"NFT Price",handleClick:function(a){return s(a.target.value)}}),u&&(0,f.jsx)("img",{src:u,className:"mt-4 rounded",width:350}),(0,f.jsx)("div",{className:"mt-7 flex w-full justify-end",children:(0,f.jsx)(l.zx,{btnName:"List NFT",classStyles:"rounded-xl",handleClick:y})})]})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=7392)}),_N_E=a.O()}])