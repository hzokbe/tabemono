import CaloriesCard from "@/components/calories/CaloriesCard";
import MealCard from "@/components/meal/MealCard";
import { Food } from "@/type/food/Food";
import { randomUUID } from "expo-crypto";
import { Redirect } from "expo-router";
import { SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const lunch: Food[] = [
    {
      id: randomUUID(),
      name: "Peito de Frango Grelhado",
      carbs: 0,
      protein: 31,
      fat: 3,
    },
    {
      id: randomUUID(),
      name: "Arroz Integral",
      carbs: 23,
      protein: 3,
      fat: 1,
    },
    {
      id: randomUUID(),
      name: "Salada Verde com Azeite",
      carbs: 5,
      protein: 2,
      fat: 7,
    },
  ];

  const dinner: Food[] = [
    {
      id: randomUUID(),
      name: "Salmão Grelhado",
      carbs: 0,
      protein: 22,
      fat: 12,
    },
    {
      id: randomUUID(),
      name: "Batata Doce Assada",
      carbs: 20,
      protein: 2,
      fat: 0,
    },
    {
      id: randomUUID(),
      name: "Brócolis no Vapor",
      carbs: 7,
      protein: 3,
      fat: 0,
    },
  ];

  const sections = [
    { title: "Almoço", data: lunch },
    { title: "Jantar", data: dinner },
  ];

  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <CaloriesCard consumed={1800} total={2200} />

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <MealCard name={section.title} foods={section.data} />
        )}
        renderItem={() => null}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
}
