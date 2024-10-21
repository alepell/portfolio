
import * as motion from "framer-motion/client"

type AnimatedLinkProps = {
  href: string,
  children: string,
  className: string;
}

const AnimatedLink = ({ href, children, className }: AnimatedLinkProps) => {
  return (
    <motion.a
      href={href}
      whileHover={{
        background: 'transparent',
        textDecoration: 'line-through',
        transition: { duration: 0.1 },
      }}
      whileTap={{
        scale: 0.9,
        opacity: 0.7,
        transition: { duration: 0.1 },
      }}
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </motion.a>
  );
};

export default AnimatedLink;
