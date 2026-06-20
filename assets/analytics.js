!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister identify set_config get_distinct_id alias people.set people.set_once people.unset reset group setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags onFeatureFlags getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

posthog.init('phc_pHEHcRK3XwXOe4IYtlLLvIOwzUoWY2iNo2yCgt35UE1', {
  api_host: 'https://us.i.posthog.com',
  cookieless_mode: 'always',
  persistence: 'memory',
  disable_session_recording: true,
  capture_pageview: true,
  capture_pageleave: true,
  autocapture: true
});

// Google Analytics 4 (gtag.js)
(function () {
  var GA4_ID = 'G-8KQ5XFVT8R';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA4_ID);
})();
