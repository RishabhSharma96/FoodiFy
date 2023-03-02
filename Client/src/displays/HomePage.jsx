import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Card from '../Components/Card'
import { useEffect, useState } from 'react'
import "../styles/searchStyles.css"

export default function HomePage() {

  const [foodData, setfoodData] = useState([])
  const [foodCategory, setfoodCategory] = useState([])

  const [search, setsearch] = useState("")


  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json()
    // console.log(response[0] , response[1])
    setfoodData(response[0])
    setfoodCategory(response[1])
    // console.log(foodData)
  }

  useEffect(() => {
    loaddata()
  }, [])

  return (
    <div>
      <div><Navbar /></div>
      <div> <Carousel /> </div>


      <div>
        <div className='Mainform'>
          <input
            className='input-field'
            type="search"
            placeholder='Feeling Hungry? We got U😉'
            value={search}
            onChange={(e) => { setsearch(e.target.value) }}
          />
          <button className='btn search-btn' type='submit'>Search</button>
        </div>
      </div>


      <div className='abcded'>
        {
          foodCategory !== [] ? foodCategory.map((data) => {
            return (
              <div className='section'>
                <div key={data._id} className="FoodCatName">{data.CategoryName}</div>
                <hr />
                <div className="itemsection">
                  {foodData !== [] ? foodData.filter((item) => item.CategoryName === data.CategoryName
                    && (item.name.toLowerCase().includes(search)))
                    .map((filterItems) => {
                      return (
                        <div className='fooditems' key={filterItems._id}>
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                          />
                        </div>

                      )
                    }) : <div>You are all up</div>}
                </div>
              </div>
            )
          })
            : ""
        }
      </div>


      <div><Footer /></div>
    </div>
  )
}
