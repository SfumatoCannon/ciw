var Ipc={f:{},fin(e,t){this.f[e]?.(t,e),delete this.f[e]},dl(e,t,s,o,r=15e3){if("string"==typeof e){console.log("dl:"+JSON.stringify([e,t,s]));let n=setTimeout(()=>Ipc.fin(t,0),r);this.f[t]=(e,t)=>{clearTimeout(n),o(e,t)}}else{let r=URL.createObjectURL(e);$M.openURL(r,0,s+t),this.f[t]=e=>{URL.revokeObjectURL(r),o(e)}}},read(e,t,s){window._ipc.rd(e,t,s)},open(e){USER&&App.jump(JSON.parse($S.sget("argv").replace(/\\/g,"\\\\")),e)},close(e=1){return this.on||(this.on=1,this.beforeClose?.(),e||this.closeMsg?UI.confirm(this.closeMsg||"0{1u}",1).then(e=>{e.i?this.on=0:console.log("close")}):console.log("close")),0},zip:window._ipc?.zip,cache(e){this.f.cache=e,console.log("cache")}};{let e=Array.prototype;e.for=function(e){for(let t=0,s=this.length;t<s;t++)e(this[t],t)},e.forv=function(e){for(let t=this.length;t--;)e(this[t])},e.bIns=function(e){let t=0,s=this.length;for(;t<s;){let o=t+s>>1;if(e===this[o])return;e>this[o]?t=o+1:s=o}this.splice(t,0,e)};let t=HTMLElement.prototype;t.ap=function(...e){return e.for(e=>this.append(e)),e[0]},t._c=function(...e){return e.for(e=>this.append(e)),this},t.tx=function(e){return this.innerText=e,this},t.hC=function(e){return this.classList.contains(e)},t.aC=function(e){this.classList.add(e)},t.rC=function(e){this.classList.remove(e)},t.pS=function(e=1){let t=this;for(;e--;)t=t.previousSibling;return t},t.nS=function(e=1){let t=this;for(;e--;)t=t.nextSibling;return t},t._h=function(){this.style.display="none"},t._s=function(){this.style.display=""},Object.defineProperties(t,{ch:{get(){return this.children}},pN:{get(){return this.parentNode}}})}const doc=document,$=e=>doc.getElementById(e),$c=(e,t=doc)=>[...t.getElementsByClassName(e)],$t=(e,t=doc)=>[...t.getElementsByTagName(e)],El=(e,t,s)=>{let o=doc.createElement(e);return t&&(o.className=t),s&&Object.assign(o,s),o},css=(e,t,s=-1,o)=>{if(e.style)Object.assign(e.style,t);else for(let r=e.length;r--;)Object.assign(e[r].style,r===s?o:t)},ac=(e,t="")=>css(e,{color:t,pointerEvents:""}),dac=(e,t="#aaa")=>css(e,{color:t,pointerEvents:"none"}),docReady=new Promise(e=>doc.fonts.ready.then(()=>{css($("wrap"),{opacity:1,pointerEvents:"auto"}),setTimeout(()=>{e(),new FontFace("emoji","url(/res/NotoColorEmoji.ttf)").load().then(e=>doc.fonts.add(e))},500)})),$M=Object.freeze({p:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA",w:"data:image/webp;base64,UklGR",c:e=>e.includes("data:")?"-"===e[0]?e.slice(1):e:"-"===e[0]?$M.p+e.slice(1):$M.w+e,m:e=>"p"===e[11]?"-"+e.replace($M.p,""):e.replace($M.w,""),id(e,t){let s="";for(;e>=1;)s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"[e%64<<0]+s,e/=64;return t?s.padStart(t,0):s},cp:e=>JSON.parse(JSON.stringify(e)),eq:(e,t)=>JSON.stringify(e)===JSON.stringify(t),freeze(e){for(let t in e){let s=e[t];"object"==typeof s&&null!==s&&$M.freeze(s)}return Object.freeze(e)},b2u6(e){return e>64&&e<91?e-65:e>96&&e<123?e-71:e>47&&e<58?e+4:43===e?62:47===e?63:0},b2u8(e){let t=e.replace(/[^A-Za-z0-9\+\/]/g,""),s=t.length,o=3*s+1>>>2,r=new Uint8Array(o);for(let e,n,a=0,i=0,l=0;l<s;l++)if(n=3&l,a|=this.b2u6(t.charCodeAt(l))<<18-6*n,3===n||s-l==1){for(e=0;e<3&&i<o;e++,i++)r[i]=a>>>(16>>>e&24)&255;a=0}return r},b2b(e){return new Blob([this.b2u8(e)])},u2b(e){return new Blob([this.b2u8(e.split(",")[1])],{type:e.split(";")[0].slice(5)})},read(e,t="DataURL"){return new Promise((s,o)=>{let r=new FileReader;r["readAs"+t](e),r.onload=()=>s(r.result),r.onerror=o})},openURL(e,t,s){let o=doc.body.ap(El("a"));o.href=e,o._h(),t&&(o.target="_blank"),s&&(o.download=s),o.click(),o.remove()},xhr(e,t,s,o=null,r=1e4){return new Promise((n,a)=>{let i=new XMLHttpRequest;s&&(i.responseType=s),i.open(e,t),"POST"===e&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.timeout=r,i.onload=function(){this.status>399?a(this):n(this)},i.onerror=i.ontimeout=()=>a(i),i.send(o)})},escTxt:(e,t)=>(t&&(e=e.replace("#","%23")),e.replaceAll("&","&amp;").replaceAll("<","&lt;")),reg:{email:/^[^@\s]+@[^@\s]+\.\w+/,emoji:/\p{RI}\p{RI}|(\p{EBase}\p{EMod}|(\p{EPres}|\p{Emoji}\uFE0F)\u20E3?|(\p{Emoji}|\p{EBase}\p{EMod}|(\p{EPres}|\p{Emoji}\uFE0F))[\uE0020-\uE007E]+\uE007F)(\u200D(\p{EBase}\p{EMod}|(\p{EPres}|\p{Emoji}\uFE0F)\u20E3?|(\p{Emoji}|\p{EBase}\p{EMod}|(\p{EPres}|\p{Emoji}\uFE0F))[\uE0020-\uE007E]+\uE007F)?)*|\p{Emoji}/gu}});Math.mM=function(e,t,s){return this.max(t,this.min(s,e))},Date.pad=e=>(e<10?"0":"")+e,Date.cD=e=>`${e.getFullYear()}-${Date.pad(e.getMonth()+1)}-${Date.pad(e.getDate())} ${Date.pad(e.getHours())}:${Date.pad(e.getMinutes())}`,Date.cT=e=>`${Date.pad(e/3600<<0)}:${Date.pad((e/60<<0)%60)}:${Date.pad(e%60)}`;const $S=Object.freeze({get(e,t=!0){let s=(t?localStorage:sessionStorage).getItem(e);return"0"===s||"1"===s?s<<=0:"undefined"===s?s=void 0:"null"===s&&(s=null),s},set(e,t,s=!0){"boolean"==typeof t&&(t<<=0),(s?localStorage:sessionStorage).setItem(e,t)},rm(e,t=!0){(t?localStorage:sessionStorage).removeItem(e)},sget(e){return this.get(e,0)},sset(e,t){return this.set(e,t,0)},srm(e){return this.rm(e,0)}}),$_="https://cdn.jsdelivr.net/gh/vicklleall/ciw@"+$S.get("build")+"/",_$="https://cdn.jsdelivr.net/gh/vicklleall/ciw/",App={chkUpd(e,t){const s=()=>UI.confirm("0{1v}",1,"是","否").then(t=>{t.i?($S.set("update",1),e(2)):e(1)});DB.Cloud.run("version",{v:$S.get("HASH")},null).then(t=>{$S.sset("check",Date.now()),$S.srm("offLine"),$S.get("version")===t?($S.rm("update"),e(0)):s()},e=>{9===e.code?($S.sset("check",Date.now()),$S.srm("offLine"),s()):t?t(e):DB.err(e)})},dlupd(){let e=$("l");e.tx("0{1w}"),$M.xhr("GET",`${$_}app/version.json`,"json").then(t=>{const s=t.response,o=$S.get("version").split(".");App.upd=0;for(let t in s){let r=s[t].split(".");for(let n=0;n<3;n++){let a=0|r[n],i=0|o[n];if(a<i)break;if(a>i){App.upd++,Ipc.dl(`${999==s[t]?$_:_$}app/${t}`,t,2,t=>{t?0==--App.upd&&($S.rm("update"),e.className="",e.tx("0{1x}").style.width="auto",setTimeout(()=>{Ipc.f._u=e=>{UI.$a("0{1y}")},console.log("update")},1e3)):App.upd>0&&(App.upd=-1,App.updfail())});break}}}}).catch(App.updfail)},updfail(){let e=$("l");e.className="",e.tx("0{1z}").style.width="auto",UI.$a("0{1z}0{20}").then(()=>window.open("https://ciw.vicklleall.com/"))},config:{app:{rmb:1,msgPush:1},edit:{gridOpacity:.5,undoDepth:50,showInvis:1,autoSpk:0,start:0},run:{vol:50,fps:60,smooth:1}},gC(e,t){return this.config[e][t]},sC(e,t,s){this.config[e][t]=s,this.saveConf(e)},loadConf(e){try{return JSON.parse($S.get(e+"Conf"))}catch{return null}},saveConf(e){$S.set(e+"Conf",JSON.stringify(this.config[e]))},getStorage(){try{this.stor=JSON.parse($S.get("storage"))??{}}catch{this.stor={}}},setStorage(e,t){this.stor[e]=t,$S.set("storage",JSON.stringify(this.stor))},addStorage(e,t){let s=(this.stor[e]??0)+t;this.setStorage(e,s)},setDarkMode(e){let t=doc.body;t.className=e?"dark":"",$S.set("thm",t.className),$c("setpage",UI.menu)[1].set()},setFscr(){$S.sset("fscr",!$S.sget("fscr")),console.log("fscr"),$c("setpage",UI.menu)[1].set()},setWinSc(e){$S.sget("fscr")&&this.setFscr(),$S.set("sc",e),console.log("sc:"+e),$c("setpage",UI.menu)[1].set()},jump(e,t){for(let s of e.slice(1))if(/.+\.ciwp$/.test(s)){t=0,"/make"===location.pathname?$E.open("_"+s):LOC("make?_"+encodeURIComponent(s),1);break}t&&LOC("home",1)},help(e){window.open(`/doc/${_lang}#${doc.body.className??""}#${e??""}`)}};for(let e in App.config)Object.assign(App.config[e],App.loadConf(e));App.getStorage(),doc.body.className=$S.get("thm")??"";const $U={Lv:[0,10,25,40,60,90,120,160,200,250,300,360,420,480,540,600,660,720,800,900,1e3],getLv(e){let t=this.Lv;for(let s=0;s<t.length;s++)if(e>=t[s]&&e<(t[s+1]??Infinity))return[s,e-t[s],t[s+1]-t[s]||"??"]},getUsername(e,t){t||(t=El("div"));let s=e.get("w");return t.innerHTML=s?UI.ico("m-"+s.split(",")[0]):"",css(t.ap(El("span").tx(e.getUsername())),{userSelect:"text",marginLeft:(s?4:0)+"px"}),t},getUID(e){let t=El("div");return t.style.color="#789",t.ap(UI.span("UID:")),css([t.ap(UI.span(e)),t.ap(UI.copy(e))],{marginLeft:"4px"}),t},showUser(e){DB.Q(DB.User).select(["username","e","w","a","c"]).get(e).then(e=>{let t=El("div","rl"),s=t.ap(El("div","avatar")),o=t.ap(El("div","userInfo")),r=e.get("e"),n=e.get("a");n&&CIW.fetch(n.id,"UserAvatar","avatar").then(e=>s.style.background=`url(${e.d})`),o.ap(this.getUsername(e),this.getUID(e.id),UI.span(`0{21}${this.getLv(r)[0]} `),UI.span(`0{22} ${r} `),UI.span(`0{23} ${e.get("c")} `)),new UI.M(320).h("0{24}").ap(t).cb()})},pwDiag(e="",t="",s="",o=""){new UI.M(400).t("0{25}0{26}").t("0{27}").ip(e).t("0{28}").ip(t,"password").t("0{29}").ip(s,"password").t("0{2a}").ip(o).b("0{5}","0{6}").then(function(e){if(e.i)return;let t,s=$t("input",this.box),o=$c("btn",this.box)[0];25!==s[3].value.length&&(t="0{2b}"),s[1].value!==s[2].value&&(t="0{2c}"),(s[1].value.length<6||s[1].value.length>16)&&(t="0{2d}"),s[0].value.trim()||(t="0{2e}");let r=s.map(e=>e.value);if(t)return UI.$a(t).then(()=>$U.pwDiag(...r));o.aC("gray");const n=e=>{let t=new URL(e.responseURL).searchParams,s=t.get("error");!s&&t.has("username")?UI.$a("0{2f}").then(()=>{"/login"!==location.pathname&&LOC("login")}):UI.$a(s.endsWith("invalid")?"0{2g}/0{2h}":"0{2i}").then(()=>$U.pwDiag(...r)),o.rC("gray")};$M.xhr("POST",DB.serverURL+"/apps/ciw-api/request_password_reset",0,`token=${encodeURIComponent(r[3])}&username=${encodeURIComponent(r[0])}&new_password=${encodeURIComponent(r[1])}`,3e4).then(n).catch(n)})},resetPw(e){DB.User.requestPasswordReset(e).then(()=>this.pwDiag(DB.User.current()?.getUsername()),e=>{switch(e.code){case 205:case 125:UI.$a("0{2j}");break;default:UI.$a("0{2k}")}})}};