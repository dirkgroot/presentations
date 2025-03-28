import Reveal from "reveal.js";
import {PropsWithChildren, useEffect, useRef} from "react";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealNotes from "reveal.js/plugin/notes/notes";

import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Deck.scss";

export interface DeckProps extends PropsWithChildren {
  title: string;
  scroll?: boolean;
}

export const Deck = ({children, title, scroll}: DeckProps) => {
  // Reference to deck container div
  const deckDivRef = useRef<HTMLDivElement>(null);
  // Reference to deck reveal instance
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    document.title = `${title} | Dirk Groot`;

    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      hash: true,

      width: 1920,
      height: 1280,

      view: scroll ? "scroll" : undefined,
      controlsLayout: "edges",
      transition: "fade",
      transitionSpeed: "fast",
      progress: false,
      slideNumber: "c",
      controls: false,

      pdfSeparateFragments: false,

      plugins: [RevealHighlight, RevealNotes],
    });

    deckRef.current.initialize().then(() => {
      // @ts-expect-error Dit is nodig om PDF te kunnen genereren met behulp van https://github.com/astefanutti/decktape
      window.Reveal = deckRef.current;
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch {
        /* empty */
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        {children}
      </div>
    </div>
  );
};
