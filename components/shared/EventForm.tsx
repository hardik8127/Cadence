"use client";

type EventFormProps = {
  userId: string
  type: "Create" | "Update"
  //event?: IEvent,
  eventId?: string
}

const EventForm = ({userId, type}: EventFormProps) => {
  return <div>EventForm {type}</div>;
};

export default EventForm;
