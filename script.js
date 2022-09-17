function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}
var language = {
    eng: {
        welcome: "This is the initial display language",
        additional: "Bilingual psychologist with experience in project management, digital product development, qualitative and quantitative information analysis, market research, consumer psychology, knowledge of Excel (advanced), SQL (advanced) and Python (basic). With special interest in product areas, marketing based on consumer insights. Creative, motivated, with leadership and ability to adapt to difficult situations through strategic planning and assertive communication."
    },
    esp: {
        welcome: "Esta es la demostración inicial de lenguaje",
        additional: "Psicólogo bilingüe con experiencia en manejo de proyectos, desarrollo de productos digitales, análisis de información cualitativa, cuantitativa, investigación de mercado, psicología del consumidor, conocimiento de Excel (avanzado), SQL (avanzado) y Python (básico). Con especial interés en las áreas de producto, marketing basado en consumer insights. Creativo, motivado, con liderazgo y capacidad de adaptación frente a situaciones difíciles a través de la planificación estratégica y la comunicación asertiva."
    }
};
if (window.location.hash) {
    if (window.location.hash == "#esp") {
        siteContent.textContent = language.esp.welcome;
        extraContent.textContent = language.esp.additional
    }
}