goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28266 = arguments.length;
var i__5727__auto___28267 = (0);
while(true){
if((i__5727__auto___28267 < len__5726__auto___28266)){
args__5732__auto__.push((arguments[i__5727__auto___28267]));

var G__28268 = (i__5727__auto___28267 + (1));
i__5727__auto___28267 = G__28268;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq27973){
var G__27974 = cljs.core.first(seq27973);
var seq27973__$1 = cljs.core.next(seq27973);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27974,seq27973__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__27982 = cljs.core.seq(sources);
var chunk__27983 = null;
var count__27984 = (0);
var i__27985 = (0);
while(true){
if((i__27985 < count__27984)){
var map__27990 = chunk__27983.cljs$core$IIndexed$_nth$arity$2(null, i__27985);
var map__27990__$1 = cljs.core.__destructure_map(map__27990);
var src = map__27990__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27990__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27990__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27990__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27990__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e27991){var e_28269 = e27991;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28269);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28269.message)].join('')));
}

var G__28270 = seq__27982;
var G__28271 = chunk__27983;
var G__28272 = count__27984;
var G__28273 = (i__27985 + (1));
seq__27982 = G__28270;
chunk__27983 = G__28271;
count__27984 = G__28272;
i__27985 = G__28273;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27982);
if(temp__5804__auto__){
var seq__27982__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27982__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27982__$1);
var G__28274 = cljs.core.chunk_rest(seq__27982__$1);
var G__28275 = c__5525__auto__;
var G__28276 = cljs.core.count(c__5525__auto__);
var G__28277 = (0);
seq__27982 = G__28274;
chunk__27983 = G__28275;
count__27984 = G__28276;
i__27985 = G__28277;
continue;
} else {
var map__27994 = cljs.core.first(seq__27982__$1);
var map__27994__$1 = cljs.core.__destructure_map(map__27994);
var src = map__27994__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e27995){var e_28278 = e27995;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28278);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28278.message)].join('')));
}

var G__28279 = cljs.core.next(seq__27982__$1);
var G__28280 = null;
var G__28281 = (0);
var G__28282 = (0);
seq__27982 = G__28279;
chunk__27983 = G__28280;
count__27984 = G__28281;
i__27985 = G__28282;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__27996 = cljs.core.seq(js_requires);
var chunk__27997 = null;
var count__27998 = (0);
var i__27999 = (0);
while(true){
if((i__27999 < count__27998)){
var js_ns = chunk__27997.cljs$core$IIndexed$_nth$arity$2(null, i__27999);
var require_str_28283 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28283);


var G__28284 = seq__27996;
var G__28285 = chunk__27997;
var G__28286 = count__27998;
var G__28287 = (i__27999 + (1));
seq__27996 = G__28284;
chunk__27997 = G__28285;
count__27998 = G__28286;
i__27999 = G__28287;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27996);
if(temp__5804__auto__){
var seq__27996__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27996__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27996__$1);
var G__28288 = cljs.core.chunk_rest(seq__27996__$1);
var G__28289 = c__5525__auto__;
var G__28290 = cljs.core.count(c__5525__auto__);
var G__28291 = (0);
seq__27996 = G__28288;
chunk__27997 = G__28289;
count__27998 = G__28290;
i__27999 = G__28291;
continue;
} else {
var js_ns = cljs.core.first(seq__27996__$1);
var require_str_28292 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28292);


var G__28293 = cljs.core.next(seq__27996__$1);
var G__28294 = null;
var G__28295 = (0);
var G__28296 = (0);
seq__27996 = G__28293;
chunk__27997 = G__28294;
count__27998 = G__28295;
i__27999 = G__28296;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__28001){
var map__28002 = p__28001;
var map__28002__$1 = cljs.core.__destructure_map(map__28002);
var msg = map__28002__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28002__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28002__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28003(s__28004){
return (new cljs.core.LazySeq(null,(function (){
var s__28004__$1 = s__28004;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28004__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__28009 = cljs.core.first(xs__6360__auto__);
var map__28009__$1 = cljs.core.__destructure_map(map__28009);
var src = map__28009__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28009__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28009__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__28004__$1,map__28009,map__28009__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28002,map__28002__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28003_$_iter__28005(s__28006){
return (new cljs.core.LazySeq(null,((function (s__28004__$1,map__28009,map__28009__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28002,map__28002__$1,msg,info,reload_info){
return (function (){
var s__28006__$1 = s__28006;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__28006__$1);
if(temp__5804__auto____$1){
var s__28006__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28006__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__28006__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__28008 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__28007 = (0);
while(true){
if((i__28007 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__28007);
cljs.core.chunk_append(b__28008,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__28297 = (i__28007 + (1));
i__28007 = G__28297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28008),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28003_$_iter__28005(cljs.core.chunk_rest(s__28006__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28008),null);
}
} else {
var warning = cljs.core.first(s__28006__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28003_$_iter__28005(cljs.core.rest(s__28006__$2)));
}
} else {
return null;
}
break;
}
});})(s__28004__$1,map__28009,map__28009__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28002,map__28002__$1,msg,info,reload_info))
,null,null));
});})(s__28004__$1,map__28009,map__28009__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28002,map__28002__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28003(cljs.core.rest(s__28004__$1)));
} else {
var G__28298 = cljs.core.rest(s__28004__$1);
s__28004__$1 = G__28298;
continue;
}
} else {
var G__28299 = cljs.core.rest(s__28004__$1);
s__28004__$1 = G__28299;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__28010_28300 = cljs.core.seq(warnings);
var chunk__28011_28301 = null;
var count__28012_28302 = (0);
var i__28013_28303 = (0);
while(true){
if((i__28013_28303 < count__28012_28302)){
var map__28016_28304 = chunk__28011_28301.cljs$core$IIndexed$_nth$arity$2(null, i__28013_28303);
var map__28016_28305__$1 = cljs.core.__destructure_map(map__28016_28304);
var w_28306 = map__28016_28305__$1;
var msg_28307__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28016_28305__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28016_28305__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28016_28305__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28016_28305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28310)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28308),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28309),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28307__$1)].join(''));


var G__28311 = seq__28010_28300;
var G__28312 = chunk__28011_28301;
var G__28313 = count__28012_28302;
var G__28314 = (i__28013_28303 + (1));
seq__28010_28300 = G__28311;
chunk__28011_28301 = G__28312;
count__28012_28302 = G__28313;
i__28013_28303 = G__28314;
continue;
} else {
var temp__5804__auto___28315 = cljs.core.seq(seq__28010_28300);
if(temp__5804__auto___28315){
var seq__28010_28316__$1 = temp__5804__auto___28315;
if(cljs.core.chunked_seq_QMARK_(seq__28010_28316__$1)){
var c__5525__auto___28317 = cljs.core.chunk_first(seq__28010_28316__$1);
var G__28318 = cljs.core.chunk_rest(seq__28010_28316__$1);
var G__28319 = c__5525__auto___28317;
var G__28320 = cljs.core.count(c__5525__auto___28317);
var G__28321 = (0);
seq__28010_28300 = G__28318;
chunk__28011_28301 = G__28319;
count__28012_28302 = G__28320;
i__28013_28303 = G__28321;
continue;
} else {
var map__28017_28322 = cljs.core.first(seq__28010_28316__$1);
var map__28017_28323__$1 = cljs.core.__destructure_map(map__28017_28322);
var w_28324 = map__28017_28323__$1;
var msg_28325__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28017_28323__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28017_28323__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28017_28323__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28017_28323__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28328)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28326),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28327),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28325__$1)].join(''));


var G__28329 = cljs.core.next(seq__28010_28316__$1);
var G__28330 = null;
var G__28331 = (0);
var G__28332 = (0);
seq__28010_28300 = G__28329;
chunk__28011_28301 = G__28330;
count__28012_28302 = G__28331;
i__28013_28303 = G__28332;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__28000_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__28000_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__28018){
var map__28019 = p__28018;
var map__28019__$1 = cljs.core.__destructure_map(map__28019);
var msg = map__28019__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28019__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28019__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__28020 = cljs.core.seq(updates);
var chunk__28022 = null;
var count__28023 = (0);
var i__28024 = (0);
while(true){
if((i__28024 < count__28023)){
var path = chunk__28022.cljs$core$IIndexed$_nth$arity$2(null, i__28024);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28136_28333 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28140_28334 = null;
var count__28141_28335 = (0);
var i__28142_28336 = (0);
while(true){
if((i__28142_28336 < count__28141_28335)){
var node_28337 = chunk__28140_28334.cljs$core$IIndexed$_nth$arity$2(null, i__28142_28336);
if(cljs.core.not(node_28337.shadow$old)){
var path_match_28338 = shadow.cljs.devtools.client.browser.match_paths(node_28337.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28338)){
var new_link_28339 = (function (){var G__28168 = node_28337.cloneNode(true);
G__28168.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28338),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28168;
})();
(node_28337.shadow$old = true);

(new_link_28339.onload = ((function (seq__28136_28333,chunk__28140_28334,count__28141_28335,i__28142_28336,seq__28020,chunk__28022,count__28023,i__28024,new_link_28339,path_match_28338,node_28337,path,map__28019,map__28019__$1,msg,updates,reload_info){
return (function (e){
var seq__28171_28340 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28173_28341 = null;
var count__28174_28342 = (0);
var i__28175_28343 = (0);
while(true){
if((i__28175_28343 < count__28174_28342)){
var map__28179_28344 = chunk__28173_28341.cljs$core$IIndexed$_nth$arity$2(null, i__28175_28343);
var map__28179_28345__$1 = cljs.core.__destructure_map(map__28179_28344);
var task_28346 = map__28179_28345__$1;
var fn_str_28347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28179_28345__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28179_28345__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28349 = goog.getObjectByName(fn_str_28347,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28348)].join(''));

(fn_obj_28349.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28349.cljs$core$IFn$_invoke$arity$2(path,new_link_28339) : fn_obj_28349.call(null, path,new_link_28339));


var G__28350 = seq__28171_28340;
var G__28351 = chunk__28173_28341;
var G__28352 = count__28174_28342;
var G__28353 = (i__28175_28343 + (1));
seq__28171_28340 = G__28350;
chunk__28173_28341 = G__28351;
count__28174_28342 = G__28352;
i__28175_28343 = G__28353;
continue;
} else {
var temp__5804__auto___28354 = cljs.core.seq(seq__28171_28340);
if(temp__5804__auto___28354){
var seq__28171_28355__$1 = temp__5804__auto___28354;
if(cljs.core.chunked_seq_QMARK_(seq__28171_28355__$1)){
var c__5525__auto___28356 = cljs.core.chunk_first(seq__28171_28355__$1);
var G__28357 = cljs.core.chunk_rest(seq__28171_28355__$1);
var G__28358 = c__5525__auto___28356;
var G__28359 = cljs.core.count(c__5525__auto___28356);
var G__28360 = (0);
seq__28171_28340 = G__28357;
chunk__28173_28341 = G__28358;
count__28174_28342 = G__28359;
i__28175_28343 = G__28360;
continue;
} else {
var map__28180_28361 = cljs.core.first(seq__28171_28355__$1);
var map__28180_28362__$1 = cljs.core.__destructure_map(map__28180_28361);
var task_28363 = map__28180_28362__$1;
var fn_str_28364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28180_28362__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28180_28362__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28366 = goog.getObjectByName(fn_str_28364,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28365)].join(''));

(fn_obj_28366.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28366.cljs$core$IFn$_invoke$arity$2(path,new_link_28339) : fn_obj_28366.call(null, path,new_link_28339));


var G__28367 = cljs.core.next(seq__28171_28355__$1);
var G__28368 = null;
var G__28369 = (0);
var G__28370 = (0);
seq__28171_28340 = G__28367;
chunk__28173_28341 = G__28368;
count__28174_28342 = G__28369;
i__28175_28343 = G__28370;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28337);
});})(seq__28136_28333,chunk__28140_28334,count__28141_28335,i__28142_28336,seq__28020,chunk__28022,count__28023,i__28024,new_link_28339,path_match_28338,node_28337,path,map__28019,map__28019__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28338], 0));

goog.dom.insertSiblingAfter(new_link_28339,node_28337);


var G__28371 = seq__28136_28333;
var G__28372 = chunk__28140_28334;
var G__28373 = count__28141_28335;
var G__28374 = (i__28142_28336 + (1));
seq__28136_28333 = G__28371;
chunk__28140_28334 = G__28372;
count__28141_28335 = G__28373;
i__28142_28336 = G__28374;
continue;
} else {
var G__28375 = seq__28136_28333;
var G__28376 = chunk__28140_28334;
var G__28377 = count__28141_28335;
var G__28378 = (i__28142_28336 + (1));
seq__28136_28333 = G__28375;
chunk__28140_28334 = G__28376;
count__28141_28335 = G__28377;
i__28142_28336 = G__28378;
continue;
}
} else {
var G__28379 = seq__28136_28333;
var G__28380 = chunk__28140_28334;
var G__28381 = count__28141_28335;
var G__28382 = (i__28142_28336 + (1));
seq__28136_28333 = G__28379;
chunk__28140_28334 = G__28380;
count__28141_28335 = G__28381;
i__28142_28336 = G__28382;
continue;
}
} else {
var temp__5804__auto___28383 = cljs.core.seq(seq__28136_28333);
if(temp__5804__auto___28383){
var seq__28136_28384__$1 = temp__5804__auto___28383;
if(cljs.core.chunked_seq_QMARK_(seq__28136_28384__$1)){
var c__5525__auto___28385 = cljs.core.chunk_first(seq__28136_28384__$1);
var G__28386 = cljs.core.chunk_rest(seq__28136_28384__$1);
var G__28387 = c__5525__auto___28385;
var G__28388 = cljs.core.count(c__5525__auto___28385);
var G__28389 = (0);
seq__28136_28333 = G__28386;
chunk__28140_28334 = G__28387;
count__28141_28335 = G__28388;
i__28142_28336 = G__28389;
continue;
} else {
var node_28390 = cljs.core.first(seq__28136_28384__$1);
if(cljs.core.not(node_28390.shadow$old)){
var path_match_28391 = shadow.cljs.devtools.client.browser.match_paths(node_28390.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28391)){
var new_link_28392 = (function (){var G__28181 = node_28390.cloneNode(true);
G__28181.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28391),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28181;
})();
(node_28390.shadow$old = true);

(new_link_28392.onload = ((function (seq__28136_28333,chunk__28140_28334,count__28141_28335,i__28142_28336,seq__28020,chunk__28022,count__28023,i__28024,new_link_28392,path_match_28391,node_28390,seq__28136_28384__$1,temp__5804__auto___28383,path,map__28019,map__28019__$1,msg,updates,reload_info){
return (function (e){
var seq__28182_28393 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28184_28394 = null;
var count__28185_28395 = (0);
var i__28186_28396 = (0);
while(true){
if((i__28186_28396 < count__28185_28395)){
var map__28190_28397 = chunk__28184_28394.cljs$core$IIndexed$_nth$arity$2(null, i__28186_28396);
var map__28190_28398__$1 = cljs.core.__destructure_map(map__28190_28397);
var task_28399 = map__28190_28398__$1;
var fn_str_28400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190_28398__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190_28398__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28402 = goog.getObjectByName(fn_str_28400,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28401)].join(''));

(fn_obj_28402.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28402.cljs$core$IFn$_invoke$arity$2(path,new_link_28392) : fn_obj_28402.call(null, path,new_link_28392));


var G__28403 = seq__28182_28393;
var G__28404 = chunk__28184_28394;
var G__28405 = count__28185_28395;
var G__28406 = (i__28186_28396 + (1));
seq__28182_28393 = G__28403;
chunk__28184_28394 = G__28404;
count__28185_28395 = G__28405;
i__28186_28396 = G__28406;
continue;
} else {
var temp__5804__auto___28407__$1 = cljs.core.seq(seq__28182_28393);
if(temp__5804__auto___28407__$1){
var seq__28182_28408__$1 = temp__5804__auto___28407__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28182_28408__$1)){
var c__5525__auto___28409 = cljs.core.chunk_first(seq__28182_28408__$1);
var G__28410 = cljs.core.chunk_rest(seq__28182_28408__$1);
var G__28411 = c__5525__auto___28409;
var G__28412 = cljs.core.count(c__5525__auto___28409);
var G__28413 = (0);
seq__28182_28393 = G__28410;
chunk__28184_28394 = G__28411;
count__28185_28395 = G__28412;
i__28186_28396 = G__28413;
continue;
} else {
var map__28191_28414 = cljs.core.first(seq__28182_28408__$1);
var map__28191_28415__$1 = cljs.core.__destructure_map(map__28191_28414);
var task_28416 = map__28191_28415__$1;
var fn_str_28417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28191_28415__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28191_28415__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28419 = goog.getObjectByName(fn_str_28417,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28418)].join(''));

(fn_obj_28419.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28419.cljs$core$IFn$_invoke$arity$2(path,new_link_28392) : fn_obj_28419.call(null, path,new_link_28392));


var G__28420 = cljs.core.next(seq__28182_28408__$1);
var G__28421 = null;
var G__28422 = (0);
var G__28423 = (0);
seq__28182_28393 = G__28420;
chunk__28184_28394 = G__28421;
count__28185_28395 = G__28422;
i__28186_28396 = G__28423;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28390);
});})(seq__28136_28333,chunk__28140_28334,count__28141_28335,i__28142_28336,seq__28020,chunk__28022,count__28023,i__28024,new_link_28392,path_match_28391,node_28390,seq__28136_28384__$1,temp__5804__auto___28383,path,map__28019,map__28019__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28391], 0));

goog.dom.insertSiblingAfter(new_link_28392,node_28390);


var G__28424 = cljs.core.next(seq__28136_28384__$1);
var G__28425 = null;
var G__28426 = (0);
var G__28427 = (0);
seq__28136_28333 = G__28424;
chunk__28140_28334 = G__28425;
count__28141_28335 = G__28426;
i__28142_28336 = G__28427;
continue;
} else {
var G__28428 = cljs.core.next(seq__28136_28384__$1);
var G__28429 = null;
var G__28430 = (0);
var G__28431 = (0);
seq__28136_28333 = G__28428;
chunk__28140_28334 = G__28429;
count__28141_28335 = G__28430;
i__28142_28336 = G__28431;
continue;
}
} else {
var G__28432 = cljs.core.next(seq__28136_28384__$1);
var G__28433 = null;
var G__28434 = (0);
var G__28435 = (0);
seq__28136_28333 = G__28432;
chunk__28140_28334 = G__28433;
count__28141_28335 = G__28434;
i__28142_28336 = G__28435;
continue;
}
}
} else {
}
}
break;
}


var G__28436 = seq__28020;
var G__28437 = chunk__28022;
var G__28438 = count__28023;
var G__28439 = (i__28024 + (1));
seq__28020 = G__28436;
chunk__28022 = G__28437;
count__28023 = G__28438;
i__28024 = G__28439;
continue;
} else {
var G__28440 = seq__28020;
var G__28441 = chunk__28022;
var G__28442 = count__28023;
var G__28443 = (i__28024 + (1));
seq__28020 = G__28440;
chunk__28022 = G__28441;
count__28023 = G__28442;
i__28024 = G__28443;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28020);
if(temp__5804__auto__){
var seq__28020__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28020__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28020__$1);
var G__28444 = cljs.core.chunk_rest(seq__28020__$1);
var G__28445 = c__5525__auto__;
var G__28446 = cljs.core.count(c__5525__auto__);
var G__28447 = (0);
seq__28020 = G__28444;
chunk__28022 = G__28445;
count__28023 = G__28446;
i__28024 = G__28447;
continue;
} else {
var path = cljs.core.first(seq__28020__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28192_28448 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28196_28449 = null;
var count__28197_28450 = (0);
var i__28198_28451 = (0);
while(true){
if((i__28198_28451 < count__28197_28450)){
var node_28452 = chunk__28196_28449.cljs$core$IIndexed$_nth$arity$2(null, i__28198_28451);
if(cljs.core.not(node_28452.shadow$old)){
var path_match_28453 = shadow.cljs.devtools.client.browser.match_paths(node_28452.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28453)){
var new_link_28454 = (function (){var G__28224 = node_28452.cloneNode(true);
G__28224.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28453),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28224;
})();
(node_28452.shadow$old = true);

(new_link_28454.onload = ((function (seq__28192_28448,chunk__28196_28449,count__28197_28450,i__28198_28451,seq__28020,chunk__28022,count__28023,i__28024,new_link_28454,path_match_28453,node_28452,path,seq__28020__$1,temp__5804__auto__,map__28019,map__28019__$1,msg,updates,reload_info){
return (function (e){
var seq__28225_28455 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28227_28456 = null;
var count__28228_28457 = (0);
var i__28229_28458 = (0);
while(true){
if((i__28229_28458 < count__28228_28457)){
var map__28233_28459 = chunk__28227_28456.cljs$core$IIndexed$_nth$arity$2(null, i__28229_28458);
var map__28233_28460__$1 = cljs.core.__destructure_map(map__28233_28459);
var task_28461 = map__28233_28460__$1;
var fn_str_28462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28233_28460__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28233_28460__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28464 = goog.getObjectByName(fn_str_28462,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28463)].join(''));

(fn_obj_28464.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28464.cljs$core$IFn$_invoke$arity$2(path,new_link_28454) : fn_obj_28464.call(null, path,new_link_28454));


var G__28465 = seq__28225_28455;
var G__28466 = chunk__28227_28456;
var G__28467 = count__28228_28457;
var G__28468 = (i__28229_28458 + (1));
seq__28225_28455 = G__28465;
chunk__28227_28456 = G__28466;
count__28228_28457 = G__28467;
i__28229_28458 = G__28468;
continue;
} else {
var temp__5804__auto___28469__$1 = cljs.core.seq(seq__28225_28455);
if(temp__5804__auto___28469__$1){
var seq__28225_28470__$1 = temp__5804__auto___28469__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28225_28470__$1)){
var c__5525__auto___28471 = cljs.core.chunk_first(seq__28225_28470__$1);
var G__28472 = cljs.core.chunk_rest(seq__28225_28470__$1);
var G__28473 = c__5525__auto___28471;
var G__28474 = cljs.core.count(c__5525__auto___28471);
var G__28475 = (0);
seq__28225_28455 = G__28472;
chunk__28227_28456 = G__28473;
count__28228_28457 = G__28474;
i__28229_28458 = G__28475;
continue;
} else {
var map__28234_28476 = cljs.core.first(seq__28225_28470__$1);
var map__28234_28477__$1 = cljs.core.__destructure_map(map__28234_28476);
var task_28478 = map__28234_28477__$1;
var fn_str_28479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28234_28477__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28234_28477__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28481 = goog.getObjectByName(fn_str_28479,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28480)].join(''));

(fn_obj_28481.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28481.cljs$core$IFn$_invoke$arity$2(path,new_link_28454) : fn_obj_28481.call(null, path,new_link_28454));


var G__28482 = cljs.core.next(seq__28225_28470__$1);
var G__28483 = null;
var G__28484 = (0);
var G__28485 = (0);
seq__28225_28455 = G__28482;
chunk__28227_28456 = G__28483;
count__28228_28457 = G__28484;
i__28229_28458 = G__28485;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28452);
});})(seq__28192_28448,chunk__28196_28449,count__28197_28450,i__28198_28451,seq__28020,chunk__28022,count__28023,i__28024,new_link_28454,path_match_28453,node_28452,path,seq__28020__$1,temp__5804__auto__,map__28019,map__28019__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28453], 0));

goog.dom.insertSiblingAfter(new_link_28454,node_28452);


var G__28486 = seq__28192_28448;
var G__28487 = chunk__28196_28449;
var G__28488 = count__28197_28450;
var G__28489 = (i__28198_28451 + (1));
seq__28192_28448 = G__28486;
chunk__28196_28449 = G__28487;
count__28197_28450 = G__28488;
i__28198_28451 = G__28489;
continue;
} else {
var G__28490 = seq__28192_28448;
var G__28491 = chunk__28196_28449;
var G__28492 = count__28197_28450;
var G__28493 = (i__28198_28451 + (1));
seq__28192_28448 = G__28490;
chunk__28196_28449 = G__28491;
count__28197_28450 = G__28492;
i__28198_28451 = G__28493;
continue;
}
} else {
var G__28494 = seq__28192_28448;
var G__28495 = chunk__28196_28449;
var G__28496 = count__28197_28450;
var G__28497 = (i__28198_28451 + (1));
seq__28192_28448 = G__28494;
chunk__28196_28449 = G__28495;
count__28197_28450 = G__28496;
i__28198_28451 = G__28497;
continue;
}
} else {
var temp__5804__auto___28498__$1 = cljs.core.seq(seq__28192_28448);
if(temp__5804__auto___28498__$1){
var seq__28192_28499__$1 = temp__5804__auto___28498__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28192_28499__$1)){
var c__5525__auto___28500 = cljs.core.chunk_first(seq__28192_28499__$1);
var G__28501 = cljs.core.chunk_rest(seq__28192_28499__$1);
var G__28502 = c__5525__auto___28500;
var G__28503 = cljs.core.count(c__5525__auto___28500);
var G__28504 = (0);
seq__28192_28448 = G__28501;
chunk__28196_28449 = G__28502;
count__28197_28450 = G__28503;
i__28198_28451 = G__28504;
continue;
} else {
var node_28505 = cljs.core.first(seq__28192_28499__$1);
if(cljs.core.not(node_28505.shadow$old)){
var path_match_28506 = shadow.cljs.devtools.client.browser.match_paths(node_28505.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28506)){
var new_link_28507 = (function (){var G__28235 = node_28505.cloneNode(true);
G__28235.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28506),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28235;
})();
(node_28505.shadow$old = true);

(new_link_28507.onload = ((function (seq__28192_28448,chunk__28196_28449,count__28197_28450,i__28198_28451,seq__28020,chunk__28022,count__28023,i__28024,new_link_28507,path_match_28506,node_28505,seq__28192_28499__$1,temp__5804__auto___28498__$1,path,seq__28020__$1,temp__5804__auto__,map__28019,map__28019__$1,msg,updates,reload_info){
return (function (e){
var seq__28236_28508 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28238_28509 = null;
var count__28239_28510 = (0);
var i__28240_28511 = (0);
while(true){
if((i__28240_28511 < count__28239_28510)){
var map__28244_28512 = chunk__28238_28509.cljs$core$IIndexed$_nth$arity$2(null, i__28240_28511);
var map__28244_28513__$1 = cljs.core.__destructure_map(map__28244_28512);
var task_28514 = map__28244_28513__$1;
var fn_str_28515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28244_28513__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28244_28513__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28517 = goog.getObjectByName(fn_str_28515,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28516)].join(''));

(fn_obj_28517.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28517.cljs$core$IFn$_invoke$arity$2(path,new_link_28507) : fn_obj_28517.call(null, path,new_link_28507));


var G__28518 = seq__28236_28508;
var G__28519 = chunk__28238_28509;
var G__28520 = count__28239_28510;
var G__28521 = (i__28240_28511 + (1));
seq__28236_28508 = G__28518;
chunk__28238_28509 = G__28519;
count__28239_28510 = G__28520;
i__28240_28511 = G__28521;
continue;
} else {
var temp__5804__auto___28522__$2 = cljs.core.seq(seq__28236_28508);
if(temp__5804__auto___28522__$2){
var seq__28236_28523__$1 = temp__5804__auto___28522__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28236_28523__$1)){
var c__5525__auto___28524 = cljs.core.chunk_first(seq__28236_28523__$1);
var G__28525 = cljs.core.chunk_rest(seq__28236_28523__$1);
var G__28526 = c__5525__auto___28524;
var G__28527 = cljs.core.count(c__5525__auto___28524);
var G__28528 = (0);
seq__28236_28508 = G__28525;
chunk__28238_28509 = G__28526;
count__28239_28510 = G__28527;
i__28240_28511 = G__28528;
continue;
} else {
var map__28245_28529 = cljs.core.first(seq__28236_28523__$1);
var map__28245_28530__$1 = cljs.core.__destructure_map(map__28245_28529);
var task_28531 = map__28245_28530__$1;
var fn_str_28532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28245_28530__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28245_28530__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28534 = goog.getObjectByName(fn_str_28532,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28533)].join(''));

(fn_obj_28534.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28534.cljs$core$IFn$_invoke$arity$2(path,new_link_28507) : fn_obj_28534.call(null, path,new_link_28507));


var G__28535 = cljs.core.next(seq__28236_28523__$1);
var G__28536 = null;
var G__28537 = (0);
var G__28538 = (0);
seq__28236_28508 = G__28535;
chunk__28238_28509 = G__28536;
count__28239_28510 = G__28537;
i__28240_28511 = G__28538;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28505);
});})(seq__28192_28448,chunk__28196_28449,count__28197_28450,i__28198_28451,seq__28020,chunk__28022,count__28023,i__28024,new_link_28507,path_match_28506,node_28505,seq__28192_28499__$1,temp__5804__auto___28498__$1,path,seq__28020__$1,temp__5804__auto__,map__28019,map__28019__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28506], 0));

goog.dom.insertSiblingAfter(new_link_28507,node_28505);


var G__28539 = cljs.core.next(seq__28192_28499__$1);
var G__28540 = null;
var G__28541 = (0);
var G__28542 = (0);
seq__28192_28448 = G__28539;
chunk__28196_28449 = G__28540;
count__28197_28450 = G__28541;
i__28198_28451 = G__28542;
continue;
} else {
var G__28543 = cljs.core.next(seq__28192_28499__$1);
var G__28544 = null;
var G__28545 = (0);
var G__28546 = (0);
seq__28192_28448 = G__28543;
chunk__28196_28449 = G__28544;
count__28197_28450 = G__28545;
i__28198_28451 = G__28546;
continue;
}
} else {
var G__28547 = cljs.core.next(seq__28192_28499__$1);
var G__28548 = null;
var G__28549 = (0);
var G__28550 = (0);
seq__28192_28448 = G__28547;
chunk__28196_28449 = G__28548;
count__28197_28450 = G__28549;
i__28198_28451 = G__28550;
continue;
}
}
} else {
}
}
break;
}


var G__28551 = cljs.core.next(seq__28020__$1);
var G__28552 = null;
var G__28553 = (0);
var G__28554 = (0);
seq__28020 = G__28551;
chunk__28022 = G__28552;
count__28023 = G__28553;
i__28024 = G__28554;
continue;
} else {
var G__28555 = cljs.core.next(seq__28020__$1);
var G__28556 = null;
var G__28557 = (0);
var G__28558 = (0);
seq__28020 = G__28555;
chunk__28022 = G__28556;
count__28023 = G__28557;
i__28024 = G__28558;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__28246){
var map__28247 = p__28246;
var map__28247__$1 = cljs.core.__destructure_map(map__28247);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28247__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__28248,done,error){
var map__28249 = p__28248;
var map__28249__$1 = cljs.core.__destructure_map(map__28249);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28249__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__28250,done,error){
var map__28251 = p__28250;
var map__28251__$1 = cljs.core.__destructure_map(map__28251);
var msg = map__28251__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28251__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28251__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28251__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__28252){
var map__28253 = p__28252;
var map__28253__$1 = cljs.core.__destructure_map(map__28253);
var src = map__28253__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28253__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__28254 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__28254) : done.call(null, G__28254));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__28255){
var map__28256 = p__28255;
var map__28256__$1 = cljs.core.__destructure_map(map__28256);
var msg__$1 = map__28256__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28256__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e28257){var ex = e28257;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__28258){
var map__28259 = p__28258;
var map__28259__$1 = cljs.core.__destructure_map(map__28259);
var env = map__28259__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28259__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__28260){
var map__28261 = p__28260;
var map__28261__$1 = cljs.core.__destructure_map(map__28261);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28261__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28261__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__28263){
var map__28264 = p__28263;
var map__28264__$1 = cljs.core.__destructure_map(map__28264);
var svc = map__28264__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28264__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
