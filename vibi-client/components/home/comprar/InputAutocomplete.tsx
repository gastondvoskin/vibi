"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { BiChevronDown } from 'react-icons/bi'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface InputAutocompleteProps {
    citiesPeru: any
    label: string
    size?: string
    disabled?: boolean
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}


export function InputAutocomplete({
    citiesPeru, label, size, disabled, value, setValue
}: InputAutocompleteProps) {

    const [open, setOpen] = React.useState(false)
    const widthContainer = size === "small" ? "w-[45%]" : "w-full"
    const widthInput = size === "small" ? "w-[190px]" : "w-[400px]"
    return (
        <div className={`${widthContainer}`}>
            <label className="text-slate-500 text-xs font-medium leading-3">{label}</label>
            <div className="relative w-full h-12 px-4 py-3.5 bg-white rounded border border-slate-300 justify-center items-center inline-flex">
                <Popover open={open} onOpenChange={setOpen} >
                    <PopoverTrigger asChild>
                        <Button
                            disabled={disabled}
                            variant="link"
                            role="combobox"
                            aria-expanded={open}
                            className="justify-between ms-[-10px] text-blue-950 text-base font-normal leading-tight w-[416px] hover:no-underline"
                        >
                            {value
                                ? citiesPeru.find((city) =>
                                    city.value == value.replace(' ', '')
                                )?.label
                                : "Seleccionar"}
                            <BiChevronDown size={24} />
                        </Button>

                    </PopoverTrigger>
                    <PopoverContent className={`${widthInput} p-0`}>
                        <Command className="max-h-[240px]" >
                            <CommandInput placeholder={`Seleccionar ${label}`} className={`h-9 ${size == 'small' ? 'text-xs' : 'text-md'}`} />
                            <CommandEmpty>No se encontraron ${label}.</CommandEmpty>
                            <CommandGroup>
                                {citiesPeru.map((city) => (
                                    <CommandItem
                                        key={city.value}
                                        onSelect={(currentValue) => {

                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        {city.label}
                                        <CheckIcon
                                            className={cn(
                                                "ml-auto h-4 w-4",
                                                value === city.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
