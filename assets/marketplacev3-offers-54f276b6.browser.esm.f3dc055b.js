var G=Object.defineProperty;var H=(p,t,r)=>t in p?G(p,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[t]=r;var d=(p,t,r)=>(H(p,typeof t!="symbol"?t+"":t,r),r);import{bl as K,a3 as F,B as s,aj as g,a5 as m,am as y,a6 as h,ar as C,b1 as A,_ as T,C as I,bm as Z,A as D,b4 as J,ad as Q,bi as N,bn as X,aO as M,bf as U,a0 as Y,aH as L,aQ as W,a_ as w,an as _,aR as S}from"./index.a7009179.js";import{c as O}from"./cleanCurrencyAddress-92eb0d6a.browser.esm.6c66000a.js";import{s as R}from"./setErc20Allowance-a867cbf2.browser.esm.00fc68b3.js";import{g as v,h as E,a as tt}from"./marketplace-4e284899.browser.esm.fa7ac0c2.js";import{f as V,I as rt,c as et}from"./QueryParams-eb9de65f.browser.esm.65d48fdd.js";import{R as j,E as $}from"./assertEnabled-657cc6f5.browser.esm.dff1b667.js";import{b as P,G as q}from"./contract-appuri-40843c43.browser.esm.c16d2f64.js";import{C as x}from"./contract-interceptor-d7b164a7.browser.esm.b65ebba9.js";const z=(()=>L.object({assetContractAddress:W,tokenId:w,quantity:w.default(1),currencyContractAddress:W.default(_),pricePerToken:S,startTimestamp:j.default(new Date),endTimestamp:$,isReservedListing:L.boolean().default(!1)}))();let l=function(p){return p[p.UNSET=0]="UNSET",p[p.Created=1]="Created",p[p.Completed=2]="Completed",p[p.Cancelled=3]="Cancelled",p[p.Active=4]="Active",p[p.Expired=5]="Expired",p}({});class lt{constructor(t,r){d(this,"featureName",K.name);d(this,"createListing",m(async t=>{const r=await z.parseAsync(t);await E(this.contractWrapper,this.getAddress(),r.assetContractAddress,r.tokenId,await this.contractWrapper.getSignerAddress());const e=await y(this.contractWrapper.getProvider(),r.pricePerToken,r.currencyContractAddress),n=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return r.startTimestamp.lt(n)&&(r.startTimestamp=s.from(n)),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r.assetContractAddress,tokenId:r.tokenId,quantity:r.quantity,currency:O(r.currencyContractAddress),pricePerToken:e,startTimestamp:r.startTimestamp,endTimestamp:r.endTimestamp,reserved:r.isReservedListing}],parse:i=>({id:this.contractWrapper.parseLogs("NewListing",i==null?void 0:i.logs)[0].args.listingId,receipt:i})})}));d(this,"createListingsBatch",m(async t=>{const r=(await Promise.all(t.map(e=>this.createListing.prepare(e)))).map(e=>e.encode());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("NewListing",e==null?void 0:e.logs).map(n=>({id:n.args.listingId,receipt:e}))})}));d(this,"updateListing",m(async(t,r)=>{const e=await z.parseAsync(r);await E(this.contractWrapper,this.getAddress(),e.assetContractAddress,e.tokenId,await this.contractWrapper.getSignerAddress());const a=await y(this.contractWrapper.getProvider(),e.pricePerToken,e.currencyContractAddress);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t,{assetContract:e.assetContractAddress,tokenId:e.tokenId,quantity:e.quantity,currency:O(e.currencyContractAddress),pricePerToken:a,startTimestamp:e.startTimestamp,endTimestamp:e.endTimestamp,reserved:e.isReservedListing}],parse:n=>({id:this.contractWrapper.parseLogs("UpdatedListing",n==null?void 0:n.logs)[0].args.listingId,receipt:n})})}));d(this,"cancelListing",m(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelListing",args:[t]})));d(this,"buyFromListing",m(async(t,r,e)=>{e&&(e=await g(e));const a=await this.validateListing(s.from(t)),{valid:n,error:i}=await this.isStillValidListing(a,r);if(!n)throw new Error(`Listing ${t} is no longer valid. ${i}`);const c=e||await this.contractWrapper.getSignerAddress(),o=s.from(r),u=s.from(a.pricePerToken).mul(o),f=await this.contractWrapper.getCallOverrides()||{};return await R(this.contractWrapper,u,a.currencyContractAddress,f),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buyFromListing",args:[t,c,o,a.currencyContractAddress,u],overrides:f})}));d(this,"approveBuyerForReservedListing",m(async(t,r)=>{if(await this.isBuyerApprovedForListing(t,r))throw new Error(`Buyer ${r} already approved for listing ${t}.`);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveBuyerForListing",args:[t,r,!0]})}));d(this,"revokeBuyerApprovalForReservedListing",m(async(t,r)=>{if(await this.isBuyerApprovedForListing(t,r))return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveBuyerForListing",args:[t,r,!1]});throw new Error(`Buyer ${r} not approved for listing ${t}.`)}));d(this,"approveCurrencyForListing",m(async(t,r,e)=>{const a=await this.validateListing(s.from(t)),n=await g(r);n===a.currencyContractAddress&&C(e===a.pricePerToken,"Approving listing currency with a different price.");const i=await this.contractWrapper.read("currencyPriceForListing",[t,n]);return C(e===i,"Currency already approved with this price."),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveCurrencyForListing",args:[t,n,e]})}));d(this,"revokeCurrencyApprovalForListing",m(async(t,r)=>{const e=await this.validateListing(s.from(t)),a=await g(r);if(a===e.currencyContractAddress)throw new Error("Can't revoke approval for main listing currency.");const n=await this.contractWrapper.read("currencyPriceForListing",[t,a]);return C(!n.isZero(),"Currency not approved."),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveCurrencyForListing",args:[t,a,s.from(0)]})}));this.contractWrapper=t,this.storage=r,this.events=new P(this.contractWrapper),this.encoder=new F(this.contractWrapper),this.interceptor=new x(this.contractWrapper),this.estimator=new q(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async getAll(t){const r=await this.getTotalCount(),e=s.from((t==null?void 0:t.start)||0).toNumber(),a=r.toNumber();if(a===0)throw new Error("No listings exist on the contract.");let n=[];n=(await v(e,a,(o,u)=>this.contractWrapper.read("getAllListings",[o,u]))).flat();const c=await this.applyFilter(n,t);return await Promise.all(c.map(o=>this.mapListing(o)))}async getAllValid(t){const r=await this.getTotalCount(),e=s.from((t==null?void 0:t.start)||0).toNumber(),a=r.toNumber();if(a===0)throw new Error("No listings exist on the contract.");let n=[];n=(await v(e,a,(o,u)=>this.contractWrapper.read("getAllValidListings",[o,u]))).flat();const c=await this.applyFilter(n,t);return await Promise.all(c.map(o=>this.mapListing(o)))}async getListing(t){const r=await this.contractWrapper.read("getListing",[t]);return await this.mapListing(r)}async isBuyerApprovedForListing(t,r){if(!(await this.validateListing(s.from(t))).isReservedListing)throw new Error(`Listing ${t} is not a reserved listing.`);return await this.contractWrapper.read("isBuyerApprovedForListing",[t,await g(r)])}async isCurrencyApprovedForListing(t,r){return await this.validateListing(s.from(t)),await this.contractWrapper.read("isCurrencyApprovedForListing",[t,await g(r)])}async currencyPriceForListing(t,r){const e=await this.validateListing(s.from(t)),a=await g(r);if(a===e.currencyContractAddress)return e.pricePerToken;if(!await this.isCurrencyApprovedForListing(t,a))throw new Error(`Currency ${a} is not approved for Listing ${t}.`);return await this.contractWrapper.read("currencyPriceForListing",[t,a])}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){let r=l.UNSET;const a=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;switch(t.status){case 1:r=s.from(t.startTimestamp).gt(a)?l.Created:s.from(t.endTimestamp).lt(a)?l.Expired:l.Active;break;case 2:r=l.Completed;break;case 3:r=l.Cancelled;break}return{assetContractAddress:t.assetContract,currencyContractAddress:t.currency,pricePerToken:t.pricePerToken.toString(),currencyValuePerToken:await A(this.contractWrapper.getProvider(),t.currency,t.pricePerToken),id:t.listingId.toString(),tokenId:t.tokenId.toString(),quantity:t.quantity.toString(),startTimeInSeconds:s.from(t.startTimestamp).toNumber(),asset:await V(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),endTimeInSeconds:s.from(t.endTimestamp).toNumber(),creatorAddress:t.listingCreator,isReservedListing:t.reserved,status:r}}async isStillValidListing(t,r){if(!await tt(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.creatorAddress))return{valid:!1,error:`Token '${t.tokenId}' from contract '${t.assetContractAddress}' is not approved for transfer`};const a=this.contractWrapper.getProvider(),n=(await T(()=>import("./IERC165.d81707d1.js"),[])).default,i=new I(t.assetContractAddress,n,a),c=await i.supportsInterface(rt),o=await i.supportsInterface(et);if(c){const u=(await T(()=>import("./index.a7009179.js").then(B=>B.dJ),["assets/index.a7009179.js","assets/index.51c296b1.css"])).default,f=new I(t.assetContractAddress,u,a);let b;try{b=await f.ownerOf(t.tokenId)}catch{}const k=(b==null?void 0:b.toLowerCase())===t.creatorAddress.toLowerCase();return{valid:k,error:k?void 0:`Seller is not the owner of Token '${t.tokenId}' from contract '${t.assetContractAddress} anymore'`}}else if(o){const u=(await T(()=>import("./index.a7009179.js").then(B=>B.dL),["assets/index.a7009179.js","assets/index.51c296b1.css"])).default,k=(await new I(t.assetContractAddress,u,a).balanceOf(t.creatorAddress,t.tokenId)).gte(r||t.quantity);return{valid:k,error:k?void 0:`Seller does not have enough balance of Token '${t.tokenId}' from contract '${t.assetContractAddress} to fulfill the listing`}}else return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}async applyFilter(t,r){let e=[...t];if(r){if(r.seller){const a=await g(r.seller);e=e.filter(n=>n.listingCreator.toString().toLowerCase()===(a==null?void 0:a.toString().toLowerCase()))}if(r.tokenContract){const a=await g(r.tokenContract);e=e.filter(n=>n.assetContract.toString().toLowerCase()===(a==null?void 0:a.toString().toLowerCase()))}r.tokenId!==void 0&&(e=e.filter(a=>{var n;return a.tokenId.toString()===((n=r==null?void 0:r.tokenId)==null?void 0:n.toString())}))}return(r==null?void 0:r.count)&&r.count<e.length?e.slice(0,r.count):e}}const at=(()=>L.object({assetContractAddress:W,tokenId:w,quantity:w.default(1),currencyContractAddress:W.default(_),minimumBidAmount:S,buyoutBidAmount:S,timeBufferInSeconds:w.default(900),bidBufferBps:w.default(500),startTimestamp:j.default(new Date),endTimestamp:$}))();class gt{constructor(t,r){d(this,"featureName",Z.name);d(this,"createAuction",m(async t=>{const r=at.parse(t);await E(this.contractWrapper,this.getAddress(),r.assetContractAddress,r.tokenId,await this.contractWrapper.getSignerAddress());const e=await y(this.contractWrapper.getProvider(),r.buyoutBidAmount,r.currencyContractAddress),a=await y(this.contractWrapper.getProvider(),r.minimumBidAmount,r.currencyContractAddress),i=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return r.startTimestamp.lt(i)&&(r.startTimestamp=s.from(i)),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createAuction",args:[{assetContract:r.assetContractAddress,tokenId:r.tokenId,quantity:r.quantity,currency:O(r.currencyContractAddress),minimumBidAmount:a,buyoutBidAmount:e,timeBufferInSeconds:r.timeBufferInSeconds,bidBufferBps:r.bidBufferBps,startTimestamp:r.startTimestamp,endTimestamp:r.endTimestamp}],parse:c=>({id:this.contractWrapper.parseLogs("NewAuction",c.logs)[0].args.auctionId,receipt:c})})}));d(this,"createAuctionsBatch",m(async t=>{const r=(await Promise.all(t.map(e=>this.createAuction.prepare(e)))).map(e=>e.encode());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("NewAuction",e==null?void 0:e.logs).map(n=>({id:n.args.auctionId,receipt:e}))})}));d(this,"buyoutAuction",m(async t=>{const r=await this.validateAuction(s.from(t)),e=await J(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,Q(r.buyoutBidAmount,e.decimals))}));d(this,"makeBid",m(async(t,r)=>{const e=await this.validateAuction(s.from(t)),a=await y(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(s.from(0)))throw new Error("Cannot make a bid with 0 value");if(s.from(e.buyoutBidAmount).gt(0)&&a.gt(e.buyoutBidAmount))throw new Error("Bid amount must be less than or equal to buyoutBidAmount");if(await this.getWinningBid(t)){const c=await this.isWinningBid(t,a);C(c,"Bid price is too low based on the current winning bid and the bid buffer")}else{const c=a,o=s.from(e.minimumBidAmount);C(c.gte(o),"Bid price is too low based on minimum bid amount")}const i=await this.contractWrapper.getCallOverrides()||{};return await R(this.contractWrapper,a,e.currencyContractAddress,i),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"bidInAuction",args:[t,a],overrides:i})}));d(this,"cancelAuction",m(async t=>{if(await this.getWinningBid(t))throw new Error("Bids already made.");return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelAuction",args:[t]})}));d(this,"closeAuctionForBidder",m(async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateAuction(s.from(t));try{return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"collectAuctionTokens",args:[s.from(t)]})}catch(a){throw a.message.includes("Marketplace: auction still active.")?new N(t.toString(),e.endTimeInSeconds.toString()):a}}));d(this,"closeAuctionForSeller",m(async t=>{const r=await this.validateAuction(s.from(t));try{return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"collectAuctionPayout",args:[s.from(t)]})}catch(e){throw e.message.includes("Marketplace: auction still active.")?new N(t.toString(),r.endTimeInSeconds.toString()):e}}));d(this,"executeSale",m(async t=>{const r=await this.validateAuction(s.from(t));try{const e=await this.getWinningBid(t);C(e,"No winning bid found");const a=this.encoder.encode("collectAuctionPayout",[t]),n=this.encoder.encode("collectAuctionTokens",[t]);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[[a,n]]})}catch(e){throw e.message.includes("Marketplace: auction still active.")?new N(t.toString(),r.endTimeInSeconds.toString()):e}}));this.contractWrapper=t,this.storage=r,this.events=new P(this.contractWrapper),this.encoder=new F(this.contractWrapper),this.interceptor=new x(this.contractWrapper),this.estimator=new q(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async getTotalCount(){return await this.contractWrapper.read("totalAuctions",[])}async getAll(t){const r=await this.getTotalCount(),e=s.from((t==null?void 0:t.start)||0).toNumber(),a=r.toNumber();if(a===0)throw new Error("No auctions exist on the contract.");let n=[];n=(await v(e,a,(o,u)=>this.contractWrapper.read("getAllAuctions",[o,u]))).flat();const c=await this.applyFilter(n,t);return await Promise.all(c.map(o=>this.mapAuction(o)))}async getAllValid(t){const r=await this.getTotalCount(),e=s.from((t==null?void 0:t.start)||0).toNumber(),a=r.toNumber();if(a===0)throw new Error("No auctions exist on the contract.");let n=[];n=(await v(e,a,(o,u)=>this.contractWrapper.read("getAllValidAuctions",[o,u]))).flat();const c=await this.applyFilter(n,t);return await Promise.all(c.map(o=>this.mapAuction(o)))}async getAuction(t){const r=await this.contractWrapper.read("getAuction",[t]);return await this.mapAuction(r)}async getWinningBid(t){await this.validateAuction(s.from(t));const r=await this.contractWrapper.read("getWinningBid",[t]);if(r._bidder!==D)return await this.mapBid(t.toString(),r._bidder,r._currency,r._bidAmount.toString())}async isWinningBid(t,r){return await this.contractWrapper.read("isNewWinningBid",[t,r])}async getWinner(t){const r=await this.validateAuction(s.from(t)),e=await this.contractWrapper.read("getWinningBid",[t]),a=s.from(Math.floor(Date.now()/1e3)),n=s.from(r.endTimeInSeconds);if(a.gt(n)&&e._bidder!==D)return e._bidder;const o=(await new P(this.contractWrapper).getEvents("AuctionClosed")).find(u=>u.data.auctionId.eq(s.from(t)));if(!o)throw new Error(`Could not find auction with ID ${t} in closed auctions`);return o.data.winningBidder}async getBidBufferBps(t){return(await this.getAuction(t)).bidBufferBps}async getMinimumNextBid(t){const[r,e,a]=await Promise.all([this.getBidBufferBps(t),this.getWinningBid(t),this.validateAuction(s.from(t))]),n=e?s.from(e.bidAmount):s.from(a.minimumBidAmount),i=n.add(n.mul(r).div(1e4));return A(this.contractWrapper.getProvider(),a.currencyContractAddress,i)}async validateAuction(t){try{return await this.getAuction(t)}catch(r){throw console.error(`Error getting the auction with id ${t}`),r}}async mapAuction(t){let r=l.UNSET;const a=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;switch(t.status){case 1:r=s.from(t.startTimestamp).gt(a)?l.Created:s.from(t.endTimestamp).lt(a)?l.Expired:l.Active;break;case 2:r=l.Completed;break;case 3:r=l.Cancelled;break}return{id:t.auctionId.toString(),creatorAddress:t.auctionCreator,assetContractAddress:t.assetContract,tokenId:t.tokenId.toString(),quantity:t.quantity.toString(),currencyContractAddress:t.currency,minimumBidAmount:t.minimumBidAmount.toString(),minimumBidCurrencyValue:await A(this.contractWrapper.getProvider(),t.currency,t.minimumBidAmount),buyoutBidAmount:t.buyoutBidAmount.toString(),buyoutCurrencyValue:await A(this.contractWrapper.getProvider(),t.currency,t.buyoutBidAmount),timeBufferInSeconds:s.from(t.timeBufferInSeconds).toNumber(),bidBufferBps:s.from(t.bidBufferBps).toNumber(),startTimeInSeconds:s.from(t.startTimestamp).toNumber(),endTimeInSeconds:s.from(t.endTimestamp).toNumber(),asset:await V(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),status:r}}async mapBid(t,r,e,a){const n=await g(r),i=await g(e);return{auctionId:t,bidderAddress:n,currencyContractAddress:i,bidAmount:a,bidAmountCurrencyValue:await A(this.contractWrapper.getProvider(),i,a)}}async applyFilter(t,r){let e=[...t];if(r){if(r.seller){const a=await g(r.seller);e=e.filter(n=>n.auctionCreator.toString().toLowerCase()===(a==null?void 0:a.toString().toLowerCase()))}if(r.tokenContract){const a=await g(r.tokenContract);e=e.filter(n=>n.assetContract.toString().toLowerCase()===(a==null?void 0:a.toString().toLowerCase()))}r.tokenId!==void 0&&(e=e.filter(a=>{var n;return a.tokenId.toString()===((n=r==null?void 0:r.tokenId)==null?void 0:n.toString())}))}return(r==null?void 0:r.count)&&r.count<e.length?e.slice(0,r.count):e}}const nt=(()=>L.object({assetContractAddress:W,tokenId:w,quantity:w.default(1),currencyContractAddress:W.default(_),totalPrice:S,endTimestamp:$}))();class wt{constructor(t,r){d(this,"featureName",X.name);d(this,"makeOffer",m(async t=>{const r=await nt.parseAsync(t),e=await this.contractWrapper.getChainID(),a=M(r.currencyContractAddress)?U[e].wrapped.address:r.currencyContractAddress,n=await y(this.contractWrapper.getProvider(),r.totalPrice,a),i=await this.contractWrapper.getCallOverrides();return await R(this.contractWrapper,n,a,i),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"makeOffer",args:[{assetContract:r.assetContractAddress,tokenId:r.tokenId,quantity:r.quantity,currency:a,totalPrice:n,expirationTimestamp:r.endTimestamp}],parse:c=>({id:this.contractWrapper.parseLogs("NewOffer",c==null?void 0:c.logs)[0].args.offerId,receipt:c})})}));d(this,"cancelOffer",m(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelOffer",args:[t]})));d(this,"acceptOffer",m(async t=>{const r=await this.validateOffer(s.from(t)),{valid:e,error:a}=await this.isStillValidOffer(r);if(!e)throw new Error(`Offer ${t} is no longer valid. ${a}`);const n=await this.contractWrapper.getCallOverrides()||{};return await E(this.contractWrapper,this.getAddress(),r.assetContractAddress,r.tokenId,await this.contractWrapper.getSignerAddress()),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t],overrides:n})}));this.contractWrapper=t,this.storage=r,this.events=new P(this.contractWrapper),this.encoder=new F(this.contractWrapper),this.interceptor=new x(this.contractWrapper),this.estimator=new q(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async getTotalCount(){return await this.contractWrapper.read("totalOffers",[])}async getAll(t){const r=await this.getTotalCount(),e=s.from((t==null?void 0:t.start)||0).toNumber(),a=r.toNumber();if(a===0)throw new Error("No offers exist on the contract.");let n=[];n=(await v(e,a,(o,u)=>this.contractWrapper.read("getAllOffers",[o,u]))).flat();const c=await this.applyFilter(n,t);return await Promise.all(c.map(o=>this.mapOffer(o)))}async getAllValid(t){const r=await this.getTotalCount(),e=s.from((t==null?void 0:t.start)||0).toNumber(),a=r.toNumber();if(a===0)throw new Error("No offers exist on the contract.");let n=[];n=(await v(e,a,(o,u)=>this.contractWrapper.read("getAllValidOffers",[o,u]))).flat();const c=await this.applyFilter(n,t);return await Promise.all(c.map(o=>this.mapOffer(o)))}async getOffer(t){const r=await this.contractWrapper.read("getOffer",[t]);return await this.mapOffer(r)}async validateOffer(t){try{return await this.getOffer(t)}catch(r){throw console.error(`Error getting the offer with id ${t}`),r}}async mapOffer(t){let r=l.UNSET;const a=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;switch(t.status){case 1:r=s.from(t.expirationTimestamp).lt(a)?l.Expired:l.Active;break;case 2:r=l.Completed;break;case 3:r=l.Cancelled;break}return{id:t.offerId.toString(),offerorAddress:t.offeror,assetContractAddress:t.assetContract,currencyContractAddress:t.currency,tokenId:t.tokenId.toString(),quantity:t.quantity.toString(),totalPrice:t.totalPrice.toString(),currencyValue:await A(this.contractWrapper.getProvider(),t.currency,t.totalPrice),asset:await V(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),endTimeInSeconds:s.from(t.expirationTimestamp).toNumber(),status:r}}async isStillValidOffer(t){if(s.from(Math.floor(Date.now()/1e3)).gt(t.endTimeInSeconds))return{valid:!1,error:`Offer with ID ${t.id} has expired`};const e=await this.contractWrapper.getChainID(),a=M(t.currencyContractAddress)?U[e].wrapped.address:t.currencyContractAddress,n=this.contractWrapper.getProvider(),i=(await T(()=>import("./index.a7009179.js").then(f=>f.dI),["assets/index.a7009179.js","assets/index.51c296b1.css"])).default,c=new Y(n,a,i,{},this.storage);return(await c.read("balanceOf",[t.offerorAddress])).lt(t.totalPrice)?{valid:!1,error:`Offeror ${t.offerorAddress} doesn't have enough balance of token ${a}`}:(await c.read("allowance",[t.offerorAddress,this.getAddress()])).lt(t.totalPrice)?{valid:!1,error:`Offeror ${t.offerorAddress} hasn't approved enough amount of token ${a}`}:{valid:!0,error:""}}async applyFilter(t,r){let e=[...t];if(r){if(r.offeror){const a=await g(r.offeror);e=e.filter(n=>n.offeror.toString().toLowerCase()===(a==null?void 0:a.toString().toLowerCase()))}if(r.tokenContract){const a=await g(r.tokenContract);e=e.filter(n=>n.assetContract.toString().toLowerCase()===(a==null?void 0:a.toString().toLowerCase()))}r.tokenId!==void 0&&(e=e.filter(a=>{var n;return a.tokenId.toString()===((n=r==null?void 0:r.tokenId)==null?void 0:n.toString())}))}return(r==null?void 0:r.count)&&r.count<e.length?e.slice(0,r.count):e}}export{lt as M,gt as a,wt as b};
