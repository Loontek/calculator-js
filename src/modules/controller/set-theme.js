import store from "../model/store.js";

export function setTheme(theme) {
	store.activeTheme = +theme;
}