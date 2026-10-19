import { useState } from "react";

function Feedback() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const total = yes + no;

  return (
    <div className="mx-20 mt-2 flex items-center justify-between self-start rounded-xl bg-[#5C4F4A] p-6 text-[#EDE9E6]">
      <p className="text-2xl">Was this page helpful?</p>
      <div className="flex gap-3">

        <button
          className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-xl font-bold"
          onClick={() => setYes((count) => count + 1)}
        >
          Yes
        </button>

        <button
          className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-2 text-xl font-bold text-[#5C4F4A]"
          onClick={() => setNo((count) => count + 1)}
        >
          No
        </button>

        <button
          className="cursor-pointer rounded-lg border-2 border-[#EDE9E6] px-6 py-2 text-xl font-bold"
          onClick={() => {
            setYes(0);
            setNo(0);
          }}
        >
          Clear
        </button>

      </div>
      
      <p className="text-2xl">
        <span className="font-bold">{yes}</span> out of{" "}
        <span className="font-bold">{total}</span> found this helpful
      </p>
      
    </div>
  );
}

export default Feedback;