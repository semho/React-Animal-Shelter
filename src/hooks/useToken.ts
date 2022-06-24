import { useEffect, useState } from "react";

// declare global {
//     interface Window {
//         __token__: string;
//     }
// }

export function useToken() {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (window.__token__) {
            setToken(window.__token__);
        }
    }, []);

    return [token];
}