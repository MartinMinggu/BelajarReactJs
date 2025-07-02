import { useState } from "react";

export default function TabButtons({ children, handleClick, isActive }) {
    return <li className={isActive ? "active" : undefined}><button onClick={handleClick}>{children}</button></li>;
}