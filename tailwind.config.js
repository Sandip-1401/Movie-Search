export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ HTML + JS Files Allow करो!
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
