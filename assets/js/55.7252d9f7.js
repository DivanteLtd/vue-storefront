(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{180:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Category Store is designed to handle all actions related the categories data.")]),t._v(" "),s("p",[t._v("This module works pretty tightly with Elastic Search and operates on the "),s("router-link",{attrs:{to:"./..data/elasticsearch.html"}},[t._v("Product data format")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),s("p",[t._v("Category state is generally populated by just two methods "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L38",target:"_blank",rel:"noopener noreferrer"}},[t._v("list"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L70",target:"_blank",rel:"noopener noreferrer"}},[t._v("single"),s("OutboundLink")],1),t._v(" and cleared to the defaults by "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L28",target:"_blank",rel:"noopener noreferrer"}},[t._v("reset"),s("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The category state data:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("breadcrumbs")]),t._v(" - this is the list of routes used by the "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/master/core/components/Breadcrumbs.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Breadcrumbs component"),s("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),t._m(6),s("p",[t._v("Please note, that we're using the Magento like EAV attributes structure - so the values here are an attribute value indexes not the values itself. Please take a look at "),s("router-link",{attrs:{to:"./..data/elasticsearch.html"}},[t._v("Data formats")]),t._v(" for a reference")],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("ul",[s("li",[s("code",[t._v("EventBus.$emit('category-after-single', { category: mainCategory })")]),t._v(" - from "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L70",target:"_blank",rel:"noopener noreferrer"}},[t._v("category/single"),s("OutboundLink")],1),t._v(" after single category is loaded,")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12)]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("The cart store provides following public actions:")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("All state members should have been accessed only by getters. Please take a look at the state reference for data formats")]),t._v(" "),t._m(23)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"category-vuex-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#category-vuex-store","aria-hidden":"true"}},[this._v("#")]),this._v(" Category Vuex Store")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[this._v("#")]),this._v(" State")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  list"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  current"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  filters"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" color"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" price"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  breadcrumbs"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" routes"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  current_path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// list of categories from root to current")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The action "),s("code",[t._v("category/single")]),t._v(" uses "),s("code",[t._v("localForage")]),t._v(" cache only - no ElasticSearch data store directly; because of this optimization, please do download the categories list by dispatching "),s("code",[t._v("category/list")]),t._v(" at first.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("current")]),this._v(" - this is the current category object,")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("filters")]),this._v(" is a current state of the category filters - dictionary of selected variant attributes; for example it contains dictionary of selected product attributes:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"color"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("123")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"size"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("24")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("current_path")]),this._v(" - this is the list of category objects: from current category to the top level root,")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The following events are published from "),e("code",[this._v("category")]),this._v(" store:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("EventBus.$emit('category-after-current', { category: category })")]),this._v(" - after current category has been changed - this is subsequent call of "),e("code",[this._v("category/single")]),this._v(" action,")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("EventBus.$emit('category-after-reset', { })")]),this._v(" - after category has been reset (for example in the process of moving from one category page to another)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("EventBus.$emit('category-after-list', { query: qrObj, sort: sort, size: size, start: start, list: resp })")]),this._v(" - this event emits the current category list as it's returned by "),e("code",[this._v("category/list")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"list-context-parent-null-onlyactive-true-onlynotempty-false-size-4000-start-0-sort-position-asc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-context-parent-null-onlyactive-true-onlynotempty-false-size-4000-start-0-sort-position-asc","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("list (context, { parent = null, onlyActive = true, onlyNotEmpty = false, size = 4000, start = 0, sort = 'position:asc' })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This is the key method to load the category list. It returns the "),e("code",[this._v("Promise")]),this._v(" that contains the product list object. This method should be used everywhere you need to get products data.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"single-context-key-value-setcurrentcategory-true-setcurrentcategorypath-true"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-context-key-value-setcurrentcategory-true-setcurrentcategorypath-true","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("single (context, { key, value, setCurrentCategory = true, setCurrentCategoryPath = true })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This method gets the single category from "),e("code",[this._v("localForage")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Important")]),this._v(" "),e("p",[this._v("To make this method work you should call "),e("code",[this._v("category/list")]),this._v(" before. This category works only on localFotage and cannot access ElasticSearch directly")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Important")]),this._v(" "),e("p",[this._v("This method synchronizes products for offline usage by: storing the whole query results object into "),e("code",[this._v("localForage")]),this._v(" and by caching each category individually (to be used on the Product page for example)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Events")]),this._v(": this method emits category list as "),e("code",[this._v("EventBus.$emit('category-after-list', { query: qrObj, sort: sort, size: size, start: start, list: resp })")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[s("code",[t._v("parent")]),t._v(" - "),s("code",[t._v("category")]),t._v(" object to load the subcategories only")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("start")]),t._v(", "),s("code",[t._v("size")]),t._v(" - both parameters are used for paging; start is the starting index; size is a page size")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("onlyActive")]),t._v(" - (bool) load only the categories marked as active in CMS (for example in Magento)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("sort")]),t._v(" - category attribute using to sort, this field must be mapped in ElasticSearch as a numeric field")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("onlyNotEmpty")]),t._v(" - (bool) load only the categories that contain any products")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getters","aria-hidden":"true"}},[this._v("#")]),this._v(" Getters")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getters "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  current"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  list"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="category-store.md";e.default=r.exports}}]);