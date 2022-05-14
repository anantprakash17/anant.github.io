/*! For license information please see component---src-templates-index-js-f8022b0158f1054bcea6.js.LICENSE.txt */
(self.webpackChunkdigital_resume=self.webpackChunkdigital_resume||[]).push([[332],{5566:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var n,a=e.attr,s=e.size,l=e.title,c=o(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(a)}},8401:function(e){var t;t=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),s=n(3),i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a.initializer.load(this,n,t),this.begin()}return r(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),a=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=s.htmlParser.typeHtmlChars(e,t,n);var r=0,i=e.substr(t);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var o=1;o+=(i=/\d+/.exec(i)[0]).length,r=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+o),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==e.substr(t+a).charAt(0)&&(a++,!(t+a>e.length)););var l=e.substring(0,t),c=e.substring(l.length+1,t+a),u=e.substring(t+a+1);e=l+c+u,a--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,a),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var r=e.substr(0,t);this.replaceText(r),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=s.htmlParser.backSpaceHtmlChars(e,t,n);var r=e.substr(0,t);if(n.replaceText(r),n.smartBackspace){var a=n.strings[n.arrayPos+1];a&&r===a.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),r)}else this.setPauseStatus(e,t,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),o=(r=i)&&r.__esModule?r:{default:r},l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return s(e,[{key:"load",value:function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=a({},o.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var r=Array.prototype.slice.apply(e.stringsElement.children),s=r.length;if(s)for(var i=0;i<s;i+=1){var l=r[i];e.strings.push(l.innerHTML.trim())}}for(var i in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[i]=i;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){var t="data-typed-js-css";if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(t,!0);var r="";e.showCursor&&(r+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(r+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=r,document.body.appendChild(n))}}}]),e}();t.default=l;var c=new l;t.initializer=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if("<"===r||"&"===r){var a="";for(a="<"===r?">":";";e.substr(t+1).charAt(0)!==a&&!(1+ ++t>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if(">"===r||";"===r){var a="";for(a=">"===r?"<":"&";e.substr(t-1).charAt(0)!==a&&!(--t<0););t--}return t}}]),e}();t.default=r;var a=new r;t.htmlParser=a}])},e.exports=t()},9828:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(7294),a=n(5186),s=function(){return r.createElement(a.q,null,r.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"}))},i=n(5697),o=(i.string.isRequired,(0,i.shape)({currency:i.string.isRequired,default:i.number.isRequired,max:i.number.isRequired,min:i.number.isRequired}).isRequired,i.string.isRequired,i.string.isRequired,i.string,i.bool.isRequired,(0,i.shape)({childImageSharp:i.object.isRequired,publicURL:i.string.isRequired}),i.string.isRequired,i.string.isRequired,i.string.isRequired,i.string.isRequired,i.bool.isRequired,(0,i.arrayOf)(i.string).isRequired,(0,i.arrayOf)(i.string).isRequired,i.string.isRequired,i.string,(0,i.oneOf)(["github","website"]),(0,i.shape)({childImageSharp:i.object.isRequired}),i.string.isRequired,i.string,(0,i.arrayOf)(i.string),i.string,(0,i.oneOf)(["behance","dribbble","facebook","github","goodreads","instagram","linkedin","medium","producthunt","twitter","youtube","xing"]),i.string,i.string.isRequired,i.string,i.string,i.string,function(e){var t=e.name;e.showThemeLogo;return r.createElement("footer",{className:"bg-front mt-16 pt-8 pb-16"},r.createElement("div",{className:"md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center"},r.createElement("div",{className:"w-2/3 text-back-light font-header text-xs"},r.createElement("b",null,"© ",(new Date).getFullYear()," ",t,".")," ","All rights reserved.")))}),l=n(5971),c=function(e){var t=e.initials;return r.createElement("header",{className:"flex justify-between p-4 lg:px-8"},r.createElement("span",{className:"inline-flex w-14 h-14 lg:mt-4 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full"},t),r.createElement("a",{className:"flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150",href:"mailto:anantprakash92@gmail.com"},r.createElement(l.SRX,{className:"inline-block h-6 w-6 lg:hidden"}),r.createElement("span",{className:"hidden lg:block"},"Contact me")))},u=function(e){var t=e.about;return r.createElement(r.Fragment,null,r.createElement("h5",{className:"font-header font-semibold text-front text-sm uppercase mb-3"},"About"),r.createElement("div",{className:"font-text text-sm pb-12 leading-normal whitespace-pre-line"},t))},m=n(3217),p=function(e){var t=e.icon;return r.createElement("span",{className:"absolute right-0 bottom-0 mb-5 mr-5 text-back"},"github"===t?r.createElement(l.hJX,{className:"w-6 h-6"}):r.createElement(l.Phk,{className:"w-6 h-6"}))},f=function(e){var t=e.status;return r.createElement("li",{className:"inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back"},r.createElement("span",{className:"inline-flex w-2 h-2 rounded-full mr-2 "+("live"===t?"bg-green-500":"bg-red-500")}),"Status: ",t)},d=function(e){var t=e.tags;return r.createElement(r.Fragment,null,t.map((function(e){return r.createElement("li",{className:"inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back",key:e},e)})))},h=function(e){var t=e.name,n=e.image,a=e.url,s=e.description,i=e.status,o=e.tags,l=e.icon;return r.createElement("div",{className:"border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6"},n&&r.createElement("div",{className:"w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0"},r.createElement(m.G,{image:n.childImageSharp.gatsbyImageData,alt:t})),r.createElement("div",{className:"lg:flex-1"},r.createElement("h4",{className:"font-bold"},t),a&&r.createElement("a",{className:"text-front underline break-all hover:opacity-75 transition-opacity duration-150",href:a,rel:"noreferrer noopener",target:"_blank"},a),r.createElement("p",{className:"w-full py-4 whitespace-pre-line"},s),r.createElement("ul",{className:"pr-2"},i&&r.createElement(f,{status:i}),o&&r.createElement(d,{tags:o})),l&&r.createElement(p,{icon:l})))},g=function(e){var t=e.projects;return r.createElement(r.Fragment,null,r.createElement("h5",{className:"font-header font-semibold text-front text-sm uppercase mb-3"},"Projects"),t.map((function(e,t){return r.createElement(h,Object.assign({key:e.name+"_"+t},e))})))},y=function(e){var t=e.skill;e.i;return r.createElement("div",null,r.createElement("li",{className:"flex shadow-lg h-50 w-50 justify-center items-center rounded-full bg-gradient-to-r from-skill-1 to-skill-2 bg-opacity-25"},r.createElement("div",{className:"rounded-full h-24 w-24 text-sm break-word px-2 text-black font-black uppercase flex items-center justify-center"},t)))},b=function(e){var t=e.skills;return r.createElement(r.Fragment,null,r.createElement("h5",{className:"font-header font-semibold text-front text-sm uppercase mb-3"},"Top skills"),r.createElement("ul",{className:"flex flex-wrap grid grid-cols-3 gap-2 md:gap-4"},t.map((function(e,t){return r.createElement(y,{skill:e,key:e,i:t+1})}))))},v=function(e){var t=e.profile;return r.createElement("div",{className:"flex pb-8"},r.createElement("div",{className:"w-1/2 pr-4 lg:pr-12 border-r border-line"},r.createElement("h5",{className:"font-header font-semibold text-front text-sm uppercase"},"Company"),r.createElement("h3",{className:"font-header font-light text-2xl text-front leading-tight"},t.company),t.for_hire&&r.createElement("div",{className:"font-header font-semibold text-xs uppercase pt-2"},r.createElement("span",{className:"inline-block w-2 h-2 rounded-full mr-1 bg-green-500"}),"Available for hire")),r.createElement("div",{className:"w-1/2 pl-4 lg:pl-12"},r.createElement("h5",{className:"font-header font-semibold text-front text-sm uppercase"},"Focused on"),r.createElement("div",{className:"font-header font-light text-2xl text-front leading-tight"},t.focus,t.focus_url&&r.createElement("div",null,r.createElement("a",{"aria-label":"website",className:"inline-block text-front opacity-50 hover:opacity-75 h-4 w-36 pt-1 transition-opacity duration-150",href:t.focus_url,rel:"noopener noreferrer",target:"_blank"},r.createElement("div",{className:"space-x-2"},r.createElement("div",{className:"inline-block"},r.createElement(l.Phk,null)),r.createElement("div",{className:"inline-block"}," Resource")))))))},E=function(e){var t=e.tools;return r.createElement(r.Fragment,null,r.createElement("h5",{className:"font-header font-semibold text-front text-sm uppercase mb-3"},"Main tools"),r.createElement("ul",{className:"flex-col mt-2"},t.map((function(e){return r.createElement("li",{className:"inline-block md:block mb-1 mr-1 md:mr-0",key:e},r.createElement("span",{className:"inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-2xl text-lead-text"},e))}))))},x=function(e){var t=e.history;return r.createElement(r.Fragment,null,r.createElement("h5",{className:"font-header font-semibold text-front text-sm uppercase mt-12 mb-3 text-center"},"Work history"),r.createElement("div",{className:"history flex flex-col relative pt-6 pb-6"},t.map((function(e,t){var n=e.company,a=e.period,s=e.position,i=e.url;return r.createElement("div",{className:"history-entry relative w-1/2 py-4",key:n+"_"+t},r.createElement("span",{className:"dot-bg w-14 h-14 absolute bg-line inline-flex rounded-full items-center justify-center"},r.createElement("span",{className:"dot w-5 h-5 bg-back-light rounded-full"})),i?r.createElement("h4",{className:"subpixel-antialiased"},r.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-75 transition-opacity duration-150"},n)):r.createElement("h4",{className:"subpixel-antialiased"},n),s&&r.createElement("h5",{className:"text-sm font-normal mb-1"},s),a&&r.createElement("span",{className:"text-sm font-medium opacity-50"},a))}))))},k=function(e){var t=e.history,n=e.projects,a=e.profile;return r.createElement("main",{className:"lg:w-2/3 lg:pl-8 xl:pl-12"},r.createElement(v,{profile:a}),r.createElement("div",{className:"flex flex-wrap"},r.createElement("div",{className:"md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20"},a.skills&&r.createElement(b,{skills:a.skills})),r.createElement("div",{className:"md:w-1/4 pb-12"},a.tools&&r.createElement(E,{tools:a.tools}))),a.about&&r.createElement(u,{about:a.about}),r.createElement(g,{projects:n}),r.createElement(x,{history:t}))},w=n(7891),N=n(594),C=function(e){var t=e.location,n=e.education;return r.createElement(r.Fragment,null,r.createElement("div",{className:"inline-flex items-center bg-front mt-6 w-auto"},r.createElement("span",{className:"text-lead border-r-2 border-back px-3"},r.createElement(l.Nh4,{color:"green",className:"h-4 w-4"})),r.createElement("span",{className:"text-back font-header font-bold py-1 px-3 text-lg"},t)),r.createElement("div",{className:"inline-flex items-center bg-front mt-6 w-auto"},r.createElement("span",{className:"text-lead border-r-2 border-back px-3"},r.createElement(N.S4z,{color:"green",className:"h-4 w-4"})),r.createElement("span",{className:"text-back font-header font-bold py-1 px-3 text-lg"},n)))},P=function(e){var t=e.image,n=e.name;return r.createElement("div",{className:"relative inline-block leading-none"},r.createElement(m.G,{image:t.childImageSharp.gatsbyImageData,alt:n,className:"rounded-full relative z-10"}),r.createElement("div",{className:"absolute inset-0 rounded-full bg-lead z-0 transform translate-x-12"}))};var O=n(5827),S=function(e){var t=e.name,n=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["name"]),a={behance:l.erk,dribbble:l.hIz,facebook:l.Am9,github:l.hJX,goodreads:l.hvN,medium:l.Cv5,instagram:l.Zf_,linkedin:l.BUd,producthunt:l.M56,twitter:l.fWC,youtube:l.V2E,xing:l.EDe,email:O.ixJ}[t];return a?r.createElement(a,n):null},T=function(e){var t=e.social;return r.createElement("div",{className:"pl-3"},t.map((function(e,t){var n=e.name,a=e.url,s=t%2==0?"bg-front text-back-light":"bg-back-light text-front";return r.createElement("a",{"aria-label":n,className:"inline-flex w-12 h-12 justify-center items-center rounded-full -ml-3 "+s+" hover:shadow-lg transition-shadow duration-150",href:a,key:n,rel:"noopener noreferrer",target:"_blank"},r.createElement(S,{name:n,className:"w-6 h-6"}))})))},j=n(3552),q=n(8401),R=n.n(q),I=function(e){function t(){return e.apply(this,arguments)||this}(0,j.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.typed=new(R())(this.el,{strings:["Anant Prakash"],typeSpeed:70,loop:!1,showCursor:!0,cursorChar:"|"})},n.componentWillUnmount=function(){this.typed.destroy()},n.render=function(){var e=this;return r.createElement(r.Fragment,null,r.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))},t}(r.Component),B=function(e){var t=e.profile,n=e.social;return r.createElement("aside",{className:"w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-10"},r.createElement("div",{className:"flex flex-col h-full justify-between"},r.createElement("div",null,r.createElement("h2",{className:"font-header font-light text-front text-2xl leading-none mb-4"},t.profession),r.createElement("h1",{className:"font-header font-black text-front text-5xl leading-none break-words mb-6"},r.createElement(I,null)),t.image&&r.createElement(P,{image:t.image,name:t.name}),r.createElement("br",null),t.location&&r.createElement(C,{location:t.location,education:t.education})),r.createElement("div",{className:"pt-8 pb-12 lg:py-0"},r.createElement("h5",{className:"font-header font-semibold text-front text-sm uppercase mb-3"},"Connect"),r.createElement(T,{social:n}))))},L=function(e){var t,n=e.profile,s=e.social,i={"@context":"http://schema.org/","@type":"Person",name:n.name,image:null===(t=n.image)||void 0===t?void 0:t.publicURL,jobTitle:n.profession,sameAs:s.map((function(e){return e.url})),worksFor:{"@type":"Organization",name:n.company}};return r.createElement(a.q,null,r.createElement("script",{type:"application/ld+json"},JSON.stringify(i)))},_=function(e){var t=e.data,n=t.history,a=t.profile,i=t.projects,l=t.site,u=t.social;return r.createElement("div",{className:"antialiased bg-back leading-normal font-text text-front"},r.createElement(w.Z,null),r.createElement(L,{profile:a,social:u.nodes}),r.createElement(s,null),r.createElement(c,{initials:a.initials}),r.createElement("div",{className:"md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8"},r.createElement(B,{profile:a,social:u.nodes}),r.createElement(k,{history:n.nodes,profile:a,projects:i.nodes,formspreeEndpoint:l.siteMetadata.formspreeEndpoint})),r.createElement(o,{name:a.name,showThemeLogo:l.siteMetadata.showThemeLogo}))}}}]);
//# sourceMappingURL=component---src-templates-index-js-f8022b0158f1054bcea6.js.map