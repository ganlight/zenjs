var Zen={},zen={};Zen.modules={},Zen.views={},zen=Zen.common={};
zen.animate={enter:function(n){n&&$(".zen-cur").addClass(n+" animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass(n+" animated")})}};
zen.cgi={ENV:"DEV",SET:{PUBLIC:{COACH_TYPE:"public/coach/types",COACH_LIST:"public/coach/list",COACH_DETAIL:"public/coach/detail",JOB_LIST:"public/job/list",JOB_DETAIL:"public/job/detail"},TYPE:{DEV:"get",TEST:"post",PUB:"post"},ROOT:{DEV:"/assets/json/",TEST:"http://localhost/",PUB:"/server/api/"}},TYPE:function(){var t=this,a=t.SET.TYPE[t.ENV]||"post";return a},URL:function(t,a){var e=this,n="?t="+(new Date).getTime();return"PUB"==e.ENV&&(n=".php?t="+(new Date).getTime()),e.SET.ROOT[CGI.ENV]+e.SET[t][a]+n},ajax:function(t,a,e){var n=this,c=n.TYPE();$.ajax({url:t,type:c,dataType:"json",data:a,success:function(t){e(t)}})},ajaxModule:function(t,a,e){var n=this,c=n.TYPE();$.ajax({url:t,type:c,async:!1,dataType:"json",data:a,success:function(t){e(t)}})},getView:function(t){var a="views/"+t+".html";$.ajax({url:a,type:"get",async:!1,dataType:"html",success:function(t){$(".zen-container").html(t),Zen.init()},error:function(t){window.location.hash="index"}})},getCommonPart:function(t,a){$.ajax({url:t,type:"get",async:!1,dataType:"html",success:function(t){$(a).html(t)}})}};
zen.check={parm:function(n){return"undefined"==typeof n||null==n||""==n},name:function(n){var e=/^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/;return!!e.exec(n)},number:function(n){if(0==n.length)return!1;if(6!=n.length)return!1;var e=/^\s*\d+\s*$/;return!!e.exec(n)},phone:function(n){return 0!=n.length&&(11==n.length&&!!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(n))},password:function(n){return 0!=n.length&&!(n.length<6||n.length>16)},code:function(n){return 0!=n.length&&6==n.length},bankcard:function(n){if(n.length<8||n.length>19)return!1;var e=/^\d*$/;return!!e.exec(n)},agreement:function(){if($(".agreement").length)return!!$(".agreement").hasClass("selected")||(zen.message.toast("您需要阅读并同意《用户协议》"),!1)},platform:function(){var n={win:!1,mac:!1,xll:!1},e=navigator.platform;return n.win=0==e.indexOf("Win"),n.mac=0==e.indexOf("Mac"),n.x11="X11"==e||0==e.indexOf("Linux"),!(n.win||n.mac||n.xll)}};
zen.conf=function(n){n&&(Zen.conf=n)};
zen.dao=function(){var e=$(".zen-container"),n=$("<div>").addClass("zen-bg"),s=$("<div>").addClass("zen-modules"),a=$("<div>").addClass("zen-stack zen-cur clearfix");if(e.append(n),e.append(s),e.append(a),Zen.views.zen_modules){var d=zen.parse(Zen.views.zen_modules);s.append(d)}if(Zen.views.zen_css){var i=zen.parse(Zen.views.zen_css);$("title").after(i)}if(Zen.views.common_css){var p=zen.parse(Zen.views.common_css);$("head").append(p)}if(Zen.views.common_js){var v=zen.parse(Zen.views.common_js);$("head").append(v)}};
zen.debug={set:function(){var e="normal";"debug"==status&&(e="debug"),zen.store.sLocal("ZEN_DEBUG",e),Zen.mode=e},clear:function(){var e=$("head");e.find("*[data-type='debug-script']").remove()},script:function(){var e="views/"+zen.url.getHash()+"/index.js",t=$("head");t.find("*[data-type='debug-script']").remove();var a=$("<script>").attr("type","text/javascript");a.attr("src",e),a.attr("data-type","debug-script"),t.append(a)}};
zen.directive={init:function(){var t=$(".zen-container");t.find("*[v-zen]").each(function(){var t=$(this),e=$(this).attr("v-zen");if(e){var n=$(".zen-modules .c-"+e).clone();t.html(n)}}),$("*[v-insert]").each(function(){var t=$(this),e=$(this).attr("v-insert");if(e){var n=e+".html";$.ajax({url:n,type:"get",async:!1,dataType:"html",success:function(e){t.html(e)}})}}),$("*[v-slot]").each(function(){var t=$(this),e=$(this).attr("v-slot");if(e)if(document.getElementById(e))t.html($("#"+e));else{var n=zen.content(e+".html");t.html(n)}}),$("*[v-scroll]").click(function(){var t=$(this).attr("v-scroll");t&&zen.scroll.to(t)}),$("*[v-send]").click(function(){var t=$(this).attr("v-send");if(t){var e=t.split(",");zen.message.send(e[0],e[1],e[2])}}),$("*[v-select]").click(function(){var t=$(this).attr("v-select");t&&zen.message.select("",t)}),$("*[v-toggle]").click(function(){var t=$(this).attr("v-toggle");t&&($("#"+t).toggle(),$(this).toggleClass("selected"))}),$("*[v-link]").click(function(){var t=$(this).attr("v-link");t&&(window.location.href=t)})}};
zen.encrypt={encode:function(r,t){(null==t||t.length<=0)&&(t="zenjs"),r=this.utf8_encode(r);for(var n="",e=0;e<t.length;e++)n+=t.charCodeAt(e).toString();var o=Math.floor(n.length/5),h=parseInt(n.charAt(o)+n.charAt(2*o)+n.charAt(3*o)+n.charAt(4*o)+n.charAt(5*o)),a=Math.ceil(t.length/2),g=Math.pow(2,31)-1;if(h<2)return null;var c=Math.round(1e9*Math.random())%1e8;for(n+=c;n.length>10;)n=(parseInt(n.substring(0,10))+parseInt(n.substring(10,n.length))).toString();n=(h*n+a)%g;for(var l="",f="",e=0;e<r.length;e++)l=parseInt(r.charCodeAt(e)^Math.floor(n/g*255)),f+=l<16?"0"+l.toString(16):l.toString(16),n=(h*n+a)%g;for(c=c.toString(16);c.length<8;)c="0"+c;return f+=c},decode:function(r,t){if(!(null==r||r.length<8)){(null==t||t.length<=0)&&(t="zenjs");for(var n="",e=0;e<t.length;e++)n+=t.charCodeAt(e).toString();var o=Math.floor(n.length/5),h=parseInt(n.charAt(o)+n.charAt(2*o)+n.charAt(3*o)+n.charAt(4*o)+n.charAt(5*o)),a=Math.round(t.length/2),g=Math.pow(2,31)-1,c=parseInt(r.substring(r.length-8,r.length),16);for(r=r.substring(0,r.length-8),n+=c;n.length>10;)n=(parseInt(n.substring(0,10))+parseInt(n.substring(10,n.length))).toString();n=(h*n+a)%g;for(var l="",f="",e=0;e<r.length;e+=2)l=parseInt(parseInt(r.substring(e,e+2),16)^Math.floor(n/g*255)),f+=String.fromCharCode(l),n=(h*n+a)%g;return f=this.utf8_decode(f)}},utf8_encode:function(r){r=r.replace(/\r\n/g,"\n");for(var t="",n=0;n<r.length;n++){var e=r.charCodeAt(n);e<128?t+=String.fromCharCode(e):e>127&&e<2048?(t+=String.fromCharCode(e>>6|192),t+=String.fromCharCode(63&e|128)):(t+=String.fromCharCode(e>>12|224),t+=String.fromCharCode(e>>6&63|128),t+=String.fromCharCode(63&e|128))}return t},utf8_decode:function(r){for(var t="",n=0,e=c1=c2=0;n<r.length;)e=r.charCodeAt(n),e<128?(t+=String.fromCharCode(e),n++):e>191&&e<224?(c2=r.charCodeAt(n+1),t+=String.fromCharCode((31&e)<<6|63&c2),n+=2):(c2=r.charCodeAt(n+1),c3=r.charCodeAt(n+2),t+=String.fromCharCode((15&e)<<12|(63&c2)<<6|63&c3),n+=3);return t}};
zen.fastclick=function(){this.support=!1},zen.fastclick.prototype={init:function(){this.support=this.check(),this.bind()},check:function(){try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}},bind:function(){var t=$.fn.on,n=this.support;$.fn.on=function(){if(/click/.test(arguments[0])&&"function"==typeof arguments[1]&&n){var c,i=arguments[1];t.apply(this,["touchstart",function(t){c=t.changedTouches[0].clientY}]),t.apply(this,["touchend",function(t){Math.abs(t.changedTouches[0].clientY-c)>10||(t.preventDefault(),i.apply(this,[t]))}])}else t.apply(this,arguments);return this}}};
zen.filter={money:function(e){e=""==e||isNaN(e)||e==1/0?parseFloat("0").toFixed(2):parseFloat(e).toFixed(2);var t=parseInt(e);if(t==e)return t;var r=parseFloat(e).toFixed(1);return parseFloat(r)==parseFloat(e)?r:e},number:function(e,r){(!r||r<0||r>20)&&(r=2),e=parseFloat((e+"").replace(/[^\d\.-]/g,"")).toFixed(r)+"";var a=e.split(".")[0].split("").reverse(),n=e.split(".")[1];for(t="",len=a.length,"-"==a[len-1]&&(len-=1),i=0;i<len;i++)t+=a[i]+((i+1)%3==0&&i+1!=len?",":"");return"-"==a[len]&&(t+="-"),0==r?t.split("").reverse().join(""):t.split("").reverse().join("")+"."+n},trim:function(e,t){var r;return r=e.replace(/(^\s+)|(\s+$)/g,""),"g"==t.toLowerCase()&&(r=r.replace(/\s/g,"")),r},times:function(e,t){var r="";if($("#"+e).length&&$("#"+t).length){var a=$("#"+e).val().replace(/\//g,""),n=$("#"+t).val().replace(/\//g,"");r=a?a+"-":"-",n?r+=n:n=""}return r},time:function(e,t,r){if(!e)return"";var a=new Date;a.setTime(e);var n=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var l=a.getDate();l=l<10?"0"+l:l;var s=a.getHours();s=s<10?"0"+s:s;var o=a.getMinutes();o=o<10?"0"+o:o;var v=a.getSeconds();v=v<10?"0"+v:v;var s=a.getHours();s=s<10?"0"+s:s;var o=a.getMinutes();o=o<10?"0"+o:o;var v=a.getSeconds();return v=v<10?"0"+v:v,t?n+"-"+i+"-"+l:r?n+"/"+i+"/"+l+" "+s+":"+o+":"+v:n+"-"+i+"-"+l+" "+s+":"+o+":"+v},date:function(e){var t=new Date;t.setTime(e);var r=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var n=t.getDate();return n=n<10?"0"+n:n,r+"/"+a+"/"+n},datestr:function(e){var t=new Date;t.setTime(e);var r=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var n=t.getDate();return n=n<10?"0"+n:n,r+""+a+n}};
zen.gradients=[{name:"Nimvelo",colors:["#314755","#26a0da"]},{name:"Noon to Dusk",colors:["#ff6e7f","#bfe9ff"]},{name:"YouTube",colors:["#e52d27","#b31217"]},{name:"Cool Brown",colors:["#603813","#b29f94"]},{name:"Harmonic Energy",colors:["#16A085","#F4D03F"]},{name:"Playing with Reds",colors:["#D31027","#EA384D"]},{name:"Sunny Days",colors:["#EDE574","#E1F5C4"]},{name:"Green Beach",colors:["#02AAB0","#00CDAC"]},{name:"Intuitive Purple",colors:["#DA22FF","#9733EE"]},{name:"Emerald Water",colors:["#348F50","#56B4D3"]},{name:"Lemon Twist",colors:["#3CA55C","#B5AC49"]},{name:"Horizon",colors:["#003973","#E5E5BE"]},{name:"Rose Water",colors:["#E55D87","#5FC3E4"]},{name:"Frozen",colors:["#403B4A","#E7E9BB"]},{name:"Mango Pulp",colors:["#F09819","#EDDE5D"]},{name:"Bloody Mary",colors:["#FF512F","#DD2476"]},{name:"Aubergine",colors:["#AA076B","#61045F"]},{name:"Aqua Marine",colors:["#1A2980","#26D0CE"]},{name:"Sunrise",colors:["#FF512F","#F09819"]},{name:"Purple Paradise",colors:["#1D2B64","#F8CDDA"]},{name:"Sea Weed",colors:["#4CB8C4","#3CD3AD"]},{name:"Pinky",colors:["#DD5E89","#F7BB97"]},{name:"Cherry",colors:["#EB3349","#F45C43"]},{name:"Mojito",colors:["#1D976C","#93F9B9"]},{name:"Juicy Orange",colors:["#FF8008","#FFC837"]},{name:"Mirage",colors:["#16222A","#3A6073"]},{name:"Steel Gray",colors:["#1F1C2C","#928DAB"]},{name:"Kashmir",colors:["#614385","#516395"]},{name:"Electric Violet",colors:["#4776E6","#8E54E9"]},{name:"Venice Blue",colors:["#085078","#85D8CE"]},{name:"Bora Bora",colors:["#2BC0E4","#EAECC6"]},{name:"Moss",colors:["#134E5E","#71B280"]},{name:"Shroom Haze",colors:["#5C258D","#4389A2"]},{name:"Mystic",colors:["#757F9A","#D7DDE8"]},{name:"Midnight City",colors:["#232526","#414345"]},{name:"Sea Blizz",colors:["#1CD8D2","#93EDC7"]},{name:"Opa",colors:["#3D7EAA","#FFE47A"]},{name:"Titanium",colors:["#283048","#859398"]},{name:"Mantle",colors:["#24C6DC","#514A9D"]},{name:"Dracula",colors:["#DC2424","#4A569D"]},{name:"Peach",colors:["#ED4264","#FFEDBC"]},{name:"Moonrise",colors:["#DAE2F8","#D6A4A4"]},{name:"Clouds",colors:["#ECE9E6","#FFFFFF"]},{name:"Stellar",colors:["#7474BF","#348AC7"]},{name:"Bourbon",colors:["#EC6F66","#F3A183"]},{name:"Calm Darya",colors:["#5f2c82","#49a09d"]},{name:"Influenza",colors:["#C04848","#480048"]},{name:"Shrimpy",colors:["#e43a15","#e65245"]},{name:"Army",colors:["#414d0b","#727a17"]},{name:"Miaka",colors:["#FC354C","#0ABFBC"]},{name:"Pinot Noir",colors:["#4b6cb7","#182848"]},{name:"Day Tripper",colors:["#f857a6","#ff5858"]},{name:"Namn",colors:["#a73737","#7a2828"]},{name:"Blurry Beach",colors:["#d53369","#cbad6d"]},{name:"Vasily",colors:["#e9d362","#333333"]},{name:"A Lost Memory",colors:["#DE6262","#FFB88C"]},{name:"Petrichor",colors:["#666600","#999966"]},{name:"Jonquil",colors:["#FFEEEE","#DDEFBB"]},{name:"Sirius Tamed",colors:["#EFEFBB","#D4D3DD"]},{name:"Kyoto",colors:["#c21500","#ffc500"]},{name:"Misty Meadow",colors:["#215f00","#e4e4d9"]},{name:"Aqualicious",colors:["#50C9C3","#96DEDA"]},{name:"Moor",colors:["#616161","#9bc5c3"]},{name:"Almost",colors:["#ddd6f3","#faaca8"]},{name:"Forever Lost",colors:["#5D4157","#A8CABA"]},{name:"Winter",colors:["#E6DADA","#274046"]},{name:"Autumn",colors:["#DAD299","#B0DAB9"]},{name:"Candy",colors:["#D3959B","#BFE6BA"]},{name:"Reef",colors:["#00d2ff","#3a7bd5"]},{name:"The Strain",colors:["#870000","#190A05"]},{name:"Dirty Fog",colors:["#B993D6","#8CA6DB"]},{name:"Earthly",colors:["#649173","#DBD5A4"]},{name:"Virgin",colors:["#C9FFBF","#FFAFBD"]},{name:"Ash",colors:["#606c88","#3f4c6b"]},{name:"Shadow Night",colors:["#000000","#53346D"]},{name:"Cherryblossoms",colors:["#FBD3E9","#BB377D"]},{name:"Parklife",colors:["#ADD100","#7B920A"]},{name:"Dance To Forget",colors:["#FF4E50","#F9D423"]},{name:"Starfall",colors:["#F0C27B","#4B1248"]},{name:"Red Mist",colors:["#000000","#e74c3c"]},{name:"Teal Love",colors:["#AAFFA9","#11FFBD"]},{name:"Neon Life",colors:["#B3FFAB","#12FFF7"]},{name:"Man of Steel",colors:["#780206","#061161"]},{name:"Amethyst",colors:["#9D50BB","#6E48AA"]},{name:"Cheer Up Emo Kid",colors:["#556270","#FF6B6B"]},{name:"Shore",colors:["#70e1f5","#ffd194"]},{name:"Facebook Messenger",colors:["#00c6ff","#0072ff"]},{name:"SoundCloud",colors:["#fe8c00","#f83600"]},{name:"Behongo",colors:["#52c234","#061700"]},{name:"ServQuick",colors:["#485563","#29323c"]},{name:"Friday",colors:["#83a4d4","#b6fbff"]},{name:"Martini",colors:["#FDFC47","#24FE41"]},{name:"Metallic Toad",colors:["#abbaab","#ffffff"]},{name:"Between The Clouds",colors:["#73C8A9","#373B44"]},{name:"Crazy Orange I",colors:["#D38312","#A83279"]},{name:"Hersheys",colors:["#1e130c","#9a8478"]},{name:"Talking To Mice Elf",colors:["#948E99","#2E1437"]},{name:"Purple Bliss",colors:["#360033","#0b8793"]},{name:"Predawn",colors:["#FFA17F","#00223E"]},{name:"Endless River",colors:["#43cea2","#185a9d"]},{name:"Pastel Orange at the Sun",colors:["#ffb347","#ffcc33"]},{name:"Twitch",colors:["#6441A5","#2a0845"]},{name:"Instagram",colors:["#517fa4","#243949"]},{name:"Flickr",colors:["#ff0084","#33001b"]},{name:"Vine",colors:["#00bf8f","#001510"]},{name:"Turquoise flow",colors:["#136a8a","#267871"]},{name:"Portrait",colors:["#8e9eab","#eef2f3"]},{name:"Virgin America",colors:["#7b4397","#dc2430"]},{name:"Koko Caramel",colors:["#D1913C","#FFD194"]},{name:"Fresh Turboscent",colors:["#F1F2B5","#135058"]},{name:"Green to dark",colors:["#6A9113","#141517"]},{name:"Ukraine",colors:["#004FF9","#FFF94C"]},{name:"Curiosity blue",colors:["#525252","#3d72b4"]},{name:"Dark Knight",colors:["#BA8B02","#181818"]},{name:"Piglet",colors:["#ee9ca7","#ffdde1"]},{name:"Lizard",colors:["#304352","#d7d2cc"]},{name:"Sage Persuasion",colors:["#CCCCB2","#757519"]},{name:"Between Night and Day",colors:["#2c3e50","#3498db"]},{name:"Timber",colors:["#fc00ff","#00dbde"]},{name:"Passion",colors:["#e53935","#e35d5b"]},{name:"Clear Sky",colors:["#005C97","#363795"]},{name:"Master Card",colors:["#f46b45","#eea849"]},{name:"Back To Earth",colors:["#00C9FF","#92FE9D"]},{name:"Deep Purple",colors:["#673AB7","#512DA8"]},{name:"Little Leaf",colors:["#76b852","#8DC26F"]},{name:"Netflix",colors:["#8E0E00","#1F1C18"]},{name:"Light Orange",colors:["#FFB75E","#ED8F03"]},{name:"Green and Blue",colors:["#c2e59c","#64b3f4"]},{name:"Poncho",colors:["#403A3E","#BE5869"]},{name:"Back to the Future",colors:["#C02425","#F0CB35"]},{name:"Blush",colors:["#B24592","#F15F79"]},{name:"Inbox",colors:["#457fca","#5691c8"]},{name:"Purplin",colors:["#6a3093","#a044ff"]},{name:"Pale Wood",colors:["#eacda3","#d6ae7b"]},{name:"Haikus",colors:["#fd746c","#ff9068"]},{name:"Pizelex",colors:["#114357","#F29492"]},{name:"Joomla",colors:["#1e3c72","#2a5298"]},{name:"Christmas",colors:["#2F7336","#AA3A38"]},{name:"Minnesota Vikings",colors:["#5614B0","#DBD65C"]},{name:"Miami Dolphins",colors:["#4DA0B0","#D39D38"]},{name:"Forest",colors:["#5A3F37","#2C7744"]},{name:"Nighthawk",colors:["#2980b9","#2c3e50"]},{name:"Superman",colors:["#0099F7","#F11712"]},{name:"Suzy",colors:["#834d9b","#d04ed6"]},{name:"Dark Skies",colors:["#4B79A1","#283E51"]},{name:"Deep Space",colors:["#000000","#434343"]},{name:"Decent",colors:["#4CA1AF","#C4E0E5"]},{name:"Colors Of Sky",colors:["#E0EAFC","#CFDEF3"]},{name:"Purple White",colors:["#BA5370","#F4E2D8"]},{name:"Ali",colors:["#ff4b1f","#1fddff"]},{name:"Alihossein",colors:["#f7ff00","#db36a4"]},{name:"Shahabi",colors:["#a80077","#66ff00"]},{name:"Red Ocean",colors:["#1D4350","#A43931"]},{name:"Tranquil",colors:["#EECDA3","#EF629F"]},{name:"Transfile",colors:["#16BFFD","#CB3066"]},{name:"Sylvia",colors:["#ff4b1f","#ff9068"]},{name:"Sweet Morning",colors:["#FF5F6D","#FFC371"]},{name:"Politics",colors:["#2196f3","#f44336"]},{name:"Bright Vault",colors:["#00d2ff","#928DAB"]},{name:"Solid Vault",colors:["#3a7bd5","#3a6073"]},{name:"Sunset",colors:["#0B486B","#F56217"]},{name:"Grapefruit Sunset",colors:["#e96443","#904e95"]},{name:"Deep Sea Space",colors:["#2C3E50","#4CA1AF"]},{name:"Dusk",colors:["#2C3E50","#FD746C"]},{name:"Minimal Red",colors:["#F00000","#DC281E"]},{name:"Royal",colors:["#141E30","#243B55"]},{name:"Mauve",colors:["#42275a","#734b6d"]},{name:"Frost",colors:["#000428","#004e92"]},{name:"Lush",colors:["#56ab2f","#a8e063"]},{name:"Firewatch",colors:["#cb2d3e","#ef473a"]},{name:"Sherbert",colors:["#f79d00","#64f38c"]},{name:"Blood Red",colors:["#f85032","#e73827"]},{name:"Sun on the Horizon",colors:["#fceabb","#f8b500"]},{name:"IIIT Delhi",colors:["#808080","#3fada8"]},{name:"Dusk",colors:["#ffd89b","#19547b"]},{name:"50 Shades of Grey",colors:["#bdc3c7","#2c3e50"]},{name:"Dania",colors:["#BE93C5","#7BC6CC"]},{name:"Limeade",colors:["#A1FFCE","#FAFFD1"]},{name:"Disco",colors:["#4ECDC4","#556270"]},{name:"Love Couple",colors:["#3a6186","#89253e"]},{name:"Azure Pop",colors:["#ef32d9","#89fffd"]},{name:"Nepal",colors:["#de6161","#2657eb"]},{name:"Cosmic Fusion",colors:["#ff00cc","#333399"]},{name:"Snapchat",colors:["#fffc00","#ffffff"]},{name:"Ed's Sunset Gradient",colors:["#ff7e5f","#feb47b"]},{name:"Brady Brady Fun Fun",colors:["#00c3ff","#ffff1c"]},{name:"Black Rosé",colors:["#f4c4f3","#fc67fa"]},{name:"80's Purple",colors:["#41295a","#2F0743"]},{name:"Ibiza Sunset",colors:["#ee0979","#ff6a00"]},{name:"Dawn",colors:["#F3904F","#3B4371"]},{name:"Mild",colors:["#67B26F","#4ca2cd"]},{name:"Vice City",colors:["#3494E6","#EC6EAD"]},{name:"Cocoaa Ice",colors:["#c0c0aa","#1ce"]},{name:"EasyMed",colors:["#DCE35B","#45B649"]},{name:"Rose Colored Lenses",colors:["#E8CBC0","#636FA4"]},{name:"What lies Beyond",colors:["#F0F2F0","#000C40"]},{name:"Roseanna",colors:["#FFAFBD","#ffc3a0"]},{name:"Honey Dew",colors:["#43C6AC","#F8FFAE"]},{name:"Under the Lake",colors:["#093028","#237A57"]},{name:"The Blue Lagoon",colors:["#43C6AC","#191654"]},{name:"Can You Feel The Love Tonight",colors:["#4568DC","#B06AB3"]},{name:"Very Blue",colors:["#0575E6","#021B79"]},{name:"Love and Liberty",colors:["#200122","#6f0000"]},{name:"Orca",colors:["#44A08D","#093637"]},{name:"Venice",colors:["#6190E8","#A7BFE8"]}];
zen.message={},zen.message.close=function(){$(".c-confirm").hide(300),$(".c-alert").hide(300),$(".c-select").hide(300),$(".c-dropdown").hide(300),$(".custom-confirm").hide(300)};
zen.monment={init:function(){Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},Date.parseJsonDate=function(t){if("[object Date]"==Object.prototype.toString.call(t))return t;var e=/\((\d+)\)/;return e.test(t)?new Date(e.exec(t)[1]-0):utlis.servertime()}},dateFull:function(t){return new Date(t).format("yyyy年MM月dd日 hh:mm")},dateStr:function(t){return new Date(t).format("yyyy-MM-dd hh:mm")},dateShort:function(t){return new Date(t).format("hh:mm:ss")},dateDot:function(t){return new Date(t).format("yyyy.MM.dd")},date:function(t){return new Date(t).format("yyyy-MM-dd")}},zen.monment.init();
zen.page={animate:"",init:function(){console.time("load"),delete Zen.current;var e=zen.url.getHash()||"index";console.log("###Zen enter : "+e),zen.animate.enter(this.animate),this.load_view(),this.load_module(),this.load_script(),console.timeEnd("load")},getModule:function(type){var module="",hash=zen.url.getHash()||"index",name='Zen.views["'+hash+"."+type+'"]',name_index='Zen.views["'+hash+"/index."+type+'"]';return eval(name)?(module=zen.parse(eval(name)),console.log("Zen module : "+name),module):eval(name_index)?(module=zen.parse(eval(name_index)),console.log("Zen module : "+name),module):void 0},load_view:function(){console.time("load_view");var e,n,t,a="";e=this.getModule("css"),n=this.getModule("html"),t=this.getModule("js"),e&&(a+=e),n&&(a+=n),t&&(a+=t),a?($(".zen-container").removeClass("mask-on nav-top nav-right"),$(".zen-cur").html(a)):window.location.hash="index",console.timeEnd("load_view")},load_module:function(){console.time("load_module"),zen.directive.init(),$(".zen-page").attr("data-ready","ready"),console.timeEnd("load_module")},load_script:function(e){var n=$("head");n.find("*[data-type='page-script']").remove();for(var t=$("*[v-script]"),a=0;a<t.length;a++){var o=t.eq(a),i=$("<script>").attr("type","text/javascript");if(o&&o.attr("v-script")){var d=o.attr("v-script");d.indexOf("views")==-1?(i.attr("src",d),i.attr("data-type","page-script"),n.append(i),o.remove()):(script=zen.content(d),o.after(script),o.remove())}}},delay:function(e){return"ready"==$(".zen-page").attr("data-ready")?void(e&&e()):(console.log("Zen delay : 5ms"),void setTimeout(function(){zen.page.delay(e)},5))},ready:function(e){console.time("ready");var n=zen.url.getHash()||"index";this.delay(function(){e&&e.init&&e.init(),zen.cur=e||n,console.log("***Zen ready : "+n)}),console.timeEnd("ready")}};
zen.parse_decode=function(e){return e.replace(/__block_head__/g,"/*").replace(/__block_foot__/g,"*/"),e},zen.parse=function(e){if("function"==typeof e){var n=e.toString();if(n.length>20)return n.slice(15,-3)}return""},zen.content=function(path){var content="";path.indexOf("views/")>-1&&(path=path.replace("views/",""));var script_name='Zen.views["'+path+'"]';return content=zen.parse(eval(script_name)),content.replace(/__block_head__/g,"/*").replace(/__block_foot__/g,"*/")};
zen.pre={support:function(){var s={zepto:{type:"script",import:"must",cdn:"<script src='//cdn.bootcss.com/zepto/1.2.0/zepto.min.js'></script>"},fastclick:{type:"script",import:"need",cdn:"<script src='//cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js'></script>"},showdown:{type:"script",import:"need",cdn:"<script src='//cdn.bootcss.com/showdown/1.5.0/showdown.min.js'></script>"},"font-awesome":{type:"style",import:"need",cdn:"<link href='//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>"},animate:{type:"style",import:"need",cdn:"<link href='//cdn.bootcss.com/animate.css/3.5.2/animate.min.css' rel='stylesheet'>"}};for(var t in s)if("need"==s[t].import){var e=$(s[t].cdn);"style"==s[t].type?$("title").after(e):$("head").append(e)}}};
zen.resize=function(){$(".screen-height").css("min-height",$(window).height()),$(".zen-stack").css("min-height",$(window).height()),$(".zen-page").css("min-height",$(window).height()),$(window).resize(function(){$(".screen-height").css("min-height",$(window).height()),$(".zen-stack").css("min-height",$(window).height()),$(".zen-page").css("min-height",$(window).height())})};
zen.scroll={to:function(o,t){return t||(t=300),o.length>0&&$(o).length?$("html,body").animate({scrollTop:$(o).offset().top},t):$("html,body").animate({scrollTop:0},t),!1}};
zen.store={data:function(t,e){if(!e){var o=t.data("data");return"string"==typeof o?JSON.parse(o):o}"string"==typeof e?t.data("data",e):t.data("data",JSON.stringify(e))},gData:function(t){var e=window.sessionStorage.getItem(t);return null==e||""==e?null:e=JSON.parse(window.sessionStorage.getItem(t))},sData:function(t,e){window.sessionStorage.setItem(t,JSON.stringify(e))},sValue:function(t,e){window.sessionStorage.setItem(t,e)},gValue:function(t){var e=window.sessionStorage.getItem(t);return e},sLocal:function(t,e){localStorage.setItem(t,e)},gLocal:function(t){var e=localStorage.getItem(t);return e},setLocal:function(t,e){localStorage.setItem(t,JSON.stringify(e))},getLocal:function(t){var e=localStorage.getItem(t);if(null==e||""==e)return null;try{return e=JSON.parse(localStorage.getItem(t))}catch(t){console.log(t)}return null},dLocal:function(t){localStorage.removeItem(t)},sHref:function(t){t?window.sessionStorage.setItem("redirect_url",t):window.sessionStorage.setItem("redirect_url",window.location.href)},goHref:function(){var t=window.sessionStorage.getItem("redirect_url");null!=t&&""!=t||(t="/"),window.location.href=t},gHref:function(){var t=window.sessionStorage.getItem("redirect_url");return null!=t&&""!=t||(t="/"),t}};
zen.template={select:function(e,t){var n=e[t];if($("select[name="+t+"]").length)for(var i in n)$("select[name="+t+"]").append('<option value="'+i+'">'+n[i]+"</option>")},input:function(e){var t=$("input[name="+e+"]");if(t.length&&t.val()){if(e.indexOf("date")>-1){var n=t.val(),i=new Date(n).getTime();return i}return t.val()}return""},values:function(e,t){for(var n in t)n.indexOf("times")==-1&&n.indexOf("time")>-1?e.find("."+n).text(Filter.time(t[n])):n.indexOf("date")>-1?e.find("."+n).text(Filter.date(t[n])):e.find("."+n).text(t[n])}};
zen.url={go:function(e){e&&(window.location.href=e)},getPar:function(e){var r=document.location.href,n=r.indexOf(e+"=");if(n==-1)return!1;var t=r.slice(e.length+n+1),a=t.indexOf("&");return a!=-1&&(t=t.slice(0,a)),t},getHash:function(){var e=window.location.hash.replace("#","");return e=e.split("?")[0]},toCamel:function(e){var e=e.replace(/\-(\w)/g,function(e,r){return r.toUpperCase()});return e},toName:function(e){var e=e.replace(/([A-Z])/g,"-$1").toLowerCase();return e},pathname:function(e){var r=e.replace(".js","_js").replace(".html","_html").replace(/-/g,"_").replace(/\//g,"__");return r}};
zen.util={lastClick:null,once:function(n){var i=(new Date).getTime();return i-Util.lastClick<2e3?void zen.message.toast("您的操作过快，请稍后尝试"):(Util.lastClick=i,void(n&&n()))},join:function(n,i,t){if(i instanceof Array)for(var e=0,o=i.length;e<o;e++)Util.join(n,i[e],t);for(var e in i)!t&&e in n||(n[e]=i[e]);return n},_resize:function(n){var i=(window.innerWidth||document.body&&document.body.clientWidth)/320;n?$("html").css("font-size",62.5*i+"%"):$("html").css("font-size","62.5%")},resize:function(n){var n=n||!1;Util._resize(n),$(window).resize(function(){Util._resize(n)})},min:function(n,i){return n<i?n:i},scrollShow:function(n){$(window).scroll(function(){window.scrollY>200?$(n).show(300):$(n).hide()})},alertOver:function(){zen.message.alert("当前活动已经结束，请关注盈火虫公众号参与更多活动！",function(){window.location.href="/"})}};
zen.init=function(n){$(document).ready(function(){zen.dao(),zen.page.init(),zen.fastclick(),$(window).on("hashchange",function(){zen.url.getHash()||"index";zen.page.init()}),n&&n()})};
var zm=Zen.modules,zv=Zen.views,zd=Zen.data,zt=Zen.template;
zen.message.alert=function(e,c){var t=$(".c-alert");$(".c-alert .message-text").html(e),t.show(300),$(".c-alert .alert-ok").unbind("click").click(function(){c&&c(),zen.message.close()})};

zen.message.confirm=function(c,n){var i=$(".c-confirm");$(".c-confirm .message-text").html(c),i.show(300),$(".c-confirm .confirm-ok").unbind("click").click(function(){n&&n(),zen.message.close()}),$(".c-confirm .confirm-cancel").unbind("click").click(function(){zen.message.close()}),$(".c-confirm .mask").unbind("click").click(function(){zen.message.close()})};
zen.message1={toast:function(e){var c=$(".c-toast");$(".c-toast .message-text").text(e),c.show(300),setTimeout(function(){$(".c-toast").hide(500)},2e3)},alert:function(e,c){var s=$(".c-alert");$(".c-alert .message-text").html(e),s.show(300),$(".c-alert .alert-ok").unbind("click").click(function(){c&&c(),zen.message.close()})},confirm:function(e,c){var s=$(".c-confirm");$(".c-confirm .message-text").html(e),s.show(300),$(".c-confirm .confirm-ok").unbind("click").click(function(){c&&c(),zen.message.close()}),$(".c-confirm .confirm-cancel").unbind("click").click(function(){zen.message.close()}),$(".c-confirm .mask").unbind("click").click(function(){zen.message.close()})},custom:function(e){var c=$("#"+e);c.show(300),$(".custom-confirm .confirm-cancel").unbind("click").click(function(){zen.message.close()}),$(".custom-confirm .mask").unbind("click").click(function(){zen.message.close()})},select:function(e,c,s){var n=$("#"+c);n.find(".header-div .title").text(e),n.show(300),$(".c-select .select-ok").unbind("click").click(function(){s&&s(),zen.message.close()}),$(".c-select .mask").unbind("click").click(function(){zen.message.close()})},dropdown:function(e){var c=$("#"+e);c.show(300),$(".c-dropdown .dropdown-btn").unbind("click").click(function(){zen.message.close()}),$(".c-dropdown .mask").unbind("click").click(function(){zen.message.close()})},close:function(){$(".c-confirm").hide(300),$(".c-alert").hide(300),$(".c-select").hide(300),$(".c-dropdown").hide(300),$(".custom-confirm").hide(300)},send:function(verify_type,send_type,fn){if(fn){var fun=eval(fn);if(!fun())return}var sms=$(".sms-btn"),voice=$(".voice-btn");if(!sms.hasClass("gray")&&!voice.hasClass("gray")){var url=CGI.URL("USER","R_VERIFY_CODE");$.ajax({url:url,dataType:"json",beforeSend:function(){sms.addClass("gray"),voice.addClass("gray")},data:{phone:$("input[name='phone']").val(),verify_type:verify_type,send_type:send_type},success:function(e){"00000"==e.code?zen.message.nextClick(60,send_type):"50025"==e.code||"50027"==e.code?zen.message.nextClick(e.result.time_left,send_type):(zen.message.alert(e.message),$(".custom-confirm .error-message").text(e.message).removeClass("hide"),voice.removeClass("gray"),sms.removeClass("gray").text("获取验证码"),voice.text("收不到短信?试试语音验证"),wait=60)}})}},nextClick:function(e,c){var s=$(".sms-btn"),n=$(".voice-btn");0==e?(n.removeClass("gray"),s.removeClass("gray").text("获取验证码"),n.text("收不到短信?试试语音验证"),e=60):(s.hasClass("gray")||s.addClass("gray"),n.hasClass("gray")||n.addClass("gray"),s.text(e+"秒重获"),"voice"==c?n.text("请注意接听随机电话号码的语音验证码"):n.text("请等候"+e+"秒后再试试语音验证"),e--,setTimeout(function(){zen.message.nextClick(e,c)},1e3))}};
var MultiSelect=function(e){return e&&e.ele&&e.data&&(this.ele=$("#"+e.ele),this.data=e.data,this.para="",this.rend(e.data),this.bind()),this};MultiSelect.prototype={rend:function(e){for(var t=this,a=t.ele.find(".select-list"),l=0;l<e.length;l++){var i=e[l],s=$("<div>").addClass("select-item");zen.store.data(s,i),s.attr("data-value",i.value).text(i.name),a.append(s)}},bind:function(){var e=this;this.ele.find(".select-item").click(function(){var t=$(this);t.attr("data-value")?e.ele.find(".select-item").eq(0).removeClass("selected"):e.ele.find(".select-item").removeClass("selected"),t.toggleClass("selected"),e.rendValue()})},rendValue:function(){var e=this,t=e.ele.find(".select-list"),a="",l="";t.find(".selected").each(function(){var e=$(this);e.attr("data-value")&&(""==a?(a+=e.attr("data-value"),l+=e.text()):(a+=","+e.attr("data-value"),l+=","+e.text()))}),""==a&&(l="请选择"),e.ele.find(".select-area").text(l),e.ele.attr("data-value",a),e.para=a}};
var PageTips={tips:null,page:null,init:function(t){this.tips=$(".c-page-tips"),this.tips.show(),this.page=t,PageTips.rend(),setInterval(function(){PageTips.rend()},1e3)},list:function(){var t=this.tips,i=this.page,n="当前加载"+i.current_page+"/"+i.page_count+"页，共"+i.item_count+"条数据";t.find(".text").text(n),t.attr("data-status","enable")},loading:function(){var t=this.tips;t.find(".text").text("数据加载中……"),t.attr("data-status","disable")},none:function(){var t=this.tips;t.find(".text").text("当前暂无记录"),t.attr("data-status","disable")},end:function(){var t=this.tips;t.find(".text").text("当前数据已经加载完成"),t.attr("data-status","disable")},rend:function(t){var t=this.page;return this.loading(),t?t&&0==t.item_count?void this.none():t&&t.current_page==t.page_count?void this.end():t&&t.current_page<t.page_count?void this.list():void this.loading():void this.none()}};
var SideNav={top:null,right:null,bottom:null,left:null,toggle:function(n){this.pre(n),$(".zen-container").hasClass("nav-"+n)?this.close():this.show(n)},pre:function(n){"top"==n&&$(".c-side-nav.nav-right").hide()},show:function(n){this.close(),$(".c-side-nav.nav-"+n).show(),$(".zen-container").addClass("nav-"+n)},close:function(n){$(".zen-container").removeClass("nav-top"),$(".zen-container").removeClass("nav-right")}};
var SideNav={top:null,right:null,bottom:null,left:null,toggle:function(n){this.pre(n),$(".zen-container").hasClass("nav-"+n)?this.close():this.show(n)},pre:function(n){"top"==n&&$(".c-side-nav.nav-right").hide()},show:function(n){this.close(),$(".c-side-nav.nav-"+n).show(),$(".zen-container").addClass("nav-"+n)},close:function(n){$(".zen-container").removeClass("nav-top"),$(".zen-container").removeClass("nav-right")}};
zen.message.toast=function(t){var e=$(".c-toast");$(".c-toast .message-text").text(t),e.show(300),setTimeout(function(){$(".c-toast").hide(500)},2e3)};
var ToggleGroup=function(t){this.ele=$("#"+t.ele),this.data=t.data,this.para="",this.addAction=t.addAction,this.delAction=t.delAction,this.rend(t.data),this.bind()};ToggleGroup.prototype={rend:function(t){for(var e=this,d=e.ele,a=0;a<t.length;a++){var n=t[a],i=d.find(".template-area .toggle-item").clone();zen.store.data(i,n),i.text(n.name),n.selected?d.find("*[data-type='selected'] .toggle-list").append(i):d.find("*[data-type='none'] .toggle-list").append(i),e.bind(i)}},add:function(t){var e=this.ele,d=zen.store.data(t);e.find("*[data-type='selected'] .toggle-list").append(t),d.selected=!0,zen.store.data(t,d),this.addAction&&this.addAction(d)},del:function(t){var e=this.ele,d=zen.store.data(t);e.find("*[data-type='none'] .toggle-list").append(t),d.selected=!1,zen.store.data(t,d),this.addAction&&this.delAction(d)},bind:function(t){var e=this;t&&t.click(function(){var d=zen.store.data(t);d.selected?e.del(t):e.add(t)})}};