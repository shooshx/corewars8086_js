var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.codewars_js;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.13.1";
var $strongName = '386FC993701043E84DCEEED17B4563FA';
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
var $intern_0 = 65535, $intern_1 = 2147483647, $intern_2 = {3:1, 5:1}, $intern_3 = {3:1, 8:1}, $intern_4 = {3:1, 7:1, 4:1, 8:1}, $intern_5 = {53:1}, $intern_6 = 4194303, $intern_7 = 1048575, $intern_8 = 524288, $intern_9 = 4194304, $intern_10 = 17592186044416, $intern_11 = -17592186044416, $intern_12 = {3:1}, $intern_13 = -65536, $intern_14 = 65280, $intern_15 = 1024, $intern_16 = 2048, $intern_17 = {26:1, 3:1, 7:1, 8:1}, $intern_18 = 65536, $intern_19 = 5.099999904632568, $intern_20 = {66:1, 13:1}, $intern_21 = 1048576, $intern_22 = 0.949999988079071, $intern_23 = 0.800000011920929, $intern_24 = -2147483648, $intern_25 = {l:4194303, m:4194303, h:524287}, $intern_26 = {32:1}, $intern_27 = {3:1, 64:1}, $intern_28 = 15525485, $intern_29 = 5.9604644775390625E-8, $intern_30 = 16777216, $intern_31 = 16777215, $intern_32 = 4294967295, $intern_33 = {l:0, m:0, h:524288};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function create_com_google_gwt_useragent_client_UserAgent(){
  if (permutationId == 0) {
    return new UserAgentImplGecko1_8;
  }
  return new UserAgentImplSafari;
}

function create_com_google_gwt_dom_client_DOMImpl(){
  if (permutationId == 0) {
    return new DOMImplMozilla;
  }
  return new DOMImplWebkit;
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

function toString_6(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
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

function defineProperties(proto, propertyDefinition){
  for (var key in propertyDefinition) {
    propertyDefinition[key]['configurable'] = true;
  }
  Object.defineProperties(proto, propertyDefinition);
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = createSubclassPrototype(superTypeIdOrPrototype);
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function createSubclassPrototype(superTypeIdOrPrototype){
  var superPrototype = {};
  if (superTypeIdOrPrototype != null) {
    superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype;
    !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]);
  }
  return Object.create(superPrototype);
}

$wnd.goog = $wnd.goog || {};
$wnd.goog.global = $wnd.goog.global || $wnd;
prototypesByTypeId_0 = {};
function $equals(this$static, other){
  return maskUndefined(this$static) === maskUndefined(other);
}

$equals.displayName = 'java.lang.Object.$equals';
defineProperties($equals, {'name':{'value':'java.lang.Object.$equals'}});
function $getClass(this$static){
  return this$static.___clazz;
}

$getClass.displayName = 'java.lang.Object.$getClass';
defineProperties($getClass, {'name':{'value':'java.lang.Object.$getClass'}});
function $hashCode(this$static){
  return getObjectIdentityHashCode(this$static);
}

$hashCode.displayName = 'java.lang.Object.$hashCode';
defineProperties($hashCode, {'name':{'value':'java.lang.Object.$hashCode'}});
function Object_0(){
}

Object_0.displayName = 'java.lang.Object.Object';
defineProperties(Object_0, {'name':{'value':'java.lang.Object.Object'}});
function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_4(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?$equals(this$static, other):!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

equals_Ljava_lang_Object__Z__devirtual$.displayName = 'java.lang.Object.equals_Ljava_lang_Object__Z__devirtual$';
defineProperties(equals_Ljava_lang_Object__Z__devirtual$, {'name':{'value':'java.lang.Object.equals_Ljava_lang_Object__Z__devirtual$'}});
function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:getClass_1(this$static);
}

getClass__Ljava_lang_Class___devirtual$.displayName = 'java.lang.Object.getClass__Ljava_lang_Class___devirtual$';
defineProperties(getClass__Ljava_lang_Class___devirtual$, {'name':{'value':'java.lang.Object.getClass__Ljava_lang_Class___devirtual$'}});
function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?$hashCode_3(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getObjectIdentityHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getObjectIdentityHashCode(this$static);
}

hashCode__I__devirtual$.displayName = 'java.lang.Object.hashCode__I__devirtual$';
defineProperties(hashCode__I__devirtual$, {'name':{'value':'java.lang.Object.hashCode__I__devirtual$'}});
function toString_2(object){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
}

toString_2.displayName = 'java.lang.Object.toString';
defineProperties(toString_2, {'name':{'value':'java.lang.Object.toString'}});
defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return $equals(this, other);
}
;
_.equals_0.displayName = 'java.lang.Object.equals';
defineProperties(_.equals_0, {'name':{'value':'java.lang.Object.equals'}});
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.getClass_0.displayName = 'java.lang.Object.getClass';
defineProperties(_.getClass_0, {'name':{'value':'java.lang.Object.getClass'}});
_.hashCode_0 = function hashCode_0(){
  return getObjectIdentityHashCode(this);
}
;
_.hashCode_0.displayName = 'java.lang.Object.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.lang.Object.hashCode'}});
_.toString_0 = function toString_1(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.toString_0.displayName = 'java.lang.Object.toString';
defineProperties(_.toString_0, {'name':{'value':'java.lang.Object.toString'}});
_.equals = function(other){
  return this.equals_0(other);
}
;
_.equals.displayName = 'java.lang.Object.equals';
defineProperties(_.equals, {'name':{'value':'java.lang.Object.equals'}});
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.hashCode.displayName = 'java.lang.Object.hashCode';
defineProperties(_.hashCode, {'name':{'value':'java.lang.Object.hashCode'}});
_.toString = function(){
  return this.toString_0();
}
;
_.toString.displayName = 'java.lang.Object.toString';
defineProperties(_.toString, {'name':{'value':'java.lang.Object.toString'}});
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
defineProperties(canCast, {'name':{'value':'com.google.gwt.lang.Cast.canCast'}});
function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

castTo.displayName = 'com.google.gwt.lang.Cast.castTo';
defineProperties(castTo, {'name':{'value':'com.google.gwt.lang.Cast.castTo'}});
function castToArray(src_0){
  var elementTypeCategory;
  checkCriticalType(src_0 == null || Array.isArray(src_0) && (elementTypeCategory = getElementTypeCategory(src_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16)));
  return src_0;
}

castToArray.displayName = 'com.google.gwt.lang.Cast.castToArray';
defineProperties(castToArray, {'name':{'value':'com.google.gwt.lang.Cast.castToArray'}});
function castToBoolean(src_0){
  checkCriticalType(src_0 == null || instanceOfBoolean(src_0));
  return src_0;
}

castToBoolean.displayName = 'com.google.gwt.lang.Cast.castToBoolean';
defineProperties(castToBoolean, {'name':{'value':'com.google.gwt.lang.Cast.castToBoolean'}});
function castToDouble(src_0){
  checkCriticalType(src_0 == null || instanceOfDouble(src_0));
  return src_0;
}

castToDouble.displayName = 'com.google.gwt.lang.Cast.castToDouble';
defineProperties(castToDouble, {'name':{'value':'com.google.gwt.lang.Cast.castToDouble'}});
function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

castToJso.displayName = 'com.google.gwt.lang.Cast.castToJso';
defineProperties(castToJso, {'name':{'value':'com.google.gwt.lang.Cast.castToJso'}});
function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || jsinstanceOf(src_0, jsType));
  return src_0;
}

castToNative.displayName = 'com.google.gwt.lang.Cast.castToNative';
defineProperties(castToNative, {'name':{'value':'com.google.gwt.lang.Cast.castToNative'}});
function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

castToString.displayName = 'com.google.gwt.lang.Cast.castToString';
defineProperties(castToString, {'name':{'value':'com.google.gwt.lang.Cast.castToString'}});
function castToUnknownNative(src_0){
  return src_0;
}

castToUnknownNative.displayName = 'com.google.gwt.lang.Cast.castToUnknownNative';
defineProperties(castToUnknownNative, {'name':{'value':'com.google.gwt.lang.Cast.castToUnknownNative'}});
function charToString(x_0){
  return String.fromCharCode(x_0);
}

charToString.displayName = 'com.google.gwt.lang.Cast.charToString';
defineProperties(charToString, {'name':{'value':'com.google.gwt.lang.Cast.charToString'}});
function getClass_1(array){
  return array.___clazz || Array.isArray(array) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

getClass_1.displayName = 'com.google.gwt.lang.Cast.getClass';
defineProperties(getClass_1, {'name':{'value':'com.google.gwt.lang.Cast.getClass'}});
function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

hasJavaObjectVirtualDispatch.displayName = 'com.google.gwt.lang.Cast.hasJavaObjectVirtualDispatch';
defineProperties(hasJavaObjectVirtualDispatch, {'name':{'value':'com.google.gwt.lang.Cast.hasJavaObjectVirtualDispatch'}});
function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

instanceOf.displayName = 'com.google.gwt.lang.Cast.instanceOf';
defineProperties(instanceOf, {'name':{'value':'com.google.gwt.lang.Cast.instanceOf'}});
function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

instanceOfBoolean.displayName = 'com.google.gwt.lang.Cast.instanceOfBoolean';
defineProperties(instanceOfBoolean, {'name':{'value':'com.google.gwt.lang.Cast.instanceOfBoolean'}});
function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

instanceOfDouble.displayName = 'com.google.gwt.lang.Cast.instanceOfDouble';
defineProperties(instanceOfDouble, {'name':{'value':'com.google.gwt.lang.Cast.instanceOfDouble'}});
function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

instanceOfJso.displayName = 'com.google.gwt.lang.Cast.instanceOfJso';
defineProperties(instanceOfJso, {'name':{'value':'com.google.gwt.lang.Cast.instanceOfJso'}});
function instanceOfNative(src_0, jsType){
  return jsinstanceOf(src_0, jsType);
}

instanceOfNative.displayName = 'com.google.gwt.lang.Cast.instanceOfNative';
defineProperties(instanceOfNative, {'name':{'value':'com.google.gwt.lang.Cast.instanceOfNative'}});
function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

instanceOfString.displayName = 'com.google.gwt.lang.Cast.instanceOfString';
defineProperties(instanceOfString, {'name':{'value':'com.google.gwt.lang.Cast.instanceOfString'}});
function isArray(src_0){
  return Array.isArray(src_0);
}

isArray.displayName = 'com.google.gwt.lang.Cast.isArray';
defineProperties(isArray, {'name':{'value':'com.google.gwt.lang.Cast.isArray'}});
function isFunction(src_0){
  return typeof src_0 === 'function';
}

isFunction.displayName = 'com.google.gwt.lang.Cast.isFunction';
defineProperties(isFunction, {'name':{'value':'com.google.gwt.lang.Cast.isFunction'}});
function isJsObject(src_0){
  return typeof src_0 === 'object' || typeof src_0 == 'function';
}

isJsObject.displayName = 'com.google.gwt.lang.Cast.isJsObject';
defineProperties(isJsObject, {'name':{'value':'com.google.gwt.lang.Cast.isJsObject'}});
function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

isJsObjectOrFunction.displayName = 'com.google.gwt.lang.Cast.isJsObjectOrFunction';
defineProperties(isJsObjectOrFunction, {'name':{'value':'com.google.gwt.lang.Cast.isJsObjectOrFunction'}});
function isNotNull(src_0){
  return !!src_0;
}

isNotNull.displayName = 'com.google.gwt.lang.Cast.isNotNull';
defineProperties(isNotNull, {'name':{'value':'com.google.gwt.lang.Cast.isNotNull'}});
function isNull(src_0){
  return !src_0;
}

isNull.displayName = 'com.google.gwt.lang.Cast.isNull';
defineProperties(isNull, {'name':{'value':'com.google.gwt.lang.Cast.isNull'}});
function jsEquals(a, b){
  return a == b;
}

jsEquals.displayName = 'com.google.gwt.lang.Cast.jsEquals';
defineProperties(jsEquals, {'name':{'value':'com.google.gwt.lang.Cast.jsEquals'}});
function jsNotEquals(a, b){
  return a != b;
}

jsNotEquals.displayName = 'com.google.gwt.lang.Cast.jsNotEquals';
defineProperties(jsNotEquals, {'name':{'value':'com.google.gwt.lang.Cast.jsNotEquals'}});
function jsinstanceOf(obj, jsType){
  return obj && jsType && obj instanceof jsType;
}

jsinstanceOf.displayName = 'com.google.gwt.lang.Cast.jsinstanceOf';
defineProperties(jsinstanceOf, {'name':{'value':'com.google.gwt.lang.Cast.jsinstanceOf'}});
function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

maskUndefined.displayName = 'com.google.gwt.lang.Cast.maskUndefined';
defineProperties(maskUndefined, {'name':{'value':'com.google.gwt.lang.Cast.maskUndefined'}});
function narrow_byte(x_0){
  return x_0 << 24 >> 24;
}

narrow_byte.displayName = 'com.google.gwt.lang.Cast.narrow_byte';
defineProperties(narrow_byte, {'name':{'value':'com.google.gwt.lang.Cast.narrow_byte'}});
function narrow_char(x_0){
  return x_0 & $intern_0;
}

narrow_char.displayName = 'com.google.gwt.lang.Cast.narrow_char';
defineProperties(narrow_char, {'name':{'value':'com.google.gwt.lang.Cast.narrow_char'}});
function narrow_int(x_0){
  return x_0 | 0;
}

narrow_int.displayName = 'com.google.gwt.lang.Cast.narrow_int';
defineProperties(narrow_int, {'name':{'value':'com.google.gwt.lang.Cast.narrow_int'}});
function narrow_short(x_0){
  return x_0 << 16 >> 16;
}

narrow_short.displayName = 'com.google.gwt.lang.Cast.narrow_short';
defineProperties(narrow_short, {'name':{'value':'com.google.gwt.lang.Cast.narrow_short'}});
function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_1), -2147483648) | 0;
}

round_int.displayName = 'com.google.gwt.lang.Cast.round_int';
defineProperties(round_int, {'name':{'value':'com.google.gwt.lang.Cast.round_int'}});
var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

$ensureNamesAreInitialized.displayName = 'java.lang.Class.$ensureNamesAreInitialized';
defineProperties($ensureNamesAreInitialized, {'name':{'value':'java.lang.Class.$ensureNamesAreInitialized'}});
function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

$getName.displayName = 'java.lang.Class.$getName';
defineProperties($getName, {'name':{'value':'java.lang.Class.$getName'}});
function $isArray(this$static){
  return (this$static.modifiers & 4) != 0;
}

$isArray.displayName = 'java.lang.Class.$isArray';
defineProperties($isArray, {'name':{'value':'java.lang.Class.$isArray'}});
function $isPrimitive(this$static){
  return (this$static.modifiers & 1) != 0;
}

$isPrimitive.displayName = 'java.lang.Class.$isPrimitive';
defineProperties($isPrimitive, {'name':{'value':'java.lang.Class.$isPrimitive'}});
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
defineProperties(Class, {'name':{'value':'java.lang.Class.Class'}});
function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

createClassObject.displayName = 'java.lang.Class.createClassObject';
defineProperties(createClassObject, {'name':{'value':'java.lang.Class.createClassObject'}});
function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

createForClass.displayName = 'java.lang.Class.createForClass';
defineProperties(createForClass, {'name':{'value':'java.lang.Class.createForClass'}});
function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

createForEnum.displayName = 'java.lang.Class.createForEnum';
defineProperties(createForEnum, {'name':{'value':'java.lang.Class.createForEnum'}});
function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

createForPrimitive.displayName = 'java.lang.Class.createForPrimitive';
defineProperties(createForPrimitive, {'name':{'value':'java.lang.Class.createForPrimitive'}});
function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

getClassLiteralForArray_0.displayName = 'java.lang.Class.getClassLiteralForArray';
defineProperties(getClassLiteralForArray_0, {'name':{'value':'java.lang.Class.getClassLiteralForArray'}});
function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

getPrototypeForClass.displayName = 'java.lang.Class.getPrototypeForClass';
defineProperties(getPrototypeForClass, {'name':{'value':'java.lang.Class.getPrototypeForClass'}});
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
defineProperties(initializeNames, {'name':{'value':'java.lang.Class.initializeNames'}});
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
defineProperties(join_0, {'name':{'value':'java.lang.Class.join'}});
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
defineProperties(maybeSetClassLiteral, {'name':{'value':'java.lang.Class.maybeSetClassLiteral'}});
defineClass(86, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.createClassLiteralForArray.displayName = 'java.lang.Class.createClassLiteralForArray';
defineProperties(_.createClassLiteralForArray, {'name':{'value':'java.lang.Class.createClassLiteralForArray'}});
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getCanonicalName.displayName = 'java.lang.Class.getCanonicalName';
defineProperties(_.getCanonicalName, {'name':{'value':'java.lang.Class.getCanonicalName'}});
_.getName = function getName(){
  return $getName(this);
}
;
_.getName.displayName = 'java.lang.Class.getName';
defineProperties(_.getName, {'name':{'value':'java.lang.Class.getName'}});
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.getSimpleName.displayName = 'java.lang.Class.getSimpleName';
defineProperties(_.getSimpleName, {'name':{'value':'java.lang.Class.getSimpleName'}});
_.isArray_0 = function isArray_0(){
  return (this.modifiers & 4) != 0;
}
;
_.isArray_0.displayName = 'java.lang.Class.isArray';
defineProperties(_.isArray_0, {'name':{'value':'java.lang.Class.isArray'}});
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.isPrimitive.displayName = 'java.lang.Class.isPrimitive';
defineProperties(_.isPrimitive, {'name':{'value':'java.lang.Class.isPrimitive'}});
_.toString_0 = function toString_11(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.toString_0.displayName = 'java.lang.Class.toString';
defineProperties(_.toString_0, {'name':{'value':'java.lang.Class.toString'}});
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 86);
function $onModuleLoad(){
  var e;
  console.log('onModuleLoad');
  setUncaughtExceptionHandler(new codewars_js$1);
  try {
    new CompetitionWindow;
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
defineProperties($onModuleLoad, {'name':{'value':'com.client.codewars_js.$onModuleLoad'}});
function console_0(text_0){
  console.log(text_0);
}

console_0.displayName = 'com.client.codewars_js.console';
defineProperties(console_0, {'name':{'value':'com.client.codewars_js.console'}});
function codewars_js$1(){
}

codewars_js$1.displayName = 'com.client.codewars_js$1.codewars_js$1';
defineProperties(codewars_js$1, {'name':{'value':'com.client.codewars_js$1.codewars_js$1'}});
defineClass(116, 1, {}, codewars_js$1);
var Lcom_client_codewars_1js$1_2_classLit = createForClass('com.client', 'codewars_js/1', 116);
defineClass(233, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 233);
defineClass(81, 1, {81:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 81);
function $isNativelySupported(){
  return !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame;
}

$isNativelySupported.displayName = 'com.google.gwt.animation.client.AnimationScheduler$AnimationSupportDetector.$isNativelySupported';
defineProperties($isNativelySupported, {'name':{'value':'com.google.gwt.animation.client.AnimationScheduler$AnimationSupportDetector.$isNativelySupported'}});
function AnimationSchedulerImplStandard(){
}

AnimationSchedulerImplStandard.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard.AnimationSchedulerImplStandard';
defineProperties(AnimationSchedulerImplStandard, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplStandard.AnimationSchedulerImplStandard'}});
function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = Date.now();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

requestImpl.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard.requestImpl';
defineProperties(requestImpl, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplStandard.requestImpl'}});
defineClass(103, 233, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1;
}
;
_.requestAnimationFrame_0.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard.requestAnimationFrame';
defineProperties(_.requestAnimationFrame_0, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplStandard.requestAnimationFrame'}});
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 103);
function AnimationSchedulerImplStandard$1(){
}

AnimationSchedulerImplStandard$1.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplStandard$1.AnimationSchedulerImplStandard$1';
defineProperties(AnimationSchedulerImplStandard$1, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplStandard$1.AnimationSchedulerImplStandard$1'}});
defineClass(194, 81, {81:1}, AnimationSchedulerImplStandard$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 194);
function $$init(this$static){
  this$static.animationRequests = new ArrayList;
  this$static.timer = new AnimationSchedulerImplTimer$1(this$static);
}

$$init.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.$$init';
defineProperties($$init, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplTimer.$$init'}});
function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$array, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {213:1, 3:1, 5:1}, 82, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray_1(this$static.animationRequests, curAnimations), 213);
  duration = new Duration;
  for (requestId$array = curAnimations , requestId$index = 0 , requestId$max = requestId$array.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = requestId$array[requestId$index];
    $remove_2(this$static.animationRequests, requestId);
    $execute(requestId.callback);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, $wnd.Math.max(5, 16 - (Date.now() - duration.start_0)));
}

$updateAnimations.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.$updateAnimations';
defineProperties($updateAnimations, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplTimer.$updateAnimations'}});
function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

AnimationSchedulerImplTimer.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.AnimationSchedulerImplTimer';
defineProperties(AnimationSchedulerImplTimer, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplTimer.AnimationSchedulerImplTimer'}});
defineClass(104, 233, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(callback);
  $add_0(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
_.requestAnimationFrame_0.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer.requestAnimationFrame';
defineProperties(_.requestAnimationFrame_0, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplTimer.requestAnimationFrame'}});
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 104);
function $$init_0(this$static){
}

$$init_0.displayName = 'com.google.gwt.user.client.Timer.$$init';
defineProperties($$init_0, {'name':{'value':'com.google.gwt.user.client.Timer.$$init'}});
function $cancel(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

$cancel.displayName = 'com.google.gwt.user.client.Timer.$cancel';
defineProperties($cancel, {'name':{'value':'com.google.gwt.user.client.Timer.$cancel'}});
function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_0(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

$schedule.displayName = 'com.google.gwt.user.client.Timer.$schedule';
defineProperties($schedule, {'name':{'value':'com.google.gwt.user.client.Timer.$schedule'}});
function Timer(){
}

Timer.displayName = 'com.google.gwt.user.client.Timer.Timer';
defineProperties(Timer, {'name':{'value':'com.google.gwt.user.client.Timer.Timer'}});
function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

clearInterval_0.displayName = 'com.google.gwt.user.client.Timer.clearInterval';
defineProperties(clearInterval_0, {'name':{'value':'com.google.gwt.user.client.Timer.clearInterval'}});
function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

clearTimeout_0.displayName = 'com.google.gwt.user.client.Timer.clearTimeout';
defineProperties(clearTimeout_0, {'name':{'value':'com.google.gwt.user.client.Timer.clearTimeout'}});
function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

createCallback.displayName = 'com.google.gwt.user.client.Timer.createCallback';
defineProperties(createCallback, {'name':{'value':'com.google.gwt.user.client.Timer.createCallback'}});
function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

setTimeout_0.displayName = 'com.google.gwt.user.client.Timer.setTimeout';
defineProperties(setTimeout_0, {'name':{'value':'com.google.gwt.user.client.Timer.setTimeout'}});
defineClass(195, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $updateAnimations(this.this$01);
}
;
_.fire.displayName = 'com.google.gwt.user.client.Timer.fire';
defineProperties(_.fire, {'name':{'value':'com.google.gwt.user.client.Timer.fire'}});
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 195);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
}

AnimationSchedulerImplTimer$1.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer$1.AnimationSchedulerImplTimer$1';
defineProperties(AnimationSchedulerImplTimer$1, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplTimer$1.AnimationSchedulerImplTimer$1'}});
defineClass(196, 195, {}, AnimationSchedulerImplTimer$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 196);
function AnimationSchedulerImplTimer$AnimationHandleImpl(callback){
  this.callback = callback;
}

AnimationSchedulerImplTimer$AnimationHandleImpl.displayName = 'com.google.gwt.animation.client.AnimationSchedulerImplTimer$AnimationHandleImpl.AnimationSchedulerImplTimer$AnimationHandleImpl';
defineProperties(AnimationSchedulerImplTimer$AnimationHandleImpl, {'name':{'value':'com.google.gwt.animation.client.AnimationSchedulerImplTimer$AnimationHandleImpl.AnimationSchedulerImplTimer$AnimationHandleImpl'}});
defineClass(82, 81, {81:1, 82:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 82);
function $$init_1(this$static){
  this$static.start_0 = Date.now();
}

$$init_1.displayName = 'com.google.gwt.core.client.Duration.$$init';
defineProperties($$init_1, {'name':{'value':'com.google.gwt.core.client.Duration.$$init'}});
function Duration(){
  this.start_0 = Date.now();
}

Duration.displayName = 'com.google.gwt.core.client.Duration.Duration';
defineProperties(Duration, {'name':{'value':'com.google.gwt.core.client.Duration.Duration'}});
function currentTimeMillis(){
  return Date.now();
}

currentTimeMillis.displayName = 'com.google.gwt.core.client.Duration.currentTimeMillis';
defineProperties(currentTimeMillis, {'name':{'value':'com.google.gwt.core.client.Duration.currentTimeMillis'}});
function uncheckedConversion(elapsed){
  return elapsed;
}

uncheckedConversion.displayName = 'com.google.gwt.core.client.Duration.uncheckedConversion';
defineProperties(uncheckedConversion, {'name':{'value':'com.google.gwt.core.client.Duration.uncheckedConversion'}});
defineClass(152, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 152);
function isScript(){
  return true;
}

isScript.displayName = 'com.google.gwt.core.client.GWT.isScript';
defineProperties(isScript, {'name':{'value':'com.google.gwt.core.client.GWT.isScript'}});
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
  maybeInitializeWindowOnError();
}

setUncaughtExceptionHandler.displayName = 'com.google.gwt.core.client.GWT.setUncaughtExceptionHandler';
defineProperties(setUncaughtExceptionHandler, {'name':{'value':'com.google.gwt.core.client.GWT.setUncaughtExceptionHandler'}});
var uncaughtExceptionHandler = null;
function $$init_2(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 42, 0, 0, 1);
}

$$init_2.displayName = 'java.lang.Throwable.$$init';
defineProperties($$init_2, {'name':{'value':'java.lang.Throwable.$$init'}});
function $captureStackTrace(this$static){
  captureStackTrace(this$static);
}

$captureStackTrace.displayName = 'java.lang.Throwable.$captureStackTrace';
defineProperties($captureStackTrace, {'name':{'value':'java.lang.Throwable.$captureStackTrace'}});
function $constructJavaStackTrace(this$static){
  var stackTrace;
  return stackTrace = $getStackTrace(this$static) , dropInternalFrames(stackTrace);
}

$constructJavaStackTrace.displayName = 'java.lang.Throwable.$constructJavaStackTrace';
defineProperties($constructJavaStackTrace, {'name':{'value':'java.lang.Throwable.$constructJavaStackTrace'}});
function $fillInStackTrace(this$static){
  if (this$static.writableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

$fillInStackTrace.displayName = 'java.lang.Throwable.$fillInStackTrace';
defineProperties($fillInStackTrace, {'name':{'value':'java.lang.Throwable.$fillInStackTrace'}});
function $getCause(this$static){
  return this$static.cause_0;
}

$getCause.displayName = 'java.lang.Throwable.$getCause';
defineProperties($getCause, {'name':{'value':'java.lang.Throwable.$getCause'}});
function $getMessage(this$static){
  return this$static.detailMessage;
}

$getMessage.displayName = 'java.lang.Throwable.$getMessage';
defineProperties($getMessage, {'name':{'value':'java.lang.Throwable.$getMessage'}});
function $linkBack(this$static, error){
  if (error instanceof Object) {
    try {
      error.__java$exception = this$static;
      var throwable = this$static;
      Object.defineProperties(error, {cause:{get:function(){
        var cause = throwable.getCause();
        return cause && cause.getBackingJsObject();
      }
      }, suppressed:{get:function(){
        return throwable.getBackingSuppressed();
      }
      }});
    }
     catch (ignored) {
    }
  }
}

$linkBack.displayName = 'java.lang.Throwable.$linkBack';
defineProperties($linkBack, {'name':{'value':'java.lang.Throwable.$linkBack'}});
function $printStackTraceImpl(this$static, out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + prefix + this$static);
  $printStackTraceItems(this$static, out, ident);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_2, 8, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this$static.cause_0;
  !!theCause && $printStackTraceImpl(theCause, out, 'Caused by: ', ident);
}

$printStackTraceImpl.displayName = 'java.lang.Throwable.$printStackTraceImpl';
defineProperties($printStackTraceImpl, {'name':{'value':'java.lang.Throwable.$printStackTraceImpl'}});
function $printStackTraceItems(this$static, out, ident){
  var element, element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = (stackTrace = $getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}

$printStackTraceItems.displayName = 'java.lang.Throwable.$printStackTraceItems';
defineProperties($printStackTraceItems, {'name':{'value':'java.lang.Throwable.$printStackTraceItems'}});
function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  $linkBack(this$static, backingJsObject);
}

$setBackingJsObject.displayName = 'java.lang.Throwable.$setBackingJsObject';
defineProperties($setBackingJsObject, {'name':{'value':'java.lang.Throwable.$setBackingJsObject'}});
function $toString(this$static){
  return $toString_0(this$static, this$static.getLocalizedMessage());
}

$toString.displayName = 'java.lang.Throwable.$toString';
defineProperties($toString, {'name':{'value':'java.lang.Throwable.$toString'}});
function $toString_0(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

$toString_0.displayName = 'java.lang.Throwable.$toString';
defineProperties($toString_0, {'name':{'value':'java.lang.Throwable.$toString'}});
function Throwable(){
  $$init_2(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Throwable.displayName = 'java.lang.Throwable.Throwable';
defineProperties(Throwable, {'name':{'value':'java.lang.Throwable.Throwable'}});
function Throwable_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  $linkBack(this, backingJsObject);
  this.detailMessage = backingJsObject == null?'null':toString_6(backingJsObject);
}

Throwable_0.displayName = 'java.lang.Throwable.Throwable';
defineProperties(Throwable_0, {'name':{'value':'java.lang.Throwable.Throwable'}});
function Throwable_1(message){
  $$init_2(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Throwable_1.displayName = 'java.lang.Throwable.Throwable';
defineProperties(Throwable_1, {'name':{'value':'java.lang.Throwable.Throwable'}});
function Throwable_2(message, cause){
  $$init_2(this);
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Throwable_2.displayName = 'java.lang.Throwable.Throwable';
defineProperties(Throwable_2, {'name':{'value':'java.lang.Throwable.Throwable'}});
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
defineProperties(fixIE, {'name':{'value':'java.lang.Throwable.fixIE'}});
function of(e){
  var throwable;
  if (e != null) {
    throwable = e.__java$exception;
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new NullPointerException_0(e):new JsException_0(e);
}

of.displayName = 'java.lang.Throwable.of';
defineProperties(of, {'name':{'value':'java.lang.Throwable.of'}});
defineClass(8, 1, $intern_3);
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.createError.displayName = 'java.lang.Throwable.createError';
defineProperties(_.createError, {'name':{'value':'java.lang.Throwable.createError'}});
_.getBackingJsObject = function getBackingJsObject(){
  return this.backingJsObject;
}
;
_.getBackingJsObject.displayName = 'java.lang.Throwable.getBackingJsObject';
defineProperties(_.getBackingJsObject, {'name':{'value':'java.lang.Throwable.getBackingJsObject'}});
_.getBackingSuppressed = function getBackingSuppressed(){
  var i, result, suppressed;
  suppressed = (this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_2, 8, 0, 0, 1)) , this.suppressedExceptions);
  result = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, suppressed.length, 5, 1);
  for (i = 0; i < suppressed.length; i++) {
    result[i] = suppressed[i].backingJsObject;
  }
  return result;
}
;
_.getBackingSuppressed.displayName = 'java.lang.Throwable.getBackingSuppressed';
defineProperties(_.getBackingSuppressed, {'name':{'value':'java.lang.Throwable.getBackingSuppressed'}});
_.getCause = function getCause(){
  return this.cause_0;
}
;
_.getCause.displayName = 'java.lang.Throwable.getCause';
defineProperties(_.getCause, {'name':{'value':'java.lang.Throwable.getCause'}});
_.getLocalizedMessage = function getLocalizedMessage(){
  return this.getMessage();
}
;
_.getLocalizedMessage.displayName = 'java.lang.Throwable.getLocalizedMessage';
defineProperties(_.getLocalizedMessage, {'name':{'value':'java.lang.Throwable.getLocalizedMessage'}});
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.getMessage.displayName = 'java.lang.Throwable.getMessage';
defineProperties(_.getMessage, {'name':{'value':'java.lang.Throwable.getMessage'}});
_.initializeBackingError = function initializeBackingError(){
  $setBackingJsObject(this, fixIE(this.createError($toString_0(this, this.detailMessage))));
  captureStackTrace(this);
}
;
_.initializeBackingError.displayName = 'java.lang.Throwable.initializeBackingError';
defineProperties(_.initializeBackingError, {'name':{'value':'java.lang.Throwable.initializeBackingError'}});
_.toString_0 = function toString_3(){
  return $toString_0(this, this.getLocalizedMessage());
}
;
_.toString_0.displayName = 'java.lang.Throwable.toString';
defineProperties(_.toString_0, {'name':{'value':'java.lang.Throwable.toString'}});
_.backingJsObject = '__noinit__';
_.writableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 8);
function Exception(){
  $$init_2(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Exception.displayName = 'java.lang.Exception.Exception';
defineProperties(Exception, {'name':{'value':'java.lang.Exception.Exception'}});
function Exception_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  $linkBack(this, backingJsObject);
  this.detailMessage = backingJsObject == null?'null':toString_6(backingJsObject);
}

Exception_0.displayName = 'java.lang.Exception.Exception';
defineProperties(Exception_0, {'name':{'value':'java.lang.Exception.Exception'}});
function Exception_1(message){
  $$init_2(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Exception_1.displayName = 'java.lang.Exception.Exception';
defineProperties(Exception_1, {'name':{'value':'java.lang.Exception.Exception'}});
defineClass(7, 8, {3:1, 7:1, 8:1}, Exception, Exception_1);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 7);
function RuntimeException(){
  Exception.call(this);
}

RuntimeException.displayName = 'java.lang.RuntimeException.RuntimeException';
defineProperties(RuntimeException, {'name':{'value':'java.lang.RuntimeException.RuntimeException'}});
function RuntimeException_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  $linkBack(this, backingJsObject);
  this.detailMessage = backingJsObject == null?'null':toString_6(backingJsObject);
}

RuntimeException_0.displayName = 'java.lang.RuntimeException.RuntimeException';
defineProperties(RuntimeException_0, {'name':{'value':'java.lang.RuntimeException.RuntimeException'}});
function RuntimeException_1(message){
  Exception_1.call(this, message);
}

RuntimeException_1.displayName = 'java.lang.RuntimeException.RuntimeException';
defineProperties(RuntimeException_1, {'name':{'value':'java.lang.RuntimeException.RuntimeException'}});
defineClass(4, 7, $intern_4, RuntimeException, RuntimeException_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 4);
function JsException(){
  RuntimeException.call(this);
}

JsException.displayName = 'java.lang.JsException.JsException';
defineProperties(JsException, {'name':{'value':'java.lang.JsException.JsException'}});
function JsException_0(backingJsObject){
  $$init_2(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  $linkBack(this, backingJsObject);
  this.detailMessage = backingJsObject == null?'null':toString_6(backingJsObject);
}

JsException_0.displayName = 'java.lang.JsException.JsException';
defineProperties(JsException_0, {'name':{'value':'java.lang.JsException.JsException'}});
function JsException_1(msg){
  RuntimeException_1.call(this, msg);
}

JsException_1.displayName = 'java.lang.JsException.JsException';
defineProperties(JsException_1, {'name':{'value':'java.lang.JsException.JsException'}});
defineClass(56, 4, $intern_4, JsException_0);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 56);
function JavaScriptExceptionBase(e){
  JsException_0.call(this, e);
}

JavaScriptExceptionBase.displayName = 'com.google.gwt.core.client.impl.JavaScriptExceptionBase.JavaScriptExceptionBase';
defineProperties(JavaScriptExceptionBase, {'name':{'value':'com.google.gwt.core.client.impl.JavaScriptExceptionBase.JavaScriptExceptionBase'}});
defineClass(122, 56, $intern_4);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 122);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

$clinit_JavaScriptException.displayName = 'com.google.gwt.core.client.JavaScriptException.$clinit';
defineProperties($clinit_JavaScriptException, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.$clinit'}});
function $$init_3(this$static){
  this$static.description = '';
}

$$init_3.displayName = 'com.google.gwt.core.client.JavaScriptException.$$init';
defineProperties($$init_3, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.$$init'}});
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
defineProperties($ensureInit, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.$ensureInit'}});
function $getThrown(this$static){
  return maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
}

$getThrown.displayName = 'com.google.gwt.core.client.JavaScriptException.$getThrown';
defineProperties($getThrown, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.$getThrown'}});
function JavaScriptException(e){
  $clinit_JavaScriptException();
  JavaScriptExceptionBase.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

JavaScriptException.displayName = 'com.google.gwt.core.client.JavaScriptException.JavaScriptException';
defineProperties(JavaScriptException, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.JavaScriptException'}});
function JavaScriptException_0(e){
  JavaScriptExceptionBase.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

JavaScriptException_0.displayName = 'com.google.gwt.core.client.JavaScriptException.JavaScriptException';
defineProperties(JavaScriptException_0, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.JavaScriptException'}});
function getExceptionDescription0(e){
  return e == null?null:e.message;
}

getExceptionDescription0.displayName = 'com.google.gwt.core.client.JavaScriptException.getExceptionDescription0';
defineProperties(getExceptionDescription0, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.getExceptionDescription0'}});
function getExceptionName0(e){
  return e == null?null:e.name;
}

getExceptionName0.displayName = 'com.google.gwt.core.client.JavaScriptException.getExceptionName0';
defineProperties(getExceptionName0, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.getExceptionName0'}});
defineClass(57, 122, {57:1, 3:1, 7:1, 4:1, 8:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getMessage.displayName = 'com.google.gwt.core.client.JavaScriptException.getMessage';
defineProperties(_.getMessage, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.getMessage'}});
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
_.getThrown.displayName = 'com.google.gwt.core.client.JavaScriptException.getThrown';
defineProperties(_.getThrown, {'name':{'value':'com.google.gwt.core.client.JavaScriptException.getThrown'}});
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 57);
function $equals_0(this$static, other){
  return !!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

$equals_0.displayName = 'com.google.gwt.core.client.JavaScriptObject.$equals';
defineProperties($equals_0, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.$equals'}});
function $getClass_0(this$static){
  return getClass_1(this$static);
}

$getClass_0.displayName = 'com.google.gwt.core.client.JavaScriptObject.$getClass';
defineProperties($getClass_0, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.$getClass'}});
function $hashCode_0(this$static){
  return !!this$static && !!this$static.hashCode?this$static.hashCode():getObjectIdentityHashCode(this$static);
}

$hashCode_0.displayName = 'com.google.gwt.core.client.JavaScriptObject.$hashCode';
defineProperties($hashCode_0, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.$hashCode'}});
function callEquals(thisObject, thatObject){
  return thisObject.equals(thatObject);
}

callEquals.displayName = 'com.google.gwt.core.client.JavaScriptObject.callEquals';
defineProperties(callEquals, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.callEquals'}});
function callHashCode(object){
  return object.hashCode();
}

callHashCode.displayName = 'com.google.gwt.core.client.JavaScriptObject.callHashCode';
defineProperties(callHashCode, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.callHashCode'}});
function createArray(){
  return [];
}

createArray.displayName = 'com.google.gwt.core.client.JavaScriptObject.createArray';
defineProperties(createArray, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.createArray'}});
function createObject(){
  return {};
}

createObject.displayName = 'com.google.gwt.core.client.JavaScriptObject.createObject';
defineProperties(createObject, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.createObject'}});
function hasEquals(object){
  return !!object && !!object.equals;
}

hasEquals.displayName = 'com.google.gwt.core.client.JavaScriptObject.hasEquals';
defineProperties(hasEquals, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.hasEquals'}});
function hasHashCode(object){
  return !!object && !!object.hashCode;
}

hasHashCode.displayName = 'com.google.gwt.core.client.JavaScriptObject.hasHashCode';
defineProperties(hasHashCode, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.hasHashCode'}});
function toStringSimple(obj){
  return obj.toString?obj.toString():'[JavaScriptObject]';
}

toStringSimple.displayName = 'com.google.gwt.core.client.JavaScriptObject.toStringSimple';
defineProperties(toStringSimple, {'name':{'value':'com.google.gwt.core.client.JavaScriptObject.toStringSimple'}});
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function $get(this$static, index_0){
  return this$static[index_0];
}

$get.displayName = 'com.google.gwt.core.client.JsArray.$get';
defineProperties($get, {'name':{'value':'com.google.gwt.core.client.JsArray.$get'}});
function $length(this$static){
  return this$static.length;
}

$length.displayName = 'com.google.gwt.core.client.JsArray.$length';
defineProperties($length, {'name':{'value':'com.google.gwt.core.client.JsArray.$length'}});
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

$push.displayName = 'com.google.gwt.core.client.JsArray.$push';
defineProperties($push, {'name':{'value':'com.google.gwt.core.client.JsArray.$push'}});
function $get_0(this$static, index_0){
  return this$static[index_0];
}

$get_0.displayName = 'com.google.gwt.core.client.JsArrayString.$get';
defineProperties($get_0, {'name':{'value':'com.google.gwt.core.client.JsArrayString.$get'}});
function $length_0(this$static){
  return this$static.length;
}

$length_0.displayName = 'com.google.gwt.core.client.JsArrayString.$length';
defineProperties($length_0, {'name':{'value':'com.google.gwt.core.client.JsArrayString.$length'}});
function now_1(){
  return Date.now();
}

now_1.displayName = 'com.google.gwt.core.client.JsDate.now';
defineProperties(now_1, {'name':{'value':'com.google.gwt.core.client.JsDate.now'}});
defineClass(214, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 214);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

apply_0.displayName = 'com.google.gwt.core.client.impl.Impl.apply';
defineProperties(apply_0, {'name':{'value':'com.google.gwt.core.client.impl.Impl.apply'}});
function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = Date.now();
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
defineProperties(enter, {'name':{'value':'com.google.gwt.core.client.impl.Impl.enter'}});
function entry_0(jsFunction){
  return function(){
    return entry0_0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

entry_0.displayName = 'com.google.gwt.core.client.impl.Impl.entry';
defineProperties(entry_0, {'name':{'value':'com.google.gwt.core.client.impl.Impl.entry'}});
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
defineProperties(entry0_0, {'name':{'value':'com.google.gwt.core.client.impl.Impl.entry0'}});
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
defineProperties(exit, {'name':{'value':'com.google.gwt.core.client.impl.Impl.exit'}});
function maybeInitializeWindowOnError(){
  if (onErrorInitialized) {
    return;
  }
  onErrorInitialized = true;
  registerWindowOnError(false);
}

maybeInitializeWindowOnError.displayName = 'com.google.gwt.core.client.impl.Impl.maybeInitializeWindowOnError';
defineProperties(maybeInitializeWindowOnError, {'name':{'value':'com.google.gwt.core.client.impl.Impl.maybeInitializeWindowOnError'}});
function registerEntry(){
  return entry_0;
}

registerEntry.displayName = 'com.google.gwt.core.client.impl.Impl.registerEntry';
defineProperties(registerEntry, {'name':{'value':'com.google.gwt.core.client.impl.Impl.registerEntry'}});
function registerWindowOnError(reportAlways){
  function errorHandler(msg, url_0, line, column, error){
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
defineProperties(registerWindowOnError, {'name':{'value':'com.google.gwt.core.client.impl.Impl.registerWindowOnError'}});
function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

reportToBrowser.displayName = 'com.google.gwt.core.client.impl.Impl.reportToBrowser';
defineProperties(reportToBrowser, {'name':{'value':'com.google.gwt.core.client.impl.Impl.reportToBrowser'}});
function reportUncaughtException(e, reportSwallowedExceptionToBrowser){
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
    reportToBrowser(instanceOf(e, 57)?castTo(e, 57).getThrown():e);
  }
   else {
    $clinit_System();
    $printStackTraceImpl(e, err, '', '');
  }
}

reportUncaughtException.displayName = 'com.google.gwt.core.client.impl.Impl.reportUncaughtException';
defineProperties(reportUncaughtException, {'name':{'value':'com.google.gwt.core.client.impl.Impl.reportUncaughtException'}});
function reportWindowOnError(e){
  reportUncaughtException(e, false);
}

reportWindowOnError.displayName = 'com.google.gwt.core.client.impl.Impl.reportWindowOnError';
defineProperties(reportWindowOnError, {'name':{'value':'com.google.gwt.core.client.impl.Impl.reportWindowOnError'}});
function undefined_0(){
  return;
}

undefined_0.displayName = 'com.google.gwt.core.client.impl.Impl.undefined';
defineProperties(undefined_0, {'name':{'value':'com.google.gwt.core.client.impl.Impl.undefined'}});
function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

watchdogEntryDepthCancel.displayName = 'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthCancel';
defineProperties(watchdogEntryDepthCancel, {'name':{'value':'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthCancel'}});
function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

watchdogEntryDepthRun.displayName = 'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthRun';
defineProperties(watchdogEntryDepthRun, {'name':{'value':'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthRun'}});
function watchdogEntryDepthSchedule(){
  return $wnd.setTimeout(watchdogEntryDepthRun, 10);
}

watchdogEntryDepthSchedule.displayName = 'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthSchedule';
defineProperties(watchdogEntryDepthSchedule, {'name':{'value':'com.google.gwt.core.client.impl.Impl.watchdogEntryDepthSchedule'}});
var entryDepth = 0, onErrorInitialized = false, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

$clinit_SchedulerImpl.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.$clinit';
defineProperties($clinit_SchedulerImpl, {'name':{'value':'com.google.gwt.core.client.impl.SchedulerImpl.$clinit'}});
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
defineProperties($flushEntryCommands, {'name':{'value':'com.google.gwt.core.client.impl.SchedulerImpl.$flushEntryCommands'}});
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
defineProperties($flushFinallyCommands, {'name':{'value':'com.google.gwt.core.client.impl.SchedulerImpl.$flushFinallyCommands'}});
function SchedulerImpl(){
}

SchedulerImpl.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.SchedulerImpl';
defineProperties(SchedulerImpl, {'name':{'value':'com.google.gwt.core.client.impl.SchedulerImpl.SchedulerImpl'}});
function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

push_0.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.push';
defineProperties(push_0, {'name':{'value':'com.google.gwt.core.client.impl.SchedulerImpl.push'}});
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
        reportUncaughtException(e, true);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

runScheduledTasks.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl.runScheduledTasks';
defineProperties(runScheduledTasks, {'name':{'value':'com.google.gwt.core.client.impl.SchedulerImpl.runScheduledTasks'}});
defineClass(130, 214, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 130);
function $getRepeating(this$static){
  return this$static[0];
}

$getRepeating.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl$Task.$getRepeating';
defineProperties($getRepeating, {'name':{'value':'com.google.gwt.core.client.impl.SchedulerImpl$Task.$getRepeating'}});
function $getScheduled(this$static){
  return this$static[0];
}

$getScheduled.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl$Task.$getScheduled';
defineProperties($getScheduled, {'name':{'value':'com.google.gwt.core.client.impl.SchedulerImpl$Task.$getScheduled'}});
function $isRepeating(this$static){
  return this$static[1];
}

$isRepeating.displayName = 'com.google.gwt.core.client.impl.SchedulerImpl$Task.$isRepeating';
defineProperties($isRepeating, {'name':{'value':'com.google.gwt.core.client.impl.SchedulerImpl$Task.$isRepeating'}});
function captureStackTrace(error){
}

captureStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.captureStackTrace';
defineProperties(captureStackTrace, {'name':{'value':'com.google.gwt.core.client.impl.StackTraceCreator.captureStackTrace'}});
function constructJavaStackTrace(thrown){
  var stackTrace;
  stackTrace = $getStackTrace(thrown);
  return dropInternalFrames(stackTrace);
}

constructJavaStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.constructJavaStackTrace';
defineProperties(constructJavaStackTrace, {'name':{'value':'com.google.gwt.core.client.impl.StackTraceCreator.constructJavaStackTrace'}});
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
defineProperties(dropInternalFrames, {'name':{'value':'com.google.gwt.core.client.impl.StackTraceCreator.dropInternalFrames'}});
function parseInt_0(number){
  return parseInt(number) || -1;
}

parseInt_0.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.parseInt';
defineProperties(parseInt_0, {'name':{'value':'com.google.gwt.core.client.impl.StackTraceCreator.parseInt'}});
function split_0(t){
  var e = t.backingJsObject;
  if (e && e.stack) {
    var stack_0 = e.stack;
    var toString_0 = e + '\n';
    stack_0.substring(0, toString_0.length) == toString_0 && (stack_0 = stack_0.substring(toString_0.length));
    return stack_0.split('\n');
  }
  return [];
}

split_0.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator.split';
defineProperties(split_0, {'name':{'value':'com.google.gwt.core.client.impl.StackTraceCreator.split'}});
function $getStackTrace(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste;
  stack_0 = split_0(t);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 42, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(stack_0[0]);
  $equals_4(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(stack_0[i]);
  }
  return stackTrace;
}

$getStackTrace.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$getStackTrace';
defineProperties($getStackTrace, {'name':{'value':'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$getStackTrace'}});
function $parse(stString){
  var closeParen, endFileUrlIndex, fileName, index_0, lastColonIndex, location_0, toReturn;
  location_0 = '';
  if (stString.length == 0) {
    return new StackTraceElement('anonymous', 'Unknown');
  }
  toReturn = $trim(stString);
  toReturn.startsWith('at ') && (toReturn = (checkCriticalStringElementIndex(3, toReturn.length + 1) , toReturn.substr(3)));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim((checkCriticalStringElementIndex(index_0 + 1, toReturn.length + 1) , toReturn.substr(index_0 + 1)));
      toReturn = $trim((checkCriticalStringBounds(0, index_0, toReturn.length) , toReturn.substr(0, index_0)));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = (checkCriticalStringBounds(index_0 + 1, closeParen, toReturn.length) , toReturn.substr(index_0 + 1, closeParen - (index_0 + 1)));
    toReturn = $trim((checkCriticalStringBounds(0, index_0, toReturn.length) , toReturn.substr(0, index_0)));
  }
  index_0 = toReturn.indexOf(fromCodePoint(46));
  index_0 != -1 && (toReturn = (checkCriticalStringElementIndex(index_0 + 1, toReturn.length + 1) , toReturn.substr(index_0 + 1)));
  (toReturn.length == 0 || $equals_4(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = location_0.lastIndexOf(fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf(location_0, fromCodePoint(58), lastColonIndex - 1);
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = (checkCriticalStringBounds(0, endFileUrlIndex, location_0.length) , location_0.substr(0, endFileUrlIndex));
    parseInt_0((checkCriticalStringBounds(endFileUrlIndex + 1, lastColonIndex, location_0.length) , location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1))));
    parseInt_0((checkCriticalStringElementIndex(lastColonIndex + 1, location_0.length + 1) , location_0.substr(lastColonIndex + 1)));
  }
  return new StackTraceElement(toReturn, fileName);
}

$parse.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$parse';
defineProperties($parse, {'name':{'value':'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$parse'}});
function $stripSquareBrackets(toReturn){
  return toReturn.replace(/\[.*?\]/g, '');
}

$stripSquareBrackets.displayName = 'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$stripSquareBrackets';
defineProperties($stripSquareBrackets, {'name':{'value':'com.google.gwt.core.client.impl.StackTraceCreator$CollectorModern.$stripSquareBrackets'}});
function $clinit_DOMImpl(){
  $clinit_DOMImpl = emptyMethod;
  castTo(create_com_google_gwt_dom_client_DOMImpl(), 53);
}

$clinit_DOMImpl.displayName = 'com.google.gwt.dom.client.DOMImpl.$clinit';
defineProperties($clinit_DOMImpl, {'name':{'value':'com.google.gwt.dom.client.DOMImpl.$clinit'}});
defineClass(53, 1, $intern_5);
var Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 53);
defineClass(235, 53, $intern_5);
var Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 235);
function DOMImplMozilla(){
  $clinit_DOMImpl();
}

DOMImplMozilla.displayName = 'com.google.gwt.dom.client.DOMImplMozilla.DOMImplMozilla';
defineProperties(DOMImplMozilla, {'name':{'value':'com.google.gwt.dom.client.DOMImplMozilla.DOMImplMozilla'}});
defineClass(202, 235, $intern_5, DOMImplMozilla);
var Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplMozilla', 202);
defineClass(236, 235, $intern_5);
var Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 236);
function DOMImplWebkit(){
  $clinit_DOMImpl();
}

DOMImplWebkit.displayName = 'com.google.gwt.dom.client.DOMImplWebkit.DOMImplWebkit';
defineProperties(DOMImplWebkit, {'name':{'value':'com.google.gwt.dom.client.DOMImplWebkit.DOMImplWebkit'}});
defineClass(201, 236, $intern_5, DOMImplWebkit);
var Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 201);
function $getCompatMode(this$static){
  return this$static.compatMode;
}

$getCompatMode.displayName = 'com.google.gwt.dom.client.Document.$getCompatMode';
defineProperties($getCompatMode, {'name':{'value':'com.google.gwt.dom.client.Document.$getCompatMode'}});
function nativeGet(){
  return $doc;
}

nativeGet.displayName = 'com.google.gwt.dom.client.Document.nativeGet';
defineProperties(nativeGet, {'name':{'value':'com.google.gwt.dom.client.Document.nativeGet'}});
function asArray(array){
  return array;
}

asArray.displayName = 'com.google.gwt.lang.Array.asArray';
defineProperties(asArray, {'name':{'value':'com.google.gwt.lang.Array.asArray'}});
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
defineProperties(canSet, {'name':{'value':'com.google.gwt.lang.Array.canSet'}});
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

getClassLiteralForArray.displayName = 'com.google.gwt.lang.Array.getClassLiteralForArray';
defineProperties(getClassLiteralForArray, {'name':{'value':'com.google.gwt.lang.Array.getClassLiteralForArray'}});
function getClassLiteralForArrayImpl(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

getClassLiteralForArrayImpl.displayName = 'com.google.gwt.lang.Array.getClassLiteralForArrayImpl';
defineProperties(getClassLiteralForArrayImpl, {'name':{'value':'com.google.gwt.lang.Array.getClassLiteralForArrayImpl'}});
function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

getElementTypeCategory.displayName = 'com.google.gwt.lang.Array.getElementTypeCategory';
defineProperties(getElementTypeCategory, {'name':{'value':'com.google.gwt.lang.Array.getElementTypeCategory'}});
function getElementTypeId(array){
  return array.__elementTypeId$;
}

getElementTypeId.displayName = 'com.google.gwt.lang.Array.getElementTypeId';
defineProperties(getElementTypeId, {'name':{'value':'com.google.gwt.lang.Array.getElementTypeId'}});
function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

initUnidimensionalArray.displayName = 'com.google.gwt.lang.Array.initUnidimensionalArray';
defineProperties(initUnidimensionalArray, {'name':{'value':'com.google.gwt.lang.Array.initUnidimensionalArray'}});
function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
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
defineProperties(initializeArrayElementsWithDefaults, {'name':{'value':'com.google.gwt.lang.Array.initializeArrayElementsWithDefaults'}});
function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

isJavaArray.displayName = 'com.google.gwt.lang.Array.isJavaArray';
defineProperties(isJavaArray, {'name':{'value':'com.google.gwt.lang.Array.isJavaArray'}});
function newArray(size_0){
  return new Array(size_0);
}

newArray.displayName = 'com.google.gwt.lang.Array.newArray';
defineProperties(newArray, {'name':{'value':'com.google.gwt.lang.Array.newArray'}});
function set_0(array, index_0, value_0){
  return array[index_0] = value_0;
}

set_0.displayName = 'com.google.gwt.lang.Array.set';
defineProperties(set_0, {'name':{'value':'com.google.gwt.lang.Array.set'}});
function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

setCheck.displayName = 'com.google.gwt.lang.Array.setCheck';
defineProperties(setCheck, {'name':{'value':'com.google.gwt.lang.Array.setCheck'}});
function setClass(o, clazz){
  o.___clazz = clazz;
}

setClass.displayName = 'com.google.gwt.lang.Array.setClass';
defineProperties(setClass, {'name':{'value':'com.google.gwt.lang.Array.setClass'}});
function setElementTypeCategory(array, elementTypeCategory){
  array.__elementTypeCategory$ = elementTypeCategory;
}

setElementTypeCategory.displayName = 'com.google.gwt.lang.Array.setElementTypeCategory';
defineProperties(setElementTypeCategory, {'name':{'value':'com.google.gwt.lang.Array.setElementTypeCategory'}});
function setElementTypeId(array, elementTypeId){
  array.__elementTypeId$ = elementTypeId;
}

setElementTypeId.displayName = 'com.google.gwt.lang.Array.setElementTypeId';
defineProperties(setElementTypeId, {'name':{'value':'com.google.gwt.lang.Array.setElementTypeId'}});
function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

stampJavaTypeInfo.displayName = 'com.google.gwt.lang.Array.stampJavaTypeInfo';
defineProperties(stampJavaTypeInfo, {'name':{'value':'com.google.gwt.lang.Array.stampJavaTypeInfo'}});
function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

stampJavaTypeInfo_0.displayName = 'com.google.gwt.lang.Array.stampJavaTypeInfo';
defineProperties(stampJavaTypeInfo_0, {'name':{'value':'com.google.gwt.lang.Array.stampJavaTypeInfo'}});
function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_6;
  a1 = value_0 >> 22 & $intern_6;
  a2 = value_0 < 0?$intern_7:0;
  return create0(a0, a1, a2);
}

create.displayName = 'com.google.gwt.lang.BigLongLibBase.create';
defineProperties(create, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.create'}});
function create_0(a){
  return create0(a.l, a.m, a.h);
}

create_0.displayName = 'com.google.gwt.lang.BigLongLibBase.create';
defineProperties(create_0, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.create'}});
function create0(l, m, h){
  return {l:l, m:m, h:h};
}

create0.displayName = 'com.google.gwt.lang.BigLongLibBase.create0';
defineProperties(create0, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.create0'}});
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
    negative = !negative;
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
defineProperties(divMod, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.divMod'}});
function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_8 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

divModByMinValue.displayName = 'com.google.gwt.lang.BigLongLibBase.divModByMinValue';
defineProperties(divModByMinValue, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.divModByMinValue'}});
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
defineProperties(divModByShift, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.divModByShift'}});
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
defineProperties(divModHelper, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.divModHelper'}});
function getHNative(a){
  return a.h;
}

getHNative.displayName = 'com.google.gwt.lang.BigLongLibBase.getHNative';
defineProperties(getHNative, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.getHNative'}});
function getLNative(a){
  return a.l;
}

getLNative.displayName = 'com.google.gwt.lang.BigLongLibBase.getLNative';
defineProperties(getLNative, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.getLNative'}});
function getMNative(a){
  return a.m;
}

getMNative.displayName = 'com.google.gwt.lang.BigLongLibBase.getMNative';
defineProperties(getMNative, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.getMNative'}});
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
defineProperties(maskRight, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.maskRight'}});
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
defineProperties(negate, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.negate'}});
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
defineProperties(numberOfLeadingZeros, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.numberOfLeadingZeros'}});
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
defineProperties(powerOfTwo, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.powerOfTwo'}});
function setBitH(a, bit){
  a.h |= 1 << bit;
}

setBitH.displayName = 'com.google.gwt.lang.BigLongLibBase.setBitH';
defineProperties(setBitH, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.setBitH'}});
function setBitL(a, bit){
  a.l |= 1 << bit;
}

setBitL.displayName = 'com.google.gwt.lang.BigLongLibBase.setBitL';
defineProperties(setBitL, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.setBitL'}});
function setBitM(a, bit){
  a.m |= 1 << bit;
}

setBitM.displayName = 'com.google.gwt.lang.BigLongLibBase.setBitM';
defineProperties(setBitM, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.setBitM'}});
function setH(a, x_0){
  a.h = x_0;
}

setH.displayName = 'com.google.gwt.lang.BigLongLibBase.setH';
defineProperties(setH, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.setH'}});
function setL(a, x_0){
  a.l = x_0;
}

setL.displayName = 'com.google.gwt.lang.BigLongLibBase.setL';
defineProperties(setL, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.setL'}});
function setM(a, x_0){
  a.m = x_0;
}

setM.displayName = 'com.google.gwt.lang.BigLongLibBase.setM';
defineProperties(setM, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.setM'}});
function toDoubleHelper(a){
  return a.l + a.m * $intern_9 + a.h * $intern_10;
}

toDoubleHelper.displayName = 'com.google.gwt.lang.BigLongLibBase.toDoubleHelper';
defineProperties(toDoubleHelper, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.toDoubleHelper'}});
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
defineProperties(toShru1, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.toShru1'}});
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
defineProperties(trialSubtract, {'name':{'value':'com.google.gwt.lang.BigLongLibBase.trialSubtract'}});
var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_6, sum1 & $intern_6, sum2 & $intern_7);
}

add_0.displayName = 'com.google.gwt.lang.BigLongLib.add';
defineProperties(add_0, {'name':{'value':'com.google.gwt.lang.BigLongLib.add'}});
function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

and.displayName = 'com.google.gwt.lang.BigLongLib.and';
defineProperties(and, {'name':{'value':'com.google.gwt.lang.BigLongLib.and'}});
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
defineProperties(compare, {'name':{'value':'com.google.gwt.lang.BigLongLib.compare'}});
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
defineProperties(fromDouble, {'name':{'value':'com.google.gwt.lang.BigLongLib.fromDouble'}});
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
defineProperties(mul, {'name':{'value':'com.google.gwt.lang.BigLongLib.mul'}});
function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_6;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_6;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_7;
  return create0(neg0, neg1, neg2);
}

neg.displayName = 'com.google.gwt.lang.BigLongLib.neg';
defineProperties(neg, {'name':{'value':'com.google.gwt.lang.BigLongLib.neg'}});
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
defineProperties(shl, {'name':{'value':'com.google.gwt.lang.BigLongLib.shl'}});
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
defineProperties(shr, {'name':{'value':'com.google.gwt.lang.BigLongLib.shr'}});
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
defineProperties(shru, {'name':{'value':'com.google.gwt.lang.BigLongLib.shru'}});
function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_6, sum1 & $intern_6, sum2 & $intern_7);
}

sub_0.displayName = 'com.google.gwt.lang.BigLongLib.sub';
defineProperties(sub_0, {'name':{'value':'com.google.gwt.lang.BigLongLib.sub'}});
function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_9 + a.h * $intern_10;
}

toDouble.displayName = 'com.google.gwt.lang.BigLongLib.toDouble';
defineProperties(toDouble, {'name':{'value':'com.google.gwt.lang.BigLongLib.toDouble'}});
function toInt(a){
  return a.l | a.m << 22;
}

toInt.displayName = 'com.google.gwt.lang.BigLongLib.toInt';
defineProperties(toInt, {'name':{'value':'com.google.gwt.lang.BigLongLib.toInt'}});
function toString_4(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_8 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_4(neg(a));
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

toString_4.displayName = 'com.google.gwt.lang.BigLongLib.toString';
defineProperties(toString_4, {'name':{'value':'com.google.gwt.lang.BigLongLib.toString'}});
function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

xor.displayName = 'com.google.gwt.lang.BigLongLib.xor';
defineProperties(xor, {'name':{'value':'com.google.gwt.lang.BigLongLib.xor'}});
function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_6, $intern_6, 524287);
  MIN_VALUE = create0(0, 0, $intern_8);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

$clinit_BigLongLib$Const.displayName = 'com.google.gwt.lang.BigLongLib$Const.$clinit';
defineProperties($clinit_BigLongLib$Const, {'name':{'value':'com.google.gwt.lang.BigLongLib$Const.$clinit'}});
var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function getJavaException(e){
  return e && e.__java$exception;
}

getJavaException.displayName = 'com.google.gwt.lang.Exceptions.getJavaException';
defineProperties(getJavaException, {'name':{'value':'com.google.gwt.lang.Exceptions.getJavaException'}});
function toJava(e){
  var javaException;
  if (instanceOf(e, 8)) {
    return e;
  }
  javaException = e && e.__java$exception;
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

toJava.displayName = 'com.google.gwt.lang.Exceptions.toJava';
defineProperties(toJava, {'name':{'value':'com.google.gwt.lang.Exceptions.toJava'}});
function toJs(t){
  return t.backingJsObject;
}

toJs.displayName = 'com.google.gwt.lang.Exceptions.toJs';
defineProperties(toJs, {'name':{'value':'com.google.gwt.lang.Exceptions.toJs'}});
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
defineProperties(add_1, {'name':{'value':'com.google.gwt.lang.LongLib.add'}});
function and_0(a, b){
  return createLongEmul(and(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

and_0.displayName = 'com.google.gwt.lang.LongLib.and';
defineProperties(and_0, {'name':{'value':'com.google.gwt.lang.LongLib.and'}});
function asBigLong0(value_0){
  return value_0;
}

asBigLong0.displayName = 'com.google.gwt.lang.LongLib.asBigLong0';
defineProperties(asBigLong0, {'name':{'value':'com.google.gwt.lang.LongLib.asBigLong0'}});
function asDouble0(value_0){
  return value_0;
}

asDouble0.displayName = 'com.google.gwt.lang.LongLib.asDouble0';
defineProperties(asDouble0, {'name':{'value':'com.google.gwt.lang.LongLib.asDouble0'}});
function asSmallLong0(value_0){
  return value_0;
}

asSmallLong0.displayName = 'com.google.gwt.lang.LongLib.asSmallLong0';
defineProperties(asSmallLong0, {'name':{'value':'com.google.gwt.lang.LongLib.asSmallLong0'}});
function coerceToInt0(value_0){
  return value_0 | 0;
}

coerceToInt0.displayName = 'com.google.gwt.lang.LongLib.coerceToInt0';
defineProperties(coerceToInt0, {'name':{'value':'com.google.gwt.lang.LongLib.coerceToInt0'}});
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
defineProperties(compare_0, {'name':{'value':'com.google.gwt.lang.LongLib.compare'}});
function createBigLongEmul0(value_0){
  return value_0;
}

createBigLongEmul0.displayName = 'com.google.gwt.lang.LongLib.createBigLongEmul0';
defineProperties(createBigLongEmul0, {'name':{'value':'com.google.gwt.lang.LongLib.createBigLongEmul0'}});
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
defineProperties(createLongEmul, {'name':{'value':'com.google.gwt.lang.LongLib.createLongEmul'}});
function createSmallLongEmul0(value_0){
  return value_0;
}

createSmallLongEmul0.displayName = 'com.google.gwt.lang.LongLib.createSmallLongEmul0';
defineProperties(createSmallLongEmul0, {'name':{'value':'com.google.gwt.lang.LongLib.createSmallLongEmul0'}});
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
defineProperties(div, {'name':{'value':'com.google.gwt.lang.LongLib.div'}});
function eq(a, b){
  return compare_0(a, b) == 0;
}

eq.displayName = 'com.google.gwt.lang.LongLib.eq';
defineProperties(eq, {'name':{'value':'com.google.gwt.lang.LongLib.eq'}});
function fromDouble_0(value_0){
  if ($intern_11 < value_0 && value_0 < $intern_10) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

fromDouble_0.displayName = 'com.google.gwt.lang.LongLib.fromDouble';
defineProperties(fromDouble_0, {'name':{'value':'com.google.gwt.lang.LongLib.fromDouble'}});
function fromInt(value_0){
  return value_0;
}

fromInt.displayName = 'com.google.gwt.lang.LongLib.fromInt';
defineProperties(fromInt, {'name':{'value':'com.google.gwt.lang.LongLib.fromInt'}});
function gt(a, b){
  return compare_0(a, b) > 0;
}

gt.displayName = 'com.google.gwt.lang.LongLib.gt';
defineProperties(gt, {'name':{'value':'com.google.gwt.lang.LongLib.gt'}});
function gte_0(a, b){
  return compare_0(a, b) >= 0;
}

gte_0.displayName = 'com.google.gwt.lang.LongLib.gte';
defineProperties(gte_0, {'name':{'value':'com.google.gwt.lang.LongLib.gte'}});
function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

isSmallLong0.displayName = 'com.google.gwt.lang.LongLib.isSmallLong0';
defineProperties(isSmallLong0, {'name':{'value':'com.google.gwt.lang.LongLib.isSmallLong0'}});
function lt(a, b){
  return compare_0(a, b) < 0;
}

lt.displayName = 'com.google.gwt.lang.LongLib.lt';
defineProperties(lt, {'name':{'value':'com.google.gwt.lang.LongLib.lt'}});
function lte(a, b){
  return compare_0(a, b) <= 0;
}

lte.displayName = 'com.google.gwt.lang.LongLib.lte';
defineProperties(lte, {'name':{'value':'com.google.gwt.lang.LongLib.lte'}});
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
defineProperties(mod, {'name':{'value':'com.google.gwt.lang.LongLib.mod'}});
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
defineProperties(mul_0, {'name':{'value':'com.google.gwt.lang.LongLib.mul'}});
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
defineProperties(neg_0, {'name':{'value':'com.google.gwt.lang.LongLib.neg'}});
function neq_0(a, b){
  return compare_0(a, b) != 0;
}

neq_0.displayName = 'com.google.gwt.lang.LongLib.neq';
defineProperties(neq_0, {'name':{'value':'com.google.gwt.lang.LongLib.neq'}});
function shl_0(a, n){
  return createLongEmul(shl(isSmallLong0(a)?toBigLong(a):a, n));
}

shl_0.displayName = 'com.google.gwt.lang.LongLib.shl';
defineProperties(shl_0, {'name':{'value':'com.google.gwt.lang.LongLib.shl'}});
function shr_0(a, n){
  return createLongEmul(shr(isSmallLong0(a)?toBigLong(a):a, n));
}

shr_0.displayName = 'com.google.gwt.lang.LongLib.shr';
defineProperties(shr_0, {'name':{'value':'com.google.gwt.lang.LongLib.shr'}});
function shru_0(a, n){
  return createLongEmul(shru(isSmallLong0(a)?toBigLong(a):a, n));
}

shru_0.displayName = 'com.google.gwt.lang.LongLib.shru';
defineProperties(shru_0, {'name':{'value':'com.google.gwt.lang.LongLib.shru'}});
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
defineProperties(sub_1, {'name':{'value':'com.google.gwt.lang.LongLib.sub'}});
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
defineProperties(toBigLong, {'name':{'value':'com.google.gwt.lang.LongLib.toBigLong'}});
function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

toDouble_0.displayName = 'com.google.gwt.lang.LongLib.toDouble';
defineProperties(toDouble_0, {'name':{'value':'com.google.gwt.lang.LongLib.toDouble'}});
function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

toInt_0.displayName = 'com.google.gwt.lang.LongLib.toInt';
defineProperties(toInt_0, {'name':{'value':'com.google.gwt.lang.LongLib.toInt'}});
function toString_5(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_4(a);
}

toString_5.displayName = 'com.google.gwt.lang.LongLib.toString';
defineProperties(toString_5, {'name':{'value':'com.google.gwt.lang.LongLib.toString'}});
function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

xor_0.displayName = 'com.google.gwt.lang.LongLib.xor';
defineProperties(xor_0, {'name':{'value':'com.google.gwt.lang.LongLib.xor'}});
function getCastableTypeMap(o){
  return o.castableTypeMap;
}

getCastableTypeMap.displayName = 'com.google.gwt.lang.Util.getCastableTypeMap';
defineProperties(getCastableTypeMap, {'name':{'value':'com.google.gwt.lang.Util.getCastableTypeMap'}});
function hasTypeMarker(o){
  return o.typeMarker === typeMarkerFn;
}

hasTypeMarker.displayName = 'com.google.gwt.lang.Util.hasTypeMarker';
defineProperties(hasTypeMarker, {'name':{'value':'com.google.gwt.lang.Util.hasTypeMarker'}});
function setCastableTypeMap(o, castableTypeMap){
  o.castableTypeMap = castableTypeMap;
}

setCastableTypeMap.displayName = 'com.google.gwt.lang.Util.setCastableTypeMap';
defineProperties(setCastableTypeMap, {'name':{'value':'com.google.gwt.lang.Util.setCastableTypeMap'}});
function setTypeMarker(o){
  o.typeMarker = typeMarkerFn;
}

setTypeMarker.displayName = 'com.google.gwt.lang.Util.setTypeMarker';
defineProperties(setTypeMarker, {'name':{'value':'com.google.gwt.lang.Util.setTypeMarker'}});
function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad();
}

init.displayName = 'com.google.gwt.lang.com_00046codewars__js__EntryMethodHolder.init';
defineProperties(init, {'name':{'value':'com.google.gwt.lang.com_00046codewars__js__EntryMethodHolder.init'}});
function $byteLength(this$static){
  return this$static.byteLength;
}

$byteLength.displayName = 'com.google.gwt.typedarrays.client.ArrayBufferNative.$byteLength';
defineProperties($byteLength, {'name':{'value':'com.google.gwt.typedarrays.client.ArrayBufferNative.$byteLength'}});
function $get_1(this$static, index_0){
  return this$static[index_0];
}

$get_1.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.$get';
defineProperties($get_1, {'name':{'value':'com.google.gwt.typedarrays.client.Int8ArrayNative.$get'}});
function $length_1(this$static){
  return this$static.length;
}

$length_1.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.$length';
defineProperties($length_1, {'name':{'value':'com.google.gwt.typedarrays.client.Int8ArrayNative.$length'}});
function $set(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

$set.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.$set';
defineProperties($set, {'name':{'value':'com.google.gwt.typedarrays.client.Int8ArrayNative.$set'}});
function create_1(length_0){
  return new Int8Array(length_0);
}

create_1.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.create';
defineProperties(create_1, {'name':{'value':'com.google.gwt.typedarrays.client.Int8ArrayNative.create'}});
function create_2(buffer){
  return new Int8Array(buffer);
}

create_2.displayName = 'com.google.gwt.typedarrays.client.Int8ArrayNative.create';
defineProperties(create_2, {'name':{'value':'com.google.gwt.typedarrays.client.Int8ArrayNative.create'}});
function $get_2(this$static, index_0){
  return this$static[index_0];
}

$get_2.displayName = 'com.google.gwt.typedarrays.client.Uint8ArrayNative.$get';
defineProperties($get_2, {'name':{'value':'com.google.gwt.typedarrays.client.Uint8ArrayNative.$get'}});
function $length_2(this$static){
  return this$static.length;
}

$length_2.displayName = 'com.google.gwt.typedarrays.client.Uint8ArrayNative.$length';
defineProperties($length_2, {'name':{'value':'com.google.gwt.typedarrays.client.Uint8ArrayNative.$length'}});
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
defineProperties($onModuleLoad_0, {'name':{'value':'com.google.gwt.user.client.DocumentModeAsserter.$onModuleLoad'}});
function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = castTo(create_com_google_gwt_useragent_client_UserAgent(), 113);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!$equals_4(compileTimeValue, runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue));
  }
}

assertCompileTimeUserAgent.displayName = 'com.google.gwt.useragent.client.UserAgentAsserter.assertCompileTimeUserAgent';
defineProperties(assertCompileTimeUserAgent, {'name':{'value':'com.google.gwt.useragent.client.UserAgentAsserter.assertCompileTimeUserAgent'}});
function scheduleUserAgentCheck(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
}

scheduleUserAgentCheck.displayName = 'com.google.gwt.useragent.client.UserAgentAsserter.scheduleUserAgentCheck';
defineProperties(scheduleUserAgentCheck, {'name':{'value':'com.google.gwt.useragent.client.UserAgentAsserter.scheduleUserAgentCheck'}});
function Error_0(message, cause){
  $$init_2(this);
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

Error_0.displayName = 'java.lang.Error.Error';
defineProperties(Error_0, {'name':{'value':'java.lang.Error.Error'}});
defineClass(72, 8, $intern_3);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 72);
function AssertionError(message){
  Error_0.call(this, message == null?'null':toString_6(message), instanceOf(message, 8)?castTo(message, 8):null);
}

AssertionError.displayName = 'java.lang.AssertionError.AssertionError';
defineProperties(AssertionError, {'name':{'value':'java.lang.AssertionError.AssertionError'}});
defineClass(17, 72, $intern_3);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 17);
function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_6('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8):null);
}

UserAgentAsserter$UserAgentAssertionError.displayName = 'com.google.gwt.useragent.client.UserAgentAsserter$UserAgentAssertionError.UserAgentAsserter$UserAgentAssertionError';
defineProperties(UserAgentAsserter$UserAgentAssertionError, {'name':{'value':'com.google.gwt.useragent.client.UserAgentAsserter$UserAgentAssertionError.UserAgentAsserter$UserAgentAssertionError'}});
defineClass(114, 17, $intern_3, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 114);
function UserAgentImplGecko1_8(){
}

UserAgentImplGecko1_8.displayName = 'com.google.gwt.useragent.client.UserAgentImplGecko1_8.UserAgentImplGecko1_8';
defineProperties(UserAgentImplGecko1_8, {'name':{'value':'com.google.gwt.useragent.client.UserAgentImplGecko1_8.UserAgentImplGecko1_8'}});
defineClass(132, 1, {113:1}, UserAgentImplGecko1_8);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplGecko1_8.getCompileTimeValue';
defineProperties(_.getCompileTimeValue, {'name':{'value':'com.google.gwt.useragent.client.UserAgentImplGecko1_8.getCompileTimeValue'}});
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('gecko') != -1;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplGecko1_8.getRuntimeValue';
defineProperties(_.getRuntimeValue, {'name':{'value':'com.google.gwt.useragent.client.UserAgentImplGecko1_8.getRuntimeValue'}});
var Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 132);
function UserAgentImplSafari(){
}

UserAgentImplSafari.displayName = 'com.google.gwt.useragent.client.UserAgentImplSafari.UserAgentImplSafari';
defineProperties(UserAgentImplSafari, {'name':{'value':'com.google.gwt.useragent.client.UserAgentImplSafari.UserAgentImplSafari'}});
defineClass(131, 1, {113:1}, UserAgentImplSafari);
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'safari';
}
;
_.getCompileTimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplSafari.getCompileTimeValue';
defineProperties(_.getCompileTimeValue, {'name':{'value':'com.google.gwt.useragent.client.UserAgentImplSafari.getCompileTimeValue'}});
_.getRuntimeValue = function getRuntimeValue_0(){
  var ua = navigator.userAgent.toLowerCase();
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('gecko') != -1;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
_.getRuntimeValue.displayName = 'com.google.gwt.useragent.client.UserAgentImplSafari.getRuntimeValue';
defineProperties(_.getRuntimeValue, {'name':{'value':'com.google.gwt.useragent.client.UserAgentImplSafari.getRuntimeValue'}});
var Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 131);
function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.window.document;
}

$clinit_DomGlobal.displayName = 'elemental2.dom.DomGlobal.$clinit';
defineProperties($clinit_DomGlobal, {'name':{'value':'elemental2.dom.DomGlobal.$clinit'}});
var document_0;
function $clinit_Cpu(){
  $clinit_Cpu = emptyMethod;
  PARITY_TABLE = stampJavaTypeInfo(getClassLiteralForArray(Z_classLit, 1), $intern_12, 10, 16, [true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true]);
}

$clinit_Cpu.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$clinit';
defineProperties($clinit_Cpu, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$clinit'}});
function $adc16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_0) + (value2 & $intern_0);
  (this$static.m_state.m_flags & 1) == 1 && ++result32;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_13) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$adc16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$adc16';
defineProperties($adc16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$adc16'}});
function $adc8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) + ((value2 & 255) << 16 >> 16) << 16 >> 16;
  (this$static.m_state.m_flags & 1) == 1 && ++result16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$adc8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$adc8';
defineProperties($adc8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$adc8'}});
function $add16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_0) + (value2 & $intern_0);
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_13) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$add16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$add16';
defineProperties($add16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$add16'}});
function $add8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) + ((value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$add8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$add8';
defineProperties($add8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$add8'}});
function $and16(this$static, value1, value2){
  var result16, result32;
  result32 = value1 & $intern_0 & value2 & $intern_0;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_13) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$and16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$and16';
defineProperties($and16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$and16'}});
function $and8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16 & (value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$and8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$and8';
defineProperties($and8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$and8'}});
function $callFar(this$static, segment, offset){
  $push_0(this$static, this$static.m_state.m_cs);
  $setCS(this$static.m_state, segment);
  $push_0(this$static, this$static.m_state.m_ip);
  $setIP(this$static.m_state, offset);
}

$callFar.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$callFar';
defineProperties($callFar, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$callFar'}});
function $callNear(this$static, offset){
  $push_0(this$static, this$static.m_state.m_ip);
  $setIP(this$static.m_state, offset);
}

$callNear.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$callNear';
defineProperties($callNear, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$callNear'}});
function $cmpsb(this$static){
  var address1, address2, diff;
  address1 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub8(this$static, $readByte_1(this$static.m_memory, address1), $readByte_1(this$static.m_memory, address2));
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-1:1;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$cmpsb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$cmpsb';
defineProperties($cmpsb, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$cmpsb'}});
function $cmpsw(this$static){
  var address1, address2, diff;
  address1 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub16(this$static, $readWord(this$static.m_memory, address1), $readWord(this$static.m_memory, address2));
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-2:2;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$cmpsw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$cmpsw';
defineProperties($cmpsw, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$cmpsw'}});
function $dec16(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $sub16(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

$dec16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$dec16';
defineProperties($dec16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$dec16'}});
function $dec8(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $sub8(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

$dec8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$dec8';
defineProperties($dec8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$dec8'}});
function $inc16(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $add16(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

$inc16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$inc16';
defineProperties($inc16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$inc16'}});
function $inc8(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $add8(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

$inc8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$inc8';
defineProperties($inc8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$inc8'}});
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
      diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-4:4;
      $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
    }
  }
}

$int86.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$int86';
defineProperties($int86, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$int86'}});
function $int87(this$static){
  var address1, address2, bombCount, diff, i;
  bombCount = this$static.m_state.m_bomb2count;
  if (bombCount != 0) {
    $setBomb2Count(this$static.m_state, bombCount - 1 << 24 >> 24);
    for (i = 0; i <= $intern_0; ++i) {
      diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-i:i;
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
defineProperties($int87, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$int87'}});
function $lodsb(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  $setAL(this$static.m_state, $readByte_1(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-1:1;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
}

$lodsb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$lodsb';
defineProperties($lodsb, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$lodsb'}});
function $lodsw(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  $setAX(this$static.m_state, $readWord(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-2:2;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
}

$lodsw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$lodsw';
defineProperties($lodsw, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$lodsw'}});
function $movsb(this$static){
  var diff, dst, src_0;
  src_0 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  dst = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeByte_0(this$static.m_memory, dst, $readByte_1(this$static.m_memory, src_0));
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-1:1;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$movsb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$movsb';
defineProperties($movsb, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$movsb'}});
function $movsw(this$static){
  var diff, dst, src_0;
  src_0 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  dst = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeWord(this$static.m_memory, dst, $readWord(this$static.m_memory, src_0));
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-2:2;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$movsw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$movsw';
defineProperties($movsw, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$movsw'}});
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
defineProperties($nextOpcode, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$nextOpcode'}});
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
defineProperties($opcode0X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode0X'}});
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
defineProperties($opcode1X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode1X'}});
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
defineProperties($opcode2X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode2X'}});
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
defineProperties($opcode3X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode3X'}});
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
defineProperties($opcode4X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode4X'}});
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
defineProperties($opcode5X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode5X'}});
function $opcode6X(){
  throw toJs(new InvalidOpcodeException);
}

$opcode6X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode6X';
defineProperties($opcode6X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode6X'}});
function $opcode7X(this$static, opcode){
  var branch, offset;
  branch = false;
  switch (opcode) {
    case 112:
      branch = (this$static.m_state.m_flags & $intern_16) == $intern_16;
      break;
    case 113:
      branch = (this$static.m_state.m_flags & $intern_16) != $intern_16;
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
      branch = (this$static.m_state.m_flags & 128) == 128 != ((this$static.m_state.m_flags & $intern_16) == $intern_16);
      break;
    case 125:
      branch = (this$static.m_state.m_flags & 128) == 128 == ((this$static.m_state.m_flags & $intern_16) == $intern_16);
      break;
    case 126:
      branch = (this$static.m_state.m_flags & 64) == 64 || (this$static.m_state.m_flags & 128) == 128 != ((this$static.m_state.m_flags & $intern_16) == $intern_16);
      break;
    case 127:
      branch = (this$static.m_state.m_flags & 64) != 64 && (this$static.m_state.m_flags & 128) == 128 == ((this$static.m_state.m_flags & $intern_16) == $intern_16);
  }
  offset = $nextByte(this$static.m_fetcher);
  branch && $setIP(this$static.m_state, this$static.m_state.m_ip + offset << 16 >> 16);
}

$opcode7X.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$opcode7X';
defineProperties($opcode7X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode7X'}});
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
defineProperties($opcode8X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode8X'}});
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
      flags = (flags & $intern_14) << 16 >> 16;
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
defineProperties($opcode9X, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcode9X'}});
function $opcodeAX(this$static, opcode){
  var address;
  address = null;
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
defineProperties($opcodeAX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeAX'}});
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
defineProperties($opcodeBX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeBX'}});
function $opcodeCX(this$static, opcode){
  var address1, address2, opcodeId, sizeToPop;
  address1 = null;
  address2 = null;
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
defineProperties($opcodeCX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeCX'}});
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
defineProperties($opcodeDX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeDX'}});
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
defineProperties($opcodeEX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeEX'}});
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
defineProperties($opcodeFX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$opcodeFX'}});
function $or16(this$static, value1, value2){
  var result16, result32;
  result32 = value1 & $intern_0 | value2 & $intern_0;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_13) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$or16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$or16';
defineProperties($or16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$or16'}});
function $or8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16 | (value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$or8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$or8';
defineProperties($or8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$or8'}});
function $pop(this$static){
  var stackPtr, value_0;
  stackPtr = new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_sp);
  value_0 = $readWord(this$static.m_memory, stackPtr);
  $setSP(this$static.m_state, this$static.m_state.m_sp + 2 << 16 >> 16);
  return value_0;
}

$pop.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$pop';
defineProperties($pop, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$pop'}});
function $push_0(this$static, value_0){
  var stackPtr;
  $setSP(this$static.m_state, this$static.m_state.m_sp - 2 << 16 >> 16);
  stackPtr = new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_sp);
  $writeWord(this$static.m_memory, stackPtr, value_0);
}

$push_0.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$push';
defineProperties($push_0, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$push'}});
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
defineProperties($rcl16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$rcl16'}});
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
defineProperties($rcl8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$rcl8'}});
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
defineProperties($rcr16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$rcr16'}});
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
defineProperties($rcr8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$rcr8'}});
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
defineProperties($rol16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$rol16'}});
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
defineProperties($rol8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$rol8'}});
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
defineProperties($ror16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$ror16'}});
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
defineProperties($ror8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$ror8'}});
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
defineProperties($sar16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$sar16'}});
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
defineProperties($sar8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$sar8'}});
function $sbb16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_0) - (value2 & $intern_0);
  (this$static.m_state.m_flags & 1) == 1 && --result32;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_13) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$sbb16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sbb16';
defineProperties($sbb16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$sbb16'}});
function $sbb8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) - ((value2 & 255) << 16 >> 16) << 16 >> 16;
  (this$static.m_state.m_flags & 1) == 1 && --result16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$sbb8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sbb8';
defineProperties($sbb8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$sbb8'}});
function $scasb(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub8(this$static, this$static.m_state.m_ax << 24 >> 24, $readByte_1(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-1:1;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$scasb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$scasb';
defineProperties($scasb, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$scasb'}});
function $scasw(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub16(this$static, this$static.m_state.m_ax, $readWord(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-2:2;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$scasw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$scasw';
defineProperties($scasw, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$scasw'}});
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
defineProperties($shl16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$shl16'}});
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
defineProperties($shl8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$shl8'}});
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
defineProperties($shr16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$shr16'}});
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
defineProperties($shr8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$shr8'}});
function $stosb(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeByte_0(this$static.m_memory, address, this$static.m_state.m_ax << 24 >> 24);
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-1:1;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$stosb.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$stosb';
defineProperties($stosb, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$stosb'}});
function $stosdw(this$static){
  var address1, address2, diff;
  address1 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeWord(this$static.m_memory, address1, this$static.m_state.m_ax);
  address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di + 2 << 16 >> 16);
  $writeWord(this$static.m_memory, address2, this$static.m_state.m_dx);
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-4:4;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$stosdw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$stosdw';
defineProperties($stosdw, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$stosdw'}});
function $stosw(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeWord(this$static.m_memory, address, this$static.m_state.m_ax);
  diff = (this$static.m_state.m_flags & $intern_15) == $intern_15?-2:2;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

$stosw.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$stosw';
defineProperties($stosw, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$stosw'}});
function $sub16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_0) - (value2 & $intern_0);
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_13) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$sub16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sub16';
defineProperties($sub16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$sub16'}});
function $sub8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) - ((value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$sub8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$sub8';
defineProperties($sub8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$sub8'}});
function $updateFlagsNoCarryOverflow16(this$static, value_0){
  var byteValue;
  byteValue = value_0 << 24 >> 24;
  $setParityFlag(this$static.m_state, PARITY_TABLE[(byteValue & 255) << 16 >> 16]);
  $setSignFlag(this$static.m_state, (value_0 & 32768) != 0);
  $setZeroFlag(this$static.m_state, value_0 == 0);
}

$updateFlagsNoCarryOverflow16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$updateFlagsNoCarryOverflow16';
defineProperties($updateFlagsNoCarryOverflow16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$updateFlagsNoCarryOverflow16'}});
function $updateFlagsNoCarryOverflow8(this$static, value_0){
  $setParityFlag(this$static.m_state, PARITY_TABLE[(value_0 & 255) << 16 >> 16]);
  $setSignFlag(this$static.m_state, (value_0 & 128) != 0);
  $setZeroFlag(this$static.m_state, value_0 == 0);
}

$updateFlagsNoCarryOverflow8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$updateFlagsNoCarryOverflow8';
defineProperties($updateFlagsNoCarryOverflow8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$updateFlagsNoCarryOverflow8'}});
function $xor16(this$static, value1, value2){
  var result16, result32;
  result32 = value1 & $intern_0 ^ value2 & $intern_0;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_13) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

$xor16.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$xor16';
defineProperties($xor16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$xor16'}});
function $xor8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16 ^ (value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_14) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

$xor8.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.$xor8';
defineProperties($xor8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.$xor8'}});
function Cpu(state, memory){
  $clinit_Cpu();
  this.m_state = state;
  this.m_memory = memory;
  this.m_fetcher = new OpcodeFetcher(this.m_state, this.m_memory);
  this.m_regs = new RegisterIndexingDecoder(this.m_state);
  this.m_indirect = new IndirectAddressingDecoder(this.m_state, this.m_memory, this.m_fetcher);
}

Cpu.displayName = 'il.co.codeguru.corewars8086.cpu.Cpu.Cpu';
defineProperties(Cpu, {'name':{'value':'il.co.codeguru.corewars8086.cpu.Cpu.Cpu'}});
defineClass(203, 1, {}, Cpu);
var PARITY_TABLE;
var Lil_co_codeguru_corewars8086_cpu_Cpu_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'Cpu', 203);
function CpuException(){
  Exception.call(this);
}

CpuException.displayName = 'il.co.codeguru.corewars8086.cpu.CpuException.CpuException';
defineProperties(CpuException, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuException.CpuException'}});
defineClass(26, 7, $intern_17);
var Lil_co_codeguru_corewars8086_cpu_CpuException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'CpuException', 26);
function $getByIndex(this$static, i){
  switch (i) {
    case 13:
      return this$static.m_ip;
    case 9:
      return this$static.m_cs;
    case 1:
      return this$static.m_ax;
    case 2:
      return this$static.m_bx;
    case 3:
      return this$static.m_cx;
    case 4:
      return this$static.m_dx;
    case 5:
      return this$static.m_si;
    case 6:
      return this$static.m_di;
    case 7:
      return this$static.m_bp;
    case 8:
      return this$static.m_sp;
    case 10:
      return this$static.m_ds;
    case 11:
      return this$static.m_ss;
    case 12:
      return this$static.m_es;
    case 15:
      return this$static.m_flags;
    case 14:
      return this$static.m_energy;
  }
  throw toJs(new RuntimeException);
}

$getByIndex.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$getByIndex';
defineProperties($getByIndex, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$getByIndex'}});
function $setAH(this$static, value_0){
  this$static.m_ax = (this$static.m_ax & 255) << 16 >> 16;
  this$static.m_ax = (this$static.m_ax | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

$setAH.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setAH';
defineProperties($setAH, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setAH'}});
function $setAL(this$static, value_0){
  this$static.m_ax = (this$static.m_ax & $intern_14) << 16 >> 16;
  this$static.m_ax = this$static.m_ax | (value_0 & 255) << 16 >> 16;
}

$setAL.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setAL';
defineProperties($setAL, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setAL'}});
function $setAX(this$static, value_0){
  this$static.m_ax = value_0;
}

$setAX.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setAX';
defineProperties($setAX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setAX'}});
function $setBH(this$static, value_0){
  this$static.m_bx = (this$static.m_bx & 255) << 16 >> 16;
  this$static.m_bx = (this$static.m_bx | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

$setBH.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBH';
defineProperties($setBH, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setBH'}});
function $setBL(this$static, value_0){
  this$static.m_bx = (this$static.m_bx & $intern_14) << 16 >> 16;
  this$static.m_bx = this$static.m_bx | (value_0 & 255) << 16 >> 16;
}

$setBL.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBL';
defineProperties($setBL, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setBL'}});
function $setBP(this$static, value_0){
  this$static.m_bp = value_0;
}

$setBP.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBP';
defineProperties($setBP, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setBP'}});
function $setBX(this$static, value_0){
  this$static.m_bx = value_0;
}

$setBX.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBX';
defineProperties($setBX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setBX'}});
function $setBomb1Count(this$static, value_0){
  this$static.m_bomb1count = value_0;
}

$setBomb1Count.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBomb1Count';
defineProperties($setBomb1Count, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setBomb1Count'}});
function $setBomb2Count(this$static, value_0){
  this$static.m_bomb2count = value_0;
}

$setBomb2Count.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setBomb2Count';
defineProperties($setBomb2Count, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setBomb2Count'}});
function $setCH(this$static, value_0){
  this$static.m_cx = (this$static.m_cx & 255) << 16 >> 16;
  this$static.m_cx = (this$static.m_cx | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

$setCH.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCH';
defineProperties($setCH, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setCH'}});
function $setCL(this$static, value_0){
  this$static.m_cx = (this$static.m_cx & $intern_14) << 16 >> 16;
  this$static.m_cx = this$static.m_cx | (value_0 & 255) << 16 >> 16;
}

$setCL.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCL';
defineProperties($setCL, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setCL'}});
function $setCS(this$static, value_0){
  this$static.m_cs = value_0;
}

$setCS.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCS';
defineProperties($setCS, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setCS'}});
function $setCX(this$static, value_0){
  this$static.m_cx = value_0;
}

$setCX.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCX';
defineProperties($setCX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setCX'}});
function $setCarryFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 1) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -2) << 16 >> 16);
}

$setCarryFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setCarryFlag';
defineProperties($setCarryFlag, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setCarryFlag'}});
function $setDH(this$static, value_0){
  this$static.m_dx = (this$static.m_dx & 255) << 16 >> 16;
  this$static.m_dx = (this$static.m_dx | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

$setDH.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDH';
defineProperties($setDH, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setDH'}});
function $setDI(this$static, value_0){
  this$static.m_di = value_0;
}

$setDI.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDI';
defineProperties($setDI, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setDI'}});
function $setDL(this$static, value_0){
  this$static.m_dx = (this$static.m_dx & $intern_14) << 16 >> 16;
  this$static.m_dx = this$static.m_dx | (value_0 & 255) << 16 >> 16;
}

$setDL.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDL';
defineProperties($setDL, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setDL'}});
function $setDS(this$static, value_0){
  this$static.m_ds = value_0;
}

$setDS.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDS';
defineProperties($setDS, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setDS'}});
function $setDX(this$static, value_0){
  this$static.m_dx = value_0;
}

$setDX.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDX';
defineProperties($setDX, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setDX'}});
function $setDirectionFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | $intern_15) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -1025) << 16 >> 16);
}

$setDirectionFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setDirectionFlag';
defineProperties($setDirectionFlag, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setDirectionFlag'}});
function $setES(this$static, value_0){
  this$static.m_es = value_0;
}

$setES.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setES';
defineProperties($setES, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setES'}});
function $setEnergy(this$static, value_0){
  this$static.m_energy = value_0;
}

$setEnergy.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setEnergy';
defineProperties($setEnergy, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setEnergy'}});
function $setFlags(this$static, value_0){
  this$static.m_flags = value_0;
}

$setFlags.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setFlags';
defineProperties($setFlags, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setFlags'}});
function $setIP(this$static, value_0){
  this$static.m_ip = value_0;
}

$setIP.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setIP';
defineProperties($setIP, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setIP'}});
function $setInterruptFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 512) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -513) << 16 >> 16);
}

$setInterruptFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setInterruptFlag';
defineProperties($setInterruptFlag, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setInterruptFlag'}});
function $setOverflowFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | $intern_16) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -2049) << 16 >> 16);
}

$setOverflowFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setOverflowFlag';
defineProperties($setOverflowFlag, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setOverflowFlag'}});
function $setParityFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 4) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -5) << 16 >> 16);
}

$setParityFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setParityFlag';
defineProperties($setParityFlag, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setParityFlag'}});
function $setSI(this$static, value_0){
  this$static.m_si = value_0;
}

$setSI.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setSI';
defineProperties($setSI, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setSI'}});
function $setSP(this$static, value_0){
  this$static.m_sp = value_0;
}

$setSP.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setSP';
defineProperties($setSP, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setSP'}});
function $setSS(this$static, value_0){
  this$static.m_ss = value_0;
}

$setSS.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setSS';
defineProperties($setSS, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setSS'}});
function $setSignFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 128) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -129) << 16 >> 16);
}

$setSignFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setSignFlag';
defineProperties($setSignFlag, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setSignFlag'}});
function $setZeroFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 64) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -65) << 16 >> 16);
}

$setZeroFlag.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.$setZeroFlag';
defineProperties($setZeroFlag, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.$setZeroFlag'}});
function CpuState(){
}

CpuState.displayName = 'il.co.codeguru.corewars8086.cpu.CpuState.CpuState';
defineProperties(CpuState, {'name':{'value':'il.co.codeguru.corewars8086.cpu.CpuState.CpuState'}});
defineClass(182, 1, {}, CpuState);
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
var Lil_co_codeguru_corewars8086_cpu_CpuState_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'CpuState', 182);
function DivisionException(){
  CpuException.call(this);
}

DivisionException.displayName = 'il.co.codeguru.corewars8086.cpu.DivisionException.DivisionException';
defineProperties(DivisionException, {'name':{'value':'il.co.codeguru.corewars8086.cpu.DivisionException.DivisionException'}});
defineClass(70, 26, $intern_17, DivisionException);
var Lil_co_codeguru_corewars8086_cpu_DivisionException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'DivisionException', 70);
function $getMem16(this$static){
  if (this$static.m_memAddress) {
    return $readWord(this$static.m_memory, this$static.m_memAddress);
  }
  return $getReg16_0(this$static.m_regs, this$static.m_memIndex);
}

$getMem16.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMem16';
defineProperties($getMem16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMem16'}});
function $getMem8(this$static){
  if (this$static.m_memAddress) {
    return $readByte_1(this$static.m_memory, this$static.m_memAddress);
  }
  return $getReg8_0(this$static.m_regs, this$static.m_memIndex);
}

$getMem8.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMem8';
defineProperties($getMem8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMem8'}});
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
defineProperties($getMode0Address, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMode0Address'}});
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
defineProperties($getMode1Address, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMode1Address'}});
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
defineProperties($getMode2Address, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getMode2Address'}});
function $getReg16(this$static){
  return $getReg16_0(this$static.m_regs, this$static.m_regIndex);
}

$getReg16.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getReg16';
defineProperties($getReg16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getReg16'}});
function $getReg8(this$static){
  return $getReg8_0(this$static.m_regs, this$static.m_regIndex);
}

$getReg8.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getReg8';
defineProperties($getReg8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getReg8'}});
function $getSeg(this$static){
  return $getSeg_0(this$static.m_regs, this$static.m_regIndex);
}

$getSeg.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getSeg';
defineProperties($getSeg, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$getSeg'}});
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
defineProperties($reset, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$reset'}});
function $setMem16(this$static, value_0){
  this$static.m_memAddress?$writeWord(this$static.m_memory, this$static.m_memAddress, value_0):$setReg16_0(this$static.m_regs, this$static.m_memIndex, value_0);
}

$setMem16.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setMem16';
defineProperties($setMem16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setMem16'}});
function $setMem8(this$static, value_0){
  this$static.m_memAddress?$writeByte_0(this$static.m_memory, this$static.m_memAddress, value_0):$setReg8_0(this$static.m_regs, this$static.m_memIndex, value_0);
}

$setMem8.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setMem8';
defineProperties($setMem8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setMem8'}});
function $setReg16(this$static, value_0){
  $setReg16_0(this$static.m_regs, this$static.m_regIndex, value_0);
}

$setReg16.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setReg16';
defineProperties($setReg16, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setReg16'}});
function $setReg8(this$static, value_0){
  $setReg8_0(this$static.m_regs, this$static.m_regIndex, value_0);
}

$setReg8.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setReg8';
defineProperties($setReg8, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setReg8'}});
function $setSeg(this$static, value_0){
  $setSeg_0(this$static.m_regs, this$static.m_regIndex, value_0);
}

$setSeg.displayName = 'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setSeg';
defineProperties($setSeg, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.$setSeg'}});
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
defineProperties(IndirectAddressingDecoder, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IndirectAddressingDecoder.IndirectAddressingDecoder'}});
defineClass(209, 1, {}, IndirectAddressingDecoder);
_.m_memIndex = 0;
_.m_regIndex = 0;
var Lil_co_codeguru_corewars8086_cpu_IndirectAddressingDecoder_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'IndirectAddressingDecoder', 209);
function IntOpcodeException(){
  CpuException.call(this);
}

IntOpcodeException.displayName = 'il.co.codeguru.corewars8086.cpu.IntOpcodeException.IntOpcodeException';
defineProperties(IntOpcodeException, {'name':{'value':'il.co.codeguru.corewars8086.cpu.IntOpcodeException.IntOpcodeException'}});
defineClass(85, 26, $intern_17, IntOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_IntOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'IntOpcodeException', 85);
function InvalidOpcodeException(){
  CpuException.call(this);
}

InvalidOpcodeException.displayName = 'il.co.codeguru.corewars8086.cpu.InvalidOpcodeException.InvalidOpcodeException';
defineProperties(InvalidOpcodeException, {'name':{'value':'il.co.codeguru.corewars8086.cpu.InvalidOpcodeException.InvalidOpcodeException'}});
defineClass(12, 26, $intern_17, InvalidOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_InvalidOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'InvalidOpcodeException', 12);
function $nextByte(this$static){
  var ip, linearAddress;
  ip = this$static.m_state.m_ip;
  linearAddress = linearAddress_0(this$static.m_state.m_cs, ip);
  $setIP(this$static.m_state, ip + 1 << 16 >> 16);
  return $readExecuteByte_1(this$static.m_memory, linearAddress);
}

$nextByte.displayName = 'il.co.codeguru.corewars8086.cpu.OpcodeFetcher.$nextByte';
defineProperties($nextByte, {'name':{'value':'il.co.codeguru.corewars8086.cpu.OpcodeFetcher.$nextByte'}});
function $nextWord(this$static){
  var address;
  address = new RealModeAddress_0(this$static.m_state.m_cs, this$static.m_state.m_ip);
  $setIP(this$static.m_state, this$static.m_state.m_ip + 2 << 16 >> 16);
  return $readExecuteWord(this$static.m_memory, address);
}

$nextWord.displayName = 'il.co.codeguru.corewars8086.cpu.OpcodeFetcher.$nextWord';
defineProperties($nextWord, {'name':{'value':'il.co.codeguru.corewars8086.cpu.OpcodeFetcher.$nextWord'}});
function OpcodeFetcher(state, memory){
  this.m_state = state;
  this.m_memory = memory;
}

OpcodeFetcher.displayName = 'il.co.codeguru.corewars8086.cpu.OpcodeFetcher.OpcodeFetcher';
defineProperties(OpcodeFetcher, {'name':{'value':'il.co.codeguru.corewars8086.cpu.OpcodeFetcher.OpcodeFetcher'}});
defineClass(208, 1, {}, OpcodeFetcher);
var Lil_co_codeguru_corewars8086_cpu_OpcodeFetcher_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'OpcodeFetcher', 208);
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
defineProperties($getReg16_0, {'name':{'value':'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$getReg16'}});
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
defineProperties($getReg8_0, {'name':{'value':'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$getReg8'}});
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
defineProperties($getSeg_0, {'name':{'value':'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$getSeg'}});
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
defineProperties($setReg16_0, {'name':{'value':'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$setReg16'}});
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
defineProperties($setReg8_0, {'name':{'value':'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$setReg8'}});
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
defineProperties($setSeg_0, {'name':{'value':'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.$setSeg'}});
function RegisterIndexingDecoder(state){
  this.m_state = state;
}

RegisterIndexingDecoder.displayName = 'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.RegisterIndexingDecoder';
defineProperties(RegisterIndexingDecoder, {'name':{'value':'il.co.codeguru.corewars8086.cpu.RegisterIndexingDecoder.RegisterIndexingDecoder'}});
defineClass(109, 1, {}, RegisterIndexingDecoder);
var Lil_co_codeguru_corewars8086_cpu_RegisterIndexingDecoder_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'RegisterIndexingDecoder', 109);
function UnimplementedOpcodeException(){
  CpuException.call(this);
}

UnimplementedOpcodeException.displayName = 'il.co.codeguru.corewars8086.cpu.UnimplementedOpcodeException.UnimplementedOpcodeException';
defineProperties(UnimplementedOpcodeException, {'name':{'value':'il.co.codeguru.corewars8086.cpu.UnimplementedOpcodeException.UnimplementedOpcodeException'}});
defineClass(38, 26, $intern_17, UnimplementedOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_UnimplementedOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'UnimplementedOpcodeException', 38);
function UnsupportedOpcodeException(){
  CpuException.call(this);
}

UnsupportedOpcodeException.displayName = 'il.co.codeguru.corewars8086.cpu.UnsupportedOpcodeException.UnsupportedOpcodeException';
defineProperties(UnsupportedOpcodeException, {'name':{'value':'il.co.codeguru.corewars8086.cpu.UnsupportedOpcodeException.UnsupportedOpcodeException'}});
defineClass(54, 26, $intern_17, UnsupportedOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_UnsupportedOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'UnsupportedOpcodeException', 54);
function $$init_4(this$static){
}

$$init_4.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.$$init';
defineProperties($$init_4, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JComponent.$$init'}});
function $addActionListener(this$static, listener){
  this$static.m_listener = listener;
}

$addActionListener.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.$addActionListener';
defineProperties($addActionListener, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JComponent.$addActionListener'}});
function $setEnabled(this$static, v){
  if (this$static.m_element == null)
    return;
  this$static.m_enabled = v;
  this$static.m_element.setAttribute('disabled', v?'false':'true');
}

$setEnabled.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.$setEnabled';
defineProperties($setEnabled, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JComponent.$setEnabled'}});
function $setText(this$static, v){
  if (this$static.m_element == null)
    return;
  this$static.m_element.innerHTML = v;
}

$setText.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.$setText';
defineProperties($setText, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JComponent.$setText'}});
function JComponent(){
}

JComponent.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent.JComponent';
defineProperties(JComponent, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JComponent.JComponent'}});
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
defineProperties(JComponent_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JComponent.JComponent'}});
defineClass(44, 1, {});
_.m_enabled = true;
_.m_listener = null;
var Lil_co_codeguru_corewars8086_gui_widgets_JComponent_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JComponent', 44);
function $$init_5(this$static){
  this$static.BOARD_HEIGHT = $intern_18 / this$static.BOARD_WIDTH | 0;
  this$static.BOARD_WIDTH_BITS = mathlog2(this$static.BOARD_WIDTH);
  this$static.BOARD_WIDTH_PX = this$static.BOARD_WIDTH * this$static.DOT_SIZE;
  this$static.BOARD_HEIGHT_PX = this$static.BOARD_HEIGHT * this$static.DOT_SIZE;
  this$static.CANVAS_HEIGHT = this$static.BOARD_HEIGHT_PX + 20 + 45;
  this$static.CANVAS_WIDTH = this$static.BOARD_WIDTH_PX + 45 + 20;
  this$static.VIS_WIDTH_PX = this$static.CANVAS_WIDTH - 45 - 20;
  this$static.VIS_HEIGHT_PX = this$static.CANVAS_HEIGHT - 20 - 45;
  this$static.VIS_WIDTH = this$static.VIS_WIDTH_PX / this$static.DOT_SIZE | 0;
  this$static.VIS_HEIGHT = this$static.VIS_HEIGHT_PX / this$static.DOT_SIZE | 0;
  this$static.m_reg_ptrs = new HashMap;
  this$static.m_reg_refcounts = initUnidimensionalArray(I_classLit, $intern_12, 10, 16, 15, 1);
  this$static.m_turtle = new Canvas$Turtle;
  this$static.m_painterdPointers = initUnidimensionalArray(I_classLit, $intern_12, 10, 20, 15, 1);
  this$static.m_contentVisibleRect = new Canvas$Rect;
}

$$init_5.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$$init';
defineProperties($$init_5, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$$init'}});
function $canvasSizeChanged(this$static, w, h){
  this$static.CANVAS_HEIGHT = h;
  this$static.CANVAS_WIDTH = w;
  this$static.VIS_WIDTH_PX = this$static.CANVAS_WIDTH - 45 - 20;
  this$static.VIS_HEIGHT_PX = this$static.CANVAS_HEIGHT - 20 - 45;
  this$static.VIS_WIDTH = this$static.VIS_WIDTH_PX / this$static.DOT_SIZE | 0;
  this$static.VIS_HEIGHT = this$static.VIS_HEIGHT_PX / this$static.DOT_SIZE | 0;
  $makeClipAreas(this$static);
}

$canvasSizeChanged.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$canvasSizeChanged';
defineProperties($canvasSizeChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$canvasSizeChanged'}});
function $clear(this$static){
  var i, len;
  len = this$static.BOARD_WIDTH * this$static.BOARD_HEIGHT;
  this$static._data == null && (this$static._data = initUnidimensionalArray(B_classLit, $intern_12, 10, len, 15, 1));
  this$static._flags == null && (this$static._flags = initUnidimensionalArray(B_classLit, $intern_12, 10, len, 15, 1));
  this$static._values == null && (this$static._values = initUnidimensionalArray(B_classLit, $intern_12, 10, len, 15, 1));
  for (i = 0; i < len; i++) {
    this$static._data[i] = -1;
    this$static._flags[i] = 0;
  }
  this$static.ctx.setTransform(1, 0, 0, 1, 0, 0);
  $wnd.js_resetZoom();
}

$clear.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$clear';
defineProperties($clear, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$clear'}});
function $deletePointers(this$static){
  var i, number, x_0, y_0;
  $saveAndEnter(this$static);
  for (i = 0; i < this$static.m_paintedPointerCount; ++i) {
    number = this$static.m_painterdPointers[i];
    x_0 = number % this$static.BOARD_WIDTH;
    y_0 = number / this$static.BOARD_WIDTH | 0;
    this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] = (this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] & -2) << 24 >> 24;
    $paintPixel_0(this$static, x_0, y_0, this$static._data[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)], this$static._values[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)], false);
  }
  this$static.ctx.restore();
  this$static.m_paintedPointerCount = 0;
}

$deletePointers.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$deletePointers';
defineProperties($deletePointers, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$deletePointers'}});
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
  $wnd.j_canvasResized = $entry(function(a, b){
    that.j_canvasResized_0(a, b);
  }
  );
  $wnd.j_change_board_width = $entry(function(a){
    that.j_change_board_width_0(a);
  }
  );
  $wnd.j_set_alt_opcode_color = $entry(function(a){
    that.j_set_alt_opcode_color_0(a);
  }
  );
  $wnd.j_changed_reg_in_mem = $entry(function(a){
    that.j_changed_reg_in_mem_0(a);
  }
  );
  $wnd.j_reg_ptr_elem_moved = $entry(function(a, b, c){
    that.j_reg_ptr_elem_moved_0(a, b, c);
  }
  );
  $wnd.j_reg_ptr_enabled = $entry(function(a, b){
    that.j_reg_ptr_enabled_0(a, b);
  }
  );
}

$exportMethods.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$exportMethods';
defineProperties($exportMethods, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$exportMethods'}});
function $initStartWar(this$static, war){
  var addr, x_0, y_0;
  this$static.m_mem = war.m_core;
  this$static.m_currentWar = war;
  this$static.m_indebug = true;
  addr = $intern_18;
  for (y_0 = 0; y_0 < this$static.BOARD_HEIGHT; y_0++) {
    for (x_0 = 0; x_0 < this$static.BOARD_WIDTH; x_0++) {
      $set_values(this$static, x_0, y_0, $readByte(this$static.m_mem, addr));
      addr += 1;
    }
  }
}

$initStartWar.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$initStartWar';
defineProperties($initStartWar, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$initStartWar'}});
function $j_warCanvas_repaint(this$static){
  $paint(this$static);
}

$j_warCanvas_repaint.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$j_warCanvas_repaint';
defineProperties($j_warCanvas_repaint, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$j_warCanvas_repaint'}});
function $lambda$0(this$static){
  if (!this$static.m_showContent)
    return;
  $paintCursor(this$static, this$static.m_blinkOn);
  this$static.m_blinkOn = !this$static.m_blinkOn;
}

$lambda$0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$lambda$0';
defineProperties($lambda$0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$lambda$0'}});
function $lambda$1(this$static){
  console.log('BLUR');
  this$static.m_intervalId != null && $wnd.window.clearInterval($doubleValue(this$static.m_intervalId));
  this$static.m_showContent && $paintCursor(this$static, false);
  this$static.m_intervalId = null;
}

$lambda$1.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$lambda$1';
defineProperties($lambda$1, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$lambda$1'}});
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
      ev = this$static._values[ix + (iy << this$static.BOARD_WIDTH_BITS)];
      this$static.m_cursorX % 1 == 0?(ev = ev & 15 | v << 4):(ev = ev & 240 | v);
      $set_values(this$static, ix, iy, ev << 24 >> 24);
      $writeByte(this$static.m_mem, new RealModeAddress_0(4096, ix + iy * this$static.BOARD_WIDTH << 16 >> 16), ev << 24 >> 24);
      $moveCursor(this$static, 0.5, 0);
    }
  }
}

$lambda$2.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$lambda$2';
defineProperties($lambda$2, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$lambda$2'}});
function $makeClipAreas(this$static){
  var t;
  this$static.m_memclip = new $wnd.Path2D;
  this$static.m_memclip.moveTo(45, 20);
  this$static.m_memclip.lineTo(this$static.CANVAS_WIDTH - 20, 20);
  this$static.m_memclip.lineTo(this$static.CANVAS_WIDTH - 20, this$static.CANVAS_HEIGHT - 45);
  this$static.m_memclip.lineTo(45, this$static.CANVAS_HEIGHT - 45);
  this$static.m_coordYclip = new $wnd.Path2D;
  t = this$static.m_turtle;
  t.p = this$static.m_coordYclip;
  $moveTo(t, 0, 14);
  t.x_0 += 38;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 7;
  t.p.lineTo(t.x_0, t.y_0);
  $down(t, this$static.CANVAS_HEIGHT - 20 - 45);
  t.x_0 -= 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 -= 38;
  t.p.lineTo(t.x_0, t.y_0);
  $makeXAxisClip(this$static);
}

$makeClipAreas.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$makeClipAreas';
defineProperties($makeClipAreas, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$makeClipAreas'}});
function $makeXAxisClip(this$static){
  var barHeight, t;
  barHeight = $wnd.Math.min(this$static.CANVAS_HEIGHT - 45, round_int(this$static.BOARD_HEIGHT * this$static.DOT_SIZE * this$static.m_zrVscale) + 20);
  t = this$static.m_turtle;
  this$static.m_coordXclip = new $wnd.Path2D;
  t.p = this$static.m_coordXclip;
  $moveTo(t, 39, barHeight + 45);
  t.y_0 -= 38;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 -= 7;
  t.p.lineTo(t.x_0, t.y_0);
  $right(t, this$static.CANVAS_WIDTH - 45 - 20);
  t.y_0 += 7;
  t.p.lineTo(t.x_0, t.y_0);
  t.x_0 += 6;
  t.p.lineTo(t.x_0, t.y_0);
  t.y_0 += 38;
  t.p.lineTo(t.x_0, t.y_0);
}

$makeXAxisClip.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$makeXAxisClip';
defineProperties($makeXAxisClip, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$makeXAxisClip'}});
function $moveCursor(this$static, dx, dy){
  $paintCursor(this$static, false);
  this$static.m_cursorY += dy;
  this$static.m_cursorX += dx;
  if (this$static.m_cursorX > this$static.BOARD_WIDTH - 0.5) {
    this$static.m_cursorX -= this$static.BOARD_WIDTH;
    this$static.m_cursorY += 1;
  }
  this$static.m_cursorX = $wnd.Math.max($wnd.Math.min(this$static.m_cursorX, this$static.BOARD_WIDTH - 0.5), 0);
  this$static.m_cursorY = $wnd.Math.max($wnd.Math.min(this$static.m_cursorY, this$static.BOARD_HEIGHT - 1), 0);
  while (this$static.m_cursorY < this$static.m_contentVisibleRect.sy + 1 && this$static.m_cursorY >= 0) {
    this$static.m_zrY = this$static.m_zrY + $intern_19 * this$static.m_zrHscale * this$static.DOT_SIZE;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorY > this$static.m_contentVisibleRect.ey - 0.99 && this$static.m_cursorY <= this$static.BOARD_HEIGHT) {
    this$static.m_zrY = this$static.m_zrY - $intern_19 * this$static.m_zrHscale * this$static.DOT_SIZE;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorX < this$static.m_contentVisibleRect.sx + 1 && this$static.m_cursorX >= 0) {
    this$static.m_zrX = this$static.m_zrX + $intern_19 * this$static.m_zrVscale * this$static.DOT_SIZE;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorX > this$static.m_contentVisibleRect.ex - 0.49 && this$static.m_cursorX <= this$static.BOARD_WIDTH - 0.51) {
    this$static.m_zrX = this$static.m_zrX - $intern_19 * this$static.m_zrVscale * this$static.DOT_SIZE;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  $paint(this$static);
}

$moveCursor.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$moveCursor';
defineProperties($moveCursor, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$moveCursor'}});
function $paint(this$static){
  var barHeight, col, rc, rx, ry, scaledDot, step, textVisible, x_0, x0, xcoord, y_0, y0, ycoord;
  this$static.ctx.fillStyle = ($clinit_Color() , WHITE);
  this$static.ctx.fillRect(0, 0, this$static.CANVAS_WIDTH, this$static.CANVAS_HEIGHT);
  $saveAndEnter(this$static);
  this$static.ctx.fillStyle = BLACK_0;
  this$static.ctx.fillRect(0, 0, this$static.BOARD_WIDTH_PX, this$static.BOARD_HEIGHT_PX);
  this$static.m_showContent && (this$static.ctx.font = '' + 2.3 * this$static.DOT_SCALE + 'px monospace');
  for (y0 = 0; y0 < this$static.BOARD_HEIGHT; y0++) {
    for (x0 = 0; x0 < this$static.BOARD_WIDTH; x0++) {
      textVisible = this$static.m_showContent && $isInside(this$static.m_contentVisibleRect, x0, y0);
      col = $paintMemCellBack(this$static, x0, y0);
      textVisible && $paintTextValue(this$static, x0, y0, col);
    }
  }
  this$static.m_showContent && this$static.m_intervalId != null && $paintCursor(this$static, true);
  this$static.ctx.restore();
  this$static.ctx.save();
  this$static.ctx.fillStyle = '#ffffff';
  this$static.ctx.fillRect(0, 0, 45, this$static.CANVAS_HEIGHT);
  this$static.ctx.fillRect(0, this$static.CANVAS_HEIGHT - 45, this$static.CANVAS_WIDTH, 45);
  this$static.ctx.font = '14px monospace';
  this$static.ctx.textBaseline = 'middle';
  step = 32;
  rc = round_int(this$static.m_zrVscale) * this$static.DOT_SCALE;
  rc >= 2 && rc < 4?(step = step / 2 | 0):rc >= 4 && rc <= 8?(step = step / 4 | 0):rc >= 8 && rc <= 16?(step = step / 8 | 0):rc >= 16 && (step = step / 16 | 0);
  this$static.ctx.fillStyle = '#888888';
  this$static.ctx.clip(this$static.m_coordYclip);
  for (y_0 = 0; y_0 <= this$static.BOARD_HEIGHT; y_0 += step) {
    ry = $wnd.Math.min(y_0, this$static.BOARD_HEIGHT - 1);
    scaledDot = this$static.DOT_SIZE * this$static.m_zrVscale;
    ycoord = 20 + this$static.m_zrY + ry * scaledDot;
    if (ycoord + scaledDot < 20 || ycoord > this$static.CANVAS_HEIGHT - 45)
      continue;
    this$static.ctx.fillText(hex4(ry * this$static.BOARD_WIDTH), 1, ycoord + scaledDot / 2);
    this$static.ctx.fillRect(38, ycoord, 6, scaledDot);
  }
  this$static.ctx.restore();
  this$static.ctx.save();
  this$static.ctx.clip(this$static.m_coordXclip);
  this$static.ctx.font = '14px monospace';
  this$static.ctx.fillStyle = '#888888';
  barHeight = $wnd.Math.min(this$static.CANVAS_HEIGHT - 45, round_int($wnd.Math.ceil(this$static.BOARD_HEIGHT * this$static.DOT_SIZE * this$static.m_zrVscale)) + 20);
  for (x_0 = 0; x_0 <= this$static.BOARD_WIDTH; x_0 += step) {
    rx = $wnd.Math.min(x_0, this$static.BOARD_WIDTH - 1);
    scaledDot = this$static.DOT_SIZE * this$static.m_zrHscale;
    xcoord = 45 + this$static.m_zrX + rx * scaledDot;
    if (xcoord + scaledDot < 45 || xcoord > this$static.CANVAS_WIDTH - 20)
      continue;
    this$static.ctx.fillText(($clinit_Format() , hex_chars[(rx & 240) >> 4] + ('' + hex_chars[rx & 15])), xcoord - 7 + scaledDot / 2, barHeight + 20);
    this$static.ctx.fillRect(xcoord, barHeight + 1, scaledDot, 6);
  }
  this$static.ctx.restore();
  $paintRegPtrLines(this$static);
  this$static.ctx.font = '' + 2.3 * this$static.DOT_SCALE + 'px monospace';
}

$paint.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paint';
defineProperties($paint, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$paint'}});
function $paintCursor(this$static, isOn){
  var col, rx, x_0, y_0;
  $saveAndEnter(this$static);
  x_0 = round_int(this$static.m_cursorX);
  y_0 = round_int(this$static.m_cursorY);
  if (isOn) {
    col = $paintMemCellBack(this$static, x_0, y_0);
    rx = this$static.m_cursorX;
    rx % 1 == 0 && (rx += 0.08);
    $paintMemCellBack(this$static, round_int(this$static.m_cursorX), round_int(this$static.m_cursorY));
    this$static.ctx.fillStyle = '#eeeeee';
    this$static.ctx.fillRect(rx * this$static.DOT_SIZE, this$static.m_cursorY * this$static.DOT_SIZE + this$static.DOT_SCALE * 0.32, this$static.DOT_SCALE * 1.25, this$static.DOT_SCALE * 2.2);
    $paintTextValue(this$static, x_0, y_0, col);
  }
   else {
    col = $paintMemCellBack(this$static, x_0, y_0);
    if (!col) {
      this$static.ctx.fillStyle = '#000000';
      this$static.ctx.fillRect(x_0 * this$static.DOT_SIZE, y_0 * this$static.DOT_SIZE, this$static.DOT_SIZE, this$static.DOT_SIZE);
    }
    $paintTextValue(this$static, x_0, y_0, col);
  }
  this$static.ctx.restore();
}

$paintCursor.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintCursor';
defineProperties($paintCursor, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$paintCursor'}});
function $paintMemCellBack(this$static, x_0, y_0){
  var altColor, cellVal, col, flags, ipHere;
  flags = this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)];
  ipHere = (flags & 1) != 0;
  altColor = this$static.m_alt_opcode_color && (flags & 2) != 0;
  cellVal = this$static._data[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)];
  if (cellVal == -1)
    return null;
  col = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), cellVal, ipHere, altColor);
  if (col) {
    this$static.ctx.fillStyle = col.m_str;
    this$static.ctx.fillRect(x_0 * this$static.DOT_SIZE, y_0 * this$static.DOT_SIZE, this$static.DOT_SIZE, this$static.DOT_SIZE);
  }
  return col;
}

$paintMemCellBack.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintMemCellBack';
defineProperties($paintMemCellBack, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$paintMemCellBack'}});
function $paintPixel(this$static, number, color_0, value_0){
  var needClip;
  needClip = this$static.competition.speed_0 != 50000;
  needClip && $saveAndEnter(this$static);
  this$static.ctx.setTransform(this$static.m_zrHscale, 0, 0, this$static.m_zrVscale, this$static.m_zrX + 45, this$static.m_zrY + 20);
  $paintPixel_0(this$static, number % this$static.BOARD_WIDTH, number / this$static.BOARD_WIDTH | 0, color_0, value_0, true);
  needClip?this$static.ctx.restore():this$static.ctx.setTransform(1, 0, 0, 1, 0, 0);
}

$paintPixel.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintPixel';
defineProperties($paintPixel, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$paintPixel'}});
function $paintPixel_0(this$static, x_0, y_0, colorByte, value_0, doResetAltOpcode){
  var altColor, color_0;
  this$static._values[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] = value_0;
  color_0 = null;
  colorByte != -1?(this$static._data[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] = colorByte):(colorByte = this$static._data[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)]);
  altColor = false;
  doResetAltOpcode?(this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] = (this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] & -3) << 24 >> 24):(altColor = this$static.m_alt_opcode_color && (this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] & 2) != 0);
  if (colorByte != -1) {
    color_0 = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), colorByte, false, altColor);
    this$static.ctx.fillStyle = color_0.m_str;
  }
   else {
    this$static.ctx.fillStyle = '#000000';
  }
  this$static.ctx.fillRect(x_0 * this$static.DOT_SIZE, y_0 * this$static.DOT_SIZE, this$static.DOT_SIZE, this$static.DOT_SIZE);
  this$static.m_showContent && $paintTextValue(this$static, x_0, y_0, color_0);
}

$paintPixel_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintPixel';
defineProperties($paintPixel_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$paintPixel'}});
function $paintPointer(this$static, number, colorByte){
  var altColor, color_0, x_0, y_0;
  x_0 = number % this$static.BOARD_WIDTH;
  y_0 = number / this$static.BOARD_WIDTH | 0;
  this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] = (this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] | 1) << 24 >> 24;
  this$static.m_painterdPointers[this$static.m_paintedPointerCount++] = number;
  $saveAndEnter(this$static);
  altColor = this$static.m_alt_opcode_color && (this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] & 2) != 0;
  color_0 = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), colorByte, true, altColor);
  this$static.ctx.fillStyle = color_0.m_str;
  this$static.ctx.fillRect(x_0 * this$static.DOT_SIZE, y_0 * this$static.DOT_SIZE, this$static.DOT_SIZE, this$static.DOT_SIZE);
  this$static.m_showContent && $paintTextValue(this$static, x_0, y_0, color_0);
  this$static.ctx.restore();
}

$paintPointer.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintPointer';
defineProperties($paintPointer, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$paintPointer'}});
function $paintRegPtrLines(this$static){
  var addr, addrInsideArena, cell_x, cell_y, dot_height, dot_width, entry, outerIter, ptr_x, ptr_y, roundCorner, rp, rp$iterator, seg, state, warrior, x_sign, yLine, y_sign, ydiff;
  if (!this$static.m_show_reg_ptrs)
    return;
  if (!this$static.competition.currentWar)
    return;
  warrior = $getWarriorByLabel(this$static.competition.currentWar, this$static.m_selectedPlayerLabel);
  if (!warrior)
    return;
  state = warrior.m_state;
  this$static.ctx.beginPath();
  for (rp$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.m_reg_ptrs)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); rp$iterator.val$outerIter2.hasNext;) {
    rp = (entry = $next_1(rp$iterator.val$outerIter2) , castTo(entry.getValue(), 67));
    if (!rp)
      continue;
    addr = $getByIndex(state, rp.reg_idx);
    seg = $getByIndex(state, rp.seg_idx);
    addrInsideArena = linearAddress_0(seg, addr) - $intern_18;
    if (addrInsideArena < 0 || addrInsideArena > $intern_18)
      continue;
    cell_x = addrInsideArena % this$static.BOARD_WIDTH + 0.5;
    cell_y = (addrInsideArena / this$static.BOARD_WIDTH | 0) + 0.5;
    dot_width = this$static.DOT_SIZE * this$static.m_zrHscale;
    dot_height = this$static.DOT_SIZE * this$static.m_zrVscale;
    ptr_x = round_int(cell_x * dot_width + this$static.m_zrX + 45);
    ptr_y = round_int(cell_y * dot_height + this$static.m_zrY + 20);
    x_sign = rp.elem_x > ptr_x?1:-1;
    y_sign = rp.elem_y > ptr_y?-1:1;
    roundCorner = false;
    yLine = true;
    ydiff = $wnd.Math.abs(rp.elem_y - ptr_y);
    if (ydiff > dot_height * 0.5) {
      ptr_y -= round_int(0.5 * dot_height * y_sign);
      ydiff > dot_height * 0.5 + 10 && (roundCorner = true);
    }
     else {
      ptr_x += round_int(0.5 * dot_width * x_sign);
      yLine = false;
    }
    this$static.ctx.moveTo(rp.elem_x, rp.elem_y);
    if (roundCorner) {
      this$static.ctx.lineTo(ptr_x + x_sign * 10, rp.elem_y);
      this$static.ctx.arcTo(ptr_x, rp.elem_y, ptr_x, rp.elem_y + y_sign * 10, 10);
    }
     else 
      this$static.ctx.lineTo(ptr_x, rp.elem_y);
    if (yLine) {
      this$static.ctx.lineTo(ptr_x, ptr_y);
      this$static.ctx.moveTo(ptr_x - 6, ptr_y - 10 * y_sign);
      this$static.ctx.lineTo(ptr_x, ptr_y);
      this$static.ctx.lineTo(ptr_x + 6, ptr_y - 10 * y_sign);
    }
     else {
      this$static.ctx.moveTo(ptr_x + 10 * x_sign, rp.elem_y - 6);
      this$static.ctx.lineTo(ptr_x, rp.elem_y);
      this$static.ctx.lineTo(ptr_x + 10 * x_sign, rp.elem_y + 6);
    }
  }
  this$static.ctx.strokeStyle = '#000000';
  this$static.ctx.lineWidth = 4;
  this$static.ctx.stroke();
  this$static.ctx.strokeStyle = '#ffffff';
  this$static.ctx.lineWidth = 2;
  this$static.ctx.stroke();
}

$paintRegPtrLines.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintRegPtrLines';
defineProperties($paintRegPtrLines, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$paintRegPtrLines'}});
function $paintTextValue(this$static, x_0, y_0, backCol){
  var textCol;
  backCol?backCol.m_isDark?(textCol = '#ffffff'):(textCol = '#000000'):(textCol = '#666666');
  this$static.ctx.fillStyle = textCol;
  this$static.ctx.fillText(hex2(this$static._values[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] & 255), x_0 * this$static.DOT_SIZE + 0.2 * this$static.DOT_SCALE, y_0 * this$static.DOT_SIZE + 2.2 * this$static.DOT_SCALE);
}

$paintTextValue.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$paintTextValue';
defineProperties($paintTextValue, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$paintTextValue'}});
function $redoTransform(this$static){
  this$static.m_showContent = this$static.m_zrHscale * this$static.DOT_SCALE > 4;
  this$static.m_contentVisibleRect.sx = -this$static.m_zrX / this$static.DOT_SIZE / this$static.m_zrHscale - 1;
  this$static.m_contentVisibleRect.sy = -this$static.m_zrY / this$static.DOT_SIZE / this$static.m_zrVscale - 1;
  this$static.m_contentVisibleRect.ex = this$static.m_contentVisibleRect.sx + this$static.VIS_WIDTH / this$static.m_zrHscale + 1;
  this$static.m_contentVisibleRect.ey = this$static.m_contentVisibleRect.sy + this$static.VIS_HEIGHT / this$static.m_zrVscale + 1;
}

$redoTransform.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$redoTransform';
defineProperties($redoTransform, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$redoTransform'}});
function $registerManullyChanged(this$static, rindex){
  if (!this$static.m_show_reg_ptrs)
    return;
  this$static.m_reg_refcounts[rindex] > 0 && $paint(this$static);
}

$registerManullyChanged.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$registerManullyChanged';
defineProperties($registerManullyChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$registerManullyChanged'}});
function $saveAndEnter(this$static){
  this$static.ctx.save();
  this$static.ctx.clip(this$static.m_memclip);
  this$static.ctx.setTransform(this$static.m_zrHscale, 0, 0, this$static.m_zrVscale, this$static.m_zrX + 45, this$static.m_zrY + 20);
}

$saveAndEnter.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$saveAndEnter';
defineProperties($saveAndEnter, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$saveAndEnter'}});
function $setAltColor(this$static, addr, len, isSet){
  var byteaddr, i;
  if (!isSet)
    return;
  for (i = 0; i < len; ++i) {
    byteaddr = addr + i;
    $set_flag(this$static, byteaddr % this$static.BOARD_WIDTH, byteaddr / this$static.BOARD_WIDTH | 0);
  }
}

$setAltColor.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$setAltColor';
defineProperties($setAltColor, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$setAltColor'}});
function $setCanvasSelectedPlayer(this$static, label_0){
  this$static.m_selectedPlayerLabel = label_0;
  this$static.m_show_reg_ptrs && $paint(this$static);
}

$setCanvasSelectedPlayer.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$setCanvasSelectedPlayer';
defineProperties($setCanvasSelectedPlayer, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$setCanvasSelectedPlayer'}});
function $set_flag(this$static, x_0, y_0){
  this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] = (this$static._flags[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] | 2) << 24 >> 24;
}

$set_flag.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$set_flag';
defineProperties($set_flag, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$set_flag'}});
function $set_values(this$static, x_0, y_0, v){
  this$static._values[x_0 + (y_0 << this$static.BOARD_WIDTH_BITS)] = v;
}

$set_values.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.$set_values';
defineProperties($set_values, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.$set_values'}});
function Canvas_0(){
  var cw;
  JComponent_0.call(this, 'warCanvas');
  this.BOARD_HEIGHT = $intern_18 / this.BOARD_WIDTH | 0;
  this.BOARD_WIDTH_BITS = mathlog2(this.BOARD_WIDTH);
  this.BOARD_WIDTH_PX = this.BOARD_WIDTH * this.DOT_SIZE;
  this.BOARD_HEIGHT_PX = this.BOARD_HEIGHT * this.DOT_SIZE;
  this.CANVAS_HEIGHT = this.BOARD_HEIGHT_PX + 20 + 45;
  this.CANVAS_WIDTH = this.BOARD_WIDTH_PX + 45 + 20;
  this.VIS_WIDTH_PX = this.CANVAS_WIDTH - 45 - 20;
  this.VIS_HEIGHT_PX = this.CANVAS_HEIGHT - 20 - 45;
  this.VIS_WIDTH = this.VIS_WIDTH_PX / this.DOT_SIZE | 0;
  this.VIS_HEIGHT = this.VIS_HEIGHT_PX / this.DOT_SIZE | 0;
  this.m_reg_ptrs = new HashMap;
  this.m_reg_refcounts = initUnidimensionalArray(I_classLit, $intern_12, 10, 16, 15, 1);
  this.m_turtle = new Canvas$Turtle;
  this.m_painterdPointers = initUnidimensionalArray(I_classLit, $intern_12, 10, 20, 15, 1);
  this.m_contentVisibleRect = new Canvas$Rect;
  this.ctx = castToNative(castToNative(this.m_element, $wnd.HTMLCanvasElement).getContext('2d'), $wnd.CanvasRenderingContext2D);
  cw = s_instance;
  this.competition = cw.competition;
  $makeClipAreas(this);
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
defineProperties(Canvas_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.Canvas'}});
function initZoom(marginTop, marginLeft){
  $wnd.WC_MARGIN_TOP = marginTop;
  $wnd.WC_MARGIN_LEFT = marginLeft;
  $wnd.js_initZoom();
}

initZoom.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.initZoom';
defineProperties(initZoom, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.initZoom'}});
function js_updateFromKeyScroll(nx, ny){
  $wnd.js_updateFromKeyScroll(nx, ny);
}

js_updateFromKeyScroll.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.js_updateFromKeyScroll';
defineProperties(js_updateFromKeyScroll, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.js_updateFromKeyScroll'}});
function mathlog2(v){
  return Math.log2(v);
}

mathlog2.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.mathlog2';
defineProperties(mathlog2, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.mathlog2'}});
function resetZoom(){
  $wnd.js_resetZoom();
}

resetZoom.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.resetZoom';
defineProperties(resetZoom, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.resetZoom'}});
defineClass(170, 44, {}, Canvas_0);
_.j_canvasResized_0 = function j_canvasResized(w, h){
  $canvasSizeChanged(this, w, h);
  $paint(this);
}
;
_.j_canvasResized_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_canvasResized';
defineProperties(_.j_canvasResized_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_canvasResized'}});
_.j_change_board_width_0 = function j_change_board_width(bw){
  this.BOARD_WIDTH = bw;
  this.BOARD_HEIGHT = $intern_18 / this.BOARD_WIDTH | 0;
  this.BOARD_WIDTH_BITS = mathlog2(this.BOARD_WIDTH);
  this.DOT_SCALE = 256 / this.BOARD_WIDTH | 0;
  this.DOT_SIZE = 3 * this.DOT_SCALE;
  this.BOARD_WIDTH_PX = this.BOARD_WIDTH * this.DOT_SIZE;
  this.BOARD_HEIGHT_PX = this.BOARD_HEIGHT * this.DOT_SIZE;
  $redoTransform(this);
  $canvasSizeChanged(this, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
  this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  $wnd.js_resetZoom();
}
;
_.j_change_board_width_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_change_board_width';
defineProperties(_.j_change_board_width_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_change_board_width'}});
_.j_changed_reg_in_mem_0 = function j_changed_reg_in_mem(v){
  this.m_show_reg_ptrs = v;
  $paint(this);
}
;
_.j_changed_reg_in_mem_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_changed_reg_in_mem';
defineProperties(_.j_changed_reg_in_mem_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_changed_reg_in_mem'}});
_.j_reg_ptr_elem_moved_0 = function j_reg_ptr_elem_moved(index_0, x_0, y_0){
  var rp;
  rp = castTo($get_3(this.m_reg_ptrs, valueOf_0(index_0)), 67);
  rp.elem_x = x_0;
  rp.elem_y = y_0;
  $paint(this);
}
;
_.j_reg_ptr_elem_moved_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_reg_ptr_elem_moved';
defineProperties(_.j_reg_ptr_elem_moved_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_reg_ptr_elem_moved'}});
_.j_reg_ptr_enabled_0 = function j_reg_ptr_enabled(v, both_idx){
  var addr_idx, seg_idx;
  addr_idx = both_idx & 255;
  seg_idx = both_idx >> 8;
  if (v) {
    ++this.m_reg_refcounts[addr_idx];
    ++this.m_reg_refcounts[seg_idx];
    $put(this.m_reg_ptrs, valueOf_0(both_idx), new Canvas$RegPtrInf(addr_idx, seg_idx));
  }
   else {
    --this.m_reg_refcounts[addr_idx];
    --this.m_reg_refcounts[seg_idx];
    $remove(this.m_reg_ptrs, valueOf_0(both_idx));
    $paint(this);
  }
}
;
_.j_reg_ptr_enabled_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_reg_ptr_enabled';
defineProperties(_.j_reg_ptr_enabled_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_reg_ptr_enabled'}});
_.j_set_alt_opcode_color_0 = function j_set_alt_opcode_color(v){
  this.m_alt_opcode_color = v;
  $paint(this);
}
;
_.j_set_alt_opcode_color_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_set_alt_opcode_color';
defineProperties(_.j_set_alt_opcode_color_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_set_alt_opcode_color'}});
_.j_warCanvas_click_0 = function j_warCanvas_click(x_0, y_0){
  var mx, my;
  if (!this.m_showContent || x_0 < 0 || y_0 < 0 || x_0 >= this.VIS_WIDTH_PX || y_0 >= this.VIS_HEIGHT_PX)
    return;
  if (!this.m_indebug)
    return;
  mx = round_int((x_0 - this.m_zrX) / this.DOT_SIZE / this.m_zrHscale * 2) / 2;
  my = round_int((y_0 - this.m_zrY) / this.DOT_SIZE / this.m_zrVscale);
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
defineProperties(_.j_warCanvas_click_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_click'}});
_.j_warCanvas_repaint_0 = function j_warCanvas_repaint(){
  $paint(this);
}
;
_.j_warCanvas_repaint_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_repaint';
defineProperties(_.j_warCanvas_repaint_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_repaint'}});
_.j_warCanvas_setTransform_0 = function j_warCanvas_setTransform(hscale, vscale, x_0, y_0){
  this.m_zrHscale = hscale;
  this.m_zrVscale = vscale;
  this.m_zrX = x_0;
  this.m_zrY = y_0;
  $redoTransform(this);
  $makeXAxisClip(this);
}
;
_.j_warCanvas_setTransform_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_setTransform';
defineProperties(_.j_warCanvas_setTransform_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_setTransform'}});
_.j_warCanvas_showCurrent_0 = function j_warCanvas_showCurrent(x_0, y_0){
  var addr, bef, i, mx, my, player, sb, v;
  if (!this.m_mem || x_0 < 0 || y_0 < 0 || x_0 >= this.VIS_WIDTH_PX || y_0 >= this.VIS_HEIGHT_PX) {
    this.m_hoverCellInfo.style.display = 'none';
    return;
  }
  mx = round_int((x_0 - this.m_zrX) / this.DOT_SIZE / this.m_zrHscale);
  my = round_int((y_0 - this.m_zrY) / this.DOT_SIZE / this.m_zrVscale);
  if (mx < 0 || mx >= this.BOARD_WIDTH || my < 0 || my >= this.BOARD_HEIGHT) {
    this.m_hoverCellInfo.style.display = 'none';
    return;
  }
  addr = mx + my * this.BOARD_WIDTH & $intern_0;
  v = $readByte(this.m_mem, addr + $intern_18) & 255;
  sb = new StringBuilder;
  sb.string += '0x';
  $append_4(sb, hex4(addr));
  sb.string += ': 0x';
  $append_4(sb, ($clinit_Format() , hex_chars[(v & 240) >> 4] + ('' + hex_chars[v & 15])));
  sb.string += ' (';
  bef = sb.string.length;
  sb.string += v;
  sb.string += ')';
  for (i = sb.string.length - bef; i < 5; ++i)
    sb.string += '\xA0';
  player = this._data[mx + (my << this.BOARD_WIDTH_BITS)];
  if (player != -1) {
    sb.string += '  Player: ';
    $append_4(sb, $substring_1($getWarrior(this.m_currentWar, player).m_name, 0, 20));
  }
  this.m_hoverCellInfo.style.display = '';
  setInnerText(this.m_hoverCellInfo, sb.string);
}
;
_.j_warCanvas_showCurrent_0.displayName = 'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_showCurrent';
defineProperties(_.j_warCanvas_showCurrent_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas.j_warCanvas_showCurrent'}});
_.BOARD_HEIGHT = 0;
_.BOARD_HEIGHT_PX = 0;
_.BOARD_WIDTH = 256;
_.BOARD_WIDTH_BITS = 0;
_.BOARD_WIDTH_PX = 0;
_.CANVAS_HEIGHT = 0;
_.CANVAS_WIDTH = 0;
_.DOT_SCALE = 1;
_.DOT_SIZE = 3;
_.VIS_HEIGHT = 0;
_.VIS_HEIGHT_PX = 0;
_.VIS_WIDTH = 0;
_.VIS_WIDTH_PX = 0;
_.competition = null;
_.m_alt_opcode_color = false;
_.m_blinkOn = false;
_.m_currentWar = null;
_.m_cursorX = 0;
_.m_cursorY = 0;
_.m_indebug = false;
_.m_mem = null;
_.m_paintedPointerCount = 0;
_.m_showContent = false;
_.m_show_reg_ptrs = false;
_.m_zrHscale = 0;
_.m_zrVscale = 0;
_.m_zrX = 0;
_.m_zrY = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas', 170);
function $isInside(this$static, x_0, y_0){
  return x_0 > this$static.sx && x_0 < this$static.ex && y_0 > this$static.sy && y_0 < this$static.ey;
}

$isInside.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Rect.$isInside';
defineProperties($isInside, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$Rect.$isInside'}});
function Canvas$Rect(){
}

Canvas$Rect.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Rect.Canvas$Rect';
defineProperties(Canvas$Rect, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$Rect.Canvas$Rect'}});
defineClass(172, 1, {}, Canvas$Rect);
_.ex = 0;
_.ey = 0;
_.sx = 0;
_.sy = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas$Rect_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/Rect', 172);
function Canvas$RegPtrInf(_reg_idx, _seg_idx){
  this.reg_idx = _reg_idx;
  this.seg_idx = _seg_idx;
}

Canvas$RegPtrInf.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$RegPtrInf.Canvas$RegPtrInf';
defineProperties(Canvas$RegPtrInf, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$RegPtrInf.Canvas$RegPtrInf'}});
defineClass(67, 1, {67:1}, Canvas$RegPtrInf);
_.elem_x = 0;
_.elem_y = 0;
_.reg_idx = 0;
_.seg_idx = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas$RegPtrInf_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/RegPtrInf', 67);
function $down(this$static, v){
  this$static.y_0 += v;
  this$static.p.lineTo(this$static.x_0, this$static.y_0);
}

$down.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Turtle.$down';
defineProperties($down, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$Turtle.$down'}});
function $moveTo(this$static, _x, _y){
  this$static.x_0 = _x;
  this$static.y_0 = _y;
  this$static.p.moveTo(this$static.x_0, this$static.y_0);
}

$moveTo.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Turtle.$moveTo';
defineProperties($moveTo, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$Turtle.$moveTo'}});
function $right(this$static, v){
  this$static.x_0 += v;
  this$static.p.lineTo(this$static.x_0, this$static.y_0);
}

$right.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Turtle.$right';
defineProperties($right, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$Turtle.$right'}});
function Canvas$Turtle(){
  this.p = null;
}

Canvas$Turtle.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$Turtle.Canvas$Turtle';
defineProperties(Canvas$Turtle, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$Turtle.Canvas$Turtle'}});
defineClass(171, 1, {}, Canvas$Turtle);
_.x_0 = 0;
_.y_0 = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas$Turtle_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/Turtle', 171);
function $getClass_1(){
  return Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

$getClass_1.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$0$Type.$getClass';
defineProperties($getClass_1, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$lambda$0$Type.$getClass'}});
function Canvas$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Canvas$lambda$0$Type.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$0$Type.Canvas$lambda$0$Type';
defineProperties(Canvas$lambda$0$Type, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$lambda$0$Type.Canvas$lambda$0$Type'}});
defineClass(251, $wnd.Function, {}, Canvas$lambda$0$Type);
_.onInvoke = function onInvoke(arg0){
  $lambda$0(this.$$outer_0);
}
;
_.onInvoke.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$0$Type.onInvoke';
defineProperties(_.onInvoke, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$lambda$0$Type.onInvoke'}});
function Canvas$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Canvas$lambda$1$Type.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$1$Type.Canvas$lambda$1$Type';
defineProperties(Canvas$lambda$1$Type, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$lambda$1$Type.Canvas$lambda$1$Type'}});
defineClass(173, 1, {}, Canvas$lambda$1$Type);
_.handleEvent = function handleEvent(arg0){
  $lambda$1(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$1$Type.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$lambda$1$Type.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_Canvas$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/lambda$1$Type', 173);
function Canvas$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

Canvas$lambda$2$Type.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$2$Type.Canvas$lambda$2$Type';
defineProperties(Canvas$lambda$2$Type, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$lambda$2$Type.Canvas$lambda$2$Type'}});
defineClass(174, 1, {}, Canvas$lambda$2$Type);
_.handleEvent = function handleEvent_0(arg0){
  $lambda$2(this.$$outer_0, arg0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.Canvas$lambda$2$Type.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.Canvas$lambda$2$Type.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_Canvas$lambda$2$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/lambda$2$Type', 174);
function $$init_6(this$static){
  this$static.m_singleByte = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit, $intern_2, 34, 256, 0, 1);
  this$static.PAGE_SIZE_0 = $wnd.PAGE_SIZE;
  this$static.m_editBrClickHandler = new CodeEditor$1(this$static);
  this$static.m_dbgBrClickHandler = new CodeEditor$2(this$static);
}

$$init_6.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$$init';
defineProperties($$init_6, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$$init'}});
function $asBytesText(bin){
  var i, sb;
  sb = new StringBuilder;
  sb.string += 'db ';
  for (i = 0; i < bin.length; ++i) {
    sb.string += '0x';
    $append_4(sb, hex2(bin[i] & 255));
    i < bin.length - 1 && (sb.string += ', ' , sb);
  }
  return sb.string;
}

$asBytesText.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$asBytesText';
defineProperties($asBytesText, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$asBytesText'}});
function $asm_edit_changed(this$static){
  var intext, prevLineCount, prevLiveOffsets;
  if (this$static.entered)
    return;
  this$static.entered = true;
  prevLineCount = this$static.m_lineCount;
  prevLiveOffsets = this$static.m_lineOffsets;
  intext = this$static.asm_edit_0.value;
  $setText_0(this$static, intext, this$static.m_playersPanel);
  $updateBreakpoints(this$static, prevLiveOffsets, prevLineCount, this$static.m_prevInText);
  $updateText(this$static.m_playersPanel, intext);
  this$static.m_prevInText = intext;
  $wnd.js_save_state();
  this$static.entered = false;
}

$asm_edit_changed.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$asm_edit_changed';
defineProperties($asm_edit_changed, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$asm_edit_changed'}});
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
defineProperties($bin_equal, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$bin_equal'}});
function $checkDisasmLines(this$static, binbuf, listing, asmElem, intext){
  var atLstLine, dis, e, eptr, lstline, msg, omsgdiv, omsgtxt;
  dis = new Disassembler$ArrDisassembler(binbuf, binbuf.length);
  for (atLstLine = 0; atLstLine < listing.array.length; ++atLstLine) {
    msg = null;
    lstline = (checkCriticalElementIndex(atLstLine, listing.array.length) , castTo(listing.array[atLstLine], 39));
    if (lstline.address == -1)
      continue;
    if ($isDefineCode(lstline.code_0)) {
      continue;
    }
    try {
      $reset_0(dis, lstline.address, lstline.address + lstline.opcodesCount);
      $nextOpcode_0(dis);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 68)) {
        msg = '' + lstline.lineNum + ': not enough bytes to parse';
      }
       else if (instanceOf($e0, 9)) {
        msg = '' + lstline.lineNum + ': Although this is a legal x86 opcode, corewars8086 does not support it';
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
      if (this$static.m_errLines == null || lstline.lineNum < this$static.m_errLines.length && this$static.m_errLines[lstline.lineNum] == 0) {
        if (asmElem == null) {
          asmElem = $htmlizeText(intext);
          this$static.asm_show.innerHTML = '';
          this$static.asm_show.appendChild(asmElem);
        }
        e = ($clinit_DomGlobal() , document_0).getElementById('mline_' + ('' + lstline.lineNum));
        if (e == null) {
          console.error('did not find line?');
          return asmElem;
        }
        e.classList.add('edit_warning');
        omsgdiv = document_0.createElement('div');
        omsgdiv.classList.add('stdout_line_w');
        lstline.lineNum < this$static.m_lineOffsets.array.length && omsgdiv.setAttribute('ondblclick', 'asm_cursorToLine(' + ('' + castTo($get_4(this$static.m_lineOffsets, lstline.lineNum), 23).value_0) + ')');
        omsgtxt = document_0.createTextNode(msg);
        omsgdiv.appendChild(omsgtxt);
        this$static.asm_output.appendChild(omsgdiv);
      }
    }
  }
  return asmElem;
}

$checkDisasmLines.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$checkDisasmLines';
defineProperties($checkDisasmLines, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$checkDisasmLines'}});
function $disassembleAddr(this$static, absaddr, addrInArea){
  var bs, dis, i, i0, isAlt, len, opline, page, prevWasAlt, text_0;
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
  len = dis.pointer - dis.startOffset;
  opline = new CodeEditor$DbgLine;
  if (this$static.m_lastDbgLine) {
    prevWasAlt = (this$static.m_lastDbgLine.flags & 8) != 0;
    isAlt = !prevWasAlt;
    $setAltColor(s_instance.battleFrame.warCanvas, absaddr - $intern_18, len, isAlt);
    isAlt && (opline.flags |= 8);
  }
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
defineProperties($disassembleAddr, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$disassembleAddr'}});
function $eraseOpcode(this$static, addrInArea){
  var page, value_0;
  this$static.m_dbglines[addrInArea] = null;
  page = addrInArea / this$static.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, addrInArea, null);
  ++addrInArea;
  while (!this$static.m_dbglines[addrInArea]) {
    value_0 = $readByte(this$static.m_mem, addrInArea + $intern_18);
    $setByte(this$static, addrInArea, (value_0 & 255) << 24 >> 24);
    ++addrInArea;
  }
}

$eraseOpcode.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$eraseOpcode';
defineProperties($eraseOpcode, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$eraseOpcode'}});
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
defineProperties($exportMethods_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$exportMethods'}});
function $getCurrentWarrior(this$static){
  var label_0, war;
  war = this$static.m_competition.currentWar;
  if (!war)
    return null;
  label_0 = this$static.m_playersPanel.m_inEditor.label_0;
  return $getWarriorByLabel(war, label_0);
}

$getCurrentWarrior.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$getCurrentWarrior';
defineProperties($getCurrentWarrior, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$getCurrentWarrior'}});
function $getSingleByteLine(this$static, bval){
  var byteline, hexVal, val;
  val = bval & 255;
  byteline = this$static.m_singleByte[val];
  if (!byteline) {
    byteline = new CodeEditor$DbgLine;
    hexVal = ($clinit_Format() , hex_chars[(val & 240) >> 4] + ('' + hex_chars[val & 15]));
    byteline.text_0 = "<span class='dbg_opcodes'>" + hexVal + '<\/span>db ' + hexVal + 'h';
    byteline.flags = 1;
  }
  this$static.m_singleByte[val] = byteline;
  return byteline;
}

$getSingleByteLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$getSingleByteLine';
defineProperties($getSingleByteLine, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$getSingleByteLine'}});
function $htmlizeText(intext){
  var df, e, found, lastFound, lineNum, ss, t;
  df = ($clinit_DomGlobal() , document_0).createDocumentFragment();
  lastFound = -1;
  found = intext.indexOf(fromCodePoint(10), 0);
  lineNum = 1;
  while (found != -1) {
    if (found != lastFound + 1) {
      e = document_0.createElement('span');
      e.setAttribute('id', 'mline_' + ('' + lineNum));
      ss = (checkCriticalStringBounds(lastFound + 1, found + 1, intext.length) , intext.substr(lastFound + 1, found + 1 - (lastFound + 1)));
      t = document_0.createTextNode(ss);
      e.appendChild(t);
      df.appendChild(e);
    }
     else {
      t = document_0.createTextNode('\n');
      df.appendChild(t);
    }
    lastFound = found;
    found = intext.indexOf(fromCodePoint(10), found + 1);
    ++lineNum;
  }
  if (lastFound != intext.length - 1) {
    e = document_0.createElement('span');
    e.setAttribute('id', 'mline_' + ('' + lineNum));
    ss = (checkCriticalStringElementIndex(lastFound + 1, intext.length + 1) , intext.substr(lastFound + 1));
    t = document_0.createTextNode(ss);
    e.appendChild(t);
    df.appendChild(e);
  }
  return df;
}

$htmlizeText.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$htmlizeText';
defineProperties($htmlizeText, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$htmlizeText'}});
function $initDebugAreaLines(this$static){
  var addr, befFirst, br, br$iterator, code_0, copy, count_for_alt_col, dbgline, i, isAlt, j, last_dbgline, loadAddr, lsti, lstline, lstline$iterator, opcode, p, p$array, p$index, p$max, playerLoadOffset, w, war;
  war = this$static.m_competition.currentWar;
  if (!this$static.m_fillCmd) {
    this$static.m_fillCmd = new CodeEditor$DbgLine;
    this$static.m_fillCmd.text_0 = "<span class='dbg_backfill'><span class='dbg_opcodes'>CC<\/span>int 3<\/span>";
  }
  for (addr = 0; addr < $intern_18; ++addr) {
    this$static.m_dbglines[addr] = this$static.m_fillCmd;
  }
  for (p$array = this$static.m_pages , p$index = 0 , p$max = p$array.length; p$index < p$max; ++p$index) {
    p = p$array[p$index];
    p.isDirty = true;
  }
  this$static.m_dbgBreakpoints = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Breakpoint_2_classLit, $intern_2, 31, $intern_18, 0, 1);
  for (i = 0; i < war.m_numWarriors; ++i) {
    w = war.m_warriors[i];
    playerLoadOffset = w.m_loadAddress.m_linearAddress - $intern_18;
    code_0 = $findCode(this$static.m_playersPanel, w.m_label);
    for (lstline$iterator = new ArrayList$1(code_0.lines); lstline$iterator.i < lstline$iterator.this$01.array.length;) {
      lstline = castTo($next_5(lstline$iterator), 39);
      lstline.tmp_br = null;
    }
    for (br$iterator = new ArrayList$1(code_0.breakpoints); br$iterator.i < br$iterator.this$01.array.length;) {
      br = castTo($next_5(br$iterator), 31);
      castTo($get_4(code_0.lines, br.lineNum - 1), 39).tmp_br = br;
    }
    last_dbgline = null;
    if (castTo($get_4(code_0.lines, 0), 39).address == -1) {
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
    count_for_alt_col = 0;
    for (lsti = 0; lsti < code_0.lines.array.length; ++lsti) {
      lstline = castTo($get_4(code_0.lines, lsti), 39);
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
          isAlt = false;
          if (count_for_alt_col % 2 == 1) {
            dbgline.flags |= 8;
            isAlt = true;
          }
          $setAltColor(s_instance.battleFrame.warCanvas, loadAddr, lstline.opcodesCount, isAlt);
          ++count_for_alt_col;
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
defineProperties($initDebugAreaLines, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$initDebugAreaLines'}});
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
  cmd = (checkCriticalStringBounds(start_0, end, code_0.length) , code_0.substr(start_0, end - start_0)).toLowerCase();
  s = 0;
  cmd.length == 2 && (checkCriticalStringElementIndex(0, cmd.length) , cmd.charCodeAt(0) == 100) && (s = (checkCriticalStringElementIndex(1, cmd.length) , cmd.charCodeAt(1)));
  cmd.length == 4 && (checkCriticalStringElementIndex(0, cmd.length) , cmd.charCodeAt(0) == 114) && (checkCriticalStringElementIndex(1, cmd.length) , cmd.charCodeAt(1) == 101) && (checkCriticalStringElementIndex(2, cmd.length) , cmd.charCodeAt(2) == 115) && (s = (checkCriticalStringElementIndex(3, cmd.length) , cmd.charCodeAt(3)));
  if (s == 98 || s == 119 || s == 100 || s == 113 || s == 116 || s == 111 || s == 121 || s == 122)
    return true;
  return false;
}

$isDefineCode.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$isDefineCode';
defineProperties($isDefineCode, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$isDefineCode'}});
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
defineProperties($j_renderIfDirty, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$j_renderIfDirty'}});
function $lambda$1_0(this$static){
  $updateTitle(this$static.m_playersPanel, this$static.editor_title.value);
  $wnd.js_save_state();
}

$lambda$1_0.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$lambda$1';
defineProperties($lambda$1_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$lambda$1'}});
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
defineProperties($linesAsInput, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$linesAsInput'}});
function $loadedNewBinary(this$static, incode, callback){
  var b, backToBin, dis, lastOp, len, lneq, neq, offset, sb, setbin, text_0, text0;
  if (this$static.m_isDebugMode)
    return;
  $removeCurrentBreakpoints(this$static);
  sb = new StringBuilder;
  dis = new Disassembler$ArrDisassembler(incode.bin, incode.bin.length);
  offset = 0;
  try {
    while (offset < incode.bin.length) {
      text0 = $nextOpcode_0(dis);
      backToBin = $nasmLine(text0);
      lastOp = copyOfRange(dis.bytes, dis.startOffset, dis.pointer);
      len = dis.pointer - dis.startOffset;
      if (len == 0) {
        console.error('Disassembler error: did not advance');
        return;
      }
      lneq = $bin_equal(backToBin, lastOp);
      lneq != 0 && (text0 = $asBytesText(lastOp));
      sb.string += '' + text0;
      sb.string += '\n';
      dis.startOffset = dis.pointer;
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
    $append_4(sb, ($clinit_Format() , hex_chars[(b & 255 & 240) >> 4] + ('' + hex_chars[b & 255 & 15])));
    sb.string += '\n';
  }
  text_0 = sb.string;
  incode.asmText = text_0;
  this$static.asm_edit_0.value = text_0;
  setbin = incode.bin;
  $setText_0(this$static, incode.asmText, callback);
  neq = $bin_equal(setbin, incode.bin);
  neq != 0 && (console.error('Disassembled code is different from original code at ' + ('' + neq)) , undefined);
  this$static.m_breakpoints = incode.breakpoints;
}

$loadedNewBinary.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$loadedNewBinary';
defineProperties($loadedNewBinary, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$loadedNewBinary'}});
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
defineProperties($makeLineNums, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$makeLineNums'}});
function $nasmLine(line){
  var buf, retcode;
  retcode = run_nasm('dline.asm', line, 'dline.lst');
  if (retcode != 0)
    return null;
  buf = read_file_bin_arr('dline');
  return buf;
}

$nasmLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$nasmLine';
defineProperties($nasmLine, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$nasmLine'}});
function $onEndRound(this$static){
  $updateDebugLine(this$static);
}

$onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$onEndRound';
defineProperties($onEndRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$onEndRound'}});
function $playerSelectionChanged(this$static, incode, callback){
  var b, b$iterator;
  $removeCurrentBreakpoints(this$static);
  !this$static.m_isDebugMode && !!this$static.m_shownCode && (this$static.m_shownCode.scrollTop_0 = Math.floor($wnd.asm_edit.scrollTop));
  this$static.m_shownCode = incode;
  if (!incode) {
    $setText_0(this$static, '', null);
    return;
  }
  this$static.asm_edit_0.value = incode.asmText;
  this$static.editor_title.value = incode.player.title_0;
  $setText_0(this$static, incode.asmText, callback);
  this$static.m_isDebugMode || asm_edit_setScrollTop(incode.scrollTop_0);
  this$static.m_breakpoints = incode.breakpoints;
  for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
    b = castTo($next_5(b$iterator), 31);
    $setLineNumBreakpoint(b.lineNum, true);
  }
  this$static.m_isDebugMode && $updateDebugLine(this$static);
}

$playerSelectionChanged.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$playerSelectionChanged';
defineProperties($playerSelectionChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$playerSelectionChanged'}});
function $removeCurrentBreakpoints(this$static){
  var b, b$iterator;
  if (this$static.m_breakpoints)
    for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
      b = castTo($next_5(b$iterator), 31);
      $setLineNumBreakpoint(b.lineNum, false);
    }
}

$removeCurrentBreakpoints.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$removeCurrentBreakpoints';
defineProperties($removeCurrentBreakpoints, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$removeCurrentBreakpoints'}});
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
defineProperties($renderLine, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$renderLine'}});
function $scrollToCodeInEditor(this$static){
  var ipInsideArena;
  ipInsideArena = getWarrirorIp($getCurrentWarrior(this$static));
  if (ipInsideArena == -1)
    return;
  scrollToAddr(ipInsideArena, true);
}

$scrollToCodeInEditor.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$scrollToCodeInEditor';
defineProperties($scrollToCodeInEditor, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$scrollToCodeInEditor'}});
function $setByte(this$static, address, value_0){
  var dbgline, page;
  dbgline = $getSingleByteLine(this$static, value_0);
  this$static.m_dbglines[address] = dbgline;
  page = address / this$static.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, address, dbgline);
}

$setByte.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$setByte';
defineProperties($setByte, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$setByte'}});
function $setDebugMode(this$static, v){
  if (v) {
    this$static.editor_bottom.style.display = 'none';
    this$static.asm_edit_0.style.display = 'none';
    this$static.editor_title.readOnly = true;
    $initDebugAreaLines(this$static);
    $scrollToCodeInEditor(this$static);
  }
   else {
    this$static.editor_bottom.style.display = '';
    this$static.asm_edit_0.style.display = '';
    this$static.editor_title.readOnly = false;
  }
  this$static.m_isDebugMode = v;
}

$setDebugMode.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$setDebugMode';
defineProperties($setDebugMode, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$setDebugMode'}});
function $setLineNumBreakpoint(lineNum, v){
  var e;
  e = ($clinit_DomGlobal() , document_0).getElementById('ln' + ('' + lineNum));
  v?e.classList.add('edit_breakpoint'):e.classList.remove('edit_breakpoint');
}

$setLineNumBreakpoint.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$setLineNumBreakpoint';
defineProperties($setLineNumBreakpoint, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$setLineNumBreakpoint'}});
function $setText_0(this$static, intext, playersPanel){
  var buf, df, lineNumDf, nasm_intext, ok, opcodesText, output, retcode, stdout, stdoutShorten, t;
  if (intext.length == 0) {
    this$static.asm_output.innerHTML = '';
    this$static.opcodes_edit.innerHTML = '';
    this$static.asm_show.innerHTML = '';
    this$static.asm_linenums.innerHTML = '1';
    !!playersPanel && $updateAsmResult(playersPanel, true, null, null);
    return;
  }
  intext = $replace(intext, 160, 32);
  nasm_intext = intext;
  retcode = run_nasm('player.asm', nasm_intext, 'player.lst');
  stdout = $wnd.g_outputText;
  lineNumDf = $makeLineNums(this$static, intext);
  this$static.asm_linenums.innerHTML = '';
  this$static.asm_linenums.appendChild(lineNumDf);
  df = null;
  if (stdout.length == 0) {
    this$static.asm_show.innerHTML = '';
    t = ($clinit_DomGlobal() , document_0).createTextNode(intext);
    this$static.asm_show.appendChild(t);
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
    this$static.m_currentListing.array.length = 0;
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
  buf = read_file_bin_arr('player');
  df = $checkDisasmLines(this$static, buf, this$static.m_currentListing, df, intext);
  !!playersPanel && $updateAsmResult(playersPanel, true, buf, this$static.m_currentListing);
}

$setText_0.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$setText';
defineProperties($setText_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$setText'}});
function $shouldBreak(this$static, state){
  var absAddr, arenaAddr;
  absAddr = linearAddress_0(state.m_cs, state.m_ip);
  arenaAddr = absAddr - $intern_18;
  if (!this$static.m_dbgBreakpoints[arenaAddr])
    return false;
  return true;
}

$shouldBreak.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$shouldBreak';
defineProperties($shouldBreak, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$shouldBreak'}});
function $toggleBreakpointDbg(this$static, addr){
  var br, codeObj, dbgline, e, exist_br$iterator, lsti, playeri, removed, war, warrior, wasAdded;
  br = null;
  wasAdded = false;
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
        castTo($next_5(exist_br$iterator), 31);
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
defineProperties($toggleBreakpointDbg, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$toggleBreakpointDbg'}});
function $toggleBreakpointEdit(this$static, atline){
  var atindex, b, b$iterator, e, found;
  atindex = atline - 1;
  if (atindex < 0 || atindex >= this$static.m_currentListing.array.length) {
    console.error('addBreakpointEdit invalid line ' + ('' + atline));
    return;
  }
  found = null;
  for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
    b = castTo($next_5(b$iterator), 31);
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
defineProperties($toggleBreakpointEdit, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$toggleBreakpointEdit'}});
function $updateBreakpoints(this$static, prevLineOffsets, prevLineCount, prevInText){
  var br, c, i, isLineWithText, it, keydown, lineNLIndex, lineStartIndex, selEnd, selStart;
  if (!this$static.m_breakpoints || this$static.m_breakpoints.array.length == 0)
    return;
  selStart = $wnd.saved_selectionStart;
  selEnd = $wnd.saved_selectionEnd;
  keydown = $wnd.saved_keydown;
  it = new AbstractList$ListIteratorImpl(this$static.m_breakpoints);
  while (it.i < it.this$01.size_1()) {
    br = (checkCriticalElement(it.i < it.this$01.size_1()) , castTo(it.this$01.get_0(it.last = it.i++), 31));
    lineStartIndex = 0;
    br.lineNum != 1 && (lineStartIndex = castTo($get_4(prevLineOffsets, br.lineNum - 1 - 1), 23).value_0 + 1);
    lineNLIndex = castTo($get_4(prevLineOffsets, br.lineNum - 1), 23).value_0;
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
defineProperties($updateBreakpoints, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$updateBreakpoints'}});
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
  if (ipInsideArena < 0 || ipInsideArena > $intern_18)
    return;
  if (!this$static.m_dbglines[ipInsideArena]) {
    opcodeAddr = ipInsideArena;
    while (!this$static.m_dbglines[opcodeAddr])
      --opcodeAddr;
    do {
      value_0 = $readByte(this$static.m_mem, opcodeAddr + $intern_18);
      $setByte(this$static, opcodeAddr, (value_0 & 255) << 24 >> 24);
      ++opcodeAddr;
    }
     while (!this$static.m_dbglines[opcodeAddr]);
    $disassembleAddr(this$static, ipInsideArena + $intern_18, ipInsideArena);
  }
   else {
    flags = this$static.m_dbglines[ipInsideArena].flags;
    ((flags & 1) != 0 || (flags & 2) != 0) && $disassembleAddr(this$static, ipInsideArena + $intern_18, ipInsideArena);
  }
  ider = 'd';
  (this$static.m_dbglines[ipInsideArena].flags & 4) != 0 && (ider = 'df');
  dline = castToNative(($clinit_DomGlobal() , document_0).getElementById(ider + ('' + ipInsideArena)), $wnd.HTMLElement);
  dline.classList.add(isAlive?'current_dbg':'current_dbg_dead');
  this$static.m_lastDbgElement = dline;
  this$static.m_lastDbgAddr = ipInsideArena;
  this$static.m_lastDbgAddrEnd = this$static.m_lastDbgAddr + 1;
  this$static.m_lastIsAlive = isAlive;
  this$static.m_lastDbgLine = this$static.m_dbglines[ipInsideArena];
  while (this$static.m_lastDbgAddrEnd < $intern_18 && !this$static.m_dbglines[this$static.m_lastDbgAddrEnd])
    ++this$static.m_lastDbgAddrEnd;
}

$updateDebugLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.$updateDebugLine';
defineProperties($updateDebugLine, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.$updateDebugLine'}});
function CodeEditor(competition){
  var i, pi;
  this.m_singleByte = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit, $intern_2, 34, 256, 0, 1);
  this.PAGE_SIZE_0 = $wnd.PAGE_SIZE;
  this.m_editBrClickHandler = new CodeEditor$1(this);
  this.m_dbgBrClickHandler = new CodeEditor$2(this);
  this.m_competition = competition;
  $addCompetitionEventListener(this.m_competition, this);
  $addMemoryEventLister(this.m_competition, this);
  this.asm_edit_0 = castToNative(($clinit_DomGlobal() , document_0).getElementById('asm_edit'), $wnd.HTMLTextAreaElement);
  this.asm_show = castToNative(document_0.getElementById('asm_show'), $wnd.HTMLElement);
  this.asm_output = castToNative(document_0.getElementById('asm_output'), $wnd.HTMLElement);
  this.editor_bottom = castToNative(document_0.getElementById('editor_bottom'), $wnd.HTMLElement);
  this.opcodes_edit = castToNative(document_0.getElementById('opcodes_edit'), $wnd.HTMLElement);
  this.asm_linenums = castToNative(document_0.getElementById('asm_linenums'), $wnd.HTMLElement);
  this.editor_title = castToNative(document_0.getElementById('editor_title'), $wnd.HTMLInputElement);
  this.asm_edit_0.addEventListener('input', new CodeEditor$lambda$0$Type(this));
  this.editor_title.addEventListener('input', new CodeEditor$lambda$1$Type(this));
  this.m_dbglines = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit, $intern_2, 34, $intern_18, 0, 1);
  this.m_pages = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$PageInfo_2_classLit, $intern_2, 77, ($intern_18 / this.PAGE_SIZE_0 | 0) + 1, 0, 1);
  for (i = 0; i < this.m_pages.length; ++i) {
    pi = new CodeEditor$PageInfo;
    this.m_pages[i] = pi;
    pi.isDirty = true;
    pi.startAddr = i * this.PAGE_SIZE_0;
    pi.endAddr = $wnd.Math.min((i + 1) * this.PAGE_SIZE_0, $intern_18);
  }
  $exportMethods_0(this);
}

CodeEditor.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.CodeEditor';
defineProperties(CodeEditor, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.CodeEditor'}});
function _PAGE_SIZE(){
  return $wnd.PAGE_SIZE;
}

_PAGE_SIZE.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor._PAGE_SIZE';
defineProperties(_PAGE_SIZE, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor._PAGE_SIZE'}});
function asm_edit_scrollTop(){
  return Math.floor($wnd.asm_edit.scrollTop);
}

asm_edit_scrollTop.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.asm_edit_scrollTop';
defineProperties(asm_edit_scrollTop, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.asm_edit_scrollTop'}});
function asm_edit_setScrollTop(v){
  $wnd.asm_edit.scrollTop = v;
  $wnd.handle_asm_edit_scroll();
}

asm_edit_setScrollTop.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.asm_edit_setScrollTop';
defineProperties(asm_edit_setScrollTop, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.asm_edit_setScrollTop'}});
function getWarrirorIp(w){
  var cs, ip, ipInsideArena, state;
  if (!w)
    return -1;
  state = w.m_state;
  ip = state.m_ip;
  cs = state.m_cs;
  ipInsideArena = linearAddress_0(cs, ip) - $intern_18;
  return ipInsideArena;
}

getWarrirorIp.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.getWarrirorIp';
defineProperties(getWarrirorIp, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.getWarrirorIp'}});
function get_stdout(){
  return $wnd.g_outputText;
}

get_stdout.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.get_stdout';
defineProperties(get_stdout, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.get_stdout'}});
function read_file(name_0){
  return $wnd.FS.readFile(name_0, {encoding:'utf8'});
}

read_file.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.read_file';
defineProperties(read_file, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.read_file'}});
function read_file_bin(name_0){
  return $wnd.FS.readFile(name_0, {encoding:'binary'});
}

read_file_bin.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.read_file_bin';
defineProperties(read_file_bin, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.read_file_bin'}});
function read_file_bin_arr(name_0){
  var arr, buf, i, len;
  arr = $wnd.FS.readFile(name_0, {encoding:'binary'});
  len = arr.length;
  len > 512 && (len = 512);
  buf = initUnidimensionalArray(B_classLit, $intern_12, 10, len, 15, 1);
  for (i = 0; i < len; ++i)
    buf[i] = arr[i] << 24 >> 24;
  return buf;
}

read_file_bin_arr.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.read_file_bin_arr';
defineProperties(read_file_bin_arr, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.read_file_bin_arr'}});
function run_nasm(asmname, text_0, lstname){
  $wnd.FS.writeFile(asmname, text_0, {encoding:'utf8'});
  $wnd.g_outputText = '';
  var ret_code = $wnd.run_nasm(asmname, lstname);
  return ret_code;
}

run_nasm.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.run_nasm';
defineProperties(run_nasm, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.run_nasm'}});
function save_state(){
  return $wnd.js_save_state();
}

save_state.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.save_state';
defineProperties(save_state, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.save_state'}});
function saved_keydown(){
  return $wnd.saved_keydown;
}

saved_keydown.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.saved_keydown';
defineProperties(saved_keydown, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.saved_keydown'}});
function saved_selectionEnd(){
  var v = $wnd.saved_selectionEnd;
  return v;
}

saved_selectionEnd.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.saved_selectionEnd';
defineProperties(saved_selectionEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.saved_selectionEnd'}});
function saved_selectionStart(){
  var v = $wnd.saved_selectionStart;
  return v;
}

saved_selectionStart.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.saved_selectionStart';
defineProperties(saved_selectionStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.saved_selectionStart'}});
function scrollToAddr(addr, defer_0){
  defer_0?($wnd.deferredEditorToAddress = addr):$wnd.scrollToAddr(addr);
}

scrollToAddr.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.scrollToAddr';
defineProperties(scrollToAddr, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.scrollToAddr'}});
defineClass(141, 1, $intern_20, CodeEditor);
_.asm_edit_changed = function asm_edit_changed(){
  $asm_edit_changed(this);
}
;
_.asm_edit_changed.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.asm_edit_changed';
defineProperties(_.asm_edit_changed, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.asm_edit_changed'}});
_.j_renderIfDirty_0 = function j_renderIfDirty(pagenum){
  $j_renderIfDirty(this, pagenum);
}
;
_.j_renderIfDirty_0.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.j_renderIfDirty';
defineProperties(_.j_renderIfDirty_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.j_renderIfDirty'}});
_.j_setScrollAt_0 = function j_setScrollAt(p1, p2){
  $j_renderIfDirty(this, p1);
  $j_renderIfDirty(this, p2);
  this.m_atScrollP1 = p1;
  this.m_atScrollP2 = p2;
}
;
_.j_setScrollAt_0.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.j_setScrollAt';
defineProperties(_.j_setScrollAt_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.j_setScrollAt'}});
_.onCompetitionEnd = function onCompetitionEnd(){
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onCompetitionEnd';
defineProperties(_.onCompetitionEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onCompetitionEnd'}});
_.onCompetitionStart = function onCompetitionStart(){
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onCompetitionStart';
defineProperties(_.onCompetitionStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onCompetitionStart'}});
_.onEndRound = function onEndRound(){
  $updateDebugLine(this);
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onEndRound';
defineProperties(_.onEndRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onEndRound'}});
_.onMemoryWrite = function onMemoryWrite(address, value_0, fullDebug){
  var absAddr, cIpInsideArea, existing, ipInsideArena, page;
  if (!fullDebug)
    return;
  if (this.m_memWriteState != 2)
    return;
  absAddr = address.m_linearAddress;
  if (absAddr < $intern_18 || absAddr >= 131072)
    return;
  ipInsideArena = absAddr - $intern_18;
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
      $setByte(this, ipInsideArena, $readByte(this.m_mem, ipInsideArena + $intern_18));
      ++ipInsideArena;
    }
     while (ipInsideArena < $intern_18 && !this.m_dbglines[ipInsideArena]);
  }
  if (cIpInsideArea >= this.m_lastDbgAddr && cIpInsideArea < this.m_lastDbgAddrEnd) {
    this.m_lastDbgAddr = -1;
    $updateDebugLine(this);
  }
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onMemoryWrite';
defineProperties(_.onMemoryWrite, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onMemoryWrite'}});
_.onNoneAlive = function onNoneAlive(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onNoneAlive';
defineProperties(_.onNoneAlive, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onNoneAlive'}});
_.onPaused = function onPaused(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onPaused';
defineProperties(_.onPaused, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onPaused'}});
_.onRound = function onRound(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onRound';
defineProperties(_.onRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onRound'}});
_.onWarEnd = function onWarEnd(reason, winners, inDebug){
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarEnd';
defineProperties(_.onWarEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onWarEnd'}});
_.onWarPreStartClear = function onWarPreStartClear(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarPreStartClear';
defineProperties(_.onWarPreStartClear, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onWarPreStartClear'}});
_.onWarStart = function onWarStart(){
  this.m_mem = this.m_competition.currentWar.m_core;
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarStart';
defineProperties(_.onWarStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onWarStart'}});
_.onWarriorBirth = function onWarriorBirth(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarriorBirth';
defineProperties(_.onWarriorBirth, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onWarriorBirth'}});
_.onWarriorDeath = function onWarriorDeath(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWarriorDeath';
defineProperties(_.onWarriorDeath, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onWarriorDeath'}});
_.onWriteState = function onWriteState(state){
  this.m_memWriteState = state;
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor.onWriteState';
defineProperties(_.onWriteState, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor.onWriteState'}});
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
_.m_lastDbgLine = null;
_.m_lastIsAlive = false;
_.m_lineCount = 0;
_.m_lineOffsets = null;
_.m_mem = null;
_.m_memWriteState = 0;
_.m_playersPanel = null;
_.m_prevInText = null;
_.m_shownCode = null;
var Lil_co_codeguru_corewars8086_gui_CodeEditor_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor', 141);
function CodeEditor$1(this$0){
  this.this$01 = this$0;
}

CodeEditor$1.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$1.CodeEditor$1';
defineProperties(CodeEditor$1, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$1.CodeEditor$1'}});
defineClass(142, 1, {}, CodeEditor$1);
_.handleEvent = function handleEvent_1(event_0){
  var e;
  e = castToNative(event_0.target, $wnd.Element);
  $toggleBreakpointEdit(this.this$01, __parseAndValidateInt(e.innerHTML, 10));
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$1.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$1.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_CodeEditor$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/1', 142);
function CodeEditor$2(this$0){
  this.this$01 = this$0;
}

CodeEditor$2.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$2.CodeEditor$2';
defineProperties(CodeEditor$2, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$2.CodeEditor$2'}});
defineClass(143, 1, {}, CodeEditor$2);
_.handleEvent = function handleEvent_2(event_0){
  var e;
  e = castToNative(event_0.target, $wnd.Element);
  $toggleBreakpointDbg(this.this$01, __parseAndValidateInt(e.innerHTML, 16));
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$2.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$2.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_CodeEditor$2_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/2', 143);
function $$init_7(this$static){
}

$$init_7.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$DbgLine.$$init';
defineProperties($$init_7, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$DbgLine.$$init'}});
function CodeEditor$DbgLine(){
}

CodeEditor$DbgLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$DbgLine.CodeEditor$DbgLine';
defineProperties(CodeEditor$DbgLine, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$DbgLine.CodeEditor$DbgLine'}});
defineClass(34, 1, {34:1}, CodeEditor$DbgLine);
_.flags = 0;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/DbgLine', 34);
function $$init_8(this$static){
}

$$init_8.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$LstLine.$$init';
defineProperties($$init_8, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$LstLine.$$init'}});
function CodeEditor$LstLine(){
}

CodeEditor$LstLine.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$LstLine.CodeEditor$LstLine';
defineProperties(CodeEditor$LstLine, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$LstLine.CodeEditor$LstLine'}});
defineClass(39, 1, {39:1}, CodeEditor$LstLine);
_.address = -1;
_.addressStr = '';
_.code_0 = '';
_.fullOpcode = '';
_.lineNum = -1;
_.opcode = '';
_.opcodesCount = 0;
_.tmp_br = null;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$LstLine_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/LstLine', 39);
function CodeEditor$PageInfo(){
}

CodeEditor$PageInfo.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$PageInfo.CodeEditor$PageInfo';
defineProperties(CodeEditor$PageInfo, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$PageInfo.CodeEditor$PageInfo'}});
defineClass(77, 1, {77:1}, CodeEditor$PageInfo);
_.endAddr = 0;
_.isDirty = false;
_.startAddr = 0;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$PageInfo_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/PageInfo', 77);
function CodeEditor$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

CodeEditor$lambda$0$Type.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$0$Type.CodeEditor$lambda$0$Type';
defineProperties(CodeEditor$lambda$0$Type, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$0$Type.CodeEditor$lambda$0$Type'}});
defineClass(144, 1, {}, CodeEditor$lambda$0$Type);
_.handleEvent = function handleEvent_3(arg0){
  $asm_edit_changed(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$0$Type.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$0$Type.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_CodeEditor$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/lambda$0$Type', 144);
function CodeEditor$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

CodeEditor$lambda$1$Type.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$1$Type.CodeEditor$lambda$1$Type';
defineProperties(CodeEditor$lambda$1$Type, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$1$Type.CodeEditor$lambda$1$Type'}});
defineClass(145, 1, {}, CodeEditor$lambda$1$Type);
_.handleEvent = function handleEvent_4(arg0){
  $lambda$1_0(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$1$Type.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.CodeEditor$lambda$1$Type.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_CodeEditor$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/lambda$1$Type', 145);
function $clinit_ColorHolder(){
  $clinit_ColorHolder = emptyMethod;
  ins = new ColorHolder;
}

$clinit_ColorHolder.displayName = 'il.co.codeguru.corewars8086.gui.ColorHolder.$clinit';
defineProperties($clinit_ColorHolder, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColorHolder.$clinit'}});
function $getColor(this$static, pos, darker, altColor){
  if (altColor) {
    if (darker)
      return this$static.altDarkColors[pos];
    return this$static.altColors[pos];
  }
  if (darker)
    return this$static.darkColors[pos];
  return this$static.colors[pos];
}

$getColor.displayName = 'il.co.codeguru.corewars8086.gui.ColorHolder.$getColor';
defineProperties($getColor, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColorHolder.$getColor'}});
function ColorHolder(){
  var i, i0, x_0;
  this.colors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit, $intern_2, 36, 360, 0, 1);
  x_0 = 0;
  for (i0 = 0; i0 < 360; i0++) {
    this.colors[i0] = ($clinit_Color() , HSBtoRGB(x_0 % 1));
    x_0 += 0.6180340051651001;
  }
  this.darkColors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit, $intern_2, 36, this.colors.length, 0, 1);
  this.altColors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit, $intern_2, 36, this.colors.length, 0, 1);
  this.altDarkColors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit, $intern_2, 36, this.colors.length, 0, 1);
  for (i = 0; i < this.colors.length; i++) {
    this.darkColors[i] = $darker(this.colors[i]);
    this.altColors[i] = $opposite(this.colors[i]);
    this.altDarkColors[i] = $darker(this.altColors[i]);
  }
}

ColorHolder.displayName = 'il.co.codeguru.corewars8086.gui.ColorHolder.ColorHolder';
defineProperties(ColorHolder, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColorHolder.ColorHolder'}});
defineClass(169, 1, {}, ColorHolder);
var ins;
var Lil_co_codeguru_corewars8086_gui_ColorHolder_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColorHolder', 169);
function $clinit_ColumnGraph(){
  $clinit_ColumnGraph = emptyMethod;
  BLACK = 'black';
  BACKGROUND = '#fdfdfd';
  BLACK_STROKE = '#000000';
}

$clinit_ColumnGraph.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$clinit';
defineProperties($clinit_ColumnGraph, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$clinit'}});
function $addToValue(this$static, pos, subIndex, value_0){
  var i, sb;
  this$static.columns[pos].values_0[0] += value_0;
  this$static.columns[pos].values_0[subIndex + 1] += value_0;
  if (this$static.columns[pos].values_0[0] > this$static.maxValue) {
    this$static.maxValue = this$static.columns[pos].values_0[0];
    this$static.maxValue * this$static.reduceFactorY > castToNative(this$static.m_element, $wnd.HTMLCanvasElement).height - 15 - 30 && (this$static.reduceFactorY *= 0.5);
    this$static.maxValue * this$static.reduceFactorX > castToNative(this$static.m_element, $wnd.HTMLCanvasElement).width - 40 && (this$static.reduceFactorX *= 0.5);
  }
  sb = new StringBuilder;
  for (i = 0; i < this$static.columns.length; ++i) {
    $append_1(sb, this$static.columns[i].values_0[0]);
    sb.string += '  ';
  }
  log_0('Score add ' + ('' + pos) + ' ' + ('' + subIndex) + ' ' + ('' + value_0) + '  totals= ' + sb.string);
  $paintGraphs(this$static, this$static.lastStyle);
  $updateTable(this$static, pos);
}

$addToValue.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$addToValue';
defineProperties($addToValue, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$addToValue'}});
function $clear_0(this$static, groups){
  var c1, c2, colorHolder, i;
  this$static.maxValue = 0;
  this$static.reduceFactorX = 10;
  this$static.reduceFactorY = 5;
  if (!groups)
    return;
  $wnd.clear_code_buttons_colors();
  colorHolder = ($clinit_ColorHolder() , $clinit_ColorHolder() , ins);
  this$static.columns = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_ColumnGraph$PlayerColumn_2_classLit, $intern_2, 29, groups.array.length, 0, 1);
  this$static.col_order = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_ColumnGraph$PlayerColumn_2_classLit, $intern_2, 29, groups.array.length, 0, 1);
  for (i = 0; i < groups.array.length; ++i) {
    c1 = $getColor(colorHolder, i, false, false);
    c2 = $getColor(colorHolder, i, true, false);
    this$static.columns[i] = new ColumnGraph$PlayerColumn((checkCriticalElementIndex(i, groups.array.length) , castTo(groups.array[i], 28)).title_0, c1.m_str, c2.m_str);
    $setButtonColor(c1.m_str, (checkCriticalElementIndex(i, groups.array.length) , castTo(groups.array[i], 28)).label_0 + '0');
    $setButtonColor(c2.m_str, (checkCriticalElementIndex(i, groups.array.length) , castTo(groups.array[i], 28)).label_0 + '1');
    this$static.col_order[i] = this$static.columns[i];
  }
  $remakeTable(this$static);
}

$clear_0.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$clear';
defineProperties($clear_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$clear'}});
function $fillRank(this$static){
  var col, col1, col2, col3, height1, height2, height3, i, v;
  height1 = -1;
  height2 = -1;
  height3 = -1;
  col1 = null;
  col2 = null;
  col3 = null;
  for (i = 0; i < this$static.columns.length; i++) {
    col = this$static.columns[i];
    col.rank = -1;
    v = col.values_0[0];
    if (v > height1) {
      col3 = col2;
      col2 = col1;
      col1 = col;
      height3 = height2;
      height2 = height1;
      height1 = v;
    }
     else if (v > height2) {
      col3 = col2;
      col2 = col;
      height3 = height2;
      height2 = v;
    }
     else if (v > height3) {
      col3 = col;
      height3 = v;
    }
  }
  !!col1 && (col1.rank = 1);
  !!col2 && (col2.rank = 2);
  !!col3 && (col3.rank = 3);
}

$fillRank.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$fillRank';
defineProperties($fillRank, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$fillRank'}});
function $getSortedCols(this$static){
  var addIdx, i, i0, maxBars, mid_order, sortType, trunc_col_order, use_arr;
  sortType = $wnd.g_graph_opt.sort;
  maxBars = $wnd.g_graph_opt.max_bars;
  if (sortType == 'Start' || sortType == 'Middle') {
    sort_0(this$static.col_order, new ColumnGraph$lambda$0$Type);
    if (maxBars > 0 && maxBars < this$static.col_order.length) {
      trunc_col_order = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_ColumnGraph$PlayerColumn_2_classLit, $intern_2, 29, maxBars, 0, 1);
      arraycopy(this$static.col_order, 0, trunc_col_order, 0, maxBars);
      use_arr = trunc_col_order;
    }
     else 
      use_arr = this$static.col_order;
    if (sortType == 'Middle') {
      mid_order = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_ColumnGraph$PlayerColumn_2_classLit, $intern_2, 29, use_arr.length, 0, 1);
      addIdx = 0;
      for (i0 = 1; i0 < use_arr.length; i0 += 2 , ++addIdx)
        mid_order[addIdx] = use_arr[i0];
      reverse(mid_order, addIdx);
      for (i = 0; i < use_arr.length; i += 2 , ++addIdx)
        mid_order[addIdx] = use_arr[i];
      return mid_order;
    }
    return use_arr;
  }
   else if (sortType == 'End') {
    sort_0(this$static.col_order, new ColumnGraph$lambda$1$Type);
    if (maxBars > 0 && maxBars < this$static.col_order.length) {
      trunc_col_order = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_ColumnGraph$PlayerColumn_2_classLit, $intern_2, 29, maxBars, 0, 1);
      arraycopy(this$static.col_order, this$static.col_order.length - maxBars, trunc_col_order, 0, maxBars);
      return trunc_col_order;
    }
     else 
      return this$static.col_order;
  }
   else 
    return this$static.columns;
}

$getSortedCols.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$getSortedCols';
defineProperties($getSortedCols, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$getSortedCols'}});
function $getTableText(this$static){
  var i, j, sb;
  sb = new StringBuilder;
  sb.string += 'Name, Total, 1, 2,\n';
  for (i = 0; i < this$static.columns.length; ++i) {
    $append_4(sb, this$static.columns[i].name_0);
    sb.string += ', ';
    for (j = 0; j < 3; ++j) {
      $append_4(sb, '' + this$static.columns[i].values_0[j]);
      sb.string += ', ';
    }
    sb.string += '\n';
  }
  return sb.string;
}

$getTableText.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$getTableText';
defineProperties($getTableText, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$getTableText'}});
function $js_clear_code_buttons_colors(){
  $wnd.clear_code_buttons_colors();
}

$js_clear_code_buttons_colors.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$js_clear_code_buttons_colors';
defineProperties($js_clear_code_buttons_colors, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$js_clear_code_buttons_colors'}});
function $paintGraphs(this$static, style){
  var bot_names, bottom_margin, col, col_half, col_top, columnHeight, columnWidth, height, height1, height2, i, name_font, numPlayers, px_col, px_col_mid, show_rank, startHeight, use_arr, width_0, width1, width2, y_0;
  this$static.lastStyle = style;
  if (this$static.columns == null)
    return;
  width_0 = castToNative(this$static.m_element, $wnd.HTMLCanvasElement).width;
  height = castToNative(this$static.m_element, $wnd.HTMLCanvasElement).height;
  this$static.ctx.fillStyle = BACKGROUND;
  this$static.ctx.fillRect(0, 0, width_0, height);
  this$static.ctx.font = '18px monospace,sans-serif';
  this$static.ctx.strokeStyle = BLACK_STROKE;
  this$static.ctx.lineWidth = 2;
  use_arr = $getSortedCols(this$static);
  name_font = '' + $wnd.g_graph_opt.bar_name_size + 'px monospace,sans-serif';
  show_rank = $wnd.g_graph_opt.rank_label;
  show_rank && $fillRank(this$static);
  if ($wnd.g_graph_opt.vertical) {
    bot_names = !$wnd.g_graph_opt.bar_names;
    bottom_margin = bot_names?30:0;
    numPlayers = use_arr.length;
    columnWidth = width_0 / numPlayers | 0;
    this$static.ctx.textBaseline = 'alphabetic';
    for (i = 0; i < numPlayers; i++) {
      col = use_arr[i];
      startHeight = height - bottom_margin;
      this$static.ctx.fillStyle = col.col1;
      height1 = round_int(this$static.reduceFactorY * col.values_0[1]);
      height2 = round_int(this$static.reduceFactorY * col.values_0[2]);
      px_col = i * columnWidth;
      px_col_mid = px_col + ((columnWidth - 5) / 2 | 0);
      col_top = startHeight - height1 - height2;
      this$static.ctx.fillRect(px_col, startHeight - height1, columnWidth - 5, height1);
      this$static.ctx.fillStyle = col.col2;
      this$static.ctx.fillRect(px_col, col_top, columnWidth - 5, height2);
      if (bot_names) {
        this$static.ctx.fillText('' + col.values_0[0], i * columnWidth + 5, startHeight - height1 - height2 - 5);
        this$static.ctx.fillStyle = use_arr[i].col2;
        this$static.ctx.fillText(use_arr[i].name_0, i * columnWidth + 5, height - bottom_margin + 17 - 2);
      }
       else {
        this$static.ctx.fillStyle = BLACK;
        this$static.ctx.textAlign = 'start';
        this$static.ctx.fillText(col.nameStart, px_col + 5, col_top - 5);
        this$static.ctx.save();
        this$static.ctx.translate(px_col_mid, col_top + 5);
        this$static.ctx.rotate(-1.5707963267948966);
        this$static.ctx.textAlign = 'right';
        this$static.ctx.textBaseline = 'middle';
        this$static.ctx.font = name_font;
        this$static.ctx.fillText(col.name_0, 0, 0);
        this$static.ctx.restore();
      }
      show_rank && col.rank != -1 && $paintRank(this$static, col.rank, px_col_mid, col_top - 45);
    }
  }
   else {
    numPlayers = use_arr.length;
    this$static.ctx.textBaseline = 'middle';
    columnHeight = height / numPlayers | 0;
    col_half = (columnHeight - 5) / 2 | 0;
    for (i = 0; i < numPlayers; i++) {
      col = use_arr[i];
      this$static.ctx.fillStyle = col.col1;
      width1 = this$static.reduceFactorX * col.values_0[1];
      width2 = this$static.reduceFactorX * col.values_0[2];
      y_0 = i * columnHeight;
      this$static.ctx.fillRect(0, y_0, width1, columnHeight - 5);
      this$static.ctx.fillStyle = col.col2;
      this$static.ctx.fillRect(width1, y_0, width2, columnHeight - 5);
      this$static.ctx.fillStyle = BLACK;
      this$static.ctx.textAlign = 'start';
      this$static.ctx.fillText(col.nameStart, width1 + width2 + 5, y_0 + col_half);
      this$static.ctx.save();
      this$static.ctx.textAlign = 'right';
      this$static.ctx.font = name_font;
      this$static.ctx.fillText(col.name_0, width1 + width2 - 5, y_0 + col_half);
      this$static.ctx.restore();
      show_rank && col.rank != -1 && $paintRank(this$static, col.rank, round_int(width1 + width2 + 65), y_0 + col_half);
    }
  }
}

$paintGraphs.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$paintGraphs';
defineProperties($paintGraphs, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$paintGraphs'}});
function $paintRank(this$static, r, x_0, y_0){
  this$static.ctx.save();
  this$static.ctx.textBaseline = 'middle';
  this$static.ctx.textAlign = 'center';
  this$static.ctx.font = '36px monospace,sans-serif';
  this$static.ctx.fillText('' + r, x_0, y_0 + 2);
  this$static.ctx.beginPath();
  this$static.ctx.arc(x_0, y_0, 20, 0, 6.283185307179586);
  this$static.ctx.stroke();
  this$static.ctx.restore();
}

$paintRank.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$paintRank';
defineProperties($paintRank, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$paintRank'}});
function $remakeTable(this$static){
  var e, i, j, line, name_0, tline, v;
  this$static.table_0.innerHTML = '';
  tline = addElem(this$static.table_0, 'div', 'res_table_line');
  tline.classList.add('res_table_title_line');
  v = addElem(tline, 'span', 'res_table_name');
  $clinit_Format();
  v.innerText = 'Name ';
  v.classList.add('res_table_title');
  v = addElem(tline, 'span', 'res_table_value');
  v.innerText = 'Total ';
  v.classList.add('res_table_title');
  v = addElem(tline, 'span', 'res_table_value');
  v.innerText = '1 ';
  v.classList.add('res_table_title');
  v = addElem(tline, 'span', 'res_table_value');
  v.innerText = '2 ';
  v.classList.add('res_table_title');
  for (i = 0; i < this$static.columns.length; ++i) {
    line = addElem(this$static.table_0, 'div', 'res_table_line');
    name_0 = addElem(line, 'span', 'res_table_name');
    name_0.style.color = this$static.columns[i].color2;
    setInnerText(name_0, this$static.columns[i].name_0 + ' ');
    for (j = 0; j < 3; ++j) {
      e = addElem(line, 'span', 'res_table_value');
      e.innerText = '0 ';
      setCheck(this$static.columns[i].valueElems, j, e);
    }
  }
}

$remakeTable.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$remakeTable';
defineProperties($remakeTable, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$remakeTable'}});
function $updateTable(this$static, pos){
  var i;
  for (i = 0; i < 3; ++i) {
    setInnerFloat(this$static.columns[pos].valueElems[i], this$static.columns[pos].values_0[i]);
  }
}

$updateTable.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.$updateTable';
defineProperties($updateTable, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.$updateTable'}});
function ColumnGraph(){
  $clinit_ColumnGraph();
  JComponent_0.call(this, 'graphs_canvas');
  this.table_0 = castToNative(($clinit_DomGlobal() , document_0).getElementById('results_table'), $wnd.HTMLElement);
  $clear_0(this, null);
  this.ctx = castToNative(castToNative(this.m_element, $wnd.HTMLCanvasElement).getContext('2d'), $wnd.CanvasRenderingContext2D);
}

ColumnGraph.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.ColumnGraph';
defineProperties(ColumnGraph, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.ColumnGraph'}});
function addElem(parent_0, type_0, cls){
  var e;
  e = castToNative(($clinit_DomGlobal() , document_0).createElement(type_0), $wnd.HTMLElement);
  e.classList.add(cls);
  parent_0.appendChild(e);
  return e;
}

addElem.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.addElem';
defineProperties(addElem, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.addElem'}});
function gopt_bar_name_size(){
  return $wnd.g_graph_opt.bar_name_size;
}

gopt_bar_name_size.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_bar_name_size';
defineProperties(gopt_bar_name_size, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_bar_name_size'}});
function gopt_bar_names(){
  return $wnd.g_graph_opt.bar_names;
}

gopt_bar_names.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_bar_names';
defineProperties(gopt_bar_names, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_bar_names'}});
function gopt_max_bars(){
  return $wnd.g_graph_opt.max_bars;
}

gopt_max_bars.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_max_bars';
defineProperties(gopt_max_bars, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_max_bars'}});
function gopt_rank_label(){
  return $wnd.g_graph_opt.rank_label;
}

gopt_rank_label.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_rank_label';
defineProperties(gopt_rank_label, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_rank_label'}});
function gopt_sort(){
  return $wnd.g_graph_opt.sort;
}

gopt_sort.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_sort';
defineProperties(gopt_sort, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_sort'}});
function gopt_vertial(){
  return $wnd.g_graph_opt.vertical;
}

gopt_vertial.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_vertial';
defineProperties(gopt_vertial, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.gopt_vertial'}});
function lambda$0(a_0, b_1){
  $clinit_ColumnGraph();
  return -compare_5(a_0.values_0[0], b_1.values_0[0]);
}

lambda$0.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.lambda$0';
defineProperties(lambda$0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.lambda$0'}});
function lambda$1(a_0, b_1){
  $clinit_ColumnGraph();
  return compare_5(a_0.values_0[0], b_1.values_0[0]);
}

lambda$1.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.lambda$1';
defineProperties(lambda$1, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.lambda$1'}});
function reverse(data_0, endIdx){
  var left, right, temp;
  for (left = 0 , right = endIdx - 1; left < right; ++left , right--) {
    temp = data_0[left];
    data_0[left] = data_0[right];
    data_0[right] = temp;
  }
}

reverse.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph.reverse';
defineProperties(reverse, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph.reverse'}});
defineClass(137, 44, {}, ColumnGraph);
_.maxValue = 0;
_.reduceFactorX = 0;
_.reduceFactorY = 0;
var BACKGROUND, BLACK, BLACK_STROKE;
var Lil_co_codeguru_corewars8086_gui_ColumnGraph_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColumnGraph', 137);
function $$init_9(this$static){
}

$$init_9.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph$PlayerColumn.$$init';
defineProperties($$init_9, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph$PlayerColumn.$$init'}});
function ColumnGraph$PlayerColumn(nm, c1, c2){
  this.name_0 = nm;
  this.nameStart = $substring_1(this.name_0, 0, 3);
  this.col1 = c1;
  this.col2 = c2;
  this.color2 = c2;
  this.values_0 = initUnidimensionalArray(F_classLit, $intern_12, 10, 3, 15, 1);
  this.valueElems = new Array(3);
}

ColumnGraph$PlayerColumn.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph$PlayerColumn.ColumnGraph$PlayerColumn';
defineProperties(ColumnGraph$PlayerColumn, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph$PlayerColumn.ColumnGraph$PlayerColumn'}});
defineClass(29, 1, {29:1}, ColumnGraph$PlayerColumn);
_.rank = -1;
var Lil_co_codeguru_corewars8086_gui_ColumnGraph$PlayerColumn_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColumnGraph/PlayerColumn', 29);
function ColumnGraph$lambda$0$Type(){
}

ColumnGraph$lambda$0$Type.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$0$Type.ColumnGraph$lambda$0$Type';
defineProperties(ColumnGraph$lambda$0$Type, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$0$Type.ColumnGraph$lambda$0$Type'}});
defineClass(138, 1, {}, ColumnGraph$lambda$0$Type);
_.compare = function compare_1(arg0, arg1){
  return lambda$0(castTo(arg0, 29), castTo(arg1, 29));
}
;
_.compare.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$0$Type.compare';
defineProperties(_.compare, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$0$Type.compare'}});
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.equals_0.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$0$Type.equals';
defineProperties(_.equals_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$0$Type.equals'}});
var Lil_co_codeguru_corewars8086_gui_ColumnGraph$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColumnGraph/lambda$0$Type', 138);
function ColumnGraph$lambda$1$Type(){
}

ColumnGraph$lambda$1$Type.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$1$Type.ColumnGraph$lambda$1$Type';
defineProperties(ColumnGraph$lambda$1$Type, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$1$Type.ColumnGraph$lambda$1$Type'}});
defineClass(139, 1, {}, ColumnGraph$lambda$1$Type);
_.compare = function compare_2(arg0, arg1){
  return lambda$1(castTo(arg0, 29), castTo(arg1, 29));
}
;
_.compare.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$1$Type.compare';
defineProperties(_.compare, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$1$Type.compare'}});
_.equals_0 = function equals_1(other){
  return this === other;
}
;
_.equals_0.displayName = 'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$1$Type.equals';
defineProperties(_.equals_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ColumnGraph$lambda$1$Type.equals'}});
var Lil_co_codeguru_corewars8086_gui_ColumnGraph$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColumnGraph/lambda$1$Type', 139);
function $$init_10(this$static){
  this$static.animCallback = new CompetitionWindow$1(this$static);
}

$$init_10.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$$init';
defineProperties($$init_10, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$$init'}});
function $callContinueRun(this$static){
  var needMore;
  needMore = $continueRun(this$static.competition);
  this$static.stepnum.innerHTML = !this$static.competition.compState?'[null]':'' + this$static.competition.compState.round_0;
  needMore && (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static.animCallback, null);
}

$callContinueRun.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$callContinueRun';
defineProperties($callContinueRun, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$callContinueRun'}});
function $errorPreventsStep(this$static, v){
  $setEnabled(this$static.battleFrame.btnPause, !v);
  $setEnabled(this$static.battleFrame.btnSingleRound, !v);
}

$errorPreventsStep.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$errorPreventsStep';
defineProperties($errorPreventsStep, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$errorPreventsStep'}});
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
  $wnd.j_getResultTableText = $entry(function(){
    return that.j_getResultTableText_0();
  }
  );
  $wnd.j_redrawGraphs = $entry(function(s){
    return that.j_redrawGraphs_0(s);
  }
  );
  $wnd.j_changed_no_max_round = $entry(function(a){
    that.j_changed_no_max_round_0(a);
  }
  );
}

$exportMethods_1.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$exportMethods';
defineProperties($exportMethods_1, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$exportMethods'}});
function $gui_runWar(this$static, isBattleShown, isStartPaused){
  this$static.m_isBattleShown = (checkCriticalNotNull(isBattleShown) , isBattleShown);
  this$static.m_isStartPaused = (checkCriticalNotNull(isStartPaused) , isStartPaused);
  if ($runWar(this$static, (checkCriticalNotNull(isBattleShown) , isBattleShown))) {
    (checkCriticalNotNull(isBattleShown) , isBattleShown) && $setDebugMode_0(this$static, true);
    this$static.stepnum.innerHTML = '0';
    return true;
  }
  return false;
}

$gui_runWar.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$gui_runWar';
defineProperties($gui_runWar, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$gui_runWar'}});
function $requestFrame(this$static){
  (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static.animCallback, null);
}

$requestFrame.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$requestFrame';
defineProperties($requestFrame, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$requestFrame'}});
function $runWar(this$static, isInDebug){
  var battlesPerGroup, e, inEditorWarrior, numOfGroups, repo, seedValue, war;
  battlesPerGroup = 0;
  try {
    castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value.startsWith('SEED#')?(seedValue = __parseAndValidateLong($substring_0(castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value, 5))):(seedValue = $hashCode_3(castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value));
    $setSeed(this$static.competition, seedValue);
    battlesPerGroup = 0;
    battlesPerGroup = __parseAndValidateInt($trim(castToNative(this$static.battlesPerGroupField.m_element, $wnd.HTMLInputElement).value), 10);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 14)) {
      console.log('Error in configuration');
    }
     else 
      throw toJs($e0);
  }
  if (battlesPerGroup <= 0) {
    $wnd.show_error('battles per session needs to be more than 0');
    return false;
  }
  repo = this$static.competition.warriorRepository;
  if (!$readWarriorFilesFromUI(repo, $getFiles(this$static.m_playersPanel, 112), $getFiles(this$static.m_playersPanel, 122), isInDebug))
    return false;
  this$static.inGraphs && $clear_0(this$static.columnGraph, repo.warriorGroups);
  numOfGroups = repo.warriorGroups.array.length;
  if (numOfGroups == 0) {
    $wnd.show_error("can't run without any warriors");
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
defineProperties($runWar, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$runWar'}});
function $setDebugMode_0(this$static, v){
  $setDebugMode(this$static.m_codeEditor, v);
  $setDebugMode_1(this$static.m_playersPanel, v);
  $wnd.set_cpu_visible(v);
  v || (this$static.battleFrame.warCanvas.m_indebug = false);
}

$setDebugMode_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$setDebugMode';
defineProperties($setDebugMode_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$setDebugMode'}});
function $showBattleRoom(this$static){
  this$static.battleFrame = new WarFrame(this$static.competition, this$static);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame.cpuframe);
  $addCompetitionEventListener(this$static.competition, this$static.battleFrame);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame.cpuframe.stackView);
  $addMemoryEventLister(this$static.competition, this$static.battleFrame.cpuframe.sharedMemView);
}

$showBattleRoom.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$showBattleRoom';
defineProperties($showBattleRoom, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$showBattleRoom'}});
function $srcSelectionChanged(this$static, label_0){
  var war, warrior;
  war = this$static.competition.currentWar;
  if (!war)
    return;
  warrior = $getWarriorByLabel(war, label_0);
  warrior?(war.m_uiWarriorIndex = warrior.m_myIndex):(war.m_uiWarriorIndex = -1);
}

$srcSelectionChanged.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.$srcSelectionChanged';
defineProperties($srcSelectionChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.$srcSelectionChanged'}});
function CompetitionWindow(){
  var warriorRepository;
  this.animCallback = new CompetitionWindow$1(this);
  s_instance = this;
  this.competition = new Competition;
  $addCompetitionEventListener(this.competition, this);
  warriorRepository = this.competition.warriorRepository;
  $add(warriorRepository.scoreEventsCaster, this);
  $doneAdding(warriorRepository.scoreEventsCaster);
  this.columnGraph = new ColumnGraph;
  $wnd.Math.min(4, this.competition.warriorRepository.warriorGroups.array.length);
  this.battlesPerGroupField = new JTextField('battlesPerGroupField', '100');
  this.seed = new JTextField('seed', null);
  $setText_1(this.seed, 'guru');
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
defineProperties(CompetitionWindow, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.CompetitionWindow'}});
function call_gwtStart(){
  $wnd.gwtStart();
}

call_gwtStart.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.call_gwtStart';
defineProperties(call_gwtStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.call_gwtStart'}});
function jsCompeteFinish(){
  $wnd.competeFinished();
}

jsCompeteFinish.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.jsCompeteFinish';
defineProperties(jsCompeteFinish, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.jsCompeteFinish'}});
function setBattlesRan(round_0){
  $wnd.battlesRan.innerHTML = round_0;
}

setBattlesRan.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.setBattlesRan';
defineProperties(setBattlesRan, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.setBattlesRan'}});
defineClass(117, 1, {13:1, 210:1}, CompetitionWindow);
_.j_changed_no_max_round_0 = function j_changed_no_max_round(v){
  this.competition.check_max_round = !v;
}
;
_.j_changed_no_max_round_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_changed_no_max_round';
defineProperties(_.j_changed_no_max_round_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_changed_no_max_round'}});
_.j_debugUiInited_0 = function j_debugUiInited(){
  this.competition.competitionEventListener.onEndRound();
  $resetChanged(this.battleFrame.cpuframe);
}
;
_.j_debugUiInited_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_debugUiInited';
defineProperties(_.j_debugUiInited_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_debugUiInited'}});
_.j_getResultTableText_0 = function j_getResultTableText(){
  return $getTableText(this.columnGraph);
}
;
_.j_getResultTableText_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_getResultTableText';
defineProperties(_.j_getResultTableText_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_getResultTableText'}});
_.j_redrawGraphs_0 = function j_redrawGraphs(style){
  $paintGraphs(this.columnGraph, style);
}
;
_.j_redrawGraphs_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_redrawGraphs';
defineProperties(_.j_redrawGraphs_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_redrawGraphs'}});
_.j_startCompete_0 = function j_startCompete(){
  this.inGraphs = true;
  if (!$checkPlayersReady(this.m_playersPanel))
    return false;
  if (!$gui_runWar(this, false, false))
    return false;
  return true;
}
;
_.j_startCompete_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_startCompete';
defineProperties(_.j_startCompete_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_startCompete'}});
_.j_startDebug_0 = function j_startDebug(){
  this.inGraphs = false;
  if (!$checkPlayersReady(this.m_playersPanel))
    return false;
  if (!$gui_runWar(this, true, true))
    return false;
  return true;
}
;
_.j_startDebug_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_startDebug';
defineProperties(_.j_startDebug_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_startDebug'}});
_.j_stopCompete_0 = function j_stopCompete(){
  $setAbort(this.competition);
}
;
_.j_stopCompete_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_stopCompete';
defineProperties(_.j_stopCompete_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_stopCompete'}});
_.j_stopDebug_0 = function j_stopDebug(){
  this.inGraphs = false;
  $setAbort(this.competition);
  $setDebugMode_0(this, false);
}
;
_.j_stopDebug_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_stopDebug';
defineProperties(_.j_stopDebug_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_stopDebug'}});
_.j_triggerZeroSpeed_0 = function j_triggerZeroSpeed(){
  this.competition.speed_0 = 0;
  $setValue_1(this.battleFrame.speedSlider);
}
;
_.j_triggerZeroSpeed_0.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_triggerZeroSpeed';
defineProperties(_.j_triggerZeroSpeed_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.j_triggerZeroSpeed'}});
_.onCompetitionEnd = function onCompetitionEnd_0(){
  $wnd.competeFinished();
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onCompetitionEnd';
defineProperties(_.onCompetitionEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onCompetitionEnd'}});
_.onCompetitionStart = function onCompetitionStart_0(){
  this.warCounter = 0;
  this.totalWars = $getTotalNumberOfWars(this.competition);
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onCompetitionStart';
defineProperties(_.onCompetitionStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onCompetitionStart'}});
_.onEndRound = function onEndRound_0(){
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onEndRound';
defineProperties(_.onEndRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onEndRound'}});
_.onNoneAlive = function onNoneAlive_0(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onNoneAlive';
defineProperties(_.onNoneAlive, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onNoneAlive'}});
_.onPaused = function onPaused_0(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onPaused';
defineProperties(_.onPaused, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onPaused'}});
_.onRound = function onRound_0(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onRound';
defineProperties(_.onRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onRound'}});
_.onWarEnd = function onWarEnd_0(reason, winners, inDebug){
  ++this.warCounter;
  $setText_1(this.seed, 'SEED#' + toString_5(this.competition.seed));
  setBattlesRan('' + this.warCounter + '/' + ('' + this.totalWars));
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarEnd';
defineProperties(_.onWarEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarEnd'}});
_.onWarPreStartClear = function onWarPreStartClear_0(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarPreStartClear';
defineProperties(_.onWarPreStartClear, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarPreStartClear'}});
_.onWarStart = function onWarStart_0(){
  $wnd.set_cpu_visible(true);
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarStart';
defineProperties(_.onWarStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarStart'}});
_.onWarriorBirth = function onWarriorBirth_0(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarriorBirth';
defineProperties(_.onWarriorBirth, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarriorBirth'}});
_.onWarriorDeath = function onWarriorDeath_0(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarriorDeath';
defineProperties(_.onWarriorDeath, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.onWarriorDeath'}});
_.scoreChanged = function scoreChanged(name_0, addedValue, groupIndex, subIndex){
  this.inGraphs && $addToValue(this.columnGraph, groupIndex, subIndex, addedValue);
}
;
_.scoreChanged.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow.scoreChanged';
defineProperties(_.scoreChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow.scoreChanged'}});
_.inGraphs = false;
_.m_isBattleShown = false;
_.m_isStartPaused = false;
_.totalWars = 0;
_.warCounter = 0;
var s_instance;
var Lil_co_codeguru_corewars8086_gui_CompetitionWindow_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CompetitionWindow', 117);
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
defineProperties($execute, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow$1.$execute'}});
function CompetitionWindow$1(this$0){
  this.this$01 = this$0;
}

CompetitionWindow$1.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow$1.CompetitionWindow$1';
defineProperties(CompetitionWindow$1, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow$1.CompetitionWindow$1'}});
defineClass(126, 1, {}, CompetitionWindow$1);
_.execute = function execute(timestamp){
  $execute(this);
}
;
_.execute.displayName = 'il.co.codeguru.corewars8086.gui.CompetitionWindow$1.execute';
defineProperties(_.execute, {'name':{'value':'il.co.codeguru.corewars8086.gui.CompetitionWindow$1.execute'}});
var Lil_co_codeguru_corewars8086_gui_CompetitionWindow$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CompetitionWindow/1', 126);
function $$init_11(this$static){
  this$static.m_watches = new HashMap;
  this$static.m_stateAccess = new CpuFrame$StateAccess;
  this$static.m_parser = new ExpressionParser;
}

$$init_11.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$$init';
defineProperties($$init_11, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$$init'}});
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
defineProperties($exportMethods_2, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$exportMethods'}});
function $flagChanged_callback(this$static, name_0, v){
  var currentWar, state;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return;
  state = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel).m_state;
  switch (name_0) {
    case 'OF':
      v?(state.m_flags = (state.m_flags | $intern_16) << 16 >> 16):(state.m_flags = (state.m_flags & -2049) << 16 >> 16);
      break;
    case 'DF':
      v?(state.m_flags = (state.m_flags | $intern_15) << 16 >> 16):(state.m_flags = (state.m_flags & -1025) << 16 >> 16);
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
defineProperties($flagChanged_callback, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$flagChanged_callback'}});
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
defineProperties($initMemRegions, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$initMemRegions'}});
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
defineProperties($onlySpaces, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$onlySpaces'}});
function $regChanged_callback(this$static, rindex, value_0){
  var currentWar, entry, entry$iterator, entry0, outerIter, state, sv, v;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return 1;
  state = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel).m_state;
  value_0 = $trim(value_0);
  value_0.length > 2 && (checkCriticalStringElementIndex(0, value_0.length) , value_0.charCodeAt(0) == 48) && (checkCriticalStringElementIndex(1, value_0.length) , value_0.charCodeAt(1) == 120) && (value_0 = (checkCriticalStringElementIndex(2, value_0.length + 1) , value_0.substr(2)));
  try {
    this$static.m_base == 10?(v = __parseAndValidateInt(value_0, 10)):(v = __parseAndValidateInt(value_0, 16));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 14)) {
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
  switch (rindex) {
    case 1:
      state.m_ax = sv;
      break;
    case 2:
      state.m_bx = sv;
      break;
    case 3:
      state.m_cx = sv;
      break;
    case 4:
      state.m_dx = sv;
      break;
    case 5:
      state.m_si = sv;
      break;
    case 6:
      state.m_di = sv;
      break;
    case 7:
      state.m_bp = sv;
      break;
    case 8:
      state.m_sp = sv;
      $moveToLine(this$static.stackView, linearAddress_0(state.m_ss, sv));
      break;
    case 13:
      state.m_ip = sv;
      $updateDebugLine(this$static.m_mainwnd.m_codeEditor);
      $onEndRound_0(this$static.m_mainwnd.battleFrame);
      break;
    case 9:
      state.m_cs = sv;
      $updateDebugLine(this$static.m_mainwnd.m_codeEditor);
      $onEndRound_0(this$static.m_mainwnd.battleFrame);
      break;
    case 10:
      state.m_ds = sv;
      break;
    case 11:
      state.m_ss = sv;
      $moveToLine(this$static.stackView, linearAddress_0(sv, state.m_sp));
      break;
    case 12:
      state.m_es = sv;
      break;
    case 14:
      state.m_energy = sv;
      break;
    case 15:
      state.m_flags = sv;
      $updateFlagBoxes(this$static, state);
  }
  this$static.m_stateAccess.state = state;
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 47));
    $evalAndDisplay(entry0);
  }
  $registerManullyChanged(this$static.m_mainwnd.battleFrame.warCanvas, rindex);
  return v;
}

$regChanged_callback.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$regChanged_callback';
defineProperties($regChanged_callback, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$regChanged_callback'}});
function $resetChanged(this$static){
  this$static.regAX.textField.classList.toggle('reg_input_changed', false);
  this$static.regBX.textField.classList.toggle('reg_input_changed', false);
  this$static.regCX.textField.classList.toggle('reg_input_changed', false);
  this$static.regDX.textField.classList.toggle('reg_input_changed', false);
  this$static.regSI.textField.classList.toggle('reg_input_changed', false);
  this$static.regDI.textField.classList.toggle('reg_input_changed', false);
  this$static.regBP.textField.classList.toggle('reg_input_changed', false);
  this$static.regSP.textField.classList.toggle('reg_input_changed', false);
  this$static.regIP.textField.classList.toggle('reg_input_changed', false);
  this$static.regCS.textField.classList.toggle('reg_input_changed', false);
  this$static.regDS.textField.classList.toggle('reg_input_changed', false);
  this$static.regSS.textField.classList.toggle('reg_input_changed', false);
  this$static.regES.textField.classList.toggle('reg_input_changed', false);
  this$static.regE.textField.classList.toggle('reg_input_changed', false);
  this$static.regF.textField.classList.toggle('reg_input_changed', false);
  $resetChanged_0(this$static.flagOF);
  $resetChanged_0(this$static.flagDF);
  $resetChanged_0(this$static.flagIF);
  $resetChanged_0(this$static.flagTF);
  $resetChanged_0(this$static.flagSF);
  $resetChanged_0(this$static.flagZF);
  $resetChanged_0(this$static.flagAF);
  $resetChanged_0(this$static.flagPF);
  $resetChanged_0(this$static.flagCF);
}

$resetChanged.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$resetChanged';
defineProperties($resetChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$resetChanged'}});
function $setSelectedPlayer(this$static, playerLabel, isDebugMode){
  this$static.m_currentWarriorLabel = playerLabel;
  this$static.m_currentWarriorIndex = -1;
  if (isDebugMode) {
    $initMemRegions(this$static, false);
    $updateFields(this$static);
    $resetChanged(this$static);
  }
}

$setSelectedPlayer.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$setSelectedPlayer';
defineProperties($setSelectedPlayer, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$setSelectedPlayer'}});
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
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 47));
    $evalAndDisplay(entry0);
  }
}

$updateFields.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$updateFields';
defineProperties($updateFields, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$updateFields'}});
function $updateFlagBoxes(this$static, state){
  $setValue(this$static.flagOF, (state.m_flags & $intern_16) == $intern_16);
  $setValue(this$static.flagDF, (state.m_flags & $intern_15) == $intern_15);
  $setValue(this$static.flagIF, (state.m_flags & 512) == 512);
  $setValue(this$static.flagTF, (state.m_flags & 256) == 256);
  $setValue(this$static.flagSF, (state.m_flags & 128) == 128);
  $setValue(this$static.flagZF, (state.m_flags & 64) == 64);
  $setValue(this$static.flagAF, (state.m_flags & 16) == 16);
  $setValue(this$static.flagPF, (state.m_flags & 4) == 4);
  $setValue(this$static.flagCF, (state.m_flags & 1) == 1);
}

$updateFlagBoxes.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.$updateFlagBoxes';
defineProperties($updateFlagBoxes, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.$updateFlagBoxes'}});
function CpuFrame(c, mainwnd){
  this.m_watches = new HashMap;
  this.m_stateAccess = new CpuFrame$StateAccess;
  this.m_parser = new ExpressionParser;
  $exportMethods_2(this);
  this.m_mainwnd = mainwnd;
  this.competition = c;
  this.regAX = new RegisterField('AX', 1, this);
  this.regBX = new RegisterField('BX', 2, this);
  this.regCX = new RegisterField('CX', 3, this);
  this.regDX = new RegisterField('DX', 4, this);
  this.regSI = new RegisterField('SI', 5, this);
  this.regDI = new RegisterField('DI', 6, this);
  this.regBP = new RegisterField('BP', 7, this);
  this.regSP = new RegisterField('SP', 8, this);
  this.regIP = new RegisterField('IP', 13, this);
  this.regCS = new RegisterField('CS', 9, this);
  this.regDS = new RegisterField('DS', 10, this);
  this.regSS = new RegisterField('SS', 11, this);
  this.regES = new RegisterField('ES', 12, this);
  this.regE = new RegisterField('Energy', 14, this);
  this.regF = new RegisterField('Flags', 15, this);
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
defineProperties(CpuFrame, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.CpuFrame'}});
function setVisible(v){
  $wnd.set_cpu_visible(v);
}

setVisible.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.setVisible';
defineProperties(setVisible, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.setVisible'}});
defineClass(160, 1, $intern_20, CpuFrame);
_.j_addWatch_0 = function j_addWatch(watchId){
  var entry;
  entry = new CpuFrame$WatchEntry;
  $put(this.m_watches, valueOf_0(watchId), entry);
  entry.resultElem = castToNative(($clinit_DomGlobal() , document_0).getElementById('watch' + ('' + watchId) + '_val'), $wnd.HTMLElement);
  debug('Watchs: ' + ('' + $size(this.m_watches)));
}
;
_.j_addWatch_0.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.j_addWatch';
defineProperties(_.j_addWatch_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.j_addWatch'}});
_.j_delWatch_0 = function j_delWatch(watchId){
  $remove(this.m_watches, valueOf_0(watchId));
}
;
_.j_delWatch_0.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.j_delWatch';
defineProperties(_.j_delWatch_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.j_delWatch'}});
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
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 47));
    entry0.base = base;
    $evalAndDisplay(entry0);
  }
}
;
_.j_setRegistersBase_0.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.j_setRegistersBase';
defineProperties(_.j_setRegistersBase_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.j_setRegistersBase'}});
_.j_watchTextChanged_0 = function j_watchTextChanged(s, watchId){
  var e, entry;
  entry = castTo($get_3(this.m_watches, valueOf_0(watchId)), 47);
  if ($onlySpaces(s)) {
    entry.isValid = false;
    setInnerText(entry.resultElem, '');
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
defineProperties(_.j_watchTextChanged_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.j_watchTextChanged'}});
_.onCompetitionEnd = function onCompetitionEnd_1(){
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onCompetitionEnd';
defineProperties(_.onCompetitionEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onCompetitionEnd'}});
_.onCompetitionStart = function onCompetitionStart_1(){
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onCompetitionStart';
defineProperties(_.onCompetitionStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onCompetitionStart'}});
_.onEndRound = function onEndRound_1(){
  $updateFields(this);
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onEndRound';
defineProperties(_.onEndRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onEndRound'}});
_.onMemoryWrite = function onMemoryWrite_0(address, value_0, fullDebug){
  var entry, entry$iterator, entry0, outerIter;
  if (!fullDebug)
    return;
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_1(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 47));
    $evalAndDisplay(entry0);
  }
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onMemoryWrite';
defineProperties(_.onMemoryWrite, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onMemoryWrite'}});
_.onNoneAlive = function onNoneAlive_1(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onNoneAlive';
defineProperties(_.onNoneAlive, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onNoneAlive'}});
_.onPaused = function onPaused_1(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onPaused';
defineProperties(_.onPaused, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onPaused'}});
_.onRound = function onRound_1(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onRound';
defineProperties(_.onRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onRound'}});
_.onWarEnd = function onWarEnd_1(reason, winners, inDebug){
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarEnd';
defineProperties(_.onWarEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onWarEnd'}});
_.onWarPreStartClear = function onWarPreStartClear_1(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarPreStartClear';
defineProperties(_.onWarPreStartClear, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onWarPreStartClear'}});
_.onWarStart = function onWarStart_1(){
  this.m_currentWarriorIndex = -1;
  $initMemRegions(this, true);
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarStart';
defineProperties(_.onWarStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onWarStart'}});
_.onWarriorBirth = function onWarriorBirth_1(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarriorBirth';
defineProperties(_.onWarriorBirth, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onWarriorBirth'}});
_.onWarriorDeath = function onWarriorDeath_1(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWarriorDeath';
defineProperties(_.onWarriorDeath, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onWarriorDeath'}});
_.onWriteState = function onWriteState_0(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame.onWriteState';
defineProperties(_.onWriteState, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame.onWriteState'}});
_.m_base = 16;
_.m_currentWarriorIndex = -1;
_.m_currentWarriorLabel = null;
var Lil_co_codeguru_corewars8086_gui_CpuFrame_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CpuFrame', 160);
function $getIdentifierValue(name_0){
  throw toJs(new Exception_1('unknown identifier ' + name_0));
}

$getIdentifierValue.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.$getIdentifierValue';
defineProperties($getIdentifierValue, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.$getIdentifierValue'}});
function $getMemory(this$static, addr, seg, size_0){
  var linaddr, sseg;
  sseg = seg << 16 >> 16;
  seg == -1 && (sseg = this$static.state.m_ds);
  linaddr = linearAddress_0(sseg, addr << 16 >> 16);
  return size_0 == 1?$readByte(this$static.memory, linaddr) & 255:$readWord(this$static.memory, new RealModeAddress(linaddr)) & $intern_0;
}

$getMemory.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.$getMemory';
defineProperties($getMemory, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.$getMemory'}});
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
defineProperties($getRegisterValue, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.$getRegisterValue'}});
function CpuFrame$StateAccess(){
}

CpuFrame$StateAccess.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.CpuFrame$StateAccess';
defineProperties(CpuFrame$StateAccess, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame$StateAccess.CpuFrame$StateAccess'}});
defineClass(161, 1, {}, CpuFrame$StateAccess);
var Lil_co_codeguru_corewars8086_gui_CpuFrame$StateAccess_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CpuFrame/StateAccess', 161);
function $$init_12(this$static){
}

$$init_12.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.$$init';
defineProperties($$init_12, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.$$init'}});
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
defineProperties($evalAndDisplay, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.$evalAndDisplay'}});
function $setResult(this$static, v){
  setInnerText(this$static.resultElem, v);
  this$static.resultElem.title = v;
}

$setResult.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.$setResult';
defineProperties($setResult, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.$setResult'}});
function CpuFrame$WatchEntry(){
}

CpuFrame$WatchEntry.displayName = 'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.CpuFrame$WatchEntry';
defineProperties(CpuFrame$WatchEntry, {'name':{'value':'il.co.codeguru.corewars8086.gui.CpuFrame$WatchEntry.CpuFrame$WatchEntry'}});
defineClass(47, 1, {47:1}, CpuFrame$WatchEntry);
_.base = 16;
_.isValid = false;
var Lil_co_codeguru_corewars8086_gui_CpuFrame$WatchEntry_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CpuFrame/WatchEntry', 47);
function $$init_13(this$static){
  this$static.stack_ = new Stack;
}

$$init_13.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$$init';
defineProperties($$init_13, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$$init'}});
function $eatSpaces(this$static){
  while ($getCharacter(this$static) == 32)
    ++this$static.index_;
}

$eatSpaces.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$eatSpaces';
defineProperties($eatSpaces, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$eatSpaces'}});
function $eval(this$static, expr){
  var e, result;
  this$static.index_ = 0;
  this$static.expr_ = expr;
  result = null;
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
defineProperties($eval, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$eval'}});
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
defineProperties($getBase, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$getBase'}});
function $getCharacter(this$static){
  if (this$static.index_ < this$static.expr_.length)
    return $charAt(this$static.expr_, this$static.index_);
  return 0;
}

$getCharacter.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$getCharacter';
defineProperties($getCharacter, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$getCharacter'}});
function $parseBin(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 1; this$static.index_++)
    value_0 = value_0 * 2 + h;
  return new ExpressionParser$NumNode(value_0);
}

$parseBin.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseBin';
defineProperties($parseBin, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseBin'}});
function $parseDecimal(this$static){
  var d, value_0;
  value_0 = 0;
  for (; (d = toInteger($getCharacter(this$static))) <= 9; this$static.index_++)
    value_0 = value_0 * 10 + d;
  return new ExpressionParser$NumNode(value_0);
}

$parseDecimal.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseDecimal';
defineProperties($parseDecimal, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseDecimal'}});
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
defineProperties($parseExpr, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseExpr'}});
function $parseHex(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 15; this$static.index_++)
    value_0 = value_0 * 16 + h;
  return new ExpressionParser$NumNode(value_0);
}

$parseHex.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseHex';
defineProperties($parseHex, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseHex'}});
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
defineProperties($parseIdentifier, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseIdentifier'}});
function $parseOct(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 7; this$static.index_++)
    value_0 = value_0 * 8 + h;
  return new ExpressionParser$NumNode(value_0);
}

$parseOct.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseOct';
defineProperties($parseOct, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseOct'}});
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
defineProperties($parseOp, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseOp'}});
function $parseValue(this$static){
  var base, c, sz, vaddr, val, vseg;
  val = null;
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
defineProperties($parseValue, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$parseValue'}});
function $unexpected(this$static){
  var msg;
  msg = new StringBuilder;
  msg.string += 'Syntax error: unexpected token "';
  $append_4(msg, $substring_1(this$static.expr_, this$static.index_, this$static.expr_.length));
  msg.string += '" at index ';
  $append_2(msg, this$static.index_);
  throw toJs(new Exception_1(msg.string));
}

$unexpected.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.$unexpected';
defineProperties($unexpected, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.$unexpected'}});
function ExpressionParser(){
  this.stack_ = new Stack;
  !m_registers && (m_registers = new HashSet_0(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['AX', 'AL', 'AH', 'BX', 'BL', 'BH', 'CX', 'CL', 'CH', 'DX', 'DH', 'DL', 'SI', 'DI', 'BP', 'SP', 'IP', 'CS', 'DS', 'SS', 'ES', 'ENERGY', 'FLAGS']))));
}

ExpressionParser.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser.ExpressionParser';
defineProperties(ExpressionParser, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.ExpressionParser'}});
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
defineProperties(pow_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.pow'}});
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
defineProperties(toInteger, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser.toInteger'}});
defineClass(162, 1, {}, ExpressionParser);
_.index_ = 0;
_.m_stateAccess = null;
var m_registers = null;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser', 162);
function $checkZero(v){
  if (v == 0) {
    throw toJs(new Exception_1('Division by zero'));
  }
  return v;
}

$checkZero.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$BinaryOpNode.$checkZero';
defineProperties($checkZero, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$BinaryOpNode.$checkZero'}});
function ExpressionParser$BinaryOpNode(l, r, _op){
  this.left = l;
  this.right = r;
  this.op = _op;
}

ExpressionParser$BinaryOpNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$BinaryOpNode.ExpressionParser$BinaryOpNode';
defineProperties(ExpressionParser$BinaryOpNode, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$BinaryOpNode.ExpressionParser$BinaryOpNode'}});
defineClass(163, 1, {}, ExpressionParser$BinaryOpNode);
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
defineProperties(_.eval_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$BinaryOpNode.eval'}});
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$BinaryOpNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/BinaryOpNode', 163);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

$compareTo.displayName = 'java.lang.Enum.$compareTo';
defineProperties($compareTo, {'name':{'value':'java.lang.Enum.$compareTo'}});
function $toString_1(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

$toString_1.displayName = 'java.lang.Enum.$toString';
defineProperties($toString_1, {'name':{'value':'java.lang.Enum.$toString'}});
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

Enum.displayName = 'java.lang.Enum.Enum';
defineProperties(Enum, {'name':{'value':'java.lang.Enum.Enum'}});
function createValueOfMap(enumConstants){
  var result, value_0, value$array, value$index, value$max;
  result = {};
  for (value$array = enumConstants , value$index = 0 , value$max = value$array.length; value$index < value$max; ++value$index) {
    value_0 = value$array[value$index];
    result[':' + (value_0.name_0 != null?value_0.name_0:'' + value_0.ordinal)] = value_0;
  }
  return result;
}

createValueOfMap.displayName = 'java.lang.Enum.createValueOfMap';
defineProperties(createValueOfMap, {'name':{'value':'java.lang.Enum.createValueOfMap'}});
function get0(map_0, name_0){
  return map_0[name_0];
}

get0.displayName = 'java.lang.Enum.get0';
defineProperties(get0, {'name':{'value':'java.lang.Enum.get0'}});
function put0(map_0, name_0, value_0){
  map_0[name_0] = value_0;
}

put0.displayName = 'java.lang.Enum.put0';
defineProperties(put0, {'name':{'value':'java.lang.Enum.put0'}});
function valueOf(map_0, name_0){
  var result;
  checkCriticalNotNull(name_0);
  result = map_0[':' + name_0];
  checkCriticalArgument_0(!!result, 'Enum constant undefined: ' + name_0);
  return result;
}

valueOf.displayName = 'java.lang.Enum.valueOf';
defineProperties(valueOf, {'name':{'value':'java.lang.Enum.valueOf'}});
defineClass(48, 1, {3:1, 33:1, 48:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 48));
}
;
_.compareTo.displayName = 'java.lang.Enum.compareTo';
defineProperties(_.compareTo, {'name':{'value':'java.lang.Enum.compareTo'}});
_.equals_0 = function equals_2(other){
  return this === other;
}
;
_.equals_0.displayName = 'java.lang.Enum.equals';
defineProperties(_.equals_0, {'name':{'value':'java.lang.Enum.equals'}});
_.hashCode_0 = function hashCode_1(){
  return getObjectIdentityHashCode(this);
}
;
_.hashCode_0.displayName = 'java.lang.Enum.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.lang.Enum.hashCode'}});
_.toString_0 = function toString_7(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.toString_0.displayName = 'java.lang.Enum.toString';
defineProperties(_.toString_0, {'name':{'value':'java.lang.Enum.toString'}});
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 48);
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
defineProperties($clinit_ExpressionParser$EOps, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$EOps.$clinit'}});
function ExpressionParser$EOps(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

ExpressionParser$EOps.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$EOps.ExpressionParser$EOps';
defineProperties(ExpressionParser$EOps, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$EOps.ExpressionParser$EOps'}});
function values(){
  $clinit_ExpressionParser$EOps();
  return stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_gui_ExpressionParser$EOps_2_classLit, 1), $intern_2, 19, 0, [OPERATOR_NULL, OPERATOR_BITWISE_OR, OPERATOR_BITWISE_XOR, OPERATOR_BITWISE_AND, OPERATOR_BITWISE_SHL, OPERATOR_BITWISE_SHR, OPERATOR_ADDITION, OPERATOR_SUBTRACTION, OPERATOR_MULTIPLICATION, OPERATOR_DIVISION, OPERATOR_MODULO, OPERATOR_POWER, OPERATOR_EXPONENT]);
}

values.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$EOps.values';
defineProperties(values, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$EOps.values'}});
defineClass(19, 48, {19:1, 3:1, 33:1, 48:1}, ExpressionParser$EOps);
var OPERATOR_ADDITION, OPERATOR_BITWISE_AND, OPERATOR_BITWISE_OR, OPERATOR_BITWISE_SHL, OPERATOR_BITWISE_SHR, OPERATOR_BITWISE_XOR, OPERATOR_DIVISION, OPERATOR_EXPONENT, OPERATOR_MODULO, OPERATOR_MULTIPLICATION, OPERATOR_NULL, OPERATOR_POWER, OPERATOR_SUBTRACTION;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$EOps_2_classLit = createForEnum('il.co.codeguru.corewars8086.gui', 'ExpressionParser/EOps', 19, values);
function ExpressionParser$IdentifierNode(_name){
  this.name_0 = _name;
}

ExpressionParser$IdentifierNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$IdentifierNode.ExpressionParser$IdentifierNode';
defineProperties(ExpressionParser$IdentifierNode, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$IdentifierNode.ExpressionParser$IdentifierNode'}});
defineClass(167, 1, {}, ExpressionParser$IdentifierNode);
_.eval_0 = function eval_1(){
  return $getIdentifierValue(this.name_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$IdentifierNode.eval';
defineProperties(_.eval_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$IdentifierNode.eval'}});
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$IdentifierNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/IdentifierNode', 167);
function ExpressionParser$MemAccessNode(_vseg, _vaddr, _sz, _state){
  this.vseg = _vseg;
  this.vaddr = _vaddr;
  this.sz = _sz;
  this.state = _state;
}

ExpressionParser$MemAccessNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$MemAccessNode.ExpressionParser$MemAccessNode';
defineProperties(ExpressionParser$MemAccessNode, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$MemAccessNode.ExpressionParser$MemAccessNode'}});
defineClass(168, 1, {}, ExpressionParser$MemAccessNode);
_.eval_0 = function eval_2(){
  var addr, seg;
  addr = this.vaddr.eval_0() & $intern_0;
  seg = -1;
  !!this.vseg && (seg = this.vseg.eval_0() & $intern_0);
  return $getMemory(this.state, addr, seg, this.sz);
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$MemAccessNode.eval';
defineProperties(_.eval_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$MemAccessNode.eval'}});
_.sz = 0;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$MemAccessNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/MemAccessNode', 168);
function ExpressionParser$NumNode(_v){
  this.v = _v;
}

ExpressionParser$NumNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$NumNode.ExpressionParser$NumNode';
defineProperties(ExpressionParser$NumNode, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$NumNode.ExpressionParser$NumNode'}});
defineClass(60, 1, {}, ExpressionParser$NumNode);
_.eval_0 = function eval_3(){
  return this.v;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$NumNode.eval';
defineProperties(_.eval_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$NumNode.eval'}});
_.v = 0;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$NumNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/NumNode', 60);
function ExpressionParser$Operator(opr, prec, assoc){
  this.op = opr;
  this.precedence = prec;
  this.associativity = assoc;
}

ExpressionParser$Operator.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$Operator.ExpressionParser$Operator';
defineProperties(ExpressionParser$Operator, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$Operator.ExpressionParser$Operator'}});
defineClass(20, 1, {}, ExpressionParser$Operator);
_.associativity = 0;
_.precedence = 0;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$Operator_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/Operator', 20);
function ExpressionParser$OperatorValue(opr, val){
  this.op = opr;
  this.value_0 = val;
}

ExpressionParser$OperatorValue.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$OperatorValue.ExpressionParser$OperatorValue';
defineProperties(ExpressionParser$OperatorValue, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$OperatorValue.ExpressionParser$OperatorValue'}});
defineClass(40, 1, {40:1}, ExpressionParser$OperatorValue);
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$OperatorValue_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/OperatorValue', 40);
function ExpressionParser$RegisterNode(_name, _state){
  this.name_0 = _name;
  this.state = _state;
}

ExpressionParser$RegisterNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$RegisterNode.ExpressionParser$RegisterNode';
defineProperties(ExpressionParser$RegisterNode, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$RegisterNode.ExpressionParser$RegisterNode'}});
defineClass(166, 1, {}, ExpressionParser$RegisterNode);
_.eval_0 = function eval_4(){
  return $getRegisterValue(this.state, this.name_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$RegisterNode.eval';
defineProperties(_.eval_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$RegisterNode.eval'}});
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$RegisterNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/RegisterNode', 166);
function ExpressionParser$UnaryNegNode(c){
  this.child = c;
}

ExpressionParser$UnaryNegNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNegNode.ExpressionParser$UnaryNegNode';
defineProperties(ExpressionParser$UnaryNegNode, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNegNode.ExpressionParser$UnaryNegNode'}});
defineClass(164, 1, {}, ExpressionParser$UnaryNegNode);
_.eval_0 = function eval_5(){
  return -(this.child.eval_0() & $intern_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNegNode.eval';
defineProperties(_.eval_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNegNode.eval'}});
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$UnaryNegNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/UnaryNegNode', 164);
function ExpressionParser$UnaryNotNode(c){
  this.child = c;
}

ExpressionParser$UnaryNotNode.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNotNode.ExpressionParser$UnaryNotNode';
defineProperties(ExpressionParser$UnaryNotNode, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNotNode.ExpressionParser$UnaryNotNode'}});
defineClass(165, 1, {}, ExpressionParser$UnaryNotNode);
_.eval_0 = function eval_6(){
  return ~(this.child.eval_0() & $intern_0) & $intern_0;
}
;
_.eval_0.displayName = 'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNotNode.eval';
defineProperties(_.eval_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.ExpressionParser$UnaryNotNode.eval'}});
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$UnaryNotNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/UnaryNotNode', 165);
function $lambda$0_0(this$static, name_1){
  $flagChanged_callback(this$static.m_frame, name_1, this$static.checkBox.checked);
}

$lambda$0_0.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields.$lambda$0';
defineProperties($lambda$0_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.FlagFields.$lambda$0'}});
function $resetChanged_0(this$static){
  this$static.bk1.classList.toggle('reg_flags_changed', false);
  this$static.bk2.classList.toggle('reg_flags_changed', false);
}

$resetChanged_0.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields.$resetChanged';
defineProperties($resetChanged_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.FlagFields.$resetChanged'}});
function $setValue(this$static, value_0){
  var changed;
  changed = this$static.checkBox.checked != value_0;
  this$static.bk1.classList.toggle('reg_flags_changed', changed);
  this$static.bk2.classList.toggle('reg_flags_changed', changed);
  this$static.checkBox.checked = value_0;
}

$setValue.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields.$setValue';
defineProperties($setValue, {'name':{'value':'il.co.codeguru.corewars8086.gui.FlagFields.$setValue'}});
function FlagFields(name_0, frame_0){
  var ename;
  this.m_frame = frame_0;
  ename = name_0 + '_fcheck';
  this.checkBox = castToNative(($clinit_DomGlobal() , document_0).getElementById(ename), $wnd.HTMLInputElement);
  this.bk1 = castToNative(document_0.getElementById(name_0 + '_bk1'), $wnd.HTMLElement);
  this.bk2 = castToNative(document_0.getElementById(name_0 + '_bk2'), $wnd.HTMLElement);
  (this.checkBox == null || this.bk1 == null || this.bk2 == null) && (console.error('Did not find flag ' + name_0) , undefined);
  this.checkBox.addEventListener('change', new FlagFields$lambda$0$Type(this, name_0));
}

FlagFields.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields.FlagFields';
defineProperties(FlagFields, {'name':{'value':'il.co.codeguru.corewars8086.gui.FlagFields.FlagFields'}});
defineClass(37, 44, {}, FlagFields);
var Lil_co_codeguru_corewars8086_gui_FlagFields_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'FlagFields', 37);
function FlagFields$lambda$0$Type($$outer_0, name_1){
  this.$$outer_0 = $$outer_0;
  this.name_1 = name_1;
}

FlagFields$lambda$0$Type.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields$lambda$0$Type.FlagFields$lambda$0$Type';
defineProperties(FlagFields$lambda$0$Type, {'name':{'value':'il.co.codeguru.corewars8086.gui.FlagFields$lambda$0$Type.FlagFields$lambda$0$Type'}});
defineClass(180, 1, {}, FlagFields$lambda$0$Type);
_.handleEvent = function handleEvent_5(arg0){
  $lambda$0_0(this.$$outer_0, this.name_1);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.FlagFields$lambda$0$Type.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.FlagFields$lambda$0$Type.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_FlagFields$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'FlagFields/lambda$0$Type', 180);
function $addCheck(this$static, startAddrStr, len, name_0){
  var a, a$iterator, r, startAddr;
  startAddr = -1;
  try {
    startAddr = __parseAndValidateInt(startAddrStr, 16);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 14)) {
      $wnd.show_error('Player ' + name_0 + ' fixed start address is not a valid hex number');
      return -2;
    }
     else 
      throw toJs($e0);
  }
  if (startAddr < 0 || startAddr > $intern_0) {
    $wnd.show_error('Player ' + name_0 + ' fixed start address is out of 16 bit number range');
    return -2;
  }
  if (startAddr > $intern_0 - len + 1) {
    $wnd.show_error('Player ' + name_0 + ' fixed start address does not leave enough space for code (' + ('' + len) + ' bytes)');
    return -2;
  }
  r = new LoadAddrChecker$AddrRange(name_0, startAddr, startAddr + len - 1);
  for (a$iterator = new ArrayList$1(this$static.fixedRanges); a$iterator.i < a$iterator.this$01.array.length;) {
    a = castTo($next_5(a$iterator), 62);
    if (a.start_0 <= r.end_0 && r.start_0 <= a.end_0) {
      err_box('Player ' + name_0 + ' fixed start address overlaps with that of player ' + a.name_0);
      return -2;
    }
  }
  $add_0(this$static.fixedRanges, r);
  return startAddr;
}

$addCheck.displayName = 'il.co.codeguru.corewars8086.gui.LoadAddrChecker.$addCheck';
defineProperties($addCheck, {'name':{'value':'il.co.codeguru.corewars8086.gui.LoadAddrChecker.$addCheck'}});
function $checkOverlap(this$static, startAddr, len){
  var a, a$iterator, r;
  r = new LoadAddrChecker$AddrRange(null, startAddr, startAddr + len - 1);
  for (a$iterator = new ArrayList$1(this$static.fixedRanges); a$iterator.i < a$iterator.this$01.array.length;) {
    a = castTo($next_5(a$iterator), 62);
    if (a.start_0 <= r.end_0 && r.start_0 <= a.end_0) {
      return false;
    }
  }
  return true;
}

$checkOverlap.displayName = 'il.co.codeguru.corewars8086.gui.LoadAddrChecker.$checkOverlap';
defineProperties($checkOverlap, {'name':{'value':'il.co.codeguru.corewars8086.gui.LoadAddrChecker.$checkOverlap'}});
function LoadAddrChecker(capacity){
  this.fixedRanges = new ArrayList_0(capacity);
}

LoadAddrChecker.displayName = 'il.co.codeguru.corewars8086.gui.LoadAddrChecker.LoadAddrChecker';
defineProperties(LoadAddrChecker, {'name':{'value':'il.co.codeguru.corewars8086.gui.LoadAddrChecker.LoadAddrChecker'}});
defineClass(188, 1, {}, LoadAddrChecker);
var Lil_co_codeguru_corewars8086_gui_LoadAddrChecker_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'LoadAddrChecker', 188);
function LoadAddrChecker$AddrRange(_name, _start, _end){
  this.name_0 = _name;
  this.start_0 = _start;
  this.end_0 = _end;
}

LoadAddrChecker$AddrRange.displayName = 'il.co.codeguru.corewars8086.gui.LoadAddrChecker$AddrRange.LoadAddrChecker$AddrRange';
defineProperties(LoadAddrChecker$AddrRange, {'name':{'value':'il.co.codeguru.corewars8086.gui.LoadAddrChecker$AddrRange.LoadAddrChecker$AddrRange'}});
defineClass(62, 1, {62:1}, LoadAddrChecker$AddrRange);
_.end_0 = 0;
_.start_0 = 0;
var Lil_co_codeguru_corewars8086_gui_LoadAddrChecker$AddrRange_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'LoadAddrChecker/AddrRange', 62);
function $$init_14(this$static){
  this$static.m_currentRegion = new RealModeMemoryRegion;
}

$$init_14.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.$$init';
defineProperties($$init_14, {'name':{'value':'il.co.codeguru.corewars8086.gui.MemRegionView.$$init'}});
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
    $append_4(sb, hex2((memory.m_data[addr % $intern_21] & 255) << 16 >> 16));
    sb.string += '\u202F';
    $append_4(sb, hex2((memory.m_data[(addr + 1) % $intern_21] & 255) << 16 >> 16));
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
defineProperties($initMemRegion, {'name':{'value':'il.co.codeguru.corewars8086.gui.MemRegionView.$initMemRegion'}});
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
defineProperties($moveToLine, {'name':{'value':'il.co.codeguru.corewars8086.gui.MemRegionView.$moveToLine'}});
function MemRegionView(id_0, innerPrefix){
  this.m_currentRegion = new RealModeMemoryRegion;
  this.m_htmlList = castToNative(($clinit_DomGlobal() , document_0).getElementById(id_0), $wnd.HTMLElement);
  this.m_innerPrefix = innerPrefix;
  this.m_step = 2;
}

MemRegionView.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.MemRegionView';
defineProperties(MemRegionView, {'name':{'value':'il.co.codeguru.corewars8086.gui.MemRegionView.MemRegionView'}});
defineClass(94, 1, {66:1}, MemRegionView);
_.onMemoryWrite = function onMemoryWrite_1(address, value_0, fullDebug){
  var addr, elem, lineaddr, newtext, offsetInLine, text_0;
  if (!fullDebug)
    return;
  addr = address.m_linearAddress;
  if (addr < this.m_currentRegion.m_start || addr > this.m_currentRegion.m_end)
    return;
  lineaddr = (addr / this.m_step | 0) * this.m_step;
  offsetInLine = addr % this.m_step;
  elem = castToNative(($clinit_DomGlobal() , document_0).getElementById(this.m_innerPrefix + ('' + lineaddr)), $wnd.HTMLElement);
  text_0 = ($clinit_Format() , elem.innerText);
  offsetInLine = 8 + offsetInLine * 3;
  newtext = (checkCriticalStringBounds(0, offsetInLine, text_0.length) , text_0.substr(0, offsetInLine) + hex2((value_0 & 255) << 16 >> 16) + (checkCriticalStringElementIndex(offsetInLine + 2, text_0.length + 1) , text_0.substr(offsetInLine + 2)));
  elem.innerText = newtext;
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.onMemoryWrite';
defineProperties(_.onMemoryWrite, {'name':{'value':'il.co.codeguru.corewars8086.gui.MemRegionView.onMemoryWrite'}});
_.onWriteState = function onWriteState_1(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.MemRegionView.onWriteState';
defineProperties(_.onWriteState, {'name':{'value':'il.co.codeguru.corewars8086.gui.MemRegionView.onWriteState'}});
_.m_lastMovedToElem = null;
_.m_lastMovedToLine = -1;
_.m_step = 0;
var Lil_co_codeguru_corewars8086_gui_MemRegionView_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'MemRegionView', 94);
function $$init_15(this$static){
  this$static.m_players = new ArrayList;
}

$$init_15.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$$init';
defineProperties($$init_15, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$$init'}});
function $addPlayerPanel(){
  $wnd.addPlayersPanel();
}

$addPlayerPanel.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$addPlayerPanel';
defineProperties($addPlayerPanel, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$addPlayerPanel'}});
function $addZombieCode(){
  $wnd.addZombieCode(true);
}

$addZombieCode.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$addZombieCode';
defineProperties($addZombieCode, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$addZombieCode'}});
function $changedWType(label_0, v){
  $wnd.changedWType(label_0, v, true);
}

$changedWType.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$changedWType';
defineProperties($changedWType, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$changedWType'}});
function $checkPlayersReady(this$static){
  var c, ci, countEnabled, i, p;
  if (this$static.m_players.array.length == 0) {
    $wnd.show_error('No players added');
    return false;
  }
  countEnabled = 0;
  for (i = 0; i < this$static.m_players.array.length; ++i) {
    p = castTo($get_4(this$static.m_players, i), 11);
    if (!p.isEnabled)
      continue;
    if ($charAt(p.label_0, 0) == 122 && !$wnd.player_check_zombies.checked)
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
        err_box('Errors in code ' + c.name_0 + ' of player ' + p.title_0);
        return false;
      }
      if (c.bin == null || c.bin.length == 0) {
        err_box('No code in ' + c.name_0 + ' of player ' + p.title_0);
        return false;
      }
    }
  }
  if (countEnabled == 0) {
    $wnd.show_error('No enabled players');
    return false;
  }
  return true;
}

$checkPlayersReady.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$checkPlayersReady';
defineProperties($checkPlayersReady, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$checkPlayersReady'}});
function $demo_like_original(this$static){
  $removeAll();
  $wnd.addPlayersPanel();
  $wnd.addPlayersPanel();
  $wnd.addPlayersPanel();
  $wnd.addPlayersPanel();
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 0), 11).code_0[0];
  $updateTitle(this$static, 'bimp');
  this$static.m_inEditor.asmText = 'PUSH DS\nPOP ES\nXCHG DI, AX\nADD WORD DI, 0xC\nMOV SI, DI\nADD WORD SI, 0xA\nSTD\nDEC DI\nDEC DI\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nINC DI\nINC DI\nJMP DI\n';
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 0), 11).code_0[1];
  this$static.m_inEditor.asmText = 'PUSH DS\nPOP ES\nXCHG DI, AX\nADD WORD DI, 0xC\nMOV SI, DI\nADD WORD SI, 0xA\nSTD\nDEC DI\nDEC DI\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nMOVSW\nINC DI\nINC DI\nJMP DI\n';
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor.player.wtype = ($clinit_PlayersPanel$EWarriorType() , TWO_DIFFERENT);
  $changedWType(this$static.m_inEditor.player.label_0, 'TWO_DIFFERENT');
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 1), 11).code_0[0];
  this$static.m_inEditor.asmText = ' PUSH DS\n POP ES\n MOV DI, AX\n MOV AX, 0xCCCC\nagain:\n STOSW\n ADD WORD DI, 0xB\n JMP again\n';
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 1), 11).code_0[1];
  this$static.m_inEditor.asmText = ' PUSH DS\n POP ES\n MOV DI, AX\n MOV AX, 0xCCCC\nagain:\n STOSW\n ADD WORD DI, 0xB\n JMP again\n';
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor.player.wtype = TWO_DIFFERENT;
  $updateTitle(this$static, 'shooterA');
  $changedWType(this$static.m_inEditor.player.label_0, 'TWO_DIFFERENT');
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 2), 11).code_0[0];
  this$static.m_inEditor.asmText = ' PUSH DS\n POP ES\n MOV DI, AX\n MOV AX, 0xCCCC\nagain:\n STOSW\n ADD WORD DI, 0xB\n JMP again\n';
  this$static.m_inEditor.player.wtype = SINGLE;
  $updateTitle(this$static, 'shooterB');
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  this$static.m_inEditor = castTo($get_4(this$static.m_players, 3), 11).code_0[0];
  this$static.m_inEditor.asmText = ' PUSH DS\n POP ES\n MOV DI, AX\n MOV AX, 0xCCCC\nagain:\n STOSW\n ADD WORD DI, 0xB\n JMP again\n';
  this$static.m_inEditor.player.wtype = SINGLE;
  $updateTitle(this$static, 'shooterC');
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
  $setSelectedCode(this$static, castTo($get_4(this$static.m_players, 0), 11).label_0);
  $wnd.player_check_zombies.checked = true;
}

$demo_like_original.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$demo_like_original';
defineProperties($demo_like_original, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$demo_like_original'}});
function $ensureSelectedPlayerActive(this$static){
  var i, p;
  if ($charAt(this$static.m_inEditor.player.label_0, 0) == 122) {
    if ($wnd.player_check_zombies.checked)
      return;
  }
   else {
    if (this$static.m_inEditor.player.isEnabled)
      return;
  }
  for (i = 0; i < this$static.m_players.array.length; ++i) {
    p = castTo($get_4(this$static.m_players, i), 11);
    if (!p.isEnabled)
      continue;
    $setSelectedCode(this$static, p.label_0);
    break;
  }
}

$ensureSelectedPlayerActive.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$ensureSelectedPlayerActive';
defineProperties($ensureSelectedPlayerActive, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$ensureSelectedPlayerActive'}});
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
  $wnd.j_savePlayers = $entry(function(){
    return that.j_savePlayers_0();
  }
  );
  $wnd.j_loadPlayers = $entry(function(a){
    return that.j_loadPlayers_0(a);
  }
  );
}

$exportMethods_3.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$exportMethods';
defineProperties($exportMethods_3, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$exportMethods'}});
function $findCode(this$static, label_0){
  var ci, pi;
  pi = $findPlayer(this$static, $substring_1(label_0, 0, label_0.length - 1));
  if (!pi)
    return null;
  ci = $charAt(label_0, label_0.length - 1) - 48;
  return pi.code_0[ci];
}

$findCode.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$findCode';
defineProperties($findCode, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$findCode'}});
function $findPlayer(this$static, label_0){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_5(p$iterator), 11);
    if ($equals_4(p.label_0, label_0))
      return p;
  }
  return null;
}

$findPlayer.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$findPlayer';
defineProperties($findPlayer, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$findPlayer'}});
function $getFiles(this$static, prefix){
  var c, count, i, p, p$iterator, p$iterator0;
  count = 0;
  for (p$iterator0 = new ArrayList$1(this$static.m_players); p$iterator0.i < p$iterator0.this$01.array.length;) {
    p = castTo($next_5(p$iterator0), 11);
    $charAt(p.label_0, 0) == prefix && (count += p.wtype == ($clinit_PlayersPanel$EWarriorType() , SINGLE)?1:2);
  }
  i = 0;
  c = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit, $intern_2, 45, count, 0, 1);
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_5(p$iterator), 11);
    if ($charAt(p.label_0, 0) != prefix)
      continue;
    c[i++] = p.code_0[0];
    p.wtype != ($clinit_PlayersPanel$EWarriorType() , SINGLE) && (c[i++] = p.code_0[1]);
  }
  return c;
}

$getFiles.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$getFiles';
defineProperties($getFiles, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$getFiles'}});
function $j_srcSelectionChanged(this$static, playerLabel, num){
  var p;
  p = $findPlayer(this$static, playerLabel);
  this$static.m_inEditor = null;
  this$static.m_inEditor = p.code_0[num - 1];
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, null);
  $setSelectedPlayer(this$static.m_mainWnd.battleFrame.cpuframe, this$static.m_inEditor.label_0, this$static.m_isDebugMode);
  $setCanvasSelectedPlayer(this$static.m_mainWnd.battleFrame.warCanvas, this$static.m_inEditor.label_0);
  $updateLoadAddr(this$static.m_inEditor.startAddress, this$static.m_inEditor.startAddrRandom);
  $srcSelectionChanged(this$static.m_mainWnd, this$static.m_inEditor.label_0);
}

$j_srcSelectionChanged.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$j_srcSelectionChanged';
defineProperties($j_srcSelectionChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$j_srcSelectionChanged'}});
function $loadCode(this$static, c){
  var c_asm;
  c_asm = c['asm'];
  this$static.m_inEditor.asmText = c_asm;
  this$static.m_inEditor.startAddrRandom = dictGetBool_0(c, 'addr_rand', true);
  this$static.m_inEditor.startAddrRandom || (this$static.m_inEditor.startAddress = c['addr']);
  $playerSelectionChanged(this$static.m_mainWnd.m_codeEditor, this$static.m_inEditor, this$static);
}

$loadCode.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$loadCode';
defineProperties($loadCode, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$loadCode'}});
function $playerCheckSetUI(label_0, v){
  $wnd.playerCheckSetUI(label_0, v);
}

$playerCheckSetUI.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$playerCheckSetUI';
defineProperties($playerCheckSetUI, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$playerCheckSetUI'}});
function $removeAll(){
  $wnd.removeAllPlayers();
  $wnd.removeAllZombies();
}

$removeAll.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$removeAll';
defineProperties($removeAll, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$removeAll'}});
function $saveCode(code_0){
  var c;
  c = {};
  c['asm'] = code_0.asmText;
  c['addr_rand'] = code_0.startAddrRandom;
  code_0.startAddrRandom || (c['addr'] = code_0.startAddress , undefined);
  return c;
}

$saveCode.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$saveCode';
defineProperties($saveCode, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$saveCode'}});
function $setButtonColor(color_0, label_0){
  var player_letter = label_0[1];
  var codenum = label_0[2];
  var id_0 = '';
  label_0[0] == 'p'?(id_0 = 'sel_code_lbl_w' + (parseInt(codenum) + 1) + '_p' + player_letter):label_0[0] == 'z' && (id_0 = 'player_name_lbl_z' + player_letter);
  var e = $wnd.document.getElementById(id_0);
  if (e === null) {
    console.error('did not find element', id_0, label_0);
    return;
  }
  e.style.boxShadow = 'inset ' + color_0 + ' 0px -1px 5px, inset ' + color_0 + ' 0px 1px 5px';
}

$setButtonColor.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$setButtonColor';
defineProperties($setButtonColor, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$setButtonColor'}});
function $setDebugMode_1(this$static, v){
  $ensureSelectedPlayerActive(this$static);
  this$static.m_isDebugMode = v;
}

$setDebugMode_1.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$setDebugMode';
defineProperties($setDebugMode_1, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$setDebugMode'}});
function $setPressedCodeBut(label_0, num){
  var idd = 'sel_code_w' + num + '_' + label_0;
  var btn = $wnd.document.getElementById(idd);
  if (btn === null)
    throw new Error('element not found ' + idd);
  btn.checked = true;
}

$setPressedCodeBut.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$setPressedCodeBut';
defineProperties($setPressedCodeBut, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$setPressedCodeBut'}});
function $setSelectedCode(this$static, label_0){
  $setPressedCodeBut(label_0, 1);
  $j_srcSelectionChanged(this$static, label_0, 1);
}

$setSelectedCode.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$setSelectedCode';
defineProperties($setSelectedCode, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$setSelectedCode'}});
function $updateAsmResult(this$static, compileOk, binbuffer, lines){
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.bin = binbuffer;
  this$static.m_inEditor.lastCompileOk = compileOk;
  this$static.m_inEditor.lines = lines;
}

$updateAsmResult.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateAsmResult';
defineProperties($updateAsmResult, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateAsmResult'}});
function $updateLoadAddr(value_0, isRand){
  $wnd.updateLoadAddr(value_0, isRand);
}

$updateLoadAddr.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateLoadAddr';
defineProperties($updateLoadAddr, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateLoadAddr'}});
function $updateText(this$static, text_0){
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.asmText = text_0;
}

$updateText.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateText';
defineProperties($updateText, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateText'}});
function $updateTitle(this$static, v){
  var pt;
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.player.title_0 = v;
  pt = this$static.m_inEditor.player.label_0;
  castToNative(($clinit_DomGlobal() , document_0).getElementById('player_name_lbl_' + pt), $wnd.HTMLElement).innerHTML = v;
}

$updateTitle.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateTitle';
defineProperties($updateTitle, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.$updateTitle'}});
function PlayersPanel(mainWnd){
  this.m_players = new ArrayList;
  this.m_mainWnd = mainWnd;
  $exportMethods_3(this);
}

PlayersPanel.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.PlayersPanel';
defineProperties(PlayersPanel, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.PlayersPanel'}});
function save_state_0(){
  return $wnd.js_save_state();
}

save_state_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.save_state';
defineProperties(save_state_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.save_state'}});
function setZombiesEnabled(v){
  $wnd.player_check_zombies.checked = v;
}

setZombiesEnabled.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.setZombiesEnabled';
defineProperties(setZombiesEnabled, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.setZombiesEnabled'}});
function zombiesEnabled(){
  return $wnd.player_check_zombies.checked;
}

zombiesEnabled.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.zombiesEnabled';
defineProperties(zombiesEnabled, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.zombiesEnabled'}});
defineClass(146, 1, {}, PlayersPanel);
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
  !this.m_inEditor && $setSelectedCode(this, castTo($get_4(this.m_players, 0), 11).label_0);
}
;
_.j_addPlayer_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_addPlayer';
defineProperties(_.j_addPlayer_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_addPlayer'}});
_.j_changedWType_0 = function j_changedWType(label_0, v){
  var p;
  p = $findPlayer(this, label_0);
  $setWType(p, ($clinit_PlayersPanel$EWarriorType() , castTo(valueOf(($clinit_PlayersPanel$EWarriorType$Map() , $MAP), v), 46)));
}
;
_.j_changedWType_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_changedWType';
defineProperties(_.j_changedWType_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_changedWType'}});
_.j_demoDebugPlayers_0 = function j_demoDebugPlayers(){
  $demo_like_original(this);
}
;
_.j_demoDebugPlayers_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_demoDebugPlayers';
defineProperties(_.j_demoDebugPlayers_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_demoDebugPlayers'}});
_.j_enablePlayer_0 = function j_enablePlayer(label_0, enable){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_5(p$iterator), 11);
    if ($equals_4(label_0, p.label_0)) {
      p.isEnabled = enable;
      return;
    }
  }
  throw toJs(new RuntimeException_1('player not found' + label_0));
}
;
_.j_enablePlayer_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_enablePlayer';
defineProperties(_.j_enablePlayer_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_enablePlayer'}});
_.j_getCurrentBin_0 = function j_getCurrentBin(){
  return this.m_inEditor.bin;
}
;
_.j_getCurrentBin_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_getCurrentBin';
defineProperties(_.j_getCurrentBin_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_getCurrentBin'}});
_.j_getCurrentName_0 = function j_getCurrentName(){
  return this.m_inEditor.name_0;
}
;
_.j_getCurrentName_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_getCurrentName';
defineProperties(_.j_getCurrentName_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_getCurrentName'}});
_.j_loadAddrChanged_0 = function j_loadAddrChanged(value_0, isRand){
  if (!this.m_inEditor)
    return;
  this.m_inEditor.startAddrRandom = isRand;
  this.m_inEditor.startAddress = value_0;
}
;
_.j_loadAddrChanged_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_loadAddrChanged';
defineProperties(_.j_loadAddrChanged_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_loadAddrChanged'}});
_.j_loadBinary_0 = function j_loadBinary(buf){
  var arr, ba, i, len;
  len = buf.byteLength;
  if (len == 0) {
    $wnd.show_error('loaded file is empty, ignoring');
    return;
  }
  if (len > 512) {
    $wnd.show_error('loaded file is bigger than the allowed 512 bytes, ignoring');
    return;
  }
  arr = new Int8Array(buf);
  ba = initUnidimensionalArray(B_classLit, $intern_12, 10, len, 15, 1);
  for (i = 0; i < len; ++i)
    ba[i] = arr[i];
  this.m_inEditor.bin = ba;
  this.m_inEditor.asmText = '';
  this.m_inEditor.lastCompileOk = true;
  this.m_inEditor.breakpoints.array.length = 0;
  $loadedNewBinary(this.m_mainWnd.m_codeEditor, this.m_inEditor, this);
}
;
_.j_loadBinary_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_loadBinary';
defineProperties(_.j_loadBinary_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_loadBinary'}});
_.j_loadPlayers_0 = function j_loadPlayers(state){
  var d, i, idx, isEnabled, label_0, len, parr, ptype, sel, title_0, wtype, wtype_int, z_en;
  parr = state['p'];
  $removeAll();
  len = parr.length;
  for (i = 0; i < len; ++i) {
    d = parr[i];
    ptype = d['ptype'];
    if (ptype == 'p') {
      wtype_int = d['wtype'];
      if (wtype_int == 0)
        wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
      else if (wtype_int == 2)
        wtype = ($clinit_PlayersPanel$EWarriorType() , TWO_DIFFERENT);
      else 
        throw toJs(new Exception_1('unexpected wtype'));
      title_0 = d['title'];
      isEnabled = d['isEnabled'];
      $wnd.addPlayersPanel();
      this.m_inEditor = castTo($get_4(this.m_players, i), 11).code_0[0];
      $loadCode(this, d['code0']);
      this.m_inEditor.player.isEnabled = isEnabled;
      if (wtype == ($clinit_PlayersPanel$EWarriorType() , TWO_DIFFERENT)) {
        this.m_inEditor = castTo($get_4(this.m_players, i), 11).code_0[1];
        $loadCode(this, d['code1']);
      }
      $changedWType(this.m_inEditor.player.label_0, wtype.name_0 != null?wtype.name_0:'' + wtype.ordinal);
      $updateTitle(this, title_0);
      $playerCheckSetUI(this.m_inEditor.player.label_0, isEnabled);
    }
     else if (ptype == 'z') {
      $wnd.addZombieCode(true);
      this.m_inEditor = castTo($get_4(this.m_players, i), 11).code_0[0];
      $loadCode(this, d['code0']);
    }
  }
  z_en = dictGetBool_0(state, 'z_enabled', true);
  $wnd.player_check_zombies.checked = z_en;
  if (len > 0) {
    sel = state['sel'];
    label_0 = sel['label'];
    idx = sel['idx'];
    $setPressedCodeBut(label_0, idx + 1);
    $j_srcSelectionChanged(this, label_0, idx + 1);
  }
}
;
_.j_loadPlayers_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_loadPlayers';
defineProperties(_.j_loadPlayers_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_loadPlayers'}});
_.j_removePlayer_0 = function j_removePlayer(label_0){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_5(p$iterator), 11);
    if ($equals_4(label_0, p.label_0)) {
      $remove_2(this.m_players, p);
      log_0('Removed ' + label_0 + ' ' + ('' + this.m_players.array.length));
      if (!!this.m_inEditor && this.m_inEditor.player == p) {
        if (this.m_players.array.length > 0) {
          $setSelectedCode(this, castTo($get_4(this.m_players, 0), 11).label_0);
        }
         else {
          this.m_inEditor = null;
          $playerSelectionChanged(this.m_mainWnd.m_codeEditor, null, null);
        }
      }
      return;
    }
  }
  throw toJs(new RuntimeException_1('player not found' + label_0));
}
;
_.j_removePlayer_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_removePlayer';
defineProperties(_.j_removePlayer_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_removePlayer'}});
_.j_savePlayers_0 = function j_savePlayers(){
  var d, p, p$iterator, parr, ptype, sel, state;
  state = {};
  parr = [];
  state['p'] = parr;
  for (p$iterator = new ArrayList$1(this.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_5(p$iterator), 11);
    d = {};
    parr.push(d);
    ptype = $substring_1(p.label_0, 0, 1);
    d['ptype'] = ptype;
    if (ptype == 'p') {
      d['title'] = p.title_0;
      d['isEnabled'] = p.isEnabled;
      d['wtype'] = p.wtype.ordinal;
      d['code0'] = $saveCode(p.code_0[0]);
      p.wtype == ($clinit_PlayersPanel$EWarriorType() , TWO_DIFFERENT) && (d['code1'] = $saveCode(p.code_0[1]) , undefined);
    }
     else 
      ptype == 'z' && (d['code0'] = $saveCode(p.code_0[0]) , undefined);
  }
  sel = {};
  if (this.m_inEditor) {
    sel['label'] = this.m_inEditor.player.label_0;
    sel['idx'] = this.m_inEditor.index_0;
  }
  state['sel'] = sel;
  state['z_enabled'] = $wnd.player_check_zombies.checked;
  return state;
}
;
_.j_savePlayers_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_savePlayers';
defineProperties(_.j_savePlayers_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_savePlayers'}});
_.j_srcSelectionChanged_0 = function j_srcSelectionChanged(playerLabel, num){
  $j_srcSelectionChanged(this, playerLabel, num);
}
;
_.j_srcSelectionChanged_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel.j_srcSelectionChanged';
defineProperties(_.j_srcSelectionChanged_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel.j_srcSelectionChanged'}});
_.m_inEditor = null;
_.m_isDebugMode = false;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel', 146);
function PlayersPanel$Breakpoint(_lineNum){
  this.lineNum = _lineNum;
}

PlayersPanel$Breakpoint.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$Breakpoint.PlayersPanel$Breakpoint';
defineProperties(PlayersPanel$Breakpoint, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$Breakpoint.PlayersPanel$Breakpoint'}});
defineClass(31, 1, {31:1}, PlayersPanel$Breakpoint);
_.lineNum = 0;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$Breakpoint_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel/Breakpoint', 31);
function $$init_16(this$static){
}

$$init_16.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$Code.$$init';
defineProperties($$init_16, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$Code.$$init'}});
function PlayersPanel$Code(p, idx){
  this.player = p;
  this.index_0 = idx;
  this.label_0 = p.label_0 + ('' + idx);
  this.breakpoints = new ArrayList;
}

PlayersPanel$Code.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$Code.PlayersPanel$Code';
defineProperties(PlayersPanel$Code, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$Code.PlayersPanel$Code'}});
defineClass(45, 1, {45:1}, PlayersPanel$Code);
_.asmText = '';
_.bin = null;
_.index_0 = 0;
_.lastCompileOk = true;
_.scrollTop_0 = 0;
_.startAddrRandom = true;
_.startAddress = 'A000';
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel/Code', 45);
function $clinit_PlayersPanel$EWarriorType(){
  $clinit_PlayersPanel$EWarriorType = emptyMethod;
  SINGLE = new PlayersPanel$EWarriorType('SINGLE', 0);
  TWO_IDENTICAL = new PlayersPanel$EWarriorType('TWO_IDENTICAL', 1);
  TWO_DIFFERENT = new PlayersPanel$EWarriorType('TWO_DIFFERENT', 2);
}

$clinit_PlayersPanel$EWarriorType.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType.$clinit';
defineProperties($clinit_PlayersPanel$EWarriorType, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType.$clinit'}});
function PlayersPanel$EWarriorType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

PlayersPanel$EWarriorType.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType.PlayersPanel$EWarriorType';
defineProperties(PlayersPanel$EWarriorType, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType.PlayersPanel$EWarriorType'}});
function values_0(){
  $clinit_PlayersPanel$EWarriorType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$EWarriorType_2_classLit, 1), $intern_2, 46, 0, [SINGLE, TWO_IDENTICAL, TWO_DIFFERENT]);
}

values_0.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType.values';
defineProperties(values_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType.values'}});
defineClass(46, 48, {46:1, 3:1, 33:1, 48:1}, PlayersPanel$EWarriorType);
var SINGLE, TWO_DIFFERENT, TWO_IDENTICAL;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$EWarriorType_2_classLit = createForEnum('il.co.codeguru.corewars8086.gui', 'PlayersPanel/EWarriorType', 46, values_0);
function $clinit_PlayersPanel$EWarriorType$Map(){
  $clinit_PlayersPanel$EWarriorType$Map = emptyMethod;
  $MAP = createValueOfMap(($clinit_PlayersPanel$EWarriorType() , stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$EWarriorType_2_classLit, 1), $intern_2, 46, 0, [SINGLE, TWO_IDENTICAL, TWO_DIFFERENT])));
}

$clinit_PlayersPanel$EWarriorType$Map.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType$Map.$clinit';
defineProperties($clinit_PlayersPanel$EWarriorType$Map, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$EWarriorType$Map.$clinit'}});
var $MAP;
function $$init_17(this$static){
  this$static.code_0 = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit, $intern_2, 45, 2, 0, 1);
  this$static.wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
}

$$init_17.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$PlayerInfo.$$init';
defineProperties($$init_17, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$PlayerInfo.$$init'}});
function $setWType(this$static, v){
  this$static.wtype = v;
}

$setWType.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$PlayerInfo.$setWType';
defineProperties($setWType, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$PlayerInfo.$setWType'}});
function PlayersPanel$PlayerInfo(lbl, ttl){
  this.code_0 = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit, $intern_2, 45, 2, 0, 1);
  this.wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
  this.label_0 = lbl;
  this.title_0 = ttl;
  this.code_0[0] = new PlayersPanel$Code(this, 0);
  this.code_0[1] = new PlayersPanel$Code(this, 1);
}

PlayersPanel$PlayerInfo.displayName = 'il.co.codeguru.corewars8086.gui.PlayersPanel$PlayerInfo.PlayersPanel$PlayerInfo';
defineProperties(PlayersPanel$PlayerInfo, {'name':{'value':'il.co.codeguru.corewars8086.gui.PlayersPanel$PlayerInfo.PlayersPanel$PlayerInfo'}});
defineClass(11, 1, {11:1}, PlayersPanel$PlayerInfo);
_.isEnabled = true;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$PlayerInfo_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel/PlayerInfo', 11);
function $$init_18(this$static){
}

$$init_18.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField.$$init';
defineProperties($$init_18, {'name':{'value':'il.co.codeguru.corewars8086.gui.RegisterField.$$init'}});
function $editChanged(this$static){
  var setok;
  setok = $regChanged_callback(this$static.m_frame, this$static.m_rindex, this$static.textField.value);
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
defineProperties($editChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.RegisterField.$editChanged'}});
function $setBase(this$static, base){
  this$static.m_base = base;
  this$static.m_lastInputOk?this$static.m_base == 16?(this$static.textField.value = hex4(this$static.m_lastValue & $intern_0)):(this$static.textField.value = '' + (this$static.m_lastValue & $intern_0)):$editChanged(this$static);
}

$setBase.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField.$setBase';
defineProperties($setBase, {'name':{'value':'il.co.codeguru.corewars8086.gui.RegisterField.$setBase'}});
function $setValue_0(this$static, value_0){
  var changed;
  changed = this$static.m_lastValue != value_0;
  this$static.m_lastValue = value_0;
  this$static.m_base == 16?(this$static.textField.value = hex4(value_0 & $intern_0)):(this$static.textField.value = '' + (value_0 & $intern_0));
  this$static.textField.classList.toggle('reg_input_changed', changed);
}

$setValue_0.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField.$setValue';
defineProperties($setValue_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.RegisterField.$setValue'}});
function RegisterField(name_0, rindex, frame_0){
  var ename;
  this.m_frame = frame_0;
  this.m_rindex = rindex;
  ename = 'reg_' + name_0;
  this.textField = castToNative(($clinit_DomGlobal() , document_0).getElementById(ename), $wnd.HTMLInputElement);
  this.textField == null && (console.error('Not found register ' + name_0) , undefined);
  this.textField.addEventListener('input', new RegisterField$lambda$0$Type(this));
}

RegisterField.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField.RegisterField';
defineProperties(RegisterField, {'name':{'value':'il.co.codeguru.corewars8086.gui.RegisterField.RegisterField'}});
defineClass(21, 1, {}, RegisterField);
_.m_base = 16;
_.m_lastInputOk = true;
_.m_lastValue = 0;
_.m_rindex = 0;
var Lil_co_codeguru_corewars8086_gui_RegisterField_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'RegisterField', 21);
function RegisterField$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

RegisterField$lambda$0$Type.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField$lambda$0$Type.RegisterField$lambda$0$Type';
defineProperties(RegisterField$lambda$0$Type, {'name':{'value':'il.co.codeguru.corewars8086.gui.RegisterField$lambda$0$Type.RegisterField$lambda$0$Type'}});
defineClass(179, 1, {}, RegisterField$lambda$0$Type);
_.handleEvent = function handleEvent_6(arg0){
  $editChanged(this.$$outer_0);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.RegisterField$lambda$0$Type.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.RegisterField$lambda$0$Type.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_RegisterField$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'RegisterField/lambda$0$Type', 179);
function $addMessage(this$static, round_0, message){
  $append(this$static.messagesArea, '[' + round_0 + '] ' + message + '\n');
  $scrollToBottom(this$static.messagesArea);
}

$addMessage.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.$addMessage';
defineProperties($addMessage, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.$addMessage'}});
function $onEndRound_0(this$static){
  var cs, currentWar, i, ip, ipInsideArena, state, warrior;
  if (!this$static.mainWnd.m_isBattleShown)
    return;
  $deletePointers(this$static.warCanvas);
  currentWar = this$static.competition.currentWar;
  for (i = 0; i < currentWar.m_numWarriors; i++) {
    if (currentWar.m_warriors[i].m_isAlive) {
      warrior = currentWar.m_warriors[i];
      state = warrior.m_state;
      ip = state.m_ip;
      cs = state.m_cs;
      ipInsideArena = linearAddress_0(cs, ip) - $intern_18;
      $paintPointer(this$static.warCanvas, ipInsideArena & $intern_0, i << 24 >> 24);
    }
  }
  if (this$static.warCanvas.m_show_reg_ptrs) {
    $paint(this$static.warCanvas);
    return;
  }
}

$onEndRound_0.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.$onEndRound';
defineProperties($onEndRound_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.$onEndRound'}});
function WarFrame(competition, mainWnd){
  var speedSliderVal;
  this.competition = competition;
  this.mainWnd = mainWnd;
  this.warCanvas = new Canvas_0;
  this.messagesArea = new JTextArea;
  speedSliderVal = castToNative(($clinit_DomGlobal() , document_0).getElementById('speedSliderVal'), $wnd.HTMLElement);
  this.speedSlider = new JSlider;
  $addActionListener(this.speedSlider, new WarFrame$1(this, speedSliderVal));
  this.nRoundNumber = 0;
  this.cpuframe = new CpuFrame(competition, this.mainWnd);
  $addCompetitionEventListener(competition, this.cpuframe);
  $add(competition.competitionEventCaster, this);
  this.btnPause = new JButton('btnPause');
  $setEnabled(this.btnPause, false);
  $addActionListener(this.btnPause, new WarFrame$2(this, competition, mainWnd));
  this.btnSingleRound = new JButton('btnSingleRound');
  $setEnabled(this.btnSingleRound, false);
  $addActionListener(this.btnSingleRound, new WarFrame$3(competition, mainWnd));
}

WarFrame.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.WarFrame';
defineProperties(WarFrame, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.WarFrame'}});
defineClass(156, 1, $intern_20, WarFrame);
_.onCompetitionEnd = function onCompetitionEnd_2(){
  $setEnabled(this.btnPause, false);
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onCompetitionEnd';
defineProperties(_.onCompetitionEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onCompetitionEnd'}});
_.onCompetitionStart = function onCompetitionStart_2(){
  $setEnabled(this.btnPause, true);
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onCompetitionStart';
defineProperties(_.onCompetitionStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onCompetitionStart'}});
_.onEndRound = function onEndRound_2(){
  $onEndRound_0(this);
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onEndRound';
defineProperties(_.onEndRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onEndRound'}});
_.onMemoryWrite = function onMemoryWrite_2(address, value_0, fullDebug){
  var ipInsideArena;
  if (!this.mainWnd.m_isBattleShown)
    return;
  ipInsideArena = address.m_linearAddress - $intern_18;
  address.m_linearAddress >= $intern_18 && address.m_linearAddress < 131072 && $paintPixel(this.warCanvas, ipInsideArena & $intern_0, $getCurrentWarrior_0(this.competition) << 24 >> 24, value_0);
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onMemoryWrite';
defineProperties(_.onMemoryWrite, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onMemoryWrite'}});
_.onNoneAlive = function onNoneAlive_2(){
  $addMessage(this, this.nRoundNumber, 'No players left alive');
  $setEnabled(this.btnSingleRound, false);
  $setEnabled(this.btnPause, false);
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onNoneAlive';
defineProperties(_.onNoneAlive, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onNoneAlive'}});
_.onPaused = function onPaused_2(){
  $setText(this.btnPause, 'Resume');
  $setEnabled(this.btnSingleRound, true);
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onPaused';
defineProperties(_.onPaused, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onPaused'}});
_.onRound = function onRound_2(round_0){
  if (!this.mainWnd.m_isBattleShown)
    return;
  this.nRoundNumber = round_0;
  $setEnabled(this.btnPause, true);
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onRound';
defineProperties(_.onRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onRound'}});
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
defineProperties(_.onWarEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onWarEnd'}});
_.onWarPreStartClear = function onWarPreStartClear_2(){
  $clear(this.warCanvas);
  $initStartWar(this.warCanvas, this.competition.currentWar);
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWarPreStartClear';
defineProperties(_.onWarPreStartClear, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onWarPreStartClear'}});
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
defineProperties(_.onWarStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onWarStart'}});
_.onWarriorBirth = function onWarriorBirth_2(w){
  $addMessage(this, this.nRoundNumber, w.m_name + ' enters the arena at ' + hex4(w.m_loadAddress.m_offset & $intern_0));
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWarriorBirth';
defineProperties(_.onWarriorBirth, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onWarriorBirth'}});
_.onWarriorDeath = function onWarriorDeath_2(warrior, reason){
  var warriorName;
  warriorName = warrior.m_name;
  $addMessage(this, this.nRoundNumber, warriorName + ' died due to ' + reason + '.');
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWarriorDeath';
defineProperties(_.onWarriorDeath, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onWarriorDeath'}});
_.onWriteState = function onWriteState_2(state){
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame.onWriteState';
defineProperties(_.onWriteState, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame.onWriteState'}});
_.nRoundNumber = 0;
var Lil_co_codeguru_corewars8086_gui_WarFrame_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame', 156);
function WarFrame$1(this$0, val$speedSliderVal){
  this.this$01 = this$0;
  this.val$speedSliderVal2 = val$speedSliderVal;
}

WarFrame$1.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$1.WarFrame$1';
defineProperties(WarFrame$1, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame$1.WarFrame$1'}});
defineClass(157, 1, {}, WarFrame$1);
_.actionPerformed = function actionPerformed(e){
  var s;
  s = __parseAndValidateInt(castToNative(this.this$01.speedSlider.m_element, $wnd.HTMLInputElement).value, 10);
  if (s == 400) {
    this.val$speedSliderVal2.innerHTML = 'MAX';
    this.this$01.competition.speed_0 = 50000;
    return;
  }
  s > 100 && (s = round_int($wnd.Math.pow(s - 80, 1.5)));
  this.val$speedSliderVal2.innerHTML = '' + s;
  $setSpeed(this.this$01.competition, s);
}
;
_.actionPerformed.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$1.actionPerformed';
defineProperties(_.actionPerformed, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame$1.actionPerformed'}});
var Lil_co_codeguru_corewars8086_gui_WarFrame$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/1', 157);
function WarFrame$2(this$0, val$competition, val$mainWnd){
  this.this$01 = this$0;
  this.val$competition2 = val$competition;
  this.val$mainWnd3 = val$mainWnd;
}

WarFrame$2.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$2.WarFrame$2';
defineProperties(WarFrame$2, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame$2.WarFrame$2'}});
defineClass(158, 1, {}, WarFrame$2);
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
defineProperties(_.actionPerformed, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame$2.actionPerformed'}});
var Lil_co_codeguru_corewars8086_gui_WarFrame$2_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/2', 158);
function WarFrame$3(val$competition, val$mainWnd){
  this.val$competition2 = val$competition;
  this.val$mainWnd3 = val$mainWnd;
}

WarFrame$3.displayName = 'il.co.codeguru.corewars8086.gui.WarFrame$3.WarFrame$3';
defineProperties(WarFrame$3, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame$3.WarFrame$3'}});
defineClass(159, 1, {}, WarFrame$3);
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
defineProperties(_.actionPerformed, {'name':{'value':'il.co.codeguru.corewars8086.gui.WarFrame$3.actionPerformed'}});
var Lil_co_codeguru_corewars8086_gui_WarFrame$3_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/3', 159);
function $parseLst(lsttext, opcodesText, m_currentListing){
  var addressStart, c, charsBeforeCode, expectedLineIndex, hasMacroLevel, i, indexStart, islast, j, l, line, lines, opcodeStart, prevLine, state, totalOpcodeCount;
  lines = $split(lsttext);
  expectedLineIndex = 1;
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
    hasMacroLevel = false;
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
            l.lineNum = __parseAndValidateInt((checkCriticalStringBounds(indexStart, j, line.length) , line.substr(indexStart, j - indexStart)), 10);
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
            l.addressStr = (checkCriticalStringBounds(addressStart, j, line.length) , line.substr(addressStart, j - addressStart));
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
          c == 62 && charsBeforeCode == 21 && (hasMacroLevel = true);
          if (c == 42) {
            state = 7;
          }
           else if (!islast && charsBeforeCode < 22)
            ++charsBeforeCode;
          else if (c == 32 || islast) {
            l.fullOpcode = (checkCriticalStringBounds(opcodeStart, j, line.length) , line.substr(opcodeStart, j - opcodeStart));
            hasMacroLevel && (l.fullOpcode = removeMacroLevel(l.fullOpcode));
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
            l.code_0 = (checkCriticalStringElementIndex(j, line.length + 1) , line.substr(j));
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
    if (l.lineNum > expectedLineIndex) {
      while (l.lineNum != expectedLineIndex) {
        opcodesText.string += '\n';
        ++expectedLineIndex;
      }
    }
     else if (!!prevLine && l.lineNum == prevLine.lineNum) {
      if (!hasMacroLevel) {
        prevLine.fullOpcode += '' + l.fullOpcode;
        prevLine.opcodesCount = countDigits(prevLine.fullOpcode) / 2 | 0;
        continue;
      }
    }
     else if (l.lineNum != expectedLineIndex) {
      log_0('wrong line number ' + ('' + l.lineNum) + ' at ' + ('' + expectedLineIndex));
      return false;
    }
    hasMacroLevel || ++expectedLineIndex;
    m_currentListing.array.push(l);
    if (!hasMacroLevel) {
      $append_4(opcodesText, l.opcode);
      opcodesText.string += '\n';
    }
    prevLine = l;
  }
  return true;
}

$parseLst.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.NasmListParser.$parseLst';
defineProperties($parseLst, {'name':{'value':'il.co.codeguru.corewars8086.gui.asm_parsers.NasmListParser.$parseLst'}});
function $parseStdout(stdoutText, asmElem, stdoutShorten, m_lineOffsets){
  var countAllNL, e, ec, firstColon, i, j, line, lineNum, lineNum0, lineType, lines, m_errLines;
  lines = $split(stdoutText);
  countAllNL = m_lineOffsets.array.length;
  m_errLines = initUnidimensionalArray(C_classLit, $intern_12, 10, countAllNL, 15, 1);
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
          lineNum0 = __parseAndValidateInt((checkCriticalStringBounds(firstColon + 1, j, line.length) , line.substr(firstColon + 1, j - (firstColon + 1))), 10);
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
      console.log(stdoutText);
      return m_errLines;
    }
    $append_4(stdoutShorten, "<div class='stdout_line_" + String.fromCharCode(lineType) + "' ondblclick='asm_cursorToLine(" + ('' + (checkCriticalElementIndex(lineNum0, m_lineOffsets.array.length) , castTo(m_lineOffsets.array[lineNum0], 23)).value_0) + ")'>");
    $append_4(stdoutShorten, (checkCriticalStringElementIndex(firstColon + 1, line.length + 1) , line.substr(firstColon + 1)));
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
defineProperties($parseStdout, {'name':{'value':'il.co.codeguru.corewars8086.gui.asm_parsers.NasmListParser.$parseStdout'}});
function removeMacroLevel(s){
  var i;
  if ($charAt(s, s.length - 1) != 62)
    return s;
  i = s.length - 2;
  while (i > 0 && (checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i) != 60))
    --i;
  return checkCriticalStringBounds(0, i, s.length) , s.substr(0, i);
}

removeMacroLevel.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.NasmListParser.removeMacroLevel';
defineProperties(removeMacroLevel, {'name':{'value':'il.co.codeguru.corewars8086.gui.asm_parsers.NasmListParser.removeMacroLevel'}});
function DocumentFragment_getElementById(df, id_0){
  return df.getElementById(id_0);
}

DocumentFragment_getElementById.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.DocumentFragment_getElementById';
defineProperties(DocumentFragment_getElementById, {'name':{'value':'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.DocumentFragment_getElementById'}});
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
defineProperties(countDigits, {'name':{'value':'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.countDigits'}});
function isHexDigit(c){
  return c >= 48 && c <= 57 || c >= 65 && c <= 70;
}

isHexDigit.displayName = 'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.isHexDigit';
defineProperties(isHexDigit, {'name':{'value':'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.isHexDigit'}});
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
defineProperties(spacedHex, {'name':{'value':'il.co.codeguru.corewars8086.gui.asm_parsers.TextUtils.spacedHex'}});
function ActionEvent(){
}

ActionEvent.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ActionEvent.ActionEvent';
defineProperties(ActionEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.ActionEvent.ActionEvent'}});
defineClass(99, 1, {}, ActionEvent);
var Lil_co_codeguru_corewars8086_gui_widgets_ActionEvent_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'ActionEvent', 99);
function $clinit_Color(){
  $clinit_Color = emptyMethod;
  new Color(0, 0, 0);
}

$clinit_Color.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.$clinit';
defineProperties($clinit_Color, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Color.$clinit'}});
function $darker(this$static){
  return new Color_0($wnd.Math.max(round_int(this$static.m_r * 0.7), 0), $wnd.Math.max(round_int(this$static.m_g * 0.7), 0), $wnd.Math.max(round_int(this$static.m_b * 0.7), 0), this$static.m_a);
}

$darker.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.$darker';
defineProperties($darker, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Color.$darker'}});
function $makeString(this$static){
  if (this$static.m_a == 1)
    return 'rgb(' + ('' + this$static.m_r) + ',' + ('' + this$static.m_g) + ',' + ('' + this$static.m_b) + ')';
  return 'rgba(' + ('' + this$static.m_r) + ',' + ('' + this$static.m_g) + ',' + ('' + this$static.m_b) + ',' + ('' + this$static.m_a) + ')';
}

$makeString.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.$makeString';
defineProperties($makeString, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Color.$makeString'}});
function $opposite(this$static){
  return new Color_0(255 - this$static.m_r, 255 - this$static.m_g, 255 - this$static.m_b, this$static.m_a);
}

$opposite.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.$opposite';
defineProperties($opposite, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Color.$opposite'}});
function $toString_2(this$static){
  return this$static.m_str;
}

$toString_2.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.$toString';
defineProperties($toString_2, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Color.$toString'}});
function Color(r, g, b){
  this.m_r = r;
  this.m_g = g;
  this.m_b = b;
  this.m_a = 1;
  this.m_isDark = 0.3 * r + 0.58 * g + 0.12 * b < 128;
  this.m_str = $makeString(this);
}

Color.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.Color';
defineProperties(Color, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Color.Color'}});
function Color_0(r, g, b, a){
  this.m_r = r;
  this.m_g = g;
  this.m_b = b;
  this.m_a = a;
  this.m_isDark = 0.3 * r + 0.58 * g + 0.12 * b < 128;
  this.m_str = $makeString(this);
}

Color_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.Color';
defineProperties(Color_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Color.Color'}});
function HSBtoRGB(hue){
  $clinit_Color();
  var b, f, g, h, q, r, t;
  r = 0;
  g = 0;
  b = 0;
  h = (hue - $wnd.Math.floor(hue)) * 6;
  f = h - $wnd.Math.floor(h);
  q = $intern_22 * (1 - $intern_23 * f);
  t = $intern_22 * (1 - $intern_23 * (1 - f));
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
defineProperties(HSBtoRGB, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Color.HSBtoRGB'}});
defineClass(36, 1, {36:1}, Color, Color_0);
_.toString_0 = function toString_8(){
  return this.m_str;
}
;
_.toString_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Color.toString';
defineProperties(_.toString_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Color.toString'}});
_.m_a = 0;
_.m_b = 0;
_.m_g = 0;
_.m_isDark = false;
_.m_r = 0;
var BLACK_0 = '#000000', WHITE = '#ffffff';
var Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'Color', 36);
function debug(text_0){
  console.log(text_0);
}

debug.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Console.debug';
defineProperties(debug, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Console.debug'}});
function err_box(text_0){
  $wnd.show_error(text_0);
}

err_box.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Console.err_box';
defineProperties(err_box, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Console.err_box'}});
function error_0(text_0){
  console.error(text_0);
}

error_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Console.error';
defineProperties(error_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Console.error'}});
function log_0(text_0){
  console.log(text_0);
}

log_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.Console.log';
defineProperties(log_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.Console.log'}});
defineClass(225, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 225);
defineClass(226, 225, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 226);
function $print(){
  return;
}

$print.displayName = 'java.io.PrintStream.$print';
defineProperties($print, {'name':{'value':'java.io.PrintStream.$print'}});
function $println(this$static, s){
  this$static.print_1(s);
  this$static.print_0(10);
}

$println.displayName = 'java.io.PrintStream.$println';
defineProperties($println, {'name':{'value':'java.io.PrintStream.$println'}});
function PrintStream(){
}

PrintStream.displayName = 'java.io.PrintStream.PrintStream';
defineProperties(PrintStream, {'name':{'value':'java.io.PrintStream.PrintStream'}});
defineClass(90, 226, {}, PrintStream);
_.print_0 = function print_0(x_0){
  this.print_1(String.fromCharCode(x_0));
}
;
_.print_0.displayName = 'java.io.PrintStream.print';
defineProperties(_.print_0, {'name':{'value':'java.io.PrintStream.print'}});
_.print_1 = function print_1(s){
}
;
_.print_1.displayName = 'java.io.PrintStream.print';
defineProperties(_.print_1, {'name':{'value':'java.io.PrintStream.print'}});
_.println = function println(s){
  $println(this, s);
}
;
_.println.displayName = 'java.io.PrintStream.println';
defineProperties(_.println, {'name':{'value':'java.io.PrintStream.println'}});
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 90);
function $$init_19(this$static){
  this$static.buf = new StringBuilder;
}

$$init_19.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.$$init';
defineProperties($$init_19, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.$$init'}});
function $consoleLog(msg){
  window.console?window.console.log(msg):(document.title = 'LOG:' + msg);
}

$consoleLog.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.$consoleLog';
defineProperties($consoleLog, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.$consoleLog'}});
function $println_0(this$static, s){
  $append_4(this$static.buf, s);
  $consoleLog(this$static.buf.string);
  $setLength(this$static.buf);
}

$println_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.$println';
defineProperties($println_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.$println'}});
function ConsolePrintStream(){
  this.buf = new StringBuilder;
}

ConsolePrintStream.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.ConsolePrintStream';
defineProperties(ConsolePrintStream, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.ConsolePrintStream'}});
defineClass(125, 90, {}, ConsolePrintStream);
_.print_0 = function print_2(c){
  c == 10?$println_0(this, ''):$append_0(this.buf, c);
}
;
_.print_0.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.print';
defineProperties(_.print_0, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.print'}});
_.print_1 = function print_3(s){
  var cut;
  while (true) {
    cut = s.indexOf(fromCodePoint(10));
    if (cut == -1) {
      break;
    }
    $println_0(this, (checkCriticalStringBounds(0, cut, s.length) , s.substr(0, cut)));
    s = (checkCriticalStringElementIndex(cut + 1, s.length + 1) , s.substr(cut + 1));
  }
  $append_4(this.buf, s);
}
;
_.print_1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.print';
defineProperties(_.print_1, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.print'}});
_.println = function println_0(s){
  $println_0(this, s);
}
;
_.println.displayName = 'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.println';
defineProperties(_.println, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.ConsolePrintStream.println'}});
var Lil_co_codeguru_corewars8086_gui_widgets_ConsolePrintStream_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'ConsolePrintStream', 125);
function $$init_20(this$static){
  this$static.mListeners = new HashSet;
}

$$init_20.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.$$init';
defineProperties($$init_20, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.$$init'}});
function $add(this$static, pListener){
  $add_1(this$static.mListeners, pListener);
}

$add.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.$add';
defineProperties($add, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.$add'}});
function $doneAdding(this$static){
  this$static.mListenersArr = $toArray(this$static.mListeners);
  this$static.mListeners = null;
}

$doneAdding.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.$doneAdding';
defineProperties($doneAdding, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.$doneAdding'}});
function EventMulticasterBase(){
  this.mListeners = new HashSet;
}

EventMulticasterBase.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.EventMulticasterBase';
defineProperties(EventMulticasterBase, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterBase.EventMulticasterBase'}});
defineClass(78, 1, {});
_.mListenersArr = null;
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterBase_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterBase', 78);
function EventMulticasterCompetition(){
  EventMulticasterBase.call(this);
  this.debugProxy = new EventMulticasterCompetition$DebugHandler(this);
  this.competeProxy = new EventMulticasterCompetition$CompeteHandler(this);
}

EventMulticasterCompetition.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition.EventMulticasterCompetition';
defineProperties(EventMulticasterCompetition, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition.EventMulticasterCompetition'}});
defineClass(147, 78, {}, EventMulticasterCompetition);
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterCompetition_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterCompetition', 147);
function EventMulticasterCompetition$CompeteHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterCompetition$CompeteHandler.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.EventMulticasterCompetition$CompeteHandler';
defineProperties(EventMulticasterCompetition$CompeteHandler, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.EventMulticasterCompetition$CompeteHandler'}});
defineClass(148, 1, {13:1}, EventMulticasterCompetition$CompeteHandler);
_.onCompetitionEnd = function onCompetitionEnd_3(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onCompetitionEnd();
  }
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onCompetitionEnd';
defineProperties(_.onCompetitionEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onCompetitionEnd'}});
_.onCompetitionStart = function onCompetitionStart_3(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onCompetitionStart();
  }
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onCompetitionStart';
defineProperties(_.onCompetitionStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onCompetitionStart'}});
_.onEndRound = function onEndRound_3(){
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onEndRound';
defineProperties(_.onEndRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onEndRound'}});
_.onNoneAlive = function onNoneAlive_3(){
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onNoneAlive';
defineProperties(_.onNoneAlive, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onNoneAlive'}});
_.onPaused = function onPaused_3(){
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onPaused';
defineProperties(_.onPaused, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onPaused'}});
_.onRound = function onRound_3(round_0){
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onRound';
defineProperties(_.onRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onRound'}});
_.onWarEnd = function onWarEnd_3(reason, winners, inDebug){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onWarEnd(reason, winners, inDebug);
  }
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarEnd';
defineProperties(_.onWarEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarEnd'}});
_.onWarPreStartClear = function onWarPreStartClear_3(){
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarPreStartClear';
defineProperties(_.onWarPreStartClear, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarPreStartClear'}});
_.onWarStart = function onWarStart_3(){
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarStart';
defineProperties(_.onWarStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarStart'}});
_.onWarriorBirth = function onWarriorBirth_3(w){
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarriorBirth';
defineProperties(_.onWarriorBirth, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarriorBirth'}});
_.onWarriorDeath = function onWarriorDeath_3(warrior, reason){
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarriorDeath';
defineProperties(_.onWarriorDeath, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$CompeteHandler.onWarriorDeath'}});
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterCompetition$CompeteHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterCompetition/CompeteHandler', 148);
function EventMulticasterCompetition$DebugHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterCompetition$DebugHandler.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.EventMulticasterCompetition$DebugHandler';
defineProperties(EventMulticasterCompetition$DebugHandler, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.EventMulticasterCompetition$DebugHandler'}});
defineClass(149, 1, {13:1}, EventMulticasterCompetition$DebugHandler);
_.onCompetitionEnd = function onCompetitionEnd_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onCompetitionEnd();
  }
}
;
_.onCompetitionEnd.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onCompetitionEnd';
defineProperties(_.onCompetitionEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onCompetitionEnd'}});
_.onCompetitionStart = function onCompetitionStart_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onCompetitionStart();
  }
}
;
_.onCompetitionStart.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onCompetitionStart';
defineProperties(_.onCompetitionStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onCompetitionStart'}});
_.onEndRound = function onEndRound_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onEndRound();
  }
}
;
_.onEndRound.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onEndRound';
defineProperties(_.onEndRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onEndRound'}});
_.onNoneAlive = function onNoneAlive_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onNoneAlive();
  }
}
;
_.onNoneAlive.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onNoneAlive';
defineProperties(_.onNoneAlive, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onNoneAlive'}});
_.onPaused = function onPaused_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onPaused();
  }
}
;
_.onPaused.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onPaused';
defineProperties(_.onPaused, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onPaused'}});
_.onRound = function onRound_4(round_0){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onRound(round_0);
  }
}
;
_.onRound.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onRound';
defineProperties(_.onRound, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onRound'}});
_.onWarEnd = function onWarEnd_4(reason, winners, inDebug){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onWarEnd(reason, winners, inDebug);
  }
}
;
_.onWarEnd.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarEnd';
defineProperties(_.onWarEnd, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarEnd'}});
_.onWarPreStartClear = function onWarPreStartClear_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onWarPreStartClear();
  }
}
;
_.onWarPreStartClear.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarPreStartClear';
defineProperties(_.onWarPreStartClear, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarPreStartClear'}});
_.onWarStart = function onWarStart_4(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onWarStart();
  }
}
;
_.onWarStart.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarStart';
defineProperties(_.onWarStart, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarStart'}});
_.onWarriorBirth = function onWarriorBirth_4(w){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onWarriorBirth(w);
  }
}
;
_.onWarriorBirth.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarriorBirth';
defineProperties(_.onWarriorBirth, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarriorBirth'}});
_.onWarriorDeath = function onWarriorDeath_4(warrior, reason){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 13).onWarriorDeath(warrior, reason);
  }
}
;
_.onWarriorDeath.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarriorDeath';
defineProperties(_.onWarriorDeath, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterCompetition$DebugHandler.onWarriorDeath'}});
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterCompetition$DebugHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterCompetition/DebugHandler', 149);
function EventMulticasterMemory(){
  EventMulticasterBase.call(this);
  this.proxy = new EventMulticasterMemory$CondDebugHandler(this);
}

EventMulticasterMemory.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory.EventMulticasterMemory';
defineProperties(EventMulticasterMemory, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory.EventMulticasterMemory'}});
defineClass(150, 78, {}, EventMulticasterMemory);
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterMemory_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterMemory', 150);
function $$init_21(this$static){
}

$$init_21.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.$$init';
defineProperties($$init_21, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.$$init'}});
function $onMemoryWrite(this$static, address, value_0){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 66).onMemoryWrite(address, value_0, this$static.debug_0);
  }
}

$onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.$onMemoryWrite';
defineProperties($onMemoryWrite, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.$onMemoryWrite'}});
function $onWriteState(this$static, state){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 66).onWriteState(state);
  }
}

$onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.$onWriteState';
defineProperties($onWriteState, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.$onWriteState'}});
function $setDebug(this$static, v){
  this$static.debug_0 = v;
}

$setDebug.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.$setDebug';
defineProperties($setDebug, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.$setDebug'}});
function EventMulticasterMemory$CondDebugHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterMemory$CondDebugHandler.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.EventMulticasterMemory$CondDebugHandler';
defineProperties(EventMulticasterMemory$CondDebugHandler, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.EventMulticasterMemory$CondDebugHandler'}});
defineClass(151, 1, {66:1}, EventMulticasterMemory$CondDebugHandler);
_.onMemoryWrite = function onMemoryWrite_3(address, value_0, dontCare){
  $onMemoryWrite(this, address, value_0);
}
;
_.onMemoryWrite.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.onMemoryWrite';
defineProperties(_.onMemoryWrite, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.onMemoryWrite'}});
_.onWriteState = function onWriteState_3(state){
  $onWriteState(this, state);
}
;
_.onWriteState.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.onWriteState';
defineProperties(_.onWriteState, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterMemory$CondDebugHandler.onWriteState'}});
_.debug_0 = true;
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterMemory$CondDebugHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterMemory/CondDebugHandler', 151);
function EventMulticasterScore(){
  EventMulticasterBase.call(this);
  this.proxy = new EventMulticasterScore$MulticasterHandler(this);
}

EventMulticasterScore.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore.EventMulticasterScore';
defineProperties(EventMulticasterScore, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore.EventMulticasterScore'}});
defineClass(153, 78, {}, EventMulticasterScore);
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterScore_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterScore', 153);
function $scoreChanged(this$static, name_0, addedValue, groupIndex, subIndex){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 210).scoreChanged(name_0, addedValue, groupIndex, subIndex);
  }
}

$scoreChanged.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore$MulticasterHandler.$scoreChanged';
defineProperties($scoreChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore$MulticasterHandler.$scoreChanged'}});
function EventMulticasterScore$MulticasterHandler(this$0){
  this.this$01 = this$0;
}

EventMulticasterScore$MulticasterHandler.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore$MulticasterHandler.EventMulticasterScore$MulticasterHandler';
defineProperties(EventMulticasterScore$MulticasterHandler, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore$MulticasterHandler.EventMulticasterScore$MulticasterHandler'}});
defineClass(154, 1, {210:1}, EventMulticasterScore$MulticasterHandler);
_.scoreChanged = function scoreChanged_0(name_0, addedValue, groupIndex, subIndex){
  $scoreChanged(this, name_0, addedValue, groupIndex, subIndex);
}
;
_.scoreChanged.displayName = 'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore$MulticasterHandler.scoreChanged';
defineProperties(_.scoreChanged, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.EventMulticasterScore$MulticasterHandler.scoreChanged'}});
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterScore$MulticasterHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterScore/MulticasterHandler', 154);
function $clinit_JButton(){
  $clinit_JButton = emptyMethod;
  m_buts = new HashMap;
}

$clinit_JButton.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JButton.$clinit';
defineProperties($clinit_JButton, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JButton.$clinit'}});
function JButton(id_0){
  $clinit_JButton();
  JComponent_0.call(this, id_0);
  $println(($clinit_System() , out_0), 'register button ' + id_0);
  $putStringValue(m_buts, id_0, this);
  if (this.m_element == null)
    return;
  this.m_element.addEventListener('click', new JButton$1(this));
}

JButton.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JButton.JButton';
defineProperties(JButton, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JButton.JButton'}});
defineClass(95, 44, {}, JButton);
var m_buts;
var Lil_co_codeguru_corewars8086_gui_widgets_JButton_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JButton', 95);
function JButton$1(this$0){
  this.this$01 = this$0;
}

JButton$1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JButton$1.JButton$1';
defineProperties(JButton$1, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JButton$1.JButton$1'}});
defineClass(177, 1, {}, JButton$1);
_.handleEvent = function handleEvent_7(event_0){
  if (!this.this$01.m_listener || !this.this$01.m_enabled)
    return;
  this.this$01.m_listener.actionPerformed(new ActionEvent);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JButton$1.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JButton$1.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_widgets_JButton$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JButton/1', 177);
function JComponent$1(this$0){
  this.this$01 = this$0;
}

JComponent$1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent$1.JComponent$1';
defineProperties(JComponent$1, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JComponent$1.JComponent$1'}});
defineClass(140, 1, {}, JComponent$1);
_.handleEvent = function handleEvent_8(event_0){
  if (!this.this$01.m_listener)
    return;
  this.this$01.m_listener.actionPerformed(new ActionEvent);
}
;
_.handleEvent.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JComponent$1.handleEvent';
defineProperties(_.handleEvent, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JComponent$1.handleEvent'}});
var Lil_co_codeguru_corewars8086_gui_widgets_JComponent$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JComponent/1', 140);
function $$init_22(this$static){
}

$$init_22.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JSlider.$$init';
defineProperties($$init_22, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JSlider.$$init'}});
function $setValue_1(this$static){
  castToNative(this$static.m_element, $wnd.HTMLInputElement).value = '0';
  this$static.m_valueElem != null && (this$static.m_valueElem.innerHTML = '0');
}

$setValue_1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JSlider.$setValue';
defineProperties($setValue_1, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JSlider.$setValue'}});
function JSlider(){
  JComponent_0.call(this, 'speedSlider');
  this.m_element.addEventListener('input', new JComponent$1(this));
  this.m_valueElem = castToNative(($clinit_DomGlobal() , document_0).getElementById('speedSliderVal'), $wnd.HTMLElement);
}

JSlider.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JSlider.JSlider';
defineProperties(JSlider, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JSlider.JSlider'}});
defineClass(176, 44, {}, JSlider);
_.m_valueElem = null;
var Lil_co_codeguru_corewars8086_gui_widgets_JSlider_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JSlider', 176);
function $append(this$static, s){
  castToNative(this$static.m_element, $wnd.HTMLElement).innerHTML = castToNative(this$static.m_element, $wnd.HTMLElement).innerHTML + s;
}

$append.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextArea.$append';
defineProperties($append, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JTextArea.$append'}});
function $scrollToBottom(this$static){
  castToNative(this$static.m_element, $wnd.HTMLElement).scrollTop = castToNative(this$static.m_element, $wnd.HTMLElement).scrollHeight - castToNative(this$static.m_element, $wnd.HTMLElement).clientHeight;
}

$scrollToBottom.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextArea.$scrollToBottom';
defineProperties($scrollToBottom, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JTextArea.$scrollToBottom'}});
function JTextArea(){
  JComponent_0.call(this, 'messagesArea');
}

JTextArea.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextArea.JTextArea';
defineProperties(JTextArea, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JTextArea.JTextArea'}});
defineClass(175, 44, {}, JTextArea);
var Lil_co_codeguru_corewars8086_gui_widgets_JTextArea_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JTextArea', 175);
function $setText_1(this$static, v){
  castToNative(this$static.m_element, $wnd.HTMLInputElement).value = v;
}

$setText_1.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextField.$setText';
defineProperties($setText_1, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JTextField.$setText'}});
function JTextField(id_0, text_0){
  JComponent_0.call(this, id_0);
  text_0 != null && (castToNative(this.m_element, $wnd.HTMLInputElement).value = text_0);
}

JTextField.displayName = 'il.co.codeguru.corewars8086.gui.widgets.JTextField.JTextField';
defineProperties(JTextField, {'name':{'value':'il.co.codeguru.corewars8086.gui.widgets.JTextField.JTextField'}});
defineClass(93, 44, {}, JTextField);
var Lil_co_codeguru_corewars8086_gui_widgets_JTextField_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JTextField', 93);
function $clinit_Format(){
  $clinit_Format = emptyMethod;
  hex_chars = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 6, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']);
}

$clinit_Format.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.$clinit';
defineProperties($clinit_Format, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.Format.$clinit'}});
function hex2(num){
  $clinit_Format();
  return hex_chars[(num & 240) >> 4] + ('' + hex_chars[num & 15]);
}

hex2.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.hex2';
defineProperties(hex2, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.Format.hex2'}});
function hex4(num){
  $clinit_Format();
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
defineProperties(hex4, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.Format.hex4'}});
function hex5(num){
  $clinit_Format();
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
defineProperties(hex5, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.Format.hex5'}});
function innerText(elem){
  $clinit_Format();
  return elem.innerText;
}

innerText.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.innerText';
defineProperties(innerText, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.Format.innerText'}});
function setInnerFloat(elem, v){
  $clinit_Format();
  Number.isInteger(v)?(elem.innerText = v + ' '):(elem.innerText = v.toFixed(2) + ' ');
}

setInnerFloat.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.setInnerFloat';
defineProperties(setInnerFloat, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.Format.setInnerFloat'}});
function setInnerText(elem, text_0){
  $clinit_Format();
  elem.innerText = text_0;
}

setInnerText.displayName = 'il.co.codeguru.corewars8086.jsadd.Format.setInnerText';
defineProperties(setInnerText, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.Format.setInnerText'}});
var hex_chars;
function arrAdd(arr, v){
  arr.push(v);
}

arrAdd.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.arrAdd';
defineProperties(arrAdd, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.arrAdd'}});
function arrGetObj(arr, idx){
  return arr[idx];
}

arrGetObj.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.arrGetObj';
defineProperties(arrGetObj, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.arrGetObj'}});
function arrLen(arr){
  return arr.length;
}

arrLen.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.arrLen';
defineProperties(arrLen, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.arrLen'}});
function dictGetBool(arr, k){
  return arr[k];
}

dictGetBool.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetBool';
defineProperties(dictGetBool, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetBool'}});
function dictGetBool_0(arr, k, def_val){
  var v = arr[k];
  if (v === undefined)
    return def_val;
  return v;
}

dictGetBool_0.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetBool';
defineProperties(dictGetBool_0, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetBool'}});
function dictGetInt(arr, k){
  return arr[k];
}

dictGetInt.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetInt';
defineProperties(dictGetInt, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetInt'}});
function dictGetObj(arr, k){
  return arr[k];
}

dictGetObj.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetObj';
defineProperties(dictGetObj, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetObj'}});
function dictGetStr(arr, k){
  return arr[k];
}

dictGetStr.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetStr';
defineProperties(dictGetStr, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.dictGetStr'}});
function dictPut(d, k, v){
  d[k] = v;
}

dictPut.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.dictPut';
defineProperties(dictPut, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.dictPut'}});
function dictPut_0(d, k, v){
  d[k] = v;
}

dictPut_0.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.dictPut';
defineProperties(dictPut_0, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.dictPut'}});
function dictPut_1(d, k, v){
  d[k] = v;
}

dictPut_1.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.dictPut';
defineProperties(dictPut_1, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.dictPut'}});
function dictPut_2(d, k, v){
  d[k] = v;
}

dictPut_2.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.dictPut';
defineProperties(dictPut_2, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.dictPut'}});
function makeArray(){
  return [];
}

makeArray.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.makeArray';
defineProperties(makeArray, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.makeArray'}});
function makeDict(){
  return {};
}

makeDict.displayName = 'il.co.codeguru.corewars8086.jsadd.JsObj.makeDict';
defineProperties(makeDict, {'name':{'value':'il.co.codeguru.corewars8086.jsadd.JsObj.makeDict'}});
function $readExecuteWord(this$static, address){
  var high, low, nextAddress;
  low = $readExecuteByte_2(this$static, address);
  nextAddress = new RealModeAddress_0(address.m_segment, address.m_offset + 1 << 16 >> 16);
  high = $readExecuteByte_2(this$static, nextAddress);
  return ((high & 255) << 16 >> 16 << 8 | (low & 255) << 16 >> 16) << 16 >> 16;
}

$readExecuteWord.displayName = 'il.co.codeguru.corewars8086.memory.AbstractRealModeMemory.$readExecuteWord';
defineProperties($readExecuteWord, {'name':{'value':'il.co.codeguru.corewars8086.memory.AbstractRealModeMemory.$readExecuteWord'}});
function $readWord(this$static, address){
  var high, low, nextAddress;
  low = this$static.readByte(address);
  nextAddress = new RealModeAddress_0(address.m_segment, address.m_offset + 1 << 16 >> 16);
  high = this$static.readByte(nextAddress);
  return ((high & 255) << 16 >> 16 << 8 | (low & 255) << 16 >> 16) << 16 >> 16;
}

$readWord.displayName = 'il.co.codeguru.corewars8086.memory.AbstractRealModeMemory.$readWord';
defineProperties($readWord, {'name':{'value':'il.co.codeguru.corewars8086.memory.AbstractRealModeMemory.$readWord'}});
function $writeWord(this$static, address, value_0){
  var high, low, nextAddress;
  low = value_0 << 24 >> 24;
  high = value_0 >> 8 << 24 >> 24;
  $writeByte_0(this$static, address, low);
  nextAddress = new RealModeAddress_0(address.m_segment, address.m_offset + 1 << 16 >> 16);
  $writeByte_0(this$static, nextAddress, high);
}

$writeWord.displayName = 'il.co.codeguru.corewars8086.memory.AbstractRealModeMemory.$writeWord';
defineProperties($writeWord, {'name':{'value':'il.co.codeguru.corewars8086.memory.AbstractRealModeMemory.$writeWord'}});
defineClass(231, 1, {});
var Lil_co_codeguru_corewars8086_memory_AbstractRealModeMemory_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'AbstractRealModeMemory', 231);
function MemoryException(msg){
  Exception_1.call(this, msg);
}

MemoryException.displayName = 'il.co.codeguru.corewars8086.memory.MemoryException.MemoryException';
defineProperties(MemoryException, {'name':{'value':'il.co.codeguru.corewars8086.memory.MemoryException.MemoryException'}});
defineClass(52, 7, {52:1, 3:1, 7:1, 8:1}, MemoryException);
var Lil_co_codeguru_corewars8086_memory_MemoryException_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'MemoryException', 52);
function RealModeAddress(linearAddress){
  var unsignedOffset, unsignedSegment;
  linearAddress %= $intern_21;
  unsignedSegment = (linearAddress / 16 | 0) & $intern_0;
  unsignedOffset = linearAddress - unsignedSegment * 16 & $intern_0;
  this.m_segment = unsignedSegment << 16 >> 16;
  this.m_offset = unsignedOffset << 16 >> 16;
  this.m_linearAddress = linearAddress;
}

RealModeAddress.displayName = 'il.co.codeguru.corewars8086.memory.RealModeAddress.RealModeAddress';
defineProperties(RealModeAddress, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeAddress.RealModeAddress'}});
function RealModeAddress_0(segment, offset){
  var linearAddressFull, unsignedOffset, unsignedSegment;
  this.m_segment = segment;
  this.m_offset = offset;
  unsignedSegment = this.m_segment & $intern_0;
  unsignedOffset = this.m_offset & $intern_0;
  linearAddressFull = unsignedSegment * 16 + unsignedOffset;
  this.m_linearAddress = linearAddressFull % $intern_21;
}

RealModeAddress_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeAddress.RealModeAddress';
defineProperties(RealModeAddress_0, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeAddress.RealModeAddress'}});
function linearAddress_0(segment, offset){
  var linearAddress, linearAddressFull, unsignedOffset, unsignedSegment;
  unsignedSegment = segment & $intern_0;
  unsignedOffset = offset & $intern_0;
  linearAddressFull = unsignedSegment * 16 + unsignedOffset;
  linearAddress = linearAddressFull % $intern_21;
  return linearAddress;
}

linearAddress_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeAddress.linearAddress';
defineProperties(linearAddress_0, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeAddress.linearAddress'}});
defineClass(6, 1, {}, RealModeAddress, RealModeAddress_0);
_.m_linearAddress = 0;
_.m_offset = 0;
_.m_segment = 0;
var Lil_co_codeguru_corewars8086_memory_RealModeAddress_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RealModeAddress', 6);
function $readByte(this$static, linearAddress){
  return this$static.m_data[linearAddress % $intern_21];
}

$readByte.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readByte';
defineProperties($readByte, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readByte'}});
function $readByte_0(this$static, address){
  return this$static.m_data[address.m_linearAddress];
}

$readByte_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readByte';
defineProperties($readByte_0, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readByte'}});
function $readExecuteByte(this$static, linearAddress){
  return this$static.m_data[linearAddress];
}

$readExecuteByte.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readExecuteByte';
defineProperties($readExecuteByte, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readExecuteByte'}});
function $readExecuteByte_0(this$static, address){
  return this$static.m_data[address.m_linearAddress];
}

$readExecuteByte_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readExecuteByte';
defineProperties($readExecuteByte_0, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$readExecuteByte'}});
function $setListener(this$static, listener){
  this$static.listener = listener;
}

$setListener.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$setListener';
defineProperties($setListener, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$setListener'}});
function $writeByte(this$static, address, value_0){
  this$static.m_data[address.m_linearAddress] = value_0;
  !!this$static.listener && $onMemoryWrite(this$static.listener, address, value_0);
}

$writeByte.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$writeByte';
defineProperties($writeByte, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.$writeByte'}});
function RealModeMemoryImpl(){
  this.m_data = new Int8Array($intern_21);
}

RealModeMemoryImpl.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.RealModeMemoryImpl';
defineProperties(RealModeMemoryImpl, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.RealModeMemoryImpl'}});
defineClass(178, 231, {}, RealModeMemoryImpl);
_.readByte = function readByte(address){
  return $readByte_0(this, address);
}
;
_.readByte.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.readByte';
defineProperties(_.readByte, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryImpl.readByte'}});
var Lil_co_codeguru_corewars8086_memory_RealModeMemoryImpl_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RealModeMemoryImpl', 178);
function $equals_1(this$static, a){
  return this$static.m_start == a.m_start && this$static.m_end == a.m_end;
}

$equals_1.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.$equals';
defineProperties($equals_1, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.$equals'}});
function $isInRegion(this$static, asked){
  return asked >= this$static.m_start && asked <= this$static.m_end;
}

$isInRegion.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.$isInRegion';
defineProperties($isInRegion, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.$isInRegion'}});
function RealModeMemoryRegion(){
  this.m_start = -1;
  this.m_end = -1;
}

RealModeMemoryRegion.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.RealModeMemoryRegion';
defineProperties(RealModeMemoryRegion, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.RealModeMemoryRegion'}});
function RealModeMemoryRegion_0(start_0, end){
  this.m_start = start_0.m_linearAddress;
  this.m_end = end.m_linearAddress;
}

RealModeMemoryRegion_0.displayName = 'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.RealModeMemoryRegion';
defineProperties(RealModeMemoryRegion_0, {'name':{'value':'il.co.codeguru.corewars8086.memory.RealModeMemoryRegion.RealModeMemoryRegion'}});
defineClass(41, 1, {41:1}, RealModeMemoryRegion, RealModeMemoryRegion_0);
_.m_end = 0;
_.m_start = 0;
var Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RealModeMemoryRegion', 41);
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
defineProperties($isAddressInRegions, {'name':{'value':'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$isAddressInRegions'}});
function $readByte_1(this$static, address){
  var number;
  if (!$isAddressInRegions(this$static.m_readAccessRegions, address.m_linearAddress)) {
    throw toJs(new MemoryException(($clinit_Format() , 'Read not allowed from address 0x' + (number = address.m_linearAddress >>> 0 , number.toString(16)).toUpperCase())));
  }
  return $readByte_0(this$static.m_memory, address);
}

$readByte_1.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$readByte';
defineProperties($readByte_1, {'name':{'value':'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$readByte'}});
function $readExecuteByte_1(this$static, linearAddress){
  var number;
  if (!$isAddressInRegions(this$static.m_executeAccessRegions, linearAddress)) {
    throw toJs(new MemoryException(($clinit_Format() , 'Execute not allowed in address 0x' + (number = linearAddress >>> 0 , number.toString(16)).toUpperCase())));
  }
  return $readExecuteByte(this$static.m_memory, linearAddress);
}

$readExecuteByte_1.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$readExecuteByte';
defineProperties($readExecuteByte_1, {'name':{'value':'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$readExecuteByte'}});
function $readExecuteByte_2(this$static, address){
  var number;
  if (!$isAddressInRegions(this$static.m_executeAccessRegions, address.m_linearAddress)) {
    throw toJs(new MemoryException(($clinit_Format() , 'Execute not allowed in address 0x' + (number = address.m_linearAddress >>> 0 , number.toString(16)).toUpperCase())));
  }
  return $readExecuteByte_0(this$static.m_memory, address);
}

$readExecuteByte_2.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$readExecuteByte';
defineProperties($readExecuteByte_2, {'name':{'value':'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$readExecuteByte'}});
function $writeByte_0(this$static, address, value_0){
  var number;
  if (!$isAddressInRegions(this$static.m_writeAccessRegions, address.m_linearAddress)) {
    throw toJs(new MemoryException(($clinit_Format() , 'Write not allowed to address 0x' + (number = address.m_linearAddress >>> 0 , number.toString(16)).toUpperCase())));
  }
  $writeByte(this$static.m_memory, address, value_0);
}

$writeByte_0.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$writeByte';
defineProperties($writeByte_0, {'name':{'value':'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.$writeByte'}});
function RestrictedAccessRealModeMemory(memory, readAccessRegions, writeAccessRegions, executeAccessRegions){
  this.m_memory = memory;
  this.m_readAccessRegions = readAccessRegions;
  this.m_writeAccessRegions = writeAccessRegions;
  this.m_executeAccessRegions = executeAccessRegions;
}

RestrictedAccessRealModeMemory.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.RestrictedAccessRealModeMemory';
defineProperties(RestrictedAccessRealModeMemory, {'name':{'value':'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.RestrictedAccessRealModeMemory'}});
defineClass(207, 231, {}, RestrictedAccessRealModeMemory);
_.readByte = function readByte_0(address){
  return $readByte_1(this, address);
}
;
_.readByte.displayName = 'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.readByte';
defineProperties(_.readByte, {'name':{'value':'il.co.codeguru.corewars8086.memory.RestrictedAccessRealModeMemory.readByte'}});
var Lil_co_codeguru_corewars8086_memory_RestrictedAccessRealModeMemory_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RestrictedAccessRealModeMemory', 207);
function $absFromRel(this$static, rel8){
  var startOfProgram;
  startOfProgram = this$static.pointer - this$static.progStartOffset;
  return startOfProgram + rel8 << 24 >> 24;
}

$absFromRel.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$absFromRel';
defineProperties($absFromRel, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$absFromRel'}});
function $absFromRel16(this$static, rel16){
  var startOfProgram;
  startOfProgram = this$static.pointer - this$static.progStartOffset;
  return startOfProgram + rel16 << 16 >> 16;
}

$absFromRel16.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$absFromRel16';
defineProperties($absFromRel16, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$absFromRel16'}});
function $getMem8_0(this$static){
  var extraInfo, number, number0;
  extraInfo = null;
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
defineProperties($getMem8_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$getMem8'}});
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
defineProperties($getReg16_1, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$getReg16'}});
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
defineProperties($getReg8_1, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$getReg8'}});
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
defineProperties($getSeg_1, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$getSeg'}});
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
defineProperties($nextOpcode_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$nextOpcode'}});
function $nextWord_0(this$static){
  var high, low;
  low = this$static.nextByte();
  high = this$static.nextByte();
  return ((high & 255) << 16 >> 16 << 8 | (low & 255) << 16 >> 16) << 16 >> 16;
}

$nextWord_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$nextWord';
defineProperties($nextWord_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$nextWord'}});
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
defineProperties($opcode0X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode0X'}});
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
defineProperties($opcode1X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode1X'}});
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
defineProperties($opcode2X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode2X'}});
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
defineProperties($opcode3X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode3X'}});
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
defineProperties($opcode4X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode4X'}});
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
defineProperties($opcode5X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode5X'}});
function $opcode6X_0(){
  throw toJs(new Disassembler$DisassemblerException);
}

$opcode6X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode6X';
defineProperties($opcode6X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode6X'}});
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
defineProperties($opcode7X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode7X'}});
function $opcode8X_0(this$static, opcode){
  var a, b, number, number0, number1, number2, number3, number4, number5, number6, number7;
  switch (opcode) {
    case -128:
    case -126:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ADD BYTE ' + $getMem8_0(this$static) + ', ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase());
        case 1:
          return 'OR BYTE ' + $getMem8_0(this$static) + ', ' + ('0x' + (number1 = (this$static.nextByte() & 255) >>> 0 , number1.toString(16)).toUpperCase());
        case 2:
          return 'ADC BYTE ' + $getMem8_0(this$static) + ', ' + ('0x' + (number2 = (this$static.nextByte() & 255) >>> 0 , number2.toString(16)).toUpperCase());
        case 3:
          return 'SBB BYTE ' + $getMem8_0(this$static) + ', ' + ('0x' + (number3 = (this$static.nextByte() & 255) >>> 0 , number3.toString(16)).toUpperCase());
        case 4:
          return 'AND BYTE ' + $getMem8_0(this$static) + ', ' + ('0x' + (number4 = (this$static.nextByte() & 255) >>> 0 , number4.toString(16)).toUpperCase());
        case 5:
          return 'SUB BYTE ' + $getMem8_0(this$static) + ', ' + ('0x' + (number5 = (this$static.nextByte() & 255) >>> 0 , number5.toString(16)).toUpperCase());
        case 6:
          return 'XOR BYTE ' + $getMem8_0(this$static) + ', ' + ('0x' + (number6 = (this$static.nextByte() & 255) >>> 0 , number6.toString(16)).toUpperCase());
        case 7:
          return 'CMP BYTE ' + $getMem8_0(this$static) + ', ' + ('0x' + (number7 = (this$static.nextByte() & 255) >>> 0 , number7.toString(16)).toUpperCase());
        default:throw toJs(new RuntimeException);
      }

    case -127:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ADD WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number0 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number0.toString(16)).toUpperCase());
        case 1:
          return 'OR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number1.toString(16)).toUpperCase());
        case 2:
          return 'ADC WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number2 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number2.toString(16)).toUpperCase());
        case 3:
          return 'SBB WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number3 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number3.toString(16)).toUpperCase());
        case 4:
          return 'AND WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number4 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number4.toString(16)).toUpperCase());
        case 5:
          return 'SUB WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number5 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number5.toString(16)).toUpperCase());
        case 6:
          return 'XOR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number6 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number6.toString(16)).toUpperCase());
        case 7:
          return 'CMP WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number7 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number7.toString(16)).toUpperCase());
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
      a = $getReg16_1(this$static.regIndex);
      b = this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static);
      return 'TEST ' + b + ', ' + a;
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
      return this$static.mode_0 == 3?'DW ' + ('0x' + (number = ($toWord(opcode, (this$static.memIndex | this$static.regIndex << 3 | this$static.mode_0 << 6) << 24 >> 24) & $intern_0) >>> 0 , number.toString(16)).toUpperCase()):'LEA ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case -114:
      $resetIndirect(this$static);
      return 'MOV ' + $getSeg_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case -113:
      $resetIndirect(this$static);
      return 'POP WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    default:throw toJs(new RuntimeException);
  }
}

$opcode8X_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$opcode8X';
defineProperties($opcode8X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode8X'}});
function $opcode9X_0(this$static, opcode){
  var a, b, index_0, number, number0;
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
      a = '0x' + (number0 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number0.toString(16)).toUpperCase();
      b = '0x' + (number = ($nextWord_0(this$static) & $intern_0) >>> 0 , number.toString(16)).toUpperCase();
      return 'CALL WORD ' + b + ':' + a;
    case -101:
      return 'WAIT';
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
defineProperties($opcode9X_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcode9X'}});
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
defineProperties($opcodeAX_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeAX'}});
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
defineProperties($opcodeBX_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeBX'}});
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
      return 'MOV BYTE ' + $getMem8_0(this$static) + ', ' + ('0x' + (number1 = (this$static.nextByte() & 255) >>> 0 , number1.toString(16)).toUpperCase());
    case -57:
      $resetIndirect(this$static);
      return 'MOV WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number2 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number2.toString(16)).toUpperCase());
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
defineProperties($opcodeCX_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeCX'}});
function $opcodeDX_0(this$static, opcode){
  switch (opcode) {
    case -48:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ROL BYTE ' + $getMem8_0(this$static) + ', 1';
        case 1:
          return 'ROR BYTE ' + $getMem8_0(this$static) + ', 1';
        case 2:
          return 'RCL BYTE ' + $getMem8_0(this$static) + ', 1';
        case 3:
          return 'RCR BYTE ' + $getMem8_0(this$static) + ', 1';
        case 4:
          return 'SHL BYTE ' + $getMem8_0(this$static) + ', 1';
        case 5:
          return 'SHR BYTE ' + $getMem8_0(this$static) + ', 1';
        case 6:
          throw toJs(new Disassembler$DisassemblerException);
        case 7:
          return 'SAR BYTE ' + $getMem8_0(this$static) + ', 1';
        default:throw toJs(new RuntimeException);
      }

    case -47:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ROL WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 1:
          return 'ROR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 2:
          return 'RCL WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 3:
          return 'RCR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 4:
          return 'SHL WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 5:
          return 'SHR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        case 6:
          throw toJs(new Disassembler$DisassemblerException);
        case 7:
          return 'SAR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', 1';
        default:throw toJs(new RuntimeException);
      }

    case -46:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ROL BYTE ' + $getMem8_0(this$static) + ', CL';
        case 1:
          return 'ROR BYTE ' + $getMem8_0(this$static) + ', CL';
        case 2:
          return 'RCL BYTE ' + $getMem8_0(this$static) + ', CL';
        case 3:
          return 'RCR BYTE ' + $getMem8_0(this$static) + ', CL';
        case 4:
          return 'SHL BYTE ' + $getMem8_0(this$static) + ', CL';
        case 5:
          return 'SHR BYTE ' + $getMem8_0(this$static) + ', CL';
        case 6:
          throw toJs(new Disassembler$DisassemblerException);
        case 7:
          return 'SAR BYTE ' + $getMem8_0(this$static) + ', CL';
        default:throw toJs(new RuntimeException);
      }

    case -45:
      $resetIndirect(this$static);
      switch (this$static.regIndex) {
        case 0:
          return 'ROL WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 1:
          return 'ROR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 2:
          return 'RCL WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 3:
          return 'RCR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 4:
          return 'SHL WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 5:
          return 'SHR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
        case 6:
          throw toJs(new Disassembler$DisassemblerException);
        case 7:
          return 'SAR WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', CL';
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
defineProperties($opcodeDX_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeDX'}});
function $opcodeEX_0(this$static, opcode){
  var a, b, number, number0, number1, number2, number3, number4, number5, number6, number7;
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
      return 'JMP ' + ('0x' + (number5 = ($absFromRel16(this$static, $nextWord_0(this$static)) & $intern_0) >>> 0 , number5.toString(16)).toUpperCase());
    case -22:
      a = '0x' + (number6 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number6.toString(16)).toUpperCase();
      b = '0x' + (number7 = ($nextWord_0(this$static) & $intern_0) >>> 0 , number7.toString(16)).toUpperCase();
      return 'JMP WORD ' + b + ':' + a;
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
defineProperties($opcodeEX_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeEX'}});
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
          return 'NOT BYTE ' + $getMem8_0(this$static);
        case 3:
          return 'NEG BYTE ' + $getMem8_0(this$static);
        case 4:
          return 'MUL BYTE ' + $getMem8_0(this$static);
        case 6:
          return 'DIV BYTE ' + $getMem8_0(this$static);
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
          return 'NOT WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 3:
          return 'NEG WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 4:
          return 'MUL WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 6:
          return 'DIV WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
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
          return 'INC BYTE ' + $getMem8_0(this$static);
        case 1:
          return 'DEC BYTE ' + $getMem8_0(this$static);
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
          return 'INC WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 1:
          return 'DEC WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 2:
          return 'CALL NEAR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 3:
          if (this$static.mode_0 == 3)
            throw toJs(new Disassembler$DisassemblerException);
          else 
            return 'CALL FAR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 4:
          return 'JMP ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 5:
          if (this$static.mode_0 == 3)
            throw toJs(new Disassembler$DisassemblerException);
          else 
            return 'JMP FAR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
        case 6:
          return 'PUSH WORD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
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
defineProperties($opcodeFX_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$opcodeFX'}});
function $reset_0(this$static, offset, endOffset){
  this$static.pointer = offset;
  this$static.startOffset = offset;
  this$static.progStartOffset = offset;
  this$static.endOffset = endOffset;
}

$reset_0.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$reset';
defineProperties($reset_0, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$reset'}});
function $resetIndirect(this$static){
  var modeByte;
  modeByte = this$static.nextByte();
  this$static.mode_0 = (modeByte >> 6 & 3) << 24 >> 24;
  this$static.regIndex = (modeByte >> 3 & 7) << 24 >> 24;
  this$static.memIndex = (modeByte & 7) << 24 >> 24;
}

$resetIndirect.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$resetIndirect';
defineProperties($resetIndirect, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$resetIndirect'}});
function $toWord(b1, b2){
  return ((b2 & 255) << 16 >> 16 << 8 | (b1 & 255) << 16 >> 16) << 16 >> 16;
}

$toWord.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.$toWord';
defineProperties($toWord, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.$toWord'}});
function Disassembler(offset, endOffset){
  $reset_0(this, offset, endOffset);
}

Disassembler.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler.Disassembler';
defineProperties(Disassembler, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler.Disassembler'}});
defineClass(100, 1, {});
_.endOffset = 0;
_.memIndex = 0;
_.mode_0 = 0;
_.pointer = 0;
_.progStartOffset = 0;
_.regIndex = 0;
_.startOffset = 0;
var Lil_co_codeguru_corewars8086_utils_Disassembler_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler', 100);
function Disassembler$ArrDisassembler(memory, endOffset){
  Disassembler.call(this, 0, endOffset);
  this.bytes = memory;
}

Disassembler$ArrDisassembler.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$ArrDisassembler.Disassembler$ArrDisassembler';
defineProperties(Disassembler$ArrDisassembler, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler$ArrDisassembler.Disassembler$ArrDisassembler'}});
defineClass(101, 100, {}, Disassembler$ArrDisassembler);
_.nextByte = function nextByte(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  ++this.pointer;
  return this.bytes[this.pointer - 1];
}
;
_.nextByte.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$ArrDisassembler.nextByte';
defineProperties(_.nextByte, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler$ArrDisassembler.nextByte'}});
var Lil_co_codeguru_corewars8086_utils_Disassembler$ArrDisassembler_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/ArrDisassembler', 101);
function Disassembler$DisassemblerException(){
  Exception.call(this);
}

Disassembler$DisassemblerException.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$DisassemblerException.Disassembler$DisassemblerException';
defineProperties(Disassembler$DisassemblerException, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler$DisassemblerException.Disassembler$DisassemblerException'}});
defineClass(9, 7, {9:1, 3:1, 7:1, 8:1}, Disassembler$DisassemblerException);
var Lil_co_codeguru_corewars8086_utils_Disassembler$DisassemblerException_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/DisassemblerException', 9);
function Disassembler$DisassemblerLengthException(){
  Disassembler$DisassemblerException.call(this);
}

Disassembler$DisassemblerLengthException.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$DisassemblerLengthException.Disassembler$DisassemblerLengthException';
defineProperties(Disassembler$DisassemblerLengthException, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler$DisassemblerLengthException.Disassembler$DisassemblerLengthException'}});
defineClass(68, 9, {9:1, 68:1, 3:1, 7:1, 8:1}, Disassembler$DisassemblerLengthException);
var Lil_co_codeguru_corewars8086_utils_Disassembler$DisassemblerLengthException_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/DisassemblerLengthException', 68);
function Disassembler$NArrDisassembler(memory, offset, endOffset){
  Disassembler.call(this, offset, endOffset);
  this.bytes = memory;
}

Disassembler$NArrDisassembler.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$NArrDisassembler.Disassembler$NArrDisassembler';
defineProperties(Disassembler$NArrDisassembler, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler$NArrDisassembler.Disassembler$NArrDisassembler'}});
defineClass(187, 100, {}, Disassembler$NArrDisassembler);
_.nextByte = function nextByte_0(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  ++this.pointer;
  return this.bytes[this.pointer - 1];
}
;
_.nextByte.displayName = 'il.co.codeguru.corewars8086.utils.Disassembler$NArrDisassembler.nextByte';
defineProperties(_.nextByte, {'name':{'value':'il.co.codeguru.corewars8086.utils.Disassembler$NArrDisassembler.nextByte'}});
var Lil_co_codeguru_corewars8086_utils_Disassembler$NArrDisassembler_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/NArrDisassembler', 187);
function $$init_23(this$static){
}

$$init_23.displayName = 'il.co.codeguru.corewars8086.war.Competition.$$init';
defineProperties($$init_23, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$$init'}});
function $addCompetitionEventListener(this$static, lis){
  $add(this$static.competitionEventCaster, lis);
}

$addCompetitionEventListener.displayName = 'il.co.codeguru.corewars8086.war.Competition.$addCompetitionEventListener';
defineProperties($addCompetitionEventListener, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$addCompetitionEventListener'}});
function $addMemoryEventLister(this$static, lis){
  $add(this$static.memoryEventCaster, lis);
}

$addMemoryEventLister.displayName = 'il.co.codeguru.corewars8086.war.Competition.$addMemoryEventLister';
defineProperties($addMemoryEventLister, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$addMemoryEventLister'}});
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
        this$static.memoryEventListener.debug_0 = false;
        while (needMore == 1 && stepsCount > 1) {
          needMore = $runRound(this$static);
          --stepsCount;
        }
        (this$static.speed_0 != 50000 || this$static.currentWar.isSingleRound) && (this$static.competitionEventListener = this$static.competitionEventCaster.debugProxy , this$static.memoryEventListener.debug_0 = true , undefined);
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
defineProperties($continueRun, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$continueRun'}});
function $doneCompetition(this$static){
  var elapsed;
  this$static.competitionEventListener.onCompetitionEnd();
  elapsed = ($clinit_System() , sub_1(fromDouble_0(Date.now()), this$static.compState.startTime));
  log_0('Total time=' + ('' + toDouble_0(elapsed) / 1000));
  this$static.compState = null;
}

$doneCompetition.displayName = 'il.co.codeguru.corewars8086.war.Competition.$doneCompetition';
defineProperties($doneCompetition, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$doneCompetition'}});
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
defineProperties($doneWar, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$doneWar'}});
function $getCurrentWarrior_0(this$static){
  return this$static.currentWar?this$static.currentWar.m_currentWarrior:-1;
}

$getCurrentWarrior_0.displayName = 'il.co.codeguru.corewars8086.war.Competition.$getCurrentWarrior';
defineProperties($getCurrentWarrior_0, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$getCurrentWarrior'}});
function $getTotalNumberOfWars(this$static){
  return toInt_0($getNumberOfItems(this$static.competitionIterator)) * this$static.warsPerCombination;
}

$getTotalNumberOfWars.displayName = 'il.co.codeguru.corewars8086.war.Competition.$getTotalNumberOfWars';
defineProperties($getTotalNumberOfWars, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$getTotalNumberOfWars'}});
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
  isInDebugger?(this$static.competitionEventListener = this$static.competitionEventCaster.debugProxy , this$static.memoryEventListener.debug_0 = true , undefined):(this$static.competitionEventListener = this$static.competitionEventCaster.competeProxy , this$static.memoryEventListener.debug_0 = false , undefined);
}

$runCompetition.displayName = 'il.co.codeguru.corewars8086.war.Competition.$runCompetition';
defineProperties($runCompetition, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$runCompetition'}});
function $runRound(this$static){
  var atBreakpoint, inComp;
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
  inComp = !!this$static.compState && !this$static.compState.isInDebugger;
  if ((this$static.check_max_round || inComp) && this$static.compState.round_0 >= 200000) {
    this$static.currentWar.isPaused = true;
    return -1;
  }
  return 1;
}

$runRound.displayName = 'il.co.codeguru.corewars8086.war.Competition.$runRound';
defineProperties($runRound, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$runRound'}});
function $setAbort(this$static){
  if (!this$static.compState)
    return;
  this$static.compState.abort = true;
}

$setAbort.displayName = 'il.co.codeguru.corewars8086.war.Competition.$setAbort';
defineProperties($setAbort, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$setAbort'}});
function $setSeed(this$static, seed){
  this$static.seed = seed;
}

$setSeed.displayName = 'il.co.codeguru.corewars8086.war.Competition.$setSeed';
defineProperties($setSeed, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$setSeed'}});
function $setSpeed(this$static, speed){
  this$static.speed_0 = speed;
}

$setSpeed.displayName = 'il.co.codeguru.corewars8086.war.Competition.$setSpeed';
defineProperties($setSpeed, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$setSpeed'}});
function $startWar(this$static, warriorGroups){
  this$static.currentWar = new War(this$static.memoryEventListener, this$static.competitionEventListener, this$static.compState.startPaused);
  $setSeed_0(this$static.currentWar, this$static.seed);
  this$static.competitionEventListener.onWarPreStartClear();
  $loadWarriorGroups(this$static.currentWar, warriorGroups);
  this$static.competitionEventListener.onWarStart();
  this$static.compState.round_0 = 0;
}

$startWar.displayName = 'il.co.codeguru.corewars8086.war.Competition.$startWar';
defineProperties($startWar, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.$startWar'}});
function Competition(){
  this.warriorRepository = new WarriorRepository;
  this.competitionEventCaster = new EventMulticasterCompetition;
  this.competitionEventListener = this.competitionEventCaster.debugProxy;
  this.memoryEventCaster = new EventMulticasterMemory;
  this.memoryEventListener = this.memoryEventCaster.proxy;
  this.speed_0 = 0;
}

Competition.displayName = 'il.co.codeguru.corewars8086.war.Competition.Competition';
defineProperties(Competition, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition.Competition'}});
defineClass(135, 1, {}, Competition);
_.check_max_round = true;
_.globalPause = false;
_.seed = 0;
_.speed_0 = 0;
_.warsPerCombination = 20;
var Lil_co_codeguru_corewars8086_war_Competition_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'Competition', 135);
function $$init_24(this$static){
}

$$init_24.displayName = 'il.co.codeguru.corewars8086.war.Competition$CompState.$$init';
defineProperties($$init_24, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition$CompState.$$init'}});
function Competition$CompState(){
}

Competition$CompState.displayName = 'il.co.codeguru.corewars8086.war.Competition$CompState.Competition$CompState';
defineProperties(Competition$CompState, {'name':{'value':'il.co.codeguru.corewars8086.war.Competition$CompState.Competition$CompState'}});
defineClass(136, 1, {}, Competition$CompState);
_.abort = false;
_.isInDebugger = false;
_.round_0 = 0;
_.startPaused = false;
_.startTime = 0;
_.state = 0;
_.waitedFrames = 0;
_.warIndex = 0;
var Lil_co_codeguru_corewars8086_war_Competition$CompState_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'Competition/CompState', 136);
function $getNumberOfItems(this$static){
  return binomialCoefficient(this$static.numItems, this$static.counters.length);
}

$getNumberOfItems.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.$getNumberOfItems';
defineProperties($getNumberOfItems, {'name':{'value':'il.co.codeguru.corewars8086.war.CompetitionIterator.$getNumberOfItems'}});
function $next(this$static){
  return $nextPermutation(this$static.rnd, this$static.numItems, this$static.groupSize);
}

$next.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.$next';
defineProperties($next, {'name':{'value':'il.co.codeguru.corewars8086.war.CompetitionIterator.$next'}});
function CompetitionIterator(numItems, groupSize, seed){
  this.numItems = numItems;
  this.groupSize = groupSize;
  this.counters = initUnidimensionalArray(I_classLit, $intern_12, 10, groupSize, 15, 1);
  this.rnd = new RandomDataGenerator;
  $initRan(this.rnd, seed);
}

CompetitionIterator.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.CompetitionIterator';
defineProperties(CompetitionIterator, {'name':{'value':'il.co.codeguru.corewars8086.war.CompetitionIterator.CompetitionIterator'}});
defineClass(189, 1, {}, CompetitionIterator);
_.next_0 = function next(){
  return $nextPermutation(this.rnd, this.numItems, this.groupSize);
}
;
_.next_0.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.next';
defineProperties(_.next_0, {'name':{'value':'il.co.codeguru.corewars8086.war.CompetitionIterator.next'}});
_.hasNext_0 = function hasNext(){
  return this.counters[0] != -1;
}
;
_.hasNext_0.displayName = 'il.co.codeguru.corewars8086.war.CompetitionIterator.hasNext';
defineProperties(_.hasNext_0, {'name':{'value':'il.co.codeguru.corewars8086.war.CompetitionIterator.hasNext'}});
_.groupSize = 0;
_.numItems = 0;
var Lil_co_codeguru_corewars8086_war_CompetitionIterator_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'CompetitionIterator', 189);
function $$init_25(this$static){
  this$static.rand = new Random;
}

$$init_25.displayName = 'il.co.codeguru.corewars8086.war.War.$$init';
defineProperties($$init_25, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$$init'}});
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
defineProperties($allocateCoreMemory, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$allocateCoreMemory'}});
function $getLoadOffset(this$static, warriorSize){
  var found, i, loadAddress, numTries, otherEnd, otherLoadAddress, otherSize, otherStart;
  loadAddress = 0;
  found = false;
  numTries = 0;
  while (!found && numTries < 100) {
    ++numTries;
    loadAddress = $nextInt(this$static.rand, $intern_18);
    found = true;
    loadAddress < $intern_15 && (found = false);
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
      otherStart = otherLoadAddress - $intern_15;
      otherEnd = otherLoadAddress + otherSize + $intern_15;
      if (loadAddress + warriorSize >= otherStart && loadAddress < otherEnd) {
        found = false;
        console.log('overlap with loaded!');
        break;
      }
    }
  }
  if (!found) {
    throw toJs(new Exception_1('Could not find space for loading warrior of, too many warriors, maybe try a different seed'));
  }
  return loadAddress << 16 >> 16;
}

$getLoadOffset.displayName = 'il.co.codeguru.corewars8086.war.War.$getLoadOffset';
defineProperties($getLoadOffset, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$getLoadOffset'}});
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
defineProperties($getRemainingWarriorNames, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$getRemainingWarriorNames'}});
function $getWarrior(this$static, index_0){
  return this$static.m_warriors[index_0];
}

$getWarrior.displayName = 'il.co.codeguru.corewars8086.war.War.$getWarrior';
defineProperties($getWarrior, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$getWarrior'}});
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
defineProperties($getWarriorByLabel, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$getWarriorByLabel'}});
function $loadWarriorGroup(this$static, warriorGroup){
  var codeLines, col, groupSharedMemory, i, initialStack, loadAddress, loadOffset, offset, playersPanel, stackMemory, tmp, w, warrior, warriorData, warriorName, warriors;
  warriors = warriorGroup.warriorData;
  groupSharedMemory = $allocateCoreMemory(this$static, $intern_15);
  playersPanel = s_instance.m_playersPanel;
  for (i = 0; i < warriors.array.length; ++i) {
    warrior = (checkCriticalElementIndex(i, warriors.array.length) , castTo(warriors.array[i], 61));
    warriorName = warrior.m_name;
    warriorData = warrior.m_code;
    codeLines = $findCode(playersPanel, warrior.m_label).lines;
    warrior.m_debugFixedLoadAddress < 0?(loadOffset = $getLoadOffset(this$static, warriorData.length)):(loadOffset = warrior.m_debugFixedLoadAddress << 16 >> 16);
    loadAddress = new RealModeAddress_0(4096, loadOffset);
    stackMemory = $allocateCoreMemory(this$static, $intern_16);
    initialStack = new RealModeAddress_0(stackMemory.m_segment, $intern_16);
    w = new Warrior(warriorName, warrior.m_label, warriorData.length, this$static.m_core, loadAddress, initialStack, groupSharedMemory, this$static.m_numWarriors);
    this$static.m_warriors[this$static.m_numWarriors++] = w;
    checkCriticalElementIndex(0, codeLines.array.length);
    castTo(codeLines.array[0], 39);
    $onWriteState(this$static.m_core.listener, 1);
    for (offset = 0; offset < warriorData.length; ++offset) {
      tmp = new RealModeAddress_0(4096, loadOffset + offset << 16 >> 16);
      $writeByte(this$static.m_core, tmp, warriorData[offset]);
    }
    if (s_instance.m_isBattleShown) {
      col = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), this$static.m_currentWarrior, false, false).m_str;
      $setButtonColor(col, warrior.m_label);
    }
    $onWriteState(this$static.m_core.listener, 2);
    ++this$static.m_numWarriorsAlive;
    ++this$static.m_currentWarrior;
    this$static.m_warListener.onWarriorBirth(w);
  }
}

$loadWarriorGroup.displayName = 'il.co.codeguru.corewars8086.war.War.$loadWarriorGroup';
defineProperties($loadWarriorGroup, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$loadWarriorGroup'}});
function $loadWarriorGroups(this$static, warriorGroups){
  var groupsLeftToLoad, i, randomInt;
  this$static.m_currentWarrior = 0;
  groupsLeftToLoad = new ArrayList;
  for (i = 0; i < warriorGroups.length; ++i) {
    groupsLeftToLoad.array.push(warriorGroups[i]);
  }
  while (groupsLeftToLoad.array.length > 0) {
    randomInt = $nextInt(this$static.rand, groupsLeftToLoad.array.length);
    $loadWarriorGroup(this$static, (checkCriticalElementIndex(randomInt, groupsLeftToLoad.array.length) , castTo(groupsLeftToLoad.array[randomInt], 28)));
    checkCriticalElementIndex(randomInt, groupsLeftToLoad.array.length);
    groupsLeftToLoad.array.splice(randomInt, 1);
  }
  this$static.m_currentWarrior = -1;
}

$loadWarriorGroups.displayName = 'il.co.codeguru.corewars8086.war.War.$loadWarriorGroups';
defineProperties($loadWarriorGroups, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$loadWarriorGroups'}});
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
         else if (instanceOf($e0, 52)) {
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
defineProperties($nextRound, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$nextRound'}});
function $resume(this$static){
  this$static.isPaused = false;
  this$static.isSingleRound = false;
}

$resume.displayName = 'il.co.codeguru.corewars8086.war.War.$resume';
defineProperties($resume, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$resume'}});
function $runSingleRound(this$static){
  this$static.isPaused = false;
  this$static.isSingleRound = true;
}

$runSingleRound.displayName = 'il.co.codeguru.corewars8086.war.War.$runSingleRound';
defineProperties($runSingleRound, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$runSingleRound'}});
function $setBreakpointCheck(this$static, brc){
  this$static.m_breakpointCheck = brc;
}

$setBreakpointCheck.displayName = 'il.co.codeguru.corewars8086.war.War.$setBreakpointCheck';
defineProperties($setBreakpointCheck, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$setBreakpointCheck'}});
function $setSeed_0(this$static, seed){
  $setSeed_2(this$static.rand, seed);
}

$setSeed_0.displayName = 'il.co.codeguru.corewars8086.war.War.$setSeed';
defineProperties($setSeed_0, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$setSeed'}});
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
defineProperties($shouldRunExtraOpcode, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$shouldRunExtraOpcode'}});
function $updateScores(this$static, repository){
  var i, score, warrior;
  score = 1 / this$static.m_numWarriorsAlive;
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    warrior = this$static.m_warriors[i];
    warrior.m_isAlive && $addScore(repository, warrior.m_name, score);
  }
}

$updateScores.displayName = 'il.co.codeguru.corewars8086.war.War.$updateScores';
defineProperties($updateScores, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$updateScores'}});
function $updateWarriorEnergy(warrior, round_0){
  var energy;
  if (round_0 % 5 == 0) {
    energy = warrior.m_state.m_energy & $intern_0;
    energy > 0 && ($setEnergy(warrior.m_state, energy - 1 << 16 >> 16) , undefined);
  }
}

$updateWarriorEnergy.displayName = 'il.co.codeguru.corewars8086.war.War.$updateWarriorEnergy';
defineProperties($updateWarriorEnergy, {'name':{'value':'il.co.codeguru.corewars8086.war.War.$updateWarriorEnergy'}});
function War(memoryListener, warListener, startPaused){
  var offset, tmp;
  this.rand = new Random;
  this.isPaused = startPaused;
  this.m_warListener = warListener;
  this.m_warriors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_war_Warrior_2_classLit, $intern_2, 80, 20, 0, 1);
  this.m_numWarriors = 0;
  this.m_numWarriorsAlive = 0;
  this.m_core = new RealModeMemoryImpl;
  this.m_nextFreeAddress = 131072;
  for (offset = 0; offset < $intern_18; ++offset) {
    tmp = new RealModeAddress_0(4096, offset << 16 >> 16);
    $writeByte(this.m_core, tmp, -52);
  }
  this.isSingleRound = false;
  $setListener(this.m_core, memoryListener);
}

War.displayName = 'il.co.codeguru.corewars8086.war.War.War';
defineProperties(War, {'name':{'value':'il.co.codeguru.corewars8086.war.War.War'}});
defineClass(181, 1, {}, War);
_.isPaused = false;
_.isSingleRound = false;
_.m_breakpointCheck = null;
_.m_currentWarrior = 0;
_.m_hasEnded = false;
_.m_nextFreeAddress = 0;
_.m_numWarriors = 0;
_.m_numWarriorsAlive = 0;
_.m_uiWarriorIndex = -1;
var Lil_co_codeguru_corewars8086_war_War_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'War', 181);
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
defineProperties($initializeCpuState, {'name':{'value':'il.co.codeguru.corewars8086.war.Warrior.$initializeCpuState'}});
function $setEnergy_0(this$static, value_0){
  $setEnergy(this$static.m_state, value_0);
}

$setEnergy_0.displayName = 'il.co.codeguru.corewars8086.war.Warrior.$setEnergy';
defineProperties($setEnergy_0, {'name':{'value':'il.co.codeguru.corewars8086.war.Warrior.$setEnergy'}});
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
  readAccessRegions = stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit, 1), $intern_2, 41, 0, [this.m_stackWritableRegion, this.m_codeRegion, this.m_sharedWritableRegion]);
  writeAccessRegions = stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit, 1), $intern_2, 41, 0, [this.m_stackWritableRegion, this.m_codeRegion, this.m_sharedWritableRegion]);
  executeAccessRegions = stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit, 1), $intern_2, 41, 0, [this.m_codeRegion]);
  this.m_memory = new RestrictedAccessRealModeMemory(core, readAccessRegions, writeAccessRegions, executeAccessRegions);
  this.m_cpu = new Cpu(this.m_state, this.m_memory);
  this.m_isAlive = true;
}

Warrior.displayName = 'il.co.codeguru.corewars8086.war.Warrior.Warrior';
defineProperties(Warrior, {'name':{'value':'il.co.codeguru.corewars8086.war.Warrior.Warrior'}});
defineClass(80, 1, {80:1}, Warrior);
_.m_codeSize = 0;
_.m_isAlive = false;
_.m_myIndex = 0;
var Lil_co_codeguru_corewars8086_war_Warrior_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'Warrior', 80);
function WarriorData(name_0, code_0, label_0, debugLoadAddr){
  this.m_name = name_0;
  this.m_code = code_0;
  this.m_label = label_0;
  this.m_debugFixedLoadAddress = debugLoadAddr;
}

WarriorData.displayName = 'il.co.codeguru.corewars8086.war.WarriorData.WarriorData';
defineProperties(WarriorData, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorData.WarriorData'}});
defineClass(61, 1, {61:1}, WarriorData);
_.toString_0 = function toString_9(){
  return this.m_name;
}
;
_.toString_0.displayName = 'il.co.codeguru.corewars8086.war.WarriorData.toString';
defineProperties(_.toString_0, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorData.toString'}});
_.m_debugFixedLoadAddress = 0;
var Lil_co_codeguru_corewars8086_war_WarriorData_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorData', 61);
function $addScoreToWarrior(this$static, name_0, value_0){
  var i;
  for (i = 0; i < this$static.warriorData.array.length; i++) {
    if ($equals_4(castTo($get_4(this$static.warriorData, i), 61).m_name, name_0)) {
      $set_0(this$static.scores, i, new Float(castTo($get_4(this$static.scores, i), 30).value_0 + value_0));
      break;
    }
  }
  this$static.groupScore += value_0;
  return i;
}

$addScoreToWarrior.displayName = 'il.co.codeguru.corewars8086.war.WarriorGroup.$addScoreToWarrior';
defineProperties($addScoreToWarrior, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorGroup.$addScoreToWarrior'}});
function $addWarrior(this$static, data_0){
  $add_0(this$static.warriorData, data_0);
  $add_0(this$static.scores, new Float(0));
}

$addWarrior.displayName = 'il.co.codeguru.corewars8086.war.WarriorGroup.$addWarrior';
defineProperties($addWarrior, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorGroup.$addWarrior'}});
function WarriorGroup(label_0, title_0){
  this.label_0 = label_0;
  this.title_0 = title_0;
  this.warriorData = new ArrayList;
  this.scores = new ArrayList;
}

WarriorGroup.displayName = 'il.co.codeguru.corewars8086.war.WarriorGroup.WarriorGroup';
defineProperties(WarriorGroup, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorGroup.WarriorGroup'}});
defineClass(28, 1, {28:1}, WarriorGroup);
_.groupScore = 0;
var Lil_co_codeguru_corewars8086_war_WarriorGroup_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorGroup', 28);
function $addScore(this$static, name_0, value_0){
  var group, groupIndex, subIndex;
  groupIndex = castTo($getStringValue(this$static.warriorNameToGroup, name_0), 23);
  if (!groupIndex) {
    return;
  }
  group = castTo($get_4(this$static.warriorGroups, groupIndex.value_0), 28);
  subIndex = $addScoreToWarrior(group, name_0, value_0);
  $scoreChanged(this$static.scoreListener, name_0, value_0, groupIndex.value_0, subIndex);
}

$addScore.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.$addScore';
defineProperties($addScore, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository.$addScore'}});
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
defineProperties($createGroupList, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository.$createGroupList'}});
function $readWarriorFilesFromUI(this$static, files, zombies, isInDebug){
  var bin, c, c$array, c$index, c$max, currentGroup, data_0, name_0, startAddr;
  $reset_1(this$static.warriorNameToGroup);
  this$static.warriorGroups.array.length = 0;
  log_0('Found ' + ('' + files.length) + ' survivors, ' + ('' + zombies.length) + ' zombies');
  m_loadAddrChecker = new LoadAddrChecker(files.length + zombies.length);
  sort_0(files, new WarriorRepository$1);
  currentGroup = null;
  for (c$array = files , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    if (!c.player.isEnabled)
      continue;
    name_0 = c.name_0;
    if (name_0.length == 0) {
      $wnd.show_error('All players must have a name for starting a competition');
      return false;
    }
    if (!c.lastCompileOk) {
      $wnd.show_error('Player ' + name_0 + " has assembly errors, can't start competition");
      return false;
    }
    bin = c.bin;
    if (bin == null) {
      $wnd.show_error('Player ' + name_0 + " does not have any code, can't start competition");
      return false;
    }
    startAddr = -1;
    if (!c.startAddrRandom && isInDebug) {
      startAddr = $addCheck(m_loadAddrChecker, c.startAddress, c.bin.length, name_0);
      if (startAddr == -2)
        return false;
    }
    data_0 = new WarriorData(name_0, $truncToSize(bin), c.label_0, startAddr);
    if (c.player.wtype != ($clinit_PlayersPanel$EWarriorType() , SINGLE)) {
      if (c.label_0.endsWith('0')) {
        currentGroup = new WarriorGroup(($substring_1(name_0, 0, name_0.length - 1) , c.player.label_0), c.player.title_0);
        $add_0(currentGroup.warriorData, data_0);
        $add_0(currentGroup.scores, new Float(0));
        $putStringValue(this$static.warriorNameToGroup, name_0, valueOf_0(this$static.warriorGroups.array.length));
      }
       else if (c.label_0.endsWith('1')) {
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
      currentGroup = new WarriorGroup(c.player.label_0, c.player.title_0);
      $add_0(currentGroup.warriorData, data_0);
      $add_0(currentGroup.scores, new Float(0));
      $putStringValue(this$static.warriorNameToGroup, name_0, valueOf_0(this$static.warriorGroups.array.length));
      $add_0(this$static.warriorGroups, currentGroup);
      currentGroup = null;
    }
  }
  if (this$static.warriorGroups.array.length == 0) {
    $wnd.show_error('no players to start a competition with');
    return false;
  }
  if (!$readZombiesFromUI(this$static, zombies))
    return false;
  return true;
}

$readWarriorFilesFromUI.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.$readWarriorFilesFromUI';
defineProperties($readWarriorFilesFromUI, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository.$readWarriorFilesFromUI'}});
function $readZombiesFromUI(this$static, zombieFiles){
  var bin, c, c$array, c$index, c$max, data_0, name_0, startAddr;
  this$static.zombieGroup = null;
  if (zombieFiles.length == 0 || !$wnd.player_check_zombies.checked)
    return true;
  this$static.zombieGroup = new WarriorGroup('', 'ZoMbIeS');
  for (c$array = zombieFiles , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    name_0 = c.name_0;
    if (name_0 == null) {
      $wnd.show_error('All zombies must have a name for starting a competition');
      return false;
    }
    if (!c.lastCompileOk) {
      $wnd.show_error('Zombie ' + name_0 + " has assembly errors, can't start competition");
      return false;
    }
    bin = c.bin;
    if (bin == null) {
      $wnd.show_error('Zombie ' + name_0 + " does not have any code, can't start competition");
      return false;
    }
    startAddr = -1;
    if (!c.startAddrRandom) {
      startAddr = $addCheck(m_loadAddrChecker, c.startAddress, c.bin.length, name_0);
      if (startAddr == -2)
        return false;
    }
    data_0 = new WarriorData(name_0, $truncToSize(bin), c.label_0, startAddr);
    $addWarrior(this$static.zombieGroup, data_0);
  }
  return true;
}

$readZombiesFromUI.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.$readZombiesFromUI';
defineProperties($readZombiesFromUI, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository.$readZombiesFromUI'}});
function $truncToSize(arr){
  if (arr.length > 512)
    return copyPrimitiveArray(arr, initUnidimensionalArray(B_classLit, $intern_12, 10, 512, 15, 1), 0, 512);
  return arr;
}

$truncToSize.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.$truncToSize';
defineProperties($truncToSize, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository.$truncToSize'}});
function WarriorRepository(){
  this.warriorNameToGroup = new HashMap;
  this.warriorGroups = new ArrayList;
  this.scoreEventsCaster = new EventMulticasterScore;
  this.scoreListener = this.scoreEventsCaster.proxy;
}

WarriorRepository.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository.WarriorRepository';
defineProperties(WarriorRepository, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository.WarriorRepository'}});
defineClass(133, 1, {}, WarriorRepository);
var m_loadAddrChecker;
var Lil_co_codeguru_corewars8086_war_WarriorRepository_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorRepository', 133);
function $compare(o1, o2){
  return $compareToIgnoreCase(o1.name_0, o2.name_0);
}

$compare.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository$1.$compare';
defineProperties($compare, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository$1.$compare'}});
function WarriorRepository$1(){
}

WarriorRepository$1.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository$1.WarriorRepository$1';
defineProperties(WarriorRepository$1, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository$1.WarriorRepository$1'}});
defineClass(134, 1, {}, WarriorRepository$1);
_.compare = function compare_3(o1, o2){
  return $compare(castTo(o1, 45), castTo(o2, 45));
}
;
_.compare.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository$1.compare';
defineProperties(_.compare, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository$1.compare'}});
_.equals_0 = function equals_3(other){
  return this === other;
}
;
_.equals_0.displayName = 'il.co.codeguru.corewars8086.war.WarriorRepository$1.equals';
defineProperties(_.equals_0, {'name':{'value':'il.co.codeguru.corewars8086.war.WarriorRepository$1.equals'}});
var Lil_co_codeguru_corewars8086_war_WarriorRepository$1_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorRepository/1', 134);
function $replace0(this$static, start_0, end, toInsert){
  var length_0;
  length_0 = this$static.string.length;
  end > length_0?(end = length_0):checkCriticalStringElementIndex(start_0, end + 1);
  this$static.string = $substring_1(this$static.string, 0, start_0) + ('' + toInsert) + $substring_0(this$static.string, end);
}

$replace0.displayName = 'java.lang.AbstractStringBuilder.$replace0';
defineProperties($replace0, {'name':{'value':'java.lang.AbstractStringBuilder.$replace0'}});
function $setLength(this$static){
  var oldLength;
  oldLength = this$static.string.length;
  0 < oldLength?(this$static.string = $substring_1(this$static.string, 0, 0)):0 > oldLength && (this$static.string += valueOf_2(initUnidimensionalArray(C_classLit, $intern_12, 10, -oldLength, 15, 1)));
}

$setLength.displayName = 'java.lang.AbstractStringBuilder.$setLength';
defineProperties($setLength, {'name':{'value':'java.lang.AbstractStringBuilder.$setLength'}});
function $substring(this$static, begin){
  return $substring_0(this$static.string, begin);
}

$substring.displayName = 'java.lang.AbstractStringBuilder.$substring';
defineProperties($substring, {'name':{'value':'java.lang.AbstractStringBuilder.$substring'}});
function $toString_3(this$static){
  return this$static.string;
}

$toString_3.displayName = 'java.lang.AbstractStringBuilder.$toString';
defineProperties($toString_3, {'name':{'value':'java.lang.AbstractStringBuilder.$toString'}});
function AbstractStringBuilder(string){
  this.string = string;
}

AbstractStringBuilder.displayName = 'java.lang.AbstractStringBuilder.AbstractStringBuilder';
defineProperties(AbstractStringBuilder, {'name':{'value':'java.lang.AbstractStringBuilder.AbstractStringBuilder'}});
defineClass(87, 1, {115:1});
_.toString_0 = function toString_10(){
  return this.string;
}
;
_.toString_0.displayName = 'java.lang.AbstractStringBuilder.toString';
defineProperties(_.toString_0, {'name':{'value':'java.lang.AbstractStringBuilder.toString'}});
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 87);
function ArithmeticException(){
  RuntimeException.call(this);
}

ArithmeticException.displayName = 'java.lang.ArithmeticException.ArithmeticException';
defineProperties(ArithmeticException, {'name':{'value':'java.lang.ArithmeticException.ArithmeticException'}});
function ArithmeticException_0(){
  RuntimeException_1.call(this, 'divide by zero');
}

ArithmeticException_0.displayName = 'java.lang.ArithmeticException.ArithmeticException';
defineProperties(ArithmeticException_0, {'name':{'value':'java.lang.ArithmeticException.ArithmeticException'}});
defineClass(74, 4, $intern_4, ArithmeticException_0);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 74);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

IndexOutOfBoundsException.displayName = 'java.lang.IndexOutOfBoundsException.IndexOutOfBoundsException';
defineProperties(IndexOutOfBoundsException, {'name':{'value':'java.lang.IndexOutOfBoundsException.IndexOutOfBoundsException'}});
function IndexOutOfBoundsException_0(message){
  RuntimeException_1.call(this, message);
}

IndexOutOfBoundsException_0.displayName = 'java.lang.IndexOutOfBoundsException.IndexOutOfBoundsException';
defineProperties(IndexOutOfBoundsException_0, {'name':{'value':'java.lang.IndexOutOfBoundsException.IndexOutOfBoundsException'}});
defineClass(50, 4, $intern_4, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 50);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

ArrayIndexOutOfBoundsException.displayName = 'java.lang.ArrayIndexOutOfBoundsException.ArrayIndexOutOfBoundsException';
defineProperties(ArrayIndexOutOfBoundsException, {'name':{'value':'java.lang.ArrayIndexOutOfBoundsException.ArrayIndexOutOfBoundsException'}});
function ArrayIndexOutOfBoundsException_0(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

ArrayIndexOutOfBoundsException_0.displayName = 'java.lang.ArrayIndexOutOfBoundsException.ArrayIndexOutOfBoundsException';
defineProperties(ArrayIndexOutOfBoundsException_0, {'name':{'value':'java.lang.ArrayIndexOutOfBoundsException.ArrayIndexOutOfBoundsException'}});
defineClass(108, 50, $intern_4, ArrayIndexOutOfBoundsException, ArrayIndexOutOfBoundsException_0);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 108);
function ArrayStoreException(){
  RuntimeException.call(this);
}

ArrayStoreException.displayName = 'java.lang.ArrayStoreException.ArrayStoreException';
defineProperties(ArrayStoreException, {'name':{'value':'java.lang.ArrayStoreException.ArrayStoreException'}});
function ArrayStoreException_0(message){
  RuntimeException_1.call(this, message);
}

ArrayStoreException_0.displayName = 'java.lang.ArrayStoreException.ArrayStoreException';
defineProperties(ArrayStoreException_0, {'name':{'value':'java.lang.ArrayStoreException.ArrayStoreException'}});
defineClass(91, 4, $intern_4, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 91);
function $compareTo_0(this$static, b){
  return compare_4((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

$compareTo_0.displayName = 'java.lang.Boolean.$compareTo';
defineProperties($compareTo_0, {'name':{'value':'java.lang.Boolean.$compareTo'}});
function $compareTo_1(this$static, b){
  return $compareTo_0(this$static, (checkCriticalType(b == null || instanceOfBoolean(b)) , b));
}

$compareTo_1.displayName = 'java.lang.Boolean.$compareTo';
defineProperties($compareTo_1, {'name':{'value':'java.lang.Boolean.$compareTo'}});
function $equals_2(this$static, o){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(o);
}

$equals_2.displayName = 'java.lang.Boolean.$equals';
defineProperties($equals_2, {'name':{'value':'java.lang.Boolean.$equals'}});
function $getClass_2(){
  return Ljava_lang_Boolean_2_classLit;
}

$getClass_2.displayName = 'java.lang.Boolean.$getClass';
defineProperties($getClass_2, {'name':{'value':'java.lang.Boolean.$getClass'}});
function $hashCode_1(this$static){
  return (checkCriticalNotNull(this$static) , this$static)?1231:1237;
}

$hashCode_1.displayName = 'java.lang.Boolean.$hashCode';
defineProperties($hashCode_1, {'name':{'value':'java.lang.Boolean.$hashCode'}});
function compare_4(x_0, y_0){
  return x_0 == y_0?0:x_0?1:-1;
}

compare_4.displayName = 'java.lang.Boolean.compare';
defineProperties(compare_4, {'name':{'value':'java.lang.Boolean.compare'}});
function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  return instanceOfString(this$static)?$compareTo_8(this$static, castToString(other)):instanceOfDouble(this$static)?$compareTo_2(this$static, castToDouble(other)):instanceOfBoolean(this$static)?$compareTo_0(this$static, (checkCriticalType(other == null || instanceOfBoolean(other)) , other)):this$static.compareTo(other);
}

compareTo_Ljava_lang_Object__I__devirtual$.displayName = 'java.lang.Boolean.compareTo_Ljava_lang_Object__I__devirtual$';
defineProperties(compareTo_Ljava_lang_Object__I__devirtual$, {'name':{'value':'java.lang.Boolean.compareTo_Ljava_lang_Object__I__devirtual$'}});
booleanCastMap = {3:1, 118:1, 33:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 118);
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
defineProperties(digit, {'name':{'value':'java.lang.Character.digit'}});
function ClassCastException(){
  RuntimeException_1.call(this, null);
}

ClassCastException.displayName = 'java.lang.ClassCastException.ClassCastException';
defineProperties(ClassCastException, {'name':{'value':'java.lang.ClassCastException.ClassCastException'}});
defineClass(120, 4, $intern_4, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 120);
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
  isTooLow = toReturn < $intern_24;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_1) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

__parseAndValidateInt.displayName = 'java.lang.Number.__parseAndValidateInt';
defineProperties(__parseAndValidateInt, {'name':{'value':'java.lang.Number.__parseAndValidateInt'}});
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
      s = (checkCriticalStringElementIndex(1, s.length + 1) , s.substr(1));
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw toJs(new NumberFormatException('For input string: "' + orig + '"'));
  }
  while (s.length > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 48)) {
    s = (checkCriticalStringElementIndex(1, s.length + 1) , s.substr(1));
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
    toReturn = -parseInt((checkCriticalStringBounds(0, head, s.length) , s.substr(0, head)), 10);
    s = (checkCriticalStringElementIndex(head, s.length + 1) , s.substr(head));
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = parseInt((checkCriticalStringBounds(0, maxDigits, s.length) , s.substr(0, maxDigits)), 10);
    s = (checkCriticalStringElementIndex(maxDigits, s.length + 1) , s.substr(maxDigits));
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
defineProperties(__parseAndValidateLong, {'name':{'value':'java.lang.Number.__parseAndValidateLong'}});
defineClass(58, 1, {3:1, 58:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 58);
function $compareTo_2(this$static, b){
  return compare_5((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

$compareTo_2.displayName = 'java.lang.Double.$compareTo';
defineProperties($compareTo_2, {'name':{'value':'java.lang.Double.$compareTo'}});
function $compareTo_3(this$static, b){
  return $compareTo_2(this$static, castToDouble(b));
}

$compareTo_3.displayName = 'java.lang.Double.$compareTo';
defineProperties($compareTo_3, {'name':{'value':'java.lang.Double.$compareTo'}});
function $doubleValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

$doubleValue.displayName = 'java.lang.Double.$doubleValue';
defineProperties($doubleValue, {'name':{'value':'java.lang.Double.$doubleValue'}});
function $equals_3(this$static, o){
  return checkCriticalNotNull(this$static) , this$static === o;
}

$equals_3.displayName = 'java.lang.Double.$equals';
defineProperties($equals_3, {'name':{'value':'java.lang.Double.$equals'}});
function $getClass_3(){
  return Ljava_lang_Double_2_classLit;
}

$getClass_3.displayName = 'java.lang.Double.$getClass';
defineProperties($getClass_3, {'name':{'value':'java.lang.Double.$getClass'}});
function $hashCode_2(this$static){
  return round_int((checkCriticalNotNull(this$static) , this$static));
}

$hashCode_2.displayName = 'java.lang.Double.$hashCode';
defineProperties($hashCode_2, {'name':{'value':'java.lang.Double.$hashCode'}});
function compare_5(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return x_0 == 0?compare_5(1 / x_0, 1 / y_0):0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

compare_5.displayName = 'java.lang.Double.compare';
defineProperties(compare_5, {'name':{'value':'java.lang.Double.compare'}});
doubleCastMap = {3:1, 33:1, 119:1, 58:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 119);
function $compareTo_4(this$static, b){
  return compare_5(this$static.value_0, b.value_0);
}

$compareTo_4.displayName = 'java.lang.Float.$compareTo';
defineProperties($compareTo_4, {'name':{'value':'java.lang.Float.$compareTo'}});
function Float(value_0){
  this.value_0 = value_0;
}

Float.displayName = 'java.lang.Float.Float';
defineProperties(Float, {'name':{'value':'java.lang.Float.Float'}});
defineClass(30, 58, {3:1, 33:1, 30:1, 58:1}, Float);
_.compareTo = function compareTo_0(b){
  return $compareTo_4(this, castTo(b, 30));
}
;
_.compareTo.displayName = 'java.lang.Float.compareTo';
defineProperties(_.compareTo, {'name':{'value':'java.lang.Float.compareTo'}});
_.equals_0 = function equals_4(o){
  return instanceOf(o, 30) && $equals_3(this.value_0, castTo(o, 30).value_0);
}
;
_.equals_0.displayName = 'java.lang.Float.equals';
defineProperties(_.equals_0, {'name':{'value':'java.lang.Float.equals'}});
_.hashCode_0 = function hashCode_2(){
  return round_int(this.value_0);
}
;
_.hashCode_0.displayName = 'java.lang.Float.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.lang.Float.hashCode'}});
_.toString_0 = function toString_12(){
  return '' + this.value_0;
}
;
_.toString_0.displayName = 'java.lang.Float.toString';
defineProperties(_.toString_0, {'name':{'value':'java.lang.Float.toString'}});
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 30);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

IllegalArgumentException.displayName = 'java.lang.IllegalArgumentException.IllegalArgumentException';
defineProperties(IllegalArgumentException, {'name':{'value':'java.lang.IllegalArgumentException.IllegalArgumentException'}});
function IllegalArgumentException_0(message){
  RuntimeException_1.call(this, message);
}

IllegalArgumentException_0.displayName = 'java.lang.IllegalArgumentException.IllegalArgumentException';
defineProperties(IllegalArgumentException_0, {'name':{'value':'java.lang.IllegalArgumentException.IllegalArgumentException'}});
defineClass(49, 4, $intern_4, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 49);
function IllegalStateException(){
  RuntimeException.call(this);
}

IllegalStateException.displayName = 'java.lang.IllegalStateException.IllegalStateException';
defineProperties(IllegalStateException, {'name':{'value':'java.lang.IllegalStateException.IllegalStateException'}});
defineClass(123, 4, $intern_4, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 123);
function $compareTo_5(this$static, b){
  return compare_6(this$static.value_0, b.value_0);
}

$compareTo_5.displayName = 'java.lang.Integer.$compareTo';
defineProperties($compareTo_5, {'name':{'value':'java.lang.Integer.$compareTo'}});
function Integer(value_0){
  this.value_0 = value_0;
}

Integer.displayName = 'java.lang.Integer.Integer';
defineProperties(Integer, {'name':{'value':'java.lang.Integer.Integer'}});
function compare_6(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

compare_6.displayName = 'java.lang.Integer.compare';
defineProperties(compare_6, {'name':{'value':'java.lang.Integer.compare'}});
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
defineProperties(numberOfLeadingZeros_0, {'name':{'value':'java.lang.Integer.numberOfLeadingZeros'}});
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
defineProperties(numberOfTrailingZeros, {'name':{'value':'java.lang.Integer.numberOfTrailingZeros'}});
function valueOf_0(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    return $clinit_Integer$BoxedValues() , rebase = i + 128 , result = boxedValues[rebase] , !result && (result = boxedValues[rebase] = new Integer(i)) , result;
  }
  return new Integer(i);
}

valueOf_0.displayName = 'java.lang.Integer.valueOf';
defineProperties(valueOf_0, {'name':{'value':'java.lang.Integer.valueOf'}});
defineClass(23, 58, {3:1, 33:1, 23:1, 58:1}, Integer);
_.compareTo = function compareTo_1(b){
  return $compareTo_5(this, castTo(b, 23));
}
;
_.compareTo.displayName = 'java.lang.Integer.compareTo';
defineProperties(_.compareTo, {'name':{'value':'java.lang.Integer.compareTo'}});
_.equals_0 = function equals_5(o){
  return instanceOf(o, 23) && castTo(o, 23).value_0 == this.value_0;
}
;
_.equals_0.displayName = 'java.lang.Integer.equals';
defineProperties(_.equals_0, {'name':{'value':'java.lang.Integer.equals'}});
_.hashCode_0 = function hashCode_3(){
  return this.value_0;
}
;
_.hashCode_0.displayName = 'java.lang.Integer.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.lang.Integer.hashCode'}});
_.toString_0 = function toString_13(){
  return '' + this.value_0;
}
;
_.toString_0.displayName = 'java.lang.Integer.toString';
defineProperties(_.toString_0, {'name':{'value':'java.lang.Integer.toString'}});
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 23);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_2, 23, 256, 0, 1);
}

$clinit_Integer$BoxedValues.displayName = 'java.lang.Integer$BoxedValues.$clinit';
defineProperties($clinit_Integer$BoxedValues, {'name':{'value':'java.lang.Integer$BoxedValues.$clinit'}});
function get_0(i){
  $clinit_Integer$BoxedValues();
  var rebase, result;
  rebase = i + 128;
  result = boxedValues[rebase];
  !result && (result = boxedValues[rebase] = new Integer(i));
  return result;
}

get_0.displayName = 'java.lang.Integer$BoxedValues.get';
defineProperties(get_0, {'name':{'value':'java.lang.Integer$BoxedValues.get'}});
var boxedValues;
function $compareTo_6(this$static, b){
  return compare_7(this$static.value_0, b.value_0);
}

$compareTo_6.displayName = 'java.lang.Long.$compareTo';
defineProperties($compareTo_6, {'name':{'value':'java.lang.Long.$compareTo'}});
function Long(value_0){
  this.value_0 = value_0;
}

Long.displayName = 'java.lang.Long.Long';
defineProperties(Long, {'name':{'value':'java.lang.Long.Long'}});
function compare_7(x_0, y_0){
  return compare_0(x_0, y_0) < 0?-1:compare_0(x_0, y_0) > 0?1:0;
}

compare_7.displayName = 'java.lang.Long.compare';
defineProperties(compare_7, {'name':{'value':'java.lang.Long.compare'}});
function hashCode_5(l){
  return toInt_0(shru_0(l, 32)) ^ toInt_0(l);
}

hashCode_5.displayName = 'java.lang.Long.hashCode';
defineProperties(hashCode_5, {'name':{'value':'java.lang.Long.hashCode'}});
function valueOf_1(l){
  var rebase, result;
  if (compare_0(l, -129) > 0 && compare_0(l, 128) < 0) {
    return $clinit_Long$BoxedValues() , rebase = toInt_0(l) + 128 , result = boxedValues_0[rebase] , !result && (result = boxedValues_0[rebase] = new Long(l)) , result;
  }
  return new Long(l);
}

valueOf_1.displayName = 'java.lang.Long.valueOf';
defineProperties(valueOf_1, {'name':{'value':'java.lang.Long.valueOf'}});
defineClass(43, 58, {3:1, 33:1, 43:1, 58:1}, Long);
_.compareTo = function compareTo_2(b){
  return $compareTo_6(this, castTo(b, 43));
}
;
_.compareTo.displayName = 'java.lang.Long.compareTo';
defineProperties(_.compareTo, {'name':{'value':'java.lang.Long.compareTo'}});
_.equals_0 = function equals_6(o){
  return instanceOf(o, 43) && eq(castTo(o, 43).value_0, this.value_0);
}
;
_.equals_0.displayName = 'java.lang.Long.equals';
defineProperties(_.equals_0, {'name':{'value':'java.lang.Long.equals'}});
_.hashCode_0 = function hashCode_4(){
  return hashCode_5(this.value_0);
}
;
_.hashCode_0.displayName = 'java.lang.Long.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.lang.Long.hashCode'}});
_.toString_0 = function toString_14(){
  return '' + toString_5(this.value_0);
}
;
_.toString_0.displayName = 'java.lang.Long.toString';
defineProperties(_.toString_0, {'name':{'value':'java.lang.Long.toString'}});
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 43);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_2, 43, 256, 0, 1);
}

$clinit_Long$BoxedValues.displayName = 'java.lang.Long$BoxedValues.$clinit';
defineProperties($clinit_Long$BoxedValues, {'name':{'value':'java.lang.Long$BoxedValues.$clinit'}});
function get_1(l){
  $clinit_Long$BoxedValues();
  var rebase, result;
  rebase = toInt_0(l) + 128;
  result = boxedValues_0[rebase];
  !result && (result = boxedValues_0[rebase] = new Long(l));
  return result;
}

get_1.displayName = 'java.lang.Long$BoxedValues.get';
defineProperties(get_1, {'name':{'value':'java.lang.Long$BoxedValues.get'}});
var boxedValues_0;
defineClass(281, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

NullPointerException.displayName = 'java.lang.NullPointerException.NullPointerException';
defineProperties(NullPointerException, {'name':{'value':'java.lang.NullPointerException.NullPointerException'}});
function NullPointerException_0(typeError){
  JsException_0.call(this, typeError);
}

NullPointerException_0.displayName = 'java.lang.NullPointerException.NullPointerException';
defineProperties(NullPointerException_0, {'name':{'value':'java.lang.NullPointerException.NullPointerException'}});
function NullPointerException_1(message){
  RuntimeException_1.call(this, message);
}

NullPointerException_1.displayName = 'java.lang.NullPointerException.NullPointerException';
defineProperties(NullPointerException_1, {'name':{'value':'java.lang.NullPointerException.NullPointerException'}});
defineClass(73, 56, $intern_4, NullPointerException, NullPointerException_0, NullPointerException_1);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
_.createError.displayName = 'java.lang.NullPointerException.createError';
defineProperties(_.createError, {'name':{'value':'java.lang.NullPointerException.createError'}});
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 73);
function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = emptyMethod;
  var i;
  maxDigitsForRadix = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_12, 10, 15, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initUnidimensionalArray(I_classLit, $intern_12, 10, 37, 15, 1);
  maxLengthForRadix = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_12, 10, 15, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initUnidimensionalArray(J_classLit, $intern_12, 10, 37, 14, 1);
  for (i = 2; i <= 36; i++) {
    maxDigitsRadixPower[i] = round_int($wnd.Math.pow(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div($intern_25, maxDigitsRadixPower[i]);
  }
}

$clinit_Number$__ParseLong.displayName = 'java.lang.Number$__ParseLong.$clinit';
defineProperties($clinit_Number$__ParseLong, {'name':{'value':'java.lang.Number$__ParseLong.$clinit'}});
var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

NumberFormatException.displayName = 'java.lang.NumberFormatException.NumberFormatException';
defineProperties(NumberFormatException, {'name':{'value':'java.lang.NumberFormatException.NumberFormatException'}});
defineClass(14, 49, {3:1, 7:1, 14:1, 4:1, 8:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 14);
function StackTraceElement(methodName, fileName){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = -1;
}

StackTraceElement.displayName = 'java.lang.StackTraceElement.StackTraceElement';
defineProperties(StackTraceElement, {'name':{'value':'java.lang.StackTraceElement.StackTraceElement'}});
defineClass(42, 1, {3:1, 42:1}, StackTraceElement);
_.equals_0 = function equals_7(other){
  var st;
  if (instanceOf(other, 42)) {
    st = castTo(other, 42);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.equals_0.displayName = 'java.lang.StackTraceElement.equals';
defineProperties(_.equals_0, {'name':{'value':'java.lang.StackTraceElement.equals'}});
_.hashCode_0 = function hashCode_6(){
  return hashCode_12(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf_0(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.hashCode_0.displayName = 'java.lang.StackTraceElement.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.lang.StackTraceElement.hashCode'}});
_.toString_0 = function toString_15(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.toString_0.displayName = 'java.lang.StackTraceElement.toString';
defineProperties(_.toString_0, {'name':{'value':'java.lang.StackTraceElement.toString'}});
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 42);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

$charAt.displayName = 'java.lang.String.$charAt';
defineProperties($charAt, {'name':{'value':'java.lang.String.$charAt'}});
function $compareTo_7(this$static, other){
  return $compareTo_8(this$static, castToString(other));
}

$compareTo_7.displayName = 'java.lang.String.$compareTo';
defineProperties($compareTo_7, {'name':{'value':'java.lang.String.$compareTo'}});
function $compareTo_8(this$static, other){
  var a, b;
  a = (checkCriticalNotNull(this$static) , this$static);
  b = (checkCriticalNotNull(other) , other);
  return a == b?0:a < b?-1:1;
}

$compareTo_8.displayName = 'java.lang.String.$compareTo';
defineProperties($compareTo_8, {'name':{'value':'java.lang.String.$compareTo'}});
function $compareToIgnoreCase(this$static, other){
  return $compareTo_8(this$static.toLowerCase(), other.toLowerCase());
}

$compareToIgnoreCase.displayName = 'java.lang.String.$compareToIgnoreCase';
defineProperties($compareToIgnoreCase, {'name':{'value':'java.lang.String.$compareToIgnoreCase'}});
function $equals_4(this$static, other){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other);
}

$equals_4.displayName = 'java.lang.String.$equals';
defineProperties($equals_4, {'name':{'value':'java.lang.String.$equals'}});
function $getClass_4(){
  return Ljava_lang_String_2_classLit;
}

$getClass_4.displayName = 'java.lang.String.$getClass';
defineProperties($getClass_4, {'name':{'value':'java.lang.String.$getClass'}});
function $hashCode_3(this$static){
  var h, i;
  h = 0;
  for (i = 0; i < this$static.length; i++) {
    h = (h << 5) - h + (checkCriticalStringElementIndex(i, this$static.length) , this$static.charCodeAt(i)) | 0;
  }
  return h;
}

$hashCode_3.displayName = 'java.lang.String.$hashCode';
defineProperties($hashCode_3, {'name':{'value':'java.lang.String.$hashCode'}});
function $lastIndexOf(this$static, str, start_0){
  return start_0 < 0?-1:this$static.lastIndexOf(str, start_0);
}

$lastIndexOf.displayName = 'java.lang.String.$lastIndexOf';
defineProperties($lastIndexOf, {'name':{'value':'java.lang.String.$lastIndexOf'}});
function $regionMatches(this$static, toffset, other, len){
  var left, right;
  checkCriticalNotNull(other);
  if (toffset < 0) {
    return false;
  }
  if (toffset + len > this$static.length || len > other.length) {
    return false;
  }
  if (len <= 0) {
    return true;
  }
  left = this$static.substr(toffset, len);
  right = other.substr(0, len);
  return $equals_4(left, right);
}

$regionMatches.displayName = 'java.lang.String.$regionMatches';
defineProperties($regionMatches, {'name':{'value':'java.lang.String.$regionMatches'}});
function $replace(this$static, from, to){
  var hex, number, regex, replace;
  hex = (number = from >>> 0 , number.toString(16));
  regex = '\\u' + $substring_0('0000', hex.length) + hex;
  replace = String.fromCharCode(to);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

$replace.displayName = 'java.lang.String.$replace';
defineProperties($replace, {'name':{'value':'java.lang.String.$replace'}});
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
      if (lastTrail == null && matchIndex == 0 && matchObj[0].length == 0) {
        trail = $substring_1(trail, matchIndex + matchObj[0].length, trail.length);
        compiled.lastIndex = 0;
        lastTrail = trail;
        continue;
      }
      out[count] = (checkCriticalStringBounds(0, matchIndex, trail.length) , trail.substr(0, matchIndex));
      trail = $substring_1(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = (checkCriticalStringBounds(0, 1, trail.length) , trail.substr(0, 1));
        trail = (checkCriticalStringElementIndex(1, trail.length + 1) , trail.substr(1));
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
defineProperties($split, {'name':{'value':'java.lang.String.$split'}});
function $substring_0(this$static, beginIndex){
  checkCriticalStringElementIndex(beginIndex, this$static.length + 1);
  return this$static.substr(beginIndex);
}

$substring_0.displayName = 'java.lang.String.$substring';
defineProperties($substring_0, {'name':{'value':'java.lang.String.$substring'}});
function $substring_1(this$static, beginIndex, endIndex){
  checkCriticalStringBounds(beginIndex, endIndex, this$static.length);
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

$substring_1.displayName = 'java.lang.String.$substring';
defineProperties($substring_1, {'name':{'value':'java.lang.String.$substring'}});
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
  return start_0 > 0 || end < length_0?(checkCriticalStringBounds(start_0, end, this$static.length) , this$static.substr(start_0, end - start_0)):this$static;
}

$trim.displayName = 'java.lang.String.$trim';
defineProperties($trim, {'name':{'value':'java.lang.String.$trim'}});
function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

fromCharCode.displayName = 'java.lang.String.fromCharCode';
defineProperties(fromCharCode, {'name':{'value':'java.lang.String.fromCharCode'}});
function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_18) {
    hiSurrogate = 55296 + (codePoint - $intern_18 >> 10 & 1023) & $intern_0;
    loSurrogate = 56320 + (codePoint - $intern_18 & 1023) & $intern_0;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_0);
  }
}

fromCodePoint.displayName = 'java.lang.String.fromCodePoint';
defineProperties(fromCodePoint, {'name':{'value':'java.lang.String.fromCodePoint'}});
function valueOf_2(x_0){
  return valueOf_3(x_0, x_0.length);
}

valueOf_2.displayName = 'java.lang.String.valueOf';
defineProperties(valueOf_2, {'name':{'value':'java.lang.String.valueOf'}});
function valueOf_3(x_0, count){
  var batchEnd, batchStart, end, s;
  end = count;
  checkCriticalStringBounds(0, end, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

valueOf_3.displayName = 'java.lang.String.valueOf';
defineProperties(valueOf_3, {'name':{'value':'java.lang.String.valueOf'}});
stringCastMap = {3:1, 115:1, 33:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_0(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

$append_0.displayName = 'java.lang.StringBuilder.$append';
defineProperties($append_0, {'name':{'value':'java.lang.StringBuilder.$append'}});
function $append_1(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

$append_1.displayName = 'java.lang.StringBuilder.$append';
defineProperties($append_1, {'name':{'value':'java.lang.StringBuilder.$append'}});
function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

$append_2.displayName = 'java.lang.StringBuilder.$append';
defineProperties($append_2, {'name':{'value':'java.lang.StringBuilder.$append'}});
function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

$append_3.displayName = 'java.lang.StringBuilder.$append';
defineProperties($append_3, {'name':{'value':'java.lang.StringBuilder.$append'}});
function $append_4(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

$append_4.displayName = 'java.lang.StringBuilder.$append';
defineProperties($append_4, {'name':{'value':'java.lang.StringBuilder.$append'}});
function $insert(this$static, index_0, x_0){
  $replace0(this$static, index_0, index_0, x_0);
  return this$static;
}

$insert.displayName = 'java.lang.StringBuilder.$insert';
defineProperties($insert, {'name':{'value':'java.lang.StringBuilder.$insert'}});
function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

StringBuilder.displayName = 'java.lang.StringBuilder.StringBuilder';
defineProperties(StringBuilder, {'name':{'value':'java.lang.StringBuilder.StringBuilder'}});
function StringBuilder_0(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

StringBuilder_0.displayName = 'java.lang.StringBuilder.StringBuilder';
defineProperties(StringBuilder_0, {'name':{'value':'java.lang.StringBuilder.StringBuilder'}});
defineClass(18, 87, {115:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 18);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

StringIndexOutOfBoundsException.displayName = 'java.lang.StringIndexOutOfBoundsException.StringIndexOutOfBoundsException';
defineProperties(StringIndexOutOfBoundsException, {'name':{'value':'java.lang.StringIndexOutOfBoundsException.StringIndexOutOfBoundsException'}});
defineClass(89, 50, $intern_4, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 89);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream;
  out_0 = new PrintStream;
}

$clinit_System.displayName = 'java.lang.System.$clinit';
defineProperties($clinit_System, {'name':{'value':'java.lang.System.$clinit'}});
function arraycopy(src_0, srcOfs, dest, destOfs, len){
  $clinit_System();
  var destArray, destComp, destEnd, destType, srcArray, srcComp, srcType;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkCriticalArrayType_0((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkCriticalArrayType_0((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkCriticalArrayType_0((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  checkArrayCopyIndicies(src_0, srcOfs, dest, destOfs, len);
  if ((srcComp.modifiers & 1) == 0 && srcType != destType) {
    srcArray = castToArray(src_0);
    destArray = castToArray(dest);
    if (maskUndefined(src_0) === maskUndefined(dest) && srcOfs < destOfs) {
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
   else {
    copy_0(src_0, srcOfs, dest, destOfs, len);
  }
}

arraycopy.displayName = 'java.lang.System.arraycopy';
defineProperties(arraycopy, {'name':{'value':'java.lang.System.arraycopy'}});
function checkArrayCopyIndicies(src_0, srcOfs, dest, destOfs, len){
  var destlen, srclen;
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

checkArrayCopyIndicies.displayName = 'java.lang.System.checkArrayCopyIndicies';
defineProperties(checkArrayCopyIndicies, {'name':{'value':'java.lang.System.checkArrayCopyIndicies'}});
defineClass(287, 1, {});
var err, out_0;
function UnsupportedOperationException(){
  RuntimeException_1.call(this, 'Remove not supported on this list');
}

UnsupportedOperationException.displayName = 'java.lang.UnsupportedOperationException.UnsupportedOperationException';
defineProperties(UnsupportedOperationException, {'name':{'value':'java.lang.UnsupportedOperationException.UnsupportedOperationException'}});
defineClass(124, 4, $intern_4, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 124);
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
defineProperties($addAll, {'name':{'value':'java.util.AbstractCollection.$addAll'}});
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
defineProperties($advanceToFind, {'name':{'value':'java.util.AbstractCollection.$advanceToFind'}});
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
defineProperties($containsAll, {'name':{'value':'java.util.AbstractCollection.$containsAll'}});
function $toArray(this$static){
  return $toArray_0(this$static, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, $size(this$static.map_0), 5, 1));
}

$toArray.displayName = 'java.util.AbstractCollection.$toArray';
defineProperties($toArray, {'name':{'value':'java.util.AbstractCollection.$toArray'}});
function $toArray_0(this$static, a){
  var entry, i, it, outerIter, result, size_0;
  size_0 = $size(this$static.map_0);
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  result = a;
  it = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter));
  for (i = 0; i < size_0; ++i) {
    setCheck(result, i, (entry = $next_1(it.val$outerIter2) , entry.getKey()));
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

$toArray_0.displayName = 'java.util.AbstractCollection.$toArray';
defineProperties($toArray_0, {'name':{'value':'java.util.AbstractCollection.$toArray'}});
function $toString_4(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    $add_2(joiner, maskUndefined(e) === maskUndefined(this$static)?'(this Collection)':e == null?'null':toString_6(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

$toString_4.displayName = 'java.util.AbstractCollection.$toString';
defineProperties($toString_4, {'name':{'value':'java.util.AbstractCollection.$toString'}});
defineClass(227, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.contains_0.displayName = 'java.util.AbstractCollection.contains';
defineProperties(_.contains_0, {'name':{'value':'java.util.AbstractCollection.contains'}});
_.toString_0 = function toString_16(){
  return $toString_4(this);
}
;
_.toString_0.displayName = 'java.util.AbstractCollection.toString';
defineProperties(_.toString_0, {'name':{'value':'java.util.AbstractCollection.toString'}});
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 227);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = instanceOfString(key)?key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_6(this$static.stringMap, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

$containsEntry.displayName = 'java.util.AbstractMap.$containsEntry';
defineProperties($containsEntry, {'name':{'value':'java.util.AbstractMap.$containsEntry'}});
function $toString_5(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_6(o);
}

$toString_5.displayName = 'java.util.AbstractMap.$toString';
defineProperties($toString_5, {'name':{'value':'java.util.AbstractMap.$toString'}});
function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

getEntryValueOrNull.displayName = 'java.util.AbstractMap.getEntryValueOrNull';
defineProperties(getEntryValueOrNull, {'name':{'value':'java.util.AbstractMap.getEntryValueOrNull'}});
defineClass(230, 1, {110:1});
_.equals_0 = function equals_8(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 35)) {
    return false;
  }
  otherMap = castTo(obj, 110);
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
defineProperties(_.equals_0, {'name':{'value':'java.util.AbstractMap.equals'}});
_.hashCode_0 = function hashCode_7(){
  return hashCode_13(new AbstractHashMap$EntrySet(this));
}
;
_.hashCode_0.displayName = 'java.util.AbstractMap.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.util.AbstractMap.hashCode'}});
_.toString_0 = function toString_17(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    $add_2(joiner, $toString_5(this, entry.getKey()) + '=' + $toString_5(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
_.toString_0.displayName = 'java.util.AbstractMap.toString';
defineProperties(_.toString_0, {'name':{'value':'java.util.AbstractMap.toString'}});
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 230);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

$containsKey.displayName = 'java.util.AbstractHashMap.$containsKey';
defineProperties($containsKey, {'name':{'value':'java.util.AbstractHashMap.$containsKey'}});
function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

$containsValue.displayName = 'java.util.AbstractHashMap.$containsValue';
defineProperties($containsValue, {'name':{'value':'java.util.AbstractHashMap.$containsValue'}});
function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 32);
    if ($equals_5(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

$containsValue_0.displayName = 'java.util.AbstractHashMap.$containsValue';
defineProperties($containsValue_0, {'name':{'value':'java.util.AbstractHashMap.$containsValue'}});
function $get_3(this$static, key){
  return getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

$get_3.displayName = 'java.util.AbstractHashMap.$get';
defineProperties($get_3, {'name':{'value':'java.util.AbstractHashMap.$get'}});
function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_6(this$static.stringMap, key);
}

$getStringValue.displayName = 'java.util.AbstractHashMap.$getStringValue';
defineProperties($getStringValue, {'name':{'value':'java.util.AbstractHashMap.$getStringValue'}});
function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key);
}

$hasStringValue.displayName = 'java.util.AbstractHashMap.$hasStringValue';
defineProperties($hasStringValue, {'name':{'value':'java.util.AbstractHashMap.$hasStringValue'}});
function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

$put.displayName = 'java.util.AbstractHashMap.$put';
defineProperties($put, {'name':{'value':'java.util.AbstractHashMap.$put'}});
function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

$putStringValue.displayName = 'java.util.AbstractHashMap.$putStringValue';
defineProperties($putStringValue, {'name':{'value':'java.util.AbstractHashMap.$putStringValue'}});
function $remove(this$static, key){
  return $remove_3(this$static.hashCodeMap, key);
}

$remove.displayName = 'java.util.AbstractHashMap.$remove';
defineProperties($remove, {'name':{'value':'java.util.AbstractHashMap.$remove'}});
function $reset_1(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  ++this$static.modCount;
}

$reset_1.displayName = 'java.util.AbstractHashMap.$reset';
defineProperties($reset_1, {'name':{'value':'java.util.AbstractHashMap.$reset'}});
function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

$size.displayName = 'java.util.AbstractHashMap.$size';
defineProperties($size, {'name':{'value':'java.util.AbstractHashMap.$size'}});
function AbstractHashMap(){
  $reset_1(this);
}

AbstractHashMap.displayName = 'java.util.AbstractHashMap.AbstractHashMap';
defineProperties(AbstractHashMap, {'name':{'value':'java.util.AbstractHashMap.AbstractHashMap'}});
function AbstractHashMap_0(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_1(this);
}

AbstractHashMap_0.displayName = 'java.util.AbstractHashMap.AbstractHashMap';
defineProperties(AbstractHashMap_0, {'name':{'value':'java.util.AbstractHashMap.AbstractHashMap'}});
function AbstractHashMap_1(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_1(this);
}

AbstractHashMap_1.displayName = 'java.util.AbstractHashMap.AbstractHashMap';
defineProperties(AbstractHashMap_1, {'name':{'value':'java.util.AbstractHashMap.AbstractHashMap'}});
defineClass(79, 230, {110:1});
_.modCount = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 79);
defineClass(229, 227, {71:1});
_.equals_0 = function equals_9(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 71)) {
    return false;
  }
  other = castTo(o, 71);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.equals_0.displayName = 'java.util.AbstractSet.equals';
defineProperties(_.equals_0, {'name':{'value':'java.util.AbstractSet.equals'}});
_.hashCode_0 = function hashCode_8(){
  return hashCode_13(this);
}
;
_.hashCode_0.displayName = 'java.util.AbstractSet.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.util.AbstractSet.hashCode'}});
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 229);
function $contains(this$static, o){
  if (instanceOf(o, 32)) {
    return $containsEntry(this$static.this$01, castTo(o, 32));
  }
  return false;
}

$contains.displayName = 'java.util.AbstractHashMap$EntrySet.$contains';
defineProperties($contains, {'name':{'value':'java.util.AbstractHashMap$EntrySet.$contains'}});
function $iterator(this$static){
  return new AbstractHashMap$EntrySetIterator(this$static.this$01);
}

$iterator.displayName = 'java.util.AbstractHashMap$EntrySet.$iterator';
defineProperties($iterator, {'name':{'value':'java.util.AbstractHashMap$EntrySet.$iterator'}});
function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

AbstractHashMap$EntrySet.displayName = 'java.util.AbstractHashMap$EntrySet.AbstractHashMap$EntrySet';
defineProperties(AbstractHashMap$EntrySet, {'name':{'value':'java.util.AbstractHashMap$EntrySet.AbstractHashMap$EntrySet'}});
defineClass(24, 229, {71:1}, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.contains_0.displayName = 'java.util.AbstractHashMap$EntrySet.contains';
defineProperties(_.contains_0, {'name':{'value':'java.util.AbstractHashMap$EntrySet.contains'}});
_.iterator = function iterator(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.iterator.displayName = 'java.util.AbstractHashMap$EntrySet.iterator';
defineProperties(_.iterator, {'name':{'value':'java.util.AbstractHashMap$EntrySet.iterator'}});
_.size_1 = function size_1(){
  return $size(this.this$01);
}
;
_.size_1.displayName = 'java.util.AbstractHashMap$EntrySet.size';
defineProperties(_.size_1, {'name':{'value':'java.util.AbstractHashMap$EntrySet.size'}});
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 24);
function $$init_26(this$static){
  this$static.stringMapEntries = new InternalStringMap$1(this$static.this$01.stringMap);
  this$static.current = this$static.stringMapEntries;
  this$static.hasNext = $computeHasNext(this$static);
  this$static.lastModCount = this$static.this$01.modCount;
}

$$init_26.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$$init';
defineProperties($$init_26, {'name':{'value':'java.util.AbstractHashMap$EntrySetIterator.$$init'}});
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
defineProperties($computeHasNext, {'name':{'value':'java.util.AbstractHashMap$EntrySetIterator.$computeHasNext'}});
function $hasNext(this$static){
  return this$static.hasNext;
}

$hasNext.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$hasNext';
defineProperties($hasNext, {'name':{'value':'java.util.AbstractHashMap$EntrySetIterator.$hasNext'}});
function $next_0(this$static){
  return $next_1(this$static);
}

$next_0.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$next';
defineProperties($next_0, {'name':{'value':'java.util.AbstractHashMap$EntrySetIterator.$next'}});
function $next_1(this$static){
  var rv;
  checkCriticalConcurrentModification(this$static.this$01.modCount, this$static.lastModCount);
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_0(), 32);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

$next_1.displayName = 'java.util.AbstractHashMap$EntrySetIterator.$next';
defineProperties($next_1, {'name':{'value':'java.util.AbstractHashMap$EntrySetIterator.$next'}});
function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.lastModCount = this.this$01.modCount;
}

AbstractHashMap$EntrySetIterator.displayName = 'java.util.AbstractHashMap$EntrySetIterator.AbstractHashMap$EntrySetIterator';
defineProperties(AbstractHashMap$EntrySetIterator, {'name':{'value':'java.util.AbstractHashMap$EntrySetIterator.AbstractHashMap$EntrySetIterator'}});
defineClass(25, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next_0(){
  return $next_1(this);
}
;
_.next_0.displayName = 'java.util.AbstractHashMap$EntrySetIterator.next';
defineProperties(_.next_0, {'name':{'value':'java.util.AbstractHashMap$EntrySetIterator.next'}});
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.hasNext_0.displayName = 'java.util.AbstractHashMap$EntrySetIterator.hasNext';
defineProperties(_.hasNext_0, {'name':{'value':'java.util.AbstractHashMap$EntrySetIterator.hasNext'}});
_.hasNext = false;
_.lastModCount = 0;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 25);
function $indexOf(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_14(toFind, this$static.get_0(i))) {
      return i;
    }
  }
  return -1;
}

$indexOf.displayName = 'java.util.AbstractList.$indexOf';
defineProperties($indexOf, {'name':{'value':'java.util.AbstractList.$indexOf'}});
function $iterator_0(this$static){
  return new AbstractList$IteratorImpl(this$static);
}

$iterator_0.displayName = 'java.util.AbstractList.$iterator';
defineProperties($iterator_0, {'name':{'value':'java.util.AbstractList.$iterator'}});
defineClass(228, 227, {64:1});
_.equals_0 = function equals_10(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 64)) {
    return false;
  }
  other = castTo(o, 64);
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
defineProperties(_.equals_0, {'name':{'value':'java.util.AbstractList.equals'}});
_.hashCode_0 = function hashCode_9(){
  return hashCode_14(this);
}
;
_.hashCode_0.displayName = 'java.util.AbstractList.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.util.AbstractList.hashCode'}});
_.iterator = function iterator_0(){
  return new AbstractList$IteratorImpl(this);
}
;
_.iterator.displayName = 'java.util.AbstractList.iterator';
defineProperties(_.iterator, {'name':{'value':'java.util.AbstractList.iterator'}});
_.remove_0 = function remove(index_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.remove_0.displayName = 'java.util.AbstractList.remove';
defineProperties(_.remove_0, {'name':{'value':'java.util.AbstractList.remove'}});
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 228);
function $$init_27(this$static){
}

$$init_27.displayName = 'java.util.AbstractList$IteratorImpl.$$init';
defineProperties($$init_27, {'name':{'value':'java.util.AbstractList$IteratorImpl.$$init'}});
function $hasNext_0(this$static){
  return this$static.i < this$static.this$01.size_1();
}

$hasNext_0.displayName = 'java.util.AbstractList$IteratorImpl.$hasNext';
defineProperties($hasNext_0, {'name':{'value':'java.util.AbstractList$IteratorImpl.$hasNext'}});
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.size_1());
  return this$static.this$01.get_0(this$static.last = this$static.i++);
}

$next_2.displayName = 'java.util.AbstractList$IteratorImpl.$next';
defineProperties($next_2, {'name':{'value':'java.util.AbstractList$IteratorImpl.$next'}});
function $remove_0(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

$remove_0.displayName = 'java.util.AbstractList$IteratorImpl.$remove';
defineProperties($remove_0, {'name':{'value':'java.util.AbstractList$IteratorImpl.$remove'}});
function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

AbstractList$IteratorImpl.displayName = 'java.util.AbstractList$IteratorImpl.AbstractList$IteratorImpl';
defineProperties(AbstractList$IteratorImpl, {'name':{'value':'java.util.AbstractList$IteratorImpl.AbstractList$IteratorImpl'}});
defineClass(75, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01.size_1();
}
;
_.hasNext_0.displayName = 'java.util.AbstractList$IteratorImpl.hasNext';
defineProperties(_.hasNext_0, {'name':{'value':'java.util.AbstractList$IteratorImpl.hasNext'}});
_.next_0 = function next_1(){
  return checkCriticalElement(this.i < this.this$01.size_1()) , this.this$01.get_0(this.last = this.i++);
}
;
_.next_0.displayName = 'java.util.AbstractList$IteratorImpl.next';
defineProperties(_.next_0, {'name':{'value':'java.util.AbstractList$IteratorImpl.next'}});
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 75);
function AbstractList$ListIteratorImpl(this$0){
  this.this$01 = this$0;
  checkCriticalPositionIndex(this$0.array.length);
  this.i = 0;
}

AbstractList$ListIteratorImpl.displayName = 'java.util.AbstractList$ListIteratorImpl.AbstractList$ListIteratorImpl';
defineProperties(AbstractList$ListIteratorImpl, {'name':{'value':'java.util.AbstractList$ListIteratorImpl.AbstractList$ListIteratorImpl'}});
defineClass(127, 75, {}, AbstractList$ListIteratorImpl);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 127);
function $iterator_1(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

$iterator_1.displayName = 'java.util.AbstractMap$1.$iterator';
defineProperties($iterator_1, {'name':{'value':'java.util.AbstractMap$1.$iterator'}});
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

AbstractMap$1.displayName = 'java.util.AbstractMap$1.AbstractMap$1';
defineProperties(AbstractMap$1, {'name':{'value':'java.util.AbstractMap$1.AbstractMap$1'}});
defineClass(92, 229, {71:1}, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.contains_0.displayName = 'java.util.AbstractMap$1.contains';
defineProperties(_.contains_0, {'name':{'value':'java.util.AbstractMap$1.contains'}});
_.iterator = function iterator_1(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.iterator.displayName = 'java.util.AbstractMap$1.iterator';
defineProperties(_.iterator, {'name':{'value':'java.util.AbstractMap$1.iterator'}});
_.size_1 = function size_2(){
  return $size(this.this$01);
}
;
_.size_1.displayName = 'java.util.AbstractMap$1.size';
defineProperties(_.size_1, {'name':{'value':'java.util.AbstractMap$1.size'}});
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 92);
function $next_3(this$static){
  var entry;
  entry = $next_1(this$static.val$outerIter2);
  return entry.getKey();
}

$next_3.displayName = 'java.util.AbstractMap$1$1.$next';
defineProperties($next_3, {'name':{'value':'java.util.AbstractMap$1$1.$next'}});
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

AbstractMap$1$1.displayName = 'java.util.AbstractMap$1$1.AbstractMap$1$1';
defineProperties(AbstractMap$1$1, {'name':{'value':'java.util.AbstractMap$1$1.AbstractMap$1$1'}});
defineClass(76, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.hasNext_0.displayName = 'java.util.AbstractMap$1$1.hasNext';
defineProperties(_.hasNext_0, {'name':{'value':'java.util.AbstractMap$1$1.hasNext'}});
_.next_0 = function next_2(){
  var entry;
  return entry = $next_1(this.val$outerIter2) , entry.getKey();
}
;
_.next_0.displayName = 'java.util.AbstractMap$1$1.next';
defineProperties(_.next_0, {'name':{'value':'java.util.AbstractMap$1$1.next'}});
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 76);
function $iterator_2(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$2$1(outerIter);
}

$iterator_2.displayName = 'java.util.AbstractMap$2.$iterator';
defineProperties($iterator_2, {'name':{'value':'java.util.AbstractMap$2.$iterator'}});
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

AbstractMap$2.displayName = 'java.util.AbstractMap$2.AbstractMap$2';
defineProperties(AbstractMap$2, {'name':{'value':'java.util.AbstractMap$2.AbstractMap$2'}});
defineClass(59, 227, {}, AbstractMap$2);
_.contains_0 = function contains_2(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.contains_0.displayName = 'java.util.AbstractMap$2.contains';
defineProperties(_.contains_0, {'name':{'value':'java.util.AbstractMap$2.contains'}});
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.iterator.displayName = 'java.util.AbstractMap$2.iterator';
defineProperties(_.iterator, {'name':{'value':'java.util.AbstractMap$2.iterator'}});
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
_.size_1.displayName = 'java.util.AbstractMap$2.size';
defineProperties(_.size_1, {'name':{'value':'java.util.AbstractMap$2.size'}});
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 59);
function $hasNext_1(this$static){
  return this$static.val$outerIter2.hasNext;
}

$hasNext_1.displayName = 'java.util.AbstractMap$2$1.$hasNext';
defineProperties($hasNext_1, {'name':{'value':'java.util.AbstractMap$2$1.$hasNext'}});
function $next_4(this$static){
  var entry;
  entry = $next_1(this$static.val$outerIter2);
  return entry.getValue();
}

$next_4.displayName = 'java.util.AbstractMap$2$1.$next';
defineProperties($next_4, {'name':{'value':'java.util.AbstractMap$2$1.$next'}});
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

AbstractMap$2$1.displayName = 'java.util.AbstractMap$2$1.AbstractMap$2$1';
defineProperties(AbstractMap$2$1, {'name':{'value':'java.util.AbstractMap$2$1.AbstractMap$2$1'}});
defineClass(51, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.hasNext_0.displayName = 'java.util.AbstractMap$2$1.hasNext';
defineProperties(_.hasNext_0, {'name':{'value':'java.util.AbstractMap$2$1.hasNext'}});
_.next_0 = function next_3(){
  var entry;
  return entry = $next_1(this.val$outerIter2) , entry.getValue();
}
;
_.next_0.displayName = 'java.util.AbstractMap$2$1.next';
defineProperties(_.next_0, {'name':{'value':'java.util.AbstractMap$2$1.next'}});
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 51);
function AbstractMap$AbstractEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

AbstractMap$AbstractEntry.displayName = 'java.util.AbstractMap$AbstractEntry.AbstractMap$AbstractEntry';
defineProperties(AbstractMap$AbstractEntry, {'name':{'value':'java.util.AbstractMap$AbstractEntry.AbstractMap$AbstractEntry'}});
defineClass(128, 1, $intern_26);
_.equals_0 = function equals_11(other){
  var entry;
  if (!instanceOf(other, 32)) {
    return false;
  }
  entry = castTo(other, 32);
  return equals_14(this.key_0, entry.getKey()) && equals_14(this.value_0, entry.getValue());
}
;
_.equals_0.displayName = 'java.util.AbstractMap$AbstractEntry.equals';
defineProperties(_.equals_0, {'name':{'value':'java.util.AbstractMap$AbstractEntry.equals'}});
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getKey.displayName = 'java.util.AbstractMap$AbstractEntry.getKey';
defineProperties(_.getKey, {'name':{'value':'java.util.AbstractMap$AbstractEntry.getKey'}});
_.getValue = function getValue(){
  return this.value_0;
}
;
_.getValue.displayName = 'java.util.AbstractMap$AbstractEntry.getValue';
defineProperties(_.getValue, {'name':{'value':'java.util.AbstractMap$AbstractEntry.getValue'}});
_.hashCode_0 = function hashCode_10(){
  return hashCode_15(this.key_0) ^ hashCode_15(this.value_0);
}
;
_.hashCode_0.displayName = 'java.util.AbstractMap$AbstractEntry.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.util.AbstractMap$AbstractEntry.hashCode'}});
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.setValue.displayName = 'java.util.AbstractMap$AbstractEntry.setValue';
defineProperties(_.setValue, {'name':{'value':'java.util.AbstractMap$AbstractEntry.setValue'}});
_.toString_0 = function toString_18(){
  return this.key_0 + '=' + this.value_0;
}
;
_.toString_0.displayName = 'java.util.AbstractMap$AbstractEntry.toString';
defineProperties(_.toString_0, {'name':{'value':'java.util.AbstractMap$AbstractEntry.toString'}});
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 128);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

AbstractMap$SimpleEntry.displayName = 'java.util.AbstractMap$SimpleEntry.AbstractMap$SimpleEntry';
defineProperties(AbstractMap$SimpleEntry, {'name':{'value':'java.util.AbstractMap$SimpleEntry.AbstractMap$SimpleEntry'}});
defineClass(129, 128, $intern_26, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 129);
defineClass(232, 1, $intern_26);
_.equals_0 = function equals_12(other){
  var entry;
  if (!instanceOf(other, 32)) {
    return false;
  }
  entry = castTo(other, 32);
  return equals_14(this.val$entry2.value[0], entry.getKey()) && equals_14($getValue(this), entry.getValue());
}
;
_.equals_0.displayName = 'java.util.AbstractMapEntry.equals';
defineProperties(_.equals_0, {'name':{'value':'java.util.AbstractMapEntry.equals'}});
_.hashCode_0 = function hashCode_11(){
  return hashCode_15(this.val$entry2.value[0]) ^ hashCode_15($getValue(this));
}
;
_.hashCode_0.displayName = 'java.util.AbstractMapEntry.hashCode';
defineProperties(_.hashCode_0, {'name':{'value':'java.util.AbstractMapEntry.hashCode'}});
_.toString_0 = function toString_19(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
_.toString_0.displayName = 'java.util.AbstractMapEntry.toString';
defineProperties(_.toString_0, {'name':{'value':'java.util.AbstractMapEntry.toString'}});
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 232);
function $$init_28(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

$$init_28.displayName = 'java.util.ArrayList.$$init';
defineProperties($$init_28, {'name':{'value':'java.util.ArrayList.$$init'}});
function $add_0(this$static, o){
  this$static.array.push(o);
  return true;
}

$add_0.displayName = 'java.util.ArrayList.$add';
defineProperties($add_0, {'name':{'value':'java.util.ArrayList.$add'}});
function $contains_0(this$static, o){
  return $indexOf_0(this$static, o, 0) != -1;
}

$contains_0.displayName = 'java.util.ArrayList.$contains';
defineProperties($contains_0, {'name':{'value':'java.util.ArrayList.$contains'}});
function $get_4(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

$get_4.displayName = 'java.util.ArrayList.$get';
defineProperties($get_4, {'name':{'value':'java.util.ArrayList.$get'}});
function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_14(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

$indexOf_0.displayName = 'java.util.ArrayList.$indexOf';
defineProperties($indexOf_0, {'name':{'value':'java.util.ArrayList.$indexOf'}});
function $iterator_3(this$static){
  return new ArrayList$1(this$static);
}

$iterator_3.displayName = 'java.util.ArrayList.$iterator';
defineProperties($iterator_3, {'name':{'value':'java.util.ArrayList.$iterator'}});
function $remove_1(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array.splice(index_0, 1);
  return previous;
}

$remove_1.displayName = 'java.util.ArrayList.$remove';
defineProperties($remove_1, {'name':{'value':'java.util.ArrayList.$remove'}});
function $remove_2(this$static, o){
  var i;
  i = $indexOf_0(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  this$static.array.splice(i, 1);
  return true;
}

$remove_2.displayName = 'java.util.ArrayList.$remove';
defineProperties($remove_2, {'name':{'value':'java.util.ArrayList.$remove'}});
function $set_0(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

$set_0.displayName = 'java.util.ArrayList.$set';
defineProperties($set_0, {'name':{'value':'java.util.ArrayList.$set'}});
function $size_0(this$static){
  return this$static.array.length;
}

$size_0.displayName = 'java.util.ArrayList.$size';
defineProperties($size_0, {'name':{'value':'java.util.ArrayList.$size'}});
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
defineProperties($toArray_1, {'name':{'value':'java.util.ArrayList.$toArray'}});
function ArrayList(){
  $$init_28(this);
}

ArrayList.displayName = 'java.util.ArrayList.ArrayList';
defineProperties(ArrayList, {'name':{'value':'java.util.ArrayList.ArrayList'}});
function ArrayList_0(initialCapacity){
  $$init_28(this);
  checkCriticalArgument_0(initialCapacity >= 0, 'Initial capacity must not be negative');
}

ArrayList_0.displayName = 'java.util.ArrayList.ArrayList';
defineProperties(ArrayList_0, {'name':{'value':'java.util.ArrayList.ArrayList'}});
defineClass(22, 228, $intern_27, ArrayList, ArrayList_0);
_.contains_0 = function contains_3(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.contains_0.displayName = 'java.util.ArrayList.contains';
defineProperties(_.contains_0, {'name':{'value':'java.util.ArrayList.contains'}});
_.get_0 = function get_2(index_0){
  return $get_4(this, index_0);
}
;
_.get_0.displayName = 'java.util.ArrayList.get';
defineProperties(_.get_0, {'name':{'value':'java.util.ArrayList.get'}});
_.iterator = function iterator_3(){
  return new ArrayList$1(this);
}
;
_.iterator.displayName = 'java.util.ArrayList.iterator';
defineProperties(_.iterator, {'name':{'value':'java.util.ArrayList.iterator'}});
_.remove_0 = function remove_0(index_0){
  return $remove_1(this, index_0);
}
;
_.remove_0.displayName = 'java.util.ArrayList.remove';
defineProperties(_.remove_0, {'name':{'value':'java.util.ArrayList.remove'}});
_.size_1 = function size_4(){
  return this.array.length;
}
;
_.size_1.displayName = 'java.util.ArrayList.size';
defineProperties(_.size_1, {'name':{'value':'java.util.ArrayList.size'}});
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 22);
function $$init_29(this$static){
}

$$init_29.displayName = 'java.util.ArrayList$1.$$init';
defineProperties($$init_29, {'name':{'value':'java.util.ArrayList$1.$$init'}});
function $hasNext_2(this$static){
  return this$static.i < this$static.this$01.array.length;
}

$hasNext_2.displayName = 'java.util.ArrayList$1.$hasNext';
defineProperties($hasNext_2, {'name':{'value':'java.util.ArrayList$1.$hasNext'}});
function $next_5(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

$next_5.displayName = 'java.util.ArrayList$1.$next';
defineProperties($next_5, {'name':{'value':'java.util.ArrayList$1.$next'}});
function ArrayList$1(this$0){
  this.this$01 = this$0;
}

ArrayList$1.displayName = 'java.util.ArrayList$1.ArrayList$1';
defineProperties(ArrayList$1, {'name':{'value':'java.util.ArrayList$1.ArrayList$1'}});
defineClass(15, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.hasNext_0.displayName = 'java.util.ArrayList$1.hasNext';
defineProperties(_.hasNext_0, {'name':{'value':'java.util.ArrayList$1.hasNext'}});
_.next_0 = function next_4(){
  return $next_5(this);
}
;
_.next_0.displayName = 'java.util.ArrayList$1.next';
defineProperties(_.next_0, {'name':{'value':'java.util.ArrayList$1.next'}});
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 15);
function checkCopyOfRange(original, from, to){
  var len;
  checkCriticalArgument_0(from <= to, from + ' > ' + to);
  len = original.length;
  checkCriticalArrayBounds(from, from, len);
}

checkCopyOfRange.displayName = 'java.util.Arrays.checkCopyOfRange';
defineProperties(checkCopyOfRange, {'name':{'value':'java.util.Arrays.checkCopyOfRange'}});
function copyOfRange(original, from, to){
  var len;
  checkCriticalArgument_0(from <= to, from + ' > ' + to);
  len = original.length;
  checkCriticalArrayBounds(from, from, len);
  return copyPrimitiveArray(original, initUnidimensionalArray(B_classLit, $intern_12, 10, to - from, 15, 1), from, to);
}

copyOfRange.displayName = 'java.util.Arrays.copyOfRange';
defineProperties(copyOfRange, {'name':{'value':'java.util.Arrays.copyOfRange'}});
function copyPrimitiveArray(original, copy, from, to){
  var copyLen, len;
  len = original.length;
  copyLen = $wnd.Math.min(to, len) - from;
  copy_0(original, from, copy, 0, copyLen);
  return copy;
}

copyPrimitiveArray.displayName = 'java.util.Arrays.copyPrimitiveArray';
defineProperties(copyPrimitiveArray, {'name':{'value':'java.util.Arrays.copyPrimitiveArray'}});
function hashCode_12(a){
  var e, e$array, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$array = a , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

hashCode_12.displayName = 'java.util.Arrays.hashCode';
defineProperties(hashCode_12, {'name':{'value':'java.util.Arrays.hashCode'}});
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
defineProperties(insertionSort, {'name':{'value':'java.util.Arrays.insertionSort'}});
function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

merge.displayName = 'java.util.Arrays.merge';
defineProperties(merge, {'name':{'value':'java.util.Arrays.merge'}});
function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp;
  comp = ($clinit_Comparators() , !comp?INTERNAL_NATURAL_ORDER:comp);
  temp = x_0.slice(fromIndex, toIndex);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

mergeSort.displayName = 'java.util.Arrays.mergeSort';
defineProperties(mergeSort, {'name':{'value':'java.util.Arrays.mergeSort'}});
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
defineProperties(mergeSort_0, {'name':{'value':'java.util.Arrays.mergeSort'}});
function sort_0(x_0, c){
  mergeSort(x_0, 0, x_0.length, c);
}

sort_0.displayName = 'java.util.Arrays.sort';
defineProperties(sort_0, {'name':{'value':'java.util.Arrays.sort'}});
function $get_5(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

$get_5.displayName = 'java.util.Arrays$ArrayList.$get';
defineProperties($get_5, {'name':{'value':'java.util.Arrays$ArrayList.$get'}});
function $size_1(this$static){
  return this$static.array.length;
}

$size_1.displayName = 'java.util.Arrays$ArrayList.$size';
defineProperties($size_1, {'name':{'value':'java.util.Arrays$ArrayList.$size'}});
function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

Arrays$ArrayList.displayName = 'java.util.Arrays$ArrayList.Arrays$ArrayList';
defineProperties(Arrays$ArrayList, {'name':{'value':'java.util.Arrays$ArrayList.Arrays$ArrayList'}});
defineClass(155, 228, $intern_27, Arrays$ArrayList);
_.contains_0 = function contains_4(o){
  return $indexOf(this, o) != -1;
}
;
_.contains_0.displayName = 'java.util.Arrays$ArrayList.contains';
defineProperties(_.contains_0, {'name':{'value':'java.util.Arrays$ArrayList.contains'}});
_.get_0 = function get_3(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.get_0.displayName = 'java.util.Arrays$ArrayList.get';
defineProperties(_.get_0, {'name':{'value':'java.util.Arrays$ArrayList.get'}});
_.size_1 = function size_5(){
  return this.array.length;
}
;
_.size_1.displayName = 'java.util.Arrays$ArrayList.size';
defineProperties(_.size_1, {'name':{'value':'java.util.Arrays$ArrayList.size'}});
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 155);
function hashCode_13(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

hashCode_13.displayName = 'java.util.Collections.hashCode';
defineProperties(hashCode_13, {'name':{'value':'java.util.Collections.hashCode'}});
function hashCode_14(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

hashCode_14.displayName = 'java.util.Collections.hashCode';
defineProperties(hashCode_14, {'name':{'value':'java.util.Collections.hashCode'}});
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  INTERNAL_NATURAL_ORDER = new Comparators$NaturalOrderComparator;
}

$clinit_Comparators.displayName = 'java.util.Comparators.$clinit';
defineProperties($clinit_Comparators, {'name':{'value':'java.util.Comparators.$clinit'}});
var INTERNAL_NATURAL_ORDER;
function $compare_0(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}

$compare_0.displayName = 'java.util.Comparators$NaturalOrderComparator.$compare';
defineProperties($compare_0, {'name':{'value':'java.util.Comparators$NaturalOrderComparator.$compare'}});
function Comparators$NaturalOrderComparator(){
}

Comparators$NaturalOrderComparator.displayName = 'java.util.Comparators$NaturalOrderComparator.Comparators$NaturalOrderComparator';
defineProperties(Comparators$NaturalOrderComparator, {'name':{'value':'java.util.Comparators$NaturalOrderComparator.Comparators$NaturalOrderComparator'}});
defineClass(193, 1, $intern_12, Comparators$NaturalOrderComparator);
_.compare = function compare_8(a, b){
  return $compare_0(castTo(a, 33), castTo(b, 33));
}
;
_.compare.displayName = 'java.util.Comparators$NaturalOrderComparator.compare';
defineProperties(_.compare, {'name':{'value':'java.util.Comparators$NaturalOrderComparator.compare'}});
_.equals_0 = function equals_13(other){
  return this === other;
}
;
_.equals_0.displayName = 'java.util.Comparators$NaturalOrderComparator.equals';
defineProperties(_.equals_0, {'name':{'value':'java.util.Comparators$NaturalOrderComparator.equals'}});
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 193);
function ConcurrentModificationException(){
  RuntimeException.call(this);
}

ConcurrentModificationException.displayName = 'java.util.ConcurrentModificationException.ConcurrentModificationException';
defineProperties(ConcurrentModificationException, {'name':{'value':'java.util.ConcurrentModificationException.ConcurrentModificationException'}});
defineClass(204, 4, $intern_4, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 204);
function EmptyStackException(){
  RuntimeException.call(this);
}

EmptyStackException.displayName = 'java.util.EmptyStackException.EmptyStackException';
defineProperties(EmptyStackException, {'name':{'value':'java.util.EmptyStackException.EmptyStackException'}});
defineClass(102, 4, $intern_4, EmptyStackException);
var Ljava_util_EmptyStackException_2_classLit = createForClass('java.util', 'EmptyStackException', 102);
function $equals_5(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

$equals_5.displayName = 'java.util.HashMap.$equals';
defineProperties($equals_5, {'name':{'value':'java.util.HashMap.$equals'}});
function $getHashCode(key){
  var hashCode;
  if (key == null) {
    return 0;
  }
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}

$getHashCode.displayName = 'java.util.HashMap.$getHashCode';
defineProperties($getHashCode, {'name':{'value':'java.util.HashMap.$getHashCode'}});
function HashMap(){
  $reset_1(this);
}

HashMap.displayName = 'java.util.HashMap.HashMap';
defineProperties(HashMap, {'name':{'value':'java.util.HashMap.HashMap'}});
function HashMap_0(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_1(this);
}

HashMap_0.displayName = 'java.util.HashMap.HashMap';
defineProperties(HashMap_0, {'name':{'value':'java.util.HashMap.HashMap'}});
defineClass(35, 79, {3:1, 35:1, 110:1}, HashMap, HashMap_0);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 35);
function $add_1(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

$add_1.displayName = 'java.util.HashSet.$add';
defineProperties($add_1, {'name':{'value':'java.util.HashSet.$add'}});
function $contains_1(this$static, o){
  return $containsKey(this$static.map_0, o);
}

$contains_1.displayName = 'java.util.HashSet.$contains';
defineProperties($contains_1, {'name':{'value':'java.util.HashSet.$contains'}});
function $iterator_4(this$static){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}

$iterator_4.displayName = 'java.util.HashSet.$iterator';
defineProperties($iterator_4, {'name':{'value':'java.util.HashSet.$iterator'}});
function $size_2(this$static){
  return $size(this$static.map_0);
}

$size_2.displayName = 'java.util.HashSet.$size';
defineProperties($size_2, {'name':{'value':'java.util.HashSet.$size'}});
function HashSet(){
  this.map_0 = new HashMap;
}

HashSet.displayName = 'java.util.HashSet.HashSet';
defineProperties(HashSet, {'name':{'value':'java.util.HashSet.HashSet'}});
function HashSet_0(c){
  this.map_0 = new HashMap_0(c.array.length);
  $addAll(this, c);
}

HashSet_0.displayName = 'java.util.HashSet.HashSet';
defineProperties(HashSet_0, {'name':{'value':'java.util.HashSet.HashSet'}});
defineClass(98, 229, {3:1, 71:1}, HashSet, HashSet_0);
_.contains_0 = function contains_5(o){
  return $contains_1(this, o);
}
;
_.contains_0.displayName = 'java.util.HashSet.contains';
defineProperties(_.contains_0, {'name':{'value':'java.util.HashSet.contains'}});
_.iterator = function iterator_4(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.iterator.displayName = 'java.util.HashSet.iterator';
defineProperties(_.iterator, {'name':{'value':'java.util.HashSet.iterator'}});
_.size_1 = function size_6(){
  return $size(this.map_0);
}
;
_.size_1.displayName = 'java.util.HashSet.size';
defineProperties(_.size_1, {'name':{'value':'java.util.HashSet.size'}});
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 98);
function $$init_30(this$static){
  this$static.backingMap = new $wnd.Map;
}

$$init_30.displayName = 'java.util.InternalHashCodeMap.$$init';
defineProperties($$init_30, {'name':{'value':'java.util.InternalHashCodeMap.$$init'}});
function $findEntryInChain(key, chain){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_5(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

$findEntryInChain.displayName = 'java.util.InternalHashCodeMap.$findEntryInChain';
defineProperties($findEntryInChain, {'name':{'value':'java.util.InternalHashCodeMap.$findEntryInChain'}});
function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1):chain;
}

$getChainOrEmpty.displayName = 'java.util.InternalHashCodeMap.$getChainOrEmpty';
defineProperties($getChainOrEmpty, {'name':{'value':'java.util.InternalHashCodeMap.$getChainOrEmpty'}});
function $getEntry(this$static, key){
  return $findEntryInChain(key, $getChainOrEmpty(this$static, $getHashCode(key)));
}

$getEntry.displayName = 'java.util.InternalHashCodeMap.$getEntry';
defineProperties($getEntry, {'name':{'value':'java.util.InternalHashCodeMap.$getEntry'}});
function $iterator_5(this$static){
  return new InternalHashCodeMap$1(this$static);
}

$iterator_5.displayName = 'java.util.InternalHashCodeMap.$iterator';
defineProperties($iterator_5, {'name':{'value':'java.util.InternalHashCodeMap.$iterator'}});
function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = $getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1):chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  ++this$static.host_0.modCount;
  return null;
}

$put_0.displayName = 'java.util.InternalHashCodeMap.$put';
defineProperties($put_0, {'name':{'value':'java.util.InternalHashCodeMap.$put'}});
function $remove_3(this$static, key){
  var chain, chain0, entry, hashCode, i;
  hashCode = $getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1):chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_5(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap.delete(hashCode);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      ++this$static.host_0.modCount;
      return entry.getValue();
    }
  }
  return null;
}

$remove_3.displayName = 'java.util.InternalHashCodeMap.$remove';
defineProperties($remove_3, {'name':{'value':'java.util.InternalHashCodeMap.$remove'}});
function InternalHashCodeMap(host){
  this.backingMap = new $wnd.Map;
  this.host_0 = host;
}

InternalHashCodeMap.displayName = 'java.util.InternalHashCodeMap.InternalHashCodeMap';
defineProperties(InternalHashCodeMap, {'name':{'value':'java.util.InternalHashCodeMap.InternalHashCodeMap'}});
defineClass(184, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_5(){
  return new InternalHashCodeMap$1(this);
}
;
_.iterator.displayName = 'java.util.InternalHashCodeMap.iterator';
defineProperties(_.iterator, {'name':{'value':'java.util.InternalHashCodeMap.iterator'}});
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 184);
function $$init_31(this$static){
  this$static.chains = this$static.this$01.backingMap.entries();
  this$static.chain = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

$$init_31.displayName = 'java.util.InternalHashCodeMap$1.$$init';
defineProperties($$init_31, {'name':{'value':'java.util.InternalHashCodeMap$1.$$init'}});
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

InternalHashCodeMap$1.displayName = 'java.util.InternalHashCodeMap$1.InternalHashCodeMap$1';
defineProperties(InternalHashCodeMap$1, {'name':{'value':'java.util.InternalHashCodeMap$1.InternalHashCodeMap$1'}});
defineClass(96, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_5(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.next_0.displayName = 'java.util.InternalHashCodeMap$1.next';
defineProperties(_.next_0, {'name':{'value':'java.util.InternalHashCodeMap$1.next'}});
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
defineProperties(_.hasNext_0, {'name':{'value':'java.util.InternalHashCodeMap$1.hasNext'}});
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 96);
function $$init_32(this$static){
  this$static.backingMap = new $wnd.Map;
}

$$init_32.displayName = 'java.util.InternalStringMap.$$init';
defineProperties($$init_32, {'name':{'value':'java.util.InternalStringMap.$$init'}});
function $contains_2(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

$contains_2.displayName = 'java.util.InternalStringMap.$contains';
defineProperties($contains_2, {'name':{'value':'java.util.InternalStringMap.$contains'}});
function $get_6(this$static, key){
  return this$static.backingMap.get(key);
}

$get_6.displayName = 'java.util.InternalStringMap.$get';
defineProperties($get_6, {'name':{'value':'java.util.InternalStringMap.$get'}});
function $iterator_6(this$static){
  return new InternalStringMap$1(this$static);
}

$iterator_6.displayName = 'java.util.InternalStringMap.$iterator';
defineProperties($iterator_6, {'name':{'value':'java.util.InternalStringMap.$iterator'}});
function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    ++this$static.host_0.modCount;
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

$put_1.displayName = 'java.util.InternalStringMap.$put';
defineProperties($put_1, {'name':{'value':'java.util.InternalStringMap.$put'}});
function InternalStringMap(host){
  this.backingMap = new $wnd.Map;
  this.host_0 = host;
}

InternalStringMap.displayName = 'java.util.InternalStringMap.InternalStringMap';
defineProperties(InternalStringMap, {'name':{'value':'java.util.InternalStringMap.InternalStringMap'}});
defineClass(185, 1, {}, InternalStringMap);
_.iterator = function iterator_6(){
  return new InternalStringMap$1(this);
}
;
_.iterator.displayName = 'java.util.InternalStringMap.iterator';
defineProperties(_.iterator, {'name':{'value':'java.util.InternalStringMap.iterator'}});
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 185);
function $$init_33(this$static){
  this$static.entries_0 = this$static.this$01.backingMap.entries();
  this$static.current = this$static.entries_0.next();
}

$$init_33.displayName = 'java.util.InternalStringMap$1.$$init';
defineProperties($$init_33, {'name':{'value':'java.util.InternalStringMap$1.$$init'}});
function $next_6(this$static){
  this$static.last = this$static.current;
  this$static.current = this$static.entries_0.next();
  return new InternalStringMap$2(this$static.this$01, this$static.last, this$static.this$01.valueMod);
}

$next_6.displayName = 'java.util.InternalStringMap$1.$next';
defineProperties($next_6, {'name':{'value':'java.util.InternalStringMap$1.$next'}});
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

InternalStringMap$1.displayName = 'java.util.InternalStringMap$1.InternalStringMap$1';
defineProperties(InternalStringMap$1, {'name':{'value':'java.util.InternalStringMap$1.InternalStringMap$1'}});
defineClass(97, 1, {}, InternalStringMap$1);
_.next_0 = function next_6(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.next_0.displayName = 'java.util.InternalStringMap$1.next';
defineProperties(_.next_0, {'name':{'value':'java.util.InternalStringMap$1.next'}});
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
_.hasNext_0.displayName = 'java.util.InternalStringMap$1.hasNext';
defineProperties(_.hasNext_0, {'name':{'value':'java.util.InternalStringMap$1.hasNext'}});
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 97);
function $getKey(this$static){
  return this$static.val$entry2.value[0];
}

$getKey.displayName = 'java.util.InternalStringMap$2.$getKey';
defineProperties($getKey, {'name':{'value':'java.util.InternalStringMap$2.$getKey'}});
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_6(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

$getValue.displayName = 'java.util.InternalStringMap$2.$getValue';
defineProperties($getValue, {'name':{'value':'java.util.InternalStringMap$2.$getValue'}});
function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

InternalStringMap$2.displayName = 'java.util.InternalStringMap$2.InternalStringMap$2';
defineProperties(InternalStringMap$2, {'name':{'value':'java.util.InternalStringMap$2.InternalStringMap$2'}});
defineClass(186, 232, $intern_26, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getKey.displayName = 'java.util.InternalStringMap$2.getKey';
defineProperties(_.getKey, {'name':{'value':'java.util.InternalStringMap$2.getKey'}});
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.getValue.displayName = 'java.util.InternalStringMap$2.getValue';
defineProperties(_.getValue, {'name':{'value':'java.util.InternalStringMap$2.getValue'}});
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.setValue.displayName = 'java.util.InternalStringMap$2.setValue';
defineProperties(_.setValue, {'name':{'value':'java.util.InternalStringMap$2.setValue'}});
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 186);
function NoSuchElementException(){
  RuntimeException.call(this);
}

NoSuchElementException.displayName = 'java.util.NoSuchElementException.NoSuchElementException';
defineProperties(NoSuchElementException, {'name':{'value':'java.util.NoSuchElementException.NoSuchElementException'}});
defineClass(183, 4, $intern_4, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 183);
function equals_14(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

equals_14.displayName = 'java.util.Objects.equals';
defineProperties(equals_14, {'name':{'value':'java.util.Objects.equals'}});
function hashCode_15(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

hashCode_15.displayName = 'java.util.Objects.hashCode';
defineProperties(hashCode_15, {'name':{'value':'java.util.Objects.hashCode'}});
function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initUnidimensionalArray(D_classLit, $intern_12, 10, 25, 15, 1);
  twoToTheXMinus48 = initUnidimensionalArray(D_classLit, $intern_12, 10, 33, 15, 1);
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
defineProperties($clinit_Random, {'name':{'value':'java.util.Random.$clinit'}});
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
defineProperties($nextInt, {'name':{'value':'java.util.Random.$nextInt'}});
function $nextInternal(this$static){
  var carry, dval, h, hi, l, lo;
  hi = this$static.seedhi * $intern_28 + this$static.seedlo * 1502;
  lo = this$static.seedlo * $intern_28 + 11;
  carry = $wnd.Math.floor(lo * $intern_29);
  hi += carry;
  lo -= carry * $intern_30;
  hi %= $intern_30;
  this$static.seedhi = hi;
  this$static.seedlo = lo;
  h = this$static.seedhi * 128;
  l = $wnd.Math.floor(this$static.seedlo * twoToTheXMinus48[31]);
  dval = h + l;
  dval >= 2147483648 && (dval -= 4294967296);
  return dval;
}

$nextInternal.displayName = 'java.util.Random.$nextInternal';
defineProperties($nextInternal, {'name':{'value':'java.util.Random.$nextInternal'}});
function $setSeed_1(this$static, seedhi, seedlo){
  this$static.seedhi = seedhi ^ 1502;
  this$static.seedlo = seedlo ^ $intern_28;
}

$setSeed_1.displayName = 'java.util.Random.$setSeed';
defineProperties($setSeed_1, {'name':{'value':'java.util.Random.$setSeed'}});
function $setSeed_2(this$static, seed){
  $setSeed_1(this$static, toInt_0(and_0(shr_0(seed, 24), $intern_31)), toInt_0(and_0(seed, $intern_31)));
}

$setSeed_2.displayName = 'java.util.Random.$setSeed';
defineProperties($setSeed_2, {'name':{'value':'java.util.Random.$setSeed'}});
function Random(){
  $clinit_Random();
  var hi, lo, seed;
  seed = uniqueSeed++ + Date.now();
  hi = round_int($wnd.Math.floor(seed * $intern_29)) & $intern_31;
  lo = round_int(seed - hi * $intern_30);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ $intern_28;
}

Random.displayName = 'java.util.Random.Random';
defineProperties(Random, {'name':{'value':'java.util.Random.Random'}});
defineClass(200, 1, {}, Random);
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 200);
function $get_7(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $get_4(this$static.arrayList, index_0);
}

$get_7.displayName = 'java.util.Vector.$get';
defineProperties($get_7, {'name':{'value':'java.util.Vector.$get'}});
function $remove_4(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $remove_1(this$static.arrayList, index_0);
}

$remove_4.displayName = 'java.util.Vector.$remove';
defineProperties($remove_4, {'name':{'value':'java.util.Vector.$remove'}});
function $size_3(this$static){
  return this$static.arrayList.array.length;
}

$size_3.displayName = 'java.util.Vector.$size';
defineProperties($size_3, {'name':{'value':'java.util.Vector.$size'}});
function Vector(){
  this.arrayList = new ArrayList;
}

Vector.displayName = 'java.util.Vector.Vector';
defineProperties(Vector, {'name':{'value':'java.util.Vector.Vector'}});
function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new ArrayIndexOutOfBoundsException);
  }
}

checkArrayElementIndex.displayName = 'java.util.Vector.checkArrayElementIndex';
defineProperties(checkArrayElementIndex, {'name':{'value':'java.util.Vector.checkArrayElementIndex'}});
defineClass(190, 228, $intern_27);
_.contains_0 = function contains_6(elem){
  return $indexOf_0(this.arrayList, elem, 0) != -1;
}
;
_.contains_0.displayName = 'java.util.Vector.contains';
defineProperties(_.contains_0, {'name':{'value':'java.util.Vector.contains'}});
_.get_0 = function get_4(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , $get_4(this.arrayList, index_0);
}
;
_.get_0.displayName = 'java.util.Vector.get';
defineProperties(_.get_0, {'name':{'value':'java.util.Vector.get'}});
_.iterator = function iterator_7(){
  return new ArrayList$1(this.arrayList);
}
;
_.iterator.displayName = 'java.util.Vector.iterator';
defineProperties(_.iterator, {'name':{'value':'java.util.Vector.iterator'}});
_.remove_0 = function remove_1(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , $remove_1(this.arrayList, index_0);
}
;
_.remove_0.displayName = 'java.util.Vector.remove';
defineProperties(_.remove_0, {'name':{'value':'java.util.Vector.remove'}});
_.size_1 = function size_7(){
  return this.arrayList.array.length;
}
;
_.size_1.displayName = 'java.util.Vector.size';
defineProperties(_.size_1, {'name':{'value':'java.util.Vector.size'}});
_.toString_0 = function toString_20(){
  return $toString_4(this.arrayList);
}
;
_.toString_0.displayName = 'java.util.Vector.toString';
defineProperties(_.toString_0, {'name':{'value':'java.util.Vector.toString'}});
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 190);
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
defineProperties($peek, {'name':{'value':'java.util.Stack.$peek'}});
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
defineProperties($pop_0, {'name':{'value':'java.util.Stack.$pop'}});
function $push_1(this$static, o){
  $add_0(this$static.arrayList, o);
  return o;
}

$push_1.displayName = 'java.util.Stack.$push';
defineProperties($push_1, {'name':{'value':'java.util.Stack.$push'}});
function Stack(){
  this.arrayList = new ArrayList;
}

Stack.displayName = 'java.util.Stack.Stack';
defineProperties(Stack, {'name':{'value':'java.util.Stack.Stack'}});
defineClass(191, 190, $intern_27, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 191);
function $add_2(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_0(this$static.prefix)):$append_4(this$static.builder, this$static.delimiter);
  $append_3(this$static.builder, newElement);
  return this$static;
}

$add_2.displayName = 'java.util.StringJoiner.$add';
defineProperties($add_2, {'name':{'value':'java.util.StringJoiner.$add'}});
function $toString_6(this$static){
  return !this$static.builder?this$static.emptyValue:this$static.suffix.length == 0?this$static.builder.string:this$static.builder.string + ('' + this$static.suffix);
}

$toString_6.displayName = 'java.util.StringJoiner.$toString';
defineProperties($toString_6, {'name':{'value':'java.util.StringJoiner.$toString'}});
function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

StringJoiner.displayName = 'java.util.StringJoiner.StringJoiner';
defineProperties(StringJoiner, {'name':{'value':'java.util.StringJoiner.StringJoiner'}});
defineClass(88, 1, {}, StringJoiner);
_.toString_0 = function toString_21(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
_.toString_0.displayName = 'java.util.StringJoiner.toString';
defineProperties(_.toString_0, {'name':{'value':'java.util.StringJoiner.toString'}});
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 88);
function copy_0(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (len == 0) {
    return;
  }
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
defineProperties(copy_0, {'name':{'value':'javaemul.internal.ArrayHelper.copy'}});
defineClass(283, 1, {});
function stampJavaTypeInfo_1(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
}

stampJavaTypeInfo_1.displayName = 'javaemul.internal.ArrayStamper.stampJavaTypeInfo';
defineProperties(stampJavaTypeInfo_1, {'name':{'value':'javaemul.internal.ArrayStamper.stampJavaTypeInfo'}});
function getNextHash(){
  return ++nextHash;
}

getNextHash.displayName = 'javaemul.internal.HashCodes.getNextHash';
defineProperties(getNextHash, {'name':{'value':'javaemul.internal.HashCodes.getNextHash'}});
function getObjectIdentityHashCode(o){
  return o.$H || (o.$H = ++nextHash);
}

getObjectIdentityHashCode.displayName = 'javaemul.internal.HashCodes.getObjectIdentityHashCode';
defineProperties(getObjectIdentityHashCode, {'name':{'value':'javaemul.internal.HashCodes.getObjectIdentityHashCode'}});
var nextHash = 0;
function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

checkCriticalArgument.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArgument';
defineProperties(checkCriticalArgument, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalArgument'}});
function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

checkCriticalArgument_0.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArgument';
defineProperties(checkCriticalArgument_0, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalArgument'}});
function checkCriticalArrayBounds(start_0, end, length_0){
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException_0('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
  if (start_0 < 0 || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException_0('fromIndex: ' + start_0 + ', toIndex: ' + end + ', length: ' + length_0));
  }
}

checkCriticalArrayBounds.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArrayBounds';
defineProperties(checkCriticalArrayBounds, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalArrayBounds'}});
function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

checkCriticalArrayType.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArrayType';
defineProperties(checkCriticalArrayType, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalArrayType'}});
function checkCriticalArrayType_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new ArrayStoreException_0(errorMessage));
  }
}

checkCriticalArrayType_0.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalArrayType';
defineProperties(checkCriticalArrayType_0, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalArrayType'}});
function checkCriticalConcurrentModification(currentModCount, recordedModCount){
  if (currentModCount != recordedModCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

checkCriticalConcurrentModification.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalConcurrentModification';
defineProperties(checkCriticalConcurrentModification, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalConcurrentModification'}});
function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

checkCriticalElement.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalElement';
defineProperties(checkCriticalElement, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalElement'}});
function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

checkCriticalElementIndex.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalElementIndex';
defineProperties(checkCriticalElementIndex, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalElementIndex'}});
function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

checkCriticalNotNull.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalNotNull';
defineProperties(checkCriticalNotNull, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalNotNull'}});
function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_1(errorMessage));
  }
}

checkCriticalNotNull_0.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalNotNull';
defineProperties(checkCriticalNotNull_0, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalNotNull'}});
function checkCriticalPositionIndex(size_0){
  if (0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: 0, Size: ' + size_0));
  }
}

checkCriticalPositionIndex.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalPositionIndex';
defineProperties(checkCriticalPositionIndex, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalPositionIndex'}});
function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

checkCriticalState.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalState';
defineProperties(checkCriticalState, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalState'}});
function checkCriticalStringBounds(start_0, end, length_0){
  if (start_0 < 0 || end > length_0 || end < start_0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: ' + start_0 + ', toIndex: ' + end + ', length: ' + length_0));
  }
}

checkCriticalStringBounds.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalStringBounds';
defineProperties(checkCriticalStringBounds, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalStringBounds'}});
function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

checkCriticalStringElementIndex.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalStringElementIndex';
defineProperties(checkCriticalStringElementIndex, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalStringElementIndex'}});
function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

checkCriticalType.displayName = 'javaemul.internal.InternalPreconditions.checkCriticalType';
defineProperties(checkCriticalType, {'name':{'value':'javaemul.internal.InternalPreconditions.checkCriticalType'}});
function isUndefined(value_0){
  return value_0 === undefined;
}

isUndefined.displayName = 'javaemul.internal.JsUtils.isUndefined';
defineProperties(isUndefined, {'name':{'value':'javaemul.internal.JsUtils.isUndefined'}});
function toDoubleFromUnsignedInt(value_0){
  return value_0 >>> 0;
}

toDoubleFromUnsignedInt.displayName = 'javaemul.internal.JsUtils.toDoubleFromUnsignedInt';
defineProperties(toDoubleFromUnsignedInt, {'name':{'value':'javaemul.internal.JsUtils.toDoubleFromUnsignedInt'}});
function unsafeCastToBoolean(bool){
  return bool;
}

unsafeCastToBoolean.displayName = 'javaemul.internal.JsUtils.unsafeCastToBoolean';
defineProperties(unsafeCastToBoolean, {'name':{'value':'javaemul.internal.JsUtils.unsafeCastToBoolean'}});
function unsafeCastToDouble(number){
  return number;
}

unsafeCastToDouble.displayName = 'javaemul.internal.JsUtils.unsafeCastToDouble';
defineProperties(unsafeCastToDouble, {'name':{'value':'javaemul.internal.JsUtils.unsafeCastToDouble'}});
defineClass(275, 1, {});
defineClass(700, 1, {});
function AbstractIntegerDistribution(rng){
  this.random = rng;
}

AbstractIntegerDistribution.displayName = 'org.apache.commons.math3.distribution.AbstractIntegerDistribution.AbstractIntegerDistribution';
defineProperties(AbstractIntegerDistribution, {'name':{'value':'org.apache.commons.math3.distribution.AbstractIntegerDistribution.AbstractIntegerDistribution'}});
defineClass(205, 1, {});
var Lorg_apache_commons_math3_distribution_AbstractIntegerDistribution_2_classLit = createForClass('org.apache.commons.math3.distribution', 'AbstractIntegerDistribution', 205);
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
defineProperties($sample, {'name':{'value':'org.apache.commons.math3.distribution.UniformIntegerDistribution.$sample'}});
function UniformIntegerDistribution(rng, upper){
  this.random = rng;
  if (0 > upper) {
    throw toJs((valueOf_0(0) , valueOf_0(upper) , new NumberIsTooLargeException));
  }
  this.lower = 0;
  this.upper = upper;
}

UniformIntegerDistribution.displayName = 'org.apache.commons.math3.distribution.UniformIntegerDistribution.UniformIntegerDistribution';
defineProperties(UniformIntegerDistribution, {'name':{'value':'org.apache.commons.math3.distribution.UniformIntegerDistribution.UniformIntegerDistribution'}});
defineClass(206, 205, {}, UniformIntegerDistribution);
_.lower = 0;
_.upper = 0;
var Lorg_apache_commons_math3_distribution_UniformIntegerDistribution_2_classLit = createForClass('org.apache.commons.math3.distribution', 'UniformIntegerDistribution', 206);
function MathArithmeticException(){
  ArithmeticException.call(this);
  new ExceptionContext;
}

MathArithmeticException.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.MathArithmeticException';
defineProperties(MathArithmeticException, {'name':{'value':'org.apache.commons.math3.exception.MathArithmeticException.MathArithmeticException'}});
function MathArithmeticException_0(){
  ArithmeticException.call(this);
  new ExceptionContext;
}

MathArithmeticException_0.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.MathArithmeticException';
defineProperties(MathArithmeticException_0, {'name':{'value':'org.apache.commons.math3.exception.MathArithmeticException.MathArithmeticException'}});
defineClass(63, 74, $intern_4, MathArithmeticException, MathArithmeticException_0);
_.getLocalizedMessage = function getLocalizedMessage_0(){
  return null;
}
;
_.getLocalizedMessage.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.getLocalizedMessage';
defineProperties(_.getLocalizedMessage, {'name':{'value':'org.apache.commons.math3.exception.MathArithmeticException.getLocalizedMessage'}});
_.getMessage = function getMessage_1(){
  return null;
}
;
_.getMessage.displayName = 'org.apache.commons.math3.exception.MathArithmeticException.getMessage';
defineProperties(_.getMessage, {'name':{'value':'org.apache.commons.math3.exception.MathArithmeticException.getMessage'}});
var Lorg_apache_commons_math3_exception_MathArithmeticException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathArithmeticException', 63);
function MathIllegalArgumentException(){
  IllegalArgumentException.call(this);
  new ExceptionContext;
}

MathIllegalArgumentException.displayName = 'org.apache.commons.math3.exception.MathIllegalArgumentException.MathIllegalArgumentException';
defineProperties(MathIllegalArgumentException, {'name':{'value':'org.apache.commons.math3.exception.MathIllegalArgumentException.MathIllegalArgumentException'}});
defineClass(198, 49, $intern_4);
_.getLocalizedMessage = function getLocalizedMessage_1(){
  return null;
}
;
_.getLocalizedMessage.displayName = 'org.apache.commons.math3.exception.MathIllegalArgumentException.getLocalizedMessage';
defineProperties(_.getLocalizedMessage, {'name':{'value':'org.apache.commons.math3.exception.MathIllegalArgumentException.getLocalizedMessage'}});
_.getMessage = function getMessage_2(){
  return null;
}
;
_.getMessage.displayName = 'org.apache.commons.math3.exception.MathIllegalArgumentException.getMessage';
defineProperties(_.getMessage, {'name':{'value':'org.apache.commons.math3.exception.MathIllegalArgumentException.getMessage'}});
var Lorg_apache_commons_math3_exception_MathIllegalArgumentException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathIllegalArgumentException', 198);
function $clinit_MathIllegalNumberException(){
  $clinit_MathIllegalNumberException = emptyMethod;
  valueOf_0(0);
}

$clinit_MathIllegalNumberException.displayName = 'org.apache.commons.math3.exception.MathIllegalNumberException.$clinit';
defineProperties($clinit_MathIllegalNumberException, {'name':{'value':'org.apache.commons.math3.exception.MathIllegalNumberException.$clinit'}});
function MathIllegalNumberException(){
  IllegalArgumentException.call(this);
  new ExceptionContext;
}

MathIllegalNumberException.displayName = 'org.apache.commons.math3.exception.MathIllegalNumberException.MathIllegalNumberException';
defineProperties(MathIllegalNumberException, {'name':{'value':'org.apache.commons.math3.exception.MathIllegalNumberException.MathIllegalNumberException'}});
defineClass(106, 198, $intern_4);
var Lorg_apache_commons_math3_exception_MathIllegalNumberException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathIllegalNumberException', 106);
function NumberIsTooSmallException(){
  NumberIsTooSmallException_0.call(this);
}

NumberIsTooSmallException.displayName = 'org.apache.commons.math3.exception.NumberIsTooSmallException.NumberIsTooSmallException';
defineProperties(NumberIsTooSmallException, {'name':{'value':'org.apache.commons.math3.exception.NumberIsTooSmallException.NumberIsTooSmallException'}});
function NumberIsTooSmallException_0(){
  MathIllegalNumberException.call(this);
}

NumberIsTooSmallException_0.displayName = 'org.apache.commons.math3.exception.NumberIsTooSmallException.NumberIsTooSmallException';
defineProperties(NumberIsTooSmallException_0, {'name':{'value':'org.apache.commons.math3.exception.NumberIsTooSmallException.NumberIsTooSmallException'}});
defineClass(69, 106, $intern_4);
var Lorg_apache_commons_math3_exception_NumberIsTooSmallException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NumberIsTooSmallException', 69);
function NotPositiveException(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException_0.call(this);
}

NotPositiveException.displayName = 'org.apache.commons.math3.exception.NotPositiveException.NotPositiveException';
defineProperties(NotPositiveException, {'name':{'value':'org.apache.commons.math3.exception.NotPositiveException.NotPositiveException'}});
defineClass(199, 69, $intern_4, NotPositiveException);
var Lorg_apache_commons_math3_exception_NotPositiveException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NotPositiveException', 199);
function NotStrictlyPositiveException(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException_0.call(this);
}

NotStrictlyPositiveException.displayName = 'org.apache.commons.math3.exception.NotStrictlyPositiveException.NotStrictlyPositiveException';
defineProperties(NotStrictlyPositiveException, {'name':{'value':'org.apache.commons.math3.exception.NotStrictlyPositiveException.NotStrictlyPositiveException'}});
function NotStrictlyPositiveException_0(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException_0.call(this);
}

NotStrictlyPositiveException_0.displayName = 'org.apache.commons.math3.exception.NotStrictlyPositiveException.NotStrictlyPositiveException';
defineProperties(NotStrictlyPositiveException_0, {'name':{'value':'org.apache.commons.math3.exception.NotStrictlyPositiveException.NotStrictlyPositiveException'}});
defineClass(107, 69, $intern_4, NotStrictlyPositiveException, NotStrictlyPositiveException_0);
var Lorg_apache_commons_math3_exception_NotStrictlyPositiveException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NotStrictlyPositiveException', 107);
function NumberIsTooLargeException(){
  $clinit_MathIllegalNumberException();
  MathIllegalNumberException.call(this);
}

NumberIsTooLargeException.displayName = 'org.apache.commons.math3.exception.NumberIsTooLargeException.NumberIsTooLargeException';
defineProperties(NumberIsTooLargeException, {'name':{'value':'org.apache.commons.math3.exception.NumberIsTooLargeException.NumberIsTooLargeException'}});
defineClass(83, 106, $intern_4, NumberIsTooLargeException);
var Lorg_apache_commons_math3_exception_NumberIsTooLargeException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NumberIsTooLargeException', 83);
function ExceptionContext(){
  new ArrayList;
  new ArrayList;
  new HashMap;
}

ExceptionContext.displayName = 'org.apache.commons.math3.exception.util.ExceptionContext.ExceptionContext';
defineProperties(ExceptionContext, {'name':{'value':'org.apache.commons.math3.exception.util.ExceptionContext.ExceptionContext'}});
defineClass(84, 1, {}, ExceptionContext);
var Lorg_apache_commons_math3_exception_util_ExceptionContext_2_classLit = createForClass('org.apache.commons.math3.exception.util', 'ExceptionContext', 84);
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
defineProperties($nextInt_0, {'name':{'value':'org.apache.commons.math3.random.BitsStreamGenerator.$nextInt'}});
defineClass(234, 1, {});
var Lorg_apache_commons_math3_random_BitsStreamGenerator_2_classLit = createForClass('org.apache.commons.math3.random', 'BitsStreamGenerator', 234);
function $setSeed_3(this$static, seed){
  var i, l;
  arraycopy(seed, 0, this$static.v, 0, $wnd.Math.min(seed.length, this$static.v.length));
  if (seed.length < this$static.v.length) {
    for (i = seed.length; i < this$static.v.length; ++i) {
      l = this$static.v[i - seed.length];
      this$static.v[i] = toInt_0(and_0(add_1(mul_0(1812433253, xor_0(l, shr_0(l, 30))), i), $intern_32));
    }
  }
  this$static.index_0 = 0;
}

$setSeed_3.displayName = 'org.apache.commons.math3.random.AbstractWell.$setSeed';
defineProperties($setSeed_3, {'name':{'value':'org.apache.commons.math3.random.AbstractWell.$setSeed'}});
function AbstractWell(seed){
  AbstractWell_0.call(this, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_12, 10, 15, [toInt_0(shru_0(seed, 32)), toInt_0(and_0(seed, $intern_32))]));
}

AbstractWell.displayName = 'org.apache.commons.math3.random.AbstractWell.AbstractWell';
defineProperties(AbstractWell, {'name':{'value':'org.apache.commons.math3.random.AbstractWell.AbstractWell'}});
function AbstractWell_0(seed){
  var j;
  this.v = initUnidimensionalArray(I_classLit, $intern_12, 10, 624, 15, 1);
  this.index_0 = 0;
  this.iRm1 = initUnidimensionalArray(I_classLit, $intern_12, 10, 624, 15, 1);
  this.iRm2 = initUnidimensionalArray(I_classLit, $intern_12, 10, 624, 15, 1);
  this.i1 = initUnidimensionalArray(I_classLit, $intern_12, 10, 624, 15, 1);
  this.i2 = initUnidimensionalArray(I_classLit, $intern_12, 10, 624, 15, 1);
  this.i3 = initUnidimensionalArray(I_classLit, $intern_12, 10, 624, 15, 1);
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
defineProperties(AbstractWell_0, {'name':{'value':'org.apache.commons.math3.random.AbstractWell.AbstractWell'}});
defineClass(105, 234, {});
_.index_0 = 0;
var Lorg_apache_commons_math3_random_AbstractWell_2_classLit = createForClass('org.apache.commons.math3.random', 'AbstractWell', 105);
function $$init_34(this$static){
}

$$init_34.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.$$init';
defineProperties($$init_34, {'name':{'value':'org.apache.commons.math3.random.RandomDataGenerator.$$init'}});
function $initRan(this$static, seed){
  this$static.rand = new Well19937c(seed);
}

$initRan.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.$initRan';
defineProperties($initRan, {'name':{'value':'org.apache.commons.math3.random.RandomDataGenerator.$initRan'}});
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
  return output = initUnidimensionalArray(I_classLit, $intern_12, 10, k, 15, 1) , arraycopy(index_0, 0, output, 0, $wnd.Math.min(k, index_0.length)) , output;
}

$nextPermutation.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.$nextPermutation';
defineProperties($nextPermutation, {'name':{'value':'org.apache.commons.math3.random.RandomDataGenerator.$nextPermutation'}});
function RandomDataGenerator(){
}

RandomDataGenerator.displayName = 'org.apache.commons.math3.random.RandomDataGenerator.RandomDataGenerator';
defineProperties(RandomDataGenerator, {'name':{'value':'org.apache.commons.math3.random.RandomDataGenerator.RandomDataGenerator'}});
defineClass(192, 1, {}, RandomDataGenerator);
_.rand = null;
var Lorg_apache_commons_math3_random_RandomDataGenerator_2_classLit = createForClass('org.apache.commons.math3.random', 'RandomDataGenerator', 192);
function $next_7(this$static, bits){
  var indexRm1, indexRm2, v0, vM1, vM2, vM3, z0, z1, z2, z3, z4;
  indexRm1 = this$static.iRm1[this$static.index_0];
  indexRm2 = this$static.iRm2[this$static.index_0];
  v0 = this$static.v[this$static.index_0];
  vM1 = this$static.v[this$static.i1[this$static.index_0]];
  vM2 = this$static.v[this$static.i2[this$static.index_0]];
  vM3 = this$static.v[this$static.i3[this$static.index_0]];
  z0 = $intern_24 & this$static.v[indexRm1] ^ $intern_1 & this$static.v[indexRm2];
  z1 = v0 ^ v0 << 25 ^ (vM1 ^ vM1 >>> 27);
  z2 = vM2 >>> 9 ^ (vM3 ^ vM3 >>> 1);
  z3 = z1 ^ z2;
  z4 = z0 ^ (z1 ^ z1 << 9) ^ (z2 ^ z2 << 21) ^ (z3 ^ z3 >>> 21);
  this$static.v[this$static.index_0] = z3;
  this$static.v[indexRm1] = z4;
  this$static.v[indexRm2] &= $intern_24;
  this$static.index_0 = indexRm1;
  z4 ^= z4 << 7 & -462547200;
  z4 ^= z4 << 15 & -1685684224;
  return z4 >>> 32 - bits;
}

$next_7.displayName = 'org.apache.commons.math3.random.Well19937c.$next';
defineProperties($next_7, {'name':{'value':'org.apache.commons.math3.random.Well19937c.$next'}});
function Well19937c(seed){
  AbstractWell_0.call(this, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_12, 10, 15, [toInt_0(shru_0(seed, 32)), toInt_0(and_0(seed, $intern_32))]));
}

Well19937c.displayName = 'org.apache.commons.math3.random.Well19937c.Well19937c';
defineProperties(Well19937c, {'name':{'value':'org.apache.commons.math3.random.Well19937c.Well19937c'}});
defineClass(197, 105, {}, Well19937c);
var Lorg_apache_commons_math3_random_Well19937c_2_classLit = createForClass('org.apache.commons.math3.random', 'Well19937c', 197);
function gcd(p, q){
  var k, t, u, v;
  u = p;
  v = q;
  if (compare_0(u, 0) == 0 || compare_0(v, 0) == 0) {
    if (eq(u, $intern_33) || eq(v, $intern_33)) {
      throw toJs((stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf_1(p), valueOf_1(q)]) , new MathArithmeticException_0));
    }
    return add_1(compare_0(u, 0) < 0?neg_0(u):u, compare_0(v, 0) < 0?neg_0(v):v);
  }
  compare_0(u, 0) > 0 && (u = neg_0(u));
  compare_0(v, 0) > 0 && (v = neg_0(v));
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
defineProperties(gcd, {'name':{'value':'org.apache.commons.math3.util.ArithmeticUtils.gcd'}});
function mulAndCheck(a, b){
  var ret;
  if (compare_0(a, b) > 0) {
    ret = mulAndCheck(b, a);
  }
   else {
    if (compare_0(a, 0) < 0) {
      if (compare_0(b, 0) < 0) {
        if (gte_0(a, div($intern_25, b))) {
          ret = mul_0(a, b);
        }
         else {
          throw toJs(new MathArithmeticException);
        }
      }
       else if (compare_0(b, 0) > 0) {
        if (lte(div($intern_33, b), a)) {
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
      if (lte(a, div($intern_25, b))) {
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
defineProperties(mulAndCheck, {'name':{'value':'org.apache.commons.math3.util.ArithmeticUtils.mulAndCheck'}});
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
defineProperties(binomialCoefficient, {'name':{'value':'org.apache.commons.math3.util.CombinatoricsUtils.binomialCoefficient'}});
function checkBinomial(n, k){
  if (n < k) {
    throw toJs((valueOf_0(k) , valueOf_0(n) , new NumberIsTooLargeException));
  }
  if (n < 0) {
    throw toJs((valueOf_0(n) , new NotPositiveException));
  }
}

checkBinomial.displayName = 'org.apache.commons.math3.util.CombinatoricsUtils.checkBinomial';
defineProperties(checkBinomial, {'name':{'value':'org.apache.commons.math3.util.CombinatoricsUtils.checkBinomial'}});
function copyOf(source, len){
  var output;
  output = initUnidimensionalArray(I_classLit, $intern_12, 10, len, 15, 1);
  arraycopy(source, 0, output, 0, $wnd.Math.min(len, source.length));
  return output;
}

copyOf.displayName = 'org.apache.commons.math3.util.MathArrays.copyOf';
defineProperties(copyOf, {'name':{'value':'org.apache.commons.math3.util.MathArrays.copyOf'}});
function sequence(size_0){
  var a, i;
  a = initUnidimensionalArray(I_classLit, $intern_12, 10, size_0, 15, 1);
  for (i = 0; i < size_0; i++) {
    a[i] = i;
  }
  return a;
}

sequence.displayName = 'org.apache.commons.math3.util.MathArrays.sequence';
defineProperties(sequence, {'name':{'value':'org.apache.commons.math3.util.MathArrays.sequence'}});
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
defineProperties(shuffle, {'name':{'value':'org.apache.commons.math3.util.MathArrays.shuffle'}});
var C_classLit = createForPrimitive('char', 'C');
var I_classLit = createForPrimitive('int', 'I');
var Z_classLit = createForPrimitive('boolean', 'Z');
var J_classLit = createForPrimitive('long', 'J');
var B_classLit = createForPrimitive('byte', 'B');
var D_classLit = createForPrimitive('double', 'D');
var F_classLit = createForPrimitive('float', 'F');
var $entry = entry_0;
var gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=codewars_js-0.js

