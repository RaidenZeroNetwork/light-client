(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e82793a"],{"2da5":function(t,e,s){},5147:function(t,e,s){var n=s("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[n]=!1,!"/./"[t](e)}catch(a){}}return!0}},"6fc3":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",{staticClass:"address-input"},[s("v-text-field",{ref:"address",class:{"address-input--invalid":!t.valid&&t.touched,"address-input--hint-visible":t.hint.length>0,"address-input--untouched":!t.touched},attrs:{id:"address-input",hint:t.hint,value:t.address,"error-messages":t.errorMessages,placeholder:t.$t("address-input.input.placeholder"),"persistent-hint":""},on:{blur:function(e){return t.$emit("blur")},focus:function(e){return t.$emit("focus")},input:t.updateValue,change:t.updateValue},scopedSlots:t._u([{key:"append",fn:function(){return[s("div",{staticClass:"address-input__status__paste-button"},[s("v-btn",{attrs:{text:""},on:{click:function(e){return t.paste()}}},[s("span",{staticClass:"address-input__status__paste-button__text text-capitalize"},[t._v("\n            "+t._s(t.$t("address-input.paste-button"))+"\n          ")])])],1)]},proxy:!0},{key:"prepend-inner",fn:function(){return[t.value&&t.isChecksumAddress(t.value)?s("img",{staticClass:"address-input__blockie address-input__prepend",attrs:{src:t.$blockie(t.value),alt:t.$t("address-input.blockie-alt")}}):t.timeout?s("div",[s("v-progress-circular",{staticClass:"address-input__prepend",attrs:{size:"22",indeterminate:"",color:"primary"}})],1):s("div")]},proxy:!0}])})],1)},a=[],r=s("d225"),i=s("b0b4"),c=s("308d"),o=s("6bb5"),u=s("4e2b"),d=s("9ab4"),l=s("fc09"),p=s("60a3"),h=s("77fd"),f=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.timeout=0,t.address="",t.valid=!1,t.touched=!1,t.hint="",t.errorMessages=[""],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"input",value:function(t){}},{key:"isChecksumAddress",value:function(t){var e=t;return l["a"].isAddress(e)&&l["a"].checkAddressChecksum(e)}},{key:"updateValue",value:function(t){this.errorMessages=[],this.hint="",this.updateErrors(t),this.checkForErrors()}},{key:"updateErrors",value:function(t){t?l["a"].isAddress(t)&&!l["a"].checkAddressChecksum(t)?this.errorMessages.push(this.$t("address-input.error.no-checksum")):l["a"].checkAddressChecksum(t)?this.input(t):!l["a"].isAddressLike(t)&&l["a"].isDomain(t)?this.resolveEnsAddress(t):this.errorMessages.push(this.$t("address-input.error.invalid-address")):(this.input(t),this.errorMessages.push(this.$t("address-input.error.empty")))}},{key:"checkForErrors",value:function(){this.$refs.address&&(this.touched=!0,this.valid=0===this.errorMessages.length)}},{key:"resolveEnsAddress",value:function(t){var e=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=0),this.timeout=setTimeout(function(){e.$raiden.ensResolve(t).then(function(t){t?(e.hint=t,e.input(t),e.errorMessages=[]):(e.errorMessages.push(e.$t("address-input.error.ens-resolve-failed")),e.input(void 0),e.checkForErrors()),e.timeout=0}).catch(function(){e.errorMessages.push(e.$t("address-input.error.ens-resolve-failed")),e.input(void 0),e.checkForErrors(),e.timeout=0})},800)}},{key:"paste",value:function(){}}]),e}(Object(p["c"])(h["a"]));d["a"]([Object(p["d"])({})],f.prototype,"disabled",void 0),d["a"]([Object(p["d"])({required:!0})],f.prototype,"value",void 0),d["a"]([Object(p["b"])()],f.prototype,"input",null),f=d["a"]([Object(p["a"])({})],f);var v=f,b=v,k=(s("ce17"),s("2877")),_=s("6544"),m=s.n(_),y=s("8336"),g=s("490a"),j=s("8654"),C=Object(k["a"])(b,n,a,!1,null,"40b1bdce",null);e["a"]=C.exports;m()(C,{VBtn:y["a"],VProgressCircular:g["a"],VTextField:j["a"]})},7724:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select-token"},[s("list-header",{staticClass:"select-token__header",attrs:{header:t.$t("select-token.header")}}),s("v-layout",{attrs:{"justify-center":""}},[s("v-flex",{attrs:{xs12:""}},[s("v-list",{staticClass:"select-token__tokens"},[t._l(t.allTokens,function(e){return[s("v-list-item",{key:e.address,staticClass:"select-token__tokens__token",on:{click:function(s){return t.navigateToSelectHub(e.address)}}},[s("v-list-item-avatar",{staticClass:"select-token__tokens__token__blockie"},[s("img",{attrs:{src:t.$blockie(e.address),alt:t.$t("select-token.tokens.token.blockie-alt")}})]),s("v-list-item-content",[s("v-list-item-title",{staticClass:"select-token__tokens__token__info"},[t._v("\n                "+t._s(t.$t("select-token.tokens.token.token-information",{symbol:e.symbol,name:e.name}))+"\n              ")]),s("v-list-item-subtitle",{staticClass:"select-token__tokens__token__address"},[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[s("span",t._g({},a),[t._v(t._s(t._f("truncate")(e.address)))])]}}],null,!0)},[s("span",[t._v("\n                    "+t._s(e.address)+"\n                  ")])])],1)],1),s("v-list-item-action-text",[s("span",{staticClass:"select-token__tokens__token__balance"},[t._v("\n                "+t._s(t._f("displayFormat")(e.balance,e.decimals))+"\n              ")])])],1)]})],2)],1)],1)],1)},a=[],r=s("d225"),i=s("308d"),c=s("6bb5"),o=s("4e2b"),u=s("9ab4"),d=s("60a3"),l=s("6fc3"),p=s("2f62"),h=s("152b"),f=s("77fd"),v=s("d0aa"),b=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(Object(d["c"])(f["a"],h["a"]));b=u["a"]([Object(d["a"])({components:{ListHeader:v["a"],AddressInput:l["a"]},computed:Object(p["b"])(["allTokens"])})],b);var k=b,_=k,m=(s("cb18"),s("2877")),y=s("6544"),g=s.n(y),j=s("0e8f"),C=s("a722"),O=s("8860"),x=s("da13"),$=s("5d23"),A=s("8270"),V=s("3a2f"),E=Object(m["a"])(_,n,a,!1,null,"5eb999ca",null);e["default"]=E.exports;g()(E,{VFlex:j["a"],VLayout:C["a"],VList:O["a"],VListItem:x["a"],VListItemActionText:$["a"],VListItemAvatar:A["a"],VListItemContent:$["b"],VListItemSubtitle:$["c"],VListItemTitle:$["d"],VTooltip:V["a"]})},cb18:function(t,e,s){"use strict";var n=s("2da5"),a=s.n(n);a.a},ce17:function(t,e,s){"use strict";var n=s("d55b"),a=s.n(n);a.a},d2c8:function(t,e,s){var n=s("aae3"),a=s("be13");t.exports=function(t,e,s){if(n(e))throw TypeError("String#"+s+" doesn't accept regex!");return String(a(t))}},d55b:function(t,e,s){},f559:function(t,e,s){"use strict";var n=s("5ca1"),a=s("9def"),r=s("d2c8"),i="startsWith",c=""[i];n(n.P+n.F*s("5147")(i),"String",{startsWith:function(t){var e=r(this,t,i),s=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return c?c.call(e,n,s):e.slice(s,s+n.length)===n}})},fc09:function(t,e,s){"use strict";s.d(e,"a",function(){return i});s("f559");var n=s("d225"),a=s("b0b4"),r=s("e7ea"),i=function(){function t(){Object(n["a"])(this,t)}return Object(a["a"])(t,null,[{key:"isAddress",value:function(t){return/^(0x)?[0-9a-f]{40}$/i.test(t)}},{key:"checkAddressChecksum",value:function(t){try{return t===r["utils"].getAddress(t)}catch(e){return!1}}},{key:"isAddressLike",value:function(t){return t.startsWith("0x")}},{key:"isDomain",value:function(t){return/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/.test(t)}}]),t}()}}]);
//# sourceMappingURL=chunk-1e82793a.7cfab643.js.map