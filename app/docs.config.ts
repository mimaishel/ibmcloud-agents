import type { Config } from "./types/config";

const config: Config = {
  siteName: {
    prefix: 'IBM Cloud',
    postfixBold: 'MCP Agents'
  },
  appUrl: 'http://localhost:5173/',
  githubUrl: 'https://github.com/ccmitchellusa/ibmcloud-agents/',
  routes: {
    '/': {
      breadcrumbLabel: 'Get Started',
      file: 'routes/home.tsx',
      page: 'home.mdx'
    },
    'agents/': {
      breadcrumbLabel: 'Try Each Agent',
      paths: {
        'base-agent/': {
          breadcrumbLabel: 'Base Agent',
          file: 'routes/base-agent.tsx',
          page: 'agents/base-agent.mdx'
        },
        'account-admin-agent/': {
          breadcrumbLabel: 'IBM Cloud Account Admin Agent',
          file: 'routes/ibm-cloud-account-admin-agent.tsx',
          page: 'agents/ibm-cloud-account-admin-agent.mdx'
        },
        'automation-agent/': {
          breadcrumbLabel: 'IBM Cloud Automation Agent',
          file: 'routes/ibm-cloud-automation-agent.tsx',
          page: 'agents/ibm-cloud-automation-agent.mdx'
        },
        'guide-agent/': {
          breadcrumbLabel: 'IBM Cloud Guide Agent',
          file: 'routes/ibm-cloud-guide-agent.tsx',
          page: 'agents/ibm-cloud-guide-agent.mdx'
        },
        'serverless-computing-agent/': {
          breadcrumbLabel: 'IBM Cloud Serverless Computing Agent',
          file: 'routes/ibm-cloud-serverless-computing-agent.tsx',
          page: 'agents/ibm-cloud-serverless-computing-agent.mdx'
        }
      }
    }
  },
  footer: {
    copyright: {
      image: '/ibm-cloud-logo.png',
      notice: 'Copyright © 2025 IBM Corporation.'
    },
    content: {
      'Documentation': [
        {
          text: 'Get Started',
          external: false,
          url: '',
        },
      ],
      'Resources': [
        {
          text: 'IBM Blog',
          external: true,
          url: '',
        },
        {
          text: 'Model Context Protocol',
          external: true,
          url: '',
        },
        {
          text: 'MCP Agents',
          external: true,
          url: '',
        }
      ],
      'More': [
        {
          text: 'GitHub',
          external: true,
          url: ''
        }
      ]
    }
  }
}


export default config;
