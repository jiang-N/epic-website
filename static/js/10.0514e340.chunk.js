(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[10],{243:function(e,a,n){"use strict";n.r(a);var s,t,r=n(128),c=n(31),i=(n(0),n(248)),o=n(249),l=n(108),p=n(32),b=n(75),j=n(12),m=n(6),d=p.a.div(s||(s=Object(c.a)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, .2);\n  border-radius: 4px;\n  padding: 20px;\n"]))),u=p.a.h1(t||(t=Object(c.a)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]))),h={labelCol:{span:6},wrapperCol:{span:18}},x={wrapperCol:{offset:6,span:18}};a.default=function(){var e=Object(b.a)().AuthStore,a=Object(j.f)();return Object(m.jsxs)(d,{children:[Object(m.jsx)(u,{children:"\u767b\u5f55"}),Object(m.jsxs)(i.a,Object(r.a)(Object(r.a)({},h),{},{name:"basic",onFinish:function(n){e.setUsername(n.username),e.setPassword(n.password),e.login().then((function(){console.log("\u767b\u5f55\u6210\u529f\uff0c\u8df3\u8f6c\u5230\u9996\u9875"),a.push("/")})).catch((function(){console.log("\u767b\u5f55\u5931\u8d25")}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(m.jsx)(i.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,a){return/\W/.test(a)?Promise.reject("\u7528\u6237\u540d\u53ea\u80fd\u4e3a\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf"):a.length<4||a.length>10?Promise.reject("\u7528\u6237\u540d\u957f\u5ea6\u4e3a4-10\u4e2a\u5b57\u7b26"):Promise.resolve()}}],children:Object(m.jsx)(o.a,{})}),Object(m.jsx)(i.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u591a10\u4e2a\u5b57\u7b26"}],children:Object(m.jsx)(o.a.Password,{})}),Object(m.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},x),{},{children:Object(m.jsx)(l.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})}))]}))]})}}}]);
//# sourceMappingURL=10.0514e340.chunk.js.map