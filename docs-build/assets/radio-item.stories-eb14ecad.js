import{j as e}from"./jsx-runtime-6eef64cc.js";import{H as a}from"./styled-components.browser.esm-94e9e9ef.js";import{R as u}from"./radio-button-4ad67739.js";import{T as i}from"./typography-b3afb59d.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const s=({title:t,message:d,isAlarm:m,alarm:p,buttonProps:c})=>e.jsxs(f,{children:[e.jsx(g,{children:e.jsx(u,{...c})}),e.jsxs(x,{children:[e.jsx(h,{children:e.jsx(i,{variant:"subheadline",type:"medium",children:t})}),e.jsx(y,{children:e.jsx(i,{variant:"footnote",type:"light",children:d})}),m&&e.jsx(j,{children:e.jsx(i,{variant:"caption1",type:"medium",color:"#ff3b30",children:p})})]})]}),f=a.div`
  display: flex;
  gap: 8px;
`,g=a.div`

`,x=a.div`
  display: flex;
  flex-direction: column;
`,h=a.p`
  
`,y=a.p`

`,j=a.p`

`;try{s.displayName="RadioItem",s.__docgenInfo={description:"",displayName:"RadioItem",props:{buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!0,type:{name:"TRadioButton"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},alarm:{defaultValue:null,description:"",name:"alarm",required:!1,type:{name:"string"}},isAlarm:{defaultValue:null,description:"",name:"isAlarm",required:!1,type:{name:"boolean"}}}}}catch{}const A={title:"",component:s},r={render:t=>e.jsx(s,{...t}),args:{title:"title",message:"message",alarm:"alarm",isAlarm:!1,buttonProps:{disabled:!1,isChecked:!1,id:"234123",onChange:()=>{}}}};var o,n,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <RadioItem {...args} />,
  args: {
    title: 'title',
    message: 'message',
    alarm: 'alarm',
    isAlarm: false,
    buttonProps: {
      disabled: false,
      isChecked: false,
      id: "234123",
      onChange: () => {}
    }
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,A as default};
//# sourceMappingURL=radio-item.stories-eb14ecad.js.map
