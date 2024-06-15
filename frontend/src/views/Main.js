import React from 'react';
import './Main.css';
import blocklogo from '../img/LogoOpacity.png'
import examitemimage1 from '../img/Rectangle 39-3.png'
import examitemimage2 from '../img/Rectangle 39-2.png'
import examitemimage3 from '../img/Rectangle 39-1.png'
import examitemimage4 from '../img/Rectangle 39.png'
import eventitemimage1 from '../img/Rectangle 46-2.png'
import eventitemimage2 from '../img/Rectangle 46-1.png'
import eventitemimage3 from '../img/Rectangle 46.png'
function Main() {
  return (
    <div className="Main">
      <div className='Mainscreen'>
        <div className='maintile'>
          <div className='backgroundopacity'>
            <p>ИДЕТ НАБОР НА ОБУЧЕНИЕ В ШКОЛУ "ЛАВИТА" В НЕВСКОМ РАЙОНЕ ПЕТЕРБУРГА! УСПЕЙ ЗАПИСАТЬСЯ!</p>
          </div>
          <button>Подробнее</button>
        </div>
      </div>
      <div className='block1'>
        <div className='box'>
          <div className='frame'>
            <h3>Школа “Лавита”</h3>
            <p>Eleifend purus dictum nunc, aenean tincidunt massa libero. Aliquam nullam enim at ac. Imperdiet risus mi quis vitae non. Cursus scelerisque donec vulputate ante etiam libero donec ridiculus at. Phasellus at nullam dapibus ut in. Vulputate consequat purus tellus vel cras. Eu sollicitudin arcu faucibus turpis venenatis.</p>
            <p>Aliquet auctor tempus, erat at interdum eu. Sapien amet, amet sit non at sodales volutpat. Cursus et laoreet eget velit a tortor eu nibh mattis. Mi facilisi ultrices maecenas id.</p>
          </div>
        </div>
        <div className='logoopacity'><img src={blocklogo} alt='Block Logo Opacity'/></div>
      </div>
      <div className='block2'>
        <h1>Курсы и стоимость обучения</h1>
        <div className='data'>
          <p className='p1'>(учебный год с сентября по май)</p>
          <p className='p1'>(учебный год с сентября по июнь)</p>
        </div>
        <ul>
          <li>Испанский язык для детей</li>
          <li>Испанский язык для взрослых</li>
          <li>Индивидуальные занятия и минигруппы</li>
          <li>Подготовка к международным экзаменам</li>
        </ul>
        <div className='Table'>
          <div className='table1'>
            <div className='table1mainitem'>Группы</div>
            <div className='table1item'>8-9 лет</div>
            <div className='line1'></div>
            <div className='table1item'>8-9 лет</div>
            <div className='line1'></div>
            <div className='table1item'>8-9 лет</div>
            <div className='line1'></div>
            <div className='table1item'>8-9 лет</div>
          </div>
          <div className='table2'>
            <div className='table2mainitem'>Интенсивность</div>
            <div className='table2item'>
              <p>2 раза в неделю по 2 ак. часа</p>
              <p>17:00 - 18:30</p>
            </div>
            <div className='line2'></div>
            <div className='table2item'>
              <p>2 раза в неделю по 2 ак. часа</p>
              <p>17:00 - 18:30</p>
            </div>
            <div className='line2'></div>
            <div className='table2item'>
              <p>2 раза в неделю по 2 ак. часа</p>
              <p>17:00 - 18:30</p>
            </div>
            <div className='line2'></div>
            <div className='table2item'>
              <p>2 раза в неделю по 2 ак. часа</p>
              <p>17:00 - 18:30</p>
            </div>
          </div>
          <div className='table3'>
            <div className='table3mainitem'>Стоимость</div>
            <div className='table3item'>
              <p><span>28 000 р.</span>(1 ак. час = 600 р.) за 24 занятия</p>
              <p>Оплата 3 раза в год</p>
              <p>Стоимость обучения рассчитывается по фактическому количеству занятий, в соответствии с учебным планов</p>
            </div>
            <div className='line3'></div>
            <div className='table3item'>
              <p><span>28 000 р.</span>(1 ак. час = 600 р.) за 24 занятия</p>
              <p>Оплата 3 раза в год</p>
              <p>Стоимость обучения рассчитывается по фактическому количеству занятий, в соответствии с учебным планов</p>
            </div>
            <div className='line3'></div>
            <div className='table3item'>
              <p><span>28 000 р.</span>(1 ак. час = 600 р.) за 24 занятия</p>
              <p>Оплата 3 раза в год</p>
              <p>Стоимость обучения рассчитывается по фактическому количеству занятий, в соответствии с учебным планов</p>
            </div>
            <div className='line3'></div>
            <div className='table3item'>
              <p><span>28 000 р.</span>(1 ак. час = 600 р.) за 24 занятия</p>
              <p>Оплата 3 раза в год</p>
              <p>Стоимость обучения рассчитывается по фактическому количеству занятий, в соответствии с учебным планов</p>
            </div>
          </div>
        </div>
      </div>
        <div className='Exams'>
          <h2>Экзамены</h2>
          <div className='lineofexams'>
            <ul className='examlist'>
              <li className='examitem'>
                <img src={examitemimage1} alt='ExamImageItem'/>
                <h3>Massa fringilla rhoncus purus gravida magnis. </h3>
                  <ul>
                    <li>Sed viverra in nulla duis elit purus urna.</li>
                    <li>Enim volutpat nisi, sit eget sed consectetur consectetur.</li>
                    <li>Massa turpis enim, pellentesque amet morbi sagittis. Euismod morbi</li>
                  </ul>
                  <button>Подробнее</button>
              </li>
              <li className='examitem'>
                <img src={examitemimage2} alt='Examimageitem'/>
                <h3>Erat magna at elementum faucibus tristique lorem. </h3>
                  <ul>
                    <li>Sed viverra in nulla duis elit purus urna.</li>
                    <li>Enim volutpat nisi, sit eget sed consectetur consectetur.</li>
                    <li>Massa turpis enim, pellentesque amet morbi sagittis. Euismod morbi</li>
                  </ul>
                  <button>Подробнее</button>
              </li>
              <li className='examitem'>
               <img src={examitemimage3} alt='Examimageitem'/>
               <h3>Libero at pulvinar sagittis odio et luctus mattis.</h3>
                  <ul>
                    <li>Sed viverra in nulla duis elit purus urna.</li>
                    <li>Enim volutpat nisi, sit eget sed consectetur consectetur.</li>
                    <li>Massa turpis enim, pellentesque amet morbi sagittis. Euismod morbi</li>
                  </ul>
                  <button>Подробнее</button>
              </li>
              <li className='examitem'>
                <img src={examitemimage4} alt='Exam imageitem'/>
                <h3>Laoreet ut aliquam rhoncus lectus. Faucibus.</h3>
                  <ul>
                    <li>Sed viverra in nulla duis elit purus urna.</li>
                    <li>Enim volutpat nisi, sit eget sed consectetur consectetur.</li>
                    <li>Massa turpis enim, pellentesque amet morbi sagittis. Euismod morbi</li>
                  </ul>
                  <button>Подробнее</button>
              </li>
            </ul>
        </div>
      </div>
      <div className='Events'>
        <h2>Мероприятия</h2>
        <ul>
          <li>
            <img src={eventitemimage1} alt='EventImage'/>
            <h3>Sed sem vulputate habitant quis eu, vitae quis porttitor augue.</h3>
            <p>Elementum, sed viverra volutpat nam lacus egestas. Scelerisque quisque egestas maecenas fermentum semper auctor massa tincidunt. Tristique pulvinar commodo fermentum neque. Elementum tortor.</p>
            <button>Подробнее</button>
          </li>
          <li>
            <img src={eventitemimage2} alt='EventImage'/>
            <h3>Magna rhoncus facilisi aliquam odio tempus. Non felis cras.</h3>
            <p>Tempus libero commodo velit ut aliquam. Sagittis, tristique porttitor platea eu imperdiet interdum cras. Hac blandit sed integer nibh diam in lacus ac. Congue nibh id rhoncus tincidunt imperdiet.</p>
            <button>Подробнее</button>
          </li>
          <li>
            <img src={eventitemimage3} alt='EventImage'/>
            <h3>Id adipiscing aliquet erat mattis. Cursus metus malesuada congue.</h3>
            <p>Dis non mauris placerat in dictum ullamcorper adipiscing morbi dignissim. Commodo dolor ornare nibh sed pretium tellus. Urna, imperdiet id ac venenatis erat mattis risus, molestie. Felis porta.</p>
            <button>Подробнее</button>
          </li>
        </ul>
      </div>
      <div className='SchoolNews'>
        <h2>Новости школы</h2>
        <ul>
          <li>
            <h3>Eu faucibus facilisi est pharetra, augue vulputate nisi elementum. Molestie id.</h3>
            <p>Commodo bibendum eget purus vivamus amet ut. Nisl habitant tellus augue quam lectus elementum platea. A imperdiet facilisis quis aliquet. Venenatis sit nibh pellentesque interdum sem. Donec vitae tristique vel dictum sagittis a purus.</p>
            <button>Подробнее</button>
          </li>
          <li>
            <h3>Semper aenean amet malesuada aliquam. Urna, ornare tincidunt quam non. </h3>
            <p>Augue laoreet elit urna enim fames leo habitant viverra. Turpis volutpat, scelerisque odio enim tincidunt sit. Duis quam enim vel tempus id scelerisque sapien risus. Ut ut augue porttitor urna ullamcorper hendrerit rutrum metus non. Amet a at integer aenean.</p>
            <button>Подробнее</button>
          </li>
          <li>
            <h3>Sed blandit mauris, varius semper amet dolor gravida tincidunt quis. Ultrices.</h3>
            <p>Morbi diam eu risus amet, id egestas quam. Scelerisque lorem consectetur cras nisl risus congue. Nisl sed tellus magna eu, ac fames. Lacinia aliquam mi proin massa. Integer nulla netus tempus, ac netus suscipit pharetra bibendum ut. Eget ligula sodales aenean.</p>
            <button>Подробнее</button>
          </li>
          <li>
            <h3>Morbi aliquam ornare sagittis tincidunt imperdiet vulputate orci, mauris. Lorem donec.</h3>
            <p>Et nisl quis sit euismod sit senectus ut interdum. Consequat faucibus fermentum in vitae aliquam, venenatis pellentesque purus. Venenatis interdum tempus aliquet.</p>
            <button>Подробнее</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;