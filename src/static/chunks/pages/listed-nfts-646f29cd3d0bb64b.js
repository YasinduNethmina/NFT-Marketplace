(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{552:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listed-nfts",function(){return c(6851)}])},6851:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(7294),f=c(8904),g=c(9214);b.default=function(){var a=(0,e.useContext)(f.h).fetchMyNFTsOrCreatedNFTs,b=(0,e.useState)([]),c=b[0],h=b[1],i=(0,e.useState)(!0),j=i[0],k=i[1];return((0,e.useEffect)(function(){a("fetchItemsListed").then(function(a){h(a),k(!1)})},[]),j)?(0,d.jsx)("div",{className:"flexStart min-h-screen",children:(0,d.jsx)(g.aN,{})}):j||0!==c.length?(0,d.jsx)("div",{className:"flex min-h-screen justify-center p-12 sm:px-4",children:(0,d.jsx)("div",{className:"w-full minmd:w-4/5",children:(0,d.jsxs)("div",{className:"mt-4",children:[(0,d.jsx)("h2",{className:"mt-2 ml-4 font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white sm:ml-2",children:"NFTs Listed for Sale"}),(0,d.jsx)("div",{className:"mt-3 flex w-full flex-wrap justify-start md:justify-center",children:c.map(function(a){return(0,d.jsx)(g.aU,{nft:a},"nft-".concat(a.tokenId))})})]})})}):(0,d.jsx)("div",{className:"flexCenter min-h-screen p-16 sm:p-4",children:(0,d.jsx)("h1",{className:"font-poppins text-3xl font-extrabold text-nft-black-1 dark:text-white",children:"No NFTs Listed for Sale"})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=552)}),_N_E=a.O()}])