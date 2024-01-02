# Blockchain Voting
li
# Project User Manual

## Application Access

1. Open the project folder in Visual Studio Code (VS Code).
2. Open the Terminal: In VS Code, navigate to the terminal window (usually at the bottom).
3. Install Node Modules:
    - If not installed, run: `npm install`
    - If issues occur, use: `npm install --f`
4. Start the Server: Once installed, run: `npm start`
5. Open the Application: In your web browser, go to: [http://localhost:5173/](http://localhost:5173/)

## MetaMask Setup

1. **Install MetaMask Extension:**
   - Download and install the MetaMask extension for your Chrome browser.

2. **Add Ganache Network:**
   - Open MetaMask extension.
   - Click on "Settings" > "Networks" > "Add Network".
   - Enter details:
       - Network Name: Ganache
       - RPC URL: [HTTP://127.0.0.1:7545](HTTP://127.0.0.1:7545)
       - Chain ID: 1337
   - Click "Save" to add the network.

3. **Connect to Ganache:**
   - Install Ganache software.
   - Open Ganache and click "Create Workspace".
   - Obtain MetaMask demo addresses and 100 ETH.

4. **Import Account:**
   - Copy MetaMask demo address from Ganache.
   - Go to MetaMask extension, click "Import Account".
   - Paste private key provided by Ganache.
   - Click "Import".

## Application Usage

1. **Connect MetaMask:**
   - When prompted on the landing page, click "Connect" to connect your MetaMask wallet.

2. **Admin Functions:**
   - Create Ballot: Click "Create Ballot" and enter details.
   - Add Candidates: Click "Add Choices" and enter candidate names.
   - Add Voters: Click "Add Voters," paste MetaMask address, and enter their name.

## Voter Functions

1. **Get Ballot:**
   - If added as a voter, click "Get Ballot".

2. **Cast Vote:**
   - Select preferred candidate and click "Vote".

3. **View Results:**
   - Once the admin clicks "End Vote," view the results.

## Additional Notes

- You can create multiple ballots, candidates, and voters.
- Only voters with a valid MetaMask address added by admin can participate.
- Ensure a stable internet connection for smooth operation.

## Troubleshooting

- Check the terminal window logs for errors.
- Refresh the browser page if needed.
- For assistance, consult project documentation or contact the developers:
  - [sumaiyasinja@gmail.com](mailto:sumaiyasinja@gmail.com)
  - [susmoysarkar3333@gmail.com](mailto:susmoysarkar3333@gmail.com)
