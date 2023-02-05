"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[737],{5530:function(e,r,n){n.r(r),n.d(r,{default:function(){return x}});var a=n(9439),i=n(2791),t=n(211),s=n(1413),o=n(5705),l=n(2797),u=n(1686),d=n(184);function h(e){var r=e.setSecondPage,n=e.setRegisterState,a=e.registerState,i={showOnlyTheLastOne:!0,timeout:2e3},h=l.Ry({email:l.Z_().email("Invalid email format").required("Required"),password:l.Z_().required("Require").min(7),confirmPassword:l.Z_().oneOf([l.iH("password"),""],"Password must match").required("Require")});return(0,d.jsx)(o.J9,{initialValues:a,validationSchema:h,onSubmit:function(e){n((function(r){return(0,s.Z)((0,s.Z)({},r),{},{email:e.email,password:e.password,confirmPassword:e.confirmPassword})})),r(!0)},children:function(e){return(0,d.jsxs)(t.l0,{onSubmit:e.handleSubmit,children:[(0,d.jsx)(t.Dx,{children:"Registration"}),(0,d.jsxs)(t.UP,{children:[(0,d.jsx)(t.II,{id:"email",type:"email",name:"email",placeholder:"Email",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.email}),e.isSubmitting&&e.errors.email?u.Notify.failure(e.errors.email,i):null]}),(0,d.jsxs)(t.UP,{children:[(0,d.jsx)(t.II,{id:"password",type:"password",name:"password",placeholder:"Password",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.password}),e.isSubmitting&&e.errors.password?u.Notify.failure(e.errors.password,i):null]}),(0,d.jsxs)(t.UP,{margin:!0,children:[(0,d.jsx)(t.II,{id:"confirmPassword",type:"password",name:"confirmPassword",placeholder:"Confirm password",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.confirmPassword}),e.isSubmitting&&e.errors.confirmPassword?u.Notify.failure(e.errors.confirmPassword,i):null]}),(0,d.jsx)(t.zx,{margin:!0,type:"submit",handleClick:e.handleSubmit,children:"Next"}),(0,d.jsxs)(t.u6,{children:["Already have an account? ",(0,d.jsx)(t.Fg,{to:"/login",children:"Login"})]})]})}})}var m=n(9434),c=n(5029);function g(e){var r=e.setSecondPage,n=e.setRegisterState,a=e.registerState,i=(0,m.I0)(),h={showOnlyTheLastOne:!0,timeout:2e3},g=l.Ry({name:l.Z_().min(2).required("Required"),city:l.Z_().min(2).required("Required").matches(/^[a-zA-Z]+,?\s[a-zA-Z]+$/,'Enter data in the format "City, region"'),phone:l.Z_().required("Required").matches(/^\+380\d{9}$/,"Enter phone number in the format +380XXXXXXXXX")});return(0,d.jsx)(o.J9,{initialValues:a,validationSchema:g,onSubmit:function(e){var r={email:a.email,password:a.password,name:e.name,city:e.city,phone:e.phone};i((0,c.IU)(r))},children:function(e){return(0,d.jsxs)(t.l0,{onSubmit:e.handleSubmit,children:[(0,d.jsx)(t.Dx,{children:"Registration"}),(0,d.jsxs)(t.UP,{children:[(0,d.jsx)(t.II,{id:"name",type:"text",name:"name",placeholder:"Name",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.name}),e.isSubmitting&&e.errors.name?u.Notify.failure(e.errors.name,h):null]}),(0,d.jsxs)(t.UP,{children:[(0,d.jsx)(t.II,{id:"city",type:"text",name:"city",placeholder:"City/Region",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.city}),e.isSubmitting&&e.errors.city?u.Notify.failure(e.errors.city,h):null]}),(0,d.jsxs)(t.UP,{margin:!0,children:[(0,d.jsx)(t.II,{id:"phone",type:"text",name:"phone",placeholder:"Phone number",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.phone}),e.isSubmitting&&e.errors.phone?u.Notify.failure(e.errors.phone,h):null]}),(0,d.jsx)(t.zx,{type:"submit",children:"Registration"}),(0,d.jsx)(t.zx,{outline:!0,margin:!0,submit:!0,type:"button",onClick:function(){return a=e.values,r(!1),void n((function(e){return(0,s.Z)((0,s.Z)({},e),{},{name:a.name,city:a.city,phone:a.phone})}));var a},children:"Back"}),(0,d.jsxs)(t.u6,{children:["Already have an account? ",(0,d.jsx)(t.Fg,{to:"/login",children:"Login"})]})]})}})}var p=n(9869),f=n(7689);function x(){var e=(0,i.useState)(!1),r=(0,a.Z)(e,2),n=r[0],s=r[1],o=(0,i.useState)({email:"",password:"",name:"",city:"",phone:"",confirmPassword:""}),l=(0,a.Z)(o,2),u=l[0],c=l[1],x=void 0;return x=n?(0,d.jsx)(g,{registerState:u,setRegisterState:c,setSecondPage:s}):(0,d.jsx)(h,{registerState:u,setRegisterState:c,setSecondPage:s}),(0,m.v9)(p.Q8)?(0,d.jsx)(f.Fg,{to:"/user"}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.H_,{children:x})})}}}]);
//# sourceMappingURL=737.1636a1bf.chunk.js.map