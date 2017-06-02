!function(e){"use strict";function t(){if(!v)try{window.ga.apply(e,arguments)}catch(e){}}function n(e){return e.replace(/&<"/g,function(e){return"&"===e?"&amp;":"<"===e?"&lt;":"&quot;"})}function a(e){return!e||/^[\w ,\-]+$/.test(e)}function o(){S=Object.create(null);for(var e=0;e<window.posts.length;e++)for(var t=window.posts[e],n=0;n<t.tags.length;n++){var a=t.tags[n].toLowerCase(),o=S[a];o?o.indexOf(t)<0&&o.push(t):(o=S[a]=[t],o.link=document.createElement("a"),o.link.classList.add("post-tag"),o.link.textContent=a)}}function r(e){var t=[],n=e.toLowerCase().split(/\s*,\s*/g),a=Object.create(null);null==S&&o();for(var r=0;r<n.length;r++){var s=S[n[r]];if(null!=s)for(var l=0;l<s.length;l++){var i=s[l];a[i.url]||(a[i.url]=!0,t.push(i))}}return t}function s(e,t){var n,a=e.split(/\s*,\s*/g),o=t.length;if(1===a.length)n="'"+a[0]+"'";else if(2===a.length)n="'"+a[0]+"' or '"+a[1]+"'";else{var r=a.pop();n="";for(var s=0;s<a.length;s++)n+="'"+a[s]+"', ";n+="'"+r+"'"}return"Posts tagged "+n+" ("+o+" post"+(1===o?"":"s")+"):"}function l(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function i(e,t,n){e.querySelector(t).textContent=n}function d(){if(null==w){var e=document.getElementById("blog-summary");w=e.content.cloneNode(!0).firstChild,C=w.querySelector(".back"),y=w.querySelector(".tag-title"),L=w.querySelector(".warning"),k=w.querySelector(".blog-list"),w.addEventListener("click",g,!1),w.addEventListener("keydown",g,!1)}l(m),m.appendChild(w),c(window.posts)}function c(e,t){l(k);for(var n=0;n<e.length;n++){var a=e[n],o=document.getElementById("blog-entry"),r=o.content.cloneNode(!0).firstChild;k.appendChild(r),r.href="#/posts/"+a.url,i(r,".post-date",a.date.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),i(r,".post-title",a.title),i(r,".post-preview",a.preview);for(var s=r.querySelector(".post-tags"),d=0;d<a.tags.length;d++){var c=a.tags[d],u=S[c].link.cloneNode(!0);s.appendChild(u),c===t?u.classList.add("post-tag-active"):u.classList.remove("post-tag-active")}}}function u(e){t("send","pageview","/tags/"),C.classList.remove("hidden");var n,o=e.toLowerCase();a(o)?(n=r(o),L.classList.add("hidden"),y.textContent=s(o,n)):(n=[],L.classList.remove("hidden"),y.textContent="Invalid tag: '"+e+"'"),c(n,o)}function g(e){var t=e.target;if("click"===e.type&&(t.classList.contains("post-tag")||t.classList.contains("back")))e.preventDefault(),e.stopPropagation(),t.classList.contains("post-tag")?u(t.textContent):(t.classList.add("hidden"),y.textContent="Posts, sorted by most recent.",w.querySelector(".tag-search input").value="",c(window.posts));else if(13===(e.which||e.keyCode)||"Enter"===e.key){e.preventDefault(),e.stopPropagation();var n=t.value;a(n)?(L.classList.remove("hidden"),u(n)):L.classList.add("hidden")}}function p(e){if(null==x){var t=document.getElementById("blog-post");x=t.content.cloneNode(!0).firstChild,E=x.querySelector(".post-body"),b=x.querySelector(".post-tags"),x.addEventListener("click",h,!1)}l(m),l(E),i(x,".post-title",e.title);var n=document.createElement("p");E.appendChild(n),n.textContent="Loading...",m.appendChild(x);var a=new XMLHttpRequest;a.open("GET","blog/"+e.url),a.setRequestHeader("Content-Type","text/markdown"),a.setRequestHeader("Accept","text/markdown"),a.addEventListener("load",h,!1),a.send();for(var o=b.firstChild;o.nextChild;)b.removeChild(o.nextChild);for(var r=0;r<e.tags.length;r++){var s=S[e.tags[r]].link;s.classList.remove("post-tag-active"),b.appendChild(s)}}function h(e){var t=e.target;"load"===e.type?E.innerHTML=marked(t.responseText,f):t.classList.contains("post-tag")&&(e.preventDefault(),e.stopPropagation(),v=!0,location.hash="#/",v=!1,u(t.textContent))}var v=!1,f={sanitize:!0,langPrefix:"hljs hljs-",renderer:new marked.Renderer,highlight:function(e,t){return hljs.highlight(t,e).value}};f.renderer.image=function(e,t,a){var o=/\s=\s*(\d*%?)\s*x\s*(\d*%?)\s*$/.exec(e);o&&(e=e.slice(0,-o[0].length));var r='<img src="'+n(e)+'" alt="'+n(a);return t&&(r+='" title="'+n(t)),o&&o[1]&&(r+='" height="'+o[1]),o&&o[2]&&(r+='" width="'+o[2]),r+'">'};for(var m,w,C,y,L,k,x,E,b,q=Object.create(null),S=Object.create(null),j=0;j<window.posts.length;j++){var D=window.posts[j];D.date=new Date(D.date),q[D.url]=D;for(var I=0;I<D.tags.length;I++){var O=D.tags[I].toLowerCase(),P=S[O];P?P.indexOf(D)<0&&P.push(D):(P=S[O]=[D],P.link=document.createElement("a"),P.link.classList.add("post-tag"),P.link.textContent=O)}}if(!("content"in document.createElement("template")))for(var T=document.getElementsByTagName("template"),B=0;B<T.length;B++){var N=T[B];for(N.content=document.createDocumentFragment();N.firstChild;)N.content.appendChild(N.firstChild)}window.onhashchange=function(){m?scrollTo(0,0):m=document.getElementById("blog");var e=location.hash.slice(1);if("/posts/"===e.slice(0,7)){var n=decodeURIComponent(e.slice(7));if(null!=q[n])return null!=w&&(w.querySelector(".tag-search input").value=""),t("send","pageview",e),void p(q[n])}t("send","pageview","/"),d()}}();