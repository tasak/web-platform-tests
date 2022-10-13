// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.cap.open
// Description:Line caps are drawn at the corners of an unclosed rectangle
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Line caps are drawn at the corners of an unclosed rectangle");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.lineJoin = 'bevel';
ctx.lineCap = 'square';
ctx.lineWidth = 400;
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 1000);
ctx.lineTo(1000, 1000);
ctx.lineTo(1000, 200);
ctx.lineTo(200, 200);
ctx.stroke();
_assertPixel(canvas, 1,1, 0,255,0,255);
_assertPixel(canvas, 48,1, 0,255,0,255);
_assertPixel(canvas, 48,48, 0,255,0,255);
_assertPixel(canvas, 1,48, 0,255,0,255);
t.done();

});
done();
