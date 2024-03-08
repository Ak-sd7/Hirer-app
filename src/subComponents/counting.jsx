import "../Styles/count.css"
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {useEffect}  from "react";

const Counting = () => {
    const Increment = (a)=>{
        const count = useMotionValue(0);
        const rounded = useTransform(count, Math.round);
      
        useEffect(() => {
          const animation = animate(count, a, { duration: 10 });
      
          return animation.stop;
        },[count, a]);
      
        return <motion.h1>{rounded}+</motion.h1>;
    }

    return(
        <div>
            {Increment(1000)}
            hello
        </div>
    );
}

export default Counting