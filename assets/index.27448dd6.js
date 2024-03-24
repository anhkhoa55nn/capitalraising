var ie=Object.defineProperty;var oe=(n,s,e)=>s in n?ie(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e;var P=(n,s,e)=>(oe(n,typeof s!="symbol"?s+"":s,e),e);import{aW as d,aX as le,aY as Y,t as fe,aR as q,aZ as w,a_ as $,aJ as N,a$ as M,b0 as X,_ as ue,a0 as ce,B as O,aP as z,A as k,am as _,aO as he,b1 as pe,ad as j,aH as b,aQ as G,b2 as de,an as V,b3 as me,ak as K,b4 as ye,G as F,b5 as ge,b6 as U,b7 as be,b8 as J,b9 as we}from"./index.a7009179.js";import{b as C,t as Se}from"./treeify.4f304e94.js";import{S as ee,E as xe}from"./assertEnabled-657cc6f5.browser.esm.dff1b667.js";import{N as D}from"./setErc20Allowance-a867cbf2.browser.esm.00fc68b3.js";class A{print(){A.print(this)}bufferIndexOf(s,e){if(arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1)return this.binarySearch(s,e,d.Buffer.compare);const r=(a,o)=>a.equals(o);return this.linearSearch(s,e,r)}static binarySearch(s,e,t){let r=0,a=s.length-1;for(;r<=a;){const o=Math.floor((r+a)/2),f=t(s[o],e);if(f===0){for(let i=o-1;i>=0;i--)if(t(s[i],e)!==0)return i+1;return 0}else f<0?r=o+1:a=o-1}return-1}binarySearch(s,e,t){return A.binarySearch(s,e,t)}static linearSearch(s,e,t){for(let r=0;r<s.length;r++)if(t(s[r],e))return r;return-1}linearSearch(s,e,t){return A.linearSearch(s,e,t)}static bufferify(s){if(!d.Buffer.isBuffer(s)){if(typeof s=="object"&&s.words)return d.Buffer.from(s.toString(Pe),"hex");if(A.isHexString(s))return d.Buffer.from(s.replace(/^0x/,""),"hex");if(typeof s=="string")return d.Buffer.from(s);if(typeof s=="bigint")return d.Buffer.from(s.toString(16),"hex");if(s instanceof Uint8Array)return d.Buffer.from(s.buffer);if(typeof s=="number"){let e=s.toString();return e.length%2&&(e=`0${e}`),d.Buffer.from(e,"hex")}else if(ArrayBuffer.isView(s))return d.Buffer.from(s.buffer,s.byteOffset,s.byteLength)}return s}bigNumberify(s){return A.bigNumberify(s)}static bigNumberify(s){if(typeof s=="bigint")return s;if(typeof s=="string")return s.startsWith("0x")&&A.isHexString(s)?BigInt("0x"+s.replace("0x","").toString()):BigInt(s);if(d.Buffer.isBuffer(s))return BigInt("0x"+s.toString("hex"));if(s instanceof Uint8Array)return Ie(s);if(typeof s=="number")return BigInt(s);throw new Error("cannot bigNumberify")}static isHexString(s){return typeof s=="string"&&/^(0x)?[0-9A-Fa-f]*$/.test(s)}static print(s){console.log(s.toString())}bufferToHex(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return A.bufferToHex(s,e)}static bufferToHex(s){return`${(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?"0x":""}${(s||d.Buffer.alloc(0)).toString("hex")}`}bufferify(s){return A.bufferify(s)}bufferifyFn(s){return e=>{const t=s(e);if(d.Buffer.isBuffer(t))return t;if(this.isHexString(t))return d.Buffer.from(t.replace("0x",""),"hex");if(typeof t=="string")return d.Buffer.from(t);if(typeof t=="bigint")return d.Buffer.from(e.toString(16),"hex");if(ArrayBuffer.isView(t))return d.Buffer.from(t.buffer,t.byteOffset,t.byteLength);const r=Be(e.toString("hex")),a=s(r),o=Ae(a);return d.Buffer.from(o,"hex")}}isHexString(s){return A.isHexString(s)}log2(s){return s===1?0:1+this.log2(s/2|0)}zip(s,e){return s.map((t,r)=>[t,e[r]])}static hexZeroPad(s,e){return"0x"+s.replace("0x","").padStart(e,"0")}}var Te=A;function Pe(n){const s=n.words,e=new ArrayBuffer(s.length*4),t=new Uint8Array(e);for(let r=0;r<s.length;r++)t[r*4]=s[r]>>24&255,t[r*4+1]=s[r]>>16&255,t[r*4+2]=s[r]>>8&255,t[r*4+3]=s[r]&255;return e}function Be(n){const s=new Uint8Array(n.length/2);for(let e=0;e<n.length;e+=2)s[e/2]=parseInt(n.substring(e,e+2),16);return s.buffer}function Ae(n){const s=new Uint8Array(n);return Array.from(s).map(e=>e.toString(16).padStart(2,"0")).join("")}function Ie(n){const s=Array.from(n).map(e=>e.toString(16).padStart(2,"0")).join("");return BigInt(`0x${s}`)}class L extends Te{constructor(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};super();P(this,"duplicateOdd",!1);P(this,"concatenator",d.Buffer.concat);P(this,"hashLeaves",!1);P(this,"isBitcoinTree",!1);P(this,"leaves",[]);P(this,"layers",[]);P(this,"sortLeaves",!1);P(this,"sortPairs",!1);P(this,"sort",!1);P(this,"fillDefaultHash",null);P(this,"complete",!1);if(r.complete){if(r.isBitcoinTree)throw new Error('option "complete" is incompatible with "isBitcoinTree"');if(r.duplicateOdd)throw new Error('option "complete" is incompatible with "duplicateOdd"')}if(this.isBitcoinTree=!!r.isBitcoinTree,this.hashLeaves=!!r.hashLeaves,this.sortLeaves=!!r.sortLeaves,this.sortPairs=!!r.sortPairs,this.complete=!!r.complete,r.fillDefaultHash)if(typeof r.fillDefaultHash=="function")this.fillDefaultHash=r.fillDefaultHash;else if(d.Buffer.isBuffer(r.fillDefaultHash)||typeof r.fillDefaultHash=="string")this.fillDefaultHash=(a,o)=>r.fillDefaultHash;else throw new Error('method "fillDefaultHash" must be a function, Buffer, or string');this.sort=!!r.sort,this.sort&&(this.sortLeaves=!0,this.sortPairs=!0),this.duplicateOdd=!!r.duplicateOdd,r.concatenator&&(this.concatenator=r.concatenator),this.hashFn=this.bufferifyFn(t),this.processLeaves(e)}getOptions(){var e,t;return{complete:this.complete,isBitcoinTree:this.isBitcoinTree,hashLeaves:this.hashLeaves,sortLeaves:this.sortLeaves,sortPairs:this.sortPairs,sort:this.sort,fillDefaultHash:(t=(e=this.fillDefaultHash)==null?void 0:e.toString())!=null?t:null,duplicateOdd:this.duplicateOdd}}processLeaves(e){if(this.hashLeaves&&(e=e.map(this.hashFn)),this.leaves=e.map(this.bufferify),this.sortLeaves&&(this.leaves=this.leaves.sort(d.Buffer.compare)),this.fillDefaultHash)for(let t=this.leaves.length;t<Math.pow(2,Math.ceil(Math.log2(this.leaves.length)));t++)this.leaves.push(this.bufferify(this.fillDefaultHash(t,this.hashFn)));this.createHashes(this.leaves)}createHashes(e){for(this.layers=[e];e.length>1;){const t=this.layers.length;this.layers.push([]);const r=this.complete&&t===1&&!Number.isInteger(Math.log2(e.length))?2*e.length-2**Math.ceil(Math.log2(e.length)):e.length;for(let a=0;a<e.length;a+=2){if(a>=r){this.layers[t].push(...e.slice(r));break}else if(a+1===e.length&&e.length%2===1){const l=e[e.length-1];let h=l;if(this.isBitcoinTree){h=this.hashFn(this.concatenator([C(l),C(l)])),h=C(this.hashFn(h)),this.layers[t].push(h);continue}else if(!this.duplicateOdd){this.layers[t].push(e[a]);continue}}const o=e[a],f=a+1===e.length?o:e[a+1];let i=null;this.isBitcoinTree?i=[C(o),C(f)]:i=[o,f],this.sortPairs&&i.sort(d.Buffer.compare);let u=this.hashFn(this.concatenator(i));this.isBitcoinTree&&(u=C(this.hashFn(u))),this.layers[t].push(u)}e=this.layers[t]}}addLeaf(e){(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&(e=this.hashFn(e)),this.processLeaves(this.leaves.concat(e))}addLeaves(e){(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&(e=e.map(this.hashFn)),this.processLeaves(this.leaves.concat(e))}getLeaves(e){return Array.isArray(e)?(this.hashLeaves&&(e=e.map(this.hashFn),this.sortLeaves&&(e=e.sort(d.Buffer.compare))),this.leaves.filter(t=>this.bufferIndexOf(e,t,this.sortLeaves)!==-1)):this.leaves}getLeaf(e){return e<0||e>this.leaves.length-1?d.Buffer.from([]):this.leaves[e]}getLeafIndex(e){e=this.bufferify(e);const t=this.getLeaves();for(let r=0;r<t.length;r++)if(t[r].equals(e))return r;return-1}getLeafCount(){return this.leaves.length}getHexLeaves(){return this.leaves.map(e=>this.bufferToHex(e))}static marshalLeaves(e){return JSON.stringify(e.map(t=>L.bufferToHex(t)),null,2)}static unmarshalLeaves(e){let t=null;if(typeof e=="string")t=JSON.parse(e);else if(e instanceof Object)t=e;else throw new Error("Expected type of string or object");if(!t)return[];if(!Array.isArray(t))throw new Error("Expected JSON string to be array");return t.map(L.bufferify)}getLayers(){return this.layers}getHexLayers(){return this.layers.reduce((e,t)=>(Array.isArray(t)?e.push(t.map(r=>this.bufferToHex(r))):e.push(t),e),[])}getLayersFlat(){const e=this.layers.reduce((t,r)=>(Array.isArray(r)?t.unshift(...r):t.unshift(r),t),[]);return e.unshift(d.Buffer.from([0])),e}getHexLayersFlat(){return this.getLayersFlat().map(e=>this.bufferToHex(e))}getLayerCount(){return this.getLayers().length}getRoot(){return this.layers.length===0?d.Buffer.from([]):this.layers[this.layers.length-1][0]||d.Buffer.from([])}getHexRoot(){return this.bufferToHex(this.getRoot())}getProof(e,t){if(typeof e>"u")throw new Error("leaf is required");e=this.bufferify(e);const r=[];if(!Number.isInteger(t)){t=-1;for(let a=0;a<this.leaves.length;a++)d.Buffer.compare(e,this.leaves[a])===0&&(t=a)}if(t<=-1)return[];for(let a=0;a<this.layers.length;a++){const o=this.layers[a],f=t%2,i=f?t-1:this.isBitcoinTree&&t===o.length-1&&a<this.layers.length-1?t:t+1;i<o.length&&r.push({position:f?"left":"right",data:o[i]}),t=t/2|0}return r}getHexProof(e,t){return this.getProof(e,t).map(r=>this.bufferToHex(r.data))}getProofs(){const e=[],t=[];return this.getProofsDFS(this.layers.length-1,0,e,t),t}getProofsDFS(e,t,r,a){const o=t%2;if(e===-1){o||a.push([...r].reverse());return}if(t>=this.layers[e].length)return;const f=this.layers[e],i=o?t-1:t+1;let u=!1;i<f.length&&(u=!0,r.push({position:o?"left":"right",data:f[i]}));const l=t*2,h=t*2+1;this.getProofsDFS(e-1,l,r,a),this.getProofsDFS(e-1,h,r,a),u&&r.splice(r.length-1,1)}getHexProofs(){return this.getProofs().map(e=>this.bufferToHex(e.data))}getPositionalHexProof(e,t){return this.getProof(e,t).map(r=>[r.position==="left"?0:1,this.bufferToHex(r.data)])}getProofIndices(e,t){const r=2**t;let a=new Set;for(const l of e){let h=r+l;for(;h>1;)a.add(h^1),h=h/2|0}const o=e.map(l=>r+l),f=Array.from(a).sort((l,h)=>l-h).reverse();a=o.concat(f);const i=new Set,u=[];for(let l of a)if(!i.has(l))for(u.push(l);l>1&&(i.add(l),!!i.has(l^1));)l=l/2|0;return u.filter(l=>!e.includes(l-r))}getProofIndicesForUnevenTree(e,t){const r=Math.ceil(Math.log2(t)),a=[];for(let i=0;i<r;i++)t%2!==0&&a.push({index:i,leavesCount:t}),t=Math.ceil(t/2);const o=[];let f=e;for(let i=0;i<r;i++){let l=f.map(c=>c%2===0?c+1:c-1).filter(c=>!f.includes(c));const h=a.find(c=>{let{index:p}=c;return p===i});h&&f.includes(h.leavesCount-1)&&(l=l.slice(0,-1)),o.push(l),f=[...new Set(f.map(c=>c%2===0?c/2:c%2===0?(c+1)/2:(c-1)/2))]}return o}getMultiProof(e,t){if(this.complete||console.warn("Warning: For correct multiProofs it's strongly recommended to set complete: true"),t||(t=e,e=this.getLayersFlat()),this.isUnevenTree()&&t.every(Number.isInteger))return this.getMultiProofForUnevenTree(t);if(!t.every(Number.isInteger)){let a=t;this.sortPairs&&(a=a.sort(d.Buffer.compare));let o=a.map(l=>this.bufferIndexOf(this.leaves,l,this.sortLeaves)).sort((l,h)=>l===h?0:l>h?1:-1);if(!o.every(l=>l!==-1))throw new Error("Element does not exist in Merkle tree");const f=[],i=[];let u=[];for(let l=0;l<this.layers.length;l++){const h=this.layers[l];for(let c=0;c<o.length;c++){const p=o[c],m=this.getPairNode(h,p);f.push(h[p]),m&&i.push(m),u.push(p/2|0)}o=u.filter((c,p,m)=>m.indexOf(c)===p),u=[]}return i.filter(l=>!f.includes(l))}return this.getProofIndices(t,Math.log2(e.length/2|0)).map(a=>e[a])}getMultiProofForUnevenTree(e,t){t||(t=e,e=this.getLayers());let r=[],a=t;for(const o of e){const f=[];for(const u of a){if(u%2===0){const h=u+1;if(!a.includes(h)&&o[h]){f.push(o[h]);continue}}const l=u-1;if(!a.includes(l)&&o[l]){f.push(o[l]);continue}}r=r.concat(f);const i=new Set;for(const u of a){if(u%2===0){i.add(u/2);continue}if(u%2===0){i.add((u+1)/2);continue}i.add((u-1)/2)}a=Array.from(i)}return r}getHexMultiProof(e,t){return this.getMultiProof(e,t).map(r=>this.bufferToHex(r))}getProofFlags(e,t){if(!Array.isArray(e)||e.length<=0)throw new Error("Invalid Inputs!");let r;if(e.every(Number.isInteger)?r=[...e].sort((i,u)=>i===u?0:i>u?1:-1):r=e.map(i=>this.bufferIndexOf(this.leaves,i,this.sortLeaves)).sort((i,u)=>i===u?0:i>u?1:-1),!r.every(i=>i!==-1))throw new Error("Element does not exist in Merkle tree");const a=t.map(i=>this.bufferify(i)),o=[],f=[];for(let i=0;i<this.layers.length;i++){const u=this.layers[i];r=r.reduce((l,h)=>{if(!o.includes(u[h])){const p=this.getPairNode(u,h),m=a.includes(u[h])||a.includes(p);p&&f.push(!m),o.push(u[h]),o.push(p)}return l.push(h/2|0),l},[])}return f}verify(e,t,r){let a=this.bufferify(t);if(r=this.bufferify(r),!Array.isArray(e)||!t||!r)return!1;for(let o=0;o<e.length;o++){const f=e[o];let i=null,u=null;if(typeof f=="string")i=this.bufferify(f),u=!0;else if(Array.isArray(f))u=f[0]===0,i=this.bufferify(f[1]);else if(d.Buffer.isBuffer(f))i=f,u=!0;else if(f instanceof Object)i=this.bufferify(f.data),u=f.position==="left";else throw new Error("Expected node to be of type string or object");const l=[];this.isBitcoinTree?(l.push(C(a)),l[u?"unshift":"push"](C(i)),a=this.hashFn(this.concatenator(l)),a=C(this.hashFn(a))):this.sortPairs?d.Buffer.compare(a,i)===-1?(l.push(a,i),a=this.hashFn(this.concatenator(l))):(l.push(i,a),a=this.hashFn(this.concatenator(l))):(l.push(a),l[u?"unshift":"push"](i),a=this.hashFn(this.concatenator(l)))}return d.Buffer.compare(a,r)===0}verifyMultiProof(e,t,r,a,o){if(this.isUnevenTree())return this.verifyMultiProofForUnevenTree(e,t,r,a,o);const i=Math.ceil(Math.log2(a));e=this.bufferify(e),r=r.map(c=>this.bufferify(c)),o=o.map(c=>this.bufferify(c));const u={};for(const[c,p]of this.zip(t,r))u[2**i+c]=p;for(const[c,p]of this.zip(this.getProofIndices(t,i),o))u[c]=p;let l=Object.keys(u).map(c=>Number(c)).sort((c,p)=>c-p);l=l.slice(0,l.length-1);let h=0;for(;h<l.length;){const c=l[h];if(c>=2&&{}.hasOwnProperty.call(u,c^1)){let p=[u[c-c%2],u[c-c%2+1]];this.sortPairs&&(p=p.sort(d.Buffer.compare));const m=p[1]?this.hashFn(this.concatenator(p)):p[0];u[c/2|0]=m,l.push(c/2|0)}h+=1}return!t.length||{}.hasOwnProperty.call(u,1)&&u[1].equals(e)}verifyMultiProofWithFlags(e,t,r,a){e=this.bufferify(e),t=t.map(this.bufferify),r=r.map(this.bufferify);const o=t.length,f=a.length,i=[];let u=0,l=0,h=0;for(let c=0;c<f;c++){const p=a[c]?u<o?t[u++]:i[l++]:r[h++],m=u<o?t[u++]:i[l++],S=[p,m].sort(d.Buffer.compare);i[c]=this.hashFn(this.concatenator(S))}return d.Buffer.compare(i[f-1],e)===0}verifyMultiProofForUnevenTree(e,t,r,a,o){e=this.bufferify(e),r=r.map(i=>this.bufferify(i)),o=o.map(i=>this.bufferify(i));const f=this.calculateRootForUnevenTree(t,r,a,o);return e.equals(f)}getDepth(){return this.getLayers().length-1}getLayersAsObject(){const e=this.getLayers().map(r=>r.map(a=>this.bufferToHex(a,!1))),t=[];for(let r=0;r<e.length;r++){const a=[];for(let o=0;o<e[r].length;o++){const f={[e[r][o]]:null};if(t.length){f[e[r][o]]={};const i=t.shift(),u=Object.keys(i)[0];if(f[e[r][o]][u]=i[u],t.length){const l=t.shift(),h=Object.keys(l)[0];f[e[r][o]][h]=l[h]}}a.push(f)}t.push(...a)}return t[0]}resetTree(){this.leaves=[],this.layers=[]}getPairNode(e,t){const r=t%2===0?t+1:t-1;return r<e.length?e[r]:null}toTreeString(){const e=this.getLayersAsObject();return Se.exports.asTree(e,!0,!1)}toString(){return this.toTreeString()}isUnevenTree(e){const t=(e==null?void 0:e.length)||this.getDepth();return!this.isPowOf2(t)}isPowOf2(e){return e&&!(e&e-1)}calculateRootForUnevenTree(e,t,r,a){const o=this.zip(e,t).sort((c,p)=>{let[m]=c,[S]=p;return m-S}),f=o.map(c=>{let[p]=c;return p}),i=this.getProofIndicesForUnevenTree(f,r);let u=0;const l=[];for(let c=0;c<i.length;c++){const p=i[c],m=u;u+=p.length,l[c]=this.zip(p,a.slice(m,u))}const h=[o];for(let c=0;c<l.length;c++){const p=l[c].concat(h[c]).sort((g,I)=>{let[x]=g,[T]=I;return x-T}).map(g=>{let[,I]=g;return I}),m=h[c].map(g=>{let[I]=g;return I}),S=[...new Set(m.map(g=>g%2===0?g/2:g%2===0?(g+1)/2:(g-1)/2))],y=[];for(let g=0;g<S.length;g++){const I=S[g],x=p[g*2],T=p[g*2+1],v=T?this.hashFn(this.concatenator([x,T])):x;y.push([I,v])}h.push(y)}return h[h.length-1][0][1]}}function Qe(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot,pricePerToken:n.pricePerToken,currency:n.currency,quantityLimitPerTransaction:n.maxClaimablePerWallet,waitTimeInSecondsBetweenClaims:n.waitTimeInSecondsBetweenClaims||0}}function Ze(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot,pricePerToken:n.pricePerToken,currency:n.currency,quantityLimitPerWallet:n.maxClaimablePerWallet,metadata:n.metadata||""}}function H(n,s){return n==="unlimited"?N:M(n,s)}async function te(n){const e=Array.from({length:Math.ceil(n.length/25e3)},(a,o)=>n.slice(o*25e3,o*25e3+25e3)),t=[],r=await Promise.all(e.map(a=>J.parseAsync(a)));for(const a of r)t.push(...a);return t}const Ce=2;let W=function(n){return n[n.V1=1]="V1",n[n.V2=2]="V2",n}({});class B{constructor(s,e,t,r,a){this.storage=s,this.shardNybbles=r,this.baseUri=e,this.originalEntriesUri=t,this.tokenDecimals=a,this.shards={},this.trees={}}static async fromUri(s,e){try{const t=await e.downloadJSON(s);if(t.isShardedMerkleTree)return B.fromShardedMerkleTreeInfo(t,e)}catch{return}}static async fromShardedMerkleTreeInfo(s,e){return new B(e,s.baseUri,s.originalEntriesUri,s.shardNybbles,s.tokenDecimals)}static hashEntry(s,e,t,r){switch(r){case W.V1:return K(["address","uint256"],[s.address,H(s.maxClaimable,e)]);case W.V2:return K(["address","uint256","uint256","address"],[s.address,H(s.maxClaimable,e),H(s.price||"unlimited",t),s.currencyAddress||k])}}static async fetchAndCacheDecimals(s,e,t){if(!t)return 18;let r=s[t];return r===void 0&&(r=(await ye(e,t)).decimals,s[t]=r),r}static async buildAndUpload(s,e,t,r,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:Ce;const f=await te(s),i={};for(const x of f){const T=x.address.slice(2,2+o).toLowerCase();i[T]===void 0&&(i[T]=[]),i[T].push(x)}const u={},l=await Promise.all(Object.entries(i).map(async x=>{let[T,v]=x;return[T,new L(await Promise.all(v.map(async R=>{const ae=await B.fetchAndCacheDecimals(u,t,R.currencyAddress);return B.hashEntry(R,e,ae,a)})),F,{sort:!0}).getHexRoot()]})),h=Object.fromEntries(l),c=new L(Object.values(h),F,{sort:!0}),p=[];for(const[x,T]of Object.entries(i)){const v={proofs:c.getProof(h[x]).map(R=>"0x"+R.data.toString("hex")),entries:T};p.push({data:JSON.stringify(v),name:`${x}.json`})}const m=await r.uploadBatch(p),S=m[0].slice(0,m[0].lastIndexOf("/")),y=await r.upload(f),g={merkleRoot:c.getHexRoot(),baseUri:S,originalEntriesUri:y,shardNybbles:o,tokenDecimals:e,isShardedMerkleTree:!0},I=await r.upload(g);return{shardedMerkleInfo:g,uri:I}}async getProof(s,e,t){const r=s.slice(2,2+this.shardNybbles).toLowerCase();let a=this.shards[r];const o={};if(a===void 0)try{const h=this.baseUri.endsWith("/")?this.baseUri:`${this.baseUri}/`;a=this.shards[r]=await this.storage.downloadJSON(`${h}${r}.json`);const c=await Promise.all(a.entries.map(async p=>{const m=await B.fetchAndCacheDecimals(o,e,p.currencyAddress);return B.hashEntry(p,this.tokenDecimals,m,t)}));this.trees[r]=new L(c,F,{sort:!0})}catch{return null}const f=a.entries.find(h=>h.address.toLowerCase()===s.toLowerCase());if(!f)return null;const i=await B.fetchAndCacheDecimals(o,e,f.currencyAddress),u=B.hashEntry(f,this.tokenDecimals,i,t),l=this.trees[r].getProof(u).map(h=>"0x"+h.data.toString("hex"));return ge.parseAsync({...f,proof:l.concat(a.proofs)})}async getAllEntries(){try{return await this.storage.downloadJSON(this.originalEntriesUri)}catch(s){return console.warn("Could not fetch original snapshot entries",s),[]}}}async function ke(n,s,e,t,r,a){if(!e)return null;const o=e[s];if(o){const f=await r.downloadJSON(o);if(f.isShardedMerkleTree&&f.merkleRoot===s)return await(await B.fromShardedMerkleTreeInfo(f,r)).getProof(n,t,a);const i=await X.parseAsync(f);if(s===i.merkleRoot)return i.claims.find(u=>u.address.toLowerCase()===n.toLowerCase())||null}return null}function Ye(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot.toString(),pricePerToken:n.pricePerToken,currency:n.currency,maxClaimablePerWallet:n.quantityLimitPerTransaction,waitTimeInSecondsBetweenClaims:n.waitTimeInSecondsBetweenClaims}}function Ge(n){return{startTimestamp:n.startTimestamp,maxClaimableSupply:n.maxClaimableSupply,supplyClaimed:n.supplyClaimed,merkleRoot:n.merkleRoot.toString(),pricePerToken:n.pricePerToken,currency:n.currency,maxClaimablePerWallet:n.quantityLimitPerWallet,waitTimeInSecondsBetweenClaims:0,metadata:n.metadata}}async function Oe(n,s,e,t,r){const a=n.getSigner(),o=n.getProvider(),f=(await ue(()=>import("./index.a7009179.js").then(p=>p.dI),["assets/index.a7009179.js","assets/index.51c296b1.css"])).default,i=new ce(a||o,s,f,n.options,n.storage),u=await n.getSignerAddress(),l=n.address,h=await i.read("allowance",[u,l]),c=O.from(e).mul(O.from(t)).div(M("1",r));h.lt(c)&&await i.sendTransaction("approve",[l,h.add(c)])}async function Ke(n,s,e,t,r,a,o,f,i){let u=H(e.maxClaimablePerWallet,r),l=[z([0],32)],h=e.price,c=e.currencyAddress;try{if(!e.merkleRootHash.toString().startsWith(k)){const y=await ke(n,e.merkleRootHash.toString(),await t(),a.getProvider(),o,i);if(y)l=y.proof,u=y.maxClaimable==="unlimited"?N:M(y.maxClaimable,r),h=y.price===void 0||y.price==="unlimited"?N:await _(a.getProvider(),y.price,y.currencyAddress||k),c=y.currencyAddress||k;else if(i===W.V1)throw new Error("No claim found for this address")}}catch(y){if((y==null?void 0:y.message)==="No claim found for this address")throw y;console.warn("failed to check claim condition merkle root hash, continuing anyways",y)}const p=await a.getCallOverrides()||{},m=h.toString()!==N.toString()?h:e.price,S=c!==k?c:e.currencyAddress;return m.gt(0)&&(he(S)?p.value=O.from(m).mul(s).div(M("1",r)):f&&await Oe(a,S,m,s,r)),{overrides:p,proofs:l,maxClaimable:u,price:m,currencyAddress:S,priceInProof:h,currencyAddressInProof:c}}const Le=(()=>b.object({name:b.string(),symbol:b.string(),decimals:b.number()}))(),He=(()=>Le.extend({value:w,displayValue:b.string()}))(),ve=(()=>b.object({name:b.string().optional()}).catchall(b.unknown()))(),Q=(()=>b.object({startTime:ee,currencyAddress:b.string().default(V),price:q.default(0),maxClaimableSupply:U,maxClaimablePerWallet:U,waitInSeconds:$.default(0),merkleRootHash:be.default(z([0],32)),snapshot:b.optional(J).nullable(),metadata:ve.optional()}))(),Ne=(()=>b.array(Q))(),re=(()=>Q.extend({availableSupply:U,currentMintSupply:U,currencyMetadata:He.default({value:O.from("0"),displayValue:"0",symbol:"",decimals:18,name:""}),price:w,waitInSeconds:w,startTime:w.transform(n=>new Date(n.toNumber()*1e3)),snapshot:J.optional().nullable()}))();async function Re(n,s,e,t,r){const a=await te(n),o=a.map(u=>u.address);if(new Set(o).size<o.length)throw new we;const i=await B.buildAndUpload(a,s,e,t,r);return{merkleRoot:i.shardedMerkleInfo.merkleRoot,snapshotUri:i.uri}}function Ee(n,s){const e=O.from(n),t=O.from(s);return e.eq(t)?0:e.gt(t)?1:-1}async function Me(n,s,e,t,r){const a=[];return{inputsWithSnapshots:await Promise.all(n.map(async f=>{if(f.snapshot&&f.snapshot.length>0){const i=await Re(f.snapshot,s,e,t,r);a.push(i),f.merkleRootHash=i.merkleRoot}else f.merkleRootHash=z([0],32);return f})),snapshotInfos:a}}async function Ue(n,s,e,t){const r=n.currencyAddress===k?V:n.currencyAddress,a=H(n.maxClaimableSupply,s),o=H(n.maxClaimablePerWallet,s);let f;return n.metadata&&(typeof n.metadata=="string"?f=n.metadata:f=await t.upload(n.metadata)),{startTimestamp:n.startTime,maxClaimableSupply:a,supplyClaimed:0,maxClaimablePerWallet:o,pricePerToken:await _(e,n.price,r),currency:r,merkleRoot:n.merkleRootHash.toString(),waitTimeInSecondsBetweenClaims:n.waitInSeconds||0,metadata:f}}async function Xe(n,s,e,t,r){const{inputsWithSnapshots:a,snapshotInfos:o}=await Me(n,s,e,t,r),f=await Ne.parseAsync(a),i=(await Promise.all(f.map(u=>Ue(u,s,e,t)))).sort((u,l)=>Ee(u.startTimestamp,l.startTimestamp));return{snapshotInfos:o,sortedConditions:i}}async function De(n,s,e){if(!s)return null;const t=s[n];if(t){const r=await e.downloadJSON(t);if(r.isShardedMerkleTree&&r.merkleRoot===n){const a=await B.fromUri(t,e);return(a==null?void 0:a.getAllEntries())||null}else{const a=await X.parseAsync(r);if(n===a.merkleRoot)return a.claims.map(o=>({address:o.address,maxClaimable:o.maxClaimable,price:o.price,currencyAddress:o.currencyAddress}))}}return null}function E(n,s){return n.toString()===N.toString()?"unlimited":j(n,s)}async function _e(n,s,e,t,r,a){var c;const o=await pe(e,n.currency,n.pricePerToken),f=E(n.maxClaimableSupply,s),i=E(n.maxClaimablePerWallet,s),u=E(O.from(n.maxClaimableSupply).sub(n.supplyClaimed),s),l=E(n.supplyClaimed,s);let h;return n.metadata&&(h=await r.downloadJSON(n.metadata)),re.parseAsync({startTime:n.startTimestamp,maxClaimableSupply:f,maxClaimablePerWallet:i,currentMintSupply:l,availableSupply:u,waitInSeconds:(c=n.waitTimeInSecondsBetweenClaims)==null?void 0:c.toString(),price:O.from(n.pricePerToken),currency:n.currency,currencyAddress:n.currency,currencyMetadata:o,merkleRootHash:n.merkleRoot,snapshot:a?await De(n.merkleRoot,t,r):void 0,metadata:h})}async function et(n,s,e){if(n>=e.length)throw Error(`Index out of bounds - got index: ${n} with ${e.length} conditions`);const t=e[n].currencyMetadata.decimals,r=e[n].price,a=j(r,t),o=await Q.parseAsync({...e[n],price:a,...s}),f=await re.parseAsync({...o,price:r});return e.map((i,u)=>{let l;u===n?l=f:l=i;const h=j(l.price,t);return{...l,price:h}})}let tt=function(n){return n.NotEnoughSupply="There is not enough supply to claim.",n.AddressNotAllowed="This address is not on the allowlist.",n.WaitBeforeNextClaimTransaction="Not enough time since last claim transaction. Please wait.",n.ClaimPhaseNotStarted="Claim phase has not started yet.",n.AlreadyClaimed="You have already claimed the token.",n.WrongPriceOrCurrency="Incorrect price or currency.",n.OverMaxClaimablePerWallet="Cannot claim more than maximum allowed quantity.",n.NotEnoughTokens="There are not enough tokens in the wallet to pay for the claim.",n.NoActiveClaimPhase="There is no active claim phase at the moment. Please check back in later.",n.NoClaimConditionSet="There is no claim condition set.",n.NoWallet="No wallet connected.",n.Unknown="No claim conditions found.",n}({});function Fe(n){if(n===void 0){const s=d.Buffer.alloc(16);return le({},s),Y(fe(s.toString("hex")))}else return Y(n)}const se=(()=>b.object({to:G.refine(n=>n.toLowerCase()!==k,{message:"Cannot create payload to mint to zero address"}),price:q.default(0),currencyAddress:de.default(V),mintStartTime:ee,mintEndTime:xe,uid:b.string().optional().transform(n=>Fe(n)),primarySaleRecipient:G.default(k)}))(),je=(()=>se.extend({quantity:q}))(),rt=(()=>je.extend({mintStartTime:w,mintEndTime:w}))(),Z=(()=>se.extend({metadata:D,royaltyRecipient:b.string().default(k),royaltyBps:me.default(0)}))(),ne=(()=>Z.extend({metadata:D.default(""),uri:b.string(),royaltyBps:w,mintStartTime:w,mintEndTime:w}))(),We=(()=>Z.extend({metadata:D.default(""),quantity:$}))(),st=(()=>We.extend({tokenId:$}))(),nt=(()=>ne.extend({tokenId:w,quantity:w}))(),at=(()=>Z.extend({metadata:D.default(""),quantity:w.default(1)}))(),it=(()=>ne.extend({quantity:w.default(1)}))(),ot=[{name:"to",type:"address"},{name:"primarySaleRecipient",type:"address"},{name:"quantity",type:"uint256"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],lt=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ft=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"tokenId",type:"uint256"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ut=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}];var ct=function n(s,e){if(s===e)return!0;if(s&&e&&typeof s=="object"&&typeof e=="object"){if(s.constructor!==e.constructor)return!1;var t,r,a;if(Array.isArray(s)){if(t=s.length,t!=e.length)return!1;for(r=t;r--!==0;)if(!n(s[r],e[r]))return!1;return!0}if(s.constructor===RegExp)return s.source===e.source&&s.flags===e.flags;if(s.valueOf!==Object.prototype.valueOf)return s.valueOf()===e.valueOf();if(s.toString!==Object.prototype.toString)return s.toString()===e.toString();if(a=Object.keys(s),t=a.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,a[r]))return!1;for(r=t;r--!==0;){var o=a[r];if(!n(s[o],e[o]))return!1}return!0}return s!==s&&e!==e};export{se as B,tt as C,ft as M,st as S,Oe as a,nt as b,H as c,ct as d,Qe as e,ke as f,Ze as g,Ke as h,W as i,at as j,it as k,Ye as l,lt as m,Ge as n,ut as o,Xe as p,je as q,rt as r,ot as s,_e as t,et as u,Fe as v};
