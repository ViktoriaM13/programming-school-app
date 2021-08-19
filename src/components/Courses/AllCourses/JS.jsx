import { NavLink } from 'react-router-dom';
import jsicon from '../../../img/JS(1).svg'

const JS = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">JAVA SCRIPT</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ jsicon } width="250" className="img-fluid brd" alt={ jsicon } />
                </div>
            </div>

            <p className="lead">
                Цель курса - получить конкретные знания и умения. Мы научим писать хороший современный код, понимать JavaScript в объёме, достаточном для создания интерфейсных компонентов, взаимодействия с сервером, подготовим к освоению фреймворка: Angular или другого, если ваша цель - создавать сложные приложения. Этот курс для тех кто знаком с HTML/CSS: верстать макеты не понадобится, но основные теги, позиционирование знать надо.           
            </p>

            <h4>Программа:</h4>

            <ul className="lead">
                <li key={Math.random()}>Введение в курс PHP для начинающих</li>
                <li key={Math.random()}>Введение в курс по PHP Как работает PHP Настройка окружения</li>
                <li key={Math.random()}>Установка и настройка OpenServer Установка и настройка PHPStorm Выражения в PHP Переменные в PHP Типы данных в PHP Операторы в PHP Условия в PHP Функции в PHP Отладка PHP-кода с помощью Xdebug в PHPStorm Подключение файлов в PHP Циклы и массивы</li>
                <li key={Math.random()}>Изучаем массивы в PHP Цикл foreach в PHP While: самый простой цикл в PHP Цикл for: работаем с числами Операторы break и continue в PHP Изучаем функции для работы с массивами Взаимодействие с пользователем</li>
                <li key={Math.random()}>GET-запросы в PHP Обрабатываем POST-запросы в PHP Пишем калькулятор на PHP Учимся работать с cookie в PHP Система авторизации с помощью cookie на PHP Работа с файлами</li>
                <li key={Math.random()}>Учимся работать с файлами в PHP Загрузка файлов на сервер Пишем фотоальбом на PHP Ещё немного практики</li>
                <li key={Math.random()}>Делаем форму обратной связи Что делать после изучения основ PHP</li>
            </ul>

            <p className="lead">
                Преподавателями являются ведущие разработчики с педагогическим талантом. По окончанию обучения выпускник получает Сертификат, реальные проекты как элементы портфолио (в процессе обучения они разрабатываются учеником), тех поддержку своего наставника пожизненно и помощь в трудоустройстве!            
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                Курс рассчитан на 36 академических часов. Длительность 1,5 месяца (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе). 
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default JS;