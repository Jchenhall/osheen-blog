import React from "react";
import EmailForm from "../EmailBlog/form/EmailForm";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex py-3 px-4 border-t z-[1] bg-background/90 backdrop-filter-blur">
      <div className="w-full flex flex-row justify-center items-center">
        <EmailForm />
      </div>
    </footer>
  );
};

export default Footer;
