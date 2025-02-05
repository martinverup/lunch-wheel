goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22834 = (function (f,blockable,meta22835){
this.f = f;
this.blockable = blockable;
this.meta22835 = meta22835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22836,meta22835__$1){
var self__ = this;
var _22836__$1 = this;
return (new cljs.core.async.t_cljs$core$async22834(self__.f,self__.blockable,meta22835__$1));
}));

(cljs.core.async.t_cljs$core$async22834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22836){
var self__ = this;
var _22836__$1 = this;
return self__.meta22835;
}));

(cljs.core.async.t_cljs$core$async22834.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async22834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async22834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22835","meta22835",-151185396,null)], null);
}));

(cljs.core.async.t_cljs$core$async22834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22834");

(cljs.core.async.t_cljs$core$async22834.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22834.
 */
cljs.core.async.__GT_t_cljs$core$async22834 = (function cljs$core$async$__GT_t_cljs$core$async22834(f,blockable,meta22835){
return (new cljs.core.async.t_cljs$core$async22834(f,blockable,meta22835));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22830 = arguments.length;
switch (G__22830) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async22834(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__22893 = arguments.length;
switch (G__22893) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22924 = arguments.length;
switch (G__22924) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__22958 = arguments.length;
switch (G__22958) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_27168 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27168) : fn1.call(null, val_27168));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27168) : fn1.call(null, val_27168));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22988 = arguments.length;
switch (G__22988) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___27191 = n;
var x_27196 = (0);
while(true){
if((x_27196 < n__5593__auto___27191)){
(a[x_27196] = x_27196);

var G__27197 = (x_27196 + (1));
x_27196 = G__27197;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23029 = (function (flag,meta23030){
this.flag = flag;
this.meta23030 = meta23030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23031,meta23030__$1){
var self__ = this;
var _23031__$1 = this;
return (new cljs.core.async.t_cljs$core$async23029(self__.flag,meta23030__$1));
}));

(cljs.core.async.t_cljs$core$async23029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23031){
var self__ = this;
var _23031__$1 = this;
return self__.meta23030;
}));

(cljs.core.async.t_cljs$core$async23029.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async23029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23030","meta23030",969389769,null)], null);
}));

(cljs.core.async.t_cljs$core$async23029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23029");

(cljs.core.async.t_cljs$core$async23029.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23029.
 */
cljs.core.async.__GT_t_cljs$core$async23029 = (function cljs$core$async$__GT_t_cljs$core$async23029(flag,meta23030){
return (new cljs.core.async.t_cljs$core$async23029(flag,meta23030));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async23029(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23058 = (function (flag,cb,meta23059){
this.flag = flag;
this.cb = cb;
this.meta23059 = meta23059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23060,meta23059__$1){
var self__ = this;
var _23060__$1 = this;
return (new cljs.core.async.t_cljs$core$async23058(self__.flag,self__.cb,meta23059__$1));
}));

(cljs.core.async.t_cljs$core$async23058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23060){
var self__ = this;
var _23060__$1 = this;
return self__.meta23059;
}));

(cljs.core.async.t_cljs$core$async23058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async23058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23059","meta23059",-503575839,null)], null);
}));

(cljs.core.async.t_cljs$core$async23058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23058");

(cljs.core.async.t_cljs$core$async23058.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23058.
 */
cljs.core.async.__GT_t_cljs$core$async23058 = (function cljs$core$async$__GT_t_cljs$core$async23058(flag,cb,meta23059){
return (new cljs.core.async.t_cljs$core$async23058(flag,cb,meta23059));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async23058(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23100_SHARP_){
var G__23124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23100_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23124) : fret.call(null, G__23124));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23101_SHARP_){
var G__23127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23101_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23127) : fret.call(null, G__23127));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27219 = (i + (1));
i = G__27219;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27221 = arguments.length;
var i__5727__auto___27222 = (0);
while(true){
if((i__5727__auto___27222 < len__5726__auto___27221)){
args__5732__auto__.push((arguments[i__5727__auto___27222]));

var G__27223 = (i__5727__auto___27222 + (1));
i__5727__auto___27222 = G__27223;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23158){
var map__23160 = p__23158;
var map__23160__$1 = cljs.core.__destructure_map(map__23160);
var opts = map__23160__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23146){
var G__23147 = cljs.core.first(seq23146);
var seq23146__$1 = cljs.core.next(seq23146);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23147,seq23146__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23192 = arguments.length;
switch (G__23192) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22675__auto___27228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_23263){
var state_val_23264 = (state_23263[(1)]);
if((state_val_23264 === (7))){
var inst_23257 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
var statearr_23274_27230 = state_23263__$1;
(statearr_23274_27230[(2)] = inst_23257);

(statearr_23274_27230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (1))){
var state_23263__$1 = state_23263;
var statearr_23276_27231 = state_23263__$1;
(statearr_23276_27231[(2)] = null);

(statearr_23276_27231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (4))){
var inst_23234 = (state_23263[(7)]);
var inst_23234__$1 = (state_23263[(2)]);
var inst_23236 = (inst_23234__$1 == null);
var state_23263__$1 = (function (){var statearr_23280 = state_23263;
(statearr_23280[(7)] = inst_23234__$1);

return statearr_23280;
})();
if(cljs.core.truth_(inst_23236)){
var statearr_23281_27233 = state_23263__$1;
(statearr_23281_27233[(1)] = (5));

} else {
var statearr_23282_27235 = state_23263__$1;
(statearr_23282_27235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (13))){
var state_23263__$1 = state_23263;
var statearr_23287_27237 = state_23263__$1;
(statearr_23287_27237[(2)] = null);

(statearr_23287_27237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (6))){
var inst_23234 = (state_23263[(7)]);
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23263__$1,(11),to,inst_23234);
} else {
if((state_val_23264 === (3))){
var inst_23260 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23263__$1,inst_23260);
} else {
if((state_val_23264 === (12))){
var state_23263__$1 = state_23263;
var statearr_23294_27238 = state_23263__$1;
(statearr_23294_27238[(2)] = null);

(statearr_23294_27238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (2))){
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23263__$1,(4),from);
} else {
if((state_val_23264 === (11))){
var inst_23250 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
if(cljs.core.truth_(inst_23250)){
var statearr_23303_27239 = state_23263__$1;
(statearr_23303_27239[(1)] = (12));

} else {
var statearr_23304_27242 = state_23263__$1;
(statearr_23304_27242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (9))){
var state_23263__$1 = state_23263;
var statearr_23307_27244 = state_23263__$1;
(statearr_23307_27244[(2)] = null);

(statearr_23307_27244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (5))){
var state_23263__$1 = state_23263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23309_27245 = state_23263__$1;
(statearr_23309_27245[(1)] = (8));

} else {
var statearr_23310_27246 = state_23263__$1;
(statearr_23310_27246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (14))){
var inst_23255 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
var statearr_23311_27247 = state_23263__$1;
(statearr_23311_27247[(2)] = inst_23255);

(statearr_23311_27247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (10))){
var inst_23247 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
var statearr_23312_27248 = state_23263__$1;
(statearr_23312_27248[(2)] = inst_23247);

(statearr_23312_27248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (8))){
var inst_23244 = cljs.core.async.close_BANG_(to);
var state_23263__$1 = state_23263;
var statearr_23313_27249 = state_23263__$1;
(statearr_23313_27249[(2)] = inst_23244);

(statearr_23313_27249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_23315 = [null,null,null,null,null,null,null,null];
(statearr_23315[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_23315[(1)] = (1));

return statearr_23315;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_23263){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_23263);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e23316){var ex__21322__auto__ = e23316;
var statearr_23317_27252 = state_23263;
(statearr_23317_27252[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_23263[(4)]))){
var statearr_23320_27253 = state_23263;
(statearr_23320_27253[(1)] = cljs.core.first((state_23263[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27258 = state_23263;
state_23263 = G__27258;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_23263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_23263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_23322 = f__22677__auto__();
(statearr_23322[(6)] = c__22675__auto___27228);

return statearr_23322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__23325){
var vec__23328 = p__23325;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23328,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23328,(1),null);
var job = vec__23328;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__22675__auto___27264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_23336){
var state_val_23337 = (state_23336[(1)]);
if((state_val_23337 === (1))){
var state_23336__$1 = state_23336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23336__$1,(2),res,v);
} else {
if((state_val_23337 === (2))){
var inst_23333 = (state_23336[(2)]);
var inst_23334 = cljs.core.async.close_BANG_(res);
var state_23336__$1 = (function (){var statearr_23342 = state_23336;
(statearr_23342[(7)] = inst_23333);

return statearr_23342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23336__$1,inst_23334);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0 = (function (){
var statearr_23347 = [null,null,null,null,null,null,null,null];
(statearr_23347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__);

(statearr_23347[(1)] = (1));

return statearr_23347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1 = (function (state_23336){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_23336);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e23351){var ex__21322__auto__ = e23351;
var statearr_23352_27270 = state_23336;
(statearr_23352_27270[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_23336[(4)]))){
var statearr_23353_27276 = state_23336;
(statearr_23353_27276[(1)] = cljs.core.first((state_23336[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27277 = state_23336;
state_23336 = G__27277;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = function(state_23336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1.call(this,state_23336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_23354 = f__22677__auto__();
(statearr_23354[(6)] = c__22675__auto___27264);

return statearr_23354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__23358){
var vec__23359 = p__23358;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23359,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23359,(1),null);
var job = vec__23359;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___27290 = n;
var __27291 = (0);
while(true){
if((__27291 < n__5593__auto___27290)){
var G__23370_27292 = type;
var G__23370_27293__$1 = (((G__23370_27292 instanceof cljs.core.Keyword))?G__23370_27292.fqn:null);
switch (G__23370_27293__$1) {
case "compute":
var c__22675__auto___27295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27291,c__22675__auto___27295,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async){
return (function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = ((function (__27291,c__22675__auto___27295,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async){
return (function (state_23388){
var state_val_23389 = (state_23388[(1)]);
if((state_val_23389 === (1))){
var state_23388__$1 = state_23388;
var statearr_23402_27296 = state_23388__$1;
(statearr_23402_27296[(2)] = null);

(statearr_23402_27296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (2))){
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23388__$1,(4),jobs);
} else {
if((state_val_23389 === (3))){
var inst_23386 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23388__$1,inst_23386);
} else {
if((state_val_23389 === (4))){
var inst_23377 = (state_23388[(2)]);
var inst_23378 = process__$1(inst_23377);
var state_23388__$1 = state_23388;
if(cljs.core.truth_(inst_23378)){
var statearr_23414_27297 = state_23388__$1;
(statearr_23414_27297[(1)] = (5));

} else {
var statearr_23416_27298 = state_23388__$1;
(statearr_23416_27298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (5))){
var state_23388__$1 = state_23388;
var statearr_23417_27299 = state_23388__$1;
(statearr_23417_27299[(2)] = null);

(statearr_23417_27299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (6))){
var state_23388__$1 = state_23388;
var statearr_23418_27300 = state_23388__$1;
(statearr_23418_27300[(2)] = null);

(statearr_23418_27300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (7))){
var inst_23384 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23421_27301 = state_23388__$1;
(statearr_23421_27301[(2)] = inst_23384);

(statearr_23421_27301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27291,c__22675__auto___27295,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async))
;
return ((function (__27291,switch__21318__auto__,c__22675__auto___27295,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0 = (function (){
var statearr_23432 = [null,null,null,null,null,null,null];
(statearr_23432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__);

(statearr_23432[(1)] = (1));

return statearr_23432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1 = (function (state_23388){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_23388);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e23434){var ex__21322__auto__ = e23434;
var statearr_23435_27302 = state_23388;
(statearr_23435_27302[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_23388[(4)]))){
var statearr_23439_27303 = state_23388;
(statearr_23439_27303[(1)] = cljs.core.first((state_23388[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27304 = state_23388;
state_23388 = G__27304;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = function(state_23388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1.call(this,state_23388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__;
})()
;})(__27291,switch__21318__auto__,c__22675__auto___27295,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async))
})();
var state__22678__auto__ = (function (){var statearr_23441 = f__22677__auto__();
(statearr_23441[(6)] = c__22675__auto___27295);

return statearr_23441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
});})(__27291,c__22675__auto___27295,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async))
);


break;
case "async":
var c__22675__auto___27309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27291,c__22675__auto___27309,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async){
return (function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = ((function (__27291,c__22675__auto___27309,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async){
return (function (state_23456){
var state_val_23460 = (state_23456[(1)]);
if((state_val_23460 === (1))){
var state_23456__$1 = state_23456;
var statearr_23472_27312 = state_23456__$1;
(statearr_23472_27312[(2)] = null);

(statearr_23472_27312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (2))){
var state_23456__$1 = state_23456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23456__$1,(4),jobs);
} else {
if((state_val_23460 === (3))){
var inst_23454 = (state_23456[(2)]);
var state_23456__$1 = state_23456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23456__$1,inst_23454);
} else {
if((state_val_23460 === (4))){
var inst_23446 = (state_23456[(2)]);
var inst_23447 = async(inst_23446);
var state_23456__$1 = state_23456;
if(cljs.core.truth_(inst_23447)){
var statearr_23481_27321 = state_23456__$1;
(statearr_23481_27321[(1)] = (5));

} else {
var statearr_23489_27322 = state_23456__$1;
(statearr_23489_27322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (5))){
var state_23456__$1 = state_23456;
var statearr_23490_27323 = state_23456__$1;
(statearr_23490_27323[(2)] = null);

(statearr_23490_27323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (6))){
var state_23456__$1 = state_23456;
var statearr_23491_27324 = state_23456__$1;
(statearr_23491_27324[(2)] = null);

(statearr_23491_27324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (7))){
var inst_23452 = (state_23456[(2)]);
var state_23456__$1 = state_23456;
var statearr_23494_27325 = state_23456__$1;
(statearr_23494_27325[(2)] = inst_23452);

(statearr_23494_27325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27291,c__22675__auto___27309,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async))
;
return ((function (__27291,switch__21318__auto__,c__22675__auto___27309,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0 = (function (){
var statearr_23506 = [null,null,null,null,null,null,null];
(statearr_23506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__);

(statearr_23506[(1)] = (1));

return statearr_23506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1 = (function (state_23456){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_23456);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e23508){var ex__21322__auto__ = e23508;
var statearr_23509_27330 = state_23456;
(statearr_23509_27330[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_23456[(4)]))){
var statearr_23510_27332 = state_23456;
(statearr_23510_27332[(1)] = cljs.core.first((state_23456[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27337 = state_23456;
state_23456 = G__27337;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = function(state_23456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1.call(this,state_23456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__;
})()
;})(__27291,switch__21318__auto__,c__22675__auto___27309,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async))
})();
var state__22678__auto__ = (function (){var statearr_23517 = f__22677__auto__();
(statearr_23517[(6)] = c__22675__auto___27309);

return statearr_23517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
});})(__27291,c__22675__auto___27309,G__23370_27292,G__23370_27293__$1,n__5593__auto___27290,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23370_27293__$1)].join('')));

}

var G__27339 = (__27291 + (1));
__27291 = G__27339;
continue;
} else {
}
break;
}

var c__22675__auto___27340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_23541){
var state_val_23542 = (state_23541[(1)]);
if((state_val_23542 === (7))){
var inst_23537 = (state_23541[(2)]);
var state_23541__$1 = state_23541;
var statearr_23548_27353 = state_23541__$1;
(statearr_23548_27353[(2)] = inst_23537);

(statearr_23548_27353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23542 === (1))){
var state_23541__$1 = state_23541;
var statearr_23549_27354 = state_23541__$1;
(statearr_23549_27354[(2)] = null);

(statearr_23549_27354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23542 === (4))){
var inst_23522 = (state_23541[(7)]);
var inst_23522__$1 = (state_23541[(2)]);
var inst_23523 = (inst_23522__$1 == null);
var state_23541__$1 = (function (){var statearr_23550 = state_23541;
(statearr_23550[(7)] = inst_23522__$1);

return statearr_23550;
})();
if(cljs.core.truth_(inst_23523)){
var statearr_23551_27355 = state_23541__$1;
(statearr_23551_27355[(1)] = (5));

} else {
var statearr_23552_27356 = state_23541__$1;
(statearr_23552_27356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23542 === (6))){
var inst_23522 = (state_23541[(7)]);
var inst_23527 = (state_23541[(8)]);
var inst_23527__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23529 = [inst_23522,inst_23527__$1];
var inst_23530 = (new cljs.core.PersistentVector(null,2,(5),inst_23528,inst_23529,null));
var state_23541__$1 = (function (){var statearr_23560 = state_23541;
(statearr_23560[(8)] = inst_23527__$1);

return statearr_23560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23541__$1,(8),jobs,inst_23530);
} else {
if((state_val_23542 === (3))){
var inst_23539 = (state_23541[(2)]);
var state_23541__$1 = state_23541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23541__$1,inst_23539);
} else {
if((state_val_23542 === (2))){
var state_23541__$1 = state_23541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23541__$1,(4),from);
} else {
if((state_val_23542 === (9))){
var inst_23534 = (state_23541[(2)]);
var state_23541__$1 = (function (){var statearr_23562 = state_23541;
(statearr_23562[(9)] = inst_23534);

return statearr_23562;
})();
var statearr_23563_27357 = state_23541__$1;
(statearr_23563_27357[(2)] = null);

(statearr_23563_27357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23542 === (5))){
var inst_23525 = cljs.core.async.close_BANG_(jobs);
var state_23541__$1 = state_23541;
var statearr_23565_27362 = state_23541__$1;
(statearr_23565_27362[(2)] = inst_23525);

(statearr_23565_27362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23542 === (8))){
var inst_23527 = (state_23541[(8)]);
var inst_23532 = (state_23541[(2)]);
var state_23541__$1 = (function (){var statearr_23567 = state_23541;
(statearr_23567[(10)] = inst_23532);

return statearr_23567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23541__$1,(9),results,inst_23527);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0 = (function (){
var statearr_23573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__);

(statearr_23573[(1)] = (1));

return statearr_23573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1 = (function (state_23541){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_23541);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e23576){var ex__21322__auto__ = e23576;
var statearr_23577_27363 = state_23541;
(statearr_23577_27363[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_23541[(4)]))){
var statearr_23584_27364 = state_23541;
(statearr_23584_27364[(1)] = cljs.core.first((state_23541[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27366 = state_23541;
state_23541 = G__27366;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = function(state_23541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1.call(this,state_23541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_23591 = f__22677__auto__();
(statearr_23591[(6)] = c__22675__auto___27340);

return statearr_23591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


var c__22675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_23636){
var state_val_23637 = (state_23636[(1)]);
if((state_val_23637 === (7))){
var inst_23631 = (state_23636[(2)]);
var state_23636__$1 = state_23636;
var statearr_23643_27372 = state_23636__$1;
(statearr_23643_27372[(2)] = inst_23631);

(statearr_23643_27372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (20))){
var state_23636__$1 = state_23636;
var statearr_23645_27373 = state_23636__$1;
(statearr_23645_27373[(2)] = null);

(statearr_23645_27373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (1))){
var state_23636__$1 = state_23636;
var statearr_23646_27378 = state_23636__$1;
(statearr_23646_27378[(2)] = null);

(statearr_23646_27378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (4))){
var inst_23597 = (state_23636[(7)]);
var inst_23597__$1 = (state_23636[(2)]);
var inst_23598 = (inst_23597__$1 == null);
var state_23636__$1 = (function (){var statearr_23648 = state_23636;
(statearr_23648[(7)] = inst_23597__$1);

return statearr_23648;
})();
if(cljs.core.truth_(inst_23598)){
var statearr_23649_27384 = state_23636__$1;
(statearr_23649_27384[(1)] = (5));

} else {
var statearr_23651_27385 = state_23636__$1;
(statearr_23651_27385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (15))){
var inst_23611 = (state_23636[(8)]);
var state_23636__$1 = state_23636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23636__$1,(18),to,inst_23611);
} else {
if((state_val_23637 === (21))){
var inst_23626 = (state_23636[(2)]);
var state_23636__$1 = state_23636;
var statearr_23663_27392 = state_23636__$1;
(statearr_23663_27392[(2)] = inst_23626);

(statearr_23663_27392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (13))){
var inst_23628 = (state_23636[(2)]);
var state_23636__$1 = (function (){var statearr_23664 = state_23636;
(statearr_23664[(9)] = inst_23628);

return statearr_23664;
})();
var statearr_23665_27393 = state_23636__$1;
(statearr_23665_27393[(2)] = null);

(statearr_23665_27393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (6))){
var inst_23597 = (state_23636[(7)]);
var state_23636__$1 = state_23636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23636__$1,(11),inst_23597);
} else {
if((state_val_23637 === (17))){
var inst_23621 = (state_23636[(2)]);
var state_23636__$1 = state_23636;
if(cljs.core.truth_(inst_23621)){
var statearr_23669_27394 = state_23636__$1;
(statearr_23669_27394[(1)] = (19));

} else {
var statearr_23673_27395 = state_23636__$1;
(statearr_23673_27395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (3))){
var inst_23633 = (state_23636[(2)]);
var state_23636__$1 = state_23636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23636__$1,inst_23633);
} else {
if((state_val_23637 === (12))){
var inst_23608 = (state_23636[(10)]);
var state_23636__$1 = state_23636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23636__$1,(14),inst_23608);
} else {
if((state_val_23637 === (2))){
var state_23636__$1 = state_23636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23636__$1,(4),results);
} else {
if((state_val_23637 === (19))){
var state_23636__$1 = state_23636;
var statearr_23692_27396 = state_23636__$1;
(statearr_23692_27396[(2)] = null);

(statearr_23692_27396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (11))){
var inst_23608 = (state_23636[(2)]);
var state_23636__$1 = (function (){var statearr_23700 = state_23636;
(statearr_23700[(10)] = inst_23608);

return statearr_23700;
})();
var statearr_23702_27397 = state_23636__$1;
(statearr_23702_27397[(2)] = null);

(statearr_23702_27397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (9))){
var state_23636__$1 = state_23636;
var statearr_23706_27398 = state_23636__$1;
(statearr_23706_27398[(2)] = null);

(statearr_23706_27398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (5))){
var state_23636__$1 = state_23636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23721_27399 = state_23636__$1;
(statearr_23721_27399[(1)] = (8));

} else {
var statearr_23729_27400 = state_23636__$1;
(statearr_23729_27400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (14))){
var inst_23614 = (state_23636[(11)]);
var inst_23611 = (state_23636[(8)]);
var inst_23611__$1 = (state_23636[(2)]);
var inst_23613 = (inst_23611__$1 == null);
var inst_23614__$1 = cljs.core.not(inst_23613);
var state_23636__$1 = (function (){var statearr_23743 = state_23636;
(statearr_23743[(11)] = inst_23614__$1);

(statearr_23743[(8)] = inst_23611__$1);

return statearr_23743;
})();
if(inst_23614__$1){
var statearr_23747_27401 = state_23636__$1;
(statearr_23747_27401[(1)] = (15));

} else {
var statearr_23749_27402 = state_23636__$1;
(statearr_23749_27402[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (16))){
var inst_23614 = (state_23636[(11)]);
var state_23636__$1 = state_23636;
var statearr_23754_27403 = state_23636__$1;
(statearr_23754_27403[(2)] = inst_23614);

(statearr_23754_27403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (10))){
var inst_23605 = (state_23636[(2)]);
var state_23636__$1 = state_23636;
var statearr_23767_27404 = state_23636__$1;
(statearr_23767_27404[(2)] = inst_23605);

(statearr_23767_27404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (18))){
var inst_23618 = (state_23636[(2)]);
var state_23636__$1 = state_23636;
var statearr_23774_27406 = state_23636__$1;
(statearr_23774_27406[(2)] = inst_23618);

(statearr_23774_27406[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (8))){
var inst_23602 = cljs.core.async.close_BANG_(to);
var state_23636__$1 = state_23636;
var statearr_23783_27410 = state_23636__$1;
(statearr_23783_27410[(2)] = inst_23602);

(statearr_23783_27410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0 = (function (){
var statearr_23800 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__);

(statearr_23800[(1)] = (1));

return statearr_23800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1 = (function (state_23636){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_23636);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e23812){var ex__21322__auto__ = e23812;
var statearr_23813_27411 = state_23636;
(statearr_23813_27411[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_23636[(4)]))){
var statearr_23814_27412 = state_23636;
(statearr_23814_27412[(1)] = cljs.core.first((state_23636[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27413 = state_23636;
state_23636 = G__27413;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__ = function(state_23636){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1.call(this,state_23636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_23825 = f__22677__auto__();
(statearr_23825[(6)] = c__22675__auto__);

return statearr_23825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));

return c__22675__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23838 = arguments.length;
switch (G__23838) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23854 = arguments.length;
switch (G__23854) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23876 = arguments.length;
switch (G__23876) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__22675__auto___27423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_23936){
var state_val_23937 = (state_23936[(1)]);
if((state_val_23937 === (7))){
var inst_23929 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23941_27424 = state_23936__$1;
(statearr_23941_27424[(2)] = inst_23929);

(statearr_23941_27424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (1))){
var state_23936__$1 = state_23936;
var statearr_23942_27429 = state_23936__$1;
(statearr_23942_27429[(2)] = null);

(statearr_23942_27429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (4))){
var inst_23899 = (state_23936[(7)]);
var inst_23899__$1 = (state_23936[(2)]);
var inst_23902 = (inst_23899__$1 == null);
var state_23936__$1 = (function (){var statearr_23945 = state_23936;
(statearr_23945[(7)] = inst_23899__$1);

return statearr_23945;
})();
if(cljs.core.truth_(inst_23902)){
var statearr_23946_27430 = state_23936__$1;
(statearr_23946_27430[(1)] = (5));

} else {
var statearr_23947_27431 = state_23936__$1;
(statearr_23947_27431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (13))){
var state_23936__$1 = state_23936;
var statearr_23948_27432 = state_23936__$1;
(statearr_23948_27432[(2)] = null);

(statearr_23948_27432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (6))){
var inst_23899 = (state_23936[(7)]);
var inst_23911 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23899) : p.call(null, inst_23899));
var state_23936__$1 = state_23936;
if(cljs.core.truth_(inst_23911)){
var statearr_23950_27433 = state_23936__$1;
(statearr_23950_27433[(1)] = (9));

} else {
var statearr_23951_27434 = state_23936__$1;
(statearr_23951_27434[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (3))){
var inst_23931 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23936__$1,inst_23931);
} else {
if((state_val_23937 === (12))){
var state_23936__$1 = state_23936;
var statearr_23954_27435 = state_23936__$1;
(statearr_23954_27435[(2)] = null);

(statearr_23954_27435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (2))){
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23936__$1,(4),ch);
} else {
if((state_val_23937 === (11))){
var inst_23899 = (state_23936[(7)]);
var inst_23915 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23936__$1,(8),inst_23915,inst_23899);
} else {
if((state_val_23937 === (9))){
var state_23936__$1 = state_23936;
var statearr_23955_27436 = state_23936__$1;
(statearr_23955_27436[(2)] = tc);

(statearr_23955_27436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (5))){
var inst_23908 = cljs.core.async.close_BANG_(tc);
var inst_23909 = cljs.core.async.close_BANG_(fc);
var state_23936__$1 = (function (){var statearr_23956 = state_23936;
(statearr_23956[(8)] = inst_23908);

return statearr_23956;
})();
var statearr_23957_27437 = state_23936__$1;
(statearr_23957_27437[(2)] = inst_23909);

(statearr_23957_27437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (14))){
var inst_23927 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23964_27438 = state_23936__$1;
(statearr_23964_27438[(2)] = inst_23927);

(statearr_23964_27438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (10))){
var state_23936__$1 = state_23936;
var statearr_23973_27439 = state_23936__$1;
(statearr_23973_27439[(2)] = fc);

(statearr_23973_27439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (8))){
var inst_23917 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
if(cljs.core.truth_(inst_23917)){
var statearr_23983_27440 = state_23936__$1;
(statearr_23983_27440[(1)] = (12));

} else {
var statearr_23986_27441 = state_23936__$1;
(statearr_23986_27441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_23995 = [null,null,null,null,null,null,null,null,null];
(statearr_23995[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_23995[(1)] = (1));

return statearr_23995;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_23936){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_23936);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e23996){var ex__21322__auto__ = e23996;
var statearr_24001_27443 = state_23936;
(statearr_24001_27443[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_23936[(4)]))){
var statearr_24010_27444 = state_23936;
(statearr_24010_27444[(1)] = cljs.core.first((state_23936[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27445 = state_23936;
state_23936 = G__27445;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_23936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_23936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_24036 = f__22677__auto__();
(statearr_24036[(6)] = c__22675__auto___27423);

return statearr_24036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_24094){
var state_val_24097 = (state_24094[(1)]);
if((state_val_24097 === (7))){
var inst_24084 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
var statearr_24105_27448 = state_24094__$1;
(statearr_24105_27448[(2)] = inst_24084);

(statearr_24105_27448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24097 === (1))){
var inst_24059 = init;
var inst_24060 = inst_24059;
var state_24094__$1 = (function (){var statearr_24111 = state_24094;
(statearr_24111[(7)] = inst_24060);

return statearr_24111;
})();
var statearr_24112_27450 = state_24094__$1;
(statearr_24112_27450[(2)] = null);

(statearr_24112_27450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24097 === (4))){
var inst_24063 = (state_24094[(8)]);
var inst_24063__$1 = (state_24094[(2)]);
var inst_24064 = (inst_24063__$1 == null);
var state_24094__$1 = (function (){var statearr_24114 = state_24094;
(statearr_24114[(8)] = inst_24063__$1);

return statearr_24114;
})();
if(cljs.core.truth_(inst_24064)){
var statearr_24116_27454 = state_24094__$1;
(statearr_24116_27454[(1)] = (5));

} else {
var statearr_24121_27455 = state_24094__$1;
(statearr_24121_27455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24097 === (6))){
var inst_24071 = (state_24094[(9)]);
var inst_24060 = (state_24094[(7)]);
var inst_24063 = (state_24094[(8)]);
var inst_24071__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24060,inst_24063) : f.call(null, inst_24060,inst_24063));
var inst_24072 = cljs.core.reduced_QMARK_(inst_24071__$1);
var state_24094__$1 = (function (){var statearr_24133 = state_24094;
(statearr_24133[(9)] = inst_24071__$1);

return statearr_24133;
})();
if(inst_24072){
var statearr_24145_27456 = state_24094__$1;
(statearr_24145_27456[(1)] = (8));

} else {
var statearr_24147_27457 = state_24094__$1;
(statearr_24147_27457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24097 === (3))){
var inst_24086 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24094__$1,inst_24086);
} else {
if((state_val_24097 === (2))){
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24094__$1,(4),ch);
} else {
if((state_val_24097 === (9))){
var inst_24071 = (state_24094[(9)]);
var inst_24060 = inst_24071;
var state_24094__$1 = (function (){var statearr_24177 = state_24094;
(statearr_24177[(7)] = inst_24060);

return statearr_24177;
})();
var statearr_24186_27458 = state_24094__$1;
(statearr_24186_27458[(2)] = null);

(statearr_24186_27458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24097 === (5))){
var inst_24060 = (state_24094[(7)]);
var state_24094__$1 = state_24094;
var statearr_24191_27459 = state_24094__$1;
(statearr_24191_27459[(2)] = inst_24060);

(statearr_24191_27459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24097 === (10))){
var inst_24082 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
var statearr_24205_27460 = state_24094__$1;
(statearr_24205_27460[(2)] = inst_24082);

(statearr_24205_27460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24097 === (8))){
var inst_24071 = (state_24094[(9)]);
var inst_24078 = cljs.core.deref(inst_24071);
var state_24094__$1 = state_24094;
var statearr_24217_27461 = state_24094__$1;
(statearr_24217_27461[(2)] = inst_24078);

(statearr_24217_27461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__21319__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21319__auto____0 = (function (){
var statearr_24218 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24218[(0)] = cljs$core$async$reduce_$_state_machine__21319__auto__);

(statearr_24218[(1)] = (1));

return statearr_24218;
});
var cljs$core$async$reduce_$_state_machine__21319__auto____1 = (function (state_24094){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_24094);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e24219){var ex__21322__auto__ = e24219;
var statearr_24220_27466 = state_24094;
(statearr_24220_27466[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_24094[(4)]))){
var statearr_24221_27467 = state_24094;
(statearr_24221_27467[(1)] = cljs.core.first((state_24094[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27468 = state_24094;
state_24094 = G__27468;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21319__auto__ = function(state_24094){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21319__auto____1.call(this,state_24094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21319__auto____0;
cljs$core$async$reduce_$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21319__auto____1;
return cljs$core$async$reduce_$_state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_24245 = f__22677__auto__();
(statearr_24245[(6)] = c__22675__auto__);

return statearr_24245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));

return c__22675__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__22675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_24256){
var state_val_24257 = (state_24256[(1)]);
if((state_val_24257 === (1))){
var inst_24251 = cljs.core.async.reduce(f__$1,init,ch);
var state_24256__$1 = state_24256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24256__$1,(2),inst_24251);
} else {
if((state_val_24257 === (2))){
var inst_24253 = (state_24256[(2)]);
var inst_24254 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24253) : f__$1.call(null, inst_24253));
var state_24256__$1 = state_24256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24256__$1,inst_24254);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21319__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21319__auto____0 = (function (){
var statearr_24263 = [null,null,null,null,null,null,null];
(statearr_24263[(0)] = cljs$core$async$transduce_$_state_machine__21319__auto__);

(statearr_24263[(1)] = (1));

return statearr_24263;
});
var cljs$core$async$transduce_$_state_machine__21319__auto____1 = (function (state_24256){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_24256);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e24264){var ex__21322__auto__ = e24264;
var statearr_24265_27474 = state_24256;
(statearr_24265_27474[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_24256[(4)]))){
var statearr_24266_27475 = state_24256;
(statearr_24266_27475[(1)] = cljs.core.first((state_24256[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27476 = state_24256;
state_24256 = G__27476;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21319__auto__ = function(state_24256){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21319__auto____1.call(this,state_24256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21319__auto____0;
cljs$core$async$transduce_$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21319__auto____1;
return cljs$core$async$transduce_$_state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_24273 = f__22677__auto__();
(statearr_24273[(6)] = c__22675__auto__);

return statearr_24273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));

return c__22675__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__24276 = arguments.length;
switch (G__24276) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_24336){
var state_val_24339 = (state_24336[(1)]);
if((state_val_24339 === (7))){
var inst_24315 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24347_27478 = state_24336__$1;
(statearr_24347_27478[(2)] = inst_24315);

(statearr_24347_27478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (1))){
var inst_24304 = cljs.core.seq(coll);
var inst_24305 = inst_24304;
var state_24336__$1 = (function (){var statearr_24348 = state_24336;
(statearr_24348[(7)] = inst_24305);

return statearr_24348;
})();
var statearr_24349_27479 = state_24336__$1;
(statearr_24349_27479[(2)] = null);

(statearr_24349_27479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (4))){
var inst_24305 = (state_24336[(7)]);
var inst_24313 = cljs.core.first(inst_24305);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24336__$1,(7),ch,inst_24313);
} else {
if((state_val_24339 === (13))){
var inst_24327 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24350_27480 = state_24336__$1;
(statearr_24350_27480[(2)] = inst_24327);

(statearr_24350_27480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (6))){
var inst_24318 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24318)){
var statearr_24353_27481 = state_24336__$1;
(statearr_24353_27481[(1)] = (8));

} else {
var statearr_24355_27482 = state_24336__$1;
(statearr_24355_27482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (3))){
var inst_24332 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24336__$1,inst_24332);
} else {
if((state_val_24339 === (12))){
var state_24336__$1 = state_24336;
var statearr_24360_27483 = state_24336__$1;
(statearr_24360_27483[(2)] = null);

(statearr_24360_27483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (2))){
var inst_24305 = (state_24336[(7)]);
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24305)){
var statearr_24362_27484 = state_24336__$1;
(statearr_24362_27484[(1)] = (4));

} else {
var statearr_24367_27485 = state_24336__$1;
(statearr_24367_27485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (11))){
var inst_24324 = cljs.core.async.close_BANG_(ch);
var state_24336__$1 = state_24336;
var statearr_24373_27486 = state_24336__$1;
(statearr_24373_27486[(2)] = inst_24324);

(statearr_24373_27486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (9))){
var state_24336__$1 = state_24336;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24374_27487 = state_24336__$1;
(statearr_24374_27487[(1)] = (11));

} else {
var statearr_24376_27489 = state_24336__$1;
(statearr_24376_27489[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (5))){
var inst_24305 = (state_24336[(7)]);
var state_24336__$1 = state_24336;
var statearr_24378_27490 = state_24336__$1;
(statearr_24378_27490[(2)] = inst_24305);

(statearr_24378_27490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (10))){
var inst_24329 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24382_27491 = state_24336__$1;
(statearr_24382_27491[(2)] = inst_24329);

(statearr_24382_27491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (8))){
var inst_24305 = (state_24336[(7)]);
var inst_24320 = cljs.core.next(inst_24305);
var inst_24305__$1 = inst_24320;
var state_24336__$1 = (function (){var statearr_24386 = state_24336;
(statearr_24386[(7)] = inst_24305__$1);

return statearr_24386;
})();
var statearr_24390_27492 = state_24336__$1;
(statearr_24390_27492[(2)] = null);

(statearr_24390_27492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_24392 = [null,null,null,null,null,null,null,null];
(statearr_24392[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_24392[(1)] = (1));

return statearr_24392;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_24336){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_24336);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e24395){var ex__21322__auto__ = e24395;
var statearr_24396_27493 = state_24336;
(statearr_24396_27493[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_24336[(4)]))){
var statearr_24397_27494 = state_24336;
(statearr_24397_27494[(1)] = cljs.core.first((state_24336[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27495 = state_24336;
state_24336 = G__27495;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_24336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_24336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_24398 = f__22677__auto__();
(statearr_24398[(6)] = c__22675__auto__);

return statearr_24398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));

return c__22675__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24408 = arguments.length;
switch (G__24408) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27499 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27499(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27505 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27505(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27506 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27506(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27507 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27507(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24575 = (function (ch,cs,meta24576){
this.ch = ch;
this.cs = cs;
this.meta24576 = meta24576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24577,meta24576__$1){
var self__ = this;
var _24577__$1 = this;
return (new cljs.core.async.t_cljs$core$async24575(self__.ch,self__.cs,meta24576__$1));
}));

(cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24577){
var self__ = this;
var _24577__$1 = this;
return self__.meta24576;
}));

(cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24576","meta24576",1453133591,null)], null);
}));

(cljs.core.async.t_cljs$core$async24575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24575");

(cljs.core.async.t_cljs$core$async24575.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24575.
 */
cljs.core.async.__GT_t_cljs$core$async24575 = (function cljs$core$async$__GT_t_cljs$core$async24575(ch,cs,meta24576){
return (new cljs.core.async.t_cljs$core$async24575(ch,cs,meta24576));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async24575(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__22675__auto___27519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_24749){
var state_val_24752 = (state_24749[(1)]);
if((state_val_24752 === (7))){
var inst_24741 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24753_27520 = state_24749__$1;
(statearr_24753_27520[(2)] = inst_24741);

(statearr_24753_27520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (20))){
var inst_24628 = (state_24749[(7)]);
var inst_24645 = cljs.core.first(inst_24628);
var inst_24649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24645,(0),null);
var inst_24650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24645,(1),null);
var state_24749__$1 = (function (){var statearr_24755 = state_24749;
(statearr_24755[(8)] = inst_24649);

return statearr_24755;
})();
if(cljs.core.truth_(inst_24650)){
var statearr_24756_27521 = state_24749__$1;
(statearr_24756_27521[(1)] = (22));

} else {
var statearr_24757_27522 = state_24749__$1;
(statearr_24757_27522[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (27))){
var inst_24683 = (state_24749[(9)]);
var inst_24681 = (state_24749[(10)]);
var inst_24597 = (state_24749[(11)]);
var inst_24692 = (state_24749[(12)]);
var inst_24692__$1 = cljs.core._nth(inst_24681,inst_24683);
var inst_24693 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24692__$1,inst_24597,done);
var state_24749__$1 = (function (){var statearr_24765 = state_24749;
(statearr_24765[(12)] = inst_24692__$1);

return statearr_24765;
})();
if(cljs.core.truth_(inst_24693)){
var statearr_24768_27524 = state_24749__$1;
(statearr_24768_27524[(1)] = (30));

} else {
var statearr_24769_27525 = state_24749__$1;
(statearr_24769_27525[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (1))){
var state_24749__$1 = state_24749;
var statearr_24772_27526 = state_24749__$1;
(statearr_24772_27526[(2)] = null);

(statearr_24772_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (24))){
var inst_24628 = (state_24749[(7)]);
var inst_24656 = (state_24749[(2)]);
var inst_24657 = cljs.core.next(inst_24628);
var inst_24606 = inst_24657;
var inst_24607 = null;
var inst_24608 = (0);
var inst_24609 = (0);
var state_24749__$1 = (function (){var statearr_24773 = state_24749;
(statearr_24773[(13)] = inst_24656);

(statearr_24773[(14)] = inst_24609);

(statearr_24773[(15)] = inst_24607);

(statearr_24773[(16)] = inst_24608);

(statearr_24773[(17)] = inst_24606);

return statearr_24773;
})();
var statearr_24774_27530 = state_24749__$1;
(statearr_24774_27530[(2)] = null);

(statearr_24774_27530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (39))){
var state_24749__$1 = state_24749;
var statearr_24779_27531 = state_24749__$1;
(statearr_24779_27531[(2)] = null);

(statearr_24779_27531[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (4))){
var inst_24597 = (state_24749[(11)]);
var inst_24597__$1 = (state_24749[(2)]);
var inst_24598 = (inst_24597__$1 == null);
var state_24749__$1 = (function (){var statearr_24784 = state_24749;
(statearr_24784[(11)] = inst_24597__$1);

return statearr_24784;
})();
if(cljs.core.truth_(inst_24598)){
var statearr_24785_27536 = state_24749__$1;
(statearr_24785_27536[(1)] = (5));

} else {
var statearr_24786_27537 = state_24749__$1;
(statearr_24786_27537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (15))){
var inst_24609 = (state_24749[(14)]);
var inst_24607 = (state_24749[(15)]);
var inst_24608 = (state_24749[(16)]);
var inst_24606 = (state_24749[(17)]);
var inst_24624 = (state_24749[(2)]);
var inst_24625 = (inst_24609 + (1));
var tmp24776 = inst_24607;
var tmp24777 = inst_24608;
var tmp24778 = inst_24606;
var inst_24606__$1 = tmp24778;
var inst_24607__$1 = tmp24776;
var inst_24608__$1 = tmp24777;
var inst_24609__$1 = inst_24625;
var state_24749__$1 = (function (){var statearr_24791 = state_24749;
(statearr_24791[(14)] = inst_24609__$1);

(statearr_24791[(18)] = inst_24624);

(statearr_24791[(15)] = inst_24607__$1);

(statearr_24791[(16)] = inst_24608__$1);

(statearr_24791[(17)] = inst_24606__$1);

return statearr_24791;
})();
var statearr_24792_27538 = state_24749__$1;
(statearr_24792_27538[(2)] = null);

(statearr_24792_27538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (21))){
var inst_24660 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24797_27539 = state_24749__$1;
(statearr_24797_27539[(2)] = inst_24660);

(statearr_24797_27539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (31))){
var inst_24692 = (state_24749[(12)]);
var inst_24696 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_24692);
var state_24749__$1 = state_24749;
var statearr_24799_27540 = state_24749__$1;
(statearr_24799_27540[(2)] = inst_24696);

(statearr_24799_27540[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (32))){
var inst_24683 = (state_24749[(9)]);
var inst_24681 = (state_24749[(10)]);
var inst_24682 = (state_24749[(19)]);
var inst_24680 = (state_24749[(20)]);
var inst_24698 = (state_24749[(2)]);
var inst_24699 = (inst_24683 + (1));
var tmp24793 = inst_24681;
var tmp24794 = inst_24682;
var tmp24795 = inst_24680;
var inst_24680__$1 = tmp24795;
var inst_24681__$1 = tmp24793;
var inst_24682__$1 = tmp24794;
var inst_24683__$1 = inst_24699;
var state_24749__$1 = (function (){var statearr_24800 = state_24749;
(statearr_24800[(9)] = inst_24683__$1);

(statearr_24800[(10)] = inst_24681__$1);

(statearr_24800[(19)] = inst_24682__$1);

(statearr_24800[(21)] = inst_24698);

(statearr_24800[(20)] = inst_24680__$1);

return statearr_24800;
})();
var statearr_24801_27544 = state_24749__$1;
(statearr_24801_27544[(2)] = null);

(statearr_24801_27544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (40))){
var inst_24711 = (state_24749[(22)]);
var inst_24715 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_24711);
var state_24749__$1 = state_24749;
var statearr_24803_27546 = state_24749__$1;
(statearr_24803_27546[(2)] = inst_24715);

(statearr_24803_27546[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (33))){
var inst_24702 = (state_24749[(23)]);
var inst_24704 = cljs.core.chunked_seq_QMARK_(inst_24702);
var state_24749__$1 = state_24749;
if(inst_24704){
var statearr_24804_27551 = state_24749__$1;
(statearr_24804_27551[(1)] = (36));

} else {
var statearr_24805_27552 = state_24749__$1;
(statearr_24805_27552[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (13))){
var inst_24618 = (state_24749[(24)]);
var inst_24621 = cljs.core.async.close_BANG_(inst_24618);
var state_24749__$1 = state_24749;
var statearr_24806_27555 = state_24749__$1;
(statearr_24806_27555[(2)] = inst_24621);

(statearr_24806_27555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (22))){
var inst_24649 = (state_24749[(8)]);
var inst_24652 = cljs.core.async.close_BANG_(inst_24649);
var state_24749__$1 = state_24749;
var statearr_24807_27556 = state_24749__$1;
(statearr_24807_27556[(2)] = inst_24652);

(statearr_24807_27556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (36))){
var inst_24702 = (state_24749[(23)]);
var inst_24706 = cljs.core.chunk_first(inst_24702);
var inst_24707 = cljs.core.chunk_rest(inst_24702);
var inst_24708 = cljs.core.count(inst_24706);
var inst_24680 = inst_24707;
var inst_24681 = inst_24706;
var inst_24682 = inst_24708;
var inst_24683 = (0);
var state_24749__$1 = (function (){var statearr_24811 = state_24749;
(statearr_24811[(9)] = inst_24683);

(statearr_24811[(10)] = inst_24681);

(statearr_24811[(19)] = inst_24682);

(statearr_24811[(20)] = inst_24680);

return statearr_24811;
})();
var statearr_24812_27557 = state_24749__$1;
(statearr_24812_27557[(2)] = null);

(statearr_24812_27557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (41))){
var inst_24702 = (state_24749[(23)]);
var inst_24717 = (state_24749[(2)]);
var inst_24718 = cljs.core.next(inst_24702);
var inst_24680 = inst_24718;
var inst_24681 = null;
var inst_24682 = (0);
var inst_24683 = (0);
var state_24749__$1 = (function (){var statearr_24814 = state_24749;
(statearr_24814[(9)] = inst_24683);

(statearr_24814[(10)] = inst_24681);

(statearr_24814[(19)] = inst_24682);

(statearr_24814[(25)] = inst_24717);

(statearr_24814[(20)] = inst_24680);

return statearr_24814;
})();
var statearr_24815_27558 = state_24749__$1;
(statearr_24815_27558[(2)] = null);

(statearr_24815_27558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (43))){
var state_24749__$1 = state_24749;
var statearr_24818_27559 = state_24749__$1;
(statearr_24818_27559[(2)] = null);

(statearr_24818_27559[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (29))){
var inst_24729 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24820_27560 = state_24749__$1;
(statearr_24820_27560[(2)] = inst_24729);

(statearr_24820_27560[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (44))){
var inst_24738 = (state_24749[(2)]);
var state_24749__$1 = (function (){var statearr_24824 = state_24749;
(statearr_24824[(26)] = inst_24738);

return statearr_24824;
})();
var statearr_24828_27561 = state_24749__$1;
(statearr_24828_27561[(2)] = null);

(statearr_24828_27561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (6))){
var inst_24671 = (state_24749[(27)]);
var inst_24670 = cljs.core.deref(cs);
var inst_24671__$1 = cljs.core.keys(inst_24670);
var inst_24672 = cljs.core.count(inst_24671__$1);
var inst_24673 = cljs.core.reset_BANG_(dctr,inst_24672);
var inst_24679 = cljs.core.seq(inst_24671__$1);
var inst_24680 = inst_24679;
var inst_24681 = null;
var inst_24682 = (0);
var inst_24683 = (0);
var state_24749__$1 = (function (){var statearr_24833 = state_24749;
(statearr_24833[(9)] = inst_24683);

(statearr_24833[(10)] = inst_24681);

(statearr_24833[(19)] = inst_24682);

(statearr_24833[(27)] = inst_24671__$1);

(statearr_24833[(28)] = inst_24673);

(statearr_24833[(20)] = inst_24680);

return statearr_24833;
})();
var statearr_24834_27562 = state_24749__$1;
(statearr_24834_27562[(2)] = null);

(statearr_24834_27562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (28))){
var inst_24702 = (state_24749[(23)]);
var inst_24680 = (state_24749[(20)]);
var inst_24702__$1 = cljs.core.seq(inst_24680);
var state_24749__$1 = (function (){var statearr_24839 = state_24749;
(statearr_24839[(23)] = inst_24702__$1);

return statearr_24839;
})();
if(inst_24702__$1){
var statearr_24844_27563 = state_24749__$1;
(statearr_24844_27563[(1)] = (33));

} else {
var statearr_24845_27564 = state_24749__$1;
(statearr_24845_27564[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (25))){
var inst_24683 = (state_24749[(9)]);
var inst_24682 = (state_24749[(19)]);
var inst_24689 = (inst_24683 < inst_24682);
var inst_24690 = inst_24689;
var state_24749__$1 = state_24749;
if(cljs.core.truth_(inst_24690)){
var statearr_24850_27565 = state_24749__$1;
(statearr_24850_27565[(1)] = (27));

} else {
var statearr_24851_27566 = state_24749__$1;
(statearr_24851_27566[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (34))){
var state_24749__$1 = state_24749;
var statearr_24852_27567 = state_24749__$1;
(statearr_24852_27567[(2)] = null);

(statearr_24852_27567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (17))){
var state_24749__$1 = state_24749;
var statearr_24853_27568 = state_24749__$1;
(statearr_24853_27568[(2)] = null);

(statearr_24853_27568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (3))){
var inst_24743 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24749__$1,inst_24743);
} else {
if((state_val_24752 === (12))){
var inst_24666 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24856_27569 = state_24749__$1;
(statearr_24856_27569[(2)] = inst_24666);

(statearr_24856_27569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (2))){
var state_24749__$1 = state_24749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24749__$1,(4),ch);
} else {
if((state_val_24752 === (23))){
var state_24749__$1 = state_24749;
var statearr_24857_27570 = state_24749__$1;
(statearr_24857_27570[(2)] = null);

(statearr_24857_27570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (35))){
var inst_24727 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24859_27571 = state_24749__$1;
(statearr_24859_27571[(2)] = inst_24727);

(statearr_24859_27571[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (19))){
var inst_24628 = (state_24749[(7)]);
var inst_24637 = cljs.core.chunk_first(inst_24628);
var inst_24638 = cljs.core.chunk_rest(inst_24628);
var inst_24639 = cljs.core.count(inst_24637);
var inst_24606 = inst_24638;
var inst_24607 = inst_24637;
var inst_24608 = inst_24639;
var inst_24609 = (0);
var state_24749__$1 = (function (){var statearr_24860 = state_24749;
(statearr_24860[(14)] = inst_24609);

(statearr_24860[(15)] = inst_24607);

(statearr_24860[(16)] = inst_24608);

(statearr_24860[(17)] = inst_24606);

return statearr_24860;
})();
var statearr_24861_27572 = state_24749__$1;
(statearr_24861_27572[(2)] = null);

(statearr_24861_27572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (11))){
var inst_24628 = (state_24749[(7)]);
var inst_24606 = (state_24749[(17)]);
var inst_24628__$1 = cljs.core.seq(inst_24606);
var state_24749__$1 = (function (){var statearr_24862 = state_24749;
(statearr_24862[(7)] = inst_24628__$1);

return statearr_24862;
})();
if(inst_24628__$1){
var statearr_24863_27573 = state_24749__$1;
(statearr_24863_27573[(1)] = (16));

} else {
var statearr_24864_27574 = state_24749__$1;
(statearr_24864_27574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (9))){
var inst_24668 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24866_27575 = state_24749__$1;
(statearr_24866_27575[(2)] = inst_24668);

(statearr_24866_27575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (5))){
var inst_24604 = cljs.core.deref(cs);
var inst_24605 = cljs.core.seq(inst_24604);
var inst_24606 = inst_24605;
var inst_24607 = null;
var inst_24608 = (0);
var inst_24609 = (0);
var state_24749__$1 = (function (){var statearr_24873 = state_24749;
(statearr_24873[(14)] = inst_24609);

(statearr_24873[(15)] = inst_24607);

(statearr_24873[(16)] = inst_24608);

(statearr_24873[(17)] = inst_24606);

return statearr_24873;
})();
var statearr_24877_27576 = state_24749__$1;
(statearr_24877_27576[(2)] = null);

(statearr_24877_27576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (14))){
var state_24749__$1 = state_24749;
var statearr_24888_27577 = state_24749__$1;
(statearr_24888_27577[(2)] = null);

(statearr_24888_27577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (45))){
var inst_24735 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24896_27578 = state_24749__$1;
(statearr_24896_27578[(2)] = inst_24735);

(statearr_24896_27578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (26))){
var inst_24671 = (state_24749[(27)]);
var inst_24731 = (state_24749[(2)]);
var inst_24732 = cljs.core.seq(inst_24671);
var state_24749__$1 = (function (){var statearr_24897 = state_24749;
(statearr_24897[(29)] = inst_24731);

return statearr_24897;
})();
if(inst_24732){
var statearr_24904_27589 = state_24749__$1;
(statearr_24904_27589[(1)] = (42));

} else {
var statearr_24905_27590 = state_24749__$1;
(statearr_24905_27590[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (16))){
var inst_24628 = (state_24749[(7)]);
var inst_24635 = cljs.core.chunked_seq_QMARK_(inst_24628);
var state_24749__$1 = state_24749;
if(inst_24635){
var statearr_24911_27591 = state_24749__$1;
(statearr_24911_27591[(1)] = (19));

} else {
var statearr_24916_27592 = state_24749__$1;
(statearr_24916_27592[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (38))){
var inst_24724 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24919_27593 = state_24749__$1;
(statearr_24919_27593[(2)] = inst_24724);

(statearr_24919_27593[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (30))){
var state_24749__$1 = state_24749;
var statearr_24920_27594 = state_24749__$1;
(statearr_24920_27594[(2)] = null);

(statearr_24920_27594[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (10))){
var inst_24609 = (state_24749[(14)]);
var inst_24607 = (state_24749[(15)]);
var inst_24617 = cljs.core._nth(inst_24607,inst_24609);
var inst_24618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24617,(0),null);
var inst_24619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24617,(1),null);
var state_24749__$1 = (function (){var statearr_24929 = state_24749;
(statearr_24929[(24)] = inst_24618);

return statearr_24929;
})();
if(cljs.core.truth_(inst_24619)){
var statearr_24940_27595 = state_24749__$1;
(statearr_24940_27595[(1)] = (13));

} else {
var statearr_24942_27596 = state_24749__$1;
(statearr_24942_27596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (18))){
var inst_24664 = (state_24749[(2)]);
var state_24749__$1 = state_24749;
var statearr_24943_27601 = state_24749__$1;
(statearr_24943_27601[(2)] = inst_24664);

(statearr_24943_27601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (42))){
var state_24749__$1 = state_24749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24749__$1,(45),dchan);
} else {
if((state_val_24752 === (37))){
var inst_24711 = (state_24749[(22)]);
var inst_24702 = (state_24749[(23)]);
var inst_24597 = (state_24749[(11)]);
var inst_24711__$1 = cljs.core.first(inst_24702);
var inst_24712 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24711__$1,inst_24597,done);
var state_24749__$1 = (function (){var statearr_24955 = state_24749;
(statearr_24955[(22)] = inst_24711__$1);

return statearr_24955;
})();
if(cljs.core.truth_(inst_24712)){
var statearr_24956_27603 = state_24749__$1;
(statearr_24956_27603[(1)] = (39));

} else {
var statearr_24957_27604 = state_24749__$1;
(statearr_24957_27604[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (8))){
var inst_24609 = (state_24749[(14)]);
var inst_24608 = (state_24749[(16)]);
var inst_24611 = (inst_24609 < inst_24608);
var inst_24612 = inst_24611;
var state_24749__$1 = state_24749;
if(cljs.core.truth_(inst_24612)){
var statearr_24962_27605 = state_24749__$1;
(statearr_24962_27605[(1)] = (10));

} else {
var statearr_24963_27606 = state_24749__$1;
(statearr_24963_27606[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__21319__auto__ = null;
var cljs$core$async$mult_$_state_machine__21319__auto____0 = (function (){
var statearr_24971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24971[(0)] = cljs$core$async$mult_$_state_machine__21319__auto__);

(statearr_24971[(1)] = (1));

return statearr_24971;
});
var cljs$core$async$mult_$_state_machine__21319__auto____1 = (function (state_24749){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_24749);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e24973){var ex__21322__auto__ = e24973;
var statearr_24976_27608 = state_24749;
(statearr_24976_27608[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_24749[(4)]))){
var statearr_24978_27609 = state_24749;
(statearr_24978_27609[(1)] = cljs.core.first((state_24749[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27611 = state_24749;
state_24749 = G__27611;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21319__auto__ = function(state_24749){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21319__auto____1.call(this,state_24749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21319__auto____0;
cljs$core$async$mult_$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21319__auto____1;
return cljs$core$async$mult_$_state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_24981 = f__22677__auto__();
(statearr_24981[(6)] = c__22675__auto___27519);

return statearr_24981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24988 = arguments.length;
switch (G__24988) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_27617 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_27617(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27618 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_27618(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27619 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27619(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27621 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_27621(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27622 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27622(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27623 = arguments.length;
var i__5727__auto___27624 = (0);
while(true){
if((i__5727__auto___27624 < len__5726__auto___27623)){
args__5732__auto__.push((arguments[i__5727__auto___27624]));

var G__27625 = (i__5727__auto___27624 + (1));
i__5727__auto___27624 = G__27625;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25016){
var map__25017 = p__25016;
var map__25017__$1 = cljs.core.__destructure_map(map__25017);
var opts = map__25017__$1;
var statearr_25018_27626 = state;
(statearr_25018_27626[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_25019_27627 = state;
(statearr_25019_27627[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_25028_27628 = state;
(statearr_25028_27628[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25010){
var G__25011 = cljs.core.first(seq25010);
var seq25010__$1 = cljs.core.next(seq25010);
var G__25012 = cljs.core.first(seq25010__$1);
var seq25010__$2 = cljs.core.next(seq25010__$1);
var G__25013 = cljs.core.first(seq25010__$2);
var seq25010__$3 = cljs.core.next(seq25010__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25011,G__25012,G__25013,seq25010__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25046 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25047){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25047 = meta25047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25048,meta25047__$1){
var self__ = this;
var _25048__$1 = this;
return (new cljs.core.async.t_cljs$core$async25046(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25047__$1));
}));

(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25048){
var self__ = this;
var _25048__$1 = this;
return self__.meta25047;
}));

(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async25046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25047","meta25047",-1355935652,null)], null);
}));

(cljs.core.async.t_cljs$core$async25046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25046");

(cljs.core.async.t_cljs$core$async25046.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async25046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25046.
 */
cljs.core.async.__GT_t_cljs$core$async25046 = (function cljs$core$async$__GT_t_cljs$core$async25046(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25047){
return (new cljs.core.async.t_cljs$core$async25046(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25047));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async25046(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__22675__auto___27634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_25163){
var state_val_25164 = (state_25163[(1)]);
if((state_val_25164 === (7))){
var inst_25111 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
if(cljs.core.truth_(inst_25111)){
var statearr_25171_27635 = state_25163__$1;
(statearr_25171_27635[(1)] = (8));

} else {
var statearr_25174_27636 = state_25163__$1;
(statearr_25174_27636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (20))){
var inst_25104 = (state_25163[(7)]);
var state_25163__$1 = state_25163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25163__$1,(23),out,inst_25104);
} else {
if((state_val_25164 === (1))){
var inst_25086 = calc_state();
var inst_25088 = cljs.core.__destructure_map(inst_25086);
var inst_25089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25088,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25088,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25088,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25092 = inst_25086;
var state_25163__$1 = (function (){var statearr_25177 = state_25163;
(statearr_25177[(8)] = inst_25092);

(statearr_25177[(9)] = inst_25091);

(statearr_25177[(10)] = inst_25090);

(statearr_25177[(11)] = inst_25089);

return statearr_25177;
})();
var statearr_25179_27637 = state_25163__$1;
(statearr_25179_27637[(2)] = null);

(statearr_25179_27637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (24))){
var inst_25095 = (state_25163[(12)]);
var inst_25092 = inst_25095;
var state_25163__$1 = (function (){var statearr_25180 = state_25163;
(statearr_25180[(8)] = inst_25092);

return statearr_25180;
})();
var statearr_25181_27638 = state_25163__$1;
(statearr_25181_27638[(2)] = null);

(statearr_25181_27638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (4))){
var inst_25104 = (state_25163[(7)]);
var inst_25106 = (state_25163[(13)]);
var inst_25103 = (state_25163[(2)]);
var inst_25104__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25103,(0),null);
var inst_25105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25103,(1),null);
var inst_25106__$1 = (inst_25104__$1 == null);
var state_25163__$1 = (function (){var statearr_25189 = state_25163;
(statearr_25189[(7)] = inst_25104__$1);

(statearr_25189[(13)] = inst_25106__$1);

(statearr_25189[(14)] = inst_25105);

return statearr_25189;
})();
if(cljs.core.truth_(inst_25106__$1)){
var statearr_25190_27639 = state_25163__$1;
(statearr_25190_27639[(1)] = (5));

} else {
var statearr_25194_27640 = state_25163__$1;
(statearr_25194_27640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (15))){
var inst_25127 = (state_25163[(15)]);
var inst_25096 = (state_25163[(16)]);
var inst_25127__$1 = cljs.core.empty_QMARK_(inst_25096);
var state_25163__$1 = (function (){var statearr_25199 = state_25163;
(statearr_25199[(15)] = inst_25127__$1);

return statearr_25199;
})();
if(inst_25127__$1){
var statearr_25201_27641 = state_25163__$1;
(statearr_25201_27641[(1)] = (17));

} else {
var statearr_25205_27642 = state_25163__$1;
(statearr_25205_27642[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (21))){
var inst_25095 = (state_25163[(12)]);
var inst_25092 = inst_25095;
var state_25163__$1 = (function (){var statearr_25206 = state_25163;
(statearr_25206[(8)] = inst_25092);

return statearr_25206;
})();
var statearr_25207_27646 = state_25163__$1;
(statearr_25207_27646[(2)] = null);

(statearr_25207_27646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (13))){
var inst_25118 = (state_25163[(2)]);
var inst_25119 = calc_state();
var inst_25092 = inst_25119;
var state_25163__$1 = (function (){var statearr_25211 = state_25163;
(statearr_25211[(8)] = inst_25092);

(statearr_25211[(17)] = inst_25118);

return statearr_25211;
})();
var statearr_25216_27653 = state_25163__$1;
(statearr_25216_27653[(2)] = null);

(statearr_25216_27653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (22))){
var inst_25150 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
var statearr_25217_27654 = state_25163__$1;
(statearr_25217_27654[(2)] = inst_25150);

(statearr_25217_27654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (6))){
var inst_25105 = (state_25163[(14)]);
var inst_25109 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25105,change);
var state_25163__$1 = state_25163;
var statearr_25220_27655 = state_25163__$1;
(statearr_25220_27655[(2)] = inst_25109);

(statearr_25220_27655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (25))){
var state_25163__$1 = state_25163;
var statearr_25226_27656 = state_25163__$1;
(statearr_25226_27656[(2)] = null);

(statearr_25226_27656[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (17))){
var inst_25097 = (state_25163[(18)]);
var inst_25105 = (state_25163[(14)]);
var inst_25129 = (inst_25097.cljs$core$IFn$_invoke$arity$1 ? inst_25097.cljs$core$IFn$_invoke$arity$1(inst_25105) : inst_25097.call(null, inst_25105));
var inst_25130 = cljs.core.not(inst_25129);
var state_25163__$1 = state_25163;
var statearr_25234_27657 = state_25163__$1;
(statearr_25234_27657[(2)] = inst_25130);

(statearr_25234_27657[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (3))){
var inst_25156 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25163__$1,inst_25156);
} else {
if((state_val_25164 === (12))){
var state_25163__$1 = state_25163;
var statearr_25239_27662 = state_25163__$1;
(statearr_25239_27662[(2)] = null);

(statearr_25239_27662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (2))){
var inst_25092 = (state_25163[(8)]);
var inst_25095 = (state_25163[(12)]);
var inst_25095__$1 = cljs.core.__destructure_map(inst_25092);
var inst_25096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25095__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25095__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25095__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25163__$1 = (function (){var statearr_25241 = state_25163;
(statearr_25241[(18)] = inst_25097);

(statearr_25241[(12)] = inst_25095__$1);

(statearr_25241[(16)] = inst_25096);

return statearr_25241;
})();
return cljs.core.async.ioc_alts_BANG_(state_25163__$1,(4),inst_25098);
} else {
if((state_val_25164 === (23))){
var inst_25139 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
if(cljs.core.truth_(inst_25139)){
var statearr_25250_27663 = state_25163__$1;
(statearr_25250_27663[(1)] = (24));

} else {
var statearr_25251_27664 = state_25163__$1;
(statearr_25251_27664[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (19))){
var inst_25133 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
var statearr_25255_27665 = state_25163__$1;
(statearr_25255_27665[(2)] = inst_25133);

(statearr_25255_27665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (11))){
var inst_25105 = (state_25163[(14)]);
var inst_25115 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25105);
var state_25163__$1 = state_25163;
var statearr_25256_27666 = state_25163__$1;
(statearr_25256_27666[(2)] = inst_25115);

(statearr_25256_27666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (9))){
var inst_25124 = (state_25163[(19)]);
var inst_25105 = (state_25163[(14)]);
var inst_25096 = (state_25163[(16)]);
var inst_25124__$1 = (inst_25096.cljs$core$IFn$_invoke$arity$1 ? inst_25096.cljs$core$IFn$_invoke$arity$1(inst_25105) : inst_25096.call(null, inst_25105));
var state_25163__$1 = (function (){var statearr_25258 = state_25163;
(statearr_25258[(19)] = inst_25124__$1);

return statearr_25258;
})();
if(cljs.core.truth_(inst_25124__$1)){
var statearr_25259_27670 = state_25163__$1;
(statearr_25259_27670[(1)] = (14));

} else {
var statearr_25263_27671 = state_25163__$1;
(statearr_25263_27671[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (5))){
var inst_25106 = (state_25163[(13)]);
var state_25163__$1 = state_25163;
var statearr_25264_27672 = state_25163__$1;
(statearr_25264_27672[(2)] = inst_25106);

(statearr_25264_27672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (14))){
var inst_25124 = (state_25163[(19)]);
var state_25163__$1 = state_25163;
var statearr_25269_27673 = state_25163__$1;
(statearr_25269_27673[(2)] = inst_25124);

(statearr_25269_27673[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (26))){
var inst_25146 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
var statearr_25275_27674 = state_25163__$1;
(statearr_25275_27674[(2)] = inst_25146);

(statearr_25275_27674[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (16))){
var inst_25135 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
if(cljs.core.truth_(inst_25135)){
var statearr_25279_27675 = state_25163__$1;
(statearr_25279_27675[(1)] = (20));

} else {
var statearr_25284_27676 = state_25163__$1;
(statearr_25284_27676[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (10))){
var inst_25152 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
var statearr_25286_27677 = state_25163__$1;
(statearr_25286_27677[(2)] = inst_25152);

(statearr_25286_27677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (18))){
var inst_25127 = (state_25163[(15)]);
var state_25163__$1 = state_25163;
var statearr_25287_27678 = state_25163__$1;
(statearr_25287_27678[(2)] = inst_25127);

(statearr_25287_27678[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (8))){
var inst_25104 = (state_25163[(7)]);
var inst_25113 = (inst_25104 == null);
var state_25163__$1 = state_25163;
if(cljs.core.truth_(inst_25113)){
var statearr_25289_27679 = state_25163__$1;
(statearr_25289_27679[(1)] = (11));

} else {
var statearr_25290_27680 = state_25163__$1;
(statearr_25290_27680[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__21319__auto__ = null;
var cljs$core$async$mix_$_state_machine__21319__auto____0 = (function (){
var statearr_25294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25294[(0)] = cljs$core$async$mix_$_state_machine__21319__auto__);

(statearr_25294[(1)] = (1));

return statearr_25294;
});
var cljs$core$async$mix_$_state_machine__21319__auto____1 = (function (state_25163){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_25163);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e25295){var ex__21322__auto__ = e25295;
var statearr_25296_27681 = state_25163;
(statearr_25296_27681[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_25163[(4)]))){
var statearr_25298_27686 = state_25163;
(statearr_25298_27686[(1)] = cljs.core.first((state_25163[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27687 = state_25163;
state_25163 = G__27687;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21319__auto__ = function(state_25163){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21319__auto____1.call(this,state_25163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21319__auto____0;
cljs$core$async$mix_$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21319__auto____1;
return cljs$core$async$mix_$_state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_25299 = f__22677__auto__();
(statearr_25299[(6)] = c__22675__auto___27634);

return statearr_25299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27688 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27688(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27693 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27693(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27695 = (function() {
var G__27696 = null;
var G__27696__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__27696__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__27696 = function(p,v){
switch(arguments.length){
case 1:
return G__27696__1.call(this,p);
case 2:
return G__27696__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27696.cljs$core$IFn$_invoke$arity$1 = G__27696__1;
G__27696.cljs$core$IFn$_invoke$arity$2 = G__27696__2;
return G__27696;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25380 = arguments.length;
switch (G__25380) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27695(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27695(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25422 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25423){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25423 = meta25423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25424,meta25423__$1){
var self__ = this;
var _25424__$1 = this;
return (new cljs.core.async.t_cljs$core$async25422(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25423__$1));
}));

(cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25424){
var self__ = this;
var _25424__$1 = this;
return self__.meta25423;
}));

(cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25423","meta25423",1015690450,null)], null);
}));

(cljs.core.async.t_cljs$core$async25422.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25422");

(cljs.core.async.t_cljs$core$async25422.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async25422");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25422.
 */
cljs.core.async.__GT_t_cljs$core$async25422 = (function cljs$core$async$__GT_t_cljs$core$async25422(ch,topic_fn,buf_fn,mults,ensure_mult,meta25423){
return (new cljs.core.async.t_cljs$core$async25422(ch,topic_fn,buf_fn,mults,ensure_mult,meta25423));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25408 = arguments.length;
switch (G__25408) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__25401_SHARP_){
if(cljs.core.truth_((p1__25401_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25401_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25401_SHARP_.call(null, topic)))){
return p1__25401_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25401_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async25422(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__22675__auto___27707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_25585){
var state_val_25586 = (state_25585[(1)]);
if((state_val_25586 === (7))){
var inst_25563 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
var statearr_25591_27712 = state_25585__$1;
(statearr_25591_27712[(2)] = inst_25563);

(statearr_25591_27712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (20))){
var state_25585__$1 = state_25585;
var statearr_25592_27713 = state_25585__$1;
(statearr_25592_27713[(2)] = null);

(statearr_25592_27713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (1))){
var state_25585__$1 = state_25585;
var statearr_25593_27714 = state_25585__$1;
(statearr_25593_27714[(2)] = null);

(statearr_25593_27714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (24))){
var inst_25537 = (state_25585[(7)]);
var inst_25554 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25537);
var state_25585__$1 = state_25585;
var statearr_25595_27715 = state_25585__$1;
(statearr_25595_27715[(2)] = inst_25554);

(statearr_25595_27715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (4))){
var inst_25472 = (state_25585[(8)]);
var inst_25472__$1 = (state_25585[(2)]);
var inst_25473 = (inst_25472__$1 == null);
var state_25585__$1 = (function (){var statearr_25599 = state_25585;
(statearr_25599[(8)] = inst_25472__$1);

return statearr_25599;
})();
if(cljs.core.truth_(inst_25473)){
var statearr_25600_27716 = state_25585__$1;
(statearr_25600_27716[(1)] = (5));

} else {
var statearr_25601_27717 = state_25585__$1;
(statearr_25601_27717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (15))){
var inst_25529 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
var statearr_25602_27718 = state_25585__$1;
(statearr_25602_27718[(2)] = inst_25529);

(statearr_25602_27718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (21))){
var inst_25559 = (state_25585[(2)]);
var state_25585__$1 = (function (){var statearr_25611 = state_25585;
(statearr_25611[(9)] = inst_25559);

return statearr_25611;
})();
var statearr_25618_27719 = state_25585__$1;
(statearr_25618_27719[(2)] = null);

(statearr_25618_27719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (13))){
var inst_25499 = (state_25585[(10)]);
var inst_25510 = cljs.core.chunked_seq_QMARK_(inst_25499);
var state_25585__$1 = state_25585;
if(inst_25510){
var statearr_25619_27720 = state_25585__$1;
(statearr_25619_27720[(1)] = (16));

} else {
var statearr_25621_27721 = state_25585__$1;
(statearr_25621_27721[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (22))){
var inst_25550 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
if(cljs.core.truth_(inst_25550)){
var statearr_25624_27722 = state_25585__$1;
(statearr_25624_27722[(1)] = (23));

} else {
var statearr_25626_27723 = state_25585__$1;
(statearr_25626_27723[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (6))){
var inst_25537 = (state_25585[(7)]);
var inst_25539 = (state_25585[(11)]);
var inst_25472 = (state_25585[(8)]);
var inst_25537__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25472) : topic_fn.call(null, inst_25472));
var inst_25538 = cljs.core.deref(mults);
var inst_25539__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25538,inst_25537__$1);
var state_25585__$1 = (function (){var statearr_25633 = state_25585;
(statearr_25633[(7)] = inst_25537__$1);

(statearr_25633[(11)] = inst_25539__$1);

return statearr_25633;
})();
if(cljs.core.truth_(inst_25539__$1)){
var statearr_25635_27724 = state_25585__$1;
(statearr_25635_27724[(1)] = (19));

} else {
var statearr_25637_27725 = state_25585__$1;
(statearr_25637_27725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (25))){
var inst_25556 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
var statearr_25642_27726 = state_25585__$1;
(statearr_25642_27726[(2)] = inst_25556);

(statearr_25642_27726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (17))){
var inst_25499 = (state_25585[(10)]);
var inst_25517 = cljs.core.first(inst_25499);
var inst_25518 = cljs.core.async.muxch_STAR_(inst_25517);
var inst_25519 = cljs.core.async.close_BANG_(inst_25518);
var inst_25523 = cljs.core.next(inst_25499);
var inst_25482 = inst_25523;
var inst_25483 = null;
var inst_25484 = (0);
var inst_25485 = (0);
var state_25585__$1 = (function (){var statearr_25650 = state_25585;
(statearr_25650[(12)] = inst_25482);

(statearr_25650[(13)] = inst_25485);

(statearr_25650[(14)] = inst_25483);

(statearr_25650[(15)] = inst_25519);

(statearr_25650[(16)] = inst_25484);

return statearr_25650;
})();
var statearr_25651_27727 = state_25585__$1;
(statearr_25651_27727[(2)] = null);

(statearr_25651_27727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (3))){
var inst_25565 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25585__$1,inst_25565);
} else {
if((state_val_25586 === (12))){
var inst_25531 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
var statearr_25655_27728 = state_25585__$1;
(statearr_25655_27728[(2)] = inst_25531);

(statearr_25655_27728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (2))){
var state_25585__$1 = state_25585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25585__$1,(4),ch);
} else {
if((state_val_25586 === (23))){
var state_25585__$1 = state_25585;
var statearr_25659_27729 = state_25585__$1;
(statearr_25659_27729[(2)] = null);

(statearr_25659_27729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (19))){
var inst_25539 = (state_25585[(11)]);
var inst_25472 = (state_25585[(8)]);
var inst_25547 = cljs.core.async.muxch_STAR_(inst_25539);
var state_25585__$1 = state_25585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25585__$1,(22),inst_25547,inst_25472);
} else {
if((state_val_25586 === (11))){
var inst_25499 = (state_25585[(10)]);
var inst_25482 = (state_25585[(12)]);
var inst_25499__$1 = cljs.core.seq(inst_25482);
var state_25585__$1 = (function (){var statearr_25663 = state_25585;
(statearr_25663[(10)] = inst_25499__$1);

return statearr_25663;
})();
if(inst_25499__$1){
var statearr_25668_27733 = state_25585__$1;
(statearr_25668_27733[(1)] = (13));

} else {
var statearr_25675_27734 = state_25585__$1;
(statearr_25675_27734[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (9))){
var inst_25533 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
var statearr_25679_27735 = state_25585__$1;
(statearr_25679_27735[(2)] = inst_25533);

(statearr_25679_27735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (5))){
var inst_25479 = cljs.core.deref(mults);
var inst_25480 = cljs.core.vals(inst_25479);
var inst_25481 = cljs.core.seq(inst_25480);
var inst_25482 = inst_25481;
var inst_25483 = null;
var inst_25484 = (0);
var inst_25485 = (0);
var state_25585__$1 = (function (){var statearr_25684 = state_25585;
(statearr_25684[(12)] = inst_25482);

(statearr_25684[(13)] = inst_25485);

(statearr_25684[(14)] = inst_25483);

(statearr_25684[(16)] = inst_25484);

return statearr_25684;
})();
var statearr_25685_27736 = state_25585__$1;
(statearr_25685_27736[(2)] = null);

(statearr_25685_27736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (14))){
var state_25585__$1 = state_25585;
var statearr_25689_27737 = state_25585__$1;
(statearr_25689_27737[(2)] = null);

(statearr_25689_27737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (16))){
var inst_25499 = (state_25585[(10)]);
var inst_25512 = cljs.core.chunk_first(inst_25499);
var inst_25513 = cljs.core.chunk_rest(inst_25499);
var inst_25514 = cljs.core.count(inst_25512);
var inst_25482 = inst_25513;
var inst_25483 = inst_25512;
var inst_25484 = inst_25514;
var inst_25485 = (0);
var state_25585__$1 = (function (){var statearr_25699 = state_25585;
(statearr_25699[(12)] = inst_25482);

(statearr_25699[(13)] = inst_25485);

(statearr_25699[(14)] = inst_25483);

(statearr_25699[(16)] = inst_25484);

return statearr_25699;
})();
var statearr_25700_27738 = state_25585__$1;
(statearr_25700_27738[(2)] = null);

(statearr_25700_27738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (10))){
var inst_25482 = (state_25585[(12)]);
var inst_25485 = (state_25585[(13)]);
var inst_25483 = (state_25585[(14)]);
var inst_25484 = (state_25585[(16)]);
var inst_25490 = cljs.core._nth(inst_25483,inst_25485);
var inst_25491 = cljs.core.async.muxch_STAR_(inst_25490);
var inst_25492 = cljs.core.async.close_BANG_(inst_25491);
var inst_25496 = (inst_25485 + (1));
var tmp25686 = inst_25482;
var tmp25687 = inst_25483;
var tmp25688 = inst_25484;
var inst_25482__$1 = tmp25686;
var inst_25483__$1 = tmp25687;
var inst_25484__$1 = tmp25688;
var inst_25485__$1 = inst_25496;
var state_25585__$1 = (function (){var statearr_25705 = state_25585;
(statearr_25705[(12)] = inst_25482__$1);

(statearr_25705[(13)] = inst_25485__$1);

(statearr_25705[(14)] = inst_25483__$1);

(statearr_25705[(17)] = inst_25492);

(statearr_25705[(16)] = inst_25484__$1);

return statearr_25705;
})();
var statearr_25706_27739 = state_25585__$1;
(statearr_25706_27739[(2)] = null);

(statearr_25706_27739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (18))){
var inst_25526 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
var statearr_25708_27740 = state_25585__$1;
(statearr_25708_27740[(2)] = inst_25526);

(statearr_25708_27740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (8))){
var inst_25485 = (state_25585[(13)]);
var inst_25484 = (state_25585[(16)]);
var inst_25487 = (inst_25485 < inst_25484);
var inst_25488 = inst_25487;
var state_25585__$1 = state_25585;
if(cljs.core.truth_(inst_25488)){
var statearr_25715_27741 = state_25585__$1;
(statearr_25715_27741[(1)] = (10));

} else {
var statearr_25716_27742 = state_25585__$1;
(statearr_25716_27742[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_25720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25720[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_25720[(1)] = (1));

return statearr_25720;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_25585){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_25585);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e25721){var ex__21322__auto__ = e25721;
var statearr_25722_27747 = state_25585;
(statearr_25722_27747[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_25585[(4)]))){
var statearr_25726_27748 = state_25585;
(statearr_25726_27748[(1)] = cljs.core.first((state_25585[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27749 = state_25585;
state_25585 = G__27749;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_25585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_25585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_25729 = f__22677__auto__();
(statearr_25729[(6)] = c__22675__auto___27707);

return statearr_25729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25749 = arguments.length;
switch (G__25749) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25761 = arguments.length;
switch (G__25761) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25774 = arguments.length;
switch (G__25774) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__22675__auto___27761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_25867){
var state_val_25868 = (state_25867[(1)]);
if((state_val_25868 === (7))){
var state_25867__$1 = state_25867;
var statearr_25880_27762 = state_25867__$1;
(statearr_25880_27762[(2)] = null);

(statearr_25880_27762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (1))){
var state_25867__$1 = state_25867;
var statearr_25895_27763 = state_25867__$1;
(statearr_25895_27763[(2)] = null);

(statearr_25895_27763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (4))){
var inst_25812 = (state_25867[(7)]);
var inst_25815 = (state_25867[(8)]);
var inst_25817 = (inst_25815 < inst_25812);
var state_25867__$1 = state_25867;
if(cljs.core.truth_(inst_25817)){
var statearr_25921_27764 = state_25867__$1;
(statearr_25921_27764[(1)] = (6));

} else {
var statearr_25925_27765 = state_25867__$1;
(statearr_25925_27765[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (15))){
var inst_25850 = (state_25867[(9)]);
var inst_25856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25850);
var state_25867__$1 = state_25867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25867__$1,(17),out,inst_25856);
} else {
if((state_val_25868 === (13))){
var inst_25850 = (state_25867[(9)]);
var inst_25850__$1 = (state_25867[(2)]);
var inst_25852 = cljs.core.some(cljs.core.nil_QMARK_,inst_25850__$1);
var state_25867__$1 = (function (){var statearr_25935 = state_25867;
(statearr_25935[(9)] = inst_25850__$1);

return statearr_25935;
})();
if(cljs.core.truth_(inst_25852)){
var statearr_25936_27766 = state_25867__$1;
(statearr_25936_27766[(1)] = (14));

} else {
var statearr_25937_27767 = state_25867__$1;
(statearr_25937_27767[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (6))){
var state_25867__$1 = state_25867;
var statearr_25938_27768 = state_25867__$1;
(statearr_25938_27768[(2)] = null);

(statearr_25938_27768[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (17))){
var inst_25858 = (state_25867[(2)]);
var state_25867__$1 = (function (){var statearr_25957 = state_25867;
(statearr_25957[(10)] = inst_25858);

return statearr_25957;
})();
var statearr_25958_27769 = state_25867__$1;
(statearr_25958_27769[(2)] = null);

(statearr_25958_27769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (3))){
var inst_25864 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25867__$1,inst_25864);
} else {
if((state_val_25868 === (12))){
var _ = (function (){var statearr_25971 = state_25867;
(statearr_25971[(4)] = cljs.core.rest((state_25867[(4)])));

return statearr_25971;
})();
var state_25867__$1 = state_25867;
var ex25955 = (state_25867__$1[(2)]);
var statearr_25973_27770 = state_25867__$1;
(statearr_25973_27770[(5)] = ex25955);


if((ex25955 instanceof Object)){
var statearr_25989_27771 = state_25867__$1;
(statearr_25989_27771[(1)] = (11));

(statearr_25989_27771[(5)] = null);

} else {
throw ex25955;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (2))){
var inst_25811 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25812 = cnt;
var inst_25815 = (0);
var state_25867__$1 = (function (){var statearr_26003 = state_25867;
(statearr_26003[(11)] = inst_25811);

(statearr_26003[(7)] = inst_25812);

(statearr_26003[(8)] = inst_25815);

return statearr_26003;
})();
var statearr_26005_27772 = state_25867__$1;
(statearr_26005_27772[(2)] = null);

(statearr_26005_27772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (11))){
var inst_25827 = (state_25867[(2)]);
var inst_25828 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25867__$1 = (function (){var statearr_26006 = state_25867;
(statearr_26006[(12)] = inst_25827);

return statearr_26006;
})();
var statearr_26007_27773 = state_25867__$1;
(statearr_26007_27773[(2)] = inst_25828);

(statearr_26007_27773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (9))){
var inst_25815 = (state_25867[(8)]);
var _ = (function (){var statearr_26014 = state_25867;
(statearr_26014[(4)] = cljs.core.cons((12),(state_25867[(4)])));

return statearr_26014;
})();
var inst_25835 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25815) : chs__$1.call(null, inst_25815));
var inst_25836 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25815) : done.call(null, inst_25815));
var inst_25837 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25835,inst_25836);
var ___$1 = (function (){var statearr_26015 = state_25867;
(statearr_26015[(4)] = cljs.core.rest((state_25867[(4)])));

return statearr_26015;
})();
var state_25867__$1 = state_25867;
var statearr_26020_27774 = state_25867__$1;
(statearr_26020_27774[(2)] = inst_25837);

(statearr_26020_27774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (5))){
var inst_25848 = (state_25867[(2)]);
var state_25867__$1 = (function (){var statearr_26021 = state_25867;
(statearr_26021[(13)] = inst_25848);

return statearr_26021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25867__$1,(13),dchan);
} else {
if((state_val_25868 === (14))){
var inst_25854 = cljs.core.async.close_BANG_(out);
var state_25867__$1 = state_25867;
var statearr_26024_27775 = state_25867__$1;
(statearr_26024_27775[(2)] = inst_25854);

(statearr_26024_27775[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (16))){
var inst_25861 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
var statearr_26029_27780 = state_25867__$1;
(statearr_26029_27780[(2)] = inst_25861);

(statearr_26029_27780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (10))){
var inst_25815 = (state_25867[(8)]);
var inst_25840 = (state_25867[(2)]);
var inst_25842 = (inst_25815 + (1));
var inst_25815__$1 = inst_25842;
var state_25867__$1 = (function (){var statearr_26030 = state_25867;
(statearr_26030[(14)] = inst_25840);

(statearr_26030[(8)] = inst_25815__$1);

return statearr_26030;
})();
var statearr_26031_27781 = state_25867__$1;
(statearr_26031_27781[(2)] = null);

(statearr_26031_27781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (8))){
var inst_25846 = (state_25867[(2)]);
var state_25867__$1 = state_25867;
var statearr_26032_27782 = state_25867__$1;
(statearr_26032_27782[(2)] = inst_25846);

(statearr_26032_27782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_26036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26036[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_26036[(1)] = (1));

return statearr_26036;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_25867){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_25867);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e26042){var ex__21322__auto__ = e26042;
var statearr_26043_27786 = state_25867;
(statearr_26043_27786[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_25867[(4)]))){
var statearr_26045_27787 = state_25867;
(statearr_26045_27787[(1)] = cljs.core.first((state_25867[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27788 = state_25867;
state_25867 = G__27788;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_25867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_25867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_26057 = f__22677__auto__();
(statearr_26057[(6)] = c__22675__auto___27761);

return statearr_26057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26063 = arguments.length;
switch (G__26063) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22675__auto___27795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_26118){
var state_val_26119 = (state_26118[(1)]);
if((state_val_26119 === (7))){
var inst_26085 = (state_26118[(7)]);
var inst_26083 = (state_26118[(8)]);
var inst_26083__$1 = (state_26118[(2)]);
var inst_26085__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26083__$1,(0),null);
var inst_26086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26083__$1,(1),null);
var inst_26088 = (inst_26085__$1 == null);
var state_26118__$1 = (function (){var statearr_26128 = state_26118;
(statearr_26128[(7)] = inst_26085__$1);

(statearr_26128[(9)] = inst_26086);

(statearr_26128[(8)] = inst_26083__$1);

return statearr_26128;
})();
if(cljs.core.truth_(inst_26088)){
var statearr_26132_27796 = state_26118__$1;
(statearr_26132_27796[(1)] = (8));

} else {
var statearr_26133_27797 = state_26118__$1;
(statearr_26133_27797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (1))){
var inst_26068 = cljs.core.vec(chs);
var inst_26069 = inst_26068;
var state_26118__$1 = (function (){var statearr_26137 = state_26118;
(statearr_26137[(10)] = inst_26069);

return statearr_26137;
})();
var statearr_26138_27798 = state_26118__$1;
(statearr_26138_27798[(2)] = null);

(statearr_26138_27798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (4))){
var inst_26069 = (state_26118[(10)]);
var state_26118__$1 = state_26118;
return cljs.core.async.ioc_alts_BANG_(state_26118__$1,(7),inst_26069);
} else {
if((state_val_26119 === (6))){
var inst_26114 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
var statearr_26140_27799 = state_26118__$1;
(statearr_26140_27799[(2)] = inst_26114);

(statearr_26140_27799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (3))){
var inst_26116 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26118__$1,inst_26116);
} else {
if((state_val_26119 === (2))){
var inst_26069 = (state_26118[(10)]);
var inst_26076 = cljs.core.count(inst_26069);
var inst_26077 = (inst_26076 > (0));
var state_26118__$1 = state_26118;
if(cljs.core.truth_(inst_26077)){
var statearr_26146_27800 = state_26118__$1;
(statearr_26146_27800[(1)] = (4));

} else {
var statearr_26147_27801 = state_26118__$1;
(statearr_26147_27801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (11))){
var inst_26069 = (state_26118[(10)]);
var inst_26106 = (state_26118[(2)]);
var tmp26145 = inst_26069;
var inst_26069__$1 = tmp26145;
var state_26118__$1 = (function (){var statearr_26151 = state_26118;
(statearr_26151[(11)] = inst_26106);

(statearr_26151[(10)] = inst_26069__$1);

return statearr_26151;
})();
var statearr_26152_27802 = state_26118__$1;
(statearr_26152_27802[(2)] = null);

(statearr_26152_27802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (9))){
var inst_26085 = (state_26118[(7)]);
var state_26118__$1 = state_26118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26118__$1,(11),out,inst_26085);
} else {
if((state_val_26119 === (5))){
var inst_26112 = cljs.core.async.close_BANG_(out);
var state_26118__$1 = state_26118;
var statearr_26154_27805 = state_26118__$1;
(statearr_26154_27805[(2)] = inst_26112);

(statearr_26154_27805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (10))){
var inst_26109 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
var statearr_26155_27806 = state_26118__$1;
(statearr_26155_27806[(2)] = inst_26109);

(statearr_26155_27806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (8))){
var inst_26085 = (state_26118[(7)]);
var inst_26086 = (state_26118[(9)]);
var inst_26083 = (state_26118[(8)]);
var inst_26069 = (state_26118[(10)]);
var inst_26098 = (function (){var cs = inst_26069;
var vec__26079 = inst_26083;
var v = inst_26085;
var c = inst_26086;
return (function (p1__26059_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26059_SHARP_);
});
})();
var inst_26099 = cljs.core.filterv(inst_26098,inst_26069);
var inst_26069__$1 = inst_26099;
var state_26118__$1 = (function (){var statearr_26157 = state_26118;
(statearr_26157[(10)] = inst_26069__$1);

return statearr_26157;
})();
var statearr_26158_27809 = state_26118__$1;
(statearr_26158_27809[(2)] = null);

(statearr_26158_27809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_26159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26159[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_26159[(1)] = (1));

return statearr_26159;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_26118){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_26118);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e26163){var ex__21322__auto__ = e26163;
var statearr_26164_27810 = state_26118;
(statearr_26164_27810[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_26118[(4)]))){
var statearr_26165_27811 = state_26118;
(statearr_26165_27811[(1)] = cljs.core.first((state_26118[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27812 = state_26118;
state_26118 = G__27812;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_26118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_26118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_26166 = f__22677__auto__();
(statearr_26166[(6)] = c__22675__auto___27795);

return statearr_26166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26171 = arguments.length;
switch (G__26171) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22675__auto___27817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_26201){
var state_val_26202 = (state_26201[(1)]);
if((state_val_26202 === (7))){
var inst_26183 = (state_26201[(7)]);
var inst_26183__$1 = (state_26201[(2)]);
var inst_26184 = (inst_26183__$1 == null);
var inst_26185 = cljs.core.not(inst_26184);
var state_26201__$1 = (function (){var statearr_26207 = state_26201;
(statearr_26207[(7)] = inst_26183__$1);

return statearr_26207;
})();
if(inst_26185){
var statearr_26208_27823 = state_26201__$1;
(statearr_26208_27823[(1)] = (8));

} else {
var statearr_26211_27824 = state_26201__$1;
(statearr_26211_27824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26202 === (1))){
var inst_26178 = (0);
var state_26201__$1 = (function (){var statearr_26212 = state_26201;
(statearr_26212[(8)] = inst_26178);

return statearr_26212;
})();
var statearr_26213_27825 = state_26201__$1;
(statearr_26213_27825[(2)] = null);

(statearr_26213_27825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26202 === (4))){
var state_26201__$1 = state_26201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26201__$1,(7),ch);
} else {
if((state_val_26202 === (6))){
var inst_26196 = (state_26201[(2)]);
var state_26201__$1 = state_26201;
var statearr_26217_27827 = state_26201__$1;
(statearr_26217_27827[(2)] = inst_26196);

(statearr_26217_27827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26202 === (3))){
var inst_26198 = (state_26201[(2)]);
var inst_26199 = cljs.core.async.close_BANG_(out);
var state_26201__$1 = (function (){var statearr_26223 = state_26201;
(statearr_26223[(9)] = inst_26198);

return statearr_26223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26201__$1,inst_26199);
} else {
if((state_val_26202 === (2))){
var inst_26178 = (state_26201[(8)]);
var inst_26180 = (inst_26178 < n);
var state_26201__$1 = state_26201;
if(cljs.core.truth_(inst_26180)){
var statearr_26224_27828 = state_26201__$1;
(statearr_26224_27828[(1)] = (4));

} else {
var statearr_26225_27829 = state_26201__$1;
(statearr_26225_27829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26202 === (11))){
var inst_26178 = (state_26201[(8)]);
var inst_26188 = (state_26201[(2)]);
var inst_26189 = (inst_26178 + (1));
var inst_26178__$1 = inst_26189;
var state_26201__$1 = (function (){var statearr_26229 = state_26201;
(statearr_26229[(8)] = inst_26178__$1);

(statearr_26229[(10)] = inst_26188);

return statearr_26229;
})();
var statearr_26230_27830 = state_26201__$1;
(statearr_26230_27830[(2)] = null);

(statearr_26230_27830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26202 === (9))){
var state_26201__$1 = state_26201;
var statearr_26231_27831 = state_26201__$1;
(statearr_26231_27831[(2)] = null);

(statearr_26231_27831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26202 === (5))){
var state_26201__$1 = state_26201;
var statearr_26232_27832 = state_26201__$1;
(statearr_26232_27832[(2)] = null);

(statearr_26232_27832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26202 === (10))){
var inst_26193 = (state_26201[(2)]);
var state_26201__$1 = state_26201;
var statearr_26233_27837 = state_26201__$1;
(statearr_26233_27837[(2)] = inst_26193);

(statearr_26233_27837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26202 === (8))){
var inst_26183 = (state_26201[(7)]);
var state_26201__$1 = state_26201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26201__$1,(11),out,inst_26183);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_26246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26246[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_26246[(1)] = (1));

return statearr_26246;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_26201){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_26201);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e26247){var ex__21322__auto__ = e26247;
var statearr_26248_27845 = state_26201;
(statearr_26248_27845[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_26201[(4)]))){
var statearr_26249_27846 = state_26201;
(statearr_26249_27846[(1)] = cljs.core.first((state_26201[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27847 = state_26201;
state_26201 = G__27847;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_26201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_26201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_26251 = f__22677__auto__();
(statearr_26251[(6)] = c__22675__auto___27817);

return statearr_26251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26264 = (function (f,ch,meta26254,_,fn1,meta26265){
this.f = f;
this.ch = ch;
this.meta26254 = meta26254;
this._ = _;
this.fn1 = fn1;
this.meta26265 = meta26265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26266,meta26265__$1){
var self__ = this;
var _26266__$1 = this;
return (new cljs.core.async.t_cljs$core$async26264(self__.f,self__.ch,self__.meta26254,self__._,self__.fn1,meta26265__$1));
}));

(cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26266){
var self__ = this;
var _26266__$1 = this;
return self__.meta26265;
}));

(cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__26252_SHARP_){
var G__26274 = (((p1__26252_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26252_SHARP_) : self__.f.call(null, p1__26252_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26274) : f1.call(null, G__26274));
});
}));

(cljs.core.async.t_cljs$core$async26264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26254","meta26254",-666141533,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26253","cljs.core.async/t_cljs$core$async26253",-1867631607,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26265","meta26265",1756279605,null)], null);
}));

(cljs.core.async.t_cljs$core$async26264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26264");

(cljs.core.async.t_cljs$core$async26264.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async26264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26264.
 */
cljs.core.async.__GT_t_cljs$core$async26264 = (function cljs$core$async$__GT_t_cljs$core$async26264(f,ch,meta26254,_,fn1,meta26265){
return (new cljs.core.async.t_cljs$core$async26264(f,ch,meta26254,_,fn1,meta26265));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26253 = (function (f,ch,meta26254){
this.f = f;
this.ch = ch;
this.meta26254 = meta26254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26255,meta26254__$1){
var self__ = this;
var _26255__$1 = this;
return (new cljs.core.async.t_cljs$core$async26253(self__.f,self__.ch,meta26254__$1));
}));

(cljs.core.async.t_cljs$core$async26253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26255){
var self__ = this;
var _26255__$1 = this;
return self__.meta26254;
}));

(cljs.core.async.t_cljs$core$async26253.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26253.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26253.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async26264(self__.f,self__.ch,self__.meta26254,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26280 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26280) : self__.f.call(null, G__26280));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26253.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26254","meta26254",-666141533,null)], null);
}));

(cljs.core.async.t_cljs$core$async26253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26253");

(cljs.core.async.t_cljs$core$async26253.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async26253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26253.
 */
cljs.core.async.__GT_t_cljs$core$async26253 = (function cljs$core$async$__GT_t_cljs$core$async26253(f,ch,meta26254){
return (new cljs.core.async.t_cljs$core$async26253(f,ch,meta26254));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async26253(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26285 = (function (f,ch,meta26286){
this.f = f;
this.ch = ch;
this.meta26286 = meta26286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26287,meta26286__$1){
var self__ = this;
var _26287__$1 = this;
return (new cljs.core.async.t_cljs$core$async26285(self__.f,self__.ch,meta26286__$1));
}));

(cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26287){
var self__ = this;
var _26287__$1 = this;
return self__.meta26286;
}));

(cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async26285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26286","meta26286",835914526,null)], null);
}));

(cljs.core.async.t_cljs$core$async26285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26285");

(cljs.core.async.t_cljs$core$async26285.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async26285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26285.
 */
cljs.core.async.__GT_t_cljs$core$async26285 = (function cljs$core$async$__GT_t_cljs$core$async26285(f,ch,meta26286){
return (new cljs.core.async.t_cljs$core$async26285(f,ch,meta26286));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async26285(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26307 = (function (p,ch,meta26308){
this.p = p;
this.ch = ch;
this.meta26308 = meta26308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26309,meta26308__$1){
var self__ = this;
var _26309__$1 = this;
return (new cljs.core.async.t_cljs$core$async26307(self__.p,self__.ch,meta26308__$1));
}));

(cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26309){
var self__ = this;
var _26309__$1 = this;
return self__.meta26308;
}));

(cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26308","meta26308",560687436,null)], null);
}));

(cljs.core.async.t_cljs$core$async26307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26307");

(cljs.core.async.t_cljs$core$async26307.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async26307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26307.
 */
cljs.core.async.__GT_t_cljs$core$async26307 = (function cljs$core$async$__GT_t_cljs$core$async26307(p,ch,meta26308){
return (new cljs.core.async.t_cljs$core$async26307(p,ch,meta26308));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async26307(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26330 = arguments.length;
switch (G__26330) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22675__auto___27859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_26357){
var state_val_26358 = (state_26357[(1)]);
if((state_val_26358 === (7))){
var inst_26353 = (state_26357[(2)]);
var state_26357__$1 = state_26357;
var statearr_26360_27860 = state_26357__$1;
(statearr_26360_27860[(2)] = inst_26353);

(statearr_26360_27860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (1))){
var state_26357__$1 = state_26357;
var statearr_26361_27861 = state_26357__$1;
(statearr_26361_27861[(2)] = null);

(statearr_26361_27861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (4))){
var inst_26339 = (state_26357[(7)]);
var inst_26339__$1 = (state_26357[(2)]);
var inst_26340 = (inst_26339__$1 == null);
var state_26357__$1 = (function (){var statearr_26363 = state_26357;
(statearr_26363[(7)] = inst_26339__$1);

return statearr_26363;
})();
if(cljs.core.truth_(inst_26340)){
var statearr_26367_27862 = state_26357__$1;
(statearr_26367_27862[(1)] = (5));

} else {
var statearr_26371_27866 = state_26357__$1;
(statearr_26371_27866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (6))){
var inst_26339 = (state_26357[(7)]);
var inst_26344 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26339) : p.call(null, inst_26339));
var state_26357__$1 = state_26357;
if(cljs.core.truth_(inst_26344)){
var statearr_26372_27867 = state_26357__$1;
(statearr_26372_27867[(1)] = (8));

} else {
var statearr_26373_27868 = state_26357__$1;
(statearr_26373_27868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (3))){
var inst_26355 = (state_26357[(2)]);
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26357__$1,inst_26355);
} else {
if((state_val_26358 === (2))){
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26357__$1,(4),ch);
} else {
if((state_val_26358 === (11))){
var inst_26347 = (state_26357[(2)]);
var state_26357__$1 = state_26357;
var statearr_26375_27869 = state_26357__$1;
(statearr_26375_27869[(2)] = inst_26347);

(statearr_26375_27869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (9))){
var state_26357__$1 = state_26357;
var statearr_26376_27870 = state_26357__$1;
(statearr_26376_27870[(2)] = null);

(statearr_26376_27870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (5))){
var inst_26342 = cljs.core.async.close_BANG_(out);
var state_26357__$1 = state_26357;
var statearr_26380_27871 = state_26357__$1;
(statearr_26380_27871[(2)] = inst_26342);

(statearr_26380_27871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (10))){
var inst_26350 = (state_26357[(2)]);
var state_26357__$1 = (function (){var statearr_26384 = state_26357;
(statearr_26384[(8)] = inst_26350);

return statearr_26384;
})();
var statearr_26388_27872 = state_26357__$1;
(statearr_26388_27872[(2)] = null);

(statearr_26388_27872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (8))){
var inst_26339 = (state_26357[(7)]);
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26357__$1,(11),out,inst_26339);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_26389 = [null,null,null,null,null,null,null,null,null];
(statearr_26389[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_26389[(1)] = (1));

return statearr_26389;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_26357){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_26357);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e26392){var ex__21322__auto__ = e26392;
var statearr_26394_27873 = state_26357;
(statearr_26394_27873[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_26357[(4)]))){
var statearr_26395_27874 = state_26357;
(statearr_26395_27874[(1)] = cljs.core.first((state_26357[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27875 = state_26357;
state_26357 = G__27875;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_26357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_26357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_26396 = f__22677__auto__();
(statearr_26396[(6)] = c__22675__auto___27859);

return statearr_26396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26399 = arguments.length;
switch (G__26399) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_26492){
var state_val_26493 = (state_26492[(1)]);
if((state_val_26493 === (7))){
var inst_26488 = (state_26492[(2)]);
var state_26492__$1 = state_26492;
var statearr_26500_27878 = state_26492__$1;
(statearr_26500_27878[(2)] = inst_26488);

(statearr_26500_27878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (20))){
var inst_26447 = (state_26492[(7)]);
var inst_26468 = (state_26492[(2)]);
var inst_26469 = cljs.core.next(inst_26447);
var inst_26425 = inst_26469;
var inst_26426 = null;
var inst_26427 = (0);
var inst_26429 = (0);
var state_26492__$1 = (function (){var statearr_26504 = state_26492;
(statearr_26504[(8)] = inst_26426);

(statearr_26504[(9)] = inst_26468);

(statearr_26504[(10)] = inst_26427);

(statearr_26504[(11)] = inst_26425);

(statearr_26504[(12)] = inst_26429);

return statearr_26504;
})();
var statearr_26509_27883 = state_26492__$1;
(statearr_26509_27883[(2)] = null);

(statearr_26509_27883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (1))){
var state_26492__$1 = state_26492;
var statearr_26510_27884 = state_26492__$1;
(statearr_26510_27884[(2)] = null);

(statearr_26510_27884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (4))){
var inst_26414 = (state_26492[(13)]);
var inst_26414__$1 = (state_26492[(2)]);
var inst_26415 = (inst_26414__$1 == null);
var state_26492__$1 = (function (){var statearr_26515 = state_26492;
(statearr_26515[(13)] = inst_26414__$1);

return statearr_26515;
})();
if(cljs.core.truth_(inst_26415)){
var statearr_26516_27885 = state_26492__$1;
(statearr_26516_27885[(1)] = (5));

} else {
var statearr_26517_27886 = state_26492__$1;
(statearr_26517_27886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (15))){
var state_26492__$1 = state_26492;
var statearr_26529_27887 = state_26492__$1;
(statearr_26529_27887[(2)] = null);

(statearr_26529_27887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (21))){
var state_26492__$1 = state_26492;
var statearr_26530_27888 = state_26492__$1;
(statearr_26530_27888[(2)] = null);

(statearr_26530_27888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (13))){
var inst_26426 = (state_26492[(8)]);
var inst_26427 = (state_26492[(10)]);
var inst_26425 = (state_26492[(11)]);
var inst_26429 = (state_26492[(12)]);
var inst_26443 = (state_26492[(2)]);
var inst_26444 = (inst_26429 + (1));
var tmp26518 = inst_26426;
var tmp26519 = inst_26427;
var tmp26520 = inst_26425;
var inst_26425__$1 = tmp26520;
var inst_26426__$1 = tmp26518;
var inst_26427__$1 = tmp26519;
var inst_26429__$1 = inst_26444;
var state_26492__$1 = (function (){var statearr_26570 = state_26492;
(statearr_26570[(8)] = inst_26426__$1);

(statearr_26570[(14)] = inst_26443);

(statearr_26570[(10)] = inst_26427__$1);

(statearr_26570[(11)] = inst_26425__$1);

(statearr_26570[(12)] = inst_26429__$1);

return statearr_26570;
})();
var statearr_26572_27889 = state_26492__$1;
(statearr_26572_27889[(2)] = null);

(statearr_26572_27889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (22))){
var state_26492__$1 = state_26492;
var statearr_26582_27890 = state_26492__$1;
(statearr_26582_27890[(2)] = null);

(statearr_26582_27890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (6))){
var inst_26414 = (state_26492[(13)]);
var inst_26423 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26414) : f.call(null, inst_26414));
var inst_26424 = cljs.core.seq(inst_26423);
var inst_26425 = inst_26424;
var inst_26426 = null;
var inst_26427 = (0);
var inst_26429 = (0);
var state_26492__$1 = (function (){var statearr_26585 = state_26492;
(statearr_26585[(8)] = inst_26426);

(statearr_26585[(10)] = inst_26427);

(statearr_26585[(11)] = inst_26425);

(statearr_26585[(12)] = inst_26429);

return statearr_26585;
})();
var statearr_26586_27891 = state_26492__$1;
(statearr_26586_27891[(2)] = null);

(statearr_26586_27891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (17))){
var inst_26447 = (state_26492[(7)]);
var inst_26458 = cljs.core.chunk_first(inst_26447);
var inst_26461 = cljs.core.chunk_rest(inst_26447);
var inst_26462 = cljs.core.count(inst_26458);
var inst_26425 = inst_26461;
var inst_26426 = inst_26458;
var inst_26427 = inst_26462;
var inst_26429 = (0);
var state_26492__$1 = (function (){var statearr_26589 = state_26492;
(statearr_26589[(8)] = inst_26426);

(statearr_26589[(10)] = inst_26427);

(statearr_26589[(11)] = inst_26425);

(statearr_26589[(12)] = inst_26429);

return statearr_26589;
})();
var statearr_26590_27892 = state_26492__$1;
(statearr_26590_27892[(2)] = null);

(statearr_26590_27892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (3))){
var inst_26490 = (state_26492[(2)]);
var state_26492__$1 = state_26492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26492__$1,inst_26490);
} else {
if((state_val_26493 === (12))){
var inst_26478 = (state_26492[(2)]);
var state_26492__$1 = state_26492;
var statearr_26595_27893 = state_26492__$1;
(statearr_26595_27893[(2)] = inst_26478);

(statearr_26595_27893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (2))){
var state_26492__$1 = state_26492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26492__$1,(4),in$);
} else {
if((state_val_26493 === (23))){
var inst_26486 = (state_26492[(2)]);
var state_26492__$1 = state_26492;
var statearr_26596_27894 = state_26492__$1;
(statearr_26596_27894[(2)] = inst_26486);

(statearr_26596_27894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (19))){
var inst_26472 = (state_26492[(2)]);
var state_26492__$1 = state_26492;
var statearr_26597_27895 = state_26492__$1;
(statearr_26597_27895[(2)] = inst_26472);

(statearr_26597_27895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (11))){
var inst_26447 = (state_26492[(7)]);
var inst_26425 = (state_26492[(11)]);
var inst_26447__$1 = cljs.core.seq(inst_26425);
var state_26492__$1 = (function (){var statearr_26602 = state_26492;
(statearr_26602[(7)] = inst_26447__$1);

return statearr_26602;
})();
if(inst_26447__$1){
var statearr_26603_27896 = state_26492__$1;
(statearr_26603_27896[(1)] = (14));

} else {
var statearr_26604_27898 = state_26492__$1;
(statearr_26604_27898[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (9))){
var inst_26480 = (state_26492[(2)]);
var inst_26481 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26492__$1 = (function (){var statearr_26610 = state_26492;
(statearr_26610[(15)] = inst_26480);

return statearr_26610;
})();
if(cljs.core.truth_(inst_26481)){
var statearr_26612_27901 = state_26492__$1;
(statearr_26612_27901[(1)] = (21));

} else {
var statearr_26616_27902 = state_26492__$1;
(statearr_26616_27902[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (5))){
var inst_26417 = cljs.core.async.close_BANG_(out);
var state_26492__$1 = state_26492;
var statearr_26617_27903 = state_26492__$1;
(statearr_26617_27903[(2)] = inst_26417);

(statearr_26617_27903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (14))){
var inst_26447 = (state_26492[(7)]);
var inst_26454 = cljs.core.chunked_seq_QMARK_(inst_26447);
var state_26492__$1 = state_26492;
if(inst_26454){
var statearr_26618_27904 = state_26492__$1;
(statearr_26618_27904[(1)] = (17));

} else {
var statearr_26619_27905 = state_26492__$1;
(statearr_26619_27905[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (16))){
var inst_26475 = (state_26492[(2)]);
var state_26492__$1 = state_26492;
var statearr_26620_27907 = state_26492__$1;
(statearr_26620_27907[(2)] = inst_26475);

(statearr_26620_27907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26493 === (10))){
var inst_26426 = (state_26492[(8)]);
var inst_26429 = (state_26492[(12)]);
var inst_26441 = cljs.core._nth(inst_26426,inst_26429);
var state_26492__$1 = state_26492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26492__$1,(13),out,inst_26441);
} else {
if((state_val_26493 === (18))){
var inst_26447 = (state_26492[(7)]);
var inst_26466 = cljs.core.first(inst_26447);
var state_26492__$1 = state_26492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26492__$1,(20),out,inst_26466);
} else {
if((state_val_26493 === (8))){
var inst_26427 = (state_26492[(10)]);
var inst_26429 = (state_26492[(12)]);
var inst_26432 = (inst_26429 < inst_26427);
var inst_26433 = inst_26432;
var state_26492__$1 = state_26492;
if(cljs.core.truth_(inst_26433)){
var statearr_26623_27909 = state_26492__$1;
(statearr_26623_27909[(1)] = (10));

} else {
var statearr_26624_27910 = state_26492__$1;
(statearr_26624_27910[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21319__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21319__auto____0 = (function (){
var statearr_26625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26625[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21319__auto__);

(statearr_26625[(1)] = (1));

return statearr_26625;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21319__auto____1 = (function (state_26492){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_26492);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e26626){var ex__21322__auto__ = e26626;
var statearr_26627_27911 = state_26492;
(statearr_26627_27911[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_26492[(4)]))){
var statearr_26628_27912 = state_26492;
(statearr_26628_27912[(1)] = cljs.core.first((state_26492[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27913 = state_26492;
state_26492 = G__27913;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21319__auto__ = function(state_26492){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21319__auto____1.call(this,state_26492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21319__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21319__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_26629 = f__22677__auto__();
(statearr_26629[(6)] = c__22675__auto__);

return statearr_26629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));

return c__22675__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26631 = arguments.length;
switch (G__26631) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26645 = arguments.length;
switch (G__26645) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26662 = arguments.length;
switch (G__26662) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22675__auto___27923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_26700){
var state_val_26701 = (state_26700[(1)]);
if((state_val_26701 === (7))){
var inst_26691 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26707_27924 = state_26700__$1;
(statearr_26707_27924[(2)] = inst_26691);

(statearr_26707_27924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (1))){
var inst_26671 = null;
var state_26700__$1 = (function (){var statearr_26708 = state_26700;
(statearr_26708[(7)] = inst_26671);

return statearr_26708;
})();
var statearr_26709_27925 = state_26700__$1;
(statearr_26709_27925[(2)] = null);

(statearr_26709_27925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (4))){
var inst_26675 = (state_26700[(8)]);
var inst_26675__$1 = (state_26700[(2)]);
var inst_26676 = (inst_26675__$1 == null);
var inst_26677 = cljs.core.not(inst_26676);
var state_26700__$1 = (function (){var statearr_26727 = state_26700;
(statearr_26727[(8)] = inst_26675__$1);

return statearr_26727;
})();
if(inst_26677){
var statearr_26732_27926 = state_26700__$1;
(statearr_26732_27926[(1)] = (5));

} else {
var statearr_26733_27927 = state_26700__$1;
(statearr_26733_27927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (6))){
var state_26700__$1 = state_26700;
var statearr_26741_27928 = state_26700__$1;
(statearr_26741_27928[(2)] = null);

(statearr_26741_27928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (3))){
var inst_26693 = (state_26700[(2)]);
var inst_26694 = cljs.core.async.close_BANG_(out);
var state_26700__$1 = (function (){var statearr_26747 = state_26700;
(statearr_26747[(9)] = inst_26693);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26700__$1,inst_26694);
} else {
if((state_val_26701 === (2))){
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26700__$1,(4),ch);
} else {
if((state_val_26701 === (11))){
var inst_26675 = (state_26700[(8)]);
var inst_26685 = (state_26700[(2)]);
var inst_26671 = inst_26675;
var state_26700__$1 = (function (){var statearr_26786 = state_26700;
(statearr_26786[(7)] = inst_26671);

(statearr_26786[(10)] = inst_26685);

return statearr_26786;
})();
var statearr_26787_27929 = state_26700__$1;
(statearr_26787_27929[(2)] = null);

(statearr_26787_27929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (9))){
var inst_26675 = (state_26700[(8)]);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26700__$1,(11),out,inst_26675);
} else {
if((state_val_26701 === (5))){
var inst_26671 = (state_26700[(7)]);
var inst_26675 = (state_26700[(8)]);
var inst_26679 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26675,inst_26671);
var state_26700__$1 = state_26700;
if(inst_26679){
var statearr_26817_27934 = state_26700__$1;
(statearr_26817_27934[(1)] = (8));

} else {
var statearr_26821_27935 = state_26700__$1;
(statearr_26821_27935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (10))){
var inst_26688 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26830_27936 = state_26700__$1;
(statearr_26830_27936[(2)] = inst_26688);

(statearr_26830_27936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (8))){
var inst_26671 = (state_26700[(7)]);
var tmp26802 = inst_26671;
var inst_26671__$1 = tmp26802;
var state_26700__$1 = (function (){var statearr_26835 = state_26700;
(statearr_26835[(7)] = inst_26671__$1);

return statearr_26835;
})();
var statearr_26836_27937 = state_26700__$1;
(statearr_26836_27937[(2)] = null);

(statearr_26836_27937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_26838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26838[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_26838[(1)] = (1));

return statearr_26838;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_26700){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_26700);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e26844){var ex__21322__auto__ = e26844;
var statearr_26846_27938 = state_26700;
(statearr_26846_27938[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_26700[(4)]))){
var statearr_26850_27939 = state_26700;
(statearr_26850_27939[(1)] = cljs.core.first((state_26700[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27943 = state_26700;
state_26700 = G__27943;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_26700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_26700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_26855 = f__22677__auto__();
(statearr_26855[(6)] = c__22675__auto___27923);

return statearr_26855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26859 = arguments.length;
switch (G__26859) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22675__auto___27945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_26905){
var state_val_26906 = (state_26905[(1)]);
if((state_val_26906 === (7))){
var inst_26901 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
var statearr_26907_27946 = state_26905__$1;
(statearr_26907_27946[(2)] = inst_26901);

(statearr_26907_27946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (1))){
var inst_26861 = (new Array(n));
var inst_26862 = inst_26861;
var inst_26863 = (0);
var state_26905__$1 = (function (){var statearr_26912 = state_26905;
(statearr_26912[(7)] = inst_26863);

(statearr_26912[(8)] = inst_26862);

return statearr_26912;
})();
var statearr_26913_27951 = state_26905__$1;
(statearr_26913_27951[(2)] = null);

(statearr_26913_27951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (4))){
var inst_26868 = (state_26905[(9)]);
var inst_26868__$1 = (state_26905[(2)]);
var inst_26869 = (inst_26868__$1 == null);
var inst_26870 = cljs.core.not(inst_26869);
var state_26905__$1 = (function (){var statearr_26918 = state_26905;
(statearr_26918[(9)] = inst_26868__$1);

return statearr_26918;
})();
if(inst_26870){
var statearr_26921_27952 = state_26905__$1;
(statearr_26921_27952[(1)] = (5));

} else {
var statearr_26922_27953 = state_26905__$1;
(statearr_26922_27953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (15))){
var inst_26895 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
var statearr_26923_27954 = state_26905__$1;
(statearr_26923_27954[(2)] = inst_26895);

(statearr_26923_27954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (13))){
var state_26905__$1 = state_26905;
var statearr_26924_27955 = state_26905__$1;
(statearr_26924_27955[(2)] = null);

(statearr_26924_27955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (6))){
var inst_26863 = (state_26905[(7)]);
var inst_26891 = (inst_26863 > (0));
var state_26905__$1 = state_26905;
if(cljs.core.truth_(inst_26891)){
var statearr_26926_27956 = state_26905__$1;
(statearr_26926_27956[(1)] = (12));

} else {
var statearr_26930_27957 = state_26905__$1;
(statearr_26930_27957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (3))){
var inst_26903 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26905__$1,inst_26903);
} else {
if((state_val_26906 === (12))){
var inst_26862 = (state_26905[(8)]);
var inst_26893 = cljs.core.vec(inst_26862);
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26905__$1,(15),out,inst_26893);
} else {
if((state_val_26906 === (2))){
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26905__$1,(4),ch);
} else {
if((state_val_26906 === (11))){
var inst_26885 = (state_26905[(2)]);
var inst_26886 = (new Array(n));
var inst_26862 = inst_26886;
var inst_26863 = (0);
var state_26905__$1 = (function (){var statearr_26931 = state_26905;
(statearr_26931[(10)] = inst_26885);

(statearr_26931[(7)] = inst_26863);

(statearr_26931[(8)] = inst_26862);

return statearr_26931;
})();
var statearr_26932_27961 = state_26905__$1;
(statearr_26932_27961[(2)] = null);

(statearr_26932_27961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (9))){
var inst_26862 = (state_26905[(8)]);
var inst_26883 = cljs.core.vec(inst_26862);
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26905__$1,(11),out,inst_26883);
} else {
if((state_val_26906 === (5))){
var inst_26868 = (state_26905[(9)]);
var inst_26863 = (state_26905[(7)]);
var inst_26862 = (state_26905[(8)]);
var inst_26878 = (state_26905[(11)]);
var inst_26877 = (inst_26862[inst_26863] = inst_26868);
var inst_26878__$1 = (inst_26863 + (1));
var inst_26879 = (inst_26878__$1 < n);
var state_26905__$1 = (function (){var statearr_26933 = state_26905;
(statearr_26933[(12)] = inst_26877);

(statearr_26933[(11)] = inst_26878__$1);

return statearr_26933;
})();
if(cljs.core.truth_(inst_26879)){
var statearr_26934_27963 = state_26905__$1;
(statearr_26934_27963[(1)] = (8));

} else {
var statearr_26935_27964 = state_26905__$1;
(statearr_26935_27964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (14))){
var inst_26898 = (state_26905[(2)]);
var inst_26899 = cljs.core.async.close_BANG_(out);
var state_26905__$1 = (function (){var statearr_26938 = state_26905;
(statearr_26938[(13)] = inst_26898);

return statearr_26938;
})();
var statearr_26939_27968 = state_26905__$1;
(statearr_26939_27968[(2)] = inst_26899);

(statearr_26939_27968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (10))){
var inst_26889 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
var statearr_26941_27970 = state_26905__$1;
(statearr_26941_27970[(2)] = inst_26889);

(statearr_26941_27970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (8))){
var inst_26862 = (state_26905[(8)]);
var inst_26878 = (state_26905[(11)]);
var tmp26936 = inst_26862;
var inst_26862__$1 = tmp26936;
var inst_26863 = inst_26878;
var state_26905__$1 = (function (){var statearr_26945 = state_26905;
(statearr_26945[(7)] = inst_26863);

(statearr_26945[(8)] = inst_26862__$1);

return statearr_26945;
})();
var statearr_26946_27971 = state_26905__$1;
(statearr_26946_27971[(2)] = null);

(statearr_26946_27971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_26951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26951[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_26951[(1)] = (1));

return statearr_26951;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_26905){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_26905);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e26952){var ex__21322__auto__ = e26952;
var statearr_26953_27972 = state_26905;
(statearr_26953_27972[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_26905[(4)]))){
var statearr_26954_27973 = state_26905;
(statearr_26954_27973[(1)] = cljs.core.first((state_26905[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27974 = state_26905;
state_26905 = G__27974;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_26905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_26905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_26955 = f__22677__auto__();
(statearr_26955[(6)] = c__22675__auto___27945);

return statearr_26955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26963 = arguments.length;
switch (G__26963) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22675__auto___27980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22677__auto__ = (function (){var switch__21318__auto__ = (function (state_27016){
var state_val_27017 = (state_27016[(1)]);
if((state_val_27017 === (7))){
var inst_27012 = (state_27016[(2)]);
var state_27016__$1 = state_27016;
var statearr_27020_27981 = state_27016__$1;
(statearr_27020_27981[(2)] = inst_27012);

(statearr_27020_27981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (1))){
var inst_26971 = [];
var inst_26972 = inst_26971;
var inst_26973 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27016__$1 = (function (){var statearr_27026 = state_27016;
(statearr_27026[(7)] = inst_26973);

(statearr_27026[(8)] = inst_26972);

return statearr_27026;
})();
var statearr_27027_27983 = state_27016__$1;
(statearr_27027_27983[(2)] = null);

(statearr_27027_27983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (4))){
var inst_26976 = (state_27016[(9)]);
var inst_26976__$1 = (state_27016[(2)]);
var inst_26977 = (inst_26976__$1 == null);
var inst_26978 = cljs.core.not(inst_26977);
var state_27016__$1 = (function (){var statearr_27028 = state_27016;
(statearr_27028[(9)] = inst_26976__$1);

return statearr_27028;
})();
if(inst_26978){
var statearr_27029_27984 = state_27016__$1;
(statearr_27029_27984[(1)] = (5));

} else {
var statearr_27030_27985 = state_27016__$1;
(statearr_27030_27985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (15))){
var inst_26972 = (state_27016[(8)]);
var inst_27004 = cljs.core.vec(inst_26972);
var state_27016__$1 = state_27016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27016__$1,(18),out,inst_27004);
} else {
if((state_val_27017 === (13))){
var inst_26999 = (state_27016[(2)]);
var state_27016__$1 = state_27016;
var statearr_27042_27986 = state_27016__$1;
(statearr_27042_27986[(2)] = inst_26999);

(statearr_27042_27986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (6))){
var inst_26972 = (state_27016[(8)]);
var inst_27001 = inst_26972.length;
var inst_27002 = (inst_27001 > (0));
var state_27016__$1 = state_27016;
if(cljs.core.truth_(inst_27002)){
var statearr_27044_27987 = state_27016__$1;
(statearr_27044_27987[(1)] = (15));

} else {
var statearr_27045_27988 = state_27016__$1;
(statearr_27045_27988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (17))){
var inst_27009 = (state_27016[(2)]);
var inst_27010 = cljs.core.async.close_BANG_(out);
var state_27016__$1 = (function (){var statearr_27046 = state_27016;
(statearr_27046[(10)] = inst_27009);

return statearr_27046;
})();
var statearr_27053_27989 = state_27016__$1;
(statearr_27053_27989[(2)] = inst_27010);

(statearr_27053_27989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (3))){
var inst_27014 = (state_27016[(2)]);
var state_27016__$1 = state_27016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27016__$1,inst_27014);
} else {
if((state_val_27017 === (12))){
var inst_26972 = (state_27016[(8)]);
var inst_26991 = cljs.core.vec(inst_26972);
var state_27016__$1 = state_27016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27016__$1,(14),out,inst_26991);
} else {
if((state_val_27017 === (2))){
var state_27016__$1 = state_27016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27016__$1,(4),ch);
} else {
if((state_val_27017 === (11))){
var inst_26976 = (state_27016[(9)]);
var inst_26972 = (state_27016[(8)]);
var inst_26980 = (state_27016[(11)]);
var inst_26988 = inst_26972.push(inst_26976);
var tmp27054 = inst_26972;
var inst_26972__$1 = tmp27054;
var inst_26973 = inst_26980;
var state_27016__$1 = (function (){var statearr_27059 = state_27016;
(statearr_27059[(7)] = inst_26973);

(statearr_27059[(12)] = inst_26988);

(statearr_27059[(8)] = inst_26972__$1);

return statearr_27059;
})();
var statearr_27062_27994 = state_27016__$1;
(statearr_27062_27994[(2)] = null);

(statearr_27062_27994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (9))){
var inst_26973 = (state_27016[(7)]);
var inst_26984 = cljs.core.keyword_identical_QMARK_(inst_26973,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_27016__$1 = state_27016;
var statearr_27066_27996 = state_27016__$1;
(statearr_27066_27996[(2)] = inst_26984);

(statearr_27066_27996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (5))){
var inst_26976 = (state_27016[(9)]);
var inst_26973 = (state_27016[(7)]);
var inst_26981 = (state_27016[(13)]);
var inst_26980 = (state_27016[(11)]);
var inst_26980__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26976) : f.call(null, inst_26976));
var inst_26981__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26980__$1,inst_26973);
var state_27016__$1 = (function (){var statearr_27079 = state_27016;
(statearr_27079[(13)] = inst_26981__$1);

(statearr_27079[(11)] = inst_26980__$1);

return statearr_27079;
})();
if(inst_26981__$1){
var statearr_27080_27997 = state_27016__$1;
(statearr_27080_27997[(1)] = (8));

} else {
var statearr_27081_27998 = state_27016__$1;
(statearr_27081_27998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (14))){
var inst_26976 = (state_27016[(9)]);
var inst_26980 = (state_27016[(11)]);
var inst_26993 = (state_27016[(2)]);
var inst_26995 = [];
var inst_26996 = inst_26995.push(inst_26976);
var inst_26972 = inst_26995;
var inst_26973 = inst_26980;
var state_27016__$1 = (function (){var statearr_27083 = state_27016;
(statearr_27083[(14)] = inst_26996);

(statearr_27083[(15)] = inst_26993);

(statearr_27083[(7)] = inst_26973);

(statearr_27083[(8)] = inst_26972);

return statearr_27083;
})();
var statearr_27084_27999 = state_27016__$1;
(statearr_27084_27999[(2)] = null);

(statearr_27084_27999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (16))){
var state_27016__$1 = state_27016;
var statearr_27086_28000 = state_27016__$1;
(statearr_27086_28000[(2)] = null);

(statearr_27086_28000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (10))){
var inst_26986 = (state_27016[(2)]);
var state_27016__$1 = state_27016;
if(cljs.core.truth_(inst_26986)){
var statearr_27088_28001 = state_27016__$1;
(statearr_27088_28001[(1)] = (11));

} else {
var statearr_27089_28002 = state_27016__$1;
(statearr_27089_28002[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (18))){
var inst_27006 = (state_27016[(2)]);
var state_27016__$1 = state_27016;
var statearr_27090_28003 = state_27016__$1;
(statearr_27090_28003[(2)] = inst_27006);

(statearr_27090_28003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (8))){
var inst_26981 = (state_27016[(13)]);
var state_27016__$1 = state_27016;
var statearr_27091_28005 = state_27016__$1;
(statearr_27091_28005[(2)] = inst_26981);

(statearr_27091_28005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21319__auto__ = null;
var cljs$core$async$state_machine__21319__auto____0 = (function (){
var statearr_27094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27094[(0)] = cljs$core$async$state_machine__21319__auto__);

(statearr_27094[(1)] = (1));

return statearr_27094;
});
var cljs$core$async$state_machine__21319__auto____1 = (function (state_27016){
while(true){
var ret_value__21320__auto__ = (function (){try{while(true){
var result__21321__auto__ = switch__21318__auto__(state_27016);
if(cljs.core.keyword_identical_QMARK_(result__21321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21321__auto__;
}
break;
}
}catch (e27095){var ex__21322__auto__ = e27095;
var statearr_27096_28006 = state_27016;
(statearr_27096_28006[(2)] = ex__21322__auto__);


if(cljs.core.seq((state_27016[(4)]))){
var statearr_27097_28007 = state_27016;
(statearr_27097_28007[(1)] = cljs.core.first((state_27016[(4)])));

} else {
throw ex__21322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28008 = state_27016;
state_27016 = G__28008;
continue;
} else {
return ret_value__21320__auto__;
}
break;
}
});
cljs$core$async$state_machine__21319__auto__ = function(state_27016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21319__auto____1.call(this,state_27016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21319__auto____0;
cljs$core$async$state_machine__21319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21319__auto____1;
return cljs$core$async$state_machine__21319__auto__;
})()
})();
var state__22678__auto__ = (function (){var statearr_27099 = f__22677__auto__();
(statearr_27099[(6)] = c__22675__auto___27980);

return statearr_27099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22678__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
