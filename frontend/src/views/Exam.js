import React from 'react';
import './Exam.css';
import mainimage2 from '../img/Rectangle 55.png'
function Exam() {
  return (
  <>
    <div className='breadcrumbs'>
      <p>Главная</p>
      <div className='spanbackground'></div>
        <p>Экзамен HSK</p>
    </div>
    <div className="Exam">
      <img src={mainimage2} alt=''/>
      <h1>Luctus facilisi ultrices varius et purus blandit. Ultrices nec hendrerit odio risus sit mauris. Tellus.</h1>
      <div className='Block9'>
        <p>Lorem accumsan id at vulputate. Praesent ornare velit posuere ut. Et pellentesque dui amet congue a feugiat tristique. Pulvinar sociis fermentum ipsum risus viverra. Quis aenean tincidunt mauris at massa.</p>
        <p>Venenatis, sed fames non auctor sapien, leo et commodo, fermentum. Sed turpis felis metus in ut at a pretium, curabitur. Quisque vitae vitae pulvinar porta enim quis lectus tempor. Vitae vulputate suscipit ut ullamcorper aliquam magna diam nec.</p>
        <p>Ac pellentesque nec amet risus, luctus tellus diam lorem lacus. Mi interdum quis nibh etiam quam faucibus leo netus. Id morbi tincidunt congue tristique metus quis vitae ipsum phasellus. Elementum eget a interdum erat eu ut sit habitasse cursus. Amet, egestas tortor non eget porta sit porta auctor.</p>
        <p>Magna turpis pretium tristique lectus eget nunc. Non elementum eros sit nibh. Mauris, egestas tortor lectus pulvinar nisi. Rhoncus tempor</p>
      </div>
    
    <div className='Block10'>
      <h3>Уровни:</h3>
      <ul>
        <li>1 уровень - словарный запас 150 слов - время проведения 40 минут</li>
        <li>2 уровень - словарный запас 300 слов - время проведения 55 минут</li>
        <li>3 уровень - словарный запас 600 слов - время проведения 1 час 30 минут</li>
        <li>4 уровень - словарный запас 1200 слов - время проведения 1 час 45 минут</li>
        <li>5 уровень - словарный запас 2500 слов - время проведения 2 час 05 минут</li>
        <li>6 уровень - словарный запас 5000 слов - время проведения 2 час 20 минут</li>
      </ul>
      <h3>Проходной балл:</h3>
      <ul >
        <li>1 уровень - 120 баллов из 200</li>
        <li>2 уровень - 120 баллов из 200</li>
        <li>3 уровень - 180 баллов из 300</li>
        <li>4 уровень - 180 баллов из 300</li>
        <li>5 уровень - 180 баллов из 300</li>
        <li>6 уровень - 180 баллов из 300</li>
      </ul>
      <p>Quis leo tempor ullamcorper in massa. Vestibulum, sed ipsum cursus consectetur habitant. Sollicitudin in tincidunt bibendum odio. Morbi orci ullamcorper pretium id. Pharetra non in eget laoreet libero dui. Eget pellentesque nibh semper libero eget. Tempus eget diam.</p>
      <ul className='listinfo'>
        <li>Condimentum sed massa eu dictum. Sapien, elementum curabitur at orci congue pharetra egestas imperdiet. Condimentum augue consequat, volutpat et ornare sed ut suscipit feugiat. Felis nulla nec montes, id. </li>
        <li>Bibendum faucibus sit a enim, ornare sed venenatis consequat, dapibus. Leo ornare id et in nullam leo tellus. </li>
        <li>Eu urna orci, ipsum amet adipiscing neque massa. Porta viverra donec felis non id urna, eget risus. Mattis dignissim egestas sapien, dui justo. Urna, tellus leo risus risus. Sodales turpis quis bibendum lorem nulla cursus nisl ornare a. Commodo amet dignissim placerat e sed venenatis consequat, dapibus. Le.</li>
      </ul>
      <p>Eget gravida ac facilisis duis nullam imperdiet urna, tempor. Mi bibendum fusce fames eget non ipsum aliquet. Vitae est suspendisse pulvinar tortor pretium consectetur semper ultrices aenean. Netus id libero elit nulla sed proin dui. In velit maecenas gravida non. Nec sit vitae, nulla in condimentum. Netus dui adipiscing feugiat fermentum sed vel. Habitant ipsum ut.</p>
      <ul className='buttonlist'>
        <li className='buttonitem'>MSK 1</li>
        <li className='buttonitem'>MSK 2</li>
        <li className='buttonitem'>MSK 3</li>
        <li className='buttonitem'>MSK 4</li>
        <li className='buttonitem'>MSK 5</li>
        <li className='buttonitem'>MSK 6</li>
      </ul>
    </div>
  </div>   
  </>
  );
}

export default Exam;