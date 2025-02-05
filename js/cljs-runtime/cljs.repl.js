goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26634){
var map__26635 = p__26634;
var map__26635__$1 = cljs.core.__destructure_map(map__26635);
var m = map__26635__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26635__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26635__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26639_27254 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26640_27255 = null;
var count__26641_27256 = (0);
var i__26642_27257 = (0);
while(true){
if((i__26642_27257 < count__26641_27256)){
var f_27259 = chunk__26640_27255.cljs$core$IIndexed$_nth$arity$2(null, i__26642_27257);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27259], 0));


var G__27260 = seq__26639_27254;
var G__27261 = chunk__26640_27255;
var G__27262 = count__26641_27256;
var G__27263 = (i__26642_27257 + (1));
seq__26639_27254 = G__27260;
chunk__26640_27255 = G__27261;
count__26641_27256 = G__27262;
i__26642_27257 = G__27263;
continue;
} else {
var temp__5804__auto___27265 = cljs.core.seq(seq__26639_27254);
if(temp__5804__auto___27265){
var seq__26639_27269__$1 = temp__5804__auto___27265;
if(cljs.core.chunked_seq_QMARK_(seq__26639_27269__$1)){
var c__5525__auto___27271 = cljs.core.chunk_first(seq__26639_27269__$1);
var G__27272 = cljs.core.chunk_rest(seq__26639_27269__$1);
var G__27273 = c__5525__auto___27271;
var G__27274 = cljs.core.count(c__5525__auto___27271);
var G__27275 = (0);
seq__26639_27254 = G__27272;
chunk__26640_27255 = G__27273;
count__26641_27256 = G__27274;
i__26642_27257 = G__27275;
continue;
} else {
var f_27278 = cljs.core.first(seq__26639_27269__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27278], 0));


var G__27279 = cljs.core.next(seq__26639_27269__$1);
var G__27280 = null;
var G__27281 = (0);
var G__27282 = (0);
seq__26639_27254 = G__27279;
chunk__26640_27255 = G__27280;
count__26641_27256 = G__27281;
i__26642_27257 = G__27282;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27289 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27289], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27289)))?cljs.core.second(arglists_27289):arglists_27289)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26663_27305 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26664_27306 = null;
var count__26665_27307 = (0);
var i__26666_27308 = (0);
while(true){
if((i__26666_27308 < count__26665_27307)){
var vec__26728_27315 = chunk__26664_27306.cljs$core$IIndexed$_nth$arity$2(null, i__26666_27308);
var name_27316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26728_27315,(0),null);
var map__26731_27317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26728_27315,(1),null);
var map__26731_27318__$1 = cljs.core.__destructure_map(map__26731_27317);
var doc_27319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26731_27318__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26731_27318__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27316], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27320], 0));

if(cljs.core.truth_(doc_27319)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27319], 0));
} else {
}


var G__27326 = seq__26663_27305;
var G__27327 = chunk__26664_27306;
var G__27328 = count__26665_27307;
var G__27329 = (i__26666_27308 + (1));
seq__26663_27305 = G__27326;
chunk__26664_27306 = G__27327;
count__26665_27307 = G__27328;
i__26666_27308 = G__27329;
continue;
} else {
var temp__5804__auto___27331 = cljs.core.seq(seq__26663_27305);
if(temp__5804__auto___27331){
var seq__26663_27338__$1 = temp__5804__auto___27331;
if(cljs.core.chunked_seq_QMARK_(seq__26663_27338__$1)){
var c__5525__auto___27341 = cljs.core.chunk_first(seq__26663_27338__$1);
var G__27342 = cljs.core.chunk_rest(seq__26663_27338__$1);
var G__27343 = c__5525__auto___27341;
var G__27344 = cljs.core.count(c__5525__auto___27341);
var G__27345 = (0);
seq__26663_27305 = G__27342;
chunk__26664_27306 = G__27343;
count__26665_27307 = G__27344;
i__26666_27308 = G__27345;
continue;
} else {
var vec__26788_27346 = cljs.core.first(seq__26663_27338__$1);
var name_27347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26788_27346,(0),null);
var map__26791_27348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26788_27346,(1),null);
var map__26791_27349__$1 = cljs.core.__destructure_map(map__26791_27348);
var doc_27350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26791_27349__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26791_27349__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27347], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27351], 0));

if(cljs.core.truth_(doc_27350)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27350], 0));
} else {
}


var G__27358 = cljs.core.next(seq__26663_27338__$1);
var G__27359 = null;
var G__27360 = (0);
var G__27361 = (0);
seq__26663_27305 = G__27358;
chunk__26664_27306 = G__27359;
count__26665_27307 = G__27360;
i__26666_27308 = G__27361;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__26839 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26840 = null;
var count__26841 = (0);
var i__26842 = (0);
while(true){
if((i__26842 < count__26841)){
var role = chunk__26840.cljs$core$IIndexed$_nth$arity$2(null, i__26842);
var temp__5804__auto___27365__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27365__$1)){
var spec_27367 = temp__5804__auto___27365__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27367)], 0));
} else {
}


var G__27368 = seq__26839;
var G__27369 = chunk__26840;
var G__27370 = count__26841;
var G__27371 = (i__26842 + (1));
seq__26839 = G__27368;
chunk__26840 = G__27369;
count__26841 = G__27370;
i__26842 = G__27371;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__26839);
if(temp__5804__auto____$1){
var seq__26839__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26839__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26839__$1);
var G__27379 = cljs.core.chunk_rest(seq__26839__$1);
var G__27380 = c__5525__auto__;
var G__27381 = cljs.core.count(c__5525__auto__);
var G__27382 = (0);
seq__26839 = G__27379;
chunk__26840 = G__27380;
count__26841 = G__27381;
i__26842 = G__27382;
continue;
} else {
var role = cljs.core.first(seq__26839__$1);
var temp__5804__auto___27383__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27383__$2)){
var spec_27386 = temp__5804__auto___27383__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27386)], 0));
} else {
}


var G__27388 = cljs.core.next(seq__26839__$1);
var G__27389 = null;
var G__27390 = (0);
var G__27391 = (0);
seq__26839 = G__27388;
chunk__26840 = G__27389;
count__26841 = G__27390;
i__26842 = G__27391;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26947 = datafied_throwable;
var map__26947__$1 = cljs.core.__destructure_map(map__26947);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26947__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26947__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26947__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26948 = cljs.core.last(via);
var map__26948__$1 = cljs.core.__destructure_map(map__26948);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26949 = data;
var map__26949__$1 = cljs.core.__destructure_map(map__26949);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26949__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26949__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26949__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26950 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__26950__$1 = cljs.core.__destructure_map(map__26950);
var top_data = map__26950__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26950__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26962 = phase;
var G__26962__$1 = (((G__26962 instanceof cljs.core.Keyword))?G__26962.fqn:null);
switch (G__26962__$1) {
case "read-source":
var map__26966 = data;
var map__26966__$1 = cljs.core.__destructure_map(map__26966);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26966__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26966__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26970 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__26970__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26970,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26970);
var G__26970__$2 = (cljs.core.truth_((function (){var fexpr__26994 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26994.cljs$core$IFn$_invoke$arity$1 ? fexpr__26994.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26994.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26970__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26970__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26970__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26970__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27019 = top_data;
var G__27019__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27019,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27019);
var G__27019__$2 = (cljs.core.truth_((function (){var fexpr__27021 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27021.cljs$core$IFn$_invoke$arity$1 ? fexpr__27021.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27021.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27019__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27019__$1);
var G__27019__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27019__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27019__$2);
var G__27019__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27019__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27019__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27019__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27019__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27039 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27039,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27039,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27039,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27039,(3),null);
var G__27043 = top_data;
var G__27043__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27043,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27043);
var G__27043__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27043__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27043__$1);
var G__27043__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27043__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27043__$2);
var G__27043__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27043__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27043__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27043__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27043__$4;
}

break;
case "execution":
var vec__27063 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27063,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27063,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27063,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27063,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26940_SHARP_){
var or__5002__auto__ = (p1__26940_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__27082 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27082.cljs$core$IFn$_invoke$arity$1 ? fexpr__27082.cljs$core$IFn$_invoke$arity$1(p1__26940_SHARP_) : fexpr__27082.call(null, p1__26940_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__27087 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27087__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27087);
var G__27087__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27087__$1);
var G__27087__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27087__$2);
var G__27087__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27087__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27087__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26962__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27106){
var map__27107 = p__27106;
var map__27107__$1 = cljs.core.__destructure_map(map__27107);
var triage_data = map__27107__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27124 = phase;
var G__27124__$1 = (((G__27124 instanceof cljs.core.Keyword))?G__27124.fqn:null);
switch (G__27124__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27125 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27126 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27127 = loc;
var G__27128 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27130_27449 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27131_27451 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27132_27452 = true;
var _STAR_print_fn_STAR__temp_val__27133_27453 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27132_27452);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27133_27453);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27101_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27101_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27131_27451);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27130_27449);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27125,G__27126,G__27127,G__27128) : format.call(null, G__27125,G__27126,G__27127,G__27128));

break;
case "macroexpansion":
var G__27156 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27157 = cause_type;
var G__27158 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27159 = loc;
var G__27160 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27156,G__27157,G__27158,G__27159,G__27160) : format.call(null, G__27156,G__27157,G__27158,G__27159,G__27160));

break;
case "compile-syntax-check":
var G__27169 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27170 = cause_type;
var G__27171 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27172 = loc;
var G__27173 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27169,G__27170,G__27171,G__27172,G__27173) : format.call(null, G__27169,G__27170,G__27171,G__27172,G__27173));

break;
case "compilation":
var G__27179 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27180 = cause_type;
var G__27181 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27182 = loc;
var G__27183 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27179,G__27180,G__27181,G__27182,G__27183) : format.call(null, G__27179,G__27180,G__27181,G__27182,G__27183));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27192 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27193 = symbol;
var G__27194 = loc;
var G__27195 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27205_27469 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27206_27470 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27207_27471 = true;
var _STAR_print_fn_STAR__temp_val__27208_27472 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27207_27471);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27208_27472);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27102_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27102_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27206_27470);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27205_27469);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27192,G__27193,G__27194,G__27195) : format.call(null, G__27192,G__27193,G__27194,G__27195));
} else {
var G__27212 = "Execution error%s at %s(%s).\n%s\n";
var G__27213 = cause_type;
var G__27214 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27215 = loc;
var G__27216 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27212,G__27213,G__27214,G__27215,G__27216) : format.call(null, G__27212,G__27213,G__27214,G__27215,G__27216));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27124__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
