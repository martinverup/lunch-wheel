goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_23789 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_23789(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_23793 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_23793(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__21584 = coll;
var G__21585 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__21584,G__21585) : shadow.dom.lazy_native_coll_seq.call(null, G__21584,G__21585));
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
var G__21709 = arguments.length;
switch (G__21709) {
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
var G__21728 = arguments.length;
switch (G__21728) {
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
var G__21736 = arguments.length;
switch (G__21736) {
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
var G__21753 = arguments.length;
switch (G__21753) {
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
var G__21776 = arguments.length;
switch (G__21776) {
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
var G__21810 = arguments.length;
switch (G__21810) {
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
}catch (e21830){if((e21830 instanceof Object)){
var e = e21830;
return console.log("didnt support attachEvent",el,e);
} else {
throw e21830;

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
var seq__21854 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__21855 = null;
var count__21856 = (0);
var i__21857 = (0);
while(true){
if((i__21857 < count__21856)){
var el = chunk__21855.cljs$core$IIndexed$_nth$arity$2(null, i__21857);
var handler_23855__$1 = ((function (seq__21854,chunk__21855,count__21856,i__21857,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__21854,chunk__21855,count__21856,i__21857,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_23855__$1);


var G__23858 = seq__21854;
var G__23859 = chunk__21855;
var G__23860 = count__21856;
var G__23861 = (i__21857 + (1));
seq__21854 = G__23858;
chunk__21855 = G__23859;
count__21856 = G__23860;
i__21857 = G__23861;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21854);
if(temp__5804__auto__){
var seq__21854__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21854__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21854__$1);
var G__23862 = cljs.core.chunk_rest(seq__21854__$1);
var G__23863 = c__5525__auto__;
var G__23864 = cljs.core.count(c__5525__auto__);
var G__23865 = (0);
seq__21854 = G__23862;
chunk__21855 = G__23863;
count__21856 = G__23864;
i__21857 = G__23865;
continue;
} else {
var el = cljs.core.first(seq__21854__$1);
var handler_23866__$1 = ((function (seq__21854,chunk__21855,count__21856,i__21857,el,seq__21854__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__21854,chunk__21855,count__21856,i__21857,el,seq__21854__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_23866__$1);


var G__23867 = cljs.core.next(seq__21854__$1);
var G__23868 = null;
var G__23869 = (0);
var G__23870 = (0);
seq__21854 = G__23867;
chunk__21855 = G__23868;
count__21856 = G__23869;
i__21857 = G__23870;
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
var G__21902 = arguments.length;
switch (G__21902) {
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
var seq__21919 = cljs.core.seq(events);
var chunk__21920 = null;
var count__21921 = (0);
var i__21922 = (0);
while(true){
if((i__21922 < count__21921)){
var vec__21949 = chunk__21920.cljs$core$IIndexed$_nth$arity$2(null, i__21922);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__23878 = seq__21919;
var G__23879 = chunk__21920;
var G__23880 = count__21921;
var G__23881 = (i__21922 + (1));
seq__21919 = G__23878;
chunk__21920 = G__23879;
count__21921 = G__23880;
i__21922 = G__23881;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21919);
if(temp__5804__auto__){
var seq__21919__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21919__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21919__$1);
var G__23882 = cljs.core.chunk_rest(seq__21919__$1);
var G__23883 = c__5525__auto__;
var G__23884 = cljs.core.count(c__5525__auto__);
var G__23885 = (0);
seq__21919 = G__23882;
chunk__21920 = G__23883;
count__21921 = G__23884;
i__21922 = G__23885;
continue;
} else {
var vec__21979 = cljs.core.first(seq__21919__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21979,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21979,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__23886 = cljs.core.next(seq__21919__$1);
var G__23887 = null;
var G__23888 = (0);
var G__23889 = (0);
seq__21919 = G__23886;
chunk__21920 = G__23887;
count__21921 = G__23888;
i__21922 = G__23889;
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
var seq__22002 = cljs.core.seq(styles);
var chunk__22003 = null;
var count__22004 = (0);
var i__22005 = (0);
while(true){
if((i__22005 < count__22004)){
var vec__22036 = chunk__22003.cljs$core$IIndexed$_nth$arity$2(null, i__22005);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__23894 = seq__22002;
var G__23895 = chunk__22003;
var G__23896 = count__22004;
var G__23897 = (i__22005 + (1));
seq__22002 = G__23894;
chunk__22003 = G__23895;
count__22004 = G__23896;
i__22005 = G__23897;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22002);
if(temp__5804__auto__){
var seq__22002__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22002__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22002__$1);
var G__23904 = cljs.core.chunk_rest(seq__22002__$1);
var G__23905 = c__5525__auto__;
var G__23906 = cljs.core.count(c__5525__auto__);
var G__23907 = (0);
seq__22002 = G__23904;
chunk__22003 = G__23905;
count__22004 = G__23906;
i__22005 = G__23907;
continue;
} else {
var vec__22040 = cljs.core.first(seq__22002__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22040,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__23919 = cljs.core.next(seq__22002__$1);
var G__23920 = null;
var G__23921 = (0);
var G__23922 = (0);
seq__22002 = G__23919;
chunk__22003 = G__23920;
count__22004 = G__23921;
i__22005 = G__23922;
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
var G__22055_23934 = key;
var G__22055_23935__$1 = (((G__22055_23934 instanceof cljs.core.Keyword))?G__22055_23934.fqn:null);
switch (G__22055_23935__$1) {
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
var ks_23940 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_23940,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_23940,"aria-");
}
})())){
el.setAttribute(ks_23940,value);
} else {
(el[ks_23940] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__22164){
var map__22165 = p__22164;
var map__22165__$1 = cljs.core.__destructure_map(map__22165);
var props = map__22165__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__22173 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22173,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22173,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22173,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__22184 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__22184,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__22184;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__22195 = arguments.length;
switch (G__22195) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__22237){
var vec__22249 = p__22237;
var seq__22250 = cljs.core.seq(vec__22249);
var first__22251 = cljs.core.first(seq__22250);
var seq__22250__$1 = cljs.core.next(seq__22250);
var nn = first__22251;
var first__22251__$1 = cljs.core.first(seq__22250__$1);
var seq__22250__$2 = cljs.core.next(seq__22250__$1);
var np = first__22251__$1;
var nc = seq__22250__$2;
var node = vec__22249;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22268 = nn;
var G__22269 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22268,G__22269) : create_fn.call(null, G__22268,G__22269));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22274 = nn;
var G__22275 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22274,G__22275) : create_fn.call(null, G__22274,G__22275));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__22282 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22282,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22282,(1),null);
var seq__22286_23958 = cljs.core.seq(node_children);
var chunk__22287_23959 = null;
var count__22288_23960 = (0);
var i__22289_23961 = (0);
while(true){
if((i__22289_23961 < count__22288_23960)){
var child_struct_23967 = chunk__22287_23959.cljs$core$IIndexed$_nth$arity$2(null, i__22289_23961);
var children_23968 = shadow.dom.dom_node(child_struct_23967);
if(cljs.core.seq_QMARK_(children_23968)){
var seq__22355_23969 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_23968));
var chunk__22357_23970 = null;
var count__22358_23971 = (0);
var i__22359_23972 = (0);
while(true){
if((i__22359_23972 < count__22358_23971)){
var child_23974 = chunk__22357_23970.cljs$core$IIndexed$_nth$arity$2(null, i__22359_23972);
if(cljs.core.truth_(child_23974)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23974);


var G__23975 = seq__22355_23969;
var G__23976 = chunk__22357_23970;
var G__23977 = count__22358_23971;
var G__23978 = (i__22359_23972 + (1));
seq__22355_23969 = G__23975;
chunk__22357_23970 = G__23976;
count__22358_23971 = G__23977;
i__22359_23972 = G__23978;
continue;
} else {
var G__23979 = seq__22355_23969;
var G__23980 = chunk__22357_23970;
var G__23981 = count__22358_23971;
var G__23982 = (i__22359_23972 + (1));
seq__22355_23969 = G__23979;
chunk__22357_23970 = G__23980;
count__22358_23971 = G__23981;
i__22359_23972 = G__23982;
continue;
}
} else {
var temp__5804__auto___23984 = cljs.core.seq(seq__22355_23969);
if(temp__5804__auto___23984){
var seq__22355_23985__$1 = temp__5804__auto___23984;
if(cljs.core.chunked_seq_QMARK_(seq__22355_23985__$1)){
var c__5525__auto___23987 = cljs.core.chunk_first(seq__22355_23985__$1);
var G__23988 = cljs.core.chunk_rest(seq__22355_23985__$1);
var G__23989 = c__5525__auto___23987;
var G__23990 = cljs.core.count(c__5525__auto___23987);
var G__23991 = (0);
seq__22355_23969 = G__23988;
chunk__22357_23970 = G__23989;
count__22358_23971 = G__23990;
i__22359_23972 = G__23991;
continue;
} else {
var child_23992 = cljs.core.first(seq__22355_23985__$1);
if(cljs.core.truth_(child_23992)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23992);


var G__23997 = cljs.core.next(seq__22355_23985__$1);
var G__23998 = null;
var G__23999 = (0);
var G__24000 = (0);
seq__22355_23969 = G__23997;
chunk__22357_23970 = G__23998;
count__22358_23971 = G__23999;
i__22359_23972 = G__24000;
continue;
} else {
var G__24002 = cljs.core.next(seq__22355_23985__$1);
var G__24003 = null;
var G__24004 = (0);
var G__24005 = (0);
seq__22355_23969 = G__24002;
chunk__22357_23970 = G__24003;
count__22358_23971 = G__24004;
i__22359_23972 = G__24005;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_23968);
}


var G__24006 = seq__22286_23958;
var G__24007 = chunk__22287_23959;
var G__24008 = count__22288_23960;
var G__24009 = (i__22289_23961 + (1));
seq__22286_23958 = G__24006;
chunk__22287_23959 = G__24007;
count__22288_23960 = G__24008;
i__22289_23961 = G__24009;
continue;
} else {
var temp__5804__auto___24011 = cljs.core.seq(seq__22286_23958);
if(temp__5804__auto___24011){
var seq__22286_24012__$1 = temp__5804__auto___24011;
if(cljs.core.chunked_seq_QMARK_(seq__22286_24012__$1)){
var c__5525__auto___24013 = cljs.core.chunk_first(seq__22286_24012__$1);
var G__24014 = cljs.core.chunk_rest(seq__22286_24012__$1);
var G__24015 = c__5525__auto___24013;
var G__24016 = cljs.core.count(c__5525__auto___24013);
var G__24017 = (0);
seq__22286_23958 = G__24014;
chunk__22287_23959 = G__24015;
count__22288_23960 = G__24016;
i__22289_23961 = G__24017;
continue;
} else {
var child_struct_24018 = cljs.core.first(seq__22286_24012__$1);
var children_24019 = shadow.dom.dom_node(child_struct_24018);
if(cljs.core.seq_QMARK_(children_24019)){
var seq__22404_24020 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24019));
var chunk__22406_24021 = null;
var count__22407_24022 = (0);
var i__22408_24023 = (0);
while(true){
if((i__22408_24023 < count__22407_24022)){
var child_24024 = chunk__22406_24021.cljs$core$IIndexed$_nth$arity$2(null, i__22408_24023);
if(cljs.core.truth_(child_24024)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24024);


var G__24025 = seq__22404_24020;
var G__24026 = chunk__22406_24021;
var G__24027 = count__22407_24022;
var G__24028 = (i__22408_24023 + (1));
seq__22404_24020 = G__24025;
chunk__22406_24021 = G__24026;
count__22407_24022 = G__24027;
i__22408_24023 = G__24028;
continue;
} else {
var G__24029 = seq__22404_24020;
var G__24030 = chunk__22406_24021;
var G__24031 = count__22407_24022;
var G__24032 = (i__22408_24023 + (1));
seq__22404_24020 = G__24029;
chunk__22406_24021 = G__24030;
count__22407_24022 = G__24031;
i__22408_24023 = G__24032;
continue;
}
} else {
var temp__5804__auto___24033__$1 = cljs.core.seq(seq__22404_24020);
if(temp__5804__auto___24033__$1){
var seq__22404_24034__$1 = temp__5804__auto___24033__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22404_24034__$1)){
var c__5525__auto___24035 = cljs.core.chunk_first(seq__22404_24034__$1);
var G__24037 = cljs.core.chunk_rest(seq__22404_24034__$1);
var G__24038 = c__5525__auto___24035;
var G__24039 = cljs.core.count(c__5525__auto___24035);
var G__24040 = (0);
seq__22404_24020 = G__24037;
chunk__22406_24021 = G__24038;
count__22407_24022 = G__24039;
i__22408_24023 = G__24040;
continue;
} else {
var child_24041 = cljs.core.first(seq__22404_24034__$1);
if(cljs.core.truth_(child_24041)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24041);


var G__24042 = cljs.core.next(seq__22404_24034__$1);
var G__24043 = null;
var G__24044 = (0);
var G__24045 = (0);
seq__22404_24020 = G__24042;
chunk__22406_24021 = G__24043;
count__22407_24022 = G__24044;
i__22408_24023 = G__24045;
continue;
} else {
var G__24046 = cljs.core.next(seq__22404_24034__$1);
var G__24047 = null;
var G__24048 = (0);
var G__24049 = (0);
seq__22404_24020 = G__24046;
chunk__22406_24021 = G__24047;
count__22407_24022 = G__24048;
i__22408_24023 = G__24049;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24019);
}


var G__24050 = cljs.core.next(seq__22286_24012__$1);
var G__24051 = null;
var G__24052 = (0);
var G__24053 = (0);
seq__22286_23958 = G__24050;
chunk__22287_23959 = G__24051;
count__22288_23960 = G__24052;
i__22289_23961 = G__24053;
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
var seq__22500 = cljs.core.seq(node);
var chunk__22501 = null;
var count__22502 = (0);
var i__22503 = (0);
while(true){
if((i__22503 < count__22502)){
var n = chunk__22501.cljs$core$IIndexed$_nth$arity$2(null, i__22503);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__24067 = seq__22500;
var G__24068 = chunk__22501;
var G__24069 = count__22502;
var G__24070 = (i__22503 + (1));
seq__22500 = G__24067;
chunk__22501 = G__24068;
count__22502 = G__24069;
i__22503 = G__24070;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22500);
if(temp__5804__auto__){
var seq__22500__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22500__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22500__$1);
var G__24074 = cljs.core.chunk_rest(seq__22500__$1);
var G__24075 = c__5525__auto__;
var G__24076 = cljs.core.count(c__5525__auto__);
var G__24077 = (0);
seq__22500 = G__24074;
chunk__22501 = G__24075;
count__22502 = G__24076;
i__22503 = G__24077;
continue;
} else {
var n = cljs.core.first(seq__22500__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__24088 = cljs.core.next(seq__22500__$1);
var G__24089 = null;
var G__24090 = (0);
var G__24091 = (0);
seq__22500 = G__24088;
chunk__22501 = G__24089;
count__22502 = G__24090;
i__22503 = G__24091;
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
var G__22552 = arguments.length;
switch (G__22552) {
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
var G__22572 = arguments.length;
switch (G__22572) {
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
var G__22646 = arguments.length;
switch (G__22646) {
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
var len__5726__auto___24118 = arguments.length;
var i__5727__auto___24120 = (0);
while(true){
if((i__5727__auto___24120 < len__5726__auto___24118)){
args__5732__auto__.push((arguments[i__5727__auto___24120]));

var G__24124 = (i__5727__auto___24120 + (1));
i__5727__auto___24120 = G__24124;
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
var seq__22725_24126 = cljs.core.seq(nodes);
var chunk__22726_24127 = null;
var count__22727_24128 = (0);
var i__22728_24129 = (0);
while(true){
if((i__22728_24129 < count__22727_24128)){
var node_24132 = chunk__22726_24127.cljs$core$IIndexed$_nth$arity$2(null, i__22728_24129);
fragment.appendChild(shadow.dom._to_dom(node_24132));


var G__24134 = seq__22725_24126;
var G__24135 = chunk__22726_24127;
var G__24136 = count__22727_24128;
var G__24137 = (i__22728_24129 + (1));
seq__22725_24126 = G__24134;
chunk__22726_24127 = G__24135;
count__22727_24128 = G__24136;
i__22728_24129 = G__24137;
continue;
} else {
var temp__5804__auto___24138 = cljs.core.seq(seq__22725_24126);
if(temp__5804__auto___24138){
var seq__22725_24139__$1 = temp__5804__auto___24138;
if(cljs.core.chunked_seq_QMARK_(seq__22725_24139__$1)){
var c__5525__auto___24140 = cljs.core.chunk_first(seq__22725_24139__$1);
var G__24141 = cljs.core.chunk_rest(seq__22725_24139__$1);
var G__24142 = c__5525__auto___24140;
var G__24143 = cljs.core.count(c__5525__auto___24140);
var G__24144 = (0);
seq__22725_24126 = G__24141;
chunk__22726_24127 = G__24142;
count__22727_24128 = G__24143;
i__22728_24129 = G__24144;
continue;
} else {
var node_24146 = cljs.core.first(seq__22725_24139__$1);
fragment.appendChild(shadow.dom._to_dom(node_24146));


var G__24149 = cljs.core.next(seq__22725_24139__$1);
var G__24151 = null;
var G__24153 = (0);
var G__24154 = (0);
seq__22725_24126 = G__24149;
chunk__22726_24127 = G__24151;
count__22727_24128 = G__24153;
i__22728_24129 = G__24154;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq22703){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22703));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__22780_24164 = cljs.core.seq(scripts);
var chunk__22781_24165 = null;
var count__22782_24166 = (0);
var i__22783_24167 = (0);
while(true){
if((i__22783_24167 < count__22782_24166)){
var vec__22796_24168 = chunk__22781_24165.cljs$core$IIndexed$_nth$arity$2(null, i__22783_24167);
var script_tag_24169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22796_24168,(0),null);
var script_body_24170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22796_24168,(1),null);
eval(script_body_24170);


var G__24171 = seq__22780_24164;
var G__24172 = chunk__22781_24165;
var G__24173 = count__22782_24166;
var G__24174 = (i__22783_24167 + (1));
seq__22780_24164 = G__24171;
chunk__22781_24165 = G__24172;
count__22782_24166 = G__24173;
i__22783_24167 = G__24174;
continue;
} else {
var temp__5804__auto___24175 = cljs.core.seq(seq__22780_24164);
if(temp__5804__auto___24175){
var seq__22780_24176__$1 = temp__5804__auto___24175;
if(cljs.core.chunked_seq_QMARK_(seq__22780_24176__$1)){
var c__5525__auto___24178 = cljs.core.chunk_first(seq__22780_24176__$1);
var G__24179 = cljs.core.chunk_rest(seq__22780_24176__$1);
var G__24180 = c__5525__auto___24178;
var G__24181 = cljs.core.count(c__5525__auto___24178);
var G__24182 = (0);
seq__22780_24164 = G__24179;
chunk__22781_24165 = G__24180;
count__22782_24166 = G__24181;
i__22783_24167 = G__24182;
continue;
} else {
var vec__22807_24183 = cljs.core.first(seq__22780_24176__$1);
var script_tag_24184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22807_24183,(0),null);
var script_body_24185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22807_24183,(1),null);
eval(script_body_24185);


var G__24187 = cljs.core.next(seq__22780_24176__$1);
var G__24188 = null;
var G__24189 = (0);
var G__24190 = (0);
seq__22780_24164 = G__24187;
chunk__22781_24165 = G__24188;
count__22782_24166 = G__24189;
i__22783_24167 = G__24190;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__22814){
var vec__22817 = p__22814;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22817,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22817,(1),null);
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
var G__22840 = arguments.length;
switch (G__22840) {
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
var seq__22888 = cljs.core.seq(style_keys);
var chunk__22889 = null;
var count__22890 = (0);
var i__22891 = (0);
while(true){
if((i__22891 < count__22890)){
var it = chunk__22889.cljs$core$IIndexed$_nth$arity$2(null, i__22891);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__24222 = seq__22888;
var G__24223 = chunk__22889;
var G__24224 = count__22890;
var G__24225 = (i__22891 + (1));
seq__22888 = G__24222;
chunk__22889 = G__24223;
count__22890 = G__24224;
i__22891 = G__24225;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22888);
if(temp__5804__auto__){
var seq__22888__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22888__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22888__$1);
var G__24234 = cljs.core.chunk_rest(seq__22888__$1);
var G__24235 = c__5525__auto__;
var G__24236 = cljs.core.count(c__5525__auto__);
var G__24237 = (0);
seq__22888 = G__24234;
chunk__22889 = G__24235;
count__22890 = G__24236;
i__22891 = G__24237;
continue;
} else {
var it = cljs.core.first(seq__22888__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__24238 = cljs.core.next(seq__22888__$1);
var G__24239 = null;
var G__24240 = (0);
var G__24241 = (0);
seq__22888 = G__24238;
chunk__22889 = G__24239;
count__22890 = G__24240;
i__22891 = G__24241;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k22928,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__22949 = k22928;
var G__22949__$1 = (((G__22949 instanceof cljs.core.Keyword))?G__22949.fqn:null);
switch (G__22949__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22928,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__22961){
var vec__22965 = p__22961;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22965,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22965,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22927){
var self__ = this;
var G__22927__$1 = this;
return (new cljs.core.RecordIter((0),G__22927__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22929,other22930){
var self__ = this;
var this22929__$1 = this;
return (((!((other22930 == null)))) && ((((this22929__$1.constructor === other22930.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22929__$1.x,other22930.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22929__$1.y,other22930.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22929__$1.__extmap,other22930.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k22928){
var self__ = this;
var this__5307__auto____$1 = this;
var G__23021 = k22928;
var G__23021__$1 = (((G__23021 instanceof cljs.core.Keyword))?G__23021.fqn:null);
switch (G__23021__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22928);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__22927){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__23033 = cljs.core.keyword_identical_QMARK_;
var expr__23034 = k__5309__auto__;
if(cljs.core.truth_((pred__23033.cljs$core$IFn$_invoke$arity$2 ? pred__23033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__23034) : pred__23033.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__23034)))){
return (new shadow.dom.Coordinate(G__22927,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23033.cljs$core$IFn$_invoke$arity$2 ? pred__23033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__23034) : pred__23033.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__23034)))){
return (new shadow.dom.Coordinate(self__.x,G__22927,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__22927),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__22927){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__22927,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__22934){
var extmap__5342__auto__ = (function (){var G__23068 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22934,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__22934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23068);
} else {
return G__23068;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__22934),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__22934),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k23097,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__23120 = k23097;
var G__23120__$1 = (((G__23120 instanceof cljs.core.Keyword))?G__23120.fqn:null);
switch (G__23120__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23097,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__23130){
var vec__23133 = p__23130;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23096){
var self__ = this;
var G__23096__$1 = this;
return (new cljs.core.RecordIter((0),G__23096__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23098,other23099){
var self__ = this;
var this23098__$1 = this;
return (((!((other23099 == null)))) && ((((this23098__$1.constructor === other23099.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23098__$1.w,other23099.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23098__$1.h,other23099.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23098__$1.__extmap,other23099.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k23097){
var self__ = this;
var this__5307__auto____$1 = this;
var G__23196 = k23097;
var G__23196__$1 = (((G__23196 instanceof cljs.core.Keyword))?G__23196.fqn:null);
switch (G__23196__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23097);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__23096){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__23200 = cljs.core.keyword_identical_QMARK_;
var expr__23201 = k__5309__auto__;
if(cljs.core.truth_((pred__23200.cljs$core$IFn$_invoke$arity$2 ? pred__23200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__23201) : pred__23200.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__23201)))){
return (new shadow.dom.Size(G__23096,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23200.cljs$core$IFn$_invoke$arity$2 ? pred__23200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__23201) : pred__23200.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__23201)))){
return (new shadow.dom.Size(self__.w,G__23096,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__23096),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__23096){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__23096,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__23109){
var extmap__5342__auto__ = (function (){var G__23235 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23109,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__23109)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23235);
} else {
return G__23235;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__23109),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__23109),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__24399 = (i + (1));
var G__24400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__24399;
ret = G__24400;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23289){
var vec__23290 = p__23289;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23290,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23290,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__23308 = arguments.length;
switch (G__23308) {
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
var G__24420 = ps;
var G__24421 = (i + (1));
el__$1 = G__24420;
i = G__24421;
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
var vec__23372 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__23398_24428 = cljs.core.seq(props);
var chunk__23399_24429 = null;
var count__23400_24430 = (0);
var i__23401_24431 = (0);
while(true){
if((i__23401_24431 < count__23400_24430)){
var vec__23436_24432 = chunk__23399_24429.cljs$core$IIndexed$_nth$arity$2(null, i__23401_24431);
var k_24433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23436_24432,(0),null);
var v_24434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23436_24432,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_24433);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_24433),v_24434);


var G__24436 = seq__23398_24428;
var G__24437 = chunk__23399_24429;
var G__24438 = count__23400_24430;
var G__24439 = (i__23401_24431 + (1));
seq__23398_24428 = G__24436;
chunk__23399_24429 = G__24437;
count__23400_24430 = G__24438;
i__23401_24431 = G__24439;
continue;
} else {
var temp__5804__auto___24440 = cljs.core.seq(seq__23398_24428);
if(temp__5804__auto___24440){
var seq__23398_24442__$1 = temp__5804__auto___24440;
if(cljs.core.chunked_seq_QMARK_(seq__23398_24442__$1)){
var c__5525__auto___24443 = cljs.core.chunk_first(seq__23398_24442__$1);
var G__24444 = cljs.core.chunk_rest(seq__23398_24442__$1);
var G__24445 = c__5525__auto___24443;
var G__24446 = cljs.core.count(c__5525__auto___24443);
var G__24447 = (0);
seq__23398_24428 = G__24444;
chunk__23399_24429 = G__24445;
count__23400_24430 = G__24446;
i__23401_24431 = G__24447;
continue;
} else {
var vec__23457_24448 = cljs.core.first(seq__23398_24442__$1);
var k_24449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23457_24448,(0),null);
var v_24450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23457_24448,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_24449);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_24449),v_24450);


var G__24455 = cljs.core.next(seq__23398_24442__$1);
var G__24456 = null;
var G__24457 = (0);
var G__24458 = (0);
seq__23398_24428 = G__24455;
chunk__23399_24429 = G__24456;
count__23400_24430 = G__24457;
i__23401_24431 = G__24458;
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
var vec__23476 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23476,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23476,(1),null);
var seq__23483_24463 = cljs.core.seq(node_children);
var chunk__23485_24464 = null;
var count__23486_24465 = (0);
var i__23487_24466 = (0);
while(true){
if((i__23487_24466 < count__23486_24465)){
var child_struct_24467 = chunk__23485_24464.cljs$core$IIndexed$_nth$arity$2(null, i__23487_24466);
if((!((child_struct_24467 == null)))){
if(typeof child_struct_24467 === 'string'){
var text_24468 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24468),child_struct_24467].join(''));
} else {
var children_24469 = shadow.dom.svg_node(child_struct_24467);
if(cljs.core.seq_QMARK_(children_24469)){
var seq__23578_24471 = cljs.core.seq(children_24469);
var chunk__23580_24472 = null;
var count__23581_24473 = (0);
var i__23582_24474 = (0);
while(true){
if((i__23582_24474 < count__23581_24473)){
var child_24475 = chunk__23580_24472.cljs$core$IIndexed$_nth$arity$2(null, i__23582_24474);
if(cljs.core.truth_(child_24475)){
node.appendChild(child_24475);


var G__24476 = seq__23578_24471;
var G__24477 = chunk__23580_24472;
var G__24478 = count__23581_24473;
var G__24479 = (i__23582_24474 + (1));
seq__23578_24471 = G__24476;
chunk__23580_24472 = G__24477;
count__23581_24473 = G__24478;
i__23582_24474 = G__24479;
continue;
} else {
var G__24480 = seq__23578_24471;
var G__24481 = chunk__23580_24472;
var G__24482 = count__23581_24473;
var G__24483 = (i__23582_24474 + (1));
seq__23578_24471 = G__24480;
chunk__23580_24472 = G__24481;
count__23581_24473 = G__24482;
i__23582_24474 = G__24483;
continue;
}
} else {
var temp__5804__auto___24484 = cljs.core.seq(seq__23578_24471);
if(temp__5804__auto___24484){
var seq__23578_24486__$1 = temp__5804__auto___24484;
if(cljs.core.chunked_seq_QMARK_(seq__23578_24486__$1)){
var c__5525__auto___24487 = cljs.core.chunk_first(seq__23578_24486__$1);
var G__24488 = cljs.core.chunk_rest(seq__23578_24486__$1);
var G__24489 = c__5525__auto___24487;
var G__24490 = cljs.core.count(c__5525__auto___24487);
var G__24491 = (0);
seq__23578_24471 = G__24488;
chunk__23580_24472 = G__24489;
count__23581_24473 = G__24490;
i__23582_24474 = G__24491;
continue;
} else {
var child_24492 = cljs.core.first(seq__23578_24486__$1);
if(cljs.core.truth_(child_24492)){
node.appendChild(child_24492);


var G__24494 = cljs.core.next(seq__23578_24486__$1);
var G__24495 = null;
var G__24496 = (0);
var G__24497 = (0);
seq__23578_24471 = G__24494;
chunk__23580_24472 = G__24495;
count__23581_24473 = G__24496;
i__23582_24474 = G__24497;
continue;
} else {
var G__24498 = cljs.core.next(seq__23578_24486__$1);
var G__24499 = null;
var G__24500 = (0);
var G__24501 = (0);
seq__23578_24471 = G__24498;
chunk__23580_24472 = G__24499;
count__23581_24473 = G__24500;
i__23582_24474 = G__24501;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24469);
}
}


var G__24504 = seq__23483_24463;
var G__24505 = chunk__23485_24464;
var G__24506 = count__23486_24465;
var G__24507 = (i__23487_24466 + (1));
seq__23483_24463 = G__24504;
chunk__23485_24464 = G__24505;
count__23486_24465 = G__24506;
i__23487_24466 = G__24507;
continue;
} else {
var G__24511 = seq__23483_24463;
var G__24512 = chunk__23485_24464;
var G__24513 = count__23486_24465;
var G__24514 = (i__23487_24466 + (1));
seq__23483_24463 = G__24511;
chunk__23485_24464 = G__24512;
count__23486_24465 = G__24513;
i__23487_24466 = G__24514;
continue;
}
} else {
var temp__5804__auto___24515 = cljs.core.seq(seq__23483_24463);
if(temp__5804__auto___24515){
var seq__23483_24516__$1 = temp__5804__auto___24515;
if(cljs.core.chunked_seq_QMARK_(seq__23483_24516__$1)){
var c__5525__auto___24517 = cljs.core.chunk_first(seq__23483_24516__$1);
var G__24518 = cljs.core.chunk_rest(seq__23483_24516__$1);
var G__24520 = c__5525__auto___24517;
var G__24521 = cljs.core.count(c__5525__auto___24517);
var G__24523 = (0);
seq__23483_24463 = G__24518;
chunk__23485_24464 = G__24520;
count__23486_24465 = G__24521;
i__23487_24466 = G__24523;
continue;
} else {
var child_struct_24524 = cljs.core.first(seq__23483_24516__$1);
if((!((child_struct_24524 == null)))){
if(typeof child_struct_24524 === 'string'){
var text_24525 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24525),child_struct_24524].join(''));
} else {
var children_24527 = shadow.dom.svg_node(child_struct_24524);
if(cljs.core.seq_QMARK_(children_24527)){
var seq__23657_24528 = cljs.core.seq(children_24527);
var chunk__23659_24529 = null;
var count__23660_24530 = (0);
var i__23661_24531 = (0);
while(true){
if((i__23661_24531 < count__23660_24530)){
var child_24533 = chunk__23659_24529.cljs$core$IIndexed$_nth$arity$2(null, i__23661_24531);
if(cljs.core.truth_(child_24533)){
node.appendChild(child_24533);


var G__24535 = seq__23657_24528;
var G__24536 = chunk__23659_24529;
var G__24537 = count__23660_24530;
var G__24538 = (i__23661_24531 + (1));
seq__23657_24528 = G__24535;
chunk__23659_24529 = G__24536;
count__23660_24530 = G__24537;
i__23661_24531 = G__24538;
continue;
} else {
var G__24542 = seq__23657_24528;
var G__24543 = chunk__23659_24529;
var G__24544 = count__23660_24530;
var G__24545 = (i__23661_24531 + (1));
seq__23657_24528 = G__24542;
chunk__23659_24529 = G__24543;
count__23660_24530 = G__24544;
i__23661_24531 = G__24545;
continue;
}
} else {
var temp__5804__auto___24546__$1 = cljs.core.seq(seq__23657_24528);
if(temp__5804__auto___24546__$1){
var seq__23657_24547__$1 = temp__5804__auto___24546__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23657_24547__$1)){
var c__5525__auto___24548 = cljs.core.chunk_first(seq__23657_24547__$1);
var G__24549 = cljs.core.chunk_rest(seq__23657_24547__$1);
var G__24550 = c__5525__auto___24548;
var G__24551 = cljs.core.count(c__5525__auto___24548);
var G__24552 = (0);
seq__23657_24528 = G__24549;
chunk__23659_24529 = G__24550;
count__23660_24530 = G__24551;
i__23661_24531 = G__24552;
continue;
} else {
var child_24553 = cljs.core.first(seq__23657_24547__$1);
if(cljs.core.truth_(child_24553)){
node.appendChild(child_24553);


var G__24554 = cljs.core.next(seq__23657_24547__$1);
var G__24555 = null;
var G__24556 = (0);
var G__24557 = (0);
seq__23657_24528 = G__24554;
chunk__23659_24529 = G__24555;
count__23660_24530 = G__24556;
i__23661_24531 = G__24557;
continue;
} else {
var G__24558 = cljs.core.next(seq__23657_24547__$1);
var G__24559 = null;
var G__24560 = (0);
var G__24561 = (0);
seq__23657_24528 = G__24558;
chunk__23659_24529 = G__24559;
count__23660_24530 = G__24560;
i__23661_24531 = G__24561;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24527);
}
}


var G__24562 = cljs.core.next(seq__23483_24516__$1);
var G__24563 = null;
var G__24564 = (0);
var G__24565 = (0);
seq__23483_24463 = G__24562;
chunk__23485_24464 = G__24563;
count__23486_24465 = G__24564;
i__23487_24466 = G__24565;
continue;
} else {
var G__24568 = cljs.core.next(seq__23483_24516__$1);
var G__24569 = null;
var G__24570 = (0);
var G__24571 = (0);
seq__23483_24463 = G__24568;
chunk__23485_24464 = G__24569;
count__23486_24465 = G__24570;
i__23487_24466 = G__24571;
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
var len__5726__auto___24572 = arguments.length;
var i__5727__auto___24573 = (0);
while(true){
if((i__5727__auto___24573 < len__5726__auto___24572)){
args__5732__auto__.push((arguments[i__5727__auto___24573]));

var G__24574 = (i__5727__auto___24573 + (1));
i__5727__auto___24573 = G__24574;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq23738){
var G__23739 = cljs.core.first(seq23738);
var seq23738__$1 = cljs.core.next(seq23738);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23739,seq23738__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
