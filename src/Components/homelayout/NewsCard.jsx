import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, image_url, details } = news;

  return (
    <div className="card bg-base-200 mb-10 shadow-md border-none rounded-xl">
    
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-base">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString("en-CA")}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-xl text-gray-600">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      
      <div className="px-4 font-bold text-lg">{title}</div>

     
      <figure className="px-4 pt-4">
        <img src={image_url} alt="News" className="w-full rounded-md" />
      </figure>

      
      <div className="px-4 pt-3 text-sm text-gray-700">
        {details.length > 250 ? `${details.slice(0, 250)}...` : details}
        <span className="text-orange-500 font-semibold ml-1 cursor-pointer">
          Read More
        </span>
      </div>

   
      <div className="flex items-center justify-between px-4 py-4 border-t mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
