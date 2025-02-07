goog.provide('frokost.app');
var module$node_modules$spin_wheel$dist$spin_wheel_esm=shadow.js.require("module$node_modules$spin_wheel$dist$spin_wheel_esm", {});
frokost.app.write_base64 = (function frokost$app$write_base64(input){
return goog.crypt.base64.encodeStringUtf8(cljs.core.str.cljs$core$IFn$_invoke$arity$1(input));
});
frokost.app.read_base64 = (function frokost$app$read_base64(input){
try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.decodeStringUtf8(input));
}catch (e21555){if((e21555 instanceof Error)){
var _ = e21555;
return null;
} else {
throw e21555;

}
}});
frokost.app.set_localstorage_BANG_ = (function frokost$app$set_localstorage_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
frokost.app.get_localstorage = (function frokost$app$get_localstorage(key){
return window.localStorage.getItem(key);
});
frokost.app.get_query_items = (function frokost$app$get_query_items(){
return (new URL(window.location.href)).searchParams.get("q");
});
if((typeof frokost !== 'undefined') && (typeof frokost.app !== 'undefined') && (typeof frokost.app.state !== 'undefined')){
} else {
frokost.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),(function (){var or__5002__auto__ = (function (){var temp__5804__auto__ = frokost.app.get_query_items();
if(cljs.core.truth_(temp__5804__auto__)){
var q = temp__5804__auto__;
return frokost.app.read_base64(q);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5804__auto__ = frokost.app.get_localstorage("wheel-items");
if(cljs.core.truth_(temp__5804__auto__)){
var saved_items = temp__5804__auto__;
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(saved_items);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Item 1","Item 2"], null);
}
}
})(),new cljs.core.Keyword(null,"new-item-input","new-item-input",-1695089340),null,new cljs.core.Keyword(null,"wheel","wheel",-593965797),null,new cljs.core.Keyword(null,"overlay","overlay",-139131598),(function (){var img = (new Image());
(img.src = "./img/overlay.svg");

return img;
})()], null));
}
frokost.app.copy_to_clipboard = (function frokost$app$copy_to_clipboard(text){
return navigator.clipboard.writeText(text);
});
frokost.app.get_link = (function frokost$app$get_link(){
var url = (new URL(window.location.href));
var search_params = url.searchParams;
search_params.set("q",frokost.app.write_base64(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state))));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url.pathname),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_params)].join('');
});
frokost.app.props = (function frokost$app$props(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"overlayImage","overlayImage",1989074465),new cljs.core.Keyword(null,"itemLabelRadiusMax","itemLabelRadiusMax",1034792869),new cljs.core.Keyword(null,"itemLabelRotation","itemLabelRotation",-249274138),new cljs.core.Keyword(null,"itemLabelFontSizeMax","itemLabelFontSizeMax",-1604948122),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"itemLabelColors","itemLabelColors",-564105328),new cljs.core.Keyword(null,"rotationResistance","rotationResistance",-1620331631),new cljs.core.Keyword(null,"rotationSpeedMax","rotationSpeedMax",526664947),new cljs.core.Keyword(null,"itemLabelRadius","itemLabelRadius",-23257357),new cljs.core.Keyword(null,"lineWidth","lineWidth",1649558998),new cljs.core.Keyword(null,"lineColor","lineColor",1191148310),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"itemBackgroundColors","itemBackgroundColors",1819052922),new cljs.core.Keyword(null,"itemLabelBaselineOffset","itemLabelBaselineOffset",1059942460),new cljs.core.Keyword(null,"itemLabelAlign","itemLabelAlign",-657789602)],[new cljs.core.Keyword(null,"overlay","overlay",-139131598).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)),0.35,(180),(55),0.84,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fff"], null),(-100),(500),0.93,(1),"#fff",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21556_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label","label",1718410804)],[p1__21556_SHARP_]);
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state))),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffc93c","#66bfbf","#a2d5f2","#515070","#43658b","#ed6663","#d54062"], null),-0.07,"left"]);
});
frokost.app.create_wheel = (function frokost$app$create_wheel(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"wheel","wheel",-593965797),cljs.core.constantly((new module$node_modules$spin_wheel$dist$spin_wheel_esm.Wheel(document.getElementById("wheel-container"),cljs.core.clj__GT_js(frokost.app.props())))));
});
frokost.app.init_wheel = (function frokost$app$init_wheel(){
new cljs.core.Keyword(null,"wheel","wheel",-593965797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)).stop();

new cljs.core.Keyword(null,"wheel","wheel",-593965797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)).init(cljs.core.clj__GT_js(frokost.app.props()));

return frokost.app.set_localstorage_BANG_("wheel-items",new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)));
});
frokost.app.add_item = (function frokost$app$add_item(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),(function (p1__21557_SHARP_){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(p1__21557_SHARP_),new cljs.core.Keyword(null,"new-item-input","new-item-input",-1695089340).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state))))));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"new-item-input","new-item-input",-1695089340),cljs.core.constantly(null));

return frokost.app.init_wheel();
});
frokost.app.remove_item = (function frokost$app$remove_item(item){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),(function (p1__21558_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,item),p1__21558_SHARP_);
}));

return frokost.app.init_wheel();
});
frokost.app.clear_items = (function frokost$app$clear_items(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY);

return frokost.app.init_wheel();
});
frokost.app.set_items = (function frokost$app$set_items(items){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),items);

return frokost.app.init_wheel();
});
frokost.app.spin_to = (function frokost$app$spin_to(var_args){
var G__21560 = arguments.length;
switch (G__21560) {
case 1:
return frokost.app.spin_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return frokost.app.spin_to.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frokost.app.spin_to.cljs$core$IFn$_invoke$arity$1 = (function (item){
var index_of = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)).indexOf(item);
var idx = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),index_of))?cljs.core.rand_int(cljs.core.count(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)))):index_of);
var spin_seconds = (5);
return new cljs.core.Keyword(null,"wheel","wheel",-593965797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)).spinToItem(idx,((1000) * spin_seconds),true,((2) * spin_seconds));
}));

(frokost.app.spin_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return frokost.app.spin_to.cljs$core$IFn$_invoke$arity$1(null);
}));

(frokost.app.spin_to.cljs$lang$maxFixedArity = 1);

frokost.app.handle_spin = (function frokost$app$handle_spin(event){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0));

if(cljs.core.truth_(event.ctrlKey)){
return frokost.app.spin_to.cljs$core$IFn$_invoke$arity$1("Kantinen");
} else {
return frokost.app.spin_to.cljs$core$IFn$_invoke$arity$0();
}
});
frokost.app.app = (function frokost$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#menu","div#menu",-295612754),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-button-wrapper","div.input-button-wrapper",103915089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.nice-input","input.nice-input",-1466389698),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"new-item-input","new-item-input",-1695089340).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__21561_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21561_SHARP_.key,"Enter")){
return frokost.app.add_item();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21562_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"new-item-input","new-item-input",-1695089340),cljs.core.constantly(p1__21562_SHARP_.target.value));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button.green","button.nice-button.green",1970500065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.add_item();
})], null),"Add"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nice-list","ul.nice-list",-237419079),(function (){var iter__5480__auto__ = (function frokost$app$app_$_iter__21563(s__21564){
return (new cljs.core.LazySeq(null,(function (){
var s__21564__$1 = s__21564;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21564__$1);
if(temp__5804__auto__){
var s__21564__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21564__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21564__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21566 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21565 = (0);
while(true){
if((i__21565 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__21565);
cljs.core.chunk_append(b__21566,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21565,item,c__5478__auto__,size__5479__auto__,b__21566,s__21564__$2,temp__5804__auto__){
return (function (){
return frokost.app.remove_item(item);
});})(i__21565,item,c__5478__auto__,size__5479__auto__,b__21566,s__21564__$2,temp__5804__auto__))
], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__21568 = (i__21565 + (1));
i__21565 = G__21568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21566),frokost$app$app_$_iter__21563(cljs.core.chunk_rest(s__21564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21566),null);
}
} else {
var item = cljs.core.first(s__21564__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__21564__$2,temp__5804__auto__){
return (function (){
return frokost.app.remove_item(item);
});})(item,s__21564__$2,temp__5804__auto__))
], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),frokost$app$app_$_iter__21563(cljs.core.rest(s__21564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button.red","button.nice-button.red",-1935359741),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.clear_items();
})], null),"Clear!"], null),(function (){var temp__5804__auto__ = frokost.app.get_query_items();
if(cljs.core.truth_(temp__5804__auto__)){
var q = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button.blue","button.nice-button.blue",-1473314014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.set_items(frokost.app.read_base64(q));
})], null),"Reset"], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button.green","button.nice-button.green",1970500065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frokost.app.handle_spin], null),"Spin!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.small.nice-button.blue","button.small.nice-button.blue",1803384690),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.copy_to_clipboard(frokost.app.get_link());
})], null),"Copy link"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#wheel-container","div#wheel-container",-1779384442)], null)], null);
});
if((typeof frokost !== 'undefined') && (typeof frokost.app !== 'undefined') && (typeof frokost.app.react_root !== 'undefined')){
} else {
frokost.app.react_root = reagent.dom.client.create_root(document.getElementById("app"));
}
frokost.app.init = (function frokost$app$init(){
frokost.app.react_root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frokost.app.app], null)));

return setTimeout(frokost.app.create_wheel,(1));
});

//# sourceMappingURL=frokost.app.js.map
