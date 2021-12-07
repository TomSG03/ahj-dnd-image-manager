(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var o=function(){function e(t){r(this,e),this.host=t,this.init()}return i(e,[{key:"init",value:function(){this.host.addEventListener("click",(function(e){"delete"===e.target.className&&e.target.parentElement.remove()}))}},{key:"addFlow",value:function(e){var t=document.createElement("div");t.classList="picture",t.innerHTML='<div class="delete"></div>',t.append(e),this.host.append(t),this.host.scrollLeft=this.host.scrollWidth}}]),e}();new(function(){function e(t){r(this,e),this.host=t,this.flow=new o(t.querySelector("[data-flow=picture]")),this.link=this.host.querySelector("input"),this.error=this.host.querySelector("[data-error=URL]"),this.linkFiles=null}return i(e,[{key:"createBox",value:function(e){var t=this;this.error.style.visibility="hidden";var r=document.createElement("img");r.src=e,r.addEventListener("error",(function(){t.showError()})),r.addEventListener("load",(function(){t.clearInput(),t.flow.addFlow(r)}))}},{key:"showError",value:function(){this.error.style.visibility="visible"}},{key:"start",value:function(){var e=this;this.link.addEventListener("input",(function(){e.evenAdd()}))}},{key:"evenAdd",value:function(){this.previewFile.bind(this)()}},{key:"previewFile",value:function(){var e=this,t=new FileReader;t.readAsDataURL(this.link.files[0]),t.onloadend=function(){var r=document.createElement("img");r.src=t.result,e.flow.addFlow(r)}}},{key:"readFile",value:function(e){return new Promise((function(t,r){var n=new FileReader;n.addEventListener("load",(function(e){t(e.target.result)})),n.addEventListener("error",(function(e){r(e.target.error)})),n.onerror=r,n.readAsArrayBuffer(e)}))}},{key:"clearInput",value:function(){t(this.link).forEach((function(e){e.value=""}))}}]),e}())(document.getElementById("galery")).start()})();