import React, { useState } from "react";
import { toast } from "react-toastify";
import { shareNewMovie } from "../api/movie";
import Button from "../components/Button";
import Input from "../components/Input";
import { handleError } from "../utils";
import { useAuthContext } from "../contexts/Auth";

type Props = {};

const Share = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const context = useAuthContext();
  const handleShareNewMovie = async () => {
    try {
      if (value && context?.auth) {
        const res = await shareNewMovie({
          url: value,
          shareBy: context?.auth,
          title: "Title" + new Date().getTime(),
          description: "Description" + "Title" + new Date().getTime(),
        });
        setValue("");
        toast.success("Movie have been saved");
      }
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <div className="w-[600px] m-auto mt-[120px] border px-[40px] py-[50px] border-black relative">
      <div className="flex gap-2">
        <h3 className="px-3 absolute bg-white top-0 left-4 translate-y-[-50%]">
          Share a Youtube movie
        </h3>
        <label className="mt-2 font-medium">Youtube URL:</label>
        <div className="flex flex-col flex-1 gap-3">
          <Input onChange={(e) => setValue(e.target.value)} value={value} />
          <Button variant="secondary" onClick={handleShareNewMovie}>
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Share;
