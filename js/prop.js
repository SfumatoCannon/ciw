$E.pro={clipBoard:[],noAddP:["dep","scx","scy","ang","a","ti","txt"],addFold(i){let t=i.ch[1];t.style.cursor="pointer",t.onclick=()=>{i.hC("fold")?i.rC("fold"):i.aC("fold"),$E.fixH($c("cat")[18])}},actInd(i){return i===i<<0?this.acLib[1][i]:this.acLib[4+i|0][Math.round(100*i%100-1)]},conInd(i){return this.acLib[11+i|0][Math.round(100*i%100-1)]},chkPro(i,t){switch(t){case"mov":let d=i.add[t];for(let t=d.length;t--;){let o=this.acLib[1][d[t][0]];o.c&&o.c&i.lib&&d.splice(t,1)}break;case"tml":i.add[t].for(t=>{let d=t[1];for(let t=d.length;t--;){let o=this.actInd(d[t][0]);o.c&&o.c&i.lib&&d.splice(t,1)}});break;case"trg":let o=i.add[t];for(let t=o.length;t--;){let d=o[t];d[2].for(d=>{let e=this.conInd(d[0]);e.c&&e.c&i.lib&&o.splice(t,1)});let e=d[3];for(let t=e.length;t--;){let d=this.actInd(e[t][0]);d.c&&d.c&i.lib&&e.splice(t,1)}}}},applyPro(i,t,d){if($E.C._U(),i[0]);else{let o=["mov","tml","trg"][i-1];d.for(i=>{0!==i.ind&&(i.add[o]=$M.cp(t),this.chkPro(i,o))})}},updTml(i,t,d){if(!i)return;const o=d?[4.04]:[4.01,4.02,4.03];i.for(i=>{i.at(-1).for(i=>{o.includes(i[0])&&i[1]>t&&(i[1]--,i.set())})})},CV(i,t,d){let o=El("div","ab");css(o,{top:t+"px",right:"28px"});let e=El("div","p-btn tip L",{innerHTML:UI.ico("copy")+"<p>0{91}</p>"}),n=El("div","p-btn tip L",{innerHTML:UI.ico("paste")+"<p>0{92}</p>"});return e.onclick=()=>this.clipBoard[i]=JSON.stringify(o.pN.pro),n.onclick=()=>{if(this.clipBoard[i]){let t=JSON.parse(this.clipBoard[i]);d&&!d(t)||($E.C._U(),t.for((i,t)=>o.pN.pro[t]=i),$E.reloadPro())}},o.ap(e,n),o},apAc(i,t,d,o,e=!0,n){let c=El("div","p-ac"),r=d.pn??d.p.map(i=>""),l=d.n.replace("\n","<br/>");switch(c.p=d.p,c._id=d.type+d.ind+t.i+d.p?.join(),n?o.before(c):o.ap(c),d.type){case"tml":c.aC("tml");case"trg":l+=t.i,t.set=()=>c.ch[1].tx(d.n+t.i)}c.pro=t,c.innerHTML=`${UI.ico(d.ico)}<span>${l}</span>`;const p=$E.C,a=233;if(e&&(c.innerHTML+="<svg class='p-del'><use href='#-trash'></use></svg>",c.lastChild.onclick=()=>{if(p._U(),Array.isArray(i)){let o=t.i;i.splice(o,1);for(let t=o;t<i.length;t++)i[t].i=t,"tml"===d.type||"trg"===d.type?i[t].set():(.02===i[t][0]&&i[t][1]>o&&(i[t][1]--,i[t].set()),i[t].check?.());"tml"===d.type?(this.updTml(i,o),this.updTml($E.$O[0].add.trg,o)):"trg"===d.type&&(this.updTml(i,o,1),this.updTml($E.$O[0].add.tml,o,1))}else if(i.R){let[o,e]=i.LT,{w:n,h:c}=i;d.p.for(d=>{i[d]=void 0,delete i[d],delete t[d]}),d.calc&&i.calcRect(),d.d&&(i.autoTile&&$E.E.rTile(o,e,n,c,i),$E.sfO.$d(o,e,n,c),$E.sfO.$d(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update(),$E.C.dM(0,0,1))}else d.p.for(i=>{delete t[i]}),d.d&&i.drawTxt?.(1);c.remove(),$E.fixH($c("cat")[18])}),d.copy)switch(d.copy){case"tml":c.ap(this.CV("tml",2,i=>{let t=$E.$O[0],d=i[1];for(let i=d.length;i--;){let o=this.actInd(d[i][0]);if(o.c&&o.c&t.lib)return}return 1}));break;case"trg":c.ap(this.CV("trg",2,i=>{let t=$E.$O[0],d=i[2];for(let i of d){let d=this.conInd(i[0]);if(d.c&&d.c&t.lib)return}let o=i[3];for(let i=o.length;i--;){let d=this.actInd(o[i][0]);if(d.c&&d.c&t.lib)return}return 1}))}if("trg"===d.type&&c.ap(El("br")),d.p&&d.p.for((o,e)=>{if(d.t[e].n)c.ap(UI.B2(d.t[e].n)).on(i=>{$E.inEdit?$E.exitEdit():$E.setEdit(i,d.t[e].click,d.t[e].move,d.t[e].draw)});else if(d.t[e].includes("|")){let n=d.t[e].split("|"),l=[],s=[];n.for((e,n)=>{let c=e.split("<"),r=c[1].split(","),h=El("div","ib");l.push(c[0]),s.push(h),t[o]?.[0]!==n&&h._h(),r.for((e,n)=>{let c=e.split(">"),r=c[1].split(":");switch(c=c[0],r[0]){case"i":let e=r[1].split("*"),l=e[1]??1,s=e[0].split("+"),f=s[0].split("~");s=s[1].split("-"),h.ap(UI.I(c,{type:"number",value:t[o]?.[n+1]??s[1]??0,m:Number(f[0]),M:Number(f[1]),s:Number(s[0]),w:Number(l)},36).on((d,e)=>{e!==a&&p._U(),t[o][n+1]=d,10===i.ind&&i.pG()}));break;case"t":h.ap(UI.I(c,{value:t[o]?.[n+1]??"00000000"},80).on((e,c)=>{c!==a&&p._U();let r=t[o];r[n+1]=e,t[o]=r,d.d&&($E.sfO.$d(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())}))}})});let h=UI.O(...l).on((e,n)=>{n!==a&&p._U(),e=Number(e),s.for((i,t)=>e==t?i._s():i._h());let c=[e];for(let i of s[e].ch)c.push(i.v);return t[o]=c,d.d&&(10===i.ind?i.pG():($E.sfO.$d(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())),e}),f=c.ap(El("div","rl"));"ti"!==o&&.01!==d.ind||f.aC("ib"),f.ap(UI.span(r[e]),h),h.set(t[o]?.[0]??h.f(0,a)),s.for(i=>f.ap(i))}else if(Array.isArray(d.t[e])){let n=UI.O(...d.t[e]).on((e,n)=>{n!==a&&p._U();let c=Number(e);if(e=isNaN(c)?e:c,this.noAddP.includes(o)){let t=i.R[0],d=i.LT[1],{w:n,h:c}=i;i[o]=e,i.autoTile&&$E.E.rTile(t,d,n,c,i),$E.sfO.$d(t,d,n,c),$E.C.dM(0,0,1),"a"===o&&($("edit-x")?.set($E.$O[0].x),$("edit-y")?.set($E.$O[0].y))}else t[o]=e;d.d&&(i.svg?i.drawTxt():($E.sfO.$d(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())),5.01===d.ind&&e.length&&Au.play(e,2**((t[o+1]??0)/12))});n.set(t[o]??n.f(0,a)),c.ap(UI.span(r[e]),n),d.t[e]===this.acAO?(css(n,{minWidth:0,float:"right",marginRight:"8px"}),css($c("op",n.m),{minWidth:0})):"="===d.t[e][0]?(css(n,{minWidth:0,width:"16px",margin:0}),css($c("op",n.m),{minWidth:0})):d.t[e]===this.acFont&&$c("op",n.m).for(i=>{!i.hC("arr")&&i.v&&(i.style.fontFamily="_"+Res.fontList[0|i.v][0])})}else{let n=d.t[e].split(":");switch(n[0]){case"i":let l=n[1].split("*"),s=l[1]??1,h=l[0].split("+"),f=h[0].split("~"),E=r[e];h=h[1].split("-"),"\n"===E.at(-1)&&(E=E.slice(0,-1));let b=c.ap(UI.I(E?E+":":"",{type:"number",value:t[o]??(Array.isArray(i)?h[1]??0:i[o]??h[1]??0),m:Number(f[0]),M:Number(f[1]),s:Number(h[0]),w:Number(s)},36)).on((e,n)=>{if("x"===o||"y"===o){if(i.gO()?.add.gpm[0])return;10===i.ind&&i.mG(o,e)}n!==a&&p._U();let c=i.R?.[0],r=i.LT?.[1],{w:l,h:s}=i;this.noAddP.includes(o)||"x"===o||"y"===o?i[o]=Number(e):t[o]=Number(e),d.calc&&i.calcRect(),d.d&&i.w&&(i.autoTile&&$E.E.rTile(c,r,l,s,i),$E.sfO.$d(c,r,l,s),$E.C.dM(0,0,1),i.svg?i.drawTxt():($E.sfO.$d(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())),t.check?.(),5.01===d.ind&&t[o-1].length&&Au.play(t[o-1],2**(t[o]/12))});if(b.id="edit-"+o+(d.ind??""),0===e)switch(d.ind){case.02:case 4.01:case 4.02:case 4.03:case 4.04:t.set=()=>b.set(t[1])}else.02===d.ind&&(t.check=()=>{if(0===t[2]){for(let d=t[1];d<=t.i;d++)if(.01===i[d][0])return;b.f(b.set(1)),UI.$a(`0{bk}${t[1]}-${t.i}0{bl}`)}});void 0===t[o]&&"x"!==o&&"y"!==o&&b.f(h[1]??0,a),"\n"===r[e].at(-1)&&c.ap(El("br"));break;case"s":case"s1":c.ap(UI.S(r[e]+":",t[o]??"s1"===n[0]).on((e,n)=>{n!==a&&p._U(),t[o]=e,d.d&&i.w&&($E.sfO.$d(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())})).style.display="inline-block",void 0===t[o]&&c.lastChild.f("s1"===n[0]?1:0,a);break;case"c":c.ap(UI.Col(r[e]+":",t[o])).on(e=>{p._U(),t[o]=e,d.d&&i.svg&&i.drawTxt()});break;case"txt":c.ap(El("br"));let m=c.ap(El`textarea`);m.value=i[o]??i.add[o],m.onchange=()=>{p._U(),i[o]=m.value}}}}),"tml"===d.type){this.addFold(c),c.style.paddingBottom="28px",c.aC("count");let i=El("div","p-add",{innerHTML:UI.ico("add")+"0{bm}"});i.obj=t[1],c.ap(i).onclick=function(){$E.pro.acChs.set(this,4,this.obj)}}else if("trg"===d.type){this.addFold(c);let i=c.ap(El("div","p-ac trg",{innerHTML:UI.ico("if")+"0{bn}"})),d=c.ap(El("div","p-ac",{innerHTML:UI.ico("act")+"0{bo}"})),o=i.ap(El("div","p-add",{innerHTML:UI.ico("add")+"0{bp}"})),e=d.ap(El("div","p-add",{innerHTML:UI.ico("add")+"0{bq}"}));css([i,d],{paddingBottom:"28px"}),d.style.borderBottom="none",o.obj=t[2],e.obj=t[3],o.onclick=function(){$E.pro.acChs.set(this,5,this.obj)},e.onclick=function(){$E.pro.acChs.set(this,6,this.obj)}}return c.pN.hC("tml")&&(c.ap(El("div","tml-add")).onclick=function(){$E.pro.acChs.set(this,4,i)}),$E.fixH($c("cat")[18]),c},init(){this.initLib();const i=El("div","p-btn tip",{innerHTML:UI.ico("save")})._c(UI.p("0{br}")),t=El("div","p-btn tip",{innerHTML:UI.ico("change")})._c(UI.p("0{bs}"));i.onclick=()=>UI.prompt("0{bt}",Lib.obj[$E.$O[0].cid].n).then(i=>{if(i.i||!i.v)return;let t=$E.$O[0],d=Lib.obj.find(t=>t?.n===i.v);if(d&&d.ind===t.ind)d.cid<1e3?UI.$a("不能与内置物体重名！"):UI.confirm(i.v+" 已存在，是否覆盖？",0,"0{7}","0{8}").then(i=>{if(i.i)return;const o=$E._r,e={code:o.enc(),edit:$E.C.editDo(),pos:$E.C.editPos()};d=$E._G._o.find(i=>i.id===d.cid),d.add=Object.assign($M.cp(Lib._o[d.ind].add),$M.cp(t.add)),Lib.cO(d),$E.C.aplDo(o,e,0)});else{let d=1e3;for(;Lib.obj[d];)++d;$E.preset.new($E.preset.create(t.ind,d,$M.cp(t.add),i.v)),t.cid=d,$("p-name").tx(1===$E.$O.length?i.v:`${i.v} 等${$E.$O.length}个物体`),UI.$a("保存成功！可前往 物体->自定义 中查看")}}),t.onclick=()=>{let i=$E.$O[0];(new UI.M).h("替换物体").ac(UI.span(`${Lib.obj[i.cid].n} →`),UI.O(...Lib.obj.filter(t=>t.ind===i.ind&&t.cid!==i.cid).map(i=>i.n+":"+i.cid)),El("br"),UI.span("应用到"),UI.O("选中物体:1","当前房间:2","所有房间:3"),UI.S("覆盖属性",0,1).on(function(i){this.pS().nv=i})).b("替换","0{6}").then(function(t){if(!t.i){let t=i.cid,d=$c("sl",this.box),o=Number(d[0].v),e=Number(d[1].v),n=d[1].nv;if(o)switch($E.C._U(),e){case 1:_C.dec.setFlag($E._r.flag);for(let i=0;i<$E.$O.length;i++){let d=$E.$O[i];if(d.cid===t){let i;n?(i={...Lib.obj[o]},i.add=$M.cp(i.add)):i=_C.dec.obj($E._r.encO(d),0,o)[0];let t=i.add;if(t.dep=d.add.dep,d.cid=i.cid,d.add=t,void 0!==t.til){d.ti=[t.til/1e3|0,t.til%1e3];let i=d.LT[0],o=d.LT[1],{w:e,h:n}=d;d.calcRect(),$E.E.rTile(i,o,e,n,d)}else{d.calcRect();let i=t.txt;void 0!==i&&(t.txt="",d.txt=i)}}}$E.sfO.redraw(),$E.reloadPro();break;case 2:case 3:$E._r.enc(),2===e?$E._r.obj=$E._r.renc(null,i=>i===t?o:i):$E._R.for(i=>i.obj=i.renc(null,i=>i===t?o:i)),$E._r.dec(),$E.$P()}}})},$("p-info").ap(t,i)},_lock:!1,get lock(){return this._lock},set lock(i){i!==this._lock&&(this._lock=i,i?$E._O&&($E._O.style.borderColor="",$E._O=null):($E.sfE.canvas.style.opacity=.6,$E.$O=null,$E.C.dM(0,0,1)))}},$E.$P=(i,t)=>{$E.inEdit&&$E.exitEdit();const d=$c("p-ev"),o=["0{w}","0{bu}","0{bv}","0{bw}"],e=$E.pro;if(e.buildIn=t,d.for((i,t)=>{i.innerHTML=`<h4>${o[t]}</h4>`,i.style.paddingBottom="",i.firstChild.onclick=t=>{t.target===i.firstChild&&(i.hC("fold")?i.rC("fold"):i.aC("fold"),$E.fixH($c("cat")[18]))}}),$c("mb").for(i=>{i.pN.hC("op")||i.remove()}),i){let n=i[0];if(t)$("p-name").tx(t.name).ap(UI.B2("0{bx}").on(()=>$E._G.R.for(i=>{0!==i.type&&i!==$E._r&&(i.bobj[t.id].add=$M.cp(n.add))}))),$E.drawThn($("p-spr").ch[0],t.spr),$E.pro.lock=!0,$("p-info")._h();else{const t=Lib.obj[n.cid].n;if($("p-name").tx(1===i.length?t:`${t} 等${i.length}个物体`),n.spr.for((i,t)=>$E.drawThn($("p-spr").ch[0],i,0===t)),0===n.ind)return;$("p-info")._s()}d.for((i,d)=>{i.i=d;let n=i.firstChild;const c=$E.$O;d&&!t&&(n.ap(El("div","p-btn tip L",{innerHTML:UI.ico("copy")+`<p>0{91}${o[d]}</p>`})).onclick=function(){let i=this.pN.pN.i,t=JSON.stringify(c[0].add[["mov","tml","trg"][i-1]]);e.clipBoard[i]=t?JSON.parse(t):[]},e.clipBoard[d]&&(n.ap(El("div","p-btn tip L",{innerHTML:UI.ico("paste")+`<p>0{92}${o[d]}</p>`})).onclick=function(){let i=this.pN.pN.i;e.applyPro(i,e.clipBoard[i],c),$E.reloadPro()}),c.length>1&&(n.ap(El("div","p-btn tip L",{innerHTML:`${UI.ico("brush")}<p>0{by}</p>`})).onclick=function(){let i=this.pN.pN.i,t=JSON.stringify(c[0].add[["mov","tml","trg"][i-1]]);e.applyPro(i,t?JSON.parse(t):[],c.slice(1))})),t&&!t.add[d]||(i.style.paddingBottom="28px",i.ap(El("div","p-add",{innerHTML:UI.ico("add")+"0{7f}"})).onclick=function(){e.acChs.set(this,this.pN.i)})});const c=e.acLib;(!t||t&&void 0!==n.x)&&e.apAc(n,n.add,c[0][0],d[0],0),void 0!==n.add.til&&e.apAc(n,n,c[0][17],d[0],0);for(let i in n.add)switch(i){case"mov":n.add.mov.for((i,t)=>{i.i=t,e.apAc(n.add.mov,i,c[1][i[0]],d[1],!0)});break;case"tml":n.add.tml.for((i,t)=>{i.i=t;let o=e.apAc(n.add.tml,i,c[2][0],d[2],!0);o.aC("fold"),i[1].for((t,d)=>{t.i=d,e.apAc(i[1],t,e.actInd(t[0]),o,!0)})});break;case"trg":n.add.trg.for((i,t)=>{i.i=t;let o=$c("p-ac",e.apAc(n.add.trg,i,c[3][0],d[3],!0));i[2].for((t,d)=>{t.i=d,e.apAc(i[2],t,e.conInd(t[0]),o[0],!0)}),i[3].for((t,d)=>{t.i=d,e.apAc(i[3],t,e.actInd(t[0]),o[1],!0)})});break;default:let t=c[0].find(t=>t.p[0]==i);!t||t.c&&t.c&n.lib||e.apAc(n,n.add,t,d[0],t.del)}$E.C.dM(0,0,1)}else $E.$O=null,$E.pro.lock=!1,$("p-spr").ch[0].getContext("2d").clearRect(0,0,32,32),$("p-name").tx("0{1i}"),$("p-info")._h(),$E.fixH($c("cat")[18]),$("screen").out?$E.C.dM(0,0,1):$E.C.dM(...$E.C.cXY())},$E.reloadPro=()=>{let i=$E.C.editPos();$E.$P($E.$O,$E.pro.buildIn),$E.C.rcPos(i)},$E.pro.initLib=function(){const i="i:-32~4032+1*16",t="i:1~6000+1-1",d="i:-25~25+0.01-1",o="0{bz}<>i:0.1~128+0.1-4|0{c0}<>i:0.1~128+0.1-2,~>i:0.1~128+0.1-4",e="0{bz}<>i:-128~128+0.1|0{c0}<>i:-128~128+0.1,~>i:-128~128+0.1",n="0{bz}<>i:0~359+1*15|0{c0}<>i:-360~360+1*15,~>i:-360~360+1-360*15|0{c1}<>i:0~359+1-0*90|0{c2}<>|0{c3}<>",c="固定值<>i:-128~128+0.1|随机值<>i:-128~128+0.1,~>i:-128~128+0.1|增加值<>i:-128~128+0.1|倍乘值<>i:-5~5+0.01-1",r=[1],l=[1,2],p=[1,2,3],a=[1,2,3,4],s=["0{c4}","0{c5}"],h=["=",">","<","≥","≤","≠"],f=["0{7p}:L","0{c6}:R","0{7q}:U","0{c7}:D","0{c8}(Shift):J","0{9j}(Z):z","W:w","A:a","S:s","D:d","X:x"],E=["0{c9}","0{ca}"],b=["0{b9}","0{cb}","0{cc}","0{5g}","0{17}","0{5i}",["0{v}",...Lib._o.slice(1).map((i,t)=>i.n+":"+(t+6))]],m=[[["0{cd}","思源黑体(默认):0","站酷快乐体:5","小赖字体:20"],["常规","AveriaSansLibre:1","Grenze:3","Jua:7","Orbitron:9","Play:16","Quicksand:17"],["标题体","Bangers:2","HanaleiFill:4","JotiOne:6","Limelight:11","MarcellusSC:13","Righteous:18","SairaStencilOne:19","Yukarimobile:21"],["艺术","Lobster:12","Pacifico:15"],["像素风","KarmaticArcade:8","Kongtext:10","OrigamiMommy:14"]],"i:12~128+1",["1{2o}","0{ce}","0{cf}","0{cg}"],["0{ch}","0{ci}","0{cj}"],"c","i:0~8+1","c","i:0~16+1","c"],u=()=>{let i=$E.$O[0],t=$E.sfE;t.clear(),i.dInfo(),t.strokeStyle="#000",$E.C.dSelect(i.R[0],i.LT[1],i.w,i.h)},g=()=>{let i=$E.C,t=$E.$O[0],d=$E.C.colPosObj(i.mTX,i.mTY);if(!d||0===d.ind)return;let o=t.add.gid;0===i.mB?d.cG(t)||d.add.gpi?.startsWith(o)||($E.C._U(),t.group(d),u()):2===i.mB&&d.add.gpi?.startsWith(o)&&($E.C._U(),delete d.add.gpi,10!==d.ind&&(d.dInfo=null),u())};this.acAO=s,this.acFont=m[0],this.acLib=[[{n:"0{ck}",ico:"position",p:["x","y"],pn:["x","y"],t:[i,"i:-32~3072+1*16"],d:1,h:1,del:0},{n:"0{1j}",ico:"layer",p:["dep"],pn:["0{cl}"],t:["i:0~11+1-7"],d:1,del:0,c:16},{n:"0{cm}",ico:"col",p:["cm"],t:[["无碰撞","一般物体","固体","板子","致命","水"]],del:0,c:1},{n:"0{cn}",ico:"rotate",p:["a"],t:[["图像原点","左上","中上","右上","左中:5","中心:6","右中:7","左下:9","中下:10","右下:11"]],d:1,c:34},{n:"0{co}",ico:"resize",p:["w","h"],pn:["0{7a}","0{7b}"],t:["i:16~800+1-32*16","i:16~608+1-32*16"],apl:["w"],d:1,calc:1,del:0},{n:"0{cp}",ico:"resize",p:["scx","scy"],pn:["x","y"],t:[d,d],d:1,c:2},{n:"0{af}",ico:"ang",p:["ang"],t:["i:0~359+1-0*15"],d:1,c:2},{n:"显示",ico:"see",p:["hd"],t:[["可见","不可见"]],d:1},{n:"0{cq}",ico:"see",p:["al"],pn:["alpha"],t:["i:0~1+0.01-1*0.1"],d:1,c:2},{n:"0{69}",ico:"text",p:["txt"],t:["txt"],apl:["txt"],del:0},{n:"0{cr}",ico:"label",p:["ftf","fts","ftt","fta","ftc","fst","fkc","fsd","fsc"],pn:["","0{co}\n","0{cs}","0{ct}","0{ar}","0{cu}","0{ar}","0{cv}","0{ar}"],t:m,apl:["ftf"],d:1,del:0},{n:"传送",ico:"warp",p:["wr","ws","wx","wy"],pn:["房间"," 效果","位置(为0则使用出生点位置) x","y"],t:[["下一房间:128","当前房间:0",["指定房间",()=>$E._R.map(i=>i.name+":"+(i.id-$E._r.id))]],["淡入淡出","无效果","传送效果","旋转矩形","Kid形状"],"i:0~4000+1","i:0~3040+1"],apl:["ws"],del:0},{n:"长度",ico:"len",p:["len"],t:["i:32~800+1-32*16"],apl:["len"],d:1,del:0},{n:"激光状态",ico:"label",p:["lso"],pn:["开启激光"],t:["s"],apl:["lso"],del:0},{n:"激光属性",ico:"label",p:["lst"],pn:["穿透固体"],t:["s"],apl:["lst"],del:0},{n:"摩擦力",ico:"label",p:["frc"],t:["i:0.1~1+0.1-0.1"],apl:["frc"],del:0},{n:"数量",ico:"label",p:["num"],t:["i:2~72+1-4"],apl:["num"],d:1,del:0},{n:"贴图",ico:"label",p:["ti"],t:["自动贴图<>|手动贴图<贴图编码>t"],apl:["til"],d:1,del:0,h:1},{n:"传送速度",ico:"acc",p:["csp"],t:["i:1~32+1-3"],apl:["csp"],del:0},{n:"组合物体",ico:"if",p:["gid","gpm"],t:[{n:"选择组合物体",click:g,move(i,t){t.drag&&g()},draw:u},"自由组合<>|圆形组合<数量>i:1~100+1-8,半径>i:0~512+1-96*16|多边形组合<边>i:3~8+1-4,半径>i:0~512+1-96*16,数量>i:1~16+1-3"],apl:["gpm"],d:1,del:0},{n:"组合控制\n",ico:"if",p:["csc","cag","cds"],pn:["控制缩放","控制角度","控制销毁"],t:["s","s","s","s"],apl:["csc"],del:0},{n:"跳跃段数",ico:"ply",p:["jump","sJump"],pn:["(-1为无限跳)","存档保存"],t:["i:-1~10+1-2","s"],apl:["sJump"],del:0},{n:"重力方向",ico:"ply",p:["g_","sGravDir"],pn:["","存档保存"],t:[["向下:270","向上:90","向左:180","向右:0"],"s"],apl:["g_"],del:0},{n:"子弹连发",ico:"ply",p:["conShoot"],t:["s"],apl:["conShoot"],del:0},{n:"AD位移",ico:"ply",p:["adMove"],t:["s"],apl:["adMove"],del:0},{n:"生命值",ico:"ply",p:["life"],t:["i:1~10+1-1"],apl:["life"],del:0},{n:"文本",ico:"text",p:["txt1","ftf1","fts1","ftt1","fta1","ftc1","fst1","fkc1","fsd1","fsc1"],pn:["","字体","大小\n","样式","对齐","颜色","描边","颜色","发光","颜色"],t:["txt",...m],apl:["txt1"],d:1,del:0},{n:"提示文本",ico:"text",p:["txt2","ftf2","fts2","ftt2","fta2","ftc2","fst2","fkc2","fsd2","fsc2"],pn:["","字体","大小\n","样式","对齐","颜色","描边","颜色","发光","颜色"],t:["txt",...m],apl:["txt2"],d:1,del:0}],[{n:"移动到位置",ico:"move",ind:0,p:a,pn:["x","y","速度","速度模式"],t:["相对位置<>i:-999~999+1*32|绝对位置<>i:-32~4032+1*32","相对位置<>i:-999~999+1*32|绝对位置<>i:-32~3072+1*32",o,["匀速","减速"]],c:2},{n:"移动距离",ico:"move",ind:1,p:a,pn:["距离","方向","速度","速度模式"],t:["i:1~999+1-32*32",n,o,["匀速","减速"]],c:2},{n:"水平+竖直速度",ico:"move",ind:2,p:l,pn:["水平速度","竖直速度"],t:[e,e],c:2},{n:"速度+方向",ico:"move",ind:3,p:l,pn:["速度","方向"],t:[o,n],c:2},{n:"加速度",ico:"acc",ind:4,p:l,pn:["大小","方向"],t:["i:0.01~1+0.01-0.2","i:0~359+1-270*90"],c:2},{n:"角度控制",ico:"ang",ind:5,p:r,pn:["角度"],t:["与运动方向夹角<>i:0~359+1-0*90|与指向玩家方向夹角<>i:0~359+1-0*90"],c:2},{n:"旋转",ico:"rotate",ind:6,p:r,pn:["旋转速度"],t:["固定值<>i:-180~180+0.1-1|随机值<>i:-180~180+0.1,~>i:-180~180+0.1"],c:2},{n:"摆动",ico:"swing",ind:7,p,pn:["初始角","幅度","周期"],t:["i:0~359+1","i:1~180+1-30","i:4~1000+1-100"],c:2},{n:"水平简谐运动\n",ico:"sin",ind:8,p,pn:["振幅","周期","初相"],t:["i:1~800+1-32*16","i:4~1000+1-100","i:0~359+1-0*90"],c:2},{n:"竖直简谐运动\n",ico:"sin",ind:9,p,pn:["振幅","周期","初相"],t:["i:1~608+1-32*16","i:4~1000+1-100","i:0~359+1-0*90"],c:2},{n:"路径",ico:"path",ind:10,p:["pth"],t:[{n:"编辑路径"}],c:2},{n:"跟随玩家",ico:"aim",ind:11,p:r,pn:["速度"],t:["i:0.1~32+0.1-1"],c:10},{n:"同步玩家",ico:"aim",ind:12,p:a,pn:["同步x","偏移量","同步y","偏移量"],t:["s","i:-800~800+1-0*32","s","i:-800~800+1-0*32"],c:10},{n:"运动障碍",ico:"stop",ind:13,p:l,pn:["","效果"],t:[["固体","板子","致命","水",["物体",...Lib._o.slice(1).map((i,t)=>i.n+":"+(t+4))]],["阻挡","反弹"]],c:3}],[{n:"0{bv}",ico:"timer",type:"tml",copy:"tml",p:[0],pn:["直接运行"],t:["s1"]}],[{n:"0{bw}",ico:"logic",type:"trg",copy:"trg",p:[0,1],pn:["执行顺序","执行次数(0=无限)"],t:[["时间轴前","移动前","移动后","手动执行"],"i:0~999+1-1"]}],[{n:"间隔",ico:"timer",ind:.01,p:r,t:["帧数<>i:1~6000+1-50|节拍数<>i:1~999+1-1|随机值<>i:1~6000+1-50,~>i:1~6000+1-50"]},{n:"循环",ico:"redo",ind:.02,p:l,pn:["节点","次数(0=无限)"],t:["i:0~999+1-0","i:0~999+1-0"]}],[{n:"改变碰撞属性",ico:"col",ind:1.01,p:r,t:[["无碰撞","一般物体","固体","板子","致命","水"]],c:1},{n:"改变缩放",ico:"resize",ind:1.02,p,pn:["x","y","过渡时长"],t:[`固定值<>${d}|增加值<>i:-5~5+0.01`,`固定值<>${d}|增加值<>i:-5~5+0.01`,t],c:2},{n:"改变角度",ico:"ang",ind:1.03,p:l,pn:["角度","过渡时长"],t:["固定值<>i:0~359+1*15|增加值<>i:-360~360+1*15",t],c:2},{n:"改变显示",ico:"see",ind:1.04,p:r,t:[["可见","不可见","相反"]]},{n:"改变透明度",ico:"see",ind:1.05,p:l,pn:["alpha值","过渡时长"],t:["固定值<>i:0~1+0.01-1*0.1|增加值<>i:-1~1+0.01*0.1",t],c:2},{n:"改变中心点",ico:"rotate",ind:1.06,p:r,t:[["图像原点","左上","中上","右上","左中:5","中心:6","右中:7","左下:9","中下:10","右下:11"]],c:32},{n:"改变长度",ico:"len",ind:1.07,p:l,pn:["长度","过渡时长"],t:["固定值<>i:32~800+1-32*16|增加值<>i:-800~800+1*16",t],apl:["len"]},{n:"激光状态",ico:"label",ind:1.08,p:r,t:[["关闭","开启","相反"]],apl:["lso"]},{n:"激光属性",ico:"label",ind:1.09,p:r,t:[["不穿透固体","穿透固体","相反"]],apl:["lst"]},{n:"改变位置",ico:"position",ind:1.1,p:l,pn:["x","y"],t:["相对位置<>i:-999~999+1*32|绝对位置<>i:-32~4032+1*32","相对位置<>i:-999~999+1*32|绝对位置<>i:-32~3072+1*32"],c:2},{n:"摩擦力",ico:"label",ind:1.11,p:r,t:["i:0.1~1+0.1-0.1"],apl:["frc"]}],[{n:"停止运动",ico:"stop",ind:2.01,c:2},{n:"改变速度",ico:"acc",ind:2.02,p:r,pn:["速度"],t:[c],c:2},{n:"改变水平速度",ico:"acc",ind:2.03,p:r,pn:["水平速度"],t:[c],c:2},{n:"改变竖直速度",ico:"acc",ind:2.04,p:r,pn:["竖直速度"],t:[c],c:2},{n:"改变方向",ico:"ang",ind:2.05,p:r,pn:["方向"],t:["固定值<>i:0~359+1*15|随机值<>i:-360~360+1*15,~>i:-360~360+1-360*15|指向玩家<>|离开玩家<>|增加值<>i:-179~180+1*15"],c:2}],[{n:"销毁",ico:"trash",ind:3.01,p:r,pn:["效果"],t:[["无","掉落","淡出"]]},{n:"改变子图像",ico:"label",ind:3.02,p:r,t:[["0","1","切换"]],c:16},{n:"设置触发器",ico:"trg",ind:3.03,p:[2,1],pn:["","触发器"],t:[["开启","关闭","切换"],"i:0~999+1-0"]},{n:"改变全局变量",ico:"label",ind:3.04,p:l,pn:["","值"],t:[[["自定义",()=>Object.keys($E._G.VAR).map(i=>i+":"+i)]],"固定值<>i:-999~999+1|增加值<>i:-999~999+1"]},{n:"游戏控制",ico:"warp",ind:3.05,p:r,t:[["新游戏","继续游戏"]]},{n:"切换房间\n",ico:"warp",ind:3.06,p:l,pn:["房间"," 效果"],t:[["下一房间:128","当前房间:0",["指定房间",()=>$E._R.map(i=>i.name+":"+(i.id-$E._r.id))]],["淡入淡出","无效果"]]},{n:"音乐控制",ico:"snd",ind:3.07,p:r,t:[["播放","暂停","重置"]]},{n:"改变成员变量",ico:"label",ind:3.08,p:l,pn:["","值"],t:[["a","b","c","d"],"固定值<>i:-999~999+1|增加值<>i:-999~999+1"]}],[{n:"开始(继续)时间轴",ico:"timer",ind:4.01,p:r,pn:["编号"],t:["i:0~999+1-0"]},{n:"暂停时间轴",ico:"timer",ind:4.02,p:r,pn:["编号"],t:["i:0~999+1-0"]},{n:"停止(重置)时间轴",ico:"timer",ind:4.03,p:r,pn:["编号"],t:["i:0~999+1-0"]},{n:"设置时间轴节拍",ico:"timer",ind:4.04,p:r,pn:["1拍时长"],t:["i:1~6000+1-50"]},{n:"执行条件触发",ico:"logic",ind:4.05,p:r,pn:["编号"],t:["i:0~999+1-0"]}],[{n:"播放音效",ico:"snd",ind:5.01,p:l,pn:["","音高"],t:[[["玩家","射击:st","跳跃:jp","死亡:dth"],["机关","机关:bc","破坏:brk","Spike:spk","Cherry:chr"],["物体","弹簧:spr","金币:coin"],["Boss","打击:hit","弹幕:bst"],["音效","音效1:ej","音效2:gj","音效3:lj"]],"i:-36~36+1"]},{n:"创建残影",ico:"act",ind:5.02,p:[1,2,3,4,5,6,7],pn:["淡出时长","x缩放速度","y缩放速度","水平速度","竖直速度","重力","旋转速度"],t:["i:2~1000+1-10","i:-0.5~5+0.01","i:-0.5~5+0.01",e,e,"固定值<>i:0~1+0.01|随机值<>i:0~1+0.01,~>i:0~1+0.01","固定值<>i:-180~180+0.1-0|随机值<>i:-180~180+0.1,~>i:-180~180+0.1"],c:16}],[],[{n:"+1跳",ico:"ply",ind:7.01,p:r,t:[["刷新一次跳跃","增加一次跳跃"]],c:8},{n:"改变跳跃段数",ico:"ply",ind:7.02,p:r,pn:["(-1为无限跳)"],t:["i:-1~10+1-2"],c:8},{n:"改变玩家重力方向",ico:"ply",ind:7.03,p:r,t:[["向下:270","向上:90","向右:0","向左:180"]],c:8},{n:"设置玩家运动",ico:"ply",ind:7.04,p:l,pn:["速度","方向"],t:[o,n],c:8}],[{n:"触发器",ico:"trg",ind:1.01,p:[2,3,1],pn:["编号","",""],t:["i:0~999+1-0",["开启","关闭"],s]},{n:"位置",ico:"position",ind:1.02,p:[2,3,4,1],t:[["x","y"],h,i,s]},{n:"显示",ico:"see",ind:1.03,p:[2,1],t:[["可见","不可见"],s]},{n:"缩放",ico:"resize",ind:1.04,p:[2,3,4,1],t:[["x","y"],h,d,s]},{n:"玩家位置\n",ico:"ply",ind:1.05,p:[2,3,4,1],t:[["x","y"],h,i,s],c:8},{n:"跳跃段数",ico:"ply",ind:1.06,p:[2,3,1],t:[h,"i:-1~10+1-2",s],c:8},{n:"全局变量",ico:"label",ind:1.07,p:[2,3,4,1],t:[[["自定义",()=>Object.keys($E._G.VAR).map(i=>i+":"+i)]],h,"i:-999~999+1",s]},{n:"存档状态",ico:"info",ind:1.08,p:[2,1],t:[["无存档","有存档"],s]},{n:"重力方向",ico:"ply",ind:1.09,p:[2,3,1],t:[["=","≠:5"],["向下:270","向上:90","向右:0","向左:180"],s],c:8},{n:"成员变量",ico:"label",ind:1.1,p:[2,3,4,1],t:[["a","b","c","d"],h,"i:-999~999+1",s]},{n:"速度",ico:"acc",ind:1.11,p:[2,3,4,1],t:[["水平速度","竖直速度","合速度"],h,"i:-128~128+0.1",s]}],[{n:"碰撞",ico:"col",ind:2.01,p:[2,1],t:[b,s],c:1},{n:"离开",ico:"col",ind:2.02,p:[2,1],t:[b,s],c:1},{n:"碰撞中",ico:"col",ind:2.03,p:[2,1],t:[b,s],c:1},{n:"未碰撞",ico:"col",ind:2.04,p:[2,1],t:[b,s],c:1}],[{n:"按下键盘",ico:"keyboard",ind:3.01,p:[2,1],t:[f,s],c:4},{n:"松开键盘",ico:"keyboard",ind:3.02,p:[2,1],t:[f,s],c:4},{n:"按住键盘",ico:"keyboard",ind:3.03,p:[2,1],t:[f,s],c:4},{n:"按下鼠标",ico:"click",ind:3.04,p:[2,1],t:[E,s],c:4},{n:"松开鼠标",ico:"click",ind:3.05,p:[2,1],t:[E,s],c:4},{n:"按住鼠标",ico:"click",ind:3.06,p:[2,1],t:[E,s],c:4}]];const y={f(i,t,d){const o=d.lib;if($E.$O&&k.obj){if($E.C._U(),k.m){let i=[o.ind],t=k.node.pro.i;i.i=t,k.add=i,k.obj.splice(t,0,i);for(let i=t+1;i<k.obj.length;i++){let d=k.obj[i];d.i=i,.02===d[0]&&d[1]>=t&&(d[1]++,d.set())}}else if(!k.add){let i=[o.ind];if(i.i=k.obj.push(i)-1,k.add=i,void 0===o.ind)throw"No lib ind"}$E.pro.apAc(k.obj,k.add,o,k.node,1,k.m)}}},O=[],v=(i,t)=>{for(let d=1;d<i.length;d++)if(Array.isArray(i[d]))v(i[d],t);else{let o=t?this.conInd(i[d]):this.actInd(i[d]);i[d]=o.n+"#"+o.ico+":"+(t?"-":"+")+i[d]}return i};this.acLib[0].for(i=>{0!==i.del&&O.push(i.n+"#"+i.ico+":"+i.p[0])}),this.acLib[4].for(i=>O.push(i.n+"#"+i.ico+":+"+i.ind));const x=O.length;[["0{cw}",0,1,2,3,4,10],["0{cx}",5,6,7],["0{cy}",8,9,11,12,13],["0{cz}",1.11,1.02,1.03,1.04,1.05,3.02,1.06,1.01,1.07,1.08,1.09,1.1],["0{bu}",["0{cw}",0,1,2,3,4,10],["0{cx}",5,6,7],["0{cy}",8,9,11,12,13],["0{d0}",...this.acLib[6].map(i=>i.ind)]],["0{d1}/0{d2}",3.01],["0{d3}",3.03,3.04,3.08,3.05,3.06,3.07],["0{d4}",4.01,4.02,4.03,4.04,4.05],["0{18}",5.01,5.02],["0{b9}",...this.acLib[11].map(i=>i.ind)],["0{bn}",1.01,["属性",1.02,1.04,1.03,1.11],["0{b9}",1.05,1.06,1.09],["0{9f}",1.07,1.1],["0{x}",1.08]],["0{d5}",...this.acLib[13].map(i=>i.ind)],["0{d6}",["0{d7}",3.01,3.02,3.03],["0{d8}",3.04,3.05,3.06]]].for((i,t)=>O.push(v(i,t>=10)));const w=(i,t)=>{let d=0;if(i.lib)d=!(t?.(i.lib)||((i,t)=>(0|i.c)&t.lib)(i.lib,$E.$O[0])||((i,t)=>i.apl&&i.apl.some(i=>void 0===t.add[i]))(i.lib,$E.$O[0]));else if(i.hC("arr"))for(let o of i.lastChild.ch)w(o,t)&&(d=1);return d?i._s():i._h(),d},k=UI.mb(y,O,48);$c("op",k).for(i=>{i.v&&("+"===i.v[0]?i.lib=this.actInd(Number(i.v.slice(1))):"-"===i.v[0]?i.lib=this.conInd(Number(i.v.slice(1))):i.lib=this.acLib[0].find(t=>t.p[0]===i.v)),css(i,{border:"none",borderRadius:"4px"})}),k.set=(i,t,d)=>{k.node=i.pN,k.m=i.hC("tml-add"),k.add=null;const o=$E.$O[0],e=o.add;if(2===t||3===t){let i,d;$E.C._U(),2===t?(e.tml??=[],i=[1,[]],d=e.tml):(e.trg??=[],i=[1,1,[],[]],d=e.trg),i.i=d.push(i)-1,this.apAc(d,i,this.acLib[t][0],k.node)}else{let n=k.ch;switch(css(n,{display:"none"}),t){case 0:for(let i=0;i<x-2;i++)w(n[i],i=>e&&i.p.some(i=>void 0!==e[i]));k.obj=o,k.add=e;break;case 1:e.mov??=[];for(let i=x;i<x+3;i++)w(n[i],i=>e.mov.find(t=>t[0]===i.ind));k.obj=e.mov;break;case 4:n[x-1]._s(),n[x-2]._s();default:let i=x+3,c=x+10;for(5===t&&(i=c,c=n.length);i<c;)w(n[i++]);k.obj=d}UI.mbO(k,i)}},this.acChs=k},$E.preset={create(i,t,d,o){let e={n:o??Lib._o[i].n,ind:i,id:t,add:$M.cp(Lib._o[i].add)};return d&&Object.assign(e.add,d),this._o[i]&&(this._o[i].sc&&1===(e.add.scx??1)&&1===(e.add.scy??1)&&(e.sc=1),this._o[i].ang&&!e.add.ang&&(e.ang=1),this._o[i].a&&!e.add.a&&(e.a=1)),e},init(){const i={6:{trg:[[1,1,[[2.01,0,1]],[[5.01,"brk",0],[3.01,1]]]]},19:{mov:[[4,.4,270],[13,0,0]]},23:{trg:[[1,1,[[2.01,0,0]],[[7.04,[0,10],[2,90]],[3.02,1],[5.01,"spr",0]]]]},24:{trg:[[1,0,[[2.01,0,0]],[[7.04,[0,10],[2,90]]]]]},25:{trg:[[1,1,[[2.01,0,0]],[[7.01,0],[5.01,"ej",0],[3.01,0]]]]},26:{trg:[[1,0,[[1.06,0,5,3],[2.01,0,0]],[[7.02,3],[5.01,"gj",0],[5.02,25,.05,.05,[0,0],[0,0],[0,0],[0,0]]]]]},27:{trg:[[1,0,[[1.06,0,5,2],[2.01,0,0]],[[7.02,2],[5.01,"lj",0],[5.02,25,.05,.05,[0,0],[0,0],[0,0],[0,0]]]]]},28:{trg:[[1,0,[[1.06,0,5,1],[2.01,0,0]],[[7.02,1],[5.01,"lj",0],[5.02,25,.05,.05,[0,0],[0,0],[0,0],[0,0]]]]]},29:{trg:[[1,0,[[1.06,0,5,-1],[2.01,0,0]],[[7.02,-1],[5.01,"gj",0],[5.02,25,.05,.05,[0,0],[0,0],[0,0],[0,0]]]]]},34:{trg:[[1,0,[[1.09,0,5,90],[2.01,0,0]],[[7.03,90]]]]},35:{trg:[[1,0,[[1.09,0,5,270],[2.01,0,0]],[[7.03,270]]]]},36:{hd:1,trg:[[0,1,[[2.01,0,0]],[[3.03,0,0]]]]},37:{trg:[[0,1,[[2.01,0,1]],[[3.03,0,0],[3.02,1]]]]},38:{trg:[[0,1,[[2.01,0,0]],[[3.03,0,0],[3.02,1]]]]},41:{trg:[[2,0,[[2.01,0,0]],[[3.02,1]]],[2,0,[[2.02,0,0]],[[3.02,0]]]]},50:{al:0,trg:[[1,0,[[2.01,0,1]],[[1.05,[0,1],1],[1.05,[0,0],20]]]]}},t=[1,2,3,5,6,50,7,8,9,13,14,21,36,40,43,44,45,46,47,48],d=[7,11,13,14,23,24,37,40],o=[25,21,38];Lib._o.for((e,n)=>{let c=this.create(n,n,i[n]);t.includes(n)&&(c.sc=1),d.includes(n)&&(c.ang=1),o.includes(n)&&(c.a=1),this._o[n]=c}),this._o.push(this.create(3,500,{cm:0,trg:[[1,1,[[2.01,0,0]],[[3.01,1],[5.01,"brk",0]]]]},"假砖块"),this.create(3,501,{hd:1,trg:[[2,1,[[2.01,0,0]],[[1.04,0],[5.01,"bc",0]]]]},"隐藏砖块"),this.create(10,502,{gpm:[1,8,96],csc:0,cag:0,mov:[[6,[0,1]]]},"圆圈")),this.spr={};for(let i in Res.spr)this.spr[i]=El("canvas",0,{width:32,height:32}),$E.drawThn(this.spr[i],Res.spr[i],0)},_o:[],_l:[[0,1,2],[3,500,501,4,5,6,50],[7,8,9,11,12],[10,502,13,14,15,16,49,17,18,19,25,20,51,21,22,23,24],[26,27,28,29,30,31,32,33,34,35],[36,37,38],[39,40,41,42,43,44,45,46,47,48],[],[]],_h:[500,501],updHide(i,t){$E._G._h??=[];let d=$E._G._h.indexOf(i),o=-1!==d;this._h.includes(i)^o^t&&(o?$E._G._h.splice(d,1):$E._G._h.push(i))},_O(i,t){let d=El("div","obj tip ib"),o=El("canvas",0,{width:32,height:32}),e=UI.mb(o,[["快捷键#keyboard","0:48","1:49","2:50","3:51","4:52","5:53","6:54","7:55","8:56","9:57"],"隐藏#unsee","取消隐藏#see","删除#trash"],16);d.ap(El("div"),El("p","a-cen").tx(i.n),o),d.obj=i,d.o={...Lib.obj[i.id]},i.sc&&(d.o.scx=d.o.scy=1),i.ang&&(d.o.ang=0),d.a=i.a??0,d.spr=d.o.spr.map(i=>Res.spr[i]),d.setKey=(i,t)=>{i?(d.id="hObj"+i,d.firstChild.tx(i-48)._s(),t&&App.sC("edit","key"+i,d.o.id)):(d.id="",d.firstChild._h())};for(let t=48;t<58;t++)if(i.id===App.gC("edit","key"+t)){d.setKey(t);break}return d.onclick=()=>{$E._O&&($E._O.style.borderColor=""),d.style.borderColor="#fd0",$E._O=d,$E.pro.lock=!1},d.oncontextmenu=()=>e.open(),e.style.fontSize="14px",o.f=(i,t,o)=>{switch(i){case 3:UI.confirm("确认要删除该物体？").then(i=>{if(!i.i){let i=d.o.cid;$E._r.enc(),$E._R.for(t=>t.obj=t.renc(({prop:t,code:d})=>t.cid===i?"":d)),$E._r.dec();let t=$E._G,o=t._o.indexOf(t=>t.id===i);~o&&t._o.splice(o,1),o=t._h.indexOf(i),~o&&t._h.splice(o,1),$E.fixH(d.pN),d.remove(),$E._O===d&&($E._O=null),$E.$O&&$E.$P()}});break;case 1:d.hide=1,d.style.opacity=.6,d.pN.hd&&d._h(),o._h(),o.nS()._s(),$E.preset.updHide(d.o.cid,1);break;case 2:d.hide=0,d.style.opacity=1,d._s(),o._h(),o.pS()._s(),$E.preset.updHide(d.o.cid,0);break;default:$("hObj"+i)?.setKey(),d.setKey(i,1)}},t?setTimeout(o.f,10,1,0,e.ch[1]):o.f(2,0,e.ch[2]),i.id<1e3&&e.ch[3]._h(),o.getContext("2d").drawImage(this.spr[d.o.spr[0]],0,0),d},set(){let i=$E._G._o??[],t=[...this._l,[]],d=$E._G._h??[],o=$c("cat",$("page"));i.for(i=>t.at(-1).push(i.id)),Lib.obj.length=0,t.for((t,e)=>{let n=o[8+e];$c("obj",n).for(i=>i.remove()),t.for(t=>{let o=(t<1e3?this._o:i).find(i=>i.id===t);o&&(Lib.cO(o),n.ap(this._O(o,this._h.includes(t)^d.includes(t))))}),$E.fixH(n)})},new(i){$E._G._o??=[],$E._G._o.push(i),Lib.cO(i);let t=$c("cat",$("page"));t[17].ap(this._O(i)),$E.fixH(t[17])},_:{0:{pro:[],mov:[],trg:[],tml:[],cod:[],act:[]},1:{pro:[],mov:[],trg:[],tml:[],cod:[],act:[]}},import(){},export(){}};