/**
 * Utilidades para el manejo de perfiles
 */

/**
 * Genera metadatos SEO para un perfil
 */
export function generateProfileMetadata(profile) {
  return {
    title: `${profile.name} - Links`,
    description: profile.description,
    openGraph: {
      title: `${profile.name} - Links`,
      description: profile.description,
      images: [
        {
          url: profile.avatar,
          width: 256,
          height: 256,
          alt: `Avatar de ${profile.name}`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: `${profile.name} - Links`,
      description: profile.description,
      images: [profile.avatar],
    },
  };
}

/**
 * Precargar assets críticos
 */
export function preloadProfileAssets(profile) {
  if (typeof window === "undefined") return;

  // Precargar avatar
  const avatarLink = document.createElement("link");
  avatarLink.rel = "preload";
  avatarLink.as = "image";
  avatarLink.href = profile.avatar;
  document.head.appendChild(avatarLink);

  // Precargar video de fondo
  if (profile.backgroundVideo) {
    const videoLink = document.createElement("link");
    videoLink.rel = "preload";
    videoLink.as = "video";
    videoLink.href = profile.backgroundVideo;
    document.head.appendChild(videoLink);
  }

  // Precargar CSS del perfil
  if (profile.cssFile) {
    const cssLink = document.createElement("link");
    cssLink.rel = "preload";
    cssLink.as = "style";
    cssLink.href = profile.cssFile;
    document.head.appendChild(cssLink);
  }

  // Precargar sonidos
  if (profile.sounds?.hover) {
    const hoverLink = document.createElement("link");
    hoverLink.rel = "preload";
    hoverLink.as = "audio";
    hoverLink.href = profile.sounds.hover;
    document.head.appendChild(hoverLink);
  }

  if (profile.sounds?.click) {
    const clickLink = document.createElement("link");
    clickLink.rel = "preload";
    clickLink.as = "audio";
    clickLink.href = profile.sounds.click;
    document.head.appendChild(clickLink);
  }
}

/**
 * Analytics: Trackear clicks en links
 */
export function trackLinkClick(linkLabel, profileName) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "link_click", {
      event_category: "engagement",
      event_label: linkLabel,
      profile: profileName,
    });
  }

  // También puedes usar otros servicios como Plausible, Umami, etc.
  console.log(`[Analytics] Click en ${linkLabel} del perfil ${profileName}`);
}

/**
 * Detectar si el dispositivo soporta hover
 */
export function supportsHover() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover)").matches;
}

/**
 * Detectar tema preferido del usuario
 */
export function getPreferredTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Compartir perfil en redes sociales
 */
export function shareProfile(profile, platform = "native") {
  const url = `${window.location.origin}/${profile.username || ""}`;
  const text = `Mira el perfil de ${profile.name}!`;

  if (platform === "native" && navigator.share) {
    navigator
      .share({
        title: `${profile.name} - Links`,
        text: text,
        url: url,
      })
      .catch((err) => console.log("Error al compartir:", err));
  } else if (platform === "twitter") {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  } else if (platform === "facebook") {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  }
}

/**
 * Copiar URL del perfil al portapapeles
 */
export async function copyProfileURL(profile) {
  const url = `${window.location.origin}/${profile.username || ""}`;

  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch (err) {
    console.error("Error al copiar:", err);
    return false;
  }
}

/**
 * Validar URL de link
 */
export function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Formatear número de visitas
 */
export function formatViews(views) {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
}

/**
 * Generar color basado en el nombre (para avatares fallback)
 */
export function generateColorFromName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = hash % 360;
  return `hsl(${hue}, 70%, 60%)`;
}

/**
 * Lazy load de imágenes con Intersection Observer
 */
export function lazyLoadImages() {
  if (typeof window === "undefined") return;

  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

/**
 * Detectar si el usuario prefiere animaciones reducidas
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Guardar perfil favorito en localStorage (opcional)
 */
export function saveFavoriteProfile(username) {
  if (typeof window === "undefined") return;

  try {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.includes(username)) {
      favorites.push(username);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  } catch (err) {
    console.error("Error guardando favorito:", err);
  }
}

/**
 * Obtener perfiles favoritos
 */
export function getFavoriteProfiles() {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  } catch {
    return [];
  }
}

/**
 * Throttle function para optimizar eventos
 */
export function throttle(func, delay) {
  let timeoutId;
  let lastExecTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime < delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastExecTime = currentTime;
        func.apply(this, args);
      }, delay);
    } else {
      lastExecTime = currentTime;
      func.apply(this, args);
    }
  };
}

/**
 * Debounce function para búsquedas
 */
export function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
