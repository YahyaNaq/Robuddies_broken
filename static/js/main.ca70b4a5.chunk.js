(this.webpackJsonprobuddies=this.webpackJsonprobuddies||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(12),n(2)),o=n(3),h=n(5),l=n(4),u=n(0),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(c,"?set=set3"),alt:"Robo",width:"250",height:"250"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots.map((function(e,t){return Object(u.jsx)(d,{name:e.name,id:e.id,email:e.email},t)}));return Object(u.jsx)("div",{children:t})},j=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={Error:!1},c}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){return this.setState({Error:!0})}},{key:"render",value:function(){return this.state.Error?Object(u.jsx)("h2",{className:"light-green",children:"Sorry, an error occured!"}):this.props.children}}]),n}(c.Component),g=function(e){var t=e.SearchChange;e.searchvalue;return Object(u.jsx)("div",{className:"pa3",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue br2",type:"search",placeholder:"Search Robos by name",onChange:t})})},f=function(e){var t=e.SearchChange1;e.searchvalue1;return Object(u.jsx)("div",{className:"pa3",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue br2",type:"search",placeholder:"Search Robos by email",onChange:t})})},m=(n(14),function(e){return Object(u.jsx)("div",{className:"pa1",style:{overflowY:"scroll",border:"1px solid #00ffae",height:"500px"},children:e.children})}),v=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).Scrollfunc=function(){document.documentElement.scrollTop>50&&document.getElementById("robuddies").classList.add("slideUp")},e.Onsearchchange=function(t){e.setState({searchvalue:t.target.value})},e.Onsearchchange1=function(t){e.setState({searchvalue1:t.target.value})},e.state={robots:[],searchvalue:"",searchvalue1:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){var n=t.name.toLowerCase(),c=t.email.toLowerCase();return n.includes(e.state.searchvalue.toLowerCase())&&c.includes(e.state.searchvalue1.toLowerCase())?t:null}));return this.state.robots.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"sega f1",id:"robuddies",children:"Robuddies"}),Object(u.jsxs)("div",{className:"flex justify-center",children:[Object(u.jsx)(g,{SearchChange:this.Onsearchchange}),Object(u.jsx)(f,{SearchChange1:this.Onsearchchange1})]}),Object(u.jsx)(m,{children:Object(u.jsx)(j,{children:Object(u.jsx)(b,{robots:t})})})]}):Object(u.jsx)("h1",{className:"sega f1 blink_me tc",children:"Loading..."})}}]),n}(c.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(16);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.ca70b4a5.chunk.js.map