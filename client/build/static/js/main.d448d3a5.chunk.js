(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(7),i=a.n(o),c=(a(17),a(4)),r=a(3),l=a(5),u=a(1),h=a(2),d=(a(18),[{blockid:"0",blockname:"1",imagesrc:"#ffffff"},{blockid:"1",blockname:"2",imagesrc:"#d1e7dc"},{blockid:"2",blockname:"3",imagesrc:"#c4d4e1"},{blockid:"3",blockname:"4",imagesrc:"#bcb5d3"},{blockid:"4",blockname:"5",imagesrc:"#f5dbe2"},{blockid:"5",blockname:"6",imagesrc:"#eeb6c9"},{blockid:"6",blockname:"7",imagesrc:"#c49abf"},{blockid:"7",blockname:"8",imagesrc:"#bada55"},{blockid:"8",blockname:"9",imagesrc:"#ffd700"},{blockid:"9",blockname:"10",imagesrc:"#f47b79"},{blockid:"a",blockname:"11",imagesrc:"#c6e2d4"},{blockid:"b",blockname:"12",imagesrc:"#b6d3c2"},{blockid:"c",blockname:"13",imagesrc:"#e0b1cb"},{blockid:"d",blockname:"14",imagesrc:"#d0a7b7"},{blockid:"e",blockname:"15",imagesrc:"#f3d1d3"},{blockid:"f",blockname:"16",imagesrc:"#e9b8c8"}]);function f(e,t,a,n,s){var o=a-e,i=n-t,c=1;i<0&&(c=-1,i=-i);for(var r=2*i-o,l=t,u=e;u<a+1;u++)s(u,l),r>0?(l+=c,r+=2*(i-o)):r+=2*i}function m(e,t,a,n,s){var o=a-e,i=n-t,c=1;o<0&&(c=-1,o=-o);for(var r=2*o-i,l=e,u=t;u<n+1;u++)s(l,u),r>0?(l+=c,r+=2*(o-i)):r+=2*o}var g=function(){function e(t,a){Object(u.a)(this,e),this.x=t,this.y=a}return Object(h.a)(e,[{key:"transform",value:function(e,t){this.x+=e,this.y+=t}},{key:"setTo",value:function(e,t){this.x=e,this.y=t}},{key:"isEqualTo",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"notEqualTo",value:function(e){return this.x!==e.x||this.y!==e.y}},{key:"positive",value:function(){return this.x>=0&&this.y>=0}},{key:"multipliedby",value:function(t){return new e(this.x*t,this.y*t)}},{key:"transformedby",value:function(t,a){return new e(this.x+t,this.y+a)}}]),e}(),p=function(){function e(t,a){Object(u.a)(this,e),this.canvasdimensions=new g(t,a),this.data=null,this.dataview=null,this.numchunks=null}return Object(h.a)(e,[{key:"getValues",value:function(e,t){var a=16*t,n=new g(0,0),s=new g(0,0);return s.x=0===e.x?0:Math.floor(-1*e.x/a),s.y=0===e.y?0:Math.floor(-1*e.y/a),n.x=Math.ceil(this.canvasdimensions.x/a)+1,n.y=Math.ceil(this.canvasdimensions.y/a)+1,{startpoint:s,numchunks:n}}},{key:"setMatrix",value:function(e,t,a){for(var n=[],s=this,o=0;o<e.x;o++)for(var i=0;i<e.y;i++){var c={x:t.x+o,y:t.y+i};n.push(c)}return new Promise(function(t,o){fetch("/getchunks",{method:"POST",headers:{Accept:"application/octet-stream","Content-Type":"application/json"},body:JSON.stringify({coords:n,lines:a})}).then(function(e){return e.arrayBuffer()}).then(function(a){s.data=a,s.dataview=new Uint32Array(s.data),s.numchunks=e,t()})})}},{key:"getChunkPosOffset",value:function(e,t){var a=Math.floor(e.x/16)-t.x,n=e.x-16*(a+t.x),s=Math.floor(e.y/16)-t.y;return{cell_i:a,cell_j:s,cell_k:n,cell_l:e.y-16*(s+t.y)}}},{key:"addCell",value:function(e,t){this.dataview[e]=t}}]),e}(),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={tool_mode:0,debug_mode:!1,show_stats:!0,color_selected:65025,update:{time:0,tot_time:0,num_updates:1},draw:{time:0,tot_time:0,num_updates:1},cursorx:0,cursory:0,offsetx:0,offsety:0,chunkx:0,chunky:0},a.getColorSelected=function(){return a.state.color_selected},a.getDebugMode=function(){return a.state.debug_mode},a.getToolMode=function(){return a.state.tool_mode},a.changeColor=function(e){if("string"===typeof e){var t=parseInt(e.substring(1),16);console.log(e.substring(1)),console.log(t),a.setState({color_selected:t})}else"number"===typeof e&&a.setState({color_selected:e})},a.isSelected=function(e){return"string"===typeof e?parseInt(e.substring(1),16)===a.state.color_selected:"number"===typeof e?e===a.state.color_selected:void 0},a.changeUpdateTime=function(e){a.setState({update:{time:e,tot_time:a.state.update.tot_time+e,num_updates:a.state.update.num_updates+1}})},a.changeDrawTime=function(e){a.setState({draw:{time:e,tot_time:a.state.draw.tot_time+e,num_updates:a.state.draw.num_updates+1}})},a.changeCursorLoc=function(e){a.setState({cursorx:e.x,cursory:e.y})},a.changeOffsetLoc=function(e){a.setState({offsetx:e.x,offsety:e.y})},a.changeChunkLoc=function(e,t){a.setState({chunkx:e,chunky:t})},a}return Object(l.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){document.body.style.overflow="hidden"}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App-wrapper"},s.a.createElement(b,{getToolMode:this.getToolMode,getDebugMode:this.getDebugMode,changeUpdateTime:this.changeUpdateTime,changeDrawTime:this.changeDrawTime,getColorSelected:this.getColorSelected,changeCursorLoc:this.changeCursorLoc,changeOffsetLoc:this.changeOffsetLoc,changeChunkLoc:this.changeChunkLoc}),s.a.createElement(y,{isSelected:this.isSelected,changeColor:this.changeColor}),s.a.createElement("div",{className:"drawer primary"},this.state.show_stats?s.a.createElement("div",{style:{position:"absolute",right:"0.8vw"}},"(",this.state.update.time,"ms, avg: ",Math.round(this.state.update.tot_time/this.state.update.num_updates),"ms, ",this.state.update.num_updates," updates)",s.a.createElement("br",null),"(",this.state.draw.time,"ms, avg: ",Math.round(this.state.draw.tot_time/this.state.draw.num_updates),"ms, ",this.state.draw.num_updates," draws)",s.a.createElement("br",null),"Cursor: (",this.state.cursorx,",",this.state.cursory,")",s.a.createElement("br",null),"Offset: (",this.state.offsetx,",",this.state.offsety,")",s.a.createElement("br",null),"Chunk: (",this.state.chunkx,",",this.state.chunky,")"):null,s.a.createElement("b",null,"Instructions:"),s.a.createElement("br",null),"This is a pixel art canvas with infinite area. Scroll to zoom in and out, right click to pan around, and use left click to draw on the canvas.",s.a.createElement("br",null),"Use the palette on the right to select your colour.",s.a.createElement("div",{style:{color:"#909090"}},"(!!!!) Be aware that there is no saving yet lol, also this is just a prototype so limited colours, no drawing tools etc."),s.a.createElement("input",{type:"checkbox",onChange:function(){e.setState({debug_mode:!e.state.debug_mode})}})," Debug Mode\u2002",s.a.createElement("input",{checked:this.state.show_stats,type:"checkbox",onChange:function(){e.setState({show_stats:!e.state.show_stats})}})," Stats"))}}]),t}(s.a.Component),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).getDebugMode=e.getDebugMode,a.getColorSelected=e.getColorSelected,a.changeUpdateTime=e.changeUpdateTime,a.changeDrawTime=e.changeDrawTime,a.changeCursorLoc=e.changeCursorLoc,a.changeOffsetLoc=e.changeOffsetLoc,a.changeChunkLoc=e.changeChunkLoc,a.drawLines=[],a.scale=16,a.tempscale=a.scale,a.map_grid=null,a.canvasRef=Object(n.createRef)(),a.mapoffset=new g(0,0),a.celloffset=new g(0,0),a.currentcell=new g(0,0),a.startpoint=new g(0,0),a.cursorcurrent=new g(0,0),a.lmousedown=!1,a.rmousedown=!1,a.canvas=null,a}return Object(l.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.canvas=this.canvasRef.current;var e=this.canvas.getBoundingClientRect(),t=e.width,a=e.height;this.map_grid=new p(t,a),setTimeout(this.updateCanvas(),1e3)}},{key:"getCursorPosition",value:function(e,t){var a=t.getBoundingClientRect(),n=e.clientX-a.left,s=e.clientY-a.top;return new g(n,s)}},{key:"getCurrentCell",value:function(){var e=Math.floor((this.cursorcurrent.x-this.mapoffset.x*this.scale)/this.scale),t=Math.floor((this.cursorcurrent.y-this.mapoffset.y*this.scale)/this.scale);return new g(e,t)}},{key:"moveMap",value:function(e,t){var a=(t.x-e.x)/this.scale,n=(t.y-e.y)/this.scale;this.mapoffset.transform(a,n),this.celloffset.setTo(Math.floor(this.mapoffset.x),Math.floor(this.mapoffset.y)),this.changeOffsetLoc(this.celloffset)}},{key:"drawMap",value:function(e,t){var a=this,n=Date.now();this.resizeCanvas(e);var s=e.getContext("2d");s.clearRect(0,0,e.width,e.height),s.fillStyle="#ffffff",s.fillRect(0,0,e.width,e.height);var o,i,c,r=this.map_grid.getChunkPosOffset(this.currentcell,t),l=r.cell_i,u=r.cell_j,h=r.cell_k,d=r.cell_l,f=Math.round(this.mapoffset.x),m=Math.round(this.mapoffset.y),g=function(e,n,o,r){i=(16*(e+t.x)+o+f)*a.scale,c=(16*(n+t.y)+r+m)*a.scale,i%1===0&&c%1===0&&a.scale%1===0||console.log("ALERT:",i,c,a.scale),s.fillRect(i,c,a.scale,a.scale)};if(null!==this.map_grid.data){var p=0,v=new Uint32Array(this.map_grid.data);this.getDebugMode()&&s.beginPath();for(var b=0;b<this.map_grid.numchunks.x;b++)for(var y=0;y<this.map_grid.numchunks.y;y++){this.getDebugMode()&&(i=(16*(b+t.x)+f)*this.scale,c=(16*(y+t.y)+m)*this.scale,s.fillStyle="#000000",s.lineWidth=.01*Math.floor(this.scale),s.moveTo(i,0),s.lineTo(i,this.canvas.height/2),s.moveTo(0,c),s.lineTo(this.canvas.width/2,c));for(var k=0;k<256;k++){var w=Math.floor(k/16),C=k-16*w;16777215!==(o=v[p+k])&&(s.fillStyle="#"+(16777215&o).toString(16).padStart(6,"0"),g(b,y,w,C))}p+=256}this.getDebugMode()&&s.stroke(),s.fillStyle="#"+(16777215&this.getColorSelected()).toString(16).padStart(6,"0")+"ff",g(l,u,h,d),this.changeDrawTime(Date.now()-n)}}},{key:"updateCanvas",value:function(){var e=this,t=Date.now(),a=this.map_grid.getValues(this.mapoffset.multipliedby(this.scale),this.scale),n=a.startpoint,s=a.numchunks,o=this.drawLines;this.drawLines=[],this.map_grid.setMatrix(s,n,o).then(function(){e.drawMap(e.canvas,n),e.startpoint=n,e.changeUpdateTime(Date.now()-t)}),setTimeout(function(){e.updateCanvas()},1e3)}},{key:"resizeCanvas",value:function(e){var t=e.getBoundingClientRect(),a=t.width,n=t.height;if(e.width!==a||e.height!==n){var s=window.devicePixelRatio,o=void 0===s?1:s,i=e.getContext("2d");return e.width=Math.floor(1*a*o/this.scale)*this.scale,e.height=Math.floor(1*n*o/this.scale)*this.scale,i.scale(o,o),!0}return!1}},{key:"drawCellAtMouse",value:function(e,t){var a=new g(e-this.celloffset.x,t-this.celloffset.y),n=this.map_grid.getChunkPosOffset(a,this.startpoint),s=n.cell_i,o=n.cell_j,i=n.cell_k,c=n.cell_l,r=s*this.map_grid.numchunks.y*256+256*o+16*i+c;r<this.map_grid.data.byteLength/4&&this.map_grid.addCell(r,this.getColorSelected())}},{key:"moveCursor",value:function(e){var t=!1,a=this.getCursorPosition(e,this.canvas);this.rmousedown&&(this.moveMap(this.cursorcurrent,a),t=!0),this.cursorcurrent=a;var n=this.getCurrentCell();if(!this.currentcell.isEqualTo(n)){this.lmousedown&&this.drawLine(this.currentcell,n),this.currentcell=n;var s=this.map_grid.getChunkPosOffset(this.currentcell,this.startpoint),o=s.cell_i,i=s.cell_j;s.cell_k,s.cell_l;this.changeCursorLoc(this.currentcell),this.changeChunkLoc(o+this.startpoint.x,i+this.startpoint.y),t=!0}return t}},{key:"drawLine",value:function(e,t){var a=this;!function(e,t,a,n){var s=e.x+a.x,o=e.y+a.y,i=t.x+a.x,c=t.y+a.y;s===i&&o===c&&n(s,o),Math.abs(c-o)<Math.abs(i-s)?s>i?f(i,c,s,o,n):f(s,o,i,c,n):o>c?m(i,c,s,o,n):m(s,o,i,c,n)}(e,t,this.celloffset,function(e,t){return a.drawCellAtMouse(e,t)}),this.drawLines.push({p1:e,p2:t,offset:this.celloffset,blockid:this.getColorSelected()})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("canvas",{ref:this.canvasRef,className:"map-canvas primary",onContextMenu:function(e){e.preventDefault()},onMouseDown:function(t){t.preventDefault(),0===t.button?(e.lmousedown=!0,e.drawLine(e.currentcell,e.currentcell),e.drawMap(e.canvas,e.startpoint)):2===t.button&&(e.rmousedown=!0)},onMouseUp:function(t){e.lmousedown=!1,e.rmousedown=!1,e.drawMap(e.canvas,e.startpoint)},onMouseMove:function(t){e.moveCursor(t)&&e.drawMap(e.canvas,e.startpoint)},onMouseLeave:function(t){e.moveCursor(t),e.lmousedown=!1,e.rmousedown=!1,e.drawMap(e.canvas,e.startpoint)},onWheel:function(t){t.preventDefault();var a=e.tempscale-Math.round(t.deltaY)/1e3;console.log(e.scale,e.tempscale),e.tempscale=a>5?a:5,e.scale=Math.round(e.tempscale),e.drawMap(e.canvas,e.startpoint)}}))}}]),t}(s.a.Component),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).changeColor=e.changeColor,a.handleChange=function(e){a.changeColor(e.target.value)},a}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"palette primary"},d.map(function(t){return s.a.createElement("div",{key:t.blockid,style:{backgroundColor:"".concat(t.imagesrc)},className:"blockbutton"+(e.props.isSelected(t.imagesrc)?"selected":""),onClick:function(){e.changeColor(t.imagesrc)}})}),s.a.createElement("input",{type:"color",onChange:this.handleChange}))}}]),t}(s.a.Component);var k=function(){return s.a.createElement(v,null)},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then(function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null))),w()},8:function(e,t,a){e.exports=a(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.d448d3a5.chunk.js.map