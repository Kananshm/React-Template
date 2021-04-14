import Shorten from "./Shorten";
import ShortList from "./ShortList";
import Header from "./Header";
import Main from "./Main";
import Statistics from "./Statistics";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Shorten />
      <ShortList />
      <Statistics />
    </div>
  );
}

export default App;
