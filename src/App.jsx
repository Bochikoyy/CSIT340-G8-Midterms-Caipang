import Sidebar from "./Components/Sidebar";
import Docs from "./Components/Docs";
import Guide from "./Components/Guide";
import Feedback from "./Components/Feedback";

function App() {
  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar author="CHRISNEL CAIPANG" />

      <Docs />

      <Guide />

      <Feedback />

    </div>
  );
}

export default App;