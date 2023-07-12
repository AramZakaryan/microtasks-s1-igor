import React, {MouseEventHandler, useState} from "react";

type filterCriteriaType = "All" | "Dollars" | "Rubles"

export const LessonFilter = () => {
    const money = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubles', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubles', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubles', value: 50, number: ' v1234567890'},
    ]

    let filteredMoney

    let [filterCriteria, setFilterCriteria] = useState<filterCriteriaType>("All")

    filterCriteria === "Dollars" ?
        filteredMoney = money.filter(el => el.banknots === "Dollars") :
        filterCriteria === "Rubles" ?
            filteredMoney = money.filter(el => el.banknots === "Rubles") :
            filteredMoney = money

    const onClickHandler = (newFilterCriteria: filterCriteriaType) => {
        setFilterCriteria(newFilterCriteria)
    }

    return (
        <div>
            <ul>
                {filteredMoney.map((el, ind) => <li key={ind}>{el.banknots} {el.value}</li>)}
            </ul>
            <button onClick={() => onClickHandler("All")}>All</button>
            <button onClick={() => onClickHandler("Dollars")}>Dollar</button>
            <button onClick={() => onClickHandler("Rubles")}>Rubles</button>
        </div>
    )
}