import React from "react";
import NavBar from "../common/NavBar/NavBar.jsx";
import Footer from "../common/Footer/Footer.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";
import ScoresPage from "../scores/ScoresPage/ScoresPage.jsx";
import NewsPage from "../news/NewsPage/NewsPage.jsx";
import { Routes, Route } from "react-router-dom";
import DocumentPage from "../common/DocumentPage/DocumentPage.jsx";
import StatsPage from "../statistics/StatsPage/StatsPage.jsx";
import CoachesCenter from "../coaches_center/CoachesCenter.jsx";
import MarketValue from "../market_value/MarketValue.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/data_scraping").then((response) =>
      response.json().then((data) => {
        console.log(data);
      })
    );
  });

  return (
    <div className="main-app-container">
      <NavBar
        pages={[
          {
            name: "Live Scores",
            link: "live_scores",
          },
          {
            name: "Statistics",
            link: "statistics",
          },
          {
            name: "News",
            link: "news",
          },
          {
            name: "Market Value",
            link: "market_value",
          },
          {
            name: "Coaches Center",
            link: "coaches_center",
          },
        ]}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="live_scores" element={<ScoresPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="statistics/*" element={<StatsPage />} />
        <Route path="coaches_center/*" element={<CoachesCenter />} />
        <Route path="market_value" element={<MarketValue />} />
        <Route
          path="terms_of_use"
          element={
            <DocumentPage
              heading="Terms of Use"
              source="https://drive.google.com/file/d/1d_MD_YnI78jlP6VSxkg6amj0nta4M6pW/preview"
              shiftFlag={false}
            />
          }
        />
        <Route
          path="privacy_policy"
          element={
            <DocumentPage
              heading="Privacy Policy"
              source="https://drive.google.com/file/d/1PE_cJNH2rhSjrR2DaY2hPU1McF9VGQa5/preview"
              shiftFlag={false}
            />
          }
        />
        <Route
          path="sitemap"
          element={
            <DocumentPage
              heading="Sitemap"
              source="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/module_diagram1.png?raw=true"
              shiftFlag={true}
            />
          }
        />
      </Routes>

      <Footer
        pages={[
          {
            name: "Sitemap",
            link: "sitemap",
          },
          {
            name: "Terms of Use",
            link: "terms_of_use",
          },
          {
            name: "Privacy Policy",
            link: "privacy_policy",
          }
        ]}
      />
    </div>
  );
}

export default App;
