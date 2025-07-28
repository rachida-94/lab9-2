export interface TextInputProps{
    onTextChange: (text:string)=>void 
    placeholder? :string
    initialValue: string
}
export interface TextStatsProps{
    characterCount: number
    wordCount:number
    readingTime:number
}

export interface StatsDisplayProps{
    stats: TextStatsProps
    showReadingTime?:Boolean
}

export interface characterCounterProps{
    minWords?: number
    maxWords?:number
    targetReadingTime?:number
}