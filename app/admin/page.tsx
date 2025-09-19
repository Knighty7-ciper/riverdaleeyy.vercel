"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Temporary admin credentials for testing
    if (email === "admin@riverdale.travel" && password === "riverdale2024") {
      localStorage.setItem("adminAuth", "true")
      router.push("/admin/dashboard")
    } else {
      setError("Invalid credentials. Use admin@riverdale.travel / riverdale2024")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Riverdale Admin</h1>
          <p className="text-gray-400">Secure access to travel management system</p>
        </div>

        {/* Login Form */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="bg-red-900/50 border border-red-700 rounded-lg p-3">
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@riverdale.travel"
                    className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
              <p className="text-gray-300 text-sm mb-2">Test Credentials:</p>
              <p className="text-gray-400 text-xs">Email: admin@riverdale.travel</p>
              <p className="text-gray-400 text-xs">Password: riverdale2024</p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">Riverdale Travel Admin Panel v1.0</p>
        </div>
      </div>
    </div>
  )
}
