(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9152],{72269:function(n,e,i){"use strict";i.d(e,{Z:function(){return E}});var t=i(87462),a=i(4942),r=i(97685),c=i(50888),s=i(94184),o=i.n(s),l=i(91),d=i(67294),h=i(21770),g=i(15105),u=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],w=d.forwardRef(function(n,e){var i,c=n.prefixCls,s=void 0===c?"rc-switch":c,w=n.className,m=n.checked,p=n.defaultChecked,S=n.disabled,x=n.loadingIcon,M=n.checkedChildren,Z=n.unCheckedChildren,I=n.onClick,v=n.onChange,f=n.onKeyDown,b=(0,l.Z)(n,u),P=(0,h.Z)(!1,{value:m,defaultValue:p}),C=(0,r.Z)(P,2),k=C[0],y=C[1];function j(n,e){var i=k;return S||(y(i=n),null==v||v(i,e)),i}var z=o()(s,w,(i={},(0,a.Z)(i,"".concat(s,"-checked"),k),(0,a.Z)(i,"".concat(s,"-disabled"),S),i));return d.createElement("button",(0,t.Z)({},b,{type:"button",role:"switch","aria-checked":k,disabled:S,className:z,ref:e,onKeyDown:function(n){n.which===g.Z.LEFT?j(!1,n):n.which===g.Z.RIGHT&&j(!0,n),null==f||f(n)},onClick:function(n){var e=j(!k,n);null==I||I(e,n)}}),x,d.createElement("span",{className:"".concat(s,"-inner")},d.createElement("span",{className:"".concat(s,"-inner-checked")},M),d.createElement("span",{className:"".concat(s,"-inner-unchecked")},Z)))});w.displayName="Switch";var m=i(53124),p=i(98866),S=i(97647),x=i(28704),M=i(10274),Z=i(67968),I=i(45503),v=i(14747),f=function(n){var e,i,t,r,c,s=n.componentCls,o=s+"-inner";return(0,a.Z)({},s,(0,a.Z)({},"&"+s+"-small",(c={minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:n.switchHeightSM+"px"},(0,a.Z)(c,s+"-inner",(e={},(0,a.Z)(e,o+"-checked",{marginInlineStart:"calc("+n.switchInnerMarginMinSM+"px - 100% + "+(n.switchPinSizeSM+2*n.switchPadding)+"px)",marginInlineEnd:"calc("+n.switchInnerMarginMaxSM+"px + 100% - "+(n.switchPinSizeSM+2*n.switchPadding)+"px)"}),(0,a.Z)(e,o+"-unchecked",{marginTop:-n.switchHeightSM,marginInlineStart:n.switchInnerMarginMaxSM,marginInlineEnd:n.switchInnerMarginMinSM}),e)),(0,a.Z)(c,s+"-handle",{width:n.switchPinSizeSM,height:n.switchPinSizeSM}),(0,a.Z)(c,s+"-loading-icon",{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),(0,a.Z)(c,"&"+s+"-checked",(t={},(0,a.Z)(t,s+"-inner",(i={},(0,a.Z)(i,o+"-checked",{marginInlineStart:n.switchInnerMarginMinSM,marginInlineEnd:n.switchInnerMarginMaxSM}),(0,a.Z)(i,o+"-unchecked",{marginInlineStart:"calc("+n.switchInnerMarginMaxSM+"px + 100% - "+(n.switchPinSizeSM+2*n.switchPadding)+"px)",marginInlineEnd:"calc("+n.switchInnerMarginMinSM+"px - 100% + "+(n.switchPinSizeSM+2*n.switchPadding)+"px)"}),i)),(0,a.Z)(t,s+"-handle",{insetInlineStart:"calc(100% - "+(n.switchPinSizeSM+n.switchPadding)+"px)"}),t)),(0,a.Z)(c,"&:not("+s+"-disabled):active",(r={},(0,a.Z)(r,"&:not("+s+"-checked) "+o,(0,a.Z)({},o+"-unchecked",{marginInlineStart:n.switchInnerMarginMaxSM+n.marginXXS/2,marginInlineEnd:n.switchInnerMarginMinSM-n.marginXXS/2})),(0,a.Z)(r,"&"+s+"-checked "+o,(0,a.Z)({},o+"-checked",{marginInlineStart:n.switchInnerMarginMinSM-n.marginXXS/2,marginInlineEnd:n.switchInnerMarginMaxSM+n.marginXXS/2})),r)),c)))},b=function(n){var e,i=n.componentCls;return(0,a.Z)({},i,(e={},(0,a.Z)(e,i+"-loading-icon"+n.iconCls,{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),(0,a.Z)(e,"&"+i+"-checked "+i+"-loading-icon",{color:n.switchColor}),e))},P=function(n){var e,i,t=n.componentCls,r=t+"-handle";return(0,a.Z)({},t,(i={},(0,a.Z)(i,r,{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:"all "+n.switchDuration+" ease-in-out","&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:"all "+n.switchDuration+" ease-in-out",content:'""'}}),(0,a.Z)(i,"&"+t+"-checked "+r,{insetInlineStart:"calc(100% - "+(n.switchPinSize+n.switchPadding)+"px)"}),(0,a.Z)(i,"&:not("+t+"-disabled):active",(e={},(0,a.Z)(e,r+"::before",{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),(0,a.Z)(e,"&"+t+"-checked "+r+"::before",{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),e)),i))},C=function(n){var e,i,t,r,c=n.componentCls,s=c+"-inner";return(0,a.Z)({},c,(r={},(0,a.Z)(r,s,(e={display:"block",overflow:"hidden",borderRadius:100,height:"100%"},(0,a.Z)(e,s+"-checked, "+s+"-unchecked",{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start "+n.switchDuration+" ease-in-out, margin-inline-end "+n.switchDuration+" ease-in-out",pointerEvents:"none"}),(0,a.Z)(e,s+"-checked",{marginInlineStart:"calc("+n.switchInnerMarginMin+"px - 100% + "+(n.switchPinSize+2*n.switchPadding)+"px)",marginInlineEnd:"calc("+n.switchInnerMarginMax+"px + 100% - "+(n.switchPinSize+2*n.switchPadding)+"px)"}),(0,a.Z)(e,s+"-unchecked",{marginTop:-n.switchHeight,marginInlineStart:n.switchInnerMarginMax,marginInlineEnd:n.switchInnerMarginMin}),e)),(0,a.Z)(r,"&"+c+"-checked "+s,(i={},(0,a.Z)(i,s+"-checked",{marginInlineStart:n.switchInnerMarginMin,marginInlineEnd:n.switchInnerMarginMax}),(0,a.Z)(i,s+"-unchecked",{marginInlineStart:"calc("+n.switchInnerMarginMax+"px + 100% - "+(n.switchPinSize+2*n.switchPadding)+"px)",marginInlineEnd:"calc("+n.switchInnerMarginMin+"px - 100% + "+(n.switchPinSize+2*n.switchPadding)+"px)"}),i)),(0,a.Z)(r,"&:not("+c+"-disabled):active",(t={},(0,a.Z)(t,"&:not("+c+"-checked) "+s,(0,a.Z)({},s+"-unchecked",{marginInlineStart:n.switchInnerMarginMax+2*n.switchPadding,marginInlineEnd:n.switchInnerMarginMin-2*n.switchPadding})),(0,a.Z)(t,"&"+c+"-checked "+s,(0,a.Z)({},s+"-checked",{marginInlineStart:n.switchInnerMarginMin-2*n.switchPadding,marginInlineEnd:n.switchInnerMarginMax+2*n.switchPadding})),t)),r))},k=function(n){var e,i=n.componentCls;return(0,a.Z)({},i,(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},(0,v.Wf)(n)),(0,a.Z)({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:n.switchHeight+"px",verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all "+n.motionDurationMid,userSelect:"none"},"&:hover:not("+i+"-disabled)",{background:n.colorTextTertiary})),(0,v.Qy)(n)),(e={},(0,a.Z)(e,"&"+i+"-checked",(0,a.Z)({background:n.switchColor},"&:hover:not("+i+"-disabled)",{background:n.colorPrimaryHover})),(0,a.Z)(e,"&"+i+"-loading, &"+i+"-disabled",{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),(0,a.Z)(e,"&"+i+"-rtl",{direction:"rtl"}),e)))},y=(0,Z.Z)("Switch",function(n){var e=n.fontSize*n.lineHeight,i=n.controlHeight/2,t=e-4,a=i-4,r=(0,I.TS)(n,{switchMinWidth:2*t+8,switchHeight:e,switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchInnerMarginMin:t/2,switchInnerMarginMax:t+2+4,switchPadding:2,switchPinSize:t,switchBg:n.colorBgContainer,switchMinWidthSM:2*a+4,switchHeightSM:i,switchInnerMarginMinSM:a/2,switchInnerMarginMaxSM:a+2+4,switchPinSizeSM:a,switchHandleShadow:"0 2px 4px 0 "+new M.C("#00230b").setAlpha(.2).toRgbString(),switchLoadingIconSize:.75*n.fontSizeIcon,switchLoadingIconColor:"rgba(0, 0, 0, "+n.opacityLoading+")",switchHandleActiveInset:"-30%"});return[k(r),C(r),P(r),b(r),f(r)]}),j=function(n,e){var i={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&0>e.indexOf(t)&&(i[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)0>e.indexOf(t[a])&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(i[t[a]]=n[t[a]]);return i},z=d.forwardRef(function(n,e){var i,s=n.prefixCls,l=n.size,h=n.disabled,g=n.loading,u=n.className,M=j(n,["prefixCls","size","disabled","loading","className"]),Z=d.useContext(m.E_),I=Z.getPrefixCls,v=Z.direction,f=d.useContext(S.Z),b=d.useContext(p.Z),P=I("switch",s),C=d.createElement("div",{className:P+"-handle"},g&&d.createElement(c.Z,{className:P+"-loading-icon"})),k=y(P),z=(0,r.Z)(k,2),E=z[0],N=z[1],H=o()((i={},(0,a.Z)(i,P+"-small","small"===(l||f)),(0,a.Z)(i,P+"-loading",g),(0,a.Z)(i,P+"-rtl","rtl"===v),i),void 0===u?"":u,N);return E(d.createElement(x.Z,{insertExtraNode:!0},d.createElement(w,(0,t.Z)({},M,{prefixCls:P,className:H,disabled:(null!=h?h:b)||g,ref:e,loadingIcon:C}))))});z.__ANT_SWITCH=!0;var E=z},2438:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dir/program/[programContentId]/[contentDetailsId]",function(){return i(75562)}])},75562:function(n,e,i){"use strict";i.r(e);var t=i(7297),a=i(85893),r=i(94589),c=i(27790),s=i(75527),o=i(71577),l=i(71230),d=i(15746),h=i(24016),g=i(83062),u=i(72269),w=i(88577),m=i(41664),p=i.n(m),S=i(88360),x=i(81660),M=i(67294),Z=i(69120),I=i(8392),v=i(88767),f=i(11163),b=i(9166),P=i(60144),C=i(28068),k=i(28189),y=i(46040);function j(){let n=(0,t.Z)([""]);return j=function(){return n},n}let z={currentPage:Z.D0,pageSize:Z.L8,status:"true",search:""},E=()=>{var n,e,i,t,r;let[m,Z]=(0,M.useState)(""),j=(0,f.useRouter)(),{programId:E}=j.query,H=new k.ZP,_=new I.ZP,[O,R]=(0,M.useState)(!1),[D,T]=(0,M.useState)(!1),[L,Q]=(0,M.useState)(!1),[A,W]=(0,M.useState)(!1),{contentDetailsId:X}=j.query,B=()=>{W(!A)},Y=(0,v.useQueryClient)(),q=()=>{R(!O)},[K,G]=(0,M.useState)(!1),[F,V]=(0,M.useState)(""),J=n=>{n?V(n):V(""),G(!K)},[U,$]=(0,M.useState)(z),nn=(0,v.useQuery)(["QuestionList",{status:U.status,page:U.currentPage,limit:U.pageSize,search:U.search}],async()=>{let n={page:U.currentPage,limit:U.pageSize};U.search&&(n.search=U.search);let e=await _.getQuestionBasedOnCourseContent(X,U);return null==e?void 0:e.data},{enabled:!!X}),ne=null==nn?void 0:null===(n=nn.data)||void 0===n?void 0:n.data,ni=null==nn?void 0:null===(e=nn.data)||void 0===e?void 0:e.meta,nt=(0,v.useQuery)("program-list",()=>H.get(E).then(n=>n.data)),na=null==nt?void 0:null===(i=nt.data)||void 0===i?void 0:i.data,nr=(0,v.useMutation)(n=>_.destroy(n)),nc=()=>{nr.mutate(F,{onSuccess(){Y.invalidateQueries(["QuestionList"]),c.ZP.success("Removed Question Successfull"),J()},onError(n){var e,i;let t=null==n?void 0:null===(e=n.response)||void 0===e?void 0:null===(i=e.data)||void 0===i?void 0:i.message;c.ZP.error(t)}})};return(0,a.jsxs)(N,{children:[(0,a.jsxs)(b.mr,{children:[(0,a.jsxs)(b.rm,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(s.Z.Item,{children:(0,a.jsx)(p(),{href:"/dashboard",children:"Home"})}),(0,a.jsx)(s.Z.Item,{children:(0,a.jsx)(p(),{href:"/dir/program",children:"Program"})}),(0,a.jsx)(s.Z.Item,{children:(0,a.jsxs)("span",{style:{color:P.w.BLACK},children:["Question of ",null==na?void 0:na.name]})})]}),(0,a.jsxs)(b.oY,{children:[(0,a.jsxs)("h2",{children:["Question of ",null==na?void 0:na.name]}),(0,a.jsx)(o.Z,{style:{background:P.w.COLOR_PRIMARY_BG,boxShadow:"none",color:P.w.WHITE},icon:(0,a.jsx)(S.Z,{}),onClick:q,children:"Import Question"})]})]}),(0,a.jsx)(b.E1,{children:(0,a.jsx)(b.A_,{children:(0,a.jsxs)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,a.jsx)(d.Z,{span:12,xs:{span:24},sm:{span:24},md:{span:12},lg:{span:12},children:(0,a.jsx)(h.Z,{name:"search",id:"search",type:"text",placeholder:"Search By Name",autoComplete:"false",value:m,onChange:n=>Z(n.target.value)})}),(0,a.jsx)(d.Z,{span:6,xs:{span:12},sm:{span:12},md:{span:6},lg:{span:6},className:"search-col-margin",children:(0,a.jsx)(o.Z,{type:"ghost",ghost:!0,style:{boxShadow:"none",borderColor:P.w.PRIMARY,color:P.w.PRIMARY,width:"100%"},onClick(){Z(""),$(z)},children:"Reset"})}),(0,a.jsx)(d.Z,{span:6,xs:{span:12},sm:{span:12},md:{span:6},lg:{span:6},className:"search-col-margin",children:(0,a.jsx)(o.Z,{type:"primary",style:{boxShadow:"none",width:"100%"},children:"Search"})})]})})})]}),(0,a.jsx)("div",{style:{marginLeft:"20px",marginBottom:"10px"},children:(0,a.jsx)(g.Z,{placement:"bottom",title:A?"Hide Data":"Show Data",children:(0,a.jsx)(u.Z,{onChange:B,size:"small"})})}),(0,a.jsx)(b.Y3,{children:(0,a.jsx)(w.Z,{columns:[{title:"S.N",render(n,e,i){let t=U.currentPage,a=U.pageSize;return(t-1)*a+i+1},responsive:["sm","md","lg"]},{title:"Question",key:"question_text",dataIndex:"question_text",render:n=>(0,a.jsx)("p",{className:A?"":"blur",children:n}),responsive:["sm","md","lg"]},{title:"Weight Count",dataIndex:"weightage",render:n=>(0,a.jsx)("p",{className:A?"":"blur",children:n}),responsive:["sm","md","lg"]},{title:"Options",render:n=>(0,a.jsx)("text",{className:A?"":"blur",children:n.options.map(n=>"".concat(n.option_text," : "))}),responsive:["sm","md","lg"]}],dataSource:ne,scroll:{x:1e3},pagination:(null==nn?void 0:null===(t=nn.data)||void 0===t?void 0:null===(r=t.meta)||void 0===r?void 0:r.total)>10&&{defaultPageSize:10,total:null==ni?void 0:ni.total,hideOnSinglePage:!0,showSizeChanger:!0,showTotal:(n,e)=>"".concat(e[0],"-").concat(e[1]," of ").concat(n," items"),onChange(n,e){$({...U,currentPage:n,pageSize:e})},className:"bg-white-halfrem",responsive:!0}})}),(0,a.jsx)(C.Z,{buttonTitle:"Confirm",openCloseModal:J,open:K,confirmText:"remove the document",onConfirmModal:nc,icon:(0,a.jsx)(x.Z,{style:{color:P.w.DANGER}})}),(0,a.jsx)(y.n,{handleCancel:q,isModalOpen:O})]})};e.default=E;let N=r.ZP.div(j())}},function(n){n.O(0,[2808,8045,8668,2345,4935,9774,2888,179],function(){return n(n.s=2438)}),_N_E=n.O()}]);