import { NavLink } from 'react-router-dom';
import sermicon from '../../../img/SERM(1).png'

const SERM = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">SERM технология управления репутацией в поисковой выдаче</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ sermicon } width="250" className="img-fluid" alt={ sermicon } />
                </div>
            </div>
            
            <p className="lead">
                Помогает сформировать привлекательный образ бренда и продукции, который способствует повышению продаж.
            </p>

            <h4>SERM позволяет:</h4>

            <ul className="lead">
                <li key={Math.random()}>Свести к минимуму негативные отзывы за счет грамотной работы с мнениями; вытеснить негатив из топа поисковой выдачи и нейтрализовать влияние «черного пиара».</li>
                <li key={Math.random()}>Стимулировать появление нейтральных и положительных отзывов о компании, создающих правильное представление о товарах и услугах. SERM полезен для продвижения не только товаров и услуг, но и hr-бренда — создания положительного имиджа работодателя.</li>
            </ul>

            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части. 
            </p>

            <p className="lead">
                Курс рассчитан на 130 академических часов. Длительность 4-6 месяцев (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default SERM;