import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Link } from 'react-router-dom';

const BrowseConted = () => {
    const games = [
        {
            img: "/img/featured-01.jpg",
            title: "CS-GO",
            rating: "4.8",
            online: "249k Downloads",
            downloand: "2.3M",
            streaming: "2.4K Streaming"
        },
        {
            img: "/img/featured-02.jpg",
            title: "Gamezer",
            rating: "4.8",
            online: "249k Downloads",
            downloand: "2.3M",
            streaming: "2.4K Streaming"
        },
        {
            img: "/img/featured-03.jpg",
            title: "Island Rusty",
            rating: "4.8",
            online: "249k Downloads",
            downloand: "2.3M",
            streaming: "2.4K Streaming"
        }
    ]
    const tops = [
        {
            img: "/img/game-01.jpg",
            title: "Fortnite",
            brand: "Sandbox",
            rating: "4.9",
            downloand: "2.2m"
        },
        {
            img: "/img/game-02.jpg",
            title: "CS_GO",
            brand: "Legendary",
            rating: "4.9",
            downloand: "2.2m"
        },
        {
            img: "/img/game-03.jpg",
            title: "PugG",
            brand: "Battle Royale",
            rating: "4.9",
            downloand: "2.2m"
        }
    ]
    const steps = [
        {
            img: "/img/service-01.jpg",
            title: "Go To Your Profile",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            img: "/img/service-02.jpg",
            title: "Live Stream Button",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            img: "/img/service-03.jpg",
            title: "You Are Live",
            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
    ]
    const streams = [
        {
            img: "/img/stream-01.jpg",
            avatar: "/img/avatar-01.jpg",
            name: "KenganC",
            title: "Just Talking With Fans"
        },
        {
            img: "/img/stream-02.jpg",
            avatar: "/img/avatar-02.jpg",
            name: "LunaMa",
            title: "CS-GO 36 Hours Live Stream"
        },
        {
            img: "/img/stream-03.jpg",
            avatar: "/img/avatar-03.jpg",
            name: "Areluwa",
            title: "Maybe Nathej Allnight Chillin'"
        },
        {
            img: "/img/stream-04.jpg",
            avatar: "/img/avatar-04.jpg",
            name: "GangTm",
            title: "Live Streaming Till Morning"
        },
    ]
  return (
    <div className='container'>
        <div className='main-box'>
            <div className='featured'>
                <div className='games'>
                    <div className='title'>
                        <h1><span>Featured</span> Games</h1>
                    </div>
                    <div className='games-list'>
                        { games.map((game, index) => (
                            <div className='game-card' key={index}>
                                <div className='img'>
                                    <img src={game.img} alt="" />
                                    <button>{game.streaming}</button>
                                </div>
                                <div className='title'>
                                    <h4>{game.title}</h4>
                                    <div className='rating'>
                                        <StarOutlinedIcon className='icon' />
                                        <p>{game.rating}</p>
                                    </div>
                                </div>
                                <div className='stats'>
                                    <p>{game.online}</p>
                                    <div className='downloand'>
                                        <FileDownloadOutlinedIcon className='icon' />
                                        <p>{game.downloand}</p>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
                <div className='downloanded'>
                    <h1><span>Top</span> Downloaded</h1>
                    <div className='games'>
                        { tops.map((top, index) => (
                            <div className='game' key={index}>
                                <img src={top.img} alt="" />
                                <div className='date'>
                                    <div className='title'>
                                        <h4>{top.title}</h4>
                                        <p>{top.brand}</p>
                                        <div className='numbers'>
                                            <div className='rating'>
                                                <StarOutlinedIcon className='icon' />
                                                <p>{top.rating}</p>
                                            </div>
                                            <div className='downloand'>
                                                <FileDownloadOutlinedIcon className='icon' />
                                                <p>{top.downloand}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button>
                                        <FileDownloadOutlinedIcon />
                                    </button>
                                </div>
                            </div>
                        )) }
                    </div>
                    <Link to='/profile' className='btn'>View All Games</Link>
                </div>
            </div>
            <div className='start-live'>
                <h1><span>How To Start Your</span> Live Stream</h1>
                <div className='steps'>
                    { steps.map((step, index) => (
                        <div className='step' key={index}>
                            <img src={step.img} alt="" />
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>
                    )) }
                </div>
                <Link to='/profile' className='step-btn'>Go To Profile</Link>
            </div>
            <div className='live'>
                <h1><span>Most Popular</span> Live Stream</h1>
                <div className='streams'>
                    { streams.map((stream, index) => (
                        <div className='stream'>
                            <div className='img'>
                                <img src={stream.img} alt="" />
                                <p className='p1'>Live</p>
                                <div className='p2'>
                                    <p><RemoveRedEyeIcon className='icon' />1.2K</p>
                                </div>
                                <div className='p3'>
                                    <p><VideogameAssetIcon className='icon' />CS-GO</p>
                                </div>
                            </div>
                            <div className='profil'>
                                <div className='avatar'>
                                    <img src={stream.avatar} alt="" />
                                </div>
                                <div className='date'>
                                    <div className='name'>
                                        <CheckCircleIcon className='icon' />
                                        <p>{stream.name}</p>
                                    </div>
                                    <h2>{stream.title}</h2>
                                </div>
                            </div>
                        </div>
                    )) }

                </div>
                <Link to='/streams' className='streams-btn' >Discover All Streams</Link>
            </div>
        </div>
    </div>
  )
}

export default BrowseConted