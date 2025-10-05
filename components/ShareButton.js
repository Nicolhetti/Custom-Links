import { useState } from "react";
import Image from "next/image";

export default function ShareButton({ profile }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}${profile.username ? `/${profile.username}` : ""}`;
    const text = `Mira el perfil de ${profile.name}!`;

    // Intentar usar la API nativa de compartir
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.name} - Links`,
          text: text,
          url: url,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error al compartir:", err);
        }
      }
    } else {
      // Fallback: copiar al portapapeles
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Error al copiar:", err);
      }
    }
  };

  return (
    <div className="share-button-container">
      <button
        onClick={handleShare}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="share-button"
        aria-label="Compartir perfil"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>

      {showTooltip && (
        <div className="share-tooltip" role="tooltip">
          {copied ? "¡Copiado!" : "Compartir perfil"}
        </div>
      )}

      <style jsx>{`
        .share-button-container {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 100;
        }

        .share-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .share-button:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.1) rotate(15deg);
        }

        .share-button:active {
          transform: scale(0.95);
        }

        .share-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 10px;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          border-radius: 6px;
          font-size: 12px;
          white-space: nowrap;
          pointer-events: none;
          animation: fadeIn 0.2s ease-out;
        }

        .share-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: rgba(0, 0, 0, 0.9);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @media (max-width: 768px) {
          .share-button-container {
            bottom: 15px;
            left: 15px;
          }

          .share-button {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </div>
  );
}
