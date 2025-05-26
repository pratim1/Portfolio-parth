import { motion } from "motion/react";
const Test = () =>{
  return(
    <section style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <motion.div style={{ width:300, height: 300, background: "red"}}>
        </motion.div>
    </section>

  );
}

export default Test;