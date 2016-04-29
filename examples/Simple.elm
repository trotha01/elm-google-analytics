module Main (..) where

import Signal
import Graphics.Element exposing (show)
import GoogleAnalytics exposing (analytics)


main =
  let
    _ =
      analytics "UA-36258407-2"
  in
    show "hello world"
