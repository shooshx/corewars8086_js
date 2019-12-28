var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.codewars_js;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '74DEB937A63FD97ED665B1DC2F0EA6AE';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 65535, $intern_1 = 2147483647, $intern_2 = {3:1, 6:1}, $intern_3 = {3:1, 8:1}, $intern_4 = {3:1, 7:1, 4:1, 8:1}, $intern_5 = {38:1}, $intern_6 = 4194303, $intern_7 = 1048575, $intern_8 = 524288, $intern_9 = 4194304, $intern_10 = 17592186044416, $intern_11 = -17592186044416, $intern_12 = {69:1}, $intern_13 = {3:1}, $intern_14 = -65536, $intern_15 = 65280, $intern_16 = 1024, $intern_17 = 2048, $intern_18 = {26:1, 3:1, 7:1, 8:1}, $intern_19 = {50:1, 3:1}, $intern_20 = 65536, $intern_21 = 5.099999904632568, $intern_22 = {57:1, 12:1}, $intern_23 = 1048576, $intern_24 = 0.949999988079071, $intern_25 = 0.800000011920929, $intern_26 = -2147483648, $intern_27 = {l:4194303, m:4194303, h:524287}, $intern_28 = {33:1}, $intern_29 = {3:1, 68:1}, $intern_30 = 15525485, $intern_31 = 5.9604644775390625E-8, $intern_32 = 16777216, $intern_33 = 16777215, $intern_34 = 4294967295, $intern_35 = {l:0, m:0, h:524288};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function create_com_google_gwt_useragent_client_UserAgent(){
  switch (permutationId) {
    case 1:
      return new UserAgentImplIe10;
    case 4:
      return new UserAgentImplSafari;
    case 0:
      return new UserAgentImplGecko1_8;
    case 2:
      return new UserAgentImplIe8;
  }
  return new UserAgentImplIe9;
}

function create_com_google_gwt_dom_client_DOMImpl(){
  switch (permutationId) {
    case 2:
      return new DOMImplIE8;
    case 4:
      return new DOMImplWebkit;
    case 0:
      return new DOMImplMozilla;
  }
  return new DOMImplIE9;
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_5(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function $equals(this$static, other){
  return this$static === other;
}

$equals.displayName = 'java.lang.Object.$equals';
function $getClass(this$static){
  return this$static.___clazz;
}

$getClass.displayName = 'java.lang.Object.$getClass';
function $hashCode(this$static){
  return getHashCode(this$static);
}

$hashCode.displayName = 'java.lang.Object.$hashCode';
function Object_0(){
}

Object_0.displayName = 'java.lang.Object.Object';
function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_4(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

equals_Ljava_lang_Object__Z__devirtual$.displayName = 'java.lang.Object.equals_Ljava_lang_Object__Z__devirtual$';
function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:getClass_1(this$static);
}

getClass__Ljava_lang_Class___devirtual$.displayName = 'java.lang.Object.getClass__Ljava_lang_Class___devirtual$';
function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

hashCode__I__devirtual$.displayName = 'java.lang.Object.hashCode__I__devirtual$';
function toString_1(object){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
}

toString_1.displayName = 'java.lang.Object.toString';
defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.equals_0.displayName = 'java.lang.Object.equals';
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.getClass_0.displayName = 'java.lang.Object.getClass';
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.hashCode_0.displayName = 'java.lang.Object.hashCode';
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.toString_0.displayName = 'java.lang.Object.toString';
_.equals = function(other){
  return this.equals_0(other);
}
;
_.equals.displayName = 'java.lang.Object.equals';
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.hashCode.displayName = 'java.lang.Object.hashCode';
_.toString = function(){
  return this.toString_0();
}
;
_.toString.displayName = 'java.lang.Object.toString';
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

canCast.displayName = 'com.google.gwt.lang.Cast.canCast';
function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

castTo.displayName = 'com.google.gwt.lang.Cast.castTo';
function castToArray(src_0){
  var elementTypeCategory;
  checkCriticalType(src_0 == null || Array.isArray(src_0) && (elementTypeCategory = getElementTypeCategory(src_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16)));
  return src_0;
}

castToArray.displayName = 'com.google.gwt.lang.Cast.castToArray';
function castToBoolean(src_0){
  checkCriticalType(src_0 == null || instanceOfBoolean(src_0));
  return src_0;
}

castToBoolean.displayName = 'com.google.gwt.lang.Cast.castToBoolean';
function castToDouble(src_0){
  checkCriticalType(src_0 == null || instanceOfDouble(src_0));
  return src_0;
}

castToDouble.displayName = 'com.google.gwt.lang.Cast.castToDouble';
function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

castToJso.displayName = 'com.google.gwt.lang.Cast.castToJso';
function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || jsinstanceOf(src_0, jsType));
  return src_0;
}

castToNative.displayName = 'com.google.gwt.lang.Cast.castToNative';
function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

castToString.displayName = 'com.google.gwt.lang.Cast.castToString';
function castToUnknownNative(src_0){
  return src_0;
}

castToUnknownNative.displayName = 'com.google.gwt.lang.Cast.castToUnknownNative';
function charToString(x_0){
  return String.fromCharCode(x_0);
}

charToString.displayName = 'com.google.gwt.lang.Cast.charToString';
function getClass_1(array){
  return array.___clazz || Array.isArray(array) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

getClass_1.displayName = 'com.google.gwt.lang.Cast.getClass';
function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

hasJavaObjectVirtualDispatch.displayName = 'com.google.gwt.lang.Cast.hasJavaObjectVirtualDispatch';
function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

instanceOf.displayName = 'com.google.gwt.lang.Cast.instanceOf';
function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

instanceOfBoolean.displayName = 'com.google.gwt.lang.Cast.instanceOfBoolean';
function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

instanceOfDouble.displayName = 'com.google.gwt.lang.Cast.instanceOfDouble';
function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

instanceOfJso.displayName = 'com.google.gwt.lang.Cast.instanceOfJso';
function instanceOfNative(src_0, jsType){
  return jsinstanceOf(src_0, jsType);
}

instanceOfNative.displayName = 'com.google.gwt.lang.Cast.instanceOfNative';
function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

instanceOfString.displayName = 'com.google.gwt.lang.Cast.instanceOfString';
function isArray(src_0){
  return Array.isArray(src_0);
}

isArray.displayName = 'com.google.gwt.lang.Cast.isArray';
function isFunction(src_0){
  return typeof src_0 === 'function';
}

isFunction.displayName = 'com.google.gwt.lang.Cast.isFunction';
function isJsObject(src_0){
  return typeof src_0 === 'object' || typeof src_0 == 'function';
}

isJsObject.displayName = 'com.google.gwt.lang.Cast.isJsObject';
function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

isJsObjectOrFunction.displayName = 'com.google.gwt.lang.Cast.isJsObjectOrFunction';
function isNotNull(src_0){
  return !!src_0;
}

isNotNull.displayName = 'com.google.gwt.lang.Cast.isNotNull';
function isNull(src_0){
  return !src_0;
}

isNull.displayName = 'com.google.gwt.lang.Cast.isNull';
function jsEquals(a, b){
  return a == b;
}

jsEquals.displayName = 'com.google.gwt.lang.Cast.jsEquals';
function jsNotEquals(a, b){
  return a != b;
}

jsNotEquals.displayName = 'com.google.gwt.lang.Cast.jsNotEquals';
function jsinstanceOf(obj, jsType){
  return obj && jsType && obj instanceof jsType;
}

jsinstanceOf.displayName = 'com.google.gwt.lang.Cast.jsinstanceOf';
function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

maskUndefined.displayName = 'com.google.gwt.lang.Cast.maskUndefined';
function narrow_byte(x_0){
  return x_0 << 24 >> 24;
}

narrow_byte.displayName = 'com.google.gwt.lang.Cast.narrow_byte';
function narrow_char(x_0){
  return x_0 & $intern_0;
}

narrow_char.displayName = 'com.google.gwt.lang.Cast.narrow_char';
function narrow_int(x_0){
  return x_0 | 0;
}

narrow_int.displayName = 'com.google.gwt.lang.Cast.narrow_int';
function narrow_short(x_0){
  return x_0 << 16 >> 16;
}

narrow_short.displayName = 'com.google.gwt.lang.Cast.narrow_short';
function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_1), -2147483648) | 0;
}

round_int.displayName = 'com.google.gwt.lang.Cast.round_int';
var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

$ensureNamesAreInitialized.displayName = 'java.lang.Class.$ensureNamesAreInitialized';
function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

$getName.displayName = 'java.lang.Class.$getName';
function $isArray(this$static){
  return (this$static.modifiers & 4) != 0;
}

$isArray.displayName = 'java.lang.Class.$isArray';
function $isPrimitive(this$static){
  return (this$static.modifiers & 1) != 0;
}

$isPrimitive.displayName = 'java.lang.Class.$isPrimitive';
function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

Class.displayName = 'java.lang.Class.Class';
function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

createClassObject.displayName = 'java.lang.Class.createClassObject';
function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

createForClass.displayName = 'java.lang.Class.createForClass';
function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

createForEnum.displayName = 'java.lang.Class.createForEnum';
function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

createForPrimitive.displayName = 'java.lang.Class.createForPrimitive';
function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

getClassLiteralForArray_0.displayName = 'java.lang.Class.getClassLiteralForArray';
function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

getPrototypeForClass.displayName = 'java.lang.Class.getPrototypeForClass';
function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

initializeNames.displayName = 'java.lang.Class.initializeNames';
function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

join_0.displayName = 'java.lang.Class.join';
function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

maybeSetClassLiteral.displayName = 'java.lang.Class.maybeSetClassLiteral';
defineClass(92, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.createClassLiteralForArray.displayName = 'java.lang.Class.createClassLiteralForArray';
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getCanonicalName.displayName = 'java.lang.Class.getCanonicalName';
_.getName = function getName(){
  return $getName(this);
}
;
_.getName.displayName = 'java.lang.Class.getName';
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.getSimpleName.displayName = 'java.lang.Class.getSimpleName';
_.isArray_0 = function isArray_0(){
  return (this.modifiers & 4) != 0;
}
;
_.isArray_0.displayName = 'java.lang.Class.isArray';
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.isPrimitive.displayName = 'java.lang.Class.isPrimitive';
_.toString_0 = function toString_11(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.toString_0.displayName = 'java.lang.Class.toString';
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 92);
function $onModuleLoad(){
  var c, e;
  console.log('onModuleLoad');
  setUncaughtExceptionHandler(new codewars_js$1);
  try {
    c = new CompetitionWindow;
    s_instance = c;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      log_0('onModuleLoad EXCEPTION ' + $toString_0(e, e.getLocalizedMessage()));
    }
     else 
      throw toJs($e0);
  }
}

$onModuleLoad.displayName = 'com.client.codewars_js.$onModuleLoad';
function console_0(text_0){
  console.log(text_0);
}

console_0.displayName = 'com.client.codewars_js.console';
function codewars_js$1(){
}

codewars_js$1.displayName = 'com.client.codewars_js$1.codewars_js$1';
defineClass(121, 1, {}, codewars_js$1);
var Lcom_client_codewars_1js$1_2_classLit = createForClass('com.client', 'codewars_js/1', 121);
defineClass(250, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 250);
defineClass(86, 1, {86:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 86);
function $isNativelySupported(){
  return !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame;
}

$isNativelySupported.displayName = 'com.google.gwt.animation.client.AnimationScheduler$AnimationSupportDetector.$isNativelySupported';
function AnimationSchedulerImplStandard(){
}

AnimationSchedulerImplStandard.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard.AnimationSchedulerImplStandard';
function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

requestImpl.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard.requestImpl';
defineClass(110, 250, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1;
}
;
_.requestAnimationFrame_0.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard.requestAnimationFrame';
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 110);
function AnimationSchedulerImplStandard$1(){
}

AnimationSchedulerImplStandard$1.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard$1.AnimationSchedulerImplStandard$1';
defineClass(206, 86, {86:1}, AnimationSchedulerImplStandard$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 206);
function $$init(this$static){
  this$static.animationRequests = new ArrayList;
  this$static.timer = new AnimationSchedulerImplTimer$1(this$static);
}

$$init.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.$$init';
function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {229:1, 3:1, 6:1}, 87, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray_1(this$static.animationRequests, curAnimations), 229);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_2(this$static.animationRequests, requestId);
    $execute(requestId.callback);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, $wnd.Math.max(5, 16 - (now_1() - duration.start_0)));
}

$updateAnimations.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.$updateAnimations';
function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

AnimationSchedulerImplTimer.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.AnimationSchedulerImplTimer';
defineClass(111, 250, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(callback);
  $add_0(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
_.requestAnimationFrame_0.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.requestAnimationFrame';
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 111);
function $$init_0(this$static){
}

$$init_0.displayName = 'com.google.gwt.user.client.Timer.$$init';
function $cancel(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

$cancel.displayName = 'com.google.gwt.user.client.Timer.$cancel';
function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_0(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

$schedule.displayName = 'com.google.gwt.user.client.Timer.$schedule';
function Timer(){
}

Timer.displayName = 'com.google.gwt.user.client.Timer.Timer';
function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

clearInterval_0.displayName = 'com.google.gwt.user.client.Timer.clearInterval';
function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

clearTimeout_0.displayName = 'com.google.gwt.user.client.Timer.clearTimeout';
function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

createCallback.displayName = 'com.google.gwt.user.client.Timer.createCallback';
function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

setTimeout_0.displayName = 'com.google.gwt.user.client.Timer.setTimeout';
defineClass(207, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $updateAnimations(this.this$01);
}
;
_.fire.displayName = 'com.google.gwt.user.client.Timer.fire';
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 207);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
}

AnimationSchedulerImplTimer$1.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer$1.AnimationSchedulerImplTimer$1';
defineClass(208, 207, {}, AnimationSchedulerImplTimer$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 208);
function AnimationSchedulerImplTimer$AnimationHandleImpl(callback){
  this.callback = callback;
}

AnimationSchedulerImplTimer$AnimationHandleImpl.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer$AnimationHandleImpl.AnimationSchedulerImplTimer$AnimationHandleImpl';
defineClass(87, 86, {86:1, 87:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 87);
function $$init_1(this$static){
  this$static.start_0 = now_1();
}

$$init_1.displayName = 'com.google.gwt.core.client.Duration.$$init';
function Duration(){
  this.start_0 = now_1();
}

Duration.displayName = 'com.google.gwt.core.client.Duration.Duration';
function currentTimeMillis(){
  return now_1();
}

currentTimeMillis.displayName = 'com.google.gwt.core.client.Duration.currentTimeMillis';
function uncheckedConversion(elapsed){
  return elapsed;
}

uncheckedConversion.displayName = 'com.google.gwt.core.client.Duration.uncheckedConversion';
defineClass(160, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 160);
function isScript(){
  return true;
}

isScript.displayName = 'com.google.gwt.core.client.GWT.isScript';
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
  maybeInitializeWindowOnError();
}

setUncaughtExceptionHandler.displayName = 'com.google.gwt.core.client.GWT.setUncaughtExceptionHandler';
var uncaughtExceptionHandler = null;
function $$init_2(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 34, 0, 0, 1);
}

$$init_2.displayName = 'java.lang.Throwable.$$init';
function $captureStackTrace(this$static){
  captureStackTrace(this$static);
}

$captureStackTrace.displayName = 'java.lang.Throwable.$captureStackTrace';
function $constructJavaStackTrace(this$static){
  var stackTrace;
  return $clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace);
}

$constructJavaStackTrace.displayName = 'java.lang.Throwable.$constructJavaStackTrace';
function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

$fillInStackTrace.displayName = 'java.lang.Throwable.$fillInStackTrace';
function $getMessage(this$static){
  return this$static.detailMessage;
}

$getMessage.displayName = 'java.lang.Throwable.$getMessage';
function $printStackTraceImpl(this$static, out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + prefix + this$static);
  $printStackTraceItems(this$static, out, ident);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_2, 8, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, 'Caused by: ', ident);
}

$printStackTraceImpl.displayName = 'java.lang.Throwable.$printStackTraceImpl';
function $printStackTraceItems(this$static, out, ident){
  var element, element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}

$printStackTraceItems.displayName = 'java.lang.Throwable.$printStackTraceItems';
function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

$setBackingJsObject.displayName = 'java.lang.Throwable.$setBackingJsObject';
function $toString(this$static){
  return $toString_0(this$static, this$static.getLocalizedMessage());
}

$toString.displayName = 'java.lang.Throwable.$toString';
function $toString_0(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

$toString_0.displayName = 'java.lang.Throwable.$toString';
function Throwable(){
  $$init_2(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Throwable.displayName = 'java.lang.Throwable.Throwable';
function Throwable_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_5(backingJsObject);
}

Throwable_0.displayName = 'java.lang.Throwable.Throwable';
function Throwable_1(message){
  $$init_2(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Throwable_1.displayName = 'java.lang.Throwable.Throwable';
function Throwable_2(message, cause){
  $$init_2(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Throwable_2.displayName = 'java.lang.Throwable.Throwable';
function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

fixIE.displayName = 'java.lang.Throwable.fixIE';
function of(e){
  var throwable;
  if (e != null) {
    throwable = e['__java$exception'];
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new NullPointerException_0(e):new JsException_0(e);
}

of.displayName = 'java.lang.Throwable.of';
defineClass(8, 1, $intern_3);
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.createError.displayName = 'java.lang.Throwable.createError';
_.getLocalizedMessage = function getLocalizedMessage(){
  return this.getMessage();
}
;
_.getLocalizedMessage.displayName = 'java.lang.Throwable.getLocalizedMessage';
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.getMessage.displayName = 'java.lang.Throwable.getMessage';
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.initializeBackingError.displayName = 'java.lang.Throwable.initializeBackingError';
_.toString_0 = function toString_2(){
  return $toString_0(this, this.getLocalizedMessage());
}
;
_.toString_0.displayName = 'java.lang.Throwable.toString';
_.backingJsObject = '__noinit__';
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 8);
function Exception(){
  $$init_2(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Exception.displayName = 'java.lang.Exception.Exception';
function Exception_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_5(backingJsObject);
}

Exception_0.displayName = 'java.lang.Exception.Exception';
function Exception_1(message){
  $$init_2(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Exception_1.displayName = 'java.lang.Exception.Exception';
defineClass(7, 8, {3:1, 7:1, 8:1}, Exception, Exception_1);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 7);
function RuntimeException(){
  Exception.call(this);
}

RuntimeException.displayName = 'java.lang.RuntimeException.RuntimeException';
function RuntimeException_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_5(backingJsObject);
}

RuntimeException_0.displayName = 'java.lang.RuntimeException.RuntimeException';
function RuntimeException_1(message){
  Exception_1.call(this, message);
}

RuntimeException_1.displayName = 'java.lang.RuntimeException.RuntimeException';
defineClass(4, 7, $intern_4, RuntimeException, RuntimeException_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 4);
function JsException(){
  RuntimeException.call(this);
}

JsException.displayName = 'java.lang.JsException.JsException';
function JsException_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_5(backingJsObject);
}

JsException_0.displayName = 'java.lang.JsException.JsException';
function JsException_1(msg){
  RuntimeException_1.call(this, msg);
}

JsException_1.displayName = 'java.lang.JsException.JsException';
defineClass(58, 4, $intern_4, JsException_0);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 58);
function JavaScriptExceptionBase(e){
  JsException_0.call(this, e);
}

JavaScriptExceptionBase.displayName = 'com.google.gwt.core.client.impl.JavaScriptExceptionBase.JavaScriptExceptionBase';
defineClass(127, 58, $intern_4);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 127);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

$clinit_JavaScriptException.displayName = 'com.google.gwt.core.client.JavaScriptException.$clinit';
function $$init_3(this$static){
  this$static.description = '';
}

$$init_3.displayName = 'com.google.gwt.core.client.JavaScriptException.$$init';
function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

$ensureInit.displayName = 'com.google.gwt.core.client.JavaScriptException.$ensureInit';
function $getThrown(this$static){
  return maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
}

$getThrown.displayName = 'com.google.gwt.core.client.JavaScriptException.$getThrown';
function JavaScriptException(e){
  $clinit_JavaScriptException();
  JavaScriptExceptionBase.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

JavaScriptException.displayName = 'com.google.gwt.core.client.JavaScriptException.JavaScriptException';
function JavaScriptException_0(e){
  JavaScriptExceptionBase.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

JavaScriptException_0.displayName = 'com.google.gwt.core.client.JavaScriptException.JavaScriptException';
function getExceptionDescription0(e){
  return e == null?null:e.message;
}

getExceptionDescription0.displayName = 'com.google.gwt.core.client.JavaScriptException.getExceptionDescription0';
function getExceptionName0(e){
  return e == null?null:e.name;
}

getExceptionName0.displayName = 'com.google.gwt.core.client.JavaScriptException.getExceptionName0';
defineClass(59, 127, {59:1, 3:1, 7:1, 4:1, 8:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getMessage.displayName = 'com.google.gwt.core.client.JavaScriptException.getMessage';
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
_.getThrown.displayName = 'com.google.gwt.core.client.JavaScriptException.getThrown';
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 59);
function $equals_0(this$static, other){
  return !!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

$equals_0.displayName = 'com.google.gwt.core.client.JavaScriptObject.$equals';
function $getClass_0(this$static){
  return getClass_1(this$static);
}

$getClass_0.displayName = 'com.google.gwt.core.client.JavaScriptObject.$getClass';
function $hashCode_0(this$static){
  return !!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

$hashCode_0.displayName = 'com.google.gwt.core.client.JavaScriptObject.$hashCode';
function callEquals(thisObject, thatObject){
  return thisObject.equals(thatObject);
}

callEquals.displayName = 'com.google.gwt.core.client.JavaScriptObject.callEquals';
function callHashCode(object){
  return object.hashCode();
}

callHashCode.displayName = 'com.google.gwt.core.client.JavaScriptObject.callHashCode';
function createArray(){
  return [];
}

createArray.displayName = 'com.google.gwt.core.client.JavaScriptObject.createArray';
function createObject(){
  return {};
}

createObject.displayName = 'com.google.gwt.core.client.JavaScriptObject.createObject';
function hasEquals(object){
  return !!object && !!object.equals;
}

hasEquals.displayName = 'com.google.gwt.core.client.JavaScriptObject.hasEquals';
function hasHashCode(object){
  return !!object && !!object.hashCode;
}

hasHashCode.displayName = 'com.google.gwt.core.client.JavaScriptObject.hasHashCode';
function toStringSimple(obj){
  return obj.toString?obj.toString():'[JavaScriptObject]';
}

toStringSimple.displayName = 'com.google.gwt.core.client.JavaScriptObject.toStringSimple';
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function $get(this$static, index_0){
  return this$static[index_0];
}

$get.displayName = 'com.google.gwt.core.client.JsArray.$get';
function $length(this$static){
  return this$static.length;
}

$length.displayName = 'com.google.gwt.core.client.JsArray.$length';
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

$push.displayName = 'com.google.gwt.core.client.JsArray.$push';
function $get_0(this$static, index_0){
  return this$static[index_0];
}

$get_0.displayName = 'com.google.gwt.core.client.JsArrayString.$get';
function $length_0(this$static){
  return this$static.length;
}

$length_0.displayName = 'com.google.gwt.core.client.JsArrayString.$length';
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

now_1.displayName = 'com.google.gwt.core.client.JsDate.now';
defineClass(230, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 230);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

$clinit_Impl.displayName = 'com.google.gwt.core.client.impl.Impl.$clinit';
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

apply_0.displayName = 'com.google.gwt.core.client.impl.Impl.apply';
function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

enter.displayName = 'com.google.gwt.core.client.impl.Impl.enter';
function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0_0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

entry_0.displayName = 'com.google.gwt.core.client.impl.Impl.entry';
function entry0_0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 8)) {
          t = $e0;
          reportUncaughtException(t, true);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

entry0_0.displayName = 'com.google.gwt.core.client.impl.Impl.entry0';
function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

exit.displayName = 'com.google.gwt.core.client.impl.Impl.exit';
function maybeInitializeWindowOnError(){
  $clinit_Impl();
  if (onErrorInitialized) {
    return;
  }
  onErrorInitialized = true;
  registerWindowOnError(false);
}

maybeInitializeWindowOnError.displayName = 'com.google.gwt.core.client.impl.Impl.maybeInitializeWindowOnError';
function registerEntry(){
  $clinit_Impl();
  return entry_0;
}

registerEntry.displayName = 'com.google.gwt.core.client.impl.Impl.registerEntry';
function registerWindowOnError(reportAlways){
  $clinit_Impl();
  function errorHandler(msg, url_0, line, column, error){
    if (!error) {
      error = msg + ' (' + url_0 + ':' + line;
      column && (error += ':' + column);
      error += ')';
    }
    var throwable = of(error);
    reportUncaughtException(throwable, false);
  }

  ;
  function addOnErrorHandler(windowRef){
    var origHandler = windowRef.onerror;
    if (origHandler && !reportAlways) {
      return;
    }
    windowRef.onerror = function(){
      errorHandler.apply(this, arguments);
      origHandler && origHandler.apply(this, arguments);
      return false;
    }
    ;
  }

  addOnErrorHandler($wnd);
  addOnErrorHandler(window);
}

registerWindowOnError.displayName = 'com.google.gwt.core.client.impl.Impl.registerWindowOnError';
function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

reportToBrowser.displayName = 'com.google.gwt.core.client.impl.Impl.reportToBrowser';
function reportUncaughtException(e, reportSwallowedExceptionToBrowser){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    log_0('Uncaught EXCEPTION ' + $toString_0(e, e.getLocalizedMessage()));
    return;
  }
  if (reportSwallowedExceptionToBrowser) {
    reportToBrowser(instanceOf(e, 59)?castTo(e, 59).getThrown():e);
  }
   else {
    $clinit_System();
    $printStackTraceImpl(e, err, '', '');
  }
}

reportUncaughtException.displayName = 'com.google.gwt.core.client.impl.Impl.reportUncaughtException';
function reportWindowOnError(e){
  reportUncaughtException(e, false);
}

reportWindowOnError.displayName = 'com.google.gwt.core.client.impl.Impl.reportWindowOnError';
function undefined_0(){
  return;
}

undefined_0.displayName = 'com.google.gwt.core.client.impl.Impl.undefined';
function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

watchdogEntryDepthCancel.displayName = 'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthCancel';
function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

watchdogEntryDepthRun.displayName = 'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthRun';
function watchdogEntryDepthSchedule(){
  return $wnd.setTimeout(watchdogEntryDepthRun, 10);
}

watchdogEntryDepthSchedule.displayName = 'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthSchedule';
var entryDepth = 0, onErrorInitialized = false, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

$clinit_SchedulerImpl.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.$clinit';
function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

$flushEntryCommands.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.$flushEntryCommands';
function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

$flushFinallyCommands.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.$flushFinallyCommands';
function SchedulerImpl(){
}

SchedulerImpl.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.SchedulerImpl';
function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

push_0.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.push';
function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        $clinit_Impl();
        reportUncaughtException(e, true);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

runScheduledTasks.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.runScheduledTasks';
defineClass(135, 230, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 135);
function $getRepeating(this$static){
  return this$static[0];
}

$getRepeating.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl$Task.$getRepeating';
function $getScheduled(this$static){
  return this$static[0];
}

$getScheduled.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl$Task.$getScheduled';
function $isRepeating(this$static){
  return this$static[1];
}

$isRepeating.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl$Task.$isRepeating';
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

$clinit_StackTraceCreator.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.$clinit';
function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

captureStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.captureStackTrace';
function constructJavaStackTrace(thrown){
  $clinit_StackTraceCreator();
  var stackTrace;
  stackTrace = collector.getStackTrace(thrown);
  return dropInternalFrames(stackTrace);
}

constructJavaStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.constructJavaStackTrace';
function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals_4(stackTrace[i].methodName, dropFrameUntilFnName) || $equals_4(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1);
      break;
    }
  }
  return stackTrace;
}

dropInternalFrames.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.dropInternalFrames';
function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || ANONYMOUS;
}

extractFunctionName.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.extractFunctionName';
function getFnStack(e){
  $clinit_StackTraceCreator();
  return e && e['fnStack']?e['fnStack']:[];
}

getFnStack.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.getFnStack';
function getFunctionName(fn){
  $clinit_StackTraceCreator();
  return fn.name || (fn.name = extractFunctionName(fn.toString()));
}

getFunctionName.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.getFunctionName';
function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || LINE_NUMBER_UNKNOWN;
}

parseInt_0.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.parseInt';
function split_0(t){
  $clinit_StackTraceCreator();
  var e = t.backingJsObject;
  return e && e.stack?e.stack.split('\n'):[];
}

split_0.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.split';
function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

supportsErrorStack.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.supportsErrorStack';
var ANONYMOUS = 'anonymous', LINE_NUMBER_UNKNOWN = -1, collector;
defineClass(240, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 240);
function StackTraceCreator$CollectorLegacy(){
}

StackTraceCreator$CollectorLegacy.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorLegacy.StackTraceCreator$CollectorLegacy';
defineClass(128, 240, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.collect.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorLegacy.collect';
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 34, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
_.getStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorLegacy.getStackTrace';
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 128);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_4(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals_4(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

$parse.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$parse';
function $stripSquareBrackets(toReturn){
  return toReturn.replace(/\[.*?\]/g, '');
}

$stripSquareBrackets.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$stripSquareBrackets';
defineClass(241, 240, {});
_.collect = function collect_0(error){
}
;
_.collect.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.collect';
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.createSte.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.createSte';
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 34, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_4(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
_.getStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.getStackTrace';
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 241);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

StackTraceCreator$CollectorModernNoSourceMap.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModernNoSourceMap.StackTraceCreator$CollectorModernNoSourceMap';
defineClass(129, 241, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
_.createSte.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModernNoSourceMap.createSte';
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 129);
function $clinit_DOMImpl(){
  $clinit_DOMImpl = emptyMethod;
  castTo(create_com_google_gwt_dom_client_DOMImpl(), 38);
}

$clinit_DOMImpl.displayName = 'com.google.gwt.dom.client.DOMImpl.$clinit';
defineClass(38, 1, $intern_5);
var Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 38);
defineClass(252, 38, $intern_5);
var Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplTrident', 252);
function DOMImplIE8(){
  $clinit_DOMImpl();
}

DOMImplIE8.displayName = 'com.google.gwt.dom.client.DOMImplIE8.DOMImplIE8';
defineClass(215, 252, $intern_5, DOMImplIE8);
var Lcom_google_gwt_dom_client_DOMImplIE8_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE8', 215);
defineClass(253, 38, $intern_5);
var Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 253);
defineClass(254, 253, $intern_5);
var Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 254);
function DOMImplIE9(){
  $clinit_DOMImpl();
}

DOMImplIE9.displayName = 'com.google.gwt.dom.client.DOMImplIE9.DOMImplIE9';
defineClass(218, 254, $intern_5, DOMImplIE9);
var Lcom_google_gwt_dom_client_DOMImplIE9_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE9', 218);
function DOMImplMozilla(){
  $clinit_DOMImpl();
}

DOMImplMozilla.displayName = 'com.google.gwt.dom.client.DOMImplMozilla.DOMImplMozilla';
defineClass(217, 253, $intern_5, DOMImplMozilla);
var Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplMozilla', 217);
function DOMImplWebkit(){
  $clinit_DOMImpl();
}

DOMImplWebkit.displayName = 'com.google.gwt.dom.client.DOMImplWebkit.DOMImplWebkit';
defineClass(216, 254, $intern_5, DOMImplWebkit);
var Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 216);
function $getCompatMode(this$static){
  return this$static.compatMode;
}

$getCompatMode.displayName = 'com.google.gwt.dom.client.Document.$getCompatMode';
function nativeGet(){
  return $doc;
}

nativeGet.displayName = 'com.google.gwt.dom.client.Document.nativeGet';
function asArray(array){
  return array;
}

asArray.displayName = 'com.google.gwt.lang.Array.asArray';
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

canSet.displayName = 'com.google.gwt.lang.Array.canSet';
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

getClassLiteralForArray.displayName = 'com.google.gwt.lang.Array.getClassLiteralForArray';
function getClassLiteralForArrayImpl(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

getClassLiteralForArrayImpl.displayName = 'com.google.gwt.lang.Array.getClassLiteralForArrayImpl';
function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?TYPE_JS_UNKNOWN_NATIVE:array.__elementTypeCategory$;
}

getElementTypeCategory.displayName = 'com.google.gwt.lang.Array.getElementTypeCategory';
function getElementTypeId(array){
  return array.__elementTypeId$;
}

getElementTypeId.displayName = 'com.google.gwt.lang.Array.getElementTypeId';
function initMultidimensionalArray(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

initMultidimensionalArray.displayName = 'com.google.gwt.lang.Array.initMultidimensionalArray';
function initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDimension, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDimension = index_0 == count - 1;
  elementTypeCategory = isLastDimension?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  leafElementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDimension) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
  }
  return result;
}

initMultidimensionalArray_0.displayName = 'com.google.gwt.lang.Array.initMultidimensionalArray';
function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

initUnidimensionalArray.displayName = 'com.google.gwt.lang.Array.initUnidimensionalArray';
function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case TYPE_PRIMITIVE_LONG:
    case TYPE_PRIMITIVE_NUMBER:
      initValue = 0;
      break;
    case TYPE_PRIMITIVE_BOOLEAN:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

initializeArrayElementsWithDefaults.displayName = 'com.google.gwt.lang.Array.initializeArrayElementsWithDefaults';
function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

isJavaArray.displayName = 'com.google.gwt.lang.Array.isJavaArray';
function set_0(array, index_0, value_0){
  return array[index_0] = value_0;
}

set_0.displayName = 'com.google.gwt.lang.Array.set';
function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

setCheck.displayName = 'com.google.gwt.lang.Array.setCheck';
function setClass(o, clazz){
  o.___clazz = clazz;
}

setClass.displayName = 'com.google.gwt.lang.Array.setClass';
function setElementTypeCategory(array, elementTypeCategory){
  array.__elementTypeCategory$ = elementTypeCategory;
}

setElementTypeCategory.displayName = 'com.google.gwt.lang.Array.setElementTypeCategory';
function setElementTypeId(array, elementTypeId){
  array.__elementTypeId$ = elementTypeId;
}

setElementTypeId.displayName = 'com.google.gwt.lang.Array.setElementTypeId';
function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

stampJavaTypeInfo.displayName = 'com.google.gwt.lang.Array.stampJavaTypeInfo';
function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

stampJavaTypeInfo_0.displayName = 'com.google.gwt.lang.Array.stampJavaTypeInfo';
var TYPE_JS_UNKNOWN_NATIVE = 10, TYPE_PRIMITIVE_BOOLEAN = 16, TYPE_PRIMITIVE_LONG = 14, TYPE_PRIMITIVE_NUMBER = 15;
function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_6;
  a1 = value_0 >> 22 & $intern_6;
  a2 = value_0 < 0?$intern_7:0;
  return create0(a0, a1, a2);
}

create.displayName = 'com.google.gwt.lang.BigLongLibBase.create';
function create_0(a){
  return create0(a.l, a.m, a.h);
}

create_0.displayName = 'com.google.gwt.lang.BigLongLibBase.create';
function create0(l, m, h){
  return {l:l, m:m, h:h};
}

create0.displayName = 'com.google.gwt.lang.BigLongLibBase.create0';
function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException_0);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_8 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_8 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

divMod.displayName = 'com.google.gwt.lang.BigLongLibBase.divMod';
function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_8 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

divModByMinValue.displayName = 'com.google.gwt.lang.BigLongLibBase.divModByMinValue';
function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

divModByShift.displayName = 'com.google.gwt.lang.BigLongLibBase.divModByShift';
function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

divModHelper.displayName = 'com.google.gwt.lang.BigLongLibBase.divModHelper';
function getHNative(a){
  return a.h;
}

getHNative.displayName = 'com.google.gwt.lang.BigLongLibBase.getHNative';
function getLNative(a){
  return a.l;
}

getLNative.displayName = 'com.google.gwt.lang.BigLongLibBase.getLNative';
function getMNative(a){
  return a.m;
}

getMNative.displayName = 'com.google.gwt.lang.BigLongLibBase.getMNative';
function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

maskRight.displayName = 'com.google.gwt.lang.BigLongLibBase.maskRight';
function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_6;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_6;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_7;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

negate.displayName = 'com.google.gwt.lang.BigLongLibBase.negate';
function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

numberOfLeadingZeros.displayName = 'com.google.gwt.lang.BigLongLibBase.numberOfLeadingZeros';
function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

powerOfTwo.displayName = 'com.google.gwt.lang.BigLongLibBase.powerOfTwo';
function setBitH(a, bit){
  a.h |= 1 << bit;
}

setBitH.displayName = 'com.google.gwt.lang.BigLongLibBase.setBitH';
function setBitL(a, bit){
  a.l |= 1 << bit;
}

setBitL.displayName = 'com.google.gwt.lang.BigLongLibBase.setBitL';
function setBitM(a, bit){
  a.m |= 1 << bit;
}

setBitM.displayName = 'com.google.gwt.lang.BigLongLibBase.setBitM';
function setH(a, x_0){
  a.h = x_0;
}

setH.displayName = 'com.google.gwt.lang.BigLongLibBase.setH';
function setL(a, x_0){
  a.l = x_0;
}

setL.displayName = 'com.google.gwt.lang.BigLongLibBase.setL';
function setM(a, x_0){
  a.m = x_0;
}

setM.displayName = 'com.google.gwt.lang.BigLongLibBase.setM';
function toDoubleHelper(a){
  return a.l + a.m * $intern_9 + a.h * $intern_10;
}

toDoubleHelper.displayName = 'com.google.gwt.lang.BigLongLibBase.toDoubleHelper';
function toShru1(a){
  var a0, a1, a2;
  a1 = a.m;
  a2 = a.h;
  a0 = a.l;
  a.h = a2 >>> 1;
  a.m = a1 >>> 1 | (a2 & 1) << 21;
  a.l = a0 >>> 1 | (a1 & 1) << 21;
}

toShru1.displayName = 'com.google.gwt.lang.BigLongLibBase.toShru1';
function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_6;
  a.m = sum1 & $intern_6;
  a.h = sum2 & $intern_7;
  return true;
}

trialSubtract.displayName = 'com.google.gwt.lang.BigLongLibBase.trialSubtract';
var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_6, sum1 & $intern_6, sum2 & $intern_7);
}

add_0.displayName = 'com.google.gwt.lang.BigLongLib.add';
function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

and.displayName = 'com.google.gwt.lang.BigLongLib.and';
function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

compare.displayName = 'com.google.gwt.lang.BigLongLib.compare';
function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_10) {
    a2 = round_int(value_0 / $intern_10);
    value_0 -= a2 * $intern_10;
  }
  a1 = 0;
  if (value_0 >= $intern_9) {
    a1 = round_int(value_0 / $intern_9);
    value_0 -= a1 * $intern_9;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

fromDouble.displayName = 'com.google.gwt.lang.BigLongLib.fromDouble';
function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_6;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_6;
  c2 += c1 >> 22;
  c1 &= $intern_6;
  c2 &= $intern_7;
  return create0(c0, c1, c2);
}

mul.displayName = 'com.google.gwt.lang.BigLongLib.mul';
function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_6;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_6;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_7;
  return create0(neg0, neg1, neg2);
}

neg.displayName = 'com.google.gwt.lang.BigLongLib.neg';
function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_6, res1 & $intern_6, res2 & $intern_7);
}

shl.displayName = 'com.google.gwt.lang.BigLongLib.shl';
function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_8) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_7:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_7:0;
    res1 = negative?$intern_6:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_6, res1 & $intern_6, res2 & $intern_7);
}

shr.displayName = 'com.google.gwt.lang.BigLongLib.shr';
function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_7;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_6, res1 & $intern_6, res2 & $intern_7);
}

shru.displayName = 'com.google.gwt.lang.BigLongLib.shru';
function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_6, sum1 & $intern_6, sum2 & $intern_7);
}

sub_0.displayName = 'com.google.gwt.lang.BigLongLib.sub';
function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_9 + a.h * $intern_10;
}

toDouble.displayName = 'com.google.gwt.lang.BigLongLib.toDouble';
function toInt(a){
  return a.l | a.m << 22;
}

toInt.displayName = 'com.google.gwt.lang.BigLongLib.toInt';
function toString_3(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_8 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_3(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

toString_3.displayName = 'com.google.gwt.lang.BigLongLib.toString';
function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

xor.displayName = 'com.google.gwt.lang.BigLongLib.xor';
function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_6, $intern_6, 524287);
  MIN_VALUE = create0(0, 0, $intern_8);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

$clinit_BigLongLib$Const.displayName = 'com.google.gwt.lang.BigLongLib$Const.$clinit';
var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function getJavaException(e){
  return e && e['__java$exception'];
}

getJavaException.displayName = 'com.google.gwt.lang.Exceptions.getJavaException';
function toJava(e){
  var javaException;
  if (instanceOf(e, 8)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

toJava.displayName = 'com.google.gwt.lang.Exceptions.toJava';
function toJs(t){
  return t.backingJsObject;
}

toJs.displayName = 'com.google.gwt.lang.Exceptions.toJs';
function add_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_11 < result && result < $intern_10) {
      return result;
    }
  }
  return createLongEmul(add_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

add_1.displayName = 'com.google.gwt.lang.LongLib.add';
function and_0(a, b){
  return createLongEmul(and(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

and_0.displayName = 'com.google.gwt.lang.LongLib.and';
function asBigLong0(value_0){
  return value_0;
}

asBigLong0.displayName = 'com.google.gwt.lang.LongLib.asBigLong0';
function asDouble0(value_0){
  return value_0;
}

asDouble0.displayName = 'com.google.gwt.lang.LongLib.asDouble0';
function asSmallLong0(value_0){
  return value_0;
}

asSmallLong0.displayName = 'com.google.gwt.lang.LongLib.asSmallLong0';
function coerceToInt0(value_0){
  return value_0 | 0;
}

coerceToInt0.displayName = 'com.google.gwt.lang.LongLib.coerceToInt0';
function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

compare_0.displayName = 'com.google.gwt.lang.LongLib.compare';
function createBigLongEmul0(value_0){
  return value_0;
}

createBigLongEmul0.displayName = 'com.google.gwt.lang.LongLib.createBigLongEmul0';
function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_9;
  }
  if (a2 == $intern_7) {
    return big_0.l + big_0.m * $intern_9 - $intern_10;
  }
  return big_0;
}

createLongEmul.displayName = 'com.google.gwt.lang.LongLib.createLongEmul';
function createSmallLongEmul0(value_0){
  return value_0;
}

createSmallLongEmul0.displayName = 'com.google.gwt.lang.LongLib.createSmallLongEmul0';
function div(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_11 < result && result < $intern_10) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

div.displayName = 'com.google.gwt.lang.LongLib.div';
function eq(a, b){
  return compare_0(a, b) == 0;
}

eq.displayName = 'com.google.gwt.lang.LongLib.eq';
function fromDouble_0(value_0){
  if ($intern_11 < value_0 && value_0 < $intern_10) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

fromDouble_0.displayName = 'com.google.gwt.lang.LongLib.fromDouble';
function fromInt(value_0){
  return value_0;
}

fromInt.displayName = 'com.google.gwt.lang.LongLib.fromInt';
function gt(a, b){
  return compare_0(a, b) > 0;
}

gt.displayName = 'com.google.gwt.lang.LongLib.gt';
function gte_0(a, b){
  return compare_0(a, b) >= 0;
}

gte_0.displayName = 'com.google.gwt.lang.LongLib.gte';
function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

isSmallLong0.displayName = 'com.google.gwt.lang.LongLib.isSmallLong0';
function lt(a, b){
  return compare_0(a, b) < 0;
}

lt.displayName = 'com.google.gwt.lang.LongLib.lt';
function lte(a, b){
  return compare_0(a, b) <= 0;
}

lte.displayName = 'com.google.gwt.lang.LongLib.lte';
function mod(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a % b;
    if ($intern_11 < result && result < $intern_10) {
      return result;
    }
  }
  return createLongEmul((divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, true) , remainder));
}

mod.displayName = 'com.google.gwt.lang.LongLib.mod';
function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_11 < result && result < $intern_10) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

mul_0.displayName = 'com.google.gwt.lang.LongLib.mul';
function neg_0(a){
  var result;
  if (isSmallLong0(a)) {
    result = 0 - a;
    if (!isNaN(result)) {
      return result;
    }
  }
  return createLongEmul(neg(a));
}

neg_0.displayName = 'com.google.gwt.lang.LongLib.neg';
function neq_0(a, b){
  return compare_0(a, b) != 0;
}

neq_0.displayName = 'com.google.gwt.lang.LongLib.neq';
function shl_0(a, n){
  return createLongEmul(shl(isSmallLong0(a)?toBigLong(a):a, n));
}

shl_0.displayName = 'com.google.gwt.lang.LongLib.shl';
function shr_0(a, n){
  return createLongEmul(shr(isSmallLong0(a)?toBigLong(a):a, n));
}

shr_0.displayName = 'com.google.gwt.lang.LongLib.shr';
function shru_0(a, n){
  return createLongEmul(shru(isSmallLong0(a)?toBigLong(a):a, n));
}

shru_0.displayName = 'com.google.gwt.lang.LongLib.shru';
function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_11 < result && result < $intern_10) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

sub_1.displayName = 'com.google.gwt.lang.LongLib.sub';
function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_10;
    a3 = $intern_7;
  }
  a1 = round_int(value_0 / $intern_9);
  a0 = round_int(value_0 - a1 * $intern_9);
  return create0(a0, a1, a3);
}

toBigLong.displayName = 'com.google.gwt.lang.LongLib.toBigLong';
function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

toDouble_0.displayName = 'com.google.gwt.lang.LongLib.toDouble';
function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

toInt_0.displayName = 'com.google.gwt.lang.LongLib.toInt';
function toString_4(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_3(a);
}

toString_4.displayName = 'com.google.gwt.lang.LongLib.toString';
function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

xor_0.displayName = 'com.google.gwt.lang.LongLib.xor';
function getCastableTypeMap(o){
  return o.castableTypeMap;
}

getCastableTypeMap.displayName = 'com.google.gwt.lang.Util.getCastableTypeMap';
function hasTypeMarker(o){
  return o.typeMarker === typeMarkerFn;
}

hasTypeMarker.displayName = 'com.google.gwt.lang.Util.hasTypeMarker';
function setCastableTypeMap(o, castableTypeMap){
  o.castableTypeMap = castableTypeMap;
}

setCastableTypeMap.displayName = 'com.google.gwt.lang.Util.setCastableTypeMap';
function setTypeMarker(o){
  o.typeMarker = typeMarkerFn;
}

setTypeMarker.displayName = 'com.google.gwt.lang.Util.setTypeMarker';
function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad();
}

init.displayName = 'com.google.gwt.lang.com_00046codewars__js__EntryMethodHolder.init';
function $byteLength(this$static){
  return this$static.byteLength;
}

$byteLength.displayName = 'com.google.gwt.typedarrays.client.ArrayBufferNative.$byteLength';
function $get_1(this$static, index_0){
  return this$static[index_0];
}

$get_1.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.$get';
function $length_1(this$static){
  return this$static.length;
}

$length_1.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.$length';
function $set(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

$set.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.$set';
function create_1(length_0){
  return new Int8Array(length_0);
}

create_1.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.create';
function create_2(buffer){
  return new Int8Array(buffer);
}

create_2.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.create';
function $get_2(this$static, index_0){
  return this$static[index_0];
}

$get_2.displayName = 'com.google.gwt.typedarrays.client.Uint8ArrayNative.$get';
function $length_2(this$static){
  return this$static.length;
}

$length_2.displayName = 'com.google.gwt.typedarrays.client.Uint8ArrayNative.$length';
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_4(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_4('CSS1Compat', allowedModes[0]) && $equals_4('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

$onModuleLoad_0.displayName = 'com.google.gwt.user.client.DocumentModeAsserter.$onModuleLoad';
function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = castTo(create_com_google_gwt_useragent_client_UserAgent(), 69);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!$equals_4(compileTimeValue, runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue));
  }
}

assertCompileTimeUserAgent.displayName = 'com.google.gwt.useragent.client.UserAgentAsserter.assertCompileTimeUserAgent';
function scheduleUserAgentCheck(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
}

scheduleUserAgentCheck.displayName = 'com.google.gwt.useragent.client.UserAgentAsserter.scheduleUserAgentCheck';
function Error_0(message, cause){
  $$init_2(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Error_0.displayName = 'java.lang.Error.Error';
defineClass(75, 8, $intern_3);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 75);
function AssertionError(message){
  Error_0.call(this, message == null?'null':toString_5(message), instanceOf(message, 8)?castTo(message, 8):null);
}

AssertionError.displayName = 'java.lang.AssertionError.AssertionError';
defineClass(17, 75, $intern_3);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 17);
function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_5('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8):null);
}

UserAgentAsserter$UserAgentAssertionError.displayName = 'com.google.gwt.useragent.client.UserAgentAsserter$UserAgentAssertionError.UserAgentAsserter$UserAgentAssertionError';
defineClass(119, 17, $intern_3, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 119);
function UserAgentImplGecko1_8(){
}

UserAgentImplGecko1_8.displayName = 'com.google.gwt.useragent.client.UserAgentImplGecko1_8.UserAgentImplGecko1_8';
defineClass(139, 1, $intern_12, UserAgentImplGecko1_8);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplGecko1_8.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplGecko1_8.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 139);
function UserAgentImplIe10(){
}

UserAgentImplIe10.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe10.UserAgentImplIe10';
defineClass(137, 1, $intern_12, UserAgentImplIe10);
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'ie10';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe10.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue_0(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe10.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplIe10_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe10', 137);
function UserAgentImplIe8(){
}

UserAgentImplIe8.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe8.UserAgentImplIe8';
defineClass(140, 1, $intern_12, UserAgentImplIe8);
_.getCompileTimeValue = function getCompileTimeValue_1(){
  return 'ie8';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe8.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue_1(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe8.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplIe8_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe8', 140);
function UserAgentImplIe9(){
}

UserAgentImplIe9.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe9.UserAgentImplIe9';
defineClass(136, 1, $intern_12, UserAgentImplIe9);
_.getCompileTimeValue = function getCompileTimeValue_2(){
  return 'ie9';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe9.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplIe9.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplIe9_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe9', 136);
function UserAgentImplSafari(){
}

UserAgentImplSafari.displayName = 'com.google.gwt.useragent.client.UserAgentImplSafari.UserAgentImplSafari';
defineClass(138, 1, $intern_12, UserAgentImplSafari);
_.getCompileTimeValue = function getCompileTimeValue_3(){
  return 'safari';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplSafari.getCompileTimeValue';
_.getRuntimeValue = function getRuntimeValue_3(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplSafari.getRuntimeValue';
var Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 138);
function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.window.document;
}

$clinit_DomGlobal.displayName = 'elemental2.dom.DomGlobal.$clinit';
var document_0;
function $clinit_Cpu(){
  $clinit_Cpu = emptyMethod;
  PARITY_TABLE = stampJavaTypeInfo(getClassLiteralForArray(Z_classLit, 1), $intern_13, 10, 16, [true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true]);
}

$clinit_Cpu.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$clinit';
function $adc16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_0) + (value2 & $intern_0);
  (this$static.m_state.m_flags & 1) == 1 && ++result32;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$adc16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$adc16';
function $adc8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) + ((value2 & 255) << 16 >> 16) << 16 >> 16;
  (this$static.m_state.m_flags & 1) == 1 && ++result16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$adc8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$adc8';
function $add16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_0) + (value2 & $intern_0);
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$add16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$add16';
function $add8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) + ((value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$add8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$add8';
function $and16(this$static, value1, value2){
  var result16, result32;
  result32 = value1 & $intern_0 & value2 & $intern_0;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$and16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$and16';
function $and8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16 & (value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$and8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$and8';
function $callFar(this$static, segment, offset){
  $push_0(this$static, this$static.m_state.m_cs);
  $setCS(this$static.m_state, segment);
  $push_0(this$static, this$static.m_state.m_ip);
  $setIP(this$static.m_state, offset);
}

$callFar.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$callFar';
function $callNear(this$static, offset){
  $push_0(this$static, this$static.m_state.m_ip);
  $setIP(this$static.m_state, offset);
}

$callNear.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$callNear';
function $cmpsb(this$static){
  var address1, address2, diff;
  address1 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub8(this$static, $readByte_1(this$static.m_memory, address1), $readByte_1(this$static.m_memory, address2));
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-1:1;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$cmpsb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$cmpsb';
function $cmpsw(this$static){
  var address1, address2, diff;
  address1 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub16(this$static, $readWord(this$static.m_memory, address1), $readWord(this$static.m_memory, address2));
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-2:2;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$cmpsw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$cmpsw';
function $dec16(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $sub16(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

$dec16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$dec16';
function $dec8(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $sub8(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

$dec8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$dec8';
function $inc16(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $add16(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

$inc16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$inc16';
function $inc8(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $add8(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

$inc8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$inc8';
function $int86(this$static){
  var bombCount, i, address1, address2, diff;
  bombCount = this$static.m_state.m_bomb1count;
  if (bombCount != 0) {
    $setBomb1Count(this$static.m_state, bombCount - 1 << 24 >> 24);
    for (i = 0; i < 64; ++i) {
      address1 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
      $writeWord(this$static.m_memory, address1, this$static.m_state.m_ax);
      address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di + 2 << 16 >> 16);
      $writeWord(this$static.m_memory, address2, this$static.m_state.m_dx);
      diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-4:4;
      $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
    }
  }
}

$int86.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$int86';
function $int87(this$static){
  var address1, address2, bombCount, diff, i;
  bombCount = this$static.m_state.m_bomb2count;
  if (bombCount != 0) {
    $setBomb2Count(this$static.m_state, bombCount - 1 << 24 >> 24);
    for (i = 0; i <= $intern_0; ++i) {
      diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-i:i;
      address1 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di + diff << 16 >> 16);
      if ($readWord(this$static.m_memory, address1) == this$static.m_state.m_ax) {
        address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di + diff + 2 << 16 >> 16);
        if ($readWord(this$static.m_memory, address2) == this$static.m_state.m_dx) {
          $writeWord(this$static.m_memory, address1, this$static.m_state.m_bx);
          $writeWord(this$static.m_memory, address2, this$static.m_state.m_cx);
          break;
        }
      }
    }
  }
}

$int87.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$int87';
function $lodsb(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  $setAL(this$static.m_state, $readByte_1(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-1:1;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
}

$lodsb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$lodsb';
function $lodsw(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  $setAX(this$static.m_state, $readWord(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-2:2;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
}

$lodsw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$lodsw';
function $movsb(this$static){
  var diff, dst, src_0;
  src_0 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  dst = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeByte_0(this$static.m_memory, dst, $readByte_1(this$static.m_memory, src_0));
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-1:1;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$movsb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$movsb';
function $movsw(this$static){
  var diff, dst, src_0;
  src_0 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  dst = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeWord(this$static.m_memory, dst, $readWord(this$static.m_memory, src_0));
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-2:2;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$movsw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$movsw';
function $nextOpcode(this$static){
  var opcode;
  opcode = $nextByte(this$static.m_fetcher);
  switch (opcode & 240) {
    case 0:
      $opcode0X(this$static, opcode);
      break;
    case 16:
      $opcode1X(this$static, opcode);
      break;
    case 32:
      $opcode2X(this$static, opcode);
      break;
    case 48:
      $opcode3X(this$static, opcode);
      break;
    case 64:
      $opcode4X(this$static, opcode);
      break;
    case 80:
      $opcode5X(this$static, opcode);
      break;
    case 96:
      $opcode6X();
      break;
    case 112:
      $opcode7X(this$static, opcode);
      break;
    case 128:
      $opcode8X(this$static, opcode);
      break;
    case 144:
      $opcode9X(this$static, opcode);
      break;
    case 160:
      $opcodeAX(this$static, opcode);
      break;
    case 176:
      $opcodeBX(this$static, opcode);
      break;
    case 192:
      $opcodeCX(this$static, opcode);
      break;
    case 208:
      $opcodeDX(this$static, opcode);
      break;
    case 224:
      $opcodeEX(this$static, opcode);
      break;
    case 240:
      $opcodeFX(this$static, opcode);
  }
}

$nextOpcode.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$nextOpcode';
function $opcode0X(this$static, opcode){
  switch (opcode) {
    case 0:
      $reset(this$static.m_indirect);
      $setMem8(this$static.m_indirect, $add8(this$static, $getMem8(this$static.m_indirect), $getReg8(this$static.m_indirect)));
      break;
    case 1:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $add16(this$static, $getMem16(this$static.m_indirect), $getReg16(this$static.m_indirect)));
      break;
    case 2:
      $reset(this$static.m_indirect);
      $setReg8(this$static.m_indirect, $add8(this$static, $getReg8(this$static.m_indirect), $getMem8(this$static.m_indirect)));
      break;
    case 3:
      $reset(this$static.m_indirect);
      $setReg16(this$static.m_indirect, $add16(this$static, $getReg16(this$static.m_indirect), $getMem16(this$static.m_indirect)));
      break;
    case 4:
      $setAL(this$static.m_state, $add8(this$static, this$static.m_state.m_ax << 24 >> 24, $nextByte(this$static.m_fetcher)));
      break;
    case 5:
      $setAX(this$static.m_state, $add16(this$static, this$static.m_state.m_ax, $nextWord(this$static.m_fetcher)));
      break;
    case 6:
      $push_0(this$static, this$static.m_state.m_es);
      break;
    case 7:
      $setES(this$static.m_state, $pop(this$static));
      break;
    case 8:
      $reset(this$static.m_indirect);
      $setMem8(this$static.m_indirect, $or8(this$static, $getMem8(this$static.m_indirect), $getReg8(this$static.m_indirect)));
      break;
    case 9:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $or16(this$static, $getMem16(this$static.m_indirect), $getReg16(this$static.m_indirect)));
      break;
    case 10:
      $reset(this$static.m_indirect);
      $setReg8(this$static.m_indirect, $or8(this$static, $getReg8(this$static.m_indirect), $getMem8(this$static.m_indirect)));
      break;
    case 11:
      $reset(this$static.m_indirect);
      $setReg16(this$static.m_indirect, $or16(this$static, $getReg16(this$static.m_indirect), $getMem16(this$static.m_indirect)));
      break;
    case 12:
      $setAL(this$static.m_state, $or8(this$static, this$static.m_state.m_ax << 24 >> 24, $nextByte(this$static.m_fetcher)));
      break;
    case 13:
      $setAX(this$static.m_state, $or16(this$static, this$static.m_state.m_ax, $nextWord(this$static.m_fetcher)));
      break;
    case 14:
      $push_0(this$static, this$static.m_state.m_cs);
      break;
    case 15:
      throw toJs(new InvalidOpcodeException);
    default:throw toJs(new RuntimeException);
  }
}

$opcode0X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode0X';
function $opcode1X(this$static, opcode){
  switch (opcode) {
    case 16:
      $reset(this$static.m_indirect);
      $setMem8(this$static.m_indirect, $adc8(this$static, $getMem8(this$static.m_indirect), $getReg8(this$static.m_indirect)));
      break;
    case 17:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $adc16(this$static, $getMem16(this$static.m_indirect), $getReg16(this$static.m_indirect)));
      break;
    case 18:
      $reset(this$static.m_indirect);
      $setReg8(this$static.m_indirect, $adc8(this$static, $getReg8(this$static.m_indirect), $getMem8(this$static.m_indirect)));
      break;
    case 19:
      $reset(this$static.m_indirect);
      $setReg16(this$static.m_indirect, $adc16(this$static, $getReg16(this$static.m_indirect), $getMem16(this$static.m_indirect)));
      break;
    case 20:
      $setAL(this$static.m_state, $adc8(this$static, this$static.m_state.m_ax << 24 >> 24, $nextByte(this$static.m_fetcher)));
      break;
    case 21:
      $setAX(this$static.m_state, $adc16(this$static, this$static.m_state.m_ax, $nextWord(this$static.m_fetcher)));
      break;
    case 22:
      $push_0(this$static, this$static.m_state.m_ss);
      break;
    case 23:
      $setSS(this$static.m_state, $pop(this$static));
      break;
    case 24:
      $reset(this$static.m_indirect);
      $setMem8(this$static.m_indirect, $sbb8(this$static, $getMem8(this$static.m_indirect), $getReg8(this$static.m_indirect)));
      break;
    case 25:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $sbb16(this$static, $getMem16(this$static.m_indirect), $getReg16(this$static.m_indirect)));
      break;
    case 26:
      $reset(this$static.m_indirect);
      $setReg8(this$static.m_indirect, $sbb8(this$static, $getReg8(this$static.m_indirect), $getMem8(this$static.m_indirect)));
      break;
    case 27:
      $reset(this$static.m_indirect);
      $setReg16(this$static.m_indirect, $sbb16(this$static, $getReg16(this$static.m_indirect), $getMem16(this$static.m_indirect)));
      break;
    case 28:
      $setAL(this$static.m_state, $sbb8(this$static, this$static.m_state.m_ax << 24 >> 24, $nextByte(this$static.m_fetcher)));
      break;
    case 29:
      $setAX(this$static.m_state, $sbb16(this$static, this$static.m_state.m_ax, $nextWord(this$static.m_fetcher)));
      break;
    case 30:
      $push_0(this$static, this$static.m_state.m_ds);
      break;
    case 31:
      $setDS(this$static.m_state, $pop(this$static));
      break;
    default:throw toJs(new RuntimeException);
  }
}

$opcode1X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode1X';
function $opcode2X(this$static, opcode){
  switch (opcode) {
    case 32:
      $reset(this$static.m_indirect);
      $setMem8(this$static.m_indirect, $and8(this$static, $getMem8(this$static.m_indirect), $getReg8(this$static.m_indirect)));
      break;
    case 33:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $and16(this$static, $getMem16(this$static.m_indirect), $getReg16(this$static.m_indirect)));
      break;
    case 34:
      $reset(this$static.m_indirect);
      $setReg8(this$static.m_indirect, $and8(this$static, $getReg8(this$static.m_indirect), $getMem8(this$static.m_indirect)));
      break;
    case 35:
      $reset(this$static.m_indirect);
      $setReg16(this$static.m_indirect, $and16(this$static, $getReg16(this$static.m_indirect), $getMem16(this$static.m_indirect)));
      break;
    case 36:
      $setAL(this$static.m_state, $and8(this$static, this$static.m_state.m_ax << 24 >> 24, $nextByte(this$static.m_fetcher)));
      break;
    case 37:
      $setAX(this$static.m_state, $and16(this$static, this$static.m_state.m_ax, $nextWord(this$static.m_fetcher)));
      break;
    case 38:
    case 39:
      throw toJs(new UnimplementedOpcodeException);
    case 40:
      $reset(this$static.m_indirect);
      $setMem8(this$static.m_indirect, $sub8(this$static, $getMem8(this$static.m_indirect), $getReg8(this$static.m_indirect)));
      break;
    case 41:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $sub16(this$static, $getMem16(this$static.m_indirect), $getReg16(this$static.m_indirect)));
      break;
    case 42:
      $reset(this$static.m_indirect);
      $setReg8(this$static.m_indirect, $sub8(this$static, $getReg8(this$static.m_indirect), $getMem8(this$static.m_indirect)));
      break;
    case 43:
      $reset(this$static.m_indirect);
      $setReg16(this$static.m_indirect, $sub16(this$static, $getReg16(this$static.m_indirect), $getMem16(this$static.m_indirect)));
      break;
    case 44:
      $setAL(this$static.m_state, $sub8(this$static, this$static.m_state.m_ax << 24 >> 24, $nextByte(this$static.m_fetcher)));
      break;
    case 45:
      $setAX(this$static.m_state, $sub16(this$static, this$static.m_state.m_ax, $nextWord(this$static.m_fetcher)));
      break;
    case 46:
    case 47:
      throw toJs(new UnimplementedOpcodeException);
    default:throw toJs(new RuntimeException);
  }
}

$opcode2X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode2X';
function $opcode3X(this$static, opcode){
  switch (opcode) {
    case 48:
      $reset(this$static.m_indirect);
      $setMem8(this$static.m_indirect, $xor8(this$static, $getMem8(this$static.m_indirect), $getReg8(this$static.m_indirect)));
      break;
    case 49:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $xor16(this$static, $getMem16(this$static.m_indirect), $getReg16(this$static.m_indirect)));
      break;
    case 50:
      $reset(this$static.m_indirect);
      $setReg8(this$static.m_indirect, $xor8(this$static, $getReg8(this$static.m_indirect), $getMem8(this$static.m_indirect)));
      break;
    case 51:
      $reset(this$static.m_indirect);
      $setReg16(this$static.m_indirect, $xor16(this$static, $getReg16(this$static.m_indirect), $getMem16(this$static.m_indirect)));
      break;
    case 52:
      $setAL(this$static.m_state, $xor8(this$static, this$static.m_state.m_ax << 24 >> 24, $nextByte(this$static.m_fetcher)));
      break;
    case 53:
      $setAX(this$static.m_state, $xor16(this$static, this$static.m_state.m_ax, $nextWord(this$static.m_fetcher)));
      break;
    case 54:
    case 55:
      throw toJs(new UnimplementedOpcodeException);
    case 56:
      $reset(this$static.m_indirect);
      $sub8(this$static, $getMem8(this$static.m_indirect), $getReg8(this$static.m_indirect));
      break;
    case 57:
      $reset(this$static.m_indirect);
      $sub16(this$static, $getMem16(this$static.m_indirect), $getReg16(this$static.m_indirect));
      break;
    case 58:
      $reset(this$static.m_indirect);
      $sub8(this$static, $getReg8(this$static.m_indirect), $getMem8(this$static.m_indirect));
      break;
    case 59:
      $reset(this$static.m_indirect);
      $sub16(this$static, $getReg16(this$static.m_indirect), $getMem16(this$static.m_indirect));
      break;
    case 60:
      $sub8(this$static, this$static.m_state.m_ax << 24 >> 24, $nextByte(this$static.m_fetcher));
      break;
    case 61:
      $sub16(this$static, this$static.m_state.m_ax, $nextWord(this$static.m_fetcher));
      break;
    case 62:
    case 63:
      throw toJs(new UnimplementedOpcodeException);
    default:throw toJs(new RuntimeException);
  }
}

$opcode3X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode3X';
function $opcode4X(this$static, opcode){
  var index_0;
  index_0 = (opcode & 7) << 24 >> 24;
  switch (opcode) {
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
      $setReg16_0(this$static.m_regs, index_0, $inc16(this$static, $getReg16_0(this$static.m_regs, index_0)));
      break;
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
      $setReg16_0(this$static.m_regs, index_0, $dec16(this$static, $getReg16_0(this$static.m_regs, index_0)));
      break;
    default:throw toJs(new RuntimeException);
  }
}

$opcode4X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode4X';
function $opcode5X(this$static, opcode){
  var index_0;
  index_0 = (opcode & 7) << 24 >> 24;
  switch (opcode) {
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
      $push_0(this$static, $getReg16_0(this$static.m_regs, index_0));
      break;
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
      $setReg16_0(this$static.m_regs, index_0, $pop(this$static));
      break;
    default:throw toJs(new RuntimeException);
  }
}

$opcode5X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode5X';
function $opcode6X(){
  throw toJs(new InvalidOpcodeException);
}

$opcode6X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode6X';
function $opcode7X(this$static, opcode){
  var branch, offset;
  branch = false;
  switch (opcode) {
    case 112:
      branch = (this$static.m_state.m_flags & $intern_17) == $intern_17;
      break;
    case 113:
      branch = (this$static.m_state.m_flags & $intern_17) != $intern_17;
      break;
    case 114:
      branch = (this$static.m_state.m_flags & 1) == 1;
      break;
    case 115:
      branch = (this$static.m_state.m_flags & 1) != 1;
      break;
    case 116:
      branch = (this$static.m_state.m_flags & 64) == 64;
      break;
    case 117:
      branch = (this$static.m_state.m_flags & 64) != 64;
      break;
    case 118:
      branch = (this$static.m_state.m_flags & 1) == 1 || (this$static.m_state.m_flags & 64) == 64;
      break;
    case 119:
      branch = (this$static.m_state.m_flags & 1) != 1 && (this$static.m_state.m_flags & 64) != 64;
      break;
    case 120:
      branch = (this$static.m_state.m_flags & 128) == 128;
      break;
    case 121:
      branch = (this$static.m_state.m_flags & 128) != 128;
      break;
    case 122:
      branch = (this$static.m_state.m_flags & 4) == 4;
      break;
    case 123:
      branch = (this$static.m_state.m_flags & 4) != 4;
      break;
    case 124:
      branch = (this$static.m_state.m_flags & 128) == 128 != ((this$static.m_state.m_flags & $intern_17) == $intern_17);
      break;
    case 125:
      branch = (this$static.m_state.m_flags & 128) == 128 == ((this$static.m_state.m_flags & $intern_17) == $intern_17);
      break;
    case 126:
      branch = (this$static.m_state.m_flags & 64) == 64 || (this$static.m_state.m_flags & 128) == 128 != ((this$static.m_state.m_flags & $intern_17) == $intern_17);
      break;
    case 127:
      branch = (this$static.m_state.m_flags & 64) != 64 && (this$static.m_state.m_flags & 128) == 128 == ((this$static.m_state.m_flags & $intern_17) == $intern_17);
  }
  offset = $nextByte(this$static.m_fetcher);
  branch && $setIP(this$static.m_state, this$static.m_state.m_ip + offset << 16 >> 16);
}

$opcode7X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode7X';
function $opcode8X(this$static, opcode){
  var address, tmpByte, tmpWord;
  switch (opcode) {
    case -128:
    case -126:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $setMem8(this$static.m_indirect, $add8(this$static, $getMem8(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 1:
          $setMem8(this$static.m_indirect, $or8(this$static, $getMem8(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 2:
          $setMem8(this$static.m_indirect, $adc8(this$static, $getMem8(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 3:
          $setMem8(this$static.m_indirect, $sbb8(this$static, $getMem8(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 4:
          $setMem8(this$static.m_indirect, $and8(this$static, $getMem8(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 5:
          $setMem8(this$static.m_indirect, $sub8(this$static, $getMem8(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 6:
          $setMem8(this$static.m_indirect, $xor8(this$static, $getMem8(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 7:
          $sub8(this$static, $getMem8(this$static.m_indirect), $nextByte(this$static.m_fetcher));
          break;
        default:throw toJs(new RuntimeException);
      }

      break;
    case -127:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $setMem16(this$static.m_indirect, $add16(this$static, $getMem16(this$static.m_indirect), $nextWord(this$static.m_fetcher)));
          break;
        case 1:
          $setMem16(this$static.m_indirect, $or16(this$static, $getMem16(this$static.m_indirect), $nextWord(this$static.m_fetcher)));
          break;
        case 2:
          $setMem16(this$static.m_indirect, $adc16(this$static, $getMem16(this$static.m_indirect), $nextWord(this$static.m_fetcher)));
          break;
        case 3:
          $setMem16(this$static.m_indirect, $sbb16(this$static, $getMem16(this$static.m_indirect), $nextWord(this$static.m_fetcher)));
          break;
        case 4:
          $setMem16(this$static.m_indirect, $and16(this$static, $getMem16(this$static.m_indirect), $nextWord(this$static.m_fetcher)));
          break;
        case 5:
          $setMem16(this$static.m_indirect, $sub16(this$static, $getMem16(this$static.m_indirect), $nextWord(this$static.m_fetcher)));
          break;
        case 6:
          $setMem16(this$static.m_indirect, $xor16(this$static, $getMem16(this$static.m_indirect), $nextWord(this$static.m_fetcher)));
          break;
        case 7:
          $sub16(this$static, $getMem16(this$static.m_indirect), $nextWord(this$static.m_fetcher));
          break;
        default:throw toJs(new RuntimeException);
      }

      break;
    case -125:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $setMem16(this$static.m_indirect, $add16(this$static, $getMem16(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 1:
          $setMem16(this$static.m_indirect, $or16(this$static, $getMem16(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 2:
          $setMem16(this$static.m_indirect, $adc16(this$static, $getMem16(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 3:
          $setMem16(this$static.m_indirect, $sbb16(this$static, $getMem16(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 4:
          $setMem16(this$static.m_indirect, $and16(this$static, $getMem16(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 5:
          $setMem16(this$static.m_indirect, $sub16(this$static, $getMem16(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 6:
          $setMem16(this$static.m_indirect, $xor16(this$static, $getMem16(this$static.m_indirect), $nextByte(this$static.m_fetcher)));
          break;
        case 7:
          $sub16(this$static, $getMem16(this$static.m_indirect), $nextByte(this$static.m_fetcher));
          break;
        default:throw toJs(new RuntimeException);
      }

      break;
    case -124:
      $reset(this$static.m_indirect);
      $and8(this$static, $getReg8(this$static.m_indirect), $getMem8(this$static.m_indirect));
      break;
    case -123:
      $reset(this$static.m_indirect);
      $and16(this$static, $getReg16(this$static.m_indirect), $getMem16(this$static.m_indirect));
      break;
    case -122:
      $reset(this$static.m_indirect);
      tmpByte = $getReg8(this$static.m_indirect);
      $setReg8(this$static.m_indirect, $getMem8(this$static.m_indirect));
      $setMem8(this$static.m_indirect, tmpByte);
      break;
    case -121:
      $reset(this$static.m_indirect);
      tmpWord = $getReg16(this$static.m_indirect);
      $setReg16(this$static.m_indirect, $getMem16(this$static.m_indirect));
      $setMem16(this$static.m_indirect, tmpWord);
      break;
    case -120:
      $reset(this$static.m_indirect);
      $setMem8(this$static.m_indirect, $getReg8(this$static.m_indirect));
      break;
    case -119:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $getReg16(this$static.m_indirect));
      break;
    case -118:
      $reset(this$static.m_indirect);
      $setReg8(this$static.m_indirect, $getMem8(this$static.m_indirect));
      break;
    case -117:
      $reset(this$static.m_indirect);
      $setReg16(this$static.m_indirect, $getMem16(this$static.m_indirect));
      break;
    case -116:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $getSeg(this$static.m_indirect));
      break;
    case -115:
      $reset(this$static.m_indirect);
      address = this$static.m_indirect.m_memAddress;
      if (!address) {
        throw toJs(new InvalidOpcodeException);
      }

      $setReg16(this$static.m_indirect, address.m_offset);
      break;
    case -114:
      $reset(this$static.m_indirect);
      $setSeg(this$static.m_indirect, $getMem16(this$static.m_indirect));
      break;
    case -113:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $pop(this$static));
      break;
    default:throw toJs(new RuntimeException);
  }
}

$opcode8X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode8X';
function $opcode9X(this$static, opcode){
  var energy, flags, index_0, newCS, newIP, tmp;
  switch (opcode) {
    case -112:
    case -111:
    case -110:
    case -109:
    case -108:
    case -107:
    case -106:
    case -105:
      index_0 = (opcode & 7) << 24 >> 24;
      tmp = $getReg16_0(this$static.m_regs, index_0);
      $setReg16_0(this$static.m_regs, index_0, this$static.m_state.m_ax);
      $setAX(this$static.m_state, tmp);
      break;
    case -104:
      this$static.m_state.m_ax << 24 >> 24 < 0?$setAH(this$static.m_state, -1):$setAH(this$static.m_state, 0);
      break;
    case -103:
      this$static.m_state.m_ax < 0?(this$static.m_state.m_dx = -1 , undefined):(this$static.m_state.m_dx = 0 , undefined);
      break;
    case -102:
      newIP = $nextWord(this$static.m_fetcher);
      newCS = $nextWord(this$static.m_fetcher);
      $callFar(this$static, newCS, newIP);
      break;
    case -101:
      if ($nextByte(this$static.m_fetcher) != -101) {
        throw toJs(new UnsupportedOpcodeException);
      }

      energy = this$static.m_state.m_energy & $intern_0;
      energy < $intern_0 && $setEnergy(this$static.m_state, energy + 1 << 16 >> 16);
      break;
    case -100:
      $push_0(this$static, this$static.m_state.m_flags);
      break;
    case -99:
      $setFlags(this$static.m_state, $pop(this$static));
      break;
    case -98:
      flags = this$static.m_state.m_flags;
      flags = (flags & $intern_15) << 16 >> 16;
      flags = (flags | this$static.m_state.m_ax >> 8 << 24 >> 24) << 16 >> 16;
      $setFlags(this$static.m_state, flags);
      break;
    case -97:
      $setAH(this$static.m_state, this$static.m_state.m_flags << 24 >> 24);
      break;
    default:throw toJs(new RuntimeException);
  }
}

$opcode9X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode9X';
function $opcodeAX(this$static, opcode){
  var address;
  switch (opcode) {
    case -96:
      address = new RealModeAddress_0(this$static.m_state.m_ds, $nextWord(this$static.m_fetcher));
      $setAL(this$static.m_state, $readByte_1(this$static.m_memory, address));
      break;
    case -95:
      address = new RealModeAddress_0(this$static.m_state.m_ds, $nextWord(this$static.m_fetcher));
      $setAX(this$static.m_state, $readWord(this$static.m_memory, address));
      break;
    case -94:
      address = new RealModeAddress_0(this$static.m_state.m_ds, $nextWord(this$static.m_fetcher));
      $writeByte_0(this$static.m_memory, address, this$static.m_state.m_ax << 24 >> 24);
      break;
    case -93:
      address = new RealModeAddress_0(this$static.m_state.m_ds, $nextWord(this$static.m_fetcher));
      $writeWord(this$static.m_memory, address, this$static.m_state.m_ax);
      break;
    case -92:
      $movsb(this$static);
      break;
    case -91:
      $movsw(this$static);
      break;
    case -90:
      $cmpsb(this$static);
      break;
    case -89:
      $cmpsw(this$static);
      break;
    case -88:
      $and8(this$static, this$static.m_state.m_ax << 24 >> 24, $nextByte(this$static.m_fetcher));
      break;
    case -87:
      $and16(this$static, this$static.m_state.m_ax, $nextWord(this$static.m_fetcher));
      break;
    case -86:
      $stosb(this$static);
      break;
    case -85:
      $stosw(this$static);
      break;
    case -84:
      $lodsb(this$static);
      break;
    case -83:
      $lodsw(this$static);
      break;
    case -82:
      $scasb(this$static);
      break;
    case -81:
      $scasw(this$static);
      break;
    default:throw toJs(new RuntimeException);
  }
}

$opcodeAX.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeAX';
function $opcodeBX(this$static, opcode){
  var index_0;
  index_0 = (opcode & 7) << 24 >> 24;
  switch (opcode) {
    case -80:
    case -79:
    case -78:
    case -77:
    case -76:
    case -75:
    case -74:
    case -73:
      $setReg8_0(this$static.m_regs, index_0, $nextByte(this$static.m_fetcher));
      break;
    case -72:
    case -71:
    case -70:
    case -69:
    case -68:
    case -67:
    case -66:
    case -65:
      $setReg16_0(this$static.m_regs, index_0, $nextWord(this$static.m_fetcher));
      break;
    default:throw toJs(new RuntimeException);
  }
}

$opcodeBX.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeBX';
function $opcodeCX(this$static, opcode){
  var address1, address2, opcodeId, sizeToPop;
  switch (opcode) {
    case -64:
    case -63:
      throw toJs(new InvalidOpcodeException);
    case -62:
      sizeToPop = $nextWord(this$static.m_fetcher);
      $setIP(this$static.m_state, $pop(this$static));
      $setSP(this$static.m_state, this$static.m_state.m_sp + sizeToPop << 16 >> 16);
      break;
    case -61:
      $setIP(this$static.m_state, $pop(this$static));
      break;
    case -60:
      $reset(this$static.m_indirect);
      address1 = this$static.m_indirect.m_memAddress;
      if (!address1) {
        throw toJs(new InvalidOpcodeException);
      }

      address2 = new RealModeAddress_0(address1.m_segment, address1.m_offset + 2 << 16 >> 16);
      $setReg16(this$static.m_indirect, $readWord(this$static.m_memory, address1));
      $setES(this$static.m_state, $readWord(this$static.m_memory, address2));
      break;
    case -59:
      $reset(this$static.m_indirect);
      address1 = this$static.m_indirect.m_memAddress;
      if (!address1) {
        throw toJs(new InvalidOpcodeException);
      }

      address2 = new RealModeAddress_0(address1.m_segment, address1.m_offset + 2 << 16 >> 16);
      $setReg16(this$static.m_indirect, $readWord(this$static.m_memory, address1));
      $setDS(this$static.m_state, $readWord(this$static.m_memory, address2));
      break;
    case -58:
      $reset(this$static.m_indirect);
      $setMem8(this$static.m_indirect, $nextByte(this$static.m_fetcher));
      break;
    case -57:
      $reset(this$static.m_indirect);
      $setMem16(this$static.m_indirect, $nextWord(this$static.m_fetcher));
      break;
    case -56:
    case -55:
      throw toJs(new InvalidOpcodeException);
    case -54:
      sizeToPop = $nextWord(this$static.m_fetcher);
      $setIP(this$static.m_state, $pop(this$static));
      $setCS(this$static.m_state, $pop(this$static));
      $setSP(this$static.m_state, this$static.m_state.m_sp + sizeToPop << 16 >> 16);
      break;
    case -53:
      $setIP(this$static.m_state, $pop(this$static));
      $setCS(this$static.m_state, $pop(this$static));
      break;
    case -50:
    case -52:
      throw toJs(new IntOpcodeException);
    case -51:
      {
        opcodeId = $nextByte(this$static.m_fetcher);
        if (opcodeId == -122) {
          $int86(this$static);
        }
         else if (opcodeId == -121) {
          $int87(this$static);
        }
         else {
          throw toJs(new IntOpcodeException);
        }
      }

      break;
    case -49:
      $setIP(this$static.m_state, $pop(this$static));
      $setCS(this$static.m_state, $pop(this$static));
      $setFlags(this$static.m_state, $pop(this$static));
      break;
    default:throw toJs(new RuntimeException);
  }
}

$opcodeCX.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeCX';
function $opcodeDX(this$static, opcode){
  var address;
  switch (opcode) {
    case -48:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $rol8(this$static, 1);
          break;
        case 1:
          $ror8(this$static, 1);
          break;
        case 2:
          $rcl8(this$static, 1);
          break;
        case 3:
          $rcr8(this$static, 1);
          break;
        case 4:
          $shl8(this$static, 1);
          break;
        case 5:
          $shr8(this$static, 1);
          break;
        case 6:
          throw toJs(new InvalidOpcodeException);
        case 7:
          $sar8(this$static, 1);
          break;
        default:throw toJs(new RuntimeException);
      }

      break;
    case -47:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $rol16(this$static, 1);
          break;
        case 1:
          $ror16(this$static, 1);
          break;
        case 2:
          $rcl16(this$static, 1);
          break;
        case 3:
          $rcr16(this$static, 1);
          break;
        case 4:
          $shl16(this$static, 1);
          break;
        case 5:
          $shr16(this$static, 1);
          break;
        case 6:
          throw toJs(new InvalidOpcodeException);
        case 7:
          $sar16(this$static, 1);
          break;
        default:throw toJs(new RuntimeException);
      }

      break;
    case -46:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $rol8(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 1:
          $ror8(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 2:
          $rcl8(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 3:
          $rcr8(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 4:
          $shl8(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 5:
          $shr8(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 6:
          throw toJs(new InvalidOpcodeException);
        case 7:
          $sar8(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        default:throw toJs(new RuntimeException);
      }

      break;
    case -45:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $rol16(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 1:
          $ror16(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 2:
          $rcl16(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 3:
          $rcr16(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 4:
          $shl16(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 5:
          $shr16(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        case 6:
          throw toJs(new InvalidOpcodeException);
        case 7:
          $sar16(this$static, this$static.m_state.m_cx << 24 >> 24);
          break;
        default:throw toJs(new RuntimeException);
      }

      break;
    case -44:
    case -43:
      throw toJs(new UnimplementedOpcodeException);
    case -42:
      throw toJs(new InvalidOpcodeException);
    case -41:
      address = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx + ((this$static.m_state.m_ax << 24 >> 24 & 255) << 16 >> 16) << 16 >> 16);
      $setAL(this$static.m_state, $readByte_1(this$static.m_memory, address));
      break;
    case -40:
    case -39:
    case -38:
    case -37:
    case -36:
    case -35:
    case -34:
    case -33:
      throw toJs(new UnsupportedOpcodeException);
    default:throw toJs(new RuntimeException);
  }
}

$opcodeDX.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeDX';
function $opcodeEX(this$static, opcode){
  var newCS, newCX, newIP, offset16, offset8;
  switch (opcode) {
    case -32:
      offset8 = $nextByte(this$static.m_fetcher);
      newCX = this$static.m_state.m_cx - 1 << 16 >> 16;
      $setCX(this$static.m_state, newCX);
      newCX != 0 && (this$static.m_state.m_flags & 64) != 64 && $setIP(this$static.m_state, this$static.m_state.m_ip + offset8 << 16 >> 16);
      break;
    case -31:
      offset8 = $nextByte(this$static.m_fetcher);
      newCX = this$static.m_state.m_cx - 1 << 16 >> 16;
      $setCX(this$static.m_state, newCX);
      newCX != 0 && (this$static.m_state.m_flags & 64) == 64 && $setIP(this$static.m_state, this$static.m_state.m_ip + offset8 << 16 >> 16);
      break;
    case -30:
      offset8 = $nextByte(this$static.m_fetcher);
      newCX = this$static.m_state.m_cx - 1 << 16 >> 16;
      $setCX(this$static.m_state, newCX);
      newCX != 0 && $setIP(this$static.m_state, this$static.m_state.m_ip + offset8 << 16 >> 16);
      break;
    case -29:
      offset8 = $nextByte(this$static.m_fetcher);
      this$static.m_state.m_cx == 0 && $setIP(this$static.m_state, this$static.m_state.m_ip + offset8 << 16 >> 16);
      break;
    case -28:
    case -27:
    case -26:
    case -25:
      throw toJs(new UnsupportedOpcodeException);
    case -24:
      offset16 = $nextWord(this$static.m_fetcher);
      $callNear(this$static, this$static.m_state.m_ip + offset16 << 16 >> 16);
      break;
    case -23:
      offset16 = $nextWord(this$static.m_fetcher);
      $setIP(this$static.m_state, this$static.m_state.m_ip + offset16 << 16 >> 16);
      break;
    case -22:
      newIP = $nextWord(this$static.m_fetcher);
      newCS = $nextWord(this$static.m_fetcher);
      $setIP(this$static.m_state, newIP);
      $setCS(this$static.m_state, newCS);
      break;
    case -21:
      offset8 = $nextByte(this$static.m_fetcher);
      $setIP(this$static.m_state, this$static.m_state.m_ip + offset8 << 16 >> 16);
      break;
    case -20:
    case -19:
    case -18:
    case -17:
      throw toJs(new UnsupportedOpcodeException);
    default:throw toJs(new RuntimeException);
  }
}

$opcodeEX.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeEX';
function $opcodeFX(this$static, opcode){
  var address, divisor, doneLooping, newCS, newIP, nextOpcode, quotient, result, tmp;
  switch (opcode) {
    case -12:
    case -16:
      throw toJs(new UnsupportedOpcodeException);
    case -15:
      throw toJs(new InvalidOpcodeException);
    case -14:
      nextOpcode = $nextByte(this$static.m_fetcher);
      doneLooping = true;
      if (this$static.m_state.m_cx != 0) {
        $setCX(this$static.m_state, this$static.m_state.m_cx - 1 << 16 >> 16);
        doneLooping = false;
      }

      switch (nextOpcode) {
        case -90:
          if (!doneLooping) {
            $cmpsb(this$static);
            doneLooping = (this$static.m_state.m_flags & 64) == 64;
          }

          break;
        case -89:
          if (!doneLooping) {
            $cmpsw(this$static);
            doneLooping = (this$static.m_state.m_flags & 64) == 64;
          }

          break;
        case -82:
          if (!doneLooping) {
            $scasb(this$static);
            doneLooping = (this$static.m_state.m_flags & 64) == 64;
          }

          break;
        case -81:
          if (!doneLooping) {
            $scasw(this$static);
            doneLooping = (this$static.m_state.m_flags & 64) == 64;
          }

          break;
        default:throw toJs(new InvalidOpcodeException);
      }

      doneLooping || $setIP(this$static.m_state, this$static.m_state.m_ip - 2 << 16 >> 16);
      break;
    case -13:
      nextOpcode = $nextByte(this$static.m_fetcher);
      doneLooping = true;
      if (this$static.m_state.m_cx != 0) {
        $setCX(this$static.m_state, this$static.m_state.m_cx - 1 << 16 >> 16);
        doneLooping = false;
      }

      switch (nextOpcode) {
        case -92:
          doneLooping || $movsb(this$static);
          break;
        case -91:
          doneLooping || $movsw(this$static);
          break;
        case -90:
          if (!doneLooping) {
            $cmpsb(this$static);
            doneLooping = (this$static.m_state.m_flags & 64) != 64;
          }

          break;
        case -89:
          if (!doneLooping) {
            $cmpsw(this$static);
            doneLooping = (this$static.m_state.m_flags & 64) != 64;
          }

          break;
        case -86:
          doneLooping || $stosb(this$static);
          break;
        case -85:
          doneLooping || $stosw(this$static);
          break;
        case -84:
          doneLooping || $lodsb(this$static);
          break;
        case -83:
          doneLooping || $lodsw(this$static);
          break;
        case -82:
          if (!doneLooping) {
            $scasb(this$static);
            doneLooping = (this$static.m_state.m_flags & 64) != 64;
          }

          break;
        case -81:
          if (!doneLooping) {
            $scasw(this$static);
            doneLooping = (this$static.m_state.m_flags & 64) != 64;
          }

          break;
        default:throw toJs(new InvalidOpcodeException);
      }

      doneLooping || $setIP(this$static.m_state, this$static.m_state.m_ip - 2 << 16 >> 16);
      break;
    case -11:
      $setCarryFlag(this$static.m_state, (this$static.m_state.m_flags & 1) != 1);
      break;
    case -10:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $and8(this$static, $getMem8(this$static.m_indirect), $nextByte(this$static.m_fetcher));
          break;
        case 1:
          throw toJs(new InvalidOpcodeException);
        case 2:
          $setMem8(this$static.m_indirect, ($getMem8(this$static.m_indirect) ^ 255) << 24 >> 24);
          break;
        case 3:
          $setMem8(this$static.m_indirect, $sub8(this$static, 0, $getMem8(this$static.m_indirect)));
          break;
        case 4:
          result = ((this$static.m_state.m_ax << 24 >> 24 & 255) << 16 >> 16) * (($getMem8(this$static.m_indirect) & 255) << 16 >> 16) << 16 >> 16;
          $setAH(this$static.m_state, result >> 8 << 24 >> 24);
          $setAL(this$static.m_state, result << 24 >> 24);
          if (this$static.m_state.m_ax >> 8 << 24 >> 24 == 0) {
            $setOverflowFlag(this$static.m_state, false);
            $setCarryFlag(this$static.m_state, false);
          }
           else {
            $setOverflowFlag(this$static.m_state, true);
            $setCarryFlag(this$static.m_state, true);
          }

          break;
        case 7:
        case 5:
          throw toJs(new UnimplementedOpcodeException);
        case 6:
          tmp = this$static.m_state.m_ax & $intern_0;
          divisor = ($getMem8(this$static.m_indirect) & 255) << 16 >> 16;
          if (divisor == 0) {
            throw toJs(new DivisionException);
          }

          quotient = (tmp / divisor | 0) << 16 >> 16;
          if (quotient > 255) {
            throw toJs(new DivisionException);
          }

          $setAL(this$static.m_state, quotient << 24 >> 24);
          $setAH(this$static.m_state, tmp % divisor << 24 >> 24);
          break;
        default:throw toJs(new RuntimeException);
      }

      break;
    case -9:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $and16(this$static, $getMem16(this$static.m_indirect), $nextWord(this$static.m_fetcher));
          break;
        case 1:
          throw toJs(new InvalidOpcodeException);
        case 2:
          $setMem16(this$static.m_indirect, ($getMem16(this$static.m_indirect) ^ $intern_0) << 16 >> 16);
          break;
        case 3:
          $setMem16(this$static.m_indirect, $sub16(this$static, 0, $getMem16(this$static.m_indirect)));
          break;
        case 4:
          result = (this$static.m_state.m_ax & $intern_0) * ($getMem16(this$static.m_indirect) & $intern_0);
          $setDX(this$static.m_state, result >> 16 << 16 >> 16);
          $setAX(this$static.m_state, result << 16 >> 16);
          if (this$static.m_state.m_dx == 0) {
            $setOverflowFlag(this$static.m_state, false);
            $setCarryFlag(this$static.m_state, false);
          }
           else {
            $setOverflowFlag(this$static.m_state, true);
            $setCarryFlag(this$static.m_state, true);
          }

          break;
        case 7:
        case 5:
          throw toJs(new UnimplementedOpcodeException);
        case 6:
          tmp = and_0(((this$static.m_state.m_dx & $intern_0) << 16) + (this$static.m_state.m_ax & $intern_0), -1);
          divisor = $getMem16(this$static.m_indirect) & $intern_0;
          if (divisor == 0) {
            throw toJs(new DivisionException);
          }

          quotient = toInt_0(div(tmp, divisor));
          if (quotient > $intern_0) {
            throw toJs(new DivisionException);
          }

          $setAX(this$static.m_state, quotient << 16 >> 16);
          $setDX(this$static.m_state, toInt_0(mod(tmp, divisor)) << 16 >> 16);
          break;
        default:throw toJs(new RuntimeException);
      }

      break;
    case -8:
      $setCarryFlag(this$static.m_state, false);
      break;
    case -7:
      $setCarryFlag(this$static.m_state, true);
      break;
    case -6:
      $setInterruptFlag(this$static.m_state, false);
      break;
    case -5:
      $setInterruptFlag(this$static.m_state, true);
      break;
    case -4:
      $setDirectionFlag(this$static.m_state, false);
      break;
    case -3:
      $setDirectionFlag(this$static.m_state, true);
      break;
    case -2:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $setMem8(this$static.m_indirect, $inc8(this$static, $getMem8(this$static.m_indirect)));
          break;
        case 1:
          $setMem8(this$static.m_indirect, $dec8(this$static, $getMem8(this$static.m_indirect)));
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          throw toJs(new InvalidOpcodeException);
        default:throw toJs(new RuntimeException);
      }

      break;
    case -1:
      $reset(this$static.m_indirect);
      switch (this$static.m_indirect.m_regIndex) {
        case 0:
          $setMem16(this$static.m_indirect, $inc16(this$static, $getMem16(this$static.m_indirect)));
          break;
        case 1:
          $setMem16(this$static.m_indirect, $dec16(this$static, $getMem16(this$static.m_indirect)));
          break;
        case 2:
          $callNear(this$static, $getMem16(this$static.m_indirect));
          break;
        case 3:
          {
            address = this$static.m_indirect.m_memAddress;
            if (!address) {
              throw toJs(new InvalidOpcodeException);
            }
            newIP = $readWord(this$static.m_memory, address);
            address = new RealModeAddress_0(address.m_segment, address.m_offset + 2 << 16 >> 16);
            newCS = $readWord(this$static.m_memory, address);
            $callFar(this$static, newCS, newIP);
          }

          break;
        case 4:
          $setIP(this$static.m_state, $getMem16(this$static.m_indirect));
          break;
        case 5:
          {
            address = this$static.m_indirect.m_memAddress;
            if (!address) {
              throw toJs(new InvalidOpcodeException);
            }
            newIP = $readWord(this$static.m_memory, address);
            address = new RealModeAddress_0(address.m_segment, address.m_offset + 2 << 16 >> 16);
            newCS = $readWord(this$static.m_memory, address);
            $setCS(this$static.m_state, newCS);
            $setIP(this$static.m_state, newIP);
          }

          break;
        case 6:
          $push_0(this$static, $getMem16(this$static.m_indirect));
          break;
        case 7:
          throw toJs(new InvalidOpcodeException);
        default:throw toJs(new RuntimeException);
      }

      break;
    default:throw toJs(new RuntimeException);
  }
}

$opcodeFX.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeFX';
function $or16(this$static, value1, value2){
  var result16, result32;
  result32 = value1 & $intern_0 | value2 & $intern_0;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$or16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$or16';
function $or8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16 | (value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$or8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$or8';
function $pop(this$static){
  var stackPtr, value_0;
  stackPtr = new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_sp);
  value_0 = $readWord(this$static.m_memory, stackPtr);
  $setSP(this$static.m_state, this$static.m_state.m_sp + 2 << 16 >> 16);
  return value_0;
}

$pop.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$pop';
function $push_0(this$static, value_0){
  var stackPtr;
  $setSP(this$static.m_state, this$static.m_state.m_sp - 2 << 16 >> 16);
  stackPtr = new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_sp);
  $writeWord(this$static.m_memory, stackPtr, value_0);
}

$push_0.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$push';
function $rcl16(this$static, count){
  var cf, i, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    cf = ((this$static.m_state.m_flags & 1) == 1?1:0) << 24 >> 24;
    val = (val << 1 | cf) << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    $setCarryFlag(this$static.m_state, msb1 != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $updateFlagsNoCarryOverflow16(this$static, val);
  }
}

$rcl16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$rcl16';
function $rcl8(this$static, count){
  var cf, i, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem8(this$static.m_indirect);
    msb1 = (val >> 7 & 1) << 24 >> 24;
    msb2 = (val >> 6 & 1) << 24 >> 24;
    cf = ((this$static.m_state.m_flags & 1) == 1?1:0) << 24 >> 24;
    val = (val << 1 | cf) << 24 >> 24;
    $setMem8(this$static.m_indirect, val);
    $setCarryFlag(this$static.m_state, msb1 != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
  }
}

$rcl8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$rcl8';
function $rcr16(this$static, count){
  var cf, i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    cf = ((this$static.m_state.m_flags & 1) == 1?1:0) << 24 >> 24;
    val = ((val & $intern_0) >>> 1 | cf << 15) << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
  }
}

$rcr16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$rcr16';
function $rcr8(this$static, count){
  var cf, i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem8(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    cf = ((this$static.m_state.m_flags & 1) == 1?1:0) << 24 >> 24;
    val = ((val & 255) >>> 1 | cf << 7) << 24 >> 24;
    $setMem8(this$static.m_indirect, val);
    msb1 = (val >> 7 & 1) << 24 >> 24;
    msb2 = (val >> 6 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
  }
}

$rcr8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$rcr8';
function $rol16(this$static, count){
  var i, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    val = (val << 1 | msb1) << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    $setCarryFlag(this$static.m_state, msb1 != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $updateFlagsNoCarryOverflow16(this$static, val);
  }
}

$rol16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$rol16';
function $rol8(this$static, count){
  var i, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem8(this$static.m_indirect);
    msb1 = (val >> 7 & 1) << 24 >> 24;
    msb2 = (val >> 6 & 1) << 24 >> 24;
    val = (val << 1 | msb1) << 24 >> 24;
    $setMem8(this$static.m_indirect, val);
    $setCarryFlag(this$static.m_state, msb1 != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
  }
}

$rol8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$rol8';
function $ror16(this$static, count){
  var i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    val = ((val & $intern_0) >>> 1 | lsb << 15) << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $updateFlagsNoCarryOverflow16(this$static, val);
  }
}

$ror16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$ror16';
function $ror8(this$static, count){
  var i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem8(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    val = ((val & 255) >>> 1 | lsb << 7) << 24 >> 24;
    $setMem8(this$static.m_indirect, val);
    msb1 = (val >> 7 & 1) << 24 >> 24;
    msb2 = (val >> 6 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
  }
}

$ror8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$ror8';
function $sar16(this$static, count){
  var i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    val = val >> 1 << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $setZeroFlag(this$static.m_state, val == 0);
  }
}

$sar16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sar16';
function $sar8(this$static, count){
  var i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem8(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    val = val >> 1 << 24 >> 24;
    $setMem8(this$static.m_indirect, val);
    msb1 = (val >> 7 & 1) << 24 >> 24;
    msb2 = (val >> 6 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $updateFlagsNoCarryOverflow8(this$static, val);
  }
}

$sar8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sar8';
function $sbb16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_0) - (value2 & $intern_0);
  (this$static.m_state.m_flags & 1) == 1 && --result32;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$sbb16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sbb16';
function $sbb8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) - ((value2 & 255) << 16 >> 16) << 16 >> 16;
  (this$static.m_state.m_flags & 1) == 1 && --result16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$sbb8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sbb8';
function $scasb(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub8(this$static, this$static.m_state.m_ax << 24 >> 24, $readByte_1(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-1:1;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$scasb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$scasb';
function $scasw(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub16(this$static, this$static.m_state.m_ax, $readWord(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-2:2;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$scasw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$scasw';
function $shl16(this$static, count){
  var i, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    val = val << 1 << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    $setCarryFlag(this$static.m_state, msb1 != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $setZeroFlag(this$static.m_state, val == 0);
  }
}

$shl16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$shl16';
function $shl8(this$static, count){
  var i, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem8(this$static.m_indirect);
    msb1 = (val >> 7 & 1) << 24 >> 24;
    msb2 = (val >> 6 & 1) << 24 >> 24;
    val = val << 1 << 24 >> 24;
    $setMem8(this$static.m_indirect, val);
    $setCarryFlag(this$static.m_state, msb1 != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $updateFlagsNoCarryOverflow8(this$static, val);
  }
}

$shl8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$shl8';
function $shr16(this$static, count){
  var i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    val = (val & $intern_0) >>> 1 << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $setZeroFlag(this$static.m_state, val == 0);
  }
}

$shr16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$shr16';
function $shr8(this$static, count){
  var i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem8(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    val = (val & 255) >>> 1 << 24 >> 24;
    $setMem8(this$static.m_indirect, val);
    msb1 = (val >> 7 & 1) << 24 >> 24;
    msb2 = (val >> 6 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $updateFlagsNoCarryOverflow8(this$static, val);
  }
}

$shr8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$shr8';
function $stosb(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeByte_0(this$static.m_memory, address, this$static.m_state.m_ax << 24 >> 24);
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-1:1;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$stosb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$stosb';
function $stosdw(this$static){
  var address1, address2, diff;
  address1 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeWord(this$static.m_memory, address1, this$static.m_state.m_ax);
  address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di + 2 << 16 >> 16);
  $writeWord(this$static.m_memory, address2, this$static.m_state.m_dx);
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-4:4;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$stosdw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$stosdw';
function $stosw(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeWord(this$static.m_memory, address, this$static.m_state.m_ax);
  diff = (this$static.m_state.m_flags & $intern_16) == $intern_16?-2:2;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$stosw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$stosw';
function $sub16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_0) - (value2 & $intern_0);
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$sub16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sub16';
function $sub8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) - ((value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$sub8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sub8';
function $updateFlagsNoCarryOverflow16(this$static, value_0){
  var byteValue;
  byteValue = value_0 << 24 >> 24;
  $setParityFlag(this$static.m_state, PARITY_TABLE[(byteValue & 255) << 16 >> 16]);
  $setSignFlag(this$static.m_state, (value_0 & 32768) != 0);
  $setZeroFlag(this$static.m_state, value_0 == 0);
}

$updateFlagsNoCarryOverflow16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$updateFlagsNoCarryOverflow16';
function $updateFlagsNoCarryOverflow8(this$static, value_0){
  $setParityFlag(this$static.m_state, PARITY_TABLE[(value_0 & 255) << 16 >> 16]);
  $setSignFlag(this$static.m_state, (value_0 & 128) != 0);
  $setZeroFlag(this$static.m_state, value_0 == 0);
}

$updateFlagsNoCarryOverflow8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$updateFlagsNoCarryOverflow8';
function $xor16(this$static, value1, value2){
  var result16, result32;
  result32 = value1 & $intern_0 ^ value2 & $intern_0;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$xor16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$xor16';
function $xor8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16 ^ (value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$xor8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$xor8';
function Cpu(state, memory){
  $clinit_Cpu();
  this.m_state = state;
  this.m_memory = memory;
  this.m_fetcher = new OpcodeFetcher(this.m_state, this.m_memory);
  this.m_regs = new RegisterIndexingDecoder(this.m_state);
  this.m_indirect = new IndirectAddressingDecoder(this.m_state, this.m_memory, this.m_fetcher);
}

Cpu.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.Cpu';
defineClass(219, 1, {}, Cpu);
var PARITY_TABLE;
var Lil_co_codeguru_corewars8086_cpu_Cpu_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'Cpu', 219);
function CpuException(){
  Exception.call(this);
}

CpuException.displayName = 'il.co.codeguru.corewars8086.cpu.CpuException.CpuException';
defineClass(26, 7, $intern_18);
var Lil_co_codeguru_corewars8086_cpu_CpuException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'CpuException', 26);
function $setAH(this$static, value_0){
  this$static.m_ax = (this$static.m_ax & 255) << 16 >> 16;
  this$static.m_ax = (this$static.m_ax | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

$setAH.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setAH';
function $setAL(this$static, value_0){
  this$static.m_ax = (this$static.m_ax & $intern_15) << 16 >> 16;
  this$static.m_ax = this$static.m_ax | (value_0 & 255) << 16 >> 16;
}

$setAL.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setAL';
function $setAX(this$static, value_0){
  this$static.m_ax = value_0;
}

$setAX.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setAX';
function $setBH(this$static, value_0){
  this$static.m_bx = (this$static.m_bx & 255) << 16 >> 16;
  this$static.m_bx = (this$static.m_bx | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

$setBH.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBH';
function $setBL(this$static, value_0){
  this$static.m_bx = (this$static.m_bx & $intern_15) << 16 >> 16;
  this$static.m_bx = this$static.m_bx | (value_0 & 255) << 16 >> 16;
}

$setBL.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBL';
function $setBP(this$static, value_0){
  this$static.m_bp = value_0;
}

$setBP.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBP';
function $setBX(this$static, value_0){
  this$static.m_bx = value_0;
}

$setBX.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBX';
function $setBomb1Count(this$static, value_0){
  this$static.m_bomb1count = value_0;
}

$setBomb1Count.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBomb1Count';
function $setBomb2Count(this$static, value_0){
  this$static.m_bomb2count = value_0;
}

$setBomb2Count.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBomb2Count';
function $setCH(this$static, value_0){
  this$static.m_cx = (this$static.m_cx & 255) << 16 >> 16;
  this$static.m_cx = (this$static.m_cx | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

$setCH.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCH';
function $setCL(this$static, value_0){
  this$static.m_cx = (this$static.m_cx & $intern_15) << 16 >> 16;
  this$static.m_cx = this$static.m_cx | (value_0 & 255) << 16 >> 16;
}

$setCL.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCL';
function $setCS(this$static, value_0){
  this$static.m_cs = value_0;
}

$setCS.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCS';
function $setCX(this$static, value_0){
  this$static.m_cx = value_0;
}

$setCX.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCX';
function $setCarryFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 1) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -2) << 16 >> 16);
}

$setCarryFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCarryFlag';
function $setDH(this$static, value_0){
  this$static.m_dx = (this$static.m_dx & 255) << 16 >> 16;
  this$static.m_dx = (this$static.m_dx | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

$setDH.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDH';
function $setDI(this$static, value_0){
  this$static.m_di = value_0;
}

$setDI.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDI';
function $setDL(this$static, value_0){
  this$static.m_dx = (this$static.m_dx & $intern_15) << 16 >> 16;
  this$static.m_dx = this$static.m_dx | (value_0 & 255) << 16 >> 16;
}

$setDL.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDL';
function $setDS(this$static, value_0){
  this$static.m_ds = value_0;
}

$setDS.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDS';
function $setDX(this$static, value_0){
  this$static.m_dx = value_0;
}

$setDX.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDX';
function $setDirectionFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | $intern_16) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -1025) << 16 >> 16);
}

$setDirectionFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDirectionFlag';
function $setES(this$static, value_0){
  this$static.m_es = value_0;
}

$setES.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setES';
function $setEnergy(this$static, value_0){
  this$static.m_energy = value_0;
}

$setEnergy.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setEnergy';
function $setFlags(this$static, value_0){
  this$static.m_flags = value_0;
}

$setFlags.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setFlags';
function $setIP(this$static, value_0){
  this$static.m_ip = value_0;
}

$setIP.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setIP';
function $setInterruptFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 512) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -513) << 16 >> 16);
}

$setInterruptFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setInterruptFlag';
function $setOverflowFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | $intern_17) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -2049) << 16 >> 16);
}

$setOverflowFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setOverflowFlag';
function $setParityFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 4) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -5) << 16 >> 16);
}

$setParityFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setParityFlag';
function $setSI(this$static, value_0){
  this$static.m_si = value_0;
}

$setSI.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setSI';
function $setSP(this$static, value_0){
  this$static.m_sp = value_0;
}

$setSP.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setSP';
function $setSS(this$static, value_0){
  this$static.m_ss = value_0;
}

$setSS.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setSS';
function $setSignFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 128) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -129) << 16 >> 16);
}

$setSignFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setSignFlag';
function $setZeroFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 64) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -65) << 16 >> 16);
}

$setZeroFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setZeroFlag';
function CpuState(){
}

CpuState.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.CpuState';
defineClass(195, 1, {}, CpuState);
_.m_ax = 0;
_.m_bomb1count = 0;
_.m_bomb2count = 0;
_.m_bp = 0;
_.m_bx = 0;
_.m_cs = 0;
_.m_cx = 0;
_.m_di = 0;
_.m_ds = 0;
_.m_dx = 0;
_.m_energy = 0;
_.m_es = 0;
_.m_flags = 0;
_.m_ip = 0;
_.m_si = 0;
_.m_sp = 0;
_.m_ss = 0;
var Lil_co_codeguru_corewars8086_cpu_CpuState_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'CpuState', 195);
function DivisionException(){
  CpuException.call(this);
}

DivisionException.displayName = 'il.co.codeguru.corewars8086.cpu.DivisionException.DivisionException';
defineClass(72, 26, $intern_18, DivisionException);
var Lil_co_codeguru_corewars8086_cpu_DivisionException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'DivisionException', 72);
function $getMem16(this$static){
  if (this$static.m_memAddress) {
    return $readWord(this$static.m_memory, this$static.m_memAddress);
  }
  return $getReg16_0(this$static.m_regs, this$static.m_memIndex);
}

$getMem16.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMem16';
function $getMem8(this$static){
  if (this$static.m_memAddress) {
    return $readByte_1(this$static.m_memory, this$static.m_memAddress);
  }
  return $getReg8_0(this$static.m_regs, this$static.m_memIndex);
}

$getMem8.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMem8';
function $getMode0Address(this$static){
  switch (this$static.m_memIndex) {
    case 0:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx + this$static.m_state.m_si << 16 >> 16);
    case 1:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx + this$static.m_state.m_di << 16 >> 16);
    case 2:
      return new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_bp + this$static.m_state.m_si << 16 >> 16);
    case 3:
      return new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_bp + this$static.m_state.m_di << 16 >> 16);
    case 4:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
    case 5:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_di);
    case 6:
      return new RealModeAddress_0(this$static.m_state.m_ds, $nextWord(this$static.m_fetcher));
    case 7:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx);
    default:throw toJs(new RuntimeException);
  }
}

$getMode0Address.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMode0Address';
function $getMode1Address(this$static){
  switch (this$static.m_memIndex) {
    case 0:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx + this$static.m_state.m_si + $nextByte(this$static.m_fetcher) << 16 >> 16);
    case 1:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx + this$static.m_state.m_di + $nextByte(this$static.m_fetcher) << 16 >> 16);
    case 2:
      return new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_bp + this$static.m_state.m_si + $nextByte(this$static.m_fetcher) << 16 >> 16);
    case 3:
      return new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_bp + this$static.m_state.m_di + $nextByte(this$static.m_fetcher) << 16 >> 16);
    case 4:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si + $nextByte(this$static.m_fetcher) << 16 >> 16);
    case 5:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_di + $nextByte(this$static.m_fetcher) << 16 >> 16);
    case 6:
      return new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_bp + $nextByte(this$static.m_fetcher) << 16 >> 16);
    case 7:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx + $nextByte(this$static.m_fetcher) << 16 >> 16);
    default:throw toJs(new RuntimeException);
  }
}

$getMode1Address.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMode1Address';
function $getMode2Address(this$static){
  switch (this$static.m_memIndex) {
    case 0:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx + this$static.m_state.m_si + $nextWord(this$static.m_fetcher) << 16 >> 16);
    case 1:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx + this$static.m_state.m_di + $nextWord(this$static.m_fetcher) << 16 >> 16);
    case 2:
      return new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_bp + this$static.m_state.m_si + $nextWord(this$static.m_fetcher) << 16 >> 16);
    case 3:
      return new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_bp + this$static.m_state.m_di + $nextWord(this$static.m_fetcher) << 16 >> 16);
    case 4:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si + $nextWord(this$static.m_fetcher) << 16 >> 16);
    case 5:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_di + $nextWord(this$static.m_fetcher) << 16 >> 16);
    case 6:
      return new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_bp + $nextWord(this$static.m_fetcher) << 16 >> 16);
    case 7:
      return new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_bx + $nextWord(this$static.m_fetcher) << 16 >> 16);
    default:throw toJs(new RuntimeException);
  }
}

$getMode2Address.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMode2Address';
function $getReg16(this$static){
  return $getReg16_0(this$static.m_regs, this$static.m_regIndex);
}

$getReg16.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getReg16';
function $getReg8(this$static){
  return $getReg8_0(this$static.m_regs, this$static.m_regIndex);
}

$getReg8.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getReg8';
function $getSeg(this$static){
  return $getSeg_0(this$static.m_regs, this$static.m_regIndex);
}

$getSeg.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getSeg';
function $reset(this$static){
  var mode, modeByte;
  modeByte = $nextByte(this$static.m_fetcher);
  mode = (modeByte >> 6 & 3) << 24 >> 24;
  this$static.m_regIndex = (modeByte >> 3 & 7) << 24 >> 24;
  this$static.m_memIndex = (modeByte & 7) << 24 >> 24;
  switch (mode) {
    case 0:
      this$static.m_memAddress = $getMode0Address(this$static);
      break;
    case 1:
      this$static.m_memAddress = $getMode1Address(this$static);
      break;
    case 2:
      this$static.m_memAddress = $getMode2Address(this$static);
      break;
    case 3:
      this$static.m_memAddress = null;
      break;
    default:throw toJs(new RuntimeException);
  }
}

$reset.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$reset';
function $setMem16(this$static, value_0){
  this$static.m_memAddress?$writeWord(this$static.m_memory, this$static.m_memAddress, value_0):$setReg16_0(this$static.m_regs, this$static.m_memIndex, value_0);
}

$setMem16.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setMem16';
function $setMem8(this$static, value_0){
  this$static.m_memAddress?$writeByte_0(this$static.m_memory, this$static.m_memAddress, value_0):$setReg8_0(this$static.m_regs, this$static.m_memIndex, value_0);
}

$setMem8.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setMem8';
function $setReg16(this$static, value_0){
  $setReg16_0(this$static.m_regs, this$static.m_regIndex, value_0);
}

$setReg16.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setReg16';
function $setReg8(this$static, value_0){
  $setReg8_0(this$static.m_regs, this$static.m_regIndex, value_0);
}

$setReg8.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setReg8';
function $setSeg(this$static, value_0){
  $setSeg_0(this$static.m_regs, this$static.m_regIndex, value_0);
}

$setSeg.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setSeg';
function IndirectAddressingDecoder(state, memory, fetcher){
  this.m_state = state;
  this.m_memory = memory;
  this.m_fetcher = fetcher;
  this.m_regs = new RegisterIndexingDecoder(this.m_state);
  this.m_regIndex = 0;
  this.m_memIndex = 0;
  this.m_memAddress = null;
}

IndirectAddressingDecoder.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.IndirectAddressingDecoder';
defineClass(225, 1, {}, IndirectAddressingDecoder);
_.m_memIndex = 0;
_.m_regIndex = 0;
var Lil_co_codeguru_corewars8086_cpu_IndirectAddressingDecoder_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'IndirectAddressingDecoder', 225);
function IntOpcodeException(){
  CpuException.call(this);
}

IntOpcodeException.displayName = 'il.co.codeguru.corewars8086.cpu.IntOpcodeException.IntOpcodeException';
defineClass(90, 26, $intern_18, IntOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_IntOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'IntOpcodeException', 90);
function InvalidOpcodeException(){
  CpuException.call(this);
}

InvalidOpcodeException.displayName = 'il.co.codeguru.corewars8086.cpu.InvalidOpcodeException.InvalidOpcodeException';
defineClass(11, 26, $intern_18, InvalidOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_InvalidOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'InvalidOpcodeException', 11);
function $nextByte(this$static){
  var ip, linearAddress;
  ip = this$static.m_state.m_ip;
  linearAddress = linearAddress_0(this$static.m_state.m_cs, ip);
  $setIP(this$static.m_state, ip + 1 << 16 >> 16);
  return $readExecuteByte_1(this$static.m_memory, linearAddress);
}

$nextByte.displayName = 'il.co.codeguru.corewars8086.cpu.OpcodeFetcher.$nextByte';
function $nextWord(this$static){
  var address;
  address = new RealModeAddress_0(this$static.m_state.m_cs, this$static.m_state.m_ip);
  $setIP(this$static.m_state, this$static.m_state.m_ip + 2 << 16 >> 16);
  return $readExecuteWord(this$static.m_memory, address);
}

$nextWord.displayName = 'il.co.codeguru.corewars8086.cpu.OpcodeFetcher.$nextWord';
function OpcodeFetcher(state, memory){
  this.m_state = state;
  this.m_memory = memory;
}

OpcodeFetcher.displayName = 'il.co.codeguru.corewars8086.cpu.OpcodeFetcher.OpcodeFetcher';
defineClass(224, 1, {}, OpcodeFetcher);
var Lil_co_codeguru_corewars8086_cpu_OpcodeFetcher_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'OpcodeFetcher', 224);
function $getReg16_0(this$static, index_0){
  switch (index_0) {
    case 0:
      return this$static.m_state.m_ax;
    case 1:
      return this$static.m_state.m_cx;
    case 2:
      return this$static.m_state.m_dx;
    case 3:
      return this$static.m_state.m_bx;
    case 4:
      return this$static.m_state.m_sp;
    case 5:
      return this$static.m_state.m_bp;
    case 6:
      return this$static.m_state.m_si;
    case 7:
      return this$static.m_state.m_di;
    default:throw toJs(new RuntimeException);
  }
}

$getReg16_0.displayName = 'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$getReg16';
function $getReg8_0(this$static, index_0){
  switch (index_0) {
    case 0:
      return this$static.m_state.m_ax << 24 >> 24;
    case 1:
      return this$static.m_state.m_cx << 24 >> 24;
    case 2:
      return this$static.m_state.m_dx << 24 >> 24;
    case 3:
      return this$static.m_state.m_bx << 24 >> 24;
    case 4:
      return this$static.m_state.m_ax >> 8 << 24 >> 24;
    case 5:
      return this$static.m_state.m_cx >> 8 << 24 >> 24;
    case 6:
      return this$static.m_state.m_dx >> 8 << 24 >> 24;
    case 7:
      return this$static.m_state.m_bx >> 8 << 24 >> 24;
    default:throw toJs(new RuntimeException);
  }
}

$getReg8_0.displayName = 'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$getReg8';
function $getSeg_0(this$static, index_0){
  switch (index_0) {
    case 4:
    case 0:
      return this$static.m_state.m_es;
    case 5:
    case 1:
      return this$static.m_state.m_cs;
    case 6:
    case 2:
      return this$static.m_state.m_ss;
    case 7:
    case 3:
      return this$static.m_state.m_ds;
    default:throw toJs(new RuntimeException);
  }
}

$getSeg_0.displayName = 'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$getSeg';
function $setReg16_0(this$static, index_0, value_0){
  switch (index_0) {
    case 0:
      $setAX(this$static.m_state, value_0);
      break;
    case 1:
      $setCX(this$static.m_state, value_0);
      break;
    case 2:
      $setDX(this$static.m_state, value_0);
      break;
    case 3:
      $setBX(this$static.m_state, value_0);
      break;
    case 4:
      $setSP(this$static.m_state, value_0);
      break;
    case 5:
      $setBP(this$static.m_state, value_0);
      break;
    case 6:
      $setSI(this$static.m_state, value_0);
      break;
    case 7:
      $setDI(this$static.m_state, value_0);
      break;
    default:throw toJs(new RuntimeException);
  }
}

$setReg16_0.displayName = 'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$setReg16';
function $setReg8_0(this$static, index_0, value_0){
  switch (index_0) {
    case 0:
      $setAL(this$static.m_state, value_0);
      break;
    case 1:
      $setCL(this$static.m_state, value_0);
      break;
    case 2:
      $setDL(this$static.m_state, value_0);
      break;
    case 3:
      $setBL(this$static.m_state, value_0);
      break;
    case 4:
      $setAH(this$static.m_state, value_0);
      break;
    case 5:
      $setCH(this$static.m_state, value_0);
      break;
    case 6:
      $setDH(this$static.m_state, value_0);
      break;
    case 7:
      $setBH(this$static.m_state, value_0);
      break;
    default:throw toJs(new RuntimeException);
  }
}

$setReg8_0.displayName = 'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$setReg8';
function $setSeg_0(this$static, index_0, value_0){
  switch (index_0) {
    case 4:
    case 0:
      $setES(this$static.m_state, value_0);
      break;
    case 5:
    case 1:
      $setCS(this$static.m_state, value_0);
      break;
    case 6:
    case 2:
      $setSS(this$static.m_state, value_0);
      break;
    case 7:
    case 3:
      $setDS(this$static.m_state, value_0);
      break;
    default:throw toJs(new RuntimeException);
  }
}

$setSeg_0.displayName = 'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$setSeg';
function RegisterIndexingDecoder(state){
  this.m_state = state;
}

RegisterIndexingDecoder.displayName = 'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.RegisterIndexingDecoder';
defineClass(115, 1, {}, RegisterIndexingDecoder);
var Lil_co_codeguru_corewars8086_cpu_RegisterIndexingDecoder_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'RegisterIndexingDecoder', 115);
function UnimplementedOpcodeException(){
  CpuException.call(this);
}

UnimplementedOpcodeException.displayName = 'il.co.codeguru.corewars8086.cpu.UnimplementedOpcodeException.UnimplementedOpcodeException';
defineClass(39, 26, $intern_18, UnimplementedOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_UnimplementedOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'UnimplementedOpcodeException', 39);
function UnsupportedOpcodeException(){
  CpuException.call(this);
}

UnsupportedOpcodeException.displayName = 'il.co.codeguru.corewars8086.cpu.UnsupportedOpcodeException.UnsupportedOpcodeException';
defineClass(55, 26, $intern_18, UnsupportedOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_UnsupportedOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'UnsupportedOpcodeException', 55);
function $$init_4(this$static){
}

$$init_4.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.$$init';
function $addActionListener(this$static, listener){
  this$static.m_listener = listener;
}

$addActionListener.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.$addActionListener';
function $setEnabled(this$static, v){
  if (this$static.m_element == null)
    return;
  this$static.m_enabled = v;
  this$static.m_element.setAttribute('disabled', v?'false':'true');
}

$setEnabled.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.$setEnabled';
function $setText(this$static, v){
  if (this$static.m_element == null)
    return;
  this$static.m_element.innerHTML = v;
}

$setText.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.$setText';
function JComponent(){
}

JComponent.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.JComponent';
function JComponent_0(id_0){
  this.m_element = ($clinit_DomGlobal() , document_0).getElementById(id_0);
  if (this.m_element == null) {
    console.log('did not find element ' + id_0);
    return;
  }
   else {
    console.log('found element ' + id_0);
  }
}

JComponent_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.JComponent';
defineClass(24, 1, {});
_.m_enabled = true;
_.m_listener = null;
var Lil_co_codeguru_corewars8086_gui_widgets_JComponent_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JComponent', 24);
function $$init_5(this$static){
  this$static.m_contentVisibleRect = new Canvas$Rect;
}

$$init_5.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$$init';
function $clear(this$static){
  var i, j;
  this$static.data_0 == null && (this$static.data_0 = initMultidimensionalArray(B_classLit, [$intern_2, $intern_19], [50, 10], 15, [256, 256], 2));
  this$static.pointer == null && (this$static.pointer = initMultidimensionalArray(B_classLit, [$intern_2, $intern_19], [50, 10], 15, [256, 256], 2));
  this$static.values_0 == null && (this$static.values_0 = initMultidimensionalArray(B_classLit, [$intern_2, $intern_19], [50, 10], 15, [256, 256], 2));
  for (i = 0; i < 256; i++)
    for (j = 0; j < 256; j++) {
      this$static.data_0[i][j] = -1;
      this$static.pointer[i][j] = -1;
    }
  this$static.ctx.setTransform(1, 0, 0, 1, 0, 0);
  this$static.ctx.clip(this$static.m_memclip);
  $wnd.js_resetZoom();
}

$clear.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$clear';
function $deletePointers(this$static){
  var i, j;
  for (i = 0; i < 256; i++)
    for (j = 0; j < 256; j++) {
      if (this$static.pointer[i][j] != -1) {
        this$static.pointer[i][j] = -1;
        $paintPixel_0(this$static, i, j, this$static.data_0[i][j], this$static.values_0[i][j]);
      }
    }
}

$deletePointers.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$deletePointers';
function $exportMethods(this$static){
  var that = this$static;
  $wnd.j_warCanvas_repaint = $entry(function(){
    that.j_warCanvas_repaint_0();
  }
  );
  $wnd.j_warCanvas_setTransform = $entry(function(a, b, c, d){
    that.j_warCanvas_setTransform_0(a, b, c, d);
  }
  );
  $wnd.j_warCanvas_click = $entry(function(a, b){
    that.j_warCanvas_click_0(a, b);
  }
  );
  $wnd.j_warCanvas_showCurrent = $entry(function(a, b){
    that.j_warCanvas_showCurrent_0(a, b);
  }
  );
}

$exportMethods.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$exportMethods';
function $initStartWar(this$static, war){
  var addr, x_0, y_0;
  this$static.m_mem = war.m_core;
  this$static.m_currentWar = war;
  this$static.m_indebug = true;
  addr = $intern_20;
  for (y_0 = 0; y_0 < 256; y_0++) {
    for (x_0 = 0; x_0 < 256; x_0++) {
      this$static.values_0[x_0][y_0] = $readByte(this$static.m_mem, addr);
      addr += 1;
    }
  }
}

$initStartWar.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$initStartWar';
function $j_warCanvas_repaint(this$static){
  $paint(this$static);
}

$j_warCanvas_repaint.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$j_warCanvas_repaint';
function $lambda$0(this$static){
  if (!this$static.m_showContent)
    return;
  $paintCursor(this$static, this$static.m_blinkOn);
  this$static.m_blinkOn = !this$static.m_blinkOn;
}

$lambda$0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$lambda$0';
function $lambda$1(this$static){
  console.log('BLUR');
  this$static.m_intervalId != null && $wnd.window.clearInterval($doubleValue(this$static.m_intervalId));
  this$static.m_showContent && $paintCursor(this$static, false);
  this$static.m_intervalId = null;
}

$lambda$1.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$lambda$1';
function $lambda$2(this$static, event_0){
  var c, ev, ix, iy, key, v;
  if (!this$static.m_showContent)
    return;
  key = castToNative(event_0, $wnd.KeyboardEvent).key;
  event_0.preventDefault();
  if (key == 'ArrowUp')
    $moveCursor(this$static, 0, -1);
  else if (key == 'ArrowDown')
    $moveCursor(this$static, 0, 1);
  else if (key == 'ArrowRight')
    $moveCursor(this$static, 0.5, 0);
  else if (key == 'ArrowLeft' || key == 'Backspace')
    $moveCursor(this$static, -0.5, 0);
  else if (!!this$static.m_mem && this$static.m_indebug) {
    c = (checkCriticalStringElementIndex(0, key.length) , key.charCodeAt(0));
    v = -1;
    c >= 48 && c <= 57?(v = c - 48):c >= 97 && c <= 102?(v = c - 97 + 10):c >= 65 && c <= 65 && (v = c - 65 + 10);
    if (v != -1) {
      ix = round_int(this$static.m_cursorX);
      iy = round_int(this$static.m_cursorY);
      ev = this$static.values_0[ix][iy];
      this$static.m_cursorX % 1 == 0?(ev = ev & 15 | v << 4):(ev = ev & 240 | v);
      this$static.values_0[ix][iy] = ev << 24 >> 24;
      $writeByte(this$static.m_mem, new RealModeAddress_0(4096, ix + iy * 256 << 16 >> 16), ev << 24 >> 24);
      $moveCursor(this$static, 0.5, 0);
    }
  }
}

$lambda$2.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$lambda$2';
function $moveCursor(this$static, dx, dy){
  $paintCursor(this$static, false);
  this$static.m_cursorX = $wnd.Math.max($wnd.Math.min(this$static.m_cursorX + dx, 255.5), 0);
  this$static.m_cursorY = $wnd.Math.max($wnd.Math.min(this$static.m_cursorY + dy, 255), 0);
  while (this$static.m_cursorY < this$static.m_contentVisibleRect.sy + 1 && this$static.m_cursorY > 0) {
    this$static.m_zrY = this$static.m_zrY + $intern_21 * this$static.m_zrHscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorY > this$static.m_contentVisibleRect.ey - 1 && this$static.m_cursorY <= 255) {
    this$static.m_zrY = this$static.m_zrY - $intern_21 * this$static.m_zrHscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorX < this$static.m_contentVisibleRect.sx + 1 && this$static.m_cursorX > 0) {
    this$static.m_zrX = this$static.m_zrX + $intern_21 * this$static.m_zrVscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorX > this$static.m_contentVisibleRect.ex - 0.5 && this$static.m_cursorX <= 255.5) {
    this$static.m_zrX = this$static.m_zrX - $intern_21 * this$static.m_zrVscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  $paint(this$static);
}

$moveCursor.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$moveCursor';
function $paint(this$static){
  var col, rc, rx, ry, scaledDot, step, textVisible, x_0, x0, xcoord, y_0, y0, ycoord;
  this$static.ctx.fillStyle = ($clinit_Color() , WHITE);
  this$static.ctx.fillRect(0, 0, 833, 833);
  this$static.ctx.fillStyle = BLACK;
  this$static.ctx.fillRect(0, 0, 768, 768);
  this$static.m_showContent && (this$static.ctx.font = '2.3px monospace');
  for (y0 = 0; y0 < 256; y0++) {
    for (x0 = 0; x0 < 256; x0++) {
      textVisible = this$static.m_showContent && $isInside(this$static.m_contentVisibleRect, x0, y0);
      col = $paintMemCellBack(this$static, x0, y0);
      textVisible && $paintTextValue(this$static, x0, y0, col);
    }
  }
  this$static.m_showContent && this$static.m_intervalId != null && $paintCursor(this$static, true);
  this$static.ctx.restore();
  this$static.ctx.save();
  this$static.ctx.fillStyle = '#ffffff';
  this$static.ctx.fillRect(0, 0, 45, 833);
  this$static.ctx.fillRect(0, 788, 833, 45);
  this$static.ctx.font = '14px monospace';
  this$static.ctx.textBaseline = 'middle';
  step = 32;
  rc = round_int(this$static.m_zrVscale);
  rc >= 2 && rc < 4?(step = step / 2 | 0):rc >= 4 && rc <= 8?(step = step / 4 | 0):rc >= 8 && rc <= 16?(step = step / 8 | 0):rc >= 16 && (step = step / 16 | 0);
  this$static.ctx.fillStyle = '#888888';
  this$static.ctx.clip(this$static.m_coordYclip);
  for (y_0 = 0; y_0 <= 256; y_0 += step) {
    ry = $wnd.Math.min(y_0, 255);
    scaledDot = 3 * this$static.m_zrVscale;
    ycoord = 20 + this$static.m_zrY + ry * scaledDot;
    if (ycoord + scaledDot < 20 || ycoord > 788)
      continue;
    this$static.ctx.fillText(hex4(ry * 256), 1, ycoord + scaledDot / 2);
    this$static.ctx.fillRect(38, ycoord, 6, scaledDot);
  }
  this$static.ctx.restore();
  this$static.ctx.save();
  this$static.ctx.clip(this$static.m_coordXclip);
  this$static.ctx.font = '14px monospace';
  this$static.ctx.fillStyle = '#888888';
  for (x_0 = 0; x_0 <= 256; x_0 += step) {
    rx = $wnd.Math.min(x_0, 255);
    scaledDot = 3 * this$static.m_zrHscale;
    xcoord = 45 + this$static.m_zrX + rx * scaledDot;
    if (xcoord + scaledDot < 45 || xcoord > 813)
      continue;
    this$static.ctx.fillText(hex2(rx), xcoord - 7 + scaledDot / 2, 809);
    this$static.ctx.fillRect(xcoord, 789, scaledDot, 6);
  }
  this$static.ctx.restore();
  this$static.ctx.save();
  this$static.ctx.clip(this$static.m_memclip);
  this$static.ctx.setTransform(this$static.m_zrHscale, 0, 0, this$static.m_zrVscale, this$static.m_zrX + 45, this$static.m_zrY + 20);
  this$static.ctx.font = '2.3px monospace';
}

$paint.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paint';
function $paintCursor(this$static, isOn){
  var col, rx, x_0, y_0;
  x_0 = round_int(this$static.m_cursorX);
  y_0 = round_int(this$static.m_cursorY);
  if (isOn) {
    col = $paintMemCellBack(this$static, x_0, y_0);
    rx = this$static.m_cursorX;
    rx % 1 == 0 && (rx += 0.08);
    $paintMemCellBack(this$static, round_int(this$static.m_cursorX), round_int(this$static.m_cursorY));
    this$static.ctx.fillStyle = '#eeeeee';
    this$static.ctx.fillRect(rx * 3, this$static.m_cursorY * 3 + 0.32, 1.25, 2.2);
    $paintTextValue(this$static, x_0, y_0, col);
  }
   else {
    col = $paintMemCellBack(this$static, x_0, y_0);
    if (!col) {
      this$static.ctx.fillStyle = '#000000';
      this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
    }
    $paintTextValue(this$static, x_0, y_0, col);
  }
}

$paintCursor.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintCursor';
function $paintMemCellBack(this$static, x_0, y_0){
  var cellPtr, cellVal, col;
  cellPtr = this$static.pointer[x_0][y_0];
  col = null;
  if (cellPtr != -1) {
    col = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), cellPtr, true);
  }
   else {
    cellVal = this$static.data_0[x_0][y_0];
    cellVal != -1 && (col = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), cellVal, false));
  }
  if (col) {
    this$static.ctx.fillStyle = $toString_1(col);
    this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
  }
  return col;
}

$paintMemCellBack.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintMemCellBack';
function $paintPixel(this$static, number, color_0, value_0){
  $paintPixel_0(this$static, number % 256, number / 256 | 0, color_0, value_0);
}

$paintPixel.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintPixel';
function $paintPixel_0(this$static, x_0, y_0, colorByte, value_0){
  var color_0;
  this$static.values_0[x_0][y_0] = value_0;
  color_0 = null;
  colorByte != -1?(this$static.data_0[x_0][y_0] = colorByte):(colorByte = this$static.data_0[x_0][y_0]);
  if (colorByte != -1) {
    color_0 = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), colorByte, false);
    this$static.ctx.fillStyle = $toString_1(color_0);
  }
   else {
    this$static.ctx.fillStyle = '#000000';
  }
  this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
  this$static.m_showContent && $paintTextValue(this$static, x_0, y_0, color_0);
}

$paintPixel_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintPixel';
function $paintPointer(this$static, number, colorByte){
  var color_0, x_0, y_0;
  x_0 = number % 256;
  y_0 = number / 256 | 0;
  color_0 = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), colorByte, true);
  this$static.pointer[x_0][y_0] = colorByte;
  this$static.ctx.fillStyle = $toString_1(color_0);
  this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
  this$static.m_showContent && $paintTextValue(this$static, x_0, y_0, color_0);
}

$paintPointer.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintPointer';
function $paintTextValue(this$static, x_0, y_0, backCol){
  var textCol;
  backCol?backCol.m_isDark?(textCol = '#ffffff'):(textCol = '#000000'):(textCol = '#666666');
  this$static.ctx.fillStyle = textCol;
  this$static.ctx.fillText(hex2(this$static.values_0[x_0][y_0] & 255), x_0 * 3 + 0.2, y_0 * 3 + 2.2);
}

$paintTextValue.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintTextValue';
function Canvas_0(){
  var d, t;
  JComponent_0.call(this, 'warCanvas');
  this.m_contentVisibleRect = new Canvas$Rect;
  this.ctx = castToNative(castToNative(this.m_element, $wnd.HTMLCanvasElement).getContext('2d'), $wnd.CanvasRenderingContext2D);
  d = new Dimension(833, 833);
  castToNative(this.m_element, $wnd.HTMLCanvasElement).width = d.width_0;
  castToNative(this.m_element, $wnd.HTMLCanvasElement).height = d.height_0;
  this.ctx.save();
  this.m_memclip = new $wnd.Path2D;
  this.m_memclip.moveTo(45, 20);
  this.m_memclip.lineTo(813, 20);
  this.m_memclip.lineTo(813, 788);
  this.m_memclip.lineTo(45, 788);
  this.m_coordYclip = new $wnd.Path2D;
  t = new Canvas$Turtle(this.m_coordYclip);
  $moveTo(t, 0, 14);
  t.x_0 += 38;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 768;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 -= 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 -= 38;
  t.p.lineTo(t.x_0, t.y_0);
  this.m_coordXclip = new $wnd.Path2D;
  t.p = this.m_coordXclip;
  $moveTo(t, 39, 833);
  t.y_0 -= 38;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 -= 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 768;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 38;
  t.p.lineTo(t.x_0, t.y_0);
  this.ctx.clip(this.m_memclip);
  this.m_dummyInput = castToNative(($clinit_DomGlobal() , document_0).getElementById('warCanvasDummyInput'), $wnd.HTMLInputElement);
  this.m_hoverCellInfo = castToNative(document_0.getElementById('hoverCellInfo'), $wnd.HTMLElement);
  $exportMethods(this);
  $wnd.WC_MARGIN_TOP = 20;
  $wnd.WC_MARGIN_LEFT = 45;
  $wnd.js_initZoom();
  $clear(this);
  this.m_dummyInput.addEventListener('blur', new Canvas$lambda$1$Type(this));
  this.m_dummyInput.addEventListener('keydown', new Canvas$lambda$2$Type(this));
}

Canvas_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.Canvas';
function initZoom(marginTop, marginLeft){
  $wnd.WC_MARGIN_TOP = marginTop;
  $wnd.WC_MARGIN_LEFT = marginLeft;
  $wnd.js_initZoom();
}

initZoom.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.initZoom';
function js_updateFromKeyScroll(nx, ny){
  $wnd.js_updateFromKeyScroll(nx, ny);
}

js_updateFromKeyScroll.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.js_updateFromKeyScroll';
function resetZoom(){
  $wnd.js_resetZoom();
}

resetZoom.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.resetZoom';
defineClass(182, 24, {}, Canvas_0);
_.j_warCanvas_click_0 = function j_warCanvas_click(x_0, y_0){
  var mx, my;
  if (!this.m_showContent || x_0 < 0 || y_0 < 0 || x_0 >= 768 || y_0 >= 768)
    return;
  if (!this.m_indebug)
    return;
  mx = round_int((x_0 - this.m_zrX) / 3 / this.m_zrHscale * 2) / 2;
  my = round_int((y_0 - this.m_zrY) / 3 / this.m_zrVscale);
  $paintCursor(this, false);
  this.m_cursorX = mx;
  this.m_cursorY = my;
  this.m_dummyInput.focus();
  $paintCursor(this, true);
  this.m_blinkOn = false;
  this.m_intervalId != null && $wnd.window.clearInterval($doubleValue(this.m_intervalId));
  this.m_intervalId = ($clinit_DomGlobal() , $wnd.window.setInterval(makeLambdaFunction(Canvas$lambda$0$Type.prototype.onInvoke, Canvas$lambda$0$Type, [this]), 600));
}
;
_.j_warCanvas_click_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_click';
_.j_warCanvas_repaint_0 = function j_warCanvas_repaint(){
  $paint(this);
}
;
_.j_warCanvas_repaint_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_repaint';
_.j_warCanvas_setTransform_0 = function j_warCanvas_setTransform(hscale, vscale, x_0, y_0){
  this.m_zrHscale = hscale;
  this.m_zrVscale = vscale;
  this.m_zrX = x_0;
  this.m_zrY = y_0;
  this.ctx.setTransform(this.m_zrHscale, 0, 0, this.m_zrVscale, this.m_zrX + 45, this.m_zrY + 20);
  this.m_showContent = this.m_zrHscale > 4;
  this.m_contentVisibleRect.sx = -this.m_zrX / 3 / this.m_zrHscale - 1;
  this.m_contentVisibleRect.sy = -this.m_zrY / 3 / this.m_zrVscale - 1;
  this.m_contentVisibleRect.ex = this.m_contentVisibleRect.sx + 256 / this.m_zrHscale + 1;
  this.m_contentVisibleRect.ey = this.m_contentVisibleRect.sy + 256 / this.m_zrVscale + 1;
}
;
_.j_warCanvas_setTransform_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_setTransform';
_.j_warCanvas_showCurrent_0 = function j_warCanvas_showCurrent(x_0, y_0){
  var addr, bef, i, mx, my, player, sb, v;
  if (!this.m_mem || x_0 < 0 || y_0 < 0 || x_0 >= 768 || y_0 >= 768) {
    this.m_hoverCellInfo.style.display = 'none';
    return;
  }
  mx = round_int((x_0 - this.m_zrX) / 3 / this.m_zrHscale);
  my = round_int((y_0 - this.m_zrY) / 3 / this.m_zrVscale);
  addr = mx + my * 256 & $intern_0;
  v = $readByte(this.m_mem, addr + $intern_20) & 255;
  sb = new StringBuilder;
  sb.string += '0x';
  $append_4(sb, hex4(addr));
  sb.string += ': 0x';
  $append_4(sb, hex2(v));
  sb.string += ' (';
  bef = sb.string.length;
  sb.string += v;
  sb.string += ')';
  for (i = sb.string.length - bef; i < 5; ++i)
    sb.string += '\xA0';
  player = this.data_0[mx][my];
  if (player != -1) {
    sb.string += '  Player: ';
    $append_4(sb, $getWarrior(this.m_currentWar, player).m_name.substr(0, 20));
  }
  this.m_hoverCellInfo.style.display = '';
  setInnerText(this.m_hoverCellInfo, sb.string);
}
;
_.j_warCanvas_showCurrent_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_showCurrent';
_.m_blinkOn = false;
_.m_currentWar = null;
_.m_cursorX = 0;
_.m_cursorY = 0;
_.m_indebug = false;
_.m_mem = null;
_.m_showContent = false;
_.m_zrHscale = 0;
_.m_zrVscale = 0;
_.m_zrX = 0;
_.m_zrY = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas', 182);
function $isInside(this$static, x_0, y_0){
  return x_0 > this$static.sx && x_0 < this$static.ex && y_0 > this$static.sy && y_0 < this$static.ey;
}

$isInside.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Rect.$isInside';
function Canvas$Rect(){
}

Canvas$Rect.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Rect.Canvas$Rect';
defineClass(184, 1, {}, Canvas$Rect);
_.ex = 0;
_.ey = 0;
_.sx = 0;
_.sy = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas$Rect_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/Rect', 184);
function $moveTo(this$static, _x, _y){
  this$static.x_0 = _x;
  this$static.y_0 = _y;
  this$static.p.moveTo(this$static.x_0, this$static.y_0);
}

$moveTo.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Turtle.$moveTo';
function Canvas$Turtle(_p){
  this.p = _p;
}

Canvas$Turtle.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Turtle.Canvas$Turtle';
defineClass(183, 1, {}, Canvas$Turtle);
_.x_0 = 0;
_.y_0 = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas$Turtle_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/Turtle', 183);
function $getClass_1(){
  return Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

$getClass_1.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$0$Type.$getClass';
function Canvas$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Canvas$lambda$0$Type.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$0$Type.Canvas$lambda$0$Type';
defineClass(267, $wnd.Function, {}, Canvas$lambda$0$Type);
_.onInvoke = function onInvoke(arg0){
  $lambda$0(this.$$outer_0);
}
;
_.onInvoke.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$0$Type.onInvoke';
function Canvas$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Canvas$lambda$1$Type.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$1$Type.Canvas$lambda$1$Type';
defineClass(185, 1, {}, Canvas$lambda$1$Type);
_.handleEvent = function handleEvent(arg0){
  $lambda$1(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$1$Type.handleEvent';
var Lil_co_codeguru_corewars8086_gui_Canvas$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/lambda$1$Type', 185);
function Canvas$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Canvas$lambda$2$Type.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$2$Type.Canvas$lambda$2$Type';
defineClass(186, 1, {}, Canvas$lambda$2$Type);
_.handleEvent = function handleEvent_0(arg0){
  $lambda$2(this.$$outer_0, arg0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$2$Type.handleEvent';
var Lil_co_codeguru_corewars8086_gui_Canvas$lambda$2$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/lambda$2$Type', 186);
function $$init_6(this$static){
  this$static.m_singleByte = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit, $intern_2, 36, 256, 0, 1);
  this$static.PAGE_SIZE_0 = $wnd.PAGE_SIZE;
  this$static.m_editBrClickHandler = new CodeEditor$1(this$static);
  this$static.m_dbgBrClickHandler = new CodeEditor$2(this$static);
}

$$init_6.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$$init';
function $asm_edit_changed(this$static){
  var intext, prevLineCount, prevLiveOffsets;
  if (this$static.entered)
    return;
  this$static.entered = true;
  prevLineCount = this$static.m_lineCount;
  prevLiveOffsets = this$static.m_lineOffsets;
  intext = this$static.asm_edit.value;
  $setText_0(this$static, intext, this$static.m_playersPanel);
  $updateBreakpoints(this$static, prevLiveOffsets, prevLineCount, this$static.m_prevInText);
  $updateText(this$static.m_playersPanel, intext);
  this$static.m_prevInText = intext;
  this$static.entered = false;
}

$asm_edit_changed.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$asm_edit_changed';
function $bin_equal(a, b){
  var i;
  if (a.length != b.length)
    return -1;
  for (i = 0; i < a.length; ++i)
    if (a[i] !== b[i])
      return i;
  return 0;
}

$bin_equal.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$bin_equal';
function $checkDisasmLines(this$static, binbuf, listing, asmElem, intext){
  var atLstLine, dis, e, eptr, lstline, msg, omsgdiv, omsgtxt;
  dis = new Disassembler$ArrDisassembler(binbuf, binbuf.length);
  for (atLstLine = 0; atLstLine < listing.array.length; ++atLstLine) {
    msg = null;
    lstline = (checkCriticalElementIndex(atLstLine, listing.array.length) , castTo(listing.array[atLstLine], 46));
    if (lstline.address == -1)
      continue;
    if ($isDefineCode(lstline.code_0)) {
      continue;
    }
    try {
      $reset_0(dis, lstline.address, lstline.address + lstline.opcodesCount);
      $nextOpcode_0(dis);
      $lastOpcodeSize(dis);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 53)) {
        msg = '' + (atLstLine + 1) + ': not enough bytes to parse';
      }
       else if (instanceOf($e0, 9)) {
        msg = '' + (atLstLine + 1) + ': Although this is a legal x86 opcode, codewars8086 does not support it';
        eptr = dis.pointer - 1;
        eptr >= 0 && eptr < binbuf.length && (msg += ', opcode = 0x' + hex2(binbuf[eptr] & 255));
      }
       else if (instanceOf($e0, 4)) {
        console.error('failed parsing binbuf RuntimeException');
      }
       else 
        throw toJs($e0);
    }
    if (msg != null) {
      if (this$static.m_errLines == null || atLstLine < this$static.m_errLines.length && this$static.m_errLines[atLstLine] == 0) {
        if (asmElem == null) {
          asmElem = $htmlizeText(intext);
          this$static.asm_show.innerHTML = '';
          this$static.asm_show.appendChild(asmElem);
        }
        e = ($clinit_DomGlobal() , document_0).getElementById('mline_' + ('' + (atLstLine + 1)));
        if (e == null) {
          console.error('did not find line?');
          return asmElem;
        }
        e.classList.add('edit_warning');
        omsgdiv = document_0.createElement('div');
        omsgdiv.classList.add('stdout_line_w');
        atLstLine < this$static.m_lineOffsets.array.length && omsgdiv.setAttribute('ondblclick', 'asm_cursorToLine(' + ('' + castTo($get_4(this$static.m_lineOffsets, atLstLine), 25).value_0) + ')');
        omsgtxt = document_0.createTextNode(msg);
        omsgdiv.appendChild(omsgtxt);
        this$static.asm_output.appendChild(omsgdiv);
      }
    }
  }
  return asmElem;
}

$checkDisasmLines.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$checkDisasmLines';
function $disassembleAddr(this$static, absaddr, addrInArea){
  var bs, dis, i, i0, len, opline, page, text_0;
  dis = new Disassembler$NArrDisassembler(this$static.m_mem.m_data, absaddr, this$static.m_mem.m_data.length);
  try {
    text_0 = $nextOpcode_0(dis);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 9)) {
      return;
    }
     else 
      throw toJs($e0);
  }
  $eraseOpcode(this$static, addrInArea);
  len = $lastOpcodeSize(dis);
  opline = new CodeEditor$DbgLine;
  bs = new StringBuilder;
  for (i0 = 0; i0 < len; ++i0) {
    $append_4(bs, hex2($readByte(this$static.m_mem, absaddr + i0) & 255));
    bs.string += '&#x202f;';
  }
  opline.text_0 = "<span class='dbg_opcodes'>" + bs.string + '<\/span>' + text_0;
  this$static.m_dbglines[addrInArea] = opline;
  page = addrInArea / this$static.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, addrInArea, opline);
  for (i = 1; i < len; ++i) {
    $eraseOpcode(this$static, addrInArea + i);
  }
}

$disassembleAddr.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$disassembleAddr';
function $eraseOpcode(this$static, addrInArea){
  var page, value_0;
  this$static.m_dbglines[addrInArea] = null;
  page = addrInArea / this$static.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, addrInArea, null);
  ++addrInArea;
  while (!this$static.m_dbglines[addrInArea]) {
    value_0 = $readByte(this$static.m_mem, addrInArea + $intern_20);
    $setByte(this$static, addrInArea, (value_0 & 255) << 24 >> 24);
    ++addrInArea;
  }
}

$eraseOpcode.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$eraseOpcode';
function $exportMethods_0(this$static){
  var that = this$static;
  $wnd.j_renderIfDirty = $entry(function(i){
    that.j_renderIfDirty_0(i);
  }
  );
  $wnd.j_setScrollAt = $entry(function(i, j){
    that.j_setScrollAt_0(i, j);
  }
  );
  $wnd.j_asm_edit_changed = $entry(function(){
    that.asm_edit_changed();
  }
  );
}

$exportMethods_0.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$exportMethods';
function $getCurrentWarrior(this$static){
  var label_0, war;
  war = this$static.m_competition.currentWar;
  if (!war)
    return null;
  label_0 = this$static.m_playersPanel.m_inEditor.label_0;
  return $getWarriorByLabel(war, label_0);
}

$getCurrentWarrior.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$getCurrentWarrior';
function $getSingleByteLine(this$static, bval){
  var byteline, hexVal, val;
  val = bval & 255;
  byteline = this$static.m_singleByte[val];
  if (!byteline) {
    byteline = new CodeEditor$DbgLine;
    hexVal = hex2(val);
    byteline.text_0 = "<span class='dbg_opcodes'>" + hexVal + '<\/span>db ' + hexVal + 'h';
    byteline.flags = 1;
  }
  this$static.m_singleByte[val] = byteline;
  return byteline;
}

$getSingleByteLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$getSingleByteLine';
function $htmlizeText(intext){
  var df, e, found, lastFound, lineNum, ss, t;
  df = ($clinit_DomGlobal() , document_0).createDocumentFragment();
  lastFound = -1;
  found = $indexOf_0(intext, fromCodePoint(10), 0);
  lineNum = 1;
  while (found != -1) {
    if (found != lastFound + 1) {
      e = document_0.createElement('span');
      e.setAttribute('id', 'mline_' + ('' + lineNum));
      ss = intext.substr(lastFound + 1, found + 1 - (lastFound + 1));
      t = document_0.createTextNode(ss);
      e.appendChild(t);
      df.appendChild(e);
    }
     else {
      t = document_0.createTextNode('\n');
      df.appendChild(t);
    }
    lastFound = found;
    found = $indexOf_0(intext, fromCodePoint(10), found + 1);
    ++lineNum;
  }
  if (lastFound != intext.length - 1) {
    e = document_0.createElement('span');
    e.setAttribute('id', 'mline_' + ('' + lineNum));
    ss = intext.substr(lastFound + 1);
    t = document_0.createTextNode(ss);
    e.appendChild(t);
    df.appendChild(e);
  }
  return df;
}

$htmlizeText.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$htmlizeText';
function $initDebugAreaLines(this$static){
  var addr, befFirst, br, br$iterator, code_0, copy, dbgline, i, j, last_dbgline, loadAddr, lsti, lstline, lstline$iterator, opcode, p, p$array, p$index, p$max, playerLoadOffset, w, war;
  war = this$static.m_competition.currentWar;
  if (!this$static.m_fillCmd) {
    this$static.m_fillCmd = new CodeEditor$DbgLine;
    this$static.m_fillCmd.text_0 = "<span class='dbg_backfill'><span class='dbg_opcodes'>CC<\/span>int 3<\/span>";
  }
  for (addr = 0; addr < $intern_20; ++addr) {
    this$static.m_dbglines[addr] = this$static.m_fillCmd;
  }
  for (p$array = this$static.m_pages , p$index = 0 , p$max = p$array.length; p$index < p$max; ++p$index) {
    p = p$array[p$index];
    p.isDirty = true;
  }
  this$static.m_dbgBreakpoints = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Breakpoint_2_classLit, $intern_2, 32, $intern_20, 0, 1);
  for (i = 0; i < war.m_numWarriors; ++i) {
    w = war.m_warriors[i];
    playerLoadOffset = w.m_loadAddress.m_linearAddress - $intern_20;
    code_0 = $findCode(this$static.m_playersPanel, w.m_label);
    for (lstline$iterator = new ArrayList$1(code_0.lines); lstline$iterator.i < lstline$iterator.this$01.array.length;) {
      lstline = castTo($next_5(lstline$iterator), 46);
      lstline.tmp_br = null;
    }
    for (br$iterator = new ArrayList$1(code_0.breakpoints); br$iterator.i < br$iterator.this$01.array.length;) {
      br = castTo($next_5(br$iterator), 32);
      castTo($get_4(code_0.lines, br.lineNum - 1), 46).tmp_br = br;
    }
    last_dbgline = null;
    if (castTo($get_4(code_0.lines, 0), 46).address == -1) {
      befFirst = playerLoadOffset - 1;
      if (this$static.m_dbglines[befFirst]) {
        last_dbgline = this$static.m_dbglines[befFirst];
        if (last_dbgline == this$static.m_fillCmd) {
          copy = new CodeEditor$DbgLine;
          copy.text_0 = last_dbgline.text_0;
          last_dbgline = copy;
          this$static.m_dbglines[befFirst] = last_dbgline;
        }
      }
       else {
        last_dbgline = new CodeEditor$DbgLine;
        last_dbgline.text_0 = '';
        this$static.m_dbglines[befFirst] = last_dbgline;
      }
    }
    for (lsti = 0; lsti < code_0.lines.array.length; ++lsti) {
      lstline = castTo($get_4(code_0.lines, lsti), 46);
      if (lstline.address == -1) {
        last_dbgline.flags |= 4;
        last_dbgline.text_0 += "<\/div><div class='dbg_comment_line'>      <span class='dbg_opcodes'><\/span>" + lstline.code_0 + '<\/div>';
      }
       else {
        loadAddr = lstline.address + playerLoadOffset;
        dbgline = new CodeEditor$DbgLine;
        opcode = lstline.opcode;
        dbgline.text_0 = "<span class='dbg_opcodes'>" + opcode + '<\/span>' + lstline.code_0;
        $isDefineCode(lstline.code_0) && (dbgline.flags = 2);
        if (lsti <= 2047) {
          dbgline.flags |= lsti + 1 << 16;
          dbgline.flags |= i << 27;
        }
        this$static.m_dbglines[loadAddr] = dbgline;
        last_dbgline = dbgline;
        for (j = 1; j < lstline.opcodesCount; ++j) {
          this$static.m_dbglines[loadAddr + j] = null;
        }
        !!lstline.tmp_br && (this$static.m_dbgBreakpoints[loadAddr] = lstline.tmp_br);
      }
    }
  }
}

$initDebugAreaLines.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$initDebugAreaLines';
function $isDefineCode(code_0){
  var c, cmd, end, i, s, start_0;
  start_0 = -1;
  end = -1;
  for (i = 0; i < code_0.length; ++i) {
    c = (checkCriticalStringElementIndex(i, code_0.length) , code_0.charCodeAt(i));
    if (start_0 == -1) {
      c > 32 && (start_0 = i);
    }
     else {
      if (c <= 32) {
        end = i;
        break;
      }
    }
  }
  if (start_0 == -1 || end == -1)
    return false;
  cmd = code_0.substr(start_0, end - start_0).toLowerCase();
  s = 0;
  cmd.length == 2 && (checkCriticalStringElementIndex(0, cmd.length) , cmd.charCodeAt(0) == 100) && (s = (checkCriticalStringElementIndex(1, cmd.length) , cmd.charCodeAt(1)));
  cmd.length == 4 && (checkCriticalStringElementIndex(0, cmd.length) , cmd.charCodeAt(0) == 114) && (checkCriticalStringElementIndex(1, cmd.length) , cmd.charCodeAt(1) == 101) && (checkCriticalStringElementIndex(2, cmd.length) , cmd.charCodeAt(2) == 115) && (s = (checkCriticalStringElementIndex(3, cmd.length) , cmd.charCodeAt(3)));
  if (s == 98 || s == 119 || s == 100 || s == 113 || s == 116 || s == 111 || s == 121 || s == 122)
    return true;
  return false;
}

$isDefineCode.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$isDefineCode';
function $j_renderIfDirty(this$static, pagenum){
  var addr, dbgline, page;
  if (pagenum == -1)
    return;
  page = this$static.m_pages[pagenum];
  if (!page.isDirty)
    return;
  for (addr = page.startAddr; addr < page.endAddr; ++addr) {
    dbgline = this$static.m_dbglines[addr];
    $renderLine(this$static, addr, dbgline);
  }
  page.isDirty = false;
}

$j_renderIfDirty.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$j_renderIfDirty';
function $lambda$1_0(this$static){
  $updateTitle(this$static.m_playersPanel, this$static.editor_title.value);
}

$lambda$1_0.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$lambda$1';
function $linesAsInput(text_0){
  var c, i, opcodesText;
  opcodesText = new StringBuilder;
  for (i = 0; i < text_0.length; ++i) {
    c = (checkCriticalStringElementIndex(i, text_0.length) , text_0.charCodeAt(i));
    c == 10 && (opcodesText.string += '<br>' , opcodesText);
  }
  return opcodesText.string;
}

$linesAsInput.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$linesAsInput';
function $loadedNewBinary(this$static, incode, callback){
  var b, dis, len, neq, offset, sb, setbin, text_0, text0;
  if (this$static.m_isDebugMode)
    return;
  $removeCurrentBreakpoints(this$static);
  sb = new StringBuilder;
  dis = new Disassembler$ArrDisassembler(incode.bin, incode.bin.length);
  offset = 0;
  try {
    while (offset < incode.bin.length) {
      text0 = $nextOpcode_0(dis);
      sb.string += '' + text0;
      sb.string += '\n';
      len = $lastOpcodeSize(dis);
      offset += len;
    }
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 9))
      throw toJs($e0);
  }
  for (; offset < incode.bin.length; ++offset) {
    b = incode.bin[offset];
    sb.string += 'db 0x';
    $append_4(sb, hex2(b & 255));
    sb.string += '\n';
  }
  text_0 = sb.string;
  incode.asmText = text_0;
  this$static.asm_edit.value = text_0;
  setbin = incode.bin;
  $setText_0(this$static, incode.asmText, callback);
  neq = $bin_equal(setbin, incode.bin);
  neq != 0 && (console.error('Disassembled code is different from original code at ' + ('' + neq)) , undefined);
  this$static.m_breakpoints = incode.breakpoints;
}

$loadedNewBinary.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$loadedNewBinary';
function $makeLineNums(this$static, intext){
  var e, i, lineCount, lndf;
  lndf = ($clinit_DomGlobal() , document_0).createDocumentFragment();
  this$static.m_lineOffsets = new ArrayList;
  lineCount = 1;
  for (i = 0; i <= intext.length; ++i) {
    if (i == intext.length || (checkCriticalStringElementIndex(i, intext.length) , intext.charCodeAt(i) == 10)) {
      e = document_0.createElement('div');
      e.addEventListener('click', this$static.m_editBrClickHandler);
      e.setAttribute('id', 'ln' + ('' + lineCount));
      e.appendChild(document_0.createTextNode('' + lineCount));
      lndf.appendChild(e);
      ++lineCount;
      $add_0(this$static.m_lineOffsets, valueOf_0(i));
    }
  }
  this$static.m_lineCount = lineCount - 1;
  return lndf;
}

$makeLineNums.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$makeLineNums';
function $onEndRound(this$static){
  $updateDebugLine(this$static);
}

$onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$onEndRound';
function $playerSelectionChanged(this$static, incode, callback){
  var b, b$iterator;
  $removeCurrentBreakpoints(this$static);
  this$static.asm_edit.value = incode.asmText;
  this$static.editor_title.value = incode.player.title_0;
  $setText_0(this$static, incode.asmText, callback);
  this$static.m_breakpoints = incode.breakpoints;
  for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
    b = castTo($next_5(b$iterator), 32);
    $setLineNumBreakpoint(b.lineNum, true);
  }
  this$static.m_isDebugMode && $updateDebugLine(this$static);
}

$playerSelectionChanged.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$playerSelectionChanged';
function $removeCurrentBreakpoints(this$static){
  var b, b$iterator;
  if (this$static.m_breakpoints)
    for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
      b = castTo($next_5(b$iterator), 32);
      $setLineNumBreakpoint(b.lineNum, false);
    }
}

$removeCurrentBreakpoints.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$removeCurrentBreakpoints';
function $renderLine(this$static, addr, dbgline){
  var addrhex, addrstr, br, da, dline, e;
  addrstr = '' + addr;
  dline = castToNative(($clinit_DomGlobal() , document_0).getElementById('d' + addrstr), $wnd.HTMLElement);
  if (!dbgline) {
    dline.style.display = 'none';
    return;
  }
  addrhex = hex4(addr);
  (dbgline.flags & 4) != 0?(dline.innerHTML = "<div id='df" + addrstr + "'><span id='da" + addrstr + "'>" + addrhex + '<\/span>  ' + dbgline.text_0):(dline.innerHTML = "<span id='da" + addrstr + "'>" + addrhex + '<\/span>  ' + dbgline.text_0);
  dline.removeAttribute('style');
  da = castToNative(document_0.getElementById('da' + addrstr), $wnd.HTMLElement);
  da.addEventListener('click', this$static.m_dbgBrClickHandler);
  br = this$static.m_dbgBreakpoints[addr];
  !!br && (e = document_0.getElementById('da' + ('' + addr)) , e.classList.add('dbg_breakpoint'));
}

$renderLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$renderLine';
function $scrollToCodeInEditor(this$static){
  var ipInsideArena;
  ipInsideArena = getWarrirorIp($getCurrentWarrior(this$static));
  if (ipInsideArena == -1)
    return;
  scrollToAddr(ipInsideArena, true);
}

$scrollToCodeInEditor.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$scrollToCodeInEditor';
function $setByte(this$static, address, value_0){
  var dbgline, page;
  dbgline = $getSingleByteLine(this$static, value_0);
  this$static.m_dbglines[address] = dbgline;
  page = address / this$static.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, address, dbgline);
}

$setByte.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$setByte';
function $setDebugMode(this$static, v){
  if (v) {
    this$static.editor_bottom.style.display = 'none';
    this$static.asm_edit.style.display = 'none';
    this$static.editor_title.readOnly = true;
    $initDebugAreaLines(this$static);
    $scrollToCodeInEditor(this$static);
  }
   else {
    this$static.editor_bottom.style.display = '';
    this$static.asm_edit.style.display = '';
    this$static.editor_title.readOnly = false;
  }
  this$static.m_isDebugMode = v;
}

$setDebugMode.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$setDebugMode';
function $setLineNumBreakpoint(lineNum, v){
  var e;
  e = ($clinit_DomGlobal() , document_0).getElementById('ln' + ('' + lineNum));
  v?e.classList.add('edit_breakpoint'):e.classList.remove('edit_breakpoint');
}

$setLineNumBreakpoint.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$setLineNumBreakpoint';
function $setText_0(this$static, intext, playersPanel){
  var buf, df, lineNumDf, ok, opcodesText, output, retcode, stdout, stdoutShorten;
  if (intext.length == 0) {
    this$static.asm_output.innerHTML = '';
    this$static.opcodes_edit.innerHTML = '';
    this$static.asm_show.innerHTML = '';
    this$static.asm_linenums.innerHTML = '1';
    !!playersPanel && $updateAsmResult(playersPanel, true, null, null);
    return;
  }
  intext = $replace_0($replace_0($replace_0($replace(intext, 160, 32), '&', '&amp;'), '<', '&lt;'), '>', '&gt;');
  retcode = ($wnd.FS.writeFile('player.asm', intext, {encoding:'utf8'}) , $wnd.g_outputText = '' , $wnd.run_nasm('player.asm', 'player.lst'));
  stdout = $wnd.g_outputText;
  lineNumDf = $makeLineNums(this$static, intext);
  this$static.asm_linenums.innerHTML = '';
  this$static.asm_linenums.appendChild(lineNumDf);
  df = null;
  if (stdout.length == 0) {
    this$static.asm_show.innerHTML = intext;
    this$static.asm_output.innerHTML = '';
    this$static.m_errLines = null;
  }
   else {
    stdoutShorten = new StringBuilder;
    df = $htmlizeText(intext);
    this$static.m_errLines = $parseStdout(stdout, df, stdoutShorten, this$static.m_lineOffsets);
    this$static.asm_show.innerHTML = '';
    this$static.asm_show.appendChild(df);
    this$static.asm_output.innerHTML = stdoutShorten.string;
  }
  if (retcode != 0) {
    this$static.opcodes_edit.innerHTML = $linesAsInput(intext);
    console.error('~Assembler error');
    !!playersPanel && $updateAsmResult(playersPanel, false, null, null);
    return;
  }
  output = $wnd.FS.readFile('player.lst', {encoding:'utf8'});
  if (output.length == 0) {
    this$static.m_currentListing.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
    this$static.opcodes_edit.innerHTML = $linesAsInput(intext);
    console.log('~Empty output');
    !!playersPanel && $updateAsmResult(playersPanel, true, null, null);
    return;
  }
  opcodesText = new StringBuilder;
  this$static.m_currentListing = new ArrayList;
  ok = $parseLst(output, opcodesText, this$static.m_currentListing);
  if (!ok) {
    this$static.opcodes_edit.innerHTML = '[listing parsing error]';
    console.error('listing parsing error');
    $updateAsmResult(this$static.m_playersPanel, false, null, null);
    return;
  }
  this$static.opcodes_edit.innerHTML = opcodesText.string;
  buf = read_file_bin_arr();
  if (buf.length > 512) {
    console.error('Code is longer than the maximum allowed 512 bytes');
    this$static.asm_output.innerHTML = "<div class='stdout_line_e'>Code is longer than the maximum allowed 512 bytes<\/div>";
    !!playersPanel && $updateAsmResult(playersPanel, false, buf, null);
    return;
  }
  $checkDisasmLines(this$static, buf, this$static.m_currentListing, df, intext);
  !!playersPanel && $updateAsmResult(playersPanel, true, buf, this$static.m_currentListing);
}

$setText_0.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$setText';
function $shouldBreak(this$static, state){
  var absAddr, arenaAddr;
  absAddr = linearAddress_0(state.m_cs, state.m_ip);
  arenaAddr = absAddr - $intern_20;
  if (!this$static.m_dbgBreakpoints[arenaAddr])
    return false;
  return true;
}

$shouldBreak.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$shouldBreak';
function $toggleBreakpointDbg(this$static, addr){
  var br, codeObj, dbgline, e, exist_br$iterator, lsti, playeri, removed, war, warrior, wasAdded;
  if (!this$static.m_dbgBreakpoints[addr]) {
    br = new PlayersPanel$Breakpoint(-1);
    this$static.m_dbgBreakpoints[addr] = br;
    wasAdded = true;
  }
   else {
    br = this$static.m_dbgBreakpoints[addr];
    this$static.m_dbgBreakpoints[addr] = null;
    wasAdded = false;
  }
  war = this$static.m_competition.currentWar;
  dbgline = this$static.m_dbglines[addr];
  lsti = (dbgline.flags & 134152192) >> 16;
  if (lsti >= 1) {
    playeri = (dbgline.flags & -134217728) >> 27;
    warrior = war.m_warriors[playeri];
    codeObj = $findCode(this$static.m_playersPanel, warrior.m_label);
    if (wasAdded) {
      br.lineNum = lsti;
      for (exist_br$iterator = new ArrayList$1(codeObj.breakpoints); exist_br$iterator.i < exist_br$iterator.this$01.array.length;) {
        castTo($next_5(exist_br$iterator), 32);
      }
      $add_0(codeObj.breakpoints, br);
    }
     else {
      removed = $remove_2(codeObj.breakpoints, br);
      removed || (console.error('removed a breakpoint that did not exist?') , undefined);
    }
    codeObj == this$static.m_playersPanel.m_inEditor && (e = ($clinit_DomGlobal() , document_0).getElementById('ln' + ('' + lsti)) , wasAdded?e.classList.add('edit_breakpoint'):e.classList.remove('edit_breakpoint'));
  }
  $renderLine(this$static, addr, dbgline);
}

$toggleBreakpointDbg.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$toggleBreakpointDbg';
function $toggleBreakpointEdit(this$static, atline){
  var atindex, b, b$iterator, e, found;
  atindex = atline - 1;
  if (atindex < 0 || atindex >= this$static.m_currentListing.array.length) {
    console.error('addBreakpointEdit invalid line ' + ('' + atline));
    return;
  }
  found = null;
  for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
    b = castTo($next_5(b$iterator), 32);
    if (b.lineNum == atline) {
      found = b;
      break;
    }
  }
  e = ($clinit_DomGlobal() , document_0).getElementById('ln' + ('' + atline));
  !found?e.classList.add('edit_breakpoint'):e.classList.remove('edit_breakpoint');
  found?$remove_2(this$static.m_breakpoints, found):$add_0(this$static.m_breakpoints, new PlayersPanel$Breakpoint(atline));
}

$toggleBreakpointEdit.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$toggleBreakpointEdit';
function $updateBreakpoints(this$static, prevLineOffsets, prevLineCount, prevInText){
  var br, c, i, isLineWithText, it, keydown, lineNLIndex, lineStartIndex, selEnd, selStart;
  if (!this$static.m_breakpoints || this$static.m_breakpoints.array.length == 0)
    return;
  selStart = $wnd.saved_selectionStart;
  selEnd = $wnd.saved_selectionEnd;
  keydown = $wnd.saved_keydown;
  it = new AbstractList$ListIteratorImpl(this$static.m_breakpoints);
  while (it.i < it.this$01.size_1()) {
    br = (checkCriticalElement(it.i < it.this$01.size_1()) , castTo(it.this$01.get_0(it.last = it.i++), 32));
    lineStartIndex = 0;
    br.lineNum != 1 && (lineStartIndex = castTo($get_4(prevLineOffsets, br.lineNum - 1 - 1), 25).value_0 + 1);
    lineNLIndex = castTo($get_4(prevLineOffsets, br.lineNum - 1), 25).value_0;
    if (selStart != selEnd && (selStart < lineStartIndex && selEnd > lineStartIndex || selStart == lineStartIndex && selEnd > lineNLIndex)) {
      $remove_0(it);
      continue;
    }
    if (prevLineCount != this$static.m_lineCount) {
      if (selStart == selEnd && selStart == lineStartIndex && (keydown == 'Backspace' || keydown == 'Delete')) {
        isLineWithText = false;
        if (prevInText != null) {
          for (i = lineStartIndex; i < lineNLIndex && !isLineWithText; ++i) {
            c = (checkCriticalStringElementIndex(i, prevInText.length) , prevInText.charCodeAt(i));
            isLineWithText = c != 32 && c != 10;
          }
        }
        if (!isLineWithText) {
          $remove_0(it);
          continue;
        }
      }
      if (selStart <= lineStartIndex && selEnd <= lineStartIndex) {
        br.lineNum += this$static.m_lineCount - prevLineCount;
        $setLineNumBreakpoint(br.lineNum, true);
      }
    }
    $setLineNumBreakpoint(br.lineNum, true);
  }
}

$updateBreakpoints.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$updateBreakpoints';
function $updateDebugLine(this$static){
  var currentWarrior, dline, flags, ider, ipInsideArena, isAlive, opcodeAddr, value_0;
  currentWarrior = $getCurrentWarrior(this$static);
  if (!currentWarrior)
    return;
  ipInsideArena = getWarrirorIp(currentWarrior);
  isAlive = currentWarrior.m_isAlive;
  scrollToAddr(ipInsideArena, false);
  if (ipInsideArena == this$static.m_lastDbgAddr && isAlive == this$static.m_lastIsAlive) {
    return;
  }
  this$static.m_lastDbgElement != null && this$static.m_lastDbgElement.classList.remove(this$static.m_lastIsAlive?'current_dbg':'current_dbg_dead');
  if (!this$static.m_dbglines[ipInsideArena]) {
    opcodeAddr = ipInsideArena;
    while (!this$static.m_dbglines[opcodeAddr])
      --opcodeAddr;
    do {
      value_0 = $readByte(this$static.m_mem, opcodeAddr + $intern_20);
      $setByte(this$static, opcodeAddr, (value_0 & 255) << 24 >> 24);
      ++opcodeAddr;
    }
     while (!this$static.m_dbglines[opcodeAddr]);
    $disassembleAddr(this$static, ipInsideArena + $intern_20, ipInsideArena);
  }
   else {
    flags = this$static.m_dbglines[ipInsideArena].flags;
    ((flags & 1) != 0 || (flags & 2) != 0) && $disassembleAddr(this$static, ipInsideArena + $intern_20, ipInsideArena);
  }
  ider = 'd';
  (this$static.m_dbglines[ipInsideArena].flags & 4) != 0 && (ider = 'df');
  dline = castToNative(($clinit_DomGlobal() , document_0).getElementById(ider + ('' + ipInsideArena)), $wnd.HTMLElement);
  dline.classList.add(isAlive?'current_dbg':'current_dbg_dead');
  this$static.m_lastDbgElement = dline;
  this$static.m_lastDbgAddr = ipInsideArena;
  this$static.m_lastDbgAddrEnd = this$static.m_lastDbgAddr + 1;
  this$static.m_lastIsAlive = isAlive;
  while (this$static.m_lastDbgAddrEnd < $intern_20 && !this$static.m_dbglines[this$static.m_lastDbgAddrEnd])
    ++this$static.m_lastDbgAddrEnd;
}

$updateDebugLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$updateDebugLine';
function CodeEditor(competition){
  var i, pi;
  this.m_singleByte = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit, $intern_2, 36, 256, 0, 1);
  this.PAGE_SIZE_0 = $wnd.PAGE_SIZE;
  this.m_editBrClickHandler = new CodeEditor$1(this);
  this.m_dbgBrClickHandler = new CodeEditor$2(this);
  this.m_competition = competition;
  $addCompetitionEventListener(this.m_competition, this);
  $addMemoryEventLister(this.m_competition, this);
  this.asm_edit = castToNative(($clinit_DomGlobal() , document_0).getElementById('asm_edit'), $wnd.HTMLTextAreaElement);
  this.asm_show = castToNative(document_0.getElementById('asm_show'), $wnd.HTMLElement);
  this.asm_output = castToNative(document_0.getElementById('asm_output'), $wnd.HTMLElement);
  this.editor_bottom = castToNative(document_0.getElementById('editor_bottom'), $wnd.HTMLElement);
  this.opcodes_edit = castToNative(document_0.getElementById('opcodes_edit'), $wnd.HTMLElement);
  this.asm_linenums = castToNative(document_0.getElementById('asm_linenums'), $wnd.HTMLElement);
  this.editor_title = castToNative(document_0.getElementById('editor_title'), $wnd.HTMLInputElement);
  this.asm_edit.addEventListener('input', new CodeEditor$lambda$0$Type(this));
  this.editor_title.addEventListener('input', new CodeEditor$lambda$1$Type(this));
  this.m_dbglines = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit, $intern_2, 36, $intern_20, 0, 1);
  this.m_pages = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$PageInfo_2_classLit, $intern_2, 81, ($intern_20 / this.PAGE_SIZE_0 | 0) + 1, 0, 1);
  for (i = 0; i < this.m_pages.length; ++i) {
    pi = new CodeEditor$PageInfo;
    this.m_pages[i] = pi;
    pi.isDirty = true;
    pi.startAddr = i * this.PAGE_SIZE_0;
    pi.endAddr = $wnd.Math.min((i + 1) * this.PAGE_SIZE_0, $intern_20);
  }
  $exportMethods_0(this);
}

CodeEditor.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.CodeEditor';
function _PAGE_SIZE(){
  return $wnd.PAGE_SIZE;
}

_PAGE_SIZE.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor._PAGE_SIZE';
function getWarrirorIp(w){
  var cs, ip, ipInsideArena, state;
  if (!w)
    return -1;
  state = w.m_state;
  ip = state.m_ip;
  cs = state.m_cs;
  ipInsideArena = linearAddress_0(cs, ip) - $intern_20;
  return ipInsideArena;
}

getWarrirorIp.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.getWarrirorIp';
function get_stdout(){
  return $wnd.g_outputText;
}

get_stdout.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.get_stdout';
function read_file(name_0){
  return $wnd.FS.readFile(name_0, {encoding:'utf8'});
}

read_file.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.read_file';
function read_file_bin(name_0){
  return $wnd.FS.readFile(name_0, {encoding:'binary'});
}

read_file_bin.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.read_file_bin';
function read_file_bin_arr(){
  var arr, buf, i;
  arr = $wnd.FS.readFile('player', {encoding:'binary'});
  buf = initUnidimensionalArray(B_classLit, $intern_19, 10, arr.length, 15, 1);
  for (i = 0; i < arr.length; ++i)
    buf[i] = arr[i] << 24 >> 24;
  return buf;
}

read_file_bin_arr.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.read_file_bin_arr';
function run_nasm(asmname, text_0, lstname){
  $wnd.FS.writeFile(asmname, text_0, {encoding:'utf8'});
  $wnd.g_outputText = '';
  var ret_code = $wnd.run_nasm(asmname, lstname);
  return ret_code;
}

run_nasm.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.run_nasm';
function saved_keydown(){
  return $wnd.saved_keydown;
}

saved_keydown.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.saved_keydown';
function saved_selectionEnd(){
  var v = $wnd.saved_selectionEnd;
  return v;
}

saved_selectionEnd.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.saved_selectionEnd';
function saved_selectionStart(){
  var v = $wnd.saved_selectionStart;
  return v;
}

saved_selectionStart.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.saved_selectionStart';
function scrollToAddr(addr, defer_0){
  defer_0?($wnd.deferredEditorToAddress = addr):$wnd.scrollToAddr(addr);
}

scrollToAddr.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.scrollToAddr';
defineClass(148, 1, $intern_22, CodeEditor);
_.asm_edit_changed = function asm_edit_changed(){
  $asm_edit_changed(this);
}
;
_.asm_edit_changed.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.asm_edit_changed';
_.j_renderIfDirty_0 = function j_renderIfDirty(pagenum){
  $j_renderIfDirty(this, pagenum);
}
;
_.j_renderIfDirty_0.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.j_renderIfDirty';
_.j_setScrollAt_0 = function j_setScrollAt(p1, p2){
  $j_renderIfDirty(this, p1);
  $j_renderIfDirty(this, p2);
  this.m_atScrollP1 = p1;
  this.m_atScrollP2 = p2;
}
;
_.j_setScrollAt_0.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.j_setScrollAt';
_.onCompetitionEnd = function onCompetitionEnd(){
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart(){
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onCompetitionStart';
_.onEndRound = function onEndRound(){
  $updateDebugLine(this);
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onEndRound';
_.onMemoryWrite = function onMemoryWrite(address, value_0){
  var absAddr, cIpInsideArea, existing, ipInsideArena, page;
  if (this.m_memWriteState != 2)
    return;
  absAddr = address.m_linearAddress;
  if (absAddr < $intern_20 || absAddr >= 131072)
    return;
  ipInsideArena = absAddr - $intern_20;
  cIpInsideArea = ipInsideArena;
  page = ipInsideArena / this.PAGE_SIZE_0 | 0;
  if (page < 0 || page >= this.m_pages.length)
    return;
  this.m_pages[page].isDirty = true;
  existing = this.m_dbglines[ipInsideArena];
  if (existing == this.m_fillCmd) {
    $setByte(this, ipInsideArena, value_0);
  }
   else {
    while (!this.m_dbglines[ipInsideArena])
      --ipInsideArena;
    do {
      $setByte(this, ipInsideArena, $readByte(this.m_mem, ipInsideArena + $intern_20));
      ++ipInsideArena;
    }
     while (ipInsideArena < $intern_20 && !this.m_dbglines[ipInsideArena]);
  }
  if (cIpInsideArea >= this.m_lastDbgAddr && cIpInsideArea < this.m_lastDbgAddrEnd) {
    this.m_lastDbgAddr = -1;
    $updateDebugLine(this);
  }
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onMemoryWrite';
_.onNoneAlive = function onNoneAlive(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onNoneAlive';
_.onPaused = function onPaused(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onPaused';
_.onRound = function onRound(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onRound';
_.onWarEnd = function onWarEnd(reason, winners, inDebug){
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarPreStartClear';
_.onWarStart = function onWarStart(){
  this.m_mem = this.m_competition.currentWar.m_core;
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarStart';
_.onWarriorBirth = function onWarriorBirth(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarriorDeath';
_.onWriteState = function onWriteState(state){
  this.m_memWriteState = state;
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWriteState';
_.PAGE_SIZE_0 = 0;
_.entered = false;
_.m_atScrollP1 = -1;
_.m_atScrollP2 = -1;
_.m_breakpoints = null;
_.m_competition = null;
_.m_errLines = null;
_.m_isDebugMode = false;
_.m_lastDbgAddr = -1;
_.m_lastDbgAddrEnd = -1;
_.m_lastIsAlive = false;
_.m_lineCount = 0;
_.m_lineOffsets = null;
_.m_mem = null;
_.m_memWriteState = 0;
_.m_playersPanel = null;
_.m_prevInText = null;
var Lil_co_codeguru_corewars8086_gui_CodeEditor_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor', 148);
function CodeEditor$1(this$0){
  this.this$01 = this$0;
}

CodeEditor$1.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$1.CodeEditor$1';
defineClass(149, 1, {}, CodeEditor$1);
_.handleEvent = function handleEvent_1(event_0){
  var e;
  e = castToNative(event_0.target, $wnd.Element);
  $toggleBreakpointEdit(this.this$01, __parseAndValidateInt(e.innerHTML, 10));
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$1.handleEvent';
var Lil_co_codeguru_corewars8086_gui_CodeEditor$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/1', 149);
function CodeEditor$2(this$0){
  this.this$01 = this$0;
}

CodeEditor$2.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$2.CodeEditor$2';
defineClass(150, 1, {}, CodeEditor$2);
_.handleEvent = function handleEvent_2(event_0){
  var e;
  e = castToNative(event_0.target, $wnd.Element);
  $toggleBreakpointDbg(this.this$01, __parseAndValidateInt(e.innerHTML, 16));
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$2.handleEvent';
var Lil_co_codeguru_corewars8086_gui_CodeEditor$2_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/2', 150);
function $$init_7(this$static){
}

$$init_7.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$DbgLine.$$init';
function CodeEditor$DbgLine(){
}

CodeEditor$DbgLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$DbgLine.CodeEditor$DbgLine';
defineClass(36, 1, {36:1}, CodeEditor$DbgLine);
_.flags = 0;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/DbgLine', 36);
function $$init_8(this$static){
}

$$init_8.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$LstLine.$$init';
function CodeEditor$LstLine(){
}

CodeEditor$LstLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$LstLine.CodeEditor$LstLine';
defineClass(46, 1, {46:1}, CodeEditor$LstLine);
_.address = -1;
_.addressStr = '';
_.code_0 = '';
_.fullOpcode = '';
_.lineNum = -1;
_.opcode = '';
_.opcodesCount = 0;
_.tmp_br = null;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$LstLine_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/LstLine', 46);
function CodeEditor$PageInfo(){
}

CodeEditor$PageInfo.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$PageInfo.CodeEditor$PageInfo';
defineClass(81, 1, {81:1}, CodeEditor$PageInfo);
_.endAddr = 0;
_.isDirty = false;
_.startAddr = 0;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$PageInfo_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/PageInfo', 81);
function CodeEditor$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

CodeEditor$lambda$0$Type.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$0$Type.CodeEditor$lambda$0$Type';
defineClass(151, 1, {}, CodeEditor$lambda$0$Type);
_.handleEvent = function handleEvent_3(arg0){
  $asm_edit_changed(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$0$Type.handleEvent';
var Lil_co_codeguru_corewars8086_gui_CodeEditor$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/lambda$0$Type', 151);
function CodeEditor$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

CodeEditor$lambda$1$Type.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$1$Type.CodeEditor$lambda$1$Type';
defineClass(152, 1, {}, CodeEditor$lambda$1$Type);
_.handleEvent = function handleEvent_4(arg0){
  $lambda$1_0(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$1$Type.handleEvent';
var Lil_co_codeguru_corewars8086_gui_CodeEditor$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/lambda$1$Type', 152);
function $clinit_ColorHolder(){
  $clinit_ColorHolder = emptyMethod;
  ins = new ColorHolder;
}

$clinit_ColorHolder.displayName = 'il.co.codeguru.corewars8086.gui.ColorHolder.$clinit';
function $getColor(this$static, pos, darker){
  return darker?this$static.darkColors[pos]:this$static.colors[pos];
}

$getColor.displayName = 'il.co.codeguru.corewars8086.gui.ColorHolder.$getColor';
function ColorHolder(){
  var i, i0, x_0;
  this.colors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit, $intern_2, 42, 360, 0, 1);
  x_0 = 0;
  for (i0 = 0; i0 < 360; i0++) {
    this.colors[i0] = ($clinit_Color() , HSBtoRGB(x_0 % 1));
    x_0 += 0.6180340051651001;
  }
  this.darkColors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit, $intern_2, 42, this.colors.length, 0, 1);
  for (i = 0; i < this.colors.length; i++) {
    this.darkColors[i] = $darker(this.colors[i]);
  }
}

ColorHolder.displayName = 'il.co.codeguru.corewars8086.gui.ColorHolder.ColorHolder';
defineClass(181, 1, {}, ColorHolder);
var ins;
var Lil_co_codeguru_corewars8086_gui_ColorHolder_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColorHolder', 181);
function $addToValue(this$static, pos, subIndex, value_0){
  var i, sb;
  this$static.columns[pos].values_0[0] += value_0;
  this$static.columns[pos].values_0[subIndex + 1] += value_0;
  if (this$static.columns[pos].values_0[0] > this$static.maxValue) {
    this$static.maxValue = this$static.columns[pos].values_0[0];
    this$static.maxValue * this$static.reduceFactor > castToNative(this$static.m_element, $wnd.HTMLCanvasElement).height - 15 - 30 && (this$static.reduceFactor *= 0.5);
  }
  sb = new StringBuilder;
  for (i = 0; i < this$static.columns.length; ++i) {
    $append_0(sb, this$static.columns[i].values_0[0]);
    sb.string += '  ';
  }
  log_0('Score add ' + ('' + pos) + ' ' + ('' + subIndex) + ' ' + ('' + value_0) + '  totals= ' + sb.string);
  $paintComponent(this$static);
}

$addToValue.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$addToValue';
function $clear_0(this$static, groups){
  var c1, c2, colorHolder, i;
  this$static.maxValue = 0;
  this$static.reduceFactor = 5;
  if (!groups)
    return;
  $wnd.clear_code_buttons_colors();
  colorHolder = ($clinit_ColorHolder() , $clinit_ColorHolder() , ins);
  this$static.columns = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_ColumnGraph$PlayerColumn_2_classLit, $intern_2, 80, groups.array.length, 0, 1);
  for (i = 0; i < groups.array.length; ++i) {
    c1 = colorHolder.colors[i];
    c2 = colorHolder.darkColors[i];
    this$static.columns[i] = new ColumnGraph$PlayerColumn((checkCriticalElementIndex(i, groups.array.length) , castTo(groups.array[i], 28)).name_0, $toString_1(c1), $toString_1(c2));
    $setButtonColor($toString_1(c1), (checkCriticalElementIndex(i, groups.array.length) , castTo(groups.array[i], 28)).label_0 + '0');
    $setButtonColor($toString_1(c2), (checkCriticalElementIndex(i, groups.array.length) , castTo(groups.array[i], 28)).label_0 + '1');
  }
}

$clear_0.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$clear';
function $js_clear_code_buttons_colors(){
  $wnd.clear_code_buttons_colors();
}

$js_clear_code_buttons_colors.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$js_clear_code_buttons_colors';
function $paintColumn(this$static, col, width_0, startHeight){
  var height1, height2;
  this$static.ctx.fillStyle = this$static.columns[col].col1;
  height1 = round_int(this$static.reduceFactor * this$static.columns[col].values_0[1]);
  this$static.ctx.fillRect(col * width_0, startHeight - height1, width_0 - 5, height1);
  this$static.ctx.fillStyle = this$static.columns[col].col2;
  height2 = round_int(this$static.reduceFactor * this$static.columns[col].values_0[2]);
  this$static.ctx.fillRect(col * width_0, startHeight - height1 - height2, width_0 - 5, height2);
  this$static.ctx.fillText('' + this$static.columns[col].values_0[0], col * width_0 + 5, startHeight - height1 - height2 - 5);
}

$paintColumn.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$paintColumn';
function $paintComponent(this$static){
  var columnWidth, height, i, numPlayers, width_0, height1, height2;
  width_0 = castToNative(this$static.m_element, $wnd.HTMLCanvasElement).width;
  height = castToNative(this$static.m_element, $wnd.HTMLCanvasElement).height;
  this$static.ctx.fillStyle = '#fdfdfd';
  this$static.ctx.fillRect(0, 0, width_0, height);
  this$static.ctx.font = '16px monospace';
  numPlayers = this$static.columns.length;
  columnWidth = width_0 / numPlayers | 0;
  for (i = 0; i < numPlayers; i++) {
    this$static.ctx.fillStyle = this$static.columns[i].col1;
    height1 = round_int(this$static.reduceFactor * this$static.columns[i].values_0[1]);
    this$static.ctx.fillRect(i * columnWidth, height - 30 - height1, columnWidth - 5, height1);
    this$static.ctx.fillStyle = this$static.columns[i].col2;
    height2 = round_int(this$static.reduceFactor * this$static.columns[i].values_0[2]);
    this$static.ctx.fillRect(i * columnWidth, height - 30 - height1 - height2, columnWidth - 5, height2);
    this$static.ctx.fillText('' + this$static.columns[i].values_0[0], i * columnWidth + 5, height - 30 - height1 - height2 - 5);
    this$static.ctx.fillStyle = this$static.columns[i].col2;
    this$static.ctx.fillText(this$static.columns[i].name_0, i * columnWidth + 5, height - 30 + 17 - 2);
  }
}

$paintComponent.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$paintComponent';
function ColumnGraph(){
  JComponent_0.call(this, 'graphs_canvas');
  $clear_0(this, null);
  this.ctx = castToNative(castToNative(this.m_element, $wnd.HTMLCanvasElement).getContext('2d'), $wnd.CanvasRenderingContext2D);
}

ColumnGraph.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.ColumnGraph';
defineClass(147, 24, {}, ColumnGraph);
_.maxValue = 0;
_.reduceFactor = 0;
var Lil_co_codeguru_corewars8086_gui_ColumnGraph_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColumnGraph', 147);
function ColumnGraph$PlayerColumn(nm, c1, c2){
  this.name_0 = nm;
  this.col1 = c1;
  this.col2 = c2;
  this.values_0 = initUnidimensionalArray(F_classLit, $intern_13, 10, 3, 15, 1);
}

ColumnGraph$PlayerColumn.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph$PlayerColumn.ColumnGraph$PlayerColumn';
defineClass(80, 1, {80:1}, ColumnGraph$PlayerColumn);
var Lil_co_codeguru_corewars8086_gui_ColumnGraph$PlayerColumn_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColumnGraph/PlayerColumn', 80);
function JFrame(){
  JComponent.call(this);
}

JFrame.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JFrame.JFrame';
defineClass(97, 24, {});
var Lil_co_codeguru_corewars8086_gui_widgets_JFrame_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JFrame', 97);
function $$init_9(this$static){
  this$static.animCallback = new CompetitionWindow$1(this$static);
}

$$init_9.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$$init';
function $callContinueRun(this$static){
  var needMore;
  needMore = $continueRun(this$static.competition);
  this$static.stepnum.innerHTML = !this$static.competition.compState?'[null]':'' + this$static.competition.compState.round_0;
  needMore && (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static.animCallback, null);
}

$callContinueRun.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$callContinueRun';
function $errorPreventsStep(this$static, v){
  $setEnabled(this$static.battleFrame.btnPause, !v);
  $setEnabled(this$static.battleFrame.btnSingleRound, !v);
}

$errorPreventsStep.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$errorPreventsStep';
function $exportMethods_1(this$static){
  var that = this$static;
  $wnd.j_startDebug = $entry(function(){
    return that.j_startDebug_0();
  }
  );
  $wnd.j_stopDebug = $entry(function(){
    return that.j_stopDebug_0();
  }
  );
  $wnd.j_debugUiInited = $entry(function(){
    return that.j_debugUiInited_0();
  }
  );
  $wnd.j_triggerZeroSpeed = $entry(function(){
    return that.j_triggerZeroSpeed_0();
  }
  );
  $wnd.j_startCompete = $entry(function(){
    return that.j_startCompete_0();
  }
  );
  $wnd.j_stopCompete = $entry(function(){
    return that.j_stopCompete_0();
  }
  );
}

$exportMethods_1.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$exportMethods';
function $gui_runWar(this$static, isBattleShown, isStartPaused){
  isBattleShown != null && (this$static.m_isBattleShown = (checkCriticalNotNull(isBattleShown) , isBattleShown));
  isStartPaused != null && (this$static.m_isStartPaused = (checkCriticalNotNull(isStartPaused) , isStartPaused));
  if ($runWar(this$static, (checkCriticalNotNull(isBattleShown) , isBattleShown))) {
    (checkCriticalNotNull(isBattleShown) , isBattleShown) && $setDebugMode_0(this$static, true);
    this$static.stepnum.innerHTML = '0';
    $setValue_1(this$static.battleFrame.speedSlider);
    return true;
  }
  return false;
}

$gui_runWar.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$gui_runWar';
function $requestFrame(this$static){
  (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static.animCallback, null);
}

$requestFrame.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$requestFrame';
function $runWar(this$static, isInDebug){
  var battlesPerGroup, e, inEditorWarrior, numOfGroups, repo, seedValue, war;
  battlesPerGroup = 0;
  try {
    $equals_4(castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value.substr(0, 'SEED#'.length), 'SEED#')?(seedValue = __parseAndValidateLong(castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value.substr(5))):(seedValue = getHashCode_0(castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value));
    $setSeed(this$static.competition, seedValue);
    battlesPerGroup = 0;
    battlesPerGroup = __parseAndValidateInt($trim(castToNative(this$static.battlesPerGroupField.m_element, $wnd.HTMLInputElement).value), 10);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 15)) {
      console.log('Error in configuration');
    }
     else 
      throw toJs($e0);
  }
  if (battlesPerGroup <= 0) {
    console.error('battles per session needs to be more than 0');
    return false;
  }
  repo = this$static.competition.warriorRepository;
  if (!$readWarriorFilesFromUI(repo, $getFiles(this$static.m_playersPanel, 112), $getFiles(this$static.m_playersPanel, 122), isInDebug))
    return false;
  this$static.inGraphs && $clear_0(this$static.columnGraph, repo.warriorGroups);
  numOfGroups = repo.warriorGroups.array.length;
  if (numOfGroups == 0) {
    console.error("can't run without any warriors");
    return false;
  }
  try {
    $runCompetition(this$static.competition, battlesPerGroup, numOfGroups, this$static.m_isStartPaused, this$static.m_isBattleShown);
    $callContinueRun(this$static);
    if (this$static.m_isBattleShown) {
      war = this$static.competition.currentWar;
      $setBreakpointCheck(war, this$static.m_codeEditor);
      inEditorWarrior = $getWarriorByLabel(war, this$static.m_playersPanel.m_inEditor.label_0);
      inEditorWarrior?(war.m_uiWarriorIndex = inEditorWarrior.m_myIndex):(war.m_uiWarriorIndex = -1);
    }
    return true;
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 7)) {
      e = $e1;
      log_0('runWar EXCEPTION ' + $toString_0(e, e.getLocalizedMessage()));
      $printStackTraceImpl(e, new ConsolePrintStream, '', '');
    }
     else 
      throw toJs($e1);
  }
  return false;
}

$runWar.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$runWar';
function $setDebugMode_0(this$static, v){
  $setDebugMode(this$static.m_codeEditor, v);
  $setDebugMode_1(this$static.m_playersPanel, v);
  $setVisible(this$static.battleFrame.cpuframe, v);
  v || (this$static.battleFrame.warCanvas.m_indebug = false);
}

$setDebugMode_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$setDebugMode';
function $showBattleRoom(this$static){
  this$static.battleFrame = new WarFrame(this$static.competition, this$static);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame.cpuframe);
  $addCompetitionEventListener(this$static.competition, this$static.battleFrame);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame.cpuframe.stackView);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame.cpuframe.sharedMemView);
}

$showBattleRoom.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$showBattleRoom';
function $srcSelectionChanged(this$static, label_0){
  var war, warrior;
  war = this$static.competition.currentWar;
  if (!war)
    return;
  warrior = $getWarriorByLabel(war, label_0);
  warrior?(war.m_uiWarriorIndex = warrior.m_myIndex):(war.m_uiWarriorIndex = -1);
}

$srcSelectionChanged.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$srcSelectionChanged';
function CompetitionWindow(){
  var warriorRepository;
  JFrame.call(this);
  this.animCallback = new CompetitionWindow$1(this);
  new JPanel;
  this.competition = new Competition;
  $addCompetitionEventListener(this.competition, this);
  warriorRepository = this.competition.warriorRepository;
  $add(warriorRepository.scoreEventsCaster, this);
  $doneAdding(warriorRepository.scoreEventsCaster);
  this.columnGraph = new ColumnGraph;
  new JPanel;
  new JPanel;
  new JPanel;
  this.warCounterDisplay = new JLabel_0;
  new JPanel;
  new JLabel_0;
  $wnd.Math.min(4, this.competition.warriorRepository.warriorGroups.array.length);
  new JLabel_0;
  this.battlesPerGroupField = new JTextField('battlesPerGroupField', '100');
  this.seed = new JTextField('seed', null);
  $setText_1(this.seed, 'guru');
  new JLabel_0;
  new JPanel;
  this.battleFrame = new WarFrame(this.competition, this);
  $addMemoryEventLister(this.competition, this.battleFrame);
  $addMemoryEventLister(this.competition, this.battleFrame.cpuframe);
  $addCompetitionEventListener(this.competition, this.battleFrame);
  $addMemoryEventLister(this.competition, this.battleFrame.cpuframe.stackView);
  $addMemoryEventLister(this.competition, this.battleFrame.cpuframe.sharedMemView);
  this.m_codeEditor = new CodeEditor(this.competition);
  this.m_playersPanel = new PlayersPanel(this);
  this.m_codeEditor.m_playersPanel = this.m_playersPanel;
  this.stepnum = castToNative(($clinit_DomGlobal() , document_0).getElementById('stepnum'), $wnd.HTMLElement);
  $exportMethods_1(this);
  $doneAdding(this.competition.competitionEventCaster);
  $doneAdding(this.competition.memoryEventCaster);
  $wnd.gwtStart();
}

CompetitionWindow.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.CompetitionWindow';
function call_gwtStart(){
  $wnd.gwtStart();
}

call_gwtStart.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.call_gwtStart';
function jsCompeteFinish(){
  $wnd.competeFinished();
}

jsCompeteFinish.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.jsCompeteFinish';
function setBattlesRan(round_0){
  $wnd.battlesRan.innerHTML = round_0;
}

setBattlesRan.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.setBattlesRan';
defineClass(122, 97, {12:1, 227:1}, CompetitionWindow);
_.j_debugUiInited_0 = function j_debugUiInited(){
  this.competition.competitionEventListener.onEndRound();
}
;
_.j_debugUiInited_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_debugUiInited';
_.j_startCompete_0 = function j_startCompete(){
  this.inGraphs = true;
  if (!$checkPlayersReady(this.m_playersPanel))
    return false;
  if (!$gui_runWar(this, ($clinit_Boolean() , false), false))
    return false;
  return true;
}
;
_.j_startCompete_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_startCompete';
_.j_startDebug_0 = function j_startDebug(){
  this.inGraphs = false;
  if (!$checkPlayersReady(this.m_playersPanel))
    return false;
  if (!$gui_runWar(this, ($clinit_Boolean() , true), true))
    return false;
  return true;
}
;
_.j_startDebug_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_startDebug';
_.j_stopCompete_0 = function j_stopCompete(){
  $setAbort(this.competition);
}
;
_.j_stopCompete_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_stopCompete';
_.j_stopDebug_0 = function j_stopDebug(){
  this.inGraphs = false;
  $setAbort(this.competition);
  $setDebugMode_0(this, false);
}
;
_.j_stopDebug_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_stopDebug';
_.j_triggerZeroSpeed_0 = function j_triggerZeroSpeed(){
  $setSpeed(this.competition, 0);
  $setValue_1(this.battleFrame.speedSlider);
}
;
_.j_triggerZeroSpeed_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_triggerZeroSpeed';
_.onCompetitionEnd = function onCompetitionEnd_0(){
  $setText(this.warCounterDisplay, 'The competition is over. ' + this.warCounter + ' sessions were run.');
  $wnd.competeFinished();
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_0(){
  this.warCounter = 0;
  this.totalWars = $getTotalNumberOfWars(this.competition);
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onCompetitionStart';
_.onEndRound = function onEndRound_0(){
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onEndRound';
_.onNoneAlive = function onNoneAlive_0(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onNoneAlive';
_.onPaused = function onPaused_0(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onPaused';
_.onRound = function onRound_0(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onRound';
_.onWarEnd = function onWarEnd_0(reason, winners, inDebug){
  ++this.warCounter;
  $setText_1(this.seed, 'SEED#' + toString_4(this.competition.seed));
  $setText(this.warCounterDisplay, 'Sessions so far:' + this.warCounter + ' (out of ' + this.totalWars + ')');
  setBattlesRan('' + this.warCounter + '/' + ('' + this.totalWars));
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_0(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarPreStartClear';
_.onWarStart = function onWarStart_0(){
  $setVisible(this.battleFrame.cpuframe, true);
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarStart';
_.onWarriorBirth = function onWarriorBirth_0(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_0(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarriorDeath';
_.scoreChanged = function scoreChanged(name_0, addedValue, groupIndex, subIndex){
  this.inGraphs && $addToValue(this.columnGraph, groupIndex, subIndex, addedValue);
}
;
_.scoreChanged.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.scoreChanged';
_.inGraphs = false;
_.m_isBattleShown = false;
_.m_isStartPaused = false;
_.totalWars = 0;
_.warCounter = 0;
var s_instance;
var Lil_co_codeguru_corewars8086_gui_CompetitionWindow_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CompetitionWindow', 122);
function $execute(this$static){
  var e;
  try {
    $callContinueRun(this$static.this$01);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      log_0('continueRun EXCEPTION ' + $toString_0(e, e.getLocalizedMessage()));
      $printStackTraceImpl(e, ($clinit_System() , err), '', '');
    }
     else 
      throw toJs($e0);
  }
}

$execute.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow$1.$execute';
function CompetitionWindow$1(this$0){
  this.this$01 = this$0;
}

CompetitionWindow$1.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow$1.CompetitionWindow$1';
defineClass(133, 1, {}, CompetitionWindow$1);
_.execute = function execute(timestamp){
  $execute(this);
}
;
_.execute.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow$1.execute';
var Lil_co_codeguru_corewars8086_gui_CompetitionWindow$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CompetitionWindow/1', 133);
function $$init_10(this$static){
  this$static.m_watches = new HashMap;
  this$static.m_stateAccess = new CpuFrame$StateAccess;
  this$static.m_parser = new ExpressionParser;
}

$$init_10.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$$init';
function $exportMethods_2(this$static){
  var that = this$static;
  $wnd.j_setRegistersBase = $entry(function(b){
    that.j_setRegistersBase_0(b);
  }
  );
  $wnd.j_watchTextChanged = $entry(function(s, i){
    return that.j_watchTextChanged_0(s, i);
  }
  );
  $wnd.j_addWatch = $entry(function(i){
    return that.j_addWatch_0(i);
  }
  );
  $wnd.j_delWatch = $entry(function(i){
    return that.j_delWatch_0(i);
  }
  );
}

$exportMethods_2.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$exportMethods';
function $flagChanged_callback(this$static, name_0, v){
  var currentWar, state;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return;
  state = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel).m_state;
  switch (name_0) {
    case 'OF':
      v?(state.m_flags = (state.m_flags | $intern_17) << 16 >> 16):(state.m_flags = (state.m_flags & -2049) << 16 >> 16);
      break;
    case 'DF':
      v?(state.m_flags = (state.m_flags | $intern_16) << 16 >> 16):(state.m_flags = (state.m_flags & -1025) << 16 >> 16);
      break;
    case 'IF':
      v?(state.m_flags = (state.m_flags | 512) << 16 >> 16):(state.m_flags = (state.m_flags & -513) << 16 >> 16);
      break;
    case 'TF':
      v?(state.m_flags = (state.m_flags | 256) << 16 >> 16):(state.m_flags = (state.m_flags & -257) << 16 >> 16);
      break;
    case 'SF':
      v?(state.m_flags = (state.m_flags | 128) << 16 >> 16):(state.m_flags = (state.m_flags & -129) << 16 >> 16);
      break;
    case 'ZF':
      v?(state.m_flags = (state.m_flags | 64) << 16 >> 16):(state.m_flags = (state.m_flags & -65) << 16 >> 16);
      break;
    case 'AF':
      v?(state.m_flags = (state.m_flags | 16) << 16 >> 16):(state.m_flags = (state.m_flags & -17) << 16 >> 16);
      break;
    case 'PF':
      v?(state.m_flags = (state.m_flags | 4) << 16 >> 16):(state.m_flags = (state.m_flags & -5) << 16 >> 16);
      break;
    case 'CF':
      v?(state.m_flags = (state.m_flags | 1) << 16 >> 16):(state.m_flags = (state.m_flags & -2) << 16 >> 16);
  }
  $setValue_0(this$static.regF, state.m_flags);
}

$flagChanged_callback.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$flagChanged_callback';
function $initMemRegions(this$static, force){
  var currentWar, warrior;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return;
  warrior = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel);
  if (!warrior)
    return;
  $initMemRegion(this$static.stackView, warrior.m_stackWritableRegion, currentWar.m_core, force);
  $initMemRegion(this$static.sharedMemView, warrior.m_sharedWritableRegion, currentWar.m_core, force);
  this$static.m_stateAccess.memory = currentWar.m_core;
}

$initMemRegions.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$initMemRegions';
function $onlySpaces(s){
  var c, i;
  for (i = 0; i < s.length; ++i) {
    c = (checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i));
    if (c != 32)
      return false;
  }
  return true;
}

$onlySpaces.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$onlySpaces';
function $regChanged_callback(this$static, name_0, value_0){
  var currentWar, entry, entry$iterator, entry0, outerIter, state, sv, v;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return 1;
  state = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel).m_state;
  value_0 = $trim(value_0);
  value_0.length > 2 && (checkCriticalStringElementIndex(0, value_0.length) , value_0.charCodeAt(0) == 48) && (checkCriticalStringElementIndex(1, value_0.length) , value_0.charCodeAt(1) == 120) && (value_0 = value_0.substr(2));
  try {
    this$static.m_base == 10?(v = __parseAndValidateInt(value_0, 10)):(v = __parseAndValidateInt(value_0, 16));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 15)) {
      $errorPreventsStep(this$static.m_mainwnd, true);
      return this$static.m_base == 10?-2000000:-1000000;
    }
     else 
      throw toJs($e0);
  }
  if (v < 0 || v > $intern_0) {
    $errorPreventsStep(this$static.m_mainwnd, true);
    return -3000000;
  }
  $errorPreventsStep(this$static.m_mainwnd, false);
  sv = v << 16 >> 16;
  switch (name_0) {
    case 'AX':
      state.m_ax = sv;
      break;
    case 'BX':
      state.m_bx = sv;
      break;
    case 'CX':
      state.m_cx = sv;
      break;
    case 'DX':
      state.m_dx = sv;
      break;
    case 'SI':
      state.m_si = sv;
      break;
    case 'DI':
      state.m_di = sv;
      break;
    case 'BP':
      state.m_bp = sv;
      break;
    case 'SP':
      state.m_sp = sv;
      $moveToLine(this$static.stackView, linearAddress_0(state.m_ss, sv));
      break;
    case 'IP':
      state.m_ip = sv;
      $updateDebugLine(this$static.m_mainwnd.m_codeEditor);
      $onEndRound_0(this$static.m_mainwnd.battleFrame);
      break;
    case 'CS':
      state.m_cs = sv;
      $updateDebugLine(this$static.m_mainwnd.m_codeEditor);
      $onEndRound_0(this$static.m_mainwnd.battleFrame);
      break;
    case 'DS':
      state.m_ds = sv;
      break;
    case 'SS':
      state.m_ss = sv;
      $moveToLine(this$static.stackView, linearAddress_0(sv, state.m_sp));
      break;
    case 'ES':
      state.m_es = sv;
      break;
    case 'Energy':
      state.m_energy = sv;
      break;
    case 'Flags':
      state.m_flags = sv;
      $updateFlagBoxes(this$static, state);
  }
  this$static.m_stateAccess.state = state;
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 49));
    $evalAndDisplay(entry0);
  }
  return v;
}

$regChanged_callback.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$regChanged_callback';
function $setSelectedPlayer(this$static, playerLabel, isDebugMode){
  this$static.m_currentWarriorLabel = playerLabel;
  this$static.m_currentWarriorIndex = -1;
  if (isDebugMode) {
    $initMemRegions(this$static, false);
    $updateFields(this$static);
  }
}

$setSelectedPlayer.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$setSelectedPlayer';
function $setVisible(this$static, v){
  v?(this$static.cpuPanel.style.display = ''):(this$static.cpuPanel.style.display = 'none');
}

$setVisible.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$setVisible';
function $updateFields(this$static){
  var currentWar, entry, entry$iterator, entry0, outerIter, state, w;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return;
  if (this$static.m_currentWarriorIndex == -1) {
    w = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel);
    if (!w)
      return;
    this$static.m_currentWarriorIndex = w.m_myIndex;
  }
  state = $getWarrior(currentWar, this$static.m_currentWarriorIndex).m_state;
  $setValue_0(this$static.regAX, state.m_ax);
  $setValue_0(this$static.regBX, state.m_bx);
  $setValue_0(this$static.regCX, state.m_cx);
  $setValue_0(this$static.regDX, state.m_dx);
  $setValue_0(this$static.regSI, state.m_si);
  $setValue_0(this$static.regDI, state.m_di);
  $setValue_0(this$static.regBP, state.m_bp);
  $setValue_0(this$static.regSP, state.m_sp);
  $setValue_0(this$static.regIP, state.m_ip);
  $setValue_0(this$static.regCS, state.m_cs);
  $setValue_0(this$static.regDS, state.m_ds);
  $setValue_0(this$static.regSS, state.m_ss);
  $setValue_0(this$static.regES, state.m_es);
  $setValue_0(this$static.regE, state.m_energy);
  $setValue_0(this$static.regF, state.m_flags);
  $updateFlagBoxes(this$static, state);
  $moveToLine(this$static.stackView, linearAddress_0(state.m_ss, state.m_sp));
  this$static.m_stateAccess.state = state;
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 49));
    $evalAndDisplay(entry0);
  }
}

$updateFields.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$updateFields';
function $updateFlagBoxes(this$static, state){
  $setValue(this$static.flagOF, (state.m_flags & $intern_17) == $intern_17);
  $setValue(this$static.flagDF, (state.m_flags & $intern_16) == $intern_16);
  $setValue(this$static.flagIF, (state.m_flags & 512) == 512);
  $setValue(this$static.flagTF, (state.m_flags & 256) == 256);
  $setValue(this$static.flagSF, (state.m_flags & 128) == 128);
  $setValue(this$static.flagZF, (state.m_flags & 64) == 64);
  $setValue(this$static.flagAF, (state.m_flags & 16) == 16);
  $setValue(this$static.flagPF, (state.m_flags & 4) == 4);
  $setValue(this$static.flagCF, (state.m_flags & 1) == 1);
}

$updateFlagBoxes.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$updateFlagBoxes';
function CpuFrame(c, mainwnd){
  this.m_watches = new HashMap;
  this.m_stateAccess = new CpuFrame$StateAccess;
  this.m_parser = new ExpressionParser;
  $exportMethods_2(this);
  this.m_mainwnd = mainwnd;
  this.competition = c;
  this.cpuPanel = castToNative(($clinit_DomGlobal() , document_0).getElementById('cpuPanel'), $wnd.HTMLElement);
  this.regAX = new RegisterField('AX', this);
  this.regBX = new RegisterField('BX', this);
  this.regCX = new RegisterField('CX', this);
  this.regDX = new RegisterField('DX', this);
  this.regSI = new RegisterField('SI', this);
  this.regDI = new RegisterField('DI', this);
  this.regBP = new RegisterField('BP', this);
  this.regSP = new RegisterField('SP', this);
  this.regIP = new RegisterField('IP', this);
  this.regCS = new RegisterField('CS', this);
  this.regDS = new RegisterField('DS', this);
  this.regSS = new RegisterField('SS', this);
  this.regES = new RegisterField('ES', this);
  this.regE = new RegisterField('Energy', this);
  this.regF = new RegisterField('Flags', this);
  this.flagOF = new FlagFields('OF', this);
  this.flagDF = new FlagFields('DF', this);
  this.flagIF = new FlagFields('IF', this);
  this.flagTF = new FlagFields('TF', this);
  this.flagSF = new FlagFields('SF', this);
  this.flagZF = new FlagFields('ZF', this);
  this.flagAF = new FlagFields('AF', this);
  this.flagPF = new FlagFields('PF', this);
  this.flagCF = new FlagFields('CF', this);
  this.stackView = new MemRegionView('stackList', 'mk');
  this.sharedMemView = new MemRegionView('sharedMemList', 'mh');
  this.m_parser.m_stateAccess = this.m_stateAccess;
}

CpuFrame.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.CpuFrame';
defineClass(169, 1, $intern_22, CpuFrame);
_.j_addWatch_0 = function j_addWatch(watchId){
  var entry;
  entry = new CpuFrame$WatchEntry;
  $put(this.m_watches, valueOf_0(watchId), entry);
  entry.resultElem = castToNative(($clinit_DomGlobal() , document_0).getElementById('watch' + ('' + watchId) + '_val'), $wnd.HTMLElement);
  debug('Watchs: ' + ('' + $size(this.m_watches)));
}
;
_.j_addWatch_0.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.j_addWatch';
_.j_delWatch_0 = function j_delWatch(watchId){
  $remove(this.m_watches, valueOf_0(watchId));
}
;
_.j_delWatch_0.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.j_delWatch';
_.j_setRegistersBase_0 = function j_setRegistersBase(base){
  var entry, entry$iterator, entry0, outerIter;
  this.m_base = base;
  $setBase(this.regAX, base);
  $setBase(this.regBX, base);
  $setBase(this.regCX, base);
  $setBase(this.regDX, base);
  $setBase(this.regSI, base);
  $setBase(this.regDI, base);
  $setBase(this.regBP, base);
  $setBase(this.regSP, base);
  $setBase(this.regIP, base);
  $setBase(this.regCS, base);
  $setBase(this.regDS, base);
  $setBase(this.regSS, base);
  $setBase(this.regES, base);
  $setBase(this.regE, base);
  $setBase(this.regF, base);
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 49));
    entry0.base = base;
    $evalAndDisplay(entry0);
  }
}
;
_.j_setRegistersBase_0.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.j_setRegistersBase';
_.j_watchTextChanged_0 = function j_watchTextChanged(s, watchId){
  var e, entry;
  entry = castTo($get_3(this.m_watches, valueOf_0(watchId)), 49);
  if ($onlySpaces(s)) {
    entry.isValid = false;
    entry.resultElem.innerText = '';
    entry.resultElem.title = '';
    return false;
  }
  entry.isValid = false;
  try {
    entry.root_0 = $eval(this.m_parser, s);
    entry.isValid = true;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      debug('Watch parse error: ' + e.getMessage());
      $setResult(entry, 'Error: ' + e.getMessage());
    }
     else 
      throw toJs($e0);
  }
  $evalAndDisplay(entry);
  return true;
}
;
_.j_watchTextChanged_0.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.j_watchTextChanged';
_.onCompetitionEnd = function onCompetitionEnd_1(){
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_1(){
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onCompetitionStart';
_.onEndRound = function onEndRound_1(){
  $updateFields(this);
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onEndRound';
_.onMemoryWrite = function onMemoryWrite_0(address, value_0){
  var entry, entry$iterator, entry0, outerIter;
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 49));
    $evalAndDisplay(entry0);
  }
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onMemoryWrite';
_.onNoneAlive = function onNoneAlive_1(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onNoneAlive';
_.onPaused = function onPaused_1(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onPaused';
_.onRound = function onRound_1(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onRound';
_.onWarEnd = function onWarEnd_1(reason, winners, inDebug){
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_1(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarPreStartClear';
_.onWarStart = function onWarStart_1(){
  this.m_currentWarriorIndex = -1;
  $initMemRegions(this, true);
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarStart';
_.onWarriorBirth = function onWarriorBirth_1(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_1(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarriorDeath';
_.onWriteState = function onWriteState_0(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWriteState';
_.m_base = 16;
_.m_currentWarriorIndex = -1;
_.m_currentWarriorLabel = null;
var Lil_co_codeguru_corewars8086_gui_CpuFrame_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CpuFrame', 169);
function $getIdentifierValue(name_0){
  throw toJs(new Exception_1('unknown identifier ' + name_0));
}

$getIdentifierValue.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.$getIdentifierValue';
function $getMemory(this$static, addr, seg, size_0){
  var linaddr, sseg;
  sseg = seg << 16 >> 16;
  seg == -1 && (sseg = this$static.state.m_ds);
  linaddr = linearAddress_0(sseg, addr << 16 >> 16);
  return size_0 == 1?$readByte(this$static.memory, linaddr) & 255:$readWord(this$static.memory, new RealModeAddress(linaddr)) & $intern_0;
}

$getMemory.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.$getMemory';
function $getRegisterValue(this$static, name_0){
  if (!this$static.state) {
    throw toJs(new Exception_1('invalid state'));
  }
  switch (name_0) {
    case 'AX':
      return this$static.state.m_ax;
    case 'AL':
      return this$static.state.m_ax << 24 >> 24;
    case 'AH':
      return this$static.state.m_ax >> 8 << 24 >> 24;
    case 'BX':
      return this$static.state.m_bx;
    case 'BL':
      return this$static.state.m_bx << 24 >> 24;
    case 'BH':
      return this$static.state.m_bx >> 8 << 24 >> 24;
    case 'CX':
      return this$static.state.m_cx;
    case 'CL':
      return this$static.state.m_cx << 24 >> 24;
    case 'CH':
      return this$static.state.m_cx >> 8 << 24 >> 24;
    case 'DX':
      return this$static.state.m_dx;
    case 'DL':
      return this$static.state.m_dx << 24 >> 24;
    case 'DH':
      return this$static.state.m_dx >> 8 << 24 >> 24;
    case 'SI':
      return this$static.state.m_si;
    case 'DI':
      return this$static.state.m_di;
    case 'BP':
      return this$static.state.m_bp;
    case 'SP':
      return this$static.state.m_sp;
    case 'IP':
      return this$static.state.m_ip;
    case 'CS':
      return this$static.state.m_cs;
    case 'DS':
      return this$static.state.m_ds;
    case 'SS':
      return this$static.state.m_ss;
    case 'ES':
      return this$static.state.m_es;
    case 'ENERGY':
      return this$static.state.m_energy;
    case 'FLAGS':
      return this$static.state.m_flags;
  }
  throw toJs(new Exception_1('unknown register name ' + name_0));
}

$getRegisterValue.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.$getRegisterValue';
function CpuFrame$StateAccess(){
}

CpuFrame$StateAccess.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.CpuFrame$StateAccess';
defineClass(170, 1, {}, CpuFrame$StateAccess);
var Lil_co_codeguru_corewars8086_gui_CpuFrame$StateAccess_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CpuFrame/StateAccess', 170);
function $$init_11(this$static){
}

$$init_11.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.$$init';
function $evalAndDisplay(this$static){
  var e, res, sv;
  if (!this$static.isValid)
    return;
  try {
    res = this$static.root_0.eval_0();
    this$static.base == 16?(sv = hex4(res)):(sv = '' + res);
    setInnerText(this$static.resultElem, sv);
    this$static.resultElem.title = sv;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      log_0('watch error: ' + e.getMessage());
      $setResult(this$static, 'Error: ' + e.getMessage());
    }
     else 
      throw toJs($e0);
  }
}

$evalAndDisplay.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.$evalAndDisplay';
function $setResult(this$static, v){
  setInnerText(this$static.resultElem, v);
  this$static.resultElem.title = v;
}

$setResult.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.$setResult';
function CpuFrame$WatchEntry(){
}

CpuFrame$WatchEntry.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.CpuFrame$WatchEntry';
defineClass(49, 1, {49:1}, CpuFrame$WatchEntry);
_.base = 16;
_.isValid = false;
var Lil_co_codeguru_corewars8086_gui_CpuFrame$WatchEntry_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CpuFrame/WatchEntry', 49);
function $$init_12(this$static){
  this$static.stack_ = new Stack;
}

$$init_12.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$$init';
function $eatSpaces(this$static){
  while ($getCharacter(this$static) == 32)
    ++this$static.index_;
}

$eatSpaces.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$eatSpaces';
function $eval(this$static, expr){
  var e, result;
  this$static.index_ = 0;
  this$static.expr_ = expr;
  try {
    result = $parseExpr(this$static);
    this$static.index_ >= this$static.expr_.length || $unexpected(this$static);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      while (this$static.stack_.arrayList.array.length != 0)
        $pop_0(this$static.stack_);
      throw toJs(e);
    }
     else 
      throw toJs($e0);
  }
  return result;
}

$eval.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$eval';
function $getBase(this$static){
  var h, x_0;
  if (this$static.index_ + 2 < this$static.expr_.length) {
    x_0 = $charAt(String.fromCharCode($charAt(this$static.expr_, this$static.index_ + 1)).toLowerCase(), 0);
    h = $charAt(this$static.expr_, this$static.index_ + 2);
    if (x_0 == 120 && toInteger(h) <= 15)
      return 16;
    if (x_0 == 98 && toInteger(h) <= 1)
      return 2;
    if (x_0 == 111 && toInteger(h) <= 8)
      return 8;
  }
  return 10;
}

$getBase.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$getBase';
function $getCharacter(this$static){
  if (this$static.index_ < this$static.expr_.length)
    return $charAt(this$static.expr_, this$static.index_);
  return 0;
}

$getCharacter.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$getCharacter';
function $parseBin(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 1; this$static.index_++)
    value_0 = value_0 * 2 + h;
  return new ExpressionParser$NumNode(value_0);
}

$parseBin.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseBin';
function $parseDecimal(this$static){
  var d, value_0;
  value_0 = 0;
  for (; (d = toInteger($getCharacter(this$static))) <= 9; this$static.index_++)
    value_0 = value_0 * 10 + d;
  return new ExpressionParser$NumNode(value_0);
}

$parseDecimal.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseDecimal';
function $parseExpr(this$static){
  var op, value_0;
  $push_1(this$static.stack_, new ExpressionParser$OperatorValue(new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_NULL), 0, 76), new ExpressionParser$NumNode(0)));
  value_0 = $parseValue(this$static);
  while (this$static.stack_.arrayList.array.length != 0) {
    op = $parseOp(this$static);
    while (op.precedence < castTo($peek(this$static.stack_), 40).op.precedence || op.precedence == castTo($peek(this$static.stack_), 40).op.precedence && op.associativity == 76) {
      if (castTo($peek(this$static.stack_), 40).op.op == OPERATOR_NULL) {
        $pop_0(this$static.stack_);
        return value_0;
      }
      value_0 = new ExpressionParser$BinaryOpNode(castTo($peek(this$static.stack_), 40).value_0, value_0, castTo($peek(this$static.stack_), 40).op.op);
      $pop_0(this$static.stack_);
    }
    $push_1(this$static.stack_, new ExpressionParser$OperatorValue(op, value_0));
    value_0 = $parseValue(this$static);
  }
  return null;
}

$parseExpr.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseExpr';
function $parseHex(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 15; this$static.index_++)
    value_0 = value_0 * 16 + h;
  return new ExpressionParser$NumNode(value_0);
}

$parseHex.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseHex';
function $parseIdentifier(this$static){
  var c, ident, idup, sb;
  sb = new StringBuilder;
  while (true) {
    c = $getCharacter(this$static);
    if (c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 95 || c >= 48 && c <= 57)
      sb.string += String.fromCharCode(c);
    else 
      break;
    ++this$static.index_;
  }
  ident = sb.string;
  idup = ident.toUpperCase();
  if ($contains_1(m_registers, idup)) {
    return new ExpressionParser$RegisterNode(idup, this$static.m_stateAccess);
  }
  return new ExpressionParser$IdentifierNode(idup);
}

$parseIdentifier.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseIdentifier';
function $parseOct(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 7; this$static.index_++)
    value_0 = value_0 * 8 + h;
  return new ExpressionParser$NumNode(value_0);
}

$parseOct.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseOct';
function $parseOp(this$static){
  $eatSpaces(this$static);
  switch ($getCharacter(this$static)) {
    case 124:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_OR), 4, 76);
    case 94:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_XOR), 5, 76);
    case 38:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_AND), 6, 76);
    case 60:
      $regionMatches(this$static.expr_, this$static.index_, '<<', '<<'.length) || $unexpected(this$static);
      this$static.index_ += '<<'.length;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_SHL), 9, 76);
    case 62:
      $regionMatches(this$static.expr_, this$static.index_, '>>', '>>'.length) || $unexpected(this$static);
      this$static.index_ += '>>'.length;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_BITWISE_SHR), 9, 76);
    case 43:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_ADDITION), 10, 76);
    case 45:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_SUBTRACTION), 10, 76);
    case 47:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_DIVISION), 20, 76);
    case 37:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_MODULO), 20, 76);
    case 42:
      ++this$static.index_;
      if ($getCharacter(this$static) != 42)
        return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_MULTIPLICATION), 20, 76);
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_POWER), 30, 82);
    case 69:
    case 101:
      ++this$static.index_;
      return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_EXPONENT), 40, 82);
    default:return new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_NULL), 0, 76);
  }
}

$parseOp.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseOp';
function $parseValue(this$static){
  var base, c, sz, vaddr, val, vseg;
  $eatSpaces(this$static);
  c = $getCharacter(this$static);
  switch (c) {
    case 48:
      base = $getBase(this$static);
      base == 16?(val = $parseHex(this$static)):base == 2?(val = $parseBin(this$static)):base == 8?(val = $parseOct(this$static)):(val = $parseDecimal(this$static));
      break;
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      val = $parseDecimal(this$static);
      break;
    case 40:
      ++this$static.index_;
      val = $parseExpr(this$static);
      $eatSpaces(this$static);
      if ($getCharacter(this$static) != 41) {
        this$static.index_ >= this$static.expr_.length || $unexpected(this$static);
        throw toJs(new Exception_1("Syntax error: `)' expected at end of expression"));
      }

      ++this$static.index_;
      break;
    case 91:
      ++this$static.index_;
      vseg = null;
      vaddr = $parseExpr(this$static);
      $eatSpaces(this$static);
      if ($getCharacter(this$static) == 58) {
        ++this$static.index_;
        vseg = vaddr;
        vaddr = $parseExpr(this$static);
        $eatSpaces(this$static);
      }

      if ($getCharacter(this$static) != 93) {
        this$static.index_ >= this$static.expr_.length || $unexpected(this$static);
        throw toJs(new Exception_1("Syntax error: `]' expected at end of expression"));
      }

      ++this$static.index_;
      c = $getCharacter(this$static);
      sz = 1;
      if (c == 119 || c == 87) {
        sz = 2;
        ++this$static.index_;
      }

      (c == 98 || c == 66) && ++this$static.index_;
      val = new ExpressionParser$MemAccessNode(vseg, vaddr, sz, this$static.m_stateAccess);
      break;
    case 126:
      ++this$static.index_;
      val = new ExpressionParser$UnaryNotNode($parseValue(this$static));
      break;
    case 43:
      ++this$static.index_;
      val = $parseValue(this$static);
      break;
    case 45:
      ++this$static.index_;
      val = new ExpressionParser$UnaryNegNode($parseValue(this$static));
      break;
    default:if (c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 95) {
        val = $parseIdentifier(this$static);
        break;
      }

      this$static.index_ >= this$static.expr_.length || $unexpected(this$static);
      throw toJs(new Exception_1('Syntax error: value expected at end of expression'));
  }
  return val;
}

$parseValue.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseValue';
function $unexpected(this$static){
  var msg;
  msg = new StringBuilder;
  msg.string += 'Syntax error: unexpected token "';
  $append_4(msg, $substring_1(this$static.expr_, this$static.index_, this$static.expr_.length));
  msg.string += '" at index ';
  $append_1(msg, this$static.index_);
  throw toJs(new Exception_1(msg.string));
}

$unexpected.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$unexpected';
function ExpressionParser(){
  this.stack_ = new Stack;
  !m_registers && (m_registers = new HashSet_0(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['AX', 'AL', 'AH', 'BX', 'BL', 'BH', 'CX', 'CL', 'CH', 'DX', 'DH', 'DL', 'SI', 'DI', 'BP', 'SP', 'IP', 'CS', 'DS', 'SS', 'ES', 'ENERGY', 'FLAGS']))));
}

ExpressionParser.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.ExpressionParser';
function pow_0(x_0, n){
  var res;
  res = 1;
  while (n > 0) {
    if (n % 2 != 0) {
      res *= x_0;
      n -= 1;
    }
    n = n / 2 | 0;
    n > 0 && (x_0 *= x_0);
  }
  return res;
}

pow_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.pow';
function toInteger(c){
  if (c >= 48 && c <= 57)
    return c - 48;
  if (c >= 97 && c <= 102)
    return c - 97 + 10;
  if (c >= 65 && c <= 70)
    return c - 65 + 10;
  return 16;
}

toInteger.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.toInteger';
defineClass(171, 1, {}, ExpressionParser);
_.index_ = 0;
_.m_stateAccess = null;
var m_registers = null;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser', 171);
function $checkZero(v){
  if (v == 0) {
    throw toJs(new Exception_1('Division by zero'));
  }
  return v;
}

$checkZero.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$BinaryOpNode.$checkZero';
function ExpressionParser$BinaryOpNode(l, r, _op){
  this.left = l;
  this.right = r;
  this.op = _op;
}

ExpressionParser$BinaryOpNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$BinaryOpNode.ExpressionParser$BinaryOpNode';
defineClass(172, 1, {}, ExpressionParser$BinaryOpNode);
_.eval_0 = function eval_0(){
  var ret, v1, v2;
  v1 = this.left.eval_0() & $intern_0;
  v2 = this.right.eval_0() & $intern_0;
  switch (this.op.ordinal) {
    case 1:
      ret = v1 | v2;
      break;
    case 2:
      ret = v1 ^ v2;
      break;
    case 3:
      ret = v1 & v2;
      break;
    case 4:
      ret = v1 << v2;
      break;
    case 5:
      ret = v1 >> v2;
      break;
    case 6:
      ret = v1 + v2;
      break;
    case 7:
      ret = v1 - v2;
      break;
    case 8:
      ret = v1 * v2;
      break;
    case 9:
      ret = v1 / $checkZero(v2) | 0;
      break;
    case 10:
      ret = v1 % $checkZero(v2);
      break;
    case 11:
      ret = pow_0(v1, v2);
      break;
    case 12:
      ret = v1 * pow_0(10, v2);
      break;
    default:throw toJs(new Exception_1('unexpected operator'));
  }
  return ret & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$BinaryOpNode.eval';
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$BinaryOpNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/BinaryOpNode', 172);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

$compareTo.displayName = 'java.lang.Enum.$compareTo';
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

Enum.displayName = 'java.lang.Enum.Enum';
function createValueOfMap(enumConstants){
  var result, value_0, value$index, value$max;
  result = {};
  for (value$index = 0 , value$max = enumConstants.length; value$index < value$max; ++value$index) {
    value_0 = enumConstants[value$index];
    result[':' + (value_0.name_0 != null?value_0.name_0:'' + value_0.ordinal)] = value_0;
  }
  return result;
}

createValueOfMap.displayName = 'java.lang.Enum.createValueOfMap';
function get0(map_0, name_0){
  return map_0[name_0];
}

get0.displayName = 'java.lang.Enum.get0';
function put0(map_0, name_0, value_0){
  map_0[name_0] = value_0;
}

put0.displayName = 'java.lang.Enum.put0';
function valueOf(map_0, name_0){
  var result;
  checkCriticalNotNull(name_0);
  result = map_0[':' + name_0];
  checkCriticalArgument_1(!!result, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [name_0]));
  return result;
}

valueOf.displayName = 'java.lang.Enum.valueOf';
defineClass(51, 1, {3:1, 35:1, 51:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 51));
}
;
_.compareTo.displayName = 'java.lang.Enum.compareTo';
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.equals_0.displayName = 'java.lang.Enum.equals';
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.hashCode_0.displayName = 'java.lang.Enum.hashCode';
_.toString_0 = function toString_6(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.toString_0.displayName = 'java.lang.Enum.toString';
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 51);
function $clinit_ExpressionParser$EOps(){
  $clinit_ExpressionParser$EOps = emptyMethod;
  OPERATOR_NULL = new ExpressionParser$EOps('OPERATOR_NULL', 0);
  OPERATOR_BITWISE_OR = new ExpressionParser$EOps('OPERATOR_BITWISE_OR', 1);
  OPERATOR_BITWISE_XOR = new ExpressionParser$EOps('OPERATOR_BITWISE_XOR', 2);
  OPERATOR_BITWISE_AND = new ExpressionParser$EOps('OPERATOR_BITWISE_AND', 3);
  OPERATOR_BITWISE_SHL = new ExpressionParser$EOps('OPERATOR_BITWISE_SHL', 4);
  OPERATOR_BITWISE_SHR = new ExpressionParser$EOps('OPERATOR_BITWISE_SHR', 5);
  OPERATOR_ADDITION = new ExpressionParser$EOps('OPERATOR_ADDITION', 6);
  OPERATOR_SUBTRACTION = new ExpressionParser$EOps('OPERATOR_SUBTRACTION', 7);
  OPERATOR_MULTIPLICATION = new ExpressionParser$EOps('OPERATOR_MULTIPLICATION', 8);
  OPERATOR_DIVISION = new ExpressionParser$EOps('OPERATOR_DIVISION', 9);
  OPERATOR_MODULO = new ExpressionParser$EOps('OPERATOR_MODULO', 10);
  OPERATOR_POWER = new ExpressionParser$EOps('OPERATOR_POWER', 11);
  OPERATOR_EXPONENT = new ExpressionParser$EOps('OPERATOR_EXPONENT', 12);
}

$clinit_ExpressionParser$EOps.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$EOps.$clinit';
function ExpressionParser$EOps(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

ExpressionParser$EOps.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$EOps.ExpressionParser$EOps';
function values(){
  $clinit_ExpressionParser$EOps();
  return stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_gui_ExpressionParser$EOps_2_classLit, 1), $intern_2, 19, 0, [OPERATOR_NULL, OPERATOR_BITWISE_OR, OPERATOR_BITWISE_XOR, OPERATOR_BITWISE_AND, OPERATOR_BITWISE_SHL, OPERATOR_BITWISE_SHR, OPERATOR_ADDITION, OPERATOR_SUBTRACTION, OPERATOR_MULTIPLICATION, OPERATOR_DIVISION, OPERATOR_MODULO, OPERATOR_POWER, OPERATOR_EXPONENT]);
}

values.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$EOps.values';
defineClass(19, 51, {19:1, 3:1, 35:1, 51:1}, ExpressionParser$EOps);
var OPERATOR_ADDITION, OPERATOR_BITWISE_AND, OPERATOR_BITWISE_OR, OPERATOR_BITWISE_SHL, OPERATOR_BITWISE_SHR, OPERATOR_BITWISE_XOR, OPERATOR_DIVISION, OPERATOR_EXPONENT, OPERATOR_MODULO, OPERATOR_MULTIPLICATION, OPERATOR_NULL, OPERATOR_POWER, OPERATOR_SUBTRACTION;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$EOps_2_classLit = createForEnum('il.co.codeguru.corewars8086.gui', 'ExpressionParser/EOps', 19, values);
function ExpressionParser$IdentifierNode(_name){
  this.name_0 = _name;
}

ExpressionParser$IdentifierNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$IdentifierNode.ExpressionParser$IdentifierNode';
defineClass(176, 1, {}, ExpressionParser$IdentifierNode);
_.eval_0 = function eval_1(){
  return $getIdentifierValue(this.name_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$IdentifierNode.eval';
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$IdentifierNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/IdentifierNode', 176);
function ExpressionParser$MemAccessNode(_vseg, _vaddr, _sz, _state){
  this.vseg = _vseg;
  this.vaddr = _vaddr;
  this.sz = _sz;
  this.state = _state;
}

ExpressionParser$MemAccessNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$MemAccessNode.ExpressionParser$MemAccessNode';
defineClass(177, 1, {}, ExpressionParser$MemAccessNode);
_.eval_0 = function eval_2(){
  var addr, seg;
  addr = this.vaddr.eval_0() & $intern_0;
  seg = -1;
  !!this.vseg && (seg = this.vseg.eval_0() & $intern_0);
  return $getMemory(this.state, addr, seg, this.sz);
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$MemAccessNode.eval';
_.sz = 0;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$MemAccessNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/MemAccessNode', 177);
function ExpressionParser$NumNode(_v){
  this.v = _v;
}

ExpressionParser$NumNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$NumNode.ExpressionParser$NumNode';
defineClass(62, 1, {}, ExpressionParser$NumNode);
_.eval_0 = function eval_3(){
  return this.v;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$NumNode.eval';
_.v = 0;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$NumNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/NumNode', 62);
function ExpressionParser$Operator(opr, prec, assoc){
  this.op = opr;
  this.precedence = prec;
  this.associativity = assoc;
}

ExpressionParser$Operator.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$Operator.ExpressionParser$Operator';
defineClass(20, 1, {}, ExpressionParser$Operator);
_.associativity = 0;
_.precedence = 0;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$Operator_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/Operator', 20);
function ExpressionParser$OperatorValue(opr, val){
  this.op = opr;
  this.value_0 = val;
}

ExpressionParser$OperatorValue.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$OperatorValue.ExpressionParser$OperatorValue';
defineClass(40, 1, {40:1}, ExpressionParser$OperatorValue);
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$OperatorValue_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/OperatorValue', 40);
function ExpressionParser$RegisterNode(_name, _state){
  this.name_0 = _name;
  this.state = _state;
}

ExpressionParser$RegisterNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$RegisterNode.ExpressionParser$RegisterNode';
defineClass(175, 1, {}, ExpressionParser$RegisterNode);
_.eval_0 = function eval_4(){
  return $getRegisterValue(this.state, this.name_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$RegisterNode.eval';
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$RegisterNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/RegisterNode', 175);
function ExpressionParser$UnaryNegNode(c){
  this.child = c;
}

ExpressionParser$UnaryNegNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNegNode.ExpressionParser$UnaryNegNode';
defineClass(173, 1, {}, ExpressionParser$UnaryNegNode);
_.eval_0 = function eval_5(){
  return -(this.child.eval_0() & $intern_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNegNode.eval';
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$UnaryNegNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/UnaryNegNode', 173);
function ExpressionParser$UnaryNotNode(c){
  this.child = c;
}

ExpressionParser$UnaryNotNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNotNode.ExpressionParser$UnaryNotNode';
defineClass(174, 1, {}, ExpressionParser$UnaryNotNode);
_.eval_0 = function eval_6(){
  return ~(this.child.eval_0() & $intern_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNotNode.eval';
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$UnaryNotNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/UnaryNotNode', 174);
function JPanel(){
  JComponent.call(this);
}

JPanel.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JPanel.JPanel';
function JPanel_0(){
  JComponent.call(this);
}

JPanel_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JPanel.JPanel';
defineClass(13, 24, {}, JPanel, JPanel_0);
var Lil_co_codeguru_corewars8086_gui_widgets_JPanel_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JPanel', 13);
function $lambda$0_0(this$static, name_1){
  $flagChanged_callback(this$static.m_frame, name_1, this$static.checkBox.checked);
}

$lambda$0_0.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields.$lambda$0';
function $setValue(this$static, value_0){
  this$static.checkBox.checked = value_0;
}

$setValue.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields.$setValue';
function FlagFields(name_0, frame_0){
  var ename;
  JPanel.call(this);
  this.m_frame = frame_0;
  ename = name_0 + '_fcheck';
  this.checkBox = castToNative(($clinit_DomGlobal() , document_0).getElementById(ename), $wnd.HTMLInputElement);
  this.checkBox == null && (console.error('Did not find flag ' + name_0) , undefined);
  this.checkBox.addEventListener('change', new FlagFields$lambda$0$Type(this, name_0));
}

FlagFields.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields.FlagFields';
defineClass(37, 13, {}, FlagFields);
var Lil_co_codeguru_corewars8086_gui_FlagFields_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'FlagFields', 37);
function FlagFields$lambda$0$Type($$outer_0, name_1){
  this.$$outer_0 = $$outer_0;
  this.name_1 = name_1;
}

FlagFields$lambda$0$Type.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields$lambda$0$Type.FlagFields$lambda$0$Type';
defineClass(194, 1, {}, FlagFields$lambda$0$Type);
_.handleEvent = function handleEvent_5(arg0){
  $lambda$0_0(this.$$outer_0, this.name_1);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields$lambda$0$Type.handleEvent';
var Lil_co_codeguru_corewars8086_gui_FlagFields$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'FlagFields/lambda$0$Type', 194);
function $addCheck(this$static, startAddrStr, len, name_0){
  var a, a$iterator, r, startAddr;
  try {
    startAddr = __parseAndValidateInt(startAddrStr, 16);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 15)) {
      console.error('Player ' + name_0 + ' fixed start address is not a valid hex number');
      return -2;
    }
     else 
      throw toJs($e0);
  }
  if (startAddr < 0 || startAddr > $intern_0) {
    console.error('Player ' + name_0 + ' fixed start address is out of 16 bit number range');
    return -2;
  }
  if (startAddr > $intern_0 - len + 1) {
    console.error('Player ' + name_0 + ' fixed start address does not leave enough space for code (' + ('' + len) + ' bytes)');
    return -2;
  }
  r = new LoadAddrChecker$AddrRange(name_0, startAddr, startAddr + len - 1);
  for (a$iterator = new ArrayList$1(this$static.fixedRanges); a$iterator.i < a$iterator.this$01.array.length;) {
    a = castTo($next_5(a$iterator), 65);
    if (a.start_0 <= r.end_0 && r.start_0 <= a.end_0) {
      error_0('Player ' + name_0 + ' fixed start address overlaps with that of player ' + a.name_0);
      return -2;
    }
  }
  $add_0(this$static.fixedRanges, r);
  return startAddr;
}

$addCheck.displayName = 'il.co.codeguru.corewars8086.gui.LoadAddrChecker.$addCheck';
function $checkOverlap(this$static, startAddr, len){
  var a, a$iterator, r;
  r = new LoadAddrChecker$AddrRange(null, startAddr, startAddr + len - 1);
  for (a$iterator = new ArrayList$1(this$static.fixedRanges); a$iterator.i < a$iterator.this$01.array.length;) {
    a = castTo($next_5(a$iterator), 65);
    if (a.start_0 <= r.end_0 && r.start_0 <= a.end_0) {
      return false;
    }
  }
  return true;
}

$checkOverlap.displayName = 'il.co.codeguru.corewars8086.gui.LoadAddrChecker.$checkOverlap';
function LoadAddrChecker(capacity){
  this.fixedRanges = new ArrayList_0(capacity);
}

LoadAddrChecker.displayName = 'il.co.codeguru.corewars8086.gui.LoadAddrChecker.LoadAddrChecker';
defineClass(200, 1, {}, LoadAddrChecker);
var Lil_co_codeguru_corewars8086_gui_LoadAddrChecker_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'LoadAddrChecker', 200);
function LoadAddrChecker$AddrRange(_name, _start, _end){
  this.name_0 = _name;
  this.start_0 = _start;
  this.end_0 = _end;
}

LoadAddrChecker$AddrRange.displayName = 'il.co.codeguru.corewars8086.gui.LoadAddrChecker$AddrRange.LoadAddrChecker$AddrRange';
defineClass(65, 1, {65:1}, LoadAddrChecker$AddrRange);
_.end_0 = 0;
_.start_0 = 0;
var Lil_co_codeguru_corewars8086_gui_LoadAddrChecker$AddrRange_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'LoadAddrChecker/AddrRange', 65);
function $$init_13(this$static){
  this$static.m_currentRegion = new RealModeMemoryRegion;
}

$$init_13.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.$$init';
function $initMemRegion(this$static, region, memory, force){
  var addr, df, e, sb;
  if (!force && $equals_1(this$static.m_currentRegion, region))
    return;
  df = ($clinit_DomGlobal() , document_0).createDocumentFragment();
  for (addr = region.m_start; addr <= region.m_end; addr += this$static.m_step) {
    e = document_0.createElement('div');
    e.setAttribute('id', this$static.m_innerPrefix + ('' + addr));
    sb = new StringBuilder;
    $append_4(sb, hex5(addr));
    sb.string += '   ';
    $append_4(sb, hex2((memory.m_data[addr % $intern_23] & 255) << 16 >> 16));
    sb.string += '\u202F';
    $append_4(sb, hex2((memory.m_data[(addr + 1) % $intern_23] & 255) << 16 >> 16));
    e.appendChild(document_0.createTextNode(sb.string));
    df.appendChild(e);
  }
  this$static.m_htmlList.innerHTML = '';
  this$static.m_htmlList.appendChild(df);
  this$static.m_currentRegion.m_start = region.m_start;
  this$static.m_currentRegion.m_end = region.m_end;
  this$static.m_lastMovedToLine = -1;
  this$static.m_lastMovedToElem = null;
}

$initMemRegion.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.$initMemRegion';
function $moveToLine(this$static, addr){
  var elem, lineaddr, offsetInLine;
  if (this$static.m_lastMovedToLine == addr)
    return;
  this$static.m_lastMovedToElem != null && this$static.m_lastMovedToElem.classList.remove('atStackLine');
  this$static.m_lastMovedToElem = null;
  this$static.m_lastMovedToLine = -1;
  if (addr > this$static.m_currentRegion.m_end || addr < this$static.m_currentRegion.m_start)
    return;
  offsetInLine = addr % this$static.m_step;
  if (offsetInLine != 0)
    return;
  lineaddr = (addr / this$static.m_step | 0) * this$static.m_step;
  elem = castToNative(($clinit_DomGlobal() , document_0).getElementById(this$static.m_innerPrefix + ('' + lineaddr)), $wnd.HTMLElement);
  elem.classList.add('atStackLine');
  (elem.offsetTop <= this$static.m_htmlList.scrollTop + 30 || elem.offsetTop >= this$static.m_htmlList.scrollTop + this$static.m_htmlList.offsetHeight - 30) && (this$static.m_htmlList.scrollTop = elem.offsetTop - 50);
  this$static.m_lastMovedToLine = addr;
  this$static.m_lastMovedToElem = elem;
}

$moveToLine.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.$moveToLine';
function MemRegionView(id_0, innerPrefix){
  this.m_currentRegion = new RealModeMemoryRegion;
  this.m_htmlList = castToNative(($clinit_DomGlobal() , document_0).getElementById(id_0), $wnd.HTMLElement);
  this.m_innerPrefix = innerPrefix;
  this.m_step = 2;
}

MemRegionView.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.MemRegionView';
defineClass(99, 1, {57:1}, MemRegionView);
_.onMemoryWrite = function onMemoryWrite_1(address, value_0){
  var addr, elem, lineaddr, newtext, offsetInLine, text_0;
  addr = address.m_linearAddress;
  if (addr < this.m_currentRegion.m_start || addr > this.m_currentRegion.m_end)
    return;
  lineaddr = (addr / this.m_step | 0) * this.m_step;
  offsetInLine = addr % this.m_step;
  elem = castToNative(($clinit_DomGlobal() , document_0).getElementById(this.m_innerPrefix + ('' + lineaddr)), $wnd.HTMLElement);
  text_0 = elem.innerText;
  offsetInLine = 8 + offsetInLine * 3;
  newtext = text_0.substr(0, offsetInLine) + ('' + hex2((value_0 & 255) << 16 >> 16)) + text_0.substr(offsetInLine + 2);
  elem.innerText = newtext;
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.onMemoryWrite';
_.onWriteState = function onWriteState_1(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.onWriteState';
_.m_lastMovedToElem = null;
_.m_lastMovedToLine = -1;
_.m_step = 0;
var Lil_co_codeguru_corewars8086_gui_MemRegionView_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'MemRegionView', 99);
function $$init_14(this$static){
  this$static.m_players = new ArrayList;
}

$$init_14.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$$init';
function $addPlayerPanel(){
  $wnd.addPlayersPanel();
}

$addPlayerPanel.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$addPlayerPanel';
function $changedWType(label_0, v){
  $wnd.changedWType(label_0, v, true);
}

$changedWType.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$changedWType';
function $checkPlayersReady(this$static){
  var c, ci, countEnabled, i, p;
  if (this$static.m_players.array.length == 0) {
    console.error('No players added');
    return false;
  }
  countEnabled = 0;
  for (i = 0; i < this$static.m_players.array.length; ++i) {
    p = castTo($get_4(this$static.m_players, i), 14);
    if (!p.isEnabled)
      continue;
    ++countEnabled;
    if (p.wtype == ($clinit_PlayersPanel$EWarriorType() , TWO_IDENTICAL)) {
      p.code_0[1].bin = p.code_0[0].bin;
      p.code_0[1].lines = p.code_0[0].lines;
      p.code_0[1].lastCompileOk = p.code_0[0].lastCompileOk;
    }
    for (ci = 0; ci < (p.wtype == SINGLE?1:2); ++ci) {
      c = p.code_0[ci];
      if (!c.lastCompileOk) {
        error_0('Errors in code ' + c.name_0 + ' of player ' + p.title_0);
        return false;
      }
      if (c.bin == null || c.bin.length == 0) {
        error_0('No code in ' + c.name_0 + ' of player ' + p.title_0);
        return false;
      }
    }
  }
  if (countEnabled == 0) {
    console.error('No enabled players');
    return false;
  }
  return true;
}

$checkPlayersReady.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$checkPlayersReady';
function $demo_like_original(this$static){
  $wnd.addPlayersPanel();
  $wnd.addPlayersPanel();
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 1), 14).code_0[0];
  this$static.m_inEditor.asmText = ' PUSH DS\n POP ES\n MOV DI, AX\n MOV AX, 0xCCCC\nagain:\n STOSW\n ADD WORD DI, 0xB\n JMP again\n';
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 1), 14).code_0[1];
  this$static.m_inEditor.asmText = ' PUSH DS\n POP ES\n MOV DI, AX\n MOV AX, 0xCCCC\nagain:\n STOSW\n ADD WORD DI, 0xB\n JMP again\n';
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor.player.wtype = ($clinit_PlayersPanel$EWarriorType() , TWO_DIFFERENT);
  $updateTitle(this$static, 'shooterA');
  $changedWType(this$static.m_inEditor.player.label_0, 'TWO_DIFFERENT');
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 2), 14).code_0[0];
  this$static.m_inEditor.asmText = ' PUSH DS\n POP ES\n MOV DI, AX\n MOV AX, 0xCCCC\nagain:\n STOSW\n ADD WORD DI, 0xB\n JMP again\n';
  this$static.m_inEditor.player.wtype = SINGLE;
  $updateTitle(this$static, 'shooterB');
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 3), 14).code_0[0];
  this$static.m_inEditor.asmText = ' PUSH DS\n POP ES\n MOV DI, AX\n MOV AX, 0xCCCC\nagain:\n STOSW\n ADD WORD DI, 0xB\n JMP again\n';
  this$static.m_inEditor.player.wtype = SINGLE;
  $updateTitle(this$static, 'shooterC');
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 0), 14).code_0[0];
  $updateTitle(this$static, 'bimp');
  this$static.m_inEditor.asmText = 'PUSH DS\nPOP ES\nXCHG DI, AX\nADD WORD DI, 0xC\nMOV SI, DI\nADD WORD SI, 0xA\nSTD\nDEC DI\nDEC DI\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nINC DI\nINC DI\nJMP DI\n';
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 0), 14).code_0[1];
  this$static.m_inEditor.asmText = 'PUSH DS\nPOP ES\nXCHG DI, AX\nADD WORD DI, 0xC\nMOV SI, DI\nADD WORD SI, 0xA\nSTD\nDEC DI\nDEC DI\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nINC DI\nINC DI\nJMP DI\n';
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor.player.wtype = TWO_DIFFERENT;
  $changedWType(this$static.m_inEditor.player.label_0, 'TWO_DIFFERENT');
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 0), 14).code_0[0];
}

$demo_like_original.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$demo_like_original';
function $ensureSelectedPlayerActive(this$static){
  var i, p;
  if (this$static.m_inEditor.player.isEnabled)
    return;
  for (i = 0; i < this$static.m_players.array.length; ++i) {
    p = castTo($get_4(this$static.m_players, i), 14);
    if (!p.isEnabled)
      continue;
    $setSelectedCode(this$static, p.label_0);
    break;
  }
}

$ensureSelectedPlayerActive.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$ensureSelectedPlayerActive';
function $exportMethods_3(this$static){
  var that = this$static;
  $wnd.j_srcSelectionChanged = $entry(function(s, i){
    that.j_srcSelectionChanged_0(s, i);
  }
  );
  $wnd.j_addPlayer = $entry(function(a, b){
    that.j_addPlayer_0(a, b);
  }
  );
  $wnd.j_removePlayer = $entry(function(s){
    that.j_removePlayer_0(s);
  }
  );
  $wnd.j_changedWType = $entry(function(a, b){
    that.j_changedWType_0(a, b);
  }
  );
  $wnd.j_demoDebugPlayers = $entry(function(){
    that.j_demoDebugPlayers_0();
  }
  );
  $wnd.j_loadAddrChanged = $entry(function(s, b){
    that.j_loadAddrChanged_0(s, b);
  }
  );
  $wnd.j_loadBinary = $entry(function(b){
    that.j_loadBinary_0(b);
  }
  );
  $wnd.j_enablePlayer = $entry(function(a, b){
    that.j_enablePlayer_0(a, b);
  }
  );
  $wnd.j_getCurrentName = $entry(function(){
    return that.j_getCurrentName_0();
  }
  );
  $wnd.j_getCurrentBin = $entry(function(){
    return that.j_getCurrentBin_0();
  }
  );
}

$exportMethods_3.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$exportMethods';
function $findCode(this$static, label_0){
  var ci, pi;
  pi = $findPlayer(this$static, $substring_1(label_0, 0, label_0.length - 1));
  if (!pi)
    return null;
  ci = $charAt(label_0, label_0.length - 1) - 48;
  return pi.code_0[ci];
}

$findCode.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$findCode';
function $findPlayer(this$static, label_0){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_5(p$iterator), 14);
    if ($equals_4(p.label_0, label_0))
      return p;
  }
  return null;
}

$findPlayer.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$findPlayer';
function $getFiles(this$static, prefix){
  var c, count, i, p, p$iterator, p$iterator0;
  count = 0;
  for (p$iterator0 = new ArrayList$1(this$static.m_players); p$iterator0.i < p$iterator0.this$01.array.length;) {
    p = castTo($next_5(p$iterator0), 14);
    $charAt(p.label_0, 0) == prefix && (count += p.wtype == ($clinit_PlayersPanel$EWarriorType() , SINGLE)?1:2);
  }
  i = 0;
  c = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit, $intern_2, 47, count, 0, 1);
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_5(p$iterator), 14);
    if ($charAt(p.label_0, 0) != prefix)
      continue;
    c[i++] = p.code_0[0];
    p.wtype != ($clinit_PlayersPanel$EWarriorType() , SINGLE) && (c[i++] = p.code_0[1]);
  }
  return c;
}

$getFiles.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$getFiles';
function $j_srcSelectionChanged(this$static, playerLabel, num){
  var p;
  p = $findPlayer(this$static, playerLabel);
  this$static.m_inEditor = null;
  this$static.m_inEditor = p.code_0[num - 1];
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, null);
  $setSelectedPlayer(this$static.m_mainWnd.battleFrame.cpuframe, this$static.m_inEditor.label_0, this$static.m_isDebugMode);
  $updateLoadAddr(this$static.m_inEditor.startAddress, this$static.m_inEditor.startAddrRandom);
  $srcSelectionChanged(this$static.m_mainWnd, this$static.m_inEditor.label_0);
}

$j_srcSelectionChanged.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$j_srcSelectionChanged';
function $reWriteButtonsLabels(p){
  var vu, vu1, vu2, vup;
  vu = $replace(p.title_0, 32, 95);
  switch (p.wtype.ordinal) {
    case 0:
      p.code_0[0].name_0 = vu;
      $charAt(p.label_0, 0) != 122 && (castToNative(($clinit_DomGlobal() , document_0).getElementById('sel_code_lbl_w1_' + p.label_0), $wnd.HTMLElement).innerHTML = vu);
      break;
    case 1:
      vup = vu + '1,2';
      p.code_0[0].name_0 = vup;
      castToNative(($clinit_DomGlobal() , document_0).getElementById('sel_code_lbl_w1_' + p.label_0), $wnd.HTMLElement).innerHTML = vup;
      break;
    case 2:
      vu1 = vu + '1';
      vu2 = vu + '2';
      p.code_0[0].name_0 = vu1;
      p.code_0[1].name_0 = vu2;
      castToNative(($clinit_DomGlobal() , document_0).getElementById('sel_code_lbl_w1_' + p.label_0), $wnd.HTMLElement).innerHTML = vu1;
      castToNative(document_0.getElementById('sel_code_lbl_w2_' + p.label_0), $wnd.HTMLElement).innerHTML = vu2;
  }
}

$reWriteButtonsLabels.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$reWriteButtonsLabels';
function $setButtonColor(color_0, label_0){
  var player_letter = label_0[1];
  var codenum = label_0[2];
  var id_0 = 'sel_code_lbl_w' + (parseInt(codenum) + 1) + '_p' + player_letter;
  console.log('~~', label_0, id_0);
  var e = $wnd.document.getElementById(id_0);
  e.style.boxShadow = 'inset ' + color_0 + ' 0px -1px 5px, inset ' + color_0 + ' 0px 1px 5px';
}

$setButtonColor.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$setButtonColor';
function $setDebugMode_1(this$static, v){
  $ensureSelectedPlayerActive(this$static);
  this$static.m_isDebugMode = v;
}

$setDebugMode_1.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$setDebugMode';
function $setPressedCodeBut(label_0, num){
  var idd = 'sel_code_w' + num + '_' + label_0;
  $wnd.document.getElementById(idd).checked = true;
}

$setPressedCodeBut.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$setPressedCodeBut';
function $setSelectedCode(this$static, label_0){
  var idd;
  idd = 'sel_code_w1_' + label_0;
  $wnd.document.getElementById(idd).checked = true;
  $j_srcSelectionChanged(this$static, label_0, 1);
}

$setSelectedCode.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$setSelectedCode';
function $updateAsmResult(this$static, compileOk, binbuffer, lines){
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.bin = binbuffer;
  this$static.m_inEditor.lastCompileOk = compileOk;
  this$static.m_inEditor.lines = lines;
}

$updateAsmResult.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateAsmResult';
function $updateLoadAddr(value_0, isRand){
  $wnd.updateLoadAddr(value_0, isRand);
}

$updateLoadAddr.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateLoadAddr';
function $updateText(this$static, text_0){
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.asmText = text_0;
}

$updateText.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateText';
function $updateTitle(this$static, v){
  var pt;
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.player.title_0 = v;
  pt = this$static.m_inEditor.player.label_0;
  castToNative(($clinit_DomGlobal() , document_0).getElementById('player_name_lbl_' + pt), $wnd.HTMLElement).innerHTML = v;
  $reWriteButtonsLabels(this$static.m_inEditor.player);
}

$updateTitle.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateTitle';
function PlayersPanel(mainWnd){
  this.m_players = new ArrayList;
  this.m_mainWnd = mainWnd;
  $exportMethods_3(this);
}

PlayersPanel.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.PlayersPanel';
defineClass(153, 1, {}, PlayersPanel);
_.j_addPlayer_0 = function j_addPlayer(label_0, title_0){
  var p, tu;
  if (label_0 == null)
    return;
  if ($findPlayer(this, label_0))
    throw toJs(new RuntimeException_1('label already taken ' + label_0));
  p = new PlayersPanel$PlayerInfo(label_0, title_0);
  tu = $replace(title_0, 32, 95);
  p.code_0[0].name_0 = tu + '1';
  p.code_0[1].name_0 = tu + '2';
  $add_0(this.m_players, p);
  log_0('Added ' + label_0 + ' ' + ('' + this.m_players.array.length));
}
;
_.j_addPlayer_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_addPlayer';
_.j_changedWType_0 = function j_changedWType(label_0, v){
  var p;
  p = $findPlayer(this, label_0);
  $setWType(p, ($clinit_PlayersPanel$EWarriorType() , castTo(valueOf(($clinit_PlayersPanel$EWarriorType$Map() , $MAP), v), 48)));
  $reWriteButtonsLabels(p);
}
;
_.j_changedWType_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_changedWType';
_.j_demoDebugPlayers_0 = function j_demoDebugPlayers(){
  $demo_like_original(this);
}
;
_.j_demoDebugPlayers_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_demoDebugPlayers';
_.j_enablePlayer_0 = function j_enablePlayer(label_0, enable){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_5(p$iterator), 14);
    if ($equals_4(label_0, p.label_0)) {
      p.isEnabled = enable;
      return;
    }
  }
  throw toJs(new RuntimeException_1('player not found' + label_0));
}
;
_.j_enablePlayer_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_enablePlayer';
_.j_getCurrentBin_0 = function j_getCurrentBin(){
  return this.m_inEditor.bin;
}
;
_.j_getCurrentBin_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_getCurrentBin';
_.j_getCurrentName_0 = function j_getCurrentName(){
  return this.m_inEditor.name_0;
}
;
_.j_getCurrentName_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_getCurrentName';
_.j_loadAddrChanged_0 = function j_loadAddrChanged(value_0, isRand){
  if (!this.m_inEditor)
    return;
  this.m_inEditor.startAddrRandom = isRand;
  this.m_inEditor.startAddress = value_0;
}
;
_.j_loadAddrChanged_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_loadAddrChanged';
_.j_loadBinary_0 = function j_loadBinary(buf){
  var arr, ba, i, len;
  len = buf.byteLength;
  if (len == 0) {
    console.error('loaded file is empty, ignoring');
    return;
  }
  arr = new Int8Array(buf);
  ba = initUnidimensionalArray(B_classLit, $intern_19, 10, len, 15, 1);
  for (i = 0; i < len; ++i)
    ba[i] = arr[i];
  this.m_inEditor.bin = ba;
  this.m_inEditor.asmText = '';
  this.m_inEditor.lastCompileOk = true;
  this.m_inEditor.breakpoints.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  $loadedNewBinary(this.m_mainWnd.m_codeEditor, this.m_inEditor, this);
}
;
_.j_loadBinary_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_loadBinary';
_.j_removePlayer_0 = function j_removePlayer(label_0){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_5(p$iterator), 14);
    if ($equals_4(label_0, p.label_0)) {
      $remove_2(this.m_players, p);
      log_0('Removed ' + label_0 + ' ' + ('' + this.m_players.array.length));
      this.m_inEditor.player == p && $setSelectedCode(this, castTo($get_4(this.m_players, 0), 14).label_0);
      return;
    }
  }
  throw toJs(new RuntimeException_1('player not found' + label_0));
}
;
_.j_removePlayer_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_removePlayer';
_.j_srcSelectionChanged_0 = function j_srcSelectionChanged(playerLabel, num){
  $j_srcSelectionChanged(this, playerLabel, num);
}
;
_.j_srcSelectionChanged_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_srcSelectionChanged';
_.m_inEditor = null;
_.m_isDebugMode = false;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel', 153);
function PlayersPanel$Breakpoint(_lineNum){
  this.lineNum = _lineNum;
}

PlayersPanel$Breakpoint.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$Breakpoint.PlayersPanel$Breakpoint';
defineClass(32, 1, {32:1}, PlayersPanel$Breakpoint);
_.lineNum = 0;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$Breakpoint_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel/Breakpoint', 32);
function $$init_15(this$static){
}

$$init_15.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$Code.$$init';
function PlayersPanel$Code(p, idx){
  this.player = p;
  this.label_0 = p.label_0 + ('' + idx);
  this.breakpoints = new ArrayList;
}

PlayersPanel$Code.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$Code.PlayersPanel$Code';
defineClass(47, 1, {47:1}, PlayersPanel$Code);
_.asmText = '';
_.bin = null;
_.lastCompileOk = true;
_.startAddrRandom = true;
_.startAddress = 'A000';
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel/Code', 47);
function $clinit_PlayersPanel$EWarriorType(){
  $clinit_PlayersPanel$EWarriorType = emptyMethod;
  SINGLE = new PlayersPanel$EWarriorType('SINGLE', 0);
  TWO_IDENTICAL = new PlayersPanel$EWarriorType('TWO_IDENTICAL', 1);
  TWO_DIFFERENT = new PlayersPanel$EWarriorType('TWO_DIFFERENT', 2);
}

$clinit_PlayersPanel$EWarriorType.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType.$clinit';
function PlayersPanel$EWarriorType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

PlayersPanel$EWarriorType.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType.PlayersPanel$EWarriorType';
function values_0(){
  $clinit_PlayersPanel$EWarriorType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$EWarriorType_2_classLit, 1), $intern_2, 48, 0, [SINGLE, TWO_IDENTICAL, TWO_DIFFERENT]);
}

values_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType.values';
defineClass(48, 51, {48:1, 3:1, 35:1, 51:1}, PlayersPanel$EWarriorType);
var SINGLE, TWO_DIFFERENT, TWO_IDENTICAL;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$EWarriorType_2_classLit = createForEnum('il.co.codeguru.corewars8086.gui', 'PlayersPanel/EWarriorType', 48, values_0);
function $clinit_PlayersPanel$EWarriorType$Map(){
  $clinit_PlayersPanel$EWarriorType$Map = emptyMethod;
  $MAP = createValueOfMap(($clinit_PlayersPanel$EWarriorType() , stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$EWarriorType_2_classLit, 1), $intern_2, 48, 0, [SINGLE, TWO_IDENTICAL, TWO_DIFFERENT])));
}

$clinit_PlayersPanel$EWarriorType$Map.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType$Map.$clinit';
var $MAP;
function $$init_16(this$static){
  this$static.code_0 = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit, $intern_2, 47, 2, 0, 1);
  this$static.wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
}

$$init_16.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$PlayerInfo.$$init';
function $setWType(this$static, v){
  this$static.wtype = v;
}

$setWType.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$PlayerInfo.$setWType';
function PlayersPanel$PlayerInfo(lbl, ttl){
  this.code_0 = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit, $intern_2, 47, 2, 0, 1);
  this.wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
  this.label_0 = lbl;
  this.title_0 = ttl;
  this.code_0[0] = new PlayersPanel$Code(this, 0);
  this.code_0[1] = new PlayersPanel$Code(this, 1);
}

PlayersPanel$PlayerInfo.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$PlayerInfo.PlayersPanel$PlayerInfo';
defineClass(14, 1, {14:1}, PlayersPanel$PlayerInfo);
_.isEnabled = true;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$PlayerInfo_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel/PlayerInfo', 14);
function $$init_17(this$static){
}

$$init_17.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField.$$init';
function $editChanged(this$static){
  var setok;
  setok = $regChanged_callback(this$static.m_frame, this$static.m_name, this$static.textField.value);
  if (setok < -999999) {
    this$static.textField.classList.add('dbg_reg_err');
    switch (setok) {
      case -1000000:
        this$static.textField.title = 'Failed to parse hex number';
        break;
      case -2000000:
        this$static.textField.title = 'Failed to parse decimal number';
        break;
      case -3000000:
        this$static.textField.title = 'Out of range';
    }
    this$static.m_lastInputOk = false;
  }
   else {
    this$static.textField.classList.remove('dbg_reg_err');
    this$static.textField.removeAttribute('title');
    this$static.m_lastInputOk = true;
    this$static.m_lastValue = setok << 16 >> 16;
  }
}

$editChanged.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField.$editChanged';
function $setBase(this$static, base){
  this$static.m_base = base;
  this$static.m_lastInputOk?$setValue_0(this$static, this$static.m_lastValue):$editChanged(this$static);
}

$setBase.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField.$setBase';
function $setValue_0(this$static, value_0){
  this$static.m_lastValue = value_0;
  this$static.m_base == 16?(this$static.textField.value = hex4(value_0 & $intern_0)):(this$static.textField.value = '' + (value_0 & $intern_0));
}

$setValue_0.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField.$setValue';
function RegisterField(name_0, frame_0){
  var ename;
  this.m_frame = frame_0;
  this.m_name = name_0;
  ename = 'reg_' + name_0;
  this.textField = castToNative(($clinit_DomGlobal() , document_0).getElementById(ename), $wnd.HTMLInputElement);
  this.textField == null && (console.error('Not found register ' + name_0) , undefined);
  this.textField.addEventListener('input', new RegisterField$lambda$0$Type(this));
}

RegisterField.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField.RegisterField';
defineClass(21, 1, {}, RegisterField);
_.m_base = 16;
_.m_lastInputOk = true;
_.m_lastValue = 0;
var Lil_co_codeguru_corewars8086_gui_RegisterField_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'RegisterField', 21);
function RegisterField$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

RegisterField$lambda$0$Type.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField$lambda$0$Type.RegisterField$lambda$0$Type';
defineClass(193, 1, {}, RegisterField$lambda$0$Type);
_.handleEvent = function handleEvent_6(arg0){
  $editChanged(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField$lambda$0$Type.handleEvent';
var Lil_co_codeguru_corewars8086_gui_RegisterField$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'RegisterField/lambda$0$Type', 193);
function $addMessage(this$static, round_0, message){
  $append(this$static.messagesArea, '[' + round_0 + '] ' + message + '\n');
  $scrollToBottom(this$static.messagesArea);
}

$addMessage.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.$addMessage';
function $onEndRound_0(this$static){
  var cs, currentWar, i, ip, ipInsideArena, state;
  if (!this$static.mainWnd.m_isBattleShown)
    return;
  $deletePointers(this$static.warCanvas);
  currentWar = this$static.competition.currentWar;
  for (i = 0; i < currentWar.m_numWarriors; i++)
    if (currentWar.m_warriors[i].m_isAlive) {
      state = currentWar.m_warriors[i].m_state;
      ip = state.m_ip;
      cs = state.m_cs;
      ipInsideArena = linearAddress_0(cs, ip) - $intern_20;
      $paintPointer(this$static.warCanvas, ipInsideArena & $intern_0, i << 24 >> 24);
    }
}

$onEndRound_0.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.$onEndRound';
function WarFrame(competition, mainWnd){
  var speedSliderVal;
  JFrame.call(this);
  this.competition = competition;
  this.mainWnd = mainWnd;
  new JPanel;
  new JPanel_0;
  new JPanel_0;
  $clinit_Color();
  new JPanel;
  new Color(169, 154, 133);
  this.warCanvas = new Canvas_0;
  new JPanel_0;
  this.messagesArea = new JTextArea;
  new JScrollPane;
  new JPanel;
  new JLabel_0;
  speedSliderVal = castToNative(($clinit_DomGlobal() , document_0).getElementById('speedSliderVal'), $wnd.HTMLElement);
  this.speedSlider = new JSlider;
  $addActionListener(this.speedSlider, new WarFrame$1(this, speedSliderVal));
  this.nRoundNumber = 0;
  new JLabel_0;
  this.cpuframe = new CpuFrame(competition, this.mainWnd);
  $addCompetitionEventListener(competition, this.cpuframe);
  $add(competition.competitionEventCaster, this);
  this.btnPause = new JButton('btnPause');
  $setEnabled(this.btnPause, false);
  $addActionListener(this.btnPause, new WarFrame$2(this, competition, mainWnd));
  this.btnSingleRound = new JButton('btnSingleRound');
  $setEnabled(this.btnSingleRound, false);
  $addActionListener(this.btnSingleRound, new WarFrame$3(competition, mainWnd));
  new JPanel_0;
  new JList;
  new Dimension(200, 0);
  new WarFrame$NameCellRenderer;
  new Color(169, 154, 133);
  new JPanel;
  new JPanel;
  new JPanel;
}

WarFrame.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.WarFrame';
defineClass(163, 97, $intern_22, WarFrame);
_.onCompetitionEnd = function onCompetitionEnd_2(){
  $setEnabled(this.btnPause, false);
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_2(){
  $setEnabled(this.btnPause, true);
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onCompetitionStart';
_.onEndRound = function onEndRound_2(){
  $onEndRound_0(this);
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onEndRound';
_.onMemoryWrite = function onMemoryWrite_2(address, value_0){
  var ipInsideArena;
  if (!this.mainWnd.m_isBattleShown)
    return;
  ipInsideArena = address.m_linearAddress - $intern_20;
  address.m_linearAddress >= $intern_20 && address.m_linearAddress < 131072 && $paintPixel(this.warCanvas, ipInsideArena & $intern_0, $getCurrentWarrior_0(this.competition) << 24 >> 24, value_0);
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onMemoryWrite';
_.onNoneAlive = function onNoneAlive_2(){
  $addMessage(this, this.nRoundNumber, 'No players left alive');
  $setEnabled(this.btnSingleRound, false);
  $setEnabled(this.btnPause, false);
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onNoneAlive';
_.onPaused = function onPaused_2(){
  $setText(this.btnPause, 'Resume');
  $setEnabled(this.btnSingleRound, true);
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onPaused';
_.onRound = function onRound_2(round_0){
  if (!this.mainWnd.m_isBattleShown)
    return;
  this.nRoundNumber = round_0;
  $setEnabled(this.btnPause, true);
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onRound';
_.onWarEnd = function onWarEnd_2(reason, winners, inDebug){
  if (!inDebug)
    return;
  switch (reason) {
    case 0:
      $addMessage(this, this.nRoundNumber, 'Session over: The winner is ' + winners + '!');
      break;
    case 1:
      $addMessage(this, this.nRoundNumber, 'Maximum round reached: The winners are ' + winners + '!');
      break;
    case 2:
      $addMessage(this, this.nRoundNumber, 'Session aborted: The winners are ' + winners + '!');
      break;
    default:throw toJs(new RuntimeException);
  }
  $setText(this.btnPause, 'Resume');
  $setEnabled(this.btnSingleRound, true);
  this.warCanvas.m_indebug = false;
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_2(){
  $clear(this.warCanvas);
  $initStartWar(this.warCanvas, this.competition.currentWar);
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWarPreStartClear';
_.onWarStart = function onWarStart_2(){
  $append(this.messagesArea, '=== Session started ===\n');
  $scrollToBottom(this.messagesArea);
  if (this.competition.currentWar.isPaused) {
    $setText(this.btnPause, 'Resume');
    $setEnabled(this.btnSingleRound, true);
  }
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWarStart';
_.onWarriorBirth = function onWarriorBirth_2(w){
  $addMessage(this, this.nRoundNumber, w.m_name + ' enters the arena at ' + hex4(w.m_loadAddress.m_offset & $intern_0));
  new WarFrame$WarriorInfo(w.m_name);
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_2(warrior, reason){
  var warriorName;
  warriorName = warrior.m_name;
  $addMessage(this, this.nRoundNumber, warriorName + ' died due to ' + reason + '.');
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWarriorDeath';
_.onWriteState = function onWriteState_2(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWriteState';
_.nRoundNumber = 0;
var Lil_co_codeguru_corewars8086_gui_WarFrame_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame', 163);
function WarFrame$1(this$0, val$speedSliderVal){
  this.this$01 = this$0;
  this.val$speedSliderVal2 = val$speedSliderVal;
}

WarFrame$1.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$1.WarFrame$1';
defineClass(166, 1, {}, WarFrame$1);
_.actionPerformed = function actionPerformed(e){
  var s;
  s = __parseAndValidateInt(castToNative(this.this$01.speedSlider.m_element, $wnd.HTMLInputElement).value, 10);
  s > 100 && (s = round_int($wnd.Math.pow(s - 80, 1.5)));
  this.val$speedSliderVal2.innerHTML = '' + s;
  $setSpeed(this.this$01.competition, s);
}
;
_.actionPerformed.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$1.actionPerformed';
var Lil_co_codeguru_corewars8086_gui_WarFrame$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/1', 166);
function WarFrame$2(this$0, val$competition, val$mainWnd){
  this.this$01 = this$0;
  this.val$competition2 = val$competition;
  this.val$mainWnd3 = val$mainWnd;
}

WarFrame$2.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$2.WarFrame$2';
defineClass(167, 1, {}, WarFrame$2);
_.actionPerformed = function actionPerformed_0(arg0){
  if (!this.val$competition2.currentWar) {
    if (this.val$competition2.globalPause) {
      this.val$competition2.globalPause = false;
      $setText(this.this$01.btnPause, 'Pause');
      $requestFrame(this.val$mainWnd3);
      $setEnabled(this.this$01.btnSingleRound, false);
    }
     else {
      this.val$competition2.globalPause = true;
      $setText(this.this$01.btnPause, 'Resume');
      !!this.val$competition2.currentWar && $setEnabled(this.this$01.btnSingleRound, true);
    }
  }
   else {
    if (this.val$competition2.currentWar.isPaused) {
      $resume(this.val$competition2.currentWar);
      $setText(this.this$01.btnPause, 'Pause');
      $requestFrame(this.val$mainWnd3);
      $setEnabled(this.this$01.btnSingleRound, false);
    }
     else {
      this.val$competition2.currentWar.isPaused = true;
      $setText(this.this$01.btnPause, 'Resume');
      $setEnabled(this.this$01.btnSingleRound, true);
    }
  }
}
;
_.actionPerformed.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$2.actionPerformed';
var Lil_co_codeguru_corewars8086_gui_WarFrame$2_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/2', 167);
function WarFrame$3(val$competition, val$mainWnd){
  this.val$competition2 = val$competition;
  this.val$mainWnd3 = val$mainWnd;
}

WarFrame$3.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$3.WarFrame$3';
defineClass(168, 1, {}, WarFrame$3);
_.actionPerformed = function actionPerformed_1(arg0){
  if (!this.val$competition2.currentWar) {
    console.log('no war');
    return;
  }
  $runSingleRound(this.val$competition2.currentWar);
  $requestFrame(this.val$mainWnd3);
}
;
_.actionPerformed.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$3.actionPerformed';
var Lil_co_codeguru_corewars8086_gui_WarFrame$3_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/3', 168);
function JLabel(){
  JComponent.call(this);
}

JLabel.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JLabel.JLabel';
function JLabel_0(){
  JComponent.call(this);
}

JLabel_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JLabel.JLabel';
defineClass(45, 24, {}, JLabel_0);
var Lil_co_codeguru_corewars8086_gui_widgets_JLabel_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JLabel', 45);
function WarFrame$NameCellRenderer(){
}

WarFrame$NameCellRenderer.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$NameCellRenderer.WarFrame$NameCellRenderer';
defineClass(164, 45, {}, WarFrame$NameCellRenderer);
var Lil_co_codeguru_corewars8086_gui_WarFrame$NameCellRenderer_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/NameCellRenderer', 164);
function WarFrame$WarriorInfo(name_0){
  this.name_0 = name_0;
}

WarFrame$WarriorInfo.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$WarriorInfo.WarFrame$WarriorInfo';
defineClass(165, 1, {}, WarFrame$WarriorInfo);
_.equals_0 = function equals_1(obj){
  return obj != null && instanceOfString(obj) && $equals_4(castToString(obj), this.name_0);
}
;
_.equals_0.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$WarriorInfo.equals';
_.toString_0 = function toString_7(){
  return this.name_0;
}
;
_.toString_0.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$WarriorInfo.toString';
var Lil_co_codeguru_corewars8086_gui_WarFrame$WarriorInfo_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/WarriorInfo', 165);
function $parseLst(lsttext, opcodesText, m_currentListing){
  var addressStart, c, charsBeforeCode, i, indexStart, islast, j, l, line, lineIndex, lines, opcodeStart, prevLine, state, totalOpcodeCount;
  lines = $split(lsttext);
  lineIndex = 1;
  prevLine = null;
  totalOpcodeCount = 0;
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    state = 0;
    l = new CodeEditor$LstLine;
    indexStart = 0;
    addressStart = 0;
    opcodeStart = 0;
    charsBeforeCode = 0;
    for (j = 0; j < line.length; ++j) {
      c = (checkCriticalStringElementIndex(j, line.length) , line.charCodeAt(j));
      switch (state) {
        case 0:
          if (c >= 48 && c <= 57) {
            indexStart = j;
            state = 1;
          }
           else 
            c != 32 && (state = 9);
          break;
        case 1:
          if (c == 32) {
            state = 2;
            l.lineNum = __parseAndValidateInt(line.substr(indexStart, j - indexStart), 10);
          }
           else 
            c >= 48 && c <= 57 || (state = 9);
          break;
        case 2:
          if (c == 32) {
            state = 3;
            charsBeforeCode = -9;
          }
           else if (c >= 48 && c <= 57 || c >= 65 && c <= 70) {
            addressStart = j;
            state = 4;
          }
           else 
            state = 9;
          break;
        case 4:
          if (c == 32) {
            state = 5;
            l.addressStr = line.substr(addressStart, j - addressStart);
            l.address = __parseAndValidateInt(l.addressStr, 16);
          }
           else 
            c >= 48 && c <= 57 || c >= 65 && c <= 70 || (state = 9);
          break;
        case 5:
          state = 6;
          opcodeStart = j;
          break;
        case 6:
          islast = j == line.length - 1;
          if (c == 42) {
            state = 7;
          }
           else if (!islast && charsBeforeCode < 22)
            ++charsBeforeCode;
          else if (c == 32 || islast) {
            l.fullOpcode = line.substr(opcodeStart, j - opcodeStart);
            l.opcode = spacedHex(l.fullOpcode);
            l.opcodesCount = countDigits(l.fullOpcode) / 2 | 0;
            totalOpcodeCount += l.opcodesCount;
            if (totalOpcodeCount > 512)
              return true;
            state = 3;
            ++charsBeforeCode;
          }
           else 
            ++charsBeforeCode;
          break;
        case 3:
          if (c == 42) {
            state = 7;
          }
           else if (c != 32 || charsBeforeCode == 23) {
            state = 8;
            l.code_0 = line.substr(j);
          }
           else 
            ++charsBeforeCode;
          break;
        case 9:
          console.log('ERROR: parsing list file!\n' + lsttext);
          return false;
      }
      if (state == 7)
        break;
    }
    if (state == 7)
      continue;
    if (l.lineNum > lineIndex) {
      while (l.lineNum != lineIndex) {
        opcodesText.string += '\n';
        ++lineIndex;
      }
    }
     else if (!!prevLine && l.lineNum == prevLine.lineNum) {
      prevLine.fullOpcode += '' + l.fullOpcode;
      prevLine.opcodesCount = countDigits(prevLine.fullOpcode) / 2 | 0;
      continue;
    }
     else if (l.lineNum != lineIndex) {
      log_0('wrong line number ' + ('' + l.lineNum) + ' at ' + ('' + lineIndex));
      return false;
    }
    ++lineIndex;
    m_currentListing.array[m_currentListing.array.length] = l;
    $append_4(opcodesText, l.opcode);
    opcodesText.string += '\n';
    prevLine = l;
  }
  return true;
}

$parseLst.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.NasmListParser.$parseLst';
function $parseStdout(stdoutText, asmElem, stdoutShorten, m_lineOffsets){
  var countAllNL, e, ec, firstColon, i, j, line, lineNum, lineNum0, lineType, lines, m_errLines;
  lines = $split(stdoutText);
  countAllNL = m_lineOffsets.array.length;
  m_errLines = initUnidimensionalArray(C_classLit, $intern_13, 10, countAllNL, 15, 1);
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    firstColon = -1;
    lineNum0 = -1;
    lineType = 0;
    for (j = 0; j < line.length; ++j) {
      checkCriticalStringElementIndex(j, line.length);
      if (line.charCodeAt(j) == 58) {
        if (firstColon == -1)
          firstColon = j;
        else {
          lineNum0 = __parseAndValidateInt(line.substr(firstColon + 1, j - (firstColon + 1)), 10);
          lineNum0 -= 1;
          if (j + 2 < line.length) {
            lineType = (checkCriticalStringElementIndex(j + 2, line.length) , line.charCodeAt(j + 2));
            lineType == 119 && m_errLines[lineNum0] == 101 || (m_errLines[lineNum0] = lineType);
          }
          break;
        }
      }
    }
    if (lineNum0 == -1) {
      console.log('Failed parsing error stdout');
      return m_errLines;
    }
    $append_4(stdoutShorten, "<div class='stdout_line_" + String.fromCharCode(lineType) + "' ondblclick='asm_cursorToLine(" + ('' + (checkCriticalElementIndex(lineNum0, m_lineOffsets.array.length) , castTo(m_lineOffsets.array[lineNum0], 25)).value_0) + ")'>");
    $append_4(stdoutShorten, line.substr(firstColon + 1));
    stdoutShorten.string += '<\/div>';
  }
  for (lineNum = 0; lineNum < m_errLines.length; ++lineNum) {
    ec = m_errLines[lineNum];
    if (ec == 0)
      continue;
    e = asmElem.getElementById('mline_' + ('' + (lineNum + 1)));
    if (e == null)
      continue;
    ec == 101?e.classList.add('edit_error'):e.classList.add('edit_warning');
  }
  return m_errLines;
}

$parseStdout.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.NasmListParser.$parseStdout';
function DocumentFragment_getElementById(df, id_0){
  return df.getElementById(id_0);
}

DocumentFragment_getElementById.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.DocumentFragment_getElementById';
function countDigits(s){
  var c, count, doingDigits, i;
  doingDigits = s.length > 0 && isHexDigit((checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0)));
  if (!doingDigits)
    return 0;
  count = 0;
  for (i = 0; i < s.length; ++i) {
    c = (checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i));
    (c >= 48 && c <= 57 || c >= 65 && c <= 70) && ++count;
  }
  return count;
}

countDigits.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.countDigits';
function isHexDigit(c){
  return c >= 48 && c <= 57 || c >= 65 && c <= 70;
}

isHexDigit.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.isHexDigit';
function spacedHex(s){
  var bs, c, digitCount, doingDigits, i, upto;
  upto = s.length - 1;
  for (; upto >= 0; --upto) {
    checkCriticalStringElementIndex(upto, s.length);
    if (s.charCodeAt(upto) != 32)
      break;
  }
  bs = new StringBuilder;
  digitCount = 0;
  doingDigits = s.length > 0 && isHexDigit((checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0)));
  for (i = 0; i <= upto; ++i) {
    c = (checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i));
    if (digitCount == 14) {
      bs.string += '&#x202f;';
      break;
    }
    if (doingDigits && (c >= 48 && c <= 57 || c >= 65 && c <= 70)) {
      bs.string += String.fromCharCode(c);
      ++digitCount;
      digitCount % 2 == 0 && digitCount > 0 && (bs.string += '&#x202f;' , bs);
      continue;
    }
     else if (c == 60) {
      bs.string += '&lt;';
      continue;
    }
     else if (c == 62) {
      bs.string += '&gt;';
      continue;
    }
     else if ((c == 41 || c == 93) && bs.string.length > 8 && $substring(bs, bs.string.length - 8) == '&#x202f;') {
      $insert(bs, bs.string.length - 8, String.fromCharCode(c));
      continue;
    }
    bs.string += String.fromCharCode(c);
  }
  return bs.string;
}

spacedHex.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.spacedHex';
function ActionEvent(){
}

ActionEvent.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ActionEvent.ActionEvent';
defineClass(106, 1, {}, ActionEvent);
var Lil_co_codeguru_corewars8086_gui_widgets_ActionEvent_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'ActionEvent', 106);
function $clinit_Color(){
  $clinit_Color = emptyMethod;
  new Color(0, 0, 0);
}

$clinit_Color.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.$clinit';
function $darker(this$static){
  return new Color_0($wnd.Math.max(round_int(this$static.m_r * 0.7), 0), $wnd.Math.max(round_int(this$static.m_g * 0.7), 0), $wnd.Math.max(round_int(this$static.m_b * 0.7), 0), this$static.m_a);
}

$darker.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.$darker';
function $toString_1(this$static){
  if (this$static.m_a == 1)
    return 'rgb(' + ('' + this$static.m_r) + ',' + ('' + this$static.m_g) + ',' + ('' + this$static.m_b) + ')';
  return 'rgba(' + ('' + this$static.m_r) + ',' + ('' + this$static.m_g) + ',' + ('' + this$static.m_b) + ',' + ('' + this$static.m_a) + ')';
}

$toString_1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.$toString';
function Color(r, g, b){
  $clinit_Color();
  this.m_r = r;
  this.m_g = g;
  this.m_b = b;
  this.m_a = 1;
  this.m_isDark = 0.3 * r + 0.58 * g + 0.12 * b < 128;
}

Color.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.Color';
function Color_0(r, g, b, a){
  this.m_r = r;
  this.m_g = g;
  this.m_b = b;
  this.m_a = a;
  this.m_isDark = 0.3 * r + 0.58 * g + 0.12 * b < 128;
}

Color_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.Color';
function HSBtoRGB(hue){
  $clinit_Color();
  var b, f, g, h, q, r, t;
  r = 0;
  g = 0;
  b = 0;
  h = (hue - $wnd.Math.floor(hue)) * 6;
  f = h - $wnd.Math.floor(h);
  q = $intern_24 * (1 - $intern_25 * f);
  t = $intern_24 * (1 - $intern_25 * (1 - f));
  switch (round_int(h)) {
    case 0:
      r = 242;
      g = round_int(t * 255 + 0.5);
      b = 48;
      break;
    case 1:
      r = round_int(q * 255 + 0.5);
      g = 242;
      b = 48;
      break;
    case 2:
      r = 48;
      g = 242;
      b = round_int(t * 255 + 0.5);
      break;
    case 3:
      r = 48;
      g = round_int(q * 255 + 0.5);
      b = 242;
      break;
    case 4:
      r = round_int(t * 255 + 0.5);
      g = 48;
      b = 242;
      break;
    case 5:
      r = 242;
      g = 48;
      b = round_int(q * 255 + 0.5);
  }
  return new Color(r, b, g);
}

HSBtoRGB.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.HSBtoRGB';
defineClass(42, 1, {42:1}, Color, Color_0);
_.toString_0 = function toString_8(){
  return $toString_1(this);
}
;
_.toString_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.toString';
_.m_a = 0;
_.m_b = 0;
_.m_g = 0;
_.m_isDark = false;
_.m_r = 0;
var BLACK = '#000000', WHITE = '#ffffff';
var Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'Color', 42);
function debug(text_0){
  console.log(text_0);
}

debug.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Console.debug';
function error_0(text_0){
  console.error(text_0);
}

error_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Console.error';
function log_0(text_0){
  console.log(text_0);
}

log_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Console.log';
defineClass(242, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 242);
defineClass(243, 242, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 243);
function $println(){
}

$println.displayName = 'java.io.PrintStream.$println';
function PrintStream(){
}

PrintStream.displayName = 'java.io.PrintStream.PrintStream';
defineClass(95, 243, {}, PrintStream);
_.println = function println(s){
}
;
_.println.displayName = 'java.io.PrintStream.println';
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 95);
function $$init_18(this$static){
  this$static.buf = new StringBuilder;
}

$$init_18.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.$$init';
function $consoleLog(msg){
  window.console?window.console.log(msg):(document.title = 'LOG:' + msg);
}

$consoleLog.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.$consoleLog';
function $println_0(this$static, s){
  $append_4(this$static.buf, s);
  $consoleLog(this$static.buf.string);
  $setLength(this$static.buf);
}

$println_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.$println';
function ConsolePrintStream(){
  this.buf = new StringBuilder;
}

ConsolePrintStream.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.ConsolePrintStream';
defineClass(132, 95, {}, ConsolePrintStream);
_.println = function println_0(s){
  $append_4(this.buf, s);
  $consoleLog(this.buf.string);
  $setLength(this.buf);
}
;
_.println.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.println';
var Lil_co_codeguru_corewars8086_gui_widgets_ConsolePrintStream_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'ConsolePrintStream', 132);
function Dimension(w, h){
  this.width_0 = w;
  this.height_0 = h;
}

Dimension.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Dimension.Dimension';
defineClass(102, 1, {}, Dimension);
_.height_0 = 0;
_.width_0 = 0;
var Lil_co_codeguru_corewars8086_gui_widgets_Dimension_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'Dimension', 102);
function $$init_19(this$static){
  this$static.mListeners = new HashSet;
}

$$init_19.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.$$init';
function $add(this$static, pListener){
  $add_1(this$static.mListeners, pListener);
}

$add.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.$add';
function $doneAdding(this$static){
  this$static.mListenersArr = $toArray(this$static.mListeners);
  this$static.mListeners = null;
}

$doneAdding.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.$doneAdding';
function EventMulticasterBase(){
  this.mListeners = new HashSet;
}

EventMulticasterBase.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.EventMulticasterBase';
defineClass(82, 1, {});
_.mListenersArr = null;
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterBase_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterBase', 82);
function EventMulticasterCompetition(){
  EventMulticasterBase.call(this);
  this.debugProxy = new EventMulticasterCompetition$DebugHandler(this);
  this.competeProxy = new EventMulticasterCompetition$CompeteHandler(this);
}

EventMulticasterCompetition.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition.EventMulticasterCompetition';
defineClass(154, 82, {}, EventMulticasterCompetition);
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterCompetition_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterCompetition', 154);
function EventMulticasterCompetition$CompeteHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterCompetition$CompeteHandler.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.EventMulticasterCompetition$CompeteHandler';
defineClass(155, 1, {12:1}, EventMulticasterCompetition$CompeteHandler);
_.onCompetitionEnd = function onCompetitionEnd_3(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onCompetitionEnd();
  }
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_3(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onCompetitionStart();
  }
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onCompetitionStart';
_.onEndRound = function onEndRound_3(){
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onEndRound';
_.onNoneAlive = function onNoneAlive_3(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onNoneAlive';
_.onPaused = function onPaused_3(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onPaused';
_.onRound = function onRound_3(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onRound';
_.onWarEnd = function onWarEnd_3(reason, winners, inDebug){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onWarEnd(reason, winners, inDebug);
  }
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_3(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarPreStartClear';
_.onWarStart = function onWarStart_3(){
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarStart';
_.onWarriorBirth = function onWarriorBirth_3(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_3(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarriorDeath';
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterCompetition$CompeteHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterCompetition/CompeteHandler', 155);
function EventMulticasterCompetition$DebugHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterCompetition$DebugHandler.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.EventMulticasterCompetition$DebugHandler';
defineClass(156, 1, {12:1}, EventMulticasterCompetition$DebugHandler);
_.onCompetitionEnd = function onCompetitionEnd_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onCompetitionEnd();
  }
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onCompetitionEnd';
_.onCompetitionStart = function onCompetitionStart_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onCompetitionStart();
  }
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onCompetitionStart';
_.onEndRound = function onEndRound_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onEndRound();
  }
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onEndRound';
_.onNoneAlive = function onNoneAlive_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onNoneAlive();
  }
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onNoneAlive';
_.onPaused = function onPaused_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onPaused();
  }
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onPaused';
_.onRound = function onRound_4(round_0){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onRound(round_0);
  }
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onRound';
_.onWarEnd = function onWarEnd_4(reason, winners, inDebug){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onWarEnd(reason, winners, inDebug);
  }
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarEnd';
_.onWarPreStartClear = function onWarPreStartClear_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onWarPreStartClear();
  }
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarPreStartClear';
_.onWarStart = function onWarStart_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onWarStart();
  }
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarStart';
_.onWarriorBirth = function onWarriorBirth_4(w){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onWarriorBirth(w);
  }
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarriorBirth';
_.onWarriorDeath = function onWarriorDeath_4(warrior, reason){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 12).onWarriorDeath(warrior, reason);
  }
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarriorDeath';
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterCompetition$DebugHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterCompetition/DebugHandler', 156);
function EventMulticasterMemory(){
  EventMulticasterBase.call(this);
  this.debugProxy = new EventMulticasterMemory$DebugHandler(this);
  this.competeProxy = new EventMulticasterMemory$CompeteHandler;
}

EventMulticasterMemory.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory.EventMulticasterMemory';
defineClass(157, 82, {}, EventMulticasterMemory);
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterMemory_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterMemory', 157);
function EventMulticasterMemory$CompeteHandler(){
}

EventMulticasterMemory$CompeteHandler.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CompeteHandler.EventMulticasterMemory$CompeteHandler';
defineClass(158, 1, {57:1}, EventMulticasterMemory$CompeteHandler);
_.onMemoryWrite = function onMemoryWrite_3(address, value_0){
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CompeteHandler.onMemoryWrite';
_.onWriteState = function onWriteState_3(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CompeteHandler.onWriteState';
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterMemory$CompeteHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterMemory/CompeteHandler', 158);
function EventMulticasterMemory$DebugHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterMemory$DebugHandler.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$DebugHandler.EventMulticasterMemory$DebugHandler';
defineClass(159, 1, {57:1}, EventMulticasterMemory$DebugHandler);
_.onMemoryWrite = function onMemoryWrite_4(address, value_0){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 57).onMemoryWrite(address, value_0);
  }
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$DebugHandler.onMemoryWrite';
_.onWriteState = function onWriteState_4(state){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 57).onWriteState(state);
  }
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$DebugHandler.onWriteState';
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterMemory$DebugHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterMemory/DebugHandler', 159);
function EventMulticasterScore(){
  EventMulticasterBase.call(this);
  this.proxy = new EventMulticasterScore$MulticasterHandler(this);
}

EventMulticasterScore.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore.EventMulticasterScore';
defineClass(161, 82, {}, EventMulticasterScore);
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterScore_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterScore', 161);
function $scoreChanged(this$static, name_0, addedValue, groupIndex, subIndex){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 227).scoreChanged(name_0, addedValue, groupIndex, subIndex);
  }
}

$scoreChanged.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore$MulticasterHandler.$scoreChanged';
function EventMulticasterScore$MulticasterHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterScore$MulticasterHandler.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore$MulticasterHandler.EventMulticasterScore$MulticasterHandler';
defineClass(162, 1, {227:1}, EventMulticasterScore$MulticasterHandler);
_.scoreChanged = function scoreChanged_0(name_0, addedValue, groupIndex, subIndex){
  $scoreChanged(this, name_0, addedValue, groupIndex, subIndex);
}
;
_.scoreChanged.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore$MulticasterHandler.scoreChanged';
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterScore$MulticasterHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterScore/MulticasterHandler', 162);
function $clinit_JButton(){
  $clinit_JButton = emptyMethod;
  m_buts = new HashMap;
}

$clinit_JButton.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JButton.$clinit';
function JButton(id_0){
  $clinit_JButton();
  JComponent_0.call(this, id_0);
  $clinit_System();
  $putStringValue(m_buts, id_0, this);
  if (this.m_element == null)
    return;
  this.m_element.addEventListener('click', new JButton$1(this));
}

JButton.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JButton.JButton';
defineClass(101, 24, {}, JButton);
var m_buts;
var Lil_co_codeguru_corewars8086_gui_widgets_JButton_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JButton', 101);
function JButton$1(this$0){
  this.this$01 = this$0;
}

JButton$1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JButton$1.JButton$1';
defineClass(190, 1, {}, JButton$1);
_.handleEvent = function handleEvent_7(event_0){
  if (!this.this$01.m_listener || !this.this$01.m_enabled)
    return;
  this.this$01.m_listener.actionPerformed(new ActionEvent);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JButton$1.handleEvent';
var Lil_co_codeguru_corewars8086_gui_widgets_JButton$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JButton/1', 190);
function JComponent$1(this$0){
  this.this$01 = this$0;
}

JComponent$1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent$1.JComponent$1';
defineClass(134, 1, {}, JComponent$1);
_.handleEvent = function handleEvent_8(event_0){
  if (!this.this$01.m_listener)
    return;
  this.this$01.m_listener.actionPerformed(new ActionEvent);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent$1.handleEvent';
var Lil_co_codeguru_corewars8086_gui_widgets_JComponent$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JComponent/1', 134);
function JList(){
  JComponent.call(this);
}

JList.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JList.JList';
defineClass(191, 24, {}, JList);
var Lil_co_codeguru_corewars8086_gui_widgets_JList_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JList', 191);
function JScrollPane(){
  JComponent.call(this);
}

JScrollPane.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JScrollPane.JScrollPane';
defineClass(188, 24, {}, JScrollPane);
var Lil_co_codeguru_corewars8086_gui_widgets_JScrollPane_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JScrollPane', 188);
function $$init_20(this$static){
}

$$init_20.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JSlider.$$init';
function $setValue_1(this$static){
  castToNative(this$static.m_element, $wnd.HTMLInputElement).value = '0';
  this$static.m_valueElem != null && (this$static.m_valueElem.innerHTML = '0');
}

$setValue_1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JSlider.$setValue';
function JSlider(){
  JComponent_0.call(this, 'speedSlider');
  this.m_element.addEventListener('input', new JComponent$1(this));
  this.m_valueElem = castToNative(($clinit_DomGlobal() , document_0).getElementById('speedSliderVal'), $wnd.HTMLElement);
}

JSlider.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JSlider.JSlider';
defineClass(189, 24, {}, JSlider);
_.m_valueElem = null;
var Lil_co_codeguru_corewars8086_gui_widgets_JSlider_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JSlider', 189);
function $append(this$static, s){
  castToNative(this$static.m_element, $wnd.HTMLElement).innerHTML = castToNative(this$static.m_element, $wnd.HTMLElement).innerHTML + s;
}

$append.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextArea.$append';
function $scrollToBottom(this$static){
  castToNative(this$static.m_element, $wnd.HTMLElement).scrollTop = castToNative(this$static.m_element, $wnd.HTMLElement).scrollHeight - castToNative(this$static.m_element, $wnd.HTMLElement).clientHeight;
}

$scrollToBottom.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextArea.$scrollToBottom';
function JTextArea(){
  JComponent_0.call(this, 'messagesArea');
}

JTextArea.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextArea.JTextArea';
defineClass(187, 24, {}, JTextArea);
var Lil_co_codeguru_corewars8086_gui_widgets_JTextArea_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JTextArea', 187);
function $setText_1(this$static, v){
  castToNative(this$static.m_element, $wnd.HTMLInputElement).value = v;
}

$setText_1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextField.$setText';
function JTextField(id_0, text_0){
  JComponent_0.call(this, id_0);
  text_0 != null && (castToNative(this.m_element, $wnd.HTMLInputElement).value = text_0);
}

JTextField.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextField.JTextField';
defineClass(98, 24, {}, JTextField);
var Lil_co_codeguru_corewars8086_gui_widgets_JTextField_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JTextField', 98);
function hex2(num){
  var number, s;
  s = (number = num >>> 0 , number.toString(16)).toUpperCase();
  if (s.length == 1)
    return '0' + s;
  return s;
}

hex2.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.hex2';
function hex4(num){
  var number, s;
  s = (number = num >>> 0 , number.toString(16)).toUpperCase();
  switch (s.length) {
    case 1:
      return '000' + s;
    case 2:
      return '00' + s;
    case 3:
      return '0' + s;
    case 4:
      return s;
  }
  return s;
}

hex4.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.hex4';
function hex5(num){
  var number, s;
  s = (number = num >>> 0 , number.toString(16)).toUpperCase();
  switch (s.length) {
    case 1:
      return '0000' + s;
    case 2:
      return '000' + s;
    case 3:
      return '00' + s;
    case 4:
      return '0' + s;
    case 5:
      return s;
  }
  return s;
}

hex5.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.hex5';
function innerText(elem){
  return elem.innerText;
}

innerText.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.innerText';
function setInnerText(elem, text_0){
  elem.innerText = text_0;
}

setInnerText.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.setInnerText';
function $readExecuteWord(this$static, address){
  var high, low, nextAddress;
  low = $readExecuteByte_2(this$static, address);
  nextAddress = new RealModeAddress_0(address.m_segment, address.m_offset + 1 << 16 >> 16);
  high = $readExecuteByte_2(this$static, nextAddress);
  return ((high & 255) << 16 >> 16 << 8 | (low & 255) << 16 >> 16) << 16 >> 16;
}

$readExecuteWord.displayName = 'il.co.codeguru.corewars8086.memory.AbstractRealModeMemory.$readExecuteWord';
function $readWord(this$static, address){
  var high, low, nextAddress;
  low = this$static.readByte(address);
  nextAddress = new RealModeAddress_0(address.m_segment, address.m_offset + 1 << 16 >> 16);
  high = this$static.readByte(nextAddress);
  return ((high & 255) << 16 >> 16 << 8 | (low & 255) << 16 >> 16) << 16 >> 16;
}

$readWord.displayName = 'il.co.codeguru.corewars8086.memory.AbstractRealModeMemory.$readWord';
function $writeWord(this$static, address, value_0){
  var high, low, nextAddress;
  low = value_0 << 24 >> 24;
  high = value_0 >> 8 << 24 >> 24;
  $writeByte_0(this$static, address, low);
  nextAddress = new RealModeAddress_0(address.m_segment, address.m_offset + 1 << 16 >> 16);
  $writeByte_0(this$static, nextAddress, high);
}

$writeWord.displayName = 'il.co.codeguru.corewars8086.memory.AbstractRealModeMemory.$writeWord';
defineClass(248, 1, {});
var Lil_co_codeguru_corewars8086_memory_AbstractRealModeMemory_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'AbstractRealModeMemory', 248);
function MemoryException(msg){
  Exception_1.call(this, msg);
}

MemoryException.displayName = 'il.co.codeguru.corewars8086.memory.MemoryException.MemoryException';
defineClass(54, 7, {54:1, 3:1, 7:1, 8:1}, MemoryException);
var Lil_co_codeguru_corewars8086_memory_MemoryException_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'MemoryException', 54);
function RealModeAddress(linearAddress){
  var unsignedOffset, unsignedSegment;
  linearAddress %= $intern_23;
  unsignedSegment = (linearAddress / 16 | 0) & $intern_0;
  unsignedOffset = linearAddress - unsignedSegment * 16 & $intern_0;
  this.m_segment = unsignedSegment << 16 >> 16;
  this.m_offset = unsignedOffset << 16 >> 16;
  this.m_linearAddress = linearAddress;
}

RealModeAddress.displayName = 'il.co.codeguru.corewars8086.memory.RealModeAddress.RealModeAddress';
function RealModeAddress_0(segment, offset){
  var linearAddressFull, unsignedOffset, unsignedSegment;
  this.m_segment = segment;
  this.m_offset = offset;
  unsignedSegment = this.m_segment & $intern_0;
  unsignedOffset = this.m_offset & $intern_0;
  linearAddressFull = unsignedSegment * 16 + unsignedOffset;
  this.m_linearAddress = linearAddressFull % $intern_23;
}

RealModeAddress_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeAddress.RealModeAddress';
function linearAddress_0(segment, offset){
  var linearAddress, linearAddressFull, unsignedOffset, unsignedSegment;
  unsignedSegment = segment & $intern_0;
  unsignedOffset = offset & $intern_0;
  linearAddressFull = unsignedSegment * 16 + unsignedOffset;
  linearAddress = linearAddressFull % $intern_23;
  return linearAddress;
}

linearAddress_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeAddress.linearAddress';
defineClass(5, 1, {}, RealModeAddress, RealModeAddress_0);
_.m_linearAddress = 0;
_.m_offset = 0;
_.m_segment = 0;
var Lil_co_codeguru_corewars8086_memory_RealModeAddress_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RealModeAddress', 5);
function $readByte(this$static, linearAddress){
  return this$static.m_data[linearAddress % $intern_23];
}

$readByte.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readByte';
function $readByte_0(this$static, address){
  return this$static.m_data[address.m_linearAddress];
}

$readByte_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readByte';
function $readExecuteByte(this$static, linearAddress){
  return this$static.m_data[linearAddress];
}

$readExecuteByte.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readExecuteByte';
function $readExecuteByte_0(this$static, address){
  return this$static.m_data[address.m_linearAddress];
}

$readExecuteByte_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readExecuteByte';
function $setListener(this$static, listener){
  this$static.listener = listener;
}

$setListener.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$setListener';
function $writeByte(this$static, address, value_0){
  this$static.m_data[address.m_linearAddress] = value_0;
  !!this$static.listener && this$static.listener.onMemoryWrite(address, value_0);
}

$writeByte.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$writeByte';
function RealModeMemoryImpl(){
  this.m_data = new Int8Array($intern_23);
}

RealModeMemoryImpl.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.RealModeMemoryImpl';
defineClass(192, 248, {}, RealModeMemoryImpl);
_.readByte = function readByte(address){
  return $readByte_0(this, address);
}
;
_.readByte.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.readByte';
var Lil_co_codeguru_corewars8086_memory_RealModeMemoryImpl_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RealModeMemoryImpl', 192);
function $equals_1(this$static, a){
  return this$static.m_start == a.m_start && this$static.m_end == a.m_end;
}

$equals_1.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.$equals';
function $isInRegion(this$static, asked){
  return asked >= this$static.m_start && asked <= this$static.m_end;
}

$isInRegion.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.$isInRegion';
function RealModeMemoryRegion(){
  this.m_start = -1;
  this.m_end = -1;
}

RealModeMemoryRegion.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.RealModeMemoryRegion';
function RealModeMemoryRegion_0(start_0, end){
  this.m_start = start_0.m_linearAddress;
  this.m_end = end.m_linearAddress;
}

RealModeMemoryRegion_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.RealModeMemoryRegion';
defineClass(43, 1, {43:1}, RealModeMemoryRegion, RealModeMemoryRegion_0);
_.m_end = 0;
_.m_start = 0;
var Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RealModeMemoryRegion', 43);
function $isAddressInRegions(regions, address){
  var found, i;
  found = false;
  for (i = 0; i < regions.length; ++i) {
    if (address >= regions[i].m_start && address <= regions[i].m_end) {
      found = true;
      break;
    }
  }
  return found;
}

$isAddressInRegions.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$isAddressInRegions';
function $readByte_1(this$static, address){
  var number;
  if (!$isAddressInRegions(this$static.m_readAccessRegions, address.m_linearAddress)) {
    throw toJs(new MemoryException('Read not allowed from address 0x' + (number = address.m_linearAddress >>> 0 , number.toString(16)).toUpperCase()));
  }
  return $readByte_0(this$static.m_memory, address);
}

$readByte_1.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$readByte';
function $readExecuteByte_1(this$static, linearAddress){
  var number;
  if (!$isAddressInRegions(this$static.m_executeAccessRegions, linearAddress)) {
    throw toJs(new MemoryException('Execute not allowed in address 0x' + (number = linearAddress >>> 0 , number.toString(16)).toUpperCase()));
  }
  return $readExecuteByte(this$static.m_memory, linearAddress);
}

$readExecuteByte_1.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$readExecuteByte';
function $readExecuteByte_2(this$static, address){
  var number;
  if (!$isAddressInRegions(this$static.m_executeAccessRegions, address.m_linearAddress)) {
    throw toJs(new MemoryException('Execute not allowed in address 0x' + (number = address.m_linearAddress >>> 0 , number.toString(16)).toUpperCase()));
  }
  return $readExecuteByte_0(this$static.m_memory, address);
}

$readExecuteByte_2.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$readExecuteByte';
function $writeByte_0(this$static, address, value_0){
  var number;
  if (!$isAddressInRegions(this$static.m_writeAccessRegions, address.m_linearAddress)) {
    throw toJs(new MemoryException('Write not allowed to address 0x' + (number = address.m_linearAddress >>> 0 , number.toString(16)).toUpperCase()));
  }
  $writeByte(this$static.m_memory, address, value_0);
}

$writeByte_0.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$writeByte';
function RestrictedAccessRealModeMemory(memory, readAccessRegions, writeAccessRegions, executeAccessRegions){
  this.m_memory = memory;
  this.m_readAccessRegions = readAccessRegions;
  this.m_writeAccessRegions = writeAccessRegions;
  this.m_executeAccessRegions = executeAccessRegions;
}

RestrictedAccessRealModeMemory.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.RestrictedAccessRealModeMemory';
defineClass(223, 248, {}, RestrictedAccessRealModeMemory);
_.readByte = function readByte_0(address){
  return $readByte_1(this, address);
}
;
_.readByte.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.readByte';
var Lil_co_codeguru_corewars8086_memory_RestrictedAccessRealModeMemory_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RestrictedAccessRealModeMemory', 223);
function $absFromRel(this$static, rel8){
  var startOfProgram;
  startOfProgram = this$static.pointer - this$static.progStartOffset;
  return startOfProgram + rel8 << 24 >> 24;
}

$absFromRel.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$absFromRel';
function $absFromRel16(this$static, rel16){
  var startOfProgram;
  startOfProgram = this$static.pointer - this$static.progStartOffset;
  return startOfProgram + rel16 << 16 >> 16;
}

$absFromRel16.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$absFromRel16';
function $getMem8_0(this$static){
  var extraInfo, number, number0;
  switch (this$static.mode_0) {
    case 0:
      extraInfo = ']';
      break;
    case 1:
      extraInfo = ' + ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase()) + ']';
      break;
    case 2:
      extraInfo = ' + ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase()) + ']';
      break;
    case 3:
      return $getReg8_1(this$static.memIndex);
    default:throw toJs(new RuntimeException);
  }
  switch (this$static.memIndex) {
    case 0:
      return '[BX + SI' + extraInfo;
    case 1:
      return '[BX + DI' + extraInfo;
    case 2:
      return '[BP + SI' + extraInfo;
    case 3:
      return '[BP + DI' + extraInfo;
    case 4:
      return '[SI' + extraInfo;
    case 5:
      return '[DI' + extraInfo;
    case 6:
      return this$static.mode_0 == 0?'[' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase()) + ']':'[BP' + extraInfo;
    case 7:
      return '[BX' + extraInfo;
    default:throw toJs(new RuntimeException);
  }
}

$getMem8_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$getMem8';
function $getReg16_1(index_0){
  switch (index_0) {
    case 0:
      return 'AX';
    case 1:
      return 'CX';
    case 2:
      return 'DX';
    case 3:
      return 'BX';
    case 4:
      return 'SP';
    case 5:
      return 'BP';
    case 6:
      return 'SI';
    case 7:
      return 'DI';
    default:throw toJs(new RuntimeException);
  }
}

$getReg16_1.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$getReg16';
function $getReg8_1(index_0){
  switch (index_0) {
    case 0:
      return 'AL';
    case 1:
      return 'CL';
    case 2:
      return 'DL';
    case 3:
      return 'BL';
    case 4:
      return 'AH';
    case 5:
      return 'CH';
    case 6:
      return 'DH';
    case 7:
      return 'BH';
    default:throw toJs(new RuntimeException);
  }
}

$getReg8_1.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$getReg8';
function $getSeg_1(index_0){
  switch (index_0) {
    case 4:
    case 0:
      return 'ES';
    case 5:
    case 1:
      return 'CS';
    case 6:
    case 2:
      return 'SS';
    case 7:
    case 3:
      return 'DS';
    default:throw toJs(new RuntimeException);
  }
}

$getSeg_1.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$getSeg';
function $lastOpcodeSize(this$static){
  var ret;
  ret = this$static.pointer - this$static.startOffset;
  this$static.startOffset = this$static.pointer;
  return ret;
}

$lastOpcodeSize.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$lastOpcodeSize';
function $nextOpcode_0(this$static){
  var opcode;
  opcode = this$static.nextByte();
  switch (opcode & 240) {
    case 0:
      return $opcode0X_0(this$static, opcode);
    case 16:
      return $opcode1X_0(this$static, opcode);
    case 32:
      return $opcode2X_0(this$static, opcode);
    case 48:
      return $opcode3X_0(this$static, opcode);
    case 64:
      return $opcode4X_0(opcode);
    case 80:
      return $opcode5X_0(opcode);
    case 96:
      return $opcode6X_0();
    case 112:
      return $opcode7X_0(this$static, opcode);
    case 128:
      return $opcode8X_0(this$static, opcode);
    case 144:
      return $opcode9X_0(this$static, opcode);
    case 160:
      return $opcodeAX_0(this$static, opcode);
    case 176:
      return $opcodeBX_0(this$static, opcode);
    case 192:
      return $opcodeCX_0(this$static, opcode);
    case 208:
      return $opcodeDX_0(this$static, opcode);
    case 224:
      return $opcodeEX_0(this$static, opcode);
    case 240:
      return $opcodeFX_0(this$static, opcode);
    default:throw toJs(new RuntimeException);
  }
}

$nextOpcode_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$nextOpcode';
function $nextWord_0(this$static){
  var high, low;
  low = this$static.nextByte();
  high = this$static.nextByte();
  return ((high & 255) << 16 >> 16 << 8 | (low & 255) << 16 >> 16) << 16 >> 16;
}

$nextWord_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$nextWord';
function $opcode0X_0(this$static, opcode){
  var number, number0, number1, number2;
  switch (opcode) {
    case 0:
      $resetIndirect(this$static);
      return 'ADD ' + $getMem8_0(this$static) + ', ' + $getReg8_1(this$static.regIndex);
    case 1:
      $resetIndirect(this$static);
      return 'ADD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getReg16_1(this$static.regIndex);
    case 2:
      $resetIndirect(this$static);
      return 'ADD ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case 3:
      $resetIndirect(this$static);
      return 'ADD ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case 4:
      return 'ADD AL, ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase());
    case 5:
      return 'ADD AX, ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number1.toString(16)).toUpperCase());
    case 6:
      return 'PUSH ES';
    case 7:
      return 'POP ES';
    case 8:
      $resetIndirect(this$static);
      return 'OR ' + $getMem8_0(this$static) + ', ' + $getReg8_1(this$static.regIndex);
    case 9:
      $resetIndirect(this$static);
      return 'OR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getReg16_1(this$static.regIndex);
    case 10:
      $resetIndirect(this$static);
      return 'OR ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case 11:
      $resetIndirect(this$static);
      return 'OR ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case 12:
      return 'OR AL, ' + ('0x' + (number2 = (this$static.nextByte() & 255) >>> 0 , number2.toString(16)).toUpperCase());
    case 13:
      return 'OR AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase());
    case 14:
      return 'PUSH CS';
    case 15:
      throw toJs(new Disassembler$DisassemblerException);
    default:throw toJs(new RuntimeException);
  }
}

$opcode0X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode0X';
function $opcode1X_0(this$static, opcode){
  var number, number0, number1, number2;
  switch (opcode) {
    case 16:
      $resetIndirect(this$static);
      return 'ADC ' + $getMem8_0(this$static) + ', ' + $getReg8_1(this$static.regIndex);
    case 17:
      $resetIndirect(this$static);
      return 'ADC ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getReg16_1(this$static.regIndex);
    case 18:
      $resetIndirect(this$static);
      return 'ADC ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case 19:
      $resetIndirect(this$static);
      return 'ADC ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case 20:
      return 'ADC AL, ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase());
    case 21:
      return 'ADC AX, ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number1.toString(16)).toUpperCase());
    case 22:
      return 'PUSH SS';
    case 23:
      return 'POP SS';
    case 24:
      $resetIndirect(this$static);
      return 'SBB ' + $getMem8_0(this$static) + ', ' + $getReg8_1(this$static.regIndex);
    case 25:
      $resetIndirect(this$static);
      return 'SBB ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getReg16_1(this$static.regIndex);
    case 26:
      $resetIndirect(this$static);
      return 'SBB ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case 27:
      $resetIndirect(this$static);
      return 'SBB ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case 28:
      return 'SBB AL, ' + ('0x' + (number2 = (this$static.nextByte() & 255) >>> 0 , number2.toString(16)).toUpperCase());
    case 29:
      return 'SBB AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase());
    case 30:
      return 'PUSH DS';
    case 31:
      return 'POP DS';
    default:throw toJs(new RuntimeException);
  }
}

$opcode1X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode1X';
function $opcode2X_0(this$static, opcode){
  var number, number0, number1, number2;
  switch (opcode) {
    case 32:
      $resetIndirect(this$static);
      return 'AND ' + $getMem8_0(this$static) + ', ' + $getReg8_1(this$static.regIndex);
    case 33:
      $resetIndirect(this$static);
      return 'AND ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getReg16_1(this$static.regIndex);
    case 34:
      $resetIndirect(this$static);
      return 'AND ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case 35:
      $resetIndirect(this$static);
      return 'AND ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case 36:
      return 'AND AL, ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase());
    case 37:
      return 'AND AX, ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number1.toString(16)).toUpperCase());
    case 40:
      $resetIndirect(this$static);
      return 'SUB ' + $getMem8_0(this$static) + ', ' + $getReg8_1(this$static.regIndex);
    case 41:
      $resetIndirect(this$static);
      return 'SUB ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getReg16_1(this$static.regIndex);
    case 42:
      $resetIndirect(this$static);
      return 'SUB ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case 43:
      $resetIndirect(this$static);
      return 'SUB ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case 44:
      return 'SUB AL, ' + ('0x' + (number2 = (this$static.nextByte() & 255) >>> 0 , number2.toString(16)).toUpperCase());
    case 45:
      return 'SUB AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase());
    case 38:
    case 39:
    case 46:
    case 47:
      throw toJs(new Disassembler$DisassemblerException);
    default:throw toJs(new RuntimeException);
  }
}

$opcode2X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode2X';
function $opcode3X_0(this$static, opcode){
  var number, number0, number1, number2;
  switch (opcode) {
    case 48:
      $resetIndirect(this$static);
      return 'XOR ' + $getMem8_0(this$static) + ', ' + $getReg8_1(this$static.regIndex);
    case 49:
      $resetIndirect(this$static);
      return 'XOR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getReg16_1(this$static.regIndex);
    case 50:
      $resetIndirect(this$static);
      return 'XOR ' + $getReg8_1(this$static.regIndex) + ',' + $getMem8_0(this$static);
    case 51:
      $resetIndirect(this$static);
      return 'XOR ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case 52:
      return 'XOR AL, ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase());
    case 53:
      return 'XOR AX, ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number1.toString(16)).toUpperCase());
    case 56:
      $resetIndirect(this$static);
      return 'CMP ' + $getMem8_0(this$static) + ', ' + $getReg8_1(this$static.regIndex);
    case 57:
      $resetIndirect(this$static);
      return 'CMP ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getReg16_1(this$static.regIndex);
    case 58:
      $resetIndirect(this$static);
      return 'CMP ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case 59:
      $resetIndirect(this$static);
      return 'CMP ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case 60:
      return 'CMP AL, ' + ('0x' + (number2 = (this$static.nextByte() & 255) >>> 0 , number2.toString(16)).toUpperCase());
    case 61:
      return 'CMP AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase());
    case 54:
    case 55:
    case 62:
    case 63:
      throw toJs(new Disassembler$DisassemblerException);
    default:throw toJs(new RuntimeException);
  }
}

$opcode3X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode3X';
function $opcode4X_0(opcode){
  var index_0;
  index_0 = (opcode & 7) << 24 >> 24;
  switch (opcode) {
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
      return 'INC ' + $getReg16_1(index_0);
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
      return 'DEC ' + $getReg16_1(index_0);
    default:throw toJs(new RuntimeException);
  }
}

$opcode4X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode4X';
function $opcode5X_0(opcode){
  var index_0;
  index_0 = (opcode & 7) << 24 >> 24;
  switch (opcode) {
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
      return 'PUSH ' + $getReg16_1(index_0);
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
      return 'POP ' + $getReg16_1(index_0);
    default:throw toJs(new RuntimeException);
  }
}

$opcode5X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode5X';
function $opcode6X_0(){
  throw toJs(new Disassembler$DisassemblerException);
}

$opcode6X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode6X';
function $opcode7X_0(this$static, opcode){
  var jump, number;
  jump = '';
  switch (opcode) {
    case 112:
      jump = 'JO';
      break;
    case 113:
      jump = 'JNO';
      break;
    case 114:
      jump = 'JC';
      break;
    case 115:
      jump = 'JNC';
      break;
    case 116:
      jump = 'JZ';
      break;
    case 117:
      jump = 'JNZ';
      break;
    case 118:
      jump = 'JBE';
      break;
    case 119:
      jump = 'JNBE';
      break;
    case 120:
      jump = 'JS';
      break;
    case 121:
      jump = 'JNS';
      break;
    case 122:
      jump = 'JP';
      break;
    case 123:
      jump = 'JNP';
      break;
    case 124:
      jump = 'JL';
      break;
    case 125:
      jump = 'JNL';
      break;
    case 126:
      jump = 'JLE';
      break;
    case 127:
      jump = 'JNLE';
  }
  return jump + ' SHORT ' + ('0x' + (number = ($absFromRel(this$static, this$static.nextByte()) & 255) >>> 0 , number.toString(16)).toUpperCase());
}

$opcode7X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode7X';
function $opcode8X_0(this$static, opcode){
  var number, number0, number1, number2, number3, number4, number5, number6, number7;
  switch (opcode) {
    case -128:
    case -126:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ADD ' + $getMem8_0(this$static) + ', ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase());
        case 1:
          return 'OR ' + $getMem8_0(this$static) + ', ' + ('0x' + (number1 = (this$static.nextByte() & 255) >>> 0 , number1.toString(16)).toUpperCase());
        case 2:
          return 'ADC ' + $getMem8_0(this$static) + ', ' + ('0x' + (number2 = (this$static.nextByte() & 255) >>> 0 , number2.toString(16)).toUpperCase());
        case 3:
          return 'SBB ' + $getMem8_0(this$static) + ', ' + ('0x' + (number3 = (this$static.nextByte() & 255) >>> 0 , number3.toString(16)).toUpperCase());
        case 4:
          return 'AND ' + $getMem8_0(this$static) + ', ' + ('0x' + (number4 = (this$static.nextByte() & 255) >>> 0 , number4.toString(16)).toUpperCase());
        case 5:
          return 'SUB ' + $getMem8_0(this$static) + ', ' + ('0x' + (number5 = (this$static.nextByte() & 255) >>> 0 , number5.toString(16)).toUpperCase());
        case 6:
          return 'XOR ' + $getMem8_0(this$static) + ', ' + ('0x' + (number6 = (this$static.nextByte() & 255) >>> 0 , number6.toString(16)).toUpperCase());
        case 7:
          return 'CMP ' + $getMem8_0(this$static) + ', ' + ('0x' + (number7 = (this$static.nextByte() & 255) >>> 0 , number7.toString(16)).toUpperCase());
        default:throw toJs(new RuntimeException);
      }

    case -127:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ADD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number0 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number0.toString(16)).toUpperCase());
        case 1:
          return 'OR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number1.toString(16)).toUpperCase());
        case 2:
          return 'ADC ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number2 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number2.toString(16)).toUpperCase());
        case 3:
          return 'SBB ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number3 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number3.toString(16)).toUpperCase());
        case 4:
          return 'AND ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number4 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number4.toString(16)).toUpperCase());
        case 5:
          return 'SUB ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number5 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number5.toString(16)).toUpperCase());
        case 6:
          return 'XOR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number6 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number6.toString(16)).toUpperCase());
        case 7:
          return 'CMP ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number7 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number7.toString(16)).toUpperCase());
        default:throw toJs(new RuntimeException);
      }

    case -125:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ADD WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase());
        case 1:
          return 'OR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number1 = (this$static.nextByte() & 255) >>> 0 , number1.toString(16)).toUpperCase());
        case 2:
          return 'ADC WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number2 = (this$static.nextByte() & 255) >>> 0 , number2.toString(16)).toUpperCase());
        case 3:
          return 'SBB WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number3 = (this$static.nextByte() & 255) >>> 0 , number3.toString(16)).toUpperCase());
        case 4:
          return 'AND WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number4 = (this$static.nextByte() & 255) >>> 0 , number4.toString(16)).toUpperCase());
        case 5:
          return 'SUB WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number5 = (this$static.nextByte() & 255) >>> 0 , number5.toString(16)).toUpperCase());
        case 6:
          return 'XOR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number6 = (this$static.nextByte() & 255) >>> 0 , number6.toString(16)).toUpperCase());
        case 7:
          return 'CMP WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number7 = (this$static.nextByte() & 255) >>> 0 , number7.toString(16)).toUpperCase());
        default:throw toJs(new RuntimeException);
      }

    case -124:
      $resetIndirect(this$static);
      return 'TEST ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case -123:
      $resetIndirect(this$static);
      return 'TEST ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case -122:
      $resetIndirect(this$static);
      return 'XCHG ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case -121:
      $resetIndirect(this$static);
      return 'XCHG ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case -120:
      $resetIndirect(this$static);
      return 'MOV ' + $getMem8_0(this$static) + ', ' + $getReg8_1(this$static.regIndex);
    case -119:
      $resetIndirect(this$static);
      return 'MOV ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getReg16_1(this$static.regIndex);
    case -118:
      $resetIndirect(this$static);
      return 'MOV ' + $getReg8_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case -117:
      $resetIndirect(this$static);
      return 'MOV ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case -116:
      $resetIndirect(this$static);
      return 'MOV ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + $getSeg_1(this$static.regIndex);
    case -115:
      $resetIndirect(this$static);
      return this$static.mode_0 == 3?'DW ' + ('0x' + (number = ((((this$static.memIndex | this$static.regIndex << 3 | this$static.mode_0 << 6) << 24 >> 24 & 255) << 16 >> 16 << 8 | (-115 & 255) << 16 >> 16) << 16 >> 16 & $intern_0) >>> 0 , number.toString(16)).toUpperCase()):'LEA ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case -114:
      $resetIndirect(this$static);
      return 'MOV ' + $getSeg_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case -113:
      $resetIndirect(this$static);
      return 'POP ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    default:throw toJs(new RuntimeException);
  }
}

$opcode8X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode8X';
function $opcode9X_0(this$static, opcode){
  var i, index_0, number, number0;
  switch (opcode) {
    case -112:
      return 'NOP';
    case -111:
    case -110:
    case -109:
    case -108:
    case -107:
    case -106:
    case -105:
      index_0 = (opcode & 7) << 24 >> 24;
      return 'XCHG ' + $getReg16_1(index_0) + ', AX';
    case -104:
      return 'CBW';
    case -103:
      return 'CWD';
    case -102:
      return 'CALL FAR ' + ('0x' + (number0 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number0.toString(16)).toUpperCase()) + ':' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase());
    case -101:
      for (i = 0; i < 3; ++i) {
        if (this$static.getByte() != -101)
          throw toJs(new Disassembler$DisassemblerException);
        else 
          this$static.nextByte();
      }

      return 'NRG';
    case -100:
      return 'PUSHF';
    case -99:
      return 'POPF';
    case -98:
      return 'SAHF';
    case -97:
      return 'LAHF';
    default:throw toJs(new RuntimeException);
  }
}

$opcode9X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode9X';
function $opcodeAX_0(this$static, opcode){
  var number, number0, number1, number2, number3, number4;
  switch (opcode) {
    case -96:
      return 'MOV AL, [' + ('0x' + (number0 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number0.toString(16)).toUpperCase()) + ']';
    case -95:
      return 'MOV AX, [' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number1.toString(16)).toUpperCase()) + ']';
    case -94:
      return 'MOV [' + ('0x' + (number2 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number2.toString(16)).toUpperCase()) + '], AL';
    case -93:
      return 'MOV [' + ('0x' + (number3 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number3.toString(16)).toUpperCase()) + '], AX';
    case -92:
      return 'MOVSB';
    case -91:
      return 'MOVSW';
    case -90:
      return 'CMPSB';
    case -89:
      return 'CMPSW';
    case -88:
      return 'TEST AL, ' + ('0x' + (number4 = (this$static.nextByte() & 255) >>> 0 , number4.toString(16)).toUpperCase());
    case -87:
      return 'TEST AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase());
    case -86:
      return 'STOSB';
    case -85:
      return 'STOSW';
    case -84:
      return 'LODSB';
    case -83:
      return 'LODSW';
    case -82:
      return 'SCASB';
    case -81:
      return 'SCASW';
    default:throw toJs(new RuntimeException);
  }
}

$opcodeAX_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeAX';
function $opcodeBX_0(this$static, opcode){
  var index_0, number, number0;
  index_0 = (opcode & 7) << 24 >> 24;
  switch (opcode) {
    case -80:
    case -79:
    case -78:
    case -77:
    case -76:
    case -75:
    case -74:
    case -73:
      return 'MOV ' + $getReg8_1(index_0) + ', ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase());
    case -72:
    case -71:
    case -70:
    case -69:
    case -68:
    case -67:
    case -66:
    case -65:
      return 'MOV ' + $getReg16_1(index_0) + ', ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase());
    default:throw toJs(new RuntimeException);
  }
}

$opcodeBX_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeBX';
function $opcodeCX_0(this$static, opcode){
  var number, number0, number1, number2, opcodeId;
  switch (opcode) {
    case -64:
    case -63:
      throw toJs(new Disassembler$DisassemblerException);
    case -62:
      return 'RET ' + ('0x' + (number0 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number0.toString(16)).toUpperCase());
    case -61:
      return 'RET';
    case -60:
      $resetIndirect(this$static);
      if (this$static.mode_0 == 3)
        throw toJs(new Disassembler$DisassemblerException);
      else 
        return 'LES ' + $getReg16_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case -59:
      $resetIndirect(this$static);
      if (this$static.mode_0 == 3)
        throw toJs(new Disassembler$DisassemblerException);
      else 
        return 'LDS ' + $getReg16_1(this$static.regIndex) + ', ' + $getMem8_0(this$static);
    case -58:
      $resetIndirect(this$static);
      return 'MOV ' + $getMem8_0(this$static) + ', ' + ('0x' + (number1 = (this$static.nextByte() & 255) >>> 0 , number1.toString(16)).toUpperCase());
    case -57:
      $resetIndirect(this$static);
      return 'MOV ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number2 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number2.toString(16)).toUpperCase());
    case -56:
    case -52:
    case -50:
    case -55:
      throw toJs(new Disassembler$DisassemblerException);
    case -54:
      return 'RETF ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase());
    case -53:
      return 'RETF';
    case -51:
      opcodeId = this$static.nextByte();
      if (opcodeId == -122)
        return 'INT 0x86';
      else if (opcodeId == -121)
        return 'INT 0x87';
      else 
        throw toJs(new Disassembler$DisassemblerException);
    case -49:
      return 'IRET';
    default:throw toJs(new RuntimeException);
  }
}

$opcodeCX_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeCX';
function $opcodeDX_0(this$static, opcode){
  switch (opcode) {
    case -48:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ROL ' + $getMem8_0(this$static) + ', 1';
        case 1:
          return 'ROR ' + $getMem8_0(this$static) + ', 1';
        case 2:
          return 'RCL ' + $getMem8_0(this$static) + ', 1';
        case 3:
          return 'RCR ' + $getMem8_0(this$static) + ', 1';
        case 4:
          return 'SHL ' + $getMem8_0(this$static) + ', 1';
        case 5:
          return 'SHR ' + $getMem8_0(this$static) + ', 1';
        case 6:
          throw toJs(new Disassembler$DisassemblerException);
        case 7:
          return 'SAR ' + $getMem8_0(this$static) + ', 1';
        default:throw toJs(new RuntimeException);
      }

    case -47:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ROL ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 1:
          return 'ROR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 2:
          return 'RCL ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 3:
          return 'RCR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 4:
          return 'SHL ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 5:
          return 'SHR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 6:
          throw toJs(new Disassembler$DisassemblerException);
        case 7:
          return 'SAR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        default:throw toJs(new RuntimeException);
      }

    case -46:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ROL ' + $getMem8_0(this$static) + ', CL';
        case 1:
          return 'ROR ' + $getMem8_0(this$static) + ', CL';
        case 2:
          return 'RCL ' + $getMem8_0(this$static) + ', CL';
        case 3:
          return 'RCR ' + $getMem8_0(this$static) + ', CL';
        case 4:
          return 'SHL ' + $getMem8_0(this$static) + ', CL';
        case 5:
          return 'SHR ' + $getMem8_0(this$static) + ', CL';
        case 6:
          throw toJs(new Disassembler$DisassemblerException);
        case 7:
          return 'SAR ' + $getMem8_0(this$static) + ', CL';
        default:throw toJs(new RuntimeException);
      }

    case -45:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ROL ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 1:
          return 'ROR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 2:
          return 'RCL ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 3:
          return 'RCR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 4:
          return 'SHL ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 5:
          return 'SHR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 6:
          throw toJs(new Disassembler$DisassemblerException);
        case 7:
          return 'SAR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        default:throw toJs(new RuntimeException);
      }

    case -41:
      return 'XLATB';
    case -44:
    case -43:
    case -42:
    case -40:
    case -39:
    case -38:
    case -37:
    case -36:
    case -35:
    case -34:
    case -33:
      throw toJs(new Disassembler$DisassemblerException);
    default:throw toJs(new RuntimeException);
  }
}

$opcodeDX_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeDX';
function $opcodeEX_0(this$static, opcode){
  var number, number0, number1, number2, number3, number4, number5, number6, number7;
  switch (opcode) {
    case -32:
      return 'LOOPNZ ' + ('0x' + (number0 = ($absFromRel(this$static, this$static.nextByte()) & 255) >>> 0 , number0.toString(16)).toUpperCase());
    case -31:
      return 'LOOPZ ' + ('0x' + (number1 = ($absFromRel(this$static, this$static.nextByte()) & 255) >>> 0 , number1.toString(16)).toUpperCase());
    case -30:
      return 'LOOP ' + ('0x' + (number2 = ($absFromRel(this$static, this$static.nextByte()) & 255) >>> 0 , number2.toString(16)).toUpperCase());
    case -29:
      return 'JCXZ ' + ('0x' + (number3 = ($absFromRel(this$static, this$static.nextByte()) & 255) >>> 0 , number3.toString(16)).toUpperCase());
    case -24:
      return 'CALL NEAR ' + ('0x' + (number4 = ($absFromRel16(this$static, $nextWord_0(this$static)) & $intern_0) >>> 0 , number4.toString(16)).toUpperCase());
    case -23:
      return 'JMP NEAR ' + ('0x' + (number5 = ($absFromRel16(this$static, $nextWord_0(this$static)) & $intern_0) >>> 0 , number5.toString(16)).toUpperCase());
    case -22:
      return 'JMP FAR ' + ('0x' + (number6 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number6.toString(16)).toUpperCase()) + ':' + ('0x' + (number7 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number7.toString(16)).toUpperCase());
    case -21:
      return 'JMP SHORT ' + ('0x' + (number = ($absFromRel(this$static, this$static.nextByte()) & 255) >>> 0 , number.toString(16)).toUpperCase());
    case -28:
    case -27:
    case -26:
    case -25:
    case -20:
    case -19:
    case -18:
    case -17:
      throw toJs(new Disassembler$DisassemblerException);
    default:throw toJs(new RuntimeException);
  }
}

$opcodeEX_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeEX';
function $opcodeFX_0(this$static, opcode){
  var nextOpcode, number;
  switch (opcode) {
    case -14:
      nextOpcode = this$static.nextByte();
      switch (nextOpcode) {
        case -90:
          return 'REPNZ CMPSB';
        case -89:
          return 'REPNZ CMPSW';
        case -82:
          return 'REPNZ SCASB';
        case -81:
          return 'REPNZ SCASW';
        default:throw toJs(new Disassembler$DisassemblerException);
      }

    case -13:
      nextOpcode = this$static.nextByte();
      switch (nextOpcode) {
        case -92:
          return 'REP MOVSB';
        case -91:
          return 'REP MOVSW';
        case -90:
          return 'REP CMPSB';
        case -89:
          return 'REP CMPSW';
        case -86:
          return 'REP STOSB';
        case -85:
          return 'REP STOSW';
        case -84:
          return 'REP LODSB';
        case -83:
          return 'REP LODSW';
        case -82:
          return 'REP SCASB';
        case -81:
          return 'REP SCASW';
        default:throw toJs(new Disassembler$DisassemblerException);
      }

    case -11:
      return 'CMC';
    case -10:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'TEST ' + $getMem8_0(this$static) + ', ' + ('0x' + (number = (this$static.nextByte() & 255) >>> 0 , number.toString(16)).toUpperCase());
        case 2:
          return 'NOT ' + $getMem8_0(this$static);
        case 3:
          return 'NEG ' + $getMem8_0(this$static);
        case 4:
          return 'MUL ' + $getMem8_0(this$static);
        case 6:
          return 'DIV ' + $getMem8_0(this$static);
        case 1:
        case 5:
        case 7:
          throw toJs(new Disassembler$DisassemblerException);
        default:throw toJs(new RuntimeException);
      }

    case -9:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'TEST ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase());
        case 2:
          return 'NOT ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 3:
          return 'NEG ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 4:
          return 'MUL ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 6:
          return 'DIV ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 1:
        case 5:
        case 7:
          throw toJs(new Disassembler$DisassemblerException);
        default:throw toJs(new RuntimeException);
      }

    case -8:
      return 'CLC';
    case -7:
      return 'STC';
    case -6:
      return 'CLI';
    case -5:
      return 'STI';
    case -4:
      return 'CLD';
    case -3:
      return 'STD';
    case -2:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'INC ' + $getMem8_0(this$static);
        case 1:
          return 'DEC ' + $getMem8_0(this$static);
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          throw toJs(new Disassembler$DisassemblerException);
        default:throw toJs(new RuntimeException);
      }

    case -1:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'INC ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 1:
          return 'DEC ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 2:
          return 'CALL NEAR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 3:
          if (this$static.mode_0 == 3)
            throw toJs(new Disassembler$DisassemblerException);
          else 
            return 'CALL FAR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 4:
          return 'JMP NEAR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 5:
          if (this$static.mode_0 == 3)
            throw toJs(new Disassembler$DisassemblerException);
          else 
            return 'JMP FAR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 6:
          return 'PUSH ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 7:
          throw toJs(new Disassembler$DisassemblerException);
        default:throw toJs(new RuntimeException);
      }

    case -16:
    case -15:
    case -12:
      throw toJs(new Disassembler$DisassemblerException);
    default:throw toJs(new RuntimeException);
  }
}

$opcodeFX_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeFX';
function $reset_0(this$static, offset, endOffset){
  this$static.pointer = offset;
  this$static.startOffset = offset;
  this$static.progStartOffset = offset;
  this$static.endOffset = endOffset;
}

$reset_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$reset';
function $resetIndirect(this$static){
  var modeByte;
  modeByte = this$static.nextByte();
  this$static.mode_0 = (modeByte >> 6 & 3) << 24 >> 24;
  this$static.regIndex = (modeByte >> 3 & 7) << 24 >> 24;
  this$static.memIndex = (modeByte & 7) << 24 >> 24;
}

$resetIndirect.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$resetIndirect';
function $toWord(b1, b2){
  return ((b2 & 255) << 16 >> 16 << 8 | (b1 & 255) << 16 >> 16) << 16 >> 16;
}

$toWord.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$toWord';
function Disassembler(offset, endOffset){
  $reset_0(this, offset, endOffset);
}

Disassembler.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.Disassembler';
defineClass(107, 1, {});
_.endOffset = 0;
_.memIndex = 0;
_.mode_0 = 0;
_.pointer = 0;
_.progStartOffset = 0;
_.regIndex = 0;
_.startOffset = 0;
var Lil_co_codeguru_corewars8086_utils_Disassembler_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler', 107);
function Disassembler$ArrDisassembler(memory, endOffset){
  Disassembler.call(this, 0, endOffset);
  this.bytes = memory;
}

Disassembler$ArrDisassembler.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$ArrDisassembler.Disassembler$ArrDisassembler';
defineClass(108, 107, {}, Disassembler$ArrDisassembler);
_.getByte = function getByte(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  return this.bytes[this.pointer];
}
;
_.getByte.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$ArrDisassembler.getByte';
_.nextByte = function nextByte(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  ++this.pointer;
  return this.bytes[this.pointer - 1];
}
;
_.nextByte.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$ArrDisassembler.nextByte';
var Lil_co_codeguru_corewars8086_utils_Disassembler$ArrDisassembler_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/ArrDisassembler', 108);
function Disassembler$DisassemblerException(){
  Exception.call(this);
}

Disassembler$DisassemblerException.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$DisassemblerException.Disassembler$DisassemblerException';
defineClass(9, 7, {9:1, 3:1, 7:1, 8:1}, Disassembler$DisassemblerException);
var Lil_co_codeguru_corewars8086_utils_Disassembler$DisassemblerException_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/DisassemblerException', 9);
function Disassembler$DisassemblerLengthException(){
  Disassembler$DisassemblerException.call(this);
}

Disassembler$DisassemblerLengthException.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$DisassemblerLengthException.Disassembler$DisassemblerLengthException';
defineClass(53, 9, {9:1, 53:1, 3:1, 7:1, 8:1}, Disassembler$DisassemblerLengthException);
var Lil_co_codeguru_corewars8086_utils_Disassembler$DisassemblerLengthException_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/DisassemblerLengthException', 53);
function Disassembler$NArrDisassembler(memory, offset, endOffset){
  Disassembler.call(this, offset, endOffset);
  this.bytes = memory;
}

Disassembler$NArrDisassembler.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$NArrDisassembler.Disassembler$NArrDisassembler';
defineClass(199, 107, {}, Disassembler$NArrDisassembler);
_.getByte = function getByte_0(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  return this.bytes[this.pointer];
}
;
_.getByte.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$NArrDisassembler.getByte';
_.nextByte = function nextByte_0(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  ++this.pointer;
  return this.bytes[this.pointer - 1];
}
;
_.nextByte.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$NArrDisassembler.nextByte';
var Lil_co_codeguru_corewars8086_utils_Disassembler$NArrDisassembler_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/NArrDisassembler', 199);
function $$init_21(this$static){
}

$$init_21.displayName = 'il.co.codeguru.corewars8086.war.Competition.$$init';
function $addCompetitionEventListener(this$static, lis){
  $add(this$static.competitionEventCaster, lis);
}

$addCompetitionEventListener.displayName = 'il.co.codeguru.corewars8086.war.Competition.$addCompetitionEventListener';
function $addMemoryEventLister(this$static, lis){
  $add(this$static.memoryEventCaster, lis);
}

$addMemoryEventLister.displayName = 'il.co.codeguru.corewars8086.war.Competition.$addMemoryEventLister';
function $continueRun(this$static){
  var needMore, stepsCount, wasStartPaused;
  if (this$static.globalPause)
    return false;
  if (this$static.compState.abort) {
    console.log('Abort');
    $doneWar(this$static);
    $doneCompetition(this$static);
    return false;
  }
  if (this$static.compState.state == 1) {
    if (this$static.compState.warIndex < this$static.warsPerCombination) {
      $startWar(this$static, $createGroupList(this$static.warriorRepository, $next(this$static.competitionIterator)));
      this$static.compState.state = 2;
      wasStartPaused = this$static.compState.startPaused;
      this$static.compState.startPaused = false;
      return !wasStartPaused;
    }
     else {
      $doneCompetition(this$static);
      return false;
    }
  }
   else if (this$static.compState.state == 2) {
    needMore = 1;
    if (this$static.compState.isInDebugger) {
      stepsCount = 1;
      if (!this$static.currentWar.isSingleRound) {
        if (this$static.speed_0 > 1)
          stepsCount = this$static.speed_0;
        else if (this$static.speed_0 < 0) {
          if (this$static.compState.waitedFrames > 0) {
            --this$static.compState.waitedFrames;
            stepsCount = 0;
          }
           else {
            this$static.compState.waitedFrames = -this$static.speed_0;
            stepsCount = 1;
          }
        }
      }
      if (stepsCount > 0) {
        this$static.competitionEventListener = this$static.competitionEventCaster.competeProxy;
        this$static.memoryEventListener = this$static.memoryEventCaster.competeProxy;
        while (needMore == 1 && stepsCount > 1) {
          needMore = $runRound(this$static);
          --stepsCount;
        }
        this$static.competitionEventListener = this$static.competitionEventCaster.debugProxy;
        this$static.memoryEventListener = this$static.memoryEventCaster.debugProxy;
        needMore == 1 && (needMore = $runRound(this$static));
      }
    }
     else {
      do {
        needMore = $runRound(this$static);
      }
       while (needMore == 1);
    }
    if (this$static.compState.isInDebugger && this$static.currentWar.m_hasEnded && this$static.currentWar.m_numWarriorsAlive == 0) {
      this$static.competitionEventListener.onNoneAlive();
      return false;
    }
    if (needMore == 0) {
      this$static.competitionEventListener.onPaused();
      return false;
    }
     else if (needMore == -1) {
      $doneWar(this$static);
      if (!this$static.compState.isInDebugger) {
        this$static.compState.state = 1;
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

$continueRun.displayName = 'il.co.codeguru.corewars8086.war.Competition.$continueRun';
function $doneCompetition(this$static){
  var elapsed;
  this$static.competitionEventListener.onCompetitionEnd();
  elapsed = ($clinit_System() , sub_1(fromDouble_0(Date.now()), this$static.compState.startTime));
  log_0('Total time=' + ('' + toDouble_0(elapsed) / 1000));
  this$static.compState = null;
}

$doneCompetition.displayName = 'il.co.codeguru.corewars8086.war.Competition.$doneCompetition';
function $doneWar(this$static){
  var names, numAlive;
  if (!this$static.currentWar)
    return;
  this$static.competitionEventListener.onRound(this$static.compState.round_0);
  this$static.seed = add_1(this$static.seed, 1);
  numAlive = this$static.currentWar.m_numWarriorsAlive;
  names = $getRemainingWarriorNames(this$static.currentWar);
  if (numAlive == 1) {
    this$static.competitionEventListener.onWarEnd(0, names, this$static.compState.isInDebugger);
    $updateScores(this$static.currentWar, this$static.warriorRepository);
  }
   else if (this$static.compState.round_0 == 200000) {
    this$static.competitionEventListener.onWarEnd(1, names, this$static.compState.isInDebugger);
    $updateScores(this$static.currentWar, this$static.warriorRepository);
  }
   else {
    this$static.competitionEventListener.onWarEnd(2, names, this$static.compState.isInDebugger);
  }
  this$static.currentWar.m_hasEnded = true;
  ++this$static.compState.warIndex;
}

$doneWar.displayName = 'il.co.codeguru.corewars8086.war.Competition.$doneWar';
function $getCurrentWarrior_0(this$static){
  return this$static.currentWar?this$static.currentWar.m_currentWarrior:-1;
}

$getCurrentWarrior_0.displayName = 'il.co.codeguru.corewars8086.war.Competition.$getCurrentWarrior';
function $getTotalNumberOfWars(this$static){
  return toInt_0($getNumberOfItems(this$static.competitionIterator)) * this$static.warsPerCombination;
}

$getTotalNumberOfWars.displayName = 'il.co.codeguru.corewars8086.war.Competition.$getTotalNumberOfWars';
function $runCompetition(this$static, warsPerCombination, warriorsPerGroup, startPaused, isInDebugger){
  this$static.warsPerCombination = warsPerCombination;
  this$static.competitionIterator = new CompetitionIterator(this$static.warriorRepository.warriorGroups.array.length, warriorsPerGroup, this$static.seed);
  this$static.competitionEventListener.onCompetitionStart();
  console.log('runCompetition ' + ('' + warsPerCombination) + ' wars');
  this$static.compState = new Competition$CompState;
  this$static.compState.warIndex = 0;
  this$static.compState.state = 1;
  this$static.compState.startPaused = startPaused;
  this$static.compState.isInDebugger = isInDebugger;
  this$static.compState.startTime = ($clinit_System() , fromDouble_0(Date.now()));
  isInDebugger?(this$static.competitionEventListener = this$static.competitionEventCaster.debugProxy , this$static.memoryEventListener = this$static.memoryEventCaster.debugProxy):(this$static.competitionEventListener = this$static.competitionEventCaster.competeProxy , this$static.memoryEventListener = this$static.memoryEventCaster.competeProxy);
}

$runCompetition.displayName = 'il.co.codeguru.corewars8086.war.Competition.$runCompetition';
function $runRound(this$static){
  var atBreakpoint;
  this$static.competitionEventListener.onRound(this$static.compState.round_0);
  atBreakpoint = $nextRound(this$static.currentWar, this$static.compState.round_0);
  ++this$static.compState.round_0;
  this$static.competitionEventListener.onEndRound();
  if (!this$static.currentWar.m_hasEnded && this$static.currentWar.m_numWarriorsAlive < 2) {
    this$static.currentWar.isPaused = true;
    return -1;
  }
  (this$static.currentWar.isSingleRound || atBreakpoint) && (this$static.currentWar.isPaused = true);
  if (this$static.currentWar.isPaused) {
    return 0;
  }
  if (this$static.compState.round_0 >= 200000) {
    this$static.currentWar.isPaused = true;
    return -1;
  }
  return 1;
}

$runRound.displayName = 'il.co.codeguru.corewars8086.war.Competition.$runRound';
function $setAbort(this$static){
  if (!this$static.compState)
    return;
  this$static.compState.abort = true;
}

$setAbort.displayName = 'il.co.codeguru.corewars8086.war.Competition.$setAbort';
function $setSeed(this$static, seed){
  this$static.seed = seed;
}

$setSeed.displayName = 'il.co.codeguru.corewars8086.war.Competition.$setSeed';
function $setSpeed(this$static, speed){
  this$static.speed_0 = speed;
}

$setSpeed.displayName = 'il.co.codeguru.corewars8086.war.Competition.$setSpeed';
function $startWar(this$static, warriorGroups){
  this$static.currentWar = new War(this$static.memoryEventListener, this$static.competitionEventListener, this$static.compState.startPaused);
  $setSeed_0(this$static.currentWar, this$static.seed);
  this$static.competitionEventListener.onWarPreStartClear();
  $loadWarriorGroups(this$static.currentWar, warriorGroups);
  this$static.competitionEventListener.onWarStart();
  this$static.compState.round_0 = 0;
}

$startWar.displayName = 'il.co.codeguru.corewars8086.war.Competition.$startWar';
function Competition(){
  this.warriorRepository = new WarriorRepository;
  this.competitionEventCaster = new EventMulticasterCompetition;
  this.competitionEventListener = this.competitionEventCaster.debugProxy;
  this.memoryEventCaster = new EventMulticasterMemory;
  this.memoryEventListener = this.memoryEventCaster.debugProxy;
  this.speed_0 = 0;
}

Competition.displayName = 'il.co.codeguru.corewars8086.war.Competition.Competition';
defineClass(145, 1, {}, Competition);
_.globalPause = false;
_.seed = 0;
_.speed_0 = 0;
_.warsPerCombination = 20;
var Lil_co_codeguru_corewars8086_war_Competition_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'Competition', 145);
function $$init_22(this$static){
}

$$init_22.displayName = 'il.co.codeguru.corewars8086.war.Competition$CompState.$$init';
function Competition$CompState(){
}

Competition$CompState.displayName = 'il.co.codeguru.corewars8086.war.Competition$CompState.Competition$CompState';
defineClass(146, 1, {}, Competition$CompState);
_.abort = false;
_.isInDebugger = false;
_.round_0 = 0;
_.startPaused = false;
_.startTime = 0;
_.state = 0;
_.waitedFrames = 0;
_.warIndex = 0;
var Lil_co_codeguru_corewars8086_war_Competition$CompState_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'Competition/CompState', 146);
function $getNumberOfItems(this$static){
  return binomialCoefficient(this$static.numItems, this$static.counters.length);
}

$getNumberOfItems.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.$getNumberOfItems';
function $next(this$static){
  return $nextPermutation(this$static.rnd, this$static.numItems, this$static.groupSize);
}

$next.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.$next';
function CompetitionIterator(numItems, groupSize, seed){
  this.numItems = numItems;
  this.groupSize = groupSize;
  this.counters = initUnidimensionalArray(I_classLit, $intern_13, 10, groupSize, 15, 1);
  this.rnd = new RandomDataGenerator;
  $initRan(this.rnd, seed);
}

CompetitionIterator.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.CompetitionIterator';
defineClass(201, 1, {}, CompetitionIterator);
_.next_0 = function next(){
  return $nextPermutation(this.rnd, this.numItems, this.groupSize);
}
;
_.next_0.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.next';
_.hasNext_0 = function hasNext(){
  return this.counters[0] != -1;
}
;
_.hasNext_0.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.hasNext';
_.groupSize = 0;
_.numItems = 0;
var Lil_co_codeguru_corewars8086_war_CompetitionIterator_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'CompetitionIterator', 201);
function $$init_23(this$static){
  this$static.rand = new Random;
}

$$init_23.displayName = 'il.co.codeguru.corewars8086.war.War.$$init';
function $allocateCoreMemory(this$static, size_0){
  var allocatedMemory;
  if (size_0 % 16 != 0) {
    throw toJs(new Exception);
  }
  allocatedMemory = new RealModeAddress(this$static.m_nextFreeAddress);
  this$static.m_nextFreeAddress += size_0;
  return allocatedMemory;
}

$allocateCoreMemory.displayName = 'il.co.codeguru.corewars8086.war.War.$allocateCoreMemory';
function $getLoadOffset(this$static, warriorSize){
  var found, i, loadAddress, numTries, otherEnd, otherLoadAddress, otherSize, otherStart;
  loadAddress = 0;
  found = false;
  numTries = 0;
  while (!found && numTries < 100) {
    ++numTries;
    loadAddress = $nextInt(this$static.rand, $intern_20);
    found = true;
    loadAddress < $intern_16 && (found = false);
    loadAddress + warriorSize > 64512 && (found = false);
    if (m_loadAddrChecker) {
      if (!$checkOverlap(m_loadAddrChecker, loadAddress, warriorSize)) {
        found = false;
        console.log('overlap with fixed!');
        continue;
      }
    }
    for (i = 0; i < this$static.m_numWarriors; ++i) {
      otherLoadAddress = this$static.m_warriors[i].m_loadAddress.m_offset & $intern_0;
      otherSize = this$static.m_warriors[i].m_codeSize;
      otherStart = otherLoadAddress - $intern_16;
      otherEnd = otherLoadAddress + otherSize + $intern_16;
      if (loadAddress + warriorSize >= otherStart && loadAddress < otherEnd) {
        found = false;
        console.log('overlap with loaded!');
        break;
      }
    }
  }
  if (!found) {
    throw toJs(new Exception);
  }
  return loadAddress << 16 >> 16;
}

$getLoadOffset.displayName = 'il.co.codeguru.corewars8086.war.War.$getLoadOffset';
function $getRemainingWarriorNames(this$static){
  var i, names, warrior;
  names = '';
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    warrior = this$static.m_warriors[i];
    warrior.m_isAlive && (names == ''?(names = warrior.m_name):(names = names + ', ' + warrior.m_name));
  }
  return names;
}

$getRemainingWarriorNames.displayName = 'il.co.codeguru.corewars8086.war.War.$getRemainingWarriorNames';
function $getWarrior(this$static, index_0){
  return this$static.m_warriors[index_0];
}

$getWarrior.displayName = 'il.co.codeguru.corewars8086.war.War.$getWarrior';
function $getWarriorByLabel(this$static, label_0){
  var i, w;
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    w = this$static.m_warriors[i];
    if ($equals_4(w.m_label, label_0)) {
      return w;
    }
  }
  return null;
}

$getWarriorByLabel.displayName = 'il.co.codeguru.corewars8086.war.War.$getWarriorByLabel';
function $loadWarriorGroup(this$static, warriorGroup){
  var col, groupSharedMemory, i, initialStack, loadAddress, loadOffset, offset, stackMemory, tmp, w, warrior, warriorData, warriorName, warriors;
  warriors = warriorGroup.warriorData;
  groupSharedMemory = $allocateCoreMemory(this$static, $intern_16);
  for (i = 0; i < warriors.array.length; ++i) {
    warrior = (checkCriticalElementIndex(i, warriors.array.length) , castTo(warriors.array[i], 64));
    warriorName = warrior.m_name;
    warriorData = warrior.m_code;
    warrior.m_debugFixedLoadAddress < 0?(loadOffset = $getLoadOffset(this$static, warriorData.length)):(loadOffset = warrior.m_debugFixedLoadAddress << 16 >> 16);
    loadAddress = new RealModeAddress_0(4096, loadOffset);
    stackMemory = $allocateCoreMemory(this$static, $intern_17);
    initialStack = new RealModeAddress_0(stackMemory.m_segment, $intern_17);
    w = new Warrior(warriorName, warrior.m_label, warriorData.length, this$static.m_core, loadAddress, initialStack, groupSharedMemory, this$static.m_numWarriors);
    this$static.m_warriors[this$static.m_numWarriors++] = w;
    this$static.m_core.listener.onWriteState(1);
    for (offset = 0; offset < warriorData.length; ++offset) {
      tmp = new RealModeAddress_0(4096, loadOffset + offset << 16 >> 16);
      $writeByte(this$static.m_core, tmp, warriorData[offset]);
    }
    if (s_instance.m_isBattleShown) {
      col = $toString_1($getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), this$static.m_currentWarrior, false));
      $setButtonColor(col, warrior.m_label);
    }
    this$static.m_core.listener.onWriteState(2);
    ++this$static.m_numWarriorsAlive;
    ++this$static.m_currentWarrior;
    this$static.m_warListener.onWarriorBirth(w);
  }
}

$loadWarriorGroup.displayName = 'il.co.codeguru.corewars8086.war.War.$loadWarriorGroup';
function $loadWarriorGroups(this$static, warriorGroups){
  var groupsLeftToLoad, i, randomInt;
  this$static.m_currentWarrior = 0;
  groupsLeftToLoad = new ArrayList;
  for (i = 0; i < warriorGroups.length; ++i)
    $add_0(groupsLeftToLoad, warriorGroups[i]);
  while (groupsLeftToLoad.array.length > 0) {
    randomInt = $nextInt(this$static.rand, groupsLeftToLoad.array.length);
    $loadWarriorGroup(this$static, (checkCriticalElementIndex(randomInt, groupsLeftToLoad.array.length) , castTo(groupsLeftToLoad.array[randomInt], 28)));
    checkCriticalElementIndex(randomInt, groupsLeftToLoad.array.length);
    removeFrom(groupsLeftToLoad.array, randomInt);
  }
  this$static.m_currentWarrior = -1;
}

$loadWarriorGroups.displayName = 'il.co.codeguru.corewars8086.war.War.$loadWarriorGroups';
function $nextRound(this$static, round_0){
  var atBreakpoint, e, i, savedIp, warrior;
  atBreakpoint = false;
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    warrior = this$static.m_warriors[i];
    this$static.m_currentWarrior = i;
    if (warrior.m_isAlive) {
      savedIp = warrior.m_state.m_ip;
      try {
        $nextOpcode(warrior.m_cpu);
        atBreakpoint = atBreakpoint | (!!this$static.m_breakpointCheck && this$static.m_currentWarrior == this$static.m_uiWarriorIndex && $shouldBreak(this$static.m_breakpointCheck, warrior.m_state));
        $updateWarriorEnergy(warrior, round_0);
        if ($shouldRunExtraOpcode(this$static, warrior)) {
          $nextOpcode(warrior.m_cpu);
          atBreakpoint = atBreakpoint | (!!this$static.m_breakpointCheck && this$static.m_currentWarrior == this$static.m_uiWarriorIndex && $shouldBreak(this$static.m_breakpointCheck, warrior.m_state));
        }
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 26)) {
          this$static.m_warListener.onWarriorDeath(warrior, 'CPU exception');
          warrior.m_isAlive = false;
          $setIP(warrior.m_state, savedIp);
          --this$static.m_numWarriorsAlive;
        }
         else if (instanceOf($e0, 54)) {
          e = $e0;
          this$static.m_warListener.onWarriorDeath(warrior, 'memory exception: ' + e.detailMessage);
          warrior.m_isAlive = false;
          $setIP(warrior.m_state, savedIp);
          --this$static.m_numWarriorsAlive;
        }
         else 
          throw toJs($e0);
      }
    }
  }
  this$static.m_currentWarrior = -1;
  return atBreakpoint;
}

$nextRound.displayName = 'il.co.codeguru.corewars8086.war.War.$nextRound';
function $resume(this$static){
  this$static.isPaused = false;
  this$static.isSingleRound = false;
}

$resume.displayName = 'il.co.codeguru.corewars8086.war.War.$resume';
function $runSingleRound(this$static){
  this$static.isPaused = false;
  this$static.isSingleRound = true;
}

$runSingleRound.displayName = 'il.co.codeguru.corewars8086.war.War.$runSingleRound';
function $setBreakpointCheck(this$static, brc){
  this$static.m_breakpointCheck = brc;
}

$setBreakpointCheck.displayName = 'il.co.codeguru.corewars8086.war.War.$setBreakpointCheck';
function $setSeed_0(this$static, seed){
  $setSeed_2(this$static.rand, seed);
}

$setSeed_0.displayName = 'il.co.codeguru.corewars8086.war.War.$setSeed';
function $shouldRunExtraOpcode(this$static, warrior){
  var energy, enr, speed;
  enr = warrior.m_state.m_energy;
  if (enr == 0)
    return false;
  energy = enr & $intern_0;
  speed = energy == 0?0:$wnd.Math.min(16, 1 + round_int($wnd.Math.log(energy) / $wnd.Math.log(2)));
  return $nextInt(this$static.rand, 16) < speed;
}

$shouldRunExtraOpcode.displayName = 'il.co.codeguru.corewars8086.war.War.$shouldRunExtraOpcode';
function $updateScores(this$static, repository){
  var i, score, warrior;
  score = 1 / this$static.m_numWarriorsAlive;
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    warrior = this$static.m_warriors[i];
    warrior.m_isAlive && $addScore(repository, warrior.m_name, score);
  }
}

$updateScores.displayName = 'il.co.codeguru.corewars8086.war.War.$updateScores';
function $updateWarriorEnergy(warrior, round_0){
  var energy;
  if (round_0 % 5 == 0) {
    energy = warrior.m_state.m_energy & $intern_0;
    energy > 0 && ($setEnergy(warrior.m_state, energy - 1 << 16 >> 16) , undefined);
  }
}

$updateWarriorEnergy.displayName = 'il.co.codeguru.corewars8086.war.War.$updateWarriorEnergy';
function War(memoryListener, warListener, startPaused){
  var offset, tmp;
  this.rand = new Random;
  this.isPaused = startPaused;
  this.m_warListener = warListener;
  this.m_warriors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_war_Warrior_2_classLit, $intern_2, 83, 20, 0, 1);
  this.m_numWarriors = 0;
  this.m_numWarriorsAlive = 0;
  this.m_core = new RealModeMemoryImpl;
  this.m_nextFreeAddress = 131072;
  for (offset = 0; offset < $intern_20; ++offset) {
    tmp = new RealModeAddress_0(4096, offset << 16 >> 16);
    $writeByte(this.m_core, tmp, -52);
  }
  this.isSingleRound = false;
  $setListener(this.m_core, memoryListener);
}

War.displayName = 'il.co.codeguru.corewars8086.war.War.War';
defineClass(178, 1, {}, War);
_.isPaused = false;
_.isSingleRound = false;
_.m_breakpointCheck = null;
_.m_currentWarrior = 0;
_.m_hasEnded = false;
_.m_nextFreeAddress = 0;
_.m_numWarriors = 0;
_.m_numWarriorsAlive = 0;
_.m_uiWarriorIndex = -1;
var Lil_co_codeguru_corewars8086_war_War_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'War', 178);
function $initializeCpuState(this$static, loadAddress, initialStack, groupSharedMemory){
  $setAX(this$static.m_state, loadAddress.m_offset);
  $setBX(this$static.m_state, 0);
  $setCX(this$static.m_state, 0);
  $setDX(this$static.m_state, 0);
  $setDS(this$static.m_state, loadAddress.m_segment);
  $setES(this$static.m_state, groupSharedMemory.m_segment);
  $setSI(this$static.m_state, 0);
  $setDI(this$static.m_state, 0);
  $setSS(this$static.m_state, initialStack.m_segment);
  $setBP(this$static.m_state, 0);
  $setSP(this$static.m_state, initialStack.m_offset);
  $setCS(this$static.m_state, loadAddress.m_segment);
  $setIP(this$static.m_state, loadAddress.m_offset);
  $setFlags(this$static.m_state, 0);
  $setEnergy(this$static.m_state, 0);
  $setBomb1Count(this$static.m_state, 2);
  $setBomb2Count(this$static.m_state, 1);
}

$initializeCpuState.displayName = 'il.co.codeguru.corewars8086.war.Warrior.$initializeCpuState';
function $setEnergy_0(this$static, value_0){
  $setEnergy(this$static.m_state, value_0);
}

$setEnergy_0.displayName = 'il.co.codeguru.corewars8086.war.Warrior.$setEnergy';
function Warrior(name_0, label_0, codeSize, core, loadAddress, initialStack, groupSharedMemory, myIndex){
  var executeAccessRegions, highestCoreAddress, highestGroupSharedMemoryAddress, lowestCoreAddress, lowestStackAddress, readAccessRegions, writeAccessRegions;
  this.m_label = label_0;
  this.m_name = name_0;
  this.m_codeSize = codeSize;
  this.m_loadAddress = loadAddress;
  this.m_myIndex = myIndex;
  this.m_state = new CpuState;
  $setAX(this.m_state, loadAddress.m_offset);
  this.m_state.m_bx = 0;
  this.m_state.m_cx = 0;
  this.m_state.m_dx = 0;
  $setDS(this.m_state, loadAddress.m_segment);
  $setES(this.m_state, groupSharedMemory.m_segment);
  this.m_state.m_si = 0;
  this.m_state.m_di = 0;
  $setSS(this.m_state, initialStack.m_segment);
  this.m_state.m_bp = 0;
  $setSP(this.m_state, initialStack.m_offset);
  $setCS(this.m_state, loadAddress.m_segment);
  $setIP(this.m_state, loadAddress.m_offset);
  this.m_state.m_flags = 0;
  this.m_state.m_energy = 0;
  this.m_state.m_bomb1count = 2;
  this.m_state.m_bomb2count = 1;
  lowestStackAddress = new RealModeAddress_0(initialStack.m_segment, 0);
  lowestCoreAddress = new RealModeAddress_0(loadAddress.m_segment, 0);
  highestCoreAddress = new RealModeAddress_0(loadAddress.m_segment, -1);
  highestGroupSharedMemoryAddress = new RealModeAddress_0(groupSharedMemory.m_segment, 1023);
  this.m_stackWritableRegion = new RealModeMemoryRegion_0(lowestStackAddress, initialStack);
  this.m_sharedWritableRegion = new RealModeMemoryRegion_0(groupSharedMemory, highestGroupSharedMemoryAddress);
  this.m_codeRegion = new RealModeMemoryRegion_0(lowestCoreAddress, highestCoreAddress);
  readAccessRegions = stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit, 1), $intern_2, 43, 0, [this.m_stackWritableRegion, this.m_codeRegion, this.m_sharedWritableRegion]);
  writeAccessRegions = stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit, 1), $intern_2, 43, 0, [this.m_stackWritableRegion, this.m_codeRegion, this.m_sharedWritableRegion]);
  executeAccessRegions = stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit, 1), $intern_2, 43, 0, [this.m_codeRegion]);
  this.m_memory = new RestrictedAccessRealModeMemory(core, readAccessRegions, writeAccessRegions, executeAccessRegions);
  this.m_cpu = new Cpu(this.m_state, this.m_memory);
  this.m_isAlive = true;
}

Warrior.displayName = 'il.co.codeguru.corewars8086.war.Warrior.Warrior';
defineClass(83, 1, {83:1}, Warrior);
_.m_codeSize = 0;
_.m_isAlive = false;
_.m_myIndex = 0;
var Lil_co_codeguru_corewars8086_war_Warrior_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'Warrior', 83);
function WarriorData(name_0, code_0, label_0, debugLoadAddr){
  this.m_name = name_0;
  this.m_code = code_0;
  this.m_label = label_0;
  this.m_debugFixedLoadAddress = debugLoadAddr;
}

WarriorData.displayName = 'il.co.codeguru.corewars8086.war.WarriorData.WarriorData';
defineClass(64, 1, {64:1}, WarriorData);
_.toString_0 = function toString_9(){
  return this.m_name;
}
;
_.toString_0.displayName = 'il.co.codeguru.corewars8086.war.WarriorData.toString';
_.m_debugFixedLoadAddress = 0;
var Lil_co_codeguru_corewars8086_war_WarriorData_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorData', 64);
function $addScoreToWarrior(this$static, name_0, value_0){
  var i;
  for (i = 0; i < this$static.warriorData.array.length; i++) {
    if ($equals_4(castTo($get_4(this$static.warriorData, i), 64).m_name, name_0)) {
      $set_0(this$static.scores, i, new Float(castTo($get_4(this$static.scores, i), 31).value_0 + value_0));
      break;
    }
  }
  this$static.groupScore += value_0;
  return i;
}

$addScoreToWarrior.displayName = 'il.co.codeguru.corewars8086.war.WarriorGroup.$addScoreToWarrior';
function $addWarrior(this$static, data_0){
  $add_0(this$static.warriorData, data_0);
  $add_0(this$static.scores, new Float(0));
}

$addWarrior.displayName = 'il.co.codeguru.corewars8086.war.WarriorGroup.$addWarrior';
function WarriorGroup(name_0, label_0){
  this.name_0 = name_0;
  this.label_0 = label_0;
  this.warriorData = new ArrayList;
  this.scores = new ArrayList;
}

WarriorGroup.displayName = 'il.co.codeguru.corewars8086.war.WarriorGroup.WarriorGroup';
defineClass(28, 1, {28:1}, WarriorGroup);
_.groupScore = 0;
var Lil_co_codeguru_corewars8086_war_WarriorGroup_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorGroup', 28);
function $addScore(this$static, name_0, value_0){
  var group, groupIndex, subIndex;
  groupIndex = castTo($getStringValue(this$static.warriorNameToGroup, name_0), 25);
  if (!groupIndex) {
    return;
  }
  group = castTo($get_4(this$static.warriorGroups, groupIndex.value_0), 28);
  subIndex = $addScoreToWarrior(group, name_0, value_0);
  $scoreChanged(this$static.scoreListener, name_0, value_0, groupIndex.value_0, subIndex);
}

$addScore.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.$addScore';
function $createGroupList(this$static, groupIndices){
  var groups, groupsList, i;
  groupsList = new ArrayList;
  for (i = 0; i < groupIndices.length; ++i) {
    $add_0(groupsList, castTo($get_4(this$static.warriorGroups, groupIndices[i]), 28));
  }
  !!this$static.zombieGroup && $add_0(groupsList, this$static.zombieGroup);
  groups = initUnidimensionalArray(Lil_co_codeguru_corewars8086_war_WarriorGroup_2_classLit, $intern_2, 28, groupsList.array.length, 0, 1);
  $toArray_1(groupsList, groups);
  return groups;
}

$createGroupList.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.$createGroupList';
function $readWarriorFilesFromUI(this$static, files, zombies, isInDebug){
  var bin, c, c$index, c$max, currentGroup, data_0, name_0, startAddr;
  $reset_1(this$static.warriorNameToGroup);
  this$static.warriorGroups.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  log_0('Found ' + ('' + files.length) + ' survivors, ' + ('' + zombies.length) + ' zombies');
  m_loadAddrChecker = null;
  sort_0(files, new WarriorRepository$1);
  currentGroup = null;
  for (c$index = 0 , c$max = files.length; c$index < c$max; ++c$index) {
    c = files[c$index];
    if (!c.player.isEnabled)
      continue;
    name_0 = c.name_0;
    if (name_0.length == 0) {
      console.error('All players must have a name for starting a competition');
      return false;
    }
    if (!c.lastCompileOk) {
      console.error('Player ' + name_0 + " has assembly errors, can't start competition");
      return false;
    }
    bin = c.bin;
    if (bin == null) {
      console.error('Player ' + name_0 + " does not have any code, can't start competition");
      return false;
    }
    startAddr = -1;
    if (!c.startAddrRandom && isInDebug) {
      !m_loadAddrChecker && (m_loadAddrChecker = new LoadAddrChecker(files.length + zombies.length));
      startAddr = $addCheck(m_loadAddrChecker, c.startAddress, c.bin.length, name_0);
      if (startAddr == -2)
        return false;
    }
    data_0 = new WarriorData(name_0, $truncToSize(bin), c.label_0, startAddr);
    if (c.player.wtype != ($clinit_PlayersPanel$EWarriorType() , SINGLE)) {
      if ($endsWith(c.label_0, '0')) {
        currentGroup = new WarriorGroup($substring_1(name_0, 0, name_0.length - 1), c.player.label_0);
        $add_0(currentGroup.warriorData, data_0);
        $add_0(currentGroup.scores, new Float(0));
        $putStringValue(this$static.warriorNameToGroup, name_0, valueOf_0(this$static.warriorGroups.array.length));
      }
       else if ($endsWith(c.label_0, '1')) {
        $add_0(currentGroup.warriorData, data_0);
        $add_0(currentGroup.scores, new Float(0));
        $putStringValue(this$static.warriorNameToGroup, name_0, valueOf_0(this$static.warriorGroups.array.length));
        $add_0(this$static.warriorGroups, currentGroup);
        currentGroup = null;
      }
       else {
        console.error('Unexpected suffix for warrior name. expected 1 or 2: ' + name_0);
      }
    }
     else {
      currentGroup = new WarriorGroup(name_0, c.player.label_0);
      $add_0(currentGroup.warriorData, data_0);
      $add_0(currentGroup.scores, new Float(0));
      $putStringValue(this$static.warriorNameToGroup, name_0, valueOf_0(this$static.warriorGroups.array.length));
      $add_0(this$static.warriorGroups, currentGroup);
      currentGroup = null;
    }
  }
  if (this$static.warriorGroups.array.length == 0) {
    console.error('no players to start a competition with');
    return false;
  }
  if (!$readZombiesFromUI(this$static, zombies, m_loadAddrChecker))
    return false;
  return true;
}

$readWarriorFilesFromUI.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.$readWarriorFilesFromUI';
function $readZombiesFromUI(this$static, zombieFiles, loadAddrChecker){
  var bin, c, c$index, c$max, data_0, name_0, startAddr;
  this$static.zombieGroup = null;
  if (zombieFiles.length == 0)
    return true;
  this$static.zombieGroup = new WarriorGroup('ZoMbIeS', '');
  for (c$index = 0 , c$max = zombieFiles.length; c$index < c$max; ++c$index) {
    c = zombieFiles[c$index];
    name_0 = c.name_0;
    if (name_0 == null) {
      console.error('All zombies must have a name for starting a competition');
      return false;
    }
    if (!c.lastCompileOk) {
      console.error('Zombie ' + name_0 + " has assembly errors, can't start competition");
      return false;
    }
    bin = c.bin;
    if (bin == null) {
      console.error('Zombie ' + name_0 + " does not have any code, can't start competition");
      return false;
    }
    startAddr = -1;
    if (!c.startAddrRandom) {
      startAddr = $addCheck(loadAddrChecker, c.startAddress, c.bin.length, name_0);
      if (startAddr == -2)
        return false;
    }
    data_0 = new WarriorData(name_0, $truncToSize(bin), c.label_0, startAddr);
    $addWarrior(this$static.zombieGroup, data_0);
  }
  return true;
}

$readZombiesFromUI.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.$readZombiesFromUI';
function $truncToSize(arr){
  if (arr.length > 512)
    return copyPrimitiveArray(arr, initUnidimensionalArray(B_classLit, $intern_19, 10, 512, 15, 1));
  return arr;
}

$truncToSize.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.$truncToSize';
function WarriorRepository(){
  this.warriorNameToGroup = new HashMap;
  this.warriorGroups = new ArrayList;
  this.scoreEventsCaster = new EventMulticasterScore;
  this.scoreListener = this.scoreEventsCaster.proxy;
}

WarriorRepository.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.WarriorRepository';
defineClass(143, 1, {}, WarriorRepository);
var m_loadAddrChecker;
var Lil_co_codeguru_corewars8086_war_WarriorRepository_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorRepository', 143);
function $compare(o1, o2){
  return $compareToIgnoreCase(o1.name_0, o2.name_0);
}

$compare.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository$1.$compare';
function WarriorRepository$1(){
}

WarriorRepository$1.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository$1.WarriorRepository$1';
defineClass(144, 1, {}, WarriorRepository$1);
_.compare = function compare_1(o1, o2){
  return $compare(castTo(o1, 47), castTo(o2, 47));
}
;
_.compare.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository$1.compare';
_.equals_0 = function equals_2(other){
  return this === other;
}
;
_.equals_0.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository$1.equals';
var Lil_co_codeguru_corewars8086_war_WarriorRepository$1_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorRepository/1', 144);
function $setLength(this$static){
  var oldLength;
  oldLength = this$static.string.length;
  0 < oldLength?(this$static.string = this$static.string.substr(0, 0)):0 > oldLength && (this$static.string += valueOf_2(initUnidimensionalArray(C_classLit, $intern_13, 10, -oldLength, 15, 1)));
}

$setLength.displayName = 'java.lang.AbstractStringBuilder.$setLength';
function $substring(this$static, begin){
  return $substring_0(this$static.string, begin);
}

$substring.displayName = 'java.lang.AbstractStringBuilder.$substring';
function $toString_2(this$static){
  return this$static.string;
}

$toString_2.displayName = 'java.lang.AbstractStringBuilder.$toString';
function AbstractStringBuilder(string){
  this.string = string;
}

AbstractStringBuilder.displayName = 'java.lang.AbstractStringBuilder.AbstractStringBuilder';
defineClass(77, 1, {120:1});
_.toString_0 = function toString_10(){
  return this.string;
}
;
_.toString_0.displayName = 'java.lang.AbstractStringBuilder.toString';
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 77);
function ArithmeticException(){
  RuntimeException.call(this);
}

ArithmeticException.displayName = 'java.lang.ArithmeticException.ArithmeticException';
function ArithmeticException_0(){
  RuntimeException_1.call(this, 'divide by zero');
}

ArithmeticException_0.displayName = 'java.lang.ArithmeticException.ArithmeticException';
defineClass(78, 4, $intern_4, ArithmeticException_0);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 78);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

IndexOutOfBoundsException.displayName = 'java.lang.IndexOutOfBoundsException.IndexOutOfBoundsException';
function IndexOutOfBoundsException_0(message){
  RuntimeException_1.call(this, message);
}

IndexOutOfBoundsException_0.displayName = 'java.lang.IndexOutOfBoundsException.IndexOutOfBoundsException';
defineClass(61, 4, $intern_4, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 61);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

ArrayIndexOutOfBoundsException.displayName = 'java.lang.ArrayIndexOutOfBoundsException.ArrayIndexOutOfBoundsException';
defineClass(214, 61, $intern_4, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 214);
function ArrayStoreException(){
  RuntimeException.call(this);
}

ArrayStoreException.displayName = 'java.lang.ArrayStoreException.ArrayStoreException';
function ArrayStoreException_0(message){
  RuntimeException_1.call(this, message);
}

ArrayStoreException_0.displayName = 'java.lang.ArrayStoreException.ArrayStoreException';
defineClass(96, 4, $intern_4, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 96);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

$clinit_Boolean.displayName = 'java.lang.Boolean.$clinit';
function $compareTo_0(this$static, b){
  return compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

$compareTo_0.displayName = 'java.lang.Boolean.$compareTo';
function $compareTo_1(this$static, b){
  return $compareTo_0(this$static, (checkCriticalType(b == null || instanceOfBoolean(b)) , b));
}

$compareTo_1.displayName = 'java.lang.Boolean.$compareTo';
function $equals_2(this$static, o){
  return checkCriticalNotNull(this$static) , this$static === o;
}

$equals_2.displayName = 'java.lang.Boolean.$equals';
function $getClass_2(){
  return Ljava_lang_Boolean_2_classLit;
}

$getClass_2.displayName = 'java.lang.Boolean.$getClass';
function $hashCode_1(this$static){
  return (checkCriticalNotNull(this$static) , this$static)?1231:1237;
}

$hashCode_1.displayName = 'java.lang.Boolean.$hashCode';
function compare_2(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

compare_2.displayName = 'java.lang.Boolean.compare';
function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?$compareTo_8(this$static, castToString(other)):instanceOfDouble(this$static)?$compareTo_2(this$static, castToDouble(other)):instanceOfBoolean(this$static)?$compareTo_0(this$static, (checkCriticalType(other == null || instanceOfBoolean(other)) , other)):this$static.compareTo(other);
}

compareTo_Ljava_lang_Object__I__devirtual$.displayName = 'java.lang.Boolean.compareTo_Ljava_lang_Object__I__devirtual$';
booleanCastMap = {3:1, 123:1, 35:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 123);
function digit(c, radix){
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + $wnd.Math.min(radix, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < radix + 97 - 10) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < radix + 65 - 10) {
    return c - 65 + 10;
  }
  return -1;
}

digit.displayName = 'java.lang.Character.digit';
function ClassCastException(){
  RuntimeException_1.call(this, null);
}

ClassCastException.displayName = 'java.lang.ClassCastException.ClassCastException';
defineClass(125, 4, $intern_4, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 125);
function __parseAndValidateInt(s, radix){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  if (radix < 2 || radix > 36) {
    throw toJs(new NumberFormatException('radix ' + radix + ' out of range'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 45 || (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 43))?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i)), radix) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, radix);
  isTooLow = toReturn < $intern_26;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_1) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

__parseAndValidateInt.displayName = 'java.lang.Number.__parseAndValidateInt';
function __parseAndValidateLong(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0));
    if (c == 45 || c == 43) {
      s = s.substr(1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
  }
  while (s.length > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 48)) {
    s = s.substr(1);
    --length_0;
  }
  if (length_0 > ($clinit_Number$__ParseLong() , maxLengthForRadix)[10]) {
    throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
  }
  for (i = 0; i < length_0; i++) {
    if (digit((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i)), 10) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
    }
  }
  toReturn = 0;
  maxDigits = maxDigitsForRadix[10];
  radixPower = maxDigitsRadixPower[10];
  minValue = neg_0(maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = -parseInt(s.substr(0, head), 10);
    s = s.substr(head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = parseInt(s.substr(0, maxDigits), 10);
    s = s.substr(maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (compare_0(toReturn, minValue) < 0) {
        throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
      }
      toReturn = mul_0(toReturn, radixPower);
    }
    toReturn = sub_1(toReturn, head);
  }
  if (compare_0(toReturn, 0) > 0) {
    throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
  }
  if (!negative) {
    toReturn = neg_0(toReturn);
    if (compare_0(toReturn, 0) < 0) {
      throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
    }
  }
  return toReturn;
}

__parseAndValidateLong.displayName = 'java.lang.Number.__parseAndValidateLong';
defineClass(60, 1, {3:1, 60:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 60);
function $compareTo_2(this$static, b){
  return compare_3((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

$compareTo_2.displayName = 'java.lang.Double.$compareTo';
function $compareTo_3(this$static, b){
  return $compareTo_2(this$static, castToDouble(b));
}

$compareTo_3.displayName = 'java.lang.Double.$compareTo';
function $doubleValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

$doubleValue.displayName = 'java.lang.Double.$doubleValue';
function $equals_3(this$static, o){
  return checkCriticalNotNull(this$static) , this$static === o;
}

$equals_3.displayName = 'java.lang.Double.$equals';
function $getClass_3(){
  return Ljava_lang_Double_2_classLit;
}

$getClass_3.displayName = 'java.lang.Double.$getClass';
function $hashCode_2(this$static){
  return round_int((checkCriticalNotNull(this$static) , this$static));
}

$hashCode_2.displayName = 'java.lang.Double.$hashCode';
function compare_3(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

compare_3.displayName = 'java.lang.Double.compare';
doubleCastMap = {3:1, 35:1, 124:1, 60:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 124);
function $compareTo_4(this$static, b){
  return compare_3(this$static.value_0, b.value_0);
}

$compareTo_4.displayName = 'java.lang.Float.$compareTo';
function Float(value_0){
  this.value_0 = value_0;
}

Float.displayName = 'java.lang.Float.Float';
defineClass(31, 60, {3:1, 35:1, 31:1, 60:1}, Float);
_.compareTo = function compareTo_0(b){
  return $compareTo_4(this, castTo(b, 31));
}
;
_.compareTo.displayName = 'java.lang.Float.compareTo';
_.equals_0 = function equals_3(o){
  return instanceOf(o, 31) && castTo(o, 31).value_0 == this.value_0;
}
;
_.equals_0.displayName = 'java.lang.Float.equals';
_.hashCode_0 = function hashCode_2(){
  return round_int(this.value_0);
}
;
_.hashCode_0.displayName = 'java.lang.Float.hashCode';
_.toString_0 = function toString_12(){
  return '' + this.value_0;
}
;
_.toString_0.displayName = 'java.lang.Float.toString';
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 31);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

IllegalArgumentException.displayName = 'java.lang.IllegalArgumentException.IllegalArgumentException';
function IllegalArgumentException_0(message){
  RuntimeException_1.call(this, message);
}

IllegalArgumentException_0.displayName = 'java.lang.IllegalArgumentException.IllegalArgumentException';
defineClass(52, 4, $intern_4, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 52);
function IllegalStateException(){
  RuntimeException.call(this);
}

IllegalStateException.displayName = 'java.lang.IllegalStateException.IllegalStateException';
defineClass(130, 4, $intern_4, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 130);
function $compareTo_5(this$static, b){
  return compare_4(this$static.value_0, b.value_0);
}

$compareTo_5.displayName = 'java.lang.Integer.$compareTo';
function $hashCode_3(this$static){
  return this$static.value_0;
}

$hashCode_3.displayName = 'java.lang.Integer.$hashCode';
function Integer(value_0){
  this.value_0 = value_0;
}

Integer.displayName = 'java.lang.Integer.Integer';
function compare_4(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

compare_4.displayName = 'java.lang.Integer.compare';
function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

numberOfLeadingZeros_0.displayName = 'java.lang.Integer.numberOfLeadingZeros';
function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

numberOfTrailingZeros.displayName = 'java.lang.Integer.numberOfTrailingZeros';
function toUnsigned(value_0){
  return value_0 >>> 0;
}

toUnsigned.displayName = 'java.lang.Integer.toUnsigned';
function valueOf_0(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

valueOf_0.displayName = 'java.lang.Integer.valueOf';
defineClass(25, 60, {3:1, 35:1, 25:1, 60:1}, Integer);
_.compareTo = function compareTo_1(b){
  return $compareTo_5(this, castTo(b, 25));
}
;
_.compareTo.displayName = 'java.lang.Integer.compareTo';
_.equals_0 = function equals_4(o){
  return instanceOf(o, 25) && castTo(o, 25).value_0 == this.value_0;
}
;
_.equals_0.displayName = 'java.lang.Integer.equals';
_.hashCode_0 = function hashCode_3(){
  return this.value_0;
}
;
_.hashCode_0.displayName = 'java.lang.Integer.hashCode';
_.toString_0 = function toString_13(){
  return '' + this.value_0;
}
;
_.toString_0.displayName = 'java.lang.Integer.toString';
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 25);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_2, 25, 256, 0, 1);
}

$clinit_Integer$BoxedValues.displayName = 'java.lang.Integer$BoxedValues.$clinit';
var boxedValues;
function $compareTo_6(this$static, b){
  return compare_5(this$static.value_0, b.value_0);
}

$compareTo_6.displayName = 'java.lang.Long.$compareTo';
function Long(value_0){
  this.value_0 = value_0;
}

Long.displayName = 'java.lang.Long.Long';
function compare_5(x_0, y_0){
  return compare_0(x_0, y_0) < 0?-1:compare_0(x_0, y_0) > 0?1:0;
}

compare_5.displayName = 'java.lang.Long.compare';
function valueOf_1(i){
  var rebase, result;
  if (compare_0(i, -129) > 0 && compare_0(i, 128) < 0) {
    rebase = toInt_0(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

valueOf_1.displayName = 'java.lang.Long.valueOf';
defineClass(44, 60, {3:1, 35:1, 44:1, 60:1}, Long);
_.compareTo = function compareTo_2(b){
  return $compareTo_6(this, castTo(b, 44));
}
;
_.compareTo.displayName = 'java.lang.Long.compareTo';
_.equals_0 = function equals_5(o){
  return instanceOf(o, 44) && eq(castTo(o, 44).value_0, this.value_0);
}
;
_.equals_0.displayName = 'java.lang.Long.equals';
_.hashCode_0 = function hashCode_4(){
  return toInt_0(this.value_0);
}
;
_.hashCode_0.displayName = 'java.lang.Long.hashCode';
_.toString_0 = function toString_14(){
  return '' + toString_4(this.value_0);
}
;
_.toString_0.displayName = 'java.lang.Long.toString';
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 44);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_2, 44, 256, 0, 1);
}

$clinit_Long$BoxedValues.displayName = 'java.lang.Long$BoxedValues.$clinit';
var boxedValues_0;
defineClass(292, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

NullPointerException.displayName = 'java.lang.NullPointerException.NullPointerException';
function NullPointerException_0(typeError){
  JsException_0.call(this, typeError);
}

NullPointerException_0.displayName = 'java.lang.NullPointerException.NullPointerException';
function NullPointerException_1(message){
  RuntimeException_1.call(this, message);
}

NullPointerException_1.displayName = 'java.lang.NullPointerException.NullPointerException';
defineClass(76, 58, $intern_4, NullPointerException, NullPointerException_0, NullPointerException_1);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
_.createError.displayName = 'java.lang.NullPointerException.createError';
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 76);
function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = emptyMethod;
  var i;
  maxDigitsForRadix = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_13, 10, 15, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initUnidimensionalArray(I_classLit, $intern_13, 10, 37, 15, 1);
  maxLengthForRadix = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_13, 10, 15, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initUnidimensionalArray(J_classLit, $intern_13, 10, 37, 14, 1);
  for (i = 2; i <= 36; i++) {
    maxDigitsRadixPower[i] = round_int($wnd.Math.pow(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div($intern_27, maxDigitsRadixPower[i]);
  }
}

$clinit_Number$__ParseLong.displayName = 'java.lang.Number$__ParseLong.$clinit';
var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

NumberFormatException.displayName = 'java.lang.NumberFormatException.NumberFormatException';
defineClass(15, 52, {3:1, 7:1, 15:1, 4:1, 8:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 15);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

StackTraceElement.displayName = 'java.lang.StackTraceElement.StackTraceElement';
defineClass(34, 1, {3:1, 34:1}, StackTraceElement);
_.equals_0 = function equals_6(other){
  var st;
  if (instanceOf(other, 34)) {
    st = castTo(other, 34);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.equals_0.displayName = 'java.lang.StackTraceElement.equals';
_.hashCode_0 = function hashCode_5(){
  return hashCode_11(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf_0(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.hashCode_0.displayName = 'java.lang.StackTraceElement.hashCode';
_.toString_0 = function toString_15(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.toString_0.displayName = 'java.lang.StackTraceElement.toString';
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 34);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

$charAt.displayName = 'java.lang.String.$charAt';
function $compareTo_7(this$static, other){
  return $compareTo_8(this$static, castToString(other));
}

$compareTo_7.displayName = 'java.lang.String.$compareTo';
function $compareTo_8(this$static, other){
  var a, b;
  a = (checkCriticalNotNull(this$static) , this$static);
  b = (checkCriticalNotNull(other) , other);
  return a == b?0:a < b?-1:1;
}

$compareTo_8.displayName = 'java.lang.String.$compareTo';
function $compareToIgnoreCase(this$static, other){
  return $compareTo_8(this$static.toLowerCase(), other.toLowerCase());
}

$compareToIgnoreCase.displayName = 'java.lang.String.$compareToIgnoreCase';
function $endsWith(this$static, suffix){
  var suffixlength;
  suffixlength = suffix.length;
  return $equals_4(this$static.substr(this$static.length - suffixlength, suffixlength), suffix);
}

$endsWith.displayName = 'java.lang.String.$endsWith';
function $equals_4(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

$equals_4.displayName = 'java.lang.String.$equals';
function $getClass_4(){
  return Ljava_lang_String_2_classLit;
}

$getClass_4.displayName = 'java.lang.String.$getClass';
function $hashCode_4(this$static){
  return getHashCode_0(this$static);
}

$hashCode_4.displayName = 'java.lang.String.$hashCode';
function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

$indexOf.displayName = 'java.lang.String.$indexOf';
function $indexOf_0(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

$indexOf_0.displayName = 'java.lang.String.$indexOf';
function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

$lastIndexOf.displayName = 'java.lang.String.$lastIndexOf';
function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

$lastIndexOf_0.displayName = 'java.lang.String.$lastIndexOf';
function $regionMatches(this$static, toffset, other, len){
  var left, right;
  checkCriticalNotNull(other);
  if (toffset < 0 || len <= 0) {
    return false;
  }
  if (toffset + len > this$static.length || len > other.length) {
    return false;
  }
  left = this$static.substr(toffset, len);
  right = other.substr(0, len);
  return $equals_4(left, right);
}

$regionMatches.displayName = 'java.lang.String.$regionMatches';
function $replace(this$static, from, to){
  var hex, number, regex, replace;
  hex = (number = from >>> 0 , number.toString(16));
  regex = '\\u' + $substring_0('0000', hex.length) + hex;
  replace = String.fromCharCode(to);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

$replace.displayName = 'java.lang.String.$replace';
function $replace_0(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

$replace_0.displayName = 'java.lang.String.$replace';
function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

$replaceAll.displayName = 'java.lang.String.$replaceAll';
function $split(this$static){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp('\\n', 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_2, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '') {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_1(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

$split.displayName = 'java.lang.String.$split';
function $substring_0(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

$substring_0.displayName = 'java.lang.String.$substring';
function $substring_1(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

$substring_1.displayName = 'java.lang.String.$substring';
function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

$trim.displayName = 'java.lang.String.$trim';
function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

fromCharCode.displayName = 'java.lang.String.fromCharCode';
function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_20) {
    hiSurrogate = 55296 + (codePoint - $intern_20 >> 10 & 1023) & $intern_0;
    loSurrogate = 56320 + (codePoint - $intern_20 & 1023) & $intern_0;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_0);
  }
}

fromCodePoint.displayName = 'java.lang.String.fromCodePoint';
function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring_0(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring_0(replaceStr, ++pos)));
  }
  return replaceStr;
}

translateReplaceString.displayName = 'java.lang.String.translateReplaceString';
function valueOf_2(x_0){
  return valueOf_3(x_0, x_0.length);
}

valueOf_2.displayName = 'java.lang.String.valueOf';
function valueOf_3(x_0, count){
  var batchEnd, batchStart, s;
  checkCriticalStringBounds(count, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < count;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, count);
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

valueOf_3.displayName = 'java.lang.String.valueOf';
stringCastMap = {3:1, 120:1, 35:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

$append_0.displayName = 'java.lang.StringBuilder.$append';
function $append_1(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

$append_1.displayName = 'java.lang.StringBuilder.$append';
function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

$append_2.displayName = 'java.lang.StringBuilder.$append';
function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

$append_3.displayName = 'java.lang.StringBuilder.$append';
function $append_4(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

$append_4.displayName = 'java.lang.StringBuilder.$append';
function $insert(this$static, index_0, x_0){
  this$static.string = $substring_1(this$static.string, 0, index_0) + ('' + x_0) + $substring_0(this$static.string, index_0);
  return this$static;
}

$insert.displayName = 'java.lang.StringBuilder.$insert';
function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

StringBuilder.displayName = 'java.lang.StringBuilder.StringBuilder';
function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

StringBuilder_0.displayName = 'java.lang.StringBuilder.StringBuilder';
function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

StringBuilder_1.displayName = 'java.lang.StringBuilder.StringBuilder';
defineClass(22, 77, {120:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 22);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

StringIndexOutOfBoundsException.displayName = 'java.lang.StringIndexOutOfBoundsException.StringIndexOutOfBoundsException';
defineClass(94, 61, $intern_4, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 94);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream;
  new PrintStream;
}

$clinit_System.displayName = 'java.lang.System.$clinit';
function arraycopy(src_0, srcOfs, dest, destOfs, len){
  $clinit_System();
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkCriticalArrayType_0((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkCriticalArrayType_0((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkCriticalArrayType_0((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if ((srcComp.modifiers & 1) == 0 && srcType != destType) {
    srcArray = castToArray(src_0);
    destArray = castToArray(dest);
    if (src_0 === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else 
    len > 0 && copy_0(src_0, srcOfs, dest, destOfs, len);
}

arraycopy.displayName = 'java.lang.System.arraycopy';
defineClass(296, 1, {});
var err;
function UnsupportedOperationException(){
  RuntimeException_1.call(this, 'Remove not supported on this list');
}

UnsupportedOperationException.displayName = 'java.lang.UnsupportedOperationException.UnsupportedOperationException';
defineClass(131, 4, $intern_4, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 131);
function $addAll(this$static, c){
  var changed, e, e$iterator, old;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = new AbstractList$IteratorImpl(c); e$iterator.i < e$iterator.this$01.size_1();) {
    e = (checkCriticalElement(e$iterator.i < e$iterator.this$01.size_1()) , e$iterator.this$01.get_0(e$iterator.last = e$iterator.i++));
    changed = changed | (old = $put(this$static.map_0, e, this$static) , old == null);
  }
  return changed;
}

$addAll.displayName = 'java.util.AbstractCollection.$addAll';
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

$advanceToFind.displayName = 'java.util.AbstractCollection.$advanceToFind';
function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

$containsAll.displayName = 'java.util.AbstractCollection.$containsAll';
function $toArray(this$static){
  return $toArray_0(this$static, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, $size(this$static.map_0), 5, 1));
}

$toArray.displayName = 'java.util.AbstractCollection.$toArray';
function $toArray_0(this$static, a){
  var entry, i, it, outerIter, size_0;
  size_0 = $size(this$static.map_0);
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  it = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter));
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, (entry = $next_1(it.val$outerIter2) , entry.getKey()));
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

$toArray_0.displayName = 'java.util.AbstractCollection.$toArray';
function $toString_3(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    $add_2(joiner, e === this$static?'(this Collection)':e == null?'null':toString_5(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

$toString_3.displayName = 'java.util.AbstractCollection.$toString';
defineClass(244, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.contains_0.displayName = 'java.util.AbstractCollection.contains';
_.toString_0 = function toString_16(){
  return $toString_3(this);
}
;
_.toString_0.displayName = 'java.util.AbstractCollection.toString';
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 244);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

$containsEntry.displayName = 'java.util.AbstractMap.$containsEntry';
function $toString_4(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_5(o);
}

$toString_4.displayName = 'java.util.AbstractMap.$toString';
function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

getEntryValueOrNull.displayName = 'java.util.AbstractMap.getEntryValueOrNull';
defineClass(246, 1, {118:1});
_.equals_0 = function equals_7(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 41)) {
    return false;
  }
  otherMap = castTo(obj, 118);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.hashCodeMap.size_0 + otherMap.stringMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.equals_0.displayName = 'java.util.AbstractMap.equals';
_.hashCode_0 = function hashCode_6(){
  return hashCode_12(new AbstractHashMap$EntrySet(this));
}
;
_.hashCode_0.displayName = 'java.util.AbstractMap.hashCode';
_.toString_0 = function toString_17(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    $add_2(joiner, $toString_4(this, entry.getKey()) + '=' + $toString_4(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
_.toString_0.displayName = 'java.util.AbstractMap.toString';
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 246);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

$containsKey.displayName = 'java.util.AbstractHashMap.$containsKey';
function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

$containsValue.displayName = 'java.util.AbstractHashMap.$containsValue';
function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 33);
    if ($equals_5(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

$containsValue_0.displayName = 'java.util.AbstractHashMap.$containsValue';
function $get_3(this$static, key){
  return getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

$get_3.displayName = 'java.util.AbstractHashMap.$get';
function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_6(this$static.stringMap, key);
}

$getStringValue.displayName = 'java.util.AbstractHashMap.$getStringValue';
function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key);
}

$hasStringValue.displayName = 'java.util.AbstractHashMap.$hasStringValue';
function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

$put.displayName = 'java.util.AbstractHashMap.$put';
function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

$putStringValue.displayName = 'java.util.AbstractHashMap.$putStringValue';
function $remove(this$static, key){
  return $remove_3(this$static.hashCodeMap, key);
}

$remove.displayName = 'java.util.AbstractHashMap.$remove';
function $reset_1(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

$reset_1.displayName = 'java.util.AbstractHashMap.$reset';
function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

$size.displayName = 'java.util.AbstractHashMap.$size';
function AbstractHashMap(){
  $reset_1(this);
}

AbstractHashMap.displayName = 'java.util.AbstractHashMap.AbstractHashMap';
function AbstractHashMap_0(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_1(this);
}

AbstractHashMap_0.displayName = 'java.util.AbstractHashMap.AbstractHashMap';
function AbstractHashMap_1(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_1(this);
}

AbstractHashMap_1.displayName = 'java.util.AbstractHashMap.AbstractHashMap';
defineClass(84, 246, {118:1});
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 84);
defineClass(247, 244, {74:1});
_.equals_0 = function equals_8(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 74)) {
    return false;
  }
  other = castTo(o, 74);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.equals_0.displayName = 'java.util.AbstractSet.equals';
_.hashCode_0 = function hashCode_7(){
  return hashCode_12(this);
}
;
_.hashCode_0.displayName = 'java.util.AbstractSet.hashCode';
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 247);
function $contains(this$static, o){
  if (instanceOf(o, 33)) {
    return $containsEntry(this$static.this$01, castTo(o, 33));
  }
  return false;
}

$contains.displayName = 'java.util.AbstractHashMap$EntrySet.$contains';
function $iterator(this$static){
  return new AbstractHashMap$EntrySetIterator(this$static.this$01);
}

$iterator.displayName = 'java.util.AbstractHashMap$EntrySet.$iterator';
function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

AbstractHashMap$EntrySet.displayName = 'java.util.AbstractHashMap$EntrySet.AbstractHashMap$EntrySet';
defineClass(29, 247, {74:1}, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.contains_0.displayName = 'java.util.AbstractHashMap$EntrySet.contains';
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.iterator.displayName = 'java.util.AbstractHashMap$EntrySet.iterator';
_.size_1 = function size_1(){
  return $size(this.this$01);
}
;
_.size_1.displayName = 'java.util.AbstractHashMap$EntrySet.size';
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 29);
function $$init_24(this$static){
  this$static.stringMapEntries = new InternalStringMap$1(this$static.this$01.stringMap);
  this$static.current = this$static.stringMapEntries;
  this$static.hasNext = $computeHasNext(this$static);
}

$$init_24.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$$init';
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

$computeHasNext.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$computeHasNext';
function $hasNext(this$static){
  return this$static.hasNext;
}

$hasNext.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$hasNext';
function $next_0(this$static){
  return $next_1(this$static);
}

$next_0.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$next';
function $next_1(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_0(), 33);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

$next_1.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$next';
function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

AbstractHashMap$EntrySetIterator.displayName = 'java.util.AbstractHashMap$EntrySetIterator.AbstractHashMap$EntrySetIterator';
defineClass(30, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next_0(){
  return $next_1(this);
}
;
_.next_0.displayName = 'java.util.AbstractHashMap$EntrySetIterator.next';
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.hasNext_0.displayName = 'java.util.AbstractHashMap$EntrySetIterator.hasNext';
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 30);
function $indexOf_1(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_13(toFind, this$static.get_0(i))) {
      return i;
    }
  }
  return -1;
}

$indexOf_1.displayName = 'java.util.AbstractList.$indexOf';
function $iterator_0(this$static){
  return new AbstractList$IteratorImpl(this$static);
}

$iterator_0.displayName = 'java.util.AbstractList.$iterator';
defineClass(245, 244, {68:1});
_.equals_0 = function equals_9(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 68)) {
    return false;
  }
  other = castTo(o, 68);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.equals_0.displayName = 'java.util.AbstractList.equals';
_.hashCode_0 = function hashCode_8(){
  return hashCode_13(this);
}
;
_.hashCode_0.displayName = 'java.util.AbstractList.hashCode';
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.iterator.displayName = 'java.util.AbstractList.iterator';
_.remove_0 = function remove(index_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.remove_0.displayName = 'java.util.AbstractList.remove';
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 245);
function $$init_25(this$static){
}

$$init_25.displayName = 'java.util.AbstractList$IteratorImpl.$$init';
function $hasNext_0(this$static){
  return this$static.i < this$static.this$01.size_1();
}

$hasNext_0.displayName = 'java.util.AbstractList$IteratorImpl.$hasNext';
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.size_1());
  return this$static.this$01.get_0(this$static.last = this$static.i++);
}

$next_2.displayName = 'java.util.AbstractList$IteratorImpl.$next';
function $remove_0(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

$remove_0.displayName = 'java.util.AbstractList$IteratorImpl.$remove';
function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

AbstractList$IteratorImpl.displayName = 'java.util.AbstractList$IteratorImpl.AbstractList$IteratorImpl';
defineClass(79, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01.size_1();
}
;
_.hasNext_0.displayName = 'java.util.AbstractList$IteratorImpl.hasNext';
_.next_0 = function next_1(){
  return checkCriticalElement(this.i < this.this$01.size_1()) , this.this$01.get_0(this.last = this.i++);
}
;
_.next_0.displayName = 'java.util.AbstractList$IteratorImpl.next';
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 79);
function AbstractList$ListIteratorImpl(this$0){
  this.this$01 = this$0;
  checkCriticalPositionIndex(this$0.array.length);
  this.i = 0;
}

AbstractList$ListIteratorImpl.displayName = 'java.util.AbstractList$ListIteratorImpl.AbstractList$ListIteratorImpl';
defineClass(142, 79, {}, AbstractList$ListIteratorImpl);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 142);
function $iterator_1(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

$iterator_1.displayName = 'java.util.AbstractMap$1.$iterator';
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

AbstractMap$1.displayName = 'java.util.AbstractMap$1.AbstractMap$1';
defineClass(100, 247, {74:1}, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.contains_0.displayName = 'java.util.AbstractMap$1.contains';
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.iterator.displayName = 'java.util.AbstractMap$1.iterator';
_.size_1 = function size_2(){
  return $size(this.this$01);
}
;
_.size_1.displayName = 'java.util.AbstractMap$1.size';
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 100);
function $next_3(this$static){
  var entry;
  entry = $next_1(this$static.val$outerIter2);
  return entry.getKey();
}

$next_3.displayName = 'java.util.AbstractMap$1$1.$next';
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

AbstractMap$1$1.displayName = 'java.util.AbstractMap$1$1.AbstractMap$1$1';
defineClass(85, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.hasNext_0.displayName = 'java.util.AbstractMap$1$1.hasNext';
_.next_0 = function next_2(){
  var entry;
  return entry = $next_1(this.val$outerIter2) , entry.getKey();
}
;
_.next_0.displayName = 'java.util.AbstractMap$1$1.next';
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 85);
function $iterator_2(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$2$1(outerIter);
}

$iterator_2.displayName = 'java.util.AbstractMap$2.$iterator';
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

AbstractMap$2.displayName = 'java.util.AbstractMap$2.AbstractMap$2';
defineClass(70, 244, {}, AbstractMap$2);
_.contains_0 = function contains_2(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.contains_0.displayName = 'java.util.AbstractMap$2.contains';
_.iterator = function iterator_3(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.iterator.displayName = 'java.util.AbstractMap$2.iterator';
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
_.size_1.displayName = 'java.util.AbstractMap$2.size';
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 70);
function $hasNext_1(this$static){
  return this$static.val$outerIter2.hasNext;
}

$hasNext_1.displayName = 'java.util.AbstractMap$2$1.$hasNext';
function $next_4(this$static){
  var entry;
  entry = $next_1(this$static.val$outerIter2);
  return entry.getValue();
}

$next_4.displayName = 'java.util.AbstractMap$2$1.$next';
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

AbstractMap$2$1.displayName = 'java.util.AbstractMap$2$1.AbstractMap$2$1';
defineClass(63, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.hasNext_0.displayName = 'java.util.AbstractMap$2$1.hasNext';
_.next_0 = function next_3(){
  var entry;
  return entry = $next_1(this.val$outerIter2) , entry.getValue();
}
;
_.next_0.displayName = 'java.util.AbstractMap$2$1.next';
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 63);
function AbstractMap$AbstractEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

AbstractMap$AbstractEntry.displayName = 'java.util.AbstractMap$AbstractEntry.AbstractMap$AbstractEntry';
defineClass(179, 1, $intern_28);
_.equals_0 = function equals_10(other){
  var entry;
  if (!instanceOf(other, 33)) {
    return false;
  }
  entry = castTo(other, 33);
  return equals_13(this.key_0, entry.getKey()) && equals_13(this.value_0, entry.getValue());
}
;
_.equals_0.displayName = 'java.util.AbstractMap$AbstractEntry.equals';
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getKey.displayName = 'java.util.AbstractMap$AbstractEntry.getKey';
_.getValue = function getValue(){
  return this.value_0;
}
;
_.getValue.displayName = 'java.util.AbstractMap$AbstractEntry.getValue';
_.hashCode_0 = function hashCode_9(){
  return hashCode_14(this.key_0) ^ hashCode_14(this.value_0);
}
;
_.hashCode_0.displayName = 'java.util.AbstractMap$AbstractEntry.hashCode';
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.setValue.displayName = 'java.util.AbstractMap$AbstractEntry.setValue';
_.toString_0 = function toString_18(){
  return this.key_0 + '=' + this.value_0;
}
;
_.toString_0.displayName = 'java.util.AbstractMap$AbstractEntry.toString';
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 179);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

AbstractMap$SimpleEntry.displayName = 'java.util.AbstractMap$SimpleEntry.AbstractMap$SimpleEntry';
defineClass(180, 179, $intern_28, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 180);
defineClass(249, 1, $intern_28);
_.equals_0 = function equals_11(other){
  var entry;
  if (!instanceOf(other, 33)) {
    return false;
  }
  entry = castTo(other, 33);
  return equals_13(this.val$entry2.value[0], entry.getKey()) && equals_13($getValue(this), entry.getValue());
}
;
_.equals_0.displayName = 'java.util.AbstractMapEntry.equals';
_.hashCode_0 = function hashCode_10(){
  return hashCode_14(this.val$entry2.value[0]) ^ hashCode_14($getValue(this));
}
;
_.hashCode_0.displayName = 'java.util.AbstractMapEntry.hashCode';
_.toString_0 = function toString_19(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
_.toString_0.displayName = 'java.util.AbstractMapEntry.toString';
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 249);
function $$init_26(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

$$init_26.displayName = 'java.util.ArrayList.$$init';
function $add_0(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

$add_0.displayName = 'java.util.ArrayList.$add';
function $contains_0(this$static, o){
  return $indexOf_2(this$static, o, 0) != -1;
}

$contains_0.displayName = 'java.util.ArrayList.$contains';
function $get_4(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

$get_4.displayName = 'java.util.ArrayList.$get';
function $indexOf_2(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_13(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

$indexOf_2.displayName = 'java.util.ArrayList.$indexOf';
function $iterator_3(this$static){
  return new ArrayList$1(this$static);
}

$iterator_3.displayName = 'java.util.ArrayList.$iterator';
function $remove_1(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0);
  return previous;
}

$remove_1.displayName = 'java.util.ArrayList.$remove';
function $remove_2(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i);
  return true;
}

$remove_2.displayName = 'java.util.ArrayList.$remove';
function $set_0(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

$set_0.displayName = 'java.util.ArrayList.$set';
function $size_0(this$static){
  return this$static.array.length;
}

$size_0.displayName = 'java.util.ArrayList.$size';
function $toArray_1(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

$toArray_1.displayName = 'java.util.ArrayList.$toArray';
function ArrayList(){
  $$init_26(this);
}

ArrayList.displayName = 'java.util.ArrayList.ArrayList';
function ArrayList_0(initialCapacity){
  $$init_26(this);
  checkCriticalArgument_0(initialCapacity >= 0, 'Initial capacity must not be negative');
}

ArrayList_0.displayName = 'java.util.ArrayList.ArrayList';
defineClass(23, 245, $intern_29, ArrayList, ArrayList_0);
_.contains_0 = function contains_3(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.contains_0.displayName = 'java.util.ArrayList.contains';
_.get_0 = function get_0(index_0){
  return $get_4(this, index_0);
}
;
_.get_0.displayName = 'java.util.ArrayList.get';
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.iterator.displayName = 'java.util.ArrayList.iterator';
_.remove_0 = function remove_0(index_0){
  return $remove_1(this, index_0);
}
;
_.remove_0.displayName = 'java.util.ArrayList.remove';
_.size_1 = function size_4(){
  return this.array.length;
}
;
_.size_1.displayName = 'java.util.ArrayList.size';
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 23);
function $$init_27(this$static){
}

$$init_27.displayName = 'java.util.ArrayList$1.$$init';
function $hasNext_2(this$static){
  return this$static.i < this$static.this$01.array.length;
}

$hasNext_2.displayName = 'java.util.ArrayList$1.$hasNext';
function $next_5(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

$next_5.displayName = 'java.util.ArrayList$1.$next';
function ArrayList$1(this$0){
  this.this$01 = this$0;
}

ArrayList$1.displayName = 'java.util.ArrayList$1.ArrayList$1';
defineClass(18, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.hasNext_0.displayName = 'java.util.ArrayList$1.hasNext';
_.next_0 = function next_4(){
  return $next_5(this);
}
;
_.next_0.displayName = 'java.util.ArrayList$1.next';
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 18);
function copyPrimitiveArray(original, copy){
  var copyLen, len;
  len = original.length;
  copyLen = $wnd.Math.min(512, len);
  copy_0(original, 0, copy, 0, copyLen);
  return copy;
}

copyPrimitiveArray.displayName = 'java.util.Arrays.copyPrimitiveArray';
function hashCode_11(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

hashCode_11.displayName = 'java.util.Arrays.hashCode';
function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

insertionSort.displayName = 'java.util.Arrays.insertionSort';
function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

merge.displayName = 'java.util.Arrays.merge';
function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp;
  comp = ($clinit_Comparators() , !comp?INTERNAL_NATURAL_ORDER:comp);
  temp = x_0.slice(fromIndex, toIndex);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

mergeSort.displayName = 'java.util.Arrays.mergeSort';
function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

mergeSort_0.displayName = 'java.util.Arrays.mergeSort';
function sort_0(x_0, c){
  mergeSort(x_0, 0, x_0.length, c);
}

sort_0.displayName = 'java.util.Arrays.sort';
function $get_5(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

$get_5.displayName = 'java.util.Arrays$ArrayList.$get';
function $size_1(this$static){
  return this$static.array.length;
}

$size_1.displayName = 'java.util.Arrays$ArrayList.$size';
function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

Arrays$ArrayList.displayName = 'java.util.Arrays$ArrayList.Arrays$ArrayList';
defineClass(141, 245, $intern_29, Arrays$ArrayList);
_.contains_0 = function contains_4(o){
  return $indexOf_1(this, o) != -1;
}
;
_.contains_0.displayName = 'java.util.Arrays$ArrayList.contains';
_.get_0 = function get_1(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.get_0.displayName = 'java.util.Arrays$ArrayList.get';
_.size_1 = function size_5(){
  return this.array.length;
}
;
_.size_1.displayName = 'java.util.Arrays$ArrayList.size';
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 141);
function hashCode_12(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

hashCode_12.displayName = 'java.util.Collections.hashCode';
function hashCode_13(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

hashCode_13.displayName = 'java.util.Collections.hashCode';
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  INTERNAL_NATURAL_ORDER = new Comparators$NaturalOrderComparator;
}

$clinit_Comparators.displayName = 'java.util.Comparators.$clinit';
var INTERNAL_NATURAL_ORDER;
function $compare_0(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}

$compare_0.displayName = 'java.util.Comparators$NaturalOrderComparator.$compare';
function Comparators$NaturalOrderComparator(){
}

Comparators$NaturalOrderComparator.displayName = 'java.util.Comparators$NaturalOrderComparator.Comparators$NaturalOrderComparator';
defineClass(209, 1, $intern_13, Comparators$NaturalOrderComparator);
_.compare = function compare_6(a, b){
  return $compare_0(castTo(a, 35), castTo(b, 35));
}
;
_.compare.displayName = 'java.util.Comparators$NaturalOrderComparator.compare';
_.equals_0 = function equals_12(other){
  return this === other;
}
;
_.equals_0.displayName = 'java.util.Comparators$NaturalOrderComparator.equals';
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 209);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

checkStructuralChange.displayName = 'java.util.ConcurrentModificationDetector.checkStructuralChange';
function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

structureChanged.displayName = 'java.util.ConcurrentModificationDetector.structureChanged';
function ConcurrentModificationException(){
  RuntimeException.call(this);
}

ConcurrentModificationException.displayName = 'java.util.ConcurrentModificationException.ConcurrentModificationException';
defineClass(220, 4, $intern_4, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 220);
function EmptyStackException(){
  RuntimeException.call(this);
}

EmptyStackException.displayName = 'java.util.EmptyStackException.EmptyStackException';
defineClass(109, 4, $intern_4, EmptyStackException);
var Ljava_util_EmptyStackException_2_classLit = createForClass('java.util', 'EmptyStackException', 109);
function $equals_5(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

$equals_5.displayName = 'java.util.HashMap.$equals';
function HashMap(){
  $reset_1(this);
}

HashMap.displayName = 'java.util.HashMap.HashMap';
function HashMap_0(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_1(this);
}

HashMap_0.displayName = 'java.util.HashMap.HashMap';
defineClass(41, 84, {3:1, 41:1, 118:1}, HashMap, HashMap_0);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 41);
function $add_1(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

$add_1.displayName = 'java.util.HashSet.$add';
function $contains_1(this$static, o){
  return $containsKey(this$static.map_0, o);
}

$contains_1.displayName = 'java.util.HashSet.$contains';
function $iterator_4(this$static){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}

$iterator_4.displayName = 'java.util.HashSet.$iterator';
function $size_2(this$static){
  return $size(this$static.map_0);
}

$size_2.displayName = 'java.util.HashSet.$size';
function HashSet(){
  this.map_0 = new HashMap;
}

HashSet.displayName = 'java.util.HashSet.HashSet';
function HashSet_0(c){
  this.map_0 = new HashMap_0(c.array.length);
  $addAll(this, c);
}

HashSet_0.displayName = 'java.util.HashSet.HashSet';
defineClass(105, 247, {3:1, 74:1}, HashSet, HashSet_0);
_.contains_0 = function contains_5(o){
  return $contains_1(this, o);
}
;
_.contains_0.displayName = 'java.util.HashSet.contains';
_.iterator = function iterator_5(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.iterator.displayName = 'java.util.HashSet.iterator';
_.size_1 = function size_6(){
  return $size(this.map_0);
}
;
_.size_1.displayName = 'java.util.HashSet.size';
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 105);
function $$init_28(this$static){
  this$static.backingMap = newJsMap();
}

$$init_28.displayName = 'java.util.InternalHashCodeMap.$$init';
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_5(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

$findEntryInChain.displayName = 'java.util.InternalHashCodeMap.$findEntryInChain';
function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

$getChainOrEmpty.displayName = 'java.util.InternalHashCodeMap.$getChainOrEmpty';
function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

$getEntry.displayName = 'java.util.InternalHashCodeMap.$getEntry';
function $iterator_5(this$static){
  return new InternalHashCodeMap$1(this$static);
}

$iterator_5.displayName = 'java.util.InternalHashCodeMap.$iterator';
function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host_0);
  return null;
}

$put_0.displayName = 'java.util.InternalHashCodeMap.$put';
function $remove_3(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = !key?0:(hashCode = key.value_0 , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_5(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host_0);
      return entry.getValue();
    }
  }
  return null;
}

$remove_3.displayName = 'java.util.InternalHashCodeMap.$remove';
function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

InternalHashCodeMap.displayName = 'java.util.InternalHashCodeMap.InternalHashCodeMap';
defineClass(196, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_6(){
  return new InternalHashCodeMap$1(this);
}
;
_.iterator.displayName = 'java.util.InternalHashCodeMap.iterator';
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 196);
function $$init_29(this$static){
  this$static.chains = this$static.this$01.backingMap.entries();
  this$static.chain = new Array;
}

$$init_29.displayName = 'java.util.InternalHashCodeMap$1.$$init';
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

InternalHashCodeMap$1.displayName = 'java.util.InternalHashCodeMap$1.InternalHashCodeMap$1';
defineClass(103, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_5(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.next_0.displayName = 'java.util.InternalHashCodeMap$1.next';
_.hasNext_0 = function hasNext_5(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.hasNext_0.displayName = 'java.util.InternalHashCodeMap$1.hasNext';
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 103);
function $delete(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

$delete.displayName = 'java.util.InternalJsMap.$delete';
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

$clinit_InternalJsMapFactory.displayName = 'java.util.InternalJsMapFactory.$clinit';
function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

canHandleObjectCreateAndProto.displayName = 'java.util.InternalJsMapFactory.canHandleObjectCreateAndProto';
function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

getJsMapConstructor.displayName = 'java.util.InternalJsMapFactory.getJsMapConstructor';
function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

getJsMapPolyFill.displayName = 'java.util.InternalJsMapFactory.getJsMapPolyFill';
function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

newJsMap.displayName = 'java.util.InternalJsMapFactory.newJsMap';
var jsMapCtor;
function $$init_30(this$static){
  this$static.backingMap = newJsMap();
}

$$init_30.displayName = 'java.util.InternalStringMap.$$init';
function $contains_2(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

$contains_2.displayName = 'java.util.InternalStringMap.$contains';
function $get_6(this$static, key){
  return this$static.backingMap.get(key);
}

$get_6.displayName = 'java.util.InternalStringMap.$get';
function $iterator_6(this$static){
  return new InternalStringMap$1(this$static);
}

$iterator_6.displayName = 'java.util.InternalStringMap.$iterator';
function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host_0);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

$put_1.displayName = 'java.util.InternalStringMap.$put';
function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

InternalStringMap.displayName = 'java.util.InternalStringMap.InternalStringMap';
defineClass(197, 1, {}, InternalStringMap);
_.iterator = function iterator_7(){
  return new InternalStringMap$1(this);
}
;
_.iterator.displayName = 'java.util.InternalStringMap.iterator';
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 197);
function $$init_31(this$static){
  this$static.entries_0 = this$static.this$01.backingMap.entries();
  this$static.current = this$static.entries_0.next();
}

$$init_31.displayName = 'java.util.InternalStringMap$1.$$init';
function $next_6(this$static){
  this$static.last = this$static.current;
  this$static.current = this$static.entries_0.next();
  return new InternalStringMap$2(this$static.this$01, this$static.last, this$static.this$01.valueMod);
}

$next_6.displayName = 'java.util.InternalStringMap$1.$next';
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

InternalStringMap$1.displayName = 'java.util.InternalStringMap$1.InternalStringMap$1';
defineClass(104, 1, {}, InternalStringMap$1);
_.next_0 = function next_6(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.next_0.displayName = 'java.util.InternalStringMap$1.next';
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
_.hasNext_0.displayName = 'java.util.InternalStringMap$1.hasNext';
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 104);
function $getKey(this$static){
  return this$static.val$entry2.value[0];
}

$getKey.displayName = 'java.util.InternalStringMap$2.$getKey';
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_6(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

$getValue.displayName = 'java.util.InternalStringMap$2.$getValue';
function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

InternalStringMap$2.displayName = 'java.util.InternalStringMap$2.InternalStringMap$2';
defineClass(198, 249, $intern_28, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getKey.displayName = 'java.util.InternalStringMap$2.getKey';
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.getValue.displayName = 'java.util.InternalStringMap$2.getValue';
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.setValue.displayName = 'java.util.InternalStringMap$2.setValue';
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 198);
function NoSuchElementException(){
  RuntimeException.call(this);
}

NoSuchElementException.displayName = 'java.util.NoSuchElementException.NoSuchElementException';
defineClass(205, 4, $intern_4, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 205);
function equals_13(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

equals_13.displayName = 'java.util.Objects.equals';
function hashCode_14(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

hashCode_14.displayName = 'java.util.Objects.hashCode';
function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initUnidimensionalArray(D_classLit, $intern_13, 10, 25, 15, 1);
  twoToTheXMinus48 = initUnidimensionalArray(D_classLit, $intern_13, 10, 33, 15, 1);
  twoToTheXMinus48Tmp = 1.52587890625E-5;
  for (i0 = 32; i0 >= 0; i0--) {
    twoToTheXMinus48[i0] = twoToTheXMinus48Tmp;
    twoToTheXMinus48Tmp *= 0.5;
  }
  twoToTheXMinus24Tmp = 1;
  for (i = 24; i >= 0; i--) {
    twoToTheXMinus24[i] = twoToTheXMinus24Tmp;
    twoToTheXMinus24Tmp *= 0.5;
  }
}

$clinit_Random.displayName = 'java.util.Random.$clinit';
function $nextInt(this$static, n){
  var bits, val;
  checkCriticalArgument(n > 0);
  if ((n & -n) == n) {
    return round_int(n * $nextInternal(this$static) * 4.6566128730773926E-10);
  }
  do {
    bits = $nextInternal(this$static);
    val = bits % n;
  }
   while (bits - val + (n - 1) < 0);
  return round_int(val);
}

$nextInt.displayName = 'java.util.Random.$nextInt';
function $nextInternal(this$static){
  var carry, dval, h, hi, l, lo;
  hi = this$static.seedhi * $intern_30 + this$static.seedlo * 1502;
  lo = this$static.seedlo * $intern_30 + 11;
  carry = $wnd.Math.floor(lo * $intern_31);
  hi += carry;
  lo -= carry * $intern_32;
  hi %= $intern_32;
  this$static.seedhi = hi;
  this$static.seedlo = lo;
  h = this$static.seedhi * 128;
  l = $wnd.Math.floor(this$static.seedlo * twoToTheXMinus48[31]);
  dval = h + l;
  dval >= 2147483648 && (dval -= 4294967296);
  return dval;
}

$nextInternal.displayName = 'java.util.Random.$nextInternal';
function $setSeed_1(this$static, seedhi, seedlo){
  this$static.seedhi = seedhi ^ 1502;
  this$static.seedlo = seedlo ^ $intern_30;
}

$setSeed_1.displayName = 'java.util.Random.$setSeed';
function $setSeed_2(this$static, seed){
  $setSeed_1(this$static, toInt_0(and_0(shr_0(seed, 24), $intern_33)), toInt_0(and_0(seed, $intern_33)));
}

$setSeed_2.displayName = 'java.util.Random.$setSeed';
function Random(){
  $clinit_Random();
  var hi, lo, seed;
  seed = uniqueSeed++ + Date.now();
  hi = round_int($wnd.Math.floor(seed * $intern_31)) & $intern_33;
  lo = round_int(seed - hi * $intern_32);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ $intern_30;
}

Random.displayName = 'java.util.Random.Random';
defineClass(213, 1, {}, Random);
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 213);
function $get_7(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $get_4(this$static.arrayList, index_0);
}

$get_7.displayName = 'java.util.Vector.$get';
function $remove_4(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $remove_1(this$static.arrayList, index_0);
}

$remove_4.displayName = 'java.util.Vector.$remove';
function $size_3(this$static){
  return this$static.arrayList.array.length;
}

$size_3.displayName = 'java.util.Vector.$size';
function Vector(){
  this.arrayList = new ArrayList;
}

Vector.displayName = 'java.util.Vector.Vector';
function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new ArrayIndexOutOfBoundsException);
  }
}

checkArrayElementIndex.displayName = 'java.util.Vector.checkArrayElementIndex';
defineClass(202, 245, $intern_29);
_.contains_0 = function contains_6(elem){
  return $indexOf_2(this.arrayList, elem, 0) != -1;
}
;
_.contains_0.displayName = 'java.util.Vector.contains';
_.get_0 = function get_2(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , $get_4(this.arrayList, index_0);
}
;
_.get_0.displayName = 'java.util.Vector.get';
_.iterator = function iterator_8(){
  return new ArrayList$1(this.arrayList);
}
;
_.iterator.displayName = 'java.util.Vector.iterator';
_.remove_0 = function remove_1(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , $remove_1(this.arrayList, index_0);
}
;
_.remove_0.displayName = 'java.util.Vector.remove';
_.size_1 = function size_7(){
  return this.arrayList.array.length;
}
;
_.size_1.displayName = 'java.util.Vector.size';
_.toString_0 = function toString_20(){
  return $toString_3(this.arrayList);
}
;
_.toString_0.displayName = 'java.util.Vector.toString';
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 202);
function $peek(this$static){
  var sz;
  sz = this$static.arrayList.array.length;
  if (sz > 0) {
    return checkArrayElementIndex(sz - 1, this$static.arrayList.array.length) , $get_4(this$static.arrayList, sz - 1);
  }
   else {
    throw toJs(new EmptyStackException);
  }
}

$peek.displayName = 'java.util.Stack.$peek';
function $pop_0(this$static){
  var sz;
  sz = this$static.arrayList.array.length;
  if (sz > 0) {
    return checkArrayElementIndex(sz - 1, this$static.arrayList.array.length) , $remove_1(this$static.arrayList, sz - 1);
  }
   else {
    throw toJs(new EmptyStackException);
  }
}

$pop_0.displayName = 'java.util.Stack.$pop';
function $push_1(this$static, o){
  $add_0(this$static.arrayList, o);
  return o;
}

$push_1.displayName = 'java.util.Stack.$push';
function Stack(){
  this.arrayList = new ArrayList;
}

Stack.displayName = 'java.util.Stack.Stack';
defineClass(203, 202, $intern_29, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 203);
function $add_2(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_4(this$static.builder, this$static.delimiter);
  $append_2(this$static.builder, newElement);
  return this$static;
}

$add_2.displayName = 'java.util.StringJoiner.$add';
function $toString_5(this$static){
  return !this$static.builder?this$static.emptyValue:this$static.suffix.length == 0?this$static.builder.string:this$static.builder.string + ('' + this$static.suffix);
}

$toString_5.displayName = 'java.util.StringJoiner.$toString';
function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

StringJoiner.displayName = 'java.util.StringJoiner.StringJoiner';
defineClass(93, 1, {}, StringJoiner);
_.toString_0 = function toString_21(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
_.toString_0.displayName = 'java.util.StringJoiner.toString';
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 93);
function copy_0(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, len);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

copy_0.displayName = 'javaemul.internal.ArrayHelper.copy';
function removeFrom(array, index_0){
  array.splice(index_0, 1);
}

removeFrom.displayName = 'javaemul.internal.ArrayHelper.removeFrom';
defineClass(294, 1, {});
function stampJavaTypeInfo_1(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
}

stampJavaTypeInfo_1.displayName = 'javaemul.internal.ArrayStamper.stampJavaTypeInfo';
function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

checkCriticalArgument.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArgument';
function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

checkCriticalArgument_0.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArgument';
function checkCriticalArgument_1(expression, errorMessageArgs){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(format('Enum constant undefined: %s', errorMessageArgs)));
  }
}

checkCriticalArgument_1.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArgument';
function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

checkCriticalArrayType.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArrayType';
function checkCriticalArrayType_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new ArrayStoreException_0(errorMessage));
  }
}

checkCriticalArrayType_0.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArrayType';
function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

checkCriticalElement.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalElement';
function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

checkCriticalElementIndex.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalElementIndex';
function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

checkCriticalNotNull.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalNotNull';
function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_1(errorMessage));
  }
}

checkCriticalNotNull_0.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalNotNull';
function checkCriticalPositionIndex(size_0){
  if (0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: 0, Size: ' + size_0));
  }
}

checkCriticalPositionIndex.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalPositionIndex';
function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

checkCriticalState.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalState';
function checkCriticalStringBounds(end, length_0){
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

checkCriticalStringBounds.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalStringBounds';
function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

checkCriticalStringElementIndex.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalStringElementIndex';
function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

checkCriticalType.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalType';
function format(template, args){
  var builder, i, placeholderStart, templateStart;
  template = template;
  builder = new StringBuilder_0;
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_4(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_3(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_4(builder, template.substr(templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_3(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_3(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

format.displayName = 'javaemul.internal.InternalPreconditions.format';
function getProperty(map_0, key){
  return map_0[key];
}

getProperty.displayName = 'javaemul.internal.JsUtils.getProperty';
function isUndefined(value_0){
  return value_0 === undefined;
}

isUndefined.displayName = 'javaemul.internal.JsUtils.isUndefined';
function setProperty(map_0, key, value_0){
  map_0[key] = value_0;
}

setProperty.displayName = 'javaemul.internal.JsUtils.setProperty';
function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

setPropertySafe.displayName = 'javaemul.internal.JsUtils.setPropertySafe';
function uncheckedCast(o){
  return o;
}

uncheckedCast.displayName = 'javaemul.internal.JsUtils.uncheckedCast';
function unsafeCastToBoolean(bool){
  return bool;
}

unsafeCastToBoolean.displayName = 'javaemul.internal.JsUtils.unsafeCastToBoolean';
function unsafeCastToDouble(number){
  return number;
}

unsafeCastToDouble.displayName = 'javaemul.internal.JsUtils.unsafeCastToDouble';
defineClass(291, 1, {});
function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

getHashCode.displayName = 'javaemul.internal.ObjectHashing.getHashCode';
function getNextHashId(){
  return ++nextHashId;
}

getNextHashId.displayName = 'javaemul.internal.ObjectHashing.getNextHashId';
var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

$clinit_StringHashCache.displayName = 'javaemul.internal.StringHashCache.$clinit';
function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

compute.displayName = 'javaemul.internal.StringHashCache.compute';
function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

getHashCode_0.displayName = 'javaemul.internal.StringHashCache.getHashCode';
function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

increment.displayName = 'javaemul.internal.StringHashCache.increment';
var back_0, count_0 = 0, front;
defineClass(674, 1, {});
function AbstractIntegerDistribution(rng){
  this.random = rng;
}

AbstractIntegerDistribution.displayName = 'org.apache.commons.math3.distribution.AbstractIntegerDistribution.AbstractIntegerDistribution';
defineClass(221, 1, {});
var Lorg_apache_commons_math3_distribution_AbstractIntegerDistribution_2_classLit = createForClass('org.apache.commons.math3.distribution', 'AbstractIntegerDistribution', 221);
function $sample(this$static){
  var max_0, r;
  max_0 = this$static.upper - this$static.lower + 1;
  if (max_0 <= 0) {
    while (true) {
      r = $next_7(this$static.random, 32);
      if (r >= this$static.lower && r <= this$static.upper) {
        return r;
      }
    }
  }
   else {
    return this$static.lower + $nextInt_0(this$static.random, max_0);
  }
}

$sample.displayName = 'org.apache.commons.math3.distribution.UniformIntegerDistribution.$sample';
function UniformIntegerDistribution(rng, upper){
  this.random = rng;
  if (0 > upper) {
    throw toJs((valueOf_0(0) , valueOf_0(upper) , new NumberIsTooLargeException));
  }
  this.lower = 0;
  this.upper = upper;
}

UniformIntegerDistribution.displayName = 'org.apache.commons.math3.distribution.UniformIntegerDistribution.UniformIntegerDistribution';
defineClass(222, 221, {}, UniformIntegerDistribution);
_.lower = 0;
_.upper = 0;
var Lorg_apache_commons_math3_distribution_UniformIntegerDistribution_2_classLit = createForClass('org.apache.commons.math3.distribution', 'UniformIntegerDistribution', 222);
function MathArithmeticException(){
  ArithmeticException.call(this);
  new ExceptionContext;
}

MathArithmeticException.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.MathArithmeticException';
function MathArithmeticException_0(){
  ArithmeticException.call(this);
  new ExceptionContext;
}

MathArithmeticException_0.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.MathArithmeticException';
defineClass(66, 78, $intern_4, MathArithmeticException, MathArithmeticException_0);
_.getLocalizedMessage = function getLocalizedMessage_0(){
  return null;
}
;
_.getLocalizedMessage.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.getLocalizedMessage';
_.getMessage = function getMessage_1(){
  return null;
}
;
_.getMessage.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.getMessage';
var Lorg_apache_commons_math3_exception_MathArithmeticException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathArithmeticException', 66);
function MathIllegalArgumentException(){
  IllegalArgumentException.call(this);
  new ExceptionContext;
}

MathIllegalArgumentException.displayName = 'org.apache.commons.math3.exception.MathIllegalArgumentException.MathIllegalArgumentException';
defineClass(211, 52, $intern_4);
_.getLocalizedMessage = function getLocalizedMessage_1(){
  return null;
}
;
_.getLocalizedMessage.displayName = 'org.apache.commons.math3.exception.MathIllegalArgumentException.getLocalizedMessage';
_.getMessage = function getMessage_2(){
  return null;
}
;
_.getMessage.displayName = 'org.apache.commons.math3.exception.MathIllegalArgumentException.getMessage';
var Lorg_apache_commons_math3_exception_MathIllegalArgumentException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathIllegalArgumentException', 211);
function $clinit_MathIllegalNumberException(){
  $clinit_MathIllegalNumberException = emptyMethod;
  valueOf_0(0);
}

$clinit_MathIllegalNumberException.displayName = 'org.apache.commons.math3.exception.MathIllegalNumberException.$clinit';
function MathIllegalNumberException(){
  IllegalArgumentException.call(this);
  new ExceptionContext;
}

MathIllegalNumberException.displayName = 'org.apache.commons.math3.exception.MathIllegalNumberException.MathIllegalNumberException';
defineClass(113, 211, $intern_4);
var Lorg_apache_commons_math3_exception_MathIllegalNumberException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathIllegalNumberException', 113);
function NumberIsTooSmallException(){
  NumberIsTooSmallException_0.call(this);
}

NumberIsTooSmallException.displayName = 'org.apache.commons.math3.exception.NumberIsTooSmallException.NumberIsTooSmallException';
function NumberIsTooSmallException_0(){
  MathIllegalNumberException.call(this);
}

NumberIsTooSmallException_0.displayName = 'org.apache.commons.math3.exception.NumberIsTooSmallException.NumberIsTooSmallException';
defineClass(71, 113, $intern_4);
var Lorg_apache_commons_math3_exception_NumberIsTooSmallException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NumberIsTooSmallException', 71);
function NotPositiveException(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException_0.call(this);
}

NotPositiveException.displayName = 'org.apache.commons.math3.exception.NotPositiveException.NotPositiveException';
defineClass(212, 71, $intern_4, NotPositiveException);
var Lorg_apache_commons_math3_exception_NotPositiveException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NotPositiveException', 212);
function NotStrictlyPositiveException(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException_0.call(this);
}

NotStrictlyPositiveException.displayName = 'org.apache.commons.math3.exception.NotStrictlyPositiveException.NotStrictlyPositiveException';
function NotStrictlyPositiveException_0(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException_0.call(this);
}

NotStrictlyPositiveException_0.displayName = 'org.apache.commons.math3.exception.NotStrictlyPositiveException.NotStrictlyPositiveException';
defineClass(114, 71, $intern_4, NotStrictlyPositiveException, NotStrictlyPositiveException_0);
var Lorg_apache_commons_math3_exception_NotStrictlyPositiveException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NotStrictlyPositiveException', 114);
function NumberIsTooLargeException(){
  $clinit_MathIllegalNumberException();
  MathIllegalNumberException.call(this);
}

NumberIsTooLargeException.displayName = 'org.apache.commons.math3.exception.NumberIsTooLargeException.NumberIsTooLargeException';
defineClass(88, 113, $intern_4, NumberIsTooLargeException);
var Lorg_apache_commons_math3_exception_NumberIsTooLargeException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NumberIsTooLargeException', 88);
function ExceptionContext(){
  new ArrayList;
  new ArrayList;
  new HashMap;
}

ExceptionContext.displayName = 'org.apache.commons.math3.exception.util.ExceptionContext.ExceptionContext';
defineClass(89, 1, {}, ExceptionContext);
var Lorg_apache_commons_math3_exception_util_ExceptionContext_2_classLit = createForClass('org.apache.commons.math3.exception.util', 'ExceptionContext', 89);
function $nextInt_0(this$static, n){
  var bits, val;
  if (n > 0) {
    if ((n & -n) == n) {
      return toInt_0(shr_0(mul_0(n, $next_7(this$static, 31)), 31));
    }
    do {
      bits = $next_7(this$static, 31);
      val = bits % n;
    }
     while (bits - val + (n - 1) < 0);
    return val;
  }
  throw toJs((valueOf_0(n) , new NotStrictlyPositiveException));
}

$nextInt_0.displayName = 'org.apache.commons.math3.random.BitsStreamGenerator.$nextInt';
defineClass(251, 1, {});
var Lorg_apache_commons_math3_random_BitsStreamGenerator_2_classLit = createForClass('org.apache.commons.math3.random', 'BitsStreamGenerator', 251);
function $setSeed_3(this$static, seed){
  var i, l;
  arraycopy(seed, 0, this$static.v, 0, $wnd.Math.min(seed.length, this$static.v.length));
  if (seed.length < this$static.v.length) {
    for (i = seed.length; i < this$static.v.length; ++i) {
      l = this$static.v[i - seed.length];
      this$static.v[i] = toInt_0(and_0(add_1(mul_0(1812433253, xor_0(l, shr_0(l, 30))), i), $intern_34));
    }
  }
  this$static.index_0 = 0;
}

$setSeed_3.displayName = 'org.apache.commons.math3.random.AbstractWell.$setSeed';
function AbstractWell(seed){
  AbstractWell_0.call(this, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_13, 10, 15, [toInt_0(createLongEmul(shru(isSmallLong0(seed)?toBigLong(seed):seed, 32))), toInt_0(and_0(seed, $intern_34))]));
}

AbstractWell.displayName = 'org.apache.commons.math3.random.AbstractWell.AbstractWell';
function AbstractWell_0(seed){
  var j;
  this.v = initUnidimensionalArray(I_classLit, $intern_13, 10, 624, 15, 1);
  this.index_0 = 0;
  this.iRm1 = initUnidimensionalArray(I_classLit, $intern_13, 10, 624, 15, 1);
  this.iRm2 = initUnidimensionalArray(I_classLit, $intern_13, 10, 624, 15, 1);
  this.i1 = initUnidimensionalArray(I_classLit, $intern_13, 10, 624, 15, 1);
  this.i2 = initUnidimensionalArray(I_classLit, $intern_13, 10, 624, 15, 1);
  this.i3 = initUnidimensionalArray(I_classLit, $intern_13, 10, 624, 15, 1);
  for (j = 0; j < 624; ++j) {
    this.iRm1[j] = (j + 624 - 1) % 624;
    this.iRm2[j] = (j + 624 - 2) % 624;
    this.i1[j] = (j + 70) % 624;
    this.i2[j] = (j + 179) % 624;
    this.i3[j] = (j + 449) % 624;
  }
  $setSeed_3(this, seed);
}

AbstractWell_0.displayName = 'org.apache.commons.math3.random.AbstractWell.AbstractWell';
defineClass(112, 251, {});
_.index_0 = 0;
var Lorg_apache_commons_math3_random_AbstractWell_2_classLit = createForClass('org.apache.commons.math3.random', 'AbstractWell', 112);
function $$init_32(this$static){
}

$$init_32.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.$$init';
function $initRan(this$static, seed){
  this$static.rand = new Well19937c(seed);
}

$initRan.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.$initRan';
function $nextPermutation(this$static, n, k){
  var index_0, output;
  if (k > n) {
    throw toJs((valueOf_0(k) , valueOf_0(n) , new NumberIsTooLargeException));
  }
  if (k <= 0) {
    throw toJs((valueOf_0(k) , new NotStrictlyPositiveException_0));
  }
  index_0 = sequence(n);
  shuffle(index_0, this$static.rand);
  return output = initUnidimensionalArray(I_classLit, $intern_13, 10, k, 15, 1) , arraycopy(index_0, 0, output, 0, $wnd.Math.min(k, index_0.length)) , output;
}

$nextPermutation.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.$nextPermutation';
function RandomDataGenerator(){
}

RandomDataGenerator.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.RandomDataGenerator';
defineClass(204, 1, {}, RandomDataGenerator);
_.rand = null;
var Lorg_apache_commons_math3_random_RandomDataGenerator_2_classLit = createForClass('org.apache.commons.math3.random', 'RandomDataGenerator', 204);
function $next_7(this$static, bits){
  var indexRm1, indexRm2, v0, vM1, vM2, vM3, z0, z1, z2, z3, z4;
  indexRm1 = this$static.iRm1[this$static.index_0];
  indexRm2 = this$static.iRm2[this$static.index_0];
  v0 = this$static.v[this$static.index_0];
  vM1 = this$static.v[this$static.i1[this$static.index_0]];
  vM2 = this$static.v[this$static.i2[this$static.index_0]];
  vM3 = this$static.v[this$static.i3[this$static.index_0]];
  z0 = $intern_26 & this$static.v[indexRm1] ^ $intern_1 & this$static.v[indexRm2];
  z1 = v0 ^ v0 << 25 ^ (vM1 ^ vM1 >>> 27);
  z2 = vM2 >>> 9 ^ (vM3 ^ vM3 >>> 1);
  z3 = z1 ^ z2;
  z4 = z0 ^ (z1 ^ z1 << 9) ^ (z2 ^ z2 << 21) ^ (z3 ^ z3 >>> 21);
  this$static.v[this$static.index_0] = z3;
  this$static.v[indexRm1] = z4;
  this$static.v[indexRm2] &= $intern_26;
  this$static.index_0 = indexRm1;
  z4 ^= z4 << 7 & -462547200;
  z4 ^= z4 << 15 & -1685684224;
  return z4 >>> 32 - bits;
}

$next_7.displayName = 'org.apache.commons.math3.random.Well19937c.$next';
function Well19937c(seed){
  AbstractWell_0.call(this, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_13, 10, 15, [toInt_0(createLongEmul(shru(isSmallLong0(seed)?toBigLong(seed):seed, 32))), toInt_0(and_0(seed, $intern_34))]));
}

Well19937c.displayName = 'org.apache.commons.math3.random.Well19937c.Well19937c';
defineClass(210, 112, {}, Well19937c);
var Lorg_apache_commons_math3_random_Well19937c_2_classLit = createForClass('org.apache.commons.math3.random', 'Well19937c', 210);
function gcd(p, q){
  var k, t, u, v;
  u = p;
  v = q;
  if (compare_0(p, 0) == 0 || compare_0(q, 0) == 0) {
    if (eq(p, $intern_35) || eq(q, $intern_35)) {
      throw toJs((stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf_1(p), valueOf_1(q)]) , new MathArithmeticException_0));
    }
    return add_1(compare_0(p, 0) < 0?neg_0(p):p, compare_0(q, 0) < 0?neg_0(q):q);
  }
  compare_0(p, 0) > 0 && (u = neg_0(p));
  compare_0(q, 0) > 0 && (v = neg_0(q));
  k = 0;
  while (eq(and_0(u, 1), 0) && eq(and_0(v, 1), 0) && k < 63) {
    u = div(u, 2);
    v = div(v, 2);
    ++k;
  }
  if (k == 63) {
    throw toJs((stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf_1(p), valueOf_1(q)]) , new MathArithmeticException_0));
  }
  t = eq(and_0(u, 1), 1)?v:neg_0(div(u, 2));
  do {
    while (eq(and_0(t, 1), 0)) {
      t = div(t, 2);
    }
    compare_0(t, 0) > 0?(u = neg_0(t)):(v = t);
    t = div(sub_1(v, u), 2);
  }
   while (compare_0(t, 0) != 0);
  return mul_0(neg_0(u), createLongEmul(shl(isSmallLong0(1)?toBigLong(1):1, k)));
}

gcd.displayName = 'org.apache.commons.math3.util.ArithmeticUtils.gcd';
function mulAndCheck(a, b){
  var ret;
  if (compare_0(a, b) > 0) {
    ret = mulAndCheck(b, a);
  }
   else {
    if (compare_0(a, 0) < 0) {
      if (compare_0(b, 0) < 0) {
        if (gte_0(a, div($intern_27, b))) {
          ret = mul_0(a, b);
        }
         else {
          throw toJs(new MathArithmeticException);
        }
      }
       else if (compare_0(b, 0) > 0) {
        if (lte(div($intern_35, b), a)) {
          ret = mul_0(a, b);
        }
         else {
          throw toJs(new MathArithmeticException);
        }
      }
       else {
        ret = 0;
      }
    }
     else if (compare_0(a, 0) > 0) {
      if (lte(a, div($intern_27, b))) {
        ret = mul_0(a, b);
      }
       else {
        throw toJs(new MathArithmeticException);
      }
    }
     else {
      ret = 0;
    }
  }
  return ret;
}

mulAndCheck.displayName = 'org.apache.commons.math3.util.ArithmeticUtils.mulAndCheck';
function binomialCoefficient(n, k){
  var d, i, j, result;
  checkBinomial(n, k);
  if (n == k || k == 0) {
    return 1;
  }
  if (k == 1 || k == n - 1) {
    return n;
  }
  if (k > (n / 2 | 0)) {
    return binomialCoefficient(n, n - k);
  }
  result = 1;
  if (n <= 61) {
    i = n - k + 1;
    for (j = 1; j <= k; j++) {
      result = div(mul_0(result, i), j);
      ++i;
    }
  }
   else if (n <= 66) {
    i = n - k + 1;
    for (j = 1; j <= k; j++) {
      d = gcd(i, j);
      result = mul_0(div(result, div(j, d)), div(i, d));
      ++i;
    }
  }
   else {
    i = n - k + 1;
    for (j = 1; j <= k; j++) {
      d = gcd(i, j);
      result = mulAndCheck(div(result, div(j, d)), div(i, d));
      ++i;
    }
  }
  return result;
}

binomialCoefficient.displayName = 'org.apache.commons.math3.util.CombinatoricsUtils.binomialCoefficient';
function checkBinomial(n, k){
  if (n < k) {
    throw toJs((valueOf_0(k) , valueOf_0(n) , new NumberIsTooLargeException));
  }
  if (n < 0) {
    throw toJs((valueOf_0(n) , new NotPositiveException));
  }
}

checkBinomial.displayName = 'org.apache.commons.math3.util.CombinatoricsUtils.checkBinomial';
function copyOf(source, len){
  var output;
  output = initUnidimensionalArray(I_classLit, $intern_13, 10, len, 15, 1);
  arraycopy(source, 0, output, 0, $wnd.Math.min(len, source.length));
  return output;
}

copyOf.displayName = 'org.apache.commons.math3.util.MathArrays.copyOf';
function sequence(size_0){
  var a, i;
  a = initUnidimensionalArray(I_classLit, $intern_13, 10, size_0, 15, 1);
  for (i = 0; i < size_0; i++) {
    a[i] = i;
  }
  return a;
}

sequence.displayName = 'org.apache.commons.math3.util.MathArrays.sequence';
function shuffle(list, rng){
  var i, target, temp;
  for (i = list.length - 1; i >= 0; i--) {
    i == 0?(target = 0):(target = $sample(new UniformIntegerDistribution(rng, i)));
    temp = list[target];
    list[target] = list[i];
    list[i] = temp;
  }
}

shuffle.displayName = 'org.apache.commons.math3.util.MathArrays.shuffle';
var C_classLit = createForPrimitive('char', 'C');
var I_classLit = createForPrimitive('int', 'I');
var Z_classLit = createForPrimitive('boolean', 'Z');
var J_classLit = createForPrimitive('long', 'J');
var B_classLit = createForPrimitive('byte', 'B');
var D_classLit = createForPrimitive('double', 'D');
var F_classLit = createForPrimitive('float', 'F');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'ie10']], [['locale', 'default'], ['user.agent', 'ie8']], [['locale', 'default'], ['user.agent', 'ie9']], [['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=codewars_js-0.js

