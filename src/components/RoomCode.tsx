import copyImg from '../assets/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
};

export const RoomCode = (props: RoomCodeProps) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
};