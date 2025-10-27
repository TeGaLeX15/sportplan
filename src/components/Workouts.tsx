import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dumbbell, Heart, Flame, Timer } from "lucide-react";

const workoutTypes = [
  {
    title: "Силовые тренировки",
    frequency: "3-4 раза в неделю",
    duration: "45-60 минут",
    description: "Упражнения с весом или собственным весом",
    icon: Dumbbell,
    color: "from-purple-500 to-purple-600",
    exercises: [
      "Приседания",
      "Выпады",
      "Планка",
      "Отжимания",
      "Подтягивания",
      "Жим гантелей"
    ]
  },
  {
    title: "Кардио",
    frequency: "2-3 раза в неделю",
    duration: "30-45 минут",
    description: "Для сжигания жира и выносливости",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    exercises: [
      "Бег трусцой",
      "Велосипед",
      "Скакалка",
      "Быстрая ходьба",
      "Плавание",
      "Танцы"
    ]
  },
  {
    title: "HIIT интервалы",
    frequency: "1-2 раза в неделю",
    duration: "20-30 минут",
    description: "Высокоинтенсивные интервальные тренировки",
    icon: Flame,
    color: "from-purple-600 to-pink-600",
    exercises: [
      "Берпи",
      "Прыжки",
      "Спринты",
      "Скалолаз",
      "Прыжки на месте",
      "Планка динамическая"
    ]
  }
];

const weekSchedule = [
  { day: "Понедельник", workout: "Силовая (ноги + ягодицы)", duration: "60 мин" },
  { day: "Вторник", workout: "Кардио (бег или велосипед)", duration: "40 мин" },
  { day: "Среда", workout: "Силовая (верх тела)", duration: "50 мин" },
  { day: "Четверг", workout: "Отдых или лёгкая растяжка", duration: "30 мин" },
  { day: "Пятница", workout: "HIIT тренировка", duration: "25 мин" },
  { day: "Суббота", workout: "Силовая (все тело)", duration: "60 мин" },
  { day: "Воскресенье", workout: "Активный отдых (прогулка, йога)", duration: "45 мин" }
];

export function Workouts() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl text-purple-900 mb-6">💪 Тренировки</h2>
          <p className="text-2xl text-purple-700">
            Разнообразие и регулярность — ключ к успеху
          </p>
        </div>
        
        {/* Workout types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {workoutTypes.map((workout, index) => {
            const Icon = workout.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-br ${workout.color} p-4 rounded-2xl w-fit mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl text-purple-900 mb-4">{workout.title}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xl text-purple-700">
                    <Timer className="w-5 h-5" />
                    <span>{workout.frequency}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xl text-purple-700">
                    <span>⏱️</span>
                    <span>{workout.duration}</span>
                  </div>
                </div>
                
                <p className="text-xl text-purple-700 mb-6">{workout.description}</p>
                
                <div className="space-y-2">
                  <p className="text-lg text-purple-600 mb-3">Примеры упражнений:</p>
                  {workout.exercises.map((exercise, idx) => (
                    <div
                      key={idx}
                      className="bg-purple-50 px-4 py-2 rounded-lg text-lg text-purple-800"
                    >
                      • {exercise}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Image section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599879463-58aad7d947f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29ya291dCUyMHN0cmV0Y2hpbmd8ZW58MXx8fHwxNzYxNTU4NjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Yoga and stretching"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 border-2 border-purple-300">
            <h3 className="text-4xl text-purple-900 mb-6">✨ Важные принципы</h3>
            <ul className="space-y-4 text-xl text-purple-800">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <span>Начинай с комфортного уровня и постепенно увеличивай нагрузку</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔥</span>
                <span>Следи за техникой выполнения — качество важнее количества</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <span>Пей воду до, во время и после тренировки</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌙</span>
                <span>Давай телу отдыхать — восстановление критически важно</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <span>Заводи дневник тренировок — отслеживай прогресс</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Weekly schedule */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-purple-200">
          <h3 className="text-4xl text-purple-900 mb-8 text-center">
            📅 Пример недельного плана
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {weekSchedule.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border-2 ${
                  item.workout.includes("Отдых") || item.workout.includes("Активный")
                    ? "bg-pink-50 border-pink-300"
                    : "bg-purple-50 border-purple-300"
                }`}
              >
                <div className="text-xl text-purple-900 mb-3">{item.day}</div>
                <div className="text-xl text-purple-800 mb-2">{item.workout}</div>
                <div className="text-lg text-purple-600">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
