// Color gradients for consistent theming
export const GRADIENTS = {
  primary: "from-purple-600 to-pink-600",
  secondary: "from-blue-500 to-cyan-500",
  accent: "from-green-500 to-emerald-500",
  warning: "from-yellow-400 to-orange-500",
  danger: "from-red-400 to-pink-500",
  info: "from-indigo-500 to-purple-500",
  
  // Background gradients
  bgPrimary: "from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900",
  bgSecondary: "from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-indigo-900/20",
  bgAccent: "from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20",
};

// Technology colors for skill badges
export const TECH_COLORS = {
  java: "from-orange-400 to-red-500",
  javascript: "from-yellow-400 to-yellow-600",
  html: "from-orange-500 to-red-600",
  css: "from-blue-400 to-blue-600",
  springboot: "from-green-400 to-green-600",
  angular: "from-red-400 to-red-600",
  react: "from-blue-400 to-cyan-500",
  nodejs: "from-green-500 to-green-700",
  mysql: "from-orange-400 to-orange-600",
  bootstrap: "from-purple-400 to-purple-600",
};

// Animation variants for framer motion
export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  },
  
  item: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  },
  
  card: {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }
};

// Social links
export const SOCIAL_LINKS = {
  email: "mailto:narasimhas9490@gmail.com",
  phone: "tel:+918006130403",
  github: "https://github.com/narasimha-png",
  linkedin: "https://linkedin.com/in/slnarasimha"
};

// Contact information
export const CONTACT_INFO = {
  email: "narasimhas9490@gmail.com",
  phone: "+91-80061-30403",
  location: "Madanapalle, 517370"
};