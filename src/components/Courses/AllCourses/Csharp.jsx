import { NavLink } from 'react-router-dom';
import Csharpicon from '../../../img/csharp(1).svg'

const Csharp = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">С#</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ Csharpicon } width="250" className="img-fluid" alt={ Csharpicon } />
                </div>
            </div>

            <p className="lead">
                Научитесь создавать приложения, игры и веб-сайты с помощью C#.Занятия ведут практикующие разработчики с профильным образованием и внушительным стажем работы по специальности. Курс охватывает основы построения программ на языке C#, синтаксис и детали реализации приложений на платформе .NET Framework. Вы познакомитесь с методами и технологиями, используемыми в современных настольных и корпоративных приложениях. В курсе рассматриваются обработка событий, программирование пользовательского интерфейса, доступ к базам данных, асинхронное выполнение операций, создание пользовательских атрибутов и шифрование/расшифровка данных. Курс использует среду разработки Visual Studio.
            </p>

            <p className="lead">
                С# — один из самых востребованных языков программирования. На нём пишутся игры, приложения, программное обеспечение и многое другое. Это сложный язык со своими особенностями.
            </p>

            <p className="lead">
                По данным HH.ru Junior C# Developer ищут 135 компаний.Минимальная заработная плата младшего разработчика – 55 000 рублей. Обычно младшие специалисты работают в офисе, но есть несколько вакансий с возможностью работы из дома. Вы сможете работать с компаниями из России и других стран.
            </p>

            <h4>После обучения вы сможете:</h4>

            <ul className="lead">
                <li key={Math.random()}>Писать на С# корректно и чётко на уровне Middle</li>
                <li key={Math.random()}>Понимать специфики применения C#</li>
                <li key={Math.random()}>Освоить паттерны проектирования, принципы написания многопоточного кода</li>
                <li key={Math.random()}>Взаимодействовать с сетью, хранить и обрабатывать большие объемы данных</li>
                <li key={Math.random()}>Разбираться в типах данных</li>
                <li key={Math.random()}>Производить операции над данными</li>
                <li key={Math.random()}>Работать с массивами структур и функциями</li>
                <li key={Math.random()}>Работать с файлами и задачами</li>
            </ul>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                Курс рассчитан на 36 академических часов. Длительность 1,5  месяца (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе). 
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default Csharp;