(ns frokost.app
  (:require
   [clojure.edn :as edn]
   [reagent.core :as r]
   [reagent.dom.client :as dom]
   [spin-wheel :refer [Wheel]]))

(def defaults [{:name     "Biograf kebab"
                :distance :walking}
               {:name     "Bøff"
                :distance :walking}
               {:name     "Da Basso"
                :distance :walking}
               {:name     "Det sunde køkken"
                :distance :walking}
               {:name     "Ella"
                :distance :walking}
               {:name     "Gasoline Grill"
                :distance :long-drive}
               {:name     "Gemüse kebab"
                :distance :short-drive}
               {:name     "Harrys Place"
                :distance :walking}
               {:name     "Jagger"
                :distance :walking}
               {:name     "Kantinen"
                :distance :walking}
               {:name     "Kebab Klubben"
                :distance :walking}
               {:name     "Kebabistan"
                :distance :long-drive}
               {:name     "McDonald's"
                :distance :short-drive}
               {:name     "Olioli"
                :distance :walking}
               {:name     "Otto"
                :distance :walking}
               {:name     "Parma & Pasta"
                :distance :walking}
               {:name     "Ramen to Biiru"
                :distance :long-drive}
               {:name     "Ritta"
                :distance :long-drive}
               {:name     "Slagter Broe"
                :distance :long-drive}
               {:name     "Wedo"
                :distance :walking}
               {:name     "Wokshop"
                :distance :walking}])

(defn set-localstorage!
  [key val]
  (.setItem (.-localStorage js/window) key val))

(defn get-localstorage
  [key]
  (.getItem (.-localStorage js/window) key))

(defonce state
  (r/atom {:places          (if-let [saved-places (get-localstorage "wheel-places")]
                              (edn/read-string saved-places)
                              defaults)
           :new-place-input nil
           :wheel           nil
           :overlay         (let [img (js/Image.)]
                              (set! (.-src img) "./img/overlay.svg")
                              img)}))

(defn props
  []
  {:items (mapv #(hash-map :label (:name %)) (:places @state))
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
  (set-localstorage! "wheel-places" (:places @state)))

(defn add-place
  []
  (swap! state update :places #(sort-by :name (remove (comp nil? :name) (vec (conj (set %) {:name (:new-place-input @state)})))))
  (swap! state update :new-place-input (constantly nil))
  (init-wheel))

(defn remove-place
  [place]
  (swap! state update :places #(remove (comp #{place} :name) %))
  (init-wheel))

(defn reset-places
  []
  (swap! state assoc :places defaults)
  (init-wheel))

(defn preset-places
  [preset]
  (swap! state assoc :places (filter (comp #{preset} :distance) defaults))
  (init-wheel))

(defn spin-to-random
  []
  (let [rand-idx (rand-int (count (:places @state)))
        spin-seconds 5]
    (.spinToItem ^Wheel (:wheel @state) rand-idx (* 1000 spin-seconds) true (* 2 spin-seconds))))
;spinToItem (itemIndex = 0, duration = 0, spinToCenter = true, numberOfRevolutions = 1, direction = 1, easingFunction = null))

(defn app
  []
  [:div
   [:div#menu
    [:div.input-button-wrapper
     [:input.nice-input {:type "text"
                         :value (:new-place-input @state)
                         :on-key-down #(when (= (.-key %) "Enter") (add-place))
                         :on-change #(swap! state update :new-place-input (constantly (-> % .-target .-value)))}]
     [:button.nice-button {:on-click #(add-place)} "Add"]]
    [:br]
    [:ul.nice-list
     (for [place (:places @state)]
       (let [name (:name place)]
         ^{:key name}
         [:li {:on-click #(remove-place name)} name]))]
    [:br]
    [:button.nice-button.small {:on-click #(preset-places :walking)} "Walking distance"]
    [:button.nice-button.small {:on-click #(preset-places :short-drive)} "Short drive"]
    [:button.nice-button.small {:on-click #(preset-places :long-drive)} "Longer drive"]
    [:br]
    [:br]
    [:button.nice-button {:on-click #(preset-places nil)} "Clear!"]
    [:button.nice-button {:on-click #(reset-places)} "Reset!"]
    [:button.nice-button {:on-click #(spin-to-random)} "Spin!"]]
   [:div#wheel-container]])

(defonce react-root
  (dom/create-root (js/document.getElementById "app")))

(defn ^:dev/after-load init
  []
  (.render react-root (r/as-element [app]))
  (js/setTimeout create-wheel 1))
