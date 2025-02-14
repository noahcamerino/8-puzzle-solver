/**
 * @type { import("../client-web").WebClientPlaceholderInterface }
 */
var olay = (window.olay = {
  epoch: Date.now(),
  bufferedEvents: [],
  addEvent: function (type, metadata) {
    metadata = metadata || {};
    var localTime = Date.now() - olay.epoch;
    olay.bufferedEvents.push({ localTime: localTime, type: type, metadata: metadata });
  },
});

(function () {
  var scriptEl = document.createElement("script");
  scriptEl.type = "text/javascript";
  scriptEl.async = true;
  scriptEl.src = "https://olay.deniz.co/client-web.js?project=8-puzzle-solver";

  var s = document.getElementsByTagName("script")[0];
  // @ts-ignore
  s.parentNode.insertBefore(scriptEl, s);
})();
