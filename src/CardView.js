import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { ActionCard } from './ui-components';
import { ActionCard as actionCardModel } from "./models";

const CardView = () =>{
  const [state, setState] = useState([]);
  useEffect(()=>{
    const fetchData = async() =>{
      const output = await DataStore.query(actionCardModel);
      setState(output);
    }
    fetchData();
    console.log("hoge")
  },[])

  return (
    <div>
      {state.map((card,index)=>{
        return <ActionCard key={index} actionCard={card} />
      })}
    </div>
  )

}

export default CardView;