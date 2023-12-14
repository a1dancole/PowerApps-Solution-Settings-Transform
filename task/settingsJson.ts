import tl = require('azure-pipelines-task-lib/task');

export type JsonStructure = {
    EnvironmentVariables: EnvironmentVariable[];
    ConnectionReferences: ConnectionReference[];
};

export type EnvironmentVariable = {
    SchemaName: string;
    Value: string;
};

export type ConnectionReference = {
    LogicalName: string;
    ConnectionId: string;
    ConnectorId: string;
};

export class SettingsJson {
    constructor(private _structure: JsonStructure, private _failOnWarning: boolean) {
    }

    public Transform(): JsonStructure {
        this._structure.ConnectionReferences.forEach(element => {
            let variable = tl.getVariable(element.LogicalName);
            if (variable == undefined) {
                this._failOnWarning ? 
                tl.error(`Variable ${element.LogicalName} not defined in pipeline variables.`) : 
                tl.warning(`Variable ${element.LogicalName} not defined in pipeline variables.`);
            } else {
                this.UpdateConnectionReference(element.LogicalName, variable)
            }
        });

        this._structure.EnvironmentVariables.forEach(element => {
            let variable = tl.getVariable(element.SchemaName);
            if (variable == undefined) {
                this._failOnWarning ? 
                tl.error(`Variable ${element.SchemaName} not defined in pipeline variables.`) : 
                tl.warning(`Variable ${element.SchemaName} not defined in pipeline variables.`);
            } else {
                this.UpdateEnvironmentVariable(element.SchemaName, variable)
            }
        });

        return this._structure;
    }

    private UpdateConnectionReference(logicalName: string, connectionId: string): ConnectionReference {
        const elementToUpdate = this._structure.ConnectionReferences.find(connectionReference => connectionReference.LogicalName === logicalName);

        if (elementToUpdate) {
            elementToUpdate.ConnectionId = connectionId;
            console.info(`Updated connectionId of ${elementToUpdate.LogicalName} to ${connectionId}`)
        }

        return elementToUpdate!;
    }

    private UpdateEnvironmentVariable(schemaName: string, value: string): EnvironmentVariable {

        this._structure = this._structure

        const elementToUpdate = this._structure.EnvironmentVariables.find(environmentVariable => environmentVariable.SchemaName === schemaName);

        if (elementToUpdate) {
            elementToUpdate.Value = value;
            console.info(`Updated value of ${elementToUpdate.SchemaName} to ${value}`)
        }

        return elementToUpdate!;
    }
}