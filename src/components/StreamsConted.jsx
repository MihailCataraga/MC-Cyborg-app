import React from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StreamsConted = () => {
    const streams = [
        {
            img: '/img/featured-01.jpg',
            name: 'CS-GO',
            rating: '4.8',
            online: '249K Online',
            down: '2.3M'
        },
        {
            img: '/img/featured-02.jpg',
            name: 'Gamezer',
            rating: '4.8',
            online: '249K Online',
            down: '2.3M'
        },
        {
            img: '/img/featured-03.jpg',
            name: 'Island Rusty',
            rating: '4.8',
            online: '249K Online',
            down: '2.3M'
        }
    ]
    const streamers = [
        {
            position: '01',
            img: '/img/avatar-01.jpg',
            name: 'LahutaM'
        },
        {
            position: '02',
            img: '/img/avatar-02.jpg',
            name: 'Kengan'
        },
        {
            position: '03',
            img: '/img/avatar-03.jpg',
            name: 'Areluwa'
        },
        {
            position: '04',
            img: '/img/avatar-04.jpg',
            name: 'Omeg'
        },
        {
            position: '05',
            img: '/img/avatar-01.jpg',
            name: 'GangTeam'
        },
    ]
    const popularStreams = [
        {
            img: '/img/stream-05.jpg',
            avatar: '/img/avatar-01.jpg',
            name: 'Kengan Omeg',
            title: 'Just Talking With Fans'
        },
        {
            img: '/img/stream-06.jpg',
            avatar: '/img/avatar-02.jpg',
            name: 'LahutaMalc',
            title: 'CS-GO 36 Hours Live Stream'
        },
        {
            img: '/img/stream-07.jpg',
            avatar: '/img/avatar-03.jpg',
            name: 'Areluwa',
            title: "Maybe Nathej Allnight Chillin'"
        },
        {
            img: '/img/stream-08.jpg',
            avatar: '/img/avatar-04.jpg',
            name: 'NewGang Team',
            title: 'Live Streaming Till Morning'
        },
        {
            img: '/img/stream-08.jpg',
            avatar: '/img/avatar-01.jpg',
            name: 'Kengan Omeg',
            title: 'Just Talking With Fans'
        },
        {
            img: '/img/stream-05.jpg',
            avatar: '/img/avatar-02.jpg',
            name: 'LahutaMalc',
            title: 'CS-GO 36 Hours Live Stream'
        },
        {
            img: '/img/stream-07.jpg',
            avatar: '/img/avatar-03.jpg',
            name: 'Areluwa',
            title: "Maybe Nathej Allnight Chillin'"
        },
        {
            img: '/img/stream-06.jpg',
            avatar: '/img/avatar-04.jpg',
            name: 'NewGang Team',
            title: 'Live Streaming Till Morning'
        },
    ]
  return (
    <div className='container'>
        <div className='main-box'>
            <div className='streams-box'>
                <div className='streams-top'>
                    <div className='left'>
                        <h1><span>Live</span> Streams</h1>
                        <div className='streams'>
                            { streams.map((stream, index) => (
                                <div className='stream' key={index}>
                                    <img src={stream.img} alt='' />
                                    <div className='title'>
                                        <h4>{stream.name}</h4>
                                        <div className='scor'>
                                            <StarOutlinedIcon className='icon' />
                                            <p>{stream.rating}</p>
                                        </div>
                                    </div>
                                    <div className='number'>
                                        <p>{stream.online}</p>
                                        <div className='down'>
                                            <FileDownloadOutlinedIcon className='icon' />
                                            <p>{stream.down}</p>
                                        </div>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                    <div className='right'>
                        <h1><span>Top</span> Streamers</h1>
                        <div className='streamers'>
                            { streamers.map((streamer, index) => (
                                <div className='streamer' key={index}>
                                    <h3>{streamer.position}</h3>
                                    <img src={streamer.img} alt='' />
                                    <div className='date'>
                                        <div className='name'>
                                            <CheckCircleIcon className='icon' />
                                            <p>{streamer.name}</p>
                                        </div>
                                        <button>Follow</button>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
                <div className='live-stream'>
                    <h1><span>Most Popular</span> Live Stream</h1>
                    <div className='streams'>
                        { popularStreams.map((pStream, index) => (
                            <div className='stream' key={index}>
                                <img src={pStream.img} alt='' />
                                <div className='profile'>
                                    <img src={pStream.avatar} alt='' />
                                    <div className='date'>
                                        <div className='name'>
                                            <CheckCircleIcon className='icon' />
                                            <p>{pStream.name}</p>
                                        </div>
                                        <h3>{pStream.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                    <button>Load More Streams</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StreamsConted