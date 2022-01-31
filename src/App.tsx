import "./App.css";
import About from "./components/About";

function App() {
  return (
    <div className="m-14 text-white">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <About />
      <h3 className="mt-14 font-oxygen uppercase text-2xl tracking-wider underline underline-offset-8">
        I worked with
      </h3>
      <div className="font-oxygen text-7xl text-left tracking-wide leading-snug font-light">
        Nokia, Capgemini, Kruk, BNY&nbsp;Mellon,
        Fundacja&nbsp;Efektywny&nbsp;Altruizm, Otwarte&nbsp;Klatki
      </div>
      <h3 className="mt-14 font-oxygen uppercase text-2xl tracking-wider underline underline-offset-8">
        Selected projects
      </h3>
      <div className="font-oxygen text-3xl text-left tracking-wide leading-snug font-light">
        Most of the projects I worked professionally are unfortunately internal.
        So here's a few of my other projects
        <div className="flex gap-4 basis-5/12">
          <div className="border-4 border-solid border-white p-4 h-60 flex flex-col items-center justify-center">
            <h4 className="font-bold">Fundacja Efektywny Altruizm</h4>
            <h5>website & blog</h5>
          </div>
          <div className="border-4 border-solid border-white p-4 h-60 flex flex-col items-center justify-center">
            <ul className="flex">
              <li>React</li>
              <li>Typescript</li>
              <li>Headless Wordpress</li>
              <li>GraphQL</li>
              <li>Microsoft Azure</li>
            </ul>
            <div className="flex">
              <button>GitHub icon</button>
              <button>Website icon</button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-14 font-oxygen uppercase text-2xl tracking-wider underline underline-offset-8">
        Social media & blogs
      </h3>
      <div className="font-oxygen text-7xl text-left tracking-wide leading-snug font-light flex gap-32">
        <div>
          <ul>
            <li>
              <a
                href="https://pl.linkedin.com/in/michalhawelka"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hawelka"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/michalhawelka"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a
                href="https://medium.com/@michalhawelka"
                target="_blank"
                rel="noreferrer"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://dev.to/hawelkam"
                target="_blank"
                rel="noreferrer"
              >
                Dev.to
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="mt-14 font-oxygen uppercase text-2xl tracking-wider underline underline-offset-8">
        Get my resume
      </h3>
      <div className="font-oxygen text-7xl text-left tracking-wide leading-snug font-light">
        <a href="mhawelka_cv.pdf" download="mhawelka_resume">
          Download
        </a>
      </div>
    </div>
  );
}

export default App;
