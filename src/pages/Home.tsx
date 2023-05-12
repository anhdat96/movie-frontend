import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMovies, unVote, vote } from "../api/movie";
import MovieItem from "../components/MovieItem";
import { getAuthData, handleError } from "../utils";
import { IMovie } from "../utils/types/movie.type";

type Props = {};

const Home = (props: Props) => {
  const authData = getAuthData();

  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () =>
    getMovies()
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        handleError(err);
      });

  const handleUpVote = async (id: string) => {
    try {
      await vote(id, authData?.email || "", true);
      await fetchMovies();
    } catch (err) {
      handleError(err);
    }
  };
  const handleDownVote = async (id: string) => {
    try {
      await vote(id, authData?.email || "", false);
      await fetchMovies();
    } catch (err) {
      handleError(err);
    }
  };
  const handleUnVote = async (id: string) => {
    try {
      await unVote(id, authData?.email || "");
      await fetchMovies();
    } catch (err) {
      toast.error("Failed to vote");
    }
  };
  return (
    <div className="flex flex-col gap-10 p-20">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onUpVote={handleUpVote}
          onDownVote={handleDownVote}
          onUnVote={handleUnVote}
        />
      ))}
    </div>
  );
};

export default Home;
