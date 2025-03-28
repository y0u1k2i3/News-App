import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import "./newslist.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

// 記事データの型を定義
type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
};

function NewsList() {
  const [news, setNews] = useState<Article[]>([]);
  const base_url = import.meta.env.VITE_GNewsAPI;
  const api = import.meta.env.VITE_GNewsAPI_Key;
  const url = `${base_url}${api}`;

  const getNews = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
      console.log(data.articles);

    } catch (err) {
      console.log(err, "Failed to fetch news");
    }
  };

  useEffect(() => {
    getNews();
  }, [url]);

  return (
    <main className="newslist">
      <h2>Today's News</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {news.map((each_news, index) => (
            <Grid size={4} key={index}>
              <Item className="news-item">
                <h3>{each_news.title}</h3>
                <img src={each_news.image} alt="" className="news__img"/>
                <p>{each_news.description}</p>
              </Item>
            </Grid>
          ))}
          {/* <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid> */}
        </Grid>
      </Box>
    </main>
  );
}

export default NewsList;
