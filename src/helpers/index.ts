import {format} from "date-fns";

const formatDateToString = (date: Date): string => {
    return format(date, 'dd/MM/yyyy')
}

export {formatDateToString}