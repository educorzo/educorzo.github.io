(function(t){function e(e){for(var s,i,c=e[0],u=e[1],o=e[2],m=0,f=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,o||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},a={app:0},n=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var l=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"16e0":function(t,e,r){"use strict";r("e0da")},"173c":function(t,e,r){},"1f5c":function(t,e,r){},2146:function(t,e,r){},"32f1":function(t,e,r){t.exports=r.p+"img/Search.e3ca1a3b.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a="https://accounts.spotify.com/authorize?response_type=token",n="https://educorzo.github.io/moogle.html",i="0088361d36ae4c6c8e4efe3b5e6b89d7",c={loggingSpotifyUri:a+"&redirect_uri="+n+"&client_id="+i,spotifyApiUrl:"https://api.spotify.com/v1/"},u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"header"},[r("h1",{staticClass:"brand"},[t._v("Moogle!")]),r("Searcher",{on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}})],1),r("div",{attrs:{id:"main-body"}},[0!==Object.keys(t.searchResults).length&&void 0===t.searchResults.error?r("Results",{attrs:{results:t.searchResults}}):t._e()],1),0===Object.keys(t.searchResults).length||void 0!==t.searchResults.error?r("div",{attrs:{id:"ads-body"}},[void 0!==t.searchResults.error?r("ErrorMessage",{attrs:{error:t.searchResults.error}}):t._e()],1):t._e()])},o=[],l=r("1da1"),m=(r("96cf"),r("841c"),r("ac1f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"searcher"}},[r("input",t._g({staticClass:"input border",attrs:{type:"text",placeholder:"Search some music",searchTerm:t.searchTerm,"aria-labelledby":"searchlabel"}},t.listeners)),r("label",{staticClass:"invisible",attrs:{id:"searchlabel",for:"input"}},[t._v("Search some music")]),t._m(0)])}),f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon-frame border"},[s("img",{attrs:{src:r("32f1"),alt:"search icon"}})])}],p=r("5530"),h={name:"Searcher",props:{searchTerm:{type:String,default:""}},computed:{listeners:function(){var t=this;return Object(p["a"])(Object(p["a"])({},this.$listeners),{},{input:function(e){return t.$emit("input",e.target.value)}})}}},b=h,d=(r("98a0"),r("2877")),v=Object(d["a"])(b,m,f,!1,null,"9b1fb4f2",null),_=v.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.hasResults()?r("div",{staticClass:"results"},[t.results["artists"]?r("Artists",{attrs:{artists:t.results["artists"].items}}):t._e(),t.results["albums"]?r("Albums",{attrs:{albums:t.results["albums"].items}}):t._e(),t.results["tracks"]?r("Tracks",{attrs:{tracks:t.results["tracks"].items}}):t._e()],1):t._e(),t.hasResults()?t._e():r("div",{staticClass:"no-results"},[r("h2",[t._v("No results were found.")])])])},y=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"collection albums"},t._l(t.albums,(function(t){return r("li",{key:t.id},[r("Album",{attrs:{album:t}})],1)})),0)},O=[],w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("h4",{staticClass:"title overflow",attrs:{title:t.album.artists[0].name}},[t._v(t._s(t.album.artists[0].name))]),r("Picture",{attrs:{images:t.album.images,name:t.album.name+" album cover"}}),r("h4",{staticClass:"information overflow",attrs:{title:t.album.name}},[t._v(t._s(t.album.name))]),r("h5",{staticClass:"information"},[t._v(t._s(t.album.release_date.substring(0,4)))])],1)},j=[],x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[""!==t.getBestImage()?r("img",{staticClass:"picture",attrs:{src:t.getBestImage(),alt:t.name}}):t._e(),""===t.getBestImage()?r("svg",{staticClass:"emptyPicture",attrs:{title:"Image unavailable",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{x:"0",y:"0"}})]):t._e()])},C=[],R=(r("159b"),function(t,e){if(0===t.length)return"";var r=t[0].height,s=t[0].url;return t.forEach((function(t){(r>=t.height&&e<=t.height||r<t.height)&&(r=t.height,s=t.url)})),s}),A={name:"Picture",props:{images:Array,name:String},methods:{getBestImage:function(){return R(this.images,150)}}},T=A,E=(r("84a4"),Object(d["a"])(T,x,C,!1,null,"d5afa7b8",null)),S=E.exports,P={name:"Album",components:{Picture:S},props:{album:Object}},$=P,U=(r("581a"),Object(d["a"])($,w,j,!1,null,"5c6ed8d3",null)),M=U.exports,I={components:{Album:M},name:"Albums",props:{albums:Array}},B=I,z=(r("a82b"),Object(d["a"])(B,k,O,!1,null,"93b7ec1a",null)),J=z.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"collection artists"},t._l(t.artists,(function(t){return r("li",{key:t.id},[r("Artist",{attrs:{artist:t}})],1)})),0)},D=[],L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("h4",{staticClass:"title overflow",attrs:{title:t.artist.name}},[t._v(t._s(t.artist.name))]),r("Picture",{attrs:{images:t.artist.images,name:t.artist.name+" members photo"}}),r("h5",{staticClass:"information"},[t._v("Popularity: "+t._s(t.artist.popularity))])],1)},N=[],Y={name:"Artist",components:{Picture:S},props:{artist:Object}},F=Y,G=(r("bc6f"),Object(d["a"])(F,L,N,!1,null,"8c6d85b2",null)),H=G.exports,K={components:{Artist:H},name:"Artists",props:{artists:Array}},Q=K,V=(r("a704"),Object(d["a"])(Q,q,D,!1,null,"077786d2",null)),W=V.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"collection tracks"},t._l(t.tracks,(function(t){return r("li",{key:t.id},[r("Track",{attrs:{track:t}})],1)})),0)},Z=[],tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("h4",{staticClass:"title overflow",attrs:{title:t.track.name}},[t._v(t._s(t.track.name))]),r("Picture",{attrs:{images:t.track.album.images,name:t.track.name+" track picture"}}),r("h5",{staticClass:"information overflow",attrs:{title:t.track.artists[0].name}},[t._v(t._s(t.track.artists[0].name))]),r("h5",{staticClass:"information overflow",attrs:{title:"Runtime:"+t.formatRuntime()}},[t._v("Runtime: "+t._s(t.formatRuntime()))])],1)},et=[],rt=(r("fb6a"),{name:"Track",components:{Picture:S},props:{track:Object},methods:{formatRuntime:function(){return new Date(this.track.duration_ms).toISOString().slice(11,-5)}}}),st=rt,at=(r("dcfe"),Object(d["a"])(st,tt,et,!1,null,"1d9a8078",null)),nt=at.exports,it={components:{Track:nt},name:"tracks",props:{tracks:Array}},ct=it,ut=(r("16e0"),Object(d["a"])(ct,X,Z,!1,null,"2431b976",null)),ot=ut.exports,lt={components:{Albums:J,Artists:W,Tracks:ot},name:"Results",props:{results:Object},methods:{hasResults:function(){return this.results.albums.total+this.results.artists.total+this.results.tracks.total!==0}}},mt=lt,ft=(r("c4bb"),Object(d["a"])(mt,g,y,!1,null,"7964cc08",null)),pt=ft.exports,ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return void 0!==t.error?r("div",[401===t.error.status?r("h2",[t._v(" Your session has expired. Click "),r("a",{attrs:{href:"/"}},[t._v("here")])]):t._e(),401!==t.error.status?r("h2",[t._v(' Ups, there were an error: "'+t._s(t.error.message)+'". ')]):t._e()]):t._e()},bt=[],dt={name:"ErrorMessage",props:{error:{}}},vt=dt,_t=Object(d["a"])(vt,ht,bt,!1,null,"7973ab36",null),gt=_t.exports,yt={name:"App",components:{Searcher:_,Results:pt,ErrorMessage:gt},props:{Api:{type:Object}},data:function(){return{searchTerm:"",searchResults:{}}},methods:{search:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.Api.search(t.searchTerm);case 2:t.searchResults=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},kt=yt,Ot=(r("5c0b"),Object(d["a"])(kt,u,o,!1,null,null,null)),wt=Ot.exports,jt=r("d4ec"),xt=r("bee2"),Ct=(r("498a"),r("d3b7"),function(){function t(e,r){Object(jt["a"])(this,t),this.url=e,this.accessToken=r}return Object(xt["a"])(t,[{key:"search",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var r,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.trim(),""!==r){t.next=3;break}return t.abrupt("return",{});case 3:return s=this.accessToken.Token,a=this._buildUrl(r),t.abrupt("return",fetch(a,{headers:{Authorization:"Bearer "+s}}).then((function(t){return t.json()})).catch((function(t){return{error:{message:t.message}}})));case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"_buildUrl",value:function(t){var e=encodeURIComponent(t),r=this.url+"search?q="+e+"&type=album,artist,track";return r}}]),t}()),Rt=(r("2b3d"),r("3ca3"),r("ddb0"),function(){function t(e){Object(jt["a"])(this,t);var r=e.hash.substring(1);this.Token=new URLSearchParams(r).get("access_token")}return Object(xt["a"])(t,[{key:"isEmpty",value:function(){return null===this.Token}}]),t}());s["a"].config.productionTip=!1;var At=new Rt(window.location);At.isEmpty()?window.location.href=c.loggingSpotifyUri:new s["a"]({render:function(t){return t(wt,{props:{Api:new Ct(c.spotifyApiUrl,At)}})}}).$mount("#app")},5803:function(t,e,r){},"581a":function(t,e,r){"use strict";r("8839")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"7bb7":function(t,e,r){},8308:function(t,e,r){},"84a4":function(t,e,r){"use strict";r("5803")},8839:function(t,e,r){},"98a0":function(t,e,r){"use strict";r("173c")},"9c0c":function(t,e,r){},a1d6:function(t,e,r){},a704:function(t,e,r){"use strict";r("a1d6")},a82b:function(t,e,r){"use strict";r("8308")},bc6f:function(t,e,r){"use strict";r("1f5c")},c4bb:function(t,e,r){"use strict";r("7bb7")},dcfe:function(t,e,r){"use strict";r("2146")},e0da:function(t,e,r){}});
//# sourceMappingURL=app.f0c6caaa.js.map