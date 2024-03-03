const Links = () => {
  return (
    <ul className="flex flex-col text-left">
      <li>
        <a
          className="text-lg hover:text-xl transition duration-300"
          href="https://www.linkedin.com/in/dimitri-frazao-590aa216/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedIn
        </a>
      </li>

      <li>
        <a
          className="text-lg hover:text-xl transition duration-300"
          href="https://github.com/dimitrifrazao/next_website/blob/main/public/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </li>
      <li>
        <a
          className="text-lg hover:text-xl transition duration-300"
          href={`mailto:dimitrifrazao@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
      </li>
    </ul>
  );
};

export default Links;
