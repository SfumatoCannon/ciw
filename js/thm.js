$E.ThmLib={thm:El("div"),spr:El("div"),detail:El("div","ab"),sprSrc:null,cid(t){let e="_"===t.id[0]?t.id:t.id.slice(0,-t.c.length);if(10!==e.length&&isNaN(Number(e)))throw"Error id";return e.length<10?Number(e):e},pv(t,e,i,s,r){let a=El("div","thm"),h=a.ap(El("div","thm-pv"));h.id="pv-"+t.id,a._h();let l=new Image;return l.src=$M.c(e),l.onload=()=>{let e=1;if("bg"===t.c)i=800,s=608,e=.25;else for(i=t.t?i??32:l.width/(t.n??1),s=t.t?s??32:l.height;i*e>256||s*e>152;)e/=2;a._s(),css(h,{width:i+"px",height:s+"px",background:`url(${l.currentSrc}),var(--bg32)`,zoom:e})},r?(a.ap(El("p").tx(r)),a.onclick=()=>{let e=$("thmSrc");e&&(e.id=""),this.thmSrc=t,a.id="thmSrc"}):("_"===t.id[0]?a.ap(El("p")).ap(UI.span(UI.ico("trash"))).onclick=e=>{e.stopPropagation(),UI.confirm("0{73}").then(e=>{e.i||(Res.loc.splice(Res.loc.indexOf(t),1),a.remove())})}:a.style.lineHeight=0,a.onclick=()=>{let e=$("thmSrc");if(e&&(e.id=""),this.sprSrc=this.cid(t),a.id="thmSrc","bg"===t.c)return;this.detail.lastChild.innerHTML="";let i=l.width,s=l.height,r=Lib.spr[t.c],h="0{74}"+r.W,d="0{74}"+r.H;r.w&&(h=r.w),r.h&&(d=r.h),this.detail.ch[2].tx(r.t?"0{75}: 32×32 | 32×64 | 64×64 | 160×128":`0{76}: ${r.d?"0{74} 20":r.n??1}, 0{77}: 0{78} ${h}px, 0{79} ${d}px`),"_"===t.id[0]?this.detail.ch[1].rC("gray"):this.detail.ch[1].aC("gray"),this.detail.lastChild.ap(this.drawPv(i,s,l)),t.t||this.showPro(t,i/t.n,s),this.detail._s()}),a},init(){["0{7a}","0{7b}"].for(t=>this.thm.ap(El("div","setcat").tx(t),El("div","setpage"))),["0{7a}","0{7b}","0{7c}"].for(t=>this.spr.ap(El("div","setcat").tx(t),El("div","setpage"))),this.thm.style.height=this.spr.style.height="384px",UI.bindCat(this.thm),UI.bindCat(this.spr);let t=$c("setpage",this.thm);css(t,{bottom:"64px"}),t[0].set=()=>{t[0].innerHTML="",$E._R.for(e=>{let i=t[0].ap(El("div","thm").tx(e.name));i.onclick=()=>{let t=$("thmSrc");t&&(t.id=""),i.id="thmSrc",this.thmSrc={o:e.spr,c:e.col,b:e.bg}}})},t[1].set=()=>{this.thm.loaded||CIW.find("thm").then(e=>{let i=new Date(0);e.for(e=>{t[1].ap(this.pv(e,e.p,64,64,e.n));let s=new Date(e.createdAt);s>i&&(i=s)}),this.thm.loaded=!0,DB.Q("Theme").equalTo("s",0).greaterThan("createdAt",i).find().then(e=>e.for(e=>{let i=e.toJSON();i.id=i.objectId,delete i.objectId,delete i.ACL,delete i.updatedAt,t[1].ap(this.pv(i,i.p,64,64,i.n)),CIW.put("thm",i)}))})};let e=$c("setpage",this.spr);css(e,{bottom:"64px"}),this.spr.loaded={},e[0].set=()=>{this.detail._h(),e[0].innerHTML="",$E._R.for(t=>{let i=e[0].ap(El("div","thm").tx(t.name));i.onclick=()=>{let e=$("thmSrc");e&&(e.id=""),i.id="thmSrc",this.sprSrc=t.spr[Res.sprList.findIndex(t=>t===this.cSpr)]}})},e[1].set=()=>{this.detail._h(),e[1].opened||(e[1].innerHTML="",CIW.find("img","c="+this.cSpr).then(t=>{let i=[];if(t.for(t=>{e[1].ap(this.pv(t,t.d)),i.push(this.cid(t))}),e[1].opened=!0,this.spr.loaded[this.cSpr])return;let s=this.cSpr;DB.Cloud.run("spr",{c:s}).then(t=>{if("bg"===s)for(let e=0;e<25;e++)t.push(e);t.for(t=>{i.includes(t)||Res.dlImg(t,s).then(t=>e[1].ap(this.pv(t,t.d)))})}),this.spr.loaded[this.cSpr]=!0}))},e[2].set=()=>{this.detail._h(),e[2].innerHTML="",css(e[2].ap(UI.B2(UI.ico("add")+"0{7d}").on(()=>{this.sprSrc=null,this.detail.ch[1].click()})),{verticalAlign:"top",marginTop:"8px"}),Res.loc.for(t=>{t.c===this.cSpr&&e[2].ap(this.pv(t,t.d))})},this.spr.ap(this.detail);let i=El("div","msg-cb");i.style.top=0,i.onclick=()=>this.detail._h(),this.detail.ap(i,UI.B("0{7e}").on(()=>UI.file("image/*","DataURL").then(([t])=>{let i=new Image;i.src=t,"bg"===this.cSpr?i.onload=async()=>{if(i.width>800||i.height>608)return UI.$a("0{7f}800×608");let s=this.drawPv(i.width,i.height,i).toDataURL("image/webp",1);if(t.length>>10>160&&s.length>>10>160)return UI.$a("0{7g}");{let r=await this.sim(i,"bg");if(16===r.length){let i;null===this.sprSrc?(i={id:"_"+Date.now().toString(32),c:"bg"},Res.loc.push(i)):(i=Res.loc.find(t=>t.id===this.sprSrc),$("pv-"+this.sprSrc).pN.remove()),i.d=s.length<t.length?s:t,i.h=r,e[2].ap(this.pv(i,i.d)).onclick()}else UI.confirm("0{7h}").then(t=>{t.i||(this.sprSrc=r,this.spr.nS().firstChild.click())})}}:i.onload=async()=>{let s=Lib.spr[this.cSpr],r=s.w*(s.n??1),a=s.W*(s.n??1),h=i.height;if((s.d?i.width%r!=0||i.width/r>20:s.w&&i.width!==r||s.W&&i.width>a)||s.h&&h!==s.h||s.H&&h>s.H||s.t&&!(32===i.width&&32===i.height||32===i.width&&64===i.height||64===i.width&&64===i.height||160===i.width&&128===i.height))return UI.$a("0{7i}");r=s.n?i.width/s.n:s.w??i.width;let l,d=await this.sim(i,this.cSpr,r,h);if(16!==d.length)return UI.confirm("0{7h}").then(t=>{t.i||(this.sprSrc=d,this.spr.nS().firstChild.click())});if(null===this.sprSrc?(l={id:"_"+Date.now().toString(32),c:this.cSpr},Res.loc.push(l)):(l=Res.loc.find(t=>t.id===this.sprSrc),$("pv-"+this.sprSrc).pN.remove()),Object.assign(l,{h:d,d:t,n:s.n??i.width/r,p:!!s.p,s:s.s??0,t:!!s.t,x:-1===s.x?r>>1:s.x||0,y:-1===s.y?h>>1:s.y||0}),s.d&&l.n>1&&(l.s=8),!s.t){let t;if(s.b)t=[...s.b];else{let e=El("canvas",0,{width:i.width,height:h}).getContext("2d");e.drawImage(i,0,0),t=Res.sprBox(e,r,h,l.n,80)}(t[0]||t[1]||t[2]<r||t[3]<h)&&(l.b=t)}e[2].ap(this.pv(l,l.d)).onclick()}})),El("span"),El("div","rl a-cen")),css(this.detail,{inset:"64px 16px 64px 112px",background:"var(--bg)"}),this.detail.lastChild.style.marginTop="12px"},dct(t,e){let i=[],s=[],r=[];for(let t=0;t<e;t++)for(let s=0;s<e;s++)i[t+s*e]=(t?Math.sqrt(2/e):Math.sqrt(1/e))*Math.cos((s+.5)*Math.PI*t/e);for(let a=0;a<2;a++){for(let r=0;r<e;r++)for(let h=0;h<e;h++){s[2*(r+h*e)+a]=0;for(let l=0;l<e;l++){let d;if(a)d=t[4*(r+l*e)+3];else{let i=4*(r+l*e);d=(Math.min(t[i],t[i+1],t[i+2])+Math.max(t[i],t[i+1],t[i+2]))/2}s[2*(r+h*e)+a]+=i[l+h*e]*d}}for(let t=0;t<e;t++)for(let h=0;h<e;h++){r[2*(t+h*e)+a]=0;for(let l=0;l<e;l++)r[2*(t+h*e)+a]+=s[2*(l+h*e)+a]*i[l+t*e]}}return r},hash(t,e){let i=this.dct(t.getImageData(0,0,e,e).data,e),s=[],r=[],a=0,h=0;for(let t=0;t<10;t++)for(let r=0;r<10;r++){if(t+r>10)continue;let h=i[2*(t+r*e)];a+=h,s.push(h)}a/=s.length;for(let t=s.length;t--;)s[t]=s[t]>a;for(let t=0;t<5;t++)for(let s=0;s<5;s++){if(t+s>=5)continue;let a=i[2*(t+s*e)+1];h+=a,r.push(a)}h/=r.length;for(let t=r.length;t--;)r[t]=r[t]>h;let l=s.concat(r);for(;l.length%5;)l.push(0);let d="";for(let t=0;t<l.length;t+=5)d+=(l[t]<<4|l[t+1]<<3|l[t+2]<<2|l[t+3]<<1|l[t+4]).toString(32);return d},bgHash:["laaklak58gk99ai2","laa5lah58gh93ai2","gm96hmp56mlbbai2","laa0h8o40gg91ai2","ss32o00620o1hg32","l8dat26nq1r0pai2","ha8gnaj56gk19ai2","laagl8k5agk93ai2","j6c6io5kp5tj3ai2","laalkak50kk93ai2","ljb0dkgs6tnr3ai2","laahl8g48gg93ai2","laakl2kc2gkbbai2","laaklal58gk99ai2","lb8qkcl52llbbai2","laallaldallbbai2","laakl8k58kk9bai2","laekham48gh1bai2","laall8l58glb3ai2","l6a0k2k500k1bai2","n204m01500k11ai2","jacgg004g0g11ai2","laakl8k5agg91ai2","laaklakdakkb3ai2","laal5ikd3jnfbai2"],sim(t,e,i,s){let r=El("canvas",0,{width:32,height:32}).getContext("2d");r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",i?r.drawImage(t,0,0,i,s,0,0,Math.min(32,i),Math.min(32,s)):r.drawImage(t,0,0,Math.min(32,t.width),Math.min(32,t.height));let a=this.hash(r,32);return new Promise(t=>{for(let i of Res.loc)if(i.c===e&&i.h===a)return t(i.id);if("bg"===e){let e=this.bgHash.indexOf(a);if(~e)return t(e)}DB.Q("Sprite").equalTo("h",a).equalTo("c",e).select([]).first().then(e=>t(e?e.id:a),e=>t(a))})},async save(t){let e=DB.O("Sprite");return t.b&&e.set("b",t.b),e.set("c",t.c),e.set("d",t.d.replace($M.p,"")),t.n>1&&e.set("n",t.n),t.p&&e.set("p",!0),t.s&&e.set("s",t.s),t.x&&e.set("x",t.x),t.y&&e.set("y",t.y),await e.save()},drawPv(t,e,i){let s=El("canvas","thm-cv",{width:t,height:e}),r=1;if(t>640||e>256)for(;t*r>640||e*r>256;)r/=2;else if(t<256&&e<100)for(;t*r<256&&e*r<100;)r+=1;return s.ctx=s.getContext("2d"),s.img=i,s.ctx.drawImage(i,0,0),s.style.zoom=r,s},drawMask(t,e,i){t.ctx.clearRect(0,0,t.width,t.height),t.ctx.drawImage(t.img,0,0),t.ctx.fillStyle="#f0f4";for(let s=0;s<t.width;s+=e)t.ctx.fillRect(s+i[0],i[1],i[2],i[3])},showPro(t,e,i){let s,r=this.detail.lastChild,a=1,h=0,l=0;t.n&&(a=t.n),t.p&&(h=1),t.s&&(l=t.s),s=t.b??[0,0,e,i],"_"===t.id[0]?ac(r):dac(r),t.b&&this.drawMask(r.firstChild,e,s);const d=s=>{s[0]||s[1]||s[2]<e||s[3]<i?t.b=s:delete t.b,this.drawMask(r.firstChild,e,s)};r.ap(El("br"),UI.span(`0{76}: ${a}，0{77}: ${e}×${i}，`),UI.I("0{7j}",{m:1,M:500,value:l}).on(e=>t.s=e),El("br"),UI.S("0{7k}",h,1).on(e=>t.p=e),UI.I("，0{7l}: 0{7m}",{m:0,M:e-1,value:s[0]}).on(s=>{let a=t.b??[0,0,e,i],h=a[0]-s;a[0]=s,a[2]+=h,r.ch[8].set(a[2]),d(a)}),UI.I("1{7n}",{m:0,M:i-1,value:s[1]}).on(s=>{let a=t.b??[0,0,e,i],h=a[1]-s;a[1]=s,a[3]+=h,r.ch[9].set(a[3]),d(a)}),UI.I("0{78}",{m:1,M:e,value:s[2]}).on(s=>{let a=t.b??[0,0,e,i];a[2]=s,s+a[0]>e&&r.ch[8].set(a[2]=e-a[0]),d(a)}),UI.I("0{79}",{m:1,M:i,value:s[3]}).on(s=>{let a=t.b??[0,0,e,i];a[3]=s,s+a[1]>i&&r.ch[9].set(a[3]=i-a[1]),d(a)})),l||r.ch[3]._h(),r.ch[5].style.marginRight=0},show(){let t=new UI.M(800).h("0{7o}").cb().ap(this.thm).b("0{5}","0{6}");this.thm.firstChild.onclick();let e=$("thmSrc");e&&(e.id=""),t.then(t=>{if(t.i)return $E.ThmLib.thmSrc=null;$E.ThmLib.setThm()})},showSpr(t){let e=new UI.M(800).h("0{7o}").cb();e.ap(this.spr),e.b("0{5}","0{6}"),this.cSpr=t,this.sprSrc=null,$c("setpage",this.spr).for(t=>t.opened=!1),this.spr.firstChild.onclick(),e.then(t=>{if(t.i)return $E.ThmLib.sprSrc=null;$E.ThmLib.setSpr()})},setThm(){this.thmSrc&&$E.loadTh({spr:Res.decSpr(this.thmSrc.o),col:this.thmSrc.c,bg:this.thmSrc.b})},setSpr(){if(null===this.sprSrc||void 0===this.sprSrc)return;if("bg"===this.cSpr){let t={id:this.sprSrc,m:$E._r.bg.m,g:$E._r.bg.g};return dac($("box"),""),Res.loadBg(t,1).then(t=>{$E._r.setBg(t),$E._r.drawBg(),$("loading")._h(),ac($("box"))},Res.fail)}let t=Res.sprList.findIndex(t=>t===this.cSpr);Res.loadSpr(this.cSpr,this.sprSrc,$E.tileCol.col).then(e=>{$E._r.spr[t]=this.sprSrc,$E.drawThn($("tile").spr[this.cSpr],e),$E.sfO.redraw()})},drawThm(){let t=El("canvas",0,{width:64,height:64}).getContext("2d",{alpha:!1,depth:!1,stencil:!0});switch(t.drawImage($E.sfB.canvas,352,288,128,128,0,0,64,64),t.drawImage(Res.spr.spk[0],32,32,16,16),t.drawImage(Res.spr.pf[0],48,32,16,Res.spr.pf.h/2),t.drawImage(Res.spr.wp[0],48,0,16,16),Res.spr.blk.length){case 1:t.drawImage(Res.spr.ply[0],0,32,16,16),t.drawImage(Res.spr.sp[0],16,32,16,16),t.drawImage(Res.spr.chr[0],27.5,10,10.5,12),t.drawImage(Res.spr.blk[0],0,48,16,16),t.drawImage(Res.spr.blk[0],16,48,16,16),t.drawImage(Res.spr.blk[0],32,48,16,16),t.drawImage(Res.spr.blk[0],48,48,16,16);break;case 2:t.drawImage(Res.spr.ply[0],0,16,16,16),t.drawImage(Res.spr.sp[0],16,16,16,16),t.drawImage(Res.spr.chr[0],35.5,10,10.5,12),t.drawImage(Res.spr.blk[0],0,32,16,16),t.drawImage(Res.spr.blk[0],16,32,16,16),t.drawImage(Res.spr.blk[1],0,48,16,16),t.drawImage(Res.spr.blk[1],16,48,16,16),t.drawImage(Res.spr.blk[0],32,48,16,16),t.drawImage(Res.spr.blk[0],48,48,16,16);break;case 4:t.drawImage(Res.spr.ply[0],0,32,16,16),t.drawImage(Res.spr.sp[0],16,32,16,16),t.drawImage(Res.spr.chr[0],27.5,10,10.5,12),t.drawImage(Res.spr.blk[0],0,48,16,16),t.drawImage(Res.spr.blk[1],16,48,16,16),t.drawImage(Res.spr.blk[1],32,48,16,16),t.drawImage(Res.spr.blk[0],48,48,16,16);break;case 20:t.drawImage(Res.spr.ply[0],0,16,16,16),t.drawImage(Res.spr.sp[0],16,16,16,16),t.drawImage(Res.spr.chr[0],35.5,10,10.5,12),t.drawImage(Res.spr.blk[5],0,32,16,16),t.drawImage(Res.spr.blk[6],16,32,16,16),t.drawImage(Res.spr.blk[9],0,48,16,16),t.drawImage(Res.spr.blk[11],16,48,16,16),t.drawImage(Res.spr.blk[3],32,48,16,16),t.drawImage(Res.spr.blk[2],48,48,16,16),t.drawImage(Res.spr.blk[17],16,48,16,16)}let e=c.toDataURL(),i=c.toDataURL("image/webp",1);return i.length<e.length?i:e},async saveThm(t,e,i=[]){let s=DB.O("Theme");return s.set("n",e),s.set("p",$M.m(this.drawThm())),t.col&&!$M.eq(t.col,{})&&s.set("c",t.col),s.set("t",i),s.set("o",Res.encSpr(t.spr)),s.set("b",t.bg),await s.save()}},doc.fonts.ready.then(()=>$E.ThmLib.init());