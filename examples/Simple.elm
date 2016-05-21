module Main exposing (..)

import Html exposing (Html, text)
import Html.App
import GoogleAnalytics exposing (analytics)


-- MODEL


type alias Model =
    Int


model : Model
model =
    0



-- UPDATE


update msg model =
    ( model, Cmd.none )



-- VIEW


view : Model -> Html msg
view model =
    text "hello world"



-- SUBSCRIPTIONS


subscriptions : Model -> Sub msg
subscriptions model =
    Sub.none



-- Main


main : Program Never
main =
    Html.App.program
        { init = ( 0, analytics "UA-36258407-2" )
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
