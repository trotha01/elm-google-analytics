# Elm-Google-Analytics

A helper function for using Google Analytics in an Elm application

# Example
```
main : Program Never
main =
    Html.App.program
        { init = ( model, analytics "UA-36258407-2" )
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
```

