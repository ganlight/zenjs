views.common_css = function() {/*<style>#app {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("assets/img/background.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>*/}
views.common_js = function() {/*<script>var Focus= {}
</script>*/}
views.index_html = function() {/*<style>.c-navmenu-banner .title{font-size:1.6rem;color:#FFF}.c-navmenu-banner .menu{cursor:pointer}.c-navmenu-banner>div{position:relative;padding:1.1rem 1.5rem;font-size:2rem}ul{list-style:none;margin:0;padding:0}.link-item{height:100px;width:64px;color:#FFF}.link-item i{font-size:2.4rem}.link-item .name{line-height:3rem;font-size:1.4rem}.link-item .white-line{height:.1rem;background:#FFF}</style><div class="zen-page v-center"><div class="c-navmenu-banner fix-top"><div class="text-center clearfix"><span class="logo fl" v-link="/"><i class="fa fa-paper-plane fa-fw white"></i></span> <span class="title"></span> <span class="fr menu"><i class="fa fa-bars fa-fw white"></i></span></div></div><ul class="link-list"><li class="link-item text-center" v-link="#example/index"><div><i class="fa fa-paper-plane fa-fw white"></i></div><div class="name">VIEWS</div><div class="white-line"></div></li><li class="link-item text-center" v-link="#front/green"><div><i class="fa fa-paper-plane fa-fw white font32"></i></div><div class="name">MODULES</div><div class="white-line"></div></li><li class="link-item text-center" v-link="#about"><div><i class="fa fa-paper-plane fa-fw white font32"></i></div><div class="name">ZENJS</div><div class="white-line"></div></li></ul></div><script>$(function(){var pages=[{name:"toggle-group",href:"#example/toggle-group"},{name:"multi-select",href:"#example/multi-select"},{name:"single-page toggle-group",href:"#example/single-page/toggle-group"},{name:"single-page multi-select",href:"#example/single-page/multi-select"},{name:"alert",action:"Message.alert('Light Zen')"},{name:"toast",action:"Message.toast('Light Zen')"},{name:"confirm",action:"Message.confirm('Light Zen')"},{name:"toggle-group",href:"#example/toggle-group"},{name:"multi-select",href:"#example/multi-select"},{name:"single-page toggle-group",href:"#example/single-page/toggle-group"},{name:"single-page multi-select",href:"#example/single-page/multi-select"},{name:"alert",action:"Message.alert('Light Zen')"},{name:"toast",action:"Message.toast('Light Zen')"},{name:"confirm",action:"Message.confirm('Light Zen')"}],Service={init:function(){this.data=pages,this.rend()},rend:function(){for(var e=this,a=pages,t=$(".page-list"),n=0;n<a.length;n++){var g=a[n],l=$(".page-template .list-item").clone();Store.data(l,g),Util.rendValue(l,g),e.bind(l),t.append(l)}},bind:function(clone){clone.click(function(){var data=Store.data(clone);data.href&&(window.location.href=data.href),data.action&&eval(data.action)})}};Zen.ready(Service)})</script>*/}
views.example__index_html = function() {/*<style>.index-page{position:absolute;width:100%;height:100%}.index-page .page-list{list-style:none;margin:0;padding:0}.index-page .list-item{list-style:none;padding:10px 15px;background:#FFF;margin:15px;border-radius:5px}.index-page .list-item .name{padding-bottom:5px}</style><div class="zen-page index-page"><ul class="page-list" id="page-list"></ul><div class="page-template hide"><li class="list-item inline clearfix"><div class="font20 name"></div><div class="font16 gray href action"></div></li></div></div><script>$(function(){var pages=[{name:"toggle-group",href:"#example/toggle-group"},{name:"multi-select",href:"#example/multi-select"},{name:"single-page toggle-group",href:"#example/single-page/toggle-group"},{name:"single-page multi-select",href:"#example/single-page/multi-select"},{name:"alert",action:"Message.alert('Light Zen')"},{name:"toast",action:"Message.toast('Light Zen')"},{name:"confirm",action:"Message.confirm('Light Zen')"}],Service={init:function(){this.data=pages,this.rend()},rend:function(){for(var e=this,a=pages,t=$(".page-list"),n=0;n<a.length;n++){var i=a[n],l=$(".page-template .list-item").clone();Store.data(l,i),Util.rendValue(l,i),e.bind(l),t.append(l)}},bind:function(clone){clone.click(function(){var data=Store.data(clone);data.href&&(window.location.href=data.href),data.action&&eval(data.action)})}};Zen.ready(Service)})</script>*/}
views.focus_time__index_html = function() {/*<style></style><div class="zen-page v-center">green</div><script>console.log("focus time")</script>*/}
views.front__green_html = function() {/*<style>.bg-green{background:green;font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page bg-green v-center">green</div><script>console.log("green page")</script>*/}
views.front__page_html = function() {/*<style>.example-field{font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page example-field" v-script="views/example/js/toggle-group.js"><ul><li><div id="m-type" v-zen="toggle-group"></div></li><br><li><div id="m-status" v-zen="toggle-group"></div></li></ul></div>*/}
views.front__red_html = function() {/*<style>.bg-red{background:red;font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page bg-red v-center">red</div>*/}
views.example__multi_select__index_html = function() {/*<div class="zen-page"><h2 class="font24 white text-center">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div>*/}
views.example__single_page__multi_select_html = function() {/*<style>.zen-page ul{list-style:none;margin:15px;padding:15px;font-size:16px}</style><div class="zen-page"><ul><li><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div><script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};Zen.ready(l)})</script>*/}
views.example__single_page__toggle_group_html = function() {/*<style></style><div class="zen-page"><ul><li><div id="m-type" v-zen="toggle-group"></div></li><br><li><div id="m-status" v-zen="toggle-group"></div></li></ul></div><script v-script="views/example/single-page/toggle.js"></script>*/}
views.example__toggle_group__index_html = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul></div><script>$(function(){var e={ele:"m-type",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},t={ele:"m-status",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},a={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(t)}};Zen.ready(a)})</script>*/}
views.focus_time__index_js = function() {/*<script>Jx().$package(function(t){var e,a,n,o,i,r,s,m,l=t.dom,c=t.event,d=!1,p=!1,u="",T={};i=T.text={pleaseStart:"赶紧开始当前任务吧！",needNum:"请输入正确的分钟数",timeUp:"恭喜你，你又完成了一个番茄任务，继续加油哦^_^！",warnText:"你有正在进行的番茄工作定时，如果离开本页将撤销此定时",confirmOverwrite:"数据不同步，确认覆盖吗?"};var f=l.id("taskName"),k=(l.id("startWorkTime"),l.id("startRestTime"),l.id("remainTime")),v=l.id("startWorkButton"),h=l.id("startRestButton"),w=l.id("stopButton"),S=l.id("progressBar"),g=l.id("isLoopCheckbox"),D=l.id("taskList"),x=l.id("currentTask"),L=function(t){return 60*t*1e3},N=function(t){return e=t,isNaN(e)||e<=0?alert(i.needNum):(n=+new Date,o=n+e),{planTime:e,startTime:n,stopTime:o}},B=function(t){if(!d){console.log(t);var n=N(t);d=!0,s=n.startTime,m={taskName:String(f.value),planTime:e,planStartTime:n.startTime,planStopTime:n.stopTime,stopTime:null},W(m),R(r),U(),M(),a=setInterval(M,1e3)}},M=function(){var t=+new Date,a=Math.round((o-t)/1e3),n=Math.floor(a/3600)%24,i=Math.floor(a/60)%60,r=Math.floor(a)%60;if(a>=0){var s=a/(e/1e3);console.log("progress:"+s),k.innerText=n+":"+i+":"+r,S.style.width=500*s+"px",console.log(S.style.width),0===a&&I()}},I=function(){y(),j(),p=g.checked,p&&B(e)},j=function(){""!=u?(u.match(/^http/)&&window.open(u),alert(i.timeUp+"\n"+u)):alert(i.timeUp)},y=function(){r.taskList[s].stopTime=+new Date,R(r),b(),C(r),clearTimeout(a),d=!1},U=function(){var e=m,a="任务：【"+e.taskName+"】时间("+t.format.date(new Date(e.planStartTime),"hh:mm")+" - "+t.format.date(new Date(e.planStopTime),"hh:mm")+")";x.innerText=a+"正在进行中, 你要加油哦！！！"},b=function(){x.innerText=i.pleaseStart},C=function(e){console.dir(e.taskList);var a=0;for(var n in e.taskList){a++;var o=e.taskList[n];console.dir(o);var i=l.node("li"),r="任务：【"+o.taskName+"】时间("+t.format.date(new Date(o.planStartTime),"hh:mm")+" - "+t.format.date(new Date(o.planStopTime),"hh:mm")+")",s="";o.stopTime?Math.round(o.stopTime/1e3/60)===Math.round(o.planStopTime/1e3/60)?(r+="，恭喜你按时完成！",s="taskDone"):(r+="，但：你【停止】于："+t.format.date(new Date(o.stopTime),"hh:mm"),s="taskStop"):(r+=", 但：你打酱油去了？",s="taskLeave"),i.innerText=r,l.addClass(i,s),D.insertBefore(i,D.children[0])}if(0===a){var i=l.node("li");i.innerText="0 任务",D.insertBefore(i,D.children[0])}};c.on(v,"click",function(t){var e=L(l.id("workTime").value);B(e)}),c.on(h,"click",function(t){var e=L(l.id("restTime").value);console.log("restTime:"+e),B(e)}),c.on(w,"click",function(t){y()}),c.on(window,"beforeunload",function(t){if(d)return t&&(t.returnValue=i.warnText),i.warnText});var O=function(){return r=t.json.parse(localStorage.getItem("tomatoData")),console.dir(r),r?r:(r={lastTimeStamp:+new Date,taskList:{}},void localStorage.setItem("tomatoData",t.json.stringify(r)))},R=function(e){var a=t.json.parse(localStorage.getItem("tomatoData"));(a.lastTimeStamp===e.lastTimeStamp||confirm(i.confirmOverwrite))&&localStorage.setItem("tomatoData",t.json.stringify(r))},W=function(t){r.taskList[t.planStartTime]=t};O(),C(r),N(L(l.id("workTime").value)),M()});</script>*/}
views.example__multi_select__index_js = function() {/*<script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};Zen.ready(l)});</script>*/}
views.example__single_page__toggle_js = function() {/*<script>$(function(){var e={ele:"m-type",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},t={ele:"m-status",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},a={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(t)}};Zen.ready(a)});</script>*/}
views.focus_time__index_css = function() {/*<style>::-webkit-scrollbar-track-piece{background:#f5f5f5;border-left:1px solid #d2d2d2}::-webkit-scrollbar{width:13px;height:13px}::-webkit-scrollbar-thumb{background:#c2c2c2;background-clip:padding-box;border:1px solid #979797;min-height:28px}::-webkit-scrollbar-thumb:hover{border:1px solid #636363;background:#929292}body{font-family:Tahoma,Arial,MS Trebuchet,sans-serif;font-size:14px}button,input,label{display:block;margin:10px auto}#title{margin:10px auto;width:500px;text-align:center;font-size:60px}#remainTime{text-align:center;font-size:180px}#progressBar,#progressBarBorder{width:500px;height:15px;overflow:hidden}#progressBarBorder{display:block;margin:10px auto;border:1px solid #fff;box-shadow:1px 1px 15px #000}#progressBar{background:blue}#control{margin:10px auto;width:500px}.taskLeave{background:#ff0}.taskDone{background:blue}.taskStop{background:red}.copyright{margin:50px auto;text-align:center}</style>*/}
views.example__multi_select__index_css = function() {/*<style>.zen-page{font-size:1.6rem}</style>*/}