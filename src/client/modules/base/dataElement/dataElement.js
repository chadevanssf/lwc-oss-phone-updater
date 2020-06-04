import { LightningElement } from 'lwc';

export default class DataElement extends LightningElement {
    getRootUrl() {
        return `http://localhost:3001/api/`;
    }
}
