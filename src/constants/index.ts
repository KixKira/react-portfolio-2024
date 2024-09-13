import SoundAdvisors from "../assets/projects/1soundadvisors.png";
import SimultaneoEstudio from "../assets/projects/2simultaneo.png";
import Studio23 from "../assets/projects/3studio23.png";
import RandomUserGenerator from "../assets/projects/4random.png";
import LPS from "../assets/projects/5lps.png";
import ChicksX from "../assets/projects/6chicksx.png";

export const HERO_CONTENT = `Desarrollador front-end especializado en crear interfaces de usuario atractivas y funcionales para aplicaciones móviles, conectándolas con tecnologías de back-end. Con un sólido dominio de HTML, CSS, JavaScript, React y Next.js, y una rápida capacidad de aprendizaje para adaptarme a nuevas tecnologías, traduzco ideas en aplicaciones desplegadas. Mi experiencia en desarrollo web desde 2016, incluyendo la gestión de sitios de comercio electrónico, me permite colaborar eficazmente con clientes y brindar soluciones integrales.`;

export const ABOUT_TEXT = `Soy un desarrollador front-end especializado en la creación de interfaces de usuario atractivas y funcionales para aplicaciones móviles. Mi experiencia abarca la conexión fluida de estas interfaces con API y diversas tecnologías de back-end, garantizando una experiencia de usuario completa. Me motiva mantenerme a la vanguardia de la tecnología y reconozco la diversidad de enfoques para resolver problemas. Mi dominio principal reside en HTML, CSS, JavaScript, React y Next.js, pero mi capacidad de aprendizaje rápido me permite adaptarme a nuevas tecnologías según los requerimientos del proyecto. Mi trayectoria en el desarrollo web se inició en 2016, donde gestioné múltiples sitios de comercio electrónico en plataformas como WordPress y Shopify. Esta experiencia me brindó la oportunidad de colaborar directamente con clientes, traduciendo sus ideas iniciales en aplicaciones funcionales y desplegadas. Estoy convencido de que mi combinación de habilidades técnicas, adaptabilidad y orientación al cliente me convierte en un activo valioso para cualquier equipo de desarrollo.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Desarrollador Full-Stack",
    company: "Sisprot Global Fiber",
    description: `Creación y actualización de sistema interno empresarial, utilizando frameworks como React y Next.js, base de datos Supabase.`,
    technologies: ["Javascript", "React.js", "Next.js", "Supabase"],
  },
  {
    year: "2023 - 2023",
    role: "Desarrollador Front-End",
    company: "Venemergencia",
    description: `Desarrollo de un sistema de enfermería escolar, garantizando su funcionalidad y facilidad de uso. Tareas de optimización en el sistema interno de la empresa, mejorando su rendimiento y eficiencia operativa.`,
    technologies: ["Javascript", "React.js"],
  },
  {
    year: "2022 - 2023",
    role: "Ingeniero de Producto",
    company: "Chicks Gold, Inc.",
    description: `Diseño y desarrollo de componentes para la bolsa, asegurando una funcionalidad y rendimiento óptimos. Creación y mantenimiento de un blog de empresa, proporcionando contenidos relevantes y actualizados para los usuarios. Implementación de componentes en diferentes áreas del producto para mejorar la experiencia del usuario.`,
    technologies: ["Aurelia", "C#"],
  },
  {
    year: "2021 - 2022",
    role: "Soporte IT",
    company: "Banco Itaú",
    description: `Proporcionó asistencia técnica a las sucursales bancarias, garantizando el funcionamiento continuo de los sistemas. Solucionó problemas operativos en las aplicaciones utilizadas, garantizando la eficiencia operativa del banco. Dirigió la migración de los correos electrónicos corporativos, garantizando una transición fluida y sin interrupciones. Realizó la instalación de aplicaciones según el perfil del usuario, personalizando el entorno para cada empleado. Implementó y configuró la imagen corporativa en los ordenadores corporativos, manteniendo la coherencia y la identidad visual de la empresa.`,
    technologies: ["Mesa de Ayuda"],
  },
  {
    year: "2020 - 2021",
    role: "Desarrollador Web",
    company: "Control4",
    description: `Desarrolló un comercio electrónico en WordPress, proporcionando una plataforma de ventas en línea robusta y fácil de usar. Implementó plugins para ampliar la funcionalidad del sitio web para satisfacer las necesidades específicas del negocio. Mejoró el entorno visual del sitio web, asegurando una experiencia de usuario atractiva y consistente. Implementó estrategias de SEO para mejorar la visibilidad del sitio en los motores de búsqueda y aumentar el tráfico orgánico.`,
    technologies: ["WordPress"],
  },
  {
    year: "2020 - 2020",
    role: "Desarrollador Web",
    company: "Glass & Wood",
    description: `Desarrollamos un eCommerce en WordPress para la empresa, proporcionando una plataforma de ventas online eficaz. Implementamos plugins para ampliar la funcionalidad del sitio web y mejorar la experiencia del usuario. Gestionamos campañas de marketing por correo electrónico utilizando MailChimp para aumentar la participación y las ventas. Gestionamos las redes sociales de la empresa, creando contenido relevante y participando en la interacción con la comunidad para mejorar la presencia online y aumentar la visibilidad de la marca.`,
    technologies: ["WordPress", "MailChimp"],
  },
  {
    year: "2019 - 2020",
    role: "Desarrollador Web",
    company: "Eazyroof",
    description: `Realizamos mejoras significativas en la aplicación web, optimizando su rendimiento y funcionalidad. Diseñamos y desarrollamos nuevos componentes para la aplicación, mejorando la experiencia del usuario y añadiendo valor al producto.`,
    technologies: ["React.js", "Strapi"],
  },
  {
    year: "2017 - 2019",
    role: "Soporte IT",
    company: "Banco BCI",
    description: `Proporcionó asistencia técnica completa, garantizando el funcionamiento continuo de los sistemas informáticos. Resolvió eficazmente los problemas de rendimiento de las aplicaciones, minimizando el tiempo de inactividad y maximizando la productividad. Dirigió con éxito la migración de los correos electrónicos corporativos, garantizando una transición fluida y sin problemas. Instaló aplicaciones según el perfil del usuario, personalizando los entornos de trabajo para satisfacer las necesidades individuales de cada empleado.`,
    technologies: ["Mesa de Ayuda"],
  },
];

export const PROJECTS = [
  {
    title: "eCommerce",
    image: SoundAdvisors,
    description:
      "Construí esta tienda online en WordPress, con la ayuda del creador de temas Flatsome y alojada en el servidor propio de la empresa.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "SweetAlert2",
      "MailChimp",
      "MySQL",
    ],
  },
  {
    title: "Agencia Creativa",
    image: SimultaneoEstudio,
    description:
      "Hice esta página en WordPress, con la ayuda del constructor de temas Flatsome.",
    technologies: ["WordPress", "MySQL"],
  },
  {
    title: "Agencia Creativa",
    image: Studio23,
    description:
      "Landing page realizada en HTML y CSS, con funcionalidades JS, para una agencia creativa.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Generador de Usuarios Aleatorios",
    image: RandomUserGenerator,
    description:
      "Generador de usuarios aleatorios utilizando la API de datos aleatorios.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Operaciones Logísticas",
    image: LPS,
    description:
      "Creación de una página web para una empresa de centros logísticos. Realizada en WordPress con plugins para cambiar idiomas y contacto.",
    technologies: ["WordPress", "RankMath SEO", "Weglot", "MySQL"],
  },
  {
    title: "Plataforma de Intercambio",
    image: ChicksX,
    description:
      "Diseño y desarrollo de componentes para la bolsa, garantizando una funcionalidad y un rendimiento óptimos. Creación y mantenimiento de un blog de empresa, proporcionando contenidos relevantes y actualizados para los usuarios. Implementación de componentes en diferentes áreas del producto para mejorar la experiencia del usuario.",
    technologies: ["Aurelia", "reCAPTCHA", "Intercom"],
  },
];

export const CONTACT = {
  address: "Maracay, Aragua, Venezuela",
  phoneNo: "+58 424 332 0565",
  phoneWS: "584243320565",
  email: "kixkira1@gmail.com",
};

export const PLANS = [
  {
    title: "Paquete Básico",
    desc: [
      "Diseño web con plantilla personalizada y opciones de diseño básicas para crear una presencia online profesional y atractiva",
      "Hasta 5 páginas",
      "Funcionalidades esenciales",
      "2 rondas de revisiones",
      "Tiempo de entrega estimado: 2-3 semanas",
      "Soporte técnico básico por correo electrónico",
    ],
    price: 200,
    disc: 150,
  },
  {
    title: "Paquete Estándar",
    desc: [
      "Diseño web personalizado con mayor flexibilidad en la elección de elementos visuales y creación de gráficos básicos para una web única y funcional",
      "Hasta 10 páginas",
      "Funcionalidades adicionales",
      "3 rondas de revisiones",
      "Tiempo de entrega estimado: 3-4 semanas",
      "Soporte técnico intermedio por correo electrónico y chat",
    ],
    price: 500,
    disc: 400,
  },
  {
    title: "Paquete Premium",
    desc: [
      "Diseño web a medida, creado desde cero para reflejar la identidad de tu marca y ofrecer una experiencia de usuario excepcional. Incluye creación de identidad visual completa y diseño de elementos gráficos únicos",
      "Páginas ilimitadas",
      "Funcionalidades avanzadas",
      "Hosting y dominio por un año",
      "5 rondas de revisiones",
      "Tiempo de entrega estimado: 4-6 semanas",
      "Soporte técnico prioritario por correo electrónico, chat y teléfono",
      "Optimización SEO completa",
      "Campaña básica de marketing digital",
    ],
    price: 1000,
    disc: 800,
  },
];
