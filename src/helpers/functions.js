import axios from "./axios";
import io from "socket.io-client";
import config from "../config";

export const Register = async ({
  name,
  surname,
  company,
  employmentNumber: employment_number,
  password,
}) => {
  const user = {
    name,
    surname,
    company,
    employment_number,
    password,
  };
  const { data } = await axios.post("employees/", user);
  return data;
};

export const Login = async ({
  employmentNumber: employment_number,
  password,
}) => {
  const { data } = await axios.get("employees/");
  const user = data?.find(
    (d) => d.password === password && d.employment_number === employment_number
  );
  return user;
};

export const GetRecords = async (_provider) => {
  let records = await axios.get("records/");
  let provider = await axios.get(`providers/${_provider}`);
  records = records.data;
  provider = provider.data;
  records = records.filter((record) => {
    return record.authorised_by === provider.id;
  });
  return records;
};

export const _CreateRecord = () => {
  const socket = io(config.IO_URL);
  socket.emit("hello", "admin");
  socket.on("alerted", (msg) => alert(msg));
  socket.emit("greet", "greetings from admin");
};

// known issue if clicked twice it will confirm twice
export const CreateRecord = async ({
  request,
  patient: _patient,
  illness: dieses,
  treatment,
  company: authorised_by,
}) => {
  let patients = await axios.get(`patients/`);
  patients = patients.data;
  const patient = patients.find((patient) => patient.id_number === _patient);
  const userRecord = {
    request,
    treatment,
    dieses,
    patient,
    authorised_by,
  };
  if (patient) {
    const socket = io(config.IO_URL);
    socket.on("connected", (msg) => console.log(msg));
    socket.emit("identify", userRecord);
    socket.on("confirmation", async (record) => {
      if (record.request === request) {
        alert("user confirmed");
        const _record = {
          treatment: record.treatment,
          dieses: record.dieses,
          patient: record.patient.id,
          authorised_by: record.authorised_by,
        };
        console.log(_record);
        const { data } = await axios.post("records/", _record);
        console.log(data);
        alert("record has been saved");
      }
    });
    socket.on("rejection", async (record) => {
      if (record.request === request) {
        alert("user denied");
      }
    });
    socket.disconnect();
  } else {
    alert("patient not found");
  }
};
