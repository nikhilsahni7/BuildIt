"use client"
import * as React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FaChair, FaBookmark, FaInfoCircle } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { DiningRoomItem } from "@/global/types";

const DiningRoomCard: React.FC<{ item: DiningRoomItem }> = ({ item }) => {
    const [isBookmarked, setIsBookmarked] = React.useState(false);
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    const styleColors = {
        "Modern": "bg-blue-100 text-blue-800",
        "Traditional": "bg-green-100 text-green-800",
        "Rustic": "bg-yellow-100 text-yellow-800",
        "Contemporary": "bg-purple-100 text-purple-800",
        "Eclectic": "bg-pink-100 text-pink-800",
    };

    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 max-w-sm h-[420px] flex flex-col">
            <CardHeader className="p-0 relative">
                <Carousel plugins={[plugin.current]} className="w-full">
                    <CarouselContent>
                        {item.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="aspect-video w-full overflow-hidden">
                                    <Image src={image} alt={item.name} width={400} height={200} className="object-cover"/>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </Carousel>
                <Button 
                    size="icon" 
                    variant="secondary" 
                    className="absolute top-2 right-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                >
                    <FaBookmark className={isBookmarked ? "text-yellow-500" : "text-white"} />
                </Button>
                <Badge 
                    className={`absolute bottom-2 left-2 ${styleColors[item.style as keyof typeof styleColors]}`}
                >
                    {item.style}
                </Badge>
            </CardHeader>
            <CardContent className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {item.features.slice(0, 2).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">{feature}</Badge>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                        <FaChair className="text-indigo-500 mr-1" />
                        <span>Seats {item.capacity}</span>
                    </div>
                    <span className="font-semibold">{item.price}</span>
                    <Button size="sm" variant="outline" className="rounded-full">
                        <FaInfoCircle className="mr-1" /> Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const DiningRoomInterior: React.FC = () => {
    const diningRoomItems: DiningRoomItem[] = [
        {
            id: 1,
            name: 'Elegant Dining Suite',
            price: '$3,500',
            images: ['https://picsum.photos/200/300?random=31', 'https://picsum.photos/200/300?random=32', 'https://picsum.photos/200/300?random=33'],
            description: 'Sophisticated dining set with a touch of luxury.',
            features: ['Extendable Table', 'Upholstered Chairs', 'Chandelier'],
            capacity: 8,
            style: 'Modern',
        },
        {
            id: 2,
            name: 'Rustic Dining Room',
            price: '$2,800',
            images: ['https://picsum.photos/200/300?random=34', 'https://picsum.photos/200/300?random=35', 'https://picsum.photos/200/300?random=36'],
            description: 'Warm and inviting rustic dining room.',
            features: ['Wooden Table', 'Bench Seating', 'Mason Jar Chandelier'],
            capacity: 6,
            style: 'Rustic',
        },
        {
            id: 3,
            name: 'Contemporary Chic',
            price: '$3,200',
            images: ['https://picsum.photos/200/300?random=37', 'https://picsum.photos/200/300?random=38', 'https://picsum.photos/200/300?random=39'],
            description: 'Sleek and modern dining room with contemporary design.',
            features: ['Glass Table', 'Leather Chairs', 'Modern Lighting'],
            capacity: 8,
            style: 'Contemporary',
        },
        {
            id: 4,
            name: 'Vintage Dining Room',
            price: '$3,000',
            images: ['https://picsum.photos/200/300?random=40', 'https://picsum.photos/200/300?random=41', 'https://picsum.photos/200/300?random=42'],
            description: 'Charming dining room with vintage decor.',
            features: ['Antique Furniture', 'Lace Tablecloth', 'Crystal Chandelier'],
            capacity: 6,
            style: 'Vintage',
        },
        {
            id: 5,
            name: 'Industrial Dining Area',
            price: '$3,400',
            images: ['https://picsum.photos/200/300?random=43', 'https://picsum.photos/200/300?random=44', 'https://picsum.photos/200/300?random=45'],
            description: 'Stylish dining room with industrial elements.',
            features: ['Metal Table', 'Wooden Chairs', 'Edison Bulb Lighting'],
            capacity: 8,
            style: 'Industrial',
        },
        {
            id: 6,
            name: 'Bohemian Dining Space',
            price: '$2,900',
            images: ['https://picsum.photos/200/300?random=46', 'https://picsum.photos/200/300?random=47', 'https://picsum.photos/200/300?random=48'],
            description: 'Eclectic dining room with a bohemian vibe.',
            features: ['Colorful Rugs', 'Vintage Chairs', 'Hanging Plants'],
            capacity: 6,
            style: 'Bohemian',
        },
        {
            id: 7,
            name: 'Coastal Dining Room',
            price: '$3,600',
            images: ['https://picsum.photos/200/300?random=49', 'https://picsum.photos/200/300?random=50', 'https://picsum.photos/200/300?random=51'],
            description: 'Bright and airy dining room with coastal decor.',
            features: ['Whitewashed Table', 'Nautical Accessories', 'Sea-Inspired Colors'],
            capacity: 8,
            style: 'Coastal',
        },
        {
            id: 8,
            name: 'Farmhouse Dining Area',
            price: '$3,200',
            images: ['https://picsum.photos/200/300?random=52', 'https://picsum.photos/200/300?random=53', 'https://picsum.photos/200/300?random=54'],
            description: 'Cozy dining room with farmhouse style.',
            features: ['Farmhouse Table', 'Rustic Chairs', 'Barn Door'],
            capacity: 6,
            style: 'Farmhouse',
        },
        {
            id: 9,
            name: 'Luxury Dining Suite',
            price: '$4,500',
            images: ['https://picsum.photos/200/300?random=55', 'https://picsum.photos/200/300?random=56', 'https://picsum.photos/200/300?random=57'],
            description: 'Luxurious dining room with high-end finishes.',
            features: ['Marble Table', 'Velvet Chairs', 'Crystal Chandelier'],
            capacity: 10,
            style: 'Luxury',
        },
        {
            id: 10,
            name: 'Scandinavian Dining Space',
            price: '$3,100',
            images: ['https://picsum.photos/200/300?random=58', 'https://picsum.photos/200/300?random=59', 'https://picsum.photos/200/300?random=60'],
            description: 'Simple and stylish dining room with Scandinavian design.',
            features: ['Light Wood Table', 'Minimalist Chairs', 'Neutral Colors'],
            capacity: 6,
            style: 'Scandinavian',
        },
    ];
    
    
    return (
        <div className="container mx-auto p-4 bg-gray-50 h-screen w-screen overflow-x-hidden">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Exquisite Dining Room Designs</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {diningRoomItems.map((item) => (
                    <DiningRoomCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default DiningRoomInterior;