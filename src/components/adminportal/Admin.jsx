function Admin(){
    return(
        <div className="coffeeForm">
           
           <div className="formGroup">
               <input type="text" placeholder="Enter Coffee name"/>
               <small>e.g. Dark Roast, Espresso, Cappuccino</small>
           </div>
           <div className="formGroup">
              <input type="text" placeholder="Enter Coffee description"/>
              <small>Short description of the coffee taste or style</small>
           </div>
           <div className="formGroup">
               <input type="text" placeholder="Enter Coffee origin"/>
               <small>e.g. Kenya, Brazil, Ethiopia</small>
           </div>
           <div className="formGroup">
                <input type="number" placeholder="Enter Price"/>
                <small>Enter the price in KSH</small>
           </div>
            <button className="welcomeBTN">Submit</button>
            

        </div>
    )

}
export default Admin