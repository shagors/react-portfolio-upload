import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/shajjad-shagor-3781407b/"
        target="_blank"
        rel="norefrrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/shagors"
        target="_blank"
        rel="norefrrer"
      >
        <img alt="git-link" src="../assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/shajjadshagor"
        target="_blank"
        rel="norefrrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/incorrectSHAGOR/"
        target="_blank"
        rel="norefrrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
