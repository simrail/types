type ApiResponse<Type> = {
    result: boolean,
    data: Type[],
    count: number,
    description: string
}


export type { ApiResponse }
