function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
};
var language = {
    esp: {
        first_title: "Perfil Profesional",
        number: "Número de teléfono ",
        mail: "Correo electrónico: ",
        paragraph: "Psicólogo bilingüe con experiencia en manejo de proyectos, desarrollo de productos digitales, análisis de información cualitativa, cuantitativa, investigación de mercado, psicología del consumidor, conocimiento de Excel (avanzado), SQL (avanzado) y Python (básico). Con especial interés en las áreas de producto, marketing basado en consumer insights. Creativo, motivado, con liderazgo y capacidad de adaptación frente a situaciones difíciles a través de la planificación estratégica y la comunicación asertiva.",
        second_title: "Formación Académica",
        degrees: "Título: ",
        locations: "Lugar: ",
        durations: "Duración: ",
        first_degree: "Pregrado en Psicología",
        second_degree: "Bachiller Académico",
        third_degree: "6 meses de estudio en el grado 11",
        third_title: "Experiencia Laboral",
        duration_b: "Duración: ",
        duration_snoonu1: "2022-05-12 a presente",
        position_b: "Cargo: ",
        position_snoonu1: "Gerente de Producto Senior",
        functions: "Funciones:",
        function1_snoonu1: "Organización de los squads de tecnología para implementación de metodología SCRUM",
        function2_snoonu1: "Planeación de roadmaps para los equipos de: Supermercados, Algoritmo de asignación de repartidores, aplicación de repartidores, plataforma de seguimiento de repartidores, plataforma de restaurantes, plataforma de soporte y gestión de pedidos",
        function3_snoonu1: "Priorización y definición de historias de usuario",
        function4_snoonu1: "Manejo de equipos externos a la compañía por proyectos especiales",
        function5_snoonu1: "Desarrollo de proyectos para automatizar procesos manuales con el fin de conseguir mayor rentabilidad en el área de operaciones",
        function6_snoonu1: "Planeación de funcionalidades para mantener la trazabilidad de reembolsos y regalos por parte del equipo de soporte",
        function7_snoonu1: "Organización de responsabilidades para implementación de servicio fulfillment (3PL)",
        duration_chazki1: "2021-08-18 a 2022-05-09",
        position_chazki1: "Cabeza Regional de Producto - Fulfillment",
        function1_chazki1: "Planeación e implementación de una migración funcional de 4 sistemas para el manejo operativo para tener una arquitectura unificada y robusta",
        function2_chazki1: "Organización de equipos de desarrollo para uso de metodología Scrum",
        function3_chazki1: "Entendimiento de las necesidades del equipo de operaciones para desarrollar flujos automatizados que optimicen los tiempos y mitiguen el riesgo de error humano en la gestión de envíos",
        function4_chazki1: "Colaboración con el equipo comercial para entender la importancia, urgencia e impacto de nuevos desarrollos ad-hoc solicitados por clientes (B2B) para impulsar el crecimiento en ventas por integración",
        function5_chazki1: "Estandarización y definición estructural de las tarifas para cobro a cliente y pago a drivers junto al equipo de finanzas",
        function6_chazki1: "Creación de queries y solicitudes de desarrollo en reportería para manejar seguimiento de envíos a nivel compañía junto con el equipo regional de data"
    }
};
if (window.location.hash) {
    if (window.location.hash == "#esp") {
        phone.textContent = language.esp.number;
        email.textContent = language.esp.mail;
        title_one.textContent = language.esp.first_title;
        extraContent.textContent = language.esp.paragraph;
        title_two.textContent = language.esp.second_title;
        degree1.textContent = language.esp.degrees;
        place1.textContent = language.esp.locations;
        duration1.textContent = language.esp.durations;
        degree2.textContent = language.esp.degrees;
        place2.textContent = language.esp.locations;
        duration2.textContent = language.esp.durations;
        degree3.textContent = language.esp.degrees;
        place3.textContent = language.esp.locations;
        duration3.textContent = language.esp.durations;
        degree_one.textContent = language.esp.first_degree;
        degree_two.textContent = language.esp.second_degree;
        degree_three.textContent = language.esp.third_degree;
        title_three.textContent = language.esp.third_title;
        snoonu1_duration_b.textContent = language.esp.duration_b;
        snoonu1_duration.textContent = language.esp.duration_snoonu1;
        snoonu1_position_b.textContent = language.esp.position_b;
        snoonu1_position.textContent = language.esp.position_snoonu1;
        snoonu1_functions.textContent = language.esp.functions;
        snoonu1_function1.textContent = language.esp.function1_snoonu1;
        snoonu1_function2.textContent = language.esp.function2_snoonu1;
        snoonu1_function3.textContent = language.esp.function3_snoonu1;
        snoonu1_function4.textContent = language.esp.function4_snoonu1;
        snoonu1_function5.textContent = language.esp.function5_snoonu1;
        snoonu1_function6.textContent = language.esp.function6_snoonu1;
        snoonu1_function7.textContent = language.esp.function7_snoonu1;
        chazki1_duration_b.textContent = language.esp.duration_b;
        chazki1_duration.textContent = language.esp.duration_chazki1;
        chazki1_position_b.textContent = language.esp.position_b;
        chazki1_position.textContent = language.esp.position_chazki1;
        chazki1_functions.textContent = language.esp.functions;
        chazki1_function1.textContent = language.esp.function1_chazki1;
        chazki1_function2.textContent = language.esp.function2_chazki1;
        chazki1_function3.textContent = language.esp.function3_chazki1;
        chazki1_function4.textContent = language.esp.function4_chazki1;
        chazki1_function5.textContent = language.esp.function5_chazki1;
        chazki1_function6.textContent = language.esp.function6_chazki1;
    }
}