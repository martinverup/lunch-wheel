goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__28729,p__28730){
var map__28731 = p__28729;
var map__28731__$1 = cljs.core.__destructure_map(map__28731);
var svc = map__28731__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28731__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28731__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28731__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28732 = p__28730;
var map__28732__$1 = cljs.core.__destructure_map(map__28732);
var msg = map__28732__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28732__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28732__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28732__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28732__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__28750,p__28751){
var map__28756 = p__28750;
var map__28756__$1 = cljs.core.__destructure_map(map__28756);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28756__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__28757 = p__28751;
var map__28757__$1 = cljs.core.__destructure_map(map__28757);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28757__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__28765,p__28766){
var map__28771 = p__28765;
var map__28771__$1 = cljs.core.__destructure_map(map__28771);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28771__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28771__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28772 = p__28766;
var map__28772__$1 = cljs.core.__destructure_map(map__28772);
var msg = map__28772__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28772__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__28793,tid){
var map__28794 = p__28793;
var map__28794__$1 = cljs.core.__destructure_map(map__28794);
var svc = map__28794__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28794__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__28816 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__28817 = null;
var count__28818 = (0);
var i__28819 = (0);
while(true){
if((i__28819 < count__28818)){
var vec__28831 = chunk__28817.cljs$core$IIndexed$_nth$arity$2(null, i__28819);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28831,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28831,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28866 = seq__28816;
var G__28867 = chunk__28817;
var G__28868 = count__28818;
var G__28869 = (i__28819 + (1));
seq__28816 = G__28866;
chunk__28817 = G__28867;
count__28818 = G__28868;
i__28819 = G__28869;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28816);
if(temp__5804__auto__){
var seq__28816__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28816__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28816__$1);
var G__28871 = cljs.core.chunk_rest(seq__28816__$1);
var G__28872 = c__5525__auto__;
var G__28873 = cljs.core.count(c__5525__auto__);
var G__28874 = (0);
seq__28816 = G__28871;
chunk__28817 = G__28872;
count__28818 = G__28873;
i__28819 = G__28874;
continue;
} else {
var vec__28847 = cljs.core.first(seq__28816__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28847,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28847,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28876 = cljs.core.next(seq__28816__$1);
var G__28877 = null;
var G__28878 = (0);
var G__28879 = (0);
seq__28816 = G__28876;
chunk__28817 = G__28877;
count__28818 = G__28878;
i__28819 = G__28879;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__28808_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__28808_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__28810_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__28810_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__28812_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__28812_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__28813_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__28813_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__28850){
var map__28851 = p__28850;
var map__28851__$1 = cljs.core.__destructure_map(map__28851);
var svc = map__28851__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28851__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28851__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
