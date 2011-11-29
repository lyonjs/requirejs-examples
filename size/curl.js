(function(w,D,g){var H,I;function m(a,b){return S.call(a).indexOf("[object "+b)==0}function T(a){function b(b){if(b in a)return b=a[b].charAt(0)!="."?(!a.path||x(a.path)?a.path:a.path+"/")+a[b]:p(a[b],a.path),q(b)}m(a,"String")&&(a=q(a),a={name:a,path:a,main:H,lib:I});a.path=a.path||"";a.h=b("lib");a.i=b("main");return a}function J(a){var b,d,c,e=[];r=a.baseUrl||"";if(a.debug)y=!0,k.cache=i,k.cfg=a,k.undefine=function(a){delete i[a]};var f=a.paths;for(b in f)d=q(b.replace("!","!/")),c=s[d]={path:q(f[b])},
c.f=(c.path.match(K)||[]).length,e.push(d);f=a.packages;for(b in f)d=q(f[b].name||b),c=s[d]=T(f[b]),c.f=(c.path.match(K)||[]).length,e.push(d);L=RegExp("^("+e.sort(function(a,b){return s[a].f<s[b].f}).join("|").replace(/\//g,"\\/")+")(?=\\/|$)");n=a.pluginPath||n}function U(){}function z(a){function b(a,b){return V(a,b||U,e)}function d(a){return A(t(p(a,c)),r)}var c=a.substr(0,a.lastIndexOf("/")),e={baseName:c},f={};e.d={exports:f,module:{id:p(a,c),uri:d(a),exports:f}};y&&(b.curl=k);e.e=e.d.require=
b;b.toUrl=d;return e}function F(){}function W(a){F.prototype=a;a=new F;F.prototype=B;return a}function G(){function a(a,b){f.push([a,b])}function b(a){c(!0,a)}function d(a){c(!1,a)}function c(c,e){a=c?function(a){a&&a(e)}:function(a,b){b&&b(e)};b=d=function(){throw Error("Promise already completed.");};for(var h,i=0;h=f[i++];)(h=h[c?0:1])&&h(e)}var e=this,f=[];this.c=function(b,c){a(b,c)};this.b=function(a){e.l=a;b(a)};this.a=function(a){e.n=a;d(a)}}function o(a){G.apply(this);this.name=a}function x(a){return a.charAt(a.length-
1)=="/"}function q(a){return x(a)?a.substr(0,a.length-1):a}function t(a,b){function d(a){e=a.replace(L,function(b){c=s[b]||{};f=!0;return c.i&&b==a?c.i:c.h?c.h:c.path||""})}var c,e,f;b&&d(b+"!/"+a);f||d(a);return e}function A(a,b,d){return(b&&!X.test(a)?(!b||x(b)?b:b+"/")+a:a)+(d&&!Y.test(a)?".js":"")}function Z(a,b,d){var c=D.createElement("script");c.type="text/javascript";c.onload=c[M]=function(d){d=d||w.event;if(d.type==="load"||$[this.readyState])delete C[a.name],this.onload=this[M]=this.onerror=
null,b(c)};c.onerror=function(){d(Error("Syntax error or http error: "+a.url))};c.charset=a.charset||"utf-8";c.async=!0;c.src=a.url;C[a.name]=c;N.insertBefore(c,N.firstChild)}function aa(a){var b,d,c,e,f=a.length;c=a[f-1];e=m(c,"Function");f==2?m(a[0],"Array")?d=a[0]:b=a[0]:f==3&&(b=a[0],d=a[1]);!d&&e&&c.length>0&&(d=["require","exports","module"]);return{name:b,j:d||[],k:e?c:function(){return c}}}function O(a,b){y&&console&&console.log("curl: resolving",a.name);var d=z(a.baseName||a.name);P(b.j,
d,function(c){try{var e=b.k.apply(d.d.exports,c)||d.d.exports;y&&console&&console.log("curl: defined",a.name,e.toString().substr(0,50).replace(/\n/," "))}catch(f){a.a(f)}a.b(e)},a.a)}function Q(a){Z(a,function(){var b=u;u=B;a.m!==!1&&(b?b.g?a.a(Error(b.g.replace("${url}",a.url))):O(a,b):a.a(Error("define() not found or duplicates found: "+a.url)))},a.a)}function p(a,b){return a.replace(ba,function(a,c,e){return(e?b.substr(0,b.lastIndexOf("/")):b)+"/"})}function ca(a,b){var d,c,e,f,j,E;c=a.indexOf("!");
if(c>=0){e=a.substr(0,c);f=a.substr(c+1);var h=t(e);h.indexOf("/")<0&&(h=t((!n||x(n)?n:n+"/")+h));var l=i[e];if(!l)l=i[e]=new o(e),l.url=A(h,r,!0),l.baseName=h,Q(l);b=z(b.baseName);b.e.toUrl=function(a){a=t(a,e);return A(a,r)};E=W(e?g.plugins&&g.plugins[e]:g)||{};var k=function(a){return p(a,b.baseName)};j=new o(a);l.c(function(h){var g;f=a.substr(c+1);f="normalize"in h?h.normalize(f,k,E):k(f);d=e+"!"+f;g=i[d];if(!g){g=new o(d);f&&!h.dynamic&&(i[d]=g);var l=g.b;l.resolve=l;l.reject=g.a;h.load(f,b.e,
l,E)}g.c(j.b,j.a)},j.a)}else if(f=d=p(a,b.baseName),j=i[f],!j)j=i[f]=new o(f),j.url=A(t(f),r,!0),Q(j);return j}function P(a,b,d,c){for(var e=[],f=a.length,j=f,g=!1,h=0;h<j&&!g;h++)(function(a,h){h in b.d?(e[a]=b.d[h],f--):ca(h,b).c(function(b){e[a]=b;--f==0&&(g=!0,d(e))},function(a){g=!0;c(a)})})(h,a[h]);f==0&&!g&&d(e)}function V(a,b,d){if(m(a,"String")){d=(d=i[a])&&d.l;if(d===B)throw Error("Module is not already resolved: "+a);return d}P(a,d,function(a){b.b?b.b(a):b.apply(null,a)},function(a){if(b.a)b.a(a);
else throw a;})}function k(){var a=da.call(arguments),b,d;m(a[0],"Object")&&(g=a.shift(),J(g));b=[].concat(a[0]);a=a[1];d=z("");var c=new G,e={};e.then=function(a,b){c.c(function(b){a&&a.apply(null,b)},function(a){if(b)b(a);else throw a;});return e};e.next=function(a,b){var g=c;c=new G;g.c(function(){d.e(a,c,d)},function(a){c.a(a)});b&&c.c(function(a){b.apply(this,a)});return e};a&&e.then(a);d.e(b,c,d);return e}function R(){var a=aa(arguments),b=a.name;if(b==null)if(u!==B)u={g:"Multiple anonymous defines found in ${url}."};
else{var d;if(!m(w.opera,"Opera"))for(var c in C)if(C[c].readyState=="interactive"){d=c;break}if(!(b=d))u=a}if(b!=null)(d=i[b])||(d=i[b]=new o(b)),d.m=!1,"resolved"in d||O(d,a,z(b))}var N=D.head||D.getElementsByTagName("head")[0],r,n="curl/plugin",s={},i={},u,C={},S={}.toString,B,da=[].slice,X=/^\/|^[^:]+:\/\//,ba=/^(\.)(\.)?(\/|$)/,K=/\//,Y=/\?/,L,$={loaded:1,interactive:1,complete:1},M="onreadystatechange";H="./lib/main";I="./lib";var y;m(g,"Function")||J(g);var v;v=g.apiName||"curl";(g.apiContext||
w)[v]=k;i[v]=new o(v);i[v].b(k);w.define=k.define=R;k.version="0.5.3";R.amd={plugins:!0}})(this,document,this.curl||{});
