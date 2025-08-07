// Smooth scroll to section
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Generate random floating animation delay
export const getRandomDelay = (index) => {
  return index * 0.1 + Math.random() * 0.5;
};

// Format technology name for consistent display
export const formatTechName = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
};

// Create staggered animation delays
export const createStaggerDelay = (index, baseDelay = 0.1) => {
  return baseDelay * index;
};

// Generate floating animation props
export const getFloatingAnimationProps = (index) => ({
  animate: {
    y: [0, -20, 0],
    rotate: [0, 180, 360],
    scale: [1, 1.1, 1]
  },
  transition: {
    duration: 6 + index * 1.5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 1
  }
});

// Create hover animation props
export const getHoverAnimationProps = () => ({
  whileHover: { 
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  },
  whileTap: { scale: 0.98 }
});