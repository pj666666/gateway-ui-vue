(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217c8a"],{c7cc:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("server-form",{attrs:{"show-type":"update",editItem:t.item},on:{"update:editItem":function(e){t.item=e},"update:edit-item":function(e){t.item=e}}})],1)},r=[],c=(i("7f7f"),i("3d3e")),s=i("aa22"),u="serverEdit",a={name:u,data:function(){return{id:"",clusterId:"",item:{}}},components:{ServerForm:c["a"]},created:function(){this.init()},watch:{$route:function(t,e){t.name!=u&&this.$destroy()}},methods:{init:function(){var t=this;this.id=this.$route.query.id,this.clusterId=this.$route.query.clusterId;var e=this.id;e&&s["b"](e).then(function(e){e=e||{},t.clusterId&&(e.bindClusterId=parseInt(t.clusterId,10)),t.item=e})}}},d=a,o=i("0c7c"),h=Object(o["a"])(d,n,r,!1,null,"72c7ebc2",null);e["default"]=h.exports}}]);