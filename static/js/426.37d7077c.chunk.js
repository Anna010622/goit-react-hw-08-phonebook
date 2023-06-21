"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[426],{7426:function(e,n,t){t.r(n),t.d(n,{default:function(){return le}});var r=t(4087),i=t(1413),s=t(9439),o=t(9434),a=t(1134),l=t(4695),c=t(8007),d=t(6052),u=t(6351),x=t(1252),h=t(3665),p=t(5946),f=t(2392),m=t(8208),g=t(311),j=t(7806),b=t(1175),v=t(9140),C=t(4125),y=t(2435),I=t(2791),D=t(1836),S=t(8656),w=t(184),Z=c.Ry({name:c.Z_().required("Name is required").min(3,"Name must be no less than 3 characters long").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces"),number:c.Z_().required("Number is required").transform((function(e){return e.replace(/\D+/g,"")})).min(7,"Number phone must be no less than 7 characters long").max(12,"Number phone must be no more than 12 digits")}).required(),$=function(){var e=(0,I.useState)(!1),n=(0,s.Z)(e,2),t=n[0],r=n[1],c=(0,o.I0)(),$=(0,o.v9)(u.Af),_=(0,o.v9)(u.Y),k=(0,D.p)();(0,I.useEffect)((function(){_||r(!1)}),[_]);var z=(0,a.cI)({mode:"onTouched",resolver:(0,l.X)(Z)}),N=z.register,q=z.handleSubmit,A=z.reset,F=z.formState.errors,R=(0,x.ff)("teal.50","#0a192f"),B=(0,x.ff)("teal.800","teal.500");return(0,w.jsxs)(h.g,{onSubmit:q((function(e){var n=e.name,t=e.number;if(r(!0),$.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return k({title:"".concat(n," is already in contacts"),isClosable:!0,position:"top-right",status:"info",duration:3e3});c((0,d.uK)({name:n,number:t})),A()})),as:"form",mx:"auto",justifyContent:"center",mb:6,p:"4",maxH:"fit",children:[(0,w.jsx)(p.X,{children:"Create new contact"}),(0,w.jsxs)(f.NI,{isInvalid:F.name,isRequired:!0,children:[(0,w.jsx)(m.l,{fontWeight:"600",children:"Name"}),(0,w.jsxs)(g.B,{children:[(0,w.jsx)(j.Z,{pointerEvents:"none",children:(0,w.jsx)(b.q,{bg:B,size:"xs"})}),(0,w.jsx)(v.I,(0,i.Z)((0,i.Z)({type:"text",placeholder:"Enter contact name",_placeholder:{opacity:.5,color:"inherit"}},N("name")),{},{bg:R}))]}),(0,w.jsx)(C.J1,{children:F.name&&F.name.message})]}),(0,w.jsxs)(f.NI,{isInvalid:F.number,isRequired:!0,children:[(0,w.jsx)(m.l,{fontWeight:"600",children:"Phone"}),(0,w.jsxs)(g.B,{children:[(0,w.jsx)(j.Z,{pointerEvents:"none",children:(0,w.jsx)(S.q,{color:B})}),(0,w.jsx)(v.I,(0,i.Z)((0,i.Z)({type:"tel",placeholder:"Enter phone number",_placeholder:{opacity:.5,color:"inherit"}},N("number")),{},{bg:R}))]}),(0,w.jsx)(C.J1,{children:F.number&&F.number.message})]}),(0,w.jsx)(y.z,{type:"submit",variant:"outline",colorScheme:"teal",isLoading:_&&t,children:"Add contact"})]})},_=t(3541),k=t(6907),z=function(e){var n=e.onCancel,t=e.contact,r=(0,a.cI)({mode:"onTouched",resolver:(0,l.X)(Z)}),s=r.register,c=r.handleSubmit,u=r.formState,p=u.errors,g=u.isSubmitting,j=u.isValid,b=(0,D.p)(),C=(0,o.I0)(),I=(0,x.ff)("teal.50","#0a192f");return(0,w.jsxs)(h.g,{as:"form",spacing:4,onSubmit:c((function(e){var r=e.name,i=e.number;C((0,d.Tk)({id:t.id,body:{name:r,number:i}})).unwrap().then((function(){b({title:"Contact updated",isClosable:!0,position:"top-right",status:"success",duration:3e3}),n()})).catch((function(){return b({title:"Something went wrong. Please try again later",isClosable:!0,position:"top-right",status:"error",duration:3e3})}))})),p:6,children:[(0,w.jsxs)(f.NI,{isInvalid:p.name,isRequired:!0,children:[(0,w.jsx)(m.l,{children:"Name"}),(0,w.jsx)(v.I,(0,i.Z)((0,i.Z)({type:"text"},s("name")),{},{defaultValue:null===t||void 0===t?void 0:t.name,bg:I}))]}),(0,w.jsxs)(f.NI,{isInvalid:p.number,isRequired:!0,children:[(0,w.jsx)(m.l,{children:"Phone"}),(0,w.jsx)(v.I,(0,i.Z)((0,i.Z)({type:"tel"},s("number")),{},{defaultValue:null===t||void 0===t?void 0:t.number,bg:I}))]}),(0,w.jsxs)(k.h,{display:"flex",justifyContent:"flex-end",children:[(0,w.jsx)(y.z,{onClick:n,variant:"outline",colorScheme:"teal",children:"Cancel"}),(0,w.jsx)(y.z,{isLoading:g,type:"submit",isDisabled:!j,colorScheme:"teal",children:"Save"})]})]})},N=t(5548).EditIcon,q=t(2144),A=q.useDisclosure,F=q.Popover,R=q.PopoverTrigger,B=q.IconButton,L=q.PopoverContent,P=q.FocusLock,O=q.PopoverArrow,T=q.PopoverCloseButton,E=t(2791).useRef,V=function(e){var n=e.contact,t=A(),r=t.onOpen,i=t.onClose,s=t.isOpen,o=E(null);return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(F,{isOpen:s,initialFocusRef:o,onOpen:r,onClose:i,closeOnBlur:!0,placement:"top",children:[(0,w.jsx)(R,{children:(0,w.jsx)(B,{w:8,h:8,icon:(0,w.jsx)(N,{}),variant:"outline",colorScheme:"teal",_hover:{bg:"teal.100"},_focus:{bg:"teal.100"}})}),(0,w.jsx)(L,{children:(0,w.jsxs)(P,{returnFocus:!0,persistentFocus:!1,children:[(0,w.jsx)(O,{}),(0,w.jsx)(T,{}),(0,w.jsx)(z,{onCancel:i,contact:n})]})})]})})},Y=function(e){return 12===e.replace(/\D+/g,"").length?e.replace(/\D+/g,"").replace(/^(\d{3})(\d{2})(\d{3})(\d{4}).*/,"+$1-$2-$3-$4"):11===e.replace(/\D+/g,"").length?e.replace(/\D+/g,"").replace(/^(\d{2})(\d{2})(\d{3})(\d{4}).*/,"+$1-$2-$3-$4"):10===e.replace(/\D+/g,"").length?e.replace(/\D+/g,"").replace(/^(\d{3})(\d{3})(\d{4}).*/,"$1-$2-$3"):9===e.replace(/\D+/g,"").length?e.replace(/\D+/g,"").replace(/^(\d{2})(\d{3})(\d{4}).*/,"$1-$2-$3"):7===e.replace(/\D+/g,"").length?e.replace(/\D+/g,"").replace(/^(\d{3})(\d{4}).*/,"$1-$2"):e},X=t(9327),G=t(8348),H=t(5410),W=t(80),J=t(581),K=t(1211),U=t(7970),M=t(1216),Q=t(6982),ee=function(e){var n=e.onClick,t=e.isDeleting,r=(0,G.q)(),i=r.isOpen,s=r.onOpen,o=r.onClose,a=(0,I.useRef)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y.z,{type:"button",onClick:s,disabled:t,colorScheme:"teal",variant:"outline",w:8,h:8,_hover:{bg:"teal.100"},_focus:{bg:"teal.100"},children:t?(0,w.jsx)(H.D,{isIndeterminate:!0,color:"teal.800",size:"16px"}):(0,w.jsx)(X.p,{color:"teal.700"})}),(0,w.jsxs)(W.a,{motionPreset:"slideInBottom",leastDestructiveRef:a,onClose:o,isOpen:i,isCentered:!0,children:[(0,w.jsx)(J.Z,{}),(0,w.jsxs)(W._,{children:[(0,w.jsx)(K.x,{children:"Discard Changes?"}),(0,w.jsx)(U.o,{}),(0,w.jsx)(M.f,{children:"Are you sure? You can't undo this action afterwards."}),(0,w.jsxs)(Q.m,{children:[(0,w.jsx)(y.z,{ref:a,onClick:o,colorScheme:"teal",children:"No"}),(0,w.jsx)(y.z,{colorScheme:"red",isLoading:t,ml:3,onClick:n,children:"Yes"})]})]})]})]})},ne=function(e){var n=e.contact,t=(0,I.useState)(!1),i=(0,s.Z)(t,2),a=i[0],l=i[1],c=(0,o.I0)();return(0,w.jsxs)(_.HC,{paddingLeft:{base:"12px",md:"35px",lg:"40px"},paddingRight:{base:"12px",md:"20px"},paddingTop:1,paddingBottom:1,display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,w.jsxs)(r.xu,{flexBasis:"40%",children:[n.name,": "]}),(0,w.jsx)(r.xu,{flexBasis:"40%",children:Y(n.number)}),(0,w.jsxs)(r.xu,{flexBasis:"20%",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:{base:"5px",md:"10px"},children:[(0,w.jsx)(V,{contact:n}),(0,w.jsx)(ee,{onClick:function(){c((0,d.GK)(n.id)),l(!0)},isDeleting:a})]})]},n.id)},te=t(896),re=t(9229),ie=function(){var e=(0,o.I0)(),n=(0,o.v9)(u.Af),t=(0,o.v9)(u.AD),i=(0,o.v9)(u.Y);(0,I.useEffect)((function(){e((0,d.yF)())}),[e]);var s=function(){var e=t.toLowerCase();return n.filter((function(n){return null===n||void 0===n?void 0:n.name.toLowerCase().includes(e)}))},a=s().map((function(e){return e.name[0].toUpperCase()})).filter((function(e,n,t){return t.indexOf(e)===n})),l=function(e){return s().filter((function(n){return n.name[0].toUpperCase()===e}))},c=(0,x.ff)("teal.100","#172a46");return(0,w.jsxs)("div",{children:[0===n.length&&i&&(0,w.jsx)(te.M,{children:(0,w.jsx)(H.D,{isIndeterminate:!0,color:"teal.800"})}),0===n.length&&!i&&(0,w.jsx)(re.x,{textAlign:"center",fontSize:"2xl",children:"There are no contacts yet. Please add a new contact"}),0===s().length&&0!==n.length&&(0,w.jsx)(re.x,{children:"There is no such contact"}),0!==n.length&&s().length>0&&(0,w.jsx)(r.xu,{position:"relative",children:(0,w.jsx)(_.aV,{position:"relative",children:a.map((function(e){return(0,w.jsx)(_.HC,{children:(0,w.jsxs)(_.aV,{children:[(0,w.jsx)(p.X,{position:"sticky",top:"15px",bg:c,paddingLeft:"5px",opacity:"0.8",borderRadius:"5px",children:e}),(0,w.jsx)(r.xu,{children:l(e).map((function(e){return(0,w.jsx)(ne,{contact:e},e.id)}))})]})},"section-".concat(e))}))})})]})},se=t(123),oe=t(6895),ae=function(){var e=(0,o.v9)(u.AD),n=(0,o.v9)(u.Af),t=(0,o.I0)(),r=(0,x.ff)("#ffffff","#172a46"),i=(0,x.ff)("#086F83 0px 0px 10px","#5ff0d0 0px 0px 10px");return(0,w.jsx)(w.Fragment,{children:0!==n.length&&(0,w.jsxs)(f.NI,{mb:6,children:[(0,w.jsx)(m.l,{fontSize:"lg",fontWeight:"600",children:"Find contacts by name"}),(0,w.jsx)(v.I,{name:"filter",type:"text",value:e,onChange:function(e){return t((0,oe.T)(e.target.value))},pos:"relative",bg:r,boxShadow:i}),(0,w.jsx)(se.G,{pos:"absolute",top:"50%",transform:"translateY(50%)",right:"16px",zIndex:2})]})})},le=function(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(r.xu,{display:{lg:"flex"},gap:8,alignItems:"flex-start",children:[(0,w.jsx)($,{}),(0,w.jsxs)(r.xu,{flexGrow:1,children:[(0,w.jsx)(ae,{}),(0,w.jsx)(ie,{})]})]})})}}}]);
//# sourceMappingURL=426.37d7077c.chunk.js.map