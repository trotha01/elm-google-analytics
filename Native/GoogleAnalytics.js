Elm.Native.GoogleAnalytics = {};
Elm.Native.GoogleAnalytics.make = function(elm) {
  elm.Native = elm.Native || {};
  elm.Native.GoogleAnalytics = elm.Native.GoogleAnalytics || {};
  if (elm.Native.GoogleAnalytics.values) return elm.Native.GoogleAnalytics.values;

  var Maybe = Elm.Maybe.make(elm);
  var Signal = Elm.Signal.make(elm);
  var List = Elm.Native.List.make(elm);
  var toArray = List.toArray;
  var fromArray = List.fromArray;

  var values = {};

  values.analytics = function(trackingID) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('send', 'pageview');
  };

  return elm.Native.GoogleAnalytics.values = values;
};
