import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import trophy from "@/public/trophy.png"

const youtubeId = [
  "29at6VKtAZo",
  "It4Dp9wbmqs",
  "fofIsuNxXX8",
  "lClJBN6dZMU",
  "nNkOzL2D-sQ",
];

const Porto = () => {
  return (
    <div className="transition-all duration-1000 ease-in-out mt-60">
        <div className="transition-all duration-1000 ease-in-out flex justify-center items-center text-3xl mb-0 sm:text-[40px] md:text-[50px] lg:text-[60px] lg:mb-8">
            <h1 className="readex-700">Sihir yang <a className="source-600">kuciptakan!</a></h1>
            <Image
            src={trophy}
            width='100'
            height='100'
            alt="trophy"
            className="ml-2 w-8 md:w-10 lg:w-12 xl:w-14"
            />
        </div>
        <div>
            <Carousel className="transition-all duration-1000 ease-in-out flex justify-center items-center w-full">
                <CarouselContent className="ml-10 lg:ml-6">
                    {youtubeId.map((videoId, index) => (
                    <CarouselItem key={index} className="transition-all duration-1000 ease-in-out pl-1 basis-1/1 sm:basis-1/1 md:basis-1/1 lg:basis-1/1 xl:basis-1/2 2xl:basis-1/3" >
                        <div className="transition-all duration-1000 ease-in-out p-1 w-[400px] lg:w-[560px]">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`YouTube video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-3xl"
                            ></iframe>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-16 bg-white" />
                <CarouselNext className="mr-16 bg-white" />
            </Carousel>
        </div>
        <div className="transition-all duration-1000 ease-in-out flex justify-center items-center text-xl md:mt-8 sm:text-[20px] md:text-[30px] lg:text-[40px]">
            <h1 className="readex-700">2 Years With <a className="source-600">30+ projects</a></h1>
        </div>
        
    </div>
  );
};

export default Porto;
