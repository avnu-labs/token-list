# Starknet Token List

In order to foster a safer and transparent trading environment while upholding accessibility, we have developed a community token lists. 
The validated token list presented here is built up with the Starknet community.

Our guiding design principles include: Safety, Accessibility, Neutrality, Collaboration, and Community Engagement.

The lists are available here:
- Mainnet: https://raw.githubusercontent.com/avnu-labs/starknet-token-list/src/starknet.tokenlist.json 
- Sepolia: https://raw.githubusercontent.com/avnu-labs/starknet-token-list/src/sepolia.tokenlist.json 

## Adding a token

To add a token please complete an [issue]().

A token should include `name`, `symbol`, `address`, `decimals` and `logoURI` attributes.

Example:
```json
{
  "name": "Starknet Token",
  "address": "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
  "symbol": "STRK",
  "decimals": 18,
  "logoUri": "https://assets.coingecko.com/coins/images/26433/standard/starknet.png"
}
```

## Validating a token

We advocate for discussion when new projects seek validation for inclusion in the list.

Priority for PRs is determined by the community — the more legitimacy you can demonstrate, the quicker your PR will be approved.
