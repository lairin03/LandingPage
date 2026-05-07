export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050816',
        glass: 'rgba(255,255,255,0.08)',
        neon: '#6ee7ff',
        accent: '#7c3aed',
      },
      boxShadow: {
        soft: '0 32px 120px rgba(15, 23, 42, 0.35)',
        glow: '0 0 100px rgba(126, 34, 206, 0.22)',
      },
      backgroundImage: {
        'halo': 'radial-gradient(circle at top, rgba(96, 165, 250, 0.18), transparent 28%), radial-gradient(circle at 80% 30%, rgba(168, 85, 247, 0.16), transparent 20%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
