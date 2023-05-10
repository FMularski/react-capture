import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimationControls } from 'framer-motion';

export const useScroll = () => {
    const controls = useAnimationControls();
    const [element, isVisible] = useInView({threshold: 0.4, triggerOnce: true});

    useEffect(() => {
        if (isVisible) controls.start("show");
        else controls.start("hidden");
    }, [controls, isVisible]);


    return [element, controls];
}