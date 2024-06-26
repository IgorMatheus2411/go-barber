"use client"

import { Calendar, CalendarBlank, Clock } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
    return (
        <main className="bg-background min-h-screen">
            <header className="h-32 bg-background-medium flex items-center justify-between p-6">
                <div className="flex flex-col text-xl">
                    <span className="text-gray">Bem vindo,</span>
                    <span className="text-orange">Igor Matheus</span>
                </div>

                <Image className="rounded-full" src="/perfil.svg" alt="perfil" height={56} width={56} priority />
            </header>

            <section className="p-6 flex flex-col gap-4">
                <h4 className="text-2xl py-2">Barbearias</h4>
                <div className="flex flex-col gap-6">


                {/* AQUI ONDE FICA AS BARBEARIAS*/ }


                    <div className="flex items-center justify-between gap-6 bg-shape p-3 rounded-lg">
                        <Image src="/1.svg" alt="" height={72} width={72}/>
                        
                        <div className="flex-1 flex flex-col">
                                <span className="font-medium">Barber</span>
                            <div className="flex gap-2 items-center">
                                <CalendarBlank size={14} className="text-orange"/>
                            <span className="text-gray text-sm">Segunda á sexta</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Clock size={14} className="text-orange"/>
                            <span className="text-gray text-sm">8h ás 18h</span>
                        
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-between gap-6 bg-shape p-3 rounded-lg">
                        <Image src="/2.png" alt="" height={72} width={72}/>
                        
                        <div className="flex-1 flex flex-col">
                                <span className="font-medium">Barber Shop</span>
                            <div className="flex gap-2 items-center">
                                <CalendarBlank size={14} className="text-orange"/>
                            <span className="text-gray text-sm">Segunda á sexta</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Clock size={14} className="text-orange"/>
                            <span className="text-gray text-sm">8h ás 18h</span>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}