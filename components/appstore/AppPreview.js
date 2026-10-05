import Icon from "./Icon";
import s from "./AppStore.module.css";

// This is an illustration, deliberately not represented as a real screenshot.
export default function AppPreview({ app }) {
  return (
    <div className={s.preview} aria-label={`Illustrative Vorschau: ${app.name}`}>
      <div className={s.previewTop}>
        <span className={s.windowDots}>
          <i />
          <i />
          <i />
        </span>
        <span>{app.name}</span>
        <span className={s.illustration}>Illustration</span>
      </div>
      <div className={s.previewBody}>
        <div className={s.previewSidebar}>
          <Icon name="calculator" size={25} />
          <span className={s.sidebarActive}>
            <Icon name="grid" size={16} />
          </span>
          <Icon name="history" size={16} />
          <Icon name="file" size={16} />
        </div>
        <div className={s.previewContent}>
          <div className={s.previewTitle}>Alles bereit für die Abrechnung.</div>
          <div className={s.previewLine} />
          <div className={s.previewFields}>
            <div>
              <span>Mietkaution</span>
              <b>2.400,00 €</b>
            </div>
            <div>
              <span>Zeitraum</span>
              <b>01.01.2024 – 31.12.2024</b>
            </div>
          </div>
          <div className={s.previewResult}>
            <span className={s.resultIcon}>
              <Icon name="check" size={19} />
            </span>
            <div>
              <span>Abrechnung erstellt</span>
              <strong>Ein Vorgang. Alles im Blick.</strong>
            </div>
            <Icon name="file" size={23} />
          </div>
          <div className={s.previewActions}>
            <span>
              PDF speichern <Icon name="download" size={14} />
            </span>
            <span>Drucken</span>
          </div>
        </div>
      </div>
    </div>
  );
}
