(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(2),n=s.n(a),i=s(22),r=s.n(i),l=(s(32),s(9)),j=s(10),o=s(12),d=s(11),h=s(23),b=s.n(h),m=(s(33),s(24)),u=s(26),O=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.resumedownload,t=this.props.data.github,s=this.props.data.linkedin,a=this.props.data.name,n=this.props.data.description;return Object(c.jsxs)("header",{id:"home",children:[Object(c.jsx)(m.a,{num:1,type:"polygon",bg:!0}),Object(c.jsx)("nav",{id:"nav-wrap",children:Object(c.jsxs)("ul",{id:"nav",className:"nav",children:[Object(c.jsx)("li",{className:"current",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#home",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Experience"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#courses",children:"Projects"})})]})}),Object(c.jsx)("div",{className:"row banner",children:Object(c.jsxs)("div",{className:"banner-text",children:[Object(c.jsx)("h1",{className:"responsive-headline",children:Object(c.jsx)(u.a,{steps:["Hello!",500,"This is",500,a,500],loop:1,wrapper:"p"})}),Object(c.jsx)("h3",{children:n}),Object(c.jsx)("hr",{}),Object(c.jsxs)("ul",{className:"social",children:[Object(c.jsx)("a",{href:t,className:"button btn github-btn",children:"Github"}),Object(c.jsx)("a",{href:s,className:"button btn linkedin-btn",children:"LinkedIn"}),Object(c.jsx)("a",{href:e,className:"button btn project-btn",children:"Resume"})]})]})}),Object(c.jsx)("p",{className:"scrolldown",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#resume",children:Object(c.jsx)("i",{className:"icon-down-open"})})})]})}}]),s}(a.Component),p=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"twelve columns",children:Object(c.jsx)("ul",{className:"copyright",children:Object(c.jsxs)("li",{children:["Design by ",Object(c.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})})}),Object(c.jsx)("div",{id:"go-top",children:Object(c.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(c.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),x=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"getColor",value:function(e){return"backend"===e?"#006a6e":"frontend"===e?"#5ca08e":"#34495e"}},{key:"render",value:function(){var e=this;if(this.props.data)var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.school}),Object(c.jsxs)("p",{className:"info",children:[e.degree," ",Object(c.jsx)("span",{children:"\u2022"}),Object(c.jsx)("em",{className:"date",children:e.graduated})]}),Object(c.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){return Object(c.jsxs)("div",{className:"work",children:[Object(c.jsx)("a",{href:e.website,children:Object(c.jsx)("h3",{children:e.company})}),Object(c.jsxs)("p",{className:"info",children:[e.title,Object(c.jsx)("span",{children:"\u2022"})," ",Object(c.jsx)("em",{className:"date",children:e.years})]}),Object(c.jsx)("p",{children:e.description})]},e.company)})),n=this.props.data.skills.map((function(t){var s="bar-expand "+t.name.toLowerCase();return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{width:t.level,backgroundColor:e.getColor(t.type)},className:s}),Object(c.jsx)("em",{children:t.name})]},t.name)}));return Object(c.jsxs)("section",{id:"resume",children:[Object(c.jsxs)("div",{className:"row education",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Education"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:Object(c.jsx)("div",{className:"row item",children:Object(c.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(c.jsxs)("div",{className:"row work",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Work"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:a})]}),Object(c.jsxs)("div",{className:"row skill",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Skills"})})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("div",{className:"bars",children:Object(c.jsx)("ul",{className:"skills",children:n})})]})]})]})}}]),s}(a.Component),v=s(4),f=s(16),N=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="../personal/images/"+e.image,s="/personal/"+e.title.slice(0,6);return Object(c.jsx)(v.a,{children:Object(c.jsx)("div",{className:"columns portfolio-item",children:Object(c.jsx)("div",{className:"item-wrap",children:Object(c.jsxs)(f.b,{to:s,children:[Object(c.jsx)("img",{alt:e.title,src:t}),Object(c.jsx)("div",{className:"overlay",children:Object(c.jsx)("div",{className:"portfolio-item-meta",children:Object(c.jsx)("h5",{children:e.title})})})]})})},e.title)},s)}));return Object(c.jsx)("section",{id:"courses",children:Object(c.jsx)("div",{className:"row row1",children:Object(c.jsxs)("div",{className:"twelve columns collapsed",children:[Object(c.jsx)("h1",{children:"Check Out Some of My Projects."}),Object(c.jsx)("div",{id:"courses-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),w=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.map((function(e){var t=e.image?"images/"+e.image:null;return Object(c.jsx)("div",{className:"columns2 portfolio-item item-details",children:Object(c.jsxs)("div",{className:"item-wrap",children:[Object(c.jsxs)("div",{className:"portfolio-item-meta2",children:[Object(c.jsx)("h5",{children:e.title}),Object(c.jsx)("p",{className:"portfolio-description",children:e.description})]}),t?Object(c.jsx)("img",{alt:e.title,src:t}):null]})},e.title)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{id:"back-wrap",children:Object(c.jsx)("ul",{id:"back",className:"nav",children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/personal/#courses",children:"Back"})})})}),Object(c.jsxs)("section",{id:"portfolio",children:[Object(c.jsx)("h1",{children:this.props.name}),Object(c.jsx)("h3",{children:this.props.info}),Object(c.jsx)("div",{className:"row row2",children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{id:"portfolio-wrapper",children:e})})})]})]})}}]),s}(a.Component),g=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).state={resumeData:{}},c}return Object(j.a)(s,[{key:"getResumeData",value:function(){b.a.ajax({url:"../personal/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){if(this.state.resumeData.courses)var e=this.state.resumeData.courses.projects.map((function(e){var t="/personal/"+e.title.slice(0,6);return Object(c.jsx)(v.a,{path:t,component:function(t){return Object(c.jsx)(w,{data:e.work,name:e.title,info:e.category})}},t)}));return Object(c.jsx)(f.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(v.a,{exact:!0,path:"/personal",children:[Object(c.jsx)(O,{data:this.state.resumeData.main}),Object(c.jsx)(x,{data:this.state.resumeData.resume}),Object(c.jsx)(N,{data:this.state.resumeData.courses}),Object(c.jsx)(p,{data:this.state.resumeData.main})]}),e]})})}}]),s}(a.Component),k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.c893a313.chunk.js.map