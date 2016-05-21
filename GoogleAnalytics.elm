module GoogleAnalytics exposing (..)

{-| This library is an elm helper for using google analytics

@docs analytics

-}

import Native.GoogleAnalytics


{-| analytics takes a Google Tracking ID and sends website data to Google Analytics.
To find your Tracking ID, see: https://support.google.com/analytics/answer/1032385

    analytics "UA-XXXXX-Y"
-}
analytics : String -> Cmd msg
analytics id =
    let
        _ =
            Native.GoogleAnalytics.analytics id
    in
        Cmd.none
