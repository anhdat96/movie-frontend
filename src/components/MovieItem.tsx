import { useMemo } from "react";
import { getAuthData, getEmbedUrl } from "../utils";
import {
  disLikePath,
  likeSvgPath,
  solidDisLikePath,
  solidLikePath,
} from "../utils/contants";
import { IMovie } from "../utils/types/movie.type";

type Props = {
  movie: IMovie;
  onUpVote: (id: string) => Promise<void>;
  onDownVote: (id: string) => Promise<void>;
  onUnVote: (id: string) => Promise<void>;
};

const MovieItem = ({ movie, onUpVote, onDownVote, onUnVote }: Props) => {
  const authData = getAuthData();
  const vote = useMemo(() => {
    if (movie.likeListUserDTO?.find((i) => authData?.id === i)) return "up";
    if (movie.dislikeListUserDTO?.find((i) => authData?.id === i))
      return "down";
    return false;
  }, [movie, authData]);

  return (
    <div className="flex gap-5">
      <div className="">
        <iframe
          // className="left-0 top-0 w-full h-full absolute"
          width="480"
          height="300"
          src={getEmbedUrl(movie.url)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col flex-1 px-4">
        <div className="flex w-full ">
          <div>
            <h4 className="text-red-600 text-xl font-medium">
              {movie.title || "Movie Title"}
            </h4>
            <p>
              Shared by: <span className="font-medium">{movie.shareBy}</span>
            </p>
            <div className="flex gap-3 items-center mt-2">
              <span className="flex gap-1 items-center">
                {movie.likeListUserDTO?.length || 0}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 512 512"
                >
                  <path d={likeSvgPath} />
                </svg>
              </span>
              <span className="flex gap-1 items-center">
                {movie.dislikeListUserDTO?.length || 0}
                <svg
                  width={16}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d={disLikePath} />
                </svg>
              </span>
            </div>
          </div>
          {authData && (
            <div className="ml-auto flex gap-4">
              {!vote && (
                <>
                  {" "}
                  <svg
                    onClick={() => onUpVote(movie.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 512 512"
                    className="hover:text-black hover:cursor-pointer hover:fill-blue-900"
                  >
                    <path d={likeSvgPath} />
                  </svg>
                  <svg
                    onClick={() => onDownVote(movie.id)}
                    width={32}
                    height={32}
                    className="hover:text-black hover:cursor-pointer hover:fill-blue-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d={disLikePath} />
                  </svg>
                </>
              )}

              {vote &&
                (vote === "up" ? (
                  <svg
                    onClick={() => onUnVote(movie.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 512 512"
                    className="hover:text-black hover:cursor-pointer hover:fill-blue-900"
                  >
                    <path d={solidLikePath} />
                  </svg>
                ) : (
                  <svg
                    onClick={() => onUnVote(movie.id)}
                    width={32}
                    height={32}
                    className="hover:text-black hover:cursor-pointer hover:fill-blue-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d={solidDisLikePath} />
                  </svg>
                ))}
            </div>
          )}
        </div>
        <div>
          <h6 className="text-lg font-medium">Description :</h6>
          <p
          // className="line-clamp-3"
          // style={{
          //   overflow: 'hidden',
          //   display: '-webkit-box',
          //   '-webkit-box-orient': 'vertical',
          //   '-webkit-line-clamp': 2 /* number of lines to show */,
          //   'line-clamp': 2,
          // }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            nobis magni. Ex laborum velit eius sit ipsam enim officiis ullam
            cumque vero ratione. Officia voluptates quibusdam omnis, cumque at
            blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet ullam dolore officiis quidem aspernatur fugit nobis
            temporibus! Ratione laboriosam laborum quis vel, distinctio
            cupiditate asperiores? Obcaecati ipsum iure vitae dignissimos! Lorem
            ipsum dolor
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
