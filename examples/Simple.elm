module Main (..) where

import Signal
import Graphics.Element exposing (show)
import GoogleAnalytics exposing (analytics)


main =
  let
    _ =
      analytics "someid"
  in
    show "hello world"
