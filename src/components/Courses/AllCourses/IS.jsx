import { NavLink } from 'react-router-dom';
import isicon from '../../../img/Информационная безопасность(3).svg'

const IS = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ isicon } width="250" className="img-fluid" alt={ isicon } />
                </div>
            </div>
            
            <p className="lead">
                Данный курс предназначен для специалистов и компаний, служб безопасности, работающих в сфере защиты информации. В процессе обучения Вы получите не только теоретические знания, но и комплексные практические навыки по созданию надежного центра информационной безопасности в своей компании.            
            </p>

            <h4>Программа курса включает в себя:</h4>

            <ul className="lead">
                <li key={Math.random()}>знание и умение применения технологии защиты информации</li>
                <li key={Math.random()}>Проектирование системы защиты информации</li>
                <li key={Math.random()}>Установка и настройка средств защиты информации</li>
                <li key={Math.random()}>ИБ законодательство</li>
                <li key={Math.random()}>И другое</li>
            </ul>

            <p className="lead">
                Для изучения основ информационной безопасности необходимо в первую очередь определиться с целью учебы, имеющимся свободным временем и доступными финансовыми ресурсами.
            </p>

            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>
            
            <p className="lead">
                Курс рассчитан на 48 академических часов. Длительность 2-3 месяца (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default IS;