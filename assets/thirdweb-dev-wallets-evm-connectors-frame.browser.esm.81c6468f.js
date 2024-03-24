import{I as w,x as a,k as d,H as u,Q as c,U as h,R as p,K as l,o as g,M as C,N as v,O as y,P,_ as I}from"./index.a7009179.js";class _ extends w{constructor(e){let{chains:t,options:s,connectorStorage:o}=e;const r={shimDisconnect:!0,...s};super({chains:t,options:r}),a(this,"id","frame"),a(this,"name","Frame"),a(this,"ready",!0),a(this,"shimDisconnectKey",`${this.id}.shimDisconnect`),a(this,"onAccountsChanged",i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:d(i[0])})}),a(this,"onChainChanged",i=>{const n=u(i),m=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:m}})}),a(this,"onDisconnect",()=>{this.emit("disconnect"),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey)}),this.connectorStorage=o}async connect(e){try{const t=await this.getProvider();if(!t)throw new c;this.setupListeners(),this.emit("message",{type:"connecting"});const s=await t.request({method:"eth_requestAccounts"}),o=d(s[0]);let r=await this.getChainId(),i=this.isChainUnsupported(r);return(e==null?void 0:e.chainId)&&r!==(e==null?void 0:e.chainId)&&(r=(await this.switchChain(e==null?void 0:e.chainId)).chainId,i=this.isChainUnsupported(r)),this.options.shimDisconnect&&this.connectorStorage.setItem(this.shimDisconnectKey,"true"),{account:o,provider:t,chain:{id:r,unsupported:i}}}catch(t){throw this.isUserRejectedRequestError(t)?new h(t):t.code===-32002?new p(t):t}}async disconnect(){const e=await this.getProvider();!(e!=null&&e.removeListener)||(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.isInjected()||e.close(),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new c;const t=await e.request({method:"eth_accounts"});return d(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new c;const t=await e.request({method:"eth_chainId"});return u(t)}async getProvider(){return this._provider=this.isInjected()?this.injectedProvider():await this.createProvider(),this._provider}async getSigner(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[t,s]=await Promise.all([this.getProvider(),this.getAccount()]);return new l(t,e).getSigner(s)}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new c;return!!await this.getAccount()}catch{return!1}}async switchChain(e){var o;const t=await this.getProvider();if(!t)throw new c;const s=g(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]}),new Promise(r=>this.on("change",i=>{let{chain:n}=i;(n==null?void 0:n.id)===e&&r()}))]),(o=this.chains.find(r=>r.chainId===e))!=null?o:{chainId:e,name:`Chain ${s}`,slug:`${s}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(r){const i=this.chains.find(n=>n.chainId===e);if(!i)throw new C({chainId:e,connectorId:this.id});if(r.code===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:v(i),blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),await this.getChainId()!==e)throw new h(new Error("User rejected switch after adding network."));return i}catch(n){throw this.isUserRejectedRequestError(n)?new h(n):new y(n.message)}throw this.isUserRejectedRequestError(r)?new h(r):new P(r)}}async watchAsset(e){let{address:t,decimals:s=18,image:o,symbol:r}=e;const i=await this.getProvider();if(!i)throw new c;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:s,image:o,symbol:r}}})}async setupListeners(){const e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return e.code===4001}injectedProvider(){return window==null?void 0:window.ethereum}isInjected(){var e;return!!((e=this.injectedProvider())!=null&&e.isFrame)}async createProvider(){const e=(await I(()=>import("./browser.9a028e1a.js").then(t=>t.b),["assets/browser.9a028e1a.js","assets/index.a7009179.js","assets/index.51c296b1.css"])).default;return e("frame")}}export{_ as FrameConnector};
