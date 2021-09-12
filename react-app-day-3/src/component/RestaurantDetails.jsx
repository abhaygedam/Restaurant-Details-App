import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./restaurant.css";

const init = {
        id : "",
        name : "",
        payment_method : {
            card: true,
            cash: true,
            upi: true 
        },
        cost_for_two_People: 0,
        rating: 0
}
    


function Detail(prop) {
   
    const [list, setList] = useState(init);
    const [dataStor, setDataStor] = useState(prop.data);
    const [option, setOption] = useState("");

    let handleChange = (e) => {
       
        let { name, value } = e.target;
        
        setList({
            ...list,[name]:value
        })
            
    }

  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(list);
        setDataStor([...dataStor, list]);
        setList("");
    }

    const handleSelect = (e) => {
        const temp = e.target.value;
        var newData = [];
        if (temp === "4") {
            dataStor.forEach((e) => {
                if (e.rating >= 4) {
                    console.log(4);
                    newData.push(e);
                    setDataStor(newData);
               }
            });
        }
        else if (temp === "3") {
            dataStor.forEach((e) => {
                if (e.rating >= 3) {
                     console.log(3);
                    newData.push(e);
                    setDataStor(newData);
               }
            });
        }
        else if (temp === "2") {
            dataStor.forEach((e) => {
                if (e.rating >= 2) {
                     console.log(2);
                    newData.push(e);
                    setDataStor(newData);
               }
            });
        }else if (temp === "1") {
            dataStor.forEach((e) => {
                if (e.rating >= 1) {
                    newData.push(e);
                    setDataStor(newData);
               }
            });
        }else if (temp === "cash") {
            dataStor.forEach((e) => {
                if (e.payment_method.cash === true) {
                    newData.push(e);
                    setDataStor(newData);
               }
            });
        }
        else if (temp === "card" || temp === "both") {
            dataStor.forEach((e) => {
                if (e.payment_method.card === true || e.payment_method.both === true ) {
                    newData.push(e);
                    setDataStor(newData);
               }
            });
        } else if (temp === "high") {

            newData = dataStor.sort(function (a, b) {
                return a.cost_for_two_People - b.cost_for_two_People;
            });
            setDataStor(newData);
            console.log("hi", dataStor);
        }  else if (temp === "low") {

            newData = dataStor.sort(function (a, b) {
                return b.cost_for_two_People - a.cost_for_two_People;
            });
            console.log(newData)
           
        }
        console.log(dataStor)
        setDataStor(newData);
    }
    
    return (
         <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="number" onChange={handleChange} name="id" placeholder="enter id" /> */}
                <input type="text" onChange={handleChange} name="name" placeholder="enter Name"className="inputBox" />
                <input type="number" onChange={handleChange} name="cost_for_two_People" placeholder="enter cost" className="inputBox" />
                <input type="number" onChange={handleChange} name="rating" placeholder="enter rating"  className="inputBox"/>
                 <input type="text" onChange={handleChange} name="payment" placeholder="payment method"  className="inputBox"/>
                <input type="submit" className="addButton"></input>
            </form>

            <div className="box">
                <h5 className="h5">Filters</h5>
                <select name="" id="" onChange={handleSelect} className="inputBox">
                    <option value="4" >4 Star</option>
                    <option value="3">3 Star</option>
                    <option value="2">2 Star</option>
                    <option value="1">1 Star</option>
                </select>

                 <select name="" id="" onChange={handleSelect} className="inputBox">
                    <option value="cash" >Cash</option>
                    <option value="card">Card</option>
                    <option value="both">Both</option>
                </select>

                <button value="high" onClick={handleSelect} className="inputBox sort">Sort low to high</button>
                 <button  value="low" onClick={handleSelect} className="inputBox sort">Sort high to low</button>
            </div>
           
            {dataStor.map(e => 
                <div className="hotelBox"> 
                <div className="imgg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_eEUkyFHGSrEcV0JxhTLOJxr3nwIq39Rrg&usqp=CAU" alt="" />
                </div>
                    <div>
                        <div className="nameRating">
                            <h3 className="name">{e.name} </h3>
                            <div className="ratingbox"><p className="rating">{e.rating}</p></div>
                            
                     </div>
                <p className="cost">Cost {e.cost_for_two_People} &#8377; for two people </p>
                        <p>Min 100 &#8377; &bull; Up to 30 min</p>
                    <p>Accepts {e.payment_method.card ? "Card" : "Cash"} payments only</p>
                    </div>
                </div>
                )}
        </div> 
    )
}

export default Detail;