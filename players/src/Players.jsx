import "./Player.css";

const team = [
  {
    name: "Martin Braithwaite",
    photo:
      "https://s3p.sofifa.net/5f55c5509a088da5658cfc69b31be62f7595778e.png",
    position: "ATA",
  },
  {
    name: "Franco Cristaldo",
    photo:
      "https://s3p.sofifa.net/8909750ea3bdec2d403fd56c3bfe5571e7880a52.png",
    position: "MEI",
  },
  {
    name: "Gustavo Cuellar",
    photo:
      "https://s3p.sofifa.net/14b4aaa618de1a853f4298694e7751ec30a43f7b.png",
    position: "VOL",
  },
  {
    name: "Jamerson",
    photo:
      "https://s3p.sofifa.net/f12d7b370613b35527a35a328716313dfbdbde94.png",
    position: "ZAG",
  },
  {
    name: "Tiago Volpi",
    photo:
      "https://s3p.sofifa.net/04736af5928a0443fa2ec4bf8d84e1524cfde82d.png",
    position: "GOL",
  },
];

function Players() {
  return (
    <ul className="team">
      {team.map((player, index) => (
        <li key={index} className="team__player">
          <div>
            <img
              src={player.photo}
              alt={player.name}
              className="team__player--photo"
            />
          </div>
          <div className="team__player--info">
            <p>
              <strong>Nome:</strong> {player.name}
            </p>
            <p>
              <strong>Posição:</strong> {player.position}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Players;
