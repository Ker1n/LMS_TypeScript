import { UPDATE_PROFILE } from '../store/types';

export type Profile = { 
    id: number
    name: string
    avatar: string | null
}

interface Action { 
    type:string
    profile: Profile
}

const initialState = {
    id: 1,
    name: 'Test',
    avatar:  null
};

export const profileReducer =  (state = initialState, action: Action) => { 
    switch (action.type) {
        case UPDATE_PROFILE: {
            return {...state, ...action.profile}
        }
            
        default: return state
    }
} 