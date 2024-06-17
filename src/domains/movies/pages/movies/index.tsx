import { Text } from "@/shared/ui/Text";
import { useSearchParams } from "react-router-dom";

export const Movies = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("filter"));
  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
};
