"use client";

import { useEffect, useState } from "react";
import { Home, ShoppingCart, Users } from "lucide-react";
import { StatCard } from "@/components/stat-card";
import { RecentOrders } from "@/components/recent-orders";
import { MostPurchased } from "@/app/vendor/components/most-purchased";

export default function VendorDashboard() {
  const [stats, setStats] = useState<{
    totalIncome: number;
    totalOrders: number;
    vendorId: string;
    totalCustomers: number;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Get token from localStorage
        if (!token) throw new Error("Unauthorized: No token found");

        const response = await fetch("https://app.quickfoodshop.co.uk/v1/vendor-dashboard/stats", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in request
          },
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setStats(data.data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!stats) return <p className="text-center">Loading...</p>;

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen p-4 gap-4">
      <main className="flex-1 space-y-6">
        {/* Stats Section */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <StatCard
            title="Total Income"
            value={`$${stats.totalIncome.toLocaleString()}`}
            description="+15% This month"
            icon={Home}
            className="bg-blue-50"
          />
          <StatCard
            title="Total Orders"
            value={stats.totalOrders.toString()}
            icon={ShoppingCart}
            className="bg-green-50"
            seeMore
          />
          <StatCard
            title="Total Customers"
            value={stats.totalCustomers.toString()}
            icon={Users}
            className="bg-blue-50"
            seeMore
          />
        </div>

        {/* Recent Orders Section */}
        <div className="w-full">
          <RecentOrders />
        </div>
      </main>

      {/* Sidebar Section */}
      <aside className="w-full lg:w-[300px] space-y-6 mt-6 lg:mt-0">
        <MostPurchased />
      </aside>
    </div>
  );
}
