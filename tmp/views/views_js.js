views.focus_time__index_js = function() {/*<script>Jx().$package(function(t){var e,a,n,o,i,r,s,m,l=t.dom,c=t.event,d=!1,p=!1,u="",T={};i=T.text={pleaseStart:"赶紧开始当前任务吧！",needNum:"请输入正确的分钟数",timeUp:"恭喜你，你又完成了一个番茄任务，继续加油哦^_^！",warnText:"你有正在进行的番茄工作定时，如果离开本页将撤销此定时",confirmOverwrite:"数据不同步，确认覆盖吗?"};var f=l.id("taskName"),k=(l.id("startWorkTime"),l.id("startRestTime"),l.id("remainTime")),v=l.id("startWorkButton"),h=l.id("startRestButton"),w=l.id("stopButton"),S=l.id("progressBar"),g=l.id("isLoopCheckbox"),D=l.id("taskList"),x=l.id("currentTask"),L=function(t){return 60*t*1e3},N=function(t){return e=t,isNaN(e)||e<=0?alert(i.needNum):(n=+new Date,o=n+e),{planTime:e,startTime:n,stopTime:o}},B=function(t){if(!d){console.log(t);var n=N(t);d=!0,s=n.startTime,m={taskName:String(f.value),planTime:e,planStartTime:n.startTime,planStopTime:n.stopTime,stopTime:null},W(m),R(r),U(),M(),a=setInterval(M,1e3)}},M=function(){var t=+new Date,a=Math.round((o-t)/1e3),n=Math.floor(a/3600)%24,i=Math.floor(a/60)%60,r=Math.floor(a)%60;if(a>=0){var s=a/(e/1e3);console.log("progress:"+s),k.innerText=n+":"+i+":"+r,S.style.width=500*s+"px",console.log(S.style.width),0===a&&I()}},I=function(){y(),j(),p=g.checked,p&&B(e)},j=function(){""!=u?(u.match(/^http/)&&window.open(u),alert(i.timeUp+"\n"+u)):alert(i.timeUp)},y=function(){r.taskList[s].stopTime=+new Date,R(r),b(),C(r),clearTimeout(a),d=!1},U=function(){var e=m,a="任务：【"+e.taskName+"】时间("+t.format.date(new Date(e.planStartTime),"hh:mm")+" - "+t.format.date(new Date(e.planStopTime),"hh:mm")+")";x.innerText=a+"正在进行中, 你要加油哦！！！"},b=function(){x.innerText=i.pleaseStart},C=function(e){console.dir(e.taskList);var a=0;for(var n in e.taskList){a++;var o=e.taskList[n];console.dir(o);var i=l.node("li"),r="任务：【"+o.taskName+"】时间("+t.format.date(new Date(o.planStartTime),"hh:mm")+" - "+t.format.date(new Date(o.planStopTime),"hh:mm")+")",s="";o.stopTime?Math.round(o.stopTime/1e3/60)===Math.round(o.planStopTime/1e3/60)?(r+="，恭喜你按时完成！",s="taskDone"):(r+="，但：你【停止】于："+t.format.date(new Date(o.stopTime),"hh:mm"),s="taskStop"):(r+=", 但：你打酱油去了？",s="taskLeave"),i.innerText=r,l.addClass(i,s),D.insertBefore(i,D.children[0])}if(0===a){var i=l.node("li");i.innerText="0 任务",D.insertBefore(i,D.children[0])}};c.on(v,"click",function(t){var e=L(l.id("workTime").value);B(e)}),c.on(h,"click",function(t){var e=L(l.id("restTime").value);console.log("restTime:"+e),B(e)}),c.on(w,"click",function(t){y()}),c.on(window,"beforeunload",function(t){if(d)return t&&(t.returnValue=i.warnText),i.warnText});var O=function(){return r=t.json.parse(localStorage.getItem("tomatoData")),console.dir(r),r?r:(r={lastTimeStamp:+new Date,taskList:{}},void localStorage.setItem("tomatoData",t.json.stringify(r)))},R=function(e){var a=t.json.parse(localStorage.getItem("tomatoData"));(a.lastTimeStamp===e.lastTimeStamp||confirm(i.confirmOverwrite))&&localStorage.setItem("tomatoData",t.json.stringify(r))},W=function(t){r.taskList[t.planStartTime]=t};O(),C(r),N(L(l.id("workTime").value)),M()});</script>*/}
views.example__single_page__toggle_js = function() {/*<script>$(function(){var e={ele:"m-type",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},t={ele:"m-status",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},a={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(t)}};Zen.ready(a)});</script>*/}
views.example__multi_select__index_js = function() {/*<script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};Zen.ready(l)});</script>*/}