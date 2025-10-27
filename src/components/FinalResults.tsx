import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Star, Heart, Sparkles, TrendingUp, Zap, Award } from "lucide-react";
import { Badge } from "./ui/badge";

const transformations = [
  {
    aspect: "Физическое тело",
    icon: Trophy,
    color: "from-purple-500 to-purple-600",
    results: [
      "Потеря 5-10 кг жира",
      "Подтянутый плоский живот",
      "Рельефные руки и плечи",
      "Упругие ягодицы",
      "Стройные бёдра без целлюлита",
      "Общий тонус всего тела"
    ]
  },
  {
    aspect: "Здоровье",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    results: [
      "Энергия на весь день",
      "Крепкий здоровый сон",
      "Улучшенный метаболизм",
      "Сияющая кожа",
      "Сильный иммунитет",
      "Отличное самочувствие"
    ]
  },
  {
    aspect: "Образ жизни",
    icon: Star,
    color: "from-purple-600 to-pink-600",
    results: [
      "Здоровые привычки на всю жизнь",
      "Любовь к движению",
      "Осознанное питание",
      "Дисциплина и сила воли",
      "Уверенность в себе",
      "Вдохновение для других"
    ]
  }
];

const beforeAfter = [
  { label: "Вес", before: "Исходный", after: "-5-10 кг" },
  { label: "Талия", before: "Исходная", after: "-5-10 см" },
  { label: "Бёдра", before: "Исходные", after: "-3-7 см" },
  { label: "Энергия", before: "Низкая", after: "Максимальная" },
  { label: "Уверенность", before: "Неуверенная", after: "На высоте" },
  { label: "Настроение", before: "Переменчивое", after: "Отличное" }
];

const finalTips = [
  "Ты прошла невероятный путь",
  "Теперь ты знаешь, что можешь всё",
  "Это не конец — это новый образ жизни",
  "Продолжай поддерживать форму",
  "Наслаждайся своим телом",
  "Вдохновляй других своим примером"
];

export function FinalResults() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full mb-4 sm:mb-6">
            <Award className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-xl lg:text-2xl">Июнь — Ты достигла цели!</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl text-purple-900 mb-4 sm:mb-8">
            🎉 Результат: Тело мечты!
          </h2>
          <p className="text-lg sm:text-2xl lg:text-3xl text-purple-700 max-w-3xl mx-auto leading-relaxed px-4">
            7 месяцев упорства, дисциплины и веры в себя. Вот что ты получила:
          </p>
        </div>

        {/* Transformation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16">
          {transformations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border-2 border-purple-200"
              >
                <div className={`bg-gradient-to-br ${item.color} p-4 sm:p-5 rounded-xl sm:rounded-2xl w-fit mx-auto mb-4 sm:mb-6`}>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl text-purple-900 mb-4 sm:mb-6 text-center">{item.aspect}</h3>
                
                <ul className="space-y-2 sm:space-y-3">
                  {item.results.map((result, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base lg:text-xl text-purple-700"
                    >
                      <span className="text-lg sm:text-2xl text-purple-500 flex-shrink-0">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Before/After Comparison */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl border-2 border-purple-300 mb-10 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-purple-900 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <TrendingUp className="w-6 h-6 sm:w-10 sm:h-10 text-purple-600 flex-shrink-0" />
            <span>Твоя трансформация</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {beforeAfter.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-purple-200"
              >
                <div className="text-base sm:text-lg lg:text-xl text-purple-600 mb-3 sm:mb-4 text-center">{item.label}</div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-center flex-1">
                    <div className="text-xs sm:text-sm lg:text-base text-purple-500 mb-1">Было</div>
                    <div className="text-sm sm:text-base lg:text-xl text-purple-800">{item.before}</div>
                  </div>
                  <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-pink-500 mx-1 sm:mx-2 flex-shrink-0" />
                  <div className="text-center flex-1">
                    <div className="text-xs sm:text-sm lg:text-base text-purple-500 mb-1">Стало</div>
                    <div className="text-base sm:text-lg lg:text-2xl text-purple-900">{item.after}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center mb-10 sm:mb-16">
          <div className="relative order-first lg:order-first">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl sm:rounded-3xl blur-3xl opacity-40"></div>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758684052387-e3d04da14c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ29hbHMlMjBhY2hpZXZlbWVudHxlbnwxfHx8fDE3NjE1Nzk1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Achievement"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl text-purple-900 leading-tight">
              Теперь ты можешь всё! 💜
            </h3>
            
            <p className="text-base sm:text-xl lg:text-2xl text-purple-700 leading-relaxed">
              Ты доказала себе, что способна на многое. Это не просто изменение внешности — 
              это полная трансформация твоей жизни, мышления и отношения к себе.
            </p>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-purple-300">
              <h4 className="text-xl sm:text-2xl lg:text-3xl text-purple-900 mb-4 sm:mb-6">К лету ты готова:</h4>
              <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base lg:text-xl text-purple-700">
                <li className="flex items-start gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Уверенно носить любую одежду</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Чувствовать себя легко и свободно</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Наслаждаться пляжным сезоном</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Получать комплименты каждый день</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Быть примером для окружающих</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Гордиться собой каждый день</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Motivation */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl border-4 border-white mb-16">
          <h3 className="text-5xl text-white mb-10 text-center">
            💝 Помни всегда
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
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

          <div className="text-center">
            <p className="text-3xl text-white mb-6">
              Это твоя победа! 🏆
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="text-xl px-6 py-3">
                7 месяцев пути
              </Badge>
              <Badge variant="secondary" className="text-xl px-6 py-3">
                ~200 тренировок
              </Badge>
              <Badge variant="secondary" className="text-xl px-6 py-3">
                1000% уверенности
              </Badge>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-purple-300 text-center">
          <h3 className="text-6xl text-purple-900 mb-8">
            А что дальше? 🌟
          </h3>
          
          <p className="text-3xl text-purple-700 mb-10 max-w-3xl mx-auto">
            Теперь твоя задача — поддерживать результат и наслаждаться жизнью в новом теле!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-300">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-2xl text-purple-900 mb-4">Поддерживай</h4>
              <p className="text-xl text-purple-700">
                3-4 тренировки в неделю, здоровое питание 80/20
              </p>
            </div>
            
            <div className="bg-pink-50 rounded-2xl p-8 border-2 border-pink-300">
              <div className="text-5xl mb-4">💖</div>
              <h4 className="text-2xl text-purple-900 mb-4">Наслаждайся</h4>
              <p className="text-xl text-purple-700">
                Своим телом, энергией, уверенностью и комплиментами
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-300">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="text-2xl text-purple-900 mb-4">Вдохновляй</h4>
              <p className="text-xl text-purple-700">
                Других своим примером и историей трансформации
              </p>
            </div>
          </div>

          <div className="mt-12 text-5xl">
            🌸💜✨🏆💪
          </div>
          
          <p className="mt-8 text-3xl text-purple-900">
            Ты — невероятная! Продолжай сиять! ⭐
          </p>
        </div>
      </div>
    </div>
  );
}
