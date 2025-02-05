
shadow.cljs.devtools.client.env.module_loaded('main');

try { frokost.app.init(); } catch (e) { console.error("An error occurred when calling (frokost.app/init)"); console.error(e); }