import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setcategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setcategoryNews(data);
      return;
    } else if (id == "1") {
      const newsfilter = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setcategoryNews(newsfilter);
    } else {
      const newsfilter = data.filter((news) => news.category_id == id);
      setcategoryNews(newsfilter);
    }
  }, [data, id]);

  return <div>total { categoryNews.length } found</div>;
};

export default CategoryNews;
