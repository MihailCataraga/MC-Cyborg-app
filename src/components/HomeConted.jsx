import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import { Link } from 'react-router-dom';

import React from 'react'

const HomeConted = () => {
    const games = [
        {
            img: '/img/popular-01.jpg',
            title: 'Fortnite',
            rating: '4.8',
            brand: 'Sandbox',
            downloads: '2.3M'
        },
        {
            img: '/img/popular-02.jpg',
            title: 'PubG',
            rating: '4.8',
            brand: 'Battle S',
            downloads: '2.3M'
        },
        {
            img: '/img/popular-03.jpg',
            title: 'Dota2',
            rating: '4.8',
            brand: 'Steam-X',
            downloads: '2.3M'
        },
        {
            img: '/img/popular-04.jpg',
            title: 'CS-GO',
            rating: '4.8',
            brand: 'Legendary',
            downloads: '2.3M'
        },
        {
            img: '/img/popular-05.jpg',
            title: 'Mini Craft',
            rating: '4.8',
            brand: 'Legendary',
            downloads: '2.3M'
        },
        {
            img: '/img/popular-06.jpg',
            title: 'Eagles Fly',
            rating: '4.8',
            brand: 'Matrix Games',
            downloads: '2.3M'
        },
        {
            img: '/img/popular-07.jpg',
            title: 'Warface',
            rating: '4.8',
            brand: 'Max 3D',
            downloads: '2.3M'
        },
        {
            img: '/img/popular-08.jpg',
            title: 'Warcraft',
            rating: '4.8',
            brand: 'Legend',
            downloads: '2.3M'
        }

      ]
    const games_donw = [
        {
            img: "/img/game-01.jpg",
            name: "Dota 2",
            brand: "Sandbox",
            date: "24/08/2036",
            played: "634 H 22 Mins",
            status: "Downloaded"
        },
        {
            img: "/img/game-02.jpg",
            name: "Fortnite",
            brand: "Sandbox",
            date: "22/06/2036",
            played: "740 H 52 Mins",
            status: "Downloaded"
        },
        {
            img: "/img/game-03.jpg",
            name: "CS-GO",
            brand: "Sandbox",
            date: "21/04/2036",
            played: "892 H 14 Mins",
            status: "Downloaded"
        },
    ]
  return (
    <div className="container">
        <div className="main-box">
            <div className="top">
                <h3>Welcome To Cyborg</h3>
                <p><span>BROWSE</span> OUR POPULAR GAMES HERE</p>
                <Link to='/browse' className="btn">Browse Now</Link>
            </div>

            <div className="most-popular">
                <h3><span>Most Popular</span> Right Now</h3>
                <div className="game-list">
                    { games.map((game, index) => (
                        <div className="card-game" key={index}>
                            <img src={game.img} alt="" />
                            <div className="title">
                                <h4>{game.title}</h4>
                                <p><StarOutlinedIcon className="icon"/>{game.rating}</p>
                            </div>
                            <div className="brand">
                                <h4>{game.brand}</h4>
                                <p><GetAppOutlinedIcon className="icon"/>{game.downloads}</p>
                            </div>
                        </div>
                    )) }
                    <Link to='/browse' className='popular-btn'>Discover Popular</Link>
                </div>
            </div>
            <div className='library'>
                <h3><span>Your Gaming</span> Library</h3>
                { games_donw.map((game_donw, index) => (
                    <div className='game'>
                        <div className='info'>
                            <div className='img'>
                                <img src={game_donw.img} alt=''></img>
                            </div>
                            <div className='title'>
                                <h4>{game_donw.name}</h4>
                                <p>{game_donw.brand}</p>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className='date'>
                                <h4>Date Added</h4>
                                <p>{game_donw.date}</p>
                            </div>
                            <div className='played'>
                                <h4>Hours Played</h4>
                                <p>{game_donw.played}</p>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='status'>
                                <h4>Currently</h4>
                                <p>{game_donw.status}</p>
                            </div>
                            <div className='btn'>
                                <button>Donwloaded</button>
                            </div>
                        </div>
                    </div>
                )) }
                <Link to='/profile' className='view-btn'>View Your Library</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeConted