dac($("box"),""),Res.loadUp=()=>setTimeout(()=>{let t=$("loading");t.style.background="#0000",t._h(),ac($("box")),$E.loadComp?.(),$E.loadComp=null},$("loading").style.background||!$E.edit?100:200),$E.loadComp=()=>CIW.onready(()=>{$E.pro.init(),$E.preset.init(),$E.$P();let t=location.search.slice(1);t?$E.open(decodeURIComponent(t)):$E.openGame()}),Ipc.beforeClose=()=>Ipc.closeMsg=$E.modified?"0{7t}":"";{let t=[Res.loadBg({id:0,m:0})];Res.sndList.for(o=>t.push(Res.loadSnd(o))),Res.sprList.for((o,e)=>t.push(Res.loadSpr(o,Lib.thm[e]))),Res.fontList.for(o=>t.push(Res.loadFont(o)));for(let o=0;o<5;o++)t.push(Res.loadEmoji(o));Res.loadMax=t.length,Promise.all(t).catch(t=>{console.error(t),Res.fail(),dac($("box"),"")}),$c("page").for(t=>t.onmousedown=t=>{t.stopPropagation(),1===t.button&&t.preventDefault()}),$E.tab.for((t,o)=>t.onclick=()=>{$E.nowTab!==o&&(!o||$E._r?($E.nowTab=o,css($E.tab,{borderColor:""},o,{borderColor:"#5af"}),$("page").style.transform=`translateX(-${25*o}%)`):UI.$a("0{7u}"))});let o=$("btn").ch,e=$("rbtn").ch;o[0].onclick=()=>{if(!$E._G.R.length)return UI.$a("0{7v}");let t=$("screen");css(t,{background:"none",pointerEvents:"none"}),$E.sfC._h(),$t("canvas",t).for(t=>t._h()),$("htrack")._h(),$("vtrack")._h(),$("btn")._h(),$("rbtn")._s(),$("ctrl-e")._h(),$("ctrl-r")._s(),dac($("L"),""),$("bgmPv").hC("p")&&$("bgmPv").click(),$E.edit=!1,Res.reset(Infinity),$M.task(()=>{$R=new _C.$R($E.eG(1),1),$R.init(()=>e[0].click()),$E.loadComp=()=>$R?.start([$E._r?.ind,0,-1][App.gC("edit","start")],1),$E.atG(!1)})},o[0].reset=()=>{$E.edit=!0;let t=$("screen");css(t,{background:"",pointerEvents:""}),$E.sfC._s(),$t("canvas",t).for(t=>t._s()),$("htrack")._s(),$("vtrack")._s(),$("btn")._s(),$("rbtn")._h(),$("ctrl-e")._s(),$("ctrl-r")._h(),$E.inEdit||ac($("L")),css($("loading"),{background:"#0000",display:"none"}),ac($("box")),$E.atS()},o[1].onclick=()=>$E.openGame(),o[2].onclick=()=>$E.sG(!0),o[3].onclick=()=>{$E._r&&UI.confirm("0{7w}").then(t=>{if(t.i)return;$E.C._U();let o=$E._r;o.obj=(o.flag?.[2]??"|").repeat(o.ly.length-1),o.dec(),$E.$O&&$E.$P()})},o[4].onclick=()=>(new UI.M).t("0{7x}").t("- Cloud I Wanna 0{7y} (.ciwp)").t("- Jtool 0{7z} (.jmap)").b("0{80}","0{6}").then(t=>{t.i||UI.file(".ciwp,.jmap",t=>"ciwp"===t.slice(t.lastIndexOf(".")+1)?"DataURL":"Text").then(([t,o])=>{let e=$E.import[o.slice(o.lastIndexOf(".")+1)];e?e(t):UI.$a("0{81}")})}),o[5].onclick=()=>{let t=$E.eG(),o=UI.S("0{82}",1);$E.aGM(t),new UI.M(300).h("0{1p}").ac(o,UI.span("0{83} "),UI.S("0{84}",1,1).on(function(t){for(let o=this.nS();o;o=o.nS())o.set(t)}),...t.R.map(t=>UI.S("- "+t.name,1))).b("0{1p}","0{6}").then(function(e){if(!e.i){this.hold=!0,o.v||(t._s=[]);for(let e=t.R.length;e--;){let i=t.R[e];o.nS(3+e).v?o.v||(delete i.spr,delete i.bg,delete i.col):t.R.splice(e,1)}Ipc.zip(JSON.stringify(t),1,o=>{o?Ipc.dl(new Blob([o]),t.N+".ciwp",0,t=>t&&UI.$a("0{85}")):UI.$a("0{86}"),this.close()})}})},o[6].onclick=()=>UI.$a("0{87}"),css(o[7].ch,{color:"#888"},2,{}),o[7].onclick=function(t){let o=t.target,e=[...this.ch];if("SPAN"===o.tagName){let t=Number(o.innerText);if(!isNaN(t))return css(e.slice(2),{color:"#888"}),o.style.color="",$E.grid.set(t),$E.grid.draw()}$E.grid.show=!$E.grid.show,css(e.slice(0,2),{color:$E.grid.show?"":"#888"}),$E.grid.draw()},e[0].onclick=()=>{$R.exit(),o[0].reset()},doc.fonts.ready.then(()=>{[[["time","timer","",72],["dth","skull","",40]],[["room","warp","",72,"dots"]],[["plyX","ply"," x",66],["plyY",0,"y",66],["plyA",0,"xa",34]],[["fps",0,"FPS",28],["per",0,"",40],["rps",0,"",20],["perD",0,"",40]]].for((t,o)=>{let i=0,r=e[o+1];t.for(t=>{let o=r.ap(El("span","ib",{innerHTML:t[1]?UI.ico(t[1])+t[2]:t[2]})),e=r.ap(El("span",t[4]?"ab "+t[4]:"ab")),d=o.offsetWidth+t[3];o.style.width=d+"px",i+=d,e.id="g-"+t[0],css(e,{left:i-t[3]+12+"px",width:t[3]+"px",whiteSpace:"nowrap"})})}),css(e,{pointerEvents:"none"},0),$("rbtn")._h();let t=$("cbtn"),o=[];["keyboard","set"].for(e=>{let i=El("div","hover");i.innerHTML=UI.ico(e),o.push(i.ap(El("div","pointer"))),t.ap(i)});let i=UI.O("0{88}","0{89}","0{8a}"),r=UI.O("0{8b}","每5分钟","每1分钟");i.set(App.gC("edit","start")),r.set(App.gC("edit","autoSave")),o[0].ap(El("div","box",{id:"ctrl-e"}),El("div","box",{id:"ctrl-r"})),o[1].ap(El("div","box")._c(UI.span("0{8c}"),UI.Bar(150,App.gC("run","vol")/100,1,0,"var(--cbtl)").in(t=>Au.setVol(100*t)).on(t=>{App.sC("run","vol",Math.round(100*t))}),UI.span("0{8d}"),i.on(t=>App.sC("edit","start",t)),El("br"),UI.span("0{8e}"),r.on(t=>{App.sC("edit","autoSave",t),$E.atC(),$E.atS()}),UI.I("0{8f}",{m:.2,M:1,s:.1,value:App.gC("edit","gridOpacity")}).on(t=>{App.sC("edit","gridOpacity",t),$E.grid.al=t,$E.grid.draw()}),El("br"),UI.I("0{8g}",{m:10,M:500,value:App.gC("edit","undoDepth")}).on(t=>App.sC("edit","undoDepth",t)),UI.S("0{8h}",$E.showInvis).on(t=>{App.sC("edit","showInvis",t),$E.showInvis=t,$E.sfO.redraw()}),UI.S("0{8i}",App.gC("edit","autoSpk")).on(t=>App.sC("edit","autoSpk",t)))),css($c("box",t),{right:0,width:"240px",padding:"12px",fontSize:"16px"}),[[["0{8j}","0{8k}"],["0{8l}","0{8m}"],["Ctrl+0{8j}","0{8n}"],["Ctrl+0{8l}","0{8o}"],["Ctrl+0{8p}","0{8q}"],["Shift+0{8p}","0{8r}"],["W,A,S,D","0{8s}"],["0{8t}","0{8u}"],["0{8v}","0{8w}"],["0{8x}","0{8y}"],["0{8z},Delete","0{90}"],["Alt","0{91}"],["Ctrl+S","0{1m}"],["Ctrl+A","0{84}"],["Ctrl+C","0{92}"],["Ctrl+V","0{93}"],["Ctrl+X","0{94}"],["Ctrl+Z","0{95}"],["Ctrl+Shift+Z","0{96}"],["Tab","0{97}"],["G","0{98}"]],[["Ctrl+G","0{99}"],["Ctrl+S","0{9a}"],["Ctrl+0{8j}","0{9b}"],["Ctrl+0{8t}","0{9c}"]]].for((t,e)=>t.for(t=>o[0].ch[e].ap(El("div","op").tx(t[0])._c(El("span","fr").tx(t[1]))).style.paddingRight="6px")),o[0].lastChild._h()});let i=$c("cat");i[0].ap(UI.I("0{9d}",{l:32},330).on(t=>$E._G.N=t));let r=UI.p(UI.ico("add")+"0{9e}");r.onclick=()=>$E.addVar(),css(r,{display:"inline-block",marginLeft:"7px",cursor:"pointer"});let d=El("p").tx("0{9f}");d.ap(UI.help("0{9g}"),UI.span("0{9h}",0,15)),i[1].ap(UI.C("0{9i}",0,"0{9j}","0{9k}","0{9l}").on(t=>$E._G.S=t),d,El("div",0,{id:"vars"}),r),docReady.then(()=>{i[2].firstChild.ap(UI.help("0{z}")),i[2].onmousemove=function(t){if(t.stopPropagation(),this.drag){let o=this.dragI+(t.y-this.dragY+16>>5),e=this.drag.room.ind;if(o!==e&&(o<0&&(o=0),0===o&&0===$E._R[o].type&&(o=1),o>=$E._R.length&&(o=$E._R.length-1),o!==e)){let t=o-e;t<0?$E.rU(this.drag,this.drag.pS(-t)):$E.rD(this.drag,this.drag.nS(t))}}},i[2].onmouseleave=i[2].onmouseup=function(){this.drag&&(this.drag.style.borderColor=this.drag.firstChild.firstChild.style.background="",this.drag=null,this.style.cursor="",css($c("room"),{pointerEvents:""}))};let t=El("div");["0{9m}","0{9n}","0{9o}"].for(o=>t.ap(El("div","setcat").tx(o),El("div","setpage"))),t.style.height="426px",UI.bindCat(t),t.clr=()=>{t.now&&(t.now.id="",t.now=null,t.newR=null)},t.chk=(o,e)=>{$E._R.find(t=>t.type===e)?(dac(o),o===t.now&&t.clr()):ac(o)},t.set=(o,e,i)=>{let r=$("thmSrc");r&&(r.id=""),o.id="thmSrc",t.newR=e,t.now=o,t.tab=i};let o=$c("setpage",t);css(o,{bottom:"64px"}),["0{6x}","0{6y}","0{6z}","0{70}","0{71}"].for((e,i)=>{let r=o[0].ap(El("div","thm").tx(e));r.onclick=()=>t.set(r,i,0),3===i&&r._h()}),o[0].set=function(){for(let o=2;o--;)t.chk(this.ch[o],o)},o[0].ap(UI.p("0{6x}0{9p}"),UI.p("0{6y}0{9q}"),UI.p("0{71}0{9r}")),t.pv=o=>{$("tpl"+o.id)?.remove();let e=El("div","thm"),i=e.ap(El("div","thm-pv"));e.id="tpl"+o.id,css(i,{width:"200px",height:"152px",background:`url(${$M.c(o.p)})`});let r=e.ap(El("p").tx(o.n));return o.createdAt||o.updatedAt?o.a===U$.id&&(r.ap(UI.span(UI.ico("trash"))).onclick=i=>{i.stopPropagation(),UI.confirm("0{9s}").then(i=>{i.i||DB.O("Template",o.id).destroy().then(()=>CIW.del("tpl",o.id)).then(()=>{e===t.now&&t.clr(),e.remove()})})}):(r.ap(UI.span(UI.ico("trash"))).onclick=i=>{i.stopPropagation(),UI.confirm("0{9s}").then(i=>{i.i||CIW.del("tpl",o.id).then(()=>{e===t.now&&t.clr(),e.remove()})})},r.ap(UI.span(UI.ico("upload"))).onclick=e=>{if(e.stopPropagation(),o.c?.includes("_")||o.b.id?.includes?.("_"))return UI.$a("0{9t}");U$.get("p").fetch().then(()=>{const e=U$.get("p").get("nR");e?UI.confirm(`0{9u}(本月剩余上传次数: ${e})`).then(e=>{if(e.i)return;let i=DB.O("Template");for(let t in o)"id"!==t&&i.set(t,o[t]);i.save().then(o=>{UI.$a("0{9v}"),t.fetch()},t=>UI.$a("limit"===t.message?"已到达本月上传次数限制":"0{9w}"))}):UI.$a("已到达本月上传次数限制")},t=>UI.$a("0{9w}"))}),css(r.ch,{margin:"4px",pointerEvents:"auto",color:"var(--c)"}),e.r=(t=>{let o={flag:t.f,type:t.t,w:t.w??800,h:t.h??608,obj:t.o,bg:t.b,spr:t.c?Res.decSpr(t.c):[]};return t.k&&(o.col=t.k),t.d&&(o.bobj=JSON.stringify(t.d)),t.v&&(o.var=t.v),o})(o),e.onclick=()=>t.set(e,e.r,e.tab),e},t.lastFetch=new Date(0),t.fetch=()=>{o[1].loaded=!0,DB.Q("Template").greaterThan("updatedAt",t.lastFetch).find().then(e=>e.for(e=>{let i=e.toJSON(),r=new Date(i.updatedAt);r>t.lastFetch&&(t.lastFetch=r),i.id=i.objectId,i.a=Object.keys(i.ACL).find(t=>"*"!==t),delete i.objectId,delete i.ACL,delete i.createdAt;let d=o[1].ap(t.pv(i));d.tab=1,d.r.type<2&&t.chk(d,d.r.type),CIW.put("tpl",i)}))},o[1].set=function(){this.loaded?$c("thm",this).for(o=>{o.r.type<2&&t.chk(o,o.r.type)}):CIW.find("tpl").then(o=>{o.for(o=>{if(!o.updatedAt&&!o.createdAt)return;let e=this.ap(t.pv(o));e.tab=1,e.r.type<2&&t.chk(e,e.r.type);let i=new Date(o.updatedAt||o.createdAt);i>t.lastFetch&&(t.lastFetch=i)}),t.fetch()})},o[2].ids=[],o[2].set=function(){$c("thm",this).for(o=>{o.r.type<2&&t.chk(o,o.r.type)}),CIW.find("tpl").then(o=>{o.for(o=>{if(o.createdAt||o.updatedAt)return;if(this.ids.includes(o.id))return;let e=this.ap(t.pv(o));e.tab=2,this.ids.push(o.id),e.r.type<2&&t.chk(e,e.r.type)})})},$("crtr").onclick=e=>{new UI.M(800,512).h("0{10}").cb().ap(t).b("0{5}","0{6}").then(o=>{t.now&&(t.now.id=""),o.i||void 0!==t.newR&&null!==t.newR&&(t.newR.w?$E.addRoom(new $E.Room(2,t.newR)).firstChild.click():$E.addRoom(new $E.Room(t.newR)).firstChild.click())}),t.now?(t.now.id="thmSrc",o[t.tab].set()):t.firstChild.onclick()},i[3].ap(UI.I("0{9x}",{l:8},80).on(t=>{$E._r.name=t,$c("room")[$E._r.ind].firstChild.lastChild.tx(t)}),UI.I("0{9y}",{type:"number",m:800,M:4e3,s:32},40).on(t=>$E._r.setWH(t)),UI.I("×",{m:608,M:3040,s:32},40).on(t=>$E._r.setWH(0,t)),UI.C("0{9z}",0,"0{a0}","0{56}","0{a1}","0{a2}","0{a3}").on(t=>$E._r.out=t),UI.C("0{a4}",0,"0{a5}","0{a6}").on(t=>$E._r.view=t),UI.B("0{a7}",1).on(()=>UI.prompt("0{a8}").then(t=>{t.i||(async t=>{$E._r.enc(1);const o=$E._r.save(),e={},i=(t,o=3.04,i=1)=>{if(t[0]===o){let o=$E._G.VAR[t[i]];void 0!==o&&(e[t[i]]=o)}},r=$E._r.renc(({prop:t,start:o})=>(t.add.tml?.for(t=>t[1].for(t=>i(t))),t.add.trg?.for(t=>{t[2].for(t=>i(t,1.07,2)),t[3].for(t=>i(t))}),t.cid=Lib.obj[t.cid].ind,$E._r.obj.slice(o,o+2)+$E._r.encO(t)),t=>Lib.obj[t].ind);let d={id:$M.rid(10),n:t,f:o.flag,t:o.type,o:r,b:o.bg,c:Res.encSpr(o.spr),p:$M.m(await $E.capture(.25,8))};return/[^-]/.test(d.c)||delete d.c,800!==o.w&&(d.w=o.w),608!==o.h&&(d.h=o.h),o.col&&(d.k=o.col),o.bobj&&(d.d=JSON.parse(o.bobj)),Object.keys(e).length&&(d.v=e),d})(t.v).then(t=>CIW.put("tpl",t)).then(t=>UI.$a("0{6q}")).catch(t=>UI.$a("0{6r}"))})));let e=UI.C("0{a9}",0,"0{aa}","0{ab}","0{ac}"),r=El("div","rl"),d=El("div","rl"),l=El("div","grad"),s=l.ap(El("div"));css([r,d],{paddingLeft:"8px"}),s.crt=function(t,o,e){let i=this.ap(El("div","gradc"));css(i,{left:t,background:o}),i.s=e,i.onmousedown=function(t){let o=this.pN;t.button?o.ch.length>2&&(this.remove(),o.ref()):(this.d=t.x-this.offsetLeft,o.d=this)},i.ondblclick=function(t){css(UI.ipc,{left:`${t.x}px`,top:`${t.y}px`}),UI.ipc.onchange=()=>{this.style.background=UI.ipc.value,this.s=UI.ipc.value.slice(1)+this.s.slice(6),this.pN?.ref()},UI.ipc.value="#"+this.s.slice(0,6),$M.task(()=>UI.ipc.click())}},s.ref=function(){let t=this.ch,o=[];for(let e=0;e<t.length;e++)o.push(t[e].s);this.pN.set(o.toString(),1,1)},s.onmousedown=function(t){if(t.target!==this||t.button)return;let o=this.getBoundingClientRect(),e=((t.x-o.left)/160).toFixed(2),i=this.pN;i.set(i.v+",ffffff "+e,1,1),this.crt(100*e+"%","#ffffff","ffffff "+e)},s.onmousemove=function(t){if(this.d){let o=Math.mM((t.x-this.d.d)/160,0,1).toFixed(2);this.ch,this.d.style.left=100*o+"%",this.d.s=this.d.s.slice(0,7)+o,this.ref()}},s.onmouseleave=s.onmouseup=function(){this.d=null},l.set=function(t,o,e){let i=t.split(","),r="",d=this.firstChild;if(!o)for(let t=d.ch.length;t--;)d.ch[t].remove();i.sort((t,o)=>t.slice(7)-o.slice(7)),this.v=t,i.for(t=>{let e=100*t.slice(7)+"%",i="#"+t.slice(0,6);r+=i+" "+e+",",o||d.crt(e,i,t)}),this.style.background="linear-gradient(90deg,"+r.slice(0,-1)+")",e&&Res.loadBg({m:3+this.pS().v,g:(1===this.pS().v?this.nS().v+":":"")+this.v}).then(t=>{$E._r.setBg(t),$E._r.drawBg()})},l.set("000000 0,ffffff 1"),r.ap(UI.C("0{ad}",0,"0{ae}","0{af}").on(t=>{let o=r.ch[2],e=$E._r.bg.g.split(":"),i=(1===t?o.v+":":"")+e.at(-1);Res.loadBg({m:t+3,g:i}).then(t=>{$E._r.setBg(t),$E._r.drawBg()}),1===t?o._s():o._h()}),l,UI.I("0{ag}",{type:"number",m:0,M:360,value:270}).on(t=>Res.loadBg({m:4,g:t+":"+$E._r.bg.g.split(":")[1]}).then(t=>{$E._r.setBg(t),$E._r.drawBg()}))),r.firstChild.style.display="inline-block",r.firstChild.set(1),d.ap(UI.span("0{ac}"),UI.B2("0{ah}").on(()=>$E.ThmLib.showSpr("bg")),UI.C("0{ad}",0,"0{ai}","0{aj}","0{ak}").on(t=>{$E._r.bg.m=t/2|0,$E._r.drawBg()}),UI.R("0{al}",0,359,0).on(t=>$E._r.colBg(t,"","","")),UI.R("0{am}",0,100,50).on(t=>$E._r.colBg("","",t,"")),UI.R("0{an}",0,100,50).on(t=>$E._r.colBg("",t,"","")),UI.R("0{ao}",-100,100,50).on(t=>$E._r.colBg("","","",t))),css(d.ch[2],{float:"right",marginRight:"10px"}),e.style.display="inline-block",e.on((t,o)=>{let l=e.nS(2);l._h(),r._h(),d._h();const s=$E._r.bg;switch(t){case 1:l._s(),1!==o&&l.f(l.c(l.lastChild.style.background)||"#fff");break;case 2:r._s();let t=r.ch;if(5===s.m?t[2]._h():t[2]._s(),1===o){if(4===s.m){let o=s.g.split(":");t[1].set(o[1]),t[2].set(o[0])}else t[1].set(s.g);t[0].set(s.m-3)}else t[1].set(t[1].v,0,1);break;case 4:d._s();let e=d.ch;if(1===o){let t=(s.g||"").split(",");e[1].v=s.id,e[2].set(1<<s.m),e[3].set(t[0]),e[5].set(t[1]),e[4].set(t[2]),e[6].set(t[3])}else{let t={id:e[1].v??0,m:e[2].v/2|0,g:e[3].v+","+e[5].v+","+e[4].v+","+e[6].v};dac($("box"),""),Res.loadBg(t,1).then(t=>{$E._r.setBg(t),$E._r.drawBg(),ac($("box"))},Res.fail)}}$E.fixH(i[4])});let n=El("div","rl");$E.tileCol=n,n._h(),Object.defineProperty(n,"spr",{get(){return this._spr},set(t){t!==this._spr&&(this._spr=t,t?(this.loadCol(t),this._s()):(this._h(),css($c("spr"),{outline:""})),$E.fixH($c("cat")[4]))}}),n.setCol=function(...t){if(this.spr&&Res.spr[this.spr]){if($E._r.col){for(let o in $E._r.col){let e=$E._r.col[o].split("|");if(e.includes(this.spr)){if(o.split(",").for((o,e)=>{""===t[e]&&(t[e]=o)}),e.length>1){let t=[];e.for(o=>{o!==this.spr&&t.push(o)}),$E._r.col[o]=t.join("|")}else delete $E._r.col[o];break}}if(t=Res.color.gen(t)){let o=!0;for(let e in $E._r.col)if(e===t){$E._r.col[e]+="|"+this.spr,o=!1;break}o&&($E._r.col[t]=this.spr)}}else(t=Res.color.gen(t))&&($E._r.col={},$E._r.col[t]=this.spr);this.col=t,Res.colSpr(Res.spr[this.spr],t).then(()=>{$E.drawThn($("tile").spr[this.spr],Res.spr[this.spr]),$E.sfO.redraw()})}},n.loadCol=function(t){let o=[0,50,50,50],e=this.ch;if(this.col="",$E._r.col)for(let e in $E._r.col)if($E._r.col[e].split("|").includes(t)){e.split(",").for((t,e)=>{""!==t&&(o[e]=Number(t))}),this.col=e;break}e[2].set(o[0]),e[3].set(o[2]),e[4].set(o[1]),e[5].set(o[3])};let c=El("div");c.id="tile",c.spr={},c.skip=["pst","dko","dkf","son","sof","gp","ist","ifg","txt","tree","cld","moon","star","grs","swr","mb","dbt"];let a=[...Res.sprList];a.splice(53,1),a.splice(30,0,"cvr"),a.for(t=>{c.skip.includes(t)||(c.spr[t]=c.ap(El("canvas","spr",{width:32,height:32})),c.spr[t].spr=t,c.spr[t].onclick=function(t){let o=t.ctrlKey?n.col:void 0;if(css($c("spr"),{outline:""}),css(this,{zIndex:1,outline:"1px solid #fd0"}),n.spr=this.spr,void 0!==o){o=o.split(","),o[0]||=0,o[1]||=50,o[2]||=50,o[3]||=50,n.setCol(...o);let t=n.ch;t[2].set(o[0]),t[3].set(o[2]),t[4].set(o[1]),t[5].set(o[3])}})}),n.ap(UI.span("0{ap}"),UI.B2("0{ah}").on(()=>$E.ThmLib.showSpr(n.spr)),UI.R("0{al}",0,359,0).on(t=>n.setCol(t,"","","")),UI.R("0{am}",0,100,50).on(t=>n.setCol("","",t,"")),UI.R("0{an}",0,100,50).on(t=>n.setCol("",t,"","")),UI.R("0{ao}",-100,100,50).on(t=>n.setCol("","","",t)),UI.p("*0{aq}")),i[4].ap(UI.span("0{ar}"),UI.B2("0{ah}").on(()=>$E.ThmLib.show()),El("br"),e,UI.span(" "),UI.Col("0{as}").on(t=>{$E._r.setBg({m:3,g:t.slice(1),c:t}),$E._r.drawBg()}),r,d,UI.p("0{at}"),c,n),Au.onready(()=>$E.bgm=new Au.Bgm);let p=El("div")._c(UI.Play(1).on(t=>t?$E.bgm.play():$E.bgm.pause()),UI.R("0{au}",0,100,100,1,"var(--cbtl)").on(t=>{$E.bgm.vol=t,$E._r.bgm.v=t}),UI.S("0{av}",1,1).on(t=>$E._r.bgm.a=t),UI.S("0{aw}",1,1).on(t=>$E._r.bgm.l=t),UI.S("0{ax}",0,1).on(t=>$E._r.bgm.s=t));p.firstChild.id="bgmPv",i[5].ap(UI.span("0{ay}"),UI.O("0{az}","0{b0}","0{b1}","0{b2}").on(t=>{let o=$E._r.bgm,e=$c("block",i[5]);if(o.m=t,css(e,{display:"none"},t,{display:""}),t<2)p._h();else{p._s(),$E.bgm.au.preload="none";let t=e[o.m].ch;t[0].set(o.i??""),t[0].f(o.i??"","none"),t=p.ch,t[0].hC("p")&&t[0].click(),t[1].set(o.v),t[1].f(o.v??100),t[2].set(o.a??1),t[3].set(o.l??1),t[4].set(o.s)}$E.fixH(i[5])}),El("div","block")._c(UI.span("*0{b3}")),El("div","block")._c(UI.span("*0{b4}")),El("div","block")._c(UI.I("0{b5}",0,300).on((t,o="auto")=>{$E._r.bgm.i=t,$E.bgm.au.preload=o,$E.bgm.url=t,$E.bgm.au.onerror=()=>t&&UI.$a("0{b6}")})),El("div","block")._c(UI.I("0{b7}",0,112).on((t,o="auto")=>{$E._r.bgm.i=t,$E.bgm.au.preload=o,$E.bgm.url=t?`https://music.163.com/song/media/outer/url?id=${t}.mp3`:"",$E.bgm.au.onerror=()=>t&&UI.$a("0{b8}")}),UI.span("*0{b9}https://music.163.com/#/song?id=<b>22776365</b>")),p),css($c("block",i[5]),{display:"none"},0),p._h(),i[7].ap($E.BObj("ply","0{ba}","ply"),$E.BObj("gov","GameOver","txt",[1,1,1,1]));for(let t=8;t<18;t++){let o=El("span","help",{innerHTML:UI.ico($S.get("hideGrp"+t)?"unsee":"see")});o.onclick=function(o){o.stopPropagation();let e=this.lastChild.lastChild.href,i=this.pN.pN,r=$c("obj",this.pN.pN);(i.hd=!i.hd)?(e.baseVal="#-unsee",r.for(t=>t.hide&&t._h()),$S.set("hideGrp"+t,1)):(e.baseVal="#-see",css(r,{display:""}),$S.rm("hideGrp"+t))},i[t].firstChild.ap(o),i[t].hd=$S.get("hideGrp"+t)}i[18].firstChild.ap(UI.help("0{1h}")),i[19].firstChild.ap(UI.help("0{1j}"));for(let t=0;t<12;t++)i[19].ap(UI.span(`${UI.ico("layer")} 0{1j}${t}${11===t?"(GUI)":""} `),UI.S("0{bb}",1,1).on((o,e)=>{$E.C.vLy(t,o),o&&"sw"!==e.nS().lastChild.className||$E.C.lkLy(t,!o)}),UI.S(" 0{bc}",0,1).on(o=>$E.C.lkLy(t,o)),El("br"));i.for((t,o)=>$E.fixH(t,t=>{$S.get("hideCat"+o)&&t.aC("fold"),t.firstChild.onclick=()=>{t.hC("fold")?(t.rC("fold"),$S.rm("hideCat"+o)):(t.aC("fold"),$S.set("hideCat"+o,1))}}));let E=$("htrack"),f=$("vtrack");$("hbar").onmousedown=function(t){this.pN.drag=t.x-this.style.transform.slice(11,-3)},$("vbar").onmousedown=function(t){this.pN.drag=t.y-this.style.transform.slice(11,-3)},E.onmousemove=function(t){this.drag&&($E._r.editX=Math.mM((t.x-this.drag)/this.clientWidth*$E._r.w|0,0,$E._r.w-800),$E._r.setBar())},f.onmousemove=function(t){this.drag&&($E._r.editY=Math.mM((t.y-this.drag)/this.clientHeight*$E._r.h|0,0,$E._r.h-608),$E._r.setBar())},E.onmouseleave=E.onmouseup=f.onmouseleave=f.onmouseup=function(){this.drag=0}})}$E.import={ciwp:t=>Ipc.zip(t.split(",").at(-1),2,t=>{try{let o=JSON.parse(t);if(!o.R)throw 0;(new UI.M).t("0{bd}").b("0{be}","0{bf}").then(t=>{if(t.i){if($E._R.length+o.R.length>128)return UI.$a("0{bg}");$E._G._s??=[];let t={},e=!1;o._s?.for(o=>{let i=$E._G._s.find(t=>t.c===o.c&&t.h===o.h);i?o.id!==i.id&&(t[o.id]=i.id,e=!0):$E._G._s.push(o)});for(let t in o.VAR)void 0===$E._G.VAR[t]&&$E.addVar(t,o.VAR[t]);$E._G._o??=[];let i={},r=!1,d=1e3;if(o._o){let t=$c("cat",$("page"));o._o.for(o=>{let e=$E._G._o.find(t=>t._===o._);if(e&&o.n===e.n)o.id!==e.id&&(i[o.id]=e.id,r=!0);else{for(;Lib.obj[d];)++d;o.id!==d&&(i[o.id]=d,o.id=d,r=!0),d++;let e=0;for(;$E._G._o.find(t=>t.n===o.n+(e?`(${e})`:""));)++e;e&&(o.n+=`(${e})`),$E._G._o.push(o),Lib.cO(o),t[17].ap($E.preset._O(o))}}),$E.fixH(t[17])}let l=[];for(let t=128;t--;)l.push(0);$E._R.for(t=>l[t.id]=1),o.R.for(o=>{if(!(o.type<2&&$E._R.find(t=>t.type===o.type))&&(o.id=l.indexOf(0),o.id<128&&o.id>=0)){if(l[o.id]=1,e&&o.spr)for(let e=o.spr.length;e--;)t[o.spr[e]]&&(o.spr[e]=t[o.spr[e]]);e&&o.bg&&t[o.bg.id]&&(o.bg.id=t[o.bg.id]);let d=new $E.Room(o.type,o);$E.addRoom(d),r&&(d.obj=d.renc(null,t=>i[t]??t))}}),$E._r||$c("room")?.[0]?.firstChild.click(),UI.$a("0{bh}")}else $E.setGame(o)})}catch{UI.$a("0{bi}")}})},$E.import.jmap=t=>{let o=t.split("\n");if(o[11]){if(!$E._r)return UI.$a("0{7u}");$E.C._U(),$E._r.obj=($E._r.flag?.[2]??"|").repeat($E._r.ly.length-1),$E._r.dec(),$E.$O&&$E.$P();const t=o[4].split(" "),e=Lib.obj,i=[0,e[3],e[4],e[7],{...e[7],ang:270},{...e[7],ang:90},{...e[7],ang:180},{...e[7],scx:.5,scy:.5},{...e[7],ang:270,scx:.5,scy:.5},{...e[7],ang:90,scx:.5,scy:.5},{...e[7],ang:180,scx:.5,scy:.5},e[8],e[2],e[13],e[16],e[15],{...e[14],ang:180},e[14],e[9],e[50],e[0],e[1],e[25],e[49]];for(let o=0;o<t.length;o++){let e=Number(t[o++]),r=Number(t[o++]),d=i[t[o]];if(d){switch(d.ang){case 90:r+=32*(d.scx||1);break;case 180:e+=32*(d.scx||1),r+=32*(d.scy||1);break;case 270:e+=32*(d.scy||1)}let t=new $E.E(e,r,d);$E.sfO.$d(t.LT[0],t.LT[1],t.w,t.h)}}$E._r.setNum(),$E.sfO.update()}else UI.$a("0{bi}")},$E.C={mX:0,mY:0,mTX:0,mTY:0,mPX:0,mPY:0,mB:0,lkLy(t,o){$E._r.ly[t].lock=o},vLy(t,o){$E._r.ly[t].vis=o,$E.sfO.redraw()},pRc(t,o,e,i,r,d){return t>=e&&o>=i&&t<r&&o<d},cRc(t,o,e,i,r,d,l,s){return t+e>r&&t<r+l&&o+i>d&&o<d+s},atPosDep(t,o,e,i){return $E._r.ly[e].lock?null:$E._r.ly[e].find(e=>e.x===t&&e.y===o&&e.ind===i.ind)},colPosDep(t,o,e){if($E._r.ly[e].lock)return-1;for(let i=$E._r.ly[e].length;i--;){let r=$E._r.ly[e][i],d=r.R,l=d[0],s=d[1];if(l<=t&&l+r.w>t&&s<=o&&s+r.h>o)return i}return-1},colPosObj(t,o){for(let e=$E._r.ly.length;e--;){let i=this.colPosDep(t,o,e);if(-1!==i)return $E._r.ly[e][i]}return null},cXY(){const t=$E._O;let o=this.mX,e=this.mY;if(t&&!t.o.add.a)if(1===t.a)o+=16,e+=t.spr[0].y?16:0;else if(!Lib.spr[t.spr[0].name]?.x&&!Lib.spr[t.spr[0].name]?.y)switch(t.o.ang){case 90:e+=32*(t.o.scx??1);break;case 180:o+=32*(t.o.scx??1),e+=32*(t.o.scy??1);break;case 270:o+=32*(t.o.scy??1)}return[o,e]},dLine(t,o,e,i,r="#f5d"){const d=$E.sfE;d.strokeStyle=r,d.lineWidth=2,d.beginPath(),d.moveTo(t,o),d.lineTo(e,i),d.stroke(),d.lineWidth=1,d.$d(Math.min(e,t)-2,Math.min(i,o)-2,Math.abs(e-t+4),Math.abs(i-o+4))},dSelect(t,o,e,i,r="#fd5"){const d=$E.sfE;d.strokeStyle="#000",d.strokeRect(t-.5,o-.5,e+1,i+1),d.strokeRect(t-2.5,o-2.5,e+5,i+5),d.strokeStyle=r,d.strokeRect(t-1.5,o-1.5,e+3,i+3),d.$d(t-3,o-3,e+6,i+6)},dM(t,o,e,i,r,d,l,s,n){if($E.pro.lock||$E.inEdit)return;const c=$E._O,a=$E.sfE;if(a.clear(),!e&&c&&($E.$O&&$E.$O.some(t=>{let o=t.R,e=o[0],i=o[1];return this.pRc(this.mTX,this.mTY,e,i,e+t.w,i+t.h)})&&(e=!0),!e)){void 0===i&&(i=t,r=o,d=l=s=n=32);let e=i+d,p=r+l,E=c.spr[0],f=c.o.add.a,h=E.x,u=E.y,g=c.o.scx??c.o.add.scx??1,w=c.o.scy??c.o.add.scy??1,m=c.o.add.ang||c.o.ang,R=[];f&&!c.o.add.w&&(f--,h=1&f?E.w>>1:2&f?E.w:0,u=4&f?E.h>>1:8&f?E.h:0),_C.calcBox({x:0,y:0,scx:g,scy:w,ang:m},E.w*g,E.h*w,h,u,[],R,[]);let b=R[2]-R[0],y=R[3]-R[1];for(let t=r;t<p;t+=n)for(let o=i;o<e;o+=s)$E.E.dSpr(a,E[0],o,t,h,u,g,w,m),a.$d(R[0]+o,R[1]+t,b,y)}$E.$O&&($E.$O.for(t=>{t.dInfo&&t.dInfo()}),a.strokeStyle="#000",$E.$O.for(t=>{let o=t.R[0],e=t.LT[1],i=t.w,r=t.h;a.strokeRect(o-.5,e-.5,i+1,r+1),a.strokeRect(o-2.5,e-2.5,i+5,r+5),a.$d(o-3,e-3,i+6,r+6)}),a.strokeStyle="#fd5",$E.$O.for(t=>a.strokeRect(t.LT[0]-1.5,t.LT[1]-1.5,t.w+3,t.h+3))),e&&void 0!==i&&this.dSelect(i,r,d,l)},delPos(t,o){let e=this.colPosObj(t,o),i=!1;if(e){let t=e.dep;if($E.$O)for(let t=$E.$O.length;t--;)if($E.$O[t]===e){$E.$O.splice(t,1),$E.$P($E.$O.length?$E.$O:0),i=!$E.$O;break}$E._r.ly[t].rm(e),$E._r.setNum(),$E.sfO.update()}return i},moveEditO(t,o){$E.$O.for(e=>{if(e.gO()?.add.gpm[0])return;10===e.ind&&e.mG(t,o);let{w:i,h:r}=e;$E.sfO.$d(e.R[0],e.LT[1],i,r),e.x+=t,e.y+=o,e.autoTile&&$E.E.rTile(e.x-t,e.y-o,i,r,e),$E.sfO.$d(e.LT[0],e.LT[1],i,r)}),$("edit-x")?.set($E.$O[0].x),$("edit-y")?.set($E.$O[0].y),$E.sfO.update(),this.dM(0,0,1)},editDo(){if($E.$O){if($E.pro.lock)return $E.$O[0].id;let t=$E._r.ly.map(()=>[]);return t.first=[$E.$O[0].dep,$E.$O[0].sid],$E.$O.slice(1).for(o=>t[o.dep].push(o.sid)),t}return null},editPos(){let t=$c("page")[3],o=$c("p-ev",t),e=$c("p-ac",t),i={top:t.scrollTop,ev:[],pac:[]};return o.for(t=>i.ev.push(t.hC("fold"))),e.for(t=>{t.hC("fold")&&i.pac.push(t._id)}),i},rcPos(t){let o=$c("page")[3],e=$c("p-ev",o),i=$c("p-ac",o);o.scrollTop=t.top,e.for((o,e)=>{t.ev[e]?o.aC("fold"):o.rC("fold")}),i.for(o=>{t.pac.includes(o._id)?o.aC("fold"):o.rC("fold")})},_U(){if(!$E._r)return;let t=$E._r,o=t.enc(),e=t.encB(),i=t.undo.at(-1);i&&o===i.code&&e===i.bobj||(t.redo.length=0,t.undo.push({code:o,bobj:e,edit:this.editDo(),pos:this.editPos()}),t.undo.length>App.gC("edit","undoDepth")&&t.undo.shift())},aplDo(t,o,e=1){t.obj=o.code,t.dec(),e&&t.decB(o.bobj),o.edit?("string"==typeof o.edit?$("bi-"+o.edit).click():($E.pro.lock=!1,$E.$O=[t.ly[o.edit.first[0]][o.edit.first[1]]],o.edit.for((o,e)=>o.for(o=>$E.$O.push(t.ly[e][o]))),$E.$P($E.$O)),this.rcPos(o.pos)):$E.$P()},undo(){if(!$E._r)return;let t=$E._r,o=t.undo.pop(),e=t.enc(),i=t.encB();for(;o?.code===e&&o?.bobj===i;)o=t.undo.pop();o&&(t.redo.push({code:e,bobj:i,edit:this.editDo(),pos:this.editPos()}),this.aplDo(t,o))},redo(){if(!$E._r)return;let t=$E._r,o=t.redo.pop();o&&(t.undo.push({code:t.enc(),bobj:t.encB(),edit:this.editDo(),pos:this.editPos()}),this.aplDo(t,o))},clipBoard:[],copy(t){this.clipBoard.length=0;let o=Infinity,e=Infinity;t.for(t=>{t.x<o&&(o=t.x),t.y<e&&(e=t.y)}),t.for(t=>this.clipBoard.push({x:t.x-o,y:t.y-e,ind:t.ind,cid:t.cid,add:$M.cp(t.add)}))},paste(t,o){if(!this.clipBoard.length)return;this._U(),$E.pro.lock=!1,$E.$O=[];let e={},i=[];this.clipBoard.for(r=>{let d=r.add.gid,l={...Lib.obj[r.cid]};l.add={...l.add,...r.add},delete l.add.gid;let s=new $E.E(t+r.x,o+r.y,l);$E.$O.push(s),d&&(e[d]=s),l.add.gpi&&i.push(s)}),i.forEach(t=>{for(let o in e)if(t.add.gpi.startsWith(o))return t.add.gpi=t.add.gpi.replace(o,e[o].add.gid);delete t.add.gpi}),$E._r.setNum(),$E.sfO.redraw(),$E.$P($E.$O)}},docReady.then(()=>{const t=$("screen");t.get=()=>{let o=t.getBoundingClientRect();t.left=o.left+32,t.top=o.top+32},window.onresize=t.get,t.get(),t.onmousedown=o=>{if(!$E.edit)return;const e=$E.C;if(e.mB=o.button,e.mB&&o.preventDefault(),o.stopPropagation(),$E._r){if(t.dX=e.mX,t.dY=e.mY,t.drag=!0,$E.inEdit)return $E.editClick(o,t);if(0===e.mB){if(o.ctrlKey){let t=e.colPosObj(e.mTX,e.mTY);t&&$E.$O&&$E.$O.includes(t)||(t?$E.pro.lock?($E.pro.lock=!1,$E.$O=[t]):$E.$O?$E.$O.push(t):$E.$O=[t]:$E.$O=null,$E.$O?($E.tab[3].click(),$E.$P($E.$O)):$E.$P())}else if($E.$O){let t=e.colPosObj(e.mTX,e.mTY);$E.$O.includes(t)?($E.$O.drag=t,e._U()):$E.$P()}if($E._O&&!$E.$O&&!o.ctrlKey&&!o.shiftKey){let[o,i]=e.cXY(),r=$E._O.o.add.dep;if($E._r.ly[r].lock)UI.$a($E._r.ly[r].vis?"0{bj}":"0{bk}"),t.drag=!1,t.out=!0;else if(!e.atPosDep(o,i,r,$E._O.o)){e._U();let t=new $E.E(o,i,$E._O.o);$E._r.setNum(),$E.sfO.$d(t.R[0],t.LT[1],t.w,t.h),$E.sfO.update()}}}else if(2===e.mB)if(o.ctrlKey){if($E.$O&&!$E.pro.lock){let t=e.colPosObj(e.mTX,e.mTY);if(t)for(let o=$E.$O.length;o--;)if($E.$O[o]===t){$E.$O.splice(o,1),$E.$P($E.$O.length?$E.$O:0);break}}}else e._U(),(e.delPos(e.mTX,e.mTY)||$E.$O)&&$E.$O&&$E.$P();else 1===e.mB&&(t.style.cursor="grab",e.dM(0,0,1))}},t.outf=()=>{const o=$E.C;if(t.drag=!1,t.style.cursor="",$E.$O&&($E.$O.drag=null),!o.mB){if(t.slc){$E.$O&&!$E.pro.lock||($E.pro.lock=!1,$E.$O=[]);let[e,i,r,d]=t.slR();for(let t=$E._r.ly.length;t--;)if(!$E._r.ly[t].lock)for(let l=$E._r.ly[t].length;l--;){let s=$E._r.ly[t][l],[n,c]=s.R;o.cRc(n,c,s.w,s.h,e,i,r,d)&&!$E.$O.includes(s)&&$E.$O.push(s)}return $E.$P($E.$O.length?$E.$O:0),t.slc=!1,!0}if(t.fill){let e=$E._O.o.add.dep,i=t.fR;if(!$E._r.ly[e].lock){let t=i[0]+i[2],r=i[1]+i[3],d=i[4],l=i[5];o._U();for(let s=i[1];s<r;s+=l)for(let r=i[0];r<t;r+=d)if(!o.atPosDep(r,s,e,$E._O.o)){let t=new $E.E(r,s,$E._O.o);$E.sfO.$d(t.R[0],t.LT[1],t.w,t.h)}$E._r.setNum()}return t.fill=!1,o.dM(0,0,1),$E.sfO.update(),!0}}},t.onmouseup=o=>{$E.edit&&(o.preventDefault(),t.outf())},window.addEventListener("mouseup",o=>{t.drag=!1,$E.C.mB===o.button&&($E.C.mB=0)}),t.slR=()=>{let o,e,i=$E.C.mX-t.dX,r=$E.C.mY-t.dY;return i>0?o=t.dX:(o=$E.C.mX,i=-i),r>0?e=t.dY:(e=$E.C.mY,r=-r),[o,e,i+$E.grid.value,r+$E.grid.value]},t.onmousemove=o=>{if(!$E.edit)return;if(o.stopPropagation(),t.out=!1,!$E._r)return;const e=$E.C,i=$E.$O,r=$E._O,d=$E.grid.value;let l="";if(e.mTX=o.x-t.left+$E._r.editX|0,e.mTY=o.y-t.top+$E._r.editY|0,e.mPX=e.mX,e.mPY=e.mY,e.mX=o.altKey?e.mTX:Math.floor(e.mTX/d)*d,e.mY=o.altKey?e.mTY:Math.floor(e.mTY/d)*d,UI.showTips(e.mX+","+e.mY,o.x+8,o.y-32),$E.inEdit)return $E.editMove(o,t);if(t.drag)if(0===e.mB)if(o.ctrlKey)e.mPX===e.mX&&e.mPY===e.mY&&t.slc||(t.slc=!0,e.dM(0,0,1,...t.slR())),i&&(i.drag=null);else{if(i&&i.drag){let t=e.mX-i.drag.x,o=e.mY-i.drag.y;(t||o)&&e.moveEditO(t,o)}t.slc&&(t.slc=!1,e.dM(0,0,1))}else if(2===e.mB)o.ctrlKey||e.delPos(e.mTX,e.mTY);else if(1===e.mB){let t=Math.mM($E._r.editX-o.movementX,0,$E._r.w-800),e=Math.mM($E._r.editY-o.movementY,0,$E._r.h-608);t===$E._r.editX&&e===$E._r.editY||($E._r.editX=t,$E._r.editY=e,$E._r.setBar()),l="grab"}if(r&&!o.ctrlKey&&1!==e.mB&&(e.mPX!==e.mX||e.mPY!==e.mY)){let[l,s]=e.cXY();if(t.drag&&0===e.mB&&1!==r.o.ind&&!i)if(o.shiftKey){let o=r.o.scx??r.o.add.scx??1,i=r.o.scy??r.o.add.scy??1;t.fR=t.slR(),t.fR[0]+=l-e.mX,t.fR[1]+=s-e.mY,t.fR[4]=Math.ceil((r.o.add.w||r.spr[0].w)*o/d)*d,t.fR[5]=Math.ceil((r.o.add.h||r.spr[0].h)*i/d)*d,e.dM(l,s,0,...t.fR),t.fill=!0}else{t.fill=!1,e.dM(l,s);let o=r.o.add.dep;if(!e.atPosDep(l,s,o,r.o)&&!$E._r.ly[o].lock){let t=new $E.E(l,s,r.o);$E._r.setNum(),$E.sfO.$d(t.R[0],t.LT[1],t.w,t.h),$E.sfO.update()}}else if(!i||!i.drag){if(7===r.o.ind&&App.gC("edit","autoSpk")){l=e.mX,s=e.mY;const t=(t,o,e)=>{let i=-1===t?l:l+t,r=-1===o?s:s+o;for(let d=$E._r.ly.length;d--;)if($E._r.ly[d].find(d=>{if(7===d.ind&&(d.ang??0)===e){let e=d.R,l=e[0],s=e[1];if(-1===t||-1===o){if(-1===o&&l===i&&s===r-d.h)return!0;if(-1===t&&l===i-d.w&&s===r)return!0}else if(l===i&&s===r)return!0}return!1}))return!0},o=(t,o)=>{t+=l,o+=s;for(let e=$E._r.ly.length;e--;)for(let i=$E._r.ly[e].length;i--;){let r=$E._r.ly[e][i];if(3!==r.ind)continue;let d=r.R,l=d[0],s=d[1];if(l<=t&&l+r.w>t&&s<=o&&s+r.h>o)return!0}};let i=-1,d=32*r.o.scx,n=d/2;t(0,d,180)?i=0:t(0,-1,0)?i=180:t(-1,0,90)?i=270:t(d,0,270)?i=90:o(n,d)?i=0:o(n,-1)?i=180:o(-1,n)?i=270:o(d,n)&&(i=90),-1!==i&&(r.lastChild.style.transform=`rotate(-${i}deg)`,r.o.ang=i),[l,s]=e.cXY()}e.dM(l,s),t.fill=!1}}t.style.cursor=l},t.onwheel=o=>{if(!$E.edit||$E.inEdit||t.drag)return;let e=Math.sign(o.wheelDelta);if(o.ctrlKey);else if($E._O){let t=.25*e;$E._O.o.scx+t>=.5&&$E._O.o.scx+t<=5&&($E._O.o.scx+=t,$E._O.o.scy+=t,$E.C.dM(...$E.C.cXY()),UI.showTips($E.C.mX+","+$E.C.mY+" ×"+$E._O.o.scx.toFixed(2)))}},t.onmouseout=()=>{$E.edit&&(UI.tip._h(),t.out=!0,t.outf()||$E.C.dM(0,0,1))},doc.addEventListener("keydown",o=>{let e=doc.activeElement.tagName;if(!$E.edit&&!$R)return;if(o.ctrlKey&&90===o.keyCode&&o.preventDefault(),"TEXTAREA"===e||"INPUT"===e)return;const i=!o.repeat,r=o.keyCode;if($E.edit){if($E.inEdit)return;const e=$E.C;if(r>47&&r<58){let o=$("hObj"+r);o&&(o.click(),t.out||e.dM(...e.cXY()))}else switch(r){case 9:i&&$E._r&&(e.hObj=null,$E.tab[($E.nowTab+1)%4].click());break;case 17:i&&!t.out&&$E._O&&(t.fill=!1,e.dM(0,0,1));break;case 90:o.ctrlKey&&(o.shiftKey?e.redo():e.undo());break;case 87:case 65:case 83:case 68:if(i)if(o.ctrlKey)if(65===r){$E.pro.lock=!1,$E.$O=[];for(let t=$E._r.ly.length;t--;)if(!$E._r.ly[t].lock)for(let o=$E._r.ly[t].length;o--;)$E.$O.push($E._r.ly[t][o]);$E.$P($E.$O.length?$E.$O:0)}else 83===r&&$("btn").ch[2].click();else if(!t.drag&&$E._O&&void 0!==$E._O.o.ang){let o=87===r?0:65===r?90:83===r?180:270;switch($E._O.o.spr[0]){case"btn":case"arr":o=(o+90)%360;break;case"wj":o=(o+270)%360}$E._O.lastChild.style.transform=`rotate(-${o}deg)`,$E._O.o.ang=o,t.out||e.dM(...e.cXY())}break;case 67:i&&o.ctrlKey&&$E.$O&&!$E.pro.lock&&e.copy($E.$O);break;case 86:i&&o.ctrlKey&&!t.out&&$E._r&&e.paste(...e.cXY());break;case 71:i&&$("setg").click();break;case 37:case 38:case 39:case 40:o.preventDefault(),$E.$O&&(i&&e._U(),e.moveEditO(37===r?-$E.grid.value:39===r?$E.grid.value:0,38===r?-$E.grid.value:40===r?$E.grid.value:0));break;case 88:if(!(i&&o.ctrlKey&&$E.$O)||$E.pro.lock)break;e.copy($E.$O);case 8:case 46:i&&$E.$O&&!$E.pro.lock&&(e._U(),$E.$O.for(t=>$E._r.ly[t.dep].rm(t)),$E._r.setNum(),$E.sfO.update(),$E.$P())}}else if(o.ctrlKey&&i)switch(r){case 71:$R.god=!$R.god;break;case 83:if($R.$&&$R.save()){const t=new _C.P($R.$.x-1,$R.$.y-7,$R._r.Spr.sp,6);t.ind=1,t.aspd=.05}}}),doc.addEventListener("keyup",o=>{$E.edit&&17===o.keyCode&&(!t.out&&$E._O?$E.C.dM(...$E.C.cXY()):t.slc&&(t.slc=!1,$E.C.dM(0,0,1)))})});