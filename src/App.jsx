import * as React from "react";
import { useReactToPrint } from "react-to-print";

export default function App() {
  const componentRef = React.useRef(null);
  const handlePrint =useReactToPrint({
    contentRef: componentRef,
    documentTitle: "TOSCANA MENU",
  });
const [scale,setScale]=React.useState(1)
const [print,setPrint]=React.useState(false)
  return (
    <div className="bg-stone-900">
     <div className={`flex flex-col ${print?"":"gap-4"} p-4`} ref={componentRef} style={{transform:`scale(${scale})`}}>
   <div className="print-container drop-shadow-lg">
     <img src="T1.png"/>
   </div>
   <div className="page-break"></div>

   <div className="print-container drop-shadow-lg">
     <img src="T2.png"/>
   </div>
   <div className="page-break"></div>

   <div className="print-container drop-shadow-lg">
     <img src="T3.png"/>
 </div>
 </div>
<div className="fixed bottom-20 left-0 flex justify-center items-center w-screen">
<div className=" bg-white drop-shadow-md py-3 px-3 rounded-lg flex gap-8 text-amber-950 font-bold text-3xl items-center"> 
   <span className="cursor-pointer" onClick={()=>{
    setScale(scale+0.2)
   }}>+</span>
   <span className="cursor-pointer" onClick={()=>{
    setScale(scale-0.2)
   }}>-</span>
   {/* <span onClick={()=>{
    setScale(1)
    setPrint(true)
    setTimeout(() => {
      handlePrint()
    }, 100);
   }} className="text-sm h-fit cursor-pointer">Download</span> */}
   <a href="/" className="text-sm h-fit cursor-pointer pt-2" download={"TOSCANA.pdf"}>Download</a>
  </div>
</div>
    </div>
  );
}