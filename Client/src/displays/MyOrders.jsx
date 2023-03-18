import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';
import Navbar from '../Components/Navbar';
import "../styles/MyOrderStyles.css"

export default function MyOrder() {

  const [orderedData, setorderedData] = useState([]);

  const [openLoader, setOpenLoader] = useState(true);


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


  useEffect(() => {
    setTimeout(() => {
      setOpenLoader(false);
    }, 1000);
  }, [])


  if(openLoader)
  return <Loader/>

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
                      <hr className='hr-for-myorders' />
                    </div>
                    :
                    <div className='cards-food m-2'>
                      <div>
                        <div className="card mt-2 ml-2" style={{ width: "16rem", maxHeight: "150px" }}>
                          <div className="card-body">
                            <h5 className="card-title">{items.name}</h5>
                            <div style={{ height: "38px" }}>
                              Quantity : <span>{items.quantity}</span>
                              <br />
                              Size : <span>{items.size}</span>
                              <div>
                                Price : ₹{items.price}/-
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

      <div className='footer-for-orders' style={{ "marginTop": "2rem", 'position': 'relative', "bottom": "0", "width": "100%", "overflow": "hidden" }}><Footer /></div>
    </div>
  )
}













