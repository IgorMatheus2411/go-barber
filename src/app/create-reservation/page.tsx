"use client";

import { ArrowLeft } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

export default function CreateReservation() {

    const [service, setService] = useState<"barba" | "cabelo">("cabelo");

    return (
        <main className="bg-background min-h-screen">
            <header className="h-32 bg-background-medium flex items-center justify-between p-6">
                <button className="hover:opacity-80 transition-all duration-300">
                    <ArrowLeft size={32} className="text-gray " />
                </button>
                
                <span className="text-xl">Agendamento</span>

                <Image className="rounded-full" src="/perfil.svg" alt="perfil" height={56} width={56} priority />
            </header>

            <section className="p-6 flex flex-col gap-8">

                <div className="flex flex-col gap-2">
                    <span className="text-white text-2xl">Escolha o serviço</span>
                    <div className=" flex gap-4">   
                        <button 
                        onClick={(e: any) => setService(e.target.value)}
                        value="cabelo" className={`${service == "cabelo" && "bg-orange border-orange text-background"} border border-gray rounded-lg p-2 hover:opacity-80 
                        transition-all duration-300`}> 
                            Corte de Cabelo
                        </button>

                        <button 
                        onClick={(e: any) => setService(e.target.value)}
                        value="barba" className={`${service == "barba" && "bg-orange border-orange text-background"} border border-gray rounded-lg p-2 hover:opacity-80 
                        transition-all duration-300`} > 
                            Corte de Barba
                        </button>
                    </div>
                </div>


                <div className="flex flex-col gap-2">
                    <span className="text-white text-2xl">Escolha a data</span>
                    <input className="bg-inputs h-14 px-4 text-gray rounded-lg" type="datetime-local" />
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-white text-2xl">Forma de pagamento</span>
                    <select className="bg-inputs h-14 px-4 text-gray rounded-lg">
                        <option value="">Pix</option>
                        <option value="">Cartão</option>
                        <option value="">Dinheiro</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-white text-2xl">Descrição</span>
                    <textarea rows={10} className="bg-inputs  p-2 px-4 text-gray rounded-lg" placeholder="Mais algum detalhe?"/>
                </div>

            <button className="bg-done h-9 rounded-lg hover:opacity-80 transition-all duration-300">Confirmar</button>


            </section>


        </main>
    )
}