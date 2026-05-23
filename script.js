const translations = {
  en: {
    skip: "Skip to content",
    navHome: "Home",
    navThemes: "Research themes",
    navThesis: "Thesis",
    navProjects: "Projects",
    navPublication: "Publication",
    navCv: "CV",
    contact: "Contact",
    copyEmail: "Copy email",
    copiedEmail: "Copied",
    profiles: "Profiles",
    heroLabel: "Neurotechnology | Biomedical AI | Computer Vision",
    heroLead:
      "MSc student in Neurotechnology working at the intersection of neural signal processing, brain-computer interfaces, computer vision, and machine learning.",
    heroText:
      "I have led an independent EEG study on attention states in children with ASD, built software for morphological processing of histological images, and now work on ML approaches for EEG and medical image analysis.",
    downloadCv: "Download CV",
    viewProjects: "View projects",
    thesisLabel: "Master's thesis in progress",
    thesisTitle: "Spatiotemporal neuromodulation and biomimetic neurointerfaces",
    thesisText:
      "Adaptive stimulation algorithms and sensorimotor neurofeedback systems for next-generation neurointerfaces.",
    themesLabel: "Research direction",
    themesTitle: "Research themes",
    themeEegTitle: "EEG decoding",
    themeEegText: "Attention state classification, EEG preprocessing, MNE workflows, and neural networks.",
    themeBciTitle: "BCI and neurointerfaces",
    themeBciText:
      "Adaptive stimulation, sensorimotor neurofeedback, practical neurotechnology, and feedback-oriented experimental design.",
    themeBioTitle: "Biomimetic neurointerfaces",
    themeBioText:
      "Functional nanoparticles, piezoelectric mechanisms, magnetic guidance, and material-driven neurotechnology.",
    themeImageTitle: "Biomedical image analysis",
    themeImageText:
      "Histological slice processing, object segmentation, OpenCV pipelines, and morphometric preparation.",
    themeMetricTitle: "Metric learning",
    themeMetricText: "Embedding methods for EEG and biomedical signals with better generalization across subjects.",
    themeVisionTitle: "Computer vision",
    themeVisionText:
      "Object segmentation, medical image analysis, YOLO/SAM-style pipelines, and deep learning for biomedical visual data.",
    projectsLabel: "Selected work",
    projectsTitle: "Projects and research experience",
    projectAsdTitle: "Attention state detection in children with ASD",
    projectAsdText:
      "Led the full research cycle from problem definition and literature review to EEG preprocessing, neural network training, collaboration with medical institutions, and paper writing.",
    doiLink: "Open DOI",
    projectMiTitle: "ML approaches for EEG and medical imaging",
    projectMiText:
      "Work on neural network pipelines for EEG decoding and medical image analysis, including segmentation-oriented computer vision models and metric-learning experiments.",
    projectHistTitle: "Histological slice processing software",
    projectHistText:
      "Developed a Python application with OpenCV, NumPy, Matplotlib, and PyQt for color correction, normalization, threshold binarization, and morphological operations. Supported by RSF project 23-71-10013.",
    publicationLabel: "Publication",
    publicationTitle: "Published work",
    publicationName:
      "Detection of attention state in children with autism spectrum disorder based on neural network classification of electroencephalograms.",
    publicationMeta:
      "Vestnik of Saint Petersburg University. Applied Mathematics. Computer Science. Control Processes, 2025, vol. 21, issue 1, pp. 92-111. Q3 Scopus.",
    cvLabel: "Background",
    cvTitle: "CV highlights",
    educationTitle: "Education",
    educationBachelor:
      "Bachelor in General Biology, Molecular Biology and Genetics, North-Caucasus Federal University. GPA 4.35.",
    educationMaster: "MSc in Neurotechnology with the basics of biomaterials science, Sirius University. In progress.",
    trainingTitle: "Advanced training",
    trainingBioinformatics:
      "Technologies for Controlling Biological Properties: practical course in bioinformatics and molecular biology, NSU, 2025.",
    trainingGenetics: "Molecular genetic methods for investigating living systems, NCFU, 2023.",
    schoolsTitle: "Schools and workshops",
    schoolSirius: "Sirius Neurotechnology School, 2025",
    schoolHse: "HSE brain research school, 2024",
    schoolGtec: "g.tec BCI & Neurotechnology Spring School, 2025",
    schoolNeuromatch: "Neuromatch Academy, Computational Neuroscience, 2025",
    schoolNeurointerfaces: "New Generation Neurointerfaces, HSE, 2025",
    skillsTitle: "Software and skills",
    skillsDomains: "Domains: EEG, MRI, CT, computer vision, biomedical image segmentation, neurotechnology, and BCI.",
    skillsTools:
      "Tools and models: Python, PyTorch, NumPy, MNE, OpenCV, Matplotlib, YOLO, 3D U-Net, nnU-Net, SAM, and PyQt.",
    footerText: "Personal academic website, ready for GitHub Pages."
  },
  ru: {
    skip: "Перейти к содержимому",
    navHome: "Главная",
    navThemes: "Темы исследований",
    navThesis: "Диссертация",
    navProjects: "Проекты",
    navPublication: "Публикация",
    navCv: "CV",
    contact: "Контакты",
    copyEmail: "Скопировать email",
    copiedEmail: "Скопировано",
    profiles: "Профили",
    heroLabel: "Нейротехнологии | Биомедицинский AI | Computer Vision",
    heroLead:
      "Магистрант направления нейротехнологий, работающий на стыке обработки нейросигналов, BCI, компьютерного зрения и машинного обучения.",
    heroText:
      "Я вел независимый EEG-проект по классификации состояний внимания у детей с РАС, разработал ПО для морфологической обработки гистологических изображений, а сейчас работаю над ML-подходами для EEG и анализа медицинских изображений.",
    downloadCv: "Скачать CV",
    viewProjects: "Смотреть проекты",
    thesisLabel: "Тема магистерской диссертации в процессе",
    thesisTitle:
      "Пространственно-временная нейромодуляция и биомиметические нейроинтерфейсы",
    thesisText:
      "Алгоритмы адаптивной стимуляции и системы сенсомоторного нейрофидбэка.",
    themesLabel: "Научный фокус",
    themesTitle: "Темы исследований",
    themeEegTitle: "EEG-декодирование",
    themeEegText: "Классификация состояний внимания, preprocessing EEG, MNE-пайплайны и нейронные сети.",
    themeBciTitle: "BCI и нейроинтерфейсы",
    themeBciText:
      "Адаптивная стимуляция, сенсомоторный нейрофидбэк, практическая нейротехнология и экспериментальные схемы с обратной связью.",
    themeBioTitle: "Биомиметические нейроинтерфейсы",
    themeBioText:
      "Функциональные наночастицы, пьезоэлектрические механизмы, магнитное наведение и материалы для нейротехнологий.",
    themeImageTitle: "Биомедицинские изображения",
    themeImageText:
      "Обработка гистологических срезов, сегментация объектов, OpenCV-пайплайны и подготовка к морфометрии.",
    themeMetricTitle: "Metric learning",
    themeMetricText: "Эмбеддинги для EEG и биомедицинских сигналов с лучшей генерализацией между испытуемыми.",
    themeVisionTitle: "Computer vision",
    themeVisionText:
      "Сегментация объектов, анализ медицинских изображений, YOLO/SAM-пайплайны и deep learning для биомедицинских визуальных данных.",
    projectsLabel: "Избранная работа",
    projectsTitle: "Проекты и исследовательский опыт",
    projectAsdTitle: "Детекция состояния внимания у детей с РАС",
    projectAsdText:
      "Вел полный цикл исследования: постановка задачи, обзор литературы, preprocessing EEG, обучение нейросетей, координация с медицинскими организациями и подготовка статьи.",
    doiLink: "Открыть DOI",
    projectMiTitle: "ML-подходы для EEG и медицинских изображений",
    projectMiText:
      "Работаю над нейросетевыми пайплайнами для EEG-декодирования и анализа медицинских изображений, включая модели компьютерного зрения для сегментации и metric-learning эксперименты.",
    projectHistTitle: "ПО для обработки гистологических срезов",
    projectHistText:
      "Разработал Python-приложение на OpenCV, NumPy, Matplotlib и PyQt для цветокоррекции, нормализации каналов, пороговой бинаризации и морфологических операций. Работа поддержана проектом РНФ 23-71-10013.",
    publicationLabel: "Публикация",
    publicationTitle: "Опубликованная работа",
    publicationName:
      "Detection of attention state in children with autism spectrum disorder based on neural network classification of electroencephalograms.",
    publicationMeta:
      "Vestnik of Saint Petersburg University. Applied Mathematics. Computer Science. Control Processes, 2025, vol. 21, issue 1, pp. 92-111. Q3 Scopus.",
    cvLabel: "Бэкграунд",
    cvTitle: "Ключевые пункты CV",
    educationTitle: "Образование",
    educationBachelor:
      "Бакалавриат: общая биология, специализация молекулярная биология и генетика, СКФУ. GPA 4.35.",
    educationMaster: "Магистратура: нейротехнологии с основами биоматериаловедения, Университет Сириус. В процессе.",
    trainingTitle: "Повышение квалификации",
    trainingBioinformatics:
      "Технологии управления биологическими свойствами: практический курс по биоинформатике и молекулярной биологии, НГУ, 2025.",
    trainingGenetics: "Молекулярно-генетические методы исследования живых систем, СКФУ, 2023.",
    schoolsTitle: "Школы и воркшопы",
    schoolSirius: "Школа нейротехнологий Сириуса, 2025",
    schoolHse: "Школа исследований мозга НИУ ВШЭ, 2024",
    schoolGtec: "g.tec BCI & Neurotechnology Spring School, 2025",
    schoolNeuromatch: "Neuromatch Academy, Computational Neuroscience, 2025",
    schoolNeurointerfaces: "Нейроинтерфейсы нового поколения, НИУ ВШЭ, 2025",
    skillsTitle: "ПО и навыки",
    skillsDomains: "Сферы: EEG, MRI, CT, computer vision, сегментация биомедицинских изображений, нейротехнологии и BCI.",
    skillsTools:
      "Инструменты и модели: Python, PyTorch, NumPy, MNE, OpenCV, Matplotlib, YOLO, 3D U-Net, nnU-Net, SAM и PyQt.",
    footerText: "Персональный академический сайт, готовый для GitHub Pages."
  }
};

const root = document.documentElement;
const languageButtons = document.querySelectorAll("[data-lang-toggle]");
const themeButtons = document.querySelectorAll("[data-theme-toggle]");
const drawerOpen = document.querySelector("[data-drawer-open]");
const drawerCloseButtons = document.querySelectorAll("[data-drawer-close]");
const emailButton = document.querySelector("[data-copy-email]");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const savedTheme = localStorage.getItem("theme") || "light";
const savedLanguage = localStorage.getItem("language") || "en";

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

function setLanguage(language) {
  const labels = translations[language];
  root.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (labels[key]) node.textContent = labels[key];
  });
  languageButtons.forEach((button) => {
    button.textContent = language === "en" ? "RU" : "EN";
    button.setAttribute("aria-label", language === "en" ? "Switch to Russian" : "Switch to English");
  });
  localStorage.setItem("language", language);
}

function closeDrawer() {
  document.body.classList.remove("drawer-open");
}

setTheme(savedTheme);
setLanguage(savedLanguage);

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(root.lang === "en" ? "ru" : "en");
  });
});

drawerOpen?.addEventListener("click", () => document.body.classList.add("drawer-open"));
drawerCloseButtons.forEach((button) => button.addEventListener("click", closeDrawer));

navLinks.forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

emailButton?.addEventListener("click", async () => {
  const email = "nikaabigail314@gmail.com";
  const labels = translations[root.lang] || translations.en;
  try {
    await navigator.clipboard.writeText(email);
    const previous = emailButton.textContent;
    emailButton.textContent = labels.copiedEmail;
    window.setTimeout(() => {
      emailButton.textContent = previous;
    }, 1400);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.25, 0.5] }
);

sections.forEach((section) => observer.observe(section));
