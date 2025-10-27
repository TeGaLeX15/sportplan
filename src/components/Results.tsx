import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Star, Heart, Sparkles } from "lucide-react";

const expectedResults = [
  {
    title: "Физические изменения",
    icon: Trophy,
    color: "from-purple-500 to-purple-600",
    items: [
      "-5-10 кг жира (в зависимости от начального веса)",
      "Плоский подтянутый живот",
      "Упругие ягодицы и бёдра",
      "Рельефные руки и плечи",
      "Общий тонус всего тела"
    ]
  },
  {
    title: "Здоровье и энергия",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    items: [
      "Больше энергии в течение дня",
      "Крепкий здоровый сон",
      "Лучше пищеварение",
      "Чистая сияющая кожа",
      "Укрепление иммунитета"
    ]
  },
  {
    title: "Образ жизни",
    icon: Star,
    color: "from-purple-600 to-pink-600",
    items: [
      "Здоровые привычки на всю жизнь",
      "Понимание своего тела",
      "Дисциплина и сила воли",
      "Любовь к тренировкам",
      "Правильное отношение к еде"
    ]
  }
];

const finalTips = [
  "Главное — начать и не останавливаться",
  "Прогресс не линейный, будут взлёты и плато",
  "Ты делаешь это для себя, а не для других",
  "Каждый день — это новая возможность",
  "Любые изменения лучше, чем стояние на месте"
];

export function Results() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl text-purple-900 mb-6">🎉 Результат</h2>
          <p className="text-2xl text-purple-700">
            Что ты получишь через 7 месяцев
          </p>
        </div>
        
        {/* Expected results */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {expectedResults.map((result, index) => {
            const Icon = result.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200"
              >
                <div className={`bg-gradient-to-br ${result.color} p-4 rounded-2xl w-fit mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl text-purple-900 mb-6">{result.title}</h3>
                
                <ul className="space-y-3">
                  {result.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xl text-purple-700"
                    >
                      <span className="text-2xl text-purple-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        {/* Hero image section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-5xl text-purple-900">
              Ты будешь гордиться собой! 💜
            </h3>
            <p className="text-2xl text-purple-700 leading-relaxed">
              Это не просто изменение тела — это трансформация образа жизни. Ты станешь сильнее, увереннее и счастливее.
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200">
              <h4 className="text-3xl text-purple-900 mb-6">К лету ты:</h4>
              <ul className="space-y-4 text-xl text-purple-700">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <span>Влезешь в любимые летние платья</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <span>Будешь чувствовать лёгкость в теле</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <span>Не будешь стесняться на пляже</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <span>Получишь массу комплиментов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <span>Будешь источать уверенность</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur-3xl opacity-40"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1713209270646-a6531eda7afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwc3VtbWVyfGVufDF8fHx8MTc2MTU3OTUwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Summer fitness lifestyle"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Final motivation */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl border-4 border-white mb-16">
          <h3 className="text-5xl text-white mb-8 text-center">
            🌟 Важные напоминания
          </h3>
          
          <div className="space-y-4">
            {finalTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30"
              >
                <p className="text-2xl text-white text-center leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-purple-300 text-center">
          <h3 className="text-6xl text-purple-900 mb-6">
            Начни сегодня! 💪
          </h3>
          <p className="text-3xl text-purple-700 mb-8">
            Лето не за горами — время начать путь к телу мечты
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-300">
              <div className="text-5xl mb-3">1️⃣</div>
              <p className="text-2xl text-purple-900">Составь план на неделю</p>
            </div>
            <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-300">
              <div className="text-5xl mb-3">2️⃣</div>
              <p className="text-2xl text-purple-900">Сделай первое фото</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-300">
              <div className="text-5xl mb-3">3️⃣</div>
              <p className="text-2xl text-purple-900">Начни двигаться</p>
            </div>
          </div>
          
          <div className="mt-10 text-4xl">
            🌸✨💜
          </div>
          
          <p className="mt-8 text-2xl text-purple-700">
            Ты справишься! Ты уже на пути к своей лучшей версии!
          </p>
        </div>
      </div>
    </div>
  );
}
