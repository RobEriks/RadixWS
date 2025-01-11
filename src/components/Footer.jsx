import React from "react";

const Footer = () => {
  return (
    <footer className="] text-gray-400 text-sm p-4 mt-6 border-t border-gray-700">
      <div className="container mx-auto text-left">
        Built by{" "}
        <a
          href="#"
          className="text-white hover:underline"
        >
          shadcn. {" "}
        </a>
        The source code is available on
        <a
          href="#"
          className="text-white hover:underline"
        >
          {" "}GitHub
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
