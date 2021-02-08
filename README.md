# Event-Tracker

Demo

### Sample Create Body

`POST http://localhost:5000/createEvent`

```json
{
    "Name": "Created Event!",
    "Description": "This is an event created via the Node server",
    "Status": "Scheduled",
    "Responders": [
       "reclm5RQAjI8DlNS2"
    ],
    "Start Date": "2021-02-09T20:00:00.000Z",
    "End Date": "2021-02-09T21:00:00.000Z",
    "Location": "Virtual"
}
```

### Sample Delete Body

`POST http://localhost:5000/deleteEvent`

```json
{
    "id": "ID_OF_CREATED_EVENT"
}
```

