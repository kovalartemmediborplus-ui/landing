import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/hero-clinic.jpg
var hero_clinic_default = "/assets/hero-clinic-lFJqj51H.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var navLinks = [
	{
		href: "#about",
		label: "Про курс"
	},
	{
		href: "#advantages",
		label: "Переваги"
	},
	{
		href: "#audience",
		label: "Для кого"
	},
	{
		href: "#program",
		label: "Програма"
	},
	{
		href: "#lecturers",
		label: "Лектори"
	},
	{
		href: "#pricing",
		label: "Вартість"
	},
	{
		href: "#venue",
		label: "Місце"
	},
	{
		href: "#contacts",
		label: "Контакти"
	}
];
var advantages = [
	{
		title: "Міждисциплінарний підхід",
		text: "Об'єднуємо знання з рентгенології, онкохірургії, гінекології та патоморфології для комплексного погляду на патологію молочної залози."
	},
	{
		title: "Експерти-практики",
		text: "Лекції проводять провідні фахівці України з міжнародними сертифікатами FEBS, ESR, EUSOBI та багаторічним клінічним досвідом."
	},
	{
		title: "Сучасні протоколи",
		text: "Програма побудована на актуальних BI-RADS алгоритмах, доказовій медицині та сучасних міжнародних клінічних рекомендаціях."
	},
	{
		title: "Реальна практика",
		text: "Самостійне виконання тонкоголкових та трепан-біопсій під УЗД-контролем під наглядом викладачів у другий день курсу."
	},
	{
		title: "38 балів БПР",
		text: "Два офіційні сертифікати безперервного професійного розвитку — 18 та 20 балів. Захід зареєстрований МОЗ України."
	},
	{
		title: "Професійна мережа",
		text: "Дружня вечеря з лекторами та дискусії з колегами різних спеціальностей у теплій неформальній атмосфері."
	}
];
var audience = [
	"Терапія, ультразвукова діагностика",
	"Акушерство та гінекологія",
	"Клінічна онкологія",
	"Онкохірургія",
	"Пластична та загальна хірургія",
	"Рентгенологія",
	"Організація і управління охороною здоров'я"
];
var day1 = [
	{
		time: "09:00–09:15",
		title: "Привітальне слово та організаційні питання",
		speaker: "Помінчук Д.В.",
		desc: "Огляд структури семінару, ключових клінічних акцентів та очікуваних результатів навчання."
	},
	{
		time: "09:15–09:45",
		title: "Анатомія та фізіологія МЗ. Лактаційний та нелактаційний мастит",
		speaker: "Шевчук Т.С.",
		desc: "Систематизація знань щодо анатомічних та функціональних особливостей молочної залози."
	},
	{
		time: "09:45–10:15",
		title: "Гормональна регуляція та вплив на доброякісні зміни",
		speaker: "Малова Ю.О.",
		desc: "Роль гормональних факторів та міждисциплінарна взаємодія мамолога і гінеколога."
	},
	{
		time: "10:15–11:00",
		title: "Доброякісна патологія: класифікація, діагностика, лікування",
		speaker: "Шевчук Т.С.",
		desc: "Сучасні алгоритми ведення пацієнток відповідно до клінічних рекомендацій."
	},
	{
		time: "11:00–11:30",
		title: "Естетика грудної залози та пластична хірургія",
		speaker: "Абдалла К.М.",
		desc: "Можливості корекції форми МЗ та поєднання з видаленням доброякісних утворень."
	},
	{
		time: "11:30–11:50",
		title: "Кава-брейк та дискусія",
		speaker: "",
		desc: ""
	},
	{
		time: "12:20–12:30",
		title: "Мамографічне дослідження та його різновиди",
		speaker: "Гурандо А.В.",
		desc: "Показання та діагностичні можливості різних видів мамографії."
	},
	{
		time: "12:30–12:50",
		title: "МРТ молочних залоз",
		speaker: "Гурандо А.В.",
		desc: "Сучасні алгоритми ведення пацієнток відповідно до клінічних рекомендацій."
	},
	{
		time: "12:50–13:00",
		title: "Спектральна мамографія з внутрішньовенним контрастуванням",
		speaker: "Галішина Г.О.",
		desc: "Сучасний метод розширеної діагностики молочної залози."
	},
	{
		time: "13:00–13:30",
		title: "Ультразвукове обстеження молочних залоз",
		speaker: "Галішина Г.О.",
		desc: "Показання, можливості та обмеження ультразвукової діагностики."
	},
	{
		time: "14:30–15:00",
		title: "Ведення пацієнтки з верифікованими доброякісними утвореннями",
		speaker: "Помінчук Д.В.",
		desc: "Діагностична тактика та клінічні рішення при підтвердженій доброякісній патології."
	},
	{
		time: "15:00–15:30",
		title: "Вплив гормональної терапії на МЗ. Вагітність і РМЗ",
		speaker: "Малова Ю.О.",
		desc: "Міждисциплінарний підхід до ведення пацієнток на гормональній терапії та під час вагітності."
	},
	{
		time: "15:30–16:00",
		title: "Патологія МЗ: практичний гайд з патогістології для хірургів",
		speaker: "Слісаренко М.В.",
		desc: "Інтерпретація патогістологічних висновків у щоденній клінічній практиці."
	},
	{
		time: "16:00–16:30",
		title: "Діагностичні алгоритми при підтвердженні діагнозу РМЗ",
		speaker: "Помінчук Д.В.",
		desc: "Покроковий алгоритм дій після встановлення діагнозу раку молочної залози."
	},
	{
		time: "17:00",
		title: "Дружня вечеря та дискусія з лекторами",
		speaker: "",
		desc: "Неформальне спілкування та обмін досвідом у теплій атмосфері."
	}
];
var day2 = [
	{
		time: "09:00–13:00",
		title: "Прийом пацієнта мамологічного профілю: алгоритм дій",
		speaker: "Помінчук Д.В., Шевчук Т.С.",
		desc: "Послідовність обстеження, визначення діагностичної тактики та прийняття клінічних рішень."
	},
	{
		time: "09:00–13:00",
		title: "Практична робота в мамографічному кабінеті",
		speaker: "Галішина Г.О., Гурандо А.В.",
		desc: "Інтерпретація реальних мамографічних зображень та формування висновків відповідно до BI-RADS."
	},
	{
		time: "09:00–13:00",
		title: "Практична робота в кабінеті УЗД",
		speaker: "Галішина Г.О., Гурандо А.В.",
		desc: "Аналіз клінічних випадків, співставлення УЗД-картини з іншими методами візуалізації."
	},
	{
		time: "13:00–13:30",
		title: "Кава-брейк та дискусія",
		speaker: "",
		desc: ""
	},
	{
		time: "13:30–15:00",
		title: "Виконання тонкоголкових та трепан-біопсій під УЗД-контролем",
		speaker: "Помінчук Д.В., Шевчук Т.С.",
		desc: "Самостійне виконання процедур під наглядом викладачів із розбором технічних нюансів."
	},
	{
		time: "15:00",
		title: "Завершення циклу. Питання та обговорення",
		speaker: "",
		desc: ""
	}
];
var lecturers = [
	{
		initials: "ПД",
		name: "Помінчук Денис Володимирович",
		title: "Онкохірург-мамолог, к.м.н.",
		bio: "Віце-президент всеукраїнської асоціації UPRADAS, пластичний хірург."
	},
	{
		initials: "ШТ",
		name: "Шевчук Тетяна Сергіївна",
		title: "Онкохірург, мамолог",
		bio: "Спеціалізований мамологічний центр. Fellow of the European Board of Surgery (FEBS)."
	},
	{
		initials: "ГА",
		name: "Гурандо Андрій В'ячеславович",
		title: "PhD, лікар-рентгенолог",
		bio: "Асистент кафедри радіології НУОЗ України ім. П.Л. Шупика, УЗД-діагностика."
	},
	{
		initials: "ГГ",
		name: "Галішина Ганна Олександрівна",
		title: "Завідувачка діагностичного відділення",
		bio: "Мамологічний центр. Сертифікований рентгенолог. Член ESR, EUSOBI, АРУ, УАФУД."
	},
	{
		initials: "МЮ",
		name: "Малова Юлія Олександрівна",
		title: "Акушер-гінеколог, к.м.н.",
		bio: "Лікар вищої категорії, репродуктолог, гінеколог-ендокринолог центру «Мати та дитина»."
	},
	{
		initials: "АК",
		name: "Абдалла Карім Махмудович",
		title: "Онкохірург, мамолог",
		bio: "Пластична хірургія, естетична корекція форми молочної залози."
	},
	{
		initials: "СМ",
		name: "Слісаренко Марина Віталіївна",
		title: "Лікар-патологоанатом",
		bio: "Медична лабораторія CSD. Інтерпретація патогістологічних досліджень."
	}
];
var included = [
	"Участь у двох повноцінних навчальних днях",
	"Теоретичний та практичний модулі",
	"Робота з реальними клінічними кейсами",
	"Практичне відпрацювання біопсій під УЗД-контролем",
	"Інтерпретація мамографічних та УЗД-зображень",
	"Роздаткові матеріали",
	"Кава-брейки та дружня вечеря",
	"Два сертифікати учасника — 18 та 20 балів БПР"
];
function LandingPage() {
	const [activeDay, setActiveDay] = useState(1);
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};
	const schedule = activeDay === 1 ? day1 : day2;
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-white font-sans text-medical-navy",
		children: [
			/* @__PURE__ */ jsx("nav", {
				className: "sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-medical-navy/5 px-4 md:px-6 py-3",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto flex justify-between items-center gap-4",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#top",
							className: "font-serif text-xl font-bold tracking-tight shrink-0",
							children: [
								"MAMMO",
								/* @__PURE__ */ jsx("span", {
									className: "text-vivid-coral",
									children: "LOGY"
								}),
								".UA"
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "hidden sm:flex flex-1 justify-center gap-1 md:gap-2 lg:gap-4 text-[11px] md:text-[12px] lg:text-[13px] font-medium uppercase tracking-wider overflow-x-auto no-scrollbar",
							children: navLinks.map((l) => /* @__PURE__ */ jsx("a", {
								href: l.href,
								className: "whitespace-nowrap px-2 py-1 rounded-full hover:text-vivid-coral hover:bg-soft-rose transition-colors",
								children: l.label
							}, l.href))
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#register",
							className: "bg-vivid-coral text-white px-4 md:px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-medical-navy transition-all whitespace-nowrap shadow-lg shadow-vivid-coral/30",
							children: "Реєстрація"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("header", {
				id: "top",
				className: "relative overflow-hidden bg-soft-rose py-16 lg:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "inline-block px-4 py-1 rounded-full border border-medical-navy/20 text-xs font-bold uppercase tracking-widest mb-6",
								children: "25–26 червня 2026 · Київ · Сертифіковано МОЗ"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.05] mb-6",
								children: [
									"Практична мамологія:",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "italic text-accent-teal text-3xl md:text-4xl lg:text-6xl text-pretty block mt-2",
										children: "від знахідки до вірного клінічного рішення"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-medical-navy/80 max-w-xl mb-8 leading-relaxed",
								children: "Мультидисциплінарний семінар БПР для лікарів, залучених до діагностики та лікування патології молочної залози. Два дні теорії й практики, 38 балів БПР, реальні клінічні кейси."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-4 mb-8",
								children: [/* @__PURE__ */ jsx("a", {
									href: "#register",
									className: "bg-medical-navy text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform",
									children: "Зайняти місце"
								}), /* @__PURE__ */ jsx("a", {
									href: "#program",
									className: "border border-medical-navy px-8 py-4 rounded-full font-bold hover:bg-medical-navy hover:text-white transition-all",
									children: "Програма курсу"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-x-8 gap-y-3 text-sm text-medical-navy/70",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "font-bold text-medical-navy",
										children: "18 + 20"
									}), " балів БПР"] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "font-bold text-medical-navy",
										children: "7"
									}), " провідних лекторів"] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "font-bold text-medical-navy",
										children: "10 000 грн"
									}), " повна участь"] })
								]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("img", {
							src: hero_clinic_default,
							alt: "Сучасний мамографічний кабінет",
							width: 1024,
							height: 1280,
							className: "w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl"
						}), /* @__PURE__ */ jsx("div", {
							className: "absolute -bottom-6 -left-6 bg-accent-teal text-white p-6 lg:p-8 rounded-2xl shadow-xl max-w-xs",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-sm italic opacity-95 leading-relaxed",
								children: "«Наша мета — навчити лікаря бачити не просто знімок, а шлях пацієнта до одужання.»"
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "about",
				className: "py-20 lg:py-28 bg-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-6 text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-bold uppercase tracking-widest text-accent-teal mb-4",
							children: "Про курс"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl md:text-5xl mb-8 leading-tight",
							children: "Інтенсив на доказовій базі та реальній практиці"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg text-medical-navy/75 leading-relaxed mb-6",
							children: "Курс має на меті формування системних знань, практичних навичок і клінічного мислення, необхідних для своєчасної діагностики, правильної інтерпретації досліджень та обґрунтованого вибору тактики ведення пацієнток із доброякісною та злоякісною патологією молочної залози."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-base text-medical-navy/60 leading-relaxed",
							children: "Ключова мета — надати практичні інструменти для своєчасної діагностики, безпечного лікування та грамотного ведення пацієнтів відповідно до сучасних клінічних рекомендацій."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "advantages",
				className: "py-20 lg:py-28 bg-soft-rose",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl mb-16",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs font-bold uppercase tracking-widest text-accent-teal mb-4",
							children: "Переваги"
						}), /* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl md:text-5xl leading-tight",
							children: "Що робить цей курс справді особливим"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12",
						children: advantages.map((a, i) => /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-serif italic text-accent-teal text-lg",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ jsx("div", { className: "w-12 h-px bg-accent-teal" })]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-serif text-2xl mb-3 text-pretty",
								children: a.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-medical-navy/70 leading-relaxed",
								children: a.text
							})
						] }, a.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "audience",
				className: "py-20 lg:py-28 bg-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-bold uppercase tracking-widest text-accent-teal mb-4",
							children: "Для кого"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl md:text-5xl mb-6 leading-tight",
							children: "Курс для тих, хто щодня стоїть на сторожі жіночого здоров'я"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-medical-navy/70 leading-relaxed",
							children: "Долучайтесь до інтенсиву — поглиблюйте знання, щоб допомагати ще ефективніше. Курс буде корисний фахівцям зі спеціальностей:"
						})
					] }), /* @__PURE__ */ jsx("ul", {
						className: "space-y-3",
						children: audience.map((spec) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-4 p-4 rounded-xl border border-medical-navy/10 hover:border-accent-teal/40 hover:bg-soft-rose/40 transition-colors",
							children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-accent-teal shrink-0" }), /* @__PURE__ */ jsx("span", {
								className: "font-medium",
								children: spec
							})]
						}, spec))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "program",
				className: "py-20 lg:py-28 bg-medical-navy text-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "text-center mb-12",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-xs font-bold uppercase tracking-widest text-accent-teal mb-4",
									children: "Програма заходу"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "font-serif text-3xl md:text-5xl mb-6",
									children: "Дводенний інтенсив"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-white/60 max-w-2xl mx-auto leading-relaxed",
									children: "Семінар складається з двох взаємопов'язаних частин — теоретичної та практичної."
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex justify-center mb-12",
							children: /* @__PURE__ */ jsxs("div", {
								className: "inline-flex p-1 rounded-full bg-white/10 backdrop-blur",
								children: [/* @__PURE__ */ jsx("button", {
									onClick: () => setActiveDay(1),
									className: `px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeDay === 1 ? "bg-accent-teal text-white" : "text-white/70 hover:text-white"}`,
									children: "День 1 · 25 червня · 18 балів"
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => setActiveDay(2),
									className: `px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeDay === 2 ? "bg-accent-teal text-white" : "text-white/70 hover:text-white"}`,
									children: "День 2 · 26 червня · 20 балів"
								})]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "max-w-4xl mx-auto",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4 mb-8",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-5xl font-serif text-accent-teal/60",
									children: ["0", activeDay]
								}), /* @__PURE__ */ jsx("h3", {
									className: "text-xl md:text-2xl font-serif uppercase tracking-widest",
									children: activeDay === 1 ? "Клінічна логіка та діагностичні алгоритми" : "Практичні навички та клінічні кейси"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "border-l border-white/20 pl-6 md:pl-8 space-y-8",
								children: schedule.map((item, i) => /* @__PURE__ */ jsxs("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ jsx("span", { className: "absolute -left-[33px] md:-left-[41px] top-1.5 w-3 h-3 rounded-full bg-accent-teal ring-4 ring-medical-navy" }),
										/* @__PURE__ */ jsx("span", {
											className: "text-accent-teal font-bold block mb-1 text-sm tabular-nums",
											children: item.time
										}),
										/* @__PURE__ */ jsx("h4", {
											className: "text-lg md:text-xl mb-1",
											children: item.title
										}),
										item.speaker && /* @__PURE__ */ jsx("p", {
											className: "text-white/50 text-sm italic mb-1",
											children: item.speaker
										}),
										item.desc && /* @__PURE__ */ jsx("p", {
											className: "text-white/60 text-sm leading-relaxed",
											children: item.desc
										})
									]
								}, i))
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "lecturers",
				className: "py-20 lg:py-28 bg-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-16",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs font-bold uppercase tracking-widest text-accent-teal mb-4",
								children: "Лектори курсу"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-serif text-3xl md:text-5xl mb-4",
								children: "Ваші ментори"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-medical-navy/60 max-w-2xl mx-auto",
								children: "Визнані експерти з практичним досвідом та глибокими знаннями в мамології, хірургії, УЗД та онкології"
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
						children: lecturers.map((l) => /* @__PURE__ */ jsxs("div", {
							className: "group",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-full aspect-[4/5] bg-soft-rose rounded-2xl mb-6 grid place-items-center transition-transform group-hover:scale-[1.02] overflow-hidden",
									children: /* @__PURE__ */ jsx("span", {
										className: "font-serif text-6xl text-accent-teal/70",
										children: l.initials
									})
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "font-serif text-xl mb-1 text-pretty",
									children: l.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-accent-teal text-xs font-bold uppercase tracking-widest mb-3",
									children: l.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-medical-navy/70 text-sm leading-relaxed",
									children: l.bio
								})
							]
						}, l.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "pricing",
				className: "py-20 lg:py-28 bg-soft-rose",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-5xl mx-auto px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-12",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs font-bold uppercase tracking-widest text-accent-teal mb-4",
							children: "Вартість участі"
						}), /* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl md:text-5xl mb-4",
							children: "25–26 червня 2026 · 2 дні інтенсиву"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bg-white p-8 md:p-12 lg:p-14 rounded-3xl shadow-xl border border-medical-navy/5 grid md:grid-cols-2 gap-10",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs font-bold uppercase tracking-widest text-accent-teal mb-4",
								children: "Повна участь"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "font-serif text-5xl md:text-6xl mb-2",
								children: ["10 000 ", /* @__PURE__ */ jsx("span", {
									className: "text-xl font-sans uppercase text-medical-navy/50",
									children: "грн"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-medical-navy/60 mb-8",
								children: "Що входить у вартість участі:"
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "space-y-3",
								children: included.map((item) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 text-sm",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-accent-teal mt-1 shrink-0",
										children: "✓"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-medical-navy/80",
										children: item
									})]
								}, item))
							})
						] }), /* @__PURE__ */ jsx("div", {
							id: "register",
							className: "bg-soft-rose/60 p-6 md:p-8 rounded-2xl",
							children: submitted ? /* @__PURE__ */ jsxs("div", {
								className: "h-full flex flex-col items-center justify-center text-center py-12",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "w-16 h-16 rounded-full bg-accent-teal text-white grid place-items-center text-2xl mb-4",
										children: "✓"
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-serif text-2xl mb-3",
										children: "Дякуємо за заявку!"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-medical-navy/70 text-sm",
										children: "Ми зв'яжемось з вами найближчим часом для підтвердження реєстрації."
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								onSubmit: handleSubmit,
								className: "grid gap-4",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "font-serif text-2xl mb-2",
										children: "Реєстрація на курс"
									}),
									/* @__PURE__ */ jsx("input", {
										required: true,
										type: "text",
										placeholder: "Прізвище та ім'я",
										className: "w-full px-5 py-3.5 rounded-xl border border-medical-navy/10 focus:outline-none focus:border-accent-teal bg-white text-sm"
									}),
									/* @__PURE__ */ jsx("input", {
										required: true,
										type: "text",
										placeholder: "Спеціальність",
										className: "w-full px-5 py-3.5 rounded-xl border border-medical-navy/10 focus:outline-none focus:border-accent-teal bg-white text-sm"
									}),
									/* @__PURE__ */ jsx("input", {
										required: true,
										type: "email",
										placeholder: "Email",
										className: "w-full px-5 py-3.5 rounded-xl border border-medical-navy/10 focus:outline-none focus:border-accent-teal bg-white text-sm"
									}),
									/* @__PURE__ */ jsx("input", {
										required: true,
										type: "tel",
										placeholder: "Номер телефону",
										className: "w-full px-5 py-3.5 rounded-xl border border-medical-navy/10 focus:outline-none focus:border-accent-teal bg-white text-sm"
									}),
									/* @__PURE__ */ jsx("button", {
										type: "submit",
										className: "w-full bg-accent-teal text-white py-4 rounded-xl font-bold hover:bg-medical-navy transition-colors shadow-lg shadow-accent-teal/20 mt-2",
										children: "Зареєструватися"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-medical-navy/40 text-center mt-1",
										children: "Кількість місць обмежена для забезпечення якості практичного навчання."
									})
								]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "py-16 bg-white border-t border-medical-navy/5",
				children: [/* @__PURE__ */ jsxs("div", {
					id: "venue",
					className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 scroll-mt-24",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-bold uppercase tracking-widest text-vivid-coral mb-4",
							children: "Місце проведення"
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-serif text-2xl mb-6",
							children: "Спеціалізований Медичний Центр, Київ"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4 text-medical-navy/75 text-sm leading-relaxed",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "font-semibold text-medical-navy mb-1",
								children: "25 червня · День 1"
							}), /* @__PURE__ */ jsx("p", { children: "Готель «Оберіг», проспект Валерія Лобановського, 26/16" })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "font-semibold text-medical-navy mb-1",
								children: "26 червня · День 2"
							}), /* @__PURE__ */ jsx("p", { children: "Проспект Валерія Лобановського, 17" })] })]
						})
					] }), /* @__PURE__ */ jsxs("div", {
						id: "contacts",
						className: "scroll-mt-24",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs font-bold uppercase tracking-widest text-vivid-coral mb-4",
								children: "Контакти"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-serif text-2xl mb-6",
								children: "Маєте питання?"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("a", {
									href: "tel:+380441234567",
									className: "block text-medical-navy hover:text-vivid-coral transition-colors font-medium",
									children: "+380 44 123 45 67"
								}), /* @__PURE__ */ jsx("a", {
									href: "mailto:info@mammology.ua",
									className: "block text-medical-navy hover:text-vivid-coral transition-colors font-medium",
									children: "info@mammology.ua"
								})]
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#register",
								className: "inline-block mt-8 bg-vivid-coral text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-medical-navy transition-all shadow-lg shadow-vivid-coral/30",
								children: "Записатись на курс"
							})
						]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-medical-navy/5 text-center text-xs text-medical-navy/40 uppercase tracking-widest",
					children: "© 2026 Практична мамологія · Семінар БПР · Усі права захищені"
				})]
			})
		]
	});
}
//#endregion
export { LandingPage as component };
