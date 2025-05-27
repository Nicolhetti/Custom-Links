import Head from "next/head";
import Image from "next/image";
import "@/styles/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolhetti - Links</title>
        <meta
          name="description"
          content="All my Links on https://nicolhetti.github.io/"
        />
        <meta name="author" content="Nicolhetti" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <div className="video-background">
        <video id="bgVideo" autoPlay loop muted>
          <source src="/videos/bg00Nicolhetti.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container u-pull-left">
        <div style={{ marginTop: "8%" }}>
          <div id="audioMessage" className="audio-message">
            🔊 Click to Unmute
          </div>
          <div className="profile-header">
            <Image
              src="https://cdn.discordapp.com/avatars/388115586112159756/a_ebe579d77fd617d7b7157edf8673dab3.gif?size=128"
              className="avatar"
              width={64}
              height={64}
              alt="Avatar de Discord"
              unoptimized
            />
            <h1 role="heading">Nicolhetti</h1>
          </div>
          <p>Growing amateur developer and 🏴‍☠️ 🤫</p>

          <div className="link-container">
            {/** Links */}
            {links.map((link, index) => (
              <a
                key={index}
                className="button button-default"
                href={link.url}
                target="_blank"
                rel="noopener"
              >
                <Image
                  className="icon"
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

      <script src="/scripts/sounds.js" defer></script>
    </>
  );
}

const links = [
  {
    url: "https://www.nicolhetti-projects.com.ar/",
    icon: "/images/icons/generic-website.svg",
    alt: "Website Icon",
    label: "Website",
  },
  {
    url: "https://lofi.nicolhetti-projects.com.ar/",
    icon: "/images/icons/generic-website.svg",
    alt: "Website Icon",
    label: "Radio LoFi",
  },
  {
    url: "https://ni-tti.github.io/",
    icon: "/images/icons/generic-website.svg",
    alt: "Website Icon",
    label: "M3U8 Player",
  },
  {
    url: "https://ird.nicolhetti-projects.com.ar/",
    icon: "/images/icons/generic-website.svg",
    alt: "Website Icon",
    label: "Ig Reels Downloader",
  },
  {
    url: "https://discord.gg/PtxqHxKKE6",
    icon: "/images/icons/discord.svg",
    alt: "Discord Logo",
    label: "Discord",
  },
  {
    url: "https://facebook.com/nicolhetti.projects/",
    icon: "/images/icons/facebook.svg",
    alt: "Facebook Logo",
    label: "Facebook",
  },
  {
    url: "https://github.com/nicolhetti",
    icon: "/images/icons/github.svg",
    alt: "GitHub Logo",
    label: "GitHub",
  },
  {
    url: "https://www.instagram.com/nico.nctt",
    icon: "/images/icons/instagram.svg",
    alt: "Instagram Logo",
    label: "Instagram",
  },
  {
    url: "https://kick.com/nicolhetti",
    icon: "/images/icons/kick-alt.svg",
    alt: "Kick Logo",
    label: "Kick",
  },
  {
    url: "https://ko-fi.com/nicolhetti",
    icon: "/images/icons/ko-fi.svg",
    alt: "Ko-fi Logo",
    label: "Ko-fi",
  },
  {
    url: "https://www.last.fm/user/NicoNochetti",
    icon: "/images/icons/last-fm.svg",
    alt: "Last.fm Logo",
    label: "Last.fm",
  },
  {
    url: "https://onlyfans.wtf/nicolhetti",
    icon: "/images/icons/onlyfans.svg",
    alt: "OnlyFans Logo",
    label: "OnlyFans (18+)",
  },
  {
    url: "https://www.patreon.com/NicolhettiGames",
    icon: "/images/icons/patreon.svg",
    alt: "Patreon Logo",
    label: "Patreon",
  },
  {
    url: "https://www.paypal.com/donate/?hosted_button_id=7JPMDX2CFSEGE",
    icon: "/images/icons/paypal.svg",
    alt: "PayPal Logo",
    label: "PayPal",
  },
  {
    url: "https://steamcommunity.com/id/TWD_Forever/",
    icon: "/images/icons/steam.svg",
    alt: "Steam Logo",
    label: "Steam",
  },
  {
    url: "https://t.me/@Nicolhetti",
    icon: "/images/icons/telegram.svg",
    alt: "Telegram Logo",
    label: "Telegram",
  },
  {
    url: "https://twitch.tv/nicolhetti",
    icon: "/images/icons/twitch.svg",
    alt: "Twitch Logo",
    label: "Twitch",
  },
  {
    url: "https://x.com/nicolhetti",
    icon: "/images/icons/x.svg",
    alt: "X Logo",
    label: "X",
  },
  {
    url: "https://www.youtube.com/@Nicolhetti",
    icon: "/images/icons/youtube.svg",
    alt: "YouTube Logo",
    label: "YouTube",
  },
  {
    url: "mailto:nicolhetti_boss@nicolhetti-projects.com.ar",
    icon: "/images/icons/generic-email-alt.svg",
    alt: "Email Icon",
    label: "Email",
  },
];
