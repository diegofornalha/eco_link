"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{7665:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(5893),l=r(7294),a=r(5675),o=r.n(a),s=r(4480),i=r(5496),c=r(7768),d=r(5023);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(i){s=!0,l=i}finally{try{o||null==r.return||r.return()}finally{if(s)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=(0,d.EP)();function x(e){var t=f((0,s.FV)(i.xr),1)[0],r=(0,l.useState)(null),a=r[0],o=r[1],u=e.timeLockEnabled,x=e.setTimeLockEnabled,h=e.setStartAt,g=e.setEndAt;return(0,l.useEffect)((function(){o(m)}),[a]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsxs)("label",{className:"block text-2xl font-bold font-flow",children:["Time Limit",a?" (".concat(a,")"):""]}),(0,n.jsx)(c.r,{disabled:t,checked:u,onChange:function(){u&&(h(null),g(null)),x(!u)},className:(0,d.AK)(u?"bg-drizzle-green":"bg-gray-200","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-drizzle-green"),children:(0,n.jsx)("span",{"aria-hidden":"true",className:(0,d.AK)(u?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200")})})]}),u?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"mt-2 flex flex-col sm:flex-row justify-between gap-x-4 gap-y-2 flex-wrap",children:[(0,n.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,n.jsx)("label",{className:"inline-block w-12 font-flow font-bold",children:"Start"}),(0,n.jsx)("input",{type:"datetime-local",disabled:t,id:"start_at",className:"rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark bg-drizzle-green-ultralight block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300 min-w-[220px]",onChange:function(e){h(new Date(e.target.value))}})]}),(0,n.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,n.jsx)("label",{className:"inline-block w-12 font-flow font-bold",children:"End"}),(0,n.jsx)("input",{type:"datetime-local",disabled:t,id:"end_at",className:"rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark bg-drizzle-green-ultralight block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300 min-w-[220px]",onChange:function(e){g(new Date(e.target.value))}})]})]})}):null]})}var h=r(5985);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(i){s=!0,l=i}finally{try{o||null==r.return||r.return()}finally{if(s)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){var t=b((0,s.FV)(i.lo),2)[1],r=b((0,s.FV)(i.VQ),2)[1];return(0,n.jsxs)("div",{className:"h-12 max-w-[140px] px-3 shadow-sm font-medium text-base text-drizzle-green-dark bg-drizzle-green-light rounded-2xl hover:bg-drizzle-green-dark hover:text-black",children:[(0,n.jsx)("label",{htmlFor:"image-selector",className:"w-full inline-block text-center leading-[48px] ",children:"Imagem \u2b06"}),(0,n.jsx)("input",{id:"image-selector",className:"hidden w-full",type:"file",accept:"image/png, image/jpeg",onChange:function(n){!function(n){if(n.size>h.Z.bannerSizeLimit)return t(!0),void r({type:"exclamation",title:"Image too large",detail:"Should be less than 500KB"});if(n){var l=new FileReader;l.onloadend=function(t){var r=l.result;e.imageSelectedCallback(r,n.size)},l.readAsDataURL(n)}}(n.target.files[0])}})]})}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(i){s=!0,l=i}finally{try{o||null==r.return||r.return()}finally{if(s)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=l.memo((function(e){var t=e.banner;return(0,n.jsx)("div",{className:"w-full rounded-2xl h-[144px] bg-white relative sm:max-w-[460px] ring-1 ring-black ring-opacity-10 overflow-hidden",children:(0,n.jsx)(o(),{src:t,alt:"",className:"rounded-2xl",layout:"fill",objectFit:"cover"})})}));function w(e){var t=y((0,s.FV)(i.xr),1)[0],r=e.banner,l=e.setBanner,a=e.setBannerSize,o=e.setName,c=e.setURL,d=e.setDescription,u=e.timeLockEnabled,f=e.setTimeLockEnabled,m=e.setStartAt,h=e.setEndAt,g=e.NamePlaceholder,b=e.DescriptionPlaceholder,v=1==e.withTimeLimitPicker;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col gap-y-10",children:[(0,n.jsxs)("div",{className:"flex flex-col-reverse gap-y-5 sm:flex-row sm:gap-x-12",children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{className:"block text-2xl font-bold font-flow",children:"Banner"}),(0,n.jsxs)("label",{className:"block text-md font-flow leading-6 mt-2 mb-2",children:["O tamanho do banner n\xe3o deve ser superior a 500 KB. Comprimir\xa0",(0,n.jsx)("a",{href:"https://tinypng.com",target:"_blank",rel:"noopener noreferrer",className:"underline font-bold decoration-drizzle-green decoration-2",children:"AQUI"})," se precisar."]}),(0,n.jsx)(p,{imageSelectedCallback:function(e,t){l(e),a(t)}})]}),(0,n.jsx)(j,{banner:r||"/banner.png"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,n.jsxs)("label",{className:"block text-2xl font-bold font-flow",children:["Nome",(0,n.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("input",{type:"text",name:"name",id:"name",disabled:t,required:!0,className:"bg-drizzle-green-ultralight block w-full border-drizzle-green font-flow text-lg rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark placeholder:text-gray-300",placeholder:g,onChange:function(e){o(e.target.value)}})})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,n.jsx)("label",{className:"block text-2xl font-bold font-flow",children:"Descri\xe7\xe3o"}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("textarea",{rows:4,name:"description",id:"description",disabled:t,className:"focus:ring-drizzle-green-dark focus:border-drizzle-green-dark rounded-2xl bg-drizzle-green-ultralight resize-none block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300",defaultValue:"",spellCheck:!1,placeholder:b,onChange:function(e){d(e.target.value)}})})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,n.jsx)("label",{className:"block text-2xl font-bold font-flow",children:"Link Oficial"}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("input",{type:"url",name:"url",id:"url",disabled:t,pattern:"[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))(?::\\d{2,5})?(?:\\/[^\\s]*)?",className:"focus:ring-drizzle-green-dark focus:border-drizzle-green-dark rounded-2xl bg-drizzle-green-ultralight block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300",placeholder:"https://the.link.you.want.to.add",onChange:function(e){c(e.target.value)}})})]}),v?(0,n.jsx)(x,{timeLockEnabled:u,setTimeLockEnabled:f,setStartAt:m,setEndAt:h}):null]})})}j.displayName="BasicInfoMemozieBanner"},4999:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(5893);function l(e){var t=e.sample||"/ra_sample.csv";return(0,n.jsxs)("div",{className:"shrink flex items-center gap-x-2",children:[(0,n.jsx)("a",{href:t,download:!0,className:"text-drizzle-green-dark text-base font-medium",children:"Sample"}),(0,n.jsxs)("div",{className:"h-12 px-3 shadow-sm font-medium text-base text-drizzle-green-dark bg-drizzle-green-light rounded-2xl hover:bg-drizzle-green-dark hover:text-black",children:[(0,n.jsx)("label",{htmlFor:"csv-selector",className:"hidden sm:inline-block w-full text-center leading-[48px] ",children:"Upload CSV"}),(0,n.jsx)("label",{htmlFor:"csv-selector",className:"inline-block sm:hidden w-full text-center leading-[48px] ",children:"Upload"}),(0,n.jsx)("input",{id:"csv-selector",className:"hidden w-full",type:"file",accept:".csv",onChange:e.onChange})]})]})}},3320:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(5893),l=r(7294),a=r(1355),o=r(8131),s=r(1163),i=r(702);function c(e){var t=(0,s.useRouter)(),r=e.type,c=e.open,d=e.setOpen,u=e.url,f=r||"DROP";return(0,n.jsx)(a.u.Root,{show:c,as:l.Fragment,children:(0,n.jsxs)(o.V,{as:"div",className:"relative z-10",onClose:d,children:[(0,n.jsx)(a.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,n.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:(0,n.jsx)("div",{className:"flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",children:(0,n.jsx)(a.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,n.jsxs)(o.V.Panel,{className:"relative bg-white rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block w-full h-[80px] text-center text-[60px]",children:"\ud83c\udf89"}),(0,n.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,n.jsx)(o.V.Title,{as:"h3",className:"text-2xl leading-6 font-semibold text-gray-900",children:"".concat(f," Created Successfully!")}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center gap-y-4 mt-2",children:[(0,n.jsx)("p",{className:"text-sm text-gray-500",children:"Share ".concat(f," to your community now!")}),(0,n.jsx)(i.Z,{styles:"flex flex-col min-w-[200px] aspect-square justify-center\n                      ring-1 ring-black ring-opacity-5 rounded-3xl overflow-hidden\n                      shadow-[0px_5px_25px_-5px_rgba(0,0,0,0.1)] items-center",qrCodeSize:160,logoSize:16,url:u})]})]})]}),(0,n.jsx)("div",{className:"mt-5 sm:mt-6",children:(0,n.jsx)("button",{type:"button",className:"inline-flex justify-center w-full rounded-2xl border border-transparent shadow-sm px-4 py-2 bg-drizzle-green text-base font-semibold hover:bg-drizzle-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-drizzle-green sm:text-sm",onClick:function(){d(!1),u&&t.push(u)},children:"Go To ".concat(f)})})]})})})})]})})}},3749:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(5893),l=r(8433);function a(e){var t=e.threshold,r=e.setThreshold,a=e.floatMode,o=e.rawFloatInput,s=e.floatEvents,i=e.setFloatEvents,c=e.setFloatGroup,d=e.setFloatEventPairs;return(0,n.jsx)("div",{className:"p-4 sm:p-8 flex flex-col gap-y-10 rounded-3xl border-4 border-drizzle-green-light border-dashed",children:(0,n.jsx)(l.ZP,{mode:a,threshold:t,setThreshold:r,rawFloatInput:o,floatEvents:s,setFloatEvents:i,setFloatGroup:c,setFloatEventPairs:d})})}},9305:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(5893),l=r(4051),a=r.n(l),o=r(7294),s=r(4480),i=r(5496),c=r(4999),d=r(5023);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,r,n,l,a,o){try{var s=e[a](o),i=s.value}catch(c){return void r(c)}s.done?t(i):Promise.resolve(i).then(n,l)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(i){s=!0,l=i}finally{try{o||null==r.return||r.return()}finally{if(s)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var t,r=m((0,s.FV)(i.lo),2)[1],l=m((0,s.FV)(i.VQ),2)[1],u=m((0,s.FV)(i.xr),1)[0],x=e.callback,h=(0,o.useState)(""),g=h[0],b=h[1],p=(0,o.useState)([]),v=p[0],y=p[1],j=(0,o.useState)([]),w=j[0],z=j[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-2xl font-bold font-flow",children:"Addresses"}),(0,n.jsx)("label",{className:"block font-flow text-md leading-6 mt-2 mb-2",children:"For each line, enter one address. Duplicate addresses are not allowed."}),(0,n.jsxs)("div",{className:"mt-1",children:[(0,n.jsx)("textarea",{rows:8,name:"recipients",id:"recipients",className:"focus:ring-drizzle-green-dark focus:border-drizzle-green-dark rounded-2xl bg-drizzle-green-ultralight resize-none block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300",spellCheck:!1,value:g,placeholder:"0xf8d6e0586b0a20c7",onChange:function(e){(v.length>0||w.length>0)&&(y([]),z([])),b(e.target.value)}}),(0,n.jsxs)("div",{className:"flex mt-4 gap-x-2 justify-between",children:[(0,n.jsx)("button",{type:"button",className:(0,d.AK)(u?"bg-drizzle-green-light":"bg-drizzle-green hover:bg-drizzle-green-dark","h-12 w-40 px-6 text-base rounded-2xl font-medium shadow-md text-black"),disabled:u,onClick:(t=a().mark((function e(){var t,n,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=g.trim().length){e.next=4;break}return r(!0),l({type:"exclamation",title:"Invalid Params",detail:"NO addresses provided"}),e.abrupt("return");case 4:return e.t0=m,e.next=7,(0,d.$k)(g.trim());case 7:e.t1=e.sent,t=(0,e.t0)(e.t1,2),n=t[0],o=t[1],y(n),z(o),s=(0,d._p)(n),x({whitelist:s,invalidRecordsCount:o.length});case 15:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(n,l){var a=t.apply(e,r);function o(e){f(a,n,l,o,s,"next",e)}function s(e){f(a,n,l,o,s,"throw",e)}o(void 0)}))}),children:"Process"}),(0,n.jsx)(c.Z,{sample:"r_sample.csv",onChange:function(e){x(null);var t=e.target.files[0],r=new FileReader;r.addEventListener("load",(function(t){var r=t.target.result;b(r),e.target.value=null})),r.readAsText(t)}})]})]})]}),v.length>0||w.length>0?(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-2xl font-bold font-flow",children:"Summary"}),(0,n.jsx)("div",{className:"mt-1 mb-30",children:(0,n.jsxs)("ul",{role:"list",children:[(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:"# of Valid Records"}),(0,n.jsx)("div",{className:"grow"}),(0,n.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:v.length})]})},"valid count"),(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:"# of Invalid Records"}),(0,n.jsx)("div",{className:"grow"}),(0,n.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:w.length})]})},"invalid count")]})})]}):null,w.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-2xl font-bold font-flow",children:"Invalid records"}),(0,n.jsx)("label",{className:"block font-flow text-md leading-8 mt-2",children:"Invalid format or duplicate accounts"}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("textarea",{rows:w.length>8?8:w.length,name:"invalid",id:"invalid",className:"focus:ring-rose-700 focus:border-rose-700 bg-rose-300/10 resize-none block w-full border-rose-700 font-flow text-lg placeholder:text-gray-300",disabled:!0,value:w.reduce((function(e,t){return"".concat(e,"\n").concat(t)}),"").trim(),spellCheck:!1})})]})]})}function h(e){var t=e.callback;return(0,n.jsx)("div",{className:"p-4 sm:p-8 flex flex-col gap-y-10 rounded-3xl border-4 border-drizzle-green-light border-dashed",children:(0,n.jsx)(x,{callback:t})})}}}]);