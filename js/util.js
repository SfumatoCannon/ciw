var Ipc={f:{},fin(e,t){this.f[e]?.(t,e),delete this.f[e]},send(e,t){console.log(t?e+":"+t:e)},dl(e,t,s,r,o=15e3){if("string"==typeof e){this.send("dl",JSON.stringify([e,t,s]));let n=setTimeout(()=>Ipc.fin(t,0),o);this.f[t]=(e,t)=>{clearTimeout(n),r(e,t)}}else{let o=URL.createObjectURL(e);$M.openURL(o,0,s+t),this.f[t]=e=>{URL.revokeObjectURL(o),r(e)}}},read(e,t,s){window._ipc.rd(e,t,s)},open(e){U$&&App.jump(JSON.parse($S.sget("args").replace(/\\/g,"\\\\")),e)},close(e=1){return this.on||(this.on=1,this.beforeClose?.(),e||this.closeMsg?UI.confirm(this.closeMsg||"0{1u}",1).then(e=>{e.i?this.on=0:this.send("close")}):this.send("close")),0},zip:window._ipc?.zip,cache(e){this.f.cache=e,this.send("cache")}};{let e=Array.prototype;e.for=function(e){for(let t=0,s=this.length;t<s;t++)e(this[t],t)},e.forv=function(e){for(let t=this.length;t--;)e(this[t])},e.bIns=function(e){let t=0,s=this.length;for(;t<s;){let r=t+s>>1;if(e===this[r])return;e>this[r]?t=r+1:s=r}this.splice(t,0,e)};let t=HTMLElement.prototype;t.ap=function(...e){return e.for(e=>this.append(e)),e[0]},t._c=function(...e){return e.for(e=>this.append(e)),this},t.tx=function(e){return this.innerText=e,this},t.hC=function(e){return this.classList.contains(e)},t.aC=function(e){this.classList.add(e)},t.rC=function(e){this.classList.remove(e)},t.pS=function(e=1){let t=this;for(;e--;)t=t.previousSibling;return t},t.nS=function(e=1){let t=this;for(;e--;)t=t.nextSibling;return t},t._h=function(){this.style.display="none"},t._s=function(){this.style.display=""},Object.defineProperties(t,{ch:{get(){return this.children}},pN:{get(){return this.parentNode}}})}const doc=document,$=e=>doc.getElementById(e),$c=(e,t=doc)=>[...t.getElementsByClassName(e)],$t=(e,t=doc)=>[...t.getElementsByTagName(e)],El=(e,t,s)=>{let r=doc.createElement(e);return t&&(r.className=t),s&&Object.assign(r,s),r},css=(e,t,s=-1,r)=>{if(e.style)Object.assign(e.style,t);else for(let o=e.length;o--;)Object.assign(e[o].style,o===s?r:t)},ac=(e,t="")=>css(e,{color:t,pointerEvents:""}),dac=(e,t="#aaa")=>css(e,{color:t,pointerEvents:"none"}),docReady=new Promise(e=>doc.fonts.ready.then(()=>{css($("wrap"),{opacity:1,pointerEvents:"auto"}),setTimeout(()=>{e(),new FontFace("emoji","url(/res/NotoColorEmoji.otf),url(/res/NotoColorEmoji.ttf)").load().then(e=>doc.fonts.add(e))},500)})),$M=Object.freeze({p:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA",w:"data:image/webp;base64,UklGR",c:e=>e.includes("data:")?"-"===e[0]?e.slice(1):e:"-"===e[0]?$M.p+e.slice(1):$M.w+e,m:e=>"p"===e[11]?"-"+e.replace($M.p,""):e.replace($M.w,""),id(e,t,s="0"){let r="";for(;e>=1;)r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@%"[e%64<<0]+r,e/=64;return t?r.padStart(t,s):r},rid(e=10){return this.id(Date.now(),e,this.id(3e5*Math.random(),1))},task(e,t=1){scheduler.postTask(e,{priority:["user-blocking","user-visible","background"][t]})},eq:(e,t)=>JSON.stringify(e)===JSON.stringify(t),cp(e){if(Array.isArray(e)){const t=[];for(let s=0;s<e.length;s++)"object"==typeof e[s]&&null!==e[s]?t[s]=$M.cp(e[s]):t[s]=e[s];return t}if("object"==typeof e&&null!==e){const t={};for(let s in e)"object"==typeof e[s]&&null!==e[s]?t[s]=$M.cp(e[s]):t[s]=e[s];return t}throw"Error Type"},freeze(e){if(Array.isArray(e))for(let t=0;t<e.length;t++)"object"==typeof e[t]&&null!==e[t]&&$M.freeze(e[t]);else for(let t in e)"object"==typeof e[t]&&null!==e[t]&&$M.freeze(e[t]);return Object.freeze(e)},b2u6(e){return e>64&&e<91?e-65:e>96&&e<123?e-71:e>47&&e<58?e+4:43===e?62:47===e?63:0},b2u8(e){let t=e.replace(/[^A-Za-z0-9\+\/]/g,""),s=t.length,r=3*s+1>>>2,o=new Uint8Array(r);for(let e,n,a=0,i=0,l=0;l<s;l++)if(n=3&l,a|=this.b2u6(t.charCodeAt(l))<<18-6*n,3===n||s-l==1){for(e=0;e<3&&i<r;e++,i++)o[i]=a>>>(16>>>e&24)&255;a=0}return o},b2b(e){return new Blob([this.b2u8(e)])},u2b(e){return new Blob([this.b2u8(e.split(",")[1])],{type:e.split(";")[0].slice(5)})},read(e,t="DataURL"){return new Promise((s,r)=>{let o=new FileReader;o["readAs"+t](e),o.onload=()=>s(o.result),o.onerror=r})},openURL(e,t,s){let r=doc.body.ap(El("a"));r.href=e,r._h(),t&&(r.target="_blank"),s&&(r.download=s),r.click(),r.remove()},xhr(e,t,s,r=null,o=1e4){return new Promise((n,a)=>{let i=new XMLHttpRequest;s&&(i.responseType=s),i.open(e,t),"POST"===e&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.timeout=o,i.onload=function(){this.status>399?a(this):n(this)},i.onerror=i.ontimeout=()=>a(i),i.send(r)})},escTxt:(e,t)=>(t&&(e=e.replace("#","%23")),e.replaceAll("&","&amp;").replaceAll("<","&lt;")),reg:{email:/^[^@\s]+@[^@\s]+\.\w+/,emoji:/\p{RI}\p{RI}|(\p{EBase}\p{EMod}|(\p{EPres}|\p{Emoji}\uFE0F)\u20E3?|(\p{Emoji}|\p{EBase}\p{EMod}|(\p{EPres}|\p{Emoji}\uFE0F))[\uE0020-\uE007E]+\uE007F)(\u200D(\p{EBase}\p{EMod}|(\p{EPres}|\p{Emoji}\uFE0F)\u20E3?|(\p{Emoji}|\p{EBase}\p{EMod}|(\p{EPres}|\p{Emoji}\uFE0F))[\uE0020-\uE007E]+\uE007F)?)*|\p{Emoji}/gu},async html2img(e,t,s){const r=new Image;return r.src=`data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${s}'><foreignObject x='0' y='0' width='${t}' height='${s}'><div xmlns='http://www.w3.org/1999/xhtml'>${e.replaceAll("#","%23")}</div></foreignObject></svg>`,await r.decode(),r}});Math.mM=function(e,t,s){return this.max(t,this.min(s,e))},Date.pad=e=>(e<10?"0":"")+e,Date.cD=e=>{if("number"==typeof e)e=new Date(e);else if(!e?.getDay)return e;return`${e.getFullYear()}-${Date.pad(e.getMonth()+1)}-${Date.pad(e.getDate())} ${Date.pad(e.getHours())}:${Date.pad(e.getMinutes())}`},Date.cT=e=>`${Date.pad(e/3600<<0)}:${Date.pad((e/60<<0)%60)}:${Date.pad(e%60)}`;const $S=Object.freeze({get(e,t=!0){let s=(t?localStorage:sessionStorage).getItem(e);return"0"===s||"1"===s?s<<=0:"undefined"===s?s=void 0:"null"===s&&(s=null),s},set(e,t,s=!0){"boolean"==typeof t&&(t<<=0),(s?localStorage:sessionStorage).setItem(e,t)},rm(e,t=!0){(t?localStorage:sessionStorage).removeItem(e)},sget(e){return this.get(e,0)},sset(e,t){return this.set(e,t,0)},srm(e){return this.rm(e,0)}}),$_="https://cdn.jsdelivr.net/gh/vicklleall/ciw@"+$S.get("build")+"/",_$="https://cdn.jsdelivr.net/gh/vicklleall/ciw/",App={cV(e){const t=e.split("."),s=$S.get("version").split(".");for(let e=0;e<3;e++){let r=0|t[e],o=0|s[e];if(r<o)break;if(r>o)return!0}return!1},chkUpd(e,t){const s=()=>UI.confirm("0{1v}",1,"是","否").then(t=>{t.i?($S.set("update",1),e(2)):e(1)});DB.Cloud.run("version",{v:$S.get("app")},null).then(t=>{$S.sset("lastCheck",Date.now()),$S.srm("offline"),$S.get("version")===t?($S.rm("update"),e(0)):s()},e=>{9===e.code?($S.sset("lastCheck",Date.now()),$S.srm("offline"),s()):t?t(e):DB.err(e)})},dlupd(){let e=$("l");e.tx("0{1w}"),$M.xhr("GET",`${$_}app/version.json`,"json").then(t=>{const s=t.response;App.upd=0;for(let t in s)this.cV(s[t])&&(App.upd++,Ipc.dl(`${999==s[t]?$_:_$}app/${t}`,t,2,t=>{t?0==--App.upd&&($S.rm("update"),e.className="",e.tx("0{1x}").style.width="auto",setTimeout(()=>{Ipc.f._u=e=>{UI.$a("0{1y}")},Ipc.send("update")},1e3)):App.upd>0&&(App.upd=-1,App.updfail())}))}).catch(App.updfail)},updfail(){let e=$("l");e.className="",e.tx("0{1z}").style.width="auto",UI.$a("0{1z}0{20}").then(()=>window.open("https://ciw.vicklleall.com/"))},config:{app:{rmb:1,msgPush:1},edit:{gridOpacity:.5,undoDepth:50,showInvis:1,autoSpk:0,start:0,autoSave:0},run:{vol:50,fps:60}},gC(e,t){return this.config[e][t]},sC(e,t,s){this.config[e][t]=s,this.saveConf(e)},loadConf(e){try{return JSON.parse($S.get(e+"Conf"))}catch{return null}},saveConf(e){$S.set(e+"Conf",JSON.stringify(this.config[e]))},getStorage(){try{this.stor=JSON.parse($S.get("storage"))??{}}catch{this.stor={}}},setStorage(e,t){this.stor[e]=t,$S.set("storage",JSON.stringify(this.stor))},addStorage(e,t){let s=(this.stor[e]??0)+t;this.setStorage(e,s)},setDarkMode(e){let t=doc.body;t.className=e?"dark":"",$S.set("theme",t.className),$c("setpage",UI.menu)[1].set()},setFscr(){$S.sset("fullscreen",!$S.sget("fullscreen")),Ipc.send("fscr"),$c("setpage",UI.menu)[1].set()},setWinSc(e){$S.sget("fullscreen")&&this.setFscr(),$S.set("zoom",e),Ipc.send("sc",e),$c("setpage",UI.menu)[1].set()},jump(e,t){for(let t of e.slice(1))if(/.+\.ciwp$/.test(t))return void("/make"===location.pathname?$E.open("_"+t):LOC("make?_"+encodeURIComponent(t),1));t&&LOC("home",1)},help(e){window.open(`/doc/${_lang}#${doc.body.className??""}#${e??""}`)}};for(let e in App.config)Object.assign(App.config[e],App.loadConf(e));App.getStorage(),doc.body.className=$S.get("theme")??"";const $U={Lv:[0,10,25,40,60,90,120,160,200,250,300,360,420,480,540,600,660,720,800,900,1e3],getLv(e){let t=this.Lv;for(let s=0;s<t.length;s++)if(e>=t[s]&&e<(t[s+1]??Infinity))return[s,e-t[s],t[s+1]-t[s]||"??"]},getUsername(e,t){t||(t=El("div"));let s=e.get("w");return t.innerHTML=s?UI.ico("m-"+s.split(",")[0]):"",css(t.ap(El("span").tx(e.getUsername())),{userSelect:"text",marginLeft:(s?4:0)+"px"}),t},getUID(e){let t=El("div");return t.style.color="#789",t.ap(UI.span("UID:")),css([t.ap(UI.span(e)),t.ap(UI.copy(e))],{marginLeft:"4px"}),t},showUser(e){DB.Q(DB.User).select(["username","e","w","a","c"]).get(e).then(e=>{let t=El("div","rl"),s=t.ap(El("div","avatar")),r=t.ap(El("div","userInfo")),o=e.get("e"),n=e.get("a");n&&CIW.fetch(n.id,"UserAvatar","avatar").then(e=>s.style.background=`url(${e.d})`),r.ap(this.getUsername(e),this.getUID(e.id),UI.span(`0{21}${this.getLv(o)[0]} `),UI.span(`0{22} ${o} `),UI.span(`0{23} ${e.get("c")} `)),new UI.M(320).h("0{24}").ap(t).cb()})},pwDiag(e="",t="",s="",r=""){new UI.M(400).t("0{25}0{26}").t("0{27}").ip(e).t("0{28}").ip(t,"password").t("0{29}").ip(s,"password").t("0{2a}").ip(r).b("0{5}","0{6}").then(function(e){if(e.i)return;let t,s=$t("input",this.box),r=$c("btn",this.box)[0];25!==s[3].value.length&&(t="0{2b}"),s[1].value!==s[2].value&&(t="0{2c}"),(s[1].value.length<6||s[1].value.length>16)&&(t="0{2d}"),s[0].value.trim()||(t="0{2e}");let o=s.map(e=>e.value);if(t)return UI.$a(t).then(()=>$U.pwDiag(...o));r.aC("gray");const n=e=>{let t=new URL(e.responseURL).searchParams,s=t.get("error");!s&&t.has("username")?UI.$a("0{2f}").then(()=>{"/login"!==location.pathname&&LOC("login")}):UI.$a(s.endsWith("invalid")?"0{2g}/0{2h}":"0{2i}").then(()=>$U.pwDiag(...o)),r.rC("gray")};$M.xhr("POST",DB.serverURL+"/apps/ciw-api/request_password_reset",0,`token=${encodeURIComponent(o[3])}&username=${encodeURIComponent(o[0])}&new_password=${encodeURIComponent(o[1])}`,3e4).then(n).catch(n)})},resetPw(e){DB.User.requestPasswordReset(e).then(()=>this.pwDiag(DB.User.current()?.getUsername()),e=>{switch(e.code){case 205:case 125:UI.$a("0{2j}");break;default:UI.$a("0{2k}")}})}};