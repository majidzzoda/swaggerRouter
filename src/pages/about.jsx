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
        <animated.div className="w-[90%] p-[15px] pb-[35px] lg:p-[50px] text-center transition-all duration-[1s] flex m-auto text-white pt-[10px] flex-col items-center justify-center dark:bg-green-900 bg-green-500 rounded-lg" style={styles}>
            <animated.span className="font-[700] transition-all duration-[1s] text-white dark:text-green-950 text-[40px]">About</animated.span>
            <animated.p className='bg-white dark:bg-green-950 transition-all duration-[1s] text-green-500 lg:p-[10px] p-[15px] rounded-[8px] font-bold' style={styless}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet natus quibusdam. Minima quasi aliquam magnam odit corporis dolore voluptates reprehenderit id tenetur. Possimus vel voluptate asperiores quasi ea quas?
                Sit expedita ut sed itaque, fuga corporis error velit similique quas distinctio voluptatum voluptate mollitia eum explicabo nemo magni perferendis ex eius rerum a? Esse sint officiis quae sequi quis?
            </animated.p>
        </animated.div >
    );
};


export default About;