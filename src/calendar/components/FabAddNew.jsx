import { addHours } from "date-fns"
import { useDispatch } from "react-redux"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import { useUiStore } from "../../hooks/useUiStore"
import { onOpenDateModal } from "../../store/ui/uiSlice"

const style = {
	borderRadius: "100%",
	bottom: "25px",
	fontSize: "17px",
	padding: "25px",
	position: "fixed",
	right: "30px"
}

export const Fab = () => {
	const { openDateModal } = useUiStore()
	const { setActiveEvent } = useCalendarStore()

	const onHandleClick = () => {
		setActiveEvent({
			_id: new Date().getTime(),
			title: "",
			notes: "",
			start: new Date(),
			end: addHours(new Date(), 2),
			bgColor: "#fafafa",
			user: {
				_id: "123",
				name: "Alex"
			}
		})
		openDateModal()
	}

	return (
		<button className="btn btn-primary" style={style} onClick={onHandleClick}>
			<i className="fas fa-plus"></i>
		</button>
	)
}
