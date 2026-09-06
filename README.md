# Crypto Currency Converter revision ka lia ha

A React-based web application that takes a cryptocurrency (like Bitcoin) and calculates its value in fiat currencies (like USD). This project focuses on React state management, component reusability, and API integration.(AI likha haiga_)

Neeche ka pura AI se likha hu baad me dekhne ke liye kind of revision_
README ke end me things to fix/update/enhance mentioned h_

---

## 🧱 The Architecture (How the pieces fit together)

The application is broken down into three main, modular parts to keep the codebase clean and efficient:

### 1. The Custom Hook: `useCurrencyInfo.js` (The Brain)
A custom hook built to handle all external data fetching, keeping API requests out of the main UI code.
* Uses React's `useEffect` to reach out to an API whenever a base currency is selected.
* Fetches the current exchange rates for that specific currency.
* Returns the data object to the main application so it is ready to be used.

### 2. The UI Component: `InputBox.jsx` (The Lego Block)
A single, reusable UI component used for both the "From" and "To" input fields.
* Accepts dynamic "props" (variables) to change its data without needing duplicate code.
* Handles the number input on the left and the currency dropdown menu on the right. 
* Uses React's `useId` hook to automatically generate unique HTML IDs, keeping the component accessible and bug-free.

### 3. The Main App: `App.jsx` (The Boss)
The central component that manages the application's state (memory) and connects the UI to the data.
* Tracks the user's input amount (`amount`).
* Tracks the selected currencies in the dropdowns (`from` and `to`).
* Tracks the final calculated answer (`convertedAmount`).
* Takes the data from the custom hook, passes it down to the `InputBox` components, and executes the final math.

---

## ⚙️ The Workflow (How the data flows)

Here is exactly what happens when the application runs:

1. **Initialization:** `App.jsx` loads with default values (e.g., converting from Bitcoin to USD). 
2. **The Fetch:** Because a default currency is set, the `useCurrencyInfo` hook immediately downloads all the exchange rates for that currency.
3. **User Input:** When a number is typed into the top `InputBox`, the component detects the change and updates the state variables in `App.jsx`.
4. **Dropdown Options:** The main app extracts the currency names from the fetched API data using `Object.keys()` and sends them down to populate the dropdown menus.
5. **The Calculation:** Clicking the Convert button triggers a function in `App.jsx`. This function multiplies the user's input by the fetched exchange rate and sends the final answer down to the bottom `InputBox` to be displayed.

---

## 🛠️ Step-by-Step Creation

The project was built in five distinct phases:

**Step 1: API Integration (The Hook)**
Created the `useCurrencyInfo` hook first to ensure live data could be successfully fetched, parsed, and returned as a usable JavaScript object.

**Step 2: Building the UI (The Input Box)**
Designed the `InputBox` component to handle a number input and a `<select>` dropdown menu. It was built strictly with props to ensure it remained flexible and didn't rely on hardcoded data.

**Step 3: State Management (Setup)**
Set up the required `useState` variables in `App.jsx` to track the user input, the active currencies, and the final result.

**Step 4: Component Assembly**
Imported the `InputBox` into `App.jsx` and rendered it twice. Passed down the state variables (like "amount" and "convertedAmount") and the currency options to the respective boxes.

**Step 5: Conversion Logic**
Wrote the core `convert` function to handle the multiplication and wired it to a standard HTML button at the bottom of the application.

FUTURE KE LIYE-->
*SWAP feature not available only single way data flow.
*When i write anything in the amount for the first time and then i remove it there is a default "0" at the input state and after that anything u write will look like: "01", "01234" ,etc.
*AS YALL KNOW we have a habit of pressing enter_ to complete any task but here that doesn't work you HAVE to click on the convert button to make it work very annoying.. 



