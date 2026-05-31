const content = {
  name: "David LDH",
  footerYear: 2026,

  // Fuente única de proyectos.
  //   featured: true  -> aparece en la portada
  //   status: "in-progress" | "completed" | "planned"  (clave, se traduce en i18n.js)
  //   titles / descriptions: un texto por idioma (es / en)
  projects: [
    {
      titles: {
        es: "EduStream — Pipeline de datos",
        en: "EduStream — Data pipeline",
      },
      descriptions: {
        es: "Pipeline de datos de extremo a extremo con arquitectura Medallion (Bronze → Silver → Gold) para una plataforma educativa. Procesa datasets de inscripciones, cursos y progreso con validación de calidad e ingesta incremental, y genera métricas de negocio como tasas de finalización e ingresos por categoría.",
        en: "End-to-end data pipeline with a Medallion architecture (Bronze → Silver → Gold) for an online education platform. It processes enrollment, course and progress datasets with data-quality validation and incremental ingestion, generating business metrics such as completion rates and revenue by category.",
      },
      tech: ["Databricks", "PySpark", "Delta Live Tables", "Delta Lake", "Python"],
      status: "completed",
      featured: true,
      image: "img/edustream.svg",
      url: "https://github.com/david-ldh/edustream-pipeline-DLDH",
    },
    {
      titles: {
        es: "Contador de emoticones de WhatsApp",
        en: "WhatsApp emoji counter",
      },
      descriptions: {
        es: "Herramienta que analiza chats exportados de WhatsApp y cuenta los emojis utilizados para obtener estadísticas de uso.",
        en: "Tool that parses exported WhatsApp chats and counts the emojis used to produce usage statistics.",
      },
      tech: ["Python"],
      status: "in-progress",
      featured: true,
      image: "img/whatsapp-emoji.svg",
      url: "#",
    },
  ],

  contact: [
    { label: "GitHub", url: "https://github.com/david-ldh" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/david-ldh/" },
  ],
};
