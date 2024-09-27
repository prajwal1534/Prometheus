import React from 'react'

export default function Card() {
  return (
    <div className='flex flex-row justify-between p-10'>
      <div className="card bg-base-100 w-96 shadow-xl border-[2px] border-green-400">
    <figure>
      <img className=' h-[250px]  w-[375px]'
        src="https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?cs=srgb&dl=pexels-tomfisk-9893729.jpg&fm=jpg"
        alt="RWA" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Solar Farms</h2>
      <p>Expected Yield:- <span className=' font-bold'>15% APY </span> </p>
      <div className="card-actions justify-end">
       <a href='/Solar'>
        <button className="btn btn-primary">Know More</button>
        </a> 
      </div>
    </div>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl border-[2px] border-green-400">
    <figure>
      <img className=' h-[250px] w-[375px]'
        src="https://nationaltoday.com/wp-content/uploads/2022/05/National-Windmill-Day-min.jpg"
        alt="RWA" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Wind farms</h2>
      <p>Expected Yield:- <span className=' font-bold'>11% APY </span> </p>
      <div className="card-actions justify-end">
      <a href='/gaali'>
        <button className="btn btn-primary">Know More</button>
        </a> 
              </div>
    </div>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl border-[2px] border-green-400">
    <figure>
      <img className=' h-[250px]  w-[375px]'
        src="https://static.wixstatic.com/media/9934d5_940d1291c69f46a08fd07fe18822e86d~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSU%205.jpg"
        alt="RWA" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">DSU</h2>
      <p><span className=' font-bold'>Buy Dayanand Sagar </span> </p>
      <div className="card-actions justify-end">
      <a href='/Dsu'>
        <button className="btn btn-primary">Know More</button>
        </a>       </div>
    </div>
  </div>
  
  
  </div>
  )
}
