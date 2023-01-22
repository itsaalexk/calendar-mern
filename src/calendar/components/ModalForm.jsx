import {useEffect, useMemo, useState} from "react"
import {addHours, differenceInSeconds} from "date-fns"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {registerLocale} from "react-datepicker"
import es from 'date-fns/locale/es';
import Swal from 'sweetalert2'
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useSelector } from "react-redux";




export const ModalForm = () => {

  

    
    registerLocale("es",es)

    const {activeEvent} = useCalendarStore()
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formValues , setFormValues] = useState({
        title:"",
        notes:"",
        start: new Date(),
        end: addHours( new Date(),2) 
    })

    const titleClass = useMemo(()=>{
        if (!formSubmitted) return ''
        return (formValues.title.length > 0)
        ? ''
        : "is-invalid"

    },[formValues.title, formSubmitted])

    useEffect(()=>{
        if(activeEvent !==null){
            setFormValues({...activeEvent})
        }

    },[activeEvent])

    const onSubmit =(e)=>{
        e.preventDefault();
        setFormSubmitted(true)

        const difference = differenceInSeconds(formValues.end , formValues.start)
        
        if (difference <= 0) {
          Swal.fire({
            title: "Error",
            text: 'Finish date cannot be inferior of start date',
            icon:'error'
          })
        } else if (isNaN(difference)){ Swal.fire({
            title:'Error',
            text:'Please input a date',
            icon:'error'
        })}

    }

    const onInputChange =({target})=>{
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChange =(event, changing)=>{
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }
  return (
    <>
       
        <h1> {activeEvent.title} </h1>
    <hr />
    <form className="container" onSubmit={onSubmit}>

        <div className="form-group mb-2">
            <label>Fecha y hora inicio</label>
            <DatePicker 
                minDate={formValues.start}
                selected={formValues.start}
                onChange={(event)=> onDateChange(event, "start")}
                className="form-control"
                dateFormat ="Pp"
                showTimeSelect
                locale="es"
                timeCaption="Hora"
            />
        </div>

        <div className="form-group mb-2">
            <label>Fecha y hora fin</label>
            <DatePicker 
                minDate={formValues.start}
                selected={formValues.end}
                onChange={(event)=> onDateChange(event, "end")}
                className="form-control"
                dateFormat ="Pp"
                showTimeSelect
                locale="es"
                timeCaption="Hora"
            />
        </div>

        <hr />
        <div className="form-group mb-2">
            <label>Titulo y notas</label>
            <input 
                type="text" 
                className={`form-control ${titleClass}`}
                placeholder="Título del evento"
                name="title"
                autoComplete="off"
                value ={formValues.title}
                onChange={onInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group mb-2">
            <textarea 
                type="text" 
                className="form-control"
                placeholder="Notas"
                rows="5"
                name="notes"
                value ={formValues.notes}
                onChange={onInputChange}
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
            type="submit"
            className="btn btn-outline-primary btn-block"
        >
            <i className="far fa-save"></i>
            <span> Guardar</span>
        </button>

    </form>
    </>

  )
}
