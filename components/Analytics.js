import Script from "next/script";

export default function Analytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // No cargar en desarrollo
  if (process.env.NODE_ENV !== "production" || !GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Hook personalizado para trackear eventos
 *
 * Uso:
 * import { useAnalytics } from '@/components/Analytics'
 *
 * const { trackEvent } = useAnalytics();
 * trackEvent('link_click', { link_name: 'GitHub' });
 */
export function useAnalytics() {
  const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
  };

  const trackPageView = (url) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  };

  return { trackEvent, trackPageView };
}

/**
 * Alternativa: Plausible Analytics (más privado y ligero)
 *
 * 1. Crear cuenta en plausible.io
 * 2. Agregar dominio
 * 3. Usar este componente en lugar de Google Analytics:
 */
export function PlausibleAnalytics() {
  const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  if (process.env.NODE_ENV !== "production" || !PLAUSIBLE_DOMAIN) {
    return null;
  }

  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}

/**
 * Hook para Plausible
 */
export function usePlausible() {
  const trackEvent = (eventName, props = {}) => {
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible(eventName, { props });
    }
  };

  return { trackEvent };
}

/**
 * Alternativa: Umami Analytics (auto-hospedado)
 *
 * 1. Instalar Umami en servidor
 * 2. Obtener el ID del sitio
 * 3. Usar este componente:
 */
export function UmamiAnalytics() {
  const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const UMAMI_SRC =
    process.env.NEXT_PUBLIC_UMAMI_SRC || "https://analytics.umami.is/script.js";

  if (process.env.NODE_ENV !== "production" || !UMAMI_WEBSITE_ID) {
    return null;
  }

  return (
    <Script
      async
      defer
      data-website-id={UMAMI_WEBSITE_ID}
      src={UMAMI_SRC}
      strategy="afterInteractive"
    />
  );
}

/**
 * Componente todo-en-uno que selecciona el servicio según variables de entorno
 */
export function UniversalAnalytics() {
  // Prioridad: Umami > Plausible > Google Analytics
  if (process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID) {
    return <UmamiAnalytics />;
  }

  if (process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) {
    return <PlausibleAnalytics />;
  }

  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return <Analytics />;
  }

  return null;
}

/**
 * Middleware para trackear clicks en links automáticamente
 */
export function trackLinkClick(linkLabel, profileName) {
  // Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "link_click", {
      event_category: "engagement",
      event_label: linkLabel,
      profile: profileName,
    });
  }

  // Plausible
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible("Link Click", {
      props: {
        link: linkLabel,
        profile: profileName,
      },
    });
  }

  // Umami
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track("link-click", {
      link: linkLabel,
      profile: profileName,
    });
  }
}

/**
 * Ejemplo de uso en ProfilePage.js:
 *
 * import { trackLinkClick } from '@/components/Analytics';
 *
 * <a
 *   onClick={() => trackLinkClick(link.label, profile.name)}
 *   href={link.url}
 * >
 *   {link.label}
 * </a>
 */
