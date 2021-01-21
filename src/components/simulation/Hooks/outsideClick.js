import { useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function OutsideClick(ref) {
    const [isClicked, setIsClicked] = useState();
    useEffect(() => {
        /* 
            Clicked outside of current ref calls this function
        */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsClicked(true);
            }
            else{
                setIsClicked(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return isClicked;
}