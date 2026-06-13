import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovPanApi implements ICredentialType {
        name = 'N8nDevApisetuGovPanApi';

        displayName = 'Apisetu Gov Pan API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovPan/apisetu-gov-pan.svg', dark: 'file:../nodes/ApisetuGovPan/apisetu-gov-pan.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/pan/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/pan/v3',
                        description: 'The base URL of your Apisetu Gov Pan API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
