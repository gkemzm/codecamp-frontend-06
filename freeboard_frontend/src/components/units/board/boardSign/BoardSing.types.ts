import { ChangeEvent, MouseEvent } from "react";

export interface BoardSignFunctionProps{
    isEdit: boolean
}

export interface ISubmitButtonProps{
    isActive: boolean
}

export interface BoardSignHTMLProps{
    isEdit: boolean
    isActive: boolean
    writerError: string
    pwError: string
    titleError: string
    contentsError: string
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePw: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeYouTube: (event: ChangeEvent<HTMLInputElement>) => void
    updateBoard: ()=>void
    submit: (event: MouseEvent<HTMLButtonElement>) => void 
}