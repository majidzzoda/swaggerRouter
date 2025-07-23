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
        <animated.div className="w-[90%] p-[15px] pb-[35px] lg:p-[50px] text-center transition-all duration-[1s] flex m-auto text-white pt-[10px] flex-col items-center justify-center dark:bg-red-900 bg-red-500 rounded-lg" style={styles}>
            <animated.span className="font-[700] transition-all duration-[1s] dark:text-red-950 text-[40px]">Home</animated.span>
            <animated.p className='dark:bg-red-950 transition-all duration-[1s] bg-white text-red-500 p-[10px] rounded-[8px] font-bold' style={styless}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet natus quibusdam. Minima quasi aliquam magnam odit corporis dolore voluptates reprehenderit id tenetur. Possimus vel voluptate asperiores quasi ea quas?
                Sit expedita ut sed itaque, fuga corporis error velit similique quas distinctio voluptatum voluptate mollitia eum explicabo nemo magni perferendis ex eius rerum a? Esse sint officiis quae sequi quis?
            </animated.p>
        </animated.div >
    );
};


export default Home;