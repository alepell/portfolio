import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CareerSection: React.FC = () => {
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
        <div id='sobre' ref={ref} className="px-6 w-full md:w-2/4 mx-auto h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-6xl font-bold mb-12 text-white">Sobre Minha Carreira</h2>

            {/* Cada parágrafo vai aparecendo progressivamente */}
            <motion.p
                className="text-left text-lg md:text-2xl text-gray-300 mb-4"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
            >
                Tenho mais de 5 anos de experiência como desenvolvedor web, trabalhando em grandes
                projetos com tecnologias modernas como React, Next.js e recentemente automações com n8n.
            </motion.p>

            <motion.p
                className="text-left text-lg md:text-2xl text-gray-300 mb-4"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
            >
                Trabalhei em grandes Empresas como IBM Brasil, MJV Innovation e agora estou no Santander pela F1rst Técnologia
            </motion.p>

            <motion.p
                className="text-left text-lg md:text-2xl text-gray-300 mb-4"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                }}
            >
                Também presto serviços de criação de e-commerce, desenvolvimento de aplicativos, Websites
                e soluções personalizadas para empresas.
            </motion.p>

            <motion.p
                className="text-left text-lg md:text-2xl text-gray-300"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } },
                }}
            >
                Vamos transformar suas ideias em realidade digital. Entre em contato para mais informações!
            </motion.p>
            <motion.a
                href='https://wa.me/5511954893231'
                className="bg-pink-600 font-semibold text-md px-12 py-4 mt-12 md:mt-24 rounded-full"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } },
                }}
            >
                CONTATO
            </motion.a>
        </div>
    );
};

export default CareerSection;
