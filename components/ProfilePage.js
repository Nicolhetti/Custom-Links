/* eslint-disable @next/next/no-css-tags */
import { useEffect, useRef, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import { trackLinkClick } from "@/components/Analytics";

export default function ProfilePage({ profile }) {
  const soundsRef = useRef({ hover: null, click: null });
  const videoRef = useRef(null);
  const audioMessageRef = useRef(null);

  // Precargar sonidos una sola vez
  useEffect(() => {
    if (!profile?.sounds) return;

    if (profile.sounds.hover && !soundsRef.current.hover) {
      soundsRef.current.hover = new Audio(profile.sounds.hover);
      soundsRef.current.hover.preload = "auto";
    }
    if (profile.sounds.click && !soundsRef.current.click) {
      soundsRef.current.click = new Audio(profile.sounds.click);
      soundsRef.current.click.preload = "auto";
    }

    return () => {
      // Limpiar recursos de audio al desmontar
      if (soundsRef.current.hover) soundsRef.current.hover = null;
      if (soundsRef.current.click) soundsRef.current.click = null;
    };
  }, [profile?.sounds]);

  // Handlers memoizados
  const playSound = useCallback((soundType) => {
    const sound = soundsRef.current[soundType];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {
        // Silenciar errores de autoplay
      });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    playSound("hover");
  }, [playSound]);

  const handleClick = useCallback(() => {
    playSound("click");
  }, [playSound]);

  const handleVideoUnmute = useCallback((event) => {
    // No activar si se hace click en un link
    if (event.target.closest("a")) return;

    const video = videoRef.current;
    const audioMessage = audioMessageRef.current;

    if (video && audioMessage && video.muted) {
      video.muted = false;
      audioMessage.classList.add("hidden");

      // Mejorar accesibilidad
      video.setAttribute("aria-label", "Video de fondo con audio activo");
    }
  }, []);

  // Event listeners para botones
  useEffect(() => {
    if (!profile) return;

    const buttons = document.querySelectorAll(".link-button");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("click", handleClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("click", handleClick);
      });
    };
  }, [profile, handleMouseEnter, handleClick]);

  // Event listener para video
  useEffect(() => {
    if (!profile?.backgroundVideo) return;

    document.addEventListener("click", handleVideoUnmute);

    return () => {
      document.removeEventListener("click", handleVideoUnmute);
    };
  }, [profile?.backgroundVideo, handleVideoUnmute]);

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

        {/* Open Graph / Social Media */}
        <meta property="og:title" content={`${profile.name} - Links`} />
        <meta property="og:description" content={profile.description} />
        <meta property="og:image" content={profile.avatar} />
        <meta property="og:type" content="profile" />

        {/* CSS base común */}
        <link rel="stylesheet" href="/css/base.css" />

        {/* CSS específico del perfil */}
        {profile.cssFile && <link rel="stylesheet" href={profile.cssFile} />}
      </Head>

      {/* Background */}
      <div className="background-container">
        {profile.backgroundVideo ? (
          <>
            <video
              ref={videoRef}
              id="bgVideo"
              autoPlay
              loop
              muted
              playsInline
              className="background-media"
              aria-label="Video de fondo decorativo (silenciado)"
            >
              <source src={profile.backgroundVideo} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <div
              ref={audioMessageRef}
              id="audioMessage"
              className="audio-message"
              role="status"
              aria-live="polite"
            >
              🔊 Click para activar audio
            </div>
          </>
        ) : profile.backgroundImage ? (
          <div
            className="background-media background-image"
            style={{
              backgroundImage: `url(${profile.backgroundImage})`,
            }}
            role="img"
            aria-label={`Imagen de fondo del perfil de ${profile.name}`}
          />
        ) : (
          <div
            className="background-media background-fallback"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Container */}
      <div className="container">
        <div className="content-wrapper">
          {/* Profile Header */}
          <header className="profile-header">
            <Image
              src={profile.avatar}
              className="avatar"
              width={64}
              height={64}
              alt={`Avatar de ${profile.name}`}
              unoptimized
              priority
            />
            <h1 className="profile-name" data-text={profile.name}>
              {profile.name}
            </h1>
          </header>

          <p className="profile-description">{profile.description}</p>

          {/* Links */}
          <nav
            className="links-container"
            aria-label="Enlaces de redes sociales"
          >
            {profile.links.map((link, index) => (
              <a
                onClick={() => trackLinkClick(link.label, profile.name)}
                key={`${link.url}-${index}`}
                className="link-button button button-default"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} - Se abre en una nueva pestaña`}
              >
                <Image
                  className="link-icon icon"
                  aria-hidden="true"
                  src={link.icon}
                  alt=""
                  width={20}
                  height={20}
                />
                {link.label}
              </a>
            ))}
          </nav>
          <br />
        </div>
      </div>
    </>
  );
}
