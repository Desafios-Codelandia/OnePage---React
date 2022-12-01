import React from "react";

export const FormSection = () => {
    return (
        <div className="bg-formColor py-10 flex justify-center">
            <div className="space-y-10 flex flex-col max-w-md items-center">
                <h1 className="text-2xl font-bold">Entre em Contacto</h1>
                <div className="flex flex-col space-y-5">
                    <input className="p-5 outline-none" type="text" name="" id="" placeholder="Nome"/>
                    <input className="p-5 outline-none" type="email" name="" id="" placeholder="Email"/>
                    <input className="p-5 outline-none" type="number" name="" id="" placeholder="Numero"/>
                    <textarea className="p-5 outline-none" name="" id="" cols={30} rows={10} placeholder="Mensagem"/>
                </div>
                <button className="bg-botaoAzul p-4 outline-none" type="submit">Enviar Mensagem</button>
            </div>
        </div>
    )
}