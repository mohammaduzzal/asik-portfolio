import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

// Example images (replace with your actual image URLs)
const images = [
  "https://i.ibb.co.com/hJBkvs3L/Whats-App-Image-2025-08-07-at-21-34-41-71a0ff7c.jpg",
  "https://i.ibb.co.com/27nZV08f/Whats-App-Image-2025-08-07-at-21-34-42-aa14332e.jpg",
  "https://i.ibb.co.com/7tNj3sxP/Whats-App-Image-2025-08-07-at-21-34-41-4edaf04b.jpg",
  "https://i.ibb.co.com/FL82gSw3/Whats-App-Image-2025-08-07-at-21-34-41-4f71ae4b.jpg",
  "https://i.ibb.co.com/HLc54wH9/Whats-App-Image-2025-08-07-at-21-34-42-8b315720.jpg",
  "https://i.ibb.co.com/LdJT7bkf/Whats-App-Image-2025-08-07-at-21-34-41-9cd86f0d.jpg",
];

const Slider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 py-5">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/1 sm:basis-1/2 md:basis-1/3"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0 aspect-square">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
       
      </Carousel>
    </div>
  );
};

export default Slider;
