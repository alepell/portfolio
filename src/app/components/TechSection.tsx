import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechSection: React.FC = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Dispara quando 20% do elemento está visível
        triggerOnce: false, // Continua monitorando o scroll
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <div id='stack' ref={ref} className="my-24 p-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Tecnologias</h2>

            {/* Lista de tecnologias */}
            <motion.ul className="list-none text-lg text-gray-300">
                <motion.li
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                    }}
                    className="mb-2"
                >
                    React
                </motion.li>

                <motion.li
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                    }}
                    className="mb-2"
                >
                    Next.js
                </motion.li>

                <motion.li
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } },
                    }}
                    className="mb-2"
                >
                    Flutter
                </motion.li>

                <motion.li
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.0 } },
                    }}
                    className="mb-2"
                >
                    WordPress
                </motion.li>

                <motion.li
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.3 } },
                    }}
                    className="mb-2"
                >
                    n8n
                </motion.li>

                <motion.li
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.6 } },
                    }}
                    className="mb-2"
                >
                    PHP
                </motion.li>

                {/* Adicione mais tecnologias conforme necessário */}
            </motion.ul>
        </div>
    );
};

export default TechSection;
