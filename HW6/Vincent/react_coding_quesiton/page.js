import Image from "next/image";
import { Code1, Code1WithStorage } from "@/components/code1_component";
import ShoppingCart from "@/components/code2_component";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎯 React Components Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore HOC patterns and shopping cart functionality
          </p>
        </div>

        {/* Counter Demo Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Original Component */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                📱 Original Component
              </h2>
              <p className="text-gray-600 text-sm">
                Resets to initial value (5) on page refresh
              </p>
            </div>
            <Code1 init_vale={5} />
          </div>

          {/* HOC Enhanced Component */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                🔄 With localStorage HOC
              </h2>
              <p className="text-gray-600 text-sm">
                Remembers value across page refreshes
              </p>
            </div>
            <Code1WithStorage />
          </div>
        </div>

        {/* Shopping Cart Section */}
        <div className="mb-12">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}
