const translations = {
  en: {
    personName: "Vladimir Baryshev",
    skip: "Skip to content",
    navHome: "Home",
    navThemes: "Research themes",
    navThesis: "Thesis",
    navExperience: "Experience",
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
      "Goal: develop an adaptive closed-loop spatiotemporal neuromodulation algorithm aimed at restoring motor function within personalized neurorehabilitation.",
    thesisLink: "GitHub repository",
    themesTitle: "Research themes",
    themeEegTitle: "EEG decoding",
    themeEegText: "Attention state classification, EEG preprocessing, MNE workflows, and neural networks.",
    themeBciTitle: "BCI and neurointerfaces",
    themeBciText:
      "Adaptive stimulation, sensorimotor neurofeedback, practical neurotechnology, and feedback-oriented experimental design.",
    themeImageTitle: "Biomedical image analysis and Computer Vision",
    themeImageText:
      "Histological slice processing, object segmentation, OpenCV pipelines, morphometric preparation, medical image analysis, YOLO/SAM-style pipelines, and deep learning for biomedical visual data.",
    experienceTitle: "Work experience",
    expIndependentTitle: "Independent ML Developer / Researcher",
    expIndependentMeta: "Self-employed | Apr 2026 - Present",
    expIndependentText:
      "Continue developing pet projects in medical image segmentation and EEG classification: CT pelvis segmentation support system and EEGNet classifier on JapanDataset.",
    expSkoltechTitle: "Skolkovo Institute of Science and Technology, Neurocenter",
    expSkoltechMeta: "Remote | Moscow, Russia | Sep 2025 - Apr 2026",
    expAssistantTitle: "Research Assistant",
    expAssistantMeta: "Part-time | Nov 2025 - Apr 2026",
    expAssistantText: "Neural-data analysis, Python, and computer vision.",
    expInternTitle: "Intern",
    expInternMeta: "Internship | Sep 2025 - Nov 2025",
    projectsTitle: "Pet projects and research experience",
    statusProgress: "in progress",
    statusDone: "DONE",
    projectPelvisTitle: "Pelvic CT segmentation support system",
    projectPelvisText:
      "ML-based clinical decision support project for pelvic CT: segmentation of pelvic bones and lower limbs.",
    projectEegnetTitle: "EEGNet classifier on JapanDataset",
    projectEegnetText: "EEG classifier based on EEGNet architecture for experiments with JapanDataset.",
    projectAsdTitle: "Attention state detection in children with ASD",
    projectAsdText:
      "Led the full research cycle from problem definition and literature review to EEG preprocessing, neural network training, collaboration with medical institutions, and paper writing.",
    doiLink: "Open DOI",
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
    schoolsTitle: "Schools, workshops, courses",
    schoolHse: "HSE brain research school, 2024",
    schoolNeuromatch: "Neuromatch Academy, Computational Neuroscience, 2025",
    schoolNeurointerfaces: "New Generation Neurointerfaces, HSE, 2025",
    courseComputational: "Coursera: Computational Neuroscience, University of Washington",
    courseNeuroimaging:
      "Coursera: Neuroscience and Neuroimaging Specialization, Johns Hopkins University",
    skillsTitle: "Software and skills",
    skillsDomains: "Domains: EEG, MRI, CT, Computer Vision, BCI.",
    skillsTools:
      "Tools and models: Python, PyTorch, NumPy, MNE, OpenCV, Matplotlib, YOLO, 3D U-Net, nnU-Net, SAM, DeepLabCut and PyQt."
  },
  ru: {
    personName: "Владимир Барышев",
    skip: "Перейти к содержимому",
    navHome: "Главная",
    navThemes: "Темы исследований",
    navThesis: "Диссертация",
    navExperience: "Опыт",
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
    thesisTitle: "Пространственно-временная нейромодуляция и биомиметические нейроинтерфейсы",
    thesisText:
      "Цель: разработать адаптивный алгоритм пространственно-временной нейромодуляции с обратной связью, направленный на восстановление двигательной функции в рамках концепции персонализированной нейрореабилитации.",
    thesisLink: "GitHub-репозиторий",
    themesTitle: "Темы исследований",
    themeEegTitle: "EEG-декодирование",
    themeEegText: "Классификация состояний внимания, preprocessing EEG, MNE-пайплайны и нейронные сети.",
    themeBciTitle: "BCI и нейроинтерфейсы",
    themeBciText:
      "Адаптивная стимуляция, сенсомоторный нейрофидбэк, практическая нейротехнология и экспериментальные схемы с обратной связью.",
    themeImageTitle: "Biomedical image analysis and Computer Vision",
    themeImageText:
      "Обработка гистологических срезов, сегментация объектов, OpenCV-пайплайны, подготовка к морфометрии, анализ медицинских изображений, YOLO/SAM-пайплайны и deep learning для биомедицинских визуальных данных.",
    experienceTitle: "Опыт работы",
    expIndependentTitle: "Независимый ML-разработчик / исследователь",
    expIndependentMeta: "Self-employed | апрель 2026 - настоящее время",
    expIndependentText:
      "Продолжаю вести pet-проекты по сегментации медицинских изображений и классификации EEG: систему поддержки врача для CT тазовой области и классификатор EEGNet на JapanDataset.",
    expSkoltechTitle: "Сколковский институт науки и технологий, Нейроцентр",
    expSkoltechMeta: "Удаленно | Москва, Россия | сентябрь 2025 - апрель 2026",
    expAssistantTitle: "Research Assistant",
    expAssistantMeta: "Частичная занятость | ноябрь 2025 - апрель 2026",
    expAssistantText: "Анализ нейроданных, Python и computer vision.",
    expInternTitle: "Стажер",
    expInternMeta: "Стажировка | сентябрь 2025 - ноябрь 2025",
    projectsTitle: "Pet-проекты и исследовательский опыт",
    statusProgress: "in progress",
    statusDone: "DONE",
    projectPelvisTitle: "ML-система поддержки врача для тазовой области",
    projectPelvisText:
      "Проект поддержки клинического решения для CT: сегментация тазовых костей и нижних конечностей.",
    projectEegnetTitle: "Классификатор EEGNet на JapanDataset",
    projectEegnetText: "EEG-классификатор на архитектуре EEGNet для экспериментов с JapanDataset.",
    projectAsdTitle: "Детекция состояния внимания у детей с РАС",
    projectAsdText:
      "Вел полный цикл исследования: постановка задачи, обзор литературы, preprocessing EEG, обучение нейросетей, координация с медицинскими организациями и подготовка статьи.",
    doiLink: "Открыть DOI",
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
    schoolsTitle: "Школы, воркшопы и курсы",
    schoolHse: "Школа исследований мозга НИУ ВШЭ, 2024",
    schoolNeuromatch: "Neuromatch Academy, Computational Neuroscience, 2025",
    schoolNeurointerfaces: "Нейроинтерфейсы нового поколения, НИУ ВШЭ, 2025",
    courseComputational: "Coursera: Computational Neuroscience, University of Washington",
    courseNeuroimaging:
      "Coursera: Neuroscience and Neuroimaging Specialization, Johns Hopkins University",
    skillsTitle: "Software and skills",
    skillsDomains: "Domains: EEG, MRI, CT, Computer Vision, BCI.",
    skillsTools:
      "Tools and models: Python, PyTorch, NumPy, MNE, OpenCV, Matplotlib, YOLO, 3D U-Net, nnU-Net, SAM, DeepLabCut and PyQt."
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
  document.title = labels.personName;
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

const neuronRail = document.querySelector(".neuron-rail");
const neuronFrame = document.querySelector("[data-neuron-frame]");
const neuronDesktopQuery = window.matchMedia("(min-width: 1101px)");
const neuronReducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const neuronFrameCount = Number(neuronFrame?.dataset.frameCount || 0);
const neuronAssetVersion = "20260526";
const neuronBands = {
  home: [0, 36],
  thesis: [36, 47],
  experience: [47, 58],
  themes: [58, 84],
  projects: [84, 104],
  publication: [104, 112],
  cv: [112, 119]
};
const neuronPulseFrames = {
  home: 36,
  thesis: 47,
  experience: 58,
  themes: 72,
  projects: 104,
  publication: 112,
  cv: 119
};
const neuronState = {
  currentFrame: -1,
  hoverFrame: null,
  activeSectionId: "",
  introStart: 0,
  raf: 0,
  pulseTimer: 0,
  hoverTimer: 0
};

function isNeuronEnabled() {
  return Boolean(neuronRail && neuronFrame && neuronFrameCount && neuronDesktopQuery.matches);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function neuronFrameSrc(frame) {
  return `assets/neuron-frames/neuron-${String(frame + 1).padStart(3, "0")}.webp?v=${neuronAssetVersion}`;
}

function setNeuronFrame(frame) {
  if (!isNeuronEnabled()) return;
  const nextFrame = clamp(Math.round(frame), 0, neuronFrameCount - 1);
  if (nextFrame === neuronState.currentFrame) return;
  neuronState.currentFrame = nextFrame;
  neuronFrame.src = neuronFrameSrc(nextFrame);
}

function getSectionProgress(section) {
  const rect = section.getBoundingClientRect();
  const anchor = window.innerHeight * 0.58;
  const travel = rect.height + window.innerHeight * 0.42;
  return clamp((anchor - rect.top) / travel, 0, 1);
}

function getNearestSection() {
  const anchor = window.innerHeight * 0.22;
  let nearest = sections[0];
  let nearestDistance = Number.POSITIVE_INFINITY;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= anchor && rect.bottom >= anchor) {
      nearest = section;
      nearestDistance = 0;
      return;
    }
    const distance = Math.abs(rect.top - anchor);
    if (distance < nearestDistance) {
      nearest = section;
      nearestDistance = distance;
    }
  });

  return nearest || sections[0];
}

function pulseNeuron() {
  if (!neuronRail) return;
  neuronRail.classList.add("is-pulsing");
  window.clearTimeout(neuronState.pulseTimer);
  neuronState.pulseTimer = window.setTimeout(() => {
    neuronRail.classList.remove("is-pulsing");
  }, 620);
}

function getScrollNeuronFrame() {
  const activeSection = getNearestSection();
  const id = activeSection?.id || "home";
  const band = neuronBands[id] || neuronBands.home;

  if (id !== neuronState.activeSectionId) {
    neuronState.activeSectionId = id;
    pulseNeuron();
  }

  const progress = easeOutCubic(getSectionProgress(activeSection));
  return band[0] + (band[1] - band[0]) * progress;
}

function updateNeuronFrame() {
  neuronState.raf = 0;
  if (!isNeuronEnabled()) return;

  if (neuronReducedMotionQuery.matches) {
    setNeuronFrame(neuronPulseFrames.home);
    return;
  }

  if (neuronState.hoverFrame !== null) {
    setNeuronFrame(neuronState.hoverFrame);
    return;
  }

  const introElapsed = performance.now() - neuronState.introStart;
  if (window.scrollY < 24 && introElapsed < 1500) {
    setNeuronFrame(neuronBands.home[1] * easeOutCubic(introElapsed / 1500));
    scheduleNeuronUpdate();
    return;
  }

  setNeuronFrame(getScrollNeuronFrame());
}

function scheduleNeuronUpdate() {
  if (!isNeuronEnabled() || neuronState.raf) return;
  neuronState.raf = window.requestAnimationFrame(updateNeuronFrame);
}

function preloadNeuronFrames() {
  if (!isNeuronEnabled()) return;
  let frame = 0;
  const loadBatch = () => {
    for (let count = 0; count < 10 && frame < neuronFrameCount; count += 1, frame += 1) {
      const image = new Image();
      image.src = neuronFrameSrc(frame);
    }
    if (frame < neuronFrameCount) window.setTimeout(loadBatch, 80);
  };
  window.setTimeout(loadBatch, 350);
}

if (isNeuronEnabled()) {
  neuronState.introStart = performance.now();
  setNeuronFrame(0);
  preloadNeuronFrames();
  scheduleNeuronUpdate();
  window.addEventListener("scroll", scheduleNeuronUpdate, { passive: true });
  window.addEventListener("resize", scheduleNeuronUpdate);

  navLinks.forEach((link) => {
    const sectionId = link.getAttribute("href")?.slice(1);
    const hoverFrame = neuronPulseFrames[sectionId];
    if (hoverFrame === undefined) return;

    link.addEventListener("mouseenter", () => {
      neuronState.hoverFrame = hoverFrame;
      pulseNeuron();
      window.clearTimeout(neuronState.hoverTimer);
      neuronState.hoverTimer = window.setTimeout(() => {
        neuronState.hoverFrame = null;
        scheduleNeuronUpdate();
      }, 900);
      scheduleNeuronUpdate();
    });

    link.addEventListener("mouseleave", () => {
      window.clearTimeout(neuronState.hoverTimer);
      neuronState.hoverFrame = null;
      scheduleNeuronUpdate();
    });

    link.addEventListener("click", () => {
      window.setTimeout(() => {
        neuronState.hoverFrame = null;
        scheduleNeuronUpdate();
      }, 360);
    });
  });
}
