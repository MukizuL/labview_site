import React from "react";
import "../App.css";
//import { Button } from './Button';
import "./Module1.css";
import first from "./media/images/img-1.jpg";
import second from "./media/images/img-2.jpg";
import third from "./media/images/img-3.jpg";
import fourth from "./media/images/img-4.jpg";
import fifth from "./media/images/img-5.jpg";
import sixth from "./media/images/img-6.jpg";
import seventh from "./media/images/img-7.jpg";
import eighth from "./media/images/img-8.jpg";
import nineth from "./media/images/img-9.jpg";
import tenth from "./media/images/img-10.jpg";
import eleventh from "./media/images/img-11.jpg";
import twelfth from "./media/images/img-12.jpg";
import thirteenth from "./media/images/img-13.jpg";
import fourteenth from "./media/images/img-14.jpg";
import fifteenth from "./media/images/img-15.jpg";
import sixteenth from "./media/images/img-16.jpg";
import seventeenth from "./media/images/img-17.jpg";
import eighteenth from "./media/images/img-18.jpg";
import nineteenth from "./media/images/img-19.jpg";
import twentieth from "./media/images/img-20.jpg";
import twentyfirst from "./media/images/img-21.jpg";

function Module1() {
  return (
    <>
      <div className="Module1-white-stripe">
        <h1>Модуль 1</h1>
      </div>
      <div className="Module1-main-container">
        <p>
          После запуска LabVIEW перед Вами появится{" "}
          <span class="italic">диалоговое окно</span>, которое предложит Вам{" "}
          <span class="italicbold">создать новую программу</span>(Create
          Project) или{" "}
          <span class="italicbold">открыть уже существующий проект</span> (Open
          Existing).
        </p>
        <img src={first} alt="First" style={{ width: 600 }} />
        <p>
          Выбирайте опцию меню по созданию нового VI и у Вас появятся два окна:{" "}
          <span class="italicbold">лицевая панель</span> (Front Panel), т.е.
          интерфейс пользователя, и{" "}
          <span class="italicbold">блок-диаграмма</span> (Block Diagram),
          которая является программой в графическом виде.
        </p>
        <img src={second} alt="Second" style={{ width: 800 }} />
        <p className="style">
          Оба окна имеют линейки инструментов, имеющие служебные кнопки:
        </p>
        <img src={third} alt="Third" style={{ width: 1000 }} />
        <p>
          1 - запуск программы; 2 - запуск программы в циклическом режиме; 3 -
          прекращение выполнения программы; 4 - приостановка выполнения
          программы; 5 - запуск программы в режиме отладки; 6 - сохранение
          значений в связях; 7 - вхождение в структуры в режиме отладки; 8 -
          пошаговый режим отладки; 9 - выход из структуры в режиме отладки; 10 -
          редактирование свойств шрифта; 11 - выравнивание и позиционирование
          графических объектов; 12 - пространственное распределение графических
          объектов на лицевой панели; 13 - размещение графического объекта
          над/под другим объектом; 14 - автоматическое выравнивание графических
          объектов.
        </p>
        <p className="style">
          Также оба окна содержат меню, в котором имеются несколько подменю:
        </p>
        <img src={fourth} alt="Fourth" style={{ width: 1000 }} />
        <p>
          <span class="italicbold">File</span> - используется для открытия,
          создания и записи файла; <span class="italicbold">Edit</span> -
          используется для изменения, вставки, копирования и удаления
          графических объектов; <span class="italicbold">View</span> - позволяет
          вызывать <span class="italic">Панель Инструментов</span> (Tools) -
          один из основных служебных компонентов, с помощью которого можно
          создавать, модифицировать и отлаживать виртуальные инструменты;{" "}
          <span class="italicbold">Project</span> - используется для создания,
          сохранения и открытия нового или имеющегося проекта;{" "}
          <span class="italicbold">Operate</span> - содержит команды, связанные
          с запуском виртуального инструмента на исполнение;{" "}
          <span class="italicbold">Tools</span> - служит для управления
          проектом; <span class="italicbold">Window</span> - служит для
          переключения между окнами, открытия закрытия панелей, и т.д.;{" "}
          <span class="italicbold">Help</span> - содержит подсказки, различную
          информацию о LabVIEW и помогает при написании программы.
        </p>
        <p>
          Приступим к созданию первого элементарного приложения шаг за шагом.
          Для начала создадим <span class="italicbold">элемент управления</span>{" "}
          на <span class="italic">Лицевой Панели</span> (
          <span class="bold">ЛП</span>). Для этого необходимо нажать на панели
          правой кнопкой мыши и в появившемся окне навести на раздел{" "}
          <span class="italicbold">Numeric</span>, после чего нажать на иконку{" "}
          <span class="italicbold">Numeric Control</span> и поместить её на
          панель. Таким образом мы создали{" "}
          <span class="italic">числовую переменную</span>. Назовём её «Х».
          Аналогично устанавливаем и подписываем как «Y» еще один элемент
          управления. Это поля ввода наших параметров. Для отображения
          результата поместим на ЛП{" "}
          <span class="italicbold">Numeric Indicator</span>, который также
          находится в разделе <span class="italicbold">Numeric</span>. Подпишем
          его как "Результат". Должно получиться приблизительно так, как
          показано на картинке.
        </p>
        <img src={fifth} alt="Fifth" style={{ width: 800 }} />
        <p>
          Теперь перейдем к основной части работы, а именно к графическому
          программированию. В отличии от других языков графического
          программирования, нам не придется писать ни единой строки текстового
          кода, реализующего определенный алгоритм. Создав визуальный интерфейс
          с{" "}
          <span class="italic">
            двумя полями ввода чисел и одним цифровым индикатором
          </span>
          , поставим и реализуем задачу, например,{" "}
          <span class="italicbold">суммирования</span> этих чисел. Для этого
          необходимо перейти в окно <span class="italic">Блок Диаграмма</span> (
          <span class="bold">БД</span>), где мы видим три иконки (
          <span class="italicbold">терминала</span>), которые соответствуют
          созданным нами элементам управления. Реализация любого алгоритма в
          LabVIEW будет сводиться к элементарной последовательности действий, а
          именно к установке необходимых иконок, которые выполняют ту или иную
          функцию, и <span class="italicbold">связи</span> (соединения) их между
          собой. Для суммирования чисел необходимо нажатием правой кнопки мыши
          на БД вызвать<span class="italicbold"> функциональную панель</span>{" "}
          (Functions), навести на раздел <span class="italicbold">Numeric</span>{" "}
          и нажать на иконку Add, после чего поместить её на панель. Теперь
          только остается соединить необходимые контакты, для чего нужно навести
          на терминал, щёлкнуть левой кнопкой мыши на появившийся контакт и
          подвести указатель слева к одному из контактов пиктограммы
          суммирования. Для изменения направления связи потребуется еще один
          промежуточный щелчок левой клавишей мыши. Повторяем эти действия и для
          второго числа. Аналогично соединяем выход иконки суммирования со
          входом индикатора. Должна получиться функциональная диаграмма ("текст"
          программы) похожая на изображенную на рисунке.
        </p>
        <img src={sixth} alt="Sixth" style={{ width: 800 }} />
        <p>
          Все, программа написана. Теперь остается запустить ее на выполнение и
          убедиться в ее работоспособности. Запускаем программу на выполнение в
          циклическом режиме и меняем значения полей ввода чисел на ЛП. После
          этого можем завершить выполнение программы и{" "}
          <span class="italic">сохранить</span> наше первое элементарное
          приложение на диске. Выбираем пункт{" "}
          <span class="italicbold">Save</span> в меню{" "}
          <span class="italicbold">File</span> и в появившемся диалоговом окне
          выбираем или создаем желаемую директорию (папку), вводим имя файла и
          подтверждаем ввод. Записанный нами файл сохранился с расширением{" "}
          <span class="bold">vi</span> (Virtual Instrument) и имеет вид{" "}
          <span class="bold">.vi</span>.
        </p>
        <p>
          Изменим внешний вид наших графических объектов. Для этого переходим на
          ЛП, подводим указатель на объект, соответствующий "Х", и нажимаем
          правую кнопку мыши. В появившемся контекстном меню выбираем опцию{" "}
          <span class="italicbold">замены</span> (Replace). Далее входим в
          подменю Numeric и там выбираем{" "}
          <span class="italicbold">шарообразную ручку управления</span> (Knob).
        </p>
        <img src={seventh} alt="Seventh" style={{ width: 900 }} />
        <p>
          Изменим размер ручки с помощью растягивания её границ для увеличения
          точности задаваемых чисел. Изменим атрибуты ручки "Х", нажав на неё
          правой кнопкой мыши. В выпадающем меню выберем{" "}
          <span class="italicbold">изменение визуальных свойств объекта</span>{" "}
          (Visible Items), а в них <span class="italicbold">Ramp</span>. Для
          точного позиционирования ручки или отображения значения выберем еще и
          свойство <span class="italicbold">Digital Display</span>. Проделайте
          аналогичные шаги для остальных элементов управления, при этом для
          разнообразия можно выбирать различные элементы раздела{" "}
          <span class="italicbold">Replace {">>"} Numeric</span>. В результате
          получим похожий рисунок.
        </p>
        <img src={eighth} alt="Eighth" style={{ width: 850 }} />
        <p>
          Немного усложним задачу. Установим на панель{" "}
          <span class="italicbold">графический экран</span>, который будет
          отображать графическую зависимость значения суммы чисел от времени.
          Для этого на ЛП нажмём правую кнопку мыши и наведём на меню{" "}
          <span class="italicbold">Graph</span>, а в появившемся подменю выберем{" "}
          <span class="italicbold">Waveform Chart</span>.
        </p>
        <img src={nineth} alt="Nineth" style={{ width: 850 }} />
        <p>
          Устанавливаем <span class="italic">графический экран</span> на панель
          и для удобства меняем его атрибуты и свойства. Задаём значения суммы в
          диапазоне от 0 до 20, для этого нужно 2 раза щёлкнуть левой кнопкой
          мыши на минимальное и максимальное значения вертикальной оси и
          изменить их. Аналогично можем изменить названия осей, цвет и ширину
          линии.
        </p>
        <img src={tenth} alt="Tenth" style={{ width: 800 }} />
        <p>
          Теперь продолжим разработку нашего программного кода. Установим связь
          между значением суммы и Waveform Chart. Для этого перейдем в БД и
          соединим необходимый контакт с соответствующей иконкой графического
          окна. Для того чтобы не нарушать связь с уже имеющимся индикатором
          результата, можно навести на эту связь указатель и, когда она начнет
          мигать, щёлкнуть левой кнопкой мыши и провести еще одну связь:
        </p>
        <img src={eleventh} alt="Eleventh" style={{ width: 700 }} />
        <p>
          До этого времени мы запускали программу на выполнение в циклическом
          режиме. Теперь же мы "поместим" фрагмент нашей диаграммы в{" "}
          <span class="italicbold">цикл</span>, например, который является
          аналогом оператора "<span class="italicbold">While</span>". Условием
          выхода из цикла будет нажатие на кнопку останова. Для реализации
          поставленной задачи необходимо выполнить следующие шаги: 1) на{" "}
          <span class="italic">функциональной панели</span> выбрать{" "}
          <span class="italicbold">структуры</span> (Structures), а в них цикл{" "}
          <span class="italicbold">While Loop</span>; 2) разместить его на БД,
          увеличить до размера, чуть большего уже созданной нами структурной
          схемы. Поместим базовую структуру в цикл. Для этого выделяем всю
          схему, а затем перетягиваем выделенные элементы внутрь цикла:
        </p>
        <img src={twelfth} alt="Twelfth" style={{ width: 800 }} />
        <p>
          Теперь нажмем на{" "}
          <span class="italicbold">иконке условия выхода из цикла</span> правой
          кнопкой мыши. В выпадающем меню следует выбрать пункт создания{" "}
          <span class="italicbold">управляющего элемента</span> (Create
          Control). В результате появится пиктограмма, соответствующая{" "}
          <span class="italicbold">кнопке останова</span>. Чтобы изменение
          значений суммы, выводимой в виде графика, выполнялось с определенной
          задержкой во времени (для большей наглядности анализа работы)
          установим из <span class="italic">функциональной панели</span> иконку{" "}
          <span class="italicbold">
            Timing {">>"} Wait Until Next ms Multiple
          </span>
          . Создадим для нее <span class="italicbold">константу</span>,
          соответствующую этой задержке. Для этого подведем указатель к{" "}
          <span class="italic">левой части иконки</span>, нажмем правую клавишу
          мыши и выберем пункт{" "}
          <span class="italicbold">создания константы</span> (Create Constant).
          Введем значение с клавиатуры, равное, например, "250". В результате
          проделанной работы, диаграмма должна выглядеть следующим образом:
        </p>
        <img src={thirteenth} alt="Thirteenth" style={{ width: 800 }} />
        <p>
          Теперь остается желаемым образом сформировать{" "}
          <span class="italic">лицевую панель</span>, запустить программу на
          исполнение и наблюдать за графиком, меняя значения Х и Y. В итоге
          должен получиться похожий результат:
        </p>
        <img src={fourteenth} alt="Fourteenth" style={{ width: 1000 }} />
        <p>
          Нажав на созданную нами кнопку "Стоп", мы{" "}
          <span class="italic">остановим программу</span>. Теперь изменим
          константу, определяющую задержку, на один из визуальных элементов
          управления. Выбираем на ЛП понравившийся регулятор и подписываем его
          необходимым образом, меняем размер и диапазон значений от 0 до 1000, в
          окне БД удаляем соответствующую константу и оборвавшуюся связь,
          выделив их и нажав на клавиатуре клавишу{" "}
          <span class="italicbold">Delete</span>, соединяем контакт для
          установки задержки и задатчик, переходим на ЛП и делаем перекомпоновку
          элементов на панели.
        </p>
        <img src={fifteenth} alt="Fifteenth" style={{ width: 1200 }} />
        <p>
          Во время работы программы попробуйте изменить положение ползунка
          регулятора задержки. Видим, что так можно управлять скоростью
          отображения результата "вручную".
        </p>
        <p>
          Теперь перейдём к выполнению следующей задачи -{" "}
          <span class="italicbold">генерации массива случайных чисел</span>. Для
          ее решения Вам понадобится составить{" "}
          <span class="italic">специальную диаграмму</span>. Для этого создаём
          структуру <span class="italicbold">For Loop</span>, которая находится
          на <span class="italic">функциональной панели</span> в меню{" "}
          <span class="italicbold">Structures</span>. Особенность цикла For Loop
          в том, что условием завершения работы или выхода является{" "}
          <span class="italic">
            равенство переменной цикла и числа, определяющего количество
            итераций
          </span>
          . Другими словами, в LabVIEW для работы цикла типа For Loop необходимо{" "}
          <span class="italic">
            соединить пиктограмму N с константой, указывающей количество
            повторений
          </span>
          , нажав правой кнопкой мыши на контакт N и выбрав пункт{" "}
          <span class="italicbold">Create Constant</span>:
        </p>
        <img src={sixteenth} alt="Sixteenth" style={{ width: 600 }} />
        <p>
          Далее внутри цикла создаём функцию{" "}
          <span class="italicbold">генерации случайных чисел от 0 до 1</span>{" "}
          (Random Number (0-1)), которая находится на{" "}
          <span class="italic">функциональной панели</span> в меню{" "}
          <span class="italicbold">Numeric</span>. После этого в этом же меню
          выбираем функцию <span class="italicbold">умножения</span> (Multiply)
          и соединяем пиктограмму{" "}
          <span class="italicbold">переменной цикла</span> «i» и функцию
          генерации случайных чисел с функцией умножения. Полученную схему
          необходимо соединить с индикатором{" "}
          <span class="italicbold">Waveform Chart</span>, который мы уже
          создавали ранее. В итоге должна получиться следующая схема:
        </p>
        <img src={seventeenth} alt="Seventeenth" style={{ width: 800 }} />
        <p>
          Для начала результат будем выводить в виде графической зависимости
          случайных чисел от текущего значения числа итераций. Запустим
          программу на выполнение и посмотрим на получившийся результат.
          Выполнив первый шаг, связанный с генерацией и визуализацией случайной
          последовательности, перейдем к основной задаче записи данных на диск.
          Сначала мы используем самый простой подход для записи
          последовательности. Дословно он называется{" "}
          <span class="italicbold">Записью в Крупноформатную таблицу</span>{" "}
          (Write Delimited Spreadsheet File). Используя соответствующую
          диаграмму без указания дополнительных параметров, например, формат
          записываемого числа, создадим файл текстового формата, где через
          пробел последовательно будет записана сгенерированная
          последовательность. Для этого перетянем из функциональной панели
          пиктограмму{" "}
          <span class="italicbold">Write Delimited Spreadsheet File.vi</span>,
          которая находится в меню{" "}
          <span class="italicbold">
            File I/O {">>"} Write Delimited Spreadsheet File.vi
          </span>
          , и соединим с ней схему, находящуюся в цикле For Loop:
        </p>
        <img src={eighteenth} alt="Eighteenth" style={{ width: 800 }} />
        <p>
          Так как кроме входа "
          <span class="italicbold">ввод одномерного массива</span>" (1D data),
          другие входы (формат, путь и т.п.) нами не подсоединялись, то LabVIEW
          сформирует следующую последовательность действий: 1)будет создан
          массив из 50-и чисел; 2)результат будет отображен в виде графика;
          3)появится стандартное диалоговое окно, в котором будет предложено
          выбрать директорию и имя файла, для сохранения данных; 4)если файл до
          этого не существовал, то он будет создан и в него будет записан массив
          чисел, а если он уже был на диске, то будет предложено добавить данные
          в файл или заменить уже существующие; 5)после записи данных на диск
          программа сама завершит свое выполнение. Вы можете легко убедиться в
          этом, когда запустите программу на исполнение. Создаём файл{" "}
          <span class="italicbold">random.xls</span>. Можно выбрать и другое
          расширение имени, чтобы убедиться, что файл, созданный в LabVIEW,
          можно с легкостью использовать для работы с разными приложениями по
          типу Microsoft Word или Microsoft Excel. Данные сохраняются в обычном
          текстовом формате, поэтому не составит труда построить график в Excel,
          аналогичный графику в LabVIEW, с помощью Мастера Диаграмм Microsoft
          Excel:
        </p>
        <img src={nineteenth} alt="Nineteenth" style={{ width: 800 }} />
        <p>
          В прошлой задаче мы использовали высокоуровневую функцию записи данных
          на диск. Для реализации более гибкого алгоритма можно использовать
          функции более низкого уровня. Основные отличия заключаются в том, что
          функции создания или открытия файла, записи или чтения данных и
          закрытия файла выполнены как отдельные функциональные блоки. Составим
          диаграмму, которая как раз и будет использовать виртуальные
          инструменты низкоуровневого ввода/вывода. Для этого модифицируем
          предыдущую программу. Вместо функции{" "}
          <span class="italicbold">Write Delimited Spreadsheet File.vi</span>{" "}
          помещаем функцию{" "}
          <span class="italicbold">Array To Spreadsheet String</span>, которая
          находится на <span class="italic">функциональной панели</span> в меню{" "}
          <span class="italicbold">
            String {">>"} Array To Spreadsheet String
          </span>
          . Для входа <span class="italicbold">format string</span> функции
          создаём константу и задаём значение <span class="italicbold">%s</span>{" "}
          (строка). Затем открываем{" "}
          <span class="italic">функциональную панель</span>, наводим указатель
          на меню <span class="italicbold">File I/O</span> и создаём функции{" "}
          <span class="italicbold">Open/Create/Replace File</span>,{" "}
          <span class="italicbold">Close File</span> и{" "}
          <span class="italicbold">Write Text File</span>. Далее соединяем выход{" "}
          <span class="bold">spreadsheet string</span> функции{" "}
          <span class="italic">Array To Spreadsheet String</span> со входом{" "}
          <span class="bold">text</span> функции{" "}
          <span class="italic">Write Text File</span>; для функции{" "}
          <span class="italic">Open/Create/Replace File</span> создаём константу
          у входа <span class="bold">file path</span> и записываем туда путь к
          файлу random.xls, а у входа <span class="bold">operation</span>{" "}
          создаём константу и выбираем пункт{" "}
          <span class="italicbold">replace or create with confirmation</span>;
          соединяем вход <span class="bold">refnum out</span> функции{" "}
          <span class="italic">Open/Create/Replace File</span> со входом{" "}
          <span class="bold">file</span> функции{" "}
          <span class="italic">Write Text File</span>, а ее выход{" "}
          <span class="bold">refnum out</span> - со входом{" "}
          <span class="bold">refnum</span> функции{" "}
          <span class="italic">Close File</span>; для{" "}
          <span class="italic">Close File</span> создаем индикатор сообщения об
          ошибках записи. Для этого указатель подводим к выходу{" "}
          <span class="italicbold">Error Out</span>, нажимаем правую кнопку
          мыши, выбираем <span class="italicbold">Create Indiсator</span>. Далее
          соединяем входы <span class="bold">error in</span> и выходы{" "}
          <span class="bold">error out</span> функций. В результате получается
          похожая диаграмма:
        </p>
        <img src={twentieth} alt="Twentieth" style={{ width: 1200 }} />
        <p>
          После запуска программы на выполнение данные автоматически запишутся в
          заданный файл. Поскольку файл данных будет уже существовать, после
          попытки повторного запуска программы появится диалоговое окно, где
          нужно будет выбрать между{" "}
          <span class="italic">заменой существующего файла на новый</span> или{" "}
          <span class="italic">отменой записи в целом</span>.
        </p>
        <p>
          В заключение стоит поговорить о типах данных в LabVIEW. В данной среде
          имеется большое количество различных типов данных, в том числе таких,
          которых{" "}
          <span class="italic">нет в классических языках программирования</span>{" "}
          (например, refnum - подобие указателя). Но учить их все необязательно
          - достаточно знать основные из них и где они применяются. Если вы не
          знаете или забыли, к какому типу данных относится та или иная
          переменная, то достаточно с помощью сочетания клавиш{" "}
          <span class="bold">Ctrl + H</span> или нажав на{" "}
          <span class="bold">значок вопроса</span> на БД вызвать{" "}
          <span class="italicbold">Context Help</span> и навести на нужный
          терминал. Ниже приведена таблица с основными типами данных и их
          обозначениями на БД.
        </p>
        <img src={twentyfirst} alt="Twentyfirst" style={{ width: 1000 }} />
      </div>
    </>
  );
}

export default Module1;