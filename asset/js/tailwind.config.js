tailwind.config = {
    content: ['./src/**/*.{html,js}'],
    theme: {
     
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        
     
      }  
    },
    plugins: [
        // include Flowbite as a plugin in your Tailwind CSS project
        require('flowbite/plugin')
    ]
  }