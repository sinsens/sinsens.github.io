(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallets-index"],{"08f0":function(t,n,a){"use strict";a.r(n);var e=a("7812"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},2757:function(t,n,a){"use strict";a.r(n);var e=a("b4f9"),o=a("08f0");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);a("d9e3");var u,c=a("f0c5"),s=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"f9359dac",null,!1,e["a"],u);n["default"]=s.exports},"30b7":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.info-color[data-v-f9359dac]{color:#82848a}.u-navbar-right-icon[data-v-f9359dac]{margin-right:%?40?%}.left-menu-container[data-v-f9359dac]{margin-top:%?80?%;width:%?200?%}.color-preview[data-v-f9359dac]{display:inline-block;vertical-align:bottom;margin-right:%?20?%;width:%?40?%;height:%?40?%}.u-body-item[data-v-f9359dac]{font-size:%?32?%;color:#333;padding:%?20?% %?10?%}',""]),t.exports=n},7812:function(t,n,a){"use strict";(function(t){var e=a("4ea4");a("c975"),a("d81d"),a("b680"),a("d3b7"),a("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(a("e910")),i=a("484d"),u={onShow:function(){var n=this;(0,i.request)({url:"/api/app/account?SkipCount=0&MaxResultCount=100"}).then((function(a){t.log(a),n.accounts=a.data.items})),(0,i.request)({url:"/api/app/transaction?SkipCount=0&MaxResultCount=10"}).then((function(a){t.log(a),n.transactions=a.data.items.map((function(t){return t.accountFrom&&t.accountFrom.currency?t.symbol=t.accountFrom.currency.symbol:t.accountTo&&t.accountTo.currency?t.symbol=t.accountTo.currency.symbol:t.symbol="￥",t}))}))},data:function(){return{showLeftMenu:!1,accounts:[],transactions:[],menus:[{iconPath:"home",selectedIconPath:"home-fill",text:"总览",path:"/pages/wallets/index"},{iconPath:"grid",selectedIconPath:"home-fill",text:"报表",path:"/pages/wallets/report/report"},{iconPath:"account",text:"账户",path:"/pages/wallets/accounts/index"},{iconPath:"order",text:"交易",path:"/pages/wallets/transactions/index"},{iconPath:"grid",text:"分类",path:"/pages/wallets/categories/index"},{iconPath:"tags",text:"标签",path:"/pages/wallets/tags/index"},{iconPath:"download",text:"备份",path:"/pages/wallets/backup/index"}],current:0}},computed:{total:function(){var t=0;return this.accounts.map((function(n,a){n.includeInTotals&&(t+=n.balance)})),t.toString().indexOf(".")?t.toFixed(2):t}},methods:{numberToColor:function(t){return void 0!=t&&null!=t?"#"+o.default.numberToHex(t):"white"},toUrl:function(t){wx.navigateTo({url:t})},toTransactions:function(){this.toUrl("/pages/wallets/transactions/index")},toAccounts:function(){this.toUrl("/pages/wallets/accounts/index")}}};n.default=u}).call(this,a("5a52")["default"])},afa8:function(t,n,a){var e=a("30b7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("68ae1454",e,!0,{sourceMap:!1,shadowMode:!1})},b4f9:function(t,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var e={uNavbar:a("b942").default,uIcon:a("ca90").default,uPopup:a("443b").default,uCellGroup:a("a5cf").default,uCellItem:a("cd6a").default,uCard:a("96a4").default},o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("u-navbar",{attrs:{isBack:!1,title:"总览"}},[a("v-uni-view",{staticClass:"u-navbar-right-icon",attrs:{slot:"right"},slot:"right"},[a("u-icon",{attrs:{name:"list"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showLeftMenu=!0}}})],1)],1),a("v-uni-view",{staticClass:"u-page"},[a("u-popup",{attrs:{mode:"right"},model:{value:t.showLeftMenu,callback:function(n){t.showLeftMenu=n},expression:"showLeftMenu"}},[a("u-cell-group",{staticClass:"left-menu-container"},t._l(t.menus,(function(n,e){return a("u-cell-item",{key:e,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toUrl(n.path)}}},[a("u-icon",{attrs:{slot:"icon",name:n.iconPath},slot:"icon"}),t._v(t._s(n.text))],1)})),1)],1),a("u-card",{attrs:{title:"账户","sub-title":"包含在总计中 "+t.total+"￥"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toAccounts.apply(void 0,arguments)}}},[a("v-uni-view",{attrs:{slot:"body"},slot:"body"},t._l(t.accounts.filter((function(t){return t.includeInTotals})),(function(n,e){return a("v-uni-view",{key:e,staticClass:"u-body-item u-flex u-row-between u-p-b-0"},[a("v-uni-view",{staticClass:"u-body-item-title u-line-2"},[t._v(t._s(n.title))]),t._v(t._s(n.balance)+" "+t._s(n.currency?n.currency.symbol:"￥"))],1)})),1)],1),a("u-card",{attrs:{title:"交易","sub-title":"包含在总计中"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toTransactions.apply(void 0,arguments)}}},[a("v-uni-view",{attrs:{slot:"body"},slot:"body"},t._l(t.transactions,(function(n,e){return a("v-uni-view",{key:e,staticClass:"u-body-item u-flex u-row-between u-p-b-0"},[a("v-uni-view",{staticClass:"u-body-item-title u-line-2"},[t._v(t._s(n.note))]),t._v(t._s(1===n.transactionType?"-":"")+t._s(n.amount)+" "+t._s(n.symbol))],1)})),1)],1)],1)],1)},i=[]},d9e3:function(t,n,a){"use strict";var e=a("afa8"),o=a.n(e);o.a}}]);