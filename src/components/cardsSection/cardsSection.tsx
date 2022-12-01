import React from "react";

const Card = ({ cor }: any) => {
    return (
        <div className="w-80">
            <div className={cor}></div>
            <div className="p-5 bg-white space-y-5">
                <h1 className="text-xl font-bold">Título do Cartão</h1>
                <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi est numquam dfdd</p>
            </div>
        </div>
    )
}

export const CardsSection = () => {
    return (
        <div className="bg-white_200 flex items-center justify-center py-20">
            <div className="gap-20 grid md:grid-cols-2 lg:grid-cols-3">
                <Card
                    cor="bg-orange-800 w-80 h-56"
                />
                <Card
                    cor="bg-orange-800 w-80 h-56"
                />
                <Card
                    cor="bg-orange-800 w-80 h-56"
                />
                <Card
                    cor="bg-orange-800 w-80 h-56"
                />
                <Card
                    cor="bg-orange-800 w-80 h-56"
                />
                <Card
                    cor="bg-orange-800 w-80 h-56"
                />
                <Card
                    cor="bg-orange-800 w-80 h-56"
                />
                <Card
                    cor="bg-orange-800 w-80 h-56"
                />
            </div>
        </div>
    )
}