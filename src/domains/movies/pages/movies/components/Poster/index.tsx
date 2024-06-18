import { PosterContainer, PosterImage, RateChip } from "./ui";

import { NoImage } from "@/assets/icons/no-image";

type TPosterProps = {
  src: string;
  rating: {
    score: number;
    reviewer: string;
  };
};

export const Poster = ({ src, rating }: TPosterProps) => {
  return (
    <PosterContainer>
      {!!rating.score && (
        <RateChip
          label={`${rating.reviewer.toLocaleUpperCase()} ${rating.score}`}
        />
      )}
      {src ? <PosterImage src={src} /> : <NoImage />}
    </PosterContainer>
  );
};
