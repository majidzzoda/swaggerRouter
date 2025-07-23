import React from 'react'
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
    const styles = useSpring({
        from: { opacity: 0, transform: 'translateY(10px)' },
        to: { opacity: 1, transform: 'translateY(100px)' },
        config: { duration: 1500 }
    });
    const styless = useSpring({
        from: { opacity: 0, transform: 'translateY(500px)' },
        to: { opacity: 1, transform: 'translateY(20px)' },
        config: { duration: 1500 }
    });

    return (
        <animated.div className="w-[90%] p-[15px] pb-[35px] lg:p-[50px] text-center transition-all duration-[1s] flex m-auto text-white pt-[10px] flex-col items-center justify-center dark:bg-gray-900 bg-gray-300 rounded-lg" style={styles}>
            <animated.span className="font-[700] transition-all duration-[1s] dark:text-gray-950 text-[40px]">Главная</animated.span>
            <animated.p className='dark:bg-gray-950 transition-all duration-[1s] bg-white text-gray-500 p-[10px] rounded-[8px] font-bold' style={styless}>
                Добро пожаловать на наш сайт!
                Мы предлагаем надежные и качественные решения для ваших задач. Наши специалисты всегда готовы помочь и предоставить профессиональную поддержку.
                Нас отличает индивидуальный подход, оперативность и внимание к деталям.
                Присоединяйтесь к числу наших довольных клиентов и убедитесь сами в высоком уровне сервиса!
            </animated.p>
        </animated.div >
    );
};


export default Home;