import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import "../styles/MyOrderStyles.css"

export default function MyOrder() {

  const [orderedData, setorderedData] = useState([])

  const fetchMyOrder = async () => {
    await fetch("http://localhost:5000/api/myorderdata", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: localStorage.getItem('useremail')
      })
    }).then(async (res) => {
      let response = await res.json()
      setorderedData(response.orderData[0].order_data)
      // console.log("running")
      // console.log(response.orderData[0].order_data);
      // console.log("part two")

      let temp = response.orderData[0].order_data;
      let j = 0;
      let i = temp.length;
      // console.log(i);
      while (j < i) {
        // console.log(temp[j]);
        let x = temp[j].length;
        let y = 1;
        while (y < x) {
          // console.log(temp[j][y].name);
          y++;

        }
        j++;
      }


    })
  }

  useEffect(() => {
    fetchMyOrder()
  }, [])


  return (
    <div>
      <div>
        <Navbar />
      </div>


      {orderedData.map((item) => {
        return (
          <div className='cardfooD'>
            {
              item.map((items) => {
                return <div className='cardfood'>
                  {items.Order_date ?
                    <div>
                      <div className='myorder-heading'>
                        {items.Order_date}
                      </div>
                      <hr />
                    </div>
                    :
                    <div className='cards-food'>
                      <div className='col-12 col-md-6 col-lg-3' >
                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "100px" }}>
                          <div className="card-body">
                            <h5 className="card-title">{items.name}</h5>
                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                              <span className='m-1'>{items.quantity}</span>
                              <span className='m-1'>{items.size}</span>
                              <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                ₹{items.price}/-
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              })
            }
          </div>)
      })}

      <div className='footer-for-orders' style={{ 'position': 'relative', "bottom": "0", "width": "100%" , "overflow" : "hidden"}}><Footer /></div>
    </div>
  )
}













