goog.provide('frokost.app');
var module$node_modules$spin_wheel$dist$spin_wheel_esm=shadow.js.require("module$node_modules$spin_wheel$dist$spin_wheel_esm", {});
frokost.app.defaults = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Biograf kebab",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"B\u00F8ff",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Da Basso",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Det sunde k\u00F8kken",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ella",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Gasoline Grill",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"long-drive","long-drive",333032510)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Gem\u00FCse kebab",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"short-drive","short-drive",470880793)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Harrys Place",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jagger",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Kantinen",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Kebab Klubben",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Kebabistan",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"long-drive","long-drive",333032510)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"McDonald's",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"short-drive","short-drive",470880793)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Olioli",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Otto",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Parma & Pasta",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ramen to Biiru",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"long-drive","long-drive",333032510)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ritta",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"long-drive","long-drive",333032510)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Slagter Broe",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"long-drive","long-drive",333032510)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Wedo",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Wokshop",new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"walking","walking",-862303159)], null)], null);
frokost.app.set_localstorage_BANG_ = (function frokost$app$set_localstorage_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
frokost.app.get_localstorage = (function frokost$app$get_localstorage(key){
return window.localStorage.getItem(key);
});
if((typeof frokost !== 'undefined') && (typeof frokost.app !== 'undefined') && (typeof frokost.app.state !== 'undefined')){
} else {
frokost.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"places","places",1043491706),(function (){var temp__5802__auto__ = frokost.app.get_localstorage("wheel-places");
if(cljs.core.truth_(temp__5802__auto__)){
var saved_places = temp__5802__auto__;
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(saved_places);
} else {
return frokost.app.defaults;
}
})(),new cljs.core.Keyword(null,"new-place-input","new-place-input",-963871101),null,new cljs.core.Keyword(null,"wheel","wheel",-593965797),null,new cljs.core.Keyword(null,"overlay","overlay",-139131598),(function (){var img = (new Image());
(img.src = "./img/overlay.svg");

return img;
})()], null));
}
frokost.app.props = (function frokost$app$props(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"overlayImage","overlayImage",1989074465),new cljs.core.Keyword(null,"itemLabelRadiusMax","itemLabelRadiusMax",1034792869),new cljs.core.Keyword(null,"itemLabelRotation","itemLabelRotation",-249274138),new cljs.core.Keyword(null,"itemLabelFontSizeMax","itemLabelFontSizeMax",-1604948122),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"itemLabelColors","itemLabelColors",-564105328),new cljs.core.Keyword(null,"rotationResistance","rotationResistance",-1620331631),new cljs.core.Keyword(null,"rotationSpeedMax","rotationSpeedMax",526664947),new cljs.core.Keyword(null,"itemLabelRadius","itemLabelRadius",-23257357),new cljs.core.Keyword(null,"lineWidth","lineWidth",1649558998),new cljs.core.Keyword(null,"lineColor","lineColor",1191148310),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"itemBackgroundColors","itemBackgroundColors",1819052922),new cljs.core.Keyword(null,"itemLabelBaselineOffset","itemLabelBaselineOffset",1059942460),new cljs.core.Keyword(null,"itemLabelAlign","itemLabelAlign",-657789602)],[new cljs.core.Keyword(null,"overlay","overlay",-139131598).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)),0.35,(180),(55),0.84,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fff"], null),(-100),(500),0.93,(1),"#fff",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20185_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label","label",1718410804)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20185_SHARP_)]);
}),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state))),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffc93c","#66bfbf","#a2d5f2","#515070","#43658b","#ed6663","#d54062"], null),-0.07,"left"]);
});
frokost.app.create_wheel = (function frokost$app$create_wheel(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"wheel","wheel",-593965797),cljs.core.constantly((new module$node_modules$spin_wheel$dist$spin_wheel_esm.Wheel(document.getElementById("wheel-container"),cljs.core.clj__GT_js(frokost.app.props())))));
});
frokost.app.init_wheel = (function frokost$app$init_wheel(){
new cljs.core.Keyword(null,"wheel","wheel",-593965797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)).stop();

new cljs.core.Keyword(null,"wheel","wheel",-593965797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)).init(cljs.core.clj__GT_js(frokost.app.props()));

return frokost.app.set_localstorage_BANG_("wheel-places",new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)));
});
frokost.app.add_place = (function frokost$app$add_place(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"places","places",1043491706),(function (p1__20186_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(p1__20186_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"new-place-input","new-place-input",-963871101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state))], null)))));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"new-place-input","new-place-input",-963871101),cljs.core.constantly(null));

return frokost.app.init_wheel();
});
frokost.app.remove_place = (function frokost$app$remove_place(place){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"places","places",1043491706),(function (p1__20187_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([place]),new cljs.core.Keyword(null,"name","name",1843675177)),p1__20187_SHARP_);
}));

return frokost.app.init_wheel();
});
frokost.app.reset_places = (function frokost$app$reset_places(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"places","places",1043491706),frokost.app.defaults);

return frokost.app.init_wheel();
});
frokost.app.preset_places = (function frokost$app$preset_places(preset){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([preset]),new cljs.core.Keyword(null,"distance","distance",-1671893894)),frokost.app.defaults));

return frokost.app.init_wheel();
});
frokost.app.spin_to_random = (function frokost$app$spin_to_random(){
var rand_idx = cljs.core.rand_int(cljs.core.count(new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state))));
var spin_seconds = (5);
return new cljs.core.Keyword(null,"wheel","wheel",-593965797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)).spinToItem(rand_idx,((1000) * spin_seconds),true,((2) * spin_seconds));
});
frokost.app.app = (function frokost$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#menu","div#menu",-295612754),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-button-wrapper","div.input-button-wrapper",103915089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.nice-input","input.nice-input",-1466389698),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"new-place-input","new-place-input",-963871101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__20188_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20188_SHARP_.key,"Enter")){
return frokost.app.add_place();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20189_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frokost.app.state,cljs.core.update,new cljs.core.Keyword(null,"new-place-input","new-place-input",-963871101),cljs.core.constantly(p1__20189_SHARP_.target.value));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button","button.nice-button",-1177839736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.add_place();
})], null),"Add"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nice-list","ul.nice-list",-237419079),(function (){var iter__5480__auto__ = (function frokost$app$app_$_iter__20190(s__20191){
return (new cljs.core.LazySeq(null,(function (){
var s__20191__$1 = s__20191;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20191__$1);
if(temp__5804__auto__){
var s__20191__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20191__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20191__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20193 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20192 = (0);
while(true){
if((i__20192 < size__5479__auto__)){
var place = cljs.core._nth(c__5478__auto__,i__20192);
cljs.core.chunk_append(b__20193,(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20192,name,place,c__5478__auto__,size__5479__auto__,b__20193,s__20191__$2,temp__5804__auto__){
return (function (){
return frokost.app.remove_place(name);
});})(i__20192,name,place,c__5478__auto__,size__5479__auto__,b__20193,s__20191__$2,temp__5804__auto__))
], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null));
})());

var G__20194 = (i__20192 + (1));
i__20192 = G__20194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20193),frokost$app$app_$_iter__20190(cljs.core.chunk_rest(s__20191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20193),null);
}
} else {
var place = cljs.core.first(s__20191__$2);
return cljs.core.cons((function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,place,s__20191__$2,temp__5804__auto__){
return (function (){
return frokost.app.remove_place(name);
});})(name,place,s__20191__$2,temp__5804__auto__))
], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null));
})(),frokost$app$app_$_iter__20190(cljs.core.rest(s__20191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frokost.app.state)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button.small","button.nice-button.small",-711045895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.preset_places(new cljs.core.Keyword(null,"walking","walking",-862303159));
})], null),"Walking distance"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button.small","button.nice-button.small",-711045895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.preset_places(new cljs.core.Keyword(null,"short-drive","short-drive",470880793));
})], null),"Short drive"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button.small","button.nice-button.small",-711045895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.preset_places(new cljs.core.Keyword(null,"long-drive","long-drive",333032510));
})], null),"Longer drive"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button","button.nice-button",-1177839736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.preset_places(null);
})], null),"Clear!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button","button.nice-button",-1177839736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.reset_places();
})], null),"Reset!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nice-button","button.nice-button",-1177839736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frokost.app.spin_to_random();
})], null),"Spin!"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#wheel-container","div#wheel-container",-1779384442)], null)], null);
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
