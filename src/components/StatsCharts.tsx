
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, LineChart, Pie, PieChart, Cell } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GDP_GROWTH_DATA, INFLATION_DATA, SECTOR_CONTRIBUTION_DATA } from "@/lib/mock-data";

const COLORS = ['#1A3E66', '#336699', '#4D80B3', '#6699CC', '#80B3E6'];

export function StatsCharts() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Visualisasi Data Utama</h2>
          <p className="text-muted-foreground">Tren makroekonomi dan struktur sektoral nasional</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Pertumbuhan Ekonomi (PDB)</CardTitle>
              <CardDescription>Pertumbuhan Tahunan (%) - Seri 2010</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={GDP_GROWTH_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                    />
                    <Bar dataKey="value" fill="#1A3E66" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indeks Harga Konsumen (Inflasi)</CardTitle>
              <CardDescription>Perubahan Bulanan Year-on-Year (%) 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={INFLATION_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 4]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#336699" strokeWidth={3} dot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Struktur PDB Menurut Lapangan Usaha</CardTitle>
              <CardDescription>Distribusi Persentase Kontribusi Sektoral (Q1 2024)</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center gap-8">
              <div className="h-[300px] w-full md:w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={SECTOR_CONTRIBUTION_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {SECTOR_CONTRIBUTION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                {SECTOR_CONTRIBUTION_DATA.map((item, index) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                    <div>
                      <div className="text-xs font-medium text-muted-foreground">{item.name}</div>
                      <div className="text-lg font-bold">{item.value}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
