goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29617 = arguments.length;
var i__5727__auto___29618 = (0);
while(true){
if((i__5727__auto___29618 < len__5726__auto___29617)){
args__5732__auto__.push((arguments[i__5727__auto___29618]));

var G__29619 = (i__5727__auto___29618 + (1));
i__5727__auto___29618 = G__29619;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq29337){
var G__29338 = cljs.core.first(seq29337);
var seq29337__$1 = cljs.core.next(seq29337);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29338,seq29337__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__29341 = cljs.core.seq(sources);
var chunk__29342 = null;
var count__29343 = (0);
var i__29344 = (0);
while(true){
if((i__29344 < count__29343)){
var map__29349 = chunk__29342.cljs$core$IIndexed$_nth$arity$2(null, i__29344);
var map__29349__$1 = cljs.core.__destructure_map(map__29349);
var src = map__29349__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29349__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29349__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29349__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29349__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e29350){var e_29620 = e29350;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_29620);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_29620.message)].join('')));
}

var G__29621 = seq__29341;
var G__29622 = chunk__29342;
var G__29623 = count__29343;
var G__29624 = (i__29344 + (1));
seq__29341 = G__29621;
chunk__29342 = G__29622;
count__29343 = G__29623;
i__29344 = G__29624;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29341);
if(temp__5804__auto__){
var seq__29341__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29341__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29341__$1);
var G__29625 = cljs.core.chunk_rest(seq__29341__$1);
var G__29626 = c__5525__auto__;
var G__29627 = cljs.core.count(c__5525__auto__);
var G__29628 = (0);
seq__29341 = G__29625;
chunk__29342 = G__29626;
count__29343 = G__29627;
i__29344 = G__29628;
continue;
} else {
var map__29351 = cljs.core.first(seq__29341__$1);
var map__29351__$1 = cljs.core.__destructure_map(map__29351);
var src = map__29351__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29351__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29351__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29351__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e29352){var e_29629 = e29352;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_29629);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_29629.message)].join('')));
}

var G__29630 = cljs.core.next(seq__29341__$1);
var G__29631 = null;
var G__29632 = (0);
var G__29633 = (0);
seq__29341 = G__29630;
chunk__29342 = G__29631;
count__29343 = G__29632;
i__29344 = G__29633;
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
var seq__29353 = cljs.core.seq(js_requires);
var chunk__29354 = null;
var count__29355 = (0);
var i__29356 = (0);
while(true){
if((i__29356 < count__29355)){
var js_ns = chunk__29354.cljs$core$IIndexed$_nth$arity$2(null, i__29356);
var require_str_29634 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29634);


var G__29635 = seq__29353;
var G__29636 = chunk__29354;
var G__29637 = count__29355;
var G__29638 = (i__29356 + (1));
seq__29353 = G__29635;
chunk__29354 = G__29636;
count__29355 = G__29637;
i__29356 = G__29638;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29353);
if(temp__5804__auto__){
var seq__29353__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29353__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29353__$1);
var G__29639 = cljs.core.chunk_rest(seq__29353__$1);
var G__29640 = c__5525__auto__;
var G__29641 = cljs.core.count(c__5525__auto__);
var G__29642 = (0);
seq__29353 = G__29639;
chunk__29354 = G__29640;
count__29355 = G__29641;
i__29356 = G__29642;
continue;
} else {
var js_ns = cljs.core.first(seq__29353__$1);
var require_str_29643 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29643);


var G__29644 = cljs.core.next(seq__29353__$1);
var G__29645 = null;
var G__29646 = (0);
var G__29647 = (0);
seq__29353 = G__29644;
chunk__29354 = G__29645;
count__29355 = G__29646;
i__29356 = G__29647;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__29358){
var map__29359 = p__29358;
var map__29359__$1 = cljs.core.__destructure_map(map__29359);
var msg = map__29359__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29359__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29359__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29360(s__29361){
return (new cljs.core.LazySeq(null,(function (){
var s__29361__$1 = s__29361;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29361__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__29366 = cljs.core.first(xs__6360__auto__);
var map__29366__$1 = cljs.core.__destructure_map(map__29366);
var src = map__29366__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29366__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29366__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__29361__$1,map__29366,map__29366__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__29359,map__29359__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29360_$_iter__29362(s__29363){
return (new cljs.core.LazySeq(null,((function (s__29361__$1,map__29366,map__29366__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__29359,map__29359__$1,msg,info,reload_info){
return (function (){
var s__29363__$1 = s__29363;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29363__$1);
if(temp__5804__auto____$1){
var s__29363__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29363__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__29363__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__29365 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__29364 = (0);
while(true){
if((i__29364 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__29364);
cljs.core.chunk_append(b__29365,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29648 = (i__29364 + (1));
i__29364 = G__29648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29365),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29360_$_iter__29362(cljs.core.chunk_rest(s__29363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29365),null);
}
} else {
var warning = cljs.core.first(s__29363__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29360_$_iter__29362(cljs.core.rest(s__29363__$2)));
}
} else {
return null;
}
break;
}
});})(s__29361__$1,map__29366,map__29366__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__29359,map__29359__$1,msg,info,reload_info))
,null,null));
});})(s__29361__$1,map__29366,map__29366__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__29359,map__29359__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29360(cljs.core.rest(s__29361__$1)));
} else {
var G__29649 = cljs.core.rest(s__29361__$1);
s__29361__$1 = G__29649;
continue;
}
} else {
var G__29650 = cljs.core.rest(s__29361__$1);
s__29361__$1 = G__29650;
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
var seq__29367_29651 = cljs.core.seq(warnings);
var chunk__29368_29652 = null;
var count__29369_29653 = (0);
var i__29370_29654 = (0);
while(true){
if((i__29370_29654 < count__29369_29653)){
var map__29373_29655 = chunk__29368_29652.cljs$core$IIndexed$_nth$arity$2(null, i__29370_29654);
var map__29373_29656__$1 = cljs.core.__destructure_map(map__29373_29655);
var w_29657 = map__29373_29656__$1;
var msg_29658__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29373_29656__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29373_29656__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29373_29656__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29373_29656__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29661)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29659),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29660),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29658__$1)].join(''));


var G__29662 = seq__29367_29651;
var G__29663 = chunk__29368_29652;
var G__29664 = count__29369_29653;
var G__29665 = (i__29370_29654 + (1));
seq__29367_29651 = G__29662;
chunk__29368_29652 = G__29663;
count__29369_29653 = G__29664;
i__29370_29654 = G__29665;
continue;
} else {
var temp__5804__auto___29666 = cljs.core.seq(seq__29367_29651);
if(temp__5804__auto___29666){
var seq__29367_29667__$1 = temp__5804__auto___29666;
if(cljs.core.chunked_seq_QMARK_(seq__29367_29667__$1)){
var c__5525__auto___29668 = cljs.core.chunk_first(seq__29367_29667__$1);
var G__29669 = cljs.core.chunk_rest(seq__29367_29667__$1);
var G__29670 = c__5525__auto___29668;
var G__29671 = cljs.core.count(c__5525__auto___29668);
var G__29672 = (0);
seq__29367_29651 = G__29669;
chunk__29368_29652 = G__29670;
count__29369_29653 = G__29671;
i__29370_29654 = G__29672;
continue;
} else {
var map__29374_29673 = cljs.core.first(seq__29367_29667__$1);
var map__29374_29674__$1 = cljs.core.__destructure_map(map__29374_29673);
var w_29675 = map__29374_29674__$1;
var msg_29676__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29374_29674__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29374_29674__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29374_29674__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29374_29674__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29679)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29677),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29678),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29676__$1)].join(''));


var G__29680 = cljs.core.next(seq__29367_29667__$1);
var G__29681 = null;
var G__29682 = (0);
var G__29683 = (0);
seq__29367_29651 = G__29680;
chunk__29368_29652 = G__29681;
count__29369_29653 = G__29682;
i__29370_29654 = G__29683;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__29357_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__29357_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__29375){
var map__29376 = p__29375;
var map__29376__$1 = cljs.core.__destructure_map(map__29376);
var msg = map__29376__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29376__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29376__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__29377 = cljs.core.seq(updates);
var chunk__29379 = null;
var count__29380 = (0);
var i__29381 = (0);
while(true){
if((i__29381 < count__29380)){
var path = chunk__29379.cljs$core$IIndexed$_nth$arity$2(null, i__29381);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29491_29684 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29495_29685 = null;
var count__29496_29686 = (0);
var i__29497_29687 = (0);
while(true){
if((i__29497_29687 < count__29496_29686)){
var node_29688 = chunk__29495_29685.cljs$core$IIndexed$_nth$arity$2(null, i__29497_29687);
if(cljs.core.not(node_29688.shadow$old)){
var path_match_29689 = shadow.cljs.devtools.client.browser.match_paths(node_29688.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29689)){
var new_link_29690 = (function (){var G__29523 = node_29688.cloneNode(true);
G__29523.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29689),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29523;
})();
(node_29688.shadow$old = true);

(new_link_29690.onload = ((function (seq__29491_29684,chunk__29495_29685,count__29496_29686,i__29497_29687,seq__29377,chunk__29379,count__29380,i__29381,new_link_29690,path_match_29689,node_29688,path,map__29376,map__29376__$1,msg,updates,reload_info){
return (function (e){
var seq__29524_29691 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29526_29692 = null;
var count__29527_29693 = (0);
var i__29528_29694 = (0);
while(true){
if((i__29528_29694 < count__29527_29693)){
var map__29532_29695 = chunk__29526_29692.cljs$core$IIndexed$_nth$arity$2(null, i__29528_29694);
var map__29532_29696__$1 = cljs.core.__destructure_map(map__29532_29695);
var task_29697 = map__29532_29696__$1;
var fn_str_29698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29532_29696__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29532_29696__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29700 = goog.getObjectByName(fn_str_29698,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29699)].join(''));

(fn_obj_29700.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29700.cljs$core$IFn$_invoke$arity$2(path,new_link_29690) : fn_obj_29700.call(null, path,new_link_29690));


var G__29701 = seq__29524_29691;
var G__29702 = chunk__29526_29692;
var G__29703 = count__29527_29693;
var G__29704 = (i__29528_29694 + (1));
seq__29524_29691 = G__29701;
chunk__29526_29692 = G__29702;
count__29527_29693 = G__29703;
i__29528_29694 = G__29704;
continue;
} else {
var temp__5804__auto___29705 = cljs.core.seq(seq__29524_29691);
if(temp__5804__auto___29705){
var seq__29524_29706__$1 = temp__5804__auto___29705;
if(cljs.core.chunked_seq_QMARK_(seq__29524_29706__$1)){
var c__5525__auto___29707 = cljs.core.chunk_first(seq__29524_29706__$1);
var G__29708 = cljs.core.chunk_rest(seq__29524_29706__$1);
var G__29709 = c__5525__auto___29707;
var G__29710 = cljs.core.count(c__5525__auto___29707);
var G__29711 = (0);
seq__29524_29691 = G__29708;
chunk__29526_29692 = G__29709;
count__29527_29693 = G__29710;
i__29528_29694 = G__29711;
continue;
} else {
var map__29533_29712 = cljs.core.first(seq__29524_29706__$1);
var map__29533_29713__$1 = cljs.core.__destructure_map(map__29533_29712);
var task_29714 = map__29533_29713__$1;
var fn_str_29715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29533_29713__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29533_29713__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29717 = goog.getObjectByName(fn_str_29715,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29716)].join(''));

(fn_obj_29717.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29717.cljs$core$IFn$_invoke$arity$2(path,new_link_29690) : fn_obj_29717.call(null, path,new_link_29690));


var G__29718 = cljs.core.next(seq__29524_29706__$1);
var G__29719 = null;
var G__29720 = (0);
var G__29721 = (0);
seq__29524_29691 = G__29718;
chunk__29526_29692 = G__29719;
count__29527_29693 = G__29720;
i__29528_29694 = G__29721;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_29688);
});})(seq__29491_29684,chunk__29495_29685,count__29496_29686,i__29497_29687,seq__29377,chunk__29379,count__29380,i__29381,new_link_29690,path_match_29689,node_29688,path,map__29376,map__29376__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29689], 0));

goog.dom.insertSiblingAfter(new_link_29690,node_29688);


var G__29722 = seq__29491_29684;
var G__29723 = chunk__29495_29685;
var G__29724 = count__29496_29686;
var G__29725 = (i__29497_29687 + (1));
seq__29491_29684 = G__29722;
chunk__29495_29685 = G__29723;
count__29496_29686 = G__29724;
i__29497_29687 = G__29725;
continue;
} else {
var G__29726 = seq__29491_29684;
var G__29727 = chunk__29495_29685;
var G__29728 = count__29496_29686;
var G__29729 = (i__29497_29687 + (1));
seq__29491_29684 = G__29726;
chunk__29495_29685 = G__29727;
count__29496_29686 = G__29728;
i__29497_29687 = G__29729;
continue;
}
} else {
var G__29730 = seq__29491_29684;
var G__29731 = chunk__29495_29685;
var G__29732 = count__29496_29686;
var G__29733 = (i__29497_29687 + (1));
seq__29491_29684 = G__29730;
chunk__29495_29685 = G__29731;
count__29496_29686 = G__29732;
i__29497_29687 = G__29733;
continue;
}
} else {
var temp__5804__auto___29734 = cljs.core.seq(seq__29491_29684);
if(temp__5804__auto___29734){
var seq__29491_29735__$1 = temp__5804__auto___29734;
if(cljs.core.chunked_seq_QMARK_(seq__29491_29735__$1)){
var c__5525__auto___29736 = cljs.core.chunk_first(seq__29491_29735__$1);
var G__29737 = cljs.core.chunk_rest(seq__29491_29735__$1);
var G__29738 = c__5525__auto___29736;
var G__29739 = cljs.core.count(c__5525__auto___29736);
var G__29740 = (0);
seq__29491_29684 = G__29737;
chunk__29495_29685 = G__29738;
count__29496_29686 = G__29739;
i__29497_29687 = G__29740;
continue;
} else {
var node_29741 = cljs.core.first(seq__29491_29735__$1);
if(cljs.core.not(node_29741.shadow$old)){
var path_match_29742 = shadow.cljs.devtools.client.browser.match_paths(node_29741.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29742)){
var new_link_29743 = (function (){var G__29534 = node_29741.cloneNode(true);
G__29534.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29742),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29534;
})();
(node_29741.shadow$old = true);

(new_link_29743.onload = ((function (seq__29491_29684,chunk__29495_29685,count__29496_29686,i__29497_29687,seq__29377,chunk__29379,count__29380,i__29381,new_link_29743,path_match_29742,node_29741,seq__29491_29735__$1,temp__5804__auto___29734,path,map__29376,map__29376__$1,msg,updates,reload_info){
return (function (e){
var seq__29535_29744 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29537_29745 = null;
var count__29538_29746 = (0);
var i__29539_29747 = (0);
while(true){
if((i__29539_29747 < count__29538_29746)){
var map__29543_29748 = chunk__29537_29745.cljs$core$IIndexed$_nth$arity$2(null, i__29539_29747);
var map__29543_29749__$1 = cljs.core.__destructure_map(map__29543_29748);
var task_29750 = map__29543_29749__$1;
var fn_str_29751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29543_29749__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29543_29749__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29753 = goog.getObjectByName(fn_str_29751,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29752)].join(''));

(fn_obj_29753.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29753.cljs$core$IFn$_invoke$arity$2(path,new_link_29743) : fn_obj_29753.call(null, path,new_link_29743));


var G__29754 = seq__29535_29744;
var G__29755 = chunk__29537_29745;
var G__29756 = count__29538_29746;
var G__29757 = (i__29539_29747 + (1));
seq__29535_29744 = G__29754;
chunk__29537_29745 = G__29755;
count__29538_29746 = G__29756;
i__29539_29747 = G__29757;
continue;
} else {
var temp__5804__auto___29758__$1 = cljs.core.seq(seq__29535_29744);
if(temp__5804__auto___29758__$1){
var seq__29535_29759__$1 = temp__5804__auto___29758__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29535_29759__$1)){
var c__5525__auto___29760 = cljs.core.chunk_first(seq__29535_29759__$1);
var G__29761 = cljs.core.chunk_rest(seq__29535_29759__$1);
var G__29762 = c__5525__auto___29760;
var G__29763 = cljs.core.count(c__5525__auto___29760);
var G__29764 = (0);
seq__29535_29744 = G__29761;
chunk__29537_29745 = G__29762;
count__29538_29746 = G__29763;
i__29539_29747 = G__29764;
continue;
} else {
var map__29544_29765 = cljs.core.first(seq__29535_29759__$1);
var map__29544_29766__$1 = cljs.core.__destructure_map(map__29544_29765);
var task_29767 = map__29544_29766__$1;
var fn_str_29768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29544_29766__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29544_29766__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29770 = goog.getObjectByName(fn_str_29768,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29769)].join(''));

(fn_obj_29770.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29770.cljs$core$IFn$_invoke$arity$2(path,new_link_29743) : fn_obj_29770.call(null, path,new_link_29743));


var G__29771 = cljs.core.next(seq__29535_29759__$1);
var G__29772 = null;
var G__29773 = (0);
var G__29774 = (0);
seq__29535_29744 = G__29771;
chunk__29537_29745 = G__29772;
count__29538_29746 = G__29773;
i__29539_29747 = G__29774;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_29741);
});})(seq__29491_29684,chunk__29495_29685,count__29496_29686,i__29497_29687,seq__29377,chunk__29379,count__29380,i__29381,new_link_29743,path_match_29742,node_29741,seq__29491_29735__$1,temp__5804__auto___29734,path,map__29376,map__29376__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29742], 0));

goog.dom.insertSiblingAfter(new_link_29743,node_29741);


var G__29775 = cljs.core.next(seq__29491_29735__$1);
var G__29776 = null;
var G__29777 = (0);
var G__29778 = (0);
seq__29491_29684 = G__29775;
chunk__29495_29685 = G__29776;
count__29496_29686 = G__29777;
i__29497_29687 = G__29778;
continue;
} else {
var G__29779 = cljs.core.next(seq__29491_29735__$1);
var G__29780 = null;
var G__29781 = (0);
var G__29782 = (0);
seq__29491_29684 = G__29779;
chunk__29495_29685 = G__29780;
count__29496_29686 = G__29781;
i__29497_29687 = G__29782;
continue;
}
} else {
var G__29783 = cljs.core.next(seq__29491_29735__$1);
var G__29784 = null;
var G__29785 = (0);
var G__29786 = (0);
seq__29491_29684 = G__29783;
chunk__29495_29685 = G__29784;
count__29496_29686 = G__29785;
i__29497_29687 = G__29786;
continue;
}
}
} else {
}
}
break;
}


var G__29787 = seq__29377;
var G__29788 = chunk__29379;
var G__29789 = count__29380;
var G__29790 = (i__29381 + (1));
seq__29377 = G__29787;
chunk__29379 = G__29788;
count__29380 = G__29789;
i__29381 = G__29790;
continue;
} else {
var G__29791 = seq__29377;
var G__29792 = chunk__29379;
var G__29793 = count__29380;
var G__29794 = (i__29381 + (1));
seq__29377 = G__29791;
chunk__29379 = G__29792;
count__29380 = G__29793;
i__29381 = G__29794;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29377);
if(temp__5804__auto__){
var seq__29377__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29377__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29377__$1);
var G__29795 = cljs.core.chunk_rest(seq__29377__$1);
var G__29796 = c__5525__auto__;
var G__29797 = cljs.core.count(c__5525__auto__);
var G__29798 = (0);
seq__29377 = G__29795;
chunk__29379 = G__29796;
count__29380 = G__29797;
i__29381 = G__29798;
continue;
} else {
var path = cljs.core.first(seq__29377__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29545_29799 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29549_29800 = null;
var count__29550_29801 = (0);
var i__29551_29802 = (0);
while(true){
if((i__29551_29802 < count__29550_29801)){
var node_29803 = chunk__29549_29800.cljs$core$IIndexed$_nth$arity$2(null, i__29551_29802);
if(cljs.core.not(node_29803.shadow$old)){
var path_match_29804 = shadow.cljs.devtools.client.browser.match_paths(node_29803.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29804)){
var new_link_29805 = (function (){var G__29577 = node_29803.cloneNode(true);
G__29577.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29804),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29577;
})();
(node_29803.shadow$old = true);

(new_link_29805.onload = ((function (seq__29545_29799,chunk__29549_29800,count__29550_29801,i__29551_29802,seq__29377,chunk__29379,count__29380,i__29381,new_link_29805,path_match_29804,node_29803,path,seq__29377__$1,temp__5804__auto__,map__29376,map__29376__$1,msg,updates,reload_info){
return (function (e){
var seq__29578_29806 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29580_29807 = null;
var count__29581_29808 = (0);
var i__29582_29809 = (0);
while(true){
if((i__29582_29809 < count__29581_29808)){
var map__29586_29810 = chunk__29580_29807.cljs$core$IIndexed$_nth$arity$2(null, i__29582_29809);
var map__29586_29811__$1 = cljs.core.__destructure_map(map__29586_29810);
var task_29812 = map__29586_29811__$1;
var fn_str_29813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29586_29811__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29586_29811__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29815 = goog.getObjectByName(fn_str_29813,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29814)].join(''));

(fn_obj_29815.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29815.cljs$core$IFn$_invoke$arity$2(path,new_link_29805) : fn_obj_29815.call(null, path,new_link_29805));


var G__29816 = seq__29578_29806;
var G__29817 = chunk__29580_29807;
var G__29818 = count__29581_29808;
var G__29819 = (i__29582_29809 + (1));
seq__29578_29806 = G__29816;
chunk__29580_29807 = G__29817;
count__29581_29808 = G__29818;
i__29582_29809 = G__29819;
continue;
} else {
var temp__5804__auto___29820__$1 = cljs.core.seq(seq__29578_29806);
if(temp__5804__auto___29820__$1){
var seq__29578_29821__$1 = temp__5804__auto___29820__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29578_29821__$1)){
var c__5525__auto___29822 = cljs.core.chunk_first(seq__29578_29821__$1);
var G__29823 = cljs.core.chunk_rest(seq__29578_29821__$1);
var G__29824 = c__5525__auto___29822;
var G__29825 = cljs.core.count(c__5525__auto___29822);
var G__29826 = (0);
seq__29578_29806 = G__29823;
chunk__29580_29807 = G__29824;
count__29581_29808 = G__29825;
i__29582_29809 = G__29826;
continue;
} else {
var map__29587_29827 = cljs.core.first(seq__29578_29821__$1);
var map__29587_29828__$1 = cljs.core.__destructure_map(map__29587_29827);
var task_29829 = map__29587_29828__$1;
var fn_str_29830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29587_29828__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29587_29828__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29832 = goog.getObjectByName(fn_str_29830,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29831)].join(''));

(fn_obj_29832.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29832.cljs$core$IFn$_invoke$arity$2(path,new_link_29805) : fn_obj_29832.call(null, path,new_link_29805));


var G__29833 = cljs.core.next(seq__29578_29821__$1);
var G__29834 = null;
var G__29835 = (0);
var G__29836 = (0);
seq__29578_29806 = G__29833;
chunk__29580_29807 = G__29834;
count__29581_29808 = G__29835;
i__29582_29809 = G__29836;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_29803);
});})(seq__29545_29799,chunk__29549_29800,count__29550_29801,i__29551_29802,seq__29377,chunk__29379,count__29380,i__29381,new_link_29805,path_match_29804,node_29803,path,seq__29377__$1,temp__5804__auto__,map__29376,map__29376__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29804], 0));

goog.dom.insertSiblingAfter(new_link_29805,node_29803);


var G__29837 = seq__29545_29799;
var G__29838 = chunk__29549_29800;
var G__29839 = count__29550_29801;
var G__29840 = (i__29551_29802 + (1));
seq__29545_29799 = G__29837;
chunk__29549_29800 = G__29838;
count__29550_29801 = G__29839;
i__29551_29802 = G__29840;
continue;
} else {
var G__29841 = seq__29545_29799;
var G__29842 = chunk__29549_29800;
var G__29843 = count__29550_29801;
var G__29844 = (i__29551_29802 + (1));
seq__29545_29799 = G__29841;
chunk__29549_29800 = G__29842;
count__29550_29801 = G__29843;
i__29551_29802 = G__29844;
continue;
}
} else {
var G__29845 = seq__29545_29799;
var G__29846 = chunk__29549_29800;
var G__29847 = count__29550_29801;
var G__29848 = (i__29551_29802 + (1));
seq__29545_29799 = G__29845;
chunk__29549_29800 = G__29846;
count__29550_29801 = G__29847;
i__29551_29802 = G__29848;
continue;
}
} else {
var temp__5804__auto___29849__$1 = cljs.core.seq(seq__29545_29799);
if(temp__5804__auto___29849__$1){
var seq__29545_29850__$1 = temp__5804__auto___29849__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29545_29850__$1)){
var c__5525__auto___29851 = cljs.core.chunk_first(seq__29545_29850__$1);
var G__29852 = cljs.core.chunk_rest(seq__29545_29850__$1);
var G__29853 = c__5525__auto___29851;
var G__29854 = cljs.core.count(c__5525__auto___29851);
var G__29855 = (0);
seq__29545_29799 = G__29852;
chunk__29549_29800 = G__29853;
count__29550_29801 = G__29854;
i__29551_29802 = G__29855;
continue;
} else {
var node_29856 = cljs.core.first(seq__29545_29850__$1);
if(cljs.core.not(node_29856.shadow$old)){
var path_match_29857 = shadow.cljs.devtools.client.browser.match_paths(node_29856.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29857)){
var new_link_29858 = (function (){var G__29588 = node_29856.cloneNode(true);
G__29588.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29857),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29588;
})();
(node_29856.shadow$old = true);

(new_link_29858.onload = ((function (seq__29545_29799,chunk__29549_29800,count__29550_29801,i__29551_29802,seq__29377,chunk__29379,count__29380,i__29381,new_link_29858,path_match_29857,node_29856,seq__29545_29850__$1,temp__5804__auto___29849__$1,path,seq__29377__$1,temp__5804__auto__,map__29376,map__29376__$1,msg,updates,reload_info){
return (function (e){
var seq__29589_29859 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29591_29860 = null;
var count__29592_29861 = (0);
var i__29593_29862 = (0);
while(true){
if((i__29593_29862 < count__29592_29861)){
var map__29597_29863 = chunk__29591_29860.cljs$core$IIndexed$_nth$arity$2(null, i__29593_29862);
var map__29597_29864__$1 = cljs.core.__destructure_map(map__29597_29863);
var task_29865 = map__29597_29864__$1;
var fn_str_29866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29597_29864__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29597_29864__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29868 = goog.getObjectByName(fn_str_29866,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29867)].join(''));

(fn_obj_29868.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29868.cljs$core$IFn$_invoke$arity$2(path,new_link_29858) : fn_obj_29868.call(null, path,new_link_29858));


var G__29869 = seq__29589_29859;
var G__29870 = chunk__29591_29860;
var G__29871 = count__29592_29861;
var G__29872 = (i__29593_29862 + (1));
seq__29589_29859 = G__29869;
chunk__29591_29860 = G__29870;
count__29592_29861 = G__29871;
i__29593_29862 = G__29872;
continue;
} else {
var temp__5804__auto___29873__$2 = cljs.core.seq(seq__29589_29859);
if(temp__5804__auto___29873__$2){
var seq__29589_29874__$1 = temp__5804__auto___29873__$2;
if(cljs.core.chunked_seq_QMARK_(seq__29589_29874__$1)){
var c__5525__auto___29875 = cljs.core.chunk_first(seq__29589_29874__$1);
var G__29876 = cljs.core.chunk_rest(seq__29589_29874__$1);
var G__29877 = c__5525__auto___29875;
var G__29878 = cljs.core.count(c__5525__auto___29875);
var G__29879 = (0);
seq__29589_29859 = G__29876;
chunk__29591_29860 = G__29877;
count__29592_29861 = G__29878;
i__29593_29862 = G__29879;
continue;
} else {
var map__29598_29880 = cljs.core.first(seq__29589_29874__$1);
var map__29598_29881__$1 = cljs.core.__destructure_map(map__29598_29880);
var task_29882 = map__29598_29881__$1;
var fn_str_29883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29598_29881__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_29884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29598_29881__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_29885 = goog.getObjectByName(fn_str_29883,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_29884)].join(''));

(fn_obj_29885.cljs$core$IFn$_invoke$arity$2 ? fn_obj_29885.cljs$core$IFn$_invoke$arity$2(path,new_link_29858) : fn_obj_29885.call(null, path,new_link_29858));


var G__29886 = cljs.core.next(seq__29589_29874__$1);
var G__29887 = null;
var G__29888 = (0);
var G__29889 = (0);
seq__29589_29859 = G__29886;
chunk__29591_29860 = G__29887;
count__29592_29861 = G__29888;
i__29593_29862 = G__29889;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_29856);
});})(seq__29545_29799,chunk__29549_29800,count__29550_29801,i__29551_29802,seq__29377,chunk__29379,count__29380,i__29381,new_link_29858,path_match_29857,node_29856,seq__29545_29850__$1,temp__5804__auto___29849__$1,path,seq__29377__$1,temp__5804__auto__,map__29376,map__29376__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29857], 0));

goog.dom.insertSiblingAfter(new_link_29858,node_29856);


var G__29890 = cljs.core.next(seq__29545_29850__$1);
var G__29891 = null;
var G__29892 = (0);
var G__29893 = (0);
seq__29545_29799 = G__29890;
chunk__29549_29800 = G__29891;
count__29550_29801 = G__29892;
i__29551_29802 = G__29893;
continue;
} else {
var G__29894 = cljs.core.next(seq__29545_29850__$1);
var G__29895 = null;
var G__29896 = (0);
var G__29897 = (0);
seq__29545_29799 = G__29894;
chunk__29549_29800 = G__29895;
count__29550_29801 = G__29896;
i__29551_29802 = G__29897;
continue;
}
} else {
var G__29898 = cljs.core.next(seq__29545_29850__$1);
var G__29899 = null;
var G__29900 = (0);
var G__29901 = (0);
seq__29545_29799 = G__29898;
chunk__29549_29800 = G__29899;
count__29550_29801 = G__29900;
i__29551_29802 = G__29901;
continue;
}
}
} else {
}
}
break;
}


var G__29902 = cljs.core.next(seq__29377__$1);
var G__29903 = null;
var G__29904 = (0);
var G__29905 = (0);
seq__29377 = G__29902;
chunk__29379 = G__29903;
count__29380 = G__29904;
i__29381 = G__29905;
continue;
} else {
var G__29906 = cljs.core.next(seq__29377__$1);
var G__29907 = null;
var G__29908 = (0);
var G__29909 = (0);
seq__29377 = G__29906;
chunk__29379 = G__29907;
count__29380 = G__29908;
i__29381 = G__29909;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__29599){
var map__29600 = p__29599;
var map__29600__$1 = cljs.core.__destructure_map(map__29600);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29600__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__29601,done,error){
var map__29602 = p__29601;
var map__29602__$1 = cljs.core.__destructure_map(map__29602);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29602__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__29603,done,error){
var map__29604 = p__29603;
var map__29604__$1 = cljs.core.__destructure_map(map__29604);
var msg = map__29604__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29604__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29604__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29604__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__29605){
var map__29606 = p__29605;
var map__29606__$1 = cljs.core.__destructure_map(map__29606);
var src = map__29606__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29606__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__29607 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__29607) : done.call(null, G__29607));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__29608){
var map__29609 = p__29608;
var map__29609__$1 = cljs.core.__destructure_map(map__29609);
var msg__$1 = map__29609__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29609__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e29610){var ex = e29610;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__29611){
var map__29612 = p__29611;
var map__29612__$1 = cljs.core.__destructure_map(map__29612);
var env = map__29612__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29612__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__29613){
var map__29614 = p__29613;
var map__29614__$1 = cljs.core.__destructure_map(map__29614);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29614__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29614__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__29615){
var map__29616 = p__29615;
var map__29616__$1 = cljs.core.__destructure_map(map__29616);
var svc = map__29616__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29616__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
