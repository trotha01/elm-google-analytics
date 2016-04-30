Elm.Native.GoogleAnalytics = {};
Elm.Native.GoogleAnalytics.make = function(elm) {
  elm.Native = elm.Native || {};
  elm.Native.GoogleAnalytics = elm.Native.GoogleAnalytics || {};
  if (elm.Native.GoogleAnalytics.values) return elm.Native.GoogleAnalytics.values;

  var Task = Elm.Native.Task.make(elm);

  var values = {};

  values.analytics = function(trackingID) {
    return Task.asyncFunction(function(callback) {
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

      Task.succeed()
    })

  };

  return elm.Native.GoogleAnalytics.values = values;
};
