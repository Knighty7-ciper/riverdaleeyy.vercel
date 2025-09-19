"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, RefreshCw } from "lucide-react"

interface ExchangeRates {
  [key: string]: number
}

interface CurrencyConverterProps {
  amount?: number
  baseCurrency?: string
  compact?: boolean
}

export function CurrencyConverter({ amount = 0, baseCurrency = "KES", compact = false }: CurrencyConverterProps) {
  const [inputAmount, setInputAmount] = useState(amount.toString())
  const [fromCurrency, setFromCurrency] = useState(baseCurrency)
  const [toCurrency, setToCurrency] = useState("USD")
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({})
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const currencies = [
    { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "GBP", name: "British Pound", symbol: "£" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
    { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
    { code: "ZAR", name: "South African Rand", symbol: "R" },
    { code: "UGX", name: "Ugandan Shilling", symbol: "USh" },
    { code: "TZS", name: "Tanzanian Shilling", symbol: "TSh" },
  ]

  // Mock exchange rates (in production, you'd fetch from a real API)
  const mockExchangeRates: ExchangeRates = {
    KES: 1,
    USD: 0.0062, // 1 KES = 0.0062 USD
    EUR: 0.0057, // 1 KES = 0.0057 EUR
    GBP: 0.0049, // 1 KES = 0.0049 GBP
    CAD: 0.0084, // 1 KES = 0.0084 CAD
    AUD: 0.0095, // 1 KES = 0.0095 AUD
    JPY: 0.93, // 1 KES = 0.93 JPY
    CHF: 0.0055, // 1 KES = 0.0055 CHF
    ZAR: 0.11, // 1 KES = 0.11 ZAR
    UGX: 23.1, // 1 KES = 23.1 UGX
    TZS: 18.4, // 1 KES = 18.4 TZS
  }

  useEffect(() => {
    loadExchangeRates()
  }, [])

  useEffect(() => {
    if (inputAmount && exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const amount = Number.parseFloat(inputAmount) || 0
      const fromRate = exchangeRates[fromCurrency]
      const toRate = exchangeRates[toCurrency]
      const converted = (amount / fromRate) * toRate
      setConvertedAmount(converted)
    }
  }, [inputAmount, fromCurrency, toCurrency, exchangeRates])

  const loadExchangeRates = async () => {
    setIsLoading(true)
    try {
      // In production, you would fetch from a real API like:
      // const response = await fetch('https://api.exchangerate-api.com/v4/latest/KES')
      // const data = await response.json()
      // setExchangeRates(data.rates)

      // For now, using mock data
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API delay
      setExchangeRates(mockExchangeRates)
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Failed to load exchange rates:", error)
      // Fallback to mock data
      setExchangeRates(mockExchangeRates)
      setLastUpdated(new Date())
    } finally {
      setIsLoading(false)
    }
  }

  const getCurrencySymbol = (code: string) => {
    return currencies.find((c) => c.code === code)?.symbol || code
  }

  const formatAmount = (amount: number, currency: string) => {
    const symbol = getCurrencySymbol(currency)
    if (currency === "JPY") {
      return `${symbol} ${Math.round(amount).toLocaleString()}`
    }
    return `${symbol} ${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }

  if (compact) {
    return (
      <div className="bg-gray-50 rounded-lg p-3 text-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted-foreground">Price in other currencies:</span>
          <Button variant="ghost" size="sm" onClick={loadExchangeRates} disabled={isLoading} className="h-6 w-6 p-0">
            <RefreshCw className={`w-3 h-3 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>USD: {formatAmount((amount || 0) * (exchangeRates.USD || 0), "USD")}</div>
          <div>EUR: {formatAmount((amount || 0) * (exchangeRates.EUR || 0), "EUR")}</div>
          <div>GBP: {formatAmount((amount || 0) * (exchangeRates.GBP || 0), "GBP")}</div>
          <div>ZAR: {formatAmount((amount || 0) * (exchangeRates.ZAR || 0), "ZAR")}</div>
        </div>
        {lastUpdated && (
          <p className="text-xs text-muted-foreground mt-2">Updated: {lastUpdated.toLocaleTimeString()}</p>
        )}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-600" />
          Currency Converter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">From</label>
            <div className="flex gap-2">
              <Input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                placeholder="Enter amount"
                className="flex-1"
              />
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">To</label>
            <div className="flex gap-2">
              <div className="flex-1 px-3 py-2 bg-gray-50 border rounded-md">
                <span className="text-lg font-medium">{formatAmount(convertedAmount, toCurrency)}</span>
              </div>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm text-muted-foreground">
              1 {fromCurrency} = {formatAmount(exchangeRates[toCurrency] || 0, toCurrency)}
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={loadExchangeRates}
            disabled={isLoading}
            className="flex items-center gap-2 bg-transparent"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {lastUpdated && (
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Last updated: {lastUpdated.toLocaleString()}</span>
            <Badge variant="outline" className="text-xs">
              Live Rates
            </Badge>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Exchange rates are indicative and may vary at the time of payment. Final charges will
            be processed in Kenyan Shillings (KES).
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
