import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DnsIcon from '@mui/icons-material/Dns';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const DetailsConted = () => {
    const stats = [
        {
            icon: <StarOutlinedIcon className='star' />,
            value: "4.8"
        },
        {
            icon: <FileDownloadOutlinedIcon className='icon' />,
            value: "2.3M"
        },
        {
            icon: <DnsIcon className='icon' />,
            value: "36GB"
        },
        {
            icon: <VideogameAssetIcon className='icon' />,
            value: "Action"
        }
    ]
    const games = [
        {
            img: "/img/game-01.jpg",
            title: "Dota 2",
            type: "Sandbox",
            scor: "4.8",
            download: "2.3M"
        },
        {
            img: "/img/game-02.jpg",
            title: "Dota 2",
            type: "Sandbox",
            scor: "4.8",
            download: "2.3M"
        },
        {
            img: "/img/game-03.jpg",
            title: "Dota 2",
            type: "Sandbox",
            scor: "4.8",
            download: "2.3M"
        },
        {
            img: "/img/game-01.jpg",
            title: "Dota 2",
            type: "Sandbox",
            scor: "4.8",
            download: "2.3M"
        },
        {
            img: "/img/game-02.jpg",
            title: "Dota 2",
            type: "Sandbox",
            scor: "4.8",
            download: "2.3M"
        },
        {
            img: "/img/game-03.jpg",
            title: "Dota 2",
            type: "Sandbox",
            scor: "4.8",
            download: "2.3M"
        }
    ]
  return (
    <div className='container'>
        <div className='main-box'>
            <div className='pre'>
                <img src="/img/feature-left.jpg" alt='' className='img-left' />
                <div className='img-right'>
                    <img src="/img/feature-right.jpg" alt='' />
                    <div className='play'>
                        <PlayArrowIcon className='icon' />
                    </div>
                </div>
                
            </div>
            <h1>FORTNITE DETAILS</h1>
            <div className='details'>
                <div className='name'>
                    <div className='left'>
                        <div className='title'>
                            <h4>Fortnite</h4>
                            <div className='scor'>
                                <StarOutlinedIcon className='icon' />
                                <p>4.8</p>
                            </div>   
                        </div>
                        <div className='type'>
                            <h4>Sandbox</h4>
                            <div className='down'>
                                <FileDownloadOutlinedIcon className='icon' />
                                <p>4.8</p>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='stats'>
                            { stats.map((stat, index) => (
                                <div className='stat' key={index}>
                                    {stat.icon}
                                    <p>{stat.value}</p>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
                <div className='imgs'>
                    <img src='/img/details-01.jpg' alt='' />
                    <img src='/img/details-02.jpg' alt='' />
                    <img src='/img/details-03.jpg' alt='' />
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button> Download Fortnite Now!</button>
            </div>
            <div className='other-games'>
                <h1><span>Other Related</span> Games</h1>
                <div className='games'>
                    { games.map((game, index) => (
                        <div className='game'>
                            <img src={game.img} alt='' />
                            <div className='info'>
                                <div className='name'>
                                    <h4>{game.title}</h4>
                                    <div className='scor'>
                                        <StarOutlinedIcon className='icon' />
                                        <p>{game.scor}</p>
                                    </div> 
                                </div>
                                <div className='type'>
                                    <h4>{game.type}</h4>
                                    <div className='down'>
                                        <FileDownloadOutlinedIcon className='icon' />
                                        <p>{game.download}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsConted