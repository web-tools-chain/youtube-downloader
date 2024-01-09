"use client"
import { useState } from "react"
import axios, { AxiosResponse } from  'axios'


export  function Form() {

    const [text, setText] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)

    }

   
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)

        await axios.post('/form/form-data', {text})  
        .then((response: AxiosResponse) => {
        if(response.data) {
            console.log(response.data)
        }
        setIsLoading(false)
        })

        .catch((error) => console.log(error))
      
    }
    return (    
        <section className="h-full w-full form-control items-center justify-center">
               <section className="border border-solid md:w-1/3 h-1/2 card">
                    <form action="" onSubmit={handleSubmit} className="form-control justify-between h-full">
                        <section className="card-body">
                            <label htmlFor="youtube-link">Insira o Link para baixar</label>
                            <input required min={15} type="text" onChange={handleInputText} value={text}  className="input text-zinc-900 input-primary input-bordered"/>
                        {isLoading && "carregando..."}
                        </section>
                    <section className="flex items-end h-full">
                        <button type="submit" className="btn m-8 align-bottom btn-primary">
                            Baixar vídeo
                        </button>
                    </section>
                    </form>
               </section>
        </section>
    )
}