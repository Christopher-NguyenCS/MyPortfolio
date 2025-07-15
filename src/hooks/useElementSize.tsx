import { useCallback, useEffect, useState } from "react";
interface elementProps {
    elementRef: React.RefObject<HTMLElement| HTMLDivElement | null> | undefined,
}


type size = {
    "width": number,
    "height": number
}

export function useElementSize({elementRef}:elementProps){

    const [storedElementSize, setStoredElementSize] = useState<size>({
        "width":0,
        "height":0,
    });

    const handleResize = useCallback(() => {
            const element = elementRef?.current;
                if (element) {
                    if (storedElementSize.width !== element.clientWidth || storedElementSize.height !== element.clientHeight) {
                        setStoredElementSize({
                            "width": element.clientWidth,
                            "height": element.clientHeight
                        });
                    }
                }
            return;
        }, [elementRef, storedElementSize.width, storedElementSize.height]);
    
        useEffect(() => {
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, [handleResize]);

        return {storedElementSize};
}
