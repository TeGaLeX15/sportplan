import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Apple, Coffee, Salad, Droplet } from "lucide-react";

const nutritionRules = [
  {
    title: "Калории: дефицит, но не голод",
    description: "Минус 300-500 ккал от нормы — комфортно и эффективно",
    icon: Apple,
    color: "bg-purple-500"
  },
  {
    title: "Белок — основа",
    description: "1.5-2 г на кг веса: мясо, рыба, яйца, творог",
    icon: Salad,
    color: "bg-pink-500"
  },
  {
    title: "Углеводы — энергия",
    description: "Крупы на завтрак и обед, вечером — минимум",
    icon: Coffee,
    color: "bg-purple-400"
  },
  {
    title: "Вода — основа метаболизма",
    description: "2-2.5 литра в день, больше в дни тренировок",
    icon: Droplet,
    color: "bg-pink-400"
  }
];

const mealPlan = [
  {
    meal: "Завтрак",
    time: "8:00 - 9:00",
    examples: ["Овсянка с ягодами и орехами", "Омлет из 3 яиц с овощами", "Творог с фруктами"]
  },
  {
    meal: "Перекус",
    time: "11:00 - 12:00",
    examples: ["Греческий йогурт", "Яблоко и горсть орехов", "Протеиновый коктейль"]
  },
  {
    meal: "Обед",
    time: "13:00 - 14:00",
    examples: ["Куриная грудка с гречкой и салатом", "Рыба с рисом и овощами", "Индейка с киноа"]
  },
  {
    meal: "Перекус",
    time: "16:00 - 17:00",
    examples: ["Творог", "Овощной салат", "Горсть орехов"]
  },
  {
    meal: "Ужин",
    time: "19:00 - 20:00",
    examples: ["Рыба или курица с овощами", "Салат с авокадо и яйцом", "Творожная запеканка"]
  }
];

export function Nutrition() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl text-purple-900 mb-6">🥗 Питание</h2>
          <p className="text-2xl text-purple-700">
            Простые правила, которые работают
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Rules */}
          <div className="space-y-6">
            {nutritionRules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${rule.color} p-3 rounded-xl flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-purple-900 mb-2">{rule.title}</h3>
                      <p className="text-xl text-purple-700">{rule.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606858274001-dd10efc5ce7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG1lYWwlMjBwcmVwfGVufDF8fHx8MTc2MTUzMzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthy meal prep"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Meal Plan */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-purple-200">
          <h3 className="text-4xl text-purple-900 mb-8 text-center">
            📋 Примерный план питания на день
          </h3>
          
          <div className="space-y-6">
            {mealPlan.map((item, index) => (
              <div
                key={index}
                className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xl">
                    {item.time}
                  </div>
                  <h4 className="text-3xl text-purple-900">{item.meal}</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {item.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="bg-white px-4 py-2 rounded-full text-lg text-purple-700 border border-purple-300"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
