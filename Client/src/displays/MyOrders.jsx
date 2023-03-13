import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function MyOrder() {

  const [orderedData, setorderedData] = useState({})

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
      setorderedData(response)
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

      <div className='container'>
        <div className='row'>
          {orderedData !== {} ? Object.values(orderedData).map((data) => {
            console.log(orderedData)
            return (
              data.orderData ?
                data.orderData.order_data.slice(0).reverse().map((item) => {
                  // console.log(item)
                  return (
                    item.map((arrayData) => {
                      return (
                        <div>
                          {arrayData.Order_date ? <div className='m-auto mt-5'>
                            {data = arrayData.Order_date}
                            <hr />
                          </div> :
                            <div className='col-12 col-md-6 col-lg-3' >
                              <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                <div className="card-body">
                                  <h5 className="card-title">{arrayData.name}</h5>
                                  <div className='container w-100 p-0' style={{ height: "38px" }}>
                                    <span className='m-1'>{arrayData.quantity}</span>
                                    <span className='m-1'>{arrayData.size}</span>
                                    <span className='m-1'>{data}</span>
                                    <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                      ₹{arrayData.price}/-
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
                        </div>
                      )
                    })
                  )
                }) : "You haven't ordered Yet !!"
            )
          }) : "xcgdfgdsfhshdfhsdhsdfhsd"}
        </div>

      </div>

      <div className='footer-for-orders' style={{ 'position': 'absolute', "top": "91vh", "width": "100vw" }}><Footer /></div>
    </div>
  )
}