(ns frokost.app
  (:require
   [clojure.edn :as edn]
   [goog.crypt.base64 :as b64]
   [reagent.core :as r]
   [reagent.dom.client :as dom]
   [spin-wheel :refer [Wheel]]))

(defn write-base64
  [input]
  (b64/encodeStringUtf8 (str input)))

(defn read-base64
  [input]
  (try
    (edn/read-string
     (b64/decodeStringUtf8 input))
    (catch js/Error _ nil)))

(defn set-localstorage!
  [key val]
  (.setItem (.-localStorage js/window) key val))

(defn get-localstorage
  [key]
  (.getItem (.-localStorage js/window) key))

(defn get-query-items
  []
  (.get (.-searchParams (js/URL. js/window.location.href)) "q"))

(defonce state
  (r/atom {:items          (or (when-let [q (get-query-items)]
                                 (read-base64 q))
                               (when-let [saved-items (get-localstorage "wheel-items")]
                                 (edn/read-string saved-items))
                               ["Item 1" "Item 2"])
           :new-item-input nil
           :wheel          nil
           :overlay        (let [img (js/Image.)]
                             (set! (.-src img) "./img/overlay.svg")
                             img)}))

(defn copy-to-clipboard
  [text]
  (.. js/navigator -clipboard (writeText text)))

(defn get-link []
  (let [url (js/URL. js/window.location.href)
        search-params (.-searchParams url)]
    (.set search-params "q" (write-base64 (:items @state)))
    (str (.-origin url) (.-pathname url) "?" search-params)))

(defn props
  []
  {:items (mapv #(hash-map :label %) (:items @state))
   :itemBackgroundColors ["#ffc93c" "#66bfbf" "#a2d5f2" "#515070" "#43658b" "#ed6663" "#d54062"]
   :radius 0.84,
   :itemLabelRadius 0.93,
   :itemLabelRadiusMax 0.35,
   :itemLabelRotation 180,
   :itemLabelAlign "left",
   :itemLabelColors ["#fff"],
   :itemLabelBaselineOffset -0.07,
   :itemLabelFontSizeMax 55,
   :rotationSpeedMax 500,
   :rotationResistance -100,
   :lineWidth 1,
   :lineColor "#fff"
   :overlayImage (:overlay @state)})

(defn create-wheel
  []
  (swap! state update :wheel (constantly
                              (Wheel. (js/document.getElementById "wheel-container")
                                      (clj->js (props))))))

(defn init-wheel
  []
  (.stop ^Wheel (:wheel @state))
  (.init ^Wheel (:wheel @state) (clj->js (props)))
  (set-localstorage! "wheel-items" (:items @state)))

(defn add-item
  []
  (swap! state update :items #(sort (remove nil? (vec (conj (set %) (:new-item-input @state))))))
  (swap! state update :new-item-input (constantly nil))
  (init-wheel))

(defn remove-item
  [item]
  (swap! state update :items #(remove (partial = item) %))
  (init-wheel))

(defn clear-items
  []
  (swap! state assoc :items [])
  (init-wheel))

(defn set-items
  [items]
  (swap! state assoc :items items)
  (init-wheel))

(defn spin-to
  ([item]
   (let [index-of (.indexOf (:items @state) item)
         idx (if (= -1 index-of) (rand-int (count (:items @state))) index-of)
         spin-seconds 5]
     (.spinToItem ^Wheel (:wheel @state) idx (* 1000 spin-seconds) true (* 2 spin-seconds))))
  ([]
   (spin-to nil)))

(defn handle-spin
  [event]
  (println event)
  (if (.-ctrlKey event)
    (spin-to "Kantinen")
    (spin-to)))

(defn app
  []
  [:div
   [:div#menu
    [:div.input-button-wrapper
     [:input.nice-input {:type "text"
                         :value (:new-item-input @state)
                         :on-key-down #(when (= (.-key %) "Enter") (add-item))
                         :on-change #(swap! state update :new-item-input (constantly (-> % .-target .-value)))}]
     [:button.nice-button.green {:on-click #(add-item)} "Add"]]
    [:br]
    [:ul.nice-list
     (for [item (:items @state)]
       ^{:key item}
       [:li {:on-click #(remove-item item)} item])]
    [:br]
    [:button.nice-button.red {:on-click #(clear-items)} "Clear!"]
    (when-let [q (get-query-items)]
      [:button.nice-button.blue {:on-click #(set-items (read-base64 q))} "Reset"])
    [:button.nice-button.green {:on-click handle-spin} "Spin!"]
    [:br]
    [:button.small.nice-button.blue {:on-click #(copy-to-clipboard (get-link))} "Copy link"]]
   [:div#wheel-container]])

(defonce react-root
  (dom/create-root (js/document.getElementById "app")))

(defn ^:dev/after-load init
  []
  (.render react-root (r/as-element [app]))
  (js/setTimeout create-wheel 1))
