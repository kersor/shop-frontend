"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { debounce } from "@/lib/debounce"
import { locationApi } from "@/scripts/api/locations"
import { City } from "@/scripts/types/location"
import { MapPin, SearchIcon, X } from "lucide-react"
import React, { useEffect, useMemo, useState } from "react"

const ModalLocation = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [locations, setLocations] = useState<City[]>([])
    const [location, setLocation] = useState('')
    const [open, setOpen] = useState(false)

    const db = useMemo(() => {
        return debounce(async (value) => {
            const params = {
                limit: 10,
                search: value
            }

            const data = await locationApi.getAll(params)
            setLocations(data)
            setIsLoading(false)
        }, 500)
    }, [])

    const funcOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true)
        const value = e.target.value

        setLocation(value)
        db(value)
    }

    useEffect(() => {
        const getLocations = async () => {
            setIsLoading(true)
            const data = await locationApi.getAll({limit: 10})
            setLocations(data)
            setIsLoading(false)
        }
        
        if (!location.length) getLocations()
    }, [location])
 
    return (
        <Dialog
            open={open}
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    setLocation('')
                }

                setOpen(isOpen)
            }}
        >
            <DialogTrigger asChild>
                <Button className="cursor-pointer" variant="outline">
                    <MapPin /> Чебоксары
                </Button>
            </DialogTrigger>
            <DialogContent className="min-h-100 flex flex-col">
                <DialogHeader>
                    <DialogTitle>Выберите ваш город</DialogTitle>
                </DialogHeader>
                <InputGroup>
                    <InputGroupInput onChange={funcOnChange} value={location} placeholder="Найти город"/>
                    {!!location.length && (
                        <InputGroupAddon align="inline-end">
                            <InputGroupButton
                                aria-label="Close"
                                title="Close"
                                size="icon-xs"
                                onClick={() => setLocation('')}
                                className="cursor-pointer"
                            >
                                <X />
                            </InputGroupButton>
                        </InputGroupAddon>
                    )}
                </InputGroup>
                {isLoading && (
                    <div className="flex justify-center items-center flex-1">
                        <Spinner />
                    </div>
                )}
                <ScrollArea className="max-h-[50vh] overflow-y-auto">
                    {!isLoading && !!locations.length && (
                        locations.map(l => (
                            <div key={l.id} className="text-sm py-1.5 my-0.5 cursor-pointer hover:bg-accent px-2 rounded-lg transition-colors">
                                {l.name}
                            </div>
                        ))
                    )}
                    {!isLoading && !locations.length && (
                        <div>Город <span className="text-lg font-bold">{location}</span> не был найден</div>
                    )}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}

export default ModalLocation