const desc = ["Fundementals", "Core", "Essentials"];
function getRandomWord(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const randWord = desc[getRandomWord(3)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randWord} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}