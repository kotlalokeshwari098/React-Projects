import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import './App.css'
import data from './components/data.js';

export default function App(){
  const datas=data.map((item)=> 
  <Entry  
  key={item.id}
  // country={item.country} 
  // date={item.dates} 
  // googleMap={item.googleMapsLink} 
  // imageSrc={item.img.src}
  // imageAlt={item.img.alt}
  // text={item.text} title={item.title} 
  item={item}
  // or
  // {...item}
  />
)
console.log(datas);
  return (
    // <div className='container'>
    //    <Header/>
    //    <Entry 
    //    img={{
    //     src:'https://scrimba.com/links/travel-journal-japan-image-url',
    //     alt:'Mount Fuji'
    //    }}
    //    title='Mount Fuji' 
    //    country='Japan'
    //    googleMap='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'
    //    date='12 Jan,2025 - 24 Jan,2025'
    //    text='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
    //    />
    // </div>
    <div className="container">
           <Header/>
           {datas}
    </div>
  )
}