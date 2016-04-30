# Elm-Google-Analytics

A simple helper function for using Google Analytics in an Elm application

## Example
```
import Signal
import Task exposing (Task)
import Graphics.Element exposing (show)
import GoogleAnalytics exposing (analytics)


main =
  show "hello world"


port runner : Task () ()
port runner =
  analytics "UA-36258407-2"
```
