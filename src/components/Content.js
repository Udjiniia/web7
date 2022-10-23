import React from "react";

function changeStyleById(id, style) {
    let el = document.getElementById(id)
    if (el.className === "normal") {
        el.className = style
    } else {
        el.className = "normal"
    }
}

function changeStyleBySelector(selector, style) {
    let el = document.querySelector("#" + selector)
    if (el.className === "normal") {
        el.className = style
    } else {
        el.className = "normal"
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <p><strong>Дата і місце народження:</strong> 16 12.2001, м. Київ.</p>
                <p><strong>Освіта:</strong> НВК 143, КПІ ім. Ігоря Сікорського.</p>
                <h3>Хоббі:</h3>
                <ul style={{display: "inline-block"}} type="square">
                    <li>Створення силянок</li>
                    <li className="normal" id="art" onClick={() => changeStyleById("art", "style1")}>Артбукінг</li>
                    <li className="normal" id="painting" onClick={() => changeStyleBySelector("painting", "style2")}
                    >Малювання
                    </li>
                </ul>
                <h3>Улюблені книги:</h3>
                <ol style={{display: "inline-block"}}>
                    <li>Дівчина з татуюванням дракона</li>
                    <li>Ті, що співають у терні</li>
                    <li>Маленькі жінки</li>
                </ol>
                <h3>Комфортне місто:</h3>
                <p style={{display: "inline-block", width: "80%", textAlign: "center"}}>
                    <strong>Любляна</strong> – столиця Словенії, маленьке і затишне європейське місто, яке здивувало
                    мене своїм комфортом, маленькими вуличками, місцевими ярмарками та студентським життям.
                    Можливо, це не найкраще місто Європи, і тут може бути нічого робити активним туристам, але я дуже
                    раджу його відвідати. Обов'язково подивіться на місто із фунікулеру та скоштуйте найсмачніше
                    морозиво
                    (чи декілька пуншів взимку)!</p>
            </div>
        )
    }
}

export default Content