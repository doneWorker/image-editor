(this["webpackJsonpimage-editor"]=this["webpackJsonpimage-editor"]||[]).push([[0],{16:function(e,t,n){},25:function(e,t){},26:function(e,t){},27:function(e,t){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(9),i=n.n(a),r=(n(16),n(3)),l=n(6),s=n(11),d=n(8),u=n.n(d),b=n(1),j=function(e){var t=e.onUpload;return Object(b.jsx)(s.a,{onDrop:function(e){return t(e[0])},accept:"image/*",minSize:1024,maxSize:3072e3,maxFiles:1,children:function(e){var t=e.getRootProps,n=e.getInputProps;return Object(b.jsxs)("div",Object(l.a)(Object(l.a)({className:u.a.dropZone},t()),{},{children:[Object(b.jsx)("input",Object(l.a)({type:"file"},n())),Object(b.jsx)("div",{className:u.a.dropIcon,children:"\ud83d\udcc1"}),Object(b.jsx)("h2",{children:"Please drop your image here "})]}))}})},h=n(4),p=n(5),g=n.n(p),f=function(e){var t=e.image,n=Object(c.useState)(null),o=Object(r.a)(n,2),a=o[0],i=o[1],l=Object(c.useState)(null),s=Object(r.a)(l,2),d=s[0],u=s[1],j=Object(c.useState)(null),p=Object(r.a)(j,2),f=p[0],O=p[1],v=Object(c.useState)(null),m=Object(r.a)(v,2),x=m[0],w=m[1];return Object(c.useEffect)((function(){var e=new h.fabric.Canvas("canvas",{width:1e3,height:600,backgroundColor:"white"}),t=new h.fabric.Rect,n=new h.fabric.Rect({id:"crop-helper",fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,.2)",strokeWidth:1,selectable:!1});e.add(n),i(e),u(t),O(n),e.clipPath=t,e.controlsAboveOverlay=!0,e.on("object:scaling",(function(e){"img"===e.target.id&&(e.target.scaleY=e.target.scaleX)}));var c=function(e){var n=e.target.getBoundingRect();"crop-helper"===e.target.id&&t.set({width:n.width,height:n.height,left:n.left,top:n.top})};e.on("object:moving",c),e.on("object:scaling",c)}),[]),Object(c.useEffect)((function(){if(null!==t&&null!==a){var e=new h.fabric.Image(t,{id:"img",lockSkewingY:!0,lockRotation:!0}),n={width:e.width,height:e.height};d.set(n),f.set(n),a.add(e),a.centerObject(e),a.centerObject(d),a.centerObject(f),w(e)}}),[t,a,d,f]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("ul",{className:g.a.tips,children:[Object(b.jsx)("li",{children:"Drag - to move image inside crop area"}),Object(b.jsx)("li",{children:"DoubleClick - to change crop area"})]}),Object(b.jsx)("div",{id:"canvas-holder",className:g.a.canvasHolder,onDoubleClick:function(){var e=a.getActiveObject();if(e){var t="crop-helper"===e.id?x:f;a.discardActiveObject(),a.setActiveObject(t),a.requestRenderAll()}},children:Object(b.jsx)("canvas",{id:"canvas"})}),Object(b.jsx)("button",{onClick:function(){var e=f.getBoundingRect(),t=a.toDataURL({width:e.width,height:e.height,left:e.left,top:e.top,format:"png"}),n=document.createElement("a");n.download="image.png",n.href=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)},className:g.a.exportBtn,children:"export as png"})]})},O=(n(28),"upload");var v=function(){var e=Object(c.useState)(O),t=Object(r.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(null),i=Object(r.a)(a,2),l=i[0],s=i[1];return Object(b.jsx)("div",{className:"App",children:n===O?Object(b.jsx)(j,{onUpload:function(e){var t=URL.createObjectURL(e),n=new Image;n.src=t,n.onload=function(){return s(n)},o("editor")}}):Object(b.jsx)(f,{image:l})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),m()},5:function(e,t,n){e.exports={tips:"Editor_tips__2MY9q",canvasHolder:"Editor_canvasHolder__1EAVo",exportBtn:"Editor_exportBtn__htYV0"}},8:function(e,t,n){e.exports={dropZone:"DropZone_dropZone__Nhuy6",dropIcon:"DropZone_dropIcon__2MXoI"}}},[[29,1,2]]]);
//# sourceMappingURL=main.fa4e8e6a.chunk.js.map