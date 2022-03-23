let $R=null,saveCache=null;const _C={State:class{constructor(t){Object.assign(this,t),this._=t}$d(){let t=!1;for(let s in this._)this._[s]!==this[s]&&(this._[s]=this[s],t=!0);return t}},dSprN(t,s){$R.rr.$S(t[s],this.x,this.y,t.tx-this.sprX,t.ty-this.sprY,this.scx,this.scy,this.ang,this.al)},moveOxy(t,s,e){let i=(s-t.sprX)*t.scx,h=(e-t.sprY)*t.scy;if(i||h)if(t.sprX=s,t.sprY=e,t.ang){let s=t.ang*Math.DR,e=Math.cos(s),r=Math.sin(s);t.x+=e*i+r*h,t.y+=-r*i+e*h}else t.x+=i,t.y+=h},cB(t,s,e,i,h,r,a,o){let n=i*t.scx,l=h*t.scy,c=t.x-n,d=t.y-l;if(t.ang){let i=t.ang*Math.DR,h=Math.cos(i),a=Math.sin(i),o=s*h,f=s*a;r[0]=c+n*(1-h)-l*a,r[1]=d+n*a+l*(1-h),r[2]=r[0]+o,r[3]=r[1]-f,r[4]=r[0]+e*a,r[5]=r[1]+e*h,r[6]=r[4]+o,r[7]=r[5]-f}else r[0]=c,r[1]=d,r[2]=r[0]+s,r[3]=r[1],r[4]=r[0],r[5]=r[1]+e,r[6]=r[2],r[7]=r[5];let f=0,p=0,u=1,m=1;for(let t=0;t<8;t+=2)r[t]<r[f]?f=t:r[t]>r[p]&&(p=t),r[t+1]<r[u]?u=t+1:r[t+1]>r[m]&&(m=t+1);o[0]=f,o[1]=u,o[2]=p,o[3]=m,a[0]=Math.round(r[f]),a[1]=Math.round(r[u]),a[2]=Math.round(r[p]),a[3]=Math.round(r[m])},WR:class{#t;#s=1;constructor(t,s,e){this.canvas=t,this.w=s,this.h=e,this.#t=[],this.#t.w=32,this.#t.h=32,this.#t.s=0,this.cM=new Float32Array(6),this.dC=!1,this.dO=!1,this.L=1e5}addSpr(t){if(t[0]){for(this.#t.push(t),t.for(t=>this.#t.s+=(t.width+this.#s)*(t.height+this.#s));t[0].width>this.#t.w;)this.#t.w<<=1;for(;t[0].height>this.#t.h;)this.#t.h<<=1}}#e(t){return 1<<Math.ceil(Math.log2(t))}textureMap(t){let s=32+this.#s;1&s&&++s;let e=Math.max(this.#t.w,this.#e(Math.min(this.#t.s**.5,this.#t.s/this.#t.h)))+this.#s,i=this.#t.h,h=0,r=[],a=0;const o=o=>o.for(o=>{let n=o.width+this.#s,l=o.height+this.#s,c=r.find(t=>t.h>=l&&t.w>=n);1&n&&++n,1&l&&++l,c||(a+=l,c={x:0,y:a,h:l,w:e},r.push(c)),t.push(c.x,c.y-c.h,o.width,o.height);let d=c.y-c.h+o.height;d>i&&(i=d);let f=c.h-l,p=c.w-n;f>=2?(p<2&&(c.h=f),(n<s||n<f)&&f>=l?(r.unshift({x:c.x+n,y:c.y-f,h:l,w:p}),c.h=f):(r.push({x:c.x,y:c.y,h:f,w:n}),c.x+=n,c.w-=n)):(c.x+=n,c.w-=n),o.id=h++});this.#t.sort((t,s)=>s[0].height-t[0].height),this.#t.for(t=>o(t)),i=this.#e(i),e-=this.#s;const n=new OffscreenCanvas(e,i),l=n.getContext("2d");return this.#t.for(s=>{for(let e=0;e<s.length;e++){const i=s[e].id;l.drawImage(s[e],t[4*i],t[4*i+1]),s[e].close?.(),s[e]=0|i}}),console.log(`Texture: ${e}x${i}`),this.#t.length=0,this.#t.w=32,this.#t.h=32,this.#t.s=0,n}vC(t,s){t===this.cM[4]&&s===this.cM[5]||(this.cM[4]=t,this.cM[5]=s,this.dC=!0)}vT(t,s,e=0){if(t*=2/this.w,s*=-2/this.h,e){const i=e*Math.DR,h=Math.cos(i),r=Math.sin(i);this.cM[0]=h*t,this.cM[1]=r*t,this.cM[2]=-r*s,this.cM[3]=h*s}else this.cM[0]=t,this.cM[1]=0,this.cM[2]=0,this.cM[3]=s;this.dC=!0}updO(){this.dO=!0}}};_C.WL=class extends _C.WR{#i;#h;#r;#a;#o;#n;#l;#c;#d;#f;#p=12;#u;#m;#g;#v;#x;constructor(t,s,e){super(t,s,e),t.addEventListener("webglcontextcreationerror",t=>{t.statusMessage&&console.error(t.statusMessage)}),t.addEventListener("webglcontextrestored",t=>{this.#i=null,this.#y()}),this.#v=[]}#b(t,s){const e=this.#i,i=e.createShader(t);if(e.shaderSource(i,s),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS))throw e.getShaderInfoLog(i);return i}#R(){const t=this.#i;t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.#u.width,this.#u.height,0,t.RGBA,t.UNSIGNED_BYTE,this.#u),t.generateMipmap(t.TEXTURE_2D)}#y(){if(this.#i)return this.#R();this.#i=this.canvas.getContext("webgl2",{depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!0});const t=this.#i;if(!t)throw"Failed to get WebGL context";t.clearColor(0,0,0,0),t.enable(t.BLEND),t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),this.#h=this.#b(t.VERTEX_SHADER,_C.WL.VertGLSL),this.#r=this.#b(t.FRAGMENT_SHADER,_C.WL.FragGLSL),this.#a=t.createProgram();const s=this.#a;if(t.attachShader(s,this.#h),t.attachShader(s,this.#r),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))throw t.getProgramInfoLog(s);t.useProgram(s),this.#o=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.#o),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint8Array([0,1,2,3]),t.STATIC_DRAW),this.#n=t.getUniformLocation(s,"camera"),t.uniform1i(t.getUniformLocation(s,"sampler"),0),this.#m=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.#m),this.#R(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAX_LEVEL,1),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.activeTexture(t.TEXTURE0),this.#c=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.#c),t.bufferData(t.ARRAY_BUFFER,this.#l,t.DYNAMIC_DRAW),this.#x=[],["spr","pos","trans"].for((e,i)=>{const h=t.getAttribLocation(s,e);t.vertexAttribPointer(h,4,t.FLOAT,!1,4*this.#p,16*i),t.vertexAttribDivisor(h,1),t.enableVertexAttribArray(h),this.#x[i]=h}),this.#x.offset=0}async init(){this.vT(1,1),this.#g=[],this.#u=this.textureMap(this.#g),this.#l??=new Float32Array(this.#p*this.L),this.#d=this.#f=0,this.#y()}setBlend(t){const s=this.#v.at(-1);s?.m!==t&&(s?.i===this.#d?s.m=t:this.#v.push({m:t,i:this.#d}))}$S(t,s,e,i,h,r=1,a=1,o=0,n=1){if(this.#d>=this.L)return;const l=this.#d++*this.#p,c=this.#l,d=this.#g,f=4*t;c[l]=d[f],c[l+1]=d[f+1],c[l+2]=d[f+2],c[l+3]=d[f+3],c[l+4]=s,c[l+5]=e,c[l+6]=i,c[l+7]=h,c[l+8]=r,c[l+9]=a,c[l+10]=o,c[l+11]=n}$E(t,s,e,i,h,r,a,o,n,l=1,c=1,d=0,f=1){if(this.#d>=this.L)return;const p=this.#d++*this.#p,u=this.#l,m=this.#g,g=4*t;u[p]=m[g]+s,u[p+1]=m[g+1]+e,u[p+2]=i,u[p+3]=h,u[p+4]=r,u[p+5]=a,u[p+6]=o,u[p+7]=n,u[p+8]=l,u[p+9]=c,u[p+10]=d,u[p+11]=f}$R(t,s,e,i,h,r,a,o=0,n=0,l=0,c=1){if(this.#d>=this.L)return;const d=this.#d++*this.#p,f=this.#l;f[d]=-1,f[d+1]=h/255,f[d+2]=r/255,f[d+3]=a/255,f[d+4]=t,f[d+5]=s,f[d+6]=o/e,f[d+7]=n/i,f[d+8]=e,f[d+9]=i,f[d+10]=l,f[d+11]=c}free(){const t=this.#i;t&&!t.isContextLost()&&t.clear(t.COLOR_BUFFER_BIT),this.dC=!1,this.dO=!1}#w=0;#M(){const t=this.#i,s=this.#v.shift();switch(s.m){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 2:break;default:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)}this.#w=s.m}render(){const t=this.#i;if(!t.isContextLost()){this.dC&&(t.uniformMatrix3x2fv(this.#n,!1,this.cM),this.dC=!1),this.dO&&(this.#f=this.#d,this.#d&&t.bufferSubData(t.ARRAY_BUFFER,0,this.#l.subarray(0,this.#f*this.#p)),this.#d=0,this.dO=!1),this.#v[0]?.m===this.#w&&this.#v.shift(),t.clear(t.COLOR_BUFFER_BIT);for(let s=0;s<this.#f;){let e=this.#f-s;this.#v.length&&(e=this.#v[0].i-s),this.#x.offset!==s&&(this.#x.for((e,i)=>{const h=4*this.#p;t.vertexAttribPointer(e,4,t.FLOAT,!1,h,h*s+16*i)}),this.#x.offset=s),t.drawElementsInstanced(t.TRIANGLE_STRIP,4,t.UNSIGNED_BYTE,0,e),this.#v.length&&this.#M(),s+=e}}}static VertGLSL="#version 300 es\nvec2 vertexRect[4] = vec2[4](\n  vec2(0., 0.),\n  vec2(1., 0.),\n  vec2(0., 1.),\n  vec2(1., 1.)\n);\n\nuniform mat3x2 camera;\n\nin vec4 spr;\nin vec4 pos;\nin vec4 trans;\n\nout float mode;\nout vec2 uv;\nout vec4 color;\n\nvoid main(void) {\n  mode = spr.x;\n\n  float a = radians(trans.z);\n  mat2 transform = mat2(\n    vec2(cos(a) * trans.x, sin(a) * trans.y),\n    vec2(-sin(a) * trans.x, cos(a) * trans.y)\n  );\n  \n  float isRect = float(spr.x == -1.);\n  float notRect = 1. - isRect;\n\n  vec2 vertex = vertexRect[gl_VertexID] * (notRect * spr.zw + isRect * vec2(1., 1.));\n  \n  vec2 dxy = (vertex + pos.zw) * transform + pos.xy - camera[2];\n  //float rxy = float(mod(trans.z, 90.) == 0.);\n\n  //gl_Position = vec4((rxy * round(dxy) + (1. - rxy) * dxy) * mat2(camera[0], camera[1]), 0., 1.);\n  gl_Position = vec4(dxy * mat2(camera[0], camera[1]), 0., 1.);\n\n  uv = vertex + spr.xy;\n  color = notRect * vec4(1., 1., 1., trans.w) + isRect * vec4(spr.yzw, trans.w);\n}";static FragGLSL="#version 300 es\n#pragma vscode_glsllint_stage:frag\nprecision mediump float;\n\nuniform sampler2D sampler;\n\nin float mode;\nin vec2 uv;\nin vec4 color;\nout vec4 fragColor;\n\nvoid main(void) {\n  if (mode == -1.) {\n    fragColor = color;\n  } else {\n    fragColor = texture(sampler, uv / vec2(textureSize(sampler, 0))) * color;\n  }\n}"},_C.dec={rStr:"",setFlag(t){let s=(t??"").padEnd(6,"-|(~");this.bias=s.charCodeAt(0),this.iObj=s[1],this.iLay=s[2],this.iStr=s[3],this.iArr=s[4],this.iPro=s[5]},set(t,s,e=null){this.code=t,this.lib=e??Lib.obj,this.p=0,this.setFlag(s)},n(){return this.code.charCodeAt(this.p++)-this.bias},k(){let t="",s=this.n();if(s<0)throw"decode key "+s;for(;s;)t+=String.fromCharCode(s%32+96),s>>=5;return t},N(){let t=this.n(),s=t/1e4<<0,e=s<3?1:-1;for(t%=1e4;s%3;)e*=10,s--;return t/e},s(){this.p++;let t="";for(;this.code[this.p]!==this.iStr;)if(t+=this.code[this.p++].replace(this.rStr,this.iStr),this.p>=this.code.length)throw"decode str at pos "+this.p;return this.p++,t},a(){this.p++;const t=[];let s=this.n();for(;s--;)if(t.push(this.v()),this.p>=this.code.length)throw"decode arr at pos "+this.p;return t},v(){switch(this.code[this.p]){case this.iStr:return this.s();case this.iArr:return this.a();default:return this.N()}},o(t,s=!0){let e=this.lib[t];if(!e)throw"decode cid at "+this.p;if(e={...e},e.add=s?$M.cp(e.add):{...e.add},this.code[this.p]===this.iPro){for(this.p++;this.code[this.p]!==this.iPro;){const t=this.k();if("￿"===this.code[this.p]?(delete e.add[t],this.p++):e.add[t]=this.v(),this.p>=this.code.length)throw"decode pro at pos "+this.p}this.p++}return e},r(t,s,e=!0){let i=0;for(t(i);this.p<this.code.length;){const h=this.code[this.p++];if(h===this.iObj){let t=this.n();for(;this.p<this.code.length&&this.code[this.p]!==this.iObj&&this.code[this.p]!==this.iLay;){const h=this.p,r=this.N(),a=this.N(),o=this.o(t,e);o.add.dep=i,s({x:r,y:a,prop:o,start:h,end:this.p})}}else h===this.iLay&&t(++i)}}},_C.L=class{constructor(t){this.i=t,this.o=[],this.a=[],this.del=[],this.e=[],this.draw=t<11?this.#S:this.#B}push(t){return this.o.push(t)-1}add(t){t.$d(),this.a.push(t)}eff(t){this.e.push(t)}clear(){this.a.length=0,this.o.length=0,this.e.length=0}iter(t){for(let s=0;s<this.a.length;s++)this.a[s]._des?this.del.bIns(s):t(this.a[s])}gc(){if(this.del.length&&(this.del.forv(t=>{let s=this.a[t].oid,e=this.o.length-1;this.a.splice(t,1),s<e&&(this.o[s]=this.o[e],this.o[s].oid=s),this.o.pop()}),this.del.length=0),this.e.length){this.upd=!0;for(let t=this.e.length;t--;)this.e[t].move(),this.e[t]._des&&this.e.splice(t,1)}}#S(){if(0===this.i){const t=$R._r.bg,s=t.c.w,e=t.c.h;switch(t.m){case 0:let i=($R.vX/s|0)*s-$R.vX,h=($R.vY/e|0)*e-$R.vY;for(;h<608;h+=e)for(let e=i;e<800;e+=s)$R.rr.$S(t.c[0],$R.vX,$R.vY,e,h);break;case 1:let r=400-(s>>1),a=304-(e>>1);for(;r>0;)r-=s;for(;a>0;)a-=e;for(;a<608;a+=e)for(let e=r;e<800;e+=s)$R.rr.$S(t.c[0],$R.vX,$R.vY,e,a);break;case 2:$R.rr.$S(t.c[0],0,0,0,0,$R._r.w/s,$R._r.h/e)}}else if(7===this.i){$R.$&&$R.$.draw();const t=$R.Col.c[1].o;for(let s=0;s<t.length;s++)t[s].draw()}for(let t=0;t<this.e.length;t++)this.e[t].draw();for(let t=0;t<this.a.length;t++)this.a[t].draw();this.upd=!1}#B(){const t=$R.vX,s=$R.vY;for(let e=0;e<this.e.length;e++)this.e[e].x+=t,this.e[e].y+=s,this.e[e].draw(),this.e[e].x-=t,this.e[e].y-=s;for(let e=0;e<this.a.length;e++)this.a[e].x+=t,this.a[e].y+=s,this.a[e].draw(),this.a[e].x-=t,this.a[e].y-=s;this.upd=!1}},_C.$R=class{static rS;static#_;static#T;static#L;static#C;static#E;static#I;static#D(){if(this.#_)return;const t=()=>El("canvas","surf",{width:800,height:608});this.#_=El("div","surf"),this.#T=t(),this.#I=new _C.WL(this.#T,800,608),this.#L=El("div","surf"),this.#L.id="GUI",this.#C=t().getContext("2d"),this.#C.imageSmoothingEnabled=!1,this.#C.clr=!1}#A;#P;#X;#G;#Y;#F;#U;#z;#O;#j;#k;#N;#V;#$;#W;constructor(t,s){_C.$R.rS=Math.randS(),this.G=Object.freeze(t),this.startR=0,this.endR=this.G.R.findIndex(t=>1===t.type),_C.$R.#D(),this.BG=_C.$R.#_,this.gC=_C.$R.#T,this.GUI=_C.$R.#L,this.sfM=_C.$R.#C;const e=$("screen");App.gC("run","smooth")?e.style.imageRendering="":e.style.imageRendering="pixelated",e.ap(this.BG,this.gC,this.GUI,this.sfM.canvas),this.rr=_C.$R.#I,this.vMargin=192,this.#k=s,this.#j=Infinity,this.startMode=0,this.saveMode=Math.log2(t.S||1),this.#z=0}init(t){console.time("Init"),$("loading").style.background="";let s=this.G._f.length,e={},i=[],h=[],r=[],a=[],o=Res.sndList.slice(0,4);this.resPool=[i,r,e];let n=1,l=1;const c=s=>{n&&(n=0,s&&(console.error(s),UI.$a("游戏资源加载失败，请检查网络连接").then(()=>t(s))))},d=()=>{Res.push("bgm error"),l&&(l=0,UI.message("提示信息","部分音乐资源加载失败",4,"#d94"))},f=["pli","plr","plj","plf","plt","plb"],p=["ftf","fts","ftt","fta","ftc","fst","fkc","fsd","fsc","txt"],u=Promise.all(this.G._f.map(t=>Res.loadFont(Res.fontList[t])));this.bgm=new Au.Bgm(1),this.bgmSrc={},o.for(t=>{Res.snd[t]||(s++,Res.loadSnd(t).catch(c))}),this.G.R.for(l=>{let m=l.bg.m+(l.bg.id??0)+(l.bg.g??"");e[m]?l.bg=e[m]:(s++,e[m]=l.bg,Res.loadBg(l.bg,0,1).catch(c)),l.Spr={},l.spr.for(t=>{let[i,h]=t.split(":"),r="";for(let t in l.col)if(l.col[t].split("|").includes(i)){r=t;break}h||(h=Lib.thm[Res.sprList.indexOf(i)]);let a=i+h+r;if(e[a]||"ply"===i&&e["pli"+a])"ply"===i?f.for(t=>l.Spr[t]=e[t+a]):l.Spr[i]=e[a];else{s++,l.Spr[i]=e[a]=[];let t=Res.loadSpr(i,h,r,1,e[a],1);"ply"===i&&(f.for(t=>l.Spr[t]=e[t+a]=[]),t.then(t=>f.for((s,i)=>{let h=i<2?4*i:2*i+4;l.Spr[s].push(...t.slice(h,i<2?h+4:h+2)),delete e[a],delete l.Spr.ply}))),t.catch(c)}}),l._o=[],l.grp=[];try{_C.dec.set(l.obj,l.flag,this.G._o),_C.dec.r(t=>l._o[t]=[],({x:t,y:e,prop:i})=>{let h=i.ind;if(0===h)return l.x=t+17,void(l.y=e+23);if(void 0===h)return;let o={ind:h,x:t,y:e,dep:i.add.dep};if(delete i.add.dep,o.add=i.add,["blk","tile"].includes(i.spr)&&(o.add.tile=!0,o.add.til>=1e3&&(o.add.til-=1e3),o.add.tb=15&o.add.til,o.add.tc=o.add.til>>4&15),i.def&&(o.add.def=i.def),l._o[o.dep].push(o),10===h){let t={m:o.add.gpm[0],i:i.add.gid,o:[]};switch(o.add._gid=l.grp.push(t)-1,t.m){case 0:t.p=[];break;case 1:t.p=o.add._gp=[],_C.D.circle((s,e)=>t.p.push({x:s,y:e}),o.add.gpm[1],o.add.gpm[2]);break;case 2:t.p=o.add._gp=[],_C.D.polygon((s,e)=>t.p.push({x:s,y:e}),o.add.gpm[1],o.add.gpm[3],o.add.gpm[2])}}else if(42===h){let t=o.add,e=t.w+"-"+t.h;p.for(s=>e+=s+"-"+t[s]);let i=a.indexOf(e);if(-1===i){s++;let i=[El("canvas",0,{width:t.w,height:t.h})];i.x=i.y=0,i.w=t.w,i.h=t.h,i.px=!0,r.push(i),a.push(e),o.spr=i,u.then(()=>{let s=i[0].getContext("2d");Res.loadTxt(t,s,Math.max(t.fsd,t.fst));let e=s.getImageData(0,0,i.w,i.h).data;if([i.bL,i.bT,i.boxW,i.boxH]=Res.sprBox(e,i.w,i.h,1,127),i.boxW<=0||i.boxH<=0)i.boxL=i.boxT=i.bL=i.bT=i.tx=i.ty=0,i[0]=null,Res.push("svg text");else{i.boxL=-i.bL,i.boxT=-i.bT,i.mask=[[]];for(let t=0;t<i.boxH;t++)for(let s=0;s<i.boxW;s++)i.mask[0].push(e[4*((t+i.bT)*i.w+s+i.bL)+3]>127?1:0);Res.trimSpr(i,e).then(()=>Res.push("svg text"))}})}else o.spr=r[i]}else o.spr=l.Spr[i.spr]},!1)}catch(e){return console.error(e),n&&UI.$a("房间内容解析错误").then(()=>t(e)),s++,c()}if(l._o.for(t=>t.for(t=>{if(t.add.gpi){let s=l.grp.findIndex(s=>t.add.gpi.startsWith(s.i));if(-1===s)delete t.add.gpi;else{let e=l.grp[s];t.add._gi=s,t.add._gn=0|t.add.gpi.slice(e.i.length),0===e.m&&(e.p[t.add._gn]={x:t.x,y:t.y}),t.add.grpX=t.add.grpY=0}}})),l.type&&l.bobj.gov){let t=l.bobj.gov,e="";p.for(s=>e+=s+"1-"+t[s+1]+s+"2-"+t[s+2]);let r=h.indexOf(e);if(-1===r){s++;let r=[El("canvas",0,{width:800,height:608})];r.boxL=r.x=400,r.boxT=r.y=304,r.boxW=r.w=800,r.boxH=r.h=608,r.bT=r.bL=0,l.sprGO=r,i.push(r),h.push(e),u.then(()=>{let s=r[0].getContext("2d"),e={w:800,h:608},i=t.txt1.split("\n").length*t.fts1*1.25,h=t.txt2.split("\n").length*t.fts2*1.25;p.for(s=>e[s]=t[s+1]),Res.loadTxt(e,s,304-(i+h)/2),p.for(s=>e[s]=t[s+2]),Res.loadTxt(e,s,304+(i-h)/2),Res.trimSpr(r,s.getImageData(0,0,r.w,r.h).data).then(()=>Res.push("svg text"))})}else l.sprGO=i[r]}if(l.snd?.for(t=>{Res.snd[t]||o.includes(t)||(s++,o.push(t),Res.loadSnd(t).catch(c))}),l.bgm.m>1){l.bgm={...l.bgm};let t=l.bgm.i;if(t){switch(l.bgm.m){case 2:this.bgmSrc[t]||(s++,this.bgmSrc[t]="0",crypto.subtle.digest("SHA-1",(new TextEncoder).encode(t)).then(s=>Res.loadBgm(Array.from(new Uint8Array(s)).map(t=>t.toString(16).padStart(2,"0")).join(""),t)).then(s=>this.bgmSrc[t]=s).catch(d));break;case 3:this.bgmSrc[t]||(s++,this.bgmSrc[t]="0",Res.loadBgm(t,`https://music.163333.com/song/media/outer/url?id=${t}.mp3`).then(s=>this.bgmSrc[t]=s).catch(d))}l.bgm.a=0!==l.bgm.a,l.bgm.l=0!==l.bgm.l}else l.bgm.m=1}l.vM=2===l.view}),this.#W=this.GUI.ap(El("div","ab a-cen").tx("Paused")),this.#W._h(),css(this.#W,{inset:0,background:"#0005",font:"64px/608px orb",color:"#fff",textShadow:"0 0 8px #000, 0 0 16px #000"}),this.sTime=$("g-time")??{tx(t){this._=t,doc.title=`${$R.G.N} 　 Time: ${$R.sTime._}　Death: ${$R.sDth._}`}},this.sDth=$("g-dth")??{tx:this.sTime.tx},this.sTime.val=0,this.sTime.tx("00:00:00"),this.sDth.tx("0"),this.sRoom=$("g-room"),this.sRoom&&this.#k?(this.sPlyX=$("g-plyX"),this.sPlyY=$("g-plyY"),this.sPlyA=$("g-plyA"),this.sFps=$("g-fps"),this.sRps=$("g-rps"),this.sPer=$("g-per"),this.sPerD=$("g-perD"),this.fps=-1,this.rps=0,this.per=0,this.perD=0,this.fpsT=0,this.#O=this.mRun.bind(this),this.draw=this.mDraw.bind(this)):(this.#O=this.main.bind(this),this.draw=this.#H.bind(this));const m=Res.loadUp;Res.reset(s),Res.loadUp=()=>{this.resPool.slice(0,2).for(t=>t.for(t=>this.rr.addSpr(t)));for(let t in this.resPool[2]){let s=this.resPool[2][t];s.length?this.rr.addSpr(s):s.m<3&&(s.c=[s.c],s.c.w=s.c[0].width,s.c.h=s.c[0].height,this.rr.addSpr(s.c))}this.rr.init().then(()=>{Res.loadUp=m,m()}).catch(s=>{Res.loadUp=m,console.error(s),UI.$a("渲染引擎初始化失败").then(()=>t(s))})},console.timeEnd("Init")}exit(){Object.values(this.bgmSrc).for(t=>{"0"!==t&&URL.revokeObjectURL(t)}),this.bgm.destroy(),$c("surf",$("screen")).for(t=>t.remove());for(let t of this.GUI.ch)t.remove();this.rr.free(),this.G=null,this.end(),$R=null}#q(){this.#X=0,this.#G=Date.now(),this.#Y=0,this.VAR={...this.G.VAR},this.sTime.tx("00:00:00"),this.sDth.tx("0")}start(t,s){this.#U=s,this.#U&&(this.#F=saveCache?$M.cp(saveCache):null),this.L=[];for(let t=0;t<12;t++)this.L[t]=new _C.L(t);this.Col={_:null,c:[{m:(t,s,e,i,h,r,a)=>{if(this.$){let s=Math.round(this.$.B[0]),e=Math.round(this.$.B[1]),o=Math.round(this.$.B[2]),n=Math.round(this.$.B[3]);if(r>s&&a>e&&i<o&&h<n&&this.$._meet(0,0,s,e,o,n,t))return this.$}return null}},{o:[],m(t,s,e,i,h,r,a){for(let s=0;s<this.o.length;s++){let e=this.o[s];if(e.des>0){let s=e.B[0],o=e.B[1],n=e.B[2],l=e.B[3];if(r>s&&a>o&&i<n&&h<l&&e._meet(0,0,s,o,n,l,t))return e}}return null}}]},this.colS=[],this.colT=[],$C.kRA(),this.dvX=this.dvY=Infinity,this.#$=!1,this.#q(),this.room=-1,this.fls=0,-1===t?this.#F?this.load():this.roomTo(0):this.roomTo(t??this.startR),this.main(),(this.plyX||this.plyY)&&this.save(),this.spd=20,this.draw()}end(){cancelAnimationFrame(this.drawId),clearInterval(this.run),this.run=0}save(t=!0,s,e){if(this._r&&0!==this._r.type&&4!==this._r.type&&(t||this.#F)){if(t&&(this.#F={r:this._r.id,x:s??this.plyX,y:e??this.plyY,v:{...this.VAR}},this.$)){let t=this._r.bobj.ply;t.sJump&&(this.#F.j=this.$.jump),t.sGravDir&&(this.#F.gd=this.$.g_)}return Object.assign(this.#F,{time:this.#X,death:this.#Y}),this.#U&&(saveCache=this.#F),!0}}load(){let t=this.#F;if(!t)return;this.VAR={...t.v},this.#X=t.time,this.#Y=t.death,this.sDth.tx(this.#Y);let s=this.G.R.findIndex(s=>s.id===t.r);if(this.G.R[s]){let e=this.G.R[s].type;if(0===e||4===e)return;this.roomTo(s,t.x,t.y)}}pause(){this._r&&(this.run?(clearInterval(this.run),this.run=0,this.#W._s()):(this.run=setInterval(this.#O,this.#j),this.#W._h(),this.#G=Date.now()))}initPly(t){const s=this._r.bobj.ply;t.jump=s.sJump?this.#F?.j??s.jump:s.jump,t.g_=s.sGravDir?this.#F?.gd??s.g_:s.g_,t.conShoot=s.conShoot,t.adMove=s.adMove,t._grav=.4,t._moveSpd=3}dec(t){t.grp.for(t=>t.o.length=0);for(let s=0;s<this.L.length;s++)this.L[s].clear(),t._o[s].for(s=>{let e=new _C.R(s.ind,s.x,s.y,s.dep,s.spr);if(Object.assign(e,s.add),e.gpi&&(e.grp=t.grp[e._gi],e.grp.o.push(e)),10===s.ind){let i=t.grp[e._gid];i.c=e,e.grpO=i.o,0===i.m&&(e._gp=[],i.p.for((t,i)=>{t&&(e._gp[i]={x:t.x-s.x,y:t.y-s.y})}))}});if(2===t.out&&[[0,-32,t.w/32,1],[-32,-32,1,t.h/32+2],[0,t.h,t.w/32,1],[t.w,-32,1,t.h/32+2]].for(s=>{let e=new _C.R(3,s[0],s[1],7,Lib._o[3].spr.map(s=>t.Spr[s]));e.hd=1,e.cm=2,e.scx=s[2],e.scy=s[3]}),0===t.type&&(t.x=t.y=0),this.#A||this.#P)this.$=new _C.Y(this.#A,this.#P);else if(t.x||t.y){this.$=new _C.Y(t.x,t.y);let s=this.$.g_;270!==s&&(this.$.g_=270,this.$.setGrav(s))}else this.$=null;this.updView(1),this.activate(1)}roomTo(t,s=0,e=0){console.time("Room"+t);let i=this.G.R[t];this.room!==t&&(i.bgm.m&&(1===i.bgm.m||"0"===this.bgmSrc[i.bgm.i]?this.bgm.stop():(this.bgm.vol=i.bgm.v??100,this._r&&this._r.bgm.i===i.bgm.i?this._r.bgm.l!==i.bgm.l&&(this.bgm.loop=i.bgm.l,i.bgm.a&&i.bgm.l&&0===this.bgm.state&&this.bgm.play()):(this.bgm.url=this.bgmSrc[i.bgm.i],this.bgm.loop=i.bgm.l,i.bgm.a&&this.bgm.play()))),this.room=t,this._r=i,i.bg.m>2?this.BG.style.background=i.bg.c:this.BG.style.background="#000"),this.plyX=0,this.plyY=0,this._vX=0,this._vY=0,this.sfX=0,this.sfY=0,this.#J=-1,this.Col.c[1].o.length=0,this.Col._?this.Col._.clear():this.Col._=new _C.C(Lib._o.length+3+1),this.Col._.setWH(i.w,i.h,32),this.trg=[],this.counter=[],this.#A=s,this.#P=e,this.dec(i),this.vC=!1,this.#F?(1===i.type&&(this.#F.clr=1),this.#z=1+(this.#F.clr??0)):this.#z=0,this.bgmTime=this.bgm.time,this.sRoom&&(this.sRoom.innerText=this._r.name),console.timeEnd("Room"+t)}#K=[0,"#000"];#Q=null;#J=-1;warp(t,s,e=0,i=0){let h=128===t?this.room+1:this.G.R.findIndex(s=>s.id===this._r.id+t);if(this.G.R[h])switch(this.$&&(this.$.frozen=!0),s.length||(s=this.#K),"#"!==s[1]?.[0]&&(s[1]="#000"),this.warpTo=h,this.warpS=s,this.warpX=e,this.warpY=i,s[0]){case 1:this.#J=0;break;case 2:this.#Q={sc:0,ang:0,col:s[1],asp:s[2]*Math.DR,move(){this.sc=1.1*this.sc+1,this.ang-=this.asp},draw(){const t=$R.sfM;t.save(),t.translate(400,304),t.rotate(this.ang),t.fillStyle=this.col,t.globalAlpha=1,t.fillRect(-4*this.sc,-3*this.sc,8*this.sc,6*this.sc),t.restore(),t.clr=!0}},this.#J=35;break;case 3:if(this.#Q={x:-1e3,y:0,sc:512,col:s[1],stage:0,move(){this.stage?(this.sc+=10+this.sc/32,this.sc>=800&&($R.sfM.clr=!0,$R.#Q=null)):this.sc&&(this.sc-=10+this.sc/32,this.sc<0&&(this.sc=0)),this.vX=$R.vX,this.vY=$R.vY},draw(){const t=$R.sfM;if(t.save(),t.fillStyle=this.col,t.globalAlpha=1,t.fillRect(0,0,800,608),this.sc){t.globalCompositeOperation="destination-out";let s=400,e=304;-1e3!==this.x&&(s=this.x-this.vX,e=this.y-this.vY),t.beginPath(),t.arc(s,e,this.sc,0,Math.PI2),t.fill()}t.restore()}},this.$){this.#Q.x=this.$.x,this.#Q.y=this.$.y;const t=this.$.x-this._vX,s=this.$.y-this._vY;this.#Q.sc=1.42*Math.max(t,s,800-t,608-s)<<0}let t=this.#Q.sc,e=0;for(;t>0;)t-=10+t/32,e++;this.#J=e+8;break;default:this.flash(s[1],0,1,25),this.#J=30}}flash(t,s,e,i){this.sfM.fillStyle=t,this.flf=s,this.flt=e,this.fls=(e-s)/i}get vX(){return Math.round(this._vX)}set vX(t){let s=Math.round(t)!==Math.round(this._vX);this._vX=t,s&&(this.vC=!0)}get vY(){return Math.round(this._vY)}set vY(t){let s=Math.round(t)!==Math.round(this._vY);this._vY=t,s&&(this.vC=!0)}updView(t=0){let s=this._r;if(s.vM){let e=Math.mM(this.plyX-400,0,s.w-800),i=Math.mM(this.plyY-304,0,s.h-608);t?(this.sfX=Math.round(this._vX=e),this.sfY=Math.round(this._vY=i)):(this._vX+=(e-this._vX)/10,this._vY+=(i-this._vY)/10,(Math.abs(this._vX-this.sfX)>this.vMargin-32||Math.abs(this._vY-this.sfY)>this.vMargin-32)&&(this.sfX=Math.round(this._vX),this.sfY=Math.round(this._vY),this.vC=!0))}else this.sfX=this.vX=800*(this.plyX/800<<0),this.sfY=this.vY=608*(this.plyY/608<<0)}activate(t=0){let s=this._r.vM?this.vMargin:32,e=this.vX,i=this.vY;this.upd=!0,e-=s,i-=s;let h=e+800+2*s,r=i+608+2*s;if(t)for(let t=0;t<this.L.length;t++){const s=this.L[t].o;for(let t=0;t<s.length;t++)s[t].init(),s[t].activate(e,i,h,r)}else for(let t=0;t<this.L.length;t++){this.L[t].a.length=0;const s=this.L[t].o;for(let t=0;t<s.length;t++)s[t].activate(e,i,h,r)}}get time(){return this.#X}get dth(){return this.#Y}addDth(){this.sDth.tx(++this.#Y)}get svS(){return this.#z>0|0}get tSec(){return this.#X/1e3<<0}get saveX(){return this.#F?.x}get saveY(){return this.#F?.y}get spd(){return this.#j}set spd(t){this.#k||this.#V||(t=20),this.#j!==t&&(this.#j=t,this.run&&clearInterval(this.run),this.run=setInterval(this.#O,t))}get god(){return this.#N}set god(t){this.#k&&(this.#N=t)}dragPly(t,s){this.#k&&this.$&&!this.$.frozen&&(this.$=new _C.Y(Math.round(t+this._vX),Math.round(s+this._vY)))}newGame(){const t=()=>{this.G.R[this.room+1]&&(this.flash("#000",0,1,40),this.#J=50,this.startMode=1,this.#F=null)};this.$&&(this.$.frozen=!0),this.#F?UI.$q("确定要重新开始游戏？").then(s=>{s.i?this.$&&(this.$.frozen=!1):t()}):t()}loadGame(){this.#F&&(this.$&&(this.$.frozen=!0),this.flash("#000",0,1,40),this.#J=50,this.startMode=2)}main(){if((this.#J>0||UI.bg.n)&&$C.kPA(),-1===this.#J)this._r.type&&!this.#Q&&($C.P("f2")?(this.$&&(this.$.frozen=!0),this.flash("#000",0,1,40),this.#J=50,this.warpTo=this.startR,this.warpX=this.warpY=0,this.warpS=this.#K):$C.P("r")&&(4===this._r.type?this.roomTo(this.room):(this.save(!1),this.load())));else if(0===this.#J)switch(this.save(!1),this.startMode){case 0:switch(this.roomTo(this.warpTo,this.warpX,this.warpY),this.warpS[0]){case 1:break;case 3:const t=this.#Q;this.$&&(t.x=this.$.x,t.y=this.$.y),t.x+=this.vX-t.vX,t.y+=this.vY-t.vY,t.stage=1;break;default:this.#Q=null,this.flash(this.warpS[1],1,0,25)}break;case 2:this.startMode=0,this.load(),this.flash("#000",1,0,25);break;case 1:this.startMode=0,this.#q(),this.roomTo(this.room+1),this.flash("#000",1,0,25),this._r.type&&(this.plyX||this.plyY)&&this.save()}else this.#J--;let t=this.Col.c[1].o;for(let t=0;t<this.L.length;t++)this.L[t].iter(t=>t.step0());for(let t=0;t<this.L.length;t++)this.L[t].iter(t=>t.timer());this.$&&this.$.step();for(let t=0;t<this.L.length;t++)this.L[t].iter(t=>t.step1());for(let t=0;t<this.L.length;t++)this.L[t].iter(t=>t.move());this._r.grp.for(t=>{!t.c.m_||t.c.gpi&&t.c.grp.c.m_||t.c.updGrp()}),this.L.for(t=>t.iter(t=>t.colli()));let s=0,e=[];for(;this.colS.length&&s++<500;){for(;this.colS.length;){let t=this.colS.shift();t.h_+=t.outH,t.v_+=t.outV,t.outH=0,t.outV=0,(t.outX||t.outY)&&(t.moveB(t.outX,t.outY),t.outX=0,t.outY=0,$R.Col._.upd(t)),t.outIn=!0,t.outF&&(e.push(t),t.outF=!1)}for(let t=0;t<this.colT.length;t++)this.colT[t]._colli()}e.for(t=>{Math.round(t.x)===Math.round(t.xp)?t.x=t.xp:t.m_=2,Math.round(t.y)===Math.round(t.yp)?t.y=t.yp:t.m_=2;let s=t.h_;t.h_++,t.$hvspd(s,t.v_),t.outF=!0}),this.colT.length=0,this.colS.length=0,this.$&&this.$.move(),t.for(t=>t.move());for(let t=0;t<this.L.length;t++)this.L[t].iter(t=>t.step2());this.$&&this.$.colli();for(let s=t.length;s--;)t[s].colli(),t[s].des<=0&&t.splice(s,1);for(let t=0;t<this.L.length;t++)this.L[t].gc();const i=this.trg;for(let t=i.length;t--;)1===i[t]?i[t]=2:3===i[t]&&(i[t]=0);this.fls&&(Math.abs(this.flt-this.flf)>Math.abs(this.fls)?this.flf+=this.fls:(this.flf=this.flt,this.fls=0)),this.#Q&&this.#Q.move(),this._r.bgm.m>1&&this._r.bgm.s&&1===this.bgm.state?(Math.abs(this.bgmTime-this.bgm.time)>.2&&(this.bgm.time=this.bgmTime),this.bgmTime+=.02,this.bgm.len&&this.bgmTime>this.bgm.len&&(this.bgmTime-=this.bgm.len)):this.bgmTime&&0===this.bgm.state&&(this.bgmTime=0),$C.kCA(),this.updView(),this.vC&&(this.vC=!1,this.activate());let h=Date.now();2!==this._r.type||this.#F?.clr||(this.#X+=h-this.#G);let r=this.tSec;r!==this.sTime.val&&(this.sTime.val=r,this.sTime.tx(Date.cT(r))),this.#G=h,this.#$=!0}mRun(){let t=performance.now();this.main(),this.fps++,this.per+=performance.now()-t;let s=Date.now()-this.fpsT;if(s>=1e3){if(this.fps){this.fps<500/this.#j?this.sFps.style.color="#d00":this.sFps.style.color="",this.sFps.innerText=this.fps,this.sRps.innerText=this.rps;let t=Math.round(this.per/5);this.sPer.style.color=t>50?"#d00":"",this.sPer.innerText=t+"%",t=Math.round(this.perD/5),this.sPerD.style.color=t>50?"#d00":"",this.sPerD.innerText=t+"%",this.fps=0,this.rps=0,this.per=0,this.perD=0}this.fpsT+=s>1500?s:1e3}if(this.sPlyX.val!==this.plyX){this.sPlyX.val=this.plyX,this.sPlyX.innerText=this.plyX.toFixed(2);let t=this.plyX%3;this.sPlyA.val!==t&&(this.sPlyA.val=t,this.sPlyA.innerText=t.toFixed(2))}this.sPlyY.val!==this.plyY&&(this.sPlyY.val=this.plyY,this.sPlyY.innerText=this.plyY.toFixed(2))}#H(){if(this.#$){if(this.sfM.clr&&(this.sfM.clearRect(0,0,800,608),this.sfM.clr=!1),this.#Q&&this.#Q.draw&&this.#Q.draw(),this.flf>0&&(this.sfM.globalAlpha=this.flf,this.sfM.fillRect(0,0,800,608),this.sfM.clr=!0,this.flf>=1))return void(this.drawId=window.requestAnimationFrame(this.draw));let t=this.vX,s=this.vY,e=this.dvX!==t||this.dvY!==s,i=this.upd||this.L.some(t=>t.upd);e&&this.rr.vC(t+400,s+304),this.upd=!1,this.dvX=t,this.dvY=s,i&&(this.L.for(t=>t.draw()),this.rr.updO()),(e||i)&&(this.rr.render(),this.rps++),this.#$=!1}this.drawId=window.requestAnimationFrame(this.draw)}mDraw(){let t=performance.now();this.#H(),this.perD+=performance.now()-t}},_C.C=class{constructor(t,s=32){this.size=s,this.grid=[];for(let s=0;s<t;s++)this.grid[s]=[]}setWH(t,s,e=32){this.outL=Math.floor(-e/this.size),this.outT=Math.floor(-e/this.size),this.outR=Math.ceil(t+e/this.size),this.outB=Math.ceil(s+e/this.size)}clear(){this.grid.for(t=>t.length=0)}add(t){const s=Math.floor(t.B[0]/this.size),e=Math.floor(t.B[1]/this.size),i=Math.ceil(t.B[2]/this.size),h=Math.ceil(t.B[3]/this.size);if(t.Bc[0]=s,t.Bc[1]=e,t.Bc[2]=i,t.Bc[3]=h,(this.outR<=s||this.outB<=e||this.outL>=i||this.outT>=h)&&!t.gpi)t.outRoom();else for(let r=0;r<t.cmL.length;r++){const a=t.cmL[r];void 0===t.cmI[a]&&(t.cmI[a]=[]);const o=t.cmI[a],n=this.grid[a];let l=0;for(let r=s;r<i;r++){void 0===n[r]&&(n[r]=[]);for(let s=e;s<h;s++)void 0===n[r][s]&&(n[r][s]=[]),o[l++]=n[r][s].push(t)-1}}}rm(t){const s=t.Bc[0],e=t.Bc[1],i=t.Bc[2],h=t.Bc[3];for(let r=0;r<t.cmL.length;r++){const a=t.cmL[r],o=t.cmI[a],n=this.grid[a];let l=0;for(let t=s;t<i;t++)for(let s=e;s<h;s++){const e=o[l++],i=n[t][s].length-1;if(e<i){const h=n[t][s][i],r=h.Bc[0],o=h.Bc[1],l=h.Bc[3]-o;n[t][s][e]=h,h.cmI[a][(t-r)*l+s-o]=e}n[t][s].pop()}}}upd(t){t.cB();const s=Math.floor(t.B[0]/this.size),e=Math.floor(t.B[1]/this.size),i=Math.ceil(t.B[2]/this.size),h=Math.ceil(t.B[3]/this.size);if((this.outR<=s||this.outB<=e||this.outL>=i||this.outT>=h)&&!t.gpi)t.outRoom();else{const r=t.Bc[0],a=t.Bc[1],o=t.Bc[2],n=t.Bc[3];if(s!==r||e!==a||i!==o||h!==n){t.Bc[0]=s,t.Bc[1]=e,t.Bc[2]=i,t.Bc[3]=h;for(let l=0;l<t.cmL.length;l++){const c=t.cmL[l],d=t.cmI[c],f=this.grid[c];let p=0;for(let t=r;t<o;t++)for(let s=a;s<n;s++){const e=d[p++],i=f[t][s].length-1;if(e<i){const h=f[t][s][i],r=h.Bc[0],a=h.Bc[1],o=h.Bc[3]-a;f[t][s][e]=h,h.cmI[c][(t-r)*o+s-a]=e}f[t][s].pop()}p=0;for(let r=s;r<i;r++){void 0===f[r]&&(f[r]=[]);for(let s=e;s<h;s++)void 0===f[r][s]&&(f[r][s]=[]),d[p++]=f[r][s].push(t)-1}}}}}swap(t,s){t.cmL.length||t.cB();const e=Math.floor(t.B[0]/this.size),i=Math.floor(t.B[1]/this.size),h=Math.ceil(t.B[2]/this.size),r=Math.ceil(t.B[3]/this.size);t.Bc[0]=e,t.Bc[1]=i,t.Bc[2]=h,t.Bc[3]=r,t.cmL.for(a=>{if(!s.includes(a)){const s=t.cmI[a],o=this.grid[a];let n=0;for(let t=e;t<h;t++)for(let e=i;e<r;e++){const i=s[n++],h=o[t][e].length-1;if(i<h){const s=o[t][e][h],r=s.Bc[0],n=s.Bc[1],l=s.Bc[3]-n;o[t][e][i]=s,s.cmI[a][(t-r)*l+e-n]=i}o[t][e].pop()}}}),s.for(s=>{if(!t.cmL.includes(s)){t.cmI[s]??=[];const a=t.cmI[s],o=this.grid[s];let n=0;for(let s=e;s<h;s++){void 0===o[s]&&(o[s]=[]);for(let e=i;e<r;e++)void 0===o[s][e]&&(o[s][e]=[]),a[n++]=o[s][e].push(t)-1}}}),t.cmL=s}m(t,s){const e=t.B[0],i=t.B[1],h=t.B[2],r=t.B[3],a=t.Bc[0],o=t.Bc[1],n=t.Bc[2],l=t.Bc[3];for(let c=a;c<n;c++)if(this.grid[s][c])for(let a=o;a<l;a++){const o=this.grid[s][c][a];if(o)for(let s=0;s<o.length;s++){const a=o[s];if(a!==t&&h>a.B[0]&&r>a.B[1]&&e<a.B[2]&&i<a.B[3]&&t._meet(0,0,e,i,h,r,a))return a}}return null}mXY(t,s,e,i,h,r,a,o){const n=Math.floor(h/this.size),l=Math.floor(r/this.size),c=Math.ceil(a/this.size),d=Math.ceil(o/this.size);for(let f=n;f<c;f++)if(this.grid[s][f])for(let n=l;n<d;n++){const l=this.grid[s][f][n];if(l)for(let s=0;s<l.length;s++){const n=l[s];if(n!==t&&a>n.B[0]&&o>n.B[1]&&h<n.B[2]&&r<n.B[3]&&t._meet(e,i,h,r,a,o,n))return n}}return null}f(t,s,e){const i=t.B[0],h=t.B[1],r=t.B[2],a=t.B[3],o=t.Bc[0],n=t.Bc[1],l=t.Bc[2],c=t.Bc[3],d=[];for(let e=o;e<l;e++)if(this.grid[s][e])for(let o=n;o<c;o++){const n=this.grid[s][e][o];if(n)for(let s=0;s<n.length;s++){const e=n[s];e===t||e._inCol||r>e.B[0]&&a>e.B[1]&&i<e.B[2]&&h<e.B[3]&&(e._inCol=!0,d.push(e))}}for(let s=0;s<d.length;s++){const o=d[s];o._inCol=!1,t._meet(0,0,i,h,r,a,o)&&e.push(o)}}fXY(t,s,e,i,h,r,a,o,n){const l=Math.floor(h/this.size),c=Math.floor(r/this.size),d=Math.ceil(a/this.size),f=Math.ceil(o/this.size),p=[];for(let e=l;e<d;e++)if(this.grid[s][e])for(let i=c;i<f;i++){const n=this.grid[s][e][i];if(n)for(let s=0;s<n.length;s++){const e=n[s];e===t||e._inCol||a>e.B[0]&&o>e.B[1]&&h<e.B[2]&&r<e.B[3]&&(e._inCol=!0,p.push(e))}}for(let s=0;s<p.length;s++){const l=p[s];l._inCol=!1,t._meet(e,i,h,r,a,o,l)&&n.push(l)}}fL(t,s,e,i,h,r){let a=r*Math.DR,o=Math.sin(a),n=Math.cos(a),l=h*n,c=h*-o,d=(l*i-c*e)/this.size,f=Math.SQRT1_2*h,p=1,u=null,m=Math.floor(e/this.size),g=Math.floor(i/this.size),v=Math.floor((e+l)/this.size),x=Math.floor((i+c)/this.size),y=m>v?-1:1,b=g>x?-1:1;v+=y,x+=b;for(let r=m;r!==v;r+=y)if(this.grid[s][r])for(let a=g;a!==x;a+=b){const m=this.grid[s][r][a];if(m&&Math.abs(c*(r+.5)-l*(a+.5)+d)<=f)for(let s=0;s<m.length;s++){const d=m[s];if(d===t)continue;let f=d.V;for(let t=0;t<8;t+=6)for(let s=2;s<6;s+=2){let m=f[s]-f[t],g=f[s+1]-f[t+1],R=l*g-c*m,w=f[t]-e,M=f[t+1]-i;if(R){let t=(w*g-M*m)/R,s=(w*c-M*l)/R;t>=0&&t<1&&s>=0&&s<=1&&t<p&&(p=t,u=d,v=r+y,x=a+b)}else{let t=o*w+n*M,l=o*(f[s]-e)+n*(f[s+1]-i),c=(t<l?t:l)/h;c<p&&(p=c>0?c:0,u=d,v=r+y,x=a+b)}}}}return{h:p*h,o:u}}};