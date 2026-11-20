/**
 * ========================================================================
 * Podcastak (بودكاستك) — Unified Video Registry & Interactive Engine
 * ========================================================================
 * Contains:
 * 1. Global video database (skills, podcasts, self-dev, faith, tips).
 * 2. Persistent Favorites system (localStorage).
 * 3. Dynamic "New Video" badge calculator (relative Egyptian & English dates).
 * 4. Image Fallback System (SVG data-URIs on error).
 * 5. Instant Arabic-normalized search engine.
 * 6. Global Toast notification feedback.
 */

(function () {
  'use strict';

  // --- Central Video Database ---
  window.PODCASTAK_VIDEOS = [
  {
    "id": "TJVfyB7QR8I",
    "videoId": "TJVfyB7QR8I",
    "titleAr": "من أجمل وأسهل طرق تعلم البرمجة من الصفر",
    "titleEn": "One of the Best Ways to Learn Programming from Scratch",
    "descAr": "أسامة الزيرو بيشرح بأسلوب مبسط جداً إزاي تبدأ في عالم البرمجة من غير تعقيد وتختار مجالك الصح.",
    "descEn": "Osama Elzero explains clearly how to start learning coding without complications and choose your path.",
    "authorAr": "أسامة الزيرو (Elzero)",
    "authorEn": "Osama Elzero",
    "category": "programming",
    "categoryLabelAr": "برمجة وتطوير ويب",
    "categoryLabelEn": "Coding & Web",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "برمجة",
      "تعلم البرمجة",
      "كود",
      "تطوير الويب",
      "elzero",
      "coding",
      "programming",
      "web"
    ]
  },
  {
    "id": "9fuLFb1SmBA",
    "videoId": "9fuLFb1SmBA",
    "titleAr": "استطلاع ستاك أوفر فلو: المرتبات ولغات البرمجة والذكاء الاصطناعي",
    "titleEn": "Stack Overflow Survey: Salaries, Languages & AI Impact",
    "descAr": "غريب الشيخ بيحلل أحدث أرقام سوق البرمجة، والوظائف المطلوبة، وتأثير الذكاء الاصطناعي على المطورين.",
    "descEn": "Ghareeb Elshaikh analyzes market trends, demanded skills, salaries, and how AI impacts developers.",
    "authorAr": "غريب الشيخ",
    "authorEn": "Ghareeb Elshaikh",
    "category": "programming",
    "categoryLabelAr": "برمجة وتطوير ويب",
    "categoryLabelEn": "Coding & Web",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "برمجة",
      "مرتبات",
      "سوق العمل",
      "ذكاء اصطناعي",
      "stack overflow",
      "ai",
      "careers"
    ]
  },
  {
    "id": "hVPYTKcOGgU",
    "videoId": "hVPYTKcOGgU",
    "titleAr": "شغل الريموت (Remote Work): ازاي تشتغل عن بعد وتدخل سوق العمل؟",
    "titleEn": "Remote Work: How to Work Remotely & Break into the Market",
    "descAr": "يحيى تك مع أحمد نجدي في نقاش عملي دسم عن خطوات العمل الحر والريموت، وكيف تجهز نفسك للشركات العالمية.",
    "descEn": "Yehia Tech and Ahmed Nagdy discuss practical steps to land remote tech jobs and work globally.",
    "authorAr": "يحيى تك وأحمد نجدي",
    "authorEn": "Yehia Tech & Ahmed Nagdy",
    "category": "programming",
    "categoryLabelAr": "برمجة وعمل عن بعد",
    "categoryLabelEn": "Coding & Remote Work",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "شغل عن بعد",
      "ريموت",
      "عمل حر",
      "سوق العمل",
      "remote work",
      "freelance",
      "careers"
    ]
  },
  {
    "id": "xerhJdVjfK8",
    "videoId": "xerhJdVjfK8",
    "titleAr": "بودكاست مع خبير الذكاء الاصطناعي وصناعة المحتوى براء محمد",
    "titleEn": "AI in Content Creation & Modern Work with Baraa Mohamed",
    "descAr": "مصطفى مكرم مع براء محمد في حوار شيق عن أدوات الذكاء الاصطناعي، المونتاج الذكي، وثورة صناعة المحتوى.",
    "descEn": "Mostafa Makram and Baraa Mohamed explore AI creative tools, video editing, and modern media.",
    "authorAr": "مصطفى مكرم TV",
    "authorEn": "Mostafa Makram TV",
    "category": "ai-tools",
    "categoryLabelAr": "ذكاء اصطناعي وميديا",
    "categoryLabelEn": "AI & Media",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "ذكاء اصطناعي",
      "مونتاج",
      "صناعة محتوى",
      "تصميم",
      "ai",
      "video editing",
      "content creation"
    ]
  },
  {
    "id": "a6NlVqjQBbc",
    "videoId": "a6NlVqjQBbc",
    "titleAr": "إنت شاطر فعلاً.. بس محدش شايفك! (فن التسويق لمهاراتك)",
    "titleEn": "You Are Truly Skilled, But Invisible: Showcasing Your Work",
    "descAr": "كتير مننا عنده مهارات قوية بس مش عارف يوصل للعملاء أو الشركات.. يحيى تك بيوضح لك إزاي تبني معرض أعمالك وتظهر قيمتك.",
    "descEn": "Yehia Tech reveals practical tactics to build your portfolio and attract clients and companies.",
    "authorAr": "يحيى تك (Yehia Tech)",
    "authorEn": "Yehia Tech",
    "category": "freelance",
    "categoryLabelAr": "عمل حر وتطوير مهني",
    "categoryLabelEn": "Freelance & Career",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "عمل حر",
      "تسويق ذاتي",
      "بورتفوليو",
      "وظائف",
      "freelance",
      "portfolio",
      "marketing"
    ]
  },
  {
    "id": "PfB9Sc92vYA",
    "videoId": "PfB9Sc92vYA",
    "titleAr": "لو مش حابب شغلك.. عندك حل من الاتنين (أحمد طارق)",
    "titleEn": "If You Dislike Your Job: The Two Viable Paths (Ahmed Tarek)",
    "descAr": "نصيحة ذهبية ومباشرة من أحمد طارق في GTalks لكل واحد حاسس بملل أو ضيق في وظيفته الحالية وإزاي يغير مساره بأمان.",
    "descEn": "Actionable guidance on handling career dissatisfaction and transitioning safely into what you love.",
    "authorAr": "أحمد طارق (GTalks)",
    "authorEn": "Ahmed Tarek (GTalks)",
    "category": "freelance",
    "categoryLabelAr": "تطوير مهني ووظيفي",
    "categoryLabelEn": "Career Guidance",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "شغل",
      "وظيفة",
      "كارير",
      "تطوير مهني",
      "career",
      "job",
      "growth"
    ]
  },
  {
    "id": "kX7c9uWosDI",
    "videoId": "kX7c9uWosDI",
    "titleAr": "أسرار التسويق: كيف تبني براند يجعلك الأول في مجالك؟",
    "titleEn": "Marketing Secrets: How to Build a Standout Brand (Salah Abu Al-Majd)",
    "descAr": "صلاح أبو المجد بيفكك أسرار بناء العلامة التجارية الشخصية والتجارية وكيف تميز نفسك عن باقي المنافسين.",
    "descEn": "Salah Abu Al-Majd reveals foundational branding principles to dominate your niche with authenticity.",
    "authorAr": "صلاح أبو المجد",
    "authorEn": "Salah Abu Al-Majd",
    "category": "freelance",
    "categoryLabelAr": "تسويق وبراند شخصي",
    "categoryLabelEn": "Branding & Marketing",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "تسويق",
      "براند",
      "صلاح ابو المجد",
      "مبيعات",
      "marketing",
      "branding",
      "sales"
    ]
  },
  {
    "id": "QPTwsoa47do",
    "videoId": "QPTwsoa47do",
    "titleAr": "كيف تحصل على وظيفة وتتطوّر مهنيًا في سوق متسارع؟",
    "titleEn": "How to Land a Job & Advance Professionally (Fnjan Podcast)",
    "descAr": "حلقة مميزة من بودكاست فنجان تشرح مهارات المقابلات، والتفاوض، واكتساب المهارات المطلوبة في الشركات الحديثة.",
    "descEn": "An insightful episode on interview preparation, negotiation, and high-demand professional skills.",
    "authorAr": "إذاعة ثمانية (بودكاست فنجان)",
    "authorEn": "Thmanyah (Fnjan Podcast)",
    "category": "digital-skills",
    "categoryLabelAr": "مهارات وظيفية",
    "categoryLabelEn": "Career Skills",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "وظائف",
      "فنجان",
      "ثمانية",
      "مقابلات عمل",
      "interviews",
      "career",
      "fnjan"
    ]
  },
  {
    "id": "3acWaDehEiU",
    "videoId": "3acWaDehEiU",
    "titleAr": "كيف تصلح حياتك في يوم واحد وتبدأ بداية جديدة؟",
    "titleEn": "How to Reset Your Life in One Single Day (Droos Online)",
    "descAr": "أحمد أبو زيد بيقدملك خطة عملية وسهلة لترتيب فوضى يومك، استعادة طاقتك، وبناء روتين يومي مريح وفعال.",
    "descEn": "Ahmed Abu Zaid shares a practical reset plan to clear clutter, regain energy, and establish routine.",
    "authorAr": "أحمد أبو زيد (دروس أونلاين)",
    "authorEn": "Ahmed Abu Zaid (Droos Online)",
    "category": "digital-skills",
    "categoryLabelAr": "إنتاجية وعادات",
    "categoryLabelEn": "Productivity & Habits",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "انتاجية",
      "تنظيم الوقت",
      "احمد ابو زيد",
      "عادات",
      "productivity",
      "habits",
      "droos online"
    ]
  },
  {
    "id": "_IbDzak-z6c",
    "videoId": "_IbDzak-z6c",
    "titleAr": "النجاح الانفجاري وعدم التشتت في زمن المغريات",
    "titleEn": "Explosive Success & Zero Distraction (Salah Abu Al-Majd)",
    "descAr": "ليه معظم الناس بتبدأ ومبتكملش؟ صلاح أبو المجد بيشرح سيكولوجية التركيز المطلق وتجنب حرق الطاقة على الفاضي.",
    "descEn": "Master deep focus, overcome shiny object syndrome, and channel your effort into real achievements.",
    "authorAr": "صلاح أبو المجد",
    "authorEn": "Salah Abu Al-Majd",
    "category": "digital-skills",
    "categoryLabelAr": "إنتاجية وتركيز",
    "categoryLabelEn": "Productivity & Focus",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "تركيز",
      "تشتت",
      "انتاجية",
      "صلاح ابو المجد",
      "focus",
      "productivity"
    ]
  },
  {
    "id": "_LamsT4asMA",
    "videoId": "_LamsT4asMA",
    "titleAr": "لا تضيع عمرك في التفاهات! كيف تستثمر وقتك قبل فوات الأوان؟",
    "titleEn": "Do Not Waste Your Life on Trivia: Valuable Time Investment",
    "descAr": "الشيخ علاء جابر في حوار بودكاست بصمة يضع النقاط على الحروف حول قيمة الدقيقة في شبابك وأثرها على مستقبلك.",
    "descEn": "Sheikh Alaa Jaber emphasizes the preciousness of time and avoiding modern digital traps.",
    "authorAr": "الشيخ علاء جابر (بودكاست بصمة)",
    "authorEn": "Sheikh Alaa Jaber (Basmah Podcast)",
    "category": "digital-skills",
    "categoryLabelAr": "قيمة الوقت",
    "categoryLabelEn": "Time Management",
    "page": "skills.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "الوقت",
      "بصمة",
      "علاء جابر",
      "تنظيم الوقت",
      "time",
      "youth"
    ]
  },
  {
    "id": "5-WnZLby-Wk",
    "videoId": "5-WnZLby-Wk",
    "titleAr": "ايش المشكلة في التوبة؟ (برنامج دين وطين)",
    "titleEn": "What Holds You Back from Repentance? (Deen & Teen)",
    "descAr": "الغافري بيطرح تساؤل مهم جداً لكل شاب: ليه بنأجل التوبة؟ وإزاي تفك عقدة الذنب وترجع لربنا براحة وبساطة.",
    "descEn": "Al-Ghafri addresses why young people procrastinate repentance and how to return peacefully to God.",
    "authorAr": "الغافري (دين وطين)",
    "authorEn": "Al-Ghafri (Deen & Teen)",
    "category": "faith",
    "categoryLabelAr": "دروس إيمانية",
    "categoryLabelEn": "Faith & Heart",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "توبة",
      "دين وطين",
      "الغافري",
      "رجوع لله",
      "repentance",
      "faith"
    ]
  },
  {
    "id": "rsulj59U72g",
    "videoId": "rsulj59U72g",
    "titleAr": "ما هو اسم الله الأعظم الذي إذا دُعي به أجاب؟",
    "titleEn": "The Greatest Name of Allah: When Supplicated, Answered",
    "descAr": "حلقة مشوقة وجميلة من دين وطين تشرح فضائل أسماء الله الحسنى وكيف تدعو الله بيقين وتلمس الإجابة.",
    "descEn": "A heartwarming journey through the greatest names of Allah and praying with deep conviction.",
    "authorAr": "الغافري (دين وطين)",
    "authorEn": "Al-Ghafri (Deen & Teen)",
    "category": "faith",
    "categoryLabelAr": "دروس إيمانية",
    "categoryLabelEn": "Faith & Heart",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "اسماء الله",
      "دعاء",
      "دين وطين",
      "الغافري",
      "names of allah",
      "prayer"
    ]
  },
  {
    "id": "CSIry2i0nTI",
    "videoId": "CSIry2i0nTI",
    "titleAr": "كيف أتخلص من الإباحية والعادة السرية وطوفان الشهوات؟",
    "titleEn": "Overcoming Digital Addiction & Guarding the Heart",
    "descAr": "لقاء علمي وطبي ونفسي مع د. هيثم طلعت، د. علي قاسم، ود. أحمد جلال يقدم حلولاً عملية للتعافي واستعادة العفة.",
    "descEn": "Psychological, medical, and faith-based recovery roadmap from digital addictions and guarding modesty.",
    "authorAr": "د. هيثم طلعت ونخبة من الأطباء",
    "authorEn": "Dr. Haitham Talaat & Medical Experts",
    "category": "faith",
    "categoryLabelAr": "وعي وعفة",
    "categoryLabelEn": "Awareness & Youth",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "عفة",
      "هيثم طلعت",
      "تعافي",
      "غض البصر",
      "purity",
      "recovery",
      "youth"
    ]
  },
  {
    "id": "agFMbV32JIc",
    "videoId": "agFMbV32JIc",
    "titleAr": "سلسلة لازم تتحرر (1): التحرر من الغفلة (بودكاست فاهم)",
    "titleEn": "You Must Break Free (1): Freedom from Carelessness (Fahem)",
    "descAr": "الشيخ أمجد سمير في حلقة عميقة عن الاستيقاظ من نومة الغفلة، وكيف تبني وعياً حقيقياً لحياتك وهدفك.",
    "descEn": "Sheikh Amjad Samir tackles spiritual heedlessness and how to wake up to your true purpose.",
    "authorAr": "الشيخ أمجد سمير (بودكاست فاهم)",
    "authorEn": "Sheikh Amjad Samir (Fahem Podcast)",
    "category": "podcast",
    "categoryLabelAr": "بودكاست فاهم",
    "categoryLabelEn": "Fahem Podcast",
    "page": "right-sidebar.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "فاهم",
      "امجد سمير",
      "بودكاست",
      "غفلة",
      "fahem",
      "podcast",
      "faith"
    ]
  },
  {
    "id": "W5q_JYlVDhU",
    "videoId": "W5q_JYlVDhU",
    "titleAr": "صيدكاست 01: الشيخ وليد إسماعيل والدكتور هيثم طلعت",
    "titleEn": "Saydcast 01: Sheikh Waleed Ismail & Dr. Haitham Talaat",
    "descAr": "حوار ونقاش ثري يجمع بين الأدلة العقلية والفكرية ومواجهة الشبهات المعاصرة بأسلوب هادئ ومقنع.",
    "descEn": "An engaging dialogue addressing intellectual doubts and affirming faith with compelling logic.",
    "authorAr": "صيدكاست (الشيخ وليد ود. هيثم)",
    "authorEn": "Saydcast (Waleed & Haitham)",
    "category": "podcast",
    "categoryLabelAr": "صيدكاست",
    "categoryLabelEn": "Saydcast",
    "page": "right-sidebar.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "صيدكاست",
      "وليد اسماعيل",
      "هيثم طلعت",
      "شبهات",
      "saydcast",
      "podcast"
    ]
  },
  {
    "id": "lRQSm8BFN8U",
    "videoId": "lRQSm8BFN8U",
    "titleAr": "أهم درس ممكن تسمعه عن التوفيق في حياتك وبركة السعي",
    "titleEn": "The Essential Lesson on Divine Success & Blessing in Life",
    "descAr": "الشيخ أمجد سمير يوضح سر التوفيق الحقيقي، وليه ممكن حد يسعى قليل ويتوفق، وحد يجري كتير وبركته قليلة.",
    "descEn": "Discover the secret behind divine blessings, sincere intention, and true life fulfillment.",
    "authorAr": "الشيخ أمجد سمير (سَبيل)",
    "authorEn": "Sheikh Amjad Samir (Sabeel)",
    "category": "faith",
    "categoryLabelAr": "دروس إيمانية",
    "categoryLabelEn": "Faith & Heart",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "توفيق",
      "امجد سمير",
      "بركة",
      "سعي",
      "success",
      "faith",
      "sabeel"
    ]
  },
  {
    "id": "RZEeGyUR6es",
    "videoId": "RZEeGyUR6es",
    "titleAr": "السيرة النبوية كاملة: نور يضيء القلوب والأخلاق",
    "titleEn": "Complete Prophetic Biography (Seerah) — Light in Your Life",
    "descAr": "رحلة عاطفية وفكرية مع مصطفى حسني في سيرة النبي ﷺ، دروس في القيادة، والرحمة، والثبات في الشدائد.",
    "descEn": "Mustafa Hosny takes you through the inspiring life and morals of the Prophet Muhammad (PBUH).",
    "authorAr": "مصطفى حسني",
    "authorEn": "Mustafa Hosny",
    "category": "faith",
    "categoryLabelAr": "السيرة النبوية",
    "categoryLabelEn": "Prophetic Seerah",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "سيرة نبوية",
      "مصطفى حسني",
      "نور",
      "اخلاق",
      "seerah",
      "mustafa hosny",
      "prophet"
    ]
  },
  {
    "id": "YBIJOOX3tjc",
    "videoId": "YBIJOOX3tjc",
    "titleAr": "أخطر ما ورد عن شياطين آخر الزمان وكيف تحصن قلبك وفكرك؟",
    "titleEn": "Spiritual Awareness & Protecting the Mind against Doubts",
    "descAr": "د. هيثم طلعت يستعرض الأدلة الشرعية والواقعية في مواجهة الوساوس وطرق الوقاية منها بالذكر والوعي.",
    "descEn": "Dr. Haitham Talaat explains spiritual vigilance and mental peace against modern temptations.",
    "authorAr": "د. هيثم طلعت",
    "authorEn": "Dr. Haitham Talaat",
    "category": "faith",
    "categoryLabelAr": "توعية وإيمان",
    "categoryLabelEn": "Spiritual Awareness",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "هيثم طلعت",
      "وساوس",
      "تحصين",
      "اذكار",
      "awareness",
      "faith"
    ]
  },
  {
    "id": "yaAJz9QQCbU",
    "videoId": "yaAJz9QQCbU",
    "titleAr": "أصلح نفسك وتخلص من قلقك ومخاوفك: اجعل اطمئنانك بالله",
    "titleEn": "Heal Your Soul & Overcome Anxiety: Rest Your Heart in God",
    "descAr": "الدكتور نبيل العوضي يلامس المشاعر بكلمات هادئة تشفي القلق والهموم وتعيد السكينة إلى روحك.",
    "descEn": "Dr. Nabeel Al-Awadi offers comforting wisdom to dispel fears and cultivate serenity in Allah.",
    "authorAr": "د. نبيل العوضي",
    "authorEn": "Dr. Nabeel Al-Awadi",
    "category": "faith",
    "categoryLabelAr": "راحة نفسية وسكينة",
    "categoryLabelEn": "Inner Peace",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "نبيل العوضي",
      "قلق",
      "خوف",
      "سكينة",
      "اطمئنان",
      "peace",
      "anxiety",
      "faith"
    ]
  },
  {
    "id": "jFn4yVoICmM",
    "videoId": "jFn4yVoICmM",
    "titleAr": "كيف بدأ الخلق؟ قصة نبي الله آدم عليه السلام بأسلوب مشوق",
    "titleEn": "How Creation Began: The Story of Prophet Adam (PBUH)",
    "descAr": "يوسف القط يسرد تفاصيل قصة الخلق وسجود الملائكة وخداع إبليس، والعبرة العظيمة التي تهم كل إنسان.",
    "descEn": "Yousef Elkott narrates the creation of Prophet Adam, lessons of humility, and the origin of mankind.",
    "authorAr": "يوسف القط",
    "authorEn": "Yousef Elkott",
    "category": "faith",
    "categoryLabelAr": "قصص وعبر",
    "categoryLabelEn": "Stories & Wisdom",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "قصص الانبياء",
      "ادم",
      "يوسف القط",
      "بدا الخلق",
      "stories",
      "prophets"
    ]
  },
  {
    "id": "F28kpnngj7E",
    "videoId": "F28kpnngj7E",
    "titleAr": "الإحساس بالبعد عن ربنا: كيف نعود بخطوات بسيطة؟",
    "titleEn": "Feeling Distant from God: Practical Steps to Return (Fikr)",
    "descAr": "مصطفى حسني في برنامج فكر يجيب على التساؤل المؤلم: لما تحس بفتور وبعد، إيه أول خطوة عملية تعملها؟",
    "descEn": "Mustafa Hosny addresses spiritual dryness and how to rekindle warmth and connection with your Creator.",
    "authorAr": "مصطفى حسني (برنامج فكر)",
    "authorEn": "Mustafa Hosny (Fikr)",
    "category": "faith",
    "categoryLabelAr": "دروس إيمانية",
    "categoryLabelEn": "Faith & Heart",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "مصطفى حسني",
      "فكر",
      "قرب من الله",
      "فتور",
      "return to god",
      "faith"
    ]
  },
  {
    "id": "TtJzO83joFk",
    "videoId": "TtJzO83joFk",
    "titleAr": "السبب الحقيقي وراء الراحة النفسية وسلام القلب",
    "titleEn": "The Real Secret to Inner Peace and Mental Relief",
    "descAr": "حلقة مريحة للأعصاب مع مصطفى حسني تكشف مفتاح الرضا، وترك المقارنات، والتسليم لقضاء الله بحب.",
    "descEn": "Unlock the foundation of psychological comfort, letting go of comparisons and embracing contentment.",
    "authorAr": "مصطفى حسني (برنامج فكر)",
    "authorEn": "Mustafa Hosny (Fikr)",
    "category": "faith",
    "categoryLabelAr": "راحة نفسية وسكينة",
    "categoryLabelEn": "Inner Peace",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": true,
    "tags": [
      "راحة نفسية",
      "مصطفى حسني",
      "فكر",
      "سلام",
      "mental peace",
      "contentment"
    ]
  },
  {
    "id": "KY21joKom5Y",
    "videoId": "KY21joKom5Y",
    "titleAr": "غير حياتك الآن: موعظة بليغة ومؤثرة للشيخ بدر المشاري",
    "titleEn": "Transform Your Life Now: Moving Sermon by Badr Al-Meshari",
    "descAr": "كلمات تهز القلوب من الشيخ بدر المشاري تدعوك لوقفة صريحة مع النفس والمسارعة لفعل الخير قبل الرحيل.",
    "descEn": "An earnest and touching sermon urging honest reflection and turning life towards purpose and goodness.",
    "authorAr": "الشيخ بدر المشاري",
    "authorEn": "Sheikh Badr Al-Meshari",
    "category": "faith",
    "categoryLabelAr": "مواعظ مؤثرة",
    "categoryLabelEn": "Moving Sermons",
    "page": "index.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "بدر المشاري",
      "موعظة",
      "غير حياتك",
      "تذكرة",
      "sermon",
      "reminder"
    ]
  },
  {
    "id": "F9IiYZoWBr0",
    "videoId": "F9IiYZoWBr0",
    "titleAr": "آداب ومسائل الدعاء: كيف تسأل الله وتوقن بالإجابة؟ (بودكاست رفوف)",
    "titleEn": "Etiquette and Wisdom of Duaa: Praying with Certainty (Rofof)",
    "descAr": "الشيخ حمد العتيق في بودكاست رفوف يشرح أسرار الإلحاح في الدعاء وأوقات الاستجابة وكيف تدعو بقلب حاضر.",
    "descEn": "Hamad Al-Ateeq explores the spiritual depths and conditions for accepted supplication and hope.",
    "authorAr": "حمد العتيق (بودكاست رفوف)",
    "authorEn": "Hamad Al-Ateeq (Rofof Podcast)",
    "category": "podcast",
    "categoryLabelAr": "بودكاست رفوف",
    "categoryLabelEn": "Rofof Podcast",
    "page": "right-sidebar.html",
    "addedAt": "2026-11-20",
    "featured": false,
    "tags": [
      "رفوف",
      "حمد العتيق",
      "دعاء",
      "بودكاست",
      "duaa",
      "podcast",
      "rofof"
    ]
  },
  {
    "id": "7aKCm7jXT20",
    "videoId": "7aKCm7jXT20",
    "titleAr": "ليه أنا معقد",
    "titleEn": "Why Do I Feel Complicated?",
    "descAr": "فهم العقد النفسية والجذور التي تجعلنا نشعر بالتعقيد، وطريقة التحرر منها بخطوات واعية.",
    "descEn": "Understanding emotional complexes, uncovering their roots, and taking mindful steps toward inner peace.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "صحة نفسية",
    "categoryLabelEn": "Mental Health",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/1 modfiy 1.jpg",
    "tags": [
      "ليه أنا معقد",
      "صحة نفسية"
    ]
  },
  {
    "id": "YoZ2s8jMeYA",
    "videoId": "YoZ2s8jMeYA",
    "titleAr": "التفكير الزائد والقلق",
    "titleEn": "Overthinking & Anxiety",
    "descAr": "كيف تتخلص من دوامة الأفكار المرهقة (Overthinking) واستعادة الهدوء والتركيز الذهني.",
    "descEn": "Practical strategies to break free from exhausting overthinking loops and restore mental calm and focus.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "الصحة النفسية",
    "categoryLabelEn": "Mental Health",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/2.jpg",
    "tags": [
      "التفكير الزائد والقلق",
      "الصحة النفسية"
    ]
  },
  {
    "id": "amXfgu56hkg",
    "videoId": "amXfgu56hkg",
    "titleAr": "كيف تبني عقلا قويا",
    "titleEn": "How to Build a Strong Mind",
    "descAr": "تمارين وبناء مناعة فكرية تمكنك من مواجهة الشتات وتطوير قدرتك التحليلية والعملية.",
    "descEn": "Mental habits and cognitive resilience techniques to overcome distraction and sharpen analytical thinking.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "تطوير عقلي",
    "categoryLabelEn": "Self Development",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/3.jpg",
    "tags": [
      "كيف تبني عقلا قويا",
      "تطوير عقلي"
    ]
  },
  {
    "id": "uWnlgkYWRpY",
    "videoId": "uWnlgkYWRpY",
    "titleAr": "تعفن الدماغ؟",
    "titleEn": "Brain Rot & Attention Drain?",
    "descAr": "تأثير الفيديوهات القصيرة والسوشيال ميديا على انتباهنا ودوبامين الدماغ وكيف ننقذ أنفسنا.",
    "descEn": "How short-form videos and constant scrolling hijack dopamine and attention—and how to reclaim your mind.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "الوعي الرقمي",
    "categoryLabelEn": "Digital Awareness",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/4.jpg",
    "tags": [
      "تعفن الدماغ؟",
      "الوعي الرقمي"
    ]
  },
  {
    "id": "Gjh3AsIW35Q",
    "videoId": "Gjh3AsIW35Q",
    "titleAr": "لماذا أنت حزين معظم الوقت؟",
    "titleEn": "Why Are You Sad Most of the Time?",
    "descAr": "تحليل أسباب الحزن الخفي، وغياب الشغف، وكيف تعيد بناء اتصالك بروحك ويومك.",
    "descEn": "Exploring the hidden causes behind persistent sadness and loss of drive, and how to reconnect with meaning.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "صحة نفسية",
    "categoryLabelEn": "Mental Health",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/2 modify.jpg",
    "tags": [
      "لماذا أنت حزين معظم الوقت؟",
      "صحة نفسية"
    ]
  },
  {
    "id": "9_HaE9ptJ5U",
    "videoId": "9_HaE9ptJ5U",
    "titleAr": "ليش التعلق يدمرنا",
    "titleEn": "Why Unhealthy Attachment Hurts Us",
    "descAr": "الفرق بين الحب الحقيقي والتعلق المرضي بالأشخاص، وكيف تحمي قلبك واستقلاليتك النفسية.",
    "descEn": "Distinguishing healthy love from destructive emotional dependency and safeguarding your inner balance.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "علاقات وتوازن",
    "categoryLabelEn": "Relationships",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/6.jpg",
    "tags": [
      "ليش التعلق يدمرنا",
      "علاقات وتوازن"
    ]
  },
  {
    "id": "rLOmk9Oy9nY",
    "videoId": "rLOmk9Oy9nY",
    "titleAr": "الإحباط | ياسر الحزيمي",
    "titleEn": "Overcoming Frustration | Yasser Al-Hazimi",
    "descAr": "تشخيص دقيق لمشاعر الإحباط واليأس، وآليات عملية للنهوض مجدداً بقوة وثبات.",
    "descEn": "Diagnosing feelings of discouragement and despair with practical methods to rise again with strength.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "تطوير الذات",
    "categoryLabelEn": "Self Development",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/7.jpg",
    "tags": [
      "الإحباط | ياسر الحزيمي",
      "تطوير الذات"
    ]
  },
  {
    "id": "LbX9x5KfuE4",
    "videoId": "LbX9x5KfuE4",
    "titleAr": "ازاي تتعامل مع المشاكل والازمات",
    "titleEn": "How to Handle Problems & Crises",
    "descAr": "دليل عملي للتعامل مع الضغوط والصدمات المفاجئة بعقلانية وهدوء نفسي مدروس.",
    "descEn": "A grounded guide to navigating life",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "إدارة الأزمات",
    "categoryLabelEn": "Life Skills",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/8.jpg",
    "tags": [
      "ازاي تتعامل مع المشاكل والازمات",
      "إدارة الأزمات"
    ]
  },
  {
    "id": "cLOj2XEVV_U",
    "videoId": "cLOj2XEVV_U",
    "titleAr": "الثقه بالنفس",
    "titleEn": "Building Genuine Self-Confidence",
    "descAr": "كيف تبني تقديراً حقيقياً لذاتك بعيداً عن الغرور الزائف أو التردد المدمر.",
    "descEn": "How to cultivate grounded self-worth without falling into arrogance or crippling self-doubt.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "بناء الشخصية",
    "categoryLabelEn": "Self Development",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/9.jpg",
    "tags": [
      "الثقه بالنفس",
      "بناء الشخصية"
    ]
  },
  {
    "id": "wBfIWspteMo",
    "videoId": "wBfIWspteMo",
    "titleAr": "متي العلاقات تكون صحيحه",
    "titleEn": "When Are Relationships Truly Healthy?",
    "descAr": "معايير النضج في العلاقات، وكيف تختار من يستحق أن يشاركك مسيرة حياتك بأمان وصدق.",
    "descEn": "Recognizing emotional maturity in relationships and choosing companions who bring trust and growth.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "علاقات",
    "categoryLabelEn": "Relationships",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/11.jpg",
    "tags": [
      "متي العلاقات تكون صحيحه",
      "علاقات"
    ]
  },
  {
    "id": "xgda-KGBfMQ",
    "videoId": "xgda-KGBfMQ",
    "titleAr": "٧ حاجات مشتركين بين كل الناجحين | دروس أونلاين",
    "titleEn": "7 Habits Shared by All Successful People | Droos Online",
    "descAr": "يستعرض أحمد أبو زيد أهم 7 عادات مشتركة بين الناجحين في مختلف المجالات: الاهتمام بالصحة والرياضة، القراءة والتعلم المستمر، الالتزام بالروتين اليومي والانضباط، وقوة الاستمرارية.",
    "descEn": "Ahmed Abouzaid explores 7 core habits shared by successful individuals across fields: health and exercise, lifelong reading and learning, daily routine, discipline, and consistency.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "مهارات الحياة والنمو",
    "categoryLabelEn": "Personal Growth & Life Skills",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/xgda-KGBfMQ/hqdefault.jpg",
    "tags": [
      "٧ حاجات مشتركين بين كل الناجحين | دروس أونلاين",
      "مهارات الحياة والنمو"
    ]
  },
  {
    "id": "m3Ro6tIsndU",
    "videoId": "m3Ro6tIsndU",
    "titleAr": "أركان الشخصية القوية وإدارة الانفعالات | أ. ياسر الحزيمي",
    "titleEn": "The 4 Pillars of a Strong Personality & Emotional Mastery",
    "descAr": "شرح لأركان الشخصية القوية الأربعة: توكيد الذات، الثقة المرتبطة بالأداء، تقدير الذات، وتقبلها؛ موضحاً أن القوة الحقيقية تكمن في فن إدارة الانفعالات والتحكم بالمشاعر.",
    "descEn": "Breaks down the four pillars of a strong personality—self-assertion, performance confidence, self-esteem, and self-acceptance—showing that true strength is mastering one",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "الصحة النفسية",
    "categoryLabelEn": "Mental Health & Psychology",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/m3Ro6tIsndU/hqdefault.jpg",
    "tags": [
      "أركان الشخصية القوية وإدارة الانفعالات | أ. ياسر الحزيمي",
      "الصحة النفسية"
    ]
  },
  {
    "id": "rHokT2KpVB0",
    "videoId": "rHokT2KpVB0",
    "titleAr": "تطوير الذات وتزكية النفس بدون تشتت | أ. ياسر الحزيمي",
    "titleEn": "Self-Purification & Personal Growth Without Distraction",
    "descAr": "من بودكاست بدون ورق: يشرح أ. ياسر الحزيمي منهج تزكية النفس وتحمل مسؤولية التغيير دون تبرير، والفرق بين التواضع والغرور، وكيف يُبنى النضج بالتطبّع والعمل المستمر.",
    "descEn": "From the Bidon Waraq podcast: Yasser Al-Hazimi outlines how to purify and develop oneself without self-deception, embracing accountability, humility, and deliberate character building.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "تطوير الذات",
    "categoryLabelEn": "Self Development",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/rHokT2KpVB0/hqdefault.jpg",
    "tags": [
      "تطوير الذات وتزكية النفس بدون تشتت | أ. ياسر الحزيمي",
      "تطوير الذات"
    ]
  },
  {
    "id": "5qzKaozM8ks",
    "videoId": "5qzKaozM8ks",
    "titleAr": "اين الله",
    "titleEn": "Where Is Allah? Knowing Your Creator",
    "descAr": "تأملات عميقة في معرفة الله سبحانه وتعالى وعظمته وقربه من عباده وكيف يملأ الإيمان قلبك بالطمأنينة.",
    "descEn": "Deep reflections on knowing Allah, His majesty and closeness, and how true faith brings serenity to the heart.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "عقيدة وإيمان",
    "categoryLabelEn": "Islamic Studies & Faith",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/17.jpg",
    "tags": [
      "اين الله",
      "عقيدة وإيمان"
    ]
  },
  {
    "id": "LI99lWP1zac",
    "videoId": "LI99lWP1zac",
    "titleAr": "سلسله السيره النبويه",
    "titleEn": "The Prophetic Biography (Seerah) Series",
    "descAr": "رحلة ملهمة في تفاصيل حياة النبي صلى الله عليه وسلم وكيف واجه التحديات برحمة وشجاعة لا نظير لها.",
    "descEn": "An inspiring journey through the life of Prophet Muhammad (PBUH) and his timeless mercy, wisdom, and courage.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "السيرة العطرة",
    "categoryLabelEn": "Prophetic Biography",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/13.jpg",
    "tags": [
      "سلسله السيره النبويه",
      "السيرة العطرة"
    ]
  },
  {
    "id": "I1_1zFiNL4A",
    "videoId": "I1_1zFiNL4A",
    "titleAr": "ايه المشكله لو مش ملتزم",
    "titleEn": "What",
    "descAr": "حوار واقعي بدون تعالي يناقش ما يخسره الإنسان عندما يبتعد عن الالتزام الحقيقي وكيف يبدأ خطواته الأولى.",
    "descEn": "An honest, compassionate conversation about what we lose without genuine commitment and how to take your first steps.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "إيه المشكلة؟",
    "categoryLabelEn": "Eh El-Moshkela",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/12.jpg",
    "tags": [
      "ايه المشكله لو مش ملتزم",
      "إيه المشكلة؟"
    ]
  },
  {
    "id": "ejBKVRYtY_s",
    "videoId": "ejBKVRYtY_s",
    "titleAr": "قصص القران",
    "titleEn": "Stories of the Qur",
    "descAr": "بيشرحلك الحكم والمواعظ التي ذكرها ربنا سبحانه وتعالى في القرآن والابتلاءات التي تعرض لها الأنبياء والصحابة رضي الله عنهم أجمعين وكيف صبروا عليها.",
    "descEn": "Unpacks the timeless lessons and wisdom from Qur",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "قرآن كريم",
    "categoryLabelEn": "Noble Qur",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/15.jpg",
    "tags": [
      "قصص القران",
      "قرآن كريم"
    ]
  },
  {
    "id": "AjUo-SJ5TSA",
    "videoId": "AjUo-SJ5TSA",
    "titleAr": "ايه المشكله ف ال حب و الارتباط و date",
    "titleEn": "Eh El-Moshkela? On Love & Casual Dating",
    "descAr": "بودكاست بيوضحلك ليه حرم الإسلام الارتباط والعلاقة ما بين الولد والبنت بدون إطار شرعي (خطوبة أو زواج)، وبيشرح الأضرار النفسية والعاطفية بطريقة مقنعة وعقلانية.",
    "descEn": "Explains with empathy and reason why Islam sets clear boundaries around unmarried relationships to protect hearts and dignity.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "إيه المشكلة؟",
    "categoryLabelEn": "Relationships & Faith",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/16.jpg",
    "tags": [
      "ايه المشكله ف ال حب و الارتباط و date",
      "إيه المشكلة؟"
    ]
  },
  {
    "id": "vZZDe_BHt8g",
    "videoId": "vZZDe_BHt8g",
    "titleAr": "تجاره الدين مع أمير منير | بودكاست دروس",
    "titleEn": "Sincerity vs. Exploiting Religion | Amir Mounir",
    "descAr": "حلقة استثنائية تناقش إخلاص النية في الدعوة والعمل الصالح والتفريق بين الدعوة الصادقة والتربح الزائف.",
    "descEn": "An insightful discussion on sincerity in Da",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "دروس أونلاين",
    "categoryLabelEn": "Droos Podcast",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/4modify.jpg",
    "tags": [
      "تجاره الدين مع أمير منير | بودكاست دروس",
      "دروس أونلاين"
    ]
  },
  {
    "id": "5vGUZTWVpos",
    "videoId": "5vGUZTWVpos",
    "titleAr": "تشك في الاسلام",
    "titleEn": "Addressing Doubts About Islam",
    "descAr": "يجيب على أغلب التساؤلات والوساوس التي يحاول الشيطان إثارتها في عقل المسلم، ويوضح كيفية تثبيت القلب على اليقين والاطمئنان.",
    "descEn": "Addresses common questions and whispers of doubt, guiding you toward intellectual certainty and peace of mind.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "رد الشبهات",
    "categoryLabelEn": "Addressing Doubts",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/تشك ف الاسلام.jpg",
    "tags": [
      "تشك في الاسلام",
      "رد الشبهات"
    ]
  },
  {
    "id": "3kRDtIO6OYQ",
    "videoId": "3kRDtIO6OYQ",
    "titleAr": "الدنيا دار ابتلاء واعتبار لا دار جزاء | أ. ياسر الحزيمي",
    "titleEn": "This World Is a Place of Testing & Reflection | Yasser Al-Hazimi",
    "descAr": "يصحح أ. ياسر الحزيمي مفهوماً جوهرياً يفسر الابتلاءات والاختبارات في الحياة: أن الدنيا دار ابتلاء واعتبار وليست دار جزاء، وكيف تعبر من الحدث إلى المعنى لتصلح نظرتك وتبدأ حياة أوعى.",
    "descEn": "Yasser Al-Hazimi clarifies a foundational Islamic concept: this world is a place of testing and reflection (I",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "الدراسات الإسلامية والعقيدة",
    "categoryLabelEn": "Islamic Studies & Faith",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/3kRDtIO6OYQ/hqdefault.jpg",
    "tags": [
      "الدنيا دار ابتلاء واعتبار لا دار جزاء | أ. ياسر الحزيمي",
      "الدراسات الإسلامية والعقيدة"
    ]
  },
  {
    "id": "A5TJMkwFeUo",
    "videoId": "A5TJMkwFeUo",
    "titleAr": "إحنا بنعبد ربنا ليه؟ إيه لازمة العبادة | ياسر ممدوح",
    "titleEn": "Why Do We Worship Allah? The True Purpose of Worship | Yasser Mamdouh",
    "descAr": "يجيب ياسر ممدوح بعمق ووضوح عن الغاية الحقيقية من العبادات كالصلاة والصيام، موضحاً أنها ليست مجرد طقوس بل طريق لإخلاص القلب وتعلقه بالله وحده.",
    "descEn": "Yasser Mamdouh addresses the deeper purpose behind acts of worship like prayer and fasting, explaining how worship is a pathway to dedicating the heart sincerely to God alone.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "العبادات والخشوع",
    "categoryLabelEn": "Worship & Practices",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/A5TJMkwFeUo/hqdefault.jpg",
    "tags": [
      "إحنا بنعبد ربنا ليه؟ إيه لازمة العبادة | ياسر ممدوح",
      "العبادات والخشوع"
    ]
  },
  {
    "id": "vL6U567zRbo",
    "videoId": "vL6U567zRbo",
    "titleAr": "علمياً: هل العقل في القلب أم في الدماغ؟ | د. هيثم طلعت",
    "titleEn": "Scientifically: Is the Mind in the Heart or the Brain? | Dr. Haitham Talaat",
    "descAr": "يناقش د. هيثم طلعت بالأدلة العلمية والطبية شبهة مكان العقل بين القلب والدماغ، مفرقاً بين الوظيفة العصبية التنفيذية للدماغ وبين مركز المعنى والإدراك والوعي.",
    "descEn": "Dr. Haitham Talaat examines medical and philosophical perspectives on the heart vs. the brain, distinguishing the brain",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "رد الشبهات والعلم",
    "categoryLabelEn": "Islamic Studies & Faith",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/vL6U567zRbo/hqdefault.jpg",
    "tags": [
      "علمياً: هل العقل في القلب أم في الدماغ؟ | د. هيثم طلعت",
      "رد الشبهات والعلم"
    ]
  },
  {
    "id": "7VxCTTEP1bM",
    "videoId": "7VxCTTEP1bM",
    "titleAr": "سر السجود والخشوع الذي يصلح حالك ويرتب حياتك | د. أحمد العربي",
    "titleEn": "The Secret of Sujood & Humility in Prayer | Dr. Ahmed Al-Arabi",
    "descAr": "يتأمل د. أحمد العربي في معاني السجود والخشوع في الصلاة، وسر القرب من الله في لحظة الانكسار والدعاء، وكيف يفرّج الله بها الكروب ويصلح بها القلب والحياة.",
    "descEn": "Dr. Ahmed Al-Arabi reflects on the profound spiritual power of prostration (Sujood) in prayer—humbling oneself before Allah, calling upon Him sincerely, and finding relief from life",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "العبادات والخشوع",
    "categoryLabelEn": "Worship & Practices",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/7VxCTTEP1bM/hqdefault.jpg",
    "tags": [
      "سر السجود والخشوع الذي يصلح حالك ويرتب حياتك | د. أحمد العربي",
      "العبادات والخشوع"
    ]
  },
  {
    "id": "-GmdqdNhk-c",
    "videoId": "-GmdqdNhk-c",
    "titleAr": "الاختراع الأخير: الذكاء الاصطناعي ومستقبل العالم | أحمد الغندور",
    "titleEn": "The Last Invention: AI & The Future of Humanity | Ahmed El-Ghandour",
    "descAr": "الحلقة الأولى من سلسلة «عقل في ضيافة الغندور»: نظرة معرفية شيّقة على تسارع الذكاء الاصطناعي التوليدي، وتحوّله لبنية تحتية عالمية، وتساؤلات حول مستقبله وتأثيره على الإنسان والعمل.",
    "descEn": "Episode 1 of",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "الوعي العام والثقافة",
    "categoryLabelEn": "General Awareness & Education",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/-GmdqdNhk-c/hqdefault.jpg",
    "tags": [
      "الاختراع الأخير: الذكاء الاصطناعي ومستقبل العالم | أحمد الغندور",
      "الوعي العام والثقافة"
    ]
  },
  {
    "id": "nxXfj0DUJjw",
    "videoId": "nxXfj0DUJjw",
    "titleAr": "إيه المشكلة؟ في الغنى والمال",
    "titleEn": "Eh El-Moshkela? On Wealth & Ambition",
    "descAr": "حلقة ثرية من بودكاست «إيه المشكلة» تناقش علاقة الإنسان بالمال، وتأثير مقارنات السوشيال ميديا على الشباب، وكيف نوازن بين السعي المشروع للغنى وبين القناعة وأولويات الدين.",
    "descEn": "An insightful Eh El-Moshkela episode examining how social media distorts our view of wealth and how to balance lawful worldly ambition with contentment and purpose.",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "الوعي المالي والديني",
    "categoryLabelEn": "General Awareness & Education",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/nxXfj0DUJjw/hqdefault.jpg",
    "tags": [
      "إيه المشكلة؟ في الغنى والمال",
      "الوعي المالي والديني"
    ]
  },
  {
    "id": "8ViQ2SJHbNA",
    "videoId": "8ViQ2SJHbNA",
    "titleAr": "إيه المشكلة؟ في الدراسة وبناء الشخصية",
    "titleEn": "Eh El-Moshkela? On Studying & Character Building",
    "descAr": "تناقش الحلقة كيف تبني الدراسة شخصيتك ومهاراتك القيادية واستقلالك في اتخاذ القرار بعيداً عن التبعية، مع التأكيد على قيمة الأخلاق والتوفيق من الله في الرخاء قبل الامتحانات.",
    "descEn": "Explores studying beyond grades: overcoming peer pressure, cultivating independent decision-making and leadership early, and seeking Allah",
    "authorAr": "معاذ الديباوي",
    "authorEn": "Moaz Eldebawy",
    "category": "faith",
    "categoryLabelAr": "الدراسة ومهارات الحياة",
    "categoryLabelEn": "Personal Growth & Life Skills",
    "page": "index.html",
    "addedAt": null,
    "featured": false,
    "thumb": "https://i.ytimg.com/vi/8ViQ2SJHbNA/hqdefault.jpg",
    "tags": [
      "إيه المشكلة؟ في الدراسة وبناء الشخصية",
      "الدراسة ومهارات الحياة"
    ]
  },
  {
    "id": "8CZzT1s4b2U",
    "videoId": "8CZzT1s4b2U",
    "titleAr": "ايه المشكلة؟ في الكذب",
    "titleEn": "Eh El-Moshkela? On Lying",
    "descAr": "تحليل خطورة الكذب وتبريراته الواهية، وكيف يهدم الصدق الحواجز النفسية مع النفس والناس.",
    "descEn": "Examining the dangers of dishonesty, its common excuses, and how truthfulness builds authentic peace.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 1",
    "categoryLabelEn": "Episode 1",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po1.jpg",
    "tags": [
      "ايه المشكلة؟ في الكذب",
      "الحلقة 1"
    ]
  },
  {
    "id": "nnQ8qvpSPO8",
    "videoId": "nnQ8qvpSPO8",
    "titleAr": "ايه المشكلة؟ لو مبنصليش",
    "titleEn": "Eh El-Moshkela? If We Don",
    "descAr": "لماذا الصلاة هي عماد الروح وسر استقامة اليوم، وكيف تتغلب على ثقلها وتبدأ بركعتين بصدق.",
    "descEn": "Why prayer is the pillar of spiritual balance and how to overcome heaviness and restart sincerely.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 3",
    "categoryLabelEn": "Episode 3",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po3.jpg",
    "tags": [
      "ايه المشكلة؟ لو مبنصليش",
      "الحلقة 3"
    ]
  },
  {
    "id": "4Z0L1d-I6sU",
    "videoId": "4Z0L1d-I6sU",
    "titleAr": "ايه المشكلة؟ في الدعاء",
    "titleEn": "Eh El-Moshkela? On Supplication (Du",
    "descAr": "كيف تدعو بيقين واطمئنان، وماذا تفعل حين يتأخر الجواب، وحقيقة الصلة العميقة بالله.",
    "descEn": "How to call upon Allah with certainty and trust, even when answers seem delayed.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 4",
    "categoryLabelEn": "Episode 4",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po4.jpg",
    "tags": [
      "ايه المشكلة؟ في الدعاء",
      "الحلقة 4"
    ]
  },
  {
    "id": "3u5uYyGKYU8",
    "videoId": "3u5uYyGKYU8",
    "titleAr": "ايه المشكلة؟ لو مفيش دين",
    "titleEn": "Eh El-Moshkela? If There Were No Religion",
    "descAr": "سؤال فلسفي وواقعي: كيف ستبدو الحياة والمعايير الأخلاقية والمصير الإنساني لو غاب الوحي؟",
    "descEn": "A philosophical and practical reflection on ethics, meaning, and human purpose without divine guidance.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 5",
    "categoryLabelEn": "Episode 5",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po5.jpg",
    "tags": [
      "ايه المشكلة؟ لو مفيش دين",
      "الحلقة 5"
    ]
  },
  {
    "id": "qHXCBBBXes4",
    "videoId": "qHXCBBBXes4",
    "titleAr": "ايه المشكلة؟ في التوبه",
    "titleEn": "Eh El-Moshkela? On Repentance (Tawbah)",
    "descAr": "باب الرحمة المفتوح دائماً، وكيف لا تيأس مهما تكرر الذنب، وشروط التوبة النصوح الصادقة.",
    "descEn": "The ever-open door of mercy, overcoming despair after repeated mistakes, and sincere repentance.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 6",
    "categoryLabelEn": "Episode 6",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po6.jpg",
    "tags": [
      "ايه المشكلة؟ في التوبه",
      "الحلقة 6"
    ]
  },
  {
    "id": "zOOI-rEwlEU",
    "videoId": "zOOI-rEwlEU",
    "titleAr": "ايه المشكلة؟ في يوم القيامة",
    "titleEn": "Eh El-Moshkela? On the Day of Judgment",
    "descAr": "تذكير بمشاهد اليوم الآخر، وكيف يكون استحضار لقاء الله دافعاً للعمل والإحسان في الدنيا.",
    "descEn": "Reflecting on the Hereafter and how remembering our ultimate accountability inspires goodness today.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 7",
    "categoryLabelEn": "Episode 7",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po7.jpg",
    "tags": [
      "ايه المشكلة؟ في يوم القيامة",
      "الحلقة 7"
    ]
  },
  {
    "id": "9WCUKI4aKUc",
    "videoId": "9WCUKI4aKUc",
    "titleAr": "ايه المشكلة؟ في التنمر",
    "titleEn": "Eh El-Moshkela? On Bullying",
    "descAr": "جراح الكلمات السامة، وأثر التنمر على الضحية، وكيف يصون المسلم لسانه عن أذى الناس.",
    "descEn": "The deep scars left by hurtful words and how Islam calls us to guard our speech and honor others.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 8",
    "categoryLabelEn": "Episode 8",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po8.jpg",
    "tags": [
      "ايه المشكلة؟ في التنمر",
      "الحلقة 8"
    ]
  },
  {
    "id": "G55sj785Jiw",
    "videoId": "G55sj785Jiw",
    "titleAr": "ايه المشكلة؟ في الفتور والانتكاس",
    "titleEn": "Eh El-Moshkela? On Spiritual Burnout & Relapse",
    "descAr": "أسباب تراجع الحماس والالتزام، وخطة عملية لاستعادة الهمة والعودة للثبات بعد الانتكاسة.",
    "descEn": "Understanding why spiritual motivation dips and practical steps to recover and stay steady.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 9",
    "categoryLabelEn": "Episode 9",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po9.jpg",
    "tags": [
      "ايه المشكلة؟ في الفتور والانتكاس",
      "الحلقة 9"
    ]
  },
  {
    "id": "IhfCZQSQMBM",
    "videoId": "IhfCZQSQMBM",
    "titleAr": "ايه المشكلة؟ في الدعوه الي الله",
    "titleEn": "Eh El-Moshkela? On Calling Others to Goodness (Da",
    "descAr": "كيف تدعو الناس بالقدوة والرحمة والأسلوب الحسن بعيداً عن الغلظة والتشدد المنفر.",
    "descEn": "Inviting others through good character, mercy, and wisdom rather than harshness.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 10",
    "categoryLabelEn": "Episode 10",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/bodcast 2 modify.jpg",
    "tags": [
      "ايه المشكلة؟ في الدعوه الي الله",
      "الحلقة 10"
    ]
  },
  {
    "id": "1bwr-SqIXHg",
    "videoId": "1bwr-SqIXHg",
    "titleAr": "ايه المشكلة؟ في الغربه والهجرة",
    "titleEn": "Eh El-Moshkela? On Living Abroad & Migration",
    "descAr": "تحديات السفر والغربة عن الوطن، وكيف تحافظ على هويتك ودينك وقيمك في المجتمعات الغربية.",
    "descEn": "Navigating the challenges of living abroad while preserving faith, identity, and family values.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 11",
    "categoryLabelEn": "Episode 11",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po11.jpg",
    "tags": [
      "ايه المشكلة؟ في الغربه والهجرة",
      "الحلقة 11"
    ]
  },
  {
    "id": "CSXzHAHVod8",
    "videoId": "CSXzHAHVod8",
    "titleAr": "ايه المشكلة؟ في الترندات",
    "titleEn": "Eh El-Moshkela? On Chasing Viral Trends",
    "descAr": "هوس الركوب وراء التريند والبحث عن الشهرة السريعة على حساب المبادئ والكرامة الشخصية.",
    "descEn": "The obsession with viral fame at the expense of personal dignity, privacy, and principles.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 12",
    "categoryLabelEn": "Episode 12",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po12.jpg",
    "tags": [
      "ايه المشكلة؟ في الترندات",
      "الحلقة 12"
    ]
  },
  {
    "id": "UNpLnJmBHkg",
    "videoId": "UNpLnJmBHkg",
    "titleAr": "ايه المشكلة؟ في التبرج",
    "titleEn": "Eh El-Moshkela? On Modesty & Hijab",
    "descAr": "فلسفة الحجاب والعفاف في الإسلام، وكيف يصون الحجاب وقار المرأة وحريتها الحقيقية.",
    "descEn": "Understanding the deeper philosophy of modesty and dignity in Islam.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 13",
    "categoryLabelEn": "Episode 13",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po13.jpg",
    "tags": [
      "ايه المشكلة؟ في التبرج",
      "الحلقة 13"
    ]
  },
  {
    "id": "qyh5aSlv12I",
    "videoId": "qyh5aSlv12I",
    "titleAr": "ايه المشكلة؟ في الاحتفال بالكريسماس",
    "titleEn": "Eh El-Moshkela? On Celebrating Religious Holidays",
    "descAr": "توضيح الهوية الإسلامية والضوابط الشرعية في التعامل مع الأعياد الدينية لغير المسلمين.",
    "descEn": "Clarifying Islamic identity and respectful guidelines regarding non-Islamic religious festivals.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 14",
    "categoryLabelEn": "Episode 14",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po14.jpg",
    "tags": [
      "ايه المشكلة؟ في الاحتفال بالكريسماس",
      "الحلقة 14"
    ]
  },
  {
    "id": "XqDe0Wgdt6M",
    "videoId": "XqDe0Wgdt6M",
    "titleAr": "ايه المشكلة؟ في الزواج",
    "titleEn": "Eh El-Moshkela? On Marriage",
    "descAr": "تيسير الزواج، ومعايير الاختيار السليم، وكيف نبني بيتاً قائماً على المودة والسكينة.",
    "descEn": "Making marriage easier, wise criteria for choosing a spouse, and building a home of tranquility.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 15",
    "categoryLabelEn": "Episode 15",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po15.jpg",
    "tags": [
      "ايه المشكلة؟ في الزواج",
      "الحلقة 15"
    ]
  },
  {
    "id": "Qbb_E18p3i8",
    "videoId": "Qbb_E18p3i8",
    "titleAr": "ايه المشكلة؟ في الرزق",
    "titleEn": "Eh El-Moshkela? On Provision (Rizq)",
    "descAr": "مفهوم التوكل والأخذ بالأسباب، وكيف تطمئن إلى أن رزقك مقسوم ولن يفوتك ما كتبه الله لك.",
    "descEn": "Balancing effort with deep reliance on Allah, finding peace knowing what is written for you will never miss you.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 16",
    "categoryLabelEn": "Episode 16",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po16.jpg",
    "tags": [
      "ايه المشكلة؟ في الرزق",
      "الحلقة 16"
    ]
  },
  {
    "id": "yy5NAjfgFIQ",
    "videoId": "yy5NAjfgFIQ",
    "titleAr": "ايه المشكلة؟ في التفاهة",
    "titleEn": "Eh El-Moshkela? On Triviality & Shallow Content",
    "descAr": "عصر سيطرة التفاهة على المنصات، وكيف تحمي عقلك من تسطيح الوعي وتضييع الأوقات في اللاشيء.",
    "descEn": "Protecting your mind and time from shallow trends and meaningless digital consumption.",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 17",
    "categoryLabelEn": "Episode 17",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po17.jpg",
    "tags": [
      "ايه المشكلة؟ في التفاهة",
      "الحلقة 17"
    ]
  },
  {
    "id": "7Yazl_GXvSs",
    "videoId": "7Yazl_GXvSs",
    "titleAr": "ايه المشكلة؟ في الرياء",
    "titleEn": "Eh El-Moshkela? On Showing Off (Riyaa)",
    "descAr": "فخ طلب إعجاب الناس ومدحهم، وكيف تجاهد نفسك لتكون أعمالك خالصة لوجه الله وحده.",
    "descEn": "Avoiding the trap of seeking people",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 18",
    "categoryLabelEn": "Episode 18",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po18.jpg",
    "tags": [
      "ايه المشكلة؟ في الرياء",
      "الحلقة 18"
    ]
  },
  {
    "id": "G7PyaAorVHE",
    "videoId": "G7PyaAorVHE",
    "titleAr": "ايه المشكلة؟ في الموسقي والاغاني",
    "titleEn": "Eh El-Moshkela? On Music & Songs",
    "descAr": "نقاش هادئ حول أثر الموسيقى والأغاني على القلب والروح والبدائل القرآنية التي تملأ القلب سلاماً.",
    "descEn": "A calm conversation on how music affects the heart and discovering Qur",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 19",
    "categoryLabelEn": "Episode 19",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/po19.jpg",
    "tags": [
      "ايه المشكلة؟ في الموسقي والاغاني",
      "الحلقة 19"
    ]
  },
  {
    "id": "kZvYIje_y2w",
    "videoId": "kZvYIje_y2w",
    "titleAr": "ايه المشكلة؟ في غض البصر",
    "titleEn": "Eh El-Moshkela? On Lowering the Gaze",
    "descAr": "حلاوة الإيمان التي يجدها من غض بصره لله، وكيف تحمي نقاء قلبك وخيالك في زمن كثرت فيه الفتن.",
    "descEn": "The sweetness of faith found in guarding one",
    "authorAr": "بودكاستك",
    "authorEn": "Podcastak",
    "category": "podcast",
    "categoryLabelAr": "الحلقة 20",
    "categoryLabelEn": "Episode 20",
    "page": "right-sidebar.html",
    "addedAt": null,
    "featured": false,
    "thumb": "images/bodcast 1 modify.jpg",
    "tags": [
      "ايه المشكلة؟ في غض البصر",
      "الحلقة 20"
    ]
  }
];

  // --- Favorites Management (localStorage: podcastak_favs) ---
  const FAV_STORAGE_KEY = 'podcastak_favs';

  window.getFavorites = function () {
    try {
      const data = localStorage.getItem(FAV_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (_) {
      return [];
    }
  };

  window.isFavorite = function (videoId) {
    if (!videoId) return false;
    const favs = window.getFavorites();
    return favs.indexOf(videoId) !== -1;
  };

  window.toggleFavorite = function (videoId) {
    if (!videoId) return false;
    let favs = window.getFavorites();
    const idx = favs.indexOf(videoId);
    let isNowFav = false;

    if (idx !== -1) {
      favs.splice(idx, 1);
      isNowFav = false;
    } else {
      favs.push(videoId);
      isNowFav = true;
    }

    try {
      localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(favs));
    } catch (e) {
      console.warn('Could not save favorites to localStorage:', e);
    }

    // Update all matching star buttons in DOM
    document.querySelectorAll('[data-fav-id="' + videoId + '"], [data-video-id="' + videoId + '"].card-fav-btn').forEach(function (btn) {
      if (btn.classList.contains('card-fav-btn') || btn.classList.contains('favorite-btn')) {
        btn.classList.toggle('is-fav', isNowFav);
        btn.setAttribute('aria-pressed', isNowFav ? 'true' : 'false');
        var lang = (document.documentElement.getAttribute('lang') || 'ar').toLowerCase();
        var label = isNowFav
          ? (lang === 'en' ? 'Remove from favorites' : 'إزالة من المفضلة')
          : (lang === 'en' ? 'Add to favorites' : 'إضافة إلى المفضلة');
        btn.setAttribute('title', label);
        btn.setAttribute('aria-label', label);
      }
    });

    // Notify document of change
    window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: { videoId: videoId, isFavorite: isNowFav, total: favs.length } }));

    // Show toast feedback
    var currentLang = (document.documentElement.getAttribute('lang') || 'ar').toLowerCase();
    var msg = isNowFav
      ? (currentLang === 'en' ? 'Added to favorites ⭐' : 'تمت الإضافة إلى المفضلة ⭐')
      : (currentLang === 'en' ? 'Removed from favorites' : 'تم الحذف من المفضلة');
    window.showToast(msg, isNowFav ? '⭐' : '🗑️');

    return isNowFav;
  };

  // --- Dynamic "New Video" Badge Formatter ---
  window.formatNewBadge = function (dateStr, lang) {
    if (!dateStr) return null;
    var added = new Date(dateStr);
    if (isNaN(added.getTime())) return null;

    var now = new Date();
    // Reset hours to compare calendar days accurately
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var addedDay = new Date(added.getFullYear(), added.getMonth(), added.getDate());
    var diffMs = today.getTime() - addedDay.getTime();
    var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 0 || diffDays > 30) {
      return null; // older than 30 days
    }

    lang = (lang || document.documentElement.getAttribute('lang') || 'ar').toLowerCase();
    if (lang === 'en') {
      if (diffDays === 0) return '✨ New today';
      if (diffDays === 1) return '✨ New · 1 day ago';
      return '✨ New · ' + diffDays + ' days ago';
    } else {
      // Warm Egyptian Arabic
      if (diffDays === 0) return '✨ جديد النهاردة';
      if (diffDays === 1) return '✨ جديد من يوم';
      if (diffDays === 2) return '✨ جديد من يومين';
      if (diffDays <= 10) return '✨ جديد من ' + diffDays + ' أيام';
      return '✨ جديد من ' + diffDays + ' يوم';
    }
  };

  // --- Image Fallback System (SVG Data URIs) ---
  window.getFallbackThumbnail = function (category) {
    var cat = category || 'default';
    var bg1 = '#0f172a';
    var bg2 = '#047857';
    var title = 'بودكاستك';
    var icon = '🎙️';

    if (cat.indexOf('program') !== -1 || cat.indexOf('code') !== -1) {
      bg2 = '#2563eb';
      title = 'برمجة وويب';
      icon = '💻';
    } else if (cat.indexOf('ai') !== -1) {
      bg2 = '#7c3aed';
      title = 'ذكاء اصطناعي';
      icon = '🤖';
    } else if (cat.indexOf('video') !== -1 || cat.indexOf('media') !== -1) {
      bg2 = '#e11d48';
      title = 'مونتاج وميديا';
      icon = '🎬';
    } else if (cat.indexOf('freelance') !== -1 || cat.indexOf('market') !== -1) {
      bg2 = '#d97706';
      title = 'عمل حر وتسويق';
      icon = '🚀';
    } else if (cat.indexOf('faith') !== -1 || cat.indexOf('islamic') !== -1) {
      bg2 = '#059669';
      title = 'دروس إيمانية';
      icon = '🌿';
    } else if (cat.indexOf('book') !== -1) {
      bg2 = '#0891b2';
      title = 'كتب وقراءات';
      icon = '📚';
    }

    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="640" height="360">' +
      '<defs>' +
        '<linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">' +
          '<stop offset="0%" stop-color="' + bg1 + '"/>' +
          '<stop offset="100%" stop-color="' + bg2 + '"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<rect width="640" height="360" fill="url(#g)"/>' +
      '<circle cx="320" cy="150" r="52" fill="rgba(255,255,255,0.12)"/>' +
      '<text x="320" y="165" font-size="42" text-anchor="middle">' + icon + '</text>' +
      '<text x="320" y="240" font-family="sans-serif" font-weight="bold" font-size="24" fill="#ffffff" text-anchor="middle">' + title + '</text>' +
      '<text x="320" y="270" font-family="sans-serif" font-size="14" fill="rgba(255,255,255,0.75)" text-anchor="middle">منصة بودكاستك التعليمية</text>' +
    '</svg>';

    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  };

  // --- Arabic Normalization for Keystroke Search ---
  window.normalizeArabic = function (str) {
    if (!str) return '';
    return String(str)
      .toLowerCase()
      .replace(/[\u064B-\u065F\u0670]/g, '') // tashkeel
      .replace(/[إأآا]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/[ىي]/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .replace(/ـ/g, '') // tatweel
      .replace(/[^\u0600-\u06FFa-zA-Z0-9]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // --- Toast Notification Feedback System ---
  var toastTimeout = null;
  window.showToast = function (message, icon) {
    var toast = document.getElementById('podcastak-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'podcastak-toast';
      toast.className = 'podcastak-toast';
      document.body.appendChild(toast);
    }

    toast.innerHTML = (icon ? '<span class="toast-icon">' + icon + '</span>' : '') +
      '<span class="toast-msg">' + message + '</span>';

    toast.classList.add('visible');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toast.classList.remove('visible');
    }, 2800);
  };

  // --- Render Favorite Stars on existing static cards ---
  window.initFavoriteButtons = function () {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
      var ytLink = card.querySelector('a[href*="youtu.be/"], a[href*="youtube.com/"]');
      if (!ytLink) return;

      var match = ytLink.href.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/);
      if (!match) return;
      var videoId = match[1];

      var mediaBox = card.querySelector('.card-media');
      if (mediaBox) {
        var existingBtn = mediaBox.querySelector('.card-fav-btn');
        if (!existingBtn) {
          var favBtn = document.createElement('button');
          favBtn.type = 'button';
          favBtn.className = 'card-fav-btn' + (window.isFavorite(videoId) ? ' is-fav' : '');
          favBtn.setAttribute('data-fav-id', videoId);
          favBtn.setAttribute('data-video-id', videoId);
          var lang = (document.documentElement.getAttribute('lang') || 'ar').toLowerCase();
          var label = window.isFavorite(videoId)
            ? (lang === 'en' ? 'Remove from favorites' : 'إزالة من المفضلة')
            : (lang === 'en' ? 'Add to favorites' : 'إضافة إلى المفضلة');
          favBtn.setAttribute('title', label);
          favBtn.setAttribute('aria-label', label);
          favBtn.setAttribute('aria-pressed', window.isFavorite(videoId) ? 'true' : 'false');
          favBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
          mediaBox.appendChild(favBtn);
        } else {
          if (!existingBtn.getAttribute('data-video-id')) existingBtn.setAttribute('data-video-id', videoId);
          if (!existingBtn.getAttribute('data-fav-id')) existingBtn.setAttribute('data-fav-id', videoId);
          existingBtn.classList.toggle('is-fav', window.isFavorite(videoId));
          existingBtn.setAttribute('aria-pressed', window.isFavorite(videoId) ? 'true' : 'false');
        }
      }
    });
  };

  // Delegated click handler for all favorite buttons across the entire website
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.card-fav-btn');
    if (!btn) return;
    if (btn.closest('#fav-grid')) return; // handled by fav.html renderer
    e.preventDefault();
    e.stopPropagation();
    var videoId = btn.getAttribute('data-video-id') || btn.getAttribute('data-fav-id');
    if (!videoId) {
      var card = btn.closest('.card');
      if (card) {
        var ytLink = card.querySelector('a[href*="youtu.be/"], a[href*="youtube.com/"]');
        if (ytLink) {
          var m = ytLink.href.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/);
          if (m) videoId = m[1];
        }
      }
    }
    if (videoId) {
      window.toggleFavorite(videoId);
    }
  });

  // --- Dynamic New Badges Refresh ---
  window.refreshNewBadges = function () {
    var lang = (document.documentElement.getAttribute('lang') || 'ar').toLowerCase();
    document.querySelectorAll('[data-added-at]').forEach(function (badge) {
      var dateStr = badge.getAttribute('data-added-at');
      var text = window.formatNewBadge(dateStr, lang);
      if (text) {
        badge.textContent = text;
        badge.style.display = 'inline-flex';
      } else {
        badge.style.display = 'none';
      }
    });
  };

  // --- Global Image Fallback Binder ---
  window.initImageFallbacks = function () {
    document.querySelectorAll('img').forEach(function (img) {
      img.addEventListener('error', function () {
        this.onerror = null;
        var cat = this.getAttribute('data-category') || 'default';
        this.src = window.getFallbackThumbnail(cat);
      });
    });
  };

  // Self-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      window.initFavoriteButtons();
      window.refreshNewBadges();
      window.initImageFallbacks();
    });
  } else {
    window.initFavoriteButtons();
    window.refreshNewBadges();
    window.initImageFallbacks();
  }
})();
