import React from "react";

export const Languages = ({lanUz, lanEn, lanRu}) => {

    const uz = localStorage.getItem('uzLan')
    const en = localStorage.getItem('enLan')
    const ru = localStorage.getItem('ruLan')

    const lans = [
        {
            name: ru==="true"?"узбекский":en==="true"?"Uzbek":"O'zbekcha",
            methods: lanUz,
            values: uz,
            flag: '/assets/uzb.jpg'
        }, {
            name: ru==="true"?"Английский":en==="true"?"English":"Inglizcha",
            methods: lanEn,
            values: en,
            flag: '/assets/eng.jpg'
        }, {
            name: ru==="true"?"Русский":en==="true"?"Russian":"Ruscha",
            methods: lanRu,
            values: ru,
            flag: '/assets/rus.png'
        }
    ]

    return (
        <div>
            {lans.length > 0 ? (
                <>
                    {lans.map(item => (
                        <li>
                            <a onClick={item.methods}
                               className={item.values === "true" ? "dropdown-item d-flex align-items-center active" : "dropdown-item d-flex align-items-center"}
                               style={{cursor: 'pointer'}}>
                                <span>
                                <span><img className="col-2 col-md-5 col-sm-2" src={item.flag} alt="" /></span><span>{item.name}</span>
                                </span>
                            </a>
                        </li>
                    ))}
                </>
            ) : (
                <></>
            )}
        </div>
    )
} 