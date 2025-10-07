// import Header from "./components/Header"
// import Section from "./components/Section"
// import './styles/index.css'
// export default function App(){
//   return(
//     <>
//       <Header/>
//       <Section/>
//     </>
//   )
// }




// after learning props we should pass props instead of hardcoding the values. 

import Header from "./components/Header"
import Section from "./components/Section"
import Entry from "./components/Entry"
import './styles/index.css'
import data from './components/data.js'; 

// iterate over data json file, then access 
const entryElements = data.map( (entry) => {
  return (
    <Entry
          // img = {{
          //   src: entry.img.src, 
          //   alt: entry.img.alt
          // }}

          // instead we can pass only imag as object. Tada

          // key = {entry.id}
          // img = {entry.img}
          // title= {entry.title}
          // country = {entry.country}
          // googleMapLinks = {entry.googleMapLinks}
          // dates = {entry.dates}
          // text = {entry.text}

          // we see in the above all the properties are being accessed by entry, so we can pass a single object entry. 
          key = {entry.id}
          // entry = {entry}

          // or just copy all of the properties
          {...entry}
      />
      // entry component rendered 3 times , cause three json data are there inside d
      // ata.js, which gets mapped. 
  )
})
export default function App(){
  return(
    <>
      <Header/>
      {/* <Section/> */}

      {/* Refer Entry.jsx instead of Section after learning props */}

      <main>
        {entryElements}
      </main>
    </>
  )
}