import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

const Home = ({title, image, ingredients}) => {
  

    return (
       
          <div className="home">
               <div className="container">
               <div className="row">
                    <div className="col-md-12">
                    <div className="card p-4 mb-5 text-center justify-content-center bg-light">
                    <div className="card-img-top">
                        <img src={image} alt=""/>
                    </div>
                    <div className="card-body bg-dark text-white">
                        <div className="card-title ">
                            <h1>{title}</h1>
                        </div>
                        <div className="card-text">
                            {ingredients.map(ingredient =>(
                                <ul>{ingredient.text}</ul>
                            ))}
                        </div>
                    </div>
                </div>
                    </div>
                </div>
               </div>
          </div>
     
    );
};

export default Home;