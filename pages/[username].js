import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import profiles from "../data/profiles";
import ProfilePage from "../components/ProfilePage";

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    const userProfile = profiles[username.toLowerCase()];

    if (userProfile) {
      setProfile({ ...userProfile, username: username.toLowerCase() });
    } else {
      router.push("/404");
    }

    setLoading(false);
  }, [username, router]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Cargando...</div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return <ProfilePage profile={profile} />;
}

export async function getStaticPaths() {
  const usernames = Object.keys(profiles).filter(
    (username) => username !== "nicolhetti"
  );

  const paths = usernames.map((username) => ({
    params: { username },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { username } = params;
  const profile = profiles[username];

  if (!profile) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      profile: { ...profile, username },
    },
  };
}
