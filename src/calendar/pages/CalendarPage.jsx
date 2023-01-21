import {useState} from "react"
import { Calendar,  } from 'react-big-calendar'
import { Navbar } from "../components/Navbar"
import { addHours } from 'date-fns'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { localizer } from '../../helpers/calendarLocalizer'
import { getMessagesES} from '../../helpers/getMessagesES';
import {CalendarEvent} from "../components/CalendarEvent";
import {CalendarModal} from "../components/CalendarModal";
import { useUiStore } from "../../hooks/useUiStore"
import { useCalendarStore } from "../../hooks/useCalendarStore"






export const CalendarPage = () => {

  const {openDateModal} = useUiStore()
  const {events} = useCalendarStore()
  const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "week")


  const eventStyleGetter = (event, start, end, isSelected) =>{
     

      const style = {
        backgroundColor: "#FF5733",
        borderRadius: "0px",
        opacity: 0.8,
        color: "white"
      }

      return {style}
  }
  const onDoubleClick =(event)=>{
    openDateModal()
  }
  const onSelect =(event)=>{
    console.log("OnSelect",event)
  }
  const onViewChange = (event)=>{
    localStorage.setItem("lastView", event) }
  return (
    <>
    <Navbar />
    <Calendar
      culture = "es"
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height:"90vh"}}
      messages={getMessagesES}
      eventPropsGetter ={eventStyleGetter}
      components={{
        event:CalendarEvent
      }}
      onDoubleClickEvent ={onDoubleClick}
      onSelectEvent = {onSelect}
      onView={onViewChange}
    />
    <CalendarModal/>
    </>

  )
}
