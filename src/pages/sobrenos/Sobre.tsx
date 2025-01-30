import { useState } from "react";
import { motion } from "framer-motion";
import { FinnTheHuman } from "@phosphor-icons/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sobre = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div style={{ color: "#d5f6e7", fontSize: "40px" }}>▶</div>,
    prevArrow: <div style={{ color: "#1E88E5", fontSize: "40px" }}>◀</div>
  };

  const images = [
    { src: "https://media.licdn.com/dms/image/v2/D4D03AQFjWcNyZu2Ptg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719620770969?e=1743638400&v=beta&t=TkPfs7_n5gGAVjFBBEHTix6uUAa1aVLMqLk-5_1s7z0", link: "https://www.linkedin.com/in/ivanj%C3%BAlio/" },
    { src: "https://media.licdn.com/dms/image/v2/D4D03AQETZvl8qd4Dyg/profile-displayphoto-shrink_800_800/B4DZQfUeEyHcAc-/0/1735692248536?e=1743638400&v=beta&t=G8wBsIqockdUyoIf_p09bQsP56ZAWLXYq7J8oQFmuqM", link: "https://www.linkedin.com/in/nina-raquel/" },
    { src: "https://media.licdn.com/dms/image/v2/D4D03AQGNuaxckRDF7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730742826051?e=1743638400&v=beta&t=OEz6bMOclSK3-my6MjeIFoOdt5dcR_8m6Q_6aSdu_hk", link: "https://www.linkedin.com/in/matheus-queiroz/" },
    { src: "https://media.licdn.com/dms/image/v2/D4D03AQEkBH9bPMiTKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729541301387?e=1743638400&v=beta&t=qXKzsccrOWR6kEaqt_g-pcOy39RU19i5VALw0aiSv-Q", link: "https://www.linkedin.com/in/lucas-vinicius-mendes/" },
    { src: "https://media.licdn.com/dms/image/v2/D4D03AQHhaZoYRKxtsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729899450213?e=1743638400&v=beta&t=IQKOLXKYW-dgsyhahqEpHNtViFOnW2zfsPOA8NClOq4", link: "https://www.linkedin.com/in/jaqueline-valle/" },
    { src: "https://media.licdn.com/dms/image/v2/D4D03AQFLw_w4gY3BXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724398107767?e=1743638400&v=beta&t=QIed63iRmZxdOK0Dq-KZiN7ESOIK9QQg8uQ9FN14Qnc", link: "https://www.linkedin.com/in/vitoria-manuela/" },
  ];

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 bg-ice relative ${isPopupOpen ? 'backdrop-blur-lg' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold text-silver-ice hover:text-shadow-ice mb-4 flex items-center justify-center gap-2">
          <FinnTheHuman size={55} /> Bem vindo a RH 77
        </h1>
        <p className="text-shadow-ice text-lg mb-6">
          Nosso sistema de RH são desenvolvidos para simplificar e otimizar a gestão de recursos humanos dentro de sua empresa.
          Com uma interface intuitiva e funcionalidades poderosas, ajudamos você a gerenciar colaboradores, folha de pagamento,
          benefícios e muito mais.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="backdrop-blur-lg bg-white/30 shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-shadow-ice mb-2">Nossa Missão</h2>
          <p className="text-silver-ice">
            Criar soluções intuitivas e eficientes para facilitar a organização e aumentar a produtividade na gestão de pessoas.
          </p>
        </div>
        <div className="backdrop-blur-lg bg-white/30 shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-shadow-ice mb-2">Tecnologias</h2>
          <p className="text-silver-ice">
            Utilizamos React, TypeScript, Tailwind CSS e diversas bibliotecas para criar uma experiência moderna e responsiva.
          </p>
        </div>
      </motion.div>

      <button onClick={togglePopup} className="mt-6 bg-dark-ice text-shadow-ice px-4 py-2 rounded-lg hover:text-ice transition">
        Entre em Contato
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/20 backdrop-blur-xs p-5 rounded-lg " onClick={togglePopup}>
          <div className="bg-gray-200 p-6 text-center rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-silver-ice mb-4">Contato</h2>
            <p className="text-silver-ice">Entre em contato pelo e-mail:</p>
            <a href="mailto:contato@rh77.com" className="text-sonic-ice underline">contato@rh77.com</a>
            <p></p>
            <button
              onClick={togglePopup}
              className="mt-4 px-4 py-2 bg-shadow-ice text-white rounded-lg hover:bg-dark-ice transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl mt-10">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <a href={img.link} target="_blank" rel="noopener noreferrer">
                <img src={img.src} alt={`Slide ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sobre;