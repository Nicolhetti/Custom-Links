export default function VideoBackground() {
  return (
    <div className="video-background">
      <video id="bgVideo" autoPlay loop muted>
        <source src="/videos/bg00Nicolhetti.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
