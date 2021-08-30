import React from "react";
import MenuCard from "./Pages/Main/components/menucard";
import { CgStack } from "react-icons/cg";
import { MdAdd, MdVideoLibrary, MdWebAsset } from "react-icons/md";
import SelectCard from "./Pages/Main/components/selectcard";
import { FaBook, FaStickyNote } from "react-icons/fa";
import Navbar from "./Commons/Navbar/Navbar";

export default function Test(props) {
  return (
    <div>
      <Navbar />

      <div className="w-full h-60 -mt-2 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="flex flex-row  justify-start items-center">
          <div className=" w-1/2 mt-12 ml-8 ">
            <blockquote className="p-4  italic text-neutral-600  quote">
              <p className="mb-2 text-4xl ">
                "I trust him I trust himI trust him ."
              </p>
              <cite className="place-self-end ">-nickd</cite>
            </blockquote>
          </div>
        </div>
      </div>
      <div></div>
      <div className="mt-6 flex flex-col overflow-hidden">
        <div className="flex justify-end mr-2">
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text mr-1 font-bold text-lg ">Maigraph</span>
              <input
                type="checkbox"
                class="toggle toggle-lg toggle-secondary "
              />
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center flex-row text-center">
          <SelectCard icon={<CgStack />} title="ALL" />

          <SelectCard
            icon={<MdWebAsset className="text-blue-300" />}
            title="Web"
          />

          <SelectCard
            icon={<MdVideoLibrary className="text-red-300" />}
            title="Video"
          />

          <SelectCard
            icon={<FaBook className="text-green-300" />}
            title="Books/PDF"
          />

          <SelectCard
            icon={<FaStickyNote className="text-yellow-300" />}
            title="Note"
          />
        </div>

        <div className="mt-6 flex flex-wrap h-screen overflow-y-scroll justify-start">
          <div className="flex justify-center items-center p-8">
            <SelectCard
              icon={<MdAdd className="text-blue-800" />}
              title="ADD"
            />
          </div>

          <MenuCard
            title="My Title"
            timetoread="29 mins"
            nodes={["a", "b", "c"]}
          />

          <MenuCard
            title="My Title"
            timetoread="29 mins"
            nodes={["a", "b", "c"]}
          />

          <MenuCard
            title="My Title"
            timetoread="29 mins"
            nodes={["a", "b", "c"]}
          />

          <MenuCard
            title="My Title"
            timetoread="29 mins"
            nodes={["a", "b", "c"]}
          />

          <MenuCard
            title="My Title"
            timetoread="29 mins"
            nodes={["a", "b", "c"]}
          />

          <MenuCard
            title="My Title"
            timetoread="29 mins"
            nodes={["a", "b", "c"]}
          />
          <MenuCard
            title="My Title"
            timetoread="29 mins"
            nodes={["a", "b", "c"]}
          />

          <MenuCard
            title="My Title"
            timetoread="29 mins"
            nodes={["a", "b", "c"]}
          />

          <MenuCard
            title="My Title"
            timetoread="29 mins"
            nodes={["a", "b", "c"]}
          />
        </div>
      </div>
    </div>
  );
}
