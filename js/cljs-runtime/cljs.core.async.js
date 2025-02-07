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
cljs.core.async.t_cljs$core$async20774 = (function (f,blockable,meta20775){
this.f = f;
this.blockable = blockable;
this.meta20775 = meta20775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20776,meta20775__$1){
var self__ = this;
var _20776__$1 = this;
return (new cljs.core.async.t_cljs$core$async20774(self__.f,self__.blockable,meta20775__$1));
}));

(cljs.core.async.t_cljs$core$async20774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20776){
var self__ = this;
var _20776__$1 = this;
return self__.meta20775;
}));

(cljs.core.async.t_cljs$core$async20774.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async20774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async20774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20775","meta20775",-80056580,null)], null);
}));

(cljs.core.async.t_cljs$core$async20774.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20774");

(cljs.core.async.t_cljs$core$async20774.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20774");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20774.
 */
cljs.core.async.__GT_t_cljs$core$async20774 = (function cljs$core$async$__GT_t_cljs$core$async20774(f,blockable,meta20775){
return (new cljs.core.async.t_cljs$core$async20774(f,blockable,meta20775));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__20769 = arguments.length;
switch (G__20769) {
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
return (new cljs.core.async.t_cljs$core$async20774(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20824 = arguments.length;
switch (G__20824) {
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
var G__20844 = arguments.length;
switch (G__20844) {
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
var G__20868 = arguments.length;
switch (G__20868) {
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
var val_25832 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25832) : fn1.call(null, val_25832));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25832) : fn1.call(null, val_25832));
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
var G__20897 = arguments.length;
switch (G__20897) {
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
var n__5593__auto___25840 = n;
var x_25841 = (0);
while(true){
if((x_25841 < n__5593__auto___25840)){
(a[x_25841] = x_25841);

var G__25842 = (x_25841 + (1));
x_25841 = G__25842;
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
cljs.core.async.t_cljs$core$async20965 = (function (flag,meta20966){
this.flag = flag;
this.meta20966 = meta20966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20967,meta20966__$1){
var self__ = this;
var _20967__$1 = this;
return (new cljs.core.async.t_cljs$core$async20965(self__.flag,meta20966__$1));
}));

(cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20967){
var self__ = this;
var _20967__$1 = this;
return self__.meta20966;
}));

(cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async20965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20966","meta20966",-741069151,null)], null);
}));

(cljs.core.async.t_cljs$core$async20965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20965");

(cljs.core.async.t_cljs$core$async20965.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20965.
 */
cljs.core.async.__GT_t_cljs$core$async20965 = (function cljs$core$async$__GT_t_cljs$core$async20965(flag,meta20966){
return (new cljs.core.async.t_cljs$core$async20965(flag,meta20966));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async20965(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21031 = (function (flag,cb,meta21032){
this.flag = flag;
this.cb = cb;
this.meta21032 = meta21032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21033,meta21032__$1){
var self__ = this;
var _21033__$1 = this;
return (new cljs.core.async.t_cljs$core$async21031(self__.flag,self__.cb,meta21032__$1));
}));

(cljs.core.async.t_cljs$core$async21031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21033){
var self__ = this;
var _21033__$1 = this;
return self__.meta21032;
}));

(cljs.core.async.t_cljs$core$async21031.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21031.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21031.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21031.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async21031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21032","meta21032",506616503,null)], null);
}));

(cljs.core.async.t_cljs$core$async21031.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21031");

(cljs.core.async.t_cljs$core$async21031.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21031");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21031.
 */
cljs.core.async.__GT_t_cljs$core$async21031 = (function cljs$core$async$__GT_t_cljs$core$async21031(flag,cb,meta21032){
return (new cljs.core.async.t_cljs$core$async21031(flag,cb,meta21032));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async21031(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21082_SHARP_){
var G__21102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21082_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21102) : fret.call(null, G__21102));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21083_SHARP_){
var G__21105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21083_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21105) : fret.call(null, G__21105));
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
var G__25854 = (i + (1));
i = G__25854;
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
var len__5726__auto___25862 = arguments.length;
var i__5727__auto___25863 = (0);
while(true){
if((i__5727__auto___25863 < len__5726__auto___25862)){
args__5732__auto__.push((arguments[i__5727__auto___25863]));

var G__25864 = (i__5727__auto___25863 + (1));
i__5727__auto___25863 = G__25864;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21150){
var map__21151 = p__21150;
var map__21151__$1 = cljs.core.__destructure_map(map__21151);
var opts = map__21151__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21134){
var G__21139 = cljs.core.first(seq21134);
var seq21134__$1 = cljs.core.next(seq21134);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21139,seq21134__$1);
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
var G__21177 = arguments.length;
switch (G__21177) {
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
var c__20638__auto___25871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_21270){
var state_val_21271 = (state_21270[(1)]);
if((state_val_21271 === (7))){
var inst_21256 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
var statearr_21290_25872 = state_21270__$1;
(statearr_21290_25872[(2)] = inst_21256);

(statearr_21290_25872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (1))){
var state_21270__$1 = state_21270;
var statearr_21292_25873 = state_21270__$1;
(statearr_21292_25873[(2)] = null);

(statearr_21292_25873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (4))){
var inst_21231 = (state_21270[(7)]);
var inst_21231__$1 = (state_21270[(2)]);
var inst_21235 = (inst_21231__$1 == null);
var state_21270__$1 = (function (){var statearr_21306 = state_21270;
(statearr_21306[(7)] = inst_21231__$1);

return statearr_21306;
})();
if(cljs.core.truth_(inst_21235)){
var statearr_21307_25874 = state_21270__$1;
(statearr_21307_25874[(1)] = (5));

} else {
var statearr_21310_25875 = state_21270__$1;
(statearr_21310_25875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (13))){
var state_21270__$1 = state_21270;
var statearr_21313_25876 = state_21270__$1;
(statearr_21313_25876[(2)] = null);

(statearr_21313_25876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (6))){
var inst_21231 = (state_21270[(7)]);
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21270__$1,(11),to,inst_21231);
} else {
if((state_val_21271 === (3))){
var inst_21259 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21270__$1,inst_21259);
} else {
if((state_val_21271 === (12))){
var state_21270__$1 = state_21270;
var statearr_21323_25878 = state_21270__$1;
(statearr_21323_25878[(2)] = null);

(statearr_21323_25878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (2))){
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21270__$1,(4),from);
} else {
if((state_val_21271 === (11))){
var inst_21246 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
if(cljs.core.truth_(inst_21246)){
var statearr_21329_25880 = state_21270__$1;
(statearr_21329_25880[(1)] = (12));

} else {
var statearr_21333_25881 = state_21270__$1;
(statearr_21333_25881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (9))){
var state_21270__$1 = state_21270;
var statearr_21344_25882 = state_21270__$1;
(statearr_21344_25882[(2)] = null);

(statearr_21344_25882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (5))){
var state_21270__$1 = state_21270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21351_25883 = state_21270__$1;
(statearr_21351_25883[(1)] = (8));

} else {
var statearr_21354_25884 = state_21270__$1;
(statearr_21354_25884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (14))){
var inst_21254 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
var statearr_21356_25886 = state_21270__$1;
(statearr_21356_25886[(2)] = inst_21254);

(statearr_21356_25886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (10))){
var inst_21243 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
var statearr_21360_25889 = state_21270__$1;
(statearr_21360_25889[(2)] = inst_21243);

(statearr_21360_25889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (8))){
var inst_21239 = cljs.core.async.close_BANG_(to);
var state_21270__$1 = state_21270;
var statearr_21361_25890 = state_21270__$1;
(statearr_21361_25890[(2)] = inst_21239);

(statearr_21361_25890[(1)] = (10));


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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_21365 = [null,null,null,null,null,null,null,null];
(statearr_21365[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_21365[(1)] = (1));

return statearr_21365;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_21270){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_21270);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e21370){var ex__19219__auto__ = e21370;
var statearr_21371_25891 = state_21270;
(statearr_21371_25891[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_21270[(4)]))){
var statearr_21372_25894 = state_21270;
(statearr_21372_25894[(1)] = cljs.core.first((state_21270[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25895 = state_21270;
state_21270 = G__25895;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_21270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_21270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_21377 = f__20639__auto__();
(statearr_21377[(6)] = c__20638__auto___25871);

return statearr_21377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
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
var process__$1 = (function (p__21398){
var vec__21399 = p__21398;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21399,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21399,(1),null);
var job = vec__21399;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__20638__auto___25896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_21416){
var state_val_21417 = (state_21416[(1)]);
if((state_val_21417 === (1))){
var state_21416__$1 = state_21416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21416__$1,(2),res,v);
} else {
if((state_val_21417 === (2))){
var inst_21411 = (state_21416[(2)]);
var inst_21414 = cljs.core.async.close_BANG_(res);
var state_21416__$1 = (function (){var statearr_21423 = state_21416;
(statearr_21423[(7)] = inst_21411);

return statearr_21423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21416__$1,inst_21414);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0 = (function (){
var statearr_21428 = [null,null,null,null,null,null,null,null];
(statearr_21428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__);

(statearr_21428[(1)] = (1));

return statearr_21428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1 = (function (state_21416){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_21416);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e21432){var ex__19219__auto__ = e21432;
var statearr_21433_25900 = state_21416;
(statearr_21433_25900[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_21416[(4)]))){
var statearr_21438_25901 = state_21416;
(statearr_21438_25901[(1)] = cljs.core.first((state_21416[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25902 = state_21416;
state_21416 = G__25902;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = function(state_21416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1.call(this,state_21416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_21442 = f__20639__auto__();
(statearr_21442[(6)] = c__20638__auto___25896);

return statearr_21442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__21449){
var vec__21452 = p__21449;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21452,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21452,(1),null);
var job = vec__21452;
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
var n__5593__auto___25903 = n;
var __25904 = (0);
while(true){
if((__25904 < n__5593__auto___25903)){
var G__21460_25905 = type;
var G__21460_25906__$1 = (((G__21460_25905 instanceof cljs.core.Keyword))?G__21460_25905.fqn:null);
switch (G__21460_25906__$1) {
case "compute":
var c__20638__auto___25908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25904,c__20638__auto___25908,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async){
return (function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = ((function (__25904,c__20638__auto___25908,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async){
return (function (state_21481){
var state_val_21482 = (state_21481[(1)]);
if((state_val_21482 === (1))){
var state_21481__$1 = state_21481;
var statearr_21488_25913 = state_21481__$1;
(statearr_21488_25913[(2)] = null);

(statearr_21488_25913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (2))){
var state_21481__$1 = state_21481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21481__$1,(4),jobs);
} else {
if((state_val_21482 === (3))){
var inst_21479 = (state_21481[(2)]);
var state_21481__$1 = state_21481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21481__$1,inst_21479);
} else {
if((state_val_21482 === (4))){
var inst_21466 = (state_21481[(2)]);
var inst_21470 = process__$1(inst_21466);
var state_21481__$1 = state_21481;
if(cljs.core.truth_(inst_21470)){
var statearr_21497_25915 = state_21481__$1;
(statearr_21497_25915[(1)] = (5));

} else {
var statearr_21499_25916 = state_21481__$1;
(statearr_21499_25916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (5))){
var state_21481__$1 = state_21481;
var statearr_21501_25917 = state_21481__$1;
(statearr_21501_25917[(2)] = null);

(statearr_21501_25917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (6))){
var state_21481__$1 = state_21481;
var statearr_21507_25918 = state_21481__$1;
(statearr_21507_25918[(2)] = null);

(statearr_21507_25918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21482 === (7))){
var inst_21477 = (state_21481[(2)]);
var state_21481__$1 = state_21481;
var statearr_21509_25920 = state_21481__$1;
(statearr_21509_25920[(2)] = inst_21477);

(statearr_21509_25920[(1)] = (3));


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
});})(__25904,c__20638__auto___25908,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async))
;
return ((function (__25904,switch__19215__auto__,c__20638__auto___25908,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0 = (function (){
var statearr_21515 = [null,null,null,null,null,null,null];
(statearr_21515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__);

(statearr_21515[(1)] = (1));

return statearr_21515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1 = (function (state_21481){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_21481);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e21519){var ex__19219__auto__ = e21519;
var statearr_21521_25923 = state_21481;
(statearr_21521_25923[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_21481[(4)]))){
var statearr_21522_25924 = state_21481;
(statearr_21522_25924[(1)] = cljs.core.first((state_21481[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25925 = state_21481;
state_21481 = G__25925;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = function(state_21481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1.call(this,state_21481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__;
})()
;})(__25904,switch__19215__auto__,c__20638__auto___25908,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async))
})();
var state__20640__auto__ = (function (){var statearr_21527 = f__20639__auto__();
(statearr_21527[(6)] = c__20638__auto___25908);

return statearr_21527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
});})(__25904,c__20638__auto___25908,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async))
);


break;
case "async":
var c__20638__auto___25926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25904,c__20638__auto___25926,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async){
return (function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = ((function (__25904,c__20638__auto___25926,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async){
return (function (state_21563){
var state_val_21564 = (state_21563[(1)]);
if((state_val_21564 === (1))){
var state_21563__$1 = state_21563;
var statearr_21584_25931 = state_21563__$1;
(statearr_21584_25931[(2)] = null);

(statearr_21584_25931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21564 === (2))){
var state_21563__$1 = state_21563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21563__$1,(4),jobs);
} else {
if((state_val_21564 === (3))){
var inst_21561 = (state_21563[(2)]);
var state_21563__$1 = state_21563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21563__$1,inst_21561);
} else {
if((state_val_21564 === (4))){
var inst_21547 = (state_21563[(2)]);
var inst_21552 = async(inst_21547);
var state_21563__$1 = state_21563;
if(cljs.core.truth_(inst_21552)){
var statearr_21603_25932 = state_21563__$1;
(statearr_21603_25932[(1)] = (5));

} else {
var statearr_21606_25933 = state_21563__$1;
(statearr_21606_25933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21564 === (5))){
var state_21563__$1 = state_21563;
var statearr_21608_25934 = state_21563__$1;
(statearr_21608_25934[(2)] = null);

(statearr_21608_25934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21564 === (6))){
var state_21563__$1 = state_21563;
var statearr_21610_25935 = state_21563__$1;
(statearr_21610_25935[(2)] = null);

(statearr_21610_25935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21564 === (7))){
var inst_21559 = (state_21563[(2)]);
var state_21563__$1 = state_21563;
var statearr_21612_25936 = state_21563__$1;
(statearr_21612_25936[(2)] = inst_21559);

(statearr_21612_25936[(1)] = (3));


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
});})(__25904,c__20638__auto___25926,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async))
;
return ((function (__25904,switch__19215__auto__,c__20638__auto___25926,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0 = (function (){
var statearr_21615 = [null,null,null,null,null,null,null];
(statearr_21615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__);

(statearr_21615[(1)] = (1));

return statearr_21615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1 = (function (state_21563){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_21563);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e21619){var ex__19219__auto__ = e21619;
var statearr_21624_25937 = state_21563;
(statearr_21624_25937[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_21563[(4)]))){
var statearr_21625_25938 = state_21563;
(statearr_21625_25938[(1)] = cljs.core.first((state_21563[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25939 = state_21563;
state_21563 = G__25939;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = function(state_21563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1.call(this,state_21563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__;
})()
;})(__25904,switch__19215__auto__,c__20638__auto___25926,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async))
})();
var state__20640__auto__ = (function (){var statearr_21630 = f__20639__auto__();
(statearr_21630[(6)] = c__20638__auto___25926);

return statearr_21630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
});})(__25904,c__20638__auto___25926,G__21460_25905,G__21460_25906__$1,n__5593__auto___25903,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21460_25906__$1)].join('')));

}

var G__25940 = (__25904 + (1));
__25904 = G__25940;
continue;
} else {
}
break;
}

var c__20638__auto___25941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_21662){
var state_val_21664 = (state_21662[(1)]);
if((state_val_21664 === (7))){
var inst_21653 = (state_21662[(2)]);
var state_21662__$1 = state_21662;
var statearr_21709_25943 = state_21662__$1;
(statearr_21709_25943[(2)] = inst_21653);

(statearr_21709_25943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (1))){
var state_21662__$1 = state_21662;
var statearr_21719_25944 = state_21662__$1;
(statearr_21719_25944[(2)] = null);

(statearr_21719_25944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (4))){
var inst_21634 = (state_21662[(7)]);
var inst_21634__$1 = (state_21662[(2)]);
var inst_21635 = (inst_21634__$1 == null);
var state_21662__$1 = (function (){var statearr_21736 = state_21662;
(statearr_21736[(7)] = inst_21634__$1);

return statearr_21736;
})();
if(cljs.core.truth_(inst_21635)){
var statearr_21742_25945 = state_21662__$1;
(statearr_21742_25945[(1)] = (5));

} else {
var statearr_21749_25946 = state_21662__$1;
(statearr_21749_25946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (6))){
var inst_21642 = (state_21662[(8)]);
var inst_21634 = (state_21662[(7)]);
var inst_21642__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21644 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21645 = [inst_21634,inst_21642__$1];
var inst_21646 = (new cljs.core.PersistentVector(null,2,(5),inst_21644,inst_21645,null));
var state_21662__$1 = (function (){var statearr_21761 = state_21662;
(statearr_21761[(8)] = inst_21642__$1);

return statearr_21761;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21662__$1,(8),jobs,inst_21646);
} else {
if((state_val_21664 === (3))){
var inst_21655 = (state_21662[(2)]);
var state_21662__$1 = state_21662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21662__$1,inst_21655);
} else {
if((state_val_21664 === (2))){
var state_21662__$1 = state_21662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21662__$1,(4),from);
} else {
if((state_val_21664 === (9))){
var inst_21650 = (state_21662[(2)]);
var state_21662__$1 = (function (){var statearr_21774 = state_21662;
(statearr_21774[(9)] = inst_21650);

return statearr_21774;
})();
var statearr_21779_25950 = state_21662__$1;
(statearr_21779_25950[(2)] = null);

(statearr_21779_25950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (5))){
var inst_21640 = cljs.core.async.close_BANG_(jobs);
var state_21662__$1 = state_21662;
var statearr_21786_25951 = state_21662__$1;
(statearr_21786_25951[(2)] = inst_21640);

(statearr_21786_25951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (8))){
var inst_21642 = (state_21662[(8)]);
var inst_21648 = (state_21662[(2)]);
var state_21662__$1 = (function (){var statearr_21793 = state_21662;
(statearr_21793[(10)] = inst_21648);

return statearr_21793;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21662__$1,(9),results,inst_21642);
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
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0 = (function (){
var statearr_21805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__);

(statearr_21805[(1)] = (1));

return statearr_21805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1 = (function (state_21662){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_21662);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e21807){var ex__19219__auto__ = e21807;
var statearr_21808_25952 = state_21662;
(statearr_21808_25952[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_21662[(4)]))){
var statearr_21812_25953 = state_21662;
(statearr_21812_25953[(1)] = cljs.core.first((state_21662[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25954 = state_21662;
state_21662 = G__25954;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = function(state_21662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1.call(this,state_21662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_21816 = f__20639__auto__();
(statearr_21816[(6)] = c__20638__auto___25941);

return statearr_21816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));


var c__20638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_21889){
var state_val_21890 = (state_21889[(1)]);
if((state_val_21890 === (7))){
var inst_21885 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
var statearr_21921_25958 = state_21889__$1;
(statearr_21921_25958[(2)] = inst_21885);

(statearr_21921_25958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (20))){
var state_21889__$1 = state_21889;
var statearr_21923_25959 = state_21889__$1;
(statearr_21923_25959[(2)] = null);

(statearr_21923_25959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (1))){
var state_21889__$1 = state_21889;
var statearr_21924_25960 = state_21889__$1;
(statearr_21924_25960[(2)] = null);

(statearr_21924_25960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (4))){
var inst_21826 = (state_21889[(7)]);
var inst_21826__$1 = (state_21889[(2)]);
var inst_21827 = (inst_21826__$1 == null);
var state_21889__$1 = (function (){var statearr_21929 = state_21889;
(statearr_21929[(7)] = inst_21826__$1);

return statearr_21929;
})();
if(cljs.core.truth_(inst_21827)){
var statearr_21934_25961 = state_21889__$1;
(statearr_21934_25961[(1)] = (5));

} else {
var statearr_21939_25962 = state_21889__$1;
(statearr_21939_25962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (15))){
var inst_21851 = (state_21889[(8)]);
var state_21889__$1 = state_21889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21889__$1,(18),to,inst_21851);
} else {
if((state_val_21890 === (21))){
var inst_21880 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
var statearr_21942_25963 = state_21889__$1;
(statearr_21942_25963[(2)] = inst_21880);

(statearr_21942_25963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (13))){
var inst_21882 = (state_21889[(2)]);
var state_21889__$1 = (function (){var statearr_21956 = state_21889;
(statearr_21956[(9)] = inst_21882);

return statearr_21956;
})();
var statearr_21957_25964 = state_21889__$1;
(statearr_21957_25964[(2)] = null);

(statearr_21957_25964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (6))){
var inst_21826 = (state_21889[(7)]);
var state_21889__$1 = state_21889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21889__$1,(11),inst_21826);
} else {
if((state_val_21890 === (17))){
var inst_21871 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
if(cljs.core.truth_(inst_21871)){
var statearr_21964_25965 = state_21889__$1;
(statearr_21964_25965[(1)] = (19));

} else {
var statearr_21965_25966 = state_21889__$1;
(statearr_21965_25966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (3))){
var inst_21887 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21889__$1,inst_21887);
} else {
if((state_val_21890 === (12))){
var inst_21841 = (state_21889[(10)]);
var state_21889__$1 = state_21889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21889__$1,(14),inst_21841);
} else {
if((state_val_21890 === (2))){
var state_21889__$1 = state_21889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21889__$1,(4),results);
} else {
if((state_val_21890 === (19))){
var state_21889__$1 = state_21889;
var statearr_21967_25967 = state_21889__$1;
(statearr_21967_25967[(2)] = null);

(statearr_21967_25967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (11))){
var inst_21841 = (state_21889[(2)]);
var state_21889__$1 = (function (){var statearr_21970 = state_21889;
(statearr_21970[(10)] = inst_21841);

return statearr_21970;
})();
var statearr_21971_25969 = state_21889__$1;
(statearr_21971_25969[(2)] = null);

(statearr_21971_25969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (9))){
var state_21889__$1 = state_21889;
var statearr_21972_25970 = state_21889__$1;
(statearr_21972_25970[(2)] = null);

(statearr_21972_25970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (5))){
var state_21889__$1 = state_21889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21973_25971 = state_21889__$1;
(statearr_21973_25971[(1)] = (8));

} else {
var statearr_21974_25972 = state_21889__$1;
(statearr_21974_25972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (14))){
var inst_21851 = (state_21889[(8)]);
var inst_21859 = (state_21889[(11)]);
var inst_21851__$1 = (state_21889[(2)]);
var inst_21858 = (inst_21851__$1 == null);
var inst_21859__$1 = cljs.core.not(inst_21858);
var state_21889__$1 = (function (){var statearr_21975 = state_21889;
(statearr_21975[(8)] = inst_21851__$1);

(statearr_21975[(11)] = inst_21859__$1);

return statearr_21975;
})();
if(inst_21859__$1){
var statearr_21977_25973 = state_21889__$1;
(statearr_21977_25973[(1)] = (15));

} else {
var statearr_21978_25974 = state_21889__$1;
(statearr_21978_25974[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (16))){
var inst_21859 = (state_21889[(11)]);
var state_21889__$1 = state_21889;
var statearr_21980_25975 = state_21889__$1;
(statearr_21980_25975[(2)] = inst_21859);

(statearr_21980_25975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (10))){
var inst_21838 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
var statearr_21981_25976 = state_21889__$1;
(statearr_21981_25976[(2)] = inst_21838);

(statearr_21981_25976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (18))){
var inst_21867 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
var statearr_21983_25977 = state_21889__$1;
(statearr_21983_25977[(2)] = inst_21867);

(statearr_21983_25977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (8))){
var inst_21835 = cljs.core.async.close_BANG_(to);
var state_21889__$1 = state_21889;
var statearr_21987_25978 = state_21889__$1;
(statearr_21987_25978[(2)] = inst_21835);

(statearr_21987_25978[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0 = (function (){
var statearr_21988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__);

(statearr_21988[(1)] = (1));

return statearr_21988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1 = (function (state_21889){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_21889);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e21994){var ex__19219__auto__ = e21994;
var statearr_21995_25979 = state_21889;
(statearr_21995_25979[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_21889[(4)]))){
var statearr_21998_25980 = state_21889;
(statearr_21998_25980[(1)] = cljs.core.first((state_21889[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25981 = state_21889;
state_21889 = G__25981;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__ = function(state_21889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1.call(this,state_21889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_22002 = f__20639__auto__();
(statearr_22002[(6)] = c__20638__auto__);

return statearr_22002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));

return c__20638__auto__;
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
var G__22005 = arguments.length;
switch (G__22005) {
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
var G__22014 = arguments.length;
switch (G__22014) {
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
var G__22054 = arguments.length;
switch (G__22054) {
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
var c__20638__auto___25993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_22101){
var state_val_22102 = (state_22101[(1)]);
if((state_val_22102 === (7))){
var inst_22095 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
var statearr_22118_25994 = state_22101__$1;
(statearr_22118_25994[(2)] = inst_22095);

(statearr_22118_25994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (1))){
var state_22101__$1 = state_22101;
var statearr_22125_25998 = state_22101__$1;
(statearr_22125_25998[(2)] = null);

(statearr_22125_25998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (4))){
var inst_22074 = (state_22101[(7)]);
var inst_22074__$1 = (state_22101[(2)]);
var inst_22075 = (inst_22074__$1 == null);
var state_22101__$1 = (function (){var statearr_22139 = state_22101;
(statearr_22139[(7)] = inst_22074__$1);

return statearr_22139;
})();
if(cljs.core.truth_(inst_22075)){
var statearr_22141_25999 = state_22101__$1;
(statearr_22141_25999[(1)] = (5));

} else {
var statearr_22145_26000 = state_22101__$1;
(statearr_22145_26000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (13))){
var state_22101__$1 = state_22101;
var statearr_22148_26001 = state_22101__$1;
(statearr_22148_26001[(2)] = null);

(statearr_22148_26001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (6))){
var inst_22074 = (state_22101[(7)]);
var inst_22080 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22074) : p.call(null, inst_22074));
var state_22101__$1 = state_22101;
if(cljs.core.truth_(inst_22080)){
var statearr_22161_26002 = state_22101__$1;
(statearr_22161_26002[(1)] = (9));

} else {
var statearr_22163_26003 = state_22101__$1;
(statearr_22163_26003[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (3))){
var inst_22097 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22101__$1,inst_22097);
} else {
if((state_val_22102 === (12))){
var state_22101__$1 = state_22101;
var statearr_22188_26004 = state_22101__$1;
(statearr_22188_26004[(2)] = null);

(statearr_22188_26004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (2))){
var state_22101__$1 = state_22101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22101__$1,(4),ch);
} else {
if((state_val_22102 === (11))){
var inst_22074 = (state_22101[(7)]);
var inst_22084 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22101__$1,(8),inst_22084,inst_22074);
} else {
if((state_val_22102 === (9))){
var state_22101__$1 = state_22101;
var statearr_22238_26005 = state_22101__$1;
(statearr_22238_26005[(2)] = tc);

(statearr_22238_26005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (5))){
var inst_22077 = cljs.core.async.close_BANG_(tc);
var inst_22078 = cljs.core.async.close_BANG_(fc);
var state_22101__$1 = (function (){var statearr_22257 = state_22101;
(statearr_22257[(8)] = inst_22077);

return statearr_22257;
})();
var statearr_22262_26010 = state_22101__$1;
(statearr_22262_26010[(2)] = inst_22078);

(statearr_22262_26010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (14))){
var inst_22093 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
var statearr_22273_26011 = state_22101__$1;
(statearr_22273_26011[(2)] = inst_22093);

(statearr_22273_26011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (10))){
var state_22101__$1 = state_22101;
var statearr_22275_26012 = state_22101__$1;
(statearr_22275_26012[(2)] = fc);

(statearr_22275_26012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (8))){
var inst_22086 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
if(cljs.core.truth_(inst_22086)){
var statearr_22281_26013 = state_22101__$1;
(statearr_22281_26013[(1)] = (12));

} else {
var statearr_22289_26014 = state_22101__$1;
(statearr_22289_26014[(1)] = (13));

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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_22298 = [null,null,null,null,null,null,null,null,null];
(statearr_22298[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_22298[(1)] = (1));

return statearr_22298;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_22101){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_22101);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e22309){var ex__19219__auto__ = e22309;
var statearr_22312_26019 = state_22101;
(statearr_22312_26019[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_22101[(4)]))){
var statearr_22313_26020 = state_22101;
(statearr_22313_26020[(1)] = cljs.core.first((state_22101[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26021 = state_22101;
state_22101 = G__26021;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_22101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_22101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_22321 = f__20639__auto__();
(statearr_22321[(6)] = c__20638__auto___25993);

return statearr_22321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
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
var c__20638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_22357){
var state_val_22358 = (state_22357[(1)]);
if((state_val_22358 === (7))){
var inst_22353 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
var statearr_22365_26026 = state_22357__$1;
(statearr_22365_26026[(2)] = inst_22353);

(statearr_22365_26026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (1))){
var inst_22334 = init;
var inst_22335 = inst_22334;
var state_22357__$1 = (function (){var statearr_22366 = state_22357;
(statearr_22366[(7)] = inst_22335);

return statearr_22366;
})();
var statearr_22368_26032 = state_22357__$1;
(statearr_22368_26032[(2)] = null);

(statearr_22368_26032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (4))){
var inst_22339 = (state_22357[(8)]);
var inst_22339__$1 = (state_22357[(2)]);
var inst_22340 = (inst_22339__$1 == null);
var state_22357__$1 = (function (){var statearr_22374 = state_22357;
(statearr_22374[(8)] = inst_22339__$1);

return statearr_22374;
})();
if(cljs.core.truth_(inst_22340)){
var statearr_22376_26033 = state_22357__$1;
(statearr_22376_26033[(1)] = (5));

} else {
var statearr_22379_26034 = state_22357__$1;
(statearr_22379_26034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (6))){
var inst_22339 = (state_22357[(8)]);
var inst_22335 = (state_22357[(7)]);
var inst_22343 = (state_22357[(9)]);
var inst_22343__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22335,inst_22339) : f.call(null, inst_22335,inst_22339));
var inst_22344 = cljs.core.reduced_QMARK_(inst_22343__$1);
var state_22357__$1 = (function (){var statearr_22384 = state_22357;
(statearr_22384[(9)] = inst_22343__$1);

return statearr_22384;
})();
if(inst_22344){
var statearr_22385_26038 = state_22357__$1;
(statearr_22385_26038[(1)] = (8));

} else {
var statearr_22387_26039 = state_22357__$1;
(statearr_22387_26039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (3))){
var inst_22355 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22357__$1,inst_22355);
} else {
if((state_val_22358 === (2))){
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22357__$1,(4),ch);
} else {
if((state_val_22358 === (9))){
var inst_22343 = (state_22357[(9)]);
var inst_22335 = inst_22343;
var state_22357__$1 = (function (){var statearr_22391 = state_22357;
(statearr_22391[(7)] = inst_22335);

return statearr_22391;
})();
var statearr_22393_26043 = state_22357__$1;
(statearr_22393_26043[(2)] = null);

(statearr_22393_26043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (5))){
var inst_22335 = (state_22357[(7)]);
var state_22357__$1 = state_22357;
var statearr_22399_26044 = state_22357__$1;
(statearr_22399_26044[(2)] = inst_22335);

(statearr_22399_26044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (10))){
var inst_22351 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
var statearr_22413_26050 = state_22357__$1;
(statearr_22413_26050[(2)] = inst_22351);

(statearr_22413_26050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (8))){
var inst_22343 = (state_22357[(9)]);
var inst_22347 = cljs.core.deref(inst_22343);
var state_22357__$1 = state_22357;
var statearr_22424_26051 = state_22357__$1;
(statearr_22424_26051[(2)] = inst_22347);

(statearr_22424_26051[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__19216__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19216__auto____0 = (function (){
var statearr_22431 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22431[(0)] = cljs$core$async$reduce_$_state_machine__19216__auto__);

(statearr_22431[(1)] = (1));

return statearr_22431;
});
var cljs$core$async$reduce_$_state_machine__19216__auto____1 = (function (state_22357){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_22357);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e22433){var ex__19219__auto__ = e22433;
var statearr_22434_26052 = state_22357;
(statearr_22434_26052[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_22357[(4)]))){
var statearr_22435_26053 = state_22357;
(statearr_22435_26053[(1)] = cljs.core.first((state_22357[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26054 = state_22357;
state_22357 = G__26054;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19216__auto__ = function(state_22357){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19216__auto____1.call(this,state_22357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19216__auto____0;
cljs$core$async$reduce_$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19216__auto____1;
return cljs$core$async$reduce_$_state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_22445 = f__20639__auto__();
(statearr_22445[(6)] = c__20638__auto__);

return statearr_22445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));

return c__20638__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__20638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_22457){
var state_val_22458 = (state_22457[(1)]);
if((state_val_22458 === (1))){
var inst_22452 = cljs.core.async.reduce(f__$1,init,ch);
var state_22457__$1 = state_22457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22457__$1,(2),inst_22452);
} else {
if((state_val_22458 === (2))){
var inst_22454 = (state_22457[(2)]);
var inst_22455 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_22454) : f__$1.call(null, inst_22454));
var state_22457__$1 = state_22457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22457__$1,inst_22455);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__19216__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19216__auto____0 = (function (){
var statearr_22465 = [null,null,null,null,null,null,null];
(statearr_22465[(0)] = cljs$core$async$transduce_$_state_machine__19216__auto__);

(statearr_22465[(1)] = (1));

return statearr_22465;
});
var cljs$core$async$transduce_$_state_machine__19216__auto____1 = (function (state_22457){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_22457);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e22466){var ex__19219__auto__ = e22466;
var statearr_22467_26056 = state_22457;
(statearr_22467_26056[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_22457[(4)]))){
var statearr_22468_26057 = state_22457;
(statearr_22468_26057[(1)] = cljs.core.first((state_22457[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26058 = state_22457;
state_22457 = G__26058;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19216__auto__ = function(state_22457){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19216__auto____1.call(this,state_22457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19216__auto____0;
cljs$core$async$transduce_$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19216__auto____1;
return cljs$core$async$transduce_$_state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_22473 = f__20639__auto__();
(statearr_22473[(6)] = c__20638__auto__);

return statearr_22473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));

return c__20638__auto__;
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
var G__22482 = arguments.length;
switch (G__22482) {
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
var c__20638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_22546){
var state_val_22547 = (state_22546[(1)]);
if((state_val_22547 === (7))){
var inst_22521 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22553_26060 = state_22546__$1;
(statearr_22553_26060[(2)] = inst_22521);

(statearr_22553_26060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (1))){
var inst_22506 = cljs.core.seq(coll);
var inst_22507 = inst_22506;
var state_22546__$1 = (function (){var statearr_22558 = state_22546;
(statearr_22558[(7)] = inst_22507);

return statearr_22558;
})();
var statearr_22562_26061 = state_22546__$1;
(statearr_22562_26061[(2)] = null);

(statearr_22562_26061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (4))){
var inst_22507 = (state_22546[(7)]);
var inst_22519 = cljs.core.first(inst_22507);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22546__$1,(7),ch,inst_22519);
} else {
if((state_val_22547 === (13))){
var inst_22537 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22568_26062 = state_22546__$1;
(statearr_22568_26062[(2)] = inst_22537);

(statearr_22568_26062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (6))){
var inst_22524 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22524)){
var statearr_22572_26066 = state_22546__$1;
(statearr_22572_26066[(1)] = (8));

} else {
var statearr_22573_26067 = state_22546__$1;
(statearr_22573_26067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (3))){
var inst_22541 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22546__$1,inst_22541);
} else {
if((state_val_22547 === (12))){
var state_22546__$1 = state_22546;
var statearr_22581_26068 = state_22546__$1;
(statearr_22581_26068[(2)] = null);

(statearr_22581_26068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (2))){
var inst_22507 = (state_22546[(7)]);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22507)){
var statearr_22582_26069 = state_22546__$1;
(statearr_22582_26069[(1)] = (4));

} else {
var statearr_22583_26070 = state_22546__$1;
(statearr_22583_26070[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (11))){
var inst_22533 = cljs.core.async.close_BANG_(ch);
var state_22546__$1 = state_22546;
var statearr_22587_26071 = state_22546__$1;
(statearr_22587_26071[(2)] = inst_22533);

(statearr_22587_26071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (9))){
var state_22546__$1 = state_22546;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22588_26072 = state_22546__$1;
(statearr_22588_26072[(1)] = (11));

} else {
var statearr_22589_26073 = state_22546__$1;
(statearr_22589_26073[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (5))){
var inst_22507 = (state_22546[(7)]);
var state_22546__$1 = state_22546;
var statearr_22594_26076 = state_22546__$1;
(statearr_22594_26076[(2)] = inst_22507);

(statearr_22594_26076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (10))){
var inst_22539 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22595_26078 = state_22546__$1;
(statearr_22595_26078[(2)] = inst_22539);

(statearr_22595_26078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (8))){
var inst_22507 = (state_22546[(7)]);
var inst_22528 = cljs.core.next(inst_22507);
var inst_22507__$1 = inst_22528;
var state_22546__$1 = (function (){var statearr_22597 = state_22546;
(statearr_22597[(7)] = inst_22507__$1);

return statearr_22597;
})();
var statearr_22599_26079 = state_22546__$1;
(statearr_22599_26079[(2)] = null);

(statearr_22599_26079[(1)] = (2));


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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_22605 = [null,null,null,null,null,null,null,null];
(statearr_22605[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_22605[(1)] = (1));

return statearr_22605;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_22546){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_22546);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e22609){var ex__19219__auto__ = e22609;
var statearr_22610_26082 = state_22546;
(statearr_22610_26082[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_22546[(4)]))){
var statearr_22613_26085 = state_22546;
(statearr_22613_26085[(1)] = cljs.core.first((state_22546[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26086 = state_22546;
state_22546 = G__26086;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_22546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_22546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_22614 = f__20639__auto__();
(statearr_22614[(6)] = c__20638__auto__);

return statearr_22614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));

return c__20638__auto__;
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
var G__22622 = arguments.length;
switch (G__22622) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_26090 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_26090(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_26091 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_26091(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_26093 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_26093(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_26097 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_26097(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22687 = (function (ch,cs,meta22688){
this.ch = ch;
this.cs = cs;
this.meta22688 = meta22688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22689,meta22688__$1){
var self__ = this;
var _22689__$1 = this;
return (new cljs.core.async.t_cljs$core$async22687(self__.ch,self__.cs,meta22688__$1));
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22689){
var self__ = this;
var _22689__$1 = this;
return self__.meta22688;
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async22687.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async22687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22688","meta22688",-1061931682,null)], null);
}));

(cljs.core.async.t_cljs$core$async22687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22687");

(cljs.core.async.t_cljs$core$async22687.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22687.
 */
cljs.core.async.__GT_t_cljs$core$async22687 = (function cljs$core$async$__GT_t_cljs$core$async22687(ch,cs,meta22688){
return (new cljs.core.async.t_cljs$core$async22687(ch,cs,meta22688));
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
var m = (new cljs.core.async.t_cljs$core$async22687(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__20638__auto___26105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_22862){
var state_val_22865 = (state_22862[(1)]);
if((state_val_22865 === (7))){
var inst_22858 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22873_26106 = state_22862__$1;
(statearr_22873_26106[(2)] = inst_22858);

(statearr_22873_26106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (20))){
var inst_22751 = (state_22862[(7)]);
var inst_22765 = cljs.core.first(inst_22751);
var inst_22766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22765,(0),null);
var inst_22767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22765,(1),null);
var state_22862__$1 = (function (){var statearr_22874 = state_22862;
(statearr_22874[(8)] = inst_22766);

return statearr_22874;
})();
if(cljs.core.truth_(inst_22767)){
var statearr_22875_26107 = state_22862__$1;
(statearr_22875_26107[(1)] = (22));

} else {
var statearr_22876_26108 = state_22862__$1;
(statearr_22876_26108[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (27))){
var inst_22804 = (state_22862[(9)]);
var inst_22799 = (state_22862[(10)]);
var inst_22717 = (state_22862[(11)]);
var inst_22797 = (state_22862[(12)]);
var inst_22804__$1 = cljs.core._nth(inst_22797,inst_22799);
var inst_22805 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22804__$1,inst_22717,done);
var state_22862__$1 = (function (){var statearr_22882 = state_22862;
(statearr_22882[(9)] = inst_22804__$1);

return statearr_22882;
})();
if(cljs.core.truth_(inst_22805)){
var statearr_22883_26109 = state_22862__$1;
(statearr_22883_26109[(1)] = (30));

} else {
var statearr_22884_26110 = state_22862__$1;
(statearr_22884_26110[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (1))){
var state_22862__$1 = state_22862;
var statearr_22885_26111 = state_22862__$1;
(statearr_22885_26111[(2)] = null);

(statearr_22885_26111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (24))){
var inst_22751 = (state_22862[(7)]);
var inst_22774 = (state_22862[(2)]);
var inst_22775 = cljs.core.next(inst_22751);
var inst_22728 = inst_22775;
var inst_22729 = null;
var inst_22730 = (0);
var inst_22731 = (0);
var state_22862__$1 = (function (){var statearr_22888 = state_22862;
(statearr_22888[(13)] = inst_22728);

(statearr_22888[(14)] = inst_22729);

(statearr_22888[(15)] = inst_22730);

(statearr_22888[(16)] = inst_22774);

(statearr_22888[(17)] = inst_22731);

return statearr_22888;
})();
var statearr_22891_26112 = state_22862__$1;
(statearr_22891_26112[(2)] = null);

(statearr_22891_26112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (39))){
var state_22862__$1 = state_22862;
var statearr_22899_26113 = state_22862__$1;
(statearr_22899_26113[(2)] = null);

(statearr_22899_26113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (4))){
var inst_22717 = (state_22862[(11)]);
var inst_22717__$1 = (state_22862[(2)]);
var inst_22718 = (inst_22717__$1 == null);
var state_22862__$1 = (function (){var statearr_22900 = state_22862;
(statearr_22900[(11)] = inst_22717__$1);

return statearr_22900;
})();
if(cljs.core.truth_(inst_22718)){
var statearr_22902_26114 = state_22862__$1;
(statearr_22902_26114[(1)] = (5));

} else {
var statearr_22903_26115 = state_22862__$1;
(statearr_22903_26115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (15))){
var inst_22728 = (state_22862[(13)]);
var inst_22729 = (state_22862[(14)]);
var inst_22730 = (state_22862[(15)]);
var inst_22731 = (state_22862[(17)]);
var inst_22747 = (state_22862[(2)]);
var inst_22748 = (inst_22731 + (1));
var tmp22894 = inst_22728;
var tmp22895 = inst_22729;
var tmp22896 = inst_22730;
var inst_22728__$1 = tmp22894;
var inst_22729__$1 = tmp22895;
var inst_22730__$1 = tmp22896;
var inst_22731__$1 = inst_22748;
var state_22862__$1 = (function (){var statearr_22906 = state_22862;
(statearr_22906[(18)] = inst_22747);

(statearr_22906[(13)] = inst_22728__$1);

(statearr_22906[(14)] = inst_22729__$1);

(statearr_22906[(15)] = inst_22730__$1);

(statearr_22906[(17)] = inst_22731__$1);

return statearr_22906;
})();
var statearr_22908_26116 = state_22862__$1;
(statearr_22908_26116[(2)] = null);

(statearr_22908_26116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (21))){
var inst_22778 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22924_26117 = state_22862__$1;
(statearr_22924_26117[(2)] = inst_22778);

(statearr_22924_26117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (31))){
var inst_22804 = (state_22862[(9)]);
var inst_22808 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_22804);
var state_22862__$1 = state_22862;
var statearr_22925_26120 = state_22862__$1;
(statearr_22925_26120[(2)] = inst_22808);

(statearr_22925_26120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (32))){
var inst_22799 = (state_22862[(10)]);
var inst_22797 = (state_22862[(12)]);
var inst_22798 = (state_22862[(19)]);
var inst_22796 = (state_22862[(20)]);
var inst_22810 = (state_22862[(2)]);
var inst_22811 = (inst_22799 + (1));
var tmp22918 = inst_22797;
var tmp22919 = inst_22798;
var tmp22920 = inst_22796;
var inst_22796__$1 = tmp22920;
var inst_22797__$1 = tmp22918;
var inst_22798__$1 = tmp22919;
var inst_22799__$1 = inst_22811;
var state_22862__$1 = (function (){var statearr_22938 = state_22862;
(statearr_22938[(10)] = inst_22799__$1);

(statearr_22938[(12)] = inst_22797__$1);

(statearr_22938[(19)] = inst_22798__$1);

(statearr_22938[(20)] = inst_22796__$1);

(statearr_22938[(21)] = inst_22810);

return statearr_22938;
})();
var statearr_22942_26124 = state_22862__$1;
(statearr_22942_26124[(2)] = null);

(statearr_22942_26124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (40))){
var inst_22825 = (state_22862[(22)]);
var inst_22829 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_22825);
var state_22862__$1 = state_22862;
var statearr_22943_26129 = state_22862__$1;
(statearr_22943_26129[(2)] = inst_22829);

(statearr_22943_26129[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (33))){
var inst_22814 = (state_22862[(23)]);
var inst_22816 = cljs.core.chunked_seq_QMARK_(inst_22814);
var state_22862__$1 = state_22862;
if(inst_22816){
var statearr_22944_26133 = state_22862__$1;
(statearr_22944_26133[(1)] = (36));

} else {
var statearr_22945_26136 = state_22862__$1;
(statearr_22945_26136[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (13))){
var inst_22741 = (state_22862[(24)]);
var inst_22744 = cljs.core.async.close_BANG_(inst_22741);
var state_22862__$1 = state_22862;
var statearr_22946_26138 = state_22862__$1;
(statearr_22946_26138[(2)] = inst_22744);

(statearr_22946_26138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (22))){
var inst_22766 = (state_22862[(8)]);
var inst_22770 = cljs.core.async.close_BANG_(inst_22766);
var state_22862__$1 = state_22862;
var statearr_22947_26139 = state_22862__$1;
(statearr_22947_26139[(2)] = inst_22770);

(statearr_22947_26139[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (36))){
var inst_22814 = (state_22862[(23)]);
var inst_22818 = cljs.core.chunk_first(inst_22814);
var inst_22819 = cljs.core.chunk_rest(inst_22814);
var inst_22820 = cljs.core.count(inst_22818);
var inst_22796 = inst_22819;
var inst_22797 = inst_22818;
var inst_22798 = inst_22820;
var inst_22799 = (0);
var state_22862__$1 = (function (){var statearr_22952 = state_22862;
(statearr_22952[(10)] = inst_22799);

(statearr_22952[(12)] = inst_22797);

(statearr_22952[(19)] = inst_22798);

(statearr_22952[(20)] = inst_22796);

return statearr_22952;
})();
var statearr_22956_26144 = state_22862__$1;
(statearr_22956_26144[(2)] = null);

(statearr_22956_26144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (41))){
var inst_22814 = (state_22862[(23)]);
var inst_22831 = (state_22862[(2)]);
var inst_22832 = cljs.core.next(inst_22814);
var inst_22796 = inst_22832;
var inst_22797 = null;
var inst_22798 = (0);
var inst_22799 = (0);
var state_22862__$1 = (function (){var statearr_22958 = state_22862;
(statearr_22958[(10)] = inst_22799);

(statearr_22958[(25)] = inst_22831);

(statearr_22958[(12)] = inst_22797);

(statearr_22958[(19)] = inst_22798);

(statearr_22958[(20)] = inst_22796);

return statearr_22958;
})();
var statearr_22962_26153 = state_22862__$1;
(statearr_22962_26153[(2)] = null);

(statearr_22962_26153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (43))){
var state_22862__$1 = state_22862;
var statearr_22965_26154 = state_22862__$1;
(statearr_22965_26154[(2)] = null);

(statearr_22965_26154[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (29))){
var inst_22840 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22966_26156 = state_22862__$1;
(statearr_22966_26156[(2)] = inst_22840);

(statearr_22966_26156[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (44))){
var inst_22855 = (state_22862[(2)]);
var state_22862__$1 = (function (){var statearr_22967 = state_22862;
(statearr_22967[(26)] = inst_22855);

return statearr_22967;
})();
var statearr_22970_26158 = state_22862__$1;
(statearr_22970_26158[(2)] = null);

(statearr_22970_26158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (6))){
var inst_22788 = (state_22862[(27)]);
var inst_22787 = cljs.core.deref(cs);
var inst_22788__$1 = cljs.core.keys(inst_22787);
var inst_22789 = cljs.core.count(inst_22788__$1);
var inst_22790 = cljs.core.reset_BANG_(dctr,inst_22789);
var inst_22795 = cljs.core.seq(inst_22788__$1);
var inst_22796 = inst_22795;
var inst_22797 = null;
var inst_22798 = (0);
var inst_22799 = (0);
var state_22862__$1 = (function (){var statearr_22974 = state_22862;
(statearr_22974[(10)] = inst_22799);

(statearr_22974[(12)] = inst_22797);

(statearr_22974[(19)] = inst_22798);

(statearr_22974[(27)] = inst_22788__$1);

(statearr_22974[(28)] = inst_22790);

(statearr_22974[(20)] = inst_22796);

return statearr_22974;
})();
var statearr_22978_26171 = state_22862__$1;
(statearr_22978_26171[(2)] = null);

(statearr_22978_26171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (28))){
var inst_22814 = (state_22862[(23)]);
var inst_22796 = (state_22862[(20)]);
var inst_22814__$1 = cljs.core.seq(inst_22796);
var state_22862__$1 = (function (){var statearr_22980 = state_22862;
(statearr_22980[(23)] = inst_22814__$1);

return statearr_22980;
})();
if(inst_22814__$1){
var statearr_22981_26172 = state_22862__$1;
(statearr_22981_26172[(1)] = (33));

} else {
var statearr_22982_26173 = state_22862__$1;
(statearr_22982_26173[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (25))){
var inst_22799 = (state_22862[(10)]);
var inst_22798 = (state_22862[(19)]);
var inst_22801 = (inst_22799 < inst_22798);
var inst_22802 = inst_22801;
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22802)){
var statearr_22983_26178 = state_22862__$1;
(statearr_22983_26178[(1)] = (27));

} else {
var statearr_22984_26179 = state_22862__$1;
(statearr_22984_26179[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (34))){
var state_22862__$1 = state_22862;
var statearr_22988_26181 = state_22862__$1;
(statearr_22988_26181[(2)] = null);

(statearr_22988_26181[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (17))){
var state_22862__$1 = state_22862;
var statearr_22991_26184 = state_22862__$1;
(statearr_22991_26184[(2)] = null);

(statearr_22991_26184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (3))){
var inst_22860 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22862__$1,inst_22860);
} else {
if((state_val_22865 === (12))){
var inst_22783 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22993_26188 = state_22862__$1;
(statearr_22993_26188[(2)] = inst_22783);

(statearr_22993_26188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (2))){
var state_22862__$1 = state_22862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22862__$1,(4),ch);
} else {
if((state_val_22865 === (23))){
var state_22862__$1 = state_22862;
var statearr_22995_26191 = state_22862__$1;
(statearr_22995_26191[(2)] = null);

(statearr_22995_26191[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (35))){
var inst_22838 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22996_26192 = state_22862__$1;
(statearr_22996_26192[(2)] = inst_22838);

(statearr_22996_26192[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (19))){
var inst_22751 = (state_22862[(7)]);
var inst_22755 = cljs.core.chunk_first(inst_22751);
var inst_22756 = cljs.core.chunk_rest(inst_22751);
var inst_22759 = cljs.core.count(inst_22755);
var inst_22728 = inst_22756;
var inst_22729 = inst_22755;
var inst_22730 = inst_22759;
var inst_22731 = (0);
var state_22862__$1 = (function (){var statearr_22999 = state_22862;
(statearr_22999[(13)] = inst_22728);

(statearr_22999[(14)] = inst_22729);

(statearr_22999[(15)] = inst_22730);

(statearr_22999[(17)] = inst_22731);

return statearr_22999;
})();
var statearr_23000_26195 = state_22862__$1;
(statearr_23000_26195[(2)] = null);

(statearr_23000_26195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (11))){
var inst_22728 = (state_22862[(13)]);
var inst_22751 = (state_22862[(7)]);
var inst_22751__$1 = cljs.core.seq(inst_22728);
var state_22862__$1 = (function (){var statearr_23001 = state_22862;
(statearr_23001[(7)] = inst_22751__$1);

return statearr_23001;
})();
if(inst_22751__$1){
var statearr_23002_26199 = state_22862__$1;
(statearr_23002_26199[(1)] = (16));

} else {
var statearr_23003_26200 = state_22862__$1;
(statearr_23003_26200[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (9))){
var inst_22785 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_23010_26205 = state_22862__$1;
(statearr_23010_26205[(2)] = inst_22785);

(statearr_23010_26205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (5))){
var inst_22726 = cljs.core.deref(cs);
var inst_22727 = cljs.core.seq(inst_22726);
var inst_22728 = inst_22727;
var inst_22729 = null;
var inst_22730 = (0);
var inst_22731 = (0);
var state_22862__$1 = (function (){var statearr_23015 = state_22862;
(statearr_23015[(13)] = inst_22728);

(statearr_23015[(14)] = inst_22729);

(statearr_23015[(15)] = inst_22730);

(statearr_23015[(17)] = inst_22731);

return statearr_23015;
})();
var statearr_23016_26211 = state_22862__$1;
(statearr_23016_26211[(2)] = null);

(statearr_23016_26211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (14))){
var state_22862__$1 = state_22862;
var statearr_23020_26216 = state_22862__$1;
(statearr_23020_26216[(2)] = null);

(statearr_23020_26216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (45))){
var inst_22852 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_23023_26217 = state_22862__$1;
(statearr_23023_26217[(2)] = inst_22852);

(statearr_23023_26217[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (26))){
var inst_22788 = (state_22862[(27)]);
var inst_22842 = (state_22862[(2)]);
var inst_22848 = cljs.core.seq(inst_22788);
var state_22862__$1 = (function (){var statearr_23027 = state_22862;
(statearr_23027[(29)] = inst_22842);

return statearr_23027;
})();
if(inst_22848){
var statearr_23028_26223 = state_22862__$1;
(statearr_23028_26223[(1)] = (42));

} else {
var statearr_23029_26228 = state_22862__$1;
(statearr_23029_26228[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (16))){
var inst_22751 = (state_22862[(7)]);
var inst_22753 = cljs.core.chunked_seq_QMARK_(inst_22751);
var state_22862__$1 = state_22862;
if(inst_22753){
var statearr_23030_26229 = state_22862__$1;
(statearr_23030_26229[(1)] = (19));

} else {
var statearr_23031_26230 = state_22862__$1;
(statearr_23031_26230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (38))){
var inst_22835 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_23032_26231 = state_22862__$1;
(statearr_23032_26231[(2)] = inst_22835);

(statearr_23032_26231[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (30))){
var state_22862__$1 = state_22862;
var statearr_23035_26232 = state_22862__$1;
(statearr_23035_26232[(2)] = null);

(statearr_23035_26232[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (10))){
var inst_22729 = (state_22862[(14)]);
var inst_22731 = (state_22862[(17)]);
var inst_22740 = cljs.core._nth(inst_22729,inst_22731);
var inst_22741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22740,(0),null);
var inst_22742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22740,(1),null);
var state_22862__$1 = (function (){var statearr_23037 = state_22862;
(statearr_23037[(24)] = inst_22741);

return statearr_23037;
})();
if(cljs.core.truth_(inst_22742)){
var statearr_23038_26234 = state_22862__$1;
(statearr_23038_26234[(1)] = (13));

} else {
var statearr_23040_26235 = state_22862__$1;
(statearr_23040_26235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (18))){
var inst_22781 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_23043_26238 = state_22862__$1;
(statearr_23043_26238[(2)] = inst_22781);

(statearr_23043_26238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (42))){
var state_22862__$1 = state_22862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22862__$1,(45),dchan);
} else {
if((state_val_22865 === (37))){
var inst_22717 = (state_22862[(11)]);
var inst_22825 = (state_22862[(22)]);
var inst_22814 = (state_22862[(23)]);
var inst_22825__$1 = cljs.core.first(inst_22814);
var inst_22826 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22825__$1,inst_22717,done);
var state_22862__$1 = (function (){var statearr_23044 = state_22862;
(statearr_23044[(22)] = inst_22825__$1);

return statearr_23044;
})();
if(cljs.core.truth_(inst_22826)){
var statearr_23046_26242 = state_22862__$1;
(statearr_23046_26242[(1)] = (39));

} else {
var statearr_23048_26243 = state_22862__$1;
(statearr_23048_26243[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (8))){
var inst_22730 = (state_22862[(15)]);
var inst_22731 = (state_22862[(17)]);
var inst_22733 = (inst_22731 < inst_22730);
var inst_22734 = inst_22733;
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22734)){
var statearr_23049_26244 = state_22862__$1;
(statearr_23049_26244[(1)] = (10));

} else {
var statearr_23050_26245 = state_22862__$1;
(statearr_23050_26245[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__19216__auto__ = null;
var cljs$core$async$mult_$_state_machine__19216__auto____0 = (function (){
var statearr_23055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23055[(0)] = cljs$core$async$mult_$_state_machine__19216__auto__);

(statearr_23055[(1)] = (1));

return statearr_23055;
});
var cljs$core$async$mult_$_state_machine__19216__auto____1 = (function (state_22862){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_22862);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e23056){var ex__19219__auto__ = e23056;
var statearr_23057_26248 = state_22862;
(statearr_23057_26248[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_22862[(4)]))){
var statearr_23059_26249 = state_22862;
(statearr_23059_26249[(1)] = cljs.core.first((state_22862[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26250 = state_22862;
state_22862 = G__26250;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19216__auto__ = function(state_22862){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19216__auto____1.call(this,state_22862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19216__auto____0;
cljs$core$async$mult_$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19216__auto____1;
return cljs$core$async$mult_$_state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_23061 = f__20639__auto__();
(statearr_23061[(6)] = c__20638__auto___26105);

return statearr_23061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
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
var G__23068 = arguments.length;
switch (G__23068) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_26255 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_26255(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_26266 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_26266(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_26269 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_26269(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_26275 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_26275(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_26278 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_26278(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26282 = arguments.length;
var i__5727__auto___26283 = (0);
while(true){
if((i__5727__auto___26283 < len__5726__auto___26282)){
args__5732__auto__.push((arguments[i__5727__auto___26283]));

var G__26284 = (i__5727__auto___26283 + (1));
i__5727__auto___26283 = G__26284;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23106){
var map__23107 = p__23106;
var map__23107__$1 = cljs.core.__destructure_map(map__23107);
var opts = map__23107__$1;
var statearr_23108_26286 = state;
(statearr_23108_26286[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_23110_26287 = state;
(statearr_23110_26287[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_23112_26288 = state;
(statearr_23112_26288[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23100){
var G__23101 = cljs.core.first(seq23100);
var seq23100__$1 = cljs.core.next(seq23100);
var G__23102 = cljs.core.first(seq23100__$1);
var seq23100__$2 = cljs.core.next(seq23100__$1);
var G__23103 = cljs.core.first(seq23100__$2);
var seq23100__$3 = cljs.core.next(seq23100__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23101,G__23102,G__23103,seq23100__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23145 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23146){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23146 = meta23146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23147,meta23146__$1){
var self__ = this;
var _23147__$1 = this;
return (new cljs.core.async.t_cljs$core$async23145(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23146__$1));
}));

(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23147){
var self__ = this;
var _23147__$1 = this;
return self__.meta23146;
}));

(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23145.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async23145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23146","meta23146",-1754457469,null)], null);
}));

(cljs.core.async.t_cljs$core$async23145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23145");

(cljs.core.async.t_cljs$core$async23145.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23145.
 */
cljs.core.async.__GT_t_cljs$core$async23145 = (function cljs$core$async$__GT_t_cljs$core$async23145(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23146){
return (new cljs.core.async.t_cljs$core$async23145(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23146));
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
var m = (new cljs.core.async.t_cljs$core$async23145(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__20638__auto___26297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_23293){
var state_val_23294 = (state_23293[(1)]);
if((state_val_23294 === (7))){
var inst_23246 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
if(cljs.core.truth_(inst_23246)){
var statearr_23303_26299 = state_23293__$1;
(statearr_23303_26299[(1)] = (8));

} else {
var statearr_23305_26300 = state_23293__$1;
(statearr_23305_26300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (20))){
var inst_23239 = (state_23293[(7)]);
var state_23293__$1 = state_23293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23293__$1,(23),out,inst_23239);
} else {
if((state_val_23294 === (1))){
var inst_23208 = calc_state();
var inst_23209 = cljs.core.__destructure_map(inst_23208);
var inst_23215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23209,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23209,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23209,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23220 = inst_23208;
var state_23293__$1 = (function (){var statearr_23314 = state_23293;
(statearr_23314[(8)] = inst_23216);

(statearr_23314[(9)] = inst_23219);

(statearr_23314[(10)] = inst_23220);

(statearr_23314[(11)] = inst_23215);

return statearr_23314;
})();
var statearr_23315_26301 = state_23293__$1;
(statearr_23315_26301[(2)] = null);

(statearr_23315_26301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (24))){
var inst_23227 = (state_23293[(12)]);
var inst_23220 = inst_23227;
var state_23293__$1 = (function (){var statearr_23319 = state_23293;
(statearr_23319[(10)] = inst_23220);

return statearr_23319;
})();
var statearr_23322_26302 = state_23293__$1;
(statearr_23322_26302[(2)] = null);

(statearr_23322_26302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (4))){
var inst_23239 = (state_23293[(7)]);
var inst_23241 = (state_23293[(13)]);
var inst_23235 = (state_23293[(2)]);
var inst_23239__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23235,(0),null);
var inst_23240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23235,(1),null);
var inst_23241__$1 = (inst_23239__$1 == null);
var state_23293__$1 = (function (){var statearr_23328 = state_23293;
(statearr_23328[(14)] = inst_23240);

(statearr_23328[(7)] = inst_23239__$1);

(statearr_23328[(13)] = inst_23241__$1);

return statearr_23328;
})();
if(cljs.core.truth_(inst_23241__$1)){
var statearr_23329_26303 = state_23293__$1;
(statearr_23329_26303[(1)] = (5));

} else {
var statearr_23331_26304 = state_23293__$1;
(statearr_23331_26304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (15))){
var inst_23263 = (state_23293[(15)]);
var inst_23228 = (state_23293[(16)]);
var inst_23263__$1 = cljs.core.empty_QMARK_(inst_23228);
var state_23293__$1 = (function (){var statearr_23334 = state_23293;
(statearr_23334[(15)] = inst_23263__$1);

return statearr_23334;
})();
if(inst_23263__$1){
var statearr_23336_26305 = state_23293__$1;
(statearr_23336_26305[(1)] = (17));

} else {
var statearr_23337_26306 = state_23293__$1;
(statearr_23337_26306[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (21))){
var inst_23227 = (state_23293[(12)]);
var inst_23220 = inst_23227;
var state_23293__$1 = (function (){var statearr_23341 = state_23293;
(statearr_23341[(10)] = inst_23220);

return statearr_23341;
})();
var statearr_23345_26307 = state_23293__$1;
(statearr_23345_26307[(2)] = null);

(statearr_23345_26307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (13))){
var inst_23253 = (state_23293[(2)]);
var inst_23254 = calc_state();
var inst_23220 = inst_23254;
var state_23293__$1 = (function (){var statearr_23351 = state_23293;
(statearr_23351[(10)] = inst_23220);

(statearr_23351[(17)] = inst_23253);

return statearr_23351;
})();
var statearr_23352_26308 = state_23293__$1;
(statearr_23352_26308[(2)] = null);

(statearr_23352_26308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (22))){
var inst_23284 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23353_26309 = state_23293__$1;
(statearr_23353_26309[(2)] = inst_23284);

(statearr_23353_26309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (6))){
var inst_23240 = (state_23293[(14)]);
var inst_23244 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23240,change);
var state_23293__$1 = state_23293;
var statearr_23354_26310 = state_23293__$1;
(statearr_23354_26310[(2)] = inst_23244);

(statearr_23354_26310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (25))){
var state_23293__$1 = state_23293;
var statearr_23358_26312 = state_23293__$1;
(statearr_23358_26312[(2)] = null);

(statearr_23358_26312[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (17))){
var inst_23240 = (state_23293[(14)]);
var inst_23229 = (state_23293[(18)]);
var inst_23266 = (inst_23229.cljs$core$IFn$_invoke$arity$1 ? inst_23229.cljs$core$IFn$_invoke$arity$1(inst_23240) : inst_23229.call(null, inst_23240));
var inst_23267 = cljs.core.not(inst_23266);
var state_23293__$1 = state_23293;
var statearr_23360_26313 = state_23293__$1;
(statearr_23360_26313[(2)] = inst_23267);

(statearr_23360_26313[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (3))){
var inst_23289 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23293__$1,inst_23289);
} else {
if((state_val_23294 === (12))){
var state_23293__$1 = state_23293;
var statearr_23363_26316 = state_23293__$1;
(statearr_23363_26316[(2)] = null);

(statearr_23363_26316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (2))){
var inst_23227 = (state_23293[(12)]);
var inst_23220 = (state_23293[(10)]);
var inst_23227__$1 = cljs.core.__destructure_map(inst_23220);
var inst_23228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23227__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23227__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23227__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23293__$1 = (function (){var statearr_23378 = state_23293;
(statearr_23378[(12)] = inst_23227__$1);

(statearr_23378[(16)] = inst_23228);

(statearr_23378[(18)] = inst_23229);

return statearr_23378;
})();
return cljs.core.async.ioc_alts_BANG_(state_23293__$1,(4),inst_23230);
} else {
if((state_val_23294 === (23))){
var inst_23275 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
if(cljs.core.truth_(inst_23275)){
var statearr_23384_26317 = state_23293__$1;
(statearr_23384_26317[(1)] = (24));

} else {
var statearr_23385_26318 = state_23293__$1;
(statearr_23385_26318[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (19))){
var inst_23270 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23388_26319 = state_23293__$1;
(statearr_23388_26319[(2)] = inst_23270);

(statearr_23388_26319[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (11))){
var inst_23240 = (state_23293[(14)]);
var inst_23250 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23240);
var state_23293__$1 = state_23293;
var statearr_23398_26321 = state_23293__$1;
(statearr_23398_26321[(2)] = inst_23250);

(statearr_23398_26321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (9))){
var inst_23228 = (state_23293[(16)]);
var inst_23257 = (state_23293[(19)]);
var inst_23240 = (state_23293[(14)]);
var inst_23257__$1 = (inst_23228.cljs$core$IFn$_invoke$arity$1 ? inst_23228.cljs$core$IFn$_invoke$arity$1(inst_23240) : inst_23228.call(null, inst_23240));
var state_23293__$1 = (function (){var statearr_23408 = state_23293;
(statearr_23408[(19)] = inst_23257__$1);

return statearr_23408;
})();
if(cljs.core.truth_(inst_23257__$1)){
var statearr_23415_26324 = state_23293__$1;
(statearr_23415_26324[(1)] = (14));

} else {
var statearr_23419_26325 = state_23293__$1;
(statearr_23419_26325[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (5))){
var inst_23241 = (state_23293[(13)]);
var state_23293__$1 = state_23293;
var statearr_23420_26326 = state_23293__$1;
(statearr_23420_26326[(2)] = inst_23241);

(statearr_23420_26326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (14))){
var inst_23257 = (state_23293[(19)]);
var state_23293__$1 = state_23293;
var statearr_23425_26327 = state_23293__$1;
(statearr_23425_26327[(2)] = inst_23257);

(statearr_23425_26327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (26))){
var inst_23280 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23435_26328 = state_23293__$1;
(statearr_23435_26328[(2)] = inst_23280);

(statearr_23435_26328[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (16))){
var inst_23272 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
if(cljs.core.truth_(inst_23272)){
var statearr_23436_26329 = state_23293__$1;
(statearr_23436_26329[(1)] = (20));

} else {
var statearr_23437_26330 = state_23293__$1;
(statearr_23437_26330[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (10))){
var inst_23286 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23441_26331 = state_23293__$1;
(statearr_23441_26331[(2)] = inst_23286);

(statearr_23441_26331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (18))){
var inst_23263 = (state_23293[(15)]);
var state_23293__$1 = state_23293;
var statearr_23442_26336 = state_23293__$1;
(statearr_23442_26336[(2)] = inst_23263);

(statearr_23442_26336[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (8))){
var inst_23239 = (state_23293[(7)]);
var inst_23248 = (inst_23239 == null);
var state_23293__$1 = state_23293;
if(cljs.core.truth_(inst_23248)){
var statearr_23443_26337 = state_23293__$1;
(statearr_23443_26337[(1)] = (11));

} else {
var statearr_23444_26338 = state_23293__$1;
(statearr_23444_26338[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__19216__auto__ = null;
var cljs$core$async$mix_$_state_machine__19216__auto____0 = (function (){
var statearr_23446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23446[(0)] = cljs$core$async$mix_$_state_machine__19216__auto__);

(statearr_23446[(1)] = (1));

return statearr_23446;
});
var cljs$core$async$mix_$_state_machine__19216__auto____1 = (function (state_23293){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_23293);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e23447){var ex__19219__auto__ = e23447;
var statearr_23448_26339 = state_23293;
(statearr_23448_26339[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_23293[(4)]))){
var statearr_23449_26340 = state_23293;
(statearr_23449_26340[(1)] = cljs.core.first((state_23293[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26341 = state_23293;
state_23293 = G__26341;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19216__auto__ = function(state_23293){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19216__auto____1.call(this,state_23293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19216__auto____0;
cljs$core$async$mix_$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19216__auto____1;
return cljs$core$async$mix_$_state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_23460 = f__20639__auto__();
(statearr_23460[(6)] = c__20638__auto___26297);

return statearr_23460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_26343 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_26343(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_26347 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_26347(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_26349 = (function() {
var G__26351 = null;
var G__26351__1 = (function (p){
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
var G__26351__2 = (function (p,v){
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
G__26351 = function(p,v){
switch(arguments.length){
case 1:
return G__26351__1.call(this,p);
case 2:
return G__26351__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26351.cljs$core$IFn$_invoke$arity$1 = G__26351__1;
G__26351.cljs$core$IFn$_invoke$arity$2 = G__26351__2;
return G__26351;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23561 = arguments.length;
switch (G__23561) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26349(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26349(p,v);
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
cljs.core.async.t_cljs$core$async23604 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23605){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23605 = meta23605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23606,meta23605__$1){
var self__ = this;
var _23606__$1 = this;
return (new cljs.core.async.t_cljs$core$async23604(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23605__$1));
}));

(cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23606){
var self__ = this;
var _23606__$1 = this;
return self__.meta23605;
}));

(cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async23604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23605","meta23605",-1203297905,null)], null);
}));

(cljs.core.async.t_cljs$core$async23604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23604");

(cljs.core.async.t_cljs$core$async23604.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23604.
 */
cljs.core.async.__GT_t_cljs$core$async23604 = (function cljs$core$async$__GT_t_cljs$core$async23604(ch,topic_fn,buf_fn,mults,ensure_mult,meta23605){
return (new cljs.core.async.t_cljs$core$async23604(ch,topic_fn,buf_fn,mults,ensure_mult,meta23605));
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
var G__23592 = arguments.length;
switch (G__23592) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__23588_SHARP_){
if(cljs.core.truth_((p1__23588_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23588_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23588_SHARP_.call(null, topic)))){
return p1__23588_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23588_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async23604(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__20638__auto___26360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_23806){
var state_val_23807 = (state_23806[(1)]);
if((state_val_23807 === (7))){
var inst_23790 = (state_23806[(2)]);
var state_23806__$1 = state_23806;
var statearr_23816_26361 = state_23806__$1;
(statearr_23816_26361[(2)] = inst_23790);

(statearr_23816_26361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (20))){
var state_23806__$1 = state_23806;
var statearr_23817_26363 = state_23806__$1;
(statearr_23817_26363[(2)] = null);

(statearr_23817_26363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (1))){
var state_23806__$1 = state_23806;
var statearr_23820_26364 = state_23806__$1;
(statearr_23820_26364[(2)] = null);

(statearr_23820_26364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (24))){
var inst_23756 = (state_23806[(7)]);
var inst_23781 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23756);
var state_23806__$1 = state_23806;
var statearr_23824_26365 = state_23806__$1;
(statearr_23824_26365[(2)] = inst_23781);

(statearr_23824_26365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (4))){
var inst_23642 = (state_23806[(8)]);
var inst_23642__$1 = (state_23806[(2)]);
var inst_23643 = (inst_23642__$1 == null);
var state_23806__$1 = (function (){var statearr_23828 = state_23806;
(statearr_23828[(8)] = inst_23642__$1);

return statearr_23828;
})();
if(cljs.core.truth_(inst_23643)){
var statearr_23830_26366 = state_23806__$1;
(statearr_23830_26366[(1)] = (5));

} else {
var statearr_23833_26367 = state_23806__$1;
(statearr_23833_26367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (15))){
var inst_23746 = (state_23806[(2)]);
var state_23806__$1 = state_23806;
var statearr_23836_26370 = state_23806__$1;
(statearr_23836_26370[(2)] = inst_23746);

(statearr_23836_26370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (21))){
var inst_23786 = (state_23806[(2)]);
var state_23806__$1 = (function (){var statearr_23837 = state_23806;
(statearr_23837[(9)] = inst_23786);

return statearr_23837;
})();
var statearr_23838_26373 = state_23806__$1;
(statearr_23838_26373[(2)] = null);

(statearr_23838_26373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (13))){
var inst_23693 = (state_23806[(10)]);
var inst_23698 = cljs.core.chunked_seq_QMARK_(inst_23693);
var state_23806__$1 = state_23806;
if(inst_23698){
var statearr_23841_26375 = state_23806__$1;
(statearr_23841_26375[(1)] = (16));

} else {
var statearr_23842_26376 = state_23806__$1;
(statearr_23842_26376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (22))){
var inst_23778 = (state_23806[(2)]);
var state_23806__$1 = state_23806;
if(cljs.core.truth_(inst_23778)){
var statearr_23843_26377 = state_23806__$1;
(statearr_23843_26377[(1)] = (23));

} else {
var statearr_23844_26378 = state_23806__$1;
(statearr_23844_26378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (6))){
var inst_23756 = (state_23806[(7)]);
var inst_23766 = (state_23806[(11)]);
var inst_23642 = (state_23806[(8)]);
var inst_23756__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23642) : topic_fn.call(null, inst_23642));
var inst_23765 = cljs.core.deref(mults);
var inst_23766__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23765,inst_23756__$1);
var state_23806__$1 = (function (){var statearr_23847 = state_23806;
(statearr_23847[(7)] = inst_23756__$1);

(statearr_23847[(11)] = inst_23766__$1);

return statearr_23847;
})();
if(cljs.core.truth_(inst_23766__$1)){
var statearr_23855_26379 = state_23806__$1;
(statearr_23855_26379[(1)] = (19));

} else {
var statearr_23856_26380 = state_23806__$1;
(statearr_23856_26380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (25))){
var inst_23783 = (state_23806[(2)]);
var state_23806__$1 = state_23806;
var statearr_23858_26384 = state_23806__$1;
(statearr_23858_26384[(2)] = inst_23783);

(statearr_23858_26384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (17))){
var inst_23693 = (state_23806[(10)]);
var inst_23726 = cljs.core.first(inst_23693);
var inst_23727 = cljs.core.async.muxch_STAR_(inst_23726);
var inst_23728 = cljs.core.async.close_BANG_(inst_23727);
var inst_23729 = cljs.core.next(inst_23693);
var inst_23671 = inst_23729;
var inst_23672 = null;
var inst_23673 = (0);
var inst_23674 = (0);
var state_23806__$1 = (function (){var statearr_23860 = state_23806;
(statearr_23860[(12)] = inst_23673);

(statearr_23860[(13)] = inst_23674);

(statearr_23860[(14)] = inst_23672);

(statearr_23860[(15)] = inst_23671);

(statearr_23860[(16)] = inst_23728);

return statearr_23860;
})();
var statearr_23861_26387 = state_23806__$1;
(statearr_23861_26387[(2)] = null);

(statearr_23861_26387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (3))){
var inst_23792 = (state_23806[(2)]);
var state_23806__$1 = state_23806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23806__$1,inst_23792);
} else {
if((state_val_23807 === (12))){
var inst_23749 = (state_23806[(2)]);
var state_23806__$1 = state_23806;
var statearr_23863_26388 = state_23806__$1;
(statearr_23863_26388[(2)] = inst_23749);

(statearr_23863_26388[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (2))){
var state_23806__$1 = state_23806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23806__$1,(4),ch);
} else {
if((state_val_23807 === (23))){
var state_23806__$1 = state_23806;
var statearr_23865_26389 = state_23806__$1;
(statearr_23865_26389[(2)] = null);

(statearr_23865_26389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (19))){
var inst_23766 = (state_23806[(11)]);
var inst_23642 = (state_23806[(8)]);
var inst_23776 = cljs.core.async.muxch_STAR_(inst_23766);
var state_23806__$1 = state_23806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23806__$1,(22),inst_23776,inst_23642);
} else {
if((state_val_23807 === (11))){
var inst_23693 = (state_23806[(10)]);
var inst_23671 = (state_23806[(15)]);
var inst_23693__$1 = cljs.core.seq(inst_23671);
var state_23806__$1 = (function (){var statearr_23870 = state_23806;
(statearr_23870[(10)] = inst_23693__$1);

return statearr_23870;
})();
if(inst_23693__$1){
var statearr_23871_26393 = state_23806__$1;
(statearr_23871_26393[(1)] = (13));

} else {
var statearr_23873_26394 = state_23806__$1;
(statearr_23873_26394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (9))){
var inst_23751 = (state_23806[(2)]);
var state_23806__$1 = state_23806;
var statearr_23876_26395 = state_23806__$1;
(statearr_23876_26395[(2)] = inst_23751);

(statearr_23876_26395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (5))){
var inst_23664 = cljs.core.deref(mults);
var inst_23665 = cljs.core.vals(inst_23664);
var inst_23666 = cljs.core.seq(inst_23665);
var inst_23671 = inst_23666;
var inst_23672 = null;
var inst_23673 = (0);
var inst_23674 = (0);
var state_23806__$1 = (function (){var statearr_23886 = state_23806;
(statearr_23886[(12)] = inst_23673);

(statearr_23886[(13)] = inst_23674);

(statearr_23886[(14)] = inst_23672);

(statearr_23886[(15)] = inst_23671);

return statearr_23886;
})();
var statearr_23893_26396 = state_23806__$1;
(statearr_23893_26396[(2)] = null);

(statearr_23893_26396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (14))){
var state_23806__$1 = state_23806;
var statearr_23899_26397 = state_23806__$1;
(statearr_23899_26397[(2)] = null);

(statearr_23899_26397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (16))){
var inst_23693 = (state_23806[(10)]);
var inst_23700 = cljs.core.chunk_first(inst_23693);
var inst_23711 = cljs.core.chunk_rest(inst_23693);
var inst_23712 = cljs.core.count(inst_23700);
var inst_23671 = inst_23711;
var inst_23672 = inst_23700;
var inst_23673 = inst_23712;
var inst_23674 = (0);
var state_23806__$1 = (function (){var statearr_23909 = state_23806;
(statearr_23909[(12)] = inst_23673);

(statearr_23909[(13)] = inst_23674);

(statearr_23909[(14)] = inst_23672);

(statearr_23909[(15)] = inst_23671);

return statearr_23909;
})();
var statearr_23913_26399 = state_23806__$1;
(statearr_23913_26399[(2)] = null);

(statearr_23913_26399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (10))){
var inst_23673 = (state_23806[(12)]);
var inst_23674 = (state_23806[(13)]);
var inst_23672 = (state_23806[(14)]);
var inst_23671 = (state_23806[(15)]);
var inst_23687 = cljs.core._nth(inst_23672,inst_23674);
var inst_23688 = cljs.core.async.muxch_STAR_(inst_23687);
var inst_23689 = cljs.core.async.close_BANG_(inst_23688);
var inst_23690 = (inst_23674 + (1));
var tmp23896 = inst_23673;
var tmp23897 = inst_23672;
var tmp23898 = inst_23671;
var inst_23671__$1 = tmp23898;
var inst_23672__$1 = tmp23897;
var inst_23673__$1 = tmp23896;
var inst_23674__$1 = inst_23690;
var state_23806__$1 = (function (){var statearr_23916 = state_23806;
(statearr_23916[(12)] = inst_23673__$1);

(statearr_23916[(13)] = inst_23674__$1);

(statearr_23916[(14)] = inst_23672__$1);

(statearr_23916[(17)] = inst_23689);

(statearr_23916[(15)] = inst_23671__$1);

return statearr_23916;
})();
var statearr_23919_26405 = state_23806__$1;
(statearr_23919_26405[(2)] = null);

(statearr_23919_26405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (18))){
var inst_23740 = (state_23806[(2)]);
var state_23806__$1 = state_23806;
var statearr_23922_26406 = state_23806__$1;
(statearr_23922_26406[(2)] = inst_23740);

(statearr_23922_26406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23807 === (8))){
var inst_23673 = (state_23806[(12)]);
var inst_23674 = (state_23806[(13)]);
var inst_23677 = (inst_23674 < inst_23673);
var inst_23678 = inst_23677;
var state_23806__$1 = state_23806;
if(cljs.core.truth_(inst_23678)){
var statearr_23925_26408 = state_23806__$1;
(statearr_23925_26408[(1)] = (10));

} else {
var statearr_23926_26409 = state_23806__$1;
(statearr_23926_26409[(1)] = (11));

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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_23937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23937[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_23937[(1)] = (1));

return statearr_23937;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_23806){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_23806);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e23942){var ex__19219__auto__ = e23942;
var statearr_23944_26411 = state_23806;
(statearr_23944_26411[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_23806[(4)]))){
var statearr_23948_26412 = state_23806;
(statearr_23948_26412[(1)] = cljs.core.first((state_23806[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26413 = state_23806;
state_23806 = G__26413;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_23806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_23806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_23971 = f__20639__auto__();
(statearr_23971[(6)] = c__20638__auto___26360);

return statearr_23971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
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
var G__23978 = arguments.length;
switch (G__23978) {
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
var G__24003 = arguments.length;
switch (G__24003) {
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
var G__24025 = arguments.length;
switch (G__24025) {
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
var c__20638__auto___26426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_24123){
var state_val_24124 = (state_24123[(1)]);
if((state_val_24124 === (7))){
var state_24123__$1 = state_24123;
var statearr_24128_26427 = state_24123__$1;
(statearr_24128_26427[(2)] = null);

(statearr_24128_26427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (1))){
var state_24123__$1 = state_24123;
var statearr_24130_26428 = state_24123__$1;
(statearr_24130_26428[(2)] = null);

(statearr_24130_26428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (4))){
var inst_24050 = (state_24123[(7)]);
var inst_24051 = (state_24123[(8)]);
var inst_24053 = (inst_24051 < inst_24050);
var state_24123__$1 = state_24123;
if(cljs.core.truth_(inst_24053)){
var statearr_24136_26429 = state_24123__$1;
(statearr_24136_26429[(1)] = (6));

} else {
var statearr_24137_26430 = state_24123__$1;
(statearr_24137_26430[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (15))){
var inst_24107 = (state_24123[(9)]);
var inst_24113 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24107);
var state_24123__$1 = state_24123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24123__$1,(17),out,inst_24113);
} else {
if((state_val_24124 === (13))){
var inst_24107 = (state_24123[(9)]);
var inst_24107__$1 = (state_24123[(2)]);
var inst_24108 = cljs.core.some(cljs.core.nil_QMARK_,inst_24107__$1);
var state_24123__$1 = (function (){var statearr_24144 = state_24123;
(statearr_24144[(9)] = inst_24107__$1);

return statearr_24144;
})();
if(cljs.core.truth_(inst_24108)){
var statearr_24147_26434 = state_24123__$1;
(statearr_24147_26434[(1)] = (14));

} else {
var statearr_24149_26435 = state_24123__$1;
(statearr_24149_26435[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (6))){
var state_24123__$1 = state_24123;
var statearr_24150_26437 = state_24123__$1;
(statearr_24150_26437[(2)] = null);

(statearr_24150_26437[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (17))){
var inst_24115 = (state_24123[(2)]);
var state_24123__$1 = (function (){var statearr_24162 = state_24123;
(statearr_24162[(10)] = inst_24115);

return statearr_24162;
})();
var statearr_24172_26439 = state_24123__$1;
(statearr_24172_26439[(2)] = null);

(statearr_24172_26439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (3))){
var inst_24120 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24123__$1,inst_24120);
} else {
if((state_val_24124 === (12))){
var _ = (function (){var statearr_24176 = state_24123;
(statearr_24176[(4)] = cljs.core.rest((state_24123[(4)])));

return statearr_24176;
})();
var state_24123__$1 = state_24123;
var ex24161 = (state_24123__$1[(2)]);
var statearr_24177_26440 = state_24123__$1;
(statearr_24177_26440[(5)] = ex24161);


if((ex24161 instanceof Object)){
var statearr_24179_26441 = state_24123__$1;
(statearr_24179_26441[(1)] = (11));

(statearr_24179_26441[(5)] = null);

} else {
throw ex24161;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (2))){
var inst_24049 = cljs.core.reset_BANG_(dctr,cnt);
var inst_24050 = cnt;
var inst_24051 = (0);
var state_24123__$1 = (function (){var statearr_24187 = state_24123;
(statearr_24187[(7)] = inst_24050);

(statearr_24187[(8)] = inst_24051);

(statearr_24187[(11)] = inst_24049);

return statearr_24187;
})();
var statearr_24188_26445 = state_24123__$1;
(statearr_24188_26445[(2)] = null);

(statearr_24188_26445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (11))){
var inst_24070 = (state_24123[(2)]);
var inst_24071 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24123__$1 = (function (){var statearr_24192 = state_24123;
(statearr_24192[(12)] = inst_24070);

return statearr_24192;
})();
var statearr_24193_26447 = state_24123__$1;
(statearr_24193_26447[(2)] = inst_24071);

(statearr_24193_26447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (9))){
var inst_24051 = (state_24123[(8)]);
var _ = (function (){var statearr_24200 = state_24123;
(statearr_24200[(4)] = cljs.core.cons((12),(state_24123[(4)])));

return statearr_24200;
})();
var inst_24092 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24051) : chs__$1.call(null, inst_24051));
var inst_24093 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24051) : done.call(null, inst_24051));
var inst_24094 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24092,inst_24093);
var ___$1 = (function (){var statearr_24205 = state_24123;
(statearr_24205[(4)] = cljs.core.rest((state_24123[(4)])));

return statearr_24205;
})();
var state_24123__$1 = state_24123;
var statearr_24206_26448 = state_24123__$1;
(statearr_24206_26448[(2)] = inst_24094);

(statearr_24206_26448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (5))){
var inst_24105 = (state_24123[(2)]);
var state_24123__$1 = (function (){var statearr_24210 = state_24123;
(statearr_24210[(13)] = inst_24105);

return statearr_24210;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24123__$1,(13),dchan);
} else {
if((state_val_24124 === (14))){
var inst_24111 = cljs.core.async.close_BANG_(out);
var state_24123__$1 = state_24123;
var statearr_24216_26452 = state_24123__$1;
(statearr_24216_26452[(2)] = inst_24111);

(statearr_24216_26452[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (16))){
var inst_24118 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
var statearr_24217_26453 = state_24123__$1;
(statearr_24217_26453[(2)] = inst_24118);

(statearr_24217_26453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (10))){
var inst_24051 = (state_24123[(8)]);
var inst_24097 = (state_24123[(2)]);
var inst_24099 = (inst_24051 + (1));
var inst_24051__$1 = inst_24099;
var state_24123__$1 = (function (){var statearr_24218 = state_24123;
(statearr_24218[(14)] = inst_24097);

(statearr_24218[(8)] = inst_24051__$1);

return statearr_24218;
})();
var statearr_24219_26457 = state_24123__$1;
(statearr_24219_26457[(2)] = null);

(statearr_24219_26457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (8))){
var inst_24103 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
var statearr_24222_26461 = state_24123__$1;
(statearr_24222_26461[(2)] = inst_24103);

(statearr_24222_26461[(1)] = (5));


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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_24229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24229[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_24229[(1)] = (1));

return statearr_24229;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_24123){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_24123);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e24236){var ex__19219__auto__ = e24236;
var statearr_24237_26462 = state_24123;
(statearr_24237_26462[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_24123[(4)]))){
var statearr_24239_26463 = state_24123;
(statearr_24239_26463[(1)] = cljs.core.first((state_24123[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26464 = state_24123;
state_24123 = G__26464;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_24123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_24123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_24240 = f__20639__auto__();
(statearr_24240[(6)] = c__20638__auto___26426);

return statearr_24240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
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
var G__24255 = arguments.length;
switch (G__24255) {
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
var c__20638__auto___26466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_24299){
var state_val_24300 = (state_24299[(1)]);
if((state_val_24300 === (7))){
var inst_24272 = (state_24299[(7)]);
var inst_24271 = (state_24299[(8)]);
var inst_24271__$1 = (state_24299[(2)]);
var inst_24272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24271__$1,(0),null);
var inst_24273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24271__$1,(1),null);
var inst_24274 = (inst_24272__$1 == null);
var state_24299__$1 = (function (){var statearr_24306 = state_24299;
(statearr_24306[(7)] = inst_24272__$1);

(statearr_24306[(9)] = inst_24273);

(statearr_24306[(8)] = inst_24271__$1);

return statearr_24306;
})();
if(cljs.core.truth_(inst_24274)){
var statearr_24309_26467 = state_24299__$1;
(statearr_24309_26467[(1)] = (8));

} else {
var statearr_24310_26468 = state_24299__$1;
(statearr_24310_26468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (1))){
var inst_24261 = cljs.core.vec(chs);
var inst_24262 = inst_24261;
var state_24299__$1 = (function (){var statearr_24318 = state_24299;
(statearr_24318[(10)] = inst_24262);

return statearr_24318;
})();
var statearr_24319_26470 = state_24299__$1;
(statearr_24319_26470[(2)] = null);

(statearr_24319_26470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (4))){
var inst_24262 = (state_24299[(10)]);
var state_24299__$1 = state_24299;
return cljs.core.async.ioc_alts_BANG_(state_24299__$1,(7),inst_24262);
} else {
if((state_val_24300 === (6))){
var inst_24295 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
var statearr_24320_26472 = state_24299__$1;
(statearr_24320_26472[(2)] = inst_24295);

(statearr_24320_26472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (3))){
var inst_24297 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24299__$1,inst_24297);
} else {
if((state_val_24300 === (2))){
var inst_24262 = (state_24299[(10)]);
var inst_24264 = cljs.core.count(inst_24262);
var inst_24265 = (inst_24264 > (0));
var state_24299__$1 = state_24299;
if(cljs.core.truth_(inst_24265)){
var statearr_24325_26475 = state_24299__$1;
(statearr_24325_26475[(1)] = (4));

} else {
var statearr_24326_26476 = state_24299__$1;
(statearr_24326_26476[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (11))){
var inst_24262 = (state_24299[(10)]);
var inst_24286 = (state_24299[(2)]);
var tmp24321 = inst_24262;
var inst_24262__$1 = tmp24321;
var state_24299__$1 = (function (){var statearr_24330 = state_24299;
(statearr_24330[(11)] = inst_24286);

(statearr_24330[(10)] = inst_24262__$1);

return statearr_24330;
})();
var statearr_24331_26477 = state_24299__$1;
(statearr_24331_26477[(2)] = null);

(statearr_24331_26477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (9))){
var inst_24272 = (state_24299[(7)]);
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24299__$1,(11),out,inst_24272);
} else {
if((state_val_24300 === (5))){
var inst_24293 = cljs.core.async.close_BANG_(out);
var state_24299__$1 = state_24299;
var statearr_24344_26478 = state_24299__$1;
(statearr_24344_26478[(2)] = inst_24293);

(statearr_24344_26478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (10))){
var inst_24289 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
var statearr_24352_26480 = state_24299__$1;
(statearr_24352_26480[(2)] = inst_24289);

(statearr_24352_26480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (8))){
var inst_24262 = (state_24299[(10)]);
var inst_24272 = (state_24299[(7)]);
var inst_24273 = (state_24299[(9)]);
var inst_24271 = (state_24299[(8)]);
var inst_24278 = (function (){var cs = inst_24262;
var vec__24267 = inst_24271;
var v = inst_24272;
var c = inst_24273;
return (function (p1__24249_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24249_SHARP_);
});
})();
var inst_24282 = cljs.core.filterv(inst_24278,inst_24262);
var inst_24262__$1 = inst_24282;
var state_24299__$1 = (function (){var statearr_24354 = state_24299;
(statearr_24354[(10)] = inst_24262__$1);

return statearr_24354;
})();
var statearr_24355_26481 = state_24299__$1;
(statearr_24355_26481[(2)] = null);

(statearr_24355_26481[(1)] = (2));


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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_24356 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24356[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_24356[(1)] = (1));

return statearr_24356;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_24299){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_24299);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e24358){var ex__19219__auto__ = e24358;
var statearr_24362_26484 = state_24299;
(statearr_24362_26484[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_24299[(4)]))){
var statearr_24363_26485 = state_24299;
(statearr_24363_26485[(1)] = cljs.core.first((state_24299[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26486 = state_24299;
state_24299 = G__26486;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_24299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_24299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_24373 = f__20639__auto__();
(statearr_24373[(6)] = c__20638__auto___26466);

return statearr_24373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
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
var G__24385 = arguments.length;
switch (G__24385) {
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
var c__20638__auto___26491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_24424){
var state_val_24425 = (state_24424[(1)]);
if((state_val_24425 === (7))){
var inst_24404 = (state_24424[(7)]);
var inst_24404__$1 = (state_24424[(2)]);
var inst_24405 = (inst_24404__$1 == null);
var inst_24406 = cljs.core.not(inst_24405);
var state_24424__$1 = (function (){var statearr_24445 = state_24424;
(statearr_24445[(7)] = inst_24404__$1);

return statearr_24445;
})();
if(inst_24406){
var statearr_24451_26492 = state_24424__$1;
(statearr_24451_26492[(1)] = (8));

} else {
var statearr_24456_26493 = state_24424__$1;
(statearr_24456_26493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24425 === (1))){
var inst_24397 = (0);
var state_24424__$1 = (function (){var statearr_24460 = state_24424;
(statearr_24460[(8)] = inst_24397);

return statearr_24460;
})();
var statearr_24467_26494 = state_24424__$1;
(statearr_24467_26494[(2)] = null);

(statearr_24467_26494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24425 === (4))){
var state_24424__$1 = state_24424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24424__$1,(7),ch);
} else {
if((state_val_24425 === (6))){
var inst_24417 = (state_24424[(2)]);
var state_24424__$1 = state_24424;
var statearr_24489_26496 = state_24424__$1;
(statearr_24489_26496[(2)] = inst_24417);

(statearr_24489_26496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24425 === (3))){
var inst_24420 = (state_24424[(2)]);
var inst_24422 = cljs.core.async.close_BANG_(out);
var state_24424__$1 = (function (){var statearr_24490 = state_24424;
(statearr_24490[(9)] = inst_24420);

return statearr_24490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24424__$1,inst_24422);
} else {
if((state_val_24425 === (2))){
var inst_24397 = (state_24424[(8)]);
var inst_24400 = (inst_24397 < n);
var state_24424__$1 = state_24424;
if(cljs.core.truth_(inst_24400)){
var statearr_24495_26498 = state_24424__$1;
(statearr_24495_26498[(1)] = (4));

} else {
var statearr_24496_26499 = state_24424__$1;
(statearr_24496_26499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24425 === (11))){
var inst_24397 = (state_24424[(8)]);
var inst_24409 = (state_24424[(2)]);
var inst_24410 = (inst_24397 + (1));
var inst_24397__$1 = inst_24410;
var state_24424__$1 = (function (){var statearr_24497 = state_24424;
(statearr_24497[(10)] = inst_24409);

(statearr_24497[(8)] = inst_24397__$1);

return statearr_24497;
})();
var statearr_24499_26500 = state_24424__$1;
(statearr_24499_26500[(2)] = null);

(statearr_24499_26500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24425 === (9))){
var state_24424__$1 = state_24424;
var statearr_24501_26501 = state_24424__$1;
(statearr_24501_26501[(2)] = null);

(statearr_24501_26501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24425 === (5))){
var state_24424__$1 = state_24424;
var statearr_24503_26502 = state_24424__$1;
(statearr_24503_26502[(2)] = null);

(statearr_24503_26502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24425 === (10))){
var inst_24414 = (state_24424[(2)]);
var state_24424__$1 = state_24424;
var statearr_24505_26503 = state_24424__$1;
(statearr_24505_26503[(2)] = inst_24414);

(statearr_24505_26503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24425 === (8))){
var inst_24404 = (state_24424[(7)]);
var state_24424__$1 = state_24424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24424__$1,(11),out,inst_24404);
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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_24516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24516[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_24516[(1)] = (1));

return statearr_24516;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_24424){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_24424);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e24519){var ex__19219__auto__ = e24519;
var statearr_24520_26509 = state_24424;
(statearr_24520_26509[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_24424[(4)]))){
var statearr_24521_26510 = state_24424;
(statearr_24521_26510[(1)] = cljs.core.first((state_24424[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26511 = state_24424;
state_24424 = G__26511;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_24424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_24424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_24536 = f__20639__auto__();
(statearr_24536[(6)] = c__20638__auto___26491);

return statearr_24536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
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
cljs.core.async.t_cljs$core$async24591 = (function (f,ch,meta24574,_,fn1,meta24592){
this.f = f;
this.ch = ch;
this.meta24574 = meta24574;
this._ = _;
this.fn1 = fn1;
this.meta24592 = meta24592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24593,meta24592__$1){
var self__ = this;
var _24593__$1 = this;
return (new cljs.core.async.t_cljs$core$async24591(self__.f,self__.ch,self__.meta24574,self__._,self__.fn1,meta24592__$1));
}));

(cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24593){
var self__ = this;
var _24593__$1 = this;
return self__.meta24592;
}));

(cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__24554_SHARP_){
var G__24638 = (((p1__24554_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24554_SHARP_) : self__.f.call(null, p1__24554_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24638) : f1.call(null, G__24638));
});
}));

(cljs.core.async.t_cljs$core$async24591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24574","meta24574",-1568370000,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24573","cljs.core.async/t_cljs$core$async24573",-2072281726,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24592","meta24592",-244285144,null)], null);
}));

(cljs.core.async.t_cljs$core$async24591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24591");

(cljs.core.async.t_cljs$core$async24591.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24591.
 */
cljs.core.async.__GT_t_cljs$core$async24591 = (function cljs$core$async$__GT_t_cljs$core$async24591(f,ch,meta24574,_,fn1,meta24592){
return (new cljs.core.async.t_cljs$core$async24591(f,ch,meta24574,_,fn1,meta24592));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24573 = (function (f,ch,meta24574){
this.f = f;
this.ch = ch;
this.meta24574 = meta24574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24575,meta24574__$1){
var self__ = this;
var _24575__$1 = this;
return (new cljs.core.async.t_cljs$core$async24573(self__.f,self__.ch,meta24574__$1));
}));

(cljs.core.async.t_cljs$core$async24573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24575){
var self__ = this;
var _24575__$1 = this;
return self__.meta24574;
}));

(cljs.core.async.t_cljs$core$async24573.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24573.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24573.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async24591(self__.f,self__.ch,self__.meta24574,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24670 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24670) : self__.f.call(null, G__24670));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24573.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24574","meta24574",-1568370000,null)], null);
}));

(cljs.core.async.t_cljs$core$async24573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24573");

(cljs.core.async.t_cljs$core$async24573.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24573.
 */
cljs.core.async.__GT_t_cljs$core$async24573 = (function cljs$core$async$__GT_t_cljs$core$async24573(f,ch,meta24574){
return (new cljs.core.async.t_cljs$core$async24573(f,ch,meta24574));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async24573(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24716 = (function (f,ch,meta24717){
this.f = f;
this.ch = ch;
this.meta24717 = meta24717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24718,meta24717__$1){
var self__ = this;
var _24718__$1 = this;
return (new cljs.core.async.t_cljs$core$async24716(self__.f,self__.ch,meta24717__$1));
}));

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24718){
var self__ = this;
var _24718__$1 = this;
return self__.meta24717;
}));

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async24716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24717","meta24717",1142157757,null)], null);
}));

(cljs.core.async.t_cljs$core$async24716.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24716");

(cljs.core.async.t_cljs$core$async24716.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24716");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24716.
 */
cljs.core.async.__GT_t_cljs$core$async24716 = (function cljs$core$async$__GT_t_cljs$core$async24716(f,ch,meta24717){
return (new cljs.core.async.t_cljs$core$async24716(f,ch,meta24717));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async24716(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24745 = (function (p,ch,meta24746){
this.p = p;
this.ch = ch;
this.meta24746 = meta24746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24747,meta24746__$1){
var self__ = this;
var _24747__$1 = this;
return (new cljs.core.async.t_cljs$core$async24745(self__.p,self__.ch,meta24746__$1));
}));

(cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24747){
var self__ = this;
var _24747__$1 = this;
return self__.meta24746;
}));

(cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24746","meta24746",1667636856,null)], null);
}));

(cljs.core.async.t_cljs$core$async24745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24745");

(cljs.core.async.t_cljs$core$async24745.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24745.
 */
cljs.core.async.__GT_t_cljs$core$async24745 = (function cljs$core$async$__GT_t_cljs$core$async24745(p,ch,meta24746){
return (new cljs.core.async.t_cljs$core$async24745(p,ch,meta24746));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async24745(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24774 = arguments.length;
switch (G__24774) {
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
var c__20638__auto___26537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_24804){
var state_val_24805 = (state_24804[(1)]);
if((state_val_24805 === (7))){
var inst_24800 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24806_26538 = state_24804__$1;
(statearr_24806_26538[(2)] = inst_24800);

(statearr_24806_26538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (1))){
var state_24804__$1 = state_24804;
var statearr_24807_26539 = state_24804__$1;
(statearr_24807_26539[(2)] = null);

(statearr_24807_26539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (4))){
var inst_24786 = (state_24804[(7)]);
var inst_24786__$1 = (state_24804[(2)]);
var inst_24787 = (inst_24786__$1 == null);
var state_24804__$1 = (function (){var statearr_24808 = state_24804;
(statearr_24808[(7)] = inst_24786__$1);

return statearr_24808;
})();
if(cljs.core.truth_(inst_24787)){
var statearr_24809_26540 = state_24804__$1;
(statearr_24809_26540[(1)] = (5));

} else {
var statearr_24810_26541 = state_24804__$1;
(statearr_24810_26541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (6))){
var inst_24786 = (state_24804[(7)]);
var inst_24791 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24786) : p.call(null, inst_24786));
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24791)){
var statearr_24811_26542 = state_24804__$1;
(statearr_24811_26542[(1)] = (8));

} else {
var statearr_24812_26543 = state_24804__$1;
(statearr_24812_26543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (3))){
var inst_24802 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24804__$1,inst_24802);
} else {
if((state_val_24805 === (2))){
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24804__$1,(4),ch);
} else {
if((state_val_24805 === (11))){
var inst_24794 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24813_26544 = state_24804__$1;
(statearr_24813_26544[(2)] = inst_24794);

(statearr_24813_26544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (9))){
var state_24804__$1 = state_24804;
var statearr_24814_26546 = state_24804__$1;
(statearr_24814_26546[(2)] = null);

(statearr_24814_26546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (5))){
var inst_24789 = cljs.core.async.close_BANG_(out);
var state_24804__$1 = state_24804;
var statearr_24817_26550 = state_24804__$1;
(statearr_24817_26550[(2)] = inst_24789);

(statearr_24817_26550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (10))){
var inst_24797 = (state_24804[(2)]);
var state_24804__$1 = (function (){var statearr_24818 = state_24804;
(statearr_24818[(8)] = inst_24797);

return statearr_24818;
})();
var statearr_24819_26551 = state_24804__$1;
(statearr_24819_26551[(2)] = null);

(statearr_24819_26551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (8))){
var inst_24786 = (state_24804[(7)]);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24804__$1,(11),out,inst_24786);
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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_24820 = [null,null,null,null,null,null,null,null,null];
(statearr_24820[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_24820[(1)] = (1));

return statearr_24820;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_24804){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_24804);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e24822){var ex__19219__auto__ = e24822;
var statearr_24823_26552 = state_24804;
(statearr_24823_26552[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_24804[(4)]))){
var statearr_24824_26554 = state_24804;
(statearr_24824_26554[(1)] = cljs.core.first((state_24804[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26555 = state_24804;
state_24804 = G__26555;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_24804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_24804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_24827 = f__20639__auto__();
(statearr_24827[(6)] = c__20638__auto___26537);

return statearr_24827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24832 = arguments.length;
switch (G__24832) {
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
var c__20638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_24930){
var state_val_24931 = (state_24930[(1)]);
if((state_val_24931 === (7))){
var inst_24924 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
var statearr_24946_26557 = state_24930__$1;
(statearr_24946_26557[(2)] = inst_24924);

(statearr_24946_26557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (20))){
var inst_24886 = (state_24930[(7)]);
var inst_24901 = (state_24930[(2)]);
var inst_24902 = cljs.core.next(inst_24886);
var inst_24858 = inst_24902;
var inst_24859 = null;
var inst_24860 = (0);
var inst_24862 = (0);
var state_24930__$1 = (function (){var statearr_24947 = state_24930;
(statearr_24947[(8)] = inst_24858);

(statearr_24947[(9)] = inst_24901);

(statearr_24947[(10)] = inst_24859);

(statearr_24947[(11)] = inst_24860);

(statearr_24947[(12)] = inst_24862);

return statearr_24947;
})();
var statearr_24948_26561 = state_24930__$1;
(statearr_24948_26561[(2)] = null);

(statearr_24948_26561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (1))){
var state_24930__$1 = state_24930;
var statearr_24958_26562 = state_24930__$1;
(statearr_24958_26562[(2)] = null);

(statearr_24958_26562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (4))){
var inst_24847 = (state_24930[(13)]);
var inst_24847__$1 = (state_24930[(2)]);
var inst_24848 = (inst_24847__$1 == null);
var state_24930__$1 = (function (){var statearr_24959 = state_24930;
(statearr_24959[(13)] = inst_24847__$1);

return statearr_24959;
})();
if(cljs.core.truth_(inst_24848)){
var statearr_24966_26563 = state_24930__$1;
(statearr_24966_26563[(1)] = (5));

} else {
var statearr_24967_26566 = state_24930__$1;
(statearr_24967_26566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (15))){
var state_24930__$1 = state_24930;
var statearr_24971_26568 = state_24930__$1;
(statearr_24971_26568[(2)] = null);

(statearr_24971_26568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (21))){
var state_24930__$1 = state_24930;
var statearr_24987_26571 = state_24930__$1;
(statearr_24987_26571[(2)] = null);

(statearr_24987_26571[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (13))){
var inst_24858 = (state_24930[(8)]);
var inst_24859 = (state_24930[(10)]);
var inst_24860 = (state_24930[(11)]);
var inst_24862 = (state_24930[(12)]);
var inst_24878 = (state_24930[(2)]);
var inst_24879 = (inst_24862 + (1));
var tmp24968 = inst_24858;
var tmp24969 = inst_24859;
var tmp24970 = inst_24860;
var inst_24858__$1 = tmp24968;
var inst_24859__$1 = tmp24969;
var inst_24860__$1 = tmp24970;
var inst_24862__$1 = inst_24879;
var state_24930__$1 = (function (){var statearr_24999 = state_24930;
(statearr_24999[(8)] = inst_24858__$1);

(statearr_24999[(10)] = inst_24859__$1);

(statearr_24999[(11)] = inst_24860__$1);

(statearr_24999[(14)] = inst_24878);

(statearr_24999[(12)] = inst_24862__$1);

return statearr_24999;
})();
var statearr_25000_26572 = state_24930__$1;
(statearr_25000_26572[(2)] = null);

(statearr_25000_26572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (22))){
var state_24930__$1 = state_24930;
var statearr_25001_26573 = state_24930__$1;
(statearr_25001_26573[(2)] = null);

(statearr_25001_26573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (6))){
var inst_24847 = (state_24930[(13)]);
var inst_24856 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24847) : f.call(null, inst_24847));
var inst_24857 = cljs.core.seq(inst_24856);
var inst_24858 = inst_24857;
var inst_24859 = null;
var inst_24860 = (0);
var inst_24862 = (0);
var state_24930__$1 = (function (){var statearr_25005 = state_24930;
(statearr_25005[(8)] = inst_24858);

(statearr_25005[(10)] = inst_24859);

(statearr_25005[(11)] = inst_24860);

(statearr_25005[(12)] = inst_24862);

return statearr_25005;
})();
var statearr_25006_26574 = state_24930__$1;
(statearr_25006_26574[(2)] = null);

(statearr_25006_26574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (17))){
var inst_24886 = (state_24930[(7)]);
var inst_24890 = cljs.core.chunk_first(inst_24886);
var inst_24895 = cljs.core.chunk_rest(inst_24886);
var inst_24896 = cljs.core.count(inst_24890);
var inst_24858 = inst_24895;
var inst_24859 = inst_24890;
var inst_24860 = inst_24896;
var inst_24862 = (0);
var state_24930__$1 = (function (){var statearr_25030 = state_24930;
(statearr_25030[(8)] = inst_24858);

(statearr_25030[(10)] = inst_24859);

(statearr_25030[(11)] = inst_24860);

(statearr_25030[(12)] = inst_24862);

return statearr_25030;
})();
var statearr_25044_26576 = state_24930__$1;
(statearr_25044_26576[(2)] = null);

(statearr_25044_26576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (3))){
var inst_24926 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24930__$1,inst_24926);
} else {
if((state_val_24931 === (12))){
var inst_24911 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
var statearr_25085_26577 = state_24930__$1;
(statearr_25085_26577[(2)] = inst_24911);

(statearr_25085_26577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (2))){
var state_24930__$1 = state_24930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24930__$1,(4),in$);
} else {
if((state_val_24931 === (23))){
var inst_24922 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
var statearr_25100_26579 = state_24930__$1;
(statearr_25100_26579[(2)] = inst_24922);

(statearr_25100_26579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (19))){
var inst_24906 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
var statearr_25104_26580 = state_24930__$1;
(statearr_25104_26580[(2)] = inst_24906);

(statearr_25104_26580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (11))){
var inst_24858 = (state_24930[(8)]);
var inst_24886 = (state_24930[(7)]);
var inst_24886__$1 = cljs.core.seq(inst_24858);
var state_24930__$1 = (function (){var statearr_25110 = state_24930;
(statearr_25110[(7)] = inst_24886__$1);

return statearr_25110;
})();
if(inst_24886__$1){
var statearr_25112_26581 = state_24930__$1;
(statearr_25112_26581[(1)] = (14));

} else {
var statearr_25114_26582 = state_24930__$1;
(statearr_25114_26582[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (9))){
var inst_24913 = (state_24930[(2)]);
var inst_24914 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24930__$1 = (function (){var statearr_25115 = state_24930;
(statearr_25115[(15)] = inst_24913);

return statearr_25115;
})();
if(cljs.core.truth_(inst_24914)){
var statearr_25116_26583 = state_24930__$1;
(statearr_25116_26583[(1)] = (21));

} else {
var statearr_25117_26584 = state_24930__$1;
(statearr_25117_26584[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (5))){
var inst_24850 = cljs.core.async.close_BANG_(out);
var state_24930__$1 = state_24930;
var statearr_25118_26586 = state_24930__$1;
(statearr_25118_26586[(2)] = inst_24850);

(statearr_25118_26586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (14))){
var inst_24886 = (state_24930[(7)]);
var inst_24888 = cljs.core.chunked_seq_QMARK_(inst_24886);
var state_24930__$1 = state_24930;
if(inst_24888){
var statearr_25130_26587 = state_24930__$1;
(statearr_25130_26587[(1)] = (17));

} else {
var statearr_25131_26588 = state_24930__$1;
(statearr_25131_26588[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (16))){
var inst_24909 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
var statearr_25137_26590 = state_24930__$1;
(statearr_25137_26590[(2)] = inst_24909);

(statearr_25137_26590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (10))){
var inst_24859 = (state_24930[(10)]);
var inst_24862 = (state_24930[(12)]);
var inst_24876 = cljs.core._nth(inst_24859,inst_24862);
var state_24930__$1 = state_24930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24930__$1,(13),out,inst_24876);
} else {
if((state_val_24931 === (18))){
var inst_24886 = (state_24930[(7)]);
var inst_24899 = cljs.core.first(inst_24886);
var state_24930__$1 = state_24930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24930__$1,(20),out,inst_24899);
} else {
if((state_val_24931 === (8))){
var inst_24860 = (state_24930[(11)]);
var inst_24862 = (state_24930[(12)]);
var inst_24864 = (inst_24862 < inst_24860);
var inst_24865 = inst_24864;
var state_24930__$1 = state_24930;
if(cljs.core.truth_(inst_24865)){
var statearr_25144_26592 = state_24930__$1;
(statearr_25144_26592[(1)] = (10));

} else {
var statearr_25147_26593 = state_24930__$1;
(statearr_25147_26593[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__19216__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19216__auto____0 = (function (){
var statearr_25152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25152[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19216__auto__);

(statearr_25152[(1)] = (1));

return statearr_25152;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19216__auto____1 = (function (state_24930){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_24930);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e25153){var ex__19219__auto__ = e25153;
var statearr_25156_26594 = state_24930;
(statearr_25156_26594[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_24930[(4)]))){
var statearr_25158_26595 = state_24930;
(statearr_25158_26595[(1)] = cljs.core.first((state_24930[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26597 = state_24930;
state_24930 = G__26597;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19216__auto__ = function(state_24930){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19216__auto____1.call(this,state_24930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19216__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19216__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_25159 = f__20639__auto__();
(statearr_25159[(6)] = c__20638__auto__);

return statearr_25159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));

return c__20638__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25161 = arguments.length;
switch (G__25161) {
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
var G__25167 = arguments.length;
switch (G__25167) {
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
var G__25174 = arguments.length;
switch (G__25174) {
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
var c__20638__auto___26605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_25201){
var state_val_25202 = (state_25201[(1)]);
if((state_val_25202 === (7))){
var inst_25196 = (state_25201[(2)]);
var state_25201__$1 = state_25201;
var statearr_25203_26606 = state_25201__$1;
(statearr_25203_26606[(2)] = inst_25196);

(statearr_25203_26606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (1))){
var inst_25176 = null;
var state_25201__$1 = (function (){var statearr_25204 = state_25201;
(statearr_25204[(7)] = inst_25176);

return statearr_25204;
})();
var statearr_25205_26607 = state_25201__$1;
(statearr_25205_26607[(2)] = null);

(statearr_25205_26607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (4))){
var inst_25179 = (state_25201[(8)]);
var inst_25179__$1 = (state_25201[(2)]);
var inst_25182 = (inst_25179__$1 == null);
var inst_25183 = cljs.core.not(inst_25182);
var state_25201__$1 = (function (){var statearr_25212 = state_25201;
(statearr_25212[(8)] = inst_25179__$1);

return statearr_25212;
})();
if(inst_25183){
var statearr_25213_26612 = state_25201__$1;
(statearr_25213_26612[(1)] = (5));

} else {
var statearr_25214_26613 = state_25201__$1;
(statearr_25214_26613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (6))){
var state_25201__$1 = state_25201;
var statearr_25215_26615 = state_25201__$1;
(statearr_25215_26615[(2)] = null);

(statearr_25215_26615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (3))){
var inst_25198 = (state_25201[(2)]);
var inst_25199 = cljs.core.async.close_BANG_(out);
var state_25201__$1 = (function (){var statearr_25225 = state_25201;
(statearr_25225[(9)] = inst_25198);

return statearr_25225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25201__$1,inst_25199);
} else {
if((state_val_25202 === (2))){
var state_25201__$1 = state_25201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25201__$1,(4),ch);
} else {
if((state_val_25202 === (11))){
var inst_25179 = (state_25201[(8)]);
var inst_25190 = (state_25201[(2)]);
var inst_25176 = inst_25179;
var state_25201__$1 = (function (){var statearr_25228 = state_25201;
(statearr_25228[(10)] = inst_25190);

(statearr_25228[(7)] = inst_25176);

return statearr_25228;
})();
var statearr_25229_26617 = state_25201__$1;
(statearr_25229_26617[(2)] = null);

(statearr_25229_26617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (9))){
var inst_25179 = (state_25201[(8)]);
var state_25201__$1 = state_25201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25201__$1,(11),out,inst_25179);
} else {
if((state_val_25202 === (5))){
var inst_25179 = (state_25201[(8)]);
var inst_25176 = (state_25201[(7)]);
var inst_25185 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25179,inst_25176);
var state_25201__$1 = state_25201;
if(inst_25185){
var statearr_25238_26619 = state_25201__$1;
(statearr_25238_26619[(1)] = (8));

} else {
var statearr_25239_26621 = state_25201__$1;
(statearr_25239_26621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (10))){
var inst_25193 = (state_25201[(2)]);
var state_25201__$1 = state_25201;
var statearr_25240_26623 = state_25201__$1;
(statearr_25240_26623[(2)] = inst_25193);

(statearr_25240_26623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25202 === (8))){
var inst_25176 = (state_25201[(7)]);
var tmp25236 = inst_25176;
var inst_25176__$1 = tmp25236;
var state_25201__$1 = (function (){var statearr_25241 = state_25201;
(statearr_25241[(7)] = inst_25176__$1);

return statearr_25241;
})();
var statearr_25242_26627 = state_25201__$1;
(statearr_25242_26627[(2)] = null);

(statearr_25242_26627[(1)] = (2));


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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_25245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25245[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_25245[(1)] = (1));

return statearr_25245;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_25201){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_25201);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e25246){var ex__19219__auto__ = e25246;
var statearr_25247_26632 = state_25201;
(statearr_25247_26632[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_25201[(4)]))){
var statearr_25249_26634 = state_25201;
(statearr_25249_26634[(1)] = cljs.core.first((state_25201[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26635 = state_25201;
state_25201 = G__26635;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_25201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_25201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_25259 = f__20639__auto__();
(statearr_25259[(6)] = c__20638__auto___26605);

return statearr_25259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25269 = arguments.length;
switch (G__25269) {
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
var c__20638__auto___26644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_25351){
var state_val_25356 = (state_25351[(1)]);
if((state_val_25356 === (7))){
var inst_25345 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25407_26645 = state_25351__$1;
(statearr_25407_26645[(2)] = inst_25345);

(statearr_25407_26645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (1))){
var inst_25281 = (new Array(n));
var inst_25282 = inst_25281;
var inst_25283 = (0);
var state_25351__$1 = (function (){var statearr_25408 = state_25351;
(statearr_25408[(7)] = inst_25282);

(statearr_25408[(8)] = inst_25283);

return statearr_25408;
})();
var statearr_25409_26646 = state_25351__$1;
(statearr_25409_26646[(2)] = null);

(statearr_25409_26646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (4))){
var inst_25288 = (state_25351[(9)]);
var inst_25288__$1 = (state_25351[(2)]);
var inst_25289 = (inst_25288__$1 == null);
var inst_25290 = cljs.core.not(inst_25289);
var state_25351__$1 = (function (){var statearr_25414 = state_25351;
(statearr_25414[(9)] = inst_25288__$1);

return statearr_25414;
})();
if(inst_25290){
var statearr_25415_26648 = state_25351__$1;
(statearr_25415_26648[(1)] = (5));

} else {
var statearr_25416_26649 = state_25351__$1;
(statearr_25416_26649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (15))){
var inst_25339 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25434_26650 = state_25351__$1;
(statearr_25434_26650[(2)] = inst_25339);

(statearr_25434_26650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (13))){
var state_25351__$1 = state_25351;
var statearr_25442_26655 = state_25351__$1;
(statearr_25442_26655[(2)] = null);

(statearr_25442_26655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (6))){
var inst_25283 = (state_25351[(8)]);
var inst_25335 = (inst_25283 > (0));
var state_25351__$1 = state_25351;
if(cljs.core.truth_(inst_25335)){
var statearr_25455_26659 = state_25351__$1;
(statearr_25455_26659[(1)] = (12));

} else {
var statearr_25456_26660 = state_25351__$1;
(statearr_25456_26660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (3))){
var inst_25347 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25351__$1,inst_25347);
} else {
if((state_val_25356 === (12))){
var inst_25282 = (state_25351[(7)]);
var inst_25337 = cljs.core.vec(inst_25282);
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25351__$1,(15),out,inst_25337);
} else {
if((state_val_25356 === (2))){
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25351__$1,(4),ch);
} else {
if((state_val_25356 === (11))){
var inst_25317 = (state_25351[(2)]);
var inst_25318 = (new Array(n));
var inst_25282 = inst_25318;
var inst_25283 = (0);
var state_25351__$1 = (function (){var statearr_25467 = state_25351;
(statearr_25467[(7)] = inst_25282);

(statearr_25467[(10)] = inst_25317);

(statearr_25467[(8)] = inst_25283);

return statearr_25467;
})();
var statearr_25469_26665 = state_25351__$1;
(statearr_25469_26665[(2)] = null);

(statearr_25469_26665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (9))){
var inst_25282 = (state_25351[(7)]);
var inst_25315 = cljs.core.vec(inst_25282);
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25351__$1,(11),out,inst_25315);
} else {
if((state_val_25356 === (5))){
var inst_25282 = (state_25351[(7)]);
var inst_25288 = (state_25351[(9)]);
var inst_25283 = (state_25351[(8)]);
var inst_25293 = (state_25351[(11)]);
var inst_25292 = (inst_25282[inst_25283] = inst_25288);
var inst_25293__$1 = (inst_25283 + (1));
var inst_25294 = (inst_25293__$1 < n);
var state_25351__$1 = (function (){var statearr_25485 = state_25351;
(statearr_25485[(12)] = inst_25292);

(statearr_25485[(11)] = inst_25293__$1);

return statearr_25485;
})();
if(cljs.core.truth_(inst_25294)){
var statearr_25486_26672 = state_25351__$1;
(statearr_25486_26672[(1)] = (8));

} else {
var statearr_25487_26675 = state_25351__$1;
(statearr_25487_26675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (14))){
var inst_25342 = (state_25351[(2)]);
var inst_25343 = cljs.core.async.close_BANG_(out);
var state_25351__$1 = (function (){var statearr_25493 = state_25351;
(statearr_25493[(13)] = inst_25342);

return statearr_25493;
})();
var statearr_25494_26678 = state_25351__$1;
(statearr_25494_26678[(2)] = inst_25343);

(statearr_25494_26678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (10))){
var inst_25324 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25500_26683 = state_25351__$1;
(statearr_25500_26683[(2)] = inst_25324);

(statearr_25500_26683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (8))){
var inst_25282 = (state_25351[(7)]);
var inst_25293 = (state_25351[(11)]);
var tmp25488 = inst_25282;
var inst_25282__$1 = tmp25488;
var inst_25283 = inst_25293;
var state_25351__$1 = (function (){var statearr_25514 = state_25351;
(statearr_25514[(7)] = inst_25282__$1);

(statearr_25514[(8)] = inst_25283);

return statearr_25514;
})();
var statearr_25525_26688 = state_25351__$1;
(statearr_25525_26688[(2)] = null);

(statearr_25525_26688[(1)] = (2));


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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_25531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25531[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_25531[(1)] = (1));

return statearr_25531;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_25351){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_25351);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e25532){var ex__19219__auto__ = e25532;
var statearr_25536_26693 = state_25351;
(statearr_25536_26693[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_25351[(4)]))){
var statearr_25537_26694 = state_25351;
(statearr_25537_26694[(1)] = cljs.core.first((state_25351[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26696 = state_25351;
state_25351 = G__26696;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_25351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_25351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_25539 = f__20639__auto__();
(statearr_25539[(6)] = c__20638__auto___26644);

return statearr_25539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25553 = arguments.length;
switch (G__25553) {
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
var c__20638__auto___26706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20639__auto__ = (function (){var switch__19215__auto__ = (function (state_25614){
var state_val_25615 = (state_25614[(1)]);
if((state_val_25615 === (7))){
var inst_25607 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25623_26708 = state_25614__$1;
(statearr_25623_26708[(2)] = inst_25607);

(statearr_25623_26708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (1))){
var inst_25563 = [];
var inst_25564 = inst_25563;
var inst_25565 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25614__$1 = (function (){var statearr_25627 = state_25614;
(statearr_25627[(7)] = inst_25564);

(statearr_25627[(8)] = inst_25565);

return statearr_25627;
})();
var statearr_25628_26709 = state_25614__$1;
(statearr_25628_26709[(2)] = null);

(statearr_25628_26709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (4))){
var inst_25569 = (state_25614[(9)]);
var inst_25569__$1 = (state_25614[(2)]);
var inst_25570 = (inst_25569__$1 == null);
var inst_25571 = cljs.core.not(inst_25570);
var state_25614__$1 = (function (){var statearr_25630 = state_25614;
(statearr_25630[(9)] = inst_25569__$1);

return statearr_25630;
})();
if(inst_25571){
var statearr_25631_26712 = state_25614__$1;
(statearr_25631_26712[(1)] = (5));

} else {
var statearr_25632_26713 = state_25614__$1;
(statearr_25632_26713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (15))){
var inst_25564 = (state_25614[(7)]);
var inst_25599 = cljs.core.vec(inst_25564);
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25614__$1,(18),out,inst_25599);
} else {
if((state_val_25615 === (13))){
var inst_25594 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25635_26718 = state_25614__$1;
(statearr_25635_26718[(2)] = inst_25594);

(statearr_25635_26718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (6))){
var inst_25564 = (state_25614[(7)]);
var inst_25596 = inst_25564.length;
var inst_25597 = (inst_25596 > (0));
var state_25614__$1 = state_25614;
if(cljs.core.truth_(inst_25597)){
var statearr_25636_26722 = state_25614__$1;
(statearr_25636_26722[(1)] = (15));

} else {
var statearr_25637_26723 = state_25614__$1;
(statearr_25637_26723[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (17))){
var inst_25604 = (state_25614[(2)]);
var inst_25605 = cljs.core.async.close_BANG_(out);
var state_25614__$1 = (function (){var statearr_25638 = state_25614;
(statearr_25638[(10)] = inst_25604);

return statearr_25638;
})();
var statearr_25639_26726 = state_25614__$1;
(statearr_25639_26726[(2)] = inst_25605);

(statearr_25639_26726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (3))){
var inst_25609 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25614__$1,inst_25609);
} else {
if((state_val_25615 === (12))){
var inst_25564 = (state_25614[(7)]);
var inst_25587 = cljs.core.vec(inst_25564);
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25614__$1,(14),out,inst_25587);
} else {
if((state_val_25615 === (2))){
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25614__$1,(4),ch);
} else {
if((state_val_25615 === (11))){
var inst_25569 = (state_25614[(9)]);
var inst_25573 = (state_25614[(11)]);
var inst_25564 = (state_25614[(7)]);
var inst_25583 = inst_25564.push(inst_25569);
var tmp25642 = inst_25564;
var inst_25564__$1 = tmp25642;
var inst_25565 = inst_25573;
var state_25614__$1 = (function (){var statearr_25655 = state_25614;
(statearr_25655[(7)] = inst_25564__$1);

(statearr_25655[(8)] = inst_25565);

(statearr_25655[(12)] = inst_25583);

return statearr_25655;
})();
var statearr_25656_26728 = state_25614__$1;
(statearr_25656_26728[(2)] = null);

(statearr_25656_26728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (9))){
var inst_25565 = (state_25614[(8)]);
var inst_25579 = cljs.core.keyword_identical_QMARK_(inst_25565,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_25614__$1 = state_25614;
var statearr_25661_26729 = state_25614__$1;
(statearr_25661_26729[(2)] = inst_25579);

(statearr_25661_26729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (5))){
var inst_25569 = (state_25614[(9)]);
var inst_25573 = (state_25614[(11)]);
var inst_25565 = (state_25614[(8)]);
var inst_25576 = (state_25614[(13)]);
var inst_25573__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25569) : f.call(null, inst_25569));
var inst_25576__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25573__$1,inst_25565);
var state_25614__$1 = (function (){var statearr_25663 = state_25614;
(statearr_25663[(11)] = inst_25573__$1);

(statearr_25663[(13)] = inst_25576__$1);

return statearr_25663;
})();
if(inst_25576__$1){
var statearr_25665_26730 = state_25614__$1;
(statearr_25665_26730[(1)] = (8));

} else {
var statearr_25670_26731 = state_25614__$1;
(statearr_25670_26731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (14))){
var inst_25569 = (state_25614[(9)]);
var inst_25573 = (state_25614[(11)]);
var inst_25589 = (state_25614[(2)]);
var inst_25590 = [];
var inst_25591 = inst_25590.push(inst_25569);
var inst_25564 = inst_25590;
var inst_25565 = inst_25573;
var state_25614__$1 = (function (){var statearr_25671 = state_25614;
(statearr_25671[(14)] = inst_25591);

(statearr_25671[(7)] = inst_25564);

(statearr_25671[(8)] = inst_25565);

(statearr_25671[(15)] = inst_25589);

return statearr_25671;
})();
var statearr_25676_26732 = state_25614__$1;
(statearr_25676_26732[(2)] = null);

(statearr_25676_26732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (16))){
var state_25614__$1 = state_25614;
var statearr_25677_26733 = state_25614__$1;
(statearr_25677_26733[(2)] = null);

(statearr_25677_26733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (10))){
var inst_25581 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
if(cljs.core.truth_(inst_25581)){
var statearr_25678_26734 = state_25614__$1;
(statearr_25678_26734[(1)] = (11));

} else {
var statearr_25681_26735 = state_25614__$1;
(statearr_25681_26735[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (18))){
var inst_25601 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25682_26736 = state_25614__$1;
(statearr_25682_26736[(2)] = inst_25601);

(statearr_25682_26736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (8))){
var inst_25576 = (state_25614[(13)]);
var state_25614__$1 = state_25614;
var statearr_25690_26737 = state_25614__$1;
(statearr_25690_26737[(2)] = inst_25576);

(statearr_25690_26737[(1)] = (10));


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
var cljs$core$async$state_machine__19216__auto__ = null;
var cljs$core$async$state_machine__19216__auto____0 = (function (){
var statearr_25705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25705[(0)] = cljs$core$async$state_machine__19216__auto__);

(statearr_25705[(1)] = (1));

return statearr_25705;
});
var cljs$core$async$state_machine__19216__auto____1 = (function (state_25614){
while(true){
var ret_value__19217__auto__ = (function (){try{while(true){
var result__19218__auto__ = switch__19215__auto__(state_25614);
if(cljs.core.keyword_identical_QMARK_(result__19218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19218__auto__;
}
break;
}
}catch (e25710){var ex__19219__auto__ = e25710;
var statearr_25711_26738 = state_25614;
(statearr_25711_26738[(2)] = ex__19219__auto__);


if(cljs.core.seq((state_25614[(4)]))){
var statearr_25712_26739 = state_25614;
(statearr_25712_26739[(1)] = cljs.core.first((state_25614[(4)])));

} else {
throw ex__19219__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26741 = state_25614;
state_25614 = G__26741;
continue;
} else {
return ret_value__19217__auto__;
}
break;
}
});
cljs$core$async$state_machine__19216__auto__ = function(state_25614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19216__auto____1.call(this,state_25614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19216__auto____0;
cljs$core$async$state_machine__19216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19216__auto____1;
return cljs$core$async$state_machine__19216__auto__;
})()
})();
var state__20640__auto__ = (function (){var statearr_25719 = f__20639__auto__();
(statearr_25719[(6)] = c__20638__auto___26706);

return statearr_25719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20640__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
