(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{"1a55":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.wrap[data-v-62d2289e]{font-size:%?28?%}.wrap .content[data-v-62d2289e]{width:%?600?%;margin:%?80?% auto 0}.wrap .content .title[data-v-62d2289e]{text-align:left;font-size:%?60?%;font-weight:500;margin-bottom:%?100?%}.wrap .content uni-input[data-v-62d2289e]{text-align:left;margin-bottom:%?10?%;padding-bottom:%?6?%}.wrap .content .tips[data-v-62d2289e]{color:#909399;margin-bottom:%?60?%;margin-top:%?8?%}.wrap .content .getCaptcha[data-v-62d2289e]{background-color:#fdf3d0;color:#909399;border:none;font-size:%?30?%;padding:%?12?% 0}.wrap .content .getCaptcha[data-v-62d2289e]::after{border:none}.wrap .content .alternative[data-v-62d2289e]{color:#909399;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?30?%}.wrap .buttom .loginType[data-v-62d2289e]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?350?% %?150?% %?150?% %?150?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.wrap .buttom .loginType .item[data-v-62d2289e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#606266;font-size:%?28?%}.wrap .buttom .hint[data-v-62d2289e]{padding:%?20?% %?40?%;font-size:%?20?%;color:#909399}.wrap .buttom .hint .link[data-v-62d2289e]{color:#f90}',""]),t.exports=e},"30e3":function(t,e,n){"use strict";n("c975"),n("d81d"),n("a9e3"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-form",props:{model:{type:Object,default:function(){return{}}},errorType:{type:Array,default:function(){return["message","toast"]}},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:function(){return{}}}},provide:function(){return{uForm:this}},data:function(){return{rules:{}}},created:function(){this.fields=[]},methods:{setRules:function(t){this.rules=t},resetFields:function(){this.fields.map((function(t){t.resetField()}))},validate:function(t){var e=this;return new Promise((function(n){var i=!0,a=0,r=[];e.fields.map((function(o){o.validation("",(function(o){o&&(i=!1,r.push(o)),++a===e.fields.length&&(n(i),-1===e.errorType.indexOf("none")&&e.errorType.indexOf("toast")>=0&&r.length&&e.$u.toast(r[0]),"function"==typeof t&&t(i))}))}))}))}}};e.default=i},3437:function(t,e,n){"use strict";n.r(e);var i=n("4c8b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"3d3f":function(t,e,n){var i=n("a253");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("549aec1a",i,!0,{sourceMap:!1,shadowMode:!1})},"43a08":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uForm:n("a0fc").default,uFormItem:n("621ae").default,uInput:n("7c73b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap"},[n("v-uni-view",{staticClass:"top"}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"title"},[t._v("欢迎注册 Sinsen' App")]),n("u-form",{ref:"uForm",attrs:{model:t.registerInput,"label-width":"200"}},[n("u-form-item",{attrs:{label:"用户名",prop:"userName"}},[n("u-input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:t.registerInput.userName,callback:function(e){t.$set(t.registerInput,"userName",e)},expression:"registerInput.userName"}})],1),n("u-form-item",{attrs:{label:"Email",prop:"emailAddress"}},[n("u-input",{attrs:{type:"email",placeholder:"请输入 Email 地址"},model:{value:t.registerInput.emailAddress,callback:function(e){t.$set(t.registerInput,"emailAddress",e)},expression:"registerInput.emailAddress"}})],1),n("u-form-item",{attrs:{label:"密码",prop:"password"}},[n("u-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.registerInput.password,callback:function(e){t.$set(t.registerInput,"password",e)},expression:"registerInput.password"}})],1)],1),n("v-uni-button",{staticClass:"getCaptcha",style:[t.inputStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("注册")]),n("v-uni-view",{staticClass:"alternative"},[n("v-uni-view",{staticClass:"password",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("返回登录")]),n("v-uni-view",{staticClass:"issue"},[t._v("遇到问题")])],1)],1),n("v-uni-view",{staticClass:"buttom"},[n("v-uni-view",{staticClass:"loginType"}),n("v-uni-view",{staticClass:"hint"},[t._v("注册代表同意"),n("v-uni-text",{staticClass:"link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showAgreement.apply(void 0,arguments)}}},[t._v("SinsensApp 用户协议、隐私政策")])],1)],1)],1)},r=[]},"4a56":function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("434b")),r={name:"u-input",mixins:[a.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=r},"4c8b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("484d"),a={data:function(){return{registerInput:{userName:"",emailAddress:"",password:"",appName:"SinsensApp"},rules:{userName:{required:!0,message:"请输入用户名",tirgger:["blur","change"]},emailAddress:[{type:"email",required:!0,message:"请输入 Email 地址",tirgger:["blur","change"]}],password:[{required:!0,message:"请输入密码",tirgger:["blur","change"]},{min:6,max:16,message:"密码长度应在 6-16 个字符"}]}}},computed:{inputStyle:function(){var t={};return this.tel&&(t.color="#fff",t.backgroundColor=this.$u.color["warning"]),t}},onReady:function(){uni.setStorage({key:"tenantId",data:1}),this.$refs.uForm.setRules(this.rules)},methods:{toLogin:function(){this.$u.route({url:"pages/login/index"})},showAgreement:function(){uni.showModal({title:"Sinsen' App 用户协议、隐私政策",content:"正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正,\n\t\t\t\t在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编正在编",showCancel:!1})},submit:function(){var e=this;this.$refs.uForm.validate((function(n){n?(t.log("验证通过",e.registerInput),(0,i.requestPost)({url:"/api/account/register",data:e.registerInput}).then((function(e){t.log(e),e.data&&e.data.userName&&uni.showModal({title:"提示",content:"注册成功！",showCancel:!1,success:function(t){uni.navigateTo({url:"/pages/login/index"})}})}))):t.log("验证失败")}))}}};e.default=a}).call(this,n("5a52")["default"])},"4dda":function(t,e,n){"use strict";n.r(e);var i=n("43a08"),a=n("3437");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("b075");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"62d2289e",null,!1,i["a"],o);e["default"]=s.exports},"66a8":function(t,e,n){"use strict";var i=n("3d3f"),a=n.n(i);a.a},"6b9d":function(t,e,n){"use strict";var i=n("8689"),a=n.n(i);a.a},"7c73b":function(t,e,n){"use strict";n.r(e);var i=n("9422"),a=n("dffe");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("6b9d");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"5c361d36",null,!1,i["a"],o);e["default"]=s.exports},8689:function(t,e,n){var i=n("9eec");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5cc053ed",i,!0,{sourceMap:!1,shadowMode:!1})},9422:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("ca90").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},r=[]},"9eec":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-input[data-v-5c361d36]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-input__input[data-v-5c361d36]{font-size:%?28?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input__textarea[data-v-5c361d36]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input--border[data-v-5c361d36]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-5c361d36]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-5c361d36]{margin-left:%?10?%}.u-input__right-icon--select[data-v-5c361d36]{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-5c361d36]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},a0fc:function(t,e,n){"use strict";n.r(e);var i=n("cb57"),a=n("eca0");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("66a8");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"0807932a",null,!1,i["a"],o);e["default"]=s.exports},a253:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */',""]),t.exports=e},b075:function(t,e,n){"use strict";var i=n("dd41"),a=n.n(i);a.a},cb57:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-form"},[t._t("default")],2)},r=[]},dd41:function(t,e,n){var i=n("1a55");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("fea79daa",i,!0,{sourceMap:!1,shadowMode:!1})},dffe:function(t,e,n){"use strict";n.r(e);var i=n("4a56"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},eca0:function(t,e,n){"use strict";n.r(e);var i=n("30e3"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);