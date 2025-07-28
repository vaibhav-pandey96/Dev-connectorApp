import { formatDistanceToNow } from "date-fns";

const PostItem = ({ post, onLike, onUnlike, onDelete }) => {
  const userId = localStorage.getItem("userId");

  const likedByUser = post?.likes?.some((like) => {
    if (typeof like.user === "string") {
      return like.user === userId;
    }
    return like.user?._id === userId;
  });

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <div className="flex items-center mb-2">
        <img
          src={post.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h4 className="font-semibold">{post.name}</h4>
          <p className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(post.date))} ago
          </p>
        </div>
      </div>
      <p className="mb-2">{post.text}</p>
      <div className="flex space-x-4 text-sm">
        <button
          onClick={() => (likedByUser ? onUnlike(post._id) : onLike(post._id))}
        >
          {likedByUser ? "👎 Unlike" : "👍 Like"} ({post.likes.length})
        </button>
        <button onClick={() => onUnlike(post._id)}>Unlike👎</button>

        <button onClick={() => onDelete(post._id)} className="text-red-500">
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
