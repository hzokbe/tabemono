import { Card } from "../ui/card";
import { Heading } from "../ui/heading";
import { Progress, ProgressFilledTrack } from "../ui/progress";

interface CaloriesCardProps {
  consumed: number;

  total: number;
}

export default function CaloriesCard({ consumed, total }: CaloriesCardProps) {
  const remaining = Math.max(total - consumed, 0);

  const value = (remaining * 100) / total;

  return (
    <Card className="p-8 bg-background-50">
      <Heading className="mb-2 color-typography-800" size="md">
        {consumed} de {total} calorias diárias consumidas
      </Heading>

      <Heading className="mb-2 color-typography-800" size="xs">
        Faltam {remaining} calorias
      </Heading>

      <Progress value={100 - value} size="md" orientation="horizontal">
        <ProgressFilledTrack />
      </Progress>
    </Card>
  );
}
