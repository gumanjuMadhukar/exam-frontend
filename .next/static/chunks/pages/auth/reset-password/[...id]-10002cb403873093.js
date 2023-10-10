(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6114],{5467:function(e,o,n){"use strict";function r(e){return Object.keys(e).reduce(function(o,n){return(n.startsWith("data-")||n.startsWith("aria-")||"role"===n)&&!n.startsWith("data-__")&&(o[n]=e[n]),o},{})}n.d(o,{Z:function(){return r}})},99138:function(e,o,n){"use strict";n.d(o,{Z:function(){return M}});var r=n(87462),t=n(97685),i=n(4942),s=n(89739),l=n(4340),a=n(97937),c=n(21640),d=n(78860),u=n(94184),m=n.n(u),p=n(62874),f=n(67294),g=n(53124),h=n(5467),v=n(96159),Z=n(15671),x=n(43144),w=n(60136),y=n(73568),b=function(e){(0,w.Z)(n,e);var o=(0,y.Z)(n);function n(){var e;return(0,Z.Z)(this,n),e=o.apply(this,arguments),e.state={error:void 0,info:{componentStack:""}},e}return(0,x.Z)(n,[{key:"componentDidCatch",value:function(e,o){this.setState({error:e,info:o})}},{key:"render",value:function(){var e=this.props,o=e.message,n=e.description,r=e.children,t=this.state,i=t.error,s=t.info,l=s&&s.componentStack?s.componentStack:null,a=void 0===o?(i||"").toString():o;return i?f.createElement(M,{type:"error",message:a,description:f.createElement("pre",null,void 0===n?l:n)}):r}}]),n}(f.Component),C=n(67968),E=n(45503),S=n(14747),j=function(e,o,n,r,t){return(0,i.Z)({backgroundColor:e,border:r.lineWidth+"px "+r.lineType+" "+o},t+"-icon",{color:n})},I=function(e){var o,n,t,s=e.componentCls,l=e.motionDurationSlow,a=e.marginXS,c=e.marginSM,d=e.fontSize,u=e.fontSizeLG,m=e.lineHeight,p=e.borderRadiusLG,f=e.motionEaseInOutCirc,g=e.alertIconSizeLG,h=e.colorText,v=e.paddingContentVerticalSM,Z=e.alertPaddingHorizontal,x=e.paddingMD,w=e.paddingContentHorizontalLG;return t={},(0,i.Z)(t,s,(0,r.Z)((0,r.Z)({},(0,S.Wf)(e)),(o={position:"relative",display:"flex",alignItems:"center",padding:v+"px "+Z+"px",wordWrap:"break-word",borderRadius:p,"&&-rtl":{direction:"rtl"}},(0,i.Z)(o,s+"-content",{flex:1,minWidth:0}),(0,i.Z)(o,s+"-icon",{marginInlineEnd:a,lineHeight:0}),(0,i.Z)(o,"&-description",{display:"none",fontSize:d,lineHeight:m}),(0,i.Z)(o,"&-message",{color:h}),(0,i.Z)(o,"&&-motion-leave",{overflow:"hidden",opacity:1,transition:"max-height "+l+" "+f+", opacity "+l+" "+f+",\n        padding-top "+l+" "+f+", padding-bottom "+l+" "+f+",\n        margin-bottom "+l+" "+f}),(0,i.Z)(o,"&&-motion-leave-active",{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}),o))),(0,i.Z)(t,s+"-with-description",(n={alignItems:"flex-start",paddingInline:w,paddingBlock:x},(0,i.Z)(n,s+"-icon",{marginInlineEnd:c,fontSize:g,lineHeight:0}),(0,i.Z)(n,s+"-message",{display:"block",marginBottom:a,color:h,fontSize:u}),(0,i.Z)(n,s+"-description",{display:"block"}),n)),(0,i.Z)(t,s+"-banner",{marginBottom:0,border:"0 !important",borderRadius:0}),t},P=function(e){var o=e.componentCls,n=e.colorSuccess,t=e.colorSuccessBorder,s=e.colorSuccessBg,l=e.colorWarning,a=e.colorWarningBorder,c=e.colorWarningBg,d=e.colorError,u=e.colorErrorBorder,m=e.colorErrorBg,p=e.colorInfo,f=e.colorInfoBorder,g=e.colorInfoBg;return(0,i.Z)({},o,{"&-success":j(s,t,n,e,o),"&-info":j(g,f,p,e,o),"&-warning":j(c,a,l,e,o),"&-error":(0,r.Z)((0,r.Z)({},j(m,u,d,e,o)),(0,i.Z)({},o+"-description > pre",{margin:0,padding:0}))})},N=function(e){var o,n=e.componentCls,r=e.iconCls,t=e.motionDurationMid,s=e.marginXS,l=e.fontSizeIcon,a=e.colorIcon,c=e.colorIconHover;return(0,i.Z)({},n,(o={},(0,i.Z)(o,"&-action",{marginInlineStart:s}),(0,i.Z)(o,n+"-close-icon",(0,i.Z)({marginInlineStart:s,padding:0,overflow:"hidden",fontSize:l,lineHeight:l+"px",backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer"},r+"-close",{color:a,transition:"color "+t,"&:hover":{color:c}})),(0,i.Z)(o,"&-close-text",{color:a,transition:"color "+t,"&:hover":{color:c}}),o))},k=(0,C.Z)("Alert",function(e){var o,n=e.fontSizeHeading3;return[[I(o=(0,E.TS)(e,{alertIconSizeLG:n,alertPaddingHorizontal:12})),P(o),N(o)]]}),z=function(e,o){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>o.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)0>o.indexOf(r[t])&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(n[r[t]]=e[r[t]]);return n},B={success:s.Z,info:d.Z,error:l.Z,warning:c.Z},_=function(e){var o=e.icon,n=e.prefixCls,r=B[e.type]||null;return o?(0,v.wm)(o,f.createElement("span",{className:n+"-icon"},o),function(){return{className:m()(n+"-icon",(0,i.Z)({},o.props.className,o.props.className))}}):f.createElement(r,{className:n+"-icon"})},H=function(e){var o=e.isClosable,n=e.closeText,r=e.prefixCls,t=e.closeIcon,i=e.handleClose;return o?f.createElement("button",{type:"button",onClick:i,className:r+"-close-icon",tabIndex:0},n?f.createElement("span",{className:r+"-close-text"},n):t):null},W=function(e){var o,n,s=e.description,l=e.prefixCls,c=e.message,d=e.banner,u=e.className,v=e.style,Z=e.onMouseEnter,x=e.onMouseLeave,w=e.onClick,y=e.afterClose,b=e.showIcon,C=e.closable,E=e.closeText,S=e.closeIcon,j=void 0===S?f.createElement(a.Z,null):S,I=e.action,P=z(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),N=f.useState(!1),B=(0,t.Z)(N,2),W=B[0],M=B[1],O=f.useRef(),L=f.useContext(g.E_),T=L.getPrefixCls,R=L.direction,G=T("alert",l),X=k(G),A=(0,t.Z)(X,2),D=A[0],q=A[1],F=function(e){var o;M(!0),null===(o=P.onClose)||void 0===o||o.call(P,e)},U=!!E||C,Y=void 0!==(o=P.type)?o:d?"warning":"info",V=!!d&&void 0===b||b,$=m()(G,G+"-"+Y,(n={},(0,i.Z)(n,G+"-with-description",!!s),(0,i.Z)(n,G+"-no-icon",!V),(0,i.Z)(n,G+"-banner",!!d),(0,i.Z)(n,G+"-rtl","rtl"===R),n),void 0===u?"":u,q),J=(0,h.Z)(P);return D(f.createElement(p.Z,{visible:!W,motionName:G+"-motion",motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:y},function(e){var o=e.className,n=e.style;return f.createElement("div",(0,r.Z)({ref:O,"data-show":!W,className:m()($,o),style:(0,r.Z)((0,r.Z)({},v),n),onMouseEnter:Z,onMouseLeave:x,onClick:w,role:"alert"},J),V?f.createElement(_,{description:s,icon:P.icon,prefixCls:G,type:Y}):null,f.createElement("div",{className:G+"-content"},c?f.createElement("div",{className:G+"-message"},c):null,s?f.createElement("div",{className:G+"-description"},s):null),I?f.createElement("div",{className:G+"-action"},I):null,f.createElement(H,{isClosable:!!U,closeText:E,prefixCls:G,closeIcon:j,handleClose:F}))}))};W.ErrorBoundary=b;var M=W},34302:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/reset-password/[...id]",function(){return n(97311)}])},98320:function(e,o,n){"use strict";var r=n(85893),t=n(41664),i=n.n(t),s=n(60144);let l=e=>{let{text:o="Submit",customStyle:n={color:s.w.PRIMARY,fontWeight:"600"},url:t="/"}=e;return(0,r.jsx)(i(),{style:{color:n.color,fontWeight:null==n?void 0:n.fontWeight,padding:"0"},href:t,children:o})};o.Z=l},41699:function(e,o,n){"use strict";var r=n(85893),t=n(94907);let i=e=>{let{children:o}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(t.Xs,{children:[(0,r.jsx)(t.n4,{children:(0,r.jsx)("img",{src:"/nextly-logo.svg",alt:"logo",width:"168px"})}),(0,r.jsxs)(t.Hf,{children:[(0,r.jsx)(t.Uu,{children:(0,r.jsx)("img",{src:"/password-login.svg",alt:"login-image"})}),(0,r.jsx)(t.w2,{}),(0,r.jsx)(t.U$,{children:o})]})]})})};o.Z=i},97311:function(e,o,n){"use strict";n.r(o);var r=n(85893),t=n(67294),i=n(80442),s=n(24016),l=n(99138),a=n(71577),c=n(88767),d=n(11163),u=n(94907),m=n(41699),p=n(9008),f=n.n(p),g=n(18816),h=n(98320),v=n(78134),Z=n(60144);let x=()=>{let[e,o]=(0,t.useState)(null),n=(0,d.useRouter)(),{id:m}=n.query,p=(0,c.useMutation)(e=>(0,g.c0)(e)),x=e=>{let r=Number(m),t={...e,userId:r};p.mutate(t,{onSuccess(e){o(null),n.push("/auth/login")},onError(e){var n,r,t,i;let s=null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(r=n.data)||void 0===r?void 0:r.errors,l=null==s?void 0:s.map(e=>e.errors.matches),a=null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(i=t.data)||void 0===i?void 0:i.message;o(l||a)}})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f(),{children:(0,r.jsx)("title",{children:"Reset Password"})}),(0,r.jsx)("h2",{children:"Create New Password"}),(0,r.jsxs)(i.Z,{name:"resetPassword",onFinish:x,autoComplete:"off",children:[(0,r.jsx)(i.Z.Item,{name:"newPassword",rules:[{required:!0,message:"Please input your password!"}],children:(0,r.jsx)(s.Z.Password,{size:"large",placeholder:"Password",autoComplete:"false",type:"password"})}),(0,r.jsx)(i.Z.Item,{name:"confirmPassword",dependencies:["newPassword"],rules:[{required:!0,message:"Please confirm your password!"},e=>{let{getFieldValue:o}=e;return{validator:(e,n)=>n&&o("newPassword")!==n?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}],children:(0,r.jsx)(s.Z.Password,{size:"large",placeholder:"Confirm Password",autoComplete:"false",type:"password"})}),e&&(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{type:"error",message:e,banner:!0}),(0,r.jsx)("br",{})]}),(0,r.jsx)(i.Z.Item,{children:(0,r.jsx)(a.Z,{style:{width:"100%",backgroundColor:Z.w.PRIMARY,color:"#fff"},size:"large",htmlType:"submit",children:"Submit"})})]}),(0,r.jsx)(u.al,{children:(0,r.jsx)(h.Z,{text:"Back to Login",url:v.Z.login,customStyle:{color:"#404040",fontWeight:"400"}})})]})};x.getLayout=function(e){return(0,r.jsx)(m.Z,{children:e})},o.default=x},9008:function(e,o,n){e.exports=n(83121)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=34302)}),_N_E=e.O()}]);