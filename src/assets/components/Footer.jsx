import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { ladder } from '../hook'

const Footer = () => {
    const navigate = useNavigate()
    const setladder = useSetRecoilState(ladder)
    return (
        <div>
            <button onClick={
                () => {
                    navigate("/pythagorus")
                    setladder(false)
                }}>
                Pythagorus
            </button>
            <button onClick={() => {navigate("/ladder")
                setladder(true)
            }}>
                Ladder
            </button>
        </div>
    )
}

export default Footer