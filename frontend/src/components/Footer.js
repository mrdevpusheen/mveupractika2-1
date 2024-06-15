import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <ul className='footerlist'>
        <li className='footeritem'>
          <h2>ШКОЛА испанского ЯЗЫКА «ЛаВИта» в петербурге</h2>
          <ul className='itemsemilist'>
            <li className='itemsemiitem'>Лиговский пр. 133 Е</li>
            <li className='itemsemiitem'>+7 (911) 123-45-67</li>
            <li className='itemsemiitem'>lavita_school@gmail.com</li>
          </ul>
        </li>
        <li className='forusitem'>
          <h3>О нас</h3>
          <ul>
            <li className='forusitemitem'>Основные сведения</li>
            <li className='forusitemitem'>Структура и органы управления образовательной организацией</li>
            <li className='forusitemitem'>Документы</li>
            <li className='forusitemitem'>Образование</li>
            <li className='forusitemitem'>Образовательные стандарты</li>
            <li className='forusitemitem'>Руководство. Педагогический (научно-педагогический) состав</li>
            <li className='forusitemitem'>Материально-техническое обеспечение и оснащенность образовательного процесса</li>
            <li className='forusitemitem'>Доступная среда</li>
          </ul>
        </li>
        <li className='double-item'>
          <ul>
            <li className='Pay'>
              <h3>Расписание и оплата</h3>
              <ul className='paylist'>
                <li className='payitem'>Расписание занятий</li>
                <li className='payitem'>Курсы и стоимость</li>
                <li className='payitem'>Расписание работы кассы</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li className='china'>
              <h3>Обучение в китае</h3>
              <ul className='chinalist'>
                <li className='chinaitem'>Стипендиальные программы</li>
                <li className='chinaitem'>Лингвистические лагеря</li>
                <li className='chinaitem'>Оформление визы на обучение</li>
              </ul>
              </li>
          </ul>
        </li>
        <li className='exam'>
          <h3>Экзамены</h3>
          <ul className='examlist1'>
            <li className='examitem1'>MSK 1</li>
            <li className='examitem1'>OPT</li>
            <li className='examitem1'>YSV</li>
            <li className='examitem1'>NNB</li>
            <li className='examitem1'>Порядок регистрации на онлайн экзамен</li>
            <li className='examitem1'>Порядок регистрации на очный экзамен</li>
            <li className='examitem1'>Расписание экзаменов</li>       
          </ul>
        </li>
        <li className='School'>
          <h3>Школа</h3>
          <ul className='schoollist'>
            <li className='schoolitem'>Новости</li>
            <li className='schoolitem'>Мероприятия</li>
            <li className='schoolitem'>Фотогалерея</li>
            <li className='schoolitem'>Контакты</li>
            <li className='schoolitem'>Отзывы</li>     
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Footer;