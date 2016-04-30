module Main (..) where

import Signal
import Task exposing (Task)
import Graphics.Element exposing (show)
import GoogleAnalytics exposing (analytics)


main =
  show "hello world"


port runner : Task () ()
port runner =
  analytics "UA-36258407-2"
