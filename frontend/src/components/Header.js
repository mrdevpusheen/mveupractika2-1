import React from 'react';
import './Header.css';
import logo from '../img/LOGO.png'
function Header({setPage}) {

  return (
    <div className="Header">
        <>
        <div className='list'>
            <div className='upheader'>
                <p>ШКОЛА испанского ЯЗЫКА «ЛаВИта» в петербурге</p>
                <ul>
                  <li className='adress'>Лиговский пр. 133 Е</li>
                  <li className='number'>+7 (911) 123-45-67</li>
                  <li className='email'>lavita_school@gmail.com</li>
                </ul>
            </div>
            <div className='line'></div>
            <div className='downheader'>
              <img src={logo} alt='Logotipe'/>
              <ul>
                <li onClick={() => setPage('Main')} className='item0'>Главная</li>
                <li className='item1'>О нас</li>
                <li onClick={() => setPage('PayShedule')} className='item2'>Расписание и оплата</li>
                <li className='item3'>Мероприятия</li>
                <li onClick={() => setPage('Exam')} className='item4'>Экзамены</li>
                <li className='item5'>Обучение в испании</li>
                <li className='item6'>Новости</li>
                <li className='item7'>Фотогалерея</li>
                <li onClick={() => setPage('Contact')} className='item8'>Контакты</li>
                <li className='item9'>Отзывы</li>
              </ul>
            </div>
        </div>
        </>
    </div>
  );
}

export default Header;