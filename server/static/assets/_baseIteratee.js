import{cK as n,cL as r,cM as t,bu as u,cN as e,cO as i,cP as o,cI as f,cQ as c,bw as a}from"./index.js";import{g as v}from"./get.js";function s(n){return n==n&&!t(n)}function l(n,r){return function(t){return null!=t&&(t[n]===r&&(void 0!==r||n in Object(t)))}}function b(t){var e=function(n){for(var r=u(n),t=r.length;t--;){var e=r[t],i=n[e];r[t]=[e,i,s(i)]}return r}(t);return 1==e.length&&e[0][2]?l(e[0][0],e[0][1]):function(u){return u===t||function(t,u,e,i){var o=e.length,f=o,c=!i;if(null==t)return!f;for(t=Object(t);o--;){var a=e[o];if(c&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<f;){var v=(a=e[o])[0],s=t[v],l=a[1];if(c&&a[2]){if(void 0===s&&!(v in t))return!1}else{var b=new n;if(i)var d=i(s,l,v,t,u,b);if(!(void 0===d?r(l,s,3,i,b):d))return!1}}return!0}(u,t,e)}}function d(n){return e(n)?(r=i(n),function(n){return null==n?void 0:n[r]}):function(n){return function(r){return f(r,n)}}(n);var r}function g(n){return"function"==typeof n?n:null==n?c:"object"==typeof n?a(n)?(t=n[0],u=n[1],e(t)&&s(u)?l(i(t),u):function(n){var e=v(n,t);return void 0===e&&e===u?o(n,t):r(u,e,3)}):b(n):d(n);var t,u}export{g as b};