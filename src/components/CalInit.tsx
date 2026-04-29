'use client'

import Script from 'next/script'
import { CAL_LINK } from '@/lib/cal'

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void
  }
}

// Official Cal.com embed snippet — creates a queue before the script loads,
// then replays all queued commands once embed.js is ready.
const CAL_SNIPPET = `
(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal; let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments); };
      const namespace = ar[1];
      api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, [L, api]);
      } else p(cal, ar);
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", { origin: "https://cal.com" });
Cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
`

export default function CalInit() {
  return (
    <>
      <Script
        id="cal-embed-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: CAL_SNIPPET }}
      />
      {/* Hidden trigger — Cal.com attaches its click handler to this element */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: '-9999px',
          top: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <button
          id="cal-hidden-trigger"
          data-cal-link={CAL_LINK}
          data-cal-config={JSON.stringify({ layout: 'month_view' })}
        >
          book
        </button>
      </div>
    </>
  )
}
