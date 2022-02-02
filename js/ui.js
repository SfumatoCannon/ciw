const UI={bg:doc.body.ap(El("div","msg-bg",{n:0})),menu:doc.body.ap(El("div",0,{id:"menu"})),tip:doc.body.ap(El("div",0,{id:"mt"})),showMenu(){css(this.menu,{opacity:1,pointerEvents:"auto"}),ac(this.menu.ch,""),$("setting")._h(),this.bg.n&&$c("msg",this.bg).for(t=>{t.onMenu&&(dac(UI.menu.ch,""),this.menu.ap(t).style.animation="none")}),this.menu.on=!0},hideMenu(){css(this.menu,{opacity:0,pointerEvents:""}),css($("setting"),{opacity:0,transform:""}),this.bg.n&&$c("msg",this.menu).for(t=>{t.onMenu&&(this.bg.ap(t).style.animation="none")}),this.menu.on=!1},showTips(t,e,s){e&&(this.tip.style.transform=`translate(${e}px,${s}px)`),this.tip.tx(t).style.display="block"},bindCat(t){$c("setcat",t).for((e,s)=>{e.i=s,e.p=t,e.onclick=function(){css($c("setcat",this.p),{background:"",color:""},this.i,{background:"var(--bgl)",color:"var(--cs)"});let t=$c("setpage",this.p);css(t,{display:""},this.i,{display:"block"}),t[this.i].set(this.p._tab),this.p._tab=this}})},M:class{constructor(t,e,s,i="#0000"){css(UI.bg,{backgroundColor:i,opacity:1,pointerEvents:"auto"}),s=UI.menu.on&&s,dac(s?UI.menu.ch:UI.bg.ch,""),this.box=(s?UI.menu:UI.bg).ap(El("div","msg")),this.box.onMenu=s,t&&(this.box.style.width=t+"px"),e&&(this.box.style.height=e+"px"),UI.bg.n++,this.r={}}t(...t){return t.for(t=>this.box.ap(El("p").tx(t))),this}b(...t){let e=this.box.ap(El("div","a-cen"));return t.for((t,s)=>{e.ap(El("div","btn").tx(t)).onclick=()=>{this.r.i=s,this.r.s=t,this.ok()}}),this}h(t){return this.box.ap(El("h1","kid").tx(t)),this}a(t){return this.box.ap(El("div","msg-area",{innerHTML:t})),this}ac(...t){return this.box.ap(El("div","msg-area")._c(...t)),this}ip(t,e){let s=this.box.ap(El("input"));return s.oninput=()=>this.r.v=s.value,(s.value=t)&&s.oninput(),e&&(s.type=e),this}cb(){return this.box.ap(El("div","msg-cb")).onclick=()=>this.close(),this}ap(t){return this.box.ap(t),this}then(t){this.fin=t}ok(){this.fin&&this.fin(this.r),this.hold?$c("btn",this.box).for(t=>t.aC("gray")):this.close()}close(){if(css(this.box,{animation:"msg-close 0.4s forwards",animationPlayState:"running",pointerEvents:"none"}),--UI.bg.n||css(UI.bg,{opacity:0,pointerEvents:"none"}),setTimeout(this.des,400,this),this.box.pN===UI.menu){let t=this.box.pS();t.onMenu?ac(t):ac(UI.menu.ch)}else{let t=this.box.pS();t&&ac(t)}}des(t){t.box.remove()}},$a:(t,e)=>new UI.M(0,0,e).t(t).b("0{5}"),confirm:(t,e,s="1{5}",i="1{6}")=>new UI.M(0,0,e).t(t).b(s,i),prompt:(t,e="")=>(new UI.M).t(t).ip(e).b("0{5}","0{6}"),check:(t,e="0{5}")=>(new UI.M).t(t).ip("").b(e),ico:t=>`<svg><use href='#-${t}'></use></svg>`,p(t,e){let s=El("p");return s.innerHTML=t,e&&(s.style.margin=e),s},span(t,e,s){let i=El("span");return i.innerHTML=t," "===t.at(-1)&&(i.style.marginRight="16px"),e&&(i.style.color=e),s&&(i.style.fontSize=s+"px"),i},help(t,e){let s=El("span","help",{innerHTML:UI.ico("help")});return e&&(s.style.marginRight="16px"),s.h=t,s.onclick=function(t){t.stopPropagation(),App.help(this.h)},s},copy(t){let e=El("div","ib"),s=UI.span(UI.ico("copy")),i=UI.span("✓");return css(i,{padding:"2px",color:"var(--cs)"}),s.aC("username"),i._h(),e.ap(s,i).onclick=()=>navigator.clipboard.writeText(t).then(()=>{s._h(),i._s(),setTimeout((t,e)=>{t._s(),e._h()},1500,s,i)}),e},ipf:El("input",0,{type:"file",multiple:!1}),file:(t,e)=>new Promise((s,i)=>{UI.ipf.accept=t,UI.ipf.onchange=()=>$M.read(UI.ipf.files[0],"string"==typeof e?e:e(UI.ipf.files[0].name)).then(t=>s([t,UI.ipf.files[0].name])).catch(i),UI.ipf.value="",UI.ipf.click()}),on(t){return t.on=e=>(t.f=e,t),t},S(t,e=!1,s=!1){let i=El("div").tx(t),n=El("div",e?"sw on":"sw");return s&&(i.aC("ib"),i.style.marginRight="12px"),i.ap(n).onclick=t=>{i.v=!i.v,i.v?n.aC("on"):n.rC("on"),t&&i.f?.(0|i.v,i)},i.set=t=>{!t!=!i.v&&n.onclick()},i.v=e,this.on(i)},B(t,e){let s=El("div",e?"btn s":"btn").tx(t);return s.set=t=>t?s.rC("gray"):s.aC("gray"),s.onclick=()=>{s.hC("gray")||s.f(s)},this.on(s)},B2(t){let e=El("div","btn2");return e.innerHTML=t,e.onclick=()=>e.f(e),this.on(e)},C(...t){let e=El("div").tx(t[0]),s=e.ap(El("div","chs"));e.v=0,e.m=t[1],e.set=(i,n)=>{for(let n=2;n<t.length;n++)!(i&1<<n-2)!=!(e.v&1<<n-2)&&s.ch[n-2].onclick();n&&e.f(e.v,n)};for(let i=2;i<t.length;i++){let n=El("span").tx(t[i]);s.ap(n).onclick=t=>{if(!e.m&&e.v==1<<i-2)return;e.m?e.v^=1<<i-2:(e.v=1<<i-2,css(s.ch,{color:"",background:""}));let o=n.style.color;css(n,{color:o?"":"var(--cs)",background:o?"":"var(--bgl)"}),t&&e.f(e.v,t)}}return this.on(e)},mbS(t){let e=t.lastChild,s=t.pN;e._s(),e.B=s.B+e.offsetHeight,e.H=s.H,css(e,e.B>s.H?{top:"unset",bottom:0}:{top:"",bottom:""}),s.R?(css(e,{left:"unset",right:"100%"}),e.R=s.R):css(e,{left:"",right:""})},option(t,e,s){let i=El("div","mb");return i._h(),i.w=0,i.hide=function(){this._h(),this.hC("T")?this.remove():this.pN.hC("op")&&this.pN.pN.hide()},s.for((s,n)=>{let o=""===e?n:e+"."+(n+1),a=i.ap(El("div","op"));if(Array.isArray(s)){let[e,n]=s[0].split("#");n?a.innerHTML=UI.ico(n)+" "+e:a.tx(e),a.aC("arr"),"function"==typeof s[1]?(a.ap(El("div","mb")).hide=i.hide,a.f=s[1],a.j=o,a.p=t,a.onmouseover=function(e){if(e.target!==this)return;let s=this.ch[0],i=this.f();s.innerHTML="",i.for((e,i)=>{let n=e.split(":"),o=s.ap(El("div","op")).tx(n[0]);o.v=n[1]||this.j+"."+i,o.onclick=()=>{this.p.v=o.v,this.p.firstChild.tx(o.innerText),this.pN.hide(),this.p.f(t.v)}}),s._s()}):(i.w=Math.max(i.w,a.ap(UI.option(t,o,s.slice(1))).w),a.onmouseover=function(t){t.target===this&&UI.mbS(this)})}else{let[e,n]=s.split(":");e=e.split("#"),e[1]?a.innerHTML=UI.ico(e[1])+" "+e[0]:a.tx(e[0]),e=e[0],a.v=n||o,a.onclick=()=>{t.v=a.v,t.firstChild?.tx(a.innerText),i.hide(),t.f?.(t.v,a.innerText,a)}}}),i.w+=64,i},mbO(t,e){let s=e.pN,i=e.offsetLeft,n=e.offsetTop;for(;s!==doc.body&&!s.hC("page")&&!s.hC("pointer");){if(i+=s.offsetLeft,n+=s.offsetTop,s.hC("setpage")||s.hC("msg-area")){s=s.pN;break}s=s.pN}let o=s.scrollWidth-8,a=s.scrollHeight-8;s.ap(t)._s();let l=i+t.offsetWidth,r=n+t.offsetHeight;if(l>o){let s=e.offsetWidth-t.offsetWidth;i+=s,l+=s}t.R=l+t.w-64>o;let h=r>a?6-t.offsetHeight:e.offsetHeight;n+=h,r+=h,t.H=a,t.B=r,css(t,{top:n+"px",left:i+"px"})},mb(t,e,s){let i=UI.option(t,"",e);return i.aC("T"),s&&css($c("op",i),{minWidth:s+"px"}),i.onmouseleave=i.hide,i.open=()=>{i.style.display?UI.mbO(i,t):i.hide()},i},O(...t){let e=El("div","sl"),s=UI.mb(e,t);return e.ap(El("span")).tx("0{2l}"),e.v=0,e.m=s,e.set=(t=0)=>{let i=Number(t),n=(s,i)=>{for(let o=0;o<s.length;o++){if(s[o].v==t)return void e.firstChild.tx(s[o].innerText);if(s[o].ch[0])if(s[o].f){let n=s[o].f();for(let s=0;s<n.length;s++){let[o,a]=n[s].split(":");if((a||i+"."+s)==t)return void e.firstChild.tx(o)}}else n(s[o].ch[0].ch,""===i?o:i+"."+o)}};e.v=isNaN(i)?t:i,n(s.ch,"")},e.onclick=()=>s.open(),e.onmouseleave=t=>{s.style.display||t.toElement?.hC("op")||s.hide()},this.on(e)},I(t,e,s){let i=El("div","ip").tx(t),n=i.ap(El("input"));return s&&(n.style.width=s+"px"),i.set=t=>i.v="number"===n.type?Number(n.value=t):n.value=t,"~"!==t&&"×"!==t||(i.style.marginLeft="-5px",n.style.marginLeft="1px"),e&&(n.s=1,Object.assign(n,e),n.m||n.M?(n.type="number",n.step=.01,n.sf=n.s<.1?2:n.s<1?1:0,n.onmouseout=()=>UI.tip._h(),n.onchange=function(){let t=Number(this.value);isNaN(t)||(void 0!==this.m&&t<this.m&&(t=this.m),void 0!==this.M&&t>this.M&&(t=this.M),t=Math.round(t/this.s)*this.s,this.value=t.toFixed(this.sf))},n.onmouseover=function(){let{left:t,top:e}=this.getBoundingClientRect();UI.showTips(this.m.toFixed(this.sf)+"~"+this.M.toFixed(this.sf),0|t,e-24|0)}):n.l&&(n.oninput=function(){this.value.length>this.l&&(this.value=this.value.slice(0,this.l))}),n.w&&(n.ww=0),i.v="number"===n.type?Number(n.value):n.value),n.onwheel=function(t){if(t.preventDefault(),this.w&&document.activeElement===this){let e=Math.floor((Number(this.value)+1e-5)/this.w);t.deltaY<0?++e:Math.abs(this.value-e*this.w)<1e-5&&--e;let s=e*this.w;if(s<this.m||s>this.M)return;this.value=s,clearTimeout(this.wt);let i=new Event("change");this.ww>0&&(i.sk=233),this.dispatchEvent(i),this.wt=setTimeout(t=>t.ww=0,this.ww=1e3,this)}},n.addEventListener("change",t=>i.f(i.v="number"===n.type?Number(n.value):n.value,t.sk)),this.on(i)},Bar(t=200,e=0,s=1,i=0,n){let o=El("div",i?"rg v":"rg"),a=o.ap(El("div","rgb"));return css(o,{[i?"height":"width"]:t+8+"px"}),a.onmousedown=t=>{a.d=!0,a.x=i?t.y-a.offsetTop:t.x-a.offsetLeft},o.onmousemove=e=>{if(a.d){let n=i?t-e.y+a.x:e.x-a.x;o.set(Math.mM(n/t,0,1),s),o.fin(o.v)}},o.onmouseleave=o.onmouseup=()=>{a.d&&(a.d=!1,o.f?.(o.v))},o.set=(e,s=1)=>{o.v=e,s&&(i?(a.style.top=(1-e)*t+"px",n&&(o.style.backgroundImage=`linear-gradient(0deg,${n} ${e*t}px,#0000 0)`)):(a.style.left=e*t+"px",n&&(o.style.backgroundImage=`linear-gradient(90deg,${n} ${e*t}px,#0000 0)`)))},o.set(e),o.in=t=>(o.fin=t,o),this.on(o)},R(t,e,s,i,n,o){let a=El("div").tx(t);a.m=e,a.M=s,a.r=s-e,a.d=i,a.v=i;let l=a.ap(UI.Bar(200,(i-e)/a.r,0,0,o)).in(t=>a.set(Math.round(t*a.r+a.m))).on(()=>a.f(a.v)),r=a.ap(El("input")),h=a.ap(El("div","reset",{innerHTML:UI.ico("undo")}));return n&&a.aC("ib"),r.value=i,h.onclick=()=>{a.v!=i&&(a.set(i),a.f(i))},a.set=(t=a.d)=>{t=""===t?a.d:Number(t),r.value=a.v=t,l.set((t-a.m)/a.r)},r.onchange=()=>{let t=Number(r.value);isNaN(t)||(a.set(Math.round(Math.mM(t,a.m,a.M))),a.f(a.v))},this.on(a)},ipc:doc.body.ap(El("input",0,{id:"UIipc",type:"color"})),Col(t,e){let s=El("div","ip").tx(t),i=s.ap(El("div","col"));return i.style.background=e||"#fff",s.c=t=>{if("#"===t[0])return t;let e=t.match(/\d+/g);return((e[0]<<16)+(e[1]<<8)+(0|e[2])).toString(16).padStart(7,"#000000")},i.onclick=t=>{css(UI.ipc,{left:`${t.x}px`,top:`${t.y}px`}),UI.ipc.onchange=()=>{let t=UI.ipc.value;i.style.background=t,s.f(t)},UI.ipc.value=s.c(i.style.background),setTimeout(()=>UI.ipc.click(),1)},s.set=t=>i.style.background=t,this.on(s)},P:(t,e,s,i)=>new Promise((n,o)=>{UI.file("image/*","DataURL").then(a=>{let l=new Image;l.onload=()=>{if(l.width<t)return UI.$a("0{2m}"+t),o();if(l.height<e)return UI.$a("0{2n}"+e),o();let a=l.width,r=l.height;for(;a>960||r>640;)a>>=1,r>>=1;let h=El("canvas","ab",{width:a,height:r}),p=El("canvas","ab",{width:t,height:e}),c=new UI.M(a+t+16,Math.max(r,e+100)+48).h(s).ap(h).ap(p).b("确定","取消");c.then(t=>{if(!t.i){let t,e=p.toDataURL("image/png");t=e.length>=10240?p.toDataURL("image/webp"):p.toDataURL("image/webp",1),n(t.length<e.length?t:e)}}),css(h,{left:"16px",top:"64px"}),css(p,{right:"16px",top:"64px"}),i&&(p.style.borderRadius="100%"),css(c.box.lastChild,{position:"absolute",left:a+16+"px",right:0,top:e+72+"px"});let u=h.getContext("2d"),d=p.getContext("2d");u.imageSmoothingQuality=d.imageSmoothingQuality="high",u.fillStyle="#000",u.fillRect(0,0,a,r),u.drawImage(l,0,0,a,r);let f=Math.min(a,r/e*t),m=Math.min(r,a/t*e),g=a-f>>1,v=r-m>>1,b=a-g-f,x=r-v-m,I=El("div","ab"),U=I.ap(El("div","ab"));c.ap(I),css(I,{left:"16px",top:"64px",width:a+"px",height:r+"px",overflow:"hidden"}),css(U,{left:g+"px",top:v+"px",right:b+"px",bottom:x+"px",border:"2px solid #fc0",outline:"960px solid #0007"}),U.L=g,U.T=v,U.R=b,U.B=x,U.mouse=function(t,e){let{left:s,top:i,right:n,bottom:o}=this.getBoundingClientRect(),a=t<s+16|(t>n-16)<<1|(e<i+16)<<2|(e>o-16)<<3,l="move";switch(a){case 5:case 10:l="nwse-resize";break;case 9:case 6:l="nesw-resize"}return this.style.cursor=l,a+1},U.draw=()=>d.drawImage(h,U.L,U.T,a-U.R-U.L,r-U.B-U.T,0,0,t,e),U.draw(),U.onmousedown=t=>U.drag=U.mouse(t.x,t.y),I.onmouseup=I.onmouseleave=()=>{U.drag=0,I.style.cursor="",U.draw()},I.onmousemove=s=>{if(U.drag&&1===s.buttons){let i=s.movementX,n=s.movementY,o=U.drag-1;switch(o){case 5:case 10:case 9:case 6:n=Math.abs(i)/t*e*(9===o||6===o?-Math.sign(i):Math.sign(i)),4&o?n<-U.T&&(n=-U.T):8&o&&n>U.B&&(n=U.B),i=Math.abs(n)/e*t*Math.sign(i),1&o?(i<-U.L&&(i=-U.L),U.L+=i):2&o&&(i>U.R&&(i=U.R),U.R-=i),a-U.R-U.L<t&&(1&o?U.L=a-U.R-t:U.R=a-U.L-t),4&o?U.T=r-U.B-(a-U.R-U.L)/t*e:U.B=r-U.T-(a-U.R-U.L)/t*e;break;default:i>U.R&&(i=U.R),i<-U.L&&(i=-U.L),n>U.B&&(n=U.B),n<-U.T&&(n=-U.T),U.L+=i,U.R-=i,U.T+=n,U.B-=n}css(U,{left:U.L+"px",top:U.T+"px",right:U.R+"px",bottom:U.B+"px"}),I.style.cursor=U.style.cursor}},U.onmousemove=function(t){this.drag||this.mouse(t.x,t.y)}},l.src=a[0]})}),LB(t,e){let s=El("table","LB"),i=s.ap(El("thead")).ap(El("tr")),n=s.ap(El("tbody")),o=[];return i.ap(El("th").tx("#")),t.for(t=>{i.ap(El("th").tx(t.n)),t.c}),e.for(e=>{let s=El("tr");s.d=e,o.push(s),s.ap(El("td")),t.for(t=>{let i=s.ap(El("td")),n=t.v(e);"object"==typeof n?i.ap(n):i.tx(n)})}),s.sort=(e,s=!1)=>{o.sort((i,n)=>s?t[e].s(n.d,i.d):t[e].s(i.d,n.d)),o.for(t=>n.append(t))},s.sort(t.findIndex(t=>t.s)),s},Play(t=!1){let e=El("div","m-play");return t&&e.aC("btn2"),e.v=0,e.onclick=()=>{e.v=1-e.v,e.v?e.aC("p"):e.rC("p"),e.f(e.v)},this.on(e)}};doc.fonts.ready.then(()=>{const t=UI.menu;for(let e=4;e--;)t.ap(El("div","menu"));UI.menu.ap(El("div"));let e=t.ch;e[0].innerHTML=UI.ico("home")+"<p>0{9}</p>",e[1].innerHTML=UI.ico("set")+"<p>0{a}</p>",e[2].innerHTML=UI.ico("help")+"<p>0{b}</p>",e[3].innerHTML=UI.ico("exit")+"<p>0{c}</p>",e[0].onclick=()=>{Ipc.beforeClose?.(),Ipc.closeMsg?UI.confirm(Ipc.closeMsg,1).then(t=>{t.i||LOC("home")}):LOC("home")},e[1].onclick=()=>{e[4]._s(),setTimeout(()=>css($("setting"),{opacity:1,transform:"translate(-50%,-50%) scale(1.25)"}),0),$c("setcat",e[4])[0].click()},e[2].onclick=()=>App.help(),e[3].onclick=()=>Ipc.close(0),e[4].id="setting",e[4].innerHTML=`<h3>${UI.ico("set")} 0{a}</h3>`,e[4].ap(El("div","msg-cb")).onclick=()=>{css(e[4],{opacity:0,transform:""}),setTimeout(()=>$("setting")._h(),200)},["0{2o}","0{2p}","0{2q}","0{l}"].for(t=>{e[4].ap(El("div","setcat").tx(t),El("div","setpage"))});let s=$c("setpage",e[4]);s[0].ap(UI.span("0{2r}"),UI.O("中文:zh-cn","English:en-us").on(t=>{const e=t=>{t!==_lang&&($S.set("lang",t),UI.confirm("0{2s}",1).then(t=>{t.i||Ipc.send("relaunch")}))};if("zh-cn"===t)return e(t);Local.get("f",t+".json").then(s=>{try{JSON.parse(s.t),e(t)}catch{UI.$a("0{2t}",1)}})}),El("br"),UI.span(" "),UI.B("0{2u}",1).on(t=>{t.set(),App.chkUpd(e=>{1===e?LOC("update"):0===e&&UI.$a("0{2v}",1),t.set(1)},e=>{UI.$a("0{2w}",1),console.error(e),t.set(1)})}),El("br"),UI.span("错误调试 "),UI.B("查看错误日志",1).on(()=>Ipc.send("log"))),s[1].ap(UI.S("0{2x} (F3) ").on(App.setDarkMode),UI.S("0{2y} (F4) ").on(App.setFscr),UI.span("0{2z} (F5)"),UI.O("1280x720:0.8889","1440x810:1","1920x1080:1.3334","2880x1620:2").on(t=>App.setWinSc(t)));const i=t=>(t/(1<<20)).toFixed(2);s[2].ap(UI.span("0{30}0 MB"),UI.help("0{31}",1),UI.p("","10px 0 7px 0"),UI.span("- 0{32}0 MB "),UI.B("0{33}",1).on(t=>{t.set(),UI.confirm("0{34}",1).then(e=>{e.i||Ipc.send("clear"),t.set(1)})})),[["0{35}","avatar",1],["0{36}","cover",1],["0{37}","bgm",1],["0{38}","img"],["0{39}","snd"],["0{3a}","font"]].for(t=>{let e=UI.span(" ");e.aC("storage"),e.set=()=>{let s=App.stor[t[1]]??0;e.tx(`- ${t[0]}：${i(s)} MB`),e.nS().set(s&&t[2])},s[2].ap(El("br"),e,UI.B("0{33}",1).on(e=>{e.set(),CIW.clear(t[1]).then(()=>e.pS().set()).catch(()=>UI.$a("0{3b}",1).then(()=>e.set(1)))}))}),s[3].ap(UI.C("0{3c} ",0,60,30).on(t=>App.sC("run","fps",2===t?30:60))),s[0].set=function(){let t=this.ch;t[1].set(_lang),t[3].tx("0{3d}"+$S.get("version"))},s[1].set=function(){let t=this.ch,e=$S.get("zoom")||1;t[0].set(doc.body.className),t[1].set($S.sget("fullscreen")),t[3].set(e)},s[2].set=function(){let t=this.ch;Ipc.cache(e=>{navigator.storage.estimate().then(s=>t[0].tx("0{30}"+i(e+s.usage)+" MB")),t[3].tx("- 0{32}"+i(e)+" MB")}),t[2].tx("- 0{3e}"+i(App.stor.app??0)+" MB"),$c("storage",this).for(t=>t.set())},s[3].set=function(){this.ch[0].set(30===App.gC("run","fps")?2:1)},UI.bindCat(e[4]),location.pathname.match(/login|home/)&&e[0]._h(),doc.addEventListener("keydown",t=>{if(!t.repeat&&!t.altKey)switch(t.keyCode){case 114:App.setDarkMode(!doc.body.className);break;case 115:App.setFscr();break;case 116:let t=[1.3334,2,.8889,1];App.setWinSc(t[(t.findIndex(t=>t==$S.get("zoom"))+1)%4]);break;case 27:let e=location.pathname;"/"!==e&&"/update"!==e&&(UI.menu.on?UI.hideMenu():UI.showMenu())}})});