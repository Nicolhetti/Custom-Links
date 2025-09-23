import profiles from "../data/profiles";
import ProfilePage from "../components/ProfilePage";

export default function Home() {
  const mainProfile = profiles.nicolhetti;

  return <ProfilePage profile={mainProfile} />;
}

export async function getStaticProps() {
  return {
    props: {
      profile: profiles.nicolhetti,
    },
  };
}
