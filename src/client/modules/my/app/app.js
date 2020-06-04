import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    firstName;
    lastName;
    email;
    phone;

    handleGetData() {
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone
        };

        fetch('/api/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
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
