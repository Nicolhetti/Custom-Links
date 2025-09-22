import Image from "next/image";

export default function ProfileHeader() {
  return (
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
  );
}
