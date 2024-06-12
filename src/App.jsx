import React, { useState,useEffect } from "react";
import { styled } from "@mui/material/styles";

import alanBtn from "@alan-ai/alan-sdk-web";

const Container = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  zIndex: 9999, 
});

const LogoImg = styled("img")(({ theme }) => ({
  height: "27vmin",
  borderRadius: "15%",
  padding: "0 5%",
  margin: "3% 0",
  [theme.breakpoints.down("sm")]: {
    height: "35vmin",
  },
}));

function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsAricles, setNewsAricles] = useState([]);

  useEffect(()=>{
    alanBtn({
      key:"1a8be4751db84c47e39c42c52de295b42e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand:({command,articles,number})=>{
        if (command==='newsHeadlines') {
          setNewsAricles(articles);
          setActiveArticle(-1)
        }else if (command==='highlight') {
          setActiveArticle((prev)=>prev+1);
        }else if (command==='open') {
          
          
        }

      }
    })
  })

  return (
    <div>
      <Container>
        <LogoImg
          src="https://cdn.dribbble.com/users/108183/screenshots/13939097/034_plexus_for_dribbble.gif"
          alt="logo"
        />
      </Container>

      {/* Other content */}
    </div>
  );
}

export default App;
