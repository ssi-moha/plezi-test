import { useState, useEffect } from 'react'

function useEventListener(callback: () => void) {
    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return

        callback()
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return {}
}

export default useEventListener
