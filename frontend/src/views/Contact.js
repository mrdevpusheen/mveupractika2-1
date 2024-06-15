import React from 'react';
import './Contact.css';
function Contact() {
  return (
  <>
    <div className='breadcrumbs'>
      <p>Главная</p>
      <div className='spanbackground'></div>
        <p>Контакты</p>
    </div>
    <div className="Contact">
      <div className='map'>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A35e1abf31be8cbeb721ca10721f5727daf03ea9fc48fcb2ac600a1fc5254622d&amp;source=constructor" width="1280" height="400" frameBorder="0" title="Карта"></iframe>
      </div>
      <div className='Blockcontact'>
        <div className='operatingmode'>
          <h3>Режим работы</h3>
          <ul>
            <li>ПН-СБ - С 11:00 ДО 20:00</li>
            <li>ВС. - НЕ РАБОЧИЙ ДЕНЬ</li>
          </ul>
        </div>
        <div className='directorsschedule'>
          <h3>Расписание директора</h3>
          <ul className='listworld'>
            <li className='itemworld'>Лиговский пр. 133 Е</li>
          </ul>
          <ul>
            <li>Вторник 14:00-17:00, 18:30-20:00</li>
            <li>Среда 14:00-20:00</li>
            <li>Четверг 14:00-20:00</li>
            <li>Пятница 15:00-17:00, 18:30-20:00</li>
            <li>Суббота 15:00-18:30</li>
            <li>Воскресенье - выходной день</li>
          </ul>
        </div>
        <div className='phone'>
          <h3>Телефоны</h3>
          <ul>
            <li>+7 (812) 123-45-67</li>
            <li>+7 (911) 123-45-67</li>
          </ul>
        </div>
        <div className='emailcontact'>
          <h3>E-mail</h3>
          <ul>
            <li>
              <p>Основная почта</p>
              <h3>LAVITA_SCHOOL@GMAIL.COM </h3>
            </li>
            <li>
              <p>Почта по вопросам экзаменов MSK</p>
              <h3>LAVITA_MSK@gmail.com</h3>
            </li>
            <li>
              <p>Почта по вопросам экзаменов OPT</p>
              <h3>LAVITA_OPT@gmail.com</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  );
}

export default Contact;