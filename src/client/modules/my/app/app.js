import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    handleGetData() {
        const data = { term: 'hello' };
        fetch('/api/search', {
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
