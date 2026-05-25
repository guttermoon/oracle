/**
 * Starboard design tokens for Tailwind.
 *
 * The Sailor's Oracle site currently ships hand-written CSS (assets/style.css)
 * whose :root variables mirror these values. This config is the canonical token
 * map for any Tailwind-based work. Dark mode only.
 */
module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#1b1f3b", deep: "#04041c" },
        surface: "#2d3268",
        periwinkle: "#4d5198",
        lime: { DEFAULT: "#a4e636", deep: "#8fc91f" },
        cream: {
          DEFAULT: "#f5e6cd",
          muted: "rgba(245, 230, 205, 0.78)",
          soft: "rgba(245, 230, 205, 0.6)",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Chivo"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 18px 36px rgba(4, 4, 28, 0.55)",
      },
      fontSize: {
        hero: "clamp(42px, 9vw, 86px)",
      },
    },
  },
  plugins: [],
};
