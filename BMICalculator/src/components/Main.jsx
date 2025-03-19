import '../App.css'
import React from 'react'

export default function Main() {

    const [weight, setWeight] = React.useState();
    const [height, setHeight] = React.useState();
    const [total, setTotal] = React.useState();
    const [category, setCategory] = React.useState('');

    function totalCalculate() {
        const BMI = (weight / (height * height)).toFixed(2);
        setTotal(BMI)
        if (BMI < 18.5) setCategory('UnderWeight')
        else if (BMI > 18.5 && BMI < 24.9) setCategory('NormalWeight')
        else if (BMI > 25 && BMI < 29.9) setCategory('OverWeight')
        else if (BMI > 30) setCategory('Obese')
    }
      function onSubmit(e){
               e.preventDefault();
      }

    return (
        <>
                <form action="" onSubmit={onSubmit}>
                    <h2>BMI Calculator</h2>

                    <div className="weight-input">
                        <label htmlFor="">Weight(kg)</label>
                        <input type="text" placeholder="Enter Weight value"
                            onChange={(e) => setWeight( e.target.value)} />
                    </div>

                    <div className="height-input">
                        <label htmlFor="">Height(m)</label>
                        <input type="text" placeholder="Enter height value"
                            onChange={(e) => setHeight( e.target.value)} />

                    </div>
                    <button className='submit-btn'    onClick={totalCalculate}>Submit</button>
                    <button className='reload-btn'>Reload</button>
                    <div className="result">
                        Your BMI is:
                        <div className="total">{total}</div> 
                        <div className="category">
                        {category}  </div>
                    </div>
                </form>
        </>
    )
}