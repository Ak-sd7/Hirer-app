import { Stack } from "@mui/material";
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
        
        return <motion.h1 className="count">{rounded}</motion.h1>;
    }

    return(
        <div className="cmain">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="space-evenly">
                <div className="c1">
                    {Increment(1000)}
                    <h3>Companies / Startups</h3>
                </div>
                <div className="c1">
                    {Increment(2000)}
                    <h3>Enrolled Users</h3>
                </div>
                <div className="c1">
                    {Increment(900)}
                    <h3>Users Placed</h3>
                </div>
            </Stack>
        </div>
    );
}

export default Counting