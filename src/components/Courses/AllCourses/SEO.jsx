import { NavLink } from 'react-router-dom';
import seoicon from '../../../img/SEO(2).svg'

const SEO = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">SEO</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ seoicon } width="250" className="img-fluid" alt={ seoicon } />
                </div>
            </div>

            <h4>По окончанию курса вы сможете:</h4>

            <ul className="lead">
                <li key={Math.random()}>Выполнить SEO аудит своего сайта и сайтов конкурентов</li>
                <li key={Math.random()}>Грамотно подобрать Семантическое Ядро (СЯ - актуальные поисковые запросы)</li>
                <li key={Math.random()}>Оптимизировать страницы сайта под СЯ</li>
                <li key={Math.random()}>Рассчитывать бюджет, сроки и целесообразность продвижения по различным запросам</li>
                <li key={Math.random()}>Продвигать сайт по высококонкурентным запросам</li>
                <li key={Math.random()}>Грамотно наращивать ссылочную массу там, где это необходимо</li>
                <li key={Math.random()}>Правильно составлять Технические Задания (ТЗ) и контролировать работу SEO специалистов</li>
                <li key={Math.random()}>Автоматизировать часть работы с помощью специального ПО</li>
            </ul>

            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                Курс рассчитан на 20 академических часов. Длительность 1 месяц (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе). 
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default SEO;