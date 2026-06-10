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
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { MapPin, SearchIcon, X } from "lucide-react"
import React, { useState } from "react"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const ModalLocation = () => {
    const [location, setLocation] = useState('')

    const funcOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        setLocation(value)
    }
 
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="cursor-pointer" variant="outline">
                    <MapPin /> Чебоксары
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Выберите ваш город</DialogTitle>
                </DialogHeader>
                <InputGroup>
                    <InputGroupInput onChange={funcOnChange} value={location} placeholder="Найти город"/>
                    <InputGroupAddon align="inline-end">
                        <InputGroupButton
                            aria-label="Close"
                            title="Close"
                            size="icon-xs"
                            onClick={() => setLocation('')}
                            className="cursor-pointer"
                        >
                            {!!location.length && <X />}
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
                <ScrollArea className="max-h-[50vh] overflow-y-auto px-4">
                    {tags.map((tag) => (
                    <React.Fragment key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                    </React.Fragment>
                    ))}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}

export default ModalLocation