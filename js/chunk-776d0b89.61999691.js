(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-776d0b89"],{"0094":function(t,e,i){},"040f":function(t,e,i){"use strict";var n=i("b7f5"),s=i.n(n);s.a},"0d92":function(t,e,i){"use strict";var n=i("5b32"),s=i.n(n);s.a},"26e5":function(t,e,i){},3010:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-host"},[i("channel-list",{attrs:{channels:t.channels(t.$route.params.token),"token-address":t.$route.params.token}})],1)},s=[],a=i("d225"),r=i("308d"),o=i("6bb5"),c=i("4e2b"),l=i("9ab4"),u=i("60a3"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-host"},[i("v-layout",{staticClass:"list-container",attrs:{"justify-center":"",row:""}},[i("Transition",{attrs:{name:"fade-transition",mode:"out-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleCloseConfirmation||t.visibleSettleConfirmation||t.visibleDeposit,expression:"\n          visibleCloseConfirmation ||\n            visibleSettleConfirmation ||\n            visibleDeposit\n        "}],staticClass:"overlay",on:{click:function(e){return t.closeConfirmation()}}})]),i("v-flex",{attrs:{xs12:"",md12:"",lg12:""}},[i("v-list",{staticClass:"channel-list"},t._l(t.channels,function(e,n){return i("v-list-group",{key:e.partner,staticClass:"channel",attrs:{id:"channel-"+e.id,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-tile",[i("v-list-tile-avatar",{staticClass:"list-blockie"},[i("img",{attrs:{src:t.$blockie(e.partner),alt:"Partner address blocky"}})]),i("v-list-tile-content",[i("v-list-tile-title",{staticClass:"partner-address"},[t._v("\n                  "+t._s(e.partner)+"\n                ")]),i("v-list-tile-sub-title",{staticClass:"state-info"},[t._v("\n                  Deposit\n                  "+t._s(t._f("displayFormat")(e.ownDeposit,t.token.decimals))+" |\n                  State: "+t._s(t._f("capitalizeFirst")(e.state))+"\n                ")])],1)],1)]},proxy:!0}],null,!0)},[i("div",{staticClass:"expanded-area",attrs:{id:"expanded-area-"+n}},[t.visibleCloseConfirmation==="channel-"+e.id?i("div",[i("confirmation",{attrs:{identifier:e.id},on:{confirm:function(e){return t.closeConfirmed()},cancel:function(e){return t.closeCancelled()}}},[t._v("\n                Are you sure you want to close this channel? "),i("br"),t._v("\n                This action cannot be undone.\n              ")])],1):t.visibleSettleConfirmation==="channel-"+e.id?i("div",[i("confirmation",{attrs:{identifier:e.id},on:{confirm:function(e){return t.settleConfirmed()},cancel:function(e){return t.settleCancelled()}}},[t._v("\n                Are you sure you want to settle the channel with hub\n                "+t._s(t.selectedChannel.partner)+" for token\n                "+t._s(t.selectedChannel.token)+"?\n              ")])],1):t.visibleDeposit==="channel-"+e.id?i("div",[i("channel-deposit",{attrs:{identifier:e.id,token:t.token},on:{confirm:function(e){return t.depositConfirmed(e)},cancel:function(e){return t.depositCancelled()}}})],1):i("div",{staticClass:"area-content"},[i("channel-life-cycle",{attrs:{state:e.state}}),i("v-layout",{attrs:{"justify-space-around":"",row:""}},[i("v-btn",{staticClass:"action-button text-capitalize",attrs:{id:"deposit-"+n,disabled:"open"!==e.state},on:{click:function(i){return t.deposit(e)}}},[t._v("\n                  Deposit\n                ")]),i("v-btn",{staticClass:"action-button text-capitalize",attrs:{id:"close-"+n,disabled:"open"!==e.state&&"closing"!==e.state},on:{click:function(i){return t.close(e)}}},[t._v("\n                  Close\n                ")]),i("v-btn",{staticClass:"action-button text-capitalize",attrs:{id:"settle-"+n,disabled:"settleable"!==e.state&&"settling"!==e.state},on:{click:function(i){return t.settle(e)}}},[t._v("\n                  Settle\n                ")])],1)],1)])])}),1)],1)],1),i("v-snackbar",{attrs:{"multi-line":!0,timeout:3e3,bottom:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.message)+"\n    "),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1)],1)},p=[],h=(i("96cf"),i("3b8d")),v=i("b0b4"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("v-layout",{staticClass:"description-wrapper",attrs:{row:"","align-center":"","justify-center":""}},[i("v-flex",{staticClass:"description"},[i("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("amount-input",{attrs:{light:"",token:t.token,label:"Amount",limit:""},model:{value:t.deposit,callback:function(e){t.deposit=e},expression:"deposit"}})],1)],1)],1),i("v-layout",{staticClass:"action-buttons",attrs:{row:"","align-end":"","justify-center":""}},[i("v-btn",{staticClass:"text-capitalize cancel-button",attrs:{id:"cancel-"+t.identifier,light:""},on:{click:function(e){return t.cancel()}}},[t._v("\n      Cancel\n    ")]),i("v-btn",{staticClass:"text-capitalize confirm-button",attrs:{id:"confirm-"+t.identifier,light:"",disabled:!t.valid},on:{click:function(e){return t.confirm()}}},[t._v("\n      Confirm\n    ")])],1)],1)},b=[],m=i("dbe0"),g=i("a3d5"),k=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.deposit="0.0",t.valid=!1,t}return Object(c["a"])(e,t),Object(v["a"])(e,[{key:"cancel",value:function(){}},{key:"confirm",value:function(){var t=g["a"].parse(this.deposit,this.token.decimals);t.isZero()?this.$emit("cancel"):this.$emit("confirm",t)}}]),e}(u["e"]);l["a"]([Object(u["d"])({required:!0})],k.prototype,"identifier",void 0),l["a"]([Object(u["d"])({required:!0})],k.prototype,"token",void 0),l["a"]([Object(u["b"])()],k.prototype,"cancel",null),k=l["a"]([Object(u["a"])({components:{AmountInput:m["a"]}})],k);var y=k,C=y,j=(i("0d92"),i("2877")),O=i("6544"),_=i.n(O),w=i("8336"),V=i("0e8f"),x=i("4bd4"),$=i("a722"),S=Object(j["a"])(C,f,b,!1,null,"e4ba9124",null),B=S.exports;_()(S,{VBtn:w["a"],VFlex:V["a"],VForm:x["a"],VLayout:$["a"]});var T=i("87a2"),A=i("77fd"),E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"justify-center":"",row:""}},[i("v-flex",[i("v-stepper",{staticClass:"no-shadow lifecycle",attrs:{value:t.step,"alt-labels":""}},[i("v-stepper-header",[i("v-stepper-step",{attrs:{step:"1"}},[t._v("Open")]),i("v-divider",{class:{active:t.step>1}}),i("v-stepper-step",{attrs:{step:"2"}},[t._v("Closed")]),i("v-divider",{class:{active:t.step>2}}),i("v-stepper-step",{attrs:{step:"3"}},[t._v("Settleable")])],1)],1)],1)],1)},L=[],D=i("ce2a"),R=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(v["a"])(e,[{key:"step",get:function(){var t=1;return this.state===D["a"].closing||this.state===D["a"].closed?t=2:this.state!==D["a"].settleable&&this.state!==D["a"].settling||(t=3),t}}]),e}(u["e"]);l["a"]([Object(u["d"])({required:!0})],R.prototype,"state",void 0),R=l["a"]([Object(u["a"])({})],R);var M=R,I=M,z=(i("62de"),i("58db"),i("6a18")),N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},q=z["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){return t("hr",{class:N({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:this.$attrs,on:this.$listeners})}}),F=(i("bff6"),i("94ab")),U=i("58df"),P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},H=Object(U["a"])(Object(F["b"])("stepper"),z["a"]).extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{nonLinear:Boolean,altLabels:Boolean,vertical:Boolean,value:[Number,String]},data:function(){return{inputValue:null,isBooted:!1,steps:[],content:[],isReverse:!1}},computed:{classes:function(){return P({"v-stepper":!0,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{inputValue:function(t,e){this.isReverse=Number(t)<Number(e);for(var i=this.steps.length;--i>=0;)this.steps[i].toggle(this.inputValue);for(var n=this.content.length;--n>=0;)this.content[n].toggle(this.inputValue,this.isReverse);this.$emit("input",this.inputValue),e&&(this.isBooted=!0)},value:function(){var t=this;this.$nextTick(function(){return t.inputValue=t.value})}},mounted:function(){this.inputValue=this.value||this.steps[0].step||1},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter(function(e){return e!==t}):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter(function(e){return e!==t}))},stepClick:function(t){var e=this;this.$nextTick(function(){return e.inputValue=t})}},render:function(t){return t("div",{class:this.classes},this.$slots.default)}}),J=i("80d2"),G=i("9d26"),K=i("b64a"),Z=i("3ccf"),Q=Object(U["a"])(K["a"],Object(F["a"])("stepper","v-stepper-step","v-stepper")).extend({name:"v-stepper-step",directives:{Ripple:Z["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$vuetify.icons.complete"},editIcon:{type:String,default:"$vuetify.icons.edit"},errorIcon:{type:String,default:"$vuetify.icons.error"},editable:Boolean,rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step":!0,"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error":this.hasError,"v-stepper__step--complete":this.complete,"error--text":this.hasError}},hasError:function(){return this.rules.some(function(t){return!0!==t()})}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){var e={class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},i=void 0;i=this.hasError?[t(G["a"],{},this.errorIcon)]:this.complete?this.editable?[t(G["a"],{},this.editIcon)]:[t(G["a"],{},this.completeIcon)]:String(this.step);var n=!(this.hasError||!this.complete&&!this.isActive)&&this.color,s=t("span",this.setBackgroundColor(n,{staticClass:"v-stepper__step__step"}),i),a=t("div",{staticClass:"v-stepper__label"},this.$slots.default);return t("div",e,[s,a])}}),W=i("0789"),X=(Object(U["a"])(Object(F["a"])("stepper","v-stepper-content","v-stepper")).extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{classes:function(){return{"v-stepper__content":!0}},computedTransition:function(){return this.isReverse?W["d"]:W["e"]},styles:function(){return this.isVertical?{height:Object(J["b"])(this.height)}:{}},wrapperClasses:function(){return{"v-stepper__wrapper":!0}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame(function(){e=t.$refs.wrapper.scrollHeight}),this.height=0,setTimeout(function(){return t.isActive&&(t.height=e||"auto")},450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout(function(){return t.height=0},10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={class:this.classes},i={class:this.wrapperClasses,style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var n=t("div",i,[this.$slots.default]),s=t("div",e,[n]);return t(this.computedTransition,{on:this.$listeners},[s])}}),Object(J["d"])("v-stepper__header")),Y=(Object(J["d"])("v-stepper__items"),Object(j["a"])(I,E,L,!1,null,"0f5da49d",null)),tt=Y.exports;_()(Y,{VDivider:q,VFlex:V["a"],VLayout:$["a"],VStepper:H,VStepperHeader:X,VStepperStep:Q});var et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("v-layout",{staticClass:"description-wrapper",attrs:{row:"","align-center":"","justify-center":""}},[i("v-flex",{staticClass:"description"},[t._t("default")],2)],1),i("v-layout",{staticClass:"action-buttons",attrs:{row:"","align-end":"","justify-center":""}},[i("v-btn",{staticClass:"text-capitalize cancel-button",attrs:{id:"cancel-"+t.identifier},on:{click:function(e){return t.cancel()}}},[t._v("\n      Cancel\n    ")]),i("v-btn",{staticClass:"text-capitalize",attrs:{id:"confirm-"+t.identifier},on:{click:function(e){return t.confirm()}}},[t._v("\n      Close\n    ")])],1)],1)},it=[],nt=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(v["a"])(e,[{key:"cancel",value:function(){}},{key:"confirm",value:function(){}}]),e}(u["e"]);l["a"]([Object(u["d"])({required:!0})],nt.prototype,"identifier",void 0),l["a"]([Object(u["b"])()],nt.prototype,"cancel",null),l["a"]([Object(u["b"])()],nt.prototype,"confirm",null),nt=l["a"]([Object(u["a"])({})],nt);var st=nt,at=st,rt=(i("79d1"),Object(j["a"])(at,et,it,!1,null,"4ad8774a",null)),ot=rt.exports;_()(rt,{VBtn:w["a"],VFlex:V["a"],VLayout:$["a"]});var ct=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.token=T["c"],t.selectedChannel=null,t.visibleCloseConfirmation="",t.visibleSettleConfirmation="",t.visibleDeposit="",t.message="",t.snackbar=!1,t}return Object(c["a"])(e,t),Object(v["a"])(e,[{key:"created",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$raiden.getToken(this.tokenAddress);case 2:this.token=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"closeCancelled",value:function(){this.visibleCloseConfirmation=""}},{key:"closeConfirmed",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.selectedChannel,i=e.token,n=e.partner,this.dismissCloseModal(),t.prev=4,t.next=7,this.$raiden.closeChannel(i,n);case 7:this.showMessage("Channel close successful"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](4),this.showMessage("Channel close failed");case 13:case"end":return t.stop()}},t,this,[[4,10]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"showMessage",value:function(t){this.message=t,this.snackbar=!0}},{key:"dismissCloseModal",value:function(){this.visibleCloseConfirmation="",this.selectedChannel=null}},{key:"close",value:function(t){this.selectedChannel=t,this.visibleCloseConfirmation="channel-".concat(t.id)}},{key:"depositCancelled",value:function(){this.dismissDepositModal()}},{key:"dismissDepositModal",value:function(){this.visibleDeposit="",this.selectedChannel=null}},{key:"depositConfirmed",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(e){var i,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=this.selectedChannel,n=i.token,s=i.partner,this.dismissDepositModal(),t.prev=2,t.next=5,this.$raiden.deposit(n,s,e);case 5:this.showMessage("Deposit was successful"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),this.showMessage("Deposit failed");case 11:case"end":return t.stop()}},t,this,[[2,8]])}));function e(e){return t.apply(this,arguments)}return e}()},{key:"deposit",value:function(t){this.selectedChannel=t,this.visibleDeposit="channel-".concat(t.id)}},{key:"dismissSettleModal",value:function(){this.visibleSettleConfirmation="",this.selectedChannel=null}},{key:"settleCancelled",value:function(){this.dismissSettleModal()}},{key:"settleConfirmed",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(){var e,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.selectedChannel,i=e.token,n=e.partner,this.dismissSettleModal(),t.prev=2,t.next=5,this.$raiden.settleChannel(i,n);case 5:this.showMessage("Channel settle was successful"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),this.showMessage("Channel settle failed");case 11:case"end":return t.stop()}},t,this,[[2,8]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"settle",value:function(t){this.selectedChannel=t,this.visibleSettleConfirmation="channel-".concat(t.id)}},{key:"closeConfirmation",value:function(){this.visibleSettleConfirmation="",this.visibleCloseConfirmation=""}}]),e}(Object(u["c"])(A["a"]));l["a"]([Object(u["d"])({required:!0})],ct.prototype,"channels",void 0),l["a"]([Object(u["d"])({required:!0})],ct.prototype,"tokenAddress",void 0),ct=l["a"]([Object(u["a"])({components:{Confirmation:ot,ChannelLifeCycle:tt,ChannelDeposit:B}})],ct);var lt=ct,ut=lt,dt=(i("d920"),i("8860")),pt=i("56b0"),ht=i("ba95"),vt=i("c954"),ft=i("5d23"),bt=(i("0094"),i("98a1")),mt=i("c22b"),gt=Object(U["a"])(K["a"],bt["a"],Object(mt["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{autoHeight:Boolean,multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--auto-height":this.autoHeight,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(function(){t.isActive=!1},this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},this.isActive&&[t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),kt=Object(j["a"])(ut,d,p,!1,null,"206bf7e4",null),yt=kt.exports;_()(kt,{VBtn:w["a"],VFlex:V["a"],VLayout:$["a"],VList:dt["a"],VListGroup:pt["a"],VListTile:ht["a"],VListTileAvatar:vt["a"],VListTileContent:ft["a"],VListTileSubTitle:ft["b"],VListTileTitle:ft["c"],VSnackbar:gt});var Ct=i("2f62"),jt=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(u["e"]);jt=l["a"]([Object(u["a"])({components:{ChannelList:yt},computed:Object(Ct["b"])(["channels"])})],jt);var Ot=jt,_t=Ot,wt=Object(j["a"])(_t,n,s,!1,null,"7e7afac8",null);e["default"]=wt.exports},"4bd4":function(t,e,i){"use strict";i("26e5");var n=i("94ab");e["a"]={name:"v-form",mixins:[Object(n["b"])("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",function(i){e.$set(e.errorBag,t._uid,i)},{immediate:!0})},n={_uid:t._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))}):n.valid=i(t),n},validate:function(){var t=this.inputs.filter(function(t){return!t.validate(!0)}).length;return!t},reset:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(t){var e=this.watchInput(t);this.inputs.push(t),this.watchers.push(e)},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var i=this.watchers.find(function(t){return t._uid===e._uid});i.valid&&i.valid(),i.shouldValidate&&i.shouldValidate(),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},"58db":function(t,e,i){},"5b32":function(t,e,i){},"62de":function(t,e,i){"use strict";var n=i("c374"),s=i.n(n);s.a},"79d1":function(t,e,i){"use strict";var n=i("f6c4"),s=i.n(n);s.a},"8b9f":function(t,e,i){},b7f5:function(t,e,i){},bff6:function(t,e,i){},c374:function(t,e,i){},d920:function(t,e,i){"use strict";var n=i("8b9f"),s=i.n(n);s.a},dbe0:function(t,e,i){"use strict";var n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("fieldset",{class:{light:t.light,dark:!t.light,padded:t.padded},attrs:{id:"token-amount"}},[i("v-text-field",{ref:"input",class:{light:t.light,invalid:!t.valid},attrs:{id:"amount",disabled:t.disabled,label:t.label,rules:t.rules,value:t.amount,"background-color":"transparent",autocomplete:"off",hint:"Enter the amount you wish to deposit and confirm.","persistent-hint":"",light:t.light,dark:!t.light,flat:"",placeholder:"0.00",solo:""},on:{contextmenu:function(e){return t.valueUpdated("contextmenu",e)},drop:function(e){return t.valueUpdated("drop",e)},keydown:function(e){return t.valueUpdated("keydown",e)},keyup:function(e){return t.valueUpdated("keyup",e)},mousedown:function(e){return t.valueUpdated("mousedown",e)},mouseup:function(e){return t.valueUpdated("mouseup",e)},select:function(e){return t.valueUpdated("select",e)}},nativeOn:{input:function(e){return t.valueUpdated("input",e)}}},[i("div",{staticClass:"prepend-placeholder",attrs:{slot:"prepend"},slot:"prepend"}),i("div",{staticClass:"status-icon-wrapper",attrs:{slot:"append-outer"},slot:"append-outer"},[t.valid?i("v-icon",{staticClass:"status-icon",attrs:{large:""}},[t._v("check_circle")]):i("v-icon",{staticClass:"status-icon",attrs:{large:""}},[t._v("error")])],1)]),i("span",{staticClass:"token-symbol",class:{light:t.light}},[t._v(t._s(t.token.symbol||"TKN"))])],1)},a=[],r=i("d225"),o=i("b0b4"),c=i("308d"),l=i("6bb5"),u=i("4e2b"),d=i("9ab4"),p=i("60a3"),h=i("a3d5"),v=n=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.valid=!0,t.amount="0.00",t.rules=[function(t){return!!t||"The amount cannot be empty"},function(e){return!t.limit||t.noDecimalOverflow(e)||"The token supports only up to ".concat(t.token.decimals," decimals")},function(e){return!t.limit||t.hasEnoughBalance(e)||"Insufficient balance"}],t.oldValue="0.00",t.oldSelectionStart=0,t.oldSelectionEnd=0,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"noDecimalOverflow",value:function(t){return t&&n.numericRegex.test(t)&&!h["a"].decimalsOverflow(t,this.token)}},{key:"hasEnoughBalance",value:function(t){return t&&n.numericRegex.test(t)&&!h["a"].decimalsOverflow(t,this.token)&&h["a"].hasBalance(t,this.token)}},{key:"mounted",value:function(){this.amount=this.oldValue=this.value}},{key:"valueUpdated",value:function(t,e){var i=e.target,s=i.value;if(this.$refs.input){var a=this.$refs.input;this.valid=a.valid}n.numericRegex.test(s)?(this.$emit(t,s),this.oldValue=s,this.oldSelectionStart=i.selectionStart,this.oldSelectionEnd=i.selectionEnd):(i.value=this.oldValue,this.oldSelectionStart&&this.oldSelectionEnd&&i.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd))}}]),e}(p["e"]);v.numericRegex=/^\d*[.,]?\d*$/,d["a"]([Object(p["d"])({required:!1})],v.prototype,"label",void 0),d["a"]([Object(p["d"])({})],v.prototype,"disabled",void 0),d["a"]([Object(p["d"])({default:"0.00"})],v.prototype,"value",void 0),d["a"]([Object(p["d"])()],v.prototype,"token",void 0),d["a"]([Object(p["d"])({default:!1,type:Boolean})],v.prototype,"limit",void 0),d["a"]([Object(p["d"])({default:!1,type:Boolean})],v.prototype,"light",void 0),d["a"]([Object(p["d"])({default:!1,type:Boolean})],v.prototype,"padded",void 0),v=n=d["a"]([Object(p["a"])({})],v);var f=v,b=f,m=(i("040f"),i("2877")),g=i("6544"),k=i.n(g),y=i("132d"),C=i("2677"),j=Object(m["a"])(b,s,a,!1,null,"6bf0abcd",null);e["a"]=j.exports;k()(j,{VIcon:y["a"],VTextField:C["a"]})},f6c4:function(t,e,i){}}]);
//# sourceMappingURL=chunk-776d0b89.61999691.js.map