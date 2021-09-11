import Axios from "axios";
import {convertObjectToFormData} from "../Services/util";
import { getAuthHeader } from "../Services/util";

class ContactFormDataAccess {
    registerFromSubmit  = (Name, Institute, Subject, Session, Birthday, Address, Email, Phone, Course, Gender) => {
        const data = convertObjectToFormData({ name: Name, institute: Institute, subject: Subject, session: Session, birthday: Birthday, address: Address, email: Email, phone: Phone, course: Course, gender: Gender});
        return Axios.post("http://ca.appstick.com.bd/api/registration", data, {
          headers: {
            Authorization: getAuthHeader(),
          },
        })
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .catch((error) => {
          return error.message;
        });
      };
}

export default new ContactFormDataAccess()