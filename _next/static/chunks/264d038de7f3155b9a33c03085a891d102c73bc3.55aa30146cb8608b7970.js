(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{CqVq:function(t,e){var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&";if(t&&0!==t.length)switch(t.length){case 1:return"".concat(t[0]);case 2:return"".concat(t[0]," ").concat(e," ").concat(t[1]);default:return"".concat(t[0],", ").concat(t[1]," ").concat(e," ").concat(t[2])}},r=function(t){if(t&&"string"==typeof t)return""+t[0].toUpperCase()+t.substring(1,t.length).toLowerCase()};t.exports={getAppMetaDescription:function(t){return"Integrate the ".concat(t.name," app into Zendesk ").concat(r(t.products[0]),". ").concat(t.short_description)},getAppMetaTitle:function(t){return"".concat(t.name," App Integration with Zendesk ").concat(r(t.products[0]))},getPartnerMetaDescription:function(t){var e=t.services_offered,r=t.name,o=n(e,"or");return"".concat(o?"Looking for ".concat(o,"? "):"","Work with ").concat(r," to enhance your Zendesk experience")},getPartnerMetaTitle:function(t){var e=t.partner_types,r=t.name,o=n(e,"&");return"".concat(r," is a Zendesk ").concat(o||"partner")},getThemeMetaDescription:function(t){return t.short_description},getThemeMetaTitle:function(t){return"".concat(t.author_name," help center theme for Zendesk")}}},fV7l:function(t,e,n){"use strict";var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("1OyB"),c=n("vuIU");function s(t,e){var n;e=e||{},this._id=s._generateUUID(),this._promise=e.promise||Promise,this._frameId=e.frameId||"CrossStorageClient-"+this._id,this._origin=s._getOrigin(t),this._requests={},this._connected=!1,this._closed=!1,this._count=0,this._timeout=e.timeout||3e3,this._listener=null,this._installListener(),e.frameId&&(n=document.getElementById(e.frameId)),n&&this._poll(),n=n||this._createFrame(t),this._hub=n.contentWindow}s.frameStyle={display:"none",position:"absolute",top:"-999px",left:"-999px"},s._getOrigin=function(t){var e;return(e=document.createElement("a")).href=t,e.host||(e=window.location),(e.protocol+"//"+e.host).replace(/:80$|:443$/,"")},s._generateUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},s.prototype.onConnect=function(){var t=this;return this._connected?this._promise.resolve():this._closed?this._promise.reject(new Error("CrossStorageClient has closed")):(this._requests.connect||(this._requests.connect=[]),new this._promise((function(e,n){var r=setTimeout((function(){n(new Error("CrossStorageClient could not connect"))}),t._timeout);t._requests.connect.push((function(t){return clearTimeout(r),t?n(t):void e()}))})))},s.prototype.set=function(t,e,n){return this._request("set",{key:t,value:e,ttl:n})},s.prototype.get=function(){var t=Array.prototype.slice.call(arguments);return this._request("get",{keys:t})},s.prototype.del=function(){var t=Array.prototype.slice.call(arguments);return this._request("del",{keys:t})},s.prototype.clear=function(){return this._request("clear")},s.prototype.getKeys=function(){return this._request("getKeys")},s.prototype.close=function(){var t=document.getElementById(this._frameId);t&&t.parentNode.removeChild(t),window.removeEventListener?window.removeEventListener("message",this._listener,!1):window.detachEvent("onmessage",this._listener),this._connected=!1,this._closed=!0},s.prototype._installListener=function(){var t=this;this._listener=function(e){var n,r,o;if(!t._closed&&e.origin===t._origin)if("unavailable"!==e.data){if(!t._connected){if(t._connected=!0,!t._requests.connect)return;for(n=0;n<t._requests.connect.length;n++)t._requests.connect[n](r);delete t._requests.connect}if("ready"!==e.data){try{o=JSON.parse(e.data)}catch(a){return}o.id&&t._requests[o.id]&&t._requests[o.id](o.error,o.result)}}else{if(t._closed||t.close(),!t._requests.connect)return;for(r=new Error("Closing client. Could not access localStorage in hub."),n=0;n<t._requests.connect.length;n++)t._requests.connect[n](r)}},window.addEventListener?window.addEventListener("message",this._listener,!1):window.attachEvent("onmessage",this._listener)},s.prototype._poll=function(){var t,e;t=this,e=setInterval((function(){return t._connected?clearInterval(e):void(t._hub&&t._hub.postMessage("poll",t._origin))}),1e3)},s.prototype._createFrame=function(t){var e,n;for(n in(e=window.document.createElement("iframe")).id=this._frameId,s.frameStyle)s.frameStyle.hasOwnProperty(n)&&(e.style[n]=s.frameStyle[n]);return window.document.body.appendChild(e),e.src=t,e},s.prototype._request=function(t,e){var n,r;return this._closed?this._promise.reject(new Error("CrossStorageClient has closed")):((r=this)._count++,n={id:this._id+":"+r._count,method:t,params:e},new this._promise((function(t,e){var o,a;o=setTimeout((function(){r._requests[n.id]&&(delete r._requests[n.id],e(new Error("Timeout: could not perform "+n.method)))}),r._timeout),r._requests[n.id]=function(n,r){return clearTimeout(o),n?e(new Error(n)):void t(r)},Array.prototype.toJSON&&(a=Array.prototype.toJSON,Array.prototype.toJSON=null),r._hub.postMessage(JSON.stringify(n),r._origin),a&&(Array.prototype.toJSON=a)})))};var u=s,l=n("q7AE");function d(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p=function(){function t(e){Object(i.a)(this,t),this.storage=e,this.subdomainsCache}return Object(c.a)(t,[{key:"getInstallationURL",value:function(t,e,n,r,o){var a=r?"plan_id=".concat(r):"plan_id=-1",i="&utm_content=detail_page_install",c=o&&o.search?o.search.replace("?source=",""):"",s="&utm_source=".concat(c),u="&utm_medium=app_marketplace";if("support"===n){return"".concat(t).concat("/agent/admin/apps/install/").concat(e,"?").concat(a).concat(i).concat(s).concat(u)}if("sell"===n){return"".concat(t).concat("/sell/start?return_to=https://app.futuresimple.com/settings/apps/install/").concat(e,"?").concat(a).concat(i).concat(s).concat(u)}return"".concat(t).concat("/chat/agent?redirect_to=account/apps&install_app=").concat(e,"&").concat(a).concat(i).concat(s).concat(u)}},{key:"getThemeInstallationURL",value:function(t,e,n,r,o){var a=r?"plan_id=".concat(r,"&"):"plan_id=-1",i=o&&o.search?o.search.replace("?source=",""):"",c="&utm_source=".concat(i);return"".concat(t,"/theming/workbench/marketplace/").concat(e,"?").concat(a).concat("&utm_content=detail_page_install").concat(c).concat("&utm_medium=app_marketplace")}},{key:"dropdownFormattedSubdomains",value:function(t,e,n,r){var o,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"app",i=[],c=this;if(t){var s,u=d(t=t.map((function(t){return c.formatSubdomain(t,{})})));try{for(u.s();!(s=u.n()).done;){var l=s.value;if(!r&&e.plans&&e.plans.length?r=e.plans[0].id:r||(r=-1),"theme"===a)o=this.getThemeInstallationURL(l.fullSubdomain,e.id,"guide",r,n);else{var h="admin"===l.role||"owner"===l.role,p=l.url.replace("https://","").replace("http://","");o=h?this.getInstallationURL(p,e.id,e.products[0],r,n):"requires-admin"}i.push({label:l.fullSubdomain,value:o})}}catch(f){u.e(f)}finally{u.f()}}return i}},{key:"getSubdomainInfo",value:function(){if(!this.storage)return Promise.resolve([]);if(this.subdomainsCache)return Promise.resolve(this.subdomainsCache);var t=this,e=[];return t.storage.onConnect().then((function(){return t.storage.getKeys()})).then((function(n){var r,o,a;if(n&&n.length){for(a=[],r=0;r<n.length;r++)-1!==(o=n[r].split(":"))[0].indexOf("userInfo")&&(e.push(o[1]),a.push(n[r]));if(a.length)return t.storage.get.apply(t.storage,a)}})).then((function(n){var r;if(t.subdomainsCache=[],!n)return[];n.length||(n=[n]);var o=Object(l.isProduction)()?".zendesk.com":".zendesk-staging.com";for(r=0;r<n.length;r++)n[r].key=e[r]+o;return n.sort((function(t,e){return t.lastUpdated>e.lastUpdated?-1:t.lastUpdated<e.lastUpdated?1:0})),t.subdomainsCache=n,n})).catch((function(t){console.error(t)}))}},{key:"getFormattedSubdomains",value:function(t){t=t||{};var e=this;return this.getSubdomainInfo().then((function(n){if(n&&n.length)return n.map((function(n){return e.formatSubdomain(n,t)}))}))}},{key:"formatSubdomain",value:function(t,e){var n=e.truncated_length||22,r=t.key,o=r.replace(".zendesk.com","");o=r.replace(".zendesk-staging.com","");var a=r.substring(0,n);a.length!==r.length&&(a+="...");var i=o.substring(0,n);return i.length!==o.length&&(i+="..."),{name:a,shortName:o,shortNameTruncated:i,url:"https://"+r,role:t.role,fullSubdomain:t.key}}},{key:"getSubdomains",value:function(){return this.getSubdomainInfo().then((function(t){return t&&t.length?t.map((function(t){return t.key})):[]}))}},{key:"initializeSubdomainInfo",value:function(){var t=Object(a.default)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.storage||(n=Object(l.isProduction)()?"https://www.zndsk.com/hub.html":"https://staging.zndsk.com/hub.html",this.storage=new u(n,{timeout:2e3,frameId:"CrossStorageClient"})),t.next=3,this.getSubdomainInfo().then((function(t){e(t)})).catch((function(t){console.log("Error getting subdomain info: ",t)}));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}();e.a=p}}]);