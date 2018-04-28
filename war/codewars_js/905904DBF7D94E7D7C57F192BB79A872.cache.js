var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.codewars_js;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '905904DBF7D94E7D7C57F192BB79A872';
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
var $intern_0 = 2147483647, $intern_1 = {3:1, 5:1}, $intern_2 = {3:1, 8:1}, $intern_3 = {3:1, 7:1, 4:1, 8:1}, $intern_4 = {38:1}, $intern_5 = 4194303, $intern_6 = 1048575, $intern_7 = 524288, $intern_8 = 17592186044416, $intern_9 = 4194304, $intern_10 = -17592186044416, $intern_11 = {3:1, 5:1, 69:1}, $intern_12 = {68:1}, $intern_13 = {3:1}, $intern_14 = 65535, $intern_15 = -65536, $intern_16 = 65280, $intern_17 = 1024, $intern_18 = 2048, $intern_19 = {24:1, 3:1, 7:1, 8:1}, $intern_20 = {50:1, 3:1}, $intern_21 = 65536, $intern_22 = 5.099999904632568, $intern_23 = {57:1, 20:1}, $intern_24 = 1048576, $intern_25 = 0.949999988079071, $intern_26 = 0.800000011920929, $intern_27 = -2147483648, $intern_28 = {31:1}, $intern_29 = {3:1, 67:1}, $intern_30 = 15525485, $intern_31 = 5.9604644775390625E-8, $intern_32 = 16777216, $intern_33 = 16777215, $intern_34 = {l:0, m:0, h:524288}, $intern_35 = {l:4194303, m:4194303, h:524287};
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

function toString_4(object){
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
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_0(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
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

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToArray(src_0){
  var elementTypeCategory;
  checkCriticalType(src_0 == null || Array.isArray(src_0) && (elementTypeCategory = getElementTypeCategory(src_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16)));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || jsinstanceOf(src_0, jsType));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfNative(src_0, jsType){
  return jsinstanceOf(src_0, jsType);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function jsinstanceOf(obj, jsType){
  return obj && jsType && obj instanceof jsType;
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

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

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

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

defineClass(93, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_10(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 93);
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
      log_0('onModuleLoad EXCEPTION ' + $toString(e, e.getLocalizedMessage()));
    }
     else 
      throw toJs($e0);
  }
}

function codewars_js$1(){
}

defineClass(121, 1, {}, codewars_js$1);
var Lcom_client_codewars_1js$1_2_classLit = createForClass('com.client', 'codewars_js/1', 121);
defineClass(251, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 251);
defineClass(87, 1, {87:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 87);
function $isNativelySupported(){
  return !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame;
}

function AnimationSchedulerImplStandard(){
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(110, 251, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 110);
function AnimationSchedulerImplStandard$1(){
}

defineClass(207, 87, {87:1}, AnimationSchedulerImplStandard$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 207);
function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {230:1, 3:1, 5:1}, 88, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray_1(this$static.animationRequests, curAnimations), 230);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_2(this$static.animationRequests, requestId);
    $execute(requestId.callback);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, $wnd.Math.max(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(111, 251, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(callback);
  $add_0(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 111);
function $cancel(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_0(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(208, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $updateAnimations(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 208);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
}

defineClass(209, 208, {}, AnimationSchedulerImplTimer$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 209);
function AnimationSchedulerImplTimer$AnimationHandleImpl(callback){
  this.callback = callback;
}

defineClass(88, 87, {87:1, 88:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 88);
function Duration(){
  this.start_0 = now_1();
}

defineClass(162, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 162);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
  maybeInitializeWindowOnError();
}

var uncaughtExceptionHandler = null;
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 32, 0, 0, 1);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $printStackTraceImpl(this$static, out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + prefix + this$static);
  $printStackTraceItems(this$static, out, ident);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_1, 8, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, 'Caused by: ', ident);
}

function $printStackTraceItems(this$static, out, ident){
  var element, element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

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

function of(e){
  var throwable;
  if (e != null) {
    throwable = e['__java$exception'];
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new NullPointerException_0(e):new JsException(e);
}

defineClass(8, 1, $intern_2);
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getLocalizedMessage = function getLocalizedMessage(){
  return this.getMessage();
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_1(){
  return $toString(this, this.getLocalizedMessage());
}
;
_.backingJsObject = '__noinit__';
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 8);
function Exception(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function Exception_0(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(7, 8, {3:1, 7:1, 8:1}, Exception, Exception_0);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 7);
function RuntimeException(){
  Exception.call(this);
}

function RuntimeException_0(message){
  Exception_0.call(this, message);
}

defineClass(4, 7, $intern_3, RuntimeException, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 4);
function JsException(backingJsObject){
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_4(backingJsObject);
}

defineClass(58, 4, $intern_3, JsException);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 58);
defineClass(127, 58, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 127);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  JsException.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(59, 127, {59:1, 3:1, 7:1, 4:1, 8:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 59);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(231, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 231);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

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

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0_0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

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

function maybeInitializeWindowOnError(){
  $clinit_Impl();
  if (onErrorInitialized) {
    return;
  }
  onErrorInitialized = true;
  registerWindowOnError(false);
}

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

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e, reportSwallowedExceptionToBrowser){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    log_0('Uncaught EXCEPTION ' + $toString(e, e.getLocalizedMessage()));
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

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, onErrorInitialized = false, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

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

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

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

defineClass(136, 231, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 136);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals_0(stackTrace[i].methodName, dropFrameUntilFnName) || $equals_0(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(241, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 241);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(128, 241, {}, StackTraceCreator$CollectorLegacy);
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
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 32, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 128);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_0(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
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
  (toReturn.length == 0 || $equals_0(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
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

defineClass(242, 241, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 32, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_0(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 242);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(129, 242, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 129);
function $clinit_DOMImpl(){
  $clinit_DOMImpl = emptyMethod;
  castTo(create_com_google_gwt_dom_client_DOMImpl(), 38);
}

defineClass(38, 1, $intern_4);
var Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 38);
defineClass(252, 38, $intern_4);
var Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplTrident', 252);
function DOMImplIE8(){
  $clinit_DOMImpl();
}

defineClass(215, 252, $intern_4, DOMImplIE8);
var Lcom_google_gwt_dom_client_DOMImplIE8_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE8', 215);
defineClass(253, 38, $intern_4);
var Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 253);
defineClass(254, 253, $intern_4);
var Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 254);
function DOMImplIE9(){
  $clinit_DOMImpl();
}

defineClass(218, 254, $intern_4, DOMImplIE9);
var Lcom_google_gwt_dom_client_DOMImplIE9_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE9', 218);
function DOMImplMozilla(){
  $clinit_DOMImpl();
}

defineClass(217, 253, $intern_4, DOMImplMozilla);
var Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplMozilla', 217);
function DOMImplWebkit(){
  $clinit_DOMImpl();
}

defineClass(216, 254, $intern_4, DOMImplWebkit);
var Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 216);
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

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initMultidimensionalArray(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

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

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

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

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_5;
  a1 = value_0 >> 22 & $intern_5;
  a2 = value_0 < 0?$intern_6:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException_0);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_7 && b.m == 0 && b.l == 0) {
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
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
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

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

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

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

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
  a.l = sum0 & $intern_5;
  a.m = sum1 & $intern_5;
  a.h = sum2 & $intern_6;
  return true;
}

var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_5, sum1 & $intern_5, sum2 & $intern_6);
}

function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

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
  if (value_0 >= $intern_8) {
    a2 = round_int(value_0 / $intern_8);
    value_0 -= a2 * $intern_8;
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
  c00 = p0 & $intern_5;
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
  c0 &= $intern_5;
  c2 += c1 >> 22;
  c1 &= $intern_5;
  c2 &= $intern_6;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  return create0(neg0, neg1, neg2);
}

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
  return create0(res0 & $intern_5, res1 & $intern_5, res2 & $intern_6);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_7) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_6:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_6:0;
    res1 = negative?$intern_5:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_5, res1 & $intern_5, res2 & $intern_6);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_6;
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
  return create0(res0 & $intern_5, res1 & $intern_5, res2 & $intern_6);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_5, sum1 & $intern_5, sum2 & $intern_6);
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_2(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_2(neg(a));
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

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_5, $intern_5, 524287);
  MIN_VALUE = create0(0, 0, $intern_7);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
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

function toJs(t){
  return t.backingJsObject;
}

function add_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_10 < result && result < $intern_8) {
      return result;
    }
  }
  return createLongEmul(add_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function and_0(a, b){
  return createLongEmul(and(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

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

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_9;
  }
  if (a2 == $intern_6) {
    return big_0.l + big_0.m * $intern_9 - $intern_8;
  }
  return big_0;
}

function div(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_10 < result && result < $intern_8) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_10 < value_0 && value_0 < $intern_8) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function gte_0(a, b){
  return compare_0(a, b) >= 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lte(a, b){
  return compare_0(a, b) <= 0;
}

function mod(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a % b;
    if ($intern_10 < result && result < $intern_8) {
      return result;
    }
  }
  return createLongEmul((divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, true) , remainder));
}

function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_10 < result && result < $intern_8) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

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

function shr_0(a, n){
  return createLongEmul(shr(isSmallLong0(a)?toBigLong(a):a, n));
}

function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_10 < result && result < $intern_8) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_8;
    a3 = $intern_6;
  }
  a1 = round_int(value_0 / $intern_9);
  a0 = round_int(value_0 - a1 * $intern_9);
  return create0(a0, a1, a3);
}

function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_3(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_2(a);
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad();
}

function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_11, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = castTo(create_com_google_gwt_useragent_client_UserAgent(), 68);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!$equals_0(compileTimeValue, runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue));
  }
}

function Error_0(message, cause){
  $$init(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(75, 8, $intern_2);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 75);
defineClass(14, 75, $intern_2);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 14);
function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_4('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8):null);
}

defineClass(119, 14, $intern_2, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 119);
function UserAgentImplGecko1_8(){
}

defineClass(140, 1, $intern_12, UserAgentImplGecko1_8);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
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
var Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 140);
function UserAgentImplIe10(){
}

defineClass(138, 1, $intern_12, UserAgentImplIe10);
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'ie10';
}
;
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
var Lcom_google_gwt_useragent_client_UserAgentImplIe10_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe10', 138);
function UserAgentImplIe8(){
}

defineClass(141, 1, $intern_12, UserAgentImplIe8);
_.getCompileTimeValue = function getCompileTimeValue_1(){
  return 'ie8';
}
;
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
var Lcom_google_gwt_useragent_client_UserAgentImplIe8_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe8', 141);
function UserAgentImplIe9(){
}

defineClass(137, 1, $intern_12, UserAgentImplIe9);
_.getCompileTimeValue = function getCompileTimeValue_2(){
  return 'ie9';
}
;
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
var Lcom_google_gwt_useragent_client_UserAgentImplIe9_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe9', 137);
function UserAgentImplSafari(){
}

defineClass(139, 1, $intern_12, UserAgentImplSafari);
_.getCompileTimeValue = function getCompileTimeValue_3(){
  return 'safari';
}
;
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
var Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 139);
function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.window.document;
}

var document_0;
function $clinit_Cpu(){
  $clinit_Cpu = emptyMethod;
  PARITY_TABLE = stampJavaTypeInfo(getClassLiteralForArray(Z_classLit, 1), $intern_13, 11, 16, [true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true]);
}

function $adc16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_14) + (value2 & $intern_14);
  (this$static.m_state.m_flags & 1) == 1 && ++result32;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

function $adc8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) + ((value2 & 255) << 16 >> 16) << 16 >> 16;
  (this$static.m_state.m_flags & 1) == 1 && ++result16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_16) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

function $add16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_14) + (value2 & $intern_14);
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

function $add8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) + ((value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_16) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

function $and16(this$static, value1, value2){
  var result16, result32;
  result32 = value1 & $intern_14 & value2 & $intern_14;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

function $and8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16 & (value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_16) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

function $callFar(this$static, segment, offset){
  $push(this$static, this$static.m_state.m_cs);
  $setCS(this$static.m_state, segment);
  $push(this$static, this$static.m_state.m_ip);
  $setIP(this$static.m_state, offset);
}

function $callNear(this$static, offset){
  $push(this$static, this$static.m_state.m_ip);
  $setIP(this$static.m_state, offset);
}

function $cmpsb(this$static){
  var address1, address2, diff;
  address1 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub8(this$static, $readByte_1(this$static.m_memory, address1), $readByte_1(this$static.m_memory, address2));
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-1:1;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

function $cmpsw(this$static){
  var address1, address2, diff;
  address1 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  address2 = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub16(this$static, $readWord(this$static.m_memory, address1), $readWord(this$static.m_memory, address2));
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-2:2;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

function $dec16(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $sub16(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

function $dec8(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $sub8(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

function $inc16(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $add16(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

function $inc8(this$static, value_0){
  var oldCarry, result;
  oldCarry = (this$static.m_state.m_flags & 1) == 1;
  result = $add8(this$static, value_0, 1);
  $setCarryFlag(this$static.m_state, oldCarry);
  return result;
}

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
      diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-4:4;
      $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
    }
  }
}

function $int87(this$static){
  var address1, address2, bombCount, diff, i;
  bombCount = this$static.m_state.m_bomb2count;
  if (bombCount != 0) {
    $setBomb2Count(this$static.m_state, bombCount - 1 << 24 >> 24);
    for (i = 0; i <= $intern_14; ++i) {
      diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-i:i;
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

function $lodsb(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  $setAL(this$static.m_state, $readByte_1(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-1:1;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
}

function $lodsw(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  $setAX(this$static.m_state, $readWord(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-2:2;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
}

function $movsb(this$static){
  var diff, dst, src_0;
  src_0 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  dst = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeByte_0(this$static.m_memory, dst, $readByte_1(this$static.m_memory, src_0));
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-1:1;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

function $movsw(this$static){
  var diff, dst, src_0;
  src_0 = new RealModeAddress_0(this$static.m_state.m_ds, this$static.m_state.m_si);
  dst = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeWord(this$static.m_memory, dst, $readWord(this$static.m_memory, src_0));
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-2:2;
  $setSI(this$static.m_state, this$static.m_state.m_si + diff << 16 >> 16);
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

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
      $push(this$static, this$static.m_state.m_es);
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
      $push(this$static, this$static.m_state.m_cs);
      break;
    case 15:
      throw toJs(new InvalidOpcodeException);
    default:throw toJs(new RuntimeException);
  }
}

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
      $push(this$static, this$static.m_state.m_ss);
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
      $push(this$static, this$static.m_state.m_ds);
      break;
    case 31:
      $setDS(this$static.m_state, $pop(this$static));
      break;
    default:throw toJs(new RuntimeException);
  }
}

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
      $push(this$static, $getReg16_0(this$static.m_regs, index_0));
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

function $opcode6X(){
  throw toJs(new InvalidOpcodeException);
}

function $opcode7X(this$static, opcode){
  var branch, offset;
  branch = false;
  switch (opcode) {
    case 112:
      branch = (this$static.m_state.m_flags & $intern_18) == $intern_18;
      break;
    case 113:
      branch = (this$static.m_state.m_flags & $intern_18) != $intern_18;
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
      branch = (this$static.m_state.m_flags & 128) == 128 != ((this$static.m_state.m_flags & $intern_18) == $intern_18);
      break;
    case 125:
      branch = (this$static.m_state.m_flags & 128) == 128 == ((this$static.m_state.m_flags & $intern_18) == $intern_18);
      break;
    case 126:
      branch = (this$static.m_state.m_flags & 64) == 64 || (this$static.m_state.m_flags & 128) == 128 != ((this$static.m_state.m_flags & $intern_18) == $intern_18);
      break;
    case 127:
      branch = (this$static.m_state.m_flags & 64) != 64 && (this$static.m_state.m_flags & 128) == 128 == ((this$static.m_state.m_flags & $intern_18) == $intern_18);
  }
  offset = $nextByte(this$static.m_fetcher);
  branch && $setIP(this$static.m_state, this$static.m_state.m_ip + offset << 16 >> 16);
}

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

      energy = this$static.m_state.m_energy & $intern_14;
      energy < $intern_14 && $setEnergy(this$static.m_state, energy + 1 << 16 >> 16);
      break;
    case -100:
      $push(this$static, this$static.m_state.m_flags);
      break;
    case -99:
      $setFlags(this$static.m_state, $pop(this$static));
      break;
    case -98:
      flags = this$static.m_state.m_flags;
      flags = (flags & $intern_16) << 16 >> 16;
      flags = (flags | this$static.m_state.m_ax >> 8 << 24 >> 24) << 16 >> 16;
      $setFlags(this$static.m_state, flags);
      break;
    case -97:
      $setAH(this$static.m_state, this$static.m_state.m_flags << 24 >> 24);
      break;
    default:throw toJs(new RuntimeException);
  }
}

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
          tmp = this$static.m_state.m_ax & $intern_14;
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
          $setMem16(this$static.m_indirect, ($getMem16(this$static.m_indirect) ^ $intern_14) << 16 >> 16);
          break;
        case 3:
          $setMem16(this$static.m_indirect, $sub16(this$static, 0, $getMem16(this$static.m_indirect)));
          break;
        case 4:
          result = (this$static.m_state.m_ax & $intern_14) * ($getMem16(this$static.m_indirect) & $intern_14);
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
          tmp = and_0(((this$static.m_state.m_dx & $intern_14) << 16) + (this$static.m_state.m_ax & $intern_14), -1);
          divisor = $getMem16(this$static.m_indirect) & $intern_14;
          if (divisor == 0) {
            throw toJs(new DivisionException);
          }

          quotient = toInt_0(div(tmp, divisor));
          if (quotient > $intern_14) {
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
          $push(this$static, $getMem16(this$static.m_indirect));
          break;
        case 7:
          throw toJs(new InvalidOpcodeException);
        default:throw toJs(new RuntimeException);
      }

      break;
    default:throw toJs(new RuntimeException);
  }
}

function $or16(this$static, value1, value2){
  var result16, result32;
  result32 = value1 & $intern_14 | value2 & $intern_14;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

function $or8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16 | (value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_16) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

function $pop(this$static){
  var stackPtr, value_0;
  stackPtr = new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_sp);
  value_0 = $readWord(this$static.m_memory, stackPtr);
  $setSP(this$static.m_state, this$static.m_state.m_sp + 2 << 16 >> 16);
  return value_0;
}

function $push(this$static, value_0){
  var stackPtr;
  $setSP(this$static.m_state, this$static.m_state.m_sp - 2 << 16 >> 16);
  stackPtr = new RealModeAddress_0(this$static.m_state.m_ss, this$static.m_state.m_sp);
  $writeWord(this$static.m_memory, stackPtr, value_0);
}

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

function $rcr16(this$static, count){
  var cf, i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    cf = ((this$static.m_state.m_flags & 1) == 1?1:0) << 24 >> 24;
    val = ((val & $intern_14) >>> 1 | cf << 15) << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
  }
}

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

function $ror16(this$static, count){
  var i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    val = ((val & $intern_14) >>> 1 | lsb << 15) << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $updateFlagsNoCarryOverflow16(this$static, val);
  }
}

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

function $sbb16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_14) - (value2 & $intern_14);
  (this$static.m_state.m_flags & 1) == 1 && --result32;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

function $sbb8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) - ((value2 & 255) << 16 >> 16) << 16 >> 16;
  (this$static.m_state.m_flags & 1) == 1 && --result16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_16) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

function $scasb(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub8(this$static, this$static.m_state.m_ax << 24 >> 24, $readByte_1(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-1:1;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

function $scasw(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $sub16(this$static, this$static.m_state.m_ax, $readWord(this$static.m_memory, address));
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-2:2;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

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

function $shr16(this$static, count){
  var i, lsb, msb1, msb2, val;
  count &= 31;
  for (i = 0; i < count; ++i) {
    val = $getMem16(this$static.m_indirect);
    lsb = (val & 1) << 24 >> 24;
    val = (val & $intern_14) >>> 1 << 16 >> 16;
    $setMem16(this$static.m_indirect, val);
    msb1 = (val >> 15 & 1) << 24 >> 24;
    msb2 = (val >> 14 & 1) << 24 >> 24;
    $setCarryFlag(this$static.m_state, lsb != 0);
    $setOverflowFlag(this$static.m_state, msb1 != msb2);
    $setZeroFlag(this$static.m_state, val == 0);
  }
}

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

function $stosb(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeByte_0(this$static.m_memory, address, this$static.m_state.m_ax << 24 >> 24);
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-1:1;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

function $stosw(this$static){
  var address, diff;
  address = new RealModeAddress_0(this$static.m_state.m_es, this$static.m_state.m_di);
  $writeWord(this$static.m_memory, address, this$static.m_state.m_ax);
  diff = (this$static.m_state.m_flags & $intern_17) == $intern_17?-2:2;
  $setDI(this$static.m_state, this$static.m_state.m_di + diff << 16 >> 16);
}

function $sub16(this$static, value1, value2){
  var result16, result32;
  result32 = (value1 & $intern_14) - (value2 & $intern_14);
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

function $sub8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16) - ((value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_16) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

function $updateFlagsNoCarryOverflow16(this$static, value_0){
  var byteValue;
  byteValue = value_0 << 24 >> 24;
  $setParityFlag(this$static.m_state, PARITY_TABLE[(byteValue & 255) << 16 >> 16]);
  $setSignFlag(this$static.m_state, (value_0 & 32768) != 0);
  $setZeroFlag(this$static.m_state, value_0 == 0);
}

function $updateFlagsNoCarryOverflow8(this$static, value_0){
  $setParityFlag(this$static.m_state, PARITY_TABLE[(value_0 & 255) << 16 >> 16]);
  $setSignFlag(this$static.m_state, (value_0 & 128) != 0);
  $setZeroFlag(this$static.m_state, value_0 == 0);
}

function $xor16(this$static, value1, value2){
  var result16, result32;
  result32 = value1 & $intern_14 ^ value2 & $intern_14;
  result16 = result32 << 16 >> 16;
  $setCarryFlag(this$static.m_state, (result32 & $intern_15) != 0);
  $updateFlagsNoCarryOverflow16(this$static, result32 << 16 >> 16);
  return result16;
}

function $xor8(this$static, value1, value2){
  var result16, result8;
  result16 = ((value1 & 255) << 16 >> 16 ^ (value2 & 255) << 16 >> 16) << 16 >> 16;
  result8 = result16 << 24 >> 24;
  $setCarryFlag(this$static.m_state, (result16 & $intern_16) != 0);
  $updateFlagsNoCarryOverflow8(this$static, result16 << 24 >> 24);
  return result8;
}

function Cpu(state, memory){
  $clinit_Cpu();
  this.m_state = state;
  this.m_memory = memory;
  this.m_fetcher = new OpcodeFetcher(this.m_state, this.m_memory);
  this.m_regs = new RegisterIndexingDecoder(this.m_state);
  this.m_indirect = new IndirectAddressingDecoder(this.m_state, this.m_memory, this.m_fetcher);
}

defineClass(219, 1, {}, Cpu);
var PARITY_TABLE;
var Lil_co_codeguru_corewars8086_cpu_Cpu_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'Cpu', 219);
function CpuException(){
  Exception.call(this);
}

defineClass(24, 7, $intern_19);
var Lil_co_codeguru_corewars8086_cpu_CpuException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'CpuException', 24);
function $setAH(this$static, value_0){
  this$static.m_ax = (this$static.m_ax & 255) << 16 >> 16;
  this$static.m_ax = (this$static.m_ax | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

function $setAL(this$static, value_0){
  this$static.m_ax = (this$static.m_ax & $intern_16) << 16 >> 16;
  this$static.m_ax = this$static.m_ax | (value_0 & 255) << 16 >> 16;
}

function $setAX(this$static, value_0){
  this$static.m_ax = value_0;
}

function $setBH(this$static, value_0){
  this$static.m_bx = (this$static.m_bx & 255) << 16 >> 16;
  this$static.m_bx = (this$static.m_bx | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

function $setBL(this$static, value_0){
  this$static.m_bx = (this$static.m_bx & $intern_16) << 16 >> 16;
  this$static.m_bx = this$static.m_bx | (value_0 & 255) << 16 >> 16;
}

function $setBP(this$static, value_0){
  this$static.m_bp = value_0;
}

function $setBX(this$static, value_0){
  this$static.m_bx = value_0;
}

function $setBomb1Count(this$static, value_0){
  this$static.m_bomb1count = value_0;
}

function $setBomb2Count(this$static, value_0){
  this$static.m_bomb2count = value_0;
}

function $setCH(this$static, value_0){
  this$static.m_cx = (this$static.m_cx & 255) << 16 >> 16;
  this$static.m_cx = (this$static.m_cx | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

function $setCL(this$static, value_0){
  this$static.m_cx = (this$static.m_cx & $intern_16) << 16 >> 16;
  this$static.m_cx = this$static.m_cx | (value_0 & 255) << 16 >> 16;
}

function $setCS(this$static, value_0){
  this$static.m_cs = value_0;
}

function $setCX(this$static, value_0){
  this$static.m_cx = value_0;
}

function $setCarryFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 1) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -2) << 16 >> 16);
}

function $setDH(this$static, value_0){
  this$static.m_dx = (this$static.m_dx & 255) << 16 >> 16;
  this$static.m_dx = (this$static.m_dx | (value_0 & 255) << 16 >> 16 << 8) << 16 >> 16;
}

function $setDI(this$static, value_0){
  this$static.m_di = value_0;
}

function $setDL(this$static, value_0){
  this$static.m_dx = (this$static.m_dx & $intern_16) << 16 >> 16;
  this$static.m_dx = this$static.m_dx | (value_0 & 255) << 16 >> 16;
}

function $setDS(this$static, value_0){
  this$static.m_ds = value_0;
}

function $setDX(this$static, value_0){
  this$static.m_dx = value_0;
}

function $setDirectionFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | $intern_17) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -1025) << 16 >> 16);
}

function $setES(this$static, value_0){
  this$static.m_es = value_0;
}

function $setEnergy(this$static, value_0){
  this$static.m_energy = value_0;
}

function $setFlags(this$static, value_0){
  this$static.m_flags = value_0;
}

function $setIP(this$static, value_0){
  this$static.m_ip = value_0;
}

function $setInterruptFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 512) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -513) << 16 >> 16);
}

function $setOverflowFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | $intern_18) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -2049) << 16 >> 16);
}

function $setParityFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 4) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -5) << 16 >> 16);
}

function $setSI(this$static, value_0){
  this$static.m_si = value_0;
}

function $setSP(this$static, value_0){
  this$static.m_sp = value_0;
}

function $setSS(this$static, value_0){
  this$static.m_ss = value_0;
}

function $setSignFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 128) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -129) << 16 >> 16);
}

function $setZeroFlag(this$static, newValue){
  newValue?(this$static.m_flags = (this$static.m_flags | 64) << 16 >> 16):(this$static.m_flags = (this$static.m_flags & -65) << 16 >> 16);
}

function CpuState(){
}

defineClass(196, 1, {}, CpuState);
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
var Lil_co_codeguru_corewars8086_cpu_CpuState_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'CpuState', 196);
function DivisionException(){
  CpuException.call(this);
}

defineClass(72, 24, $intern_19, DivisionException);
var Lil_co_codeguru_corewars8086_cpu_DivisionException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'DivisionException', 72);
function $getMem16(this$static){
  if (this$static.m_memAddress) {
    return $readWord(this$static.m_memory, this$static.m_memAddress);
  }
  return $getReg16_0(this$static.m_regs, this$static.m_memIndex);
}

function $getMem8(this$static){
  if (this$static.m_memAddress) {
    return $readByte_1(this$static.m_memory, this$static.m_memAddress);
  }
  return $getReg8_0(this$static.m_regs, this$static.m_memIndex);
}

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

function $getReg16(this$static){
  return $getReg16_0(this$static.m_regs, this$static.m_regIndex);
}

function $getReg8(this$static){
  return $getReg8_0(this$static.m_regs, this$static.m_regIndex);
}

function $getSeg(this$static){
  return $getSeg_0(this$static.m_regs, this$static.m_regIndex);
}

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

function $setMem16(this$static, value_0){
  this$static.m_memAddress?$writeWord(this$static.m_memory, this$static.m_memAddress, value_0):$setReg16_0(this$static.m_regs, this$static.m_memIndex, value_0);
}

function $setMem8(this$static, value_0){
  this$static.m_memAddress?$writeByte_0(this$static.m_memory, this$static.m_memAddress, value_0):$setReg8_0(this$static.m_regs, this$static.m_memIndex, value_0);
}

function $setReg16(this$static, value_0){
  $setReg16_0(this$static.m_regs, this$static.m_regIndex, value_0);
}

function $setReg8(this$static, value_0){
  $setReg8_0(this$static.m_regs, this$static.m_regIndex, value_0);
}

function $setSeg(this$static, value_0){
  $setSeg_0(this$static.m_regs, this$static.m_regIndex, value_0);
}

function IndirectAddressingDecoder(state, memory, fetcher){
  this.m_state = state;
  this.m_memory = memory;
  this.m_fetcher = fetcher;
  this.m_regs = new RegisterIndexingDecoder(this.m_state);
  this.m_regIndex = 0;
  this.m_memIndex = 0;
  this.m_memAddress = null;
}

defineClass(226, 1, {}, IndirectAddressingDecoder);
_.m_memIndex = 0;
_.m_regIndex = 0;
var Lil_co_codeguru_corewars8086_cpu_IndirectAddressingDecoder_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'IndirectAddressingDecoder', 226);
function IntOpcodeException(){
  CpuException.call(this);
}

defineClass(91, 24, $intern_19, IntOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_IntOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'IntOpcodeException', 91);
function InvalidOpcodeException(){
  CpuException.call(this);
}

defineClass(10, 24, $intern_19, InvalidOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_InvalidOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'InvalidOpcodeException', 10);
function $nextByte(this$static){
  var ip, linearAddress;
  ip = this$static.m_state.m_ip;
  linearAddress = linearAddress_0(this$static.m_state.m_cs, ip);
  $setIP(this$static.m_state, ip + 1 << 16 >> 16);
  return $readExecuteByte_1(this$static.m_memory, linearAddress);
}

function $nextWord(this$static){
  var address;
  address = new RealModeAddress_0(this$static.m_state.m_cs, this$static.m_state.m_ip);
  $setIP(this$static.m_state, this$static.m_state.m_ip + 2 << 16 >> 16);
  return $readExecuteWord(this$static.m_memory, address);
}

function OpcodeFetcher(state, memory){
  this.m_state = state;
  this.m_memory = memory;
}

defineClass(225, 1, {}, OpcodeFetcher);
var Lil_co_codeguru_corewars8086_cpu_OpcodeFetcher_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'OpcodeFetcher', 225);
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

function RegisterIndexingDecoder(state){
  this.m_state = state;
}

defineClass(115, 1, {}, RegisterIndexingDecoder);
var Lil_co_codeguru_corewars8086_cpu_RegisterIndexingDecoder_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'RegisterIndexingDecoder', 115);
function UnimplementedOpcodeException(){
  CpuException.call(this);
}

defineClass(39, 24, $intern_19, UnimplementedOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_UnimplementedOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'UnimplementedOpcodeException', 39);
function UnsupportedOpcodeException(){
  CpuException.call(this);
}

defineClass(55, 24, $intern_19, UnsupportedOpcodeException);
var Lil_co_codeguru_corewars8086_cpu_UnsupportedOpcodeException_2_classLit = createForClass('il.co.codeguru.corewars8086.cpu', 'UnsupportedOpcodeException', 55);
function $addActionListener(this$static, listener){
  this$static.m_listener = listener;
}

function $setEnabled(this$static, v){
  if (this$static.m_element == null)
    return;
  this$static.m_enabled = v;
  this$static.m_element.setAttribute('disabled', v?'false':'true');
}

function $setText(this$static, v){
  if (this$static.m_element == null)
    return;
  this$static.m_element.innerHTML = v;
}

function JComponent(){
}

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

defineClass(22, 1, {});
_.m_enabled = true;
_.m_listener = null;
var Lil_co_codeguru_corewars8086_gui_widgets_JComponent_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JComponent', 22);
function $clear(this$static){
  var i, j;
  this$static.data_0 == null && (this$static.data_0 = initMultidimensionalArray(B_classLit, [$intern_1, $intern_20], [50, 11], 15, [256, 256], 2));
  this$static.pointer == null && (this$static.pointer = initMultidimensionalArray(B_classLit, [$intern_1, $intern_20], [50, 11], 15, [256, 256], 2));
  this$static.values_0 == null && (this$static.values_0 = initMultidimensionalArray(B_classLit, [$intern_1, $intern_20], [50, 11], 15, [256, 256], 2));
  for (i = 0; i < 256; i++)
    for (j = 0; j < 256; j++) {
      this$static.data_0[i][j] = -1;
      this$static.pointer[i][j] = -1;
    }
  this$static.ctx.setTransform(1, 0, 0, 1, 0, 0);
  this$static.ctx.clip(this$static.m_memclip);
  $wnd.js_resetZoom();
}

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

function $initStartWar(this$static, war){
  var addr, x_0, y_0;
  this$static.m_mem = war.m_core;
  this$static.m_currentWar = war;
  addr = $intern_21;
  for (y_0 = 0; y_0 < 256; y_0++) {
    for (x_0 = 0; x_0 < 256; x_0++) {
      this$static.values_0[x_0][y_0] = $readByte(this$static.m_mem, addr);
      addr += 1;
    }
  }
}

function $lambda$0(this$static){
  if (!this$static.m_showContent)
    return;
  $paintCursor(this$static, this$static.m_blinkOn);
  this$static.m_blinkOn = !this$static.m_blinkOn;
}

function $lambda$1(this$static){
  console.log('BLUR');
  this$static.m_intervalId != null && $wnd.window.clearInterval($doubleValue(this$static.m_intervalId));
  this$static.m_showContent && $paintCursor(this$static, false);
  this$static.m_intervalId = null;
}

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
  else if (key == 'ArrowLeft')
    $moveCursor(this$static, -0.5, 0);
  else if (this$static.m_mem) {
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

function $moveCursor(this$static, dx, dy){
  $paintCursor(this$static, false);
  this$static.m_cursorX = $wnd.Math.max($wnd.Math.min(this$static.m_cursorX + dx, 255.5), 0);
  this$static.m_cursorY = $wnd.Math.max($wnd.Math.min(this$static.m_cursorY + dy, 255), 0);
  while (this$static.m_cursorY < this$static.m_contentVisibleRect.sy + 1 && this$static.m_cursorY > 0) {
    this$static.m_zrY = this$static.m_zrY + $intern_22 * this$static.m_zrHscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorY > this$static.m_contentVisibleRect.ey - 1 && this$static.m_cursorY <= 255) {
    this$static.m_zrY = this$static.m_zrY - $intern_22 * this$static.m_zrHscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorX < this$static.m_contentVisibleRect.sx + 1 && this$static.m_cursorX > 0) {
    this$static.m_zrX = this$static.m_zrX + $intern_22 * this$static.m_zrVscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  while (this$static.m_cursorX > this$static.m_contentVisibleRect.ex - 0.5 && this$static.m_cursorX <= 255.5) {
    this$static.m_zrX = this$static.m_zrX - $intern_22 * this$static.m_zrVscale * 3;
    js_updateFromKeyScroll(this$static.m_zrX, this$static.m_zrY);
  }
  $paint(this$static);
}

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
    this$static.ctx.fillStyle = $toString_0(col);
    this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
  }
  return col;
}

function $paintPixel(this$static, number, color_0, value_0){
  $paintPixel_0(this$static, number % 256, number / 256 | 0, color_0, value_0);
}

function $paintPixel_0(this$static, x_0, y_0, colorByte, value_0){
  var color_0;
  this$static.values_0[x_0][y_0] = value_0;
  color_0 = null;
  colorByte != -1?(this$static.data_0[x_0][y_0] = colorByte):(colorByte = this$static.data_0[x_0][y_0]);
  if (colorByte != -1) {
    color_0 = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), colorByte, false);
    this$static.ctx.fillStyle = $toString_0(color_0);
  }
   else {
    this$static.ctx.fillStyle = '#000000';
  }
  this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
  this$static.m_showContent && $paintTextValue(this$static, x_0, y_0, color_0);
}

function $paintPointer(this$static, number, colorByte){
  var color_0, x_0, y_0;
  x_0 = number % 256;
  y_0 = number / 256 | 0;
  color_0 = $getColor(($clinit_ColorHolder() , $clinit_ColorHolder() , ins), colorByte, true);
  this$static.pointer[x_0][y_0] = colorByte;
  this$static.ctx.fillStyle = $toString_0(color_0);
  this$static.ctx.fillRect(x_0 * 3, y_0 * 3, 3, 3);
  this$static.m_showContent && $paintTextValue(this$static, x_0, y_0, color_0);
}

function $paintTextValue(this$static, x_0, y_0, backCol){
  var textCol;
  backCol?backCol.m_isDark?(textCol = '#ffffff'):(textCol = '#000000'):(textCol = '#666666');
  this$static.ctx.fillStyle = textCol;
  this$static.ctx.fillText(hex2(this$static.values_0[x_0][y_0] & 255), x_0 * 3 + 0.2, y_0 * 3 + 2.2);
}

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

function js_updateFromKeyScroll(nx, ny){
  $wnd.js_updateFromKeyScroll(nx, ny);
}

defineClass(183, 22, {}, Canvas_0);
_.j_warCanvas_click_0 = function j_warCanvas_click(x_0, y_0){
  var mx, my;
  if (!this.m_showContent || x_0 < 0 || y_0 < 0 || x_0 >= 768 || y_0 >= 768)
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
_.j_warCanvas_repaint_0 = function j_warCanvas_repaint(){
  $paint(this);
}
;
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
_.j_warCanvas_showCurrent_0 = function j_warCanvas_showCurrent(x_0, y_0){
  var addr, bef, i, mx, my, player, sb, v;
  if (!this.m_mem || x_0 < 0 || y_0 < 0 || x_0 >= 768 || y_0 >= 768) {
    this.m_hoverCellInfo.style.display = 'none';
    return;
  }
  mx = round_int((x_0 - this.m_zrX) / 3 / this.m_zrHscale);
  my = round_int((y_0 - this.m_zrY) / 3 / this.m_zrVscale);
  addr = mx + my * 256 & $intern_14;
  v = $readByte(this.m_mem, addr + $intern_21) & 255;
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
_.m_blinkOn = false;
_.m_cursorX = 0;
_.m_cursorY = 0;
_.m_showContent = false;
_.m_zrHscale = 0;
_.m_zrVscale = 0;
_.m_zrX = 0;
_.m_zrY = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas', 183);
function $isInside(this$static, x_0, y_0){
  return x_0 > this$static.sx && x_0 < this$static.ex && y_0 > this$static.sy && y_0 < this$static.ey;
}

function Canvas$Rect(){
}

defineClass(185, 1, {}, Canvas$Rect);
_.ex = 0;
_.ey = 0;
_.sx = 0;
_.sy = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas$Rect_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/Rect', 185);
function $moveTo(this$static, _x, _y){
  this$static.x_0 = _x;
  this$static.y_0 = _y;
  this$static.p.moveTo(this$static.x_0, this$static.y_0);
}

function Canvas$Turtle(_p){
  this.p = _p;
}

defineClass(184, 1, {}, Canvas$Turtle);
_.x_0 = 0;
_.y_0 = 0;
var Lil_co_codeguru_corewars8086_gui_Canvas$Turtle_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/Turtle', 184);
function Canvas$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(268, $wnd.Function, {}, Canvas$lambda$0$Type);
_.onInvoke = function onInvoke(arg0){
  $lambda$0(this.$$outer_0);
}
;
function Canvas$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(186, 1, {}, Canvas$lambda$1$Type);
_.handleEvent = function handleEvent(arg0){
  $lambda$1(this.$$outer_0);
}
;
var Lil_co_codeguru_corewars8086_gui_Canvas$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/lambda$1$Type', 186);
function Canvas$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(187, 1, {}, Canvas$lambda$2$Type);
_.handleEvent = function handleEvent_0(arg0){
  $lambda$2(this.$$outer_0, arg0);
}
;
var Lil_co_codeguru_corewars8086_gui_Canvas$lambda$2$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'Canvas/lambda$2$Type', 187);
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

function $checkDisasmLines(this$static, binbuf, listing, asmElem, intext){
  var atLstLine, dis, e, eptr, lstline, msg, omsgdiv, omsgtxt;
  dis = new Disassembler$ArrDisassembler(binbuf, binbuf.length);
  for (atLstLine = 0; atLstLine < listing.array.length; ++atLstLine) {
    msg = null;
    lstline = (checkCriticalElementIndex(atLstLine, listing.array.length) , castTo(listing.array[atLstLine], 47));
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
        atLstLine < this$static.m_lineOffsets.array.length && omsgdiv.setAttribute('ondblclick', 'asm_cursorToLine(' + ('' + castTo($get_0(this$static.m_lineOffsets, atLstLine), 23).value_0) + ')');
        omsgtxt = document_0.createTextNode(msg);
        omsgdiv.appendChild(omsgtxt);
        this$static.asm_output.appendChild(omsgdiv);
      }
    }
  }
  return asmElem;
}

function $countDigits(s){
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

function $eraseOpcode(this$static, addrInArea){
  var page, value_0;
  this$static.m_dbglines[addrInArea] = null;
  page = addrInArea / this$static.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, addrInArea, null);
  ++addrInArea;
  while (!this$static.m_dbglines[addrInArea]) {
    value_0 = $readByte(this$static.m_mem, addrInArea + $intern_21);
    $setByte(this$static, addrInArea, (value_0 & 255) << 24 >> 24);
    ++addrInArea;
  }
}

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
}

function $getCurrentWarrior(this$static){
  var label_0, war;
  war = this$static.m_competition.currentWar;
  if (!war)
    return null;
  label_0 = this$static.m_playersPanel.m_inEditor.label_0;
  return $getWarriorByLabel(war, label_0);
}

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

function $initDebugAreaLines(this$static){
  var addr, befFirst, br, br$iterator, code_0, copy, dbgline, i, j, last_dbgline, loadAddr, lsti, lstline, lstline$iterator, opcode, p, p$array, p$index, p$max, playerLoadOffset, w, war;
  war = this$static.m_competition.currentWar;
  if (!this$static.m_fillCmd) {
    this$static.m_fillCmd = new CodeEditor$DbgLine;
    this$static.m_fillCmd.text_0 = "<span class='dbg_backfill'><span class='dbg_opcodes'>CC<\/span>int 3<\/span>";
  }
  for (addr = 0; addr < $intern_21; ++addr) {
    this$static.m_dbglines[addr] = this$static.m_fillCmd;
  }
  for (p$array = this$static.m_pages , p$index = 0 , p$max = p$array.length; p$index < p$max; ++p$index) {
    p = p$array[p$index];
    p.isDirty = true;
  }
  this$static.m_dbgBreakpoints = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Breakpoint_2_classLit, $intern_1, 29, $intern_21, 0, 1);
  for (i = 0; i < war.m_numWarriors; ++i) {
    w = war.m_warriors[i];
    playerLoadOffset = w.m_loadAddress.m_linearAddress - $intern_21;
    code_0 = $findCode(this$static.m_playersPanel, w.m_label);
    for (lstline$iterator = new ArrayList$1(code_0.lines); lstline$iterator.i < lstline$iterator.this$01.array.length;) {
      lstline = castTo($next_1(lstline$iterator), 47);
      lstline.tmp_br = null;
    }
    for (br$iterator = new ArrayList$1(code_0.breakpoints); br$iterator.i < br$iterator.this$01.array.length;) {
      br = castTo($next_1(br$iterator), 29);
      castTo($get_0(code_0.lines, br.lineNum - 1), 47).tmp_br = br;
    }
    last_dbgline = null;
    if (castTo($get_0(code_0.lines, 0), 47).address == -1) {
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
      lstline = castTo($get_0(code_0.lines, lsti), 47);
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

function $lambda$1_0(this$static){
  $updateTitle(this$static.m_playersPanel, this$static.editor_title.value);
}

function $linesAsInput(text_0){
  var c, i, opcodesText;
  opcodesText = new StringBuilder;
  for (i = 0; i < text_0.length; ++i) {
    c = (checkCriticalStringElementIndex(i, text_0.length) , text_0.charCodeAt(i));
    c == 10 && (opcodesText.string += '<br>' , opcodesText);
  }
  return opcodesText.string;
}

function $loadedNewBinary(this$static, incode, callback){
  var b, dis, len, offset, sb, text_0, text0;
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
  $setText_0(this$static, incode.asmText, callback);
  this$static.m_breakpoints = incode.breakpoints;
}

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

function $parseLst(this$static, lsttext, opcodesText){
  var addressStart, c, charsBeforeCode, i, indexStart, islast, j, l, line, lineIndex, lines, opcodeStart, prevLine, state, totalOpcodeCount;
  lines = $split(lsttext);
  this$static.m_currentListing = new ArrayList;
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
            l.opcode = $spacedHex(l.fullOpcode);
            l.opcodesCount = $countDigits(l.fullOpcode) / 2 | 0;
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
      prevLine.opcodesCount = $countDigits(prevLine.fullOpcode) / 2 | 0;
      continue;
    }
     else if (l.lineNum != lineIndex) {
      log_0('wrong line number ' + ('' + l.lineNum) + ' at ' + ('' + lineIndex));
      return false;
    }
    ++lineIndex;
    $add_0(this$static.m_currentListing, l);
    $append_4(opcodesText, l.opcode);
    opcodesText.string += '\n';
    prevLine = l;
  }
  return true;
}

function $parseStdout(this$static, stdoutText, asmElem, stdoutShorten){
  var countAllNL, e, ec, firstColon, i, j, line, lineNum, lineNum0, lineType, lines;
  lines = $split(stdoutText);
  countAllNL = this$static.m_lineOffsets.array.length;
  this$static.m_errLines = initUnidimensionalArray(C_classLit, $intern_13, 11, countAllNL, 15, 1);
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
            lineType == 119 && this$static.m_errLines[lineNum0] == 101 || (this$static.m_errLines[lineNum0] = lineType);
          }
          break;
        }
      }
    }
    if (lineNum0 == -1) {
      console.log('Failed parsing error stdout');
      return;
    }
    $append_4(stdoutShorten, "<div class='stdout_line_" + String.fromCharCode(lineType) + "' ondblclick='asm_cursorToLine(" + ('' + castTo($get_0(this$static.m_lineOffsets, lineNum0), 23).value_0) + ")'>");
    $append_4(stdoutShorten, line.substr(firstColon + 1));
    stdoutShorten.string += '<\/div>';
  }
  for (lineNum = 0; lineNum < this$static.m_errLines.length; ++lineNum) {
    ec = this$static.m_errLines[lineNum];
    if (ec == 0)
      continue;
    e = asmElem.getElementById('mline_' + ('' + (lineNum + 1)));
    if (e == null)
      continue;
    ec == 101?e.classList.add('edit_error'):e.classList.add('edit_warning');
  }
}

function $playerSelectionChanged(this$static, incode, callback){
  var b, b$iterator;
  $removeCurrentBreakpoints(this$static);
  this$static.asm_edit.value = incode.asmText;
  this$static.editor_title.value = incode.player.title_0;
  $setText_0(this$static, incode.asmText, callback);
  this$static.m_breakpoints = incode.breakpoints;
  for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
    b = castTo($next_1(b$iterator), 29);
    $setLineNumBreakpoint(b.lineNum, true);
  }
  this$static.m_isDebugMode && $updateDebugLine(this$static);
}

function $removeCurrentBreakpoints(this$static){
  var b, b$iterator;
  if (this$static.m_breakpoints)
    for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
      b = castTo($next_1(b$iterator), 29);
      $setLineNumBreakpoint(b.lineNum, false);
    }
}

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

function $scrollToCodeInEditor(this$static){
  var ipInsideArena;
  ipInsideArena = getWarrirorIp($getCurrentWarrior(this$static));
  if (ipInsideArena == -1)
    return;
  scrollToAddr(ipInsideArena, true);
}

function $setByte(this$static, address, value_0){
  var dbgline, page;
  dbgline = $getSingleByteLine(this$static, value_0);
  this$static.m_dbglines[address] = dbgline;
  page = address / this$static.PAGE_SIZE_0 | 0;
  (page == this$static.m_atScrollP1 || page == this$static.m_atScrollP2) && $renderLine(this$static, address, dbgline);
}

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

function $setLineNumBreakpoint(lineNum, v){
  var e;
  e = ($clinit_DomGlobal() , document_0).getElementById('ln' + ('' + lineNum));
  v?e.classList.add('edit_breakpoint'):e.classList.remove('edit_breakpoint');
}

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
    $parseStdout(this$static, stdout, df, stdoutShorten);
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
    this$static.m_currentListing.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
    this$static.opcodes_edit.innerHTML = $linesAsInput(intext);
    console.log('~Empty output');
    !!playersPanel && $updateAsmResult(playersPanel, true, null, null);
    return;
  }
  opcodesText = new StringBuilder;
  ok = $parseLst(this$static, output, opcodesText);
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

function $shouldBreak(this$static, state){
  var absAddr, arenaAddr;
  absAddr = linearAddress_0(state.m_cs, state.m_ip);
  arenaAddr = absAddr - $intern_21;
  if (!this$static.m_dbgBreakpoints[arenaAddr])
    return false;
  return true;
}

function $spacedHex(s){
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
        castTo($next_1(exist_br$iterator), 29);
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

function $toggleBreakpointEdit(this$static, atline){
  var atindex, b, b$iterator, e, found;
  atindex = atline - 1;
  if (atindex < 0 || atindex >= this$static.m_currentListing.array.length) {
    console.error('addBreakpointEdit invalid line ' + ('' + atline));
    return;
  }
  found = null;
  for (b$iterator = new ArrayList$1(this$static.m_breakpoints); b$iterator.i < b$iterator.this$01.array.length;) {
    b = castTo($next_1(b$iterator), 29);
    if (b.lineNum == atline) {
      found = b;
      break;
    }
  }
  e = ($clinit_DomGlobal() , document_0).getElementById('ln' + ('' + atline));
  !found?e.classList.add('edit_breakpoint'):e.classList.remove('edit_breakpoint');
  found?$remove_2(this$static.m_breakpoints, found):$add_0(this$static.m_breakpoints, new PlayersPanel$Breakpoint(atline));
}

function $updateBreakpoints(this$static, prevLineOffsets, prevLineCount, prevInText){
  var br, c, i, isLineWithText, it, keydown, lineNLIndex, lineStartIndex, selEnd, selStart;
  if (!this$static.m_breakpoints || this$static.m_breakpoints.array.length == 0)
    return;
  selStart = $wnd.saved_selectionStart;
  selEnd = $wnd.saved_selectionEnd;
  keydown = $wnd.saved_keydown;
  it = new AbstractList$ListIteratorImpl(this$static.m_breakpoints);
  while (it.i < it.this$01.size_1()) {
    br = (checkCriticalElement(it.i < it.this$01.size_1()) , castTo(it.this$01.get_0(it.last = it.i++), 29));
    lineStartIndex = 0;
    br.lineNum != 1 && (lineStartIndex = castTo($get_0(prevLineOffsets, br.lineNum - 1 - 1), 23).value_0 + 1);
    lineNLIndex = castTo($get_0(prevLineOffsets, br.lineNum - 1), 23).value_0;
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
      value_0 = $readByte(this$static.m_mem, opcodeAddr + $intern_21);
      $setByte(this$static, opcodeAddr, (value_0 & 255) << 24 >> 24);
      ++opcodeAddr;
    }
     while (!this$static.m_dbglines[opcodeAddr]);
    $disassembleAddr(this$static, ipInsideArena + $intern_21, ipInsideArena);
  }
   else {
    flags = this$static.m_dbglines[ipInsideArena].flags;
    ((flags & 1) != 0 || (flags & 2) != 0) && $disassembleAddr(this$static, ipInsideArena + $intern_21, ipInsideArena);
  }
  ider = 'd';
  (this$static.m_dbglines[ipInsideArena].flags & 4) != 0 && (ider = 'df');
  dline = castToNative(($clinit_DomGlobal() , document_0).getElementById(ider + ('' + ipInsideArena)), $wnd.HTMLElement);
  dline.classList.add(isAlive?'current_dbg':'current_dbg_dead');
  this$static.m_lastDbgElement = dline;
  this$static.m_lastDbgAddr = ipInsideArena;
  this$static.m_lastDbgAddrEnd = this$static.m_lastDbgAddr + 1;
  this$static.m_lastIsAlive = isAlive;
  while (this$static.m_lastDbgAddrEnd < $intern_21 && !this$static.m_dbglines[this$static.m_lastDbgAddrEnd])
    ++this$static.m_lastDbgAddrEnd;
}

function CodeEditor(competition){
  var i, pi;
  this.m_singleByte = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit, $intern_1, 36, 256, 0, 1);
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
  this.m_dbglines = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit, $intern_1, 36, $intern_21, 0, 1);
  this.m_pages = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_CodeEditor$PageInfo_2_classLit, $intern_1, 81, ($intern_21 / this.PAGE_SIZE_0 | 0) + 1, 0, 1);
  for (i = 0; i < this.m_pages.length; ++i) {
    pi = new CodeEditor$PageInfo;
    this.m_pages[i] = pi;
    pi.isDirty = true;
    pi.startAddr = i * this.PAGE_SIZE_0;
    pi.endAddr = $wnd.Math.min((i + 1) * this.PAGE_SIZE_0, $intern_21);
  }
  $exportMethods_0(this);
}

function getWarrirorIp(w){
  var cs, ip, ipInsideArena, state;
  if (!w)
    return -1;
  state = w.m_state;
  ip = state.m_ip;
  cs = state.m_cs;
  ipInsideArena = linearAddress_0(cs, ip) - $intern_21;
  return ipInsideArena;
}

function isHexDigit(c){
  return c >= 48 && c <= 57 || c >= 65 && c <= 70;
}

function read_file_bin_arr(){
  var arr, buf, i;
  arr = $wnd.FS.readFile('player', {encoding:'binary'});
  buf = initUnidimensionalArray(B_classLit, $intern_20, 11, arr.length, 15, 1);
  for (i = 0; i < arr.length; ++i)
    buf[i] = arr[i] << 24 >> 24;
  return buf;
}

function scrollToAddr(addr, defer_0){
  defer_0?($wnd.deferredEditorToAddress = addr):$wnd.scrollToAddr(addr);
}

defineClass(151, 1, $intern_23, CodeEditor);
_.j_renderIfDirty_0 = function j_renderIfDirty(pagenum){
  $j_renderIfDirty(this, pagenum);
}
;
_.j_setScrollAt_0 = function j_setScrollAt(p1, p2){
  $j_renderIfDirty(this, p1);
  $j_renderIfDirty(this, p2);
  this.m_atScrollP1 = p1;
  this.m_atScrollP2 = p2;
}
;
_.onCompetitionEnd = function onCompetitionEnd(){
}
;
_.onCompetitionStart = function onCompetitionStart(){
}
;
_.onEndRound = function onEndRound(){
  $updateDebugLine(this);
}
;
_.onMemoryWrite = function onMemoryWrite(address, value_0){
  var absAddr, cIpInsideArea, existing, ipInsideArena, page;
  if (this.m_memWriteState != 2)
    return;
  absAddr = address.m_linearAddress;
  if (absAddr < $intern_21 || absAddr >= 131072)
    return;
  ipInsideArena = absAddr - $intern_21;
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
      $setByte(this, ipInsideArena, $readByte(this.m_mem, ipInsideArena + $intern_21));
      ++ipInsideArena;
    }
     while (ipInsideArena < $intern_21 && !this.m_dbglines[ipInsideArena]);
  }
  if (cIpInsideArea >= this.m_lastDbgAddr && cIpInsideArea < this.m_lastDbgAddrEnd) {
    this.m_lastDbgAddr = -1;
    $updateDebugLine(this);
  }
}
;
_.onNoneAlive = function onNoneAlive(){
}
;
_.onPaused = function onPaused(){
}
;
_.onRound = function onRound(round_0){
}
;
_.onWarEnd = function onWarEnd(reason, winners){
}
;
_.onWarPreStartClear = function onWarPreStartClear(){
}
;
_.onWarStart = function onWarStart(){
  this.m_mem = this.m_competition.currentWar.m_core;
}
;
_.onWarriorBirth = function onWarriorBirth(w){
}
;
_.onWarriorDeath = function onWarriorDeath(warrior, reason){
}
;
_.onWriteState = function onWriteState(state){
  this.m_memWriteState = state;
}
;
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
var Lil_co_codeguru_corewars8086_gui_CodeEditor_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor', 151);
function CodeEditor$1(this$0){
  this.this$01 = this$0;
}

defineClass(152, 1, {}, CodeEditor$1);
_.handleEvent = function handleEvent_1(event_0){
  var e;
  e = castToNative(event_0.target, $wnd.Element);
  $toggleBreakpointEdit(this.this$01, __parseAndValidateInt(e.innerHTML, 10));
}
;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/1', 152);
function CodeEditor$2(this$0){
  this.this$01 = this$0;
}

defineClass(153, 1, {}, CodeEditor$2);
_.handleEvent = function handleEvent_2(event_0){
  var e;
  e = castToNative(event_0.target, $wnd.Element);
  $toggleBreakpointDbg(this.this$01, __parseAndValidateInt(e.innerHTML, 16));
}
;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$2_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/2', 153);
function CodeEditor$DbgLine(){
}

defineClass(36, 1, {36:1}, CodeEditor$DbgLine);
_.flags = 0;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$DbgLine_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/DbgLine', 36);
function CodeEditor$LstLine(){
}

defineClass(47, 1, {47:1}, CodeEditor$LstLine);
_.address = -1;
_.addressStr = '';
_.code_0 = '';
_.fullOpcode = '';
_.lineNum = -1;
_.opcode = '';
_.opcodesCount = 0;
_.tmp_br = null;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$LstLine_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/LstLine', 47);
function CodeEditor$PageInfo(){
}

defineClass(81, 1, {81:1}, CodeEditor$PageInfo);
_.endAddr = 0;
_.isDirty = false;
_.startAddr = 0;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$PageInfo_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/PageInfo', 81);
function CodeEditor$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(154, 1, {}, CodeEditor$lambda$0$Type);
_.handleEvent = function handleEvent_3(arg0){
  $asm_edit_changed(this.$$outer_0);
}
;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/lambda$0$Type', 154);
function CodeEditor$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(155, 1, {}, CodeEditor$lambda$1$Type);
_.handleEvent = function handleEvent_4(arg0){
  $lambda$1_0(this.$$outer_0);
}
;
var Lil_co_codeguru_corewars8086_gui_CodeEditor$lambda$1$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CodeEditor/lambda$1$Type', 155);
function $clinit_ColorHolder(){
  $clinit_ColorHolder = emptyMethod;
  ins = new ColorHolder;
}

function $getColor(this$static, pos, darker){
  return darker?this$static.darkColors[pos]:this$static.colors[pos];
}

function ColorHolder(){
  var i, i0, x_0;
  this.colors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit, $intern_1, 43, 360, 0, 1);
  x_0 = 0;
  for (i0 = 0; i0 < 360; i0++) {
    this.colors[i0] = ($clinit_Color() , HSBtoRGB(x_0 % 1));
    x_0 += 0.6180340051651001;
  }
  this.darkColors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit, $intern_1, 43, this.colors.length, 0, 1);
  for (i = 0; i < this.colors.length; i++) {
    this.darkColors[i] = $darker(this.colors[i]);
  }
}

defineClass(201, 1, {}, ColorHolder);
var ins;
var Lil_co_codeguru_corewars8086_gui_ColorHolder_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColorHolder', 201);
function $addToValue(this$static, pos, subIndex, value_0){
  var i, sb;
  this$static.values_0[pos][0] += value_0;
  this$static.values_0[pos][subIndex + 1] += value_0;
  if (this$static.values_0[pos][0] > this$static.maxValue) {
    this$static.maxValue = this$static.values_0[pos][0];
    this$static.maxValue * this$static.reduceFactor > (new Dimension(0, 0)).height_0 - 10 && (this$static.reduceFactor *= 0.5);
  }
  sb = new StringBuilder;
  for (i = 0; i < this$static.values_0.length; ++i) {
    $append_0(sb, this$static.values_0[0][0]);
    sb.string += '  ';
  }
  log_0('Score add ' + ('' + pos) + ' ' + ('' + subIndex) + ' ' + ('' + value_0) + '  totals= ' + sb.string);
}

function $clear_0(this$static, names){
  this$static.names = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_11, 2, names.length, 6, 1);
  this$static.values_0 = initMultidimensionalArray(F_classLit, [$intern_1, {256:1, 3:1}], [256, 11], 15, [names.length, 3], 2);
  arraycopy(names, 0, this$static.names, 0, names.length);
  this$static.maxValue = 0;
  this$static.reduceFactor = 5;
}

function ColumnGraph(names){
  JComponent.call(this);
  $clear_0(this, names);
}

defineClass(149, 22, {}, ColumnGraph);
_.maxValue = 0;
_.reduceFactor = 0;
var Lil_co_codeguru_corewars8086_gui_ColumnGraph_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ColumnGraph', 149);
function JFrame(){
  JComponent.call(this);
}

defineClass(98, 22, {});
var Lil_co_codeguru_corewars8086_gui_widgets_JFrame_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JFrame', 98);
function $callContinueRun(this$static){
  var needMore;
  needMore = $continueRun(this$static.competition);
  this$static.stepnum.innerHTML = !this$static.competition.compState?'[null]':'' + this$static.competition.compState.round_0;
  needMore && (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static.animCallback, null);
}

function $errorPreventsStep(this$static, v){
  $setEnabled(this$static.battleFrame.btnPause, !v);
  $setEnabled(this$static.battleFrame.btnSingleRound, !v);
}

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
}

function $gui_runWar(this$static, isBattleShown, isStartPaused){
  isBattleShown != null && (this$static.m_isBattleShown = (checkCriticalNotNull(isBattleShown) , isBattleShown));
  isStartPaused != null && (this$static.m_isStartPaused = (checkCriticalNotNull(isStartPaused) , isStartPaused));
  if ($runWar(this$static)) {
    $setDebugMode_0(this$static, true);
    this$static.stepnum.innerHTML = '0';
    $setValue_1(this$static.battleFrame.speedSlider);
    return true;
  }
  return false;
}

function $requestFrame(this$static){
  (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static.animCallback, null);
}

function $runWar(this$static){
  var battlesPerGroup, e, inEditorWarrior, numOfGroups, repo, war;
  battlesPerGroup = 0;
  try {
    $setSeed(this$static.competition, getHashCode_0(castToNative(this$static.seed.m_element, $wnd.HTMLInputElement).value));
    battlesPerGroup = 100;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 34)) {
      console.log('Error in configuration');
    }
     else 
      throw toJs($e0);
  }
  if (battlesPerGroup == 0) {
    console.error('battles per session needs to be more than 0');
    return false;
  }
  repo = this$static.competition.warriorRepository;
  if (!$readWarriorFilesFromUI(repo, $getFiles(this$static.m_playersPanel), initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit, $intern_1, 40, 0, 0, 1)))
    return false;
  $clear_0(this$static.columnGraph, $getGroupNames(repo));
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
      war.m_uiWarriorIndex = inEditorWarrior.m_myIndex;
    }
    return true;
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 7)) {
      e = $e1;
      log_0('runWar EXCEPTION ' + $toString(e, e.getLocalizedMessage()));
      $printStackTraceImpl(e, new ConsolePrintStream, '', '');
    }
     else 
      throw toJs($e1);
  }
  return false;
}

function $setDebugMode_0(this$static, v){
  $setDebugMode(this$static.m_codeEditor, v);
  $setDebugMode_1(this$static.m_playersPanel, v);
  $setVisible(this$static.battleFrame.cpuframe, v);
}

function $srcSelectionChanged(this$static, label_0){
  var war, warrior;
  war = this$static.competition.currentWar;
  if (!war)
    return;
  warrior = $getWarriorByLabel(war, label_0);
  war.m_uiWarriorIndex = warrior.m_myIndex;
}

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
  this.columnGraph = new ColumnGraph($getGroupNames(warriorRepository));
  new JPanel;
  new JPanel;
  new JPanel;
  this.warCounterDisplay = new JLabel;
  new JPanel;
  new JLabel;
  $wnd.Math.min(4, this.competition.warriorRepository.warriorGroups.array.length);
  new JLabel;
  this.seed = new JTextField;
  castToNative(this.seed.m_element, $wnd.HTMLInputElement).value = 'guru';
  new JLabel;
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

defineClass(122, 98, {20:1, 228:1}, CompetitionWindow);
_.j_debugUiInited_0 = function j_debugUiInited(){
  this.competition.competitionEventListener.onEndRound();
}
;
_.j_startDebug_0 = function j_startDebug(){
  if (!$checkPlayersReady(this.m_playersPanel))
    return false;
  if (!$gui_runWar(this, ($clinit_Boolean() , true), true))
    return false;
  return true;
}
;
_.j_stopDebug_0 = function j_stopDebug(){
  $setAbort(this.competition);
  $setDebugMode_0(this, false);
}
;
_.j_triggerZeroSpeed_0 = function j_triggerZeroSpeed(){
  $setSpeed(this.competition, 0);
  $setValue_1(this.battleFrame.speedSlider);
}
;
_.onCompetitionEnd = function onCompetitionEnd_0(){
  $run(new CompetitionWindow$2(this));
}
;
_.onCompetitionStart = function onCompetitionStart_0(){
  this.warCounter = 0;
  this.totalWars = $getTotalNumberOfWars(this.competition);
}
;
_.onEndRound = function onEndRound_0(){
}
;
_.onNoneAlive = function onNoneAlive_0(){
}
;
_.onPaused = function onPaused_0(){
}
;
_.onRound = function onRound_0(round_0){
}
;
_.onWarEnd = function onWarEnd_0(reason, winners){
  ++this.warCounter;
  $setText(this.warCounterDisplay, 'Sessions so far:' + this.warCounter + ' (out of ' + this.totalWars + ')');
}
;
_.onWarPreStartClear = function onWarPreStartClear_0(){
}
;
_.onWarStart = function onWarStart_0(){
  $setVisible(this.battleFrame.cpuframe, true);
}
;
_.onWarriorBirth = function onWarriorBirth_0(w){
}
;
_.onWarriorDeath = function onWarriorDeath_0(warrior, reason){
}
;
_.scoreChanged = function scoreChanged(name_0, addedValue, groupIndex, subIndex){
  $addToValue(this.columnGraph, groupIndex, subIndex, addedValue);
}
;
_.m_isBattleShown = false;
_.m_isStartPaused = false;
_.totalWars = 0;
_.warCounter = 0;
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
      log_0('continueRun EXCEPTION ' + $toString(e, e.getLocalizedMessage()));
      $printStackTraceImpl(e, ($clinit_System() , err), '', '');
    }
     else 
      throw toJs($e0);
  }
}

function CompetitionWindow$1(this$0){
  this.this$01 = this$0;
}

defineClass(133, 1, {}, CompetitionWindow$1);
_.execute = function execute(timestamp){
  $execute(this);
}
;
var Lil_co_codeguru_corewars8086_gui_CompetitionWindow$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CompetitionWindow/1', 133);
function $run(this$static){
  $setText(this$static.this$01.warCounterDisplay, 'The competition is over. ' + this$static.this$01.warCounter + ' sessions were run.');
}

function CompetitionWindow$2(this$0){
  this.this$01 = this$0;
}

defineClass(134, 1, {}, CompetitionWindow$2);
var Lil_co_codeguru_corewars8086_gui_CompetitionWindow$2_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CompetitionWindow/2', 134);
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

function $flagChanged_callback(this$static, name_0, v){
  var currentWar, state;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return;
  state = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel).m_state;
  switch (name_0) {
    case 'OF':
      v?(state.m_flags = (state.m_flags | $intern_18) << 16 >> 16):(state.m_flags = (state.m_flags & -2049) << 16 >> 16);
      break;
    case 'DF':
      v?(state.m_flags = (state.m_flags | $intern_17) << 16 >> 16):(state.m_flags = (state.m_flags & -1025) << 16 >> 16);
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

function $initMemRegions(this$static, force){
  var currentWar, warrior;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return;
  warrior = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel);
  $initMemRegion(this$static.stackView, warrior.m_stackWritableRegion, currentWar.m_core, force);
  $initMemRegion(this$static.sharedMemView, warrior.m_sharedWritableRegion, currentWar.m_core, force);
  this$static.m_stateAccess.memory = currentWar.m_core;
}

function $onlySpaces(s){
  var c, i;
  for (i = 0; i < s.length; ++i) {
    c = (checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i));
    if (c != 32)
      return false;
  }
  return true;
}

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
    if (instanceOf($e0, 34)) {
      $errorPreventsStep(this$static.m_mainwnd, true);
      return this$static.m_base == 10?-2:-1;
    }
     else 
      throw toJs($e0);
  }
  if (v < 0 || v > $intern_14) {
    $errorPreventsStep(this$static.m_mainwnd, true);
    return -3;
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
      $onEndRound(this$static.m_mainwnd.battleFrame);
      break;
    case 'CS':
      state.m_cs = sv;
      $updateDebugLine(this$static.m_mainwnd.m_codeEditor);
      $onEndRound(this$static.m_mainwnd.battleFrame);
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
    entry0 = (entry = $next_0(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 49));
    $evalAndDisplay(entry0);
  }
  return 1;
}

function $setSelectedPlayer(this$static, playerLabel){
  this$static.m_currentWarriorLabel = playerLabel;
  this$static.m_currentWarriorIndex = -1;
  $initMemRegions(this$static, false);
  $updateFields(this$static);
}

function $setVisible(this$static, v){
  v?(this$static.cpuPanel.style.display = ''):(this$static.cpuPanel.style.display = 'none');
}

function $updateFields(this$static){
  var currentWar, entry, entry$iterator, entry0, outerIter, state;
  currentWar = this$static.competition.currentWar;
  if (!currentWar)
    return;
  this$static.m_currentWarriorIndex == -1 && (this$static.m_currentWarriorIndex = $getWarriorByLabel(currentWar, this$static.m_currentWarriorLabel).m_myIndex);
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
    entry0 = (entry = $next_0(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 49));
    $evalAndDisplay(entry0);
  }
}

function $updateFlagBoxes(this$static, state){
  $setValue(this$static.flagOF, (state.m_flags & $intern_18) == $intern_18);
  $setValue(this$static.flagDF, (state.m_flags & $intern_17) == $intern_17);
  $setValue(this$static.flagIF, (state.m_flags & 512) == 512);
  $setValue(this$static.flagTF, (state.m_flags & 256) == 256);
  $setValue(this$static.flagSF, (state.m_flags & 128) == 128);
  $setValue(this$static.flagZF, (state.m_flags & 64) == 64);
  $setValue(this$static.flagAF, (state.m_flags & 16) == 16);
  $setValue(this$static.flagPF, (state.m_flags & 4) == 4);
  $setValue(this$static.flagCF, (state.m_flags & 1) == 1);
}

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

defineClass(171, 1, $intern_23, CpuFrame);
_.j_addWatch_0 = function j_addWatch(watchId){
  var entry;
  entry = new CpuFrame$WatchEntry;
  $put(this.m_watches, valueOf_0(watchId), entry);
  entry.resultElem = castToNative(($clinit_DomGlobal() , document_0).getElementById('watch' + ('' + watchId) + '_val'), $wnd.HTMLElement);
  debug('Watchs: ' + ('' + $size(this.m_watches)));
}
;
_.j_delWatch_0 = function j_delWatch(watchId){
  $remove(this.m_watches, valueOf_0(watchId));
}
;
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
    entry0 = (entry = $next_0(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 49));
    entry0.base = base;
    $evalAndDisplay(entry0);
  }
}
;
_.j_watchTextChanged_0 = function j_watchTextChanged(s, watchId){
  var e, entry;
  entry = castTo($get(this.m_watches, valueOf_0(watchId)), 49);
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
_.onCompetitionEnd = function onCompetitionEnd_1(){
}
;
_.onCompetitionStart = function onCompetitionStart_1(){
}
;
_.onEndRound = function onEndRound_1(){
  $updateFields(this);
}
;
_.onMemoryWrite = function onMemoryWrite_0(address, value_0){
  var entry, entry$iterator, entry0, outerIter;
  for (entry$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this.m_watches)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); entry$iterator.val$outerIter2.hasNext;) {
    entry0 = (entry = $next_0(entry$iterator.val$outerIter2) , castTo(entry.getValue(), 49));
    $evalAndDisplay(entry0);
  }
}
;
_.onNoneAlive = function onNoneAlive_1(){
}
;
_.onPaused = function onPaused_1(){
}
;
_.onRound = function onRound_1(round_0){
}
;
_.onWarEnd = function onWarEnd_1(reason, winners){
}
;
_.onWarPreStartClear = function onWarPreStartClear_1(){
}
;
_.onWarStart = function onWarStart_1(){
  this.m_currentWarriorIndex = -1;
  $initMemRegions(this, true);
}
;
_.onWarriorBirth = function onWarriorBirth_1(w){
}
;
_.onWarriorDeath = function onWarriorDeath_1(warrior, reason){
}
;
_.onWriteState = function onWriteState_0(state){
}
;
_.m_base = 16;
_.m_currentWarriorIndex = -1;
var Lil_co_codeguru_corewars8086_gui_CpuFrame_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CpuFrame', 171);
function $getIdentifierValue(name_0){
  throw toJs(new Exception_0('unknown identifier ' + name_0));
}

function $getMemory(this$static, addr, seg, size_0){
  var linaddr, sseg;
  sseg = seg << 16 >> 16;
  seg == -1 && (sseg = this$static.state.m_ds);
  linaddr = linearAddress_0(sseg, addr << 16 >> 16);
  return size_0 == 1?$readByte(this$static.memory, linaddr) & 255:$readWord(this$static.memory, new RealModeAddress(linaddr)) & $intern_14;
}

function $getRegisterValue(this$static, name_0){
  if (!this$static.state) {
    throw toJs(new Exception_0('invalid state'));
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
  throw toJs(new Exception_0('unknown register name ' + name_0));
}

function CpuFrame$StateAccess(){
}

defineClass(172, 1, {}, CpuFrame$StateAccess);
var Lil_co_codeguru_corewars8086_gui_CpuFrame$StateAccess_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CpuFrame/StateAccess', 172);
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

function $setResult(this$static, v){
  setInnerText(this$static.resultElem, v);
  this$static.resultElem.title = v;
}

function CpuFrame$WatchEntry(){
}

defineClass(49, 1, {49:1}, CpuFrame$WatchEntry);
_.base = 16;
_.isValid = false;
var Lil_co_codeguru_corewars8086_gui_CpuFrame$WatchEntry_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'CpuFrame/WatchEntry', 49);
function $eatSpaces(this$static){
  while ($getCharacter(this$static) == 32)
    ++this$static.index_;
}

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

function $getCharacter(this$static){
  if (this$static.index_ < this$static.expr_.length)
    return $charAt(this$static.expr_, this$static.index_);
  return 0;
}

function $parseBin(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 1; this$static.index_++)
    value_0 = value_0 * 2 + h;
  return new ExpressionParser$NumNode(value_0);
}

function $parseDecimal(this$static){
  var d, value_0;
  value_0 = 0;
  for (; (d = toInteger($getCharacter(this$static))) <= 9; this$static.index_++)
    value_0 = value_0 * 10 + d;
  return new ExpressionParser$NumNode(value_0);
}

function $parseExpr(this$static){
  var op, value_0;
  $push_0(this$static.stack_, new ExpressionParser$OperatorValue(new ExpressionParser$Operator(($clinit_ExpressionParser$EOps() , OPERATOR_NULL), 0, 76), new ExpressionParser$NumNode(0)));
  value_0 = $parseValue(this$static);
  while (this$static.stack_.arrayList.array.length != 0) {
    op = $parseOp(this$static);
    while (op.precedence < castTo($peek(this$static.stack_), 41).op.precedence || op.precedence == castTo($peek(this$static.stack_), 41).op.precedence && op.associativity == 76) {
      if (castTo($peek(this$static.stack_), 41).op.op == OPERATOR_NULL) {
        $pop_0(this$static.stack_);
        return value_0;
      }
      value_0 = new ExpressionParser$BinaryOpNode(castTo($peek(this$static.stack_), 41).value_0, value_0, castTo($peek(this$static.stack_), 41).op.op);
      $pop_0(this$static.stack_);
    }
    $push_0(this$static.stack_, new ExpressionParser$OperatorValue(op, value_0));
    value_0 = $parseValue(this$static);
  }
  return null;
}

function $parseHex(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 15; this$static.index_++)
    value_0 = value_0 * 16 + h;
  return new ExpressionParser$NumNode(value_0);
}

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
  if ($contains_0(m_registers, idup)) {
    return new ExpressionParser$RegisterNode(idup, this$static.m_stateAccess);
  }
  return new ExpressionParser$IdentifierNode(idup);
}

function $parseOct(this$static){
  var h, value_0;
  this$static.index_ = this$static.index_ + 2;
  value_0 = 0;
  for (; (h = toInteger($getCharacter(this$static))) <= 7; this$static.index_++)
    value_0 = value_0 * 8 + h;
  return new ExpressionParser$NumNode(value_0);
}

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
        throw toJs(new Exception_0("Syntax error: `)' expected at end of expression"));
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
        throw toJs(new Exception_0("Syntax error: `]' expected at end of expression"));
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
      throw toJs(new Exception_0('Syntax error: value expected at end of expression'));
  }
  return val;
}

function $unexpected(this$static){
  var msg;
  msg = new StringBuilder;
  msg.string += 'Syntax error: unexpected token "';
  $append_4(msg, $substring_1(this$static.expr_, this$static.index_, this$static.expr_.length));
  msg.string += '" at index ';
  $append_1(msg, this$static.index_);
  throw toJs(new Exception_0(msg.string));
}

function ExpressionParser(){
  this.stack_ = new Stack;
  !m_registers && (m_registers = new HashSet_0(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_11, 2, 6, ['AX', 'AL', 'AH', 'BX', 'BL', 'BH', 'CX', 'CL', 'CH', 'DX', 'DH', 'DL', 'SI', 'DI', 'BP', 'SP', 'IP', 'CS', 'DS', 'SS', 'ES', 'ENERGY', 'FLAGS']))));
}

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

function toInteger(c){
  if (c >= 48 && c <= 57)
    return c - 48;
  if (c >= 97 && c <= 102)
    return c - 97 + 10;
  if (c >= 65 && c <= 70)
    return c - 65 + 10;
  return 16;
}

defineClass(173, 1, {}, ExpressionParser);
_.index_ = 0;
_.m_stateAccess = null;
var m_registers = null;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser', 173);
function $checkZero(v){
  if (v == 0) {
    throw toJs(new Exception_0('Division by zero'));
  }
  return v;
}

function ExpressionParser$BinaryOpNode(l, r, _op){
  this.left = l;
  this.right = r;
  this.op = _op;
}

defineClass(174, 1, {}, ExpressionParser$BinaryOpNode);
_.eval_0 = function eval_0(){
  var ret, v1, v2;
  v1 = this.left.eval_0() & $intern_14;
  v2 = this.right.eval_0() & $intern_14;
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
    default:throw toJs(new Exception_0('unexpected operator'));
  }
  return ret & $intern_14;
}
;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$BinaryOpNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/BinaryOpNode', 174);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

function createValueOfMap(enumConstants){
  var result, value_0, value$index, value$max;
  result = {};
  for (value$index = 0 , value$max = enumConstants.length; value$index < value$max; ++value$index) {
    value_0 = enumConstants[value$index];
    result[':' + (value_0.name_0 != null?value_0.name_0:'' + value_0.ordinal)] = value_0;
  }
  return result;
}

function valueOf(map_0, name_0){
  var result;
  checkCriticalNotNull(name_0);
  result = map_0[':' + name_0];
  checkCriticalArgument_1(!!result, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [name_0]));
  return result;
}

defineClass(51, 1, {3:1, 33:1, 51:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 51));
}
;
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_5(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
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

function ExpressionParser$EOps(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values(){
  $clinit_ExpressionParser$EOps();
  return stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_gui_ExpressionParser$EOps_2_classLit, 1), $intern_1, 17, 0, [OPERATOR_NULL, OPERATOR_BITWISE_OR, OPERATOR_BITWISE_XOR, OPERATOR_BITWISE_AND, OPERATOR_BITWISE_SHL, OPERATOR_BITWISE_SHR, OPERATOR_ADDITION, OPERATOR_SUBTRACTION, OPERATOR_MULTIPLICATION, OPERATOR_DIVISION, OPERATOR_MODULO, OPERATOR_POWER, OPERATOR_EXPONENT]);
}

defineClass(17, 51, {17:1, 3:1, 33:1, 51:1}, ExpressionParser$EOps);
var OPERATOR_ADDITION, OPERATOR_BITWISE_AND, OPERATOR_BITWISE_OR, OPERATOR_BITWISE_SHL, OPERATOR_BITWISE_SHR, OPERATOR_BITWISE_XOR, OPERATOR_DIVISION, OPERATOR_EXPONENT, OPERATOR_MODULO, OPERATOR_MULTIPLICATION, OPERATOR_NULL, OPERATOR_POWER, OPERATOR_SUBTRACTION;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$EOps_2_classLit = createForEnum('il.co.codeguru.corewars8086.gui', 'ExpressionParser/EOps', 17, values);
function ExpressionParser$IdentifierNode(_name){
  this.name_0 = _name;
}

defineClass(178, 1, {}, ExpressionParser$IdentifierNode);
_.eval_0 = function eval_1(){
  return $getIdentifierValue(this.name_0) & $intern_14;
}
;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$IdentifierNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/IdentifierNode', 178);
function ExpressionParser$MemAccessNode(_vseg, _vaddr, _sz, _state){
  this.vseg = _vseg;
  this.vaddr = _vaddr;
  this.sz = _sz;
  this.state = _state;
}

defineClass(179, 1, {}, ExpressionParser$MemAccessNode);
_.eval_0 = function eval_2(){
  var addr, seg;
  addr = this.vaddr.eval_0() & $intern_14;
  seg = -1;
  !!this.vseg && (seg = this.vseg.eval_0() & $intern_14);
  return $getMemory(this.state, addr, seg, this.sz);
}
;
_.sz = 0;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$MemAccessNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/MemAccessNode', 179);
function ExpressionParser$NumNode(_v){
  this.v = _v;
}

defineClass(62, 1, {}, ExpressionParser$NumNode);
_.eval_0 = function eval_3(){
  return this.v;
}
;
_.v = 0;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$NumNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/NumNode', 62);
function ExpressionParser$Operator(opr, prec, assoc){
  this.op = opr;
  this.precedence = prec;
  this.associativity = assoc;
}

defineClass(18, 1, {}, ExpressionParser$Operator);
_.associativity = 0;
_.precedence = 0;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$Operator_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/Operator', 18);
function ExpressionParser$OperatorValue(opr, val){
  this.op = opr;
  this.value_0 = val;
}

defineClass(41, 1, {41:1}, ExpressionParser$OperatorValue);
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$OperatorValue_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/OperatorValue', 41);
function ExpressionParser$RegisterNode(_name, _state){
  this.name_0 = _name;
  this.state = _state;
}

defineClass(177, 1, {}, ExpressionParser$RegisterNode);
_.eval_0 = function eval_4(){
  return $getRegisterValue(this.state, this.name_0) & $intern_14;
}
;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$RegisterNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/RegisterNode', 177);
function ExpressionParser$UnaryNegNode(c){
  this.child = c;
}

defineClass(175, 1, {}, ExpressionParser$UnaryNegNode);
_.eval_0 = function eval_5(){
  return -(this.child.eval_0() & $intern_14) & $intern_14;
}
;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$UnaryNegNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/UnaryNegNode', 175);
function ExpressionParser$UnaryNotNode(c){
  this.child = c;
}

defineClass(176, 1, {}, ExpressionParser$UnaryNotNode);
_.eval_0 = function eval_6(){
  return ~(this.child.eval_0() & $intern_14) & $intern_14;
}
;
var Lil_co_codeguru_corewars8086_gui_ExpressionParser$UnaryNotNode_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'ExpressionParser/UnaryNotNode', 176);
function JPanel(){
  JComponent.call(this);
}

function JPanel_0(){
  JComponent.call(this);
}

defineClass(12, 22, {}, JPanel, JPanel_0);
var Lil_co_codeguru_corewars8086_gui_widgets_JPanel_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JPanel', 12);
function $lambda$0_0(this$static, name_1){
  $flagChanged_callback(this$static.m_frame, name_1, this$static.checkBox.checked);
}

function $setValue(this$static, value_0){
  this$static.checkBox.checked = value_0;
}

function FlagFields(name_0, frame_0){
  var ename;
  JPanel.call(this);
  this.m_frame = frame_0;
  ename = name_0 + '_fcheck';
  this.checkBox = castToNative(($clinit_DomGlobal() , document_0).getElementById(ename), $wnd.HTMLInputElement);
  this.checkBox == null && (console.error('Did not find flag ' + name_0) , undefined);
  this.checkBox.addEventListener('change', new FlagFields$lambda$0$Type(this, name_0));
}

defineClass(37, 12, {}, FlagFields);
var Lil_co_codeguru_corewars8086_gui_FlagFields_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'FlagFields', 37);
function FlagFields$lambda$0$Type($$outer_0, name_1){
  this.$$outer_0 = $$outer_0;
  this.name_1 = name_1;
}

defineClass(195, 1, {}, FlagFields$lambda$0$Type);
_.handleEvent = function handleEvent_5(arg0){
  $lambda$0_0(this.$$outer_0, this.name_1);
}
;
var Lil_co_codeguru_corewars8086_gui_FlagFields$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'FlagFields/lambda$0$Type', 195);
function $initMemRegion(this$static, region, memory, force){
  var addr, df, e, sb;
  if (!force && $equals(this$static.m_currentRegion, region))
    return;
  df = ($clinit_DomGlobal() , document_0).createDocumentFragment();
  for (addr = region.m_start; addr <= region.m_end; addr += this$static.m_step) {
    e = document_0.createElement('div');
    e.setAttribute('id', this$static.m_innerPrefix + ('' + addr));
    sb = new StringBuilder;
    $append_4(sb, hex5(addr));
    sb.string += '   ';
    $append_4(sb, hex2((memory.m_data[addr % $intern_24] & 255) << 16 >> 16));
    sb.string += '\u202F';
    $append_4(sb, hex2((memory.m_data[(addr + 1) % $intern_24] & 255) << 16 >> 16));
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

function MemRegionView(id_0, innerPrefix){
  this.m_currentRegion = new RealModeMemoryRegion;
  this.m_htmlList = castToNative(($clinit_DomGlobal() , document_0).getElementById(id_0), $wnd.HTMLElement);
  this.m_innerPrefix = innerPrefix;
  this.m_step = 2;
}

defineClass(100, 1, {57:1}, MemRegionView);
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
_.onWriteState = function onWriteState_1(state){
}
;
_.m_lastMovedToElem = null;
_.m_lastMovedToLine = -1;
_.m_step = 0;
var Lil_co_codeguru_corewars8086_gui_MemRegionView_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'MemRegionView', 100);
function $checkPlayersReady(this$static){
  var c, ci, countEnabled, i, p;
  if (this$static.m_players.array.length == 0) {
    console.error('No players added');
    return false;
  }
  countEnabled = 0;
  for (i = 0; i < this$static.m_players.array.length; ++i) {
    p = castTo($get_0(this$static.m_players, i), 30);
    if (!p.isEnabled)
      continue;
    ++countEnabled;
    for (ci = 0; ci < p.activeCodes; ++ci) {
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

function $exportMethods_3(this$static){
  var that = this$static;
  $wnd.j_srcSelectionChanged = $entry(function(s, i){
    that.j_srcSelectionChanged_0(s, i);
  }
  );
  $wnd.j_addPlayer = $entry(function(a, b){
    that.addPlayer(a, b);
  }
  );
  $wnd.j_removePlayer = $entry(function(s){
    that.removePlayer(s);
  }
  );
  $wnd.j_changedWType = $entry(function(a, b){
    that.changedWType(a, b);
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
}

function $findCode(this$static, label_0){
  var ci, pi;
  pi = $findPlayer(this$static, (checkCriticalStringElementIndex(0, label_0.length) , label_0.charCodeAt(0)));
  if (!pi)
    return null;
  ci = (checkCriticalStringElementIndex(1, label_0.length) , label_0.charCodeAt(1) - 48);
  return pi.code_0[ci];
}

function $findPlayer(this$static, label_0){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_1(p$iterator), 30);
    if ($charAt(p.label_0, 0) == label_0)
      return p;
  }
  return null;
}

function $findPlayer_0(this$static, label_0){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_1(p$iterator), 30);
    if ($equals_0(p.label_0, label_0))
      return p;
  }
  return null;
}

function $getFiles(this$static){
  var c, count, i, p, p$iterator, p$iterator0;
  count = 0;
  for (p$iterator0 = new ArrayList$1(this$static.m_players); p$iterator0.i < p$iterator0.this$01.array.length;) {
    p = castTo($next_1(p$iterator0), 30);
    count += p.activeCodes;
  }
  i = 0;
  c = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit, $intern_1, 40, count, 0, 1);
  for (p$iterator = new ArrayList$1(this$static.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_1(p$iterator), 30);
    c[i++] = p.code_0[0];
    p.wtype != ($clinit_PlayersPanel$EWarriorType() , SINGLE) && (c[i++] = p.code_0[1]);
  }
  return c;
}

function $reWriteButtonsLabels(p){
  var vu, vu1, vu2, vup;
  vu = $replace(p.title_0, 32, 95);
  switch (p.wtype.ordinal) {
    case 0:
      p.code_0[0].name_0 = vu;
      castToNative(($clinit_DomGlobal() , document_0).getElementById('sel_code_lbl_w1_p' + p.label_0), $wnd.HTMLElement).innerHTML = vu;
      break;
    case 1:
      vup = vu + '1,2';
      p.code_0[0].name_0 = vup;
      castToNative(($clinit_DomGlobal() , document_0).getElementById('sel_code_lbl_w1_p' + p.label_0), $wnd.HTMLElement).innerHTML = vup;
      break;
    case 2:
      vu1 = vu + '1';
      vu2 = vu + '2';
      p.code_0[0].name_0 = vu1;
      p.code_0[1].name_0 = vu2;
      castToNative(($clinit_DomGlobal() , document_0).getElementById('sel_code_lbl_w1_p' + p.label_0), $wnd.HTMLElement).innerHTML = vu1;
      castToNative(document_0.getElementById('sel_code_lbl_w2_p' + p.label_0), $wnd.HTMLElement).innerHTML = vu2;
  }
}

function $setDebugMode_1(this$static, v){
  v?(this$static.addPlayerBtn.style.display = 'none'):(this$static.addPlayerBtn.style.display = '');
}

function $updateAsmResult(this$static, compileOk, binbuffer, lines){
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.bin = binbuffer;
  this$static.m_inEditor.lastCompileOk = compileOk;
  this$static.m_inEditor.lines = lines;
}

function $updateLoadAddr(value_0, isRand){
  $wnd.updateLoadAddr(value_0, isRand);
}

function $updateText(this$static, text_0){
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.asmText = text_0;
}

function $updateTitle(this$static, v){
  var pt;
  if (!this$static.m_inEditor)
    return;
  this$static.m_inEditor.player.title_0 = v;
  pt = this$static.m_inEditor.player.label_0;
  castToNative(($clinit_DomGlobal() , document_0).getElementById('player_name_lbl_p' + pt), $wnd.HTMLElement).innerHTML = v;
  $reWriteButtonsLabels(this$static.m_inEditor.player);
}

function PlayersPanel(mainWnd){
  this.m_players = new ArrayList;
  this.m_mainWnd = mainWnd;
  this.addPlayerBtn = castToNative(($clinit_DomGlobal() , document_0).getElementById('addPlayerBtn'), $wnd.HTMLElement);
  $exportMethods_3(this);
}

defineClass(156, 1, {}, PlayersPanel);
_.addPlayer = function addPlayer(label_0, title_0){
  var p, tu;
  if (label_0 == null)
    return;
  if ($findPlayer_0(this, label_0))
    throw toJs(new RuntimeException_0('label already taken ' + label_0));
  p = new PlayersPanel$PlayerInfo(label_0, title_0);
  tu = $replace(title_0, 32, 95);
  p.code_0[0].name_0 = tu + '1';
  p.code_0[1].name_0 = tu + '2';
  $add_0(this.m_players, p);
  log_0('Added ' + label_0 + ' ' + ('' + this.m_players.array.length));
}
;
_.changedWType = function changedWType(label_0, v){
  var p;
  p = $findPlayer_0(this, label_0);
  $setWType(p, ($clinit_PlayersPanel$EWarriorType() , castTo(valueOf(($clinit_PlayersPanel$EWarriorType$Map() , $MAP), v), 48)));
  $reWriteButtonsLabels(p);
}
;
_.j_demoDebugPlayers_0 = function j_demoDebugPlayers(){
  this.m_inEditor = castTo($get_0(this.m_players, 1), 30).code_0[0];
  this.m_inEditor.asmText = 'start:\ninc cx\njmp start';
  $playerSelectionChanged(this.m_mainWnd.m_codeEditor, this.m_inEditor, this);
  this.m_inEditor = castTo($get_0(this.m_players, 0), 30).code_0[0];
  this.m_inEditor.asmText = 'start:\nmov bx, ax\nadd bx, 12\nloop:\nmov byte[bx],0x11\ninc bx\njmp loop';
  $playerSelectionChanged(this.m_mainWnd.m_codeEditor, this.m_inEditor, this);
}
;
_.j_loadAddrChanged_0 = function j_loadAddrChanged(value_0, isRand){
  if (!this.m_inEditor)
    return;
  this.m_inEditor.startAddrRandom = isRand;
  this.m_inEditor.startAddress = value_0;
}
;
_.j_loadBinary_0 = function j_loadBinary(buf){
  var arr, ba, i, len;
  len = buf.byteLength;
  if (len == 0) {
    console.error('loaded file is empty, ignoring');
    return;
  }
  arr = new Int8Array(buf);
  ba = initUnidimensionalArray(B_classLit, $intern_20, 11, len, 15, 1);
  for (i = 0; i < len; ++i)
    ba[i] = arr[i];
  this.m_inEditor.bin = ba;
  this.m_inEditor.asmText = '';
  this.m_inEditor.lastCompileOk = true;
  this.m_inEditor.breakpoints.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  $loadedNewBinary(this.m_mainWnd.m_codeEditor, this.m_inEditor, this);
}
;
_.j_srcSelectionChanged_0 = function j_srcSelectionChanged(playerLabel, num){
  var p;
  p = $findPlayer_0(this, playerLabel);
  this.m_inEditor = null;
  if (!p)
    return;
  this.m_inEditor = p.code_0[num - 1];
  $playerSelectionChanged(this.m_mainWnd.m_codeEditor, this.m_inEditor, null);
  $setSelectedPlayer(this.m_mainWnd.battleFrame.cpuframe, this.m_inEditor.label_0);
  $updateLoadAddr(this.m_inEditor.startAddress, this.m_inEditor.startAddrRandom);
  $srcSelectionChanged(this.m_mainWnd, this.m_inEditor.label_0);
}
;
_.removePlayer = function removePlayer(label_0){
  var p, p$iterator;
  for (p$iterator = new ArrayList$1(this.m_players); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castTo($next_1(p$iterator), 30);
    if ($equals_0(label_0, p.label_0)) {
      $remove_2(this.m_players, p);
      log_0('Removed ' + label_0 + ' ' + ('' + this.m_players.array.length));
      return;
    }
  }
  throw toJs(new RuntimeException_0('player not found' + label_0));
}
;
_.m_inEditor = null;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel', 156);
function PlayersPanel$Breakpoint(_lineNum){
  this.lineNum = _lineNum;
}

defineClass(29, 1, {29:1}, PlayersPanel$Breakpoint);
_.lineNum = 0;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$Breakpoint_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel/Breakpoint', 29);
function PlayersPanel$Code(p, idx){
  this.player = p;
  this.label_0 = p.label_0 + ('' + idx);
  this.breakpoints = new ArrayList;
}

defineClass(40, 1, {40:1}, PlayersPanel$Code);
_.asmText = '';
_.bin = null;
_.lastCompileOk = true;
_.startAddrRandom = true;
_.startAddress = 'A000';
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel/Code', 40);
function $clinit_PlayersPanel$EWarriorType(){
  $clinit_PlayersPanel$EWarriorType = emptyMethod;
  SINGLE = new PlayersPanel$EWarriorType('SINGLE', 0);
  TWO_IDENTICAL = new PlayersPanel$EWarriorType('TWO_IDENTICAL', 1);
  TWO_DIFFERENT = new PlayersPanel$EWarriorType('TWO_DIFFERENT', 2);
}

function PlayersPanel$EWarriorType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_PlayersPanel$EWarriorType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$EWarriorType_2_classLit, 1), $intern_1, 48, 0, [SINGLE, TWO_IDENTICAL, TWO_DIFFERENT]);
}

defineClass(48, 51, {48:1, 3:1, 33:1, 51:1}, PlayersPanel$EWarriorType);
var SINGLE, TWO_DIFFERENT, TWO_IDENTICAL;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$EWarriorType_2_classLit = createForEnum('il.co.codeguru.corewars8086.gui', 'PlayersPanel/EWarriorType', 48, values_0);
function $clinit_PlayersPanel$EWarriorType$Map(){
  $clinit_PlayersPanel$EWarriorType$Map = emptyMethod;
  $MAP = createValueOfMap(($clinit_PlayersPanel$EWarriorType() , stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$EWarriorType_2_classLit, 1), $intern_1, 48, 0, [SINGLE, TWO_IDENTICAL, TWO_DIFFERENT])));
}

var $MAP;
function $setWType(this$static, v){
  this$static.wtype = v;
  this$static.activeCodes = v == ($clinit_PlayersPanel$EWarriorType() , SINGLE)?1:2;
}

function PlayersPanel$PlayerInfo(lbl, ttl){
  this.code_0 = initUnidimensionalArray(Lil_co_codeguru_corewars8086_gui_PlayersPanel$Code_2_classLit, $intern_1, 40, 2, 0, 1);
  this.wtype = ($clinit_PlayersPanel$EWarriorType() , SINGLE);
  this.label_0 = lbl;
  this.title_0 = ttl;
  this.code_0[0] = new PlayersPanel$Code(this, 0);
  this.code_0[1] = new PlayersPanel$Code(this, 1);
}

defineClass(30, 1, {30:1}, PlayersPanel$PlayerInfo);
_.activeCodes = 1;
_.isEnabled = true;
var Lil_co_codeguru_corewars8086_gui_PlayersPanel$PlayerInfo_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'PlayersPanel/PlayerInfo', 30);
function $editChanged(this$static){
  var setok;
  setok = $regChanged_callback(this$static.m_frame, this$static.m_name, this$static.textField.value);
  if (setok != 1) {
    this$static.textField.classList.add('dbg_reg_err');
    switch (setok) {
      case -1:
        this$static.textField.title = 'Failed to parse hex number';
        break;
      case -2:
        this$static.textField.title = 'Failed to parse decimal number';
        break;
      case -3:
        this$static.textField.title = 'Out of range';
    }
    this$static.m_lastInputOk = false;
  }
   else {
    this$static.textField.classList.remove('dbg_reg_err');
    this$static.textField.removeAttribute('title');
    this$static.m_lastInputOk = true;
  }
}

function $setBase(this$static, base){
  this$static.m_base = base;
  this$static.m_lastInputOk?$setValue_0(this$static, this$static.m_lastValue):$editChanged(this$static);
}

function $setValue_0(this$static, value_0){
  this$static.m_lastValue = value_0;
  this$static.m_base == 16?(this$static.textField.value = hex4(value_0 & $intern_14)):(this$static.textField.value = '' + (value_0 & $intern_14));
}

function RegisterField(name_0, frame_0){
  var ename;
  this.m_frame = frame_0;
  this.m_name = name_0;
  ename = 'reg_' + name_0;
  this.textField = castToNative(($clinit_DomGlobal() , document_0).getElementById(ename), $wnd.HTMLInputElement);
  this.textField == null && (console.error('Not found register ' + name_0) , undefined);
  this.textField.addEventListener('input', new RegisterField$lambda$0$Type(this));
}

defineClass(19, 1, {}, RegisterField);
_.m_base = 16;
_.m_lastInputOk = true;
_.m_lastValue = 0;
var Lil_co_codeguru_corewars8086_gui_RegisterField_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'RegisterField', 19);
function RegisterField$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(194, 1, {}, RegisterField$lambda$0$Type);
_.handleEvent = function handleEvent_6(arg0){
  $editChanged(this.$$outer_0);
}
;
var Lil_co_codeguru_corewars8086_gui_RegisterField$lambda$0$Type_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'RegisterField/lambda$0$Type', 194);
function $addMessage(this$static, round_0, message){
  $append(this$static.messagesArea, '[' + round_0 + '] ' + message + '\n');
  $scrollToBottom(this$static.messagesArea);
}

function $onEndRound(this$static){
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
      ipInsideArena = linearAddress_0(cs, ip) - $intern_21;
      $paintPointer(this$static.warCanvas, ipInsideArena & $intern_14, i << 24 >> 24);
    }
}

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
  new JLabel;
  speedSliderVal = castToNative(($clinit_DomGlobal() , document_0).getElementById('speedSliderVal'), $wnd.HTMLElement);
  this.speedSlider = new JSlider;
  $addActionListener(this.speedSlider, new WarFrame$1(this, speedSliderVal));
  this.nRoundNumber = 0;
  new JLabel;
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

defineClass(165, 98, $intern_23, WarFrame);
_.onCompetitionEnd = function onCompetitionEnd_2(){
  $setEnabled(this.btnPause, false);
}
;
_.onCompetitionStart = function onCompetitionStart_2(){
  $setEnabled(this.btnPause, true);
}
;
_.onEndRound = function onEndRound_2(){
  $onEndRound(this);
}
;
_.onMemoryWrite = function onMemoryWrite_2(address, value_0){
  var ipInsideArena;
  if (!this.mainWnd.m_isBattleShown)
    return;
  ipInsideArena = address.m_linearAddress - $intern_21;
  address.m_linearAddress >= $intern_21 && address.m_linearAddress < 131072 && $paintPixel(this.warCanvas, ipInsideArena & $intern_14, $getCurrentWarrior_0(this.competition) << 24 >> 24, value_0);
}
;
_.onNoneAlive = function onNoneAlive_2(){
  $addMessage(this, this.nRoundNumber, 'No players left alive');
  $setEnabled(this.btnSingleRound, false);
  $setEnabled(this.btnPause, false);
}
;
_.onPaused = function onPaused_2(){
  $setText(this.btnPause, 'Resume');
  $setEnabled(this.btnSingleRound, true);
}
;
_.onRound = function onRound_2(round_0){
  if (!this.mainWnd.m_isBattleShown)
    return;
  this.nRoundNumber = round_0;
  $setEnabled(this.btnPause, true);
}
;
_.onWarEnd = function onWarEnd_2(reason, winners){
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
}
;
_.onWarPreStartClear = function onWarPreStartClear_2(){
  $clear(this.warCanvas);
  $initStartWar(this.warCanvas, this.competition.currentWar);
}
;
_.onWarStart = function onWarStart_2(){
  $append(this.messagesArea, '=== Session started ===\n');
  $scrollToBottom(this.messagesArea);
  if (this.competition.currentWar.isPaused) {
    $setText(this.btnPause, 'Resume');
    $setEnabled(this.btnSingleRound, true);
  }
}
;
_.onWarriorBirth = function onWarriorBirth_2(w){
  $addMessage(this, this.nRoundNumber, w.m_name + ' enters the arena at ' + hex4(w.m_loadAddress.m_offset & $intern_14));
  new WarFrame$WarriorInfo(w.m_name);
}
;
_.onWarriorDeath = function onWarriorDeath_2(warrior, reason){
  var warriorName;
  warriorName = warrior.m_name;
  $addMessage(this, this.nRoundNumber, warriorName + ' died due to ' + reason + '.');
}
;
_.onWriteState = function onWriteState_2(state){
}
;
_.nRoundNumber = 0;
var Lil_co_codeguru_corewars8086_gui_WarFrame_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame', 165);
function WarFrame$1(this$0, val$speedSliderVal){
  this.this$01 = this$0;
  this.val$speedSliderVal2 = val$speedSliderVal;
}

defineClass(168, 1, {}, WarFrame$1);
_.actionPerformed = function actionPerformed(e){
  var s;
  s = __parseAndValidateInt(castToNative(this.this$01.speedSlider.m_element, $wnd.HTMLInputElement).value, 10);
  s > 100 && (s = round_int($wnd.Math.pow(s - 80, 1.5)));
  this.val$speedSliderVal2.innerHTML = '' + s;
  $setSpeed(this.this$01.competition, s);
}
;
var Lil_co_codeguru_corewars8086_gui_WarFrame$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/1', 168);
function WarFrame$2(this$0, val$competition, val$mainWnd){
  this.this$01 = this$0;
  this.val$competition2 = val$competition;
  this.val$mainWnd3 = val$mainWnd;
}

defineClass(169, 1, {}, WarFrame$2);
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
var Lil_co_codeguru_corewars8086_gui_WarFrame$2_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/2', 169);
function WarFrame$3(val$competition, val$mainWnd){
  this.val$competition2 = val$competition;
  this.val$mainWnd3 = val$mainWnd;
}

defineClass(170, 1, {}, WarFrame$3);
_.actionPerformed = function actionPerformed_1(arg0){
  if (!this.val$competition2.currentWar) {
    console.log('no war');
    return;
  }
  $runSingleRound(this.val$competition2.currentWar);
  $requestFrame(this.val$mainWnd3);
}
;
var Lil_co_codeguru_corewars8086_gui_WarFrame$3_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/3', 170);
function JLabel(){
  JComponent.call(this);
}

defineClass(46, 22, {}, JLabel);
var Lil_co_codeguru_corewars8086_gui_widgets_JLabel_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JLabel', 46);
function WarFrame$NameCellRenderer(){
}

defineClass(166, 46, {}, WarFrame$NameCellRenderer);
var Lil_co_codeguru_corewars8086_gui_WarFrame$NameCellRenderer_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/NameCellRenderer', 166);
function WarFrame$WarriorInfo(name_0){
  this.name_0 = name_0;
}

defineClass(167, 1, {}, WarFrame$WarriorInfo);
_.equals_0 = function equals_1(obj){
  return obj != null && instanceOfString(obj) && $equals_0(castToString(obj), this.name_0);
}
;
_.toString_0 = function toString_6(){
  return this.name_0;
}
;
var Lil_co_codeguru_corewars8086_gui_WarFrame$WarriorInfo_2_classLit = createForClass('il.co.codeguru.corewars8086.gui', 'WarFrame/WarriorInfo', 167);
function ActionEvent(){
}

defineClass(106, 1, {}, ActionEvent);
var Lil_co_codeguru_corewars8086_gui_widgets_ActionEvent_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'ActionEvent', 106);
function $clinit_Color(){
  $clinit_Color = emptyMethod;
  new Color(0, 0, 0);
}

function $darker(this$static){
  return new Color_0($wnd.Math.max(round_int(this$static.m_r * 0.7), 0), $wnd.Math.max(round_int(this$static.m_r * 0.7), 0), $wnd.Math.max(round_int(this$static.m_r * 0.7), 0), this$static.m_r);
}

function $toString_0(this$static){
  if (this$static.m_a == 1)
    return 'rgb(' + ('' + this$static.m_r) + ',' + ('' + this$static.m_g) + ',' + ('' + this$static.m_b) + ')';
  return 'rgb(' + ('' + this$static.m_r) + ',' + ('' + this$static.m_g) + ',' + ('' + this$static.m_b) + ',' + ('' + this$static.m_a) + ')';
}

function Color(r, g, b){
  $clinit_Color();
  this.m_r = r;
  this.m_g = g;
  this.m_b = b;
  this.m_a = 1;
  this.m_isDark = 0.3 * r + 0.58 * g + 0.12 * b < 128;
}

function Color_0(r, g, b, a){
  this.m_r = r;
  this.m_g = g;
  this.m_b = b;
  this.m_a = a;
  this.m_isDark = 0.3 * r + 0.58 * g + 0.12 * b < 128;
}

function HSBtoRGB(hue){
  $clinit_Color();
  var b, f, g, h, q, r, t;
  r = 0;
  g = 0;
  b = 0;
  h = (hue - $wnd.Math.floor(hue)) * 6;
  f = h - $wnd.Math.floor(h);
  q = $intern_25 * (1 - $intern_26 * f);
  t = $intern_25 * (1 - $intern_26 * (1 - f));
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

defineClass(43, 1, {43:1}, Color, Color_0);
_.toString_0 = function toString_7(){
  return $toString_0(this);
}
;
_.m_a = 0;
_.m_b = 0;
_.m_g = 0;
_.m_isDark = false;
_.m_r = 0;
var BLACK = '#000000', WHITE = '#ffffff';
var Lil_co_codeguru_corewars8086_gui_widgets_Color_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'Color', 43);
function debug(text_0){
  console.log(text_0);
}

function error_0(text_0){
  console.error(text_0);
}

function log_0(text_0){
  console.log(text_0);
}

defineClass(243, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 243);
defineClass(244, 243, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 244);
function PrintStream(){
}

defineClass(96, 244, {}, PrintStream);
_.println = function println(s){
}
;
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 96);
function $consoleLog(msg){
  window.console?window.console.log(msg):(document.title = 'LOG:' + msg);
}

function ConsolePrintStream(){
  this.buf = new StringBuilder;
}

defineClass(132, 96, {}, ConsolePrintStream);
_.println = function println_0(s){
  $append_4(this.buf, s);
  $consoleLog(this.buf.string);
  $setLength(this.buf);
}
;
var Lil_co_codeguru_corewars8086_gui_widgets_ConsolePrintStream_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'ConsolePrintStream', 132);
function Dimension(w, h){
  this.width_0 = w;
  this.height_0 = h;
}

defineClass(86, 1, {}, Dimension);
_.height_0 = 0;
_.width_0 = 0;
var Lil_co_codeguru_corewars8086_gui_widgets_Dimension_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'Dimension', 86);
function $add(this$static, pListener){
  $add_1(this$static.mListeners, pListener);
}

function $doneAdding(this$static){
  this$static.mListenersArr = $toArray(this$static.mListeners);
  this$static.mListeners = null;
}

function EventMulticasterBase(){
  this.mListeners = new HashSet;
}

defineClass(82, 1, {});
_.mListenersArr = null;
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterBase_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterBase', 82);
function EventMulticasterCompetition(){
  EventMulticasterBase.call(this);
  this.debugProxy = new EventMulticasterCompetition$DebugHandler(this);
  this.competeProxy = new EventMulticasterCompetition$CompeteHandler(this);
}

defineClass(157, 82, {}, EventMulticasterCompetition);
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterCompetition_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterCompetition', 157);
function $onCompetitionEnd(this$static){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onCompetitionEnd();
  }
}

function $onCompetitionStart(this$static){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onCompetitionStart();
  }
}

function $onNoneAlive(this$static){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onNoneAlive();
  }
}

function $onPaused(this$static){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onPaused();
  }
}

function $onWarEnd(this$static, reason, winners){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onWarEnd(reason, winners);
  }
}

function $onWarPreStartClear(this$static){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onWarPreStartClear();
  }
}

function $onWarStart(this$static){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onWarStart();
  }
}

function $onWarriorBirth(this$static, w){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onWarriorBirth(w);
  }
}

function $onWarriorDeath(this$static, warrior, reason){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onWarriorDeath(warrior, reason);
  }
}

function EventMulticasterCompetition$DebugHandler(this$0){
  this.this$01 = this$0;
}

defineClass(99, 1, {20:1}, EventMulticasterCompetition$DebugHandler);
_.onCompetitionEnd = function onCompetitionEnd_3(){
  $onCompetitionEnd(this);
}
;
_.onCompetitionStart = function onCompetitionStart_3(){
  $onCompetitionStart(this);
}
;
_.onEndRound = function onEndRound_3(){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onEndRound();
  }
}
;
_.onNoneAlive = function onNoneAlive_3(){
  $onNoneAlive(this);
}
;
_.onPaused = function onPaused_3(){
  $onPaused(this);
}
;
_.onRound = function onRound_3(round_0){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 20).onRound(round_0);
  }
}
;
_.onWarEnd = function onWarEnd_3(reason, winners){
  $onWarEnd(this, reason, winners);
}
;
_.onWarPreStartClear = function onWarPreStartClear_3(){
  $onWarPreStartClear(this);
}
;
_.onWarStart = function onWarStart_3(){
  $onWarStart(this);
}
;
_.onWarriorBirth = function onWarriorBirth_3(w){
  $onWarriorBirth(this, w);
}
;
_.onWarriorDeath = function onWarriorDeath_3(warrior, reason){
  $onWarriorDeath(this, warrior, reason);
}
;
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterCompetition$DebugHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterCompetition/DebugHandler', 99);
function EventMulticasterCompetition$CompeteHandler(this$0){
  EventMulticasterCompetition$DebugHandler.call(this, this$0);
}

defineClass(158, 99, {20:1}, EventMulticasterCompetition$CompeteHandler);
_.onEndRound = function onEndRound_4(){
}
;
_.onRound = function onRound_4(round_0){
}
;
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterCompetition$CompeteHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterCompetition/CompeteHandler', 158);
function EventMulticasterMemory(){
  EventMulticasterBase.call(this);
  this.debugProxy = new EventMulticasterMemory$DebugHandler(this);
  this.competeProxy = new EventMulticasterMemory$CompeteHandler;
}

defineClass(159, 82, {}, EventMulticasterMemory);
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterMemory_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterMemory', 159);
function EventMulticasterMemory$CompeteHandler(){
}

defineClass(160, 1, {57:1}, EventMulticasterMemory$CompeteHandler);
_.onMemoryWrite = function onMemoryWrite_3(address, value_0){
}
;
_.onWriteState = function onWriteState_3(state){
}
;
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterMemory$CompeteHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterMemory/CompeteHandler', 160);
function EventMulticasterMemory$DebugHandler(this$0){
  this.this$01 = this$0;
}

defineClass(161, 1, {57:1}, EventMulticasterMemory$DebugHandler);
_.onMemoryWrite = function onMemoryWrite_4(address, value_0){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 57).onMemoryWrite(address, value_0);
  }
}
;
_.onWriteState = function onWriteState_4(state){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 57).onWriteState(state);
  }
}
;
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterMemory$DebugHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterMemory/DebugHandler', 161);
function EventMulticasterScore(){
  EventMulticasterBase.call(this);
  this.proxy = new EventMulticasterScore$MulticasterHandler(this);
}

defineClass(163, 82, {}, EventMulticasterScore);
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterScore_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterScore', 163);
function $scoreChanged(this$static, name_0, addedValue, groupIndex, subIndex){
  var mListener, mListener$array, mListener$index, mListener$max;
  for (mListener$array = this$static.this$01.mListenersArr , mListener$index = 0 , mListener$max = mListener$array.length; mListener$index < mListener$max; ++mListener$index) {
    mListener = mListener$array[mListener$index];
    castTo(mListener, 228).scoreChanged(name_0, addedValue, groupIndex, subIndex);
  }
}

function EventMulticasterScore$MulticasterHandler(this$0){
  this.this$01 = this$0;
}

defineClass(164, 1, {228:1}, EventMulticasterScore$MulticasterHandler);
_.scoreChanged = function scoreChanged_0(name_0, addedValue, groupIndex, subIndex){
  $scoreChanged(this, name_0, addedValue, groupIndex, subIndex);
}
;
var Lil_co_codeguru_corewars8086_gui_widgets_EventMulticasterScore$MulticasterHandler_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'EventMulticasterScore/MulticasterHandler', 164);
function $clinit_JButton(){
  $clinit_JButton = emptyMethod;
  m_buts = new HashMap;
}

function JButton(id_0){
  $clinit_JButton();
  JComponent_0.call(this, id_0);
  $clinit_System();
  $putStringValue(m_buts, id_0, this);
  if (this.m_element == null)
    return;
  this.m_element.addEventListener('click', new JButton$1(this));
}

defineClass(102, 22, {}, JButton);
var m_buts;
var Lil_co_codeguru_corewars8086_gui_widgets_JButton_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JButton', 102);
function JButton$1(this$0){
  this.this$01 = this$0;
}

defineClass(191, 1, {}, JButton$1);
_.handleEvent = function handleEvent_7(event_0){
  if (!this.this$01.m_listener || !this.this$01.m_enabled)
    return;
  this.this$01.m_listener.actionPerformed(new ActionEvent);
}
;
var Lil_co_codeguru_corewars8086_gui_widgets_JButton$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JButton/1', 191);
function JComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(135, 1, {}, JComponent$1);
_.handleEvent = function handleEvent_8(event_0){
  if (!this.this$01.m_listener)
    return;
  this.this$01.m_listener.actionPerformed(new ActionEvent);
}
;
var Lil_co_codeguru_corewars8086_gui_widgets_JComponent$1_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JComponent/1', 135);
function JList(){
  JComponent.call(this);
}

defineClass(192, 22, {}, JList);
var Lil_co_codeguru_corewars8086_gui_widgets_JList_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JList', 192);
function JScrollPane(){
  JComponent.call(this);
}

defineClass(189, 22, {}, JScrollPane);
var Lil_co_codeguru_corewars8086_gui_widgets_JScrollPane_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JScrollPane', 189);
function $setValue_1(this$static){
  castToNative(this$static.m_element, $wnd.HTMLInputElement).value = '0';
  this$static.m_valueElem != null && (this$static.m_valueElem.innerHTML = '0');
}

function JSlider(){
  JComponent_0.call(this, 'speedSlider');
  this.m_element.addEventListener('input', new JComponent$1(this));
  this.m_valueElem = castToNative(($clinit_DomGlobal() , document_0).getElementById('speedSliderVal'), $wnd.HTMLElement);
}

defineClass(190, 22, {}, JSlider);
_.m_valueElem = null;
var Lil_co_codeguru_corewars8086_gui_widgets_JSlider_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JSlider', 190);
function $append(this$static, s){
  castToNative(this$static.m_element, $wnd.HTMLElement).innerHTML = castToNative(this$static.m_element, $wnd.HTMLElement).innerHTML + s;
}

function $scrollToBottom(this$static){
  castToNative(this$static.m_element, $wnd.HTMLElement).scrollTop = castToNative(this$static.m_element, $wnd.HTMLElement).scrollHeight - castToNative(this$static.m_element, $wnd.HTMLElement).clientHeight;
}

function JTextArea(){
  JComponent_0.call(this, 'messagesArea');
}

defineClass(188, 22, {}, JTextArea);
var Lil_co_codeguru_corewars8086_gui_widgets_JTextArea_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JTextArea', 188);
function JTextField(){
  JComponent_0.call(this, 'seed');
}

defineClass(150, 22, {}, JTextField);
var Lil_co_codeguru_corewars8086_gui_widgets_JTextField_2_classLit = createForClass('il.co.codeguru.corewars8086.gui.widgets', 'JTextField', 150);
function hex2(num){
  var number, s;
  s = (number = num >>> 0 , number.toString(16)).toUpperCase();
  if (s.length == 1)
    return '0' + s;
  return s;
}

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

function setInnerText(elem, text_0){
  elem.innerText = text_0;
}

function $readExecuteWord(this$static, address){
  var high, low, nextAddress;
  low = $readExecuteByte_2(this$static, address);
  nextAddress = new RealModeAddress_0(address.m_segment, address.m_offset + 1 << 16 >> 16);
  high = $readExecuteByte_2(this$static, nextAddress);
  return ((high & 255) << 16 >> 16 << 8 | (low & 255) << 16 >> 16) << 16 >> 16;
}

function $readWord(this$static, address){
  var high, low, nextAddress;
  low = this$static.readByte(address);
  nextAddress = new RealModeAddress_0(address.m_segment, address.m_offset + 1 << 16 >> 16);
  high = this$static.readByte(nextAddress);
  return ((high & 255) << 16 >> 16 << 8 | (low & 255) << 16 >> 16) << 16 >> 16;
}

function $writeWord(this$static, address, value_0){
  var high, low, nextAddress;
  low = value_0 << 24 >> 24;
  high = value_0 >> 8 << 24 >> 24;
  $writeByte_0(this$static, address, low);
  nextAddress = new RealModeAddress_0(address.m_segment, address.m_offset + 1 << 16 >> 16);
  $writeByte_0(this$static, nextAddress, high);
}

defineClass(249, 1, {});
var Lil_co_codeguru_corewars8086_memory_AbstractRealModeMemory_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'AbstractRealModeMemory', 249);
function MemoryException(msg){
  Exception_0.call(this, msg);
}

defineClass(54, 7, {54:1, 3:1, 7:1, 8:1}, MemoryException);
var Lil_co_codeguru_corewars8086_memory_MemoryException_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'MemoryException', 54);
function RealModeAddress(linearAddress){
  var unsignedOffset, unsignedSegment;
  linearAddress %= $intern_24;
  unsignedSegment = (linearAddress / 16 | 0) & $intern_14;
  unsignedOffset = linearAddress - unsignedSegment * 16 & $intern_14;
  this.m_segment = unsignedSegment << 16 >> 16;
  this.m_offset = unsignedOffset << 16 >> 16;
  this.m_linearAddress = linearAddress;
}

function RealModeAddress_0(segment, offset){
  var linearAddressFull, unsignedOffset, unsignedSegment;
  this.m_segment = segment;
  this.m_offset = offset;
  unsignedSegment = this.m_segment & $intern_14;
  unsignedOffset = this.m_offset & $intern_14;
  linearAddressFull = unsignedSegment * 16 + unsignedOffset;
  this.m_linearAddress = linearAddressFull % $intern_24;
}

function linearAddress_0(segment, offset){
  var linearAddress, linearAddressFull, unsignedOffset, unsignedSegment;
  unsignedSegment = segment & $intern_14;
  unsignedOffset = offset & $intern_14;
  linearAddressFull = unsignedSegment * 16 + unsignedOffset;
  linearAddress = linearAddressFull % $intern_24;
  return linearAddress;
}

defineClass(6, 1, {}, RealModeAddress, RealModeAddress_0);
_.m_linearAddress = 0;
_.m_offset = 0;
_.m_segment = 0;
var Lil_co_codeguru_corewars8086_memory_RealModeAddress_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RealModeAddress', 6);
function $readByte(this$static, linearAddress){
  return this$static.m_data[linearAddress % $intern_24];
}

function $readByte_0(this$static, address){
  return this$static.m_data[address.m_linearAddress];
}

function $readExecuteByte(this$static, linearAddress){
  return this$static.m_data[linearAddress];
}

function $readExecuteByte_0(this$static, address){
  return this$static.m_data[address.m_linearAddress];
}

function $setListener(this$static, listener){
  this$static.listener = listener;
}

function $writeByte(this$static, address, value_0){
  this$static.m_data[address.m_linearAddress] = value_0;
  !!this$static.listener && this$static.listener.onMemoryWrite(address, value_0);
}

function RealModeMemoryImpl(){
  this.m_data = new Int8Array($intern_24);
}

defineClass(193, 249, {}, RealModeMemoryImpl);
_.readByte = function readByte(address){
  return $readByte_0(this, address);
}
;
var Lil_co_codeguru_corewars8086_memory_RealModeMemoryImpl_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RealModeMemoryImpl', 193);
function $equals(this$static, a){
  return this$static.m_start == a.m_start && this$static.m_end == a.m_end;
}

function RealModeMemoryRegion(){
  this.m_start = -1;
  this.m_end = -1;
}

function RealModeMemoryRegion_0(start_0, end){
  this.m_start = start_0.m_linearAddress;
  this.m_end = end.m_linearAddress;
}

defineClass(44, 1, {44:1}, RealModeMemoryRegion, RealModeMemoryRegion_0);
_.m_end = 0;
_.m_start = 0;
var Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RealModeMemoryRegion', 44);
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

function $readByte_1(this$static, address){
  var number;
  if (!$isAddressInRegions(this$static.m_readAccessRegions, address.m_linearAddress)) {
    throw toJs(new MemoryException('Read not allowed from address 0x' + (number = address.m_linearAddress >>> 0 , number.toString(16)).toUpperCase()));
  }
  return $readByte_0(this$static.m_memory, address);
}

function $readExecuteByte_1(this$static, linearAddress){
  var number;
  if (!$isAddressInRegions(this$static.m_executeAccessRegions, linearAddress)) {
    throw toJs(new MemoryException('Execute not allowed in address 0x' + (number = linearAddress >>> 0 , number.toString(16)).toUpperCase()));
  }
  return $readExecuteByte(this$static.m_memory, linearAddress);
}

function $readExecuteByte_2(this$static, address){
  var number;
  if (!$isAddressInRegions(this$static.m_executeAccessRegions, address.m_linearAddress)) {
    throw toJs(new MemoryException('Execute not allowed in address 0x' + (number = address.m_linearAddress >>> 0 , number.toString(16)).toUpperCase()));
  }
  return $readExecuteByte_0(this$static.m_memory, address);
}

function $writeByte_0(this$static, address, value_0){
  var number;
  if (!$isAddressInRegions(this$static.m_writeAccessRegions, address.m_linearAddress)) {
    throw toJs(new MemoryException('Write not allowed to address 0x' + (number = address.m_linearAddress >>> 0 , number.toString(16)).toUpperCase()));
  }
  $writeByte(this$static.m_memory, address, value_0);
}

function RestrictedAccessRealModeMemory(memory, readAccessRegions, writeAccessRegions, executeAccessRegions){
  this.m_memory = memory;
  this.m_readAccessRegions = readAccessRegions;
  this.m_writeAccessRegions = writeAccessRegions;
  this.m_executeAccessRegions = executeAccessRegions;
}

defineClass(224, 249, {}, RestrictedAccessRealModeMemory);
_.readByte = function readByte_0(address){
  return $readByte_1(this, address);
}
;
var Lil_co_codeguru_corewars8086_memory_RestrictedAccessRealModeMemory_2_classLit = createForClass('il.co.codeguru.corewars8086.memory', 'RestrictedAccessRealModeMemory', 224);
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
      extraInfo = ' + ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase()) + ']';
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
      return this$static.mode_0 == 0?'[' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase()) + ']':'[BP' + extraInfo;
    case 7:
      return '[BX' + extraInfo;
    default:throw toJs(new RuntimeException);
  }
}

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

function $lastOpcodeSize(this$static){
  var ret;
  ret = this$static.pointer - this$static.startOffset;
  this$static.startOffset = this$static.pointer;
  return ret;
}

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

function $nextWord_0(this$static){
  var high, low;
  low = this$static.nextByte();
  high = this$static.nextByte();
  return ((high & 255) << 16 >> 16 << 8 | (low & 255) << 16 >> 16) << 16 >> 16;
}

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
      return 'ADD AX, ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number1.toString(16)).toUpperCase());
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
      return 'OR AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase());
    case 14:
      return 'PUSH CS';
    case 15:
      throw toJs(new Disassembler$DisassemblerException);
    default:throw toJs(new RuntimeException);
  }
}

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
      return 'ADC AX, ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number1.toString(16)).toUpperCase());
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
      return 'SBB AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase());
    case 30:
      return 'PUSH DS';
    case 31:
      return 'POP DS';
    default:throw toJs(new RuntimeException);
  }
}

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
      return 'AND AX, ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number1.toString(16)).toUpperCase());
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
      return 'SUB AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase());
    case 38:
    case 39:
    case 46:
    case 47:
      throw toJs(new Disassembler$DisassemblerException);
    default:throw toJs(new RuntimeException);
  }
}

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
      return 'XOR AX, ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number1.toString(16)).toUpperCase());
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
      return 'CMP AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase());
    case 54:
    case 55:
    case 62:
    case 63:
      throw toJs(new Disassembler$DisassemblerException);
    default:throw toJs(new RuntimeException);
  }
}

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

function $opcode6X_0(){
  throw toJs(new Disassembler$DisassemblerException);
}

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
  return jump + ' ' + ('0x' + (number = (this$static.nextByte() & 255) >>> 0 , number.toString(16)).toUpperCase());
}

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
          return 'ADD ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number0 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number0.toString(16)).toUpperCase());
        case 1:
          return 'OR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number1.toString(16)).toUpperCase());
        case 2:
          return 'ADC ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number2 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number2.toString(16)).toUpperCase());
        case 3:
          return 'SBB ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number3 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number3.toString(16)).toUpperCase());
        case 4:
          return 'AND ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number4 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number4.toString(16)).toUpperCase());
        case 5:
          return 'SUB ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number5 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number5.toString(16)).toUpperCase());
        case 6:
          return 'XOR ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number6 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number6.toString(16)).toUpperCase());
        case 7:
          return 'CMP ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number7 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number7.toString(16)).toUpperCase());
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
      return this$static.mode_0 == 3?'DW ' + ('0x' + (number = ((((this$static.memIndex | this$static.regIndex << 3 | this$static.mode_0 << 6) << 24 >> 24 & 255) << 16 >> 16 << 8 | (-115 & 255) << 16 >> 16) << 16 >> 16 & $intern_14) >>> 0 , number.toString(16)).toUpperCase()):'LEA ' + $getReg16_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case -114:
      $resetIndirect(this$static);
      return 'MOV ' + $getSeg_1(this$static.regIndex) + ', ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    case -113:
      $resetIndirect(this$static);
      return 'POP ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static));
    default:throw toJs(new RuntimeException);
  }
}

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
      return 'CALL FAR ' + ('0x' + (number0 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number0.toString(16)).toUpperCase()) + ':' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase());
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

function $opcodeAX_0(this$static, opcode){
  var number, number0, number1, number2, number3, number4;
  switch (opcode) {
    case -96:
      return 'MOV AL, [' + ('0x' + (number0 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number0.toString(16)).toUpperCase()) + ']';
    case -95:
      return 'MOV AX, [' + ('0x' + (number1 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number1.toString(16)).toUpperCase()) + ']';
    case -94:
      return 'MOV [' + ('0x' + (number2 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number2.toString(16)).toUpperCase()) + '], AL';
    case -93:
      return 'MOV [' + ('0x' + (number3 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number3.toString(16)).toUpperCase()) + '], AX';
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
      return 'TEST AX, ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase());
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
      return 'MOV ' + $getReg16_1(index_0) + ', ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase());
    default:throw toJs(new RuntimeException);
  }
}

function $opcodeCX_0(this$static, opcode){
  var number, number0, number1, number2, opcodeId;
  switch (opcode) {
    case -64:
    case -63:
      throw toJs(new Disassembler$DisassemblerException);
    case -62:
      return 'RET ' + ('0x' + (number0 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number0.toString(16)).toUpperCase());
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
      return 'MOV ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number2 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number2.toString(16)).toUpperCase());
    case -56:
    case -52:
    case -50:
    case -55:
      throw toJs(new Disassembler$DisassemblerException);
    case -54:
      return 'RETF ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase());
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

function $opcodeEX_0(this$static, opcode){
  var number, number0, number1, number2, number3, number4, number5, number6, number7;
  switch (opcode) {
    case -32:
      return 'LOOPNZ ' + ('0x' + (number0 = (this$static.nextByte() & 255) >>> 0 , number0.toString(16)).toUpperCase());
    case -31:
      return 'LOOPZ ' + ('0x' + (number1 = (this$static.nextByte() & 255) >>> 0 , number1.toString(16)).toUpperCase());
    case -30:
      return 'LOOP ' + ('0x' + (number2 = (this$static.nextByte() & 255) >>> 0 , number2.toString(16)).toUpperCase());
    case -29:
      return 'JCXZ ' + ('0x' + (number3 = (this$static.nextByte() & 255) >>> 0 , number3.toString(16)).toUpperCase());
    case -24:
      return 'CALL NEAR ' + ('0x' + (number4 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number4.toString(16)).toUpperCase());
    case -23:
      return 'JMP NEAR ' + ('0x' + (number5 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number5.toString(16)).toUpperCase());
    case -22:
      return 'JMP FAR ' + ('0x' + (number6 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number6.toString(16)).toUpperCase()) + ':' + ('0x' + (number7 = ($nextWord_0(this$static) & $intern_14) >>> 0 , number7.toString(16)).toUpperCase());
    case -21:
      return 'JMP SHORT ' + ('0x' + (number = (this$static.nextByte() & 255) >>> 0 , number.toString(16)).toUpperCase());
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

function $opcodeFX_0(this$static, opcode){
  var nextOpcode, number;
  nextOpcode = this$static.getByte();
  switch (opcode) {
    case -14:
      switch (nextOpcode) {
        case -90:
          this$static.nextByte();
          return 'REPNZ CMPSB';
        case -89:
          this$static.nextByte();
          return 'REPNZ CMPSW';
        case -82:
          this$static.nextByte();
          return 'REPNZ SCASB';
        case -81:
          this$static.nextByte();
          return 'REPNZ SCASW';
        default:throw toJs(new Disassembler$DisassemblerException);
      }

    case -13:
      switch (nextOpcode) {
        case -92:
          this$static.nextByte();
          return 'REP MOVSB';
        case -91:
          this$static.nextByte();
          return 'REP MOVSW';
        case -90:
          this$static.nextByte();
          return 'REP CMPSB';
        case -89:
          this$static.nextByte();
          return 'REP CMPSW';
        case -86:
          this$static.nextByte();
          return 'REP STOSB';
        case -85:
          this$static.nextByte();
          return 'REP STOSW';
        case -84:
          this$static.nextByte();
          return 'REP LODSB';
        case -83:
          this$static.nextByte();
          return 'REP LODSW';
        case -82:
          this$static.nextByte();
          return 'REP SCASB';
        case -81:
          this$static.nextByte();
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
          return 'TEST ' + (this$static.mode_0 == 3?$getReg16_1(this$static.memIndex):$getMem8_0(this$static)) + ', ' + ('0x' + (number = ($nextWord_0(this$static) & $intern_14) >>> 0 , number.toString(16)).toUpperCase());
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

function $reset_0(this$static, offset, endOffset){
  this$static.pointer = offset;
  this$static.startOffset = offset;
  this$static.endOffset = endOffset;
}

function $resetIndirect(this$static){
  var modeByte;
  modeByte = this$static.nextByte();
  this$static.mode_0 = (modeByte >> 6 & 3) << 24 >> 24;
  this$static.regIndex = (modeByte >> 3 & 7) << 24 >> 24;
  this$static.memIndex = (modeByte & 7) << 24 >> 24;
}

function Disassembler(offset, endOffset){
  $reset_0(this, offset, endOffset);
}

defineClass(107, 1, {});
_.endOffset = 0;
_.memIndex = 0;
_.mode_0 = 0;
_.pointer = 0;
_.regIndex = 0;
_.startOffset = 0;
var Lil_co_codeguru_corewars8086_utils_Disassembler_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler', 107);
function Disassembler$ArrDisassembler(memory, endOffset){
  Disassembler.call(this, 0, endOffset);
  this.bytes = memory;
}

defineClass(108, 107, {}, Disassembler$ArrDisassembler);
_.getByte = function getByte(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  return this.bytes[this.pointer];
}
;
_.nextByte = function nextByte(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  ++this.pointer;
  return this.bytes[this.pointer - 1];
}
;
var Lil_co_codeguru_corewars8086_utils_Disassembler$ArrDisassembler_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/ArrDisassembler', 108);
function Disassembler$DisassemblerException(){
  Exception.call(this);
}

defineClass(9, 7, {9:1, 3:1, 7:1, 8:1}, Disassembler$DisassemblerException);
var Lil_co_codeguru_corewars8086_utils_Disassembler$DisassemblerException_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/DisassemblerException', 9);
function Disassembler$DisassemblerLengthException(){
  Disassembler$DisassemblerException.call(this);
}

defineClass(53, 9, {9:1, 53:1, 3:1, 7:1, 8:1}, Disassembler$DisassemblerLengthException);
var Lil_co_codeguru_corewars8086_utils_Disassembler$DisassemblerLengthException_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/DisassemblerLengthException', 53);
function Disassembler$NArrDisassembler(memory, offset, endOffset){
  Disassembler.call(this, offset, endOffset);
  this.bytes = memory;
}

defineClass(200, 107, {}, Disassembler$NArrDisassembler);
_.getByte = function getByte_0(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  return this.bytes[this.pointer];
}
;
_.nextByte = function nextByte_0(){
  if (this.pointer >= this.endOffset)
    throw toJs(new Disassembler$DisassemblerLengthException);
  ++this.pointer;
  return this.bytes[this.pointer - 1];
}
;
var Lil_co_codeguru_corewars8086_utils_Disassembler$NArrDisassembler_2_classLit = createForClass('il.co.codeguru.corewars8086.utils', 'Disassembler/NArrDisassembler', 200);
function $addCompetitionEventListener(this$static, lis){
  $add(this$static.competitionEventCaster, lis);
}

function $addMemoryEventLister(this$static, lis){
  $add(this$static.memoryEventCaster, lis);
}

function $continueRun(this$static){
  var needMore, stepsCount, wasStartPaused;
  if (this$static.globalPause)
    return false;
  if (this$static.compState.abort) {
    console.log('Abort');
    $doneWar(this$static);
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
      $onCompetitionEnd(this$static.competitionEventListener);
      this$static.compState = null;
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
      $onNoneAlive(this$static.competitionEventListener);
      return false;
    }
    if (needMore == 0) {
      $onPaused(this$static.competitionEventListener);
      return false;
    }
     else if (needMore == -1) {
      $doneWar(this$static);
      this$static.compState.isInDebugger || (this$static.compState.state = 1);
      return false;
    }
    return true;
  }
  return false;
}

function $doneWar(this$static){
  var names, numAlive;
  if (!this$static.currentWar)
    return;
  log_0('doneWar rounds=' + ('' + this$static.compState.round_0));
  this$static.competitionEventListener.onRound(this$static.compState.round_0);
  numAlive = this$static.currentWar.m_numWarriorsAlive;
  names = $getRemainingWarriorNames(this$static.currentWar);
  numAlive == 1?$onWarEnd(this$static.competitionEventListener, 0, names):this$static.compState.round_0 == 200000?$onWarEnd(this$static.competitionEventListener, 1, names):$onWarEnd(this$static.competitionEventListener, 2, names);
  $updateScores(this$static.currentWar, this$static.warriorRepository);
  this$static.currentWar.m_hasEnded = true;
  ++this$static.compState.warIndex;
}

function $getCurrentWarrior_0(this$static){
  return this$static.currentWar?this$static.currentWar.m_currentWarrior:-1;
}

function $getTotalNumberOfWars(this$static){
  return toInt_0($getNumberOfItems(this$static.competitionIterator)) * this$static.warsPerCombination;
}

function $runCompetition(this$static, warsPerCombination, warriorsPerGroup, startPaused, isInDebugger){
  this$static.warsPerCombination = warsPerCombination;
  this$static.competitionIterator = new CompetitionIterator(this$static.warriorRepository.warriorGroups.array.length, warriorsPerGroup);
  $onCompetitionStart(this$static.competitionEventListener);
  console.log('runCompetition ' + ('' + warsPerCombination) + ' wars');
  this$static.compState = new Competition$CompState;
  this$static.compState.warIndex = 0;
  this$static.compState.state = 1;
  this$static.compState.startPaused = startPaused;
  this$static.compState.isInDebugger = isInDebugger;
}

function $runRound(this$static){
  var atBreakpoint;
  this$static.competitionEventListener.onRound(this$static.compState.round_0);
  atBreakpoint = $nextRound(this$static.currentWar, this$static.compState.round_0);
  ++this$static.compState.round_0;
  this$static.competitionEventListener.onEndRound();
  if (!this$static.currentWar.m_hasEnded && this$static.currentWar.m_numWarriorsAlive < 2) {
    console.log('isOver');
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

function $setAbort(this$static){
  if (!this$static.compState)
    return;
  this$static.compState.abort = true;
}

function $setSeed(this$static, seed){
  this$static.seed = seed;
}

function $setSpeed(this$static, speed){
  this$static.speed_0 = speed;
}

function $startWar(this$static, warriorGroups){
  this$static.currentWar = new War(this$static.memoryEventListener, this$static.competitionEventListener, this$static.compState.startPaused);
  $setSeed_0(this$static.currentWar, this$static.seed);
  $onWarPreStartClear(this$static.competitionEventListener);
  $loadWarriorGroups(this$static.currentWar, warriorGroups);
  $onWarStart(this$static.competitionEventListener);
  this$static.compState.round_0 = 0;
}

function Competition(){
  this.warriorRepository = new WarriorRepository;
  this.competitionEventCaster = new EventMulticasterCompetition;
  this.competitionEventListener = this.competitionEventCaster.debugProxy;
  this.memoryEventCaster = new EventMulticasterMemory;
  this.memoryEventListener = this.memoryEventCaster.debugProxy;
  this.speed_0 = 0;
}

defineClass(147, 1, {}, Competition);
_.globalPause = false;
_.seed = 0;
_.speed_0 = 0;
_.warsPerCombination = 20;
var Lil_co_codeguru_corewars8086_war_Competition_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'Competition', 147);
function Competition$CompState(){
}

defineClass(148, 1, {}, Competition$CompState);
_.abort = false;
_.isInDebugger = false;
_.round_0 = 0;
_.startPaused = false;
_.state = 0;
_.waitedFrames = 0;
_.warIndex = 0;
var Lil_co_codeguru_corewars8086_war_Competition$CompState_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'Competition/CompState', 148);
function $getNumberOfItems(this$static){
  return binomialCoefficient(this$static.numItems, this$static.counters.length);
}

function $next(this$static){
  return $nextPermutation(this$static.rnd, this$static.numItems, this$static.groupSize);
}

function CompetitionIterator(numItems, groupSize){
  this.numItems = numItems;
  this.groupSize = groupSize;
  this.counters = initUnidimensionalArray(I_classLit, $intern_13, 11, groupSize, 15, 1);
  this.rnd = new RandomDataGenerator;
}

defineClass(202, 1, {}, CompetitionIterator);
_.next_0 = function next(){
  return $nextPermutation(this.rnd, this.numItems, this.groupSize);
}
;
_.hasNext_0 = function hasNext(){
  return this.counters[0] != -1;
}
;
_.groupSize = 0;
_.numItems = 0;
var Lil_co_codeguru_corewars8086_war_CompetitionIterator_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'CompetitionIterator', 202);
function $allocateCoreMemory(this$static, size_0){
  var allocatedMemory;
  if (size_0 % 16 != 0) {
    throw toJs(new Exception);
  }
  allocatedMemory = new RealModeAddress(this$static.m_nextFreeAddress);
  this$static.m_nextFreeAddress += size_0;
  return allocatedMemory;
}

function $getLoadOffset(this$static, warriorSize){
  var found, i, loadAddress, numTries, otherEnd, otherLoadAddress, otherSize, otherStart;
  loadAddress = 0;
  found = false;
  numTries = 0;
  while (!found && numTries < 100) {
    ++numTries;
    loadAddress = $nextInt(this$static.rand, $intern_21);
    found = true;
    loadAddress < $intern_17 && (found = false);
    loadAddress + warriorSize > 64512 && (found = false);
    for (i = 0; i < this$static.m_numWarriors; ++i) {
      otherLoadAddress = this$static.m_warriors[i].m_loadAddress.m_offset & $intern_14;
      otherSize = this$static.m_warriors[i].m_codeSize;
      otherStart = otherLoadAddress - $intern_17;
      otherEnd = otherLoadAddress + otherSize + $intern_17;
      loadAddress + warriorSize >= otherStart && loadAddress < otherEnd && (found = false);
    }
  }
  if (!found) {
    throw toJs(new Exception);
  }
  return loadAddress << 16 >> 16;
}

function $getRemainingWarriorNames(this$static){
  var i, names, warrior;
  names = '';
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    warrior = this$static.m_warriors[i];
    warrior.m_isAlive && (names == ''?(names = warrior.m_name):(names = names + ', ' + warrior.m_name));
  }
  return names;
}

function $getWarrior(this$static, index_0){
  return this$static.m_warriors[index_0];
}

function $getWarriorByLabel(this$static, label_0){
  var i, w;
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    w = this$static.m_warriors[i];
    if ($equals_0(w.m_label, label_0)) {
      return w;
    }
  }
  return null;
}

function $loadWarriorGroup(this$static, warriorGroup){
  var groupSharedMemory, i, initialStack, loadAddress, loadOffset, offset, stackMemory, tmp, w, warrior, warriorData, warriorName, warriors;
  warriors = warriorGroup.warriorData;
  groupSharedMemory = $allocateCoreMemory(this$static, $intern_17);
  for (i = 0; i < warriors.array.length; ++i) {
    warrior = (checkCriticalElementIndex(i, warriors.array.length) , castTo(warriors.array[i], 64));
    warriorName = warrior.m_name;
    warriorData = warrior.m_code;
    warrior.m_debugFixedLoadAddress < 0?(loadOffset = $getLoadOffset(this$static, warriorData.length)):(loadOffset = warrior.m_debugFixedLoadAddress << 16 >> 16);
    loadAddress = new RealModeAddress_0(4096, loadOffset);
    stackMemory = $allocateCoreMemory(this$static, $intern_18);
    initialStack = new RealModeAddress_0(stackMemory.m_segment, $intern_18);
    w = new Warrior(warriorName, warrior.m_label, warriorData.length, this$static.m_core, loadAddress, initialStack, groupSharedMemory, this$static.m_numWarriors);
    this$static.m_warriors[this$static.m_numWarriors++] = w;
    this$static.m_core.listener.onWriteState(1);
    for (offset = 0; offset < warriorData.length; ++offset) {
      tmp = new RealModeAddress_0(4096, loadOffset + offset << 16 >> 16);
      $writeByte(this$static.m_core, tmp, warriorData[offset]);
    }
    this$static.m_core.listener.onWriteState(2);
    ++this$static.m_numWarriorsAlive;
    ++this$static.m_currentWarrior;
    $onWarriorBirth(this$static.m_warListener, w);
  }
}

function $loadWarriorGroups(this$static, warriorGroups){
  var groupsLeftToLoad, i, randomInt;
  this$static.m_currentWarrior = 0;
  groupsLeftToLoad = new ArrayList;
  for (i = 0; i < warriorGroups.length; ++i)
    $add_0(groupsLeftToLoad, warriorGroups[i]);
  while (groupsLeftToLoad.array.length > 0) {
    randomInt = $nextInt(this$static.rand, groupsLeftToLoad.array.length);
    $loadWarriorGroup(this$static, (checkCriticalElementIndex(randomInt, groupsLeftToLoad.array.length) , castTo(groupsLeftToLoad.array[randomInt], 35)));
    checkCriticalElementIndex(randomInt, groupsLeftToLoad.array.length);
    removeFrom(groupsLeftToLoad.array, randomInt);
  }
  this$static.m_currentWarrior = -1;
}

function $nextRound(this$static, round_0){
  var atBreakpoint, e, i, savedIp, warrior, energy, speed;
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
        if (energy = warrior.m_state.m_energy & $intern_14 , speed = energy == 0?0:$wnd.Math.min(16, 1 + round_int($wnd.Math.log(energy) / $wnd.Math.log(2))) , $nextInt(this$static.rand, 16) < speed) {
          $nextOpcode(warrior.m_cpu);
          atBreakpoint = atBreakpoint | (!!this$static.m_breakpointCheck && this$static.m_currentWarrior == this$static.m_uiWarriorIndex && $shouldBreak(this$static.m_breakpointCheck, warrior.m_state));
        }
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 24)) {
          $onWarriorDeath(this$static.m_warListener, warrior, 'CPU exception');
          warrior.m_isAlive = false;
          $setIP(warrior.m_state, savedIp);
          --this$static.m_numWarriorsAlive;
        }
         else if (instanceOf($e0, 54)) {
          e = $e0;
          $onWarriorDeath(this$static.m_warListener, warrior, 'memory exception: ' + e.detailMessage);
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

function $resume(this$static){
  this$static.isPaused = false;
  this$static.isSingleRound = false;
}

function $runSingleRound(this$static){
  this$static.isPaused = false;
  this$static.isSingleRound = true;
}

function $setBreakpointCheck(this$static, brc){
  this$static.m_breakpointCheck = brc;
}

function $setSeed_0(this$static, seed){
  $setSeed_2(this$static.rand, seed);
}

function $updateScores(this$static, repository){
  var i, score, warrior;
  score = 1 / this$static.m_numWarriorsAlive;
  console.log('updateScore ' + ('' + score));
  for (i = 0; i < this$static.m_numWarriors; ++i) {
    warrior = this$static.m_warriors[i];
    warrior.m_isAlive && $addScore(repository, warrior.m_name, score);
  }
}

function $updateWarriorEnergy(warrior, round_0){
  var energy;
  if (round_0 % 5 == 0) {
    energy = warrior.m_state.m_energy & $intern_14;
    energy > 0 && ($setEnergy(warrior.m_state, energy - 1 << 16 >> 16) , undefined);
  }
}

function War(memoryListener, warListener, startPaused){
  var offset, tmp;
  this.rand = new Random;
  this.isPaused = startPaused;
  this.m_warListener = warListener;
  this.m_warriors = initUnidimensionalArray(Lil_co_codeguru_corewars8086_war_Warrior_2_classLit, $intern_1, 83, 20, 0, 1);
  this.m_numWarriors = 0;
  this.m_numWarriorsAlive = 0;
  this.m_core = new RealModeMemoryImpl;
  this.m_nextFreeAddress = 131072;
  for (offset = 0; offset < $intern_21; ++offset) {
    tmp = new RealModeAddress_0(4096, offset << 16 >> 16);
    $writeByte(this.m_core, tmp, -52);
  }
  this.isSingleRound = false;
  $setListener(this.m_core, memoryListener);
}

defineClass(180, 1, {}, War);
_.isPaused = false;
_.isSingleRound = false;
_.m_breakpointCheck = null;
_.m_currentWarrior = 0;
_.m_hasEnded = false;
_.m_nextFreeAddress = 0;
_.m_numWarriors = 0;
_.m_numWarriorsAlive = 0;
_.m_uiWarriorIndex = -1;
var Lil_co_codeguru_corewars8086_war_War_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'War', 180);
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
  readAccessRegions = stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit, 1), $intern_1, 44, 0, [this.m_stackWritableRegion, this.m_codeRegion, this.m_sharedWritableRegion]);
  writeAccessRegions = stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit, 1), $intern_1, 44, 0, [this.m_stackWritableRegion, this.m_codeRegion, this.m_sharedWritableRegion]);
  executeAccessRegions = stampJavaTypeInfo(getClassLiteralForArray(Lil_co_codeguru_corewars8086_memory_RealModeMemoryRegion_2_classLit, 1), $intern_1, 44, 0, [this.m_codeRegion]);
  this.m_memory = new RestrictedAccessRealModeMemory(core, readAccessRegions, writeAccessRegions, executeAccessRegions);
  this.m_cpu = new Cpu(this.m_state, this.m_memory);
  this.m_isAlive = true;
}

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

defineClass(64, 1, {64:1}, WarriorData);
_.toString_0 = function toString_8(){
  return this.m_name;
}
;
_.m_debugFixedLoadAddress = 0;
var Lil_co_codeguru_corewars8086_war_WarriorData_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorData', 64);
function $addScoreToWarrior(this$static, name_0, value_0){
  var i;
  for (i = 0; i < this$static.warriorData.array.length; i++) {
    if ($equals_0(castTo($get_0(this$static.warriorData, i), 64).m_name, name_0)) {
      $set(this$static.scores, i, new Float(castTo($get_0(this$static.scores, i), 28).value_0 + value_0));
      break;
    }
  }
  this$static.groupScore += value_0;
  return i;
}

function $addWarrior(this$static, data_0){
  $add_0(this$static.warriorData, data_0);
  $add_0(this$static.scores, new Float(0));
}

function WarriorGroup(name_0){
  this.name_0 = name_0;
  this.warriorData = new ArrayList;
  this.scores = new ArrayList;
}

defineClass(35, 1, {35:1}, WarriorGroup);
_.groupScore = 0;
var Lil_co_codeguru_corewars8086_war_WarriorGroup_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorGroup', 35);
function $addScore(this$static, name_0, value_0){
  var group, groupIndex, subIndex;
  groupIndex = castTo($getStringValue(this$static.warriorNameToGroup, name_0), 23);
  if (!groupIndex) {
    return;
  }
  group = castTo($get_0(this$static.warriorGroups, groupIndex.value_0), 35);
  subIndex = $addScoreToWarrior(group, name_0, value_0);
  $scoreChanged(this$static.scoreListener, name_0, value_0, groupIndex.value_0, subIndex);
}

function $createGroupList(this$static, groupIndices){
  var groups, groupsList, i;
  groupsList = new ArrayList;
  for (i = 0; i < groupIndices.length; ++i) {
    $add_0(groupsList, castTo($get_0(this$static.warriorGroups, groupIndices[i]), 35));
  }
  !!this$static.zombieGroup && $add_0(groupsList, this$static.zombieGroup);
  groups = initUnidimensionalArray(Lil_co_codeguru_corewars8086_war_WarriorGroup_2_classLit, $intern_1, 35, groupsList.array.length, 0, 1);
  $toArray_1(groupsList, groups);
  return groups;
}

function $getGroupNames(this$static){
  var group, group$iterator, names;
  names = new ArrayList;
  for (group$iterator = new ArrayList$1(this$static.warriorGroups); group$iterator.i < group$iterator.this$01.array.length;) {
    group = castTo($next_1(group$iterator), 35);
    $add_0(names, group.name_0);
  }
  return castTo($toArray_1(names, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_11, 2, 0, 6, 1)), 69);
}

function $readWarriorFilesFromUI(this$static, files, zombies){
  var bin, c, c$index, c$max, currentGroup, data_0, loadAddrChecker, name_0, startAddr, suffixlength, suffixlength0;
  $reset_1(this$static.warriorNameToGroup);
  this$static.warriorGroups.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  log_0('Found ' + ('' + files.length) + ' survivors');
  sort_0(files, new WarriorRepository$1);
  loadAddrChecker = new WarriorRepository$LoadAddrChecker(files.length + zombies.length);
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
    if (!c.startAddrRandom) {
      startAddr = $addCheck(loadAddrChecker, c.startAddress, c.bin.length, name_0);
      if (startAddr == -2)
        return false;
    }
    data_0 = new WarriorData(name_0, $truncToSize(bin), c.label_0, startAddr);
    if (c.player.wtype != ($clinit_PlayersPanel$EWarriorType() , SINGLE)) {
      suffixlength0 = '1'.length;
      if ($equals_0(name_0.substr(name_0.length - suffixlength0, suffixlength0), '1')) {
        currentGroup = new WarriorGroup($substring_1(name_0, 0, name_0.length - 1));
        $add_0(currentGroup.warriorData, data_0);
        $add_0(currentGroup.scores, new Float(0));
        $putStringValue(this$static.warriorNameToGroup, name_0, valueOf_0(this$static.warriorGroups.array.length));
      }
       else {
        suffixlength = '2'.length;
        if ($equals_0(name_0.substr(name_0.length - suffixlength, suffixlength), '2')) {
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
    }
     else {
      currentGroup = new WarriorGroup(name_0);
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
  if (!$readZombiesFromUI(this$static, zombies, loadAddrChecker))
    return false;
  return true;
}

function $readZombiesFromUI(this$static, zombieFiles, loadAddrChecker){
  var bin, c, c$index, c$max, data_0, name_0, startAddr;
  this$static.zombieGroup = null;
  if (zombieFiles.length == 0)
    return true;
  this$static.zombieGroup = new WarriorGroup('ZoMbIeS');
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

function $truncToSize(arr){
  if (arr.length > 512)
    return copyPrimitiveArray(arr, initUnidimensionalArray(B_classLit, $intern_20, 11, 512, 15, 1));
  return arr;
}

function WarriorRepository(){
  this.warriorNameToGroup = new HashMap;
  this.warriorGroups = new ArrayList;
  this.scoreEventsCaster = new EventMulticasterScore;
  this.scoreListener = this.scoreEventsCaster.proxy;
}

defineClass(144, 1, {}, WarriorRepository);
var Lil_co_codeguru_corewars8086_war_WarriorRepository_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorRepository', 144);
function $compare(o1, o2){
  return $compareToIgnoreCase(o1.name_0, o2.name_0);
}

function WarriorRepository$1(){
}

defineClass(146, 1, {}, WarriorRepository$1);
_.compare = function compare_1(o1, o2){
  return $compare(castTo(o1, 40), castTo(o2, 40));
}
;
_.equals_0 = function equals_2(other){
  return this === other;
}
;
var Lil_co_codeguru_corewars8086_war_WarriorRepository$1_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorRepository/1', 146);
function WarriorRepository$AddrRange(_name, _start, _end){
  this.name_0 = _name;
  this.start_0 = _start;
  this.end_0 = _end;
}

defineClass(80, 1, {80:1}, WarriorRepository$AddrRange);
_.end_0 = 0;
_.start_0 = 0;
var Lil_co_codeguru_corewars8086_war_WarriorRepository$AddrRange_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorRepository/AddrRange', 80);
function $addCheck(this$static, startAddrStr, len, name_0){
  var a, a$iterator, r, startAddr;
  try {
    startAddr = __parseAndValidateInt(startAddrStr, 16);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 34)) {
      console.error('Player ' + name_0 + ' fixed start address is not a valid hex number');
      return -2;
    }
     else 
      throw toJs($e0);
  }
  if (startAddr < 0 || startAddr > $intern_14) {
    console.error('Player ' + name_0 + ' fixed start address is out of 16 bit number range');
    return -2;
  }
  if (startAddr > $intern_14 - len + 1) {
    console.error('Player ' + name_0 + ' fixed start address does not leave enough space for code (' + ('' + len) + ' bytes)');
    return -2;
  }
  r = new WarriorRepository$AddrRange(name_0, startAddr, startAddr + len - 1);
  for (a$iterator = new ArrayList$1(this$static.fixedRanges); a$iterator.i < a$iterator.this$01.array.length;) {
    a = castTo($next_1(a$iterator), 80);
    if (a.start_0 <= r.end_0 && r.start_0 <= a.end_0) {
      error_0('Player ' + name_0 + ' fixed start address overlaps with that of player ' + a.name_0);
      return -2;
    }
  }
  $add_0(this$static.fixedRanges, r);
  return startAddr;
}

function WarriorRepository$LoadAddrChecker(capacity){
  this.fixedRanges = new ArrayList_0(capacity);
}

defineClass(145, 1, {}, WarriorRepository$LoadAddrChecker);
var Lil_co_codeguru_corewars8086_war_WarriorRepository$LoadAddrChecker_2_classLit = createForClass('il.co.codeguru.corewars8086.war', 'WarriorRepository/LoadAddrChecker', 145);
function $setLength(this$static){
  var oldLength;
  oldLength = this$static.string.length;
  0 < oldLength?(this$static.string = this$static.string.substr(0, 0)):0 > oldLength && (this$static.string += valueOf_2(initUnidimensionalArray(C_classLit, $intern_13, 11, -oldLength, 15, 1)));
}

function $substring(this$static, begin){
  return $substring_0(this$static.string, begin);
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(77, 1, {120:1});
_.toString_0 = function toString_9(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 77);
function ArithmeticException(){
  RuntimeException.call(this);
}

function ArithmeticException_0(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(78, 4, $intern_3, ArithmeticException_0);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 78);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(61, 4, $intern_3, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 61);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

defineClass(214, 61, $intern_3, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 214);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(97, 4, $intern_3, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 97);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

function $compareTo_0(this$static, b){
  return compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_2(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?$compareTo_5(this$static, castToString(other)):instanceOfDouble(this$static)?$compareTo_1(this$static, (checkCriticalType(other == null || instanceOfDouble(other)) , other)):instanceOfBoolean(this$static)?$compareTo_0(this$static, (checkCriticalType(other == null || instanceOfBoolean(other)) , other)):this$static.compareTo(other);
}

booleanCastMap = {3:1, 123:1, 33:1};
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

function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(125, 4, $intern_3, ClassCastException);
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
  isTooLow = toReturn < $intern_27;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(60, 1, {3:1, 60:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 60);
function $compareTo_1(this$static, b){
  return compare_3((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function $doubleValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

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

doubleCastMap = {3:1, 33:1, 124:1, 60:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 124);
function $compareTo_2(this$static, b){
  return compare_3(this$static.value_0, b.value_0);
}

function Float(value_0){
  this.value_0 = value_0;
}

defineClass(28, 60, {3:1, 33:1, 28:1, 60:1}, Float);
_.compareTo = function compareTo_0(b){
  return $compareTo_2(this, castTo(b, 28));
}
;
_.equals_0 = function equals_3(o){
  return instanceOf(o, 28) && castTo(o, 28).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_2(){
  return round_int(this.value_0);
}
;
_.toString_0 = function toString_11(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 28);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(52, 4, $intern_3, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 52);
function IllegalStateException(){
  RuntimeException.call(this);
}

defineClass(130, 4, $intern_3, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 130);
function $compareTo_3(this$static, b){
  return compare_4(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_4(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

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

defineClass(23, 60, {3:1, 33:1, 23:1, 60:1}, Integer);
_.compareTo = function compareTo_1(b){
  return $compareTo_3(this, castTo(b, 23));
}
;
_.equals_0 = function equals_4(o){
  return instanceOf(o, 23) && castTo(o, 23).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_3(){
  return this.value_0;
}
;
_.toString_0 = function toString_12(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 23);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_1, 23, 256, 0, 1);
}

var boxedValues;
function $compareTo_4(this$static, b){
  return compare_5(this$static.value_0, b.value_0);
}

function Long(value_0){
  this.value_0 = value_0;
}

function compare_5(x_0, y_0){
  return compare_0(x_0, y_0) < 0?-1:compare_0(x_0, y_0) > 0?1:0;
}

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

defineClass(45, 60, {3:1, 33:1, 45:1, 60:1}, Long);
_.compareTo = function compareTo_2(b){
  return $compareTo_4(this, castTo(b, 45));
}
;
_.equals_0 = function equals_5(o){
  return instanceOf(o, 45) && eq(castTo(o, 45).value_0, this.value_0);
}
;
_.hashCode_0 = function hashCode_4(){
  return toInt_0(this.value_0);
}
;
_.toString_0 = function toString_13(){
  return '' + toString_3(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 45);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_1, 45, 256, 0, 1);
}

var boxedValues_0;
defineClass(294, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(typeError){
  JsException.call(this, typeError);
}

function NullPointerException_1(message){
  RuntimeException_0.call(this, message);
}

defineClass(76, 58, $intern_3, NullPointerException, NullPointerException_0, NullPointerException_1);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 76);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(34, 52, {3:1, 7:1, 34:1, 4:1, 8:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 34);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(32, 1, {3:1, 32:1}, StackTraceElement);
_.equals_0 = function equals_6(other){
  var st;
  if (instanceOf(other, 32)) {
    st = castTo(other, 32);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_5(){
  return hashCode_11(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [valueOf_0(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_14(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 32);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $compareTo_5(this$static, other){
  var a, b;
  a = (checkCriticalNotNull(this$static) , this$static);
  b = (checkCriticalNotNull(other) , other);
  return a == b?0:a < b?-1:1;
}

function $compareToIgnoreCase(this$static, other){
  return $compareTo_5(this$static.toLowerCase(), other.toLowerCase());
}

function $equals_0(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_0(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

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
  return $equals_0(left, right);
}

function $replace(this$static, from, to){
  var hex, number, regex, replace;
  hex = (number = from >>> 0 , number.toString(16));
  regex = '\\u' + $substring_0('0000', hex.length) + hex;
  replace = String.fromCharCode(to);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $replace_0(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split(this$static){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp('\\n', 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_11, 2, 0, 6, 1);
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

function $substring_0(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_1(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

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

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_21) {
    hiSurrogate = 55296 + (codePoint - $intern_21 >> 10 & 1023) & $intern_14;
    loSurrogate = 56320 + (codePoint - $intern_21 & 1023) & $intern_14;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_14);
  }
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring_0(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring_0(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_2(x_0){
  return valueOf_3(x_0, x_0.length);
}

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

stringCastMap = {3:1, 120:1, 33:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $insert(this$static, index_0, x_0){
  this$static.string = $substring_1(this$static.string, 0, index_0) + ('' + x_0) + $substring_0(this$static.string, index_0);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(21, 77, {120:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 21);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(95, 61, $intern_3, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 95);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream;
  new PrintStream;
}

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
   else 
    len > 0 && copy_0(src_0, srcOfs, dest, destOfs, len);
}

defineClass(298, 1, {});
var err;
function UnsupportedOperationException(){
  RuntimeException_0.call(this, 'Remove not supported on this list');
}

defineClass(131, 4, $intern_3, UnsupportedOperationException);
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

function $toArray(this$static){
  return $toArray_0(this$static, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, $size(this$static.map_0), 5, 1));
}

function $toArray_0(this$static, a){
  var entry, i, it, outerIter, size_0;
  size_0 = $size(this$static.map_0);
  a.length < size_0 && (a = stampJavaTypeInfo_0(new Array(size_0), a));
  it = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter));
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, (entry = $next_0(it.val$outerIter2) , entry.getKey()));
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

function $toString_1(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    $add_2(joiner, e === this$static?'(this Collection)':e == null?'null':toString_4(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(245, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toString_0 = function toString_15(){
  return $toString_1(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 245);
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

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_4(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(247, 1, {118:1});
_.equals_0 = function equals_7(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 42)) {
    return false;
  }
  otherMap = castTo(obj, 118);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.hashCodeMap.size_0 + otherMap.stringMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_12(new AbstractHashMap$EntrySet(this));
}
;
_.toString_0 = function toString_16(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
    $add_2(joiner, $toString_2(this, entry.getKey()) + '=' + $toString_2(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 247);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 31);
    if ($equals_1(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function $get(this$static, key){
  return getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_1(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $remove(this$static, key){
  return $remove_3(this$static.hashCodeMap, key);
}

function $reset_1(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(84, 247, {118:1});
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 84);
defineClass(248, 245, {74:1});
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
_.hashCode_0 = function hashCode_7(){
  return hashCode_12(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 248);
function $contains(this$static, o){
  if (instanceOf(o, 31)) {
    return $containsEntry(this$static.this$01, castTo(o, 31));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(26, 248, {74:1}, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_1(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 26);
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

function $next_0(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_0(), 31);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(27, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next_0(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 27);
function $indexOf_1(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_13(toFind, this$static.get_0(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(246, 245, {67:1});
_.equals_0 = function equals_9(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 67)) {
    return false;
  }
  other = castTo(o, 67);
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
_.hashCode_0 = function hashCode_8(){
  return hashCode_13(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.remove_0 = function remove(index_0){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 246);
function $remove_0(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(79, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01.size_1();
}
;
_.next_0 = function next_1(){
  return checkCriticalElement(this.i < this.this$01.size_1()) , this.this$01.get_0(this.last = this.i++);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 79);
function AbstractList$ListIteratorImpl(this$0){
  this.this$01 = this$0;
  checkCriticalPositionIndex(this$0.array.length);
  this.i = 0;
}

defineClass(143, 79, {}, AbstractList$ListIteratorImpl);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 143);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(101, 248, {74:1}, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_2(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 101);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(85, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function next_2(){
  var entry;
  return entry = $next_0(this.val$outerIter2) , entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 85);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(70, 245, {}, AbstractMap$2);
_.contains_0 = function contains_2(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function iterator_3(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 70);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(63, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function next_3(){
  var entry;
  return entry = $next_0(this.val$outerIter2) , entry.getValue();
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 63);
defineClass(181, 1, $intern_28);
_.equals_0 = function equals_10(other){
  var entry;
  if (!instanceOf(other, 31)) {
    return false;
  }
  entry = castTo(other, 31);
  return equals_13(this.key_0, entry.getKey()) && equals_13(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_9(){
  return hashCode_14(this.key_0) ^ hashCode_14(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_17(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 181);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(182, 181, $intern_28, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 182);
defineClass(250, 1, $intern_28);
_.equals_0 = function equals_11(other){
  var entry;
  if (!instanceOf(other, 31)) {
    return false;
  }
  entry = castTo(other, 31);
  return equals_13(this.val$entry2.value[0], entry.getKey()) && equals_13($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_10(){
  return hashCode_14(this.val$entry2.value[0]) ^ hashCode_14($getValue(this));
}
;
_.toString_0 = function toString_18(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 250);
function $$init_0(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

function $add_0(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $get_0(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_2(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_13(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_1(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0);
  return previous;
}

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

function $set(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $toArray_1(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_0(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  $$init_0(this);
}

function ArrayList_0(initialCapacity){
  $$init_0(this);
  checkCriticalArgument_0(initialCapacity >= 0, 'Initial capacity must not be negative');
}

defineClass(15, 246, $intern_29, ArrayList, ArrayList_0);
_.contains_0 = function contains_3(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get_0(this, index_0);
}
;
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.remove_0 = function remove_0(index_0){
  return $remove_1(this, index_0);
}
;
_.size_1 = function size_4(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 15);
function $next_1(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(16, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.next_0 = function next_4(){
  return $next_1(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 16);
function copyPrimitiveArray(original, copy){
  var copyLen, len;
  len = original.length;
  copyLen = $wnd.Math.min(512, len);
  copy_0(original, 0, copy, 0, copyLen);
  return copy;
}

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

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp;
  comp = ($clinit_Comparators() , !comp?INTERNAL_NATURAL_ORDER:comp);
  temp = x_0.slice(fromIndex, toIndex);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

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

function sort_0(x_0, c){
  mergeSort(x_0, 0, x_0.length, c);
}

function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(142, 246, $intern_29, Arrays$ArrayList);
_.contains_0 = function contains_4(o){
  return $indexOf_1(this, o) != -1;
}
;
_.get_0 = function get_1(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 142);
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

function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  INTERNAL_NATURAL_ORDER = new Comparators$NaturalOrderComparator;
}

var INTERNAL_NATURAL_ORDER;
function $compare_0(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}

function Comparators$NaturalOrderComparator(){
}

defineClass(210, 1, $intern_13, Comparators$NaturalOrderComparator);
_.compare = function compare_6(a, b){
  return $compare_0(castTo(a, 33), castTo(b, 33));
}
;
_.equals_0 = function equals_12(other){
  return this === other;
}
;
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 210);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(220, 4, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 220);
function EmptyStackException(){
  RuntimeException.call(this);
}

defineClass(109, 4, $intern_3, EmptyStackException);
var Ljava_util_EmptyStackException_2_classLit = createForClass('java.util', 'EmptyStackException', 109);
function $equals_1(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset_1(this);
}

function HashMap_0(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset_1(this);
}

defineClass(42, 84, {3:1, 42:1, 118:1}, HashMap, HashMap_0);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 42);
function $add_1(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(c){
  this.map_0 = new HashMap_0(c.array.length);
  $addAll(this, c);
}

defineClass(105, 248, {3:1, 74:1}, HashSet, HashSet_0);
_.contains_0 = function contains_5(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_5(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_6(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 105);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

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

function $remove_3(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = !key?0:(hashCode = key.value_0 , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_1(key, entry.getKey())) {
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

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(197, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_6(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 197);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(103, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_5(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
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
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 103);
function $delete(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

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

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_1(this$static, key){
  return this$static.backingMap.get(key);
}

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

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(198, 1, {}, InternalStringMap);
_.iterator = function iterator_7(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 198);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(104, 1, {}, InternalStringMap$1);
_.next_0 = function next_6(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 104);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_1(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(199, 250, $intern_28, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 199);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(206, 4, $intern_3, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 206);
function equals_13(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_14(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initUnidimensionalArray(D_classLit, $intern_13, 11, 25, 15, 1);
  twoToTheXMinus48 = initUnidimensionalArray(D_classLit, $intern_13, 11, 33, 15, 1);
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

function $setSeed_1(this$static, seedhi, seedlo){
  this$static.seedhi = seedhi ^ 1502;
  this$static.seedlo = seedlo ^ $intern_30;
}

function $setSeed_2(this$static, seed){
  $setSeed_1(this$static, toInt_0(and_0(shr_0(seed, 24), $intern_33)), toInt_0(and_0(seed, $intern_33)));
}

function Random(){
  $clinit_Random();
  var hi, lo, seed;
  seed = uniqueSeed++ + Date.now();
  hi = round_int($wnd.Math.floor(seed * $intern_31)) & $intern_33;
  lo = round_int(seed - hi * $intern_32);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ $intern_30;
}

defineClass(213, 1, {}, Random);
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 213);
function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new ArrayIndexOutOfBoundsException);
  }
}

defineClass(203, 246, $intern_29);
_.contains_0 = function contains_6(elem){
  return $indexOf_2(this.arrayList, elem, 0) != -1;
}
;
_.get_0 = function get_2(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , $get_0(this.arrayList, index_0);
}
;
_.iterator = function iterator_8(){
  return new ArrayList$1(this.arrayList);
}
;
_.remove_0 = function remove_1(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , $remove_1(this.arrayList, index_0);
}
;
_.size_1 = function size_7(){
  return this.arrayList.array.length;
}
;
_.toString_0 = function toString_19(){
  return $toString_1(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 203);
function $peek(this$static){
  var sz;
  sz = this$static.arrayList.array.length;
  if (sz > 0) {
    return checkArrayElementIndex(sz - 1, this$static.arrayList.array.length) , $get_0(this$static.arrayList, sz - 1);
  }
   else {
    throw toJs(new EmptyStackException);
  }
}

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

function $push_0(this$static, o){
  $add_0(this$static.arrayList, o);
  return o;
}

function Stack(){
  this.arrayList = new ArrayList;
}

defineClass(204, 203, $intern_29, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 204);
function $add_2(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_4(this$static.builder, this$static.delimiter);
  $append_2(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(94, 1, {}, StringJoiner);
_.toString_0 = function toString_20(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 94);
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

function removeFrom(array, index_0){
  array.splice(index_0, 1);
}

defineClass(296, 1, {});
function stampJavaTypeInfo_0(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
}

function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArgument_1(expression, errorMessageArgs){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(format('Enum constant undefined: %s', errorMessageArgs)));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalArrayType_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new ArrayStoreException_0(errorMessage));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_1(errorMessage));
  }
}

function checkCriticalPositionIndex(size_0){
  if (0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: 0, Size: ' + size_0));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalStringBounds(end, length_0){
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

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

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

defineClass(293, 1, {});
function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

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

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
defineClass(677, 1, {});
defineClass(222, 1, {});
var Lorg_apache_commons_math3_distribution_AbstractIntegerDistribution_2_classLit = createForClass('org.apache.commons.math3.distribution', 'AbstractIntegerDistribution', 222);
function $sample(this$static){
  var max_0, r;
  max_0 = this$static.upper - this$static.lower + 1;
  if (max_0 <= 0) {
    while (true) {
      r = $next_2(this$static.random, 32);
      if (r >= this$static.lower && r <= this$static.upper) {
        return r;
      }
    }
  }
   else {
    return this$static.lower + $nextInt_0(this$static.random, max_0);
  }
}

function UniformIntegerDistribution(rng, upper){
  this.random = rng;
  if (0 > upper) {
    throw toJs((valueOf_0(0) , valueOf_0(upper) , new NumberIsTooLargeException));
  }
  this.lower = 0;
  this.upper = upper;
}

defineClass(223, 222, {}, UniformIntegerDistribution);
_.lower = 0;
_.upper = 0;
var Lorg_apache_commons_math3_distribution_UniformIntegerDistribution_2_classLit = createForClass('org.apache.commons.math3.distribution', 'UniformIntegerDistribution', 223);
function MathArithmeticException(){
  ArithmeticException.call(this);
  new ExceptionContext;
}

function MathArithmeticException_0(){
  ArithmeticException.call(this);
  new ExceptionContext;
}

defineClass(65, 78, $intern_3, MathArithmeticException, MathArithmeticException_0);
_.getLocalizedMessage = function getLocalizedMessage_0(){
  return null;
}
;
_.getMessage = function getMessage_1(){
  return null;
}
;
var Lorg_apache_commons_math3_exception_MathArithmeticException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathArithmeticException', 65);
defineClass(211, 52, $intern_3);
_.getLocalizedMessage = function getLocalizedMessage_1(){
  return null;
}
;
_.getMessage = function getMessage_2(){
  return null;
}
;
var Lorg_apache_commons_math3_exception_MathIllegalArgumentException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathIllegalArgumentException', 211);
function $clinit_MathIllegalNumberException(){
  $clinit_MathIllegalNumberException = emptyMethod;
  valueOf_0(0);
}

function MathIllegalNumberException(){
  IllegalArgumentException.call(this);
  new ExceptionContext;
}

defineClass(112, 211, $intern_3);
var Lorg_apache_commons_math3_exception_MathIllegalNumberException_2_classLit = createForClass('org.apache.commons.math3.exception', 'MathIllegalNumberException', 112);
function NumberIsTooSmallException(){
  MathIllegalNumberException.call(this);
}

defineClass(71, 112, $intern_3);
var Lorg_apache_commons_math3_exception_NumberIsTooSmallException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NumberIsTooSmallException', 71);
function NotPositiveException(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException.call(this);
}

defineClass(212, 71, $intern_3, NotPositiveException);
var Lorg_apache_commons_math3_exception_NotPositiveException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NotPositiveException', 212);
function NotStrictlyPositiveException(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException.call(this);
}

function NotStrictlyPositiveException_0(){
  $clinit_MathIllegalNumberException();
  NumberIsTooSmallException.call(this);
}

defineClass(113, 71, $intern_3, NotStrictlyPositiveException, NotStrictlyPositiveException_0);
var Lorg_apache_commons_math3_exception_NotStrictlyPositiveException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NotStrictlyPositiveException', 113);
function NumberIsTooLargeException(){
  $clinit_MathIllegalNumberException();
  MathIllegalNumberException.call(this);
}

defineClass(89, 112, $intern_3, NumberIsTooLargeException);
var Lorg_apache_commons_math3_exception_NumberIsTooLargeException_2_classLit = createForClass('org.apache.commons.math3.exception', 'NumberIsTooLargeException', 89);
function ExceptionContext(){
  new ArrayList;
  new ArrayList;
  new HashMap;
}

defineClass(90, 1, {}, ExceptionContext);
var Lorg_apache_commons_math3_exception_util_ExceptionContext_2_classLit = createForClass('org.apache.commons.math3.exception.util', 'ExceptionContext', 90);
function $nextInt_0(this$static, n){
  var bits, val;
  if (n > 0) {
    if ((n & -n) == n) {
      return toInt_0(shr_0(mul_0(n, $next_2(this$static, 31)), 31));
    }
    do {
      bits = $next_2(this$static, 31);
      val = bits % n;
    }
     while (bits - val + (n - 1) < 0);
    return val;
  }
  throw toJs((valueOf_0(n) , new NotStrictlyPositiveException));
}

defineClass(255, 1, {});
var Lorg_apache_commons_math3_random_BitsStreamGenerator_2_classLit = createForClass('org.apache.commons.math3.random', 'BitsStreamGenerator', 255);
function $setSeed_3(this$static, seed){
  var i, l;
  arraycopy(seed, 0, this$static.v, 0, $wnd.Math.min(seed.length, this$static.v.length));
  if (seed.length < this$static.v.length) {
    for (i = seed.length; i < this$static.v.length; ++i) {
      l = this$static.v[i - seed.length];
      this$static.v[i] = toInt_0(and_0(add_1(mul_0(1812433253, xor_0(l, shr_0(l, 30))), i), 4294967295));
    }
  }
  this$static.index_0 = 0;
}

function AbstractWell(seed){
  var j;
  this.v = initUnidimensionalArray(I_classLit, $intern_13, 11, 624, 15, 1);
  this.index_0 = 0;
  this.iRm1 = initUnidimensionalArray(I_classLit, $intern_13, 11, 624, 15, 1);
  this.iRm2 = initUnidimensionalArray(I_classLit, $intern_13, 11, 624, 15, 1);
  this.i1 = initUnidimensionalArray(I_classLit, $intern_13, 11, 624, 15, 1);
  this.i2 = initUnidimensionalArray(I_classLit, $intern_13, 11, 624, 15, 1);
  this.i3 = initUnidimensionalArray(I_classLit, $intern_13, 11, 624, 15, 1);
  for (j = 0; j < 624; ++j) {
    this.iRm1[j] = (j + 624 - 1) % 624;
    this.iRm2[j] = (j + 624 - 2) % 624;
    this.i1[j] = (j + 70) % 624;
    this.i2[j] = (j + 179) % 624;
    this.i3[j] = (j + 449) % 624;
  }
  $setSeed_3(this, seed);
}

defineClass(114, 255, {});
_.index_0 = 0;
var Lorg_apache_commons_math3_random_AbstractWell_2_classLit = createForClass('org.apache.commons.math3.random', 'AbstractWell', 114);
function $nextPermutation(this$static, n, k){
  var index_0, output;
  if (k > n) {
    throw toJs((valueOf_0(k) , valueOf_0(n) , new NumberIsTooLargeException));
  }
  if (k <= 0) {
    throw toJs((valueOf_0(k) , new NotStrictlyPositiveException_0));
  }
  index_0 = sequence(n);
  shuffle(index_0, (!this$static.rand && (this$static.rand = new Well19937c(($clinit_System() , fromDouble_0(Date.now())))) , this$static.rand));
  return output = initUnidimensionalArray(I_classLit, $intern_13, 11, k, 15, 1) , arraycopy(index_0, 0, output, 0, $wnd.Math.min(k, index_0.length)) , output;
}

function RandomDataGenerator(){
}

defineClass(205, 1, {}, RandomDataGenerator);
_.rand = null;
var Lorg_apache_commons_math3_random_RandomDataGenerator_2_classLit = createForClass('org.apache.commons.math3.random', 'RandomDataGenerator', 205);
function $next_2(this$static, bits){
  var indexRm1, indexRm2, v0, vM1, vM2, vM3, z0, z1, z2, z3, z4;
  indexRm1 = this$static.iRm1[this$static.index_0];
  indexRm2 = this$static.iRm2[this$static.index_0];
  v0 = this$static.v[this$static.index_0];
  vM1 = this$static.v[this$static.i1[this$static.index_0]];
  vM2 = this$static.v[this$static.i2[this$static.index_0]];
  vM3 = this$static.v[this$static.i3[this$static.index_0]];
  z0 = $intern_27 & this$static.v[indexRm1] ^ $intern_0 & this$static.v[indexRm2];
  z1 = v0 ^ v0 << 25 ^ (vM1 ^ vM1 >>> 27);
  z2 = vM2 >>> 9 ^ (vM3 ^ vM3 >>> 1);
  z3 = z1 ^ z2;
  z4 = z0 ^ (z1 ^ z1 << 9) ^ (z2 ^ z2 << 21) ^ (z3 ^ z3 >>> 21);
  this$static.v[this$static.index_0] = z3;
  this$static.v[indexRm1] = z4;
  this$static.v[indexRm2] &= $intern_27;
  this$static.index_0 = indexRm1;
  z4 ^= z4 << 7 & -462547200;
  z4 ^= z4 << 15 & -1685684224;
  return z4 >>> 32 - bits;
}

function Well19937c(seed){
  AbstractWell.call(this, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_13, 11, 15, [toInt_0(createLongEmul(shru(isSmallLong0(seed)?toBigLong(seed):seed, 32))), toInt_0(and_0(seed, 4294967295))]));
}

defineClass(221, 114, {}, Well19937c);
var Lorg_apache_commons_math3_random_Well19937c_2_classLit = createForClass('org.apache.commons.math3.random', 'Well19937c', 221);
function gcd(p, q){
  var k, t, u, v;
  u = p;
  v = q;
  if (compare_0(p, 0) == 0 || compare_0(q, 0) == 0) {
    if (eq(p, $intern_34) || eq(q, $intern_34)) {
      throw toJs((stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [valueOf_1(p), valueOf_1(q)]) , new MathArithmeticException_0));
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
    throw toJs((stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [valueOf_1(p), valueOf_1(q)]) , new MathArithmeticException_0));
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

function mulAndCheck(a, b){
  var ret;
  if (compare_0(a, b) > 0) {
    ret = mulAndCheck(b, a);
  }
   else {
    if (compare_0(a, 0) < 0) {
      if (compare_0(b, 0) < 0) {
        if (gte_0(a, div($intern_35, b))) {
          ret = mul_0(a, b);
        }
         else {
          throw toJs(new MathArithmeticException);
        }
      }
       else if (compare_0(b, 0) > 0) {
        if (lte(div($intern_34, b), a)) {
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
      if (lte(a, div($intern_35, b))) {
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

function checkBinomial(n, k){
  if (n < k) {
    throw toJs((valueOf_0(k) , valueOf_0(n) , new NumberIsTooLargeException));
  }
  if (n < 0) {
    throw toJs((valueOf_0(n) , new NotPositiveException));
  }
}

function sequence(size_0){
  var a, i;
  a = initUnidimensionalArray(I_classLit, $intern_13, 11, size_0, 15, 1);
  for (i = 0; i < size_0; i++) {
    a[i] = i;
  }
  return a;
}

function shuffle(list, rng){
  var i, target, temp;
  for (i = list.length - 1; i >= 0; i--) {
    i == 0?(target = 0):(target = $sample(new UniformIntegerDistribution(rng, i)));
    temp = list[target];
    list[target] = list[i];
    list[i] = temp;
  }
}

var C_classLit = createForPrimitive('char', 'C');
var I_classLit = createForPrimitive('int', 'I');
var Z_classLit = createForPrimitive('boolean', 'Z');
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

