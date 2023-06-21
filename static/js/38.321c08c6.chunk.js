"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[38],{4038:function(e,r,a){a.r(r);var i=a(1413),n=a(9439),o=a(1836),s=a(1252),t=a(3665),l=a(5946),c=a(2392),d=a(8208),h=a(311),u=a(7806),p=a(9140),m=a(4125),x=a(2435),j=a(9434),f=a(1134),g=a(4695),Z=a(8007),w=a(7689),I=a(5822),v=a(6351),y=a(2791),b=a(9398),A=a(6220),_=a(2361),C=a(5420),V=a(184),k=Z.Ry({email:Z.Z_().required().email().trim(),password:Z.Z_().required().trim().min(7)}).required();r.default=function(){var e=(0,j.I0)(),r=(0,j.v9)(v.AP),a=(0,w.s0)(),Z=(0,o.p)(),L=(0,y.useState)(!1),M=(0,n.Z)(L,2),E=M[0],N=M[1],S=(0,f.cI)({mode:"onTouched",resolver:(0,g.X)(k)}),q=S.register,z=S.handleSubmit,H=S.formState.errors,R=(0,s.ff)("gray.100","#0a192f"),O=(0,s.ff)("teal.800","teal.500");return(0,V.jsxs)(t.g,{onSubmit:z((function(r){e((0,I.x4)(r)).unwrap().catch((function(){return Z({title:"Email or password is incorrect",isClosable:!0,position:"top-right",status:"error",duration:3e3})}))})),as:"form",mx:"auto",w:{base:"90%",md:500},p:"4",children:[(0,V.jsx)(l.X,{children:"Login to the account"}),(0,V.jsxs)(c.NI,{isInvalid:H.email,isRequired:!0,children:[(0,V.jsx)(d.l,{children:"Email"}),(0,V.jsxs)(h.B,{children:[(0,V.jsx)(u.Z,{pointerEvents:"none",children:(0,V.jsx)(b.L,{color:O})}),(0,V.jsx)(p.I,(0,i.Z)((0,i.Z)({type:"email",placeholder:"Enter your email",_placeholder:{opacity:.5,color:"inherit"}},q("email")),{},{bg:R}))]}),(0,V.jsx)(m.J1,{children:H.email&&H.email.message})]}),(0,V.jsxs)(c.NI,{isInvalid:H.password,isRequired:!0,children:[(0,V.jsx)(d.l,{children:"Password"}),(0,V.jsxs)(h.B,{size:"md",children:[(0,V.jsx)(p.I,(0,i.Z)((0,i.Z)({pr:"4.5rem",type:E?"text":"password",placeholder:"Enter password",_placeholder:{opacity:.5,color:"inherit"}},q("password")),{},{bg:R})),(0,V.jsx)(u.Z,{pointerEvents:"none",children:(0,V.jsx)(A.m,{color:O})}),(0,V.jsx)(u.x,{width:"4.5rem",children:(0,V.jsx)(x.z,{h:"1.75rem",size:"sm",onClick:function(){return N(!E)},background:"transparent",children:E?(0,V.jsx)(_.t,{color:O}):(0,V.jsx)(C.O,{color:O})})})]}),(0,V.jsx)(m.J1,{children:H.password&&H.password.message})]}),(0,V.jsx)(x.z,{type:"submit",variant:"outline",colorScheme:"teal",isLoading:r,children:"Login"}),(0,V.jsx)(x.z,{onClick:function(){return a("/register")},colorScheme:"teal",variant:"ghost",children:"Don't have an account yet? Register"})]})}},2361:function(e,r,a){a.d(r,{t:function(){return o}});var i=a(5903),n=a(184),o=(0,i.I)({displayName:"ViewOffIcon",path:(0,n.jsxs)("g",{fill:"currentColor",children:[(0,n.jsx)("path",{d:"M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"}),(0,n.jsx)("path",{d:"M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"})]})})},9398:function(e,r,a){a.d(r,{L:function(){return o}});var i=a(5903),n=a(184),o=(0,i.I)({displayName:"EmailIcon",path:(0,n.jsxs)("g",{fill:"currentColor",children:[(0,n.jsx)("path",{d:"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"}),(0,n.jsx)("path",{d:"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"})]})})},6220:function(e,r,a){a.d(r,{m:function(){return i}});var i=(0,a(5903).I)({d:"M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z",displayName:"LockIcon"})},5420:function(e,r,a){a.d(r,{O:function(){return o}});var i=a(5903),n=a(184),o=(0,i.I)({displayName:"ViewIcon",path:(0,n.jsxs)("g",{fill:"currentColor",children:[(0,n.jsx)("path",{d:"M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"}),(0,n.jsx)("circle",{cx:"12",cy:"12",r:"2"})]})})}}]);
//# sourceMappingURL=38.321c08c6.chunk.js.map