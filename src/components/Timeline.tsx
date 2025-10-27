import { Calendar, TrendingUp, Zap, Award } from "lucide-react";

const stages = [
  {
    period: "Ноябрь – Декабрь",
    goal: "Входим в режим",
    description: "Мягкое начало, базовые упражнения, вырабатываем привычку",
    icon: Calendar,
    color: "from-purple-400 to-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300"
  },
  {
    period: "Январь – Март",
    goal: "Активное сжигание",
    description: "Увеличиваем интенсивность, добавляем интервалы, контроль питания",
    icon: TrendingUp,
    color: "from-pink-400 to-pink-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-300"
  },
  {
    period: "Апрель – Май",
    goal: "Формируем рельеф",
    description: "Работа на выносливость, шлифуем форму",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-400"
  },
  {
    period: "Июнь",
    goal: "Поддержание",
    description: "Поддерживаем форму, лёгкое кардио, тонус и отдых",
    icon: Award,
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-400"
  }
];

export function Timeline() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl text-purple-900 mb-6">📆 Этапы пути</h2>
          <p className="text-2xl text-purple-700">
            Пошаговый план на 7 месяцев — от первых шагов до тела мечты
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={index}
                className={`${stage.bgColor} rounded-3xl p-8 border-3 ${stage.borderColor} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-start gap-6">
                  <div className={`bg-gradient-to-br ${stage.color} p-4 rounded-2xl shadow-lg flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-xl text-purple-600 mb-2">{stage.period}</div>
                    <h3 className="text-3xl text-purple-900 mb-4">{stage.goal}</h3>
                    <p className="text-xl text-purple-700 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Timeline visualization */}
        <div className="mt-12 bg-white/60 rounded-3xl p-8 border-2 border-purple-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-purple-300">
                  <th className="text-left py-4 px-6 text-2xl text-purple-900">Период</th>
                  <th className="text-left py-4 px-6 text-2xl text-purple-900">Цель</th>
                  <th className="text-left py-4 px-6 text-2xl text-purple-900">Что делаем</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((stage, index) => (
                  <tr key={index} className="border-b border-purple-200">
                    <td className="py-6 px-6 text-xl text-purple-800">{stage.period}</td>
                    <td className="py-6 px-6 text-xl text-purple-900">{stage.goal}</td>
                    <td className="py-6 px-6 text-xl text-purple-700">{stage.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
