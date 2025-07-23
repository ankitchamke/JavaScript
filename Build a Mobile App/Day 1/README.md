# <img align="center" width="32" height="32" alt="icon" src="https://github.com/user-attachments/assets/aaa9c425-cb06-4fc4-8b0c-b4a2aa0d29b7" />  Leads Tracker - Chrome Extension

A simple and effective Chrome Extension to save and manage your leads (URLs). Store links manually or directly from your current browser tab. All saved leads are persisted using `localStorage`. Learned from [Scrimba](https://scrimba.com/home) as a part of [100 Days of Code](https://github.com/ankitchamke/100-days-of-code)


## 🚀 Features

- Save a link manually using an input field
- Save the current browser tab's URL with one click (requires Chrome extension context)
- View all saved leads as clickable links
- Double-click the "DELETE ALL" button to clear all saved leads
- Persistent storage using `localStorage`


## 🖼️ UI Preview
<img width="533" height="195" alt="image" src="https://github.com/user-attachments/assets/98215bce-f443-4954-ad06-0464b60325a1" />



## 🧠 How It Works

The app uses vanilla JavaScript to interact with DOM elements and Chrome APIs (in extension context) to fetch the current tab. Data is stored in `localStorage` and rendered dynamically.

### Main Functions:
- `render(leads)` – Renders a list of links from the `myLeads` array.
- `inputBtn` – Adds the manually entered URL to the list.
- `tabBtn` – Adds the current tab’s URL.
- `deleteBtn` – Clears all saved leads on double-click.

## 🧪 Installing This Chrome Extension From GitHub

This guide will help you install the Chrome extension manually from the GitHub repository.

### Step 1: Download or Clone the Repository

- Go to the GitHub repo page.
- Click the green **Code** button.
- Choose **Download ZIP** and save it on your computer.

### Step 2: Extract the ZIP (If downloaded)
- If you downloaded the ZIP, right-click the file and choose Extract All or use your favorite extraction tool.
- Remember the folder location where you extracted the files.

### Step 3: Open Chrome Extensions Page
- Open Google Chrome browser.
- Navigate to the extensions page by typing this in the address bar:

`chrome://extensions/`

Alternatively, open the menu (three dots) > More tools > Extensions.

<img width="1000" src="https://github.com/user-attachments/assets/145e7119-7127-4fd9-b2e1-d660f928b52d" />

### Step 4: Enable Developer Mode
- On the Extensions page, look for the Developer mode toggle on the top right.
- Turn it ON to enable loading unpacked extensions.
<img width="1000" src="https://github.com/user-attachments/assets/43d34983-3550-408f-a68e-2a34140633f0" />

### Step 5: Load the Extension Folder
- Click the Load unpacked button.
- Browse and select the folder where the extension files are located (the folder you cloned or extracted).
- Chrome will load the extension immediately.

### Step 6: Extension Installed!
- You should now see the extension icon appear on the Chrome toolbar.
- Your extension is ready to use!

<img width="1000" src="https://github.com/user-attachments/assets/25da6afe-6c26-4a2f-aefc-db3d2c1c8487" />

