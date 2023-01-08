(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{7096:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-nft",function(){return c(1266)}])},1266:function(a,b,c){"use strict";c.r(b);var d=c(4051),e=c.n(d),f=c(5893),g=c(7294),h=c(1163),i=c(5162),j=c(5675),k=c(425),l=c(8904),m=c(9214),n=c(8337);function o(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function q(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){p(a,b,c[b])})}return a}b.default=function(){var a,b,c=(0,g.useState)(null),d=c[0],p=c[1],r=(0,g.useState)({price:"",name:"",description:""}),s=r[0],t=r[1],u=(0,k.F)().theme,v=(0,g.useContext)(l.h),w=v.isLoadingNFT,x=v.uploadToIPFS,y=v.createNFT,z=(0,h.useRouter)(),A=(0,g.useCallback)((a=e().mark(function a(b){var c;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x(b[0]);case 2:p(c=a.sent);case 4:case"end":return a.stop()}},a)}),b=function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){o(f,d,e,g,h,"next",a)}function h(a){o(f,d,e,g,h,"throw",a)}g(void 0)})},function(a){return b.apply(this,arguments)}),[]),B=(0,i.uI)({onDrop:A,accept:"image/*",maxSize:5e6}),C=B.getRootProps,D=B.getInputProps,E=B.isDragActive,F=B.isDragAccept,G=B.isDragReject,H=(0,g.useMemo)(function(){return"dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed ".concat(E&&"border-file-active"," ").concat(E&&"border-file-accept"," ").concat(G&&"border-file-reject")},[F,E,G]);return w?(0,f.jsx)("div",{className:"flexStart min-h-screen",children:(0,f.jsx)(m.aN,{})}):(0,f.jsx)("div",{className:"flex justify-center p-12 sm:px-4",children:(0,f.jsxs)("div",{className:"w-3/5 md:w-full",children:[(0,f.jsx)("h1",{className:"flex-1 font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white sm:mb-4 minlg:text-4xl",children:"Create new NFT"}),(0,f.jsxs)("div",{className:"mt-16 ",children:[(0,f.jsx)("p",{className:"font-poppins text-xl font-semibold text-nft-black-1 dark:text-white",children:"Upload File"}),(0,f.jsx)("div",{className:"mt-4",children:(0,f.jsxs)("div",q({},C(),{className:H,children:[(0,f.jsx)("input",q({},D())),(0,f.jsx)("div",{className:"flexCenter flex-col text-center"}),(0,f.jsx)("p",{className:"font-poppins text-xl font-semibold text-nft-black-1 dark:text-white",children:"JPG, PNG, GIF, SVG, WEBM Max 100mb."}),(0,f.jsx)("div",{className:"my-12 flex w-full justify-center",children:(0,f.jsx)(j.default,{src:n.Z.upload,width:100,height:100,objectFit:"contain",alt:"file upload",className:"light"===u&&"invert"})}),(0,f.jsx)("p",{className:"font-poppins text-sm font-semibold text-nft-black-1 dark:text-white",children:"Drag and Drop File"}),(0,f.jsx)("p",{className:"mt-2 font-poppins text-sm font-semibold text-nft-black-1 dark:text-white",children:"or Browse media on your device"})]}))}),d&&(0,f.jsx)("aside",{children:(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:d,className:"mx-auto mt-12 flex h-1/2 w-1/2",alt:"asset_file"})})})]}),(0,f.jsx)(m.II,{inputType:"input",title:"Name",placeholder:"NFT Name",handleClick:function(a){t(q({},s,{name:a.target.value}))}}),(0,f.jsx)(m.II,{inputType:"textarea",title:"Description",placeholder:"NFT Description",handleClick:function(a){t(q({},s,{description:a.target.value}))}}),(0,f.jsx)(m.II,{inputType:"number",title:"Price",placeholder:"NFT Price",handleClick:function(a){t(q({},s,{price:a.target.value}))}}),(0,f.jsx)("div",{className:"mt-7 flex w-full justify-end",children:(0,f.jsx)(m.zx,{btnName:"Create NFT",className:"rounded-xl",handleClick:function(){return y(s,d,z)}})})]})})}}},function(a){a.O(0,[162,774,888,179],function(){return a(a.s=7096)}),_N_E=a.O()}])