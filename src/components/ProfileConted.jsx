import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ProfileConted = () => {
    const clips = [
        {
            img: '/img/clip-01.jpg',
            name: 'First Clip',
            views: '250'
        },
        {
            img: '/img/clip-02.jpg',
            name: 'Second Clip',
            views: '183'
        },
        {
            img: '/img/clip-03.jpg',
            name: 'Third Clip',
            views: '141'
        },
        {
            img: '/img/clip-04.jpg',
            name: 'Fourth Clip',
            views: '91'
        },
    ]
    const games = [
        { 
            img: '/img/game-01.jpg',
            name: 'Dota 2',
            type: 'Sandbox',
            date: '24/08/2036',
            played: '634 H 22 Mins',
            status: 'Downloaded'
        },
        { 
            img: '/img/game-02.jpg',
            name: 'Fortnite',
            type: 'Sandbox',
            date: '22/06/2036',
            played: '745 H 22 Mins',
            status: 'Downloaded'
        },
        { 
            img: '/img/game-03.jpg',
            name: 'CS-GO',
            type: 'Sandbox',
            date: '21/04/2036',
            played: '632 H 46 Mins',
            status: 'Downloaded'
        },
    ]
  return (
    <div className='container'>
        <div className='main-box'>
            <div className='main-case'>
                <div className='profile'>
                    <div className='left'>
                        <img src='/img/profile.jpg' alt='' />
                    </div>
                    <div className='mid'>
                        <p className='status'>Offline</p>
                        <h2>Alan Smithee</h2>
                        <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                        <button>Start Live Stream</button>
                    </div>
                    <div className='right'>
                        <div className='games'>
                            <h6>Games Downloaded</h6>
                            <p>3</p>
                        </div>
                        <div className='friends'>
                            <h6>Friends Online</h6>
                            <p>16</p>
                        </div>
                        <div className='lives'>
                            <h6>Live Streams</h6>
                            <p>None</p>
                        </div>
                        <div className='clip'>
                            <h6>Clips</h6>
                            <p>29</p>
                        </div>
                    </div>
                </div>
                <div className='clips'>
                    <h1><span>Your Most Popular</span> Clips</h1>
                    <div className='clips-list'>
                        { clips.map((clip, index) => (
                            <div className='clip' key={index}>
                                <div className='img'>
                                    <img src={clip.img} alt='' />
                                    <div className='btn-play'>
                                        <PlayCircleIcon className='icon' />
                                    </div>
                                </div>
                                <div className='date'>
                                    <h4>{clip.name}</h4>
                                    <div className='views'>
                                        <RemoveRedEyeIcon className='icon' />
                                        <p>{clip.views}</p>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                    <button>Load More Clips</button>
                </div>
                <div className='library'>
                    <h1><span>Your Gaming</span> Library</h1>
                    <div className='games'>
                        { games.map((game, index) => (
                            <div className='game' key={index}>
                                <img src={game.img} alt='' />
                                <div className='name'>
                                    <h4>{game.name}</h4>
                                    <p>{game.type}</p>
                                </div>
                                <div className='date-add'>
                                    <h4>Date Added</h4>
                                    <p>{game.date}</p>
                                </div>
                                <div className='played'>
                                    <h4>Hours Played</h4>
                                    <p>{game.played}</p>
                                </div>
                                <div className='currently'>
                                    <h4>Currently</h4>
                                    <p>{game.status}</p>
                                </div>
                                <button>Downloaded</button>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileConted