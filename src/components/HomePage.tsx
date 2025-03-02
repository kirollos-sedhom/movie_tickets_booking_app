import React from "react";
import wallpaper1 from "../assets/wallpaper4.jpg";
const HomePage = () => {
  return (
    <div className="relative h-screen overflow-hidden z-0">
      {/* Background with blur */}
      <div className="absolute inset-0 bg-[url(assets/wallpaper4.jpg)] bg-[-8rem]  blur-sm z-0"></div>

      {/* Text */}
      <div className="fixed z-40 w-screen h-screen flex items-center justify-center flex-col">
        <img
          src={wallpaper1}
          alt="image of jesus' actor in the chosen"
          className="w-4/6 h-2/3 object-cover rounded-xl"
        />

        <h1 className="text-white font-[Rakkas] text-4xl my-2">
          درب الصليب ١٠
        </h1>
        <button
          className="border-gradient mt-4 cursor-pointer hover:shadow-md shadow-cyan-600/50 transition-all duration-300"
          onClick={handleBuyTicket}
        >
          <span className="text-lg">اشتري تذكرة</span>
        </button>
      </div>
    </div>
  );
};
function handleBuyTicket() {
  alert("success!");
}
export default HomePage;
