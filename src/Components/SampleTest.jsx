import { useState } from "react";

export default function SampleTest() {
  const [value, setvalue] = useState("Mahumud");
  function handleonchange(e) {
    console.log(e.target.name, " : ", e.target.value);
    setvalue(e.target.value);
  }
  return (
    <>
      <div>
        <div className="border-2  rounded-2xl p-6 border-amber-200 m-12 ">
          <form action="">
            <input
              type="text"
              onChange={handleonchange}
              value={value}
              name="Text"
              placeholder="type here"
              className="border p-3 "
            />
          </form>
        </div>
      </div>
    </>
  );
}
