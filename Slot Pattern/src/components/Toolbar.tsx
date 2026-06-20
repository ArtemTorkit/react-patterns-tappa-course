import { useState, type ReactNode } from "react";

const Toolbar = ({
  start,
  center,
  end,
}: {
  start: ReactNode;
  center: ReactNode;
  end: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="toolbar-container">
      <button
        className="toolbar-element burger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="">{isOpen ? "✕" : "☰"}</div>
      </button>

      <div className={`toolbar-wrapper ${isOpen ? 'is-open': ''}`}>
        <div className="toolbar-element">{start}</div>
        <div className="toolbar-element">{center}</div>
        <div className="toolbar-element">{end}</div>
      </div>
    </div>
  );
};

export default Toolbar;
