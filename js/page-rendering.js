// Сritical rendering path (критичний шлях рендеру)
// DOM(construction) => CSSOM => RenderTree => Layout(operation) => Paint => Compositing

// 1. Ввести назву сайту
// 2. Браузер відправляє запит на DNS сервер
// 3. Сервер відправляє браузеру HTML документ
// 4. Механізм візуалізації формує DOM. Утворюється дерево елементів за певною ієрархією
// 5. Формування CSSOM (CSS object model)
// 6. Формування моделі візуалізації (Render tree). Накладання DOM та CSSOM одне на одне
//    В Render tree не потраплять "невидимі" ел-ти (<head>, display: none)
// 7. Розміщення елементів (Layout). Flow => reflow
// 8. Формування шарів відображення (Paint)
// 9. Компонування (Compositing). Всі шари відправляються на відеокарту, яка їх відмальовує 
//    на екрані


// В браузері є 2 механізма:
// - механізм візуалізації (rendering engine) для відображення HTML, CSS
//   Chrome - Blink
//   Safari - WebKit
//   Firefox - Gecko
// - механізм JS (JavaScript engine) виконує JS код
//   Chrome - V8
//   Safari - Nitro
//   Firefox - SpiderMonkey