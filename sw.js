if(!self.define){let s,e={};const n=(n,d)=>(n=new URL(n+".js",d).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(d,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>n(s,r),c={module:{uri:r},exports:a,require:o};e[r]=Promise.all(d.map((s=>c[s]||o(s)))).then((s=>(i(...s),a)))}}define(["./workbox-c80d1b93"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"crowfnd-landing/assets/css/styles.css",revision:"e7792b7d97843dd3e3bdffd799232859"},{url:"crowfnd-landing/assets/images/favicon-32x32.png",revision:"a07f423b8bbf4a50c2c449b96795fcb6"},{url:"crowfnd-landing/assets/images/icon-bookmark.svg",revision:"5b0777273803774337e5b001c3473e43"},{url:"crowfnd-landing/assets/images/icon-check.svg",revision:"b2fbba35d9fbada00f5fa91fc7f0dab5"},{url:"crowfnd-landing/assets/images/icon-close-menu.svg",revision:"7b0ab1a360478af7171ed5783343789d"},{url:"crowfnd-landing/assets/images/icon-close-modal.svg",revision:"a942b4d803063af7f1395db58298636d"},{url:"crowfnd-landing/assets/images/icon-hamburger.svg",revision:"f8b2673b95669637f13c170cc659070c"},{url:"crowfnd-landing/assets/images/logo-mastercraft.svg",revision:"17fbdfc2b65dde3d22652fd0e0fa60b2"},{url:"crowfnd-landing/assets/images/logo.svg",revision:"213a6fb994faca9736132fa9348b8700"},{url:"crowfnd-landing/assets/js/bootstrap.min.js",revision:"259e416ef6833be43801b8b68a93b008"},{url:"crowfnd-landing/assets/js/crowfnd.min.js",revision:"d3032a32581e2a2b8e926964972bd170"},{url:"crowfnd-landing/assets/js/jquery-3.6.0.min.js",revision:"7c14a783dfeb3d238ccd3edd840d82ee"},{url:"crowfnd-landing/assets/js/src/bookmark.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"crowfnd-landing/assets/js/src/global-functions.js",revision:"a84f2ad576f5cddf2b2fe951385d19e1"},{url:"crowfnd-landing/assets/js/src/nav.js",revision:"fddd50846842a913f8d82b7337101f0f"},{url:"crowfnd-landing/assets/js/src/progressbar.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"crowfnd-landing/docu/text.html",revision:"0d9c2135a705ed6f8755e4193da769e3"},{url:"crowfnd-landing/gruntfile.js",revision:"1960d1ad6f10cc3af77472516ad3c6aa"},{url:"crowfnd-landing/index.html",revision:"dcad40455903d60f8e8e170adbc31404"},{url:"img/test-icon.png",revision:"fcf09a661c6d18814e23c40590f09fc0"},{url:"index.html",revision:"f3812eed22c7221e2e457e48035a2678"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map