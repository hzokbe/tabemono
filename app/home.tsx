import FoodCard from "@/components/food/FoodCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <FoodCard name="Pizza" carbs={25} protein={12} fat={11} />
    </SafeAreaView>
  );
}
