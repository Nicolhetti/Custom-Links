/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function ProfilePage({ profile }) {
  useEffect(() => {
    if (!profile) return;

    let hoverSound, clickSound;
    if (profile.sounds?.hover) {
      hoverSound = new Audio(profile.sounds.hover);
    }
    if (profile.sounds?.click) {
      clickSound = new Audio(profile.sounds.click);
    }

    const buttons = document.querySelectorAll(".link-button");

    const handleMouseEnter = () => {
      if (hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => { });
      }
    };

    const handleClick = () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => { });
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("click", handleClick);
    });

    const handleVideoUnmute = (event) => {
      const video = document.getElementById("bgVideo");
      const audioMessage = document.getElementById("audioMessage");

      if (!video || !audioMessage) return;
      if (event.target.tagName.toLowerCase() === "a") return;

      if (video.muted) {
        video.muted = false;
        audioMessage.classList.add("hidden");
      }
    };

    document.addEventListener("click", handleVideoUnmute);

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("click", handleClick);
      });
      document.removeEventListener("click", handleVideoUnmute);
    };
  }, [profile]);

  if (!profile) return null;

  return (
    <>
      <Head>
        <title>{profile.name} - Links</title>
        <meta
          name="description"
          content={`Enlaces de ${profile.name} - ${profile.description}`}
        />
        <meta name="author" content={profile.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />

        {/* CSS base común */}
        <link rel="stylesheet" href="/css/base.css" />

        {/* CSS específico del perfil */}
        {profile.cssFile && <link rel="stylesheet" href={profile.cssFile} />}
      </Head>

      {/* Background */}
      <div className="background-container">
        {profile.backgroundVideo ? (
          <video id="bgVideo" autoPlay loop muted className="background-media">
            <source src={profile.backgroundVideo} type="video/mp4" />
          </video>
        ) : profile.backgroundImage ? (
          <div
            className="background-media background-image"
            style={{
              backgroundImage: `url(${profile.backgroundImage})`,
            }}
          />
        ) : (
          <div className="background-media background-fallback" />
        )}
        {profile.backgroundVideo && (
          <div id="audioMessage" className="audio-message">
            🔊 Click to Unmute
          </div>
        )}

      </div>

      {/* Container */}
      <div
        className={
          profile.username === "nicolhetti"
            ? "container u-pull-left"
            : "container"
        }
      >
        <div className="content-wrapper">
          {/* Profile Header */}
          <div className="profile-header">
            <Image
              src={profile.avatar}
              className="avatar"
              width={64}
              height={64}
              alt={`Avatar de ${profile.name}`}
              unoptimized
            />
            <h1 role="heading" className="profile-name">
              {profile.name}
            </h1>
          </div>

          <p className="profile-description">{profile.description}</p>

          {/* Links */}
          <div className="links-container">
            {profile.links.map((link, index) => (
              <a
                key={index}
                className="link-button button button-default"
                href={link.url}
                target="_blank"
                rel="noopener"
              >
                <Image
                  className="link-icon icon"
                  aria-hidden="true"
                  src={link.icon}
                  alt={link.alt}
                  width={20}
                  height={20}
                />
                {link.label}
              </a>
            ))}
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
