export type CreateMovieDto = {
  url: string;
  shareBy: string;
  title: string;
  description: string;
};

export interface IMovie {
  id: string;

  url: string;

  title?: string;

  description: string;

  shareBy: string;

  likeListUserDTO: string[] | null;

  dislikeListUserDTO: string[] | null;
}
