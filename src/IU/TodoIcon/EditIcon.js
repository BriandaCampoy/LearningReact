import React from 'react';
import {TodoIcon} from './TodoIcon'

function EditIcon({onEdit}){
    return(
        <TodoIcon
            type = "edit"
            // color='#000'
            onClick={onEdit}
        />
    )
}

export {EditIcon};