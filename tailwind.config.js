const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: ["./src/**/*.html"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Proxima-soft"', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        112: "28rem",
        128: "32rem",
        148: "37rem",
        168: "42rem",
        192: "48rem",
        216: "54rem",
        244: "61rem",
      },
      lineHeight: {
        12: "3rem",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    inset: {
      px: "1px",
      auto: "auto",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
      //
      "-px": "-1px",
      "-1": "-0.25rem",
      "-2": "-0.5rem",
      "-3": "-0.75rem",
      "-4": "-1rem",
      "-5": "-1.25rem",
      "-6": "-1.5rem",
      "-8": "-2rem",
      "-10": "-2.5rem",
      "-12": "-3rem",
      "-16": "-4rem",
      "-20": "-5rem",
      "-24": "-6rem",
      "-32": "-8rem",
      "-40": "-10rem",
      "-48": "-12rem",
      "-56": "-14rem",
      "-64": "-16rem",
      //
      "25per": "25%",
      "50per": "50%",
      "75per": "75%",
    },
  },
  plugins: [
    require("@tailwindcss/ui"),
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }) {
      addVariant("important", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
  variants: {
    textColor: ["responsive", "hover", "focus", "important"],
    textDecoration: ["responsive", "hover", "focus", "important"],
  },
};
