import {useState} from "react"
import {addHours} from "date-fns"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {registerLocale} from "react-datepicker"
import es from 'date-fns/locale/es';

export const ModalForm = () => {

    registerLocale("es",es)


    const [formValues , setFormValues] = useState({
        title:"Alex",
        notes:"Kononenko",
        start: new Date(),
        end: addHours( new Date(),2) //con esto se le agregan dos horas a la fecha actual
    })

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
        <h1> Nuevo evento </h1>
    <hr />
    <form className="container">

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
            />
        </div>

        <hr />
        <div className="form-group mb-2">
            <label>Titulo y notas</label>
            <input 
                type="text" 
                className="form-control"
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
