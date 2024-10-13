'use client'

import { useState, useEffect } from "react"
import {motion} from 'framer-motion'

export default function Cursor(){

    const [mousePoisition, setMousePosition] = useState({ x: 0, y: 0});
    useEffect(()=>{
        const mouseMove = (e: any)=>{
            setMousePosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener('mousemove', mouseMove);

        return ()=> { 
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    const variants = {
        default: {
            x: mousePoisition.x -9,
            y: mousePoisition.y -9
        }
    }


    return (<>
        <motion.div
        className="customCursor w-5 h-5 border-2 rounded-full fixed flex items-center justify-center z-50 pointer-events-none max-sm:hidden"
        variants={variants}
        animate='default'>
            <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
        </motion.div>
    </>)
}