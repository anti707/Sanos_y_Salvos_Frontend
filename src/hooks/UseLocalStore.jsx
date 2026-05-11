import { useEffect, useState } from "react";

export default function useLocalStore(key, initialValue) {
    const [Value, setValue] = useState(() => {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(Value));
    }, [key, Value]);

    return [Value, setValue];
}