import { useState } from 'react'

import './style.css'
import { GamificationContext } from "../../contexts/Gamification";
import { useContext } from 'react';
import { Questions } from '../../pages/Ranking';

export default function Card({ content }) {


    const { increaseXP } = useContext(GamificationContext);

    const [isOpened, setIsOpened] = useState(false)

    const handleClick = () => {
        setIsOpened(true)
        content.ask == Questions ? increaseXP() : ""
    }

    return (
        <div className={isOpened ? 'card card-opened' : 'card'} onClick={() => {
            handleClick()
        }}>
            <div className="content" >
                <div className="front">
                    {content.open}
                </div>
              
                <div className="back">
                    {content.hide}
                </div>
            </div>
        </div>
    )
}