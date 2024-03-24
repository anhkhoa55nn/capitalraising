import{x as u,J as l,Q as p,U as d,k as m,R as f,cX as w}from"./index.a7009179.js";import{InjectedConnector as g}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.89fc5c9a.js";class D extends g{constructor(t){const o={...{name:"Crypto Defi Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:w},...t.options};super({chains:t.chains,options:o,connectorStorage:t.connectorStorage}),u(this,"id",l.cryptoDefiWallet)}async connect(){var r,o;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new p;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if(((r=this.options)==null?void 0:r.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(n=await this.getAccount().catch(()=>null),!!n))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(h){if(this.isUserRejectedRequestError(h))throw new d(h)}if(!n){const s=await e.request({method:"eth_requestAccounts"});n=m(s[0])}let i=await this.getChainId(),c=this.isChainUnsupported(i);if(t.chainId&&i!==t.chainId)try{await this.switchChain(t.chainId),i=t.chainId,c=this.isChainUnsupported(t.chainId)}catch(s){console.error(`Could not switch to chain id : ${t.chainId}`,s)}(o=this.options)!=null&&o.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const a={chain:{id:i,unsupported:c},provider:e,account:n};return this.emit("connect",a),a}catch(e){throw this.isUserRejectedRequestError(e)?new d(e):e.code===-32002?new f(e):e}}}export{D as CryptoDefiWalletConnector};
