# API Contract & Firebase Structure 😎

> **Status:** Open for discussion / Work in Progress

## Current Dummy Data
For frontend and firmware testing purposes, we use the following JSON structure:

```json
{
  "bin": {
    "fillPercent": 42,       // Integer (0 - 100) - trash bin fill level percentage
    "isLidOpen": false,      // Boolean (true/false) - lid state flag
    "lastUpdated": 1717084800 // Epoch timestamp of the last sensor reading
  }
}
