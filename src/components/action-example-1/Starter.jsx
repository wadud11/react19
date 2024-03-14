// PostItem component
const PostItem = () => {
    return (
        <div className="bg-emerald-50 border border-gray-200 p-4 my-6 rounded-lg">
            <h2 className="text-xl font-bold">Post title 1</h2>
            <p>Post body 1</p>
        </div>
    );
};
// PostForm component
const PostForm = () => {
    return (
        <form className="bg-white border border-gray-200 rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                >
                    Title
                </label>
                <input
                    className="border border-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="title"
                    type="text"
                    placeholder="Enter title"
                    name="title"
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="body"
                >
                    Body
                </label>
                <textarea
                    className=" appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="body"
                    rows="5"
                    placeholder="Enter body"
                    name="body"
                ></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

// Posts component
export default function Posts() {
    return (
        <>
            <PostForm />
            <PostItem />
        </>
    );
}
