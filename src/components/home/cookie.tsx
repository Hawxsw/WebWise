"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from '@/components/ui/switch';
import { setCookie, getCookie } from 'cookies-next';

export default function CookieButton() {
    const [open, setOpen] = useState(false);
    const [statisticsCookies, setStatisticsCookies] = useState(() => {
        const cookieValue = getCookie('statisticsCookies');
        return cookieValue === 'true';
    });

    const [marketingCookies, setMarketingCookies] = useState(() => {
        const cookieValue = getCookie('marketingCookies');
        return cookieValue === 'true';
    });

    const handleConfirm = () => {
        setCookie('statisticsCookies', statisticsCookies);
        setCookie('marketingCookies', marketingCookies);
        console.log('Configurações salvas:', { statisticsCookies, marketingCookies });
        setOpen(false); 
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <div className="fixed bottom-5 right-5">
                <DialogTrigger asChild>
                    <Button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200 transition" onClick={() => setOpen(true)}>
                        <div className="relative w-8 h-8">
                            <Image
                                src="/cookie.png"
                                alt="Cookie"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </Button>
                </DialogTrigger>
            </div>
            <DialogContent className="bg-white rounded-lg p-6 shadow-2xl max-w-lg mx-auto mt-10">
                <DialogHeader className="border-b pb-4 mb-4">
                    <DialogTitle className="text-black text-xl font-semibold">Configurações de cookies</DialogTitle>
                    <DialogDescription className="text-gray-600">
                        Você pode escolher quais cookies quer aceitar.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <div className="flex flex-col space-y-2">
                        <span className="text-gray-800 font-medium">Cookies obrigatórios</span>
                        <span className="text-gray-600">Eles são cookies para garantir o funcionamento adequado do site.</span>
                        <span className="text-gray-500 text-sm">Sempre ativo</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col max-w-[75%]">
                            <span className="text-gray-800 font-medium">Cookies de estatísticas</span>
                            <span className="text-gray-600 text-sm">São usados para coletar informações para exibir conteúdos específicos para um navegador em particular ao criar diferentes grupos-alvo.</span>
                        </div>
                        <Switch 
                            checked={statisticsCookies} 
                            onCheckedChange={(checked) => setStatisticsCookies(checked)} 
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col max-w-[75%]">
                            <span className="text-gray-800 font-medium">Cookies de marketing</span>
                            <span className="text-gray-600 text-sm">Eles são usados para coletar informações para exibir publicidade ou conteúdos específicos para um navegador em particular ao criar diferentes grupos-alvo.</span>
                        </div>
                        <Switch 
                            checked={marketingCookies} 
                            onCheckedChange={(checked) => setMarketingCookies(checked)} 
                        />
                    </div>
                </div>
                <DialogFooter className="mt-6">
                    <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white transition"
                        onClick={handleConfirm}
                    >
                        Confirmar configurações
                    </Button>
                </DialogFooter>
                <DialogClose asChild />
            </DialogContent>
        </Dialog>
    );
}
