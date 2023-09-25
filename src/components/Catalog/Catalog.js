import React from 'react'
import './Catalog.css'
import CatalogImage1 from './Catalog Assets/Catalog-Image1.png';
import CatalogImage2 from './Catalog Assets/Catalog-Image2.png';
import CatalogImage3 from './Catalog Assets/Catalog-Image3.png';
import CatalogImage4 from './Catalog Assets/Catalog-Image4.png';
import CatalogImage5 from './Catalog Assets/Catalog-Image5.png';
import CatalogImage6 from './Catalog Assets/Catalog-Image6.png';


const Catalog = () => {
    return (
        <div className="grid-container">
            <div className="catalog-image1">
                <img src={CatalogImage1}></img>
                <div className="text-overlay"> <div className='catalog-info'>
                    <p className='catalog-watch-name'>Omega</p>
                    <p className='catalog-watch-description'>Omega has been a trusted name in watchmaking for over a century. Renowned for its precision and role as the official timekeeper of the Olympics, Omega watches combine sporty elegance with cutting-edge technology.
                    </p>
                    <button className='watch-button'>SHOP NOW</button>
                </div></div>
            </div>
            <div className="catalog-image2"><img src={CatalogImage2}></img>
                <div className="text-overlay">
                    <div className='catalog-info'>
                        <p className='catalog-watch-name'>Patek Philippe</p>
                        <p className='catalog-watch-description'>Patek Philippe represents the pinnacle of Swiss watchmaking. Each Patek Philippe timepiece is a work of art, known for its exquisite design and meticulous handcraftsmanship.
                        </p>
                        <button className='watch-button'>SHOP NOW</button>
                    </div>
                </div></div>
            <div className="catalog-image3"><img src={CatalogImage3}></img>
                <div className="text-overlay"> <div className='catalog-info'>
                    <p className='catalog-watch-name'>Audemars Piguet</p>
                    <p className='catalog-watch-description'>Audemars Piguet is a brand of luxury and exclusivity. Their watches are known for their bold design and intricate mechanical movements, making them highly sought after by watch enthusiasts.
                    </p>
                    <button className='watch-button'>SHOP NOW</button>
                </div></div></div>
            <div className="catalog-image4"><img src={CatalogImage4}></img>
                <div className="text-overlay"> <div className='catalog-info'>
                    <p className='catalog-watch-name'>Cartier</p>
                    <p className='catalog-watch-description'>Cartier is synonymous with elegance and sophistication. Known for its iconic designs, Cartier watches are a symbol of timeless style and refinement.
                    </p>
                    <button className='watch-button'>SHOP NOW</button>
                </div></div></div>
            <div className="catalog-image5"><img src={CatalogImage5}></img>
                <div className="text-overlay"> <div className='catalog-info'>
                    <p className='catalog-watch-name'>Seiko</p>
                    <p className='catalog-watch-description'>Seiko is a Japanese brand known for its innovation and affordability. They offer a wide range of watches, from everyday timepieces to high-end models, all known for their quality and reliability.
                    </p>
                    <button className='watch-button'>SHOP NOW</button>
                </div></div></div>
            <div className="catalog-image6"><img src={CatalogImage6}></img>
                <div className="text-overlay"> <div className='catalog-info'>
                    <p className='catalog-watch-name'>Hublot</p>
                    <p className='catalog-watch-description'>Hublot is a brand known for its fusion of materials and bold design. Their watches are often recognized for their distinctive "Big Bang" style and innovative use of materials.
                    </p>
                    <button className='watch-button'>SHOP NOW</button>
                </div></div></div>
        </div>
    )
}

export default Catalog


