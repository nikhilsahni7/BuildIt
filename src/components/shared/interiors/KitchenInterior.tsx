"use client"
import * as React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FaUtensils, FaHeart, FaShareAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { KitchenItem } from '../../../global/types';
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const KitchenCard: React.FC<{ item: KitchenItem }> = ({ item }) => {
    const [isFavorite, setIsFavorite] = React.useState(false);
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    const colorClasses = [
        "bg-gradient-to-r from-pink-500 to-purple-500",
        "bg-gradient-to-r from-green-400 to-blue-500",
        "bg-gradient-to-r from-yellow-400 to-orange-500",
        "bg-gradient-to-r from-indigo-500 to-purple-600",
    ];

    const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 max-w-sm h-96 flex flex-col justify-between items-stretch">
            <CardHeader className={`p-0 relative ${randomColorClass}`}>
                <Carousel plugins={[plugin.current]} className="w-full">
                    <CarouselContent>
                        {item.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="aspect-video w-full overflow-hidden">
                                    {/* <img src={image} alt={`${item.name} image ${index + 1}`} className="object-cover w-full h-full" /> */}
                                    <Image src={image} alt={item.name} width={400} height={200}/>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </Carousel>
                <div className="absolute top-2 right-2 flex space-x-2">
                    <Button 
                        size="icon" 
                        variant="secondary" 
                        className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                        onClick={() => setIsFavorite(!isFavorite)}
                    >
                        <FaHeart className={isFavorite ? "text-red-500" : "text-white"} />
                    </Button>
                    <Button 
                        size="icon" 
                        variant="secondary" 
                        className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                    >
                        <FaShareAlt className="text-white" />
                    </Button>
                </div>
                <Badge 
                    className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-sm text-white"
                    variant="secondary"
                >
                    {item.price}
                </Badge>
            </CardHeader>
            <CardContent className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                    {item.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{feature}</Badge>
                    ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                        <FaUtensils className="text-yellow-500 mr-1" />
                        <span>{item.rating}/5</span>
                    </div>
                    <span>{item.reviews} reviews</span>
                </div>
            </CardContent>
        </Card>
    );
};

const KitchenInterior: React.FC = () => {
    const kitchenItems: KitchenItem[] = [
        {
            id: 1,
            name: 'Modern Elegance',
            price: '$5,000',
            images: ['https://picsum.photos/200/300?random=1', 'https://picsum.photos/200/300?random=2', 'https://picsum.photos/200/300?random=3'],
            description: 'Sleek design with cutting-edge appliances.',
            features: ['Smart Appliances', 'Quartz Countertops', 'LED Lighting'],
            rating: 4.8,
            reviews: 124,
        },
        {
            id: 2,
            name: 'Rustic Charm',
            price: '$4,500',
            images: ['https://picsum.photos/200/300?random=4', 'https://picsum.photos/200/300?random=5', 'https://picsum.photos/200/300?random=6'],
            description: 'Warm and inviting traditional kitchen.',
            features: ['Wooden Cabinets', 'Farmhouse Sink', 'Vintage Fixtures'],
            rating: 4.6,
            reviews: 98,
        },
        {
            id: 3,
            name: 'Urban Minimalist',
            price: '$3,800',
            images: ['https://picsum.photos/200/300?random=7', 'https://picsum.photos/200/300?random=8', 'https://picsum.photos/200/300?random=9'],
            description: 'Clean lines and minimalistic design.',
            features: ['Open Shelving', 'Stainless Steel', 'Concrete Countertops'],
            rating: 4.7,
            reviews: 85,
        },
        {
            id: 4,
            name: 'Classic Traditional',
            price: '$4,200',
            images: ['https://picsum.photos/200/300?random=10', 'https://picsum.photos/200/300?random=11', 'https://picsum.photos/200/300?random=12'],
            description: 'Timeless design with classic elements.',
            features: ['Crown Molding', 'Granite Countertops', 'Subway Tile Backsplash'],
            rating: 4.5,
            reviews: 110,
        },
        {
            id: 5,
            name: 'Industrial Loft',
            price: '$4,700',
            images: ['https://picsum.photos/200/300?random=13', 'https://picsum.photos/200/300?random=14', 'https://picsum.photos/200/300?random=15'],
            description: 'Raw and edgy design with industrial elements.',
            features: ['Exposed Bricks', 'Metal Fixtures', 'Concrete Floors'],
            rating: 4.3,
            reviews: 77,
        },
        {
            id: 6,
            name: 'Scandinavian Style',
            price: '$3,900',
            images: ['https://picsum.photos/200/300?random=16', 'https://picsum.photos/200/300?random=17', 'https://picsum.photos/200/300?random=18'],
            description: 'Bright and airy design with natural materials.',
            features: ['White Cabinets', 'Wood Accents', 'Minimalist Decor'],
            rating: 4.9,
            reviews: 132,
        },
        {
            id: 7,
            name: 'Farmhouse Cozy',
            price: '$4,100',
            images: ['https://picsum.photos/200/300?random=19', 'https://picsum.photos/200/300?random=20', 'https://picsum.photos/200/300?random=21'],
            description: 'Cozy design with farmhouse elements.',
            features: ['Shiplap Walls', 'Apron Sink', 'Butcher Block Countertops'],
            rating: 4.4,
            reviews: 89,
        },
        {
            id: 8,
            name: 'Mediterranean Warmth',
            price: '$4,800',
            images: ['https://picsum.photos/200/300?random=22', 'https://picsum.photos/200/300?random=23', 'https://picsum.photos/200/300?random=24'],
            description: 'Warm and inviting design with Mediterranean elements.',
            features: ['Terracotta Tiles', 'Archways', 'Hand-Painted Backsplash'],
            rating: 4.6,
            reviews: 105,
        },
        {
            id: 9,
            name: 'Bohemian Chic',
            price: '$4,300',
            images: ['https://picsum.photos/200/300?random=25', 'https://picsum.photos/200/300?random=26', 'https://picsum.photos/200/300?random=27'],
            description: 'Eclectic design with bohemian elements.',
            features: ['Colorful Tiles', 'Open Shelving', 'Vintage Decor'],
            rating: 4.5,
            reviews: 93,
        },
        {
            id: 10,
            name: 'Coastal Breeze',
            price: '$4,600',
            images: ['https://picsum.photos/200/300?random=28', 'https://picsum.photos/200/300?random=29', 'https://picsum.photos/200/300?random=30'],
            description: 'Light and breezy design with coastal elements.',
            features: ['Blue Accents', 'Rattan Furniture', 'Seashell Decor'],
            rating: 4.7,
            reviews: 114,
        }
    ];
    
    return (
        <div className="container mx-auto p-4 bg-gray-100 h-screen w-screen overflow-x-hidden">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Our Kitchen Designs</h1>
            <div className="grid grid-cols-2  lg:grid-cols-4 gap-6">
                {kitchenItems.map((item) => (
                    <KitchenCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default KitchenInterior;
