const Res={snd:{},spr:{},font:{},sndList:["jp","st","dth","wj","brk","ej","gj","lj","spk","chr","spr","hit","bc","coin","bst","dash"],sprList:"ply,blt,sp,wp,spk,chr,lsr,jr,spr,tp,bd,arr,xa,blk,tile,blkm,pf,bbl,kbl,ice,wt1,wt2,wt3,wt4,twt,lava,wj,sbl,crt,cvy,ld,rp,trg,btn,dbt,sw,swr,mb,tj,dj,sj,ij,lg,hg,fs,ss,gu,gd,tree,cld,moon,star,grs,pst,dko,dkf,son,sof,sg,ist,ifg,txt".split(","),fontList:[["Default",4,"思源黑体(默认)"],["AveriaSansLibre",3],["Bangers",0],["Grenze",3],["HanaleiFill",0],["HappyZCool",4,"站酷快乐体"],["JotiOne",0],["Jua",0],["KarmaticArcade",0],["Orbitron",1],["Kongtext",0],["Limelight",0],["Lobster",0],["MarcellusSC",0],["OrigamiMommy",0],["Pacifico",0],["Play",1],["Quicksand",1],["Righteous",0],["SairaStencilOne",0],["Xiaolai",4,"小赖字体"],["Yukarimobile",0]],loadMax:Infinity,loadNow:0,push(){this.loadNow++,$("loadp").style.width=this.loadNow/this.loadMax*100+"%",this.loadNow===this.loadMax&&this.loadUp?.()},fail(){UI.alert("资源加载失败，请检查网络连接"),$("loading")._h(),ac($("box"))},reset(t){this.loadMax=t??this.sprList.length+1,this.loadNow=0,$("loading")._s(),$("loadp").style.width=0,dac($("box"),"")},color:{gen(t){let e=[t[0]??"",t[1]??"",t[2]??"",t[3]??""];0==e[0]&&(e[0]=""),50==e[1]&&(e[1]=""),50==e[2]&&(e[2]=""),50==e[3]&&(e[3]="");let i=e.join(",");return",,,"===i&&(i=""),i},rgb2hsl(t,e,i){let s,a,o=Math.max(t,e,i),r=Math.min(t,e,i),l=(o+r)/510;if(o===r)s=a=0;else{let n=o-r;a=n/(l>.5?510-o-r:o+r),o===t?s=(e-i)/n+(e<i?6:0):o===e?s=(i-t)/n+2:o===i&&(s=(t-e)/n+4)}return[s,a,l]},hsl2rgb(t,e,i){let s,a,o;if(e=Math.mM(e,0,1),i=Math.mM(i,0,1),0===e)s=a=o=i;else{const r=(t,e,i)=>(i+=i<0?6:i>6?-6:0)<1?t+(e-t)*i:i<3?e:i<4?t+(e-t)*(4-i):t;let l=i<.5?i*(1+e):i+e-i*e,n=2*i-l;s=r(n,l,t+2),a=r(n,l,t),o=r(n,l,t-2)}return[Math.round(255*s),Math.round(255*a),Math.round(255*o)]},draw(t,e,i){let s=(i||",,,").split(","),a=t.width,o=t.height,r=t.getContext("2d"),l=s[0]/60,n=""===s[1]?0:s[1]/50-1,h=""===s[2]?0:s[2]/50-1,c=""===s[3]?1:s[3]/50;if(r.clearRect(0,0,a,o),r.drawImage(e,0,0),0===l&&0===n&&0===h&&1===c)return;c>1?c=2*c-1:c<-1&&(c=2*c+1);let d=r.getImageData(0,0,a,o),f=d.data;for(let t=a*o;t--;){let e=t<<2,[i,s,a]=this.rgb2hsl(f[e],f[e+1],f[e+2]),[o,r,d]=this.hsl2rgb(i+l,s+n,(a-.5)*c+.5+h);f[e]=o,f[e+1]=r,f[e+2]=d}r.putImageData(d,0,0)}},loadSnd(t){return new Promise((e,i)=>Au.onready(()=>{const s=s=>Au.ctx.decodeAudioData(s,i=>{let s={src:i};this.snd[t]=s,this.push("sound "+t),e(s)},i);CIW.onready(()=>CIW.get("snd",t).then(t=>t.b.arrayBuffer().then(s,i),e=>$M.xhr("GET",R_L+"snd/"+t+".ogg","blob",null,2e4).then(e=>{e.response.arrayBuffer().then(i=>{CIW.put("snd",{id:t,b:e.response}),s(i)}).catch(i)}).catch(i)))}))},initSpr(t,e){e||(e={}),t.x=e.x??0,t.y=e.y??0,t.n=e.n??1,t.px=!!e.p,t.ims=e.s??0,t.tile="blk"===e.c||"tile"===e.c,e.b&&(t.bL=e.b[0],t.bT=e.b[1],t.boxW=e.b[2],t.boxH=e.b[3],t.boxL=t.x-t.bL,t.boxT=t.y-t.bT,t.b=e.b),"ply"===e.c&&(t.n=16)},loadSpr(t,e,i,s,a){return new Promise((o,r)=>{let l,n=new Image;l=s?a??[]:this.spr[t]?this.spr[t]:this.spr[t]=[],l.name=t,l.f=[],l.on=t=>l.f.push(t),CIW.onready(async()=>{if(await doc.fonts.ready,"_"===e[0]){let i=Res.loc.find(t=>t.id.slice(0,10)===e);if(i)return this.initSpr(l,i),void(n.src=i.d);e=Lib.thm[Res.sprList.findIndex(e=>e===t)]}CIW.get("img",e+t).then(t=>{this.initSpr(l,t),n.src=t.d},i=>{"number"==typeof e?(n.crossOrigin="anonymous",n.src=`${R_L}img/thm/${e}/${t}.png`,this.initSpr(l,Lib.spr[t])):DB.O("Sprite",e).fetch().then(t=>{let e=t.toJSON();this.initSpr(l,e),n.src=PNG+e.d},r),n.isNew=!0})}),n.onload=async()=>{let s=null,a=n.width,h=n.height,c=El("canvas",0,{width:a,height:h}),d=c.getContext("2d");d.drawImage(n,0,0),n.isNew&&(s=CIW.put("img",{id:e+t,c:t,d:c.toDataURL(),x:l.x,y:l.y,n:l.n,p:l.px,s:l.ims,t:l.tile,b:l.b})),delete l.b,i&&this.color.draw(c,n,i),l.src=n,l.length&&(l.length=0);try{if(l.tile){160===a&&(a=128),l.w=l.h=32;for(let t=0;t<h;t+=32)for(let e=0;e<a;e+=32)l.push(await createImageBitmap(c,e,t,32,32));if(128===a)for(let t=0;t<h;t+=32)l.push(await createImageBitmap(c,128,t,32,32))}else{a/=l.n,l.w=a,l.h=h;for(let t=0;t<l.n;t++)l.push(await createImageBitmap(c,t*a,0,a,h))}l.boxW||(l.bL=l.bT=0,l.boxW=l.w,l.boxH=l.h,l.boxL=l.x,l.boxT=l.y),l.mask=[];for(let t=0;t<l.n;t++)if(l.mask[t]=[],l.px){let e=d.getImageData(t*a+l.bL,l.bT,l.boxW,l.boxH).data;for(let i=0,s=l.boxW*l.boxH;i<s;i++)l.mask[t][i]=e[4*i+3]>80?1:0}else for(let e=0,i=l.boxW*l.boxH;e<i;e++)l.mask[t][e]=1;s&&await s,l.ready=!0,this.push("sprite "+t),l.f.for(t=>t(l)),l.f.length=0,o(l)}catch(t){r(t)}},n.onerror=r})},async colSpr(t,e){let i=t.src,s=El("canvas",0,{width:i.width,height:i.height});if(this.color.draw(s,i,e),t.length=0,t.tile){let e=i.width,a=i.height;160===e&&(e=128);for(let i=0;i<a;i+=32)for(let a=0;a<e;a+=32)t.push(await createImageBitmap(s,a,i,32,32));if(128===e)for(let e=0;e<a;e+=32)t.push(await createImageBitmap(s,128,e,32,32))}else for(let e=0;e<i.width;e+=t.w)t.push(await createImageBitmap(s,e,0,t.w,t.h))},loadBg(t,e,i){return new Promise(async(s,a)=>{await doc.fonts.ready;let o=i?t:{...t};if(3===t.m)this.push("background color"),s(o);else if(t.m>3){let e,i,a=El("canvas",0,{width:800,height:608}),r=a.getContext("2d"),l=t.g.split(",");if(4===t.m){let s=t.g.indexOf(":"),a=t.g.slice(0,s)*Math.PI/180;l[0]=l[0].slice(s+1),e=400*Math.cos(a),i=304*Math.sin(a)}let n=4===t.m?r.createLinearGradient(400-e,304+i,400+e,304-i):r.createRadialGradient(400,304,0,400,304,500);l.for(t=>n.addColorStop(Number(t.slice(7)),"#"+t.slice(0,6))),r.fillStyle=n,r.fillRect(0,0,800,608),this.push("background gradient"),o.c=a,s(o)}else{let i=new Image;CIW.onready(()=>{if("_"===t.id[0]){let e=Res.loc.find(e=>e.id.slice(0,10)===t.id);if(e)return void(i.src=e.d);t.id=0}CIW.get("img",t.id+"bg").then(t=>i.src=t.d,e=>{$("loading")._s(),"number"==typeof t.id?(i.crossOrigin="anonymous",i.src=`${R_L}img/thm/${t.id}.png`):DB.O("Sprite",t.id).fetch().then(t=>i.src=CDU(t.get("d")),a),i.isNew=!0})}),i.onload=()=>{o.c=El("canvas",0,{width:i.width,height:i.height}),o.i=i,o.c.getContext("2d").drawImage(i,0,0),i.isNew&&CIW.put("img",{id:t.id+"bg",c:"bg",d:o.c.toDataURL()}),t.g&&this.color.draw(o.c,i,t.g),e||this.push("background image"),s(o)},i.onerror=a}})},loadFont([t,e]){return new Promise(async(i,s)=>{if(await doc.fonts.ready,this.font[t])return this.push("font "+t),i(t);const a=t=>{"Default"!==t.id&&t.b.forEach(async(e,i)=>{let s=new FontFace("_"+t.id,`url(${URL.createObjectURL(e)})`,{weight:1&i?"bold":"normal",style:2&i?"italic":"normal"});await s.load(),doc.fonts.add(s)});let e=t.b.map(t=>$M.read(t));Promise.all(e).then(e=>{this.font[t.id]=e,this.push("font "+t.id),i(t.id)},s)};CIW.onready(()=>CIW.get("font",t).then(a,i=>{let o=[$M.xhr("GET",R_L+"font/"+t+".woff2","blob",null,2e4)];1&e&&(o.push($M.xhr("GET",R_L+"font/"+t+"-Bold.woff2","blob",null,2e4)),2&e&&(o.push($M.xhr("GET",R_L+"font/"+t+"-Italic.woff2","blob",null,2e4)),o.push($M.xhr("GET",R_L+"font/"+t+"-BoldItalic.woff2","blob",null,2e4)))),Promise.all(o).then(e=>{let i={id:t,b:e.map(t=>t.response)};a(i),CIW.put("font",i)}).catch(s)}))})},getCSSFont(t=0,e=0){let i=this.fontList[t],s=`@font-face{font-family:_${i[0]};src:url(${this.font[i[0]][e]})`;return 1&e&&(s+=";font-weight:bold"),2&e&&(s+=";font-style:italic"),s+"}"},onlyASCII:t=>-1===t.search(/[^\w\s'"\?\!\,\.\-]/),hasEmoji:t=>-1!==t.search(/\p{Emoji_Presentation}/u),svgTxt(t){let e=this.fontList[t.ftf][1]&t.ftt,i=4&this.fontList[t.ftf][1]||this.onlyASCII(t.txt);return`data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='${t.w}' height='${t.h}'><style>${this.getCSSFont(t.ftf,e)}${i?"":this.getCSSFont()}</style><foreignObject x='0' y='0' width='${t.w}' height='${t.h}'><div xmlns='http://www.w3.org/1999/xhtml' style='white-space:pre-wrap;font:${2&t.ftt?"italic ":""}${1&t.ftt?"bold ":""}${t.fts}px _${this.fontList[t.ftf][0]}, _Default, _emoji;text-align:${0===t.fta?"left":1===t.fta?"center":"right"};color:%23${t.ftc.slice(1)};${t.fsd?"text-shadow:0 0 "+t.fsd+"px %23"+t.fsc.slice(1)+";":""}${t.fst?"-webkit-text-stroke:"+t.fst+"px %23"+t.fkc.slice(1)+";":""}margin:8px 16px'>${t.txt.replaceAll("&","&amp;").replaceAll("<","&lt;")}</div></foreignObject></svg>`},svgGO(t){let e=this.fontList[t.ftf1][1]&t.ftt1,i=4&this.fontList[t.ftf1][1]||this.onlyASCII(t.txt1),s=this.fontList[t.ftf2][1]&t.ftt2,a=4&this.fontList[t.ftf2][1]||this.onlyASCII(t.txt2);return`data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='608'><style>${this.getCSSFont(t.ftf1,e)}${t.ftf2===t.ftf1&&e===s?"":this.getCSSFont(t.ftf2,s)}${i&&a?"":this.getCSSFont()}</style><foreignObject x='0' y='0' width='800' height='608'><div xmlns='http://www.w3.org/1999/xhtml' style='position:absolute;width:800px;top:50%;transform:translateY(-50%)'><div style='white-space:pre-wrap;font:${2&t.ftt1?"italic ":""}${1&t.ftt1?"bold ":""}${t.fts1}px _${this.fontList[t.ftf1][0]}, _Default;text-align:${0===t.fta1?"left":1===t.fta1?"center":"right"};color:%23${t.ftc1.slice(1)};${t.fsd1?"text-shadow:0 0 "+t.fsd1+"px %23"+t.fsc1.slice(1)+";":""}${t.fst1?"-webkit-text-stroke:"+t.fst1+"px %23"+t.fkc1.slice(1)+";":""}'>${t.txt1.replaceAll("&","&amp;").replaceAll("<","&lt;")}</div><div style='white-space:pre-wrap;font:${2&t.ftt2?"italic ":""}${1&t.ftt2?"bold ":""}${t.fts2}px _${this.fontList[t.ftf2][0]}, _Default;text-align:${0===t.fta2?"left":1===t.fta2?"center":"right"};color:%23${t.ftc2.slice(1)};${t.fsd2?"text-shadow:0 0 "+t.fsd2+"px %23"+t.fsc2.slice(1)+";":""}${t.fst2?"-webkit-text-stroke:"+t.fst2+"px %23"+t.fkc2.slice(1)+";":""}'>${t.txt2.replaceAll("&","&amp;").replaceAll("<","&lt;")}</div></div></foreignObject></svg>`},dlImg(t,e){return new Promise((i,s)=>{let a={},o=new Image;"number"==typeof t?(o.crossOrigin="anonymous","bg"===e?o.src=`${R_L}img/thm/${t}.png`:(o.src=`${R_L}img/thm/${t}/${e}.png`,this.initSpr(a,Lib.spr[e]))):DB.O("Sprite",t).fetch().then(t=>{let i=t.toJSON();this.initSpr(a,i),o.src="bg"===e?CDU(i.d):PNG+i.d},s),o.onload=()=>{let r=El("canvas",0,{width:o.width,height:o.height});r.getContext("2d").drawImage(o,0,0);let l={id:t+e,c:e,d:r.toDataURL(),x:a.x,y:a.y,n:a.n,p:a.px,s:a.ims,t:a.tile,b:a.b};for(let t in l)void 0===l[t]&&delete l[t];CIW.put("img",l).then(()=>i(l),s)},o.onerror=s})},loadBgm(t,e){return new Promise((i,s)=>{CIW.onready(()=>CIW.get("bgm",t).then(e=>{this.push("bgm "+t),i(URL.createObjectURL(e.b))},a=>Ipc.dl(e,t+".mp3",2,e=>{e?$M.xhr("GET","/tmp/"+t+".mp3","blob").then(e=>{CIW.put("bgm",{id:t,b:e.response}),this.push("bgm "+t),i(URL.createObjectURL(e.response))}).catch(s):s()})))})}},Au={init(){this.ctx=new AudioContext,this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.setVol(App.gC("run","vol")),this.ready.for(t=>t()),delete this.ready,this.rd=!0},rd:!1,ready:[],onready(t){this.rd?t():this.ready.push(t)},setVol(t){this.gain.gain.value=2**(t/100)-1},Bgm:class{constructor(){this.au=new Audio,this.au.crossOrigin="anonymous",this.src=Au.ctx.createMediaElementSource(this.au),this.gain=Au.ctx.createGain(),this.src.connect(this.gain),this.gain.connect(Au.gain),this._s=0}get state(){return this.au.ended?0:this._s}set url(t){this.au.src=t}set loop(t){this.au.loop=t}set vol(t){this.gain.gain.value=t/100}play(){this.au.play().then(()=>this._s=1)}pause(){this.au.pause(),this._s=2}stop(){this.au.pause(),this.au.currenTime=0,this._s=0}destroy(){this.src.disconnect(),this.gain.disconnect()}},play(t,e){let i=Res.snd[t];if(!i)return;let s=this.ctx.createBufferSource();s.buffer=i.src,e&&(s.playbackRate.value=e),s.connect(this.gain),s.start(0)}};doc.fonts.ready.then(()=>requestIdleCallback(()=>Au.init(),{timeout:2e3}));