import { Hero } from "./components/Hero";
import { MonthlyJourney } from "./components/MonthlyJourney";
import { HealthyHabits } from "./components/HealthyHabits";
import { FinalResults } from "./components/FinalResults";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-lavender-50">
      <Hero />
      <MonthlyJourney />
      <HealthyHabits />
      <FinalResults />
    </div>
  );
}
