goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21439 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_21439(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21444 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_21444(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19442 = coll;
var G__19443 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19442,G__19443) : shadow.dom.lazy_native_coll_seq.call(null, G__19442,G__19443));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19534 = arguments.length;
switch (G__19534) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19576 = arguments.length;
switch (G__19576) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19596 = arguments.length;
switch (G__19596) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19615 = arguments.length;
switch (G__19615) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19630 = arguments.length;
switch (G__19630) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19692 = arguments.length;
switch (G__19692) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e19717){if((e19717 instanceof Object)){
var e = e19717;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19717;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19734 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19735 = null;
var count__19736 = (0);
var i__19737 = (0);
while(true){
if((i__19737 < count__19736)){
var el = chunk__19735.cljs$core$IIndexed$_nth$arity$2(null, i__19737);
var handler_21526__$1 = ((function (seq__19734,chunk__19735,count__19736,i__19737,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__19734,chunk__19735,count__19736,i__19737,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21526__$1);


var G__21531 = seq__19734;
var G__21532 = chunk__19735;
var G__21533 = count__19736;
var G__21534 = (i__19737 + (1));
seq__19734 = G__21531;
chunk__19735 = G__21532;
count__19736 = G__21533;
i__19737 = G__21534;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19734);
if(temp__5804__auto__){
var seq__19734__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19734__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19734__$1);
var G__21535 = cljs.core.chunk_rest(seq__19734__$1);
var G__21536 = c__5525__auto__;
var G__21537 = cljs.core.count(c__5525__auto__);
var G__21538 = (0);
seq__19734 = G__21535;
chunk__19735 = G__21536;
count__19736 = G__21537;
i__19737 = G__21538;
continue;
} else {
var el = cljs.core.first(seq__19734__$1);
var handler_21542__$1 = ((function (seq__19734,chunk__19735,count__19736,i__19737,el,seq__19734__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__19734,chunk__19735,count__19736,i__19737,el,seq__19734__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21542__$1);


var G__21548 = cljs.core.next(seq__19734__$1);
var G__21549 = null;
var G__21550 = (0);
var G__21551 = (0);
seq__19734 = G__21548;
chunk__19735 = G__21549;
count__19736 = G__21550;
i__19737 = G__21551;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19808 = arguments.length;
switch (G__19808) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19828 = cljs.core.seq(events);
var chunk__19829 = null;
var count__19830 = (0);
var i__19831 = (0);
while(true){
if((i__19831 < count__19830)){
var vec__19860 = chunk__19829.cljs$core$IIndexed$_nth$arity$2(null, i__19831);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19860,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21570 = seq__19828;
var G__21571 = chunk__19829;
var G__21572 = count__19830;
var G__21574 = (i__19831 + (1));
seq__19828 = G__21570;
chunk__19829 = G__21571;
count__19830 = G__21572;
i__19831 = G__21574;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19828);
if(temp__5804__auto__){
var seq__19828__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19828__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19828__$1);
var G__21576 = cljs.core.chunk_rest(seq__19828__$1);
var G__21577 = c__5525__auto__;
var G__21578 = cljs.core.count(c__5525__auto__);
var G__21579 = (0);
seq__19828 = G__21576;
chunk__19829 = G__21577;
count__19830 = G__21578;
i__19831 = G__21579;
continue;
} else {
var vec__19872 = cljs.core.first(seq__19828__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19872,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19872,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21580 = cljs.core.next(seq__19828__$1);
var G__21581 = null;
var G__21582 = (0);
var G__21583 = (0);
seq__19828 = G__21580;
chunk__19829 = G__21581;
count__19830 = G__21582;
i__19831 = G__21583;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19879 = cljs.core.seq(styles);
var chunk__19880 = null;
var count__19881 = (0);
var i__19882 = (0);
while(true){
if((i__19882 < count__19881)){
var vec__19907 = chunk__19880.cljs$core$IIndexed$_nth$arity$2(null, i__19882);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19907,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21588 = seq__19879;
var G__21589 = chunk__19880;
var G__21590 = count__19881;
var G__21591 = (i__19882 + (1));
seq__19879 = G__21588;
chunk__19880 = G__21589;
count__19881 = G__21590;
i__19882 = G__21591;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19879);
if(temp__5804__auto__){
var seq__19879__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19879__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19879__$1);
var G__21593 = cljs.core.chunk_rest(seq__19879__$1);
var G__21594 = c__5525__auto__;
var G__21595 = cljs.core.count(c__5525__auto__);
var G__21596 = (0);
seq__19879 = G__21593;
chunk__19880 = G__21594;
count__19881 = G__21595;
i__19882 = G__21596;
continue;
} else {
var vec__19917 = cljs.core.first(seq__19879__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19917,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19917,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21597 = cljs.core.next(seq__19879__$1);
var G__21598 = null;
var G__21599 = (0);
var G__21600 = (0);
seq__19879 = G__21597;
chunk__19880 = G__21598;
count__19881 = G__21599;
i__19882 = G__21600;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19943_21601 = key;
var G__19943_21602__$1 = (((G__19943_21601 instanceof cljs.core.Keyword))?G__19943_21601.fqn:null);
switch (G__19943_21602__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21611 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_21611,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_21611,"aria-");
}
})())){
el.setAttribute(ks_21611,value);
} else {
(el[ks_21611] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20029){
var map__20030 = p__20029;
var map__20030__$1 = cljs.core.__destructure_map(map__20030);
var props = map__20030__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20030__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20035 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20042 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20042,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20042;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20051 = arguments.length;
switch (G__20051) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20059){
var vec__20070 = p__20059;
var seq__20072 = cljs.core.seq(vec__20070);
var first__20073 = cljs.core.first(seq__20072);
var seq__20072__$1 = cljs.core.next(seq__20072);
var nn = first__20073;
var first__20073__$1 = cljs.core.first(seq__20072__$1);
var seq__20072__$2 = cljs.core.next(seq__20072__$1);
var np = first__20073__$1;
var nc = seq__20072__$2;
var node = vec__20070;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20091 = nn;
var G__20092 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20091,G__20092) : create_fn.call(null, G__20091,G__20092));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20097 = nn;
var G__20098 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20097,G__20098) : create_fn.call(null, G__20097,G__20098));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20102 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20102,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20102,(1),null);
var seq__20111_21657 = cljs.core.seq(node_children);
var chunk__20112_21658 = null;
var count__20113_21659 = (0);
var i__20114_21660 = (0);
while(true){
if((i__20114_21660 < count__20113_21659)){
var child_struct_21661 = chunk__20112_21658.cljs$core$IIndexed$_nth$arity$2(null, i__20114_21660);
var children_21663 = shadow.dom.dom_node(child_struct_21661);
if(cljs.core.seq_QMARK_(children_21663)){
var seq__20175_21665 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21663));
var chunk__20177_21666 = null;
var count__20178_21667 = (0);
var i__20179_21668 = (0);
while(true){
if((i__20179_21668 < count__20178_21667)){
var child_21675 = chunk__20177_21666.cljs$core$IIndexed$_nth$arity$2(null, i__20179_21668);
if(cljs.core.truth_(child_21675)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21675);


var G__21676 = seq__20175_21665;
var G__21677 = chunk__20177_21666;
var G__21678 = count__20178_21667;
var G__21679 = (i__20179_21668 + (1));
seq__20175_21665 = G__21676;
chunk__20177_21666 = G__21677;
count__20178_21667 = G__21678;
i__20179_21668 = G__21679;
continue;
} else {
var G__21680 = seq__20175_21665;
var G__21681 = chunk__20177_21666;
var G__21682 = count__20178_21667;
var G__21683 = (i__20179_21668 + (1));
seq__20175_21665 = G__21680;
chunk__20177_21666 = G__21681;
count__20178_21667 = G__21682;
i__20179_21668 = G__21683;
continue;
}
} else {
var temp__5804__auto___21685 = cljs.core.seq(seq__20175_21665);
if(temp__5804__auto___21685){
var seq__20175_21686__$1 = temp__5804__auto___21685;
if(cljs.core.chunked_seq_QMARK_(seq__20175_21686__$1)){
var c__5525__auto___21688 = cljs.core.chunk_first(seq__20175_21686__$1);
var G__21689 = cljs.core.chunk_rest(seq__20175_21686__$1);
var G__21690 = c__5525__auto___21688;
var G__21691 = cljs.core.count(c__5525__auto___21688);
var G__21692 = (0);
seq__20175_21665 = G__21689;
chunk__20177_21666 = G__21690;
count__20178_21667 = G__21691;
i__20179_21668 = G__21692;
continue;
} else {
var child_21693 = cljs.core.first(seq__20175_21686__$1);
if(cljs.core.truth_(child_21693)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21693);


var G__21694 = cljs.core.next(seq__20175_21686__$1);
var G__21695 = null;
var G__21696 = (0);
var G__21697 = (0);
seq__20175_21665 = G__21694;
chunk__20177_21666 = G__21695;
count__20178_21667 = G__21696;
i__20179_21668 = G__21697;
continue;
} else {
var G__21698 = cljs.core.next(seq__20175_21686__$1);
var G__21699 = null;
var G__21700 = (0);
var G__21701 = (0);
seq__20175_21665 = G__21698;
chunk__20177_21666 = G__21699;
count__20178_21667 = G__21700;
i__20179_21668 = G__21701;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21663);
}


var G__21705 = seq__20111_21657;
var G__21706 = chunk__20112_21658;
var G__21707 = count__20113_21659;
var G__21708 = (i__20114_21660 + (1));
seq__20111_21657 = G__21705;
chunk__20112_21658 = G__21706;
count__20113_21659 = G__21707;
i__20114_21660 = G__21708;
continue;
} else {
var temp__5804__auto___21710 = cljs.core.seq(seq__20111_21657);
if(temp__5804__auto___21710){
var seq__20111_21711__$1 = temp__5804__auto___21710;
if(cljs.core.chunked_seq_QMARK_(seq__20111_21711__$1)){
var c__5525__auto___21713 = cljs.core.chunk_first(seq__20111_21711__$1);
var G__21714 = cljs.core.chunk_rest(seq__20111_21711__$1);
var G__21715 = c__5525__auto___21713;
var G__21716 = cljs.core.count(c__5525__auto___21713);
var G__21717 = (0);
seq__20111_21657 = G__21714;
chunk__20112_21658 = G__21715;
count__20113_21659 = G__21716;
i__20114_21660 = G__21717;
continue;
} else {
var child_struct_21718 = cljs.core.first(seq__20111_21711__$1);
var children_21720 = shadow.dom.dom_node(child_struct_21718);
if(cljs.core.seq_QMARK_(children_21720)){
var seq__20218_21721 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21720));
var chunk__20220_21722 = null;
var count__20221_21723 = (0);
var i__20222_21724 = (0);
while(true){
if((i__20222_21724 < count__20221_21723)){
var child_21725 = chunk__20220_21722.cljs$core$IIndexed$_nth$arity$2(null, i__20222_21724);
if(cljs.core.truth_(child_21725)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21725);


var G__21726 = seq__20218_21721;
var G__21727 = chunk__20220_21722;
var G__21728 = count__20221_21723;
var G__21729 = (i__20222_21724 + (1));
seq__20218_21721 = G__21726;
chunk__20220_21722 = G__21727;
count__20221_21723 = G__21728;
i__20222_21724 = G__21729;
continue;
} else {
var G__21730 = seq__20218_21721;
var G__21731 = chunk__20220_21722;
var G__21732 = count__20221_21723;
var G__21733 = (i__20222_21724 + (1));
seq__20218_21721 = G__21730;
chunk__20220_21722 = G__21731;
count__20221_21723 = G__21732;
i__20222_21724 = G__21733;
continue;
}
} else {
var temp__5804__auto___21734__$1 = cljs.core.seq(seq__20218_21721);
if(temp__5804__auto___21734__$1){
var seq__20218_21735__$1 = temp__5804__auto___21734__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20218_21735__$1)){
var c__5525__auto___21737 = cljs.core.chunk_first(seq__20218_21735__$1);
var G__21738 = cljs.core.chunk_rest(seq__20218_21735__$1);
var G__21739 = c__5525__auto___21737;
var G__21740 = cljs.core.count(c__5525__auto___21737);
var G__21741 = (0);
seq__20218_21721 = G__21738;
chunk__20220_21722 = G__21739;
count__20221_21723 = G__21740;
i__20222_21724 = G__21741;
continue;
} else {
var child_21743 = cljs.core.first(seq__20218_21735__$1);
if(cljs.core.truth_(child_21743)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21743);


var G__21745 = cljs.core.next(seq__20218_21735__$1);
var G__21746 = null;
var G__21747 = (0);
var G__21748 = (0);
seq__20218_21721 = G__21745;
chunk__20220_21722 = G__21746;
count__20221_21723 = G__21747;
i__20222_21724 = G__21748;
continue;
} else {
var G__21751 = cljs.core.next(seq__20218_21735__$1);
var G__21752 = null;
var G__21753 = (0);
var G__21754 = (0);
seq__20218_21721 = G__21751;
chunk__20220_21722 = G__21752;
count__20221_21723 = G__21753;
i__20222_21724 = G__21754;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21720);
}


var G__21755 = cljs.core.next(seq__20111_21711__$1);
var G__21756 = null;
var G__21757 = (0);
var G__21758 = (0);
seq__20111_21657 = G__21755;
chunk__20112_21658 = G__21756;
count__20113_21659 = G__21757;
i__20114_21660 = G__21758;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20327 = cljs.core.seq(node);
var chunk__20328 = null;
var count__20329 = (0);
var i__20330 = (0);
while(true){
if((i__20330 < count__20329)){
var n = chunk__20328.cljs$core$IIndexed$_nth$arity$2(null, i__20330);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__21765 = seq__20327;
var G__21766 = chunk__20328;
var G__21767 = count__20329;
var G__21768 = (i__20330 + (1));
seq__20327 = G__21765;
chunk__20328 = G__21766;
count__20329 = G__21767;
i__20330 = G__21768;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20327);
if(temp__5804__auto__){
var seq__20327__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20327__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20327__$1);
var G__21770 = cljs.core.chunk_rest(seq__20327__$1);
var G__21771 = c__5525__auto__;
var G__21772 = cljs.core.count(c__5525__auto__);
var G__21773 = (0);
seq__20327 = G__21770;
chunk__20328 = G__21771;
count__20329 = G__21772;
i__20330 = G__21773;
continue;
} else {
var n = cljs.core.first(seq__20327__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__21775 = cljs.core.next(seq__20327__$1);
var G__21776 = null;
var G__21777 = (0);
var G__21778 = (0);
seq__20327 = G__21775;
chunk__20328 = G__21776;
count__20329 = G__21777;
i__20330 = G__21778;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20403 = arguments.length;
switch (G__20403) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20430 = arguments.length;
switch (G__20430) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20446 = arguments.length;
switch (G__20446) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21828 = arguments.length;
var i__5727__auto___21830 = (0);
while(true){
if((i__5727__auto___21830 < len__5726__auto___21828)){
args__5732__auto__.push((arguments[i__5727__auto___21830]));

var G__21833 = (i__5727__auto___21830 + (1));
i__5727__auto___21830 = G__21833;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20479_21842 = cljs.core.seq(nodes);
var chunk__20481_21843 = null;
var count__20482_21844 = (0);
var i__20483_21845 = (0);
while(true){
if((i__20483_21845 < count__20482_21844)){
var node_21849 = chunk__20481_21843.cljs$core$IIndexed$_nth$arity$2(null, i__20483_21845);
fragment.appendChild(shadow.dom._to_dom(node_21849));


var G__21852 = seq__20479_21842;
var G__21853 = chunk__20481_21843;
var G__21854 = count__20482_21844;
var G__21855 = (i__20483_21845 + (1));
seq__20479_21842 = G__21852;
chunk__20481_21843 = G__21853;
count__20482_21844 = G__21854;
i__20483_21845 = G__21855;
continue;
} else {
var temp__5804__auto___21856 = cljs.core.seq(seq__20479_21842);
if(temp__5804__auto___21856){
var seq__20479_21857__$1 = temp__5804__auto___21856;
if(cljs.core.chunked_seq_QMARK_(seq__20479_21857__$1)){
var c__5525__auto___21860 = cljs.core.chunk_first(seq__20479_21857__$1);
var G__21861 = cljs.core.chunk_rest(seq__20479_21857__$1);
var G__21862 = c__5525__auto___21860;
var G__21863 = cljs.core.count(c__5525__auto___21860);
var G__21864 = (0);
seq__20479_21842 = G__21861;
chunk__20481_21843 = G__21862;
count__20482_21844 = G__21863;
i__20483_21845 = G__21864;
continue;
} else {
var node_21868 = cljs.core.first(seq__20479_21857__$1);
fragment.appendChild(shadow.dom._to_dom(node_21868));


var G__21872 = cljs.core.next(seq__20479_21857__$1);
var G__21873 = null;
var G__21874 = (0);
var G__21875 = (0);
seq__20479_21842 = G__21872;
chunk__20481_21843 = G__21873;
count__20482_21844 = G__21874;
i__20483_21845 = G__21875;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20470){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20470));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20503_21894 = cljs.core.seq(scripts);
var chunk__20504_21895 = null;
var count__20505_21896 = (0);
var i__20506_21897 = (0);
while(true){
if((i__20506_21897 < count__20505_21896)){
var vec__20525_21898 = chunk__20504_21895.cljs$core$IIndexed$_nth$arity$2(null, i__20506_21897);
var script_tag_21899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20525_21898,(0),null);
var script_body_21900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20525_21898,(1),null);
eval(script_body_21900);


var G__21901 = seq__20503_21894;
var G__21902 = chunk__20504_21895;
var G__21903 = count__20505_21896;
var G__21904 = (i__20506_21897 + (1));
seq__20503_21894 = G__21901;
chunk__20504_21895 = G__21902;
count__20505_21896 = G__21903;
i__20506_21897 = G__21904;
continue;
} else {
var temp__5804__auto___21905 = cljs.core.seq(seq__20503_21894);
if(temp__5804__auto___21905){
var seq__20503_21906__$1 = temp__5804__auto___21905;
if(cljs.core.chunked_seq_QMARK_(seq__20503_21906__$1)){
var c__5525__auto___21908 = cljs.core.chunk_first(seq__20503_21906__$1);
var G__21909 = cljs.core.chunk_rest(seq__20503_21906__$1);
var G__21910 = c__5525__auto___21908;
var G__21911 = cljs.core.count(c__5525__auto___21908);
var G__21912 = (0);
seq__20503_21894 = G__21909;
chunk__20504_21895 = G__21910;
count__20505_21896 = G__21911;
i__20506_21897 = G__21912;
continue;
} else {
var vec__20539_21913 = cljs.core.first(seq__20503_21906__$1);
var script_tag_21914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20539_21913,(0),null);
var script_body_21915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20539_21913,(1),null);
eval(script_body_21915);


var G__21917 = cljs.core.next(seq__20503_21906__$1);
var G__21918 = null;
var G__21919 = (0);
var G__21920 = (0);
seq__20503_21894 = G__21917;
chunk__20504_21895 = G__21918;
count__20505_21896 = G__21919;
i__20506_21897 = G__21920;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20550){
var vec__20551 = p__20550;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20551,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20551,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20595 = arguments.length;
switch (G__20595) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20667 = cljs.core.seq(style_keys);
var chunk__20668 = null;
var count__20669 = (0);
var i__20670 = (0);
while(true){
if((i__20670 < count__20669)){
var it = chunk__20668.cljs$core$IIndexed$_nth$arity$2(null, i__20670);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21925 = seq__20667;
var G__21926 = chunk__20668;
var G__21927 = count__20669;
var G__21928 = (i__20670 + (1));
seq__20667 = G__21925;
chunk__20668 = G__21926;
count__20669 = G__21927;
i__20670 = G__21928;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20667);
if(temp__5804__auto__){
var seq__20667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20667__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20667__$1);
var G__21930 = cljs.core.chunk_rest(seq__20667__$1);
var G__21931 = c__5525__auto__;
var G__21932 = cljs.core.count(c__5525__auto__);
var G__21933 = (0);
seq__20667 = G__21930;
chunk__20668 = G__21931;
count__20669 = G__21932;
i__20670 = G__21933;
continue;
} else {
var it = cljs.core.first(seq__20667__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21935 = cljs.core.next(seq__20667__$1);
var G__21936 = null;
var G__21937 = (0);
var G__21938 = (0);
seq__20667 = G__21935;
chunk__20668 = G__21936;
count__20669 = G__21937;
i__20670 = G__21938;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k20717,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__20744 = k20717;
var G__20744__$1 = (((G__20744 instanceof cljs.core.Keyword))?G__20744.fqn:null);
switch (G__20744__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20717,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__20755){
var vec__20756 = p__20755;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20756,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20756,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20716){
var self__ = this;
var G__20716__$1 = this;
return (new cljs.core.RecordIter((0),G__20716__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20718,other20719){
var self__ = this;
var this20718__$1 = this;
return (((!((other20719 == null)))) && ((((this20718__$1.constructor === other20719.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20718__$1.x,other20719.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20718__$1.y,other20719.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20718__$1.__extmap,other20719.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k20717){
var self__ = this;
var this__5307__auto____$1 = this;
var G__20783 = k20717;
var G__20783__$1 = (((G__20783 instanceof cljs.core.Keyword))?G__20783.fqn:null);
switch (G__20783__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20717);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__20716){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__20786 = cljs.core.keyword_identical_QMARK_;
var expr__20787 = k__5309__auto__;
if(cljs.core.truth_((pred__20786.cljs$core$IFn$_invoke$arity$2 ? pred__20786.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20787) : pred__20786.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__20787)))){
return (new shadow.dom.Coordinate(G__20716,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20786.cljs$core$IFn$_invoke$arity$2 ? pred__20786.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20787) : pred__20786.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__20787)))){
return (new shadow.dom.Coordinate(self__.x,G__20716,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__20716),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__20716){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20716,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20723){
var extmap__5342__auto__ = (function (){var G__20818 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20723,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20723)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20818);
} else {
return G__20818;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20723),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20723),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k20833,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__20850 = k20833;
var G__20850__$1 = (((G__20850 instanceof cljs.core.Keyword))?G__20850.fqn:null);
switch (G__20850__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20833,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__20856){
var vec__20859 = p__20856;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20859,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20859,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20832){
var self__ = this;
var G__20832__$1 = this;
return (new cljs.core.RecordIter((0),G__20832__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20834,other20835){
var self__ = this;
var this20834__$1 = this;
return (((!((other20835 == null)))) && ((((this20834__$1.constructor === other20835.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20834__$1.w,other20835.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20834__$1.h,other20835.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20834__$1.__extmap,other20835.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k20833){
var self__ = this;
var this__5307__auto____$1 = this;
var G__20919 = k20833;
var G__20919__$1 = (((G__20919 instanceof cljs.core.Keyword))?G__20919.fqn:null);
switch (G__20919__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20833);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__20832){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__20923 = cljs.core.keyword_identical_QMARK_;
var expr__20924 = k__5309__auto__;
if(cljs.core.truth_((pred__20923.cljs$core$IFn$_invoke$arity$2 ? pred__20923.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20924) : pred__20923.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__20924)))){
return (new shadow.dom.Size(G__20832,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20923.cljs$core$IFn$_invoke$arity$2 ? pred__20923.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20924) : pred__20923.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__20924)))){
return (new shadow.dom.Size(self__.w,G__20832,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__20832),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__20832){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20832,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20840){
var extmap__5342__auto__ = (function (){var G__20958 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20840,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20840)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20958);
} else {
return G__20958;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20840),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20840),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__22021 = (i + (1));
var G__22022 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__22021;
ret = G__22022;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21016){
var vec__21019 = p__21016;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21019,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__21040 = arguments.length;
switch (G__21040) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__22061 = ps;
var G__22062 = (i + (1));
el__$1 = G__22061;
i = G__22062;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__21121 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21121,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21121,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21121,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__21135_22104 = cljs.core.seq(props);
var chunk__21136_22105 = null;
var count__21137_22106 = (0);
var i__21138_22108 = (0);
while(true){
if((i__21138_22108 < count__21137_22106)){
var vec__21160_22110 = chunk__21136_22105.cljs$core$IIndexed$_nth$arity$2(null, i__21138_22108);
var k_22111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21160_22110,(0),null);
var v_22112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21160_22110,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_22111);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_22111),v_22112);


var G__22121 = seq__21135_22104;
var G__22122 = chunk__21136_22105;
var G__22123 = count__21137_22106;
var G__22124 = (i__21138_22108 + (1));
seq__21135_22104 = G__22121;
chunk__21136_22105 = G__22122;
count__21137_22106 = G__22123;
i__21138_22108 = G__22124;
continue;
} else {
var temp__5804__auto___22126 = cljs.core.seq(seq__21135_22104);
if(temp__5804__auto___22126){
var seq__21135_22127__$1 = temp__5804__auto___22126;
if(cljs.core.chunked_seq_QMARK_(seq__21135_22127__$1)){
var c__5525__auto___22128 = cljs.core.chunk_first(seq__21135_22127__$1);
var G__22130 = cljs.core.chunk_rest(seq__21135_22127__$1);
var G__22131 = c__5525__auto___22128;
var G__22132 = cljs.core.count(c__5525__auto___22128);
var G__22133 = (0);
seq__21135_22104 = G__22130;
chunk__21136_22105 = G__22131;
count__21137_22106 = G__22132;
i__21138_22108 = G__22133;
continue;
} else {
var vec__21168_22134 = cljs.core.first(seq__21135_22127__$1);
var k_22135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21168_22134,(0),null);
var v_22136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21168_22134,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_22135);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_22135),v_22136);


var G__22140 = cljs.core.next(seq__21135_22127__$1);
var G__22142 = null;
var G__22143 = (0);
var G__22144 = (0);
seq__21135_22104 = G__22140;
chunk__21136_22105 = G__22142;
count__21137_22106 = G__22143;
i__21138_22108 = G__22144;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__21190 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21190,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21190,(1),null);
var seq__21196_22154 = cljs.core.seq(node_children);
var chunk__21198_22155 = null;
var count__21199_22156 = (0);
var i__21200_22157 = (0);
while(true){
if((i__21200_22157 < count__21199_22156)){
var child_struct_22158 = chunk__21198_22155.cljs$core$IIndexed$_nth$arity$2(null, i__21200_22157);
if((!((child_struct_22158 == null)))){
if(typeof child_struct_22158 === 'string'){
var text_22162 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_22162),child_struct_22158].join(''));
} else {
var children_22164 = shadow.dom.svg_node(child_struct_22158);
if(cljs.core.seq_QMARK_(children_22164)){
var seq__21300_22166 = cljs.core.seq(children_22164);
var chunk__21302_22167 = null;
var count__21303_22168 = (0);
var i__21304_22169 = (0);
while(true){
if((i__21304_22169 < count__21303_22168)){
var child_22170 = chunk__21302_22167.cljs$core$IIndexed$_nth$arity$2(null, i__21304_22169);
if(cljs.core.truth_(child_22170)){
node.appendChild(child_22170);


var G__22172 = seq__21300_22166;
var G__22173 = chunk__21302_22167;
var G__22174 = count__21303_22168;
var G__22175 = (i__21304_22169 + (1));
seq__21300_22166 = G__22172;
chunk__21302_22167 = G__22173;
count__21303_22168 = G__22174;
i__21304_22169 = G__22175;
continue;
} else {
var G__22176 = seq__21300_22166;
var G__22177 = chunk__21302_22167;
var G__22178 = count__21303_22168;
var G__22179 = (i__21304_22169 + (1));
seq__21300_22166 = G__22176;
chunk__21302_22167 = G__22177;
count__21303_22168 = G__22178;
i__21304_22169 = G__22179;
continue;
}
} else {
var temp__5804__auto___22181 = cljs.core.seq(seq__21300_22166);
if(temp__5804__auto___22181){
var seq__21300_22182__$1 = temp__5804__auto___22181;
if(cljs.core.chunked_seq_QMARK_(seq__21300_22182__$1)){
var c__5525__auto___22183 = cljs.core.chunk_first(seq__21300_22182__$1);
var G__22184 = cljs.core.chunk_rest(seq__21300_22182__$1);
var G__22185 = c__5525__auto___22183;
var G__22186 = cljs.core.count(c__5525__auto___22183);
var G__22187 = (0);
seq__21300_22166 = G__22184;
chunk__21302_22167 = G__22185;
count__21303_22168 = G__22186;
i__21304_22169 = G__22187;
continue;
} else {
var child_22189 = cljs.core.first(seq__21300_22182__$1);
if(cljs.core.truth_(child_22189)){
node.appendChild(child_22189);


var G__22190 = cljs.core.next(seq__21300_22182__$1);
var G__22191 = null;
var G__22192 = (0);
var G__22193 = (0);
seq__21300_22166 = G__22190;
chunk__21302_22167 = G__22191;
count__21303_22168 = G__22192;
i__21304_22169 = G__22193;
continue;
} else {
var G__22194 = cljs.core.next(seq__21300_22182__$1);
var G__22195 = null;
var G__22196 = (0);
var G__22197 = (0);
seq__21300_22166 = G__22194;
chunk__21302_22167 = G__22195;
count__21303_22168 = G__22196;
i__21304_22169 = G__22197;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_22164);
}
}


var G__22199 = seq__21196_22154;
var G__22200 = chunk__21198_22155;
var G__22201 = count__21199_22156;
var G__22202 = (i__21200_22157 + (1));
seq__21196_22154 = G__22199;
chunk__21198_22155 = G__22200;
count__21199_22156 = G__22201;
i__21200_22157 = G__22202;
continue;
} else {
var G__22210 = seq__21196_22154;
var G__22211 = chunk__21198_22155;
var G__22212 = count__21199_22156;
var G__22213 = (i__21200_22157 + (1));
seq__21196_22154 = G__22210;
chunk__21198_22155 = G__22211;
count__21199_22156 = G__22212;
i__21200_22157 = G__22213;
continue;
}
} else {
var temp__5804__auto___22214 = cljs.core.seq(seq__21196_22154);
if(temp__5804__auto___22214){
var seq__21196_22215__$1 = temp__5804__auto___22214;
if(cljs.core.chunked_seq_QMARK_(seq__21196_22215__$1)){
var c__5525__auto___22216 = cljs.core.chunk_first(seq__21196_22215__$1);
var G__22217 = cljs.core.chunk_rest(seq__21196_22215__$1);
var G__22218 = c__5525__auto___22216;
var G__22219 = cljs.core.count(c__5525__auto___22216);
var G__22220 = (0);
seq__21196_22154 = G__22217;
chunk__21198_22155 = G__22218;
count__21199_22156 = G__22219;
i__21200_22157 = G__22220;
continue;
} else {
var child_struct_22221 = cljs.core.first(seq__21196_22215__$1);
if((!((child_struct_22221 == null)))){
if(typeof child_struct_22221 === 'string'){
var text_22223 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_22223),child_struct_22221].join(''));
} else {
var children_22225 = shadow.dom.svg_node(child_struct_22221);
if(cljs.core.seq_QMARK_(children_22225)){
var seq__21336_22228 = cljs.core.seq(children_22225);
var chunk__21338_22229 = null;
var count__21339_22230 = (0);
var i__21340_22231 = (0);
while(true){
if((i__21340_22231 < count__21339_22230)){
var child_22232 = chunk__21338_22229.cljs$core$IIndexed$_nth$arity$2(null, i__21340_22231);
if(cljs.core.truth_(child_22232)){
node.appendChild(child_22232);


var G__22233 = seq__21336_22228;
var G__22234 = chunk__21338_22229;
var G__22235 = count__21339_22230;
var G__22236 = (i__21340_22231 + (1));
seq__21336_22228 = G__22233;
chunk__21338_22229 = G__22234;
count__21339_22230 = G__22235;
i__21340_22231 = G__22236;
continue;
} else {
var G__22239 = seq__21336_22228;
var G__22240 = chunk__21338_22229;
var G__22241 = count__21339_22230;
var G__22242 = (i__21340_22231 + (1));
seq__21336_22228 = G__22239;
chunk__21338_22229 = G__22240;
count__21339_22230 = G__22241;
i__21340_22231 = G__22242;
continue;
}
} else {
var temp__5804__auto___22243__$1 = cljs.core.seq(seq__21336_22228);
if(temp__5804__auto___22243__$1){
var seq__21336_22244__$1 = temp__5804__auto___22243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21336_22244__$1)){
var c__5525__auto___22245 = cljs.core.chunk_first(seq__21336_22244__$1);
var G__22246 = cljs.core.chunk_rest(seq__21336_22244__$1);
var G__22247 = c__5525__auto___22245;
var G__22248 = cljs.core.count(c__5525__auto___22245);
var G__22249 = (0);
seq__21336_22228 = G__22246;
chunk__21338_22229 = G__22247;
count__21339_22230 = G__22248;
i__21340_22231 = G__22249;
continue;
} else {
var child_22250 = cljs.core.first(seq__21336_22244__$1);
if(cljs.core.truth_(child_22250)){
node.appendChild(child_22250);


var G__22253 = cljs.core.next(seq__21336_22244__$1);
var G__22254 = null;
var G__22255 = (0);
var G__22256 = (0);
seq__21336_22228 = G__22253;
chunk__21338_22229 = G__22254;
count__21339_22230 = G__22255;
i__21340_22231 = G__22256;
continue;
} else {
var G__22258 = cljs.core.next(seq__21336_22244__$1);
var G__22259 = null;
var G__22260 = (0);
var G__22261 = (0);
seq__21336_22228 = G__22258;
chunk__21338_22229 = G__22259;
count__21339_22230 = G__22260;
i__21340_22231 = G__22261;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_22225);
}
}


var G__22263 = cljs.core.next(seq__21196_22215__$1);
var G__22264 = null;
var G__22265 = (0);
var G__22266 = (0);
seq__21196_22154 = G__22263;
chunk__21198_22155 = G__22264;
count__21199_22156 = G__22265;
i__21200_22157 = G__22266;
continue;
} else {
var G__22267 = cljs.core.next(seq__21196_22215__$1);
var G__22268 = null;
var G__22269 = (0);
var G__22270 = (0);
seq__21196_22154 = G__22267;
chunk__21198_22155 = G__22268;
count__21199_22156 = G__22269;
i__21200_22157 = G__22270;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22278 = arguments.length;
var i__5727__auto___22279 = (0);
while(true){
if((i__5727__auto___22279 < len__5726__auto___22278)){
args__5732__auto__.push((arguments[i__5727__auto___22279]));

var G__22280 = (i__5727__auto___22279 + (1));
i__5727__auto___22279 = G__22280;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21387){
var G__21388 = cljs.core.first(seq21387);
var seq21387__$1 = cljs.core.next(seq21387);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21388,seq21387__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
