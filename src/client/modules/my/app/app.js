import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    firstName;
    lastName;
    email;
    phone;

    handleInputOnChange(event) {
        this[event.target.name] = event.target.value;
    }

    handleGetData() {
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone
        };
        const reqInfo = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)
        };
        const req = new Request('/api/update', reqInfo);
        console.log('sending req');
        console.log(req.body);
        console.log(req.bodyUsed);

        fetch(req)
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                let value = JSON.parse(text);
                console.log(value);
                // eslint-disable-next-line no-alert
                alert(value);
            })
            .catch((error) => {
                console.log(`Failed: ${error}`);
            });
    }
}
