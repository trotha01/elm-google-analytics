port module GoogleAnalytics exposing (..)

{-| This library is an elm helper for using google analytics

@docs analytics

-}


port sendID : String -> Cmd msg


{-| analytics takes a Google Tracking ID and sends website data to Google Analytics.
To find your Tracking ID, see: https://support.google.com/analytics/answer/1032385

    analytics "UA-XXXXX-Y"
-}
analytics : String -> Cmd msg
analytics id =
    let
        _ =
            Debug.log "analyze" ()
    in
        analytics id
