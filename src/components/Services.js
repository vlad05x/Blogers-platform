import React from "react";
import InterMarketing from "../images/icons/Internet-marketing.svg";
import WebDeveloping from "../images/icons/WEB-developing.svg";
import SeoOptimization from "../images/icons/SEO-optimization.svg";
import VectorApp from "../images/icons/Vector-app.svg";
import SiteBoosts from "../images/icons/Site-boost.svg";
import SeoCopyrighting from "../images/icons/SEO-copyrighting.svg";

const servicesData = [
  {
    imgSrc: InterMarketing,
    title: "Интернет маркетинг",
    description:
      "Опытные маркетологи компании Skywebm занимаются построением эффективны интернет маркетинг стратегий.",
  },
  {
    imgSrc: WebDeveloping,
    title: "Веб Разработка",
    description:
      "В Skyweb вы можете заказать разработку сайта согласно предоставленному техническому заданию.",
  },
  {
    imgSrc: SeoOptimization,
    title: "SEO Оптимизация",
    description: "Команда профессионалов выполняет комплексный анализ сайта и оптимиз ирует SEO показатели.",
  },
  {
    imgSrc: VectorApp,
    title: "Разработка Приложений",
    description:
      "Мы делаем приложения для мобильных устройств с последующей поддержкой при релизе в маркетплейсы.",
  },
  {
    imgSrc: SiteBoosts,
    title: "Ускорение Сайта",
    description:
      "Мы знаем, как ускорить ваш сайт. Разработчики увеличивают скорость загрузки и делают это качественно.",
  },
  {
    imgSrc: SeoCopyrighting,
    title: "SEO Копирайтинг",
    description: "Большая команда копирайтеров в короткие сроки пишут уникльные SEO тексты для сайта с ключевыми словами.",
  },
];

function Services() {
  return (
    <div className="block_services" id="services1">
      <div className="cards_services">
        {servicesData.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.imgSrc} alt={service.title} />
            <h2 className="title">{service.title}</h2>
            <p className="text_services">{service.description}</p>
            <a href="/detail" className="card_link">Узнать больше</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
