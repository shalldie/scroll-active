!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).VScrollActive=e()}(this,function(){"use strict";var t,n,i=(function(t){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(){return document.body.scrollTop||document.documentElement.scrollTop}function c(t){for(var e=t.offsetLeft,n=t.offsetTop;t=t.offsetParent;)e+=t.offsetLeft,n+=t.offsetTop;return{x:e,y:n}}var i,e,o,u,l,f;t.exports=(i=function t(){n(this,t),this.wrapper=document.body,this.activeClass="active",this.offset=0,this.hash=!1},function(t){function n(){}function e(t,e,n,i){return n*t/i+e}function i(t){this.startTime=+new Date,this.done=!1,t=o({duration:1e3,tween:e},t),this.options=t}var o,s,r;t.exports=(o=function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},n.start=function(){n.interval||(n.interval=setInterval(function(){if(n.callbacks.length)for(var e=0,t=n.callbacks.length;e<t;e++)!function(){var t=n.callbacks[e];"function"==typeof t&&t(function(){return n.remove(t)})}();else n.stop()},17))},n.stop=function(){clearInterval(n.interval),n.interval=0},n.add=function(t){n.callbacks.push(t),n.start()},n.remove=function(t){var e=n.callbacks.indexOf(t);~e&&n.removeByIndex(e)},n.removeByIndex=function(t){n.callbacks.splice(t,1)},n.callbacks=[],s=n,r="__TIMER_FUNC",i.prototype.start=function(){return this.startTime=+new Date,this},i.prototype.update=function(){var t=new Date-this.startTime;t>this.options.duration&&(t=this.options.duration,this.done=!0);var e=this.options,n=e.from,i=e.to,o=e.tween,s=e.duration,r={};for(var a in n){var c=n[a],u=i[a];r[a]=o(t,c,u-c,s)}return this.options.onUpdate&&this.options.onUpdate(r),this.done&&this.options.done&&this.options.done(r),this},i.run=function(t){var e=new i(t).start();return e[r]=function(t){e.update(),e.done&&t()},s.add(e[r]),e},i.prototype.dispose=function(){s.remove(this[r])},i)}(o={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&o.path)}},o.exports),l=o.exports,f="data-scroll-active",function(){function e(){var r=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.activeIndex=-1,this.idList=[],this.navbarList=[],this.targetList=[],this.handleMenuClick=function(t){var e,n,i=t.currentTarget.getAttribute(f),o=r.idList.indexOf(i),s=r.targetList[o];s&&(function(t,e){u&&u.dispose(),u=l.run({from:{y:a()},to:{y:t},duration:e,tween:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e},onUpdate:function(t){var e=t.y;document.documentElement.scrollTop=document.body.scrollTop=e}})}(c(s).y-r.options.offset,500),r.options.hash&&(e=i,n=location.href.split("#")[0]+"#"+encodeURIComponent(e),history.pushState(null,"",n)))},this.handleScroll=function(){for(var t=a(),e=0,n=0;n<r.targetList.length;n++){var i=r.targetList[n];if(i){if(!(t>=c(i).y-r.options.offset))break;e=n}}r.update(e)},this.options=Object.assign({},new i,t),this.initialize()}return function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(e.prototype,[{key:"initialize",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll);var t=this.options.wrapper;this.navbarList=[].slice.call(t.querySelectorAll("[".concat(f,"]"))),this.idList=this.navbarList.map(function(t){return t.getAttribute(f)}),this.targetList=this.idList.map(function(t){return document.getElementById(t)}),this.navbarList.forEach(function(t){t.addEventListener("click",e.handleMenuClick)}),this.handleScroll()}},{key:"update",value:function(t){var e,n;this.activeIndex!==t&&(n=this.options.activeClass,this.activeIndex=t,this.options.update&&this.options.update(this.idList[t]),this.navbarList.forEach(function(t){null!=t&&t.classList.remove(n)}),null!==(e=this.navbarList[t])&&void 0!==e&&e.classList.add(n))}},{key:"dispose",value:function(){var e=this;window.removeEventListener("scroll",this.handleScroll),this.navbarList.forEach(function(t){t.removeEventListener("click",e.handleMenuClick)}),this.idList=[],this.targetList=[],this.navbarList=[]}}]),e}())}(n={path:t,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports),o="__scroll_active__";function e(t,e,n,i,o,s,r,a,c,u){"boolean"!=typeof r&&(c=a,a=r,r=!1);var l,f,d,h="function"==typeof n?n.options:n;return t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,o&&(h.functional=!0)),i&&(h._scopeId=i),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=l):e&&(l=r?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l&&(h.functional?(f=h.render,h.render=function(t,e){return l.call(e),f(t,e)}):(d=h.beforeCreate,h.beforeCreate=d?[].concat(d,l):[l])),n}var s=e({render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"v-scroll-active",props:{activeClass:{default:"active"},offset:{default:0},hash:{default:!1}},methods:{initScrollActive:function(){var e=this;this[o]=new i({wrapper:this.$el,activeClass:this.activeClass,offset:this.offset,hash:this.hash,update:function(t){e.$emit("update",t)}})}},mounted:function(){var t=this;this.$nextTick(function(){t.initScrollActive()})},beforeUpdate:function(){this[o]&&(this[o].dispose(),this[o]=void 0)},updated:function(){this.initScrollActive()},beforeDestroy:function(){this[o]&&(this[o].dispose(),this[o]=void 0)}},void 0,!1,void 0,!1,void 0,void 0,void 0);return s.install=function(t){t.component(s.name,s)},s});
