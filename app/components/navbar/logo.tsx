'use client';

import Image from "next/image";

const Logo = () => {

    return (
        <Image
            alt='Logo'
            className="hidden md:block curser-pointer"
            height="30"
            width="30"
            src="/images/favicon.ico"
        />
        
    )
}

export default Logo;