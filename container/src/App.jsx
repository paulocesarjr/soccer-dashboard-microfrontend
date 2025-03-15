import { useState } from "react"
import "./App.css"
import Players from "players/Players"

function App() {
  const [player, setPlayer] = useState(null)

  const selectPlayer = (player) => {
    setPlayer(player)
  }

  return (
    <>
      <h1>⚽ Soccer Dashboard Micro-frontend</h1>
      <div className="dashboard">
        <div className="dashboard__team">
          <Players onPlayerSelected={selectPlayer} />
        </div>
        <div className="dashboard__player">
          {player && (
            <>
              <h2>{player?.name}</h2>
              <img
                className="dashboard__player--photo"
                src={player.photo}
                alt="Foto do Jogador"
              />
              <h3>{player.position}</h3>
            </>
          )}
          {!player && <h2>Selecione um dos jogadores a esquerda</h2>}
        </div>
      </div>
    </>
  )
}

export default App
