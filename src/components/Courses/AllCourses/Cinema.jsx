import { NavLink } from 'react-router-dom';
import cimenaicon from '../../../img/Cinema 4D(2).svg'

const Cinema = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">Cinema 4D</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ cimenaicon } width="250" className="img-fluid" alt={ cimenaicon } />
                </div>
            </div>

            <p className="lead">
                Данный курс основывается на практических заданиях и даёт фундаментальные знания работы в программе. Основной упор делается сразу на несколько направлений: моделирование, освещение, работа с материалами и анимация. Курс рассчитан на людей, которые хотят начать свой путь в области трёхмерной графики и получить знания для уверенного старта в программе Cinema 4D.
            </p>

            <h4>Краткая программа курса:</h4>

            <ul className="lead">
                <li key={Math.random()}>Введение</li>
                <li key={Math.random()}>Основы моделирования</li>
                <li key={Math.random()}>Освещение</li>
                <li key={Math.random()}>Материалы и рендеринг</li>
                <li key={Math.random()}>Основы анимации</li>
                <li key={Math.random()}>Ответы анимации</li>
            </ul>

            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>


            <p className="lead">
                Курс рассчитан на 66 академических часов. Длительность 3-4 месяца (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default Cinema;
