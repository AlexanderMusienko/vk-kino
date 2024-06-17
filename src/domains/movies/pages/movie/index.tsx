import { Text } from "@/shared/ui/Text";
import { useParams } from "react-router-dom";

export const Movie = () => {
  const { id } = useParams();
  return <Text>Movie instance: {id}</Text>;
};
