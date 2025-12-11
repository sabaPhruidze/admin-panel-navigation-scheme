import { useState } from "react";
// closure
const Settings = () => {
  const createLogger = (prefix: string) => {
    return (message: string) => {
      console.log(`[LOG - ${prefix}] : ${message}`);
    };
  };
  const settingsLogger = createLogger("SETTINGS_PAGE");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = Object.is(theme, "light") ? "dark" : "light";
    setTheme(newTheme);
    settingsLogger(`theme change => ${newTheme}`);
  };
  return (
    <section
      className={`p-8 rounded-lg shadow-md min-h-96 transition-all duration-500 ${
        Object.is(theme, "dark")
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Settings ⚙️</h2>
      <div className="flex items-center justify-between">
        <span>Dark mode</span>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded font-bold transition-colors ${
            Object.is(theme, "dark")
              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300}"
              : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
        >
          {Object.is(theme, "dark") ? "Shine ☀️" : "Dark 🌙"}
        </button>
      </div>
      <p className="mt-6 text-sm opacity-70">
        * Click (F12), in order to see closure in work.
      </p>
    </section>
  );
};

export default Settings;
