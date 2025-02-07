(ns user
  (:require
   [shadow.cljs.devtools.api :as shadow]))

(defn start-cljs-repl
  []
  (shadow/watch :frontend)
  (shadow/repl :frontend))

;; after stopping with :cljs/quit in the repl, jump in again
(defn connect-existing-repl
  []
  (shadow/repl :frontend))

;; in case we want to deploy this somewhere some day
(defn build-cljs-release
  []
  (shadow/release :frontend))

(comment

  (start-cljs-repl)

  ())
