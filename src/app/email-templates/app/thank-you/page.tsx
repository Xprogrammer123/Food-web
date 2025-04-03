import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header with Logo */}
        <div className="flex justify-center py-4 bg-white">
          <Image src="/images/logo.png" alt="QuickFoodShop Logo" width={100} height={100} className="h-16 w-auto" />
        </div>

        {/* Main Content */}
        <div className="bg-green-50 p-6">
          <h1 className="text-2xl font-bold text-center">Thank You for Your Order!</h1>
          <p className="text-center mt-2 mb-1">Thank you for your order! We're excited to get it shipped to you.</p>
          <p className="text-center font-medium">
            This email confirms that we have received your order <span className="font-bold">#33258</span>.
          </p>

          {/* Order Summary */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-center">Order Summary:</h2>
            <p className="text-center text-sm text-gray-600 mb-4">5th Mar, 2024</p>

            <div className="mt-4">
              <h3 className="font-bold mb-2">Ordered Items</h3>

              {/* Jollof Rice */}
              <div className="flex items-center mb-4 border-b pb-4">
                <div className="w-16 h-16 rounded overflow-hidden mr-4">
                  <Image
                    src="/images/jollof-rice.png"
                    alt="Jollof Rice"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">Jollof Rice</h4>
                  <p className="text-sm">Price:</p>
                  <p className="text-sm">Quantity</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$20</p>
                  <p className="text-sm">1</p>
                </div>
              </div>

              {/* Coleslaw */}
              <div className="flex items-center">
                <div className="w-16 h-16 rounded overflow-hidden mr-4">
                  <Image
                    src="/images/coleslaw.png"
                    alt="Coleslaw"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">Coleslaw</h4>
                  <p className="text-sm">Price:</p>
                  <p className="text-sm">Quantity</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$20</p>
                  <p className="text-sm">1</p>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="mt-6 bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">Shipping Information:</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex">
                  <span className="w-1/2">• Estimated Shipping Date:</span>
                  <span className="w-1/2 text-right">12-03-2025</span>
                </li>
                <li className="flex">
                  <span className="w-1/2">• Estimated Delivery Date:</span>
                  <span className="w-1/2 text-right">12-03-2025</span>
                </li>
                <li className="flex">
                  <span className="w-1/2">• Shipping Carrier:</span>
                  <span className="w-1/2 text-right">QuickFoodShop (if available)</span>
                </li>
                <li className="flex">
                  <span className="w-1/2">• Tracking Number:</span>
                  <span className="w-1/2 text-right">#ADB1126</span>
                </li>
              </ul>
            </div>

            {/* Payment Information */}
            <div className="mt-6">
              <h3 className="font-bold mb-2">Payment Information:</h3>
              <div className="flex text-sm mb-1">
                <span className="w-1/2">Payment Method:</span>
                <span className="w-1/2 text-right">PayPal</span>
              </div>

              <div className="mt-4 space-y-1 text-sm">
                <div className="flex">
                  <span className="w-1/2 font-medium">Subtotal</span>
                  <span className="w-1/2 text-right">$40</span>
                </div>
                <div className="flex">
                  <span className="w-1/2 font-medium">Tax</span>
                  <span className="w-1/2 text-right">-</span>
                </div>
                <div className="flex font-bold">
                  <span className="w-1/2">Total</span>
                  <span className="w-1/2 text-right">$40</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-6 text-center text-sm">
              <p>If you have any questions, please contact us at</p>
              <p className="font-medium">info@quickfoodshop.com or call us at +44837467283</p>
            </div>

            {/* Signature */}
            <div className="mt-6 text-sm">
              <p>Sincerely,</p>
              <p className="font-medium">The QuickFoodShop Team</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between p-4 bg-white">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link href="/new-order">
            <Button className="bg-green-600 hover:bg-green-700">Next Template</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

