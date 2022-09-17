import React from "react";

function Home() {
  return (
    <div className='container'>
        <h1>Zoo</h1>
      <div className="about-container">
        <img src="https://images.unsplash.com/photo-1557431011-7fc07385c834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" />
        <div className="information">
        <h2>About</h2>
        <p className="information">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero eum sint deserunt repellendus eaque totam iste enim nam ducimus illum, repudiandae doloremque tenetur optio voluptatibus facere amet cupiditate autem!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;