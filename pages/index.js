// pages/index.js
import { useEffect } from "react";
import HeadMeta from "../components/HeadMeta";
import VideoBackground from "../components/VideoBackground";
import ProfileHeader from "../components/ProfileHeader";
import LinkList from "../components/LinkList";

export default function Home() {
  useEffect(() => {
    const hoverSound = new Audio("/sounds/hover.mp3");
    const clickSound = new Audio("/sounds/click.mp3");

    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });

      button.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
      });
    });

    const handleClick = (event) => {
      const video = document.getElementById("bgVideo");
      const audioMessage = document.getElementById("audioMessage");

      if (!video || !audioMessage) return;

      if (event.target.tagName.toLowerCase() === "a") return;

      if (video.muted) {
        video.muted = false;
        audioMessage.classList.add("hidden");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("click", () => {});
      });
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <HeadMeta />
      <VideoBackground />

      <div className="container u-pull-left">
        <div style={{ marginTop: "8%" }}>
          <div id="audioMessage" className="audio-message">
            🔊 Click to Unmute
          </div>

          <ProfileHeader />
          <p>Growing amateur developer and 🏴‍☠️ 🤫</p>
          <LinkList />
          <br />
        </div>
      </div>
    </>
  );
}
