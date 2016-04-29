module GoogleAnalytics (..) where

import Native.GoogleAnalytics
import Graphics.Element exposing (show)


analytics trackingID =
  Native.GoogleAnalytics.analytics trackingID
