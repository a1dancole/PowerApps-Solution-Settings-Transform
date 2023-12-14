import tl = require('azure-pipelines-task-lib/task');
import fs = require('fs');
import { JsonStructure, SettingsJson } from './settingsJson';

export class Main {
    public static async Main(): Promise<void> {
        const filePath = tl.getPathInputRequired('settings_file_path');
        tl.checkPath(filePath, 'Settings File Path');
        const failOnWarning = tl.getBoolInput('fail_on_warning', false);

        const fileContent = fs.readFileSync(filePath).toString();
        const jsonContent = JSON.parse(fileContent) as JsonStructure;

        const settingsJson = new SettingsJson(jsonContent, failOnWarning);
        const transformedJson = settingsJson.Transform();

        const transformedJsonString = JSON.stringify(transformedJson);

        fs.writeFileSync(filePath, transformedJsonString);

        tl.setResult(tl.TaskResult.Succeeded, "PowerApps Settings transformed.");
    }
}

Main.Main();