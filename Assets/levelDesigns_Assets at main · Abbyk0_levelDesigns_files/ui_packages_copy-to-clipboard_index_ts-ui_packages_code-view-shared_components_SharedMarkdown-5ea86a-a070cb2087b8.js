"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_copy-to-clipboard_index_ts-ui_packages_code-view-shared_components_SharedMarkdown-5ea86a"],{47529:(e,t,o)=>{o.d(t,{T:()=>f,D:()=>m});var n=o(74848),a=o(54008),i=o(73272),r=o(38621),l=o(87330),s=o(30729),c=o(96540),d=o(20053),p=o(32799),u=o(7572);function m(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e);let t=document.body;if(!t)return Promise.reject(Error());let o=function(e){let t=document.createElement("pre");return t.style.width="1px",t.style.height="1px",t.style.position="fixed",t.style.top="5px",t.textContent=e,t}(e);return t.appendChild(o),!function(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e.textContent||"");let t=getSelection();if(null==t)return Promise.reject(Error());t.removeAllRanges();let o=document.createRange();o.selectNodeContents(e),t.addRange(o),document.execCommand("copy"),t.removeAllRanges(),Promise.resolve()}(o),t.removeChild(o),Promise.resolve()}function f({icon:e=r.CopyIcon,size:t="medium",onCopy:o,sx:a,textToCopy:s,tooltipProps:f,ariaLabel:y,accessibleButton:g,hasPortalTooltip:w=!1,avoidStyledComponent:x=!1,className:b}){let[v,C]=c.useState(!1),N=(0,i.A)(),k=()=>{C(!0),(0,u.i)("Copied!"),m(s),o?.(),setTimeout(()=>N()&&C(!1),2e3)},E=y??`Copy ${s} to clipboard`,T=v?"Copied!":E;return(f={...f,"aria-hidden":"true"},w)?(0,n.jsx)(h,{label:E,size:t,textToCopy:s,copied:v,onClickCopy:k,tooltipProps:f,text:T,avoidStyledComponent:x,sx:a,className:b}):(0,n.jsx)(p.m,{className:"position-absolute",text:T,"aria-label":E,type:"label",...f,children:(0,n.jsx)(l.K,{icon:v?r.CheckIcon:e,variant:"invisible",size:t,tabIndex:!1===g?-1:0,className:(0,d.$)(v?"color-fg-success":void 0,b),sx:{...a},onClick:k})})}function h({icon:e=r.CopyIcon,size:t="medium",label:o,accessibleButton:i,copied:l,onClickCopy:s,text:d,tooltipProps:p,sx:u,avoidStyledComponent:m=!1,className:f}){let h=c.useRef(null),[g,w]=(0,a.B)({contentRef:h,"aria-label":o,text:d,...p});return(0,n.jsxs)("div",{ref:h,...g,children:[(0,n.jsx)(y,{icon:e,size:t,label:o,copied:l,onClickCopy:s,accessibleButton:i,avoidStyledComponent:m,className:f,sx:u}),w]})}function y({icon:e=r.CopyIcon,size:t="medium",label:o,accessibleButton:a,copied:i,onClickCopy:c,sx:p,avoidStyledComponent:u=!1,className:m}){return u&&!p?(0,n.jsx)("button",{"aria-label":o,tabIndex:!1===a?-1:0,className:(0,d.$)(`Button Button--iconOnly Button--invisible Button--${t} ${i?"color-fg-success":""}`,m),onClick:c,children:i?(0,n.jsx)(r.CheckIcon,{}):(0,n.jsx)(s.A,{icon:e})}):(0,n.jsx)(l.K,{unsafeDisableTooltip:!0,"aria-label":o,icon:i?r.CheckIcon:e,variant:"invisible",size:t,tabIndex:!1===a?-1:0,className:i?"color-fg-success":void 0,sx:{...p},onClick:c})}try{f.displayName||(f.displayName="CopyToClipboardButton")}catch{}try{h.displayName||(h.displayName="PortalTooltipCopyButton")}catch{}try{y.displayName||(y.displayName="PortalCopyIconButton")}catch{}},6032:(e,t,o)=>{o.d(t,{U:()=>i});let n=e=>{let t=getComputedStyle(e,null);return["overflow","overflow-y","overflow-x"].some(e=>{let o=t.getPropertyValue(e);return"auto"===o||"scroll"===o})},a=(e,t)=>e&&null!==e.parentNode?a(e.parentNode,t.concat([e])):t;function i(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(let t of a(e.parentNode,[]))if((t instanceof HTMLElement||t instanceof SVGElement)&&n(t))return t;return document.scrollingElement||document.documentElement}}},22579:(e,t,o)=>{o.d(t,{s:()=>p,e:()=>u});var n=o(74848),a=o(89504),i=o(51550),r=o(22084),l=o(51012),s=o(27788),c=o(96540),d=o(47767);let p=(0,c.forwardRef)(function({onAnchorClick:e,richText:t,stickyHeaderHeight:o,sx:p,suppressHydrationWarning:m},f){let{hash:h}=(0,d.zy)(),y=(0,a.t)(),g=(0,s.Z)(),w=(0,c.useRef)(null);return(0,c.useImperativeHandle)(f,()=>w.current),(0,c.useEffect)(()=>{let e=()=>{u(window.location.hash,o)};return window.addEventListener("load",e),window.addEventListener("hashchange",e),()=>{window.removeEventListener("load",e),window.removeEventListener("hashchange",e)}},[]),(0,l.N)(()=>{w?.current&&u(window.location.hash,o)},[h]),(0,n.jsx)(r.oG,{ref:w,className:"js-snippet-clipboard-copy-unpositioned",html:t,sx:p,suppressHydrationWarning:m,"data-hpc":!0,onClick:t=>{let n=t.metaKey||t.ctrlKey,a=t.target.closest("a");if(a&&a.href){if(!n){let e=a.href,n=new URL(e,window.location.origin);(0,i.A)(window.location.href,e)?(u(n.hash,o),window.location.hash===n.hash&&t.preventDefault()):e.startsWith(`${window.location.origin}/${y.ownerLogin}/${y.name}/`)&&(g(n.pathname+n.search+n.hash),t.preventDefault())}e?.(t)}}})});function u(e,t=125){var o,n;if(!e)return;let a=(function(e){try{return decodeURIComponent(e.slice(1))}catch{return""}})(e).toLowerCase(),i=(o=document,""===(n=a.startsWith("user-content-")?a:`user-content-${a}`)?null:o.getElementById(n)||o.getElementsByName(n)[0]||null);i&&document&&document.defaultView&&setTimeout(()=>{window.requestAnimationFrame(()=>{let e=i.getBoundingClientRect().top-document.body.getBoundingClientRect().top-t;window.scrollTo({top:e});let o=i.closest("h1,h2,h3,h4,h5,h6,li,span");o&&(o.focus(),o.setAttribute("data-react-autofocus","true"))})},1)}try{p.displayName||(p.displayName="SharedMarkdownContent")}catch{}try{p.displayName||(p.displayName="SharedMarkdownContent")}catch{}},26020:(e,t,o)=>{o.d(t,{Y:()=>m});var n=o(74848),a=o(42297),i=o(44999),r=o(16255),l=o(20053),s=o(96540);let c=o(10619).Ay.span.withConfig({displayName:"ControlledTooltip__TooltipBase",componentId:"sc-6c5da61c-0"})(["&::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 ",";-webkit-font-smoothing:subpixel-antialiased;color:",";text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(data-visible-text);background:",";border-radius:",";opacity:0;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&.tooltipped-open,&:hover,&:active,&:focus{&::after{display:inline-block;text-decoration:none;animation-name:tooltip-appear;animation-duration:0.1s;animation-fill-mode:forwards;animation-timing-function:ease-in;animation-delay:0s;}}&.tooltipped-no-delay.tooltipped-open,&.tooltipped-no-delay:hover,&.tooltipped-no-delay:active,&.tooltipped-no-delay:focus{&::after{animation-delay:0s;}}&.tooltipped-s,&.tooltipped-se,&.tooltipped-sw{&::after{top:100%;right:50%;margin-top:6px;}}&.tooltipped-se{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-sw::after{margin-right:-",";}&.tooltipped-n,&.tooltipped-ne,&.tooltipped-nw{&::after{right:50%;bottom:100%;margin-bottom:6px;}}&.tooltipped-ne{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-nw::after{margin-right:-",";}&.tooltipped-s::after,&.tooltipped-n::after{transform:translateX(50%);}&.tooltipped-w{&::after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%);}}&.tooltipped-e{&::after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%);}}&.tooltipped-align-right-2::after{right:0;margin-right:0;}&.tooltipped-align-left-2::after{left:0;margin-left:0;}",";"],(0,a.Jt)("fonts.normal"),(0,a.Jt)("colors.fg.onEmphasis"),(0,a.Jt)("colors.neutral.emphasisPlus"),(0,a.Jt)("radii.2"),(0,a.Jt)("space.3"),(0,a.Jt)("space.3"),(0,a.Jt)("space.3"),(0,a.Jt)("space.3"),i.A),d=()=>()=>void 0,p=()=>!1,u=()=>!0,m=(0,s.forwardRef)(function({direction:e="n",className:t,text:o,noDelay:a,align:i,wrap:m,open:f=!1,portalProps:h={},...y},g){let w=(0,s.useSyncExternalStore)(d,u,p),x=(0,l.$)(t,`tooltipped-${e}`,i&&`tooltipped-align-${i}-2`,a&&"tooltipped-no-delay",m&&"tooltipped-multiline",f&&"tooltipped-open");return w?(0,n.jsx)(r.Z,{...h,children:(0,n.jsx)(c,{ref:g,role:"tooltip","aria-label":o,"data-visible-text":o||y["aria-label"],...y,sx:{position:"fixed",zIndex:1,...y.sx},className:x})}):null});try{m.displayName||(m.displayName="ControlledTooltip")}catch{}},68976:(e,t,o)=>{o.d(t,{m:()=>s});var n=o(74848),a=o(69676),i=o(96540),r=o(26020),l=o(6032);let s=(0,i.forwardRef)(function({contentRef:e,open:t,anchoredPositionAlignment:o,anchorSide:s,anchorOffset:c,alignmentOffset:d,allowOutOfBounds:p,...u},m){let f=(0,i.useRef)(null);(0,i.useImperativeHandle)(m,()=>f.current);let h=(0,i.useRef)({left:0,top:0}),y=(0,i.useSyncExternalStore)((0,i.useCallback)(o=>{if(!f.current||!e.current||!t)return()=>void 0;let n=(0,l.U)(e.current);return n?.addEventListener("scroll",o),()=>{n?.removeEventListener("scroll",o)}},[e,t]),(0,i.useCallback)(()=>{if(!f.current||!e.current)return h.current;let t=(0,a.uG)(f.current,e.current,{align:o??"center",side:s??"outside-top",alignmentOffset:d??0,anchorOffset:c??0,allowOutOfBounds:p});return(t.left!==h.current.left||t.top!==h.current.top)&&(h.current=t),h.current},[e,d,c,o,s,p]),(0,i.useCallback)(()=>h.current,[]));return(0,n.jsx)(r.Y,{...u,ref:f,open:t,style:{position:"absolute",...y,...u.style}})});try{s.displayName||(s.displayName="PortalTooltip")}catch{}},54008:(e,t,o)=>{o.d(t,{B:()=>r});var n=o(74848),a=o(96540),i=o(68976);function r({includeAriaAttributes:e=!0,...t}){let o=(0,a.useId)(),[r,l]=(0,a.useState)(!1),s=t.open??r,c=t.id??o,d=e?{"aria-describedby":c}:{},p=(0,a.useCallback)(()=>l(!0),[]),u=(0,a.useCallback)(()=>l(!1),[]);return[{...d,onPointerEnter:p,onPointerLeave:u,onFocus:p,onBlur:u},(0,n.jsx)(i.m,{...t,open:s,id:c},"portal-tooltip")]}}}]);
//# sourceMappingURL=ui_packages_copy-to-clipboard_index_ts-ui_packages_code-view-shared_components_SharedMarkdown-5ea86a-f104671570d9.js.map