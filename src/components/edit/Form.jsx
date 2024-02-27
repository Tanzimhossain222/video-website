import PropTypes from "prop-types";
import { useState } from "react";
import { useEditVideoMutation } from "../../redux/features/api/apiSlice";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form({ video }) {
  const [editVideo, { data: videoEdit, isLoading, isError, isSuccess }] =
    useEditVideoMutation();
  const [formData, setFormData] = useState(video);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await editVideo({ id: formData.id, data: formData });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                name="title"
                title="Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                name="author"
                title="Author"
                value={formData.author}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                name="description"
                title="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                value={formData.link}
                onChange={handleChange}
                name="link"
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                value={formData.thumbnail}
                onChange={handleChange}
                name="thumbnail"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                value={formData.date}
                onChange={handleChange}
                name="date"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                value={formData.duration}
                onChange={handleChange}
                name="duration"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                value={formData.views}
                onChange={handleChange}
                name="views"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
        {isSuccess && <Success message="Video was added successfully" />}

        {isError && <Error message="There was an error editing Video!" />}
      </div>
    </form>
  );
}

Form.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    thumbnail: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.string,
    views: PropTypes.string,
  }).isRequired,
};
