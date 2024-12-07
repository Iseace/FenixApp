// Constants for Stack Routes
const STACK_ROUTES = {
  LOGIN: "Login",
  REGISTER: "Register",
  FORGOT_PASSWORD: "ForgotPass",
  HOME: "Home"
};

// Constants for Drawer Routes
const DRAWER_ROUTES = {
  HOME: "Inicio",
  MEDIA: "Media",
  SHOP: "Tienda",
  MEMBERSHIP: "Membresia",
  ABOUT_ME: "Sobre mi",
  MEDITATIONS: "Meditaciones",
  HYPNOSIS: "Hipnosis",
  HEALING: "Sanación Fénix",
  HEALING_KIDS: "Sanación Fénix Niños",
  URGENT: "Consulta Urgente"
};

// Export configurations
export const ROUTES = {
  STACK: STACK_ROUTES,
  DRAWER: DRAWER_ROUTES,
};

export const DRAWER_CONFIG = {
  screenOptions: {
    headerTitle(props) {
      false
    }
  }
};
