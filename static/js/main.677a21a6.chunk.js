(this["webpackJsonpcodedby.pm"]=this["webpackJsonpcodedby.pm"]||[]).push([[0],{43:function(e,a,t){e.exports=t(85)},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(18),s=t.n(i),r=(t(48),t(49),t(50),t(51),t(10)),m=t(2),c=t(42),o=t(9),d=t(37),u=t.n(d);t(26);var g=t(8),p=t.n(g);var E=function(e){var a=e.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{animateIn:"fadeInUp",animateOut:"fadeInOut",animateOnce:!0},l.a.createElement("h2",{className:"section-title"},a)),l.a.createElement("div",{className:"spacer","data-height":"60"}))};var v=function(e){var a=e.progress,t=e.isVisible,n=a.name,i=a.value,s=a.progressColor,r=window.innerWidth;return l.a.createElement("div",{className:"skill-item"},l.a.createElement("div",{className:"skill-info clearfix"},l.a.createElement("h4",{className:"float-left mb-3 mt-0"},n),l.a.createElement("span",{className:"float-right"},i,"%")),l.a.createElement("div",{className:"progress"},r&&r>767?l.a.createElement("div",{className:"progress-bar data-background",style:t?{width:"".concat(i,"%"),background:s}:{width:0,background:s}}):l.a.createElement("div",{className:"progress-bar data-background",style:{width:"".concat(i,"%"),background:s}})))},h="Me",w="/images/memoji-hi.png",b="I am Paolo, software engineer from Amsterdam, The Netherlands. I have 10+ years experience designing, developing, testing and distributing apps for iOS and its sibling OS's.",f=[{id:1,name:"Swift",icon:"/images/skills/swift.svg",value:99,progressColor:"#E94E36"},{id:2,name:"Objective-C",icon:"/images/skills/objc.svg",value:99,progressColor:"#FFD15C"},{id:3,name:"Golang",icon:"/images/skills/gopher.svg",value:40,progressColor:"#71C7D6"},{id:4,name:"Node.js",icon:"/images/skills/nodejs-text.svg",value:45,progressColor:"#8CC84A"},{id:5,name:"Google Cloud Platform",icon:"/images/skills/gcloud.svg",value:50,progressColor:"#4285F4"},{id:6,name:"CI/CD",icon:"/images/skills/fastlane.svg",value:80,progressColor:"#8B30E1"},{id:7,name:"Ruby",icon:"/images/skills/ruby.svg",value:20,progressColor:"#E51620"},{id:8,name:"HTML/CSS",icon:"/images/skills/html-css.svg",value:44,progressColor:"#146EB0"}];var N=function(){return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement(E,{title:"About Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"text-center text-md-left"},l.a.createElement("img",{src:w,alt:h})),l.a.createElement("div",{className:"spacer d-md-none d-lg-none","data-height":"30"})),l.a.createElement("div",{className:"col-md-9 triangle-left-md triangle-top-sm"},l.a.createElement("div",{className:"rounded bg-white shadow-dark padding-30"},l.a.createElement("div",{className:"row",style:{marginRight:"0px",marginLeft:"0px"}},l.a.createElement("div",{className:"col-md-12",style:{padding:"0px"}},l.a.createElement("p",null,b)),l.a.createElement("div",{className:"row"},f.map((function(e){return l.a.createElement("div",{className:"col-6"},l.a.createElement(u.a,{once:!0,key:e.id,className:"progress-wrapper"},l.a.createElement(v,{progress:e})))}))))))),l.a.createElement("div",{className:"spacer","data-height":"70"})))};var y=[{id:1,image:"images/clients/pvh.svg",name:"PVH Europe",url:"https://www.pvh.com"},{id:2,image:"images/clients/backbase.svg",name:"Backbase",url:"https://www.backbase.com"},{id:3,image:"images/clients/funda.svg",name:"Funda",url:"https://www.funda.nl"},{id:4,image:"images/clients/dott.svg",name:"Dott",url:"https://www.ridedott.com"},{id:5,image:"images/clients/ing.svg",name:"ING Bank",url:"https://www.ing.nl"},{id:6,image:"images/clients/yolt.svg",name:"Yolt",url:"https://www.yolt.com"},{id:7,image:"images/clients/payconiq.svg",name:"Payconiq",url:"https://www.payconiq.com"},{id:8,image:"images/clients/ebuddy.svg",name:"eBuddy Messenger",url:"https://www.ebuddy.com"},{id:9,image:"images/clients/allianz.svg",name:"Allianz",url:"https://www.allianz.com"},{id:10,image:"images/clients/knab.svg",name:"Knab",url:"https://www.knab.nl"},{id:11,image:"images/clients/hymn.svg",name:"HYMN",url:"https://www.hymn.com"}];var k=function(){return l.a.createElement("div",{id:"brandlogos"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},y.map((function(e){return l.a.createElement("div",{className:"col-md-2 col-4",key:e.id},l.a.createElement("div",{className:"client-item"},l.a.createElement("div",{className:"inner"},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:e.image,alt:e.name})))))})))))},j=t(19),I=t(29),C=t(6);var O=function(){var e=Object(n.useState)({name:"",email:"",subject:"",message:""}),a=Object(C.a)(e,2),t=a[0],i=a[1],s=Object(n.useState)(!1),r=Object(C.a)(s,2),m=r[0],c=r[1],o=Object(n.useState)(""),d=Object(C.a)(o,2),u=d[0],g=d[1],v=function(e){i(Object(I.a)(Object(I.a)({},t),{},Object(j.a)({},e.currentTarget.name,e.currentTarget.value)))};return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement(E,{title:"Get in Touch"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"contact-info"},l.a.createElement(p.a,{animateIn:"fadeInUp",animateOut:"fadeInOut",animateOnce:!0},l.a.createElement("h3",null,"Let's talk about everything!")),l.a.createElement(p.a,{animateIn:"fadeInUp",animateOut:"fadeInOut",animateOnce:!0},l.a.createElement("p",null,"Don't like forms? Send me an"," ",l.a.createElement("a",{href:"mailto:paolo@codedby.pm"},"email")," instead.")))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("form",{id:"contact-form",className:"contact-form mt-6",onSubmit:function(e){if(e.preventDefault(),t.name)if(t.email)if(t.subject)if(t.message){var a=new FormData;a.append("name",t.name),a.append("email",t.email),a.append("subject",t.subject),a.append("message",t.message),fetch("https://europe-west1-codedby-pm.cloudfunctions.net/send-email",{method:"POST",body:a}).then((function(e){c(!1),g("You message has been sent!!!")})).catch((function(e){c(!0),g("Error while sending message")}))}else c(!0),g("Message is required");else c(!0),g("Subject is required");else c(!0),g("Email is required");else c(!0),g("Name is required")}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"name",id:"InputName",placeholder:"Your name",onChange:v,value:t.name}))),l.a.createElement("div",{className:"column col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",id:"InputEmail",name:"email",placeholder:"Email address",onChange:v,value:t.email}))),l.a.createElement("div",{className:"column col-md-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"InputSubject",name:"subject",placeholder:"Subject",onChange:v,value:t.subject}))),l.a.createElement("div",{className:"column col-md-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"message",id:"InputMessage",className:"form-control",rows:"5",placeholder:"Message",onChange:v,value:t.message})))),l.a.createElement("button",{type:"submit",name:"submit",id:"submit",value:"Submit",className:"btn btn-default"},"Send Message")),m&&u?l.a.createElement("div",{className:"alert alert-danger mt-4"},u):!m&&u?l.a.createElement("div",{className:"alert alert-success mt-4"},u):null))))};var S=function(e){var a=e.item,t=a.years,n=a.title,i=a.content;return l.a.createElement(p.a,{animateIn:"fadeInUp",animateOut:"fadeInOut",animateOnce:!0},l.a.createElement("div",{className:"timeline-container"},l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"time"},t),l.a.createElement("h3",{className:"title"},n),l.a.createElement("p",null,i))))},x=[{title:"Advanced Master in Embedded Systems Design",years:"2006 - 2007",content:"Compilers, microelectronics, real-time operating systems"},{title:"Master in Electronic Engineering",years:"2002 - 2005",content:"Embedded system software, microelectronics"},{title:"Bachelor in Electronic Engineering",years:"1998 - 2002",content:"Analog and digital electronics, software engineering"}],M=[{title:"HYMN",years:"2021"},{title:"Backbase",years:"2020"},{title:"Funda",years:"2019"},{title:"Dott",years:"2018 - 2019"},{title:"Payconiq",years:"2017 - 2018"}];var P=function(){return l.a.createElement("section",{id:"experience"},l.a.createElement("div",{className:"container"},l.a.createElement(E,{title:"Education and recent projects"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden"},x.map((function(e){return l.a.createElement(S,{item:e})})),l.a.createElement("span",{className:"line"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"spacer d-md-none d-lg-none","data-height":"30"}),l.a.createElement("div",{className:"timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden"},M.map((function(e){return l.a.createElement(S,{item:e})})),l.a.createElement("span",{className:"line"})),l.a.createElement("div",{class:"footer"},"Check my",l.a.createElement("a",{href:"https://www.linkedin.com/in/codedbypm/"}," LinkedIn "),"profile for a complete list of all my projects.")))))},D=t(39),T=t.n(D);var A=function(e){var a=e.info,t=a.url,n=a.type;return l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:t},l.a.createElement("i",{className:"fab fa-".concat(n)})))};var B=function(e){var a=e.position,t=(a.x,a.y,e.elementDimensions),n=(t.height,t.width,{name:"Paolo Moroni",avatar:"/images/memoji-mac.png",avatarWidth:"208",socialIcons:[{type:"linkedin",url:"https://www.linkedin.com/in/codedbypm/"},{type:"github",url:"https://github.com/codedbypm"},{type:"twitter",url:"https://twitter.com/paoloNL"}],callToAction:"Get in touch!"});return l.a.createElement("section",{id:"home",className:e.light?"home d-flex align-items-center light":"home d-flex align-items-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"intro"},l.a.createElement("img",{src:n.avatar,width:n.avatarWidth,alt:"Bolby",className:"mb-4"}),l.a.createElement("h1",{className:"mb-2 mt-0"},n.name),l.a.createElement("p",null,"I'm"," ",l.a.createElement(T.a,{strings:["a <strong>software engineer</strong>...","an <strong>experienced</strong> iOS developer...","a <strong>CI/CD expert</strong>...","a <strong>Google Cloud</strong> enthusiast..."],typeSpeed:80,backSpeed:70,loop:!0})),l.a.createElement("ul",{className:"social-icons light list-inline mb-0 mt-4"},n.socialIcons.map((function(e){return l.a.createElement(A,{info:e})}))),l.a.createElement("div",{className:"mt-4"},l.a.createElement(o.Link,{className:"btn btn-default",to:"section-contact",spy:!0,smooth:!0,duration:500},n.callToAction))),l.a.createElement("div",{className:"scroll-down"},l.a.createElement(o.Link,{to:"section-about",spy:!0,smooth:!0,duration:500,className:"mouse-wrapper"},l.a.createElement("span",null,"Scroll Down"),l.a.createElement("span",{className:"mouse"},l.a.createElement("span",{className:"wheel"}))))))};var H=t(40),L=t.n(H);var F=function(e){var a=e.slider,t=a.avatar,n=a.userName,i=a.subtitle,s=a.review;return l.a.createElement("div",{className:"testimonial-item text-center mx-auto"},l.a.createElement("div",{className:"thumb mb-3 mx-auto"},l.a.createElement("img",{src:t,alt:"customer-name"})),l.a.createElement("h4",{className:"mt-3 mb-0"},n),l.a.createElement("span",{className:"subtitle"},i),l.a.createElement("div",{className:"bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4"},l.a.createElement("p",{className:"mb-0"},s)))},q=[{id:1,avatar:"images/testimonials/1572779888805.jpeg",userName:"Nandini Chauhan",subtitle:"IT Lead at FINN by ING",review:"It was great to work with Paolo. He is a team player, friendly and approachable with all his colleagues. He has right knowledge, experience and attitude on his side"},{id:2,avatar:"images/testimonials/1517764321614.jpeg",userName:"Javier Saiz Hernansanz",subtitle:"Mobile developer at Holvi",review:"If you need a great techie, passionate developing new projects and amazing colleague bringing support and positivism, you are in the correct place... Paolo is here!"},{id:3,avatar:"images/testimonials/1516256239328.jpeg",userName:"Niels Verdonk",subtitle:"Agile Coach & Certified Scrum Trainer at agile42",review:"It has always been a pleasure to work with Paolo. He is an out going type, but he is not someone who needs to be in the center of the attention. Paolo comes up with creative solutions and thinks out of the box. Paolo doesn't need much guidance and works diligently with attention to detail. He is someone who likes to work in collaboration with others and is a great team player, focussed and result oriented."},{id:4,avatar:"images/testimonials/1516885378215.jpeg",userName:"Adriana Ormaetxea",subtitle:"iOS Engineer at Nomasystems S.L.",review:"Paolo is very organised and efficient developer. With extensive knowledge of iOS development and the Objective-C language. It was a pleasure working with him and learning from him."}];var z=function(){return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"container"},l.a.createElement(E,{title:"Clients & Review"}),l.a.createElement(L.a,Object.assign({},{dots:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},{className:"testimonials-wrapper"}),q.map((function(e){return l.a.createElement(F,{key:e.id,slider:e})})))))};t(41);var G=function(){return document.body.classList.add("dark"),l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{className:"content"},l.a.createElement(o.Element,{name:"section-home"},l.a.createElement(c.a,null,l.a.createElement(B,null))),l.a.createElement(o.Element,{name:"section-about"},l.a.createElement(N,null)),l.a.createElement(o.Element,{name:"section-experiences"},l.a.createElement(P,null)),l.a.createElement(o.Element,{name:"section-testimoninal"},l.a.createElement(z,null)),l.a.createElement(o.Element,{name:"section-brandlogos"},l.a.createElement(k,null)),l.a.createElement(o.Element,{name:"section-contact"},l.a.createElement(O,null)),l.a.createElement("div",{className:"spacer","data-height":"96"})))},W=(t(84),t(30));var U=function(){return Object(n.useEffect)((function(){W.a.initialize("UA-89931383-1"),W.a.pageview(window.location.pathname)})),l.a.createElement(r.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0},l.a.createElement(G,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.677a21a6.chunk.js.map