(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={stat:"Statistics_stat__2FY6L",stat__title:"Statistics_stat__title__3mhPc",stat__item:"Statistics_stat__item__3xtUG",stat__list:"Statistics_stat__list__3ox6s"}},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var s=a(2),c=a.n(s),n=a(7),i=a.n(n),o=(a(17),a(8)),r=a(9),l=a(10),d=a(12),b=a(11),_=a(4),u=a.n(_),j=a(5),h=a.n(j),p=a(0);var v=function(t){var e=t.feedbackBtnsOptions,a=t.onLeaveFeedback;return Object(p.jsx)("div",{className:h.a.feedbackOptions,children:e.map((function(t){return Object(p.jsxs)("button",{className:h.a.feedbackBtn,type:"button",value:t,onClick:a,children:[t," +1"]},t)}))})};var f=function(t){var e=t.message;return Object(p.jsx)("p",{children:e})},k=a(1),O=a.n(k);var m=function(t){var e=t.good,a=t.bad,s=t.neutral,c=t.total,n=t.positivePercentage;return Object(p.jsxs)("div",{className:O.a.stat,children:[Object(p.jsx)("h2",{className:O.a.stat__title,children:"Statistics:"}),0===c?Object(p.jsx)(f,{message:"No feedback given"}):Object(p.jsxs)("ul",{className:O.a.stat__list,children:[Object(p.jsxs)("li",{className:O.a.stat__item,children:["Good: ",e]}),Object(p.jsxs)("li",{className:O.a.stat__item,children:["Bad: ",a]}),Object(p.jsxs)("li",{className:O.a.stat__item,children:["Neutral: ",s]}),Object(p.jsxs)("li",{className:O.a.stat__item,children:["Total: ",c]}),Object(p.jsxs)("li",{className:O.a.stat__item,children:["Positive percentage: ",n,"%"]})]})]})},x=a(6),g=a.n(x);function N(t){var e=t.title,a=t.children;return Object(p.jsxs)("section",{className:g.a.section,children:[e&&Object(p.jsx)("h1",{className:g.a.section__title,children:e}),a]})}var F=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){var a=e.target.value;t.setState((function(t){return Object(o.a)({},a,t[a]+=1)}))},t}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){var t=this.state;return t.good+t.neutral+t.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.state.good,e=this.countTotalFeedback();return Math.round(t/e*100)||0}},{key:"render",value:function(){var t=this.countTotalFeedback(),e=this.countPositiveFeedbackPercentage(),a=Object.keys(this.state);return Object(p.jsx)("div",{className:u.a.app,children:Object(p.jsx)(N,{title:"Please leave feedback",children:Object(p.jsxs)("div",{className:u.a.feedbackForm,children:[Object(p.jsx)(v,{feedbackBtnsOptions:a,onLeaveFeedback:this.onLeaveFeedback}),Object(p.jsx)(m,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positivePercentage:e})]})})})}}]),a}(s.Component),P=F;i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))},4:function(t,e,a){t.exports={App:"App_App__16ZpL",feedbackForm:"App_feedbackForm__W-Tsc"}},5:function(t,e,a){t.exports={feedbackOptions:"FeedbackOptions_feedbackOptions__1XHQP",feedbackBtn:"FeedbackOptions_feedbackBtn__1Gh71"}},6:function(t,e,a){t.exports={section:"Section_section__Ap5Zy",section__title:"Section_section__title__3kalK"}}},[[19,1,2]]]);
//# sourceMappingURL=main.d839841d.chunk.js.map