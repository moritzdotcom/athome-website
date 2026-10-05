import { useState } from "react";
import Icon from "./Icon";
import s from "./AppStore.module.css";

export default function AppIcon({ app, small = false }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`${s.appIcon} ${small ? s.smallIcon : ""}`}>
      {app.icon && !failed ? (
        <img src={app.icon} alt="" width="96" height="96" onError={() => setFailed(true)} />
      ) : (
        <Icon name="calculator" size={small ? 27 : 43} />
      )}
    </div>
  );
}
