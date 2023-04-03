import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThjNjU4ODM1NWUyOTAwOGU3NDI3NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDI4OTk0NCwiZXhwIjoxNjgwNTQ5MTQ0fQ._9APYIMGgNrEH8xThTk2kwCn-3ZhacVCWJxBFUJaqt"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`${TOKEN}`}
})