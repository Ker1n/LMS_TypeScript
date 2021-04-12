import { LOAD_LESSON ,UPDATE_LESSON, ADD_LESSON, DELETE_LESSON } from '../store/types';

const initialState: Lesson[] = [];


export type Lesson = { 
    id: number
    title: string 
    image?: string
    data: string //YYYY-MM-DD
    completed: boolean
    
}

interface Action  { 
    type: string
    lessons: Lesson[]
    lesson: Lesson 
}



export const lessonsReducer = (state = initialState, action: Partial<Action>) => { 
    switch (action.type) {
        case LOAD_LESSON: { 
            return action.lessons;
        }
        case UPDATE_LESSON: { 
            return state.map((lesson:Lesson)=> { 
                if(lesson.id === action?.lesson?.id) { 
                    return {...lesson, ...action.lesson};
                }
                return lesson
            })
        }    
        case ADD_LESSON: { 
            return [...state, action.lesson]
        }     
        case DELETE_LESSON: { 
            return state.filter((lesson: Lesson) => {
                return lesson.id !== action?.lesson?.id
            })
        }
        default: return state
    }
}