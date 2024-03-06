const Links = () => {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/dimitri-frazao-590aa216/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
        </li>

        <li>
          <a href="./resume.pdf" download>
            resume
          </a>
        </li>
        <li>
          <a
            href={`mailto:dimitrifrazao@gmail.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
        </li>
        <li>
          <a
            href={"https://github.com/dimitrifrazao"}
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Links;
