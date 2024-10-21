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
                Meu nome é Alexandre Pellegrino e sou especialista em criar sites que
                ajudam pessoas e empresas a se destacarem online!


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
                Também crio bots para whatsapp com inteligência artificial treinado para seu negócio, se você está pensando em ter um site novo ou melhorar o que já tem, eu posso te ajudar.
                Transformo suas ideias em um site bonito e fácil de usar.


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
