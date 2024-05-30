'use client'
import { Player, BigPlayButton } from "video-react"
import 'video-react/dist/video-react.css';

export default function FilmPlayer ({film_player}) {
    return (
        <Player width={480}>
            <source src={film_player}/>
            <BigPlayButton position="center" />
        </Player>
    )      
}