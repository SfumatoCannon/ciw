$S.srm("fetch"),USER&&DB.User.logOut();{let A="",e=$c("tab"),t=$c("cat"),r=$c("btn"),a=$t("input",$("login")),s=$c("see"),n=$c("info");if(t[0].ap(UI.S("0{45}",App.gC("app","rmb")).on(A=>App.sC("app","rmb",A))).id="save",App.gC("app","rmb")&&$S.get("rmbUser"))try{let A=JSON.parse(atob($S.get("rmbUser")));for(let e=0;e<2;e++)a[e].value=decodeURIComponent(A[e])}catch{$S.rm("rmbUser")}e.for((A,r)=>{A.onclick=()=>{A.style.background&&(t[r]._s(),t[1-r]._h(),css(e,{background:"var(--dac)"},r,{background:""}),css($("login"),r?{height:"390px",transform:"translateY(-20px)"}:{height:"",transform:""}))}}),a.for((A,e)=>A.oninput=()=>n[e<2?0:1]._h());const i=e=>{A&&UI.check(e,"0{46}").then(e=>{if(25===e.v?.length){const t=A=>{let e=A.responseURL.slice(DB.serverURL.length);e.includes("?")?e.startsWith("/verify?")?UI.$a("0{47}"):o("0{2h}"):UI.$a("0{48}")};$M.xhr("GET",`${DB.serverURL}/apps/ciw-api/verify_email?token=${encodeURIComponent(e.v)}&username=${encodeURIComponent(A)}`).then(t,t)}else o("0{49}")})},o=A=>{(new UI.M).t(A).b("0{4a}","0{6}").then(A=>{A.i||i("0{4b}")})};r[0].onclick=()=>{a[0].value.trim()&&a[1].value.trim()&&(r[0].aC("gray"),n[0]._h(),A=a[0].value,DB.User.logIn(A,a[1].value).then(async A=>{if($S.srm("offline"),App.gC("app","rmb")){let A=[];for(let e=0;e<2;e++)A[e]=encodeURIComponent(a[e].value);$S.set("rmbUser",btoa(JSON.stringify(A)))}else $S.rm("rmbUser");if(A.get("p")&&A.get("m"))LOC("home");else{A.set("p",DB.O("UserPvt")),A.set("m",DB.O("UserMsg"));try{await A.save(),LOC("home")}catch(A){n[0].tx("0{4c}")._s(),console.error(A),r[0].rC("gray")}}},A=>{let e;switch(A.code){case 101:e=A.message.startsWith("Invalid")?"0{4d}":A.message.startsWith("Your account is locked")?"0{4e}":"0{4f}";break;case 205:return UI.confirm("0{4g}").then(A=>{if(A.i)return r[0].rC("gray");const e=UI.prompt("0{4h}").then(A=>{A.i||($M.reg.email.test(A.v)?DB.User.requestEmailVerification(A.v).then(()=>i("0{25}0{4b}"),A=>{let e="0{4i}";-1!==A.code&&125!==A.code&&205!==A.code||(e="0{2j}"),UI.$a(e)}):UI.$a("0{4j}").then(()=>e())),r[0].rC("gray")})});default:e="0{4f}"}n[0].tx(e)._s(),r[0].rC("gray")}))},a[2].onchange=function(){this.value=this.value.trim()},r[1].onclick=()=>{let t=a[2].value,s=a[3].value,o=a[4].value.trim();if(!t||!s||!o)return;if(t.length<2||t.length>20)return n[1].tx("0{4k}")._s();let l=t.match(/\d+/);if(l&&l[0]===t)return n[1].tx("0{4l}")._s();if(["ciw","cloudiwanna","cloud i wanna"].includes(t.toLowercase()))return n[1].tx("0{4m}")._s();for(let A=0;A<t.length;A++)if(t.codePointAt(A)>65535)return n[1].tx("0{4n}")._s();return s.length<6||s.length>16?n[1].tx("0{2d}")._s():$M.reg.email.test(o)?(n[1]._h(),void(new UI.M).h("0{4o}").t("0{4p}").t("-0{4q}").t("-0{4r}").t("-0{4s}").t("-0{4t}").t("-0{4u}").t("0{4v}").b("0{4w}","0{6}").then(l=>{if(l.i)return;r[1].tx("0{4x}").aC("gray");let c=new DB.User;c.setUsername(t),c.setPassword(s),c.setEmail(o),c.signUp().then(t=>{A=t.get("username"),i("0{4y}0{25}0{4b}"),r[1].tx("0{e}").rC("gray"),e[0].onclick(),a[0].value=A,a[1].value=s,n[0]._h(),DB.User.logOut()},A=>{let e;switch(A.code){case 119:e="0{4z}";break;case 202:e="0{4m}";break;case 203:e="0{50}";break;default:e="0{51}"}n[1].tx(e)._s(),r[1].tx("0{e}").rC("gray")})})):n[1].tx("0{4j}")._s()},$("fp").onclick=()=>{UI.prompt("0{4h}").then(A=>{if(!A.i)return $M.reg.email.test(A.v.trim())?void $U.resetPw(A.v.trim()):UI.$a("0{4j}").then(()=>$("fp").click())})},s.for(A=>{A.onclick=()=>{let e=A.firstChild.firstChild.href,t=A.pS();"#-unsee"===e.baseVal?(e.baseVal="#-see",t.type=""):(e.baseVal="#-unsee",t.type="password")}});let l=$("am").getContext("2d"),c=[],g=[],h=0,C=0,m=100/6;c.i=0;for(let A=8;A--;){let e,t=new Image;switch(t.onload=()=>createImageBitmap(t,0,0,t.width,t.height).then(e=>{c[A]=e,c.i++}),A){case 0:e="CAAAAAgAQMAAABJtOi3AAAABlBMVEX///8AAABVwtN+AAAAAnRSTlN4eM+rx8gAAABhSURBVAjXHY67DYAwEENfIEihCxuETcJmB6KgZARGYTOwnOJddB/bfHq8kHhg5IaJC2ZOWDhgZYeNCNXoKRFtEGoWShFyFYYmpC6o+Oeep97zhW+tYj0r28Nu9nUCZ3G0H0DWHU3Glh8bAAAAAElFTkSuQmCC";break;case 1:e="CAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAADd3d3z8/MHAACKo35GAAAAAXRSTlMAQObYZgAAAGBJREFUGNNdxsENgCAMQFGSnnEb3IRyYQiWMiaVAyN0CVxHbTCh5R9+nvsClmtsbcVeV9zXAkBiC4/ULAJStehIpwFEpIM1vKBoBEHW6IKkAFEQecIPlIkwkCf6QHLP3wsuT0yPH30M1wAAAABJRU5ErkJggg==";break;case 2:e="BUAAAAYBAMAAADnp6t7AAAAFVBMVEUAAADzAAAIAADzW1tkAAAjIyMTExM2FZfiAAAAAXRSTlMAQObYZgAAAH1JREFUGNNtz0EOgkAMBdDJJLr/jgfAygWGngCjezUcgAXc/wrMpwUCoauX9qdpw1JSrYwnFpGXM7ZIjdj4gaRNPZKXNqlKfjM0sC2KG9vmfK9CpPWpGcWgdWeYcTAWI2EzDrb9Vh+e5u6La498eejPTIZrR/oz/xIj/eGZE5JYFlJv/HWlAAAAAElFTkSuQmCC";break;case 3:e="CAAAAAQAgMAAAAKbpXKAAAADFBMVEVfUTdJOyUqIAcAAACFK7TvAAAARElEQVQI12P4DwUMr1aBwWoYYzGM0czwMhQMnJEYK7NWrVqZBWS0JggwMiYCGY0gRgKCgUXXCwYwYGZ4AGMcgDLgzgAAyK871Y+X3ZkAAAAASUVORK5CYII=";break;case 4:e="CAAAAAgAQMAAABJtOi3AAAAA1BMVEU/mf8FzEGpAAAAAXRSTlOgljB7jgAAAAtJREFUCNdjGOQAAACgAAH4BzM6AAAAAElFTkSuQmCC";break;case 5:e="CAAAAAdBAMAAAA5sHO0AAAAJFBMVEUAAAD/91VAQED///9VVVX/+YD06Qv/AACFUFAqKipQMDD/gIBlkX6EAAAAAXRSTlMAQObYZgAAAKlJREFUGNN90DEOwjAMBdBcoYzdoOICdRfm/IUDcAEGrtCICxTB2C4eO4HCARi4HPaCXEfq95DkyZashJ1LaGiRNjQAOiBCC1BgVpgiRrkqEHVRCwQ7oiCHABG64+Q6dAQCgAAzH0YpZpJrW+xRbhr8O+xPJhuFyuT8h5yXkB8pW6i/Q+pnCx8Hr5vkbuDdS8fVwNNBOVJrx7wGVR5SXlndRGF7MRHwH/QD1uBlmfIjLBAAAAAASUVORK5CYII=";break;case 6:e="CAAAAAgCAYAAABzenr0AAAAwklEQVR4nO2WSwrAIAxEe11v6Rm8ULsKSMg/kSo4kJXoPD+d5nmuGLXWXqjIeIkxLsv4MnNPLQXovZOVBokal0FYjMcYbHEgZQCS+TII6+4piDMBJAhsBNKuwGVOgWAATtIJhECiAGUQ1DvQtA1AOQSAHAMgxbMLACDgEWZPILV7z1cwQ6QSkQohLwBAhI5dimDJmLuG9O4tZr8DSI1KCICq2VjrnMpSkGu5pCam7JfsDZN0+GgQnvkhc7xQepGrnfUBCTrp+ep8x9gAAAAASUVORK5CYII=";break;case 7:e="GQAAAAVCAYAAACwnEswAAABWklEQVR4nO3ZUQqDMAwGYJ9krxvsZRfYMQZ79Qa7wW6yNw+yg+xYjoqVGJPaNqZUiPAzEcxnGuvLmibhODXNsJWUembsALzuFzZSxIwdASlkRiKCiw2/fhVpI2ZEAhjxRd11/JuDmJGIcBOnkGTADBlCbT+ImqFrzJDH4HaDkSJmJBxfVIyCpIgZGQCG8BacECpm7GFA4Hzrx1BbECYWcbV9jmyorxVs4ssA7txPm4NhzU/bjrW4+tjw57UZJdZqboQKB+BQ30z88JQTWqgajVJrxUL4xlAjxPcxaODva6iJmg2NtZohiFE3xoYEkCGpX5OhtVYLyMUj/sbHdO36fK+yWThgwBzZ0FirxRGaKgZyEdfMAwUbSW9UhMH1IukDD1yjj6g/WLKnLbQ16kqel3qxqOGLzK7rBi4lB0L5uXVL9xPqQdLHCtDcJTXsxNprz4fapAsbJazc2n8QN+yJaht7OwAAAABJRU5ErkJggg=="}t.src=$M.p+e}const p=A=>{let e=A-C;if(Math.round(e)>=m<<0){if(8===c.i){if(l.clearRect(0,0,672,256),l.drawImage(c[7],25*(h<<0),0,25,21,320,203,25,21),h+=.2,h>=4){h-=4;let A=7*Math.random()<<0,e=(Math.random()-.5)/10;g.push({i:A,x:704,y:24+160*Math.random()<<0,a:6.2832*Math.random(),d:e<0?e-.02:e+.02,s:2+Math.random(),w:-c[A].width>>1,h:-c[A].height>>1})}for(let A=g.length;A--;){let e=g[A];if(e.x-=e.s,e.x<-24){g.splice(A,1);continue}e.a+=e.d;let t=Math.cos(e.a),r=Math.sin(e.a);l.setTransform(t,r,-r,t,e.x,e.y),l.drawImage(c[e.i],e.w,e.h)}l.resetTransform();for(let A=8*-h<<0;A<672;A+=32)l.drawImage(c[0],A,224)}e-m<=1||e-m>=m?C=A:C+=m}requestAnimationFrame(p)};p()}