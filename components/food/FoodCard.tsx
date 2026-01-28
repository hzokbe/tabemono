import { Card } from "../ui/card";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";

interface FoodCardProps {
  name: string;

  carbs: number;

  protein: number;

  fat: number;
}

export default function FoodCard({ name, carbs, protein, fat }: FoodCardProps) {
  return (
    <Card className="bg-background-50">
      <Heading className="mb-2 color-typography-800" size="md">
        {name}
      </Heading>

      <Text className="color-typography-800">
        {carbs}g de carboidratos. {protein}g de proteínas. {fat}g de gorduras
        totais.
      </Text>
    </Card>
  );
}
