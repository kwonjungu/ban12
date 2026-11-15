import{n as e}from"./rolldown-runtime-XKyaHtl9.js";import{$t as t,C as n,Cn as r,Gi as i,Gn as a,In as o,Jn as s,Ki as c,Kr as l,Li as u,Lt as d,Ni as f,Qt as p,S as m,Sn as h,Tn as g,Ur as _,Vi as v,Vn as y,Wi as b,Wr as x,Xr as S,Yr as C,Z as w,an as T,b as E,dr as ee,en as te,fr as ne,gi as re,h as ie,in as ae,qi as oe,vt as se,w as ce,wn as le,wt as ue,yi as de}from"./three.core-Dxe69qRc.js";var fe=0,pe=1,me=2,he=0,ge=1,_e=2,ve=3,ye=1.25,be=65535,xe=-65536,Se=2**-24,Ce=Symbol(`SKIP_GENERATION`),we={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Ce]:!1};function D(e,t,n){return n.min.x=t[e],n.min.y=t[e+1],n.min.z=t[e+2],n.max.x=t[e+3],n.max.y=t[e+4],n.max.z=t[e+5],n}function Te(e){let t=-1,n=-1/0;for(let r=0;r<3;r++){let i=e[r+3]-e[r];i>n&&(n=i,t=r)}return t}function Ee(e,t,n){for(let r=0;r<3;r++){let i=t[e+2*r],a=t[e+2*r+1],o=i-a,s=i+a;o<n[r]&&(n[r]=o),s>n[r+3]&&(n[r+3]=s)}}function De(e){let t=e[3]-e[0],n=e[4]-e[1],r=e[5]-e[2];return 2*(t*n+n*r+r*t)}function O(e,t){return t[e+15]===be}function k(e,t){return t[e+6]}function A(e,t){return t[e+14]}function j(e){return e+8}function M(e,t){return e+t[e+6]*8}function Oe(e,t){return t[e+7]}function N(e){return e}function ke(e,t,n,r,i){let a=1/0,o=1/0,s=1/0,c=-1/0,l=-1/0,u=-1/0,d=1/0,f=1/0,p=1/0,m=-1/0,h=-1/0,g=-1/0,_=e.offset||0;for(let r=(t-_)*6,i=(t+n-_)*6;r<i;r+=6){let t=e[r+0],n=e[r+1],i=t-n,_=t+n;i<a&&(a=i),_>c&&(c=_),t<d&&(d=t),t>m&&(m=t);let v=e[r+2],y=e[r+3],b=v-y,x=v+y;b<o&&(o=b),x>l&&(l=x),v<f&&(f=v),v>h&&(h=v);let S=e[r+4],C=e[r+5],w=S-C,T=S+C;w<s&&(s=w),T>u&&(u=T),S<p&&(p=S),S>g&&(g=S)}r[0]=a,r[1]=o,r[2]=s,r[3]=c,r[4]=l,r[5]=u,i[0]=d,i[1]=f,i[2]=p,i[3]=m,i[4]=h,i[5]=g}var Ae=8,je=8,Me=new Int32Array(Ae),P=new Float32Array(48),Ne=new Float32Array(48),F=new Float32Array(6),Pe=new Float32Array(6),I=new Int32Array(je),Fe=new Float32Array(48);function Ie(e,t,n,r){for(let i=0;i<3;i++){let a=t[e+2*i],o=t[e+2*i+1],s=a-o,c=a+o;s<n[r+i]&&(n[r+i]=s),c>n[r+i+3]&&(n[r+i+3]=c)}}function Le(e,t){let n=e[t+3]-e[t],r=e[t+4]-e[t+1],i=e[t+5]-e[t+2];return 2*(n*r+r*i+i*n)}function Re(e,t,n,r,i,a){let o=-1,s=0;if(a===0)o=Te(t),o!==-1&&(s=(t[o]+t[o+3])/2);else if(a===1)o=Te(e),o!==-1&&(s=ze(n,r,i,o));else if(a===2){let a=De(e),c=ye*i,l=n.offset||0,u=(r-l)*6,d=(r+i-l)*6;for(let e=0;e<3;e++){let r=t[e],l=(t[e+3]-r)/Ae;if(i<je){for(let t=0;t<i;t++){let r=u+t*6,i=n[r+2*e],a=t;for(;a>0&&n[I[a-1]+2*e]>i;)I[a]=I[a-1],a--;I[a]=r}for(let e=0;e<3;e++)F[e]=1/0,F[e+3]=-1/0,Pe[e]=1/0,Pe[e+3]=-1/0;for(let e=i-1;e>=0;e--)Ee(I[e],n,Pe),Fe.set(Pe,e*6);for(let t=0;t<i-1;t++){Ee(I[t],n,F);let r=n[I[t+1]+2*e];if(n[I[t]+2*e]===r)continue;let l=t+1,u=i-l,d=De(F)/a,f=Le(Fe,l*6)/a,p=1+ye*(d*l+f*u);p<c&&(o=e,c=p,s=r)}}else{for(let e=0;e<Ae;e++){Me[e]=0;for(let t=0;t<3;t++)P[e*6+t]=1/0,P[e*6+t+3]=-1/0}for(let t=u;t<d;t+=6){let i=~~((n[t+2*e]-r)/l);i>=Ae&&(i=7),Me[i]++,Ie(t,n,P,i*6)}for(let e=0;e<6;e++)Ne[42+e]=P[42+e];for(let e=6;e>=0;e--){let t=e*6,n=t+6;for(let e=0;e<3;e++)Ne[t+e]=Math.min(P[t+e],Ne[n+e]),Ne[t+e+3]=Math.max(P[t+e+3],Ne[n+e+3])}let t=0;for(let n=0;n<7;n++){let u=n*6,d=Me[n];if(d!==0)for(let e=0;e<3;e++)t===0?(F[e]=P[u+e],F[e+3]=P[u+e+3]):(F[e]=Math.min(F[e],P[u+e]),F[e+3]=Math.max(F[e+3],P[u+e+3]));t+=d;let f=0,p=0;t!==0&&(f=De(F)/a);let m=i-t;m!==0&&(p=Le(Ne,u+6)/a);let h=1+ye*(f*t+p*m);h<c&&(o=e,c=h,s=r+l+n*l)}}}}else console.warn(`BVH: Invalid build strategy value ${a} used.`);return{axis:o,pos:s}}function ze(e,t,n,r){let i=0,a=e.offset;for(let o=t,s=t+n;o<s;o++)i+=e[(o-a)*6+r*2];return i/n}function Be(e,t,n,r,i,a){let o=r,s=r+i-1,c=a.pos,l=a.axis*2,u=n.offset||0;for(;;){for(;o<=s&&n[(o-u)*6+l]<c;)o++;for(;o<=s&&n[(s-u)*6+l]>=c;)s--;if(o<s){for(let n=0;n<t;n++){let r=e[o*t+n];e[o*t+n]=e[s*t+n],e[s*t+n]=r}for(let e=0;e<6;e++){let t=o-u,r=s-u,i=n[t*6+e];n[t*6+e]=n[r*6+e],n[r*6+e]=i}o++,s--}else return o}}var Ve=2**32,He=new Float32Array(6),Ue=new Float32Array(6);function We(e,t,n,r,i,a){let{maxDepth:o,verbose:s,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:d,useSharedArrayBuffer:f=!1}=i,p=e.primitiveBuffer,m=e.primitiveBufferStride,h=new(f?SharedArrayBuffer:ArrayBuffer)(32*Math.max(1,2*Math.ceil(r)-1)),g=new Float32Array(h),_=new Uint32Array(h),v=new Uint16Array(h),y=0,b=!1;return ke(t,n,r,He,Ue),C(n,r,0),h.slice(0,y*32);function x(e){d&&d((e-a.offset)/a.count)}function S(e,t,n){let r=e*2;_[e+6]=t,v[r+14]=n,v[r+15]=be,x(t+n)}function C(e,n,r){let i=y++,a=i*8;g.set(He,a),!b&&r>=o&&(b=!0,s&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let d=n>l;if(n<=c&&!d||r>=o){S(a,e,n);return}let f=Re(He,Ue,t,e,n,u),h=f.axis===-1?-1:Be(p,m,t,e,n,f);if(f.axis===-1||h===e||h===e+n){if(!d){S(a,e,n);return}f.axis=Math.max(0,Te(He)),h=e+Math.max(1,Math.floor(n/2))}_[a+7]=f.axis;let v=h-e;ke(t,e,v,He,Ue),C(e,v,r+1);let x=y-i;if(x>Ve)throw Error(`MeshBVH: Cannot store relative child node offset greater than 32 bits.`);_[a+6]=x;let w=n-v;ke(t,h,w,He,Ue),C(h,w,r+1)}}function Ge(e,t){let n=e.getRootRanges(t.range),r=n[0],i=n[n.length-1],a={offset:r.offset,count:i.offset+i.count-r.offset},o=new Float32Array(6*a.count);o.offset=a.offset,e.computePrimitiveBounds(a.offset,a.count,o),e._roots=n.map(n=>We(e,o,n.offset,n.count,t,a))}var Ke=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}},L=new class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},R,qe,Je=[],Ye=new Ke(()=>new E);function Xe(e,t,n,r,i,a){R=Ye.getPrimitive(),qe=Ye.getPrimitive(),Je.push(R,qe),L.setBuffer(e._roots[t]);let o=Ze(0,e.geometry,n,r,i,a);L.clearBuffer(),Ye.releasePrimitive(R),Ye.releasePrimitive(qe),Je.pop(),Je.pop();let s=Je.length;return s>0&&(qe=Je[s-1],R=Je[s-2]),o}function Ze(e,t,n,r,i=null,a=0,o=0){let{float32Array:s,uint16Array:c,uint32Array:l}=L,u=e*2;if(O(u,c)){let t=k(e,l),n=A(u,c);return D(N(e),s,R),r(t,n,!1,o,a+e/8,R)}{let u=j(e),d=M(e,l),f=u,p=d,m,h,g,_;if(i&&(g=R,_=qe,D(N(f),s,g),D(N(p),s,_),m=i(g),h=i(_),h<m)){f=d,p=u;let e=m;m=h,h=e,g=_}g||(g=R,D(N(f),s,g));let v=O(f*2,c),y=n(g,v,m,o+1,a+f/8),b;if(y===2){let e=w(f);b=r(e,T(f)-e,!0,o+1,a+f/8,g)}else b=y&&Ze(f,t,n,r,i,a,o+1);if(b)return!0;_=qe,D(N(p),s,_);let x=O(p*2,c),S=n(_,x,h,o+1,a+p/8),C;if(S===2){let e=w(p);C=r(e,T(p)-e,!0,o+1,a+p/8,_)}else C=S&&Ze(p,t,n,r,i,a,o+1);return!!C;function w(e){let{uint16Array:t,uint32Array:n}=L,r=e*2;for(;!O(r,t);)e=j(e),r=e*2;return k(e,n)}function T(e){let{uint16Array:t,uint32Array:n}=L,r=e*2;for(;!O(r,t);)e=M(e,n),r=e*2;return k(e,n)+A(r,t)}}}var Qe=new L.constructor,$e=new L.constructor,et=new Ke(()=>new E),tt=new E,nt=new E,rt=new E,it=new E,at=!1;function ot(e,t,n,i){if(at)throw Error(`MeshBVH: Recursive calls to bvhcast not supported.`);at=!0;let a=e._roots,o=t._roots,s,c=0,l=0,u=new r().copy(n).invert();for(let e=0,t=a.length;e<t;e++){Qe.setBuffer(a[e]),l=0;let t=et.getPrimitive();D(N(0),Qe.float32Array,t),t.applyMatrix4(u);for(let e=0,r=o.length;e<r&&($e.setBuffer(o[e]),s=z(0,0,n,u,i,c,l,0,0,t),$e.clearBuffer(),l+=o[e].byteLength/32,!s);e++);if(et.releasePrimitive(t),Qe.clearBuffer(),c+=a[e].byteLength/32,s)break}return at=!1,s}function z(e,t,n,r,i,a=0,o=0,s=0,c=0,l=null,u=!1){let d,f;u?(d=$e,f=Qe):(d=Qe,f=$e);let p=d.float32Array,m=d.uint32Array,h=d.uint16Array,g=f.float32Array,_=f.uint32Array,v=f.uint16Array,y=e*2,b=t*2,x=O(y,h),S=O(b,v),C=!1;if(S&&x)C=u?i(k(t,_),A(t*2,v),k(e,m),A(e*2,h),c,o+t/8,s,a+e/8):i(k(e,m),A(e*2,h),k(t,_),A(t*2,v),s,a+e/8,c,o+t/8);else if(S){let l=et.getPrimitive();D(N(t),g,l),l.applyMatrix4(n);let d=j(e),f=M(e,m);D(N(d),p,tt),D(N(f),p,nt);let h=l.intersectsBox(tt),_=l.intersectsBox(nt);C=h&&z(t,d,r,n,i,o,a,c,s+1,l,!u)||_&&z(t,f,r,n,i,o,a,c,s+1,l,!u),et.releasePrimitive(l)}else{let d=j(t),f=M(t,_);D(N(d),g,rt),D(N(f),g,it);let h=l.intersectsBox(rt),v=l.intersectsBox(it);if(h&&v)C=z(e,d,n,r,i,a,o,s,c+1,l,u)||z(e,f,n,r,i,a,o,s,c+1,l,u);else if(h){if(x)C=z(e,d,n,r,i,a,o,s,c+1,l,u);else{let t=et.getPrimitive();t.copy(rt).applyMatrix4(n);let l=j(e),f=M(e,m);D(N(l),p,tt),D(N(f),p,nt);let h=t.intersectsBox(tt),g=t.intersectsBox(nt);C=h&&z(d,l,r,n,i,o,a,c,s+1,t,!u)||g&&z(d,f,r,n,i,o,a,c,s+1,t,!u),et.releasePrimitive(t)}}else if(v){if(x)C=z(e,f,n,r,i,a,o,s,c+1,l,u);else{let t=et.getPrimitive();t.copy(it).applyMatrix4(n);let l=j(e),d=M(e,m);D(N(l),p,tt),D(N(d),p,nt);let h=t.intersectsBox(tt),g=t.intersectsBox(nt);C=h&&z(f,l,r,n,i,o,a,c,s+1,t,!u)||g&&z(f,d,r,n,i,o,a,c,s+1,t,!u),et.releasePrimitive(t)}}}return C}var st=new class{constructor(){let e=null,t=null,n=null,r=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(i,a)=>{if(r)throw Error(`BVHTraversalHelper: cannot call setBVH during an active traversal.`);this.root=a,this.buffer=e=i._roots[a],this.uint16Array=n=new Uint16Array(e),this.uint32Array=t=new Uint32Array(e)},this.reset=()=>{this.root=null,this.buffer=e=null,this.uint16Array=n=null,this.uint32Array=t=null},this.getRangeStart=e=>{let r=e*2;for(;!O(r,n);)e=j(e),r=e*2;return k(e,t)},this.getRangeEnd=e=>{let r=e*2;for(;!O(r,n);)e=M(e,t),r=e*2;return k(e,t)+A(r,n)};let i=(e,r,a)=>{let o=O(r*2,n);if(!e(a,o,r)&&!o){let n=j(r),o=M(r,t);i(e,n,a+1),i(e,o,a+1)}};this.traverseBuffer=e=>{if(r)throw Error(`BVHTraversalHelper: cannot start a traversal during an active traversal.`);r=!0;try{i(e,0,0)}finally{r=!1}},this.traverse=r=>{this.traverseBuffer((i,a,o)=>{if(a){let s=o*2,c=t[o+6],l=n[s+14];return r(i,a,new Float32Array(e,o*4,6),c,l)}{let n=Oe(o,t);return r(i,a,new Float32Array(e,o*4,6),n)}})}}},ct=new E,lt=new Float32Array(6),ut=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...we,...e},`maxLeafSize`in e&&(console.warn(`BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.`),e={...e,targetLeafSize:e.maxLeafSize}),Ge(this,e)}getRootRanges(){throw Error(`BVH: getRootRanges() not implemented`)}writePrimitiveBounds(){throw Error(`BVH: writePrimitiveBounds() not implemented`)}writePrimitiveRangeBounds(e,t,n,r){let i=1/0,a=1/0,o=1/0,s=-1/0,c=-1/0,l=-1/0;for(let n=e,r=e+t;n<r;n++){this.writePrimitiveBounds(n,lt,0);let[e,t,r,u,d,f]=lt;e<i&&(i=e),u>s&&(s=u),t<a&&(a=t),d>c&&(c=d),r<o&&(o=r),f>l&&(l=f)}return n[r+0]=i,n[r+1]=a,n[r+2]=o,n[r+3]=s,n[r+4]=c,n[r+5]=l,n}computePrimitiveBounds(e,t,n){let r=n.offset||0;for(let i=e,a=e+t;i<a;i++){this.writePrimitiveBounds(i,lt,0);let[e,t,a,o,s,c]=lt,l=(e+o)/2,u=(t+s)/2,d=(a+c)/2,f=(o-e)/2,p=(s-t)/2,m=(c-a)/2,h=(i-r)*6;n[h+0]=l,n[h+1]=f+(Math.abs(l)+f)*Se,n[h+2]=u,n[h+3]=p+(Math.abs(u)+p)*Se,n[h+4]=d,n[h+5]=m+(Math.abs(d)+m)*Se}return n}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let n=0,r=t.length;n<r;n++)t[n]+=e;else{let t=this._roots;for(let n=0;n<t.length;n++){let r=t[n],i=new Uint32Array(r),a=new Uint16Array(r),o=r.byteLength/32;for(let t=0;t<o;t++){let n=8*t;O(2*n,a)&&(i[n+6]+=e)}}}}traverse(e,t=0){st.setBVH(this,t),st.traverse(e),st.reset()}refit(){let e=this._roots;for(let t=0,n=e.length;t<n;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n),a=new Float32Array(n),o=n.byteLength/32;for(let e=o-1;e>=0;e--){let t=e*8,n=t*2;if(O(n,i)){let e=k(t,r),o=A(n,i);this.writePrimitiveRangeBounds(e,o,lt,0),a.set(lt,t)}else{let e=j(t),n=M(t,r);for(let r=0;r<3;r++){let i=a[e+r],o=a[e+r+3],s=a[n+r],c=a[n+r+3];a[t+r]=i<s?i:s,a[t+r+3]=o>c?o:c}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{D(0,new Float32Array(t),ct),e.union(ct)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:i,scratchPrimitive:a,iterate:o}=e;if(r&&i){let e=r;r=(t,n,r,s,c)=>e(t,n,r,s,c)?!0:o(t,n,this,i,r,s,a)}else r||=i?(e,t,n,r)=>o(e,t,this,i,n,r,a):(e,t,n)=>n;let s=!1,c=0,l=this._roots;for(let e=0,i=l.length;e<i;e++){let i=l[e];if(s=Xe(this,e,n,r,t,c),s)break;c+=i.byteLength/32}return s}bvhcast(e,t,n){let{intersectsRanges:r}=n;return ot(this,e,t,r)}};function dt(){return typeof SharedArrayBuffer<`u`}function ft(e){return e.index?e.index.count:e.attributes.position.count}function pt(e){return ft(e)/3}function mt(e,t=ArrayBuffer){return e>65535?new Uint32Array(new t(4*e)):new Uint16Array(new t(2*e))}function ht(e,t){if(!e.index){let n=e.attributes.position.count,r=mt(n,t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer);e.setIndex(new m(r,1));for(let e=0;e<n;e++)r[e]=e}}function gt(e,t,n){let r=ft(e)/n,i=t||e.drawRange,a=i.start/n,o=(i.start+i.count)/n,s=Math.max(0,a),c=Math.min(r,o)-s;return{offset:Math.floor(s),count:Math.floor(c)}}function _t(e,t){return e.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function vt(e,t,n){let r=gt(e,t,n),i=_t(e,n);if(!i.length)return[r];let a=[],o=r.offset,s=r.offset+r.count,c=ft(e)/n,l=[];for(let e of i){let{offset:t,count:n}=e,r=t,i=t+(isFinite(n)?n:c-t);r<s&&i>o&&(l.push({pos:Math.max(o,r),isStart:!0}),l.push({pos:Math.min(s,i),isStart:!1}))}l.sort((e,t)=>e.pos===t.pos?e.type===`end`?-1:1:e.pos-t.pos);let u=0,d=null;for(let e of l){let t=e.pos;u!==0&&t!==d&&a.push({offset:d,count:t-d}),u+=e.isStart?1:-1,d=t}return a}function yt(e,t){let n=e[e.length-1],r=n.offset+n.count>2**16,i=e.reduce((e,t)=>e+t.count,0),a=r?4:2,o=t?new SharedArrayBuffer(i*a):new ArrayBuffer(i*a),s=r?new Uint32Array(o):new Uint16Array(o),c=0;for(let t=0;t<e.length;t++){let{offset:n,count:r}=e[t];for(let e=0;e<r;e++)s[c+e]=n+e;c+=r}return s}var bt=class extends ut{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(!e.isBufferGeometry)throw Error(`BVH: Only BufferGeometries are supported.`);if(e.index&&e.index.isInterleavedBufferAttribute)throw Error(`BVH: InterleavedBufferAttribute is not supported for the index attribute.`);if(t.useSharedArrayBuffer&&!dt())throw Error(`BVH: SharedArrayBuffer is not available.`);super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?e=>this._indirectBuffer[e]:e=>e,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...we,...t},t[Ce]||this.init(t)}init(e){let{geometry:t,primitiveStride:n}=this;if(e.indirect){let r=yt(vt(t,e.range,n),e.useSharedArrayBuffer);this._indirectBuffer=r}else ht(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new E))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:vt(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw Error(`BVH: raycastObject3D() not implemented`)}},B=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let i=0,a=e.length;i<a;i++){let a=e[i][t];n=a<n?a:n,r=a>r?a:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=e.dot(a);n=o<n?o:n,r=o>r?o:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}};B.prototype.setFromBox=(function(){let e=new c;return function(t,n){let r=n.min,i=n.max,a=1/0,o=-1/0;for(let n=0;n<=1;n++)for(let s=0;s<=1;s++)for(let c=0;c<=1;c++){e.x=r.x*n+i.x*(1-n),e.y=r.y*s+i.y*(1-s),e.z=r.z*c+i.z*(1-c);let l=t.dot(e);a=Math.min(l,a),o=Math.max(l,o)}this.min=a,this.max=o}})();var xt=(function(){let e=new c,t=new c,n=new c;return function(r,i,a){let o=r.start,s=e,c=i.start,l=t;n.subVectors(o,c),e.subVectors(r.end,r.start),t.subVectors(i.end,i.start);let u=n.dot(l),d=l.dot(s),f=l.dot(l),p=n.dot(s),m=s.dot(s)*f-d*d,h,g;h=m===0?0:(u*d-p*f)/m,g=(u+h*d)/f,a.x=h,a.y=g}})(),St=(function(){let e=new i,t=new c,n=new c;return function(r,i,a,o){xt(r,i,e);let s=e.x,c=e.y;if(s>=0&&s<=1&&c>=0&&c<=1)r.at(s,a),i.at(c,o);else if(s>=0&&s<=1)c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);else if(c>=0&&c<=1)s<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);else{let e;e=s<0?r.start:r.end;let l;l=c<0?i.start:i.end;let u=t,d=n;if(r.closestPointToPoint(l,!0,t),i.closestPointToPoint(e,!0,n),u.distanceToSquared(l)<=d.distanceToSquared(e)){a.copy(u),o.copy(l);return}a.copy(e),o.copy(d);return}}})(),Ct=(function(){let e=new c,n=new c,r=new a,i=new t;return function(t,a){let{radius:o,center:s}=t,{a:c,b:l,c:u}=a;if(i.start=c,i.end=l,i.closestPointToPoint(s,!0,e).distanceTo(s)<=o||(i.start=c,i.end=u,i.closestPointToPoint(s,!0,e).distanceTo(s)<=o)||(i.start=l,i.end=u,i.closestPointToPoint(s,!0,e).distanceTo(s)<=o))return!0;let d=a.getPlane(r);if(Math.abs(d.distanceToPoint(s))<=o){let e=d.projectPoint(s,n);if(a.containsPoint(e))return!0}return!1}})(),wt=[`x`,`y`,`z`],V=1e-15,Tt=V*V;function H(e){return Math.abs(e)<V}var U=class extends f{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=[,,,,].fill().map(()=>new c),this.satBounds=[,,,,].fill().map(()=>new B),this.points=[this.a,this.b,this.c],this.plane=new a,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new t,this.needsUpdate=!0}intersectsSphere(e){return Ct(e,this)}update(){let e=this.a,t=this.b,n=this.c,r=this.points,i=this.satAxes,a=this.satBounds,o=i[0],s=a[0];this.getNormal(o),s.setFromPoints(o,r);let c=i[1],l=a[1];c.subVectors(e,t),l.setFromPoints(c,r);let u=i[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,r);let f=i[3],p=a[3];f.subVectors(n,e),p.setFromPoints(f,r);let m=c.length(),h=u.length(),g=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,m<V?h<V||g<V?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):h<V?g<V?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):g<V&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}};U.prototype.closestPointToSegment=(function(){let e=new c,n=new c,r=new t;return function(t,i=null,a=null){this.needsUpdate&&this.update();let{start:o,end:s}=t,c=this.points,l,u=1/0;if(this.plane.distanceToPoint(o)*this.plane.distanceToPoint(s)<0&&this.plane.intersectLine(t,e)!==null&&this.containsPoint(e))return i&&i.copy(e),a&&a.copy(e),0;for(let o=0;o<3;o++){let s=(o+1)%3;r.start.copy(c[o]),r.end.copy(c[s]),St(r,t,e,n),l=e.distanceToSquared(n),l<u&&(u=l,i&&i.copy(e),a&&a.copy(n))}return this.closestPointToPoint(o,e),l=o.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(o)),this.closestPointToPoint(s,e),l=s.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(s)),Math.sqrt(u)}})(),U.prototype.intersectsTriangle=(function(){let e=new U,n=new B,r=new B,a=new c,o=new c,s=new c,l=new c,u=new t,d=new t,f=new c,p=new i,m=new i;function h(e,t,i,o){let s=a;!e.isDegenerateIntoPoint&&!e.isDegenerateIntoSegment?s.copy(e.plane.normal):s.copy(t.plane.normal);let c=e.satBounds,u=e.satAxes;for(let i=1;i<4;i++){let a=c[i],o=u[i];if(n.setFromPoints(o,t.points),a.isSeparated(n)||(l.copy(s).cross(o),n.setFromPoints(l,e.points),r.setFromPoints(l,t.points),n.isSeparated(r)))return!1}let d=t.satBounds,f=t.satAxes;for(let i=1;i<4;i++){let a=d[i],o=f[i];if(n.setFromPoints(o,e.points),a.isSeparated(n)||(l.crossVectors(s,o),n.setFromPoints(l,e.points),r.setFromPoints(l,t.points),n.isSeparated(r)))return!1}return i&&(o||console.warn(`ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.`),i.start.set(0,0,0),i.end.set(0,0,0)),!0}function g(e,t,n,r,i,a,o,s,c,l,u){let d=o/(o-s);l.x=r+(i-r)*d,u.start.subVectors(t,e).multiplyScalar(d).add(e),d=o/(o-c),l.y=r+(a-r)*d,u.end.subVectors(n,e).multiplyScalar(d).add(e)}function _(e,t,n,r,i,a,o,s,c,l,u){if(i>0)g(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else if(a>0)g(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(s*c>0||o!=0)g(e.a,e.b,e.c,t,n,r,o,s,c,l,u);else if(s!=0)g(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(c!=0)g(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else return!0;return!1}function v(e,t,n,r){let i=t.degenerateSegment,o=e.plane.distanceToPoint(i.start),s=e.plane.distanceToPoint(i.end);return H(o)?H(s)?h(e,t,n,r):(n&&(n.start.copy(i.start),n.end.copy(i.start)),e.containsPoint(i.start)):H(s)?(n&&(n.start.copy(i.end),n.end.copy(i.end)),e.containsPoint(i.end)):e.plane.intersectLine(i,a)!=null&&(n&&(n.start.copy(a),n.end.copy(a)),e.containsPoint(a))}function y(e,t,n){let r=t.a;return H(e.plane.distanceToPoint(r))&&e.containsPoint(r)?(n&&(n.start.copy(r),n.end.copy(r)),!0):!1}function b(e,t,n){let r=e.degenerateSegment,i=t.a;return r.closestPointToPoint(i,!0,a),i.distanceToSquared(a)<Tt&&(n&&(n.start.copy(i),n.end.copy(i)),!0)}function x(e,t,n,r){if(e.isDegenerateIntoSegment){if(t.isDegenerateIntoSegment){let r=e.degenerateSegment,i=t.degenerateSegment,c=o,l=s;r.delta(c),i.delta(l);let u=a.subVectors(i.start,r.start),d=c.x*l.y-c.y*l.x;if(H(d))return!1;let f=(u.x*l.y-u.y*l.x)/d,p=-(c.x*u.y-c.y*u.x)/d;return f<0||f>1||p<0||p>1?!1:H(r.start.z+c.z*f-(i.start.z+l.z*p))?(n&&(n.start.copy(r.start).addScaledVector(c,f),n.end.copy(r.start).addScaledVector(c,f)),!0):!1}return t.isDegenerateIntoPoint?b(e,t,n):v(t,e,n,r)}if(e.isDegenerateIntoPoint)return t.isDegenerateIntoPoint?t.a.distanceToSquared(e.a)<Tt&&(n&&(n.start.copy(e.a),n.end.copy(e.a)),!0):t.isDegenerateIntoSegment?b(t,e,n):y(t,e,n);if(t.isDegenerateIntoPoint)return y(e,t,n);if(t.isDegenerateIntoSegment)return v(e,t,n,r)}return function(t,n=null,r=!1){this.needsUpdate&&this.update(),t.isExtendedTriangle?t.needsUpdate&&t.update():(e.copy(t),e.update(),t=e);let i=x(this,t,n,r);if(i!==void 0)return i;let a=this.plane,c=t.plane,l=c.distanceToPoint(this.a),g=c.distanceToPoint(this.b),v=c.distanceToPoint(this.c);H(l)&&(l=0),H(g)&&(g=0),H(v)&&(v=0);let y=l*g,b=l*v;if(y>0&&b>0)return!1;let S=a.distanceToPoint(t.a),C=a.distanceToPoint(t.b),w=a.distanceToPoint(t.c);H(S)&&(S=0),H(C)&&(C=0),H(w)&&(w=0);let T=S*C,E=S*w;if(T>0&&E>0)return!1;o.copy(a.normal),s.copy(c.normal);let ee=o.cross(s),te=0,ne=Math.abs(ee.x),re=Math.abs(ee.y);re>ne&&(ne=re,te=1),Math.abs(ee.z)>ne&&(te=2);let ie=wt[te],ae=this.a[ie],oe=this.b[ie],se=this.c[ie],ce=t.a[ie],le=t.b[ie],ue=t.c[ie];if(_(this,ae,oe,se,y,b,l,g,v,p,u)||_(t,ce,le,ue,T,E,S,C,w,m,d))return h(this,t,n,r);if(p.y<p.x){let e=p.y;p.y=p.x,p.x=e,f.copy(u.start),u.start.copy(u.end),u.end.copy(f)}if(m.y<m.x){let e=m.y;m.y=m.x,m.x=e,f.copy(d.start),d.start.copy(d.end),d.end.copy(f)}return p.y<m.x||m.y<p.x?!1:(n&&(m.x>p.x?n.start.copy(d.start):n.start.copy(u.start),m.y<p.y?n.end.copy(d.end):n.end.copy(u.end)),!0)}})(),U.prototype.distanceToPoint=(function(){let e=new c;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),U.prototype.distanceToTriangle=(function(){let e=new c,n=new c,r=[`a`,`b`,`c`],i=new t,a=new t;return function(t,o=null,s=null){let c=o||s?i:null;if(this.intersectsTriangle(t,c,!0))return(o||s)&&(o&&c.getCenter(o),s&&c.getCenter(s)),0;let l=1/0;for(let n=0;n<3;n++){let i,a=r[n],c=t[a];this.closestPointToPoint(c,e),i=c.distanceToSquared(e),i<l&&(l=i,o&&o.copy(e),s&&s.copy(c));let u=this[a];t.closestPointToPoint(u,e),i=u.distanceToSquared(e),i<l&&(l=i,o&&o.copy(u),s&&s.copy(e))}for(let c=0;c<3;c++){let u=r[c],d=r[(c+1)%3];i.set(this[u],this[d]);for(let c=0;c<3;c++){let u=r[c],d=r[(c+1)%3];a.set(t[u],t[d]),St(i,a,e,n);let f=e.distanceToSquared(n);f<l&&(l=f,o&&o.copy(e),s&&s.copy(n))}}return Math.sqrt(l)}})();var W=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new c,this.max=new c,this.matrix=new r,this.invMatrix=new r,this.points=Array(8).fill().map(()=>new c),this.satAxes=[,,,].fill().map(()=>new c),this.satBounds=[,,,].fill().map(()=>new B),this.alignedSatBounds=[,,,].fill().map(()=>new B),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};W.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,r=this.points;for(let i=0;i<=1;i++)for(let a=0;a<=1;a++)for(let o=0;o<=1;o++){let s=r[1*i|2*a|4*o];s.x=i?n.x:t.x,s.y=a?n.y:t.y,s.z=o?n.z:t.z,s.applyMatrix4(e)}let i=this.satBounds,a=this.satAxes,o=r[0];for(let e=0;e<3;e++){let t=a[e],n=i[e],s=r[1<<e];t.subVectors(o,s),n.setFromPoints(t,r)}let s=this.alignedSatBounds;s[0].setFromPointsField(r,`x`),s[1].setFromPointsField(r,`y`),s[2].setFromPointsField(r,`z`),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})(),W.prototype.intersectsBox=(function(){let e=new B;return function(t){this.needsUpdate&&this.update();let n=t.min,r=t.max,i=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(e.min=n.x,e.max=r.x,o[0].isSeparated(e)||(e.min=n.y,e.max=r.y,o[1].isSeparated(e))||(e.min=n.z,e.max=r.z,o[2].isSeparated(e)))return!1;for(let n=0;n<3;n++){let r=a[n],o=i[n];if(e.setFromBox(r,t),o.isSeparated(e))return!1}return!0}})(),W.prototype.intersectsTriangle=(function(){let e=new U,t=[,,,],n=new B,r=new B,i=new c;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(e.copy(a),e.update(),a=e);let o=this.satBounds,s=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let e=0;e<3;e++){let r=o[e],i=s[e];if(n.setFromPoints(i,t),r.isSeparated(n))return!1}let c=a.satBounds,l=a.satAxes,u=this.points;for(let e=0;e<3;e++){let t=c[e],r=l[e];if(n.setFromPoints(r,u),t.isSeparated(n))return!1}for(let e=0;e<3;e++){let a=s[e];for(let e=0;e<4;e++){let o=l[e];if(i.crossVectors(a,o),n.setFromPoints(i,t),r.setFromPoints(i,u),n.isSeparated(r))return!1}}return!0}})(),W.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})(),W.prototype.distanceToPoint=(function(){let e=new c;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),W.prototype.distanceToBox=(function(){let e=[`x`,`y`,`z`],n=Array(12).fill().map(()=>new t),r=Array(12).fill().map(()=>new t),i=new c,a=new c;return function(t,o=0,s=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(t))return(s||c)&&(t.getCenter(a),this.closestPointToPoint(a,i),t.closestPointToPoint(i,a),s&&s.copy(i),c&&c.copy(a)),0;let l=o*o,u=t.min,d=t.max,f=this.points,p=1/0;for(let e=0;e<8;e++){let t=f[e];a.copy(t).clamp(u,d);let n=t.distanceToSquared(a);if(n<p&&(p=n,s&&s.copy(t),c&&c.copy(a),n<l))return Math.sqrt(n)}let m=0;for(let t=0;t<3;t++)for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let o=(t+1)%3,s=(t+2)%3,c=i<<o|a<<s,l=1<<t|i<<o|a<<s,p=f[c],h=f[l];n[m].set(p,h);let g=e[t],_=e[o],v=e[s],y=r[m],b=y.start,x=y.end;b[g]=u[g],b[_]=i?u[_]:d[_],b[v]=a?u[v]:d[v],x[g]=d[g],x[_]=i?u[_]:d[_],x[v]=a?u[v]:d[v],m++}for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)for(let n=0;n<=1;n++){a.x=e?d.x:u.x,a.y=t?d.y:u.y,a.z=n?d.z:u.z,this.closestPointToPoint(a,i);let r=a.distanceToSquared(i);if(r<p&&(p=r,s&&s.copy(i),c&&c.copy(a),r<l))return Math.sqrt(r)}for(let e=0;e<12;e++){let t=n[e];for(let e=0;e<12;e++){let n=r[e];St(t,n,i,a);let o=i.distanceToSquared(a);if(o<p&&(p=o,s&&s.copy(i),c&&c.copy(a),o<l))return Math.sqrt(o)}}return Math.sqrt(p)}})();var G=new class extends Ke{constructor(){super(()=>new U)}},Et=new c,Dt=new c;function Ot(e,t,n={},r=0,i=1/0){let a=r*r,o=i*i,s=1/0,c=null;if(e.shapecast({boundsTraverseOrder:e=>(Et.copy(t).clamp(e.min,e.max),Et.distanceToSquared(t)),intersectsBounds:(e,t,n)=>n<s&&n<o,intersectsTriangle:(e,n)=>{e.closestPointToPoint(t,Et);let r=t.distanceToSquared(Et);return r<s&&(Dt.copy(Et),s=r,c=n),r<a}}),s===1/0)return null;let l=Math.sqrt(s);return n.point?n.point.copy(Dt):n.point=Dt.clone(),n.distance=l,n.faceIndex=c,n}var kt=!0,At=new c,jt=new c,Mt=new c,Nt=new i,Pt=new i,Ft=new i,It=new c,Lt=new c,Rt=new c,zt=new c;function Bt(e,t,n,r,i,a,o,s){let c;if(c=a===1?e.intersectTriangle(r,n,t,!0,i):e.intersectTriangle(t,n,r,a!==2,i),c===null)return null;let l=e.origin.distanceTo(i);return l<o||l>s?null:{distance:l,point:i.clone()}}function Vt(e,t,n,r,a,o,s,l,u,d,p){At.fromBufferAttribute(t,o),jt.fromBufferAttribute(t,s),Mt.fromBufferAttribute(t,l);let m=Bt(e,At,jt,Mt,zt,u,d,p);if(m){if(r){Nt.fromBufferAttribute(r,o),Pt.fromBufferAttribute(r,s),Ft.fromBufferAttribute(r,l),m.uv=new i;let e=f.getInterpolation(zt,At,jt,Mt,Nt,Pt,Ft,m.uv);kt||(m.uv=e)}if(a){Nt.fromBufferAttribute(a,o),Pt.fromBufferAttribute(a,s),Ft.fromBufferAttribute(a,l),m.uv1=new i;let e=f.getInterpolation(zt,At,jt,Mt,Nt,Pt,Ft,m.uv1);kt||(m.uv1=e)}if(n){It.fromBufferAttribute(n,o),Lt.fromBufferAttribute(n,s),Rt.fromBufferAttribute(n,l),m.normal=new c;let t=f.getInterpolation(zt,At,jt,Mt,It,Lt,Rt,m.normal);m.normal.dot(e.direction)>0&&m.normal.multiplyScalar(-1),kt||(m.normal=t)}let t={a:o,b:s,c:l,normal:new c,materialIndex:0};if(f.getNormal(At,jt,Mt,t.normal),m.face=t,m.faceIndex=o,kt){let e=new c;f.getBarycoord(zt,At,jt,Mt,e),m.barycoord=e}}return m}function Ht(e){return e&&e.isMaterial?e.side:e}function Ut(e,t,n,r,i,a,o){let s=r*3,c=s+0,l=s+1,u=s+2,{index:d,groups:f}=e;e.index&&(c=d.getX(c),l=d.getX(l),u=d.getX(u));let{position:p,normal:m,uv:h,uv1:g}=e.attributes;if(Array.isArray(t)){let e=r*3;for(let s=0,d=f.length;s<d;s++){let{start:d,count:_,materialIndex:v}=f[s];if(e>=d&&e<d+_){let e=Ht(t[v]),s=Vt(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=v,i)i.push(s);else return s}}}}else{let e=Ht(t),s=Vt(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=0,i)i.push(s);else return s}}return null}function K(e,t,n,r){let i=e.a,a=e.b,o=e.c,s=t,c=t+1,l=t+2;n&&(s=n.getX(s),c=n.getX(c),l=n.getX(l)),i.x=r.getX(s),i.y=r.getY(s),i.z=r.getZ(s),a.x=r.getX(c),a.y=r.getY(c),a.z=r.getZ(c),o.x=r.getX(l),o.y=r.getY(l),o.z=r.getZ(l)}var Wt=new c,Gt=new c,Kt=new c,qt=new i,Jt=new i,Yt=new i;function Xt(e,t,n,r){let a=t.getIndex().array,o=t.getAttribute(`position`),s=t.getAttribute(`uv`),l=a[n*3],u=a[n*3+1],d=a[n*3+2];Wt.fromBufferAttribute(o,l),Gt.fromBufferAttribute(o,u),Kt.fromBufferAttribute(o,d);let p=0,m=t.groups,h=n*3;for(let e=0,t=m.length;e<t;e++){let t=m[e],{start:n,count:r}=t;if(h>=n&&h<n+r){p=t.materialIndex;break}}let g=r&&r.barycoord?r.barycoord:new c;f.getBarycoord(e,Wt,Gt,Kt,g);let _=null;return s&&(qt.fromBufferAttribute(s,l),Jt.fromBufferAttribute(s,u),Yt.fromBufferAttribute(s,d),_=r&&r.uv?r.uv:new i,f.getInterpolation(e,Wt,Gt,Kt,qt,Jt,Yt,_)),r?(r.face||={},r.face.a=l,r.face.b=u,r.face.c=d,r.face.materialIndex=p,r.face.normal||(r.face.normal=new c),f.getNormal(Wt,Gt,Kt,r.face.normal),_&&(r.uv=_),r.barycoord=g,r):{face:{a:l,b:u,c:d,materialIndex:p,normal:f.getNormal(Wt,Gt,Kt,new c)},uv:_,barycoord:g}}function Zt(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,l=r+i;e<l;e++)Ut(c,t,n,e,a,o,s)}function Qt(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,c=r+i;e<c;e++){let r;r=Ut(s,t,n,e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function $t(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let n=e,s=t+e;n<s;n++){let e;if(e=n,K(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function en(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(e,n,a=!1){let l=e*2;if(O(l,s)){let t=k(e,o),n=A(l,s),a=1/0,u=1/0,d=1/0,f=-1/0,p=-1/0,m=-1/0;for(let e=3*t,o=3*(t+n);e<o;e++){let t=r[e],n=i.getX(t),o=i.getY(t),s=i.getZ(t);n<a&&(a=n),n>f&&(f=n),o<u&&(u=o),o>p&&(p=o),s<d&&(d=s),s>m&&(m=s)}return c[e+0]!==a||c[e+1]!==u||c[e+2]!==d||c[e+3]!==f||c[e+4]!==p||c[e+5]!==m?(c[e+0]=a,c[e+1]=u,c[e+2]=d,c[e+3]=f,c[e+4]=p,c[e+5]=m,!0):!1}{let r=j(e),i=M(e,o),s=a,l=!1,u=!1;if(t){if(!s){let e=r/8+n/32,a=i/8+n/32;l=t.has(e),u=t.has(a),s=!l&&!u}}else l=!0,u=!0;let f=s||l,p=s||u,m=!1;f&&(m=d(r,n,s));let h=!1;p&&(h=d(i,n,s));let g=m||h;if(g)for(let t=0;t<3;t++){let n=r+t,a=i+t,o=c[n],s=c[n+3],l=c[a],u=c[a+3];c[e+t]=o<l?o:l,c[e+t+3]=s>u?s:u}return g}}}function q(e,t,n,r,i){let a,o,s,c,l,u,d=1/n.direction.x,f=1/n.direction.y,p=1/n.direction.z,m=n.origin.x,h=n.origin.y,g=n.origin.z,_=t[e],v=t[e+3],y=t[e+1],b=t[e+3+1],x=t[e+2],S=t[e+3+2];return d>=0?(a=(_-m)*d,o=(v-m)*d):(a=(v-m)*d,o=(_-m)*d),f>=0?(s=(y-h)*f,c=(b-h)*f):(s=(b-h)*f,c=(y-h)*f),a>c||s>o||((s>a||isNaN(a))&&(a=s),(c<o||isNaN(o))&&(o=c),p>=0?(l=(x-g)*p,u=(S-g)*p):(l=(S-g)*p,u=(x-g)*p),a>u||l>o)?!1:((l>a||a!==a)&&(a=l),(u<o||o!==o)&&(o=u),a<=i&&o>=r)}function tn(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,u=r+i;e<u;e++)Ut(c,t,n,l?l[e]:e,a,o,s)}function nn(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,d=r+i;e<d;e++){let r;r=Ut(s,t,n,c?c[e]:e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function rn(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let s=e,u=t+e;s<u;s++){let e;if(e=n.resolveTriangleIndex(s),K(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function an(e,t,n,r,i,a,o){L.setBuffer(e._roots[t]),q(0,L.float32Array,r,a,o)&&on(0,e,n,r,i,a,o),L.clearBuffer()}function on(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=L,u=e*2;if(O(u,c))Zt(t,n,r,k(e,l),A(u,c),i,a,o);else{let c=j(e);q(c,s,r,a,o)&&on(c,t,n,r,i,a,o);let u=M(e,l);q(u,s,r,a,o)&&on(u,t,n,r,i,a,o)}}var sn=[`x`,`y`,`z`];function cn(e,t,n,r,i,a){L.setBuffer(e._roots[t]);let o=null;return q(0,L.float32Array,r,i,a)&&(o=ln(0,e,n,r,i,a)),L.clearBuffer(),o}function ln(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=L,l=e*2;if(O(l,s))return Qt(t,n,r,k(e,c),A(l,s),i,a);{let s=Oe(e,c),l=sn[s],u=r.direction[l]>=0,d,f;u?(d=j(e),f=M(e,c)):(d=M(e,c),f=j(e));let p=q(d,o,r,i,a)?ln(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=q(f,o,r,i,a)?ln(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var un=new E,dn=new U,fn=new U,pn=new r,mn=new W,hn=new W;function gn(e,t,n,r){L.setBuffer(e._roots[t]);let i=_n(0,e,n,r);return L.clearBuffer(),i}function _n(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=L,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),mn.set(n.boundingBox.min,n.boundingBox.max,r),i=mn),O(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=k(e,s),m=A(c,o);if(pn.copy(r).invert(),n.boundsTree)return D(N(e),a,hn),hn.matrix.copy(pn),hn.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>hn.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let t=p*3,n=(m+p)*3;t<n;t+=3)if(K(fn,t,l,u),fn.needsUpdate=!0,e.intersectsTriangle(fn))return!0;return!1}});{let e=pt(n);for(let t=p*3,n=(m+p)*3;t<n;t+=3){K(dn,t,l,u),dn.a.applyMatrix4(pn),dn.b.applyMatrix4(pn),dn.c.applyMatrix4(pn),dn.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(K(fn,t,d,f),fn.needsUpdate=!0,dn.intersectsTriangle(fn))return!0}}}else{let o=j(e),c=M(e,s);return D(N(o),a,un),!!(i.intersectsBox(un)&&_n(o,t,n,r,i)||(D(N(c),a,un),i.intersectsBox(un)&&_n(c,t,n,r,i)))}}var vn=new r,yn=new W,bn=new W,xn=new c,Sn=new c,Cn=new c,wn=new c;function Tn(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),yn.set(t.boundingBox.min,t.boundingBox.max,n),yn.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=G.getPrimitive(),p=G.getPrimitive(),m=xn,h=Sn,g=null,_=null;i&&(g=Cn,_=wn);let v=1/0,y=null,b=null;return vn.copy(n).invert(),bn.matrix.copy(vn),e.shapecast({boundsTraverseOrder:e=>yn.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(bn.min.copy(e.min),bn.max.copy(e.max),bn.needsUpdate=!0),!0),intersectsRange:(e,r)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:e=>bn.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,i)=>{for(let o=t,s=t+i;o<s;o++){K(p,3*o,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=e,n=e+r;t<n;t++){K(f,3*t,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=t,b=o),e<a)return!0}}}});{let i=pt(t);for(let t=0,o=i;t<o;t++){K(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=e,i=e+r;n<i;n++){K(f,3*n,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=n,b=t),e<a)return!0}}}}}),G.releasePrimitive(f),G.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(vn),h.applyMatrix4(vn),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function En(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(n,a,l=!1){let u=n*2;if(O(u,s)){let t=k(n,o),a=A(u,s),l=1/0,d=1/0,f=1/0,p=-1/0,m=-1/0,h=-1/0;for(let n=t,o=t+a;n<o;n++){let t=3*e.resolveTriangleIndex(n);for(let e=0;e<3;e++){let n=t+e;n=r?r[n]:n;let a=i.getX(n),o=i.getY(n),s=i.getZ(n);a<l&&(l=a),a>p&&(p=a),o<d&&(d=o),o>m&&(m=o),s<f&&(f=s),s>h&&(h=s)}}return c[n+0]!==l||c[n+1]!==d||c[n+2]!==f||c[n+3]!==p||c[n+4]!==m||c[n+5]!==h?(c[n+0]=l,c[n+1]=d,c[n+2]=f,c[n+3]=p,c[n+4]=m,c[n+5]=h,!0):!1}{let e=j(n),r=M(n,o),i=l,s=!1,u=!1;if(t){if(!i){let n=e/8+a/32,o=r/8+a/32;s=t.has(n),u=t.has(o),i=!s&&!u}}else s=!0,u=!0;let f=i||s,p=i||u,m=!1;f&&(m=d(e,a,i));let h=!1;p&&(h=d(r,a,i));let g=m||h;if(g)for(let t=0;t<3;t++){let i=e+t,a=r+t,o=c[i],s=c[i+3],l=c[a],u=c[a+3];c[n+t]=o<l?o:l,c[n+t+3]=s>u?s:u}return g}}}function Dn(e,t,n,r,i,a,o){L.setBuffer(e._roots[t]),q(0,L.float32Array,r,a,o)&&On(0,e,n,r,i,a,o),L.clearBuffer()}function On(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=L,u=e*2;if(O(u,c))tn(t,n,r,k(e,l),A(u,c),i,a,o);else{let c=j(e);q(c,s,r,a,o)&&On(c,t,n,r,i,a,o);let u=M(e,l);q(u,s,r,a,o)&&On(u,t,n,r,i,a,o)}}var kn=[`x`,`y`,`z`];function An(e,t,n,r,i,a){L.setBuffer(e._roots[t]);let o=null;return q(0,L.float32Array,r,i,a)&&(o=jn(0,e,n,r,i,a)),L.clearBuffer(),o}function jn(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=L,l=e*2;if(O(l,s))return nn(t,n,r,k(e,c),A(l,s),i,a);{let s=Oe(e,c),l=kn[s],u=r.direction[l]>=0,d,f;u?(d=j(e),f=M(e,c)):(d=M(e,c),f=j(e));let p=q(d,o,r,i,a)?jn(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=q(f,o,r,i,a)?jn(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var Mn=new E,Nn=new U,Pn=new U,Fn=new r,In=new W,Ln=new W;function Rn(e,t,n,r){L.setBuffer(e._roots[t]);let i=zn(0,e,n,r);return L.clearBuffer(),i}function zn(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=L,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),In.set(n.boundingBox.min,n.boundingBox.max,r),i=In),O(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=k(e,s),m=A(c,o);if(Fn.copy(r).invert(),n.boundsTree)return D(N(e),a,Ln),Ln.matrix.copy(Fn),Ln.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>Ln.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let n=p,r=m+p;n<r;n++)if(K(Pn,3*t.resolveTriangleIndex(n),l,u),Pn.needsUpdate=!0,e.intersectsTriangle(Pn))return!0;return!1}});{let e=pt(n);for(let n=p,r=m+p;n<r;n++){K(Nn,3*t.resolveTriangleIndex(n),l,u),Nn.a.applyMatrix4(Fn),Nn.b.applyMatrix4(Fn),Nn.c.applyMatrix4(Fn),Nn.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(K(Pn,t,d,f),Pn.needsUpdate=!0,Nn.intersectsTriangle(Pn))return!0}}}else{let o=j(e),c=M(e,s);return D(N(o),a,Mn),!!(i.intersectsBox(Mn)&&zn(o,t,n,r,i)||(D(N(c),a,Mn),i.intersectsBox(Mn)&&zn(c,t,n,r,i)))}}var Bn=new r,Vn=new W,Hn=new W,Un=new c,Wn=new c,Gn=new c,Kn=new c;function qn(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Vn.set(t.boundingBox.min,t.boundingBox.max,n),Vn.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=G.getPrimitive(),p=G.getPrimitive(),m=Un,h=Wn,g=null,_=null;i&&(g=Gn,_=Kn);let v=1/0,y=null,b=null;return Bn.copy(n).invert(),Hn.matrix.copy(Bn),e.shapecast({boundsTraverseOrder:e=>Vn.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(Hn.min.copy(e.min),Hn.max.copy(e.max),Hn.needsUpdate=!0),!0),intersectsRange:(r,i)=>{if(t.boundsTree){let s=t.boundsTree;return s.shapecast({boundsTraverseOrder:e=>Hn.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,o)=>{for(let x=t,S=t+o;x<S;x++){let t=s.resolveTriangleIndex(x);K(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=r,n=r+i;t<n;t++){let n=e.resolveTriangleIndex(t);K(f,3*n,l,c),f.needsUpdate=!0;let r=f.distanceToTriangle(p,m,g);if(r<v&&(h.copy(m),_&&_.copy(g),v=r,y=t,b=x),r<a)return!0}}}})}{let o=pt(t);for(let t=0,s=o;t<s;t++){K(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=r,o=r+i;n<o;n++){let r=e.resolveTriangleIndex(n);K(f,3*r,l,c),f.needsUpdate=!0;let i=f.distanceToTriangle(p,m,g);if(i<v&&(h.copy(m),_&&_.copy(g),v=i,y=n,b=t),i<a)return!0}}}}}),G.releasePrimitive(f),G.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(Bn),h.applyMatrix4(Bn),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function Jn(e,t,n){return e===null?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(n.ray.origin),e.object=t,e)}var Yn=new W,Xn=new l,Zn=new c,Qn=new r,$n=new c,er=[`getX`,`getY`,`getZ`],tr=class e extends bt{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,r=e._roots,i=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=r.map(e=>e.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=i?i.slice():null):(o.roots=r,o.index=a?a.array:null,o.indirectBuffer=i),o}static deserialize(t,n,r={}){r={setIndex:!0,indirect:!!t.indirectBuffer,...r};let{index:i,roots:a,indirectBuffer:o}=t;t.version||(console.warn(`MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data.`),c(a));let s=new e(n,{...r,[Ce]:!0});if(s._roots=a,s._indirectBuffer=o||null,r.setIndex){let e=n.getIndex();if(e===null){let e=new m(t.index,1,!1);n.setIndex(e)}else e.array!==i&&(e.array.set(i),e.needsUpdate=!0)}return s;function c(e){for(let t=0;t<e.length;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n);for(let e=0,t=n.byteLength/32;e<t;e++){let t=8*e;O(2*t,i)||(r[t+6]=r[t+6]/8-e)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn(`MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.`),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=(i?i[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]);for(let e=0;e<3;e++){let r=a[er[e]](c),i=a[er[e]](l),o=a[er[e]](u),s=r;i<s&&(s=i),o<s&&(s=o);let d=r;i>d&&(d=i),o>d&&(d=o),t[n+e]=s,t[n+e+3]=d}return t}computePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw Error(`MeshBVH: compute triangle bounds range is invalid.`);let c=a.array,l=a.offset||0,u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);let d=[`getX`,`getY`,`getZ`],f=n.offset;for(let r=e,p=e+t;r<p;r++){let e=(i?i[r]:r)*3,t=(r-f)*6,p=e+0,m=e+1,h=e+2;o&&(p=o[p],m=o[m],h=o[h]),s||(p=p*u+l,m=m*u+l,h=h*u+l);for(let e=0;e<3;e++){let r,i,o;s?(r=a[d[e]](p),i=a[d[e]](m),o=a[d[e]](h)):(r=c[p+e],i=c[m+e],o=c[h+e]);let l=r;i<l&&(l=i),o<l&&(l=o);let u=r;i>u&&(u=i),o>u&&(u=o);let f=(u-l)/2,g=e*2;n[t+g+0]=l+f,n[t+g+1]=f+(Math.abs(l)+f)*Se}}return n}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;Qn.copy(e.matrixWorld).invert(),Xn.copy(t.ray).applyMatrix4(Qn),$n.setFromMatrixScale(e.matrixWorld),Zn.copy(Xn.direction).multiply($n);let i=Zn.length(),a=t.near/i,o=t.far/i;if(t.firstHitOnly===!0){let i=this.raycastFirst(Xn,r,a,o);i=Jn(i,e,t),i&&n.push(i)}else{let i=this.raycast(Xn,r,a,o);for(let r=0,a=i.length;r<a;r++){let a=Jn(i[r],e,t);a&&n.push(a)}}return n}refit(e=null){return(this.indirect?En:en)(this,e)}raycast(e,t=0,n=0,r=1/0){let i=this._roots,a=[],o=this.indirect?Dn:an;for(let s=0,c=i.length;s<c;s++)o(this,s,t,e,a,n,r);return a}raycastFirst(e,t=0,n=0,r=1/0){let i=this._roots,a=null,o=this.indirect?An:cn;for(let s=0,c=i.length;s<c;s++){let i=o(this,s,t,e,n,r);i!=null&&(a==null||i.distance<a.distance)&&(a=i)}return a}intersectsGeometry(e,t){let n=!1,r=this._roots,i=this.indirect?Rn:gn;for(let a=0,o=r.length;a<o&&(n=i(this,a,e,t),!n);a++);return n}shapecast(e){let t=G.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?rn:$t});return G.releasePrimitive(t),n}bvhcast(t,n,r){let{intersectsRanges:i,intersectsTriangles:a}=r,o=G.getPrimitive(),s=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?e=>{let t=this.resolveTriangleIndex(e);K(o,t*3,s,c)}:e=>{K(o,e*3,s,c)},u=G.getPrimitive(),d=t.geometry.index,f=t.geometry.attributes.position,p=t.indirect?e=>{let n=t.resolveTriangleIndex(e);K(u,n*3,d,f)}:e=>{K(u,e*3,d,f)};if(a){if(!(t instanceof e))throw Error(`MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.`);let r=(e,t,r,i,s,c,d,f)=>{for(let m=r,h=r+i;m<h;m++){p(m),u.a.applyMatrix4(n),u.b.applyMatrix4(n),u.c.applyMatrix4(n),u.needsUpdate=!0;for(let n=e,r=e+t;n<r;n++)if(l(n),o.needsUpdate=!0,a(o,u,n,m,s,c,d,f))return!0}return!1};if(i){let e=i;i=function(t,n,i,a,o,s,c,l){return e(t,n,i,a,o,s,c,l)?!0:r(t,n,i,a,o,s,c,l)}}else i=r}return super.bvhcast(t,n,{intersectsRanges:i})}intersectsBox(e,t){return Yn.set(e.min,e.max,t),Yn.needsUpdate=!0,this.shapecast({intersectsBounds:e=>Yn.intersectsBox(e),intersectsTriangle:e=>Yn.intersectsTriangle(e)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},i=0,a=1/0){return(this.indirect?qn:Tn)(this,e,t,n,r,i,a)}closestPointToPoint(e,t={},n=0,r=1/0){return Ot(this,e,t,n,r)}},nr=new r,rr=new l,ir=new Ke(()=>new t),ar=new c,or=new c,sr=new E,cr=new c,lr=[`getX`,`getY`,`getZ`],ur=class extends bt{get primitiveStride(){return 2}writePrimitiveBounds(e,t,n){let r=this._indirectBuffer,{geometry:i,primitiveStride:a}=this,o=i.attributes.position,s=i.index,c=s?s.count:o.count,l=(r?r[e]:e)*a,u=(l+1)%c;s&&(l=s.getX(l),u=s.getX(u));for(let e=0;e<3;e++){let r=o[lr[e]](l),i=o[lr[e]](u),a=r<i?r:i,s=r>i?r:i;t[n+e]=a,t[n+e+3]=s}return t}shapecast(e){let t=ir.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsLine,scratchPrimitive:t,iterate:pr});return ir.releasePrimitive(t),n}raycastObject3D(e,t,n=[]){let{matrixWorld:r}=e,{firstHitOnly:i}=t;nr.copy(r).invert(),rr.copy(t.ray).applyMatrix4(nr);let a=t.params.Line.threshold/((e.scale.x+e.scale.y+e.scale.z)/3),o=a*a,s=null,c=1/0;return this.shapecast({boundsTraverseOrder:e=>e.distanceToPoint(rr.origin),intersectsBounds:e=>{if(sr.copy(e).expandByScalar(a),i){if(!rr.intersectBox(sr,cr))return 0;let e;return sr.containsPoint(rr.origin)?e=0:(cr.applyMatrix4(r),e=t.ray.origin.distanceTo(cr)),+(e<c)}return+!!rr.intersectsBox(sr)},intersectsLine:(a,l)=>{if(rr.distanceSqToSegment(a.start,a.end,ar,or)>o)return;ar.applyMatrix4(e.matrixWorld);let u=t.ray.origin.distanceTo(ar);u<t.near||u>t.far||i&&u>=c||(c=u,l=this.resolvePrimitiveIndex(l),s={distance:u,point:or.clone().applyMatrix4(r),index:l*this.primitiveStride,face:null,faceIndex:null,barycoord:null,object:e},i||n.push(s))}}),i&&s&&n.push(s),n}},dr=class extends ur{get primitiveStride(){return 1}constructor(e,t={}){t={...t,indirect:!0},super(e,t)}},fr=class extends dr{getRootRanges(...e){let t=super.getRootRanges(...e);return t.forEach(e=>e.count--),t}};function pr(e,t,n,r,i,a,o){let{geometry:s,primitiveStride:c}=n,{index:l}=s,u=s.attributes.position,d=l?l.count:u.count;for(let s=e,f=t+e;s<f;s++){let e=n.resolvePrimitiveIndex(s)*c,t=(e+1)%d;if(l&&(e=l.getX(e),t=l.getX(t)),o.start.fromBufferAttribute(u,e),o.end.fromBufferAttribute(u,t),r(o,s,i,a))return!0}return!1}var mr=new r,hr=new l,gr=new Ke(()=>new c),_r=new E,vr=new c,yr=class extends bt{get primitiveStride(){return 1}writePrimitiveBounds(e,t,n){let r=this._indirectBuffer,{geometry:i}=this,a=i.attributes.position,o=i.index,s=r?r[e]:e;o&&(s=o.getX(s));let c=a.getX(s),l=a.getY(s),u=a.getZ(s);return t[n+0]=c,t[n+1]=l,t[n+2]=u,t[n+3]=c,t[n+4]=l,t[n+5]=u,t}shapecast(e){let t=gr.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsPoint,scratchPrimitive:t,iterate:br});return gr.releasePrimitive(t),n}raycastObject3D(e,t,n=[]){let{geometry:r}=this,{matrixWorld:i}=e,{firstHitOnly:a}=t;mr.copy(i).invert(),hr.copy(t.ray).applyMatrix4(mr);let o=t.params.Points.threshold/((e.scale.x+e.scale.y+e.scale.z)/3),s=o*o,l=null,u=1/0;return this.shapecast({boundsTraverseOrder:e=>e.distanceToPoint(hr.origin),intersectsBounds:e=>{if(_r.copy(e).expandByScalar(o),a){if(!hr.intersectBox(_r,vr))return 0;let e;return _r.containsPoint(hr.origin)?e=0:(vr.applyMatrix4(i),e=t.ray.origin.distanceTo(vr)),+(e<u)}return+!!hr.intersectsBox(_r)},intersectsPoint:(o,d)=>{let f=hr.distanceSqToPoint(o);if(f<s){let s=new c;hr.closestPointToPoint(o,s),s.applyMatrix4(i);let p=t.ray.origin.distanceTo(s);if(p<t.near||p>t.far||a&&p>=u)return;u=p,d=this.resolvePrimitiveIndex(d),l={distance:p,distanceToRay:Math.sqrt(f),point:s,index:r.index?r.index.getX(d):d,face:null,faceIndex:null,barycoord:null,object:e},a||n.push(l)}}}),a&&l&&n.push(l),n}};function br(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let s=e,u=t+e;s<u;s++){let e=n.resolvePrimitiveIndex(s),t=c?c.array[e]:e;if(o.fromBufferAttribute(l,t),r(o,s,i,a))return!0}return!1}var J=new n,Y=new r,xr=new r,Sr=new E,Cr=new de,X=new c,wr=new l,Z=new le,Tr={},Er=class extends ut{constructor(e,t={}){t={precise:!1,includeInstances:!0,matrixWorld:Array.isArray(e)?new r:e.matrixWorld,targetLeafSize:1,...t},super();let n=new Set;kr(e,n);let i=Array.from(n),a=Math.ceil(Math.log2(i.length)),o=(1<<a)-1;this.objects=i,this.idBits=a,this.idMask=o,this.primitiveBuffer=null,this.primitiveBufferStride=1,this.precise=t.precise,this.includeInstances=t.includeInstances,this.matrixWorld=t.matrixWorld,this.init(t)}getObjectFromId(e){let{idMask:t,objects:n}=this;return n[Dr(e,t)]}getInstanceFromId(e){let{idMask:t,idBits:n}=this;return Or(e,n,t)}init(e){let{objects:t,idBits:n,matrixWorld:r}=this;xr.copy(r).invert(),this.primitiveBuffer=new Uint32Array(this._countPrimitives(t)),this._fillPrimitiveBuffer(t,n,this.primitiveBuffer),super.init(e)}refit(...e){xr.copy(this.matrixWorld).invert(),super.refit(...e)}writePrimitiveBounds(e,t,n){let{primitiveBuffer:r}=this;this._getPrimitiveBoundingBox(r[e],xr,Sr);let{min:i,max:a}=Sr;t[n+0]=i.x,t[n+1]=i.y,t[n+2]=i.z,t[n+3]=a.x,t[n+4]=a.y,t[n+5]=a.z}getRootRanges(){return[{offset:0,count:this.primitiveBuffer.length}]}shapecast(e){return super.shapecast({...e,intersectsPrimitive:e.intersectsObject,scratchPrimitive:null,iterate:jr})}raycast(e,t=[]){let{matrixWorld:n,includeInstances:r}=this,{firstHitOnly:i}=e,a=[];xr.copy(n).invert(),wr.copy(e.ray).applyMatrix4(xr);let o=1/0,s=null;return this.shapecast({boundsTraverseOrder:e=>e.distanceToPoint(wr.origin),intersectsBounds:t=>{if(i){if(!wr.intersectBox(t,X))return 0;let r;return t.containsPoint(wr.origin)?r=0:(X.applyMatrix4(n),r=e.ray.origin.distanceTo(X)),+(r<o)}return+!!wr.intersectsBox(t)},intersectsObject(n,c){if(n.visible){if(a.length=0,n.isInstancedMesh&&r)Z.geometry=n.geometry,Z.material=n.material,n.getMatrixAt(c,Z.matrixWorld),Z.matrixWorld.premultiply(n.matrixWorld),Z.raycast(e,a),a.forEach(e=>{e.object=n,e.instanceId=c}),Z.material=null;else if(n.isBatchedMesh&&r){if(!n.getVisibleAt(c))return;let t=n.getGeometryIdAt(c),r=n.getGeometryRangeAt(t,Tr);J.index=n.geometry.index,J.attributes=n.geometry.attributes,J.setDrawRange(r.start,r.count),Z.geometry=J,Z.material=n.material,n.getMatrixAt(c,Z.matrixWorld),Z.matrixWorld.premultiply(n.matrixWorld),Z.raycast(e,a),a.forEach(e=>{e.object=n,e.batchId=c}),Z.material=null,J.index=null,J.attributes=null,J.setDrawRange(0,1/0)}else n.raycast(e,a);i?a.forEach(e=>{e.distance<o&&(o=e.distance,s=e)}):t.push(...a)}}}),i&&s&&t.push(s),t}_getPrimitiveBoundingBox(e,t,n){let{objects:r,idMask:i,idBits:a,precise:o,includeInstances:s}=this,c=Dr(e,i),l=Or(e,a,i),u=r[c];if(!s&&(u.isInstancedMesh||u.isBatchedMesh))u.boundingBox||u.computeBoundingBox(),u.boundingSphere||u.computeBoundingSphere(),Y.copy(u.matrixWorld).premultiply(t),Cr.copy(u.boundingSphere).applyMatrix4(Y),n.copy(u.boundingBox).applyMatrix4(Y),Mr(n,Cr);else if(o){if(u.isInstancedMesh)u.getMatrixAt(l,Y),Y.premultiply(u.matrixWorld).premultiply(t),Ar(u.geometry,Y,n);else if(u.isBatchedMesh){let e=u.getGeometryIdAt(l),r=u.getGeometryRangeAt(e,Tr);J.index=u.geometry.index,J.attributes=u.geometry.attributes,J.setDrawRange(r.start,r.count),u.getMatrixAt(l,Y),Y.premultiply(u.matrixWorld).premultiply(t),Ar(J,Y,n),J.attributes=null}else Y.copy(u.matrixWorld).premultiply(t),n.setFromObject(u,!0).applyMatrix4(t)}else if(u.isInstancedMesh)u.geometry.boundingBox||u.geometry.computeBoundingBox(),u.geometry.boundingSphere||u.geometry.computeBoundingSphere(),u.getMatrixAt(l,Y),Y.premultiply(u.matrixWorld).premultiply(t),Cr.copy(u.geometry.boundingSphere).applyMatrix4(Y),n.copy(u.geometry.boundingBox).applyMatrix4(Y),Mr(n,Cr);else if(u.isBatchedMesh){let e=u.getGeometryIdAt(l);u.getMatrixAt(l,Y),Y.premultiply(u.matrixWorld).premultiply(t),u.getBoundingSphereAt(e,Cr).applyMatrix4(Y),u.getBoundingBoxAt(e,n).applyMatrix4(Y),Mr(n,Cr)}else n.setFromObject(u,!1).applyMatrix4(t)}_countPrimitives(e){let{includeInstances:t}=this,n=0;return e.forEach(e=>{if(e.isInstancedMesh&&t)n+=e.count;else if(e.isBatchedMesh&&t){if(!(`instanceCount`in e))throw Error(`ObjectBVH: Three.js revision >= r169 is required to use BatchedMesh.`);n+=e.instanceCount}else n++}),n}_fillPrimitiveBuffer(e,t,n){let{includeInstances:r}=this,i=0;e.forEach((e,a)=>{if(e.isInstancedMesh&&r){let r=e.count;for(let e=0;e<r;e++)n[i]=e<<t|a,i++}else if(e.isBatchedMesh&&r){let{instanceCount:r,maxInstanceCount:o}=e,s=0,c=0;for(;s<r&&c<o;){try{e.getVisibleAt(c),n[i]=c<<t|a,s++,i++}catch{}c++}}else n[i]=a,i++})}};function Dr(e,t){return e&t}function Or(e,t,n){return(e&~n)>>>t}function kr(e,t=new Set){Array.isArray(e)?e.forEach(e=>kr(e,t)):e.traverse(e=>{(e.isMesh||e.isLine||e.isPoints)&&t.add(e)})}function Ar(e,t,n){n.makeEmpty();let r=e.drawRange,i=e.index,a=e.attributes.position,o=r.start,s=i?i.count:a.count,c=Math.min(s-o,r.count);for(let e=o,r=o+c;e<r;e++){let r=e;i&&(r=i.getX(r)),X.fromBufferAttribute(a,r).applyMatrix4(t),n.expandByPoint(X)}return n}function jr(e,t,n,r,i,a){let{primitiveBuffer:o,objects:s,idMask:c,idBits:l}=n;for(let n=e,u=t+e;n<u;n++){let e=o[n],t=Dr(e,c),u=Or(e,l,c),d=s[t];if(r(d,u,i,a))return!0}return!1}function Mr(e,t){X.copy(t.center).addScalar(-t.radius),e.min.max(X),X.copy(t.center).addScalar(t.radius),e.max.min(X)}var Nr=new c,Pr=new c,Fr=new c,Q=new l,Ir=new r,Lr=new c,Rr=new c,zr=[`x`,`y`,`z`],Br=!0,Vr=new i,Hr=new i,Ur=new i,Wr=new c,Gr=new c,Kr=new c,qr=class extends bt{get primitiveStride(){return 3}constructor(e,t={}){if(!e.isMesh)throw Error(`SkinnedMeshBVH: First argument must be a Mesh.`);super(e.geometry,{...t,[Ce]:!0}),this.mesh=e,t[Ce]||this.init(t)}writePrimitiveBounds(e,t,n){let{mesh:r,geometry:i}=this,a=this._indirectBuffer,o=i.index?i.index.array:null,s=(a?a[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]),r.getVertexPosition(c,Nr),r.getVertexPosition(l,Pr),r.getVertexPosition(u,Fr);for(let e=0;e<3;e++){let r=zr[e],i=Nr[r],a=Pr[r],o=Fr[r],s=i;a<s&&(s=a),o<s&&(s=o);let c=i;a>c&&(c=a),o>c&&(c=o),t[n+e]=s,t[n+e+3]=c}return t}shapecast(e){let t=new U;return super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:Jr})}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;let{matrixWorld:a}=e,{firstHitOnly:o}=t;Ir.copy(a).invert(),Q.copy(t.ray).applyMatrix4(Ir);let s=null,l=1/0;return this.shapecast({boundsTraverseOrder:e=>e.distanceToPoint(Q.origin),intersectsBounds:e=>{if(o){if(!Q.intersectBox(e,Rr))return 0;let n;return e.containsPoint(Q.origin)?n=0:(Rr.applyMatrix4(a),n=t.ray.origin.distanceTo(Rr)),+(n<l)}return+!!Q.intersectsBox(e)},intersectsTriangle:(u,d)=>{let p=null;if(p=r.side===0?Q.intersectTriangle(u.a,u.b,u.c,!0,Lr):r.side===1?Q.intersectTriangle(u.c,u.b,u.a,!0,Lr):Q.intersectTriangle(u.a,u.b,u.c,!1,Lr),!p)return;p=p.clone().applyMatrix4(a);let m=t.ray.origin.distanceTo(p);if(m>=t.near&&m<=t.far){if(o&&m>=l)return;let{geometry:t}=this,{index:r}=t,a=this.resolvePrimitiveIndex(d),h=a*3,g=h+0,_=h+1,v=h+2;r&&(g=r.array[g],_=r.array[_],v=r.array[v]);let y={distance:m,point:p.clone(),object:e,uv:null,uv1:null,normal:null,face:{a:g,b:_,c:v,normal:f.getNormal(u.a,u.b,u.c,new c),materialIndex:0},faceIndex:a};if(Br){let e=new c;f.getBarycoord(Lr,u.a,u.b,u.c,e),y.barycoord=e}let b=t.attributes.uv,x=t.attributes.uv1,S=t.attributes.normal;if(b){Vr.fromBufferAttribute(b,g),Hr.fromBufferAttribute(b,_),Ur.fromBufferAttribute(b,v),y.uv=new i;let e=f.getInterpolation(Lr,u.a,u.b,u.c,Vr,Hr,Ur,y.uv);Br||(y.uv=e)}if(x){Vr.fromBufferAttribute(x,g),Hr.fromBufferAttribute(x,_),Ur.fromBufferAttribute(x,v),y.uv1=new i;let e=f.getInterpolation(Lr,u.a,u.b,u.c,Vr,Hr,Ur,y.uv1);Br||(y.uv1=e)}if(S){Wr.fromBufferAttribute(S,g),Gr.fromBufferAttribute(S,_),Kr.fromBufferAttribute(S,v),y.normal=new c;let e=f.getInterpolation(Lr,u.a,u.b,u.c,Wr,Gr,Kr,y.normal);y.normal.dot(Q.direction)>0&&y.normal.multiplyScalar(-1),Br||(y.normal=e)}l=y.distance,s=y,o||n.push(y)}}}),o&&s&&n.push(s),n}};function Jr(e,t,n,r,i,a,o){let{mesh:s,geometry:c}=n,l=c.index?c.index.array:null;for(let c=e,u=t+e;c<u;c++){let e=n.resolvePrimitiveIndex(c),t=3*e+0,u=3*e+1,d=3*e+2;if(l&&(t=l[t],u=l[u],d=l[d]),s.getVertexPosition(t,o.a),s.getVertexPosition(u,o.b),s.getVertexPosition(d,o.c),o.needsUpdate=!0,r(o,c,i,a))return!0}return!1}var Yr=new E,Xr=new r,Zr=new c,Qr=class extends y{get isMesh(){return!this.displayEdges}get isLineSegments(){return this.displayEdges}get isLine(){return this.displayEdges}getVertexPosition(...e){return le.prototype.getVertexPosition.call(this,...e)}constructor(e,t,r=10,i=0){super(),this.material=t,this.geometry=new n,this.name=`BVHRootHelper`,this.depth=r,this.displayParents=!1,this.bvh=e,this.displayEdges=!0,this._group=i}raycast(){}intersectsFrustum(e){return e.intersectsObject(this)}update(){let e=this.bvh;this.geometry.dispose(),this.visible=!1,e&&(this.geometry=this.getGeometry(e),this.visible=!0)}getGeometry(e){let t=this._group,r=null;if(t!==-1)r=this.getBVHBoundPositions(e,t);else{let t=e._roots.map((t,n)=>this.getBVHBoundPositions(e,n)),n=t.reduce((e,t)=>e+t.length,0);r=new Float32Array(n);let i=0;t.forEach(e=>{r.set(e,i),i+=e.length})}let i=this.getBVHBoundIndices(r),a=new n;return a.setIndex(new m(i,1,!1)),a.setAttribute(`position`,new m(r,3,!1)),a}getBVHBoundIndices(e){let t=e.length/24,n,r;r=this.displayEdges?new Uint8Array([0,4,1,5,2,6,3,7,0,2,1,3,4,6,5,7,0,1,2,3,4,5,6,7]):new Uint8Array([0,1,2,2,1,3,4,6,5,6,7,5,1,4,5,0,4,1,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7]),n=e.length>65535?new Uint32Array(r.length*t):new Uint16Array(r.length*t);let i=r.length;for(let e=0;e<t;e++){let t=e*8,a=e*i;for(let e=0;e<i;e++)n[a+e]=t+r[e]}return n}getBVHBoundPositions(e,t=0,n=null){let r=this.depth-1,i=this.displayParents,a=0;e.traverse((e,t,n)=>{if(D(0,n,Yr),Yr.isEmpty())return!0;if(e>=r||t)return a++,!0;i&&a++},t);let o=0,s=new Float32Array(24*a);return e.traverse((e,t,a)=>{if(D(0,a,Yr),Yr.isEmpty())return!0;let c=e>=r||t;if(c||i){let{min:e,max:t}=Yr;for(let r=-1;r<=1;r+=2){let i=r<0?e.x:t.x;for(let r=-1;r<=1;r+=2){let a=r<0?e.y:t.y;for(let r=-1;r<=1;r+=2){let c=r<0?e.z:t.z;Zr.set(i,a,c),n&&Zr.applyMatrix4(n),Zr.toArray(s,o),o+=3}}}return c}},t),s}},$r=class e extends ue{get color(){return this.edgeMaterial.color}get opacity(){return this.edgeMaterial.opacity}set opacity(e){this.edgeMaterial.opacity=e,this.meshMaterial.opacity=e}get objectIndex(){return console.warn(`BVHHelper: "objectIndex" has been renamed "instanceId".`),this.instanceId}set objectIndex(e){console.warn(`BVHHelper: "objectIndex" has been renamed "instanceId".`),this.instanceId=e}constructor(e=null,t=null,n=10){e instanceof tr&&(n=t||10,t=e,e=null),typeof t==`number`&&(n=t,t=null),super(),this.name=`BVHHelper`,this.depth=n,this.mesh=e,this.bvh=t,this.displayParents=!1,this.displayEdges=!0,this.instanceId=0,this._roots=[];let r=new te({color:65416,transparent:!0,opacity:.3,depthWrite:!1}),i=new g({color:65416,transparent:!0,opacity:.3,depthWrite:!1});i.color=r.color,this.edgeMaterial=r,this.meshMaterial=i,this.update()}update(){let e=this.mesh,t=this.instanceId,n=this.bvh||e.boundsTree||e.geometry&&e.geometry.boundsTree||null;if(e&&e.isBatchedMesh&&e.boundsTrees&&!n&&t>=0){let r=e._drawInfo[t];r&&(n=e.boundsTrees[r.geometryIndex]||n)}let r=n?n._roots.length:0;for(;this._roots.length>r;){let e=this._roots.pop();e.geometry.dispose(),this.remove(e)}for(let e=0;e<r;e++){let{depth:t,edgeMaterial:r,meshMaterial:i,displayParents:a,displayEdges:o}=this;if(e>=this._roots.length){let i=new Qr(n,r,t,e);this.add(i),this._roots.push(i)}let s=this._roots[e];s.bvh=n,s.depth=t,s.displayParents=a,s.displayEdges=o,s.material=o?r:i,s.update()}}updateMatrixWorld(...e){let t=this.mesh,n=this.parent,r=this.instanceId;t!==null&&(t.updateWorldMatrix(!0,!1),n?this.matrix.copy(n.matrixWorld).invert().multiply(t.matrixWorld):this.matrix.copy(t.matrixWorld),(t.isInstancedMesh||t.isBatchedMesh)&&r>=0&&(t.getMatrixAt(r,Xr),this.matrix.multiply(Xr)),this.matrix.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(...e)}copy(e){this.depth=e.depth,this.mesh=e.mesh,this.bvh=e.bvh,this.opacity=e.opacity,this.color.copy(e.color)}clone(){return new e().copy(this)}dispose(){this.edgeMaterial.dispose(),this.meshMaterial.dispose();let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].geometry.dispose()}},ei=class extends $r{constructor(...e){console.warn(`MeshBVHHelper: Class has been deprecated. Use BVHHelper instead.`),super(...e)}},ti=new E,ni=new E;function ri(e){switch(typeof e){case`number`:return 8;case`string`:return e.length*2;case`boolean`:return 4;default:return 0}}function ii(e){return/(Uint|Int|Float)(8|16|32)Array/.test(e.constructor.name)}function ai(e,t){let n={nodeCount:0,leafNodeCount:0,depth:{min:1/0,max:-1/0},primitives:{min:1/0,max:-1/0},splits:[0,0,0],surfaceAreaScore:0};return e.traverse((e,t,r,i,a)=>{let o=r[3]-r[0],s=r[4]-r[1],c=r[5]-r[2],l=2*(o*s+s*c+c*o);n.nodeCount++,t?(n.leafNodeCount++,n.depth.min=Math.min(e,n.depth.min),n.depth.max=Math.max(e,n.depth.max),n.primitives.min=Math.min(a,n.primitives.min),n.primitives.max=Math.max(a,n.primitives.max),n.surfaceAreaScore+=l*ye*a):(n.splits[i]++,n.surfaceAreaScore+=l*1)},t),n.primitives.min===1/0&&(n.primitives.min=0,n.primitives.max=0),n.depth.min===1/0&&(n.depth.min=0,n.depth.max=0),n}function oi(e){return e._roots.map((t,n)=>ai(e,n))}function si(e){let t=new Set,n=[e],r=0;for(;n.length;){let e=n.pop();if(!t.has(e)){t.add(e);for(let t in e){if(!Object.hasOwn(e,t))continue;r+=ri(t);let i=e[t];i&&(typeof i==`object`||typeof i==`function`)?ii(i)||dt()&&i instanceof SharedArrayBuffer||i instanceof ArrayBuffer?r+=i.byteLength:n.push(i):r+=ri(i)}}}return r}function ci(e){let t=[],n=new Float32Array(6),r=!0;return e.traverse((i,a,o,s,c)=>{t[i]={depth:i,isLeaf:a,boundingData:o,offset:s,count:c},D(0,o,ti);let l=t[i-1];if(a){e.writePrimitiveRangeBounds(s,c,n,0),ni.min.set(n[0],n[1],n[2]),ni.max.set(n[3],n[4],n[5]);let t=ti.containsBox(ni);console.assert(t,`Leaf bounds does not fully contain primitives.`),r&&=t}if(l){D(0,l.boundingData,ni);let e=ni.containsBox(ti);console.assert(e,`Parent bounds does not fully contain child.`),r&&=e}}),r}function li(e){let t=[];return e.traverse((e,n,r,i,a)=>{let o={bounds:D(0,r,new E)};n?(o.count=a,o.offset=i):(o.left=null,o.right=null),t[e]=o;let s=t[e-1];s&&(s.left===null?s.left=o:s.right=o)}),t[0]}var ui=!0,di={Mesh:le.prototype.raycast,Line:p.prototype.raycast,LineSegments:T.prototype.raycast,LineLoop:ae.prototype.raycast,Points:s.prototype.raycast,BatchedMesh:ie.prototype.raycast},$=new le,fi=[];function pi(e,t){if(this.isBatchedMesh)mi.call(this,e,t);else{let{geometry:n}=this;if(n.boundsTree)n.boundsTree.raycastObject3D(this,e,t);else{let n;if(this instanceof le)n=di.Mesh;else if(this instanceof T)n=di.LineSegments;else if(this instanceof ae)n=di.LineLoop;else if(this instanceof p)n=di.Line;else if(this instanceof s)n=di.Points;else throw Error(`BVH: Fallback raycast function not found.`);n.call(this,e,t)}}}function mi(e,t){if(this.boundsTrees){let n=this.boundsTrees,r=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,a=this.matrixWorld;$.material=this.material,$.geometry=this.geometry;let o=$.geometry.boundsTree,s=$.geometry.drawRange;$.geometry.boundingSphere===null&&($.geometry.boundingSphere=new de);for(let o=0,s=r.length;o<s;o++){if(!this.getVisibleAt(o))continue;let s=r[o].geometryIndex;if($.geometry.boundsTree=n[s],this.getMatrixAt(o,$.matrixWorld).premultiply(a),!$.geometry.boundsTree){this.getBoundingBoxAt(s,$.geometry.boundingBox),this.getBoundingSphereAt(s,$.geometry.boundingSphere);let e=i[s];$.geometry.setDrawRange(e.start,e.count)}$.raycast(e,fi);for(let e=0,n=fi.length;e<n;e++){let n=fi[e];n.object=this,n.batchId=o,t.push(n)}fi.length=0}$.geometry.boundsTree=o,$.geometry.drawRange=s,$.material=null,$.geometry=null}else di.BatchedMesh.call(this,e,t)}function hi(e={}){let{type:t=tr}=e;return this.boundsTree=new t(this,e),this.boundsTree}function gi(){this.boundsTree=null}function _i(e=-1,t={}){if(!ui)throw Error(`BatchedMesh: Three r166+ is required to compute bounds trees.`);t={...t,range:null};let n=this._drawRanges||this._geometryInfo,r=this._geometryCount;this.boundsTrees||=Array(r).fill(null);let i=this.boundsTrees;for(;i.length<r;)i.push(null);if(e<0){for(let e=0;e<r;e++)t.range=n[e],i[e]=new tr(this.geometry,t);return i}return e<n.length&&(t.range=n[e],i[e]=new tr(this.geometry,t)),i[e]||null}function vi(e=-1){e<0?this.boundsTrees.fill(null):e<this.boundsTrees.length&&(this.boundsTrees[e]=null)}function yi(e){switch(e){case 1:return`R`;case 2:return`RG`;case 3:return`RGBA`;case 4:return`RGBA`}throw Error()}function bi(e){switch(e){case 1:return C;case 2:return _;case 3:return ee;case 4:return ee}}function xi(e){switch(e){case 1:return S;case 2:return x;case 3:return ne;case 4:return ne}}var Si=class extends w{constructor(){super(),this.minFilter=o,this.magFilter=o,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){let t=this.overrideItemSize,n=e.itemSize,r=e.count;if(t!==null){if(n*r%t!==0)throw Error(`VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.`);e.itemSize=t,e.count=r*n/t}let i=e.itemSize,a=e.count,o=e.normalized,s=e.array.constructor,c=s.BYTES_PER_ELEMENT,l=this._forcedType,f=i;if(l===null)switch(s){case Float32Array:l=se;break;case Uint8Array:case Uint16Array:case Uint32Array:l=v;break;case Int8Array:case Int16Array:case Int32Array:l=d}let p,m,h,g,_=yi(i);switch(l){case se:h=1,m=bi(i),o&&c===1?(g=s,_+=`8`,s===Uint8Array?p=u:(p=ce,_+=`_SNORM`)):(g=Float32Array,_+=`32F`,p=se);break;case d:_+=c*8+`I`,h=o?2**(s.BYTES_PER_ELEMENT*8-1):1,m=xi(i),c===1?(g=Int8Array,p=ce):c===2?(g=Int16Array,p=re):(g=Int32Array,p=d);break;case v:_+=c*8+`UI`,h=o?2**(s.BYTES_PER_ELEMENT*8-1):1,m=xi(i),c===1?(g=Uint8Array,p=u):c===2?(g=Uint16Array,p=b):(g=Uint32Array,p=v)}f===3&&(m===1023||m===1033)&&(f=4);let y=Math.ceil(Math.sqrt(a))||1,x=f*y*y,S=new g(x),C=e.normalized;e.normalized=!1;for(let t=0;t<a;t++){let n=f*t;S[n]=e.getX(t)/h,i>=2&&(S[n+1]=e.getY(t)/h),i>=3&&(S[n+2]=e.getZ(t)/h,f===4&&(S[n+3]=1)),i>=4&&(S[n+3]=e.getW(t)/h)}e.normalized=C,this.internalFormat=_,this.format=m,this.type=p,this.image.width=y,this.image.height=y,this.image.data=S,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=r}},Ci=class extends Si{constructor(){super(),this._forcedType=v}},wi=class extends Si{constructor(){super(),this._forcedType=d}},Ti=class extends Si{constructor(){super(),this._forcedType=se}},Ei=class{constructor(){this.index=new Ci,this.position=new Ti,this.bvhBounds=new w,this.bvhContents=new w,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){let{geometry:t}=e;if(Oi(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){let n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length){if(t.index)this._cachedIndexAttr=t.index.clone();else{let e=mt(ft(t));this._cachedIndexAttr=new m(e,1,!1)}}Di(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){let{index:e,position:t,bvhBounds:n,bvhContents:r}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),r&&r.dispose()}};function Di(e,t,n){let r=n.array,i=e.index?e.index.array:null;for(let e=0,n=t.length;e<n;e++){let n=3*e,a=3*t[e];for(let e=0;e<3;e++)r[n+e]=i?i[a+e]:a+e}}function Oi(e,t,n){let r=e._roots;if(r.length!==1)throw Error(`MeshBVHUniformStruct: Multi-root BVHs not supported.`);let i=r[0],a=new Uint16Array(i),s=new Uint32Array(i),c=new Float32Array(i),l=i.byteLength/32,u=2*Math.ceil(Math.sqrt(l/2)),d=new Float32Array(4*u*u),f=Math.ceil(Math.sqrt(l)),p=new Uint32Array(2*f*f);for(let e=0;e<l;e++){let t=e*32/4,n=t*2,r=N(t);for(let t=0;t<3;t++)d[8*e+0+t]=c[r+0+t],d[8*e+4+t]=c[r+3+t];if(O(n,a)){let r=A(n,a),i=k(t,s),o=xe|r;p[e*2+0]=o,p[e*2+1]=i}else{let n=s[t+6],r=Oe(t,s);p[e*2+0]=r,p[e*2+1]=n}}t.image.data=d,t.image.width=u,t.image.height=u,t.format=ee,t.type=se,t.internalFormat=`RGBA32F`,t.minFilter=o,t.magFilter=o,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),n.image.data=p,n.image.width=f,n.image.height=f,n.format=x,n.type=v,n.internalFormat=`RG32UI`,n.minFilter=o,n.magFilter=o,n.generateMipmaps=!1,n.needsUpdate=!0,n.dispose()}var ki=new c,Ai=new c,ji=new c,Mi=new oe,Ni=new c,Pi=new c,Fi=new oe,Ii=new oe,Li=new r,Ri=new r;function zi(e,t){if(!e&&!t)return;let n=e.count===t.count,r=e.normalized===t.normalized,i=e.array.constructor===t.array.constructor,a=e.itemSize===t.itemSize;if(!n||!r||!i||!a)throw Error()}function Bi(e,t=null){let n=e.array.constructor,r=e.normalized,i=e.itemSize,a=t===null?e.count:t;return new m(new n(i*a),i,r)}function Vi(e,t,n=0){if(e.isInterleavedBufferAttribute){let r=e.itemSize;for(let i=0,a=e.count;i<a;i++){let a=i+n;t.setX(a,e.getX(i)),r>=2&&t.setY(a,e.getY(i)),r>=3&&t.setZ(a,e.getZ(i)),r>=4&&t.setW(a,e.getW(i))}}else{let r=t.array,i=r.constructor,a=r.BYTES_PER_ELEMENT*e.itemSize*n;new i(r.buffer,a,e.array.length).set(e.array)}}function Hi(e,t,n){let r=e.elements,i=t.elements;for(let e=0,t=i.length;e<t;e++)r[e]+=i[e]*n}function Ui(e,t,n){let r=e.skeleton,i=e.geometry,a=r.bones,o=r.boneInverses;Fi.fromBufferAttribute(i.attributes.skinIndex,t),Ii.fromBufferAttribute(i.attributes.skinWeight,t),Li.elements.fill(0);for(let e=0;e<4;e++){let t=Ii.getComponent(e);if(t!==0){let n=Fi.getComponent(e);Ri.multiplyMatrices(a[n].matrixWorld,o[n]),Hi(Li,Ri,t)}}return Li.multiply(e.bindMatrix).premultiply(e.bindMatrixInverse),n.transformDirection(Li),n}function Wi(e,t,n,r,i){Ni.set(0,0,0);for(let a=0,o=e.length;a<o;a++){let o=t[a],s=e[a];o!==0&&(Pi.fromBufferAttribute(s,r),n?Ni.addScaledVector(Pi,o):Ni.addScaledVector(Pi.sub(i),o))}i.add(Ni)}function Gi(e,t={useGroups:!1,updateIndex:!1,skipAttributes:[]},r=new n){let i=e[0].index!==null,{useGroups:a=!1,updateIndex:o=!1,skipAttributes:s=[]}=t,c=new Set(Object.keys(e[0].attributes)),l={},u=0;r.clearGroups();for(let t=0;t<e.length;++t){let n=e[t],o=0;if(i!==(n.index!==null))throw Error(`StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`);for(let e in n.attributes){if(!c.has(e))throw Error(`StaticGeometryGenerator: All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`);l[e]===void 0&&(l[e]=[]),l[e].push(n.attributes[e]),o++}if(o!==c.size)throw Error(`StaticGeometryGenerator: Make sure all geometries have the same number of attributes.`);if(a){let e;if(i)e=n.index.count;else if(n.attributes.position!==void 0)e=n.attributes.position.count;else throw Error(`StaticGeometryGenerator: The geometry must have either an index or a position attribute`);r.addGroup(u,e,t),u+=e}}if(i){let t=!1;if(!r.index){let n=0;for(let t=0;t<e.length;++t)n+=e[t].index.count;r.setIndex(new m(new Uint32Array(n),1,!1)),t=!0}if(o||t){let t=r.index,n=0,i=0;for(let r=0;r<e.length;++r){let a=e[r],o=a.index;if(s[r]!==!0)for(let e=0;e<o.count;++e)t.setX(n,o.getX(e)+i),n++;i+=a.attributes.position.count}}}for(let e in l){let t=l[e];if(!(e in r.attributes)){let n=0;for(let e in t)n+=t[e].count;r.setAttribute(e,Bi(l[e][0],n))}let n=r.attributes[e],i=0;for(let e=0,r=t.length;e<r;e++){let r=t[e];s[e]!==!0&&Vi(r,n,i),i+=r.count}}return r}function Ki(e,t){if(e===null||t===null)return e===t;if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function qi(e){let{index:t,attributes:n}=e;if(t)for(let e=0,n=t.count;e<n;e+=3){let n=t.getX(e),r=t.getX(e+2);t.setX(e,r),t.setX(e+2,n)}else for(let e in n){let t=n[e],r=t.itemSize;for(let e=0,n=t.count;e<n;e+=3)for(let n=0;n<r;n++){let r=t.getComponent(e,n),i=t.getComponent(e+2,n);t.setComponent(e,n,i),t.setComponent(e+2,n,r)}}return e}var Ji=class{constructor(e){this.matrixWorld=new r,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){let e=this.mesh,t=e.geometry,n=e.skeleton,r=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=r,n){n.boneTexture||n.computeBoneTexture(),n.update();let e=n.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==e.length?this.boneMatrices=e.slice():this.boneMatrices.set(e)}else this.boneMatrices=null}didChange(){let e=this.mesh,t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&Ki(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===n)}},Yi=class{constructor(e){Array.isArray(e)||(e=[e]);let t=[];e.forEach(e=>{e.traverseVisible(e=>{e.isMesh&&t.push(e)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=[`position`,`normal`,`color`,`tangent`,`uv`,`uv2`],this._intermediateGeometry=Array(t.length).fill().map(()=>new n),this._diffMap=new WeakMap}getMaterials(){let e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new n){let t=[],{meshes:r,useGroups:i,_intermediateGeometry:a,_diffMap:o}=this;for(let e=0,n=r.length;e<n;e++){let n=r[e],i=a[e],s=o.get(n);!s||s.didChange(n)?(this._convertToStaticGeometry(n,i),t.push(!1),s?s.update():o.set(n,new Ji(n))):t.push(!0)}if(a.length===0){e.setIndex(null);let t=e.attributes;for(let n in t)e.deleteAttribute(n);for(let t in this.attributes)e.setAttribute(this.attributes[t],new m(new Float32Array,4,!1))}else Gi(a,{useGroups:i,skipAttributes:t},e);for(let t in e.attributes)e.attributes[t].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new n){let r=e.geometry,i=this.applyWorldTransforms,a=this.attributes.includes(`normal`),o=this.attributes.includes(`tangent`),s=r.attributes,c=t.attributes;!t.index&&r.index&&(t.index=r.index.clone()),c.position||t.setAttribute(`position`,Bi(s.position)),a&&!c.normal&&s.normal&&t.setAttribute(`normal`,Bi(s.normal)),o&&!c.tangent&&s.tangent&&t.setAttribute(`tangent`,Bi(s.tangent)),zi(r.index,t.index),zi(s.position,c.position),a&&zi(s.normal,c.normal),o&&zi(s.tangent,c.tangent);let l=s.position,u=a?s.normal:null,d=o?s.tangent:null,f=r.morphAttributes.position,p=r.morphAttributes.normal,m=r.morphAttributes.tangent,g=r.morphTargetsRelative,_=e.morphTargetInfluences,v=new h;v.getNormalMatrix(e.matrixWorld),r.index&&t.index.array.set(r.index.array);for(let t=0,n=s.position.count;t<n;t++)ki.fromBufferAttribute(l,t),u&&Ai.fromBufferAttribute(u,t),d&&(Mi.fromBufferAttribute(d,t),ji.fromBufferAttribute(d,t)),_&&(f&&Wi(f,_,g,t,ki),p&&Wi(p,_,g,t,Ai),m&&Wi(m,_,g,t,ji)),e.isSkinnedMesh&&(e.applyBoneTransform(t,ki),u&&Ui(e,t,Ai),d&&Ui(e,t,ji)),i&&ki.applyMatrix4(e.matrixWorld),c.position.setXYZ(t,ki.x,ki.y,ki.z),u&&(i&&Ai.applyNormalMatrix(v),c.normal.setXYZ(t,Ai.x,Ai.y,Ai.z)),d&&(i&&ji.transformDirection(e.matrixWorld),c.tangent.setXYZW(t,ji.x,ji.y,ji.z,Mi.w));for(let e in this.attributes){let n=this.attributes[e];n!==`position`&&n!==`tangent`&&n!==`normal`&&n in s&&(c[n]||t.setAttribute(n,Bi(s[n])),zi(s[n],c[n]),Vi(s[n],c[n]))}return e.matrixWorld.determinant()<0&&qi(t),t}},Xi=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Zi=`

float dot2( vec3 v ) {

	return dot( v, v );

}

// implementation from https://www.shadertoy.com/view/ttfGWl, though method 2 has been removed
// and is now available at this fork: https://www.shadertoy.com/view/WlB3zW
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0 - v;

	}

	// output the barycoord in v0, v1, v2 weight order
	barycoord = vec3( w, u, v );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// point and cut off range
	vec3 point, float closestDistanceSquared,

	// outputs
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord, inout float side, inout vec3 outPoint
) {

	bool found = false;
	vec3 localBarycoord;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, sampler2D bvhBounds, uint currNodeIndex ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhClosestPointToPoint(		bvh,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)	_bvhClosestPointToPoint(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)

float _bvhClosestPointToPoint(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// point to check
	vec3 point, float maxDistance,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float closestDistanceSquared = maxDistance * maxDistance;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh_position, bvh_index, offset, count, point, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;
			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`,Qi=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`,$i=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,ea=e({bvh_distance_functions:()=>Zi,bvh_ray_functions:()=>Qi,bvh_struct_definitions:()=>$i,common_functions:()=>Xi}),ta=$i,na=Zi,ra=`
	${Xi}
	${Qi}
`;export{pe as AVERAGE,ut as BVH,$r as BVHHelper,ea as BVHShaderGLSL,fe as CENTER,_e as CONTAINED,U as ExtendedTriangle,Ti as FloatVertexAttributeTexture,bt as GeometryBVH,ge as INTERSECTED,wi as IntVertexAttributeTexture,fr as LineBVH,dr as LineLoopBVH,ur as LineSegmentsBVH,tr as MeshBVH,ei as MeshBVHHelper,Ei as MeshBVHUniformStruct,he as NOT_INTERSECTED,Er as ObjectBVH,W as OrientedBox,yr as PointsBVH,me as SAH,Ce as SKIP_GENERATION,ve as STOP_TRAVERSAL,qr as SkinnedMeshBVH,Yi as StaticGeometryGenerator,Ci as UIntVertexAttributeTexture,Si as VertexAttributeTexture,pi as acceleratedRaycast,_i as computeBatchedBoundsTree,hi as computeBoundsTree,vi as disposeBatchedBoundsTree,gi as disposeBoundsTree,si as estimateMemoryInBytes,yt as generateIndirectBuffer,oi as getBVHExtremes,li as getJSONStructure,Xt as getTriangleHitPointInfo,na as shaderDistanceFunction,ra as shaderIntersectFunction,ta as shaderStructs,ci as validateBounds};