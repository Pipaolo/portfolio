(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/app.3725686a.svg"},39:function(e,t,a){e.exports=a.p+"static/media/code.e4c25de4.svg"},40:function(e,t,a){e.exports=a.p+"static/media/gear.c21778ce.svg"},55:function(e,t,a){e.exports=a(92)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},72:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/picture.bd3b0604.jpg"},79:function(e,t,a){},81:function(e,t,a){var n={"./app.svg":38,"./code.svg":39,"./gear.svg":40};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=81},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){var n={"./app.svg":38,"./ccfii.jpg":85,"./code.svg":39,"./gear.svg":40,"./reclip.png":86,"./tracker.png":87,"./work_immersion.png":88};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=84},85:function(e,t,a){e.exports=a.p+"static/media/ccfii.62d7f583.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/reclip.5af5c688.png"},87:function(e,t,a){e.exports=a.p+"static/media/tracker.5d46e3b5.png"},88:function(e,t,a){e.exports=a.p+"static/media/work_immersion.cba05d48.png"},89:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),c=(a(60),a(5)),s=a(6),l=a(9),m=a(8),u=(a(61),a(62),a(10)),d=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).convertTextToArr=function(e){var t=[];for(var a in e)t.push(e[a]);return t},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,className:"hero-bg"},r.a.createElement("div",{className:"hero-overlay"},r.a.createElement("div",{className:"hero-wrapper"},r.a.createElement("div",{id:"wavetext",className:"hero-title"},this.convertTextToArr("HELLO.").map((function(e){return" "===e?r.a.createElement("span",null,"\xa0"):r.a.createElement("span",null,e)}))),r.a.createElement("p",null,"I build high-quality mobile applications."),r.a.createElement("button",{onClick:function(){u.scroller.scrollTo("about-container",{duration:1e3,delay:100,smooth:!0})}},"About Me"))))}}]),a}(n.Component),p=(a(72),a(96)),v=a(42),g=a(95),h=a(53),f=a(20),E=a(23),b=a(32),k=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).pages=["Home","About","Skills","Works","Contact"],e.state={isOpened:!1,isPinned:!1,currentPage:""},e.onTogglePressed=function(){var t=e.state.isOpened;e.setState({isOpened:!t})},e.onNavigationPressed=function(t){"home"===t?u.scroller.scrollTo("landing-container",{smooth:!0,delay:100,duration:300}):u.scroller.scrollTo("".concat(t,"-container"),{duration:1e3,delay:100,smooth:!0}),e.setState({isOpened:!1})},e.highlightNav=function(t){e.state.currentPage!==t&&e.setState({currentPage:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){var t,a,n,r,o,i,c,s,l=window.pageYOffset+56,m=document.getElementById("landing-container"),u=null!==(t=null===(a=document.getElementById("about-container"))||void 0===a?void 0:a.offsetTop)&&void 0!==t?t:0,d=null!==(n=null===(r=document.getElementById("skills-container"))||void 0===r?void 0:r.offsetTop)&&void 0!==n?n:0,p=null!==(o=null===(i=document.getElementById("works-container"))||void 0===i?void 0:i.offsetTop)&&void 0!==o?o:0,v=null!==(c=null===(s=document.getElementById("contact-container"))||void 0===s?void 0:s.offsetTop)&&void 0!==c?c:0;b.isMobile||e.setState({isPinned:l>m.clientHeight+150,isOpened:!1}),l>u&&e.highlightNav("about"),l>d&&e.highlightNav("skills"),l>p&&e.highlightNav("works"),l>v&&e.highlightNav("contact"),56===l&&e.highlightNav("home"),e.setState({isOpened:!1})}))}},{key:"render",value:function(){var e=this,t=this.state.isPinned;return r.a.createElement("div",null,r.a.createElement(p.a,{className:"nav-bar ".concat(t||b.isMobile?"fixed animate__animated animate__slideInDown":""),expand:"lg",onSelect:function(t,a){e.onNavigationPressed(t)},variant:"dark",expanded:this.state.isOpened},r.a.createElement(v.a,{className:"logo"},"PaoTolentino"),r.a.createElement(f.a,{onClick:this.onTogglePressed}),r.a.createElement(E.a,{id:"basic-navbar-nav"},r.a.createElement(g.a,null,this.pages.map((function(t){return r.a.createElement(h.a,{key:t,eventKey:t.toLowerCase(),active:t.toLowerCase()===e.state.currentPage},t)}))))))}}]),a}(n.Component),w=(a(77),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(u.Element,{id:this.props.id,className:"about my-auto",name:"about"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:a(78),alt:""})),r.a.createElement("h4",null,"I am a mobile and web app developer, that aims to provide high-quality, fast, and responsive applications."))}}]),n}(n.Component)),N=(a(79),a(54));function O(e){var t=e.image,n=e.text,o=e.skills;return r.a.createElement("li",{className:"skill-card","data-aos":"zoom-in"},r.a.createElement(N.a,{src:a(81)("./".concat(t,".svg"))}),r.a.createElement("div",{className:"skill-card-content"},r.a.createElement("div",{className:"skill-title"},n),r.a.createElement("div",{className:"skill-wrapper"},o.map((function(e){return r.a.createElement("span",{key:e,className:"skill-name"},e)})))))}var y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.Element,{name:"skills",id:this.props.id,className:"skills"},r.a.createElement("div",{className:"skill-watermark"},"My Skills"),r.a.createElement("div",{className:"skills-header"},"My Skills"),r.a.createElement("div",{className:"skill-card-wrapper"},r.a.createElement(O,{image:"code",text:"Web Development",skills:["HTML","CSS3","JavaScript","ReactJS","Redux"]}),r.a.createElement(O,{image:"gear",text:"Backend Framework",skills:["Go","Firebase","MongoDB","Postgres SQL","REST API"]}),r.a.createElement(O,{image:"app",text:"App Development",skills:["Dart","Kotlin","Java","Flutter"]})))}}]),a}(n.Component);a(82),a(83);function j(e){var t=e.description,n=e.image;return r.a.createElement("div",{className:"works-card","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom"},r.a.createElement("div",{className:"works-card-image-wrapper"},r.a.createElement("img",{src:a(84)("./".concat(n)),alt:""})),r.a.createElement("div",{className:"works-card-content"},t))}var S=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.Element,{id:this.props.id,name:"works",className:"works"},r.a.createElement("div",{className:"works-header-wrapper"},r.a.createElement("div",{className:"works-header"},"Works"),r.a.createElement("div",{className:"works-wrapper"})),r.a.createElement("div",{className:"works-cards-wrapper"},r.a.createElement(j,{image:"ccfii.jpg",description:"A registration app that uses the Google Sheets as a database."}),r.a.createElement(j,{image:"reclip.png",description:"A Multimedia platform that showcases the works of CIIT Senior Highschool Students."}),r.a.createElement(j,{image:"tracker.png",description:"A Realtime Covid Tracker in the Philippines."}),r.a.createElement(j,{image:"work_immersion.png",description:"A realtime coaching tracker for students and teachers for scheduling and keeping track of coaching sessions."})))}}]),a}(n.Component),C=(a(89),a(50)),x=a(19),T=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),M=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e){e.preventDefault();var t=e.currentTarget,a=t.name,r=t.value,o=n.state.errors;switch(a){case"name":o.name=r.length<5?"Name must be 5 characters long!":"";break;case"email":o.email=T.test(r)?"":"Email is not valid!"}n.setState(Object(C.a)({errors:o},a,r))},n.onChangeMessage=function(e){var t=e.currentTarget.value,a=n.state.errors;a.message=0===t.length?"Message Cannot be Empty!":"",n.setState({email:"",name:"",status:"",errors:a,message:t})},n.validateForm=function(){var e=!0,t=n.state.errors,a=n.state,r=a.name,o=a.email,i=a.message;return void 0===r&&(t.name="Name cannot be empty!"),void 0===o&&(t.email="Email cannot be empty!"),void 0===i&&(t.message="Message cannot be empty!"),n.setState({errors:t}),Object.values(t).forEach((function(t){return t.length>0&&(e=!1)})),e},n.submitForm=n.submitForm.bind(Object(x.a)(n)),n.state={errors:{name:"",email:"",message:""},status:""},n}return Object(s.a)(a,[{key:"submitForm",value:function(e){var t=this;if(e.preventDefault(),this.validateForm()){console.log("Valid Form!");var a=e.currentTarget,n=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},r.send(n)}}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.errors;return r.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/xjvawajr",method:"POST",className:"contact-form","data-aos":"fade-right"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{onChange:this.onChange,type:"text",name:"name"}),a.name.length>0&&r.a.createElement("span",{className:"error"},a.name),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{onChange:this.onChange,type:"text",name:"email"})," ",a.email.length>0&&r.a.createElement("span",{className:"error"},a.email),r.a.createElement("label",null,"Message:"),r.a.createElement("textarea",{onChange:this.onChangeMessage,name:"message",rows:5,className:"message"}),a.message.length>0&&r.a.createElement("span",{className:"error"},a.message),"SUCCESS"===t?r.a.createElement("p",{className:"status-text"},"Thank you for contacting me!"):r.a.createElement("button",null,"SEND"),"ERROR"===t&&r.a.createElement("p",null,"Ooops! There was an error."))}}]),a}(n.Component),P=a(52),D=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.Element,{id:this.props.id,name:"contact",className:"contact"},r.a.createElement("div",{className:"contact-header-wrapper"},r.a.createElement("div",{className:"contact-header"},"Contact")),r.a.createElement("div",{className:"contact-form-wrapper"},r.a.createElement(M,null),r.a.createElement("div",{className:"contact-info","data-aos":"fade-left"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"material-icons"},"email"),"tolentinopaolomatthew23@gmail.com"),r.a.createElement("li",null,r.a.createElement("i",{className:"material-icons"},"phone"),"+639260385084"),r.a.createElement("li",null,r.a.createElement(P.a,{className:"icon",size:"30"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/paolo-matthew-tolentino-7483661a5/"}," Paolo Matthew Tolentino"))))))}}]),a}(n.Component);a(90);function R(e){var t=e.id;return r.a.createElement("div",{id:t,className:"footer"},"\xa9",r.a.createElement("span",null,"\xa0Paolo Matthew Tolentino"))}var A=a(51),F=a.n(A),I=(a(91),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){F.a.init({delay:300,duration:600})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{id:"landing-container"}),r.a.createElement(k,null),r.a.createElement(w,{id:"about-container"}),r.a.createElement(y,{id:"skills-container"}),r.a.createElement(S,{id:"works-container"}),r.a.createElement(D,{id:"contact-container"}),r.a.createElement(R,{id:"footer-container"}))}}]),a}(n.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.6ac62686.chunk.js.map