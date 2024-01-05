import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2563eb",
                  
          "secondary": "#5eead4",
                  
          "accent": "#059669",
                  
          "neutral": "#d1d5db",
                  
          "base-100": "#f5f5f4",
                  
          "info": "#60a5fa",
                  
          "success": "#fbbf24",
                  
          "warning": "#fb7185",
                  
          "error": "#be123c",
        },
      },
    ],
    darkMode: true
  },
  plugins: [daisyui],
  

}
export default config
