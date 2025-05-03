import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/homelayout/NewsCard";

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

  return <>
    <div>
      <h2 className="font-bold text-accent">Dragon News Home</h2>
      <div className="">
        {
          categoryNews.map((news) => (
            
            <NewsCard news={news} key={news.id}></NewsCard>
          ))
        }
      </div>
  </div>

  </>;
};

export default CategoryNews;
