const Home={};Home.userInit=()=>{$U.getUsername(U$,$("username"));let[e,t,a]=$U.getLv(U$.get("e")),s="??"===a?100:t/a*100,r=U$.get("a");$("level").firstChild.tx("Lv."+e),$("exp").tx(`${t}/${a}`),$("levelbar").style.background=`linear-gradient(90deg,#9cf ${s}%,#0000 ${s}%)`,r&&CIW.fetch(r.id,"UserAvatar","avatar").then(e=>$("avatar").style.background=`url(${e.d})`);let i=El("div","rl"),l=[0,,,,,],n=El("div","userInfo"),c=i.ap(El("div","avatar hover"),n);c.id="cavatar",c.onclick=()=>UI.P(64,64,"0{3l}",1).then(e=>{let t=DB.O("UserAvatar"),a=U$.get("a")?.id;t.set("d",e),U$.set("a",t),U$.save().then(t=>{$("cavatar").style.background=$("avatar").style.background=`url(${e})`,CIW.put("avatar",{id:t.get("a").id,d:e}),a&&(CIW.del("avatar",a),DB.O("UserAvatar",a).destroy())},e=>{UI.$a("0{3m}"),console.error(e)})}),n.ap($U.getUsername(U$),$U.getUID(U$.id),UI.span("0{3n} "),UI.span("0{3o} "),UI.span("0{3p}")),["0{3q}","0{25}","0{3r}","0{3s}"].for(e=>i.ap(El("div","udata",{innerHTML:`<div class='ud-n'>${e}</div><div class='ud-r'>${UI.ico("rank")}<span> --</span></div><div class='ud-s'>--</div>`})));let o=U$.get("p").get("m");if(o?.length){let e=El("div","rl"),t=U$.get("w");i.ap(UI.p("0{3t}","12px 0 8px 8px"),e),o.for((a,s)=>{let[r,i]=a.split(","),l=e.ap(El("div","medal"));l.innerHTML=UI.ico("m-"+r),l.ap(El("br"),UI.span(i,"#89a")),t&&r===t.split(",")[0]&&i===t.split(",")[1]&&css(l,{background:"var(--bgl)",borderColor:"#5af"}),l.i=s,l.onclick=function(){this.style.background?(css(this,{background:"",borderColor:""}),U$.unset("w"),U$.save()):(css($c("medal"),{background:"",borderColor:""},this.i,{background:"var(--bgl)",borderColor:"#5af"}),U$.set("w",o[this.i]),U$.save()),$U.getUsername(U$,n.firstChild),$U.getUsername(U$,$("username"))}})}else css(i.ap(UI.p("0{3t}","12px 0 8px 8px")).ap(UI.span("0{3u}","#89a")),{marginLeft:"8px"});i.set=async()=>{let e=n.ch;if($U.getUsername(U$,e[0]),!$("cavatar").style.background&&r&&CIW.fetch(r.id,"UserAvatar","avatar").then(e=>$("cavatar").style.background=`url(${e.d})`),e[2].tx("0{23}"+$U.getLv(U$.get("e"))[0]),e[3].tx("0{3o} "+U$.get("p").get("b")),e[4].tx("0{3p} "+U$.get("p").get("c")),void 0===l[2]){let e=await Promise.all([DB.Q(DB.User).greaterThan("e",U$.get("e")).count(),DB.Q(DB.User).greaterThan("c",U$.get("c")).count()]);l[2]=e[0]+1,l[3]=e[1]+1}let t=$c("ud-s");t[0].tx(U$.get("e")),t[0].pS().lastChild.tx(" "+l[2]),t[1].tx(U$.get("c")),t[1].pS().lastChild.tx(" "+l[3]),t[2].tx(l[0]),void 0!==l[4]&&t[2].pS().lastChild.tx(" "+l[4]),void 0!==l[1]&&(t[3].lastChild.tx(l[1]),t[3].pS().lastChild.tx(" "+l[5]))},$("profile").onclick=()=>{new UI.M(330).h("0{3v}").cb().ap(i),i.set()};let U=$("userop").ch;U[0].onclick=()=>DB.User.logOut().then(()=>LOC("login"),()=>DB.User.logOut().then(()=>LOC("login"))),U[1].onclick=()=>UI.confirm("确定要修改密码？点击确定后系统会发送验证邮件到您的邮箱").then(e=>{e.i||$U.resetPw(U$.getEmail())}),U[2].onclick=()=>{const e=U$.get("p").get("nN");e?UI.prompt(`请输入新的用户名 (本周剩余修改次数: ${e})`).then(e=>{if(!e.i){let t=e.v.trim(),a=$U.chkName(t);if(a)return UI.$a(a);U$.set("username",t),U$.save().then(()=>{UI.$a("修改成功"),$U.getUsername(U$,n.firstChild),$U.getUsername(U$,$("username"))},e=>UI.$a(202===e.code?"0{2a}":"修改失败")).finally(()=>U$.get("p").fetch())}}):UI.$a("已到达本周修改次数限制")}},Home.fetchMsg=e=>{let t=e.get("t"),a=e.get("r"),s=e.get("a"),r=$S.get("m"+U$.id)??0,i=[0,0,0],l=0,n=[];t.for(t=>{t.e&&t.e<Date.now()?(e.remove("t",t),l++):t.t>r&&(n.push({u:U$.id,c:0,...t}),i[0]++,Date.now()-t.t>1296e6&&(e.remove("t",t),l++),App.gC("app","msgPush")&&(new UI.M).t(t.m).ap(El("p","time").tx("0{3w} "+Date.cD(new Date(t.t)))).b("0{3x}"))}),a.for(t=>{t.t>r&&(n.push({u:U$.id,c:1,...t}),i[1]++),Date.now()-t.t>6048e5&&(e.remove("r",t),l++)}),s.for(t=>{t.t>r&&(n.push({u:U$.id,c:2,...t}),i[2]++),Date.now()-t.t>6048e5&&(e.remove("a",t),l++)}),l&&e.save(),(i[0]||i[1]||i[2])&&$("notice").aC("new"),$S.set("m"+U$.id,Date.now());let c=El("div","tabBox rl");c.style.height="400px",$("notice").onclick=function(){this.rC("new"),new UI.M(640).h("0{3y}").cb().ap(c),$c("setcat",c)[0].click()},["0{3w}","0{3z}","0{40}","0{41}"].for(e=>c.ap(El("div","setcat").tx(e),El("div","setpage"))),UI.bindCat(c);let o=$c("setcat",c).slice(0,3),U=$c("setpage",c);U[3].style.padding="6px",i.for((e,t)=>{e&&(o[t].num=o[t].ap(El("div","msgNum").tx(Math.min(e,99))))}),U.for(e=>e.set=e=>{e&&e.num&&(e.num.remove(),delete e.num)}),U[3].ap(UI.S("0{42}",App.gC("app","msgPush")).on(e=>App.sC("app","msgPush",e)),UI.B("0{43}",1).on(e=>{e.set(),UI.confirm("0{44}").then(async t=>{if(t.i)return e.set(1);try{await CIW.clear("msg"),e.set(1),UI.$a("0{45}")}catch{UI.$a("0{46}")}})})),CIW.onready(()=>CIW.putAll("msg",n).then(()=>CIW.find("msg","u="+U$.id)).then(e=>{e.sort((e,t)=>t.t-e.t),e.for(e=>{let t=El("div","rvbox");switch(e.c){case 0:t.tx(e.m);break;case 1:case 2:let a=El("a","link").tx(e.u);a.uid=e.U,a.onclick=function(){$U.showUser(this.uid)},t.ap(a,El("span").tx("在游戏"),El("a","link").tx(e.g),El("span").tx(`中${1==e.c?"回复":"@"}了你`))}t.ap(El("div","time").tx(Date.cD(new Date(e.t)))),U[e.c].ap(t)})}))},Home.L={P(){DB.Q(DB.User).descending("e").addDescending("c").addAscending("createdAt").select(["username","e","c"]).limit(20).find().then(e=>{this.ply=UI.LB([{n:"0{f}",v(e){let t=El("span","username").tx(e.getUsername());return t.u=e.id,t.onclick=function(){$U.showUser(this.u)},t}},{n:"0{3n}",v:e=>`Lv.${$U.getLv(e.get("e"))[0]}`},{n:"0{24}",v:e=>e.get("e"),s:(e,t)=>t.get("e")-e.get("e")},{n:"0{25}",v:e=>e.get("c"),s:(e,t)=>t.get("c")-e.get("c")}],e);let t=$c("board")[1],a=$t("div",t);for(let t=0;t<5;t++){let s=e[t],r=El("span","username").tx(s.getUsername());r.u=s.id,r.onclick=function(){$U.showUser(this.u)},a[t].ap(El("span","fr").tx(`Lv.${$U.getLv(s.get("e"))[0]}`),r)}t.firstChild.ap(El("span","fr",{innerHTML:UI.ico("acc")})).onclick=()=>new UI.M(480).h("0{r}").cb().ap(this.ply)})},M(){}};{let e=$c("navi"),t=$c("page");e.for((a,s)=>{a.onclick=()=>{e.for((e,t)=>t===s?e.aC("now"):e.rC("now")),css(t,{opacity:0,pointerEvents:"none"},s,{opacity:1,pointerEvents:""})}}),e[0].click(),setTimeout(()=>css(t,{transition:"opacity .2s"}),500),$("copyright").innerHTML=`v${$S.get("version")}&emsp;build.${$S.get("build")}<br/>`,$("make").onclick=()=>LOC("make"),CIW.onready(()=>U$&&DB.off(async()=>{Home.L.P(),Date.now()-($S.sget("lastFetch")??0)<72e5?(Home.userInit(),Home.fetchMsg(await U$.get("m").fetch())):(await U$.fetchWithInclude(["m","p"]),Home.userInit(),Home.fetchMsg(U$.get("m")),$S.sset("lastFetch",Date.now()))},()=>{Home.userInit(),Home.fetchMsg(U$.get("m"))})),t[0].ap(El("div","flex")._c(El("div","flex sec"),El("div","flex sec")),El("div","flex")._c(El("div","flex sec"),El("div","flex sec")));let a=$c("sec",t[0]);a[0].ap(El("div","top",{innerHTML:UI.ico("app")+"活动"}),El("div","box",{id:"event"})),[["0{47}","playlist",4],["0{48}","rank",9],["0{49}","rotate",9]].for((e,t)=>{let s=El("div","flex cont"),r=a[t+1],i=e[2]/3|0;if(r.ap(El("div","top",{innerHTML:UI.ico(e[1])+e[0]}),s),i>1){s.style.width=`calc(${i}00% + ${8*i}px)`;let e=r.ap(El("div","slide ab hcen"));for(let t=0;t<i;t++){let a=e.ap(El("div",t?"ib":"ib on"));a.onmouseover=()=>{$c("on",e)[0]?.rC("on"),a.aC("on"),s.style.transform=`translateX(calc(-${t/i*100}% - ${4*t}px))`}}r.style.paddingBottom="28px"}for(let t=e[2];t--;)s.ap(Content.gItem())})}