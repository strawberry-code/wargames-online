import React, { Component } from 'react'
import Terminal from 'react-console-emulator'


export default class MyTerminal extends Component {

    constructor() {
        super();
        this.state = {
            promptLabel: 'guest@mainframe:~$',
            promptLabelConst: 'guest@mainframe:~$'
        }
    }
    commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        },
        login: {
            description: 'Perform login.',
            usage: 'login <email>',
            explicitExec: true,
            fn: () => {
                this.setState({promptLabel: ' > '})
                return 'insert your email:'
            }
        }
    }

    render () {
        return (
            <Terminal
                commands={this.commands}
                noHistory={false}
                noEchoBack={true}
                errorText={'command [command] not found'}
                //welcomeMessage={'Welcome to the React terminal!'}
                promptLabel={this.state.promptLabel}
            />
        )
    }
}
