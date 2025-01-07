import { type PlayerType } from "../types";
import { colorNames } from "../constants";
import Dice from "./Dice";
import Resources from "./Resources";
interface ControlsProps {
  players: PlayerType[];
}
export default function Controls({ players }: ControlsProps) {
  // const [activePlayer, setActivePlayer] = useState<PlayerType | null>(null);

  const currentPlayer = "0x103A4920ACCea20dc5E4D55F5352C18337d344fC";

  return (
    <div id="controls-container">
      <Dice />
      <div id="controls">
        <section className="controls-section">
          <div className="controls-header">
            <i className="fa-duotone fa-solid fa-users fa-fw"></i>
            Players
          </div>

          <div id="player-list">
            {players.map((player) => (
              <div
                className={`player ${
                  currentPlayer === player.ethAddress ? "active" : ""
                } ${colorNames[player.color]}`}
              >
                {player.name}
              </div>
            ))}
          </div>
        </section>

        <section className="controls-section">
          <div className="controls-header">
            <i className="fa-duotone fa-solid fa-gamepad-modern fa-fw"></i>
            Actions
          </div>

          <div className="controls-actions-container">
            <button className="controls-action roll">
              <i className="fa-duotone fa-solid fa-dice fa-fw"></i>
              Roll
            </button>

            <div className="controls-actions">
              <button className="controls-action">
                <i className="fa-duotone fa-solid fa-road fa-fw"></i>
                Road
              </button>
              <button className="controls-action">
                <i className="fa-duotone fa-solid fa-house fa-fw"></i>
                Settlement
              </button>
              <button className="controls-action">
                <i className="fa-duotone fa-solid fa-city fa-fw"></i>City
              </button>
              <button className="controls-action">
                <i className="fa-duotone fa-solid fa-building-columns fa-fw"></i>
                Trade
              </button>
            </div>

            <button className="controls-action end-turn">
              <i className="fa-duotone fa-solid fa-dice fa-fw"></i>
              Finish Turn
            </button>
          </div>
        </section>
      </div>

      <Resources />
    </div>
  );
}
