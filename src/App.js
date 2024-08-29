import SearchInput from "./components/search-input";
import WeatherInfo from "./components/weather-info";
import "./index.css";

function App() {
  return (
    <div className="bg-[#222831] w-screen h-screen text-[#EEEEEE] flex flex-col items-center justify-center">
      <div className="bg-[#31363F] p-10 rounded-lg flex flex-col items-center justify-center">
        <SearchInput />
      </div>
    </div>
  );
}

export default App;
