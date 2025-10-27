import { Camera, Ruler, TrendingDown, Calendar, CheckCircle } from "lucide-react";

const trackingMethods = [
  {
    title: "Фото прогресса",
    description: "Раз в 2 недели — одежда, поза, освещение одинаковые",
    icon: Camera,
    color: "bg-purple-500",
    tips: [
      "Фотографируй в одно время дня",
      "Одинаковая одежда (например, купальник)",
      "Три ракурса: фронт, бок, спина",
      "Сохраняй в отдельной папке"
    ]
  },
  {
    title: "Замеры тела",
    description: "Раз в неделю — объёмы талии, бёдер, груди, рук",
    icon: Ruler,
    color: "bg-pink-500",
    tips: [
      "Утром натощак",
      "Используй сантиметровую ленту",
      "Записывай все показатели",
      "Сравнивай раз в месяц"
    ]
  },
  {
    title: "Взвешивание",
    description: "Раз в неделю — утром, после туалета, до еды",
    icon: TrendingDown,
    color: "bg-purple-600",
    tips: [
      "Один раз в неделю, не чаще",
      "Всегда в одно время",
      "Вес может колебаться — это нормально",
      "Смотри на общую тенденцию"
    ]
  },
  {
    title: "Дневник тренировок",
    description: "Записывай каждую тренировку и самочувствие",
    icon: Calendar,
    color: "bg-pink-600",
    tips: [
      "Дата и тип тренировки",
      "Упражнения и подходы",
      "Как себя чувствовала",
      "Отмечай личные рекорды"
    ]
  }
];

const milestones = [
  { month: "Ноябрь", goal: "Вошла в режим, первые 4 тренировки" },
  { month: "Декабрь", goal: "Стабильный график, привычка сформирована" },
  { month: "Январь", goal: "-2-3 кг, больше энергии" },
  { month: "Февраль", goal: "Видимые изменения в талии и бёдрах" },
  { month: "Март", goal: "Одежда сидит свободнее, больше выносливости" },
  { month: "Апрель", goal: "Заметный рельеф, подтянутые руки" },
  { month: "Май", goal: "Плоский живот, красивые ягодицы" },
  { month: "Июнь", goal: "Тело мечты готово к лету! 🎉" }
];

export function Progress() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl text-purple-900 mb-6">📊 Контроль прогресса</h2>
          <p className="text-2xl text-purple-700">
            Что измеряем, то и улучшается
          </p>
        </div>
        
        {/* Tracking methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {trackingMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200"
              >
                <div className={`${method.color} p-4 rounded-2xl w-fit mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl text-purple-900 mb-4">{method.title}</h3>
                <p className="text-xl text-purple-700 mb-6">{method.description}</p>
                
                <div className="space-y-3">
                  {method.tips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="bg-purple-50 px-4 py-3 rounded-xl text-lg text-purple-800"
                    >
                      ✓ {tip}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Milestones timeline */}
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 border-2 border-purple-300 mb-16">
          <h3 className="text-4xl text-purple-900 mb-8 text-center">
            🎯 Промежуточные цели
          </h3>
          
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border-2 border-purple-200 flex items-center gap-6"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl text-xl min-w-[140px] text-center">
                  {milestone.month}
                </div>
                <div className="flex items-center gap-4 flex-1">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <p className="text-2xl text-purple-800">{milestone.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-purple-200">
          <h3 className="text-4xl text-purple-900 mb-8 text-center">
            📈 Признаки прогресса (кроме весов)
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-300">
              <div className="text-4xl mb-4 text-center">💪</div>
              <h4 className="text-2xl text-purple-900 mb-4 text-center">Физические</h4>
              <ul className="space-y-2 text-lg text-purple-700">
                <li>• Одежда сидит свободнее</li>
                <li>• Больше энергии</li>
                <li>• Легче подниматься по лестнице</li>
                <li>• Лучше сон</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-300">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h4 className="text-2xl text-purple-900 mb-4 text-center">Ментальные</h4>
              <ul className="space-y-2 text-lg text-purple-700">
                <li>• Больше уверенности</li>
                <li>• Лучше настроение</li>
                <li>• Яснее мышление</li>
                <li>• Меньше стресса</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-300">
              <div className="text-4xl mb-4 text-center">✨</div>
              <h4 className="text-2xl text-purple-900 mb-4 text-center">Внешние</h4>
              <ul className="space-y-2 text-lg text-purple-700">
                <li>• Комплименты окружающих</li>
                <li>• Улучшение кожи</li>
                <li>• Более подтянутый силуэт</li>
                <li>• Сияющий вид</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
