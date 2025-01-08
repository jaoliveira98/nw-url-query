# URL Query Parameter
<img width="400" alt="Screenshot 2025-01-08 at 17 41 21" src="https://github.com/user-attachments/assets/b4331371-5383-4816-a9f6-decf4ed80392" />
<img width="1203" alt="Screenshot 2025-01-08 at 17 42 13" src="https://github.com/user-attachments/assets/4870e81b-3c77-4363-87bd-a0492667e982" />

## Overview
A Chrome extension that streamlines URL query parameter management for web development and testing environments. It provides a simple and efficient way to toggle between different domains and testing configurations by automatically appending query parameters to URLs.

## Installation Guide

### 1. Download the Extension
Clone this repository or download and extract the ZIP file

### 2. Open Chrome Extensions Page
1. Open Google Chrome
2. Click the three dots menu (⋮) in the top-right corner
3. Go to `Extensions` > `Manage Extensions`
4. Alternatively, type `chrome://extensions/` in your address bar

### 3. Enable Developer Mode
1. Locate the "Developer mode" toggle in the top-right corner
2. Switch it to ON

### 4. Load the Extension
1. Click the "Load unpacked" button that appears after enabling Developer mode
2. Navigate to the directory where you saved/cloned the extension
3. Select the folder containing the `manifest.json` file
4. Click "Select Folder"

### 5. Verify Installation
1. Look for the extension in your extensions list
2. Check for the extension icon in your Chrome toolbar (top-right)

## Features

### Domain Selection
Easily switch between different domains using a dropdown menu with predefined options.

### Google Console Integration
Enable or disable Google Console functionality with a simple switch, perfect for debugging and development tasks.

### Taboola Simulation
Test Taboola ads integrations across different domains.

### Quick Parameter Management
Add or remove URL parameters instantly without the need for manual URL editing.

## How It Works

The extension modifies the current tab's URL by adding or removing query parameters based on your selections. Here's an example of the transformation:

```plaintext
Original URL:
jpi-web-preprod.brighsites.co.uk

Modified URL:
jpi-web-preprod.brighsites.co.uk?domain=nationalworld.com&google_console=1
```
<img width="1648" alt="Screenshot 2025-01-08 at 17 36 33" src="https://github.com/user-attachments/assets/aa994f24-cbdb-464a-a1a7-b17364c8cdd3" />
