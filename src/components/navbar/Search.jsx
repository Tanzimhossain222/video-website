import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../../assets/search.svg";
import { searched } from "../../redux/features/filter/filterSlice";
const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const [searchTerm, setSearchTerm] = useState(search);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(searchTerm));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={SearchIcon}
        alt="Search"
        onClick={handleSubmit}
      />
    </>
  );
};

export default Search;
