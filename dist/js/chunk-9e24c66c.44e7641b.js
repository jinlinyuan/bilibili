(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e24c66c"],{"0fed":function(t,e,n){"use strict";var i=n("aac7"),c=n.n(i);c.a},"1dde":function(t,e,n){var i=n("d039"),c=n("b622"),s=n("2d00"),a=c("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2198:function(t,e,n){"use strict";var i=n("f5f5"),c=n.n(i);c.a},"330c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.detailitem?n("div",{on:{click:t.pathPush}},[n("div",{staticClass:"detailItem"},[n("div",{staticClass:"imgparent"},[n("img",{staticStyle:{width:"100%",height:"27.778vw"},attrs:{src:t.detailitem.img,alt:""}}),n("div",{staticClass:"bottom"},[t._m(0),n("div",{staticClass:"icon-file-text"},[n("span",{staticClass:"comment"},[t._v(t._s(t.detailitem.commentlen?t.detailitem.commentlen:66))])])])]),n("p",[t._v(t._s(t.detailitem.name))])])]):t._e()},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-play2"},[n("span",{staticClass:"video"},[t._v("1233")])])}],s={props:["detailitem"],methods:{pathPush:function(){this.$route.path!="/article/".concat(this.detailitem.id)&&this.$router.push("/article/".concat(this.detailitem.id))}}},a=s,r=(n("5a3b"),n("2877")),o=Object(r["a"])(a,i,c,!1,null,"2cb16dd2",null);e["a"]=o.exports},"3ad6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.model?n("div",[n("nav-bar"),n("div",{staticClass:"detailinfo"},[n("div",{staticClass:"video"},[n("video",{attrs:{controls:"controls",src:t.model.content}})]),n("div",{staticClass:"detailinfoText"},[n("div",[n("span",[t._v(t._s(t.model.category.title))]),n("span",[t._v(t._s(t.model.name))])]),n("div",[n("span",[t._v(t._s(t.model.userinfo.name))]),n("span",[t._v("146.4万次观看")]),n("span",[t._v("5281弹幕")]),n("span",[t._v(t._s(t.model.date))])]),n("div",[n("p",{class:{activeColor:t.collectionActive},on:{click:t.collectionClick}},[n("span",{staticClass:"icon-star-full"}),n("span",[t._v("收藏")])]),n("p",{class:{activeColor:t.subscritionActive},on:{click:t.subscriptClick}},[n("span",{staticClass:"icon-bubble"}),n("span",[t._v("关注")])]),t._m(0)])]),n("div",{staticClass:"detailparent"},t._l(t.commendList,(function(t,e){return n("cover",{key:e,staticClass:"detailitem",attrs:{detailitem:t}})})),1),n("comment-title",{ref:"commentIpt",attrs:{dataLength:t.lens},on:{Postcomment:t.PostSuccess}}),n("comment",{ref:"commentPulish",on:{lengthselect:function(e){return t.lens=e},publishClick:t.PostChildClick}})],1)],1):t._e()},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"icon-redo2"}),n("span",[t._v("分享")])])}],s=(n("99af"),n("96cf"),n("1da1")),a=n("7106"),r=n("330c"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment"},[i("p",{staticClass:"comment-title"},[i("span",[t._v("评论")]),i("span",[t._v("("+t._s(t.dataLength)+")")])]),i("div",{staticClass:"commentMyinfo"},[t.myuser?i("img",{attrs:{src:t.myuser.user_img,alt:""}}):i("img",{attrs:{src:n("5e16"),alt:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.comcontent,expression:"comcontent"}],ref:"Postipt",attrs:{type:"text",placeholder:"说点什么吧"},domProps:{value:t.comcontent},on:{input:function(e){e.target.composing||(t.comcontent=e.target.value)}}}),i("button",{on:{click:t.cmmentPublish}},[t._v("发表")])])])},m=[],l={props:["dataLength"],data:function(){return{myuser:null,comcontent:""}},methods:{myUserinfo:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/user/"+localStorage.getItem("id"));case 2:n=e.sent,t.myuser=n.data[0];case 4:case"end":return e.stop()}}),e)})))()},cmmentPublish:function(){this.myuser||localStorage.getItem("token")||localStorage.getItem("id")?(this.$emit("Postcomment",this.comcontent),this.comcontent=""):this.$msg.fail("请先登录")},focusIpt:function(){this.$refs.Postipt.focus()}},created:function(){localStorage.getItem("token")&&this.myUserinfo()}},u=l,d=(n("2198"),n("2877")),p=Object(d["a"])(u,o,m,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"commentParent"},t._l(t.commentList,(function(e,c){return i("div",{key:c},[i("div",{staticClass:"commentItem"},[i("div",{staticClass:"userImg"},[e.userinfo&&e.userinfo.user_img?i("img",{attrs:{src:e.userinfo.user_img,alt:""}}):i("img",{attrs:{src:n("5e16"),alt:""}})]),i("div",{staticClass:"commentContent"},[i("p",[e.userinfo?i("span",[t._v(t._s(e.userinfo.name))]):i("span",[t._v("此用户无姓名")]),i("span",[t._v(t._s(e.comment_date))])]),i("div",[t._v(" "+t._s(e.comment_content)+" "),i("span",{staticClass:"publishs",on:{click:function(n){return t.publishClick(e.comment_id)}}},[t._v("回复")])])])]),i("div",{staticStyle:{"padding-left":"8.333vw"}},[i("comment-item",{attrs:{commentChild:e.child},on:{PostPublish:t.publishClick}})],1)])})),0)},h=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"commentitems"},t._l(t.commentChild,(function(e,c){return i("div",{key:c,staticClass:"commentItem"},[i("div",{staticClass:"userImg"},[e.userinfo&&e.userinfo.user_img?i("img",{attrs:{src:e.userinfo.user_img,alt:""}}):i("img",{attrs:{src:n("5e16"),alt:""}}),i("p",[e.userinfo?i("span",[t._v(t._s(e.userinfo.name))]):i("span",[t._v("此用户无姓名")]),i("span",[t._v(t._s(e.comment_date))])])]),i("div",{staticClass:"commentContent"},[t.temp?i("div",[t._v("回复 "),i("span",{staticStyle:{color:"#478ef0"}},[t._v(t._s(e.parent_user_info.name))]),t._v(" :"+t._s(e.comment_content)),i("span",{staticClass:"publish",on:{click:function(n){return t.PostItemcomment(e.comment_id)}}},[t._v("回复")])]):i("div",[t._v(t._s(e.comment_content)+" "),i("span",{staticClass:"publish",on:{click:function(n){return t.PostItemcomment(e.comment_id)}}},[t._v("回复")])])]),i("commentchild-item",{attrs:{commentChild:e.child,temp:!0},on:{postChild:t.postChild}})],1)})),0)},g=[],b={name:"commentchildItem",props:["commentChild","temp"],methods:{PostItemcomment:function(t){this.$emit("postChild",t),this.$emit("PostPublish",t)},postChild:function(t){this.PostItemcomment(t),this.$emit("PostPublish",t)}}},C=b,k=(n("b108"),Object(d["a"])(C,_,g,!1,null,null,null)),w=k.exports,x={data:function(){return{commentList:null}},components:{commentItem:w},methods:{commentData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/comment/"+t.$route.params.id);case 2:n=e.sent,n.data&&t.$emit("lengthselect",n.data.length),t.commentList=t.changeCommentData(n.data);case 5:case"end":return e.stop()}}),e)})))()},changeCommentData:function(t){function e(n){for(var i=[],c=0;c<t.length;c++)t[c].parent_id==n&&(i.push(t[c]),t[c].child=e(t[c].comment_id));return i}return e(null)},publishClick:function(t){this.$emit("publishClick",t)}},created:function(){this.commentData()}},$=x,I=(n("e320"),Object(d["a"])($,v,h,!1,null,null,null)),P=I.exports,y={data:function(){return{model:null,commendList:null,lens:null,Postcom:{comment_content:"",comment_date:"",parent_id:null,article_id:null},collectionActive:null,subscritionActive:null}},components:{NavBar:a["a"],cover:r["a"],commentTitle:f,comment:P},methods:{articleitemData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/article/"+t.$route.params.id);case 2:n=e.sent,t.model=n.data[0],t.model&&t.subscritionInit();case 5:case"end":return e.stop()}}),e)})))()},commendData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/commend");case 2:n=e.sent,t.commendList=n.data;case 4:case"end":return e.stop()}}),e)})))()},PostSuccess:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i,c,s,a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=new Date,c=i.getMonth()+1,s=i.getDate(),c<10&&(c="0"+c),s<10&&(s="0"+s),a="".concat(c,"-").concat(s),e.Postcom.comment_content=t,e.Postcom.comment_date=a,e.Postcom.article_id=e.$route.params.id,n.next=11,e.$http.post("/comment_post/"+localStorage.getItem("id"),e.Postcom);case 11:r=n.sent,e.$refs.commentPulish.commentData(),e.Postcom.parent_id=null,200==r.status&&e.$msg.fail("评论发表成功");case 15:case"end":return n.stop()}}),n)})))()},PostChildClick:function(t){this.Postcom.parent_id=t,this.$refs.commentIpt.focusIpt()},collectionClick:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem("token")){e.next=6;break}return e.next=3,t.$http.post("/collection/"+localStorage.getItem("id"),{article_id:t.$route.params.id});case 3:n=e.sent,"收藏成功"==n.data.msg?t.collectionActive=!0:t.collectionActive=!1,t.$msg.fail(n.data.msg);case 6:case"end":return e.stop()}}),e)})))()},collectionInit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem("token")){e.next=5;break}return e.next=3,t.$http.get("/collection/"+localStorage.getItem("id"),{params:{article_id:t.$route.params.id}});case 3:n=e.sent,t.collectionActive=n.data.success;case 5:case"end":return e.stop()}}),e)})))()},subscriptClick:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem("token")){e.next=6;break}return e.next=3,t.$http.post("/sub_scription/"+localStorage.getItem("id"),{sub_id:t.model.userid});case 3:n=e.sent,"关注成功"==n.data.msg?t.subscritionActive=!0:t.subscritionActive=!1,t.$msg.fail(n.data.msg);case 6:case"end":return e.stop()}}),e)})))()},subscritionInit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem("token")){e.next=5;break}return e.next=3,t.$http.get("/sub_scription/"+localStorage.getItem("id"),{params:{sub_id:t.model.userid}});case 3:n=e.sent,t.subscritionActive=n.data.success;case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.articleitemData(),this.commendData(),this.collectionInit()},watch:{$route:function(){this.articleitemData(),this.commendData(),this.collectionInit()}}},S=y,R=(n("0fed"),Object(d["a"])(S,i,c,!1,null,null,null));e["default"]=R.exports},"5a00":function(t,e,n){},"5a3b":function(t,e,n){"use strict";var i=n("e66c"),c=n.n(i);c.a},"65f0":function(t,e,n){var i=n("861d"),c=n("e8b5"),s=n("b622"),a=s("species");t.exports=function(t,e){var n;return c(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var i=n("c04e"),c=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var a=i(e);a in t?c.f(t,a,s(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var i=n("23e7"),c=n("d039"),s=n("e8b5"),a=n("861d"),r=n("7b0b"),o=n("50c4"),m=n("8418"),l=n("65f0"),u=n("1dde"),d=n("b622"),p=n("2d00"),f=d("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",_=p>=51||!c((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=u("concat"),b=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:s(t)},C=!_||!g;i({target:"Array",proto:!0,forced:C},{concat:function(t){var e,n,i,c,s,a=r(this),u=l(a,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(s=-1===e?a:arguments[e],b(s)){if(c=o(s.length),d+c>v)throw TypeError(h);for(n=0;n<c;n++,d++)n in s&&m(u,d,s[n])}else{if(d>=v)throw TypeError(h);m(u,d++,s)}return u.length=d,u}})},aac7:function(t,e,n){},b108:function(t,e,n){"use strict";var i=n("e476"),c=n.n(i);c.a},e320:function(t,e,n){"use strict";var i=n("5a00"),c=n.n(i);c.a},e476:function(t,e,n){},e66c:function(t,e,n){},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},f5f5:function(t,e,n){}}]);
//# sourceMappingURL=chunk-9e24c66c.44e7641b.js.map