import { Food } from "@/type/food/Food";
import { FlatList } from "react-native";
import FoodCard from "../food/FoodCard";
import { Box } from "../ui/box";
import { Card } from "../ui/card";
import { Heading } from "../ui/heading";

interface MealCardProps {
  name: string;

  foods: Food[];
}

export default function MealCard({ name, foods }: MealCardProps) {
  return (
    <Card className="p-8 bg-background-0" variant="ghost">
      <Heading className="mb-2 color-typography-800" size="2xl">
        {name}
      </Heading>

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodCard
            name={item.name}
            carbs={item.carbs}
            protein={item.protein}
            fat={item.fat}
          />
        )}
        ItemSeparatorComponent={() => <Box className="h-4" />}
      />
    </Card>
  );
}
