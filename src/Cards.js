import React, {useState, useRef, useEffect} from "react";
import axios from "axios";





const Cards = () =>{

 
    const [data1, setData1] = useState({ cards : [], deck_id: "", remaining: null});
    
    
    const  fetchData = async (id="new")=>{
        const response1 = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
        setData1({cards:response1.data.cards, deck_id: response1.data.deck_id, remaining: response1.data.remaining});
         console.log(response1.data)
         
        }
        console.log(data1)
        
       
   
 
        useEffect(()=>{

            fetchData();
        },[]);

        const handleSubmit = ()=>{
            const { deck_id } = data1
            
            fetchData(deck_id);
        }
        
        
    return (
        <>
        <h2> Cards</h2>
        
        <div>
        <button onClick={handleSubmit}>Draw</button>
            {data1.remaining === 0 ? <h3> No MORE CARDS</h3>: data1.cards.map(card => <img key={card.code}src={card.image}></img>)}

        
        </div>
        </>
    )
}

export default Cards;