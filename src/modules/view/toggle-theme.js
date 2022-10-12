import { setTheme } from "../controller/set-theme.js";
import { showTheme } from "./show-theme.js";

export function toggleTheme() {
	setTheme();
	showTheme();
}