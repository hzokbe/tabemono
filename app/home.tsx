import MealCard from "@/components/meal/MealCard";
import { Food } from "@/type/food/Food";
import { randomUUID } from "expo-crypto";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const foods: Food[] = [
    {
      id: randomUUID(),
      name: "Pizza de Calabresa",
      carbs: 25,
      protein: 12,
      fat: 11,
    },
    { id: randomUUID(), name: "Coca-Cola", carbs: 27, protein: 0, fat: 0 },
  ];

  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <MealCard name="Almoço" foods={foods} />
    </SafeAreaView>
  );
}
