import { useEffect } from "react";
import "./App.css";
import ListComponents from "./components/ListComponents";
import axios from "axios";

let APIres = {
  pagination: {
    sortDirection: "DESC",
    totalPages: 1,
    pageSize: 25,
    currentPage: 1,
    totalElements: 5,
  },
  data: [
    {
      author: "Chinua Achebess",
      country: "Nigeria",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      pages: "210",
      title: "Things Fall Aparts",
      year: "1960",
      id: 1,
    },
    {
      author: "Test1",
      country: "India",
      language: "English",
      link: null,
      pages: "210",
      title: "Things Fall Aparts ABC",
      year: "1960",
      id: 5,
    },
    {
      author: "Hans Christian Andersen",
      country: "Denmark",
      language: "Danish",
      link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      pages: "784",
      title: "Fairy tales",
      year: "1836",
      id: 2,
    },
    {
      author: "Unknown",
      country: "Sumer and Akkadian Empire",
      language: "Akkadian",
      link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      pages: "160",
      title: "The Epic Of Gilgamesh",
      year: "1700",
      id: 4,
    },
    {
      author: "Dante Alighieri",
      country: "Italy",
      language: "Italian",
      link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      pages: "928",
      title: "The Divine Comedy",
      year: "1315",
      id: 3,
    },
  ],
};

function App() {
  useEffect(() => {
    // axios
    //   .get("http://68.178.162.203:8080/application-test-v1.1/books")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   });
  }, []);

  return (
    <div className="App">
      <ListComponents books={APIres.data} />
    </div>
  );
}

export default App;
