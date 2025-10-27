import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Calendar, Target, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-50 opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <Badge className="bg-purple-500 text-white px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Ноябрь — Июнь
              </Badge>
              <Badge className="bg-pink-500 text-white px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                8 месяцев
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-purple-900 leading-tight">
              🌸 Путь к телу мечты до лета
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-purple-700 leading-relaxed">
              Лёгкий, понятный и реальный план сжигания жира и приведения тела в тонус
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                <h2 className="text-xl sm:text-2xl text-purple-900">Ты не начинаешь с нуля</h2>
              </div>
              <p className="text-base sm:text-xl text-purple-800 mb-4 sm:mb-6 leading-relaxed">
                Ты просто возвращаешь себя в форму. Главная цель — тело в тонусе, 
                меньше жира, больше энергии, лёгкость и уверенность.
              </p>
              
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl text-purple-900 mb-3 sm:mb-4">
                  За 8 месяцев ты сможешь:
                </p>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-xl text-purple-700">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">✓</span>
                    <span>Убрать живот и "висячие зоны"</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">✓</span>
                    <span>Подтянуть бёдра, руки и пресс</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">✓</span>
                    <span>Вернуть лёгкость без жёстких диет</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">✓</span>
                    <span>Обрести уверенность и любовь к себе</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-purple-500 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center shadow-lg">
                <div className="text-2xl sm:text-4xl text-white mb-1 sm:mb-2">8</div>
                <div className="text-xs sm:text-lg text-white/90">месяцев</div>
              </div>
              <div className="bg-pink-500 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center shadow-lg">
                <div className="text-2xl sm:text-4xl text-white mb-1 sm:mb-2">~200</div>
                <div className="text-xs sm:text-lg text-white/90">тренировок</div>
              </div>
              <div className="bg-purple-600 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center shadow-lg">
                <div className="text-2xl sm:text-4xl text-white mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-lg text-white/90">результат</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl sm:rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649789248266-ef1c7f744f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjBtb3RpdmF0aW9ufGVufDF8fHx8MTc2MTU3OTUwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fitness motivation"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl border-2 sm:border-4 border-white">
              <div className="flex items-center gap-2 sm:gap-3">
                <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8" />
                <div>
                  <div className="text-xs sm:text-base">Начни сегодня</div>
                  <div className="text-base sm:text-2xl">Лето ждёт! ☀️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
