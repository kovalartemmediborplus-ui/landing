import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroClinic from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Практична мамологія 2026 — семінар БПР у Києві" },
      {
        name: "description",
        content:
          "Мультидисциплінарний семінар БПР «Практична мамологія: від знахідки до вірного клінічного рішення». Київ, 25–26 червня 2026. 38 балів БПР.",
      },
      { property: "og:title", content: "Практична мамологія 2026 — семінар БПР" },
      {
        property: "og:description",
        content:
          "Дводенний інтенсив для лікарів: діагностика, BI-RADS, біопсії під УЗД, клінічні алгоритми. Київ, 25–26 червня 2026.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const navLinks = [
  { href: "#about", label: "Про курс" },
  { href: "#advantages", label: "Переваги" },
  { href: "#audience", label: "Для кого" },
  { href: "#program", label: "Програма" },
  { href: "#lecturers", label: "Лектори" },
  { href: "#pricing", label: "Вартість" },
  { href: "#venue", label: "Місце" },
  { href: "#contacts", label: "Контакти" },
];

const advantages = [
  {
    title: "Міждисциплінарний підхід",
    text: "Об'єднуємо знання з рентгенології, онкохірургії, гінекології та патоморфології для комплексного погляду на патологію молочної залози.",
  },
  {
    title: "Експерти-практики",
    text: "Лекції проводять провідні фахівці України з міжнародними сертифікатами FEBS, ESR, EUSOBI та багаторічним клінічним досвідом.",
  },
  {
    title: "Сучасні протоколи",
    text: "Програма побудована на актуальних BI-RADS алгоритмах, доказовій медицині та сучасних міжнародних клінічних рекомендаціях.",
  },
  {
    title: "Реальна практика",
    text: "Самостійне виконання тонкоголкових та трепан-біопсій під УЗД-контролем під наглядом викладачів у другий день курсу.",
  },
  {
    title: "38 балів БПР",
    text: "Два офіційні сертифікати безперервного професійного розвитку — 18 та 20 балів. Захід зареєстрований МОЗ України.",
  },
  {
    title: "Професійна мережа",
    text: "Дружня вечеря з лекторами та дискусії з колегами різних спеціальностей у теплій неформальній атмосфері.",
  },
];

const audience = [
  "Терапія, ультразвукова діагностика",
  "Акушерство та гінекологія",
  "Клінічна онкологія",
  "Онкохірургія",
  "Пластична та загальна хірургія",
  "Рентгенологія",
  "Організація і управління охороною здоров'я",
];

const day1 = [
  { time: "09:00–09:15", title: "Привітальне слово та організаційні питання", speaker: "Помінчук Д.В.", desc: "Огляд структури семінару, ключових клінічних акцентів та очікуваних результатів навчання." },
  { time: "09:15–09:45", title: "Анатомія та фізіологія МЗ. Лактаційний та нелактаційний мастит", speaker: "Шевчук Т.С.", desc: "Систематизація знань щодо анатомічних та функціональних особливостей молочної залози." },
  { time: "09:45–10:15", title: "Гормональна регуляція та вплив на доброякісні зміни", speaker: "Малова Ю.О.", desc: "Роль гормональних факторів та міждисциплінарна взаємодія мамолога і гінеколога." },
  { time: "10:15–11:00", title: "Доброякісна патологія: класифікація, діагностика, лікування", speaker: "Шевчук Т.С.", desc: "Сучасні алгоритми ведення пацієнток відповідно до клінічних рекомендацій." },
  { time: "11:00–11:30", title: "Естетика грудної залози та пластична хірургія", speaker: "Абдалла К.М.", desc: "Можливості корекції форми МЗ та поєднання з видаленням доброякісних утворень." },
  { time: "11:30–11:50", title: "Кава-брейк та дискусія", speaker: "", desc: "" },
  { time: "12:20–12:30", title: "Мамографічне дослідження та його різновиди", speaker: "Гурандо А.В.", desc: "Показання та діагностичні можливості різних видів мамографії." },
  { time: "12:30–12:50", title: "МРТ молочних залоз", speaker: "Гурандо А.В.", desc: "Сучасні алгоритми ведення пацієнток відповідно до клінічних рекомендацій." },
  { time: "12:50–13:00", title: "Спектральна мамографія з внутрішньовенним контрастуванням", speaker: "Галішина Г.О.", desc: "Сучасний метод розширеної діагностики молочної залози." },
  { time: "13:00–13:30", title: "Ультразвукове обстеження молочних залоз", speaker: "Галішина Г.О.", desc: "Показання, можливості та обмеження ультразвукової діагностики." },
  { time: "14:30–15:00", title: "Ведення пацієнтки з верифікованими доброякісними утвореннями", speaker: "Помінчук Д.В.", desc: "Діагностична тактика та клінічні рішення при підтвердженій доброякісній патології." },
  { time: "15:00–15:30", title: "Вплив гормональної терапії на МЗ. Вагітність і РМЗ", speaker: "Малова Ю.О.", desc: "Міждисциплінарний підхід до ведення пацієнток на гормональній терапії та під час вагітності." },
  { time: "15:30–16:00", title: "Патологія МЗ: практичний гайд з патогістології для хірургів", speaker: "Слісаренко М.В.", desc: "Інтерпретація патогістологічних висновків у щоденній клінічній практиці." },
  { time: "16:00–16:30", title: "Діагностичні алгоритми при підтвердженні діагнозу РМЗ", speaker: "Помінчук Д.В.", desc: "Покроковий алгоритм дій після встановлення діагнозу раку молочної залози." },
  { time: "17:00", title: "Дружня вечеря та дискусія з лекторами", speaker: "", desc: "Неформальне спілкування та обмін досвідом у теплій атмосфері." },
];

const day2 = [
  { time: "09:00–13:00", title: "Прийом пацієнта мамологічного профілю: алгоритм дій", speaker: "Помінчук Д.В., Шевчук Т.С.", desc: "Послідовність обстеження, визначення діагностичної тактики та прийняття клінічних рішень." },
  { time: "09:00–13:00", title: "Практична робота в мамографічному кабінеті", speaker: "Галішина Г.О., Гурандо А.В.", desc: "Інтерпретація реальних мамографічних зображень та формування висновків відповідно до BI-RADS." },
  { time: "09:00–13:00", title: "Практична робота в кабінеті УЗД", speaker: "Галішина Г.О., Гурандо А.В.", desc: "Аналіз клінічних випадків, співставлення УЗД-картини з іншими методами візуалізації." },
  { time: "13:00–13:30", title: "Кава-брейк та дискусія", speaker: "", desc: "" },
  { time: "13:30–15:00", title: "Виконання тонкоголкових та трепан-біопсій під УЗД-контролем", speaker: "Помінчук Д.В., Шевчук Т.С.", desc: "Самостійне виконання процедур під наглядом викладачів із розбором технічних нюансів." },
  { time: "15:00", title: "Завершення циклу. Питання та обговорення", speaker: "", desc: "" },
];

const lecturers = [
  { initials: "ПД", name: "Помінчук Денис Володимирович", title: "Онкохірург-мамолог, к.м.н.", bio: "Віце-президент всеукраїнської асоціації UPRADAS, пластичний хірург." },
  { initials: "ШТ", name: "Шевчук Тетяна Сергіївна", title: "Онкохірург, мамолог", bio: "Спеціалізований мамологічний центр. Fellow of the European Board of Surgery (FEBS)." },
  { initials: "ГА", name: "Гурандо Андрій В'ячеславович", title: "PhD, лікар-рентгенолог", bio: "Асистент кафедри радіології НУОЗ України ім. П.Л. Шупика, УЗД-діагностика." },
  { initials: "ГГ", name: "Галішина Ганна Олександрівна", title: "Завідувачка діагностичного відділення", bio: "Мамологічний центр. Сертифікований рентгенолог. Член ESR, EUSOBI, АРУ, УАФУД." },
  { initials: "МЮ", name: "Малова Юлія Олександрівна", title: "Акушер-гінеколог, к.м.н.", bio: "Лікар вищої категорії, репродуктолог, гінеколог-ендокринолог центру «Мати та дитина»." },
  { initials: "АК", name: "Абдалла Карім Махмудович", title: "Онкохірург, мамолог", bio: "Пластична хірургія, естетична корекція форми молочної залози." },
  { initials: "СМ", name: "Слісаренко Марина Віталіївна", title: "Лікар-патологоанатом", bio: "Медична лабораторія CSD. Інтерпретація патогістологічних досліджень." },
];

const included = [
  "Участь у двох повноцінних навчальних днях",
  "Теоретичний та практичний модулі",
  "Робота з реальними клінічними кейсами",
  "Практичне відпрацювання біопсій під УЗД-контролем",
  "Інтерпретація мамографічних та УЗД-зображень",
  "Роздаткові матеріали",
  "Кава-брейки та дружня вечеря",
  "Два сертифікати учасника — 18 та 20 балів БПР",
];

function LandingPage() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const schedule = activeDay === 1 ? day1 : day2;

  return (
    <div className="min-h-screen bg-white font-sans text-medical-navy">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-medical-navy/5 px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <a href="#top" className="font-serif text-xl font-bold tracking-tight shrink-0">
            MAMMO<span className="text-vivid-coral">LOGY</span>.UA
          </a>
          <div className="hidden sm:flex flex-1 justify-center gap-1 md:gap-2 lg:gap-4 text-[11px] md:text-[12px] lg:text-[13px] font-medium uppercase tracking-wider overflow-x-auto no-scrollbar">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="whitespace-nowrap px-2 py-1 rounded-full hover:text-vivid-coral hover:bg-soft-rose transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#register"
            className="bg-vivid-coral text-white px-4 md:px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-medical-navy transition-all whitespace-nowrap shadow-lg shadow-vivid-coral/30"
          >
            Реєстрація
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative overflow-hidden bg-soft-rose py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 rounded-full border border-medical-navy/20 text-xs font-bold uppercase tracking-widest mb-6">
              25–26 червня 2026 · Київ · Сертифіковано МОЗ
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.05] mb-6">
              Практична мамологія:{" "}
              <span className="italic text-accent-teal text-3xl md:text-4xl lg:text-6xl text-pretty block mt-2">
                від знахідки до вірного клінічного рішення
              </span>
            </h1>
            <p className="text-lg text-medical-navy/80 max-w-xl mb-8 leading-relaxed">
              Мультидисциплінарний семінар БПР для лікарів, залучених до діагностики та лікування
              патології молочної залози. Два дні теорії й практики, 38 балів БПР, реальні клінічні
              кейси.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#register"
                className="bg-medical-navy text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Зайняти місце
              </a>
              <a
                href="#program"
                className="border border-medical-navy px-8 py-4 rounded-full font-bold hover:bg-medical-navy hover:text-white transition-all"
              >
                Програма курсу
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-medical-navy/70">
              <div>
                <span className="font-bold text-medical-navy">18 + 20</span> балів БПР
              </div>
              <div>
                <span className="font-bold text-medical-navy">7</span> провідних лекторів
              </div>
              <div>
                <span className="font-bold text-medical-navy">10 000 грн</span> повна участь
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroClinic}
              alt="Сучасний мамографічний кабінет"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent-teal text-white p-6 lg:p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm italic opacity-95 leading-relaxed">
                «Наша мета — навчити лікаря бачити не просто знімок, а шлях пацієнта до одужання.»
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-4">
            Про курс
          </div>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
            Інтенсив на доказовій базі та реальній практиці
          </h2>
          <p className="text-lg text-medical-navy/75 leading-relaxed mb-6">
            Курс має на меті формування системних знань, практичних навичок і клінічного мислення,
            необхідних для своєчасної діагностики, правильної інтерпретації досліджень та
            обґрунтованого вибору тактики ведення пацієнток із доброякісною та злоякісною
            патологією молочної залози.
          </p>
          <p className="text-base text-medical-navy/60 leading-relaxed">
            Ключова мета — надати практичні інструменти для своєчасної діагностики, безпечного
            лікування та грамотного ведення пацієнтів відповідно до сучасних клінічних
            рекомендацій.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 lg:py-28 bg-soft-rose">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-4">
              Переваги
            </div>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Що робить цей курс справді особливим
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {advantages.map((a, i) => (
              <div key={a.title}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif italic text-accent-teal text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-px bg-accent-teal" />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-pretty">{a.title}</h3>
                <p className="text-medical-navy/70 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section id="audience" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-4">
              Для кого
            </div>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
              Курс для тих, хто щодня стоїть на сторожі жіночого здоров'я
            </h2>
            <p className="text-medical-navy/70 leading-relaxed">
              Долучайтесь до інтенсиву — поглиблюйте знання, щоб допомагати ще ефективніше. Курс
              буде корисний фахівцям зі спеціальностей:
            </p>
          </div>
          <ul className="space-y-3">
            {audience.map((spec) => (
              <li
                key={spec}
                className="flex items-center gap-4 p-4 rounded-xl border border-medical-navy/10 hover:border-accent-teal/40 hover:bg-soft-rose/40 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-accent-teal shrink-0" />
                <span className="font-medium">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-20 lg:py-28 bg-medical-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-4">
              Програма заходу
            </div>
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Дводенний інтенсив</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Семінар складається з двох взаємопов'язаних частин — теоретичної та практичної.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-full bg-white/10 backdrop-blur">
              <button
                onClick={() => setActiveDay(1)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeDay === 1 ? "bg-accent-teal text-white" : "text-white/70 hover:text-white"
                }`}
              >
                День 1 · 25 червня · 18 балів
              </button>
              <button
                onClick={() => setActiveDay(2)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeDay === 2 ? "bg-accent-teal text-white" : "text-white/70 hover:text-white"
                }`}
              >
                День 2 · 26 червня · 20 балів
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-serif text-accent-teal/60">
                0{activeDay}
              </span>
              <h3 className="text-xl md:text-2xl font-serif uppercase tracking-widest">
                {activeDay === 1
                  ? "Клінічна логіка та діагностичні алгоритми"
                  : "Практичні навички та клінічні кейси"}
              </h3>
            </div>
            <div className="border-l border-white/20 pl-6 md:pl-8 space-y-8">
              {schedule.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-3 h-3 rounded-full bg-accent-teal ring-4 ring-medical-navy" />
                  <span className="text-accent-teal font-bold block mb-1 text-sm tabular-nums">
                    {item.time}
                  </span>
                  <h4 className="text-lg md:text-xl mb-1">{item.title}</h4>
                  {item.speaker && (
                    <p className="text-white/50 text-sm italic mb-1">{item.speaker}</p>
                  )}
                  {item.desc && (
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lecturers */}
      <section id="lecturers" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-4">
              Лектори курсу
            </div>
            <h2 className="font-serif text-3xl md:text-5xl mb-4">Ваші ментори</h2>
            <p className="text-medical-navy/60 max-w-2xl mx-auto">
              Визнані експерти з практичним досвідом та глибокими знаннями в мамології, хірургії,
              УЗД та онкології
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {lecturers.map((l) => (
              <div key={l.name} className="group">
                <div className="w-full aspect-[4/5] bg-soft-rose rounded-2xl mb-6 grid place-items-center transition-transform group-hover:scale-[1.02] overflow-hidden">
                  <span className="font-serif text-6xl text-accent-teal/70">{l.initials}</span>
                </div>
                <h4 className="font-serif text-xl mb-1 text-pretty">{l.name}</h4>
                <p className="text-accent-teal text-xs font-bold uppercase tracking-widest mb-3">
                  {l.title}
                </p>
                <p className="text-medical-navy/70 text-sm leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Register */}
      <section id="pricing" className="py-20 lg:py-28 bg-soft-rose">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-4">
              Вартість участі
            </div>
            <h2 className="font-serif text-3xl md:text-5xl mb-4">
              25–26 червня 2026 · 2 дні інтенсиву
            </h2>
          </div>
          <div className="bg-white p-8 md:p-12 lg:p-14 rounded-3xl shadow-xl border border-medical-navy/5 grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-4">
                Повна участь
              </div>
              <div className="font-serif text-5xl md:text-6xl mb-2">
                10 000 <span className="text-xl font-sans uppercase text-medical-navy/50">грн</span>
              </div>
              <p className="text-medical-navy/60 mb-8">Що входить у вартість участі:</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-accent-teal mt-1 shrink-0">✓</span>
                    <span className="text-medical-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="register" className="bg-soft-rose/60 p-6 md:p-8 rounded-2xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent-teal text-white grid place-items-center text-2xl mb-4">
                    ✓
                  </div>
                  <h3 className="font-serif text-2xl mb-3">Дякуємо за заявку!</h3>
                  <p className="text-medical-navy/70 text-sm">
                    Ми зв'яжемось з вами найближчим часом для підтвердження реєстрації.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <h3 className="font-serif text-2xl mb-2">Реєстрація на курс</h3>
                  <input
                    required
                    type="text"
                    placeholder="Прізвище та ім'я"
                    className="w-full px-5 py-3.5 rounded-xl border border-medical-navy/10 focus:outline-none focus:border-accent-teal bg-white text-sm"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Спеціальність"
                    className="w-full px-5 py-3.5 rounded-xl border border-medical-navy/10 focus:outline-none focus:border-accent-teal bg-white text-sm"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full px-5 py-3.5 rounded-xl border border-medical-navy/10 focus:outline-none focus:border-accent-teal bg-white text-sm"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Номер телефону"
                    className="w-full px-5 py-3.5 rounded-xl border border-medical-navy/10 focus:outline-none focus:border-accent-teal bg-white text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-accent-teal text-white py-4 rounded-xl font-bold hover:bg-medical-navy transition-colors shadow-lg shadow-accent-teal/20 mt-2"
                  >
                    Зареєструватися
                  </button>
                  <p className="text-xs text-medical-navy/40 text-center mt-1">
                    Кількість місць обмежена для забезпечення якості практичного навчання.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Venue / Footer */}
      <footer className="py-16 bg-white border-t border-medical-navy/5">
        <div id="venue" className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 scroll-mt-24">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-vivid-coral mb-4">
              Місце проведення
            </div>
            <h3 className="font-serif text-2xl mb-6">Спеціалізований Медичний Центр, Київ</h3>
            <div className="space-y-4 text-medical-navy/75 text-sm leading-relaxed">
              <div>
                <p className="font-semibold text-medical-navy mb-1">25 червня · День 1</p>
                <p>Готель «Оберіг», проспект Валерія Лобановського, 26/16</p>
              </div>
              <div>
                <p className="font-semibold text-medical-navy mb-1">26 червня · День 2</p>
                <p>Проспект Валерія Лобановського, 17</p>
              </div>
            </div>
          </div>
          <div id="contacts" className="scroll-mt-24">
            <div className="text-xs font-bold uppercase tracking-widest text-vivid-coral mb-4">
              Контакти
            </div>
            <h3 className="font-serif text-2xl mb-6">Маєте питання?</h3>
            <div className="space-y-2">
              <a
                href="tel:+380441234567"
                className="block text-medical-navy hover:text-vivid-coral transition-colors font-medium"
              >
                +380 44 123 45 67
              </a>
              <a
                href="mailto:info@mammology.ua"
                className="block text-medical-navy hover:text-vivid-coral transition-colors font-medium"
              >
                info@mammology.ua
              </a>
            </div>
            <a
              href="#register"
              className="inline-block mt-8 bg-vivid-coral text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-medical-navy transition-all shadow-lg shadow-vivid-coral/30"
            >
              Записатись на курс
            </a>
          </div>
        </div>


        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-medical-navy/5 text-center text-xs text-medical-navy/40 uppercase tracking-widest">
          © 2026 Практична мамологія · Семінар БПР · Усі права захищені
        </div>
      </footer>
    </div>
  );
}
