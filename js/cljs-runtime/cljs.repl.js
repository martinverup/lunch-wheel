goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25349){
var map__25350 = p__25349;
var map__25350__$1 = cljs.core.__destructure_map(map__25350);
var m = map__25350__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25350__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__25398_25733 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25399_25734 = null;
var count__25400_25735 = (0);
var i__25401_25736 = (0);
while(true){
if((i__25401_25736 < count__25400_25735)){
var f_25737 = chunk__25399_25734.cljs$core$IIndexed$_nth$arity$2(null, i__25401_25736);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25737], 0));


var G__25738 = seq__25398_25733;
var G__25739 = chunk__25399_25734;
var G__25740 = count__25400_25735;
var G__25741 = (i__25401_25736 + (1));
seq__25398_25733 = G__25738;
chunk__25399_25734 = G__25739;
count__25400_25735 = G__25740;
i__25401_25736 = G__25741;
continue;
} else {
var temp__5804__auto___25742 = cljs.core.seq(seq__25398_25733);
if(temp__5804__auto___25742){
var seq__25398_25743__$1 = temp__5804__auto___25742;
if(cljs.core.chunked_seq_QMARK_(seq__25398_25743__$1)){
var c__5525__auto___25744 = cljs.core.chunk_first(seq__25398_25743__$1);
var G__25745 = cljs.core.chunk_rest(seq__25398_25743__$1);
var G__25746 = c__5525__auto___25744;
var G__25747 = cljs.core.count(c__5525__auto___25744);
var G__25748 = (0);
seq__25398_25733 = G__25745;
chunk__25399_25734 = G__25746;
count__25400_25735 = G__25747;
i__25401_25736 = G__25748;
continue;
} else {
var f_25749 = cljs.core.first(seq__25398_25743__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25749], 0));


var G__25750 = cljs.core.next(seq__25398_25743__$1);
var G__25751 = null;
var G__25752 = (0);
var G__25753 = (0);
seq__25398_25733 = G__25750;
chunk__25399_25734 = G__25751;
count__25400_25735 = G__25752;
i__25401_25736 = G__25753;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25754 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_25754], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_25754)))?cljs.core.second(arglists_25754):arglists_25754)], 0));
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
var seq__25470_25760 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25471_25761 = null;
var count__25472_25762 = (0);
var i__25473_25763 = (0);
while(true){
if((i__25473_25763 < count__25472_25762)){
var vec__25489_25764 = chunk__25471_25761.cljs$core$IIndexed$_nth$arity$2(null, i__25473_25763);
var name_25765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25489_25764,(0),null);
var map__25492_25766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25489_25764,(1),null);
var map__25492_25767__$1 = cljs.core.__destructure_map(map__25492_25766);
var doc_25768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25492_25767__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25492_25767__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25765], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25769], 0));

if(cljs.core.truth_(doc_25768)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25768], 0));
} else {
}


var G__25773 = seq__25470_25760;
var G__25774 = chunk__25471_25761;
var G__25775 = count__25472_25762;
var G__25776 = (i__25473_25763 + (1));
seq__25470_25760 = G__25773;
chunk__25471_25761 = G__25774;
count__25472_25762 = G__25775;
i__25473_25763 = G__25776;
continue;
} else {
var temp__5804__auto___25777 = cljs.core.seq(seq__25470_25760);
if(temp__5804__auto___25777){
var seq__25470_25778__$1 = temp__5804__auto___25777;
if(cljs.core.chunked_seq_QMARK_(seq__25470_25778__$1)){
var c__5525__auto___25779 = cljs.core.chunk_first(seq__25470_25778__$1);
var G__25780 = cljs.core.chunk_rest(seq__25470_25778__$1);
var G__25781 = c__5525__auto___25779;
var G__25782 = cljs.core.count(c__5525__auto___25779);
var G__25783 = (0);
seq__25470_25760 = G__25780;
chunk__25471_25761 = G__25781;
count__25472_25762 = G__25782;
i__25473_25763 = G__25783;
continue;
} else {
var vec__25496_25784 = cljs.core.first(seq__25470_25778__$1);
var name_25785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25496_25784,(0),null);
var map__25499_25786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25496_25784,(1),null);
var map__25499_25787__$1 = cljs.core.__destructure_map(map__25499_25786);
var doc_25788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25499_25787__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25499_25787__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25785], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25789], 0));

if(cljs.core.truth_(doc_25788)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25788], 0));
} else {
}


var G__25790 = cljs.core.next(seq__25470_25778__$1);
var G__25791 = null;
var G__25792 = (0);
var G__25793 = (0);
seq__25470_25760 = G__25790;
chunk__25471_25761 = G__25791;
count__25472_25762 = G__25792;
i__25473_25763 = G__25793;
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

var seq__25508 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25509 = null;
var count__25510 = (0);
var i__25511 = (0);
while(true){
if((i__25511 < count__25510)){
var role = chunk__25509.cljs$core$IIndexed$_nth$arity$2(null, i__25511);
var temp__5804__auto___25797__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___25797__$1)){
var spec_25798 = temp__5804__auto___25797__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25798)], 0));
} else {
}


var G__25799 = seq__25508;
var G__25800 = chunk__25509;
var G__25801 = count__25510;
var G__25802 = (i__25511 + (1));
seq__25508 = G__25799;
chunk__25509 = G__25800;
count__25510 = G__25801;
i__25511 = G__25802;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__25508);
if(temp__5804__auto____$1){
var seq__25508__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__25508__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__25508__$1);
var G__25803 = cljs.core.chunk_rest(seq__25508__$1);
var G__25804 = c__5525__auto__;
var G__25805 = cljs.core.count(c__5525__auto__);
var G__25806 = (0);
seq__25508 = G__25803;
chunk__25509 = G__25804;
count__25510 = G__25805;
i__25511 = G__25806;
continue;
} else {
var role = cljs.core.first(seq__25508__$1);
var temp__5804__auto___25807__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___25807__$2)){
var spec_25808 = temp__5804__auto___25807__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25808)], 0));
} else {
}


var G__25809 = cljs.core.next(seq__25508__$1);
var G__25810 = null;
var G__25811 = (0);
var G__25812 = (0);
seq__25508 = G__25809;
chunk__25509 = G__25810;
count__25510 = G__25811;
i__25511 = G__25812;
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
var map__25557 = datafied_throwable;
var map__25557__$1 = cljs.core.__destructure_map(map__25557);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25557__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25557__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25557__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25558 = cljs.core.last(via);
var map__25558__$1 = cljs.core.__destructure_map(map__25558);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25558__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25558__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25558__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25559 = data;
var map__25559__$1 = cljs.core.__destructure_map(map__25559);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25559__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25559__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25559__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25560 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__25560__$1 = cljs.core.__destructure_map(map__25560);
var top_data = map__25560__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25560__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__25561 = phase;
var G__25561__$1 = (((G__25561 instanceof cljs.core.Keyword))?G__25561.fqn:null);
switch (G__25561__$1) {
case "read-source":
var map__25562 = data;
var map__25562__$1 = cljs.core.__destructure_map(map__25562);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25562__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25562__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25567 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__25567__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25567,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25567);
var G__25567__$2 = (cljs.core.truth_((function (){var fexpr__25574 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25574.cljs$core$IFn$_invoke$arity$1 ? fexpr__25574.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25574.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25567__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25567__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25567__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25567__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25575 = top_data;
var G__25575__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25575,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25575);
var G__25575__$2 = (cljs.core.truth_((function (){var fexpr__25584 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25584.cljs$core$IFn$_invoke$arity$1 ? fexpr__25584.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25584.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25575__$1);
var G__25575__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25575__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25575__$2);
var G__25575__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25575__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25575__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25575__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25575__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25611 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25611,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25611,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25611,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25611,(3),null);
var G__25616 = top_data;
var G__25616__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25616,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25616);
var G__25616__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25616__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25616__$1);
var G__25616__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25616__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25616__$2);
var G__25616__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25616__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25616__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25616__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25616__$4;
}

break;
case "execution":
var vec__25624 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25624,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25624,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25624,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25624,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25550_SHARP_){
var or__5002__auto__ = (p1__25550_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__25629 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25629.cljs$core$IFn$_invoke$arity$1 ? fexpr__25629.cljs$core$IFn$_invoke$arity$1(p1__25550_SHARP_) : fexpr__25629.call(null, p1__25550_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__25633 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25633__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25633,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25633);
var G__25633__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25633__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25633__$1);
var G__25633__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25633__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25633__$2);
var G__25633__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25633__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25633__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25633__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25633__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25561__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25653){
var map__25654 = p__25653;
var map__25654__$1 = cljs.core.__destructure_map(map__25654);
var triage_data = map__25654__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25654__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25654__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25654__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25654__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25654__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25654__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25654__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__25662 = phase;
var G__25662__$1 = (((G__25662 instanceof cljs.core.Keyword))?G__25662.fqn:null);
switch (G__25662__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__25666 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__25667 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25668 = loc;
var G__25669 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25672_25835 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25673_25836 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25674_25837 = true;
var _STAR_print_fn_STAR__temp_val__25675_25838 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25674_25837);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25675_25838);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25640_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25640_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25673_25836);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25672_25835);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25666,G__25667,G__25668,G__25669) : format.call(null, G__25666,G__25667,G__25668,G__25669));

break;
case "macroexpansion":
var G__25683 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25684 = cause_type;
var G__25685 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25686 = loc;
var G__25687 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25683,G__25684,G__25685,G__25686,G__25687) : format.call(null, G__25683,G__25684,G__25685,G__25686,G__25687));

break;
case "compile-syntax-check":
var G__25691 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25692 = cause_type;
var G__25693 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25694 = loc;
var G__25695 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25691,G__25692,G__25693,G__25694,G__25695) : format.call(null, G__25691,G__25692,G__25693,G__25694,G__25695));

break;
case "compilation":
var G__25696 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25697 = cause_type;
var G__25698 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25699 = loc;
var G__25700 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25696,G__25697,G__25698,G__25699,G__25700) : format.call(null, G__25696,G__25697,G__25698,G__25699,G__25700));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25701 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__25702 = symbol;
var G__25703 = loc;
var G__25704 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25706_25843 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25707_25844 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25708_25845 = true;
var _STAR_print_fn_STAR__temp_val__25709_25846 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25708_25845);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25709_25846);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25641_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25641_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25707_25844);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25706_25843);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25701,G__25702,G__25703,G__25704) : format.call(null, G__25701,G__25702,G__25703,G__25704));
} else {
var G__25724 = "Execution error%s at %s(%s).\n%s\n";
var G__25725 = cause_type;
var G__25726 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25727 = loc;
var G__25728 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25724,G__25725,G__25726,G__25727,G__25728) : format.call(null, G__25724,G__25725,G__25726,G__25727,G__25728));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25662__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
