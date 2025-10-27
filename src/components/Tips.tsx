import { Moon, Sun, Heart, Smile, Brain, Battery } from "lucide-react";

const tips = [
  {
    title: "Сон — твой лучший друг",
    description: "7-8 часов качественного сна ускоряют восстановление и жиросжигание",
    icon: Moon,
    color: "bg-purple-500",
    details: [
      "Ложись и вставай в одно время",
      "Проветривай комнату перед сном",
      "Убери телефон за час до сна"
    ]
  },
  {
    title: "Утренняя зарядка",
    description: "10 минут лёгкой активности запускают метаболизм на весь день",
    icon: Sun,
    color: "bg-pink-500",
    details: [
      "Растяжка после пробуждения",
      "5-10 приседаний",
      "Стакан воды натощак"
    ]
  },
  {
    title: "Следи за стрессом",
    description: "Кортизол (гормон стресса) мешает похудению и провоцирует срывы",
    icon: Heart,
    color: "bg-purple-600",
    details: [
      "Медитация 10 минут в день",
      "Дыхательные практики",
      "Прогулки на свежем воздухе"
    ]
  },
  {
    title: "Не запрещай себе вкусное",
    description: "Раз в неделю позволь себе любимое блюдо — это не срыв, а баланс",
    icon: Smile,
    color: "bg-pink-600",
    details: [
      "Планируй читмил заранее",
      "Наслаждайся без чувства вины",
      "Вернись к плану на следующий день"
    ]
  },
  {
    title: "Визуализируй результат",
    description: "Представляй себя в желаемой форме — мозг поможет достичь цели",
    icon: Brain,
    color: "bg-purple-400",
    details: [
      "Создай доску желаний",
      "Записывай свои цели",
      "Представляй себя в новой форме каждый день"
    ]
  },
  {
    title: "Энергия важнее веса",
    description: "Ориентируйся на самочувствие, лёгкость и тонус, а не только на цифры",
    icon: Battery,
    color: "bg-pink-400",
    details: [
      "Отмечай прилив энергии",
      "Замечай, как легче двигаться",
      "Радуйся каждому улучшению"
    ]
  }
];

const motivation = [
  "Ты уже сделала первый шаг — решила измениться",
  "Каждая тренировка делает тебя сильнее",
  "Твоё тело благодарит за каждое правильное решение",
  "Прогресс не всегда виден сразу, но он есть",
  "Ты создаёшь не просто тело, а образ жизни",
  "Лето начинается сейчас — с твоего решения"
];

export function Tips() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl text-purple-900 mb-6">✨ Советы и мотивация</h2>
          <p className="text-2xl text-purple-700">
            Маленькие привычки, которые делают большую разницу
          </p>
        </div>
        
        {/* Tips grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow"
              >
                <div className={`${tip.color} p-4 rounded-2xl w-fit mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl text-purple-900 mb-4">{tip.title}</h3>
                <p className="text-xl text-purple-700 mb-6">{tip.description}</p>
                
                <div className="space-y-2">
                  {tip.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-lg text-purple-800"
                    >
                      <span className="text-purple-500 mt-1">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Motivation section */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl border-4 border-white">
          <h3 className="text-5xl text-white mb-10 text-center">
            💝 Помни каждый день
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {motivation.map((quote, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30"
              >
                <p className="text-2xl text-white leading-relaxed">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Key reminders */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-purple-200">
          <h3 className="text-4xl text-purple-900 mb-8 text-center">
            🌟 Золотые правила
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-300">
              <h4 className="text-2xl text-purple-900 mb-4">❌ Не делай:</h4>
              <ul className="space-y-3 text-xl text-purple-700">
                <li>• Голодай или сидеть на жёстких диетах</li>
                <li>• Взвешивайся каждый день</li>
                <li>• Сравнивай себя с другими</li>
                <li>• Наказывай себя за срывы</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-300">
              <h4 className="text-2xl text-purple-900 mb-4">✅ Делай:</h4>
              <ul className="space-y-3 text-xl text-purple-700">
                <li>• Слушай своё тело</li>
                <li>• Отмечай маленькие победы</li>
                <li>• Получай удовольствие от процесса</li>
                <li>• Будь терпеливой и последовательной</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
