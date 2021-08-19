import { NavLink } from 'react-router-dom';
import unityicon from '../../../img/Unity 3D(1).svg'

const GUnity = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">Разработчик игр на UNITY</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ unityicon } width="250" className="img-fluid" alt={ unityicon } />
                </div>
            </div>
            
            <p className="lead">
                Unity — движок и среда, при помощи которой разрабатываются компьютерные игры для миллионов пользователей по всему миру. Он позволяет разрабатывать приложения для разных платформ: смартфоны, планшеты, ПК, игровые консоли и др.
            </p>

            <p className="lead">
                Занятия проходят в удобное для вас и вашего преподавателя время, образовательный процесс можно совместить работой. мы дадим вам как можно больше практических навыков, а так же по окончанию курса и успешной сдачи выпускного экзамены вы получите свидетельство с присвоенной квалификацией: "разработчик игр на unity"
            </p>

            <h4>В программе обучения 2 блока:</h4>

            <h5>1 блок - программирование на С#:</h5>

            <ul className="lead">
                <li key={Math.random()}>Специфики применения C#</li>
                <li key={Math.random()}>Паттерны проектирования, принципы написания многопоточного кода</li>
                <li key={Math.random()}>Взаимодействие с сетью, хранение и обработка больших объемов данных</li>
                <li key={Math.random()}>Типы данных</li>
                <li key={Math.random()}>Работа с массивами структур и функциями</li>
                <li key={Math.random()}>Работа с файлами и задачами</li>
            </ul>

            <h5>2 блок - UNITY 3D / Game Dev / Геймдев разработка игр:</h5>

            <ul className="lead">
                <li key={Math.random()}>Создание 2D-проекта. Работа с объектами и интерфейсом</li>
                <li key={Math.random()}>Встроенный пользовательский ввод и работа с камерой</li>
                <li key={Math.random()}>Работа с физикой, частицами и эффектами</li>
                <li key={Math.random()}>Анимирование 2D</li>
                <li key={Math.random()}>Создание взаимодействия с окружением и геймплейных механик</li>
                <li key={Math.random()}>Работа с материалами, шейдерами, освещением</li>
                <li key={Math.random()}>Скриптинг звуков и эффектов</li>
                <li key={Math.random()}>Реализация искусственного интеллекта (ИИ) в приложении</li>
                <li key={Math.random()}>Создание связанных уровней и построение проекта</li>
                <li key={Math.random()}>Создание проекта 3D</li>
                <li key={Math.random()}>И многое другое</li>
            </ul>

            <p className="lead">
                Данный курс рассчитан на 120 академических часов, 4-5 месяцев.            
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            
            <p className="lead">
                Курс рассчитан на 120 академических часов. Длительность 4-6 месяцев (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default GUnity;