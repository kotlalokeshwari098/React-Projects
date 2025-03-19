import '../App.css'
import React from 'react'

export default function Main() {

    const [weight, setWeight] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [category, setCategory] = React.useState('');

    function totalCalculate() {
        if (!weight || !height) {
            alert("Please enter valid weight and height")
            return
        }
        const BMI = (weight / (height * height)).toFixed(2);
        setTotal(BMI);
        setCategory(getBMICategory(BMI));
    }
    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi <= 24.9) return 'NormalWeight'
        if (bmi >= 25 && bmi <= 29.9) return 'OverWeight'
        if (bmi >= 30) return 'Obese'
    }


    function onSubmit(e) {
        e.preventDefault();
    }
    const reloadPage = () => {
        setWeight(0);
        setHeight(0);
        setTotal(0);
        setCategory('');

    }

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <h2>BMI Calculator</h2>

                <div className="weight-input">
                    <label htmlFor="">Weight(kg)</label>
                    <input type="text" placeholder="Enter Weight value"
                        onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} />
                </div>

                <div className="height-input">
                    <label htmlFor="">Height(m)</label>
                    <input type="text" placeholder="Enter height value"
                        onChange={(e) => setHeight(parseFloat(e.target.value) || 0)} />

                </div>
                <button className='submit-btn' onClick={totalCalculate}>Submit</button>
                <button className='reload-btn' onClick={reloadPage}>Reload</button>
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