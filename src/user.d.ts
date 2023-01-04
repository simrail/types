type User = {
    SteamId: string,
    ServerCode: string,
    UserType: string,
    SteamInfo: SteamInfo,
    AdditionalInformation: number,
    TrainNoLocal: string,
}

type SteamInfo = {
    steamid: string;
    communityvisibilitystate: number;
    profilestate: number;
    personaname: string;
    profileurl: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    avatarhash: string;
    personastate: number;
    primaryclanid: string;
    timecreated: number;
    personastateflags: number;
}

export type { User }
