import React from 'react'
import { useSpring, animated } from '@react-spring/web';

const About = () => {
    const styles = useSpring({
        from: { opacity: 0, transform: 'translateY(10px)' },
        to: { opacity: 1, transform: 'translateY(100px)' },
        config: { duration: 2000 }
    });
    const styless = useSpring({
        from: { opacity: 0, transform: 'translateY(500px)' },
        to: { opacity: 1, transform: 'translateY(20px)' },
        config: { duration: 2000 }
    });

    return (
        <animated.div className="w-[90%] p-[15px] pb-[35px] lg:p-[50px] text-center transition-all duration-[1s] flex m-auto text-white pt-[10px] flex-col items-center justify-center dark:bg-gray-900 bg-gray-300 rounded-lg" style={styles}>
            <animated.span className="font-[700] transition-all duration-[1s] text-white dark:text-gray-950 text-[40px]">О нас</animated.span>
            <animated.p className='bg-white dark:bg-gray-950 transition-all duration-[1s] text-gray-500 lg:p-[10px] p-[15px] rounded-[8px] font-bold' style={styless}>
                Наша компания — это команда профессионалов, объединённых общей целью — создавать качественные и инновационные решения для наших клиентов. Мы ценим честность, ответственность и стремление к совершенству в каждом проекте.
                С момента основания мы успешно реализовали множество проектов и помогли сотням клиентов достичь своих целей.
            </animated.p>
        </animated.div >
    );
};


export default About;