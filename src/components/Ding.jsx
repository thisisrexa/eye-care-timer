import Sound from "react-sound";

export default function Ding(props) {
  if (props.endOfTime) {
    setTimeout(() => {
      props.reset();
    }, 20000);
    return (
      <>
      <Sound
        url="../public/wide-putin-walkin.mp3"
        playStatus={Sound.status.PLAYING}
        loop={true}
      />
      <h2>End</h2>
      </>
    );
  }
  return <h2>{props.timer}</h2>;
}
