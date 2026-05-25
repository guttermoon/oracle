/**
 * Starboard design tokens for Tailwind ("Warm Minimalist").
 * Mirrors the design-extractor export; see STYLE_GUIDE.md.
 *
 * The canonical palette is the light/cream theme; the Sailor's Oracle renders
 * dark (navy background / cream text) from the same token values. The
 * hand-written CSS in assets/style.css (:root) mirrors these.
 */
module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        background: "#f5e6cd",
        surface: "#e5e7eb",
        accent: { DEFAULT: "#a4e636", light: "#faf9d4" },
        text: { primary: "#1b1f3b", secondary: "#2d3268", muted: "#4d5198" },
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Chivo"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "heading-lg": ["48px", { lineHeight: "48px", fontWeight: "400" }],
        "heading-md": ["18px", { lineHeight: "28.8px", fontWeight: "600", letterSpacing: "0.18px" }],
        "heading-sm": ["20px", { lineHeight: "28px", fontWeight: "400" }],
        "body-base": ["16px", { lineHeight: "25.6px", fontWeight: "400" }],
        "body-bold": ["16px", { lineHeight: "24px", fontWeight: "700", letterSpacing: "0.4px" }],
        "body-sm": ["14px", { lineHeight: "20px" }],
        "label-sm": ["9px", { lineHeight: "14.4px", fontWeight: "700", letterSpacing: "0.9px" }],
      },
      spacing: {
        xs: "2px", sm: "4px", md: "8px", lg: "12px", xl: "16px",
        "2xl": "24px", "3xl": "32px", "4xl": "48px", "5xl": "64px",
        "6xl": "80px", "7xl": "96px", "8xl": "128px",
      },
      borderRadius: {
        sm: "4px", md: "8px", lg: "12px", xl: "16px", full: "9999px",
      },
      boxShadow: {
        sm: "rgba(0, 0, 0, 0.4) 0 2px 8px -2px, rgba(0, 0, 0, 0.3) 0 1px 2px -1px",
        lg: "rgba(0, 0, 0, 0.5) 0 25px 50px -12px",
      },
    },
  },
  plugins: [],
};
