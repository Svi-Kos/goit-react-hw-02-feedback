(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(t,e,s){t.exports={statisticsItem:"Statistics_statisticsItem__XYFuD"}},,,,,,,,function(t,e,s){t.exports={feedback:"FeedbackWidget_feedback__2H_1x",statisticsItem:"FeedbackWidget_statisticsItem__20fmm"}},function(t,e,s){t.exports={button:"FeedbackOptions_button__lSJs4"}},function(t){t.exports=JSON.parse('[{"id":"id-1","label":"good"},{"id":"id-2","label":"neutral"},{"id":"id-3","label":"bad"}]')},function(t,e,s){t.exports={notification:"Notification_notification__2vm55"}},,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),i=s(1),n=s.n(i),c=s(8),o=s.n(c),r=(s(19),s(20),s(9)),l=s(3),d=s(4),b=s(6),u=s(5),j=(s(21),s(10)),h=s.n(j);var p=function(t){var e=t.title,s=t.children;return Object(a.jsxs)("div",{className:h.a.feedback,children:[Object(a.jsx)("h2",{children:e}),s]})},f=s(11),m=s.n(f),v=function(t){Object(b.a)(s,t);var e=Object(u.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{children:this.props.options.map((function(e){return Object(a.jsx)("button",{type:"button",className:m.a.button,onClick:function(){t.props.onLeaveFeedback(e.label),t.props.showStatistics()},children:e.label},e.id)}))})}}]),s}(i.Component),O=s(2),x=s.n(O),g=function(t){var e=t.good,s=t.neutral,i=t.bad,n=t.total,c=t.positivePercentage;return Object(a.jsxs)("div",{className:x.a.statistics,children:[Object(a.jsx)("h3",{children:"Statistics"}),Object(a.jsxs)("p",{className:x.a.statisticsItem,children:["Good: ",e]}),Object(a.jsxs)("p",{className:x.a.statisticsItem,children:["Neutral: ",s]}),Object(a.jsxs)("p",{className:x.a.statisticsItem,children:["Bad: ",i]}),Object(a.jsxs)("p",{className:x.a.statisticsItem,children:["Total: ",n]}),Object(a.jsxs)("p",{className:x.a.statisticsItem,children:["positivePercentage: ",c,"%"]})]})},k=s(12),_=s(13),N=s.n(_),S=function(t){var e=t.message;return Object(a.jsx)("div",{className:N.a.notification,children:e})},I=function(t){Object(b.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.showStatistics=function(){t.setState({visible:!0})},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}),(function(){t.setState({total:t.state.good+t.state.neutral+t.state.bad},(function(){t.setState((function(t){return{positivePercentage:Math.round(t.good/t.total*100)}}))}))}))},t}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(p,{title:"Please leave feedback",children:[Object(a.jsx)(v,{options:k,onLeaveFeedback:this.onLeaveFeedback,showStatistics:this.showStatistics}),!this.state.visible&&Object(a.jsx)(S,{message:"No feedback given"}),this.state.visible&&Object(a.jsx)(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positivePercentage:this.state.positivePercentage})]})})}}]),s}(i.Component);o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.d0bd18eb.chunk.js.map