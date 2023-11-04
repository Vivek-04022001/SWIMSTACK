import {useState, useEffect} from "react";

const Themes = () => {
  const [theme, setTheme] = useState("light");
  const availabeThemes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      onChange={handleThemeChange}
    >
      <option disabled selected>
        Who shot first?
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
      {availabeThemes.map((theme) => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
};

export default Themes;
