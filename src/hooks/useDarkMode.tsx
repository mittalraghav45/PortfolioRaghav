import { useEffect, useState } from "react";

const STORAGE_KEY = "prefers-dark";

export default function useDarkMode(defaultValue = false) {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dark));
    } catch {}
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return { dark, setDark };
}
