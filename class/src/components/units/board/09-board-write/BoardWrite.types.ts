import { ChangeEvent } from "react";

export interface IBoardWriteUIProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    callGraphqlApi: ()=> void
    isActive: boolean
    isEdit: boolean
    data?: any
    onClickUpdate: ()=> void
}

export interface ISubmitButtonProps{
    isActive: boolean
}

export interface IBoardWriteProps{
    isEdit: boolean
    data?: any
}

export interface IMyVariables{
    number: number
    writer?: string
    title?: string
    contents?: string
}