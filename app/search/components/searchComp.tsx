"use client"

import * as React from "react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { search } from "./search"
import { Product } from "./types"

export function SearchComp() {
    const [open, setOpen] = React.useState(false)

    const [inputValue, setInputValue] = React.useState<string>("");
    const [products, setProducts] = React.useState<Product[]>([])

    const valueChangeHandler = async (newValue: string) => {
        try {
            const searchData = await search(newValue)
            console.log(searchData)
            if(searchData?.products) setProducts(searchData?.products)

            console.log(searchData?.products)
        } catch (e) {
            console.log(e)
            setProducts([])
        }
    }

    React.useEffect(()=>{
        console.log("Input value changed")
        if(inputValue.length < 2){
            setProducts([])
            return
        }
        console.log("Input value:", inputValue.length)

        const timeoutId = setTimeout(async ()=>{
            console.log("In timeout")
            await valueChangeHandler(inputValue)
            console.log("timeout done")
        }, 300)

        return ()=>{clearTimeout(timeoutId)}
    },[inputValue])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <p className="text-muted-foreground text-sm">
                Press{" "}
                <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
                    <span className="text-xs">⌘</span>J
                </kbd>
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." value={inputValue} onValueChange={setInputValue}/>
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        {
                            products.map((product) => 
                                 (
                                    <CommandItem key={product.id} value={product.title}>
                                        <span>{product.title}</span>
                                    </CommandItem>
                                )
                            )
                        }
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
