import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TextAlignStart } from "lucide-react"
import Link from "next/link"

export const catalogCategories = [
  {
    id: 1,
    name: "Смартфоны",
    slug: "smartphones",
    icon: "Smartphone",
  },
  {
    id: 2,
    name: "Ноутбуки",
    slug: "laptops",
    icon: "Laptop",
  },
  {
    id: 3,
    name: "Компьютеры",
    slug: "computers",
    icon: "Computer",
  },
  {
    id: 4,
    name: "Планшеты",
    slug: "tablets",
    icon: "Tablet",
  },
  {
    id: 5,
    name: "Телевизоры",
    slug: "tvs",
    icon: "Tv",
  },
  {
    id: 6,
    name: "Наушники",
    slug: "headphones",
    icon: "Headphones",
  },
  {
    id: 7,
    name: "Умные часы",
    slug: "smart-watches",
    icon: "Watch",
  },
  {
    id: 8,
    name: "Игровые приставки",
    slug: "gaming-consoles",
    icon: "Gamepad2",
  },
  {
    id: 9,
    name: "Фото и видео",
    slug: "photo-video",
    icon: "Camera",
  },
  {
    id: 10,
    name: "Принтеры и МФУ",
    slug: "printers",
    icon: "Printer",
  },
  {
    id: 11,
    name: "Сетевое оборудование",
    slug: "network",
    icon: "Router",
  },
  {
    id: 12,
    name: "Комплектующие",
    slug: "components",
    icon: "Cpu",
  },
  {
    id: 13,
    name: "Бытовая техника",
    slug: "home-appliances",
    icon: "Refrigerator",
  },
  {
    id: 14,
    name: "Кухонная техника",
    slug: "kitchen-appliances",
    icon: "CookingPot",
  },
  {
    id: 15,
    name: "Климатическая техника",
    slug: "climate",
    icon: "Fan",
  },
  {
    id: 16,
    name: "Товары для дома",
    slug: "home",
    icon: "House",
  },
]

const DrawerCatalog = () => {
  return (
    <Drawer direction="left">
        <DrawerTrigger asChild>
            <Button size='lg' className='flex justify-center items-center gap-10 text-xl px-10 py-7 cursor-pointer'>
                Каталог
                <TextAlignStart strokeWidth={3} size={25} />
            </Button>
        </DrawerTrigger>
        <DrawerContent className="max-w-75!">
            <DrawerHeader>
                <DrawerTitle>Каталог</DrawerTitle>
            </DrawerHeader>
            <div className="px-4">
                <ScrollArea>
                    {catalogCategories.map(c => (
                        <Link href='/' className="py-2 block hover:font-semibold" key={c.id}>
                            {c.name}
                        </Link>
                    ))}
                </ScrollArea>
            </div>
        </DrawerContent>
    </Drawer>
  )
}

export default DrawerCatalog