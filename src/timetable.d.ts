type Timetable = {
    trainNoLocal: string,
    trainNoInternational: string,
    trainName: string,
    startStation: string,
    startsAt: string,
    endStation: string,
    endsAt: string,
    locoType: string,
    trainLength: number,
    trainWeight: number,
    continuesAs: string,
    timetable: timetable
}

type timetable = {
    nameOfPoint: string, 
    nameForPerson: string,
    pointId: string, 
    supervisedBy: string, 
    radioChanels: string, 
    displayedTrainNumber: string, 
    arrivalTime: string, 
    departureTime: string, 
    stopType: StopType, 
    line: number, 
    platform: string, 
    track: number, 
    trainType: string, 
    mileage: number, 
    maxSpeed: number, 
    stationCategory: string
}

const enum StopType {
    NoStopOver,
    CommercialStop,
    NoncommercialStop
}


export type { Timetable }
