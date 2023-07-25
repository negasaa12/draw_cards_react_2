import React, {useState, useRef, useEffect} from "react";
import axios from "axios";
import "./Cards.css"




const Cards = () => {

 
    const [data1, setData1] = useState({ cards : [], deck_id: "", remaining: null});
    const imageRef = useRef();
    const  fetchData = async (id="new")=>{
        const response1 = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
        setData1({cards:response1.data.cards, deck_id: response1.data.deck_id, remaining: response1.data.remaining});
         }
        
        
       
   
 
    useEffect(()=>{
            
        fetchData();

       
    },[]);

    const handleSubmit = ()=>{
           
        const { deck_id } = data1
            imageRef.current = setInterval(()=>{
                    fetchData(deck_id);
        },500);
            
    }
        
    const stopDraw = () =>{
        clearInterval(imageRef.current)
        
        };
        console.log(data1);
    return (
        <>
        
        <div className="card-container">
        <div className="button-container">
            {data1.remaining >= 51 ? (
              <button  class="btn btn-primary" onClick={handleSubmit}>Draw</button>
            ) : (
              <button class="btn btn-dark" onClick={stopDraw}>Stop</button>
            )}
          </div>
        <div className="image-container">
            {data1.remaining === 0 ? (
              <h3>No MORE CARDS</h3>
            ) : (
              data1.cards.map((card) => <img key={card.code} src={card.image} alt="Card" />)
            )}
          </div>
         
        </div>
      </>
    );
    
}

export default Cards;