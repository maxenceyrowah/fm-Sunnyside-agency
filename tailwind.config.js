/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // banner image
        "agency-desktop": "url('/src/assets/images/desktop/image-header.jpg')",
        "agency-mobile": "url('/src/assets/images/mobile/image-header.jpg')",

        // graphic image
        "graphic-desktop":
          "url('/src/assets/images/desktop/image-graphic-design.jpg')",
        "graphic-mobile":
          "url('/src/assets/images/mobile/image-graphic-design.jpg')",

        // photography image
        "photography-desktop":
          "url('/src/assets/images/desktop/image-photography.jpg')",
        "photography-mobile":
          "url('/src/assets/images/mobile/image-photography.jpg')",
      },
      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        barlow: ["Barlow", "serif"],
      },
      colors: {
        // primary
        "soft-red": "hsl(7, 99%, 70%)",
        "primary-yellow": "hsl(51, 100%, 49%)",
        "dark-desaturated": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate": "hsl(168, 34%, 41%)",

        // Neutral
        "desaturated-blue": "hsl(212, 27%, 19%)",
        "dark-grayish": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
