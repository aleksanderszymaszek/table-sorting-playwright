# Playwright Testing Project

This project uses [Playwright](https://playwright.dev/) to perform automated end-to-end testing on web applications. Included is a utility function for extracting tabular data from a webpage.

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
git clone repo url
cd your-project-name
npm install
npx playwright install
```
In example.spec.js add url of the page needed then run:

```bash
npx playwright test
```

## Example output

```
[
  [ '1', 'Bitcoin\n\nBTC' ],
  [ '2', 'Ethereum\n\nETH' ],
  [ '3', 'Tether USDt\n\nUSDT' ],
  [ '4', 'BNB\n\nBNB' ],
  [ '5', 'XRP\n\nXRP' ],
  [ '6', 'USDC\n\nUSDC' ],
  [ '7', 'Solana\n\nSOL' ],
  [ '8', 'Cardano\n\nADA' ],
  [ '9', 'Dogecoin\n\nDOGE' ],
  [ '10', 'TRON\n\nTRX' ],
  [ '11', 'Toncoin\n\nTON' ],
  [ '12', 'Chainlink\n\nLINK' ],
  [ '13', 'Polygon\n\nMATIC' ],
  [ '14', 'Polkadot\n\nDOT' ],
  [ '15', 'Wrapped Bitcoin\n\nWBTC' ],
  [ '16', 'Litecoin\n\nLTC' ],
  [ '17', 'Dai\n\nDAI' ],
  [ '18', 'Shiba Inu\n\nSHIB' ],
  [ '19', 'Bitcoin Cash\n\nBCH' ],
  [ '20', 'Avalanche\n\nAVAX' ]
]
```
