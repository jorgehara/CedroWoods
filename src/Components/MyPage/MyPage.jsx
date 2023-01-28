import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const MyPage = () => {
  return (
    <div className="text-justify-center bg-green-400 ml-11">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
