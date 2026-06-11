"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { TextAlignStart } from "lucide-react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

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

const sub = [
  {
    id: 'cpu',
    name: 'Процессоры',
    children: [
      { id: 'intel-core-i3', name: 'Intel Core i3' },
      { id: 'intel-core-i5', name: 'Intel Core i5' },
      { id: 'intel-core-i7', name: 'Intel Core i7' },
      { id: 'intel-core-i9', name: 'Intel Core i9' },
      { id: 'amd-ryzen-3', name: 'AMD Ryzen 3' },
      { id: 'amd-ryzen-5', name: 'AMD Ryzen 5' },
      { id: 'amd-ryzen-7', name: 'AMD Ryzen 7' },
      { id: 'amd-ryzen-9', name: 'AMD Ryzen 9' }
    ]
  },
  {
    id: 'gpu',
    name: 'Видеокарты',
    children: [
      { id: 'rtx-4060', name: 'GeForce RTX 4060' },
      { id: 'rtx-4070', name: 'GeForce RTX 4070' },
      { id: 'rtx-4080', name: 'GeForce RTX 4080' },
      { id: 'rtx-4090', name: 'GeForce RTX 4090' },
      { id: 'rx-7600', name: 'Radeon RX 7600' },
      { id: 'rx-7700-xt', name: 'Radeon RX 7700 XT' },
      { id: 'rx-7800-xt', name: 'Radeon RX 7800 XT' },
      { id: 'rx-7900-xtx', name: 'Radeon RX 7900 XTX' }
    ]
  },
  {
    id: 'motherboards',
    name: 'Материнские платы',
    children: [
      { id: 'lga1700', name: 'LGA1700' },
      { id: 'lga1851', name: 'LGA1851' },
      { id: 'am4', name: 'AM4' },
      { id: 'am5', name: 'AM5' },
      { id: 'micro-atx', name: 'Micro-ATX' },
      { id: 'atx', name: 'ATX' },
      { id: 'mini-itx', name: 'Mini-ITX' }
    ]
  },
  {
    id: 'ram',
    name: 'Оперативная память',
    children: [
      { id: 'ddr4-16gb', name: 'DDR4 16GB' },
      { id: 'ddr4-32gb', name: 'DDR4 32GB' },
      { id: 'ddr5-16gb', name: 'DDR5 16GB' },
      { id: 'ddr5-32gb', name: 'DDR5 32GB' },
      { id: 'ddr5-64gb', name: 'DDR5 64GB' }
    ]
  },
  {
    id: 'storage',
    name: 'Накопители',
    children: [
      { id: 'ssd-sata', name: 'SSD SATA' },
      { id: 'ssd-nvme', name: 'SSD NVMe' },
      { id: 'ssd-pcie4', name: 'SSD PCIe 4.0' },
      { id: 'ssd-pcie5', name: 'SSD PCIe 5.0' },
      { id: 'hdd-1tb', name: 'HDD 1TB' },
      { id: 'hdd-2tb', name: 'HDD 2TB' },
      { id: 'hdd-4tb', name: 'HDD 4TB' }
    ]
  },
  {
    id: 'coolers',
    name: 'Охлаждение',
    children: [
      { id: 'air-coolers', name: 'Воздушные кулеры' },
      { id: 'aio-120', name: 'СЖО 120 мм' },
      { id: 'aio-240', name: 'СЖО 240 мм' },
      { id: 'aio-360', name: 'СЖО 360 мм' },
      { id: 'thermal-paste', name: 'Термопаста' },
      { id: 'case-fans', name: 'Корпусные вентиляторы' }
    ]
  },
  {
    id: 'psu',
    name: 'Блоки питания',
    children: [
      { id: 'psu-500w', name: '500W' },
      { id: 'psu-650w', name: '650W' },
      { id: 'psu-750w', name: '750W' },
      { id: 'psu-850w', name: '850W' },
      { id: 'psu-1000w', name: '1000W+' },
      { id: '80-plus-bronze', name: '80 Plus Bronze' },
      { id: '80-plus-gold', name: '80 Plus Gold' }
    ]
  },
  {
    id: 'cases',
    name: 'Корпуса',
    children: [
      { id: 'mini-itx-case', name: 'Mini-ITX' },
      { id: 'micro-atx-case', name: 'Micro-ATX' },
      { id: 'mid-tower', name: 'Mid Tower' },
      { id: 'full-tower', name: 'Full Tower' },
      { id: 'rgb-case', name: 'С RGB подсветкой' }
    ]
  },
  {
    id: 'monitors',
    name: 'Мониторы',
    children: [
      { id: '1080p', name: 'Full HD' },
      { id: '1440p', name: 'Quad HD' },
      { id: '4k', name: '4K UHD' },
      { id: '144hz', name: '144 Гц' },
      { id: '240hz', name: '240 Гц' },
      { id: 'ultrawide', name: 'Ultrawide' }
    ]
  },
  {
    id: 'peripherals',
    name: 'Периферия',
    children: [
      { id: 'gaming-keyboards', name: 'Игровые клавиатуры' },
      { id: 'mechanical-keyboards', name: 'Механические клавиатуры' },
      { id: 'gaming-mice', name: 'Игровые мыши' },
      { id: 'wireless-mice', name: 'Беспроводные мыши' },
      { id: 'headsets', name: 'Гарнитуры' },
      { id: 'microphones', name: 'Микрофоны' }
    ]
  },
  {
    id: 'network',
    name: 'Сетевое оборудование',
    children: [
      { id: 'wifi-routers', name: 'Wi-Fi роутеры' },
      { id: 'mesh-systems', name: 'Mesh-системы' },
      { id: 'network-cards', name: 'Сетевые карты' },
      { id: 'switches', name: 'Коммутаторы' },
      { id: 'access-points', name: 'Точки доступа' }
    ]
  },
    {
    id: 'network1',
    name: 'Сетевое оборудование',
    children: [
      { id: 'wifi-routers1', name: 'Wi-Fi роутеры' },
      { id: 'mesh-systems1', name: 'Mesh-системы' },
      { id: 'network-cards1', name: 'Сетевые карты' },
      { id: 'switches1', name: 'Коммутаторы' },
      { id: 'access-points1', name: 'Точки доступа' }
    ]
  },
    {
    id: 'network2',
    name: 'Сетевое оборудование',
    children: [
      { id: 'wifi-routers2', name: 'Wi-Fi роутеры' },
      { id: 'mesh-systems2', name: 'Mesh-системы' },
      { id: 'network-cards2', name: 'Сетевые карты' },
      { id: 'switches2', name: 'Коммутаторы' },
      { id: 'access-points2', name: 'Точки доступа' }
    ]
  }
];

const threeCols = (arr: any[]) => {
  const newArr: any[][] = [[], [], []]

  arr.forEach((e, i) => {
    newArr[i % 3].push(e);
  })

  return newArr
}

const ModalCatalog = () => {
  
  const subs = useMemo(() => {
    return threeCols(sub)
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='lg' className='flex justify-center items-center gap-5 px-7 py-7 cursor-pointer'>
            Каталог
            <TextAlignStart strokeWidth={3} size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-250 max-h-[80vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle>Каталог</DialogTitle>
        </DialogHeader>
        <div className="flex flex-1 min-h-0 mt-2 overflow-hidden">
          <div className="flex flex-col gap-1 min-w-70 pr-5">
            {catalogCategories.map(c => (
              <Link
                key={c.id}
                href='/'
                className="text-sm py-1.5 cursor-pointer hover:bg-accent px-2 rounded-lg transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <Separator orientation="vertical" />
          <div className="grid grid-cols-3 gap-6 pl-5 w-full overflow-y-auto overflow-x-hidden">
            {subs.map((ss, i) => (
              <div key={i} className="flex flex-col gap-2">
                {
                  ss.map((s: any) => (
                    <div key={s?.id} className="break-inside-avoid pb-3">
                      <div className="font-bold">{s?.name}</div>
                      <div className="flex flex-col gap-1 font-light mt-1">
                        {s?.children?.map((c: any) => (
                          <Link key={c.id} href='/' className="hover:font-medium">{c.name}</Link>
                        ))}
                      </div>
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModalCatalog