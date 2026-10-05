import { useEffect, useRef, useState } from "react";
import AppPreview from "./AppPreview";
import Icon from "./Icon";
import s from "./AppStore.module.css";

function Screenshot({ shot, ...props }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={s.imageFallback}>Vorschau nicht verfügbar</div>
  ) : (
    <img
      src={shot.src}
      alt={shot.alt || shot.caption || "Ansicht der App"}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}

export default function ScreenshotGallery({ app }) {
  const shots = app.screenshots || [];
  const [active, setActive] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const close = () => setActive(null);
  useEffect(() => {
    if (active === null) return;
    const el = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    el.focus();
    function handleKey(event) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight" && shots.length > 1) {
        event.preventDefault();
        setActive((index) => (index + 1) % shots.length);
      }
      if (event.key === "ArrowLeft" && shots.length > 1) {
        event.preventDefault();
        setActive((index) => (index - 1 + shots.length) % shots.length);
      }
      if (event.key === "Tab") {
        const focusables = el.querySelectorAll('button:not([disabled]), [href], [tabindex="0"]');
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === el)) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      trigger.current?.focus();
    };
  }, [active === null, shots.length]);

  if (!shots.length) return <AppPreview app={app} />;
  return (
    <>
      <div className={s.screenshots}>
        {shots.map((shot, index) => (
          <figure key={shot.src}>
            <button
              type="button"
              className={s.screenshotButton}
              aria-label={`${shot.caption || `Screenshot ${index + 1}`} vergrößern`}
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setActive(index);
              }}
            >
              <Screenshot shot={shot} loading="lazy" />
              <span className={s.expand}>
                <Icon name="expand" size={17} />
              </span>
            </button>
            {shot.caption && <figcaption>{shot.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {active !== null && (
        <div
          className={s.modalBackdrop}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            ref={dialog}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="screenshot-caption"
            className={s.modal}
          >
            <div className={s.modalToolbar}>
              <span id="screenshot-caption">{shots[active].caption || "Ansicht der App"}</span>
              <button type="button" onClick={close} aria-label="Vorschau schließen">
                <Icon name="close" />
              </button>
            </div>
            <Screenshot key={shots[active].src} shot={shots[active]} />
            {shots.length > 1 && (
              <div className={s.modalNavigation}>
                <button
                  type="button"
                  onClick={() => setActive((index) => (index - 1 + shots.length) % shots.length)}
                >
                  <Icon name="back" /> Zurück
                </button>
                <span>
                  {active + 1} / {shots.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActive((index) => (index + 1) % shots.length)}
                >
                  Weiter <Icon />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
