import { useEffect } from 'react';
// This is the Tally component


const Tallycom = () => {
	// The code below will load the embed
	useEffect(() => {
		const widgetScriptSrc = 'https://tally.so/widgets/embed.js';

    const load = () => {
      // Load Tally embeds
      if (typeof Tally !== 'undefined') {
        // eslint-disable-next-line no-undef
        Tally.loadEmbeds();
        return;
      }

      // Fallback if window.Tally is not available
      document
        .querySelectorAll('iframe[data-tally-src]:not([src])')
        .forEach((iframeEl) => {
          iframeEl.src = iframeEl.dataset.tallySrc;
        });
    };

    // If Tally is already loaded, load the embeds
    if (typeof Tally !== 'undefined') {
      load();
      return;
    }

    // If the Tally widget script is not loaded yet, load it
    if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
      const script = document.createElement('script');
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
      return;
    }
	}, []);

  return (
    <div>
		<iframe data-tally-src="https://tally.so/embed/w24ylb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="313" frameBorder="0" marginHeight="0" marginWidth="0" title="Contacter moi"></iframe>
		</div>
  );
};

export default Tallycom;