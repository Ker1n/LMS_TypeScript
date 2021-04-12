import { LOAD_HOMEWORK ,UPDATE_HOMEWORK, ADD_HOMEWORK, DELETE_HOMEWORK } from '../store/types';

const initialState: Homework[] = [];


export type Homework = { 
    id: number
    title: string 
    description: string
    deadLine: string //YYYY-MM-DD HH:mm:ss
    deadEnd?: string //YYYY-MM-DD HH:mm:ss
    completed: boolean
    mark: number
    
}

interface Action { 
    type: string
    homeworks: Homework[]
    homework: Homework 
}



export const homeworksReducer = (state = initialState, action: Partial<Action>) => { 
    switch (action.type) {
        case LOAD_HOMEWORK: { 
            return action.homeworks;
        }
        case UPDATE_HOMEWORK: { 
            return state.map((homework:Homework)=> { 
                if(homework.id === action?.homework?.id) { 
                    return {...homework, ...action.homework};
                }
                return homework
            })
        }    
        case ADD_HOMEWORK: { 
            return [...state, action.homework]
        }     
        case DELETE_HOMEWORK: { 
            return state.filter((homework: Homework) => {
               return homework.id !== action?.homework?.id
            })
        }
        default: return state
    }
}