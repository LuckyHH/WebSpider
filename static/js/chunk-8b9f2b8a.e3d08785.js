(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b9f2b8a"],{"201b":function(t,e,_){"use strict";var v=_("ef82"),n=_.n(v);n.a},"6b02":function(t,e,_){"use strict";var v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"guide"},[_("article",[_("h1",[t._v("WebSpider使用说明")]),_("h3",[t._v("1.爬取深度")]),_("p",[t._v("爬取深度指的是从初始网址经过几层到达数据所在网址。最大支持的爬取深度为3，推荐使用的最大爬取深度为2  ")]),_("h3",[t._v("2.网页编码")]),_("p",[t._v("目标网页的编码格式，默认为UTF-8。如果抓取到的数据是乱码，请切换网页编码")]),_("h3",[t._v("3.抓取模式")]),_("p",[t._v("普通模式与分页模式")]),_("h3",[t._v("4.页码范围")]),_("p",[t._v("在分页模式下，抓取的起止页码")]),_("h3",[t._v("5.目标网址")]),_("p",[t._v("目标网址即要爬取的目标网站的网址。")]),_("p",[t._v("普通模式下只需填写要抓取的网址即可。")]),_("p",[t._v("分页模式下:")]),_("p",[t._v("网址填写时，将网址中的页码改为*即可")]),_("p",[t._v("例如:")]),_("p",[t._v("CNode的分页网址")]),_("p",[_("code",[t._v("https://cnodejs.org/?tab=good&page=10")])]),_("p",[t._v("改为")]),_("p",[_("code",[t._v("https://cnodejs.org/?tab=good&page=*")])]),_("h3",[t._v("6.选择器")]),_("p",[t._v('选择器用来指出数据所在的位置，配合"输出结果定制"即可获得目标数据。填写需要用户具有基本的前端知识。')]),_("p",[t._v("这里为了描述方便，将标签选择器分为两种，一种是a标签选择器与数据标签选择器。(当然，如果你想要的数据在a标签中，那么a标签选择器就是数据标签选择器)")]),_("blockquote",[_("p",[t._v("当抓取深度为1，则一级选择器中填写数据选择器即可。")]),_("p",[t._v("当抓取深度为2，则一级选择器中填写到达第二层页面的a标签选择器，二级选择器填写数据标签选择器。")]),_("p",[t._v("当抓取深度为3，则一级选择器中填写到达第二层页面的a标签选择器，二级选择器中填写到达第三层页面的a标签选择器，三级选择器填写数据选择器即可。")])]),_("p",[t._v("填写示例:")]),_("p",[t._v("深度为2")]),_("p",[t._v("一级选择器:"),_("code",[t._v('$(".topic_title a")')])]),_("p",[t._v("二级选择器:"),_("code",[t._v('$(".topic .content")')])]),_("p",[_("code",[t._v('$(".topic_title a")')]),t._v("是指目标页面中所有类名为 topic_title 的元素中的a元素")]),_("p",[_("code",[t._v('$(".topic .content")')]),t._v("指的是目标页面中类名为 topic 的元素下的类名为 content 的子孙元素")]),_("p",[t._v('填写了两级选择器，说明目标数据在当前页面(即配置页面"目标网址"填写的网址)的下一层，则一级选择器需要指出到达下一层页面的a标签选择器。二级选择器填写的是下一层页面中的数据标签选择器')]),_("p",[t._v("更多选择器填写规则，参考"),_("a",{attrs:{href:"https://www.npmjs.com/package/cheerio"}},[t._v("cheerio")]),t._v("。")]),_("h3",[t._v("7.输出结果定制。")]),_("p",[t._v("输出结果定制指的是输出哪些结果。")]),_("p",[t._v("由标签选择器指出数据所在的位置后，还需要进一步使用标签选择器和属性选择器来获得数据。")]),_("p",[t._v("这里需要写成JSON格式，参考写法如下：")]),_("p",[_("code",[t._v('\n      {\n          "name":"$element.find(\'.c-9 .ml-20 a\').text()",\n          "age":"$element.children(\'.c-9\').next().text()"\n      }\n      ')])]),_("p",[t._v("键部分可以随意指定，值部分填写需要一定的规则。")]),_("p",[_("strong",[t._v("$element")]),t._v('是指"选择器"中填写的数据标签选择器。(结合"选择器"给出的示例，$element指的是$(".topic .content")）')]),_("p",[t._v('键为name的值指 "选择器"筛选出的元素下的类名为c-9的元素下的类名ml-20下的a元素中的文本')]),_("p",[t._v('键为age的值指 "选择器"筛选出的元素下的类名为c-9的元素下一个元素的文本内容')]),_("hr"),_("p",[t._v('值得注意的是，当你需要的数据种类只有1种，你完全可以在"选择器"中填写标签选择器时，直接将标签定位到目标元素，在"输出结果定制"中，填写属性选择器即可。')]),_("p",[t._v('但往往我们需要的数据种类不止一种，所以在填写"选择器"部分时，需要填写的数据标签选择器要将所有需要的数据包裹在内，所以甚至可以填写$("body")这样的数据选择器。在填写"输出结果定制"的值部分，需要填写一些选择器指明数据详细位置，最后使用属性选择器即可获得数据。')]),_("p",[t._v("同样结合上文给出的示例，")]),_("p",[t._v("如果我要想获得 'name' 值这一类数据，")]),_("p",[t._v('那么"选择器"可以这样写')]),_("p",[t._v("一级选择器:"),_("code",[t._v('$(".topic_title a")')])]),_("p",[t._v("二级选择器:"),_("code",[t._v('$(".topic .content .c-9 .ml-20 a")')])]),_("p",[t._v("'输出结果定制'可以这样写\n      "),_("code",[t._v('\n      {\n          "name":"$element.text()"\n      }\n      ')])]),_("p",[t._v("或者")]),_("p",[t._v("'选择器':")]),_("p",[t._v("一级选择器:"),_("code",[t._v('$(".topic_title a")')])]),_("p",[t._v("二级选择器:"),_("code",[t._v("$(\".topic\").find('.content .c-9 .ml-20 a')")])]),_("p",[t._v("'输出结果定制':\n      "),_("code",[t._v('\n      {\n          "name":"$element.text()"\n      }\n      ')])]),_("p",[t._v("或者")]),_("p",[t._v("'选择器':")]),_("p",[t._v("一级选择器:"),_("code",[t._v('$(".topic_title a")')])]),_("p",[t._v("二级选择器:"),_("code",[t._v('$(".topic")')])]),_("p",[t._v("'输出结果定制':\n      "),_("code",[t._v('\n      {\n          "name":"$element.find(\'.content .c-9 .ml-20 a\').text()",\n      }\n      ')])]),_("p",[t._v("或者")]),_("p",[t._v("'选择器':")]),_("p",[t._v("一级选择器:"),_("code",[t._v('$(".topic_title a")')])]),_("p",[t._v("二级选择器:"),_("code",[t._v('$("body")')])]),_("p",[t._v("'输出结果定制':\n      "),_("code",[t._v('\n      {\n          "name":"$element.find(\'.topic .content .c-9 .ml-20 a\').text()"\n      }\n      ')])]),_("p",[t._v("常用的属性选择器有text(),html(),attr()这三种")]),_("p",[t._v("text()选择的是目标元素中的文本内容")]),_("p",[t._v("html()选择的是目标元素的HTML代码")]),_("p",[t._v("attr()选择的是目标元素标签中的某个属性值。需要填写参数，比如$element.attr('url')指的是获取目标元素标签中的url属性值")]),_("h3",[t._v("8.代理模式")]),_("p",[t._v("即抓取数据是否需要使用HTTP代理。有3种模式，内置代理,无代理与自定义代理。")]),_("p",[t._v("内置代理使用"),_("a",{attrs:{href:"https://free-proxy-list.net/"}},[t._v("FreeProxyList")]),t._v("可用的代理地址发出请求。")]),_("p",[t._v("自定义代理模式需要用户自己填写可用代理。")]),_("p",[t._v("注:")]),_("p",[t._v("(1)自定义代理地址填写不符合正常IP地址的话，系统默认使用无代理模式。")]),_("p",[t._v("(2)代理质量参差不齐，所以可能响应失败。所以当响应失败时，请重新提交。")]),_("h3",[t._v("9.结果预览")]),_("p",[t._v("返回结果中")]),_("p",[t._v("state表示抓取状态，值为 true 或者 false ")]),_("p",[t._v("time值为数据的更新时间。")]),_("p",[t._v("data值为抓取结果，格式为数组。")]),_("p",[t._v("msg备注")]),_("h3",[t._v("10.生成API")]),_("p",[t._v("数据接口只在用户登录情况下生成。")]),_("h3",[t._v("11.更新间隔(后台管理配置项)")]),_("p",[t._v('两次API调用间隔时间如果在"更新间隔"时间段内，则直接调用数据库数据进行响应，否则将调用爬虫程序进行响应。所有初始生成的API默认更新间隔为0，表示不更新数据，直接从数据库读取数据。')]),_("p",[t._v('注意根据需求合理配置该项，"更新间隔"配置值较大或者为0，API平均响应速度快，但时效性较差；配置值较小，API平均响应速度慢，但时效性较好。')]),_("h3",[t._v("12.标签(后台管理配置项)")]),_("p",[t._v("API标签")]),_("h3",[t._v("13.开放权限(后台管理配置项)")]),_("p",[t._v('控制是否将API共享，即在"API Store"面板中看到')]),_("h3",[t._v("14.描述信息(后台管理配置项)")]),_("p",[t._v("API描述信息。返回哪些类别数据等等")])])])}];_.d(e,"a",function(){return v}),_.d(e,"b",function(){return n})},bbf8:function(t,e,_){"use strict";_.r(e);var v=_("bc05"),n=_.n(v);for(var p in v)"default"!==p&&function(t){_.d(e,t,function(){return v[t]})}(p);e["default"]=n.a},bc05:function(t,e){},ef82:function(t,e,_){},f908:function(t,e,_){"use strict";_.r(e);var v=_("6b02"),n=_("bbf8");for(var p in n)"default"!==p&&function(t){_.d(e,t,function(){return n[t]})}(p);_("201b");var c=_("2877"),o=Object(c["a"])(n["default"],v["a"],v["b"],!1,null,null,null);o.options.__file="Guide.vue",e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-8b9f2b8a.e3d08785.js.map