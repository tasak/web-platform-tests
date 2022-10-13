// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.strokeRect.negative
// Description:strokeRect of negative sizes works
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("strokeRect of negative sizes works");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#0f0';
ctx.lineWidth = 25;
ctx.strokeRect(12, 12, 26, 1);
ctx.strokeRect(88, 12, -26, 1);
ctx.strokeRect(12, 38, 26, -1);
ctx.strokeRect(88, 38, -26, -1);
_assertPixel(canvas, 25,12, 0,255,0,255);
_assertPixel(canvas, 75,12, 0,255,0,255);
_assertPixel(canvas, 25,37, 0,255,0,255);
_assertPixel(canvas, 75,37, 0,255,0,255);
t.done();

});
done();
