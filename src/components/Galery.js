import React from "react";
import GoodCard from "./GoodCard";


class Galery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goods: [
                {
                    id:1,
                    name: "Бісер чеський чорний 5гр ",
                    image: "https://content2.rozetka.com.ua/goods/images/big/26033421.jpg",
                    price: "10 грн"
                },
                {
                    id:2,
                    name: "Бісер чеський зелений 5гр ",
                    image: "https://content.rozetka.com.ua/goods/images/big/26033423.jpg",
                    price: "10 грн"
                },
                {
                    id:3,
                    name: "Бісер чеський перламутровий 5гр ",
                    image: "https://content1.rozetka.com.ua/goods/images/big/26033398.jpg",
                    price: "10 грн"
                },
                {
                    id:4,
                    name: "Бісер чеський чорний 50гр ",
                    image: "https://content2.rozetka.com.ua/goods/images/big/26033421.jpg",
                    price: "80 грн"
                },
                {
                    id:5,
                    name: "Бісер чеський білий 50 гр ",
                    image: "https://content.rozetka.com.ua/goods/images/big/26033120.jpg",
                    price: "80 грн"
                },
                {
                    id:6,
                    name: "Бісер чеський прозорий (чорний) 50гр ",
                    image: "https://hmstudio.com.ua/29862-medium_default/biser-cheshskij-preciosa-133-10-0-40010-prozrachnyj-chernilno-seryj-10-g-10.jpg",
                    price: "90 грн"
                }
            ]
        }
    }
    render() {
        return (
            <div className="galery">
                {
                    this.state.goods.map((g) => (
                        <GoodCard key={g.id} good={g}/>
                    ))
                }
            </div>
        )
    }
}

export default Galery