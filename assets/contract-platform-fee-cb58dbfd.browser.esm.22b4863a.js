var s=Object.defineProperty;var n=(e,a,t)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var r=(e,a,t)=>(n(e,typeof a!="symbol"?a+"":a,t),t);import{ao as p,ap as o,a5 as c,a6 as i}from"./index.a7009179.js";class l{constructor(a){r(this,"featureName",p.name);r(this,"set",c(async a=>{const t=await o.parseAsync(a);return i.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[t.platform_fee_recipient,t.platform_fee_basis_points]})}));this.contractWrapper=a}async get(){const[a,t]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return o.parseAsync({platform_fee_recipient:a,platform_fee_basis_points:t})}}export{l as C};
