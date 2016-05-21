/*
var app = Elm.GoogleAnalytics.worker();

app.ports.sendID.subscribe(function(trackingID) {
  console.log("here");

  (function(w,d,s,u,ga,script,m) {
    w['GoogleAnalyticsObject']=ga;
    w[ga] = w[ga] || function() {
      ( w[ga].q = w[ga].q || [] ).push(arguments)
    }, w[ga].l = 1*new Date();
    script=d.createElement(s),
    m=d.getElementsByTagName(s)[0];
  script.async=1;
  script.src=u;
  m.parentNode.insertBefore(script,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', trackingID, 'auto');
  ga('send', 'pageview');
});
*/

var _trotha01$elm_google_analytics$Native_GoogleAnalytics = function() {
  var values = {};

  values.analytics = function() {
    console.log("here");

    (function(w,d,s,u,ga,script,m) {
      w['GoogleAnalyticsObject']=ga;
      w[ga] = w[ga] || function() {
        ( w[ga].q = w[ga].q || [] ).push(arguments)
      }, w[ga].l = 1*new Date();
      script=d.createElement(s),
      m=d.getElementsByTagName(s)[0];
    script.async=1;
    script.src=u;
    m.parentNode.insertBefore(script,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', trackingID, 'auto');
    ga('send', 'pageview');
  }

  return values;
}
