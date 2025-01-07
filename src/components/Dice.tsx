const dicons = [
  <></>,
  <i className="fa-duotone fa-solid fa-dice-one fa-fw"></i>,
  <i className="fa-duotone fa-solid fa-dice-two fa-fw"></i>,
  <i className="fa-duotone fa-solid fa-dice-three fa-fw"></i>,
  <i className="fa-duotone fa-solid fa-dice-four fa-fw"></i>,
  <i className="fa-duotone fa-solid fa-dice-five fa-fw"></i>,
  <i className="fa-duotone fa-solid fa-dice-six fa-fw"></i>,
];

function getRandomNumbers(): number[] {
  return [
    Math.floor(Math.random() * 360),
    Math.floor(Math.random() * 360),
    Math.floor(Math.random() * 360),
    Math.floor(Math.random() * 360),
    Math.floor(Math.random() * 360),
    Math.floor(Math.random() * 360),
    Math.floor(Math.random() * 360),
  ];
}

export default function Dice() {
  const numbers = getRandomNumbers();

  const roll = [8, 3, 5];

  return (
    <div id="dice" style={{ transform: `rotate(${numbers[0]}deg)` }}>
      <div className="die" style={{ transform: `rotate(${numbers[1]}deg)` }}>
        {dicons[roll[1]]}
      </div>
      <div className="die" style={{ transform: `rotate(${numbers[2]}deg)` }}>
        {dicons[roll[2]]}
      </div>
    </div>
  );
}
