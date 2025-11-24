import A from "./A";
import "./App.css";
import myContext from "./MyContext";
const mydetails = {
  username: "praveen",
  imgUrl:
    "https://media.licdn.com/dms/image/v2/C5603AQGmsAkQe9KLzg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516537675717?e=2147483647&v=beta&t=UaejSKOg-GxFxl2B7k6zpx3ekba9wacSD555ThCXaOA",
};
function App() {
  return (
    <myContext.Provider value={mydetails}>
      <div className="border border-2 p-2 m-4">
        <h1 className="text-danger">Hello Context API</h1>
        <A></A>
      </div>
    </myContext.Provider>
  );
}

export default App;
