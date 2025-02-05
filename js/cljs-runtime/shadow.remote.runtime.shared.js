goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__21540){
var map__21541 = p__21540;
var map__21541__$1 = cljs.core.__destructure_map(map__21541);
var runtime = map__21541__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_21912 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_21912)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__21550 = runtime;
var G__21551 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_21912);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__21550,G__21551) : shadow.remote.runtime.shared.process.call(null, G__21550,G__21551));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__21556,res){
var map__21557 = p__21556;
var map__21557__$1 = cljs.core.__destructure_map(map__21557);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21557__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21557__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__21568 = res;
var G__21568__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21568,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__21568);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21568__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__21568__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__21625 = arguments.length;
switch (G__21625) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__21638,msg,handlers,timeout_after_ms){
var map__21640 = p__21638;
var map__21640__$1 = cljs.core.__destructure_map(map__21640);
var runtime = map__21640__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21640__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21939 = arguments.length;
var i__5727__auto___21940 = (0);
while(true){
if((i__5727__auto___21940 < len__5726__auto___21939)){
args__5732__auto__.push((arguments[i__5727__auto___21940]));

var G__21941 = (i__5727__auto___21940 + (1));
i__5727__auto___21940 = G__21941;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__21675,ev,args){
var map__21682 = p__21675;
var map__21682__$1 = cljs.core.__destructure_map(map__21682);
var runtime = map__21682__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21682__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__21684 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21687 = null;
var count__21688 = (0);
var i__21689 = (0);
while(true){
if((i__21689 < count__21688)){
var ext = chunk__21687.cljs$core$IIndexed$_nth$arity$2(null, i__21689);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21953 = seq__21684;
var G__21954 = chunk__21687;
var G__21955 = count__21688;
var G__21956 = (i__21689 + (1));
seq__21684 = G__21953;
chunk__21687 = G__21954;
count__21688 = G__21955;
i__21689 = G__21956;
continue;
} else {
var G__21957 = seq__21684;
var G__21958 = chunk__21687;
var G__21959 = count__21688;
var G__21960 = (i__21689 + (1));
seq__21684 = G__21957;
chunk__21687 = G__21958;
count__21688 = G__21959;
i__21689 = G__21960;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21684);
if(temp__5804__auto__){
var seq__21684__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21684__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21684__$1);
var G__21964 = cljs.core.chunk_rest(seq__21684__$1);
var G__21965 = c__5525__auto__;
var G__21966 = cljs.core.count(c__5525__auto__);
var G__21967 = (0);
seq__21684 = G__21964;
chunk__21687 = G__21965;
count__21688 = G__21966;
i__21689 = G__21967;
continue;
} else {
var ext = cljs.core.first(seq__21684__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21970 = cljs.core.next(seq__21684__$1);
var G__21971 = null;
var G__21972 = (0);
var G__21973 = (0);
seq__21684 = G__21970;
chunk__21687 = G__21971;
count__21688 = G__21972;
i__21689 = G__21973;
continue;
} else {
var G__21974 = cljs.core.next(seq__21684__$1);
var G__21975 = null;
var G__21976 = (0);
var G__21977 = (0);
seq__21684 = G__21974;
chunk__21687 = G__21975;
count__21688 = G__21976;
i__21689 = G__21977;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq21662){
var G__21663 = cljs.core.first(seq21662);
var seq21662__$1 = cljs.core.next(seq21662);
var G__21664 = cljs.core.first(seq21662__$1);
var seq21662__$2 = cljs.core.next(seq21662__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21663,G__21664,seq21662__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__21724,p__21725){
var map__21726 = p__21724;
var map__21726__$1 = cljs.core.__destructure_map(map__21726);
var runtime = map__21726__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21726__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21727 = p__21725;
var map__21727__$1 = cljs.core.__destructure_map(map__21727);
var msg = map__21727__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21727__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__21732 = cljs.core.deref(state_ref);
var map__21732__$1 = cljs.core.__destructure_map(map__21732);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21732__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21732__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__21737,msg){
var map__21738 = p__21737;
var map__21738__$1 = cljs.core.__destructure_map(map__21738);
var runtime = map__21738__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21738__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__21754,key,p__21755){
var map__21762 = p__21754;
var map__21762__$1 = cljs.core.__destructure_map(map__21762);
var state = map__21762__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21762__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__21763 = p__21755;
var map__21763__$1 = cljs.core.__destructure_map(map__21763);
var spec = map__21763__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__21778,key,spec){
var map__21779 = p__21778;
var map__21779__$1 = cljs.core.__destructure_map(map__21779);
var runtime = map__21779__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21779__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___22026 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___22026 == null)){
} else {
var on_welcome_22028 = temp__5808__auto___22026;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_22028.cljs$core$IFn$_invoke$arity$0 ? on_welcome_22028.cljs$core$IFn$_invoke$arity$0() : on_welcome_22028.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__21790_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__21790_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__21791_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__21791_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__21793_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__21793_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__21794_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__21794_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__21795_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__21795_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__21811,key){
var map__21812 = p__21811;
var map__21812__$1 = cljs.core.__destructure_map(map__21812);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21812__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__21822,msg){
var map__21823 = p__21822;
var map__21823__$1 = cljs.core.__destructure_map(map__21823);
var runtime = map__21823__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21823__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__21837,p__21838){
var map__21839 = p__21837;
var map__21839__$1 = cljs.core.__destructure_map(map__21839);
var runtime = map__21839__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21840 = p__21838;
var map__21840__$1 = cljs.core.__destructure_map(map__21840);
var msg = map__21840__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__21873 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21875 = null;
var count__21876 = (0);
var i__21877 = (0);
while(true){
if((i__21877 < count__21876)){
var map__21890 = chunk__21875.cljs$core$IIndexed$_nth$arity$2(null, i__21877);
var map__21890__$1 = cljs.core.__destructure_map(map__21890);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21890__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__22082 = seq__21873;
var G__22083 = chunk__21875;
var G__22084 = count__21876;
var G__22085 = (i__21877 + (1));
seq__21873 = G__22082;
chunk__21875 = G__22083;
count__21876 = G__22084;
i__21877 = G__22085;
continue;
} else {
var G__22090 = seq__21873;
var G__22091 = chunk__21875;
var G__22092 = count__21876;
var G__22093 = (i__21877 + (1));
seq__21873 = G__22090;
chunk__21875 = G__22091;
count__21876 = G__22092;
i__21877 = G__22093;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21873);
if(temp__5804__auto__){
var seq__21873__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21873__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21873__$1);
var G__22104 = cljs.core.chunk_rest(seq__21873__$1);
var G__22105 = c__5525__auto__;
var G__22106 = cljs.core.count(c__5525__auto__);
var G__22107 = (0);
seq__21873 = G__22104;
chunk__21875 = G__22105;
count__21876 = G__22106;
i__21877 = G__22107;
continue;
} else {
var map__21898 = cljs.core.first(seq__21873__$1);
var map__21898__$1 = cljs.core.__destructure_map(map__21898);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21898__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__22109 = cljs.core.next(seq__21873__$1);
var G__22110 = null;
var G__22111 = (0);
var G__22112 = (0);
seq__21873 = G__22109;
chunk__21875 = G__22110;
count__21876 = G__22111;
i__21877 = G__22112;
continue;
} else {
var G__22113 = cljs.core.next(seq__21873__$1);
var G__22114 = null;
var G__22115 = (0);
var G__22116 = (0);
seq__21873 = G__22113;
chunk__21875 = G__22114;
count__21876 = G__22115;
i__21877 = G__22116;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
