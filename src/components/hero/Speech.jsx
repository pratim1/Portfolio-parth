import { TypeAnimation } from 'react-type-animation';
import { easeInOut, motion } from "motion/react";


const Speech = () =>{
    return(
     <motion.div 
     animate={{opacity:[0,1]}}
     transition={{duration:1}}
     className="bubbleContainer">
        <div className="bubble">
            <TypeAnimation
      sequence={[
        1000,
        ' Same substring at the start will only be typed out once, initially',
        1000, 
        'loremhvck;jvhdjhaf;dhf;aqkdhf',
        1000
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    /></div>
        <img src="/man.png" alt=""></img>
     </motion.div>
    );
}

export default Speech;