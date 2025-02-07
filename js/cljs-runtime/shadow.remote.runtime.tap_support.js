goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__26992,p__26993){
var map__26995 = p__26992;
var map__26995__$1 = cljs.core.__destructure_map(map__26995);
var svc = map__26995__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26995__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26995__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26995__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__26996 = p__26993;
var map__26996__$1 = cljs.core.__destructure_map(map__26996);
var msg = map__26996__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26996__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26996__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26996__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26996__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__27006,p__27007){
var map__27010 = p__27006;
var map__27010__$1 = cljs.core.__destructure_map(map__27010);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27010__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__27011 = p__27007;
var map__27011__$1 = cljs.core.__destructure_map(map__27011);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27011__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__27016,p__27017){
var map__27019 = p__27016;
var map__27019__$1 = cljs.core.__destructure_map(map__27019);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27019__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27019__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27020 = p__27017;
var map__27020__$1 = cljs.core.__destructure_map(map__27020);
var msg = map__27020__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27020__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__27029,tid){
var map__27031 = p__27029;
var map__27031__$1 = cljs.core.__destructure_map(map__27031);
var svc = map__27031__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27031__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__27039 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__27040 = null;
var count__27041 = (0);
var i__27042 = (0);
while(true){
if((i__27042 < count__27041)){
var vec__27052 = chunk__27040.cljs$core$IIndexed$_nth$arity$2(null, i__27042);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27052,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27052,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27075 = seq__27039;
var G__27076 = chunk__27040;
var G__27077 = count__27041;
var G__27078 = (i__27042 + (1));
seq__27039 = G__27075;
chunk__27040 = G__27076;
count__27041 = G__27077;
i__27042 = G__27078;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27039);
if(temp__5804__auto__){
var seq__27039__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27039__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27039__$1);
var G__27081 = cljs.core.chunk_rest(seq__27039__$1);
var G__27082 = c__5525__auto__;
var G__27083 = cljs.core.count(c__5525__auto__);
var G__27084 = (0);
seq__27039 = G__27081;
chunk__27040 = G__27082;
count__27041 = G__27083;
i__27042 = G__27084;
continue;
} else {
var vec__27060 = cljs.core.first(seq__27039__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27060,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27060,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27085 = cljs.core.next(seq__27039__$1);
var G__27086 = null;
var G__27087 = (0);
var G__27088 = (0);
seq__27039 = G__27085;
chunk__27040 = G__27086;
count__27041 = G__27087;
i__27042 = G__27088;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__27033_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__27033_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__27035_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__27035_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__27036_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__27036_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__27037_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__27037_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__27066){
var map__27067 = p__27066;
var map__27067__$1 = cljs.core.__destructure_map(map__27067);
var svc = map__27067__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27067__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27067__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
