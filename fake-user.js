import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

const getFakeUser = () => {
  let id = faker.datatype.uuid();
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let fullName = firstName + " " + lastName;
  let email = faker.internet.email(firstName, lastName);
  let phone = faker.phone.number("+1-###-###-####");
  let deviceId = faker.datatype.uuid();
  let fingerPrintJsId = faker.datatype.uuid();
  let sardineDeviceId = faker.datatype.uuid();

  let user = {
    nirvanaUserId: id,
    nirvanaDeviceId: deviceId,
    nirvanaUserStatus: "applicant",
    firstName: firstName,
    lastName: lastName,
    fullName: fullName,
    email: email,
    phone: phone,
    fingerPrintJsId: fingerPrintJsId,
    sardineDeviceId: sardineDeviceId,
  };

  console.table(user);

  return user;
};

window.getFakeUser = getFakeUser;
