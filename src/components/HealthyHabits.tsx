import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Ban, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Coffee,
  Wine,
  Cookie,
  Cigarette,
  Moon,
  Smartphone,
  Apple,
  Salad,
  Droplets,
  HeartPulse
} from "lucide-react";

const badHabits = [
  {
    habit: "Сладости и фастфуд",
    icon: Cookie,
    color: "from-red-500 to-orange-500",
    impact: [
      "Резкие скачки сахара в крови",
      "Набор лишнего жира",
      "Ухудшение состояния кожи",
      "Снижение энергии после 'сахарного пика'"
    ],
    replace: [
      "Фрукты и ягоды",
      "Горький шоколад (70%+)",
      "Орехи и сухофрукты (в меру)",
      "Домашняя выпечка из цельнозерновой муки"
    ]
  },
  {
    habit: "Алкоголь",
    icon: Wine,
    color: "from-purple-500 to-pink-500",
    impact: [
      "Замедляет метаболизм",
      "Пустые калории (7 ккал на 1г)",
      "Нарушает сон и восстановление",
      "Провоцирует переедание"
    ],
    replace: [
      "Вода с лимоном и мятой",
      "Свежевыжатые соки",
      "Смузи",
      "Чайный гриб или безалкогольные коктейли"
    ]
  },
  {
    habit: "Недосып",
    icon: Moon,
    color: "from-blue-500 to-indigo-500",
    impact: [
      "Повышение кортизола (гормон стресса)",
      "Замедление жиросжигания",
      "Снижение мотивации",
      "Переедание на следующий день"
    ],
    replace: [
      "7-8 часов качественного сна",
      "Режим: ложиться и вставать в одно время",
      "Проветривание комнаты",
      "Отказ от экранов за час до сна"
    ]
  },
  {
    habit: "Пропуск завтрака",
    icon: Coffee,
    color: "from-orange-500 to-yellow-500",
    impact: [
      "Замедление метаболизма",
      "Переедание в обед",
      "Нет энергии утром",
      "Срывы на сладкое"
    ],
    replace: [
      "Белковый завтрак (яйца, творог)",
      "Овсянка с орехами и ягодами",
      "Смузи с протеином",
      "Завтрак в течение часа после пробуждения"
    ]
  },
  {
    habit: "Малоподвижность",
    icon: Smartphone,
    color: "from-gray-500 to-slate-500",
    impact: [
      "Замедление обмена веществ",
      "Потеря мышечной массы",
      "Накопление жира",
      "Боли в спине и суставах"
    ],
    replace: [
      "10000 шагов в день",
      "Разминка каждый час",
      "Лестница вместо лифта",
      "Активные прогулки"
    ]
  },
  {
    habit: "Курение",
    icon: Cigarette,
    color: "from-red-600 to-gray-600",
    impact: [
      "Ухудшение выносливости",
      "Замедление восстановления",
      "Нарушение обмена веществ",
      "Плохая кожа и преждевременное старение"
    ],
    replace: [
      "Дыхательные практики",
      "Жвачка без сахара",
      "Замена привычки (прогулка вместо перекура)",
      "Консультация специалиста"
    ]
  }
];

const dosDonts = {
  dos: [
    { text: "Пить 2-3 литра воды в день", icon: Droplets },
    { text: "Есть 4-5 раз в день небольшими порциями", icon: Apple },
    { text: "Спать 7-8 часов", icon: Moon },
    { text: "Делать разминку каждый час", icon: HeartPulse },
    { text: "Готовить еду заранее", icon: Salad },
    { text: "Радоваться маленьким победам", icon: CheckCircle2 },
    { text: "Слушать своё тело", icon: HeartPulse },
    { text: "Позволять себе читмил раз в неделю", icon: Cookie }
  ],
  donts: [
    { text: "Голодать или пропускать приёмы пищи", icon: XCircle },
    { text: "Взвешиваться каждый день", icon: Ban },
    { text: "Сравнивать себя с другими", icon: XCircle },
    { text: "Есть перед сном (за 2-3 часа до)", icon: Ban },
    { text: "Пить калорийные напитки вместо воды", icon: XCircle },
    { text: "Переедать на читмиле", icon: Ban },
    { text: "Наказывать себя за срывы", icon: XCircle },
    { text: "Тренироваться каждый день без отдыха", icon: Ban }
  ]
};

const healthySwaps = [
  { from: "Белый хлеб", to: "Цельнозерновой хлеб", benefit: "Больше клетчатки, медленные углеводы" },
  { from: "Майонез", to: "Греческий йогурт", benefit: "Меньше калорий, больше белка" },
  { from: "Сладкая газировка", to: "Вода с лимоном", benefit: "0 калорий, детокс, витамин C" },
  { from: "Чипсы", to: "Орехи или овощные палочки", benefit: "Полезные жиры, витамины" },
  { from: "Молочный шоколад", to: "Горький шоколад 70%+", benefit: "Меньше сахара, антиоксиданты" },
  { from: "Белый рис", to: "Бурый рис или киноа", benefit: "Больше питательных веществ" },
  { from: "Сливочное масло", to: "Авокадо", benefit: "Полезные жиры, витамины" },
  { from: "Сахар в кофе", to: "Корица или стевия", benefit: "0 калорий, ускорение метаболизма" },
  { from: "Пицца из кафе", to: "Домашняя на тонком тесте", benefit: "Контроль ингредиентов и калорий" },
  { from: "Жареное", to: "Запечённое или на гриле", benefit: "В разы меньше жира" }
];

export function HealthyHabits() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-purple-900 mb-4 sm:mb-6">💡 Здоровые привычки</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-purple-700">
            Что мешает тебе достичь цели и как это исправить
          </p>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="habits" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 sm:mb-12 h-auto p-1 sm:p-2 bg-white/80 rounded-xl sm:rounded-2xl">
            <TabsTrigger value="habits" className="text-xs sm:text-base lg:text-xl py-2 sm:py-4 data-[state=active]:bg-purple-500 data-[state=active]:text-white flex items-center justify-center gap-1 sm:gap-2">
              <AlertTriangle className="w-3 h-3 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Вредные привычки</span>
              <span className="sm:hidden">Вредное</span>
            </TabsTrigger>
            <TabsTrigger value="swaps" className="text-xs sm:text-base lg:text-xl py-2 sm:py-4 data-[state=active]:bg-pink-500 data-[state=active]:text-white flex items-center justify-center gap-1 sm:gap-2">
              <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Полезные замены</span>
              <span className="sm:hidden">Замены</span>
            </TabsTrigger>
            <TabsTrigger value="rules" className="text-xs sm:text-base lg:text-xl py-2 sm:py-4 data-[state=active]:bg-purple-600 data-[state=active]:text-white flex items-center justify-center gap-1 sm:gap-2">
              <Lightbulb className="w-3 h-3 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Что можно/нельзя</span>
              <span className="sm:hidden">Правила</span>
            </TabsTrigger>
          </TabsList>

          {/* Bad Habits Tab */}
          <TabsContent value="habits" className="space-y-4 sm:space-y-8">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              {badHabits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border-2 border-purple-200"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className={`bg-gradient-to-br ${item.color} p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl text-purple-900">{item.habit}</h3>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-base sm:text-lg lg:text-xl text-red-600 mb-2 sm:mb-3 flex items-center gap-2">
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        Как влияет:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {item.impact.map((impact, idx) => (
                          <li key={idx} className="text-sm sm:text-base lg:text-lg text-purple-700 flex items-start gap-2">
                            <span className="text-red-500 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-200">
                      <h4 className="text-base sm:text-lg lg:text-xl text-green-700 mb-2 sm:mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        Чем заменить:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {item.replace.map((replacement, idx) => (
                          <li key={idx} className="text-sm sm:text-base lg:text-lg text-green-800 flex items-start gap-2">
                            <span className="text-green-500 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                            <span>{replacement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* Healthy Swaps Tab */}
          <TabsContent value="swaps">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border-2 border-purple-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl lg:text-4xl text-purple-900">Простые замены, большая разница</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {healthySwaps.map((swap, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-purple-200"
                  >
                    <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[120px]">
                        <XCircle className="w-4 h-4 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base lg:text-xl text-purple-800 line-through opacity-75">
                          {swap.from}
                        </span>
                      </div>

                      <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 text-purple-500 flex-shrink-0" />

                      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[120px]">
                        <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                        <span className="text-base sm:text-lg lg:text-2xl text-purple-900">
                          {swap.to}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-3 sm:mt-4 ml-0 sm:ml-10 bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                        <span className="text-lg text-purple-700">
                          <strong>Польза:</strong> {swap.benefit}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Do's and Don'ts Tab */}
          <TabsContent value="rules">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              {/* Do's */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border-2 border-green-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-green-800">Делай</h3>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  {dosDonts.dos.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-3 sm:p-5 border-2 border-green-200"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                          <span className="text-sm sm:text-base lg:text-xl text-green-900">{item.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Don'ts */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border-2 border-red-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-rose-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <Ban className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-red-800">Не делай</h3>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  {dosDonts.donts.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl sm:rounded-2xl p-3 sm:p-5 border-2 border-red-200"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                          <span className="text-sm sm:text-base lg:text-xl text-red-900">{item.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom motivation */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center shadow-2xl border-2 sm:border-4 border-white">
          <Lightbulb className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h3 className="text-2xl sm:text-3xl lg:text-5xl text-white mb-4 sm:mb-6">
            Помни главное!
          </h3>
          <p className="text-base sm:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed">
            Не нужно менять всё сразу. Начни с одной вредной привычки, замени её на здоровую альтернативу. 
            Когда она станет частью твоей жизни — переходи к следующей.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-base sm:text-xl lg:text-2xl text-white">
              Маленькие изменения каждый день = большой результат через месяцы! 🌸
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
