function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}
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
    }
};
if (window.location.hash) {
    if (window.location.hash == "#esp") {
        phone.textContent = language.esp.number;
        email.textContent = language.esp.mail;
        title_one.textContent = language.esp.first_title;
        extraContent.textContent = language.esp.paragraph;
        title_two.textContent = language.esp.second_title;
        degree.textContent = language.esp.degrees;
        location.textContent = language.esp.locations;
        duration.textContent = language.esp.durations;
        degree_one.textContent = language.esp.first_degree;
        degree_two.textContent = language.esp.second_degree;
        degree_three.textContent = language.esp.third_degree;
    }
}