import { Calendar,  } from 'react-big-calendar'
import { Navbar } from "../components/Navbar"
import { addHours } from 'date-fns'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { localizer } from '../../helpers/calendarLocalizer'
import { getMessagesES} from '../../helpers/getMessagesES';




const events = [{
  title:"Cumple",
  notes: "Comprar tarta",
  start: new Date(),
  end: addHours(new Date(),2),
  bgColor: "#fafafa",
  user:{
    _id: "123",
}
}]


export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) =>{
      console.log(event, start, end, isSelected)

      const style = {
        backgroundColor: "#FF5733",
        borderRadius: "0px",
        opacity: 0.8,
        color: "white"
      }

      return {style}
  }
  return (
    <>
    <Navbar />
    <Calendar
      culture = "es"
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height:"90vh"}}
      messages={getMessagesES}
      eventPropsGetter ={eventStyleGetter}
    />
    </>

  )
}
