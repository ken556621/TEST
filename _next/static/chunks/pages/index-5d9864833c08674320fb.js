_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RNiq:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var r=t("q1tI"),o=t.n(r),a=t("YFqc"),c=t.n(a),u=o.a.createElement;function l(){return u("div",null,"Hello World."," ",u(c.a,{href:"/about",as:"/TEST/about"},u("a",null,"About")))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),u=t("nOHt"),l=t("vNVm"),i={};function f(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,E=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=a.Children.only(v),g=_&&"object"===typeof _&&_.ref,m=(0,l.useIntersection)({rootMargin:"200px"}),w=r(m,2),L=w[0],M=w[1],N=a.default.useCallback((function(e){L(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,L]);(0,a.useEffect)((function(){var e=M&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof E?E:t&&t.locale,o=i[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,M,E,n,t]);var R={ref:N,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,t,d,p,h,b,y,E)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var I="undefined"!==typeof E?E:t&&t.locale,k=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,I,t&&t.locales,t&&t.domainLocales);R.href=k||(0,c.addBasePath)((0,c.addLocale)(p,I,t&&t.defaultLocale))}return a.default.cloneElement(_,R)};n.default=s},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=(0,o.useRef)(),i=(0,o.useState)(!1),f=r(i,2),s=f[0],d=f[1],p=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||s||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=t("q1tI"),a=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var u=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1]]]);