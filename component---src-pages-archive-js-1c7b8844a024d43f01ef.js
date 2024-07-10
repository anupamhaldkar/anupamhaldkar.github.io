"use strict";(self.webpackChunkv4=self.webpackChunkv4||[]).push([[527],{5790:function(e,t,l){l.r(t);var n,a,r,o,i=l(1880),c=l(7294),m=l(4593),s=l(8135),d=l(448),p=l(2448),h=l(2140),f=l(2788),u=l(1428);const{colors:E,fonts:g,fontSizes:b}=u.theme,x=(0,f.default)(u.or).withConfig({displayName:"archive__StyledMainContainer",componentId:"sc-2cxdc9-0"})([""]),k=f.default.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-2cxdc9-1"})(["margin:100px -20px;",";"],u.BC.tablet(n||(n=(0,i.Z)(["\n    margin: 100px -10px;\n  "])))),y=f.default.table.withConfig({displayName:"archive__StyledTable",componentId:"sc-2cxdc9-2"})(["width:100%;border-collapse:collapse;.hide-on-mobile{",";}tbody tr{transition:",";&:hover,&:focus{background-color:",";}}th,td{cursor:default;line-height:1.5;padding:10px 20px;",";}th{text-align:left;}td{&.year{width:10%;",";}&.title{padding-top:15px;color:",";font-size:",";font-weight:700;}&.company{width:15%;padding-top:15px;font-size:",";}&.tech{font-size:",";font-family:",";.separator{margin:0 5px;}span{display:inline-block;}}&.links{span{display:flex;align-items:center;a{",";}a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}"],u.BC.tablet(a||(a=(0,i.Z)(["\n      display: none;\n    "]))),u.theme.transition,E.lightNavy,u.BC.tablet(r||(r=(0,i.Z)(["\n      padding: 10px;\n    "]))),u.BC.tablet(o||(o=(0,i.Z)(["\n        font-size: ",";\n      "])),b.sm),E.lightestSlate,b.xl,b.lg,b.xs,g.SFMono,u.tA.flexCenter);t.default=e=>{let{location:t,data:l}=e;const n=l.allMarkdownRemark.edges,a=(0,c.useRef)(null),r=(0,c.useRef)(null),o=(0,c.useRef)([]);return(0,c.useEffect)((()=>{s.Z.reveal(a.current,(0,d.srConfig)()),s.Z.reveal(r.current,(0,d.srConfig)()),o.current.forEach(((e,t)=>s.Z.reveal(e,(0,d.srConfig)(10*t))))}),[]),c.createElement(p.Ar,{location:t},c.createElement(m.q,null,c.createElement("title",null,"Archive | "),c.createElement("link",{rel:"canonical",href:""})),c.createElement(x,null,c.createElement("header",{ref:a},c.createElement("h1",{className:"big-title"},"Archive"),c.createElement("p",{className:"subtitle"},"A big list of things I’ve worked on")),c.createElement(k,{ref:r},c.createElement(y,null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Year"),c.createElement("th",null,"Title"),c.createElement("th",{className:"hide-on-mobile"},"Made at"),c.createElement("th",{className:"hide-on-mobile"},"Built with"),c.createElement("th",null,"Link"))),c.createElement("tbody",null,n.length>0&&n.map(((e,t)=>{let{node:l}=e;const{date:n,github:a,external:r,ios:i,android:m,title:s,tech:d,company:p}=l.frontmatter;return c.createElement("tr",{key:t,ref:e=>o.current[t]=e},c.createElement("td",{className:"overline year"},""+new Date(n).getFullYear()),c.createElement("td",{className:"title"},s),c.createElement("td",{className:"company hide-on-mobile"},p?c.createElement("span",null,p):c.createElement("span",null,"—")),c.createElement("td",{className:"tech hide-on-mobile"},d.length>0&&d.map(((e,t)=>c.createElement("span",{key:t},e,"",t!==d.length-1&&c.createElement("span",{className:"separator"},"·"))))),c.createElement("td",{className:"links"},c.createElement("span",null,r&&c.createElement("a",{href:r,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},c.createElement(h.SK,{name:"External"})),a&&c.createElement("a",{href:a,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"GitHub Link"},c.createElement(h.SK,{name:"GitHub"})),i&&c.createElement("a",{href:i,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Apple App Store Link"},c.createElement(h.SK,{name:"AppStore"})),m&&c.createElement("a",{href:m,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Google Play Store Link"},c.createElement(h.SK,{name:"PlayStore"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-1c7b8844a024d43f01ef.js.map