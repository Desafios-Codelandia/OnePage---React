import React from "react";

export const Hero = () => {
    return (
        <div className="conatiner mx-auto bg-heroColor justify-center flex">
            <div className="px-5 pt-5 pb-28 space-y-14 md:flex mx-10 items-center md:justify-center max-w-screen-2xl">
                <div className="space-y-5 md:w-1/4 flex flex-col justify-center">
                    <h1 className="font-semibold text-3xl">Lorem ipsum, dolor sit amet.</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia reiciendis nesciunt ea magni odio quam amet, harum voluptatem neque eius. Nostrum laudantium explicabo quis voluptatibus voluptate consequatur. Architecto, molestias?</p>
                    <button className="bg-botaoAzul rounded-md py-2 px-10 w-40">Botão</button>
                </div>
                <div className="md:w-3/6 items-center justify-center md:justify-end flex">
                    <img className="w-3/4 h-3/4 md:h-3/4 md:w-3/4" src="../heroSection/imageHero.svg" alt="image" />
                </div>
            </div>
        </div>
    )
}