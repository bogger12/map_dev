(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),c=n.n(s),r=(n(17),n(4)),o=n(3),l=n(5),u=n(1),h=n(2),d=(n(19),[{blockid:0,blockname:"1",imagesrc:"#ffffff"},{blockid:1,blockname:"2",imagesrc:"#d1e7dc"},{blockid:2,blockname:"3",imagesrc:"#c4d4e1"},{blockid:3,blockname:"4",imagesrc:"#bcb5d3"},{blockid:4,blockname:"5",imagesrc:"#f5dbe2"},{blockid:5,blockname:"6",imagesrc:"#eeb6c9"},{blockid:6,blockname:"7",imagesrc:"#c49abf"},{blockid:7,blockname:"8",imagesrc:"#bada55"},{blockid:8,blockname:"9",imagesrc:"#ffd700"},{blockid:9,blockname:"10",imagesrc:"#f47b79"}]);function f(e,t,n,a,i){var s=n-e,c=a-t,r=1;c<0&&(r=-1,c=-c);for(var o=2*c-s,l=t,u=e;u<n+1;u++)i(u,l),o>0?(l+=r,o+=2*(c-s)):o+=2*c}function m(e,t,n,a,i){var s=n-e,c=a-t,r=1;s<0&&(r=-1,s=-s);for(var o=2*s-c,l=e,u=t;u<a+1;u++)i(l,u),o>0?(l+=r,o+=2*(s-c)):o+=2*s}var v=function(){function e(t,n){Object(u.a)(this,e),this.x=t,this.y=n}return Object(h.a)(e,[{key:"transform",value:function(e,t){this.x+=e,this.y+=t}},{key:"setTo",value:function(e,t){this.x=e,this.y=t}},{key:"isEqualTo",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"notEqualTo",value:function(e){return this.x!==e.x||this.y!==e.y}},{key:"positive",value:function(){return this.x>=0&&this.y>=0}}]),e}(),p=function(){function e(t,n,a){Object(u.a)(this,e),this.canvasdimensions=new v(t,n),this.chunksize=a,this.matrix=null,this.lastchunkrequesttime=null}return Object(h.a)(e,[{key:"getValues",value:function(e,t){var n=new v(0,0),a=new v(0,0);return a.x=0===e.x?0:Math.floor(-1*e.x/t),a.y=0===e.y?0:Math.floor(-1*e.y/t),n.x=Math.ceil(this.canvasdimensions.x/t)+1,n.y=Math.ceil(this.canvasdimensions.y/t)+1,{startpoint:a,numchunks:n}}},{key:"setMatrix",value:function(e,t,n){for(var a=[],i=Array(e.x),s=0;s<e.x;s++){i[s]=Array(e.y);for(var c=0;c<e.x;c++){var r={x:t.x+s,y:t.y+c};a.push(r)}}var o=this;return new Promise(function(s,c){fetch("/getchunks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({coords:a,lines:n})}).then(function(e){return e.json()}).then(function(n){for(var a=0;a<e.x;a++)for(var c=0;c<e.y;c++){var r=n["".concat(a+t.x,",").concat(c+t.y)];i[a][c]=void 0!==r?new k(o.chunksize,a+t.x,c+t.y,r.chunkdata.split("")):new k(o.chunksize,a+t.x,c+t.y)}o.matrix=i,s()})})}},{key:"getChunkPosOffset",value:function(e,t,n){var a=Math.floor(e.x/t)-n.x,i=e.x-(a+n.x)*t,s=Math.floor(e.y/t)-n.y;return{cell_i:a,cell_j:s,cell_k:i,cell_l:e.y-(s+n.y)*t}}}]),e}(),k=function(){function e(t,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];Object(u.a)(this,e),this.x=n,this.y=a,i.length?this.modified_cells=i:this.modified_cells=Array(t*t).fill("0")}return Object(h.a)(e,[{key:"addCell",value:function(e,t,n){this.modified_cells[16*e+t]=n,this.modified=!0}}]),e}(),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={block_selected:1,update_time:0,tot_update_time:0,num_updates:1,express_data:null},n.changeBlock=function(e){n.setState({block_selected:e})},n.getBlockSelected=function(){return n.state.block_selected},n.isSelected=function(e){return e===n.state.block_selected},n.changeUpdateTime=function(e){n.setState({update_time:e,tot_update_time:n.state.tot_update_time+e,num_updates:n.state.num_updates+1})},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){document.body.style.overflow="hidden",this.getData()}},{key:"getData",value:function(){var e=this;fetch("/api").then(function(e){return e.json()}).then(function(t){return e.setState({express_data:t.message})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App-wrapper"},i.a.createElement(y,{changeUpdateTime:this.changeUpdateTime,getBlockSelected:this.getBlockSelected}),i.a.createElement(b,{isSelected:this.isSelected,changeBlock:this.changeBlock}),i.a.createElement("div",{className:"drawer primary"},i.a.createElement("div",{style:{position:"absolute",right:"0.8vw"}},"(",this.state.update_time,"ms, avg: ",Math.round(this.state.tot_update_time/this.state.num_updates),"ms, ",this.state.num_updates," updates)",i.a.createElement("br",null),"Here is the express message: ".concat(this.state.express_data)),i.a.createElement("b",null,"Instructions:"),i.a.createElement("br",null),"This is a pixel art canvas with infinite area. Scroll to zoom in and out, right click to pan around, and use left click to draw on the canvas.",i.a.createElement("br",null),"Use the palette on the right to select your colour.",i.a.createElement("div",{style:{color:"#909090"}},"(!!!!) Be aware that there is no saving yet lol, also this is just a prototype so limited colours, no drawing tools etc.")))}}]),t}(i.a.Component),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).getBlockSelected=e.getBlockSelected,n.changeUpdateTime=e.changeUpdateTime,n.lastChunkFetchTime=0,n.lastDrawSendTime=0,n.drawLines=[],n.cellsize=8,n.scale=2,n.chunksize=16,n.map_grid=null,n.canvasRef=Object(a.createRef)(),n.mapoffset=new v(0,0),n.celloffset=new v(0,0),n.currentcell=new v(0,0),n.startpoint=new v(0,0),n.numchunks=new v(0,0),n.cursorcurrent=new v(0,0),n.lmousedown=!1,n.rmousedown=!1,n.canvas=null,n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.canvas=this.canvasRef.current;var t=this.canvas.getBoundingClientRect(),n=t.width,a=t.height;this.map_grid=new p(n,a,this.chunksize),this.chunkinterval=setInterval(function(){return e.updateCanvas(!0)},1e3)}},{key:"getCursorPosition",value:function(e,t){var n=t.getBoundingClientRect(),a=e.clientX-n.left,i=e.clientY-n.top;return new v(a,i)}},{key:"getCurrentCell",value:function(){var e=Math.floor((this.cursorcurrent.x-this.mapoffset.x)/(this.cellsize*this.scale)),t=Math.floor((this.cursorcurrent.y-this.mapoffset.y)/(this.cellsize*this.scale));return new v(e,t)}},{key:"moveMap",value:function(e,t){var n=t.x-e.x,a=t.y-e.y;this.mapoffset.transform(n,a),this.celloffset.setTo(Math.round(this.mapoffset.x),Math.round(this.mapoffset.y))}},{key:"drawMap",value:function(e,t){var n=this;this.resizeCanvas(e);var a=e.getContext("2d");a.clearRect(0,0,e.width,e.height),a.fillStyle="#ffffff",a.fillRect(0,0,e.width,e.height);var i,s,c,r=this.cellsize*this.scale,o=this.map_grid.getChunkPosOffset(this.currentcell,this.chunksize,t),l=o.cell_i,u=o.cell_j,h=o.cell_k,f=o.cell_l,m=function(e,i,o,l){s=((e+t.x)*n.chunksize+o)*r+n.mapoffset.x,c=((i+t.y)*n.chunksize+l)*r+n.mapoffset.y,a.fillRect(s,c,r,r)};if(null!==this.map_grid.matrix){for(var v=0;v<this.map_grid.matrix.length;v++)for(var p=0;p<this.map_grid.matrix[v].length;p++)for(var k=0;k<this.chunksize*this.chunksize;k++){var g=Math.floor(k/this.chunksize),y=k-g*this.chunksize;"undefined"!==typeof this.map_grid.matrix[v][p]&&("0"!==(i=this.map_grid.matrix[v][p].modified_cells[k])&&(a.fillStyle=d[i].imagesrc,m(v,p,g,y)))}a.fillStyle=d[this.getBlockSelected()].imagesrc+"8f",m(l,u,h,f)}}},{key:"updateCanvas",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Date.now();if(Date.now()>=this.lastChunkFetchTime+1e3){this.lastChunkFetchTime=Date.now();var a=this.map_grid.getValues(this.mapoffset,this.chunksize*this.cellsize*this.scale),i=a.startpoint,s=a.numchunks;if(t){var c=this.drawLines;this.drawLines=[],this.map_grid.setMatrix(s,i,c).then(function(){null!==e.map_grid.matrix&&e.drawMap(e.canvas,i),e.startpoint=i,e.numchunks=s,e.changeUpdateTime(Date.now()-n)})}else this.drawMap(this.canvas,i)}else this.drawMap(this.canvas,this.startpoint)}},{key:"resizeCanvas",value:function(e){var t=e.getBoundingClientRect(),n=t.width,a=t.height;if(e.width!==n||e.height!==a){var i=window.devicePixelRatio,s=void 0===i?1:i,c=e.getContext("2d");return e.width=n*s,e.height=a*s,c.scale(s,s),!0}return!1}},{key:"drawCellAtMouse",value:function(e,t){var n=new v(e-this.celloffset.x,t-this.celloffset.y),a=this.map_grid.getChunkPosOffset(n,this.chunksize,this.startpoint),i=a.cell_i,s=a.cell_j,c=a.cell_k,r=a.cell_l;this.map_grid.matrix[i][s].addCell(c,r,this.getBlockSelected())}},{key:"moveCursor",value:function(e){var t=!1,n=this.getCursorPosition(e,this.canvas);this.rmousedown&&(this.moveMap(this.cursorcurrent,n),t=!0),this.cursorcurrent=n;var a=this.getCurrentCell();return this.currentcell.isEqualTo(a)||(this.lmousedown&&this.drawLine(this.currentcell,a),this.currentcell=a,t=!0),t}},{key:"drawLine",value:function(e,t){var n=this;!function(e,t,n,a){var i=e.x+n.x,s=e.y+n.y,c=t.x+n.x,r=t.y+n.y;i===c&&s===r&&a(i,s),Math.abs(r-s)<Math.abs(c-i)?i>c?f(c,r,i,s,a):f(i,s,c,r,a):s>r?m(c,r,i,s,a):m(i,s,c,r,a)}(e,t,this.celloffset,function(e,t){return n.drawCellAtMouse(e,t)}),this.drawLines.push({p1:e,p2:t,offset:this.celloffset,blockid:this.getBlockSelected()})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("canvas",{ref:this.canvasRef,className:"map-canvas primary",onContextMenu:function(e){e.preventDefault()},onMouseDown:function(t){t.preventDefault(),0===t.button?(e.lmousedown=!0,e.drawLine(e.currentcell,e.currentcell),e.updateCanvas()):2===t.button&&(e.rmousedown=!0)},onMouseUp:function(t){e.lmousedown=!1,e.rmousedown=!1,e.updateCanvas()},onMouseMove:function(t){e.moveCursor(t)&&e.updateCanvas()},onMouseLeave:function(t){e.moveCursor(t),e.lmousedown=!1,e.rmousedown=!1,e.currentcell.setTo(-1,-1),e.updateCanvas()},onWheel:function(t){t.preventDefault();var n=e.scale-Math.round(t.deltaY)/100;e.scale=n>.5?n:.5,e.updateCanvas()}}))}}]),t}(i.a.Component),b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).changeBlock=e.changeBlock,n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"palette primary"},d.map(function(t){return i.a.createElement("div",{key:t.blockid,style:{backgroundColor:"".concat(t.imagesrc)},className:"blockbutton"+(e.props.isSelected(t.blockid)?"selected":""),onClick:function(){e.changeBlock(t.blockid)}})}))}}]),t}(i.a.Component);var w=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))},x=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,22)).then(function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null))),x()},8:function(e,t,n){e.exports=n(21)}},[[8,3,2]]]);
//# sourceMappingURL=main.78c61cc0.chunk.js.map