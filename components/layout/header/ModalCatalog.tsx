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
import { categoriesApi } from "@/scripts/api/categories"
import { Category } from "@/scripts/types/categories"
import { TextAlignStart } from "lucide-react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

const ModalCatalog = () => {
  const [catalog, setCatalog] = useState<Category[]>([])
  const [chooseParentCategory, setChooseParentCategory] = useState<number>(0)
  
  useEffect(() => {
    async function getCatalog () {
      const result = await categoriesApi.getCatalog()
      setCatalog(result)
    }

    getCatalog()
  }, [])


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='lg' className='flex justify-center items-center gap-5 px-7 py-7 cursor-pointer'>
            Каталог
            <TextAlignStart strokeWidth={3} size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-250 h-[80vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle>Каталог</DialogTitle>
        </DialogHeader>
        <div className="flex flex-1 min-h-0 mt-2 overflow-hidden">
          <div className="flex flex-col gap-1 min-w-70 pr-5">
            {catalog.map((c, i) => (
              <Link
                onMouseEnter={() => setChooseParentCategory(i)}
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
            {catalog[chooseParentCategory]?.children?.length ? (

              catalog[chooseParentCategory]?.children.map((c, i) => (
                <div key={c?.id} className="break-inside-avoid pb-3">
                  <Link href='/' className="font-bold hover:font-extrabold">{c?.name}</Link>
                  <div className="flex flex-col gap-1 font-light mt-1">
                    {c?.children?.map((cc: any) => (
                      <Link key={cc.id} href='/' className="hover:font-medium">{cc.name}</Link>
                    ))}
                  </div>
                </div>
              ))

            ) : (
              <div>На данный момент категория</div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModalCatalog