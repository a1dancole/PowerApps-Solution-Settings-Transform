# PowerApps Solution Settings Transform

## Overview

The **PowerApps Solution Settings Transform** is your go-to solution for seamless transformation of Power Platform deployment settings files generated by the Power Apps CLI. Elevate your PowerApps development workflow by automating the customization of deployment configurations.

## Features

### JSON Transformation

Effortlessly modify and customize Power Platform deployment settings files during your build or release pipelines. Adapt your configuration to fit specific deployment environments, all with the power of this specialized transformer.

### Configuration Management

Keep your settings in your build and release pipelines, let **PowerApps Solution Settings Transform** do the rest.


## Getting Started

1. Install the extension from the Azure DevOps Marketplace.
2. [Generate the deployment settings file](https://learn.microsoft.com/en-us/power-platform/alm/conn-ref-env-variables-build-tools#step-1-generate-the-deployment-settings-file)
3. Add variables into your build or release pipeline that match the SchemaName or LogicalName of your deployment settings file.
4. Enjoy a smoother and more streamlined Power Apps ALM experience.

### Bug Reports

If you find a bug or unexpected behavior, please [open a bug report](https://github.com/a1dancole/PowerApps-Solution-Settings-Transform/issues/new?assignees=&labels=bug&template=bug_report.md&title=).

### Feature Requests

If you have ideas for new features or enhancements, please [submit a feature request](https://github.com/a1dancole/PowerApps-Solution-Settings-Transform/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=).

## Contribute

Contribute to the improvement of our extension by submitting bug reports, feature requests, or even pull requests on our [GitHub repository](https://github.com/a1dancole/PowerApps-Solution-Settings-Transform).

## Compatibility Assurance

This extension is tailored specifically for JSON files generated by the **Power Apps CLI** create-settings command. It is designed to work seamlessly with JSON files that match the following structure:

```json
{
  "EnvironmentVariables": [
    {
      "SchemaName": "",
      "Value": ""
    }
  ],
  "ConnectionReferences": [
    {
      "LogicalName": "",
      "ConnectionId": "",
      "ConnectorId": ""
    }
  ]
}
```