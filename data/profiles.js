/**
 * Configuración de perfiles de usuario
 * Cada perfil puede tener su propia personalización visual y sonidos
 */

const profiles = {
  nicolhetti: {
    name: "Nicolhetti",
    description: "If buying isn't owning, piracy isn't stealing.",
    avatar:
      "https://cdn.discordapp.com/avatars/388115586112159756/a_de536317665d985050726246753b0e7c.gif?size=256",
    backgroundVideo:
      "https://huggingface.co/spaces/Nicolhetti-Projects/Nicolhetti-Archives/resolve/main/Archive/bg00Nicolhetti.mp4",
    backgroundImage: null,
    cssFile: "/css/profiles/nicolhetti.css",
    sounds: {
      hover: "/sounds/nicolhetti_hover.mp3",
      click: "/sounds/nicolhetti_click.mp3",
    },
    theme: "the-last-of-us",
    links: [
      {
        url: "https://www.nicolhetti.com.ar/",
        icon: "/images/icons/generic-website.svg",
        alt: "Website Icon",
        label: "NicolhettiGames",
        ariaLabel: "Visitar NicolhettiGames",
      },
      {
        url: "https://github.com/Nicolhetti/DSQProcess",
        icon: "/images/icons/generic-website.svg",
        alt: "Website Icon",
        label: "DSQProcess",
      },
      {
        url: "https://lofi.nicolhetti.com.ar/",
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
        url: "https://ctc.nicolhetti.com.ar/",
        icon: "/images/icons/generic-website.svg",
        alt: "Website Icon",
        label: "Discord Emojis",
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
        icon: "/images/icons/kick.svg",
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
        url: "mailto:contacto@nicolhetti.com.ar",
        icon: "/images/icons/generic-email-alt.svg",
        alt: "Email Icon",
        label: "Email",
      },
    ],
  },

  abmerse: {
    name: "Abmerse",
    description: "Amateur developer",
    avatar: "https://avatars.githubusercontent.com/u/232257409?v=4",
    backgroundVideo:
      "https://huggingface.co/spaces/Nicolhetti-Projects/Nicolhetti-Archives/resolve/main/Archive/bg00Abmerse.mp4",
    backgroundImage: null,
    cssFile: "/css/profiles/abmerse.css",
    sounds: {
      hover: "/sounds/abmerse_hover.wav",
      click: "/sounds/abmerse_click.wav",
    },
    theme: "hotline-miami",
    links: [
      {
        url: "https://discord.gg/42ZwcQs68N",
        icon: "/images/icons/discord.svg",
        alt: "Discord Logo",
        label: "Discord",
      },
      {
        url: "https://github.com/abmerse",
        icon: "/images/icons/github.svg",
        alt: "GitHub Logo",
        label: "GitHub",
      },
      {
        url: "https://www.instagram.com/alejoferreiro_/",
        icon: "/images/icons/instagram.svg",
        alt: "Instagram Logo",
        label: "Instagram",
      },
      {
        url: "https://steamcommunity.com/profiles/76561199713802332/",
        icon: "/images/icons/steam.svg",
        alt: "Steam Logo",
        label: "Steam",
      },
      {
        url: "https://www.twitch.tv/abmerse",
        icon: "/images/icons/twitch.svg",
        alt: "Twitch Logo",
        label: "Twitch",
      },
      {
        url: "https://www.youtube.com/@abmerse",
        icon: "/images/icons/youtube.svg",
        alt: "YouTube Logo",
        label: "YouTube",
      },
    ],
  },

  pablo: {
    name: "Pablo",
    description: "Hola soy Pablo",
    avatar: "https://i.imgur.com/RM9uRG6.jpeg",
    backgroundVideo:
      "https://huggingface.co/spaces/Nicolhetti-Projects/Nicolhetti-Archives/resolve/main/Archive/bg00Pablo.mp4",
    backgroundImage: null,
    cssFile: "/css/profiles/pablo.css",
    sounds: {
      hover: "/sounds/abmerse_hover.wav",
      click: "/sounds/abmerse_click.wav",
    },
    theme: "custom",
    links: [
      {
        url: "https://steamcommunity.com/profiles/76561199815368005",
        icon: "/images/icons/steam.svg",
        alt: "Steam Logo",
        label: "Steam",
      },
      {
        url: "https://www.youtube.com/@pablito_fvb",
        icon: "/images/icons/youtube.svg",
        alt: "YouTube Logo",
        label: "YouTube",
      },
    ],
  },
};

/**
 * Validar estructura de perfil (útil para desarrollo)
 */
export function validateProfile(profile) {
  const required = ["name", "description", "avatar", "links"];
  const missing = required.filter((field) => !profile[field]);

  if (missing.length > 0) {
    console.warn(`Perfil incompleto. Faltan campos: ${missing.join(", ")}`);
    return false;
  }

  if (!Array.isArray(profile.links) || profile.links.length === 0) {
    console.warn("El perfil debe tener al menos un enlace");
    return false;
  }

  return true;
}

/**
 * Obtener lista de usernames disponibles
 */
export function getAvailableUsernames() {
  return Object.keys(profiles);
}

/**
 * Obtener perfil por username (case-insensitive)
 */
export function getProfile(username) {
  if (!username) return null;
  return profiles[username.toLowerCase()] || null;
}

export default profiles;
