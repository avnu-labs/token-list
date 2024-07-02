import Ajv from "ajv";
import addFormats from "ajv-formats"
import schema from "../src/tokenlist.schema.json"
import starknetTokenList from "../src/starknet.tokenlist.json"

const ajv = new Ajv({ verbose: true, allErrors: true });
addFormats(ajv);
const validator = ajv.compile(schema);

describe('Starknet token list', () => {
  it('should validate with success', () => {
    // When
    const result = validator(starknetTokenList)
    validator.errors && console.log(validator.errors)

    // Then
    expect(result).toBe(true)
  });

  it('should not contains duplicate addresses', () => {
    const addresses: { [address: string]: boolean } = {};
    starknetTokenList.tokens.forEach((token) => {
      expect(addresses[token.address]).toBe(undefined)
      addresses[token.address] = true
    })
  });

  it('should not contains duplicate symbols', () => {
    const symbols: { [address: string]: boolean } = {};
    starknetTokenList.tokens.forEach((token) => {
      expect(symbols[token.symbol]).toBe(undefined)
      symbols[token.symbol] = true
    })
  });

  it('should not contains duplicate names', () => {
    const names: { [address: string]: boolean } = {};
    starknetTokenList.tokens.forEach((token) => {
      expect(names[token.name]).toBe(undefined)
      names[token.name] = true
    })
  });

  it('should be sorted by symbol ASC', () => {
    // Given
    const list = [...starknetTokenList.tokens]

    // When
    const result = starknetTokenList.tokens.sort((a, b) => (a.symbol.toLowerCase() > b.symbol.toLowerCase() ? 1 : -1))

    // Expect
    expect(result).toStrictEqual(list)
  });
});
