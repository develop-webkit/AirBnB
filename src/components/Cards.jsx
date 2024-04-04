import CardContent from "./Card-Content";
import dataList from "../data";

const cards = dataList.map((data)=>{
    return (
      <CardContent 
        key= {data.id}
        {...data}
      />
)});

export default function Cards(){
    return (
        <div className="cards-section">
          {cards}
        </div>
    )
}
