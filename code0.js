gdjs.TestGPUCode = {};
gdjs.TestGPUCode.localVariables = [];
gdjs.TestGPUCode.GDWarningGPUObjects1= [];
gdjs.TestGPUCode.GDWarningGPUObjects2= [];
gdjs.TestGPUCode.GDNewTextObjects1= [];
gdjs.TestGPUCode.GDNewTextObjects2= [];
gdjs.TestGPUCode.GDNopeButtonObjects1= [];
gdjs.TestGPUCode.GDNopeButtonObjects2= [];
gdjs.TestGPUCode.GDYepButtonObjects1= [];
gdjs.TestGPUCode.GDYepButtonObjects2= [];
gdjs.TestGPUCode.GDNewText2Objects1= [];
gdjs.TestGPUCode.GDNewText2Objects2= [];
gdjs.TestGPUCode.GDNewText3Objects1= [];
gdjs.TestGPUCode.GDNewText3Objects2= [];
gdjs.TestGPUCode.GDhowGpuObjects1= [];
gdjs.TestGPUCode.GDhowGpuObjects2= [];
gdjs.TestGPUCode.GDNewText4Objects1= [];
gdjs.TestGPUCode.GDNewText4Objects2= [];
gdjs.TestGPUCode.GDNewSprite2Objects1= [];
gdjs.TestGPUCode.GDNewSprite2Objects2= [];
gdjs.TestGPUCode.GDNewText5Objects1= [];
gdjs.TestGPUCode.GDNewText5Objects2= [];
gdjs.TestGPUCode.GDNewSpriteObjects1= [];
gdjs.TestGPUCode.GDNewSpriteObjects2= [];
gdjs.TestGPUCode.GDOupsObjects1= [];
gdjs.TestGPUCode.GDOupsObjects2= [];
gdjs.TestGPUCode.GDRetourObjects1= [];
gdjs.TestGPUCode.GDRetourObjects2= [];
gdjs.TestGPUCode.GDretourtextObjects1= [];
gdjs.TestGPUCode.GDretourtextObjects2= [];
gdjs.TestGPUCode.GDByeTexObjects1= [];
gdjs.TestGPUCode.GDByeTexObjects2= [];
gdjs.TestGPUCode.GDNopeButton2Objects1= [];
gdjs.TestGPUCode.GDNopeButton2Objects2= [];
gdjs.TestGPUCode.GDYepButton2Objects1= [];
gdjs.TestGPUCode.GDYepButton2Objects2= [];
gdjs.TestGPUCode.GDNewText6Objects1= [];
gdjs.TestGPUCode.GDNewText6Objects2= [];
gdjs.TestGPUCode.GDNewText7Objects1= [];
gdjs.TestGPUCode.GDNewText7Objects2= [];


gdjs.TestGPUCode.userFunc0x3229d28 = function GDJSInlineCode(runtimeScene) {
"use strict";
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl');
let isSoftware = false;

if (gl) {
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "";

  if (renderer.includes("SwiftShader") || renderer.toLowerCase().includes("software")) {
    isSoftware = true;
  }
}

runtimeScene.getVariables().get("Acc_Hardware").setNumber(isSoftware ? 0 : 1);
};
gdjs.TestGPUCode.eventsList0 = function(runtimeScene) {

{


gdjs.TestGPUCode.userFunc0x3229d28(runtimeScene);

}


};gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDNopeButtonObjects1Objects = Hashtable.newFrom({"NopeButton": gdjs.TestGPUCode.GDNopeButtonObjects1});
gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDYepButtonObjects1Objects = Hashtable.newFrom({"YepButton": gdjs.TestGPUCode.GDYepButtonObjects1});
gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDNopeButtonObjects1Objects = Hashtable.newFrom({"NopeButton": gdjs.TestGPUCode.GDNopeButtonObjects1});
gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDNopeButton2Objects1Objects = Hashtable.newFrom({"NopeButton2": gdjs.TestGPUCode.GDNopeButton2Objects1});
gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDYepButtonObjects1Objects = Hashtable.newFrom({"YepButton": gdjs.TestGPUCode.GDYepButtonObjects1});
gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDYepButton2Objects1Objects = Hashtable.newFrom({"YepButton2": gdjs.TestGPUCode.GDYepButton2Objects1});
gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDRetourObjects1Objects = Hashtable.newFrom({"Retour": gdjs.TestGPUCode.GDRetourObjects1});
gdjs.TestGPUCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestGPUCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CameraScene", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(37326860);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ByeTex"), gdjs.TestGPUCode.GDByeTexObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.TestGPUCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TestGPUCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.TestGPUCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.TestGPUCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.TestGPUCode.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.TestGPUCode.GDNewText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs.TestGPUCode.GDNewText6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs.TestGPUCode.GDNewText7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NopeButton"), gdjs.TestGPUCode.GDNopeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NopeButton2"), gdjs.TestGPUCode.GDNopeButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Oups"), gdjs.TestGPUCode.GDOupsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Retour"), gdjs.TestGPUCode.GDRetourObjects1);
gdjs.copyArray(runtimeScene.getObjects("WarningGPU"), gdjs.TestGPUCode.GDWarningGPUObjects1);
gdjs.copyArray(runtimeScene.getObjects("YepButton"), gdjs.TestGPUCode.GDYepButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("YepButton2"), gdjs.TestGPUCode.GDYepButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("howGpu"), gdjs.TestGPUCode.GDhowGpuObjects1);
gdjs.copyArray(runtimeScene.getObjects("retourtext"), gdjs.TestGPUCode.GDretourtextObjects1);
{for(var i = 0, len = gdjs.TestGPUCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText5Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDhowGpuObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDhowGpuObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText4Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewSprite2Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDRetourObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDRetourObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDretourtextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDretourtextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TestGPUCode.GDWarningGPUObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDWarningGPUObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDRetourObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDRetourObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNopeButton2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNopeButton2Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDYepButton2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDYepButton2Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText6Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText6Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText7Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText7Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDByeTexObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDByeTexObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDretourtextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDretourtextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TestGPUCode.GDNopeButtonObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNopeButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDYepButtonObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDYepButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText3Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewTextObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDWarningGPUObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDWarningGPUObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDOupsObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDOupsObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NopeButton"), gdjs.TestGPUCode.GDNopeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDNopeButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YepButton"), gdjs.TestGPUCode.GDYepButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDYepButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NopeButton"), gdjs.TestGPUCode.GDNopeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDNopeButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestGPUCode.GDNopeButtonObjects1.length;i<l;++i) {
    if ( gdjs.TestGPUCode.GDNopeButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.TestGPUCode.GDNopeButtonObjects1[k] = gdjs.TestGPUCode.GDNopeButtonObjects1[i];
        ++k;
    }
}
gdjs.TestGPUCode.GDNopeButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(37329612);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ByeTex"), gdjs.TestGPUCode.GDByeTexObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TestGPUCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.TestGPUCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.TestGPUCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs.TestGPUCode.GDNewText6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs.TestGPUCode.GDNewText7Objects1);
/* Reuse gdjs.TestGPUCode.GDNopeButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NopeButton2"), gdjs.TestGPUCode.GDNopeButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Oups"), gdjs.TestGPUCode.GDOupsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Retour"), gdjs.TestGPUCode.GDRetourObjects1);
gdjs.copyArray(runtimeScene.getObjects("WarningGPU"), gdjs.TestGPUCode.GDWarningGPUObjects1);
gdjs.copyArray(runtimeScene.getObjects("YepButton"), gdjs.TestGPUCode.GDYepButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("YepButton2"), gdjs.TestGPUCode.GDYepButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("retourtext"), gdjs.TestGPUCode.GDretourtextObjects1);
{for(var i = 0, len = gdjs.TestGPUCode.GDNopeButtonObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNopeButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDYepButtonObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDYepButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText2Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText3Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewTextObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDWarningGPUObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDWarningGPUObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDOupsObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDOupsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TestGPUCode.GDWarningGPUObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDWarningGPUObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDRetourObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDRetourObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNopeButton2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNopeButton2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDYepButton2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDYepButton2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText6Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText6Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText7Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText7Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDByeTexObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDByeTexObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDretourtextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDretourtextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NopeButton2"), gdjs.TestGPUCode.GDNopeButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDNopeButton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestGPUCode.GDNopeButton2Objects1.length;i<l;++i) {
    if ( gdjs.TestGPUCode.GDNopeButton2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.TestGPUCode.GDNopeButton2Objects1[k] = gdjs.TestGPUCode.GDNopeButton2Objects1[i];
        ++k;
    }
}
gdjs.TestGPUCode.GDNopeButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(37331100);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YepButton"), gdjs.TestGPUCode.GDYepButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDYepButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestGPUCode.GDYepButtonObjects1.length;i<l;++i) {
    if ( gdjs.TestGPUCode.GDYepButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.TestGPUCode.GDYepButtonObjects1[k] = gdjs.TestGPUCode.GDYepButtonObjects1[i];
        ++k;
    }
}
gdjs.TestGPUCode.GDYepButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(37332420);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.TestGPUCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TestGPUCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.TestGPUCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.TestGPUCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.TestGPUCode.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.TestGPUCode.GDNewText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NopeButton"), gdjs.TestGPUCode.GDNopeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Oups"), gdjs.TestGPUCode.GDOupsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Retour"), gdjs.TestGPUCode.GDRetourObjects1);
gdjs.copyArray(runtimeScene.getObjects("WarningGPU"), gdjs.TestGPUCode.GDWarningGPUObjects1);
/* Reuse gdjs.TestGPUCode.GDYepButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("howGpu"), gdjs.TestGPUCode.GDhowGpuObjects1);
gdjs.copyArray(runtimeScene.getObjects("retourtext"), gdjs.TestGPUCode.GDretourtextObjects1);
{for(var i = 0, len = gdjs.TestGPUCode.GDNopeButtonObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNopeButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDYepButtonObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDYepButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText2Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText3Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewTextObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDWarningGPUObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDWarningGPUObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDOupsObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDOupsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TestGPUCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText5Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDhowGpuObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDhowGpuObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText4Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewSprite2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDRetourObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDRetourObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDretourtextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDretourtextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YepButton2"), gdjs.TestGPUCode.GDYepButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDYepButton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestGPUCode.GDYepButton2Objects1.length;i<l;++i) {
    if ( gdjs.TestGPUCode.GDYepButton2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.TestGPUCode.GDYepButton2Objects1[k] = gdjs.TestGPUCode.GDYepButton2Objects1[i];
        ++k;
    }
}
gdjs.TestGPUCode.GDYepButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(37333780);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://cantineaufrancois2.wixsite.com/cantineaufrancois", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retour"), gdjs.TestGPUCode.GDRetourObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TestGPUCode.mapOfGDgdjs_9546TestGPUCode_9546GDRetourObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestGPUCode.GDRetourObjects1.length;i<l;++i) {
    if ( gdjs.TestGPUCode.GDRetourObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.TestGPUCode.GDRetourObjects1[k] = gdjs.TestGPUCode.GDRetourObjects1[i];
        ++k;
    }
}
gdjs.TestGPUCode.GDRetourObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(37335372);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ByeTex"), gdjs.TestGPUCode.GDByeTexObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.TestGPUCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TestGPUCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.TestGPUCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.TestGPUCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.TestGPUCode.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.TestGPUCode.GDNewText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs.TestGPUCode.GDNewText6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs.TestGPUCode.GDNewText7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NopeButton"), gdjs.TestGPUCode.GDNopeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NopeButton2"), gdjs.TestGPUCode.GDNopeButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Oups"), gdjs.TestGPUCode.GDOupsObjects1);
/* Reuse gdjs.TestGPUCode.GDRetourObjects1 */
gdjs.copyArray(runtimeScene.getObjects("WarningGPU"), gdjs.TestGPUCode.GDWarningGPUObjects1);
gdjs.copyArray(runtimeScene.getObjects("YepButton"), gdjs.TestGPUCode.GDYepButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("YepButton2"), gdjs.TestGPUCode.GDYepButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("howGpu"), gdjs.TestGPUCode.GDhowGpuObjects1);
gdjs.copyArray(runtimeScene.getObjects("retourtext"), gdjs.TestGPUCode.GDretourtextObjects1);
{for(var i = 0, len = gdjs.TestGPUCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText5Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDhowGpuObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDhowGpuObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText4Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewSprite2Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDRetourObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDRetourObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDretourtextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDretourtextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TestGPUCode.GDWarningGPUObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDWarningGPUObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDRetourObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDRetourObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNopeButton2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNopeButton2Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDYepButton2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDYepButton2Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText6Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText6Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText7Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText7Objects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDByeTexObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDByeTexObjects1[i].hide();
}
for(var i = 0, len = gdjs.TestGPUCode.GDretourtextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDretourtextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TestGPUCode.GDNopeButtonObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNopeButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDYepButtonObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDYepButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewText3Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDNewTextObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDWarningGPUObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDWarningGPUObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.TestGPUCode.GDOupsObjects1.length ;i < len;++i) {
    gdjs.TestGPUCode.GDOupsObjects1[i].hide(false);
}
}}

}


};

gdjs.TestGPUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestGPUCode.GDWarningGPUObjects1.length = 0;
gdjs.TestGPUCode.GDWarningGPUObjects2.length = 0;
gdjs.TestGPUCode.GDNewTextObjects1.length = 0;
gdjs.TestGPUCode.GDNewTextObjects2.length = 0;
gdjs.TestGPUCode.GDNopeButtonObjects1.length = 0;
gdjs.TestGPUCode.GDNopeButtonObjects2.length = 0;
gdjs.TestGPUCode.GDYepButtonObjects1.length = 0;
gdjs.TestGPUCode.GDYepButtonObjects2.length = 0;
gdjs.TestGPUCode.GDNewText2Objects1.length = 0;
gdjs.TestGPUCode.GDNewText2Objects2.length = 0;
gdjs.TestGPUCode.GDNewText3Objects1.length = 0;
gdjs.TestGPUCode.GDNewText3Objects2.length = 0;
gdjs.TestGPUCode.GDhowGpuObjects1.length = 0;
gdjs.TestGPUCode.GDhowGpuObjects2.length = 0;
gdjs.TestGPUCode.GDNewText4Objects1.length = 0;
gdjs.TestGPUCode.GDNewText4Objects2.length = 0;
gdjs.TestGPUCode.GDNewSprite2Objects1.length = 0;
gdjs.TestGPUCode.GDNewSprite2Objects2.length = 0;
gdjs.TestGPUCode.GDNewText5Objects1.length = 0;
gdjs.TestGPUCode.GDNewText5Objects2.length = 0;
gdjs.TestGPUCode.GDNewSpriteObjects1.length = 0;
gdjs.TestGPUCode.GDNewSpriteObjects2.length = 0;
gdjs.TestGPUCode.GDOupsObjects1.length = 0;
gdjs.TestGPUCode.GDOupsObjects2.length = 0;
gdjs.TestGPUCode.GDRetourObjects1.length = 0;
gdjs.TestGPUCode.GDRetourObjects2.length = 0;
gdjs.TestGPUCode.GDretourtextObjects1.length = 0;
gdjs.TestGPUCode.GDretourtextObjects2.length = 0;
gdjs.TestGPUCode.GDByeTexObjects1.length = 0;
gdjs.TestGPUCode.GDByeTexObjects2.length = 0;
gdjs.TestGPUCode.GDNopeButton2Objects1.length = 0;
gdjs.TestGPUCode.GDNopeButton2Objects2.length = 0;
gdjs.TestGPUCode.GDYepButton2Objects1.length = 0;
gdjs.TestGPUCode.GDYepButton2Objects2.length = 0;
gdjs.TestGPUCode.GDNewText6Objects1.length = 0;
gdjs.TestGPUCode.GDNewText6Objects2.length = 0;
gdjs.TestGPUCode.GDNewText7Objects1.length = 0;
gdjs.TestGPUCode.GDNewText7Objects2.length = 0;

gdjs.TestGPUCode.eventsList1(runtimeScene);
gdjs.TestGPUCode.GDWarningGPUObjects1.length = 0;
gdjs.TestGPUCode.GDWarningGPUObjects2.length = 0;
gdjs.TestGPUCode.GDNewTextObjects1.length = 0;
gdjs.TestGPUCode.GDNewTextObjects2.length = 0;
gdjs.TestGPUCode.GDNopeButtonObjects1.length = 0;
gdjs.TestGPUCode.GDNopeButtonObjects2.length = 0;
gdjs.TestGPUCode.GDYepButtonObjects1.length = 0;
gdjs.TestGPUCode.GDYepButtonObjects2.length = 0;
gdjs.TestGPUCode.GDNewText2Objects1.length = 0;
gdjs.TestGPUCode.GDNewText2Objects2.length = 0;
gdjs.TestGPUCode.GDNewText3Objects1.length = 0;
gdjs.TestGPUCode.GDNewText3Objects2.length = 0;
gdjs.TestGPUCode.GDhowGpuObjects1.length = 0;
gdjs.TestGPUCode.GDhowGpuObjects2.length = 0;
gdjs.TestGPUCode.GDNewText4Objects1.length = 0;
gdjs.TestGPUCode.GDNewText4Objects2.length = 0;
gdjs.TestGPUCode.GDNewSprite2Objects1.length = 0;
gdjs.TestGPUCode.GDNewSprite2Objects2.length = 0;
gdjs.TestGPUCode.GDNewText5Objects1.length = 0;
gdjs.TestGPUCode.GDNewText5Objects2.length = 0;
gdjs.TestGPUCode.GDNewSpriteObjects1.length = 0;
gdjs.TestGPUCode.GDNewSpriteObjects2.length = 0;
gdjs.TestGPUCode.GDOupsObjects1.length = 0;
gdjs.TestGPUCode.GDOupsObjects2.length = 0;
gdjs.TestGPUCode.GDRetourObjects1.length = 0;
gdjs.TestGPUCode.GDRetourObjects2.length = 0;
gdjs.TestGPUCode.GDretourtextObjects1.length = 0;
gdjs.TestGPUCode.GDretourtextObjects2.length = 0;
gdjs.TestGPUCode.GDByeTexObjects1.length = 0;
gdjs.TestGPUCode.GDByeTexObjects2.length = 0;
gdjs.TestGPUCode.GDNopeButton2Objects1.length = 0;
gdjs.TestGPUCode.GDNopeButton2Objects2.length = 0;
gdjs.TestGPUCode.GDYepButton2Objects1.length = 0;
gdjs.TestGPUCode.GDYepButton2Objects2.length = 0;
gdjs.TestGPUCode.GDNewText6Objects1.length = 0;
gdjs.TestGPUCode.GDNewText6Objects2.length = 0;
gdjs.TestGPUCode.GDNewText7Objects1.length = 0;
gdjs.TestGPUCode.GDNewText7Objects2.length = 0;


return;

}

gdjs['TestGPUCode'] = gdjs.TestGPUCode;
