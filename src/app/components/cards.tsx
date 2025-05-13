import React from "react";
import Image from "next/image";
const cards = () => {
  return   <div className="rounded-md
  border w-100 h-120">
         <div>
           <Image
             src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="card"
             width={400}
             height={100}
           />
         </div>
         <div className="m-8 flex justify-center flex-col items-center">
           <div className="font-bold text-2xl">2024년 기술동향</div>
           <p>dasdasdasdsa</p>
         </div>
         <button>더보기</button>
       </div>
};

export default cards;
