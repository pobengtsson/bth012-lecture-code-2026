import { describe, it, expect } from "vitest"
import { multiplyByTwo } from "../src/multiplyByTwo"

describe('multiplyByTwo', () => {
  describe('when multiplying with 5', () => {
    it('returns 10', () => {
      expect(multiplyByTwo(5)).toEqual(10)
    })
  })
  describe('when multiplying with 10', () => {
    it('returns 20', () => {
     expect(multiplyByTwo(10)).toEqual(20)
    })
  })
  describe('when multiplying with 0', () => {
    it('returns 0', () => {
      expect(multiplyByTwo(0)).toEqual(0)
    })
  })
})
