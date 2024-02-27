export default function TextInput({ title, ...attributes }) {
    return (
        <>
            <label className="block text-sm  font-medium text-gray-700">
                {title}
            </label>
            <input
                type="text"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 sm:text-sm border-gray-150 rounded-md"
                {...attributes}
            />
        </>
    );
}
