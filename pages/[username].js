import { useRouter } from "next/router";
import profiles from "../data/profiles";
import ProfilePage from "../components/ProfilePage";

export default function UserProfile({ profile, username }) {
  const router = useRouter();

  // Fallback durante la generación estática
  if (router.isFallback) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Cargando perfil...</div>
      </div>
    );
  }

  // Si no hay perfil, Next.js manejará el 404
  if (!profile) {
    return null;
  }

  return <ProfilePage profile={{ ...profile, username }} />;
}

export async function getStaticPaths() {
  // Generar paths para todos los perfiles excepto nicolhetti (que está en index)
  const usernames = Object.keys(profiles).filter(
    (username) => username !== "nicolhetti"
  );

  const paths = usernames.map((username) => ({
    params: { username },
  }));

  return {
    paths,
    fallback: false, // Si quieres generar dinámicamente, cambia a 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { username } = params;
  const profile = profiles[username.toLowerCase()];

  // Si no existe el perfil, mostrar 404
  if (!profile) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      profile,
      username: username.toLowerCase(),
    },
    // Revalidar cada hora (opcional, para ISR)
    // revalidate: 3600,
  };
}
