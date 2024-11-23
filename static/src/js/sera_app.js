import { Component, useState } from '@odoo/owl';
import { useService } from '@odoo/owl/dist/hooks/useService';

class SeraApp extends Component {
    seraService = useService('sera');
    setup() {
        this.state = useState({
            sera: [],
            inputVal: '',
            selectedDate: new Date().toISOString().slice(0, 10),
        });
        this.loadSera();
    }

    async loadSera() {
        this.state.sera = await this.seraService.getSera(this.state.selectedDate);
    }

    async addSera() {
        await this.seraService.createSera(this.state.inputVal, this.state.selectedDate);
        this.state.inputVal = '';
        await this.loadSera();
    }

    async toggleDone(sera) {
        await this.seraService.toggleDone(sera);
        await this.loadSera();
    }

    onDateChange(e) {
        this.state.selectedDate = e.target.value;
        this.loadSera();
    }
}

SeraApp.template = 'sera_app.template';
SeraAppApp.components = {};

export default SeraApp;