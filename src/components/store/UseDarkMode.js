import { useRecoilState } from "recoil";
import atomTheme from "./Theme";

const useDarkMode = () => {
    const [theme, setTheme] = useRecoilState(atomTheme);

    const saveTheme = (chosenTheme) => {
        setTheme(chosenTheme);
        localStorage.setItem("DPL_PREF", chosenTheme);
    }

    const toggleTheme = () => {
        saveTheme(theme === "light" ? "dark" : "light");
    }

    return [theme, toggleTheme];
};

export default useDarkMode;