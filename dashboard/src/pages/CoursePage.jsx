import React from "react";

function CoursePage() {
  return (
    <>
      <h1 className="text-white text-4xl font-medium">Courses</h1>
      <div className="w-full flex flex-wrap justify-start gap-4">
        {["1", "2", "3", "4", "5", "6"].map((e, i) => (
          <div className="w-[19vw] h-[50vh] bg-zinc-600 rounded-xl overflow-hidden">
            <div className="h-[55%] w-full">
              <img
                src="https://images.unsplash.com/photo-1734597949864-0ee6637b0c3f?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-white text-xl font-medium">
                Front-end Domination
              </h3>
              <h4 className="text-gray-200/90 text-2xl mt-2 font-semibold">
                ₹4999/-
              </h4>
              <div className="flex flex-wrap mt-2 gap-2">
                <div className="px-3 py-[2px] text-sm rounded-lg bg-zinc-700 text-zinc-200/90">
                  Components
                </div>
                <div className="px-3 py-[2px] text-sm rounded-lg bg-zinc-700 text-zinc-200/90">
                  Responsive
                </div>
                <div className="px-3 py-[2px] text-sm rounded-lg bg-zinc-700 text-zinc-200/90">
                  Layout
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoursePage;
