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
    heroLabel: "Neural Decoding | BCI | Biomedical AI",
    heroLead:
      "MSc student in Neurotechnology and Research Collaborator at HSE University's Centre for Bioelectric Interfaces.",
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
      "Intracranial speech decoding from ECoG, adaptive stimulation, sensorimotor neurofeedback, and feedback-oriented experimental design.",
    themeImageTitle: "Biomedical image analysis and Computer Vision",
    themeImageText:
      "Histological slice processing, object segmentation, OpenCV pipelines, morphometric preparation, medical image analysis, YOLO/SAM-style pipelines, and deep learning for biomedical visual data.",
    experienceTitle: "Work experience",
    expHseOrg: "HSE University, Centre for Bioelectric Interfaces",
    expHseTitle: "Research Collaborator",
    expHseMeta: "Part-time | Remote | Moscow, Russia | Jun 2026 - Present",
    expHseText:
      "Developing intracranial ECoG speech-decoding methods. The best internal experiment reached 81.4% accuracy, improving the previous 70.0% benchmark by 11.4 percentage points; all other methodological and dataset details remain under NDA.",
    expIndependentTitle: "Independent ML Developer / Researcher",
    expIndependentMeta: "Self-employed | Apr 2026 - Present",
    expIndependentText:
      "Develop independent ML research in pelvic CT segmentation and EEG decoding; the EEGNet JapanDataset reproduction is currently on hold after a reproducibility audit.",
    expSkoltechTitle: "Skolkovo Institute of Science and Technology, Neurocenter",
    expSkoltechMeta: "Remote | Moscow, Russia | Sep 2025 - Apr 2026",
    expAssistantTitle: "Research Assistant",
    expAssistantMeta: "Part-time | Nov 2025 - Apr 2026",
    expAssistantText:
      "Built an invasive myodecoder integrating six-channel EMG, thigh/shank IMUs, and YOLO11s-Pose. Developed a CNN-BiLSTM PhaseNet classifier with 94.3% internal window-level validation accuracy and streamed predictions to Unity 3D over TCP.",
    expInternTitle: "Intern",
    expInternMeta: "Internship | Sep 2025 - Nov 2025",
    expInternText:
      "Built a real-time sheep pose-estimation pipeline with YOLO11-Pose, reaching 28.9 FPS at 640 px with FP16 inference on a laptop RTX 5070; stabilized keypoints with Kalman filtering.",
    projectsTitle: "Selected projects and research experience",
    statusProgress: "in progress",
    statusDone: "DONE",
    statusFrozen: "ON HOLD",
    projectSpeechTitle: "Intracranial speech decoding from ECoG",
    projectSpeechText:
      "Developing neural methods to reconstruct speech from intracranial ECoG recordings. The best internal experiment reached 81.4% accuracy, 11.4 percentage points above the previous 70.0% benchmark. All other details remain under NDA.",
    projectMyodecoderTitle: "Invasive Myodecoder: EMG/IMU Gait-Phase Decoding",
    projectMyodecoderText:
      "Built a multimodal gait-phase system integrating six-channel invasive EMG, thigh/shank IMUs, and YOLO11s-Pose. A CNN-BiLSTM PhaseNet classified stance and swing with 94.3% internal window-level validation accuracy; predictions were streamed over TCP to Unity 3D.",
    projectSheepTitle: "Real-Time Sheep Pose Estimation with YOLO11-Pose",
    projectSheepText:
      "Built a real-time animal pose-estimation pipeline with FP16 inference and Kalman-smoothed keypoints. It processed 640 px video at 28.9 FPS on a laptop RTX 5070.",
    projectPelvisTitle: "Pelvic CT segmentation support system",
    projectPelvisText:
      "ML-based clinical decision support project for pelvic CT: segmentation of pelvic bones and lower limbs.",
    projectEegnetTitle: "EEGNet classifier on JapanDataset",
    projectEegnetText:
      "Reproduced and audited an EEGNet pipeline across 10 sessions of 128-channel EEG. Offline balanced accuracy reached 55.6%, 54.9%, and 33.4% for overt, minimally overt, and covert speech, versus 94.6%, 94.9%, and 91.1% reported in the paper. Likely checkpoint-selection and train/evaluation preprocessing inconsistencies were identified; their causal contribution remains unconfirmed.",
    projectAsdTitle: "Attention state detection in children with ASD",
    projectAsdText:
      "Led the research cycle and co-authored an EEG attention-state study in a participant with ASD. A weighted-average four-MLP ensemble achieved 95.90% accuracy, F1 0.9590, and MCC 0.9183 on 33,936 balanced samples - 2.92 percentage points above the prior best. The single-participant dataset limits cross-subject generalization.",
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
    publicationResult:
      "Weighted-average four-MLP ensemble: 95.90% accuracy, F1 0.9590, and MCC 0.9183 on 33,936 balanced samples from one participant; 2.92 percentage points above the previous reported best result.",
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
    skillsDomains: "Domains: ECoG speech decoding, EEG, EMG/IMU gait decoding, MRI, CT, Computer Vision, BCI.",
    skillsTools:
      "Tools and models: Python, PyTorch, NumPy, MNE, OpenCV, Matplotlib, YOLO11-Pose, 3D U-Net, nnU-Net, SAM, DeepLabCut, Unity and PyQt."
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
    heroLabel: "Декодирование нейросигналов | BCI | Биомедицинский AI",
    heroLead:
      "Магистрант по нейротехнологиям и Research Collaborator в Центре биоэлектрических интерфейсов НИУ ВШЭ.",
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
      "Инвазивное декодирование речи по ECoG, адаптивная стимуляция, сенсомоторный нейрофидбэк и экспериментальные схемы с обратной связью.",
    themeImageTitle: "Biomedical image analysis and Computer Vision",
    themeImageText:
      "Обработка гистологических срезов, сегментация объектов, OpenCV-пайплайны, подготовка к морфометрии, анализ медицинских изображений, YOLO/SAM-пайплайны и deep learning для биомедицинских визуальных данных.",
    experienceTitle: "Опыт работы",
    expHseOrg: "НИУ ВШЭ, Центр биоэлектрических интерфейсов",
    expHseTitle: "Research Collaborator",
    expHseMeta: "Частичная занятость | Удаленно | Москва, Россия | июнь 2026 - настоящее время",
    expHseText:
      "Разрабатываю методы декодирования речи по инвазивным сигналам ECoG. Лучший внутренний эксперимент достиг точности 81,4% — на 11,4 п.п. выше предыдущего бенчмарка 70,0%; остальные сведения о методах и данных защищены NDA.",
    expIndependentTitle: "Независимый ML-разработчик / исследователь",
    expIndependentMeta: "Self-employed | апрель 2026 - настоящее время",
    expIndependentText:
      "Веду независимые ML-исследования по сегментации тазовой области на CT и декодированию EEG; воспроизведение EEGNet на JapanDataset сейчас приостановлено после аудита воспроизводимости.",
    expSkoltechTitle: "Сколковский институт науки и технологий, Нейроцентр",
    expSkoltechMeta: "Удаленно | Москва, Россия | сентябрь 2025 - апрель 2026",
    expAssistantTitle: "Research Assistant",
    expAssistantMeta: "Частичная занятость | ноябрь 2025 - апрель 2026",
    expAssistantText:
      "Разработал инвазивный миодекодер, объединив шестиканальную EMG, IMU бедра и голени и YOLO11s-Pose. Создал CNN-BiLSTM-модель PhaseNet с внутренней валидационной точностью 94,3% на уровне окон и реализовал передачу предсказаний по TCP в Unity 3D.",
    expInternTitle: "Стажер",
    expInternMeta: "Стажировка | сентябрь 2025 - ноябрь 2025",
    expInternText:
      "Разработал систему оценки позы овец в реальном времени на основе YOLO11-Pose: 28,9 FPS при 640 px и FP16-инференсе на ноутбуке с RTX 5070; стабилизировал ключевые точки фильтром Калмана.",
    projectsTitle: "Избранные проекты и исследовательский опыт",
    statusProgress: "in progress",
    statusDone: "DONE",
    statusFrozen: "ПРИОСТАНОВЛЕН",
    projectSpeechTitle: "Инвазивное декодирование речи по ECoG",
    projectSpeechText:
      "Разрабатываю нейросетевые методы реконструкции речи по инвазивным записям ECoG. Лучший внутренний эксперимент достиг точности 81,4%, превысив предыдущий бенчмарк 70,0% на 11,4 п.п. Остальные детали защищены NDA.",
    projectMyodecoderTitle: "Invasive Myodecoder: декодирование фаз ходьбы по EMG и IMU",
    projectMyodecoderText:
      "Разработал мультимодальную систему распознавания фаз ходьбы, объединяющую шестиканальную инвазивную EMG, IMU бедра и голени и YOLO11s-Pose. CNN-BiLSTM-модель PhaseNet распознавала фазы опоры и переноса с внутренней валидационной точностью 94,3% на уровне окон; предсказания передавались по TCP в Unity 3D.",
    projectSheepTitle: "Real-Time Sheep Pose Estimation with YOLO11-Pose",
    projectSheepText:
      "Разработал систему оценки позы животных в реальном времени с FP16-инференсом и сглаживанием ключевых точек фильтром Калмана. Система обрабатывала видео 640 px со скоростью 28,9 FPS на ноутбуке с RTX 5070.",
    projectPelvisTitle: "ML-система поддержки врача для тазовой области",
    projectPelvisText:
      "Проект поддержки клинического решения для CT: сегментация тазовых костей и нижних конечностей.",
    projectEegnetTitle: "Классификатор EEGNet на JapanDataset",
    projectEegnetText:
      "Воспроизвел и провел аудит EEGNet-пайплайна на 10 сессиях 128-канальной EEG. Offline balanced accuracy составила 55,6%, 54,9% и 33,4% для overt, minimally overt и covert speech против 94,6%, 94,9% и 91,1% в статье. Выявлены вероятные несоответствия выбора чекпоинта и train/evaluation preprocessing; их причинная роль пока не подтверждена.",
    projectAsdTitle: "Детекция состояния внимания у детей с РАС",
    projectAsdText:
      "Вел исследовательский цикл и стал соавтором работы по распознаванию состояния внимания у участника с РАС по EEG. Взвешенный ансамбль из четырех MLP достиг точности 95,90%, F1 0,9590 и MCC 0,9183 на 33 936 сбалансированных примерах — на 2,92 п.п. выше предыдущего лучшего результата. Данные одного участника ограничивают межсубъектную обобщаемость.",
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
    publicationResult:
      "Взвешенный ансамбль из четырех MLP: точность 95,90%, F1 0,9590 и MCC 0,9183 на 33 936 сбалансированных примерах одного участника; на 2,92 п.п. выше предыдущего опубликованного лучшего результата.",
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
    skillsDomains: "Domains: декодирование речи по ECoG, EEG, декодирование ходьбы по EMG/IMU, MRI, CT, Computer Vision, BCI.",
    skillsTools:
      "Tools and models: Python, PyTorch, NumPy, MNE, OpenCV, Matplotlib, YOLO11-Pose, 3D U-Net, nnU-Net, SAM, DeepLabCut, Unity и PyQt."
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
