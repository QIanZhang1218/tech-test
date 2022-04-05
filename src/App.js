import logo from "./logo.svg";
import "./App.css";
import Header from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Header {...header} />
    </div>
  );
}
var header = {};
header.brand = {
  linkTo: "#",
  text: "React Bootstrap Logi",
};
header.links = [
  {
    linkTo: "#",
    text: "Classes",
  },
  {
    linkTo: "#",
    text: "Lessons",
  },
  {
    linkTo: "#",
    text: "Libraries",
  },
  {
    dropdown: true,
    text: "teacher@school.org",
    links: [
      {
        linkTo: "#",
        text: "student@school.org",
      },
      {
        linkTo: "#",
        text: "Settings",
      },
      {
        linkTo: "#",
        text: "Sign Out",
      },
    ],
  },
];
export default App;
