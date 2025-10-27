import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Calendar, 
  Dumbbell, 
  Heart, 
  Flame, 
  Apple, 
  Target, 
  Award,
  Sparkles,
  CheckCircle2,
  Circle,
  Moon,
  Trophy
} from "lucide-react";

const monthsData = [
  {
    id: "november",
    month: "Ноябрь",
    emoji: "🌱",
    title: "Входим в режим",
    subtitle: "Мягкое начало, базовые упражнения, вырабатываем привычку",
    progress: 14,
    color: "purple",
    goals: [
      "Привыкнуть к регулярным тренировкам",
      "Наладить режим питания",
      "Выработать привычку пить воду",
      "Начать отслеживать прогресс"
    ],
    nutrition: {
      calories: "Дефицит 200-300 ккал",
      protein: "1.5г на кг веса",
      water: "2 литра в день",
      tips: "Убираем сладости и фастфуд, добавляем больше овощей"
    },
    schedule: [
      { day: 1, dayName: "Пн", workout: "Легкая силовая (все тело)", duration: "30 мин", type: "strength", exercises: ["10 приседаний", "10 отжиманий от стены", "20 сек планка", "10 выпадов"] },
      { day: 2, dayName: "Вт", workout: "Ходьба или легкое кардио", duration: "25 мин", type: "cardio", exercises: ["Быстрая ходьба", "Легкий бег трусцой"] },
      { day: 3, dayName: "Ср", workout: "Отдых или растяжка", duration: "15 мин", type: "rest", exercises: ["Растяжка ног", "Растяжка спины"] },
      { day: 4, dayName: "Чт", workout: "Силовая (низ тела)", duration: "35 мин", type: "strength", exercises: ["15 приседаний", "12 выпадов на каждую ногу", "15 подъемов на носки", "30 сек планка"] },
      { day: 5, dayName: "Пт", workout: "Кардио", duration: "30 мин", type: "cardio", exercises: ["Бег или велосипед", "Интервалы: 2 мин быстро, 1 мин медленно"] },
      { day: 6, dayName: "Сб", workout: "Силовая (верх тела)", duration: "30 мин", type: "strength", exercises: ["12 отжиманий", "10 обратных отжиманий", "15 подъемов рук с гантелями", "30 сек планка"] },
      { day: 7, dayName: "Вс", workout: "Активный отдых", duration: "45 мин", type: "rest", exercises: ["Прогулка на свежем воздухе", "Легкая йога"] }
    ]
  },
  {
    id: "december",
    month: "Декабрь",
    emoji: "❄️",
    title: "Укрепляем привычку",
    subtitle: "Увеличиваем нагрузку, закрепляем режим",
    progress: 28,
    color: "purple",
    goals: [
      "Стабильный график тренировок",
      "Увеличение интенсивности на 20%",
      "Контроль порций еды",
      "Первые видимые изменения"
    ],
    nutrition: {
      calories: "Дефицит 300-400 ккал",
      protein: "1.7г на кг веса",
      water: "2.5 литра в день",
      tips: "Добавляем больше белка, уменьшаем углеводы вечером"
    },
    schedule: [
      { day: 1, dayName: "Пн", workout: "Силовая (ноги + ягодицы)", duration: "40 мин", type: "strength", exercises: ["20 приседаний 3 подхода", "15 выпадов на каждую ногу", "20 ягодичный мост", "Планка 45 сек"] },
      { day: 2, dayName: "Вт", workout: "Кардио средней интенсивности", duration: "35 мин", type: "cardio", exercises: ["Бег с интервалами", "5 мин разминка, 25 мин основная часть"] },
      { day: 3, dayName: "Ср", workout: "Силовая (верх + пресс)", duration: "40 мин", type: "strength", exercises: ["15 отжиманий 3 подхода", "20 скручиваний", "15 обратные отжимания", "Подъемы ног 15 раз"] },
      { day: 4, dayName: "Чт", workout: "Легкое кардио", duration: "30 мин", type: "cardio", exercises: ["Быстрая ходьба", "Велосипед"] },
      { day: 5, dayName: "Пт", workout: "HIIT тренировка", duration: "25 мин", type: "hiit", exercises: ["40 сек работа/20 сек отдых", "Берпи, прыжки, планка, приседания"] },
      { day: 6, dayName: "Сб", workout: "Силовая (все тело)", duration: "45 мин", type: "strength", exercises: ["Приседания, отжимания, выпады", "Планка, скручивания", "3 круга"] },
      { day: 7, dayName: "Вс", workout: "Отдых + растяжка", duration: "30 мин", type: "rest", exercises: ["Йога", "Глубокая растяжка всех групп мышц"] }
    ]
  },
  {
    id: "january",
    month: "Январь",
    emoji: "🔥",
    title: "Активное сжигание",
    subtitle: "Интенсивные тренировки, строгий контроль питания",
    progress: 42,
    color: "pink",
    goals: [
      "Сбросить 2-3 кг",
      "Увеличить выносливость",
      "Подтянуть проблемные зоны",
      "Видимый результат в талии"
    ],
    nutrition: {
      calories: "Дефицит 400-500 ккал",
      protein: "2г на кг веса",
      water: "3 литра в день",
      tips: "Убираем быстрые углеводы, фокус на белок и клетчатку"
    },
    schedule: [
      { day: 1, dayName: "Пн", workout: "Силовая (ноги интенсив)", duration: "50 мин", type: "strength", exercises: ["25 приседаний 4 подхода", "20 выпадов с весом", "25 ягодичный мост", "Прыжки 30 раз"] },
      { day: 2, dayName: "Вт", workout: "Интервальное кардио", duration: "40 мин", type: "cardio", exercises: ["Спринты 30 сек/отдых 30 сек", "10 интервалов"] },
      { day: 3, dayName: "Ср", workout: "Силовая (верх + кор)", duration: "45 мин", type: "strength", exercises: ["20 отжиманий 4 подхода", "Планка 1 мин", "30 скручиваний", "Отжимания на трицепс 15 раз"] },
      { day: 4, dayName: "Чт", workout: "HIIT максимум", duration: "30 мин", type: "hiit", exercises: ["Берпи 15 раз", "Прыжки 30 раз", "Планка с прыжками", "Скалолаз 30 сек"] },
      { day: 5, dayName: "Пт", workout: "Силовая (все тело)", duration: "50 мин", type: "strength", exercises: ["Суперсеты: приседания+отжимания", "Выпады+планка", "4 круга"] },
      { day: 6, dayName: "Сб", workout: "Длительное кардио", duration: "45 мин", type: "cardio", exercises: ["Бег средней интенсивности", "Или велосипед 45 мин"] },
      { day: 7, dayName: "Вс", workout: "Активное восстановление", duration: "40 мин", type: "rest", exercises: ["Йога", "Пилатес", "Растяжка"] }
    ]
  },
  {
    id: "february",
    month: "Февраль",
    emoji: "💪",
    title: "Набираем силу",
    subtitle: "Работаем на рельеф и силовые показатели",
    progress: 57,
    color: "pink",
    goals: [
      "Увеличить мышечную массу",
      "Заметный рельеф рук",
      "Подтянутые бёдра",
      "Плоский живот"
    ],
    nutrition: {
      calories: "Дефицит 300-400 ккал",
      protein: "2г на кг веса",
      water: "2.5-3 литра",
      tips: "Баланс БЖУ: белки 40%, жиры 25%, углеводы 35%"
    },
    schedule: [
      { day: 1, dayName: "Пн", workout: "Силовая ноги (тяжелая)", duration: "55 мин", type: "strength", exercises: ["Приседания с весом 4х15", "Становая тяга 4х12", "Выпады с гантелями 3х12", "Икры 4х20"] },
      { day: 2, dayName: "Вт", workout: "Интервальное кардио", duration: "35 мин", type: "cardio", exercises: ["Табата: 20 сек работа/10 сек отдых", "8 раундов"] },
      { day: 3, dayName: "Ср", workout: "Силовая верх + плечи", duration: "50 мин", type: "strength", exercises: ["Отжимания 4х15", "Жим гантелей 4х12", "Разводка 3х15", "Планка 1 мин 15 сек"] },
      { day: 4, dayName: "Чт", workout: "HIIT + пресс", duration: "35 мин", type: "hiit", exercises: ["Круговая: берпи, прыжки, скручивания", "Подъем ног, планка динамическая"] },
      { day: 5, dayName: "Пт", workout: "Силовая (ягодицы focus)", duration: "50 мин", type: "strength", exercises: ["Ягодичный мост 4х20", "Отведение ног 3х15", "Приседания плие 4х15"] },
      { day: 6, dayName: "Сб", workout: "Кардио длительное", duration: "50 мин", type: "cardio", exercises: ["Бег или плавание", "Средняя интенсивность"] },
      { day: 7, dayName: "Вс", workout: "Йога + растяжка", duration: "45 мин", type: "rest", exercises: ["Хатха-йога", "Глубокая растяжка"] }
    ]
  },
  {
    id: "march",
    month: "Март",
    emoji: "🌸",
    title: "Видимый результат",
    subtitle: "Закрепляем достижения, шлифуем форму",
    progress: 71,
    color: "pink",
    goals: [
      "Стабильный вес",
      "Четкий рельеф",
      "Выносливость на максимуме",
      "Уверенность в себе"
    ],
    nutrition: {
      calories: "Поддержание или дефицит 200-300 ккал",
      protein: "1.8-2г на кг",
      water: "2.5-3 литра",
      tips: "Добавляем разнообразие, один читмил в неделю"
    },
    schedule: [
      { day: 1, dayName: "Пн", workout: "Силовая + функционал", duration: "50 мин", type: "strength", exercises: ["Приседания на одной ноге", "Отжимания с хлопком", "Выпады в прыжке", "Планка боковая 45 сек"] },
      { day: 2, dayName: "Вт", workout: "Интервальный бег", duration: "40 мин", type: "cardio", exercises: ["Пирамида: 1-2-3-4-3-2-1 мин быстро", "Отдых между 1 мин"] },
      { day: 3, dayName: "Ср", workout: "Силовая верх (рельеф)", duration: "50 мин", type: "strength", exercises: ["Суперсеты на руки и плечи", "Высокий объем, средний вес"] },
      { day: 4, dayName: "Чт", workout: "HIIT комплекс", duration: "30 мин", type: "hiit", exercises: ["Круговая на всё тело", "5 упражнений, 6 кругов"] },
      { day: 5, dayName: "Пт", workout: "Силовая (ноги + ягодицы)", duration: "55 мин", type: "strength", exercises: ["Глубокие приседания", "Румынская тяга", "Ягодичный мост одной ногой"] },
      { day: 6, dayName: "Сб", workout: "Смешанное кардио", duration: "45 мин", type: "cardio", exercises: ["15 мин бег + 15 мин велосипед + 15 мин ходьба"] },
      { day: 7, dayName: "Вс", workout: "Восстановление", duration: "40 мин", type: "rest", exercises: ["Йога для восстановления", "Массаж роллером"] }
    ]
  },
  {
    id: "april",
    month: "Апрель",
    emoji: "✨",
    title: "Формируем рельеф",
    subtitle: "Работа на детали, шлифовка проблемных зон",
    progress: 85,
    color: "purple",
    goals: [
      "Рельефный пресс",
      "Красивая линия рук",
      "Округлые ягодицы",
      "Подтянутые бёдра"
    ],
    nutrition: {
      calories: "Поддержание",
      protein: "2г на кг",
      water: "3 литра",
      tips: "Чистое питание 80/20, больше зелени и клетчатки"
    },
    schedule: [
      { day: 1, dayName: "Пн", workout: "Низ + пресс детально", duration: "55 мин", type: "strength", exercises: ["Изолированные упражнения на ягодицы", "4 вида скручиваний", "Вакуум 3 подхода"] },
      { day: 2, dayName: "Вт", workout: "Кардио высокая интенсивность", duration: "35 мин", type: "cardio", exercises: ["Спринты на дорожке", "Максимальная интенсивность"] },
      { day: 3, dayName: "Ср", workout: "Верх + руки детально", duration: "50 мин", type: "strength", exercises: ["Изоляция бицепс/трицепс", "Плечи со всех углов", "Упражнения на осанку"] },
      { day: 4, dayName: "Чт", workout: "Функциональный HIIT", duration: "35 мин", type: "hiit", exercises: ["Кроссфит-стиль", "Комплексные движения"] },
      { day: 5, dayName: "Пт", workout: "Ягодицы + задняя поверхность", duration: "50 мин", type: "strength", exercises: ["Махи ногами все углы", "Гиперэкстензия", "Мёртвая тяга"] },
      { day: 6, dayName: "Сб", workout: "Кардио выбор", duration: "45 мин", type: "cardio", exercises: ["Бег, плавание или танцы", "Что больше нравится"] },
      { day: 7, dayName: "Вс", workout: "Стретчинг полный", duration: "50 мин", type: "rest", exercises: ["Глубокая растяжка всего тела", "Миофасциальный релиз"] }
    ]
  },
  {
    id: "may",
    month: "Май",
    emoji: "🌟",
    title: "Финальная шлифовка",
    subtitle: "Последние штрихи перед летом",
    progress: 95,
    color: "purple",
    goals: [
      "Идеальный тонус",
      "Максимальная выносливость",
      "Сияющая кожа",
      "Полная готовность к лету"
    ],
    nutrition: {
      calories: "Поддержание",
      protein: "1.8-2г на кг",
      water: "3 литра",
      tips: "Добавляем антиоксиданты, больше ягод и фруктов"
    },
    schedule: [
      { day: 1, dayName: "Пн", workout: "Полное тело высокий объем", duration: "55 мин", type: "strength", exercises: ["Круговая на всё тело", "Средний вес, много повторов"] },
      { day: 2, dayName: "Вт", workout: "Интервальное кардио", duration: "40 мин", type: "cardio", exercises: ["Фартлек: свободный бег с ускорениями", "По ощущениям"] },
      { day: 3, dayName: "Ср", workout: "Верх + кор", duration: "50 мин", type: "strength", exercises: ["Пампинг для рук", "Функциональные упражнения на пресс"] },
      { day: 4, dayName: "Чт", workout: "HIIT финальный", duration: "30 мин", type: "hiit", exercises: ["Самые любимые упражнения", "Максимум энергии"] },
      { day: 5, dayName: "Пт", workout: "Ноги завершающая", duration: "50 мин", type: "strength", exercises: ["Всё лучшее для ног и ягодиц", "Красивая форма"] },
      { day: 6, dayName: "Сб", workout: "Активность на выбор", duration: "60 мин", type: "cardio", exercises: ["Танцы, плавание, велопрогулка", "Удовольствие от движения"] },
      { day: 7, dayName: "Вс", workout: "Восстановление + массаж", duration: "45 мин", type: "rest", exercises: ["Йога-нидра", "Самомассаж", "Релакс"] }
    ]
  },
  {
    id: "june",
    month: "Июнь",
    emoji: "🏆",
    title: "Поддержание и наслаждение",
    subtitle: "Ты достигла цели! Поддерживаем форму",
    progress: 100,
    color: "pink",
    goals: [
      "Сохранить результат",
      "Наслаждаться телом",
      "Лёгкое поддержание",
      "Уверенность на пляже"
    ],
    nutrition: {
      calories: "Поддержание",
      protein: "1.5-2г на кг",
      water: "2.5-3 литра",
      tips: "80/20 - здоровое питание с удовольствием от жизни"
    },
    schedule: [
      { day: 1, dayName: "Пн", workout: "Силовая поддерживающая", duration: "45 мин", type: "strength", exercises: ["Базовые упражнения", "Комфортный темп"] },
      { day: 2, dayName: "Вт", workout: "Лёгкое кардио", duration: "30 мин", type: "cardio", exercises: ["Утренняя пробежка", "Наслаждение процессом"] },
      { day: 3, dayName: "Ср", workout: "Йога + растяжка", duration: "45 мин", type: "rest", exercises: ["Виньяса флоу", "Гибкость и расслабление"] },
      { day: 4, dayName: "Чт", workout: "Функционал лёгкий", duration: "30 мин", type: "strength", exercises: ["Упражнения с весом тела", "Поддержание тонуса"] },
      { day: 5, dayName: "Пт", workout: "Кардио на выбор", duration: "35 мин", type: "cardio", exercises: ["Что нравится сегодня", "Плавание, танцы, велосипед"] },
      { day: 6, dayName: "Сб", workout: "Активный отдых", duration: "60 мин", type: "rest", exercises: ["Прогулка, игры на свежем воздухе", "Движение в удовольствие"] },
      { day: 7, dayName: "Вс", workout: "Полный отдых", duration: "0 мин", type: "rest", exercises: ["Восстановление", "Подготовка к новой неделе"] }
    ]
  }
];

const getWorkoutIcon = (type: string) => {
  switch(type) {
    case "strength": return Dumbbell;
    case "cardio": return Heart;
    case "hiit": return Flame;
    case "rest": return Moon;
    default: return Circle;
  }
};

const getWorkoutColor = (type: string) => {
  switch(type) {
    case "strength": return "bg-purple-500";
    case "cardio": return "bg-pink-500";
    case "hiit": return "bg-orange-500";
    case "rest": return "bg-blue-400";
    default: return "bg-gray-400";
  }
};

export function MonthlyJourney() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-purple-900 mb-4 sm:mb-6">📅 Твой путь месяц за месяцем</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-purple-700 mb-6 sm:mb-8">
            Разверни каждый месяц и следуй программе день за днём
          </p>
          
          {/* Overall Progress */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border-2 border-purple-200">
            <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
              <span className="text-base sm:text-xl text-purple-700">Общий прогресс к лету</span>
              <span className="text-lg sm:text-2xl text-purple-900">0 → 100%</span>
            </div>
            <Progress value={0} className="h-2 sm:h-3" />
          </div>
        </div>

        {/* Monthly Accordion */}
        <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
          {monthsData.map((month) => (
            <AccordionItem
              key={month.id}
              value={month.id}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border-2 border-purple-200 overflow-hidden"
            >
              <AccordionTrigger className="px-4 sm:px-8 py-4 sm:py-6 hover:no-underline">
                <div className="flex items-start sm:items-center justify-between w-full pr-2 sm:pr-4 gap-3">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-6 flex-1">
                    <div className="text-3xl sm:text-5xl flex-shrink-0">{month.emoji}</div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl text-purple-900">{month.month}</h3>
                        <Badge variant="outline" className={`text-xs sm:text-sm ${month.color === 'purple' ? 'border-purple-400 text-purple-700' : 'border-pink-400 text-pink-700'}`}>
                          {month.title}
                        </Badge>
                      </div>
                      <p className="text-sm sm:text-base lg:text-xl text-purple-600 hidden sm:block">{month.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-lg sm:text-2xl text-purple-900 mb-1">{month.progress}%</div>
                      <Progress value={month.progress} className="w-16 sm:w-24 h-1.5 sm:h-2" />
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-4 sm:px-8 pb-6 sm:pb-8">
                {/* Goals */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    <h4 className="text-lg sm:text-xl lg:text-2xl text-purple-900">Цели месяца</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
                    {month.goals.map((goal, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm sm:text-base lg:text-lg text-purple-700">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nutrition */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Apple className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                    <h4 className="text-lg sm:text-xl lg:text-2xl text-purple-900">Питание</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div className="bg-white/60 rounded-lg sm:rounded-xl p-2 sm:p-4">
                      <div className="text-xs sm:text-base lg:text-lg text-purple-600 mb-1">Калории</div>
                      <div className="text-sm sm:text-lg lg:text-xl text-purple-900">{month.nutrition.calories}</div>
                    </div>
                    <div className="bg-white/60 rounded-lg sm:rounded-xl p-2 sm:p-4">
                      <div className="text-xs sm:text-base lg:text-lg text-purple-600 mb-1">Белок</div>
                      <div className="text-sm sm:text-lg lg:text-xl text-purple-900">{month.nutrition.protein}</div>
                    </div>
                    <div className="bg-white/60 rounded-lg sm:rounded-xl p-2 sm:p-4">
                      <div className="text-xs sm:text-base lg:text-lg text-purple-600 mb-1">Вода</div>
                      <div className="text-sm sm:text-lg lg:text-xl text-purple-900">{month.nutrition.water}</div>
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base lg:text-lg text-purple-700">{month.nutrition.tips}</span>
                    </div>
                  </div>
                </div>

                {/* Weekly Schedule */}
                <div className="bg-white/60 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    <h4 className="text-lg sm:text-xl lg:text-2xl text-purple-900">Недельная программа тренировок</h4>
                  </div>
                  
                  <div className="grid gap-2 sm:gap-3">
                    {month.schedule.map((day, idx) => {
                      const Icon = getWorkoutIcon(day.type);
                      const colorClass = getWorkoutColor(day.type);
                      
                      return (
                        <div key={idx} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-sm border border-purple-100">
                          <div className="flex items-start gap-2 sm:gap-4">
                            <div className={`${colorClass} p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0`}>
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                                <span className="text-base sm:text-lg lg:text-xl text-purple-900">{day.dayName}</span>
                                <span className="text-sm sm:text-base lg:text-xl text-purple-800">{day.workout}</span>
                                <Badge variant="secondary" className="text-xs sm:text-sm lg:text-base">
                                  {day.duration}
                                </Badge>
                              </div>
                              
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {day.exercises.map((exercise, exIdx) => (
                                  <span
                                    key={exIdx}
                                    className="bg-purple-50 px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm lg:text-base text-purple-700 border border-purple-200"
                                  >
                                    {exercise}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Progress Summary */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center shadow-2xl border-2 sm:border-4 border-white">
          <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h3 className="text-2xl sm:text-3xl lg:text-5xl text-white mb-4 sm:mb-6">
            Следуй плану — и результат гарантирован!
          </h3>
          <p className="text-base sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8">
            Каждый месяц приближает тебя к цели. Открывай следующий этап только когда готова.
          </p>
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            <Badge variant="secondary" className="text-sm sm:text-base lg:text-xl px-3 sm:px-6 py-2 sm:py-3">
              <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              8 месяцев тренировок
            </Badge>
            <Badge variant="secondary" className="text-sm sm:text-base lg:text-xl px-3 sm:px-6 py-2 sm:py-3">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              ~200 тренировок
            </Badge>
            <Badge variant="secondary" className="text-sm sm:text-base lg:text-xl px-3 sm:px-6 py-2 sm:py-3">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              100% результат
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
