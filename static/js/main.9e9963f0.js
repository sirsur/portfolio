/*! For license information please see main.9e9963f0.js.LICENSE.txt */
    display: flex;
    flex-direction: column;
    font-weight: 900;
`,Pe=xe.a`
    font-size: 2.5em;
    color: #a1a1a1;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #ffffff;
    }

    @media (max-width: 900px) {
        font-size: 1.5em;
    }
`,ke=()=>(0,Me.jsxs)(Le,{children:[(0,Me.jsx)(Pe,{href:"#edu",children:"01 EDUCATION"}),(0,Me.jsx)(Pe,{href:"#skills",children:"02 SKILLS"}),(0,Me.jsx)(Pe,{href:"#projects",children:"03 PROJECTS"}),(0,Me.jsx)(Pe,{href:"#exp",children:"04 EXPERIENCE"}),(0,Me.jsx)(Pe,{href:"#links",children:"05 LINKS"})]});var Ue=n(2382);const Fe={dots:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3},Be=xe.section`
    margin-top: 3rem;
    opacity: 87%;

    img {
        border-radius: 1rem;
    }

    .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slick-dots li button:before {
        color: #ffffff;
    }
`,Ge=xe.p`
    font-size: calc(0.7em + 2vw);
    font-weight: 300;
`,Ye=xe.h1`
    font-size: calc(1.8em + 2vw);
    margin: 0 0 1rem 0;
`,ze=xe.span`
    margin-bottom: 2rem;
    font-size: calc(1.1em + 2vw);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
        color: #a1a1a1;
        text-decoration: none;
    }
`,He=xe.span`
    margin-top: 4rem;
    font-size: calc(1.1em + 2vw);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:after {
        content: '';
        right: 32rem;
        top: 44.3rem;
        width: 0.2rem;
        height: 1.6rem;
        background: #ffffff;
        animation: cursor-blink 1s steps(2) infinite;
    }

    a {
        color: #a1a1a1;
        text-decoration: none;
    }
`,Ve=[1,2,3,4,5,6],je=()=>(0,Me.jsxs)(Be,{children:[(0,Me.jsx)(Ge,{children:"16 march 2022, 17:45"}),(0,Me.jsx)(Ye,{children:"ABOUT ME"}),(0,Me.jsx)(ze,{children:(0,Me.jsxs)("span",{children:["\n    i\u2019m frontend developer \n    from surgut, russia. \n    currently junior frontend developer. i have 4 years \n    experience in design & web development \n    and love what i do. \n","also, u can download my cv"," ",(0,Me.jsx)("a",{href:"https://drive.google.com/file/d/16cVohqWMiHPuWSJHuI-sUinH4G-GjEC-/view?usp=share_link",children:"here"}),"."]})}),(0,Me.jsx)(Ue.A,{...Fe,children:Ve.map((e=>(0,Me.jsx)("div",{children:(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{media:"(min-width: 400px)",srcSet:`/portfolio/img/Pic${e}.webp 3.5x`}),(0,Me.jsx)("source",{media:"(max-width: 399px) and (min-width: 355px)",srcSet:`/portfolio/img/Pic${e}.webp 4x`}),(0,Me.jsx)("source",{media:"(max-width: 354px) and (min-width: 325px)",srcSet:`/portfolio/img/Pic${e}.webp 4.5x`}),(0,Me.jsx)("source",{media:"(max-width: 324px)",srcSet:`/portfolio/img/Pic${e}.webp 5x`}),(0,Me.jsx)("img",{src:`/portfolio/img/Pic${e}.webp`,alt:`Bio ${e}`})]})},e)))}),(0,Me.jsxs)(He,{children:["\n    As a responsible employee with a genuine passion \n    for my profession I always complete the work on time \n    and with high quality. Sociable, not conflicted, \n    I adequately perceive criticism and am fully \n    responsible for introspection and correction of \n    shortcomings, if any. A calm and reasonably reasonable \n    person. I respect the management and personal space.\n",(0,Me.jsx)("br",{}),(0,Me.jsx)("br",{}),"\n    I will be glad to cooperate!\n"]})]}),qe={"hljs-comment":{color:"#8d8687"},"hljs-quote":{color:"#8d8687"},"hljs-variable":{color:"#ef6155"},"hljs-template-variable":{color:"#ef6155"},"hljs-tag":{color:"#ef6155"},"hljs-name":{color:"#ef6155"},"hljs-selector-id":{color:"#ef6155"},"hljs-selector-class":{color:"#ef6155"},"hljs-regexp":{color:"#ef6155"},"hljs-link":{color:"#ef6155"},"hljs-meta":{color:"#ef6155"},"hljs-number":{color:"#f99b15"},"hljs-built_in":{color:"#f99b15"},"hljs-builtin-name":{color:"#f99b15"},"hljs-literal":{color:"#f99b15"},"hljs-type":{color:"#f99b15"},"hljs-params":{color:"#f99b15"},"hljs-deletion":{color:"#f99b15"},"hljs-title":{color:"#fec418"},"hljs-section":{color:"#fec418"},"hljs-attribute":{color:"#fec418"},"hljs-string":{color:"#48b685"},"hljs-symbol":{color:"#48b685"},"hljs-bullet":{color:"#48b685"},"hljs-addition":{color:"#48b685"},"hljs-keyword":{color:"#815ba4"},"hljs-selector-tag":{color:"#815ba4"},hljs:{display:"block",overflowX:"auto",background:"#2f1e2e",color:"#a39e9b",padding:"0.5em"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}};function $e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function We(e){return function(e){if(Array.isArray(e))return $e(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return $e(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$e(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qe(e){return Qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe(e)}function Ke(e){var t=function(e,t){if("object"!=Qe(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=Qe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Qe(t)?t:t+""}function Xe(e,t,n){return(t=Ke(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(){return Ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ze.apply(null,arguments)}function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(n),!0).forEach((function(t){Xe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var tt={};function nt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return function(e){if(0===e.length||1===e.length)return e;var t=e.join(".");return tt[t]||(tt[t]=function(e){var t=e.length;return 0===t||1===t?e:2===t?[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])]:3===t?[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])]:t>=4?[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]:void 0}(e)),tt[t]}(e.filter((function(e){return"token"!==e}))).reduce((function(e,t){return et(et({},e),n[t])}),t)}function rt(e){return e.join(" ")}function at(t){var n=t.node,r=t.stylesheet,a=t.style,i=void 0===a?{}:a,o=t.useInlineStyles,s=t.key,l=n.properties,c=n.type,d=n.tagName,_=n.value;if("text"===c)return _;if(d){var u,p=function(e,t){var n=0;return function(r){return n+=1,r.map((function(r,a){return at({node:r,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(a)})}))}}(r,o);if(o){var m=Object.keys(r).reduce((function(e,t){return t.split(".").forEach((function(t){e.includes(t)||e.push(t)})),e}),[]),g=l.className&&l.className.includes("token")?["token"]:[],E=l.className&&g.concat(l.className.filter((function(e){return!m.includes(e)})));u=et(et({},l),{},{className:rt(E)||void 0,style:nt(l.className,Object.assign({},l.style,i),r)})}else u=et(et({},l),{},{className:rt(l.className)});var f=p(n.children);return e.createElement(d,Ze({key:s},u),f)}}var it=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function st(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ot(Object(n),!0).forEach((function(t){Xe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var lt=/\n/g;function ct(t){var n=t.codeString,r=t.codeStyle,a=t.containerStyle,i=void 0===a?{float:"left",paddingRight:"10px"}:a,o=t.numberStyle,s=void 0===o?{}:o,l=t.startingLineNumber;return e.createElement("code",{style:Object.assign({},r,i)},function(t){var n=t.lines,r=t.startingLineNumber,a=t.style;return n.map((function(t,n){var i=n+r;return e.createElement("span",{key:"line-".concat(n),className:"react-syntax-highlighter-line-number",style:"function"===typeof a?a(i):a},"".concat(i,"\n"))}))}({lines:n.replace(/\n$/,"").split("\n"),style:s,startingLineNumber:l}))}function dt(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function _t(e,t,n){var r,a={display:"inline-block",minWidth:(r=n,"".concat(r.toString().length,".25em")),paddingRight:"1em",textAlign:"right",userSelect:"none"},i="function"===typeof e?e(t):e;return st(st({},a),i)}function ut(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,i=e.showInlineLineNumbers,o=e.lineProps,s=void 0===o?{}:o,l=e.className,c=void 0===l?[]:l,d=e.showLineNumbers,_=e.wrapLongLines,u="function"===typeof s?s(n):s;if(u.className=c,n&&i){var p=_t(r,n,a);t.unshift(dt(n,p))}return _&d&&(u.style=st(st({},u.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:u,children:t}}function pt(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if("text"===a.type)n.push(ut({children:[a],className:We(new Set(t))}));else if(a.children){var i=t.concat(a.properties.className);pt(a.children,i).forEach((function(e){return n.push(e)}))}}return n}function mt(e,t,n,r,a,i,o,s,l){var c,d=pt(e.value),_=[],u=-1,p=0;function m(e,i){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t||c.length>0?function(e,t){return ut({children:e,lineNumber:t,lineNumberStyle:s,largestLineNumber:o,showInlineLineNumbers:a,lineProps:n,className:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],showLineNumbers:r,wrapLongLines:l})}(e,i,c):function(e,t){if(r&&t&&a){var n=_t(s,t,o);e.unshift(dt(t,n))}return e}(e,i)}for(var g=function(){var e=d[p],t=e.children[0].value;if(t.match(lt)){var n=t.split("\n");n.forEach((function(t,a){var o=r&&_.length+i,s={type:"text",value:"".concat(t,"\n")};if(0===a){var l=m(d.slice(u+1,p).concat(ut({children:[s],className:e.properties.className})),o);_.push(l)}else if(a===n.length-1){var c=d[p+1]&&d[p+1].children&&d[p+1].children[0],g={type:"text",value:"".concat(t)};if(c){var E=ut({children:[g],className:e.properties.className});d.splice(p+1,0,E)}else{var f=m([g],o,e.properties.className);_.push(f)}}else{var S=m([s],o,e.properties.className);_.push(S)}})),u=p}p++};p<d.length;)g();if(u!==d.length-1){var E=d.slice(u+1,d.length);if(E&&E.length){var f=m(E,r&&_.length+i);_.push(f)}}return t?_:(c=[]).concat.apply(c,_)}function gt(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map((function(e,t){return at({node:e,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(t)})}))}function Et(e){return e&&"undefined"!==typeof e.highlightAuto}var ft=n(6258);var St,bt,ht=(St=n.n(ft)(),bt={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#F0F0F0",color:"#444"},"hljs-subst":{color:"#444"},"hljs-comment":{color:"#888888"},"hljs-keyword":{fontWeight:"bold"},"hljs-attribute":{fontWeight:"bold"},"hljs-selector-tag":{fontWeight:"bold"},"hljs-meta-keyword":{fontWeight:"bold"},"hljs-doctag":{fontWeight:"bold"},"hljs-name":{fontWeight:"bold"},"hljs-type":{color:"#880000"},"hljs-string":{color:"#880000"},"hljs-number":{color:"#880000"},"hljs-selector-id":{color:"#880000"},"hljs-selector-class":{color:"#880000"},"hljs-quote":{color:"#880000"},"hljs-template-tag":{color:"#880000"},"hljs-deletion":{color:"#880000"},"hljs-title":{color:"#880000",fontWeight:"bold"},"hljs-section":{color:"#880000",fontWeight:"bold"},"hljs-regexp":{color:"#BC6060"},"hljs-symbol":{color:"#BC6060"},"hljs-variable":{color:"#BC6060"},"hljs-template-variable":{color:"#BC6060"},"hljs-link":{color:"#BC6060"},"hljs-selector-attr":{color:"#BC6060"},"hljs-selector-pseudo":{color:"#BC6060"},"hljs-literal":{color:"#78A960"},"hljs-built_in":{color:"#397300"},"hljs-bullet":{color:"#397300"},"hljs-code":{color:"#397300"},"hljs-addition":{color:"#397300"},"hljs-meta":{color:"#1f7199"},"hljs-meta-string":{color:"#4d99bf"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},function(t){var n=t.language,r=t.children,a=t.style,i=void 0===a?bt:a,o=t.customStyle,s=void 0===o?{}:o,l=t.codeTagProps,c=void 0===l?{className:n?"language-".concat(n):void 0,style:st(st({},i['code[class*="language-"]']),i['code[class*="language-'.concat(n,'"]')])}:l,d=t.useInlineStyles,_=void 0===d||d,u=t.showLineNumbers,p=void 0!==u&&u,m=t.showInlineLineNumbers,g=void 0===m||m,E=t.startingLineNumber,f=void 0===E?1:E,S=t.lineNumberContainerStyle,b=t.lineNumberStyle,h=void 0===b?{}:b,T=t.wrapLines,v=t.wrapLongLines,y=void 0!==v&&v,C=t.lineProps,O=void 0===C?{}:C,N=t.renderer,R=t.PreTag,I=void 0===R?"pre":R,A=t.CodeTag,D=void 0===A?"code":A,w=t.code,x=void 0===w?(Array.isArray(r)?r[0]:r)||"":w,M=t.astGenerator,L=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(t,it);M=M||St;var P=p?e.createElement(ct,{containerStyle:S,codeStyle:c.style||{},numberStyle:h,startingLineNumber:f,codeString:x}):null,k=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},U=Et(M)?"hljs":"prismjs",F=_?Object.assign({},L,{style:Object.assign({},k,s)}):Object.assign({},L,{className:L.className?"".concat(U," ").concat(L.className):U,style:Object.assign({},s)});if(c.style=st(st({},c.style),{},y?{whiteSpace:"pre-wrap"}:{whiteSpace:"pre"}),!M)return e.createElement(I,F,P,e.createElement(D,c,x));(void 0===T&&N||y)&&(T=!0),N=N||gt;var B=[{type:"text",value:x}],G=function(e){var t=e.astGenerator,n=e.language,r=e.code,a=e.defaultCodeValue;if(Et(t)){var i=function(e,t){return-1!==e.listLanguages().indexOf(t)}(t,n);return"text"===n?{value:a,language:"text"}:i?t.highlight(n,r):t.highlightAuto(r)}try{return n&&"text"!==n?{value:t.highlight(r,n)}:{value:a}}catch(o){return{value:a}}}({astGenerator:M,language:n,code:x,defaultCodeValue:B});null===G.language&&(G.value=B);var Y=mt(G,T,O,p,g,f,G.value.length+f,h,y);return e.createElement(I,F,e.createElement(D,c,!g&&P,N({rows:Y,stylesheet:i,useInlineStyles:_})))});ht.supportedLanguages=["1c","abnf","accesslog","actionscript","ada","angelscript","apache","applescript","arcade","arduino","armasm","asciidoc","aspectj","autohotkey","autoit","avrasm","awk","axapta","bash","basic","bnf","brainfuck","c-like","c","cal","capnproto","ceylon","clean","clojure-repl","clojure","cmake","coffeescript","coq","cos","cpp","crmsh","crystal","csharp","csp","css","d","dart","delphi","diff","django","dns","dockerfile","dos","dsconfig","dts","dust","ebnf","elixir","elm","erb","erlang-repl","erlang","excel","fix","flix","fortran","fsharp","gams","gauss","gcode","gherkin","glsl","gml","go","golo","gradle","groovy","haml","handlebars","haskell","haxe","hsp","htmlbars","http","hy","inform7","ini","irpf90","isbl","java","javascript","jboss-cli","json","julia-repl","julia","kotlin","lasso","latex","ldif","leaf","less","lisp","livecodeserver","livescript","llvm","lsl","lua","makefile","markdown","mathematica","matlab","maxima","mel","mercury","mipsasm","mizar","mojolicious","monkey","moonscript","n1ql","nginx","nim","nix","node-repl","nsis","objectivec","ocaml","openscad","oxygene","parser3","perl","pf","pgsql","php-template","php","plaintext","pony","powershell","processing","profile","prolog","properties","protobuf","puppet","purebasic","python-repl","python","q","qml","r","reasonml","rib","roboconf","routeros","rsl","ruby","ruleslanguage","rust","sas","scala","scheme","scilab","scss","shell","smali","smalltalk","sml","sqf","sql","sql_more","stan","stata","step21","stylus","subunit","swift","taggerscript","tap","tcl","thrift","tp","twig","typescript","vala","vbnet","vbscript-html","vbscript","verilog","vhdl","vim","x86asm","xl","xml","xquery","yaml","zephir"];const Tt=ht,vt=xe.span`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    font-weight: 900;
    align-items: baseline;
    justify-content: flex-start;
    margin: calc(3rem + 2vw) 0 calc(1rem + 1vw) 0;
    opacity: 87%;
`,yt=(e,t)=>(0,Me.jsxs)(vt,{children:[(0,Me.jsx)("h1",{style:{fontSize:"calc(2.7em + 2vw)",opacity:"70%",margin:"0"},children:e}),(0,Me.jsx)("h1",{style:{fontSize:"calc(3.5em + 2vw)",margin:"0"},children:t})]}),Ct=xe.section``,Ot=()=>(0,Me.jsxs)(Ct,{id:"skills",children:[yt("02","SKILLS"),(0,Me.jsx)(Tt,{language:"sql",style:qe,customStyle:{backgroundColor:"#121212",borderRadius:"30px",fontSize:"0.6em",padding:"calc(0.5rem + 1vw) 0 calc(1.5rem + 1vw) 0"},children:"\n    INSERT INTO \n        People (name, age) \n    VALUES \n        ('Kasimova Karina', 23); \n\n    INSERT INTO \n        Skills (idPeople, name) \n    VALUES \n        (1, 'HTML/CSS'), \n        (1, 'REACT/NEXT'), \n        (1, 'JS/TS'), \n        (1, 'SASS/SCSS'),\n        (1, 'JSON/XML/XSD'), \n        (1, 'REST/FETCH'), \n        (1, 'NODE/EXPRESS/APOLLO'), \n        (1, 'MS/POSTGRES/MY/MONGO'),\n        (1, 'SQL'), \n        (1, 'UI/UX'); \n\n    INSERT INTO \n        Software (idPeople, name)\n    VALUES \n        (1, 'Visual Studio Code'), \n        (1, 'Figma'), \n        (1, 'Adobe Photoshop'), \n        (1, 'Postman'), \n        (1, 'Jira/Conf'),  \n        (1, 'MacBook Pro 2021'); \n"})]});var Nt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rt=e.createContext&&e.createContext(Nt),It=function(){return It=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},It.apply(this,arguments)},At=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function Dt(t){return t&&t.map((function(t,n){return e.createElement(t.tag,It({key:n},t.attr),Dt(t.child))}))}function wt(t){return function(n){return e.createElement(xt,It({attr:It({},t.attr)},n),Dt(t.child))}}function xt(t){var n=function(n){var r,a=t.attr,i=t.size,o=t.title,s=At(t,["attr","size","title"]),l=i||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",It({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,s,{className:r,style:It(It({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&e.createElement("title",null,o),t.children)};return void 0!==Rt?e.createElement(Rt.Consumer,null,(function(e){return n(e)})):n(Nt)}function Mt(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"}}]})(e)}function Lt(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"}}]})(e)}function Pt(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"}}]})(e)}function kt(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"}}]})(e)}function Ut(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"}}]})(e)}function Ft(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"}}]})(e)}function Bt(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"}}]})(e)}function Gt(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"}}]})(e)}function Yt(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"}}]})(e)}function zt(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"}}]})(e)}function Ht(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"}}]})(e)}function Vt(e){return wt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"}}]})(e)}const jt=xe.div`
    overflow: scroll;
    margin-top: 2rem;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`,qt=xe.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: fit-content;
    padding: 0 3.7rem 0 4.7rem;
    position: relative;
`,$t=()=>(0,Me.jsx)(jt,{className:"exp",children:(0,Me.jsxs)(qt,{children:[(0,Me.jsx)(Pt,{size:"2.5em"}),(0,Me.jsx)(kt,{size:"2.5em"}),(0,Me.jsx)(Lt,{size:"2.5em"}),(0,Me.jsx)(Ut,{size:"2.5em"}),(0,Me.jsx)(Yt,{size:"2.5em"}),(0,Me.jsx)(Mt,{size:"2.5em"}),(0,Me.jsx)(zt,{size:"2.5em"}),(0,Me.jsx)(Vt,{size:"2.5em"})]})}),Wt=xe.div`
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${"/portfolio"}/img/UtsVectorExp.svg);
    background-repeat: no-repeat;
    background-position: 30% 30%;
    background-size: 30rem;

    h1 {
        margin: 0 0 1rem 0;
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        font-size: calc(2.5em + 1vw);
        font-weight: 900;
    }

    p {
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
    }
`,Qt=()=>(0,Me.jsxs)(Wt,{children:[(0,Me.jsx)("h1",{children:"UTS"}),(0,Me.jsx)("p",{style:{fontWeight:"700"},children:"developer (2021-2022)"}),(0,Me.jsx)("p",{children:"creation of a website for the company and its support, as well as setting up equipment in the office"}),(0,Me.jsx)($t,{})]});function Kt(e){return wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.823 15.122c-.517 0-.816.491-.816 1.146 0 .661.311 1.126.82 1.126.517 0 .812-.49.812-1.146 0-.604-.291-1.126-.816-1.126z"}},{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8.022 16.704c0 .961-.461 1.296-1.2 1.296-.176 0-.406-.029-.557-.08l.086-.615c.104.035.239.06.391.06.319 0 .52-.145.52-.67v-2.122h.761v2.131zm1.459 1.291c-.385 0-.766-.1-.955-.205l.155-.631c.204.105.521.211.846.211.35 0 .534-.146.534-.365 0-.211-.159-.331-.564-.476-.562-.195-.927-.506-.927-.996 0-.576.481-1.017 1.277-1.017.38 0 .659.08.861.171l-.172.615c-.135-.065-.375-.16-.705-.16s-.491.15-.491.325c0 .215.19.311.627.476.596.22.876.53.876 1.006.001.566-.436 1.046-1.362 1.046zm3.306.005c-1.001 0-1.586-.755-1.586-1.716 0-1.012.646-1.768 1.642-1.768 1.035 0 1.601.776 1.601 1.707C14.443 17.33 13.773 18 12.787 18zm4.947-.055h-.802l-.721-1.302a12.64 12.64 0 0 1-.585-1.19l-.016.005c.021.445.031.921.031 1.472v1.016h-.701v-3.373h.891l.701 1.236c.2.354.4.775.552 1.155h.014c-.05-.445-.065-.9-.065-1.406v-.985h.702v3.372zM14 9h-1V4l5 5h-4z"}}]})(e)}function Xt(e){return wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z"}}]})(e)}function Zt(e){return wt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M8.579 10.956c0.041-0.019 0.083-0.037 0.125-0.053-0.041 0.016-0.083 0.035-0.125 0.053zM2.496 22.174h0.126c0.372 0 0.477 0 0.905 0h0.337c0.026 0 0.052 0 0.078 0 0.029 0 0.060 0 0.091 0 0 0 0.005 0 0.006 0 0.013 0 0.026 0 0.038 0 0.005 0 0.005 0 0.009 0 0.005 0 0.011 0.006 0.017 0.005 2.378-0.122 3.48-1.352 4.034-3.124 0.431-1.375 0.784-2.532 1.094-3.504-0 0-0 0.001-0 0.001 0.004-0.012 0.007-0.023 0.011-0.035 0.747-1.048 1.519-1.953 2.215-2.687v0c0 0 0.016 0 0.016-0 1.065 3.257 1.476 9.068 4.591 9.068 0.126 0 0.257 0.003 0.384-0.010-0.127 0.013-0.25 0.030-0.376 0.030h2.474c-0.175 0-0.341-0.026-0.501-0.059-0.101-0.021-0.199-0.052-0.295-0.085 0.096 0.032 0.194 0.057 0.296 0.077 0.16 0.033 0.326 0.048 0.5 0.048 0.459 0 0.842-0.035 1.176-0.144-0.334 0.109-0.717 0.162-1.176 0.162h2.42c0 0 0 0 0 0 0.021 0 0.042 0 0.062 0 0 0 0 0 0 0s0.001 0 0.002 0l0.001-0.005 0.913-0.009c-0.117 0-0.226-0.021-0.331-0.056 0.001-0.002 0.003-0.003 0.004-0.005 0.103 0.031 0.21 0.037 0.325 0.037 2.403 0 4.826-4.315 8.835-11.483h-1.574l0.001 0.064h-0.293c-1.478 2.624-2.511 4.866-3.387 6.658 0.877-1.794 1.909-4.034 3.386-6.658h-2.161c-0.041 0-0.082 0-0.123 0-0.039 0-0.078 0-0.116 0h-0.005c-0.080 0-0.157-0.011-0.234-0.006-0 0.001-0.001-0.007-0.001-0.005-2.321 0.14-3.407 1.318-3.953 3.067-0.956 3.056-1.535 5.034-2.092 6.297-0 0 0-0.001-0-0 0 0.003-0.002 0.003-0.002 0.004v-0.003c-0.256 0.25-0.522 0.478-0.782 0.685-0.136 0.108-0.272 0.21-0.409 0.306 0.114 0.137 0.231 0.265 0.354 0.382 0.186 0.181 0.385 0.333 0.602 0.45-0 0-0.001 0-0.001 0-0.217-0.117-0.416-0.269-0.603-0.45-0.123-0.117-0.239-0.245-0.354-0.382 0 0 0 0 0 0 0.137-0.096 0.272-0.199 0.408-0.307-0.749-1.659-1.184-4.478-1.991-6.673 0.807 2.194 1.243 5.014 1.991 6.673 0.26-0.207 0.52-0.435 0.781-0.685-1.082-3.242-1.47-9.136-4.606-9.136-0.221 0-0.444 0.021-0.666 0.061 0.222-0.041 0.445-0.062 0.666-0.062l-1.233-0.017c0.196 0 0.381 0.055 0.557 0.055-0 0-0 0-0 0-0.176 0-0.361-0.055-0.556-0.055-0.017 0-0.034-0.004-0.051-0.003 0.017-0 0.034-0.006 0.051-0.006h-4.96c-0.028 0-0.056-0.004-0.085-0.004-2.706 0-6.435 5.059-8.115 11.524 0 0 0.122 0 0.323 0 0 0 0 0 0 0 0.232 0 0.95 0 0.95 0zM26.161 10.675c-0 0-0 0-0 0-0.807 0.254-1.401 0.694-1.842 1.277 0.441-0.583 1.034-1.023 1.842-1.277zM22.369 21.541c-0.008 0.004-0.015 0.008-0.023 0.012-0.011 0.006-0.023 0.011-0.034 0.017-0.001 0-0.002 0.001-0.002 0.001 0.020-0.010 0.039-0.020 0.059-0.029zM22.040 21.687c0.005-0.004 0.010-0.004 0.016-0.006-0.005 0.003-0.010 0.004-0.015 0.006-0.011 0.005-0.022 0.008-0.033 0.012 0.011-0.004 0.021-0.008 0.032-0.012zM22.001 21.703c0 0 0-0 0-0s-0.001 0-0.001 0c0-0 0-0 0.001-0zM21.751 21.787c0.019-0.006 0.036-0.011 0.054-0.016 0.009-0.004 0.018-0.007 0.027-0.009 0.011-0.004 0.021-0.007 0.030-0.011 0.011-0.004 0.022-0.006 0.031-0.010s0.017-0.006 0.026-0.010c0.021-0.008 0.042-0.014 0.064-0.022 0.003 0 0.006-0.001 0.008-0.003-0.002 0.001-0.005 0.002-0.007 0.003-0.021 0.008-0.042 0.014-0.063 0.022-0.009 0.004-0.018 0.006-0.026 0.009-0.009 0.004-0.020 0.007-0.031 0.010-0.009 0.004-0.020 0.006-0.031 0.011-0.009 0.004-0.018 0.005-0.027 0.009-0.019 0.005-0.036 0.010-0.054 0.016-0.001 0-0.003 0.001-0.004 0.001 0.001-0 0.002-0.001 0.003-0.001zM8.704 10.91v-0.008c0 0 0.006 0.008 0.007 0.008h0c-0.053 0-0.105 0.037-0.157 0.059 0.008-0.004 0.017-0.009 0.025-0.012-0.042 0.018-0.084 0.037-0.126 0.057-0.022 0.011-0.045 0.021-0.067 0.033zM8.832 10.846v0zM9.191 10.738c-0.007 0.004-0.012 0.019-0.018 0.019-0.044 0.011-0.088 0.023-0.132 0.035-0.005 0-0.009 0.004-0.015 0.005-0.012 0.003-0.024 0.007-0.037 0.011 0.013-0.004 0.025-0.011 0.037-0.013 0.006 0 0.011-0.005 0.015-0.005 0.044-0.012 0.088-0.024 0.132-0.035 0.006 0 0.011-0.018 0.018-0.018 0.012-0.004 0.024-0.020 0.037-0.021-0.013 0.001-0.025 0.021-0.037 0.023zM9.249 10.732c-0.006 0.004-0.013 0.008-0.019 0.010 0.006-0.004 0.012-0.011 0.019-0.013 0.013-0.004 0.025-0.014 0.039-0.014-0.014 0-0.026 0.015-0.039 0.017zM9.732 10.716c-0.024-0.004-0.047-0.002-0.070-0.002-0.001 0-0.002 0-0.002 0 0.023 0 0.046-0.003 0.070-0 0.003 0 0.005-0.001 0.008-0.001-0.002 0.001-0.003 0.003-0.006 0.003zM9.794 10.685c-0.058 0-0.115 0.012-0.174 0.016 0.008 0 0.016 0.010 0.024 0.012-0.015-0.002-0.030-0.011-0.045-0.012 0.007-0.001 0.014-0.005 0.021-0.005-0.004-0-0.004-0.002-0.008-0.002-0.005-0.004-0.012-0.006-0.012-0.006v0.005c-0.064 0.004-0.060 0.005-0.088 0.008l-0.004-0.005c-0.008 0-0.014 0.004-0.021 0.004-0.011 0.004-0.024 0.004-0.036 0.005-0.007 0-0.014 0-0.021 0.004-0.013 0.004-0.025 0.006-0.037 0.008-0.001 0-0.002 0.001-0.003 0.001 0.001 0 0.002 0 0.003 0 0.013 0 0.024-0.006 0.037-0.009 0.007 0 0.014-0.005 0.021-0.005 0.012 0 0.024-0.004 0.036-0.006 0.006 0 0.012-0 0.020-0.004 0.024-0.003 0.048-0.005 0.072-0.007 0.005 0 0.009 0.001 0.014 0.001 0.068-0.006 0.134-0.008 0.201-0.008zM9.955 10.755c-0.045-0.012-0.091-0.021-0.137-0.029-0.004 0-0.008-0.002-0.012-0.003 0.003 0.001 0.007 0.002 0.011 0.002 0.046 0.009 0.092 0.018 0.137 0.030 0.001 0 0.003 0.001 0.004 0.001-0.001-0-0.001-0-0.002-0zM10.934 11.537v0c-0 0-0 0.001-0.001 0.001-0.141-0.238-0.296-0.438-0.468-0.584 0.002 0.001 0.005 0.003 0.007 0.004 0.169 0.147 0.321 0.344 0.461 0.58 0-0 0 0-0 0zM11.154 11.961v0zM13.665 10.744c0.18-0.034 0.361-0.056 0.539-0.064-0.179 0.009-0.359 0.030-0.54 0.065zM11.904 12.446c-0.001-0.003-0.003-0.005-0.004-0.008 0.001 0.003 0.003 0.005 0.004 0.008v0zM14.209 10.947c-0.284 0.106-0.569 0.242-0.854 0.408 0.285-0.166 0.57-0.302 0.854-0.408 0.194-0.072 0.387-0.129 0.58-0.172-0.194 0.043-0.387 0.1-0.58 0.172zM14.94 10.743v0 0 0zM17.104 21.758c0.117-0.031 0.235-0.068 0.352-0.109 0 0 0 0 0 0-0.118 0.041-0.235 0.077-0.352 0.109zM20.136 21.561c-0 0-0 0-0 0-0.007 0.004-0.014 0.007-0.021 0.011 0.007-0.004 0.015-0.008 0.022-0.012zM20.762 21.884c-0.285-0.034-0.54-0.118-0.773-0.244 0.233 0.126 0.488 0.21 0.773 0.244 0.042 0.004 0.083 0.008 0.126 0.011-0.043-0.003-0.085-0.007-0.126-0.011zM20.742 21.035l0.001-0.005c0-0 0-0.001 0.001-0.001 0.157 0.267 0.331 0.487 0.527 0.639-0.196-0.149-0.371-0.364-0.528-0.633zM21.188 21.895c-0.008 0.004-0.015 0.004-0.023 0.004-0.001 0-0.001 0-0.002 0 0.008 0 0.016 0 0.023-0.004 0.015 0 0.030 0 0.046-0.004 0.001 0 0.002 0 0.002 0-0.016 0.004-0.031 0.004-0.046 0.004zM21.377 21.874c-0.017 0.003-0.035 0.004-0.053 0.008-0.005 0-0.010 0.004-0.015 0.004-0 0-0.004 0-0.004 0-0.016 0.002-0.033 0.005-0.049 0.005-0.001 0-0.002 0-0.002 0 0.016 0 0.033-0.004 0.049-0.005h0.004c0.005 0 0.010-0.004 0.015-0.004 0.018-0.004 0.036-0.006 0.053-0.008 0.002 0 0.003 0 0.004 0-0.001 0-0.001 0-0.002 0z"}}]})(e)}function Jt(e){return wt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M26.741 18.661c-0.24-0.278-0.65-0.202-0.967-0.139-0.762 0.136-1.591 0.294-2.329-0.023 1.318-2.080 2.355-4.351 2.935-6.748 0.211-0.911 0.374-1.843 0.343-2.781-0.023-0.525-0.096-1.084-0.417-1.519-0.794-1.047-1.945-1.81-3.214-2.151-1.585-0.43-3.285-0.302-4.844 0.18-0.129 0.026-0.256-0.032-0.382-0.048-1.415-0.287-2.975-0.174-4.202 0.645-1.473-0.53-3.056-0.85-4.624-0.686-1.166 0.121-2.337 0.663-3.006 1.656-0.846 1.239-0.961 2.821-0.826 4.273 0.272 1.928 0.742 3.826 1.34 5.677 0.394 1.154 0.828 2.317 1.529 3.325 0.356 0.495 0.829 0.994 1.466 1.072 0.566 0.069 1.078-0.282 1.425-0.698 0.6-0.718 1.217-1.423 1.857-2.105 0.418 0.205 0.872 0.323 1.336 0.358-0.251 0.298-0.458 0.687-0.858 0.804-0.539 0.208-1.17 0.18-1.645 0.539-0.274 0.196-0.287 0.623-0.041 0.848 0.445 0.432 1.101 0.525 1.693 0.575 0.839 0.064 1.687-0.218 2.324-0.768-0.004 1.334 0.002 2.672 0.152 3.999 0.075 0.777 0.41 1.551 1.001 2.074 0.557 0.486 1.351 0.587 2.058 0.464 0.694-0.132 1.407-0.34 1.949-0.814 0.576-0.508 0.822-1.275 0.936-2.011 0.207-1.319 0.364-2.644 0.514-3.969 1.483 0.25 3.161-0.034 4.269-1.117 0.237-0.223 0.462-0.609 0.228-0.912zM23.45 6.117c0.89 0.338 1.681 0.925 2.275 1.668 0.283 0.355 0.319 0.832 0.337 1.268 0.013 1.040-0.197 2.067-0.464 3.067-0.511 1.851-1.287 3.625-2.262 5.277-0.096 0.163-0.201 0.32-0.317 0.469-0.009-0.045-0.027-0.137-0.036-0.183 0.121-0.318 0.298-0.618 0.367-0.956 0.244-0.953 0.038-1.934-0.050-2.893-0.092-0.905 0.217-1.786 0.209-2.689 0.035-0.442-0.14-0.86-0.31-1.257-0.615-1.375-1.593-2.598-2.848-3.438-0.306-0.21-0.648-0.357-0.953-0.568 1.334-0.286 2.765-0.25 4.051 0.234zM22.637 13.836c0.078 1.071 0.389 2.221-0.116 3.237-0.677-1.347-1.552-2.633-1.857-4.133-0.086-0.477-0.108-1.081 0.316-1.413 0.538-0.382 1.241-0.296 1.863-0.258-0.027 0.859-0.291 1.702-0.205 2.567zM10.534 20.181c-0.243 0.286-0.571 0.627-0.985 0.542-0.484-0.14-0.792-0.582-1.062-0.979-0.729-1.166-1.168-2.483-1.571-3.79-0.451-1.547-0.831-3.119-1.050-4.717-0.109-1.216-0.041-2.52 0.581-3.603 0.466-0.82 1.335-1.343 2.248-1.514 1.462-0.281 2.961 0.017 4.364 0.445-0.619 0.68-1.101 1.481-1.382 2.358-0.383 1.171-0.558 2.417-0.466 3.648 0.053 0.867 0.030 1.738-0.091 2.598-0.152 1.123 0.299 2.278 1.133 3.036-0.568 0.664-1.17 1.297-1.72 1.977zM11.814 16.158c-0.143-0.636 0.044-1.276 0.065-1.913 0.049-0.721-0.002-1.443-0.016-2.164 0.674-0.436 1.462-0.777 2.279-0.73 0.423 0.018 0.813 0.317 0.915 0.734 0.371 1.477 0.486 3.121-0.225 4.52-0.248 0.54-0.449 1.099-0.622 1.666-1.182 0.012-2.187-0.987-2.396-2.112zM15.492 20.112c-0.742 1.005-2.227 1.197-3.3 0.65 0.529-0.245 1.148-0.226 1.659-0.528 0.494-0.266 0.69-0.851 1.152-1.152 0.503-0.071 0.87 0.676 0.49 1.029zM21.856 18.938c-0.282 0.454-0.183 1.008-0.252 1.512-0.162 1.413-0.321 2.828-0.551 4.232-0.109 0.673-0.395 1.388-1.030 1.723-0.651 0.331-1.407 0.539-2.139 0.426-0.695-0.122-1.133-0.77-1.33-1.401-0.144-0.529-0.159-1.082-0.2-1.627-0.070-1.315-0.071-2.633-0.037-3.949 0.029-0.514-0.235-1.049-0.694-1.299-0.222-0.125-0.482-0.142-0.73-0.162 0.195-0.967 0.784-1.802 0.986-2.768 0.262-1.195 0.117-2.439-0.151-3.619-0.131-0.589-0.579-1.11-1.175-1.253-0.918-0.231-1.844 0.128-2.665 0.512 0.104-1.334 0.461-2.7 1.278-3.783 0.601-0.806 1.533-1.344 2.528-1.473 1.642-0.209 3.366 0.243 4.671 1.27 1.078 0.852 1.93 2.006 2.389 3.304-0.763-0.027-1.628-0.058-2.245 0.472-0.56 0.472-0.632 1.277-0.506 1.953 0.292 1.608 1.241 2.975 1.941 4.421 0.186 0.339 0.436 0.635 0.674 0.939-0.283 0.143-0.599 0.28-0.76 0.571zM23.82 20.075c-0.504 0.060-1.028 0.078-1.514-0.089 0.002-0.275-0.013-0.601 0.208-0.806 0.175-0.129 0.424-0.248 0.626-0.107 0.86 0.453 1.86 0.232 2.775 0.121-0.559 0.544-1.333 0.798-2.095 0.881zM21.178 11.728c-0.179 0.147 0.014 0.367 0.168 0.436 0.373 0.219 0.884-0.087 0.896-0.513-0.337-0.157-0.76-0.141-1.065 0.077zM14.576 12.408c0.159-0.090 0.327-0.337 0.143-0.486-0.262-0.213-0.643-0.254-0.962-0.168-0.103 0.036-0.211 0.106-0.19 0.232 0.074 0.428 0.647 0.688 1.008 0.422z"}}]})(e)}function en(e){return wt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 34 32"},child:[{tag:"path",attr:{d:"M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"}},{tag:"path",attr:{d:"M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"}}]})(e)}const tn=xe.div`
    overflow: scroll;
    margin-top: 2rem;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`,nn=xe.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: fit-content;
    padding: 0 3.7rem 0 4.7rem;
    position: relative;
`,rn=()=>(0,Me.jsx)(tn,{className:"exp",children:(0,Me.jsxs)(nn,{children:[(0,Me.jsx)(Pt,{size:"2.5em"}),(0,Me.jsx)(kt,{size:"2.5em"}),(0,Me.jsx)(Lt,{size:"2.5em"}),(0,Me.jsx)(Kt,{size:"2.5em"}),(0,Me.jsx)(Jt,{size:"2.5em"}),(0,Me.jsx)(Vt,{size:"2.5em"})]})}),an=xe.div`
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${"/portfolio"}/img/UsetechVectorExp.svg);
    background-repeat: no-repeat;
    background-position: 30% 30%;
    background-size: 30rem;

    h1 {
        margin: 0 0 1rem 0;
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        font-size: calc(2.5em + 1vw);
        font-weight: 900;
    }

    p {
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
    }
`,on=()=>(0,Me.jsxs)(an,{children:[(0,Me.jsx)("h1",{children:"USETECH"}),(0,Me.jsx)("p",{style:{fontWeight:"700"},children:"junior developer (2022 - 2023)"}),(0,Me.jsx)("p",{children:"creation of services, their support on the government website"}),(0,Me.jsx)(rn,{})]}),sn=xe.div`
    overflow: scroll;
    margin-top: 2rem;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`,ln=xe.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: fit-content;
    padding: 0 3.7rem 0 4.7rem;
    position: relative;
`,cn=()=>(0,Me.jsx)(sn,{className:"exp",children:(0,Me.jsxs)(ln,{children:[(0,Me.jsx)(Pt,{size:"2.5em"}),(0,Me.jsx)(kt,{size:"2.5em"}),(0,Me.jsx)(Bt,{size:"2.5em"}),(0,Me.jsx)(Zt,{size:"2.5em"}),(0,Me.jsx)(Xt,{size:"2.5em"}),(0,Me.jsx)(Jt,{size:"2.5em"}),(0,Me.jsx)(en,{size:"2.5em"}),(0,Me.jsx)(Vt,{size:"2.5em"})]})}),dn=xe.div`
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${"/portfolio"}/img/SigmaVectorExp.svg);
    background-repeat: no-repeat;
    background-position: 30% 30%;
    background-size: 30rem;

    h1 {
        margin: 0 0 1rem 0;
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        font-size: calc(2.5em + 1vw);
        font-weight: 900;
    }

    p {
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
    }
`,_n=()=>(0,Me.jsxs)(dn,{children:[(0,Me.jsx)("h1",{children:"SIGMA"}),(0,Me.jsx)("p",{style:{fontWeight:"700"},children:"junior fullstack developer (2023 - 2024)"}),(0,Me.jsx)("p",{children:"maintaining the functionality of the \u201csigma sus\u201d electrical network management system"}),(0,Me.jsx)(cn,{})]}),un=xe.section``,pn=xe.span`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,mn=()=>(0,Me.jsxs)(un,{id:"exp",children:[yt("04","EXP"),(0,Me.jsxs)(pn,{children:[(0,Me.jsx)(Qt,{}),(0,Me.jsx)(on,{}),(0,Me.jsx)(_n,{})]})]}),gn=xe.div`
    overflow: scroll;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`,En=xe.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 0 3.7rem 0 4.7rem;
    width: fit-content;
    position: relative;

    img {
        border-radius: 1rem;
    }
`,fn=()=>(0,Me.jsx)(gn,{className:"exp",children:(0,Me.jsxs)(En,{children:[(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/Grind1.webp 4.5x"}),(0,Me.jsx)("img",{src:"/portfolio/img/Grind1.webp",alt:"Preloader"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/Grind2.webp 4.5x"}),(0,Me.jsx)("img",{src:"/portfolio/img/Grind2.webp",alt:"First screen"})]})]})}),Sn=xe.div`
    overflow: scroll;
    margin-top: 2rem;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`,bn=xe.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: fit-content;
    padding: 0 3.7rem 0 4.7rem;
    position: relative;
`,hn=()=>(0,Me.jsx)(Sn,{className:"exp",children:(0,Me.jsxs)(bn,{children:[(0,Me.jsx)(Mt,{size:"2.5em"}),(0,Me.jsx)(Pt,{size:"2.5em"}),(0,Me.jsx)(kt,{size:"2.5em"}),(0,Me.jsx)(Lt,{size:"2.5em"}),(0,Me.jsx)(Ht,{size:"2.5em"}),(0,Me.jsx)(en,{size:"2.5em"}),(0,Me.jsx)(Xt,{size:"2.5em"}),(0,Me.jsx)(Yt,{size:"2.5em"}),(0,Me.jsx)(Ft,{size:"2.5em"}),(0,Me.jsx)(Vt,{size:"2.5em"})]})}),Tn=xe.div`
    margin-top: 2rem;
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${"/portfolio"}/img/GrindVector.svg);
    background-repeat: no-repeat;
    background-position: 0% 30%;
    background-size: 30rem;

    h1 {
        margin: 0 0 1rem 0;
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        font-size: calc(2.5em + 1vw);
        font-weight: 900;
    }

    p {
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
    }
`,vn=()=>(0,Me.jsxs)(Tn,{children:[(0,Me.jsx)("h1",{children:"GRIND (2022)"}),(0,Me.jsx)("p",{children:"project to find a direction and a university for applicants"}),(0,Me.jsx)(fn,{}),(0,Me.jsx)(hn,{})]}),yn=xe.div`
    overflow: scroll;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`,Cn=xe.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 0 3.7rem 0 4.7rem;
    width: fit-content;
    position: relative;

    img {
        height: 20rem;
        border-radius: 1rem;
    }
`,On=()=>(0,Me.jsx)(yn,{className:"exp",children:(0,Me.jsxs)(Cn,{children:[(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/uts1.webp 4.5x"}),(0,Me.jsx)("img",{src:"/portfolio/img/uts1.webp",alt:"First screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/uts2.webp 4.5x"}),(0,Me.jsx)("img",{src:"/portfolio/img/uts2.webp",alt:"Second screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/uts3.webp 4.5x"}),(0,Me.jsx)("img",{src:"/portfolio/img/uts3.webp",alt:"Third screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/uts4.webp 4.5x"}),(0,Me.jsx)("img",{src:"/portfolio/img/uts4.webp",alt:"Fourth screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/uts5.webp 4.5x"}),(0,Me.jsx)("img",{src:"/portfolio/img/uts5.webp",alt:"Fifth screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/uts6.webp 4.5x"}),(0,Me.jsx)("img",{src:"/portfolio/img/uts6.webp",alt:"Sixth screen"})]})]})}),Nn=xe.div`
    overflow: scroll;
    margin-top: 2rem;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`,Rn=xe.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: fit-content;
    padding: 0 3.7rem 0 4.7rem;
    position: relative;
`,In=()=>(0,Me.jsx)(Nn,{className:"exp",children:(0,Me.jsxs)(Rn,{children:[(0,Me.jsx)(Mt,{size:"2.5em"}),(0,Me.jsx)(Pt,{size:"2.5em"}),(0,Me.jsx)(kt,{size:"2.5em"}),(0,Me.jsx)(Lt,{size:"2.5em"}),(0,Me.jsx)(Ut,{size:"2.5em"}),(0,Me.jsx)(Yt,{size:"2.5em"}),(0,Me.jsx)(zt,{size:"2.5em"}),(0,Me.jsx)(Vt,{size:"2.5em"})]})}),An=xe.div`
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${"/portfolio"}/img/UtsVector.svg);
    background-repeat: no-repeat;
    background-position: 40% 40%;
    background-size: 70rem;

    h1 {
        margin: 0 0 1rem 0;
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        font-size: calc(2.5em + 1vw);
        font-weight: 900;
    }

    p {
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
    }
`,Dn=()=>(0,Me.jsxs)(An,{children:[(0,Me.jsx)("h1",{children:"UTS (2021)"}),(0,Me.jsx)("p",{children:"website for our family company based in surgut, russia"}),(0,Me.jsx)(On,{}),(0,Me.jsx)(In,{})]}),wn=xe.div`
    overflow: scroll;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`,xn=xe.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 0 3.7rem 0 4.7rem;
    width: fit-content;
    position: relative;

    img {
        border-radius: 1rem;
    }
`,Mn=()=>(0,Me.jsx)(wn,{className:"exp",children:(0,Me.jsxs)(xn,{children:[(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/auto1.webp 2.75x"}),(0,Me.jsx)("img",{src:"/portfolio/img/auto1.webp",alt:"Preloader"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/auto2.webp 2.75x"}),(0,Me.jsx)("img",{src:"/portfolio/img/auto2.webp",alt:"First screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/auto3.webp 2.75x"}),(0,Me.jsx)("img",{src:"/portfolio/img/auto3.webp",alt:"First screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/auto4.webp 2.75x"}),(0,Me.jsx)("img",{src:"/portfolio/img/auto4.webp",alt:"First screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/auto5.webp 2.75x"}),(0,Me.jsx)("img",{src:"/portfolio/img/auto5.webp",alt:"First screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/auto6.webp 2.75x"}),(0,Me.jsx)("img",{src:"/portfolio/img/auto6.webp",alt:"First screen"})]}),(0,Me.jsxs)("picture",{children:[(0,Me.jsx)("source",{srcSet:"/portfolio/img/auto7.webp 2.75x"}),(0,Me.jsx)("img",{src:"/portfolio/img/auto7.webp",alt:"First screen"})]})]})}),Ln=xe.div`
    overflow: scroll;
    margin-top: 2rem;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`,Pn=xe.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: fit-content;
    padding: 0 3.7rem 0 4.7rem;
    position: relative;
`,kn=()=>(0,Me.jsx)(Ln,{className:"exp",children:(0,Me.jsxs)(Pn,{children:[(0,Me.jsx)(Pt,{size:"2.5em"}),(0,Me.jsx)(kt,{size:"2.5em"}),(0,Me.jsx)(Lt,{size:"2.5em"}),(0,Me.jsx)(Gt,{size:"2.5em"}),(0,Me.jsx)(Vt,{size:"2.5em"})]})}),Un=xe.div`
    margin-top: 2rem;
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${"/portfolio"}/img/UtsVector.svg);
    background-repeat: no-repeat;
    background-position: 10% 40%;
    background-size: 70rem;

    h1 {
        margin: 0 0 1rem 0;
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        font-size: calc(2.5em + 1vw);
        font-weight: 900;
    }

    p {
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
    }
`,Fn=()=>(0,Me.jsxs)(Un,{children:[(0,Me.jsx)("h1",{children:"AUTO SELECTION (2022)"}),(0,Me.jsx)("p",{children:"website that helps you sell car profitably"}),(0,Me.jsx)(Mn,{}),(0,Me.jsx)(kn,{})]}),Bn=xe.section``,Gn=()=>(0,Me.jsxs)(Bn,{id:"projects",children:[yt("03","PROJ"),(0,Me.jsx)(Dn,{}),(0,Me.jsx)(vn,{}),(0,Me.jsx)(Fn,{})]}),Yn=xe.section`
`,zn=xe.div`
    display: flex;
    margin-top: 2rem;
    font-size: calc(1em + 2vw);

    a {
        align-self: center;
        margin-left: 0.7rem;
        color: #A1A1A1;
        text-decoration: none;

        &:hover {
            color: #FFFFFF;
        }
    }

    p {
        align-self: center;
        margin: 0 0 0 0.7rem;
    }
`,Hn=()=>(0,Me.jsxs)(Yn,{id:"links",children:[yt("04","LINKS"),(0,Me.jsxs)(zn,{children:[(0,Me.jsx)("img",{src:"/portfolio/img/Telegram.svg",alt:"Telegram",height:"35vh"}),(0,Me.jsx)("a",{href:"https:\\\\t.me/de4nny",children:"@de4nny"})]}),(0,Me.jsxs)(zn,{children:[(0,Me.jsx)("img",{src:"/portfolio/img/Github.svg",alt:"Github",height:"35vh"}),(0,Me.jsx)("a",{href:"https:\\\\github.com/sirsur",children:"@sirsur"})]}),(0,Me.jsxs)(zn,{children:[(0,Me.jsx)("img",{src:"/portfolio/img/Instagram.svg",alt:"Instagram",height:"35vh"}),(0,Me.jsx)("a",{href:"https:\\\\instagram.com/ynnaedgnikcuf",children:"@ynnaedgnikcuf"})]}),(0,Me.jsxs)(zn,{children:[(0,Me.jsx)("img",{src:"/portfolio/img/Mail.svg",alt:"Mail",height:"35vh"}),(0,Me.jsxs)("p",{style:{marginTop:"-0.5rem"},children:["casimowa.c2001",(0,Me.jsx)("br",{}),"@gmail.com"]})]})]}),Vn=xe.footer`
    display: flex;
    justify-content: flex-end;
    font-size: calc(1em + 1vw);
    margin-top: 6rem;
    text-align: end;
`,jn=xe.div`
    a:hover {
        color: #FFFFFF;
    }
`,qn=xe.a`
    text-decoration: none;
    color: #A1A1A1;

    &:hover {
        color: #FFFFFF;
    }
`,$n=()=>(0,Me.jsx)(Vn,{children:(0,Me.jsxs)(jn,{children:[(0,Me.jsx)(qn,{href:"#top",children:"back to top"}),(0,Me.jsxs)("p",{children:["portfolio website -- 2022",(0,Me.jsx)("br",{}),"kasimova karina",(0,Me.jsx)("br",{}),"code && design"]})]})}),Wn=xe.div`
    z-index: 1;
    position: fixed;
    padding: 5dvh 2rem 0dvh 2rem;
    width: 100vw;
    height: 100%;
    font-size: 13vw;
    font-weight: 700;
    background-color: #2400ff;
    background-image: url(${"/portfolio"}/img/background.webp);
    background-size: cover;
    animation: background-motion 15s, preloader-invisible 1s linear 7s forwards;
`,Qn=xe.p`
    margin: 0;
    opacity: 0;
`,Kn=["hello!","my name is karina","i\u2019m frontend developer based in russia","and i madly in love with my job!"].map(((e,t)=>2===t?(0,Me.jsx)(Qn,{style:{fontWeight:400,animation:`preloader-visible 1s linear ${t+1}s forwards`},children:e},"phrase_"+t):(0,Me.jsx)(Qn,{style:{animation:`preloader-visible 1s linear ${t+1}s forwards`},children:e},"phrase_"+t))),Xn=()=>(0,Me.jsx)(Wn,{children:Kn}),Zn=xe.section`
    p {
        font-size: calc(1.1em + 2vw);
    }
`,Jn=()=>(0,Me.jsxs)(Zn,{id:"edu",children:[yt("01","EDU"),(0,Me.jsx)("p",{style:{fontWeight:"700"},children:"saint-petersburg polytechnic university (2019 - 2023)"}),(0,Me.jsx)("p",{children:"fundamental computer science and information technology"})]}),er=xe.div`
    z-index: 0;
    padding: 10dvh calc(1.5rem + 2vw) 5dvh calc(1.5rem + 2vw);
    animation: main-fixed 23.5s;
`,tr=()=>(0,Me.jsxs)(Me.Fragment,{children:[(0,Me.jsx)(Xn,{}),(0,Me.jsxs)(er,{id:"top",children:[(0,Me.jsx)(ke,{}),(0,Me.jsx)(je,{}),(0,Me.jsx)(Jn,{}),(0,Me.jsx)(Ot,{}),(0,Me.jsx)(Gn,{}),(0,Me.jsx)(mn,{}),(0,Me.jsx)(Hn,{}),(0,Me.jsx)($n,{})]})]}),nr=()=>(0,Me.jsx)(tr,{});t.render((0,Me.jsx)(e.StrictMode,{children:(0,Me.jsx)(nr,{})}),document.getElementById("root"))})()})();
//# sourceMappingURL=main.9e9963f0.js.map