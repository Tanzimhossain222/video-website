import PropsType from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  tagRemoved,
  tagSelected,
} from "../../redux/features/filter/filterSlice";

const colorMap = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  gray: {
    bg: "bg-gray-100",
    text: "text-gray-600",
  },
  cyan: {
    bg: "bg-cyan-100",
    text: "text-cyan-600",
  },
};

const Tag = ({ title }) => {
  const { tags: selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags.includes(title);

  const dispatch = useDispatch();

  const handleSelectTag = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  const colorKeys = Object.keys(colorMap);
  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];
  const colorClasses = colorMap[randomColorKey];

  const style = isSelected
    ? `${colorClasses.bg} ${colorClasses.text}`
    : "bg-gray-200 text-gray-800";

  return (
    <div
      className={`  px-4 py-1 rounded-full cursor-pointer 
      transition duration-300 ease-in-out ${style}
      `}
      onClick={handleSelectTag}
    >
      {title}
    </div>
  );
};

Tag.propTypes = {
  title: PropsType.string.isRequired,
};

export default Tag;
