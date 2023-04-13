import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { addList } from "../../redux/listsRedux";

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Title:{" "}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Description:{" "}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ListForm;
