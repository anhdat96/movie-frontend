import axiosInstance from ".";
import { CreateMovieDto } from "../utils/types/movie.type";

export const shareNewMovie = async (createMovieInput: CreateMovieDto) => {
  return axiosInstance.post("/share-movies", createMovieInput);
};

export const getMovies = async () => {
  return axiosInstance.get("/get-movies");
};

export const vote = async (id: string, email: string, isUpVote: boolean) => {
  return axiosInstance.post(`/vote-movies`, {
    id: id,
    title: "",
    description: "",
    shareby: email,
    likeVoted: isUpVote,
    dislikeVoted: !isUpVote,
    likeListUserDTO: null,
    dislikeListUserDTO: null,
    url: "",
  });
};

export const unVote = async (id: string, email: string) => {
  return axiosInstance.post(`/vote-movies`, {
    id: id,
    title: "",
    description: "",
    shareby: email,
    likeVoted: false,
    dislikeVoted: false,
    likeListUserDTO: null,
    dislikeListUserDTO: null,
    url: "",
  });
};

// async function postJSON(data) {
//   try {
//     const response = await fetch(
//       "http://18.143.129.177:8080/movies/vote-movies",
//       {
//         method: "POST", // or 'PUT'
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// const data = {
//   id: "645de537e843c510547b4bff",
//   title: "",
//   description: "",
//   shareby: "ydat1998@gmail.com",
//   likeVoted: true,
//   dislikeVoted: false,
//   url: "",
// };
// postJSON(data);
